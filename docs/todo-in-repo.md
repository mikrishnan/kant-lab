# In-repo tasks for the working-group rollout

A task list for whoever makes the repository changes — a Claude Code session or a person.
The out-of-repo half, mostly GitHub settings, is in
[todo-outside-repo.md](todo-outside-repo.md). Task IDs are referred to across both files.

**Before starting:**

- Read [../README.md](../README.md) and [maintaining.md](maintaining.md). They already
  describe the target state, and everything below implements them. If a task turns out
  to need something different, update those two files to match in the same change.
- Read the root [../CLAUDE.md](../CLAUDE.md). The conventions there still hold: the
  design language, the data-first script layout, attested vs. inferred, and never
  reformatting the long single-line JSON blobs.
- `git fetch` first. Participants push through the web UI, and a clone falls behind fast.
- Work on a branch, not `main`. R1–R8 and R10–R11 can go in one pull request. R9 waits
  on O12 (a Mac).
- Nothing here touches the contents of anyone's `Individuals/<name>/` folder.

---

## R1. Group scaffold: `groups/`

Create:

**`groups/README.md`** — at most ten lines. Say that each subfolder is a working group's
playground; that new groups start from `_template/`, through a *New working group* issue;
and that the workflow is described in the root README's "Working groups" section, with a
link to it.

**`groups/_template/README.md`**

```markdown
# <Group name>

**Status:** work in progress
**Live:** https://mikrishnan.github.io/kant-lab/groups/<group>/
**Spec:** [SPEC.md](SPEC.md)

<One paragraph: what the tool is for.>

| Member | GitHub |
| --- | --- |
| <name> | @<username> |
```

**`groups/_template/SPEC.md`** — a skeleton containing these headings, each followed by a
one- or two-sentence italic prompt saying what goes there:

- `# <Tool name>`
- `## Question` — the scholarly question the tool helps with.
- `## Sources` — texts, with AA volume and page ranges; the `data/` files used, and which
  globals from each, per [../../data/README.md](../../data/README.md).
- `## Attested vs. inferred` — what the tool works out for itself, and how the UI marks
  it. Point to the rule in the root `CLAUDE.md`.
- `## Behaviour` — a numbered list. Each item is one statement anyone can check by
  clicking. Include one worked example, e.g. `1. Clicking a § number in the sidebar
  scrolls the text to that § and highlights it.` Include this rule in the prompt:
  **items are never renumbered** — a retired item is struck through
  (`~~3. …~~ (dropped: reason)`), so that pull requests saying "implements item 4" keep
  their meaning.
- `## Out of scope`
- `## Open questions`

**`groups/_template/CLAUDE.md`** — instructions for every Claude session working in a
group folder. State each of the following as a rule:

1. Only create or modify files inside this folder. If the request needs a change
   anywhere else — `data/`, another tool, a root file — do not make it. Say so in the
   pull request description.
2. `SPEC.md` is the source of truth. Implement what the request names, and nothing
   more. If the request contradicts `SPEC.md`, say so instead of guessing. If behaviour
   changes, update `SPEC.md` in the same pull request. Never renumber Behaviour items.
3. The tool is a single self-contained `index.html`: no build step, no framework, no
   npm, no dependencies except Google Fonts. Follow "Shared conventions" in the root
   `CLAUDE.md` — the palette and fonts in the `:root` block, the data-first script
   layout, and attested vs. inferred.
4. Shared data is loaded with `<script src="../../data/<file>.js"></script>`. Never copy
   a data file, or paste its contents, into this folder. Never edit `data/`.
   `data/README.md` lists the globals each file defines.
5. A dataset the group is building lives in this folder as `<name>.js`, defining
   uniquely-named globals, until it is promoted to `data/`.
6. Use hyphens, not spaces, in file names. Do not add PDFs or other binaries.
7. The pull request description lists the issue it closes, the Behaviour items
   implemented, and anything that was not verified in a browser.

**`groups/_template/index.html`** — a starter page, at most about 80 lines:

- the Google Fonts `@import` and the `:root` custom-property block, copied exactly from
  the root [../index.html](../index.html);
- a header with a `<Tool name>` placeholder in Cinzel, and an empty `<main>`;
- a commented-out example include, `<!-- <script src="../../data/phases-adickes.js"></script> -->`;
- one inline `<script>` holding only the section comments, in the suite's order:
  `// ── Data ──`, `// ── State ──`, `// ── Render ──`, `// ── Events ──`, `// ── Init ──`.

