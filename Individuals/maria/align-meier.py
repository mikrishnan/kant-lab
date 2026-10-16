#!/usr/bin/env python3
"""Sentence-align Meier's Auszug (meier-auszug.js) with its English translation
(translations/meier-en.json), paragraph by paragraph, and write
translations/meier-aligned.json.

Each paragraph (§) is split into sentences on both sides. The two lists are then aligned
by dynamic programming over 1:1, 1:2, 2:1, 2:2, 1:3 and 3:1 groupings, scoring the
length ratio of the two sides and rewarding shared anchors (numbers, § references,
Latin and other words that pass through a translation unchanged). Where two or more
sentences on one side answer to one on the other, they are joined into one segment.

    python3 align-meier.py
"""
import json, math, os, re, subprocess

here = os.path.dirname(os.path.abspath(__file__))

ABBR = {'z.e.', 'z.b.', 'd.i.', 'u.s.w.', 'u.s.f.', 'bzw.', 'etc.', 'e.g.', 'i.e.', 'cf.', 'viz.',
        'ff.', 'nr.', 'vgl.', 'd.h.', 'usw.', 'sc.', 'v.g.', 'p.', 'pp.', 'vol.', 'no.'}

def sentences(t):
    t = re.sub(r'\s+', ' ', t.strip())
    # the source runs a following section's heading straight on after a full stop
    # ("Die Vernunftlehre.von der gelehrten Erkenntniss."); open those up
    t = re.sub(r'(?<=[A-Za-zÄÖÜäöüß]{3})\.(?=(?:[A-ZÄÖÜ][a-zäöüß]{2}|von\b))', '.\x01', t)
    t = re.sub(r'(?<=§\.\d)\.(?=[A-Za-zÄÖÜäöüß]{3})|(?<=§\.\d\d)\.(?=[A-Za-zÄÖÜäöüß]{3})|(?<=§\.\d\d\d)\.(?=[A-Za-zÄÖÜäöüß]{3})', '.\x01', t)
    t = re.sub(r'(?<=\))\.(?=[A-ZÄÖÜ][a-zäöüß]{2})', '.\x01', t)
    if '\x01' in t:                                   # a forced boundary: split there, then each part on its own
        return [s for part in t.split('\x01') for s in sentences(part)]
    out, start = [], 0
    for m in re.finditer(r'[.!?]["”’)\]]*\s+(?=\S)', t):
        end = m.end()
        before = t[start:m.start() + 1]
        tok = before.split(' ')[-1]
        nxt = t[end]
        low = tok.lower().lstrip('(["“‘')
        if low in ABBR or re.search(r'\b[a-z]\.[a-z]\.$', low):    # z.E.  d.i.  e.g.
            continue
        if re.fullmatch(r'\(?\d+\.', tok):                         # enumerator "1." / "(2."
            continue
        if re.fullmatch(r'[A-Za-z]\.', tok):                      # lone letter: "z. B.", "A. oder"
            continue
        if nxt.islower() and not t[end:].startswith('von ') and not re.search(r'[?!]["”’)\]]*$', before):
            continue                                               # "§.21. und" — a reference, not an end
        out.append(t[start:end].strip())
        start = end
    if t[start:].strip():
        out.append(t[start:].strip())
    return out

def anchors(s):
    toks = re.findall(r'§\.?\s?\d+|\d+|[A-Za-zÄÖÜäöüß]{5,}', s)
    return {x.lower().replace(' ', '') for x in toks}

def align(de, en, ratio):
    n, m = len(de), len(en)
    if n == m:
        return [([i], [i]) for i in range(n)]
    dl = [len(s) for s in de]; el = [len(s) for s in en]
    da = [anchors(s) for s in de]; ea = [anchors(s) for s in en]
    INF = 1e18
    moves = [(1, 1), (1, 2), (2, 1), (2, 2), (1, 3), (3, 1)]
    best = [[INF] * (m + 1) for _ in range(n + 1)]
    back = [[None] * (m + 1) for _ in range(n + 1)]
    best[0][0] = 0
    for i in range(n + 1):
        for j in range(m + 1):
            if best[i][j] >= INF:
                continue
            for a, b in moves:
                if i + a > n or j + b > m:
                    continue
                L1 = sum(dl[i:i + a]); L2 = sum(el[j:j + b])
                c = abs(math.log((L2 + 8) / (ratio * L1 + 8)))
                c += 0.35 * (a + b - 2)
                sa = set().union(*da[i:i + a]); sb = set().union(*ea[j:j + b])
                c -= 0.25 * min(len(sa & sb), 4)
                if best[i][j] + c < best[i + a][j + b]:
                    best[i + a][j + b] = best[i][j] + c
                    back[i + a][j + b] = (i, j)
    path, i, j = [], n, m
    while (i, j) != (0, 0):
        pi, pj = back[i][j]
        path.append((list(range(pi, i)), list(range(pj, j))))
        i, j = pi, pj
    return path[::-1]

js = subprocess.run(['node', '-e', 'eval(require("fs").readFileSync("%s","utf8")+";globalThis.M=MEIER_AUSZUG");'
                     'console.log(JSON.stringify(M.paras))' % os.path.join(here, 'meier-auszug.js')],
                    capture_output=True, text=True, check=True).stdout
de_all = json.loads(js)
doc = json.load(open(os.path.join(here, 'translations', 'meier-en.json'), encoding='utf8'))
en_all = doc['blocks']

tot_de = sum(len(t) for t in de_all.values()); tot_en = sum(len(en_all['meier-para-' + k]) for k in de_all)
ratio = tot_en / tot_de

segments, stats = [], {'paras': 0, 'segments': 0, 'merged': 0, 'one_to_one_paras': 0}
for k in sorted(de_all, key=int):
    de_s = sentences(de_all[k]); en_s = sentences(en_all['meier-para-' + k])
    stats['paras'] += 1
    if len(de_s) == len(en_s):
        stats['one_to_one_paras'] += 1
    for gi, (a, b) in enumerate(align(de_s, en_s, ratio)):
        seg = {'para': int(k), 'seg': gi + 1, 'de': ' '.join(de_s[x] for x in a), 'en': ' '.join(en_s[y] for y in b)}
        if len(a) != 1 or len(b) != 1:
            seg['merged'] = {'de': len(a), 'en': len(b)}
            stats['merged'] += 1
        segments.append(seg)
        stats['segments'] += 1

out = {'meta': {
    'work': 'G. F. Meier, Auszug aus der Vernunftlehre (1752)',
    'sources': ['Individuals/maria/meier-auszug.js', 'Individuals/maria/translations/meier-en.json'],
    'method': 'sentence split per §, then length- and anchor-based alignment (align-meier.py). Where several '
              'sentences on one side answer to one on the other, they are joined into one segment and the segment '
              'carries "merged": {"de": n, "en": m}. Segments never cross a § boundary.',
    'translation': 'English is an unreviewed machine translation by Claude.',
    'stats': stats}, 'segments': segments}
with open(os.path.join(here, 'translations', 'meier-aligned.json'), 'w', encoding='utf8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1); f.write('\n')
print(stats)
