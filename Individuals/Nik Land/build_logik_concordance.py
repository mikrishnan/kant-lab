#!/usr/bin/env python3
"""Build logik-concordance.js: a correspondence between Meier's *Auszug aus der Vernunftlehre*
and every other text the concordance page can show, with Meier's 563 paragraphs as its centre.

    python3 "Individuals/Nik Land/build_logik_concordance.py"            # build
    python3 "Individuals/Nik Land/build_logik_concordance.py" --tune     # search the knobs

Run from anywhere. It reads, and writes nothing but its own output:

    Individuals/Nik Land/logic-jaesche-9.js        the Jäsche Logik
    Individuals/Nik Land/cambridge-concordance.js  Appendices C and D of the Cambridge
                                                   Lectures on Logic, from the PDF beside it
    data/logik-blomberg-24.js                      Logik Blomberg
    data/logik-wiener-24.js                        Wiener Logik
    data/logik-busolt-24.js                        Logik Busolt
    data/reflexionen-16-meier.js                   Reflexionen on Meier
    data/tradition-meier.js                        TRADITION
    meier-reader/meier-reading-guide.html          the text of Meier's Auszug, lifted from
                                                   the `MEIER` literal the reader embeds

and writes `Individuals/Nik Land/logik-concordance.js`. Read the report it prints.

WHY MEIER'S PARAGRAPHS ARE THE CENTRE
=====================================
Meier's Auszug is the handbook Kant lectured from and wrote his Reflexionen in, so most of the
material is keyed to its §§ already: the Reflexionen and the Tradition by their own apparatus,
Blomberg by its headings, and the Cambridge Edition's concordance (Appendices C and D of its
*Lectures on Logic*) for Blomberg's and the Wiener Logik's pages and for the Jäsche Logik's. The
Jäsche Logik is keyed to its own 120 §§ and the Wiener Logik and Logik Busolt to nothing. So the
output is a table with one row per Meier §, and in each row the Jäsche stretches, the lecture
passages, the Reflexionen and the Tradition entries that belong to it. A reader who starts from
any other text gets to the others by way of the Meier §§ that text's passage is tied to.

WHAT IS STATED AND WHAT IS WORKED OUT
=====================================
  CAMBRIDGE  stated by the table. Appendix D gives, for each Meier §, the AA 16 pages of the
             Reflexionen on it and the pages of Blomberg and of the Wiener Logik that treat it;
             Appendix C gives the AA 9 pages of the Jäsche Logik. A block on pages the table
             lists for some Meier §§ may go only to those §§; a stretch of Jäsche on pages a row
             cites is tied to that row's §§; a Reflexion on an AA 16 page the table gives for a §
             is tied to it. `basis: "cambridge"`, `mbasis: "cambridge"`, bit 8 of a Reflexion's `how`.
  FILED      stated by the sources: a Reflexion is filed under the Meier §§ its locus note or the
             AA's group header names (bit 2 of `how`).
  INFERRED   everything else: Jäsche stretches on pages the table does not list (12 of 188),
             lecture blocks on pages it does not list, all of Busolt, and the choice among the §§
             the table leaves open. The words decide, and each such link carries
             `basis: "inferred"` and the score it was made on.

THE MODEL, AND HOW IT WAS TRAINED
=================================
1. **Jäsche stretches → Meier §§.** The 120 §§ are the units; the Vorrede and Einleitung, which
   have no §§, are cut at block boundaries into stretches of about 2400 characters (the cuts are
   this script's, `unit.cut`). Every text is reduced to character n-grams of its words, after a
   normalisation that folds the period's spellings together (Urtheil/Urteil, Erkenntniß/
   Erkentniß, Logic/Logik …), weighted by TF-IDF and compared by cosine. Inside a division's
   hand-set CORRIDOR of Meier §§ (the table `DIVISIONS`, editorial) each stretch is scored
   against each Meier § (z-scored by row and column) and the stretches are placed by a Viterbi
   path that lets the order drift but charges for it, then widened to neighbouring §§ that score
   nearly as well. Where the table lists a stretch's pages, the corridor gives way to the table:
   only the Meier §§ of the rows that cite those pages are allowed, and the same machinery
   chooses among them.

2. **Lecture blocks → Meier §§.** Every block of Blomberg, Wiener and Busolt is windowed to ~600
   characters, compared with a vector for each of the 563 Meier §§, and the blocks are placed by a
   Viterbi path whose states are the §§ in their own order, the order a lecture on Meier
   follows. Staying put is free, going on costs little, going back costs more, a jump has a flat
   price. A § vector is Meier's text and the specific Reflexionen on it, with a share (`ej`) of
   the Jäsche stretches aligned to it and a share (`el`) of the text of the *other* lectures that
   the table gives it: the table teaches the model how the lectures talk about each §. A lecture
   never contributes to its own vectors. Where the table lists a block's pages, the §§ it does not
   give for them are penalised (`mask`); Blomberg's own §-headings are a mild bonus where the
   table is silent.

3. **Reflexionen** by the Meier §§ they are filed under and by Appendix D's AA 16 pages;
   **Tradition** by the Meier § it is filed under; **Jäsche stretches** per §, as in 1.

Trained against the Cambridge concordance
-----------------------------------------
Before the table is let in, the model is run with it switched off and scored against it
(`model_report`): of the Jäsche stretches the table lists, how often the Meier §§ placed on one
include one the table gives for those pages; of the lecture blocks the table speaks to, how often
the path puts a block on a Meier § the table gives for its pages (`near`: within three §§;
`chance`, 0.4%, is what a path ignoring the words would score). `--tune` searches the n-gram
length, the context window, the Viterbi prices, the shares `ej` and `el`, and the Meier widening
against that score. On the first settings tried the model scored 93% (Jäsche) / 66% (Blomberg,
82% near) / 58% (Wiener, 82% near); after tuning, 96% / 68% (85%) / 59% (83%). The figures are in
`meta.evaluation` and the report. Know what they are: the tuning and the scoring use the same table,
so they flatter the model somewhat on the pages it was tuned on, and the gains are small; exact
placement on a single Meier § is much harder than placement among the several a page can hold.
Busolt cannot be scored, there being no table for it, and its placements are the least secure.

What this does NOT do: align at the level of sentences, check any link by hand, or tell you that
a passage *is* the source of another. The table is at the level of pages; a page holds several §§
of Meier, and where it does the table cannot say which.
"""
import json
import math
import os
import re
import sys
import collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(HERE, "logik-concordance.js")

