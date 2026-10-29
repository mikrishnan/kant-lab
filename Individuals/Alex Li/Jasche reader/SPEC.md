# Jäsche reader — a provenance reader for the Jäsche *Logik*

*The spec is the source of truth for this tool. When the tool's behaviour changes, this
file changes in the same pull request.*

**Status:** revision 3 built. [index.html](index.html) is the tool, running on the data in the
repository. [mockup.html](mockup.html) is the static preview revision 3 was built from (revision 2,
which the first version was built from, is in the history of pull request 44). Behaviour items
marked **(built)** work in index.html, and **(rev. 3)** marks what revision 3 added or changed,
all of it built; items without either mark are planned.

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

### Other sources: what was found for revision 3

**The scholarship.** Boswell, *Quellengeschichtliche Untersuchungen zum Kantischen
Logikhandbuch* (Frankfurt a. M.: Lang, 1991), is reported in the secondary literature as finding
that Jäsche switched between Kant's notes and student transcripts (Nachschriften), sometimes
within one paragraph, in roughly equal shares. Naragon's catalogue of the lecture notes calls the
lost transcript "an-Jäsche". He places it in one family, sharing a source of the late 1770s or
early 1780s, with an-Pölitz, Hechsel, Hoffmann and the Wiener Logik. Neither has been read here
at first hand. Both should be, with Hinske, "Die Jäsche-Logik und ihr besonderes Schicksal im
Rahmen der Akademie-Ausgabe", *Kant-Studien* 91 (2000).

**What the data here shows.** Einleitung I–V (AA 9:11–39: the concept of logic and of
philosophy, the history of philosophy, cognition in general) owes almost nothing to the
Reflexionen: 11 of its 386 sentences match one at ≥ 50%, none at ≥ 70%. Against each transcript
separately, with a looser test (≥ 60% of a sentence's content words within one passage of twice
its length), the Wiener Logik has clearly more parallels than the others:

| | Wiener Logik (AA 24:785–940) | Blomberg (24:7–301) | Busolt (24:603–686) |
| --- | --- | --- | --- |
| Einleitung, sentences with a parallel | 58 | 18 | 21 |
| of which in Einleitung I–V | 28 | 9 | 10 |
| whole book | 83 | 34 | 36 |
| rank correlation with Jäsche's order, over the Einleitung | 0.78 | 0.21 | 0.44 |

Blomberg is about twice the Wiener Logik's length, so this is not an effect of size. A few
parallels are word for word: "Die Hauptquellen der Vorurtheile sind vorzüglich Nachahmung,
Gewohnheit und Neigung" (AA 24:865; Jäsche AA 9:76), "Aristoteles kann als der Vater der Logik
angesehen werden" (24:796; 9:20). And the order matters: Wiener's parallels come in Jäsche's own
sequence, through the history of philosophy, which is not in Meier. That fits Jäsche working from
a transcript of the Wiener family. It does not fit the Wiener Logik itself being his source:
83 parallels in 1,600 sentences is too few. Those sentences were read by eye only as a sample of
about twenty, nearly all genuine; the loose test catches paraphrase, and short sentences can
reach it by chance.

**Texts that would settle it**, in order of value:

1. *Logik Pölitz* (AA 24:497–602) and *Logik Hechsel* (ed. Pinder, *Logik-Vorlesung:
   Unveröffentlichte Nachschriften*, 1998, which also has the *Warschauer Logik*): the Wiener
   Logik's closest relatives.
2. *Logik Dohna-Wundlacken* (AA 24:687–784, early 1790s) and *Logik Philippi* (AA 24:303–496,
   1772): the latest and an early control.
