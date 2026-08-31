#!/usr/bin/env python3
"""Extract Kant's Reflexionen from an Academy Edition RTF transcription.

Produces the REFLEXIONEN data shape used by the Meier and Baumgarten readers:

    { "<para>": [ { r, phase, phaseRaw, aa, locus:{raw,kind,satz,nr,part,lemma},
                    paras, interpolated, text }, ... ] }

Run:  python3 parse_refl.py <plain-text-file> <siglum> --out out.json
where <siglum> is "L" for Meier's Auszug (AA XVI) or "M" for Baumgarten's
Metaphysica (AA XVII).
"""
import argparse
import json
import re
import sys
from collections import Counter

# ── normalisation ────────────────────────────────────────────────────────────

def load(path):
    raw = open(path, encoding='utf-8').read()
    raw = raw.replace('\u2028', '\n')   # RTF soft line breaks
    raw = raw.replace('\xa0', ' ')       # non-breaking spaces
    # a separator and the following entry header sometimes share a line
    raw = re.sub(r'_{5,}', '\n__________\n', raw)
    # an entry's last line sometimes carries the next group's ==== marker
    raw = re.sub(r'={5,}', '\n===========\n', raw)
    # drop the scratch appendix after the final group marker ('test1'…'test19')
    m = re.search(r'\n===========\n\s*test1\b', raw)
    if m:
        raw = raw[:m.start()]
    return raw


PAGE_RE  = re.compile(r'^\s*―\s*(\d+)\s*―\s*$')
GROUP_RE = re.compile(r'^\s*={5,}\s*$')
ENTRY_RE = re.compile(r'^\s*(\d{3,4})\s*\.\s*(.*)$')
SEP_RE   = re.compile(r'^\s*_{5,}\s*$')


# ── group headers: "L §. 17. 18." / "L §. 19-35." ────────────────────────────

def parse_para_list(s):
    """Turn '17. 18.' or '19-35.' or '168 (Satz 1 und 2).' into [17,18] / [19..35]."""
    out = []
    for tok in re.findall(r'\d+\s*[-–]\s*\d+|\d+', s):
        if re.search(r'[-–]', tok):
            a, b = re.split(r'[-–]', tok)
            a, b = int(a), int(b)
            if 0 < b - a < 200:
                out.extend(range(a, b + 1))
            else:
                out.append(a)
        else:
            out.append(int(tok))
    return sorted(set(out))


def parse_group_header(block, siglum):
    """block = list of lines between the ==== marker and the first ____ separator."""
    g = {'paras': [], 'topic': None, 'jaesche': None, 'phaseRange': None,
         'raw': ' '.join(l.strip() for l in block if l.strip())}
    for line in block:
        line = line.strip()
        if not line:
            continue
        m = re.match(r'^\[?' + siglum + r'\s*§+\.?\s*(.+)$', line) or \
            re.search(r'\[' + siglum + r'\s*§+\.?\s*([^\]]+)\]', line)
        if m:
            # cut off at a trailing bracket/roman-volume reference
            head = re.split(r'\[|\bIX\b|\bXVI\b', m.group(1))[0]
            g['paras'] = parse_para_list(head)
            continue
        m = re.match(r'^\[(.+?)\.?\]', line)
        if m:
            g['topic'] = m.group(1).strip()
            continue
        m = re.match(r'^(IX|XVI{0,2}|IV|V)\s+([\d\-–,\s]+)\.?$', line)
        if m:
            g['jaesche'] = 'AA ' + {'IX': '9'}.get(m.group(1), m.group(1)) + ':' + m.group(2).strip()
            continue
        m = re.search(r'Phase\s*(.+?):\s*ca\.\s*([\d\-–]+)', line)
        if m:
            g['phaseRange'] = {'phases': m.group(1).strip(), 'years': m.group(2).strip()}
    return g


# ── entry headers: "1716. β1. L 5'. ZuL §. 15 Anfang:" ───────────────────────

# The locus note may sit on the header line or on its own line(s) shortly after.
# The AA uses a fixed vocabulary of manuscript-placement prepositions, each of
# which says something different about where on the page Kant wrote the note.
LOCUS_KINDS = r'(?:Zu|Gegen[üu]ber|Neben|Zwischen|[ÜU]ber|Unter|Nach|In)'

