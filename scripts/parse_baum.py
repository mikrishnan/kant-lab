#!/usr/bin/env python3
"""Extract Baumgarten's *Metaphysica* (AA XVII) into the Baumgarten reader's data file.

Reads the plain-text conversion of Textfiles/Baumgarten.rtfd and writes
data/metaphysica-17.js: the work's outline (MET_SECTIONS) and its §§
(MET_PARAGRAPHS), with Baumgarten's own German equivalents pulled out of the
footnotes into a per-§ gloss list.

    textutil -convert txt -output /tmp/baum.txt Textfiles/Baumgarten.rtfd/TXT.rtf
    python3 scripts/parse_baum.py /tmp/baum.txt data/metaphysica-17.js

Read the report it prints. It is the only signal that a change to the RTF or to
these regexes has broken something.

Conventions of the transcription this relies on
-----------------------------------------------
* U+2028 (line separator) is a soft line break *inside* an RTF paragraph, so the
  file's "lines" have to be split on it as well as on newline. A heading and the
  § that follows it frequently share one physical line.
* U+00A0 is used for a plain space throughout.
* `― 24 ―` marks the *start* of AA XVII page 24. The volume prints Baumgarten's
  text in bands with Kant's Erläuterungen beneath, so the same page number can
  appear twice as the band resumes. That the marker precedes rather than follows
  its page is settled by the word-splits: § 75 runs `... Potest |`, then
  `― 44 ―`, then `gere non possumus`, so what follows the marker is what sits on
  p. 44.
* `[3]` marks page 3 of the 1757 edition Baumgarten himself paginated. Both
  paginations are kept: `aa`/`aaEnd` and `ed`.
* `|` marks where a page break falls inside a word (`evolutio|nem [2] conceptuum`).
  A `|` with no space before it rejoins tight; one with a space before it fell
  between two whole words and becomes a space.
* A bare `§. N.` line whose number has already gone by is not a new paragraph
  and not a running head — it is a closing cross-reference the transcription set
  on its own line. § 100 ends `... est bonum transcendentaliter, §. 99.` There
  are eight, and reading them as paragraph openings loses eight references and
  invents eight empty §§.
* Baumgarten's German equivalents are footnotes: `Ratio*)` in the body, `*) ein
  Grund.` on its own line after the §. Three §§ run past the asterisks into
  letters — § 714 `a)`–`d)`, § 723 `a)`–`n)`, § 781 `a)`–`b)`.
  **The asterisk count is not an index.** It
  restarts when a §'s footnotes run over a page (§ 728 prints `*) **) ***)` and
  then `*) **)` again) and it is sometimes simply wrong in the transcription
  (§ 50 marks its second body term `*)`, § 882 its third `**)`). Markers are
  therefore matched to footnotes **by position**, and the label the volume
  actually prints is kept in `marks` so the reader can show it verbatim.
* §§ 504-699 are not in AA XVII at all — the volume prints a German note saying
  they appear in Bd. XV instead. That note is carried through verbatim rather
  than being silently swallowed, per the repository's fidelity rule.
"""
import argparse
import json
import re
import sys
from collections import Counter

LSEP = chr(0x2028)   # written this way so no editor or `sed` pass can eat it
NBSP = chr(0x00A0)

# The body proper starts here; everything before is the AA's front matter and
# Baumgarten's three prefaces.
BODY_START = 'PROLEGOMENA METAPHYSICORUM.'

