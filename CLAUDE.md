# Kant Lab

A small research repository of digital-humanities tools for reading the pre-Kantian
German school philosophy that Kant lectured from — Baumgarten's *Metaphysica*,
Meier's *Auszug aus der Vernunftlehre* — plus an interactive model of the
Aristotelian–Scholastic genus/species tree those texts presuppose.

## Layout

| Path | What it is |
| --- | --- |
| [README.md](README.md) | The contributor workflow — issue → spec → pull request → review → merge — written for participants |
| [index.html](index.html) | GitHub Pages landing page: the approved tools, then the working groups' works in progress |
| [baumgarten-reader/](baumgarten-reader/) | Single-file SPA: Latin reading guide for Baumgarten's *Metaphysica* with inline German glosses |
| [meier-reader/](meier-reader/) | Single-file SPA: German reading guide for Meier's *Auszug*, with a side panel of parallel passages from the tradition |
| [logic-portal/](logic-portal/) | The Logic Portal: search and reading across the whole logic corpus, the whole seminar's tool. It loads the shared data, its own OCR of four AA XXIV lectures (`aa24-ocr/`), and some participants' work from `Individuals/`, all listed in its `catalogue.js`; `pinned/` holds frozen copies made by `build-pins.py`. Its [README.md](logic-portal/README.md) describes it |
| [porphyrian-tree/](porphyrian-tree/) | Single-file SPA: a configurator for building genus–species trees under user-chosen division rules |
| [data/](data/) | Shared `.js` data files the tools read — the *Metaphysica*, the Reflexionen, Adickes' phase chronology, the Meier tradition passages. [data/README.md](data/README.md) lists their globals and who reads them |
| [scripts/](scripts/) | One-off Python extractors that produce `data/` from `Textfiles/` |
| [Textfiles/](Textfiles/) | RTF source transcriptions the SPAs' embedded data was extracted from |
| [groups/](groups/) | Working groups' playgrounds, one folder per group, each with a `SPEC.md` as its source of truth. Team work, at the works-in-progress tier; the rules for a group folder are in [groups/_template/CLAUDE.md](groups/_template/CLAUDE.md) |
| [Individuals/](Individuals/) | Participants' own projects, one folder each and belonging to its owner. Nothing in `Individuals/` is loaded by the readers or the Porphyrian tree; the Logic Portal reads some participants' files, which its `catalogue.js` lists |
| [docs/](docs/) | Notes for maintainers: [docs/maintaining.md](docs/maintaining.md) |
| [.github/](.github/) | `CODEOWNERS` (who approves what), the issue forms, the pull request template |
| [.claude/launch.json](.claude/launch.json) | The preview server for the Claude desktop app's Browser pane: `python3 -m http.server` at the repository root |

Each SPA directory has its own `CLAUDE.md` with the data shapes and function map for
that app, and a `README.md` aimed at a human opening it for the first time. The two
readers also have a `SPEC.md`, which is the source of truth for what each does, as a
group's spec is for its tool. Each spec numbers the tool's behaviours, marks those that
fail at present, and keeps a list of open questions.

## Architecture: one HTML file per app, plus shared generated data

Each app is **one `.html` file** — markup, a `<style>` block, and a `<script>` block
with its own text data hard-coded as top-level `const`s. There is:

- **no build step** — no `package.json`, bundler, transpiler, or lockfile;
- **no framework** — plain DOM (`document.createElement`, `addEventListener`);
- **no runtime dependencies** except Google Fonts loaded from a CDN;
- **no server, no persistence** — all state lives in module-scope `let`s and is lost on reload.

The one exception to self-containment is [data/](data/). Kant's *Reflexionen* are far
too large to inline (a megabyte per volume), so they live in generated `.js` files that
the readers pull in with plain `<script src>` tags. So does anything more than one tool
might read, or that participants should be able to extend without touching app code:

