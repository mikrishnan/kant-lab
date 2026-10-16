#!/usr/bin/env python3
"""Extract the Jäsche *Logik* (AA IX) into data/logik-jasche-9.js.

    python3 scripts/parse_jasche.py Textfiles/Vol9Logic.rtfd/TXT.rtf data/logik-jasche-9.js

Unlike the other extractors this one reads the RTF itself, so it needs neither
`textutil` nor a Mac. It does so because the formatting is evidence here: the
italics mark Latin terms and emphasis, a centred line under a heading is the
printed summary of the section, and a hanging indent is an enumeration. A plain
text conversion loses all three.

Read the report each run prints. There are no tests; it is the only signal that
a change to the transcription or to this reader has broken something. It ends in
`clean` when (1) all 120 §§ are present, once each, in order; (2) every
character of the transcription, less its page markers, `|` and whitespace, is
in exactly one emitted block or heading, in order; and (3) every page offset and
emphasis span lies inside its block's text.

What the output is for
----------------------
The transcription sets the text in paragraphs broken by the Academy Edition's
page markers, so a paragraph of Jäsche's text can arrive in two pieces. This
joins them back into running prose and keeps every page the prose crossed as a
character offset into the joined text, so any stretch can still be cited as
`AA 9:N`.

Conventions of this transcription, which are easy to break
-----------------------------------------------------------
* `― 12 ―` stands alone in a centred paragraph, followed by an empty one, and
  marks the *start* of AA IX page 12. Seven page numbers are marked twice running
  (16, 21, 33, 49, 65, 81, 86) and two are not marked at all (88, 125). All are
  the transcription's own and are reported; none is corrected here.
* `|` marks a break that fell inside the text. **At the end of a paragraph,
  before a page marker, it is the signal that the paragraph continues** across
  the marker. Tight against the preceding character it fell inside a word and
  rejoins (`wirk|lich` → `wirklich`); with a space before it, it fell between two
  whole words and becomes a space.
* `——————` stands alone on its line and is kept as a `rule` block, with the
  number of rules since the § began recorded on every later block as `zone`. In
  the Elementarlehre and Methodenlehre the rule comes before the §'s *Anmerkungen*;
  the transcription does not say what it means in the Einleitung, so `zone` counts
  and does not interpret.
* `§. 12.` and the § 's title stand together in one heading paragraph, split by
  U+2028. Only a heading paragraph begins that way; a § in the middle of a
  sentence is a cross-reference and stays in the text.
* A heading's printed running title (`[Einleitung.]`) and its printed range
  (`[§§ 1 – 16]`) are kept beside the title, not in it.
* U+2028 is a soft line break and becomes a space; U+00A0 is a plain space.
* Words the transcription sets in Arial rather than Helvetica (`Analytik`,
  `Dialektik`) are a font-substitution artefact of the file, not emphasis, and are
  not marked. Only italics are emphasis.
* `{￼}` — five places where the transcription has a placeholder image (a 48×48
  question mark) inside braces, in the Elementarlehre (AA 9:103, 108, 126),
  and one stray DEL character. Both become U+FFFC, the object replacement
  character, which means "something the transcription could not set". They are
  counted in `meta.counts.unset` and not repaired.
* The footnote references `*[1]` and `*[2]` (§ on the modes of assent) are kept as
  printed; the hyperlink behind the asterisk, which points at the InteLex site, is
  dropped as it is not the Academy Edition's.

Attested vs. inferred
---------------------
* `joined: ["mark"]` — the transcription's own `|`. Attested.
* `joined: ["inferred"]` — a page marker fell between two paragraphs, no `|`
  stood there, the first broke off without terminal punctuation and the second
  began in lower case. The extractor joined them on its own judgement and says so.
* `maybeContinues` — the same break, but the next paragraph opens with a capital
  (German nouns do), so the extractor cannot tell and leaves them apart. Nine.
* Everything else — `zone`, `anm`, `indent`, `align`, `em` — records what the
  transcription shows. Nothing in a block is worked out beyond that.
* The first page of the Titelei and the Inhalt, before the first marker, is not
  a numbered page of the text; they are `front` and `contents`, with no AA page.
"""
import argparse
import json
import re
import sys
from collections import Counter

