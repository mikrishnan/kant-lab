# Shared data

The texts and annotation layers that more than one tool can read. Each file is a classic
script defining top-level `const`s, loaded with a plain `<script src>` before the tool's
own script:

```html
<script src="../data/metaphysica-17.js"></script>       <!-- from a top-level tool -->
<script src="../../data/metaphysica-17.js"></script>    <!-- from groups/<group>/ -->
```

A `<script src>` include rather than `fetch()` is what lets the tools open straight from
disk, from a `file://` URL. The root [CLAUDE.md](../CLAUDE.md) explains the arrangement.

## The files

The **header comment at the top of each file** documents its shape, field by field. Read
it there rather than here, so that there is only one description to keep true.

| File | Contents | Globals it defines | Produced by | Read by |
| --- | --- | --- | --- | --- |
| [logik-blomberg-24.js](logik-blomberg-24.js) | *Logik Blomberg*, Kant's logic lecture of ca. 1771 as AA XXIV prints it (AA 24:7–301): 18 sections, 1919 blocks of running prose, with every AA page and every manuscript page kept as an offset into it. Alone of the three it is keyed to Meier's §§ — 181 headings over 1841 blocks. ~1.1 MB | `LOGIK_BLOMBERG` | **generated** — `scripts/parse_logik.py blomberg` from `Textfiles/Vol24logikBlomberg.rtfd` | *nothing yet* |
| [logik-busolt-24.js](logik-busolt-24.js) | *Logik Busolt*, ca. 1789/90 (AA 24:603–686): 33 sections, 542 blocks, same shape. No § apparatus — the transcript carries none. ~0.26 MB | `LOGIK_BUSOLT` | **generated** — `scripts/parse_logik.py busolt` from `Textfiles/Vol24logikBusolt.rtf` | *nothing yet* |
| [logik-wiener-24.js](logik-wiener-24.js) | The *Wiener Logik*, 1780ff. (AA 24:785–940): 13 sections, 395 blocks, same shape. No § apparatus. ~0.47 MB | `LOGIK_WIENER` | **generated** — `scripts/parse_logik.py wiener` from `Textfiles/Vol24logikWien.rtf` | *nothing yet* |
| [logik-jasche-9.js](logik-jasche-9.js) | The Jäsche *Logik* (AA IX:3–150), Kant's logic lecture as Jäsche edited it for the press in 1800 — the Vorrede, the Einleitung, and the Elementarlehre and Methodenlehre, §§ 1–120: 21 sections, 870 blocks, with every AA page kept as an offset into the prose and the italics as offsets too, plus an index of the 120 §§. The same lecture as the three AA XXIV transcripts, in a printed redaction. ~0.46 MB | `LOGIK_JASCHE` | **generated** — `scripts/parse_jasche.py` from `Textfiles/Vol9Logic.rtfd`. Reads the RTF directly, so it needs no Mac | *nothing yet* |
| [metaphysica-17.js](metaphysica-17.js) | Baumgarten's *Metaphysica* (AA XVII): the 804 §§ the volume prints, the outline of 74 sections, and the Synopsis. ~0.4 MB | `MET_META`, `MET_SECTIONS`, `MET_PARAGRAPHS`, `MET_SYNOPSIS`, `MET_BY_NUM` | **generated** — `scripts/parse_baum.py` from `Textfiles/Baumgarten.rtfd` | `baumgarten-reader`; also read by `scripts/emit_baum_refl.py` when it builds the Baumgarten Reflexionen |
| [phases-adickes.js](phases-adickes.js) | Adickes' chronology of the 33 phases of Kant's hand (AA XIV:XXXV–XLIII), with his note on each verbatim | `PHASES`, `PHASE_BY_KEY`, `phaseInfo()`, `phaseYears()`, and the helpers `ADICKES_PREAMBLE`, `ADICKES_HYPHEN_NOTE`, `ADICKES_INK_NOTE`, `EXPONENT_IS_PHASE`, `SUPERSCRIPT` | **hand-written**, from `Textfiles/vol14Adickes.rtf` | `baumgarten-reader`, `meier-reader` |
| [reflexionen-16-meier.js](reflexionen-16-meier.js) | Kant's Reflexionen on Meier's *Auszug* (AA XVI), Refl. 1619–3488: 1870 entries. ~1 MB | `REFL_META`, `REFL_GROUPS`, `REFL_ENTRIES`, `REFL_BY_PARA`, `REFL_PARAS` | **generated** — `scripts/parse_refl.py … L`, then `scripts/emit.py` | `meier-reader` |
| [reflexionen-17-18-baumgarten.js](reflexionen-17-18-baumgarten.js) | Kant's Reflexionen on Baumgarten's *Metaphysica* (AA XVII–XVIII): 2967 entries. ~2.5 MB | `REFLM_META`, `REFLM_GROUPS`, `REFLM_ENTRIES`, `REFLM_BY_PARA`, `REFLM_PARAS` | **generated** — `scripts/parse_refl.py … M`, then `scripts/emit_baum_refl.py` | `baumgarten-reader` |
| [tradition-meier.js](tradition-meier.js) | Parallel passages from Wolff, the Scholastics and Aristotle, keyed to Meier's §§: 25 entries on 10 §§ so far | `TRADITION` | **hand-curated** — edit directly; the header says how | `meier-reader` |

The commands that regenerate the generated files are in "Regenerating the generated
data" in the root [CLAUDE.md](../CLAUDE.md). Each extractor prints a report; read it.

## Rules

1. **Generated files are never edited by hand.** A correction belongs in the extractor
   in `scripts/`, so that it survives the next run. Hand-written and hand-curated files
   are edited directly.
2. **Data files only gain fields.** Renaming or removing a field or a global breaks every
   tool that reads it, silently, because there are no tests. If one has to go, the same
   pull request updates every tool in its *Read by* cell.
3. **Global names are unique across `data/`.** A tool can load several of these files,
   and two files declaring the same `const` stop each other loading. The same goes for a
   tool's own script: it must not declare a name a file it loads already uses, which is
   easy to do by accident with a generic one like `PHASES` or `SUPERSCRIPT`.
4. **Keep *Read by* true.** A pull request that makes a tool read one of these files
   adds the tool to that file's *Read by* cell. A working group's tool counts.

This folder, and `scripts/` and `Textfiles/` with it, belongs to the owners of the
Baumgarten and Meier readers: Sophia Wyatt (@sophia-wyatt) and Maria (@mari637-pixel).
One of them reviews every change to it, whoever makes it, because other tools depend on
it. A working group building a dataset keeps it in its own folder until it is ready to
be shared; [docs/maintaining.md](../docs/maintaining.md) describes the move.
