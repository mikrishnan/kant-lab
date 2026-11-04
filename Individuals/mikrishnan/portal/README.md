# The Logic Portal

A research instrument for the Kant Lab seminar: put a question to the whole logic corpus
the moment it comes up in class, and follow the answer from lecture to textbook to Kant's
notes to Jäsche and back.

Open [index.html](index.html). It loads every text in [catalogue.js](catalogue.js) and every
layer of the seminar's work beside them, indexes every word (about a second and a half),
and then answers at once.

## Finding your way

Four places, along the top (pressing **Read** again while reading goes back to the list of texts):
- **Search** opens on one question box, with every text there to open and read in full.
- **Read** lists the corpus. Open any text to read it through: its contents, a box to go
  to a §, an AA page or a Reflexion, and **Find in this text**, which marks every place a word
  or words stand in that text, with ‹ › (or Enter and Shift-Enter) to go from one to the next.
  Its spellings count as one word, as in the search (*Urteil* finds *Urtheil*), and a * ends a
  word any way (*urth\**); a part of a word finds its letters as typed. Click any paragraph and what hangs on it opens beside the
  text. In the lecture notes, whose paragraphs run from a line to several pages, a long
  paragraph is shown in pieces of about ten lines, broken at the ends of sentences (its English
  too), and a run of one-line paragraphs is closed up into one block. This is only how they are
  shown: the paragraphs, and every link to them, are as the transcripts have them. Kant's
  published works, Jäsche's Logik and the Reflexionen are shown as they are.
- **Meier and Baumgarten, and Kant's notes on either,** open as the textbook with Kant's notes
  beside it, the notes following the § at the top as you scroll. This is everything the Meier
  and Baumgarten Readers did, inside the portal:
  - the outline (Baumgarten's with its filter);
  - clickable cross-references, find in the text, and the go-to box;
  - the AA's blocks of Reflexionen, with earlier and later §§ (Meier), or the § in view with
    its notes in the reader's order, and the 708 notes that belong to no § (Baumgarten);
  - note cards with phase chips coloured by decade, each opening Adickes' note;
  - lemma and Satz chips that tint the words in the § the note is on, page-position glyphs,
    and interpolated and vacat notes;
  - the decade filter, and search within the notes;
  - the Tradition tab (Meier);
  - Baumgarten's German glosses, misprint notes, 1757 pages, the "Handschriftliche
    Bemerkungen Kants" blocks and the Synopsis;
  - a divider to drag between text and notes.

  The old readers are still up, until Sophia and Maria agree to retire them.
- **Explore** gathers the seminar's starting points: the doctrines classified passage by
  passage, the parallel passages, and the three lexicons.
- **Contributors** lists who built what.

**Class sessions and investigations.** A *session* is the record of one class: the passages the
class looked at, in order, with the notes and questions it came up with. An *investigation* is
a question the class wants to look into, bundled with the passages and notes that bear on it.
It outlives the session that started it: later sessions add to it.

- **In class.** The header's **Session** button opens a small panel at the bottom right. Turn on
  **Recording**, then press **+ Session** on each passage the class examines: on a search hit,
  on a paragraph of a full text, or beside the passage open on the right. Type a note or
  question into the panel and press Enter.
- **Afterwards: Organize and save.** This opens the session page over the portal, as the
  Handouts page does. Tick items and press **+ New investigation from the ticked**, or **Add
  the ticked** to an investigation already there. *Or add to one begun earlier* continues an
  investigation from an earlier session. Each passage opens with ▸ to its whole text (and its
  English, when the English is on), or all at once with *open all*; its citation, as in the panel,
  opens it in the portal. Each investigation has a line saying what the question
  is, and can have its own Canvas discussion; ✎ gives a passage a note. **Save for the class**
  opens GitHub with the session as a file in [sessions/](sessions/), and you press *Commit
  changes*.
- **For students, inside the portal**, every passage is drawn live, with **Read it in
  context**. `…/portal/?session=<name>` is a session, numbered, with its investigations and the
  link to its Canvas discussion. `…/portal/?investigation=<name>` is an investigation, with what
  each session added to it. `…/portal/?investigate` lists every investigation, newest first.
  Under **Read** are the sessions and investigations.
- **For Canvas.** Every page, and the session page, has **Copy for Canvas**. It copies rich text
  for the forum: each passage cited, with its opening words, its note, and a link back to it in
  the portal. The portal keeps no comments, and cannot post to Canvas itself, since that would
  need a Canvas login and the site is public: paste the copy into the discussion.
- **Export to Word**, on the session page (and **Word** in the panel), downloads the session as
  a .docx: every passage whole, with its citation, its note, and its English when the English
  is on, then the investigations with their items. It needs no saving for the class.

Until it is saved, a session is kept in your own browser. The code is
[class-sessions.js](class-sessions.js).

Wherever you are, clicking an example (a search hit, a classified passage, a parallel) opens
it **in its full text** on the right, scrolled to the passage and highlighted, so you can look
through example after example in context. Its **Connections** tab beside the full text gives:
- the textbook § it is on;
- Kant's notes there;
- the other texts on the same §;
- its parallel passages, each opening beside it in **Compare**;
- what the seminar has said about it.

**Read on the left** opens that text in full for reading through. Select a few words in any
text, and a button offers to search for them everywhere.

A search's results have two tabs: **Overview**, with the phrasings and where they occur, and
**Passages**. The search options fold away under **Options**.

## What it does

- **Ask.** Type a word or phrase (`form* fals*`, `"satz des widerspruchs"`). The search
  treats the texts' many spellings as one word (*Urtheil* and *Urteil*, *Wiederspruch* and
  *Widerspruch*, *Principium* and *Prinzipium*, *Saz* and *Satz*, *iudicium* and *judicium*,
  *Subiect* and *Subject*). A word is that form of it alone, unless **All forms** is chosen
  under the box. It returns:
  - **Phrasings:** every distinct wording it found, with counts in each text;
  - **Where it occurs:** counts per text, and per 10,000 words so that long and short texts compare;
  - **Passages:** in the order of the texts, each opening on the right.

  A second box keeps only passages that also mention, or do not mention, something else.
