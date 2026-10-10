# Meier reader

Single-file SPA: [meier-reading-guide.html](meier-reading-guide.html) (~2450 lines, but
three of those lines are enormous data blobs).
Reads G. F. Meier's *Auszug aus der Vernunftlehre* (1752 = AA XVI) in German, with a
resizable side panel that has two tabs: parallel passages from the tradition, and Kant's
own handschriftliche Bemerkungen on the § in view.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite, including
how to regenerate the Reflexionen data and the attested-vs-inferred rule.

It loads three shared data files before its own `<script>`:

```html
<script src="../data/phases-adickes.js"></script>
<script src="../data/reflexionen-16-meier.js"></script>
<script src="../data/tradition-meier.js"></script>
```

The first two are Adickes' phases (hand-written) and the AA XVI Reflexionen
(generated). The third is the Tradition tab's content, `TRADITION`, which is
hand-curated and lives outside the app so that passages can be added without touching
app code.

so the file is no longer strictly self-contained. It still opens straight from disk —
classic `<script src>` works over `file://` — but the `../data/` paths mean the app
cannot be moved out of its directory on its own.

## Owners

This tool belongs to Sophia Wyatt (@sophia-wyatt) and Maria (@mari637-pixel), who
approve each other's pull requests. They also own the [Baumgarten
reader](../baumgarten-reader/), and `data/`, `scripts/` and `Textfiles/`, so a change
may reach into any of those five folders and still need only one of them to approve it.
A change anywhere else — a root file, `index.html`, another tool, a group's folder —
needs the professor as well. Do not make one unless the request asks for it; say what
would be needed in the pull request description instead.

## SPEC.md

[SPEC.md](SPEC.md) is the source of truth for what this tool does, as a group's spec is
for its tool.

- Implement what the request names and nothing more. If the request contradicts
  `SPEC.md`, say so rather than guessing which one is right.
- If the tool's behaviour changes, update `SPEC.md` in the same pull request. Never
  renumber Behaviour items; strike a dropped one through instead.
- A pull request that makes an item marked **Fails at present** pass removes the mark.
  One that settles an Open question moves it into Behaviour or Out of scope.
- The pull request description lists the Behaviour items it implements or changes, and
  says plainly what was not checked in a browser.

## File shape

| Lines | Contents |
| --- | --- |
| 1–978 | `<head>`, fonts, `:root` palette, all CSS |
| 980–1065 | Markup: header, `#sidebar`, `#primaryPanel`, `#resizer`, `#traditionPanel`, `#adickesVeil` |
| 1072–1074 | `<script src>` for `../data/phases-adickes.js`, `../data/reflexionen-16-meier.js` and `../data/tradition-meier.js` |
| 1078 | `MEIER` — the full text (~288 KB, **one line**) |
| 1079 | `HIERARCHY` — the outline (~2.7 KB, one line) |
| 1081 | `CITATIONS` — § → AA reference (~12 KB, one line) |
| 1083–1720 | State, builders, tradition rendering, event wiring |
| 1722–2437 | The Reflexionen panel: kind/era tables, filter, cards, windowing, Adickes overlay, text highlighting |
| 2438–end | Init |

`TRADITION`, the hand-written parallel passages, is no longer in this file: it is
[../data/tradition-meier.js](../data/tradition-meier.js).

**Do not reformat lines 1078, 1079, or 1081.** They are machine-generated JSON dumps.
Pretty-printing them turns any subsequent one-word correction into a 20,000-line diff.
Make targeted string replacements, or regenerate the whole line from a script.

## Data shapes

`MEIER` has two keys:

- `MEIER.nav` — a flat list of `{ part_num, part_title_de, part_title_en, sec_num,
  sec_title_de, sec_title_en, paras: [1, 2, 3, …] }`. Currently **unused by the
  renderer**; `HIERARCHY` drives the UI. Kept as the fuller structural record.
- `MEIER.paras` — `{ "1": "Die Vernunftlehre oder die Vernunftkunst …", … }`, string
  keys. All 563 of the work's §§ are present, none empty.

## The work model

`WORK` is the one shape the sidebar, the main column, the jump box and the text search
read the text through, rather than reaching for `MEIER` and `HIERARCHY` directly:

```js
WORK = { title, min, max, paras, citation,
         parts: [ { ordinal, topic, range, sections: [ { sup, title, range } ] } ] }
```

`sup` is the small label above a section heading, "Der erste Abschnitt:". Precomputing
it keeps the German ordinal counting out of the renderer.

