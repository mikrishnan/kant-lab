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
| `baumgarten-reader/`, `meier-reader/` | **Tools** with student owners. Finished and approved; listed first on the site | one of the tools' owners |
| `porphyrian-tree/` | **Tool.** Finished and approved; listed first on the site | the professor |
| `groups/<group>/` | **Works in progress.** One folder per working group, each the group's own playground | another member of that group |
| `data/`, `scripts/`, `Textfiles/` | **Shared data,** the texts and Reflexionen that several tools read; the extractors that produce it; the transcriptions they read | one of the readers' owners |
| `Individuals/<you>/` | Your personal sandbox, as in the first session | you — no approval needed |
| everything else | `docs/`, `.github/`, this page | the professor |

The Baumgarten and Meier readers, and the data they are built from, are owned by
**Sophia Wyatt** (@sophia-wyatt) and **Maria** (@mari637-pixel). Either can approve
the other's pull requests, and they decide how those tools and their data develop.

The repository is public, and the site publishes all of it.

## How work happens

The loop is the one software teams use:

**issue → spec → change → review → merge → live**

### 1. Ideas, bugs and text errors start as an issue

Open the **Issues** tab, press **New issue**, and pick a form:

- **Proposal** — a feature, or a new tool.
- **Bug** — something in a tool does not work.
- **Text error** — a word, a §, a Reflexion or a citation is wrong. Give the AA reference.
  You are the experts here, and this is the most valuable thing you can file.
- **New working group** — you and others want to build something together.

Discussion happens in the issue's comments. Comment on other people's issues freely.

### 2. A group writes its spec before its code

Every group folder has a `SPEC.md`, written in plain language:

- **Question** — the scholarly question the tool helps with.
- **Sources** — which texts, and which files in `data/`, it uses.
- **Attested vs. inferred** — what the tool works out for itself, and how it shows that.
- **Behaviour** — numbered statements anyone can check by clicking, e.g. *"4. Clicking a
  § number on a card scrolls the text to that §."*
- **Out of scope** — what it deliberately does not do.

The spec is the part of the project you own and argue about. Claude writes the code; the
spec is how you tell Claude what to build, and how everyone else checks that it did.
When behaviour changes, the spec changes in the same pull request.

### 3. Claude makes the change and opens a pull request

