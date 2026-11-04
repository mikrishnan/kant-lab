# Individuals

Work by individual Kant Lab participants, as distinct from the shared tools at the
root of this repository.

Everything above this directory — the Logic Portal, `data/`, `scripts/`, `Textfiles/` —
is the seminar's common work, kept by its one team, the Kant Lab. This directory is the
other kind. A participant's own
project lives in a folder of its own here, under their name, and belongs to them.

```
Individuals/
  <your-name>/
    ...whatever your project needs
```

Here are participants' own readers, finders and explorers, alongside some demo files.
The Logic Portal reads several of them, and its `catalogue.js` lists which; nothing else
here is expected to look like the portal. The Porphyrian-tree pages were early
experiments, retired on 4 November 2026: each now says so, and links to the page as it
last stood.

## How changes arrive now

Every change to the repository, this folder included, now goes through a pull request.
When you upload or edit a file on github.com, the only option offered is **Create a new
branch for this commit and start a pull request**. Take it, and on the pull request's
page press **Squash and merge** — nobody else needs to approve a change that touches
only your own folder. The root [README](../README.md) explains why, and how the shared
tools and the shared data are run.

The site publishes this folder along with everything else, so **published readings,
books and other PDFs do not belong here.** Course readings belong on the course site.

## Conventions

**Your folder is yours.** Nobody else reorganises, renames or tidies it, this README
included. What follows is advice for your own benefit, not a standard anyone will
enforce on your work.

**A space in a name becomes `%20` in a URL.** The whole repository is published
through GitHub Pages, so `Individuals/Nik Land/arbor-porphyriana.html` is reachable
only as `Individuals/Nik%20Land/arbor-porphyriana.html`. That works in a browser but
breaks whenever the link is pasted somewhere that does not escape it — a chat message,
an email, a footnote. The three shared apps were renamed for exactly this reason. If
you are making a new folder or file and want a link you can paste anywhere, a hyphen
where you would have put a space is worth it. If you would rather rename an existing
one, that is your call to make, and the link you have already shared will stop working
when you do.

**Building on the shared data.** If your project uses the generated files in
[../data/](../data/), read them with a relative `<script src>` — from your folder,
`../../data/metaphysica-17.js` — the way the [Logic Portal](../logic-portal/) does, rather
than copying the file. Those are machine-extracted and a copy goes stale the
next time its extractor runs.
