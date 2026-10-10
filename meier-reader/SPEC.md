# Meier reader

*The spec is the source of truth for this tool. Claude builds what it says; reviewers
check the tool against it. When the tool's behaviour changes, this file changes in the
same pull request.*

*Drafted on 10 October 2026 from what the page did on that day, for its owners to review.
Every Behaviour item was checked by driving the page in headless Chrome, not by clicking
through it by hand. Items the page does not yet satisfy would be marked **Fails at
present**, with the Open question that explains why; at the time of drafting, none
needed the mark.*

## Question

G. F. Meier's *Auszug aus der Vernunftlehre* (Halle 1752) is the logic textbook Kant
lectured from for thirty years. His interleaved copy carries the *Reflexionen zur
Logik* of AA XVI. The tool lets a reader work through Meier's German § by §, and asks two
things of each §. Where does the doctrine come from? The Tradition tab shows passages
from Wolff and Leibniz, the Scholastics and Aristotle. And what did Kant make of it? The
Reflexionen tab shows his notes, arranged as AA XVI arranges them, with Adickes' dating.
With the printed volumes, that means AA XVI's double apparatus, AA XIV for the dating,
and the sources themselves, cross-referenced by hand.

## Sources

- **The text.** G. F. Meier, *Auszug aus der Vernunftlehre*, all 563 §§, each with its
  place in AA XVI (AA 16:5–872). Held in the page itself as `MEIER` (the text),
  `HIERARCHY` (the Einleitung, the four Haupttheile, and the Abschnitte of the first and
  third) and `CITATIONS` (§ → AA page). These three are long single-line literals with no
  extractor in `scripts/`. They are corrected by targeted replacement and never
  reformatted (see [CLAUDE.md](CLAUDE.md)).
- **Kant's notes.** 1870 Reflexionen, Refl. 1619–3488, AA 16:39–869, in the AA's 105
  blocks, from [../data/reflexionen-16-meier.js](../data/reflexionen-16-meier.js):
  `REFL_META`, `REFL_GROUPS`, `REFL_ENTRIES`, `REFL_BY_PARA` and `REFL_PARAS`. Generated
  from `Textfiles/Vol16reflexionenMeier.rtfd` by `scripts/parse_refl.py` and
  `scripts/emit.py`.
- **The dating.** Adickes' chronology of the phases of Kant's hand, AA 14:XXXV–XLIII,
  from [../data/phases-adickes.js](../data/phases-adickes.js): `phaseInfo()` and
  `ADICKES_PREAMBLE`.
- **The tradition.** `TRADITION`, from [../data/tradition-meier.js](../data/tradition-meier.js):
  25 entries on 10 §§ (1, 10, 14, 15, 115, 155, 292, 353, 362, 414), written by hand by
  the project. Each names an author and a place in a work, a stratum (Wolff · Leibniz,
  Scholastic, Aristotle) and a relation to Meier (Source, Parallel, Contrast), and gives
  an annotation in English. The file's header says how to add one.

The commands that regenerate the Reflexionen are in "Regenerating the generated data" in
the root [CLAUDE.md](../CLAUDE.md).

## Attested vs. inferred

**Shown as the Academy Edition prints it.** Meier's German, in his spelling, and each
§'s AA page. For each AA block: its § range, its topic and its cross-reference to the
Jäsche *Logik* (AA IX). For each Reflexion: the text, Adickes' phase expression
verbatim on an `AA:` line wherever it says more than the phase chips do, the locus note
verbatim, and Kant's page siglum. A number the AA records with no text is shown as a
vacat, not dropped.

**Worked out by the tool, and marked as such:**

- **Which § a Reflexion belongs to.** Every card carries a tag, with a tooltip:

  | Tag | Meaning | Entries |
  | --- | --- | --- |
  | `§ attested` | the § is named in the note's own locus note | 1044 |
  | `§ from AA block` | the AA gives only the block's § range | 788 |
  | `interpolated §` | the AA states no §; the tool assigned one. The card also has a dashed left border | 38 |

  Ten of the 38 interpolated notes are on Meier's front matter, before § 1. The tool
  files them at § 1, and their tooltip says so.