Open [claude.ai/code](https://claude.ai/code), choose the **mikrishnan/kant-lab**
repository, and ask for one thing at a time:

> Read groups/porphyry/SPEC.md and groups/porphyry/CLAUDE.md. Implement Behaviour item 4.
> Only change files in groups/porphyry/. When you are done, push your branch and open a
> pull request that says which Behaviour items it implements.

Claude works on a branch of its own, so nothing in the session touches the live site.
After each change it pushes the branch and replies with a **preview link** to the page as
it now stands: open it, look, and ask for the next change. When the change is right, ask
Claude to open the pull request. Every session reads the repository's `CLAUDE.md` files automatically, so the house
conventions apply without your repeating them. Keep each request small — one spec item,
one bug — so the pull request is small enough to review.

**Without Claude Code** (visiting professors, for instance): open the file on github.com,
click the pencil, make the edit, and choose **Create a new branch for this commit and
start a pull request**.

### 4. Someone else reviews it by using it

You do not need to read the code. A reviewer:

1. opens the pull request's **preview link** (below);
2. checks each Behaviour item the pull request says it implements;
3. opens the browser console — in Chrome, ⌥⌘J on a Mac, Ctrl+Shift+J on Windows — and
   looks for red errors;
4. either approves (**Files changed → Review changes → Approve**) or comments saying which
   item failed and how.

For a group's folder, any member of the group other than the author can approve. For the
Baumgarten and Meier readers, `data/`, `scripts/` and `Textfiles/`, the readers' owner who
is not the author approves. For anything else outside `groups/` and `Individuals/`, the
professor approves. A pull request that touches folders with different owners needs an
approval from each.

**The preview link.** The site shows only what has been merged. To see a pull request
before that, copy the latest commit's ID from the pull request's **Commits** tab and open

```
https://raw.githack.com/mikrishnan/kant-lab/<commit-id>/groups/<group>/index.html
```

### 5. Merge it, and it is live

Once the pull request is approved, its author presses **Squash and merge**. The site
updates within a few minutes, at `https://mikrishnan.github.io/kant-lab/groups/<group>/`.

If a merged change breaks something, the merged pull request has a **Revert** button.
Press it first and ask questions afterwards.

## Rules worth keeping

- **One driver per tool at a time.** Whoever is assigned the issue makes the change; the
  others work on the spec and review. Two people asking Claude to change the same file at
  once is how conflicts happen.
- **If GitHub says a pull request has conflicts, do not try to resolve them.** Close it,
  and ask Claude for the same change again, starting from the current version. Redoing
  the change is quicker and safer than merging it.
- **Stay in your folder.** A change that reaches outside it needs the approval of
  whoever owns the rest; the table at the top says who.
- **Read shared data; never copy it.** Load it the way the readers do —
  `<script src="../../data/metaphysica-17.js"></script>` from a group folder. A copy goes
  stale the next time the data is regenerated.
- **Attested vs. inferred.** Anything a tool works out for itself must be visibly marked
  as such, and anything the Academy Edition says must be shown as it says it, query marks
  and all. This is the project's one hard rule; [CLAUDE.md](CLAUDE.md) spells it out.
- **No readings, books or other PDFs.** The repository is public. Course readings belong
  on the course site.
- **Hyphens, not spaces, in new file and folder names,** so that links survive being
  pasted into an email.

## Working groups

A working group is a few people building one tool they find interesting. Each group has
a folder:

```
groups/<group-name>/
  README.md    who is in the group, and where the tool stands
  SPEC.md      what the tool is for and what it does
  CLAUDE.md    instructions every Claude session in this folder follows
  index.html   the tool itself
```

**Starting one.** File a **New working group** issue giving a name, the members' GitHub
usernames, and a paragraph on the idea. The professor creates the folder. The tool is
listed under *Works in progress* on the site from then on.

**Starting from something in `Individuals/`.** If one of you has already built a version
of the tool in your own folder, give its path in the issue's **Starting from** field.
The professor still creates the folder from the template. The group's first pull request
then brings the prototype in and drafts the spec from it, both in one request:

> Read groups/porphyry/CLAUDE.md. Bring in Individuals/your-name/porphyrian-tree.html
> as groups/porphyry/index.html, and draft SPEC.md from what the page does now. Only
> change files in groups/porphyry/.

Whoever reviews that pull request checks each drafted Behaviour item against the page,
so it is the first review of the spec as well. The original stays in your
`Individuals/` folder, yours to keep or delete.

**Building on an existing tool.** A small fix to one of the approved tools goes straight
to it, as a pull request its owners review — the professor, for a tool with no student
owners. A larger rework starts as a copy in a group folder and replaces the original
once it is ready. The Baumgarten and Meier readers have specs of their own,
[baumgarten-reader/SPEC.md](baumgarten-reader/SPEC.md) and
[meier-reader/SPEC.md](meier-reader/SPEC.md). A pull request on either names the
Behaviour items it implements, just as a group's does.

**From work in progress to tool.** When a group thinks its tool is done, it files a
**Proposal** issue asking for promotion. The professor checks the tool against its spec
and, if it is ready, moves it to the top level beside the other tools. Its old address
keeps working.

**Building data rather than an app.** A group can produce a dataset for other tools to
use. The Jäsche *Logik* — Kant's own lectures on Meier's *Auszug* — is already in
`Textfiles/`, and nothing uses it yet. A dataset starts in the group's folder. Once other
tools depend on it, it moves to `data/`, and changes to it go through the owners of
`data/` from then on, because other tools rely on its shape.

## Individuals

`Individuals/<your-name>/` is still yours, to use as you like. Nobody reviews it and no
shared tool loads it. Changes to it now go through a pull request like everything else,
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
   (`porphyry-item-4`). `main` does not accept changes directly.
3. **Start a session in the Code tab.** Choose **Local** as the environment and your
   `kant-lab` folder as the project folder. GitHub Desktop's **Repository → Show in
   Finder** (**Show in Explorer** on Windows) tells you where it is. Leave the
   **worktree** option off, so that Claude's changes show up in GitHub Desktop.
4. **Ask for one thing at a time,** as in step 3 but without the pushing:

   > Read groups/porphyry/SPEC.md and groups/porphyry/CLAUDE.md. Implement Behaviour
   > item 4, changing only files in groups/porphyry/, and show me
   > groups/porphyry/index.html in the preview.

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

- [docs/maintaining.md](docs/maintaining.md) — keeping the site, the groups and the data
  in order.
- [CLAUDE.md](CLAUDE.md), and the `CLAUDE.md` in each tool's folder — the technical
  description of the apps, the data and the extractors.
