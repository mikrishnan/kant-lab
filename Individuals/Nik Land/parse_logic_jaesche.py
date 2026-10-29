#!/usr/bin/env python3
"""Extract the Jäsche Logik of AA IX into logic-jaesche-9.js, in the shape of the
Logik transcripts of AA XXIV (data/logik-*-24.js).

    textutil -convert txt -output /tmp/jaesche.txt Textfiles/Vol9Logic.rtfd/TXT.rtf
    python3 "Individuals/Nik Land/parse_logic_jaesche.py" /tmp/jaesche.txt \\
        "Individuals/Nik Land/logic-jaesche-9.js"

Read the report it prints. There are no tests; it is the only signal that a
change to the transcription or to these regexes has broken something. It ends
in `clean` when (1) every block round-trips — re-inserting the page markers
pulled out, at the offsets recorded, reproduces the joined text — (2) every
line of the transcription except the page markers has become part of a heading,
a § heading or a block, in order (a line dropped before a block was built passes
the first check, as scripts/parse_logik.py warns), and (3) the §§ come out as
1–120 in order, each section holding the §§ its own heading says it does.

The pagination helpers (`pipes`, `resolve`) are scripts/parse_logik.py's, imported
rather than copied, so the offsets mean exactly what they mean in the AA XXIV files.

How this transcription differs from the XXIV ones
-------------------------------------------------
* **A line is a paragraph.** The XXIV transcripts set the text in short lines
  broken at the AA's page markers; this one has each paragraph on one line and
  puts `― 16 ―` between lines. A paragraph therefore runs across a marker only
  where it is said to: the line before ends in `|` (attested — `joined: "mark"`),
  or it broke off without terminal punctuation and the line after opens in lower
  case (`joined: "inferred"`). Two consecutive lines with no marker between them
  are never joined.
* `― 16 ―` marks the start of AA IX page 16, as the XXIV markers do, but without
  the `xxiv.` prefix. A marker that repeats the page already current (it follows
  a section heading the transcription set ahead of it) adds no page.
* `|` inside a word (`da|her`, `Ver|standes`) is a line or page break and rejoins
  it. At the end of a line it is the signal that the paragraph runs on.
* There is no manuscript pagination, so no `ms`. `[1]` is not that here: it is a
  footnote's number, written `*[1]` in the text and again at the head of the note.
* The transcription stands in for each of Jäsche's five logical diagrams with `{}`.
  Each becomes a `figure` block with that text, so the place is kept and the
  figure's absence is visible.
* `——————` stands between a § and its Anmerkungen and between Anmerkungen; each
  becomes a `rule` block, as in the XXIV files.
* The Jäsche Logik is keyed to its own 120 §§, in headings that stand alone on
  their line: `§. 1. Begriff überhaupt und dessen Unterschied von der Anschauung.`
  Every block under one carries `para`.
* The volume's own running heads — `[Einleitung.]`, `[Dritter Abschnitt. Von den
  Schlüssen.]` — stay in `headings`, verbatim, ahead of the section's own title.
* Both U+2028 (line separator) and U+00A0 (plain space) are flattened to a space.

Attested vs. inferred
---------------------
* `joined: ["mark"]` — the transcription's own `|` at the end of a line.
* `joined: ["inferred"]` — no `|`, but the line broke off without terminal
  punctuation and the next opened in lower case.
* `fn.src` — `mark` for the block that opens with `*[n]`, `inferred` for the blocks
  after it that the extractor takes to belong to the same note, which is to say
  every block up to the next `*[n]`, the next rule that closes the section, or the
  next § or section heading. The transcription gathers these notes at the foot of
  the section and does not say where each one ends.
"""
import argparse
import json
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.normpath(os.path.join(HERE, "..", "..", "scripts")))
from parse_logik import (  # noqa: E402
    ENUM, LSEP, NBSP, PAGE_MARK, norm, pipes, resolve,
)

