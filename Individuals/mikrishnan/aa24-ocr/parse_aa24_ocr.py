#!/usr/bin/env python3
"""Extract Academy Edition lecture transcripts the repository has no InteLex copy
of, from the Internet Archive's OCR of the printed volumes, into the `logik`
shape: four logic lectures of AA XXIV, and the 1983 part of AA XXIX (two
metaphysics lectures and a logic fragment).

    python3 parse_aa24_ocr.py philippi CACHE OUT.js
    python3 parse_aa24_ocr.py all  CACHE OUTDIR      the four AA XXIV texts
    python3 parse_aa24_ocr.py aa29 CACHE OUTDIR      the three AA XXIX texts

CACHE is a folder holding the volumes' word-position OCR as the Internet
Archive serves it (see README.md for the curl lines):

    kantsgesammeltes241imma_djvu.xml   AA XXIV, erste Hälfte  (pp. 1–496)
    kantsgesammeltes242imma_djvu.xml   AA XXIV, zweite Hälfte (pp. 497–1103)
    kantsgesammeltes0029kant_djvu.xml  AA XXIX, erste Hälfte, zweiter Teil
                                       (1983; pp. 743–1188)

The AA XXIV scans are of the Duquesne University (Gumberg Library) copy,
digitized by the Internet Archive in 2010; the AA XXIX scan is of Trent
University's (Bata Library) copy, digitized in 2019. The 1980 part of AA XXIX
(pp. 1–742) is not on the Internet Archive, and is not here: see
../aa29-ocr/README.md.

THIS IS UNCORRECTED OCR. Nothing here is guessed, filled in or smoothed over:
every word is the OCR engine's reading of the printed page, and the misreadings
stay (`Tbat` for `That`, `rnüße` for `müße`). What the extractor does is only
layout: it takes away what is not the transcript (running heads, the AA's line
numbers, printer's signatures), lifts the manuscript pagination out of the text
as the InteLex-derived files do, and rejoins lines into paragraphs. Each of
those steps is recorded where it was a judgement, per the repository's rule on
attested vs. inferred. Every block carries the OCR engine's mean confidence, and
`meta.scan` says how to open the page image to check a reading.

What the layout is, and what the extractor relies on
----------------------------------------------------
* Page = leaf + offset, constant through each half-volume (checked against the
  running heads on every page; the report lists any disagreement).
* The running head is the first line: `312 Vorlesungen über Logik` on a verso,
  `Logik Philippi 313` on a recto. Dropped.
* The AA's line numbers (5, 10, … 35) stand in the inner margin and the
  manuscript's pagination in the outer: on a recto (odd page) line numbers left
  and manuscript pages right, on a verso the other way round. A margin token is
  short and starts outside the text column, whose edges are fitted per page
  because the scans are slightly skewed. (Its box's far edge is no guide: the
  OCR often stretches a line number's box over the gap, or boxes it together
  with the first word, which is split back off.) Line numbers are dropped.
* The manuscript page number in the margin pairs with the `/` the AA sets in
  the line at the break. The `/` is taken out and the break kept in `ms` as an
  offset, as the InteLex files keep `[471]`. OCR often garbles the margin
  number (`59i`, `39$`, `s»r`) or drops it, and reads stray `/`s, so numbers
  are given only on evidence (resolve_ms): a clean reading that fits an
  increasing run is attested; between two attested numbers the breaks are
  numbered in sequence (`inferred: true`) only when their count is exactly what
  the two numbers require, and otherwise left `p: null` with `unresolved: true`.
  The OCR's own reading is kept in `raw` wherever it is not the number. A
  number with no `/` in its line is placed at the line's start, `approx: true`.
  Herder's notes carry no margin numbers, and keep the AA's `/` in the text.
* A paragraph starts where a line is indented. The word after a line-end hyphen
  often has a bad box in this OCR and looks indented, so a line following a
  hyphen never starts a paragraph. A line-end hyphen followed by a lower-case
  letter is the printer's and is removed; before a capital it is kept
  (`Vernunft-Lehre`).
* A line centred in the column is a heading only where the layout says so on
  both sides: the paragraph before it has ended, and the line after it is an
  indented paragraph start. Consecutive centred lines are one heading. Each
  heading opens a section, and also stays in the text as a `heading` block, so
  that a centred line taken for a heading that is really text (a mnemonic
  verse) still reads where it stands.
* A table's cells come out of the OCR as separate lines on one baseline. Such a
  table is kept as a `table` block holding the OCR's lines as read, with no
  prose text: its columns cannot be trusted, so it is not run into sentences.
* The printer's signature at the foot of a sheet (`20*`, `39 Kant's Schriften
  XXIV`) is dropped.
"""
import argparse
import json
import os
import re
import statistics
import sys
import xml.etree.ElementTree as ET

VOLS = {
    1: {"item": "kantsgesammeltes241imma", "offset": 8, "aa": 24, "roman": "XXIV"},       # leaf = page + 8
    2: {"item": "kantsgesammeltes242imma", "offset": -486, "aa": 24, "roman": "XXIV"},    # leaf = page - 486
    3: {"item": "kantsgesammeltes0029kant", "offset": -734, "aa": 29, "roman": "XXIX",    # leaf = page - 734
        "split_lines": True},
}
SCAN_URL = "https://archive.org/details/{item}/page/n{n}/mode/1up"

