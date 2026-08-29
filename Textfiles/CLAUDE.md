# Textfiles

Upstream RTF transcriptions the readers' embedded data was extracted from.

| File | Source |
| --- | --- |
| `Meier.rtf` (~525 KB) | G. F. Meier, *Auszug aus der Vernunftlehre* (AA XVI), with the Academy Edition's *Nachgelassenes zur Logik* apparatus |
| `Baumgarten.rtfd/TXT.rtf` (~870 KB) | A. G. Baumgarten, *Metaphysica* (AA XVII); `Attachment.png` is an incidental 48×48 image bundled by the RTFD format |

## Status

**Read-only provenance.** Nothing at runtime reads these files — the apps ship their
text inline as JavaScript `const`s. When you find a transcription error, fix it in the
app's embedded data; only update the RTF if you are re-running an extraction.

These are macOS TextEdit RTF/RTFD, full of `\cocoartf` control words, colour tables, and
table markup. Don't try to parse them with regex against the raw bytes. Convert first:

```sh
textutil -convert txt -stdout Meier.rtf
textutil -convert txt -stdout Baumgarten.rtfd
```

## Extraction notes

The two readers made different structural choices, visible in what survived extraction:

- The **Meier** data is a machine-generated JSON dump (`MEIER.paras`, a `"§ number" →
  text` map covering 562 of 563 §§) plus a hand-curated `HIERARCHY` outline. If it needs
  regenerating, regenerate the whole blob rather than editing it in place.
- The **Baumgarten** data is hand-entered, with two annotations added that are not in a
  plain text conversion: `@@N@@` markers locating Baumgarten's German equivalents at the
  Latin word they gloss, and `[N]` AA page markers (carried as the `aaPage` field, so far
  unpopulated). Extending it means reading the RTF and encoding those by hand.