- **Where the § in view has no note of its own**, a line in its block says that no
  Reflexion is located at that § individually. A § with no notes at all (Kant's stop at
  § 542) shows the block of the nearest annotated § before it.
- **The era filter** groups Adickes' phases into decades by the year their dating
  begins. The grouping is the tool's; the years on each chip are Adickes'.
- **Sentence numbers** for a `Satz` chip are counted by splitting on sentence-final
  punctuation, and the tooltip says the count is approximate.
- **Finding a lemma** in the text uses an exact match and nothing looser.

**The Tradition tab is the project's own scholarship**, not the edition's. Its strata,
relations and annotations are judgements made by whoever wrote each entry. Open
question 5 asks how the page should say so.

Open question 3 is a place where the display does not yet meet this rule.

## Behaviour

*Items are never renumbered. When one is dropped, strike it through and say why —
`~~3. …~~ (dropped: superseded by 7)` — so that a pull request saying "implements item 4"
keeps its meaning.*

### Opening the page

1. The page opens from the site and straight from disk (double-clicking the file), and
   the browser console shows no errors.
2. The primary column shows all 563 §§ of the *Auszug* in order. A heading stands before
   the Einleitung, before each of Haupttheile II and IV, and before each Abschnitt of
   Haupttheile I and III: 17 headings in all.
3. Each § ends with its AA citation in small grey type. § 1 ends `AA 16:5`, and § 5
   ends `AA 16:51–52`.

### The sidebar

4. The left sidebar lists the Einleitung and the four Haupttheile, each with its § range
   (`§10–413`). The Einleitung and the Erster Haupttheil are open when the page loads.
5. Clicking a Haupttheil's heading opens or closes its list of Abschnitte, and scrolls
   the text to the Haupttheil's first §, without highlighting it.
6. Clicking an Abschnitt (`Der vierte Abschnitt: Von der Wahrheit der gelehrten
   Erkenntniss (§ 92–§ 114)`) scrolls the text to its first §, highlights that §, and
   fills the panel for it.
7. The Abschnitt holding the highlighted § is marked in the sidebar.
8. Before any § has been clicked, the sidebar marks the Abschnitt being read as the text
   scrolls. See Open question 1 for what happens after.

### The text

9. Cross-references are links, including Meier's compound forms (`§.15. 16.`,
   `§.25-30`). Clicking one goes to the first § it names and highlights it. Its tooltip
   names the others, as in "Jump to § 17 (also refs: §18)". At § 4, `§.1` goes to § 1.
10. Clicking a § highlights it and fills both of the panel's tabs for it.
11. Typing a number from 1 to 563 into the `§` box in the header and pressing Enter or
    `Go` goes to that § and highlights it, and empties the box. Any other number does
    nothing.

### Searching the text

12. Typing two or more letters into `Search the text…` highlights every match in the
    text, goes to the first, and shows which match is current: `Wahrheit` gives `1/160`.
    One letter shows `…`. No match shows `none` and disables `‹` and `›`.
13. Enter and `›` go to the next match; Shift-Enter and `‹` go to the previous one. Both
    wrap round at the ends: `‹` from `1/160` gives `160/160`.
14. Escape empties the box and removes the highlights.
15. Case is ignored and umlauts are not: `über` gives 103 matches and `uber` gives 1.

### The Tradition tab

16. Before any § has been clicked, the tab says "Click any paragraph on the left to see
    parallel and contrasting passages from the tradition here."
17. For an annotated §, the tab is headed `§ 15 · Meier, Auszug` with the opening of the
    §'s text, and then shows each entry: the author, the source, the annotation, and a
    `Source`, `Parallel` or `Contrast` tag. Each entry is coloured by its stratum. § 15
    has three: Wolff and Leibniz as Sources, Aristotle as a Parallel.
18. For any other §, the tab says "No tradition entries yet for this paragraph."
19. The three buttons `Wolff · Leibniz`, `Scholastic` and `Aristotle` each hide and show
    their stratum's entries. With all three off, the tab says "All entries hidden by
    current filters."