AA_PAGE = re.compile(r'^\s*―\s*(\d+)\s*―\s*$')
# The transcription's horizontal rule, which closes the work after § 1000.
RULE = re.compile(r'^\s*_{3,}\s*$')
ED_PAGE = re.compile(r'\[(\d+)\]')
# Anchored at both ends on purpose. After the U+2028 split a real § header always
# stands alone on its line — the transcription separates it from its body with a
# run of soft breaks. Allowing a trailing remainder makes every line that merely
# *opens* with a cross-reference (`§. 640. …`) look like the start of a new §,
# which silently invents about two dozen duplicate §§.
PARA_HEAD = re.compile(r'^\s*(?:\[(\d+)\]\s*)?§\.?\s*(\d+)\s*\.\s*$')
# Asterisk markers are unambiguous — asterisks occur nowhere else in the text.
STAR_MARKER = re.compile(r'(\*+)\)')
# Letter markers are not. They may stand off the word (`stricto a)`) or bind
# tight to it (`felicitasa)`), so spacing cannot tell them from an ordinary word
# ending a parenthesis. What tells them apart is that a marker's `)` closes
# nothing: see letter_markers().
LETTER_MARKER = re.compile(r'(?<=[a-zA-Z\s])([a-z])\)')
# The same markers as they open a footnote, at line start or after a space.
FOOT_MARKER = re.compile(r'(?:^|(?<=\s))(\*+|[a-z])\)')
GLOSS_LINE = re.compile(r'^\s*(?:\*+|[a-z])\)')
# A heading keyword, its Roman numeral, and — often — its title on the same line
# (`PROLEGOMENA METAPHYSICORUM.`). Uppercase only: `Sectio I-XVIII …` in mixed
# case is the AA's German note about the missing §§, not a heading.
HEAD_KIND = re.compile(
    r'^\s*(?:\[(\d+)\]\s*)?(?:⇑\s*)?(PARS|CAPUT|SECTIO|PROLEGOMENA)\b\s*([IVX]*)\s*\.?\s*(.*)$')
# The AA's own note standing in for the §§ it prints in another volume.
GAP_NOTE = re.compile(r'^\s*Sectio\b.*abgedruckt\.\s*$')

# --- Baumgarten's own Synopsis, AA 17:19-23 (orig. pp. XLIV-LIV) -------------
SYNOPSIS_START = re.compile(r'^\s*(?:\[([IVXL]+)\]\s*)?SYNOPSIS\.?\s*$')
ROMAN_PAGE = re.compile(r'^\s*\[([IVXL]+)\]\s*$')
# `I.)` `1)` `A)` `a)` `α)`. The volume letters several levels in Greek, but the
# transcription renders some of those Greek letters as Latin lookalikes — γ as
# `g)`, δ as `d)`, η as `h)`, ω as `w)`, ζ as `z)`, ν as `n)`. Kept as printed.
SYN_MARKER = re.compile(r'^([IVX]+\.\)|\d+\)|[A-Za-zΑ-Ωα-ω]\))\s*')
# `P. I`, `C. II`, `S. IIII` — the Pars / Caput / Sectio an entry names. These
# are in the text, unlike the indentation, so they are the one structural fact
# the Synopsis gives us outright.
SYN_STRUCT = re.compile(r'\b([PCS])\.\s*([IVX]+)\b')
# A § reference in the Synopsis: `§. 7-18`, `§. 821`, or a run of separate §§
# under one sign — `§. 37. 38.` at Ontologia C. I, the only one in the section.
SYN_RANGE = re.compile(
    r'§+\.?\s*(\d+)(?:\s*[-–]\s*(\d+))?((?:\s*[.,]\s*\d+(?:\s*[-–]\s*\d+)?)*)')

ROMAN = {'PARS': 'Pars', 'CAPUT': 'Caput', 'SECTIO': 'Sectio',
         'PROLEGOMENA': 'Prolegomena'}
TYPE = {'PARS': 'part', 'CAPUT': 'head', 'SECTIO': 'sub', 'PROLEGOMENA': 'sub'}

# Readings of AA XVII that look like misprints. The volume's word is *kept* — the
# reader shows it as printed — and the conjecture is attached beside it, marked as
# a conjecture, per the repository rule that the tool's inferences must never
# present as the source's. Add to this table rather than editing the text.
# Every entry is checked against the § it names, so a stale one fails the run.
SUSPECTED_MISPRINTS = {
    10: [('praepositio', 'propositio',
          'The same formula reads »Haec propositio dicitur« at §. 7 and §. 11.')],
    92: [('methaphysice', 'metaphysice',
          'Spelt »metaphysic-« everywhere else in the volume.'),
         ('methaphysica', 'metaphysica',
          'Spelt »metaphysic-« everywhere else in the volume.')],
}