# ── knobs ────────────────────────────────────────────────────────────────────
CHUNK = 2400          # target characters per stretch in the Vorrede and Einleitung
MIN_TAIL = 700        # a final stretch shorter than this joins the one before
CAP = 5               # most stretches one attested passage is ranked into
WIN = 600             # characters of context a lecture block is compared on
V_WINDOW = 20         # Viterbi: transitions within ±this many states are priced by distance
V_FWD = 0.1           # …forward, per log(1+d)
V_BACK = 3.0          # …backward
V_JUMP = 20.0         # …any other jump, flat
PRIOR = 1.5           # Blomberg: bonus to a stretch aligned to the Meier § the block is filed under
NEAR = 3              # …half of it to one aligned within this many §§ of it
FAR = 60              # …and a stretch aligned more than this many §§ from it pays the bonus back
MIN_ASSIGN_Z = 0.4    # a lecture block is linked only if its stretch scores this z on it
NGRAM = 5
# Jäsche → Meier: within a corridor the stretches are placed by a Viterbi path that
# lets the order drift (Jäsche's Quantität, Qualität, Relation of judgements are Meier's
# Qualität … Quantität …), then each is widened to the neighbouring §§ that score nearly as well
C_WINDOW = 15
C_FWD = 0.2
C_BACK = 0.5
C_JUMP = 8.0
TAU = 1.5             # a neighbouring Meier § must beat this z to be taken in
SPAN_FRAC = 0.6       # …and this fraction of the best §'s score
SPAN = 6              # …and the interval never exceeds this many steps either side in all

# ── the divisions: the editorial scaffold ────────────────────────────────────
# Listed in LECTURE order (Meier's order). `corridor` is the Meier §§ the division
# may be aligned to; `why` is the ground. These are read off Meier's own chapter
# headings (HIERARCHY in the Meier reader) and checked against the similarity
# landscape — the top-scoring Meier § of nearly every Jäsche § falls inside its
# corridor. Where they would not, the corridor is why.
DIVISIONS = [
    dict(key="vor", label="Vorrede", corridor=None,
         why="Jäsche's own preface to the handbook; no counterpart in Meier."),
    dict(key="e1", label="Einleitung I–II", corridor=[(1, 9)],
         why="Meier's Einleitung, §§ 1–9: the concept of logic, its division into "
             "analytic and dialectic, theoretical and practical, its use."),
    dict(key="e1b", label="Einleitung III–IV", corridor=[(5, 5)],
         why="Jäsche's Begriff der Philosophie and Geschichte der Philosophie have no § "
             "in Meier. The Academy Edition itself files its Reflexionen on them at Meier "
             "§ 5 (the group headed 'IX 21-33'), and the lectures treat them in their "
             "introductions, which is where they are matched."),
    dict(key="e2", label="Einleitung V–Anhang", corridor=[(10, 248)],
         why="Meier's Erster Haupttheil, chapters 1–7 (§§ 10–248): gelehrte Erkenntniß, "
             "Weitläuftigkeit, Größe, Wahrheit, Klarheit, Gewißheit, praktische Erkenntniß. "
             "Jäsche's logical perfections (Quantität, Relation, Qualität, Modalität) are "
             "Meier's chapters under another scheme."),
    dict(key="beg", label="§§ 1–16 Begriffe", corridor=[(249, 265)],
         why="Meier ch. 8, Von den gelehrten Begriffen, §§ 249–291, less what Meier goes on "
             "to say of definition (§§ 266–284) and division (§§ 285–291). Its §§ 249–265 are "
             "the concept, its origin, and the abstract concept and its extension."),
    dict(key="def", label="§§ 99–113 Definition, Eintheilung", corridor=[(266, 291)],
         why="Jäsche puts Definition and logical division in the Methodenlehre; Meier has "
             "them inside the chapter on concepts, §§ 266–291, which is where the "
             "similarity also puts them. In lecture order they follow the Begriffe."),
    dict(key="urt", label="§§ 17–40 Urtheile", corridor=[(292, 340)],
         why="Meier ch. 9, Von den gelehrten Urtheilen, §§ 292–352, less the immediate "
             "inferences of §§ 341–352."),
    dict(key="sch", label="§§ 41–93 Schlüsse", corridor=[(341, 413)],
         why="Meier's immediate inferences (§§ 341–352) and ch. 10, Von den gelehrten "
             "Vernunftschlüssen, §§ 353–413."),
    dict(key="met", label="§§ 94–98, 114–120 Methodenlehre", corridor=[(414, 438)],
         why="Meier's Anderer Haupttheil, Von der Lehrart, §§ 414–438."),
]
DIV_ORDER = [d["key"] for d in DIVISIONS]


def division_of(unit):
    if unit["kind"] == "vorrede":
        return "vor"
    if unit["kind"] == "einl":
        return {"s02": "e1", "s03": "e1", "s04": "e1b", "s05": "e1b"}.get(unit["sec"], "e2")
    n = unit["n"]
    if n <= 16:
        return "beg"
    if n <= 40:
        return "urt"
    if n <= 93:
        return "sch"
    if n <= 98:
        return "met"
    if n <= 113:
        return "def"
    return "met"


# ── loading ──────────────────────────────────────────────────────────────────
def load_js(path, name):
    s = open(path, encoding="utf8").read()
    m = re.search(r"\bconst " + name + r"\s*=\s*", s)
    rest = s[m.end():]
    try:
        return json.JSONDecoder().raw_decode(rest)[0]
    except json.JSONDecodeError:
        end = rest.index("\n];") + 2
        return json.loads(re.sub(r",\s*\]$", "\n]", rest[:end].rstrip()))


def load_tradition_keys(path):
    """TRADITION is a JS object literal, not JSON; only its keys are wanted."""
    s = open(path, encoding="utf8").read()
    i = s.index("const TRADITION")
    return sorted({int(k) for k in re.findall(r"^  (\d+):\s*\[", s[i:], re.M)})


# ── similarity ───────────────────────────────────────────────────────────────
FOLD = (("ß", "ss"), ("ſ", "s"), ("ä", "e"), ("ö", "o"), ("ü", "u"), ("ae", "e"),
        ("oe", "o"), ("ue", "u"), ("th", "t"), ("ph", "f"), ("ck", "k"), ("c", "k"),
        ("y", "i"), ("ei", "ai"), ("ey", "ai"), ("ah", "a"), ("eh", "e"), ("oh", "o"),
        ("ie", "i"), ("v", "f"), ("w", "f"), ("z", "s"), ("d", "t"), ("b", "p"),
        ("g", "k"))
WORD = re.compile(r"[a-zäöüßſ]+", re.I)


