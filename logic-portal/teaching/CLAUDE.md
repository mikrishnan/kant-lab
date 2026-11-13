# Teaching tools

This folder holds small tools for teaching with the Logic Portal, one folder each.
[README.md](README.md) describes them for a human.

## Scope

- **Change only the tool's own folder**, plus its entry in `teaching.js` and its row in
  `README.md`. Never edit the portal (`../index.html`, `../catalogue.js`,
  `../handout-tray.js`), `data/`, a study, or another tool. If a tool cannot be built
  without a change to the portal, stop and say so: that change is a pull request of its
  own, and the people who use the portal for everything else review it.
- A tool is for teaching. Do not generalise one into the portal on your own initiative.

## How a tool draws on the portal

- **Through the portal in a frame,** as the studies do. The portal's script is one closed
  function; the only global is `window.PORTAL`: `P` and `TEXTS` for the passages, `BYID`
  for a passage by its `ref` (`textKey:id`), and `trFor`, `trState` and `trEntry` for the
  English. The class screen's `index.html` loads `../../index.html` in a frame, waits for
  `#loading` to be hidden, and reads `frame.contentWindow.PORTAL`. Do not copy the
  portal's code; it changes every week.
- **Link to the portal by address:** `../../index.html#p=<ref>&rt=conn` for a passage,
  `#read=<textKey>&at=<id>` for a place in a text, `#q=<words>` for a search.
- **The handouts, read only.** `handout-tray.js` keeps every handout in this browser in
  `localStorage['kantlab-handouts-v1']`, as `{ v, current, collect, handouts }`
  (`current` the `id` of the one open), each `{ id, name, made, items, trash, published }`,
  the shapes its comments give. Handouts are no longer shared as a file: `handouts/class.json`
  and any published `handouts/<name>.json` are left from before, and nothing reads them now. A tool reads these
  and never writes them. The `storage` event tells a tool when the portal, in another
  window, has changed them. Margin notes (`marks` with `k: 'mn'`) are their maker's own:
  never show them.
- **The class password.** The handouts are the class's: a tool that shows them loads
  `../../handouts/lock.js` and shows nothing until `KANTLAB_LOCK.remembered()` or
  `KANTLAB_LOCK.ask()` gives it the key. A file sealed with it (`kind: 'kantlab-handout-locked'`)
  opens with `KANTLAB_LOCK.open(d)`. Never write the
  password into a file, a commit, a pull request or a log.
- Pages under `logic-portal/` share one origin with the portal, so all of this works
  on GitHub Pages and on a local server, but not from a `file://` address.

## Attested vs. inferred

As in the root `CLAUDE.md`. The English is a machine translation: say so wherever it is
shown, and name the translator whose method it follows, as the portal does. A text that is
OCR says so, with the share of words right that its `accuracy` gives. A Reflexion's dating
is Adickes' phase with the portal's years beside it, labelled as his.

## The repository is public

No student's name, and nothing from Canvas. Markdown here is published through Jekyll: no
double opening curly brace, and no opening curly brace followed by a percent sign.
