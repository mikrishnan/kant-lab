/* ─────────────────────────────────────────────────────────────────────────────
   Logik Mrongovius, Academy Edition XXIX (1784) — AA 29:1041–1047
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes0029kant) by
   Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA 29:P
   is https://archive.org/details/kantsgesammeltes0029kant/page/n<P-735>/mode/1up

   Same shape as data/logik-busolt-24.js (read the field list there), plus:

   meta.ocr          true: the text is a machine reading, not a transcription
   meta.scan         where the page images are, and how to get from an AA page
                     to one
   meta.contentsRefer what the page numbers in `contents` refer to
   meta.editorialNote the edition's own note on its sigla, verbatim (Dohna)
   block.ocrConf     the OCR engine's mean word confidence for the block, 0–100;
                     low values mark passages to check first
   block.dehyphenated how many printer's line-end hyphens were removed
   block.joined      "layout": the paragraph runs on across a page, read off the
                     AA's typesetting (the next page's first line not indented);
                     "inferred" (AA XXIX): a line indented like a paragraph's
                     first was joined to the one before, because that broke off
                     mid-sentence and this opens in lower case — the hanging
                     indent of a list item's second line. The extractor's
                     judgement, not the layout's
   block.kind        text | heading | table. A `heading` is the section's
                     heading again, kept in the text so that nothing the page
                     prints drops out of it. A `table` has empty `text` and the
                     OCR's lines as read in `lines`, its columns not reliable:
                     see the page image (`note` says so)
   block.ms          as in the other files, plus: `inferred: true` where the
                     number was not read but follows exactly from the numbers
                     read on either side; `p: null` with `unresolved: true`
                     where it does not; the OCR's reading kept in `raw` wherever
                     it is not the number; `approx: true` where the number had
                     no `/` in its line and is placed at the line's start
   ───────────────────────────────────────────────────────────────────────── */

