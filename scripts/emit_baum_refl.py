#!/usr/bin/env python3
"""Turn parse_refl.py's JSON for AA XVII and XVIII into the Baumgarten reader's data file.

    textutil -convert txt -output /tmp/erl17.txt   Textfiles/Vol17erlauterungenBaum.rtf
    textutil -convert txt -output /tmp/refl17.txt  Textfiles/Vol17reflexionenBaum.rtfd/TXT.rtf
    textutil -convert txt -output /tmp/refl18.txt  Textfiles/vol18reflexionenBaum.rtfd/TXT.rtf
    for f in erl17 refl17 refl18; do
      python3 scripts/parse_refl.py /tmp/$f.txt M --out /tmp/$f.json
    done
    python3 scripts/emit_baum_refl.py data/reflexionen-17-18-baumgarten.js \
        --erl17 /tmp/erl17.json --refl17 /tmp/refl17.json --refl18 /tmp/refl18.json \
        --met data/metaphysica-17.js

Read the report. It is the only check that a change to the RTFs or the regexes
has not quietly lost entries or mis-anchored them.

How a Reflexion gets its §
--------------------------
Four ways, recorded on every entry as `src`, in descending order of authority.
The rule of the house is that the reader must be able to tell which:

  locus  the entry's own AA locus note says so — `ZuM §. 11`, `Neben M § 42-44`
  block  the enclosing AA block header says so — `Possibile. M § 7-18.`
  page   the entry is located to a page of Kant's handbook (`M 392'.`) and that
         page carries §§. This is not a guess: the AA prints Baumgarten's own
         1757 pagination in the text as `[392]`, so the §§ on a page are
         attested from both sides. It is still weaker than a locus note, since
         it names every § on the page rather than the one Kant wrote against.
  none   nothing locates it; the § is interpolated from its neighbours and
         `interp` is set.

The three files differ in what they offer. The Erläuterungen printed beneath the
text in AA XVII have no blocks at all — each note sits against its own § — while
AA XVII's Reflexionen proper and the whole of AA XVIII are gathered into blocks
headed `Topic. M § a-b.`
"""
import argparse
import json
import re
from collections import Counter, defaultdict

# Not every Reflexion in these volumes is on Baumgarten. The siglum says which
# handbook Kant was writing in, and only `M` is the Metaphysica.
HANDBOOKS = {
    'M':  'Baumgarten, Metaphysica',
    'Th': 'Eberhard, Vorbereitung zur natürlichen Theologie',   # Refl. 6206-6310
    'K':  'Kants Handexemplar, unspecified',
}
# `M 392'.` — Arabic pages are the text; `M XXXI.` — Roman pages are the front
# matter, the prefaces and the Synopsis, which precede § 1.
SIG_RE = re.compile(r"\b(M|Th|K)\s+(\d+|[IVXLC]+)\s*('|’)?")
# `L Bl. D 17.` is a *loses Blatt*, a loose sheet — not Meier's siglum L, which
# is what it looks like coming from the AA XVI pipeline.
LOOSE_SHEET = re.compile(r'\bL\s*Bl\.|\bLoses?\s+Blatt')


def load_pages(met_path):
    """§§ printed on each page of the 1757 edition, from the Metaphysica data."""
    by_page = defaultdict(list)
    for line in open(met_path, encoding='utf-8'):
        line = line.strip().rstrip(',')
        if not (line.startswith('{"num":') and '"section"' in line):
            continue
        p = json.loads(line)
        a = p.get('ed')
        if not a:
            continue
        for pg in range(a, p.get('edEnd', a) + 1):
            by_page[pg].append(p['num'])
    return {k: sorted(set(v)) for k, v in by_page.items()}


