# Journal

What each feature of this study showed, and whether it helped. One entry per feature, newest
first. Claude drafts an entry when a feature is done; the participant who asked for it
corrects it in their own words.

Each entry: the date, who asked (GitHub username), what was asked for, what it showed,
whether it helped, and what it got wrong or could not do.

## 13 November 2026: the board

*A draft, to be corrected by mikrishnan in their own words.*

- **Asked for:** something more visual than three panels of text. Each model should have its
  own structure. We need arrows between the parts of different models, for example where one
  concept in an earlier model splits into two in a later one, each with the passages that bear
  on it. We need each model's problems, and how Kant tries to solve them later. We wanted the
  freedom of the whiteboard, where structures are invented as we go and things are put in new
  places, without its faults: you cannot link to texts, it fills up, you have to erase, nothing
  is kept, and the interconnections overload it. We also wanted it to be more than flat:
  three-dimensional, or many-dimensional.
- **What there is:** `board.html`, and `board.js`, the study's board. The three models are
  frames around cards. The cards are built only from Kant's labels, and each carries the
  passages it rests on, quoted from the portal's text with a link to read each one beside the
  board. Kant's divisions are drawn inside each frame. Anything can be dragged anywhere, and
  you double-click to write on the board.
  - **Arrows.** Drawn from a card's knob to another card, each typed (kept, renamed, split
    into, merged from, dropped, new, answers?, or a type of one's own), stated in the seminar's
    words, given its passages, and signed.
  - **Problems.** Problem cards sit in their model's frame.
  - **Models.** A model can be split by selecting cards and making them a model of their own,
    and a card dropped into another frame joins that model.
  - **The dimensions.** Layers switch the divisions, hypotheses, problems, passages, notes and
    the computer's same-label links on and off. Views are other arrangements of the same cards.
    Zoom gives depth: zoomed out a card is its name, zoomed in its first passage shows. Focus
    shows only what is joined to one card. Photographs keep the board as it stood, to come back
    to.
- **What it showed:** to be answered.
- **Did it help?** To be answered by the participants.
- **What it cannot do yet:**
  - what anyone changes stays in their own browser, until it is exported and added to
    `board.js`, so there is no shared board in class yet;
  - passages pasted onto a card are marked *not yet checked* until they are checked against
    the portal;
  - the only statements on it are the problem and the claim about Refl. 3990 from this
    session, both still to be put in mikrishnan's own words;
  - the layers are fixed. Kinds of one's own, such as a tag for "time" or "contradiction", are
    not there yet.

## 13 November 2026: three models, as cards

*A draft, to be corrected by mikrishnan in their own words.*

- **Asked for:** the three models of nothing we found last session (1763, c. 1769 in Refl.
  3990, 1781) written down in one format, so that each model's details and the changes between
  them are easier to hold in view.
- **What there is:** `models.html`, three cards side by side, and `models.js`, their data.
  Each card has the same fields: how Kant divides, the kinds in Kant's words, his examples, Kant
  comparing them, and the words for negating in the passages, each a quotation cut from the
  portal's own text, with its citation opening the passage. Beside these, four empty fields for
  the seminar: what is divided, by what, the model's problems, and what it does about earlier
  ones.
- **What it showed:** to be answered.
- **Did it help?** To be answered by the participants.
- **What it cannot do yet:**
  - the seminar's fields are empty, and filling them means editing `models.js`;
  - only one or a few anchor passages stand behind each model;
  - *Negative Größen* is OCR, and its quotations keep the OCR's slips;
  - the table, the trees and the crosswalk drawn from the cards are not built yet.

## 11 November 2026: the queue, read without a token

*A draft, to be corrected by mikrishnan in their own words.*

- **Asked for:** anyone on the site to see the queue's passages, read only, without a token,
  while those with a token still tick and add.
- **What there is:** a public copy of the queue's passages, `queue-snapshot.js` (88 passages
  on 11 November), made by `snapshot-queue.py`. Without a token the page shows it read only,
  with the join form folded beneath; with one, the page is as before.
- **What it showed:** to be answered.
- **Did it help?** To be answered by the participants.
- **What it cannot do:**
  - the copy is as fresh as its last run, so passages added later show only once it is made
    again;
  - the ticks, the notes and who made them are not in it, by design: they stay in the private
    repository.

## 4 November 2026: the queue

*A draft, to be corrected by nikolasland in their own words.*

- **Asked for (nikolasland):** the working paper's second tool, the queue, changed so that
  each passage is flagged against the four kinds of nothing in the Critique's table (any of
  them, several, or none). The flags are saved on GitHub, so that several of us can work on
  it at once and see each other's flags live. Its passages come from the Logic Portal's
  search.
- **What there is:**
  - `queue.html`, linked from the study's page, with the portal on the right;
  - a box that adds what the portal's search finds, Kant's notes filed on a §, or the
    starting points;
  - the four kinds and *None* on every passage, a line of note, the others' ticks shown once
    you have given yours, a list for seminar, filters, and a bar;
  - the flags kept in a private repository, `kant-lab-seminar/queues`, one file per reader.
- **What it showed:** nothing yet, since nobody has flagged. Building it confirmed the
  paper's counts through the portal itself. Its search for *nichts OR nihil* finds 302 of
  Kant's notes on Baumgarten. 69 notes are filed on § 7: 26 by their own locus note, 43 only
  by the AA's block heading. Across the whole corpus the same search finds 2,090 passages.
- **Did it help?** To be answered by the participants.
- **What it cannot do:**
  - "live" means within about half a minute;
  - only members with a token see the queue;
  - a passage cannot be taken out again;
  - "Add passages" depends on what the portal exposes as `window.PORTAL`, and stops, saying
    so, if that changes.
- **Unsure:** whether hiding others' ticks until you have given yours is right; and whether
  *None* and *not yet read* are kept apart clearly enough.

## 4 November 2026: the study is set up

- **Asked for:** a sandbox for this question, beside the Logic Portal and drawing on it,
  without changing the portal.
- **What there is:**
  - the page, with the dossier (empty) and 20 starting points in date order;
  - each starting point drawn dashed, as found by search;
  - the portal itself in a pane on the right, opening at whatever passage is clicked.
- **What it showed:** the phrase *nihil negativum* is rare. It occurs in § 7, five of
  Kant's 2,967 notes on Baumgarten, four passages of *Metaphysik Mrongovius*, one of K3,
  *Negative Größen* and the Critique. Kant's notes filed on § 7 number 69, and 302 notes
  on Baumgarten use *nichts* or *nihil*. A search for the phrase finds too little, and a
  search for the words too much.
- **Did it help?** To be answered by the participants.
- **What it cannot do yet:** search. The portal's spelling-aware search lives inside its
  own page and cannot be called from here, so for now the study links to portal searches.
