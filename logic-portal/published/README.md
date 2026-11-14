# Kant's published works, for the Logic Portal

Five texts the Logic Portal reads beside the logic corpus, each a data file in the portal's
`passages` shape (see `../portal/catalogue.js`), all made by [build_published.py](build_published.py).

| File | Global | Text | Cited by | Words | Clean? |
| --- | --- | --- | --- | --- | --- |
| [kant-aa01.js](kant-aa01.js) | `KANT_AA01` | AA I: the eleven works of 1747–1756 | AA 1:page | 157,000 | Yes: a critical edition |
| [kant-aa02-ocr.js](kant-aa02-ocr.js) | `KANT_AA02` | AA II: the seventeen works of 1757–1777 | AA 2:page | 142,000 | **No: OCR**, about 96% of words right |
| [kant-krv-a.js](kant-krv-a.js) | `KANT_KRV_A` | *Critik der reinen Vernunft*, Riga 1781 | A page (A xvi, A 51) | 176,000 | Yes: double-keyed transcription |
| [kant-krv-b-ocr.js](kant-krv-b-ocr.js) | `KANT_KRV_B` | *Kritik der reinen Vernunft*, 2nd ed. 1787, as AA III prints it | B page, and AA 3:page | 187,000 | **No: OCR**, about 98% of words right |
| [kant-ku-a.js](kant-ku-a.js) | `KANT_KU_A` | *Critik der Urtheilskraft*, Berlin und Libau 1790 | § and A page (§ 59, A 251; A xi) | 108,000 | Yes: double-keyed transcription |

Every work in AA I and AA II stays separately identifiable: each passage carries `work` (a key
such as `nova-dilucidatio` or `falsche-spitzfindigkeit`), and each file's `meta.works` lists the
works with their titles, years and AA pages.

## Where each text comes from, and its licence

