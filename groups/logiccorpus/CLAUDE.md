# Working group: Logic Corpus

Instructions for every Claude session working in this folder. The root
[CLAUDE.md](../../CLAUDE.md) still applies; these rules narrow it.

1. **Only create or modify files inside this folder.** If a request needs a change
   anywhere else — `data/`, another tool, a root file, another group's folder — do not
   make it. Say what would be needed in the pull request description instead.
2. **[SPEC.md](SPEC.md) is the source of truth.** Implement what the request names and
   nothing more. If the request contradicts `SPEC.md`, say so rather than guessing which
   one is right. If the tool's behaviour changes, update `SPEC.md` in the same pull
   request. Never renumber Behaviour items; strike a dropped one through instead.
3. **The tool is one self-contained `index.html`.** No build step, no framework, no
   npm, no dependencies except Google Fonts. Follow "Shared conventions" in the root
   `CLAUDE.md`: the palette and fonts from the `:root` block, the data-first script
   layout (data, state, render, events, init), and attested vs. inferred.
4. **Shared data is loaded, never copied.** Use
   `<script src="../../data/FILE.js"></script>` before the tool's own `<script>`. Never
   copy a data file, or paste its contents, into this folder, and never edit `data/`.
   [data/README.md](../../data/README.md) lists the globals each file defines.
5. **A dataset this group is building** lives in this folder as its own `.js` file,
   defining globals whose names no file in `data/` already uses, until it is promoted
   to `data/`.
6. **File names use hyphens, not spaces.** Do not add PDFs or other binaries.
7. **The pull request description** names the issue it closes, lists the Behaviour items
   it implements, and says plainly what was not checked in a browser.
8. **Bringing in a prototype from `Individuals/`** is a copy, never a move: leave the
   original exactly as it is. Copy it to `index.html` as it stands, without restyling
   or fixing it in the same pull request; the one exception is rule 4, so anything it
   has pasted in from `data/` becomes a `<script src>` include. Then draft `SPEC.md` from
   what the page actually does: its Sources, its Attested vs. inferred section, and one
   Behaviour item for each thing a reviewer can check by clicking. Anything the page
   infers without marking it as an inference, and anything you are unsure the author
   intended, goes under Open questions rather than being fixed.