The leading underscore matters. GitHub Pages runs Jekyll by default, and Jekyll does not
publish `_`-prefixed directories, so the template never appears on the site. Do not add a
`.nojekyll` file. A side effect of Jekyll to know about: it renders `.md` files with
Liquid, so no Markdown file in the repository may contain a double opening curly brace,
or an opening curly brace followed by a percent sign — not even inside backticks. An
unterminated Liquid tag fails the Pages build, and the site then stops updating.

**Check:** opening `groups/_template/index.html` shows a parchment page with the heading
in Cinzel, and the console has no errors.

## R2. Landing page: two tiers

In [../index.html](../index.html):

- Add `<h2>Tools</h2>` above the existing `ul.apps`. Below it, add
  `<h2>Works in progress</h2>`, a one-line italic note (*"Tools the working groups are
  building. Expect rough edges."*), and `<ul class="apps wip">`.
- Style `h2` in Cinzel, `var(--accent)`, at about 1.15rem, with the `h1`'s letter-spacing.
  Style `.wip li` like `ul.apps li` but with `border-style: dashed` — the suite's
  existing mark for "not settled", as on interpolated Reflexionen. Use no new colours.
- The `wip` list starts with a single item: *"No working groups yet — see how to start
  one."*, linking to `https://github.com/mikrishnan/kant-lab#working-groups`.
- In the footer, add a link to the README, labelled *How to contribute*, beside the
  existing GitHub link.
- Leave the three tool entries and their URLs as they are.

**Check:** the page renders and the three tools' links still open them.

## R3. `.github/CODEOWNERS`

Create exactly:

```
# Who must approve a pull request, by path. The LAST matching line wins.
# Everyone listed must have Write access to the repository, or the line is ignored.

# Default: the professor reviews everything not matched below.
*                @mikrishnan

# Personal sandboxes: no owner, so the author merges their own pull request.
/Individuals/

# Working groups: one line per group, added when the group is created.
# Always include @mikrishnan, so that a stuck group can be unblocked.
# /groups/<group>/  @mikrishnan @member1 @member2
```

O1 may name further maintainers. If it does, add them to the `*` line.

**Check:** after merging, the file's page on github.com shows no CODEOWNERS errors.

## R4. Issue forms: `.github/ISSUE_TEMPLATE/`

Create five files, using GitHub's issue-form YAML schema (`name`, `description`,
`title`, `labels`, and `body` items of type `markdown`, `input`, `textarea`, `dropdown`).
Each form applies the label named below. The labels themselves are created in O9.

