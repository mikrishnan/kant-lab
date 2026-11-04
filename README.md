# Kant Lab

Digital-humanities tools for reading the pre-Kantian German school philosophy that Kant
lectured from — Baumgarten's *Metaphysica*, Meier's *Auszug aus der Vernunftlehre* — built
by the participants of the Kant Lab and published at
<https://mikrishnan.github.io/kant-lab/>.

A quick explainer is [here!](https://mikrishnan.github.io/kant-lab/Individuals/jweirich/how-to-contribute.html#individual)

This page explains how the repository is organised and how to work in it. **You do not
need to install anything.** Everything below happens in a browser, on github.com and at
[claude.ai/code](https://claude.ai/code). If you would rather see each change the moment
Claude makes it, you can also work [on your own computer](#working-on-your-own-computer).

## What lives where

| Path | What it is | Changes approved by |
| --- | --- | --- |
| `logic-portal/` | The **Logic Portal**, the whole seminar's tool, and the site's front page | nobody — whoever makes a change merges it |
| `Individuals/<you>/` | Your personal sandbox, as in the first session | you — no approval needed |
| `data/`, `scripts/`, `Textfiles/` | **Shared data,** the texts and Reflexionen the portal and your own tools read; the extractors that produce it; the transcriptions they read | one of the data's owners |
| `baumgarten-reader/`, `meier-reader/`, `porphyrian-tree/` | **Retired** tools. The two readers' addresses redirect into the portal | the professor or a default reviewer |
| `.github/CODEOWNERS` | The list of who approves what | the professor |
| everything else | `docs/`, `.github/`, this page | the professor or a default reviewer |

The seminar works as one team, the Kant Lab. The Logic Portal is everyone's:
[Fixing the Logic Portal in seminar](#fixing-the-logic-portal-in-seminar) says how to
change it. The data it is built from is owned by **Sophia Wyatt** (@sophia-wyatt) and
**Maria** (@mari637-pixel).

The repository is public, and the site publishes all of it.

## How work happens

The loop is the one software teams use:

**issue → change → review → merge → live**

### 1. Ideas, bugs and text errors start as an issue

Open the **Issues** tab, press **New issue**, and pick a form:

- **Proposal** — a feature, or a new tool.
- **Bug** — something in a tool does not work.
- **Text error** — a word, a §, a Reflexion or a citation is wrong. Give the AA reference.
  You are the experts here, and this is the most valuable thing you can file.

Discussion happens in the issue's comments. Comment on other people's issues freely.

### 2. Say what you want in plain words

There is no spec to write first. Tell Claude what you want as you would tell a colleague:
what the tool does now, what it should do instead, and what that would help you read or
see. Anything a reader can check by clicking makes a good request, e.g. *"Clicking a §
number on a card should scroll the text to that §."* For a bigger piece of work, write a
short brief in the issue, broken into steps, and ask for one step at a time.

The pull request's description is the record of what changed and why.

### 3. Claude makes the change and opens a pull request

Open [claude.ai/code](https://claude.ai/code), choose the **mikrishnan/kant-lab**
repository, and ask for one thing at a time:

> In Individuals/your-name/judgment-table.html, clicking a § number on a card should
> scroll the text to that §. Only change files in Individuals/your-name/. When you are
> done, push your branch and give me the preview link.

Claude works on a branch of its own, so nothing in the session touches the live site.
After each change it pushes the branch and replies with a **preview link** to the page as
it now stands: open it, look, and ask for the next change. When the change is right, ask
Claude to open the pull request. Every session reads the repository's `CLAUDE.md` files automatically, so the house
conventions apply without your repeating them. Keep each request small — one change,
one bug — so the pull request is small enough to review.

**Without Claude Code** (visiting professors, for instance): open the file on github.com,
click the pencil, make the edit, and choose **Create a new branch for this commit and
start a pull request**.

### 4. Someone else reviews it by using it

You do not need to read the code. A reviewer:

1. opens the pull request's **preview link** (below);
2. tries each thing the pull request says it changes;
3. opens the browser console — in Chrome, ⌥⌘J on a Mac, Ctrl+Shift+J on Windows — and
   looks for red errors;
4. either approves (**Files changed → Review changes → Approve**) or comments saying what
   failed and how.

A change to the Logic Portal, or to your own folder in `Individuals/`, needs nobody's
approval. For `data/`, `scripts/` and `Textfiles/`, the data's owner who is not the author
approves. For anything else, the professor or one of the default reviewers approves: Laura Benzenberg, Jeremy Weirich, Jesus La Paz, Qianxun Feng, Alex Li,
Aidan Chong, Sophia Wyatt and @zelleznick. A pull request that touches folders with different owners
needs an approval from each.

**The preview link.** The site shows only what has been merged. To see a pull request
before that, copy the latest commit's ID from the pull request's **Commits** tab and open

```
https://raw.githack.com/mikrishnan/kant-lab/<commit-id>/<path-to-the-page>
```

### 5. Merge it, and it is live

Once the pull request is approved, its author presses **Squash and merge**. The site
updates within a few minutes, at `https://mikrishnan.github.io/kant-lab/<path-to-the-page>`.

If a merged change breaks something, the merged pull request has a **Revert** button.
Press it first and ask questions afterwards.

## Fixing the Logic Portal in seminar

The [Logic Portal](https://mikrishnan.github.io/kant-lab/logic-portal/)
belongs to the whole seminar. When discussion turns up a problem with it, such as a wrong
citation, a missing link or a search that finds the wrong thing, fix it there and then.
This is the loop above, made quick:

1. **Say that you are taking it**, out loud, so that two people do not fix the same thing.
   If it cannot be done in the room, open an issue and assign it to yourself instead.
2. **Ask Claude.** At [claude.ai/code](https://claude.ai/code), on the
   **mikrishnan/kant-lab** repository:

   > In the Logic Portal (logic-portal/), X happens when it should be Y.
   > Fix only that, push the branch, and give me the preview link.

3. **Try the preview link.** Check that the fix does what you asked, and look for red
   errors in the console, as in step 4 above. For anything bigger than a small fix, post
   the link where the others can try it too.
4. **Ask Claude to open the pull request, and press Squash and merge.** Nobody needs to
   approve a change to the portal. The site has the fix within a few minutes. If you still
   see the old page, reload it with ⇧⌘R (Ctrl+Shift+R on Windows).

Several people can fix different things in the portal at the same time. Each works on a
branch of their own, and GitHub combines changes to the same file as long as they touch
different lines. Problems come only when two changes touch the same lines, which GitHub
reports as conflicts. In that case, close the later pull request and ask Claude for the
change again, as the rules below say. Merge the same day: a pull request left open is the
one that ends up in conflict.

With no approvals, the safety net is history. If a merged fix breaks something, press
**Revert** on its pull request first and ask questions afterwards. Git keeps every version
that was ever merged, so nothing is lost, and nobody but the professor can overwrite
`main` or delete it.

## Rules worth keeping

- **One driver per tool at a time.** Whoever is assigned the issue makes the change; the
  others try the preview and review. Two people asking Claude to change the same file at
  once is how conflicts happen. The Logic Portal in seminar is the exception: there it is
  one person per problem, each fix kept small and merged straight away.
- **If GitHub says a pull request has conflicts, do not try to resolve them.** Close it,
  and ask Claude for the same change again, starting from the current version. Redoing
  the change is quicker and safer than merging it.
- **Stay in your folder.** A change that reaches outside it needs the approval of
  whoever owns the rest; the table at the top says who.
- **Read shared data; never copy it.** Load it the way the portal does —
  `<script src="../../data/metaphysica-17.js"></script>` from your folder in
  `Individuals/`. A copy goes stale the next time the data is regenerated.
- **Attested vs. inferred.** Anything a tool works out for itself must be visibly marked
  as such, and anything the Academy Edition says must be shown as it says it, query marks
  and all. This is the project's one hard rule; [CLAUDE.md](CLAUDE.md) spells it out.
- **No readings, books or other PDFs.** The repository is public. Course readings belong
  on the course site.
- **Hyphens, not spaces, in new file and folder names,** so that links survive being
  pasted into an email.

## One team

The seminar is one team, the Kant Lab. Until November 2026 it also had working groups,
each with a folder in `groups/`; they were folded back into the one team then, and the
folder is gone. Work happens in three places:

- **Your own folder,** `Individuals/<your-name>/`, for anything you want to try. To build
  something with others, keep it in one person's folder and say whose in the issue.
- **The Logic Portal,** for what the whole seminar uses. A tool that proves itself in
  someone's folder joins the portal: the portal reads its files through `catalogue.js`, as
  it already reads several participants' work, or takes the feature in, as it took in the
  Baumgarten and Meier readers.
- **A study,** `logic-portal/studies/<topic>/`, for tools built around one research
  question by whoever is working on it. A study sits beside the portal and draws on it —
  every passage opens in the portal — without changing it, so features for one question
  stay out of the tool everyone uses. [logic-portal/studies/](logic-portal/studies/) lists
  them; the first is *The kinds of nothing*. A study can also keep a `puzzles.md`, a running
  list of hunches that aren't requests yet. Anyone adds to it by telling Claude "Puzzle: …"
  or "On puzzle 1: …", or by editing it on github.com.

**Building data rather than an app.** A dataset starts in your folder. Once the portal or
other tools depend on it, it moves to `data/`, and changes to it go through the owners of
`data/` from then on, because other tools rely on its shape.

## Individuals

`Individuals/<your-name>/` is still yours, to use as you like. Nobody reviews it. The
Logic Portal reads some participants' files, which its `catalogue.js` lists, so a change to
one of those shows up in the portal too. Changes to it now go through a pull request like everything else,
but you merge your own without waiting for anyone. See
[Individuals/README.md](Individuals/README.md).

## Working on your own computer

This is optional. It is for when you want to see each change the moment Claude makes it,
rather than following a preview link after every push. You run Claude in the **Claude
desktop app**, on the copy of the repository you downloaded with GitHub Desktop, and the
app shows the page in a **Browser** pane beside the chat. Claude also looks at the page
itself after each edit, and checks it for errors. Only step 3 above changes: the pull
request, the review and the merge are the same.

**Setting up, once.**

1. Install the Claude desktop app from [claude.com/download](https://claude.com/download),
   sign in with your university account, and open its **Code** tab.
2. The Browser pane needs Python to serve the pages. On a Mac, open Terminal and run
   `python3 --version`. If it prints a version number, you are set. If macOS offers to
   install the command line developer tools instead, accept, and run it again. This has
   not been tried on Windows yet; ask a maintainer first.

**Each piece of work.**

1. **In GitHub Desktop, start from the current `main`.** Choose **Current branch → main**,
   press **Fetch origin**, then **Pull origin**. Other people push all the time, so do
   this every time.
2. **Make a branch** with **Branch → New branch**, named for the change
   (`portal-section-links`). `main` does not accept changes directly.
3. **Start a session in the Code tab.** Choose **Local** as the environment and your
   `kant-lab` folder as the project folder. GitHub Desktop's **Repository → Show in
   Finder** (**Show in Explorer** on Windows) tells you where it is. Leave the
   **worktree** option off, so that Claude's changes show up in GitHub Desktop.
4. **Ask for one thing at a time,** as in step 3 but without the pushing:

   > In the Logic Portal, clicking a § number on a card should scroll the text to that §.
   > Change only files in logic-portal/, and show me logic-portal/index.html in the
   > preview.

   Look at the page, click through it, and ask for the next change. Nothing is on GitHub
   yet.
5. **Commit and open the pull request in GitHub Desktop.** The **Changes** list should
   hold only the files you meant to change; if anything else is there, ask Claude why
   before going on. Write a one-line summary, press **Commit to** your branch, then
   **Publish branch**, then **Branch → Create Pull Request**, which opens github.com.
   Ask Claude to write the pull request's description, and paste it in. From here on it
   is steps 4 and 5 above.
6. **After it is merged,** switch GitHub Desktop back to `main` and **Pull origin**
   before you start anything new.

**If you have installed GitHub's [`gh`](https://cli.github.com/) tool** and signed in
with it, Claude can commit, push and open the pull request itself, as in a cloud session.
Ask it to.

**Bringing a cloud session's work here.** After **Fetch origin**, the branch Claude was
working on (its name starts `claude/`) is in GitHub Desktop's branch list. Switch to it
and start a local session in the folder. The new session has not seen the cloud
conversation, so tell it what you were doing.

## For maintainers

- [docs/maintaining.md](docs/maintaining.md) — keeping the site and the data in order.
- [CLAUDE.md](CLAUDE.md), and the other `CLAUDE.md` files beside the code — the technical
  description of the portal, the data and the extractors.
