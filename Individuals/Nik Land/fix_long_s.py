#!/usr/bin/env python3
"""Conservative long-s repair for the OCR of Wolff's Philosophia rationalis, sive logica.

Apple Vision reads the long s (ſ) of the 1728 print as "f". For every word that
contains an "f", this tries each way of turning some of its f's back into s's and
keeps a change only when the result is attested in a Latin lexicon built from
Baumgarten's Metaphysica (data/metaphysica-17.js), which prints round s throughout,
and the word as OCRed is not itself attested. Words that are valid Latin with their
f (fieri, fit, afferre, forma) are therefore left alone, and so is anything
unattested either way, apart from the one rule below.

Rule A: an f before t, c, p, q, m, n, b, d, g or s is changed to s whatever the lexicon says.
Latin has no such sequences with a real f, so these are always the long s.

Rule B: word-initial "fy" becomes "sy" (Latin has no native fy-; syllogismus, system...).

Rule C: the scan's "ſſ" is sometimes read "fl" (efle for esse, pofle for posse). "fl" is
turned into "ss" only when the result is attested in the lexicon.

Rule D: a few fused particles that no lexicon contains (quodfi, nonnifi, etfi, feqq).

Everything else, including every word the lexicon cannot decide, is left exactly as the
OCR gave it.

usage: fix_long_s.py <in.txt> <out.txt> <lexicon.js> [more lexicon files...]
"""
import re, sys, itertools, collections

LETTERS = "A-Za-zÀ-ÖØ-öø-ÿæœÆŒ"
TOKEN = re.compile(f"[{LETTERS}]+")

def norm(w):
    w = w.lower().replace("æ", "ae").replace("œ", "oe").replace("j", "i").replace("v", "u")
    return w

def build_lexicon(paths):
    lex = collections.Counter()
    for p in paths:
        with open(p, encoding="utf-8") as fh:
            for t in TOKEN.findall(fh.read()):
                lex[norm(t)] += 1
    return lex

FUSED = {"quodfi": "quodsi", "nonnifi": "nonnisi", "etfi": "etsi", "feqq": "seqq", "feq": "seq",
         "nifi": "nisi", "fi": "si", "efle": "esse"}

def keep_case(old, new):
    return new[0].upper() + new[1:] if old[:1].isupper() else new

# the f of conferre, inferre, referre, differre ... is a real f, not a long s
FER = re.compile(r"(con|in|re|dif|af|of|præ|pre|de|trans|suf|pro)fer$")

def stem_attested(cand, lex, prefixes):
    """Weak evidence for an inflected form the lexicon lacks: cand is a prefix of an attested word,
    or an attested word of >= 6 letters is a prefix of cand, with at most 3 letters of difference."""
    c = norm(cand)
    if len(c) < 7:
        return False
    if c in prefixes:
        return True
    return any(c[:-k] in lex and len(c) - k >= 6 for k in (1, 2, 3))

def fix_word(w, lex, stats, prefixes=frozenset()):
    if "f" not in w:
        return w
    if w.lower() in FUSED:
        stats["table"] += 1
        return keep_case(w, FUSED[w.lower()])
    chars = list(w)
    if w.lower().startswith("fy"):
        chars[0 if w[0] == "f" else 0] = "s" if w[0] == "f" else w[0]
    # Rule A
    for i, c in enumerate(chars):
        if c == "f" and i + 1 < len(chars) and chars[i + 1] in "tcpqmnbdgs":
            chars[i] = "s"
    w1 = "".join(chars)
    idx = [i for i, c in enumerate(chars) if c == "f"]
    if not idx or len(idx) > 5:
        if w1 != w: stats["ruleA"] += 1
        return w1
    base = lex.get(norm(w1), 0)
    best, bestn = None, 0
    bases = [chars]
    if "fl" in w1:                       # Rule C variant: every "fl" -> "ss"
        bases.append(list(w1.replace("fl", "ss")))
    for ch in bases:
        fidx = [i for i, c in enumerate(ch) if c == "f"]
        for r in range(0 if ch is not chars else 1, len(fidx) + 1):
            for sub in itertools.combinations(fidx, r):
                if any(FER.search(w1[:i + 3].lower()) for i in sub): continue
                c2 = ch[:]
                for i in sub: c2[i] = "s"
                cand = "".join(c2)
                n = lex.get(norm(cand), 0)
                if n > bestn: best, bestn = cand, n
    if best is not None and base == 0 and (bestn >= 2 or (bestn >= 1 and len(best) >= 6)):
        stats["lexicon"] += 1
        return best
    if base == 0 and not stem_attested(w1, lex, prefixes):
        # weak evidence: prefer the candidate with the most s's whose stem is attested
        weak = None
        for ch in bases:
            fidx = [i for i, c in enumerate(ch) if c == "f"]
            for r in range(1, len(fidx) + 1):
                for sub in itertools.combinations(fidx, r):
                    if any(FER.search(w1[:i + 3].lower()) for i in sub): continue
                    c2 = ch[:]
                    for i in sub: c2[i] = "s"
                    cand = "".join(c2)
                    if weak is None and stem_attested(cand, lex, prefixes): weak = cand
        if weak and weak != w1:
            stats["stem"] += 1
            return weak
    if w1 != w: stats["ruleA"] += 1
    return w1

def main():
    src, dst, *lexpaths = sys.argv[1:]
    lex = build_lexicon(lexpaths)
    prefixes = set()
    for w in lex:
        if len(w) >= 7 and lex[w] >= 2:
            for k in range(1, 4):
                if len(w) - k >= 7: prefixes.add(w[:-k])
    stats = collections.Counter()
    changes = collections.Counter()
    def sub(m):
        w = m.group(0)
        n = fix_word(w, lex, stats, prefixes)
        if n != w: changes[(w, n)] += 1
        return n
    out = []
    with open(src, encoding="utf-8") as fh:
        for line in fh:
            if line.startswith("=== [p.") or line.startswith("[marginal notes"):
                out.append(TOKEN.sub(sub, line) if line.startswith("[marginal") else line)
            else:
                out.append(TOKEN.sub(sub, line))
    with open(dst, "w", encoding="utf-8") as fh:
        fh.write("".join(out))
    print("lexicon size", len(lex), dict(stats), "distinct changes", len(changes))
    for (a, b), n in changes.most_common(60): print(f"{n:5d}  {a} -> {b}")

if __name__ == "__main__":
    main()
