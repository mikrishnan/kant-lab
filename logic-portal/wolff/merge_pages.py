"""merge_pages.py: two Tesseract readings of one page image, merged word by word.

Library used by wolff_ocr.py. For each page:
  1. read both models' TSV words;
  2. find the body column (its left and right edges) from where the lines start and end, and put
     every word in the body or in a margin;
  3. pair the two readings' words by where they stand on the page (boxes that overlap), and, where
     the two disagree, keep one: the reading found elsewhere in the same book where both models
     agreed, else the one the engine was surer of. Both readings are kept in the result;
  4. hand back the page's lines, top to bottom, each a list of chosen words with their boxes.

Nothing is added that neither engine read."""
import csv, difflib, re, statistics
from collections import Counter, defaultdict

csv.field_size_limit(10 ** 8)
LETTER = re.compile(r"[^\W\d_]", re.U)
ALNUM = re.compile(r"[^\W_]", re.U)


UML = {"a": "ä", "o": "ö", "u": "ü", "A": "Ä", "O": "Ö", "U": "Ü"}


def printable(t):
    """Three Fraktur forms the portal's typefaces have no glyph for, printed as the portal's 1781
    Critique prints them: the e written over a vowel as the umlaut (aͤ as ä), the Fraktur hyphen ⸗
    as -, and ꝛc. as etc. Long s is kept: the typefaces have it."""
    t = re.sub(r"([aouAOU])\u0308?\u0364", lambda m: UML[m.group(1)], t)
    return t.replace("\u2e17", "-").replace("ꝛc", "etc").replace("ꝛ", "r")


def load_tsv(path):
    words = []
    with open(path, encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="\t", quoting=csv.QUOTE_NONE):
            if r["level"] != "5": continue
            t = printable((r["text"] or "").strip())
            if not t: continue
            x0, y0 = int(r["left"]), int(r["top"])
            words.append({"t": t, "x0": x0, "y0": y0, "x1": x0 + int(r["width"]), "y1": y0 + int(r["height"]),
                          "c": float(r["conf"]), "ln": (int(r["block_num"]), int(r["par_num"]), int(r["line_num"]))})
    return words


def bare(t):
    """A token for vocabulary: letters only, as read (long s and all)."""
    return "".join(ch for ch in t if ch.isalpha() or ch in "ͤ̃̀́̂")


def lines_of(words):
    by = {}
    for w in words: by.setdefault(w["ln"], []).append(w)
    out = []
    for ws in by.values():
        ws.sort(key=lambda w: w["x0"])
        out.append(ws)
    return out


def body_height(words):
    hs = [w["y1"] - w["y0"] for w in words if LETTER.search(w["t"]) and w["c"] > 60 and len(w["t"]) >= 3]
    return statistics.median(hs) if hs else 40


