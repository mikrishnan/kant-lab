# Kant Lab glossary

One English rendering for every Kantian term in the corpus, with its Latin equivalents and
the spellings the transcripts actually use, so that every translation renders *Erkenntnis*
as "cognition", *Grund* as "ground", *Willkür* as "power of choice", always.
[`../translation-plan.html`](../translation-plan.html) explains why the glossary, not the
translation, is the thing to get right.

**Status: v0.1, proposed.** About 390 entries drafted from the corpus's own frequency list,
following the usual renderings of English Kant scholarship (the Cambridge Edition). None has
been confirmed by a reader of Kant's German yet. Entries marked `proposal` are choices made
here that need a decision; entries marked `meier` follow Meier's own terminology, fixed by the
Latin he glosses it with.

| File | What it is |
| --- | --- |
| [`kant-glossary.js`](kant-glossary.js) | **The glossary.** Hand-curated: edit it directly. Its header explains every field |
| [`index.html`](index.html) | The glossary as a searchable page: renderings, senses, Latin, notes, how often each term occurs, how the prototype translations fared |
| [`glossary.py`](glossary.py) | The tool: `validate`, `count`, `check`, `missing`, `slice`, `index`, `examples`, `spellings`. No language model involved |
| [`corpus-dump.js`](corpus-dump.js) | Reads the texts from `data/` for `glossary.py`; copies nothing |
| `counts.js`, `check.js`, `check-report.txt`, `terms-index.js`, `examples.js`, `spellings.js` | **Generated** by `glossary.py`; do not hand-edit |

## Editing an entry

Open `kant-glossary.js`, change the entry, then run

```sh
python3 glossary.py validate    # ids, required fields, two entries claiming the same spelling
python3 glossary.py count       # refreshes counts.js
python3 glossary.py check       # refreshes check.js and check-report.txt
python3 glossary.py index       # refreshes terms-index.js, which the reader uses to mark terms
python3 glossary.py examples    # refreshes examples.js: one example sentence per entry
python3 glossary.py spellings   # refreshes spellings.js: how the texts actually spell each term
```

Rules of thumb:

- **One sense, one English word.** If a German word needs two renderings, add a `senses` item
  with the condition that selects it (*Achtung* "respect"; *Achtung geben* is its own idiom
  entry, "pay attention"). Never leave the choice to the translator's taste.
- **Two German words may share an English word** (*Grundsatz* and *Prinzip* are both
  "principle"). The reader's hover keeps them apart, so that is allowed. Where Kant
  contrasts them, they must not share one: *Grenze* "boundary" against *Schranke* "limit".
- **List period spellings in `v`** only when the matcher's rules don't already catch them.
  Run `count` and look at whether the number moves.
- When an entry has been checked by a person, set `status: 'confirmed'` and say who and when.

## Using it in a translation

```sh
echo "Die Erkenntniß ist in Ansehung der Gründe gewiß." | python3 glossary.py slice
```

prints only the rules that passage needs:

```
- Erkenntnis (as printed: Erkenntniß) → cognition. Never: knowledge. Latin: cognitio.
- in Ansehung (as printed: in Ansehung) → with regard to.
- Grund (as printed: Gründe) → ground; but "reason" when only in the everyday …
```

Put that in the translation prompt for the passage, so a translator, human or model, sees
the ~20 rules that apply rather than all 390. Afterwards, `check` measures whether the
translation obeyed.

## What the first check found

The earlier machine translations in `../translations/` were made before this glossary
existed. Against it, they already use the agreed rendering 94% of the time, which shows the
renderings chosen here are the natural ones. The other 6% is exactly the drift a shared
glossary prevents, for example:

- *Kennzeichen* (Meier's *criteria veritatis*) translated "marks", which collides with *Merkmal*;
- *Fertigkeit* translated "skill", which collides with *Geschicklichkeit*;
- *Lebhaftigkeit* (Baumgarten's *vividitas*) translated "liveliness";
- *Gelehrsamkeit* translated "learnedness" where the glossary proposes "erudition". That one
  is a decision to make, not an error.

`check-report.txt` lists every term with examples.

## In the reader

[`../busolt-reader.html`](../busolt-reader.html) loads the glossary. Every term that has an
entry is underlined (dotted) in Busolt, Blomberg and Meier; clicking one opens a card with its
fixed English rendering, senses, Latin, note and corpus counts, a link to the entry on this
page (`index.html#<id>`), and a button that searches the texts for the word as printed. In the
Meier tab the translation window also lists the glossary renderings of the terms in the
hovered phrase. A "glossary terms" checkbox turns the underlining off. The term positions come
from `terms-index.js`, so after editing the glossary run `count`, `check` and `index` again.

## Examples

Beneath each entry, `index.html` shows one example: a sentence from Logik Busolt, Logik Blomberg or
Meier's *Auszug* that uses the term. The term is in bold, and the sentence's English from the
reader's translations (`../translations/logik-units.json`, `../translations/meier-aligned.js`) is
shown with the rendering in bold. The reader's glossary card shows the same example, and its
citation opens the sentence in the reader with its translation pinned.

`glossary.py examples` picks it by rule, not by hand. The English must use the agreed rendering.
Among those sentences, in all three texts, it takes the one that best fits:

- a whole sentence of 60–220 characters;
- no editorial brackets;
- one that says what the thing is (*… ist …*, *… heißt …*).

Where no sentence renders the term as agreed, it falls back to the best sentence and marks the
translation as not yet following the glossary. 355 of the 393 entries have an example; the
other 38 (*Kategorie*, *Apperzeption*, …) do not occur in these three texts. The translations are
unreviewed machine output.

## Old spellings

An entry's `de` is the **modern spelling**. `glossary.py spellings` records how the six texts
actually print each term. Every occurrence is grouped by its spelling, so *Urtheilen* counts
under *Urtheil*, and counted per text. An ending is taken off only where the stem left over is
itself printed somewhere, so *Ideen* is never cut to "Ide"; modern inflections count as the
modern spelling. 202 of the 388 terms that occur are printed in at least one period spelling:

- *Urtheil* for *Urteil*;
- *Erkenntniß*, *Erkentnis* and *Erkenntniss* for *Erkenntnis*;
- *Merckmahl* for *Merkmal*;
- *Begrif* for *Begriff*;
- *Warheit* for *Wahrheit*.

The glossary page lists these spellings under each entry, most frequent first, and its search
finds an entry by any of them. In the reader, the glossary card lists them too. Wherever a hover names
a glossary term (a term hovered in German-only or interlinear mode, or the "Glossary:" line
under a phrase's gloss in With English mode), it gives the modern spelling beside the printed one,
which is the form a dictionary has.
