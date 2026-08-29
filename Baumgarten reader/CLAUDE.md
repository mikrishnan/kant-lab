# Baumgarten reader

Single-file SPA: [baumgartenreading-guide.html](baumgartenreading-guide.html) (~1300 lines).
Reads Baumgarten's *Metaphysica* (4th ed., Halle 1757 = AA XVII) in Latin, with
Baumgarten's own German equivalents rendered inline as amber chips.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite.

## File shape

| Lines | Contents |
| --- | --- |
| 1–409 | `<head>`, Google Fonts import, `:root` palette, all CSS |
| 410–440 | Markup: `#toc-panel` sidebar, `#top-bar`, `#text-canvas` |
| 450–530 | `SECTIONS` — the work's full outline |
| 538–1098 | `PARAGRAPHS` — the transcribed text |
| 1100–1318 | Rendering, TOC building, event wiring, init |

Everything is rendered by JS into two empty containers (`#toc-scroll`, `#text-inner`);
there is no static content in the markup.

## Data shapes

`SECTIONS` is the outline of the whole work, in reading order:

```js
{ id: 'sec1', label: 'Sectio I · Possibile', type: 'sub',
  kantRefs: [ { phase: 'δ', vol: 'XVII', page: '251' }, … ] }
```

`type` is `'part'` | `'head'` | `'sub'`, which selects the heading style and, in the
TOC, controls grouping — a `'part'` opens a new collapsible group and everything after
it nests inside until the next `'part'`. `kantRefs` is optional and renders the purple
"Handschriftliche Bemerkungen Kants" block listing the phases of Kant's marginalia
(Adickes' δ/ε/λ/ν dating) that attach to that section.

`PARAGRAPHS` is a flat array in section order:

```js
{ num: 14, section: 'sec1', aaPage: null,
  text: 'Ratio@@1@@, cf. §.640, … rationatum@@2@@ eius dicitur …',
  glosses: ['ein Grund', 'seine Folge, das in ihm gegründete'] }
```

- `section` must match a `SECTIONS[].id`, or the paragraph renders nowhere.
- `@@N@@` is a **1-based** index into `glosses`, marking the point in the Latin where
  Baumgarten's German equivalent belongs. `processText()` swaps it for a `.gloss-chip`
  labelled with `N` asterisks. An `@@N@@` with no matching gloss is silently dropped.
- `§.N` anywhere in `text` is auto-linkified into a click-to-scroll cross-reference.
  This happens after gloss substitution, so `§.N` inside a gloss string also links.
- `aaPage` is the AA XVII page; when set it renders a green `AA 17:` tag in the
  paragraph header. It is currently `null` throughout.

## Function map

- `processText(text, glosses)` — the `@@N@@` → chip and `§.N` → link substitution.
  Returns an HTML string assigned via `innerHTML`.
- `buildTextContent()` — walks `SECTIONS`, emits heading + optional `kantRefs` block +
  the paragraphs from `secMap[sec.id]`.
- `buildTOC()` / `buildTOCItem()` — mirrors the same walk into the sidebar;
  `getParaSnippet()` produces each entry's label from the paragraph's first six words.
- `scrollToPara(num)` — the single navigation entry point. Scrolls, moves the
  `.focused` highlight, and syncs the TOC. `focusPara()` just delegates to it.
- The sidebar filter matches the typed string against TOC item text, or an exact
  paragraph number.

## Gotchas

- **The text is incomplete.** 135 paragraphs are present: §§ 1–102 densely (with 70–71
  and 75–76 missing), then a thin scatter up to § 950. Sections whose paragraphs
  haven't been transcribed still render their heading, followed by nothing. Adding text
  is a matter of appending to `PARAGRAPHS` with the right `section` id — no other change
  is needed.
- `scrollToPara` is called from an inline `onclick` in generated HTML, so it must stay a
  global function declaration.
- Paragraph text goes through `innerHTML`. That is fine for this trusted, hand-entered
  data; escape first if the source ever becomes dynamic.
