# The Logic Portal

A research instrument for the Kant Lab seminar: put a question to the whole logic corpus
the moment it comes up in class, and follow the answer from lecture to textbook to Kant's
notes to Jäsche and back.

Open [index.html](index.html). It loads every text in [catalogue.js](catalogue.js) and every
layer of the seminar's work beside them, indexes every word (about a second and a half),
and then answers at once.

## Finding your way

Four places, along the top:
- **Search** opens on one question box, with every text there to open and read in full.
- **Read** lists the corpus. Open any text to read it through: its contents, and a box to go
  to a §, an AA page or a Reflexion. Click any paragraph and what hangs on it opens beside the
  text.
- **Explore** gathers the seminar's starting points: the doctrines classified passage by
  passage, the parallel passages, and the three lexicons.
- **Contributors** lists who built what.

Wherever you are, clicking an example (a search hit, a classified passage, a parallel) opens
it **in its full text** on the right, scrolled to the passage and highlighted, so you can look
through example after example in context. Its **Connections** tab beside the full text gives:
- the textbook § it is on;
- Kant's notes there;
- the other texts on the same §;
- its parallel passages;
- what the seminar has said about it.

**Read on the left** opens that text in full for reading through. Select a few words in any
text, and a button offers to search for them everywhere.

A search's results have two tabs: **Overview**, with the phrasings and where they occur, and
**Passages**. The search options fold away under **Options**.

## What it does

- **Ask.** Type a word or phrase (`form* fals*`, `"satz des widerspruchs"`). The search
  treats the texts' many spellings as one word (*Urtheil* and *Urteil*, *Wiederspruch* and
  *Widerspruch*, *Principium* and *Prinzipium*, *Saz* and *Satz*). It returns:
  - **Phrasings:** every distinct wording it found, with counts in each text;
  - **Where it occurs:** counts per text, and per 10,000 words so that long and short texts compare;
  - **Passages:** in the order of the texts, each opening on the right.

  A second box keeps only passages that also mention, or do not mention, something else.
- **Follow.** Any passage opens in the right-hand pane with the textbook § it is on and how
  that is known (stated, or inferred with a measured confidence). Below that come Kant's
  notes on that §, oldest first, then the lectures and Jäsche on the same §, the tradition
  behind it, and what the seminar has said about it. Every step goes on the **route** bar
  under the header, which shows the last few steps with back and forward arrows. **Map**
  opens the whole route: one row per document, each step a mark, joined in order, so you can
  see how you have moved through the corpus. Click any mark to return to it. **Copy link**
  reproduces the exact view.
- **English.** Press **English** on a passage to see a translation beside the German, in one
  of two styles: following the stated principles of Guyer and Wood, or of Kemp Smith. These
  are Jesus La Paz's machine translations, made for his Meier–Kant comparison; neither
  translator translated these texts, and the pane says so under every one. There is English
  for Meier, the Reflexionen on Meier, the three lectures and Jäsche, not yet for Baumgarten.
  Each text's translation loads only when it is first wanted.
- **Report a text error.** Every passage has a link that opens the repository's *Text error*
  form with the passage, its citation and a link back to it already filled in. The reporter
  chooses the tool from the form's list and gives their source.
- **Parallel passages.** Every passage lists the passages of other texts nearest it in wording:
  the words they share, weighted by how rare each is, leaving out Jin's stopwords, as his
  parallel-passage tool compares the lectures. Alex Li's 25 sets of parallels, chosen by hand,
  have a view of their own in Explore and show beside the passages they join.
- **The seminar's doctrines and lexicons** are one click away:
  - kinds of immediate inference, forms of judgment and kinds of syllogism (Nik Land).
    The immediate inferences open on a **square of opposition** built from the judgments
    Kant's examples write out: A, E, I and O with their counts, and the sides with the
    passages on each. The judgments open on the **table of judgments** as the *Critique* lays
    it out. Both show what the passage itself names (solid) apart from Nik's reading (dashed),
    as his explorers do;
  - kinds of mediate inference (Sophia Wyatt);
  - the logical principles (Feng's lexicon);
  - the lectures' concepts (Jin's list);
  - the forms of judgment (Aidan Chong's terms).

## Whose work it reads

Every connection says where it comes from; the **Contributors** page lists everyone.

| Layer | From |
| --- | --- |
| The Logik transcripts, the Reflexionen, the *Metaphysica* | `data/`, looked after by Sophia Wyatt and Maria |
| Meier's *Auszug* | the Meier Reader's text, as a data file by Jesus La Paz |
| The Jäsche *Logik* | Alex Li's edition of AA IX |
| Lecture or Jäsche passage → Meier § | Jesus La Paz's Meier–Kant concordance |
| Parallels between the lectures | Alex Li's annotations |
| Immediate inferences, judgments, syllogisms | Nik Land |
| Mediate inferences | Sophia Wyatt |
| Logical principles | Feng |
| Concepts of the lectures | Jin |
| Forms of judgment | Aidan Chong |
| Dates of the Reflexionen | Adickes' phases, `data/phases-adickes.js` |
| The tradition behind Meier's §§ | the Meier Reader's `data/tradition-meier.js` |
| English translations | Jesus La Paz's `translations/`, machine-made in two styles |

## Adding a text

Put the text in a `.js` data file in one of the shapes described at the top of
[catalogue.js](catalogue.js), and add one entry for it to `PORTAL_TEXTS` there. Nothing
else changes. A further transcript of AA XXIV comes out of `scripts/parse_logik.py` in the
right shape already. A published work can use the plain `passages` shape: one passage per
paragraph, each with its AA page. Passages are cited by AA page, so when a clean digital
edition arrives its text can replace these transcriptions without breaking the links.

## The pinned files

Five things the portal needs live inside other people's pages, or under another parse's
ids. [build-pins.py](build-pins.py) copies them into [pinned/](pinned/) without changing
them, and says so at the top of each file:
- Sophia's mediate inferences;
- Jesus's concordance links for Jäsche, re-keyed to Alex's blocks;
- which of Jesus's Jäsche blocks make up each of Alex's, so that his translations, keyed by
  his own blocks, can be shown beside Alex's text. 725 of Alex's 754 passages begin and end
  where Jesus's do. In the other 29, Alex divides what Jesus keeps whole, so the English
  shown runs past the passage, and the pane says so;
- Jin's concepts;
- Aidan's forms.

Rerun it when any of those sources changes:

```sh
python3 Individuals/mikrishnan/portal/build-pins.py
```

When that data moves into `data/`, the pins can go.

## Limits

- The corpus is small and its transcriptions are not clean: four lectures and notes, two
  textbooks, Jäsche. The published works are not in it yet, so questions about
  transcendental logic have little to go on.
- The spelling rules widen a match; they never narrow it. Now and then they join two
  different words. A regular expression between slashes (`/formali?ter/`) matches the
  text exactly as printed.
- "Where is this in Meier?" is only as good as its source. For Wiener and Busolt it is
  Jesus's inference, and the pane shows his measured confidence for every link.
