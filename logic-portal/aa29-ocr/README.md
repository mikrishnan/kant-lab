# AA XXIX, the 1983 part, from OCR

Three lecture transcripts from the Academy Edition's volume XXIX, read off the printed
page by OCR. **Uncorrected machine reading**: good enough to search, compare and
prototype with; check any quotation against the page image before you use it.

| File | Global | Text | AA | Words |
| --- | --- | --- | --- | --- |
| [metaphysik-mrongovius-29-ocr.js](metaphysik-mrongovius-29-ocr.js) | `METAPHYSIK_MRONGOVIUS` | Metaphysik Mrongovius (winter 1782/83; the title page says "1783 d. 4. Febr:") | 29:747–940 | 73,601 |
| [metaphysik-k3-29-ocr.js](metaphysik-k3-29-ocr.js) | `METAPHYSIK_K3` | Metaphysik K3, which the AA calls Metaphysik Arnoldt (K3) ("pro 1794/95"); it breaks off | 29:945–1040 | 33,895 |
| [logik-mrongovius-29-ocr.js](logik-mrongovius-29-ocr.js) | `LOGIK_MRONGOVIUS` | Logik Mrongovius ("den 25 May 1784"): the introduction, all that survives | 29:1045–1047 | 962 |

Each file is in the `logik` shape of `data/logik-busolt-24.js`, and its header comment
lists the fields it adds. The Logic Portal reads all three (see its `catalogue.js`). The
extractor is the AA XXIV one, [../aa24-ocr/parse_aa24_ocr.py](../aa24-ocr/parse_aa24_ocr.py),
which knows this scan too.

## Only half of AA XXIX is here

AA XXIX came out in two parts, and the portal has only the second.

- **Here: the 1983 part** (*Ergänzungen II*, AA 29:743–1188): the three texts above.
- **Not here: the 1980 part** (*Kleinere Vorlesungen und Ergänzungen I*, AA 29:1–742): the
  Philosophische Enzyklopädie (29:5–45), Herder's notes on mathematics (29:49–66) and on
  physics (29:69–71), the Berliner Physik (29:75–91), the Danziger Physik (29:97–169),
  Karsten's physics textbook reprinted (29:173–590), and Moral Mrongovius II (29:597–642).

