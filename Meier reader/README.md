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

## Coverage

The primary text is complete. The tradition annotations are not — ten pivotal
paragraphs are annotated so far (§§ 1, 10, 14, 15, 115, 155, 292, 353, 362, 414);
other paragraphs show a placeholder in the right-hand panel. Annotation is ongoing.

The header also shows a **Baumgarten · Metaphysica** tab. It is a placeholder — that
text has its own app in [../Baumgarten reader/](../Baumgarten%20reader/).