def fold(w):
    w = w.lower()
    for a, b in FOLD:
        w = w.replace(a, b)
    return re.sub(r"(.)\1+", r"\1", w)


def grams(text):
    out = collections.Counter()
    for w in WORD.findall(text):
        w = fold(w)
        if len(w) < 4:
            continue
        w = "_" + w + "_"
        if len(w) <= NGRAM:
            out[w] += 1
            continue
        for i in range(len(w) - NGRAM + 1):
            out[w[i:i + NGRAM]] += 1
    return out


class Idf:
    def __init__(self, docs):
        df = collections.Counter()
        for d in docs:
            df.update(d.keys())
        n = len(docs)
        self.w = {g: math.log((1 + n) / (1 + c)) + 1 for g, c in df.items()}
        self.default = math.log(1 + n) + 1

    def vec(self, cnt):
        v = {g: (1 + math.log(c)) * self.w.get(g, self.default) for g, c in cnt.items()}
        n = math.sqrt(sum(x * x for x in v.values())) or 1.0
        return {g: x / n for g, x in v.items()}


class Index:
    """The stretches' vectors behind an inverted index, so a query costs the length
    of its own postings rather than a pass over every stretch."""

    def __init__(self, vecs):
        self.n = len(vecs)
        self.post = collections.defaultdict(list)
        for i, v in enumerate(vecs):
            for g, x in v.items():
                self.post[g].append((i, x))

    def sims(self, q):
        out = [0.0] * self.n
        for g, x in q.items():
            for i, y in self.post.get(g, ()):
                out[i] += x * y
        return out


def cos(a, b):
    if len(a) > len(b):
        a, b = b, a
    return sum(x * b.get(g, 0.0) for g, x in a.items())


def zrows(M):
    out = []
    for row in M:
        mu = sum(row) / len(row)
        sd = math.sqrt(sum((x - mu) ** 2 for x in row) / len(row)) or 1.0
        out.append([(x - mu) / sd for x in row])
    return out


def zcols(M):
    T, K = len(M), len(M[0])
    out = [[0.0] * K for _ in range(T)]
    for k in range(K):
        col = [M[t][k] for t in range(T)]
        mu = sum(col) / T
        sd = math.sqrt(sum((x - mu) ** 2 for x in col) / T) or 1.0
        for t in range(T):
            out[t][k] = (col[t] - mu) / sd
    return out


# ── the two aligners ─────────────────────────────────────────────────────────
def viterbi(em, window=None, fwd=None, back=None, jump=None):
    """Best state per time step for emissions em[t][k], with cheap forward drift,
    dearer backward drift and a flat price for any longer jump."""
    from operator import sub
    W = V_WINDOW if window is None else window
    fwd = V_FWD if fwd is None else fwd
    back_cost = V_BACK if back is None else back
    jump = V_JUMP if jump is None else jump
    T, K = len(em), len(em[0])
    logs = [math.log(1 + d) for d in range(W + 2)]
    # arr[m] is the price of arriving from a state d = W - m places behind (negative d: ahead)
    arr = [0.0 if W == m else (fwd * logs[W - m] if W > m else back_cost * logs[m - W]) for m in range(2 * W + 1)]
    prev = em[0][:]
    bps = []
    for t in range(1, T):
        gb = max(range(K), key=prev.__getitem__)
        gv = prev[gb] - jump
        e = em[t]
        cur, bp = [0.0] * K, [0] * K
        for k in range(K):
            lo = k - W if k >= W else 0
            hi = k + W if k + W < K else K - 1
            vals = list(map(sub, prev[lo:hi + 1], arr[lo - k + W:hi - k + W + 1]))
            m = max(vals)
            if m >= gv:
                cur[k] = m + e[k]
                bp[k] = lo + vals.index(m)
            else:
                cur[k] = gv + e[k]
                bp[k] = gb
        bps.append(bp)
        prev = cur
    k = max(range(K), key=prev.__getitem__)
    path = [k]
    for bp in reversed(bps):
        k = bp[k]
        path.append(k)
    path.reverse()
    return path


# ── the texts ────────────────────────────────────────────────────────────────
def flat(work):
    """Every block of a work in order, as (section, block); the page indexes the
    same way, so a run is just [first, last] positions in this list."""
    return [(s, b) for s in work["sections"] for b in s["blocks"]]


def runs(idxs):
    """[3,4,5,9,10] → [[3,5],[9,10]]"""
    out = []
    for i in sorted(set(idxs)):
        if out and i == out[-1][1] + 1:
            out[-1][1] = i
        else:
            out.append([i, i])
    return out


def bridge(fl, idxs, kinds=("text", "note")):
    """Join runs across blocks that carry no text of their own (rules)."""
    idxs = sorted(set(idxs))
    keep = set(idxs)
    out = []
    for i in idxs:
        if out and all(fl[j][1]["kind"] not in kinds or j in keep
                       for j in range(out[-1][1] + 1, i)):
            out[-1][1] = i
        else:
            out.append([i, i])
    return out


CAM_PATH = os.path.join(HERE, "cambridge-concordance.js")

# The values the build uses. `--tune` searches around them against the Cambridge table;
# what it found is what stands here (see "Trained against the Cambridge concordance").
PARAMS = dict(
    win=WIN, window=V_WINDOW, fwd=V_FWD, back=V_BACK, jump=V_JUMP,     # lecture Viterbi
    cwindow=C_WINDOW, cfwd=C_FWD, cback=C_BACK, cjump=C_JUMP,          # Jäsche → Meier Viterbi
    tau=TAU, span_frac=SPAN_FRAC, span=SPAN,                            # …and the widening
    mask=8.0,        # penalty for a stretch the Cambridge table rules out for a passage
    prior=PRIOR,     # Blomberg's own §-headings, where the table is silent
    ej=0.1,          # share of the Jäsche stretches aligned to a Meier § in its vector (placing lectures)
    el=0.3,          # share of the other lectures' text the table gives the § (placing lectures)
)


class Ctx(object):
    pass


def lecture_blocks(fl):
    # The Titelei of Busolt and the Wiener Logik (`titleSrc: none`) is the volume's front
    # matter and table of contents, which says what the lecture will treat and is no
    # treatment of it; it is left unlinked.
    return [gi for gi, (s, b) in enumerate(fl)
            if b["kind"] in ("text", "note") and s.get("titleSrc") != "none"]