3. Kant's published works where Jäsche's Einleitung has the same matter, as candidates only, not
   yet checked: the *Critique of Pure Reason* (AA III–IV: the Architectonic for the
   Weltbegriff and Schulbegriff of philosophy, the Canon for the question "Was kann ich
   wissen?", the Discipline for definitions), the *Anthropologie* (AA VII) and the *Critique of Judgement*
   § 40 (AA V) for the three maxims of thinking, and *Die falsche Spitzfindigkeit der vier
   syllogistischen Figuren* (1762, AA II:45–61) for §§ 66–75. The last would matter
   particularly, being pre-critical.

Plain-text or RTF copies, transcribed as the existing `Textfiles/` are, are what the comparison
needs. Its scripts are in the session that produced this revision and can be added to the
folder.

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
- *Transcript matches* (item 16). Sentence-level parallels in the transcripts,
  labelled as parallels and never as dated sources. They replace the section-level transcript
  parallels of the first version, which are removed (item 8).
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

1. **(built)** The left column shows the whole Jäsche text, with AA 9 page numbers in
   the margin and page breaks inside paragraphs marked `‹N›`.
2. **(built)** A contents tree beside the text lists the parts, sections and §§; clicking
   an entry scrolls the text to it, and the entry for the section and § in view is highlighted.
   - a. **(rev. 3)** A *Titles · Dating* switch at the head of the contents. In Dating view every
     part, section and § has a bar beneath its title, with no figures beside it. The bar is the
     entry's words, coloured by dating class where they are traced to a Reflexion at ≥ 70%.
     Hovering a bar opens a box giving, for each dating class present, the share of the entry's
     words taken from notes of that class and the number of sentences, then the share not
     traced, and the entry's sentences and distinct Reflexionen. Clicking still goes to the
     entry. This replaces the dating strip of item 6a.
3. **(built)** A search box finds a term in Jäsche, with a hit count and previous/next; a
   *spelling-tolerant* option lets one printed spelling find the others.
4. **(built)** An **X-Ray mode** switch above the text. Off, Jäsche reads as a clean text.
   On, every sentence traced to a Reflexion is tinted in the colour of its dating class (see
   Colour), with a solid underline for near-verbatim and a dashed one for close, and a small
   `R 3036` after it names the note.
5. **(built)** In X-Ray mode, clicking a marked sentence opens it in the **Sources** tab.
   **(rev. 3)** It no longer pins the tab: Sources scrolls to that sentence's pair and highlights
   it, and goes on following the text.

**Panel (right): three tabs** (four in the first version)

6. **(built)** **Overview.**
   - ~~a. A dating strip of the whole book, one column per AA 9 page.~~ (dropped in rev. 3: hard
     to read at panel width; replaced by the bars in the contents, item 2a)
   - b. The same as shares: a pie of the traced sentences by dating class, labelled with
     percentages and counts. **(rev. 3)** 120 px across, its figures in a table beside it rather
     than around it.
   - c. A bar of how much of Jäsche is traced at all, by strength: near-verbatim, close,
     reworked (50–70%, counted here but not marked in the text), not traced (share of words).
   - d. The totals by dating class, in sentences and in distinct Reflexionen. **(rev. 3)** Merged
     into the pie's table, with the share.
   - e. **(rev. 3)** A table by part (Einleitung I–V, Einleitung VI–X with the Anhang,
     Elementarlehre, Methodenlehre): words, and the share traced at ≥ 70% and ≥ 50%.
7. **(built)** **Sources.** Follows the § in view (or the sentence clicked). **(rev. 3)** It always
   follows the text, and a band at its top says where it is ("Following the text · now at § 21").
   Pinning is a separate, visible *Hold here* button. Once pressed the band reads "Held at § 21 ·
   release". The traced sentences (c) come first, then the timeline (b), with the Meier §§ (a)
   in a line beneath it. It shows:
   - a. the Meier §§ the passage rests on, from the AA concordance (attested) or from the
     matches (inferred), with the AA's topic heading;
   - b. a timeline, 1750–1805, of the Reflexionen filed under those §§, each placed by Adickes'
     years, the ones Jäsche used filled in their class's colour (hatched if mixed), with a line
     at 1781;
   - c. each matched sentence beside its Reflexion, Jäsche's words that are not in the note
     marked, with the phase expression verbatim, its years, and AA 16 page.
8. ~~**Transcript parallels** (formerly "Witnesses"). For the § in view, the passages of
   Blomberg, the Wiener Logik and Busolt that deal with the same matter, oldest first.~~
   (dropped in rev. 3: it matched whole sections by shared vocabulary and could not point to a
   passage; see item 16)
9. **(built)** **Flags.** A list across the book of §§ and sections that meet a condition,
   each clickable:
   - *early only* — every Reflexion matched is in the "before 1770" class;
   - *sources from three or more decades* — the notes matched in one § or section fall in three
     or more dating classes;
   - ~~*early, no late transcript parallel* — early only, and no good parallel in the Wiener
     Logik or Busolt.~~ (dropped in rev. 3 with item 8; it can return on item 16's matches)
10. ~~A *Design notes* switch in the header.~~ (dropped: the numbered design notes live in
    mockup.html, not in the tool)
11. Meier's text for the §§ in 7a, beside the Reflexionen. Needs Meier's *Auszug* in `data/`.
12. A doctrinal-vocabulary layer marking critical-era terms (transcendental, synthetic *a
    priori*, the categories, reflecting and determining judgement, the postulates). An aid only.
13. A Jäsche-internal layer: where the same doctrine is treated twice (Jäsche moved material
    from the Elementarlehre into the Einleitung, as his Vorrede says), the two places side by
    side.

**Throughout (rev. 3)**

14. Each side opens and closes from its own tab button, with no separate menu. On the left, a
    *Contents* tab: clicking it folds the contents to a slim rail, clicking it again brings them
    back. On the right, clicking the tab already open (marked ×) folds the panel to a rail of
    the three tab names; clicking a name opens the panel at that tab. With both folded the text
    takes the full width. The layout is remembered between visits (see item 18).
15. *Go to* is a small box, not a long drop-down. Typing a § number, an AA 9 page (`57` or
    `9:57`) or words of a heading offers the matches in a list of six rows at most; Enter or a
    click goes to the one chosen.
16. **Transcript matches**, a tick box in the Sources tab ("also show parallels in the student
    transcripts"), off by default. Sources then adds grey cards for the sentences of the § in
    view that have a close parallel in a transcript: ≥ 60% of the sentence's words in order, or
    ≥ 70% of its content words (at least four) within one passage twice its length. A card gives the transcript, its date and AA 24 page, both texts,
    the strength, and the words "a parallel, not one of Jäsche's sources". The matching is done
    sentence by sentence (words in order, or most of the content words within one passage),
    never section by section.
17. All charts and tables share one type scale: labels in 10 px Cinzel, figures in 13 px EB
    Garamond, at the panel's full width.
18. The page remembers, in the browser, which sides are open, the tab, X-Ray mode, the contents
    view and the transcript tick box, and reopens as it was left. Nothing else is stored, and the
    *Hold here* position is not kept. This is the one exception to the repository's
    no-persistence rule, at the owner's request. A browser that refuses storage (some do for
    pages opened from a file) simply starts with the defaults.

## Out of scope

- Dating Jäsche's sentences, or deciding whether a doctrine is critical. The tool shows sources
  and their dates; the judgement is the reader's.
- Correcting Adickes' datings. They are shown as he gives them.
- Kant's papers outside AA XVI.

## Decisions made

- **Unit:** individual sentences are marked; §-level views are built from them.
- **Periods:** by decade — before 1770, 1770s, 1780s, 1790s.
- **Mixed dating:** a class and colour of its own (hatched warm grey).
- ~~**Transcript parallels:** a tab of its own, under that name.~~ Removed in rev. 3 (item 8).
- **X-Ray mode:** the marks in the text are a switch.
- **Overview:** the strip is shown again as a pie. In rev. 3 the strip moves into the contents
  as bars (item 2a), and the pie shrinks.
- **Sources:** follows the text always; pinning only by an explicit button (rev. 3).
- **Every side can be folded** from its own tab button, without a separate menu (rev. 3, item 14).

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
7. **The untraced 78%.** Partly answered: Einleitung I–V points to a transcript of the Wiener
   family (see "Other sources"). Next: the texts listed there, and Boswell (1988, 1991) and
   Hinske (2000) read at first hand.
8. *From the mockup's design notes:* should search also cover the Reflexionen? Should the
   timeline draw a mixed note's span as a bar? Should the strip have a column per page or per §?
9. *From the revision 3 mockup:* ~~keep *Hold here*?~~ Kept. ~~Remember the layout?~~ Yes (item
   18). ~~Build item 16?~~ Built. Still open: should X-Ray mark the sentences with a transcript
   parallel too, say with a grey dotted underline? And are bars per entry (item 2a) enough, or
   is a per-page strip wanted back somewhere?