# Page ranges are the volume's own, from its Inhaltsübersicht (AA 24:1103).
WORKS = {
    "herder": {
        "const": "LOGIK_HERDER", "work": "Logik Herder", "label": "I. Logik Herder",
        "vol": 1, "aa": [1, 6], "front": [1], "contents": [], "text": [3, 6],
        "date": "1762–64",
        "ms": False,   # no manuscript numbers in the margin: the AA's `/` stays in the text
    },
    "philippi": {
        "const": "LOGIK_PHILIPPI", "work": "Logik Philippi", "label": "III. Logik Philippi",
        "vol": 1, "aa": [303, 496], "front": [303, 305], "contents": [307, 308, 309, 310],
        "contentsRefer": "manuscript pages — this is the manuscript's own table of contents",
        "text": [311, 496], "date": "1772",
        "ms": True,
    },
    "poelitz": {
        "const": "LOGIK_POELITZ", "work": "Logik Pölitz", "label": "IV. Logik Pölitz",
        "vol": 2, "aa": [497, 602], "front": [497, 499], "contents": [501],
        "contentsRefer": "AA XXIV pages — the volume's Inhaltsverzeichnis to this transcript",
        "text": [502, 602], "date": "1780–82",
        "ms": True,
    },
    "dohna": {
        "const": "LOGIK_DOHNA", "work": "Logik Dohna-Wundlacken", "label": "VI. Logik Dohna-Wundlacken",
        "vol": 2, "aa": [687, 784], "front": [687, 689], "editorial": [688], "contents": [691, 692],
        "contentsRefer": "AA XXIV pages — the volume's Inhaltsverzeichnis to this transcript",
        "text": [693, 784], "date": "1792",
        "edition": "AA XXIV reprints this transcript from Kowalewski's edition (1924), not from the manuscript",
        "ms": True,
    },
    # AA XXIX, erste Hälfte, zweiter Teil (1983), "Ergänzungen II", from its Inhaltsverzeichnis
    # (AA 29:1187–88). Left out: the Magath variants (29:1049–77), variant readings against
    # Pölitz's text of the Religionslehre rather than a text, and Lehmann's Anhang (29:1079ff.).
    "metaphysik-mrongovius": {
        "const": "METAPHYSIK_MRONGOVIUS", "work": "Metaphysik Mrongovius", "label": "Metaphysik Mrongovius",
        "vol": 3, "aa": [743, 940], "front": [743, 745], "contents": [], "text": [747, 940],
        "date": "1782/83", "ms": True, "group": "aa29", "file": "metaphysik-mrongovius-29-ocr.js",
    },
    "metaphysik-k3": {
        "const": "METAPHYSIK_K3", "work": "Metaphysik K3 (Arnoldt)", "label": "Metaphysik Arnoldt (K3)",
        "vol": 3, "aa": [941, 1040], "front": [941, 943], "contents": [], "text": [945, 1040],
        "date": "1794/95", "ms": True, "group": "aa29", "file": "metaphysik-k3-29-ocr.js",
    },
    "logik-mrongovius": {
        "const": "LOGIK_MRONGOVIUS", "work": "Logik Mrongovius", "label": "Logik Mrongovius",
        "vol": 3, "aa": [1041, 1047], "front": [1041, 1043], "contents": [], "text": [1045, 1047],
        "date": "1784", "ms": True, "group": "aa29", "file": "logik-mrongovius-29-ocr.js",
    },
}

# Not emitted: the repository has Busolt from InteLex. Kept so the OCR can be
# measured against a clean transcription of the same pages (compare_ocr.py).
VALIDATION = {
    "busolt": {
        "const": "LOGIK_BUSOLT_OCR", "work": "Logik Busolt", "label": "V. Logik Busolt",
        "vol": 2, "aa": [603, 686], "front": [603, 605], "contents": [607],
        "text": [608, 686], "date": "ca. 1789/90", "ms": True,
    },
}

LINE_NUMBERS = {"5", "10", "15", "20", "25", "30", "35", "40"}


# ── reading the OCR ────────────────────────────────────────────────────────────

