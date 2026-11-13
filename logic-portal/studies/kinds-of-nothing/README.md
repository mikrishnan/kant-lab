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
| [queue.html](queue.html) | The queue: passages from the portal’s search, flagged by the seminar against the table of nothing. See below |
| [models.html](models.html), [models.js](models.js) | Three models of nothing (1763, c. 1769, 1781) as cards in one format: Kant's words, quoted from the portal's texts, beside fields for the seminar to state and sign. A draft |
| [board.html](board.html), [board.js](board.js) | The board: a whiteboard that keeps its texts. The three models as frames of cards built from Kant's labels, each card carrying its passages; arrows between parts for the seminar's hypotheses (kept, renamed, split into, …), and problems with what may answer them, each signed. Models move by their frames and spread or gather by a corner grip. It can be drawn on, with a mouse or an Apple Pencil, and works on an iPad. Layers, views, focus and zoom keep it readable; photographs keep how it stood. What anyone changes stays in their browser until exported and added to `board.js`. A draft |
| [queue-config.js](queue-config.js) | Where the queue keeps its flags: the organisation and repository on GitHub |

## Ideas to start from

From the seminar's working paper of 4 November 2026, *Getting on top of the nihil
negativum*:

1. **The dossier.** One time line of every admitted passage, with a lane each for
   Baumgarten, Kant's notes, the lectures and the published works.
2. **The queue.** Any search turned into a numbered list, dealt out among participants,
   with a verdict on each passage and a list of disagreements for seminar. Built, with
   the verdict changed to the four kinds of nothing: see *The queue* below.
3. **Formulations side by side.** Every sentence that says what a kind of nothing is,
   in date order, cut into columns the group chooses.
4. **Divisions of nothing.** Each text's division of "nothing" drawn as a tree in one
   layout: Baumgarten's §§ 7 and 54, *Negative Größen*, the Critique's four.
5. **Where Kant speaks for himself.** The notes on a §, ranked by how many of its words
   they take up.
6. **A map of Kant's attention.** Kant's notes on §§ 7–18 and 54, counted by decade.

5 and 6 need only data the repository already has. The page already does the first
step of 1: the starting points in date order, each opening in the portal.

## The queue

[queue.html](queue.html) turns the portal's search into a numbered list for the seminar to
work through together. Each passage gets the four kinds of nothing from the Critique's table,
"Nichts als …" (KrV A 291–292 / B 348):

1. *ens rationis*, leerer Begriff ohne Gegenstand
2. *nihil privativum*, leerer Gegenstand eines Begriffs
3. *ens imaginarium*, leere Anschauung ohne Gegenstand
4. *nihil negativum*, leerer Gegenstand ohne Begriff

A reader ticks every kind a passage bears on: one, several, or **None** of the four. *None*
counts as read; a passage with no ticks is *not yet read*. Each passage also takes a line of
note. Ticks are saved to GitHub a few seconds after you make them, signed with your GitHub
name, and everyone else working on the queue sees them within about half a minute, without
reloading. The page never ticks anything itself.

**Anyone can read the passages, without a token.** Without one, the page shows the queue's
passages read only, from a public copy, [queue-snapshot.js](queue-snapshot.js): every passage
with its number, citation, excerpt and filing, opening in the portal as usual. The ticks, the
notes and who made them are not in it, and stay private; they show once you join. The copy is
made by [snapshot-queue.py](snapshot-queue.py) and is as fresh as its last run, which the page
gives. After passages are added to the queue, ask Claude to "refresh the queue's public copy",
or run `python3 logic-portal/studies/kinds-of-nothing/snapshot-queue.py` with a token that can
see `kant-lab-seminar/queues`, and commit the file.

The page is linked only from the study's page, not from the portal.

### Joining, once