_LOCUS_CORE = (
    r'(?P<kind>' + LOCUS_KINDS + r')'
    r'\s*(?:von|dem|des|der)?\s*L?'
    r'\s*§+\.?\s*'
    r'(?P<nums>\d+[a-z]?(?:\s*[-–]\s*\d+)?(?:\s*\.\s*\d+[a-z]?)*)'
    r'(?P<qual>[^\n:]{0,80}?)'
)

# mid-line form, terminated by a colon
LOCUS_INLINE_RE = re.compile(_LOCUS_CORE + r'\s*:', re.I)
# end-of-line form, colon optional
LOCUS_RE = re.compile(_LOCUS_CORE + r'\s*:?\s*$', re.I)


KIND_MAP = [
    ('gegenüber', r'^gegen[üu]ber'),   # on the facing (interleaved) page
    ('neben',     r'^neben'),          # beside it, in the same margin
    ('zwischen',  r'^zwischen'),       # between the printed lines / between §§
    ('über',      r'^[üu]ber'),        # above the line
    ('unter',     r'^unter'),          # below the line
    ('nach',      r'^nach'),           # after the passage
    ('in',        r'^in'),             # within the printed text
    ('zu',        r'^zu'),             # attached to, placement unspecified
]


def classify_kind(k):
    k = k.strip().lower().replace(' ', '')
    for name, pat in KIND_MAP:
        if re.match(pat, k):
            return name
    return 'zu'


def parse_locus(text):
    """Find a locus note in `text`; return (locus dict, leftover text) or (None, text)."""
    m = LOCUS_INLINE_RE.search(text)
    if not m:
        m = LOCUS_RE.search(text)
    if not m:
        return None, text

    qual = m.group('qual').strip(' .,')
    loc = {
        'raw': m.group(0).strip().rstrip(':').strip(),
        'kind': classify_kind(m.group('kind')),
        'paras': parse_para_list(m.group('nums')),
        'suffix': None, 'satz': [], 'nr': [], 'part': None, 'lemma': None,
    }
    sfx = re.search(r'\d+([a-z])\b', m.group('nums'))
    if sfx:
        loc['suffix'] = sfx.group(1)

    q = qual
    lem = re.search(r'»(.+?)«', q)
    if lem:
        loc['lemma'] = lem.group(1)
        q = q.replace(lem.group(0), ' ')
    sz = re.search(r'Satz\s*([\d\s,und\-–]+)', q)
    if sz:
        loc['satz'] = parse_para_list(sz.group(1))
        q = q.replace(sz.group(0), ' ')
    nr = re.search(r'Nr\.?\s*([\d\s,und\-–]+)', q)
    if nr:
        loc['nr'] = parse_para_list(nr.group(1))
        q = q.replace(nr.group(0), ' ')
    for word in ('Schlusssatz', 'Schluss', 'Anfang', 'Ende', 'Mitte', 'Überschrift'):
        if re.search(word, q, re.I):
            loc['part'] = word
            break
    return loc, (text[:m.start()] + text[m.end():])


PROSE_DATE_RE = re.compile(
    r'^\s*((?:[ΑA]us\s+verschiedenen\s+Zeiten[^.]*|[\d]{2}\s*[-–]\s*[\d]{2}er\s+Jahre'
    r'|[\d]{2}er\s+Jahre)[^.]*)\.\s*(.*)$', re.I)

PHASE_CHARS = 'α-ωµϕ'   # µ = U+00B5 micro sign, ϕ = U+03D5, both as transcribed
PHASE_HEAD_RE = re.compile(
    r'^(?P<phases>[^.,]*?[' + PHASE_CHARS + r'][^.,]*?)\s*[.,]\s*(?P<rest>.*)$'
)


