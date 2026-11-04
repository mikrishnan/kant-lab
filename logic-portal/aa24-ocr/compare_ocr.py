#!/usr/bin/env python3
"""Measure the OCR against a clean transcription of the same AA pages.

    python3 compare_ocr.py data/logik-busolt-24.js logik-busolt-24-ocr.js

Both files are in the `logik` shape. Each is cut back into AA pages (using
`aa` and `pages`), and the words of each page are aligned. Reports how many of
the clean text's words the OCR has exactly, how many it has once case and
punctuation are set aside, how many it lacks or adds, and the commonest
substitutions — which is where silent spelling normalisation shows up.
"""
import difflib
import json
import re
import sys
from collections import Counter, defaultdict


def load(path):
    s = open(path, encoding="utf-8").read()
    i = s.find("{", s.find("const LOGIK_"))
    return json.loads(s[i:s.rfind(";")])


def by_page(d):
    pages = defaultdict(list)
    for sec in d["sections"]:
        for b in sec["blocks"]:
            if b.get("kind", "text") != "text":
                continue
            t = b["text"]
            cuts = [(b["aa"], 0)] + [(p["p"], p["i"]) for p in b.get("pages", [])]
            for k, (pg, i) in enumerate(cuts):
                j = cuts[k + 1][1] if k + 1 < len(cuts) else len(t)
                pages[pg].append(t[i:j])
    return {p: " ".join(v).split() for p, v in pages.items()}


def norm(w):
    return re.sub(r"[^\wäöüßÄÖÜ]", "", w).lower()


def main():
    clean, ocr = by_page(load(sys.argv[1])), by_page(load(sys.argv[2]))
    tot = exact = loose = missing = extra = 0
    subs = Counter()
    worst = []
    for p in sorted(clean):
        a, b = clean[p], ocr.get(p, [])
        sm = difflib.SequenceMatcher(None, [norm(w) for w in a], [norm(w) for w in b], autojunk=False)
        e = l = 0
        for op, i1, i2, j1, j2 in sm.get_opcodes():
            if op == "equal":
                l += i2 - i1
                e += sum(1 for k in range(i2 - i1) if a[i1 + k] == b[j1 + k])
            elif op == "replace":
                n = min(i2 - i1, j2 - j1)
                for k in range(n):
                    subs[(norm(a[i1 + k]), norm(b[j1 + k]))] += 1
                missing += max(0, (i2 - i1) - (j2 - j1))
                extra += max(0, (j2 - j1) - (i2 - i1))
            elif op == "delete":
                missing += i2 - i1
            elif op == "insert":
                extra += j2 - j1
        tot += len(a); exact += e; loose += l
        if a:
            worst.append((l / len(a), p, len(a), len(b)))
    print("AA pages compared: %d   words in the clean text: %d" % (len(clean), tot))
    print("  OCR word identical, punctuation and case included: %.1f%%" % (100 * exact / tot))
    print("  OCR word right once case and punctuation are set aside: %.1f%%" % (100 * loose / tot))
    print("  words the OCR lacks (beyond one-for-one substitutions): %d   words it adds: %d" % (missing, extra))
    print("  worst pages (share right, page, clean words, OCR words):")
    for r in sorted(worst)[:8]:
        print("    %.2f  AA 24:%d  %d  %d" % r)
    print("  commonest substitutions (clean → OCR):")
    for (x, y), n in subs.most_common(40):
        print("    %3d  %s → %s" % (n, x, y))


if __name__ == "__main__":
    main()