`HIERARCHY` is what `meierWork()` is built from — five top-level parts:

```js
{ id: 'part1', level: 'top',
  title_de: 'Erster Haupttheil: Von der gelehrten Erkenntniss',
  title_en: 'Part I: On Learned Cognition',
  para_range: [10, 413],
  sections: [ { sec_num: 1, title_de: '…', para_range: [10, 40] }, … ] }
```

`sections` is `null` for parts with no *Abschnitte* (the Einleitung, Part II on method,
Part IV on the scholar's character), which the renderer handles as a single block.

`CITATIONS` maps `"§ number"` → `"AA 16:76–77"`; rendered as a small tag at the end of
each paragraph.

`TRADITION`, from [../data/tradition-meier.js](../data/tradition-meier.js), maps
`paraNum` → array of entries:

```js
{ strata: 'wolff' | 'scholastic' | 'aristotle',
  author: 'Christian Wolff',
  source: 'Philosophia Rationalis, §§ 1–3',
  relation: 'source' | 'parallel' | 'contrast',
  text: '…' }
```

`strata` selects the colour band and must match one of the three filter buttons'
`data-strata`. `relation` is title-cased into the tag at the bottom of each entry.
Only 10 paragraphs are annotated (§§ 1, 10, 14, 15, 115, 155, 292, 353, 362, 414);
everything else falls through to a placeholder. Extending this map is the app's main
intended growth path — no code change is needed to add entries, and the data file's
header says how. Every entry and every key's closing `]` carries a trailing comma, so
that an addition never edits an existing line; keep it that way.

## The Reflexionen panel

The right-hand panel has two tabs, driven by `switchPanel('tradition'|'reflexionen')`.
Both tabs re-render from `focusParagraph(n)`, so clicking a § updates them together.

**Why it is organised by AA block, not by §.** 788 of the 1870 Reflexionen get their §
only from an enclosing AA block header like `L §. 19-35.`, i.e. they are filed under all
seventeen of those §§. Rendering per-§ would repeat those notes seventeen times. So the
panel mirrors the volume's own structure: a sequence of `REFL_GROUPS` blocks, each
showing its §-range, topic, Jäsche cross-reference, and its Reflexionen. Scrolling the
panel therefore walks through neighbouring §§ the way the printed volume does.

**Windowing.** `reflWin = {lo, hi}` is a window over `REFL_LIVE_GROUPS` (the 105 blocks
that hold entries, in § order). `renderReflForPara(n)` centres the window on `n`'s block
(±2) and scrolls to it; the `▲ earlier §§` / `▼ later §§` edges extend it by 3 and, when
prepending, restore `scrollTop` from `scrollHeight` so the reader's place is kept. The
scrolling element is `#traditionPanel`, not `#reflBody` — easy to get wrong.

**Derived indexes**, built once at script level from the data file:
`REFL_GROUP_ENTRIES` (group → entry indices), `REFL_PARA_TO_GROUP` (§ → group),
`REFL_LIVE_GROUPS`.

**The era filter** collapses 44 attested phase labels into six bands (`ERAS`) by the
`from` year `phaseInfo()` resolves, plus an `undated` band for ε, ο, π and the AA's prose
datings. An entry shows if *any* of its phases is in an active band.

**`REFL_KIND`** maps the AA's eight manuscript-placement prepositions to a gutter glyph
and a tooltip. These are real distinctions about where on the page Kant wrote —
`gegenüber` is the facing interleaved page, `zwischen` is between the printed lines — so
do not collapse them.

**Clicking a phase chip** opens `openAdickes(sym)`, which renders that phase's years,
Adickes' note on it verbatim, his notation preamble, and any flags (`inherited`,
`relative`, `editorial`, `notInAdickesTable`). This is the intended route back to what
Adickes actually wrote; keep it working.

**Text highlighting.** 206 entries name the lemma they annotate and 93 name a `Satz`.
`highlightLemma()` / `highlightSatz()` wrap the corresponding range in the primary text
via `wrapRange()`, which walks text nodes so it survives the cross-reference `<span>`s
`renderParaText` emits. `clearHighlights()` unwraps and `normalize()`s. Satz numbering is
approximated by splitting on sentence-final punctuation — the tooltip says so, and it
should keep saying so.

## Search

Two independent searches, both plain case-insensitive substring matches. Neither folds
diacritics on purpose — in German and Latin an umlaut is a different letter, and a
scholar searching `uber` should not be handed `über`.