- **All forms of a word.** **Exact form | All forms**, under the search box, says whether a word
  finds only itself or its other declensions and conjugations as well. With All forms, `satz`
  finds *Sätze*, *Sätzen* and *Satzes*, `ens` *entis* and *entia*, `ratio` *rationis*, `genus`
  *generis*. The forms are found by rule, from the word's endings, not from a dictionary: a word
  ending as Latin does (`-us`, `-um`, `-io`, `-as`, `-x` …) is taken for Latin, any other for
  German, and a German word typed with a capital for a noun. Above the results a strip lists each
  word's forms, most frequent first, with their counts, and the reader unticks any that does not
  belong; the link keeps the choice (`fm=all`, and `fx=` for the forms unticked). The rule cannot
  see a strong verb's changed vowel or an irregular form, so *geschlossen* and *est* need adding
  with `OR`; a table of forms made with a lemmatiser would replace the rule. `=Sätze` keeps a
  word to its exact form, a word with a `*` stays as typed, and so do little words (*des*, *der*,
  *et*), so that a phrase such as `"satz des widerspruchs"` finds *Satze des Widerspruchs* and no
  more. All forms is for the German and Latin: a question put to the English keeps its plurals.
- **English, German and Latin.** A question in English that finds nothing as printed is asked
  again in the German and Latin the texts use for it: `impossible` finds *impossibile* and
  *unmöglich*, and the related terms (*nihil negativum*, *ens rationis* …) are offered beside it.
  The terms come from a Latin–German–English lexicon of 1,076 terms with definitions
  (`Individuals/Jesus-La-Paz/latin-lexicon.js`); its Latin words are underlined in the texts, and
  a click on one opens its entry. The lexicon and the English of Baumgarten and of Kant's notes on
  Baumgarten are machine-made, and the page says so.
- **Follow.** Any passage opens in the right-hand pane with the textbook § it is on and how
  that is known (stated, or inferred with a measured confidence). Below that come Kant's
  notes on that §, oldest first, then the lectures and Jäsche on the same §, the tradition
  behind it, and what the seminar has said about it. Every step goes on the **route** bar
  under the header, which shows the last few steps with back and forward arrows. **Map**
  opens the whole route: one row per document, each step a mark, joined in order, so you can
  see how you have moved through the corpus. Click any mark to return to it. **Copy link**
  reproduces the exact view.
