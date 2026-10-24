# Jäsche reader — a provenance reader for the Jäsche *Logik*

*The spec is the source of truth for this tool. When the tool's behaviour changes, this
file changes in the same pull request.*

**Status:** design stage. Nothing is built yet. [mockup.html](mockup.html) is a static visual
preview of the interface (revision 2): one screen with numbered callouts, the other three
tabs, and design notes with the decisions still open. Its texts, matches and counts are real,
from the pilot run; the worked example is § 21 (AA 9:102–103). Behaviour items marked
**(in the mockup)** are drawn there; the others are planned.

## Question

Can Jäsche's *Logik* (1800) be read as one critical-era text, or does it splice in doctrine
Kant held earlier and later gave up? The tool does not answer that. It shows, passage by
passage, where Jäsche's text plausibly comes from and how old that source is, so that the
reader can judge whether the doctrine still fits the critical Kant.

The sources are Kant's own notes, not the student transcripts. Jäsche's Vorrede
(AA 9:3–4) says he worked from Kant's interleaved copy of Meier's *Auszug*, the compendium
Kant lectured on, and the notes Kant wrote in it. Those notes are the *Reflexionen zur Logik*
(AA XVI), each filed under a Meier § and dated by Adickes. The student transcripts —
Blomberg (ca. 1771), the Wiener Logik (1780ff.) and Busolt (ca. 1789/90) — are not Jäsche's
sources. They are dated parallels to what Kant was teaching at those times.

### What the pilot found

Of Jäsche's 1,600 sentences of six words or more (the Vorrede left out), compared with every
text in this repository:

| Compared with | ≥ 90% | ≥ 70% | ≥ 50% (share of Jäsche's words) |
| --- | --- | --- | --- |
| Reflexionen zur Logik, AA XVI | 66 sentences · 4% | 189 · 11% | 332 · 19% |
| Meier, *Auszug* | 2 · 0.1% | 6 · 0.2% | 37 · 1% |
| Reflexionen zur Metaphysik, AA XVII–XVIII | 0 | 2 · 0.0% | 50 · 1% |
| Blomberg, Busolt, Wiener, AA XXIV | 1 · 0.0% | 17 · 0.4% | 118 · 4% |
| any of these | 69 · 4% | 210 · 12% | 428 · 22% |

A hand-checked sample of the 50–70% band is mostly genuine reworking of Kant's notes, not
noise. So about a fifth of Jäsche's words can be traced to the Reflexionen; the other texts
here add almost nothing. The Elementarlehre is better traced (20% of its sentences at ≥ 70%)
than the Einleitung (8%).

**About 78% of Jäsche's words are not traced to any source in this repository.** That does
not show Jäsche wrote them freely. Three explanations are open, and the repository cannot
yet tell them apart:

1. *Reworking beyond what word matching sees.* Kant's notes are terse; Jäsche writes them out,
   reorders them and adds connectives. A match by words in order misses that.
2. *Sources not in the repository.* The other transcripts of AA XXIV (Philippi, Pölitz,
   Dohna-Wundlacken), the logic passages of Kant's published works (the *Critique of Pure
   Reason*'s Transcendental Logic and Doctrine of Method), and papers of Kant's that are lost.
3. *Jäsche's own writing.*

The next test is the first two: add the other AA XXIV transcripts and the relevant parts of
the *Critique* as data, and re-run the comparison. Existing scholarship (Boswell's article on
the Logik's textual authenticity, 1988; Hinske's Kant-Index concordances) should be read first,
as it may already answer part of this.

## Sources

- The Jäsche *Logik*, AA 9:3–150: [../logik-jasche-9.js](../logik-jasche-9.js), `LOGIK_JASCHE`
  (this owner's extraction; `sections`, `blocks`, `paras`).
- The Reflexionen zur Logik, AA 16:39–869: `data/reflexionen-16-meier.js` — `REFL_ENTRIES`
  (text, Meier § filing, Adickes' phase expression verbatim), `REFL_GROUPS` (the AA's block
  headers, including their concordance to AA IX, e.g. `L §. 5. IX 21-33`), `REFL_BY_PARA`.
- Adickes' chronology of Kant's hand, AA XIV: `data/phases-adickes.js` — `PHASES`,
  `phaseInfo()`, `phaseYears()`.
- The transcript parallels, AA XXIV: `data/logik-blomberg-24.js`, `data/logik-busolt-24.js`,
  `data/logik-wiener-24.js`.
- Not yet available: the text of Meier's *Auszug* (AA XVI) as data. It exists only inside the
  Meier reader's page. See Open questions.

## Attested vs. inferred

**Attested, shown as the edition prints it:** Jäsche's text and AA pages; every Reflexion's
text, number, AA page and Meier §; Adickes' phase expression verbatim, query marks and
parentheses included (`κ? (λ?) ρ??`); his years for each phase; the AA's own concordance
between Meier §§ and Jäsche pages, where a block header gives one.

**Inferred, and marked as such:**

- *Which Reflexion a Jäsche sentence comes from.* A machine match: the share of the
  sentence's words found in order in the note, after folding spelling. Shown with its
  percentage, as near-verbatim (≥ 90%) or close (≥ 70%).
- *The dating class of a sentence.* Never a date for Jäsche's sentence. The page says only
  "matches R 3036, which Adickes dates η? κ–λ?". The class is the decade of Adickes' first
  dating of that note (before 1770 · 1770s · 1780s · 1790s), or **mixed dating** where that
  first dating itself spans two decades (ψ−θ: late 1770s into the 1780s). A span reaching only
  one year past a decade boundary counts as the first decade, so κ−λ (1769–70) is "before
  1770". See Open question 2 for the alternatives.
- *The Meier § behind a Jäsche passage, where the AA gives no concordance* (all of the
  Elementarlehre and Methodenlehre). Taken from the §§ of the Reflexionen it matches, and
  labelled "inferred from the matches".
- *Transcript parallels.* The section-level parallels in the transcripts, from the content
  comparison in [../jasche-cross-reference.html](../jasche-cross-reference.html).
- *Flags.* Conditions the page computes, worded as observations and never as verdicts.

**Rules that follow:**

- Dates are taken from Adickes' years, never from the order of his letters: θ is "the 1780s",
  though it falls between η (1764–68) and ι (c. 1766–68).
- An early source is not evidence of early doctrine. Kant may still have endorsed an old note
  in 1785; that is why the transcript parallels and the flags sit beside the Reflexionen.
- Counts are of distinct Reflexionen as well as sentences: one long note of the 1790s
  (R 2793) supplies over twenty sentences of Einleitung IX.

**Colour.** The four decades are one blue running dark (before 1770) to light (1790s), an
ordinal ramp checked for monotone lightness and visibility on the page; the oldest material
stands out most. Mixed dating is a hatched warm grey, so it cannot be read as a decade.
Identity is never colour alone: every mark carries its Reflexion number, and the legend is
always on screen.

## Behaviour

*Never renumber. Strike a dropped item through and say why.*

**Reader (left)**

1. **(in the mockup)** The left column shows the whole Jäsche text, with AA 9 page numbers in
   the margin and page breaks inside paragraphs marked `‹N›`.
2. **(in the mockup)** A contents tree beside the text lists the parts, sections and §§; clicking
   an entry scrolls the text to it, and the entry for the section and § in view is highlighted.
3. **(in the mockup)** A search box finds a term in Jäsche, with a hit count and previous/next; a
   *spelling-tolerant* option lets one printed spelling find the others.
4. **(in the mockup)** An **X-Ray mode** switch above the text. Off, Jäsche reads as a clean text.
   On, every sentence traced to a Reflexion is tinted in the colour of its dating class (see
   Colour), with a solid underline for near-verbatim and a dashed one for close, and a small
   `R 3036` after it names the note.
5. **(in the mockup)** In X-Ray mode, clicking a marked sentence opens it in the **Sources** tab.

**Panel (right): four tabs**

6. **(in the mockup)** **Overview.**
   - a. A dating strip of the whole book: one column per AA 9 page, its height the number of
     traced sentences on that page, stacked by dating class. Section boundaries are marked
     above it. Clicking a column scrolls the text to that page.
   - b. The same as shares: a pie of the traced sentences by dating class, labelled with
     percentages and counts.
   - c. A bar of how much of Jäsche is traced at all, by strength: near-verbatim, close,
     reworked, not traced (share of words).
   - d. The totals by dating class, in sentences and in distinct Reflexionen.
7. **(in the mockup)** **Sources.** Follows the § in view (or the sentence clicked). It shows:
   - a. the Meier §§ the passage rests on, from the AA concordance (attested) or from the
     matches (inferred), with the AA's topic heading;
   - b. a timeline, 1750–1805, of the Reflexionen filed under those §§, each placed by Adickes'
     years, the ones Jäsche used filled in their class's colour (hatched if mixed), with a line
     at 1781;
   - c. each matched sentence beside its Reflexion, Jäsche's words that are not in the note
     marked, with the phase expression verbatim, its years, and AA 16 page.
8. **(in the mockup)** **Transcript parallels** (formerly "Witnesses"). For the § in view, the
   passages of Blomberg, the Wiener Logik and Busolt that deal with the same matter, oldest
   first, each with its date, strength and the shared concepts, so that one can see whether the
   doctrine was still being taught in the 1780s. The tab says plainly that these are not
   Jäsche's sources.
9. **(in the mockup)** **Flags.** A list across the book of §§ and sections that meet a condition,
   each clickable:
   - *early only* — every Reflexion matched is in the "before 1770" class;
   - *sources from three or more decades* — the notes matched in one § or section fall in three
     or more dating classes;
   - *early, no late transcript parallel* — early only, and no good parallel in the Wiener
     Logik or Busolt.
10. ~~A *Design notes* switch in the header.~~ (dropped: the numbered design notes live in
    mockup.html, not in the tool)
11. Meier's text for the §§ in 7a, beside the Reflexionen. Needs Meier's *Auszug* in `data/`.
12. A doctrinal-vocabulary layer marking critical-era terms (transcendental, synthetic *a
    priori*, the categories, reflecting and determining judgement, the postulates). An aid only.
13. A Jäsche-internal layer: where the same doctrine is treated twice (Jäsche moved material
    from the Elementarlehre into the Einleitung, as his Vorrede says), the two places side by
    side.

## Out of scope

- Dating Jäsche's sentences, or deciding whether a doctrine is critical. The tool shows sources
  and their dates; the judgement is the reader's.
- Correcting Adickes' datings. They are shown as he gives them.
- Kant's papers outside AA XVI.

## Decisions made

- **Unit:** individual sentences are marked; §-level views are built from them.
- **Periods:** by decade — before 1770, 1770s, 1780s, 1790s.
- **Mixed dating:** a class and colour of its own (hatched warm grey).
- **Transcript parallels:** a tab of its own, under that name.
- **X-Ray mode:** the marks in the text are a switch.
- **Overview:** the strip is shown again as a pie.

## Open questions

1. ~~Unit of dating.~~ Decided: sentences.
2. **Which rule for "mixed dating"?** Of the 189 traced sentences:
   - 44 (27 Reflexionen) if Adickes' first dating spans two decades, allowing one year past a
     boundary — **the rule drawn in the mockup**;
   - 59 (34) with no allowance, because κ−λ (1769–70) then always straddles 1770;
   - 108 (66) if every alternative he offers counts, query-marked ones included — more than
     half of all traced sentences.
3. ~~Period boundaries.~~ Decided: by decade.
4. **Meier's text.** Extract the *Auszug* to `data/` (the data owners' decision), or link to the
   Meier reader instead?
5. **Thresholds.** Near-verbatim at 90% and close at 70% come from the pilot; check them by hand
   on Einleitung IX and on the §§ on syllogisms. And add a third, dotted strength for reworked
   sentences (50–70%), which would mark another 8% of Jäsche's words?
6. **The vocabulary layer (item 12).** Wanted, or left out as too weak to help?
7. **The untraced 78%.** Add the other AA XXIV transcripts and the logic passages of the
   *Critique* as data, and re-run (see "What the pilot found"). Read Boswell (1988) and Hinske's
   Kant-Index first.
8. *From the mockup's design notes:* should search also cover the Reflexionen? Should the
   timeline draw a mixed note's span as a bar? Should the strip have a column per page or per §?