**The primary text**, from the box in the primary panel header. `runTextSearch(term)`
scans `WORK.paras`, then re-renders only the paragraphs that gained or lost hits —
`was ∪ now` — by calling `fillParaText(el, n, term)`. Matches are wrapped as
`.search-hit` by the `push()` helper inside `renderParaText`, which handles the plain
runs *between* the cross-reference spans, so highlighting never disturbs them. `stepTextHit(±1)` walks the hits in document order, moving a `.current` class;
Enter and Shift-Enter in the box do the same, Escape clears. Minimum two characters,
180 ms debounce.

Searching calls `clearHighlights()` first. A re-render would strip a lemma or Satz
highlight out of the paragraphs it touches and leave it standing in the rest, so the
two highlighting schemes are never allowed to coexist half-cleared.

**The annotation layer**, from the box under the panel tabs, **scoped to the tab you
are on**. On Tradition `runAnnotSearch(term)` scans `TRADITION` (author, source, text,
relation); on Reflexionen it scans `REFL_ENTRIES` (text, `phRaw`, `sig`, `loc.raw`).
Hits go in `#annotResults`, shown in place of both panel bodies; clicking one clears the
search and jumps to its §. `switchPanel()` re-runs an active search against the newly
selected layer, so the same term can be carried across in one click without retyping.


## Function map

- `buildSidebar()` — walks `HIERARCHY` into collapsible part headers plus `.nav-item`
  entries. Also does the German ordinal labelling (`Der erste Abschnitt:` …) from a
  hard-coded `ordinalWords` array, and splits `title_de` on `:` to separate the ordinal
  from the topic.
- `buildPrimaryContent()` → `appendSection()` — emits one `.section-block` per
  *Abschnitt*, then one `.para-block#para-N` per § in its range.
- `fillParaText(textDiv, n, term)` — fills one `.para-text`: the text, then the AA
  citation tag. Search re-renders through it, so a highlighted § keeps its tag.
- `renderParaText(text, paraNum, term)` — tokenises cross-references, including the
  compound forms Meier uses (`§.15. 16.`, `§.116-121.`), and wraps search hits in the
  plain runs between them. The pattern deliberately does **not** take a trailing dot:
  the dot of `§.14.` can end the sentence as well as the citation, and pulling it into
  the link would drop it from the text. A number outside `WORK.min`–`WORK.max` gets no
  click target; none of Meier's do. Returns a `DocumentFragment`; unlike the Baumgarten
  reader this path never touches `innerHTML`. The `WORK.marks` it reads first is left
  over from the removed Baumgarten tab, and is always empty.
- `focusParagraph(n)` — highlights, syncs the sidebar, and repopulates the tradition
  panel. `scrollToParaNum(n, andFocus)` is the navigation entry point.
- `toggleFilter(btn)` — flips one stratum in `activeFilters` and re-renders the panel.
- The resizer is a `mousedown`/`mousemove`/`mouseup` trio clamping the tradition panel
  to 200–600 px.

## Gotchas

- **This reader is Meier's only.** Baumgarten's *Metaphysica* has its own app in
  [../baumgarten-reader/](../baumgarten-reader/), and both `TRADITION` and the
  Reflexionen here are indexed to Meier's §§ — they say nothing about Baumgarten's.
  A Baumgarten tab was tried here and removed; do not reintroduce one.
- `WORK.min`/`WORK.max` drive `jumpToSection()` and `renderParaText()`. The
  `min`/`max` on `#jumpInput` in the markup repeat them and must be kept in step.
- `MEIER.nav` and `HIERARCHY` overlap. If you correct a section title or range, fix it
  in `HIERARCHY` (what renders) and consider whether `nav` should follow.
- The scroll-sync handler on `#primaryPanel` no-ops whenever a paragraph is focused, and
  nothing ever clears `focusedPara` — so once you click a paragraph, sidebar tracking on
  scroll stops for the rest of the session. It contains a dead `if` block from an
  abandoned approach.
- `toggleFilter`, `jumpToSection`, `switchPanel`, `closeAdickes` are called
  from inline `onclick` attributes and must stay global function declarations.
- The Reflexionen cover **497 of the 563 §§**, but unevenly: they stop at § 542, and the
  distribution follows Kant's lecturing rather than the work's shape. A § with no notes
  falls back to the nearest annotated § below it, so the panel is never blank.
- `data/reflexionen-16-meier.js` is ~1 MB. It is generated; never hand-edit it (see the
  root CLAUDE.md for the regeneration commands).
