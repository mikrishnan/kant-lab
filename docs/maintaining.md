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
| only the Logic Portal, `logic-portal/` | nobody — the author merges | nothing |
| only `data/`, `scripts/`, `Textfiles/` | one of the data's owners (below) | nothing, unless asked |
| `.github/CODEOWNERS`, the list of who approves what | you alone | review it |
| anything else: `.github/`, `docs/`, root files, a retired tool's folder | you, or a default reviewer | review it (below), unless a default reviewer has |

The ruleset on `main` (Settings → Rules → Rulesets → **main**) requires a pull request,
blocks force pushes, and blocks deleting `main`. Its bypass list holds only the
**Repository admin** role, which is you, so you alone can merge your own pull requests,
push to `main` directly, or rewrite its history. Use the bypass for housekeeping, not for
routine changes to the tools. Collaborators already cannot change settings, rulesets or
collaborators, or delete the repository, since a repository owned by a personal account
gives those to its owner alone.

## Weekly routine

1. **Pull requests waiting on you.** On the Pull requests tab, filter by
   `is:open review-requested:@me`.
2. **Triage new issues.** Give each one a label (`proposal`, `bug`, `text-error`). Assign
   each issue you want worked on to **one person** — that person is its driver. Leave
   issues on the data for its owners to assign.
3. **Keep the landing page current.** [index.html](../index.html) lists the Logic Portal
   and, in one line beneath it, what has been retired. Keep the portal's description true
   to what it now does.
4. **Look at the live site** for whatever merged that week. Pages deploys from `main` a
   minute or two after each merge.

## Adding a participant

Invite them as a collaborator with **Write** access (Settings → Collaborators). They
connect their own GitHub account at claude.ai/code the first time they use it. Anyone
named in `CODEOWNERS` must have Write access, or GitHub silently ignores their line.

To let someone approve what you approve, add them to the `*` line at the top of
`.github/CODEOWNERS`. The people there besides you are the **default reviewers**, and any
one of them can approve: at present Laura Benzenberg (@Benzenberg), Jeremy Weirich
(@jweirich-globus), Jesus La Paz (@yizu6201), Qianxun Feng (@qianxun-blip), Alex Li
(@Alexynli), Aidan Chong (@AidanC973), Sophia Wyatt (@sophia-wyatt) and @zelleznick.

## The data's owners

The shared data, `data/`, and how it is made, `scripts/` and `Textfiles/`, belong to
Sophia Wyatt (@sophia-wyatt) and Maria (@mari637-pixel), who approve each other's changes
to it. Working out how to handle the data is part of the job. They also looked after the
Baumgarten and Meier readers, until the portal took those in and they were retired on
4 November 2026.

Ownership is only a line in `.github/CODEOWNERS`. To hand a folder to owners, check that
each has **Write** access (see *Adding a participant*), then ask a Claude session to:

1. add `/<folder>/  @mikrishnan @USER1 @USER2` to `.github/CODEOWNERS`, at the end;
2. say who the owners are in the folder's `README.md`, in the root `README.md`'s *What
   lives where* table, and in the summary under "Git" in the root `CLAUDE.md`;
3. update the *What needs you* table above.

Keep `@mikrishnan` on every line, so that you can approve when a change is stuck. Taking
a folder back is the same change in reverse: delete its line, and it falls under the `*`
line again.

## Reviewing a pull request

For any pull request waiting on you:

1. **Read the description.** It should name the issue, if there is one, say what changed
   and how to try it, and say anything the author did not check.
2. **Open the preview** (see the README for the link format) and click through what it
   claims to do. Keep the console open.
3. **Skim the list of changed files** before reading any code. That list is where most
   problems show up:
   - files outside the folder the pull request says it is about;
   - a file from `data/` copied into someone's folder;
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

## Bringing a tool into the portal

The seminar is one team, and its shared tool is the Logic Portal. A tool that proves
itself in someone's folder in `Individuals/` joins the portal in one of two ways:

- **The portal reads it.** Its data file is listed in `logic-portal/catalogue.js`, as
  several participants' files already are, and the portal shows it as a layer or a text.
  The file stays in its owner's folder. If the owner's later changes must not reach the
  portal unchecked, `logic-portal/build-pins.py` freezes a copy in `logic-portal/pinned/`.
- **The portal takes the feature in,** as it took in the Baumgarten and Meier readers. The
  original then stays in its owner's folder, or is retired (below).

A tool that should stand on its own beside the portal is promoted to the top level when:

- it does what its author set out to do, when you click through it;
- it loads shared data with `<script src>`, with no copies;
- it uses the suite's palette and fonts, from the `:root` block;
- the console is clean;
- it has a `README.md` for a human opening it for the first time.

To promote `Individuals/<owner>/<tool>/` to a top-level `<tool>/`, ask a Claude session to:

1. `git mv` the tool to `<tool>/`, with a `README.md` saying what it is;
2. change `../../data/` to `../data/` in the tool's `<script src>` tags;
3. leave a redirect at the old address, so that shared links keep working:

   ```html
   <!DOCTYPE html>
   <meta charset="utf-8">
   <title>Moved</title>
   <script>location.replace('../../<tool>/index.html' + location.search + location.hash);</script>
   <meta http-equiv="refresh" content="0; url=../../<tool>/index.html">
   <link rel="canonical" href="../../<tool>/index.html">
   <p>This tool has moved to <a href="../../<tool>/index.html">its new home</a>.</p>
   ```

   The script carries over the part of the address after `#`, which a tool that keeps its
   place there (as the Logic Portal does) needs; the refresh alone would drop it. Naming
   `index.html` keeps the redirect working from a file opened on disk too.

4. list the tool in `index.html`, beneath the Logic Portal;
5. if its author should go on approving changes to it, give it a line in
   `.github/CODEOWNERS` (see *The data's owners* above); otherwise it falls under the `*`
   line and your review.

## Retiring a tool

On 4 November 2026 the Baumgarten and Meier readers, the Porphyrian Tree and the
participants' Porphyrian-tree pages were retired. Do the same for any other:

- **If the portal now does what the tool did**, replace the tool's page with a redirect to
  the same place in the portal, carrying its links over. The readers' pages show how: a
  `#go=92` opens § 92 there.
- **If nothing replaces it**, replace the page with a short notice that links to the page
  as it last stood, on raw.githack at the last commit that had it.
- Keep the address either way. In the tool's folder, a `README.md` says when it was
  retired, where its work went, and the commit to find it at. Delete its `CLAUDE.md` and
  `SPEC.md`, so that no session takes the old tool for a live one.
- Take it off the landing page, and name it in the one line about what has been retired.

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

When a participant's dataset is ready for other tools, move it from their folder into
`data/`, add its row to `data/README.md`, and update its consumers' `<script src>` in the
same pull request. From then on the owners of `data/` approve changes to it. If its author
should keep it, give the file its own line in `.github/CODEOWNERS`, below the `/data/`
line.

## When something goes wrong

- **A merged change broke the site.** Open the merged pull request and press **Revert**.
  That opens a new pull request undoing it. Merge that, then work out what happened.
- **A pull request has conflicts.** Close it, and ask for the same change again from
  the current `main`. With Claude writing the code, redoing a change is cheaper than
  merging one.
- **Claude sessions keep making the same mistake.** Add a line about it to the
  relevant `CLAUDE.md`: the root one to reach every session, a folder's to reach only
  the sessions working there. The `CLAUDE.md` files are the main way to steer every student's session
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
