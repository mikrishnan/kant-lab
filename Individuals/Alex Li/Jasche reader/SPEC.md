# Jäsche reader — a provenance reader for the Jäsche *Logik*

*The spec is the source of truth for this tool. When the tool's behaviour changes, this
file changes in the same pull request.*

**Status:** design stage. Nothing is built yet. [mockup.html](mockup.html) is a static visual
preview of the interface: one screen with numbered callouts, the four tabs, and design notes
with the decisions still open. Its texts, matches and counts are real, from the pilot run;
the worked example is § 21 (AA 9:102–103). Behaviour items marked **(in the mockup)** are drawn
there; the others are planned.

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
sources. They are dated witnesses to what Kant was teaching at those times.

A pilot comparison supports this. Of the Jäsche sentences of six words or more, 66 match a
Reflexion at 90% or more (189 at 70% or more), against 1 (and 18) for the three transcripts
together. Of the 131 sentences matching a Reflexion at 80% or more, Adickes dates the note
before 1770 for 29, to the 1770s for 29, and from 1780 on for 72.

## Sources

- The Jäsche *Logik*, AA 9:3–150: [../logik-jasche-9.js](../logik-jasche-9.js), `LOGIK_JASCHE`
  (this owner's extraction; `sections`, `blocks`, `paras`).
- The Reflexionen zur Logik, AA 16:39–869: `data/reflexionen-16-meier.js` — `REFL_ENTRIES`
  (text, Meier § filing, Adickes' phase expression verbatim), `REFL_GROUPS` (the AA's block
  headers, including their concordance to AA IX, e.g. `L §. 5. IX 21-33`), `REFL_BY_PARA`.
- Adickes' chronology of Kant's hand, AA XIV: `data/phases-adickes.js` — `PHASES`,
  `phaseInfo()`, `phaseYears()`.
- The dated witnesses, AA XXIV: `data/logik-blomberg-24.js`, `data/logik-busolt-24.js`,
  `data/logik-wiener-24.js`.
- Not yet available: the text of Meier's *Auszug* (AA XVI). It exists only inside the Meier
  reader's page, not in `data/`. See Open questions.

## Attested vs. inferred

**Attested, shown as the edition prints it:** Jäsche's text and AA pages; every Reflexion's
text, number, AA page and Meier §; Adickes' phase expression verbatim, query marks and
parentheses included (`κ? (λ?) ρ??`); his years for each phase; the AA's own concordance
between Meier §§ and Jäsche pages, where a block header gives one.

**Inferred, and marked as such:**

- *Which Reflexion a Jäsche sentence comes from.* A machine match: the share of the
  sentence's words found in order in the note, after folding spelling. Shown with its
  percentage, as near-verbatim (≥ 90%) or close (≥ 70%).
- *The period of a sentence.* Never asserted. The page says only "matches R 3036, which Adickes
  dates η? κ–λ?". Its colour is that of the period of Adickes' **first-listed** phase; the full
  span of his alternatives is always shown beside it.
- *The Meier § behind a Jäsche passage, where the AA gives no concordance* (all of the
  Elementarlehre and Methodenlehre). Taken from the §§ of the Reflexionen it matches, and
  labelled "inferred from the matches".
- *Witnesses.* The section-level parallels in the transcripts, from the content comparison in
  [../jasche-cross-reference.html](../jasche-cross-reference.html).
- *Flags.* Conditions the page computes, worded as observations and never as verdicts.

**Two rules that follow:**

- Dates are taken from Adickes' years, never from the order of his letters: θ is "the 1780s",
  though it falls between η (1764–68) and ι (c. 1766–68).
- An early source is not evidence of early doctrine. Kant may still have endorsed an old note
  in 1785; that is why the witnesses and the flags sit beside the Reflexionen.
- Counts are of distinct Reflexionen as well as sentences: one long note of the 1790s
  (R 2793) supplies over twenty sentences of Einleitung IX.

## Behaviour

*Never renumber. Strike a dropped item through and say why.*

**Reader (left)**

1. **(in the mockup)** The left column shows the whole Jäsche text, with AA 9 page numbers in the
   margin and page breaks inside paragraphs marked `‹N›`.
2. **(in the mockup)** A contents tree beside the text lists the parts, sections and §§; clicking an
   entry scrolls the text to it, and the entry for the section and § in view is highlighted.
3. **(in the mockup)** A search box finds a term in Jäsche, with a hit count and previous/next; a
   *spelling-tolerant* option lets one printed spelling find the others.
4. **(in the mockup)** A *Source marks* switch above the text marks every sentence that matches a
   Reflexion. The colour is the period of the matched note (before 1770 · 1770s · 1780s ·
   1790s); a solid underline is near-verbatim, a dashed one close. A small `R 3036` after the
   sentence names the note.
5. **(in the mockup)** Clicking a marked sentence opens it in the **Sources** tab.

**Panel (right): four tabs**

6. **(in the mockup)** **Overview.** A dating strip of the whole book: one column per AA 9 page, its
   height the number of matched sentences on that page, stacked by period. Section boundaries
   are marked above it. Clicking a column scrolls the text to that page. Below it, the totals
   by period, in sentences and in distinct Reflexionen.
7. **(in the mockup)** **Sources.** Follows the § in view (or the sentence clicked). It shows:
   - a. the Meier §§ the passage rests on, from the AA concordance (attested) or from the
     matches (inferred), with the AA's topic heading;
   - b. a timeline, 1750–1805, of the Reflexionen filed under those §§, each placed by Adickes'
     years, the ones Jäsche used filled in its period's colour;
   - c. each matched sentence beside its Reflexion, Jäsche's words that are not in the note
     marked, with the phase expression verbatim, its years, and AA 16 page.
8. **(in the mockup)** **Witnesses.** For the § in view, the passages of Blomberg, the Wiener Logik
   and Busolt that deal with the same matter, each with its date, strength and the shared
   concepts, so that one can see whether the doctrine was still being taught in the 1780s.
9. **(in the mockup)** **Flags.** A list across the book of §§ and sections that meet a condition,
   each clickable:
   - *early only* — every Reflexion matched is first dated before 1770;
   - *mixed* — the notes matched in one § are first dated more than fifteen years apart;
   - *early, no late witness* — early only, and no good match in the Wiener Logik or Busolt.
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

## Open questions

*The mockup's design notes add four smaller ones: whether search should also cover the
Reflexionen; whether Witnesses needs a tab of its own or a box under Sources; whether the
timeline should draw a note with several possible phases as a bar; and whether the dating
strip should have a column per page or per §.*

1. **Unit of dating.** Sentence-level marks with §-level flags (the prototype), or §-level only?
2. **Notes with several possible phases.** Colour by Adickes' first-listed phase and show the
   span (the prototype), or colour by the earliest, or the latest?
3. **Period boundaries.** Before 1770 · 1770s · 1780s · 1790s, or a boundary at 1781 (the first
   *Critique*), or Adickes' own groupings?
4. **Meier's text.** Extract the *Auszug* to `data/` (the data owners' decision), or link to the
   Meier reader instead?
5. **Thresholds.** Near-verbatim at 90% and close at 70% come from the pilot; they should be
   checked by hand on Einleitung IX and on the §§ on syllogisms before the tool is relied on.
6. **The vocabulary layer (item 12).** Wanted, or left out as too weak to help?
7. **Existing scholarship.** Boswell's article on the Logik's textual authenticity (1988) and
   Hinske's Kant-Index concordances address this question. The tool should complement them;
   both should be read before item 7 is finalised.
