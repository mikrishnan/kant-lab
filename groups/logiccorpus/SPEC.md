# Logic Corpus

*The spec is the source of truth for this tool. Claude builds what it says; reviewers
check the tool against it. When the tool's behaviour changes, this file changes in the
same pull request.*

## Question

From the group's issue ([#17](https://github.com/mikrishnan/kant-lab/issues/17)): "We will iterate on this tool, it will be more efficiently studying the Kantian logical tradition." The group has not yet said more precisely what it will build; the data it will use "will be added to data later".

## Sources

*The texts, with Academy Edition volume and page ranges (e.g. Meier, Auszug, AA 16:5–872).
The files in `data/` the tool reads, and which globals from each — see
[data/README.md](../../data/README.md). Anything the group is transcribing or compiling
itself.*

## Attested vs. inferred

*What does the tool work out for itself — a § assigned by interpolation, a date range
computed from a phase, a match found by a search — and how does the page show that it is
an inference rather than what the edition says? This is the project's one hard rule; see
"Attested vs. inferred" in the root [CLAUDE.md](../../CLAUDE.md).*

## Behaviour

*Numbered statements, each one checkable by clicking. A reviewer works through these to
approve a pull request, so write each as something that is either true or false of the
page in front of them.*

*Items are never renumbered. When one is dropped, strike it through and say why —
`~~3. …~~ (dropped: superseded by 7)` — so that a pull request saying "implements item 4"
keeps its meaning.*

1. *Example:* Clicking a § number in the sidebar scrolls the text to that § and
   highlights it.

## Out of scope

*What the tool deliberately does not do, so nobody builds it by accident.*

## Open questions

*Decisions the group has not made yet. Move each one into Behaviour or Out of scope once
it is settled.*