GLOBAL = "LOGIK_JASCHE"

# ───────────────────────── reading the RTF ─────────────────────────────────

CW = re.compile(r"\\([a-zA-Z]+)(-?\d+)? ?|\\'([0-9a-fA-F]{2})|\\([^a-zA-Z])")
ITALIC_FONT = re.compile(r"Oblique|Italic")
UNSET = "\ufffc"          # a glyph the transcription could not set
NORMAL, ITALIC = 0, 1


def read_rtf(path):
    """RTF → list of paragraphs. A paragraph is {fs, qc, li, chars: [(ch, italic)]}."""
    s = open(path, encoding="latin-1").read()
    head = s[: s.find("\\paperw") if "\\paperw" in s else 4000]
    fonts = {int(m.group(1)): m.group(2)
             for m in re.finditer(r"\\f(\d+)\\[a-z]+\\fcharset\d+ ([A-Za-z\-]+);", head)}
    paras = []
    chars = []
    prop = {"qc": False, "li": 0}
    stack = []
    st = {"fs": 28, "f": 0, "i": False, "skip": False, "uc": 1}
    skipuc = 0
    first_fs = [None]

    def new_para():
        nonlocal chars
        paras.append({"fs": first_fs[0] or st["fs"], "qc": prop["qc"], "li": prop["li"], "chars": chars})
        chars = []
        first_fs[0] = None

    def emit(text):
        if not text:
            return
        if first_fs[0] is None and text.strip():
            first_fs[0] = st["fs"]
        it = st["i"] or bool(ITALIC_FONT.search(fonts.get(st["f"], "")))
        for ch in text:
            chars.append((ch, NORMAL if not it else ITALIC))

    i, n = 0, len(s)
    while i < n:
        c = s[i]
        if c == "{":
            stack.append(dict(st))
            i += 1
        elif c == "}":
            st = stack.pop() if stack else st
            i += 1
        elif c == "\\":
            m = CW.match(s, i)
            if not m:
                i += 1
                continue
            i = m.end()
            if m.group(1):
                w, a = m.group(1), m.group(2)
                if w in ("fonttbl", "colortbl", "expandedcolortbl", "stylesheet", "info"):
                    st["skip"] = True
                elif w == "NeXTGraphic":
                    emit(UNSET)
                    st["skip"] = True
                    if stack:
                        stack[-1]["skip"] = True      # the outer group holds only the fallback glyph
                elif w == "fs":
                    st["fs"] = int(a)
                elif w == "f":
                    st["f"] = int(a)
                elif w == "i":
                    st["i"] = a != "0"
                elif w == "pard":
                    prop = {"qc": False, "li": 0}
                elif w == "qc":
                    prop["qc"] = True
                elif w == "li":
                    prop["li"] = int(a)
                elif w == "par":
                    new_para()
                elif w == "cell":
                    new_para()
                elif w == "line":
                    emit("\u2028")
                elif w == "tab":
                    emit(" ")
                elif w == "u":
                    v = int(a)
                    v = v + 65536 if v < 0 else v
                    if not st["skip"]:
                        emit(chr(v))
                    skipuc = st["uc"]
                elif w == "uc":
                    st["uc"] = int(a)
                elif w in ("emdash", "endash", "lquote", "rquote", "ldblquote", "rdblquote", "bullet"):
                    if not st["skip"]:
                        emit({"emdash": "—", "endash": "–", "lquote": "‘", "rquote": "’",
                              "ldblquote": "“", "rdblquote": "”", "bullet": "•"}[w])
            elif m.group(3):
                if skipuc:
                    skipuc -= 1
                elif not st["skip"]:
                    emit(bytes([int(m.group(3), 16)]).decode("cp1252"))
            else:
                ch = m.group(4)
                if ch == "\n":
                    new_para()
                elif ch == "~":
                    emit("\xa0")
                elif ch in "\\{}" and not st["skip"]:
                    emit(ch)
                elif ch == "*":
                    st["skip"] = True
        else:
            j = i
            while j < n and s[j] not in "\\{}":
                j += 1
            chunk = s[i:j].replace("\r", "").replace("\n", "")
            i = j
            if skipuc and chunk:
                k = min(skipuc, len(chunk))
                chunk = chunk[k:]
                skipuc -= k
            if not st["skip"]:
                emit(chunk)
    new_para()
    for p in paras:
        # DEL (U+007F) is the same kind of gap as the placeholder image
        p["chars"] = [(UNSET if ch == "\x7f" else ch, it) for ch, it in p["chars"]]
    return paras


