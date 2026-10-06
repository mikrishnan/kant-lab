# Work in progress

Handoff notes, written 3 October 2026 and updated 6 October 2026. Read this alongside
the root [CLAUDE.md](CLAUDE.md), which is the standing description of the repository —
this file is only the state of play.

How the repository is now run — working groups, specs, pull requests, review — is in
[README.md](README.md); keeping it in order is in
[docs/maintaining.md](docs/maintaining.md). What is left of that rollout is in
[docs/todo-in-repo.md](docs/todo-in-repo.md) and
[docs/todo-outside-repo.md](docs/todo-outside-repo.md).

## 6 October 2026: the working-group rollout

Made on the `jweirich/spike/revamp-layout` branch, for review before it reaches `main`.

- **The workflow, written down.** A root [README.md](README.md) for participants;
  [docs/maintaining.md](docs/maintaining.md) for the professor; the two todo files.
- **Two tiers on the site.** [index.html](index.html) now lists *Tools*, then *Works in
  progress* (dashed, and empty until the first group exists).
- **[groups/](groups/)**, with [groups/_template/](groups/_template/): a `README.md`, a
  `SPEC.md` skeleton, a `CLAUDE.md` of rules for sessions in a group folder, and a
  starter `index.html` in the house style.
- **[.github/](.github/)**: `CODEOWNERS` (professor by default, `Individuals/` unowned,
  a line per group), four issue forms (Proposal, Bug, Text error, New working group),
  and a pull request template.
- **[data/README.md](data/README.md)**: every data file's globals, how it is produced,
  and who reads it, with the rules for changing shared data.
- **`TRADITION` moved out of the Meier reader** into
  [data/tradition-meier.js](data/tradition-meier.js), so that passages can be added
  without touching app code. The moved block is identical to the original apart from
  eleven added trailing commas. The Tradition tab was exercised in headless Chrome: all
  ten §§ show the same entry counts as before, § 2 shows the placeholder, the strata
  filters and the annotation search work, and the console is clean. It was **not**
  clicked through by hand.
- **The root `CLAUDE.md` no longer assumes one Mac.** Its syntax-check advice covers
  `node`, `osascript` and `gjs`, and it documents the Jekyll pitfalls of the Pages
  build. `meier-reader/CLAUDE.md`'s line map, which had drifted by more than a hundred
  lines, was redone.

**Nothing enforces any of this yet.** `CODEOWNERS` does nothing until the ruleset in
O7 of the outside-repo list exists, and every participant can still push to `main`.

## 3 October 2026

Six commits, oldest first:

| | |
| --- | --- |
| `a8141d3` | Moved the *Metaphysica* and its Reflexionen out of the Meier reader. The "Baumgarten · Metaphysica" tab is gone; the Baumgarten reader gained the whole Reflexionen panel, including lemma highlighting that jumps from a card to the annotated words in the Latin. |
| `f1ae462` | Renamed the three app directories to drop their spaces: `baumgarten-reader/`, `meier-reader/`, `porphyrian-tree/`. |
| `1ccadd9` | Added `Individuals/.gitkeep` (later removed — see below). |
| `02f43c0` | Added the Jäsche *Logik* (AA IX:3–150) to `Textfiles/` as `Vol9Logic.rtfd`. |
| `47130d7` | Rewrote `Textfiles/CLAUDE.md`, which had listed two of the then seven transcriptions and was wrong about how the Baumgarten data is produced. |
| `bf2cb4c` | Documented `Individuals/`, and corrected the "708 Reflexionen" breakdown in three docs. |

## Open items, most important first

### 1. Scroll problems in the Baumgarten reader

**Reported from the live site on 3 October 2026, and not yet diagnosed.** The symptom
has not been characterised beyond "scroll problems" — before changing anything, find
out which scroll is meant, since the app has several that could be at fault
independently:

- the main text column (`#text-canvas` / `#text-inner`);
- the Reflexionen panel's own scroller (`#refl-scroll`), which is a separate
  scrolling region beside it;
- the TOC sidebar (`#toc-scroll`);
- the *programmatic* scrolling, which is a different thing again — `scrollToPara()`
  is the single navigation entry point, and `watchParasInView()` is what moves the
  panel and the TOC highlight as the text scrolls. A jump that overshoots, a panel
  that rebuilds underneath you, or a § that will not stay put are all this code
  rather than CSS.

A likely place to look first is the interaction between those last two: arriving at a
§ *from* a card calls `scrollToPara(num, false)` precisely so the panel is not rebuilt
under the reader, and `watchParasInView()` firing during that programmatic scroll
would defeat it.

This is the first real bug found in the new panel and should come before anything
cosmetic.

### 1b. The rest of that panel is still unverified