# Latin particles that read badly capitalised inside a title.
LOWER = {'et', 'in', 'ad', 'de', 'per', 'extra', 'cum'}


def titlecase(s):
    """ONTOLOGIA → Ontologia; FINITI SPIRITUS, EXTRA HOMINEM → Finiti Spiritus, extra Hominem."""
    out = []
    for i, w in enumerate(s.split()):
        low = w.lower()
        out.append(low if i and low.strip(',.;:') in LOWER else low[:1].upper() + low[1:])
    return ' '.join(out)


def read_lines(path):
    """Flatten the file into one list of logical lines, NBSP normalised out."""
    lines = []
    for physical in open(path, encoding='utf-8').read().split('\n'):
        for part in physical.split(LSEP):
            lines.append(part.replace(NBSP, ' ').rstrip())
    return lines


def clean(s, report):
    """Assemble body text: drop page markers, heal `|` word-splits, tidy space."""
    if '&' in s:
        for ent, ch in (('&lt;', '<'), ('&gt;', '>'), ('&amp;', '&')):
            s = s.replace(ent, ch)
    for stray in re.findall(r'\{[^}]*\}', s):
        report['artefacts'][stray] += 1
        s = s.replace(stray, ' ')
    s = ED_PAGE.sub(' ', s)
    # § 346 prints `archetypon***` — the only footnote marker in the volume that
    # lost its closing paren in transcription. Give it back, and count it, rather
    # than letting the § quietly come out one gloss short.
    s, n = re.subn(r'(?<=\w)(\*+)(?![*)])', r'\1)', s)
    report['parenRepairs'] += n
    # A `|` flush against the preceding character split a single word across a
    # page break; one with a space before it fell between two whole words.
    s = re.sub(r'(?<=\S)\|\s*', '', s)
    s = s.replace('|', ' ')
    return re.sub(r'\s+', ' ', s).strip()


def letter_markers(body, blanked):
    """Positions of the §'s lettered footnote markers, `a)` … `n)`.

    Two things have to be ruled out. An ordinary word can end a parenthesis
    (`(ectypon, copia)`), and the volume's OCR turns the enumerator `1)` into
    `l)` (§ 728, `erunt l) productiones`). The first is caught by parenthesis
    depth — a marker's `)` closes nothing, so it sits at depth 0 — counted over
    `blanked`, the body with the asterisk markers already taken out, since those
    would otherwise be miscounted as closing parens. The second is caught by
    requiring the letters to ascend from `a`: § 723 really does run a–n (Latin
    skipping j), whereas § 728's lone `l` starts nowhere.
    """
    depth, at_zero = 0, set()
    for k, ch in enumerate(blanked):
        if ch == '(':
            depth += 1
        elif ch == ')':
            if depth == 0:
                at_zero.add(k)
            depth = max(0, depth - 1)

    found = [(m.start(1), m.group(1)) for m in LETTER_MARKER.finditer(body)
             if m.end(1) in at_zero]
    kept, expect = [], 'a'
    for pos, ch in found:
        # the run has to *start* at 'a'; after that it need only ascend
        if ch == 'a' if not kept else ch >= expect:
            kept.append((pos, ch))
            expect = chr(ord(ch) + 1)
    rejected = [c for item, c in ((f, f[1]) for f in found) if item not in kept]
    return kept, rejected


def split_footnotes(line, report):
    """One line can carry more than one footnote (§ 205: `*) Zustand. *) Einigkeit.`)."""
    out = []
    parts = FOOT_MARKER.split(line)     # ['', '*', ' Zustand. ', '*', ' Einigkeit.']
    for label, text in zip(parts[1::2], parts[2::2]):
        out.append((label, clean(text, report).rstrip('.').strip()))
    return out


