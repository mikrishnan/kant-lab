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

No install, no server, no build. The app is the one HTML file plus
[`../data/metaphysica-17.js`](../data/metaphysica-17.js), which holds the text and
is pulled in with a plain `<script src>` so double-clicking still works. An internet
connection is used only to fetch the display fonts; it works offline with fallbacks.

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