- **Go to a page of the Academy edition.** Type a citation as scholars write it, `24:892`,
  `24.892`, `AA 24:892`, `Ak. 16, 236` or `AA XVII 45`, into the search box (or the jump box
  of any text) and the portal opens the text printed on that page, where the page begins. A
  page of Kant's notes opens the textbook they are written in, with the note in view beside
  it; a note filed under no § opens on its own. A page the portal has nothing on says which
  texts end before it and begin after it. Links can do the same: `#aa=24:892`, or
  `#read=wiener&aa=892` for a page of one text. Every text shows its pages, as `AA 24:787–940`,
  in the Read list and above the text, worked out from the passages themselves.
- **How accurate a text is.** Where it has been measured, a text says so on its bar, in the Read
  list and under the citation of every passage opened on the right: *Clean text*, or for a machine
  reading (OCR) the share of words right in the whole text and on the passage's page, with a link
  to the page image. The figures and their grounds are the catalogue's `accuracy` field; see
  [../published/](../published/README.md).
- **Go to a page of the Critique.** `A 51`, `B 75`, `B xvi`, `A51/B75` or `KrV A 51` in the search
  box opens that edition at that page; in either edition's jump box, `51` is a page of that
  edition and `B 75` a page of the other. Each passage of the Critique shows its own pages and,
  where the matching found the same words, the other edition's beside them (`A 50–51 = B 74–75`).
  Pages that begin inside a passage are marked in the line, in all of Kant's published works.
- **Go through every result.** A passage opened from a search shows "‹ 3 of 22 ›" at the top
  of the right-hand pane. The arrows, or ← → and J K on the keyboard, open the next or
  previous result in the Passages list's order, and each result opened gets a tick in the list,
  so you can see what is left. A note or lecture passage with a textbook § keeps that § in a
  strip under its heading: one line, or, opened, the § in full (with its English when English
  is on). It stays open from result to result, so you can read every note beside its Meier or
  Baumgarten § without leaving the list.
- **Compare.** The **Compare** tab, beside Full text (or press **C**), keeps the passage in view
  and lists under it what shares its wording. Its textbook § comes first, then Kant's notes
  (whether the AA files them under the same § or not), the lectures and Jäsche, closest first.
  Pick one and it opens beneath, with the words the two share marked in both, darker where the
  same words stand in a row. So you can see at once whether a note takes Meier's words or
  Baumgarten's, or has its counterpart in a lecture. Name any other passage in the box to
  compare it instead: `Refl. 4086`, `16:236` or `Meier § 125`. Click a sentence to compare it
  alone; a sentence found nearly whole elsewhere carries a small ≈ tag naming where.
  The tab stays open from result to result, and in the Meier and Baumgarten reader it compares
  the § in view. All of it is found by machine: words count as shared when they have the same
  stem once the spellings are merged, leaving out Jessie's stopwords, and rare words count most
  in the order.
- **Go to a Reflexion.** Type its number, `Refl. 4086`, `R 4086` or `4086` alone, into the search
  box and the note opens on the right. The left names it, with ways on: to read it beside its §
  among the other notes there, to compare it, and to the Reflexionen before and after it by number.
  A slip such as `F4086` is offered Refl. 4086, since as words it would find only the letter. In the Meier or Baumgarten
  reader the jump box takes it too, and goes to the § the note is on, with the note picked out.
  A link can do the same, `#refl=4086`; the box on the Kant Lab landing page makes one.
