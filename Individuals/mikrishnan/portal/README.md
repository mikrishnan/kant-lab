# The Logic Portal

A research instrument for the Kant Lab seminar: put a question to the whole logic corpus
the moment it comes up in class, and follow the answer from lecture to textbook to Kant's
notes to Jäsche and back.

Open [index.html](index.html). It loads every text in [catalogue.js](catalogue.js) and every
layer of the seminar's work beside them, indexes every word (about a second and a half),
and then answers at once.

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
  behind it, and what the seminar has said about it. Every step goes on the trail, and
  **Copy link** reproduces the exact view.
- **The seminar's questions, doctrines and lexicons** are one click away:
  - the questions asked in class so far;
  - kinds of immediate inference, forms of judgment and kinds of syllogism (Nik Land);
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

## Adding a text

Put the text in a `.js` data file in one of the shapes described at the top of
[catalogue.js](catalogue.js), and add one entry for it to `PORTAL_TEXTS` there. Nothing
else changes. A further transcript of AA XXIV comes out of `scripts/parse_logik.py` in the
right shape already. A published work can use the plain `passages` shape: one passage per
paragraph, each with its AA page. Passages are cited by AA page, so when a clean digital
edition arrives its text can replace these transcriptions without breaking the links.

## The pinned files

Four things the portal needs live inside other people's pages, or under another parse's
ids. [build-pins.py](build-pins.py) copies them into [pinned/](pinned/) without changing
them, and says so at the top of each file:
- Sophia's mediate inferences;
- Jesus's concordance links for Jäsche, re-keyed to Alex's blocks;
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
