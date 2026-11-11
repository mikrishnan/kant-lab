# Christian Wolff's logics, from OCR

Wolff's German Logic, the school logic Meier's *Auszug* and Baumgarten's *Metaphysica* grew out
of, read off a scan of the 1754 print by OCR. **Uncorrected machine reading**: good enough to
search and to compare with Meier, Baumgarten and Kant's lectures; check any quotation against the
page image before you use it. The portal links every passage to its page in Munich's viewer.

| File | Global | Text | Words |
| --- | --- | --- | --- |
| [wolff-deutsche-logik-1754-ocr.js](wolff-deutsche-logik-1754-ocr.js) | `WOLFF_DEUTSCHE_LOGIK` | *Vernünfftige Gedancken von den Kräfften des menschlichen Verstandes und ihrem richtigen Gebrauche in Erkäntniß der Wahrheit* (the "German Logic"), Halle: Renger, 1754 | 53,052 |

It is in the portal's `passages` shape (see [../catalogue.js](../catalogue.js)); the file's header
lists the fields it adds. The portal reads it as the layer **Tradition**, under "Behind the
textbooks: Wolff". Wolff's Latin *Logica* was read too, and is not in the portal yet: see the
end of this file.

## The print

No clean transcription of the German Logic exists. The Deutsches Textarchiv has six of Wolff's
German works, typed twice, but not the *Logik* or the *Metaphysik*; the one *Logik* text online
(gleichsatz.de) is an excerpt in modernised spelling from an unnamed edition. So this is a machine
reading of the 1754 Halle printing, "Neue Auflage hin und wieder vermehret", as its title page
says (the first edition is of 1713): Bayerische Staatsbibliothek, Ph.sp. 953,
[bsb10044809](https://www.digitale-sammlungen.de/en/view/bsb10044809).

It keeps the Vorrede of 1712, the Erinnerungen to the second, third, and fourth and fifth
editions (1719, 1722, 1727), the contents, the Vorbericht von der Welt-Weisheit, the sixteen
chapters with Wolff's marginal summaries, and the two registers (a German–Latin list of Wolff's
terms, and the subject index). The frontispiece and the title page are left out.

**Rights.** The print is in the public domain. Munich's scans carry the rights statement
[NoC-NC 1.0](https://rightsstatements.org/vocab/NoC-NC/1.0/): no copyright, but the digitisation
is for non-commercial use only. This file is the seminar's own machine reading of those scans,
for non-commercial scholarly use; no image is copied into the repository.

## How it was read

Each page image, at the scan's own resolution and upscaled 2× ([ocr_pages.py](ocr_pages.py)), was
read by Tesseract 5 with two models trained on historical print, `frak2021` and `german_print`
(UB Mannheim). Both read long s, the e written over a vowel and the Fraktur hyphen. Munich's own
OCR of the same pages, which drops umlauts and reads the Fraktur hyphen as "s", is not used.

Then:

1. **The text column is found** on every page from where its lines start and end, and corrected
   where a margin note or the binding's edge was taken into it ([fix_columns.py](fix_columns.py)).
2. **The text column and the margins are read again, each on its own**
   ([ocr_margins.py](ocr_margins.py)), split at the page's own gutter, which is often only a few
   pixels wide: read as part of a page, a margin note runs into the text line beside it, and the
   lines beside an ornamental initial are skipped as if they were a picture. The notes are read
   on two crops, one stopping just short of the text and one reaching a little into it; each
   clips or fuses different words.
3. **The readings are merged by vote** ([merge_pages.py](merge_pages.py)): four of the text (both
   models, on the whole page and on the column alone), four of the notes. Lines are paired by
   height, words by where they stand on the line, and at each spot the text most readings give is
   kept. A tie goes first to the words that the clean texts of the period in this repository know
   (Meier's *Auszug*, the German works of AA I, the 1781 *Critique*, the AA XXIV lectures: a
   misreading seldom makes a real word), then to the words two readings agreed on elsewhere in
   the book, then to the surer engine. **Nothing is kept that no reading gave.**
4. **The book is put together** ([wolff_ocr.py](wolff_ocr.py)): running heads, catchwords and
   signatures are left out; lines are joined into paragraphs at the print's indents and at its
   §§; a word broken at a line's end is rejoined (before a capital the hyphen stays:
   Grund⸗Urtheil); each marginal note becomes a passage of its own, set before the paragraph it
   stands beside.

Spelling, long s (ſ) and punctuation are as read. Three Fraktur forms the portal's typefaces have
no glyph for are printed as the portal's 1781 *Critique* prints them: the e written over a vowel
as the umlaut (aͤ as ä), the Fraktur hyphen ⸗ as -, and ꝛc. as etc. The portal's search folds
long s and old spellings, so `Unterscheide` finds `Unterſcheide`.

## What is attested and what is inferred

- **Pages** are Munich's pagination of the scan, which follows the printed page numbers; the
  running heads were read and agree with it on 200 pages (10 more were misread). An unnumbered
  page is cited as `[n]`, counted from the title page.
