# Logik Busolt, Week 3: German and English side by side

`logik-busolt-week3-german-english.pdf` is a reading packet made from the scanned
pages of Kant's *Vorlesungen über Logik* (Logik Busolt), Kant's Schriften XXIV, book
pages 627–641, 647 and 661–667 (23 pages; pages 642–646 and 648–660 were not in the
scan). Each page of the packet is one book page, with the German on the left, set line
for line as printed, and an English translation on the right.

- The big badge at the top of each page is the book page number.
- Gray margin numbers are the printed page's own line numbers.
- Markers such as 38 show where the edition marks a page break of the manuscript (a
  slash and a marginal number in the print). They appear in the German and again at the
  matching point in the English.
- The yellow highlighting on book page 638 comes from the PDF this was made from.

The translation is a working draft for study, not a published one. Check it against the
German before quoting it.

## Correcting it

`source/` holds the transcription and translation as plain text (`data1.txt` to
`data3.txt`, one block per paragraph, German lines then a line starting with three
greater-than signs and the English) and `build.py`, which lays them out with
reportlab. To regenerate the PDF after an edit:

```sh
python3 source/build.py logik-busolt-week3-german-english.pdf
```

It uses the Caladea font if present (set `CALADEA_DIR` to its folder); any serif font
with ß, ä, ö, ü would do.
