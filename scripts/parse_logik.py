#!/usr/bin/env python3
"""Extract the three Logik transcripts of AA XXIV into data/logik-*-24.js.

    textutil -convert txt -output /tmp/blomberg.txt Textfiles/Vol24logikBlomberg.rtfd/TXT.rtf
    textutil -convert txt -output /tmp/busolt.txt   Textfiles/Vol24logikBusolt.rtf
    textutil -convert txt -output /tmp/wiener.txt   Textfiles/Vol24logikWien.rtf
    python3 scripts/parse_logik.py blomberg /tmp/blomberg.txt data/logik-blomberg-24.js
    python3 scripts/parse_logik.py busolt   /tmp/busolt.txt   data/logik-busolt-24.js
    python3 scripts/parse_logik.py wiener   /tmp/wiener.txt   data/logik-wiener-24.js

Read the report each run prints. There are no tests; it is the only signal that
a change to the transcription or to these regexes has broken something. It ends
in `clean` when every paragraph round-trips — that is, when re-inserting the
page markers this extractor pulled out, at the offsets it recorded, reproduces
the transcription's own text exactly.

What the output is for
----------------------
The transcriptions set the text in short lines broken by the Academy Edition's
page markers, so a paragraph of Kant's lecture arrives in three or four pieces.
This joins them back into running prose and keeps every page the prose crossed,
as a character offset into the joined text, so that any stretch of it can still
be cited as `AA 24:N` and the pagination can be put back exactly where it was.

Conventions of these transcriptions, which are easy to break
------------------------------------------------------------
* `― xxiv.162 ―` marks the *start* of AA XXIV page 162. The suffixed forms
  `613u` and `613uu` are the transcription's way of marking a second and third
  anchor on one page, not pages of their own: both are page 613. The raw form
  is kept beside the number.
* `|` marks a page break. **At the end of a line, before a page marker, it is
  the signal that the paragraph continues** — a page marker with no `|` before
  it falls between two paragraphs. Getting this backwards either shatters the
  text into page-sized fragments or runs unrelated paragraphs together.
  A `|` tight against the preceding character fell inside a word and rejoins
  (`Gewiß|heit` → `Gewißheit`); with a space before it, it fell between two
  whole words and becomes a space.
* `||` is not that. In the Wiener Logik `|| V` marks 57 passages, and is kept
  verbatim in the text.
* `[471]` is the manuscript's own pagination. It is lifted out of the text into
  `ms`, with the offset it stood at, exactly as the AA pages are. Every other
  bracket is editorial and stays: `[ Textlücke: AA: Die ]`, `[AA: judicium ]`,
  `[erg. nicht]`, `[ ... ]`, `< bricht ab >`.
* U+2028 (line separator) is a soft line break inside an RTF paragraph, used
  for the line breaks of the headings as the manuscripts set them. It becomes a
  space, so `Der | Dritte Abschnitt⁠Von der Größe | der | Gelahrten Erkenntniß`
  reads as one heading.
* U+00A0 is used for a plain space throughout.
* A section opens with its provenance line — `[Logik Busolt] (ca. 1789/90. Ms.:
  Berlin. Nach dem Orig.)` — preceded by the section's title and followed by the
  title again, sometimes twice and in a different form. All of them are kept:
  the one before the provenance line as `title`, the ones after as `headings`.
* Blomberg alone keys its lecture to Meier's §§, in headings that stand alone on
  their line: `§ 249`, `§: 92: et §: 93:`, `§ 66- 91`, `§phus 250`. The heading
  is kept verbatim and the numbers parsed out of it beside it, so that a tool
  can line the lecture up against the Meier reader.

Attested vs. inferred
---------------------
Two joins are the extractor's own inference rather than the transcription's,
and both are marked on the paragraph that results:

* `joined: ["mark"]` — the transcription's own `|`. Attested.
* `joined: ["inferred"]` — no `|`, but the line broke off without terminal
  punctuation and the next began in lower case. Marked so that a reader can
  see the paragraph break was removed on this extractor's judgement.
"""
import argparse
import json
import re
import sys
from collections import Counter

LSEP = chr(0x2028)   # written this way so no editor or `sed` pass can eat it
NBSP = chr(0x00A0)
PAGE_MARK = chr(0x01)   # private sentinels, placed while a paragraph is being
MS_MARK = chr(0x02)     # assembled and resolved to offsets when it is flushed