- **Parts and chapters** begin where the book's own table of contents, "Inhalt des gantzen
  Werckes", puts them; the section titles the portal shows are that table's wording, transcribed
  from its page images, and the heading as printed in the text is kept, as read, in the heading
  passage. The running heads print the chapter's number on every verso: they agree with the
  chapters on 90 pages, and the one that differs names its chapter's title correctly and has its
  number misread.
- **§ numbers** are read from the paragraph's opening (or the §'s heading). In each chapter the
  longest sequence of numbers read in increasing order is taken as read (271), and the §§ that do
  not fit it are numbered from their neighbours and **cited with a query** (`Cap. 7 § 3?`), with
  `parInf: true` in the data (21).
- **Where the readings disagreed**, every passage keeps the reading not chosen and the vote, in
  `alt`. Where no majority decided (half the readings or fewer gave the text kept) the portal
  underlines the word with a dotted line and shows the other reading on hover: about 5% of the
  words, and the places to check first.

## How good it is

Proofread word by word against the scans on three pages, from the beginning, middle and end of
the book (pp. 23, 135, 198): in the text, **5 of 646 words misread, about 99% right**; in Wolff's
marginal summaries, 5 of 26, about 81%; **98% in all**. The misreadings:

- **The section sign** read as a letter or lost: `C. 373.` for `(§. 373.`, `FH. 10.` for `§. 10.`.
- A line-end hyphen lost, leaving a word in two: `allean zeit` for `allezeit`; a letter misread,
  `uͤher` for `uͤber`.
- **The marginal notes**, set small and close to the text: their first or last letters clipped
  (`her Begriffe` for `[Aus]führlicher Begriffe`), a short word lost (`die`, `an`).

Known faults beyond these pages:

- **Ornamental initials** come out as stray letters (`EIr` for `WIr`), and the words beside them
  are sometimes misread.
- **Display type** (chapter titles, the registers' headings) reads worst; the section titles the
  portal shows come from the table of contents for that reason.
- The **subject index** (`Das andere Regiſter`) reads worse than the text: small type, many
  numbers.

## Not here yet: the Latin *Logica*

Wolff's *Philosophia rationalis sive Logica*, second edition ("Editio altera emendatior"),
Frankfurt and Leipzig 1732 (Bayerische Staatsbibliothek, 4 Ph.sp. 204,
[bsb10008294](https://www.digitale-sammlungen.de/en/view/bsb10008294)), with the *Discursus
praeliminaris*, was read the same way (`wolff_ocr.py logica`), its structure taken from its
"Conspectus totius operis". It reads much worse: proofread on three pages (pp. 6, 396, 676), about
**91% of the words in the text** and a third of those in the marginal notes. The models read its
italic Antiqua, in which every § states its proposition, badly, read c as e (`nee`, `cognoſeit`),
and lose the section sign; and Tesseract's layout skips about one § heading in seven, so those
§§ can only be cited as a range (`§ 14–15?`). Below the portal's other OCR texts (96–99%), it is
left out until the seminar decides it is worth having as it stands, or a better reading of its
italics is found (a Tesseract model trained on a few dozen of its own lines would be the next
thing to try). [ocr_gaps.py](ocr_gaps.py), which reads the gaps where its § headings were
skipped, is used for it alone.

## Regenerating

Needs Tesseract 5 (`brew install tesseract`) and the two models in one folder, here `tessdata/`:

```sh
mkdir -p tessdata && cd tessdata
curl -L -o frak2021.traineddata https://ub-backup.bib.uni-mannheim.de/~stweil/tesstrain/frak2021/tessdata_best/frak2021-0.905.traineddata
curl -L -o german_print.traineddata https://ub-backup.bib.uni-mannheim.de/~stweil/tesstrain/german_print/tessdata_best/german_print_0.877_1254744_7309067.traineddata
cp -R /opt/homebrew/share/tessdata/configs .
cd ..
```

Then (about half an hour on an eight-core laptop; `ocr_pages.py` downloads Munich's page images,
about 350 MB, into `$W/img`):

```sh
W=/tmp/wolff-dl B=bsb10044809
TESSDATA=$PWD/tessdata python3 logic-portal/wolff/ocr_pages.py $B $W
python3 logic-portal/wolff/fix_columns.py $B $W 31 263
TESSDATA=$PWD/tessdata python3 logic-portal/wolff/ocr_margins.py $B $W columns
TESSDATA=$PWD/tessdata python3 logic-portal/wolff/ocr_margins.py $B $W narrow
TESSDATA=$PWD/tessdata python3 logic-portal/wolff/ocr_margins.py $B $W
python3 logic-portal/wolff/wolff_ocr.py dl $W logic-portal/wolff/wolff-deutsche-logik-1754-ocr.js
```

Run `fix_columns.py` before `ocr_margins.py`: its passes split the page at the gutters they
measure on the corrected column, and write them to `$W/tsv/gutters.json`, which `wolff_ocr.py`
uses too. `wolff_ocr.py` reads the clean texts it breaks ties with from this repository, and
prints a report: the votes, the running heads and catchwords checked, the parts and chapters
opened, the § numbers read and inferred. **Read it.**

For the *Logica*: `B=bsb10008294`, `fix_columns.py $B $W 25 890`, the three `ocr_margins.py`
passes, then `ocr_gaps.py $B $W`, then `wolff_ocr.py logica`.
