# Logic Corpus

*The spec is the source of truth for this tool. Claude builds what it says; reviewers
check the tool against it. When the tool's behaviour changes, this file changes in the
same pull request.*

*This spec belongs to [logic-corpus.html](logic-corpus.html), which began for the Logic Corpus working group and now lives in this folder. It is written in the group's spec format, so that it can be moved or copied as it stands.*

## Question

From the group's issue ([#17](https://github.com/mikrishnan/kant-lab/issues/17)): "We will iterate on this tool, it will be more efficiently studying the Kantian logical tradition."

The tool is a transcript reader with a panel of searches beside it. On the left, Kant's logic lectures are read as the primary texts, in the manner of the Baumgarten and Meier readers. On the right, a tab for each way of searching them. It begins with three lectures and three searches: *where is this word or phrase used, whatever the spelling*; *how do the three lectures use this concept, side by side*; and *where does each type of judgment (hypothetical, disjunctive, universal negative, apodictic …) appear, with the Kantian description of it and the examples given*. More lectures and more searches are to follow; see Open questions.

## Sources

Kant's logic lecture transcripts in AA XXIV, as `data/` carries them (see [data/README.md](../../data/README.md)); the page loads all three and defines nothing of its own:

| File | Global | Lecture |
| --- | --- | --- |
| [logik-blomberg-24.js](../../data/logik-blomberg-24.js) | `LOGIK_BLOMBERG` | *Logik Blomberg*, ca. 1771 (AA 24:7–301), keyed to Meier's §§ |
| [logik-busolt-24.js](../../data/logik-busolt-24.js) | `LOGIK_BUSOLT` | *Logik Busolt*, ca. 1789/90 (AA 24:603–686) |
| [logik-wiener-24.js](../../data/logik-wiener-24.js) | `LOGIK_WIENER` | The *Wiener Logik*, 1780ff. (AA 24:785–940) |

They are machine-extracted from the transcriptions in `Textfiles/` and are not edited here; a correction to the text belongs in the extractor, `scripts/parse_logik.py`.

## Attested vs. inferred

**Attested, and shown as the edition has it:** the text, with its spelling and punctuation; the AA page every paragraph starts on and every page it crosses; the manuscript's own page numbers; the editorial brackets (`[ Textlücke: AA: Die ]`, `< bricht ab >`); the section titles and headings; Meier's § headings in Blomberg; the AA's cross-references.

**Inferred, and marked:**

- A paragraph the extractor joined on its own judgement (the line broke off mid-sentence and the next began in lower case) has a dashed rule at its left. One joined on the transcription's own `|` mark does not, since the join is attested.
- A hit found only by the spelling rules below is marked ≈, and the text is always shown as printed. The *Forms found* list shows the spellings behind a count.
- A section the transcription gives no title (the Titelei of Busolt and the Wiener Logik) is listed as `[Titelei]`, in brackets, since that name is this page's and not the edition's.
- In *Types of judgment*, a passage is attributed to a type only because it uses a word the page lists for it, in the table of judgments the page carries. The page does not decide whether a passage defines the type, gives an example of it, or only mentions it. Which sentence a card shows, and which words count as naming a type, are the page's choices, and the card says so.

Everything else in the panel is computed: counts, rates per 10,000 words, and the bars showing where in a lecture a term falls.

## Behaviour

*Items are never renumbered. When one is dropped, strike it through and say why —
`~~3. …~~ (dropped: superseded by 7)` — so that a pull request saying "implements item 4"
keeps its meaning.*

**The reader**

1. On opening, the left-hand side shows the first titled section of the *Logik Blomberg*: its title, its AA page range, the manuscript's own heading where it differs, and the provenance line, above the paragraphs.
2. Three buttons in the top bar, Blomberg, Busolt and Wiener, each with its date, switch lecture. The pressed one is the lecture in view, and switching opens its first titled section.
3. The section list in the top bar holds every section of the lecture in view, numbered, with its title and AA page range. Choosing one opens it. The ‹ and › buttons step to the previous and next section and are disabled at the first and last.
4. The text is shown as running paragraphs. The margin gives the AA page, as `AA 19`, beside the first paragraph and beside each paragraph that starts on a new page. Where an AA page begins inside a paragraph, `‖ 19` stands in the text at that point.
5. The manuscript's own page numbers stand in the text as `[ms 8]`, where the AA prints them. Editorial brackets and remarks (`[ … ]`, `< … >`) appear in faded type, as printed.
6. In the Blomberg the margin also gives Meier's § as the transcription heads it, as `§: 41 et 42`, beside the first paragraph under each new heading. Busolt and the Wiener Logik give none.
7. A paragraph joined on the extractor's judgement has a dashed rule at its left, and says so when hovered; a paragraph joined on the transcription's own mark has none.
8. An AA cross-reference between paragraphs (`Vgl. Logik Philippi: xxviv:482.`) is set in italics. A horizontal rule the transcription sets is a line.

