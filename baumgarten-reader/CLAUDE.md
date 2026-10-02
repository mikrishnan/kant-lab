# Baumgarten reader

Single-file SPA: [baumgartenreading-guide.html](baumgartenreading-guide.html) (~1960 lines)
plus three generated data files. Reads Baumgarten's *Metaphysica* (4th ed., Halle 1757
= AA XVII) in Latin, with Baumgarten's own German equivalents rendered inline as amber
chips and Kant's Reflexionen on the § in view in a side panel.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite.

## File shape

| Lines | Contents |
| --- | --- |
| 1–950 | `<head>`, Google Fonts import, `:root` palette, all CSS |
| 952–1015 | Markup: `#toc-panel` sidebar, `#top-bar`, `#reading-row` (= `#text-canvas` + `#refl-panel`), `#synopsis-overlay`, `#adickesVeil`; the three `<script src>` tags |
| 1017–1100 | `KANT_REFS`, and the `SECTIONS` / `PARAGRAPHS` adapter over the generated data |
| 1101–1400 | Text rendering, TOC building, the Synopsis overlay |
| 1400–1870 | The Reflexionen layer: corpus, cards, panel, Adickes overlay, text highlighting |
| 1870–1960 | Event wiring and init |

Everything is rendered by JS into three empty containers (`#toc-scroll`, `#text-inner`,
`#refl-scroll`); there is no static content in the markup.

## The three data files

| File | Publishes | Used for |
| --- | --- | --- |
| [../data/metaphysica-17.js](../data/metaphysica-17.js) | `MET_META`, `MET_SECTIONS`, `MET_PARAGRAPHS`, `MET_BY_NUM`, `MET_SYNOPSIS` | the text, the outline, the Synopsis |
| [../data/reflexionen-17-18-baumgarten.js](../data/reflexionen-17-18-baumgarten.js) | `REFLM_META`, `REFLM_ENTRIES`, `REFLM_GROUPS`, `REFLM_BY_PARA` | the Reflexionen panel |
| [../data/phases-adickes.js](../data/phases-adickes.js) | `PHASES`, `phaseInfo()`, `phaseYears()`, `ADICKES_PREAMBLE` | dating a Reflexion, and the Adickes overlay |

All three are classic `<script src>` includes rather than `fetch()`, so the app still
opens from a `file://` URL and their top-level `const`s are simply visible here.

**None of them may be hand-edited.** `metaphysica-17.js` is extracted from
`Textfiles/Baumgarten.rtfd` by `scripts/parse_baum.py` and the Reflexionen from three
more RTFs by `scripts/parse_refl.py` + `scripts/emit_baum_refl.py`; both print a report
you are expected to read. Text corrections go in the extractor, so they survive the
next run. See "Regenerating the generated data" in the root CLAUDE.md.
`phases-adickes.js` is the exception — it is hand-written from AA XIV.

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

`MET_SYNOPSIS` is Baumgarten's own conspectus of the whole work, printed at AA 17:19–23
before the text, flat and in reading order:

```js
{ m: 'a)', t: 'possibile S. I. §. 7-18.', ref: 'S. I', from: 7, to: 18, ed: 'XLIV' }
```

- **The printed indentation is not reconstructed, on purpose.** The Synopsis is a deeply
  indented outline on the page, but the indentation is in neither the RTF (four `\li`
  runs in the whole section) nor the text conversion. It cannot be recovered from the
  markers either: the volume letters several levels in Greek, the transcription renders
  some of those as Latin lookalikes (γ as `g)`, η as `h)`, ω as `w)`), and `a)`/`b)` are
  therefore shared between two series that only diverge at their third member. Inventing
  a tree would be exactly the inference the repo forbids passing off as the source's.
  The markers sit in a gutter and carry the outline, as they do on the page.
- `ref` is the `P.`/`C.`/`S.` token the entry names, which *is* in the text.
- `from`/`to` drive the § links. Where `MET_BY_NUM` has no such §, the reference renders
  as `.syn-ref.absent` instead of a link — those are the §§ 504–699 AA XVII omits.
- The transcription is missing two pages of the Synopsis, so §§ 280–518 are absent from
  it. The panel prints a `.syn-gap` note where the numbering breaks; the break is found
  at render time from the data, not hard-coded.

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

`REFLM_ENTRIES` is Kant's notes, flat and in AA order:

```js
{ r: 3489, vol: 17, part: 'erl', ph: ['κ','σ'], phRaw: 'κ−σ', sig: 'M 4.',
  hb: 'M', pg: 4, grp: 0, src: 'locus', paras: [11], aa: 5,
  loc: { raw: 'ZuM §. 11»quicquid est, illud«', kind: 'zu', paras: [11],
         lemma: 'quicquid est, illud' },
  text: 'drükt propositiones tavtologicas aus.' }
```

- `src` is how the § was arrived at, and is the whole point of the footer tag:
  `locus` (1648) from the entry's own locus note, `block` (557) from the AA block
  heading above it, `page` (31) off the page of Kant's copy, `none` (731) not stated.
  `interp` (23) marks a § this tool interpolated from the surrounding entries.
