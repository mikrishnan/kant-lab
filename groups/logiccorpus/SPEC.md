# Logic Corpus

*The spec is the source of truth for this tool. Claude builds what it says; reviewers
check the tool against it. When the tool's behaviour changes, this file changes in the
same pull request.*

## Question

From the group's issue ([#17](https://github.com/mikrishnan/kant-lab/issues/17)): "We will iterate on this tool, it will be more efficiently studying the Kantian logical tradition."

First iteration: the three transcripts of Kant's logic lectures in AA XXIV — Blomberg (ca. 1771), Busolt (ca. 1789/90) and the Wiener Logik (1780ff.) — read side by side. The text is on the left, one tab per lecture. On the right a panel searches a term across all three and then looks at the corpus through three lenses: **examples** (what the lecturer illustrates with, sorted by field), **syllogism types** (where each kind of inference is taught), and **parallel passages** (the same teaching, wording or example turning up in more than one lecture). A reader can see at once whether Blomberg, Busolt and the Wiener Logik say the same thing about a dilemma, a definition or the inhabitants of the moon, which the printed volume, with the three lectures hundreds of pages apart, does not make easy.

## Sources

- *Logik Blomberg*, AA 24:7–301; *Logik Busolt*, AA 24:603–686; *Wiener Logik*, AA 24:785–940.
- From [data/](../../data/README.md), read-only: `LOGIK_BLOMBERG` (`logik-blomberg-24.js`), `LOGIK_BUSOLT` (`logik-busolt-24.js`) and `LOGIK_WIENER` (`logik-wiener-24.js`). The tool reads each work's `meta` and `sections[].blocks[]` (`id`, `kind`, `aa`, `pages`, `ms`, `text`, `joined`, and Blomberg's `para`).
- The group's own dataset, [annotations.js](annotations.js), until it is promoted to `data/`: `LC_EXAMPLE_CATS`, `LC_EXAMPLES` (30), `LC_SYLL_TYPES`, `LC_SYLLOGISMS` (63), `LC_PARALLELS` (25). Every entry anchors to a block id and a verbatim quotation from that block; the header of the file documents the shape.

## Attested vs. inferred

**Attested, and shown as the edition prints it:** the text; the AA page of each block (the number in the left margin) and every page break inside it (`‹N›`); the manuscript's own pagination (`[N]`); each section's title, manuscript heading and provenance line; Blomberg's § headings keyed to Meier (`§ 249`); every quotation in the right panel, which is a verbatim stretch of the text; and a hit, which is displayed in the spelling the text prints.

**Inferred, and marked as such:**

- *Paragraph joins.* Where the extractor joined a paragraph on its own judgement rather than on the transcription's `|`, the paragraph ends in `‡` (hover for the reason), as the data file's `joined: ["inferred"]` requires.
- *Categories of examples, syllogism types, moods, glosses and parallels* are the group's reading, not the edition's. The panel says so beneath every tab; a gloss is labelled "Illustrates", a mood "Mood · group's reading", a parallel "group's reading".
- *Whether a passage names its own type.* Each syllogism entry is tagged **named in the text** (the passage itself uses the term: `Figura II`, `modus tollens`, `Dilemma`) or **filed by the group** (the passage does not name it).
- *Spelling-tolerant search* widens what is found (`Schluß` also finds `Schlüsse`, `Logik` finds `Logic`, `Begriff` finds `Begrif`) but never what is shown: each hit prints the text's own spelling, with the matched stretch marked. It can be switched off.
- A quotation that cannot be located in its block is shown without highlighting and says so; none does at present.

## Behaviour

