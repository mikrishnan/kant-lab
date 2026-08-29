# Arbor Porphyriana — Rule Configurator

An interactive tool for building **genus–species trees** in the Aristotelian–Scholastic
tradition, and for seeing what follows from the rules of division you adopt.

The classical *arbor porphyriana* descends from Substance through body, living body,
animal, and rational animal to *Homo*, and thence to Socrates. But the shape of that
tree depends on choices that are rarely made explicit: must every division be into
exactly two? Must the differentia express the essence? Does the tree bottom out, or can
division always continue? This tool makes those choices into settings, and shows you the
tree — and the logical consequences — that each set of choices produces.

## Running it

Open [porphyrian-tree.html](porphyrian-tree.html) in any modern browser — double-click
it, or:

```sh
open porphyrian-tree.html
```

No install, no server, no build. The whole app is that one file. An internet
connection is used only to fetch the display fonts; it works offline with fallbacks.

## Using it

**1. Set the rules.** The left sidebar has four groups:

- **Division** — binary (Porphyry, Boethius) or multi-member (Aristotle's *Topics*);
  exhaustive or not; mutually exclusive or overlapping.
- **Differentiae** — essential only, or accidental permitted; proper to one genus, or
  common across genera (Baumgarten).
- **Bounds** — what sits at the apex (*Ens*, *Substantia*, or the Kantian *Obiectum* /
  *Gegenstand überhaupt*); whether there is a fixed *infima species* or the tree is open
  downward (Leibniz); whether individuals are represented at all.
- **Definition** — strictly reciprocal or not; definition by genus + differentia, or by
  Merkmale (Wolff, Kant).

**2. Start the tree.** The apex appears. Under each undivided node is a small form:
type a differentia and press `⊥`. In binary mode the negation is generated for you, and
species names default to *differentia + genus* (`rationale Animal` / `non-rationale
Animal`). Mark a node as an *infima species* to terminate that branch and add an
individual beneath it.

Double-click any node's caption to rename it. Each divided node offers an undo that
prunes it back to a leaf, and `Ctrl`/`Cmd`+`Z` steps back through your last fifty edits.
Drag on empty canvas to pan.

**3. Read the implications.** The strip at the bottom of the canvas restates your
configuration as consequences, and flags tensions — e.g. *open downward + genus/differentia
→ infinite regress of differentiae*, or *accidental differentiae + genus/differentia →
definition does not express essence*.

**4. Switch to Thing View.** Instead of the hierarchy, this lists every individual with
the differentiae it instantiates, and then derives the universal affirmative and
negative claims true of your tree — the point where a scheme of division turns into a
stock of syllogistic premises.

## Two automatic modes

Both build a fresh tree from a list of differentiae you supply, replacing whatever is
on the canvas.

- **Wolff Mode** (*ars combinatoria*) splits every branch on every differentia in turn,
  so the bottom level manifests all 2ⁿ combinations.
- **Leibniz Mode** (*characteristica singularis*) uses each differentia exactly once, so
  n differentiae give n splits and n+1 infima species. Its *complete determination*
  option gives each individual the negation of every differentia not on its own branch —
  Baumgarten's and Kant's *durchgängige Bestimmung*.

## Citations

Nodes whose names are in the citation database — *Ens*, *Substantia*, *Obiectum*,
*Homo*, *Socrates* — carry a small dot. Hover one to read the passages from Aristotle,
Porphyry, Aquinas, Wolff, Baumgarten, and Kant that bear on placing that term where you
have placed it.
