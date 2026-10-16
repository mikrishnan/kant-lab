# Work in progress

Handoff notes, written 3 October 2026 and updated 10 October 2026. Read this alongside
the root [CLAUDE.md](CLAUDE.md), which is the standing description of the repository —
this file is only the state of play.

How the repository is now run — working groups, specs, pull requests, review — is in
[README.md](README.md); keeping it in order is in
[docs/maintaining.md](docs/maintaining.md). What is left of that rollout is in
[docs/todo-in-repo.md](docs/todo-in-repo.md) and
[docs/todo-outside-repo.md](docs/todo-outside-repo.md).

## 9–10 October 2026: student owners for the readers, and their specs

The Baumgarten and Meier readers were handed to Sophia Wyatt (@sophia-wyatt) and Maria
(@mari637-pixel), together with `data/`, `scripts/` and `Textfiles/`: working out how to
handle the data is meant to be their work. `.github/CODEOWNERS` gained a line for each of
those five folders, and the docs that said the professor approves the tools now say who
does. [docs/maintaining.md](docs/maintaining.md) has a new section, *Tools with student
owners*, on handing over a tool and taking it back.

The pipeline's commands stay in "Regenerating the generated data" in the root
`CLAUDE.md`, so that every session sees them. A pull request that changes them updates
that section too, and so needs the professor's approval as well as an owner's; the
section now says so. The ruleset on `main` (O7) is active, so `CODEOWNERS` is enforced.

**Each reader has a `SPEC.md`**, drafted on 10 October from what the page did, with
every Behaviour item checked by driving the page in headless Chrome (not clicked through
by hand). Items the page does not satisfy are marked **Fails at present**. The owners'
first job is to review them. The drafting turned up several things the specs record as
Open questions:

- **Baumgarten:** the scroll problem, now diagnosed (item 1 below); the page's
  `lang="la"` making the font show every upright u as v, German included; and ten
  Reflexionen tagged `no § stated` whose own locus note names a §, most of them with
  the end of their entry header run into the text (about 40 entries have that debris).
- **Meier:** 6 of its 9 unfound lemmata are missed only because the text has
  non-breaking spaces; two blocks in the panel are headed `§§ 1–5` though the AA gives
  them no §; the Tradition entries carry no edition, page or annotator; and its palette
  is not the suite's.

`meier-reader/CLAUDE.md` had drifted from the code. It said 562 §§ were present (all
563 are), and it described a `switchWork()` that no longer exists. Both are corrected.

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

**Nothing enforced any of this at first.** `CODEOWNERS` does nothing without the ruleset
in O7 of the outside-repo list. The ruleset was active by 10 October 2026.

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

**Reported from the live site on 3 October 2026; diagnosed on 10 October.** The full
account is Open question 1 in [baumgarten-reader/SPEC.md](baumgarten-reader/SPEC.md),
and Behaviour items 26–29 there are what a fix must make pass. In short, there are two
layers:

- `<body>` has `min-height: 100vh` where it needs `height: 100vh`. So `#text-canvas`
  grows to its full ~132,000 px, the document scrolls instead of the canvas, and after
  any jump the top bar, the TOC and the panel are far above the window.
  `watchParasInView()` observes the canvas, which never scrolls, so the panel does not
  follow scrolling. It does fire on any reflow, which resets the panel to § 1.
- With the height fixed (tried in a test browser only), the panel follows scrolling, but
  `watchParasInView()` also fires during `scrollToPara()`'s smooth scroll. A jump to
  § 50 leaves the panel on § 47, and a lemma-chip click rebuilds the panel under the
  reader, which is exactly the case `andPanel = false` was meant to protect. The observer
  has to stand aside while a programmatic scroll is running.

Fix both together. Neither the TOC highlight nor `.focused` moves on plain scrolling;
earlier versions of these notes said the TOC did.

### 1b. The rest of that panel — verified in headless Chrome on 10 October

Everything this item listed as unconfirmed now passes, driven in headless Chrome by
real mouse events and screenshots; it has still not been clicked through by hand. The
lemma chips work: 75 of 82 lemmata are found, as documented, and § 12's abbreviated
`»Posito — quod«` (Refl. 3490) spans the gloss chips correctly. So do the phase chips
and the Adickes overlay, the `×` close, the `Reflexionen` button, the resizer (260–640
px), the "belong to no §" view (708 entries) and the Synopsis, and the console is clean.
Each is now a Behaviour item in [baumgarten-reader/SPEC.md](baumgarten-reader/SPEC.md).

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