- **`config.yml`** — `blank_issues_enabled: true`.
- **`proposal.yml`** — label `proposal`; title prefix `Proposal: `. Fields:
  - *Which tool?* (dropdown, required): Baumgarten reader / Meier reader / Porphyrian
    tree / A working group's tool / A new tool / Shared data;
  - *What should it do?* (textarea, required);
  - *Why — what would it help you read or see?* (textarea, required);
  - *Draft spec items* (textarea, optional; prompt: "numbered, each checkable by
    clicking").
- **`bug.yml`** — label `bug`; title prefix `Bug: `. Fields:
  - *Which tool?* (the same dropdown, required);
  - *Link to the page* (input);
  - *What did you do?* (textarea, required);
  - *What happened, and what did you expect?* (textarea, required);
  - *Browser and any red console errors* (textarea).
- **`text-error.yml`** — label `text-error`; title prefix `Text error: `. Fields:
  - *Which tool?* (dropdown, required);
  - *Where* (input, required; prompt: "§ number, Refl. number, or both");
  - *What the tool shows* (textarea, required);
  - *What it should show* (textarea, required);
  - *Your source* (input, required; prompt: "AA volume:page, or another edition with
    page");
  - *How sure are you?* (dropdown: Certain — checked against the AA / Probable / A
    question).
- **`new-group.yml`** — label `new-group`; title prefix `New working group: `. Fields:
  - *Group name* (input, required; prompt: "lowercase-with-hyphens; it becomes a URL");
  - *Members* (textarea, required; prompt: "one per line: name — @github-username; at
    least two");
  - *What will you build, and what question does it help with?* (textarea, required);
  - *Which data will it use?* (textarea).

**Check:** `python3 -c 'import yaml,sys; [yaml.safe_load(open(f)) for f in sys.argv[1:]]' .github/ISSUE_TEMPLATE/*.yml`
if PyYAML is installed. After merging, **Issues → New issue** lists the four forms.

## R5. `.github/pull_request_template.md`

```markdown
Closes #

**What this changes:**

**Spec items implemented** (from SPEC.md → Behaviour):

**Preview:** https://raw.githack.com/mikrishnan/kant-lab/<commit-id>/<path-to-the-page>

- [ ] I opened the preview and checked each item above
- [ ] The browser console shows no red errors
- [ ] If behaviour changed, SPEC.md changed in this pull request
- [ ] Every changed file is inside one folder — or the description says why not

**Not checked / needs a second look:**
```

## R6. `data/README.md`

A table with one row per file in `data/`, and columns *File*, *Contents*, *Globals it
defines*, *Produced by*, and *Read by*.

- Get *Globals* from `grep -n '^const \|^function ' data/*.js`. Read the file header to
  see which are public; the header comments in each file document the shapes, so link
  to those rather than restating them.
- *Produced by*: `phases-adickes.js` is hand-written. The other three are generated, by
  the commands in the root `CLAUDE.md`. After R8, `tradition-meier.js` is hand-curated.
- *Read by*: get the current consumers from
  `grep -rn --include=*.html 'src="[./]*data/' . | grep -v '^./Individuals/'`. As of
  6 October 2026 they are:
  - `baumgarten-reader` — `metaphysica-17`, `phases-adickes`,
    `reflexionen-17-18-baumgarten`;
  - `meier-reader` — `phases-adickes`, `reflexionen-16-meier`, plus `tradition-meier`
    after R8.

Below the table, give the three rules from "Changing shared data" in
[maintaining.md](maintaining.md): generated files are not hand-edited; data files only
gain fields; global names are unique across `data/`. Add a fourth: a pull request that
makes a new tool read a data file adds that tool to the file's *Read by* cell.

## R7. Root `CLAUDE.md`: new layout, platform-neutral instructions

Edit [../CLAUDE.md](../CLAUDE.md):

- **Layout table.** Add rows for `README.md` (the contributor workflow), `groups/`
  (working groups' playgrounds; rules in `groups/_template/CLAUDE.md`), `docs/`
  (maintainer notes) and `.github/` (CODEOWNERS, issue forms, PR template). Reword the
  `Individuals/` row so that it no longer says "everything else here is team work" —
  `groups/` is team work too, at a different tier.
- **The verification paragraph** (currently "syntax-check a script … osascript" and
  "Note there is **no `node` on this machine.**"). That describes one Mac. Claude Code
  cloud sessions run Linux, and the maintainer's Linux machine has neither `node` nor
  `osascript`. Replace it with: use `node --check file.js` where `node` exists; on macOS
  without `node`, use the `osascript` one-liner, keeping it and its `const`→`var`
  caveat; to check an app's inline `<script>`, extract it to a `.js` file first, after
  stripping HTML comments (works.md explains why); and where neither tool exists, say so
  in the pull request rather than skipping the check silently. Change "`open` the file"
  to "open it in a browser (`open` on macOS, `xdg-open` on Linux)".
- **"Shared conventions"** — add a short **Working groups** paragraph: one folder per
  group under `groups/`, each with `SPEC.md` as its source of truth, loading data from
  `../../data/`, never writing outside its folder. Point to `groups/_template/CLAUDE.md`
  for the full rules.
- **Data table** — add the `data/tradition-meier.js` row (R8), and mark it hand-curated,
  as `phases-adickes.js` is.
- **"Known gaps"** — update the `TRADITION` bullet to say that it lives in
  `data/tradition-meier.js`, and that contributions are welcome through pull requests.
- **"Git"** — replace "Single `main` branch, no CI" with: `main` is protected; every
  change arrives by pull request; pull requests are squash-merged, so the pull request
  title becomes the commit message, and it should be short and describe the scholarly
  content rather than the code.
- **"Regenerating the generated data"** — leave alone until R9.

## R8. Move `TRADITION` out of the Meier reader into `data/tradition-meier.js`

So that participants can add parallel passages without touching app code.

- **Source.** In [../meier-reader/meier-reading-guide.html](../meier-reader/meier-reading-guide.html)
  the block is the comment at lines 1080–1083 (`// ── Tradition data ──` …) plus
  `const TRADITION = { … };` at lines 1084–1155. There are 10 keys —
  `1, 10, 14, 15, 115, 155, 292, 353, 362, 414` — and 25 entries. `strata` takes the
  values `wolff | scholastic | aristotle`; `relation` takes `source | parallel | contrast`.
  Re-check the line numbers before cutting.
- **The new file.** `data/tradition-meier.js` opens with a header comment giving: that it
  is hand-curated, not generated, so edit it directly; the shape,
  `{ paraNum: [ { strata, author, source, relation, text } ] }`, with the allowed values
  of `strata` and `relation`; and how to add an entry. Then the `const TRADITION = {…};`
  block, moved verbatim except for one change: **add a trailing comma after every entry
  and every key's closing `]`**, so that appending an entry never edits an existing
  line. Keep the existing two-lines-per-entry layout.
- **The reader.** Delete lines 1080–1155 from the reader, and add
  `<script src="../data/tradition-meier.js"></script>` after the two existing data
  includes at lines 1070–1071, mentioning it in the HTML comment above them. Change
  nothing else. `TRADITION` is read at about lines 1454 and 1667 (numbered before the cut); those
  references stay as they are.
- **Docs.** In [../meier-reader/CLAUDE.md](../meier-reader/CLAUDE.md), the line map's
  `TRADITION` row (`951–1022`, already stale) should point to the data file instead.
  Re-check the rest of that line map, since deleting 76 lines shifts everything below
  them. Update the `TRADITION` mentions near lines 81 and 196 to match. Add the R7 rows
  in the root `CLAUDE.md`, and the R6 row in `data/README.md`.
- **Check:**
  1. With the trailing commas ignored, the moved block is textually identical to the
     original. Compare against `main`, before the change, adjusting the range if `main`
     has moved:
     `diff <(git show main:meier-reader/meier-reading-guide.html | sed -n '1084,1155p' | sed 's/,$//') <(sed -n '/^const TRADITION/,/^};/p' data/tradition-meier.js | sed 's/,$//')`
     should print nothing.
  2. The new file passes a syntax check (R7's method).
  3. In a browser: § 1 shows three tradition entries (Wolff, Aquinas, Aristotle); § 10
     shows two; § 2 shows the "no entries yet" placeholder; the strata filters and the
     annotation search on the Tradition tab still work; and the console is clean.

## R9. Commit the text conversions — *blocked on O12*

O12, on a Mac, produces `Textfiles/txt/*.txt` and confirms that they regenerate `data/`
byte-for-byte. Once that is merged:

- In the root `CLAUDE.md`'s "Regenerating the generated data", make the pipelines read
  `Textfiles/txt/<name>.txt` directly. Move the `textutil` lines into one note: *"Only
  when an RTF changes, on a Mac: reconvert with `textutil -convert txt -output
  Textfiles/txt/<name>.txt <rtf>`, and commit the .txt alongside the .rtf."*
- In [../Textfiles/CLAUDE.md](../Textfiles/CLAUDE.md), add `txt/` to the file table and
  the "Convert first" section, explaining that the `.txt` files are what the extractors
  read, and why they are committed: the extractors depend on `textutil`'s exact output,
  including U+2028 line separators, which other RTF converters do not reproduce.
- **Check:** on Linux (a cloud session will do), run all three pipelines from
  `Textfiles/txt/`, then `git diff --exit-code data/`. The diff must be empty. If it is
  not, stop and report it; do not commit regenerated data.

## R10. `Individuals/README.md`

Add one short section, *How changes arrive now*, saying three things: an upload or edit
on github.com now offers only "create a new branch and start a pull request"; you can
merge your own pull request at once; and published readings and PDFs do not belong
here, because the site is public. Leave the rest of the file as it is.

## R11. `works.md`

- Add a line at the top pointing to `README.md`, `docs/maintaining.md` and these two
  todo files.
- "It holds sixteen participant folders" is wrong. There were 14 on 6 October 2026;
  recount with `ls -d Individuals/*/ | wc -l` after fetching.
- Add the TRADITION move (R8) to "What happened", and leave the other open items as
  they are.

---

## Order and dependencies

| Task | Depends on | Unblocks |
| --- | --- | --- |
| R1–R8, R10, R11 | — | O7 (the ruleset needs CODEOWNERS on `main`), O10, O11 |
| R9 | O12 | — |

**When this lands, the pull request should say** which checks were run in a real
browser and which only by syntax check. The root `CLAUDE.md`'s "verification is visual"
still applies.