| File | Contents |
| --- | --- |
| [data/phases-adickes.js](data/phases-adickes.js) | Adickes' chronology of the 33 phases of Kant's hand (AA XIV:XXXV–XLIII), hand-written, with his note on each phase verbatim. Exports `PHASES`, `phaseInfo()`, `phaseYears()`. |
| [data/reflexionen-16-meier.js](data/reflexionen-16-meier.js) | The Reflexionen on Meier's *Auszug* (AA XVI). **Generated** — see below. |
| [data/metaphysica-17.js](data/metaphysica-17.js) | Baumgarten's *Metaphysica* itself (AA XVII): 804 §§ and the work's outline. **Generated** — see below. |
| [data/reflexionen-17-18-baumgarten.js](data/reflexionen-17-18-baumgarten.js) | The Reflexionen on Baumgarten's *Metaphysica* (AA XVII–XVIII), 2967 of them. **Generated** — see below. |
| [data/logik-blomberg-24.js](data/logik-blomberg-24.js) | *Logik Blomberg*, Kant's logic lecture of ca. 1771 (AA 24:7–301), keyed to Meier's §§. **Generated** — see below. |
| [data/logik-busolt-24.js](data/logik-busolt-24.js) | *Logik Busolt*, ca. 1789/90 (AA 24:603–686). **Generated** — see below. |
| [data/logik-wiener-24.js](data/logik-wiener-24.js) | The *Wiener Logik*, 1780ff. (AA 24:785–940). **Generated** — see below. |
| [data/tradition-meier.js](data/tradition-meier.js) | `TRADITION`, the Meier reader's parallel passages from Wolff, the Scholastics and Aristotle, keyed to Meier's §§. **Hand-curated** — edit it directly; its header says how. |

They are `<script src>` includes rather than `fetch()` on purpose: a classic script tag
works from a `file://` URL, so the apps still open by double-clicking. Top-level `const`s
in a classic script are visible to later scripts on the page, which is why the readers can
see `REFL_ENTRIES`, `MET_PARAGRAPHS` and `phaseInfo` without any module wiring.

To run an app, open the file in a browser — double-click it, or:

```sh
open meier-reader/meier-reading-guide.html       # macOS
xdg-open meier-reader/meier-reading-guide.html   # Linux
```

There are no tests and no linter. Verification is visual: open the file, click through
the affected UI, and check the browser console for errors.

**A syntax check is worth running first**, since nothing else catches a typo. Which
JavaScript engine exists depends on the machine — the maintainers' machines differ, and
Claude Code cloud sessions are Linux — so check rather than assume:

- **`node`**, where installed: `node --check data/reflexionen-16-meier.js`.
- **macOS without `node`**: JavaScriptCore, through `osascript`:

  ```sh
  osascript -l JavaScript -e 'ObjC.import("Foundation");
    new Function($.NSString.stringWithContentsOfFileEncodingError("data/reflexionen-16-meier.js",4,null).js); "OK"'
  ```

  Beware that `eval` there does not leak `const`/`let` to the enclosing scope — rewrite
  `^const ` to `var ` first if you need the values.
- **Linux without `node`**: `gjs`, GNOME's SpiderMonkey shell, is often present. Compile
  the file's text with `new Function(src)` and catch the `SyntaxError`.

To check an app's inline `<script>`, extract it to a `.js` file first, and **strip HTML
comments before you do**: several `<script src>` tags sit inside explanatory `<!-- -->`
blocks, and a naive regex captures the comment prose as JavaScript, producing convincing
but entirely fake `SyntaxError`s. Where no engine is available at all, say so in the pull
request rather than skipping the check silently.

**Headless Chrome**, where installed, goes further without a display:
`google-chrome --headless=new --virtual-time-budget=5000 --screenshot=out.png file:///abs/path.html`
renders the page after its scripts have run, and `--dump-dom` instead prints the
resulting DOM. That is a cheap check that a page renders. It does not replace clicking
through the UI, and a pull request should say which of the two was done.

## Regenerating the generated data

Everything in `data/` except `phases-adickes.js` and `tradition-meier.js` is
machine-extracted and **must not be hand-edited**; corrections belong in the extractor so
they survive the next run.

These pipelines belong to the readers' owners, along with `data/`, `scripts/` and
`Textfiles/` (see "Git" below). This section stays here, so that every session sees it.
A pull request that changes a pipeline's commands or what an extractor knows updates
this section in the same pull request. Since this file is outside the owners' folders,
that also brings in the professor's approval.

`textutil` is macOS-only. Committing its `.txt` output, so that the Python steps run
anywhere, is the open task in [docs/todo-in-repo.md](docs/todo-in-repo.md).

