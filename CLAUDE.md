# Kant Lab

A small research repository of digital-humanities tools for reading the pre-Kantian
German school philosophy that Kant lectured from — Baumgarten's *Metaphysica*,
Meier's *Auszug aus der Vernunftlehre* — plus an interactive model of the
Aristotelian–Scholastic genus/species tree those texts presuppose.

## Layout

| Path | What it is |
| --- | --- |
| [index.html](index.html) | GitHub Pages landing page linking to the three SPAs |
| [Baumgarten reader/](Baumgarten%20reader/) | Single-file SPA: Latin reading guide for Baumgarten's *Metaphysica* with inline German glosses |
| [Meier reader/](Meier%20reader/) | Single-file SPA: German reading guide for Meier's *Auszug*, with a side panel of parallel passages from the tradition |
| [Porphyrian tree/](Porphyrian%20tree/) | Single-file SPA: a configurator for building genus–species trees under user-chosen division rules |
| [data/](data/) | Generated `.js` data files shared by the readers (Adickes' phase chronology, the Reflexionen) |
| [scripts/](scripts/) | One-off Python extractors that produce `data/` from `Textfiles/` |
| [Textfiles/](Textfiles/) | RTF source transcriptions the SPAs' embedded data was extracted from |

Each SPA directory has its own `CLAUDE.md` with the data shapes and function map for
that app, and a `README.md` aimed at a human opening it for the first time.

## Architecture: one HTML file per app, plus shared generated data

Each app is **one `.html` file** — markup, a `<style>` block, and a `<script>` block
with its own text data hard-coded as top-level `const`s. There is:

- **no build step** — no `package.json`, bundler, transpiler, or lockfile;
- **no framework** — plain DOM (`document.createElement`, `addEventListener`);
- **no runtime dependencies** except Google Fonts loaded from a CDN;
- **no server, no persistence** — all state lives in module-scope `let`s and is lost on reload.

The one exception to self-containment is [data/](data/). Kant's *Reflexionen* are far
too large to inline (a megabyte per volume), so they live in generated `.js` files that
the readers pull in with plain `<script src>` tags:

| File | Contents |
| --- | --- |
| [data/phases-adickes.js](data/phases-adickes.js) | Adickes' chronology of the 33 phases of Kant's hand (AA XIV:XXXV–XLIII), hand-written, with his note on each phase verbatim. Exports `PHASES`, `phaseInfo()`, `phaseYears()`. |
| [data/reflexionen-16-meier.js](data/reflexionen-16-meier.js) | The Reflexionen on Meier's *Auszug* (AA XVI). **Generated** — see below. |
| [data/metaphysica-17.js](data/metaphysica-17.js) | Baumgarten's *Metaphysica* itself (AA XVII): 804 §§ and the work's outline. **Generated** — see below. |

They are `<script src>` includes rather than `fetch()` on purpose: a classic script tag
works from a `file://` URL, so the apps still open by double-clicking. Top-level `const`s
in a classic script are visible to later scripts on the page, which is why the readers can
see `REFL_ENTRIES`, `MET_PARAGRAPHS` and `phaseInfo` without any module wiring.

To run an app, open the file in a browser:

```sh
open "Meier reader/meier-reading-guide.html"
```

There are no tests and no linter. Verification is visual: open the file, click through
the affected UI, and check the browser console for errors. Two cheap checks are worth
running first, since no runtime is installed to catch a typo:

```sh
# syntax-check a script without a browser (macOS ships JavaScriptCore via osascript)
osascript -l JavaScript -e 'ObjC.import("Foundation");
  new Function($.NSString.stringWithContentsOfFileEncodingError("data/reflexionen-16-meier.js",4,null).js); "OK"'
```

Note there is **no `node` on this machine.** Use `osascript -l JavaScript` for anything
that needs to evaluate JS outside a browser. Beware that `eval` there does not leak
`const`/`let` to the enclosing scope — rewrite `^const ` to `var ` first if you need the
values.

## Regenerating the generated data

Everything in `data/` except `phases-adickes.js` is machine-extracted and **must not be
hand-edited**; corrections belong in the extractor so they survive the next run.

### The Reflexionen on Meier

```sh
textutil -convert txt -output /tmp/vol16.txt Textfiles/Vol16reflexionenMeier.rtfd/TXT.rtf
python3 scripts/parse_refl.py /tmp/vol16.txt L --out /tmp/refl16.json
python3 scripts/emit.py /tmp/refl16.json data/reflexionen-16-meier.js \
  --work "G. F. Meier, Auszug aus der Vernunftlehre" --vol 16 \
  --src Vol16reflexionenMeier.rtfd --siglum L
```

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
- The transcription uses ` ` for soft line breaks, `\xa0` for spaces, `―  N  ―` for
  AA page markers, and occasionally puts a separator and the next entry header on one line.
- Phase symbols include **`µ` (U+00B5, micro sign, 133×)** and **`ϕ` (U+03D5)**, neither of
  which is in the `α-ω` range. A naive `[α-ω]` class silently drops 133 entries.
- The phase expression and the sigla often share one terminating period
  (`γ? η? κ? λ? ν−ξ?? L 3'.`), so the sigla has to be peeled back off.
- A capital `Α` (U+0391) in the transcription is an OCR artefact of Latin `A` ("Αus"),
  not a phase.

## Shared conventions

**Design language.** All three apps use the same palette and typography: a parchment
background (`--parchment`, warm off-white), dark ink text, `EB Garamond` for body copy,
`Cinzel` for small-caps display headings and labels, and a sienna/brown accent
(`--accent`, `#5c3d1e` family). Colour and font choices live in a `:root` custom-property
block at the top of each `<style>`. Keep new UI inside that vocabulary rather than
introducing new hues — the parchment look is deliberate and consistent across the suite.

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
- The Reflexionen on Baumgarten are **not** wired up yet, though the sources are in
  `Textfiles/` (`Vol17reflexionenBaum.rtfd`, `vol18reflexionenBaum.rtfd`, and
  `Vol17erlauterungenBaum.rtf`). The Meier reader's Reflexionen panel is the model.
- The **Meier reader** has a "Baumgarten · Metaphysica" tab in the header, but
  `switchWork()` only swaps the title string — there is no Baumgarten text behind it.
  The Baumgarten text lives in its own app.
- The Meier reader's `TRADITION` map (parallel passages from Wolff, the Scholastics,
  and Aristotle) is annotated for 10 paragraphs out of 563; the rest show a
  "no entries yet" placeholder. This is by design — annotation is ongoing work.

## Deployment

The three apps are served as-is via GitHub Pages from the `main` branch root (repo
Settings → Pages → Source: Deploy from a branch → `main` / `/`). [index.html](index.html)
is the landing page; it just links to the three `.html` files by their existing paths.
Because there's no build step, "deploying" a content or code change is nothing more
than pushing to `main` — Pages picks it up automatically.

## Git

Single `main` branch, no CI. Commit messages so far are short and descriptive of the
scholarly content rather than the code.