WORKS = {
    "blomberg": {
        "global": "LOGIK_BLOMBERG",
        "work": "Logik Blomberg",
        "label": "II. Logik Blomberg",
        "tag": "Logik Blomberg",
        "date": "ca. 1771",
        "source": "Textfiles/Vol24logikBlomberg.rtfd",
        "paras": True,          # keyed to Meier's §§
    },
    "busolt": {
        "global": "LOGIK_BUSOLT",
        "work": "Logik Busolt",
        "label": "VI. Logik Busolt",
        "tag": "Logik Busolt",
        "date": "ca. 1789/90",
        "source": "Textfiles/Vol24logikBusolt.rtf",
        "paras": False,
    },
    "wiener": {
        "global": "LOGIK_WIENER",
        "work": "Wiener Logik",
        "label": "VIII. Wiener Logik",
        "tag": "Wiener Logik",
        "date": "1780ff.",
        "source": "Textfiles/Vol24logikWien.rtf",
        "paras": False,
    },
}

RE_PAGE = re.compile(r"^―\s*xxiv\.(\d+)(u*)\s*―$")
RE_MS = re.compile(r"\[(\d+)\]")
RE_RULE = re.compile(r"^_{6,}$")
RE_VGL = re.compile(r"^Vgl\. ")
# A § standing alone on its line is a heading; one inside a sentence is a
# cross-reference and stays in the text.
RE_PARA_HEAD = re.compile(r"^§[\s.:]*(phus)?[\s.:]*\d")
# The InteLex navigation and copyright that wrap the transcription. Not the AA.
RE_CHROME = re.compile(
    r"^(Immanuel Kant: Vorlesungen|Vorlesungen über Logik|Frontmatter|Titlepage"
    r"|© Copyright|InteLex, NLX)"
)
TERMINAL = re.compile(r"[.:;!?»«)\]–—]\s*$")
# An enumerator opening a line: `1.)`, `a.`, `2 do`, `III.`, `β)`, `A:`.
ENUM = re.compile(
    r"^(\(?\d+\s*[.):]|\d+\s*(mo|do|tio|to|te)\b|[a-hA-H]{1,2}\s*[.):]"
    r"|[IVX]+\.|[α-ωΑ-Ω]\s*\))"
)


def norm(text):
    """Flatten the transcription's two kinds of invisible character."""
    return text.replace(LSEP, " ").replace(NBSP, " ")


def pipes(line):
    """Resolve `|` page breaks, leaving `||` alone — it is the Wiener Logik's."""
    out, i = [], 0
    while i < len(line):
        if line[i] == "|":
            if line[i:i + 2] == "||":
                out.append("||")
                i += 2
                continue
            # Tight against the previous character: the break fell inside a
            # word, and the halves rejoin with nothing between them.
            if out and out[-1] and not out[-1][-1].isspace():
                i += 1
                while i < len(line) and line[i] == " ":
                    i += 1
                continue
            out.append(" ")
            i += 1
            continue
        out.append(line[i])
        i += 1
    return re.sub(r"  +", " ", "".join(out)).strip()


def parse_meier_ref(raw):
    """Pull Meier's §§ out of one of Blomberg's headings, keeping the heading."""
    nums = [int(n) for n in re.findall(r"\d+", raw)]
    ref = {"raw": raw, "nums": nums}
    if len(nums) == 2 and re.search(r"\d\s*(-|–|bis)\s*\d", raw):
        ref["from"], ref["to"] = nums[0], nums[1]
    return ref


class Section:
    def __init__(self, idx, title, headings, provenance):
        self.id = "s%02d" % idx
        self.title = title
        self.headings = headings
        self.provenance = provenance
        self.title_src = "line"
        self.blocks = []


def split_sections(lines, tag):
    """Cut the file into front matter and sections at the provenance lines."""
    starts = [
        i for i, l in enumerate(lines)
        if l.startswith("[%s] (" % tag) or l.startswith("[%s]  (" % tag)
    ]
    if not starts:
        sys.exit("no section provenance lines found for [%s]" % tag)
    return starts