**Without a Mac**, LibreOffice's text conversion serves for the Logik transcripts and the
Reflexionen, once three things it adds and `textutil` does not are removed: a byte-order
mark, the two InteLex link-image lines (`previous.png ¬`, `next.png ¬`), and
`Attachment.png ¬` wherever the transcription has an embedded image, which `textutil`
drops without trace. From files cleaned that way the extractors reproduced the
`textutil`-built data byte for byte (October 2026). That has **not** been checked for the
*Metaphysica* itself (`parse_baum.py`), which leans on `textutil`'s U+2028 line separators.

```sh
mkdir -p /tmp/rtf && cp Textfiles/Vol16reflexionenMeier.rtfd/TXT.rtf /tmp/rtf/vol16.rtf   # and so on
soffice --headless --convert-to 'txt:Text (encoded):UTF8' --outdir /tmp/rtf /tmp/rtf/*.rtf
sed -e '1s/^\xEF\xBB\xBF//' -e '/^\(previous\|next\)\.png ¬$/d' -e 's/Attachment\.png ¬//g' \
  /tmp/rtf/vol16.txt > /tmp/vol16.txt
```

Then run the pipeline's Python steps below on the cleaned files.

### The Reflexionen on Meier

```sh
textutil -convert txt -output /tmp/vol16.txt Textfiles/Vol16reflexionenMeier.rtfd/TXT.rtf
python3 scripts/parse_refl.py /tmp/vol16.txt L --out /tmp/refl16.json
python3 scripts/emit.py /tmp/refl16.json data/reflexionen-16-meier.js \
  --work "G. F. Meier, Auszug aus der Vernunftlehre" --vol 16 \
  --src Vol16reflexionenMeier.rtfd --siglum L
```

### The Reflexionen on Baumgarten

```sh
textutil -convert txt -output /tmp/erl17.txt  Textfiles/Vol17erlauterungenBaum.rtf
textutil -convert txt -output /tmp/refl17.txt Textfiles/Vol17reflexionenBaum.rtfd/TXT.rtf
textutil -convert txt -output /tmp/refl18.txt Textfiles/vol18reflexionenBaum.rtfd/TXT.rtf
for f in erl17 refl17 refl18; do
  python3 scripts/parse_refl.py /tmp/$f.txt M --out /tmp/$f.json
done
python3 scripts/emit_baum_refl.py data/reflexionen-17-18-baumgarten.js \
    --erl17 /tmp/erl17.json --refl17 /tmp/refl17.json --refl18 /tmp/refl18.json \
    --met data/metaphysica-17.js
```

`parse_refl.py` is shared with the Meier pipeline and is siglum-parametric; pass `M`.
Things AA XVII and XVIII do that AA XVI does not, all of which the parser now handles:
the siglum runs onto the preposition (`ZuM §. 11`) and onto the phase expression
(`ε−ι? (ξ?)M 63`); the number is sometimes alone on its line with the dating on the
next; the phase expression itself is sometimes broken across soft line breaks; and the
decade datings are written four ways.