def locate(sigla):
    """Which handbook an entry is written in, and where in it.

    Returns {hb, pg, roman}. `hb` is None when the sigla names no handbook we
    know — a loose sheet, Kant's Tetens, or nothing parsed at all — and those
    entries are never attached to a Baumgarten §.
    """
    out = {'hb': None, 'pg': None, 'roman': False, 'blatt': False}
    if not sigla:
        return out
    if LOOSE_SHEET.search(sigla):
        out['blatt'] = True
        return out
    m = SIG_RE.search(sigla)
    if not m:
        return out
    out['hb'] = m.group(1)
    if m.group(2).isdigit():
        out['pg'] = int(m.group(2))
    else:
        out['roman'] = True
        out['pg'] = m.group(2)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('out')
    ap.add_argument('--erl17', required=True)
    ap.add_argument('--refl17', required=True)
    ap.add_argument('--refl18', required=True)
    ap.add_argument('--met', required=True)
    a = ap.parse_args()

    pages = load_pages(a.met)

    sources = [
        (a.erl17, 17, 'erl', 'Erläuterungen in Kants Handexemplar, printed beneath the text'),
        (a.refl17, 17, 'refl', 'Reflexionen zur Metaphysik, erster Theil'),
        (a.refl18, 18, 'refl', 'Reflexionen zur Metaphysik, zweiter Theil'),
    ]

    groups, gidx, entries = [], {}, []
    rep = Counter()

    for path, vol, part, label in sources:
        raw = json.load(open(path, encoding='utf-8'))
        rep[f'file:{part}{vol}'] = len(raw)
        for x in raw:
            key = (vol, part, x['group'])
            if key not in gidx:
                gidx[key] = len(groups)
                groups.append({
                    'vol': vol, 'part': part, 'label': label,
                    'paras': x['groupParas'], 'topic': x['groupTopic'],
                    'raw': (x['groupRaw'] or '')[:220],
                    'phaseRange': x['groupPhaseRange'],
                })
            g = gidx[key]

            w = locate(x['sigla'])
            on_baumgarten = (w['hb'] == 'M')

            loc = x['locus']
            if loc:
                loc = {k: v for k, v in loc.items() if v not in (None, [], '')}

            # ── anchor the entry, most authoritative source first ──
            # Only what Kant wrote in the Metaphysica itself gets a § at all.
            # An entry in Eberhard, on a loose sheet, or on the Roman-numbered
            # front matter has no § to be attached to, and inventing one would
            # file 550-odd notes against passages they say nothing about.
            if not on_baumgarten or w['roman']:
                paras, src = [], 'none'
            elif loc and loc.get('paras'):
                paras, src = loc['paras'], 'locus'
            elif x['groupParas']:
                paras, src = x['groupParas'], 'block'
            elif isinstance(w['pg'], int) and pages.get(w['pg']):
                paras, src = pages[w['pg']], 'page'
            else:
                paras, src = [], 'none'

            rec = {
                'r': x['r'],
                'vol': vol,
                'part': part,
                'ph': x['phases'],
                'phRaw': x['phaseRaw'],
                'aa': x['aa'],
                'aaEnd': x['aaEnd'] if x['aaEnd'] != x['aa'] else None,
                'sig': x['sigla'],
                'hb': w['hb'],
                'pg': w['pg'],
                'loc': loc,
                'paras': paras,
                'src': src,
                'grp': g,
                'text': x['text'],
            }
            if w['roman'] and on_baumgarten:
                # Kant writing on the prefaces and the Synopsis, which precede § 1
                rec['front'] = True
            if w['blatt']:
                rec['blatt'] = True
            if w['hb'] and not on_baumgarten:
                rec['other'] = HANDBOOKS.get(w['hb'], w['hb'])
            if x.get('proseDating'):
                rec['prose'] = True
            if x.get('vacat'):
                rec['vacat'] = True
            entries.append(rec)

    # ── interpolate what is still unanchored, and say so ──
    # Interpolate only for entries that *are* in the Metaphysica but whose § the
    # AA does not state. Front matter, loose sheets and the other handbooks keep
    # no § at all; the panel gives them their own place instead of pretending
    # they belong to § 1.
    known = [(i, e['paras'][0]) for i, e in enumerate(entries) if e['paras']]
    for i, e in enumerate(entries):
        if e['paras'] or e.get('front') or e.get('blatt') or e.get('other'):
            continue
        if e.get('hb') != 'M':
            continue
        before = [p for j, p in known if j < i]
        after = [p for j, p in known if j > i]
        guess = before[-1] if before else (after[0] if after else None)
        if guess:
            e['paras'], e['interp'] = [guess], True

    entries = [{k: v for k, v in e.items() if v not in (None, [], {})} for e in entries]

    by_para = defaultdict(list)
    for i, e in enumerate(entries):
        for p in e.get('paras', []):
            by_para[p].append(i)

    nums = [e['r'] for e in entries]
    src = Counter(e['src'] for e in entries)
    J = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))

    hdr = f"""/* ─────────────────────────────────────────────────────────────────────────────
   Kant's Reflexionen on A. G. Baumgarten's Metaphysica.
   Academy Edition XVII and XVIII. Machine-extracted from the transcriptions in
   Textfiles/ by scripts/parse_refl.py and scripts/emit_baum_refl.py — do not
   hand-edit; corrections belong in those scripts.

   Reflexionen {min(nums)}–{max(nums)} ({len(entries)} entries), attached to
   {len(by_para)} of the Metaphysica's §§. Three corpora, kept distinct by `vol`
   and `part`:

     vol 17, part 'erl'   {rep['file:erl17']:5}  the Erläuterungen printed beneath the text
     vol 17, part 'refl'  {rep['file:refl17']:5}  Reflexionen zur Metaphysik, erster Theil
     vol 18, part 'refl'  {rep['file:refl18']:5}  Reflexionen zur Metaphysik, zweiter Theil

   How each entry got its § is recorded in `src`, per the repository rule that
   inferred data must never present as attested:

     'locus'  the entry's own AA locus note ({src['locus']} entries)
     'block'  the enclosing AA block header, `Possibile. M § 7-18.` ({src['block']})
     'page'   the page of Kant's handbook it is written on, matched to the §§
              the 1757 edition prints there ({src['page']}). Attested from both
              sides, but weaker than a locus note: it names every § on the page,
              not the one Kant wrote against.
     'none'   nothing locates it ({src['none']}); `interp` is then set.

   Entry fields
     r      Reflexion number (Adickes' numbering)
     vol    17 or 18; part 'erl' or 'refl'
     ph     phase symbols, in the order the AA prints them
     phRaw  the AA's phase expression verbatim, query marks and parentheses
            included — the uncertainty is Adickes' own
     aa     AA page the entry starts on; aaEnd the page it ends on
     sig    Kant's own copy, verbatim ("M 392'.")
     pg     the handbook page parsed out of `sig`, when it is one of the text's
     loc    the locus note, verbatim in loc.raw plus a parse (kind, satz, nr,
            part, lemma) — see the Meier data file for the vocabulary
     front  true where Kant is writing on the prefaces or the Synopsis, which
            precede § 1 and are anchored there for want of anywhere better
     blatt  true for a loses Blatt, a loose sheet rather than the handbook.
            Note `L Bl.` here abbreviates that, and is *not* Meier's siglum L.
     paras  every § the entry is filed under
     grp    index into REFLM_GROUPS
     text   the Reflexion itself; \\n separates the AA's lines
   ───────────────────────────────────────────────────────────────────────────── */

"""

    with open(a.out, 'w', encoding='utf-8') as f:
        f.write(hdr)
        f.write('const REFLM_META = ' + json.dumps({
            'work': 'A. G. Baumgarten, Metaphysica',
            'volumes': [17, 18], 'siglum': 'M',
            'count': len(entries), 'rMin': min(nums), 'rMax': max(nums),
            'paras': len(by_para),
        }, ensure_ascii=False) + ';\n\n')
        f.write('const REFLM_GROUPS = [\n')
        for g in groups:
            f.write(' ' + J(g) + ',\n')
        f.write('];\n\n')
        f.write('/* one line per Reflexion, in AA order */\n')
        f.write('const REFLM_ENTRIES = [\n')
        for e in entries:
            f.write(' ' + J(e) + ',\n')
        f.write('];\n\n')
        f.write('/* § → indices into REFLM_ENTRIES */\n')
        f.write('const REFLM_BY_PARA = '
                + J({str(k): v for k, v in sorted(by_para.items())}) + ';\n\n')
        f.write('/* §§ carrying at least one Reflexion, ascending */\n')
        f.write('const REFLM_PARAS = ' + J(sorted(by_para.keys())) + ';\n')

    # ── report ──
    print('wrote', a.out)
    print(f"  entries            {len(entries)}  (Refl. {min(nums)}–{max(nums)})")
    for _, vol, part, _ in sources:
        n = sum(1 for e in entries if e['vol'] == vol and e['part'] == part)
        print(f"    vol {vol} {part:5}      {n}")
    print(f"  groups             {len(groups)}")
    print(f"  §§ with entries    {len(by_para)} of 804 in AA XVII")
    print("  § source           " + ', '.join(f'{k} {v}' for k, v in src.most_common()))
    print(f"  interpolated       {sum(1 for e in entries if e.get('interp'))}")
    print(f"  on the front matter{sum(1 for e in entries if e.get('front')):5}")
    print(f"  loose sheets       {sum(1 for e in entries if e.get('blatt'))}")
    kinds = Counter(e['loc']['kind'] for e in entries if e.get('loc'))
    print("  locus kinds        " + ', '.join(f'{k} {v}' for k, v in kinds.most_common()))
    print(f"  with a lemma       {sum(1 for e in entries if e.get('loc', {}).get('lemma'))}")

    # Most unanchored entries are unanchored on purpose — they are not in the
    # Metaphysica's numbered text at all. Only a note written in the handbook
    # itself, on a page that carries §§, ought to have found one.
    homeless = [e['r'] for e in entries if not e.get('paras')
                and not (e.get('front') or e.get('blatt') or e.get('other'))]
    print(f"  in another handbook {sum(1 for e in entries if e.get('other'))}"
          + '  (' + ', '.join(f'{k}: {v}' for k, v in
                              Counter(e['other'] for e in entries
                                      if e.get('other')).most_common()) + ')')
    print(f"  deliberately §-less {sum(1 for e in entries if not e.get('paras'))}"
          "  (front matter, loose sheets, other handbooks)")

    problems = 0
    nophase = [e['r'] for e in entries if not e.get('ph') and not e.get('prose')
               and not e.get('vacat')]
    notext = [e['r'] for e in entries if not e.get('text') and not e.get('vacat')]
    dup = [r for r, c in Counter(nums).items() if c > 1]
    for label, items in (('no phase symbols and no prose dating', nophase),
                         ('no text', notext),
                         ('in the Metaphysica but no § found', homeless),
                         ('duplicate Reflexion numbers', dup)):
        if items:
            problems += len(items)
            print(f'  ! {label}: {len(items)}  '
                  + ', '.join(str(x) for x in items[:10])
                  + (' …' if len(items) > 10 else ''))
    missing = sorted(set(range(min(nums), max(nums) + 1)) - set(nums))
    if missing:
        print(f'  · numbers absent from the run: {len(missing)}  '
              + ', '.join(str(x) for x in missing[:10])
              + (' …' if len(missing) > 10 else ''))
    print('  ' + ('clean' if not problems else f'{problems} thing(s) to look at'))


if __name__ == '__main__':
    main()