def title_key(s):
    """A section title reduced to letters, for comparing its two printings.

    The pre- and post-provenance printings of one title differ in punctuation
    and in where the manuscript's `|` line breaks fall — `Der andere
    Abschnitt. Von der Weitläufigkeit` against `Der andere Abschnitt | Von der
    Weitläufigkeit` — so neither survives a literal comparison.
    """
    s = s.replace("|", " ").lower()
    s = re.sub(r"[^0-9a-zäöüß ]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def heading_block(lines, start):
    """The title lines around a provenance line, and where the body begins.

    A section's title is printed after the provenance line, and *usually* once
    before it as well. Taking the line before on trust is what this got wrong:
    where that printing is absent the line before is the previous section's
    last paragraph, which then became the title and — because the previous
    section was cut off at it — was lost from the text. Three of Blomberg's 18
    sections, two of Busolt's 33 and one of the Wiener Logik's 13 hit this, and
    the round-trip check cannot see it, since it tests the blocks that were
    emitted and not whether every line became one.

    So the line before counts as the title only when the transcription prints
    it after the provenance line too. Otherwise the title is the manuscript's
    own heading and the line stays with the section it belongs to.
    """
    # Anything between the provenance line and the first page marker is a
    # further form of the heading — the manuscript's own, usually.
    headings, i = [], start + 1
    while i < len(lines) and not RE_PAGE.match(lines[i].strip()):
        if lines[i].strip() and not lines[i].strip().startswith("["):
            headings.append(lines[i].strip())
        i += 1

    back = start - 1
    while back >= 0 and not lines[back].strip():
        back -= 1
    cand = lines[back].strip() if back >= 0 else ""
    key, keys = title_key(cand), [title_key(h) for h in headings]
    if key and any(key in h or h in key for h in keys):
        return cand, headings, "line", back, i
    # Not a title. Leave the line to the section before — `back` becomes
    # `start`, so nothing is cut off — and take the heading as the title.
    return (headings[0] if headings else ""), headings, \
        ("heading" if headings else "none"), start, i


def resolve(raw):
    """Split an assembled paragraph into prose plus its two paginations.

    The offsets have to be measured against the *finished* text — after the
    doubled spaces left by the joining are squeezed out and the ends trimmed —
    or every one of them points a character or two off.
    """
    chunks, marks = [], []
    i = 0
    while i < len(raw):
        ch = raw[i]
        if ch in (PAGE_MARK, MS_MARK):
            j = raw.index(ch, i + 1)
            marks.append((sum(len(c) for c in chunks), ch, int(raw[i + 1:j])))
            i = j + 1
            continue
        chunks.append(ch)
        i += 1
    joined = "".join(chunks)
    # Where each mark stands, counted in characters that are not whitespace —
    # the one measure the joining cannot shift.
    solid = [sum(1 for c in joined[:at] if not c.isspace()) for at, _, _ in marks]
    # Walk the text once, writing the finished string and recording, for each
    # position of `joined`, where it ended up in it.
    where, out, prev_space = [], [], True
    for ch in joined:
        space = ch.isspace()
        if space and prev_space:
            where.append(len(out))      # squeezed away; marks here land on the
            continue                    # next character that survives
        where.append(len(out))
        out.append(" " if space else ch)
        prev_space = space
    where.append(len(out))
    body = "".join(out)
    lead = len(body) - len(body.lstrip())
    body = body.strip()
    pages, ms = [], []
    ok = "".join(joined.split()) == "".join(body.split())
    for (at, kind, n), before in zip(marks, solid):
        i = min(max(where[at] - lead, 0), len(body))
        # The mark must still have the same text to its left, to the character.
        if sum(1 for c in body[:i] if not c.isspace()) != before:
            ok = False
        (pages if kind == PAGE_MARK else ms).append({"p": n, "i": i})
    return body, pages, ms, ok


def flush(buf, state, section, work, report):
    """Resolve one assembled paragraph into text plus its two paginations."""
    start = state.pop("start", state["page"])
    raw = "".join(buf).strip()
    if not raw:
        return
    body, pages, ms, ok = resolve(raw)
    if not body:
        return
    block = {
        "id": "%s-%s-%03d" % (work, section.id, len(section.blocks) + 1),
        "kind": state.pop("kind", "text"),
        "aa": start if not pages or pages[0]["i"] > 0 else pages[0]["p"],
        "text": body,
    }
    if pages:
        block["pages"] = pages
        block["aaEnd"] = pages[-1]["p"]
    if ms:
        block["ms"] = ms
    if state.get("para"):
        block["para"] = state["para"]
    joins = state.pop("joins", set())
    if joins:
        block["joined"] = sorted(joins)
    state["open"] = False
    section.blocks.append(block)
    report["blocks"] += 1
    if not ok:
        report["roundtrip"].append(block["id"])


def parse(path, key):
    work = WORKS[key]
    raw = norm(open(path, encoding="utf-8").read())
    lines = raw.split("\n")
    starts = split_sections(lines, work["tag"])
    report = {"blocks": 0, "roundtrip": [], "joins": Counter(), "pages": set(),
              "titles": Counter()}

    # Front matter: the title page and the Inhaltsverzeichnis, verbatim, minus
    # the InteLex chrome that is no part of the Academy Edition.
    front, contents = [], []
    fm = [l.strip() for l in lines[:starts[0]]]
    fm = [l for l in fm if l and not RE_CHROME.match(l) and l != work["label"]]
    i = 0
    in_toc = False
    while i < len(fm):
        l = fm[i]
        if "Inhaltsverzeichnis" in l:
            in_toc = True
            i += 1
            continue
        if RE_RULE.match(l):
            i += 1
            continue
        m = RE_PAGE.match(l)
        if m:
            report["pages"].add(int(m.group(1)))
            i += 1
            continue
        if in_toc:
            # The table of contents comes through as label / page-span pairs.
            if i + 1 < len(fm) and re.fullmatch(r"[\d\s\-–]+", fm[i + 1]):
                contents.append({"label": l, "pages": fm[i + 1].strip()})
                i += 2
                continue
            contents.append({"label": l})
            i += 1
            continue
        front.append(pipes(l))
        i += 1

    sections = []
    bounds = starts + [len(lines)]
    for n, start in enumerate(starts):
        title, headings, title_src, title_at, body_at = heading_block(lines, start)
        sec = Section(n + 1, pipes(title), [pipes(h) for h in headings],
                      lines[start].strip())
        sec.title_src = title_src
        report["titles"][title_src] += 1
        # A section's title line belongs to it, not to the section before —
        # but only when that line really is its title.
        end = bounds[n + 1]
        if n + 1 < len(starts):
            nxt_title_at = heading_block(lines, starts[n + 1])[3]
            end = nxt_title_at
        emit_body(lines[body_at:end], sec, key, work, report)
        sections.append(sec)
        for b in sec.blocks:
            for j in b.get("joined", []):
                report["joins"][j] += 1
    return work, front, contents, sections, report


def emit_body(lines, section, key, work, report):
    buf, state = [], {"page": None, "para": None, "open": False}
    for raw_line in lines:
        line = raw_line.strip()
        if not line or RE_CHROME.match(line) or line == work["label"]:
            continue
        m = RE_PAGE.match(line)
        if m:
            page = int(m.group(1))
            report["pages"].add(page)
            # A `|` ending the last line is the transcription saying that this
            # paragraph runs on across the page break. A page marker with no
            # `|` before it falls between two paragraphs, and ends this one.
            if buf and state["open"]:
                buf.append(PAGE_MARK + str(page) + PAGE_MARK)
                state.setdefault("joins", set()).add("mark")
                # The paragraph began on the page now ending. Keep it, since
                # `state["page"]` is about to move on to the one it runs into.
                state.setdefault("start", state["page"])
            else:
                flush(buf, state, section, key, report)
                buf = []
            state["page"] = page
            continue
        if RE_RULE.match(line):
            flush(buf, state, section, key, report)
            buf = []
            state["kind"] = "rule"
            buf.append(line)
            flush(buf, state, section, key, report)
            buf = []
            continue
        if RE_VGL.match(line):
            flush(buf, state, section, key, report)
            buf = []
            state["kind"] = "note"
            buf.append(line)
            flush(buf, state, section, key, report)
            buf = []
            continue
        if work["paras"] and RE_PARA_HEAD.match(line):
            flush(buf, state, section, key, report)
            buf = []
            state["para"] = parse_meier_ref(line)
            continue
        # Whether this line continues has to be read off the line as the
        # transcription set it: `pipes()` is about to resolve that `|` away.
        bare = line.rstrip()
        continues = bare.endswith("|") and not bare.endswith("||")
        text = pipes(line)
        text = RE_MS.sub(lambda mm: MS_MARK + mm.group(1) + MS_MARK, text)
        if buf:
            sofar = "".join(buf)
            visible = re.sub(r"[\x01\x02]\d+[\x01\x02]", "", sofar).rstrip()
            head = re.sub(r"^[\x01\x02]\d+[\x01\x02]", "", text).lstrip()
            if state["open"] or sofar.endswith(PAGE_MARK):
                # The transcription's own `|`, either straight into the next
                # line or across the page marker just consumed.
                state.setdefault("joins", set()).add("mark")
                buf.append(" " + text)
                state["open"] = continues
                continue
            # No marker said to join, but the line broke off mid-sentence and
            # the next one opens in lower case. Inference, and flagged as one.
            if (visible and not TERMINAL.search(visible) and head
                    and head[0].islower() and not ENUM.match(head)):
                state.setdefault("joins", set()).add("inferred")
                buf.append(" " + text)
                state["open"] = continues
                continue
            flush(buf, state, section, key, report)
            buf = []
        buf.append(text)
        state["open"] = continues
    flush(buf, state, section, key, report)


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   {work}, Academy Edition XXIV ({date})
   Machine-extracted from the transcription in {source} by
   scripts/parse_logik.py — do not hand-edit; corrections belong in the
   extractor so they survive the next run.

   One of Kant's three logic lecture transcripts in AA XXIV that this
   repository carries; {siblings} are the others, in the same
   shape. The transcription sets the text in short lines broken by the Academy
   Edition's page markers; this file has it as running prose, with every page
   it crossed kept as an offset into that prose, so any stretch of it can be
   cited as `AA 24:N` and the pagination put back exactly where it stood.

   {glob}.meta     work, siglum, volume, the AA page range, the manuscript
   {pad}          note the volume prints, and the extractor's counts
   {glob}.front    the title page, verbatim, line by line
   {glob}.contents the volume's Inhaltsverzeichnis: {{ label, pages }}
   {glob}.sections the lecture itself

   Section fields
     id         stable id, `s01`…; a block's id begins with it
     title      the section's title as the transcription prints it before the
                provenance line; where it prints none there, the manuscript's
                own heading stands in. Never body text — see `titleSrc`
     titleSrc   where `title` came from: `line` for its own line before the
                provenance line, `heading` for the manuscript heading after it
                standing in because there was no such line, `none` for a
                section the transcription gives no title at all (the Titelei
                of Busolt and the Wiener Logik). Attested either way; recorded
                because the two are not the same evidence
     headings   the heading again as the manuscript sets it, every form of it
                the transcription prints, in order. Kept rather than reconciled
                with `title`: the two differ, and the difference is the AA's.
     provenance the dating and shelfmark line the volume repeats at each
                section, verbatim
     blocks     the text

   Block fields
     id      stable id
     kind    text | note | rule. `note` is an AA cross-reference standing in
             the text (`Vgl. Logik Philippi § 428-544, xxiv 484ff.`); `rule`
             is a horizontal rule the transcription sets.
     aa      the AA XXIV page the block starts on — cite as `AA 24:<aa>`.
             For a block that runs over a page, that is the page before the
             first entry in `pages`, and text from that entry on is on the
             later page: cite the page the quoted words stand on
     aaEnd   the page it ends on, where it runs over one
     pages   where the block crosses a page: {{ p, i }}, page `p` beginning at
             character `i` of `text`. A block that begins at the top of a page
             has no entry for it; `aa` names the page. Re-inserting these restores the
             transcription's own lineation exactly; the extractor checks that
             on every run.
     ms      the manuscript's own pagination, the same way: {{ p, i }} for the
             `[471]` the AA prints in the text band
     text    the prose, joined. Editorial brackets are left in it verbatim —
             `[ Textlücke: AA: Die ]`, `[AA: judicium ]`, `[erg. nicht]`,
             `< bricht ab >` — and so is the Wiener Logik's `|| V`.
{para_doc}     joined  present when this block was assembled from more than one line
             of the transcription, saying on whose authority:
               "mark"     the transcription's own `|`, which marks a page or
                          line break with the text running on through it.
                          Attested.
               "inferred" no marker said so, but the line broke off
                          mid-sentence and the next opened in lower case, and
                          the extractor joined them on its own judgement.
                          Shown as an inference, per the repository's
                          fidelity rule.
             Both, where a block was assembled both ways.
   ───────────────────────────────────────────────────────────────────────── */

"""

PARA_DOC = """     para    Blomberg alone keys the lecture to Meier's Auszug: the § heading
             verbatim as `para.raw`, with the numbers in it as `para.nums`,
             and `para.from`/`para.to` when it states a range
"""


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("work", choices=sorted(WORKS))
    ap.add_argument("txt", help="textutil -convert txt output of the RTF")
    ap.add_argument("out", help="the .js file to write")
    args = ap.parse_args()

    work, front, contents, sections, report = parse(args.txt, args.work)
    pages = sorted(report["pages"])
    blocks = [b for s in sections for b in s.blocks]
    data = {
        "meta": {
            "work": work["work"],
            "label": work["label"],
            "volume": 24,
            "date": work["date"],
            "provenance": sections[0].provenance if sections else "",
            "source": work["source"],
            "aa": [pages[0], pages[-1]] if pages else None,
            "counts": {
                "sections": len(sections),
                "blocks": len(blocks),
                "pages": len(pages),
                "joinedAtMark": sum(1 for b in blocks if "mark" in b.get("joined", [])),
                "joinedInferred": sum(1 for b in blocks if "inferred" in b.get("joined", [])),
            },
        },
        "front": front,
        "contents": contents,
        "sections": [
            {
                "id": s.id,
                "title": s.title,
                "titleSrc": s.title_src,
                "headings": s.headings,
                "provenance": s.provenance,
                "blocks": s.blocks,
            }
            for s in sections
        ],
    }
    siblings = {
        "blomberg": "logik-busolt-24.js and logik-wiener-24.js",
        "busolt": "logik-blomberg-24.js and logik-wiener-24.js",
        "wiener": "logik-blomberg-24.js and logik-busolt-24.js",
    }[args.work]
    header = HEADER.format(
        work=work["work"], date=work["date"], source=work["source"],
        glob=work["global"], pad=" " * len(work["global"]),
        siblings=siblings,
        para_doc=PARA_DOC if work["paras"] else "",
    )
    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write(header)
        fh.write("const %s = " % work["global"])
        json.dump(data, fh, ensure_ascii=False, indent=1)
        fh.write(";\n")

    words = sum(len(b["text"].split()) for b in blocks)
    print("%s — %s" % (work["work"], args.out))
    print("  sections %d   blocks %d   words %d" % (len(sections), len(blocks), words))
    print("  AA 24:%d–%d, %d pages attested" % (pages[0], pages[-1], len(pages)))
    gaps = [b - a for a, b in zip(pages, pages[1:]) if b - a > 1]
    if gaps:
        print("  page gaps: %s" % ", ".join(
            "%d→%d" % (a, b) for a, b in zip(pages, pages[1:]) if b - a > 1))
    print("  joined blocks: %d on the transcription's own mark, %d inferred"
          % (data["meta"]["counts"]["joinedAtMark"],
             data["meta"]["counts"]["joinedInferred"]))
    print("  manuscript pages recorded: %d"
          % sum(len(b.get("ms", [])) for b in blocks))
    t = report["titles"]
    print("  titles: %d on their own line, %d from the manuscript heading, %d none"
          % (t["line"], t["heading"], t["none"]))
    if work["paras"]:
        withp = [b for b in blocks if b.get("para")]
        heads = {tuple(b["para"]["nums"]) for b in withp}
        print("  Meier §§: %d headings, %d blocks under one"
              % (len(heads), len(withp)))
    kinds = Counter(b["kind"] for b in blocks)
    print("  kinds: %s" % ", ".join("%s %d" % kv for kv in sorted(kinds.items())))
    if report["roundtrip"]:
        print("  ROUND-TRIP FAILED on %d blocks: %s"
              % (len(report["roundtrip"]), ", ".join(report["roundtrip"][:8])))
        sys.exit(1)
    print("  round-trip: all %d blocks reproduce the transcription — clean"
          % len(blocks))


if __name__ == "__main__":
    main()