`emit_baum_refl.py` does the anchoring and records `src` on every entry —
`locus`, `block`, `page`, or `none`. **Not everything in these volumes is on
Baumgarten**: 104 entries are in Kant's copy of Eberhard's *Vorbereitung zur
natürlichen Theologie*, 91 are loose sheets (where `L Bl.` is *loses Blatt*, **not**
Meier's siglum L), and 459 are on the Roman-numbered front matter. None of those gets
a §, and they must not be given one.

### Baumgarten's Metaphysica

```sh
textutil -convert txt -output /tmp/vol17.txt Textfiles/Baumgarten.rtfd/TXT.rtf
python3 scripts/parse_baum.py /tmp/vol17.txt data/metaphysica-17.js
```

`parse_baum.py` prints its own report — § count, the §§ AA XVII does not print, gloss
totals, and the volume's own irregularities it worked around. Read it; it should end
in `clean`.

What that extractor knows about this transcription, which is easy to break:

- A heading and the § after it often share one physical line, separated by U+2028.
  Split on U+2028 as well as newline, and a real `§. N.` header then always stands
  **alone** on its line. Relaxing that anchor makes every line that merely opens with
  a cross-reference look like a new §, inventing two dozen duplicates.
- A bare `§. N.` whose number has already gone by is a **closing cross-reference** the
  transcription set on its own line, not a new §: § 100 ends
  `... est bonum transcendentaliter, §. 99.` There are eight.
- `― 24 ―` marks the *start* of AA page 24, and can repeat as the text band resumes
  beneath Kant's Erläuterungen. `[3]` is Baumgarten's own 1757 pagination. Both are kept.
- `|` marks a page break inside a word. Tight against the preceding character it
  rejoins (`evolutio|nem` → `evolutionem`); with a space before it, it fell between two
  whole words and becomes a space.
- **Footnote asterisk counts are not indices.** They restart when a §'s footnotes run
  over a page, three §§ continue into `a) b) c)`, and eight are simply mislabelled.
  Markers pair with footnotes **by position**; the printed label is kept in `marks`.
- The **Synopsis** (AA 17:19–23) is extracted too, into `MET_SYNOPSIS`, and shown
  behind a button in the reader. Its printed indentation is in neither the RTF nor the
  text conversion and is **not** reconstructed — see `parse_synopsis()` for why the
  markers cannot supply it. The transcription also drops two of its pages, so §§ 280–518
  are missing from it; the extractor reports the break and the panel prints it.
- Two readings look like misprints — § 10 `praepositio` for `propositio`, § 92
  `methaphysice`. They are **not** corrected in the text. `SUSPECTED_MISPRINTS` in
  the extractor records the conjecture, the reader underlines the printed word and
  states the conjecture beneath the §, and the run aborts if a table entry no longer
  matches its §.
- A lettered marker's `)` closes nothing, which is what distinguishes `felicitasa)`
  from `(ectypon, copia)`. Letter runs must start at `a` — § 728's lone `l)` is an OCR
  of the enumerator `1)`.

`parse_refl.py` prints a report — entry count, how many §§ were attested vs. inferred,
unresolved phase symbols, unparsed loci. **Read it.** It is the only signal that a change
to the RTF or the regexes broke something.

Things the extractor knows about the AA's conventions, which are easy to break:

- Entries are `NNNN. <phases>. <sigla>. [<locus note>]`, separated by `__________`, and
  gathered into `===========`-delimited blocks headed `L §. 19-35. IX 35-39. [Topic.]`.
- The transcription uses `` for soft line breaks, `\xa0` for spaces, `―  N  ―` for
  AA page markers, and occasionally puts a separator and the next entry header on one line.
- Phase symbols include **`µ` (U+00B5, micro sign, 133×)** and **`ϕ` (U+03D5)**, neither of
  which is in the `α-ω` range. A naive `[α-ω]` class silently drops 133 entries.
- The phase expression and the sigla often share one terminating period
  (`γ? η? κ? λ? ν−ξ?? L 3'.`), so the sigla has to be peeled back off.
- A capital `Α` (U+0391) in the transcription is an OCR artefact of Latin `A` ("Αus"),
  not a phase.
- The sigla can go on past a page with no letter of its own: `L 95. 95'.` (the note runs
  from p. 95 onto the interleaf), `M 147'. E II 797. 771.` (two Erdmann numbers),
  `M. 277'.`. When the header line ends in bare numbers like these, they belong to the
  sigla. Until October 2026 they were taken as the first line of the text, which opened
  249 Reflexionen (50 in AA XVI, 199 in XVII–XVIII) with a stray `95'.`.

### The Logik transcripts of AA XXIV

```sh
textutil -convert txt -output /tmp/blomberg.txt Textfiles/Vol24logikBlomberg.rtfd/TXT.rtf
textutil -convert txt -output /tmp/busolt.txt   Textfiles/Vol24logikBusolt.rtf
textutil -convert txt -output /tmp/wiener.txt   Textfiles/Vol24logikWien.rtf
python3 scripts/parse_logik.py blomberg /tmp/blomberg.txt data/logik-blomberg-24.js
python3 scripts/parse_logik.py busolt   /tmp/busolt.txt   data/logik-busolt-24.js
python3 scripts/parse_logik.py wiener   /tmp/wiener.txt   data/logik-wiener-24.js
```

These transcriptions set the text in short lines broken by the Academy Edition's page
markers, so one paragraph of the lecture arrives in three or four pieces. The extractor
joins them back into running prose and keeps every page the prose crossed as a character
offset into it, so that any stretch can still be cited as `AA 24:N` and the pagination
put back exactly where it stood.

`parse_logik.py` prints a report per work — sections, blocks, words, the AA page range
and any gap in it, how many paragraph joins were attested and how many inferred,
manuscript pages, and, for Blomberg, the Meier §§ it found. **Read it.** It ends in
`clean` when every block **round-trips**: re-inserting the page markers it pulled out, at
the offsets it recorded, reproduces the transcription's own text exactly. Know what that
does **not** cover: it checks the blocks that were emitted, not that every line of the
transcription became one. A line dropped before a block was ever built — as the title bug
below dropped two paragraphs — passes `clean`. Check the block and word counts against
the previous run too.

All three report a gap over the first few pages — `7→9, 9→11` in Blomberg, and the same
pattern in the other two. That is the volume's front matter standing on rectos with blank
versos between, not a dropped page. Leave it.

What the extractor knows about these transcriptions, which is easy to break:

- `― xxiv.162 ―` marks the *start* of AA XXIV page 162. The suffixed forms `613u` and
  `613uu` are the transcription's way of marking a second and third anchor on one page,
  not pages of their own; both are page 613, and the raw form is kept beside the number.
- `|` marks a page break, and **at the end of a line, before a page marker, it is the
  signal that the paragraph continues** — a page marker with no `|` before it falls
  between two paragraphs. Getting this backwards either shatters the text into
  page-sized fragments or runs unrelated paragraphs together. Tight against the
  preceding character it rejoins a split word (`Gewiß|heit` → `Gewißheit`); with a space
  before it, it fell between two whole words and becomes a space.
- A paragraph that runs on across a page marker **starts on the page before it**, and
  that is its `aa`. Until October 2026 the extractor gave it the page it runs *into*,
  because the current page had already moved on when the paragraph was written out.
  That put 290 paragraphs (148 Blomberg, 47 Busolt, 95 Wiener) a page late, and every
  quotation from their opening part was cited one page too high.
- `||` is not that. In the Wiener Logik `|| V` marks 57 passages and is kept verbatim.
- `[471]` is the manuscript's own pagination, lifted out of the text into `ms` with the
  offset it stood at, as the AA pages are. Every other bracket is editorial and stays:
  `[ Textlücke: AA: Die ]`, `[AA: judicium ]`, `[erg. nicht]`, `< bricht ab >`.
- A section opens with its provenance line — `[Logik Busolt] (ca. 1789/90. Ms.: Berlin.
  Nach dem Orig.)` — followed by the manuscript's own heading, sometimes twice and in a
  different form, and *usually* preceded by the section's title as well. Those after are
  kept as `headings`, unreconciled with `title`, because the difference is the AA's.
- **The line before the provenance line is not always a title**, and taking it on trust
  cost two paragraphs of Blomberg: where that printing is absent, the line before is the
  previous section's last paragraph, which became the title and was cut from the text
  with it. So it is taken as the title only when the transcription prints it after the
  provenance line too — compared on letters alone, since the two printings differ in
  punctuation and in where the `|` line breaks fall. Otherwise the manuscript's heading
  stands in and the line stays where it belongs. `titleSrc` records which happened:
  `line`, `heading`, or `none` for the Titelei of Busolt and the Wiener Logik, which the
  transcription gives no title at all. The report counts the three.
- Blomberg alone keys its lecture to Meier's §§, in headings that stand alone on their
  line: `§ 249`, `§: 92: et §: 93:`, `§ 66- 91`, `§phus 250`. The heading is kept
  verbatim with the numbers parsed out beside it, so a tool can line the lecture up
  against the Meier reader. A § inside a sentence is a cross-reference and stays in the
  text.
- The InteLex navigation and copyright lines wrapping the transcription are not the AA,
  and are dropped.

Per "Attested vs. inferred" below: a paragraph joined on the transcription's own `|`
carries `joined: ["mark"]`; one joined on the extractor's judgement — the line broke off
without terminal punctuation and the next began in lower case — carries
`joined: ["inferred"]`, so a reader can see the paragraph break was removed by inference.

## Shared conventions

**Design language.** The apps share one typography: `EB Garamond` for body copy and
`Cinzel` for small-caps display headings and labels. The Baumgarten reader and the
Porphyrian tree also share one palette: a parchment background (`--parchment`, warm
off-white), dark ink text, and a sienna/brown accent (`--accent`, `#5c3d1e` family). The
Meier reader is the exception, with a dark navy header and sidebar and a Prussian-blue
accent; whether it should follow the others is Open question 7 in
[meier-reader/SPEC.md](meier-reader/SPEC.md). Colour and font choices live in a `:root`
custom-property block at the top of each `<style>`. Keep new UI inside its app's
vocabulary rather than introducing new hues.

**Data-first script layout.** Each `<script>` opens with the content data as `const`s,
then state `let`s, then builder/render functions, then event wiring, then an init call
at the very bottom. When adding a feature, follow that order.

**Paragraph anchors.** Both readers key everything off the work's section number.
Paragraph elements get `id="para-N"`, cross-references in the text (`§.14`) are
linkified at render time into click handlers that scroll to `#para-N`, and the sidebar
tracks the active paragraph. If you touch rendering, preserve the `para-N` id scheme.

**Citations.** Academy Edition references are given in the `AA <volume>:<page>` form
(e.g. `AA 16:76`). Baumgarten's *Metaphysica* is AA XVII, Meier's *Auszug* is AA XVI,
the Reflexionen on each are in those same volumes, Adickes' chronology of Kant's hand is
AA XIV, and the Jäsche *Logik* is AA IX.

**Working groups.** Work in progress lives in `groups/<group>/`, one folder per group:
a `SPEC.md` that is the source of truth for what the tool does, a `CLAUDE.md` of rules
for sessions in that folder, and the tool itself as a single `index.html`. A group's
tool loads shared data from `../../data/` and never copies it, and changes nothing
outside its own folder. The full rules are in
[groups/_template/CLAUDE.md](groups/_template/CLAUDE.md), which every group's
`CLAUDE.md` starts from. A finished tool is promoted to the top level, beside the three
existing ones — [docs/maintaining.md](docs/maintaining.md) describes how.

**Attested vs. inferred.** This is a hard rule, not a preference. Anything the tool
worked out for itself must be visibly marked as such, and anything the Academy Edition
says must survive into the display rather than being normalised away. Concretely, in the
Reflexionen layer: every entry carries `src` recording whether its § came from the entry's
own locus note, from the enclosing AA block header, or from interpolation; interpolated
entries render with a dashed border and an `interpolated §` tag; the AA's locus note and
phase expression are both kept verbatim (`loc.raw`, `phRaw`) alongside the parse, query
marks and parentheses included, because the uncertainty they express is Adickes'. When
adding a new annotation layer, give raw source metadata and an inference flag a home in
the data shape from the start.

## Working on the content

The embedded data — not the RTFs — is what the apps actually render. `Textfiles/` is
the upstream transcription these were extracted from; treat it as read-only provenance
and correct errors in the embedded data.

Editing guidance:

- Text corrections go in the data `const`s at the top of the `<script>`, not in the
  render functions.
- **Do not reformat the long single-line JSON literals** in the Meier reader
  (`MEIER`, `HIERARCHY`, `CITATIONS` — one of them is ~288 KB on a single line). They
  are machine-generated dumps; pretty-printing them produces an unreadable diff that
  buries any real change. Edit them programmatically or with a targeted string
  replacement.
- Both readers pass paragraph text through `innerHTML` (Baumgarten) or a tokenising
  parser (Meier) in order to render glosses and cross-reference links. This is safe
  only because the text is trusted local data. Do not wire either renderer up to
  user-supplied or fetched input without escaping first.

## Known gaps

- The **Baumgarten reader** now carries every § that AA XVII prints — 804 of them,
  §§ 1–503 and §§ 700–1000. The remaining §§ 504–699 (Psychologia empirica, Sectiones
  I–XVIII) are **not a gap in the tool**: AA XVII does not reprint them, putting them
  in Bd. XV instead, and the reader shows the Academy Edition's own note saying so.
  Filling them in would mean transcribing AA XV, which is not in `Textfiles/`.
  Baumgarten's three prefaces are also not shown, the reader being keyed to § numbers.
- The Reflexionen on Baumgarten now have a side panel in the **Baumgarten reader**
  itself, tracking the § in view. 708 of the 2967 belong to no numbered § — 459 the
  Roman-numbered front matter, 91 loose sheets, 107 another handbook (104 of those
  Kant's copy of Eberhard), and 51 that fall into none of the three and are tagged
  only "no § stated" — and are reachable only through
  that panel's "belong to no §" view, not by clicking a §. The AA also files notes
  against §§ 655–662, which AA XVII does not print; every one of those is filed
  against a printed § as well, so none is stranded.
- **Each reader is one work's.** The Meier reader had a "Baumgarten · Metaphysica"
  tab for a while; it was removed. `TRADITION` is keyed to Meier's §§ and the AA XVI
  Reflexionen are on the *Auszug*, so neither side panel said anything about
  Baumgarten's §§, and the *Metaphysica* now has the better home of its own. Do not
  reintroduce a second work into either app.
- The Meier reader's `TRADITION` map (parallel passages from Wolff, the Scholastics,
  and Aristotle) is annotated for 10 paragraphs out of 563; the rest show a
  "no entries yet" placeholder. This is by design — annotation is ongoing work. It
  lives in [data/tradition-meier.js](data/tradition-meier.js), so that participants
  can add passages by pull request without touching the reader's code.

## Deployment

Everything is served as-is via GitHub Pages from the `main` branch root (repo
Settings → Pages → Source: Deploy from a branch → `main` / `/`). [index.html](index.html)
is the landing page; it links to each tool by its existing path, so **renaming a tool's
file or folder breaks links people have shared** — when a move is unavoidable, leave a
redirect page at the old path, as [docs/maintaining.md](docs/maintaining.md) shows.
Because there's no build step, deploying a change is nothing more than merging it into
`main`; Pages picks it up within a few minutes.

Pages runs **Jekyll** over the branch, since there is no `.nojekyll` file. That has two
consequences worth knowing:

- Jekyll does not publish directories whose names begin with `_`. That is why the group
  template is `groups/_template/`: it is in the repository but not on the site.
- Jekyll renders `.md` files through Liquid. **No Markdown file may contain a double
  opening curly brace, or an opening curly brace followed by a percent sign**, even
  inside backticks: an unterminated Liquid tag fails the Pages build, and the site
  silently stops updating.

## Git

`main` is protected by a ruleset: every change arrives by pull request, nobody can
force-push to `main` or delete it, and `.github/CODEOWNERS` decides who must approve.
Only the professor, as repository admin, is on the ruleset's bypass list. In short:

- the Baumgarten and Meier readers, and `data/`, `scripts/` and `Textfiles/`, belong to
  their student owners, Sophia Wyatt (@sophia-wyatt) and Maria (@mari637-pixel), either
  of whom approves the other's changes;
- another member of the group approves changes to a group's folder;
- changes to the Logic Portal, `logic-portal/`, need no approval: it is the whole
  seminar's, and whoever makes a change merges it. The README's "Fixing the Logic Portal
  in seminar" is the workflow;
- `Individuals/` changes need no approval;
- the professor approves everything else, and so can any one of the default reviewers
  beside them on the `*` line: Laura Benzenberg (@Benzenberg), Jeremy Weirich
  (@jweirich-globus), Jesus La Paz (@yizu6201), Qianxun Feng (@qianxun-blip), Alex Li
  (@Alexynli), Aidan Chong (@AidanC973), Sophia Wyatt (@sophia-wyatt) and @zelleznick;
- only the professor approves a change to `.github/CODEOWNERS` itself, since it decides
  all of the above.

A pull request that touches folders with different owners needs an approval from each,
so keep each one within a single owner's folders where you can.

Pull requests are squash-merged, so a pull request's title becomes its commit message.
Keep titles short and descriptive of the scholarly content rather than the code, as the
history so far is. There is no CI.

Participants push through the GitHub web UI, often many commits at a time, so **fetch
before you believe the working tree.**

**Show each change as you go.** In a claude.ai/code cloud session there is no browser
to show the participant the page in. So after each change they ask for, commit it, push
the branch, and end your reply with the preview link for that commit, using the full ID
from `git rev-parse HEAD`:

```
https://raw.githack.com/mikrishnan/kant-lab/<commit-id>/<path-to-the-page>
```

Do this before any pull request exists. Open the pull request once, when they say the
work is ready or their request asks for it. In a local session with the Browser pane —
the Claude desktop app, which serves the pages through
[.claude/launch.json](.claude/launch.json) — show the page there instead, and do not
commit or push unless asked: participants working locally commit through GitHub
Desktop, and expect to find your changes there uncommitted.