- **Go to a §.** `Meier § 125`, `Baumgarten § 55` or `Jäsche § 3` in the search box opens that §
  to read (`§ 125` alone is Meier's). Without the § sign, words and numbers are searched as before.
- **English.** Press **English** on a passage to see a translation beside the German, in one
  of two styles: following the stated principles of Guyer and Wood, or of Kemp Smith. These
  are Jesus's machine translations, made for the Meier–Kant comparison; neither
  translator translated these texts, and the pane says so under every one. There is English
  for Meier, the Reflexionen on Meier, the three lectures and Jäsche, not yet for Baumgarten.
  Each text's translation loads only when it is first wanted.
- **Report a text error.** Every passage has a link, under its citation at the top of the
  right-hand pane (among the passage's actions in Connections), that opens the repository's *Text error*
  form with the passage, its citation and a link back to it already filled in. The reporter
  chooses the tool from the form's list and gives their source.
  The **English** switch in the header turns on the English for the whole portal at once: under
  every passage of the full texts, under each of Kant's notes beside Meier, and under search hits
  and classified passages, where a long passage shows roughly the stretch of English that
  matches the German shown. The German and Latin never go. A bar under the header says what the
  English is, switches between the two styles, and notes that Baumgarten and Kant's notes on
  Baumgarten have no English yet. It also announces Maria's sentence-by-sentence translation,
  which is coming to the whole portal, and links to a preview of it from Maria's branch.
  Every passage that has English also has a small **English** button of its own, which opens
  that passage's English under it and nothing else.

  With English on, a choice beside the search box, **German | English**, says which the question
  is put to. **German**, the default, is the search as it always was: it reads only the German
  and Latin, and no English ever appears among its results. **English** reads the English
  instead, across every text that has a translation, in the style shown. An English word or
  phrase, such as `judgment`, `"principle of contradiction"` or `certain*`, finds the German
  passages whose translation has it, and an English word also finds its plain plural. A hit is
  marked *found in the English*, with its English and roughly the stretch of German it
  translates. In the full text, its English is shown with the words marked. The Overview tags
  its phrasings *English*, and a link keeps the choice (`ql=en`). With English off, the choice
  is hidden and the search is German.

  **This English is a stopgap, for the seminar of 26 October 2026.** It is to be replaced by
  Maria's translation across the whole portal, which works differently: sentence by sentence,
  with a shared glossary, and with modes that let a reader try the German first. When that
  happens, remove the header switch, the bar, the per-passage buttons and `enLine`, rather than
  running both side by side. Until then, Baumgarten's *Metaphysica* and Kant's notes on it have
  no English at all.
- **Parallel passages.** Every passage lists the passages of other texts nearest it in wording:
  the words they share, weighted by how rare each is, leaving out Jessie's stopwords, as Jessie's
  parallel-passage tool compares the lectures.
- **The seminar's doctrines and lexicons** are one click away:
  - kinds of immediate inference (Nik), and the forms of judgment in two tabs: the judgments
    Aidan's judgment finder finds by Aidan's own rules (pinned from Aidan's page and run here), and the
    examples Nik filed by hand. Each tab credits its own work.
    The immediate inferences open on a **square of opposition** built from the judgments
    Kant's examples write out: A, E, I and O with their counts, and the sides with the
    passages on each. The judgments open on the **table of judgments** as the *Critique* lays
    it out. The portal draws both diagrams from Nik's data. Both show what the passage itself
    names (solid) apart from Nik's reading (dashed), as Nik's explorers do, and each card shows
    whether the passage names its kind or Nik filed it there. The four passages Nik marks as
    offered as *not* immediate, or as an inference Kant rules out, say so;
  - kinds of mediate inference (Sophia);
  - the logical principles, in a view of their own: Qianxun's lexicon in Qianxun's three
    groups, each principle with its formulations, how often each text states it, and
    Qianxun's English beside the passages that have it;
  - the lectures' concepts (Jessie's list);
  - the forms of judgment (Aidan's terms).

- **On a phone.** In a narrow window the portal is one column: a passage opened covers the list,
  and its × goes back; in the Meier and Baumgarten reader Kant's notes take the lower part of the
  screen, under the text.

## Whose work it reads

Every connection says where it comes from; the **Contributors** page lists everyone.

| Layer | From |
| --- | --- |
| The Logik transcripts, the Reflexionen, the *Metaphysica* | `data/`, looked after by Sophia and Maria |
| Meier's *Auszug* | the Meier Reader's text, as a data file by Jesus |
| The Jäsche *Logik* | Alex's edition of AA IX |
| Lecture or Jäsche passage → Meier § | Jesus's Meier–Kant concordance |
| Parallel passages | Jessie's stopwords, compared as Jessie's tool compares the lectures |
| Immediate inferences; examples of the forms of judgment | Nik |
| Mediate inferences | Sophia |
| Logical principles, and their English | Qianxun |
| Concepts of the lectures | Jessie |
| Forms of judgment: Aidan's terms, and the judgments Aidan's finder finds | Aidan |
| Dates of the Reflexionen | Adickes' phases, `data/phases-adickes.js` |
| The tradition behind Meier's §§ | the Meier Reader's `data/tradition-meier.js` |
| English translations | Jesus's `translations/`, machine-made in two styles |
| Kant's published works: AA I, AA II, the *Critique* in A and B | [../published/](../published/README.md): the BBAW's new edition of AA I, the Deutsches Textarchiv's 1781 *Critique*, and OCR of the old Academy edition's AA II and AA III |
| Four more AA XXIV lectures (Herder, Philippi, Pölitz, Dohna-Wundlacken) | [../aa24-ocr/](../aa24-ocr/README.md): uncorrected OCR of the Internet Archive's scan of AA XXIV |
| AA XXIX's 1983 part: Metaphysik Mrongovius, Metaphysik K3, Logik Mrongovius | [../aa29-ocr/](../aa29-ocr/README.md): uncorrected OCR of the Internet Archive's scan, by the same extractor. AA XXIX's 1980 part is not in the portal (below) |

## Adding a text

Put the text in a `.js` data file in one of the shapes described at the top of
[catalogue.js](catalogue.js), and add one entry for it to `PORTAL_TEXTS` there. Nothing
else changes. A further transcript of AA XXIV comes out of `scripts/parse_logik.py` in the
right shape already. A published work can use the plain `passages` shape: one passage per
paragraph, each with its AA page. Passages are cited by AA page, so when a clean digital
edition arrives its text can replace these transcriptions without breaking the links.
[../published/](../published/README.md) has four such texts, and the fields they add (the
work in a volume, Kant's notes, the pages that begin inside a passage, the Critique's A and B
pages) are listed in the catalogue's header.

## The pinned files

Seven things the portal needs live inside other people's pages, or under another parse's
ids. [build-pins.py](build-pins.py) copies them into [pinned/](pinned/) without changing
them, and says so at the top of each file:
- Sophia's mediate inferences;
- Jesus's concordance links for Jäsche, re-keyed to Alex's blocks;
- which of Jesus's Jäsche blocks make up each of Alex's, so that Jesus's translations, keyed by
  Jesus's own blocks, can be shown beside Alex's text. 725 of the 754 of Alex's passages that have text begin and end
  where Jesus's do. In the other 29, Alex divides what Jesus keeps whole, so the English
  shown runs past the passage, and the pane says so;
- Jessie's concepts;
- Aidan's forms;
- Aidan's judgment finder: its forms and the rules it reads judgments by, run here on the
  portal's texts;
- Nik's figures for the immediate inferences, from Nik's *Immediate inferences, drawn*: the code
  that draws and checks each figure, and the styles it draws with, scoped so they touch nothing
  else. Every immediate-inference card in Explore carries Nik's figure, drawn by Nik's code.

Rerun it when any of those sources changes:

```sh
python3 Individuals/mikrishnan/portal/build-pins.py
```

The page asks for its data files with a version number (`PORTAL_V` in index.html, and the
`?v=` on catalogue.js), so a browser won't keep showing yesterday's copy. Raise both when a
data file or a pin changes.

When that data moves into `data/`, the pins can go.

## Limits

- Many of its transcriptions are not clean. Of Kant's published works only AA I and the A
  edition of the *Critique* are; AA II and the B edition are OCR of the old Academy edition,
  about 96% and 98% of words right, and B's pages are uncertain where shown with a query (see
  [../published/](../published/README.md)). Check quotations from OCR texts against the page image.
- **AA XXIX is only half here.** The portal has its 1983 part (Metaphysik Mrongovius, Metaphysik
  K3, Logik Mrongovius), not its 1980 part (the Philosophische Enzyklopädie, Herder's notes on
  mathematics and physics, the Berliner and Danziger Physik, Moral Mrongovius II). The 1980 part
  is online only at HathiTrust, which asks that a whole volume come through its own download,
  with a UChicago login, not be copied by a script; nothing has been taken from there. The home
  page and Read say so, from `PORTAL_GAPS` in `catalogue.js`; how to add it is in
  [../aa29-ocr/README.md](../aa29-ocr/README.md).
- Loading and indexing take about four seconds now that the published works are in (about
  1.5 before), on a recent laptop.
- The spelling rules widen a match; they never narrow it. Now and then they join two
  different words. A regular expression between slashes (`/formali?ter/`) matches the
  text exactly as printed.
- "Where is this in Meier?" is only as good as its source. For Wiener and Busolt it is
  Jesus's inference, and the pane shows Jesus's measured confidence for every link.