def parse_synopsis(lines, report):
    """Baumgarten's own conspectus of the whole work, printed before the text.

    Rendered flat, in reading order, deliberately. The printed Synopsis is a
    deeply indented outline, but **the indentation is not in the source** — it
    survives neither the RTF (four `\\li` runs in the whole section) nor the text
    conversion. Reconstructing it from the markers alone cannot be done reliably:
    `a)` and `b)` are shared between the Latin series and the Greek one the
    transcription transliterates, so `a) b) g) d)` and `a) b) c)` are
    indistinguishable until their third member. Inventing a tree here would be
    exactly the inference the repository forbids presenting as the source's, so
    each entry keeps its marker as printed and the reader shows them in a gutter.

    What *is* attested is kept: the `P.`/`C.`/`S.` token an entry names, its §
    range, and the 1757 page it falls on.
    """
    try:
        i = next(k for k, l in enumerate(lines) if SYNOPSIS_START.match(l.strip()))
    except StopIteration:
        report['synopsisMissing'] = True
        return []

    m = SYNOPSIS_START.match(lines[i].strip())
    ed = m.group(1)
    entries, pending = [], None
    i += 1
    while i < len(lines):
        bare = lines[i].strip()
        i += 1
        if not bare:
            continue
        if RULE.match(bare):
            break
        if AA_PAGE.match(bare):
            continue
        pg = ROMAN_PAGE.match(bare)
        if pg:
            ed = pg.group(1)
            continue

        mk = SYN_MARKER.match(bare)
        marker, text = (mk.group(1), bare[mk.end():].strip()) if mk else (None, bare)
        # The volume sometimes breaks a marker onto its own line (`β)` then
        # `intellectus S. II.`); join it back onto what it labels.
        if marker and not text:
            pending = marker
            continue
        if pending:
            marker, pending = pending, None

        rec = {'m': marker, 't': text, 'ed': ed}
        st = SYN_STRUCT.search(text)
        if st:
            rec['ref'] = f'{st.group(1)}. {st.group(2)}'
        paras = []
        for a, b, more in SYN_RANGE.findall(text):
            paras.append((int(a), int(b) if b else int(a)))
            for n in re.findall(r'(\d+)(?:\s*[-–]\s*(\d+))?', more):
                paras.append((int(n[0]), int(n[1]) if n[1] else int(n[0])))
        if paras:
            rec['from'], rec['to'] = paras[0][0], paras[-1][1]
        entries.append(rec)

    # The transcription drops two of the Synopsis's pages, so its § coverage is
    # not continuous. Find the break rather than letting it pass unremarked.
    spans = [(e['from'], e['to']) for e in entries if 'from' in e]
    for (_, a), (b, _) in zip(spans, spans[1:]):
        if b > a + 1:
            report['synopsisGaps'].append((a + 1, b - 1))
    report['synopsisEntries'] = len(entries)
    return entries