**AA I.** The Berlin-Brandenburg Academy's new edition of Abteilung I, Band 1 (*Kant's Werke*,
Schriften 1747–1756), TEI-XML from [github.com/telota/kant](https://github.com/telota/kant),
published at [kant-digital.bbaw.de](https://kant-digital.bbaw.de) (version 1.5, May 2026). Its text
is the first prints' wording and spelling ("kan", "könte", "derer sich … bedienet haben"),
edited; it marks every page of the old Academy edition (1902/1910) where that page begins, and
those are the pages the portal cites, as everyone does. **Licence: CC BY-NC-SA 4.0** (attribution,
non-commercial, share-alike), © BBAW; the file is shared under the same licence. Note that the
dataset's draft `toc.xml` says "CC-BY-ND-NC-4.0", while its README, its website and the licence
statement in every text file say CC BY-NC-SA 4.0; this import follows the text files.

**AA II.** No clean, freely licensed text of AA II exists online. The Bonner Kant-Korpus
(korpora.org) has one, but its terms allow scholarly use only and forbid passing the texts on, so
it cannot go into a public repository; the BBAW's new edition has not reached volume 2 yet (it
plans to have all of Abteilung I online by the end of 2027). So this is the old Academy edition
(1905, 2nd printing 1912, public domain) read by OCR: the Internet Archive's scan
[gesammelteschrif0002kant](https://archive.org/details/gesammelteschrif0002kant) and the Archive's
own tesseract reading of its Fraktur. **Licence: public domain**; the extraction is CC0.

**The Critique, A.** The Deutsches Textarchiv's transcription of the 1781 print,
[kant_rvernunft_1781](https://www.deutschestextarchiv.de/kant_rvernunft_1781), keyed twice and
compared, from the DTA's core-corpus download of 10 February 2026. **Licence: CC BY-SA 4.0**
(DTA, BBAW); the file is shared under the same licence. The DTA has no transcription of the 1787
edition.

**The Critique of Judgment, A.** The Deutsches Textarchiv's transcription of the first edition,
Berlin und Libau: Lagarde und Friederich, 1790 (LVIII, 476 pp.; the copy of the Zentral- und
Landesbibliothek Berlin, KucRg 685),
[kant_urtheilskraft_1790](https://www.deutschestextarchiv.de/kant_urtheilskraft_1790), keyed
twice and compared, from the same core-corpus download as the 1781 *Critique*. **Licence: CC BY-SA
4.0** (DTA, BBAW); the file is shared under the same licence. The Bonner Kant-Korpus has AA V
but forbids passing it on (as for AA II), and the BBAW's new edition has not reached it. The
DTA's core corpus has neither the 1793 nor the 1799 edition.

**The Critique, B.** For the same reasons as AA II, the B edition is the old Academy edition's
AA III (1904, 2nd printing 1911, public domain), which prints the 1787 text in the AA's spelling
and gives the B pages in its margin: the Internet Archive's scan
[gesammelteschrif0003kant](https://archive.org/details/gesammelteschrif0003kant) and its tesseract
reading. **Licence: public domain**; the extraction is CC0.

## How each was checked

- **AA I**: the old-AA page breaks were compared with the tops of the pages in the Bonner
  Kant-Korpus (used only to check, never copied): 1,458 of 1,499 agree. The 41 others are text
  the old AA does not print in that place: the instalment notices of the two newspaper pieces of
  1754 ("Die Fortsetzung folgt künftig. Immanuel Kant."), the Pope mottos of the *Naturgeschichte*'s
  parts, and the dedication, cited as a range. The new edition marks no old page on title pages:
  each work's title page is put on the page the volume's contents give, the *Naturgeschichte*'s
  three part titles on 1:241, 259 and 349 (`fixed: true`), and front matter after a title page is
  cited as a range (AA 1:217–220).
- **The Critique, A**: compared word for word with Wikisource's transcription of the same print,
  proofread against the scans, after spelling was normalised as the portal's search normalises it.
  The two agree apart from a few hundred small differences in 176,000 words, almost all of them
  slips or modernisations on Wikisource's side ("für" for the print's "vor", split words). The
  DTA's own slips found that way are a handful, e.g. *unterwirſt* for *unterwirft*; they are left
  as the DTA has them. That comparison also caught a fault of this extractor (words broken over a
  page turn came out split), now fixed.
- **The Critique of Judgment, A**: proofread word for word against the DTA's images of the print
  on four pages, A v, xx, 180 and 400 (762 words). One word differs: on A 180 the print has a
  turned letter, *uud*, which the DTA gives as *und*; elsewhere it keeps the print's turned
  letters (*znsammenstimme*, A xx; *Weltursnche*, A 400; *uud* twice) and its misprints
  (*allgememen*, A v). One slip of the DTA's own was found outside those pages, in the print's
  list of errata: *eriterisch l. eritisches* for *criterisch l. critisches*; it is left as the DTA
  has it. The page breaks follow the DTA's, which agree with the print on all four pages, and the
  link from each passage to its page image was checked (A 251 is the DTA's image 315).
- **AA II and B**: every page compared with the Bonner Kant-Korpus's text of the same page: 96.3%
  of AA II's words agree, 98.1% of B's. A disagreement is not always the OCR's fault (spelling
  normalisation also differs), so these are lower bounds on how close the text is.
- **A and B pages**: spot-checked on citations scholars know: A 19/B 33, A 23/B 38, A 31/B 46,
  A 51/B 75, A 425/B 453, A 805/B 833, B 626 (*Sein ist offenbar kein reales Prädicat*), B xvi,
  B 1, B 131, B 274. All right.

## How accurate each text is, in the portal

The portal says so wherever a text is read. The text's bar carries a badge (*Clean text*, or
*OCR · about 96% of words right*), the Read list gives the same, and every passage opened on the
right shows a line under its citation: for a machine reading, the share of words right in the whole
text and on the page the passage begins on, with a link to that page's scan. The whole-text
figures and what they rest on are the catalogue's `accuracy` field. The page figures are each
file's `meta.agreement`, from [measure_ocr.py](measure_ocr.py), which compares every page with
the Bonner Kant-Korpus's text of it (kept as [ocr-agreement.json](ocr-agreement.json), which
holds percentages only, none of the corpus's text): AA II 96.3% over 409 pages, 20 of them under
90% (mostly the early pages cut at the gutter); B 98.1% over 542 pages, 5 under 90%. The AA XXIV
lectures from OCR show their figure too (about 98%, measured on Busolt) and their page images.

## What is not clean yet

**AA II and B are OCR.** Check every quotation against the page image (each file's `meta.scan`).
The OCR's commonest misreadings of Fraktur were repaired by rule (long s read as f or j, "ch" read
as "d)", b for d or h, lost umlauts …), but only into a word found in Kant's printed texts (AA I,
A, Jäsche, Meier, Baumgarten) or, for longer words, his notes and the lectures, and only where the
OCR's word is not itself such a word (or, for the long s, is far rarer: *feine* → *seine*, which is
occasionally wrong). Every repair is kept in the passage's `fix` with the OCR's reading, 4,340 in
AA II. What remains:
- words whose first letters the scan cut off at the gutter (some early pages of AA II: *o* for
  *so*, *ie* for *die*);
- headings the OCR garbled (*SED* for *§ 1.*);
- some of Kant's footnotes run into the text at the foot of the page; a few of AA III's editorial
  notes on A's readings are left in it (*1) A¹: kann.*);
- Greek, formulas and tables, which the OCR cannot read; figures are not reproduced in any file.

**B's pages** come from AA III's margin as the OCR read it: 577 page numbers read whole, 122
numbered in sequence between read ones, and 177 uncertain, shown with a query (*B 123?*). Where
the margin number was not found at all (47 pages), the passage before it is cited with a query
range (*B 12–13?*). The B page is placed at the start of the line in which AA III marks it.

**A ↔ B.** The other edition's pages beside a passage (*A 51 / B 75*) were found by matching the
two texts word for word: 1,016 of A's 1,341 passages and 1,912 of B's 2,482 have them. They are
the extractor's inference, printed in neither edition. Where the editions differ (the prefaces,
the Deduction, the Paralogisms, Phenomena and Noumena) there is no match, as there should not be.

