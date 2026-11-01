# Working group: GROUP NAME

Instructions for every Claude session working in this folder. The root
[CLAUDE.md](../../CLAUDE.md) still applies; these rules narrow it.

1. **Only create or modify files inside this folder.** If a request needs a change
   anywhere else — `data/`, another tool, a root file, another group's folder — do not
   make it. Say what would be needed in the pull request description instead.
2. **Implement what the request names and nothing more.** If the request is unclear,
   ask rather than guess. There is no spec to follow or update; if this folder has an
   old `SPEC.md`, leave it as it is.
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
7. **The pull request description** names the issue it closes, if there is one, says
   what changed and how to try it, and says plainly what was not checked in a browser.
8. **Bringing in a prototype from `Individuals/`** is a copy, never a move: leave the
   original exactly as it is. Copy it to `index.html` as it stands, without restyling
   or fixing it in the same pull request; the one exception is rule 4, so anything it
   has pasted in from `data/` becomes a `<script src>` include. Anything the page
   infers without marking it as an inference, and anything you are unsure the author
   intended, goes in the pull request description as a question rather than being
   fixed.
