# Baumgarten reader

An interactive reading guide to **A. G. Baumgarten, *Metaphysica*** (4th edition,
Halle 1757 — the text reprinted as Academy Edition vol. XVII, and the textbook Kant
lectured from for forty years).

## Running it

Open [baumgartenreading-guide.html](baumgartenreading-guide.html) in any modern
browser — double-click it, or:

```sh
open baumgartenreading-guide.html
```

No install, no server, no build. The app is the one HTML file plus three generated
data files — [`../data/metaphysica-17.js`](../data/metaphysica-17.js) for the text,
[`../data/reflexionen-17-18-baumgarten.js`](../data/reflexionen-17-18-baumgarten.js)
for Kant's notes on it, and [`../data/phases-adickes.js`](../data/phases-adickes.js)
for Adickes' dating of them. All three are pulled in with plain `<script src>` tags
so double-clicking still works. An internet connection is used only to fetch the
display fonts; it works offline with fallbacks.

## What you get

- **The Latin text**, laid out by *pars*, *caput*, and *sectio*, one block per §.
- **German glosses inline.** Where Baumgarten supplied a German equivalent for a Latin
  term, it appears as an amber chip right at the word it translates — so
  *ratio* is followed immediately by *ein Grund*, *possibile* by *Möglich*.
- **Clickable cross-references.** Baumgarten's text is dense with internal citations
  (`§. 14`, `§. 20, 23`). Each one is a link that scrolls you to that section.
- **A filterable table of contents** in the left sidebar, grouped by part and
  collapsible. Type into the filter box to narrow by keyword or jump by § number.
  The `☰ TOC` button hides the sidebar for a wider reading column.
- **Kant's marginalia flagged by section.** Where the Academy Edition records
  *Handschriftliche Bemerkungen* on a section, a purple block lists the phases of
  Kant's notes (Adickes' δ, ε, λ, ν datings) and their AA XVII page.
- **Baumgarten's Synopsis**, behind the `Synopsis` button in the top bar: his own
  conspectus of the whole work, printed before the text in 1757. Every § in it is a
  link. It is the one place the *Psychologia empirica* sections appear at all, since
  AA XVII omits their text — so it is where you can see what §§ 504–699 contain.
- **Both paginations.** Each § carries the AA XVII page it falls on and, where the
  volume marks one, the page of Baumgarten's own 1757 edition.

Clicking a paragraph highlights it and marks the corresponding sidebar entry.

## Kant's Reflexionen, beside the text

The right-hand panel shows what Kant wrote in his own copy of the *Metaphysica* at
whichever § you are reading: 2967 notes, Refl. 3489–6455, from AA XVII and XVIII.
It follows the text as you scroll, and the `×` in its header closes it — the
`Reflexionen` button in the top bar brings it back.

Each note is shown with:

- **Adickes' dating**, as a chip per phase of Kant's hand, coloured by decade.
  Click one for Adickes' own note on that phase (AA 14:XXXV–XLIII), including
  every qualification he attaches to it. A dashed chip means he gives no date.
- **Where on the page it stands** — a glyph in the card's gutter for *Zu*,
  *Gegenüber*, *Neben*, *Zwischen*, *Über*, *Unter* and *In*.
- **The Academy Edition's locus note verbatim**, query marks and all, alongside
  whatever could be parsed out of it. Where the AA names the exact words Kant
  annotated, the lemma is a chip — click it, or the card, to find those words in
  the Latin on the left.
- **How the § was arrived at.** A tag on every card says whether the § is the
  note's own (`§ attested`), comes from the block heading above it in the AA
  (`§ from AA block`), was read off the page of Kant's copy (`§ from handbook
  page`), or was worked out by this tool from the surrounding notes
  (`interpolated §`, also marked by a dashed border). What the edition says and
  what the tool inferred are never allowed to look alike.

**708 of the notes belong to no numbered §** — Kant writing on the Roman-numbered
front matter, on loose sheets, and in his copy of Eberhard's *Vorbereitung zur
natürlichen Theologie*. None of them has been filed against a § it says nothing
about; a button at the foot of the panel opens them on their own.

## Coverage

All 804 §§ that Academy Edition XVII prints: §§ 1–503 and §§ 700–1000, across the
whole work — Ontologia, Cosmologia, Psychologia, Theologia Naturalis — with 710 of
Baumgarten's German equivalents.

**§§ 504–699 are missing, and not by omission here.** They are the Psychologia
empirica, Sectiones I–XVIII, and AA XVII does not reprint them; the volume prints
them in Bd. XV instead, alongside Kant's anthropology material. The reader shows
the Academy Edition's own note to that effect where the text would stand.

Baumgarten's three prefaces are also not shown — they precede § 1 in the volume and
this reader is keyed to § numbers throughout.

Of the Reflexionen, 718 §§ of the text carry at least one. The Academy Edition files
notes against eight further §§ — 655–662, inside the *Psychologia empirica* gap — but
every one of those notes is filed against a § that *is* printed here as well, so none
is out of reach.