**Word / phrase**

9. Typing two or more letters lists, after a short pause, every hit in the three lectures. The first line gives the number of hits in all and in each lecture. Typing less shows a prompt, and typing nothing shows a hint.
10. Hits are grouped under a heading for each lecture, in reading order. Each shows the lecture, the AA page the hit falls on, and Meier's § where the lecture has one, above about 70 characters of text either side with the match highlighted.
11. Clicking a hit opens its lecture and section in the reader, scrolls to the paragraph, flashes it briefly, and marks that hit more darkly than the others.
12. Every hit in the section in view is highlighted in the reader. Running a search, or changing its options, refreshes the highlights without moving the reader from where it was.
13. "Match across spellings" is on by default. It ignores case; reads ß as ss and ä, ö, ü as ae, oe, ue; drops other accents; reads y as i; reads th as t; treats a doubled letter as one; and treats punctuation as a single space. So *Urteil* finds *Urtheil*, *Urtheile* and *urtheilen*; *Begriff* finds *Begrif* and *Begriffe*; *seyn* finds *sein*.
14. Unticking it turns the spelling rules off: only case and punctuation are then ignored, and *Urteil* finds only the two places where the lecture prints *Urteil* itself, in the Busolt.
15. A phrase of several words matches as a phrase, across punctuation: *a priori* finds *a priori*.
16. The drop-down chooses where in a word the match may fall. *Word beginning* is the default: *Urteil* finds *Urtheilskraft* but not *Vorurtheil*. *Anywhere in a word* also finds *Vorurtheil*. *Whole word* requires both ends to fall on word boundaries.
17. Three tick boxes, one for each lecture, restrict the search to the lectures ticked.
18. A hit whose printed spelling differs from what was typed, beyond case and punctuation, is marked ≈. The hint above the lists says how many there are.
19. A lecture's list shows its first 60 hits, with a button for 60 more. The counts at the head are for all the hits, not the ones shown.

**Concept occurrences**

20. Typing any term, of two or more letters, gives a table with a row for each lecture: its occurrences of the term, the rate per 10,000 words, the number of its sections that contain the term out of its total, and the lecture's length in words. The same options as in item 16 and item 13 apply, without the tick boxes for the lectures.
21. *Forms found* lists each whole word in which the term occurred, as printed, with its count, most frequent first. Where a form occurs in more than one lecture, the counts for each follow, as Bl, Bu, Wi. Past 24 forms the list stops and says how many rarer ones there are.
22. *Where in each lecture* shows a strip for each lecture, a bar for each section. A bar's width is its section's length in words, and its height is the density of the term there, on one scale across the three strips, so the strips can be compared. A section without the term shows as a flat line. Clicking a bar opens the section in the reader, at its first occurrence if it has one.
23. *First passages* gives the first three occurrences in each lecture, in the form of item 10, or says there are none. Clicking one opens it in the reader as in item 11.
24. "List all … in Word / phrase search" switches to that tab and runs the same term there, with the same options, in all three lectures.
25. The two tabs keep their own terms and options. The reader highlights the hits of whichever tab is open.

