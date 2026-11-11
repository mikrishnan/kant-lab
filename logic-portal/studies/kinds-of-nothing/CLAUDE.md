# A study: the kinds of nothing

This folder is a research sandbox beside the Logic Portal. It builds tools for one
question, the kinds of nothing in Baumgarten and Kant, and it draws on the portal without
changing it. [README.md](README.md) describes it for a human.

## Scope

- **Change only files in this folder.** Never edit the portal (`../../index.html`,
  `../../catalogue.js`, anything else in `logic-portal/` outside `studies/`), `data/`,
  or another study. If a feature cannot be built without a change to the portal, stop
  and say so: that change is a separate pull request to the portal, and the people who
  use the portal for everything else review it.
- Features here are for this one question. Do not generalise them into the portal on
  your own initiative.

## How the page draws on the portal

- **The portal's code cannot be called from here,** with one exception. Its script is one
  closed function, so nothing in it is a global except `window.PORTAL`, which it exposes for
  `class-sessions.js`. The queue reads the portal's search through that, in the portal
  shown on its right (see *The queue* below). Do not copy the portal's code in either; it
  changes every week.
- **Link to it by address.** Every passage opens in the portal, in the pane on the right
  or in a tab of its own. The addresses, all relative to this folder:
  - a textbook §: `../../index.html#read=baumgarten&at=p7` (or `meier`);
  - a Reflexion: `../../index.html#refl=3711`;
  - a passage of any other text: `../../index.html#read=<textKey>&at=<id>`;
  - a page of the Academy edition: `../../index.html#aa=29:792`;
  - a search: `../../index.html#q=<words>`.
  `portalHref()` in `index.html` builds these. A passage's `ref` is `textKey:id`, as in
  the portal's `#p=` links and a class session's items.
- **Load the corpus with `<script src>`, never a copy.** `../../../data/` for the shared
  data, `../../catalogue.js` for the list of every text the portal loads and where its
  file is (`PORTAL_TEXTS`), and the portal's own folders (`../../aa24-ocr/`,
  `../../aa29-ocr/`, `../../published/`) for the rest. The ids the portal gives
  passages: `p<n>` for a § of Meier or Baumgarten, `r<n>` for a Reflexion, and the
  data file's own `id` for a lecture block or a published passage.
- Global names must not clash with the files loaded. `phases-adickes.js` already
  declares `PHASES`, `PHASE_BY_KEY`, `phaseInfo`, `phaseYears`, `SUPERSCRIPT`,
  `EXPONENT_IS_PHASE` and the `ADICKES_` notes. The study's own files use `STUDY_`.

## The study's record

- **`dossier.js` holds only what a participant decided.** Add an entry only when a
  participant asks, with their GitHub username and reason, in the field order its
  header gives. Never add one because a search or a feature found it. Candidates from a
  search go in a file of their own, marked as found, as `starting-points.js` is.
- **`journal.md` gets an entry for every feature.** When a feature is done, draft one:
  the date, what was asked for, what it showed, what it could not do, and anything you
  were unsure of. Then ask the participant to correct it in their own words, since
  whether a tool helped is theirs to say. Write it in the voice of the participants, not
  of Claude.
- **Attested vs. inferred**, as in the root `CLAUDE.md`. Adickes' phase expressions stay
  verbatim (`phRaw`). A placing in time worked out from a phase, a count, a match or a
  ranking is drawn dashed and labelled as the page's own. The AA II, AA XXIX and B
  texts are OCR, so say so wherever they are quoted.
- **The repository is public.** Use GitHub usernames, not names, and put no readings or
  PDFs here.

## The queue

`queue.html` is the queue, `queue-config.js` where it keeps its flags. The README's
*The queue* describes both for a human.

- **The flags live in `kant-lab-seminar/queues`, a private repository, never here.** Do not
  copy flags, notes or readers' names into this repository: it is public. The one copy here is
  `queue-snapshot.js`, the passages of `queue.json` alone, which the page shows read only to anyone
  without a token. `snapshot-queue.py` makes it, drops `by` from the record of how the queue was
  made, and takes no flag file. Refresh it when asked, after passages are added; never hand-edit it.
- **The page writes only its own reader's file** (`flags/<login>.json`), and adds to
  `queue.json` only by appending. Numbers never move, so nothing takes a passage out.
- **The token goes only to `https://api.github.com`.** Never add a way to point the page at
  another address, by a parameter or otherwise: a link could then collect tokens.
- **It reads the portal through `window.PORTAL`** in the frame on its right: `S.q` and
  `S.loc` for the search, `runQuery()` for what it finds, `P` and `TEXTS` for the passages,
  and `TEXTS[…].entries` and `.groups` for a Reflexion's phase and filing. It changes
  nothing there. If the portal renames any of these, "Add passages" says so; the repair is
  here, not in the portal.
- **Attested vs. inferred** holds here too. "Readers differ" is the page's own finding and
  is drawn dashed. A note filed only by the AA's block heading, or by its handbook page, has
  that filing drawn dashed, since its own locus note does not say so.
- **Testing it** needs the real repository and a token. Use a queue folder of its own,
  `queues/test-<something>/`, by changing `queue` in a scratch copy of the config, and
  delete that folder afterwards. Never test against `queues/nihil-negativum/`.

## House style and checks

- The portal's palette and fonts, from the `:root` block in `index.html`.
- Data first, then state, builders, wiring and an init call, as in the root `CLAUDE.md`.
- Before a pull request: a syntax check of the page's script, then open the page and
  click an item. The portal should open on the right at that passage, and the console
  should show no errors. Say in the pull request which of these you did.
- No Markdown file here may contain a double opening curly brace, or an opening curly
  brace followed by a percent sign. Jekyll fails on either.
