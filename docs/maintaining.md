# Maintaining Kant Lab

Notes for the professor and anyone else who maintains the repository. The student-facing
description of the workflow is the root [README.md](../README.md); read that first, since
this file assumes it.

## What needs you

The repository is set up so that most work does not wait on you. `CODEOWNERS` and the
ruleset on `main` decide who has to approve what:

| Change touches | Who approves | What you do |
| --- | --- | --- |
| only `Individuals/<name>/` | nobody — the author merges | nothing |
| only `groups/<group>/` | another member of that group | nothing, unless asked |
| only a tool with student owners, or `data/`, `scripts/`, `Textfiles/` | one of the owners (below) | nothing, unless asked |
| any other top-level tool, `.github/`, root files | you | review it (below) |
| a new `groups/<group>/` folder | you | set the group up (below) |

As a repository admin you can bypass the ruleset, which is what lets you merge your own
pull requests. Use the bypass for housekeeping, not for routine changes to the tools.

## Weekly routine

1. **Pull requests waiting on you.** On the Pull requests tab, filter by
   `is:open review-requested:@me`.
2. **Triage new issues.** Give each one a label (`proposal`, `bug`, `text-error`,
   `new-group`, and a `group:<name>` label if it belongs to a group, or a `tool:<name>`
   label if it belongs to a tool with owners). Assign each issue you want worked on to
   **one person** — that person is its driver. Leave issues on an owned tool, or on the
   data, for its owners to assign.
3. **Keep the landing page current.** Each group is listed under *Works in progress* in
   [index.html](../index.html) from the day its folder is created. Keep each entry's
   one-line description true to what the tool now does, and remove groups that have
   dissolved.
4. **Look at the live site** for whatever merged that week. Pages deploys from `main` a
   minute or two after each merge.

## Adding a participant

Invite them as a collaborator with **Write** access (Settings → Collaborators). They
connect their own GitHub account at claude.ai/code the first time they use it. Anyone
named in `CODEOWNERS` must have Write access, or GitHub silently ignores their line.

## Setting up a working group

When a **New working group** issue arrives:

1. Check the name. It should be lowercase with hyphens (`porphyry`, `jaesche-logik`),
   since it becomes part of a URL.
2. Check that the group has at least two members. A one-person group cannot approve its
   own pull requests, and would wait on you for every change.
3. Start a Claude Code session on the repository and ask, filling in the capitals:

   ```text
   Set up the working group requested in issue #NUMBER. Copy groups/_template/ to
   groups/GROUP-NAME/ and replace its GROUP NAME, GROUP-NAME and TOOL NAME
   placeholders. In README.md, list these members: NAMES AND GITHUB USERNAMES. In
   SPEC.md, fill in the Question section from the issue and leave the rest as the
   template has it. Add the line
       /groups/GROUP-NAME/  @mikrishnan @USER1 @USER2
   to the end of .github/CODEOWNERS. Add the group to the Works in progress list in
   index.html, linking to groups/GROUP-NAME/ and replacing the "No working groups yet"
   placeholder if it is still there. Open a pull request that closes #NUMBER.
   ```

4. Review and merge it, then create the `group:GROUP-NAME` label.

If the issue gives a prototype under **Starting from**, set the group up exactly as
above, from the template. Bringing the prototype in is the group's first pull request,
reviewed within the group; the README's *Starting from something in `Individuals/`*
gives the request.

Keep `@mikrishnan` on every group's line, so that you can approve when the group is stuck.

## Tools with student owners

A top-level tool can be handed to students, who then approve each other's changes to it
as a group's members do. The Baumgarten and Meier readers belong to Sophia Wyatt
(@sophia-wyatt) and Maria (@mari637-pixel), and so does everything those readers are
built from — `data/`, `scripts/` and `Textfiles/` — since working out how to handle the
data is part of the job.

Nothing moves: a tool keeps its address, and ownership is only a line in
`.github/CODEOWNERS`. To hand over another tool, check that each new owner has **Write**
access (see *Adding a participant*), then ask a Claude session to:

1. add `/<tool>/  @mikrishnan @USER1 @USER2` to `.github/CODEOWNERS`, below the group
   lines, together with a line for any file outside the tool's folder that only it reads
   and that should go with it;
2. say who the owners are in the tool's `README.md` and `CLAUDE.md`, in the root
   `README.md`'s *What lives where* table, and in the summary under "Git" in the root
   `CLAUDE.md`;
3. update the *What needs you* table above.

Keep `@mikrishnan` on every line, as for groups. Create a `tool:<tool>` label for its
issues. Taking a tool back is the same change in reverse: delete its lines, and it falls
under the `*` line again.

A tool handed over needs a `SPEC.md`, since the original tools predate the working
groups. The two readers' specs were drafted on 10 October 2026 from what each page did
then, with every item checked in headless Chrome. They follow the group template, with
one addition: an item the page does not yet satisfy is marked **Fails at present** and
points to the Open question that explains why. The owners' first job is to review their
spec. They check each item against the page, and settle or reword the Open questions.
For any other tool, drafting its spec from the page is the first pull request, as a group
does when it brings in a prototype.