def parse_entry_header(rest, siglum):
    """rest = everything after 'NNNN. ' on the header line."""
    out = {'phaseRaw': None, 'phases': [], 'siglaRaw': None, 'locus': None,
           'trailing': '', 'proseDating': False, 'vacat': False}

    locus, rest2 = parse_locus(rest)
    out['locus'] = locus
    rest = rest2

    if re.match(r'^\s*Vacat\.?\s*$', rest, re.I):
        out['vacat'] = True
        return out

    pm = PROSE_DATE_RE.match(rest)
    if pm:
        # the AA gives a prose spread instead of phase symbols
        out['phaseRaw'] = pm.group(1).strip()
        out['proseDating'] = True
        rest = pm.group(2)

    if not PHASE_HEAD_RE.match(rest):
        sm2 = re.match(r'^(?P<phases>[^.]*?[' + PHASE_CHARS + r'][^.]*?)'
                       r'\s+(?P<rest>[A-Z]\s*[\dIVXLC][^\n]*)$', rest)
        if sm2:
            rest = sm2.group('phases').strip() + '. ' + sm2.group('rest')

    m = PHASE_HEAD_RE.match(rest)
    if m:
        if out['phaseRaw'] is None:
            out['phaseRaw'] = m.group('phases').strip()
        rest = m.group('rest')
    # "γ? η? κ? λ? ν−ξ?? L 3'" — the phase expression and the sigla share a
    # terminating period, so peel a trailing sigla back off into `rest`.
    if out['phaseRaw']:
        peel = re.match(r'^(?P<ph>.*?[' + PHASE_CHARS + r'][^A-Z]*?)'
                        r'\s+(?P<sig>[A-Z]\s*[\dIVXLC].*)$', out['phaseRaw'])
        if peel:
            out['phaseRaw'] = peel.group('ph').strip()
            rest = peel.group('sig').strip() + '. ' + rest

    out['phases'] = re.findall(r'[' + PHASE_CHARS + r']\d?', out['phaseRaw'] or '')
    seen = set()
    out['phases'] = [x for x in out['phases'] if not (x in seen or seen.add(x))]

    # sigla: "L 5'. 8." or "M 190d. E II 421."
    sm = re.match(r'^((?:[A-Z][^\n]{0,40}?\.\s*)+)(.*)$', rest)
    if sm:
        out['siglaRaw'] = sm.group(1).strip()
        out['trailing'] = sm.group(2).strip()
    else:
        out['trailing'] = rest.strip()
    return out


# ── main pass ────────────────────────────────────────────────────────────────