def parse(path, report):
    lines = read_lines(path)
    try:
        start = next(i for i, l in enumerate(lines) if BODY_START in l and '⇑' in l)
    except StopIteration:
        sys.exit(f'error: never found the body start ({BODY_START!r}) in {path}')
    report['frontMatterLines'] = start
    synopsis = parse_synopsis(lines[:start], report)

    sections, paragraphs = [], []
    stack = {}            # heading kind → id fragment, for building nested ids
    cur_sec = cur_para = None
    aa = None
    last_num = 0
    pending_note = None
    i = start

    def flush():
        nonlocal cur_para
        if cur_para is None:
            return
        num = cur_para['num']
        body = clean(' '.join(cur_para['body']), report)

        # Collect both kinds of marker with their positions, then number them
        # left to right. Markers pair with footnotes by position, not by label.
        spans = [(m.start(), m.end(), m.group(1)) for m in STAR_MARKER.finditer(body)]
        blanked = body
        for a, b, _ in spans:
            blanked = blanked[:a] + ' ' * (b - a) + blanked[b:]
        letters, rejected = letter_markers(body, blanked)
        for pos, ch in letters:
            spans.append((pos, pos + 2, ch))
        for ch in rejected:
            report['rejectedLetters'].append((num, ch))
        spans.sort()

        marks = [lbl for _, _, lbl in spans]
        out, at = [], 0
        for k, (a, b, _) in enumerate(spans, 1):
            out.append(body[at:a])
            out.append(f'@@{k}@@')
            at = b
        out.append(body[at:])
        body = ''.join(out)

        foot = cur_para['glosses']
        if len(marks) != len(foot):
            report['countMismatch'].append((num, len(marks), len(foot)))
        for k, (label, _) in enumerate(foot):
            if k < len(marks) and label != marks[k]:
                report['labelDisagrees'].append((num, k + 1, marks[k], label))

        rec = {
            'num': num,
            'section': cur_para['section'],
            'aa': cur_para['aa'],
            'ed': cur_para['ed'],
            'text': body,
            'glosses': [g for _, g in foot],
            # what the volume actually prints at each marker, in body order
            'marks': marks,
        }
        if cur_para['aaEnd'] != cur_para['aa']:
            rec['aaEnd'] = cur_para['aaEnd']
        if not body:
            report['emptyBody'].append(num)
        if cur_para['aa'] is None:
            report['noAaPage'].append(num)

        flags = []
        for word, read, why in SUSPECTED_MISPRINTS.get(num, ()):
            if not re.search(r'\b' + re.escape(word) + r'\b', body):
                sys.exit(f'error: SUSPECTED_MISPRINTS names {word!r} in § {num}, '
                         f'but the § does not contain it — the table is stale')
            flags.append({'w': word, 'r': read, 'y': why})
            report['flagged'].append((num, word))
        if flags:
            rec['flags'] = flags
        paragraphs.append(rec)
        cur_para = None

    while i < len(lines):
        bare = lines[i].strip()

        if not bare:
            i += 1
            continue

        if RULE.match(bare):
            i += 1
            continue

        m = AA_PAGE.match(bare)
        if m:
            aa = int(m.group(1))
            if cur_para is not None:
                cur_para['aaEnd'] = aa
            i += 1
            continue

        if GAP_NOTE.match(bare):
            if cur_sec is not None:
                sections[-1]['note'] = bare
            else:
                pending_note = bare
            i += 1
            continue

        m = HEAD_KIND.match(bare)
        if m:
            flush()
            edp, kind, num, same = m.group(1), m.group(2), m.group(3), m.group(4)
            if edp:
                report['edPages'].add(int(edp))
            # The title is either on the same line as the keyword
            # (`PROLEGOMENA METAPHYSICORUM.`) or on the next one (`SECTIO I.`
            # then `POSSIBILE.`). In the latter case it can share its line with
            # the section's first §: `POSSIBILE.§. 7.`
            j = i + 1
            if same.strip():
                title = clean(same, report)
            else:
                title = ''
                while j < len(lines):
                    nxt = lines[j].strip()
                    if not nxt:
                        j += 1
                        continue
                    if PARA_HEAD.match(nxt) or HEAD_KIND.match(nxt) or GAP_NOTE.match(nxt):
                        break
                    head, sep, rest = nxt.partition('§')
                    title = clean(head, report)
                    if sep:
                        lines[j] = '§' + rest    # re-read this line as the § header
                    else:
                        j += 1
                    break

            if kind == 'PARS':
                stack = {'PARS': 'pars' + num.lower()}
                sid = stack['PARS']
            elif kind == 'PROLEGOMENA' and 'PARS' not in stack:
                stack, sid = {}, 'proleg'
            elif kind == 'PROLEGOMENA':
                sid = stack['PARS'] + '-proleg'
            elif kind == 'CAPUT':
                stack.pop('CAPUT', None)
                stack['CAPUT'] = 'cap' + num.lower()
                sid = '-'.join(stack[k] for k in ('PARS', 'CAPUT') if k in stack)
            else:
                base = '-'.join(stack[k] for k in ('PARS', 'CAPUT') if k in stack)
                sid = (base + '-' if base else '') + 'sec' + num.lower()

            label = ROMAN[kind] + (f' {num}' if num else '')
            if title:
                # `Pars I · Ontologia`, but `Prolegomena Metaphysicorum` — the
                # separator belongs after a numeral, not inside a plain title.
                label += (' · ' if num else ' ') + titlecase(title.rstrip('.'))

            if any(s['id'] == sid for s in sections):
                report['dupSectionIds'].append(sid)
            sections.append({
                'id': sid,
                'label': label,
                'type': 'part' if sid == 'proleg' else TYPE[kind],
                # the heading exactly as the volume sets it, Baumgarten's own
                # Roman numerals included (he writes IIII and XVIIII). When the
                # title shared the keyword's line it is already inside `bare`.
                'raw': ' '.join((bare.replace('⇑', '') if same.strip()
                                 else f"{bare.replace('⇑', '')} {title}").split()),
            })
            if pending_note:
                sections[-1]['note'] = pending_note
                pending_note = None
            cur_sec = sid
            i = i + 1 if same.strip() else j
            continue

        m = PARA_HEAD.match(bare)
        if m:
            edp, num = m.group(1), int(m.group(2))
            # §§ run strictly upward, so a number already passed does not open a
            # paragraph. It is the tail of the current one: the transcription
            # puts a closing cross-reference on its own line, and § 100 really
            # does end `... est bonum transcendentaliter, §. 99.`
            if num <= last_num:
                report['trailingRefs'].append((last_num, num))
                if cur_para is not None:
                    cur_para['body'].append(bare)
                i += 1
                continue
            flush()
            if edp:
                report['edPages'].add(int(edp))
            if cur_sec is None:
                sys.exit(f'error: § {num} appears before any heading')
            cur_para = {'num': num, 'section': cur_sec, 'aa': aa, 'aaEnd': aa,
                        'ed': int(edp) if edp else None, 'body': [], 'glosses': []}
            last_num = num
            i += 1
            continue

        if GLOSS_LINE.match(bare) and cur_para is not None:
            cur_para['glosses'].extend(split_footnotes(bare, report))
            i += 1
            continue

        if cur_para is not None:
            if cur_para['ed'] is None:
                edp = ED_PAGE.search(bare)
                if edp:
                    cur_para['ed'] = int(edp.group(1))
            cur_para['body'].append(bare)
        else:
            report['orphanLines'].append((i, bare[:80]))
        i += 1

    flush()
    return sections, paragraphs, synopsis