def windows(fl, ids, win):
    """For each lecture block, the grams of the block alone and of its neighbourhood: the
    block with neighbours added alternately until ~`win` characters (never across a section)."""
    own = [grams(fl[gi][1]["text"]) for gi in ids]
    out = []
    for p, gi in enumerate(ids):
        sec = fl[gi][0]
        lo = hi = p
        tot = len(fl[gi][1]["text"])
        while tot < win and hi - lo < 16:
            grew = False
            if (hi - lo) % 2 == 0 and lo > 0 and fl[ids[lo - 1]][0] is sec:
                lo -= 1
                tot += len(fl[ids[lo]][1]["text"])
                grew = True
            elif hi < len(ids) - 1 and fl[ids[hi + 1]][0] is sec:
                hi += 1
                tot += len(fl[ids[hi]][1]["text"])
                grew = True
            elif lo > 0 and fl[ids[lo - 1]][0] is sec:
                lo -= 1
                tot += len(fl[ids[lo]][1]["text"])
                grew = True
            if not grew:
                break
        c = collections.Counter()
        for q in range(lo, hi + 1):
            c.update(own[q])
        out.append(c)
    return own, out


def prepare(win=WIN):
    c = Ctx()
    J = load_js(os.path.join(HERE, "logic-jaesche-9.js"), "LOGIK_JAESCHE")
    c.RE = load_js(os.path.join(ROOT, "data", "reflexionen-16-meier.js"), "REFL_ENTRIES")
    c.RG = load_js(os.path.join(ROOT, "data", "reflexionen-16-meier.js"), "REFL_GROUPS")
    c.trad_keys = load_tradition_keys(os.path.join(ROOT, "data", "tradition-meier.js"))
    html = open(os.path.join(ROOT, "meier-reader", "meier-reading-guide.html"),
                encoding="utf8").read()
    dec = json.JSONDecoder()
    MEIER = dec.raw_decode(html[re.search(r"\bconst MEIER\s*=\s*", html).end():])[0]
    c.HIER = dec.raw_decode(html[re.search(r"\bconst HIERARCHY\s*=\s*", html).end():])[0]
    c.meier_text = {int(k): v for k, v in MEIER["paras"].items()}
    c.meier_ns = sorted(c.meier_text)
    RE = c.RE

    # ── the stretches ────────────────────────────────────────────────────────
    jfl = flat(J)
    units = []
    by_para = collections.OrderedDict()
    for gi, (s, b) in enumerate(jfl):
        p = b.get("para")
        if p:
            by_para.setdefault(p["n"], []).append(gi)
    titles = {p["n"]: p["title"] for p in J["paragraphs"]}
    for s in J["sections"]:
        if s["id"] > "s12":
            continue
        idx = [gi for gi, (ss, b) in enumerate(jfl) if ss is s]
        if not idx:
            continue
        chunks, cur, size = [], [], 0
        for gi in idx:
            b = jfl[gi][1]
            cur.append(gi)
            if b["kind"] in ("text", "footnote"):
                size += len(b["text"])
            if size >= CHUNK:
                chunks.append(cur)
                cur, size = [], 0
        if cur:
            if chunks and size < MIN_TAIL:
                chunks[-1].extend(cur)
            else:
                chunks.append(cur)
        roman = re.match(r"(?:\[Einleitung\.\]\s*)?([IVX]+|Anhang)\b", s["headings"][0])
        tag = (roman.group(1) if roman else "") if s["id"] != "s01" else ""
        for k, ch in enumerate(chunks, 1):
            units.append(dict(
                id="%s-%02d" % (s["id"], k), kind="vorrede" if s["id"] == "s01" else "einl",
                sec=s["id"], n=None, k=k, of=len(chunks), tag=tag,
                title=s["title"], b0=ch[0], b1=ch[-1], cut=True))
    for n, idx in by_para.items():
        s = jfl[idx[0]][0]
        units.append(dict(id="p%03d" % n, kind="para", sec=s["id"], n=n, title=titles[n],
                          b0=idx[0], b1=idx[-1], cut=False))
    for u in units:
        u["div"] = division_of(u)
        txt = [u["title"]] if u["kind"] == "para" else []
        txt += [jfl[i][1]["text"] for i in range(u["b0"], u["b1"] + 1)
                if jfl[i][1]["kind"] in ("text", "footnote")]
        u["_text"] = " ".join(txt)
        u["aa"] = jfl[u["b0"]][1]["aa"]
        last = jfl[u["b1"]][1]
        u["aaEnd"] = last.get("aaEnd", last["aa"])
    c.units = units
    order = sorted(range(len(units)), key=lambda i: (DIV_ORDER.index(units[i]["div"]), i))
    c.lec = [i for i in order if units[i]["div"] != "vor"]          # state k → unit lec[k]
    c.lec_pos = {ui: k for k, ui in enumerate(c.lec)}

    # ── the documents ────────────────────────────────────────────────────────
    BL = load_js(os.path.join(ROOT, "data", "logik-blomberg-24.js"), "LOGIK_BLOMBERG")
    WI = load_js(os.path.join(ROOT, "data", "logik-wiener-24.js"), "LOGIK_WIENER")
    BU = load_js(os.path.join(ROOT, "data", "logik-busolt-24.js"), "LOGIK_BUSOLT")
    c.lecs = {}
    for key, W in (("bl", BL), ("wi", WI), ("bu", BU)):
        fl = flat(W)
        ids = lecture_blocks(fl)
        own, wins = windows(fl, ids, win)
        c.lecs[key] = dict(fl=fl, ids=ids, own=own, win=wins)
    blfl = c.lecs["bl"]["fl"]
    bl_by_n = collections.defaultdict(list)
    for gi, (s, b) in enumerate(blfl):
        p = b.get("para")
        if p and b["kind"] == "text":
            for n in p["nums"]:
                bl_by_n[n].append(gi)
    c.re_by_n = collections.defaultdict(list)
    for i, e in enumerate(RE):
        if e.get("vacat"):
            continue
        for n in e["paras"]:
            c.re_by_n[n].append(i)
    mdoc = {}
    for n in c.meier_ns:
        t = [c.meier_text[n]]
        t += [blfl[gi][1]["text"] for gi in bl_by_n.get(n, ())]
        t += [RE[i]["text"] for i in c.re_by_n.get(n, ()) if len(RE[i]["paras"]) <= 3]
        mdoc[n] = " ".join(t)
    c.ug = [grams(u["_text"]) for u in units]
    mg = {n: grams(mdoc[n]) for n in c.meier_ns}
    pool = c.ug + list(mg.values()) + [w for L in c.lecs.values() for w in L["win"]]
    mbase = {}
    for n in c.meier_ns:
        t = [c.meier_text[n]] + [RE[i]["text"] for i in c.re_by_n.get(n, ()) if len(RE[i]["paras"]) <= 3]
        mbase[n] = grams(" ".join(t))
    pool = pool + list(mbase.values())
    c.idf = Idf(pool)
    c.uv = [c.idf.vec(g) for g in c.ug]
    c.mv = {n: c.idf.vec(g) for n, g in mg.items()}      # with Blomberg's text: for placing the Jäsche stretches
    c.base_v = {n: c.idf.vec(g) for n, g in mbase.items()}   # without: for placing the lectures
    c.jfl, c.J, c.BL, c.WI, c.BU = jfl, J, BL, WI, BU
    return c