def parse(path, siglum):
    lines = load(path).split('\n')

    groups = []          # {header:…, entries:[…]}
    cur_group = None
    page = None
    i = 0
    n = len(lines)

    # split the document into ==== delimited groups first
    seg_starts = [i for i, l in enumerate(lines) if GROUP_RE.match(l.strip())]
    # a leading segment before the first marker
    bounds = [0] + [s + 1 for s in seg_starts] + [n]
    segments = [lines[bounds[k]:bounds[k + 1] - (1 if k + 1 < len(bounds) - 1 else 0)]
                for k in range(len(bounds) - 1)]

    for seg in segments:
        if not any(l.strip() for l in seg):
            continue
        # header block = up to the first ____ separator or first entry header
        hdr_end = 0
        for j, l in enumerate(seg):
            if SEP_RE.match(l.strip()) or ENTRY_RE.match(l):
                hdr_end = j
                break
        else:
            hdr_end = len(seg)
        header = parse_group_header(seg[:hdr_end], siglum)

        # entries
        entries = []
        cur = None
        for l in seg[hdr_end:]:
            pm = PAGE_RE.match(l)
            if pm:
                page = int(pm.group(1))
                if cur is not None and cur['pageEnd'] != page:
                    cur['pageEnd'] = page
                continue
            if SEP_RE.match(l.strip()) or GROUP_RE.match(l.strip()):
                cur = None
                continue
            em = ENTRY_RE.match(l)
            if em and len(em.group(1)) >= 3:
                cur = {'r': int(em.group(1)), 'headerRest': em.group(2),
                       'body': [], 'page': page, 'pageEnd': page}
                entries.append(cur)
                continue
            if cur is not None and l.strip():
                cur['body'].append(l.rstrip())
        groups.append({'header': header, 'entries': entries})

    # ── second pass: resolve loci and paragraphs ──
    out = []
    for gi, g in enumerate(groups):
        for e in g['entries']:
            h = parse_entry_header(e['headerRest'], siglum)
            body = e['body'][:]
            locus = h['locus']

            # locus note may be on its own line at the head of the body
            if locus is None:
                for k in range(min(3, len(body))):
                    l2, leftover = parse_locus(body[k])
                    if l2:
                        locus = l2
                        body[k] = leftover
                        break
            if not h['phases'] and body:
                bm = PHASE_HEAD_RE.match(body[0])
                if bm and re.search(r'[' + PHASE_CHARS + r']', bm.group('phases')):
                    h['phases'] = re.findall(
                        r'[' + PHASE_CHARS + r']\d?', bm.group('phases'))
                    seen = set()
                    h['phases'] = [x for x in h['phases']
                                   if not (x in seen or seen.add(x))]
                    extra = bm.group('phases').strip()
                    h['phaseRaw'] = (h['phaseRaw'] + ' · ' + extra
                                     if h['phaseRaw'] else extra)
                    body[0] = bm.group('rest')

            body = [b for b in body if b.strip()]
            if h['trailing']:
                body.insert(0, h['trailing'])

            paras = locus['paras'] if (locus and locus['paras']) else list(g['header']['paras'])
            src = 'locus' if (locus and locus['paras']) else (
                'group' if g['header']['paras'] else 'none')

            out.append({
                'r': e['r'],
                'phases': h['phases'],
                'phaseRaw': h['phaseRaw'],
                'aa': e['page'],
                'aaEnd': e['pageEnd'],
                'sigla': h['siglaRaw'],
                'proseDating': h.get('proseDating', False),
                'vacat': h.get('vacat', False),
                'locus': locus,
                'paras': paras,
                'paraSource': src,
                'group': gi,
                'groupTopic': g['header']['topic'],
                'groupParas': g['header']['paras'],
                'groupJaesche': g['header']['jaesche'],
                'groupRaw': g['header']['raw'],
                'groupPhaseRange': g['header']['phaseRange'],
                'text': '\n'.join(body).strip(),
            })

    # ── third pass: interpolate paragraphs for entries with none ──
    known = [(i, e['paras'][0]) for i, e in enumerate(out) if e['paras']]
    for i, e in enumerate(out):
        if e['paras']:
            e['interpolated'] = False
            continue
        roman = e['sigla'] and re.match(r'^[A-Z]\s+[IVXLC]+[a-z]?\b', e['sigla'])
        if roman:
            # front matter (Vorrede / title pages), which precedes § 1
            e['paras'] = [1]
            e['interpolated'] = True
            e['frontMatter'] = True
            continue
        before = [p for j, p in known if j < i]
        after = [p for j, p in known if j > i]
        guess = before[-1] if before else (after[0] if after else None)
        e['paras'] = [guess] if guess else []
        e['interpolated'] = True

    return out, groups


def report(entries, groups):
    print(f"groups: {len(groups)}   entries: {len(entries)}")
    src = Counter(e['paraSource'] for e in entries)
    print("para source:", dict(src))
    print("interpolated:", sum(1 for e in entries if e['interpolated']))
    print("no phase parsed:", sum(1 for e in entries if not e['phases']))
    print("no text:", sum(1 for e in entries if not e['text']))
    print("multi-para:", sum(1 for e in entries if len(e['paras']) > 1))
    print("no aa page:", sum(1 for e in entries if not e['aa']))
    ph = Counter(p for e in entries for p in e['phases'])
    print("\nphase symbols:", dict(sorted(ph.items())))
    kinds = Counter(e['locus']['kind'] for e in entries if e['locus'])
    print("locus kinds:", dict(kinds))
    print("with lemma:", sum(1 for e in entries if e['locus'] and e['locus']['lemma']))
    print("with satz:", sum(1 for e in entries if e['locus'] and e['locus']['satz']))
    print("with nr:", sum(1 for e in entries if e['locus'] and e['locus']['nr']))
    print("with part:", sum(1 for e in entries if e['locus'] and e['locus']['part']))
    print("\nfirst 3 entries:")
    for e in entries[:3]:
        print(json.dumps(e, ensure_ascii=False)[:400])
    print("\ngroups with no paras:", [g['header']['raw'][:70] for g in groups
                                      if not g['header']['paras']][:10])


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('path')
    ap.add_argument('siglum')
    ap.add_argument('--out')
    a = ap.parse_args()
    entries, groups = parse(a.path, a.siglum)
    report(entries, groups)
    if a.out:
        json.dump(entries, open(a.out, 'w', encoding='utf-8'),
                  ensure_ascii=False, indent=1)
        print("\nwrote", a.out)