HEADER = """/* ─────────────────────────────────────────────────────────────────────────────
   A. G. Baumgarten, Metaphysica (Editio IIII, Halae Magdeburgicae 1757)
   = Academy Edition XVII. Machine-extracted from the transcription in
   Textfiles/Baumgarten.rtfd by scripts/parse_baum.py — do not hand-edit;
   corrections belong in the extractor so they survive the next run.

   {npara} §§ in {nsec} sections. AA XVII reprints §§ 1–503 and §§ 700–1000
   only; §§ 504–699 (Psychologia empirica, Sectiones I–XVIII) are not in the
   volume. The AA says so twice and gives two different page spans for it; both
   are kept verbatim rather than reconciled — see MET_META.gap and the `note` on
   the Psychologia Empirica section.

   Section fields
     id     stable slug; MET_PARAGRAPHS[].section points at it
     label  display form, title-cased
     raw    the heading exactly as the volume sets it, Baumgarten's own Roman
            numerals included — he writes IIII and XVIIII, not IV and XIX
     type   part | head | sub, from PARS | CAPUT | SECTIO
     note   an AA editorial note standing where text would otherwise be

   Synopsis fields (MET_SYNOPSIS) — Baumgarten's conspectus of the whole work,
   printed at AA 17:19–23 before the text
     m    the entry's marker as the volume sets it, `α)` `g)` `A)` `1)`. Several
          levels are lettered in Greek and the transcription renders some of
          those as Latin lookalikes (γ as `g`, η as `h`, ω as `w`); kept as
          printed. The printed *indentation* is not in the source at all and is
          deliberately not reconstructed — see parse_synopsis().
     t    the entry text, verbatim
     ref  the Pars / Caput / Sectio it names, where it names one
     from, to   the § range it covers, where it gives one
     ed   the 1757 page (Roman, as the volume numbers its front matter)

   Paragraph fields
     num      the § number
     section  MET_SECTIONS[].id this § falls under
     aa       AA XVII page the § starts on; aaEnd the page it ends on, where it
              runs over. null for the §§ that precede the volume's first page
              marker — the page is not stated there and is not guessed at.
     ed       page of Baumgarten's own 1757 pagination, which the AA prints in
              brackets; null where no bracket falls inside the §
     text     the Latin, with @@N@@ standing at the Nth footnote marker and
              Baumgarten's cross-references left in his own form, `§.14`
     glosses  his German equivalents; glosses[N-1] answers to @@N@@
     flags    suspected misprints: the volume's word is left standing in `text`,
              with {{w: as printed, r: the conjectured reading, y: why}}. The reader
              marks these as conjecture; it does not silently emend.
     marks    the asterisk label the volume prints at each marker, marks[N-1]
              for @@N@@. Kept because the count restarts when a §'s footnotes
              run over a page, and is occasionally wrong in the volume, so it
              cannot be recomputed from N — and what the reader shows should be
              what the page shows.
   ───────────────────────────────────────────────────────────────────────────── */

"""