### The Reflexionen tab

20. The tab's label carries the number of Reflexionen filed at the § in view: `17` at
    § 1, `118` at § 20. While the era filter hides some, it shows how many are visible,
    as in `56/118`.
21. The panel shows the AA's blocks in order. Each block is headed by its § range, its
    number of Reflexionen, the AA's topic, and the AA's cross-reference to the Jäsche
    *Logik* where there is one (`AA 9:21-33` on the block for § 5). The block holding the
    § in view is marked, two blocks are shown on either side, and the panel scrolls to
    the § in view. At § 20, the blocks are §§ 15–16, 17–18, 19–35, 36 and 37–40.
22. Within a block, notes whose own locus note names a § stand under a `§ N` heading, with
    the § in view marked. Notes the AA files only to the block as a whole come last, under
    "not separately located · N".
23. If the § in view has no note of its own, a line says "No Reflexion is located at
    § N individually. The notes below belong to this block as a whole, or to neighbouring
    §§ within it." Kant's notes stop at § 542. At § 550, the panel shows the block for
    §§ 527–563 with that line, and the count is 0.
24. `▲ earlier §§` and `▼ later §§` at the panel's ends add three more blocks in that
    direction, and the reader's place in the panel is kept. At the ends of the volume
    they read "— start of the volume —" and "— end of the volume —".
25. Clicking a block's heading, or a `§ N` heading, goes to that § in the text and
    highlights it.
26. Each card shows the Refl. number; a chip for each phase of Kant's hand, with Adickes'
    years and coloured by decade (dashed and marked `undat.` where he gives none); the
    AA 16 page; the AA's dating verbatim on an `AA:` line where it says more than the
    chips do; the locus note verbatim; the text of the note; Kant's page siglum; and the
    tag saying how the § was arrived at. A glyph in the card's gutter shows where on the
    page the note stands, and its tooltip says what the AA's word means.
27. Interpolated cards have a dashed left border and a dashed `interpolated §` tag. The
    front-matter notes, Refl. 1619–1627, are among them, and their tooltip says the AA
    states no § and that the tool filed them at § 1.
28. Refl. 2624, at §§ 171–175, reads "[Vacat — the Academy Edition records this number
    with no text.]"
29. The era buttons `1750s`, `1760s`, `1770s`, `1780s`, `1790 +` and `undated` each hide
    and show notes from that band. A note stays visible if any of its phases is in a band
    that is on. A `§ N` group or a block left with nothing visible disappears.
30. Clicking a phase chip opens Adickes' note on that phase: its years, a separate block
    for each qualification he attaches to the dating, his note verbatim, and his remarks
    on the notation generally. `close`, a click on the dimmed page behind, or Escape
    closes it.
31. Clicking a lemma chip (`»…«`), or anywhere else on a card that has one, tints those
    words in the text and scrolls to them, without rebuilding the panel. At § 17,
    Refl. 1725's `»cognitio rationalis«` tints *cognitio rationalis*. 197 of the 206
    lemmata are found (Open question 2).
32. Clicking a `Satz` chip tints that sentence of the §. At § 5, Refl. 1631's `Satz 1`
    tints the sentence beginning *Die Weltweisheit (philosophia)*. The chip's tooltip
    says that sentence counting is approximate.
33. Each new highlight clears the previous one, and so does starting a text search.

### Searching the annotations

34. `Search this tab…` searches the layer of the tab that is open. On Tradition it
    searches the author, source, annotation and relation of each entry. On Reflexionen
    it searches the text, the dating, the siglum and the locus note of each note. Two or
    more letters list the matches in place of the tab's contents, in § order, each with
    its §. `Wolff` gives `16 found` on Tradition, and `Wahrheit` gives `9 found` on
    Reflexionen.
35. Clicking a match empties the search, opens the match's tab, and goes to its § and
    highlights it.