const LOGIK_MRONGOVIUS = {
 "meta": {
  "work": "Logik Mrongovius",
  "label": "Logik Mrongovius",
  "volume": 29,
  "date": "1784",
  "provenance": "Logik Mongrovius Logic von HErrn Prof. Kant den 25 May 1784 C. Mrongovius",
  "source": "OCR of the printed AA XXIX (Internet Archive item kantsgesammeltes0029kant), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   1041,
   1047
  ],
  "scan": {
   "item": "kantsgesammeltes0029kant",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + -735",
   "note": "page image of AA 29:P is SCAN_URL with n = P + (-735)"
  },
  "counts": {
   "sections": 1,
   "blocks": 9,
   "pages": 3,
   "words": 962,
   "joinedLayout": 1,
   "dehyphenated": 11,
   "meanOcrConf": 75
  }
 },
 "front": [
  "Logik Mongrovius",
  "Logic von HErrn Prof. Kant",
  "den 25 May 1784",
  "C. Mrongovius"
 ],
 "contents": [],
 "sections": [
  {
   "id": "s01",
   "title": "Logik Mrongovius",
   "titleSrc": "none",
   "headings": [],
   "provenance": "Logik Mongrovius Logic von HErrn Prof. Kant den 25 May 1784 C. Mrongovius",
   "blocks": [
    {
     "id": "logik-mrongovius-s01-001",
     "kind": "text",
     "aa": 1045,
     "ms": [
      {
       "p": 1,
       "i": 0
      }
     ],
     "text": "Prolegomena Logices",
     "ocrConf": 53
    },
    {
     "id": "logik-mrongovius-s01-002",
     "kind": "text",
     "aa": 1045,
     "text": "Alles geschieht nach Regeln sowol in der Körperwelt als auch in der Natur; das Waßer fließt nach Regeln, die Thiere bewegen sich nach Regeln. Jeder Körper fällt nach den Regeln der Schwere usw. und darum nennt man diesen Lauf der Welt nach beständigen und allgemeinen Gesetzen, Natur, und sagt, alles geschieht in der Welt natürlicherweise. Natur ist eigentlich ein Zusammenhang von Erscheinungen nach gewißen Vorschriften oder Regeln. Der Mensch thut alles nach Regeln und also gebraucht er auch seine Gemüths Kräfte nach Regeln. Aber er denkt, verfährt, er bewegt sich nach Regeln, ohne sie vorherzuwißen, und ob wir uns gleich ihrer unbewußt sind. Diese sind ihm also unbekant, aber seiner Natur schon angeboren. Erst spät und nach vielen Erfahrungen durch Versuche und Gebrauch derselben gelangen wir zur Erklärung derselben. Der Mensch zieht sie aus den Erfahrungen heraus und schmiedete sich endlich eigne neue Regeln. Auf die Art können wir durch Proben vieles lernen von uns selbst. Jeder Gebrauch unsrer Kräfte ist an Regeln gebunden, und ob wir sie gleich nicht kennen, so sind wir doch im Besitze derselben. Es giebt gar keine Regellosigkeit, und wenn wir welche finden, so heißt das nur, uns sind die Regeln unbekannt. Die Regeln also nach denen wir handlen sind entweder",
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "logik-mrongovius-s01-003",
     "kind": "text",
     "aa": 1045,
     "ms": [
      {
       "p": 2,
       "i": 33
      }
     ],
     "text": "1 ) Unbekannt, wenn wir sie eher beobachten als kennen und diese heißen auch subiective oder natürliche Regeln; oder sie sind",
     "ocrConf": 78
    },
    {
     "id": "logik-mrongovius-s01-004",
     "kind": "text",
     "aa": 1045,
     "text": "2.) Bekant, wenn wir sie eher kennen lernen als beobachten, und dann sind sie obiective oder erworbene Regeln; zu diesen gehört schon ein speculativer Verstand. So handle ich z. E. nach einer unbekanten Regel, wenn ich einen Fuß aufhebe und meinen Körper so stelle, daß er gleich auf dem andern Fuß steht. So lernen die Kinder gehen, ohne die Regeln des Gehens zu wißen, denn durch öfteres Fallen gewöhnen sie sich ihren Körper so zu stellen und so zu halten, daß sie nicht fallen können. So sprechen wir nach Regeln, ohne daß wir uns anfänglich derselben bewußt sind. Daher komts, daß alle Sprachen in der Welt in der allgemeinen Structur mit einander übereinstimmen, e. gr. Adjectiv Substantiv Verbum etc. Gramatic ist die Form einer Sprache überhaupt.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "logik-mrongovius-s01-005",
     "kind": "text",
     "aa": 1046,
     "text": "Hingegen wenn ich rechne, so handle ich nach Regeln, die ich vorher wißen muß, also nach bekanten Regeln. Es giebt Regeln, durch deren Erkentniß sogleich ein Gebrauch unserer Erkentniß entspringt; andre, die blos zur Beurtheilung dienen. Z. E. die Regeln der Arithmetic sind von der ersten Art denn wenn ich diese weiß, so kann ich rechnen.",
     "ocrConf": 78
    },
    {
     "id": "logik-mrongovius-s01-006",
     "kind": "text",
     "aa": 1046,
     "text": "Die Regeln des Geschmaks aber geben wir nicht selbst, sondern dienen mir nur zur Beurtheilung, was Geschmak sei oder nicht.",
     "ocrConf": 76
    },
    {
     "id": "logik-mrongovius-s01-007",
     "kind": "text",
     "aa": 1046,
     "ms": [
      {
       "p": 3,
       "i": 138
      }
     ],
     "text": "Bei der Sprache lernt man die Regeln erst nach ihrer Erlernung kennen. Daher ists ein großer Fehler in den Schulen wenn man die Grammatic zur erstell Grundlage einer Sprache macht; denn man muß zuerst die Sprache lernen und dann die Regel aus dem Gebrauch der Wörter herausziehen, so wird man sie viel leichter faßen. Unter allen Gemüths Kräften, von denen der Mensch einen Gebrauch nach Regeln macht, ist der Verstand der vornehmste. Dieser handelt nicht bloß nach Regeln, sondern kann selbst Regeln erfinden und ist also das Vermögen der Regeln, deren man sich bewußt ist. Der Verstand handelt auch nach Regeln, die wir untersuchen können. Er ist das Vermögen zu denken, wir können also nicht denken als nach gemäßen Regeln. Die Regeln können wir aber wieder denken, ohne ihre Anwendung, d. h. er bringt die Vorstellung nicht unter Regeln. Verstand ist also auch das Vermögen, Vorstellungen der Sinne unter Regeln zu bringen. Allmählig werden wir durch den längeren Gebrauch der Kräfte dieser Regeln geläufiger und endlich in denselben so fertig, daß es uns viele Mühe kostet, sie abstrahiren zu können, so daß man glaubte, Gott habe uns dieselben eingepflanzt.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "logik-mrongovius-s01-008",
     "kind": "text",
     "aa": 1046,
     "text": "Man handelt bei den gemeinsten Ausuebungen nach Regeln. Da wir also immer nach Regeln verfahren, so ists wol werth daß wir uns um die Kentniße derselben, nach denen der Verstand handelt, bekümmern, ob wir gleich uns schon vorher unsres Verstandes bedienten.",
     "dehyphenated": 1,
     "ocrConf": 77
    },
    {
     "id": "logik-mrongovius-s01-009",
     "kind": "text",
     "aa": 1046,
     "aaEnd": 1047,
     "pages": [
      {
       "p": 1047,
       "i": 577
      }
     ],
     "ms": [
      {
       "p": 4,
       "i": 214
      }
     ],
     "text": "Hier komt etwas besonderes vor. Der Verstand ist das Vermögen det Regeln (so wie die Sinne des Verstandes Anschauungen sind) und er ist begierig Regeln zu suchen und befriedigt, wenn er sie gefunden. Da er nun die Quelle der Regeln ist, so wird gefragt, nach welchen Regeln der Verstand selber verfährt. Wir müßen unseren Verstand durch unsren eigenen Verstand beurtheilen, und daher komt es, daß niemand auf seinen Verstand aber wol auf seinen Witz Verzicht thut, denn wenn wir geringen Verstand haben, so beurtheflen wir ihn durch geringen Verstand, also scheint er uns doch gut. Der Verstand ist das Vermögen der Regeln; ohne ihn können wir keine Regeln denken, ia ohne ihn können wir überhaupt gar nichts denken. Denn denken heißt, sich etwas durch Begriffe vorstellen. Ein Begriff ist aber, wenn ich mir das Mannigfaltige der Anschauung unter einer gewißen Regel denke. Ich kann wol von etwas eine sinnliche Vorstellung haben, aber keinen Begriff, e.gr. ich denke mir einen Baum. Hier habe ich ein mannigfaltiges der Anschauung. Ich denke es mir aber unter einer Einheit und unter der Regel, daß alles was so aussieht, ein Baum ist. Bey der bloß sinnlichen Wahrnehmung des Baums habe ich eine verworrne Vorstellung vom Mannigfaltigen und denke dabei nichts. Solche sinnliche Vorstellungen haben die Tliiere, aber keine Begriffe. — Durch die Begriffe unterscheide ich ein Ding vom andern und erkenne die Einheit desselben. Je mehr man also Begriffe hat, desto mehr ist unser Verstand excolirt. Die Sprache besteht aus Begriffen, sie müßte also mit der Cultur des Verstandes steigen, und da diese beim ersten Menschen gewiß sehr langsam war, auch sehr spät erfolgen. Daher haben die Thiere auch keine Sprache. Der Verstand ist also auch das Vermögen zu denken zu nennen. Wir miißen dieses bei Seite setzen bis hernach, wo diese Materie wieder Vorkommen wird.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 78
    }
   ]
  }
 ]
};
