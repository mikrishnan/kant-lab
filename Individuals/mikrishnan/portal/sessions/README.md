# Class sessions

Each `.json` file here is one class session saved from the Logic Portal: the passages a class
looked at together, in order, with a title, a date and (if there is one) the link to the
class's discussion in Canvas or Teams. The portal lists them under **Read** and opens one at
`…/portal/?session=<name>`, where `<name>` is the file's name without `.json`.

A session is saved from the portal itself: the header's **Session** button, then **Save for
the class**, which opens GitHub with the file filled in. To take a session down, delete its
file. The repository is public, so a session holds no student's name and no comments: the
comments live in the discussion it links to.

The file's shape, written by `class-sessions.js`:

```json
{ "kind": "kantlab-session", "v": 1, "title": "Class, 2 November 2026", "date": "2026-11-02",
  "discussion": "https://…",
  "items": [ { "ref": "wiener:wiener-s06-003", "cite": "AA 24:930", "author": "Kant", "work": "Wiener Logik" } ] }
```

`ref` is the passage's address in the portal (`textKey:id`, as in a `#p=` link); the rest is
there so the file can be read without the portal.
