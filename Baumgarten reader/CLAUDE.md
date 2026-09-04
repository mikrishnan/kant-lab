# Baumgarten reader

Single-file SPA: [baumgartenreading-guide.html](baumgartenreading-guide.html) (~760 lines)
plus the generated text in [../data/metaphysica-17.js](../data/metaphysica-17.js).
Reads Baumgarten's *Metaphysica* (4th ed., Halle 1757 = AA XVII) in Latin, with
Baumgarten's own German equivalents rendered inline as amber chips.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite.

## File shape

| Lines | Contents |
| --- | --- |
| 1–450 | `<head>`, Google Fonts import, `:root` palette, all CSS |
| 451–480 | Markup: `#toc-panel` sidebar, `#top-bar`, `#text-canvas`; the `<script src>` for the data |
| 490–520 | `KANT_REFS`, and the `SECTIONS` / `PARAGRAPHS` adapter over the generated data |
| 525–760 | Rendering, TOC building, event wiring, init |

Everything is rendered by JS into two empty containers (`#toc-scroll`, `#text-inner`);
there is no static content in the markup.

## Where the text lives

The text is **not** in this file. It is in `../data/metaphysica-17.js`, machine-extracted
from `Textfiles/Baumgarten.rtfd` by `scripts/parse_baum.py`, and loaded by a classic
`<script src>` tag so the app still opens from a `file://` URL. That file publishes
`MET_META`, `MET_SECTIONS`, `MET_PARAGRAPHS` and `MET_BY_NUM` as top-level `const`s.

**Do not hand-edit it.** Text corrections go in the extractor, which prints a report
you are expected to read. See "Regenerating the Metaphysica data" in the root
CLAUDE.md.

## Data shapes

`MET_SECTIONS` is the outline of the whole work, in reading order:

```js
{ id: 'parsi-capi-seci', label: 'Sectio I · Possibile', type: 'sub',
  raw: 'SECTIO I. POSSIBILE.' }
```

- `type` is `'part'` | `'head'` | `'sub'`, from `PARS` | `CAPUT` | `SECTIO`. It selects
  the heading style and, in the TOC, controls grouping — a `'part'` opens a new
  collapsible group and everything after it nests inside until the next `'part'`.
- `raw` is the heading as the volume sets it, keeping Baumgarten's own Roman numerals.
  He writes `IIII` and `XVIIII`, not `IV` and `XIX`, and `label` preserves that.
- `note` appears on one section only: an AA editorial note standing where text would
  otherwise be. It renders as a `.sec-note` block and again in the TOC.

`KANT_REFS`, in the HTML, is the one piece of hand-entered data left. It maps a section
id to the phases of Kant's marginalia and renders the purple "Handschriftliche
Bemerkungen Kants" block. The volume prints such a block for the Prolegomena and for
Possibile and nowhere else, which is why it is not in the generated data.

`MET_PARAGRAPHS` is a flat array in section order:

```js
{ num: 14, section: 'parsi-capi-seci', aa: 27, ed: null,
  text: 'Ratio@@1@@, cf. §. 640, … rationatum@@2@@ eius dicitur …',
  glosses: ['ein Grund', 'seine Folge, das in ihm gegründete'],
  marks: ['*', '**'] }
```

- `section` must match a `MET_SECTIONS[].id`, or the paragraph renders nowhere.
- `@@N@@` is a **1-based** index into `glosses`, marking the point in the Latin where
  Baumgarten's German equivalent belongs. `processText()` swaps it for a `.gloss-chip`.
- `marks[N-1]` is the label the **volume** prints at that marker, and is what the chip
  shows. It is not recoverable from `N`: the asterisk count restarts when a §'s
  footnotes run over a page, three §§ (714, 723, 781) carry on into `a)` `b)` `c)`,
  and the volume mislabels eight outright. Do not go back to `'*'.repeat(N)`.
- `§. N` anywhere in `text` is auto-linkified into a click-to-scroll cross-reference.
  This happens after gloss substitution, so `§. N` inside a gloss string also links.
  Note the source form and the display form differ: the data keeps Baumgarten's spacing,
  `§. 14`, but every `§` in the UI renders tight against its number as `§14` — in
  cross-reference links, paragraph headers, and TOC entries alike. Keep new `§` output
  in that form.
- `flags`, on two §§ only, records a reading of AA XVII that looks like a misprint:
  `{ w: as printed, r: the conjectured reading, y: why }`. **The volume's word stays
  in `text`.** The reader only underlines it with a dotted rule and prints the
  conjecture beneath the § as a `.para-flag` note, so what AA XVII says is always
  visible and the emendation always reads as an emendation. To add one, extend
  `SUSPECTED_MISPRINTS` in `scripts/parse_baum.py` — never edit the text. The
  extractor checks each entry against the § it names and aborts if it has gone stale.
- `aa` is the AA XVII page the § starts on, `aaEnd` the page it ends on where it runs
  over; they render as a green `AA 17:` tag. `aa` is `null` for §§ 1–3 only, which
  precede the volume's first page marker — the page is not stated there and is not
  guessed at.
- `ed` is the page of Baumgarten's own 1757 pagination, which the AA prints in brackets;
  `null` where no bracket falls inside the §. It renders as a grey `1757 p.` tag.

## Function map

- `processText(p)` — the `@@N@@` → chip and `§. N` → link substitution. Takes the whole
  paragraph, since it needs `marks` as well as `glosses`. Returns an HTML string
  assigned via `innerHTML`.
- `buildTextContent()` — walks `SECTIONS`, emits heading + optional `note` + optional
  `kantRefs` block + the paragraphs from `secMap[sec.id]`.
- `buildTOC()` / `buildTOCItem()` — mirrors the same walk into the sidebar;
  `getParaSnippet()` produces each entry's label from the paragraph's first six words.
- `scrollToPara(num)` — the single navigation entry point. Scrolls, moves the
  `.focused` highlight, and syncs the TOC. `focusPara()` just delegates to it.
- The sidebar filter matches the typed string against TOC item text, or an exact
  paragraph number.

## Gotchas

- **§§ 504–699 do not exist here, and that is correct.** AA XVII does not reprint the
  Psychologia empirica (Sectiones I–XVIII); the volume puts it in Bd. XV. The gap is
  the Academy Edition's, not the tool's, and the section carries the AA's own note
  saying so. Do not "fill it in" from another source without marking the provenance.
- `scrollToPara` is called from an inline `onclick` in generated HTML, so it must stay a
  global function declaration.
- Paragraph text goes through `innerHTML`. That is fine for this trusted, generated
  data; escape first if the source ever becomes dynamic.
- A cross-reference to a § in the 504–699 gap (§ 700 opens with `Mutor, §. 505-699`)
  renders as a link that goes nowhere, since there is no `#para-505` to scroll to.
- Only the first number of a run is linked: `§. 20, 23` links 20 and leaves 23 plain.