# ── the Cambridge concordance as ground truth ───────────────────────────────
def load_truth(c):
    CAM = load_js(CAM_PATH, "CAMBRIDGE")
    secs = CAM["sections"]
    paras = {int(k): v for k, v in CAM["paras"].items()}

    def inside(a, b):
        return (b["meier"][0] <= a["meier"][0] and a["meier"][1] <= b["meier"][1]
                and a["meier"] != b["meier"])
    # only the most specific rows say anything: "First section §§ 10-40: AA 9:33-39" is a
    # heading over the rows beneath it, and a § that falls under no row of its own is not
    # listed, not listed at the heading's pages
    leaf = [s for s in secs if not any(inside(t, s) for t in secs)]
    row_of = {}
    for r in leaf:
        for n in range(r["meier"][0], r["meier"][1] + 1):
            row_of.setdefault(n, r)
    c.cam_leaf, c.cam_row_of, c.cam_paras = leaf, row_of, paras
    # for every stretch, the Meier §§ whose row cites a page it stands on
    c.T = []
    for u in c.units:
        T = set()
        for n, r in row_of.items():
            if any(lo <= u["aaEnd"] and hi >= u["aa"] for lo, hi in r["v9"]):
                T.add(n)
        c.T.append(T)
    c.invT = collections.defaultdict(set)
    for ui, T in enumerate(c.T):
        for n in T:
            c.invT[n].add(ui)
    # the pages of Blomberg and of Wiener that treat each Meier §
    c.N = {"bl": collections.defaultdict(set), "wi": collections.defaultdict(set)}
    for n, p in paras.items():
        for key in ("bl", "wi"):
            for lo, hi in p[key]:
                for pg in range(lo, hi + 1):
                    c.N[key][pg].add(n)
    return c


def block_N(c, key, b):
    """The Meier §§ the Cambridge table says treat the page(s) a block stands on."""
    if key not in c.N:
        return set()
    out = set()
    for pg in range(b["aa"], (b.get("aaEnd") or b["aa"]) + 1):
        out |= c.N[key].get(pg, set())
    return out


# ── placing the stretches on Meier's §§ ─────────────────────────────────────
def predict_meier(c, P, truth):
    """Set unit.meier. With `truth`, a stretch the Cambridge table lists (it has AA 9
    pages that a row cites) is confined to the Meier §§ of those rows and the words choose
    among them; a stretch it does not list is placed within its division's corridor."""
    units = c.units
    for u in units:
        u["meier"], u["mscore"], u["mbasis"] = [], None, "inferred"
    for d in DIVISIONS:
        if not d["corridor"]:
            continue
        rows = [i for i, u in enumerate(units) if u["div"] == d["key"]]
        cols = {n for lo, hi in d["corridor"] for n in c.meier_ns if lo <= n <= hi}
        if truth:
            for r in rows:
                cols |= c.T[r]
        cols = sorted(cols)
        raw = [[cos(c.uv[i], c.mv[n]) for n in cols] for i in rows]
        zr = zrows(raw)
        zc = zcols(raw) if len(rows) > 1 else zr
        sc = [[(zr[a][b] + zc[a][b]) / 2 for b in range(len(cols))] for a in range(len(rows))]
        if truth:
            for a, r in enumerate(rows):
                if c.T[r]:
                    for b, n in enumerate(cols):
                        if n not in c.T[r]:
                            sc[a][b] -= P["mask"]
        path = ([0] * len(rows) if len(cols) == 1 else
                viterbi(sc, window=P["cwindow"], fwd=P["cfwd"], back=P["cback"], jump=P["cjump"]))
        for a, (r, c0) in enumerate(zip(rows, path)):
            T = c.T[r] if truth else set()
            lo = hi = c0
            top = sc[a][c0]

            def take(b):
                return ((not T or cols[b] in T) and top > 0
                        and sc[a][b] >= P["span_frac"] * top and sc[a][b] > P["tau"])
            while lo > 0 and hi - lo < P["span"] and take(lo - 1):
                lo -= 1
            while hi < len(cols) - 1 and hi - lo < P["span"] and take(hi + 1):
                hi += 1
            ns = cols[lo:hi + 1]
            if T:
                ns = [n for n in ns if n in T]
            units[r]["meier"] = ns
            units[r]["mscore"] = round(sum(raw[a][cols.index(n)] for n in ns) / len(ns), 3)
            units[r]["mbasis"] = "cambridge" if T else "inferred"


def meier_doc_vectors(c, P, key):
    """The vectors the blocks of lecture `key` are compared with, one per Meier §: Meier's text
    and the specific Reflexionen on it, with a share (`ej`) of the Jäsche stretches aligned to the §
    and a share (`el`) of the text of the *other* lectures that the Cambridge table gives the §'s
    pages. The lecture being placed contributes nothing to its own vectors."""
    ej, el_ = P["ej"], P["el"]
    jac = collections.defaultdict(collections.Counter)
    for ui, u in enumerate(c.units):
        for n in u["meier"]:
            jac[n].update(c.ug[ui])
    lec = collections.defaultdict(collections.Counter)
    for okey, L in c.lecs.items():
        if okey == key or okey not in c.N:
            continue
        for t, gi in enumerate(L["ids"]):
            for n in block_N(c, okey, L["fl"][gi][1]):
                lec[n].update(L["own"][t])
    out = {}
    for n in c.meier_ns:
        v = c.base_v[n]
        parts = [(1 - ej - el_, v)]
        if jac.get(n) and ej:
            parts.append((ej, c.idf.vec(jac[n])))
        if lec.get(n) and el_:
            parts.append((el_, c.idf.vec(lec[n])))
        if len(parts) == 1:
            out[n] = v
            continue
        tot = sum(w for w, _ in parts)
        m = collections.defaultdict(float)
        for w, vec in parts:
            for g, x in vec.items():
                m[g] += w / tot * x
        nrm = math.sqrt(sum(x * x for x in m.values())) or 1.0
        out[n] = {g: x / nrm for g, x in m.items()}
    return out