1. The page has two columns. The left holds the text, with three tabs at the top, one each for Logik Blomberg, Logik Busolt and Wiener Logik, each showing its date and AA page range.
2. A selector under the tabs lists the sections of the open lecture, each with its AA page range; choosing one shows that section. Switching tab opens the first section of that lecture.
3. The text is shown as running paragraphs. Each paragraph has the AA page it starts on in the left margin; page breaks inside a paragraph show as `‹N›`; the manuscript's pagination shows as `[N]`. A paragraph joined by inference ends in `‡`.
4. In Blomberg, Meier's § headings (`§ 1`, …) appear above the paragraphs they key.
5. Three checkboxes above the text, *examples*, *syllogisms* and *parallels*, switch the marking of each layer on and off. Examples are marked by a solid underline, syllogisms by a double underline, parallels by a dotted one.
6. The right panel has a search box. Typing at least two characters searches all three lectures; the summary shows the number of hits and the count per lecture. Three checkboxes limit the search to a lecture, and a fourth, *spelling-tolerant*, widens it as described above.
7. The **Hits** tab lists the hits grouped by lecture and section, each with an AA citation and the passage around it, the matched stretch marked. Clicking a hit opens its section, scrolls to the paragraph and outlines that hit. Only the first 120 are listed; *Show more* lists further ones.
8. Hits are also marked in the text, and the section selector shows the number of hits next to each section.
9. With no search, the Hits tab offers a few suggested terms; clicking one runs it.
10. The **Examples** tab lists 30 examples in eight categories — mathematics and geometry; genus, species and kinds; school-logic cases; natural philosophy; theology and religion; ethics and conduct; poetry, art and aesthetics; everyday life. Chips filter by category and show the count in each. Each card gives the lecture, the AA page, the quotation and what it illustrates.
11. The **Syllogisms** tab lists 63 passages in nine types — immediate inference; categorical syllogism; hypothetical; disjunctive; dilemma; enthymeme; induction and analogy; polysyllogism; fallacies. Chips filter by type. Each card gives the lecture, the AA page, the specific kind, whether the passage names it, the quotation and, for the figures of Busolt, the mood as the group reads it.
12. The **Parallels** tab lists 25 topics. Each shows two to five passages from two or three lectures, each with its lecture, AA page and quotation, a label saying whether it is the same doctrine, the same wording or a recurring example, and a note.
13. Clicking a quotation in any card opens its transcript at that paragraph and flashes the passage.
14. Clicking a marked passage in the text opens its card in the right panel, on the right tab, and flashes it.
15. The search term also filters the Examples, Syllogisms and Parallels tabs, and each tab's count shows how many of its entries match. Clearing the box restores them.
16. The address `#<block id>` (for example `#wiener-s11-025`) opens that paragraph; clicking a paragraph's margin number puts its id in the address.
17. The page opens from a `file://` URL and loads all three lectures without a server.

## Out of scope

- Editing or correcting the text. It is the generated data in `data/` and is changed through the extractor, not here.
- Marking examples, types or parallels automatically. All three layers are curated; the tool does not detect them.
- The Meier Auszug, the Reflexionen and Baumgarten. Other tools read those; this one reads only the three lectures.
- Lemmatisation. The spelling-tolerant search folds spelling variants only, not inflection.
- Saving a search, a selection or an annotation. Nothing persists past a reload.

## Open questions

- **Categories of examples.** The eight categories sort by the field the example is drawn from. The group may prefer to sort by what the example does (illustrating a rule, refuting an error, showing a fault) or to allow several.
- **Coverage.** The 30 examples, 63 passages and 25 parallels are a first selection, not a census; the Busolt and Blomberg treatments of inference are covered closely, the Wiener Logik's compressed ones less so. Where should the group keep adding, and should entries move to `data/` when they are settled?
- **Moods.** Moods are given for five syllogisms only: Busolt's three examples for the second to fourth figures and two first-figure cases where the premises fix it. Whether to give a mood for every syllogism the lectures state is for the group to decide.
- **Kinds of parallel.** Parallels are filed as same doctrine, same wording or recurring example. Whether to add a stricter class for passages that depend on one another, or to say which lecture is the likelier source, is open.
- **Data README.** `data/README.md` lists which tools read each transcript. This tool should be added to the *Read by* cell of the three Logik files; that file belongs to the owners of `data/` and is changed in a separate pull request.