# parse_logik's TERMINAL less the closing parenthesis: a line that breaks off at a
# page marker after `(Condescendenz)` is mid-sentence, not finished.
TERMINAL = re.compile(r"[.:;!?»«\]–—]\s*$")

GLOBAL = "LOGIK_JAESCHE"
WORK = "Jäsche Logik"
TAG = "jaesche"
SOURCE = "Textfiles/Vol9Logic.rtfd"

RE_PAGE = re.compile(r"^―\s*(\d+)\s*―$")
RE_RULE = re.compile(r"^—{6,}$")
RE_FIG = re.compile(r"^\{\}$")
RE_PARA = re.compile(r"^§\.\s*(\d+)\.\s*(.*)$")
RE_RANGE = re.compile(r"\[§§\s*(\d+)\s*[–—-]\s*(\d+)\s*\]")
RE_FN = re.compile(r"^\*\[(\d+)\]")
RE_BRACKETED = re.compile(r"^\[[^\]]*\]$")
# Lines the InteLex export wraps round the volume. Not the AA.
CHROME = {"LOGIK (1800)", "Logik (1800)", "Titelseite"}


def flat(line):
    """A line with both invisible characters flattened to a space, runs squeezed."""
    return re.sub(r"\s+", " ", line.replace(LSEP, " ").replace(NBSP, " ")).strip()


def key(s):
    """Text reduced to its solid characters, for the coverage check."""
    return re.sub(r"[\s|]", "", norm(s))


def section_head(raw):
    """Recognise a heading line. Returns None, or (kind, info).

    `part` is one of the three parts, whose heading does not open a section of
    its own. `section` carries the title, the § range it states, if any, and the
    running head the volume prints ahead of it, if any.
    """
    f = flat(raw)
    if f == "Einleitung.":
        return "part", {"part": "Einleitung"}
    if f == "I. Allgemeine Elementarlehre.":
        return "part", {"part": "I. Allgemeine Elementarlehre"}
    if f.startswith("Vorrede."):
        return "section", {"title": "Vorrede.", "part": ""}
    pieces = [p.strip() for p in raw.replace(NBSP, " ").split(LSEP)]
    rng = RE_RANGE.search(flat(raw))
    paras = [int(rng.group(1)), int(rng.group(2))] if rng else None
    context = [p for p in pieces if RE_BRACKETED.match(RE_RANGE.sub("", p).strip())
               and not RE_RANGE.fullmatch(p)]
    body = [RE_RANGE.sub("", p).strip() for p in pieces]
    body = [p for p in body if p and not RE_BRACKETED.match(p)]
    title = flat(" ".join(body))
    if f.startswith("II. Allgemeine Methodenlehre."):
        return "section", {"title": "Allgemeine Methodenlehre.", "paras": paras,
                           "part": "II. Allgemeine Methodenlehre",
                           "context": [flat(c) for c in context]}
    if re.match(r"^\[Einleitung\.\] ", f):
        return "section", {"title": title, "part": "Einleitung", "paras": paras,
                           "context": [flat(c) for c in context]}
    if re.match(r"^(Erster|Zweiter|Dritter) Abschnitt\.", f):
        return "section", {"title": title, "paras": paras, "context": []}
    if f.startswith("[Dritter Abschnitt. Von den Schlüssen.]"):
        return "section", {"title": title, "paras": paras,
                           "context": [flat(c) for c in context]}
    if re.match(r"^(I|II)\. Beförderung ", f):
        return "section", {"title": title, "paras": paras, "context": []}
    return None