def emit(out, sections, paragraphs, synopsis, meta):
    J = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))
    with open(out, 'w', encoding='utf-8') as f:
        f.write(HEADER.format(npara=len(paragraphs), nsec=len(sections)))
        f.write('const MET_META = ' + json.dumps(meta, ensure_ascii=False, indent=1) + ';\n\n')
        f.write('const MET_SECTIONS = [\n')
        for s in sections:
            f.write(' ' + J(s) + ',\n')
        f.write('];\n\n')
        f.write('/* one line per §, in reading order */\n')
        f.write('const MET_PARAGRAPHS = [\n')
        for p in paragraphs:
            f.write(' ' + J(p) + ',\n')
        f.write('];\n\n')
        f.write("/* Baumgarten's own Synopsis, AA 17:19–23, flat and in reading order.\n"
                "   The printed indentation is not in the source and is not invented here;\n"
                "   `m` is the marker as the volume sets it. */\n")
        f.write('const MET_SYNOPSIS = [\n')
        for e in synopsis:
            f.write(' ' + J(e) + ',\n')
        f.write('];\n\n')
        f.write('/* § → index into MET_PARAGRAPHS */\n')
        f.write('const MET_BY_NUM = '
                + J({str(p['num']): i for i, p in enumerate(paragraphs)}) + ';\n')