def plain(p):
    return "".join(ch for ch, _ in p["chars"])


# ───────────────────────── building the text ───────────────────────────────

PAGE = re.compile(r"(\|?)[\s\xa0]*―[\s\xa0]*(\d+)[\s\xa0]*―[\s\xa0]*")
RULE = re.compile(r"^—{3,}$")
SECT = re.compile(r"^§\.\s*(\d+)\.? ?\s*(.*)$", re.S)
RANGE = re.compile(r"\[\s*§§?\s*(\d+)\s*[-–—]\s*(\d+)\s*\]\s*$")
ANM = re.compile(r"^(Anmerkung(?:en)?(?: \d+)?)\.")
SPACES = " \xa0 \t"
END = ".!?:;)”»’…]"
NOSPACE = re.compile(r"\s+")


class Buf:
    """One paragraph of the text, being assembled from pieces."""
    def __init__(self, page, at_page_start, props):
        self.ch = []                 # [(char, italic)]
        self.pages = [{"p": page, "i": 0}] if at_page_start else []
        self.aa = page
        self.joined = set()
        self.cont = False            # a `|` said the paragraph continues
        self.tight = False           # ... and it fell inside a word
        self.pending = None          # page marker seen while continuing
        self.after_page = None       # page marker seen after the paragraph ended
        self.saw_page = False
        self.maybe = False           # broke off mid-sentence at a page marker and was not joined
        self.props = props


def add(buf, chars):
    """Append text. A `|` inside it rejoins a word (tight) or is a space (spaced)."""
    for ch, it in chars:
        if ch == "|":
            if buf.ch and buf.ch[-1][0] != " ":
                continue
            ch = " "
        if ch in SPACES or ch == " ":
            ch = " "
            if not buf.ch or buf.ch[-1][0] == " ":
                continue
        buf.ch.append((ch, it))


def segments(p):
    """A paragraph as ('text', chars, endpipe, tight) and ('page', n) items."""
    chars = p["chars"]
    s = plain(p)
    items, last = [], 0
    for m in PAGE.finditer(s):
        seg = list(chars[last:m.start()])
        if m.group(1):
            seg.append(("|", NORMAL))
        items.append(("text", seg))
        items.append(("page", int(m.group(2))))
        last = m.end()
    items.append(("text", list(chars[last:])))
    out = []
    for it in items:
        if it[0] == "page":
            out.append(it)
            continue
        seg = it[1]
        while seg and seg[-1][0] in SPACES:
            seg.pop()
        endpipe = bool(seg) and seg[-1][0] == "|"
        tight = False
        if endpipe:
            seg.pop()
            tight = bool(seg) and seg[-1][0] not in SPACES
            while seg and seg[-1][0] in SPACES:
                seg.pop()
        if any(ch not in SPACES for ch, _ in seg) or endpipe:
            out.append(("text", seg, endpipe, tight))
    return out


def spans(ch, flag):
    out, k, n = [], 0, len(ch)
    while k < n:
        if ch[k][1] == flag:
            j = k
            while j < n and ch[j][1] == flag:
                j += 1
            e = j
            while e > k and ch[e - 1][0] == " ":
                e -= 1
            if e > k:
                out.append([k, e])
            k = j
        else:
            k += 1
    return out