**The Critique of Judgment, A**, is a clean text, but these are worth knowing:
- **It is cited by the 1790 print's pages, not yet by AA V's**, which is how most of the
  literature cites it. AA V follows the second edition (1793), so its pages cannot simply be
  counted from these; they could be found by matching this text against an OCR of AA V, as the
  Critique's A and B pages are matched, and would then be marked as the matching's.
- **Its §§ are the 1790 print's.** It has §§ 1–53 and 55–91: the *Anmerkung* after § 53, which
  the second edition (and AA V) numbers § 54, is unnumbered, so `§ 54` finds nothing. Each passage
  carries the § whose heading it follows (`par`); a bare *Anmerkung* heading keeps the § it stands
  in, so that *Anmerkung* is cited as § 53. Other headings (the Einleitung's sections, the
  *Momente*, the *Allgemeine Anmerkungen*) begin no §.
- **Its pages.** Roman for the Vorrede and Einleitung (A iv–lviii), then 4–476 and the errata
  (477). A page that prints no number is cited with its number counted, in brackets: the title
  page and the Vorrede's first page ([i], [iii]), the Einleitung's ([xi]), the contents' ([lvii]),
  the part title and the first page after it ([1], [3]), and the errata ([477]). Three front-matter
  pages print an irregular number, cited by its value and kept in `meta.printedAs`: VIV (ix),
  XXIIII (xxiv), LIIII (liv).
- **What the DTA changed is kept.** The DTA corrected nine misprints (*Veruunft*, *nnr*,
  *dnrch* …); the text has the correction and the passage's `sic` the print's reading. It supplied
  38 letters where the print's are missing or illegible; they are in the text, and the passage's
  `supplied` marks where (a 39th, a line-end hyphen, went with the rejoined word).
- **The table on A lvi**, at the end of the Einleitung (the faculties of the mind, the cognitive
  faculties, their principles a priori and what they apply to), is printed sideways and the DTA
  did not transcribe it. The passage there
  says so and links to the page image; it is not transcribed here either.
- **The title vignette** is not reproduced.

**Spelling.** A keeps the 1781 print's spelling (*Erkentniß*, *seyn*, *Critik*), and the KU the
1790 print's (*Urtheilskraft*, *Begrif*); B and AA II have the old Academy edition's; AA I has the
first prints'. The portal's search treats the spellings as one word, so a question finds all five.

**Not in yet.** The new edition's German translations of AA I's Latin works (*Trans* files in the
dataset), and AA III/IV's own pages for the A text.

## Regenerating

```sh
git clone --depth 1 https://github.com/telota/kant /tmp/telota-kant
curl -LO https://www.deutschestextarchiv.de/media/download/dta_kernkorpus_1700-1799_2026-02-10.zip
unzip dta_kernkorpus_1700-1799_2026-02-10.zip '*/kant_rvernunft_1781.TEI-P5.xml' '*/kant_urtheilskraft_1790.TEI-P5.xml'
curl -LO https://archive.org/download/gesammelteschrif0002kant/gesammelteschrif0002kant_djvu.xml
curl -LO https://archive.org/download/gesammelteschrif0003kant/gesammelteschrif0003kant_djvu.xml
python3 logic-portal/published/build_published.py all /tmp/telota-kant/db \
  dta_kernkorpus_1700-1799_2026-02-10/kant_rvernunft_1781.TEI-P5.xml \
  gesammelteschrif0002kant_djvu.xml gesammelteschrif0003kant_djvu.xml \
  logic-portal/published
python3 logic-portal/published/build_published.py ku \
  dta_kernkorpus_1700-1799_2026-02-10/kant_urtheilskraft_1790.TEI-P5.xml logic-portal/published
```

The `ku` step builds the Critique of Judgment alone, in a second or two, and prints its own
report: passages and words, the §§ headed (it should say `not printed: [54]` and nothing else),
the pages counted and printed irregularly, any break in the page count (there should be none),
the DTA's corrections and supplied letters, and the gap marked on A lvi.

To refresh the page figures after a change to the OCR texts, run `measure_ocr.py` on a folder of
saved korpora.org pages (see its docstring) and build again.

The run takes about ten seconds and prints a report: passages and words per work, the pages
the new edition leaves unmarked, the repairs, and B's page counts. **Read it.** The DTA's
book-download pages ask a browser to run a script first; the bulk download above is the DTA's
own route for machines. The word list for the OCR repairs is built from the files above and from
`data/` and the Jäsche and Meier files in `Individuals/`, so run it from the repository root.

## Later

- **A clean AA II and B.** Either ask korpora.org for permission to use the Bonner Kant-Korpus's
  AA II and AA III in this public repository (their terms invite the request: Prof. Dr. Bernhard
  Schröder), or take the BBAW's new edition of each volume when it appears, as AA I is taken now.
  Either text can replace these without breaking links, since passages are cited by page.
- **Highlighting crucial works** within AA I and AA II: the `work` keys are there for it.
- **AA V's pages for the Critique of Judgment**, found by matching (above), and the table on
  A lvi.