def column(words, H):
    """The body column's left and right edges. Lines are split where a gap is wider than ~2.5 x-heights
    (the gutter between a margin note and the text); the longest piece of each line is body. The
    edges are the commonest starts and ends of the long pieces (the text is justified)."""
    segs = []
    for ws in lines_of(words):
        ws = [w for w in ws if ALNUM.search(w["t"]) and w["c"] > 30]
        if not ws: continue
        cur = [ws[0]]; pieces = []
        for w in ws[1:]:
            if w["x0"] - cur[-1]["x1"] > 1.6 * H: pieces.append(cur); cur = [w]
            else: cur.append(w)
        pieces.append(cur)
        p = max(pieces, key=lambda p: p[-1]["x1"] - p[0]["x0"])
        segs.append((p[0]["x0"], p[-1]["x1"]))
    if not segs: return None
    wmax = max(b - a for a, b in segs)
    longs = [(a, b) for a, b in segs if b - a > 0.7 * wmax]
    if len(longs) < 3: return None
    bin_ = max(8, int(H / 3))
    def mode(vals, low):
        c = Counter(v // bin_ for v in vals)
        top = max(c.values())
        # of the bins nearly as full as the fullest, the outermost: an indent never moves a line outwards
        cand = [k for k, n in c.items() if n >= 0.6 * top]
        k = min(cand) if low else max(cand)
        sel = [v for v in vals if v // bin_ == k]
        return min(sel) if low else max(sel)
    return mode([a for a, b in longs], True), mode([b for a, b in longs], False), wmax


def place(words, col, H):
    """Body or margin, for each word; and whether it straddles the gutter."""
    if not col:
        for w in words: w["reg"] = "body"
        return
    L, R, _ = col
    tol = 0.6 * H
    for w in words:
        xc = (w["x0"] + w["x1"]) / 2
        if w["x1"] <= L + 0.5 * H and xc < L - tol: w["reg"] = "ml"
        elif w["x0"] >= R - 0.5 * H and xc > R + tol: w["reg"] = "mr"
        else: w["reg"] = "body"
        w["fused"] = w["reg"] == "body" and (w["x0"] < L - 1.5 * H or w["x1"] > R + 1.5 * H)


def overlap(a, b):
    vy = min(a["y1"], b["y1"]) - max(a["y0"], b["y0"])
    if vy <= 0.45 * min(a["y1"] - a["y0"], b["y1"] - b["y0"]): return False
    vx = min(a["x1"], b["x1"]) - max(a["x0"], b["x0"])
    return vx > 0.3 * min(a["x1"] - a["x0"], b["x1"] - b["x0"])


def clusters(A, B):
    """Groups of words, from either reading, that stand on the same spot (connected by overlap)."""
    n = len(A) + len(B)
    parent = list(range(n))
    def find(i):
        while parent[i] != i: parent[i] = parent[parent[i]]; i = parent[i]
        return i
    for i, a in enumerate(A):
        for j, b in enumerate(B):
            if a["reg"] == b["reg"] and overlap(a, b):
                parent[find(i)] = find(len(A) + j)
    groups = {}
    for i in range(n): groups.setdefault(find(i), []).append(i)
    out = []
    for g in groups.values():
        a = sorted([A[i] for i in g if i < len(A)], key=lambda w: w["x0"])
        b = sorted([B[i - len(A)] for i in g if i >= len(A)], key=lambda w: w["x0"])
        out.append((a, b))
    return out


def junk(w, H):
    t = w["t"]
    if (w["x1"] - w["x0"]) < 0.25 * H and (w["y1"] - w["y0"]) < 0.25 * H: return True   # a speck
    return not ALNUM.search(t) and t not in ("&", "§", "§.", "(", ")")


SECT = re.compile(r"^\(?§")
NUM = re.compile(r"^\(?\d+[.,)]*$")


def choose(a, b, vocab, nxt=None, lex=None):
    """The reading kept for one spot, and how it was decided: same | vocab | conf | only."""
    ta = " ".join(w["t"] for w in a); tb = " ".join(w["t"] for w in b)
    if a and b and ta == tb: return a, "same", None
    if not a or not b:
        ws = a or b
        if all(SECT.match(w["t"]) for w in ws): return ws, "only§", None
    if not b:
        ok = any(ALNUM.search(w["t"]) for w in a) and statistics.mean(w["c"] for w in a) >= 50
        return (a, "only", None) if ok else (None, "drop", ta)
    if not a:
        ok = any(ALNUM.search(w["t"]) for w in b) and statistics.mean(w["c"] for w in b) >= 50
        return (b, "only", None) if ok else (None, "drop", tb)
    # a word that straddles the gutter loses to a reading that keeps margin and text apart
    fa, fb = any(w.get("fused") for w in a), any(w.get("fused") for w in b)
    if fa != fb: return (b, "split", ta) if fa else (a, "split", tb)
    # the section sign: one engine read it, the other a digit or letter in its place, before a number
    sa, sb = any(SECT.match(w["t"]) for w in a), any(SECT.match(w["t"]) for w in b)
    if sa != sb and nxt is not None and NUM.match(nxt):
        return (a, "sect", tb) if sa else (b, "sect", ta)
    if lex is not None:
        la_, lb_ = in_lex(ta, lex), in_lex(tb, lex)
        if la_ != lb_: return (a, "lex", tb) if la_ else (b, "lex", ta)
    def known(ws):
        toks = [bare(w["t"]) for w in ws]
        toks = [t for t in toks if t]
        return bool(toks) and all(vocab.get(t, 0) >= 2 for t in toks)
    ka, kb = known(a), known(b)
    if ka != kb: return (a, "vocab", tb) if ka else (b, "vocab", ta)
    ca = sum(w["c"] * len(w["t"]) for w in a) / max(1, sum(len(w["t"]) for w in a))
    cb = sum(w["c"] * len(w["t"]) for w in b) / max(1, sum(len(w["t"]) for w in b))
    return (a, "conf", tb) if ca >= cb else (b, "conf", ta)


def agreed_tokens(A, B):
    """Tokens both readings read identically at the same spot: the book's own vocabulary."""
    out = Counter()
    H = body_height(A + B)
    for w in A: w.setdefault("reg", "body")
    for w in B: w.setdefault("reg", "body")
    for a, b in clusters(A, B):
        if len(a) == 1 and len(b) == 1 and a[0]["t"] == b[0]["t"]:
            t = bare(a[0]["t"])
            if len(t) >= 2: out[t] += 1
    return out


def line_units(words):
    """Each reading's own lines (Tesseract's segmentation), one per region, with a robust height:
    the median of its words' tops and bottoms, so that a speck in one box does not stretch it."""
    units = defaultdict(list)
    for w in words: units[(w["ln"], w["reg"])].append(w)
    out = []
    for (ln, reg), ws in units.items():
        ws.sort(key=lambda w: w["x0"])
        out.append({"reg": reg, "w": ws, "y0": statistics.median(w["y0"] for w in ws), "y1": statistics.median(w["y1"] for w in ws)})
    return out


def xclusters(a, b):
    """Within one printed line: groups of words from either reading that cover the same stretch."""
    items = [("a", w) for w in a] + [("b", w) for w in b]
    items.sort(key=lambda t: t[1]["x0"])
    groups = []
    for side, w in items:
        for g in groups[-3:]:
            if any(side != s2 and min(w["x1"], v["x1"]) - max(w["x0"], v["x0"]) > 0.3 * min(w["x1"] - w["x0"], v["x1"] - v["x0"])
                   for s2, v in g):
                g.append((side, w)); break
        else:
            groups.append([(side, w)])
    # groups that came to overlap through a later word are joined
    out = []
    for g in groups:
        if out and any(s1 != s2 and min(w["x1"], v["x1"]) - max(w["x0"], v["x0"]) > 0.3 * min(w["x1"] - w["x0"], v["x1"] - v["x0"])
                       for s1, w in out[-1] for s2, v in g):
            out[-1].extend(g)
        else:
            out.append(g)
    return [(sorted([w for s_, w in g if s_ == "a"], key=lambda w: w["x0"]),
             sorted([w for s_, w in g if s_ == "b"], key=lambda w: w["x0"])) for g in out]


def merge(A, B, vocab, reg=None, lex=None):
    """The page's words, chosen: a list of {t, x0..y1, c, reg, how, other, lid}. The two readings
    are paired line by line (each line of one with the line of the other it overlaps most in
    height), and only words in paired lines are compared. With reg, every word is taken to stand
    in that region (a crop of one column), and no column is looked for."""
    H = body_height(A + B)
    if reg:
        col = None
        for w in A + B: w["reg"] = reg; w["fused"] = False
    else:
        col = column(A, H) or column(B, H)
        place(A, col, H); place(B, col, H)
    kept, stats = [], Counter()
    A = [w for w in A if not (junk(w, H) and w["c"] < 60)]
    B = [w for w in B if not (junk(w, H) and w["c"] < 60)]
    UA, UB = line_units(A), line_units(B)
    match = defaultdict(list)
    lone = []
    for ub in UB:
        best, bo = None, 0
        for i, ua in enumerate(UA):
            if ua["reg"] != ub["reg"]: continue
            o = min(ua["y1"], ub["y1"]) - max(ua["y0"], ub["y0"])
            if o > bo: best, bo = i, o
        if best is not None and bo > 0.5 * min(UA[best]["y1"] - UA[best]["y0"], ub["y1"] - ub["y0"]):
            match[best].append(ub)
        else:
            lone.append(ub)
    pairs = [(ua, [w for ub in match.get(i, []) for w in ub["w"]]) for i, ua in enumerate(UA)]
    pairs += [({"reg": ub["reg"], "w": [], "y0": ub["y0"], "y1": ub["y1"]}, ub["w"]) for ub in lone]
    for lid, (ua, bw) in enumerate(pairs):
        bw.sort(key=lambda w: w["x0"])
        ly0, ly1 = ua["y0"], ua["y1"]
        if not ua["w"] and bw:
            ly0, ly1 = statistics.median(w["y0"] for w in bw), statistics.median(w["y1"] for w in bw)
        for a, b in xclusters(ua["w"], bw):
            # inside a spot, line the two readings up token by token; only where they differ is one chosen
            sm = difflib.SequenceMatcher(None, [w["t"] for w in a], [w["t"] for w in b], autojunk=False)
            for op, i1, i2, j1, j2 in sm.get_opcodes():
                sa, sb = a[i1:i2], b[j1:j2]
                nxt = (a[i2]["t"] if i2 < len(a) else b[j2]["t"] if j2 < len(b) else None)
                ws, how, other = choose(sa, sb, vocab, nxt, lex)
                stats[how] += 1
                if ws is None: continue
                for i, w in enumerate(ws):
                    kept.append({"t": w["t"], "x0": w["x0"], "y0": w["y0"], "x1": w["x1"], "y1": w["y1"], "c": w["c"],
                                 "reg": w["reg"], "how": how, "other": other if i == 0 else None,
                                 "span": len(ws) if i == 0 else 0, "lid": lid, "ly0": ly0, "ly1": ly1})
    return kept, col, H, stats


def to_lines(kept, H):
    """The merged words in their printed lines (as merge paired them), each sorted left to right."""
    by = {}
    for w in kept: by.setdefault(w["lid"], []).append(w)
    lines = []
    for lid, ws in by.items():
        ws.sort(key=lambda w: w["x0"])
        ln = {"reg": ws[0]["reg"], "w": ws, "yc": (ws[0]["ly0"] + ws[0]["ly1"]) / 2}
        ln["x0"] = min(w["x0"] for w in ws); ln["x1"] = max(w["x1"] for w in ws)
        ln["y0"] = ws[0]["ly0"]; ln["y1"] = ws[0]["ly1"]
        hs = [w["y1"] - w["y0"] for w in ws if LETTER.search(w["t"])]
        ln["h"] = statistics.median(hs) if hs else H
        lines.append(ln)
    lines.sort(key=lambda l: l["yc"])
    for ln in lines:
        ws = ln["w"]
        for i, w in enumerate(ws[:-1]):
            o = w["other"]
            if o and w["span"] == 1 and " " not in o and SECT.match(o) and not SECT.match(w["t"]) and NUM.match(ws[i + 1]["t"]):
                w["t"], w["other"], w["how"] = o, w["t"], "sect"
        ln["w"] = [w for i, w in enumerate(ws) if not (w["how"] == "only§" and not (i + 1 < len(ws) and NUM.match(ws[i + 1]["t"])))]
    lines = [ln for ln in lines if ln["w"]]
    return lines


def merge_n(readings, vocab, H=None, lex=None):
    """Several readings of one column (each a list of words, all in one region), merged by vote.
    Lines are paired by height against the first reading's lines (a line no earlier reading has
    becomes a line of its own); within a line, words from different readings that cover the same
    stretch form a spot; at each spot the text most readings give is kept, a reading that has
    nothing there voting for nothing. Ties go to the text whose words the book's vocabulary knows,
    then to the surer engine. Specks with no letter, read with little confidence, do not vote."""
    allw = [w for r in readings for w in r]
    if H is None: H = body_height(allw)
    rs = [[w for w in r if not ((junk(w, H) or not ALNUM.search(w["t"])) and w["c"] < 30 and not SECT.match(w["t"]))] for r in readings]
    anchors = []          # [{y0, y1, words: [(ri, w)]}]
    for ri, r in enumerate(rs):
        for u in line_units(r):
            best, bo = None, 0
            for a in anchors:
                o = min(a["y1"], u["y1"]) - max(a["y0"], u["y0"])
                if o > bo: best, bo = a, o
            if best is not None and bo > 0.5 * min(best["y1"] - best["y0"], u["y1"] - u["y0"]):
                best["words"].extend((ri, w) for w in u["w"])
            else:
                anchors.append({"y0": u["y0"], "y1": u["y1"], "words": [(ri, w) for w in u["w"]], "reg": u["reg"]})
    kept, stats = [], Counter()
    N = len(rs)
    for lid, a in enumerate(anchors):
        items = sorted(a["words"], key=lambda t: t[1]["x0"])
        groups = []
        def ov(w, v): return min(w["x1"], v["x1"]) - max(w["x0"], v["x0"]) > 0.3 * min(w["x1"] - w["x0"], v["x1"] - v["x0"])
        for ri, w in items:
            for g in groups[-4:]:
                if any(rj != ri and ov(w, v) for rj, v in g): g.append((ri, w)); break
            else: groups.append([(ri, w)])
        merged = []
        for g in groups:
            if merged and any(r1 != r2 and ov(w, v) for r1, w in merged[-1] for r2, v in g): merged[-1].extend(g)
            else: merged.append(g)
        for g in merged:
            per = defaultdict(list)
            for ri, w in g: per[ri].append(w)
            cands = {}
            for ri, ws in per.items():
                ws.sort(key=lambda w: w["x0"])
                cands.setdefault(" ".join(w["t"] for w in ws), []).append(ws)
            none_votes = N - len(per)
            def known(t):
                toks = [bare(x) for x in t.split()]
                toks = [x for x in toks if x]
                return bool(toks) and all(vocab.get(x, 0) >= 2 for x in toks)
            def conf(wss): return statistics.mean(w["c"] for ws in wss for w in ws)
            # where some reading gives words the clean texts of the period know and others do not, the
            # known words win (a misreading seldom makes a real word); then the vote, the book's own
            # vocabulary, the engines' confidence
            lexk = {t: (lex is not None and in_lex(t, lex)) for t in cands}
            # only between readings cut the same way: a line's opening fragment (nus, of Quate-nus)
            # is no dictionary word, and must not lose to a reading that left it out
            anylex = any(lexk.values()) and not all(lexk.values()) and len({len(t.split()) for t in cands}) == 1
            ranked = sorted(cands.items(), key=lambda kv: ((lexk[kv[0]] if anylex else 0), len(kv[1]), known(kv[0]), conf(kv[1])), reverse=True)
            best_t, best_wss = ranked[0]
            votes = len(best_wss)
            # a § sign, or a bare number (a §'s heading with its sign lost), is kept on a tie
            is_sect = any(SECT.match(x) for x in best_t.split()) or bool(re.fullmatch(r"\W{0,2}\d{1,4}[.,]?", best_t))
            if none_votes > votes or (none_votes == votes and conf(best_wss) < 50 and not is_sect):
                stats["drop"] += 1; continue
            if votes == N: how = "same"
            elif len(ranked) == 1: how = "only" if votes == 1 else "most"
            elif anylex and lexk[best_t] and len(ranked[1][1]) >= votes: how = "lex"
            elif len(ranked[1][1]) < votes: how = "most"
            else: how = "vocab" if known(best_t) and not known(ranked[1][0]) else "conf"
            other = None
            if how != "same":
                other = ranked[1][0] if len(ranked) > 1 else ""
            stats[how] += 1
            ws = max(best_wss, key=lambda ws: statistics.mean(w["c"] for w in ws))
            for i, w in enumerate(ws):
                kept.append({"t": w["t"], "x0": w["x0"], "y0": w["y0"], "x1": w["x1"], "y1": w["y1"], "c": w["c"],
                             "reg": a["reg"], "how": how, "other": other if i == 0 else None,
                             "span": len(ws) if i == 0 else 0, "lid": lid, "ly0": a["y0"], "ly1": a["y1"],
                             "votes": votes, "of": N})
    return kept, H, stats


# ── a lexicon from the repository's clean texts, to break ties between readings ──────────────────
import json as _json, os as _os, unicodedata as _ud

LEX_SOURCES = {
    # Latin: Baumgarten's Metaphysica (AA XVII) and the three Latin works of AA I (the BBAW's edition)
    "la": [("data/metaphysica-17.js", None), ("logic-portal/published/kant-aa01.js", {"de-igne", "nova-dilucidatio", "monadologia"})],
    # German of the period: Meier's Auszug (AA XVI), AA I's German works, the 1781 Critique (DTA),
    # the AA XXIV logic lectures
    "de": [("Individuals/Jesus-La-Paz/meier-auszug-data.js", None),
           ("logic-portal/published/kant-aa01.js", {"lebendige-kraefte", "achsendrehung", "erde-veralte", "naturgeschichte", "erdbeben-ursachen",
                                                     "erdbeben-geschichte", "erdbeben-fortgesetzt", "winde"}),
           ("logic-portal/published/kant-krv-a.js", None), ("data/logik-blomberg-24.js", None), ("data/logik-wiener-24.js", None),
           ("data/logik-busolt-24.js", None)],
}


def fold(t):
    """A word as the lexicon compares it: lower case, long s as s, æ œ ß spelled out, an umlaut (or
    the e written over a vowel) as e after the vowel, other marks and anything not a letter dropped."""
    t = _ud.normalize("NFD", t.lower()).replace("ſ", "s").replace("æ", "ae").replace("œ", "oe").replace("ß", "ss")
    out = []
    for ch in t:
        if ch in "̈ͤ": out.append("e")
        elif _ud.category(ch).startswith("M"): continue
        elif ch.isalpha(): out.append(ch)
    return "".join(out)


def build_lexicon(lang, root):
    """Every word form in the clean texts named for the language, folded. Only strings of four words
    or more are taken (the texts, not the files' keys and labels); for AA I, only the works named."""
    lex = set()
    strre = re.compile(r'"((?:[^"\\]|\\.)*)"')
    for path, works in LEX_SOURCES.get(lang, []):
        p = _os.path.join(root, path)
        if not _os.path.exists(p): continue
        for line in open(p, encoding="utf-8"):
            if works is not None:
                m = re.search(r'"work":"([^"]+)"', line)
                if not m or m.group(1) not in works: continue
            for s in strre.findall(line):
                if s.count(" ") < 3: continue
                try: s = _json.loads('"' + s + '"')
                except Exception: continue
                for w in re.findall(r"[^\W\d_]+", s):
                    f = fold(w)
                    if len(f) >= 2: lex.add(f)
    return lex


def in_lex(t, lex):
    toks = [fold(x) for x in re.findall(r"[^\W\d_]+", t)]
    toks = [x for x in toks if len(x) >= 2]
    return bool(toks) and all(x in lex for x in toks)


def edges(words, L, R, H):
    """The text column's left and right edges as lines x = a + b·y, fitted to where the text
    lines start and end (the scans are often a degree or two off square, enough to move an edge
    100 pixels down a page). Indented and short lines are let go by refitting to the outermost
    points. Returns (left(y), right(y)) as functions."""
    lines = {}
    for w in words:
        if w.get("reg") == "body" and not w.get("fused") and w["c"] > 40 and ALNUM.search(w["t"]):
            lines.setdefault((w.get("src"), w["ln"]), []).append(w)
    starts, ends = [], []
    for ws in lines.values():
        if len(ws) < 3: continue
        yc = statistics.median((w["y0"] + w["y1"]) / 2 for w in ws)
        starts.append((yc, min(w["x0"] for w in ws))); ends.append((yc, max(w["x1"] for w in ws)))

    def fit(pts, default, outer):
        pts = [p for p in pts if abs(p[1] - default) < 4 * H]
        if len(pts) < 5: return lambda y: default
        a, b = default, 0.0
        for _ in range(3):
            # Theil–Sen: the median of the slopes between points, then the median intercept
            sl = []
            for i in range(0, len(pts), max(1, len(pts) // 40)):
                for j in range(i + 1, len(pts), max(1, len(pts) // 40)):
                    dy = pts[j][0] - pts[i][0]
                    if abs(dy) > 2 * H: sl.append((pts[j][1] - pts[i][1]) / dy)
            b = statistics.median(sl) if sl else 0.0
            b = max(-0.08, min(0.08, b))
            # the outermost lines, not the commonest: in the Logica the examples, in smaller type,
            # are indented, and outnumber the main text's lines on many pages
            r = sorted(x - b * y for y, x in pts)
            a = r[len(r) // 10] if outer < 0 else r[(len(r) * 9) // 10]
            # keep the points at the edge: an indented line starts inside it, a short one ends inside
            keep = [(y, x) for y, x in pts if (x - (a + b * y)) * outer > -0.6 * H]
            if len(keep) < 5: break
            pts = keep
        return lambda y, a=a, b=b: a + b * y
    return fit(starts, L, -1), fit(ends, R, 1)
