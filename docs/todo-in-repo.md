# In-repo tasks for the working-group rollout

The in-repo half of the rollout landed on 6 October 2026; [../works.md](../works.md)
records what it changed. One task is left, because it cannot start until something is
done on a Mac. The out-of-repo half — mostly GitHub settings — is
[todo-outside-repo.md](todo-outside-repo.md). Delete this file once R9 is done.

## R9. Run the extractors from committed text conversions — *blocked on O12*

Every extractor in `scripts/` starts from `textutil` output, and `textutil` exists only
on macOS. O12, on a Mac, commits that output as `Textfiles/txt/*.txt` and confirms that
it regenerates `data/` byte-for-byte. Once that is merged:

- In the root [CLAUDE.md](../CLAUDE.md), "Regenerating the generated data":
  - make each pipeline read `Textfiles/txt/<name>.txt` directly, in place of the
    `textutil … /tmp/…` step. The `/tmp` JSON intermediates can stay;
  - replace the paragraph that says "regenerating needs a Mac" and links here with one
    note: *"Only when an RTF changes, on a Mac: reconvert it with `textutil -convert txt
    -output Textfiles/txt/<name>.txt <rtf>`, and commit the .txt alongside the .rtf."*
- In [Textfiles/CLAUDE.md](../Textfiles/CLAUDE.md), add `txt/` to the file table and to
  the "Convert first" section. Explain that the `.txt` files are what the extractors
  read, and why they are committed rather than produced on demand: the extractors depend
  on `textutil`'s exact output, including the U+2028 line separators `parse_baum.py`
  splits on, which other RTF converters do not reproduce.
- **Check:** on Linux — a cloud session will do — run all three pipelines from
  `Textfiles/txt/`, then `git diff --exit-code data/`. The diff must be empty. If it is
  not, stop and report it, and do not commit regenerated data. Read each extractor's
  report on the way; `parse_baum.py`'s should end in `clean`.
- Then delete this file, and take the link to it out of [../works.md](../works.md) and
  [todo-outside-repo.md](todo-outside-repo.md).
