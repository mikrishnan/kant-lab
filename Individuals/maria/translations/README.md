# English translations (not displayed)

Machine translations of three texts, saved as static data. **Nothing in this folder is
loaded by `busolt-reader.html`, and nothing is displayed on the site**: the files are
here for later use only.

| File | Text | Source ids |
| --- | --- | --- |
| `busolt-en.json` | Logik Busolt (AA 24:603–686) | block ids of `data/logik-busolt-24.js` |
| `blomberg-en.json` | Logik Blomberg (AA 24:7–301) | block ids of `data/logik-blomberg-24.js` |
| `meier-en.json` | Meier, *Auszug aus der Vernunftlehre* (1752) | `meier-para-N`, from `../meier-auszug.js` |

Each file is `{ "meta": …, "titles": …, "blocks": { "<block id>": "<English>" } }`.
`titles` holds the sections' titles and manuscript headings (`title:<section id>`,
`heading:<section id>:<n>`; for Meier `title:mNN` and `part:mNN`).

**These are unreviewed machine translations by Claude**, made block by block. Ruled
rule blocks have no entry. Latin terms are left in Latin, and the editorial brackets of
the Academy Edition (`[ Textlücke: AA: … ]`, `< bricht ab >`) are carried through
unchanged. Where a source block is only a sentence fragment, its translation is a
fragment too. A scholar should check them before they are quoted.