def load_leaves(path):
    leaves = []
    for _, el in ET.iterparse(path, events=("end",)):
        if el.tag != "OBJECT":
            continue
        lines = []
        for line in el.iter("LINE"):
            boxes = []
            for wd in line.iter("WORD"):
                t = re.sub(r"\s+", " ", (wd.text or "")).strip()
                if not t:
                    continue
                c = [int(x) for x in wd.get("coords").split(",")[:4]]   # left, bottom, right, top
                conf = wd.get("x-confidence")
                boxes.append((t, c, int(conf) if conf and conf.isdigit() else None))
            if not boxes:
                continue
            # The AA XXIX scan's OCR leaves the top and left of some boxes at 0, as if
            # the word reached the page's top-left corner (61 words, mostly enumerators
            # like `1. )`); their bottom and right edges are right. Rebuild such a box
            # from those, the height of the line's other words, and a width by its
            # letters, before anything reads it. (AA XXIV's OCR has none.)
            good = [(c[1] - c[3], (c[2] - c[0]) / len(t)) for t, c, _conf in boxes if c[3] > 0 and c[0] > 0]
            h = sorted(g[0] for g in good)[len(good) // 2] if good else 45
            cw = sorted(g[1] for g in good)[len(good) // 2] if good else 20   # width of a letter on this line
            for t, c, _conf in boxes:
                if c[3] == 0 and c[1] > 0:
                    c[3] = c[1] - h
                    if c[0] == 0:
                        c[0] = max(0, round(c[2] - cw * len(t.replace(" ", ""))))
            words = []
            for t, c, conf in boxes:
                # The OCR sometimes boxes two words as one (`30 Hirngespinste`,
                # a margin number and the first word). Split them, sharing the
                # box out by characters, so a margin number can be told apart.
                parts = t.split(" ")
                span, x = c[2] - c[0], c[0]
                for k, part in enumerate(parts):
                    w = span * (len(part) + (1 if k < len(parts) - 1 else 0)) / len(t)
                    words.append({"t": part, "x0": round(x), "y1": c[1], "x1": round(x + span * len(part) / len(t)),
                                  "y0": c[3], "c": conf, "split": len(parts) > 1, "part": k})
                    x += w
            lines.append(words)
        leaves.append({"w": int(el.get("width")), "h": int(el.get("height")), "lines": lines})
        el.clear()
    return leaves


def line_text(ws):
    return " ".join(w["t"] for w in ws)


def ly(ws):
    return min(w["y0"] for w in ws)


def wordlike(t):
    return len(t) >= 3 and sum(ch.isalpha() for ch in t) >= 2 and not re.search(r"\d$", t)


# ── the text column ────────────────────────────────────────────────────────────

def fit_edge(points, low):
    """points: (y, x). The edge is the dense cluster at the low (left) or high
    (right) end; indents and bad boxes fall inside it. Fit a line through the
    cluster's median in the top and in the bottom half of the page."""
    if len(points) < 6:
        return None
    points = sorted(points)
    half = len(points) // 2
    out = []
    for part in (points[:half], points[half:]):
        xs = sorted(x for _, x in part)
        k = max(2, int(len(xs) * 0.4))
        cluster = xs[:k] if low else xs[-k:]
        out.append((statistics.median(y for y, _ in part), statistics.median(cluster)))
    (ya, xa), (yb, xb) = out
    slope = (xb - xa) / (yb - ya) if yb != ya else 0.0
    return lambda y: xa + slope * (y - ya)


def is_head(ws, page):
    t = line_text(ws)
    if ly(ws) > 450:
        return False
    return bool(re.search(r"Vorlesungen|Logik|Anhang|Ergänzungen|Metaphysik|^\W*[\dGOo(]{3,4}\W*$", t)) or str(page) in t


def is_signature(ws, leaf_h):
    """The printer's signature at the foot of a sheet's first pages: `20*`,
    or `39 Kant's Schriften XXIV`."""
    t = line_text(ws)
    if ly(ws) < leaf_h * 0.84:
        return False
    width = max(w["x1"] for w in ws) - min(w["x0"] for w in ws)
    if width < 200 and re.fullmatch(r"[\dOoIil]{1,3}\s*\*?", t):
        return True
    return len(t) < 45 and re.search(r"Schriften", t) is not None and re.search(r"X[XV]|IV|Kant", t) is not None


# ── one page ───────────────────────────────────────────────────────────────────

class Page:
    pass


def read_page(leaf, page, edges_by_parity, report, split_lines=False):
    """Return a Page with .lines: each {text, words, indent, centred, ms: [raw], conf}.

    split_lines: the scan's OCR splits a printed line into several OCR lines on one
    baseline (the AA XXIX scan does; the AA XXIV scans do not), so the running head,
    margin numbers and enumerators have to be put back together first."""
    P = Page()
    P.page = page
    lines = [ws for ws in leaf["lines"]]
    P.head = None
    first = lines[0] if lines else None
    if split_lines and lines and ly(lines[0]) <= 450:
        # judge the head on everything on its baseline: `Prolegomena Logices` + `1047`,
        # or `S24` (824 misread) + `Ergänzungen II`
        first = [w for ws in lines if abs(ly(ws) - ly(lines[0])) < 25 for w in ws]
    if lines and is_head(first, page):
        P.head = line_text(lines[0])
        y_head = ly(lines[0])
        lines = lines[1:]
        # the OCR sometimes reads the head as two lines: `774` and `Vorlesungen über Logik`
        while lines and abs(ly(lines[0]) - y_head) < 25:
            P.head += " " + line_text(lines[0])
            lines = lines[1:]
        nums = re.findall(r"\d{3,4}", P.head)
        if nums and int(nums[0]) != page:
            report["headMismatch"].append((page, P.head))
    elif page % 2 == 0 or lines and ly(lines[0]) < 450:
        report["noHead"].append(page)
    lines = [ws for ws in lines if not is_signature(ws, leaf["h"])]

    lefts = [(ly(ws), ws[0]["x0"]) for ws in lines if wordlike(ws[0]["t"])]
    rights = [(ly(ws), ws[-1]["x1"]) for ws in lines if wordlike(ws[-1]["t"])]
    L, R = fit_edge(lefts, True), fit_edge(rights, False)
    parity = page % 2
    if L is None or R is None:
        L, R = edges_by_parity.get(parity, (None, None))
        report["borrowedEdges"].append(page)
    else:
        edges_by_parity[parity] = (L, R)
    P.lines = []
    if L is None:
        for ws in lines:
            P.lines.append({"text": line_text(ws), "indent": False, "centred": False, "ms": [], "words": ws})
        return P

    # The AA XXIX scan's OCR often gives a margin number (`5`, `10`, `238`) as a line
    # of its own, listed apart from the text line it stands beside but on the same
    # baseline. Put each back into the text line on its baseline, where the margin
    # tests below find it, rather than let it pass for a table cell. (Off for AA
    # XXIV, whose OCR keeps margin numbers in their lines.)
    if split_lines and L is not None:
        def margin_only(ws):
            y = ly(ws)
            return all(len(w["t"]) <= 5 and (w["x0"] < L(y) - 15 or w["x0"] > R(y) + 4) for w in ws)
        mo = {i for i, ws in enumerate(lines) if margin_only(ws)}
        keep = [i for i in range(len(lines)) if i not in mo]
        merged = {i: list(lines[i]) for i in keep}
        for i in sorted(mo):
            y = ly(lines[i])
            best = min(keep, key=lambda j: abs(ly(lines[j]) - y), default=None)
            if best is not None and abs(ly(lines[best]) - y) < 30:
                merged[best] = sorted(merged[best] + lines[i], key=lambda w: w["x0"])
                report["marginRejoined"] += 1
            else:
                merged[i] = list(lines[i])
        lines = [merged[i] for i in sorted(merged)]
        # An enumerator split off its line (`a. )`, `1. )` + the text) is one printed
        # line, not a table row: a row with a segment spanning much of the column is text.
        colw0 = R(1500) - L(1500)
        out, used = [], set()
        for i, ws in enumerate(lines):
            if i in used:
                continue
            grp = [j for j in range(i, len(lines)) if j not in used and abs(ly(lines[j]) - ly(ws)) < 20]
            if len(grp) > 1 and any(max(w["x1"] for w in lines[j]) - min(w["x0"] for w in lines[j]) > 0.4 * colw0 for j in grp):
                out.append(sorted([w for j in grp for w in lines[j]], key=lambda w: w["x0"]))
                used.update(grp)
                report["linesRejoined"] += len(grp) - 1
            else:
                out.append(ws)
                used.add(i)
        lines = out

    # A table's cells come out of the OCR as separate lines on one baseline.
    # Prose never puts two lines at one height, so rows of cells mark a table;
    # short lines between two such rows belong to it too (wrapped cells).
    ys = [ly(ws) for ws in lines]
    row = [any(abs(ys[i] - ys[j]) < 20 for j in range(len(ys)) if j != i) for i in range(len(ys))]
    colw = (R(1500) - L(1500)) if L is not None else 1600
    in_table = list(row)
    marks = [i for i, r in enumerate(row) if r]
    if marks:
        for i in range(marks[0], marks[-1] + 1):
            ws = lines[i]
            if not in_table[i] and (max(w["x1"] for w in ws) - min(w["x0"] for w in ws)) < 0.5 * colw:
                in_table[i] = True
    outer_is_right = parity == 1   # recto: manuscript pages in the right margin
    for li, ws in enumerate(lines):
        if in_table[li]:
            P.lines.append({"table": True, "text": line_text(ws), "ms": [], "indent": True, "centred": False,
                            "x0ok": True, "short": True, "conf": [w["c"] for w in ws if w["c"] is not None]})
            report["tableLines"] += 1
            continue
        y = ly(ws)
        le, re_ = L(y), R(y)
        left_m, right_m = [], []
        ws = list(ws)
        # A margin token is short and starts outside the column. (Its box's
        # far edge is no guide: the OCR often stretches a line number's box
        # over the gap to the first word.)
        while ws and ws[0]["x0"] < le - 15 and len(ws[0]["t"]) <= 5:
            left_m.append(ws.pop(0))
        while ws and ws[-1]["x0"] > re_ + 4 and len(ws[-1]["t"]) <= 5:
            right_m.insert(0, ws.pop())
        if ws:
            last = ws[-1]
            m = re.fullmatch(r"(.*\D)(\d{1,3})", last["t"])
            if m and last["x1"] > re_ + 14 and last["x0"] < re_:
                ws[-1] = dict(last, t=m.group(1))
                right_m.append({"t": m.group(2), "x0": re_, "x1": last["x1"], "y0": last["y0"], "y1": last["y1"], "c": None})
                report["splitMerged"] += 1
        if not ws:
            report["marginOnlyLines"] += 1
            continue
        ms_tokens, ln_tokens = (right_m, left_m) if outer_is_right else (left_m, right_m)
        ln_raw = "".join(w["t"] for w in ln_tokens)
        if ln_tokens:
            report["lineNumbers"] += 1
            if ln_raw not in LINE_NUMBERS:
                report["lineNumbersOdd"] += 1
        ms_raw = "".join(w["t"] for w in ms_tokens)
        x0 = ws[0]["x0"]; x1 = ws[-1]["x1"]
        mid = (le + re_) / 2
        centred = x0 > le + 75 and x1 < re_ - 75 and abs((x0 + x1) / 2 - mid) < 60
        confs = [w["c"] for w in ws if w["c"] is not None]
        P.lines.append({
            "text": line_text(ws),
            "indent": x0 > le + 28,
            # a split box's start is only estimated -- except its first piece's, which is
            # the box's own (AA XXIV keeps the stricter rule its data was built with)
            "x0ok": (ws[0].get("part", 0) == 0) if split_lines else not ws[0].get("split"),
            "short": x1 < re_ - 60,
            "centred": centred,
            "ms": [ms_raw] if ms_raw else [],
            "conf": confs,
        })
    return P


# ── the work ───────────────────────────────────────────────────────────────────

class Builder:
    def __init__(self, key, cfg, report):
        self.key, self.cfg, self.report = key, cfg, report
        self.sections = []
        self.blocks = None
        self.cur = None           # the paragraph being assembled
        self.all_ms = []          # every manuscript break, in order
        self.join_hanging = VOLS[cfg["vol"]].get("split_lines", False)
        self.new_section(None, [], "none")

    def new_section(self, title, headings, src):
        self.flush()
        sid = "s%02d" % (len(self.sections) + 1)
        sec = {"id": sid, "title": title if title is not None else self.cfg["work"],
               "titleSrc": src, "headings": headings, "provenance": self.cfg.get("provenance", ""),
               "blocks": []}
        self.sections.append(sec)
        self.blocks = sec["blocks"]

    def flush(self):
        c = self.cur
        if not c:
            return
        self.cur = None
        text = c["text"].strip()
        if not text:
            return
        sec = self.sections[-1]
        b = {"id": "%s-%s-%03d" % (self.key, sec["id"], len(self.blocks) + 1), "kind": "text", "aa": c["aa"]}
        if c["pages"]:
            b["aaEnd"] = c["pages"][-1]["p"]
            b["pages"] = c["pages"]
        if c["ms"]:
            b["ms"] = c["ms"]
        b["text"] = text
        if c["joined"]:
            b["joined"] = sorted(c["joined"])
        if c["dehyph"]:
            b["dehyphenated"] = c["dehyph"]
        if c["conf"]:
            b["ocrConf"] = round(sum(c["conf"]) / len(c["conf"]))
        self.blocks.append(b)

    def take_ms(self, line):
        """Lift the manuscript break out of the line: returns (text, [(offset, entry)])."""
        text = line["text"]
        out = []
        raws = line["ms"]
        slash_pos = [m.start() for m in re.finditer(r"/", text)]
        if not raws and not slash_pos:
            return text, out
        if not self.cfg.get("ms"):
            return text, out
        raw = raws[0] if raws else ""
        entry = {"p": None, "raw": raw}   # numbered later, by resolve_ms()
        self.all_ms.append(entry)
        if not raw:
            self.report["msSlashOnly"] += 1
        if slash_pos:
            i = slash_pos[0]
            # `/` standing alone takes its spaces with it; inside a word it simply goes
            before, after = text[:i], text[i + 1:]
            if before.endswith(" ") and after.startswith(" "):
                text = before + after[1:]
            elif before == "" and after.startswith(" "):
                text = after[1:]
            else:
                text = before + after
            out.append((i, entry))
            if len(slash_pos) > 1:
                self.report["msExtraSlash"] += len(slash_pos) - 1
        else:
            entry["approx"] = True
            self.report["msApprox"] += 1
            out.append((0, entry))
        self.report["ms"] += 1
        return text, out

    def add_line(self, line, page, first_on_page, after_hyphen, prev_short):
        text, mss = self.take_ms(line)
        starts = line["indent"] and not after_hyphen and (line.get("x0ok", True) or prev_short)
        # A hanging indent (a list item's second line) looks like a new paragraph. Where
        # the line before broke off mid-sentence, and this one opens in lower case and is
        # not itself an item (`a.)`, `2.)`), it runs on: joined on this extractor's
        # judgement and marked so. (AA XXIX only: AA XXIV's paragraphs stay as they were.)
        inferred = False
        if starts and self.cur is not None and self.join_hanging:
            prevt = self.cur["text"].rstrip()
            if (prevt and not re.search(r"[.:;!?)\]»“\"—–-]$", prevt) and re.match(r"[a-zäöüß]", text)
                    and not re.match(r"[a-z0-9IVX]{1,4}\s?\.?\s?\)", text)):
                starts, inferred = False, True
                self.report["joinedHanging"] += 1
        c = self.cur
        if c is None or starts:
            self.flush()
            c = self.cur = {"text": "", "aa": page, "pages": [], "ms": [], "joined": set(),
                            "dehyph": 0, "conf": []}
            base = 0
        else:
            if first_on_page:
                c["joined"].add("layout")
            if inferred:
                c["joined"].add("inferred")
            t = c["text"]
            t = re.sub(r"[‐‑¬]$", "-", t)
            if re.search(r"[A-Za-zÄÖÜäöüß]-$", t) and text[:1].islower():
                c["text"] = t[:-1]
                c["dehyph"] += 1
                sep = ""
            elif t.endswith("-"):
                sep = ""
            else:
                sep = " "
            c["text"] += sep
            base = len(c["text"])
        if first_on_page and base > 0:
            c["pages"].append({"p": page, "i": base})
        for off, entry in mss:
            entry["i"] = base + off
            c["ms"].append(entry)
        c["text"] += text
        c["conf"].extend(line.get("conf", []))

    def add_heading(self, page, heads):
        """The heading stays in the text as well as becoming the section's
        title. A centred line taken for a heading that is really text (a
        mnemonic verse, a list item) then still reads where it stands."""
        sec = self.sections[-1]
        self.blocks.append({"id": "%s-%s-%03d" % (self.key, sec["id"], len(self.blocks) + 1),
                            "kind": "heading", "aa": page, "text": " ".join(heads)})

    def add_table(self, page, rows):
        """A table, kept as the OCR's lines in the order it read them, and no
        prose: its columns cannot be trusted, so it is not run into sentences."""
        self.flush()
        sec = self.sections[-1]
        self.blocks.append({"id": "%s-%s-%03d" % (self.key, sec["id"], len(self.blocks) + 1),
                            "kind": "table", "aa": page, "text": "", "lines": rows,
                            "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"})
        self.report["tables"] += 1

    def resolve_ms(self):
        """Number the manuscript breaks. A margin number that reads as a clean
        integer, and fits an increasing run with its neighbours, is attested.
        Between two attested numbers the breaks are numbered in sequence only
        when their count is exactly what the two numbers require; otherwise
        they stay `p: null`. Nothing is numbered on a guess."""
        E = self.all_ms
        n = len(E)
        vals = [int(e["raw"]) if e["raw"].isdigit() else None for e in E]
        # longest run of clean readings that increases by no more than the
        # breaks between them allow, plus a little for breaks the OCR lost
        best = [1 if v is not None else 0 for v in vals]
        prev = [-1] * n
        for j in range(n):
            if vals[j] is None:
                continue
            for i in range(j):
                if vals[i] is None:
                    continue
                d = vals[j] - vals[i]
                if 1 <= d <= (j - i) + 3 and best[i] + 1 > best[j]:
                    best[j], prev[j] = best[i] + 1, i
        anchors = []
        if any(best):
            j = max(range(n), key=lambda k: best[k])
            while j != -1:
                anchors.append(j)
                j = prev[j]
            anchors.reverse()
        r = self.report
        for k in anchors:
            E[k]["p"] = vals[k]
            r["msAttested"] += 1
        for a, b in zip(anchors, anchors[1:]):
            if vals[b] - vals[a] == b - a:
                for k in range(a + 1, b):
                    E[k]["p"] = vals[a] + (k - a)
                    E[k]["inferred"] = True
                    r["msInferred"] += 1
            else:
                for k in range(a + 1, b):
                    E[k]["unresolved"] = True
                    r["msUnresolved"] += 1
        if anchors:
            a0, z = anchors[0], anchors[-1]
            for k in range(0, a0):
                if vals[a0] - (a0 - k) >= 1:
                    E[k]["p"] = vals[a0] - (a0 - k)
                    E[k]["inferred"] = True
                    r["msInferred"] += 1
                else:
                    E[k]["unresolved"] = True
                    r["msUnresolved"] += 1
            for k in range(z + 1, n):
                E[k]["p"] = vals[z] + (k - z)
                E[k]["inferred"] = True
                r["msInferred"] += 1
        for k, e in enumerate(E):
            if k in anchors:
                del e["raw"]          # the reading is the number
            elif not e["raw"]:
                e["raw"] = ""         # kept: the OCR gave no number here
            # key order as the other files have it: p, i, then the flags
            items = {"p": e.pop("p"), "i": e.pop("i")}
            items.update(e)
            e.clear(); e.update(items)


def build(key, leaves_by_vol, report):
    cfg = WORKS.get(key) or VALIDATION[key]
    vol = VOLS[cfg["vol"]]
    leaves = leaves_by_vol[cfg["vol"]]
    edges = {}

    def page_obj(p):
        leaf = leaves[p + vol["offset"] - 1]
        return read_page(leaf, p, edges, report, split_lines=vol.get("split_lines", False))

    def raw_lines(p):
        leaf = leaves[p + vol["offset"] - 1]
        out = [line_text(ws) for ws in leaf["lines"]]
        if out and leaf["lines"] and is_head(leaf["lines"][0], p) and p not in cfg["front"]:
            out = out[1:]
        return [t for t in out if not re.fullmatch(r"[\dOoIil]{1,3}\s*\*|\d{5,}", t)]

    front = [t for p in cfg["front"] for t in raw_lines(p)]
    editorial = [t for p in cfg.get("editorial", []) for t in raw_lines(p)]
    contents = []
    for p in cfg["contents"]:
        for t in raw_lines(p):
            if re.fullmatch(r"\W*Inhaltsverzeichnis\W*", t):
                continue
            m = re.match(r"^(.*?)[\s_.]+([\dOoIilG(g]*\d[\dOoIilG(g]*(?:\s*[—–-]+\s*[\dOoIilG(g]+)?(?:\s+[\dOoIilG(g]+)?)\s*$", t)
            contents.append({"label": m.group(1).strip(), "pages": m.group(2).strip()} if m else {"label": t, "pages": ""})

    B = Builder(key, cfg, report)
    cfg_title = " ".join(front)
    for s in [B.sections[0]]:
        s["provenance"] = cfg_title
    cfg["provenance"] = cfg_title

    lo, hi = cfg["text"]
    stream = []                       # (page, line, first line on its page)
    for p in range(lo, hi + 1):
        for k, line in enumerate(page_obj(p).lines):
            stream.append((p, line, k == 0))

    def may_head(k):
        line = stream[k][1]
        t = line["text"]
        return (line["centred"] and not line.get("table") and not line["ms"] and "/" not in t and len(t) < 60
                and re.match(r"[A-ZÄÖÜ§\[\d(]", t) is not None
                and re.match(r"\d+\.?\s+[a-zäöüß]", t) is None)      # `2. die practische.` is a list item

    def closed():
        return B.cur is None or re.search(r"[.:;!?)\]»“\"]\s*$", B.cur["text"]) is not None

    # A centred line is a heading only where the layout says so on both sides:
    # the paragraph before it has ended, and the line after the heading is
    # indented, as a paragraph's first line is. Otherwise it is text, and stays.
    k, after_hyphen, prev_short = 0, False, True
    while k < len(stream):
        p, line, first = stream[k]
        if may_head(k) and not after_hyphen and closed():
            j = k
            while j < len(stream) and j - k < 4 and may_head(j):
                j += 1
            nxt = stream[j][1] if j < len(stream) else None
            if nxt is None or (nxt["indent"] and not nxt["centred"] and not nxt.get("table")):
                heads = [stream[x][1]["text"] for x in range(k, j)]
                B.new_section(" ".join(heads), heads, "heading")
                B.add_heading(p, heads)
                report["headings"].append((p, " ".join(heads)))
                k, prev_short = j, True
                continue
            report["centredKept"] += 1
        if line.get("table"):
            rows = []
            while k < len(stream) and stream[k][1].get("table") and stream[k][0] == p:
                rows.append(stream[k][1]["text"])
                k += 1
            B.add_table(p, rows)
            after_hyphen, prev_short = False, True
            continue
        B.add_line(line, p, first, after_hyphen, prev_short)
        after_hyphen = line["text"].endswith("-")
        prev_short = line.get("short", True)
        k += 1
    B.flush()
    B.resolve_ms()
    sections = [s for s in B.sections if s["blocks"] or s["titleSrc"] != "none"]

    blocks = [b for s in sections for b in s["blocks"]]
    words = sum(len(b["text"].split()) for b in blocks)
    confs = [b["ocrConf"] for b in blocks if "ocrConf" in b]
    meta = {
        "work": cfg["work"], "label": cfg["label"], "volume": vol["aa"], "date": cfg["date"],
        "provenance": cfg["provenance"],
        "source": "OCR of the printed AA %s (Internet Archive item %s), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py" % (vol["roman"], vol["item"]),
        "ocr": True,
        "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
        "aa": cfg["aa"],
        "scan": {"item": vol["item"], "url": SCAN_URL, "n": "AA page + %d" % (vol["offset"] - 1),
                 "note": "page image of AA %d:P is SCAN_URL with n = P + (%d)" % (vol["aa"], vol["offset"] - 1)},
        "counts": {"sections": len(sections), "blocks": len(blocks), "pages": hi - lo + 1, "words": words,
                   "joinedLayout": sum(1 for b in blocks if "layout" in b.get("joined", [])),
                   "dehyphenated": sum(b.get("dehyphenated", 0) for b in blocks),
                   "meanOcrConf": round(sum(confs) / len(confs)) if confs else None},
    }
    if cfg.get("edition"):
        meta["edition"] = cfg["edition"]
    if cfg.get("contentsRefer"):
        meta["contentsRefer"] = cfg["contentsRefer"]
    if editorial:
        meta["editorialNote"] = editorial
    return {"meta": meta, "front": front, "contents": contents, "sections": sections}


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   {work}, Academy Edition {roman} ({date}) — AA {aa}:{a}–{b}
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item {item}) by
   Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA {aa}:P
   is https://archive.org/details/{item}/page/n<P{off:+d}>/mode/1up

   Same shape as data/logik-busolt-24.js (read the field list there), plus:

   meta.ocr          true: the text is a machine reading, not a transcription
   meta.scan         where the page images are, and how to get from an AA page
                     to one
   meta.contentsRefer what the page numbers in `contents` refer to
   meta.editorialNote the edition's own note on its sigla, verbatim (Dohna)
   block.ocrConf     the OCR engine's mean word confidence for the block, 0–100;
                     low values mark passages to check first
   block.dehyphenated how many printer's line-end hyphens were removed
   block.joined      "layout": the paragraph runs on across a page, read off the
                     AA's typesetting (the next page's first line not indented);
                     "inferred" (AA XXIX): a line indented like a paragraph's
                     first was joined to the one before, because that broke off
                     mid-sentence and this opens in lower case — the hanging
                     indent of a list item's second line. The extractor's
                     judgement, not the layout's
   block.kind        text | heading | table. A `heading` is the section's
                     heading again, kept in the text so that nothing the page
                     prints drops out of it. A `table` has empty `text` and the
                     OCR's lines as read in `lines`, its columns not reliable:
                     see the page image (`note` says so)
   block.ms          as in the other files, plus: `inferred: true` where the
                     number was not read but follows exactly from the numbers
                     read on either side; `p: null` with `unresolved: true`
                     where it does not; the OCR's reading kept in `raw` wherever
                     it is not the number; `approx: true` where the number had
                     no `/` in its line and is placed at the line's start
   ───────────────────────────────────────────────────────────────────────── */