- `paras` is absent or empty on **708** entries. They are not filed against any §
  and must never be: `front` (459) is the Roman-numbered front matter, `blatt` (91)
  a *loses Blatt*, and `other` (107) names another handbook — chiefly Kant's copy of
  Eberhard's *Vorbereitung*. `REFL_OFFPARA` collects them for the panel's no-§ view.
- `phRaw` is Adickes' dating **verbatim**; `ph` is the parse. The card prints `phRaw`
  whenever it says more than the symbols do, because the query marks and parentheses
  are Adickes' own uncertainty. Same for `loc.raw` against the rest of `loc`.
- `loc.kind` is one of the eight keys of `REFL_KIND`, which supplies the gutter glyph.
- `sig` is the place in Kant's own copy; a prime marks the interleaved page.
- `REFLM_BY_PARA` maps a § number to entry indices. It has **726** keys, eight of
  which (655–662) are §§ AA XVII does not print. Nothing is lost: every entry under
  those eight is also filed under a § that *is* printed.

## Function map

- `buildSynopsis()` / `openSynopsis()` / `closeSynopsis()` — the Synopsis overlay,
  opened by `#synopsis-btn` in the top bar and closed by its button, a backdrop click,
  or Escape. `buildSynopsis()` is idempotent; it returns early once the rows exist.
  `synopsisRef()` linkifies a § reference while leaving the entry's wording verbatim,
  and `synopsisGo()` closes the overlay before scrolling.
- `processText(p)` — the `@@N@@` → chip and `§. N` → link substitution. Takes the whole
  paragraph, since it needs `marks` as well as `glosses`. Returns an HTML string
  assigned via `innerHTML`.
- `buildTextContent()` — walks `SECTIONS`, emits heading + optional `note` + optional
  `kantRefs` block + the paragraphs from `secMap[sec.id]`.
- `buildTOC()` / `buildTOCItem()` — mirrors the same walk into the sidebar;
  `getParaSnippet()` produces each entry's label from the paragraph's first six words.
- `scrollToPara(num, andPanel = true)` — the single navigation entry point. Scrolls,
  moves the `.focused` highlight, syncs the TOC, and moves the Reflexionen panel.
  `focusPara()` just delegates to it. The highlighting functions pass `andPanel:
  false`, since they are already reaching a § *from* a card and must not have the
  panel rebuilt under them.
- The sidebar filter matches the typed string against TOC item text, or an exact
  paragraph number.

### The Reflexionen panel

- `BAUM_CORPUS` wraps the entries, the § index, and `provenance(e)`, which returns
  the `{cls, text, title}` of the footer tag. It is the one place that decides how a
  § was arrived at, and it must stay exhaustive — `src: 'none'` with no `front` /
  `blatt` / `other` flag still gets a tag ("no § stated"), never nothing.
- `buildReflEntry(idx)` builds one card. `renderReflForPara(num)` fills the panel
  for a §, sorting locus-attested notes before those placed only by page or block,
  and always appends the way in to `showReflElsewhere()`.
- `showReflPanel(on)` hides and restores the panel; `#refl-show` in the top bar is
  the way back, and is `display:none` while the panel is open.
- `watchParasInView()` keeps the panel on the § being read. It is an
  `IntersectionObserver` with a root margin that narrows the root to a band across
  the top of the canvas, **not** a scroll handler: there are 804 §§ and measuring
  them all per frame is not affordable. The lowest § number in the band wins.
- `openAdickes(sym)` / `closeAdickes()` — Adickes' note on one phase of Kant's hand,
  from `phaseInfo()`, opened by a phase chip. Every qualification he attaches to a
  dating (`inherited`, `relative`, `covers`, `unlisted`, …) gets its own flag block;
  do not fold them into the year span.
- `highlightLemma(entry)` / `highlightSatz(entry)` — find the words the AA says a
  note annotates, in the Latin on the left. `clearHighlights()` first, always.
  `paraTextNodes()` is what makes this work here: it walks the § excluding
  `.gloss-chip` subtrees, because Baumgarten's German equivalents are set *inline*
  and the AA's lemmata are his Latin. Feed `wrapRange()` offsets computed from the
  same walk, or the two will disagree.

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
- **The two Reflexionen corpora are not interchangeable.** This app loads AA XVII–XVIII,
  on the *Metaphysica*; the Meier reader loads AA XVI, on the *Auszug*. The card
  renderer looks alike in both, but the `provenance()` vocabularies differ and so do
  the panel layouts — the Meier panel is grouped by AA block because AA XVI files 788
  entries under a block header alone, which is not how XVII–XVIII are built. Do not
  try to share one implementation across the two apps.
- **Lemma highlighting finds 75 of the 82 lemmata, and the other 7 must stay
  unfound.** `highlightLemma()` tries an exact match and then a case-folded one,
  and stops there. The remaining seven fail because the AA is not quoting the
  printed word: it normalises Baumgarten's spelling (»subposita« for *supposita*,
  »ejusdem« for *eiusdem*), cites Kant's own German (»angestrengt«), or composes a
  topic label of its own (»identitas numerica«, »absolutismus theologicus«). A
  fuzzier match would put the mark on words Kant did not annotate, which is worse
  than no mark. A lemma that spans a gloss chip is likewise not found, since the
  chip's German is not part of Baumgarten's sentence.
- `Escape` is bound twice, once for the Synopsis and once for the Adickes overlay.
  Both are idempotent, so whichever is open closes.
