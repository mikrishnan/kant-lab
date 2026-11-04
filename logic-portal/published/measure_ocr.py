#!/usr/bin/env python3
"""How accurate the OCR texts are, page by page: the share of each page's words that agree with
the Bonner Kant-Korpus's text of the same page, once spelling is normalised as the portal's
search normalises it. Writes ocr-agreement.json beside this script, which build_published.py
puts into the data files as meta.agreement, and which the portal shows beside each passage.

    python3 measure_ocr.py <folder of korpora pages>

The folder holds the korpora.org pages as saved from https://korpora.org/kant/aa02/NNN.html and
.../aa03/NNN.html, in subfolders aa02/ and aa03/. Their text is used only to measure ours: the
korpora.org terms allow scholarly use with the source named, and forbid passing the texts on, so
nothing of theirs goes into this repository beyond these percentages.

A disagreement is not always the OCR's fault (the corpus's spelling and ours also differ in
places), so the figures are lower bounds on how good the text is.
"""
import collections, difflib, html, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_published import norm_word

HERE = os.path.dirname(os.path.abspath(__file__))


def korpora_page(folder, vol, page):
    """The lines of one saved korpora page (text and margin text), or None."""
    f = os.path.join(folder, vol, '%03d.html' % page)
    if not os.path.exists(f):
        return None
    t = open(f, 'rb').read().decode('latin-1')
    out = []
    for row in re.findall(r'<tr[^>]*>(.*?)</tr>', t, re.S | re.I):
        cells = [re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', c))).strip()
                 for c in re.findall(r'<td[^>]*>(.*?)</td>', row, re.S | re.I)]
        for k in range(len(cells) - 1):
            if re.fullmatch(r'\d{1,2}', cells[k]):
                out.append(cells[k + 1] + ' ' + (cells[k + 2] if k + 2 < len(cells) else ''))
                break
    return out


def passages(path):
    with open(path, encoding='utf-8') as f:
        return [json.loads(l.strip().rstrip(',')) for l in f if l.startswith('    {')]


def measure(path, folder, vol, start, marks):
    """{AA page: percent} for the data file at path; `start`, `marks`: its AA page fields."""
    by_page = collections.defaultdict(list)
    for p in passages(path):
        if p.get(start) is None:
            continue
        cuts = [[0, p[start]]] + p.get(marks, [])
        for j, (o, n) in enumerate(cuts):
            e = cuts[j + 1][0] if j + 1 < len(cuts) else len(p['text'])
            by_page[n].append(p['text'][o:e])
    words = lambda s: [norm_word(w) for w in re.findall(r'[^\W\d_]+', s)]
    out, ok, tot = {}, 0, 0
    for page in sorted(by_page):
        K = korpora_page(folder, vol, page)
        if not K:
            continue
        theirs = words(re.sub(r'-\s+(?=[a-zäöü])', '', ' '.join(K)))
        if len(theirs) < 40:
            continue                     # a title page: too few words to say anything
        ours = words(' '.join(by_page[page]))
        m = sum(b.size for b in difflib.SequenceMatcher(None, ours, theirs, autojunk=False).get_matching_blocks())
        out[str(page)] = round(100 * m / len(theirs))
        ok, tot = ok + m, tot + len(theirs)
    print('%s: %.1f%% of words agree over %d pages; %d pages under 90%%' % (
        os.path.basename(path), 100 * ok / max(1, tot), len(out), sum(1 for v in out.values() if v < 90)))
    return out


if __name__ == '__main__':
    folder = sys.argv[1]
    result = {
        'aa02': measure(os.path.join(HERE, 'kant-aa02-ocr.js'), folder, 'aa02', 'aa', 'pb'),
        'krv-b': measure(os.path.join(HERE, 'kant-krv-b-ocr.js'), folder, 'aa03', 'aa', 'aapb'),
    }
    with open(os.path.join(HERE, 'ocr-agreement.json'), 'w', encoding='utf-8') as f:
        json.dump(result, f, separators=(',', ':'))
        f.write('\n')