class Parser:
    def __init__(self):
        self.sections = []
        self.paragraphs = []
        self.pages = set()
        self.repeats = 0
        self.suspect = []       # page breaks left unjoined that look like joins
        self.roundtrip = []
        self.part = ""
        self.pending = []       # heading lines waiting for their section
        self.expect_title = False
        self.subtitle_ok = False
        self.page = None
        self.pending_pages = []
        self.buf, self.open, self.joins = [], False, set()
        self.block_page = None
        self.block_fn = None
        self.para = None
        self.fn = None

    # -- blocks ------------------------------------------------------------
    def flush(self, kind="text"):
        raw = "".join(self.buf).strip()
        sec = self.sections[-1] if self.sections else None
        if raw and sec is None:
            sys.exit("text before the first section heading: %r" % raw[:60])
        if raw:
            body, pages, _, ok = resolve(raw)
            if body:
                block = {
                    "id": "%s-%s-%03d" % (TAG, sec["id"], len(sec["blocks"]) + 1),
                    "kind": "footnote" if self.block_fn and kind == "text" else kind,
                    "aa": self.block_page if not pages or pages[0]["i"] > 0
                    else pages[0]["p"],
                    "text": body,
                }
                if pages:
                    block["pages"] = pages
                    block["aaEnd"] = pages[-1]["p"]
                if self.para:
                    block["para"] = self.para
                if self.block_fn and kind == "text":
                    block["fn"] = {"n": self.block_fn[0], "src": self.block_fn[1]}
                if self.joins:
                    block["joined"] = sorted(self.joins)
                sec["blocks"].append(block)
                if not ok:
                    self.roundtrip.append(block["id"])
        self.buf, self.open, self.joins = [], False, set()
        self.pending_pages = []
        self.block_fn = None

    def solo(self, kind, text):
        """A block of one line that no paragraph runs into or out of."""
        self.flush()
        self.buf = [text]
        self.block_page = self.page
        self.flush(kind)

    # -- lines -------------------------------------------------------------
    def new_section(self, info, raw):
        self.flush()
        if "part" in info:
            self.part = info["part"]
        n = len(self.sections) + 1
        sec = {
            "id": "s%02d" % n,
            "part": self.part,
            "title": info["title"],
            "headings": self.pending + [flat(raw)],
            "blocks": [],
        }
        if info.get("context"):
            sec["context"] = info["context"]
        if info.get("paras"):
            sec["paras"] = info["paras"]
        self.pending = []
        self.sections.append(sec)
        self.para = None
        self.fn = None
        self.expect_title = False
        self.subtitle_ok = True

    def feed(self, raw):
        line = raw.strip()
        if not line:
            return
        m = RE_PAGE.match(line)
        if m:
            page = int(m.group(1))
            self.pages.add(page)
            if page == self.page:
                self.repeats += 1       # a restatement of the page already current
                return
            self.page = page
            if self.buf:
                self.pending_pages.append(page)
            return
        f = flat(line)
        if RE_RULE.match(f):
            self.solo("rule", f)
            self.subtitle_ok = False
            return
        if RE_FIG.match(f):
            self.solo("figure", f)
            self.subtitle_ok = False
            return
        head = section_head(line)
        if head is None and self.expect_title:
            head = "section", {"title": f}      # `Einleitung.` is followed by its first title
        if head:
            kind, info = head
            if kind == "part":
                self.flush()
                self.part = info["part"]
                self.pending.append(f)
                self.expect_title = info["part"] == "Einleitung"
                return
            self.new_section(info, line)
            return
        if self.subtitle_ok and not self.sections[-1]["blocks"] and (
                f.startswith("—") or self.sections[-1]["title"] == "Anhang."):
            # The title runs on into a second line, which the volume sets apart.
            sec = self.sections[-1]
            sec["headings"].append(f)
            sec["title"] = sec["title"] + " " + f
            self.subtitle_ok = False
            return
        self.subtitle_ok = False
        m = RE_PARA.match(f)
        if m:
            self.flush()
            sec = self.sections[-1]
            self.para = {"n": int(m.group(1)), "title": m.group(2), "raw": f}
            self.fn = None
            self.paragraphs.append({"n": self.para["n"], "title": m.group(2),
                                    "sec": sec["id"], "aa": self.page})
            return
        self.text(line)

    def text(self, line):
        bare = flat(line)
        continues = bare.endswith("|") and not bare.endswith("||")
        text = pipes(flat(line))
        fm = RE_FN.match(text)
        if fm:
            self.fn = int(fm.group(1))
        if self.buf:
            visible = "".join(self.buf)
            visible = re.sub(r"[\x01\x02]\d+[\x01\x02]", "", visible).rstrip()
            if self.open:
                # The transcription's own `|` at the end of the line before.
                self.joins.add("mark")
                self.join(text, continues)
                return
            if (self.pending_pages and visible and not TERMINAL.search(visible)
                    and text[0].islower() and not ENUM.match(text)):
                self.joins.add("inferred")
                self.join(text, continues)
                return
            if self.pending_pages and TERMINAL.search(visible) and text[0].islower():
                self.suspect.append((self.page, visible[-40:], text[:40]))
            self.flush()
        self.buf = [text]
        self.open = continues
        self.block_page = self.page
        if self.fn is not None:
            self.block_fn = (self.fn, "mark" if fm else "inferred")

    def join(self, text, continues):
        for p in self.pending_pages:
            self.buf.append(PAGE_MARK + str(p) + PAGE_MARK)
        self.pending_pages = []
        self.buf.append(" " + text)
        self.open = continues