## Reviewing a pull request

For any pull request waiting on you:

1. **Read the description.** It should name the issue, the spec items it implements, and
   anything the author did not check.
2. **Open the preview** (see the README for the link format) and click through what it
   claims to do. Keep the console open.
3. **Skim the list of changed files** before reading any code. That list is where most
   problems show up:
   - files outside the folder the pull request says it is about;
   - a file from `data/` copied into a group folder;
   - a large deletion nobody asked for;
   - one of the long single-line data blobs reformatted. A diff of thousands of lines for
     a small change usually means this, and it buries any real change;
   - PDFs and other binaries.
4. **For a change to `data/`**, check the consumers listed in
   [data/README.md](../data/README.md) — see *Changing shared data* below.
5. **Attested vs. inferred.** If the tool now infers something new, check that the
   inference is visibly marked.

When something is wrong, leave a review comment saying what. Students then ask Claude to
address the comment in the same session or a new one.

## Promoting a tool

A tool is ready to promote when:

- its `SPEC.md` is complete, and every Behaviour item that is not struck through passes;
- it loads shared data with `<script src>`, with no copies;
- it uses the suite's palette and fonts, from the `:root` block;
- the console is clean;
- it has a `README.md` for a human opening it for the first time, and a `CLAUDE.md`
  giving its data shapes and function map, as the three existing tools do.

To promote `groups/<name>/` to a top-level `<name>/`, ask a Claude session to:

1. `git mv` everything except `README.md` from `groups/<name>/` to `<name>/`, rewriting
   the tool's own README to say what the tool is rather than who is in the group;
2. change `../../data/` to `../data/` in the tool's `<script src>` tags;
3. replace `groups/<name>/index.html` with a redirect, so that shared links keep working:

   ```html
   <!DOCTYPE html>
   <meta charset="utf-8">
   <title>Moved</title>
   <meta http-equiv="refresh" content="0; url=../../<name>/">
   <link rel="canonical" href="../../<name>/">
   <p>This tool has moved to <a href="../../<name>/">its new home</a>.</p>
   ```

4. move the tool from *Works in progress* to the tools list in `index.html`;
5. either remove the group's line from `.github/CODEOWNERS`, so that the new top-level
   folder falls under the `*` line and your review, or change its path to `/<name>/`,
   so that the group goes on owning its tool (see *Tools with student owners* above).

From then on, the group improves its tool the way anyone improves the other tools: by
pull requests that its owners review.

## Changing shared data

[data/README.md](../data/README.md) lists every file in `data/`, the global names it
defines, how it is produced, and which tools read it. Three rules:

- **Generated files are never edited by hand.** Corrections go in the extractor in
  `scripts/`, and the file is regenerated. The commands are in "Regenerating the
  generated data" in the root [CLAUDE.md](../CLAUDE.md). Each extractor prints a report;
  read it.
- **Data files only gain fields.** Renaming or removing a field or a global breaks every
  tool that reads it, and nothing warns you, because there are no tests. If one has to
  go, the same pull request updates every consumer listed in `data/README.md`.
- **Global names are unique across `data/`.** A tool can load several data files, and
  two files that declare the same `const` stop each other from loading.

When a group's dataset is ready for other tools, move it from the group's folder into
`data/`, add its row to `data/README.md`, and update its first consumer's `<script src>`
in the same pull request. From then on the owners of `data/` approve changes to it. If
the group should keep it, give the file its own line in `.github/CODEOWNERS`, below the
`/data/` line.

## When something goes wrong

- **A merged change broke the site.** Open the merged pull request and press **Revert**.
  That opens a new pull request undoing it. Merge that, then work out what happened.
- **A pull request has conflicts.** Close it, and ask for the same change again from
  the current `main`. With Claude writing the code, redoing a change is cheaper than
  merging one.
- **Claude sessions keep making the same mistake.** Add a line about it to the
  relevant `CLAUDE.md`: the root one to reach every session, a group's to reach only
  that group's. The `CLAUDE.md` files are the main way to steer every student's session
  at once. Keep them true, too. An instruction that is out of date gets followed anyway.

## Housekeeping

- **Deleting a file does not remove it from history.** Anything committed to a public
  repository should be treated as published for good. Removing it from history means
  rewriting history (`git filter-repo` and a force-push), which is a deliberate decision.
- **Merged branches delete themselves**, provided "Automatically delete head branches" is
  on in Settings → General. Unmerged branches from abandoned Claude sessions can be
  deleted from the Branches page once their pull request is closed.
- **`Individuals/` belongs to its owners.** Do not rename or tidy anyone's folder on your
  own initiative; [Individuals/README.md](../Individuals/README.md) explains why.
- **[works.md](../works.md)** holds handoff notes between maintenance sessions: the state
  of play, as distinct from the standing description in `CLAUDE.md`. Update it at the end
  of a working session.