The 1980 part is not on the Internet Archive. It is online only at HathiTrust
([umn.319510010739125](https://hdl.handle.net/2027/umn.319510010739125)), which shows it to
anyone page by page but asks that a whole volume come through its own download button,
with a member's login (UChicago is a member), or its data services, and not be copied by a
script. **Nothing has been taken from HathiTrust**: no page, no text. The portal's home page
and Read view say that the 1980 part is missing, from `PORTAL_GAPS` in the portal's
`catalogue.js`.

To add it later: log in to HathiTrust through UChicago, download the volume's PDF with
HathiTrust's own button, put it beside these files, and OCR it. That will need its own
pass of the extractor's checks; this scan's quirks (below) need not be the PDF's.
Separately, Steve Naragon's site has a newer draft transcription of Herder's mathematics
and physics notes from the manuscripts, copyright Naragon and Stark, with no reuse terms:
link to it, or ask them before copying it in.

## Where the text comes from

The Internet Archive's scan of AA XXIX, erste Hälfte, zweiter Teil (Berlin: de Gruyter,
1983), from the copy in Trent University's Bata Library, digitized in 2019, and the OCR the
Archive made of it:
[kantsgesammeltes0029kant](https://archive.org/details/kantsgesammeltes0029kant).

**To check a reading**, open the page image: AA 29:P is
`https://archive.org/details/kantsgesammeltes0029kant/page/n<P−735>/mode/1up`. Each file's
`meta.scan` says the same, and the portal links every passage to its page.

**On using it.** The lecture texts are 18th-century. A faithful transcription of them adds
no new copyright in the US, and the German protection for a scholarly edition (§ 70 UrhG,
25 years from publication) ran out in 2008. Lehmann's own introduction, notes and apparatus
(AA 29:1079–1184) are left out entirely. The Internet Archive and HathiTrust both list this
volume as public, but both catalogue it under the series' starting date (1902/1910), so that
listing was probably made from the date, not from a review of the 1983 volume: the case for
using the text rests on the points above, not on the listing.

## How good it is

Proofread word by word against the scans on three pages, one from each text (AA 29:769,
1012, 1046; 1,083 words): **9 words misread, about 99% right** with case set aside, and
**98% exactly as printed**. No clean transcription of these pages exists, so the whole text
cannot be measured as the AA XXIV OCR was against Busolt.

The errors are of these kinds:

- **Capitalisation normalised.** This scan's OCR capitalises nouns the print has in lower
  case: every `substanz` on AA 29:769 came out `Substanz`, and `Gegen-standes` came out
  `Gegen-Standes`. Most of the difference between the two figures above. **Do not use these
  files for questions of spelling or case.**
- **Misread letters**: `erstell` for `ersten`, `det` for `der`, `beurtheflen`,
  `Vei mögen` for `Vermögen`, `com m er ei i` for `commercii`.
- **Umlauts added**, as in the AA XXIV OCR: `Verstände` for `Verstande`, `Gegenstände` for
  `Gegenstande`.
- **Symbols**: the triangle at AA 29:769 came out `A`.

Nothing is added, reworded or filled in. The extractor only takes away what is not the
transcript (running heads, line numbers, printer's marks), lifts the manuscript pagination
out of the text, and rejoins lines into paragraphs.

## What this scan's OCR does, and what the extractor does about it

The AA XXIV scans did none of these; the extractor does these things for this scan only,
and its AA XXIV output is unchanged (checked byte for byte).

- **Boxes with no top or left.** 61 words, mostly list numbers like `1. )`, have their box's
  top and left recorded as 0. Read as they stand, they put a list item at the top of the
  page and ran several items together. Their bottom and right edges are right, and the box
  is rebuilt from those.
- **Margin numbers as lines of their own.** Many line numbers and manuscript page numbers
  come as separate OCR lines on the same baseline as the text line they stand beside. They
  are put back into that line, where the margin rules take them out; left alone, every such
  text line looked like a table cell and dropped out of the passages.
- **A printed line split in two**: a list number apart from its text, or the running head
  apart from its page number. They are rejoined.
- **Hanging indents.** A list item's second line is indented like a new paragraph. Where
  the line before broke off mid-sentence and this one opens in lower case, it is joined
  on, marked `joined: ["inferred"]`; a second line that opens with a capital (a noun)
  stays a block of its own.

## Known faults

- **Tables** are kept as the OCR's lines, not as prose: the tables of categories at AA
  29:801–802 and 987, and a scheme at 29:1002. Read them on the page image.
- **Manuscript pagination** is numbered only where the margin reads cleanly or follows
  exactly from numbers that do: 95% of the breaks in Metaphysik Mrongovius, 85% in K3, all
  four in Logik Mrongovius. The rest are `p: null`.
- A stray mark is sometimes read as a character, kept as read: `"` at AA 29:956.

## Left out on purpose

- **The Vernunft-Theologie Magath** (AA 29:1049–77): variant readings against the
  Religionslehre Pölitz printed in AA XXVIII, not a text that reads on its own.
- **Lehmann's Anhang** (AA 29:1079–1184): his introduction, notes and apparatus.

## Regenerating

```sh
mkdir -p /tmp/ocr && cd /tmp/ocr
curl -LO https://archive.org/download/kantsgesammeltes0029kant/kantsgesammeltes0029kant_djvu.xml
cd -
python3 logic-portal/aa24-ocr/parse_aa24_ocr.py aa29 /tmp/ocr logic-portal/aa29-ocr
```

The report it prints counts, for each text, the line numbers dropped, the manuscript breaks
numbered by reading, by sequence or not at all, the tables, the lines it rejoined, and every
heading it found. **Read it.**