def parse(path):
    raw = open(path, encoding="utf-8").read()
    lines = raw.split("\n")
    first = next(i for i, l in enumerate(lines) if RE_PAGE.match(l.strip()))

    # Front matter: the title line and the Inhalt, verbatim, minus the export's
    # own labels. The Inhalt carries no page numbers, only §§.
    front, contents, in_toc = [], [], False
    for l in lines[:first]:
        f = flat(l)
        if not f or f in CHROME:
            continue
        if f == "Inhalt":
            in_toc = True
        elif in_toc:
            contents.append({"label": f})
        else:
            front.append(f)

    p = Parser()
    body = []
    for l in lines[first:]:
        if flat(l) in CHROME:
            continue
        body.append(l)
        p.feed(l)
    p.flush()
    return front, contents, p, body


def check(p, body, contents):
    """The three checks the report ends on. Returns a list of failures."""
    bad = []
    if p.roundtrip:
        bad.append("ROUND-TRIP FAILED on %d blocks: %s"
                   % (len(p.roundtrip), ", ".join(p.roundtrip[:8])))
    # Coverage: every line but the page markers, in order.
    src = "".join(key(l) for l in body if l.strip() and not RE_PAGE.match(l.strip()))
    out, last = [], None
    for sec in p.sections:
        out += [key(h) for h in sec["headings"]]
        for b in sec["blocks"]:
            if b.get("para") != last:
                out.append(key(b["para"]["raw"]) if b.get("para") else "")
                last = b.get("para")
            out.append(key(b["text"]))
    emitted = "".join(out)
    if src != emitted:
        i = next((i for i, (a, b) in enumerate(zip(src, emitted)) if a != b),
                 min(len(src), len(emitted)))
        bad.append("COVERAGE FAILED at character %d of %d (%d emitted): …%s… / …%s…"
                   % (i, len(src), len(emitted), src[max(0, i - 30):i + 30],
                      emitted[max(0, i - 30):i + 30]))
    # The §§: 1–120 in order, and each section holding what its heading states.
    nums = [q["n"] for q in p.paragraphs]
    if nums != list(range(1, 121)):
        bad.append("§§ are not 1–120 in order: %s" % nums[:10])
    for sec in p.sections:
        held = sorted({b["para"]["n"] for b in sec["blocks"] if b.get("para")})
        if "paras" in sec and held and [held[0], held[-1]] != sec["paras"]:
            bad.append("%s %r states §§ %s but holds §§ %d–%d"
                       % (sec["id"], sec["title"], sec["paras"], held[0], held[-1]))
        if "paras" not in sec and held:
            bad.append("%s %r holds §§ %d–%d but states none"
                       % (sec["id"], sec["title"], held[0], held[-1]))
    return bad


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   {work}, Academy Edition IX (1800)
   Immanuel Kant's Logik. Ein Handbuch zu Vorlesungen, ed. G. B. Jäsche.
   Machine-extracted from the transcription in {source} by
   parse_logic_jaesche.py, which stands beside this file — do not hand-edit;
   corrections belong in the extractor so they survive the next run.

   Modelled on the three Logik transcripts of AA XXIV (data/logik-blomberg-24.js,
   logik-busolt-24.js, logik-wiener-24.js) and in the same shape: running prose,
   with every AA page it crossed kept as an offset into it, so that any stretch
   of it can be cited as `AA 9:N` and the pagination put back where it stood.
   It differs from them in being keyed to its own 120 §§ rather than to Meier's,
   in having no manuscript pagination, and in carrying footnotes and figures.
   Nothing in the shared tools loads this file.

   {glob}.meta       work, editor, volume, the AA page range, and the counts
   {glob}.front      the title line, verbatim
   {glob}.contents   the volume's Inhalt, line by line, as {{ label }}. It prints no
   {pad}            page numbers, only the §§
   {glob}.paragraphs the 120 §§: {{ n, title, sec, aa }}, where `aa` is the page the
   {pad}            heading stands on
   {glob}.sections   the work itself

   Section fields
     id         stable id, `s01`…; a block's id begins with it
     part       Einleitung, I. Allgemeine Elementarlehre, II. Allgemeine
                Methodenlehre; empty for Jäsche's Vorrede
     title      the section's title as the transcription prints it, with any
                running head and § range lifted out into the fields below. Where
                the title runs on into a second line (II., Anhang) the two lines
                are joined here and kept apart in `headings`
     context    the volume's running head, brackets kept: `[Einleitung.]`,
                `[Dritter Abschnitt. Von den Schlüssen.]`. Absent where none
     paras      [from, to], the §§ the heading states, `[§§ 44 — 55]`. Absent for
                the Vorrede and the Einleitung, which have none. The extractor
                checks that the section holds exactly these
     headings   every heading line as the transcription prints it, in order,
                including the part's own (`Einleitung.`, `I. Allgemeine
                Elementarlehre.`) where the section is the first under it, with
                the line separators flattened to a space
     blocks     the text

   Block fields
     id      stable id
     kind    text | rule | figure | footnote
             `rule` is the `——————` the transcription sets between a § and its
             Anmerkungen and between Anmerkungen. `figure` is `{{}}`, the
             transcription's stand-in for one of Jäsche's logical diagrams; the
             figure itself is not in it. `footnote` is a note to the text (`fn`)
     aa      the AA IX page the block starts on — cite as `AA 9:<aa>`
     aaEnd   the page it ends on, where it runs over one
     pages   where the block crosses a page: {{ p, i }}, page `p` beginning at
             character `i` of `text`. Re-inserting these restores the
             transcription's own lineation; the extractor checks that on every run
     para    the § the block stands under: `n`, its `title`, and the heading
             verbatim as `raw`. Absent in the Vorrede and Einleitung, and for any
             text that precedes a section's first § heading
     fn      on a footnote block: `n`, the note's number, and `src` — `mark` for
             the block that opens with `*[n]`, `inferred` for the blocks after it
             taken to belong to the same note. The transcription gathers the notes
             at the foot of the section and does not say where one ends. The
             marker `*[n]` is also left in the text where the note is referred to
     text    the prose, joined. Editorial brackets and Jäsche's own are left in it
             verbatim
     joined  present when this block was assembled from more than one line of the
             transcription, saying on whose authority:
               "mark"     the transcription's own `|` at the end of a line, which
                          marks a page break with the text running on through it.
                          Attested.
               "inferred" no marker said so, but the line broke off at a page
                          marker without terminal punctuation and the next opened
                          in lower case, and the extractor joined them on its own
                          judgement. Shown as an inference, per the repository's
                          fidelity rule.
             Both, where a block was assembled both ways.
   ───────────────────────────────────────────────────────────────────────── */

"""


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("txt", help="textutil -convert txt output of Vol9Logic.rtfd/TXT.rtf")
    ap.add_argument("out", help="the .js file to write")
    args = ap.parse_args()

    front, contents, p, body = parse(args.txt)
    bad = check(p, body, contents)
    pages = sorted(p.pages)
    blocks = [b for s in p.sections for b in s["blocks"]]
    data = {
        "meta": {
            "work": WORK,
            "label": "Immanuel Kant's Logik. Ein Handbuch zu Vorlesungen",
            "editor": "Gottlob Benjamin Jäsche",
            "volume": 9,
            "date": "1800",
            "source": SOURCE,
            "aa": [pages[0], pages[-1]],
            "counts": {
                "sections": len(p.sections),
                "paragraphs": len(p.paragraphs),
                "blocks": len(blocks),
                "pages": len(pages),
                "joinedAtMark": sum(1 for b in blocks if "mark" in b.get("joined", [])),
                "joinedInferred": sum(1 for b in blocks if "inferred" in b.get("joined", [])),
            },
        },
        "front": front,
        "contents": contents,
        "paragraphs": p.paragraphs,
        "sections": p.sections,
    }
    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write(HEADER.format(work=WORK, source=SOURCE, glob=GLOBAL,
                               pad=" " * len(GLOBAL)))
        fh.write("const %s = " % GLOBAL)
        json.dump(data, fh, ensure_ascii=False, indent=1)
        fh.write(";\n")

    words = sum(len(b["text"].split()) for b in blocks)
    print("%s — %s" % (WORK, args.out))
    print("  sections %d   §§ %d   blocks %d   words %d"
          % (len(p.sections), len(p.paragraphs), len(blocks), words))
    print("  AA 9:%d–%d, %d pages attested" % (pages[0], pages[-1], len(pages)))
    gaps = ["%d→%d" % (a, b) for a, b in zip(pages, pages[1:]) if b - a > 1]
    if gaps:
        print("  page gaps: %s" % ", ".join(gaps))
    print("  page markers restating the current page, skipped: %d" % p.repeats)
    c = data["meta"]["counts"]
    print("  joined blocks: %d on the transcription's own mark, %d inferred"
          % (c["joinedAtMark"], c["joinedInferred"]))
    print("  page breaks after terminal punctuation, before lower case, left apart: %d"
          % len(p.suspect))
    for pg, a, b in p.suspect:
        print("      p. %d  …%s ¶ %s…" % (pg, a, b))
    kinds = Counter(b["kind"] for b in blocks)
    print("  kinds: %s" % ", ".join("%s %d" % kv for kv in sorted(kinds.items())))
    notes = sorted({b["fn"]["n"] for b in blocks if "fn" in b})
    print("  footnotes: %s, over %d blocks" % (notes, sum(1 for b in blocks if "fn" in b)))
    print("  sections:")
    for s in p.sections:
        held = sorted({b["para"]["n"] for b in s["blocks"] if b.get("para")})
        print("    %s  %-26s %3d blocks  AA 9:%s–%s  %s  %s"
              % (s["id"], s["part"][:26], len(s["blocks"]),
                 s["blocks"][0]["aa"] if s["blocks"] else "?",
                 (s["blocks"][-1].get("aaEnd") or s["blocks"][-1]["aa"]) if s["blocks"] else "?",
                 ("§§ %d–%d" % (held[0], held[-1])) if held else "no §§",
                 s["title"][:60]))
    if bad:
        for b in bad:
            print("  " + b)
        sys.exit(1)
    print("  round-trip, coverage and §§: all %d blocks reproduce the transcription — clean"
          % len(blocks))


if __name__ == "__main__":
    main()
