# Meier reader

An interactive reading guide to **G. F. Meier, *Auszug aus der Vernunftlehre*** (Halle
1752) — the logic textbook Kant used in his lecture courses for thirty years, and the
book whose interleaved pages carry the *Reflexionen zur Logik* of Academy Edition
vol. XVI.

## Running it

Open [meier-reading-guide.html](meier-reading-guide.html) in any modern browser —
double-click it, or:

```sh
open meier-reading-guide.html
```

No install, no server, no build. The whole app is that one file. An internet
connection is used only to fetch the display fonts; it works offline with fallbacks.

## What you get

- **The complete German text**, all 563 §§, laid out by *Haupttheil* and *Abschnitt*.
- **A collapsible outline** in the left sidebar, showing each *Abschnitt* with its
  § range. Clicking jumps you there; the current section stays highlighted.
- **Clickable cross-references.** Meier's internal citations — including his compound
  forms like `§.116-121.` — are links that scroll to the passage cited.
- **Academy Edition citations.** Each paragraph carries its `AA 16:…` reference, so you
  can move between this text and the *Reflexionen* keyed to it.
- **A tradition panel** on the right. Click any paragraph and the panel shows where
  that passage comes from and what it argues against, in three colour-coded strata:
  - **Wolff · Leibniz** — Meier's immediate sources;
  - **Scholastic** — Aquinas, Porphyry, Baumgarten;
  - **Aristotle** — the ultimate ancestry of the doctrine.

  Each entry is tagged *Source*, *Parallel*, or *Contrast*. The three buttons at the
  top of the panel filter by stratum, and the divider between the two columns can be
  dragged to rebalance them.
- **A jump box** in the header: type a § number and press Enter.
- **Two searches.** The box above the text searches the work you are reading and
  highlights every match in place; the counter shows which hit you are on, and `‹ ›`
  or Enter / Shift-Enter step through them. The box under the panel tabs searches the
  annotation layers instead — the tradition entries and Kant's Reflexionen together —
  and lists what it finds, with the § each hit belongs to; click a result to go there.
  Both are case-sensitive about umlauts, so *über* and *uber* are different words.

## Coverage

The primary text is complete. The tradition annotations are not — ten pivotal
paragraphs are annotated so far (§§ 1, 10, 14, 15, 115, 155, 292, 353, 362, 414);
other paragraphs show a placeholder in the right-hand panel. Annotation is ongoing.

The header's **Baumgarten · Metaphysica** tab now switches the reader over to
Baumgarten's *Metaphysica* — all 804 §§ that AA XVII prints, with his own German
equivalents set as amber chips at the words they gloss. The sidebar and the jump box
follow the work you are in.

The **Reflexionen** panel follows it. On the Baumgarten tab it shows Kant's notes on
the *Metaphysica* — 2967 of them, Refl. 3489–6455 from AA XVII and XVIII — listed for
whichever § you are reading, with the notes the Academy Edition locates precisely
first and those placed only by block or by page of Kant's own copy after. A further
708 belong to no numbered § at all: Kant writing on the prefaces and the Synopsis, on
loose sheets, and in his copy of Eberhard. None of those has been filed against a §
it says nothing about, and a button at the foot of the panel opens them on their own.

The tradition panel does not follow it, and says so. The parallel passages are
annotated against Meier's § numbers, so they are not shown against Baumgarten's.

The same text, with its Synopsis and Kant's marginalia by section, has its own app in
[../Baumgarten reader/](../Baumgarten%20reader/); both read the one generated
[../data/metaphysica-17.js](../data/metaphysica-17.js).