1. **Accept the invitation** to the `kant-lab-seminar` organisation on GitHub. It comes by
   email, and is waiting at [github.com/kant-lab-seminar](https://github.com/kant-lab-seminar).
2. **Make a token.** On GitHub: your picture → *Settings* → *Developer settings* →
   *Personal access tokens* → *Fine-grained tokens* → *Generate new token*
   ([straight there](https://github.com/settings/personal-access-tokens/new)). Then:
   - *Token name:* `Kant Lab queue`. *Expiration:* the end of term.
   - *Resource owner:* **kant-lab-seminar**, not your own account.
   - *Repository access:* **Only select repositories** → `queues`.
   - *Permissions* → *Repository permissions* → **Contents: Read and write**. GitHub adds
     *Metadata: Read-only* by itself. Nothing else.
   - *Generate token*, and copy it. It starts `github_pat_`, and GitHub shows it only once.
3. **Open [the queue](queue.html)**, paste the token, and press **Join**. Tick *remember on
   this computer* only on a computer of your own.

If the page says it can't see the repository, the usual reasons are an invitation not yet
accepted, a token made for your own account instead of `kant-lab-seminar`, or a token still
waiting for the organisation's approval.

### Working through it

- **Click a passage** to open it in the portal on the right. With a search open there, the
  search stays on the left.
- **Tick** the kinds it bears on, or *None*. Ticking *None* takes back the four, and ticking
  one of the four takes back *None*. Untick everything and the passage is *not yet read*
  again.
- **Others' ticks** show beside yours, signed, but only once you have given your own on that
  passage, so that two readings are two independent readings. Until then the page says only
  how many have read it.
- **Readers differ: for seminar** marks a passage where two readers' ticks are not the same.
  The page works that out, so it is drawn dashed.
- **The filters** pick out every passage ticked with one kind, *None*, those for seminar,
  and those not yet read by you or by anyone. The order can be by number, by date (the
  page's own placing, by Adickes' phases), or by § of Baumgarten. *Numbers from … to …*
  deals the queue out: "I'll take 1–60".
- **A passage you are working on stays in view.** Under any filter, a passage you tick or
  write a note on stays in the list, marked as no longer matching, so that you can tick a
  second kind. It leaves when you change the filter, the order or the numbers.
- **The bar** counts passages read by one reader and by two or more.

### Adding passages

Open **Add passages to the queue**, then search in the portal on the right as you would
anywhere in it. The box shows what the search finds, text by text. Untick any text you
don't want, and press **Add these**. The box can also add Kant's notes filed on a § of
Baumgarten, saying which are filed by their own locus note and which only by the AA's block
heading, and the study's starting points.

A passage already in the queue keeps its number, and new ones go at the end. There is no
button to take one out, so that numbers never move.

### Where the flags are kept

Not in kant-lab. They are in a **private** repository of their own,
[`kant-lab-seminar/queues`](https://github.com/kant-lab-seminar/queues), for two reasons.
kant-lab is public, and readers' names and notes should not be. And kant-lab belongs to a
personal account, for which GitHub issues only tokens that reach every repository a
participant can write to. A token for an organisation's repository can be limited to that
one.

```
queues/nihil-negativum/queue.json              the queue: its passages in order, and how each got there
queues/nihil-negativum/flags/<github-name>.json  one reader's ticks, written only by that reader
```

Each reader writes only their own file, so people working at the same time never overwrite
each other. Every save is a commit, so the repository's history keeps who ticked what, and
when.

The page sends the token only to GitHub (`api.github.com`). While it is open it asks
GitHub every 20 seconds whether anyone has saved, and reads only what changed. Ticks not yet
on GitHub are kept in the browser, and are saved when the connection returns.
[queue-config.js](queue-config.js) names the organisation and repository.

### Setting it up, once (the organisation's owner)

1. Create the free organisation `kant-lab-seminar`, and in it a private repository `queues`
   with a README.
2. *Settings* → *Member privileges* → *Base permissions*: **Write**, so that members can
   save.
3. *Settings* → *Personal access tokens*: allow fine-grained tokens. Either approve each
   participant's token when it comes in, or turn approval off.
4. *People* → *Invite member*, for each participant, by GitHub username.

## When a feature proves itself

If something built here would help everyone, it goes to the portal itself as a pull
request of its own: [docs/maintaining.md](../../../docs/maintaining.md), *Bringing a tool
into the portal*, says how. The study keeps its version until the portal has one.