def split_heading(raw):
    """A heading's lines → (title, running title, printed range)."""
    lines = [l.strip() for l in raw.split("\n") if l.strip()]
    running, rng, keep = None, None, []
    for l in lines:
        m = RANGE.search(l)
        if m:
            rng = {"from": int(m.group(1)), "to": int(m.group(2)), "raw": m.group(0).strip()}
            l = l[:m.start()].strip()
            if not l:
                continue
        if l.startswith("[") and l.endswith("]") and "§" not in l:
            running = l
            continue
        keep.append(l)
    return " ".join(keep), running, rng, " / ".join(lines)


def parse(path):
    paras = read_rtf(path)
    rep = {"pages": [], "joins": Counter(), "irregular": [], "ambiguous": [], "unset": 0}
    sections, secs_by_id = [], {}
    paras_idx = []
    st = {"sec": None, "pending": None, "part": None, "para": None, "zone": 0,
          "page": None, "fresh": False, "buf": None}
    emitted = []                                     # what the round trip checks

    # ── front matter: everything before the first page marker is the Titelei and
    # the Inhalt. Its lines are kept as they stand.
    k = 0
    while k < len(paras) and not PAGE.fullmatch(plain(paras[k]).strip() + " "):
        k += 1
    front_lines = [plain(p).strip() for p in paras[:k] if plain(p).strip()]
    if "Inhalt" in front_lines:
        at = front_lines.index("Inhalt")
        front, toc = front_lines[:at], front_lines[at + 1:]
    else:
        front, toc = front_lines, []
    front = [l.replace("  ", "\n").replace(" ", "\n") for l in front]
    contents = []
    for t in toc:
        t = t.replace(" ", " / ")
        m = RANGE.search(t)
        e = {"label": (t[:m.start()] if m else t).strip()}
        if m:
            e["range"] = {"from": int(m.group(1)), "to": int(m.group(2)), "raw": m.group(0).strip()}
        contents.append(e)

    def ensure_section():
        """A heading opens a section only once something is printed under it."""
        if st["sec"] is not None and st["pending"] is None:
            return st["sec"]
        title, running, rng, heading = st["pending"]
        sec = {"id": "s%02d" % (len(sections) + 1), "part": st["part"], "title": title,
               "heading": heading, "blocks": []}
        if running:
            sec["running"] = running
        if rng:
            sec["range"] = rng
        sections.append(sec)
        st["sec"], st["pending"] = sec, None
        return sec

    def next_id(sec):
        return "jasche-%s-%03d" % (sec["id"], len(sec["blocks"]) + 1)

    def flush():
        b = st["buf"]
        st["buf"] = None
        if b is None:
            return
        ch = list(b.ch)
        while ch and ch[-1][0] == " ":
            ch.pop()
        if not ch:
            return
        sec = ensure_section()
        text = "".join(c for c, _ in ch)
        block = {"id": next_id(sec), "kind": "text", "aa": b.aa, "text": text}
        pg = [{"p": x["p"], "i": min(x["i"], len(text))} for x in b.pages]
        if pg:
            block["pages"] = pg
            block["aaEnd"] = pg[-1]["p"]
        em = spans(ch, ITALIC)
        if em:
            block["em"] = em
        if b.props["qc"]:
            block["align"] = "center"
        if b.props["li"]:
            block["indent"] = max(1, round(b.props["li"] / 575))
        m = ANM.match(text)
        if m:
            block["anm"] = m.group(1)
        pr = st["para"]
        if pr is not None:
            block["para"] = pr["n"]
            pr["blocks"].append(block["id"])
            if pr["aa"] is None:
                pr["aa"] = block["aa"]
            pr["aaEnd"] = block.get("aaEnd", block["aa"])
        if st["zone"]:
            block["zone"] = st["zone"]
        if b.maybe:
            block["maybeContinues"] = True
        if b.joined:
            block["joined"] = sorted(b.joined)
            rep["joins"].update(b.joined)
        rep["unset"] += text.count(UNSET)
        sec["blocks"].append(block)
        emitted.append(NOSPACE.sub("", text))

    def new_buf(props):
        st["buf"] = Buf(st["page"], st["fresh"], props)
        st["fresh"] = False
        return st["buf"]

    expected = []                                    # the transcription, as the check sees it
    for p in paras[k:]:
        t = plain(p).strip()
        if not t:
            continue
        # ── the expectation for the round trip: the paragraph with markers, `|` and spaces gone
        expected.append(NOSPACE.sub("", PAGE.sub("", t).replace("|", "")))

        if RULE.match(t):
            flush()
            st["zone"] += 1
            sec = ensure_section()
            rb = {"id": next_id(sec), "kind": "rule", "aa": st["page"], "zone": st["zone"]}
            if st["para"] is not None:
                rb["para"] = st["para"]["n"]
                st["para"]["blocks"].append(rb["id"])
            sec["blocks"].append(rb)
            emitted.append(NOSPACE.sub("", t))
            continue

        sm = SECT.match(t)
        if p["fs"] >= 34 and sm:
            flush()
            sec = ensure_section()
            title = NOSPACE.sub(" ", sm.group(2).replace(" ", " ")).strip()
            pr = {"n": int(sm.group(1)), "title": title, "sec": sec["id"], "blocks": [], "aa": None, "aaEnd": None}
            paras_idx.append(pr)
            st["para"], st["zone"] = pr, 0
            emitted.append(NOSPACE.sub("", t))
            continue

        if p["fs"] >= 34 and not PAGE.search(t):
            flush()
            raw = t.replace(" ", "\n")
            if p["fs"] >= 38:
                st["part"] = re.sub(r"\s*\[.*?\]\s*", " ", raw.split("\n")[0]).strip().rstrip(".")
            title, running, rng, heading = split_heading(raw)
            st["pending"] = (title, running, rng, heading)
            st["para"], st["zone"] = None, 0
            emitted.append(NOSPACE.sub("", t))
            continue

        for item in segments(p):
            buf = st["buf"]
            if item[0] == "page":
                n = item[1]
                rep["pages"].append(n)
                st["page"] = n
                if buf is not None and buf.cont:
                    buf.pending, buf.saw_page = n, True
                elif buf is not None:
                    buf.after_page = n
                else:
                    st["fresh"] = True
                continue
            _, chars, endpipe, tight = item
            if buf is not None and buf.cont:
                if not buf.saw_page:
                    rep["irregular"].append("a `|` with no page marker after it, at AA 9:%s" % buf.aa)
                if not buf.tight and buf.ch and buf.ch[-1][0] != " ":
                    buf.ch.append((" ", NORMAL))
                if buf.pending is not None:
                    buf.pages.append({"p": buf.pending, "i": len(buf.ch)})
                    buf.pending = None
                buf.joined.add("mark")
                add(buf, chars)
                buf.cont, buf.tight, buf.saw_page = endpipe, tight, False
                continue
            if buf is not None and buf.after_page is not None:
                prev = "".join(c for c, _ in buf.ch).rstrip()
                first = next((c for c, _ in chars if c not in SPACES), "")
                if prev and prev[-1] not in END and first.islower():
                    buf.ch.append((" ", NORMAL))
                    buf.pages.append({"p": buf.after_page, "i": len(buf.ch)})
                    buf.after_page = None
                    buf.joined.add("inferred")
                    add(buf, chars)
                    buf.cont, buf.tight = endpipe, tight
                    continue
                if prev and prev[-1] not in END:
                    buf.maybe = True
                    rep["ambiguous"].append("AA 9:%s: …%s | %s…" % (buf.after_page, prev[-25:], "".join(c for c, _ in chars)[:25]))
                st["fresh"] = True               # the marker belongs to the next paragraph
            flush()
            nb = new_buf({"qc": p["qc"], "li": p["li"]})
            add(nb, chars)
            nb.cont, nb.tight = endpipe, tight
    flush()
    return front, contents, sections, paras_idx, rep, emitted, expected