def predict_lecture(c, key, P, truth, prior=False):
    """Place every block of a lecture on a Meier § by a Viterbi path whose states are the 563 §§ in
    their own order, which is the order a lecture on Meier follows: staying put is free, going on
    costs little, going back costs more, and a jump has a flat price. With `truth`, a block on pages
    the Cambridge table gives for some Meier §§ may only go to those (the words and the order
    choose among them). `prior` adds Blomberg's own §-headings as a mild bonus where the table is silent."""
    L = c.lecs[key]
    fl, ids = L["fl"], L["ids"]
    ns = c.meier_ns
    pos = {n: k for k, n in enumerate(ns)}
    K = len(ns)
    docs = meier_doc_vectors(c, P, key)
    idx = Index([docs[n] for n in ns])
    raw = [idx.sims(c.idf.vec(w)) for w in L["win"]]
    zr, zc = zrows(raw), zcols(raw)
    em = [[(zr[t][k] + zc[t][k]) / 2 for k in range(K)] for t in range(len(raw))]
    cand = {}
    for t, gi in enumerate(ids):
        b = fl[gi][1]
        if truth:
            N = block_N(c, key, b)
            ks = {pos[n] for n in N if n in pos}
            if ks:
                cand[t] = ks
                row = em[t]
                for k in range(K):
                    if k not in ks:
                        row[k] -= P["mask"]
                continue
        nums = (b.get("para") or {}).get("nums") if prior else None
        if nums:
            row = em[t]
            for k in range(K):
                r = min(abs(ns[k] - n) for n in nums)
                if r == 0:
                    row[k] += P["prior"]
                elif r <= NEAR:
                    row[k] += P["prior"] / 2
                elif r > FAR:
                    row[k] -= P["prior"]
    path = viterbi(em, window=P["window"], fwd=P["fwd"], back=P["back"], jump=P["jump"])
    return dict(path=path, raw=raw, zr=zr, cand=cand)


def lecture_links(c, key, res):
    """{Meier § → runs of blocks placed on it}, with their basis."""
    L = c.lecs[key]
    fl, ids = L["fl"], L["ids"]
    ns = c.meier_ns
    by_n = collections.defaultdict(list)
    for t, k in enumerate(res["path"]):
        cam = t in res["cand"] and k in res["cand"][t]
        if not cam and res["zr"][t][k] < MIN_ASSIGN_Z:
            continue
        by_n[ns[k]].append((t, k, cam))
    out = {}
    for n, items in by_n.items():
        gis = [ids[t] for t, _, _ in items]
        info = {ids[t]: (res["raw"][t][k], res["zr"][t][k], cam) for t, k, cam in items}
        runs_ = []
        for r in bridge(fl, gis):
            inside = [g for g in gis if r[0] <= g <= r[1]]
            cam = [g for g in inside if info[g][2]]
            runs_.append(dict(
                r=r, n=len(inside),
                score=round(sum(info[g][0] for g in inside) / len(inside), 3),
                z=round(sum(info[g][1] for g in inside) / len(inside), 2),
                basis="cambridge" if len(cam) == len(inside) else ("mixed" if cam else "inferred")))
        out[n] = runs_
    return out


# ── how well the model agrees with the table ────────────────────────────────
def eval_meier(c):
    hit = lst = soft = 0
    prec = 0.0
    for ui, u in enumerate(c.units):
        T = c.T[ui]
        if not T or not u["meier"]:
            continue
        lst += 1
        inter = set(u["meier"]) & T
        hit += bool(inter)
        prec += len(inter) / len(u["meier"])
        soft += any(min(abs(n - t) for t in T) <= 3 for n in u["meier"])
    return dict(listed=lst, hit=hit / lst, soft=soft / lst, precision=prec / lst)


def eval_lecture(c, key, res):
    """Of the blocks the table speaks to, how often does the path put a block on a Meier § the table
    gives for its pages? `chance` is what a path ignoring the words would score; `near` counts a
    placement within three §§ of one."""
    L = c.lecs[key]
    fl, ids = L["fl"], L["ids"]
    ok = near = tot = 0
    chance = 0.0
    for t, gi in enumerate(ids):
        N = block_N(c, key, fl[gi][1])
        if not N:
            continue
        tot += 1
        n = c.meier_ns[res["path"][t]]
        ok += n in N
        near += min(abs(n - m) for m in N) <= 3
        chance += len(N) / len(c.meier_ns)
    return dict(listed=tot, hit=ok / tot, near=near / tot, chance=chance / tot)


def model_report(c, P, label, quiet=False):
    """Score the model with the table switched off, so that the table is a test and not an input."""
    predict_meier(c, P, truth=False)
    m = eval_meier(c)
    r_bl = eval_lecture(c, "bl", predict_lecture(c, "bl", P, truth=False))
    r_wi = eval_lecture(c, "wi", predict_lecture(c, "wi", P, truth=False))
    if not quiet:
        print("%-34s Jäsche→Meier %2.0f%% (prec %2.0f%%)   Blomberg→Meier %2.0f%% (±3 %2.0f%%, chance %.1f%%)   Wiener→Meier %2.0f%% (±3 %2.0f%%, chance %.1f%%)" % (
            label, 100 * m["hit"], 100 * m["precision"],
            100 * r_bl["hit"], 100 * r_bl["near"], 100 * r_bl["chance"],
            100 * r_wi["hit"], 100 * r_wi["near"], 100 * r_wi["chance"]))
    return dict(meier=m, bl=r_bl, wi=r_wi)


def tune():
    """Search the model's knobs against the Cambridge table and print what it finds. The objective is
    the mean of the three agreement rates, measured with the table switched off."""
    global NGRAM
    results = []
    base = dict(PARAMS)
    for ng in (4, 5):
        NGRAM = ng
        c = load_truth(prepare(base["win"]))
        grid = [dict(base)]
        for fwd, back, jump in ((0.05, 1.0, 6.0), (0.15, 2.0, 12.0), (0.3, 2.0, 12.0), (0.15, 1.0, 6.0), (0.1, 3.0, 20.0)):
            grid.append(dict(base, fwd=fwd, back=back, jump=jump))
        for ej, el_ in ((0.0, 0.0), (0.2, 0.0), (0.0, 0.3), (0.2, 0.3), (0.3, 0.5)):
            grid.append(dict(base, ej=ej, el=el_))
        for cj, tau in ((4.0, 1.0), (6.0, 1.5), (2.5, 1.5)):
            grid.append(dict(base, cjump=cj, tau=tau))
        for P in grid:
            diff = {k: v for k, v in P.items() if base.get(k) != v}
            res = model_report(c, P, "ngram %d %s" % (ng, diff))
            results.append(((res["meier"]["hit"] + res["bl"]["hit"] + res["wi"]["hit"]) / 3, ng, P))
        for win in (600, 1200):
            c = load_truth(prepare(win))
            P = dict(base, win=win)
            res = model_report(c, P, "ngram %d win %d" % (ng, win))
            results.append(((res["meier"]["hit"] + res["bl"]["hit"] + res["wi"]["hit"]) / 3, ng, P))
    results.sort(key=lambda r: -r[0])
    print("\nbest:")
    for s, ng, P in results[:5]:
        print("  %.3f ngram %d %s" % (s, ng, {k: v for k, v in P.items() if base.get(k) != v}))
    NGRAM = 5


