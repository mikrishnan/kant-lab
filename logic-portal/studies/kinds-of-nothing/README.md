# The kinds of nothing

A study: a sandbox for building research tools around one question, beside the
[Logic Portal](../../index.html) and drawing on it.

> What are the kinds of nothing — the *nihil negativum* and *privativum*, the *ens
> rationis* and *imaginarium* — in Baumgarten and in Kant, and how and why does Kant's
> account change?

[index.html](index.html) is the study's page. The left side holds the study's own
material. The right side is the Logic Portal itself, opened at whatever passage you
click, so the portal's full text, Compare and Connections are always to hand. Nothing
here changes the portal. The seminar uses the portal for everything, and features built
for this one question stay here.

## Asking for a feature

At [claude.ai/code](https://claude.ai/code), or in the desktop app on your own copy, ask
for one thing at a time:

> In logic-portal/studies/kinds-of-nothing/, add X. Change only files in that folder.
> When you are done, push your branch and give me the preview link.

Then try the preview, ask for the next change, and when it is right, ask Claude to open
the pull request and press **Squash and merge**. Changes under `logic-portal/` need
nobody's approval. One person drives each feature at a time, as everywhere else.

**After each feature, add a journal entry.** Ask Claude to draft one in
[journal.md](journal.md), then correct it in your own words: what you asked for, what it
showed you, whether it helped, and what it got wrong. The journal is how this study
answers its second question, whether tools like these help at all.

## The rules

- **It shows; it never says.** No summaries, no "Kant's view". Any ranking states what it
  ranks by.
- **Every item is a quotation with its citation,** and opens in the portal at that place.
- **Dates as the edition gives them.** Adickes' phases are shown verbatim, query marks
  and all. Where the page places a note in time, it marks that placing as its own.
- **We decide, and sign.** A passage is in the dossier only because a participant put it
  there, with their GitHub username and their reason. What a tool works out is drawn
  dashed and labelled as such.
- **Read the corpus; never copy it.** The texts come from `../../../data/` and the
  portal's own folders, by `<script src>`.

## The files

| File | What it is |
| --- | --- |
| [index.html](index.html) | The page |
| [dossier.js](dossier.js) | The passages participants have admitted, each with who and why. Empty to start with; its header says how to add one |
| [starting-points.js](starting-points.js) | The 20 passages that name the *nihil negativum*, found by searching the portal's texts on 4 November 2026, and the two §§ Baumgarten's § 7 points to. Candidates, not members |
| [journal.md](journal.md) | What each feature showed, and whether it helped |
| [CLAUDE.md](CLAUDE.md) | Rules for every Claude session working in this folder |

## Ideas to start from

From the seminar's working paper of 4 November 2026, *Getting on top of the nihil
negativum*:

1. **The dossier.** One time line of every admitted passage, with a lane each for
   Baumgarten, Kant's notes, the lectures and the published works.
2. **The queue.** Any search turned into a numbered list, dealt out among participants,
   with a verdict on each passage (*bears on it*, *does not*, *unsure*) and a list of
   disagreements for seminar.
3. **Formulations side by side.** Every sentence that says what a kind of nothing is,
   in date order, cut into columns the group chooses.
4. **Divisions of nothing.** Each text's division of "nothing" drawn as a tree in one
   layout: Baumgarten's §§ 7 and 54, *Negative Größen*, the Critique's four.
5. **Where Kant speaks for himself.** The notes on a §, ranked by how many of its words
   they take up.
6. **A map of Kant's attention.** Kant's notes on §§ 7–18 and 54, counted by decade.

5 and 6 need only data the repository already has. The page already does the first
step of 1: the starting points in date order, each opening in the portal.

## When a feature proves itself

If something built here would help everyone, it goes to the portal itself as a pull
request of its own: [docs/maintaining.md](../../../docs/maintaining.md), *Bringing a tool
into the portal*, says how. The study keeps its version until the portal has one.