# ───────────────────────── checks, report, output ──────────────────────────

def first_marker_page(sections):
    return None


def check(sections, paras_idx, rep, emitted, expected):
    problems = []
    nums = [p["n"] for p in paras_idx]
    if nums != list(range(1, 121)):
        missing = sorted(set(range(1, 121)) - set(nums))
        problems.append("§§ are not 1–120 once each in order: %d found, missing %s" % (len(nums), missing))
    a, b = "".join(emitted), "".join(expected)
    if a != b:
        k = next((i for i, (x, y) in enumerate(zip(a, b)) if x != y), min(len(a), len(b)))
        problems.append("round trip differs at character %d: emitted …%s… vs transcription …%s…"
                        % (k, a[max(0, k - 30):k + 30], b[max(0, k - 30):k + 30]))
    for s in sections:
        for blk in s["blocks"]:
            n = len(blk.get("text", ""))
            for x in blk.get("pages", []):
                if not 0 <= x["i"] <= n:
                    problems.append("page offset outside %s" % blk["id"])
            for x, y in blk.get("em", []):
                if not 0 <= x < y <= n:
                    problems.append("emphasis outside %s" % blk["id"])
    return problems


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   Jäsche Logik, Academy Edition IX (1800)
   Machine-extracted from the transcription in Textfiles/Vol9Logic.rtfd by
   scripts/parse_jasche.py — do not hand-edit; corrections belong in the
   extractor so they survive the next run.

   Immanuel Kant's Logik, the handbook for lectures that G. B. Jäsche edited from
   Kant's own notes on Meier's Auszug (AA 9:3–150): Jäsche's Vorrede, the
   Einleitung, the Elementarlehre and the Methodenlehre, §§ 1–120. Kant lectured
   on the same Auszug, so this is the text of the Blomberg, Busolt and Wiener
   transcripts (logik-blomberg-24.js, logik-busolt-24.js, logik-wiener-24.js) in
   Jäsche's editing. It has the same shape as theirs, with a § index added.

   LOGIK_JASCHE.meta       work, volume, date, editor, source, the AA page range,
                           the extractor's counts and the oddities of the pagination
   LOGIK_JASCHE.front      the title page, verbatim, line by line
   LOGIK_JASCHE.contents   the Inhalt as the transcription gives it: { label, range? }
   LOGIK_JASCHE.sections   the text
   LOGIK_JASCHE.paras      the 120 §§, for tools keyed to § numbers

   Section fields
     id       stable id, `s01`…; a block's id begins with it
     part     the part it belongs to: Vorrede | Einleitung | I. Allgemeine
              Elementarlehre | II. Allgemeine Methodenlehre
     title    the heading's title, as printed
     running  the running title the transcription sets above it, `[Einleitung.]`
     range    the §§ it covers where it prints them: { from, to, raw }
     heading  the whole heading as printed, line breaks as ` / `
     blocks   the text

   Block fields
     id      stable id
     kind    text | rule. `rule` is the horizontal line the transcription sets.
     aa      the AA IX page the block starts on — cite as `AA 9:<aa>`
     aaEnd   the page it ends on, where it runs over one
     pages   where the block crosses a page: { p, i }, page `p` beginning at
             character `i` of `text`. The first entry is at i=0 when the block
             itself begins a page.
     text    the prose, joined. Editorial brackets are left in it. `\\ufffc` is a
             glyph the transcription could not set (six places; see meta).
     em      italic stretches, as [start, end) offsets into `text`: the Latin and
             Greek terms and the emphasis. Words the file sets in another font
             are not emphasis and are not here.
     para    the § the block belongs to, where it is under one
     zone    the number of `——————` rules since the § (or the section) began.
             It counts and does not interpret: under a § the rule comes before the
             Anmerkungen; the transcription does not say what it means elsewhere.
     anm     the label, where the paragraph opens with one: `Anmerkung 1.`
     indent  hanging-indent depth the transcription sets, for enumerations
     align   `center` where the paragraph is centred: under a heading, the
             printed summary of the section
     maybeContinues
             the block breaks off without terminal punctuation at a page marker
             that has no `|`, and the next block begins with a capital, which in
             German a noun may. The extractor did not join them; the next block may
             continue this one.
     joined  present when this block was assembled from more than one piece:
               "mark"     the transcription's own `|`. Attested.
               "inferred" no `|`, but a page marker fell between two paragraphs,
                          the first broke off without terminal punctuation and the
                          second began in lower case. The extractor's own
                          judgement, shown as such.

   Para fields
     n        the § number
     title    its title as printed
     sec      the section it is in
     blocks   the ids of its blocks, in order
     aa, aaEnd  the pages it starts and ends on
   ───────────────────────────────────────────────────────────────────────────── */

