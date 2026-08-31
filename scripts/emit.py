#!/usr/bin/env python3
"""Turn parse_refl.py's JSON into the .js data file the readers load."""
import argparse
import json
from collections import defaultdict

HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   Kant's handschriftliche Bemerkungen (Reflexionen) on {work}
   Academy Edition vol. {vol}. Machine-extracted from the transcription in
   Textfiles/{src} by scripts/parse_refl.py — do not hand-edit; regenerate.

   Reflexionen {rmin}–{rmax} ({count} entries), attached to {paras} of the
   work's §§.

   Anchoring provenance is recorded on every entry, per the repository rule that
   inferred data must never present as attested:

     src: 'locus'  the entry carries its own AA locus note ({n_locus} entries)
     src: 'group'  the § comes from the enclosing AA §-range header ({n_group})
     src: 'none'   no § stated anywhere; `interp` is then true ({n_none})

   `interp: true` marks a § this script inferred from the surrounding entries.
   `front: true` marks a note on the work's front matter, which precedes § 1 and
   is anchored there for want of anywhere better.

   Entry fields
     r      Reflexion number (Adickes' numbering)
     ph     phase symbols, in the order the AA prints them
     phRaw  the AA's phase expression verbatim, with its query marks and
            parentheses ("κ? (λ?) (ξ−ο?) (η?) ρ??") — the uncertainty is
            Adickes' own and is not to be flattened away
     prose  true where the AA gives a prose dating instead of phase symbols
     vacat  true for a number the AA records as Vacat. (no text)
     aa     AA {vol} page the entry starts on; aaEnd the page it ends on
     sig    Kant's own copy: sheet/page of the handbook, verbatim ("L 5'.")
     loc    the locus note, verbatim in loc.raw plus a parse:
              kind   where on the page: zu | gegenüber | neben | zwischen |
                     über | unter | nach | in
              satz   sentence numbers within the § the note attaches to
              nr     numbered item within the §
              part   Anfang | Schluss | Schlusssatz | Ende | Mitte | Überschrift
              lemma  the exact words of Meier being annotated, where the AA
                     quotes them ("»cognitio rationalis«")
     paras  every § the entry is filed under
     grp    index into REFL_GROUPS
     text   the Reflexion itself; \\n separates the AA's lines
   ───────────────────────────────────────────────────────────────────────────── */

"""


def emit(path, out, work, vol, src, siglum):
    e = json.load(open(path, encoding='utf-8'))

    groups, gidx = [], {}
    for x in e:
        g = x['group']
        if g not in gidx:
            gidx[g] = len(groups)
            groups.append({
                'paras': x['groupParas'],
                'topic': x['groupTopic'],
                'jaesche': x['groupJaesche'],
                'raw': x['groupRaw'],
                'phaseRange': x['groupPhaseRange'],
            })
        x['_g'] = gidx[g]

    entries = []
    for x in e:
        loc = x['locus']
        if loc:
            loc = {k: v for k, v in loc.items() if v not in (None, [], '')}
        rec = {
            'r': x['r'],
            'ph': x['phases'],
            'phRaw': x['phaseRaw'],
            'aa': x['aa'],
            'aaEnd': x['aaEnd'] if x['aaEnd'] != x['aa'] else None,
            'sig': x['sigla'],
            'loc': loc,
            'paras': x['paras'],
            'src': x['paraSource'],
            'grp': x['_g'],
            'text': x['text'],
        }
        if x['interpolated']:
            rec['interp'] = True
        if x.get('frontMatter'):
            rec['front'] = True
        if x.get('proseDating'):
            rec['prose'] = True
        if x.get('vacat'):
            rec['vacat'] = True
        entries.append({k: v for k, v in rec.items() if v not in (None, [], {})})

    by_para = defaultdict(list)
    for i, rec in enumerate(entries):
        for p in rec.get('paras', []):
            by_para[p].append(i)

    nums = [x['r'] for x in e]
    hdr = HEADER.format(
        work=work, vol=vol, src=src,
        rmin=min(nums), rmax=max(nums), count=len(entries),
        paras=f"{len(by_para)} of 563" if vol == 16 else f"{len(by_para)}",
        n_locus=sum(1 for x in e if x['paraSource'] == 'locus'),
        n_group=sum(1 for x in e if x['paraSource'] == 'group'),
        n_none=sum(1 for x in e if x['paraSource'] == 'none'),
    )

    J = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))
    with open(out, 'w', encoding='utf-8') as f:
        f.write(hdr)
        f.write('const REFL_META = ' + json.dumps({
            'work': work, 'volume': vol, 'siglum': siglum,
            'count': len(entries), 'rMin': min(nums), 'rMax': max(nums),
            'source': 'Textfiles/' + src,
        }, ensure_ascii=False) + ';\n\n')
        f.write('const REFL_GROUPS = [\n')
        for g in groups:
            f.write(' ' + J(g) + ',\n')
        f.write('];\n\n')
        f.write('/* one line per Reflexion, in AA order */\n')
        f.write('const REFL_ENTRIES = [\n')
        for rec in entries:
            f.write(' ' + J(rec) + ',\n')
        f.write('];\n\n')
        f.write('/* § → indices into REFL_ENTRIES */\n')
        f.write('const REFL_BY_PARA = ' + J({str(k): v for k, v in sorted(by_para.items())}) + ';\n\n')
        f.write('/* §§ that carry at least one Reflexion, ascending */\n')
        f.write('const REFL_PARAS = ' + J(sorted(by_para.keys())) + ';\n')
    print('wrote', out)
    print('  entries', len(entries), 'groups', len(groups), 'paras', len(by_para))


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('json')
    ap.add_argument('out')
    ap.add_argument('--work', required=True)
    ap.add_argument('--vol', type=int, required=True)
    ap.add_argument('--src', required=True)
    ap.add_argument('--siglum', required=True)
    a = ap.parse_args()
    emit(a.json, a.out, a.work, a.vol, a.src, a.siglum)
