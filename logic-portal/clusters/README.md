# Passage clusters

Each `.json` file here is one cluster saved from the Logic Portal: a named group of passages
on one topic, such as the passages on error, kept to use again. A class session holds a
cluster by its name, as one item, so a passage added to the cluster is in every session that
has it, once the cluster is saved again.

A cluster is made and saved from the portal: the header's **Session** button, then **Organize
and save**, where ticked passages become a cluster and the **Clusters** list saves each one.
**Save for the class** opens GitHub with the file filled in; saving it again downloads the file,
to drop into GitHub's upload page for this folder. The repository is public, so a cluster holds
no student's name.

The file's shape, written by `class-sessions.js`:

```json
{ "kind": "kantlab-cluster", "v": 1, "id": "error", "title": "Error", "made": "2026-11-08",
  "items": [
    { "ref": "meier:p101", "cite": "§ 101, AA 16:…", "author": "Meier", "work": "Auszug aus der Vernunftlehre", "added": "2026-11-08" },
    { "ref": "refl-logik:r2244", "cite": "Refl. 2244, AA 16:…", "author": "Kant", "work": "Reflexionen zur Logik", "note": "…", "added": "2026-11-15" } ] }
```

- `id` is the file's name without `.json`, and the name sessions know it by.
- `items` are in the cluster's order. A passage's `ref` is its address in the portal
  (`textKey:id`, as in a `#p=` link); `cite`, `author` and `work` let the file be read without
  the portal. `note` is optional. `added` is the day the passage went into the cluster: a saved
  session shows the passages added after its own date as added after that class.
- A saved session keeps, in its own file, the passages each of its clusters had when it was
  saved (see `../sessions/README.md`). It shows the cluster as it is here, and says how many of
  those have since been taken out.