36. Switching tabs while a search is open runs the same search on the other tab. Where
    nothing matches, the panel says "Nothing in the tradition entries matches that. The
    other tab searches the other layer." (or "… in the Reflexionen …"). One letter shows
    `…`. Escape empties the search.

### The panel

37. Dragging the bar between the text and the panel resizes the panel, between about 200
    and 600 pixels wide.

## Out of scope

- **A second work.** Baumgarten's *Metaphysica* has its own reader. A Baumgarten tab here
  has been tried and removed, and `TRADITION` and the Reflexionen here are keyed to
  Meier's §§ only.
- **Repeating notes under every § they are filed to.** 788 notes are filed only to an AA
  block, so a per-§ list would repeat a note filed to §§ 19–35 seventeen times. The panel
  follows the AA's blocks instead.
- **Folding umlauts in either search.** In German an umlaut is a different letter.
- **Looser lemma matching** than the edition's own words, for the reason given in the
  Baumgarten reader's spec: a near miss marks words Kant did not annotate.
- **Reformatting `MEIER`, `HIERARCHY` or `CITATIONS`.** They stay single-line literals,
  and corrections to them are targeted replacements.
- **Saving anything.** Nothing is stored between visits, and nothing is edited in the
  browser.

## Open questions

1. **The sidebar stops following the scrolling after the first click.** Once any § has
   been highlighted, scrolling the text no longer moves the sidebar's mark (item 8), for
   the rest of the visit. Should the mark follow the scrolling again once the reader
   scrolls away from the highlighted §?
2. **Non-breaking spaces hide some lemmata.** 9 of the 206 lemmata are not found. For 6
   of them the only obstacle is that the text has a non-breaking space where the AA's
   lemma has an ordinary one: Refl. 1630 `»der allgemeinern«` at § 5, 2101, 2729, 2816,
   2817 and 2830. 391 of the 563 §§ contain non-breaking spaces. Treating the two kinds
   of space alike when matching would find these 6 without loosening the match. The
   other three (2138 `»Zusammenhange — cognitionis«`, 2264 `»versteckter Weise falsch«`,
   3387 `». . . n, eine L. . .«`) need a look at the AA.
3. **Two blocks are headed `§§ 1–5` although the AA gives them no §.** The first block
   in the panel holds the nine front-matter notes (Refl. 1619–1627) and two interpolated
   notes at § 5. A third block holds Refl. 1667, the tenth front-matter note. Neither has
   an AA block heading. The panel works out `§§ 1–5` from the §§ the tool itself assigned
   to their notes, and sets it in the same style as the AA's own block headings. The code
   intends `Front matter` when a block has no §§. Should these blocks say that?
4. **Front matter is handled differently in the two readers.** This reader files Meier's
   front-matter notes at § 1, marked as interpolated. The Baumgarten reader files its 459
   at no § and gives them a view of their own. Both readers are owned together, so which
   should both do?
5. **Who stands behind a Tradition entry, and on what evidence?** The entries are
   interpretive annotations in English. They give a work and a place (`Philosophia
   Rationalis, §§ 1–3`) but no edition or page, and they name no annotator and no date.
   Before more participants add entries, it may be worth agreeing what an entry must
   carry: an edition, a quotation, the annotator's name. The data file's header is where
   such a rule would go.
6. **Is Baumgarten a Scholastic?** The `Scholastic` stratum holds Aquinas and Porphyry,
   and also Baumgarten (at § 14). Is that the classification the project wants, or does
   he belong with Wolff and Leibniz, or in a stratum of his own?
7. **The look, and the name.** The root `CLAUDE.md` says all three tools share one
   palette: parchment, dark brown ink and a sienna accent. This reader alone uses a dark
   navy header and sidebar, with a Prussian-blue accent. Its header reads "Kant Reading
   Guide · Pre-Kantian Tradition" and does not name Meier, although the browser tab does.
   Should it move to the suite's palette and name its work, or is the difference wanted?
8. **The text search's summary is never seen.** The counter first shows how many matches
   fall in how many §§ ("160 in 98 §§"), but moving to the first match replaces it
   straight away with `1/160`. Should the number of §§ stay visible?
