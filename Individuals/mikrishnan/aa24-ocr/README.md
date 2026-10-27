# AA XXIV logic transcripts, from OCR

Four of Kant's logic lectures that the repository had no transcription of, read off
the printed Academy Edition by OCR. **Uncorrected machine reading**: good enough to
search, compare and prototype with; check any quotation against the page image before
you use it.

| File | Global | Text | AA | Words |
| --- | --- | --- | --- | --- |
| [logik-herder-24-ocr.js](logik-herder-24-ocr.js) | `LOGIK_HERDER` | Logik Herder (1762–64), Herder's notes, a fragment | 24:3–6 | 1,318 |
| [logik-philippi-24-ocr.js](logik-philippi-24-ocr.js) | `LOGIK_PHILIPPI` | Logik Philippi (Königsberg, May 1772) | 24:311–496 | 61,915 |
| [logik-poelitz-24-ocr.js](logik-poelitz-24-ocr.js) | `LOGIK_POELITZ` | Logik Pölitz (1780–82; the manuscript's title says 1789) | 24:502–602 | 38,242 |
| [logik-dohna-24-ocr.js](logik-dohna-24-ocr.js) | `LOGIK_DOHNA` | Logik Dohna-Wundlacken (summer 1792), as AA XXIV reprints it from Kowalewski's edition of 1924 | 24:693–784 | 30,581 |

Each file is in the `logik` shape of `data/logik-busolt-24.js`, and its header comment
lists the fields it adds. The Logic Portal reads all four (see its `catalogue.js`).

## Where the text comes from

The Internet Archive's scan of AA XXIV (Berlin: de Gruyter, 1966), from the copy in
Duquesne University's Gumberg Library, digitized in 2010, and the OCR the Archive made
of it:

- [kantsgesammeltes241imma](https://archive.org/details/kantsgesammeltes241imma), erste Hälfte, pp. 1–496
- [kantsgesammeltes242imma](https://archive.org/details/kantsgesammeltes242imma), zweite Hälfte, pp. 497–1103

Not from Past Masters: nothing here passes through the InteLex licence. The lecture
texts are 18th-century; Lehmann's own introduction, notes and apparatus (AA 24:953–1103)
are left out entirely.

**To check a reading**, open the page image: AA 24:P is
`https://archive.org/details/kantsgesammeltes241imma/page/n<P+7>/mode/1up` for pp. 1–496,
and `https://archive.org/details/kantsgesammeltes242imma/page/n<P−487>/mode/1up` for
pp. 497 on. Each file's `meta.scan` says the same.

## How good it is

Measured on Busolt, which the repository has from InteLex: the same pipeline run over
Busolt's pages (AA 24:608–686) gets **about 98% of the words right** once case and
punctuation are set aside, and 96.5% exactly. Spot checks of single pages of Philippi
(AA 24:318, 420, 475), Pölitz (503) and Dohna (750) against the scans agree.

The errors are of these kinds:

- **Misread letters**: `WTahrheit`, `Hegt` for `liegt`, `averden` for `werden`,
  `Erkenntmssen`. Most common.
- **Silent spelling normalisation by the OCR's dictionary.** It sometimes gives the
  modern spelling for the old: `Schwierigkeiten` where the page has `Schwürigkeiten`,
  `Notwendigkeit` for `Nothwendigkeit`, and `Verstände` for `Verstande` 19 times in
  Busolt. **Do not use these files for questions of spelling.**
- **Greek** is garbled (`Aoyos` for λόγος).
- **Letter-spaced emphasis** splits words (`noth wendigen`).
- **Kowalewski's sigla** in Dohna are sometimes misread: `<(sine capite)` where the
  page has ⟨sine capite⟩. His key to them is kept, verbatim, in `meta.editorialNote`.

Nothing is added, reworded or filled in. The extractor only takes away what is not the
transcript (running heads, line numbers, printer's signatures), lifts the manuscript
pagination out of the text, and rejoins lines into paragraphs.

## Known faults

- **Section titles.** Headings are found by layout. A centred line that is really text
  can open a section: in Philippi the mnemonic verse at AA 24:475 (*S. vult simpliciter
  verti P. vero per accidens*) titles the section that runs to p. 480. The words stay in
  the text all the same (every heading is also a `heading` block), so nothing is lost
  from the passages. Herder's `Sectio II.` is not taken as a heading.
- **Manuscript pagination** is numbered only where the margin reads cleanly, or follows
  exactly from numbers that do: about 70% of the breaks in Philippi and Pölitz, and 84%
  in Dohna. The rest are `p: null`.
- **Tables** (Pölitz pp. 551 and 589; Dohna pp. 774 and 776) are kept as the OCR's lines,
  not as prose. Read them on the page image.

## Left out on purpose

- **The Schlapp excerpts**, *Aus der Logik Hintz* and *Aus der Logik Hoffmann* (AA
  24:941–952): Schlapp's summaries of lost notebooks, with only the passages in
  quotation marks the notebooks' own words. They are not transcripts.
- **Lehmann's apparatus** (AA 24:953–1103), still in copyright.
- Blomberg, Busolt and the Wiener Logik, which `data/` has from InteLex.

## Regenerating

```sh
mkdir -p /tmp/aa24 && cd /tmp/aa24
curl -LO https://archive.org/download/kantsgesammeltes241imma/kantsgesammeltes241imma_djvu.xml
curl -LO https://archive.org/download/kantsgesammeltes242imma/kantsgesammeltes242imma_djvu.xml
cd -
python3 Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py all /tmp/aa24 Individuals/mikrishnan/aa24-ocr
```

The extractor prints a report per text: sections, blocks, words, line numbers dropped,
how many manuscript breaks were numbered by reading, by sequence, or not at all, tables,
and every heading it found. **Read it.** Its docstring says what it knows about the
layout.

To measure the OCR against a clean transcription of the same pages:

```sh
python3 Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py busolt /tmp/aa24 /tmp/busolt-ocr.js
python3 Individuals/mikrishnan/aa24-ocr/compare_ocr.py data/logik-busolt-24.js /tmp/busolt-ocr.js
```

## Later

These belong in `data/` once a cleaner text replaces them or the readers' owners take
them on; until then they stay here, outside the shared data, because they are OCR.