"""


def run(rtf, out):
    front, contents, sections, paras_idx, rep, emitted, expected = parse(rtf)
    problems = check(sections, paras_idx, rep, emitted, expected)
    pages = rep["pages"]
    dup = sorted({p for p in pages if pages.count(p) > 1})
    gaps = [(a, b) for a, b in zip(pages, pages[1:]) if b > a + 1]
    backward = [(a, b) for a, b in zip(pages, pages[1:]) if b < a]
    nblocks = sum(len(s["blocks"]) for s in sections)
    words = sum(len(b["text"].split()) for s in sections for b in s["blocks"] if b["kind"] == "text")
    rules = sum(1 for s in sections for b in s["blocks"] if b["kind"] == "rule")
    meta = {
        "work": "Jäsche Logik",
        "label": "Jäsche Logik",
        "volume": 9,
        "date": "1800",
        "editor": "G. B. Jäsche",
        "source": "Textfiles/Vol9Logic.rtfd",
        "aa": [min(pages), max(pages)],
        "counts": {"sections": len(sections), "blocks": nblocks, "paras": len(paras_idx),
                   "words": words, "rules": rules, "pages": len(set(pages)),
                   "joinedAtMark": rep["joins"]["mark"], "joinedInferred": rep["joins"]["inferred"],
                   "unset": rep["unset"]},
        "pagination": {"markedTwice": dup, "gaps": [{"from": a, "to": b} for a, b in gaps]},
    }
    data = {"meta": meta, "front": front, "contents": contents, "sections": sections, "paras": paras_idx}
    with open(out, "w", encoding="utf-8") as fh:
        fh.write(HEADER)
        fh.write("const %s = " % GLOBAL)
        json.dump(data, fh, ensure_ascii=False, indent=1)
        fh.write(";\n")

    print("Jäsche Logik → %s" % out)
    print("  sections %d · blocks %d (%d rules) · §§ %d · words %d" % (len(sections), nblocks, rules, len(paras_idx), words))
    for s in sections:
        print("    %s %-28s %-60s %3d blocks, AA %s–%s" % (
            s["id"], (s["part"] or "")[:28], s["title"][:60], len(s["blocks"]),
            s["blocks"][0]["aa"], s["blocks"][-1].get("aaEnd", s["blocks"][-1]["aa"])))
    print("  AA pages marked %d–%d · %d distinct · marked twice running: %s · no marker for: %s"
          % (min(pages), max(pages), len(set(pages)), dup,
             [p for a, b in gaps for p in range(a + 1, b)]))
    if backward:
        print("  PAGES GO BACKWARDS: %s" % backward)
    print("  joins: %d on the transcription's `|`, %d inferred" % (rep["joins"]["mark"], rep["joins"]["inferred"]))
    print("  glyphs the transcription could not set: %d" % rep["unset"])
    if rep["ambiguous"]:
        print("  left as separate paragraphs although the first breaks off without punctuation (%d): %s"
              % (len(rep["ambiguous"]), " ; ".join(rep["ambiguous"])))
    if rep["irregular"]:
        print("  irregular: %s" % "; ".join(rep["irregular"]))
    if problems or backward:
        for p in problems:
            print("  PROBLEM: " + p)
        return 1
    print("  checks: §§ 1–120 once each, in order; every character of the transcription is in a block or heading — clean")
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("rtf", help="Textfiles/Vol9Logic.rtfd/TXT.rtf")
    ap.add_argument("out", help="data/logik-jasche-9.js")
    a = ap.parse_args()
    sys.exit(run(a.rtf, a.out))


if __name__ == "__main__":
    main()