def main():
    if "--tune" in sys.argv:
        tune()
        return
    P = dict(PARAMS)
    c = load_truth(prepare(P["win"]))
    units, RE = c.units, c.RE
    print("stretches: %d  (%d §§, %d Einleitung, %d Vorrede)" % (
        len(units), sum(u["kind"] == "para" for u in units),
        sum(u["kind"] == "einl" for u in units), sum(u["kind"] == "vorrede" for u in units)))
    listed = sum(1 for T in c.T if T)
    print("Cambridge table: %d of %d stretches stand on pages it lists" % (listed, len(units)))

    # ── how the model fares against the table, with the table switched off ───
    ev = model_report(c, P, "model, table off:")

    # ── the build proper ────────────────────────────────────────────────────
    predict_meier(c, P, truth=True)
    paras = collections.defaultdict(dict)                 # Meier § → {ja, bl, wi, bu, re}
    # Jäsche stretches. Where Appendix C has a row for the §, it decides: the stretches on the AA 9
    # pages the row cites (those the words also aligned to the § are marked `cambridge`, the rest
    # `pages`), and none at all where the row cites no Jäsche pages. Only for a § no row covers
    # are the stretches the words aligned to it shown, as `inferred`.
    for n in c.meier_ns:
        row = c.cam_row_of.get(n)
        if row is not None:
            ja = [[ui, "cambridge" if n in u["meier"] else "pages"]
                  for ui, u in enumerate(units)
                  if any(lo <= u["aaEnd"] and hi >= u["aa"] for lo, hi in row["v9"])]
        else:
            ja = [[ui, "inferred"] for ui, u in enumerate(units) if n in u["meier"]]
        if ja:
            paras[n]["ja"] = ja
    # the lectures
    nblocks = {}
    for key in ("bl", "wi", "bu"):
        res = predict_lecture(c, key, P, truth=(key != "bu"), prior=(key == "bl"))
        for n, rs in lecture_links(c, key, res).items():
            paras[n][key] = sorted(rs, key=lambda l: l["r"][0])
    # Where Appendix D gives a lecture's pages for a § and the words placed nothing on it from
    # those pages (a page lists several §§ together and the path put its blocks on the others),
    # the pages themselves are the statement: every block on them is shown, unscored
    for key in ("bl", "wi"):
        fl = c.lecs[key]["fl"]
        for n in c.meier_ns:
            ranges = c.cam_paras.get(n, {}).get(key, [])
            if not ranges or any(l["basis"] == "cambridge" for l in paras[n].get(key, ())):
                continue
            hit = [gi for gi, (sec, b) in enumerate(fl)
                   if b["kind"] in ("text", "note") and sec.get("titleSrc") != "none"
                   and any(lo <= (b.get("aaEnd") or b["aa"]) and hi >= b["aa"] for lo, hi in ranges)]
            if hit:
                paras[n][key] = paras[n].get(key, []) + [
                    dict(r=r, n=sum(1 for g in hit if r[0] <= g <= r[1]), score=None, z=None,
                         basis="cambridge", direct=True) for r in bridge(fl, hit)]
    # Reflexionen: filed under the §, or on the AA 16 pages the Cambridge table gives for it
    rvecs = {}

    def rvec(i):
        if i not in rvecs:
            rvecs[i] = c.idf.vec(grams(RE[i]["text"]))
        return rvecs[i]
    by_page = collections.defaultdict(list)
    for i, e in enumerate(RE):
        if not e.get("vacat") and e.get("aa"):
            for pg in range(e["aa"], (e.get("aaEnd") or e["aa"]) + 1):
                by_page[pg].append(i)
    for n in c.meier_ns:
        how = collections.defaultdict(int)
        for i in c.re_by_n.get(n, ()):
            how[i] |= 2
        for lo, hi in c.cam_paras.get(n, {}).get("v16", []):
            for pg in range(lo, hi + 1):
                for i in by_page.get(pg, ()):
                    how[i] |= 8
        if how:
            paras[n]["re"] = sorted([i, int(round(100 * cos(rvec(i), c.base_v[n]))), f] for i, f in how.items())
    unit_of_meier = {n for u in units for n in u["meier"]}
    trad = [[n for n in u["meier"] if n in c.trad_keys] for u in units]

    # ── report ──────────────────────────────────────────────────────────────
    def covered(key, basis=None):
        L = c.lecs[key]
        got = set()
        for n, d in paras.items():
            for l in d.get(key, ()):
                if basis and l["basis"] != basis:
                    continue
                for g in range(l["r"][0], l["r"][1] + 1):
                    if L["fl"][g][1]["kind"] in ("text", "note"):
                        got.add(g)
        return len(got), len(L["ids"])
    print("\nlinks (blocks placed on a Meier §, of all; of those, placed with the Cambridge table)")
    for key, name in (("bl", "Blomberg"), ("wi", "Wiener"), ("bu", "Busolt")):
        a, n = covered(key)
        print("  %-10s %4d of %4d   cambridge %4d" % (name, a, n, covered(key, "cambridge")[0]))
    n_re = sum(len(d.get("re", ())) for d in paras.values())
    print("  Reflexionen %d links on %d Meier §§ (%d by Cambridge pages)" % (
        n_re, sum(1 for d in paras.values() if d.get("re")),
        sum(1 for d in paras.values() for r in d.get("re", ()) if r[2] & 8)))
    print("  Meier §§ with a Jäsche stretch: %d of %d  (%d by alignment, the rest by Cambridge pages)" % (
        sum(1 for d in paras.values() if d.get("ja")), len(c.meier_ns), len(unit_of_meier)))
    print("  stretches with a Meier §: %d of %d (%d by the table)" % (
        sum(1 for u in units if u["meier"]), len(units), sum(1 for u in units if u["mbasis"] == "cambridge")))
    print("\n§§ → Meier §§")
    for u in units:
        if u["kind"] == "para":
            ms = u["meier"]
            print("  §%3d %-44.44s %-10s Meier %-12s sim %s" % (
                u["n"], u["title"], u["mbasis"], ("%d–%d" % (ms[0], ms[-1])) if ms else "—", u["mscore"]))

    # ── write ───────────────────────────────────────────────────────────────
    nav = []
    for top in c.HIER:
        if top.get("sections"):
            for sct in top["sections"]:
                nav.append(dict(part=top["title_de"], title=sct["title_de"],
                                n=sct["sec_num"], rng=sct["para_range"]))
        else:
            nav.append(dict(part=top["title_de"], title=top["title_de"], n=None,
                            rng=top["para_range"]))
    out_units = []
    for ui, u in enumerate(units):
        o = dict(id=u["id"], kind=u["kind"], sec=u["sec"], div=u["div"],
                 title=u["title"], b0=u["b0"], b1=u["b1"], aa=u["aa"], aaEnd=u["aaEnd"])
        if u["kind"] == "para":
            o["n"] = u["n"]
        else:
            o.update(k=u["k"], of=u["of"], tag=u["tag"], cut=True)
        if u["meier"]:
            o["meier"] = u["meier"]
            o["mscore"] = u["mscore"]
            o["mbasis"] = u["mbasis"]
        out_units.append(o)
    meta = dict(
        built="build_logik_concordance.py",
        params={k: v for k, v in P.items()},
        chunk=CHUNK, cap=CAP, ngram=NGRAM, minAssignZ=MIN_ASSIGN_Z,
        divisions=[dict(key=d["key"], label=d["label"], corridor=d["corridor"], why=d["why"])
                   for d in DIVISIONS],
        evaluation=dict(
            what="The model with the Cambridge table switched off, scored against it. meier: of "
                 "%d Jäsche stretches the table lists, the share whose placed Meier §§ include one the "
                 "table gives for those pages. bl, wi: of the blocks the table speaks to, the share "
                 "the path puts on a Meier § the table gives for their pages (`near`: within three "
                 "§§); `chance` is what a path ignoring the words would score." % ev["meier"]["listed"],
            meier=ev["meier"], bl=ev["bl"], wi=ev["wi"]),
        cambridge=dict(
            source="Lectures on Logic, ed. J. M. Young (Cambridge, 1992), Appendices C and D",
            stretchesListed=listed),
        counts=dict(units=len(units), paras=sum(u["kind"] == "para" for u in units),
                    blomberg=len(c.lecs["bl"]["fl"]), wiener=len(c.lecs["wi"]["fl"]),
                    busolt=len(c.lecs["bu"]["fl"]), reflexionen=len(RE)),
    )
    body = {"meta": meta, "paras": {str(n): d for n, d in sorted(paras.items())},
            "units": out_units, "meierNav": nav,
            "meier": {str(n): c.meier_text[n] for n in c.meier_ns}}
    with open(OUT, "w", encoding="utf8") as f:
        f.write(HEADER)
        f.write("const CONCORD = ")
        f.write(json.dumps(body, ensure_ascii=False, separators=(",", ":")))
        f.write(";\n")
    print("\nwrote %s (%.0f KB)" % (OUT, os.path.getsize(OUT) / 1024))


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   The concordance, centred on Meier's Auszug aus der Vernunftlehre (AA XVI): for each Meier §,
   the Jäsche stretches, lecture passages, Reflexionen and Tradition entries that correspond to it.

   GENERATED by build_logik_concordance.py, which stands beside this file — do not hand-edit;
   corrections belong in the script so they survive the next run. The method, and which links
   are stated by the Cambridge concordance and which inferred, are in that script's docstring.

   CONCORD.meta       the parameters, the divisions, the evaluation and the counts
   CONCORD.paras      Meier § number → what corresponds to it (below)
   CONCORD.units      the stretches of Jäsche, in reading order, each with the Meier §§ it is aligned to
   CONCORD.meierNav   Meier's chapter structure, for headings
   CONCORD.meier      the text of Meier's Auszug, § number → text. Copied from the MEIER literal in
                      meier-reader/meier-reading-guide.html

   paras[n] fields (each present only where non-empty)
     ja     the Jäsche stretches: [[index into units, basis]]. Where Appendix C has a row for the §
            it decides: every stretch on the AA 9 pages the row cites (none where it cites none);
            basis cambridge if the words also aligned the stretch to the §, pages if not. Only for a §
            no row covers: the stretches the words aligned to it, basis inferred
     bl, wi, bu   runs of blocks of Blomberg, the Wiener Logik, Logik Busolt placed on the §
     re     Reflexionen: [index into REFL_ENTRIES, resemblance 0–100, how]. `how` is a sum:
              2  the Reflexion is filed under the §
              8  its AA 16 page is one Appendix D gives for the §
            The resemblance is the cosine similarity to Meier's text, and only orders them.

   Run fields (bl, wi, bu)
     r        [first, last] positions in the flat list of that work's blocks in reading order,
              rules included
     basis    cambridge  every block of the run stands on pages Appendix D gives for this §
              mixed      some do, and some were placed by the words
              inferred   placed by the words and the order alone (Busolt always; Blomberg and
                         Wiener where the table does not list a block's pages)
     score    mean cosine similarity of the run's blocks to the §'s vector (null where `direct`)
     z        how far above the other §§ that is, in standard deviations (null where `direct`)
     n        blocks in the run
     direct   true where the run is simply the blocks on the pages Appendix D gives for the §,
              added because the words placed nothing on it from those pages

   Unit fields (units)
     id      p014 for § 14; s05-03 for the third stretch of section s05 (Vorrede, Einleitung)
     kind    para | einl | vorrede
     n       the Jäsche § number (kind para)
     k, of   which stretch of how many in its section (kinds einl, vorrede)
     tag     the Einleitung chapter's number: I … X, Anhang
     cut     true where the boundaries are the script's, not Jäsche's
     sec     the id of the section in LOGIK_JAESCHE.sections
     div     the division (meta.divisions) the stretch was aligned within
     b0, b1  first and last block of the stretch, as positions in the flat list of
             LOGIK_JAESCHE's blocks in reading order
     aa, aaEnd   AA IX pages
     meier   the Meier §§ the stretch was aligned to
     mbasis  cambridge: the table lists the stretch's pages and gives these §§ from among the ones
             it ties to them (the words chose); inferred: not listed, the words and the
             division's corridor decided
     mscore  the mean cosine similarity of the stretch to those §§
   ───────────────────────────────────────────────────────────────────────────── */

"""

if __name__ == "__main__":
    main()
