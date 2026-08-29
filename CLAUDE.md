# Kant Lab

A small research repository of digital-humanities tools for reading the pre-Kantian
German school philosophy that Kant lectured from — Baumgarten's *Metaphysica*,
Meier's *Auszug aus der Vernunftlehre* — plus an interactive model of the
Aristotelian–Scholastic genus/species tree those texts presuppose.

## Layout

| Path | What it is |
| --- | --- |
| [Baumgarten reader/](Baumgarten%20reader/) | Single-file SPA: Latin reading guide for Baumgarten's *Metaphysica* with inline German glosses |
| [Meier reader/](Meier%20reader/) | Single-file SPA: German reading guide for Meier's *Auszug*, with a side panel of parallel passages from the tradition |
| [Porphyrian tree/](Porphyrian%20tree/) | Single-file SPA: a configurator for building genus–species trees under user-chosen division rules |
| [Textfiles/](Textfiles/) | RTF source transcriptions the SPAs' embedded data was extracted from |

Each SPA directory has its own `CLAUDE.md` with the data shapes and function map for
that app, and a `README.md` aimed at a human opening it for the first time.

## Architecture: these are single-file apps

Every app is **one self-contained `.html` file** — markup, a `<style>` block, and a
`<script>` block with the text data hard-coded as top-level `const`s. There is:

- **no build step** — no `package.json`, bundler, transpiler, or lockfile;
- **no framework** — plain DOM (`document.createElement`, `addEventListener`);
- **no runtime dependencies** except Google Fonts loaded from a CDN;
- **no server, no persistence** — all state lives in module-scope `let`s and is lost on reload.

To run one, open the file in a browser:

```sh
open "Meier reader/meier-reading-guide.html"
```

There are no tests and no linter. Verification is visual: open the file, click through
the affected UI, and check the browser console for errors.

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
(e.g. `AA 16:76`). Baumgarten's *Metaphysica* is AA XVII, Meier's *Auszug* is AA XVI.

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

- The **Baumgarten reader** contains 135 of the *Metaphysica*'s ~1000 sections. The
  `SECTIONS` table covers the whole work, but `PARAGRAPHS` is populated densely for
  §§ 1–102 and then only sparsely (scattered §§ up to 950). Most sections in the
  sidebar therefore render as an empty heading.
- The **Meier reader** has a "Baumgarten · Metaphysica" tab in the header, but
  `switchWork()` only swaps the title string — there is no Baumgarten text behind it.
  The Baumgarten text lives in its own app.
- The Meier reader's `TRADITION` map (parallel passages from Wolff, the Scholastics,
  and Aristotle) is annotated for 10 paragraphs out of 563; the rest show a
  "no entries yet" placeholder. This is by design — annotation is ongoing work.

## Git

Single `main` branch, no CI. Commit messages so far are short and descriptive of the
scholarly content rather than the code.