Roughly 969 lines of new Reflexionen-panel UI went live without a visual check; the
3 October look at the live site surfaced the scrolling but did not clear the rest.
The inline scripts of all three apps do parse (see the syntax-check note below), but
that only rules out typos. Still unconfirmed, and all of it in the Baumgarten reader:

- **the lemma chip — explicitly not checked yet.** Where the AA names the exact Latin
  words a note attaches to, the card shows them as a small clickable pill in
  guillemets (`»quicquid est, illud«`); clicking it should scroll to those words and
  tint them. This is the newest and likeliest-to-misbehave code, and it is **rare** —
  only 82 of the 2967 notes carry a lemma, so most cards have no pill at all. To find
  one, go to **§ 11** (Refl. 3489, `»quicquid est, illud«`) or **§ 12**, which has
  three including `»Posito — quod«` — that one is the better test, being an
  abbreviated lemma where the AA gives only the first and last words and the code has
  to find the span between them;
- a **phase chip** (e.g. `κ−σ`), which should open Adickes' note on that phase;
- the drag-resizer, the `×` close and the `Reflexionen` button that reopens the panel;
- the "belong to no §" view, from the button at the foot of the panel;
- whether the browser console is clean.

Open it with `open baumgarten-reader/baumgartenreading-guide.html`, or at
<https://mikrishnan.github.io/kant-lab/baumgarten-reader/baumgartenreading-guide.html>.

### 2. Spaces remain inside `Individuals/`

The three shared app directories were renamed to kill the `%20` in their Pages URLs.
Five participant folders still have spaces — `Harper Sun`, `Kavya Vaidyanathan`,
`Nik Land`, `Sophia Wyatt`, `eric wang` — as do about a dozen files inside them.

**These were deliberately left alone.** They are other people's work, and a rename
breaks whatever link the owner has already shared. `Individuals/README.md` explains the
tradeoff and leaves the decision to each owner. Do not rename them on your own
initiative; the repository owner may decide otherwise, in which case it is their call.

### 3. Small, cosmetic

- `baumgartenreading-guide.html` lacks the hyphen its siblings have
  (`meier-reading-guide.html`). Renaming it would change that URL a second time.
- The line-range map in `baumgarten-reader/CLAUDE.md` ends its last row at 1960; the
  file now runs to 1984. The other anchors in that map were checked and are right.

## Things that will save a fresh session time

**Fetch before you believe the working tree.** Participants push to `Individuals/`
through the GitHub web UI, often many commits at a time. A clone can be dozens of
commits behind, and `Individuals/` looked *empty* for most of the last session because
of exactly that. It held 14 participant folders on 6 October 2026.

**Check which JavaScript engine you have.** The machines differ: the Mac these notes
were first written on has no `node`, the Linux machine of 6 October has `gjs` and
Chrome but no `node`, and cloud sessions are Linux. The root CLAUDE.md lists the options. Two traps, both hit
on 3 October:

- With `osascript`, `eval` does not leak `const`/`let` to the enclosing scope. Rewrite `^const ` to
  `var ` first — `sed 's/^const /var /' data/foo.js > /tmp/foo.js` — then `eval` the
  rewritten file and the values are visible.
- When pulling the inline `<script>` out of an app to syntax-check it, **strip HTML
  comments first**. Several `<script src>` tags sit inside explanatory `<!-- -->`
  blocks, and a naive regex captures comment prose as JavaScript, producing two
  convincing but entirely fake `SyntaxError`s.

**These numbers were verified against the data, not the docs.** No need to recount:
2967 Reflexionen; `REFLM_BY_PARA` has 726 keys, of which 655–662 are §§ AA XVII does
not print; 718 printed §§ carry at least one note; 708 entries have no § at all,
breaking down as 459 front matter / 91 *loses Blatt* / 107 another handbook (104 of
them Eberhard) / 51 with no category flag whatsoever. `MET_PARAGRAPHS` has 804 entries,
`aa` populated on 801 (§§ 1–3 stand before the first `― 24 ―` marker) and `ed`, the
1757 pagination, on all 804; 710 glosses across 307 §§. `MEIER.paras` is complete at
563 of 563, none empty.

**The `MEIER` blob cannot be regenerated.** Every other data file has an extractor in
`scripts/`; that one does not, so it cannot be rebuilt from `Textfiles/Meier.rtf`. Edit
it programmatically or with a targeted replacement, and never pretty-print it.

## The obvious next piece of work

`Textfiles/Vol9Logic.rtfd` — the Jäsche *Logik* — is in the repository and nothing
consumes it. It is the natural next thing to build on: the *Logik* is Kant's own
lectures on the very Meier *Auszug* the Meier reader already carries, Jäsche's Vorrede
saying outright that Kant had used Meier's compendium without interruption since 1765.
Nothing has been designed or decided about what to do with it. It is also the natural
first dataset for a working group to build — see "Working groups" in the
[README](README.md).
