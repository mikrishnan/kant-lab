# Meier reader

Single-file SPA: [meier-reading-guide.html](meier-reading-guide.html) (~1130 lines, but
three of those lines are enormous data blobs).
Reads G. F. Meier's *Auszug aus der Vernunftlehre* (1752 = AA XVI) in German, with a
resizable side panel of parallel and contrasting passages from the tradition.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite.

## File shape

| Lines | Contents |
| --- | --- |
| 1–541 | `<head>`, fonts, `:root` palette, all CSS |
| 543–604 | Markup: header, `#sidebar`, `#primaryPanel`, `#resizer`, `#traditionPanel` |
| 608 | `MEIER` — the full text (~288 KB, **one line**) |
| 609 | `HIERARCHY` — the outline (~2.7 KB, one line) |
| 611 | `CITATIONS` — § → AA reference (~12 KB, one line) |
| 617–688 | `TRADITION` — hand-written parallel passages |
| 690–1130 | State, builders, rendering, event wiring, init |

**Do not reformat lines 608, 609, or 611.** They are machine-generated JSON dumps.
Pretty-printing them turns any subsequent one-word correction into a 20,000-line diff.
Make targeted string replacements, or regenerate the whole line from a script.

## Data shapes

`MEIER` has two keys:

- `MEIER.nav` — a flat list of `{ part_num, part_title_de, part_title_en, sec_num,
  sec_title_de, sec_title_en, paras: [1, 2, 3, …] }`. Currently **unused by the
  renderer**; `HIERARCHY` drives the UI. Kept as the fuller structural record.
- `MEIER.paras` — `{ "1": "Die Vernunftlehre oder die Vernunftkunst …", … }`, string
  keys. 562 of the work's 563 §§ are present.

`HIERARCHY` is what the sidebar and main column are built from — five top-level parts:

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

`TRADITION` maps `paraNum` → array of entries:

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
intended growth path — no code change is needed to add entries.

## Function map

- `buildSidebar()` — walks `HIERARCHY` into collapsible part headers plus `.nav-item`
  entries. Also does the German ordinal labelling (`Der erste Abschnitt:` …) from a
  hard-coded `ordinalWords` array, and splits `title_de` on `:` to separate the ordinal
  from the topic.
- `buildPrimaryContent()` → `appendSection()` — emits one `.section-block` per
  *Abschnitt*, then one `.para-block#para-N` per § in its range.
- `renderParaText(text)` — tokenises cross-references with
  `/§\.\d+(?:[-.\s]+\d+)*\.?/g`, which handles the compound forms Meier uses
  (`§.15. 16.`, `§.116-121.`). Returns a `DocumentFragment`; unlike the Baumgarten
  reader this path never touches `innerHTML`.
- `focusParagraph(n)` — highlights, syncs the sidebar, and repopulates the tradition
  panel. `scrollToParaNum(n, andFocus)` is the navigation entry point.
- `toggleFilter(btn)` — flips one stratum in `activeFilters` and re-renders the panel.
- The resizer is a `mousedown`/`mousemove`/`mouseup` trio clamping the tradition panel
  to 200–600 px.

## Gotchas

- **The "Baumgarten · Metaphysica" tab is a stub.** `switchWork()` only rewrites the
  title string; there is no Baumgarten text in this file. That text lives in
  [../Baumgarten reader/](../Baumgarten%20reader/) as its own app.
- The § range `1–563` is hard-coded in four places: the `#jumpInput` `min`/`max`
  attributes, `jumpToSection()`, and twice inside `renderParaText`. Change all of them
  together.
- `MEIER.nav` and `HIERARCHY` overlap. If you correct a section title or range, fix it
  in `HIERARCHY` (what renders) and consider whether `nav` should follow.
- The scroll-sync handler on `#primaryPanel` no-ops whenever a paragraph is focused, and
  nothing ever clears `focusedPara` — so once you click a paragraph, sidebar tracking on
  scroll stops for the rest of the session. It contains a dead `if` block from an
  abandoned approach.
- `switchWork`, `toggleFilter`, `jumpToSection` are called from inline `onclick`
  attributes and must stay global function declarations.