"""


def write(key, data, out):
    cfg = WORKS.get(key) or VALIDATION[key]
    vol = VOLS[cfg["vol"]]
    with open(out, "w", encoding="utf-8") as f:
        f.write(HEADER.format(work=cfg["work"], date=cfg["date"], a=cfg["aa"][0], b=cfg["aa"][1],
                              item=vol["item"], off=vol["offset"] - 1, aa=vol["aa"], roman=vol["roman"]))
        f.write("const %s = " % cfg["const"])
        f.write(json.dumps(data, ensure_ascii=False, indent=1))
        f.write(";\n")


def new_report():
    return {"headMismatch": [], "noHead": [], "borrowedEdges": [], "splitMerged": 0, "marginOnlyLines": 0, "marginRejoined": 0, "linesRejoined": 0, "joinedHanging": 0,
            "lineNumbers": 0, "lineNumbersOdd": 0, "ms": 0, "msAttested": 0, "msInferred": 0, "msUnresolved": 0,
            "msSlashOnly": 0, "msApprox": 0, "msExtraSlash": 0, "centredKept": 0, "tables": 0, "tableLines": 0, "headings": []}


def print_report(key, data, r):
    m = data["meta"]
    print("── %s ── AA %d:%d–%d" % (m["work"], m["volume"], *m["aa"]))
    print("  sections %(sections)d  blocks %(blocks)d  pages %(pages)d  words %(words)d  "
          "joined across a page %(joinedLayout)d  dehyphenated %(dehyphenated)d  mean OCR confidence %(meanOcrConf)s" % m["counts"])
    print("  front: %d lines   contents: %d entries   editorial: %d lines" %
          (len(data["front"]), len(data["contents"]), len(m.get("editorialNote", []))))
    print("  line numbers in margin: %d (%d not a plain multiple of 5 — OCR noise, dropped all the same)" %
          (r["lineNumbers"], r["lineNumbersOdd"]))
    print("  manuscript breaks: %d   number read %d   numbered by exact sequence %d   left unnumbered %d" %
          (r["ms"], r["msAttested"], r["msInferred"], r["msUnresolved"]))
    print("    `/` with no number beside it %d   number with no `/` in its line %d   further `/` left in text %d" %
          (r["msSlashOnly"], r["msApprox"], r["msExtraSlash"]))
    print("  centred lines kept as text (not a heading by the layout): %d" % r["centredKept"])
    print("  tables kept as OCR lines, not prose: %d (%d lines)" % (r["tables"], r["tableLines"]))
    print("  merged margin digits split off: %d   lines that were all margin: %d   margin numbers put back into their line: %d   split lines rejoined: %d" %
          (r["splitMerged"], r["marginOnlyLines"], r["marginRejoined"], r["linesRejoined"]))
    if r["joinedHanging"]:
        print("  hanging-indent lines joined to the line before (joined: inferred): %d" % r["joinedHanging"])
    if r["headMismatch"]:
        print("  running head disagrees with leaf arithmetic:", r["headMismatch"][:12])
    if r["borrowedEdges"]:
        print("  pages too short to fit the column, edges borrowed:", r["borrowedEdges"])
    print("  headings (%d):" % len(r["headings"]))
    for p, h in r["headings"]:
        print("    %d  %s" % (p, h))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("work", help="one of %s; or all (the AA XXIV texts), or aa29" % ", ".join(WORKS))
    ap.add_argument("cache")
    ap.add_argument("out")
    a = ap.parse_args()
    group = {"all": "aa24", "aa29": "aa29"}.get(a.work)
    keys = [k for k in WORKS if WORKS[k].get("group", "aa24") == group] if group else [a.work]
    need = sorted({(WORKS.get(k) or VALIDATION[k])["vol"] for k in keys})
    leaves = {v: load_leaves(os.path.join(a.cache, VOLS[v]["item"] + "_djvu.xml")) for v in need}
    for k in keys:
        r = new_report()
        data = build(k, leaves, r)
        out = os.path.join(a.out, WORKS[k].get("file", "logik-%s-24-ocr.js" % k)) if group else a.out
        write(k, data, out)
        print_report(k, data, r)
        print("  wrote", out)


if __name__ == "__main__":
    main()
