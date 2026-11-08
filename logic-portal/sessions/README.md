# Class sessions

Each `.json` file here is one class session saved from the Logic Portal: the passages a class
looked at together, in order, with its notes and questions, a title, a date, the link to the
class's discussion in Canvas, and the investigations it began or added to. The portal lists
them under **Read** and opens one at `…/portal/?session=<name>`, where `<name>` is the file's
name without `.json`. An investigation is gathered from every session here that names it:
`…/portal/?investigation=<id>`, and all of them at `…/portal/?investigate`.

A session is saved from the portal itself: the header's **Session** button, then **Organize
and save**, then **Save for the class**, which opens GitHub with the file filled in. To take a
session down, delete its file. The repository is public, so a session holds no student's name
and no comments: comments live in the discussions it links to.

The file's shape, written by `class-sessions.js`:

```json
{ "kind": "kantlab-session", "v": 2, "title": "Class, 2 November 2026", "date": "2026-11-02",
  "discussion": "https://…",
  "items": [
    { "ref": "wiener:wiener-s06-003", "cite": "AA 24:844", "author": "Kant", "work": "Wiener Logik", "note": "…" },
    { "kind": "note", "text": "Does general logic need the infinite judgment?" },
    { "kind": "cluster", "cluster": "error", "title": "Error",
      "items": [ { "ref": "meier:p101", "cite": "§ 101, AA 16:…", "author": "Meier", "work": "Auszug aus der Vernunftlehre", "added": "2026-11-02" } ] } ],
  "investigations": [
    { "id": "infinite-judgment", "title": "Is the infinite judgment a third quality?", "items": [1, 2],
      "about": "…", "discussion": "https://…", "continues": true } ] }
```

- `items` are in the order the class met them. A passage's `ref` is its address in the portal
  (`textKey:id`, as in a `#p=` link); `cite`, `author` and `work` let the file be read without
  the portal. `note` is optional.
- A cluster is one item, named by its `cluster`, the name of its file in [../clusters/](../clusters/).
  Its `items` are the passages it had when the session was saved. The session's page shows the
  cluster as it is now, from its file, with its passages numbered under its own number (3.1, 3.2),
  and says which were added after the session's date and how many have been taken out since. Where
  the cluster has no file yet, it shows these.
- An investigation names its items by number (the first is 1). `id` is the same in every session
  that adds to it. `continues` marks one begun in an earlier session. Its title, `about` and
  `discussion` are taken from the latest session that gives them.