26. A third tab, "Types of judgment", offers twelve types under the four heads of Kant's table, in German with an English gloss: *Quantität* (allgemeine, besondere, einzelne), *Qualität* (bejahende, verneinende, unendliche), *Relation* (kategorische, hypothetische, disjunctive), *Modalität* (problematische, assertorische, apodiktische). Each is a button with the number of passages that name it.
27. With no type chosen, a table gives, for each type, the number of passages in the Blomberg, the Busolt and the Wiener, and in all three. Clicking a row chooses that type, as clicking its button does.
28. Choosing one type lists, in reading order and grouped by lecture, every passage in the three lectures that uses a word naming it, German or Latin and in any of its spellings: *hypothetische* finds *Hypothetisches*, *Hypotheticum* and *hypothetischen*; *apodiktische* finds *apodictisch*; *assertorische* finds *Aßertorisch*. The first line gives the number of passages in all and in each lecture.
29. A passage is a card. Its first line gives the lecture, the AA page, Meier's § where the lecture has one, and the types it names; the section's title follows. Below is the sentence in which the word stands, with the whole word highlighted and editorial brackets faded. Neighbouring sentences that name the same type are one card.
30. A sentence after it that opens with `<` or `[` is part of the card, where the transcription sets an example in brackets. So is a following paragraph that opens that way, shown indented beneath it and labelled "next paragraph, set apart in brackets".
31. "Show the whole paragraph" opens the paragraph the card is from, with every use of the chosen types marked, and "Hide the paragraph" closes it. "Open in the reader" opens the lecture and section at that paragraph. Every use of the chosen types in the section in view is highlighted in the reader.
32. Choosing several types lists the passages in which all of them are named together: *verneinende* with *allgemeine* finds where a negative and a universal are named in one sentence. A drop-down changes "in the same sentence" (the default) to "in the same paragraph", and the card then runs from the first sentence naming one to the last naming another.
33. A tick box, "Only paragraphs that also speak of a judgment (Urtheil, judicium, Satz)", is on by default. With it on, a paragraph counts only if it contains one of those words, which leaves out everyday uses of *allgemein* and *besondere*. With it off, every paragraph counts. The counts on the buttons and in the table follow it.
34. Three tick boxes restrict the passages to the lectures ticked. "Clear the choice" returns to the table of item 27.
35. A card that would show more than 1,400 characters stops there with "…"; the rest is in the paragraph or the reader.

## Out of scope

- Correcting the transcription. The data are generated; a correction belongs in the extractor.
- Finding the other inflected forms of a word, as a lemmatiser would. *Schluß* finds *Schluß* and *Schlußes*, but not the plural *Schlüße* or the verb *schließen*, which the spelling rules do not equate with it.
- Deciding what a passage does: whether it defines a type of judgment, gives an example of it, or only mentions it. Nor does the page recognise a compound such as "negative universal" as one type; it finds where the two words are named together.
- Searching the AA's cross-references and horizontal rules. Only the lectures' prose paragraphs are searched and counted.
- Texts outside the three lectures: Meier, Baumgarten and the Reflexionen have their own readers.
- Saving a search or a place in a lecture. As in the other tools, the page keeps nothing when it is reloaded.

## Open questions

1. **Which searches next?** Three tabs exist. The group has not yet said which others it wants (a § or AA page lookup; a section browser; a search restricted to a § range of Meier; a comparison of two terms).
2. **More lectures.** AA XXIV also holds the Philippi, Pölitz and Dohna-Wundlacken Logik, and AA IX the Jäsche *Logik*. Which does the group want, and in what order? Each needs its own extraction.
3. **The spelling rules.** They do not equate *c*, *k* and *z* (*Concept* and *Konzept*), *ph* and *f*, *u* and *v*, or *ae* with *ä* once it is printed as two letters, because folding these in would also blur the Latin in the lectures (*que*, *quae*). Which, if any, should be added, and should the Latin be searched by its own rules?
4. **Reading Blomberg against Meier.** Blomberg is keyed to Meier's §§. Should a § in the margin link to that § in the [Meier reader](../../meier-reader/meier-reading-guide.html)?
5. **Concept occurrences.** At present it counts occurrences of a typed term. Should the group build a list of the logical terms it cares about (Begriff, Urteil, Schluß, Merkmal, Umfang, Inhalt) to choose from, and should related terms be gathered under one concept?
6. **Hits in inferred paragraphs.** A hit in a paragraph the extractor joined by inference is not marked as such in the hit list, only when the paragraph is opened. Should it be?
7. **Citing a passage.** Each hit shows its AA page. Should it also give a link that reopens the page at that paragraph?
8. **The judgment words.** The table of twelve types and the words listed for each are this page's, and are in `JUDGMENT_TYPES` at the top of the script. Are they the right ones? *allgemein* and *besondere* are everyday words; the other kinds of judgment (analytic and synthetic, exponible, restrictive, the *Erfahrungsurtheile*) are not yet in the table.
9. **The model passage.** A passage of the form "2. hypothetische †, sie enthalten das Verhältnis des Grundes zur Folge. <Wenn die Seele nicht zusammengesetzt, so usw.>", followed by a paragraph of examples in `[ ]`, is not in the three lectures now loaded; it must be from a transcript the corpus does not yet have. The page handles the `<` and `[` convention (item 30) but has never met it. Which transcript is it from, and what do `†`, `< >` and `[ ]` mean in it?
10. **Descriptions and examples.** Should a list heading ("1. categorische, 2. hypothetische …") or a sentence that defines a type be told apart from a mere mention, and shown differently?
11. **Not checked by a person.** The reader and both tabs were exercised in a headless browser, not clicked through by a person. The page was not tried on a narrow screen or a touch screen.