def compress(nums):
    out, s, prev = [], None, None
    for n in nums:
        if s is None:
            s = prev = n
        elif n == prev + 1:
            prev = n
        else:
            out.append((s, prev))
            s = prev = n
    if s is not None:
        out.append((s, prev))
    return ', '.join(f'{x}' if x == y else f'{x}–{y}' for x, y in out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('txt', help='plain-text conversion of Textfiles/Baumgarten.rtfd')
    ap.add_argument('out', help='.js file to write')
    a = ap.parse_args()

    report = {'artefacts': Counter(), 'countMismatch': [], 'labelDisagrees': [],
              'orphanLines': [], 'emptyBody': [], 'dupSectionIds': [],
              'noAaPage': [], 'trailingRefs': [], 'rejectedLetters': [],
              'flagged': [], 'synopsisGaps': [], 'synopsisEntries': 0,
              'edPages': set(),
              'parenRepairs': 0, 'frontMatterLines': 0}
    sections, paragraphs, synopsis = parse(a.txt, report)

    nums = [p['num'] for p in paragraphs]
    dup = sorted(n for n, c in Counter(nums).items() if c > 1)
    missing = sorted(set(range(1, max(nums) + 1)) - set(nums))

    gapnotes = [s['note'] for s in sections if 'note' in s]
    meta = {
        'work': 'A. G. Baumgarten, Metaphysica',
        'edition': 'Editio IIII, Halae Magdeburgicae 1757',
        'volume': 17,
        'source': 'Textfiles/Baumgarten.rtfd',
        'count': len(paragraphs),
        'range': [min(nums), max(nums)],
        'gap': {
            'paras': [504, 699],
            # The volume states the omission twice and gives two different page
            # spans for it. Neither is normalised away.
            'notes': ['§. 504-699 sind in Bd. XV S. 5-206 wiedergegeben, s. Synopsis.']
                     + gapnotes,
        },
    }
    emit(a.out, sections, paragraphs, synopsis, meta)

    glossed = [p for p in paragraphs if p['glosses']]
    pages = [p['aa'] for p in paragraphs if p['aa']] + \
            [p['aaEnd'] for p in paragraphs if p.get('aaEnd')]
    print(f'wrote {a.out}')
    print(f'  sections           {len(sections)}  '
          f'({sum(1 for s in sections if s["type"] == "part")} parts, '
          f'{sum(1 for s in sections if s["type"] == "head")} capita, '
          f'{sum(1 for s in sections if s["type"] == "sub")} sectiones)')
    print(f'  §§                 {len(paragraphs)}  ({min(nums)}–{max(nums)})')
    print(f'  §§ not in AA XVII  {compress(missing) or "none"}')
    print(f'  §§ with glosses    {len(glossed)}  '
          f'({sum(len(p["glosses"]) for p in paragraphs)} German equivalents, '
          f'up to {max((len(p["glosses"]) for p in paragraphs), default=0)} in one §)')
    print(f'  AA XVII pages      {min(pages)}–{max(pages)}')
    print(f'  1757 pages seen    {len(report["edPages"])}')
    print(f'  front matter       {report["frontMatterLines"]} lines skipped '
          f'(prefaces, Erläuterungen title)')
    print(f'  AA gap notes kept  {len(meta["gap"]["notes"])}')
    print(f'  Synopsis entries   {report["synopsisEntries"]}')

    problems = 0

    def line(sigil, label, items, fmt=str):
        if items:
            print(f'  {sigil} {label}: {len(items)}  '
                  + '; '.join(fmt(x) for x in list(items)[:8])
                  + (' …' if len(items) > 8 else ''))

    def warn(label, items, fmt=str):
        nonlocal problems
        problems += len(items)
        line('!', label, items, fmt)

    warn('duplicate § numbers', dup)
    warn('§§ with empty body', report['emptyBody'])
    warn('duplicate section ids', report['dupSectionIds'])
    warn('marker/footnote count mismatch', report['countMismatch'],
         lambda x: f'§{x[0]} {x[1]} marker(s) vs {x[2]} footnote(s)')
    warn('lines belonging to no §', report['orphanLines'], lambda x: f'L{x[0]} {x[1]!r}')

    # Not errors — things the volume itself does that are worth seeing.
    line('·', 'closing cross-references pulled back into the previous §',
         report['trailingRefs'], lambda x: f'§{x[0]} ends »§. {x[1]}.«')
    line('·', 'footnote label differs from its body marker', report['labelDisagrees'],
         lambda x: f'§{x[0]}#{x[1]} body {x[2]}) vs note {x[3]})')
    line('·', 'Synopsis §§ the transcription does not reach', report['synopsisGaps'],
         lambda x: f'{x[0]}–{x[1]}')
    line('·', 'suspected misprints flagged (text left as printed)',
         report['flagged'], lambda x: f'§{x[0]} »{x[1]}«')
    line('·', 'letter out of sequence, read as an enumerator not a marker',
         report['rejectedLetters'], lambda x: f'§{x[0]} »{x[1]})«')
    line('·', '§§ before the first AA page marker (aa left null)', report['noAaPage'])
    if report['parenRepairs']:
        print(f'  · footnote markers given back a dropped `)`: {report["parenRepairs"]}')
    line('·', 'transcription artefacts stripped',
         [f'{k} ×{v}' for k, v in report['artefacts'].items()])

    print('  ' + ('clean' if not problems else f'{problems} thing(s) to look at'))


if __name__ == '__main__':
    main()
