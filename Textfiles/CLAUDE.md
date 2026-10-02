# Textfiles

Upstream RTF transcriptions the readers' embedded data was extracted from.

| File | Source |
| --- | --- |
| `Meier.rtf` (~516 KB) | G. F. Meier, *Auszug aus der Vernunftlehre* (AA XVI), with the Academy Edition's *Nachgelassenes zur Logik* front matter — the Inhaltsübersicht and the Verzeichniss of the pages on which the text of L is printed |
| `Baumgarten.rtfd` (~856 KB) | A. G. Baumgarten, *Metaphysica* (AA XVII), the 804 §§ the volume prints and the Synopsis |
| `Vol9Logic.rtfd` (~488 KB) | The Jäsche *Logik* (AA IX:3–150): Jäsche's Vorrede, the Einleitung, and the Elementarlehre and Methodenlehre, §§ 1–120 |
| `vol14Adickes.rtf` (~44 KB) | Adickes on the 33 phases of Kant's hand (AA XIV:XXXV–XLIII) — the prose on how the phases were distinguished, and the chronological table |
| `Vol16reflexionenMeier.rtfd` (~2.8 MB) | Kant's Reflexionen on the *Auszug* (AA XVI:39–869), Refl. 1619–3488 |
| `Vol17erlauterungenBaum.rtf` (~264 KB) | The Erläuterungen zu Baumgartens *Metaphysica* printed beneath the text (AA XVII:25–203) |
| `Vol17reflexionenBaum.rtfd` (~2.0 MB) | Reflexionen zur Metaphysik (AA XVII:227–745) |
| `vol18reflexionenBaum.rtfd` (~2.8 MB) | Reflexionen zur Metaphysik, zweiter Theil (AA XVIII:5–725) |

In every `.rtfd` the transcription is `TXT.rtf`; the `Attachment.png` beside it is an
incidental 48×48 image the RTFD format bundles and means nothing.

## Status

**Read-only provenance.** Nothing at runtime reads these files — the apps ship their
text inline as JavaScript `const`s or load it from generated files in `../data/`. When
you find a transcription error, fix it in the extractor that produces the data, so the
correction survives the next run; only touch the RTF if the transcription itself is
wrong about the volume.

These are macOS TextEdit RTF/RTFD, full of `\cocoartf` control words, colour tables, and
table markup. Don't try to parse them with regex against the raw bytes. Convert first:

```sh
textutil -convert txt -stdout Meier.rtf
textutil -convert txt -stdout Baumgarten.rtfd
```

## What each file feeds

| Transcription | Extractor | Produces |
| --- | --- | --- |
| `Baumgarten.rtfd` | `scripts/parse_baum.py` | `data/metaphysica-17.js` |
| `Vol16reflexionenMeier.rtfd` | `scripts/parse_refl.py L` → `scripts/emit.py` | `data/reflexionen-16-meier.js` |
| `Vol17erlauterungenBaum.rtf`, `Vol17reflexionenBaum.rtfd`, `vol18reflexionenBaum.rtfd` | `scripts/parse_refl.py M` → `scripts/emit_baum_refl.py` | `data/reflexionen-17-18-baumgarten.js` |
| `vol14Adickes.rtf` | none — read by hand | `data/phases-adickes.js` |
| `Meier.rtf` | none in the repo | the `MEIER` blob inside the Meier reader |
| `Vol9Logic.rtfd` | none yet | nothing |

The exact commands, with the `textutil` invocations and the flags each script wants, are
in "Regenerating the generated data" in the root `CLAUDE.md`. Both parsers print a report
you are expected to read; `parse_baum.py`'s should end in `clean`.

`phases-adickes.js` is the one hand-written file in `data/`, and `vol14Adickes.rtf` is
provenance for it rather than its input: Adickes' note on each of the 33 phases is
transcribed verbatim into the `.js` by hand.

## Extraction notes

The two readers' primary texts reached their data by different routes, and it shows.

- The **Baumgarten** data is machine-extracted, by `parse_baum.py` from
  `Baumgarten.rtfd`. `MET_PARAGRAPHS` has all 804 §§ AA XVII prints; `MET_SYNOPSIS`
  carries the Synopsis separately. Three things the extractor reads out of the RTF that
  a plain text conversion does not give you on its own: Baumgarten's German equivalents,
  as `@@N@@` markers locating each gloss at the Latin word it glosses (710 glosses over
  307 §§, with the volume's own printed label kept in `marks`, since it cannot be
  recomputed from `N`); the AA page, from `― N ―`, as `aa` (801 of 804, the three
  without one falling before the first marker); and Baumgarten's own 1757 pagination,
  from `[N]`, as `ed` — populated on all 804, carried forward through every § rather
  than only where a bracket happens to fall inside one, which is what lets a Reflexion
  located to a page of Kant's handbook find its §§.
- The **Meier** data is a machine-generated JSON dump — `MEIER.paras`, a `"§ number" →
  text` map, complete at 563 of 563 §§ with none empty — alongside `MEIER.nav` (17
  entries), the `HIERARCHY` outline, `CITATIONS` (563), and the hand-curated `TRADITION`.
  **No extractor for it survives in the repo**, so it cannot be regenerated from
  `Meier.rtf`: edit the blob programmatically or with a targeted replacement, and do not
  pretty-print it.

`Vol9Logic.rtfd` is the newest arrival and nothing consumes it yet. It is the obvious
next thing to build on, the *Logik* being Kant's lectures on the very *Auszug* the Meier
reader already carries — Jäsche's Vorrede says Kant had used Meier's compendium without
interruption since 1765.
