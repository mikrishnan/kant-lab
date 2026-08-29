# Porphyrian tree

Single-file SPA: [porphyrian-tree.html](porphyrian-tree.html) (~2790 lines).
An interactive configurator for genus–species division: you pick the systematic rules
(binary vs. multi-member, essential vs. accidental differentiae, which term sits at the
apex, and so on) and then build a tree that obeys them, or auto-populate one
combinatorially.

Unlike the two readers, this is a **tool, not a text** — most of the file is UI logic
rather than data.

See the [root CLAUDE.md](../CLAUDE.md) for conventions shared across the suite.

## File shape

| Lines | Contents |
| --- | --- |
| 1–1139 | `<head>`, fonts, `:root` palette, all CSS |
| 1141–1413 | Markup: action bar, rules sidebar, Wolff/Leibniz panels, canvases, tooltip |
| 1417–1494 | `CITATIONS` — source passages for named terms |
| 1497–1528 | Tooltip engine |
| 1531–1545 | `getConfig()` — reads the ten radio groups |
| 1547–1675 | Tree state, mutation helpers, differentia handling |
| 1678–2126 | Rendering: `renderBuilder`, `renderLevel`, `buildDivideForm`, individuals |
| 2128–2446 | Start/reset, panel collapse, Wolff Mode, Leibniz Mode |
| 2448–2531 | Implications, click-drag panning |
| 2533–2783 | Thing View and the general-claims derivation |

## The config object

`getConfig()` returns a flat object read live from the radio groups; nothing is cached.
Every renderer takes `cfg` as an argument.

| Key | Values |
| --- | --- |
| `arity` | `binary` \| `multi` |
| `exhaustive` | `yes` \| `no` |
| `exclusive` | `yes` \| `no` |
| `diff_nature` | `essential` \| `accidental` |
| `diff_scope` | `proper` \| `common` |
| `summum` | `being` (Ens) \| `substance` (Substantia) \| `object` (Obiectum, the default) |
| `infima` | `fixed` \| `open` |
| `individuals` | `below` \| `none` |
| `convert` | `strict` \| `loose` |
| `def_form` | `genus_diff` \| `marks` |

Only some of these actually change tree behaviour — `arity` (2 vs. 3+ species inputs),
`summum` (apex label via `summumLabel`/`summumSub`), `infima` (whether "Mark as Infima
Species" terminates a branch or refuses to), and `individuals`. The rest feed
`generateImplications()`, which turns the configuration into a prose list of consequences
and flagged tensions at the bottom of the canvas. **Adding a rule means touching both**:
a radio group in the markup, a key in `getConfig`, and a line in `generateImplications`.

## Tree state

```js
{ id, label, type, parentId, differentia, children: [],
  isInfima, sublabel?, determinations? }
```

`type` is `'summum'` | `'genus'` | `'species'` | `'infima'` | `'individual'` and drives
the colour band (`--genus-color`, `--species-color`, …). `differentia` is the label on
the *edge above* the node, not a property of the node itself; `differentiaChain(node)`
walks up `parentId` to collect the full path.

`treeNodes` is a flat array, `nextId` a counter, `treeHistory` a stack of deep clones
capped at 50. Mutating operations call `snapshotHistory()` first. Two ways back out:
a global `Ctrl`/`Cmd`+`Z` handler that pops the stack and rehydrates `nextId` from the
restored node ids, and a per-node `undoDivision(nodeId)` behind each divided node's undo
button, which prunes all descendants and restores that node to an undivided leaf.

Rendering is full-teardown: every mutation calls `renderBuilder()`, which rebuilds the
whole DOM from `treeNodes`. Don't try to patch nodes in place.

## The two auto-populate modes

Both live in the sidebar behind their own reveal tabs, and both **discard the current
tree**.

- **Wolff Mode** (`populateLeibniz`, `#leibniz-*` ids — the ids predate the rename).
  *Ars combinatoria*: splits every node at every level on the next differentia, so n
  differentiae give 2ⁿ infima species, each realising one full combination. Labels
  abbreviate to initials with `¬` for negation (`A B ¬C`).
- **Leibniz Mode** (`populateLeibnizOnce`, `#lz-*` ids). Each differentia is consumed
  **once**, by the next node off a FIFO queue — n differentiae give n splits and n+1
  infima species. With *complete determination* checked, each individual additionally
  gets `determinations`: `non-D` for every differentia not on its own branch
  (*durchgängige Bestimmung*).

Note the naming mismatch: the DOM ids `leibniz-*` belong to **Wolff Mode** and `lz-*` to
**Leibniz Mode**. Read the ids, not the names, when editing.

## Thing View

`renderThingView()` inverts the tree: instead of the hierarchy, it lists each individual
with the differentiae it instantiates, ordered summum-genus-first. `renderGeneralClaims()`
then computes extension sets per differentia and derives the universal affirmatives
("All X are Y" where ext(X) ⊆ ext(Y), both non-empty) and universal negatives
("No X is Y" where the extensions are disjoint, listed once per unordered pair).
This is the payoff of the whole tool — the point where a configuration of division rules
becomes a set of syllogistic premises.

The view toggle lives in `setView()`; `renderBuilder()` keeps Thing View in sync when the
tree changes underneath it.

## `CITATIONS`

Keyed by **exact node label**: currently `Ens`, `Substantia`, `Obiectum`, `Homo`,
`Socrates`. A node whose label matches gets a `.cite-dot` and a hover tooltip listing
`{ source, passage, gloss }` entries. Adding coverage is just adding keys — the lookup
is a plain `CITATIONS[node.label]`, so it is case- and spelling-sensitive and will not
match a renamed or abbreviated node.

## Gotchas

- The canvas pans by click-drag, but `isInteractive()` exempts anything inside
  `input, button, label, textarea, select, .tree-node, .divide-form, .df-hover-zone, a`.
  New interactive UI on the canvas must match one of those selectors or dragging on it
  will pan the view instead.
- Changing the `summum` radio after a tree exists does **not** relabel the apex; only
  Start Tree / Reset / a populate run reads it.
- Node captions are abbreviated to differentia initials by default
  (`abbreviateDifferentia`, keeping `non-` visible). The `#abbrev-toggle` checkbox
  switches `diffDisplayMode` and re-renders; full labels are always preserved in state.
- Double-clicking a node caption renames it inline (`editNodeName`): Enter or blur
  commits, Escape cancels.
- An infima species takes at most **one** individual, by design — its identity is
  determined by the species.
