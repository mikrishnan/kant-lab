/* ─────────────────────────────────────────────────────────────────────────────
   Logik Philippi, Academy Edition XXIV (1772) — AA 24:303–496
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes241imma) by
   Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA 24:P
   is https://archive.org/details/kantsgesammeltes241imma/page/n<P+7>/mode/1up

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
                     AA's typesetting (the next page's first line not indented)
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

const LOGIK_PHILIPPI = {
 "meta": {
  "work": "Logik Philippi",
  "label": "III. Logik Philippi",
  "volume": 24,
  "date": "1772",
  "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
  "source": "OCR of the printed AA XXIV (Internet Archive item kantsgesammeltes241imma), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   303,
   496
  ],
  "scan": {
   "item": "kantsgesammeltes241imma",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + 7",
   "note": "page image of AA 24:P is SCAN_URL with n = P + (7)"
  },
  "counts": {
   "sections": 135,
   "blocks": 1559,
   "pages": 186,
   "words": 61915,
   "joinedLayout": 99,
   "dehyphenated": 977,
   "meanOcrConf": 43
  },
  "contentsRefer": "manuscript pages — this is the manuscript's own table of contents"
 },
 "front": [
  "III",
  "Logik Philippi",
  "Vorlesungen",
  "des Herrn Profeßoris Kant",
  "über",
  "die Logic.",
  "Philippi",
  "Koenigsberg im May 1772"
 ],
 "contents": [
  {
   "label": "Historia philosophiae",
   "pages": "323 — 335"
  },
  {
   "label": "Von der Geschichte der Logic insbesondere",
   "pages": "335 — 339"
  },
  {
   "label": "Tractatio ipsa Logices. Betrachtungen",
   "pages": "339"
  },
  {
   "label": "Von der gelehrten Erkenntniß überhaupt",
   "pages": "340 372"
  },
  {
   "label": "ad §10",
   "pages": "340"
  },
  {
   "label": "§",
   "pages": "12 341"
  },
  {
   "label": "§",
   "pages": "13 341"
  },
  {
   "label": "§14",
   "pages": "341—342"
  },
  {
   "label": "§15",
   "pages": "342"
  },
  {
   "label": "§ 17 et",
   "pages": "18 343"
  },
  {
   "label": "§",
   "pages": "19 344"
  },
  {
   "label": "§22",
   "pages": "345"
  },
  {
   "label": "Vom Guten in Begriffen",
   "pages": "358"
  },
  {
   "label": "Von der Vollkommenheit §",
   "pages": "22 359"
  },
  {
   "label": "Von der Unvollkommenheit §",
   "pages": "23 364"
  },
  {
   "label": "Vollkommenheiten der Erkenntniß",
   "pages": "366"
  },
  {
   "label": "§29",
   "pages": "3(i7"
  },
  {
   "label": "§30",
   "pages": "368"
  },
  {
   "label": "Vom andern Abschnitt",
   "pages": ""
  },
  {
   "label": "Von der Weitläufigkeit der gelehrten Erkenntniß",
   "pages": "372 385"
  },
  {
   "label": "§43",
   "pages": "373"
  },
  {
   "label": "§44",
   "pages": "374"
  },
  {
   "label": "§45",
   "pages": "378"
  },
  {
   "label": "§ 46 §",
   "pages": "47 378"
  },
  {
   "label": "§50",
   "pages": "381"
  },
  {
   "label": "§52",
   "pages": "382"
  },
  {
   "label": "§",
   "pages": "54 383"
  },
  {
   "label": "§53",
   "pages": "383"
  },
  {
   "label": "§55",
   "pages": "383"
  },
  {
   "label": "§",
   "pages": "56 383"
  },
  {
   "label": "§62",
   "pages": "384"
  },
  {
   "label": "§63",
   "pages": "384"
  },
  {
   "label": "§65",
   "pages": "384"
  },
  {
   "label": "Der HL Abschnitt",
   "pages": "385—386"
  },
  {
   "label": "§",
   "pages": "66 385"
  },
  {
   "label": "§",
   "pages": "7-1 385"
  },
  {
   "label": "§91",
   "pages": "385"
  },
  {
   "label": "her IV. Abschnitt",
   "pages": ""
  },
  {
   "label": "Von der Wahrheit der gelehrten Erkenntniß",
   "pages": "386 -406"
  },
  {
   "label": "§",
   "pages": "96 392"
  },
  {
   "label": "§ LOO",
   "pages": "394"
  },
  {
   "label": "Von der Genauigkeit der Erkenntniß",
   "pages": "397"
  },
  {
   "label": "§",
   "pages": "104 398"
  },
  {
   "label": "§",
   "pages": "106 400"
  },
  {
   "label": "§ 109 Vom Irrthum",
   "pages": "401"
  },
  {
   "label": "1. Betrachtung",
   "pages": "401"
  },
  {
   "label": "2. Betrachtung",
   "pages": "402"
  },
  {
   "label": "§",
   "pages": "111 404"
  },
  {
   "label": "§",
   "pages": "113 405"
  },
  {
   "label": "Der fünfte Abschnitt",
   "pages": ""
  },
  {
   "label": "Von der gelehrten Erkenntniß und deren Klarheit",
   "pages": "406 — 419"
  },
  {
   "label": "§ 115 Von den Merkmalen",
   "pages": "406"
  },
  {
   "label": "§ 117 Von der Verneinung und Bejahung",
   "pages": "407"
  },
  {
   "label": "§",
   "pages": "121 408"
  },
  {
   "label": "§",
   "pages": "131 410"
  },
  {
   "label": "§ 132—149 Von der Ausführlichkeit",
   "pages": "411"
  },
  {
   "label": "Von der adaequation der Erkenntnisse",
   "pages": "415"
  },
  {
   "label": "Von der Gewißheit",
   "pages": "419—449"
  },
  {
   "label": "VomBeyfall",
   "pages": "423"
  },
  {
   "label": "Vom Vorurtheil",
   "pages": "424"
  },
  {
   "label": "Anwendung",
   "pages": "427"
  },
  {
   "label": "Vorurtheil der Neuigkeit",
   "pages": "431"
  },
  {
   "label": "Vorurtheil des angenommenen Lehrgebäudes",
   "pages": "432"
  },
  {
   "label": "Von der Wahrscheinlichkeit und dem Zweif elh af ten der Erkenntniß",
   "pages": "433"
  },
  {
   "label": "Zweifel",
   "pages": "435"
  },
  {
   "label": "Gradation des Vorwahrhaltens",
   "pages": "436"
  },
  {
   "label": "Wißenschaft §",
   "pages": "185 440"
  },
  {
   "label": "§",
   "pages": "188 441"
  },
  {
   "label": "§",
   "pages": "189 441"
  },
  {
   "label": "§",
   "pages": "190 442"
  },
  {
   "label": "§196",
   "pages": "444"
  },
  {
   "label": "§",
   "pages": "197 445"
  },
  {
   "label": "§",
   "pages": "200 445"
  },
  {
   "label": "§201",
   "pages": "446"
  },
  {
   "label": "§",
   "pages": "204 447"
  },
  {
   "label": "§",
   "pages": "205 447"
  },
  {
   "label": "§",
   "pages": "206 447"
  },
  {
   "label": "Vom historischen Glauben",
   "pages": "449"
  },
  {
   "label": "§208",
   "pages": "450"
  },
  {
   "label": "§213",
   "pages": "450"
  },
  {
   "label": "Von der praktischen gelehrten Erkenntniß",
   "pages": "451"
  },
  {
   "label": "§",
   "pages": "216 451"
  },
  {
   "label": "Von gelehrten Begriffen",
   "pages": "451 — 461"
  },
  {
   "label": "§",
   "pages": "250 451"
  },
  {
   "label": "§",
   "pages": "254 452"
  },
  {
   "label": "§",
   "pages": "259 453"
  },
  {
   "label": "§",
   "pages": "260 453"
  },
  {
   "label": "Von den Erklärungen",
   "pages": "455"
  },
  {
   "label": "§",
   "pages": "280 459"
  },
  {
   "label": "§",
   "pages": "284 460"
  },
  {
   "label": "Eintheilung §",
   "pages": "285 460"
  },
  {
   "label": "Von den gelehrten Urtheilen",
   "pages": "461—470"
  },
  {
   "label": "§",
   "pages": "297 462"
  },
  {
   "label": "§301",
   "pages": "463"
  },
  {
   "label": "§",
   "pages": "310 465"
  },
  {
   "label": "§311",
   "pages": "465"
  },
  {
   "label": "§",
   "pages": "312 466"
  },
  {
   "label": "§",
   "pages": "313 466"
  },
  {
   "label": "§",
   "pages": "314 466"
  },
  {
   "label": "§",
   "pages": "315 467"
  },
  {
   "label": "§",
   "pages": "319 467"
  },
  {
   "label": "§",
   "pages": "324 468"
  },
  {
   "label": "§",
   "pages": "338 468"
  },
  {
   "label": "§",
   "pages": "341 469"
  },
  {
   "label": "Der zehnte Abschnitt",
   "pages": ""
  },
  {
   "label": "Von den gelehrten Vernunftschlüssen",
   "pages": "470 — 480"
  },
  {
   "label": "§",
   "pages": "353 470"
  },
  {
   "label": "§364",
   "pages": "472"
  },
  {
   "label": "§",
   "pages": "365 472"
  },
  {
   "label": "§",
   "pages": "366 472"
  },
  {
   "label": "§",
   "pages": "363 473"
  },
  {
   "label": "§",
   "pages": "369 473"
  },
  {
   "label": "§",
   "pages": "395 477"
  },
  {
   "label": "§",
   "pages": "396 477"
  },
  {
   "label": "§",
   "pages": "399 477"
  },
  {
   "label": "§",
   "pages": "402 479"
  },
  {
   "label": "§",
   "pages": "404 479"
  },
  {
   "label": "§",
   "pages": "406 479"
  },
  {
   "label": "§",
   "pages": "408 479"
  },
  {
   "label": "§",
   "pages": "409 479"
  },
  {
   "label": "§",
   "pages": "411 479"
  },
  {
   "label": "Der andere Haupttheil",
   "pages": ""
  },
  {
   "label": "Von der Lehrart der gelehrten Erkenntniß",
   "pages": "480 — 484"
  },
  {
   "label": "§421",
   "pages": "481"
  },
  {
   "label": "§422",
   "pages": "481"
  },
  {
   "label": "§427",
   "pages": "482"
  },
  {
   "label": "§",
   "pages": "428 482"
  },
  {
   "label": "§",
   "pages": "429 482"
  },
  {
   "label": "§",
   "pages": "430 482"
  },
  {
   "label": "§",
   "pages": "432 483"
  },
  {
   "label": "§",
   "pages": "434 483"
  },
  {
   "label": "§",
   "pages": "435 483"
  },
  {
   "label": "§",
   "pages": "436 484"
  },
  {
   "label": "Der dritte Haupttheil",
   "pages": ""
  },
  {
   "label": "Vom gelehrten Vortrage",
   "pages": "484 — 493"
  },
  {
   "label": "Der erste Abschnitt",
   "pages": ""
  },
  {
   "label": "Vom Gebrauch der Worte",
   "pages": "484—486"
  },
  {
   "label": "§",
   "pages": "449 485"
  },
  {
   "label": "§",
   "pages": "450 486"
  },
  {
   "label": "§",
   "pages": "452 486"
  },
  {
   "label": "§",
   "pages": "454 486"
  },
  {
   "label": "§",
   "pages": "457 486"
  },
  {
   "label": "Der andre Abschnitt",
   "pages": ""
  },
  {
   "label": "Von der gelehrten Schreibart",
   "pages": "486 — 488"
  },
  {
   "label": "§",
   "pages": "473 487"
  },
  {
   "label": "*",
   "pages": "477 487"
  },
  {
   "label": "Der dritte Abschnitt",
   "pages": ""
  },
  {
   "label": "Von einer gelehrten Rede",
   "pages": "488 — 490"
  },
  {
   "label": "§",
   "pages": "490 488"
  },
  {
   "label": "§",
   "pages": "493 489"
  },
  {
   "label": "§",
   "pages": "501 489"
  },
  {
   "label": "§",
   "pages": "504 489"
  },
  {
   "label": "§",
   "pages": "509 490"
  },
  {
   "label": "§",
   "pages": "512 490"
  },
  {
   "label": "§",
   "pages": "514 490"
  },
  {
   "label": "Der vierte Abschnitt",
   "pages": ""
  },
  {
   "label": "Von gelehrten Schriften",
   "pages": "490 — 493"
  },
  {
   "label": "§",
   "pages": "518 490"
  },
  {
   "label": "§",
   "pages": "519 491"
  },
  {
   "label": "§",
   "pages": "520 492"
  },
  {
   "label": "§",
   "pages": "525 493"
  },
  {
   "label": "§",
   "pages": "526 493"
  },
  {
   "label": "Der vierte Haupttheil",
   "pages": ""
  },
  {
   "label": "Von dem Character eines Gelehrten",
   "pages": "493 — 496"
  },
  {
   "label": "§",
   "pages": "527 493"
  },
  {
   "label": "§",
   "pages": "530 493"
  },
  {
   "label": "§",
   "pages": "533 494"
  },
  {
   "label": "§",
   "pages": "540 494"
  },
  {
   "label": "§",
   "pages": "541 494"
  },
  {
   "label": "§",
   "pages": "544 495"
  },
  {
   "label": "§",
   "pages": "546 495"
  },
  {
   "label": "§",
   "pages": "548 495"
  },
  {
   "label": "§",
   "pages": "549 495"
  },
  {
   "label": "§",
   "pages": "553 495"
  },
  {
   "label": "§554",
   "pages": "496"
  }
 ],
 "sections": [
  {
   "id": "s01",
   "title": "Logik Philippi",
   "titleSrc": "none",
   "headings": [],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s01-001",
     "kind": "text",
     "aa": 311,
     "ms": [
      {
       "p": 1,
       "i": 0
      }
     ],
     "text": "Alles richtet sich in der Welt nach gewissen Regeln und Gesetzen. Auch diejenigen Dinge welche ganz regelloß sich zu verändern scheinen sind an gewiße Gesetze gebunden. Daß es uns aber oft vorkommt, als wenn gewiße Dinge ohne alle Regeln geschähen, rührt entweder daher, weil wir die Regeln, wornach sie geschehen, mit unserm Verstande nicht einsehen können, oder weil ihre Gesetze nicht die Gesetze der grösten Vollkommenheit sind, nach welchen sie, unsrer Meinung nach, geschehen sollten. So scheinen z. E. die Veränderungen des Wetters ohne Regeln und Gesetze zu geschehen. Nichts desto weniger wechsein die Witterungen nach bestimmten Gesetzen beständig ab ; welche wir aber wegen unsrer eingeschränkten Vernunft nicht einsehen. Ein Lasterhaffter scheint ohne Regeln zu handeln Indessen richtet er alle seine Handlungen genau nach den Regeln ein, die ihm das Laster vorschreibt. Es ist demnach kein Zweifel, daß alle Dinge in der Welt nach gewissen Regeln handeln. Wie aber alle Dinge regelmässig sind, so finden wir es auch an dem menschlichen Verstände. Ein jeder braucht denselben nach gewissen Regeln, ein jeder denkt, urtheilt etc. etc. nach gewissen Regeln. Es ist aber hier wohl zu merken :",
     "dehyphenated": 5,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-002",
     "kind": "text",
     "aa": 311,
     "text": "In einigen Subjecten gehet die Ausübung vor den Regeln vorher, bey andern hingegen gehen die Regeln vor der Ausübung vorher. Das ist : einige Subjecte handeln nach gewissen Gesetzen, ohne sich ihrer bewust zu seyn; andere thun regelmässige Handlungen, sind sich aber dabey der Regeln, nach welchen sie etwas thun, bewust.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-003",
     "kind": "text",
     "aa": 311,
     "ms": [
      {
       "p": 2,
       "i": 0,
       "raw": "s>",
       "inferred": true
      }
     ],
     "text": "Eben so ist es auch mit dem Verstände beschaffen. Einige brauchen denselben, sind sich aber der Regeln nach welchen sie ihn brauchen, nicht bewust. Andere bedienen sich desselben, wissen aber auch zugleich die Gesetze und Regeln, nach welchen sie sich desselben bedienen. Hieraus siehet man, daß der Gebrauch des Verstandes zwiefach ist:",
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-004",
     "kind": "text",
     "aa": 311,
     "aaEnd": 312,
     "pages": [
      {
       "p": 312,
       "i": 411
      }
     ],
     "text": "1. Der natürliche Gebrauch, wenn man sich der Regeln des Verstandes nicht bewust ist. So lernet z. E. ein Kind gehen. Es beobachtet hiebey unzählig viele Regeln, so daß Borellus der de motu animalium et infantium geschrieben, alle mathematische Kunst anwendet, um alle die Regeln zu zeigen, welche ein Kind ausübt, wenn es zu gehen anfängt. Bev dem allen aber ist sich das Kind der Regeln die es ausübt nicht bewüst. Eben so reden die kleinen Kinder und beobachten darinn ungemein viele Regeln, sie wissen es aber gar nicht, daß sie sie beobachten.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-005",
     "kind": "text",
     "aa": 312,
     "text": "Also ist der Verstand auch gewißen Regeln unterworfen, nach welchen er handelt, auch selbst alsdann wenn er sich derselben nicht bewußt ist, auch selbst alsdann wenn er irrt, obgleich Gesetzen die von minderer Vollkommenheit sind.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-006",
     "kind": "text",
     "aa": 312,
     "text": "Der Verstand ist das Vermögen allgemeiner Begriffe, er wirkt nun theils indem er von einzelnen Fällen oder Erfahrungen allgemeine Regehi und Urtheile abzieht, wie z. E. in der Moral, Jurisprudenz, Physic oder schönen Wissenschaften. Diese Art des Verstandes heißt der Sensus communis (Sens commun) oder der gemeine Verstand. Der gemeine Verstand wird ein gesunder Verstand (le bon sens) wenn er richtig ist hier geht die Erfahrung und Wirkung vor den Regeln vorher.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-007",
     "kind": "text",
     "aa": 312,
     "text": "Der Verstand, der nach gewissen allgemeinen Gesetzen handelt, so er sich bewußt ist, ist der wissenschaftliche gelehrte Verstand.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-008",
     "kind": "text",
     "aa": 312,
     "text": "2. Der künstliche Gebrauch ist derjenige, nach welchem man sich der Regeln des Verstandes bewust ist.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s01-009",
     "kind": "text",
     "aa": 312,
     "text": "Not. Dieses hat man vorangeschickt um jetzt von dem gemeinen und gelehrten Verstand richtige Definitiones geben zu können.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-010",
     "kind": "text",
     "aa": 312,
     "text": "Die Fertigkeit des Verstandes im natürlichen Gebrauch ist der gemeine Verstand.",
     "ocrConf": 57
    },
    {
     "id": "philippi-s01-011",
     "kind": "text",
     "aa": 312,
     "text": "Die Fertigkeit des Verstandes im künstlichen Gebrauch ist der gelehrte, künstliche oder höhere Verstand.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s01-012",
     "kind": "text",
     "aa": 312,
     "text": "Alle Ausübungen des Verstandes es sey des gemeinen oder gelehrten, alle Ausübungen und Erkenntnisse des Verstandes sind allgemeine, dadurch unterscheiden sie sich von den sinnlichen Erkenntnißen, welche einzeln sind.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s01-013",
     "kind": "text",
     "aa": 312,
     "aaEnd": 313,
     "pages": [
      {
       "p": 313,
       "i": 726
      }
     ],
     "ms": [
      {
       "p": 3,
       "i": 0
      }
     ],
     "text": "Allein der gemeine Verstand nimmt in seinen Ausübungen einen gantz andern Weg als der gelehrte. Der gemeine Verstand erkennet das allgemeine nur in concreto, oder ziehet das allgemeine aus einzeln Sätzen, die sich auf die Erfahrung gründen. Der höhere Verstand erkennet das allgemeine in abstracto oder ziehet aus allgemeinen Sätzen einzele heraus. Z. E. Wenn jemand einem etwas zu verwahren gegeben, solches aber verlohren gienge, soll nun Deponent allein den Schaden leiden, oder soll ihn derjenige dem das Depositum anvertrauet worden ersetzen ? Wenn man diese Frage der gemeinen Vernunft vorlegt und von ihr eine allgemeine Regel bey dergleichen Vorfällen fordert, so kann sie solche sogleich nicht ertheilen, sondern sie beruft sich erst auf die Erfahrung. Sie nimmt ein einzeles Beispiel vor sich und beurtheilt daßelhe durch die Erfahrung, darauf ziehet sie aus der Erfahrung einen allgemeinen Satz und Regel die sie darnach auf andere Fälle applicirt. Auf solche Art sind die mehresten Regeln in der Jurisprudentz entstanden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-014",
     "kind": "text",
     "aa": 313,
     "text": "Die Principia entlehnet also der gemeine Verstand aus der Erfahrung. Die Deutlichkeit aber nimmt er aus besondern einzelnen Fällen her. Wenn man den gemeinen Verstand aus diesem Gesichtspuncte betrachtet, so siehet man, daß er an Deutlichkeit, an Augenscheinlichkeit und Evidentz die Wissenschafften übertrifft. Denn alles was er vorträgt ist aus der Erfahrung genommen und rühret die Sinne. (Was aber die Weitläufftigkeit anbetrifft ; so haben die Wissenschafften einen Vorzug.)",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-015",
     "kind": "text",
     "aa": 313,
     "ms": [
      {
       "p": 4,
       "i": 222,
       "raw": "■<",
       "inferred": true
      }
     ],
     "text": "Diese Augenscheinlichkeit und Deutlichkeit aber, welche der gemeine Verstand hat, fehlet gänzlich dem gelehrten Gebrauch des Verstandes oder dem gelehrten Verstände; denn er betrachtet die Dinge in abstracto von aller Sinnlichkeit abgesondert.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s01-016",
     "kind": "text",
     "aa": 313,
     "text": "Er ist demnach den schönen Wissenschaften die zu unsern Sinnen reden, gantz entgegen, und wenn man beständig abstrahiret und sich auf ferne Subtilitäten leget ; so schwinden sie gäntzlich welches die Zeit der Scholastiker beweiset.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-017",
     "kind": "text",
     "aa": 313,
     "text": "Die Gesetze und Regeln unsers Verstandes sind entweder subiectiue oder obiectiue.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s01-018",
     "kind": "text",
     "aa": 313,
     "text": "Die subiective Regeln des Verstandes oder diejenigen Regeln, nach welchen wir uns unsers Verstandes wirklich bedienen handelt die Psychologie ab. Die Psychologie beschäftigt sich überhaupt mit unsrer Seele, also auch mit den Kräften derselben, folglich auch mit dem Verstände. Aber sie betrachtet die Kräfte und ihre Gesetze subjectivisch, d. i. ohne Rücksicht auf das Object mit welchem sich diese Kräfte beschäftigen, und auf die Regeln die dabey beobachtet werden müßen.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s01-019",
     "kind": "text",
     "aa": 313,
     "text": "Die Regeln aber nach welchen wir uns unsers Verstandes bedienen sollen ist die Logick. Sie trägt also die objectiven Gesetze des Gebrauchs der Vernunfft vor.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-020",
     "kind": "text",
     "aa": 313,
     "aaEnd": 314,
     "pages": [
      {
       "p": 314,
       "i": 342
      }
     ],
     "text": "Die Metaphysik ist zwar auch eine Wissenschafft von den Gesetzen der Vernunfft, aber nur der reinen Vernunfft, die mit der Sinnlichkeit nicht vermischt ist und ihre Principia blos aus der Vernunfft und nicht aus Erfahrungen hernimmt. Sie betrachtet daher unsre Erkenntniße so, wie wir sie haben würden, wenn wir keinen Körper hätten. Dagegen entlehnet die Logick ihre Principia theils aus der Vernunfft, theils aus Erfahrungen.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-021",
     "kind": "text",
     "aa": 314,
     "text": "Not. Die Physik nimmt die Principia bloß aus der Erfahrung; die Moral hat ihre Principia aus der Vernunfft.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-022",
     "kind": "text",
     "aa": 314,
     "text": "Die Logick der gemeinen und gesunden Vernunfft, sonst wird sie auch der natürliche Witz genannt, ist unterschieden von der Logick der gelehrten Vernunfft. Die erste trägt ihre Regeln vor aus concreten Sätzen, aus der Erfahrung, die andere wird sie aus allgemeinen Gründen darthun. Die erste ist nichts als nur eine Critic, die andere ist eine Doctrin.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-023",
     "kind": "text",
     "aa": 314,
     "ms": [
      {
       "p": 5,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Was ist eine Doctrin ?",
     "ocrConf": 28
    },
    {
     "id": "philippi-s01-024",
     "kind": "text",
     "aa": 314,
     "text": "Ein Zusammenhang allgemeiner Regeln dadurch man eine gewisse Ausübung des Verstandes lernet, wird eine Doctrin genannt. Das Vermögen aber durch eine innere Empfindung zu beurth eilen, ob ein gewisses Product des Verstandes gut oder schlecht sey, ist die Critic. Alle schöne Künste z. E. Poesie, Aesthetick etc. etc. verstatten demnach keine Doctrin, sondern nur eine Critic ; denn der Geschmack läßt sich nicht durch Regeln lernen. Man kann niemanden lehren witzige Einfälle zu haben. Die Regeln die man in der Aesthetick hat, dienen nur ein Product des Geschmacks zu beurtheilen. Sie sind aus der Sinnlichkeit gezogen und helfen directe nicht ein Product vollkommen zu machen, bisweilen aber indirecte durch Probiren.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-025",
     "kind": "text",
     "aa": 314,
     "text": "Die Logick der gemeinen und gesunden Vernunfft dienet zu einem Catharcticon zu einem Mittel den Verstand von Irrthümern und Vorurtheilen zu reinigen. — Die Logick der gelehrten Vernunfft aber ist ein Hülfsmittel ein Organon der Wissenschafften.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-026",
     "kind": "text",
     "aa": 314,
     "text": "Logica naturalis, welches die Wissenschaft der Regeln des gemeinen und natürlichen Verstandes ist. Die gemeine Vernunft ist nothwendig. die Zwecke zu bestimmen, indem sie uns die Principia dijudicativa lehrt. Denn die Gelehrsamkeit lehrt uns nur geschickte Mittel zu Erhaltung der Zwecke zu wählen. Unter ihr Gebieth gehören die schönen Künste, weil hier alles auf den Geschmack ankömmt.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-027",
     "kind": "text",
     "aa": 314,
     "text": "Logica artificialis. Die Logic der Gelehrsamkeit ist die Wissenschaft der Regeln des richtigen Gebrauchs des gelehrten Verstandes.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-028",
     "kind": "text",
     "aa": 314,
     "text": "Jetzt kann man, nachdem die nöthigen Ideen vorangeschickt, eine richtige Definition geben.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-029",
     "kind": "text",
     "aa": 315,
     "text": "Die Logic ist eine Philosophie über die allgemeine Gesetze des richtigen Gebrauchs des Verstandes und der Vernunft t.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-030",
     "kind": "text",
     "aa": 315,
     "text": "Nun wollen wir jeden Begriff in dieser Erklärung zergliedern und aus einandersetzen, vorher aber dieses merken:",
     "ocrConf": 34
    },
    {
     "id": "philippi-s01-031",
     "kind": "text",
     "aa": 315,
     "ms": [
      {
       "p": 6,
       "i": 271,
       "raw": "«",
       "inferred": true
      }
     ],
     "text": "Logica kommt her von Aöyos (ratio) und wird auch sonst Philosophia rationalis genennet ; nicht weil sie durch die Vernunft t sondern weil sie von und über die Vernunfft philosophiret. Das rationale ist hier nicht die Form, sondern das Object, denn die Form kann rational seyn, es mag das Object oder die Materie seyn was sie wolle Z. E. in der Physich ist das Object die Körper, in der Mathematick die Größen: in beiden ist die Form rational, in beiden philosophirt man durch die Vernunfft. So kann man über die Welt, über die Menschen, über die Thorheit und Unvernunfft, kurz, über jeden Gegenstand philoßophiren, die Form ist immer rational.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-032",
     "kind": "text",
     "aa": 315,
     "text": "Wir haben in der Erklärung gesagt: die Logick philosophire über tue allgemeine Gesetze des richtigen Gebrauchs etc. etc.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-033",
     "kind": "text",
     "aa": 315,
     "text": "Die Gesetze die da bestimmen wie der Verstand richtig denken und urtheilen soll, heissen die objectiven Gesetze. Die Gesetze aber nach welchen unser Verstand würklich urtheilet, heissen (wie wir oben schon angeführet) die subjectiven Gesetze.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-034",
     "kind": "text",
     "aa": 315,
     "text": "Woher kommt es, daß unser Verstand nicht nach den objectiven Gesetzen handelt ?",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-035",
     "kind": "text",
     "aa": 315,
     "text": "Daß unser Verstand nicht so urtheilet und denkt wie er soll, oder daß er nicht nach den objectiven Gesetzen handelt, rührt bloß aus der Sinnlichkeit. Wenn wir auch den geringsten Grad des Verstandes hätten, so würden wir doch niemals falsch urtheilen. Der Mangel der Einschränkung würde unsre Urtheile bloß fehlerhafft machen.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-036",
     "kind": "text",
     "aa": 315,
     "text": "Daß wir so offt irren und falsch urtheilen und denken, das macht die »Sinnlichkeit, unter welcher wir alles dasjenige verstehen was ausser der Vernunft am Menschen ist. So offt wir also irren, so offt folgen unsre Urtheile nicht dem Verstand sondern der Sinnlichkeit und unsre Urtheile geschehen alsdenn nicht nach den Obicctiven sondern Subiectiven Pegeln.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-037",
     "kind": "text",
     "aa": 315,
     "aaEnd": 316,
     "pages": [
      {
       "p": 316,
       "i": 401
      }
     ],
     "ms": [
      {
       "p": 7,
       "i": 53,
       "raw": ";",
       "inferred": true
      }
     ],
     "text": "NB. Wir kennen die Regeln die unser Verstand ausüben sollte und ^\\ ir übertreten sie doch. Woher kommt es dann ? Die Ursache ist weil wir das Subject unsers Verstandes nicht ordentlich studiren, von welchem die Psychologie handelt. Es ist wunderbar, daß da so viele Gelehrte immer schreiben wie man seyn sollte, die wenigsten doch zeigen wie man wirklich ist. Sie schreiben Regeln vor wie man denken. urtheilen soll und selbst indem sie dieses schreiben, beobachten sie dieselbe nicht vollkommen. Man behauptet, daß beim Subjecte Fehler in der gantzen Natur seyen. Wenn eine Bombe nach einem Magazine geworfen \"wird und nicht dahin fällt, so ist der Fehler nicht im Subject zu suchen: die Bombe hat sich gantz genau nach den Naturgesetzen in der Schwere bewegt, aber nicht nach dem Wunsch und der Absicht des Schützens der sie warf.",
     "joined": [
      "layout"
     ],
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-038",
     "kind": "text",
     "aa": 316,
     "text": "Die Regeln die ich zum richtigen Gebrauch des Verstandes brauche, suche und nehme ich aus dem Verstände. Die Vernunfft sagt die Regeln nach welchen sie sich richten soll.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-039",
     "kind": "text",
     "aa": 316,
     "text": "Die Logick soll ein Vorbereitungsmittel seyn zu den andern Wissenschafften. Sie muß also am nächsten gränzen an die gemeine Vernunfft und gantz begreiflich abgefaßet werden. Würde sie hoch philosophisch seyn, so müste man eine andere Logic zu einem Organo brauchen um jene zu verstehen; wie z. E. derjenige die Logic schon inne haben muß, welcher des Crusii Logic verstehen will.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-040",
     "kind": "text",
     "aa": 316,
     "text": "Wir haben in der Erklärung gesagt: die Logick ist eine Philosophie. Warum kann man sie nicht durch eine Wissenschafft erklären ? Darum 1. weil das Wort Wissenschafft zu allgemein ist. 2. weil die Logick ein Theil der Philosophie ist.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-041",
     "kind": "text",
     "aa": 316,
     "ms": [
      {
       "p": 8,
       "i": 161,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Wenn man den Ursprung der Logick untersuchet, so scheint es ein Paradoxon zu seyn, daß man die Regeln des Verstandes welche in der Logick vorgetragen werden aus dem Verstände selbst hernimmt. Allein dieses Paradoxon verschwindet, wenn man bedenkt, daß man sich ihrer nicht bewust ist.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-042",
     "kind": "text",
     "aa": 316,
     "text": "1. Alle Logic muß entspringen aus der Analysis (Zerghederung) des gemeinen Verstandes z. E. der gemeine Verstand denket, urtheilt. schlüßt. Wenn man zeiget wie die Gedanken einer aus dem andern folgen, wie der Verstand bewogen wird etwas vor wahr zu halten, wie er unbekannte Sätze aus bekannten etc. etc. schlüßet; so kann man daraus einen Zusammenhang von Regeln entwerfen, welcher sodann eine Logic vorstellt.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s01-043",
     "kind": "text",
     "aa": 316,
     "aaEnd": 317,
     "pages": [
      {
       "p": 317,
       "i": 465
      }
     ],
     "text": "2. Gründet sich die Logic auf die Critic d. h. den Inbegriff der Regeln des gemeinen Verstandes. Durch die Analysis fange ich an die Regeln, der ich mir bewust bin, nur in gewisse künstliche Formeln zu bringen, nach welchen ich als nach einer gewissen Vorschrift zu critisiren anfange. Denn bey der Zerghederung beobachten wir schon gewiße Regeln, ohne uns derselben bewußt zu seyn, noch bewußt werden zu können. Die Logic ist also eine Theorie der Vernunffterkenntniß. Eine Theorie ist ein Irmbegriff solcher Lehren, die unabhängig von der Erfahrung aus der Vernunfft a priori Beweise bekommen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-044",
     "kind": "text",
     "aa": 317,
     "ms": [
      {
       "p": 9,
       "i": 974
      }
     ],
     "text": "In der Erfahrung werden die Urtheile in concreto nicht gefällt gemäß den Regeln in abstracto, sondern die Regeln in abstracto entspringen aus denen in concreto. Diesemnach ist die Logic eine Theorie aus der Zergliederung der Vernunft und eine Critic, d. h. der Inbegriff der Regeln des gemeinen Verstandes, worinn sie mit der Aesthetic (von aio~0dvonou) übereinkommt, nur daß die Logic eine demonstrable, die Aesthetic aber eine indemonstrable Critic ist. Darum heißt sie auch eine Theorie aller Vernunfterkenntniße, weil sie dogmata und Lehrsätze enthält, die gelehret werden können, und von dem Geschmack keine Theorie gegeben werden kan weil hier alles auf einzelne Empfindungen ankömmt. Denn diese kann ihre Regeln nicht beweisen warum sie so und nicht anders sind; sie stehen alle unter dem gemeinen Verstände. Ist ein Gedicht gleich nach allen Regeln der Aesthetic und Dichtkunst abgefaßt und gefällt doch nicht; so wird man eher glauben, daß alle Regeln falsch sind, als daß ein solches Stück schön wäre.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-045",
     "kind": "text",
     "aa": 317,
     "text": "Der gesunde Verstand unterscheidet sich dadurch, daß die Urtheile in abstracto von den Urtheilen in concreto hergenommen werden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-046",
     "kind": "text",
     "aa": 317,
     "text": "Die Logic soll ein Organon der Wissenschafften seyn, nicht aber der gemeinen Vernunfft. Ihr Nutzen ist dieser:",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-047",
     "kind": "text",
     "aa": 317,
     "text": "1. Sie dienet zu einem allgememen Catharcticon und ist der gemeinen Vernunfft unentbehrlich, indem sie dieselbe von Irrthümern und Vorurtheilen reiniget. So wie die Kunst aller Arzeney darauf hinausläufft nicht die Gesundheit zu geben, sondern nur die Uebel zu heben die der Gesundheit schädlich sind: so kann auch die Logic keinen Verstand geben, sondern nur das was wir verderbt, beßern. Würden wir zu Irrthümern nicht so geneigt seyn, so würden wir cüe Logic auch nicht für so unentbehrlich halten. Philosophie und Wissenschafften erfordern einen höhern Grad des gesunden Verstandes ; Logic bestimmet die Grentzen desselben in Ansehung der Reinigung und Verwahrung für Irrt Immer.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-048",
     "kind": "text",
     "aa": 317,
     "text": "\"2. Durch die Logic können wir die Producte des menschlichen Verstandes in den Wissenschafften kritisiren, ob man sie gleich nicht verbessern kann.",
     "dehyphenated": 1,
     "ocrConf": 33
    },
    {
     "id": "philippi-s01-049",
     "kind": "text",
     "aa": 317,
     "text": "!<-h kann in der Critick verfahren",
     "ocrConf": 25
    },
    {
     "id": "philippi-s01-050",
     "kind": "text",
     "aa": 317,
     "aaEnd": 318,
     "pages": [
      {
       "p": 318,
       "i": 127
      }
     ],
     "text": "1. als ein Liebhaber (wenn wir unser Urtheil auf den Gebrauch des gemeinen Verstandes gründen, und uns ohne Kunstwörter ausdrükken), der von gewissen Sachen die er zwar nicht versteht aber doch lieb hat urtheilen kann ob sie recht seyen oder nicht, aber diese seine Critick nicht förmlich aus drücken kann. Z. E. wenn einer der die Music nicht versteht, einen spielen höret und sein Urtheil giebt ob es unangenehm klinget oder nicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-051",
     "kind": "text",
     "aa": 318,
     "ms": [
      {
       "p": 10,
       "i": 309
      }
     ],
     "text": "2. als ein Kenner wenn man die Sache versteht die man beurtheilt und den Fehler, den man in der zu kritisirenden Sache findet, durch gewisse recipirte Urtheile, Formeln, Canones ausdrücken kann (und dieses ist der Endzweck der Logic), ob man gleich nicht sagt wie es besser seyn soll. Z. E. Wenn man eine Definition kritisirt und anführet, daß sie wieder die Regel verstößt: Definitio ne sit latior suo definito",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-052",
     "kind": "text",
     "aa": 318,
     "text": "Zur Kunstcritic gehört demnach Terminologie, daß man sich künstlich auszudrücken wisse; in der Aesthetick lehrt man ein kunstmässiges Critisiren.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-053",
     "kind": "text",
     "aa": 318,
     "text": "3. Als ein Meister, wenn man das Product welches man critisiret, selbst verfertigen und besser machen kann, und der Erfinder solcher Formeln und Regeln ist, die auf sein Ansehen allgemein recipirt werden. Solche Kunstrichter waren Wolf und Leibniz.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-054",
     "kind": "text",
     "aa": 318,
     "text": "Eine Erkenntniß ist logisch vollkommen, wenn sie vollkommen ist nach den Regeln der Logic.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-055",
     "kind": "text",
     "aa": 318,
     "text": "Die Logic ist zweierley 1. die theoretische.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-056",
     "kind": "text",
     "aa": 318,
     "text": "2. die practische.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-057",
     "kind": "text",
     "aa": 318,
     "text": "Die theoretische ist die die Bedingungen zeigt, unter welchen eine Erkenntniß logisch vollkommen ist. Sie enthält dazu prmcipia rationalia. Die practische zeigt die Mittel an durch welche wir die Bedingungen der logischen Vollkommenheit erfüllen können per principia empirica. Eben so wie die Moral theoretisch ist welche die Criteria der sittlichen Vollkommenheit zeiget und practisch, welche die Mittel anzeiget zur selbigen zu gelangen.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-058",
     "kind": "text",
     "aa": 318,
     "text": "In der theoretischen Logic beschäftigen wir uns bloß mit den Begriffen von dem, was wahr oder falsch ist, in der practischen Logic aber werden nur Regeln gelehret, die wir beobachten müßen, wenn wir das Wahre vom Falschen unterscheiden wollen, es werden uns Mittel angewiesen, wie wir dabey zu verfahren haben, und sie ist eine practische Disciplin, die die subjectiven Regeln der menschlichen Vernunft lehrt.",
     "dehyphenated": 2,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-059",
     "kind": "text",
     "aa": 319,
     "text": "Auf solche Weise hat man zweierley principia der Logic 1. rationalia 2. practica. Die lezteren fehlen noch sehr. In den sogenannten practischen Logiken sind der Fragen viel, aber die Auflösung mehren -theils tautologisch. Die Logic ist eine Philosophie; mithin kann hier eingerückt werden, was von der Philosophie überhaupt zu sagen ist.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-060",
     "kind": "text",
     "aa": 319,
     "text": "Defin. Philosophia est scientia rationalis de rerum qualitatibus.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-061",
     "kind": "text",
     "aa": 319,
     "text": "Durch die rationale Erkenntniß wird sie von andern Erkenntnissen. die historisch oder empirisch sind, unterschieden.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-062",
     "kind": "text",
     "aa": 319,
     "text": "NB. Die Naturkunde begreifft 1. die Historie der Natur, was die Erfahrung lehret. 2. die Mathematik der Natur, was die Grössen betrifft, 3. die philosophische Erkenntniß.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-063",
     "kind": "text",
     "aa": 319,
     "ms": [
      {
       "p": 11,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die historische Erkenntniß hat nichts mit der Vernunfft zu thun. sondern nur höchstens mit dem Verstände. So kann man selbst die Philosophie historisch erkennen. Wenn ein Gewitter entsteht, so muß Verstand da seyn um alles was vorgeht zu betrachten; aber wenn man ein Gewitter historisch beschreiben soll: so kann der Verstand von selbst nichts vor sich thun, sonst wäre es Erdichtung und nicht Historie. Die Philosophie ist nicht eine Erkenntniß der gemeinen und gesunden Vernunfft, sondern eine Wissenschafft derselben.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-064",
     "kind": "text",
     "aa": 319,
     "text": "Welche Erkenntniß ist von solchem Grad, daß sie philosophisch wird ? Eine jede Erkenntniß, in so fern sie urtheilet was a posteriori erkannt werden kann ist die gemeine Erkenntniß. Wenn man aber allgemein a priori urtheilt, hat man schon eine philosophische Erkenntniß. Wenn ein Schneider über die bedrängten Zeiten, Geldmangel etc. etc. klagen würde, so hätte er eine gemeine Erkenntniß. Sagt er aber die allgemeine Klage liegt im Luxus; so fängt er schon an zu pbilosophiren. Denn dieses Urtheil nimmt er blos aus seiner Vernunfft. Ein verstümmelter Bettler urtheilt schon philosophisch wenn erglau lit . daß ob ihm gleich ein Glied fehlt, dennoch von seinem eigenen Selbst nichts abgegangen. Die Menschen müssen im moralischen expreß nach der Vernunfft urthcilen. Wenn alle Welt voller Laster wäre; so würden doch einige das Sittliche erkennen nicht aus Erfahrung, nein, aus der Vernunfft.",
     "dehyphenated": 1,
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-065",
     "kind": "text",
     "aa": 319,
     "text": "Der gemeine Verstand zeigt sich bey geringen Leuten nirgend! mehr, als in der Beurtheilung des Sittlichen. Aber er nimmt nur seine Urtheile her von Fällen in concreto; aber der Gelehrte ziehet sie aus abstract is.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s01-066",
     "kind": "text",
     "aa": 319,
     "text": "Die philosophische Erkenntniß ist also von der gemeinen Erkenntniß unterschieden darinn, daß sie a priori, die gemeine Erkenntniß aber a posteriori entsteht.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-067",
     "kind": "text",
     "aa": 320,
     "text": "Die Philosophie handelt de rerum qualitate. Alle Wissenschafften unterscheiden sich von der Mathematic und Philosophie.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-068",
     "kind": "text",
     "aa": 320,
     "ms": [
      {
       "p": 12,
       "i": 0,
       "approx": true
      }
     ],
     "text": "Diese beide sind der Form nach zwar gleich; denn sie sind beide Wissenschaff ten des gelehrten Verstandes : der Materie nach aber sind sie unterschieden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-069",
     "kind": "text",
     "aa": 320,
     "text": "Der Gegenstand der Mathematic ist immer identisch, das Object der Philosophie heterogen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-070",
     "kind": "text",
     "aa": 320,
     "text": "Bey aller Erkenntniß muß man Materie und Form unterscheiden. Jene heißt das Object der Wissenschaft, und diese der modus cognoscendi.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "philippi-s01-071",
     "kind": "text",
     "aa": 320,
     "text": "Wer ein Landgut kaufft betrachtet es gantz anders philosophice nach der Beschaffenheit des Landes, der Wiesen, des Ackers etc. etc. und gantz anders mathematice nemlich nach der Grösse, nach der Anzahl Hüben, Gebäude etc. etc. Philosophie und Mathematic sind heterogeneisch, denn ihre Objecte sind sehr verschieden.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s01-072",
     "kind": "text",
     "aa": 320,
     "text": "Doch ist auch in der Form ein verborgener Unterschied, nämlich der Gebrauch der Methode der Mathematik ist unterschieden von dem der Philosophie. In der Mathematic betrachte ich nur die Grösse und diese ist nichts anders als eine vielfältige Wiederholung eben desselben durch das Achtgeben auf das Verhältniß. Die Grundsätze der Mathematik können angesehen werden als principia empirica peregrina; Mathematik betrachtet die Coordination die Zusammennehmung der Ideen.",
     "dehyphenated": 3,
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-073",
     "kind": "text",
     "aa": 320,
     "text": "Philosophie betrachtet die Genesin, die Subordination der Begriffe z. E. Wenn zwey spielen, wer wird gewinnen ? Der Mathematicus erwegt die Menge der Gründe, der Philosoph ihre Wichtigkeit. In der Philosophie fragt man, was das Verhältniß der Ursache zur Wirkung sey. Der Mathematiker kann daher auch ohne gar zu großen Verstand wohl fortkommen.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-074",
     "kind": "text",
     "aa": 320,
     "text": "Alle mathematische Definitionen und alle Begriffe sind wirklich und unfehlbar. (In der Philosophie sind sie vorher bestimmt und nothwendig.) Denn der Mathematiker nimmt sich etwas vor und erkläret es so wie er es will und nöthig hat. Wie z. E. Wolf das Licht, den Raum, die Lufft etc. etc. in der Mathematic erkläret. Dem Philosophen aber wird etwas gegeben. Wer in der Philosophie etwas so definiren wollte, wie er es zu seinem System braucht ; ille Gryphis iungere equis. Wolf hats so gemacht.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-075",
     "kind": "text",
     "aa": 321,
     "text": "Die Philosophie ist",
     "ocrConf": 31
    },
    {
     "id": "philippi-s01-076",
     "kind": "text",
     "aa": 321,
     "text": "1. Philosophia habitualis, eine Fertigkeit philosophiren zu können.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-077",
     "kind": "text",
     "aa": 321,
     "ms": [
      {
       "p": 13,
       "i": 0,
       "approx": true
      }
     ],
     "text": "2. Philosophia disciplinaris ein Zusammenhang (System) der Sätze. (Jene könte auch die subjective Philosoplne genannt werden, indem sie das Subject selbst bestimmen muß, diese die objective, insofern sie die Form zu philosophiren lehrt; d. i. wie man denken soll.)",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-078",
     "kind": "text",
     "aa": 321,
     "text": "Giebt es denn eine fertige und richtige Philosophie ? Wenn die wäre, so wäre das eine subjective Philosophie. (Eine scientifische Vernunfterkenntniß, wenn ich die Fälle in concreto, a priori zu beurtheilen weiß). Jetzt aber hat man nur ein lauter mögliches Wissen eine objective Philosophie wie man den Verstand brauchen soll.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-079",
     "kind": "text",
     "aa": 321,
     "text": "Andere Wissenschafften lassen sich lernen durch Belehrung anderer, indem wir alles bloß nachahmen. In der Historie kann ich mir nichts selbst ersinnen ; ich muß andern folgen ; in der Mathematic auch. Pascal konnte in seiner zarten Kindheit schon alle geometrische Figuren machen und da man ihm die Bücher nahm, machte er sie aus seinem Kopfe nach.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-080",
     "kind": "text",
     "aa": 321,
     "text": "Allein wenn einer auch alle philosophische Bücher liest; so ist er doch nur ein Repositorium dieser Bücher, woferne er nur nach ihnen und nicht selbst denkt. Er hat bloß ein Epitome im Verstände von den gelesenen Sätzen. Er kennt sie bloß historisch ; das ist kein Philosoph. Daher kann ein Philosoph auch nicht im eigentlichen Verstände ein Gelehrter heissen, indem die Philosophie nicht gelehret werden kann. Denn 1. es giebt keine Philosophie die da zuverlässig wäre. 2. Wenn jemanden die Philosophie gelehret wird, und der auch noch so gut diese Sätze fassen würde, so wäre das doch kein Philosoph, der die Sätze des andern in sich nur abdrückt.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-081",
     "kind": "text",
     "aa": 321,
     "text": "Das ist ein Philosoph, der die Fertigkeit zu philosophiren besitzt. Ein solcher muß Genie haben.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-082",
     "kind": "text",
     "aa": 321,
     "text": "Genie ist ein Originalgeist, der ohne Nachahmung vollkommene Producte hervorbringt. Das Originale zeichnet sich vor andern aus, ist karacteristisch; und ein Originalgeist ist 1. der keinen neben sich hat 2. der seine Geschicklichkeit nicht durch Nachahmung, sondern durch sich selbst hat. Genie ist ein Originalgeist.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-083",
     "kind": "text",
     "aa": 321,
     "aaEnd": 322,
     "pages": [
      {
       "p": 322,
       "i": 269
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 237,
       "raw": "u",
       "unresolved": true
      }
     ],
     "text": "NB. Original ist nicht allemal ein Urbild, es heißt nur der nicht nachahmt. Die Engelländer, Originalgeister, die ohne Nachahmung aus sich selbst geschrieben, haben öffters wiedrige und falsche Sätze vorgetragen nur um Original zu seyn. Es giebt Wissenschafften 1. der Erlernung, die man in der Schule seinem Lehrer nachahmt; aber auch 2. des Genies.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-084",
     "kind": "text",
     "aa": 322,
     "text": "Die habituelle Philosophie ist von der Art, kann also nicht erlernet werden; ich lerne sie nur euoluiren. Die philosophischen Bücher dienen nur zur Gelegenheit seine Gedanken methodo philosophica auszudrücken. Ein philosophischer Kopf fängt an die Sätze die ihm der Lehrer giebt selbst zu prüfen und zieht offt seine Meinungen denselben vor. Er muß nicht die Definitionen lernen, sondern selbst erfinden können. Zu der Mathematik wird nicht so viel Genie erfordert. Man darf sich nur nach den Büchern richten. In der Philosophie aber sind keine untrüglichen Bücher. Eine Philosophie die untrüglich wäre, würde von unschätzbarem Werth seyn. Man muß indessen die Methode lernen wie man solche Bücher beurtheilen kann.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-085",
     "kind": "text",
     "aa": 322,
     "text": "Denominatio. Philosophia von <piÄ£00 und (7096s. Einige sagen es sey der Name nicht angemessen, indem die Philosophie ein Sitz der Weißheit sey. Allein diese Benennung ist sehr gut und wohl nicht glaublich, daß sie von ohngefähr sollte erfunden seyn. Ueberhaupt man findet in solchen Namen öffters die fernsten Begriffe die sich sehr lange erhalten haben und von vielen Gelehrten sind gebilliget worden. Die menschliche Weißheit ist ja nichts als Wissen und Forschen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-086",
     "kind": "text",
     "aa": 322,
     "text": "Wenn die Philosophie als ein Stück der Gelehrsamkeit und nicht der Weisheit angesehen wird, so giebt es viele Verstandes und Vernunft Erkenntniße, von denen man fragen könte, was sie denn vor einen Nutzen hätten ?",
     "ocrConf": 49
    },
    {
     "id": "philippi-s01-087",
     "kind": "text",
     "aa": 322,
     "text": "Weltwissenschafft hat nichts an sich als die Theorie und strebet nur nach der logischen Vollkommenheit. Sie nimmt ihre Benennung her von der Welt, weil ihre principia aus der Welt entlehnet sind. Wenn wir die Philosophie aus unserer Illumination hernehmen; so ist das Begeisterung: nehmen wir sie aus der Illumination anderer; so ist es Offenbarung.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-088",
     "kind": "text",
     "aa": 322,
     "ms": [
      {
       "p": null,
       "i": 62,
       "raw": "»5",
       "unresolved": true
      }
     ],
     "text": "Alle Philosophen haben nur zu ihrem Zweck die Wissenschafften oder Geschicklichkeiten den Zuhörern beizubringen im Gebrauch der Vernunfft. Man hüte sich vor dem Luxus der Vernunfft, die reine Speculation.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-089",
     "kind": "text",
     "aa": 322,
     "text": "Durch die Philosophie müßen aller Erkenntniß Grenzen vorgezeichnet werden.",
     "dehyphenated": 1,
     "ocrConf": 57
    },
    {
     "id": "philippi-s01-090",
     "kind": "text",
     "aa": 323,
     "text": "2. Weltweißheit in so fern die Wissenschaft zur Beförderung (\\t>v wesentlichen Weißheit dienet.",
     "ocrConf": 24
    },
    {
     "id": "philippi-s01-091",
     "kind": "text",
     "aa": 323,
     "text": "Das ist die wahre Weißheit wodurch wir erkennen lernen 1. unsere große Bestimmung 2. die Mittel den Zweck zu erreichen. Einige Wissenschaffen des menschlichen Verstandes beziehen sich nur auf die Fertigkeit und Geschicklichkeit Mittel ausfindig zu machen um zu einem beliebigen Zweck zu gelangen. Die Philosophie zeigt beides. Locke hat die Bestimmung des menschlichen Verstandes, Hurae ihre Schranken beschrieben.",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-092",
     "kind": "text",
     "aa": 323,
     "text": "Metaphysik und Moral machen die wahre Weißheit aus. Die erstere zeigt die Bestimmung des Verstandes, die andere des Willens an. Physik ist keine Geschicklichkeit. Der Philosoph ist ein Theoreticus, der CTO90S (weise) ist ein Practicus.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-093",
     "kind": "text",
     "aa": 323,
     "text": "Alle Weltweißheit läßt sich in die practische und theoretische eintheilen. Jene heißt die Moral und enthält die Regeln der Vollkommenheit alles freyen Verhaltens. Diese ist die Logic und enthält die Regeln der logischen Vollkommenheit demnach auch Principia rationalia.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-094",
     "kind": "text",
     "aa": 323,
     "text": "Alle Wissenschaften setzen eine Unwißenheit und einen Staat voraus",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-095",
     "kind": "text",
     "aa": 323,
     "text": "Historia philosophiae.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s01-096",
     "kind": "text",
     "aa": 323,
     "ms": [
      {
       "p": null,
       "i": 1001,
       "raw": "i«",
       "unresolved": true
      }
     ],
     "text": "Alle Wissenschaften fangen an von der Zeit da die Menschen unter dem Schutz der Obrigkeit standen, von Menschen die Muße hatten und vor deren Wohl öffentlich gesorget wurde. Wenn man in Noth ist und für seinen Unterhalt kümmerlich sorgen muß, so fragt man nichts nach den Wissenschafften ; aber wenn man müssig ist, so wird man neugierig. Die Ungleichheit daß einer Herr und der andere Knecht ist, ist aus der Gewaltthätigkeit entsprungen. Die Gemächlichkeit einiger und die Anstrengung anderer, so jene Müssige ernähren musten; dies war der Anfang der Wissenschafften. Bey welchem Stande entstanden sie denn ? Diejenige von welchen man glaubte, daß sie lehren musten, waren die Priester: sie waren die ersten, die sie erfinden und aus ihnen Profession machen musten. Denn ohne Religion kann kein Staat seyn. Damals hatten sie aber noch keine Lehre der Religion. Man warf Fragen auf und hält sich berechtiget dieselbe den Priestern als welche dafür angesehen wurden daß sie lehren sollten vorzulegen. Diese musten daher um die Fragen beantworten zu können sich auf Antworten gefaßt machen. Die erste Wissenschafft, die auf solche Weise entstand, war die Moral; nach dieser entstand die Pneumatologie.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-097",
     "kind": "text",
     "aa": 324,
     "text": "Außer den Aegyptiern, Persern, Chaldäern, und Indianern haben keine andre Völcker Religionssysteme gehabt.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-098",
     "kind": "text",
     "aa": 324,
     "text": "Endlich aber erfolgte eine Revolution des Verstandes. Dieses geschah da man anfieng, unabhängig vom Priesterstande Wissenschaften zu treiben, und zu pliilosophiren. Die Völcker bey denen dieses zuerst geschah waren die Chineser und Griechen",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-099",
     "kind": "text",
     "aa": 324,
     "text": "Die Juden hatten keine Philosophie nöthig. In China philosophiren Aveder die Bonzen noch die Lamas, sondern die Mandarinen, da jene ihrem besonderen System nachhingen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-100",
     "kind": "text",
     "aa": 324,
     "text": "Es hat Völker gegeben die unabhängig von der Religion Spekulativisch philosophirten, und dieses thaten die Griechen und Chineser.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-101",
     "kind": "text",
     "aa": 324,
     "text": "China ist unter allen orientalischen Völkern das kultivirteste und als die Qvelle der Wissenschafften anzusehen. Die Priester in beiden Ländern schrieben gar kein Buch von der Religion.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-102",
     "kind": "text",
     "aa": 324,
     "text": "Egypten ist ein von alten Zeiten her sehr accurat eingerichteter Staat gewesen. Weil nun viele ruhige und müssige Stände da waren, die nichts zu thun als zu sehen hatten, wie sie sich von dem Volk unterscheiden könnten; so musten die Wissenschafften hervorkeimen. Daß aber die Wissenschafften nicht zur Vollkommenheit kamen, geschah weil sie nicht über eine gewisse Vorschrifft schreiten durfften. Wenn auch ein groß Genie sich fand ; so muste es nichts hervorbringen was über jene Vorschrifft war. Es muste nicht über die Grentze gehen die ihm seine elende Religion setzte. Confucius schrieb 550 Jahr vor Christi Geburth zuerst eine Moral. Sie enthält Grundsätze nach welchen Fürsten sollen erzogen werden, die auch im Ansehen allgemein angenommen wurden, und wodurch er der Mandarinen wohlthätige und gerechte Regierung zuwege brachte. Diese Moral nun steht an der Stelle eines Religionssystems. Sie konnte sich nicht recht ausbreiten, weil sie mit der Regierung verbunden war: so wie die ägyptische Philosophie durch die Religion gefeßelt wurde. Und so standen sie beide unter dem Zwang; gezwungen kann man nicht philosophiren. Wo die Philosophie den Grundgesetzen des Staats unterworfen ist, kann sie nie zur Vollkommenheit gelangen.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-103",
     "kind": "text",
     "aa": 324,
     "text": "Die Mathematic giebt durch ihre Ordnung, Evidenz, Praecision dem Verstände ein Muster und Abriß, wie nahe er demselben kömmt. Diese Wissenschafft hat angefangen mit der Schreibkunst, und sollen die Aegyptier sie erfunden haben aber nur empirice. Bey den Griechen erlangte sie erst ihre Vollkommenheit.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-104",
     "kind": "text",
     "aa": 325,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "n",
       "unresolved": true
      }
     ],
     "text": "Von der Philosophie der Aegyptier ist nichts bis auf unsere Zeiten gekommen.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-105",
     "kind": "text",
     "aa": 325,
     "text": "Bey den Chaldäern ist wahrscheinlich die erste Schrift erfunden worden. Ihr bekanntester Philosoph ist Zoroaster, bey den Persern Zerdust, welcher vielleicht derselbe ist, obgleich eben so viele Zoroasters als Herkuleße sind. Er lehrte 2 Principia, ein gutes, welches er Hormisdas und ein böses, welches er Ahriman nannte. Leibnitz glaubt, daß dieser der deutsche Herrmann sey, der unter der Regierung des Hormisdas einen Zug nach Persien gethan, und daß die Perser eine deutsche Nation sey, welches auch die viele deutsche Wörter in der persischen Sprache zu bestätigen scheinen. Er soll zu den Zeiten des Darius Hystaspes die Religion der Perser eingerichtet haben. Das Buch, worin dieselbe verfaßt, heißt Zendavesta, welches Perron nach Europa gebracht und von einem hohen Alter ist.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-106",
     "kind": "text",
     "aa": 325,
     "aaEnd": 326,
     "pages": [
      {
       "p": 326,
       "i": 1541
      }
     ],
     "ms": [
      {
       "p": 16,
       "i": 0
      },
      {
       "p": 17,
       "i": 167,
       "raw": "it",
       "inferred": true
      }
     ],
     "text": "Die Wißcnschaften des Genies floriren besonders m kleinen freien Staaten die nebeneinander liegen. Die Freiheit erwekt den Geist und entzündet die Nacheif erung : und so war Griechenland beschaffen, (Engelland hat mit diesen griechischen Stadtstaaten noch einige Analogie). Den Bürgern dieses Landes standen alle Stände offen. Wie ein Mißbrauch in ldeinen Staaten nicht lange bleibet, in dem einer den andern kritisirt und auslacht, da hingegen in großen Staaten derselbe immer fortdauret : so wurde auch in Griechenland, wenn ein Mißbrauch in einer Stadt entstand derselbe bald von andern durchgehechelt und dadurch eingestehet. Daher kommt es, daß die Sätze die sie in der Religion und sonsten hatten mit solchem Witz bekleidet sind, daß man sie auch noch jetzo bey ähnlichen Fällen in Schrifften anführt, in dem man schwerlich witzigere Gleichnisse erfinden kann wie z. E. die Sirenen, die Geschichte von der Büchse der Pandora und von solcher Art sind. Ueberhaupt können die Griechen angesehen werden als das schwatzhaffteste, leichtsinnigste und kurioseste der Völker. Ihre Schwatzhafftigkeit zeiget sich in der Untreue bey Erzählung der Begebenheiten. Da sind die wenigsten Historien, die nicht mit einer Menge von erdichteten Umständen vollgestopfet sind. Ihr Leichtsinn war die Folge ihrer Freiheit und man siehet ihn klar in dem Spott und Gelächter vieler und in der Gleichgültigkeit aller gegen die die Erzählungen welche das System ihrer Religion ausmachten. Ihre Neugierde war so groß daß wenn sie etwas was sie durch Kunst oder Genie verfertigten öffentlich aussetzten der gemeine Mann zulief und darüber raisonnirte. Hatte jemand was bewunderungswürdiges oder nützliches gefunden, so hatte er genug seinen Namen in öffentlichen Säulen prangen zu sehen ; eine Ehre die manche verdiente Generals vergeblich gewünschet haben. Es war auch nicht unbillig, daß man Producte des Geschmaks der Beurtheilung des gemeinen Verstandes überlies. Homer sang seine Gedichte gemeinen Leuten und Moliere laß seine Komödien seiner Magd vor, und er fand ihren Geschmack völlig übereinstimmend mit dem der Zuschauer.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-107",
     "kind": "text",
     "aa": 326,
     "text": "Pythagoras reisete nach Indien, um daselbst die Philosophie der Indier zu erlernen. Alles was man unter ihnen Philosophieähnliches antrift, ist die Lehre von der Metempsychose, und eine Art von stoischem System. Brahma ihr angeblicher Gesetzgeber und Urheber dieser Lehre, hat sie in einem Buch hinterlaßen, welches als ihr Gesetz Buch betrachtet werden kan, und Veden heißt, welches noch älter als der Perser ihr Zewa-Vesta. Ihre Philosophie war also eine Art von mystischer Moral. Sie haben noch jetzt eine Universität zu Benares.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-108",
     "kind": "text",
     "aa": 326,
     "text": "Die Asiaten sind sehr bilderreich (welches der Grund von allem Aberglauben und dem wenigen Wachsthum den die Wissenschaften in diesem Welttheile gehabt haben zu seyn scheinet), so wie die Franzosen an Einfällen reich sind. An den sieben Weisen wurde nur der spruchreiche Witz angetroffen, unter allen diesen Weisen war vielleicht der einzige Thaies nur ein Gelehrter und Solon der einzige Weise.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-109",
     "kind": "text",
     "aa": 326,
     "ms": [
      {
       "p": 18,
       "i": 0,
       "approx": true
      }
     ],
     "text": "Mit dem Confucius fieng sich die Philosophie der Chineser an, der sie nemlich in eine große Form brachte, in welcher sie nachher beständig geblieben, ohne daß neue Entdeckungen hinzugethan worden.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-110",
     "kind": "text",
     "aa": 326,
     "text": "Die griechischen Philosophen können unter zwo Klaßen gebracht werden, in die vor Einführung größerer Sclnüen. und in die so verschiedene Schulen einführeten. Zu jenen gehören die 7 Weltweisen, wofern sie den Nahmen verdienen. Dazumahl fieng die bürgerliche Verfaßung der Republiken sich an zu formiren, und diejenigen so sich bey solcher Gelegenheit hervorthaten, erhielten den Nahmen Weise.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-111",
     "kind": "text",
     "aa": 326,
     "aaEnd": 327,
     "pages": [
      {
       "p": 327,
       "i": 202
      }
     ],
     "text": "Die Gelehrsamkeit unterscheidet sich von der Weisheit darin, daß jene fast nur bloß speculativ, und diese mehr practische Regeln und Zwecke der Menschheit enthält. Socrates nante die ersten Plülodoxen. die andern aber Philosophen. Ihre ganze Philosophie bestand aus Sinnund Denksprüchen, die um so mehr geschätzt wurden je frappanter sie waren, und aus Bildern im Geschmak der asiatischen Griechen, welches überhaupt ein sicheres Merkmahl von wenigem Talente ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 35
    },
    {
     "id": "philippi-s01-112",
     "kind": "text",
     "aa": 327,
     "text": "Die Geschichte der griechischen Philosophie kann eingetheilet werden in die Schulen der practischen Philosophen, die aber eigentlich keine »Secte aus machten, sondern nur die Moral lehrten, wohin Diogenes Cynicus, Zeno, Socrates zu zählen, und in die contemplativische und Speculative oder theoretische Philosophen. Diese sondern sich wieder zu verschiedenen Klassen ab.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-113",
     "kind": "text",
     "aa": 327,
     "text": "Die Dogmatici, die eine völlige Gewißheit in den Vernunfftsätzen behaupten. Dogmata heissen Vernunfftwahrheiten, und man ist dogmatisch, wenn man die Vernunfftsätze nicht sucht sondern vor schon gefunden hält. Diesen setzten sich die Scepticer entgegen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-114",
     "kind": "text",
     "aa": 327,
     "text": "Die Dogmatiker unterscheiden sich",
     "ocrConf": 21
    },
    {
     "id": "philippi-s01-115",
     "kind": "text",
     "aa": 327,
     "text": "1. in die, welche aus principiis der Sinnlichkeit und",
     "ocrConf": 31
    },
    {
     "id": "philippi-s01-116",
     "kind": "text",
     "aa": 327,
     "text": "2. in die welche aus principiis der Vernunfft philosophirten.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-117",
     "kind": "text",
     "aa": 327,
     "text": "In die vooOnsvoi und 9aiv6|j£voi. Heraclitus machte den Unterschied. Die voouuevoi behaupteten, die Sinne wären falsch, sie zeigten nicht wie die Dinge wären, sondern nur wie sie durch die Dinge gerührt würden. Sie glaubten, daß die Philosophie sich einschränke auf die intelligibilia, und daß alle Gegenstände der Sinne, die gleichsam in einem beständigen Fluß wären, nur zur Philodoxie gehörten, nicht aber Gegenstände der Vernunfft seyen. Democritus, Leukippus, Epicurus vertheidigten das Gegentheil, daß die gantze Philosophie sich auf die Sensibilia beschränke.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-118",
     "kind": "text",
     "aa": 327,
     "text": "Aristoteles betrachtete den mundum scnsibilem und insensibilem. Er sagte daß die intellectuelle Begriffe zwar höher als die Sensitiue, aber doch mit ihnen auf einem Stamm erwachsen wären.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s01-119",
     "kind": "text",
     "aa": 327,
     "text": "Andere sagen wie Plato die intellectuelle Begriffe kommen aus einer innera Anschauung der Gottheit.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-120",
     "kind": "text",
     "aa": 327,
     "text": "Die (Jegenstände der reinen Vernunft sind alle moralische und metaphysische Erkenntniße, so wie die Gegenstände der Sinnlichkeit Phaenomena.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-121",
     "kind": "text",
     "aa": 327,
     "ms": [
      {
       "p": 19,
       "i": 0,
       "approx": true
      }
     ],
     "text": "Alle Philosophen älterer und neuerer Zeit haben eben dieselbe Materie oder (Jegenstände ihrer Philosophie nur ihrer Form nach sind sie unterschieden.",
     "ocrConf": 27
    },
    {
     "id": "philippi-s01-122",
     "kind": "text",
     "aa": 328,
     "text": "Die Dogniatiker unterschieden sich wiederum in verschiedenen Schulen, als die Jonische, die mit dem Thaies, einem der 7 Weisen anfieng, der seine Weisheit aus Egypten gehohlet hatte 2, die Eleatische 3, die Italische, deren Haupt Pythagoras war 4, die Platonische. Alle diese theilten die Welt ein in mundum sensibilem und intelligibilem. Die Begriffe von der sinnlichen Welt sagten sie. empfangen wir vermittelst den Sinnen von den äußern Gegenständen. Die Begriffe von der intellectualen Welt entspringen aus unserm Verstände. Die letzten Begriffe nante Pythagoras Numerus, Plato Ideen, und Aristoteles die Form, worunter sie alles verstanden, was durch den Verstand erkannt wird.",
     "dehyphenated": 4,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-123",
     "kind": "text",
     "aa": 328,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "18",
       "unresolved": true
      }
     ],
     "text": "Sokrates war kein Dogmaticus ; sein Zweifel war kein entscheidender Zweifel. Es folgen",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-124",
     "kind": "text",
     "aa": 328,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "19",
       "unresolved": true
      }
     ],
     "text": "2. die Dogmatici die bloße principia sensibilia annehmen. Dieser Haupt war Epikur. Er ist der einzige Philosoph des Alterthums. Denn man beurtheilt die Philosophie nicht nach den Sätzen, sondern nur nach der Methode, darinn aber ist er der vornehmste des Alterthums.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-125",
     "kind": "text",
     "aa": 328,
     "text": "Seine erste Regel war diese : da unsre Erkenntniße aus den Sinnen entspringen, so muß man das Original nennen.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s01-126",
     "kind": "text",
     "aa": 328,
     "text": "2. Man soll alle mystische, oratorische Ausdrücke meiden, und keinen Satz annehmen, den man nicht in concreten Fällen zeigen und sinnlich machen könnte.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-127",
     "kind": "text",
     "aa": 328,
     "text": "Durch das erste verbanne te er alle erbettelte Sätze aus seiner Philosophie und durch das zweite alle chimärische Begriffe und zog den Grundsatz daraus, daß das was nicht Gegenstand unsers äußern Sinnes ist, problematisch sey, und man nicht Grund hätte es gleich anzunehmen, daß dagegen alles was man für wahr halten soll, in Erfahrung müsse gezeigt und der äussern Sinnlichkeit vorgeleget werden können.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-128",
     "kind": "text",
     "aa": 328,
     "text": "So verlangte er alle Erkenntnisse aus sinnlichen Gründen herzuleiten. Schade ist es, daß dieser Epikur theils durch das Mißverhalten seiner Schüler, theils durch den Mißverstand seiner Sätze, woraus seine Feinde ihm die abscheulichsten Laster aufbürdeten, der Nachwelt so verhaßt geworden. Man beurtheilt ihn nachdem ihn Lucretius sem Schüler beschrieben und besinnet sich nicht auf die kühne Freiheit die sich Dichter in ihrer Schreibart nehmen. Würde nicht ein Haller, wenn man ihn nach seinen Schrifften beurtheilen wollte, verdienen ein Ketzer genannt zu werden.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-129",
     "kind": "text",
     "aa": 329,
     "ms": [
      {
       "p": 20,
       "i": 205
      }
     ],
     "text": "Er suchte nur die Dogmaticos die in lauter idealischen Welten herumschwärmten, zurückzubringen. Woher regnet es ? Man sagt die Vorsicht verordnet es so. Ja denn hört aber alle Philosophie auf. Zur Materia Substratum der Philosophie ist gegeben die Welt und nicht übernatürliche Dinge. Was man aber aus natürlichen Gründen nicht herleiten kann, das soll man nicht in die Philosophie setzen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-130",
     "kind": "text",
     "aa": 329,
     "text": "Er nahm das zu Principien an dessenWirkungsgesetze uns bekannt sind .",
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-131",
     "kind": "text",
     "aa": 329,
     "text": "Die Unsterblichkeit der Seele wovon er den Grund nicht durch die Sinne einsah, hat er weder affirmirt noch negirt.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s01-132",
     "kind": "text",
     "aa": 329,
     "text": "Das Vergnügen (voluptas) hielt er vor den Beziehungspunct seiner Philosophie. Er verstand darunter gar nicht die äussere niedrige sinnliche Ergötzlichkeiten. Sein massiges Leben beweiset es. Hierinn hat er nun wohl freilich Unrecht, aber keineswegs ist er deßwegen der groben Laster zu beschuldigen.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-133",
     "kind": "text",
     "aa": 329,
     "text": "Man muß die Tugend suchen, weil man in ihr die Glückseeligkeit findet, sagt er.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-134",
     "kind": "text",
     "aa": 329,
     "text": "Dies ist sein Fehler daß er behaupten wollte, unsere Vergnügen wären nicht Wirkungen des Geistes sondern der Sinnlichkeit. Dadurch setzt er indeßen nicht die grobe thierische Wollust zum Zweck ; sondern ließ einem jeden das geistige Vergnügen. Es ist dieses eine philosophische Beurtheilung des Phaenomeni, nicht eine Moral. Z. E. die Freude leitete er aus der Erwärmung des Herzens und der Harmonie des Blutes her etc. etc.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-135",
     "kind": "text",
     "aa": 329,
     "text": "Sein Principium war die Deutlichkeit und sowohl deswegen als wegen des Grundsatzes der Glückseeligkeit oder des Vergnügens (im Grunde betrachtet sind diese beide Begriffe einerley. Das nennen wir Glückseeligkeit was unsern Neigungen angemessen ist) kann er der Philosoph der Grazien genennet werden, der den Weg der Tugend mit Rosen bestreuet.",
     "ocrConf": 55
    },
    {
     "id": "philippi-s01-136",
     "kind": "text",
     "aa": 329,
     "ms": [
      {
       "p": 21,
       "i": 104
      }
     ],
     "text": "Wollte man ihn nach der Schilderung beurtheilen die uns Lukrez von ihm hinterlassen, so würden wir eben so unrichtig handeln als wenn wir Hallers Glaubenssystem aus seinen Schrifften beurtheileten.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-137",
     "kind": "text",
     "aa": 329,
     "text": "Epikur behauptete die Erkenntniß durch die Sinne sey allein einer Wissenschafft fähig und gewiß.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-138",
     "kind": "text",
     "aa": 329,
     "text": "Plato hielt hingegen nur die intellectuelle Erkenntnisse für eine Wissenschafft und für Wahrheiten.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s01-139",
     "kind": "text",
     "aa": 329,
     "text": "Alle Wahrheit und alle Erkenntniß kam nach ihm aus den Ideen her, die die Seele aus einer innern Anschauung der Gottheit und Abkopirung dieses Urbildes empfängt.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-140",
     "kind": "text",
     "aa": 330,
     "text": "Beide glaubten, daß zwischen dem Intellectualen und Sensitiven ein wesentlicher Unterschied sey. Dieser war sehr mystisch, dunkel, enthusiastisch; jener deutlich, sinnlich, natürlich.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-141",
     "kind": "text",
     "aa": 330,
     "text": "Aristotel sagte der Verstand sey eine Methode sich der Sinnlichkeit zu bedienen; Tod ist das Ende aller Sinnlichkeit, er machte den positiven Grundsatz Nihil est in intellectu quod non antea fuit in sensu.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-142",
     "kind": "text",
     "aa": 330,
     "text": "Sokrates der das Urbild in sich zu kopiren suchte, sagte, der Mensch habe keinen grössern Gegenstand als den Menschen.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-143",
     "kind": "text",
     "aa": 330,
     "text": "Er suchte die Schüler eine Mässigung im Entscheiden und den Zweifel des Aufschubs zu lehren und zupfte durch Ironien die stolzen Dogmatikers, gab aber ohne seine Absicht dadurch Gelegenheit zum Scepticismo. Denn einige seiner Schüler nahmen bloß diese Ironien zu ihrer Philosophie, griffen theils mit hämischer Spötterey, theils mit Trugschlüssen alle dogmatische Sätze an. Pyrrho der Urheber dieser Secte, deßen Wahlspruch das bescheidene non liquet war hatte dieses gar nicht zur Absicht. Er lehrte nur, daß man die Sätze der Philosophie nicht sogleich annehmen und entscheiden sondern anfänglich daran zweifeln solle bis man untrüglich davon überzeuget ist. Daraus machten seine Nachfolger einen categorischen Zweifel, daß alles ungewiß ist.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-144",
     "kind": "text",
     "aa": 330,
     "text": "So wunderlich auch diese Secte und so unnütz sie auch zu seyn scheinet; so hat sie doch indirecte grossen Nutzen geschafft. Denn sie haben zum Wetzstein der menschlichen Erkenntniß und Vernunft gedienet, sie nanten sich Academici.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-145",
     "kind": "text",
     "aa": 330,
     "ms": [
      {
       "p": null,
       "i": 181,
       "raw": "vi",
       "unresolved": true
      }
     ],
     "text": "Sie verhielt sich neutral, wollte sich aus Argumenten gar nicht überzeugen lassen, die sie wirklich überzeugen konnten, kurz sie waren Freigeister. Sie verlangten, daß ihre Schüler selbst an den Sätzen ihrer Lehrer zweifeln sollten.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-146",
     "kind": "text",
     "aa": 330,
     "text": "Die Römer machten von dieser Philosophie sehr viel. In neuern Zeiten hat Hume jedoch in verklärter Gestalt in solcher Denkungsart geschrieben.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-147",
     "kind": "text",
     "aa": 330,
     "text": "Die cynische Sekte hatte zu ihrem Objeet die Einfalt und Unschuld. Sie betrachteten den natürlichen Menschen.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s01-148",
     "kind": "text",
     "aa": 330,
     "text": "Roußeau hat die Natur des Menschen zu entwerfen sich bemühet. Jedes Original ist unverständlich : selbst der der es findet versteht es nicht. So geht es ihm auch bey einigen.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s01-149",
     "kind": "text",
     "aa": 330,
     "text": "Die Stoiker zogen ihre Philosophie auf die enthusiastische Bürgertugend. Dieses gab ihnen die Miene des Erhabenen.",
     "dehyphenated": 1,
     "ocrConf": 24
    },
    {
     "id": "philippi-s01-150",
     "kind": "text",
     "aa": 331,
     "text": "Was könnte den Römern, deren Gottheit die Republick und deren Religion die Bürgertugend war, reizender sein als diese Philosophie.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-151",
     "kind": "text",
     "aa": 331,
     "text": "Die Römer zeugten kernen Originalphilosophen, alles Sectirer. Sie entlehnten nicht die Theorie, sondern die Praxin aus dem Aristotel und Plato. Ihre wahre Philosophie machte ihre Rechtsgelehrsamkeit aus; und hierinn zeigten sie gewiß vielen Verstand. Ihr Recht halte man nicht für eine Gedächtnißsache; es ist einer mathematischen Methode fähig und dienet noch jetzo in allen Staaten zur Regel. Im X I . Seculo kamen ihr Leges XII. Tahular. in Vergessenheit. (Nach der Zerstöhrung des römischen Reichs hörten alle Wissenschaften auf.) Sie lebten aber wieder auf nachdem zu Amalfi, zu Neapel die Pandecten gefunden worden. Diesen hat man vielleicht einen großen Einfluß auf die menschliche Erkenntniß zu danken.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-152",
     "kind": "text",
     "aa": 331,
     "ms": [
      {
       "p": null,
       "i": 472,
       "raw": "«",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "Als die Christenheit sich ausbreitete, kam Plato empor. In seiner Philosophie ist alles Ideal; der Verstand von aller Sinnlichkeit get rennet wird sich selbst überlassen; und eben so sind die Sätze der Religion zu betrachten. Daher schien den Christen die platonische Philosophie am besten zur Erklärung der Religionswahrheiten dienen zu können. Man fand aber nicht was man suchte ; deßwegen fiel Plato, und Aristotel, der den Verstand mit der Sinnlichkeit in seiner Philoso phie verbindet, kam an seine Stelle. Die Erhellung der Religion, das Reformationswerk war es was ihn heruntersetzte. Alle Wissenschafften sind in ihr der Religion verbunden. Solange man in dieser unter dem Zwange denken mußte ; schwieg der Witz und alle Künste ; als man in dieser Freiheit und Licht bekam, erhüben sich die Wissenschafften. Die heidnische Religion war die Gelegenheit zur Bildung der mehresten besonders der schönen Wissenschafften und Künste. Denn da diese bloß auf die Sinnlichkeit sich erstrekte; so konnte sie nicht anders als die Wissenschafften der Sinnlichkeit erwecken. Michel Angelo gesteht, daß ein einziger Klotz ohne Kopf und Arme der von den Römern geschnitzelt worden und den Herkul vorstellen sollte, seine Schule gewesen wo er seine Kunst gelernet. Sie übertrafen die Schönheit der Natur. Apollo eine Bildsävde des alten Roms die noch bis jetzt ist erhalten worden kann ohne Verwunderung über die Geschicklichkeit des Künstlers nicht betrachtet werden. Ihre Poesie, Redekunst etc. etc. erreichte die höchste Vollkommenheit. DemostheneSj Homer. Cicero und Virgil werden immer die Urbilder bleiben.",
     "dehyphenated": 6,
     "ocrConf": 35
    },
    {
     "id": "philippi-s01-153",
     "kind": "text",
     "aa": 332,
     "text": "Werden denn nicht von unsern auch einige der Nachwelt zu Urbildern dienen und aufbehalten werden ? Nein ; denn die jetzigen Sprachen sind der Veränderlichkeit unterworfen. Geliert wird wie Hans Sachse und viele neueste französische Bücher als Montaigne der Nachwelt unverständlich werden.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-154",
     "kind": "text",
     "aa": 332,
     "text": "Es ist beynahe nicht wahrscheinlich, daß außer den bereits todten Sprachen, noch andre aussterben sollten, die wahrscheinlichste Ursache davon scheint die Un Veränderlichkeit der Religion, und die daß wir kerne neue heilige Bücher haben werden, zu seyn. Durch die Reformation war das Sinnliche welches sich neben der christlichen Religion eingeschlichen, abgesondert, sie erhielt mehr geistiges, und Plato ward daher ein Lieblings Philosoph.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-155",
     "kind": "text",
     "aa": 332,
     "ms": [
      {
       "p": null,
       "i": 198,
       "raw": "«4",
       "unresolved": true
      }
     ],
     "text": "Endlich erfolgte mit der Ueberschwemmung der Barbaren, der gänzliche Verfall aller Wissenschaften und Künste. Unterdeßen gewann Europa unter denselben eine neue Gestalt. Durch die Anlage zum Guten, so sie hatten, und durch den Geist der Freyheit so sie mit sich nach Europa brachten. Die Araber fiengen, nachdem sie Africa überschwemmet hatten, zuerst an den Aristoteles, der ihrem Character am angemeßensten war, zu erklären, und in das arabische zu übersetzen. Ihnen schreibt man auch die Erfindung der Universitäten zu. Samarcand in der Tartarey und Corduba in Spanien sind ihre berühmtesten Universitäten gewesen.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-156",
     "kind": "text",
     "aa": 332,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "*s",
       "unresolved": true
      }
     ],
     "text": "Dagegen werden jene lateinische und griechische Autores immer Urbilder bleiben, weil sie in unveränderlichen Sprachen geschrieben sind : denn die Unveränderlichkeit der Religion deren heilige Lehren in griechischer und lateinischer Sprache geschrieben sind, ziehet die Unveränderlichkeit dieser Sprachen nach sich.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-157",
     "kind": "text",
     "aa": 332,
     "text": "Bey der Wiederauf lebung der Wissenschaften kam Aristoteles in Ansehen, bey welchem er sich so lange erhielt, bis das päbstliche Ansehen durch die Reformation einen Stoß bekam, da dann wieder das Ansehen des Plato stieg, in welchem er sich noch jetzt erhält. Da die Philosophie deßelben blos speculativ ist, folglich mit der Religion, die fast ganz geistig ist, in einer sehr genauen Verbindung steht, und diese für den Menschen das Intereßanteste ist, so hat von derselben alles übrige, eine gewisse Gestalt bekommen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-158",
     "kind": "text",
     "aa": 333,
     "text": "Je geistiger eine Religion ist, je größer ist der Mangel an schönen Künsten, und alles enthält daher eine traurige und melancholische Gestalt. Die Religion hat auch die alten Sprachen, und mit denselben auch zugleich die Denkmäler des großen Geists der Alten bis auf unsre Zeiten gebracht.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-159",
     "kind": "text",
     "aa": 333,
     "ms": [
      {
       "p": null,
       "i": 225,
       "raw": "34",
       "unresolved": true
      }
     ],
     "text": "Der grübelnde Verstand und verdorbene Geschmack erhielt den Aiistotel so lange. Ein jeder erklärte ihn nach seinen Absichten und suchte sich allerhand Subtilitäten heraus, womit er andere Sätze angrif. Alistoteis Philosophie war die vollkommenste und als vom Himmel eingeflößt, untrüglich.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-160",
     "kind": "text",
     "aa": 333,
     "text": "Die eigentliche Ursache des langen Ansehens des Aristotels war die despotische Regierung des Pabsts.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s01-161",
     "kind": "text",
     "aa": 333,
     "text": "Der träge und sclavische Schwärm der Mönche suchten abgeschlossen von der Welt ihre Gelehrsamkeit bloß in den höchst unnützen Speculationen, woran sie den Aristotel sehr fruchtbar fanden. Mit List klaubten sie aus ihm die Subtilitäten und suchten durch eine solche Art sich vom Pöbel zu unterscheiden; denn in der Religion durfften sie es nicht thun, da der Donner der Engelsburg sie gleich verfolgte; vielmehr mußten sie das Volk in der Unwissenheit der Religion und auch sich selbst darinn zu bestärken suchen. Daher war die Philosophie und auch nur die aristotelische dies einzige Mittel wodurch sie sich vom Volk unterscheiden konnten; und da wühlten sie in ihrer Philosophie die aus nichts als Distinctionen und lächerlichen Sublilitäten bestand immer fort; indeß daß ihnen die Unwissenheit anderer seraphische Namen zuwarf.",
     "dehyphenated": 4,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-162",
     "kind": "text",
     "aa": 333,
     "aaEnd": 334,
     "pages": [
      {
       "p": 334,
       "i": 855
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 578,
       "raw": "£»",
       "unresolved": true
      }
     ],
     "text": "Endlich verjagte das anbrechende Licht der Religion diese finstere Köpfe. Die Akademien, die neuen Gesellschafften der Gelehrten, die freye Formen der Städte hatten indessen sehr viel zu thun um das verwüstete Feld der Gelehrsamkeit wieder anzubauen. Aristotel hatte durch seine entscheidende und allgememe Aussprüche, die auch jeder so angenommen ungemein geschadet; so wie es nachher Leibnitz und Wolf eben dadurch versehen. Denn niemand bemühete sich mehr gewisse Sätze zu erforschen ; denn sie standen schon gantz ausgemacht im Aristotel, und da durffte man nicht zweifeln. So war Aristotel das Hinderniß und das Verderben der Philosophie, doch noch mehr war er es in Ansehung der schönen Wissenschafften. Indem die Scholastüter von aller Sinnlichkeit abstralnrten und den Verstand immer so herumschwärmen Hessen; niuste der Geschmack und alle schöne Künste schwinden. Denn nichts ist ihnen mehr entgegen. Er der Geschmack verlangt Augenscheinlichkeit und alle Sätze in sinnlichen Fällen in concreto zu sehen; die Scholastiker wollten davon nichts wissen und warfen sich nur immer mit ihren abstracten Sätzen herum.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-163",
     "kind": "text",
     "aa": 334,
     "text": "Die Neuern haben in einigen Wissenschaften keinen Vorzug vor den Alten z. E. in der Logic Metaphysic und Moral, obgleich ihre Bearbeitungen darin höher zu schätzen sind, als das Product so sie wirklich geliefert.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-164",
     "kind": "text",
     "aa": 334,
     "text": "In der Naturkunde und Rechtswissenschaft haben die Neuern einen wirklichen Vorzug. Die alten vermengten Moral und Recht der Natur miteinander, jetzt hat man beyde nicht nur unterschieden, sondern sie auch noch vom Staatsrecht abgesondert.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-165",
     "kind": "text",
     "aa": 334,
     "text": "Die Neuern haben einen wesentlichen Vorzug vor den andern. Man siehet jetzt die philosophischen Wissenschafften mit einem gantz andern Auge an. In der Metaphysik studirt man anjetzt nicht dogmatische Sätze wir vormals, sondern seinen reinen Verstand und dessen Gesetze. In der Logic hat man eine ganz andere Untersuchungsmethode, sie ists wo man sein eigen Subject studiret sowohl die Gesetze des Verstandes als der Sinnlichkeit. Die Methode der neuern Philosophen ist mehrentheils skeptisch, anstatt daß die Alten das dogmatische so sehr affectirten. Was hat aber wohl das meiste zur Besserung der Philosophie beigetragen ? Das, daß man sich mit großem Ernst auf die Naturlehre gelegt, und hierinn hat man auch vor den Alten einen großen Schritt voraus gethan. Die Ursache, daß die Physik so zugenommen, ist daß man Erfahrungen zu Rathe gezogen und durch Versuche die Natur erforschet. Die Alten vernachläßigten diese interessante Wissenschafften. Sie erschuffen sich durch ihren phantastischen Verstand idealische Welten, aus denen sie nichts bekommen und wollten diejenige nicht kennen lernen in der sie waren. Es ist wunderbar, daß die Griechen die Beobachtungen und Erfahrungen der Natur nicht geachtet. Ihre erstaunende Unbeständigkeit war Schuld daran. Sie haben nicht einmal eine Geographie gehabt. (Unterdeßen waren sie was die Lehre und die Claßification der Begriffe betrifft vortreflich.)",
     "dehyphenated": 6,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-166",
     "kind": "text",
     "aa": 334,
     "aaEnd": 335,
     "pages": [
      {
       "p": 335,
       "i": 130
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 54,
       "raw": "2K",
       "unresolved": true
      }
     ],
     "text": "Galilei fieng an die Naturlehre zu erhöhen, da er die Gesetze der Schwere untersuchte und aufzeichnete. Da man sähe was die Experimente für Nutzen schafften, setzte man sie eifrig fort und noch jetzt sind es die Gegenstände der Bemühungen ganzer gelehrter Gesellschafften.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-167",
     "kind": "text",
     "aa": 335,
     "text": "Zu den glücklichen Vorfällen die der Naturlehre Vortheil gebracht, gehören die dahin einschlagenden Erfindungen, der Mikroskopen und Telescopen, der Barometer und der Luftpumpe.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s01-168",
     "kind": "text",
     "aa": 335,
     "text": "Was die Methode der Philosophie betrifft, so ist Wolff derjenige dem man hierinn ein vorzügliches Verdienst beilegen muß. Man erwäge seine Werke wenn man von dem ausgedehnten Verstände dieses Mannes sich einen Begriff machen will. Die Deutlichkeit, die Genauigkeit der Erklärungen, die Ordnung der Beweise, dieses alles welches er in die Philosophie einführte, macht Wolfens Namen andenkenswürdig; und ob man gleich jetzo wieder alles schon in Verwirrung zu bringen sucht, indem man es vor sehr beschwerlich hält sich einer solchen zwingenden Methode zu unterwerfen, so sind doch die deutschen Köpfe schon daran so gewohnt, daß diese Lehrart nicht leicht erlöschen wird; und dies giebt Hofnung daß in Deutschland eher als anderswo in der Philosophie neue Erfindungen werden gemacht werden.",
     "dehyphenated": 5,
     "ocrConf": 45
    },
    {
     "id": "philippi-s01-169",
     "kind": "text",
     "aa": 335,
     "text": "Indessen hat er der Vernunfft einen großen Nachtheil dadurch gemacht, daß er alles dogmatisch entscheidet, alles definirt und vor ungezweifelt annimmt. Er glaubte, daß die Philosophie einer mathematischen Methode fähig sey und führe te sie auch wirklich ein.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s01-170",
     "kind": "text",
     "aa": 335,
     "text": "Lock ist derjenige welcher vornehmlich gearbeitet hat den Ursprung aller menschlichen Erkennt niß und die Schranken derselben genetisch zu erfinden. Er phüosophirt subjectiue.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-171",
     "kind": "text",
     "aa": 335,
     "text": "Crusius hat eine antiphilosophische Methode, die alle Philosophie zu Grunde richtet. Er giebt Dinge als subjectiue Gesetze an, die oft nur Wirkungen des Verstandes und nicht Gesetze sind. Er hat lauter Hirngespinste. Er wirfft alle Mittel der Prüfung weg.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-172",
     "kind": "text",
     "aa": 335,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "-ii",
       "unresolved": true
      }
     ],
     "text": "Von der Geschichte der Logic",
     "ocrConf": 29
    },
    {
     "id": "philippi-s01-173",
     "kind": "text",
     "aa": 335,
     "text": "insbesondere.",
     "ocrConf": 82
    },
    {
     "id": "philippi-s01-174",
     "kind": "text",
     "aa": 335,
     "aaEnd": 336,
     "pages": [
      {
       "p": 336,
       "i": 205
      }
     ],
     "text": "Die Logic ist ein weit späterer Theil der Philosophie, weil sie eine Critic des menschlichen Verstandes ist, ob sie gleich jetzo auf Academien zuerst gelehret wird. Sie ist mehr ein technisches Mittel das Verfahren des Verstandes mit Kunstwörtern zu bennen. Sie dienet dazu um unsre Begriffe unter gewiße Gattungen zu bringen und die Fehler anzuzeigen wo sie begangen sind. Sie würde noch später entstanden seyn, wenn man wirkliehe Erfindungen und nicht Hirngespinste zum Grunde in der Philosophie gelegt hätte. Man hat aber die Logic auf den gemeinen Gebrauch des Verstandes gegründet. Die ältesten Logiken sind nicht sowohl dogmatische Disciplinen als vielmehr einzelne allgemeine Lehrsätze. Die Logic der Pythagoräischen Schule war nichts anders als ein Mysticismus zum Nachtheil der Sinnlichkeit, bey welcher nach dem Urteil derselben und der Piatoniker keine Wahrheit, sondern bloß Schein befindlich sey, die alle Begriffe intellectual erklärten, und die ganze Welt als ein hieroglyphisch Buch ansahen, das die Zeichen zu den Begriffen enthielt die in dem Verstände des Menschen waren: da wir doch durch den bloßen Verstand nur allgemeine Eigenschaften der Dinge erkennen. Auf diese folgte die Logic des Epicurs welche bloß negativ war und aus wenigen Sätzen bestand. Ihr Endzweck war die menschliche Vernunft vor Irrthümern und Verwirrung zu bewahren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-175",
     "kind": "text",
     "aa": 336,
     "text": "In der Methode sich der Vernunfft zu bedienen ist geschrieben",
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-176",
     "kind": "text",
     "aa": 336,
     "text": "1. die mystische Logic die vom Euclides aus Megara der Zaubereien wegen gemacht war. Er lehrte zween entgegengesetzte Sätze auf gleiche Weise beweisen und wiederlegen. Hieraus entsprang eine Art der Affterphilosophen, die Dialektiker, große Disputirhelden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-177",
     "kind": "text",
     "aa": 336,
     "text": "Das griechische Volk wurde durch nichts mehr ergötzt als wenn es zwey Gelehrte vor sich zanken sähe. Daher suchten viele die Geschicklichkeit und List allem einen Schein zu geben, und mit diesen Waffen den andern anzugreifen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s01-178",
     "kind": "text",
     "aa": 336,
     "text": "Die dunkeln Zeiten des Pabsttums Maren auch voll solcher Dialektiker. Da ihre Logic nichts als ein Organon der Schwatzhafftigkeit war durch subtile verfängliche Fragen den andern bestricken zu können.",
     "dehyphenated": 1,
     "ocrConf": 35
    },
    {
     "id": "philippi-s01-179",
     "kind": "text",
     "aa": 336,
     "text": "Die zweite Logic des Alterthums ist die dogmatische a. die Canones des Epikurs. Dieser trug die Lehren vor, die sich auf die",
     "ocrConf": 46
    },
    {
     "id": "philippi-s01-180",
     "kind": "text",
     "aa": 336,
     "text": "Erfahrung gründen. Natürlich muste eine solche Logic durch die",
     "ocrConf": 50
    },
    {
     "id": "philippi-s01-181",
     "kind": "text",
     "aa": 336,
     "text": "Bestätigung der Erkenntnisse, durch sinnliche Fälle, dem Verstand",
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-182",
     "kind": "text",
     "aa": 336,
     "text": "großen Nutzen schaffen, Im Grunde betrachtet aber war es nur ein",
     "ocrConf": 40
    },
    {
     "id": "philippi-s01-183",
     "kind": "text",
     "aa": 336,
     "aaEnd": 337,
     "pages": [
      {
       "p": 337,
       "i": 20
      }
     ],
     "text": "Organon der Physik. l>. Aristotel entwarf wie man nicht nur die Erkenntniß der Erfahrungen sondern auch die des reinen Verstandes beurtheilen kann.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-184",
     "kind": "text",
     "aa": 337,
     "text": "Aber er verfiel auf lauter Subtilitäten in solchen Sachen, die ganz",
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-185",
     "kind": "text",
     "aa": 337,
     "text": "bekannt waren.",
     "ocrConf": 28
    },
    {
     "id": "philippi-s01-186",
     "kind": "text",
     "aa": 337,
     "text": "Die Akademiker wichen von der Lehre des Plato ab. Unter ihnen entstand die Secte der Sceptiker welche gleichsam Antilogici Wiedersprecher waren. Anstatt eine Logic oder eine Wissenschafft zur Erkenntniß der Vernunft zu geben, sagten sie es wäre gar keine Erkenntniß zu erlangen. Sie dienten indessen den Stolz der entscheidenden lind schwätzenden Dogmatiker zurückzuhalten durch ihr non liquet. Anstatt dieses bescheidenen Zweifels wodurch sie die Dogmatiker gleichsam beim Ermel zupften, nahmen sie hernach ein dogmatisches Zweifeln, welches ein Unding ist, an.",
     "dehyphenated": 6,
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-187",
     "kind": "text",
     "aa": 337,
     "ms": [
      {
       "p": 28,
       "i": 0,
       "approx": true
      }
     ],
     "text": "Die Scholastiker zeigten im folgenden in Absicht der Dogmatiker eine Aelmlichkeit und machten durch unnütze Grillen des Aristotels Logik unnütz.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-188",
     "kind": "text",
     "aa": 337,
     "text": "Sie glaubten durch subtile Distinctionen der Religion grossen Nutzen zu verschaffen. Disputiren war ihr Hauptwerk. Darum kann man nie besser fortkommen, als wenn man fleissig distinguiret und dadurch dem andern gleichsam Staub in die Augen wirft daß er die Wahrheit nicht sehen kann.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s01-189",
     "kind": "text",
     "aa": 337,
     "text": "In der Reformation waren die Gemüther zur wahren Erkenntniß sehr vorbereitet.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s01-190",
     "kind": "text",
     "aa": 337,
     "text": "Vorher aber fing schon Petrus Ramus zu Paris an dem Aristotel den Krieg anzukündigen. Er schlug eine öffentliche Schrift an, daß er den Aristotel wiederlegen wollte, ni was für Sätzen es auch sey. Dadureh hob er jene blinde und knechtische Tyrannei und wekte die Gemüther aus ihrer Schlafsucht auf. Er schrieb eine Logic deren erster Theil de inuentione und der andere de iudicio handelte. (Man sagt sprüchwortsweise, es fehlt ihm an der seeunda Petri; das ist am Judicio.)",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-191",
     "kind": "text",
     "aa": 337,
     "text": "Melanchthon verbesserte die Logü-c. Malebranche hat durch seine Recherches de la Verite vielen Nutzen gestifftet. Alle diese Vernunft -leinen dienten nur um das leere Wissen abzuschaffen, und die Blendwelke zu vertreiben.",
     "dehyphenated": 1,
     "ocrConf": 34
    },
    {
     "id": "philippi-s01-192",
     "kind": "text",
     "aa": 337,
     "text": "Folgende haben einen wesentlichen Schritt darinn gethan:",
     "ocrConf": 24
    },
    {
     "id": "philippi-s01-193",
     "kind": "text",
     "aa": 337,
     "aaEnd": 338,
     "pages": [
      {
       "p": 338,
       "i": 193
      }
     ],
     "ms": [
      {
       "p": 29,
       "i": 479
      }
     ],
     "text": "Leibniz und Wolf nicht sowohl durch neue Gesetze und Entdeckung der I Hilfsmittel zur Wahrheit zu kommen, als vielmehr durch Einführung der Deutlichkeit und Ordnung. Er läßt keinen Begriff unerklärt; er läßt keine Sätze zu, die zwar durehgehends bekannt aber indem onstrable sind, und suchet alles aus einem Grundsatz, dem princ. contr. herzuleiten. Allein er legte es zu hoch an. Es ist nicht möglich alles zu erklären und von allem richtige Beweise zu geben. Indessen verlangt es Wolf. Und gewiß es ist erwünscht, daß er der Philosophie einen so grossen Plan und ihre höchste Vollkommenheit vorgezeichnet, ob man ihn gleich nicht erreichen kann. Es ist gut, daß man sorgfältig seyn soll, alle Dinge auf die gröste Deutlichkeit zu bringen Daß er nur einen Satz annimmt, und aus demselben alles zu erweisen fordert ist auch gut; der Mensch kann niemals mehr hintergangen werden als wenn er etwas als einen Grundsatz annimmt; daß er auch bekannte Sätze beweißt ist der Gründlichkeit gemäß; und man hat nicht Grund darüber unwillig zu werden, wie Cicero, der da er einen von der Vortreflichkeit der Tugend reden hörte, herausgieng un< 1 sprach: Stulte quis vnquam vituperauit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 37
    },
    {
     "id": "philippi-s01-194",
     "kind": "text",
     "aa": 338,
     "text": "Die Forderung der mathematischen Methode ist nicht die unbilligste. Denn obgleich das Object von der Mathematick verschieden, auch der Verstand hier ganz anders als in der Philosophie verfährt, so ists doch gut, wenn man auch nur einen Theil erreicht ; so wie man in der Moral die vollkommenste Sittlichkeit zum Zweck hat. Sie gewöhnet die Köpfe zum Geschmack an der Deutlichkeit, Ordnung und Subordination.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s01-195",
     "kind": "text",
     "aa": 338,
     "text": "Wolf lehrt wohl disponiren; wie man die Grundsätze vorausschicken und die Erklärungen folgen lassen soll etc. etc. Die Deutschen werden diese Gründlichkeit nicht vergessen, und andere Nationen, die in ihren Philosophien gerne discuriren, übertreffen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s01-196",
     "kind": "text",
     "aa": 338,
     "text": "Lock hat den allerwesenthchsten Schritt gethan dem Verstand WTege zu bahnen. Er hat ganz neue Criteria angegeben. Er philosophirt subjeetiue, da Wolf und alle vor ihm objectiue philosophirtcn. Er hat die Genesin die Abstammung und den Ursprung der Begriffe untersucht. Seine Logic ist nicht dogmatisch, sondern kritisch. Wolf fragt : was ist ein Geist ? Lock : wo kommt die Idee vom Geist in meiner Seele her? Sie hat niemals einen Geist gesehen; woher kommen diese Gedanken ?",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s01-197",
     "kind": "text",
     "aa": 338,
     "aaEnd": 339,
     "pages": [
      {
       "p": 339,
       "i": 322
      }
     ],
     "ms": [
      {
       "p": 30,
       "i": 238
      }
     ],
     "text": "Lamberts Organon, ein Werk, welches um die menschliche Erkenntniß viele Verdienste hat. Es ist ein Fehler bey den Gelehrten, indem sie die Bedingungen vorschreiben unter welchen eine Erkennt -niß vollkommen sey; so glauben sie Mittel gegeben zu haben die Vollkommenheit zu erlangen. So sind alle practische Logiken beschaffen. Sie sind tavtologisch und anstatt Mittel zur Auflösung der Fragen zu geben, geben sie dieselben Fragen wieder.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s01-198",
     "kind": "text",
     "aa": 339,
     "text": "Es gehet aber auch kein anderer Weg in der Logic an. Die Ausübung der Regeln geht nicht an zu lehren, denn ich kann es wieder nicht anders als durch Regeln thun.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s01-199",
     "kind": "text",
     "aa": 339,
     "text": "Die Logic wird durch Aufmerksamkeit zur Diiudication dienlich werden.",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s02",
   "title": "Tractatio ipsa Logice s. Betrachtungen.",
   "titleSrc": "heading",
   "headings": [
    "Tractatio ipsa Logice s.",
    "Betrachtungen."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s02-001",
     "kind": "heading",
     "aa": 339,
     "text": "Tractatio ipsa Logice s. Betrachtungen."
    },
    {
     "id": "philippi-s02-002",
     "kind": "text",
     "aa": 339,
     "text": "1. Wh- handeln in der Logic nicht vom Ursprung der Erkenntniß, ob sie aus den Sinnen komme oder nicht, wie Epikur und Aristoteles das erstere behaupteten, oder nach Plato und Pythagoras aus der reinen Vernunft.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s02-003",
     "kind": "text",
     "aa": 339,
     "ms": [
      {
       "p": 31,
       "i": 867,
       "raw": ":$i",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "2. Die Logic wird handeln von den Gesetzen des Verstandes, nicht von denen, nach welchen man verfähret, sondern von denen, nach welchen man verfahren sollte. Also werden nicht subjeetiue sondern objeetiue Gesetze der Vernunfft, das sind solche, denen jede endliche Vernunfft unterworfen ist, der Gegenstand der logischen Betrachtungen seyn. Denn wir betrachten hier den menschlichen Verstand überhaupt. Also können hier nicht subiective Gesetze die nur eine Privatgültigkeit haben, und von der Natur eines jeden Subjects dependiren. abgehandelt werden; die gehören in die Psychologie; sondern obiectiue die eine allgemeine Gültigkeit haben. Wir spüren dem Verfahren der Vernunft überhaupt nach ; eben so wie in der Moral nicht untersucht werden die Regeln nach welchen man handelt, sondern die nach welchen man handeln soll. Indessen gehöret zur wahren Logic daß die Regeln untersuchet weiden, nach welchen wir wirklich verfahren. Heluetius hat angefangen dieses zu thun.",
     "dehyphenated": 2,
     "ocrConf": 36
    },
    {
     "id": "philippi-s02-004",
     "kind": "text",
     "aa": 339,
     "text": "3. In der Logic betrachten wir nicht die Bestimmungen der Sachen und die Verhältnisse der Sachen, sondern nur die Bestimmungen der Begriffe und deren Verhältnisse.",
     "ocrConf": 29
    },
    {
     "id": "philippi-s02-005",
     "kind": "text",
     "aa": 339,
     "aaEnd": 340,
     "pages": [
      {
       "p": 340,
       "i": 262
      }
     ],
     "text": "Weil wir nun in der Logik die Verhältnisse und Bestimmungen nur der Begriffe betrachten ohne Anwendung dieser auf wirkliche Gegenstände; so sehen wir ein, daß die Logik sich auf alle Wissenschaffen appliciren läßt und über alle Erkenntnisse erstickt . Würde die Logik ein Object der Sachen haben, so würde eine Wissenschafft die ein anderes Object hat nicht darunter gehören. Jetzt aber da sie keine wirkliche Sache zum Gegenstande hat, ist sie eine generale Wissenschafft. So wie die Arithmetik kernen reellen Gegenstand hat, sondern nur die Begriffe der Zahlen und deren Verhältnisse lehret, und sich deß wegen auf alle Grössen sie mögen vorkommen in welcher Wissenschaft sie wollen, appliciren läßt. Die Logic ist demnach von großer Brauchbarkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "philippi-s02-006",
     "kind": "text",
     "aa": 340,
     "text": "Wenn wir viele Dinge erkennen, so erkennen wir an ihnen wenig, erkennen wir wenig Dinge, so erkennen wir an ihnen viel.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s02-007",
     "kind": "text",
     "aa": 340,
     "text": "Es ist eine besondere Schwäche unsers Verstandes, daß wir dasjenige was wir an einem Ende gewinnen wieder am andern verlieren.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s03",
   "title": "Von der gelehrten Erkenntniß überhaupt.",
   "titleSrc": "heading",
   "headings": [
    "Von der gelehrten Erkenntniß überhaupt."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s03-001",
     "kind": "heading",
     "aa": 340,
     "text": "Von der gelehrten Erkenntniß überhaupt."
    },
    {
     "id": "philippi-s03-002",
     "kind": "text",
     "aa": 340,
     "text": "An vielen Dingen erkennen wir wenig, an wenigen aber können wir viel erkennen. So wie man vom Pico auf Teneriffa sehr viele Gegenstände aber nur ganz dunkel siehet, und hingegen wenn man nur einen Gegenstand vor sich nimmt, denselben sehr deutlich erkennet.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s03-003",
     "kind": "text",
     "aa": 340,
     "text": "ad §10",
     "ocrConf": 34
    },
    {
     "id": "philippi-s03-004",
     "kind": "text",
     "aa": 340,
     "ms": [
      {
       "p": 32,
       "i": 275
      }
     ],
     "text": "Der Autor bemüht sich vergebens die Vorstellung zu erklären. Das was ich erklären will, davon muß ich eine Vorstellung haben. Wollte ich also eine Vorstellung erklären, so niüste ich eine Vorstellung von der Vorstellung haben, oder ich müste eine Vorstellung haben die keine Vorstellung ist. Ich kann eine Vorstellung nur von Erkenntnissen haben. Die Erkenntniß ist etwas objectives, das subjective dabey ist die Empfindung. Z. E. vom Süssen und Sauren haben wir keine Erkenntniß, sondern nur eine Vorstellung daß was da seyn müsse, wovon wir so afficirt werden.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s03-005",
     "kind": "text",
     "aa": 340,
     "text": "Gewiße Dinge stellen etwas vor, von uns aber heißt es, wir stellen uns etwas vor.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s03-006",
     "kind": "text",
     "aa": 340,
     "text": "Es giebt gewiße Mittel etwas zu erkennen. Diese Mittel wieder zu erkennen ist unmöglich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s03-007",
     "kind": "text",
     "aa": 340,
     "text": "Die Logic lehrt nur wie wir Vorstellungen und Begriffe deren wir uns schon bewust sind, verwenden sollen. Der Ursprung derselben wird aber in derselben mcht vorgetragen.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s03-008",
     "kind": "text",
     "aa": 341,
     "text": "Das Bewustseyn ist gleichsam eine innere Anschauung.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s03-009",
     "kind": "text",
     "aa": 341,
     "text": "Die Summe der Vorstellungen so wir uns nicht bewust seyn, ist in Ansehung der anderen, die größte, und mächtigste.",
     "ocrConf": 36
    }
   ]
  },
  {
   "id": "s04",
   "title": "§12",
   "titleSrc": "heading",
   "headings": [
    "§12"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s04-001",
     "kind": "heading",
     "aa": 341,
     "text": "§12"
    },
    {
     "id": "philippi-s04-002",
     "kind": "text",
     "aa": 341,
     "text": "An jeder Erkenntniß weiden wir betrachten",
     "ocrConf": 28
    },
    {
     "id": "philippi-s04-003",
     "kind": "text",
     "aa": 341,
     "text": "1. cüe Materie",
     "ocrConf": 49
    },
    {
     "id": "philippi-s04-004",
     "kind": "text",
     "aa": 341,
     "text": "2. die Form. Solche Eintheilung ist dem Verstände sehr gemäß. Es liegt dieselbe tief im Verstände gegründet und man kann viel Sätze durch solchen Unterschied in ein grosses Licht setzen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s04-005",
     "kind": "text",
     "aa": 341,
     "text": "Die Materie ist das was gegeben ist. Obiectum. Die Form das Verhältniß was sich zwischen dem findet, modus cognoscendi.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s04-006",
     "kind": "text",
     "aa": 341,
     "text": "Die Materie ist der Gegenstand der Erkenntniß (obiectum) und läßt sich nicht verändern.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s04-007",
     "kind": "text",
     "aa": 341,
     "text": "Die Form ist der modus cognoscendi z. E. Geist sey die Materie der Vorstellung. Dieses Object ist immer daßelbe; allein die Form kann verändert werden. Der gemeine Mann stellt ihn sich als einen Dunst vor, welches die Namen n:,~) äus|ios Spiritus anzeigen, anstatt daß Gelehrte sich einen Geist ganz anders denken.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s04-008",
     "kind": "text",
     "aa": 341,
     "text": "Wenn ich einen Wurm durchs Microscopium betrachte, so ändert sich die Form dieses Wurms; das Object bleibt dasselbe. Die Philosophie unterscheidet sich vom gemeinen Verstände nur der Form nach. die Materie bleibt beiden dieselbe.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s04-009",
     "kind": "text",
     "aa": 341,
     "text": "Alle Philosophie betrifft nur die Form, daß wir stückweise ein Object betrachten und uns mehr bewust werden der darinn enthaltenen Materie.",
     "dehyphenated": 1,
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s05",
   "title": "§13",
   "titleSrc": "heading",
   "headings": [
    "§13"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s05-001",
     "kind": "heading",
     "aa": 341,
     "text": "§13"
    },
    {
     "id": "philippi-s05-002",
     "kind": "text",
     "aa": 341,
     "ms": [
      {
       "p": 33,
       "i": 102
      }
     ],
     "text": "Wenn wir uns einer Erkenntniß bewust sind, so wird der Begriff klar. Wir sind uns keiner Erkenntnisse schlechterdings unbewust. Denn sobald wir sagen, wir haben eine Erkenntniß, so müssen wir uns ihrer bewust seyn; und eine Erkenntniß der man sich nicht bewust ist findet gar nicht statt. Wenn also von unbe wüsten Begriffen geredet wird, so sollen die so viel anzeigen als Begriffe deren man sich nicht unmittelbar bewust ist, aber durch Schlüsse wohl bewust werden kann.",
     "ocrConf": 40
    }
   ]
  },
  {
   "id": "s06",
   "title": "§ 14",
   "titleSrc": "heading",
   "headings": [
    "§ 14"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s06-001",
     "kind": "heading",
     "aa": 341,
     "text": "§ 14"
    },
    {
     "id": "philippi-s06-002",
     "kind": "text",
     "aa": 341,
     "aaEnd": 342,
     "pages": [
      {
       "p": 342,
       "i": 127
      }
     ],
     "text": "Wenn wir uns einer Vorstellung betrachtet als ein Ganzes bewust sind; so sind wir uns auch immer gewisser Theile dieses Ganzen bewust, obgleich nicht aller. Eine jede Vorstellung ist sehr zusammengesetzt. Ueberhaupt sind die Vorstellungen entweder",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s06-003",
     "kind": "text",
     "aa": 342,
     "text": "1. compositae oder",
     "ocrConf": 62
    },
    {
     "id": "philippi-s06-004",
     "kind": "text",
     "aa": 342,
     "text": "2. Simplices. Die mehresten sind compositae.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s06-005",
     "kind": "text",
     "aa": 342,
     "text": "In jener zusammengesetzten Vorstellung sind wir uns entweder des Ganzen und auch zugleich der darinn befindlichen Theile bewust, und denn ist unser Begrif deutlich ; oder wir sind uns nur des Ganzen ohne die Theile bewust, und dann ist unser Begrif undeutlich oder verworren.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s06-006",
     "kind": "text",
     "aa": 342,
     "text": "Eine einfache Erkenntniß da sie keine Theile hat kann also klar und doch nicht deutlich auch nicht verworren seyn.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s06-007",
     "kind": "text",
     "aa": 342,
     "text": "Das Deutliche gehet also auf zusammengesetzte Vorstellungen.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s06-008",
     "kind": "text",
     "aa": 342,
     "text": "Ich höre ein Geräusch, das ist gewiß eine zusammengesetzte Vorstellung, aber eine verworrene. Komme ich näher, und fange an die Stimmen in dem Lerm und zuletzt auch die Worte dieser Stimmen zu unterscheiden, so ist das eine deutliche Vorstellung.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s06-009",
     "kind": "text",
     "aa": 342,
     "ms": [
      {
       "p": 34,
       "i": 434
      }
     ],
     "text": "Deutliche Erkenntniß ist die wo Ordnung drinnen ist, undeutlich wo Unordnung drin herrscht, d. i. wo die theil Vorstellungen nicht klar sind. Ordnung besteht darin, wo das Mannichfaltige seine gehörige Stelle hat. Je einfacher unsre Vorstellungen sind, je weniger sind sie verworren. Es kann deutlich seyn in dem was wir anschauen, wenn wir uns jeden Theil deßelben klar vorstellen, deutlich in der Vorstellung und im Denken wenn ich das was ich denke zergliedere, wird zur Deutlichkeit ein Begrif erfordert.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s06-010",
     "kind": "text",
     "aa": 342,
     "text": "Deutlichkeit in der Sinnlichkeit wird durch die Synthesin, im Verstände durch die Analysin hervorgebracht.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s06-011",
     "kind": "text",
     "aa": 342,
     "text": "Die empirische Deutlichkeit erhalte ich durch eine fortgesetzte Aufmerksamkeit auf Gegenstände der Sinne, die Verstandes Deutlichkeit durch eine Aufmerksamkeit am0 die Handlungen meines Verstandes.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s06-012",
     "kind": "text",
     "aa": 342,
     "text": "Eine vernünftige Erkenntniß ist diejenige die mit der Vernunft zusammen stimt, eine Vernunfterkenntniß entspringt aber auch zugleich aus der Vernunft; es wäre also beßer unser Autor hätte anstatt vernünftige, Vernunft Erkenntniße gesagt.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s06-013",
     "kind": "text",
     "aa": 342,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "33",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "§ 15",
     "ocrConf": 28
    },
    {
     "id": "philippi-s06-014",
     "kind": "text",
     "aa": 342,
     "aaEnd": 343,
     "pages": [
      {
       "p": 343,
       "i": 134
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 409,
       "raw": ":u",
       "unresolved": true
      }
     ],
     "text": "Das Verhältniß des Grundes und der Folge von Sachen gehört gar nicht in die Logic, sondern nur von Begriffen. In der Logic werden wir nur erkennen, wie eine Erkennt niß den Grund von der andren enthält. Wenn die Seele ein Geist ist, so kann sie nicht durch den Tod zerstöret werden. Ich betrachte hier nicht das Reelle des Geistes, sondern nur den Begriff und das Verhältniß deßelben mit dem Begriff der Unzerstörbarkeit. Wenn die Seele mit dem Tode aufhört, so hört sie auf ein Geist zu seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s07",
   "title": "§ 17 et 18",
   "titleSrc": "heading",
   "headings": [
    "§ 17 et 18"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s07-001",
     "kind": "heading",
     "aa": 343,
     "text": "§ 17 et 18"
    },
    {
     "id": "philippi-s07-002",
     "kind": "text",
     "aa": 343,
     "text": "Yernünfftige Erkenntniß wird nicht der unvernünfftigen hier entgegengesetzt; weil es dann so viel heissen mochte als vernunfftmäßige Erkenntniß und in dem Verstände wird das vernünfftig liier nicht genommen, sondern vernünfftige Erkenntniß wird hier der historischen entgegengesetzt, und zeigt soviel an als ausderVernunfft entsprungene Erkenntniß. Wenn aber eine Erkenntniß angesehen werden kann als aus der Vernunfft entsprungen, ist schwer zu sagen. Wenn eine Erkenntniß das besondere aus dem allgemeinen betrachtet; so ist sie aus der Vernunft entsprungen. Wenn man aber das Allgemeine aus dem besondern zieht oder auch das besondere vor sich betrachtet; so ist die Erkenntniß die man dadurch erlanget historisch. Z. E. Man siehet daß die Kälte im May den Erdgewächsen nützlich sey. Das ist eine historische Erkenntniß. So kann man selbst die Philosophie historisch erlernen, wenn man die Sätze eines andern nach der Reihe sich bekannt macht, ohne einzusehen, wie diese Sätze aus allgemeinen Grundsätzen gezogen sind. Die Experimentalphysik ist historisch; denn sie geht nur auf einzele Fälle. So bald man sie aber durch allgemeine Sätze erkläret, wird sie vernünfftig.",
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "philippi-s07-003",
     "kind": "text",
     "aa": 343,
     "text": "Vernunffterkenntniße sind von den historischen nicht der Materie, sondern nur der Form nach unterschieden.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s07-004",
     "kind": "text",
     "aa": 343,
     "text": "Ein Kind lernt allgemeine Moral im Catechismus historisch.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s07-005",
     "kind": "text",
     "aa": 343,
     "text": "Erkenntnisse die auf allgemeine Dinge sich beziehen können historisch werden, wenn man sie nicht in vniuersali ex abstracto sondern in particulari in concreto beurtheilt ; und umgekehrt, es kann ein Gegenstand der Erfahrung doch eine Vernunfterkennt niß werden, wenn nur die Form verändert wird. So ists mit der Physik gegangen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s07-006",
     "kind": "text",
     "aa": 343,
     "text": "In allen Erkenntnißen wenn sie ästhetisch vollkommen seyn sollen werden 4 Stücke erfordert, nemlich Empfindung, Urteilskraft, Geist und Geschmak.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s07-007",
     "kind": "text",
     "aa": 344,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "33",
       "unresolved": true
      }
     ],
     "text": "§ 19",
     "ocrConf": 42
    },
    {
     "id": "philippi-s07-008",
     "kind": "text",
     "aa": 344,
     "text": "Die Verstandeserkenntniß ist von der sinnlichen unterschieden, so daß die sinnliche Erkenntniß diejenige ist welche die Sachen betrachtet, in so ferne sie die Sinne rühren ; die Vernunffterkenntniß aber auf dasjenige gehet was nicht die Sinnlichkeit rühret, sondern allgemein und in dem Verstände erzeuget ist. Sinnliche Erkenntniß erstreckt sich also auf einzele, Verstandeserkenntniß auf allgemeine Dinge. Hier ist ein beqvemer Platz für die Unterscheidung der Wissenschaft des Schönen von der Wissenschafft des Verstandes.",
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "philippi-s07-009",
     "kind": "text",
     "aa": 344,
     "text": "Die Uebereinstimmung der Erkenntniß mit den subjectiven Gesetzen ist die ästhetische, mit den objectiven Gesetzen, ist die logische Vollkommenheit.",
     "dehyphenated": 2,
     "ocrConf": 52
    },
    {
     "id": "philippi-s07-010",
     "kind": "text",
     "aa": 344,
     "text": "Außer daß eine Erkenntniß mit dem Objecte stimt, kan ich auch noch acht geben, wie die Erkenntniß das Subject afficirt.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s07-011",
     "kind": "text",
     "aa": 344,
     "text": "Die Erkenntniß stimt mit dem Subiect, wenn sie alle Gemüthskräfte in ein leichtes und freyes Spiel versetzt und meine Erkenntniß zugleich stark und groß wird.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s07-012",
     "kind": "text",
     "aa": 344,
     "text": "Die Wissenschafft welche die erste Unterscheidungsgründe des Schönen enthält, ist die Aesthetick. Wir haben eine natürliche Unterscheidungskraft wodurch wir unterscheiden ob etwas schön sey oder nicht. Diese heißt Beurtheilung oder Critick.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s07-013",
     "kind": "text",
     "aa": 344,
     "text": "Die Critick die die Regeln der Beurtheilung des Sinnlichen vorträgt ist die Aesthetick. Die Critick die die Regeln der Beurtheilung der Verstandes erkenntniße vorträgt ist die Logik.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s07-014",
     "kind": "text",
     "aa": 344,
     "text": "Wir haben eine zwiefache Art die Dinge zu unterscheiden oder unsre Erkenntniß hat ein zwiefaches Verhältniß:",
     "ocrConf": 48
    },
    {
     "id": "philippi-s07-015",
     "kind": "text",
     "aa": 344,
     "text": "1. wir urtheilen von der Sache was sie ist.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s07-016",
     "kind": "text",
     "aa": 344,
     "text": "2. wie die Sache gefällt. Das erstere bezieht sich auf das Object, das andere auf das Subject.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s07-017",
     "kind": "text",
     "aa": 344,
     "text": "Ein Gelehrter folgte dem Homer in allen in der Odyßee beschriebenen Reisen der Carte nach, und fand darinn die größte Richtigkeit und Genauigkeit. Hier hatte er einen Gegenstand, ohne zu erkennen wie er gefällt.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s07-018",
     "kind": "text",
     "aa": 344,
     "text": "In einer Erkenntniß betrachten wir entweder überhaupt",
     "ocrConf": 47
    },
    {
     "id": "philippi-s07-019",
     "kind": "text",
     "aa": 344,
     "text": "1. was die Sache ist, das ist die Beschaffenheit derselben, oder",
     "ocrConf": 40
    },
    {
     "id": "philippi-s07-020",
     "kind": "text",
     "aa": 344,
     "aaEnd": 345,
     "pages": [
      {
       "p": 345,
       "i": 131
      }
     ],
     "ms": [
      {
       "p": 36,
       "i": 474
      }
     ],
     "text": "2. was dieses Object vor ein Verhältniß auf unser Subject hat. Das macht den Werth der Sache aus. Der Werth besteht also im Verhältniß der Sache auf denkende Wesen. Z. E. 1.) ich sehe den Mond, betrachte seinen Körper, untersuche seine Grösse, Entfernung von uns, Bewegung. Da sehe ich nicht auf das Verhältniß des Mondes zu unserm Subject. 2. untersuche ich seinen Werth den er für denkende Wesen hat. Wenn kein denkendes Wesen wäre, so würde er keinen Werth haben, so wie der Juvel keinen Werth hat ausser wenn er in den Besitz eines andern kommt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s07-021",
     "kind": "text",
     "aa": 345,
     "text": "Diese beide Erkenntnißarten und Vorstellungen sind wesentlich unterschieden. Durch die eine urtheilen wir was die Sache ist, und wenn sie auch auf denkende Wesen sich nicht bezieht oder keinen Werth hat; in der andern aber entscheide ich was der Gegenstand gilt in Beziehung auf denkende Wesen. Und wodurch entscheide ich das ? Was ist der Maaßstab des Werths ? Das Gefühl der Lust und Unlust oder die Empfindung. Nach dieser richtet man ob ein Gegenstand angenehm oder unangenehm, schön oder häßlich sey und das macht den Werth aus.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s07-022",
     "kind": "text",
     "aa": 345,
     "text": "Allein die Beschaffenheiten der Gegenstände werden durch den Verstand erkannt. Dieser bestimmt was wahr oder falsch, gut oder böse sey.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s07-023",
     "kind": "text",
     "aa": 345,
     "text": "Wir sind also zwar wesentlich unterschiedener Erkenntnissen fähig 1. gewisser Erkenntnisse die die Beschaffenheiten und 2. der Erkenntnisse die den Werth der Gegenstände betreffen. Wenn dies ist; so haben wir auch zwo ganz verschiedene Quellen, woraus wir diese Erkenntnisse schöpfen: eine aus welcher wir alle Erkenntnisse der Beschaffenheiten der Dinge hernehmen, und das ist der Verstand : eine andere woraus wir die Erkenntnisse vom Werth der Sachen hernehmen, und das ist mit einem Wort die Sinnlichkeit. So wie nun der Verstand nichts von dem Werth, so kann die Sinnlichkeit nichts von den Beschaffenheiten der Objecte erkennen. Das Wort Sinnlichkeit bedeutet hier so viel als das Gefühl der Lust und Unlust, und der Werth, das Gefallen oder Mißfallen an einer Sache. Er ist also kein Object, sondern wie offt gesagt nur das Verhältniß des Objects zum Subject.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s08",
   "title": "§22",
   "titleSrc": "heading",
   "headings": [
    "§22"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s08-001",
     "kind": "heading",
     "aa": 345,
     "text": "§22"
    },
    {
     "id": "philippi-s08-002",
     "kind": "text",
     "aa": 345,
     "aaEnd": 346,
     "pages": [
      {
       "p": 346,
       "i": 328
      }
     ],
     "ms": [
      {
       "p": 37,
       "i": 287,
       "raw": ":»",
       "inferred": true
      }
     ],
     "text": "Wenn eine Erkenntniß so beschaffen ist, daß sie nach allgemeinen Regeln des Verstandes übereinstimmt, so ist sie logisch vollkommen. Ist eine Erkenntmß so beschaffen, daß sie mit allgemeinen Regeln des Geschmaks oder der Lust und Unlust stimmt; so ist sie ästhetisch vollkommen. Die logische Vollkommenheit ist eine Zusammenstimmung der Erkenntniß mit dem Object. Die aesthetische eine Zusammenstimmimg der Erkenntniß mit dem Gefühl. Jene ist Wahrheit, diese Schönheit. Was uns gefällt, gefällt uns entweder",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-003",
     "kind": "text",
     "aa": 346,
     "text": "1. unmittelbar, oder",
     "ocrConf": 54
    },
    {
     "id": "philippi-s08-004",
     "kind": "text",
     "aa": 346,
     "text": "2. mittelbar. Das Geld z. B. gefällt einem Vernünfftigen mittelbar. Es gefällt ihm nur wie ein Mittel zu dem was gefällt.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-005",
     "kind": "text",
     "aa": 346,
     "text": "Traurig ist es daß das was uns unmittelbar gefallen sollte, uns nur mittelbar gefällt. Die Tugend ja die Gottheit selbst gefällt den Sterblichen nur mittelbar. Jene gefällt blos wegen ihrer angenehmen Begleitung, diese wegen der Wolthaten. Vielleicht ist dies unser ganzer Fall; und ja er ists.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-006",
     "kind": "text",
     "aa": 346,
     "text": "Eine gute Speise gefällt uns 1. unmittelbar wegen des guten Geschmaks 2. mittelbar als ein Mittel der Gesundheit. Eine bittere Arzeney ist unmittelbar unangenehm, mittelbar aber gefällt sie. Das Schöne gefällt unmittelbar. Etwas gefällt mittelbar in so ferne es zu einem andern Zweck der uns gefällt ein Mittel ist. Ein Blumenstück kann mittelbar und unmittelbar zugleich gefallen, wenn die Blumen auch eine Nutzbarkeit haben.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-007",
     "kind": "text",
     "aa": 346,
     "text": "Was nun unmittelbar gefällt, gefällt entweder einem und vielen andern nicht, oder es gefällt allen allgemein. Was unmittelbar nur einem gefället hat eine Privatgültigkeit und heißt angenehm : was aber allgemein gefällt, hat eine allgemeine Gültigkeit und heißt schön.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-008",
     "kind": "text",
     "aa": 346,
     "aaEnd": 347,
     "pages": [
      {
       "p": 347,
       "i": 1053
      }
     ],
     "ms": [
      {
       "p": 38,
       "i": 688
      }
     ],
     "text": "Durch angenehm drücke ich aus daß etwas ein Gegenstand bloß meiner Lust sey, er mag andern Lust oder Unlust erwecken. Wie unrecht ist es also wenn man denkt daß das, was uns angenehm ist, auch andern angenehm sein müsse. Würde nicht einer der da glaubt, daß das Gericht was ihm angenehm schmekt, allen ohne Ausnahme ebenso schmecken muß, eben so belachenswerth seyn, als die Grönländer, die, als man ihnen vom Paradiese vorredt, gleich fragen ob auch Seehunde da wären, deren Thran ihre köstlichste Speise ist. Das Angenehme ist also bey verschiedenen Subjecten verschieden. Und was ist die Ursache ? Was angenehm ist, vergnügt. Das Vergnügen ist eine angenehme Empfindung ; also ist das Angenehme eine Empfindung. Da nun die Empfindung in der Art und Weise besteht wie die Sinnlichkeit durch einen Gegenstand modificirt wird : die Sinnlichkeit aber gewissermaßen fast bey allen Menschen verschieden ist; so ist auch ihre Empfindung verschieden und mithin auch das Angenehme, weil es Empfindung ist. Hieraus folgen wir: was da gefällt in der Empfindung das vergnügt, was vergnügt hat eine Privatgültigkeit und also hat das was in der Empfindung gefällt eine Privatgültigkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-009",
     "kind": "text",
     "aa": 347,
     "text": "Wie ich durch angenehm das ausdrücke was mir allein gefällt, so drücke ich durch schön dasjenige aus was allgemein jedermann gefällt. Angenehm hatte eine Privatgültigkeit ; schön hat eine allgemeine Gültigkeit. Angenehm ist eine Empfindung; schön ist eine Beurtheilung. Angenehm gehet auf das Subject; schön aber auf das Object. Dies leztere ist zu beweisen. Der Beweis wird unten folgen.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-010",
     "kind": "text",
     "aa": 347,
     "text": "Urtheile die sich beziehen auf das Subject können verschiedene Verhältnisse haben. Urtheile die sich beziehen auf das Object haben in dem Subjecte gleiche Verhältnisse, obgleich nicht von gleichem Grade. Jene betrachten das Angenehme, diese das Schöne, oder was allgemein gefällt. Wir haben zwar bisher unbeschränkt das was allgemein gefällt schön genannt; allein jetzt wollen wirs genauer distinguiren.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-011",
     "kind": "text",
     "aa": 347,
     "text": "Was allgemein gefällt ist das wras noth wendiger weise jedermann gefällt. Was auf solche Art allgemein gefällt, gefällt entweder",
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-012",
     "kind": "text",
     "aa": 347,
     "text": "1. nach allgemeinen Sätzen der Sinnlichkeit und heißt schön; oder",
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-013",
     "kind": "text",
     "aa": 347,
     "text": "2. nach allgemeinen Sätzen des Verstandes und der Vernunft, und heißt gut.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-014",
     "kind": "text",
     "aa": 347,
     "text": "Dasjenige was allgemein gefällt nach allgemeinen Sätzen der Sinnlichkeit kann man nur einsehen a posteriori durch die Erfahrung.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s08-015",
     "kind": "text",
     "aa": 347,
     "ms": [
      {
       "p": 39,
       "i": 0
      }
     ],
     "text": "Nur durch Erfahrung kann man z. B. das Essen ausfindig machen, was jedermann oder wenigstens vielen gefällt. Wer durch viel Erfahrungen unterrichtet, das zu wählen weiß was allen gefällt, von dem sagt man daß er Geschmack habe. Wer also das nicht treffen kann, was jedermann gefällt, der ist ohne Geschmack, und muß wenn er ihn erlangen will auf Beobachtungen und Erfahrungen Acht haben.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-016",
     "kind": "text",
     "aa": 347,
     "text": "Derjenige der nur wählt was ihm, aber nicht andern gefällt, hat gar keinen Geschmak.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-017",
     "kind": "text",
     "aa": 347,
     "text": "Der Geschmak ist ein Urtheil, nach allgemeingültigen Gesetzen.",
     "ocrConf": 57
    },
    {
     "id": "philippi-s08-018",
     "kind": "text",
     "aa": 347,
     "text": "Was gefällt nach Gesetzen der Sinnlichkeit ist schön.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-019",
     "kind": "text",
     "aa": 347,
     "text": "Was gefällt nach Gesetzen des Verstandes und der Vernunft ist gut. Wir haben nicht allein eme theilnehmende Empfindung (Sympathie) sondern auch eine mittheilende Neigung, und mißtrauen unsern Erkenntnißen. Daher Gelehrte ihre Gedanken stets allgemein bekannt machen. Andere Menschen sind gleichsam Controleurs unserer Urtheile.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-020",
     "kind": "text",
     "aa": 348,
     "text": "Die Natur hat geselligen Leuten vorzüglich Geschmack gegeben. Leute ohne Geschmack haben immer was störrisches und bekümmern sich nur um ihr Wohlbefinden, welches sie noch dazu offt in Dinge setzen, die andern ekelhafft sind. Gesellige wissen durch Empfindung zu unterscheiden was jedermann gefällt, und das ist der wahre Geschmack. Wie ? unterscheiden sie es durch Empfindung und nicht durch Erfahrung ? Es ist zwar wahr, man kann aus semer Empfindung nicht errathen was andern gefällt; denn Subjecte sind verschieden. Jedoch wenn man viel Erfahrungen beobachtet, so wird das Verhält -niß des Objects zu den Sinnen zuletzt so beschaffen, daß man zufälliger weise das trifft was jedermann gefällt. Es geschieht also dies nicht eigentlich durch Empfindung, sondern durch Erfahrung.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-021",
     "kind": "text",
     "aa": 348,
     "text": "Es ist von grosser Wichtigkeit zu unterscheiden den Geschmack an Gegenständen der Empfindung vom Geschmack an Gegenständen der Erscheinung. Das was mir in der Erscheinung gefällt, gefällt das auch andern ? Diese wichtige Frage bejahen wir, und gewiß nicht ohne Grund.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-022",
     "kind": "text",
     "aa": 348,
     "ms": [
      {
       "p": 40,
       "i": 725
      }
     ],
     "text": "Was in der Erscheinung einem gefällt, gefällt allen. Denn hier kommt es nicht an auf die Empfindung ; in Erscheinungen werden Dinge nicht betrachtet nach der Materie der Sinnlichkeit oder der Empfindung, sondern nur nach der Form, das ist, nach der Art, wie mein Subject den Gegenstand sinnlich erkennen würde, wenn er auch in mir keine Empfindung verursachte. Empfindung und Erscheinung sind unterschieden, als Materie und Form. Die Materie der Sinnlichkeit ist Empfindung, die Form ist Erscheinung. Es kann eine Sache in der Erscheinung gefallen, wenn sie auch kein Gegenstand der Empfindung ist. Sie gefällt als denn wegen ihrer Form, das ist, wegen der harmonischen Verhältniße aller der sinnlichen Vorstellungen die ich von der Sache bekomme und zusammengenommen das Object nenne.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-023",
     "kind": "text",
     "aa": 348,
     "text": "So gefällt z.B. dem mit hungrigem Magen auf spatzierenden Spanier ein regelmäßig aufgeführter Pallast, ob er gleich aus demselben nichts für seine Empfindung bekommt.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s08-024",
     "kind": "text",
     "aa": 348,
     "aaEnd": 349,
     "pages": [
      {
       "p": 349,
       "i": 323
      }
     ],
     "text": "An der Musik ist das melodische oder der Klang der Töne die Materie ; die Form derselben aber besteht in der harmonischen Abwechselung dieser Töne. Was die Materie oder den Klang betrifft, so kann dem einen dies, dem andern das Instrument angenehmer sejm: denn hierinn kommt es auf die Empfindung an, die bey verschiedenen Subjecten verschieden ist. Allein was die Form der Music anbetrifft, so muß ein Concert, was harmonisch ist, allen wohlklingen. Die Materie einer Blume ist ihr Geruch, die Form ihre Gestalt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-025",
     "kind": "text",
     "aa": 349,
     "text": "Der Gesehmak hat allgemein giltige Gesetze, die aus der Natur der Sinnlichkeit hergenommen. A priori können sie aber nicht gefällt werden. Wir können nur nach Regeln a priori den Gesehmak critisiren.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-026",
     "kind": "text",
     "aa": 349,
     "text": "Die Norm enthält die Regeln nach welchen etwas geschehen soll, die Norm des Geschmaks wird angetroffen in wirklichen Werken des Geschmaks, ist also ein Muster, nicht eine Vorschrift.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-027",
     "kind": "text",
     "aa": 349,
     "text": "Wir führen zur deutlichem Einsicht dieser wichtigen Sätze nochmals an: Die Gegenstände in der Erscheinung werden nicht betrachtet subiectiue, wie sie das Subject mit einem Gefühl der Lust oder Unlust rühren; sondern wie sie durchs Subject erkannt werden als Gegenstände der Sinnlichkeit. Werden die Gegenstände der Erscheinung also erkannt, daß die Eindrücke derselben auf unsre Sinnlichkeit untereinander ein genaues Verhältniß haben und zusammengenommen ein harmonisches Ganze aus machen; so nennen wir dieses harmonische Ganze welches wir für das Object selbst ansehen schön. Ist aber zwischen den Eindrücken die ein Gegenstand auf unsre Sinnlichkeit macht kein oder doch ein schwaches Verhältniß, so daß sie zusammengenommen kein oder ein unvollkommenes Ganze formiren, so sagen wir von dem Gegenstand den wir unter dem complexu der sinnlichen Eindrücke verstehen, daß er nicht schön sey, und zwar im ersten Fall weniger schön als im andern. Da hat man nun das Schöne seinen wesentlichen Begriffen nach zerlegt!",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-028",
     "kind": "text",
     "aa": 349,
     "text": "Urtheilt man aber beständig auf beschriebene Weise vom Schönen ? Wir würden es thun, wenn uns nicht der Reiz, das ist die Antheilnehmung und Zueignung daran hinderte. Dieser macht es, daß wir gemeiniglich das, was uns zugehöret, ob es gleich weniger schön ist, dem vorziehen was weit mehr Schönheiten hat uns aber nicht zugehöret.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-029",
     "kind": "text",
     "aa": 349,
     "ms": [
      {
       "p": 41,
       "i": 104,
       "raw": "u",
       "inferred": true
      }
     ],
     "text": "Dann beurtheilen wir das Schöne vermischt mit der Empfindung. So kann es kommen, daß ein Garten der mir zugehöret mir besser gefällt als ein fremder Garten, der doch weit schöner als der meinige ist. Denn \\\\a> dem Meinigen an Schönheit fehlt, das ersetzt der Reiz oder die Theilnehmung, daß ich ihn besitze. Es giebt Fälle, das Schöne zu beurtheilen ohne die Empfindung.",
     "dehyphenated": 1,
     "ocrConf": 33
    },
    {
     "id": "philippi-s08-030",
     "kind": "text",
     "aa": 350,
     "text": "Winkelmann zeiget, daß der männliche Bau des Körpers viel schöner sey als der weibliche. Der Reiz macht es, daß man diesen jenem vorziehet.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-031",
     "kind": "text",
     "aa": 350,
     "text": "Eine Aussicht auf eine schöne Gegend aus meinem Fenster halte ich vor schöner als die weit schönere Gegend die ein anderer hat. Denn was meiner an Schönheit fehlet ersetzt den Reiz daß ich sie besitze. Beurtheile ich also das Schöne mit Reiz vermengt, so kann wohl das was mir zugehöret mir schöner als andere wirklich schönere Sachen vorkommen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-032",
     "kind": "text",
     "aa": 350,
     "text": "Die Urtheile des Schönen gehen aufs Object, daher haben sie eine allgemeine Gültigkeit. In Urtheilen von einem Object können nicht zwey einander widersprechen. Was einer vom Object urtheilt hat eine allgemeine Gültigkeit. Wenn also einer sagt, diese Sache ist schön; der andere, sie ist häßlich: so muß wenigstens einer falsch gesagt haben.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-033",
     "kind": "text",
     "aa": 350,
     "text": "Die Urtheile des Angenehmen gehen auf das Subject und haben eine Privatgültigkeit. Hier können sich offt zwey einander widersprechen . Wenn einer sagt, diese Speise schmeckt nur angenehm, und der andere, sie ist mir ekelhafft, so können beide Recht haben.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-034",
     "kind": "text",
     "aa": 350,
     "text": "Von den erstem Urtheilen, die eine allgemeine Gültigkeit haben, ist zu merken, daß sie ihre Allgemeinheit nur haben nach Regeln der Sinnlichkeit und in der Erscheinung, nicht in Begriffen.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s08-035",
     "kind": "text",
     "aa": 350,
     "text": "Wir wollen was wir bishero vom Schönen und Angenehmen gesagt ganz kurz im Zusammenhange entwerfen.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-036",
     "kind": "text",
     "aa": 350,
     "text": "Wir haben zwey Fähigkeiten Erkenntnißkrafft und Gefühl. Durchs erstere lernen wir was ein Ding ist, durchs andere, wie ein Ding gefällt oder nicht gefällt, das ist, wie sieh das Ding zu unserm Gefühl der Lust oder Unlust verhält.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s08-037",
     "kind": "text",
     "aa": 350,
     "text": "Lust und Unlust haben ist was anders als erkennen was ein Ding ist.",
     "ocrConf": 26
    },
    {
     "id": "philippi-s08-038",
     "kind": "text",
     "aa": 350,
     "aaEnd": 351,
     "pages": [
      {
       "p": 351,
       "i": 682
      }
     ],
     "ms": [
      {
       "p": 42,
       "i": 0,
       "approx": true
      }
     ],
     "text": "Wenn das Urtheil so beschaffen ist. daß es bloß auf einen geht < m 1er nur vor einen gilt, so gehet das Urtheil nicht auf das Object. wenn aber etwas allen gefällt, so muß es aufs Object gehen. Die Moden sind also nicht Objecten sondern Subjecten gefällig. Das Hauptentblössen ist bey uns ein Zeichen der Höflichkeit, bey den Türken ist es das Entblössen der Füsse. Die Tseherkessinnen. weil sie allen Nationen gefallen, müssen als Objecte gefallen, ihre Schönheit muß in ihnen selbst, in ihrem Object hegen. Was nur einem gefällt davon liegt der Grund des Wohlgefallens im Subject ; was allen gefällt, davon muß der Grund des Wohlgefallens im Object liegen. Lmsere Düudication und Unterscheidung der Sache nach dem Verhältniß auf unsere Lust und Unlust geschieht",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 33
    },
    {
     "id": "philippi-s08-039",
     "kind": "text",
     "aa": 351,
     "text": "1. aus subiectiven Gründen, die nur auf einen gelten",
     "ocrConf": 36
    },
    {
     "id": "philippi-s08-040",
     "kind": "text",
     "aa": 351,
     "text": "2. aus obiectiven Gründen, die auf alle gelten.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-041",
     "kind": "text",
     "aa": 351,
     "text": "Die Sinnlichkeit ist die Art wie ein Object einem Subject gefällt. Wenn wir eine Sache beurtheilen nach den Verhältnissen der Lust und Unlust aus subjectiven Gründen; so unterscheiden wir alsdann das Angenehme und Unangenehme, Vergnügende und eckelhaffte. Wenn \\\\ ir aber das Verhältniß einer Sache zu unsrer Lust und Unlust aus objectiven Gründen beurtheilen; so unterscheiden wir alsdenn das Schöne vom Nichtschönen. Was schön ist gefällt in der Sache selbst, und ist in der Sache selbst angenehm. Allein das was im allgemeinen Verhältniß gefällt betrachte ich nicht wie es angenehm ist. Wenn ich sage daß etwas gefalle, so ist das was da gefällt die Materie, die Allgemeinheit aber die Form.",
     "dehyphenated": 1,
     "ocrConf": 36
    },
    {
     "id": "philippi-s08-042",
     "kind": "text",
     "aa": 351,
     "text": "Was allgemein gefällt, gefällt auf zwiefache Art 1. nach Gesetzen der Sinnlichkeit; das ist schön und gefällt in der Erscheinung 2. nach Gesetzen des Verstandes; das ist gut und gefällt in Begriffen.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s08-043",
     "kind": "text",
     "aa": 351,
     "ms": [
      {
       "p": 43,
       "i": 226,
       "raw": "-13",
       "inferred": true
      }
     ],
     "text": "Die Tugend kann nicht in die Sinne fallen, und gefällt nur in Begriffen. Die tugendhaffte Handlungen können in der Erscheinung gefallen. Die Tugend gefällt, aber vergnügt nicht. Darinn besteht der ganze Fall der Sterblichen : was ihnen in Begriffen gefällt, das vergnügt sie nicht in der Sinnlichkeit; und was ihnen gefällt in der Sinnlichkeit, das gefällt ihnen nicht in Begriffen. Es gefällt den Italienern in der Sinnlichkeit die Mode, daß Frauenzimmer, wo sie nur hinfahren ihren Cavaliere Servente mitführen. Aber wem gefällt es wol in Begriffen \\",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s08-044",
     "kind": "text",
     "aa": 351,
     "text": "Bey der Sinnlichkeit ist die Materie das was da gefällt oder die Empfindung; die Form wie diese oder jene Sache gefällt oder die Erscheinung.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-045",
     "kind": "text",
     "aa": 351,
     "text": "Dasjenige im Schönen, was da gefällt im Verhältniß auf die Empfindung heißt der Reiz. Der Reiz ist also das was die Empfindung ist, nämlich die Art wie meine Organe von dem Gegenstande gerührt werden: er wird mithin auch das mit der Empfindung gemein haben, daß er nicht allgemein gültig ist. Der Reiz muß mit der wesentlichen Schönheit die lediglich in der Form des Objects bestehet nicht vermischet werden, sonst kann man sich offtin Beurtheilung des Schönen betrogen finden. So betrügt man sich in Beurtheilung der Schönheit eines Frauenzimmers durch den Reiz. Durch den Reiz betrogen hält man das ganze zweite Geschlecht für schöner als das männliche.",
     "dehyphenated": 2,
     "ocrConf": 35
    },
    {
     "id": "philippi-s08-046",
     "kind": "text",
     "aa": 352,
     "text": "In der Musik ist die Harmonie die eigentliche Schönheit und für den Verstand; die Melodie aber der Reiz oder die Empfindung. Jene ist allgemeingültig und unveränderlich. Dieser der Reiz ist nach Verschiedenheit der Subjekte verschieden. Die Melodie ist nichts anders als durch Töne ausgedrückte Empfindungen. Nachdem nun ein Subjeet zu solchen Empfindungen die das Melodische einer Musik ausdrückt, mehr oder weniger geneigt ist, nachdem ist sie für das Subjeet mehr oder weniger reizend. Von Reiz geblendet kann mancher eine mittelmäßige ja wol schlechte Musik für sehr schön halten; allein so denkt ein anderer nicht.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-047",
     "kind": "text",
     "aa": 352,
     "text": "Die schöne Form hat allgemeinen Reiz, das ist, die wahre Schönheit gefällt einem jeden alle Zeit, und warum ? Weil der Grund des Wohlgefallens im Object liegt. Empfindung oder Reiz ist veränderlieh und verschieden. Warum ? weil der Grund des Wohlgefallens im Subjeet hegt.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-048",
     "kind": "text",
     "aa": 352,
     "ms": [
      {
       "p": 44,
       "i": 121
      }
     ],
     "text": "Ich sage der Reiz ist veränderlich. Wenn die Organe stumpf werden, so verlieren Dinge ihren Reiz. Man siebet es an alten Leuten, die eben deswegen richtiger von der Schönheit urtheilen.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s08-049",
     "kind": "text",
     "aa": 352,
     "aaEnd": 353,
     "pages": [
      {
       "p": 353,
       "i": 1388
      }
     ],
     "text": "Die Materie eines sinnhehen Gegenstandes erfordert sinnheh empfunden, die Form desselben vom Geschmack beurtheilt zu werden. Wir kommen also auf den Geschmack. Die Gesetze der Sinnlichkeit sind sehr übereinstimmend; hieraus folgt daß der Geschmack allgemeine Regeln habe. Mancher hält ihn für eine Mode ; und wie viel andere Erklärungen hat man von ihm ? Ich weiß nicht ob man ihn nicht richtig erkläret wenn man ihn für eine Critick desjenigen was allgemein gefällt annimmt; so daß derjenige Geschmack hat der zu wählen weiß was allgemein gefällt. Aber was kritisiret denn das was allgemein gefällt ? Ist es der Verstand ? Nein, sondern die durch Erfahrungen geübte Sinnlichkeit. Wir werden unten sehen, daß dasjenige was nach den allgemeinen Regeln des Verstandes stimmt, gar nicht gefällt nach Regeln der Sinnlichkeit; und umgekehrt. Dem Verstände gefallen Wahrheiten, um so mehr, je tiefer, je verborgener sie sind und je mehr Mühe und Anstrengung er anwenden muß um sie zu verstehen und dies ist just dasjenige was der Sinnlichkeit am unerträglichsten ist. Der Grund des Wohlgefallens bey Vernunftsätzen liegt, wo ich nicht irre, in der Vermehrung der Einsichten, und Vollkommenheit derselben bey Producten des Geschmacks, in der Leichtigkeit eine Menge mannigfaltiger Eindrücke aufnehmen, sie ohne Mühe ordnen, unterscheiden, lebhafft empfinden und im Ganzen überschauen zu können. Unserer Sinnlichkeit Gesetze sagten wir oben sind mit den Gesetzen der Sinnlichkeit anderer sehr übereinstimmend, und daraus werden die Grundregeln des Geschmacks gezogen. Was sind das für Gesetze ?",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-050",
     "kind": "text",
     "aa": 353,
     "ms": [
      {
       "p": 45,
       "i": 289,
       "raw": "4.'",
       "inferred": true
      }
     ],
     "text": "Unsere Sinnlichkeit ist in beständiger Aktivität und will es auch beständig seyn. Aus diesem Grundgesetz der Sinnlichkeit zieht man die Regel des Geschmaks : soll ein Object der Sinnlichkeit gefallen, so muß darinn Mannigfaltigkeit angebracht werden, damit sie Stof bekomme womit sie sich beschäfftigen kann : Das Gemüth ist be}r der Form aller Gegenstände thätig. Es giebt die Materialien her, und will sie durch den Gegenstand gebildet haben.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-051",
     "kind": "text",
     "aa": 353,
     "text": "Alles was diese Aktivität der Sinnlichkeit hindert ist ihr verdrießlich und unangenehm. Hieraus fließt die Regel: man bemühe sich in dem Mannigfaltigen, Symmetrie, Harmonie und Klarheit und überhaupt Faßlichkeit anzubringen, damit die Smnlichkeit den Gegenstand ohne Mühe fassen, die Eindrücke desselben leicht unterscheiden und empfinden kann. Also fordert der Geschmack Mannigfaltigkeit, Contrast, Harmonie, Leichtigkeit, Klarheit und einen allmäligen Uebergang von einem bis aufs Oppositum desselben, der Sprung verwirrt die Smnlichkeit. Ein Gegenstand an dem dieses alles in einem faßlichen Verhältniß angebracht ist, ist wesentlich schön und gefällt allgemein. Ein grosser Gegenstand als ein Gebäude gefällt wenn Symmetrie darinn angebracht ist; sie erleichtert den Anblick des Gebäudes.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s08-052",
     "kind": "text",
     "aa": 353,
     "text": "Die Accorde in der Musik gefallen wegen des leichten Verhältnisses das zwischen ihren Tönen ist. Die Octave wie 1 zu 2 ; die Octave zur Quinte wie 1 zu 3. viel. Eulerum p. 16. Alles was die Vorstellung unsrer Sinnlichkeit erweitert, erleichtert und deutlicher macht, gefällt.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-053",
     "kind": "text",
     "aa": 353,
     "text": "Es giebt also gewisse gemeine Gesetze der Sinnlichkeit in Ansehung der Form und dieses werden, wo ich nicht irre, diejenigen sejm die ich bisher durchgegangen.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-054",
     "kind": "text",
     "aa": 353,
     "aaEnd": 354,
     "pages": [
      {
       "p": 354,
       "i": 662
      }
     ],
     "ms": [
      {
       "p": 46,
       "i": 818,
       "raw": "•16",
       "inferred": true
      }
     ],
     "text": "Allein es muß der Reiz ganz abgesondert werden. Diese gemeine Gesetze des Geschmaks sind aus concreten Fällen gezogen; aber können allenfalls auch aufs Object gehen, nur die Subjecte müssen desselben fähig seyn. Wenn ein Mensch die Gesetze der Sinnlichkeit nicht weiß, so kann ihm auch das Schöne nicht gefallen : denn Gegenstände der Sinne müssen nach Gesetzen der Sinnlichkeit beurtheilt werden; ein solcher Mensch urtheilt dann nach dem Reiz. Als man einen Irokesen den man in ganz Paris herumgeführet, frug was ihm doch am besten gefallen, sagte er die Garküche. Was da gefällt weil es schön ist, gefällt ganz anders, als das was da gefällt weil es angenehm ist. Als Homer und eine Menge Volks einem Dichter zuhörten und die Tischglocke gezogen wurde, lief alles davon; der Homer allein blieb bey ihm. Der Dichter preißt diesen als einen wahren Kenner der Schönheit, der sich nicht vom Reiz blenden lasse wie der Pöbel. Allein kaum hatte er erfahren daß die Tischglocke läute, denn er war taub ; so gieng er auch davon.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s08-055",
     "kind": "text",
     "aa": 354,
     "text": "Die Eigennützigen haben keinen Geschmack ; denn sie sehen nur auf das was ihnen reizend ist; da doch das Wesentliche des Schönen ist, daß man auf das sehe was allgemein gefällt.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-056",
     "kind": "text",
     "aa": 354,
     "text": "Betrachtet man das Verhältniß eines Gegenstandes auf die Sinnhchkeit, so siehet man auf den Reiz; betrachtet man dasjenige auf den Geschmack, so ist das Schönheit.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-057",
     "kind": "text",
     "aa": 354,
     "text": "Ich merke noch an daß zum Geschmack Verstand gehöre.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s08-058",
     "kind": "text",
     "aa": 354,
     "text": "Man beurtheilt das Schöne nicht nach dem Grad des Wohlgefallens sondern nach allgemeinen Gesetzen der Sinnlichkeit.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s08-059",
     "kind": "text",
     "aa": 354,
     "text": "Man kann z. E. ein Haus bauen welches jemandem die Aussicht verbaut. Hat es wahre Schönheit, so wird auch dieser es vor schön halten, so wenig Reiz es auch für ihn haben mag.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-060",
     "kind": "text",
     "aa": 354,
     "text": "Ich Schlüsse diese Abhandlung mit einigen Betrachtungen über das Schöne :",
     "ocrConf": 48
    },
    {
     "id": "philippi-s08-061",
     "kind": "text",
     "aa": 354,
     "text": "I. in der Einsamkeit ist der Mensch sehr gleichgültig für das Schöne. Da sehen sie nur auf ihr Wohlbefinden, nur auf den Reiz. Was seine Empfindung angenehm rührt, macht er zur Hauptabsicht.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s08-062",
     "kind": "text",
     "aa": 354,
     "text": "Wenn ich allein bin, so gefällt es mir besser im Walde: in Gesellschaft aber besser im Garten. Die schöne Form scheint bloß zu seyn für Gesellschaft. Woher kommt es aber daß in der Einsamkeit der Geschmack schwindet ? In der Einsamiveit sehen wir nur auf unser Privatgefallen. Dieses muß an Beurtheilung nach Gesetzen des Geschmacks nicht geschehen. Da müssen wir uns nach dem allgemeinen Gefallen richten, es mag uns so wenig reizend und gefällig seyn als es wolle.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s08-063",
     "kind": "text",
     "aa": 354,
     "aaEnd": 355,
     "pages": [
      {
       "p": 355,
       "i": 471
      }
     ],
     "ms": [
      {
       "p": 47,
       "i": 235,
       "raw": "4»",
       "inferred": true
      }
     ],
     "text": "Wenn wir allein sind, so attendiren wir nie auf das Schöne. Auf dem Lande wird wenig aufs Schöne gesehen. Die darauf bedacht sind, sind entweder die, welche noch einen Eindruk von dem Stadtleben haben, welcher jedoch auch mit der Zeit verlischt, oder die welche öffteren Umgang mit angesehenen Leuten haben. Ein Mensch auf einer wüsten Insel würde das Geringste des Gefühls allem Geschmack vorziehen und ihn zuletzt ganz verlieren. Schwerlich würde er, wenn er ein Stück Tuch zum Rock hätte, sich daraus eine französische Taüle schneiden. Gemächlichkeit würde seine Hauptabsicht seyn.",
     "joined": [
      "layout"
     ],
     "ocrConf": 47
    },
    {
     "id": "philippi-s08-064",
     "kind": "text",
     "aa": 355,
     "text": "Der Geschmack ist ein Vorbothe der Geselligkeit ; und Geselligkeit die Nahrung des Geschmacks. Es giebt eine gewisse Zartheit des Geschmaks, und in derselben kommt es nicht so sehr an auf die Beurtheilung als auf die Empfindung oder das Wohlbefinden. Diese Zartheit des Geschmaks ist eine Frucht der Geselligkeit.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-065",
     "kind": "text",
     "aa": 355,
     "text": "IL Geselligkeit ist die Ursache und Bewegungsgrund des Geschmaks. Gesellige Menschen bekommen ein so verfeinertes Gefühl daß sie ein weit grösser Vergnügen empfinden, wenn etwas andern gefällt als wenn sie sich selbst was zu gut thun. Sie sind mehr bedacht auf das Wohlbefinden anderer als auf ihr eigenes. Die sogenannte Eitelkeit ist vom Geschmack unzertrennlich; und diesen Namen pflegt man gemeiniglich mit hämischem Spott der Aufführung geselliger Menschen zu geben. Aber ist der denn hassenswürdig der sich andern gefällig zu machen sucht, und ein Vergnügen empfindet wenn er andern einen Wohlgefallen erzeigen kann 1 Es ist vielmehr die Eitelkeit wenn sie in den Schranken bleibt die ihr die Tugend setzt, lobenswürdig.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s08-066",
     "kind": "text",
     "aa": 355,
     "text": "Das Angenehme betrifft das Wohlbefinden einer Privatperson; das Schöne betrifft die Erscheinung der Sache und ist der eigentliche Gegenstand des Geschmaks. Doch bedienet man sich offt auch des Geschmaks bey dem was gefällt im Genuß und in der Empfindung; das muß man aber empirisch beurtheilen. Man hat also einen Geschmack nicht nur der Beurtheilung sondern auch des Gefühls, wenn man aus seinem Gefühl dasjenige treffen kann was allgemein oder doch vielen in der Empfindung gefällt. Mancher weiß z. E. gut was für ein Gericht vielen schmeckt.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s08-067",
     "kind": "text",
     "aa": 355,
     "text": "Das ist dann eine Marke eines feinen Geschmaks, wenn man durchs Gefühl sogar unterscheiden kann was allgemein gefällt. Der Gesellige, der theilnehmende Leidenschaften hat, der hat einen solchen feinen Geschmack.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s08-068",
     "kind": "text",
     "aa": 355,
     "ms": [
      {
       "p": 48,
       "i": 72
      }
     ],
     "text": "Wenn man will gefällig seyn, so muß man das wählen, was andern gefällt, III. Junge Leute haben mehr Gefühl als Geschmack und Alte mehr Geschmack als Gefühl.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-069",
     "kind": "text",
     "aa": 355,
     "aaEnd": 356,
     "pages": [
      {
       "p": 356,
       "i": 259
      }
     ],
     "text": "Die Ursachen hiervon sind diese: 1. der Geschmack wird durch Erfahrung erworben 2. wo viel Gefühl ist, da fehlt der Geschmack. Denn was ein Verhältniß hat auf den Geschmack gefällt im allgemeinen Verhältnisse und betrifft den Verstand. Was ein Verhältniß hat aufs Gefühl gefällt im Privatverhältniße. Wer das sucht was ün Privatverhältnisse gefällt wird das nicht finden was allgemein gefällt, und wessen Organe stark angegriffen werden wie im beständigen Gefühl geschieht, der hat einen stumpfen Geschmack.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s08-070",
     "kind": "text",
     "aa": 356,
     "text": "Einiger Autoren Bemühen geht bloß aufs Gefühl nicht auf Geschmack. Es ist auch gewiß leichter Gegenstände stark sinnlich zu schildern als einen Plan von Ideen so zu ordnen, daß man sie fast mit einem Blick überschaut. Zum ersten gehört nur Einbildungskraft nur Empfindung; zu diesem Verstand und Beurtheilung. Man muß Erfahrungen haben und Dinge miteinander zu vergleichen wissen, wenn man Geschmack haben will.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-071",
     "kind": "text",
     "aa": 356,
     "text": "Ein Gegenstand ist schön in so ferne in ihm Ordnung, Einheit, Ebenmaaß, Proportion anzutreffen ist und er in der Erscheinung gefällt, nicht in soferne er einen Einfluß auf unsre Sinnlichkeit hat.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s08-072",
     "kind": "text",
     "aa": 356,
     "text": "Ausser dem was uns an Gegenständen gefällt ist noch ein anderer Grund des Wohlgefallens, nemlich ob er uns auch von weitem zugehöre. Das ist der Reiz, und der gebiert die Eitelkeit. Die Reflexion über die Zueignung des Gegenstandes ist schon im Reiz. Wenn ein Mensch grosse Verdienste hat, so erkennt man immer einige Verbindungen in denen er mit uns steht, damit man ausser dem Wohlgefallen über seine Verdienste auch einen Reiz empfinde, der uns gewissermassen zugehört. Jene sieben Städte hatten dies zum Augenmerk die um Homers Vaterland stritten. Man rühmt sich immer gerne von dem woran wir einen Anspruch haben; das ist Eitelkeit Die wesentliche Schönheit ist die Form; hievon muß der Reiz der mit Gesetzen der Neigungen und Leidenschaften stimmt unterschieden werden.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s08-073",
     "kind": "text",
     "aa": 356,
     "ms": [
      {
       "p": 49,
       "i": 0,
       "raw": "■*»",
       "inferred": true
      }
     ],
     "text": "Wenn jemand einen schönen Pallast in der Fremde erbt, und er kommt an den Ort und erblickt ihn zum erstenmal, so siebet er ihn 1. an als ein Durchreisender ohne Reiz; dami gefällt er ihm in der Erscheinung und er sieht dann die wahre Schönheit allein 2. Betrachtet er ihn als ein Eigenthum seines Anverwandten; das gehört schon zum Reiz. 3. Als sein eigenes Eigenthum das er nunmehr in Besitz nehmen wird; hier ist Gefühl.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s08-074",
     "kind": "text",
     "aa": 356,
     "text": "Es ist ein Unterschied zwischen schönen Objecten und zwischen schönen Erkenntnissen oder Vorstellungen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s08-075",
     "kind": "text",
     "aa": 356,
     "text": "Die Vorstellung kann schön seyn, obgleich das Object häßlich ist. Das Object kann wiederum schön seyn und die Vorstellung davon häßlich.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s08-076",
     "kind": "text",
     "aa": 357,
     "text": "In Holland liebt man groteske Bilder. Die Vorstellungen sind Avunderlich, die Objecte sind schön.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s08-077",
     "kind": "text",
     "aa": 357,
     "text": "Die Vorstellung heißt Abbildung, in so ferne sie den Sinnen vorgelegt ist.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s08-078",
     "kind": "text",
     "aa": 357,
     "text": "So wie Vorstellungen uns mißfallen können, deren Gegenstand uns an sich gefällt; so können uns Beschreibungen und Vorstellungen gefallen, obgleich ihr Gegenstand uns mißfällt Man kann machen, daß die Erkenntniß gar reizet von einem häßlichen Gegenstande. So können z. B. vom todten Meere, von den Eiszonen und der öden Natur, Gegenständen, die uns an sich mißfallen, angenehme und gefällige Vorstellungen gemacht werden, nämlich Vorstellungen, die uns auf eine angenehme Art erschüttern und rühren. Man kann sogar das was abscheulich ist, sehr angenehm vorstellen: ja sogar in Vorstellungen von solcher Art Reiz mischen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s08-079",
     "kind": "text",
     "aa": 357,
     "text": "Dichter geben sich die Mühe, die leichte Mühe, Dinge reizend vorzustellen, die uns ohnedem allzurührend sind und deren Reiz sie vielmehr dämpfen sollten. Gewiß leichte Mühe ! Wollten sie doch dasjenige in Reiz einzukleiden suchen, was die wahre wesentliche Schönheit ist, und was gegen uns jetzt allen Reiz verlohren, ich meyne die Tugend.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-080",
     "kind": "text",
     "aa": 357,
     "text": "Wir können einen Reiz mengen in Beschreibungen von der Abscheulichkeit, nicht nur wenn wir sie recht nach dem Leben schildern und rührend vorstellen; sondern durch lächelnde und schöne Beschreibungen.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s08-081",
     "kind": "text",
     "aa": 357,
     "ms": [
      {
       "p": 50,
       "i": 204,
       "raw": "so",
       "inferred": true
      }
     ],
     "text": "Ich betrachte mit einer frölichen Miene den erhabenen den prächtigen Spott womit Wieland das Laster lobt. So wie kein Schimpfen, kein Fluchen empfindlicher ist als Verspottung besonders diejenige worüber man sich noch lustig macht : so wird auch ein Gegenstand nie abscheulicher, als wenn man ihn auf diese Art vorstellt. Anstatt daß man das Laster, wie gewöhnlich schilt und flucht, und dadurch den Leser oder Zuhörer in eine melancholische traurige Bewegung setzt. sollte man es mit schönen ironischen Beschreibungen, mit erhabenen Erzählungen vorstellen und dann mit einemmal die Tugend in ihrer Erhabenheit, Schönheit und vollstem Glänze zeigen. Das hätte ungeineinen Eindruk. Was soll uns beunruhigen? das Uebel des andern wenn uns Heiterkeit dadurch kann gebracht werden.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s08-082",
     "kind": "text",
     "aa": 357,
     "aaEnd": 358,
     "pages": [
      {
       "p": 358,
       "i": 206
      }
     ],
     "text": "Die Musik liefert gar keine Gegenstände noch Beschreibungen derselben. Die Proportion, die1 in keiner Art der Schönheit so genau und so mannigfaltig ist als in der Musik, ist es die die Schönheit derselben ausmacht. Jedoch ist in ihr nicht sowohl Erscheinung, als eine Menge von Empfindungen und Reiz. Jeder Ton ist gewissen Ausdrücken der Leidenschafften ähnlich. Vielleicht entspringt das Vergnügen bey der Musik aus der Aehnlichkeit die die Töne mit Empfindungen haben, an die man sich gerne erinnert. Die Proportion der Musik hegt theils in den Tönen theils im Tact; die Einheit im Thema der Musik oder im Hauptton, der durchgeführt wird.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s09",
   "title": "Vom Guten in Begriffen.",
   "titleSrc": "heading",
   "headings": [
    "Vom Guten in Begriffen."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s09-001",
     "kind": "heading",
     "aa": 358,
     "text": "Vom Guten in Begriffen."
    },
    {
     "id": "philippi-s09-002",
     "kind": "text",
     "aa": 358,
     "text": "Unsre Urtheile des Geschmaks betreffen immer das Subject. Wir sahen nemlich beim Schönen aufs Verhältniß der Sache zum Subject. Wir betrachteten nicht was die Sache ist, sondern nur wie sie erscheint. Bey der Beurtheilung des Guten ist es ganz anders, da sehen wir auf die wahre Beschaffenheit des Objects, und diese ist ein Vorwurf des Verstandes. Gut ist das, was nach den Gesetzen des Verstandes stimmt; also muß, der das Gute beurtheilen will, die Gesetze seines Verstandes kennen.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s09-003",
     "kind": "text",
     "aa": 358,
     "text": "Wir reden in der Logik nicht von Gegenständen, ob sie gut oder böse, schön oder häßlich sind, sondern von Begriffen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s09-004",
     "kind": "text",
     "aa": 358,
     "ms": [
      {
       "p": 51,
       "i": 267
      }
     ],
     "text": "Die Uebereinstimmung unserer Vorstellung mit dem Object nennt man sonst die Wahrheit ; (wir werden unten davon reden) diese ist die wesentliche logische Vollkommenheit. Allein die Wahrheit ist nicht der Grund der ästhetischen Vollkommenheit. Es kann etwas schön seyn wenn es gleich in der ganzen Natur nicht anzutreffen ist ; sondern diese besteht in dem grösten Grad des allgemeinen Gefallens. Man steht hier die Sachen vor, nicht wie sie sind, sondern wie sie seyn sollen, wenn sie recht complet gefallen sollen. Räume ich der logischen Vollkommenheit zu viel ein, so werde ich trocken; räume ich der ästhetischen zu viel ein, so werde ich ein Dichter im rationalen, oder ein Romanschreiber im historischen, wie Voltaire in seinem Carl dem Zwölften.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s09-005",
     "kind": "text",
     "aa": 358,
     "text": "Im 21. § redet der Autor von der gelehrten Erkenntniß.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s09-006",
     "kind": "text",
     "aa": 358,
     "text": "Die Philosophie selbst ist keine gelehrte Erkenntniß. Der Philosoph arbeitet; der Gelehrte schreibet.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s09-007",
     "kind": "text",
     "aa": 358,
     "aaEnd": 359,
     "pages": [
      {
       "p": 359,
       "i": 198
      }
     ],
     "text": "Gelehrsamkeit ist materialiter oder formaliter von der gemeinen Erkenntniß unterschieden. Materialiter durchs Object, formaliter durch den modum cognoscendi; materialiter ist sie nicht verschieden, indem sie mit der gemeinen Erkenntniß ein Object haben kann, aber formaliter, dadurch daß der Gelehrte den Gegenstand besser erkennt. Alle Gelehrsamkeit ist entweder historisch oder rational ; sie hat entweder Objecte der Geschichte oder Objecte die nur durch die Vernunft denkbar sind. Diese beide Arten der Gelehrsamkeit sind nur der Form nach unterschieden. Es kann ein historischer Gegenstand rational und ein rationaler historisch erkannt werden. Die rationale Wissenschaft die nicht gehet auf Gegenstände der Sinne ist entweder Mathematick oder Philosophie. Denn sie hat entweder zum Object die Grössen, und das ist Mathematik oder die Realitäten, und das ist Philosophie. (Das Wort Gelehrsamkeit begreifft eigentlich nur die historische Erkenntniß.) Wozu gehören denn die schönen Wissenschaften ? gehören sie zur Gelehrsamkeit oder nicht ?",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s09-008",
     "kind": "text",
     "aa": 359,
     "ms": [
      {
       "p": 53,
       "i": 735
      }
     ],
     "text": "Eine Wissenschaft des Schönen giebt es gar nicht, weil keine erste Regeln gegeben werden können, welches doch in einer Wissenschaft seyn soll. Die Geschmakslehre ist keine Lehre, keine Doctrin, sondern nur eine Critic. Kritisiren heißt einen besondern Fall mit dem ganzen Umfange der Sinnlichkeit vergleichen. Die Kritickregeln sind mehr Erklärungen der Phänomenorum als Präcepte der wirklichen Gegenstände. So wie es auch in der Medicin ist. In der Aesthetik lernt man kritisiren, und dieses hilft indirecte auch zur Hervorbringung des Schönen. In den rationalen Wissenschaften sind der Mathematikus und in den gemeinen Wissenschafften der Historikus allein Gelehrte. Der Philosoph ist kein Gelehrter; denn die Philosophie kann nicht gelehret werden und ein Gelehrter ist doch der dem etwas gelehret worden. Es kann wohl eine Erzählung der Bemühungen der menschlichen Venranfft jemandem beigebracht werden; aber das ist keine Philo-Bophie.",
     "dehyphenated": 3,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s10",
   "title": "Von der Vollkommenheit §22",
   "titleSrc": "heading",
   "headings": [
    "Von der Vollkommenheit §22"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s10-001",
     "kind": "heading",
     "aa": 359,
     "text": "Von der Vollkommenheit §22"
    },
    {
     "id": "philippi-s10-002",
     "kind": "text",
     "aa": 359,
     "text": "Die theoretische Vollkommenheit der quantitaet nach, ist die Weitläufigkeit und Fruchtbarkeit. Der Qualitaet nach ist die Vollkommenheit entweder logisch oder ästhetisch.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s10-003",
     "kind": "text",
     "aa": 359,
     "text": "Logische Vollkommenheit hat eine Beziehung auf andere Erkenntniße. practische auf den Willen.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s10-004",
     "kind": "text",
     "aa": 359,
     "text": "Die Schädlichkeit die eine Wahrheit haben kann ist stets zufällig.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s10-005",
     "kind": "text",
     "aa": 359,
     "text": "Aesthetische Vollkommenheit hat lediglich eine Beziehung auf meinen Geschmak.",
     "ocrConf": 22
    },
    {
     "id": "philippi-s10-006",
     "kind": "text",
     "aa": 360,
     "text": "Die obiective logische Vollkommenheit ist die Uebereinstimmung einer Erkenntniß mit den Gesetzen des Verstandes. Die subiective ästhetische, die Uebereinstimmung der Erkenntniß mit den Gesetzen der Sinnlichkeit.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s10-007",
     "kind": "text",
     "aa": 360,
     "text": "Wir haben zwei Fähigkeiten Verstand und Sinnlichkeit. Diese gehet nur darauf, wie das Subject durchs Object gerühret wird. Sie ist die einzige Krafft der Seelen die unmittelbar aufs Object gehet.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s10-008",
     "kind": "text",
     "aa": 360,
     "text": "Die aesthetische Vollkommenheit heißt auch die schöne Vollkommenheit.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "philippi-s10-009",
     "kind": "text",
     "aa": 360,
     "text": "Wir haben schon angemerkt, daß das Schöne vom Reiz abzusondern seye. Das Schöne betrifft nur die Form, die Beschauung; der Reiz aber die Empfindung und die Veränderung unsers Zustandes. Die Schönheit ist vorzuziehen; denn bey ihr kommt es auf die Beurtheilung an, die nicht zum Reiz nöthig ist. Ferner gefällt die Schönheit aUemal; der Reiz aber nutzt sich ab. Die Gesetze der Sinnlichkeit bleiben immer dieselbe und sind allgemein, im Reiz sind die Menschen gar nicht zu vergleichen. Viele streben nach beständiger Rührung; sie wollen nur immer eine erschütternde Schönheit haben; sie wollen ihr Nerven immer gereizt haben. Diese Art von Motion gehört für grobe und gegen das wesentlich Schöne fühllose Sinne. Ein Mensch von feinem Geschmack verlangt wahre und vom Reiz entblößte Schönheit; die gefällt ihm.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s10-010",
     "kind": "text",
     "aa": 360,
     "text": "Die Uebereinstimmung der Erkenntniß mit dem Object war die logische Vollkommenheit und die Mittel dazu Wahrheit. Diejenige mit dem Subject, die aesthetische Vollkommenheit und die Mittel dazu, eine fleissige Beobachtung wie ein Object oder die Erkenntniß desselben unser und anderer Subjekte rühret.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s10-011",
     "kind": "text",
     "aa": 360,
     "ms": [
      {
       "p": null,
       "i": 305,
       "raw": "53",
       "unresolved": true
      }
     ],
     "text": "Die Leichtigkeit stimmet mit den subjectiven Gesetzen; aber nicht mit den objectiven oder Verstandesgesetzen; mithin ist sie nicht eine logische Vollkommenheit. Die Gegenstände der Erkenntniß sind offt sehr schwierig ; daß man viele Anstrengung braucht, sie gehörig einzusehen. So sind alle metaphysische abstrakte Wahrheiten sehr schwer zu verstehen, weil sie nur in Begriffen gefallen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s10-012",
     "kind": "text",
     "aa": 360,
     "text": "Neuigkeit giebt Nahrung dem Gemüth welches bestrebt ist sich auszubreiten und immer geschäfftig zu seyn. Sie ist eine Eigenschafft nicht des Objects, sondern des Subjects. Das Sanfte der grünen Farbe, das scheinende der rothen, das hervorstechende der violetten hegen nicht in den Farben, sondern in unserm Auge, welches durch die Eindrücke die die Farben machen, dieser oder jener Modification fähig ist .",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s10-013",
     "kind": "text",
     "aa": 361,
     "text": "Wir halten offt das Verhältniß eines Objects zu unserm Subjekt für eine gewisse Eigenschafft desselben. So geht es bey den Farben und vielen andern Gegenständen der Sinne zu.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s10-014",
     "kind": "text",
     "aa": 361,
     "text": "In der logischen Vollkommenheit werden wir alles auf Begriffe; in der aesthetischen alles auf Erscheinungen bringen. Wenn wir eine logische Vollkommenheit geben wollen, so betrachten wir alles im Allgemeinen, in abstracto. Wollen wir eine aesthetische geben, so betrachten wir alles gleichsam gegenwärtig, in concreto. Die logische Vollkommenheit beruhet auf dem Verstand und wird von ihm bestimmt, die aesthetische auf Sinnlichkeit und bestimmet sie. Diese muß jener unsrer Schwäche wegen, da wir so sehr an das Sinnliche gebunden sind, oft aushelfen, die Sache deutlich zu machen. In der Moral sucht man z. B. das Allgemeine in Beispielen zu zeigen. Die Tugend gefällt in Begriffen, aber man muß sie, damit sie auch in der Erscheinung gefalle, durch Exempel sinnlich machen. Hiezu wird Historie erfordert, der man sich deßwegen zu befleissigen hat.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s10-015",
     "kind": "text",
     "aa": 361,
     "text": "Also ist aesthetische Vollkommenheit gleichsam das Vehikul der logischen. Ich realisiere mir so zu sagen, die allgemeinen Begriffe. Alle Anschauung, alle Sinnlichkeit macht die wahre Volllvommenheit der Aesthetick aus ; aber Wahrheit ist der Zweck der logischen Vollkommenheit.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s10-016",
     "kind": "text",
     "aa": 361,
     "text": "Unsere Anschauungen sind alle sinnlich. Wenn wir von einem Gegenstande nicht gerührt werden, so erkennen wir ihn nur durch den Verstand in abstracto. Gottes Verstand ist anschauend, nicht gerührt von Gegenständen : dessen Anschauungen sind alle intellectual durch den Verstand. Sie shid unmittelbare Anschauungen durch denselben. Unser Verstand kann zu keiner Evidentz von einem Gegenstande gelangen, wenn er nicht sinnlich gemacht wird, wenn das Allgemeine (abstr.) nicht im besondern Fall (in concreto) gezeiget wird. Wir erlangen das Allgemeine durchs Besondre : Gott nicht so.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s10-017",
     "kind": "text",
     "aa": 361,
     "text": "Die ästhetische Vollkommenheit ist der logischen entgegen öfters beförderlich: denn die ästhetische beruht auf der Smnlichkeit, die logische auf der Abstraktion von der Sinnlichkeit.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s10-018",
     "kind": "text",
     "aa": 361,
     "text": "Was zur sinnlichen Anschauung diendt, befördert die logische Vollkommenheit, was aber auf den Eindruck geht thut ihr Abbruch.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s10-019",
     "kind": "text",
     "aa": 361,
     "text": "Die ästhetische verbindet viele Erkenntniße, die logische sondert sie ab.",
     "ocrConf": 54
    },
    {
     "id": "philippi-s10-020",
     "kind": "text",
     "aa": 362,
     "text": "Die Autoren, so lediglich auf Eindrücke gehen haben den niedrigsten Rang.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s10-021",
     "kind": "text",
     "aa": 362,
     "text": "Derjenige, der einen von einem Satz überzeugen will, muß sich sehr in acht nehmen, nicht die Empfindungen rege zu machen, und Schönheiten drein zu streuen, weil er ein Mißtrauen erregt, uns nur überreden zu wollen.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s10-022",
     "kind": "text",
     "aa": 362,
     "ms": [
      {
       "p": 54,
       "i": 0
      }
     ],
     "text": "Wissenschafften haben Klarheit aber nicht Anschauung.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s10-023",
     "kind": "text",
     "aa": 362,
     "text": "Es ist eine grosse Harmonie zwischen der Anschauung des Verstandes und derjenigen der Sinnhchkeit. Z. B. Es ist eine große Harmonie zwischen dem Beweise des Theorematis des Pythagoras, denn» der Geometra mit dem Verstand anschaut, und zwischen der Figur desselben die er sinnlich anschaut. Es ist nur der Unterschied, daß man dasjenige in der Figur mit einem Blick überschaut, was man durch eine Reihe von Gedanken oder Worten klar erkannt hat.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s10-024",
     "kind": "text",
     "aa": 362,
     "text": "Mancher Verstand kann das Allgemeine nicht einsehen als nur in besondern Fällen, und das ist der gemeine Verstand, der das abstrakte in concreto erkennt. Jedoch in moralischen Urtheilen hat auch der ungelehrteste Verstand abstracte Begriffe.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s10-025",
     "kind": "text",
     "aa": 362,
     "text": "Haben wir nicht Geschicklichkeit das Allgemeine in concreto zu zeigen, wissen wir nicht mit den intellectualen Begriffen aesthetische Sinnlichkeit zu verbinden; so fehlt uns diejenige Augenscheinlichkeit und Verständlichkeit, die so viele Schriftsteller unnütze und unverständlich macht.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s10-026",
     "kind": "text",
     "aa": 362,
     "text": "Geschicklichkeit enthält die Möglichkeit der Hervorbringung verschiedener Producte.",
     "dehyphenated": 1,
     "ocrConf": 54
    },
    {
     "id": "philippi-s10-027",
     "kind": "text",
     "aa": 362,
     "text": "Die sinnliche Form ist auch eine wahre Vollkommenheit und die logische Vollkommenheit tritt in ihrer Begleitung einher. Die Sinnhchkeit besteht nicht in der Verwirrung, das ist, der Verstand kann die Dinge beurtheilen, wenn gleich die Sinnlichkeit sehr groß ist.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s10-028",
     "kind": "text",
     "aa": 362,
     "aaEnd": 363,
     "pages": [
      {
       "p": 363,
       "i": 466
      }
     ],
     "ms": [
      {
       "p": 55,
       "i": 813,
       "raw": "35",
       "inferred": true
      }
     ],
     "text": "Alle Deutlichkeit kommt aus der Bearbeitung des Verstandes. Wenn wir Sätze in concreto betrachten, so sind sie zwar verworren, aber das liegt nicht an der Sinnlichkeit und der Verstand weiß sie bald zu ordnen und in eine anpassende Form zu bringen. Er nimmt nur die Materialien aus der Sinnlichkeit, die Form giebt er ihnen selbst. Die lecture eines Fontenelle und der Umgang mit Ungelehrten und Wißbegierigen wird uns lehren allgemeine Sätze sinnlich zu machen und alle Begriffe in lauter Erscheinungen einzukleiden. Und stimmt die Form der Sinnlichkeit mit der Form des Verstandes oder mit der logischen Vollkommenheit überein: so ist das als dann die ächte Schönheit, die wesentliche aesthetische Vollkommenheit. Hier kommt kein Reitz, kein Gefühl in Betrachtung keine Materie, nur die Form. Wenn die Form der Anschauung mit derjenigen des Verstandes stimmet; wenn jene behülflich ist die Vollkommenheit des Verstandes auszudrücken; wenn die Erscheinung der Sache den Verstandesbegriff erleichtert; so ist das die wesentliche Schönheit. Eine sinnliche Erkenntniß gefällt, wenn sie Mannigfaltigkeit und Einheit hat, wenn die Vorstellungen so geordnet sind daß eine die andere nicht hindert, aber ihre größte Vollkommenheit ist wenn sie dem Verstände conform ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s10-029",
     "kind": "text",
     "aa": 363,
     "text": "Die sinnlichen Vorstellungen hat man sonst als dem Verstand hinderlich angesehen und als solche verworfen. Aber obgleich die sinnliche Erkenntniß anfänglich verworren ist und auch die Vollkommenheit des Verstandes nie haben kann ; so kann man doch sagen, daß alle Verstandesbegriffe als dann erst ihre Vollkommenheit erlangen, wenn man sie sinnlich macht, und daß also die sinnliche Erkenntniß eine nothwendige Ergänzung des Verstandes sey.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s10-030",
     "kind": "text",
     "aa": 363,
     "text": "Es ist ein Mangel unsers Verstandes, daß er einen abstracten Begriff nicht deutlich einsiehet und deßwegen auf concrete Sätze zurückgehen muß. Wäre er vollkommen, so würde er diesen Umweg nicht nöthig haben und Dinge unmittelbar erkennen. Durch den Verstand erkennet man mittelbar durch allgemeine Merkmale. Allein unser Verstand ist nicht anschauend, sondern nur discursiv.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s10-031",
     "kind": "text",
     "aa": 363,
     "text": "Es ist ein rechtes Kunststück und große Geschicklichkeit Begriffe sinnlich zu machen. In der Philosophie muß man erst abstracte einen Satz durchdenken und hernach ihn sinnlich machen. So kann man allgemeine Maximen in Sentiments verwandeln, wenn man das was jene in abstracto sagen, auf einen einzeln Fall anwendet. Es dienet dieses die Wahrheit faßlicher zu machen und nachdrücklich vorzustellen.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s10-032",
     "kind": "text",
     "aa": 363,
     "text": "Die Vollkommenheit der Größe der Erkenntniß besteht in derMenge die ich erkenne",
     "ocrConf": 34
    },
    {
     "id": "philippi-s10-033",
     "kind": "text",
     "aa": 363,
     "text": "In Ansehung der Qualitaet sind Erkenntniße, entweder wahre oder falsche.",
     "ocrConf": 33
    }
   ]
  },
  {
   "id": "s11",
   "title": "Von der Unvollkommenheit § 23",
   "titleSrc": "heading",
   "headings": [
    "Von der Unvollkommenheit § 23"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s11-001",
     "kind": "heading",
     "aa": 364,
     "text": "Von der Unvollkommenheit § 23"
    },
    {
     "id": "philippi-s11-002",
     "kind": "text",
     "aa": 364,
     "text": "Die Unvollkommenheit rührt entweder her vom Mangel oder vom Widerstreit oder Beraubung.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s11-003",
     "kind": "text",
     "aa": 364,
     "text": "Unwissenheit ist eine Unvollkommenheit des Mangels, Irrthum eine Unvollkommenheit des Widerstreits. In der Unwissenheit sehe ich ein das Fehlende der Erkenntniß: in dem Irrthum das Falsche derselben. Unwissenheit ist Mangel, Irrthum Krankheit. Irrthum verschafft nicht nur nichts, sondern raubt auch.",
     "dehyphenated": 2,
     "ocrConf": 51
    },
    {
     "id": "philippi-s11-004",
     "kind": "text",
     "aa": 364,
     "ms": [
      {
       "p": 56,
       "i": 72
      }
     ],
     "text": "Die Unvollkommenheit ist also: 1. imperfectio deficiendi 2. imperfectio priuandi.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s11-005",
     "kind": "text",
     "aa": 364,
     "text": "Die logische Unvollkommenheit des Mangels ist Unwissenheit; diejenige der Beraubung besteht in Irrthümern.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s11-006",
     "kind": "text",
     "aa": 364,
     "text": "Jene ist defectus; diese vitium.",
     "ocrConf": 67
    },
    {
     "id": "philippi-s11-007",
     "kind": "text",
     "aa": 364,
     "text": "Aesthetische Unvollkommenheit des Mangels, da etwas fehlt ist Trockenheit. Diejenige der Beraubung, Häßlichkeit. Häßlichkeit ist also was positives, nicht eine bloße Abwesenheit der Schönheit sondern auch das Daseyn dessen was der Schönheit zuwider ist. Das laster ist nicht nur ein Mangel der Tugend, sondern auch was positives. Was das Geld mindert ist eben so positiv als was es vermehrt; ersteres führt das Geld von ims zu andern, das andere von andern zu uns. Es kann etwas nicht schön und doch auch nicht häßlich seyn z. E. das Gekünstelte. Es gefällt uns nicht, wenn wir sehen, daß jemand mit großer Mühe woran gekünstelt hat, was er sehr leicht auf eine andere Art hätte machen können. Wir bedauren ihn daß seine Kunst fehlgeschlagen.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s11-008",
     "kind": "text",
     "aa": 364,
     "text": "Der Mangel aller Arten der logischen Vollkommenheit ist Seichtigkeit. Der Grad der logischen Vollkommenheit bestimmt sich durch die Gründlichkeit.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s11-009",
     "kind": "text",
     "aa": 364,
     "text": "Unwissenheit ist der Mangel der Erkenntniß überhaupt.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s11-010",
     "kind": "text",
     "aa": 364,
     "text": "Es ist kein Vorwurf für die Erkenntniß daß sie bloß gelehrt sey und daß sie bloß logische Vollkommenheit habe. Denn es wird bisweilen expreß erfordert daß alle aesthetische Vollkommenheit exulire, wie z. B. in der Algebra.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s11-011",
     "kind": "text",
     "aa": 364,
     "aaEnd": 365,
     "pages": [
      {
       "p": 365,
       "i": 332
      }
     ],
     "text": "Wenn indessen die logische Vollkommenheit mit derjenigen der Aesthetick übereinstimmend vergesellschaftet ist; so erhebt diese jene ansehnlich, indem sie die Verstandesbegriffe anschauend macht und erleichtert. Im Sinnlichen ward große Mannigfaltigkeit angetroffen: durch diese wird die Anschauung ausgebreitet und daraus entstellt Verwirrung. Räumen wir also der aesthetiscken Vollkommenheit zuviel ein, so werden wir, da wir angenehm seyn wollen, seichte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s11-012",
     "kind": "text",
     "aa": 365,
     "text": "Nehmen wir alle Sinnlichkeit und aesthetische Vollkommenheit von einer Erkenntniß weg, so bleibt die Seele leer an Vorstellungen und es fehlt an Geschmack. Wir werden also da wir gründlich seyn wollen trocken! Si breuis esse volo obscurus fio. (Hier geht es bald so wie bey der Höflichkeit oder Geschliffenheit)",
     "ocrConf": 42
    },
    {
     "id": "philippi-s11-013",
     "kind": "text",
     "aa": 365,
     "ms": [
      {
       "p": 57,
       "i": 62,
       "raw": "sr",
       "inferred": true
      }
     ],
     "text": "Wie vertheilt man es nun hier ? Es giebt Wissenschaften deren Endzweck bloß die reine Vernunfft ist. Hier ist Gründlichkeit der Hauptzweck, und es fällt hier alles Schöne weg. Indessen muß keine Häßlichkeit da seyn. Von solcher Beschaffenheit sind die Metaphysik und reine Moral. Die praktische Moral ist aller Schönheit fähig. Wir müssen erst abstracte Wahrheiten lernen; hernach durch lesen der Autoren alle Schönheiten sammeln. Diese lezten müssen die Nachtret erinnen von jenen seyn.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s11-014",
     "kind": "text",
     "aa": 365,
     "text": "Die Schönheit ist mannigfaltig, wenn wir die überhaupt für das Sinnliche annehmen; einige nützet der logischen Vollkommenheit, andere schadet ihr. Die Schönheiten der Form sind der Verstandes-Vollkommenheit gemäß und nützen ihr sehr viel. Die Schönheiten des Gefühls, der Materie der Sinnlichkeit, das Zärtliche, Lachende sind ihr gerade entgegen und schädlich. Wer in einer Erkenntniß viel nach Rührung trachtet, der kann nicht viel Verstandesvollkommenheit darin anbringen. Also kurz: Was aufs Gefühl gehet, hindert die logische Vollkommenheit, aber das Schöne der Form nützet ihr; doch ist auch die bißweilen nicht vortheilhafft.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s11-015",
     "kind": "text",
     "aa": 365,
     "text": "Um durch den Verstand etwas zu fassen muß ich abstrahiren. Um das Schöne zu erlernen muß ich das abstracte in concreten Fällen zeigen. Das widerstreitet sich. Das Abstrakte, da man etwas von vielen andern Erkenntnissen absondert und isolirt, ist trocken. So wie man durchs Mikroscopium alles andere von einem Gegenstande abzusondern sucht, damit man den einen desto deutlicher erkenne. Durch diese Trockenheit beraube ich also die Seele gewisser Gegenstände. Sie wird gebunden und leidet eine Selbstverläugnung. Es ist aber eine Eigenschafft aller endlichen Wesen, daß sie ein Verlangen haben immer geschäfftig zu seyn.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s11-016",
     "kind": "text",
     "aa": 365,
     "aaEnd": 366,
     "pages": [
      {
       "p": 366,
       "i": 192
      }
     ],
     "text": "Gewinnt man in der Anschauung, so verliert man dieses wieder in der Vernunfftbeurtheilung. Die Lebhaftigkeit, die Zusammenhäufung der Gegenstände giebt Anschauung. Aber eben dieses ist dem Verstände nachtheilig. Er erkennt von den vielen Gegenständen alsdann nur sehr wenig und verworren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s11-017",
     "kind": "text",
     "aa": 366,
     "text": "Die logische Vollkommenheit fordert Abstraction, ich soll absondern: die aesthetische Aßociation ich soll Gegenstände zusammenhäufen nach einem Ebenmaaß : jene in der Absicht deutlich, diese in der Absicht anschauend zu erkennen. Der Poet, je mehr Gegenstände er zusammenhäufft, nach Proportion, desto rührender wird er. Ein Koncert ist um so viel angenehmer je mehr Instrumente zusammenstimmen.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s11-018",
     "kind": "text",
     "aa": 366,
     "ms": [
      {
       "p": 58,
       "i": 0
      }
     ],
     "text": "In der Vereinigung dieser beiden Vollkommenheiten sey man behutsam. Es giebt Erkenntniße, die nicht zum Geschmack gehören ob wir gleich alles zum Geschmack rechnen. Eine mathematische Demonstration eines mechanischen Lehrsatzes kann Schönheit haben ; aber die Schönheit hegt in der Simplicität. Man freut sich, daß man eine Wahrheit die man für so verwickelt und schwer hielt, mit einemmal so deutlich einsiehet. Es giebt Schönheiten die nur durch den Verstand können eingesehen werden, obgleich der Verstand sonst nicht das Schöne richtet. Es giebt Schönheiten, die er nur einsieht, die nicht vom Geschmack, auch nicht von der Mode dependiren : und das sind die ewige Schönheiten.",
     "dehyphenated": 2,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s12",
   "title": "Vollkommenheiten der Erkenntniß",
   "titleSrc": "heading",
   "headings": [
    "Vollkommenheiten der Erkenntniß"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s12-001",
     "kind": "heading",
     "aa": 366,
     "text": "Vollkommenheiten der Erkenntniß"
    },
    {
     "id": "philippi-s12-002",
     "kind": "text",
     "aa": 366,
     "text": "Wahrheit ist die generale Vollkommenheit. Keine Erkenntniß kann Erkenntniß seyn, wenn sie nicht wahr ist.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s12-003",
     "kind": "text",
     "aa": 366,
     "text": "Die Wahrheit kann gehen",
     "ocrConf": 52
    },
    {
     "id": "philippi-s12-004",
     "kind": "text",
     "aa": 366,
     "text": "1. aufs Object.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s12-005",
     "kind": "text",
     "aa": 366,
     "text": "2. aufs Subject.",
     "ocrConf": 29
    },
    {
     "id": "philippi-s12-006",
     "kind": "text",
     "aa": 366,
     "text": "In der Eabel ist Wahrheit nicht in so ferne die Erzählung wirklich ist, sondern nur im Verhältniß aufs Subject in so ferne sie am leichtesten und genauesten von demselben begriffen wird. Subjektive Wahr-Es ist ein wirklicher Unterschied zwischen der Vollkommenheit in Ansehung derQuantität ; die beruhet auf der Grösse und Weitläuf tigkeit der Erkenntniß und zwischen der Vollkommenheit der Qualität, die beruhet auf der Genauigkeit der Erkenntniß. Jene die große Erkenntniß sucht der Polyhistor, der gründliche Kopf hingegen sucht die Erkenntniß der Qualität nach vollkommen zu machen.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s12-007",
     "kind": "text",
     "aa": 367,
     "text": "Das Mittel der logischen Vollkommenheit ist die Deutlichkeit ; dasjenige der aesthetischen ist, was die Anschauung leichter und mannigfaltiger macht.",
     "dehyphenated": 2,
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s13",
   "title": "§ 29",
   "titleSrc": "heading",
   "headings": [
    "§ 29"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s13-001",
     "kind": "heading",
     "aa": 367,
     "text": "§ 29"
    },
    {
     "id": "philippi-s13-002",
     "kind": "text",
     "aa": 367,
     "ms": [
      {
       "p": 59,
       "i": 312
      }
     ],
     "text": "Die Gewißheit ist der Grad der Wahrheit und ist in beiden. Bey der logischen sehe ich auf die Gewißheit des Objekts, bey der aesthetischen auf diejenige des Subjects. Wie soll man diese beide vereinbaren ? Welches sind die Mittel ? Welche muß voran gehen die logische oder aesthetische Vollkommenheit, Geschmack oder Verstand ? Dem Verstände ist alles unterworfen. Dieser beurt heilt die Sache nach ihrer Beschaffenheit was sie ist ; der Geschmack aber nach der Erscheinung, wie die Sache das Subject rühret. Die logische Vollkommenheit ist also die wesentliche und vorzuziehen, z. B. in der Historie besteht die logische Vollkommenheit in der richtigen Disposition, in der Deutlichkeit und Gewißheit; Deutlichkeit ist ein Mittel der Wahrheit; die aesthetische aber darin, daß ich embellire, als Voltaire im Karl XII; es dient angenehm zu machen, aber lehrt nichts.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s13-003",
     "kind": "text",
     "aa": 367,
     "text": "Die logische Vollkommenheit ist die einzige, unter welcher es erlaubt ist eine Erkenntniß aesthetisch vollkommen zu machen.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s13-004",
     "kind": "text",
     "aa": 367,
     "text": "Hier sind zween Abwege",
     "ocrConf": 53
    },
    {
     "id": "philippi-s13-005",
     "kind": "text",
     "aa": 367,
     "text": "Die Regeln der Sinnlichkeit bestehen",
     "ocrConf": 44
    },
    {
     "id": "philippi-s13-006",
     "kind": "text",
     "aa": 367,
     "text": "1. in Empfindung.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s13-007",
     "kind": "text",
     "aa": 367,
     "text": "2. in Anschauung.",
     "ocrConf": 31
    },
    {
     "id": "philippi-s13-008",
     "kind": "text",
     "aa": 367,
     "text": "Jeder Mensch dessen Gemüth bewegt oder dessen Gefühl gerührt oder gereizt ist, ist nicht capable mehr zu reflectiren. Hieraus ist klar, daß die Rührung der logischen Vollkommenheit zuwider sey. Denn man muß ganz ruhig seyn wenn man einen Gegenstand richtig beurtheilen soll. Es kann aber die logische Vollkommenheit sich der schönen Form bedienen um Aufmerksamkeit zu erwecken d. i. der Ausdrücke, Einkleidung, Simplicität der erhabenen Gegenstände. Durch Rührung richtet man nichts aus. Der Verstand bleibt leer und bekommet nichts zu denken. Die Nerven werden nur angenehm erschüttert, und wenn dies vorbey ist weis man von nichts. Es ist eben so, als wenn in einer Gesellschafft ein hefftiges Lachen entsteht. Den Augenblick gehet sie davon und es sieht einer den andern an, und weiß nicht worüber er gelacht hat.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s13-009",
     "kind": "text",
     "aa": 368,
     "text": "Die Wahrheit kann seyn",
     "ocrConf": 26
    },
    {
     "id": "philippi-s13-010",
     "kind": "text",
     "aa": 368,
     "text": "1. aesthetisch in der Erscheinungund das Mittel dazu Lebhafftigkeit",
     "ocrConf": 49
    },
    {
     "id": "philippi-s13-011",
     "kind": "text",
     "aa": 368,
     "text": "2. logisch in den Begriffen, und die Bedingung, Deutlichkeit.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s13-012",
     "kind": "text",
     "aa": 368,
     "text": "Die logische Deutlichkeit entspringt aus der Abstraction, die aesthetische Lebhafftigkeit aus der Aßociation.",
     "dehyphenated": 1,
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s14",
   "title": "§30",
   "titleSrc": "heading",
   "headings": [
    "§30"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s14-001",
     "kind": "heading",
     "aa": 368,
     "text": "§30"
    },
    {
     "id": "philippi-s14-002",
     "kind": "text",
     "aa": 368,
     "ms": [
      {
       "p": 60,
       "i": 289
      }
     ],
     "text": "Die Vollkommenheit einer Erkenntniß insoferne sie sich auf den Willen des Menschen bezieht und mit ihrn in Relation stehet ist die praktische Vollkommenheit. Jene Vollkommenheiten waren theoretisch; die logische spekulativisch und die aesthetische nicht spekulativisch : beide theoretisch und ohne Relation. Diese ist praktisch in so ferne sie auf die Willkühr des Willens geht. Ohne diese Vollkommenheit ist die Erkenntniß müssig, sie kann wohl Folgen haben, aber ohne Relation auf den Willen. Eine logisch vollkommene und nicht praktische Erkenntniß ist nichts als Spekulation. Eine aesthetische und nicht praktische Vollkommenheit der Erkenntniß kützelt den Verstand. Erkenntnisse sind müssig (steril) nicht weil sie uns keine Gedanken Hefern, sondern weil sie keinen Einfluß haben auf unsre Thätigkeit. Die praktische Vollkommenheit ist die wichtigste; derer die nicht praktisch sind können wir entbehren.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "philippi-s14-003",
     "kind": "text",
     "aa": 368,
     "text": "Die logische Vollkommenheit an und für sich ist abgesondert von der praktischen Vollkommenheit; daher kann man in jener nicht fragen wie verhält sich dies zu meinem Thun. Ich frage nur nach den Regeln der Einsicht. Ich will nur Einsichten lernen es sey von welchen Dingen es wolle.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s14-004",
     "kind": "text",
     "aa": 368,
     "text": "Eine Erkenntniß ist praktisch, wenn sie einen Einfluß auf unsere Willkühr hat und zwar",
     "ocrConf": 44
    },
    {
     "id": "philippi-s14-005",
     "kind": "text",
     "aa": 368,
     "text": "1. Subiectiue, in so ferne sie Triebfedern hat der Sinnhchkeit; in so ferne sie uns wirklich bewegt.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-006",
     "kind": "text",
     "aa": 368,
     "text": "2. obiectiue, in so ferne sie Gründe hat woran wir erkennen wie sie geschehen solle. Die objective praktische Erkenntniß zeigt wie wir verfahren sollen, die subjective praktische Erkenntniß zeiget die Triebfedern an, nach welchen wir wirkliche Handlungen thun. Es gehört also zu der subjektiven praktischen Erkenntniß die Lehre der Affekten. Die Moral hat mit objectiven praktischen Gründen zu thun. Der Redner muß nach subjectiven praktischen Regeln handeln. Offt muß man täuschen.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-007",
     "kind": "text",
     "aa": 369,
     "text": "Alle diese bisherige Vollkommenheiten sind nun zusammengenommen im Autor.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-008",
     "kind": "text",
     "aa": 369,
     "text": "Die logische Vollkommenheit ist selten mit der aesthetischen vermengt, weil sie einander Abbruch thun. Man bringt Wahrscheinlich -keit vor weil es uns leicht ist. Es kann hingegen etwas gründlich, überzeugend seyn und dabey nicht aesthetisch vollkommen wie z. B. in der Metaphysik.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-009",
     "kind": "text",
     "aa": 369,
     "text": "Eine Erkenntniß kann praktisch vollkommen und dabey logisch unvollkommen seyn z. E. ein Beweiß vom Daseyn Gottes.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-010",
     "kind": "text",
     "aa": 369,
     "ms": [
      {
       "p": 61,
       "i": 65,
       "raw": "ei",
       "inferred": true
      }
     ],
     "text": "Es kann eine Erkenntniß objektive praktisch und nicht subjective seyn. So sind die meisten Predigten beschaffen. Sie zeigen immer was man thun soll ; wie man es sogar mit Lust thun soll, aber es bleibt doch ohne Nutzen. Ich kann es nicht thun; ich sehe es nicht sinnlieh. Ich wollte es gerne thun; ja ich wünsche Lust dazu zu haben.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-011",
     "kind": "text",
     "aa": 369,
     "text": "Man treibt das Ermahnen immer fort. Man sagt immer so und so sollte man seyn. Der Zuhörer will es auch, er wünscht es, aber kann nichts zur Wirklichkeit bringen. Es sollte daher Acht gegeben werden wie man aus den Gründen des Verstandes, auch Triebfedern der Sinnlichkeit hervorbringen könnte, wie man den Vortrag mit Vergnügen umkleiden und zu den objektiven praktischen Gründen auch subjective praktische Gründe hinzuthun könnte. Logische Erkenntniß giebt Einsicht; aesthetische gar nicht. Logische Erkenntniß muß zum Grunde gelegt werden; zuerst muß man was wirkliches lernen, und dann das Gelehrte reale schön einzukleiden wissen. Diejenige Erkenntnisse deren wir bedürfen sind so leicht zu begreifen, daß der Gelehrte keine größere Einsicht davon hat als der gemeine Verstand in Absicht auf die Praxin z. B. Die Erkenntniß von Gott und alle praktische Erkenntniß. Die praktische Vollkommenheit ist sehr kurz; und es lassen sich alle unsre praktische moralische Erkenntniße auf sehr wenige Formeln bringen. Dagegen ist der Plan der speculativischen Erkenntniße unermeßlich. Diese speculativische Erkenntnisse haben nur einen conuentionalen Werth z.B. in Gesellschafft. Es giebt ein Nachgeahmtes nach allgemeinen Gesetzen. Das Gebräuchliche ist was mit einem allgemeinen doch zufälligen stimmet, oder was in dem übereinstimmt, daß wir uns gegenseitig anpaßen. Wenn man das Gebräuchliche nachahmt, so ist das nicht schön, es dienet nur den Widerwillen zu verhüten; das Gebräuchliche gehört nicht zum Schönen. Das Schöne soll immer ungebräuchlich seyn; vid. Thomas Abbt.",
     "dehyphenated": 5,
     "ocrConf": 45
    },
    {
     "id": "philippi-s14-012",
     "kind": "text",
     "aa": 369,
     "text": "Es kann etwas gewöhnlich und nicht gebräuchlich seyn.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s14-013",
     "kind": "text",
     "aa": 370,
     "ms": [
      {
       "p": 62,
       "i": 558
      }
     ],
     "text": "Das Schöne ist eine Sache des Genies und durchaus keine Sache der Nachahmung. Es ist just das Gegentheil aller Nachahmung. Die Nachahmung kann zu keinem Grunde des Schönen dienen. Die Autoren die nach selbständigen und nicht modischen Gesetzen geschrieben, dienen nur seinen Geschmack darnach zu prüfen. Es waren offt modische Gesetze denen Autoren folgten wie z. B. Lohenstein, Voiture die den Gesetzen der Schönheit ganz entgegen sind. Sie gehen nur beständig dabin das Gefühl zu reitzen und ein Geräusch im Gemüth zu machen. Allein zum Gefühl gehört kein Verstand ; zum Geschmack gehört Verstand: der ist daher ein Analogon des Verstandes. Gefühl haben auch die Thiere aber nicht Geschmack; denn sie haben keinen Verstand. Kurz was geringschätzig was eckelhafftist, ist nachgeahmt. Man wird zuletzt durchs Nachahmen so angewöhnt, daß man nur nach Modellen machen und nichts aus sich selbst hervorbringen kann.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-014",
     "kind": "text",
     "aa": 370,
     "text": "Nichts ist widriger, nichts geringschätziger als was nachgeahmt worden. Was nicht aus mir selbst entsteht, kann mir nicht imputirt werden. Die Hauptbedingung aller Schönheiten ist die Gemächlichkeit ; sie ist nach Regeln der Sinnlichkeit ein Grund des Wohlgefallens. Es muß sich alles gleichsam von selbst und ganz leicht unsrer sinnlichen Faßlichkeit darstellen. Aber wie ängstüch, wie peinlich hervorgesucht sehen nicht die Schönheiten der Nachahmung aus. Man sieht es ihr schon an, mit welcher Angst und Zwang der Schrifftsteller zu gefallen sucht, und man bedauert ihn, daß er eben dadurch mißfällt.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s14-015",
     "kind": "text",
     "aa": 370,
     "text": "Das Gute ist der eßentiale Grund des Schönen. Das Wohlgefallen ist nur ein accidentaler und die Gründe desselben zufällig.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-016",
     "kind": "text",
     "aa": 370,
     "text": "Wenn nun das Schöne lang gekünstelt ist, daß es gefallen soll ; so ist dies lächerlich, weil es zufällig ist. Man sollte die Bemühung aufs Gute verwendet haben. Das Schöne muß ungekünstelt seyn, oder wenigstens muß es scheinen nicht gekünstelt zu seyn.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s14-017",
     "kind": "text",
     "aa": 370,
     "text": "Der Petitmaitre, Meister in Kleinigkeiten hält sich nicht am Gebrauch. Doch stimmt alles bey ihm zusammen auf das was gefällt.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s14-018",
     "kind": "text",
     "aa": 370,
     "aaEnd": 371,
     "pages": [
      {
       "p": 371,
       "i": 528
      }
     ],
     "ms": [
      {
       "p": 63,
       "i": 663,
       "approx": true
      }
     ],
     "text": "Nichts macht mehr Verdruß als das Gesuchte, wo der peinliche Angstschweiß und das finstere Stirnreiben hervorscheint. Wo aber eine Schönheit von selbsten ohne die geringste Mühe scheint entstanden zu seyn; das gefällt. Leichtigkeit ist uns immer sehr lieb. Peinliche Ordnung ist nicht leicht sondern schwer. Wer auf eine gesuchte Weise schreibt der schreibt so wenig nach Geschmack als derjenige der sich ängstlich kleidet und putzt es nach Geschmack thut. Die Leichtigkeit, die Hoheit, die Selbstbeherrschung, eine gewisse Art von Unordnung und Nachlaß igkeit, da man Kleinigkeiten nicht achtet um im Wichtigern desto genauer zu seyn: das ist gefällig. Wenn man eine Predigt höret oder bey einem Schau spiel gegenwärtig ist. und man bemerket, daß etwas gesucht ist, so gefällt es uns gleich nicht mehr. Ein ängstlicher Reimdichter mißfällt im höchsten Grade ; aber mit welchem Vergnügen liest man des Pope Verse wo die Reime natürlich und der Sache nach selbst scheinen geflossen zu seyn. Einfalt ist dem Gesuchten und Gekünstelten entgegen gesetzt. Alle Schönheit muß Einfalt haben, ohne sie kann keine wahre Schönheit seyn. Alles ist angenehm was keine Mühe scheint gekostet zu haben und von selbst entstanden zu seyn scheint. Die Einfalt ist indessen der Weitläufigkeit und Mannigfaltigkeit nicht entgegen. Zur wahren Schönheit gehört auch dies.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 39
    },
    {
     "id": "philippi-s14-019",
     "kind": "text",
     "aa": 371,
     "text": "Die Naivität ist doch was anders als die Einfalt. Sie besteht in der Einfältigkeit, in so ferne sie charakteristisch und aus dem Objekt entstanden ist und nicht gelehrt werden kann. So ist die ungeschminkte Ehrlichkeit am Menschen Naivität. Man freuet sich immer wenn man die Natur erblickt. Kunst ist immer verdächtig, daß sie uns täuscht und hintergeht.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s14-020",
     "kind": "text",
     "aa": 371,
     "aaEnd": 372,
     "pages": [
      {
       "p": 372,
       "i": 1347
      }
     ],
     "ms": [
      {
       "p": 64,
       "i": 1421
      }
     ],
     "text": "Es ist unangenehm, wenn man noch mehr Reiz über Gegenstände verbreiten will, welche schon an sich selbst von Natur gar zu viel Reiz haben; wenn man der simplen Natur, die die grösten Annehmlichkeiten ganz leicht hat. fremde und durch Kunst zusammengesuchte Schönheiten aufbürdet, um sie noch angenehmer und reizender zu machen. In diesen Fehler, in diesen Schwulst von Schönheiten ist das jetzige Zeitalter der deutschen Poeten gefallen. Wiesen, Gärten, Wollust selbst, Dinge die in der Natur allzuviel Reiz haben bemüht man sich um die Wette noch reizender zu machen. Man sollte den Reiz vielmehr den Dingen geben, die alles Reizes beraubt sind, wie die wesentliehe Schönheit die Tugend. Das würde Nutzen schaffen. Aber das ist auch nicht so leicht, als es ist, die Gründe der Billigung durch die kalte Vernunfft zu betäuben, und durch kützelnden Reiz zu ersticken. Laßt sie Reiz geben, der Verachtung alles Reizes. Alles sucht den Reiz der menschlichen Gesellschaft zu zerstören. Nun tretet auf Dichter, und stellt den halbverlohrnen Reiz wieder her. Aber so wie es leicht ist einem Tyrannen zu schmeicheln, aber große Kunst erfordert wird, ihm die Wahrheit so zu sagen, daß er es nicht übel nimmt; so ist es auch leicht der Sinnlichkeit mit Reiz zu schmeicheln, aber sehr schwer die Reflectiones die der ruhige Verstand darüber macht ihr so vorzustellen, daß sie es nicht übel nimmt. Gewiß es gehört große Kunst dazu, der Sinnlichkeit die wahren Urtheile des Verstandes auch nur, so daß sie nicht verdrießlich wird, vorzustellen, geschweige reizend zu machen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 35
    },
    {
     "id": "philippi-s14-021",
     "kind": "text",
     "aa": 372,
     "text": "Vom andern Abschnitt",
     "ocrConf": 23
    },
    {
     "id": "philippi-s14-022",
     "kind": "text",
     "aa": 372,
     "text": "Von der Weitläuftigkeit der gelehrten Erkenntniß",
     "ocrConf": 54
    },
    {
     "id": "philippi-s14-023",
     "kind": "text",
     "aa": 372,
     "text": "Der dessen Güter seinen Bedürfnissen nicht zureichen ist arm. Bey den Gelehrten findet sich Armseeligkeit, denn die Wißbegierde wird nicht gesättiget.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s14-024",
     "kind": "text",
     "aa": 372,
     "text": "Die Armseeligkeit unsrer phüosophischen Erkenntniß kommt daher, daß man stolz auf seine Weisheit thut.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s14-025",
     "kind": "text",
     "aa": 372,
     "text": "Man nennt einen arm in Proportion seines Standes. Ein Prinz kann viel Güter besitzen und doch als Prinz arm seyn. Wer so viel Erkenntniß hat, als er bedarf zu seinem Zweck zu gelangen, ist nicht arm. Wenn aber vorausgesetzt wird eine Erkenntniß, die dem ganzen Vermögen des Menschen möglich ist, und der Mensch, der einen Beruf dazu hat, nicht so viel als ihm möglich ist zu erlangen sucht; so ist die Erkenntniß armseehg, weil sie nicht den Grad erreicht, den sie erreichen könnte und sollte.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s14-026",
     "kind": "text",
     "aa": 372,
     "text": "Die Unwissenheit ist",
     "ocrConf": 41
    },
    {
     "id": "philippi-s14-027",
     "kind": "text",
     "aa": 372,
     "text": "1. der Sachen. Wenn die Objecte unbekannt sind; als denn kann man sie nicht beurtheilen. Es fehlet alle logische praktische und aesthetische Erkenntniß. Das ist Ignorantia quoad materiam.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-028",
     "kind": "text",
     "aa": 372,
     "text": "2. Der Form, der Verknüpfung der Erkenntnisse mit dem Verstände, mit dem Geschmack und mit der Praxi. Wenn man die Gründe nicht kennt oder die Verbindung, das ist ignorantia quoad formam.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s14-029",
     "kind": "text",
     "aa": 372,
     "text": "Formale Unwissenheit ist entweder",
     "ocrConf": 46
    },
    {
     "id": "philippi-s14-030",
     "kind": "text",
     "aa": 372,
     "text": "1. Unwissenheit der Gründe der Erkenntnisse.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s14-031",
     "kind": "text",
     "aa": 372,
     "text": "2. Unwissenheit der Gründe der Sachen. Z. B. In der Historie zu beweisen daß etwas sey, muß man Gründe der Erkenntniß und zu beweisen warum etwas sey, Gründe der Dinge wissen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-032",
     "kind": "text",
     "aa": 372,
     "text": "Es giebt Erkenntnisse mit den Gründen der Erkenntniß. So hat Copernikus unsre Sonnenwelt erkannt und Gründe des Erkenntnisses gehabt. Er zeigte was da geschieht.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s14-033",
     "kind": "text",
     "aa": 372,
     "ms": [
      {
       "p": 65,
       "i": 133
      }
     ],
     "text": "Es giebt aber auch Erkenntnisse mit den Gründen der Sachen. So hat Newton das copernikanische System erkannt, aber auch zugleich tue Gründe der Sachen gezeigt, woher die Himmelskörper sich so bewegen, durch sein System der Gravitation; vid. Eulerum.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s14-034",
     "kind": "text",
     "aa": 373,
     "text": "Um also die formale Unwissenheit zu vertreiben muß man",
     "ocrConf": 41
    },
    {
     "id": "philippi-s14-035",
     "kind": "text",
     "aa": 373,
     "text": "1. Gründe der Erkenntniß aufsuchen.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s14-036",
     "kind": "text",
     "aa": 373,
     "text": "2. Gründe der Sachen. Diese letztern sind uns offt unbekannt. Die Philosophie beschäfftiget sich damit; aber Gründe der Erkenntniß fordert man auch von gemeiner Erkenntniß. Man fragt bey aller Erkenntniß erst ob das auch wahr sey, und dann, was hats vor einen Grund. Die Genies der Menschen sind verschieden und man kann sie hier bey beurtheilen. Manche fragen nach den Gründen der Sachen. Der größte Theil der Menschen ist sehr gleichgültig gegen die Gründe der Erkenntniß; sie untersuchen nicht ob das auch wirklich wahr sey. Daher kommt die allgemeine Leichtgläubigkeit. Man grübelt, man forscht wie das oder jenes wras man erzählt findet, möglich gewesen, und läßt sich nicht einfallen zu fragen ob es auch wirklich geschehen sey. Dafür hat man sich wohl fürzusehen. Man frage erst was für einen Grund die Erzählung habe und dann suche man die Gründe der Sachen auszuspähen.",
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s15",
   "title": "§43",
   "titleSrc": "heading",
   "headings": [
    "§43"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s15-001",
     "kind": "heading",
     "aa": 373,
     "text": "§43"
    },
    {
     "id": "philippi-s15-002",
     "kind": "text",
     "aa": 373,
     "text": "Es kann eine Unwissenheit unvermeidlich und noth wendig seyn. Physisch unvermeidlich ist die Unwissenheit dessen, was wir nicht durch unsre Sinne erkennen z. B. was im Monde für Geschöpfe sind; wie der Zustand nach dem Tode wie derjenige nach der Welt seyn werde. Und eben dies ists wornach man am begierigsten und häufigsten fragt. Es sind solche Fragen nach unmöglichen Erkenntnissen ein Geschaffte, woran sich mittelmäßige Gelehrte belustigen, die eben dadurch nur zeigen, wie viel sie nicht wissen.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "philippi-s15-003",
     "kind": "text",
     "aa": 373,
     "aaEnd": 374,
     "pages": [
      {
       "p": 374,
       "i": 879
      }
     ],
     "ms": [
      {
       "p": 66,
       "i": 653
      }
     ],
     "text": "Aber nicht durch tentiren nicht per principia empirica, sondern aus allgemeinen Gründen die Grenzen der Erkenntniß des Verstandes und der Vernunft zu bestimmen und deutlich einzusehen in welchen Fällen unser Verstand nothwendiger weise unwissend seyn muß, das ist wahre Philosophie. Das thut die Metaphysic, die zum Object den reinen Verstand und dessen Schranken hat. Sie ist ein Studium des Subjekts ; daher erreicht sie ihren Zweck vollständig, wenn sie durch Verstandesregeln zeigen kann, wie weit der reine Verstand sich erstrecke, und wenn sie die Gesetze desselben erkläret. Bey ihr lernen wir unsre nothwendige Unwissenheit aus der Natur der Vernunft einsehen. 0 eine vortreffliche Wissenschafft! Das ist ja die wahre Weißheit, daß wir unsre Bestimmung und den Grad der Vollkommenheit lernen, der uns angemessen ist und dessen wir fähig sind. Jenes lehrt die Moral, dies die Metaphysik. Diese Wissenschafften werden auch zur Perfection gebracht werden; durch die Metaphysik wird gar nichts erfunden werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s16",
   "title": "§44",
   "titleSrc": "heading",
   "headings": [
    "§44"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s16-001",
     "kind": "heading",
     "aa": 374,
     "text": "§44"
    },
    {
     "id": "philippi-s16-002",
     "kind": "text",
     "aa": 374,
     "text": "Vom Horizonte der gelehrten Erkenntniß.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s16-003",
     "kind": "text",
     "aa": 374,
     "text": "Man muß in jeder Erkenntniß vom Grossen anfangen, dadurch entspringt Verbindung mit dem Kleinen und allen Theilen. Wenn man die Geographie lernt, so fängt man vom Globus an. Wir werden die Grenzen logisch bezeichnen durch den Maaßstab der Vernunfft, praktisch durch den Zweck des Willens.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s16-004",
     "kind": "text",
     "aa": 374,
     "text": "Es gehört dieses vorzüglich zur Logik.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s16-005",
     "kind": "text",
     "aa": 374,
     "text": "Der Horizont der menschlichen Erkenntniß ist der Umfang der Erkenntnisse die der menschlichen Vollkommenheit angemessen sind. Wenn Erkenntnisse der Grösse und Qualität nach stimmen mit den Regeln der Vollkommenheit und zugleich den Grenzen des Verstandes angemessen sind; so sind diese es, die den Horizont der menschlichen Erkenntniß ausmachen, über den man nicht gehen kann und soll. Die Wissenschaften sind begränzt entweder durch das Vermögen des Menschen, so daß einige nicht von ihm können erkannt werden, weil sie sein Vermögen übersteigen ; oder durch die Bestimmung und den Zweck des Menschen, so daß einige von ihm nicht dürfen erkannt werden, weil sie nicht zu seinem Zweck gehören.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s16-006",
     "kind": "text",
     "aa": 374,
     "text": "Die Sphaere der Erkenntniß des Menschen ästhetisch determinirt, ist dem Wahn, aber nicht dem Zwecke des Menschen gemäß.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s16-007",
     "kind": "text",
     "aa": 374,
     "text": "Wenn die Grenzen der Erkenntniß mit den Grenzen der Vollkonimenheit congruiren ; so ist der Bezirk den sie einschließen der für den Menschen bestimmte Horizont. Dieser Horizont der menschlichen Erkenntniß wird also seyn",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s16-008",
     "kind": "text",
     "aa": 374,
     "text": "1. logisch, in so ferne er bestimmt ist durchs Verhältniß der Erkenntniß zum Vermögen.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s16-009",
     "kind": "text",
     "aa": 374,
     "aaEnd": 375,
     "pages": [
      {
       "p": 375,
       "i": 501
      }
     ],
     "ms": [
      {
       "p": 67,
       "i": 191,
       "raw": "6T",
       "inferred": true
      }
     ],
     "text": "2. praktisch, in so ferne er bestimmt ist durchs Verhältniß der Erkenntniß zum Zweck, zum Willen, zur moralischen Vollkommenheit. Logisch, wenn ich den Umfang des Vermögens des Menschen, das ist seine Fähigkeit zum Maaßstabe annehme. Weil aber nicht alles zu unserm Zweck gehört, was durch unser Vermögen zu erwerben möglich wäre, so muß noch hinzukommen die Bestimmung des Horizonts nach dem Werth, der Bonität, dem Nutzen und der Übereinstimmung der Erkenntniß mit dem Zweck; das ist die praktische Bestimmung des Horizonts. Der Weise setzt die Grenzen seines Horizonts nicht durch sein Vermögen, sondern durch seinen vernünfftigen Zweck, nicht dynamisch, sondern teleologisch. Er zieht seine Vollkommenheit zu Rath und zeichnet seinen Horizont nur um die Erkenntnisse die derselben angemessen sind.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 44
    },
    {
     "id": "philippi-s16-010",
     "kind": "text",
     "aa": 375,
     "text": "Vollkommenheit ist theoretisch nach der Größe des Vermögens, praktisch nach dem Grade der Vollkommenheit.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s16-011",
     "kind": "text",
     "aa": 375,
     "text": "Es giebt Grade der Erkenntniße, über welche wir nichts mehr können, 1, verstehen 2, einsehn 3. begreifen.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s16-012",
     "kind": "text",
     "aa": 375,
     "text": "Der Kreis der Obiecte die ich erkennen kann, heißt der logische Horizont der Erkenntniße. Congruentia cognitionis cum perfectione humana.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s16-013",
     "kind": "text",
     "aa": 375,
     "text": "Wenn man vom Horizonte der menschlichen Erkenntniß redet und ich soll ihn bestimmen, so muß ich den Horizont der Erkenntniß des ganzen menschlichen Geschlechts von demjenigen der Erkenntniß eines einzigen Menschen unterscheiden. Wenn ich vom Horizont der Erkenntniß des menschlichen Geschlechts rede, so verstehe ich darunter den Umfang der Erkenntnisse die dem Menschen möglich sind und zwar alternative nicht kollective. Dann ist der Horizont sehr groß z. B. Einer kann groß seyn in der Historie, der andere in der Mathematik und etc. etc. Wenn ich nun alle diese Erkenntnisse verschiedener Subjekte summire, so kommt da eine wahre Summe, aber nicht ein Ganzes heraus, weil die Theile nicht verbunden sind. Wie die Länder der Erde so trägt der Verstand der Menschen verschiedene Früchte. Vor die Menschen ist gesorgt dem Verstände nach wie den Neigungen nach. Sorgsam und gütig hat die Vorsicht die Fähigkeiten sowohl als Neigungen so vertheüt, daß alle Arten der Wissenschaften und Künste wohl besetzt sind. Wenn man alles dieses zusammenzählt, welche Menge! Diejenige welche das was viele andere verstehen, zusammennehmen und in sich vereinten, heißen Polyhistores. Ein solcher war Leibniz. Der Horizont des menschlichen Geschlechts ist nicht möglich zu bestimmen.",
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "philippi-s16-014",
     "kind": "text",
     "aa": 375,
     "aaEnd": 376,
     "pages": [
      {
       "p": 376,
       "i": 330
      }
     ],
     "ms": [
      {
       "p": 68,
       "i": 436
      }
     ],
     "text": "Aber wie wird man den Horizont eines einzigen Menschen bestimmen l Dieses zu können muß man sehen 1. welches Grades 2. welcher Art der Erkenntniß er fähig ist; also auf sein Vermögen und auf seinen Zweck. Menschen erwerben sich gar nicht Erkenntnisse gemäß ihrem Horizont; denn sie wissen nicht ihr Vermögen, nicht ihre künfftige Neigungen und also auch nicht den Nutzen den sie aus dieser oder einer andern Erkenntniß schöpfen werden. Hier sehen wir also, daß wir den Horizont überhaupt wohl, aber den eines einzigen schwer erkennen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s16-015",
     "kind": "text",
     "aa": 376,
     "text": "I. ist zu determiniren der Horizont überhaupt logisch, was der Mensch erkennen kann. Nichts ist lächerlicher als sich bemühen etwas zu thun, da doch der Zweck nicht möglich ist unserm Vermögen. Wenn wir mehrmals unsere Kräfte erfahren haben durch Proben, dann sehen wir daß es uns nicht möglich war. Dann trauen wir unsern Kräfften zuviel daß das was sie nicht erreichen, auch über die Kräffte der Mensehen sey: denn wir sehen offt daß manches was uns unmöglich war. von andern ist erfunden worden. Eine Wissenschafft die uns die Grenzen der Erkenntniß mit Gewißheit zeichnet ist schwer; denn aus empirischen Gründen kann man das nicht bestimmen, weil immer mehr erfunden wird. Man muß es also aus Gründen a priori thun. Die Grenzen der historischen Erkenntniß zu bestimmen ist nicht möglieh so wie aller sinnlichen Erkenntnisse, aber welcher Grad der Erkenntniß möglich und welche Objecte dazu gehören ist möglich. Die Metaphysik zeigt es nemlich welche Objecte zum Intellectualen gehören und welcher Grad erlangt werden kann.",
     "dehyphenated": 4,
     "ocrConf": 44
    },
    {
     "id": "philippi-s16-016",
     "kind": "text",
     "aa": 376,
     "text": "Metaphysische Schwätzer bedienen sich dieser Wissenschaft auf unendliche Fragen, keine Antwort schuldig zu bleiben. Ihnen ist sie eine Schatzkammer, aus der sie auf alle Fragen entscheidende Antworten holen. Aber das ist Philosophie wenn ich durch eine richtige Erkenntniß der Grenzen der Vernunfft beweise daß diese und andere Fragen gar nicht können auf gelöset werden; zwar lehrt sie nicht was positives aber sie beweist daß es kein Problem der Vernunfft sey. Sie verfolget die Frage bis nach ihrem Ursprung, und siehet dann wie sie entstanden, und ob sie auf die natürlichen Kräfte nicht applicable sey. Das ist die erhabenste der Spekulationen. Es läßt sich also der Erkenntnißkreis eines Menschen zeichnen, so daß er einsieht, es sey dies oder jenes nach der Beschaffenheit seines Verstandes zu erkennen ihm unmöglich. Eine solche Metaphysik hält uns nicht nur ab vom Unnützen sondern auch vom Irrthum. Die größten Irrthüiner der Theologen und Moralisten kommen daher, weil man die Metaphysick für eine Dogmatick hielt aller über die Sinnlichkeit erhobenen Sätze, alles pure intellectuale. Spinoza war in seiner Aufführung nicht so als er in der Theorie war. Bloß die verkehrte Meinung von der Fähigkeit der Vernunfft brachte ihn zu so seltsamen Hirngespinsten.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s16-017",
     "kind": "text",
     "aa": 377,
     "text": "Logisch determiniren wir den Horizont durchs Vermögen.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s16-018",
     "kind": "text",
     "aa": 377,
     "text": "Praktisch durch die Zwecke.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s16-019",
     "kind": "text",
     "aa": 377,
     "ms": [
      {
       "p": 69,
       "i": 0
      }
     ],
     "text": "II. Der praktische Horizont kann bestimmt werden",
     "ocrConf": 42
    },
    {
     "id": "philippi-s16-020",
     "kind": "text",
     "aa": 377,
     "text": "1. pragmatisch nach dem Nutzen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s16-021",
     "kind": "text",
     "aa": 377,
     "text": "2. moralisch nach der Weißheit.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s16-022",
     "kind": "text",
     "aa": 377,
     "text": "Es kann also der praktische Horizont bestimmt werden 1. nach Regeln der Klugheit 2. nach Regeln der Weißheit. Nach diesen hat ihn Rousseau zu determiniren sich bemüht.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s16-023",
     "kind": "text",
     "aa": 377,
     "text": "Horizont der Erkenntniß ist so wie der optische Gesichtskreis. Jeder Mensch hat ein Stück das er übersiehet. Alle Menschen auf der Erde haben einen sehr grossen Horizont in den Wissenschafften. Da erkennen die Menschen zusammensummirt sehr viel, aber das kann nicht sonderlichen Nutzen schaffen; wenn einer diese zerstreute Wissenschafften zusammen hat; der kann Nutzen schaffen.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s16-024",
     "kind": "text",
     "aa": 377,
     "text": "I. Der Horizont der historischen Erkenntnisse ist nicht möglich genau zu bestimmen, wiewol gewissermaßen. Was von neuem hinzukommt, das vergißt sich vom Alten. Das Alte kommt immer mehr in Vergessenheit. Nur dem Namen nach ist ein Nabopolassar etc. etc. bekannt. Man macht aus den grossen Historien Kompendia, diese schwellen nach und nach wieder so hoch auf, daß unsre Enkel Kompendia werden machen müssen. So wird das Alte immer zusammengezogen und ausgeschaltet. Der Mensch kann nicht alles fassen. Die Historie schafft nur Gegenstände zur rationalen Erkenntniß.",
     "dehyphenated": 3,
     "ocrConf": 51
    },
    {
     "id": "philippi-s16-025",
     "kind": "text",
     "aa": 377,
     "text": "2. Der Horizont der rationalen Erkenntniß",
     "ocrConf": 48
    },
    {
     "id": "philippi-s16-026",
     "kind": "text",
     "aa": 377,
     "text": "a. der Mathematick, den bestimmt die Kürze des menschlichen Lebens. Man glaubt daher billig, daß nicht viel mehr werde erfunden werden. Denn man bringt die Lebenszeit zu, ehe man das weiß, was schon erfunden ist, ehe man in den Punct kommt von wo man ausgehet. Daher würde ein Mann, der etwa 200 Jahre lebte und alles in der Mathematik erkannt hätte, mehr Erfindungen darin machen können, als andere die eine gewöhnliche Zeit leben in 12000 Jahr. Gemeiniglich indem einer in den Standpunct kommt, wo er auf Erfindungen ausgehen kann, stirbt er; der andere muß von Anfange wieder anfangen, er kann nicht da fortfahren, wo jener stehen blieb.",
     "dehyphenated": 3,
     "ocrConf": 50
    },
    {
     "id": "philippi-s16-027",
     "kind": "text",
     "aa": 377,
     "text": "b. Den Horizont der Philosophie bestimmt die Metaplrysik.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s16-028",
     "kind": "text",
     "aa": 377,
     "aaEnd": 378,
     "pages": [
      {
       "p": 378,
       "i": 199
      }
     ],
     "ms": [
      {
       "p": 70,
       "i": 276
      }
     ],
     "text": "Dies wäre eine Betrachtung des logischen Horizonts; aber der praktische Horizont ist viel kleiner. Rousseau hat ihn zu bestimmen gesucht. Da ist vieles, was wir nicht wissen dürfen, ja was wir nicht wissen müssen. Warum haben wir aber Vermögen dazu ? Rousseau sagt: Die Natur hat es uns gegeben, daß wir es nicht nöthig haben sollen; schweifen wir aber aus, so soll es uns zum Mittel dienen uns wieder zu helfen: wie ein Vomitiv und alle Medicinalpflanzen die die Natur uns gegeben, daß wir nicht nöthig haben sollen sie zu gebrauchen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s16-029",
     "kind": "text",
     "aa": 378,
     "text": "Zum rationalen Horizont gehören nur die Gegenstände, die Begriffe von sich geben und eine Reflexion veranlassen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s16-030",
     "kind": "text",
     "aa": 378,
     "text": "Je mehr die Wissenschaften auf eine kleine Zahl restringirt werden, zu desto größerer Vollkommenheit können sie gelangen. Die Wissen-Schäften finden reichen Werth, je mehr sie allgemein werden, und durch einen spielenden Witz können gefaßt werden.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s17",
   "title": "§45",
   "titleSrc": "heading",
   "headings": [
    "§45"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s17-001",
     "kind": "heading",
     "aa": 378,
     "text": "§45"
    },
    {
     "id": "philippi-s17-002",
     "kind": "text",
     "aa": 378,
     "text": "Der Autor sagt von einer Erkenntniß daß sie über unsern Horizont ist, nur in so ferne er logisch determinirt ist, oder in so ferne die Erkenntniß unsre Fähigkeit übersteigt z. B. was unsere Seele vor der Geburt gewesen, wo sie gewesen, das ist über den Horizont. Was sind im Saturn für Moden 1 Wie unser Auge hier gewisse Grenzen hat und wie die Astronomie sie hat, indem die Sinne nicht weiter zureichen: so hat sie auch der Verstand. Milton scheint den Limbum vanitatis (den Rand der Eitelkeit) betreten zu haben.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s17-003",
     "kind": "text",
     "aa": 378,
     "text": "Wenn wir sehen wie unsre Erkenntniß hier so gering ist, so ist uns ängstlich in unserer wahren Welt zu bleiben, wir schwingen uns in idealische Welten. Gut ist es sich am Horizont zu halten und es ist auch möglich ihn genau zu determiniren. Es giebt nicht viel Fähigkeiten die nicht zu unserm Glück und Nutzen gereichen. Was auf unser Glück nicht respicirt, dazu haben wir auch nicht viel Fähigkeit. Wenn der Mensch aus seiner Bestimmung geht, wankt er wie der zwischen 2 Heubünden stehende Esel im Aesop. Was hat er nöthig herum mit seinem lüstern Auge zu irren in dem, was von ihm nicht erkannt werden kann.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s18",
   "title": "§46 §47",
   "titleSrc": "heading",
   "headings": [
    "§46 §47"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s18-001",
     "kind": "heading",
     "aa": 378,
     "text": "§46 §47"
    },
    {
     "id": "philippi-s18-002",
     "kind": "text",
     "aa": 378,
     "aaEnd": 379,
     "pages": [
      {
       "p": 379,
       "i": 197
      }
     ],
     "text": "Der Autor nennet nur die praktische Bestimmung des Horizonts, wenn er erkläret was ausser dem Horizonte sey. Was schädlich und unnütz ist, ist unter seinem Horizont, nach der Benennung des Autors. Wenn der Mensch, der Verbindlichkeit zu so viel Dingen hat, das Unnütze thut, so versäumt er das Seine. Was aber das Nützliche einer Erkenntniß sey, ist schwer zu bestimmen. Es muß bestimmt werden 1. moralisch nach Regeln des Verstandes und 2. pragmatisch nach denen der Klugheit.",
     "joined": [
      "layout"
     ],
     "ocrConf": 42
    },
    {
     "id": "philippi-s18-003",
     "kind": "text",
     "aa": 379,
     "ms": [
      {
       "p": 71,
       "i": 131,
       "raw": "?'",
       "inferred": true
      }
     ],
     "text": "Anfänger können den entfernten Nutzen nicht voraus einsehen. Wie konnten Archimedes und Euklides wissen, daß die Kegelschnitte zur Erklärung des Laufes der Weltkörper dienen werden ? Nur Erfahrung macht es deutlich.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s18-004",
     "kind": "text",
     "aa": 379,
     "text": "Eine Erkenntniß die uns fühlen läßt die Schärfe des Verstandes das ist die Mathematik. Sie dient nicht zum bürgerlichen Leben; das klingt unwürdig und geizig, denn müßte man ihrer entbehren; in der Evidenz dient sie, da sie die Schärfe des Verstandes uns zeigt.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s18-005",
     "kind": "text",
     "aa": 379,
     "text": "Die Erkenntniß der Sittlichkeit und Moral hat die allergenaueste allgemeine Gründe. Da hat der Verstand besondere Einsicht; eine Ehre und Glück der Menschheit, aber auch eine Pflicht derselben nach der Erkenntniß sittlicher Gesetze zu streben. Die Nützlichkeit der Erkenntniß ist schwer auszumachen. Ein Mathematiker erfindet aufs Gerathe wohl und offt bringen seine Erfindungen unaussprechlichen Nutzen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s18-006",
     "kind": "text",
     "aa": 379,
     "text": "Unter dem Horizonte. Naturerkennt niß ist an allen Gegenden zu erkennen. Ja wenn nur die andern nöthigen Erkenntnisse es erlauben wollten, so würde man den Text zur Moral selbst darin antreffen. Die Wirkungen der menschlichen Thorheit und der menschliehen Laster sind nicht werth von uns erkannt zu werden. Wozu dienet doch die Kezerhistorie ? Insekten zieren doch noch getrocknet das Kabinet, aber wie Averdens Hirngespinster obgleich in Franz -bänden zieren? Ja es dienet nur manche zu nachahmenden Träumereien, andere zur Spottsucht zu verleiten. Wie ? sollen wir unsern Haß exkoliren lernen ? — Viele Reste der alten Philosophie sind Träume, die die träumende Alten verfertiget. Sie würden lachen, die Alten, wenn sie sehen würden, daß wir da lernen wollten.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s18-007",
     "kind": "text",
     "aa": 379,
     "text": "Bis hieher vom Horizont in Ansehung des menschlichen Geschlechts überhaupt; jetzt von demselben in Absicht aufs Alter, Geschlecht, Lebensstand.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s18-008",
     "kind": "text",
     "aa": 379,
     "aaEnd": 380,
     "pages": [
      {
       "p": 380,
       "i": 194
      }
     ],
     "ms": [
      {
       "p": 72,
       "i": 847,
       "raw": "n",
       "inferred": true
      }
     ],
     "text": "I. Ein Kind hat einen andern Horizont als ein Mann. Etwa nach 40 Jahren, wenn der Mensch fortführet zu denken, so siehet er die Dinge ganz anders als vordem. Alsdenn ist er nicht mehr so empfindlieh für den Reiz. Die Neigungen schwinden bey ihm. Vordem entschied er das Gute nach den Neigungen, aber jetzt entscheidet ers durch andere Merkmale, er erkennt es an sich selbst. Neue Einsichten hat er nicht mehr, aber mehr Applikation der Einsichten. Nun fragt sich : sind die Erkenntnisse einzurichten nach dem Horizont des Alters worin sich jetzt der Mensch befindet, oder nach demjenigen des zukünftigen Alters z. B. Wie viel und welche Erkenntnisse gehören für ein Kind von 6 Jahren; soll man dessen Horizont einrichten nach dem künfftigen Horizont des Mannes oder nach dem Alter worin es ist, nach dem was es jetzt zu erkennen fähig ist, worauf jetzt sein Geschmack gehet. Rousseau behauptet das letztere 1. das Kind genießt alsdenn sein Leben nach seinem Verhältniß und wird 2. auch zu dem künfftigen Horizont präparirt 3. Es bringt seine Zeit in Zufriedenheit und Furchtlosigkeit aufs Künftige zu. Ein solch Kind sterbe wenn es wolle. Es hat sich seines Lebens erfreut. Wenn ein Mensch hier seinen Posten, den er jetzt hat, gut führet, so kann er eben dadurch zum künfftigen wohl zubereitet werden. Wenn er aber nur nach dem Künfftigen trachtet, so führt er seinen Posten schlecht und bringt sein Leben in Unruhe zu. So geht es auch mit Kindern. Was aber für Kenntnisse dem Kinde seinem Geschmack und Nutzen angemessen seyn, das ist schwer zu sagen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "philippi-s18-009",
     "kind": "text",
     "aa": 380,
     "text": "IL Horizont des Geschlechts. Da ist offenbar daß derjenige des andern Geschlechts nur solche Kenntnisse umzirkelt, die dem Geschmack und Beruf deßelben gemäß sind. Ein dem weiblichen Geschlecht angemessener Beruf ist die Ehre desselben. Die Geschlechter haben zwei verschiedene Departements; jedem gehört das Seine zu. Der Reiz geht verlohren, wenn eines sich mit dem beschäftiget, was in das Departement des andern gehört.",
     "dehyphenated": 2,
     "ocrConf": 49
    },
    {
     "id": "philippi-s18-010",
     "kind": "text",
     "aa": 380,
     "text": "III. Horizont nach Verschiedenheit der Stände und Lebensarten. Es ist kläglich, daß ein Mensch von hoher Geburt nur einen kleinen Horizont glaubt haben zu dürfen. Vornehme Leute besitzen Landgüter, da sie nun so erwünschte Zeit und Gelegenheit haben, sollten sie eben die Wissenschafften vorzüglich kultiviren und nicht mit Fütterung des Viehes und Einfangen des Hasens ihr Leben zubringen. In Frankreich und Engelland setzt man den Adel nicht so in die Geburt als in die Denkungsart und in die Seele. Die Lebensart ist ein wahrer Grund der Bestimmung des Horizonts.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s18-011",
     "kind": "text",
     "aa": 380,
     "aaEnd": 381,
     "pages": [
      {
       "p": 381,
       "i": 123
      }
     ],
     "text": "Wissenschafften der Geschicklichkeit sich zu führen, und andere, dienen nur zur Insinuation zur Empfehlung. Die Hauptwissenschafften sind die, die durch den Zusammenhang dem Staate nützen können.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s18-012",
     "kind": "text",
     "aa": 381,
     "ms": [
      {
       "p": 73,
       "i": 318,
       "raw": "'3",
       "inferred": true
      }
     ],
     "text": "Anmerkungen. Was über unsern Horizont ist, das ist nicht just über den Horizont aller. Daher lerne man die Historie der Gelehrten. Was innerhalb meinem Horizont ist, ist darin noch nicht in dem Horizont aller. Daher kommt der fehlerhaffte Unterricht, daß ein Lehrer denkt, der Lehrling müsse den Horizont haben den er hat. Dazu gehört sehr viel Scharfsinnigkeit daß man sich in den Standpunkt eines andern zu versetzen wisse. Es kann etwas ausserdem Horizonte anderer seyn, so doch unter dem Unsrigen ist.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s18-013",
     "kind": "text",
     "aa": 381,
     "text": "Es wird viel Kenntniß der Welt erfordert, wenn man die geziemende Anwendung der Wissenschafften kennen und wissen will, wie weit eine Kenntniß dem oder jenem Stande ansteht. Ist es den türkischen Kaysern wohl anständig daß sie Handwerke lernen ? Könnten sie nicht ein edleres Zeitvertreib haben. Die Kenntniß des Werths der Wissenschaften ist einem Fürsten noth wendig zu wissen. Es ist ein Unglück daß der Mensch in der Jugend das was ihm angemessen ist nicht wählen kann und andere Menschen es nicht treffen können.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s18-014",
     "kind": "text",
     "aa": 381,
     "text": "Das Uebel für den Horizont des Menschen kommt her theils aus der Schwierigkeit bey der Wahl, theils aus derjenigen bey dem tiefen Endzweck.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s18-015",
     "kind": "text",
     "aa": 381,
     "text": "Ein theoretischer Lehrer muß sich nach dem fähigsten richten ; aber ein praktischer auch nach dem allerunfähigsten.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s18-016",
     "kind": "text",
     "aa": 381,
     "text": "Wie wir unsern Horizont nicht zum Maaßstabe anderer machen, so müssen wir den unsrigen immer näher zu bestimmen suchen. Der Mensch muß seinen Horizont nicht sogleich abzeichnen ; denn er weiß seine künftige Fähigkeiten und Neigungen nicht auch den Beruf nicht zu dem sie ihn ziehen werden. Endlich muß er ihn festsetzen und denn nicht ohne Noth verändern. Die bald auf dies bald auf jenes sich legen, die werden in keinem vollkommen, in allem fuscherhafft.",
     "ocrConf": 37
    }
   ]
  },
  {
   "id": "s19",
   "title": "§50",
   "titleSrc": "heading",
   "headings": [
    "§50"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s19-001",
     "kind": "heading",
     "aa": 381,
     "text": "§50"
    },
    {
     "id": "philippi-s19-002",
     "kind": "text",
     "aa": 381,
     "aaEnd": 382,
     "pages": [
      {
       "p": 382,
       "i": 393
      }
     ],
     "text": "Da redet der Autor von der Unwissenheit die untadelhafft ist. Diese gehet auf die Dinge zu deren Erkenntnisse wir kein Vermögen haben und die zu unserm Beruf nicht gehören und uns auch keinen wirklicken Nutzen verschaffen. Eine solche Unwissenheit ist in Ansehung der eigentümlichen Erkenntnisse ihre Seele. Warum soll man sich um Erkenntnisse bemühen, die uns nicht zu gehören, nicht nützen. Es wird z. E. die Unwissenheit eines Gelehrten in der Küchenwissenschaft, in der Betrugmethode der Kaufleute, untadelhaft sejm. Lobenswürdig wird die Unwissenheit wenn man unnöthige oder nachtheilige, unwürdige, schädliche Erkenntnisse verwirfft, in der Absicht, daß man dafür sich mit nützlichen beschäfftigen könne. Es kann aber eine Unwissenheit respectiue lobenswürdig seyn, in Absicht auf gewisse Umstände, Zeitalter etc. etc. da sie nicht nur keinen Tadel, sondern auch Lob verdient.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s19-003",
     "kind": "text",
     "aa": 382,
     "ms": [
      {
       "p": 74,
       "i": 0,
       "raw": "u",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "I § 52",
     "ocrConf": 17
    },
    {
     "id": "philippi-s19-004",
     "kind": "text",
     "aa": 382,
     "text": "Sokrates sagte er habe durch vieles Forschen gefunden, daß er noch nichts weiß. Dieser tiefsinnige Ausspruch ist von seichten Köpfen herum geworfen, ohne daß sie ihn eingesehen. Es gehört sehr viel dazu seine Unwissenheit zu wissen. Es giebt zwei Arten des Bewußt -seyns der Unwissenheit.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s19-005",
     "kind": "text",
     "aa": 382,
     "text": "1. indem man sich an den Gegenständen mißt und dadurch sieht",
     "ocrConf": 39
    },
    {
     "id": "philippi-s19-006",
     "kind": "text",
     "aa": 382,
     "text": "daß man sie nicht kennt.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s19-007",
     "kind": "text",
     "aa": 382,
     "text": "2. oder materiahter indem man die Gegenstände selbst nicht kennt.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s19-008",
     "kind": "text",
     "aa": 382,
     "text": "Aber einzusehen daß unser Wissen nichts sey; das ist scientifisch. Die Grenzen seiner Erkenntniß den Umfang derselben einsehen und dadurch erkennen daß ich das nicht weiß; das ist sehr tiefe Philosophie. Das Nichtwissen ist hier wissenschaftlich in Ansehung der Grenzen der Erkenntniß, die man um es einzusehen wissen muß. Seine Unwissenheit systematisch und mit Scharfsinnigkeit einzusehen, bis auf welchen Grad man gehen kann : o dazu gehört viel. Wir können einen Mangel nur dadurch einsehen, daß wir eine Erkenntniß haben von gegenseitigen Positionen. Z. B. Man kann die Finsterniß nicht wissen als durchs Licht. Blinde da sie sind operirt worden haben sich für die schwartze Nacht gefürchtet, da sie sich vordem nicht für sie gefürchtet haben, weil sie sie nicht kannten.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s19-009",
     "kind": "text",
     "aa": 382,
     "aaEnd": 383,
     "pages": [
      {
       "p": 383,
       "i": 469
      }
     ],
     "text": "Das Nichtseyn ist kein Object; aber die Aufhebung des Positiven ist was objectives. Die Remotion des Lichts ist Finsterniß ; da muß ich das Licht gekannt haben, wenn ich wissen will daß es removiret und dadurch Finsterniß da ist. Der Wilde kennt seinen Mangel nicht, denn er hat den Überfluß niemals gehabt. Eben so kann man die Grenzen des Erkenntnisses nicht kennen, als daß man alles Wissen kennt. So wird der Astronom seine Unwissenheit weit mehr erkennen, als der gemeine Mann. Unter allen theoretischen Wissenschafften kann keine mehr demüthigen als die Astronomie.",
     "joined": [
      "layout"
     ],
     "ocrConf": 37
    },
    {
     "id": "philippi-s19-010",
     "kind": "text",
     "aa": 383,
     "text": "Zuerst erhebt sie uns, dann erniedrigt sie uns aufs tiefste.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s19-011",
     "kind": "text",
     "aa": 383,
     "ms": [
      {
       "p": 75,
       "i": 65,
       "raw": "»5",
       "inferred": true
      }
     ],
     "text": "Das was wir hoch an uns zu schätzen haben, ist die Fähigkeit das Sittliche unterscheiden zu können und die Grenzen unsrer Wünsche bestimmen zu können.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s19-012",
     "kind": "text",
     "aa": 383,
     "text": "Das ist ein grosser Nutzen der Wissenschafften daß sie uns unsre Unwissenheit zeigen.",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s20",
   "title": "§ 54",
   "titleSrc": "heading",
   "headings": [
    "§ 54"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s20-001",
     "kind": "heading",
     "aa": 383,
     "text": "§ 54"
    },
    {
     "id": "philippi-s20-002",
     "kind": "text",
     "aa": 383,
     "text": "Man kann wählen zu seinem Horizont Wissenschaften nach der Geschicklichkeit, der Klugheit, der Weißheit. Geschicklichkeit hat der der gute Mittel hat zu behebigen Zwecken zu kommen. Klugheit ist das Vermögen sich Zwecke zu wählen die nur den Neigungen angemessen sind. Weißheit ist das Vermögen sich Zwecke der Vollkommenheit zu wählen.",
     "dehyphenated": 2,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s21",
   "title": "§53",
   "titleSrc": "heading",
   "headings": [
    "§53"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s21-001",
     "kind": "heading",
     "aa": 383,
     "text": "§53"
    },
    {
     "id": "philippi-s21-002",
     "kind": "text",
     "aa": 383,
     "text": "Plato unterschied die Philosophie und Philodoxie. Philodox ist der sich alle Geschicklichkeit erwirbt, alle möglichen Quaestionen sie mögen noch so abgeschmackte Zwecke haben, zu beantworten. Der Philosoph im akademischen Verstände ist ein solcher Philodox, allein der wahre Pliilosoph ist der der sich fähig zu machen sucht nur das zu erkennen was der wahren Vollkommenheit und der höchsten Bestimmung des Menschen angemessen ist.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s21-003",
     "kind": "text",
     "aa": 383,
     "text": "Die Polyhistorie ist eine historische Erkenntniß des ganzen Horizonts der Menschen. Die Eitelkeit ist ein großer Antrieb zur Polyhistorie, weil die historische Erkenntniß die leichteste ist. Er entdeckt was gedacht ist ohne selbst zu denken.",
     "dehyphenated": 2,
     "ocrConf": 36
    }
   ]
  },
  {
   "id": "s22",
   "title": "§ 55",
   "titleSrc": "heading",
   "headings": [
    "§ 55"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s22-001",
     "kind": "heading",
     "aa": 383,
     "text": "§ 55"
    },
    {
     "id": "philippi-s22-002",
     "kind": "text",
     "aa": 383,
     "text": "Wenn eine Erkennt niß nichts enthält . was nicht zum Zwecke gehört, so ist sie abgemessen (adaequat)",
     "ocrConf": 34
    }
   ]
  },
  {
   "id": "s23",
   "title": "§56",
   "titleSrc": "heading",
   "headings": [
    "§56"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s23-001",
     "kind": "heading",
     "aa": 383,
     "text": "§56"
    },
    {
     "id": "philippi-s23-002",
     "kind": "text",
     "aa": 383,
     "aaEnd": 384,
     "pages": [
      {
       "p": 384,
       "i": 127
      }
     ],
     "ms": [
      {
       "p": 76,
       "i": 654,
       "raw": "T6",
       "inferred": true
      }
     ],
     "text": "Wir können studiren 1. um des Geschmaks willen, wenn man von dem Reiz der Wissenschafften eingenommen ist '2. um der Eitelkeit willen, daß man nur in Ruf komme. An und vor sich ist das flüchtige Studiren nicht ganz zu verwerfen. Man soll erst das Feld der Wissenschafften flüchtig durchlaufen, ehe man sie gründlich erlernet. Wenn wir synthetisch, das ist, von den Theilen zur Erkenntniß des Ganzen studieren, so werden wir nicht wohl fortkommen: glücklicher aber werden wir im Studieren seyn, wenn wir analytisch nach Betrachtung des Ganzen auf die Theile desselben gehen. Daher wenn wir ein Buch durchlesen, so ists nöthig daß wir uns den ganzen Abriß zuerst vorstellen, hierauf zu den Haupttheüen fortgehen, und dann zu den untergeordneten Theilen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s24",
   "title": "§62",
   "titleSrc": "heading",
   "headings": [
    "§62"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s24-001",
     "kind": "heading",
     "aa": 384,
     "text": "§62"
    },
    {
     "id": "philippi-s24-002",
     "kind": "text",
     "aa": 384,
     "text": "Die Weitläufftigkeit der gelehrten Erkenntniß beruhet",
     "ocrConf": 42
    },
    {
     "id": "philippi-s24-003",
     "kind": "text",
     "aa": 384,
     "text": "1. auf der Menge der Gegenstände die ich erkenne, das ist quantitas extensiua.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s24-004",
     "kind": "text",
     "aa": 384,
     "text": "2. auf dem Grad, wie viel ich von einem jeden dieser Gegenstände erkenne: das ist quantitas intensiua.",
     "ocrConf": 51
    }
   ]
  },
  {
   "id": "s25",
   "title": "§63",
   "titleSrc": "heading",
   "headings": [
    "§63"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s25-001",
     "kind": "heading",
     "aa": 384,
     "text": "§63"
    },
    {
     "id": "philippi-s25-002",
     "kind": "text",
     "aa": 384,
     "text": "Die Hauptwissenschafft muß eine Beziehung haben",
     "ocrConf": 37
    },
    {
     "id": "philippi-s25-003",
     "kind": "text",
     "aa": 384,
     "text": "a. auf die Fähigkeiten.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s25-004",
     "kind": "text",
     "aa": 384,
     "text": "ß. auf die Neigungen.",
     "ocrConf": 30
    },
    {
     "id": "philippi-s25-005",
     "kind": "text",
     "aa": 384,
     "text": "y. auf die Pflichten und die Bestimmung des Subjekts; auf die\" Stelle die man in der Welt eiiinimmt. Nach diesen Kegeln Avähle man seine Hauptwissenschaft; und dies muß man thun, denn unter allen Erkenntnissen soll Einheit und ein Grund seyn, worauf ich sie alle beziehe.",
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s26",
   "title": "§65",
   "titleSrc": "heading",
   "headings": [
    "§65"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s26-001",
     "kind": "heading",
     "aa": 384,
     "text": "§65"
    },
    {
     "id": "philippi-s26-002",
     "kind": "text",
     "aa": 384,
     "aaEnd": 385,
     "pages": [
      {
       "p": 385,
       "i": 674
      }
     ],
     "ms": [
      {
       "p": 77,
       "i": 1074,
       "raw": "\"",
       "inferred": true
      }
     ],
     "text": "Ein Pedant ist der, der zwar Geschicklichkeit und Erkenntniß besitzen mag, aber sie nicht zu appliciren weiß, weil er die Welt nicht recht kennt. Es giebt also Pedanten in allen Ständen, unter Hofleuten, Soldaten, Putzpedanten, es giebt Pedanten des Geschmacks, ja Pedanten unter den Gelehrten in der Metaplrysik ; wenn man eine Subtilität auf einen Gegenstand anwendet, der doch von keinem Nutzen ist. Der gelehrte Pedant ist der erträglichste, weil man doch etwas von ihm lernen kann ob es gleich zu unrechter Zeit angebracht ist. Daher um die Pedanterey loß zu werden muß man im Stande seyn ein genugsames Urtheil fällen zu können, in welchen Fällen die Urtheile passen. Cicerons esse videatur, die sogenannte fallacia caussae non caussae fast die ganze Syllogistik, die Menge der Terminologien gehören zur Pedantere}T. Die Pedanterey ist der Petitmaitrerey entgegengesetzt, die voll Seichtigkeit ist. Diese findet bey Völkern statt, bey denen das Frauenzinimer den Ton giebt z.B. bey den Franzosen. Ganz verschieden aber ist die Charlatanerie. Der Pedant fehlt aus Unwissenheit, weil es ihm an Einsicht fehlt, seine Schicklichkeiten recht auszukramen. Der Charlatan aber fehlt aus Vorsatz; er hat die Absicht gegen andere seine Einsicht, sie möge passen oder nicht, auszukramen um einen Ruhm zu erlangen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s27",
   "title": "Der III. Abschnitt. §66",
   "titleSrc": "heading",
   "headings": [
    "Der III. Abschnitt.",
    "§66"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s27-001",
     "kind": "heading",
     "aa": 385,
     "text": "Der III. Abschnitt. §66"
    },
    {
     "id": "philippi-s27-002",
     "kind": "text",
     "aa": 385,
     "text": "Die Weitläufftigkeit ist eine extensiue Gröse, wenn ich erkenne, wie viel gesetzt ; diese Grösse wird als ein Ganzes angesehen und gezählet. Die intensiue Grösse ist der Grad der Erkenntnisse; sie wird als ein Grund angesehen, wenn die Theile viele Folgen haben, und ich frage wie viel durch das Ding gesetzt sey. Diese Grösse heißt die Fruchtbarkeit und Wichtigkeit. Die subjectiven Erkenntnisse bestehen im Grade der Deutlichkeit.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s28",
   "title": "§ 74",
   "titleSrc": "heading",
   "headings": [
    "§ 74"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s28-001",
     "kind": "heading",
     "aa": 385,
     "text": "§ 74"
    },
    {
     "id": "philippi-s28-002",
     "kind": "text",
     "aa": 385,
     "text": "Der Autor redet vom Pöbelhafften. An und vor sich selbst ist nichts pöbelhaff t oder niederträchtig, sondern die Handlungen der Menschen, der Mißbrauch der Kräfte des Menschen machen es pöbelhafft oder niederträchtig. Denn man kann nicht sagen, daß ein Wurm in der Natur verächtlich sey, aber in den Handlungen der Menschen wird etwas niederträchtig. Es giebt viele unanständige Dinge Z. B. die casuistische Moral, welche von emem Jesuiten geschrieben worden, worinn der Verfasser handelt wie sich ein Geistlicher bey allen Fällen des Ehestandes zu verhalten habe ist eine unanständige Schrifft. Es sind da Regeln über Fälle geschrieben, die sich niemals ereignen werden.",
     "ocrConf": 49
    }
   ]
  },
  {
   "id": "s29",
   "title": "§91",
   "titleSrc": "heading",
   "headings": [
    "§91"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s29-001",
     "kind": "heading",
     "aa": 385,
     "text": "§91"
    },
    {
     "id": "philippi-s29-002",
     "kind": "text",
     "aa": 385,
     "aaEnd": 386,
     "pages": [
      {
       "p": 386,
       "i": 126
      }
     ],
     "text": "Das Vermögen der Beurtheilung, den wahren Werth der Dinge einzusehen erlangen wir spät, wenn Erfahrung, Weißheit und Klugheit sich bey uns genugsam findet. Das Vermögen aber der Spekulation erlangen wir eher.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s30",
   "title": "Der IV. Abschnitt. Von der Wahrheit der gelehrten Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Der IV. Abschnitt.",
    "Von der Wahrheit der gelehrten Erkenntniß."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s30-001",
     "kind": "heading",
     "aa": 386,
     "text": "Der IV. Abschnitt. Von der Wahrheit der gelehrten Erkenntniß."
    },
    {
     "id": "philippi-s30-002",
     "kind": "text",
     "aa": 386,
     "ms": [
      {
       "p": 78,
       "i": 213
      }
     ],
     "text": "Die erste unter allen logischen Fragen ist die : was ist Wahrheit ? doch ist es so schwer eine Antwort darauf zu geben, die nicht im Zirkel zurückliefe, daß dies noch bis jetzo eine der schwierigsten Sachen in der Philosophie ist. Die Regeln müssen schon zu Grunde gelegt seyn über die man ein Urtheil fällen soll. Ich soll die Regeln der Wahrheit untersuchen und muß, indem ich dies thue, selbst nach den Regeln der Wahrheit verfahren, viel. Jacobi in seinen vermischten Schriften.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s30-003",
     "kind": "text",
     "aa": 386,
     "text": "Wir sollen die Wahrheit erklären, wir wollen dies nicht gerade zu sondern durch Vergleichung derselben mit der Falschheit thun. Unter den Alten f rügen die Sceptiker auch nach Wahrheit um die Dogmatiker in Verwirrung zu setzen und widerlegten sie durch ihre Dialectik ; davon unten ein mehreres. Ich werde hier nicht die Wahrheit dem Irrthum, sondern der Falschheit entgegen setzen. Das Thema der Wahrheit ist das Object. Ich vergleiche hier die Wahrheit und Falschheit und da setze ich folgendes vest:",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-004",
     "kind": "text",
     "aa": 386,
     "text": "I. Wahrheit und Falschheit ist nur in Urtheilen nicht in Begriffen. Wer nicht urtheilt, dessen Erkenntniß kann ich weder wahr noch falsch nennen : durchs Urtheilen nur offenbaret sich die Wahrheit und Falschheit. Aber wenn ein Begriff einen Wiederspruch in sich schließt, dann muß er doch wohl falsch seyn. Nein auch dann nicht. Falschheit ist wenn man hintergangen wird. Begriffe können mich nicht hintergehen, es sey denn daß Urtheile hinzulvommen.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s30-005",
     "kind": "text",
     "aa": 386,
     "text": "Der Begrif eines körperlichen Geistes ist nicht falsch. Ein unmöglicher oder wiedersprechender Begrif kann selbst wahre Folgen haben. Z. B. ein körperlich denkendes Wesen wäre theilbar. Und dadurch daß ich wahre Folgen aus dem Unmöglichen ziehe, sehe ich die Unmöglichkeit hernach ein. Wären die Begriffe der Schlüsse falsch; so könnte man keine Unmöglichkeit einsehen. Spinozas Irrthum bestand im Urtheil nicht in Begriffen. Kurz: Falschheit ist nur da wo man urtheilt und nicht da wo man nicht urtheilt.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-006",
     "kind": "text",
     "aa": 387,
     "ms": [
      {
       "p": 79,
       "i": 508,
       "raw": "7»",
       "inferred": true
      }
     ],
     "text": "II. In jedem Urtheil worauf beruhet die Wahrheit und Falschheit ? Darauf daß die Erkenntniß mit dem Gegenstande übereinstimme. Gut, aber wie kann ich es sehen, daß meine Erkenntniß mit dem Gegenstande stimmt ? Ich kann den Gegenstand nur vergleichen in so ferne ich ihn kenne. Ich kann den Gegenstand selbst mit meiner Erkenntniß nicht vergleichen, sondern nur die Erkenntniß des Gegenstandes mit der Erkenntniß desselben Gegenstandes, und wenn sie stimmen so sage ich die Erkenntniß ist wahr. Drey Seiten haben clrey Winkel. Hiewieder setzten die Alten die Dialectic, worin sie alle Merkmale der Wahrheit verachten wollten. Sie lautet also: Wenn jemand, den ihr nicht kennet, etwas für wahr ausgiebt, und er berufft sich um seine Aussage zu bestätigen deßhalb auf einen andern, den ihr auch nicht kennet; so ist die Frage ob ich gewiß seyn kann, daß das wahr sey was er aussagt ? Nein ; denn ich kann nur etwas für wahr auf -nehmen, in so ferne es mit dem Gegenstande stimmt. Hier kenn ich aber die Gegenstände oder jene Leute nicht. Eben so ist es mit dem Erkenntniß beschaffen. Die eine Erkenntniß des Gegenstandes, von der ich nicht weiß ob sie wahr ist, berufft sich auf eine andere Erkenntniß des Gegenstandes von der ich auch nicht weiß ob sie wahr sey, und doch wenn sie stimmen, sage ich, daß sie wahr sey. Es ist diese Dialectik kein blosser Einwurf sondern ein Argument, und dienet die eigentliche Natur der Wahrheit zu erkennen. Die Wahrheit ist die Zusammenstimmung der Erkenntnisse vom Gegenstande mit sich selbst. Denn was wir Gegenstände nennen sind nur unsre Erkenntnisse. Haben wir denn allgemeine Regeln der Uebereinstimmung ? Ja und wir wollen sie durchgehen.",
     "dehyphenated": 5,
     "ocrConf": 47
    },
    {
     "id": "philippi-s30-007",
     "kind": "text",
     "aa": 387,
     "aaEnd": 388,
     "pages": [
      {
       "p": 388,
       "i": 803
      }
     ],
     "text": "Alle Urtheile entspringen aus Verstand und Vernunfft. Wenn wir urtheilen wollen was Schein oder Wahrheit ist, so müssen wir es nach den Gesetzen der Vernunfft thun. Die Sinnlichkeit kann hier nichts thun. Das Urtheil welches eine Privatgültigkeit hat zeigt nur das besondere Verhältniß des Gegenstandes zu meinem Subject an; und das ist der Schein. Das Urtheil was allgemeingültig ist, betrifft die Wahrheit. Denn ein Urtheil welches nothwendiger weise vor alle gilt; stimmt mit dem Object überein. Und die Allgemeingültigkeit der Erkenntniß ist es eben was wir suchen ; und durch welche Kraff t der Seele ? Durch den Verstand. Die Sinnlichkeit, die Art wie Mir afficirt werden, zeigt uns nur den Schein; aber der Verstand, wenn er unvermengt mit der Sinnlichkeit urtheilet, zeigt uns die Wahrheit unvermengt mit dem Schein. Der Verstand ist also allein die Krafft das zu finden was allgemeingültig ist, was mit allen Urtheilen stimmt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s30-008",
     "kind": "text",
     "aa": 388,
     "text": "Die Wahrheit ist die Uebereinstimmung der Erkenntniß mit den gemeinen Gesetzen der Vernunft.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s30-009",
     "kind": "text",
     "aa": 388,
     "ms": [
      {
       "p": 80,
       "i": 61,
       "raw": "so",
       "inferred": true
      }
     ],
     "text": "Wenn wir die Wahrheit erkennen sollen; so müssen wir gewisse Merkmale der Wahrheit haben und diese sind",
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-010",
     "kind": "text",
     "aa": 388,
     "text": "1. die Zusammenstimmung mit den obersten Gesetzen des Verstandes überhaupt.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s30-011",
     "kind": "text",
     "aa": 388,
     "text": "2. diejenige nach allgemeinen Gesetzen a posteriori, indem ich beobachte, ob wirklich der menschliche Verstand übereinstimme.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-012",
     "kind": "text",
     "aa": 388,
     "text": "Nach dem erstem sage ich: was nach den allgemeinen Gesetzen des Verstandes wahr ist, gut für jedermann; und nach dem andern: was mit jedermanns Urtheil des Verstandes stimmt, das ist wahr. Also sind zwey Arten die Wahrheit zu erkennen. Der Mathematiker verfährt nach der ersten und sucht alle Sätze mit den gemeinen Regeln der Vernunft einstimmig zu machen. Dann beweist er seinen Satz und trotzt kühn, daß ihm alle Beifall geben müssen. Der Grund daß alle Beifall geben müssen ist die Ueberemstimmung der Erkenntniß mit den Grundgesetzen des Verstandes. Wenn wir sehen würden daß einige zweifeln, so würden wir es auch thun. Wü haben also ein doppelt Merkmal der Wahrheit eines a priori, und das andere a posteriori. Dieses beruhet auf den Grundsätzen: Consentientia vni tertio consentiunt inter se ; und Consentientia inter se consentiunt vni tertio. Den Versuch a posteriori ob ein Satz den man nach allgemeinen Verstandesregeln gemacht haben will, auch bey jedermanns Verstände Beifall finde, kann man nicht entbehren z. E. Die Lehre von den Monaden wird von den Engelländern nicht angenommen. Ist diese Lehre nach den gemeinen Gesetzen des Verstandes, so muß sie auch den Engelländern überzeugend seyn. Also ist die Anwendung eines Vernunfftsatzes a posteriori höchst nöthig. Sie ist die Probe, ob der Satz mit den gemeinen Verstandesgesetzen stimme oder nicht. Sollte ich auch irren, so werden es andre nicht thun und mir dadurch den Irrthum entdecken.",
     "dehyphenated": 3,
     "ocrConf": 47
    },
    {
     "id": "philippi-s30-013",
     "kind": "text",
     "aa": 388,
     "text": "Der Diameter verhält sich zur Peripherie wie 100 zu 314. Weü diesen Satz alle Geometrae annehmen ; so muß er wahr seyn und er ist es auch. Der Beweiß kann durch die Geometrie gegeben werden. Es giebt",
     "ocrConf": 44
    },
    {
     "id": "philippi-s30-014",
     "kind": "text",
     "aa": 388,
     "text": "1. obiective Criteria der Wahrheit, diese sind a priori cognoscibile.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-015",
     "kind": "text",
     "aa": 388,
     "text": "2. Subiective Criteria — diese erkennt man a posteriori.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s30-016",
     "kind": "text",
     "aa": 389,
     "ms": [
      {
       "p": 81,
       "i": 133
      }
     ],
     "text": "Die objcctiven Criteria bestehen in den allgemeinen Gesetzen der Vernunfft, wornach die Uebereinstimmung der Erkenntnisse beurtheilt wird. Die Uebereinstimmung nach den Gesetzen des Verstandes besteht in Sätzen der Identität. Der Widerstreit der Erkenntnisse nach den Gesetzen des Verstandes ist der Satz des Widerspruchs. Das sind die objectiven Criteria der Wahrheit und sie sind es allein; sie sind aber nicht hinreichend d. i. Die Uebereinstimmung der Erkenntnisse des Subjects mit der Erkenntniß andrer, oder die Uebereinstimmung der Erkenntniß des Subjects in einem Zustande, mit derjenigen in einem andern. Nachdem wir alle objective Kennzeichen erfüllet haben ; so sind wir doch noch ungewiß in der Anwendung, ob es denn auch mit den allgemeinen Gesetzen des Subjects übereinstimmt. So macht man es im Rechnen. Allgemeine Merkmale kann man nicht geben in der Anwendung. Wenn ich auch eine Regel der Anwendung gebe, so muß da doch wieder eine Anweisung hinzukommen wie ich diese Regel anwenden soll.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-017",
     "kind": "text",
     "aa": 389,
     "text": "Von der Richtigkeit in der Anwendung giebt es keine allgemeine Regeln. Man kann sie daher aus nichts als aus subjectiven Gründen haben. Die subjectiven Gründe dienen die Ausübung der allgemeinen Regeln zu verificiren. Ich muß Proben anstellen also:",
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-018",
     "kind": "text",
     "aa": 389,
     "text": "I. Ich vergleiche meine Erkenntniß, die ich vom Gegenstande habe, mit der Erkenntniß anderer Gegenstände, die schon für wahr und überzeugend angenommen ist. Dadurch haben wir einen Leitfaden, die allgemeine Regel anzuwenden. Es vergleicht das Subjekt die Urtheile die es gefällt, zu einer andern Zeit in einem andern Zustande. Die Falschheit zu verhüten muß man Zeit brauchen, die Urtheile von einer andern Seite aus einem andern Gesichtspuncte zu unterschiedenen Zeiten betrachten zu können. Es erscheint die Falschheit nicht so gleich. Aus der Uebereilung im Urtheilen kommen die vielen Fehler her. Das macht einen grossen Unterschied in der Anwendung der gemeinen Regeln des Verstandes und der Vernunfft, wenn wir etwas zu unterschiedenen malen aus verschiedenen Gesichtspuncten ansehen: wir werden dadurch öfters Fehler entdecken, die uns anfangs ganz versteckt waren.",
     "dehyphenated": 2,
     "ocrConf": 49
    },
    {
     "id": "philippi-s30-019",
     "kind": "text",
     "aa": 389,
     "aaEnd": 390,
     "pages": [
      {
       "p": 390,
       "i": 329
      }
     ],
     "ms": [
      {
       "p": 82,
       "i": 256,
       "raw": "88",
       "inferred": true
      }
     ],
     "text": "II. Das zweite Criterium ist die Uebereinstimmung der Erkenntniß unsers Subjects mit derjenigen anderer Subjecte. Ueberhaupt ist das wahr, was für jedermann gilt; was nur eine Privatgültigkeit hat ist Schein. Wenn ich nach allgemeinen Regeln im Erkenntniß verfahren habe; so ist noch nothwendig daß ich versuche ob dieses mein Erkenntniß mit anderer Urtheil völlig stimmt. Denn stimmet es nicht; so kann ich versichert seyn, daß meine Erkenntniß nicht mit den allgemeinen Verstandesregeln stimmend abgefasset sey. Die Mathematick selbst muß man auf solche Art prüfen ; und wenn der Mathematiker neu erfundene Sätze beweist, ohne erst zu erfahren ob andere sie auch für wahr annehmen; so entspringt diese Sicherheit und dies Zutrauen aus der Beobachtung, daß jedes Menschen Vernunfft mit der Vernunfft des Mathematikers stimme, und daß die Mathematick den Regeln des gemeinen Verstandes conform sey.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-020",
     "kind": "text",
     "aa": 390,
     "text": "Hieraus folgt, daß die subjectiven Gründe zu der Bestätigung der objectiven hinzukommen müssen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s30-021",
     "kind": "text",
     "aa": 390,
     "text": "Die Allgemeingültigkeit wird zur Wahrheit erfordert.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s30-022",
     "kind": "text",
     "aa": 390,
     "text": "Wir müssen nicht gleichgültig seyn, wenn andere uns nicht Beifall geben. Es ist ein logisch Experiment wenn ich meine Urtheile nach den Köpfen anderer probire. Glaubt einer meinen Sätzen nicht, so kann ich vermuthen, es liege irgendwo darin ein Fehler; weil sie nicht allgemein gültig sind. Der Unterscheidungspunkt der Wahrheit ist der allgemeine Verstand und nicht einzig und allein der meinige.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-023",
     "kind": "text",
     "aa": 390,
     "ms": [
      {
       "p": 83,
       "i": 739
      }
     ],
     "text": "Woher kommt es, daß alle Menschen die dem Nachdenken ergeben, bereit und geneigt sind, ihre Einsichten andern zu comniuniciren ? Ist es die Eitelkeit gelobet zu werden ? Nein, man tadelt ja so gar, wenn ein Gelehrter sein Wissen nicht bekannt macht, und diese Eitelkeit wird man nimmer unterdrücken. Die Ursache ist, der menschliche Verstand findet sich in seinen Einsichten bedürfftig seine Erkenntniß an andern Köpfen zu probiren. Ohne diese Erfahrung traut er sich nicht sie für wahr zu halten. Er ist sich bewust, daß er nicht fähig ist selbst die Fehler einzusehen; darum überläßt er es andern. So ist der menschliche Verstand schon von Natur als theilnehmend zu betrachten. Er hat den Trieb seine Urtheile gegen die Urtheile anderer zu halten, und nicht allein be}?\" den obern Vernunfftsätzen stehen zu bleiben.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s30-024",
     "kind": "text",
     "aa": 390,
     "text": "Einwürfe anderer, oder auch der schlechte Effekt den mein Satz in der Ueberzeugung hat, sollen mich aufmerksam machen. Werden unsern Urtheilen Einwürfe gemacht ; so werden wir unsre eigene Sätze darnach probieren und sie einstimmend zu machen suchen. Sind unsre Sätze nicht überzeugend, so werden wir schon sehen daß es ihnen woran fehlt, wenigstens an der Deutlichkeit, und wir werden sie verbessern.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s30-025",
     "kind": "text",
     "aa": 391,
     "text": "Also muß man seine Urtheile gerne andern zu sichten übergeben. Das gehört zu den ewigen Gesetzen, daß der Mensch die Sätze wovon er spekulirt, andern bekannt zu machen Freiheit habe. Es sey dann wenn man von selbst etwas machen soll; das kann nur eine Privatgültigkeit haben. Ein Mensch auf einer wüsten Insel giebt gewiß alle Spekulation auf.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s30-026",
     "kind": "text",
     "aa": 391,
     "text": "Die Falschheit ist entweder",
     "ocrConf": 38
    },
    {
     "id": "philippi-s30-027",
     "kind": "text",
     "aa": 391,
     "text": "1. materialis oder",
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-028",
     "kind": "text",
     "aa": 391,
     "text": "2. formalis.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s30-029",
     "kind": "text",
     "aa": 391,
     "text": "Die formale Falschheit ist wenn eine Erkenntniß sich selbst widerspricht oder sich nicht paßt.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s30-030",
     "kind": "text",
     "aa": 391,
     "ms": [
      {
       "p": 84,
       "i": 1067
      }
     ],
     "text": "Die materiale Falschheit kommt am häufigsten vor, so daß auch wahre Sätze sie haben können. Wenn man eine gemeine Erkenntniß, die jeder weiß, so vorträgt und angiebt, als wenn sie durch unsern Verstand wäre erfunden worden. Man betrügt sich in der Hofnung. Man hofft eine gelehrte tiefsinnige Antwort zu bekommen, und man bekommt nur das zurück was man schon weiß. Was ist die Ursache der Erzeugung der Pflanzen ? Vis plastica. Hier werde ich betrogen. Es ist eben so als wenn mir jemand einen in Weinstein gesottenen polnischen Kupfergroschen abgiebt, da ich ihm einen ordinairen Groschen gelehnet. Ich bekomme das Meine zurück, werde aber in meiner Hofnung betrogen. Ich frage den Gelehrten und er giebt mir das, was ich frug, umkleidet zurück. In Erklärungen der Ursachen und in Auflösungen der Problemen giebt es so viel Wortkrärnerey und Tavtologien, daß man erstaunen muß. Wie mache ich eine Definition, die mir alles vorlegt, in der sich alles wie in einer Quintessenz vereinigt. ? Suchet soviel Merkmale bis sie zusammengenommen den ganzen Begriff ausmachen. Das frug ich ja.",
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-031",
     "kind": "text",
     "aa": 391,
     "text": "Man nehme sich für solche Tavtologien in Acht. Der Anfang der Weißheit ist Stultitia caruisse.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s30-032",
     "kind": "text",
     "aa": 391,
     "text": "Kerne Wissenschafft ist so voll von Tavtologien als die Moral. Die größten Männer haben diesen Fehler. Willst du tugendhaft seyn, so zähme deine Affecten. Aber wie mache ich es daß ich meinen Geschmack ändere und die Affekten zähme. Eben so ist es als wenn ein Uhrmacher seinem Burschen der ihn fragt \\\\ ie man Uhren machen soll antwortet; du mußt machen daß die Räder ineinander mit den Zähnen greifen.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s30-033",
     "kind": "text",
     "aa": 392,
     "text": "Die vielen Tavtologien in der Moral kommen daher, weil wir den Gesetzen der Tugend und Moral sogleich Beifall geben, sie gleich einräumen, wenn der Philosoph sie uns auch nur halb und unbewiesen sagt.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s30-034",
     "kind": "text",
     "aa": 392,
     "text": "Man muß auf die Falschheit der Form Acht geben wenn gleich die Sätze wahr sind.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s30-035",
     "kind": "text",
     "aa": 392,
     "text": "Wenn jemand das Daseyn Gottes oder einen moralischen Satz beweist, so ist schon jeder Mensch geneigt ihm, wenn er auch schlecht beweist, Beifall zu geben und ihm den Beweiß gleichsam zu schenken.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s30-036",
     "kind": "text",
     "aa": 392,
     "text": "Das Zweifeln an der Form der Erkenntniß ist unterschieden von dem Zweifel an der Materie, und die Falschheit der Form kann und muß nicht angesehen werden als die Falschheit der Materie. Es giebt einige Wissenschaften, die über den gemeinen Verstand erhoben sind ; aber es giebt andere wo der Philosoph mit dem gemeinen Verstände es beweisen kann und wo seine wissenschaftliche Gründe sehr gebrechlich sind; doch wählet er die letzten um das Ansehen zu haben, als wenn er die Sache ganz anders als der gemeine Verstand einsehe.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s30-037",
     "kind": "text",
     "aa": 392,
     "text": "Die Merkmale und Unterscheidungsgründe des Wahren und Falschen. Eine Erkenntniß ist falsch wenn sie sich selbst wiederspricht. Ist sie auch falsch wenn sie andern Erkenntnissen wiederspricht ? Ja wenn sie den wahren wieder spricht, so ist sie falsch, aber das kann nicht das oberste Merkmal des Falschen seyn, weil ich hier voraussetze, daß ich schon ein Merkmal des Wahren und Falschen habe.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s30-038",
     "kind": "text",
     "aa": 392,
     "ms": [
      {
       "p": 85,
       "i": 0
      }
     ],
     "text": "Die Materie ist sehr subtil. Indessen wollen wir es annehmen. Was z. B. den Grundsätzen der Erfahrung wiederspricht, das ist falsch.",
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s31",
   "title": "§96",
   "titleSrc": "heading",
   "headings": [
    "§96"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s31-001",
     "kind": "heading",
     "aa": 392,
     "text": "§96"
    },
    {
     "id": "philippi-s31-002",
     "kind": "text",
     "aa": 392,
     "text": "Wenn alle Folgen einer Erkenntniß wahr sind, so ist die Erkenntniß selbst wahr. Wenn aber nur eine einzige Folge falsch ist, so ist die Erkenntniß falsch. Wenn viele Folgen einer Erkenntniß wahr sind, so ist sie wahrscheinlich ; aber alle Folgen einzusehen ist sehr schwer. Aus der Wahrheit der Folgen läßt sich die Wahrheit der Erkenntniß nur schliessen durch die Approximation; aber eine logische Evidenz hat sie nicht. So ist das Kopernikamsche System und alle anderen Hypothesen deren Richtigkeit man aus der Menge der wahren Folgen schließt.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s31-003",
     "kind": "text",
     "aa": 393,
     "text": "Viele physikalische Lehrsätze haben lange gegolten, weil alle Folgen die man kannte, wahr waren, bis ein einziges Experiment sie wiederlegte.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s31-004",
     "kind": "text",
     "aa": 393,
     "text": "Dies sind die 2 Wege a posteriori aus der Wahrheit oder Falschheit der Folgen auf diejenige der Gründe zu schliessen. Die Wahrheit zu erkennen muß man die Falschheit austreiben. Wenn wir aus der Wahrheit der Folgen auf diejenige der Erkenntniß schliessen wollen; so ist das schwer, denn wir müssen als denn alle Folgen wissen. Gesetzt vorjetzt sind alle mir be wüste Folgen wahr, so ist die Erkenntniß doch noch nicht vollkommen gewiß, nach der Strenge der logischen Form. Der BeAveiß und Schluß heißt apagogisch, wo ich aus den Folgen der Erkenntniß auf die Wahrheit derselben schließe. Ich nehme das Gegenteil und wiederlege es indem ich mir eine einzige falsche Folge aufsuche, so ist mein gegenteiliger Satz bewiesen. Diese apagogische Beweisart ist in der Mathematick gebräuchlich und sehr evident. Es ist was besonderes, daß wir mehr Ueberzeugung haben das Falsche einzusehen als die Wahrheit. Den Widerstreit nehmen wir in der ganzen Natur eher wahr als die Wahrheit. Es wird dadurch gleichsam ein Hiatus und eine Lücke in der Ordnung der Dinge. Daher zieht man die apagogischen Beweise den directen vor.",
     "dehyphenated": 5,
     "ocrConf": 45
    },
    {
     "id": "philippi-s31-005",
     "kind": "text",
     "aa": 393,
     "ms": [
      {
       "p": 86,
       "i": 274
      }
     ],
     "text": "Da die logische Vollkommenheit in der Uebereinstimmung der Erkenntnisse mit dem Gegenstande, die aesthetische aber in der Uebereinstimmung der Erkenntniß mit dem Subject bestehet ; so ist die Wahrheit die wesentliche Vollkommenheit und die nothwendige wesentliche Bedingung unter welcher eine Erkenntniß vollkommen seyn kann. In der Wahrheit hat man zu sehen",
     "ocrConf": 46
    },
    {
     "id": "philippi-s31-006",
     "kind": "text",
     "aa": 393,
     "text": "1. auf die Uebereinstimmung der Erkenntniß mit dem Gegenstande",
     "ocrConf": 43
    },
    {
     "id": "philippi-s31-007",
     "kind": "text",
     "aa": 393,
     "text": "2. auf die Mittel dazu zu gelangen ; dahin gehört die Deutlichkeit etc. etc.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s31-008",
     "kind": "text",
     "aa": 393,
     "aaEnd": 394,
     "pages": [
      {
       "p": 394,
       "i": 666
      }
     ],
     "text": "Wenn der Grad der Wahrheit gesucht -\\\\ ird, der mit den subjectiven Gesetzen compatible ist; so ist der zwar nicht gemäß der Erf orderung des Verstandes aber gemäß der Erforderung des Witzes. Das ist die aesthetische Wahrheit, die Wahrheit nach Gesetzen der Sinnlichkeit z. B. wenn der Himmel als eine blaue Decke, Gott als ein majestätischer Monarch vorgestellet wird ; so ist das aesthetisch wahr, aber nicht logisch. Jedoch auch die aesthetische Wahrheit muß der logischen gemäß seyn. Die Unwahrheit vertilgt allen Reiz. Man sieht es an falschen Gleichnissen. In Dichtern findet man solche aesthetische Wahrheit und man muß sie auch darnach beurtheilen. Hallern, Lukrez muß man also nicht sowol logisch, als aesthetisch beurtheilen. Der Poet drückt allgemein aus was häufig ist. Er drückt sich hardi aus. Die Peinlichkeit sich einzuschränken auf einen besondern Satz schicket sich nicht für den Geschmack. Was jedermann für wahr hält, ist wahr nach den aesthetischen Regeln. In diesen ist nichts beständiges. Sie wechseln und richten sich nach den Urtheilen der Menschen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s31-009",
     "kind": "text",
     "aa": 394,
     "text": "Objectiv ist jede Erkenntniß entweder falsch oder nicht; es giebt kein drittes. Aber die subjective Erkenntniß kann entweder wahr oder falsch, oder weder wahr noch falsch seyn. Sie kann weder gewisse Merkmale der Wahrheit noch der Falschheit haben d. i. ungegründet seyn. Eine Erkenntniß die unsicher oder ungegründet ist nach logischen Gesetzen kann gegründet genug seyn nach praktischen Gesetzen. D. i. sie kann fähig seyn den Menschen so zu lenken, als wenn sie wahr wäre",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s31-010",
     "kind": "text",
     "aa": 394,
     "text": "§ 100",
     "ocrConf": 16
    },
    {
     "id": "philippi-s31-011",
     "kind": "text",
     "aa": 394,
     "text": "Der Autor redet von der totalen Wahrheit und Falschheit.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s31-012",
     "kind": "text",
     "aa": 394,
     "ms": [
      {
       "p": 87,
       "i": 398
      }
     ],
     "text": "Alle unsre Erkenntnisse sind entweder ganz wahr oder zum Theil wahr, oder ganz falsch oder zum Theil falsch. Eine Erkenntniß kann lauter Wahrheit enthalten, aber ich habe die Erkenntniß nicht komplet, es fehlet noch etwas daran. Dann muß ich nicht sagen, daß sie praktisch wahr se}^ z. B. wenn ich die Quadratwurzel von 2 ausziehe: da mag ich approximiren so lang ich will; ich bekomme sie niemals ganz heraus, es fehlt noch immer was daran. Indessen ist das was ich herausbekomme wahr. So ist es auch mit dem Verhältniß des Diameters zur Peripherie beschaffen. Es ist darin nichts falsches, aber es fehlen noch immer einige Theilchen daran. Indessen ist der Unterschied für nichts zu achten. Der Mond ist 59 l Erddiameter von der Erde entfernet. Es fehlet noch etwas daran. Was weniger mit der Wahrheit gedacht wird als die totale Wahrheit, ist wahr: was mehr über die totale Wahrheit der Erkenntniß gedacht wird ist falsch. Wenn ich die wahre Erkenntniß nicht ganz sondern nur einen Theil davon gebe; so ist das keine Falschheit, die den übrigen Erkenntnissen wiederspricht, sondern ein Mangel oder ein fehlendes Stück der abgemessenen wahren Erkenntniß.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s31-013",
     "kind": "text",
     "aa": 394,
     "aaEnd": 395,
     "pages": [
      {
       "p": 395,
       "i": 272
      }
     ],
     "text": "Wir kommen jetzt auf die totale Falschheit und da fragen wir billig: Kann jemals ein menschliches Urtheil gänzlich falsch seyn ? Nein. Denn nur der Verstand urtheilt selbst dann wenn er falsch urtheilt. Die Falschheit entsteht aus der Geschäfftigkeit der Sinnlichkeit und anderer Erkenntnißkräffte die sich mit dem Verstände der da urtheilt begatten und in seine Urtheile mischen. Wäre es möglich daß die Sinnlichkeit bißweilen urtheilen könnte, so wären auch total falsche Urtheile möglich aber jetzt da an dem Menschen nichts urtheilen kann als ein und derselbe Verstand ; so sind alle Urtheile zum Theil wahr. Es ist kein Urtheil was nicht particular wahr Aväre. Es muß immer ein Grund da seyn warum der Verstand so geurtheilt. Z. E. Einer sagte es wären viel Götter. Es ist falsch aber doch nicht ganz falsch. Es ist doch ein Gott; und wenn jemand sagte: es sey kein Gott: so muß man es in der Verbindung betrachten. Das Urtheil ist falsch aber in der Form kann es zum Theil wahr seyn und Scheingründe haben. Er kann niemals seinem Verstände etwas weiß machen. Weil ihm nicht sinnliche Beweise können gegeben werden, die allen seinen Einwürfen ein Genüge leisten, oder auch weil er in denen die er kennt nicht genügsame Evidenz findet; so fängt er an zu zweifeln, hernach zu verneinen: aber beweisen wird ers niemals daß ein Gott nicht sey.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s31-014",
     "kind": "text",
     "aa": 395,
     "text": "Nehmen wir an, daß der Mensch ganz falsch urtheilt, so gehet der Verstand ganz von seinen Gesetzen ab. So könnten wir niemals dem Verstand was zutrauen und uns auf ihn berufen. In jedem Fall wo Irrthum ist, geschieht was besonderes und ausserordentliches. Nehmen wir an, daß ein dichterer Körper als die Lufft ist in die Lufft steigen kann ; so sind wir in unserer ganzen Physick ungewiß. So würde es in aller Erkenntniß gehen wenn wir annehmen der Verstand könne von seinen Gesetzen abweichen.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s31-015",
     "kind": "text",
     "aa": 395,
     "ms": [
      {
       "p": 88,
       "i": 0,
       "raw": "s",
       "inferred": true
      }
     ],
     "text": "Ich wiederhole kürzlich :",
     "ocrConf": 33
    },
    {
     "id": "philippi-s31-016",
     "kind": "text",
     "aa": 395,
     "text": "Ganz wahr ist eine Erkenntniß wenn nichts falsches darin ist.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s31-017",
     "kind": "text",
     "aa": 395,
     "text": "Zum Theil wahr 1. wenn nicht alle Wahrheit der Quaestion darin anzutreffen ist z. B. Wer die Höhe eines Berges mißt und sagt der Berg kann nicht unter 100 Ruthen seyn. Seine Aussage ist wahr aber nicht nach der ganzen Quaestion. So sind auch die arithmetische und geometrische Approximationen.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s31-018",
     "kind": "text",
     "aa": 395,
     "text": "2. weil Falschheit darin anzutreffen ist.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s31-019",
     "kind": "text",
     "aa": 395,
     "text": "Bey der erstem Art der zum Theil wahren Erkenntnisse ist nichts falsches sondern nur ein Defectus der erforderlichen Quantität Wahrheit; bey der andern Art ist was wireklich falsches. Jedes Urtheil ist eine Handlung des Verstandes ; also ist es unmöglich, daß ein Urtheil nicht nach den Gesetzen des Verstandes geschehen sollte.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s31-020",
     "kind": "text",
     "aa": 395,
     "aaEnd": 396,
     "pages": [
      {
       "p": 396,
       "i": 133
      }
     ],
     "text": "Irrthum ist eine gemischte Wirkung des Verstandes und der Sinnlichkeit. Wäre keine Sinnlichkeit ; so würde der Verstand nicht irren. Keine menschliche Kraff t und also auch der Verstand nicht kann von seinen Gesetzen abweichen; sonst würde sie nicht handeln Ganz falsch kann kein Urtheil, kann gar nichts seyn. Denn der Verstand hat geurtheilt oder gewirkt und doch nicht nach seinen Gesetzen gewirkt, d. i. er hat gar nicht gewirkt. Wenn wir also wissen daß kein Urtheil ganz falsch seyn kann; so müssen wir das Gold der Wahrheit unter dem Auskehricht des Falschen hervorspähen und absondern, und nicht beides zugleich wegwerfen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s31-021",
     "kind": "text",
     "aa": 396,
     "text": "Dadurch ist das Wachsthum der Wahrheit sehr gehindert, daß man die Wahrheit die in Irrthümern vermengt war zusammen herauswarf. Der theilnehmende Verstand ist auch im logischen nothwendig, der da glaubt, daß das Criterium der Wahrheit und Falschheit nicht durch den besondern (priuat) Verstand sondern durch den allgemeinen Verstand entschieden und bestimmet werde.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s31-022",
     "kind": "text",
     "aa": 396,
     "ms": [
      {
       "p": 89,
       "i": 527,
       "raw": "h»",
       "inferred": true
      }
     ],
     "text": "Wenn einer dem Urtheil eines andern wiederspricht; so soll dieser ihm nicht so gleich wiedersprechen : sie sollen nicht beide nur auf ihre Gründe sehen und streiten; sie können alle beide Recht haben, denn keiner hat von beiden ganz falsch geurtheilt. Daher soll man sich in den Standpunct des andern versetzen und den Satz aus dem Gesichtspuncte besehen, aus dem ihn ein anderer betrachtet. Wenn also jemand mir wiederspricht, so werde ich mich in seine Stellung versetzen und nicht mehr auf meinen Satz trozen. Denn wenn ein anderer glaubt daß ich irre, so muß ich auch daran ungewiß seyn und zweifeln. Wenn der Mensch im Urtheil der Sinne anderer Urtheil gemeinschafftlich wider sich sieht, so zweifelt er selbst an seinen Sinnen. Z. E. Wenn eine Menge Leute ein Nordlicht anschaut, und ich komme auch dazu kann aber nichts gewahr werden; so werde ich eher an meinem Gesicht zweifeln als dem Urtheil so vieler mich widersetzen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s31-023",
     "kind": "text",
     "aa": 396,
     "text": "Aller Widerstreit ist ein Phänomenon. WTenn ich gewahr werde, daß ein Urtheil eines andern dem meinigen widerspricht, so muß ich auf den Grund sehen wie das zugehet daß Menschen die sich alle nach allgemeinen Gesetzen des Verstandes richten, sich wiedersprechen.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s31-024",
     "kind": "text",
     "aa": 396,
     "aaEnd": 397,
     "pages": [
      {
       "p": 397,
       "i": 470
      }
     ],
     "text": "Ich muß mich hier nicht nach meinem Urtheil richten, denn die Wahrheit wird nicht durch ein Privaturtheil entschieden. Dazu gehört viel Scharfsinnigkeit sich in die Stelle eines andern zu setzen. Geräth man also mit jemanden in einen Disput, so gebe man dem der sich unsern Urtheilen widersetzt zu; dadurch macht man ihn geneigt, und man setzt sich in den Stand mit gemeinschaftlicher Kraff t die Wahrheit zu suchen. Das ist wirklich das einzige logische Mittel die Wahrheit zu suchen, daß man mit anderer Urtheile sein Urtheil zusammenhalte und dann einstimmig mache. Für ganz falsch muß man eines andern Urtheil niemals halten. Gelehrte die miteinander disputiren und sich bisweilen widersprechen thun es nicht in der Absicht das Urtheil des andern zu vernichten und ihres zu erheben, sondern beide wollen ihren Verstand einstimmend machen. Wenn jemand glaubt, der andere habe ganz unrecht warum disputirt er dann mit ihm ? Der ist wahnwitzig, der mit Wahnwitzigen vernünfftelt. Die Beurtheilung der Schrifft, indem man sich in den Standpunct des Verfassers stellt, den Grad der Wahrheit der da ist, von der Falschheit absondert und die Wahrheit zu vermehren sucht. Das ist die logische und moralische Pflicht und das hat Nutzen. Auf die Art kann man Schrifften mit Nutzen lesen. Abgesonderte Erkenntnisse können ganz wahr seyn z. E. in der höhern Geometrie. Aber Systemata z. E. philosophica sind gar nicht ganz wahr. Ein schwer Buch, ein schwer Uebel; und da setzt es Mühe das Wahre auszusichten.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "philippi-s31-025",
     "kind": "text",
     "aa": 397,
     "ms": [
      {
       "p": 90,
       "i": 354,
       "raw": "»o",
       "inferred": true
      }
     ],
     "text": "Philosophische Sachen muß man immer verbessern. Wolf schrieb zuviel. Crusius ist so eigensinnig dasjenige was er in der Jugend geschrieben nicht verbessern zu wollen. 0 wir irren ja alle, und ist es nicht lobenswürdiger wenn man nach erlangten bessern Einsichten seine Meinung ändert und verbessert. Die Resignation auf seine eigene Ehre ist ein grosser Probierstein eines Wahrheitliebenden.",
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s32",
   "title": "Von der Genauigkeit der Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Von der Genauigkeit der Erkenntniß."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s32-001",
     "kind": "heading",
     "aa": 397,
     "text": "Von der Genauigkeit der Erkenntniß."
    },
    {
     "id": "philippi-s32-002",
     "kind": "text",
     "aa": 397,
     "text": "Genau ist eine Erkenntniß, in so ferne der Grad der Wahrheit hinreichend ist zum Zweck. Wenn gleich nicht alles wahre was zum Objeet erfordert wird in einer Erkenntniß ist; so kann doch in derselben so viel Wahres daseyn als zum Zweck erfordert wird. So kann z. B. der Mensch eine genaue Erkenntniß von seinen Pflichten haben; obgleich in derselben nicht alles angetroffen wird was von den rnoralischen Sätzen erfordert Avürde. Eine Abmessung des Landguts ist genau, wenn auch eüie Ruthe fehlte.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s32-003",
     "kind": "text",
     "aa": 397,
     "text": "Die Holländer sind in Abzeichnung der Festungswerke zu skrupulös. Sie gehen bis auf Cubiczolle, da eine solche Accuratesse gar nicht zum Zwecke gehört.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s32-004",
     "kind": "text",
     "aa": 397,
     "text": "Erkenntnisse können comparatiue genau seyn. Eine Erkenntniß heißt vornehmlich genau in Ansehung des Grades der Wahrheit.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s32-005",
     "kind": "text",
     "aa": 398,
     "text": "Die Genauigkeit ist der Unrichtigkeit entgegengesetzt. Unrichtig ist eine Erkenntniß nicht in so ferne nicht ahe Richtigkeit da ist, sondern in so ferne sie Unwahrheit enthält.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s32-006",
     "kind": "text",
     "aa": 398,
     "text": "In vielen Fällen müssen wir mit dem prope vero zufrieden sejn, wovon Hanau Professor in Danzig geschrieben.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s32-007",
     "kind": "text",
     "aa": 398,
     "text": "Die grobe Erkenntniß wird der feinen, nicht der genauen entgegengesetzt. Genauigkeit betrifft die Richtigkeit, den zum Zweck erforderlichen Grad der Wahrheit: aber Grobheit betrifft nicht das Object, die Wahrheit, sondern die Form. Eine Erkenntniß ist grob in so ferne sie sehr sinnlich ist. Was die Sinne uns lehren, das wird sehr gemächlich gefaßt. Je mehr eine Erkenntniß Vernunfftwahrheiten enthält, desto feiner ist sie. Der gemeine Mann hat grobe Erkenntniß von Gott und göttlichen Dingen. Grobe oder sinnliche Erkenntnisse können doch nützlich und auch wahr seyn. Sinnliche Erkenntnisse können wahr seyn quoad materiam und grob quoad formam. Eben dadurch daß Erkenntnisse grob sind, sind sie anschauend und eindrückend aber leer von allen Verstandesbegriffen.",
     "dehyphenated": 2,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s33",
   "title": "§104",
   "titleSrc": "heading",
   "headings": [
    "§104"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s33-001",
     "kind": "heading",
     "aa": 398,
     "text": "§104"
    },
    {
     "id": "philippi-s33-002",
     "kind": "text",
     "aa": 398,
     "aaEnd": 399,
     "pages": [
      {
       "p": 399,
       "i": 1253
      }
     ],
     "ms": [
      {
       "p": 91,
       "i": 123
      }
     ],
     "text": "Dogmatische und historische Wahrheiten werden unterschieden. [Wir verstehen hier unter den Wahrheiten mit dem Autore wahre Erkenntnisse.] Erkenntnisse, in so ferne sie nicht durch den Verstand und die Vernunfft und nicht nach dessen Gesetzen in uns entspringen sind historisch z. B. Naturbeschreibung, Geographie und die Philosophie selbst kann historisch erkannt werden, wenn man nicht nach den Gesetzen des Verstandes verfährt. Wir betrachten hier die Historie nach der Materie d. i. nach dem Object und nicht nach der Form oder nach dem modo cognoscendi. Historische Erkenntnisse unterscheiden sich von den intellectualen nur durch die Form. Sokrates sagte deßwegen er sey nur obstetrix auditorum suorum. Historische Erkenntnisse aber sind von dogmatischen der Materie nach unterschieden. Die dogmatische Erkenntniß der Wahrheit hat zum Gegenstande die allgemeine Beschaffenheiten der Dinge, die historische Wahrheit hat zum Object actualia quae sunt obiecta sensuum. Jede Begebenheit ist historisch: alle Sätze sind dogmatisch. Die theoretische Physik ist dogmatisch; die Beschreibung der Naturbegebenheiten historisch. Dogmatisch wird hier dem historischen contradistinguirt, sonst wird es auch dem skeptischen entgegengesetzt. Da bedeutet eine dogmatische Erkenntniß eine allgemeine entscheidende, und eine skeptische hingegen eine allgemeine Erkenntniß die problematisch ist. Dogma heißt jede allgemeine Vernunffterkenntniß. Dogmatisch urtheilen ist entscheidend urtheilen; problematisch urtheilen heißt da man Aufgaben giebt. Dogmatische Sätze sind in der Moral, Religion etc. etc. Metaphysik, als das Organon der reinen Vernunffterkenntnisse, und Logik als das Organon der Erkenntnisse überhaupt, sollen nicht dogmatische Wahrheiten enthalten . Der gröste Streit unter den Alten war der, wegen der dogmatischen Sätze, theils was sie sind, theils ob sie gewiß sind. Die alte platonische Schule focht für die Gewißheit der Dogmatum; die neuern Academici behaupteten, Dogmata haben keine Gewißheit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "philippi-s33-003",
     "kind": "text",
     "aa": 399,
     "aaEnd": 400,
     "pages": [
      {
       "p": 400,
       "i": 1789
      }
     ],
     "ms": [
      {
       "p": 92,
       "i": 539,
       "raw": "n",
       "inferred": true
      },
      {
       "p": 93,
       "i": 2497
      }
     ],
     "text": "Der Autor nennt ein Lehrgebäude, System eine Menge zusammenhängender dogmatischer Sätze; aber es giebt auch andere Systeme, die nicht aus Dogmatibus bestehen. Denn alle Systeme der Erkenntniß sind entweder rational oder historisch. Hübners Geographie ist das erste geographische System. Wolf hat das erste vollständige mathematische System gemacht. Ein dogmatisch System ist also eine Verbindung verschiedener Vernunfft Wahrheiten die zusammenhängen mit einem Grunde. So giebt es Lehrgebäude der Philosophie, der Moral, des Einflusses der Seele in den Körper etc. etc. Ausser den dogmatischen Sj'stemen aber giebt es noch andere. Es fragt sich : sind Systeme in philosophischen Erkenntnissen nothwendig ? Maupertuis, ein Autor, sagt es sey eine Raserey Systemata zu suchen. Denn ein solcher künstelt, alles aus einem Grunde zu leiten, und siehet hernach nicht die Natur, sondern sein Hirngespinst an. Und wenn er gleich hernach noch so viele falsche Folgen sieht, so wül er doch sein mühsam erbautes System nicht umstossen. Allein wenn gleich Lehrgebäude auf die Art schaden, so sind sie doch zur Deutlichkeit und richtigen Einsicht in den Zusammenhang der Wahrheiten dienlich. Wer da glaubt Wahrheiten einzeln erkennen zu können, der betrügt sich. Bey einem Lehrgebäude muß ich vom Ganzen anfangen, vom Hauptbegrif, mit welchem die Verbreitung der Erkenntniß zusammenhängt, und nicht von den Theilen. Z. E. In der Geographie läufft alles hinaus den Globum zu erkennen. Der Plan zum Ganzen muß vorher entworfen werden; hernach kann man ihn ausfüllen mit den Theilen. Der Mensch strebt von Natur nach Lehrgebäuden. Das Ideal oder Ganze geht vorher, und nur im Ganzen lassen sich die Theile denken. Die Encyklopedien sind solche Systeme oder Abrisse, woraus wir lernen, wie die Erkenntnisse zusammenhängen und wie sie sich unterstützen ein Ganzes zu machen. Wenn jemand hätte gewust den Umkreiß und Abriß der Metaphysik zu zeichnen; so wäre sie schon sehr vollkommen. Aber daran hat es gefehlt; man hat sie nicht ganz übersehen. Die S3^steme sind nichts verächtliches. Aber nicht jeder Bau, nicht jede Zusammenhäufung da ein Autor von particulairen Sätzen die ihm glänzend scheinen anfängt und dann mit Unterdrückung aller Zweifel die ihm aufsteigen, um nicht vergebens gearbeitet zu haben, fortfähret und ein Ganzes zusammenklebt; nicht ein jedes solches Flickwerk ist ein System. Das ist nicht der Weg zu Ideen. Der Plan muß von einer aparten Hauptidee herkommen nicht von den Theilen. Es bleiben zwar alsdenn Lücken und leere Fächer, aber das schadet nicht. Es scheinet als wenn es jetzt Systeme von fast allen Wissenschaften gebe, allem die Lehrgebäude fehlen noch sehr welche nur bloß die Methode enthalten, wie man die Wahrheit erfinden und prüfen kann, Und das ist es was am nothwendigsten wäre.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s34",
   "title": "§106",
   "titleSrc": "heading",
   "headings": [
    "§106"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s34-001",
     "kind": "heading",
     "aa": 400,
     "text": "§106"
    },
    {
     "id": "philippi-s34-002",
     "kind": "text",
     "aa": 400,
     "text": "Der Autor unterscheidet die aesthetische Wahrheit von der logischen. Es ist etwas aesthetisch wahr und doch nicht logisch wahr, wenn es nemlich wahr ist in der Erscheinung.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s34-003",
     "kind": "text",
     "aa": 400,
     "text": "Die Sonne taucht sich in den Ocean, ist wahr nach Gesetzen der Sinnlichkeit, aber nicht logisch, nicht objectiv. Nach aesthetischen Regeln ist das allgemein, was man nur in vielen sieht. Nach der Aesthetik ist das nicht wahr, was entfernt von der Sinnlichkeit ist.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s34-004",
     "kind": "text",
     "aa": 400,
     "aaEnd": 401,
     "pages": [
      {
       "p": 401,
       "i": 950
      }
     ],
     "text": "Es ist etwas logisch wahr und doch nicht aesthetisch. Besonders ist zu merken, daß es Schönheiten giebt, die grösser sind als die Natur sie giebt, so daß man sich ein Objekt in allerley Art so vollkommen denken kann, als es niemals in der Natur ist und vielleicht auch nicht seyn kann. Diese Schönheiten entstehen also eben dadurch, daß man vom logisch wahren abweicht. Der Maler Michel Angelo und Raphael geben die Knochen wellenförmig an mit sanfften Biegungen; da doch die Knochen spitzig seyn müssen. Solches sind ideale Schönheiten und das Ideale wird nicht nach der Wahrheit gezeichnet, sondern nach Geschmack. Der Geschmack gehet auf Gemächlichkeit ; und richtet sich nicht nach den Folgen, die darauf geschehen werden. Die Schönheiten der Natur sind mit der wesentlichen Nutzbarkeit verbunden und sehen auf den Zweck. Der Geschmack, wenn er das Ideale zeichnet sieht nicht auf die Nutzbarkeit, nicht auf den Zweck. Das Bild des Apollo zu Rom ist wider die Natur gezeichnet, die auf den Zweck und Nutzen der Körper siehet, aber es ist vollkommen nach Geschmack gezeichnet.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s34-005",
     "kind": "text",
     "aa": 401,
     "ms": [
      {
       "p": 94,
       "i": 299
      }
     ],
     "text": "So wie die Sache wirklich ist, so scheint sie am allerbesten zu seyn. Unser Geschmack ist nach den Gegenständen gebildet und nimmt sie zu Mustern an. Nihil materiale est in intellectu quod non antea fuerat in sensu sagt Aristotel. Allein wenn nun Geschmackskünstler schon alle Bedingungen der Natur angebracht haben, so schweifen sie aus mit ihrer Einbildungskrafft. Was die Ausschweifung der Einbildungskraft befördert ist schön. So bat Hogarth bemerkt, daß Apollo in Rom deßwegen solche Bewunderung erregt, weil er lange Beine hat. Der Künstler hat glücklich gewagt über die Natur zu gehen.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s35",
   "title": "§109 Vom Irrthum.",
   "titleSrc": "heading",
   "headings": [
    "§109",
    "Vom Irrthum."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s35-001",
     "kind": "heading",
     "aa": 401,
     "text": "§109 Vom Irrthum."
    },
    {
     "id": "philippi-s35-002",
     "kind": "text",
     "aa": 401,
     "text": "Daß etwas falsch sey ist nichts als eine Vermengung d. i. daß das Urtheil dem Gegenstande widerspricht. Allein der Schein der falschen Eikcnntniß, vermittelst dessen sie der Wahrheit ähnlich ist und leicht verwechselt wird ist Irrthum. Es ist ein Analogon der Wahrheit. Der menschliche Verstand kann offt falsche Erkenntnisse für wahr halten und das ist ein irriges Urtheil.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s35-003",
     "kind": "text",
     "aa": 401,
     "text": "Wir wollen hier betrachten",
     "ocrConf": 46
    },
    {
     "id": "philippi-s35-004",
     "kind": "text",
     "aa": 401,
     "text": "1. wie ein Irrthum möglich ist.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s35-005",
     "kind": "text",
     "aa": 401,
     "text": "2. wie er wirklich entspringt und",
     "ocrConf": 24
    },
    {
     "id": "philippi-s35-006",
     "kind": "text",
     "aa": 401,
     "text": "3. wie er verhütet wird.",
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s36",
   "title": "1. Bet rachtung.",
   "titleSrc": "heading",
   "headings": [
    "1. Bet rachtung."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s36-001",
     "kind": "heading",
     "aa": 401,
     "text": "1. Bet rachtung."
    },
    {
     "id": "philippi-s36-002",
     "kind": "text",
     "aa": 401,
     "text": "Jede Kraft in der Natur wirkt nach eigenen Gesetzen. Es ist kerne Substanz deren Wirkung nicht gemäß wäre ihrer Krafft. Es ist widersprechend daß die Wirkung sollte widerstreiten den Gesetzen einer wirkenden Krafft, sonst kann sie ja nicht entspringen. Wenn nun der Verstand handelt und selbst niemals von seinen Gesetzen abweicht: so weicht er gar nicht ab und ein irriges Urtheil ist doch dasjenige was von den Gesetzen des Verstandes abweicht.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s36-003",
     "kind": "text",
     "aa": 401,
     "aaEnd": 402,
     "pages": [
      {
       "p": 402,
       "i": 329
      }
     ],
     "ms": [
      {
       "p": 95,
       "i": 348,
       "raw": "93",
       "inferred": true
      }
     ],
     "text": "Es entspringt der Irrthum nicht aus dem Verstände, der Verstand wenn er allein urtheilt kann nicht irren. Wenn er irrt, so muß er sich gepaart haben mit irgend einer andern unterschiedenen Kraft und dadurch ein solch Produkt hervorgebracht haben. Ausser dem Verstände hat die Seele noch andere thätige Kniffte. Unsere Einbildung verbindet bald mit der Vorstellung die damit verwandten Bilder z. E. bey der Vorstellung der Tugend bringt die Einbildungskraft die Ehre und was sonst die Tugend begleitet mit hervor. Sie wirkt rastloß. sie betäubet den Verstand und giebt ihm allerhand eigene Werke die er nicht haben will. Dadurch bringt der Verstand ein Produkt hervor was von seinen eigenen Regeln abgeht: aber nicht er, der Verstand geht davon ab, sondern ist nur von der Aehnlichkeit betrogen Z.E. die Gestalt und Figur ist nur in der Anschauung ; die Imagination stellt uns bey Gott einen Greis vor. Der Verstand wird ein Spiel der Einbildungskrafft und sie verbindet dann Begriffe nach ihren Gesetzen der Sinnlichkeit, die den Verstandesgesetzen just entgegen sind. Der Witz handelt nach andern Regeln als der Verstand. Eine Sache wird durch den Witz unter einen Begrif gebracht, die doch nur eine Aehnlichkeit mit ihm hat. Die Aehnlichkeit muß uns zum Erfinden leiten. Der Witz giebt uns Materialien dar.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s36-004",
     "kind": "text",
     "aa": 402,
     "text": "Die Neigung und Abneigung schalten mit Begriffen nach Partheilichkeit, nicht wie der kalte Verstand sie paaret nach seinen Gesetzen ; sondern nach dem Gefühl des Angenehmen und Unangenehmen paaren sie die Begriffe. Also der Irrthum entspringet nicht aus dem Verstände ; denn er kann nicht von seinen Gesetzen abgehen. Die Wahrheit ist die Uebereinstimmung der Erkenntniß mit den Gesetzen des Verstandes. Die Körper fallen nach den legibus lapsus gravitatis die Galilaeus im lufftleeren Raum gefunden. Ein Regentropfen fällt also fast immer gleich ; so viel die Schwere ihn herabdrückt so viel widersteht die Luft. Es weicht also kein Körper von selbst ab von seinen Gesetzen, sondern durch die Vermischung anderer Kräff te : so ist es auch mit dem Verstände. Und wie ein Körper der von zwei entgegenstehenden Kläfften getrieben wird, den Weg keiner Kraff t nimmt, sondern in einem Winkel nach der Diagonalen gehet ; so nimmt auch der Verstand alsdenn den Mittelweg zwischen seinen Urtheilen und der Neigung. Irrthum ist ein Effektus hybridus, theils entsprungen aus der puren Sinnlichkeit theils aus dem Verstände vermischt mit der Sinnlichkeit. Die Bergesspitzen als Wolken angesehen ist ein Urtheil der puren Sinnlichkeit. Wenn wir einen reinen Verstand hätten unvermengt mit der Sinnlichkeit, so würden wir nicht irren.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s36-005",
     "kind": "text",
     "aa": 402,
     "ms": [
      {
       "p": 96,
       "i": 0,
       "raw": "»«",
       "inferred": true
      }
     ],
     "text": "2. Betrachtung.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s36-006",
     "kind": "text",
     "aa": 402,
     "aaEnd": 403,
     "pages": [
      {
       "p": 403,
       "i": 124
      }
     ],
     "ms": [
      {
       "p": 97,
       "i": 1973
      },
      {
       "p": null,
       "i": 2384,
       "raw": "w",
       "unresolved": true
      }
     ],
     "text": "Die Irrthümer entspringen nicht aus den Schranken und der Schwäche des Verstandes. Daraus entspringt nur Unwissenheit nicht Irrthum. Wenn eine Krafft die einen Körper bewegt, abnimmt, so wird der Körper deßwegen nicht von seiner Directum abweichen, er wird nur langsam gehen. Zum Irren gehört eine positive Sache nicht ein Mangel. Mit einem kleinen Verstand kann man wenig erkennen aber was Gutes. Wenn es möglich ist Irrthum zu verhüten; so soll man es dadurch thun daß man sich wemg Erkenntnisse wählt, die aber ganz richtig sind. Das ist besser als wenn man eine grosse und ungewisse Erkenntniß hat. Wie wird man den positiven Grad des Irrthums entdecken ? Wir müssen in jedem Urtheil [denn nur da ist Wahrheit und Irrthum] unsern Verstand isolirt betrachten, alle andere Gemüthskräffte als Gewohnheit, Einbildungskrafft, Neigung, wegnehmen und die Sache dann durch den reinen Verstand beurtheilen. Denn nur diese Gemüthskräffte die sich in unsre Urtheile einschleichen und den Verstand nach ihren Gesetzen leiten machen es daß wir die Wahrheit nicht erkennen. Kommt da ein Begrif vor, so der Verstand nöthig hat, so bringt die Einbildungskrafft den andern vor und der Verstand denkt er gehöre dazu. Ich muß also sehen, ob ich nicht in meinem Urtheil die Begriffe bloß des wegen gepaaret, weil sie sonst öffter mit einander zusammengekuppelt waren. Ich muß sehen ob in meiner Seele ein Begrif erst aus der Erfahrung oder aus dem reinen Verstände entsteht. Ich bin mir nur meiner eigenen Erfahrung bewust. Ich wie ich mich durch meine innere Sinne allein erkenne ist meine Seele. Ich wie ich mich nach den äussern und innern Sinnen erkenne, bin ein Mensch. Ich wie ich mich bloß durch die äußern Sinne erkenne ist mein Körper. Ich muß untersuchen, wo mein Verstand den Begrif der Seele hergenommen und überhaupt wo die Seele den Begrif herbekomme. Z. E. Man redet von der Unsterblichkeit der Seele. Da kann vieles aus der Gewohnheit in den Begrif gekommen seyn, weil wir vieles auf Credit annehmen und weil die Menschen die daran zweifeln uns sehr übel beschrieben werden. Allein in Urtheilen muß man alle Partheilichkeit bey Seite setzen, zwar sind sie gleich wichtig; indessen müssen wir wenn wir es philosophisch untersuchen so thun als wenn uns das gar nicht angienge ohne alle Partheilichkeit. In Handlungen können wir Parthei nehmen; aber die Spekulation muß immer frey seyn. Der Verstand und die Sinne vor sich allem, irren niemahls.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 39
    },
    {
     "id": "philippi-s36-007",
     "kind": "text",
     "aa": 403,
     "text": "Ich urteile aber auch nie allem, durch den Verstand oder durch die Sinne, sondern stets mit beyden vermengt.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s36-008",
     "kind": "text",
     "aa": 404,
     "text": "Der Horizont unseres Verstandes scheint bisweiien umnebelt zu seyn, welches aus dem Zustande entspringt in welchem ich mich alsdann befinde.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s36-009",
     "kind": "text",
     "aa": 404,
     "text": "Die subiective Bedingungen, welche unser Denken befördern, werden zur Sinnlichkeit gerechnet.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s36-010",
     "kind": "text",
     "aa": 404,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "91",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "j Es gehört zu jeder Unterscheidung des Wahren vom Falschen stets ein innerer Sinn.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s36-011",
     "kind": "text",
     "aa": 404,
     "text": "Wenn die Wirkung der Sinnlichkeit vor eine Wirkung des Verstandes gehalten wird, so entspringt der Irrthum.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s36-012",
     "kind": "text",
     "aa": 404,
     "text": "Da ist viel Nachtheü entstanden, daß man schrekt und droht Sätze anzunehmen ohne über sie zu spekuliren ohne davon durch den Verstand überzeugt zu werden. Besonders thut man das mit Sätzen die in die Religion einschlagen, weil man befürchtet es werde die Spekulation einen Einfluß in die Praxin haben. Solche Phüosophie da man einen andern zu betäuben sucht blinden Beifall zu geben nützt weder dem Verstände, noch der Praxi, noch der Religion. Wir müssen ruhig und mit kaltem Blut beurtheilen und nach der Wahrheit der Gründe fragen. Das ist die Quelle vieler Irrthümer, daß man über die Sätze davon man sich durch den Verstand überzeugen könnte, nicht spekulirt. Gesetzt ich finde keine Entscheidung in der Sache, so wird das doch nicht in die Handlungen einf Hessen. Es ist nicht möglich, daß man nach metaphysischen Spekulationen leben sollte. Das Spekuliren kann niemals schaden. Denn findet man die Wahrheit, so ist das ungemein überzeugend: findet man sie nicht so wird das Spekuliren unsre Handlungen nicht regieren. Dagegen ist das Schrecken, der Bann da man den Verstand nöthiget auf dem Fleck wieder zurückzukommen, ein grosser Fehler, indem man dazu durch Sclaverey gezwungen wird, wohin man durch den edlen Trieb des Verstandes kommen könnte. Wenn ein Mensch nie erkennt, daß ein Gott möglich sey, so sind schon alle seine Regeln und Pflichten in einer Reihe. Denn im praktischen hat der Verstand die Möglichkeit schon zum grossen Antriebe. Der Mensch wird nicht nach den Spekulationen, sondern nach der Klugheit handeln.",
     "dehyphenated": 5,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s37",
   "title": "§ Hl",
   "titleSrc": "heading",
   "headings": [
    "§ Hl"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s37-001",
     "kind": "heading",
     "aa": 404,
     "text": "§ Hl"
    },
    {
     "id": "philippi-s37-002",
     "kind": "text",
     "aa": 404,
     "aaEnd": 405,
     "pages": [
      {
       "p": 405,
       "i": 203
      }
     ],
     "ms": [
      {
       "p": 98,
       "i": 356
      }
     ],
     "text": "Es giebt gar keinen unvermeidlichen Irrthum. Wer nicht urtheilt der kann nicht irren. Wer die Sachen problematisch traktiret, welches gemein und gar keine Kunst ist, kann auch nicht irren. Das ist nicht gut wenn man die artigsten Wissenschaften eben darum vermeidet. Jedoch muß der Weise manche Sachen in suspenso lassen. Wenn meine Handlungen in keiner Beziehung auf eine Frage stehen, so setzt man die Spekulation weg. Z. E. Ob der letzte Zweck der Schöpfung die Glückseeligkeit ist. Unter der Bedingung daß man urtheilen soll, kann ein Irrthum unvermeidlich werden. Solcher hypothetische Irrthum geschiehet in England im Rechten, da muß der Richter sprechen, der Beklagte bekennen oder nicht.",
     "joined": [
      "layout"
     ],
     "ocrConf": 46
    },
    {
     "id": "philippi-s37-003",
     "kind": "text",
     "aa": 405,
     "text": "Alle Criteria der Wahrheit sind entweder obiectiv, oder subiectiv, welche an und vor sich selbst keinen Grund enthalten warum etwas wahr oder nicht wahr ist.",
     "ocrConf": 51
    }
   ]
  },
  {
   "id": "s38",
   "title": "§113",
   "titleSrc": "heading",
   "headings": [
    "§113"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s38-001",
     "kind": "heading",
     "aa": 405,
     "text": "§113"
    },
    {
     "id": "philippi-s38-002",
     "kind": "text",
     "aa": 405,
     "text": "Eine Erkenntniß heißt offenbar falsch, deren Falschheit andern offenbar ist, mir aber ist sie verborgen. Wenn man glaubt, daß die Falschheit einer Erkenntniß dem mittleren Grade der Vernunfft offenbar seyn müsse, ist sie offenbar falsch.",
     "dehyphenated": 1,
     "ocrConf": 53
    },
    {
     "id": "philippi-s38-003",
     "kind": "text",
     "aa": 405,
     "text": "In Gegenständen der Vernunfft und Moral haben wir ein höchstes Model, das Ideale der grösten Vollkommenheit nach welchem wir sie alle beurtheilen. Die Gegenstände der Erfahrung werden nach einem in Gedanken gezogenen Mittelmaaß gerechnet. Der Mensch und dessen Schönheit werden nach der mittleren Grösse gerechnet. Aequatio temporis. Man nimmt den Tag, an dem wenn man alle gleich annimmt eben soviel Zeit herauskömmt, als wenn man sie so ungleich annimmt wie sie sind und zusammenrechnet. Der Wohlstand ist das Mittel zwischen reich und arm. Der Mittelverstand ist, wenn man alle Menschen gleich an Verstand annähme und zusammenrechnete, so würde die Summe gleich seyn der Summe des Verstandes der ungleich unter die Menschen vertheilt ist ; indem einem das abgeht was der andere zu viel hat. Die Mittelstrasse kann keiner beschreiben. Cicero sagt einer der 100000 Sestertien hat ist reich. Wenn er weniger hat ist er noch reich ? Beim Mittel verstand heißt der, der weniger hat dumm, wer mehr hat verdient Lob. Es ist ein Zustand, den man weder loben noch tadeln kann. Wo sollte der Mensch das Maaß der Schönheit herbekommen ? Bloß aus dem Mittelmaaß.",
     "dehyphenated": 2,
     "ocrConf": 50
    },
    {
     "id": "philippi-s38-004",
     "kind": "text",
     "aa": 405,
     "aaEnd": 406,
     "pages": [
      {
       "p": 406,
       "i": 196
      }
     ],
     "ms": [
      {
       "p": 99,
       "i": 196,
       "raw": "9»",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "Ein Urtheil ist ungereimt, wenn es arg unter dem Mittelmaaß ist. Das Mittelmaaß muß man schon aus der Erfahrung kennen. Nicht jeder Irrthum der durch den Mittelverstand unmöglich ist, sondern von dem Verstand der unter dem Mittelmaaß erniedri get ist, heißt Ungereimtheit. Also ist nicht jeder Irrthum eine Ungereimtheit. Aber es ist sehr schlimm gleich zu sagen daß der andere dumm sey und ungereimt geirret habe. Jeder Irrthum ist ein Phänomenon, und zwar ist der grobe Irrthum, da man alsdenn von den gewöhnlichen Verstandesgesetzen gar abweicht als ein Paradoxon anzusehen. Es ist etwas unnatürliches, so wie alles unnatürlich ist, was von den gewöhnlichen Gesetzen des Verstandes abweicht. Und also muß man aufmerksam untersuchen woher der Irrthum hat entstehen können ; so wie man in der Moral forschen muß wie das Laster, welches eben ein solches Paradoxon des Willens ist, hat geschehen können. Ein ungereimter Irrthum ist eben so ein Prodigium als ein Wunder in der Natur. Man kann nur den Menschen klug machen durch den Verstand der in ihm ist, und ihn nur bessern durch den Grad des guten Willens der in ihm ist. Ich muß daher keinen ungereimt nennen den ich belehren und keinen boßhalft den ich bessern will. Wenn Crusius und Wolf mir scheinen von allen gewöhnlichen Regeln und Gesetzen abzugehen; so muß ich dies als ein Phänomenon sehr sorgfältig prüfen. Will ich den Irrthum erklären: so führt mich dies auf Bescheidenheit; denn ich muß anführen wie viel Gründe und Wahrheit sonst von ihnen wahr sind.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 46
    },
    {
     "id": "philippi-s38-005",
     "kind": "text",
     "aa": 406,
     "text": "Der Weg einen andern zu wiederlegen ist in des andern Gedanken hineinzugehen, seine Gründe noch wohl zu vermehren und dann unser Urtheil einstimmig machen mit dem allgemeinen menschlichen Verstand; und dies kann geschehen indem ich mein Urtheil einstimmig mache mit dem besondern Urtheil eines jeden. Dann wird die Erkenntniß allgemeingültig.",
     "dehyphenated": 2,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s39",
   "title": "Der fünfte Abschnitt. Von der gelehrten Erkenntniß und deren Klarheit.",
   "titleSrc": "heading",
   "headings": [
    "Der fünfte Abschnitt.",
    "Von der gelehrten Erkenntniß und deren",
    "Klarheit."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s39-001",
     "kind": "heading",
     "aa": 406,
     "text": "Der fünfte Abschnitt. Von der gelehrten Erkenntniß und deren Klarheit."
    },
    {
     "id": "philippi-s39-002",
     "kind": "text",
     "aa": 406,
     "text": "§ 115",
     "ocrConf": 19
    },
    {
     "id": "philippi-s39-003",
     "kind": "text",
     "aa": 406,
     "text": "Von den Merkmalen.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s39-004",
     "kind": "text",
     "aa": 406,
     "aaEnd": 407,
     "pages": [
      {
       "p": 407,
       "i": 200
      }
     ],
     "ms": [
      {
       "p": 100,
       "i": 200,
       "raw": "ioo",
       "inferred": true
      }
     ],
     "text": "Ein Merkmal ist ein Erkenntnißgrund. Alle Erkenntnissgründe sind 1. äusserliche, das sind die Gründe der Vergleichung der Sache mit andern. 2. innerliche, das sind die Gründe dessen was ich an Dingen selbst erkenne. Wir können äussere Merkmale niemalen mit Gewißheit erkennen, wenn wir nicht die inneren erst erkannt haben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s39-005",
     "kind": "text",
     "aa": 407,
     "text": "Wenn ich Dinge vergleiche, so vergleiche ich sie entweder quoad identitatem oder quoad diuersitatem.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s39-006",
     "kind": "text",
     "aa": 407,
     "text": "Das heißt nun ein Merkmal was den Grund der Vergleichung mit andern enthält. Also nicht jede Bestimmung (determinatio) wird wie ein Merkmal betrachtet, sie kann es aber wohl seyn.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s39-007",
     "kind": "text",
     "aa": 407,
     "text": "Die Merkmale sind :",
     "ocrConf": 38
    },
    {
     "id": "philippi-s39-008",
     "kind": "text",
     "aa": 407,
     "text": "unmittelbar, wenn es in der Reihe der einander subordinirten Merkmale sine notis intermediis an ein anders gränzt, mittelbar, wenn es in der Reihe an ein Merkmal gränzt aber mit notis intermediis. Die erstem heissen notae propiores die andern remotiores. Was kein Merkmal von einem andern Merkmale ist, ist nota proxima in regressu oder ascendendo von der Folge zum Grunde.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "philippi-s39-009",
     "kind": "text",
     "aa": 407,
     "text": "In progressu da giebt es einen terminum a priori d. i. der Begrif des Dinges und einen a posteriori d. i. die Sache selbst. Es können aber auch Merkmale in einer Reihe coordinirt stehen. Plures notae vnius eiusdemque, quarum vna non est nota alterius sunt coordinatae. Viele Kinder sind coordinirt. Gold, Körper, zusammengesetzt, theilbar, sind notae subordinatae. Aber gelb, schwer, hart, fix da es nicht verfliegt sind coordinirte Merkmale des Goldes.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s40",
   "title": "§ 117 Von der Verneinung und Bejahung.",
   "titleSrc": "heading",
   "headings": [
    "§ 117",
    "Von der Verneinung und Bejahung."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s40-001",
     "kind": "heading",
     "aa": 407,
     "text": "§ 117 Von der Verneinung und Bejahung."
    },
    {
     "id": "philippi-s40-002",
     "kind": "text",
     "aa": 407,
     "text": "Alle Bejahung läßt sich vor sich denken; aber alle Verneinungen können nicht anders gedacht werden als durch die Bejahungen; denn eine Verneinung ist nichts anders als die Aufhebung des Positiven. Es ist reine Handlung daß etwas nicht soll gesetzt werden. Der Zweck aller Negation ist die Hinderung der Position. Nicht wissen abstrahiren sind analoga der Verneinung.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s40-003",
     "kind": "text",
     "aa": 407,
     "ms": [
      {
       "p": 101,
       "i": 291,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Reihe notarum sibi subordinatarum hat Grenzen. Diejenige der notarum coordinatarum hat auch Grenzen, aber wir können nicht alle Grenzen einsehen; denn sonst müssen wir alle Begriffe der Sache, wie hier z. B. des Goldes kennen. Leibniz schien zu behaupten, daß zwischen zwey subordinirtenMerkmalen immer noch ein drittes istioi in dem lege der Continuität. vid. Metaph.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s40-004",
     "kind": "text",
     "aa": 407,
     "text": "Genus est nota remota, species nota propinr.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s41",
   "title": "§121",
   "titleSrc": "heading",
   "headings": [
    "§121"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s41-001",
     "kind": "heading",
     "aa": 408,
     "text": "§121"
    },
    {
     "id": "philippi-s41-002",
     "kind": "text",
     "aa": 408,
     "text": "Ratio in internis sufficiens praedicatorum entis absoluter um est essentia. Zum Wesen gehören alle nothwendige Bestimmungen. Die noth wendige Bestimmungen gehören zum Wesen entweder als Gründe rationes, als Seele und Körper, oder als Folgen, und das sind accidentalia z. E. beym Menschen die Sterblichkeit. Es ist eine nothwendige Bestimmung aber eine Folge. Gelehrsamkeit ist eine zufällige aber doch innere Bestimmung, also ein modus. Daß der Mensch ein Herr der Thiere sey, ist relatio extraessentialis. Alles was dem Dinge nothwendig zukommt est ad essentiam pertinens. Was als ein noth wendiger Grund zum Wesen gehört ist attributum.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s41-003",
     "kind": "text",
     "aa": 408,
     "text": "Die Metaphj^sik unterscheidet das reale von Begriffen; das was den ersten Grund alles dessen was noth wendig ist in Begriffen, die wir vom Dinge haben, enthält ist das logische Wesen. Der erste Grund dessen was in der Sache selbst ist, von der ich einen Begrif habe, ist das reale Wesen. Das logische Wesen kennen wir in Ansehung aller Dinge ; denn es ist der erste Grundbegrif . Aber vom realen Wesen können wir gar nichts wissen. Wenn wir auch wissen was im Begriffe enthalten ist, so können wir doch nicht sagen, daß es auch in der Sache so ist. Jedoch ist dieses zu merken :",
     "ocrConf": 44
    },
    {
     "id": "philippi-s41-004",
     "kind": "text",
     "aa": 408,
     "text": "1. von dem Dinge welches wie ein Object durch Erfahrung uns gegeben ist können wir das Wesen niemals kennen. Denn das Ding ist ausser uns gegeben.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s41-005",
     "kind": "text",
     "aa": 408,
     "text": "2. wenn uns aber etwas durch die reine Vernunft gegeben ist, so können wir das reale Wesen wissen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s41-006",
     "kind": "text",
     "aa": 408,
     "text": "3. Wenn ich mir selbst Wesen erdichte, wie Leibniz die Monaden; so kann ich solche Wesen erkennen; denn sie sind ja meine eigene Arbeit.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s41-007",
     "kind": "text",
     "aa": 408,
     "text": "Also nur in willkührlichen und reinen Begriffen kenne ich das Realwesen, nicht in Objecten der Erfahrung. Nicht ein Atom, nicht einen Tropfen erkenne ich da nach seinem Wesen.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s41-008",
     "kind": "text",
     "aa": 408,
     "text": "Bey empirischen Begriffen werden wir auch das logische Wesen niemals finden. Wir können Dinge nicht nach dem Wesen der Dinge sondern nur durch Begriffe erkennen.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s41-009",
     "kind": "text",
     "aa": 408,
     "aaEnd": 409,
     "pages": [
      {
       "p": 409,
       "i": 203
      }
     ],
     "ms": [
      {
       "p": 102,
       "i": 0
      }
     ],
     "text": "Warum suchen wir das logische Wesen ? Wenn ich einen Begrif bekomme ; so gehe ich im Verstände auf die ersten Gründe. Das ist das Gesetz der Vernunft. Ich suche die wesentlichen Stücke des Begrif s auf. Dann reducire ich den Begrif gleichsam ad minores terminos wie einen Bruch. Warum ? Damit mein Begrif ganz auf die kleinste Zahl, auf die Elemente der Gründe gebracht werde. Die Vernunfft sucht Einfalt und Proportion. Ich suche die Gründe auf, und subordinire ihnen ihre Folgen. Diese Reihe subordinirter Elemente ist das Wesen. In das innere Wesen der Natur kann kein menschlicher Verstand dringen. Will ich das Wesen eines Dinges in der Natur kennen; so ists nicht genug daß ich den Begriff ad minores terminos reducire um der Seele Faßungskräfte zu geben und ihr Raum zu machen. Denn je einfacher der Begrif ist, desto leichter faßt ihn die Seele und deß wegen suchen wir die Phänomena aus den kleinsten Gründen zu ziehen ; sondern ich muß auch durch verdoppelte Erfahrungen an der Sache alles zu erkennen suchen. Weil aber niemals die Erfahrungen an einer Sache zu Ende kommen, indem meine Schranken mich daran verhindern: so kann man kein einziges Wesen eines Dinges erkennen. Ja wir kennen unzählige Dinge nicht einmal nach dem logischen Wesen. Wir suchen auch nur das logische Wesen. Newton hat auch das Realwesen ausspähen wollen ; es hat aber ein Gelehrter gezeigt daß es unmöglich gewesen. Weil das Realwesen der Grund ist aller Erscheinungen die man sieht ; so kami man es nicht einsehen. Denn aus der Wirkung kann ich nicht den Grund einsehen.",
     "joined": [
      "layout"
     ],
     "ocrConf": 45
    },
    {
     "id": "philippi-s41-010",
     "kind": "text",
     "aa": 409,
     "text": "Der Autor redet in den folgenden §§. von der Deutlichkeit. Warum hat er diese bis hieher versparet und nicht gleich beim 10. § nach dem Beispiel des Wolfen angeführet ? Er hat vollkommene Ursache. Keine Deutlichkeit entspringt ohne Urtheil: also muß die Abhandlung vom Urtheil vorangehen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s41-011",
     "kind": "text",
     "aa": 409,
     "ms": [
      {
       "p": 103,
       "i": 127
      }
     ],
     "text": "Dunkle Erkenntnisse sind die, deren wir uns nicht bewußt sind. Wolf sagt : entweder sind wir uns bewust der Erkenntnisse, oder nicht bewust. Wie kann Wolf sagen: wir haben Erkenntnisse und wissen daß wir sie nicht haben.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s41-012",
     "kind": "text",
     "aa": 409,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "loa",
       "unresolved": true
      }
     ],
     "text": "Von den dunkeln Vorstellungen hat Sulzer geschrieben.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s41-013",
     "kind": "text",
     "aa": 409,
     "aaEnd": 410,
     "pages": [
      {
       "p": 410,
       "i": 340
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 268,
       "raw": "103",
       "unresolved": true
      }
     ],
     "text": "Nicht alle Deutlichkeit entspringt per analysin. Nur bey Vernunfftbegriffen entspringt sie dadurch, bey Erfahrungsbegriffen aber per synthesin das ist durch die Erfahrung, denn die Synthesis ist nur dadurch möglich. Bey Vernunftbegriffen ist mir das Ganze gegeben ich suche nur per analysin mich der Theile bewust zu machen ; bey Erfahrungsbegriffen sind mir die Theile gegeben. Ich muß durch Erfahrung mehr hinzusetzen, damit ich einen deutlichen Begriff kriege.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 40
    },
    {
     "id": "philippi-s41-014",
     "kind": "text",
     "aa": 410,
     "text": "Alle Deutlichkeit in willkührlichen Begriffen ist so wie in empirischen synthetisch. Ein vielfacher Begriff kann nicht per analysin deutlich gemacht werden; aber wohl per synthesin.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s41-015",
     "kind": "text",
     "aa": 410,
     "text": "Die Deutlichkeit muß bey einer schönen Erkenntniß seyn und sie entspringt da per synthesin.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s41-016",
     "kind": "text",
     "aa": 410,
     "text": "Ein dunkler Begrif ist nicht der, dessen wir uns nicht bewust sind sondern dessen wir uns nicht unmittelbar bewust sind, dessen wir durch Schlüsse uns bewust werden können: aber nicht durch den innern Sinn. Ein Musikus der da spielt ist sich des Spielens nicht unmittelbar bewust ; er stellt tausend Reflexions an und weiß es nicht. Das zeigt, daß wir uns mancher Erkenntnisse nicht unmittelbar bewust sind. Wenn ich die Milchstraße betrachte, so bin ich mir nicht unmittelbar bewust, daß es Sterne sind. Wenn eine hölzerne Büchse Eisen anzieht : so kann ich durch Schlüsse mir bewust werden daß ein Magnet darinnen ist, aber unmittelbar bin ich mir dessen nicht bewust. Wenn ich eine Käsemade sehe, so sehe ich alle Theile an ihr, nur bin ich mich dessen nicht unmittelbar bewust. Denn gesetzt ich hätte keine Augen, keinen Kopf, keine Ringeln gesehen, so hätte ich gar nichts gesehen.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s41-017",
     "kind": "text",
     "aa": 410,
     "text": "Microscopium und Telescopium bringt uns nichts neues vors Gesicht, sondern stellt uns nur deutlich dar, was wir vorher nur dunkel erkannten. Eben so soll auch die Philosophie uns nichts neues lehren, sondern nur das was schon in uns liegt entwickeln und deutlich machen. Metaphysik und Moral führen uns auf das was wir schon haben und suchen uns dessen bewust zu machen.",
     "dehyphenated": 2,
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s42",
   "title": "§131",
   "titleSrc": "heading",
   "headings": [
    "§131"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s42-001",
     "kind": "heading",
     "aa": 410,
     "text": "§131"
    },
    {
     "id": "philippi-s42-002",
     "kind": "text",
     "aa": 410,
     "text": "Handelt der Autor von der Dunkelheit und Klarheit. Die Untersuchung wie dunkle Erkenntnisse in uns entstehen und die Erfindung der Mittel wodurch dunkle Erkenntnisse klar können gemacht werden sind einfache Handlungen, die zur Psychologie gehören. Die Logik fragt nicht woher die Erkenntnisse klar werden; sie redet von den schon klaren Erkenntnissen und zeigt das Verfahren an.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s43",
   "title": "§ 132 - 149 Von der Ausführlichkeit.",
   "titleSrc": "heading",
   "headings": [
    "§ 132 - 149",
    "Von der Ausführlichkeit."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s43-001",
     "kind": "heading",
     "aa": 411,
     "text": "§ 132 - 149 Von der Ausführlichkeit."
    },
    {
     "id": "philippi-s43-002",
     "kind": "text",
     "aa": 411,
     "ms": [
      {
       "p": null,
       "i": 203,
       "raw": "hu",
       "unresolved": true
      }
     ],
     "text": "Jeder deutliche Begriff ist klar, aber nicht umgekehrt. Von der Milchstraße habe ich durch den blossen Anblick unbewafneter Augen einen klaren Begrif, aber keinen deutlichen. Von den Haaren gleichfalls. Durch die ausführliche Klarheit lernt man Dinge von allen andern unterscheiden. Deutlichkeit wird von der Ausführlichkeit supponirt. In der Deutlichkeit kann ich nicht wissen ob mein Begrif zureichend sey die Sache von allen andern zu unterscheiden. Wir wollen hier nähere Betrachtungen anstellen.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s43-003",
     "kind": "text",
     "aa": 411,
     "text": "Die Zulänglichkeit (sufficientia) eines deutlichen Begriffs stellt nichts vor als die Zulänglichkeit des Begrifs zum Erkenntnißgrunde.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s43-004",
     "kind": "text",
     "aa": 411,
     "text": "Die Zulänglichkeit (completudo, sufficientia) eines deutlichen Begriffs ist",
     "ocrConf": 40
    },
    {
     "id": "philippi-s43-005",
     "kind": "text",
     "aa": 411,
     "text": "1 . interna, da die Merkmale eines deutlichen Begriffs zulänglich sind zusammengenommen um alles was der Sache zukommt daraus zu erkennen.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s43-006",
     "kind": "text",
     "aa": 411,
     "text": "2. externa, da die Merkmale zulänglich sind, das Ding von allen andern Dingen mit denen es verglichen wird zu unterscheiden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s43-007",
     "kind": "text",
     "aa": 411,
     "text": "Wenn ich von einem Begriff nicht notas internas erlangen kann, so wrerde ich auch nicht notas externas erlangen. Wenn mir der Begrif comparativ complet ist, so muß man sich begnügen. Niemals ist die absolute Ausführlichkeit möglich bey empirischen Begriffen. Daher sind alle Definitionen derselben vergeblich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s43-008",
     "kind": "text",
     "aa": 411,
     "aaEnd": 412,
     "pages": [
      {
       "p": 412,
       "i": 800
      }
     ],
     "text": "Die Completudo wird also darauf beruhen, daß die Merkmale zureichend seyn zum ganzen Begrif der Sache und ihn erschöpfen. Z. E. Materia est extensum impenetrabile iners. Die Merkmale nämlich das Ausgedehnte, Undurchdringliche und Leblose machen hier den ganzen Begrif der Materie aus und erschöpfen ihn; also sind sie innerlich sufficient. Der deutliche Begrif ist der dessen Merkmale innerlich zulänglich sind oder ausführlich sind. Ich habe hier da ich den deutlichen Begrif der Materie suchte nur die Merkmale mit meinem Begrif so verglichen, ob sie denselben ganz exhauriren, und nicht ob sie hinlänglich sind den Begrif von allen andern zu unterscheiden. Folgt denn das letztere schon aus dem ersteren ? Ja, weil jeder Begrif von allen andern unterschieden ist. Ein Begrif kann niemals ganz mit einem andern übereinstimmen; denn sonst wäre dieses kein anderer Begriff, wol aber zum Theil als Mensch und Thier.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s43-009",
     "kind": "text",
     "aa": 412,
     "ms": [
      {
       "p": 105,
       "i": 165
      }
     ],
     "text": "Also wenn Merkmale zusammengenommen den ganzen Begrif ausmachen, so dienen sie auch die Sache von allen andern zu unterscheiden. Aus der completudine interna fließt die completudo externa.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s43-010",
     "kind": "text",
     "aa": 412,
     "text": "Aber wie finde ich den Begriff wodurch ich die Sache von allen andern unterscheiden kann; wie versichere ich mich, daß die Merkmale meines deutlichen Begrifs äusserlich hinlänglich sind um die Sache von allen andern zu unterscheiden ? Unmittelbar kann ich es nicht wissen Kann ich es a posteriori erkennen, daß mein Begrif externe complet sey ? Das kann keiner thun als der alle Dinge kennt. Also ists unmöglich daß wir, die wir so sehr eingeschränkt sind, von der äussern completudo anfangen könnten. Wir können es nicht unmittelbar wissen, wir müssen von der completudine interna anfangen. Die äussere completudo oder die Vollständigkeit des Begrifs im äusseren Verhältniß kommt an auf diejenige im innern Verhältniß.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "philippi-s43-011",
     "kind": "text",
     "aa": 412,
     "text": "Die Verbindung mehrerer Merkmale ist zwiefach; sie werden entweder 1. coordinirt oder 2. subordinirt. Wenn ich also sehe, daß alle Merkmale in der Reihe der Merkmale auf zwiefache Weise können vollendet werden ; so werde ich mir auch eine zwiefache Ausf ükrlichkeit denken.",
     "dehyphenated": 2,
     "ocrConf": 50
    },
    {
     "id": "philippi-s43-012",
     "kind": "text",
     "aa": 412,
     "text": "1. Die Ausführlichkeit in der Reihe der subordinirten und",
     "ocrConf": 45
    },
    {
     "id": "philippi-s43-013",
     "kind": "text",
     "aa": 412,
     "text": "2. diejenige in der Reihe der coordinirten Merkmale. Wir fangen von den coordinirten Merkmalen unsrer Betrachtung an und deren Ausführlichkeit heißt eigentlich completudo ; das ist die Totalität einer möglichen Vorstellung der Sache. Gesetzt ich will mir einen deutlichen Begrif vom Körper machen, so muß ich soviel Merkmale coordiniren, bis sie zusammen den ganzen Begrif ausmachen. Ich nehme die Ausdehnung, die Undurchdringlichkeit, die Trägheit, so sehe ich daß meinen Begrif diese Merkmale noch nicht erschöpfen, ich nehme noch die Figur hinzu und so erschöpfen sie ihn. Was habe ich hier gethan ? Ich habe die Merkmale zusammengezählt, coordinirt. Mehr Merkmale als diese habe ich nicht zusammennehmen können, weil die meinen Begrif schon erschöpften. Und alles dieses waren unmittelbare Merkmale der Sache.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "philippi-s43-014",
     "kind": "text",
     "aa": 412,
     "text": "Und die subordinirten Merkmale, welche werden es wol beym Körper seyn ?",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s43-015",
     "kind": "text",
     "aa": 412,
     "aaEnd": 413,
     "pages": [
      {
       "p": 413,
       "i": 128
      }
     ],
     "ms": [
      {
       "p": 106,
       "i": 128
      }
     ],
     "text": "Das Merkmal des Körpers ist das Zusammengesetzte ; das Merkmal des Zusammengesetzten ist das Theübare, dasjenige des Theilbaren ist das Zufällige, und das des Zufälligen daß es eine von sich unterschiedene Ursache hat. Hier ist eine Reihe von Merkmalen, wo eines dem andern subordinirt, oder wo eines das Merkmal vom andern ist. Das erste Merkmal ist ein unmittelbares, aber die andern nicht. Theilbarkeit ist nicht ein Merkmal des Körpers, sondern das Zusammengesetzte. In der Reihe der subordinirten Merkmale kann ich auch eine Sufficienz von Merkmalen haben, wenn die Merkmale eines Dinges die sich subordinirt sind, bis zu dem ersten, das aus nichts weiter abgeleitet werden kann, hinaus geführet seyn. Die Hinlänglichkeit der subordinirten Merkmale daß alle nicht zusammengezählt sondern vollendet seyn ist adaequatio.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 50
    },
    {
     "id": "philippi-s43-016",
     "kind": "text",
     "aa": 413,
     "text": "Je mehr coordinirte Merkmale in einem Begrif sind desto mehr ist der Begrif extensiue distinctior. Die Poeten und Redner bringen die Deutlichkeit zu Stande durch eine Menge coordinirter Merkmale.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s43-017",
     "kind": "text",
     "aa": 413,
     "text": "Je grösser die Reihe der subordinirten Merkmale ist; desto mehr intensiue Deutlichkeit ist im Begrif.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s43-018",
     "kind": "text",
     "aa": 413,
     "text": "Jedes klare Merkmal ist ein Grund der Deutlichkeit; es giebt also ( iiade der extensiven Deutlichkeit, die von der Menge der coordinirten Merkmalen bestimmet werden. Die intensiue Deutlichkeit hat auch Grade. Je grösser die Reihe der subordinirten Merkmale ist, desto grösser ist die intensiue Deutlichkeit. Wenn man einem Lappländer den Frühling deutlich machen will ; so coordinirt man viele Merkmale.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s43-019",
     "kind": "text",
     "aa": 413,
     "text": "Lebhaftigkeit der Erkenntniß ist die subiective Klarheit derselben ; z. E. Ich nehme eine gewiße Unrechte Handlung. Nun mag sie geschehen seyn wenn sie wolle es ist gleich verständlich ; aber wenn man sagt wie wenn es dir begegnet wäre; so wird die Erkenntniß lebhaft.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "philippi-s43-020",
     "kind": "text",
     "aa": 413,
     "text": "Gegenstände der Natur sind niemals vollkommen deutlich, weil wir die Reihe der coordinirten Merkmale niemals zu Ende bringen. Aber Gegenstände der Vernunfft können wir vollkommen erkennen. Da kann die Reihe der subordinirten Merkmale zu Ende gebracht werden, und dann ist die Erkenntniß adaequat oder vollständig. Die Ausführlichkeit ist die Hinlänglichkeit der coordinirten Merkmale.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s43-021",
     "kind": "text",
     "aa": 413,
     "aaEnd": 414,
     "pages": [
      {
       "p": 414,
       "i": 332
      }
     ],
     "ms": [
      {
       "p": 107,
       "i": 174,
       "raw": "i<n",
       "inferred": true
      }
     ],
     "text": "Wir haben also Grade der Deutlichkeit; nur man muß auch nicht allzuviel coordinirte Merkmale zusammendrengen daß sie sich hindern. Das Gleichgewicht zu finden wird Geschmack erfordert. Dichter und Redner sind extensiue deutlich. Nicht die Undeutlichkeit oder Verwirrung ist das Merkmal des .Sinnlichen; wie der Autor und Baumgarten und viele andere glauben. Sie erreichen ihren Zweck nicht dadurch, daß sie verworren, sondern dadurch daß sie deutlich machen. Deutlichkeit haben sie eben so noth wendig als der Logikus, aber auf andere Art. In der Subordination geht die Metaphysik am weitsten, so wie die Poesie in der Coordination. Die Deutlichkeit durch Synthesin ist die Ausbreitung, diejenige durch die Analysin ist die Intensivität. In schönen Wissenschaften die auf die Sinne gehen gilt die erstere die Coordination, in den hohen Verstandeswissenschaften gilt die Subordination.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s43-022",
     "kind": "text",
     "aa": 414,
     "text": "Die Ausführlichkeit ist die Totalität der coordinirten Merkmale. Ein Begrif ist also complet oder ausführlich, wenn er alle nothwendige Merkmale hat die in ihrer Verbindung ein totum ausmachen und den Begrif erschöpfen.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s43-023",
     "kind": "text",
     "aa": 414,
     "text": "NB. Die Logick hat nur mit noth wendigen Merkmalen zu thun. Denn nur diese sind Gegenstände des Verstandes. Zufällige Merkmale z. E. die Gelehrsamkeit am Menschen sind Gegenstände der Erfahrung. Wenn in einen Begrif noch zufällige Merkmale außer den notwendigen hinzugenommen werden, so ist der Begrif supercomplet. In complet ist er wenn er nicht alle nothwendige Merkmale hat.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s43-024",
     "kind": "text",
     "aa": 414,
     "text": "Zur Completudo gehört die Coordination und die Verbindung der Theile im Ganzen. Die Verbindung zwischen Folgen und Gründe ist Subordinatio. Wenn ich einen Grund setze, setze ich auch zugleich alle Folgen. Aber in der Coordination wird dadurch daß ich eines setze nicht zugleich das übrige auch gesetzt. Das muß alles hinzugesetzt werden. Denn hier müssen es alles unmittelbare Merkmale und nicht mittelbare oder Merkmale von Merkmalen seyn.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s43-025",
     "kind": "text",
     "aa": 414,
     "text": "Die ausgebreitete Deutlichkeit (extensiue distinctior cognitio) heißt Lebhaftigkeit. Wenn eine Erkenntniß gleichsam so ist, wie wir sie von Dingen haben die wir durch die Sinne empfangen.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s43-026",
     "kind": "text",
     "aa": 414,
     "ms": [
      {
       "p": 108,
       "i": 202
      }
     ],
     "text": "Wenn aber die Merkmale in einer subordinirten Sache stehen, so heißt die Deutlichkeit tiefe Deutlichkeit. Je grösser die Reihe der subordinirten Merkmale ist, desto tiefer ist die Deutlichkeit. Das ist cognitio intensiue distinctior. Die Glückseeligkeit eines Landes ist extensiue maior wenn es viel Einwohner hat. intensiue maior, wenn ohne die Zahl der Einwohner zu vermehren der Grad des guten Zustandes sich in jedem Subject mehrt.",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "philippi-s43-027",
     "kind": "text",
     "aa": 414,
     "aaEnd": 415,
     "pages": [
      {
       "p": 415,
       "i": 138
      }
     ],
     "text": "Je tiefer die Deutlichkeit ist, je weiter die subordinirten Merkmale fortgehen, desto trockener ist eine Erkenntniß; je ausgebreiteter lebhaffter sie ist, desto seichter ist sie. Toussaint in seinem Buche les moeurs ist lebhafft und eben deßwegen seicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s43-028",
     "kind": "text",
     "aa": 415,
     "text": "Die Sinne geben uns die ausgebreitetste Erkenntniß. Der Verstand giebt uns eine tiefe Erkenntniß. Die tiefe Erkenntniß hat den Vortheil der Gründlichkeit.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s43-029",
     "kind": "text",
     "aa": 415,
     "text": "Wenn in der Reihe der subordinirten Merkmale die Deutlichkeit bis zum obersten Merkmal hinausgeführet ist; so ist sie consummirt.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s43-030",
     "kind": "text",
     "aa": 415,
     "text": "Erlaubt die Completudo Grade ? Im logischen Verstände nicht, wol aber im aesthetischen. Da werden Erkenntnisse durch zufällige Merkmale supercomplet gemacht. Baco de Verulamio hat die Gewohnheit daß er in seiner Schlifft fast alles zweimal sagt um tiefern Eindruck zu machen.",
     "dehyphenated": 1,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s44",
   "title": "Von der adaequation der Erkenntnisse.",
   "titleSrc": "heading",
   "headings": [
    "Von der adaequation der Erkenntnisse."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s44-001",
     "kind": "heading",
     "aa": 415,
     "text": "Von der adaequation der Erkenntnisse."
    },
    {
     "id": "philippi-s44-002",
     "kind": "text",
     "aa": 415,
     "text": "Wolff nennt den Begrif adaequat der den zweiten Grad der intensiuirten Deutlichkeit hat. Wenn ich eine Sache erkenne durch das erste unmittelbare Merkmal; so ist das der erste Grad z. E. vom Körper er ist zusammengesetzt. Wenn ich von den unmittelbaren Merkmalen neue Merkmale bekomme; so ist das der 2. Grad, und dann ist der Begrif adaequat. Allein das ist nicht recht. Die adaequatio (Vollständigkeit) erfordert den obersten Grad ; der zweite Grad aber ist noch nicht der oberste.",
     "dehyphenated": 4,
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-003",
     "kind": "text",
     "aa": 415,
     "ms": [
      {
       "p": 109,
       "i": 297
      }
     ],
     "text": "Wenn ich die Merkmale einer Sache klar erkenne, so ist das der erste Grad der Deutlichkeit; wenn ich die Merkmale von den Merkmalen klar erkenne, so ist das der zweite Grad. Wenn ich die Merkmale von diesen Merkmalen erkenne, so ist das der dritte Grad der Deutlichkeit und so ferner, bis das Merkmal das Ding selber ist. Also notio consummata ist der höchste Grad der Intensivität.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-004",
     "kind": "text",
     "aa": 415,
     "text": "Wenn in der Reihe der coordinirten Merkmale eine completudo ist, d. i. wenn ein Begrif ausführlich ist ; so könnte doch noch etwas hinzugesetzt werden was über die completudo ist, nemlich die aus den notwendigen Merkmalen der Sache abf liessende Folgen. Es können zu ausführlichen Begriffen die alle nothwendige Merkmale enthalten, noch zufällige Merkmale, die aus jenen f Hessen, gesetzt werden. Allein diese Merkmale sind immer entbehrlich. Folgen können immer wegbleiben, wenn man den Grund hat, denn hat man diesen, so hat man auch jene.",
     "dehyphenated": 3,
     "ocrConf": 40
    },
    {
     "id": "philippi-s44-005",
     "kind": "text",
     "aa": 415,
     "aaEnd": 416,
     "pages": [
      {
       "p": 416,
       "i": 136
      }
     ],
     "text": "A ist eine Figur die üi 3 gerade Linien eingeschlossen ist und 3 Winkel hat, dieses letztere macht den Begrif übercomplet. Was über die Completudo zu einem Begrif hinzukommt ist entbehrlich und wegzulassen. Im aesthetischen sucht man Leichtigkeit den Begriffen zu geben und sucht deßhalb so viel zusammen zu nehmen als sich nur schickt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s44-006",
     "kind": "text",
     "aa": 416,
     "text": "Nur die Absonderung aller entbehrlichen und tavtologischen Merkmale, die in den gegebenen schon liegen heißt die Praecision. Präcis ist ein Begrif wenn er complet ist und nichts überflüssiges enthält. Wenn einem Begrif nichts fehlt zum ganzen Begrif der Sache, so heißt er complet; wenn er nichts zu viel hat, heißt er präcis. Dann ist er der Sache angemessen. Ein Kleid das nicht zu groß auch nicht zu ldein ist, ist angemessen, das paßt. Conceptus rem adaequat heißt es derm. Die Completudo Ausführlichkeit ist die Vollkommenheit eines Begrifs da ihm nichts fehlt; die Adaequation, Angemessenheit diejenige, da er nichts zu viel hat. Ein Begrif der complet und präcis zugleich ist, ist conceptus obiecto alio adaequatus, ein adaequater Begrif. Die Adaequatio eines Begrifs leidet keine Grade. Gleicher als gleich kann ein Begriff nicht seyn. Aber nach dem Wolfen leidet die Adaequation Grade.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-007",
     "kind": "text",
     "aa": 416,
     "text": "Das ist die gröste Vollkommenheit der Begriffe im logischen wenn sie adaequat sind. Die Definitionen sind von den Descriptionen nur darinn unterschieden, daß jene Präcision haben und diese nicht.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s44-008",
     "kind": "text",
     "aa": 416,
     "text": "Die Grade der Deutlichkeit sind diese:",
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-009",
     "kind": "text",
     "aa": 416,
     "ms": [
      {
       "p": 110,
       "i": 32
      }
     ],
     "text": "1. daß man klare Merkmale habe. 2. daß sie complet sind, daß ihrer genug seyn. Das ist die Ausführlichkeit.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-010",
     "kind": "text",
     "aa": 416,
     "aaEnd": 417,
     "pages": [
      {
       "p": 417,
       "i": 936
      }
     ],
     "text": "3. daß ihrer nicht zu viel seyn. Das ist die Präcision. Dann ist der Begrif der Sache angemessen, wenn er diese Art der Deutlichkeit erreicht; dann ist er adaequat. Wolff nennt die Adaequation Vollständigkeit, aber dies drückt es nicht gut aus. Die Adaequation zeigt an eine vorhergegangene Vergleichung und daß der Begriff darin gleich und angemessen befunden sey. Man könnte sie nennen die Angemessenheit. Das ist die größte logische Vollkommenheit in Vergleichung mit der Sache. Der Autor redet von der Lebhaff tigkeit und Stärke. Das gehört zu sinnlichen Vorstellungen. Je mehr Erkenntnisse abstract je mehr sie allgemein sind, desto weniger smd sie lebhafft. Durch concrete Fälle können sie lebhafft werden. Also wenn eine Erkenntniß im allgemeinen betrachtet wird, so hat sie wenig Lebhaff tigkeit ; aber was ihr davon abgeht, ersetzt die Gründlichkeit, das ist die logische Vollkommenheit. Jene daß man sie durch Applicirung auf concrete Fälle auch anbringe. Die Stärke kommt einer Erkenntniß zu, in soferne sie einen Grund des Einflusses hat auf die Kräffte des menschlichen Gemüths; aber abstrakte Begriffe haben die wenigste Stärke.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-011",
     "kind": "text",
     "aa": 417,
     "text": "Es ist die Frage wie entspringen deutliche Erkenntnisse. Den Ursprung der klaren Erkenntnisse untersucht die Metaphysick. Die Logik bedienet sich ihrer ohne zu fragen wo sie herkommen. Aber wie entspringen deutliche Begriffe ? Das muß die Logick wissen. Alle Deutlichkeit entspringt aus der Analysis, sagt der Autor. Ich sage sie entin springt auch per synthesin. Alle Deutlichkeit entspringt aus Merkmalen auf eine zwiefache Art:",
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "philippi-s44-012",
     "kind": "text",
     "aa": 417,
     "text": "1. indem ich die Merkmale die im Begrif liegen durch die Zergliederung hervorsuche und klar mache.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s44-013",
     "kind": "text",
     "aa": 417,
     "ms": [
      {
       "p": null,
       "i": 243,
       "raw": "m",
       "unresolved": true
      }
     ],
     "text": "2. indem ich neue Merkmale die nicht im Begrif lagen hinzufüge per synthesin. Wenn ich mir z. E. vom Golde einen deutlichen Begrif machen will, so ist nicht genug, daß ich meinen Begrif den ich durch den Anblick desselben erlange zergliedere, sondern ich muß auch mehrere Merkmale die nicht in meinem Begrif lagen, zusammensuchen und mir vorstellen. Durch Experimente werde ich finden daß das Gold duktil sey, daß es im Feuer nicht verfliege etc. etc. welches ich beym bloßen Anblick nicht wüste.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-014",
     "kind": "text",
     "aa": 417,
     "text": "Deutliche Begriffe machen und Begriffe deutlich machen sind unterschiedene Handlungen. (Wolff macht in seiner Philosophie deutliche Begriffe, er macht aber nicht Begriffe deutlich.) Deutliche Begriffe machen ist per synthesin. Gegebene Begriffe deutlich machen ist offt per analysin auch per synthesin.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-015",
     "kind": "text",
     "aa": 417,
     "text": "Durch die Erfahrung kann ich Begriffe per synthesin deutlich machen. Vernunfftbegriffe werden immer deutlich per analysin. Empirische Begriffe per synthesin.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-016",
     "kind": "text",
     "aa": 417,
     "text": "Wenn also Begriffe gegeben werden und zwar es sey durch Vernunfft oder Erfahrung und sie sollen deutlich gemacht werden, so kann das nur geschehen per analysin. Ich werde da nicht Experimente machen, ich vergleiche nur meine Urtheile mit den Urtheilen der allgemeinen Vernunfft.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s44-017",
     "kind": "text",
     "aa": 417,
     "aaEnd": 418,
     "pages": [
      {
       "p": 418,
       "i": 319
      }
     ],
     "text": "Wenn ich mir selbst deutliche Begriffe machen soll, so sind das meine Erfahrungsbegriffe. Wollte ich nun z. E. einen deutlichen Begriff vom Quecksilber haben, so würde ich ihn nicht dadurch bekommen, daß ich meinen Begrif davon analysire; sondern ich muß Versuche anstellen und neue Merkmale suchen. Da werde ich z. E. finden, daß der ? vir. die Metalle auflöset, in der Kälte verhärtet etc. etc.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s44-018",
     "kind": "text",
     "aa": 418,
     "text": "Wenn ich also einen deutlichen Begrif machen soll, so muß ich den Begrif zusammt der Deutlichkeit, die Materie zusammt der Form hervorbringen. Wenn ich aber einen gegebenen Begrif deutlich mache, so mache ich die Form neu, ich gebe ihm die Form der Deutlichkeit.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s44-019",
     "kind": "text",
     "aa": 418,
     "ms": [
      {
       "p": 113,
       "i": 557
      }
     ],
     "text": "Die Mathematik macht niemals verworrene Begriffe deutlich, sondern sie bringt willkürlich erdachte Begriffe zusammt ihrer Deutlichkeit hervor. Der einzige Begriff der ihr gegeben ist, ist der Begrif des Raumes. Allein den erklärt sie auch niemals und setzt das voraus daß das schon jeder wisse. So wie Augustinus da er gefragt wurde was die Zeit ist, sagte : das was ich und du wol wissen. Alle Begriffe die die Mathematik in ihren Definitionen deutlich macht, wohnten uns nicht vorher verworren bey, sondern sie erdachte sie und brachte also den Begrif mitsammt seiner Deutlichkeit aus sich selbst hervor.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-020",
     "kind": "text",
     "aa": 418,
     "text": "Wenn wir uns Verstandesbegriffe machen, die durch keine Erfahrung aus unmittelbarer Anschauung, sondern aus der Vernunf ft selbst gezogen werden, so werden die nur deutlich gemacht per analysin. Verstandesbegriffe aber werden hervorgebracht per synthesin. Die Mathematic erdenkt sich Hypothesen. Wir wollten eine Linie um einen Punct führen und den Raum den sie einschließt Zirkel nennen. Aber was sie jetzt aus diesem Zirkel schließt, das sind keine Erdichtungen.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-021",
     "kind": "text",
     "aa": 418,
     "text": "Wir wollen die Gradation der Begriffe anzeigen : der erste Grad ist sich etwas vorstellen. Einen geringern Grad giebt es nicht: Repraesentare.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s44-022",
     "kind": "text",
     "aa": 418,
     "text": "Der 2te etwas wissen, noße, mit Bewußtseyn, sich vorstellen.",
     "ocrConf": 58
    },
    {
     "id": "philippi-s44-023",
     "kind": "text",
     "aa": 418,
     "text": "Der 3 etwas kennen: in der Vergleichung mit andern unterscheiden können ; wissen mit welchem andern Dinge es einerley ist und von welchen es unterschieden ist. Z. E. Wenn man unter einer Menge Leute seinen Anverwandten kennt. Noße.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s44-024",
     "kind": "text",
     "aa": 418,
     "text": "Der 4 etwas verstehen, etwas durch den Verstand deutlich erkennen. Intelligere.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s44-025",
     "kind": "text",
     "aa": 418,
     "aaEnd": 419,
     "pages": [
      {
       "p": 419,
       "i": 230
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 720,
       "raw": "ns",
       "unresolved": true
      },
      {
       "p": null,
       "i": 1027,
       "raw": "uz",
       "unresolved": true
      }
     ],
     "text": "Der 5 etwas einsehen ist durch die Vernunfft oder durch Schlüsse etwas erkennen. Per rationem aliquid cognoscere. Z. E. Es können viele die Muscheln kennen. Aber einsehen was der Grund der Emaillation der kalkartigen Schaale ist, und daß, da die Kunst nur durch Glaßsteine im Feuer eine Emaillation hervorbringt, die See diese durch kalkartige Sterne machen könne; diese Einsicht hat nicht jeder. Alle Geheimnisse müssen verstanden werden, sonst giengen sie uns nichts an, aber eingesehen werden können sie nicht. Die absolute Notwendigkeit kann keiner einsehen. Die Freiheit verstehe ich wol aber ich sehe nicht ein, daß ich aus mir selbst handle ohne daß mich was bestimmt, da doch alles durch die Natur gelenkt wird. Der sechste Grad ist etwas begreifen, comprehendere. Etwas durch die Vernunfft in dem Grad erkennen als es zum Zweck zureichend ist. Als ich einen Blinden frug was er wol zu sehen wünsche, sagte er ein Haus, denn einen Menschen kann ich mir schon vorstellen, weil ich ihn umfassen kann aber ein Haus nicht. Licht und Farbe kennen wir, aber wir verstehens nicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s44-026",
     "kind": "text",
     "aa": 419,
     "text": "5) Wenn ich durch die Vernunfft einsehe, so subordinire ich die Merkmale.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s44-027",
     "kind": "text",
     "aa": 419,
     "text": "Z. E. Schießpulver besteht aus Salpeter, Schwefel und Kohlen.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s44-028",
     "kind": "text",
     "aa": 419,
     "ms": [
      {
       "p": null,
       "i": 254,
       "raw": "iis",
       "unresolved": true
      }
     ],
     "text": "Ob wir viele Dinge nicht verstehen, durch Verstand ? Ja, besonders in der Theol. nat. Z. E. die Ewigkeit Gottes, den Anfang der Welt. Da können wir uns keinen Begrif durch den Verstand machen. Wir gehen nur am Faden der Analogie fort. Der Begrif der Freiheit etc.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s44-029",
     "kind": "text",
     "aa": 419,
     "text": "Wenn man gar zu sehr auf die Theilvorstellungen sieht und sie anhäufft, so wird der Verstand durch die Menge verworren. Daher tragen die vielen Distinctionen mehr zur Verwirrung als Deutlichkeit bey.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s44-030",
     "kind": "text",
     "aa": 419,
     "text": "Begriffe sind relativisch zureichend entweder",
     "ocrConf": 52
    },
    {
     "id": "philippi-s44-031",
     "kind": "text",
     "aa": 419,
     "text": "1 . in einiger Absicht oder",
     "ocrConf": 41
    },
    {
     "id": "philippi-s44-032",
     "kind": "text",
     "aa": 419,
     "text": "2. in aller Absicht.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s44-033",
     "kind": "text",
     "aa": 419,
     "text": "Der Autor nennt diesen höchsten Grad concipere aber das zeiget nur den niedrigsten Grad an.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s44-034",
     "kind": "text",
     "aa": 419,
     "text": "Das kommt von Gewohnheit und Uebung, daß ein Kopf zur Klarheit und Deutlichkeit geneigt ist. Die Mathematic trägt viel dazu bey.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s45",
   "title": "Von der Gewißheit.",
   "titleSrc": "heading",
   "headings": [
    "Von der Gewißheit."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s45-001",
     "kind": "heading",
     "aa": 419,
     "text": "Von der Gewißheit."
    },
    {
     "id": "philippi-s45-002",
     "kind": "text",
     "aa": 419,
     "text": "Der Autor redet von der gelehrten Erkenntniß, wir wollen aber von der Gewißheit der Erkenntniß reden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s45-003",
     "kind": "text",
     "aa": 420,
     "text": "Nur in Urtheilen wird ein Unterschied gemacht zwischen dem was wahr ist und dem was gewiß ist. Wahrheit ist was aufs Objekt geht. Gewißheit ist im Subjekt.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s45-004",
     "kind": "text",
     "aa": 420,
     "text": "Es können gewisse Gründe der Wahrheit seyn, die uns überführen unsre Erkenntniß für wahr zu halten. Wenn diese Gründe aber nicht alle Zweif el und Bedenklichkeiten die uns einfallen könnten, aufheben, so bleibt unsre Erkenntniß zwar wahr, aber sie ist nicht gewiß. Zur Gewißheit wird erfordert, daß vollständige Gründe da sind uns ganz zu überzeugen. Gewißheit ist also im Subject; Wahrheit im Object. Beyde sind nur darin verschieden, daß bey der WTahrheit genug ist, wenn Gründe zu derselben da sind ; bey der Gewißheit aber erfordert wird, daß diese Gründe fähig sind in einem Subject Ueberzeugung zu wirken.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s45-005",
     "kind": "text",
     "aa": 420,
     "text": "Wenn meine Erkenntniß wahr seyn soll, so muß sie mit dem Object stimmen. Wenn ich was durch die Vernunfft erkenne und es stimmt mit den Sinnen, so ist es gewiß. Die subjective Gewißheit entspringt aus der Beobachtung daß es mit meinen und anderen ihren Erkenntmssen übereinstimmt. Man ist sinnlich gewiß von vielen allgemeinen Sätzen",
     "ocrConf": 43
    },
    {
     "id": "philippi-s45-006",
     "kind": "text",
     "aa": 420,
     "text": "1. Die gröste Gewißheit oder Ueberzeugung ist in derMathematick. Diese ist blos eine Gewißheit der Form. In abstracto aber ist sie grösser als in concreto. Bey aller Anwendung der mathematischen Gewißheit ist noch eine grosse Sinnlichkeit.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s45-007",
     "kind": "text",
     "aa": 420,
     "text": "Es ist wahr, daß im Monde Einwohner sind d. i. wir haben Gründe dies zu behaupten, aber es ist nicht gewiß, das ist, die Gründe sind noch nicht fähig ein jedes Subjekt zu überzeugen. Es können immer Schwierigkeiten gemacht werden.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s45-008",
     "kind": "text",
     "aa": 420,
     "ms": [
      {
       "p": 114,
       "i": 163
      }
     ],
     "text": "So halten die Menschen offt etwas für wahr, ob es gleich nicht gewiß ist. Wenn in einer Erkenntniß nicht alles ist was dieselbe bestätigt; so bin ich nicht gewiß. Z. E. Keine Substanz kann passiv seyn oder leiden ohne daß sie zugleich in Thätigkeit ist. Das kann keiner in einem sinnlichen Exempel zeigen. Es Hegt in den Begriffen des Leidens.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s45-009",
     "kind": "text",
     "aa": 420,
     "aaEnd": 421,
     "pages": [
      {
       "p": 421,
       "i": 266
      }
     ],
     "text": "Wir müssen nicht alles für evident halten. Die Menschen sind dazu geneigt besonders in solchen Sätzen, die eine grosse moralische Wichtigkeit haben. Z. E. Ein Beweis vom Daseyn Gottes kommt uns evident vor ob er es gleich nicht ist. Es gehört viel mehr zur Evidenz. Ob zwar in der Gewißheit der moralischen Wahrheiten vieles ist was der mathematischen ähnlich ist, so ist doch ein Unterschied.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s45-010",
     "kind": "text",
     "aa": 421,
     "text": "Gewißheit und Wahrheit sind verschieden in Ansehung des subjectiven Vorwahrhaltens.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s45-011",
     "kind": "text",
     "aa": 421,
     "text": "Wenn ein Beweis für einen Satz ist ; so macht er, wenn er zureichend ist, gewiß. Wenn viele sind, so ist zu vermuthen, daß einzeln keiner von diesen gewiß macht. Ist dies, so werden sie zusammengenommen auch nicht eine grössere Gewißheit wirken. Denn die Gewißheit kann nicht vermehrt werden ; denn sie ist das maximum des Vorwahrhaltens.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s45-012",
     "kind": "text",
     "aa": 421,
     "text": "Die Gewißheit ist ein Gefühl der menschlichen Seele.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s45-013",
     "kind": "text",
     "aa": 421,
     "text": "Grade des Vorwahrhaltens die sich unterscheiden durch die Sache sind 1. etwas wissen 2. glauben 3. meynen. Vermuthung gründet sich auf der Verschiedenheit des Raumes und der Zeit, denen unsre Erkenntniß kann unterworfen werden. Zum Gewißseyn gehört sehr viel. Praktische Wahrheiten können, wenn wir sie auch nicht für gewiß erklären können, hinreichend seyn, uns zu bewegen darnach zu handeln. Socrates glaubte ein künfftiges Leben und starb darauf. Er sagt selbst, er glaube ein künfftiges Leben, nicht er wisse es.",
     "dehyphenated": 2,
     "ocrConf": 39
    },
    {
     "id": "philippi-s45-014",
     "kind": "text",
     "aa": 421,
     "text": "Es giebt einen Glauben der entscheidend ist. so daß man nach dem Gegentheil nicht fragt; und es nicht für würdig hält, es zu untersuchen. Ein solcher Glaube wirkt völlige aber NB praktische Gewißheit. Das Wissen ist theoretische Gewißheit.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s45-015",
     "kind": "text",
     "aa": 421,
     "ms": [
      {
       "p": null,
       "i": 255,
       "raw": "im",
       "unresolved": true
      }
     ],
     "text": "In der Mitte zwischen Wissen und Glauben steht meynen. Es ist ein unvollständiges theoretisches Vorwahrhalten, sofern ich mir bewust bin daß es unzureichend ist. Wenn auch nur noch der kleinste Grad des Vorwahrhaltens fehlt, so ist es schon bloß Meynung. Glaube wird contradistinguirt der Gewißheit nicht der Erkenntniß der Vernunfft. Demi alsdenn müsste bey allen irrationalen oder historischen Erkenntnissen nur Glauben statt finden. Allein es giebt Gewißheit bey denselben. Es ist z. E. gewiß daß Madrid die Hauptstadt in Spanien ist. Beym Glauben ist doch immer eine Art von Ungewißheit. Wenn die Menschen wüsten daß die Belohnungen für ihr Wolverhalten ganz gewiß wären, so würde ihre Moralität nicht so rein seyn. Interesse würde sie vielleicht denn zur Tugend allein bewogen, nicht Gefühl von Pflicht.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s45-016",
     "kind": "text",
     "aa": 421,
     "text": "Zwischen Glauben und Wissen ist der Unterschied nicht completudinis. Der Glaube hat praktische, das Wissen theoi'etische Completudinem.",
     "dehyphenated": 2,
     "ocrConf": 34
    },
    {
     "id": "philippi-s45-017",
     "kind": "text",
     "aa": 422,
     "text": "Der Glaube ist, wie aus allem dem erhellet, eine vollständige praktische Gewißheit, obwol nicht theoretische. Me^ynung wird mit dem Wissen verglichen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s45-018",
     "kind": "text",
     "aa": 422,
     "text": "Es ist besonders, daß einige Logiker ein Argument a tuto oder ab utili in der Logik gebracht, wo man eine Sache für wahr hält wegen des grossen Nutzens den man davon hat und wegen des Schadens der daraus entspränge wenn man sie nicht für wahr hielte. Solche Argumente sind der Philosophie nachtheilig, sie heben das Ansehen der Vernunfft auf.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s45-019",
     "kind": "text",
     "aa": 422,
     "text": "Eine Erkenntniß ist unleugbar, wenn keine Gründe zur Gegenmeynung da sind; wenn es unmöglich ist ihr zu widersprechen. Wenn eine Erkenntniß so überzeugend ist, daß der andere nur nicht gestehen will, daß er überzeugt ist, so ist das leugnen. Wer etwas leugnet muß Scheingründe haben, sonst schämt er sich.",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s45-020",
     "kind": "text",
     "aa": 422,
     "ms": [
      {
       "p": null,
       "i": 592,
       "raw": "U6",
       "unresolved": true
      }
     ],
     "text": "Wenn ich jemanden von einem Satz überzeugen will, so muß ich nicht mit diktatorischen Ausdrücken und angemaßter Superiorität meine Beweise ihm vorsagen ; seine Selbsthebe wird dadurch empört, er will sich meinem Stolz nicht unterwerfen; ich erreiche nicht meinen Zweck. Ich muß blos die Gründe ihm freundschafftlich vortragen. Wendet er was ein, so muß ich seine Einwürfe von der Seite ansehen, wo er sie ansieht, ich muß sie billigen daß sie unter den Bedingungen die er annimmt richtig sind; dann muß ich ihm aber zeigen daß die Bedingungen anders sind. Ein solches Verfahren, da einer die Meinung des andern erklären hilfft, ist zur Untersuchung der Wahrheit vortheillrafft.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s45-021",
     "kind": "text",
     "aa": 422,
     "text": "Mein Verstand will sich keinem Verstände unterwerfen, nur gründen will er sich. Sonst ist bey solcher Handlung alles widerstrebend in der Seele.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s45-022",
     "kind": "text",
     "aa": 422,
     "text": "Ausgemacht ist eine Erkenntniß wenn sie so beschaffen ist, daß da sie ist bestritten worden, sie völlig entschieden und von allem fernem Streit befreyet ist. Circulation des Bluts, das Copernicanische System sind ausgemachte Sätze. Kürzlich ist Monatessa ein Doctor in Padua der der lezte Anfechter des copernicanischen Lehrgebäudes war verstorben. Man muß sich nicht hierinn übereilen. Bisweilen ist etwas in einem Zeitalter ausgemacht, was es in einem andern nicht war. Es giebt viele Dinge die niemals ausgemacht sind und doch für wahr gehalten werden. Viele Religionssätze sind von der Art. In der Mathematik ist nichts ausgemachtes: denn es ist nichts bestrittenes.",
     "dehyphenated": 3,
     "ocrConf": 32
    },
    {
     "id": "philippi-s45-023",
     "kind": "text",
     "aa": 423,
     "text": "Eine gewisse Erkenntniß heißt gründlich, in sofern alle Gründe deutlich erkannt werden die Gewißheit wirken können. Gründlichkeit wird der Seichtigkeit entgegengesetzt; wo alles ohen schwimmt und nicht tief ist, wo alles nur superficial ist. Democrit sagt, die Wahrheit sey ein tiefer Brunnen.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s45-024",
     "kind": "text",
     "aa": 423,
     "text": "Tief ist eine Erkenntniß, wenn die Merkmale m ihrer Subordination sehr weit fortgehen. Ausgehreitet, wenn die Reihe der coordinirten Merkmale weit fortgeht.",
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s46",
   "title": "Vom Beyfall.",
   "titleSrc": "heading",
   "headings": [
    "Vom Beyfall."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s46-001",
     "kind": "heading",
     "aa": 423,
     "text": "Vom Beyfall."
    },
    {
     "id": "philippi-s46-002",
     "kind": "text",
     "aa": 423,
     "text": "Läßt sich das wol sagen: seinen Beyfall gehen? Beruht es auf unserm Belieben, ob wir ihn geben wollen oder nicht ? Ist also Beifall ein actus arbitrii ? Wenn er es nicht ist, sondern wenn es ein Zustand ist des Yorwahrhaltens, wozu ich durch Gründe gezwungen werde ; ohne daß mein Wille was dabey gilt; warum braucht man denn die Ausdrücke. In der Gewalt der Gründe liegt die Macht obtorto collo den Beifall abzudringen. Der Beyfall wird entrissen nicht gegeben.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s46-003",
     "kind": "text",
     "aa": 423,
     "ms": [
      {
       "p": null,
       "i": 396,
       "raw": "in",
       "unresolved": true
      }
     ],
     "text": "Beyfall ist eine positive Erkenntniß. Hat die Freyheit einen Einfluß auf den Beyfall ? Unmittelbar nicht. Der Beyfall muß von Gründen die nach Regeln der Erkenntniß und dem Willen nach gemäß sind zuwege gebracht werden. Mittelbar hat die Freyheit einen Einfluß auf den Beyfall; indem wir die Gründe nicht untersuchen wollen. Mithin heißt: den Beyfall zurückhalten soviel als gar nicht urtheilen. Die Neigung und Gewohnheit haben indirecte einen Einfluß auf den Beyfall. Auch Nachahmung so. Die Neigung nachzuahmen ist in der Kindheit am größten, indem ein Kind unfähig ist, seinen Verstand zu gebrauchen. Die Vollkommenheit der Erziehung beruht auch darauf, daß sie frühzeitig das Nachahmen abbringe.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s46-004",
     "kind": "text",
     "aa": 423,
     "ms": [
      {
       "p": 116,
       "i": 0,
       "approx": true
      },
      {
       "p": 117,
       "i": 184,
       "raw": "•'*",
       "inferred": true
      }
     ],
     "text": "Wenn unterm Beyfall die Declaration des Beyfalls verstanden wird : so kann er gegeben und zurückgenommen werden. Hier ist aber die Rede nicht von der Aussage sondern vom Zustand des Gemüths, ob es durch die Gründe bewogen werde übereinzustimmen oder nicht.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s46-005",
     "kind": "text",
     "aa": 423,
     "text": "Es giebt gewisse Gründe in Ansehung deren wir uns genöthigt finden beyzufallen. Aber bey vielen können wir dagegen unsern Beyfall aufschieben zum wenigsten ist da die Zurückhaltung des Beyfalls unter unserm Willen.",
     "dehyphenated": 1,
     "ocrConf": 34
    },
    {
     "id": "philippi-s46-006",
     "kind": "text",
     "aa": 424,
     "text": "Denn hängt von unsrem Willen ab die Untersuchung durch Gründe. Der Beyfall kan nicht anders als durch Einsicht in die Gründe erhalten werden. Ein Professor in Padua der steif auf den Aristotel hielt, wollte den neuen Erfindungen der Saturnus Monden rncht Bejdall geben. Er Avollte nicht durchs Fernglaß sehen, da man ihn dessen überführen wollte.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s46-007",
     "kind": "text",
     "aa": 424,
     "text": "Der Beyfall kann nicht gefordert werden als wo mathematische oder Erfahrungsevidenz ist. Der vornehmste Character des Philosophen ist der, daß er seinen Beyfall zurückzuhalten weiß. Wer geschwind überzeugt ist, dessen Beyfall dauret nicht lange, und der findt offt Ursache Palinodie zu singen. Man bleibe lieber etwas länger unentschlüssig, als daß man einen falschen Weg gehe, oder vergebliche Arbeit thue.",
     "dehyphenated": 1,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s47",
   "title": "Vom Vorurtheil.",
   "titleSrc": "heading",
   "headings": [
    "Vom Vorurtheil."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s47-001",
     "kind": "heading",
     "aa": 424,
     "text": "Vom Vorurtheil."
    },
    {
     "id": "philippi-s47-002",
     "kind": "text",
     "aa": 424,
     "text": "Einleitung. Ueberlegen heißt etwas mit den Gesetzen des Verstandes und der Vernunfft vergleichen. Wenn der Verstand seine Urtheile nicht mit seinen Gesetzen vergleicht ; so nimmt er sie an ohne Ueberlegung.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s47-003",
     "kind": "text",
     "aa": 424,
     "text": "Untersuchen heißt mittelbar oder vermittelst anderer Instrumente der Wahrheit die Ueberlegung anstellen. Also nicht alles was überlegt wird, wird untersucht.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s47-004",
     "kind": "text",
     "aa": 424,
     "text": "Nicht alle Erkenntnisse haben Untersuchung, aber alle haben Ueberlegung nöthig. Die ersten Grundsätze der Vernunfft dürfen nicht mittelbar mit den Verstandesgesetzen verglichen werden, aber wol unmittelbar, d. i. man darf sie nicht untersuchen, aber man muß sie überlegen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s47-005",
     "kind": "text",
     "aa": 424,
     "aaEnd": 425,
     "pages": [
      {
       "p": 425,
       "i": 736
      }
     ],
     "ms": [
      {
       "p": 118,
       "i": 356,
       "raw": "11g",
       "inferred": true
      }
     ],
     "text": "Ohne Ueberlegung reden wir leere Worte. Ein Uebereilen im Urtheil ist Mangel der Untersuchung. Der Mangel der Ueberlegung im Urtheil ist Vorurtheil. Es bedeutet aber das Vorurtheil eigentlich nicht so wol ein Urtheil welches ohne Ueberlegung geschieht ; sondern es bedeutet eine Regel, ein gewisser Canon ohne Ueberlegung zu urtheilen. Nicht genug daß wir im Vorurtheil unser Urtheil mit den Gesetzen der Vernunfft zu vergleichen unterlaßen ; wir vergleichen es noch mit einem andern angenommenen Gesetze z. E. mit der GeAvohnheit, Neigung. Es macht die blosse Uebereilung, da man nicht überlegt, noch kein Vorurtheil aus. Ein allgemeines Gesetz welches ein Grund ist der Urtheile ohne Ueberlegung ist ein Vorurtheil. Den Vorurt heilen werden die Grundsätze entgegengesetzt. So wie jene Principia sind zu urtheilen ohne Ueberlegung ; so diese Principia zu urtheilen mit Ueberlegung. Nicht einzelne Urtheile werden den Vorurtheilen entgegengesetzt. Wenn ein Vater nicht glaubt, daß seni Sohn in der Schule so gottlos ist, so ist das eben so wenig ein Vorurtheil, als wenn ich bey Lesung eines Titelblats vom Buch selbst urtheile.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 39
    },
    {
     "id": "philippi-s47-006",
     "kind": "text",
     "aa": 425,
     "text": "Die Form, nach der die Begriffe wenn sie ohne Ueberlegung verbunden werden, sich modeln sind",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s47-007",
     "kind": "text",
     "aa": 425,
     "text": "1. Nachahmung",
     "ocrConf": 52
    },
    {
     "id": "philippi-s47-008",
     "kind": "text",
     "aa": 425,
     "text": "2. Gewohnheit",
     "ocrConf": 23
    },
    {
     "id": "philippi-s47-009",
     "kind": "text",
     "aa": 425,
     "text": "3. Neigung. Das sind die 3 Quellen der Vorurtheile.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s47-010",
     "kind": "text",
     "aa": 425,
     "text": "Unsre Urtheile müssen wir immer mit etwas vergleichen. Vergleichen wirs nicht mit dem Verstände ; so vergleichen wir es mit der allgemeinen Mode, oder mit dem Habitu auf eine gewisse Art zu urtheilen; oder mit dem Ruhm. So offt wir auf diese letztere Art urtheilen; so urtheilen wir unüberlegt. Allemal ist ein Vorurtheil da, wenn wir unser Urtheil nicht vergleichen mit dem Verstand sondern mit andern Principien die den Verstand lenken können.",
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "philippi-s47-011",
     "kind": "text",
     "aa": 425,
     "ms": [
      {
       "p": 119,
       "i": 595,
       "raw": "n»",
       "inferred": true
      }
     ],
     "text": "Ein Analogon vom Vorurtheil ist das vorläufige Urtheil. Das ist ein Urtheil welches vor der Untersuchung vorhergeht mit dem Bewustseyn daß eine Untersuchung nöthig sey. Viele Untersuchungen kann man nicht gleich anstellen; ich darf aber deßwegen nicht ohne alles Urtheilen seyn. Vor der Untersuchung werde ich doch einige Gründe finden, die wo nicht zum Entscheiden so doch zum Urtheilen hinreichend sind. So viel diese mir an die Hand bieten kann ich immer urtheilen. Z. E. Ich lese den Meßkatalogus ; so muß ich wenn ich mich entschlüssen will ein Buch zu lesen vorläufig was davon urtheilen. Es sind die vorläufigen Urtheile sehr nöthig und eine besondere Stärke des Genies zeigt der, der aus wenigen Datis viel Schlüssen kann. Ehe etwas zum Gegenstande der Untersuchung vorgenommen wild, muß jeder was vorläufig urtheilen. Es ist auch den Menschen dieses sehr gewöhnlich. Aus den wenigsten Datis z. E. aus dem blossen Namen Schlüssen sie schon was.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s47-012",
     "kind": "text",
     "aa": 425,
     "aaEnd": 426,
     "pages": [
      {
       "p": 426,
       "i": 210
      }
     ],
     "text": "Man gebe sich Mühe in Schrifften und Gesellschat 't t en das vorläufige Urtheil uns günstig zu machen. Denn dieses vorläufige Urtheil ist das Substratum alles dessen was der Verstand in der Fol^e urtheilet. Er bezieht sich immer darauf wenn er auch bey angestellter Untersuchung ihre Unrichtigkeit einsieht. Mehrentheils dient das vorläufige Urtheil zum Entscheiden. So ungern mag der Verstand die Falte die er einmal annimmt ändern! Er mag nicht gern umsonst geurtheilt haben und alles umarbeiten, vornehmlich wenn Gewohnheit dazu kommt. Alle Erfindungen in der Welt haben ihren Grund in den vorläufigen Urt heilen. Der Verstand muß schon vorher was Schlüssen und die Regel nach welcher er die Untersuchung anstellen will festsetzen, damit er nicht auf ein Gerathewol versuche. In Ansehung vieler Sachen können wir nicht zur Untersuchung gelangen, da können wir uns doch mit vorläufigen Urtheilen dazu praepariren. Das vorläufige Urtheil ist ein wahres Urtheil nur es ist unvollständig. So weit die wenigen Data reichen, so weit ists richtig. Wenn ich einen Menschen mit Pracht und Bedienten einhergehen sehe; wenn ich in dem Anbbck eines andern redHche Züge des Gesichts bemerke ; so urtheile ich jener sey reich, dieser gutartig. Gesetzt jener sey mehr schuldig als er bezahlen wird ; gesetzt dieser sey ein Heuchler : so habe ich doch aus den wenigen Datis die mir zu Theil worden richtig geurtheilt. Ich entscheide im vorläufigen Urtheil nichts ; ich sage nur daß aus dem was ich weiß diese oder jene Folge flüsse ; ich mags errathen haben oder nicht. Es ist nicht falsch; nur es ist incomplet und drückt das Verhältniß der Urtheile zu unzulänglichen Gründen aus. Hält man aber ein vorläufiges Urtheil für entscheidend; so ist das Vorurtheil und Uebereilung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 39
    },
    {
     "id": "philippi-s47-013",
     "kind": "text",
     "aa": 426,
     "ms": [
      {
       "p": 120,
       "i": 0
      }
     ],
     "text": "Vorurtheile sind was ganz anders. Das Schädliche und Tadelhaffte derselben besteht nicht darinn. daß wir irren ; wir können offt die Wahrheit treffen, sondern darum, daß wir einen falschen modum cognoscendi annehmen und den wahren aufheben. Es kommt nicht so darauf an was man urtheilt, sondern wie man urtheilt. Einige glauben, es gäbe nützliche Vorurtheile. Das sind aber die, die andren einen blmden Gehorsam aufbürden und dadurch alle Erkenntniß aufheben wollen. Es kommt darauf an, nach welcher Methode man geurtheilt.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s47-014",
     "kind": "text",
     "aa": 426,
     "text": "Das Urtheil unterscheidet sich vom Vorurtheil nicht der Materie sondern nur der Form nach. Auch Wahrheiten muß man verwerfen wenn sie aus Vorurtheil herkommen. Denn was würde daraus werden wenn die Methode herrschend und die einzige wäre ? Die Logik ist dawider ein Mittel. Manche lachen über das Vorurtheil anderer, da sie selbst an einem andern krank sind.",
     "ocrConf": 35
    }
   ]
  },
  {
   "id": "s48",
   "title": "Anwendung.",
   "titleSrc": "heading",
   "headings": [
    "Anwendung."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s48-001",
     "kind": "heading",
     "aa": 427,
     "text": "Anwendung."
    },
    {
     "id": "philippi-s48-002",
     "kind": "text",
     "aa": 427,
     "text": "Es giebt Vorurtheile des Verstandes",
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-003",
     "kind": "text",
     "aa": 427,
     "text": "Es giebt Vorurtheile des Geschmaks.",
     "ocrConf": 32
    },
    {
     "id": "philippi-s48-004",
     "kind": "text",
     "aa": 427,
     "text": "Das mächtigste Vorurtheil des Geschmaks ist die Nachahmung. Das geht so weit, daß der scharfsinnigste Philosoph nicht die Grenze ausspühren kann. Offt preisen ganze Völker einen Gebrauch oder sonst etwas für die wahre Schönheit, der das Jahrhundert lächerlich und abenteuerlich macht. Da zeigt sich denn am Ende daß man sein Urtheil nicht mit dem Geschmack sondern mit der Gewohnheit verglichen.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-005",
     "kind": "text",
     "aa": 427,
     "text": "Vorurtheile des Geschmaks sind die Gründe etwas zu billigen nicht aus Vorgleiehung mit unserni, sondern einem fremden Geschmack Vorurtheil des Verstandes ist etwas, was der Verstand, seiner Gesetze uneingedenk, für seine Regel annimmt.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-006",
     "kind": "text",
     "aa": 427,
     "text": "Wir haben günstige und ungüstige Vorurtheile. Alle haben einen Stamm. Wir merken",
     "ocrConf": 37
    },
    {
     "id": "philippi-s48-007",
     "kind": "text",
     "aa": 427,
     "ms": [
      {
       "p": 121,
       "i": 128
      }
     ],
     "text": "1 . logische Egoisterey. Ein psychologischer Egoist ist der da behauptet, daß er allein existire. In der Psychologie untersucht man wie diese Meynung die ein wichtiges Problem für Philosophen ist hat entspringen können. Ein moralischer Egoist ist der nur allein für sich da zu sejm glaubt und alles glaubt zu seinem Vortheil machen zu können.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-008",
     "kind": "text",
     "aa": 427,
     "text": "Die Ursache der logischen Egoisterey ist",
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-009",
     "kind": "text",
     "aa": 427,
     "text": "a. Eigenliebe, da ich mich allein als einsichtsvoll hochhalte und andre verachte; da ich meine Erkenntniß für vollkommen halte aus Philautie.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-010",
     "kind": "text",
     "aa": 427,
     "text": "b. Eigendünkel, da ich andrer Meynungen nicht Gehör geben will.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s48-011",
     "kind": "text",
     "aa": 427,
     "text": "I )er logische Egoismus besteht darin, daß ich alle Urtheile nur annehme in Vergleichung mit dem meinigen, so fern sie mit ihm stimmen : und um die Uebereinstimmung mit dem Verstand anderer unbekümmert und gleichgültig bin. Wenn etwas andern unbegreiflich ist, glaubt er es komme daher weil sie es nicht einsehen. Diese logische Egoisterey, eine Qvelle vieler wichtiger Folgen fehlt darin, daß sie das eigentliche subjektive Merkmal der Wahrheit, welches in der Uebereinstimmung der Erkenntniß mit dem allgemeinen Verstände besteht, verwirfft und die Uebereinstimmung mit einer einzeln Vernunfft für ein hinlängliches Merkmal der Wahrheit hält.",
     "dehyphenated": 5,
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-012",
     "kind": "text",
     "aa": 428,
     "text": "Der Egoiste verwandelt alle Erkenntniß auch die Vernunfftsätze selbst in Schein (apparentia) indem er ihnen eine Privatgültigkeit giebt.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-013",
     "kind": "text",
     "aa": 428,
     "ms": [
      {
       "p": null,
       "i": 876,
       "raw": "\\%%",
       "unresolved": true
      }
     ],
     "text": "Empfindung und Gefühl haben eine Privatgültigkeit; denn da erkenne ich nicht die Dinge selbst, sondern nur in wie fern mein leidender Zustand modificirt ist. Aber Verstandeserkenntniß soll allgemeingültig seyn Denn diese erkennt die Dinge wie sie sind. Also muß man sie auch vergleichen nicht nur mit meiner Vernunfft sondern mit der allgemeinen. Es fühlt auch schon der Mensch in sich eine Neigung seine Urtheile mit anderer ihrer zu vergleichen und dadurch zu verificiren. Nicht Eitelkeit ist der Grund von dem daß unser Verstand so communicativ ist, sondern ein Instmct. Bey gemeinen Leuten sieht man ihn. Z.E. Wenn einer am Himmel ein Nordlicht sieht, so rufft er seinen Nachbar. Ein Gelehrter in einer einsamen Wüste, oder unter dem wilden Volk der Negern würde alle Spekulation aufgeben. Weil er nicht sicher wäre, daß seine Urtheile nicht Schein seyn. Mein Trieb aber, meine Einsichten andern mitzutheilen würde sehr unbillig und unnütz seyn, wenn ich nicht auch Receptiuitat hätte des andern seine Urtheile anzuhören.",
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "philippi-s48-014",
     "kind": "text",
     "aa": 428,
     "text": "Wenn man seine Einsichten mit denjenigen anderer vergleicht und aus dem Verhältniß der Uebereinstimmung mit anderer Vernunfft die Wahrheit entscheidet, ist das der logische Pluralism.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-015",
     "kind": "text",
     "aa": 428,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "131",
       "unresolved": true
      }
     ],
     "text": "Man findet daß man auch schon bey Bemerkungen der Sinne andre zu Rathe zieht und andern, wenn es viele sind, mehr traut als sich selbst.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-016",
     "kind": "text",
     "aa": 428,
     "text": "Wenn uns ein fremdes Urtheil widerspricht, so ist das schon sehr wichtig.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-017",
     "kind": "text",
     "aa": 428,
     "ms": [
      {
       "p": null,
       "i": 114,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Bey Widerlegungen hat man darauf zu sehen, daß man fremde Verlas nunft mit der seinigen stimmend mache, nicht daß man die Irrthümer zeige.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-018",
     "kind": "text",
     "aa": 428,
     "text": "Ehrliebe ist ein abgeleiteter nicht ein Grundtrieb.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s48-019",
     "kind": "text",
     "aa": 428,
     "text": "Das Ansehen welches eine Menge hat; der Grad der Billigung den sie immer findet, die Verlegenheit in der sich jeder sieht wenn er vor einer Menge auftreten soll zu reden, ob man gleich weiß daß sie die Einsicht nicht hat die ich habe, bestätigen, daß die Theilnehmende Neigung des Verstandes ein Instinkt sey. Menge jagt Respect ein. Unwissenden dient sie zum Beweise ihrer Meynungen und zur Beruhigung ihrer Handlungen. Man gesellt sich gern zum grösten Haufen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-020",
     "kind": "text",
     "aa": 429,
     "text": "2. Nachahmung. Diese entspringt",
     "ocrConf": 30
    },
    {
     "id": "philippi-s48-021",
     "kind": "text",
     "aa": 429,
     "text": "1. aus Ehrerbietung gegen die Menge.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s48-022",
     "kind": "text",
     "aa": 429,
     "text": "2. aus Zuneigung gegen Personen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-023",
     "kind": "text",
     "aa": 429,
     "text": "Das erstere ist selbst im moralischen durch die Erfahrung bekannt. Man nimmt am liebsten die Meynung an die viele haben. Man sucht immer, es sej^ im Glück oder Unglücksfällen auch andre verwickelt und sich nicht isolirt zu sehen. Die Menge der Citationen aus den Alten wie bey Morhoff ist ein Resultat von diesem Vorurtheil.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-024",
     "kind": "text",
     "aa": 429,
     "text": "Das Ansehen einer Person bewegt uns offt seine Sätze so anzunehmen. als wenn man sie nur zu lernen hätte. Wer sich nicht selbst erheben kami, der sucht einen Mann über alle andere zu erheben; dadurch glaubt er zu erlangen, daß sich alle andere dem Ansehen dieses gepriesenen Weisen unterwerfen und ihm dadurch gleich werden. Man erwählt wenn man nichts als copiren kann ein Muster das man allen anpreißt. Dies entspringt öffters nicht aus besonderer Achtung, sondern aus Neide gegen andre denen man sonst nicht gleichkommen könnte.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-025",
     "kind": "text",
     "aa": 429,
     "ms": [
      {
       "p": null,
       "i": 200,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "a. Das Alterthum. Ein gemeines Principium liegt hier zum Grunde, da man glaubt daß alles durch die Länge der Zeit veralte und verschwinde. In diesem Vorurtheil liegt ein wahres Urtheil zum Grunde. Kin.ele Subjekte und Stücke der Natur veralten durch die Dauer; das Geschlecht aber veraltet niemals. In der Erhaltung der Arten steckt ein unaufklärliches Phänomenon, daß die Erzeugungskrafft nicht abnimmt und alle andre Kräffte auch nicht.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-026",
     "kind": "text",
     "aa": 429,
     "text": "Unter dem Alterthum stellen sich die Menschen die Ehrlichkeit und Rechtschaffenheit vor. Es herrschte bey den alten Griechen Frejmeit und Einfalt; die Ernährer des Geschmaks.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-027",
     "kind": "text",
     "aa": 429,
     "ms": [
      {
       "p": null,
       "i": 60,
       "raw": "m",
       "unresolved": true
      }
     ],
     "text": "Die Kinder die jetzt geboren werden sind nicht nur mit eben den Leibeskräfften, sondern auch Verstandesfähigkeiten begabt als vor 3000 Jahren.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s48-028",
     "kind": "text",
     "aa": 429,
     "aaEnd": 430,
     "pages": [
      {
       "p": 430,
       "i": 458
      }
     ],
     "text": "Ferner kann man sagen, daß man die Alten nicht nach einem Vorurtheil so schätzt sondern sie wirklich verdienen so geschätzt zu werden. Davon ist die Ursache diese: die Zeit sichtet alle Produkte des Verstandes und Geschmaks. Schlechte Produkte achtet man nicht und diese gehen also unter; die aber wegen ihrer besondern Vorzüge der Aufbehaltung sich würdigten, die konnten bleiben. Auf die Art ist der schöne Ausschuß der besten Muster übergebheben. Man muß also nicht dem ganzen Alterthum solche Meisterstücke zumuthen. Eben so wenn die späteste Nachwelt die Schrifften eines Newton und Hume lesen wird, und alle andre schlechte Schrifften werden verlornen gegangen seyn ; so würde sie unrecht Schlüssen daß zu unsrer Zeit lauter solche grosse Gelehrte gewesen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-029",
     "kind": "text",
     "aa": 430,
     "text": "Das Vorurtheil für das Alterthum entspringt",
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-030",
     "kind": "text",
     "aa": 430,
     "text": "1.) aus der Meynung, daß alle Schriften so vortreflich gewesen sind, als die so bis auf unsre Zeiten gekommen. Da diese doch nur die ausgesichteten der Besten sind und ein Schwärm von schlechten verlornen gegangen.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-031",
     "kind": "text",
     "aa": 430,
     "text": "2.) Weil die Alten keine Vorgänger hätten und ihnen daher der Weg zur Gelehrsamkeit sehr schwer ward. Man schätzt aus eben dem Grunde Wißenschaft am Frauenzimmer hoch.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-032",
     "kind": "text",
     "aa": 430,
     "text": "3.) Aus der Dankbarkeit die wir den Alten als unsern Lehrern schuldig sind.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s48-033",
     "kind": "text",
     "aa": 430,
     "text": "4.) Weil Gelehrsamkeit erfordert wird sie lesen und verstehen zu können.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s48-034",
     "kind": "text",
     "aa": 430,
     "text": "5.) Aus dem Vorurteil daß alles Veralte und schlimmer werde.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s48-035",
     "kind": "text",
     "aa": 430,
     "text": "Man hat Ursache für die alte Muster der Künste em günstig Urtheil zu fällen. Es ist besonders, daß wir nicht Dichter, nicht Redner kennen, die dem Virgil, Homer, Cicero, Demosthenes den Vorrang streitig machen konnten; die Bildhauerkunst und alle andere Sachen des Geschmacks sind da Muster.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-036",
     "kind": "text",
     "aa": 430,
     "text": "1. Eine Ursache kann seyn weil bey den Alten kein Wechsel der Moden war.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s48-037",
     "kind": "text",
     "aa": 430,
     "text": "Allen Sachen des Geschmaks ist nichts schädlicher als die Moden. Wir fallen indem wir am Nachäffen ein Vergnügen finden, zuletzt aufs seltsamste und abenteuerlichste und haltens dann für wunderschön.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-038",
     "kind": "text",
     "aa": 430,
     "text": "Die Alten, die keine Modelle vor sich hatten, brachten auch in ihre Werke kein gekünstelt Wesen. Ihr Geschmack war lauter und ganz Natur. Allem wir müssen uns immer nach Mustern bilden; thun wir es nicht, so werden wir getadelt.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-039",
     "kind": "text",
     "aa": 430,
     "aaEnd": 431,
     "pages": [
      {
       "p": 431,
       "i": 323
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 409,
       "raw": "M*",
       "unresolved": true
      }
     ],
     "text": "2. Bey den Alten war kein so grosser Unterschied zwischen Vornehmen und dem Volk. Das gesammte Volk das gemeiniglich mit natürlichen Augen sieht, war also der Gegenstand dem die alten Künstler zu gefallen suchten. Wollten sie dies, so musten sie natürlich seyn. Wir finden jetzt nicht Geschmack daran. Die Menschen bleiben nicht gerne auf einer Stelle, wenn es auch die höchste Stufte wäre. Die neuern Zeiten suchten Abänderung und änderten die Natur.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-040",
     "kind": "text",
     "aa": 431,
     "text": "Wir haben dagegen wieder vor den alten Zeiten einen Vorzug. So wie ein Mensch, so bekommt das ganze menschliche Geschlecht immer mehr Erfahrung. In der Mathematik z. E. die Alten hatten nicht die Algebra mit der wir das compendiöse Calculiren was sie mit unbeschreiblicher Mühe und Weitläufigkeit heraus brachten. So auch in der Naturgeschichte. Der Fleiß kann immer was zusetzen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-041",
     "kind": "text",
     "aa": 431,
     "text": "3. Sind die Alten Meister des Geschmaks",
     "ocrConf": 46
    },
    {
     "id": "philippi-s48-042",
     "kind": "text",
     "aa": 431,
     "text": "a. weil die Bücher der Religion in den Sprachen der Alten geschrieben.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-043",
     "kind": "text",
     "aa": 431,
     "text": "b. Die Gottesdienste sind in lateinischer Sprache celebrirt worden.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-044",
     "kind": "text",
     "aa": 431,
     "text": "Würden die Prof anscribenten nicht in den Sprachen geschrieben",
     "ocrConf": 33
    },
    {
     "id": "philippi-s48-045",
     "kind": "text",
     "aa": 431,
     "text": "seyn; sie wären längst untergegangen. Weil wir sie der Religion",
     "ocrConf": 37
    },
    {
     "id": "philippi-s48-046",
     "kind": "text",
     "aa": 431,
     "text": "wegen aus ihnen lernen müssen, so sind und werden sie erhalten.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s48-047",
     "kind": "text",
     "aa": 431,
     "text": "C. Weil eine todte Sprache unveränderlich ist; so geschiehtsdaßder",
     "ocrConf": 33
    },
    {
     "id": "philippi-s48-048",
     "kind": "text",
     "aa": 431,
     "text": "Geschmack in Ansehung der todten Sprache sich nicht verändern",
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-049",
     "kind": "text",
     "aa": 431,
     "text": "kann. Die Ausdrücke die damals die besten waren, sind es auch",
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-050",
     "kind": "text",
     "aa": 431,
     "text": "noch; und waren sie es nicht, so sind sie es doch jetzo.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s48-051",
     "kind": "text",
     "aa": 431,
     "text": "Der Geschmack muß Muster haben. Weil man die Schönheit nicht aus Begriffen sondern aus Anschauung erlernen kann, weil das Schöne keine Regeln hat zur Praxi und Doctrin, sondern nur zur Critic, so sind uns Muster nothwendig. Und zwar müssen diese Muster wenn die Schönheit sich nicht ändern soll, in einer todten Sprache geschrieben seyn.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s48-052",
     "kind": "text",
     "aa": 431,
     "text": "Eben der Umstand der todten Sprache macht viel, daß die Alten diese Muster sind.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s48-053",
     "kind": "text",
     "aa": 431,
     "text": "Bey ihnen kann kein Ausdruck getadelt werden. Ein jeder ist der beste den der Autor hat wählen können. Wenn ein Poet den Vortheil hat daß seine Schreibart nicht kann getadelt werden; so bleibt nichts übrig als die Schärfe des Geistes.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-054",
     "kind": "text",
     "aa": 431,
     "text": "Werden wir nicht auch Originale und Muster der Nachwelt werden ? Nein, weil keine lebende Sprache eine allgemein gelehrte seyn kann.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-055",
     "kind": "text",
     "aa": 431,
     "aaEnd": 432,
     "pages": [
      {
       "p": 432,
       "i": 321
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "133",
       "unresolved": true
      }
     ],
     "text": "Vorurtheil der Neuigkeit. Es entspringt daraus, daß wir urtheilen die Neuern Zeiten haben die Belehrung aller Zeiten vor sich. Von einem neuen Buch scheint uns mehrentheils immer gewöhnlich viel zu halten; denn wir glauben, daß der Autor alles was die Alten geschrieben, genutzt und noch von dem Seinen hinzugethan habe. In Wissenschaften und Künsten des Geschmaks aber findet das nicht statt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-056",
     "kind": "text",
     "aa": 432,
     "text": "Weil Nachahmung dem Genie entgegengesetzt ist, so suchen einige um dem Vorwurf der Nachahmung zu entgehen auf Neuigkeit zu verfallen. Viele verfallen darauf weil sie wahre Genies sind, viele um zu scheinen als wenn sie Genie hätten.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-057",
     "kind": "text",
     "aa": 432,
     "text": "Freye Republiqven lieben gerne alte Moden, hingegen souveraine Staaten neue Moden, weil dort keine Person von Wichtigkeit ist die hier herrscht. Junge Personen sind der Neuigkeit wie überhaupt der Abwechselung ergeben; alte Heben alte Moden.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s48-058",
     "kind": "text",
     "aa": 432,
     "text": "Die Neigung zum Neuen ist jetzt stärker als in vorigen Zeiten. Der Umgang mit dem Frauenzimmer der alles jetzt regiert, ist die Ursache davon. Warum folgen wir in Dingen des Geschmaks den Franzosen, weil sie der Sache mehr Anmuth als alle andre Völker geben. Die Engländer widerstehen dem Geschmack am mehresten.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s48-059",
     "kind": "text",
     "aa": 432,
     "text": "In Ansehung der Wissenschaften der Vernunft und vornehmlich der Erfahrung haben wir guten Grund das Neue dem Alten vorzuziehen.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-060",
     "kind": "text",
     "aa": 432,
     "ms": [
      {
       "p": null,
       "i": 176,
       "raw": "136",
       "unresolved": true
      }
     ],
     "text": "Welches Vorurtheil soll man eher annehmen das des Alterthums oder der Neuigkeit ? Im praktischen ist das erste schon anzunehmen, man muß offt der Gewohnheit und altem Gebrauch folgen z. E. ob Kinder von den Eltern oder der Republick sollen erzogen werden.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-061",
     "kind": "text",
     "aa": 432,
     "text": "Wie kann man den Vorurtheilen bey Kindern vorbeugen? Man verhüte, daß ich das Kind nach Regeln meines Verstandes denken laße und erziehe. Roußeau fordert in seinem Aemil eine negative Erziehung, ich soll dem Kinde nicht Urtheile vorreden, ehe sein Verstand fähig ist; besonders muß man Neigung separiren.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s48-062",
     "kind": "text",
     "aa": 432,
     "ms": [
      {
       "p": 125,
       "i": 0
      }
     ],
     "text": "Vorurtheil des angenommenen Lehrgebäudes.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-063",
     "kind": "text",
     "aa": 432,
     "aaEnd": 433,
     "pages": [
      {
       "p": 433,
       "i": 378
      }
     ],
     "text": "Unsre Erkenntnisse bekommen einen gewissen Grad der Wahrheit, wenn sie untereinander stimmen. Wenn aber Erkenntnisse stimmen mit einem (cum vno quodam) wenn Einheit darinnen ist ; dann stimmen sie untereinander. Nun können aber Erkenntnisse zur Einstimmung zusammengezwungen werden, indem man viel Wahres wegläßt. Daher kommts daß etablirte Lehrgebäude so offt falsche Sätze einführen und die Wahrheit sehr hindern. Hiezu kommt noch dies, daß Autoren die sich ein System in den Kopf gesetzt, wenn sie gleich falsche Sätze daraus fliessen sehen, doch nicht vergebens so viel wollen gearbeitet haben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-064",
     "kind": "text",
     "aa": 433,
     "text": "Von der Wahrscheinlichkeit und dem Zweifelhafften",
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-065",
     "kind": "text",
     "aa": 433,
     "text": "der Erkenntniß.",
     "ocrConf": 56
    },
    {
     "id": "philippi-s48-066",
     "kind": "text",
     "aa": 433,
     "text": "Wenn ich bey einer Erkenntniß von der Anzahl der zureichenden Gründe des Vorwahrhaltens mehr als die Hälffte habe, so ist die Erkenntniß wahrscheinlich. Z. E. Es sind die zureichende Gründe des Vorwahrhaltens 12. habe ich deren 8 ; so ist die Erkenntniß wahrscheinlich. Wenn ich aber von den zureichenden Gründen des Vorwahrhaltens nur die Hälfte habe; so ist die Erkenntniß zweifelhafft z. E. ich habe von 12 Gründen die zureichend sind nur 6.",
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "philippi-s48-067",
     "kind": "text",
     "aa": 433,
     "text": "Man muß die Gründe nicht untereinander, sondern mit den zureichenden Gründen vergleichen. Demnach ist es im Disputiren nicht genug, daß Gründe und Gegengründe sich vergleichen; sie müssen sich auch mit den zureichenden Gründen des Vorwahrhaltens vergleichen.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-068",
     "kind": "text",
     "aa": 433,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "136",
       "unresolved": true
      }
     ],
     "text": "Die subjektive Probabiliität das ist das Verhältniß der Gründe des Vorwahrhaltens, welches gewisser ist als fürs Gegentheil. Z. E. vom künftigen Leben habe ich mehr Gründe es zu behaupten als zum Gegentheil. Die Theorie der Wahrscheinlichkeit wird niemals zur Vollkommenheit gelangen. Die philosophische Wahrscheinlichkeit läßt sich mehr empfinden als anwenden.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-069",
     "kind": "text",
     "aa": 433,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "125",
       "unresolved": true
      }
     ],
     "text": "Die Ungewißheit der Erkenntniß ist noch nicht der Zweifel. Eine Erkenntniß kann wahrscheinlich seyn und doch ungewiß.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s48-070",
     "kind": "text",
     "aa": 433,
     "ms": [
      {
       "p": null,
       "i": 185,
       "raw": "IS6",
       "unresolved": true
      }
     ],
     "text": "Ein Zweifel ist das Gleichgewicht der Gründe des Vorwahrhaltens. Wenn aber gleich meine Erkenntniß ungewiß ist, so läßt sie mich doch nicht in der Ausübung zweifelhafft. Ich kann gewiß seyn im Handeln, ohngeachtet ich ungewiß bin in der Spekulation. Es müßte nicht nur ein Zweifel im Urtheil sondern auch in seinem Entschluß seyn, wenn ein Mensch z. E. ein General nicht wissen soll wohin er sich wenden soll, wenn er anceps seyn soll. Bey der blossen Ungewißheit in der Spekulation kann völlige Entschiedenheit in der Handlung statt finden. Sokrates war ungewiß ob eine andre Welt wäre; er handelte aber so als Avenn er es gewiß wüste. Die Entschlüßungen erfordern nicht nur kerne logische Gewißheit, sondern sind auch derselben nur selten fähig.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-071",
     "kind": "text",
     "aa": 434,
     "text": "Das ist der Unterschied zwischen der praktischen und logischen Gewißheit.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s48-072",
     "kind": "text",
     "aa": 434,
     "text": "Was logisch nicht gewiß ist kann praktisch gewiß seyn. Es ist ein Gott ; davon haben sehr wenige eine logische, aber alle eine praktische Gewißheit.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-073",
     "kind": "text",
     "aa": 434,
     "text": "Die praktische Gewißheit",
     "ocrConf": 57
    },
    {
     "id": "philippi-s48-074",
     "kind": "text",
     "aa": 434,
     "text": "1. nach Regeln der Klugheit ist die pragmatische",
     "ocrConf": 50
    },
    {
     "id": "philippi-s48-075",
     "kind": "text",
     "aa": 434,
     "text": "2. nach Regeln der Sittlichkeit die moralische Gewißheit.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-076",
     "kind": "text",
     "aa": 434,
     "text": "Zur praktischen Gewißheit nach den Regeln der Sittlichkeit d. i. zur moralischen wird noch weniger logische Gewißheit erfordert als zur pragmatischen z. E. beym Schwur ists moralisch gewiß daß einer nicht schwört, wenn er auch nur die geringste Vermuthung hat daß er nicht unschuldig ist. So sind überhaupt bey der Unterlassung des Bösen und Ausübung des Guten die geringsten Vermuthungen fähig unsre Handlungen zu determmiren Z. E. Wenn ich was finde, so ist eine einzige Vermuthung fähig mich zu bewegen, daß ichs wiedergebe. Ich thue es nicht aus Besorgung eines Processes oder aus Klugheit.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-077",
     "kind": "text",
     "aa": 434,
     "text": "Viele Autoren mischen pragmatische und moralische Gewißheit zusammen. Nur spät hat man die Grenzen der letztern gefunden. Moralische Gewißheit ist etwas respectiue auf die sittlichen Gesetze.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-078",
     "kind": "text",
     "aa": 434,
     "text": "Skrupel sind Gegengründe wider das Vor wahrhalten, sofern sie dunkel sind ; sofern sie klar sind heissen sie Zweifel und sind sie deutlich, so sind es Einwürfe. Einwürfe sind fast immer anfänglich Skrupel.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-079",
     "kind": "text",
     "aa": 434,
     "text": "In vielen Fällen sind wir logisch, obgleich nicht practisch und moralisch gewiß.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-080",
     "kind": "text",
     "aa": 434,
     "text": "Hinderniß des Beyfalls oder Fürwahrhaltens ist entweder subiectiv oder obiectiv, und wird Schwürigkeit genannt.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s48-081",
     "kind": "text",
     "aa": 434,
     "ms": [
      {
       "p": null,
       "i": 132,
       "raw": "I2T",
       "unresolved": true
      }
     ],
     "text": "Skrupel bestehen in einem Widerstände, den unser Verstand fühlet. Sie gründen sich auf Vorurtheile. Sie zeigen sich sogar in mathematischen Erkenntnissen. Es wird eine Kenntniß seines eigenen und anderer Subjekte erfordert, und man muß wissen wie Menschen gewöhn! ich denken um andern die Skrupel sagen zu können die sie haben.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-082",
     "kind": "text",
     "aa": 434,
     "aaEnd": 435,
     "pages": [
      {
       "p": 435,
       "i": 268
      }
     ],
     "text": "Es ist sehr schön und zur Beförderung der Wahrheit dienlich, wenn man einen Menschen, der seinen Irrthum nicht entfalten kann, denselben auflösen hilfft. Dann wird jener froh und dieser scharfsinnig seyn. Irrthümer müssen nicht blos beantwortet, sondern auch erkläret werden. Indem einer von den Gesetzen des Verstandes abweicht; so muß man philosophieren wie solches zugehe.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s48-083",
     "kind": "text",
     "aa": 435,
     "text": "Skrupel verdienen immer eine Untersuchung ; das sieht man, wenn man einen Menschen läßt lange reden. Sie sind nicht zu verachten, am wenigsten von dem, der sie in seinem Kopfe hat.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-084",
     "kind": "text",
     "aa": 435,
     "text": "Skrupel entspringen nicht sowol aus der Beschaffenheit der Gründe des Vorwahrhaltens als aus der neuen Falte die der Verstand annehmen muß. Daher muß man einem andern nicht blos Erkenntniß geben, sondern ihn auch daran gewöhnen. Allemal wenn der Verstand dem Erkenntniß eine andre Form geben soll, stutzt er. Es ist daher auch gut, daß man von einer Sache die dem Zuhörer ungewohnt ist, viel rede und den Verstand desselben an die vorgebrachte Argumente gewöhne.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s48-085",
     "kind": "text",
     "aa": 435,
     "text": "Zweifel.",
     "ocrConf": 81
    },
    {
     "id": "philippi-s48-086",
     "kind": "text",
     "aa": 435,
     "text": "Auf schubszweifel, oder der reine skeptische Zweifel ist vom dogmatischen ganz unterschieden, auch schon den Wirkungen nach; der eine sucht sich über alle Erkenntniß zu erheben ; der andere die Wahrheit zu untersuchen und zu prüfen. Die Methode ist verschieden. Der theoretische Zweifel der den Verstand in suspenso hält ist verschieden vom praktischen Zweifel der den Willen in suspenso hält. Bey einem theoretischen Zweifel kann ich ohne allen praktischen Zweifel seyn. Wenn ich auch den Satz des Wolfen daß alle Handlungen durch etwas bestimmt werden, erkenne ; so wird er meinem Willen doch nicht die Freyheit nehmen. Daher ist der Zweifel des Aufschubs bey den wichtigsten Sätzen besser als entschiedene dogmatische Urtheile, weil doch der Wille durch die Spekulation nicht bestimmt wird.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-087",
     "kind": "text",
     "aa": 435,
     "text": "Die Argumente der Sceptiker wurden mit diesen Namen benannt 1. Argument der Lügner. Wer da lügt und gesteht daß er lügt, der sagt die Wahrheit indem er lügt. 2. Der Träumer. 3. Achilles weil er sehr schnell laufen konnte wurde er mit der Schildkröte verglichen die eine Meile vor ihm war und die er 10 mal schneller überlief. 4. Diallele.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-088",
     "kind": "text",
     "aa": 435,
     "text": "Die Unbegründlichkeit einer Sache ist stets subiectiv.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s48-089",
     "kind": "text",
     "aa": 435,
     "text": "Obiectivc Schwierigkeit so bald man sich ihrer bewußt ist, heißt Zweifel.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-090",
     "kind": "text",
     "aa": 435,
     "text": "Subiective Schwierigkeit, der ich mir nicht bewußt, heißt Scrupel.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s48-091",
     "kind": "text",
     "aa": 435,
     "aaEnd": 436,
     "pages": [
      {
       "p": 436,
       "i": 124
      }
     ],
     "text": "Es entsteht eine Treulosigkeit daraus, daß man bey den theoretischen Sätzen immer so sehr um die Praxi bekümmert ist. Daher kommts daß das Argumentum ab vtili, a tuto anstatt der Vernunfft tritt. Man will aus der Nützlichkeit die aus dem Satz fließt seine Wahrheit beweisen. Weil ein Satz nützlich ist, wird er deßwegen nicht wahr seyn. Die praktische Suspension folgt nicht aus der theoretischen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s48-092",
     "kind": "text",
     "aa": 436,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "138",
       "unresolved": true
      }
     ],
     "text": "Wir können entscheiden daß etwas wahr sey, und doch können wir von eben dem sagen, daß es nicht gewiß sey.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s48-093",
     "kind": "text",
     "aa": 436,
     "text": "Man sieht, das Urtheil der Wahrheit, wenn es hinreicht etwas für wahr zu halten, doch mit der Bedingung daß es nicht gewiß sey, muß in einer Relation mit dem Wülen stehen. Z. E. Wenn eine Anklage wider einen Menschen gemacht wird, von dem wir eine solche That nicht vermuthen können, so sieht mein Verstand wol aus allen Umständen, daß es an dem sey, aber mein Wille sträubt sich es zu glauben Dann ist es wol wahr aber nur nicht gewiß. Es kann etwas einem Subjekte gewiß seyn was dem andern nicht gewiß ist.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s48-094",
     "kind": "text",
     "aa": 436,
     "text": "Es beruht das Vorwahrhalten nicht auf Beheben sondern auf Erkennt nißgründen .",
     "dehyphenated": 1,
     "ocrConf": 49
    }
   ]
  },
  {
   "id": "s49",
   "title": "Gradation des Vorwahrhaltens.",
   "titleSrc": "heading",
   "headings": [
    "Gradation des Vorwahrhaltens."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s49-001",
     "kind": "heading",
     "aa": 436,
     "text": "Gradation des Vorwahrhaltens."
    },
    {
     "id": "philippi-s49-002",
     "kind": "text",
     "aa": 436,
     "text": "1. Beyfall",
     "ocrConf": 38
    },
    {
     "id": "philippi-s49-003",
     "kind": "text",
     "aa": 436,
     "text": "2. Bilhgung",
     "ocrConf": 34
    },
    {
     "id": "philippi-s49-004",
     "kind": "text",
     "aa": 436,
     "text": "3. Wenn diese Gründe des Vorwahrhaltens unzureichend sind; so geben sie Wahrscheinlichkeit.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-005",
     "kind": "text",
     "aa": 436,
     "text": "4. Scheinbarkeit, sofern die Gründe des Vorwahrhaltens gleichsam Theile sind desjenigen Grundes, der für das Subjekt gut, oder sofern die Gründe coordinando zusammengenommen einen für das Subjekt zureichenden Grund des Vorwahrhaltens ausmachen ; sofern sage ich ist eine Erkenntniß scheinbar.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-006",
     "kind": "text",
     "aa": 436,
     "text": "Objektive Gründe des Vorwahrhaltens. da sie im Objekt smd gelten für alle. Die Scheinbarkeit gilt nur für einzele Subjekte. Scheinbar ist es immer, daß der Mensch nach dem Tode vergehen wird. Die Poeten stehen es daher auch so vor.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-007",
     "kind": "text",
     "aa": 436,
     "text": "Zur Wahrscheinlichkeit gehört Verstand, zur Scheinbarkeit gehören die Sinne ; und dieses letztere findet also nur statt da wo aus dem Scheine geurtheilt wird. Es gehören dazu nur Phänomena, aber zur Wahrscheinlichkeit gehört Verstand. Es gehören dazu objektive Gründe des Vorwahrhaltens, da zur Scheinbarkeit nur Subjective gehören.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s49-008",
     "kind": "text",
     "aa": 437,
     "text": "Der 2te Grad der Gewißheit ist nach Regeln der Identität Z. E. Ein Ganzes ist größer als eines seiner Theile. In der reinen Vernunf f t ist eine reine Identität.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s49-009",
     "kind": "text",
     "aa": 437,
     "text": "Die moralische Gewißheit in Ansehung der reinen Sittlichkeit kommt der mathematischen am nächsten.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-010",
     "kind": "text",
     "aa": 437,
     "text": "Die Metaphysik ist eine Kritic und ihr fehlts am mehresten an Gewißheit.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s49-011",
     "kind": "text",
     "aa": 437,
     "text": "Gewißheit der Erkenntniß ist nur subjectiv.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-012",
     "kind": "text",
     "aa": 437,
     "text": "Wenn die Gründe des Vorwahrhaltens nur im Verhältniß auf die Beschaffenheit des Subjekts gelten, so ist Scheinbarkeit da.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s49-013",
     "kind": "text",
     "aa": 437,
     "text": "Es war den Alten und ist auch allen gemeinen Leuten scheinbar, daß die Sonne sich um die Erde bewege. Den Neuen ist das Gegentheil wahrscheinlich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-014",
     "kind": "text",
     "aa": 437,
     "ms": [
      {
       "p": null,
       "i": 63,
       "raw": "139",
       "unresolved": true
      }
     ],
     "text": "Eine Erkenntniß die scheinbar gewiß ist heißt die Ueberredung. Die Gewißheit die aus dem Verstand und nicht aus dem sinnlichen Schein entspringt ist Ueberzeugung. Diese die nach Regeln des Verstandes entspringt ist objectiue, jene ist subjectiue Gewißheit. Die anschauende Gewißheit nach Regeln des Verstandes ist Evidenz.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s49-015",
     "kind": "text",
     "aa": 437,
     "text": "Schwache kann man schwerlich anders als nach Gesetzen der Sinnlichkeit überzeugen. So in moralischen, so auch in theoretischen Sätzen. Die Evidenz (Augenscheinlichkeit) ist von der Gewißheit unterschieden.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-016",
     "kind": "text",
     "aa": 437,
     "text": "Die Wissenschaften die dem Augenschein können unterworfen werden, können Evidenz haben. Von der Art ist die Mathematik. Aber philosophische Qualitäten können nicht Evidenz bekommen z. E. der Satz, daß eine oberste Ursache sey, kann nur denen überzeugend seyn, die geübt sind durch den reinen Verstand zu denken.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s49-017",
     "kind": "text",
     "aa": 437,
     "text": "Wie geben wir solchen Sätzen Evidenz ? Dadurch daß wir an Objecten der Sinne die Wahrheit solches Satzes zeigen. Z. E. daß nicht Nutzen der Tugend und der Schatten des Lasters uns gegen jene mit Hochachtung und gegen diese mit Haß erfülle kann man in Exempeln zeigen. Obgleich Menschen, die fremde Feinde betrogen haben und andere damit unterstützen Nutzen schaffen; ob wir gleich von denen die mit hirnloser Verschwendung alles wegwerfen profitiren ; so sind uns doch die erstem verabscheuungswürdig und die letztern verächtlich.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-018",
     "kind": "text",
     "aa": 438,
     "text": "Die Sinnlichkeit kann wol Lebhaff tigkeit geben aber nicht Evidenz. Die Ueberzeugung muß geschehen nach Gesetzen des Verstandes ; auch dann, wenn die Gründe des Vorwahrhaltens aus der Erfahrung entlehnt sind. Denn wir haben wol vor allem Verstand Empfindung aber nicht Erfahrung. Thiere haben keine Erfahrung ; denn nur durch den Verstand kann man sie haben.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s49-019",
     "kind": "text",
     "aa": 438,
     "text": "Moralische Erkenntniße können sehr klar seyn aber nicht evident.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-020",
     "kind": "text",
     "aa": 438,
     "text": "Evidenz findet nur statt in der Verknüpfung der Theile zum Ganzen, d. i. wo der Verstand coordinirt; nicht aber in der Verknüpfung der Gründe und Folgen d. i. wo der Verstand subordinirt; folglich nur in der Mathematic nicht in der Philosophie.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s49-021",
     "kind": "text",
     "aa": 438,
     "text": "So wie die Gewißheit, so ist auch die Ueberzeugung entweder empirisch oder rational. Wenn die Ueberzeugung geschieht ohne Einmengung der Erfahrung durch den reinen Verstand und die Gründe der Wahrheit können der sinnlichen Augenscheinlichkeit unterworfen werden; so haben wir in dem Fall mathematische Gewißheit. Es wird demnach diese in der evidenten Vernunfft (rational) Gewißheit bestehen.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "philippi-s49-022",
     "kind": "text",
     "aa": 438,
     "text": "Die Philosophie ist nicht der Evidenz fähig am wenigsten die Metaphysik.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s49-023",
     "kind": "text",
     "aa": 438,
     "ms": [
      {
       "p": 130,
       "i": 0
      }
     ],
     "text": "Der Nutzen des Skeptischen Zweifels ist ungemein groß, wenn er rechter Art ist, indem erlaubt ist einen Satz andern entgegen zu setzen und Beweise vor das Gegentheil angeführt werden: so werden wir dadurch auf die Untersuchung unsrer eigenen Vernunfft gebracht. Denn da wir von einem Satze Beweise und Gegenbeweise die das Gegentheil darthun, sehen; so muß, da ein Satz doch nur entweder wahr oder falsch seyn kann, der Unterschied hier in dem Subjekt liegen. Und die Erkenntniß des Subjekts ist der wahre Gegenstand der Philosophie. Denn wir haben alle unsre Erkenntnisse nur dadurch daß wir uns erkennen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s49-024",
     "kind": "text",
     "aa": 438,
     "text": "Der grosse Streit entsteht daher, daß wir die subjektive Gründe für objective halten; weil wir ein Ding nicht anders als so denken können; so muß es, glauben wir, auch so seyn. Es gehört viele Einsicht dazu ehe man davon überzeugt ist, daß die Bedingungen des Subjekts keine Bedingung des Objekts sind : dann lernt man erst recht daß man nichts weiß; und damit soll sich die Metaphysik beschäfftigen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s49-025",
     "kind": "text",
     "aa": 439,
     "text": "Die objektive Erkenntniß kann in vielen Fällen nicht erlanget werden. Aber in der subjektiven Erkenntniß kann man bis zur Gewißheit gelangen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-026",
     "kind": "text",
     "aa": 439,
     "text": "Das Verhaltniß der Gründe zum zureichenden Grunde wird bey der 'Wahrscheinlichkeit betrachtet.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s49-027",
     "kind": "text",
     "aa": 439,
     "text": "Auf dem Verhaltniß der Gründe zur Wahrscheinlichkeit beruht die Scheinbarkeit.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-028",
     "kind": "text",
     "aa": 439,
     "text": "Die Regeln der Klugheit schreiben uns vor wie man glücklich weiden kann, ohne auf die Würdigkeit zu derselben acht zu geben, die Regeln der Sittlichkeit, nur auf das letztere, ohne auf das erste zu sehen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s49-029",
     "kind": "text",
     "aa": 439,
     "text": "Meynung ist eine ungewisse Erkenntniß, wovon wir uns bewust sind daß sie ungewiß ist. Ueberredung ist wenn wir eine ungewisse Erkenntniß für gewiß halten. Wer sich überreden läßt, der hat den Unterschied zwischen Gewißheit und Wahrscheinlichkeit noch nicht eingesehen. Man muß eine wahre Ueberzeugung kennen, wenn man wissen will, wo sie fehlt; so wie Sklaven die Freiheit kennen müssen, wenn sie sich über ihren Zustand beschweren wollen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s49-030",
     "kind": "text",
     "aa": 439,
     "text": "Wenn auch der Nutzen der Mathematick nur der wäre, daß sie uns gewiß macht und uns empfinden läßt was wahre Gewißheit ist; so wäre sie schon unschätzbar.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s49-031",
     "kind": "text",
     "aa": 439,
     "aaEnd": 440,
     "pages": [
      {
       "p": 440,
       "i": 1050
      }
     ],
     "ms": [
      {
       "p": 131,
       "i": 245,
       "raw": "i3i",
       "inferred": true
      }
     ],
     "text": "Hypothese. Der Autor hat es nicht recht eingesehen. Eine philosophische Mejaiung a priori ist keine Hypothese, sondern die philosophische Meynung a posteriori. Wenn ich aus den Folgen auf die Wahrheit des Grundes Schlüsse, so ist das Hypothese. Wenn ich aus unzureichenden Gründen auf Folgen Schlüsse, so ist das Meynung z. E. daß in der Erde schwerere Körper sind als Gold. Ich habe Gründe das zu rneynen; ich Schlüsse das aus Gründen und nicht aus Folgen. Das ist nicht Hypothese. Die Erde hat Höhlungen, weil jeder weiche Körper, wenn er trocknet, Höhlungen bekommt und die Erde in ihrem ersten Zustand weich gewesen. Das ist eine philosophische Meynung, weil Beweise da sind. Aber wenn ich annehme die Erde hat Höhlungen, deßwegen weil sich daraus zeigen läßt wie die Thäler entstanden; so nehme ich den Grund an, weil sich die Folge daraus erldären läßt. Das ist Hypothese. Je mehr eine Meynung zur Erklärung der Folgen zureicht; desto wahrscheinlicher ist die Hypothese. Bis die Meynung hinlänglich ist zur Erklärung aller Folgen, dann hat sie völlige Gewißheit. Aber dann müste man alle Folgen kennen. Aber das kann man wol in keinem Fall; doch im Rechnen gehts manchmal an alle Folgen zu wissen. Wenn zu einer Hypothese ausser den Beweisen a posteriori noch Gründe a priori kommen, dann hat sie Gewißheit. Das ist eine Hauptpflicht in der Naturlehre, daß man auch a priori beweißt was man angenommen. Z. E. Aus dem per hypothesin angenommenen Aether lassen sich viel Phänomena erklären. Nun ich beweise, daß der Aether da sey. Wenn eine Hypothese vieles Mannigfaltige aus einem Grunde erklärt, bekommt sie viel Wahrscheinlichkeit; als Newtons Hypothese von der Schwere. Hypothesis subsidiaria, wenn man zur Erklärung einer Hypothese mehrere annimmt, als Tycho de Brahe den epycylos epicyclorum annahm.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s50",
   "title": "Wißenschafft. §185",
   "titleSrc": "heading",
   "headings": [
    "Wißenschafft.",
    "§185"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s50-001",
     "kind": "heading",
     "aa": 440,
     "text": "Wißenschafft. §185"
    },
    {
     "id": "philippi-s50-002",
     "kind": "text",
     "aa": 440,
     "text": "Wißen heißt mit Gewißheit erkennen und vor wahr halten. Die Grade des Vorwahrhaltens sind",
     "ocrConf": 52
    },
    {
     "id": "philippi-s50-003",
     "kind": "text",
     "aa": 440,
     "text": "1. meynen, etwas vor wahr halten in dem Grade wo ich nicht sehe wie es im Verhältniß zur Gewißheit ist.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s50-004",
     "kind": "text",
     "aa": 440,
     "text": "2. glauben, in dem Grad etwas meynen daß die Meynung eine praktische Gewißheit hat. Die Meynung des zureichenden Grads zur Handlung heißt Glaube.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s50-005",
     "kind": "text",
     "aa": 440,
     "aaEnd": 441,
     "pages": [
      {
       "p": 441,
       "i": 1073
      }
     ],
     "ms": [
      {
       "p": 132,
       "i": 71,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "3. wissen, die Wahrheit zureichend erkennen. Die Meynung erkennt etwas unzureichend, der Glaube zureichend zur Praxi. Die Wissenschafft zureichend nach logischen Regeln. Wissenschafft überhaupt ist nichts anders als die Erkenn tmß wodurch wir etwas wissen. Sie wird contradistinguirt der Kunst worunter man alles das versteht, wozu eine gewisse specifische Vollkommenheit der Praxis erfordert wird; Wissenschaft hingegen ist wo eine solche Vollkommenheit zu der Theorie erfordert wird. Nicht alles praktische ist Kunst ; die praktische Geschicklichkeit die nicht blos eine Folge der Theorie ist, heißt eine Kunst. Wenn aus der blossen Erkenntniß etwas praktisches fließt, so ists nicht Kunst. Praktische Geometrie ist Kunst. Wissenschafft muß können gelehrt werden. Kunst muß durch meine eigene Fähigkeiten zu Stande gebracht werden. Dazu wird Genie erfordert. Die Wissenschaft wird noch weiter contradistinguirt der Critic. Alle theoretische Erkenntniß ist entweder eine Doctrin oder Critic. Die Critic ist diejenige theoretische Erkenntniß, welche die Vollkommenheit beurt heilen lehrt die schon da ist. Die Doctrin aber ist eine theoretische Erkenntniß, welche die Gründe enthält wornach ein Produkt kann hervorgebracht werden. Alle Erkenntnisse die Gründe der Praxis sind, werden wir Critiken nennen z. E. Logik, Aesthetick.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s51",
   "title": "§ 188",
   "titleSrc": "heading",
   "headings": [
    "§ 188"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s51-001",
     "kind": "heading",
     "aa": 441,
     "text": "§ 188"
    },
    {
     "id": "philippi-s51-002",
     "kind": "text",
     "aa": 441,
     "text": "Die Mathematik hat Evidenz der Quantitaet nicht aber der Qualitaet nach.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s51-003",
     "kind": "text",
     "aa": 441,
     "text": "Mathematische Gewißheit ist eine rationale Gewißheit so evident ist. Evidenz ist wenn eine Wahrheit in unsern Vernunffterkenntnissen so groß wird als sie bey den Sinnen seyn kann. Zahlen, Raum und Zeit werden als Gegenstände der Sinne betrachtet.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s51-004",
     "kind": "text",
     "aa": 441,
     "text": "Die ausführliche Gewißheit entsteht aus dem Bewustseyn der Nothwendigkeit nicht, wie der Autor sagt, der Wahrheit ; sondern des Vorwahrhaltens. Wir finden in uns einen inneren Zwang und Gebundenheit vor wahr zu halten, was wir als wahr erkennen.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s51-005",
     "kind": "text",
     "aa": 441,
     "ms": [
      {
       "p": 133,
       "i": 59
      }
     ],
     "text": "Ueberzeugung ist ein innerer Zwang von der Wahrheit der Ideen ; diese ist in der Mathematik vornemlich anzutreffen.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s52",
   "title": "§189",
   "titleSrc": "heading",
   "headings": [
    "§189"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s52-001",
     "kind": "heading",
     "aa": 441,
     "text": "§189"
    },
    {
     "id": "philippi-s52-002",
     "kind": "text",
     "aa": 441,
     "text": "Was die beyden Eintheilungen betrifft; so ist die Gewißheit vom ersten Range und die mathematische Gewißheit vom 2ten Range nicht der Form sondern den Datis nach unterschieden. Die Gewißheit kann völlig seyn, entweder durch die Vernunfft oder Erfahrung. Wenn der Mond zwischen die Erde und Sonne kommt, so ist eine Finsterniß mathematisch gewiß durch die Erfahrung. Daß aber in einem Dreieck alle 3 Winkel 180° ausmachen das ist gewiß durch die Vernunfft und es wäre dies also eine mathematische Gewißheit vom ersten Range. Es ist aber diese Eintheilung des Autors nicht recht gut. Man sieht bey der mathematischen Gewißheit nicht aufs Object, nur auf die Form.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s52-003",
     "kind": "text",
     "aa": 441,
     "text": "Die Eigenschafften der mathematischen Erkenntniß sind",
     "ocrConf": 56
    },
    {
     "id": "philippi-s52-004",
     "kind": "text",
     "aa": 441,
     "text": "1. Die völlige Deutlichkeit.",
     "ocrConf": 54
    },
    {
     "id": "philippi-s52-005",
     "kind": "text",
     "aa": 441,
     "text": "2. Die völlige Zulänglichkeit (completudo)",
     "ocrConf": 46
    },
    {
     "id": "philippi-s52-006",
     "kind": "text",
     "aa": 441,
     "text": "3. Praecision, daß das überflüssige abgeschnitten sey.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s52-007",
     "kind": "text",
     "aa": 441,
     "text": "4. Es könnte noch dazu gehören ein gewisses Anschauen dem die mathematischen Erkenntnisse können unterworfen werden.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s52-008",
     "kind": "text",
     "aa": 442,
     "text": "Die Vernunff tvorstellungen der Qualitäten womit sich die Philosophie abgiebt kommen mit den mathematischen Erkenntnissen in der Deutlichkeit und Sufficienz der Gründe überein. Die Praecision aber und Evidenz ist nur dieser eigen.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s52-009",
     "kind": "text",
     "aa": 442,
     "text": "§",
     "ocrConf": 19
    },
    {
     "id": "philippi-s52-010",
     "kind": "text",
     "aa": 442,
     "text": "Eine willkürliche Wahrheit (positio nicht hypothesis) ist welche ausdrückt was ich willkürlich annehme. Z. E. Willkürlicher Weise ist der Zirkel in 360° getheilt. Objective Sätze können nicht willkürlicher weise angenommen werden, sondern nur subjective. Daß wir bis 10 zählen und alle andre Zahlen in ratione decupla betrachten ist willkürlich. Willkürliche Sätze gehen auf das praktische und zeigen nur an was man thun will, obgleich man auch anders thun könnte.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s52-011",
     "kind": "text",
     "aa": 442,
     "text": "Jeder Satz ist entweder er weißlich gewiß oder uner weißlich gewiß.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s52-012",
     "kind": "text",
     "aa": 442,
     "text": "Eine Erkenntniß heißt unerweißlich wenn sie unmittelbahr gewiß ist; wenn sie aber vermittelst einer andern Erkenntniß aus welcher sie als aus einem Grunde sich erweisen läßt gewiß ist, so ist sie erweißlich gewTiß.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s52-013",
     "kind": "text",
     "aa": 442,
     "ms": [
      {
       "p": 134,
       "i": 0
      }
     ],
     "text": "Der Beweis ist diejenige Erkenntniß vermittelst welcher die Wahrheit kann erkannt werden.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s52-014",
     "kind": "text",
     "aa": 442,
     "text": "Die Materie des Beweises ist der Beweißgrund oder die unmittelbar gewisse Erkenntniß. Die Form ist die Art der Consequenz wie nemlich die Wahrheit des Satzes aus dem Beweißgrunde folgt.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s52-015",
     "kind": "text",
     "aa": 442,
     "text": "Wenn die Form des Beweises selbst nicht kann unmittelbar sondern nur mittelbar erkannt werden, so ist dies wol ein Beweiß aber kerne Demonstration.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s52-016",
     "kind": "text",
     "aa": 442,
     "text": "Der Fehler des Beweises kann entweder in der Materie oder in der Form stecken.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s52-017",
     "kind": "text",
     "aa": 442,
     "text": "Bey jedem Beweise nimmt man 3 Stücke an",
     "ocrConf": 38
    },
    {
     "id": "philippi-s52-018",
     "kind": "text",
     "aa": 442,
     "text": "1 . Die Materie des Beweißthums seu ratio probandi",
     "ocrConf": 39
    },
    {
     "id": "philippi-s52-019",
     "kind": "text",
     "aa": 442,
     "text": "2. Die Form oder die Consequenz daraus.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s52-020",
     "kind": "text",
     "aa": 442,
     "aaEnd": 443,
     "pages": [
      {
       "p": 443,
       "i": 416
      }
     ],
     "text": "3. Conclusio z. E. Alles was zufällig ist hat eine fremde Ursache; das beweise ich aus der Zufälligkeit. Also ist die Zufälligkeit die Materie. Wie aber daraus fließt daß alles zufällige eine fremde Ursache habe das ist die Consequenz, die Form. Die Materie kann in jedem Beweise angesehen werden als der medius terminus und die Form als das Verhältniß desselben zu dem vorhabenden Satze. Alle Beweise sind entweder empirisch oder rational. Die mathematischen Beweise welche Evidenz, praecision und Anscheinen haben heissen Demonstrationes. Ein rationaler Beweis überhaupt heißt probatio. Nicht alle Beweise aber wenn sie auch zureichend sind heissen Demonstrationes z. E. daß alle Mäßigkeit gleich hoch stehe, davon kann nur eine empirische Probation gegeben werden. Die sind aber eben so klar als Demonstrationes. Probatio ist vel completa vel incompleta.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s52-021",
     "kind": "text",
     "aa": 443,
     "text": "Petere principium heißt in der Logik einen Satz der noch nicht erwiesen aber dabey erweißlich ist zum Grunde legen und als den Beweißgrund anderer Sätze annehmen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s52-022",
     "kind": "text",
     "aa": 443,
     "text": "Beweisen heißt nichts anders als die identitatem implicitam zur explicita machen; und einen von einem Satz überzeugen heißt einen bewust machen daß der Satz der Form des Verstandes und seinen Gesetzen gemäß sey. Hieraus folgt daß die Sätze unerweißlich sind, bey denen die Identität explicita oder offenbar ist. Z. E. Das Ganze ist seinen Theilen zusammengenommen gleich. Sind diese Sätze rational und theoretisch, so heissen sie axiomata, praktische postulata.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s52-023",
     "kind": "text",
     "aa": 443,
     "text": "Jede allgemeine Erfahrung ist erweißlich, jede einzele besondre unerweißlich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s52-024",
     "kind": "text",
     "aa": 443,
     "ms": [
      {
       "p": 135,
       "i": 447
      }
     ],
     "text": "Alle erweißliche Sätze sind entweder analytisch oder synthetisch. Analytische Sätze oder Urtheile sind die, wo wenn ich das Subjekt zergliedere, ich das Praedicat drinnen finde und also durch Zergliederung die Identität einsehe Z. E. Jeder Körper ist theilbar, ist ein analytischer Satz. Denn er kann so ausgedrückt werden : dasjenige was ich mir unter dem Merkmal des Körpers denke das denke ich auch unter demjenigen der Theilbarkeit ; und wenn ich den Begriff des Körpers analysire, so finde ich die Theilbarkeit drinnen. Alle analytische Sätze stehen demnach unter dem Satze der Identität und des Wiederspruchs und werden daraus bewiesen.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s52-025",
     "kind": "text",
     "aa": 443,
     "text": "Synthetische Sätze aber sind die, wo das Praedicat nicht in der Notion des Subjekts liegt, sondern als was ganz verschiedenes zugesetzt wird. Z. E. Alles was geschieht hat einen zureichenden Grund. Wenn ich hier das Subject das ist : das was da geschieht, das Entstehen, analysire, so werde ich den zureichenden Grund der ihm zukommen soll nicht drinnen finden. Es wird dies als was ganz verschiedenes zum Entstehen hinzugesetzt und verbunden.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s52-026",
     "kind": "text",
     "aa": 443,
     "aaEnd": 444,
     "pages": [
      {
       "p": 444,
       "i": 195
      }
     ],
     "text": "Synthetische Sätze können nicht durch die Vernunfft erkannt werden. Denn die Vernunfft kann nicht coordiniren sondern nur subordiniren. Synthetische Sätze sind entweder Erfahrungen oder anschauende Sätze des Verstandes. Diese trifft man in der Mathematik, jene in der Physik an. Locke nennt die erstem propositiones coexistentiae welches von vielen nicht verstanden wurde. Ein jeder empirische Satz ist synthetisch. Denn ich verbinde da mit dem Subjekt Merkmale, die nicht in ihm enthalten sind.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s52-027",
     "kind": "text",
     "aa": 444,
     "text": "Ich merke hier nur an, daß die Falschheit die die Form betrifft, viel grösser ist, als die so die Materie betrifft. Denn die Materie ist accidentell; die Form aber essentiel und bey vielen Materien applicable. Eine falsche Form ist fast unverbesserlich. Denn sie ist allgemein und hat auf viele Sätze einen Einfluß. Ein falscher Satz kann eher verbessert werden. Man nennt die Hauptfalschheit eines Satzes die mehr in der Form als Materie besteht irpcoTOV ysOSos.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s52-028",
     "kind": "text",
     "aa": 444,
     "text": "Es entspringen viele Fehler daher, daß man nicht genugsam kennt was zur völligen Gewißheit erfordert wird; Locke räth daher das Studium der Mathematik sehr dringend an.",
     "ocrConf": 49
    }
   ]
  },
  {
   "id": "s53",
   "title": "§196",
   "titleSrc": "heading",
   "headings": [
    "§196"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s53-001",
     "kind": "heading",
     "aa": 444,
     "text": "§196"
    },
    {
     "id": "philippi-s53-002",
     "kind": "text",
     "aa": 444,
     "text": "Man kann auf zwiefache Art etwas beweisen directe aus dem Zusammenhang mit den Gründen und indirecte wo ich aus dem Gegentheil die Wahrheit oder Falschheit des Satzes zeige. Der indirecte Beweis zeigt nur daß etwas wahr oder falsch sey ohne die Quellen anzuzeigen woher es so sey. Es läßt sich leichter so negativ als affirmativ beweisen.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "philippi-s53-003",
     "kind": "text",
     "aa": 444,
     "ms": [
      {
       "p": 136,
       "i": 129
      }
     ],
     "text": "Denn wenn ich einen Satz und nur eine einzige falsche Folge zeige ; so habe ich bewiesen daß der Satz falsch ist. Aber ich müste alle Folgen wissen wenn ich davon auf den Grund Schlüssen und die Wahrheit des Satzes beweisen wollte. Weil ich aber nicht alle Folgen kenne, so Schlüsse ich auch nur mit Vermuthung auf die Wahrheit des Satzes und er ist eine Hypothese.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s53-004",
     "kind": "text",
     "aa": 444,
     "text": "Ein directer Beweiß der aus dem Zusammenhange mit den Gründen fließt ist genetisch und zeigt zugleich die Quellen a priori an. Indirecte Beweise heissen auch apagogische.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s53-005",
     "kind": "text",
     "aa": 444,
     "aaEnd": 445,
     "pages": [
      {
       "p": 445,
       "i": 343
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "135",
       "unresolved": true
      }
     ],
     "text": "Eigentlich kann man auf zwiefache Art Beweise führen 1 . daß man aus den Gründen auf den Satz als auf die Folgen schlüßt. Das sind die schönsten Beweise. 2. aus den Folgen auf den Satz als auf den Grund. In diesem kann man einen affirmativen Satz nicht beweisen, weil man nicht alle Folgen kennt, aber wol negative. Denn ist eine Folge falsch so ist der ganze Satz falsch. Das ist ein indirecter oder apagogischer Beweiß.",
     "joined": [
      "layout"
     ],
     "ocrConf": 40
    },
    {
     "id": "philippi-s53-006",
     "kind": "text",
     "aa": 445,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "136",
       "unresolved": true
      }
     ],
     "text": "Unsre Vorstellungen sind entweder Begriffe, oder Anschauungen.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s53-007",
     "kind": "text",
     "aa": 445,
     "text": "Begrif, Perceptio communis, eine gemeingültige Vorstellung.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s53-008",
     "kind": "text",
     "aa": 445,
     "text": "Omnes perceptiones sunt vel reflectivae vel intuitivae.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s53-009",
     "kind": "text",
     "aa": 445,
     "text": "Durch die logische Absonderung können wir keinen Begrif bekommen, sondern nur die Erkenntniß in besondrer Form geben.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s53-010",
     "kind": "text",
     "aa": 445,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "i»J",
       "unresolved": true
      }
     ],
     "text": "Jeder conceptus communis kann als ein superior angesehen werden.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s53-011",
     "kind": "text",
     "aa": 445,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "136",
       "unresolved": true
      }
     ],
     "text": "§ 197",
     "ocrConf": 21
    },
    {
     "id": "philippi-s53-012",
     "kind": "text",
     "aa": 445,
     "text": "Zur Demonstration wird erfordert die Evidenz, so daß es umnöglich sey seinen Beyfall aufzuschieben. Nur von dem was in die Sinne fällt kann der Beyfall nicht versagt werden. Es giebt demnach wenige Demonstrationes. Alle empirische Sätze können nur Probationen haben. Eine aesthetische Probation ist, wenn etwas aus dem Geis schmack und den Leidenschaften überredet. Diese Probationes sind nicht objectiv sondern nur subjectiv. Es sind Ueberredungen nach Regeln der Erscheinung z. E. die Anständigkeit eines Mannes kann zum Beweise seiner Rechtschaffenheit dienen. Der Demonstrirgeist wird durch die Mathematik excolirt.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s54",
   "title": "§ 200",
   "titleSrc": "heading",
   "headings": [
    "§ 200"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s54-001",
     "kind": "heading",
     "aa": 445,
     "text": "§ 200"
    },
    {
     "id": "philippi-s54-002",
     "kind": "text",
     "aa": 445,
     "text": "Die blinde Neigung zu demonstriren heißt Demonstrirsucht. Sucht heißt eine Neigung die nicht gemässigt ist. Die Demonstrirsucht",
     "ocrConf": 41
    },
    {
     "id": "philippi-s54-003",
     "kind": "text",
     "aa": 445,
     "text": "1. entspringt aus einer vermeinten Leichtigkeit zu demonstriren. Um dies zu verhüten muß man die Schwürigkeiten einer Erkenntniß zeigen.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s54-004",
     "kind": "text",
     "aa": 445,
     "text": "2. aus Charlatanerie",
     "ocrConf": 19
    },
    {
     "id": "philippi-s54-005",
     "kind": "text",
     "aa": 445,
     "text": "3. aus Pedanterie. Diese besteht im Mangel der Geschicklichkeit Erkenntniß zu appliciren, wenn man die Fälle nicht beurtheilen kann wo eine Erkenntniß schicklich ist. So bildete man sich ein es sey nothwendig entweder gar nicht zu urtheilen oder alles zu demonstriren. Wolff hatte die Demonstrirsucht nicht; wol aber seine Nachfolger. Sie findet sieh vorzüglich bev den Unwissenden.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s54-006",
     "kind": "text",
     "aa": 446,
     "ms": [
      {
       "p": null,
       "i": 200,
       "raw": "«st",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "Viele Sceptici haben geglaubt daß man ohne Demonstration nichts annehmen müsse. Vor einigen Jahren herrschte die starke Neigung zu demonstriren ; jetzt scheint eine Sucht der Seichtigkeit überhand zu nehmen. Diese entspringt, wenn Jemand seine Art zu denken nach dem Geschmack des Publici einrichtet. Der ächte Geschmack liebt Gründlichkeit, wie ein Pope.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s54-007",
     "kind": "text",
     "aa": 446,
     "text": "Was ist besser die Seichtigkeit oder die Demonstrirsucht \\ Die Seichtigkeit; denn die ist ein malum negatiuum ein Mangel, jene ein privatiuum em vitium. Hier brauche ich nur nicht die Vernunf ft, dort glaube ich sie zu brauchen und betrüge sie; ich brauche sie verkehrt. Die Demonstrirsucht ist sowol dem Geschmack als der Vernunf f t entgegengesetzt; die Seichtigkeit aber da ist alles dem Geschmack conform. Man kann allmälig die Erkenntniß die seicht ist vervollkommnen, aber die schon als vollkommen gewiß demonstrirt ist, nicht. Das ist ein vitium in der Form.",
     "dehyphenated": 3,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s55",
   "title": "§201",
   "titleSrc": "heading",
   "headings": [
    "§201"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s55-001",
     "kind": "heading",
     "aa": 446,
     "text": "§201"
    },
    {
     "id": "philippi-s55-002",
     "kind": "text",
     "aa": 446,
     "text": "Empfindung ist eine Vorstellung von der Gegenwart eines Objects, wovon die Ursache in meiner Thätigkeit liegt.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s55-003",
     "kind": "text",
     "aa": 446,
     "text": "Auf das principium materiale der Empfindung läßt sich nicht kommen. Eine Empfindungsvorstellung läßt sich nicht erdichten : die Materie ist mir durch die Sinnen gegeben. Erfahrungen und Empfindungen kommen der Materie nach überein. Beyde sind durch die Gegenwart des Objekts veranlaßt worden ; aber bey jenen ist die Form der Vernunft anzutreffen. Bey der Erfahrung bin ich thätig, bey der Empfindung blos leidend. Eine reflectirte Empfindung ist Erfahrung; ich verstehe dadurch eine Empfindung durch ein Urtheil ausgedrückt. Bey Empfindungen sind blos Begriffe und Vorstellungen, aber bey Erfahrungen sind Urtheile. Kern Thier hat Erfahrung.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s55-004",
     "kind": "text",
     "aa": 446,
     "text": "Keine Erfahrung ist mittelbar; denn das widerspricht sich, sondern alle unmittelbar. Es soll aber eine mittelbare Erfahrung bedeuten : ein Urtheil derVernunfft sofern es durch Erfahrung geschlossen wird.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s55-005",
     "kind": "text",
     "aa": 446,
     "text": "Die Form aller Urtheile ist rational; der Materie nach kann es empirisch oder rational seyn.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s55-006",
     "kind": "text",
     "aa": 446,
     "text": "Alle unsre Erkenntnisse entstehen aus 3 Quellen",
     "ocrConf": 38
    },
    {
     "id": "philippi-s55-007",
     "kind": "text",
     "aa": 446,
     "text": "1 . aus der Vernunf f t a priori",
     "ocrConf": 24
    },
    {
     "id": "philippi-s55-008",
     "kind": "text",
     "aa": 446,
     "text": "2. aus meinen Erfahrungen. 1",
     "ocrConf": 34
    },
    {
     "id": "philippi-s55-009",
     "kind": "text",
     "aa": 446,
     "aaEnd": 447,
     "pages": [
      {
       "p": 447,
       "i": 44
      }
     ],
     "text": "3. aus anderer ihrer Erfahrung. a Posterion-Alle Beweise sind rational. Ein bloß empirischer Beweis ist nicht möglich. Denn ohne Vernunft kann nicht geschlossen werden.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "philippi-s55-010",
     "kind": "text",
     "aa": 447,
     "ms": [
      {
       "p": null,
       "i": 205,
       "raw": "13s",
       "unresolved": true
      }
     ],
     "text": "Wir müssen nicht verwechseln die Schlüsse aus den Erfahrungen mit den Schlüssen von den Erfahrungen. Denn es ist nichts verfänglicher als wenn man einen geheimen Schluß fällt, dessen wir uns nur mittelbar bewust sind und glaubt daß man ihn unmittelbar aus der Erfahrung herhole. Ich Schlüsse und folgre mehr als in meinen Sinnen enthalten ist. Wenn wir das Urtheil was die Erscheinung giebt mit dem Urtheil über die Ursache der Erscheinung übereinstimmig machen; so machen wir aus emem Judicio discursiuo ein intuitiuum. Es kommt offt daß man glaubt man habe ein Judicium intuitiuum primitmum, da man doch nur ein discursiuum hat.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s55-011",
     "kind": "text",
     "aa": 447,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "isj",
       "unresolved": true
      }
     ],
     "text": "Die Erfahrung ist jederzeit ein Begrif. (notio in sensu latiori) Der Sinn ist das Fundament der Erscheinung; der Verstand dasjenige der Erfahrung. Kein Thier kann Erscheinung oder Erfahrung haben. Es handelt nach Empfindungen. Erfahrungen sind Urtheile mithin allgemeingültig, nicht Empfindungen. Ein Erfahrungsbegrif kann was falsches in sich haben, wenn es aus einem falschen Urtheil entspringt; das ist Scheinerfahrung. In Erfahrungen sind Fehler leicht begangen. Die gröste Evidenz liegt nicht in empirischen Wissenschafften ; da sind Fehler immer möglich sondern in der Mathematik.",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "philippi-s55-012",
     "kind": "text",
     "aa": 447,
     "ms": [
      {
       "p": 138,
       "i": 0
      }
     ],
     "text": "§ 204",
     "ocrConf": 12
    },
    {
     "id": "philippi-s55-013",
     "kind": "text",
     "aa": 447,
     "text": "Alle Beweise sind rational der Form nach. Denn der Consequens muß durch die Vernunfft eingesehen werden. Ein Beweis heißt aber aus der Vernunfft wenn die Materie aus derselben entlehnt ist. Indessen sind doch die ersten principia immer empirisch. Vermittelst der reinen Vernunfft können wir nur von denObjecten was beweisen, was Ob jecte der Sinne sind. In der Mathematik und Metaphysik be weißt man durch die reine Vernunfft. Was die reine Vernunfft demonstrirt hat bedarf aus keiner Erfahrung bewiesen zu werden oder bedarf keiner Bestätigung aus ihr.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s55-014",
     "kind": "text",
     "aa": 447,
     "text": "Die Erfahrungen beweisen nie ganz allgemeine Sätze sondern nur die Möglichkeit der Sätze. Die dienen nur das durch die Vernunfft bewiesene Abstractum durch concrete Fälle zu illustriren. Von der Wirklichkeit kann man keine Beschaffenheit aus der Erfahrung entlehnen. In s'Gravesandes Logüc sind beiderley Beweise verglichen.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s55-015",
     "kind": "text",
     "aa": 448,
     "text": "Die dienen nur das durch die Vernunft bewiesene Abstractum durch concrete Fälle zu illustriren.",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s56",
   "title": "§205",
   "titleSrc": "heading",
   "headings": [
    "§205"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s56-001",
     "kind": "heading",
     "aa": 448,
     "text": "§205"
    },
    {
     "id": "philippi-s56-002",
     "kind": "text",
     "aa": 448,
     "text": "Alle Beweise die auf wirkliche Gegenstände der Erfahrung gehen sind partim a priori, partim a posteriori geführt.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s56-003",
     "kind": "text",
     "aa": 448,
     "text": "Die Vereinbarung der Vernunfft mit der Erfahrung geschieht entweder durch die Coordination oder Subordination. In so fern die Vernunfft Regeln auf die Erfahrung appliciret werden, so ist das eine Subordination. In so fern sowol die Vernunfft als Erfahrung jedes besonders genommen ein Grund einer besondern Gewißheit ist, so ist das Coordination. In der Experimentalphysik sucht man diese Vereinbarung z. E. daß die Perpendikel wenn sie nur nicht über 5 Grad sind große und kleine Bogen in gleicher Zeit machen beweise ich erst durch Vernunfft. Wenn die Vernunfft complet demonstrirt, so kann die Probe aus der Erfahrung immer entlehnt wTerden.",
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "philippi-s56-004",
     "kind": "text",
     "aa": 448,
     "ms": [
      {
       "p": 139,
       "i": 0,
       "raw": "13»",
       "inferred": true
      }
     ],
     "text": "Viele einander coordirdrte unzureichende Beweise geben niemals eine apodictische Gewißheit. Wenn schon viele Beweise von einer Sache gegeben werden, so taugen sie gemeinhin nicht.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s57",
   "title": "§206",
   "titleSrc": "heading",
   "headings": [
    "§206"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s57-001",
     "kind": "heading",
     "aa": 448,
     "text": "§206"
    },
    {
     "id": "philippi-s57-002",
     "kind": "text",
     "aa": 448,
     "text": "Wißen heißt mit Gewißheit glauben aber in dem Grad etwas erkennen als hinreicht zur Entschlüssung und Handlung. Der Glaube wird erwogen entweder",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s57-003",
     "kind": "text",
     "aa": 448,
     "text": "1. als ein Glaube an Sachen, oder",
     "ocrConf": 46
    },
    {
     "id": "philippi-s57-004",
     "kind": "text",
     "aa": 448,
     "text": "2. als ein Glaube an Personen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s57-005",
     "kind": "text",
     "aa": 448,
     "text": "Im ersten Fall glaube ich etwas, im andern glaube ich jemandem.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s57-006",
     "kind": "text",
     "aa": 448,
     "text": "Unmittelbar etwas in solchem Grad für wahr halten als nöthig ist zur Handlung heißt glauben. Etwas aber auf die Aussage anderer für wahr halten heißt jemandem glauben.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s57-007",
     "kind": "text",
     "aa": 448,
     "text": "In vielen gleichgültigen Dingen ist kein persönlicher Glaube nöthig. Es braucht kein Character distinctionis zu seyn; jede Person ist ein gleich großer Grund zur Gewißheit. Es gicbt aber Dinge von deren Gewißheit man nur durch besondre Personen überführt wird. Sie erfordern einen solchen Grad von persönlicher Glaubwürdigkeit den nur ehi besonderer Character von Personen gewährt. Z. E. wenn wir von der Wünschelruthe oder Gespenstern durch Personen von glaubwürdigem Character benachrichtiget werden; so fangen wir an es zu glauben.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s57-008",
     "kind": "text",
     "aa": 449,
     "text": "Ein Zeugniß ist jedes Vorwahrhalten um der Aussage eines andern willen.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s57-009",
     "kind": "text",
     "aa": 449,
     "text": "Der Glaube ist entweder historisch oder moralisch. Im historischen Glauben wird etwas für wahr gehalten weil es vom andern dafür ausgegeben wird. Der moralische Glaube aber besteht im Zutrauen zu der Rechtschaffenheit des Menschen in Ansehung des Künfftigen was geschehen soll. Der historische Glaube besteht im Vorwahrhalten des geschehenen. Z. E. Wenn jemand seine vornehme Abkunfft erzählt, so äussern wir dabey einen historischen Glauben. Wenn aber jemand was verspricht; dann einen moralischen. Man muß treu im Versprechen, wahr im Erzählen seyn.",
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "philippi-s57-010",
     "kind": "text",
     "aa": 449,
     "text": "Der historische Glaube findet auch statt bey Menschen, die nicht die geringste Redlichkeit haben. Der moralische aber nur bey Rechtschaffenen. Kommt aber zu einem der was erzählt die Rechtschaffenheit hinzu, so ist unser historische Glaube um so Adel grösser.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "philippi-s57-011",
     "kind": "text",
     "aa": 449,
     "ms": [
      {
       "p": 140,
       "i": 0,
       "raw": "no",
       "inferred": true
      }
     ],
     "text": "Der Religionsglaube muß vom theologischen unterschieden werden, Jener besteht in der Treue die man im bürgerlichen Leben halten muß. In der Gewissenhaftigkeit z. E. beym creditiren. Bey den Griechen fand kein Credit statt. Daher graeca fide mercari für baar Geld etwas erhandeln.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s57-012",
     "kind": "text",
     "aa": 449,
     "text": "Der theologische Glaube hat eben so wie der historische auf die Treue kein Verhältniß; er ist logisch und geht aufs Gegenwärtige und Vergangene. Er ist von der Art daß man auf Glauben und Hofnung Gutes thut. Der moralische Glaube ist das nothwendige Band der Gesellschafft. Es giebt einen moralischen Glauben an Sachen, wenn ich eine künfftige Belohnung guter Handlungen glaube weil es aus der Natur derselben fließt, nicht weil es ein anderer gesagt.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s57-013",
     "kind": "text",
     "aa": 449,
     "text": "Der natürliche Religionsglaube ist nur bey Tugendhafften.",
     "ocrConf": 32
    }
   ]
  },
  {
   "id": "s58",
   "title": "Vom historischen Glauben.",
   "titleSrc": "heading",
   "headings": [
    "Vom historischen Glauben."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s58-001",
     "kind": "heading",
     "aa": 449,
     "text": "Vom historischen Glauben."
    },
    {
     "id": "philippi-s58-002",
     "kind": "text",
     "aa": 449,
     "text": "Da er aufs Vergangene geht, so sind Erfahrungen seine Objekte. Alle contemplative Sätze, alle Urtheile sind keine Gegenstände von ihm. Wer andrer Urtheile glaubt, macht die dogmatische Erkennt niß zur historischen. Dogmata können keinen andern Grund des Beyfalls verstatten als die eigne Erfahrung und das eigne Urtheil. Zum Zeugen werden sowol logische als moralische Eigenschafften erfordert:",
     "ocrConf": 42
    },
    {
     "id": "philippi-s58-003",
     "kind": "text",
     "aa": 449,
     "text": "1. Er muß genügsame Erkenntniß haben Erfahrungen anzustellen",
     "ocrConf": 42
    },
    {
     "id": "philippi-s58-004",
     "kind": "text",
     "aa": 449,
     "text": "2. Er muß das Erfahrne gut behalten haben.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s58-005",
     "kind": "text",
     "aa": 450,
     "text": "3. Er muß Vermögen haben durch Worte sich verständlich auszudrücken. Er muß",
     "dehyphenated": 1,
     "ocrConf": 32
    },
    {
     "id": "philippi-s58-006",
     "kind": "text",
     "aa": 450,
     "text": "4. einen guten Willen haben die Wahrheit und keinen Nutzen haben die Falschheit zu sagen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s58-007",
     "kind": "text",
     "aa": 450,
     "text": "Eine Außage auf ein Dogma ist kein Zeugniß sondern auf Erfahrung. Ein Zeuge ist also der eine Erfahrung aussagt; es muß auch der Zustand des Zeugen untersucht werden a. logisch ob er in Umständen gewesen die Wahrheit zu erkennen b. praktisch; ob er nicht durch Bedrängnisse zu seinem Zeugniß bestimmet worden sey.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s58-008",
     "kind": "text",
     "aa": 450,
     "ms": [
      {
       "p": 141,
       "i": 379,
       "raw": "Mi",
       "inferred": true
      }
     ],
     "text": "Der gröste Theil unsrer historischen Erkenntniß entspringt aus dem Glauben. Es ist ein großes Hülfsmittel unsre Erkenntniß zu erweitern daß wir fremde Erfahrung adoptiren können. Bey dem historischen Glauben setzt man voraus eine Neigung zur Wahrheit die aus Ehrliebe entspringt. Da nun gelehrte Leute und Leute von Stande mehr auf die Ehre sehen als der gemeine Mann der sich wenig Einfluß von ihr in sein Interesse versprechen kann; so vermuthet man auch bey jenen mehr Glaubwürdigkeit als bey diesen.",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s59",
   "title": "§208",
   "titleSrc": "heading",
   "headings": [
    "§208"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s59-001",
     "kind": "heading",
     "aa": 450,
     "text": "§208"
    },
    {
     "id": "philippi-s59-002",
     "kind": "text",
     "aa": 450,
     "text": "Ein Augenzeuge ist der seine eigene Erfahrung hat, ein Hörenzeuge aber der andrer Zeugniß hat. Dieser hat nur eine mittelbare Glaubwürdigkeit.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s59-003",
     "kind": "text",
     "aa": 450,
     "text": "In der Reihe der subordinirten Zeugen nimmt die historische Glaubwürdigkeit ab ; in der Reihe der coordinirten Zeugen nimmt sie zu. Die Reihe der coordinirten Zeugnisse heißt das öffentliche Gerüchte, der subordinirten Zeugnisse hingegen eine mündliche Ueberlieferung. Wenn in den coordinirten Zeugnissen der Augenzeuge unbekannt ist ; so heißts eine gemeine Sage.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s60",
   "title": "§213",
   "titleSrc": "heading",
   "headings": [
    "§213"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s60-001",
     "kind": "heading",
     "aa": 450,
     "text": "§213"
    },
    {
     "id": "philippi-s60-002",
     "kind": "text",
     "aa": 450,
     "text": "Der moralische Unglaube bedeutet den Mangel alles Zutrauens zur moralischen Beschaffenheit des andern. Die Leichtgläubigkeit besteht in einer Neigung aus logischen Gründen der Glaubwürdigkeit eines Zeugen Beyfall zu geben. Unerfahrenheit ist ihre Qvelle.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s60-003",
     "kind": "text",
     "aa": 450,
     "text": "Der logische Unglaube liegt nicht in der Pravität des Herzens wie der moralische; sondern in der Unerfahrenheit in der Litteratur.",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s61",
   "title": "Von der praktischen gelehrten Erkenntniß. §216",
   "titleSrc": "heading",
   "headings": [
    "Von der praktischen gelehrten Erkenntniß.",
    "§216"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s61-001",
     "kind": "heading",
     "aa": 451,
     "text": "Von der praktischen gelehrten Erkenntniß. §216"
    },
    {
     "id": "philippi-s61-002",
     "kind": "text",
     "aa": 451,
     "text": "Eine Erkenntniß heißt praktisch die ein Verhältniß hat zur Bewegung unseres Willens. Alle praktische Erkenntniß schreibt entweder Zwecke vor oder lehrt nur die Mittel zu behebigen Zwecken zu gelangen. Alle Lehren der Klugheit und Geschicklichkeit gehen nur auf die Mittel; Sittlichkeit auf die Zwecke.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s61-003",
     "kind": "text",
     "aa": 451,
     "text": "Der Autor redet vom Verhältnisse zum freyen Willen. Es gehört die ganze Section nicht zur Logik ; sondern che praktische Vollkommenheit gehört zur Moral.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s61-004",
     "kind": "text",
     "aa": 451,
     "text": "Alle Erkenntniß ist entweder theoretisch oder praktisch. Das praktische kann entweder blos eine Speculation über die Praxi seyn oder wirkliche Anleitung. Die praktische Logik ist eine Speculation über die Praxis.",
     "dehyphenated": 1,
     "ocrConf": 49
    }
   ]
  },
  {
   "id": "s62",
   "title": "Von gelehrten Begriffen.",
   "titleSrc": "heading",
   "headings": [
    "Von gelehrten Begriffen."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s62-001",
     "kind": "heading",
     "aa": 451,
     "text": "Von gelehrten Begriffen."
    },
    {
     "id": "philippi-s62-002",
     "kind": "text",
     "aa": 451,
     "ms": [
      {
       "p": 142,
       "i": 281,
       "raw": "1**",
       "inferred": true
      }
     ],
     "text": "Eine Vorstellung durch Sinne heißt Empfindung, durch den Verstand Erscheinung, durch die Vernunfft 1. ein Begriff. Ein Begriff ist eine aUgemeine Vorstellung; Vorstellungen die nicht allgemein sind, sind keine Begriffe. Die Empfindungen sie mögen noch so allgemein genommen werden bleiben einzele Vorstellungen. Eine einzelne Vor-Stellung ist Anschauung. 2. Zum Begriff wird erfordert daß ich bey der allgemeinen Vorstellung zugleich ihr Verhältniß in der Reihe der Subordination mit andern Vorstellungen einsehe. Die Vernunfft subordinirt. Alle Erscheinungen sind nur Coordinationes.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s62-003",
     "kind": "text",
     "aa": 451,
     "text": "Die Materie aller unsrer Erkenntniß hegt in den Sinnen. Die Grade zu denen wir steigen sind",
     "ocrConf": 48
    },
    {
     "id": "philippi-s62-004",
     "kind": "text",
     "aa": 451,
     "text": "1. repraesentatio Vorstellung überhaupt.",
     "ocrConf": 54
    },
    {
     "id": "philippi-s62-005",
     "kind": "text",
     "aa": 451,
     "text": "2. conceptus allgemeine Verstandesbegriffe.",
     "ocrConf": 58
    },
    {
     "id": "philippi-s62-006",
     "kind": "text",
     "aa": 451,
     "text": "3. idcae allgemeine Begriffe der Vernunfft. Repraesentatio eius quod phaenomenis pluribus est commune, est conceptus empiricus.",
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s63",
   "title": "§250",
   "titleSrc": "heading",
   "headings": [
    "§250"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s63-001",
     "kind": "heading",
     "aa": 451,
     "text": "§250"
    },
    {
     "id": "philippi-s63-002",
     "kind": "text",
     "aa": 451,
     "text": "Gemeine Begriffe sind besser als gelehrte. Ein Begriff ist ein Resultat von vielen Vorstellungen die ich zusammennehme und als eine betrachte.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "philippi-s63-003",
     "kind": "text",
     "aa": 451,
     "aaEnd": 452,
     "pages": [
      {
       "p": 452,
       "i": 135
      }
     ],
     "text": "Ein aesthetischer Begrif entspringt durch die Menge coordinirter Vorstellungen. Die Materie ist das Verhältniß der Merkmale auf Gefühl und Geschmack; seine Form ist die Coordination. Ein Vernunfft begriff entspringt aus der Subordination der Vorstellungen. Seine Materie sind die Gesetze der Vernunfft selbst; die Form die Subordination. Ein gelehrter Begriff ist nicht der der viel Gelehrsamkeit enthält, sondern auf den Gelehrte sehr attendiren.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s64",
   "title": "§254",
   "titleSrc": "heading",
   "headings": [
    "§254"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s64-001",
     "kind": "heading",
     "aa": 452,
     "text": "§254"
    },
    {
     "id": "philippi-s64-002",
     "kind": "text",
     "aa": 452,
     "text": "Der Autor glaubt daß wir durch Abstraction zu Begriffen gelangen. Aber durch Abstraction kommen wir zu keiner Erkenntniß; die Erkennt niß muß vor der Abstraction schon da seyn. Man ändert durch die Abstraktion nur die Form.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "philippi-s64-003",
     "kind": "text",
     "aa": 452,
     "text": "Alle Begriffe sind uns entweder",
     "ocrConf": 42
    },
    {
     "id": "philippi-s64-004",
     "kind": "text",
     "aa": 452,
     "text": "1. gegeben, oder",
     "ocrConf": 55
    },
    {
     "id": "philippi-s64-005",
     "kind": "text",
     "aa": 452,
     "text": "2. der Verstand hat sie durch Verbindung selbst gemacht. Das sind erdichtete Begriffe. Die gegebene sind entweder gegeben durch die Erfahrung a posteriori, oder auch a priori durch die reine Vernunft.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s64-006",
     "kind": "text",
     "aa": 452,
     "text": "Daher sind alle Begriffe einzutheilen in conceptus",
     "ocrConf": 46
    },
    {
     "id": "philippi-s64-007",
     "kind": "text",
     "aa": 452,
     "ms": [
      {
       "p": 143,
       "i": 133
      }
     ],
     "text": "1. abstractos und rationales. Conceptus abstractus ist z. E. der Begrif der Gattung (genus). Die Materie entspringt durch Erfahrung, die Form der Allgemeinheit aber durch Abstraction. Es entspringt nicht der Begrif durch Abstraction, sondern er wird durch dieselbe nur allgemein gemacht. Demnach ist Abstraction nicht ein von der Erfahrung verschiedener zweyter Weg zu Begriffen zu gelangen ; denn sie ist nur das Mittel Erfahrungen allgemein zu machen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s64-008",
     "kind": "text",
     "aa": 452,
     "text": "2. Wir haben auch reine Vernunfftbegriffe, die a priori gegeben sind. Solche Begriffe sind der Gegenstand der reinen Philosophie d. i. der Metaphysik und Moral. Es sind dies Begriffe die nicht entspringen durch das was in die Sinne fällt, die nicht erdichtet sind und nicht abgezogen werden können von den Vorstellungen durch die Sinne. Wo haben wir sie denn her ? Der Verstand hat, indem er auf sein eignes Verfahren bey Gelegenheit der Erfahrungen attendirte, sie sich erworben.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s64-009",
     "kind": "text",
     "aa": 452,
     "text": "Ein Vitium subreptionis ists wenn man für eine Erfahrung aus den Sinnen ausgiebt was doch ein Vernunfftbegriff ist ; wie z. E. Hutcheson und Shaftesbury den Begrif der Tugend für einen Erfahrungsbegrif Welten.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s64-010",
     "kind": "text",
     "aa": 452,
     "aaEnd": 453,
     "pages": [
      {
       "p": 453,
       "i": 198
      }
     ],
     "text": "Reine Verstandesbegriffe drücken also aus die Gesetze nach denen der Verstand verfährt. Und da ein jedes Object nichts anders ist als ein etwas was der Verstand bey einer Empfindung mit gewissen Be-Stimmungen setzt; so folgt daß alles was der Verstand und die Vernunfft durch Begriffe erkennen obiectiv sey, die Empfindungen aber was Subiectives.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s64-011",
     "kind": "text",
     "aa": 453,
     "text": "Wer Erfahrungen hat, hat deßwegen noch nicht Erfahrungsbegriffe. Sie zu erlangen muß man auf viel Gegenstände, auf ihre Uebereinstimmung acht haben und die notas primarias das ist das essentielle von den notis secundasiis oder dem accidentellen unterscheiden. Es gehört ein philosophischer Geist dazu.",
     "dehyphenated": 1,
     "ocrConf": 37
    }
   ]
  },
  {
   "id": "s65",
   "title": "§ 259",
   "titleSrc": "heading",
   "headings": [
    "§ 259"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s65-001",
     "kind": "heading",
     "aa": 453,
     "text": "§ 259"
    },
    {
     "id": "philippi-s65-002",
     "kind": "text",
     "aa": 453,
     "text": "Bey der logischen Absonderung vergleichen wir viele Begriffe mit einander und sehen was sie gemeinschaftliches haben. Wenn viele Begriffe dasselbe Merkmal haben; so mache ich das Merkmal zum Begrif worinn als denn alle diese Begriffe enthalten sind.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s65-003",
     "kind": "text",
     "aa": 453,
     "text": "Die Abstraktion ist eine Handlung der Subordination. Ich subordinire Begriffe unter einen.",
     "dehyphenated": 1,
     "ocrConf": 52
    },
    {
     "id": "philippi-s65-004",
     "kind": "text",
     "aa": 453,
     "ms": [
      {
       "p": 144,
       "i": 139
      }
     ],
     "text": "Die Abstraktion kann statt finden bey den reinen Vernunfftbegriffen. Weil diese aber nicht von den Gegenständen sondern von der Thätigkeit der reinen Vernunfft hergenommen sind; so nennt man sie auch nicht abstrakte, abgesonderte Begriffe. Herr Professor Kant nennt sie in seiner Disputation absondernde abstrahirende Begriffe.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s65-005",
     "kind": "text",
     "aa": 453,
     "text": "Bey der Erfahrung findet die Abstraktion am meisten statt. Daher heißen auch eigentlich die allgemeine Erfahrungsbegriffe abstrahirte. Alle abstrakte Begriffe sind allgemeine, aber nicht alle allgemeine abstrakte.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s66",
   "title": "§ 260",
   "titleSrc": "heading",
   "headings": [
    "§ 260"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s66-001",
     "kind": "heading",
     "aa": 453,
     "text": "§ 260"
    },
    {
     "id": "philippi-s66-002",
     "kind": "text",
     "aa": 453,
     "text": "Alle Erdichtungen entspringen entweder durch willkürliche Verbindung deßjenigen was in der Erfahrung getrennt ist, oder durch willkürliche Trennung dessen was in der Erfahrung verbunden ist.",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s66-003",
     "kind": "text",
     "aa": 453,
     "text": "Ein Begriff heißt ein Merkmal wenn er als ein Theil zum ganzen Begriff gehört. Es ist aber auch wiederum das Merkmal ein Erkennt -nißgrund oder ein allgemeiner Begriff unter dem alle die Begriffe gehören in denen es als ein Theil enthalten ist.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s66-004",
     "kind": "text",
     "aa": 453,
     "text": "Ein Merkmal kann also in einem zwiefachen Respectu betrachtet werden ... Es ist",
     "ocrConf": 43
    },
    {
     "id": "philippi-s66-005",
     "kind": "text",
     "aa": 453,
     "text": "1. ein allgemeiner Begriff unter den alle die Begriffe gehören deren Merkmal er ist. Das ist respectu subordinationis",
     "ocrConf": 47
    },
    {
     "id": "philippi-s66-006",
     "kind": "text",
     "aa": 454,
     "text": "2. er ist ein Theil von einem jeden dieser Begriffe respectu coordinationis.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s66-007",
     "kind": "text",
     "aa": 454,
     "text": "Die Menge der Dinge so unter einem Begriff als einer nota communi enthalten ist, macht die Sphaera des Conceptus communis aus. Je mehrern Dingen also ein conceptus gemein ist, desto grösser ist seine Sphäre.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s66-008",
     "kind": "text",
     "aa": 454,
     "text": "Je mehr ein Begriff unter sich enthält, je mehrern Dingen er gemein ist, desto weniger enthält er in sich; d. i. Ein je kleinerer Theil ist er von jedem Begrif den er unter sich faßt.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s66-009",
     "kind": "text",
     "aa": 454,
     "text": "So wie die Merkmale in der Coordination zusammenstimmen den allgemeinen Begrif auszumachen; so stehen sie untereinander auch in Subordination. Denn ein Begriff hat Merkmale, diese haben wieder von sich Merkmale und so weiter fort in serie subordinationis. Je sinnlicher die Begriffe sind, desto grösser ist da die Coordination der Merkmale; desto mehr enthalten sie in sich, aber desto wemger unter sich. Je mehr die Begriffe aus der Vernunf f t sind, desto mehr enthalten sie unter sich, desto weniger aber in sich.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s66-010",
     "kind": "text",
     "aa": 454,
     "ms": [
      {
       "p": 145,
       "i": 0
      }
     ],
     "text": "Euler hat das durch Figuren sinnlich zu machen gesucht. Aber es ist schlimmer daß sich nur die Coordination nicht aber die Subordination in Figuren zeigen läßt. Denn die Sinne oder vielmehr der Verstand kann nur coordiniren die Vernunfft subordinirt.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "philippi-s66-011",
     "kind": "text",
     "aa": 454,
     "text": "Ein Conceptus heißt superior soferne er einen andern Begrif unter sich enthält, inferior soferne er unter einem enthalten ist. Was in einem Verhältniße conceptus superior ist, kann in einem andern conceptus inferior werden und umgekehrt.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s66-012",
     "kind": "text",
     "aa": 454,
     "text": "Quo superior est conceptus i. e. quo remotior in serie subordinatorum eo maioris sphaerae est. Donec conceptus absolute superior i. e. summus, sit maximae sphaerae et omnia obiecta sub se contineat",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s66-013",
     "kind": "text",
     "aa": 454,
     "text": "Quo minor est conceptus, eo minoris sphaerae est donec conceptus infimus sit nullius sphaerae i. e. singularis.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s66-014",
     "kind": "text",
     "aa": 454,
     "text": "Der Conceptus deßen Sphäre nur ein Theil einer anderen Sphäre ist, ist angustior.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s66-015",
     "kind": "text",
     "aa": 454,
     "text": "Also sind der oberste Begrif das ist der eines Gegenstandes überhaupt, und der niedrigste d. i. der einzelne die Grenzen der Subordination.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s66-016",
     "kind": "text",
     "aa": 454,
     "aaEnd": 455,
     "pages": [
      {
       "p": 455,
       "i": 131
      }
     ],
     "text": "Einen jeden coneeptum communem wenn er als enthalten in nota inferiori betrachtet wird, erwäge ich in concreto. Z. E. Wenn ich von der Erziehung überhaupt rede, und dann auf die Erziehung der Fürsten gehe; so betrachte ich den Begrif der Erziehung in concreto.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "philippi-s66-017",
     "kind": "text",
     "aa": 455,
     "text": "Ein jeder Conceptus communis heißt species in Ansehung seines superioris; genus in Ansehung seines inferioris. Es giebt also ein genus suinmum und eine species infima als die Grenzen der Subordination.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s66-018",
     "kind": "text",
     "aa": 455,
     "text": "Dies ist die logische Subordination da ich einen Begrif als enthalten unter einem allgemeinen mir vorstelle. Die real Subordination aber ist die Unterordnung der Folge zum Grunde, wenn durch den Grund alles was in der Folge enthalten, gesetzt ist. Frühzeitig in der Jugend subordiniren wir schon die Begriffe logisch; aber real zu subordiniren dazu erlangen wir nur nach und nach das Vermögen.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s66-019",
     "kind": "text",
     "aa": 455,
     "text": "Einen jeden conceptum communem, wenn er als enthalten unter der nota superiori betrachtet wird erwäge ich in abstracto. Das abstracte urtheile ich von viel Dingen wenig in concreto von wenig Dingen viel.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s66-020",
     "kind": "text",
     "aa": 455,
     "text": "Durch den Verstand erkenne ich an Dingen wenig aber deutlich. Durch die Sinne viel aber verworren.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s66-021",
     "kind": "text",
     "aa": 455,
     "text": "Eine deutliche Erkenntniß durch unzureichende Merkmale heißt eine Beschreibung. Die enthält solche Merkmale als hinreichen die Sache zu unterscheiden von vielen, die Definition aber von allen Dingen.",
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s67",
   "title": "Von den Erklärungen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Erklärungen."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s67-001",
     "kind": "heading",
     "aa": 455,
     "text": "Von den Erklärungen."
    },
    {
     "id": "philippi-s67-002",
     "kind": "text",
     "aa": 455,
     "text": "Die Erklärung von der Erklärung zu geben ist nicht so schwer als es scheint.",
     "ocrConf": 29
    },
    {
     "id": "philippi-s67-003",
     "kind": "text",
     "aa": 455,
     "text": "Die logische Vollkommenheiten steigen so",
     "ocrConf": 52
    },
    {
     "id": "philippi-s67-004",
     "kind": "text",
     "aa": 455,
     "text": "1. Klarheit, wenn ich mir einer Vorstellung bewust bin",
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-005",
     "kind": "text",
     "aa": 455,
     "text": "2. Deutlichkeit, wenn ich mir der Merkmale der Vorstellung bewust",
     "ocrConf": 38
    },
    {
     "id": "philippi-s67-006",
     "kind": "text",
     "aa": 455,
     "text": "bin.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-007",
     "kind": "text",
     "aa": 455,
     "text": "3. Wenn ich mir alle Merkmale die nur dazu gehören klar vorstelle.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s67-008",
     "kind": "text",
     "aa": 455,
     "ms": [
      {
       "p": 146,
       "i": 12,
       "raw": "»«",
       "inferred": true
      }
     ],
     "text": "Completudo. 4. Praecisio. Wenn ich die Merkmale ad minores terniinos reducire.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s67-009",
     "kind": "text",
     "aa": 455,
     "text": "Ein deutlicher Begrif heißt complet wenn die Merkmale zusammengenommen dem ganzen Begrif gleich sind. Ich kann Merkmale von den Merkmalen erkennen und zwar in indefinitum immer fort. Also hat die intensiuitaet der Deutlichkeit viel Grade.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "philippi-s67-010",
     "kind": "text",
     "aa": 455,
     "text": "Ein adaequater Begrif ist Definition.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-011",
     "kind": "text",
     "aa": 456,
     "text": "Die Materie der Definition sind elementarsätze ; das ist erste Merkmale und Vorstellungen die ich durch Urtheile herausbringe. Die Form ist die Completudo der Merkmale, und ihre Praecision, daß der Begrif adaequat sey.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "philippi-s67-012",
     "kind": "text",
     "aa": 456,
     "text": "Es ist ein Unterschied zwischen dem: einen Begrif deutlich machen und dem: einen deutlichen Begrif machen.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s67-013",
     "kind": "text",
     "aa": 456,
     "text": "Wenn mir ein Begrif nach seiner Materie oder den Merkmalen nach gegeben ist und ich suche per analysin die Merkmale klar, so mache ich einen gegebenen Begrif deutlich. Aber wenn ich einen Begriff mit samt seiner Deutlichkeit hervorbringe, so mache ich mir einen deutlichen Begrif.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-014",
     "kind": "text",
     "aa": 456,
     "text": "Die Definitionen sind entweder nominal, wenn der Begrif zureichend ausdrükt alles was ich von der Sache erkenne; oder real, wenn der Begriff zureicht alles was der Sache selbst (dem Object) zukommt daraus abzuleiten.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s67-015",
     "kind": "text",
     "aa": 456,
     "text": "Die erstem sind leichter; denn da kann ich bald alle Merkmale auffinden die zusammengenommen meinen ganzen Begrif erschöpfen, aber schwer ists die Merkmale anzugeben, woraus alle Bestimmungen die der Sache selbst zukommen abzuleiten sind. Die Nominal-Definition heißt auch das logische Wesen d. i. der erste Grundbegrif von allem dem was ich an der Sache erkenne. Die Realdefinition aber muß enthalten alles was an dem Dinge selbst nur möglich ist. Ich soll nicht nur alle Merkmale angeben die meinen Begriff ausmachen, sondern alle Merkmale die man jemals davon erhalten wird. Ich soll die Sache defmiren, nicht den Namen.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s67-016",
     "kind": "text",
     "aa": 456,
     "text": "Viele Definitionen kann man brauchen als wahre Sätze, obgleich nicht als Definitionen.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s67-017",
     "kind": "text",
     "aa": 456,
     "text": "Wenn ein Satz also auch als Definition falsch ist, so kann er doch als ein Urteil wahr seyn. Die Definition giebt eine Sufficienz zu aller Absicht.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-018",
     "kind": "text",
     "aa": 456,
     "text": "Wenn das Merkmahl nicht ein Grund der Deutlichkeit des Subiects ist, so ist der Begrif den ich dadurch erlange undeutlich.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s67-019",
     "kind": "text",
     "aa": 456,
     "ms": [
      {
       "p": 147,
       "i": 0
      }
     ],
     "text": "Die Merkmahle in einer Definition müßen nicht subordinirt sondern coordinirt seyn. Sonst heißt es Conceptus indeterminatus, vagus.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-020",
     "kind": "text",
     "aa": 456,
     "text": "Conceptus rem adaequat, das heißt die Definition hat weder mehr noch weniger Merkmahle in sich als dem Begrif zukömmt.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s67-021",
     "kind": "text",
     "aa": 457,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "14«",
       "unresolved": true
      }
     ],
     "text": "1.) Alle Definitionen empirischer Begriffe sind nominal. Reale sind nicht möglich. Denn die sollen alle Bestimmungen und Merkmale angeben. Ich kenne aber von Dingen der Natur deren nur sehr wenige.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-022",
     "kind": "text",
     "aa": 457,
     "text": "Je concreter ein Erfahrungsbegrif ist, desto weniger ist er zu definiren. Ist er ganz abstrakt z. E. Körper, so gehts an.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-023",
     "kind": "text",
     "aa": 457,
     "ms": [
      {
       "p": null,
       "i": 130,
       "raw": "ut",
       "unresolved": true
      }
     ],
     "text": "Es fehlt mir die completudo der Merkmale bey Gegenständen der Sinne. Es werden täglich immer mehr Merkmale entdeckt. Daher ist es in Physiken unnütze, wenn man Definitionen findt.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-024",
     "kind": "text",
     "aa": 457,
     "text": "Es dienen die empirische Definitionen nur die Wortbedeutung festzusetzen; sie sind grammatisch nicht logisch.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-025",
     "kind": "text",
     "aa": 457,
     "text": "II. Bey intellectualen Begriffen sind Realdefinitionen möglich weil mein Begrif alles enthält was die Sache ist. Mein Begrif macht die Sache aus.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s67-026",
     "kind": "text",
     "aa": 457,
     "text": "Es ist auch nöthig intellectuale Begriffe zu definiren, weil durch meinen Begrif die Sache gegeben ist.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-027",
     "kind": "text",
     "aa": 457,
     "text": "Wie mache ich nun Definitionen von intellectualen Begriffen ? Ich mache sie per analysin und zwar also daß ich dasjenige aus dessen Zusammensetzung der Verstand den Begrif sich gebildet das ist die Elementarsätze auswickele und entfalte. Denn einem jeden intellectualen Begrif Hegen Eiementarsätze zum Grunde, aus denen der Verstand ihn sich gemacht hat. Z. E. Körper ist ein Vernunff tbegrif ; es ist das was allen Empfindungen gemein ist, analysire ich weiter, so finde ich daß der Begrif des Körpers aus diesen Elementarsätzen zusammengesetzt ist :",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-028",
     "kind": "text",
     "aa": 457,
     "text": "1. aus der Ausdehnung",
     "ocrConf": 39
    },
    {
     "id": "philippi-s67-029",
     "kind": "text",
     "aa": 457,
     "text": "2. aus der Undurchdringlichkeit.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s67-030",
     "kind": "text",
     "aa": 457,
     "text": "3. aus der Trägheit.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s67-031",
     "kind": "text",
     "aa": 457,
     "text": "4. aus der Gestalt. Ich bekomme also die Definition des Körpers. In der Mathematik sind gleichfalls alle Sachen durch die Begriffe gegeben, also kann man da auch und zwar da am leichtesten Realdefinitionen geben. Er sagt, wir wollen uns eine Figur denken, die 6 gleiche Seiten hat und es Sechseck nennen; wohlan so ists ein Sechseck.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s67-032",
     "kind": "text",
     "aa": 457,
     "text": "Da mache ich willkürlich deutliche Begriffe durch Definitionen; aber in der Philosophie mache ich gegebene Begriffe durch die Definitionen deutlich.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-033",
     "kind": "text",
     "aa": 457,
     "text": "Will ich also Definitionen machen; so muß ich",
     "ocrConf": 39
    },
    {
     "id": "philippi-s67-034",
     "kind": "text",
     "aa": 457,
     "text": "1. wahre Säzze suchen",
     "ocrConf": 44
    },
    {
     "id": "philippi-s67-035",
     "kind": "text",
     "aa": 458,
     "text": "2. alle Merkmale die im Begriff liegen klaube ich aus und mache sie klar.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-036",
     "kind": "text",
     "aa": 458,
     "text": "Bey anämischen Definitionen als in der reinen Vernunfft und Mathematik geht der verworrene Begrif vorher.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s67-037",
     "kind": "text",
     "aa": 458,
     "text": "Die Completudo und Praecision machen also einen adaequaten Begrif aus, und nicht wie beym Wolff, wenn nur die Merkmahle von einem Begrif wieder deutlich seyn.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-038",
     "kind": "text",
     "aa": 458,
     "text": "Zur Definition wird erfordert, daß alle Merkmale angegeben werden. Wenn ich nun aber von einem Begriff nur einige Merkmale habe, kann ich daraus nicht schon alles Schlüssen was daraus folgt ohne daß ich die andern Merkmale alle beisammen habe ? Z. E. Ich weiß vom Körper nur daß er theilbar sey. kann ich daraus nicht sicher Schlüssen, daß er zusammengesetzt sey, ob ich gleich die Undurchdringlichkeit, Ausdehnung etc. etc. welches auch Merkmale am Körper sind, nicht kenne ?",
     "ocrConf": 44
    },
    {
     "id": "philippi-s67-039",
     "kind": "text",
     "aa": 458,
     "text": "Die 4 Handlungen sind zur Examinirung und Verfertigung einer Definition nöthig.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s67-040",
     "kind": "text",
     "aa": 458,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "14g",
       "unresolved": true
      }
     ],
     "text": "l. ob die Definition als ein Satz wahr sey",
     "ocrConf": 34
    },
    {
     "id": "philippi-s67-041",
     "kind": "text",
     "aa": 458,
     "text": "2. ob sie als ein Begrif deutlich sey",
     "ocrConf": 40
    },
    {
     "id": "philippi-s67-042",
     "kind": "text",
     "aa": 458,
     "text": "3. ob sie als ein deutlicher Begrif ausführlich sey, complet und ob",
     "ocrConf": 30
    },
    {
     "id": "philippi-s67-043",
     "kind": "text",
     "aa": 458,
     "text": "die Merkmale wahr sind ?",
     "ocrConf": 38
    },
    {
     "id": "philippi-s67-044",
     "kind": "text",
     "aa": 458,
     "text": "4. ob sie als ein ausführlicher Begrif praecis sey; ob nicht einige",
     "ocrConf": 37
    },
    {
     "id": "philippi-s67-045",
     "kind": "text",
     "aa": 458,
     "text": "Merkmale einerley seyen.",
     "ocrConf": 55
    },
    {
     "id": "philippi-s67-046",
     "kind": "text",
     "aa": 458,
     "text": "Alle willkürlichen Begriffe müssen erst definirt werden. Ohne daß Definitionen vorhergehn kann ich nichts sagen. Aber bey gegebenen Begriffen da sind Definitionen offt nicht einmal nöthig, geschweige daß sie vorhergehen sollten.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s67-047",
     "kind": "text",
     "aa": 458,
     "text": "Der Ursprung willkürlicher Sätze ist die Synthesis. x4us der Analysi kann kein Begriff entstehen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-048",
     "kind": "text",
     "aa": 458,
     "text": "Alle Definitionen sollen dienen durch Zergliederung derselben das Object besser kennen zu lernen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-049",
     "kind": "text",
     "aa": 458,
     "text": "Hieraus sieht man daß man vor der Definition Sätze schon brauchen kann, und daß die Definitionen nicht immer nothwendig sind. Sie smd es nur denn, wenn ich alle Merkmale brauche.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s67-050",
     "kind": "text",
     "aa": 459,
     "text": "Ich kann die Elementarsätze vor alle Definitionen brauchen; und sie müssen auch vorhergehn.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-051",
     "kind": "text",
     "aa": 459,
     "text": "Denn in der Philosophie, wo die Begriffe per analysin definirt werden, sind die Definitionen nicht das erste sondern das letzte.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-052",
     "kind": "text",
     "aa": 459,
     "text": "In der Mathematik wo die Erklärung das Objekt schafft, da müssen sie vorangehen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s67-053",
     "kind": "text",
     "aa": 459,
     "text": "Definitionen sollen Mittel der Deutlichkeit seyn.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s67-054",
     "kind": "text",
     "aa": 459,
     "text": "Deutlichkeit wird nur durch Urtheile erhalten.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s67-055",
     "kind": "text",
     "aa": 459,
     "text": "Eine jede Definition ist wie ein Urtheil anzusehen; wo dies Definitum das Subjekt die Definitio das Praedicat ausmacht Wenn das Prädikat mit dem Subjekt einerley ist explicite oder implicite; so ist die Definition tautologisch und kein Mittel der Deutlichkeit.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-056",
     "kind": "text",
     "aa": 459,
     "text": "Eine Erklärung ist latior suo definito, wenn sie nicht zureicht zur Erkenntniß der Verschiedenheit; angustior suo definito, wenn sie nicht zureicht zur Erkenntniß der Einerleyheit. Im erstem Fall hat sie zu viele im andern zu wenig Merkmale. Witzlinge machen Defimtionen ersterer Art, Grübler machen sie zweiter Art.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-057",
     "kind": "text",
     "aa": 459,
     "text": "Wenn Definitionen nur als Säzze wahr sind, wenn sie dann auch nicht alle Merkmale haben ; so können sie doch offt so viel haben als zureichen die Sache von allen die ich kenne zu unterscheiden oder nur einen ziemlichen Grad von Deutlichkeit zu geben; und dann sind sie schon sehr brauchbar und muß man sie wegen des Fehlers der Completudinis nicht verwerfen. So sind mehrentheils Wolfische Definitionen.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-058",
     "kind": "text",
     "aa": 459,
     "text": "Die Definitiones willkürlicher Begriffe als in der Mathematik können niemals irren ; denn das Definitum ist da nichts anders als das was ich durch die Definition festgesetzt : aber des Philosophen seine sind beständig. Der muß wenn er aus den Preliminair oder Elementarsätzen so viel er braucht, Schlüssen kann, das Definiren lieber unterlassen und nur im Nothfall brauchen.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s67-059",
     "kind": "text",
     "aa": 459,
     "text": "Kein Gegenstand der Erfahrung kann erkläret werden.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s67-060",
     "kind": "text",
     "aa": 459,
     "text": "Bey allen willkührlichen Begriffen muß die Definition den Anfang machen.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s67-061",
     "kind": "text",
     "aa": 459,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "14»",
       "unresolved": true
      }
     ],
     "text": "§ 280",
     "ocrConf": 15
    },
    {
     "id": "philippi-s67-062",
     "kind": "text",
     "aa": 459,
     "text": "Worterklarung ist die deutliche Vorstellung der Bedeutung des Wortes. Sie sind im Grunde betrachtet nicht Mittel einen deutlichen Begrif zu bekommen: Sie geben mir nur bekanntere synonymische Worte.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s67-063",
     "kind": "text",
     "aa": 460,
     "text": "Realerklärungen sollen einen zwiefachen Gebrauch haben,",
     "ocrConf": 51
    },
    {
     "id": "philippi-s67-064",
     "kind": "text",
     "aa": 460,
     "text": "1. einen äussern, die Sache von allen zu unterscheiden und 2. einen innern alle Bestimmungen der Sache herzuleiten.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s67-065",
     "kind": "text",
     "aa": 460,
     "text": "Alle Definitionen sind real, denn Nominaldefinitionen sind eigentlich keine Definitiones. Aber sie sind doch in rationalen Erkenntnissen von ungemeinem Gebrauch damit ich mir den Sinn eines Vernunff tbegrifs deutlich mache. Es verstatten aber auch diese Begriffe Realerklärungen die alles enthalten was beständigerweise dem Dinge zukommt, wie in der Moral und Metaphysik. Kurz es können intellectuale Begriffe nominaliter und realiter Erfahrungsbegriffe nominalitcr allein erkläret werden.",
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-066",
     "kind": "text",
     "aa": 460,
     "text": "Ein Matheniatikus, der einen gegebenen Begrif definirt, fehlt sehr, denn er philosophirt alsdann. Aber der Mathematiker muß nicht durch Analysin und der Philosoph nicht durch Synthesin erklären. Durch die Definition wird mir in der Mathematic, der Begrif erst gegeben.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s67-067",
     "kind": "text",
     "aa": 460,
     "text": "Wenn ich über einen willkürlichen Begrif etwas urtheile, so muß ich ihn erst festsetzen. Sind es Verstandeserkenntnisse so muß die Analysis ihn erklären.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s67-068",
     "kind": "text",
     "aa": 460,
     "text": "Analytische Definitionen machen nie den Anfang. Die synthetischen müßen stets den Anfang machen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s67-069",
     "kind": "text",
     "aa": 460,
     "ms": [
      {
       "p": 150,
       "i": 0
      }
     ],
     "text": "Die Description ist eine comparative Definition. Alle Gegenstände der Erfahrung erlauben keine Definition, sondern nur Description. Wenn die Definition obiectiv complet ist, so ist sie eine real Definition, subiectiv complet, nominal Definition.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s67-070",
     "kind": "text",
     "aa": 460,
     "text": "§ 284",
     "ocrConf": 14
    },
    {
     "id": "philippi-s67-071",
     "kind": "text",
     "aa": 460,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "M9",
       "unresolved": true
      }
     ],
     "text": "Definitionen müssen nicht der Form nacht avtologisch seyn. ob sie gleich der Materie nach identisch seyn können.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s67-072",
     "kind": "text",
     "aa": 460,
     "text": "Definirsucht entspringt aus der Neigung alle complet zu haben und aus der Demonstrirsucht die am besten dadurch Fortgang findt und aus Nachahmung der Mathematik.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s67-073",
     "kind": "text",
     "aa": 460,
     "text": "Durch die Defhürsucht die Wolff einführte entzog man sich der Analysirung der Begriffe und verlernte die Avahre Philosophie.",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s68",
   "title": "Eintheilung § 285",
   "titleSrc": "heading",
   "headings": [
    "Eintheilung § 285"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s68-001",
     "kind": "heading",
     "aa": 460,
     "text": "Eintheilung § 285"
    },
    {
     "id": "philippi-s68-002",
     "kind": "text",
     "aa": 460,
     "text": "Jeder Verstandesbegrif ist allgemein. Jeder allgemeine Begrif hat viele unter sich und dies macht seine Sphäram aus.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s68-003",
     "kind": "text",
     "aa": 461,
     "text": "Die logische Eintheilung ist nicht die Theilung des Begrifs sondern die Theilung der Sphäre des Begrifs. Der allgemeine Begrif der viel unter sich hat, hat weniger in sich als jedes von den Dingen die er unter sich hat.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s68-004",
     "kind": "text",
     "aa": 461,
     "text": "Zur logischen Eintheilung wird erfordert",
     "ocrConf": 38
    },
    {
     "id": "philippi-s68-005",
     "kind": "text",
     "aa": 461,
     "text": "1. die Disiunction; die Opposition zwischen den Gliedern, ich muß sagen können entweder, oder.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s68-006",
     "kind": "text",
     "aa": 461,
     "ms": [
      {
       "p": null,
       "i": 180,
       "raw": "'50",
       "unresolved": true
      }
     ],
     "text": "2. Alle Glieder der Eintheilung disiunctiue zusammengenommen müssen dem conceptui reciproque seyn und gleiche Sphaera mit ihm ausmachen. Man hüte sich hiebey daß man nicht Glieder einer Subdiuision zu den Gliedern der Diuision verbinde.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s68-007",
     "kind": "text",
     "aa": 461,
     "text": "Die Eintheilungen dienen in den Wissenschafften zum Behalten.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s69",
   "title": "Von den gelehrten Urtheilen.",
   "titleSrc": "heading",
   "headings": [
    "Von den gelehrten Urtheilen."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s69-001",
     "kind": "heading",
     "aa": 461,
     "text": "Von den gelehrten Urtheilen."
    },
    {
     "id": "philippi-s69-002",
     "kind": "text",
     "aa": 461,
     "text": "Wenn ich urtheile, so vergleiche ich einen Begrif mit andern und untersuche ob sie zu ihm gehören oder ihm entgegen sind d. i. ob sie Merkmale von ihm sind oder nicht. Nur durch diese Handlung, durchs Urtheilen werden Begriffe deutlich. Ein deutlicher Begrif ist nichts anders als ein Urtheil.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s69-003",
     "kind": "text",
     "aa": 461,
     "text": "Wenn das Merkmal mit dem Begrif verknüpft wird, so ist das ein Urtheil der Verknüpfung ; ists entgegengesetzt, so ists ein Urtheil des Wiederstreits.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s69-004",
     "kind": "text",
     "aa": 461,
     "text": "In allen Urtheilen ist zu unterscheiden Materie und Form. Die Materie ist der Begrif der Sache, und dann der Begriff den ich mit ihm verknüpfe als ein Merkmal, oder absondre; der Begriff der Sache den ich durch Urtheile deutlich machen will heißt Subjekt; der Begriff den ich jenem entweder als ein Merkmal zukommend oder entgegengesetzt betrachte heißt Praedicat.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "philippi-s69-005",
     "kind": "text",
     "aa": 461,
     "text": "Die Form ist das Verhältniß des Subiects zum Praedicat, und wird durch die Copula ausgedrückt.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s69-006",
     "kind": "text",
     "aa": 461,
     "text": "Bey diesem Verhältniß sehe ich entweder die Verknüpfung zwischen Praedicat und Subject oder den Wiederstreit. Im erstem Fall ist es ein bejahend Urtheil; im andern ein verneinendes, wo das non an der Copula steht. Es ist die Verneinung aber nur von der Form nicht von der Materie zu verstehen, die mag seyn wie sie wolle.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s69-007",
     "kind": "text",
     "aa": 461,
     "text": "Wenn das non nicht bey der Copula, sondern bey der Materie steht so ist das ein bejahendes Urtheil als anima est non mortalis. Solche Urtheile wo nicht die Copula verneinend ist heissen unendliche Säzze.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s69-008",
     "kind": "text",
     "aa": 462,
     "text": "Subject heißt terrninus minor weil es unter dem Praedicat enthalten. Praedicat terrninus maior weil es den Begrif des Subjekts enthält und überdem auch noch andre Begriffe. Es ist nota communis.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s69-009",
     "kind": "text",
     "aa": 462,
     "text": "Durch außerwesentliche Merkmahle kann keine Definition gegeben werden.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s69-010",
     "kind": "text",
     "aa": 462,
     "text": "Die Theilung eines Begrifs besteht darin, wenn ich sehe was in dem Begrif enthalten ist. Divisio realis",
     "ocrConf": 52
    },
    {
     "id": "philippi-s69-011",
     "kind": "text",
     "aa": 462,
     "text": "Die Einth eilung eines Begrifs besteht darin, wenn ich sehe wie viel unter ihm enthalten ist.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s69-012",
     "kind": "text",
     "aa": 462,
     "ms": [
      {
       "p": 151,
       "i": 0
      }
     ],
     "text": "Je weniger ein Begrif getheilt werden kann, desto mehr kann er eingetheilt werden.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s69-013",
     "kind": "text",
     "aa": 462,
     "text": "Membra dividentia heißen die Begriffe so unter einem andern enthalten sind.",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "philippi-s69-014",
     "kind": "text",
     "aa": 462,
     "text": "Disiunctive Begriffe zusammennehmen ist, wenn ich die Opposition derselben vorstelle.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s69-015",
     "kind": "text",
     "aa": 462,
     "text": "Die Vorstellung der Dinge, durch einen Begrif, ist ein Urteil.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s69-016",
     "kind": "text",
     "aa": 462,
     "text": "Der Quantität nach sind alle Urteile entweder allgemeine, oder besondre, die einzelne gehören unter die allgemeine. Der Qualität, in der Bejahung und Verneinung.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s69-017",
     "kind": "text",
     "aa": 462,
     "text": "Im Verhältniß des Denkens, zwischen dem Praedikat und Subject beruht das Urteil, nicht im Denken des Begrifs.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s69-018",
     "kind": "text",
     "aa": 462,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "150",
       "unresolved": true
      }
     ],
     "text": "§ 297",
     "ocrConf": 24
    },
    {
     "id": "philippi-s69-019",
     "kind": "text",
     "aa": 462,
     "ms": [
      {
       "p": null,
       "i": 443,
       "raw": "151",
       "unresolved": true
      }
     ],
     "text": "Ein Urtheil das unmittelbar gewiß ist hat keine Bedingung. Die Urtheile die per medium terminum erkannt werden, die sind bedingt. Wenn eine Bedingung zu dem Begriff des Subjekts zufälliger weise hinzugefügt wird, die nicht darinn lag, so heißt dieses ein bestimmtes Urtheil. Z. E. Alle Menschen müssen (natürlicher weise) sterben. Wenn aber das Prädikat mit dem Subjekt vermittelst einer Conditio n verglichen wird die im Subjekt hegt; so muß sie per analysin entwickelt werden. Z. E. Was existirt existirt irgendwo und irgend wenn. Hier muß entwickelt werden, wie der Begrif des Daseyns unter dem Begrif des Orts als einer Bedingung stehe ; ob es gleich nicht möglich.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s69-020",
     "kind": "text",
     "aa": 462,
     "text": "Alle empirische Sätze ohne Unterschied sind synthetisch. Alle synthetische Vernunfftsätze sind niemals objectiv sondern subjectiv. Z. E. Alles was geschieht hat einen zureichenden Grund.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s69-021",
     "kind": "text",
     "aa": 463,
     "text": "Dies ist nicht ein analytischer sondern synthetischer Saz und daher subjectiv, er drückt aus daß ich mir nichts durch die Vernunfft vorstellen kann als nur durch einen Grund.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s70",
   "title": "§301",
   "titleSrc": "heading",
   "headings": [
    "§301"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s70-001",
     "kind": "heading",
     "aa": 463,
     "text": "§301"
    },
    {
     "id": "philippi-s70-002",
     "kind": "text",
     "aa": 463,
     "text": "Das Urtheil ist entweder",
     "ocrConf": 40
    },
    {
     "id": "philippi-s70-003",
     "kind": "text",
     "aa": 463,
     "text": "a. allgemein, wo das Prädicat mit allen Begriffen die zur Sphaera",
     "ocrConf": 35
    },
    {
     "id": "philippi-s70-004",
     "kind": "text",
     "aa": 463,
     "text": "des Subjects gehören verglichen wird.",
     "ocrConf": 55
    },
    {
     "id": "philippi-s70-005",
     "kind": "text",
     "aa": 463,
     "text": "(3. wo es nur mit einigen verglichen wird, das ist ein besondres",
     "ocrConf": 44
    },
    {
     "id": "philippi-s70-006",
     "kind": "text",
     "aa": 463,
     "text": "Urtheil.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s70-007",
     "kind": "text",
     "aa": 463,
     "text": "y. ein einzelnes wo es nur mit einem einzigen Begriff verglichen Avird.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s70-008",
     "kind": "text",
     "aa": 463,
     "text": "Wenn die Sphaera des Subjects ganz in der Notion des Prädicat s enthalten oder ganz ausser ihr betrachtet wird ; so ist es im ersten Fall ein allgemein bejahendes und im letztern Fall ein allgemein verneinendes Urtheil.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s70-009",
     "kind": "text",
     "aa": 463,
     "text": "Ein einzelner Begrif hat keine Sphäre, er ist ein Punkt und muß also eben so entweder ganz ausser der Sphäre des Prädikats oder ganz in sie fallen. Folglich ist den allgemeinen Urtheilen ein einzelnes gleich.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s70-010",
     "kind": "text",
     "aa": 463,
     "text": "Wenn die Sphäre des Subjekts zum Theil in diejenige des Prädikats fällt, zum Theil nicht; so giebt das particulaire Urtheile.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s70-011",
     "kind": "text",
     "aa": 463,
     "text": "Judicium modale ist wo das Prädikat dem Subject unter einer besondern Bestimmung zugeschrieben wird. Z. E. Alle Menschen sind natürlicher weise sterblich. Ihm wird contradistinguirt das Urtheil, welches keine solche Bestimmung hat.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s70-012",
     "kind": "text",
     "aa": 463,
     "text": "Bey allen Urtheilen vergleiche ich nichts anders als die Sphaeras der Begriffe und sehe ob eine in der andern enthalten sey oder nicht.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s70-013",
     "kind": "text",
     "aa": 463,
     "text": "Die Allgemeinheit der bejahenden Sätze beruht theils darauf, daß die Condition der Wahrheit schon in der Notion des Subjects liegt, theils daß wenn sie nicht darin liegt, sie hinzugefügt werde z. E. alle Menschen sind veränderlich. Die Condition der Wahrheit hegt im Begrif des Menschen.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s70-014",
     "kind": "text",
     "aa": 463,
     "ms": [
      {
       "p": 152,
       "i": 199
      }
     ],
     "text": "Die Urtheile sind entweder einfache oder zusammengesetzte. Ein einfaches Urtheil ist wo ich nur ein Subject mit einem Prädikat vergleiche, ein zusammengeseztes hingegen, wo ich 2 Prädikate mit einem Subject oder 2 Subjecte mit einem Prädikat vergleiche. Die leztern heissen Judicia copulatiua.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s70-015",
     "kind": "text",
     "aa": 464,
     "text": "Die Judicia werden ferner eingetheilt in",
     "ocrConf": 29
    },
    {
     "id": "philippi-s70-016",
     "kind": "text",
     "aa": 464,
     "text": "1. ordinaria in welchen ein Begrif mit dem andern verglichen wird.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s70-017",
     "kind": "text",
     "aa": 464,
     "text": "2. extraordinaria wo ein Urtheil mit einem andern verglichen wird.",
     "ocrConf": 55
    },
    {
     "id": "philippi-s70-018",
     "kind": "text",
     "aa": 464,
     "text": "Diese sind von zwiefacher Art a. Judicia hypothetica seu conditionalia b. disiunctiua .",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s70-019",
     "kind": "text",
     "aa": 464,
     "text": "Alles Verhältniß ist entweder ein Verhält niß der Verknüpfung oder des Widerstreits. Wenn ein Urtheil im Verhältniß des Widerstreits mit dem andern steht; so ist das ein disiunctives Urtheil. Z. E. Die Seele ist entweder einfach oder zusammengesetzt. Hier ist zwischen den Urtheilen: die Seele ist einfach und die Seele ist zusammengesetzt ein Widerstreit. Nehme ich eins an, so fällt das andre weg.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s70-020",
     "kind": "text",
     "aa": 464,
     "text": "Wenn ein Urtheil mit einem andern im Verhältniß der Verknüpfung steht, so daß wenn ich das eine sezze auch das andre gesezt werden muß ; so ist das ein hypothetisch Urtheil. Das erstere ist die Bedingung des andern. Wenn . . . so . . .",
     "ocrConf": 41
    },
    {
     "id": "philippi-s70-021",
     "kind": "text",
     "aa": 464,
     "text": "Wir attendiren hiebey nur immer auf die Form aufs Verhältniß; es mag die Materie des Urtheils wahr seyn, oder nicht. Man sieht nur auf die Consequens Die Bedingung heißt antecedens, der daraus folgende Saz consequens. Das Verhältniß beyder heißt consequentia.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s70-022",
     "kind": "text",
     "aa": 464,
     "text": "Von den iudicus disiunctiuis ist zu merken, daß da nur immer zwey iudicia in Opposition kommen, und daß wenn mehrere da sind, sie auf 2 müssen reducirt werden, auf zwey reine Oppositiones.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s70-023",
     "kind": "text",
     "aa": 464,
     "text": "Denn es können nur zwey Säzze rein opponirt sej', die andren sind Unteroppositiones. Dafern die Opposition durch die Vernunft soll können eingesehen werden. Wo die Erfahrung hinzukömmt, da können mehr seyn.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s70-024",
     "kind": "text",
     "aa": 464,
     "text": "Die Disiunctionen in der Logik dienen complete logische Diuisionen zu machen.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s70-025",
     "kind": "text",
     "aa": 464,
     "text": "Zur logischen Diuision wird erfordert, daß alle membra diuidentia den ganzen conceptum diuisum ausmachen und daß sie in oppositione stehen. Fehlt ein Glied ; so ist die logische Eintheilung und das disiunetive Urtheil falsch.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s70-026",
     "kind": "text",
     "aa": 464,
     "text": "Alle Urtheile sind entweder",
     "ocrConf": 50
    },
    {
     "id": "philippi-s70-027",
     "kind": "text",
     "aa": 464,
     "ms": [
      {
       "p": 153,
       "i": 0
      }
     ],
     "text": "1 . Judicia problematica, in welchen ich das Verhältniß des Prädikats",
     "ocrConf": 30
    },
    {
     "id": "philippi-s70-028",
     "kind": "text",
     "aa": 464,
     "text": "zum Subjekt nur erwäge.",
     "ocrConf": 28
    },
    {
     "id": "philippi-s70-029",
     "kind": "text",
     "aa": 464,
     "text": "2. Judicia assertoria in welchen ich es sezze. Um Irrthümer zu verhüten muß ich so viel als möglich problematisch urtheilen.",
     "dehyphenated": 1,
     "ocrConf": 34
    }
   ]
  },
  {
   "id": "s71",
   "title": "§310",
   "titleSrc": "heading",
   "headings": [
    "§310"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s71-001",
     "kind": "heading",
     "aa": 465,
     "text": "§310"
    },
    {
     "id": "philippi-s71-002",
     "kind": "text",
     "aa": 465,
     "text": "Exponiren heißt aus einander sezzen. Es muß also was vermischtes daseyn. Wenn zwey Urtheile versteckt in einem liegen, so müssen sie entwickelt werden. Das ist ein exponibles TJrtheil.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s71-003",
     "kind": "text",
     "aa": 465,
     "text": "Es enthält das exponible Urtheil wenn es ausgewickelt ist, zwey Urtheile deren eins bejaht, das andre verneint. Z. E. Wenige Menschen sind fromm, heißt so viel als : einige Menschen sind fromm und andre nicht fromm.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s71-004",
     "kind": "text",
     "aa": 465,
     "text": "Ein exponibles Urtheil enthält also 1. Subiect und 2 Praedicat aber zweierley Qualität und Quantität.",
     "ocrConf": 38
    }
   ]
  },
  {
   "id": "s72",
   "title": "§311",
   "titleSrc": "heading",
   "headings": [
    "§311"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s72-001",
     "kind": "heading",
     "aa": 465,
     "text": "§311"
    },
    {
     "id": "philippi-s72-002",
     "kind": "text",
     "aa": 465,
     "text": "Urtheile die nicht bloß logisch sind; sondern auch unser Gemüth zu rubren suchen als z. E. Exclamationen müssen niemals vorkommen in der Art der Erkenntniß wo die logische Vollkommenheit die Hauptabsieht ist. Es ist ungereimt in der Philosophie Empfindungen und Erscheinungen einzumischen. Meyer und Feder haben diesen Fehler. Wenn der Autor sagt : Solche Urtheile sind sehr praktisch, so sollte er sagen, sie sind sehr rührend und reizend. Viele Autoren haben den Werth ihrer Philosophie verlohren, da sie sich verleiten lassen Gefühl und Geschmack darinn zu mengen. Rousseau ist eins der größten Genies. Er mischt aber in seine Schrifften was romanhafftes, daher wird sein scharfer Geist nicht von allen recht eingesehen, und die Stärke seiner Argumente bleibt einem Theil der Leser unerkannt. Hume, weil er viel Neues in seine Schrifften mischet, ist von vielen mehr für einen beredten Mann, als für den scharfsinnigen Philosophen, der er wirklich ist angesehen worden.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s72-003",
     "kind": "text",
     "aa": 465,
     "text": "Man muß nicht wider den Geschmak schreiben; man muß in der Moral und Philosophie in Ansehung des Geschmaks negativ seyn.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s72-004",
     "kind": "text",
     "aa": 465,
     "ms": [
      {
       "p": 154,
       "i": 277
      }
     ],
     "text": "Wenn Geschmack und Vernunfft vermischt werden, so ists auch verführerisch für den Zuhörer; er ist als denn nicht sicher ob ihn die Stärke der Vernunftgründe oder der Geschmack und die Annehmlichkeit der Schreibart zum Beifall gebracht. Voltaire hat den Fehler daß er durch angebrachte besondere Wendungen und durch etwas poßierliches den Leser auf seine Seite zu bringen weiß. Denn wo ich Vergnügen finde, dessen Parthey nehme ich an.",
     "dehyphenated": 4,
     "ocrConf": 38
    }
   ]
  },
  {
   "id": "s73",
   "title": "§312",
   "titleSrc": "heading",
   "headings": [
    "§312"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s73-001",
     "kind": "heading",
     "aa": 466,
     "text": "§312"
    },
    {
     "id": "philippi-s73-002",
     "kind": "text",
     "aa": 466,
     "text": "Die gelehrten Urtheile sind vel theoretica vel practica. Die erstem vel obiectiua die an und vor sich richtig und gut sind, vel subiectiua die nur ein Verhältniß zu meinem freyen Willen anzeigen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s73-003",
     "kind": "text",
     "aa": 466,
     "text": "§",
     "ocrConf": 24
    },
    {
     "id": "philippi-s73-004",
     "kind": "text",
     "aa": 466,
     "text": "Die gelehrten Urtheile sind entweder erweislich oder unerweislich. Die letztern sind unmittelbar gewiß ; die erstem nur vermittelst gewisser Zwischennrtheile. Es ist viel daran gelegen die erweißlichen Urtheile von den unerweißlichen zu unterscheiden. Nur Metaphysik kann uns das lehren indem sie uns die Gesezze und Schranken unsers Verstandes aufweist.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s73-005",
     "kind": "text",
     "aa": 466,
     "text": "Nur gar zu offt halten wir Urtheile für unmittelbar gewiß, die es doch nur vermittelst gewisser Zwischenurtheile sind, welche wir übergehen.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s74",
   "title": "§314",
   "titleSrc": "heading",
   "headings": [
    "§314"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s74-001",
     "kind": "heading",
     "aa": 466,
     "text": "§314"
    },
    {
     "id": "philippi-s74-002",
     "kind": "text",
     "aa": 466,
     "ms": [
      {
       "p": 155,
       "i": 999
      }
     ],
     "text": "Bejr jedem Beweise ist zu betrachten die Materie und die Form Jene ist das Merkmal welches ich mit dem Subject und dann mit dem Praedicat vergleiche; diese ist die Art der Vergleichung. Z. E. Jeder Körper ist theilbar : denn er ist zusammengesetzt. Ich vergleiche den Körper mit dem Zusammengesetzten, darauf mit dem Theilbaren und sage: jeder Körper ist zusammengesetzt, jedes Zusammengesetzte ist theilbar; folglich ist jeder Körper theilbar. Man sieht hier woher sich Beweise in Syllogismen bringen lassen. Ueberhaupt sind die principia materialia der Beweise die Merkmale, die uns von dem Dinge schon als gewiß bekannt sind, die medii termini; die principia formaha sind die Gesezze, nach denen der Verstand die Uebereinstimmung des medii termini 1. mit dem Subject 2. mit dem zu erweisenden Praedicat einsieht. Sie enthalten die Regeln die von der Art sind, wie aus gewissen Gründen etwas zu Schlüssen sey. Wir haben nur deren zwey den Satz der Identität und des Wiederspruchs. Principia materialia haben wir unzähliche. Jene die principia materialia gründen sich zuletzt auf Elementarsäzze. Element ist ein Theü eines Ganzen was weiter kein Theil von andern ist. Elementarsäzze sind die die notas constitutiuas primitiuas alicuius entis enthalten. Es ist ein Satz nur erweißlich vermittelst einer notae mediae.",
     "dehyphenated": 3,
     "ocrConf": 47
    },
    {
     "id": "philippi-s74-003",
     "kind": "text",
     "aa": 466,
     "text": "Also können die Urtheile wo ich notam immediatam mit dem Subject vergleiche nicht erwiesen werden. Sie sind die Elementarsäzze.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s75",
   "title": "§ 315",
   "titleSrc": "heading",
   "headings": [
    "§ 315"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s75-001",
     "kind": "heading",
     "aa": 467,
     "text": "§ 315"
    },
    {
     "id": "philippi-s75-002",
     "kind": "text",
     "aa": 467,
     "text": "Der Zweck der Urtheile ist die Deutlichkeit. Die Deutlichkeit besteht darum, daß ich verborgene dunkle Säzze offenbar mache; das geschieht durch Urtheilen. Dadurch mache ich identitatem latentem zur patenti. Wenn Urtheile identitatem explieitam haben ; so sind sie tavtologisch ; haben sie aber nur implicitam : so können sie ein Mittel der Deutlichkeit und folglich nicht gleich leer seyn.",
     "ocrConf": 38
    },
    {
     "id": "philippi-s75-003",
     "kind": "text",
     "aa": 467,
     "text": "Postulata sind unerweißliche praktische Urtheile. Postulirt man was noch erwiesen werden kann; so heißt das erbetteln (petere principium)",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s76",
   "title": "§ 319",
   "titleSrc": "heading",
   "headings": [
    "§ 319"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s76-001",
     "kind": "heading",
     "aa": 467,
     "text": "§ 319"
    },
    {
     "id": "philippi-s76-002",
     "kind": "text",
     "aa": 467,
     "text": "Locke theilt die Urtheile ein in",
     "ocrConf": 56
    },
    {
     "id": "philippi-s76-003",
     "kind": "text",
     "aa": 467,
     "text": "1. Judicia intuitiua empirica, das sind einzeln Urtheile sofern sie",
     "ocrConf": 52
    },
    {
     "id": "philippi-s76-004",
     "kind": "text",
     "aa": 467,
     "text": "unmittelbar erkannt werden.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s76-005",
     "kind": "text",
     "aa": 467,
     "text": "2. Judicia reflecta seu discursiua; die durch einen Schluß aus andern",
     "ocrConf": 36
    },
    {
     "id": "philippi-s76-006",
     "kind": "text",
     "aa": 467,
     "text": "gezogen werden.",
     "ocrConf": 62
    },
    {
     "id": "philippi-s76-007",
     "kind": "text",
     "aa": 467,
     "text": "Alle allgemeine Urtheile sind reflexa. Ich erfahre eigentlich nicht das allgemeine; sondern das einzelne.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s76-008",
     "kind": "text",
     "aa": 467,
     "text": "Was die Judicia intuitiua betrifft so ist der intuitus vel 1. sensit! uus das ist das Gefühl bey einem einzeln Gegenstande der Sinne. So sind alle unmittelbare Erfahrungsvorstellungen intuitus. Durch die Imagination kann ich mir auch ein Object per intuitum sensitiuum vorstellen. Unmittelbare Urtheile sind nicht alle anschauend; nur die sind es deren Form sensitiv ist. Z. E. die Sonne ist rund.",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s76-009",
     "kind": "text",
     "aa": 467,
     "text": "2. intuitus purus die Vorstellung nach Regeln der Vernunfft z. E. die Vorstellung von Raum und Zeit, von mathematischen Figuren. Ausdehnung etc. Es ist die Form sinnlicher Empfindung.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s76-010",
     "kind": "text",
     "aa": 467,
     "ms": [
      {
       "p": 156,
       "i": 137,
       "raw": "136",
       "inferred": true
      }
     ],
     "text": "Die Axiomata der Geometrie sind iudicia intuitiua aber nicht der Erfahrung sondern der Vernunfft. So ist auch die allgemeine Vorstellung von Beweisen ein intuitus purus.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "philippi-s76-011",
     "kind": "text",
     "aa": 467,
     "text": "Axiomata philosophica carent intuitu: sunt discursiua, denn der Philosoph leitet alles aus allgemeinen Säzzen her. Also sind iudicia intuitiua entweder Urtheile intuitu empirici oder puri.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s76-012",
     "kind": "text",
     "aa": 467,
     "text": "Ich kann mir keinen intuitiven Begriff von den Zahlen machen, als indem ich zähle folglich durch die Zeit.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s76-013",
     "kind": "text",
     "aa": 467,
     "text": "Allgemeine empirische Urtheile verstatten auch immer einen Beweiß.",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "philippi-s76-014",
     "kind": "text",
     "aa": 468,
     "text": "Empirische Urtheile sind niemals negativ. Daß der Mond kein eigen Licht habe ist kein unmittelbarer Erfahrungssatz. Demnach sind alle negative Erfahrungsurtheile mittelbare Urtheile und aus Reflexion entsprungen.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s76-015",
     "kind": "text",
     "aa": 468,
     "text": "§",
     "ocrConf": 35
    },
    {
     "id": "philippi-s76-016",
     "kind": "text",
     "aa": 468,
     "text": "Alle Säzze sind",
     "ocrConf": 55
    },
    {
     "id": "philippi-s76-017",
     "kind": "text",
     "aa": 468,
     "text": "1. theoretische die das Verhältniß eines Begriffs zum andern ausdrücken.",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "philippi-s76-018",
     "kind": "text",
     "aa": 468,
     "text": "2. praktische, die das Verhältniß der Handlungen zu den Begriffen ausdrücken.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s76-019",
     "kind": "text",
     "aa": 468,
     "text": "Alle beyde sind",
     "ocrConf": 46
    },
    {
     "id": "philippi-s76-020",
     "kind": "text",
     "aa": 468,
     "text": "1. entweder uner weißlich, denn heissen die erstem axiomata die andern postulata, oder",
     "ocrConf": 43
    },
    {
     "id": "philippi-s76-021",
     "kind": "text",
     "aa": 468,
     "text": "2. er weißlich durch ratiocinia polysyllogistica, denn heissen die theoretischen Säzze theoremata, die praktischen problemata.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s76-022",
     "kind": "text",
     "aa": 468,
     "text": "Ein Saz der aus einem andern durch einen Schluß gezogen wird heißt ein Corollarium.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s76-023",
     "kind": "text",
     "aa": 468,
     "text": "Wenn ich einen Saz annehme ohne Beweis der aber in einer andern Wissenschafft bewiesen wird, so heißt der Lemma z. E. daß ein Gott sey ist in der Moral ein Lemma ; es wird in der Theologia naturalis bewiesen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s76-024",
     "kind": "text",
     "aa": 468,
     "text": "Ein Saz der nicht zum Beweise, sondern nur zur Erläuterung dient heißt Scholion.",
     "ocrConf": 40
    }
   ]
  },
  {
   "id": "s77",
   "title": "§338",
   "titleSrc": "heading",
   "headings": [
    "§338"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s77-001",
     "kind": "heading",
     "aa": 468,
     "text": "§338"
    },
    {
     "id": "philippi-s77-002",
     "kind": "text",
     "aa": 468,
     "ms": [
      {
       "p": 157,
       "i": 182,
       "raw": "ist",
       "inferred": true
      }
     ],
     "text": "Generatim kann man sagen, daß jede ratio tautologica eine Qualitas occulta sey Z. E. Wenn man zur Ursache daß gewisse Dinge sich nicht miteinander vertragen die Antipathie nennt; so heißt das AVort nichts anders als Ungeduldsanikeit.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s77-003",
     "kind": "text",
     "aa": 468,
     "text": "Die Qualitas occulta ist in der Philosophie sehr versteckt. Das erste principium des Crusius da er das Criterium der Wahrheit in die Natur der menschlichen Vernunfft setzt ist tavtologisch und eine Qualitas occulta; denn diese besteht in nichts anders als darum, daß der Grund mit der Folge in identitate implicita steht.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s77-004",
     "kind": "text",
     "aa": 468,
     "text": "Die Erklärungen im Cirkel kommen denen qualitatibus occultis sehr nahe. Man findt in der Philosophie am mehresten aber in der Logik und Moral die Qualitates occultas noch häufig. Da giebt man Ursachen an die nichts mehr sagen als die Wirkung.",
     "ocrConf": 35
    }
   ]
  },
  {
   "id": "s78",
   "title": "§341",
   "titleSrc": "heading",
   "headings": [
    "§341"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s78-001",
     "kind": "heading",
     "aa": 469,
     "text": "§341"
    },
    {
     "id": "philippi-s78-002",
     "kind": "text",
     "aa": 469,
     "text": "Ein unmittelbarer Schluß ist der aus einem Urtheil geschlossen wird sine nota intermedia.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s78-003",
     "kind": "text",
     "aa": 469,
     "text": "Ein unmittelbarer Schluß geschiehet nach der Eintheilung der Logiker",
     "ocrConf": 53
    },
    {
     "id": "philippi-s78-004",
     "kind": "text",
     "aa": 469,
     "text": "1. per iudicia aequipollentia.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s78-005",
     "kind": "text",
     "aa": 469,
     "text": "2. per iudicia subalternata.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s78-006",
     "kind": "text",
     "aa": 469,
     "text": "3. per iudicia opposita.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s78-007",
     "kind": "text",
     "aa": 469,
     "text": "4. per conuersionem logicam.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s78-008",
     "kind": "text",
     "aa": 469,
     "text": "5. per contrapositionem.",
     "ocrConf": 50
    },
    {
     "id": "philippi-s78-009",
     "kind": "text",
     "aa": 469,
     "text": "I. Der unmittelbare Schluß per iudicia aequipollentia ist keine wahre Conclusion; denn ich sezze hier nur anstatt eines Worts ein anderes schicklicheres. Z. E. Nicht alle oder einige Menschen sind tugendhafft. Diese Substitution ist keine Conclusion.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s78-010",
     "kind": "text",
     "aa": 469,
     "text": "II. Durch iudicia subalternata wird ein unmittelbarer Schluß; ich subsumire ein besonder Urtheil unter ein allgemeines. Z. E. alle Menschen sind sterblich also auch Könige. Das allgemeine Urtheil heißt iudicium subalternans ; das besondere aber iudicium subalternatum",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s78-011",
     "kind": "text",
     "aa": 469,
     "text": "III. per iudicia contradictorie opposita i. e. pure opposita. Wenn zwey Urtheile contradictorie opponirt sind ; so ist wenn das eine wahr ist, das andre falsch und ist eins falsch so ist das andre wahr.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s78-012",
     "kind": "text",
     "aa": 469,
     "text": "IV. Der unmittelbare Schluß per conuersionem geschieht, wenn das Praedicat ins Subjekt verändert wird Z. E. Alle Körper sind theilbar. Einiges Theilbare sind Körper.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s78-013",
     "kind": "text",
     "aa": 469,
     "ms": [
      {
       "p": 158,
       "i": 57
      }
     ],
     "text": "Das Urtheil was umgekehrt werden soll heißt conuertens ; das was aus der Umkehrung entspringt conuersum. Conuersio simplex ist wenn die Quantität nicht geändert wird. Conuersio per accidens wenn sie geändert wird.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s78-014",
     "kind": "text",
     "aa": 469,
     "text": "Die Qualitaet bleibt immer dieselbe",
     "ocrConf": 49
    },
    {
     "id": "philippi-s78-015",
     "kind": "text",
     "aa": 469,
     "text": "V. Bey dem unmittelbaren Schluß per contrapositionem wird auch die Qualitaet verändert. Z. E. Alle Menschen können irren. Was nicht irren kann ist kein Mensch. Die Regel ist: remoto praedicato tollitur subiectum.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s78-016",
     "kind": "text",
     "aa": 469,
     "text": "Die Judicia subcontraria weil sie nur einen particulairen Begrif einem andern entgegenstellen und keine Allgemeinheit haben machen keine Contradiction.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s78-017",
     "kind": "text",
     "aa": 469,
     "text": "Bey der Opposition zweier allgemeinen Urtheile ist wieder zu viel zur Contradiction; es fehlt das particulaire.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s78-018",
     "kind": "text",
     "aa": 470,
     "text": "Bej* den iudiciis contradictorie oppositis kann aus der Wahrheit des einen auf die Falschheit des andern und aus der Falschheit des einen auf die Wahrheit des andern geschlossen werden. Die gehören also zum unmittelbaren Schluß.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s78-019",
     "kind": "text",
     "aa": 470,
     "text": "Aber bey den iudiciis contrarie oppositis kann aus der Falschheit des einen nicht auf die Wahrheit des andern und bey den iudiciis subcontrarie oppositis hingegen kann von der Wahrheit des einen auf die Falschheit des andern nicht geschlossen werden, mithin gehören die nicht zum unmittelbaren Schluß.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s78-020",
     "kind": "text",
     "aa": 470,
     "ms": [
      {
       "p": null,
       "i": 114,
       "raw": "is:",
       "unresolved": true
      }
     ],
     "text": "Die Conclusiones mediatae können Vernunffturtheile heissen ; die conclusiones immediatae aber Verstandesurtheile. Urtheile sind sich entgegengesetzt",
     "ocrConf": 46
    },
    {
     "id": "philippi-s78-021",
     "kind": "text",
     "aa": 470,
     "ms": [
      {
       "p": null,
       "i": 163,
       "raw": "158",
       "unresolved": true
      }
     ],
     "text": "1. contradictorie, wenn dem allgemein bejahenden ein besonders verneinendes und dem allgemein verneinenden ein besonders bejahendes Urtheil entgegen gesetzt wird. 2. subcontrarie wenn zwey particularia iudicia die einerley Subiect und Praedicat haben eines affirmirt, das andre negirt.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s78-022",
     "kind": "text",
     "aa": 470,
     "text": "3. contrarie wenn einem allgemein bejahenden Satz ein allgemein verneinender entgegengesetzt wird und vice versa.",
     "ocrConf": 53
    },
    {
     "id": "philippi-s78-023",
     "kind": "text",
     "aa": 470,
     "text": "Es ist wunderlich daß die Logiker die Contrarietät eine Contradiction genannt haben. Im Judicio subcontrario können alle beyde wahr, aber nicht beyde falsch seyn.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "philippi-s78-024",
     "kind": "text",
     "aa": 470,
     "text": "Der Zehnte Abschnitt.",
     "ocrConf": 31
    }
   ]
  },
  {
   "id": "s79",
   "title": "Von den gelehrten Vernunftschlüssen. §353",
   "titleSrc": "heading",
   "headings": [
    "Von den gelehrten Vernunftschlüssen.",
    "§353"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s79-001",
     "kind": "heading",
     "aa": 470,
     "text": "Von den gelehrten Vernunftschlüssen. §353"
    },
    {
     "id": "philippi-s79-002",
     "kind": "text",
     "aa": 470,
     "text": "Der Verstand urtheilt, die Vernunft schlüßt, das heißt, sie urtheilt mittelbar. Der Verstand erkennt daß ein Prädikat einem gewissen Subject zukomme unmittelbar; die Vernunfft aber erkennt es nur vermittelst eines gewissen Merkmals (nota intermedia) das sie",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s79-003",
     "kind": "text",
     "aa": 470,
     "text": "1 . mit dem Prädicat",
     "ocrConf": 36
    },
    {
     "id": "philippi-s79-004",
     "kind": "text",
     "aa": 470,
     "aaEnd": 471,
     "pages": [
      {
       "p": 471,
       "i": 194
      }
     ],
     "ms": [
      {
       "p": 159,
       "i": 62
      }
     ],
     "text": "2. mit dem Subject zusammenhält und denn die Folgerung zieht. Z.E. daß ein Körper zusammengesetzt sey, das erkenneich unmittelbar. Daß er aber veränderlich sey erkenne ich nur vermittelst einer notae intermediae vermittelst des Merkmals der Theilbarkeit. Ich sage",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s79-005",
     "kind": "text",
     "aa": 471,
     "text": "Jeder Körper ist theilbar",
     "ocrConf": 48
    },
    {
     "id": "philippi-s79-006",
     "kind": "text",
     "aa": 471,
     "text": "Alles Theilbare ist veränderlich.",
     "ocrConf": 33
    },
    {
     "id": "philippi-s79-007",
     "kind": "text",
     "aa": 471,
     "text": "Also ist auch jeder Körper veränderlich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s79-008",
     "kind": "text",
     "aa": 471,
     "text": "Das Fundament und die Grundformel bey allen Vernunftschlüssen ist die : Nota notae est nota rei ipsius. Z. E. die Veränderlichkeit ist ein Merkmal der Theilbarkeit als einer notae des Körpers ; folglich ist sie auch das Merkmal des Körpers selbst.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s79-009",
     "kind": "text",
     "aa": 471,
     "text": "Es kommen also in einem Vernunfftschluß drey Urtheile vor. Im ersten vergleiche ich das Prädikat oder die nota remota die ich nicht unmittelbar als dem Subjekt zukommend erkennen kann mit der nota intermedia. Weil nun das Prädikat immer eine grössere Sphäre hat als das Subjekt, so heißt es terminus maior und das ganze erste Urtheil propositio maior.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s79-010",
     "kind": "text",
     "aa": 471,
     "text": "Im zweiten Urtheil vergleiche ich das Subjekt mit der nota intermedia. Da nun das Subjekt in der Sphäre des Prädikats enthalten ist; so heißt es terminus minor und das ganze Urtheil propositio minor. Der Mittelbegriff heißt der medius terminus. Das Urtheil was ich endlich herausbringe heißt conclusio. Darinn sehe ich denn durch die geschehene Vergleichung das Verhältniß der notae remotae zum Subjekt ein. Ich muß per synthesin a nota remota zur nota propiore von dieser aufs Subiect gehen. Die beyden obern Urtheile heissen auch Prämissen.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "philippi-s79-011",
     "kind": "text",
     "aa": 471,
     "text": "Erstes Urtheil :",
     "ocrConf": 42
    },
    {
     "id": "philippi-s79-012",
     "kind": "text",
     "aa": 471,
     "text": "Alles Theilbare ist veränderlich.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s79-013",
     "kind": "text",
     "aa": 471,
     "text": "Zweytes Urtheil :",
     "ocrConf": 62
    },
    {
     "id": "philippi-s79-014",
     "kind": "text",
     "aa": 471,
     "text": "Jeder Körper ist theilbar.",
     "ocrConf": 52
    },
    {
     "id": "philippi-s79-015",
     "kind": "text",
     "aa": 471,
     "text": "Drittes Urtheil :",
     "ocrConf": 60
    },
    {
     "id": "philippi-s79-016",
     "kind": "text",
     "aa": 471,
     "text": "Jeder Körper ist veränderlich,",
     "ocrConf": 43
    },
    {
     "id": "philippi-s79-017",
     "kind": "text",
     "aa": 471,
     "text": "C-B",
     "ocrConf": 2
    },
    {
     "id": "philippi-s79-018",
     "kind": "text",
     "aa": 471,
     "text": "A-C",
     "ocrConf": 41
    },
    {
     "id": "philippi-s79-019",
     "kind": "text",
     "aa": 471,
     "text": "A. B.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s79-020",
     "kind": "text",
     "aa": 471,
     "text": "Die synthetische Methode die da erfordert, daß man von den Gründen anfange, die verlangt auch, daß man im eisten Urtheil den Mittel -begrif mit dem Prädikat vergleiche.",
     "dehyphenated": 1,
     "ocrConf": 35
    },
    {
     "id": "philippi-s79-021",
     "kind": "text",
     "aa": 471,
     "aaEnd": 472,
     "pages": [
      {
       "p": 472,
       "i": 135
      }
     ],
     "text": "Bey den Vernunfftschlüssen ist zu unterscheiden die Materie, das sind die Praemissen, oder die drey Begriffe das Subject, Prädicat und Mittelbegriff , lind die Form die besteht in der Art wie die Conclusion aus den Praeinissen gefolgert wird.",
     "joined": [
      "layout"
     ],
     "ocrConf": 43
    },
    {
     "id": "philippi-s79-022",
     "kind": "text",
     "aa": 472,
     "text": "Die Wahrheit oder Falschheit eines Vernunfftschlusses in der Materie betrifft die Wahrheit oder Falschheit in den Praemissen. Z. E. Alle Materie ist ewig; die Welt besteht aus Materie; mithin ist sie ewig.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s79-023",
     "kind": "text",
     "aa": 472,
     "ms": [
      {
       "p": 160,
       "i": 139
      }
     ],
     "text": "Wenn aber auch die Praemissen wahr sind; kann doch die Conclusion falsch seyn. Denn wird in der Form gefehlt. Die Form ist das Wesentliche und die Fehler in derselben die wichtigsten ; die Fehler in der Materie sind accidentel. Denn die Form ist die allgemeine Regel; die Materie ist nur ein concreter Fall dem die Form gegeben wird, oder der unter die allgemeine Regel subsumirt wird. Die Falschheit in der Form zu Schlüssen ist die Ursache der Falschheit der Materie.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s79-024",
     "kind": "text",
     "aa": 472,
     "text": "Wir haben demnach eine zwiefache Richtigkeit; eine der Materie und eine der Form. Die Regeln der Materie der Vernunftschlüsse sind eigentlich die principia iudiciorum, das ist der Saz der Identität und des Widerspruchs. Jener bey allen bejahenden, dieser bey den verneinenden Säzzen.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s79-025",
     "kind": "text",
     "aa": 472,
     "text": "Alle Vernunfftschlüsse sind entweder ordentliche, wo 3 termini sind : Subjekt, Prädikat und der Mittelbegrif ; oder ausserordentliche, wo 2 Urtheile oder mehrere miteinander verglichen werden. Alle bedingte und disjunktivische Urtheile geben ratiocinia extraordinaria. Ein bedingter Vernunftschluß ist wo maior propositio ein bedingtes, ein disjunctiver wo sie ein disjunktives Urtheil ist.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s80",
   "title": "§364",
   "titleSrc": "heading",
   "headings": [
    "§364"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s80-001",
     "kind": "heading",
     "aa": 472,
     "text": "§364"
    },
    {
     "id": "philippi-s80-002",
     "kind": "text",
     "aa": 472,
     "text": "Der Satz vermöge welchem von dem Grunde auf die Folgen kann geschlossen werden, der ist der Grund und das principium aller ratiociniorum hypotheticorum.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s81",
   "title": "§365",
   "titleSrc": "heading",
   "headings": [
    "§365"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s81-001",
     "kind": "heading",
     "aa": 472,
     "text": "§365"
    },
    {
     "id": "philippi-s81-002",
     "kind": "text",
     "aa": 472,
     "text": "Das principium exclusi medii inter duo contradictoria ist das principium ratiociniorum disiunctiuorum.",
     "dehyphenated": 1,
     "ocrConf": 51
    }
   ]
  },
  {
   "id": "s82",
   "title": "§366",
   "titleSrc": "heading",
   "headings": [
    "§366"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s82-001",
     "kind": "heading",
     "aa": 472,
     "text": "§366"
    },
    {
     "id": "philippi-s82-002",
     "kind": "text",
     "aa": 472,
     "text": "Die conclusiones immediatae sind keine ratiocinia. Z. E. Alle Menschen sind sterblich, folglich sind einige sterblich. Hier fehlt der medius terminus, darum sind es keine ratiocinia.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s82-003",
     "kind": "text",
     "aa": 473,
     "text": "Das Urtheil des Autors, daß Urtheile wahr sind, wenn sie der Wahrheit unbeschadet angenommen werden können, ist ganz tavtologisch.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s83",
   "title": "§363",
   "titleSrc": "heading",
   "headings": [
    "§363"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s83-001",
     "kind": "heading",
     "aa": 473,
     "text": "§363"
    },
    {
     "id": "philippi-s83-002",
     "kind": "text",
     "aa": 473,
     "text": "Was die principia der Form der Vernunfftschlüsse betrifft ; so hatten die Scholastiker das Dictum de omni et de nullo. Das bedeutet so viel:",
     "ocrConf": 39
    },
    {
     "id": "philippi-s83-003",
     "kind": "text",
     "aa": 473,
     "ms": [
      {
       "p": 161,
       "i": 0,
       "raw": "i«i",
       "inferred": true
      }
     ],
     "text": "Was von einem allgemeinen Begriff bejahet wird, das wird auch von dem besondern bejaht; und was von einem allgemeinen Begrif verneinet wird, das wird auch von allem besondern verneint so darunter enthalten ist. Nun ist aber jeder Vernunfftschluß nichts anders als die Subsumtion eines besondern Urtheils unter ein allgemeines. Wir sagen das principium formale der bejahenden Urtheile ist: nota notae est nota rei ipsius und repugnans notae repugnat rei ipsi. Jenes ist das Dictum de omni, dies das de nullo. Was zukommt oder widerstreitet dem Allgemeinen, das kommt auch zu oder widerstreitet dem besondern was unter ihm enthalten ist. Das Verhältniß ist zwiefach:",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s83-004",
     "kind": "text",
     "aa": 473,
     "text": "a. logisch ; wo ich die Begriffe nach dem Verhältniße der Sphären",
     "ocrConf": 39
    },
    {
     "id": "philippi-s83-005",
     "kind": "text",
     "aa": 473,
     "text": "betrachte,",
     "ocrConf": 63
    },
    {
     "id": "philippi-s83-006",
     "kind": "text",
     "aa": 473,
     "text": "ß metaphysisch, wenn die Notioncs vorgestellt werden wie sie",
     "ocrConf": 48
    },
    {
     "id": "philippi-s83-007",
     "kind": "text",
     "aa": 473,
     "text": "ineinander enthalten sind.",
     "ocrConf": 62
    },
    {
     "id": "philippi-s83-008",
     "kind": "text",
     "aa": 473,
     "text": "Das Subjekt ist enthalten unter dem Prädikat d. i. unter seiner Sphäre; aber das Prädikat ist enthalten im Subjekt, d. i. als ein constitutiuum des Begrifs.",
     "dehyphenated": 1,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s84",
   "title": "§369",
   "titleSrc": "heading",
   "headings": [
    "§369"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s84-001",
     "kind": "heading",
     "aa": 473,
     "text": "§369"
    },
    {
     "id": "philippi-s84-002",
     "kind": "text",
     "aa": 473,
     "text": "Die Lehre von den syllogistischen Figuren, von den Regeln jeder Figur, von den modis qualitate, quantitate und reductione anderer Figuren auf die erste gehet dahin, wie ohne Verstand durch mechanische Kunstgriffe Vernunfftschlüsse können formirt werden. Wir wissen aus dem vorigen, daß in jedem Vernunfftschluß der Mittelbegrif mit dem Subjekt und der nota remota (dem Prädikat) verglichen wird. Da nun seine Stelle auf eine 4fache Art kann verändert werden ; so sind die 4 Figuren daraus entstanden.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s84-003",
     "kind": "text",
     "aa": 473,
     "text": "In der ersten Figur steht der medius terminus in maiori propositione loco subiecti; in minori loco praedicati.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s84-004",
     "kind": "text",
     "aa": 474,
     "text": "In der zweiten steht er in beiden Prämißen loco praedicati ; in der dritten Figur steht er in beyden Prämißen loco subiecti; und in der vierten in maiori loco praedicati; in minori loco subiecti.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s84-005",
     "kind": "text",
     "aa": 474,
     "text": "Es kommt also alles auf die Stellen an des medii Termini.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s84-006",
     "kind": "text",
     "aa": 474,
     "ms": [
      {
       "p": 162,
       "i": 262
      }
     ],
     "text": "Die menschliche Vernunfft schlüßt immer in der ersten Figur und kann nicht anders. In allen andern Figuren schlüßt sie nur dadurch, daß sie sie zuerst zur ersten Figur reducirt. Dieses thut sie indem sie ausser den 2 Säzzen noch eine immediate Conclusion denkt. Demnach sind alle Ratiocinia der 2ten, 3ten und 4ten Figur ratiocinia hybrida, und nur die der ersten Figur sind pura.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s84-007",
     "kind": "text",
     "aa": 474,
     "text": "In der 2ten Figur geschieht in maiori propositione jederzeit conversio logica in Gedanken. Bey der dritten ist eine contrapositio. Z. E. Alle Gelehrte haben einen verbesserten Verstand; einige Gelehrte sind lasterhafft. Hier kehre ich um : einige Lasterhaffte sind gelehrt; also haben einige Lasterhaffte einen verbesserten Verstand. In der 4ten Figur müssen beide Veränderungen conuersio und contrapositio angebracht werden.",
     "dehyphenated": 2,
     "ocrConf": 49
    },
    {
     "id": "philippi-s84-008",
     "kind": "text",
     "aa": 474,
     "text": "Wenn der medius terminus nicht als eine nota vom Subjekt betrachtet wird; so schlüßt sie nicht.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s84-009",
     "kind": "text",
     "aa": 474,
     "text": "Mithin ist in der 3ten Figur wo dies geschieht, kein Vernunfftschluß möglich.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s84-010",
     "kind": "text",
     "aa": 474,
     "text": "Die Regel der 2ten Figur ist dahero : maior sit vniuersalis, conclusio negatiua",
     "ocrConf": 38
    },
    {
     "id": "philippi-s84-011",
     "kind": "text",
     "aa": 474,
     "text": "Die Regel der dritten Figur ist: minor sit affirmus, conclusio particularis. Denn bejahende Säzze lassen sich nur so umkehren, daß ein particulairer Satz wird.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s84-012",
     "kind": "text",
     "aa": 474,
     "text": "In der ersten Figur sind bejahende Conclusionen ; in der zweiten verneinende; in der dritten Particular bejahende oder verneinende; in der 4ten sind sie auf gewisse Bedingungen festgesetzt; und sind entweder allgemein verneinende oder particulare. Warum in der ersten Figur allein allgemein bejahende Conclusionen anzutreffen, davon ist die Ursache, weil in den 3 andern immer eine Umkehr vorgehen muß.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s84-013",
     "kind": "text",
     "aa": 474,
     "aaEnd": 475,
     "pages": [
      {
       "p": 475,
       "i": 332
      }
     ],
     "text": "Der Modus in der Syllogistik bedeutet die Qualitaet und Quantitaet der 3 Säzze. Man drückt die Qualitaet und Quantitaet aus durch die Vocales a.e.i.o. mit denen man des Wohlklangs wegen Consonanten verbunden; woraus die Wörter Barbara etc. entstanden. Asserit a, negat e sed vniuersaliter ambo; asserit i negat o sed particulariter ambo. Es können 4 Grössen 64 mal permutirt werden, wenn nur immer 3 zusammengenommen werden; also sind 64 modi möglich. Alle die allgemeine Regeln der Vernunfftschlüsse : Conclusio sequi debet partem debiliorem, ex puris negatiuis et puris particularibus ml sequitur und die besondern Regeln jeder Figur heben von den 64 Moden so viele auf daß nur noch 10 modi vtiles übrig bleiben.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "philippi-s84-014",
     "kind": "text",
     "aa": 475,
     "text": "Weil die Vernunfft nur in der ersten Figur schlüßt, so muß man alle Vernunfftschlüsse der andern Figuren zur ersten zu reduciren wissen. Denn die die Begriffe nicht aus einander sezzen, verwickeln sie noch mehr. Dieses Kunststück die Regeln aufzufinden heißt Reductio.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s84-015",
     "kind": "text",
     "aa": 475,
     "ms": [
      {
       "p": 163,
       "i": 0,
       "raw": "i«3",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "Die Consonantes welche man zu den Moden sezt, haben in der Absicht eine Bedeutung und lehren mechanisch die andern Figuren zur ersten zu reduciren.",
     "ocrConf": 38
    }
   ]
  },
  {
   "id": "s85",
   "title": "S. vult simpliciter verti P. vero per accidens",
   "titleSrc": "heading",
   "headings": [
    "S. vult simpliciter verti P. vero per accidens"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s85-001",
     "kind": "heading",
     "aa": 475,
     "text": "S. vult simpliciter verti P. vero per accidens"
    },
    {
     "id": "philippi-s85-002",
     "kind": "text",
     "aa": 475,
     "text": "M. vult transponi C. per impossibile duci.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s85-003",
     "kind": "text",
     "aa": 475,
     "text": "P. vero per accidens heißt so viel: aus einem allgemein bejahenden oder verneinenden Saz muß ein besonderes bejahender oder verneinender werden.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s85-004",
     "kind": "text",
     "aa": 475,
     "text": "M. vult transponi will soviel sagen : Maior wird zum minori gemacht.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s85-005",
     "kind": "text",
     "aa": 475,
     "text": "C. per impossibile duci bedeutet maior muß contraponirt oder simpliciter umgekehrt werden.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "philippi-s85-006",
     "kind": "text",
     "aa": 475,
     "text": "Durch dies Kunststück der Syllogistik ich meyne die Moden lehrt man nicht richtiger Schlüssen. Der Schluß wird fast verwickelter. Man bedient sich ihrer nur mit dem medio termino zu spielen.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s85-007",
     "kind": "text",
     "aa": 475,
     "text": "Die allgemeinen Regeln sind",
     "ocrConf": 52
    },
    {
     "id": "philippi-s85-008",
     "kind": "text",
     "aa": 475,
     "text": "1. Der Syllogismus muß nicht mehr als 3 Terminos enthalten. Hier gebe man Acht daß ein Wort nicht in zwiefacher Bedeutung genommen werde. Z. E. Was du nicht verlohren hast, das hast du noch; Hörner hast du nicht verlohren: also hast du Avelche.",
     "dehyphenated": 1,
     "ocrConf": 36
    },
    {
     "id": "philippi-s85-009",
     "kind": "text",
     "aa": 475,
     "text": "2 medius terminus ne ingrediatur conclusionem ; denn er gehört zu den Prämißen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s85-010",
     "kind": "text",
     "aa": 475,
     "text": "3. ex puris negatiuis. Bey jedem Vernunfftschluß ist der medius terminus nota von dem Subjekt, und das Praedicat wieder nota von ihm oder nota notae. Die Proposition also in der der medius terminus als eine nota vom Subiect angesehen wird muß nothwendig bejahend seyn.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s85-011",
     "kind": "text",
     "aa": 475,
     "aaEnd": 476,
     "pages": [
      {
       "p": 476,
       "i": 136
      }
     ],
     "text": "4. ex puris particularibus nihil sequitur; eine von den Praemissen muß vniuersel seyn, wenn es ein reiner Vernunfftschluß seyn soll, so muß es inaior seyn, wo das Praedicat mit dem medio termino verglichen wird. Es folgt dies schon aus dem Dicto de omni et nullo.",
     "joined": [
      "layout"
     ],
     "ocrConf": 41
    },
    {
     "id": "philippi-s85-012",
     "kind": "text",
     "aa": 476,
     "text": "5. Conclusio sequi debet parteni debüiorem. Pars debilior ist propositio negatiua et particularis. Wenn eine von den Praemissen negativ ist, so muß es die Conclusion auch seyn; wenn eine particular ist, so muß es die Conclusion auch seyn.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s85-013",
     "kind": "text",
     "aa": 476,
     "text": "6. Die Conclusion muß weder mehr noch weniger enthalten, als in den Vorderurtheilen enthalten ist.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s85-014",
     "kind": "text",
     "aa": 476,
     "ms": [
      {
       "p": 164,
       "i": 0
      }
     ],
     "text": "Die besondere Regel der ersten Figur ist: maior sit vniuersalis, minor affirmans. Dies ist die Regel aller Vernunftschlüsse.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s85-015",
     "kind": "text",
     "aa": 476,
     "text": "Die ratiocinia sind entweder",
     "ocrConf": 54
    },
    {
     "id": "philippi-s85-016",
     "kind": "text",
     "aa": 476,
     "text": "1. ordinaria, wo 3 terinini sind, wo ich Subiect und Praedicat mit dem Mittelbegriff vergleiche.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s85-017",
     "kind": "text",
     "aa": 476,
     "text": "2. extraordinaria, wo in den Praepositionibus nicht 2 Begriffe sondern 2 Urtheile verglichen werden. Z. E. Wenn die Welt nothwendig ist, so sind alle Substanzen unerschaffen. Es ist also in einem ratiocmio extraordinario maior propositio ein iudicium extraordinarium. Mithin giebts zweierley ratiocinia extraordinaria",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s85-018",
     "kind": "text",
     "aa": 476,
     "text": "1. hypothetica, wo maior ein hypothetisch Urtheil ist, das ist in welchen 2 Urtheile im Verhältniß der Verknüpfung betrachtet werden.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s85-019",
     "kind": "text",
     "aa": 476,
     "text": "Das Verhältniß wird hier problematisch, nicht dogmatisch betrachtet.",
     "dehyphenated": 1,
     "ocrConf": 53
    },
    {
     "id": "philippi-s85-020",
     "kind": "text",
     "aa": 476,
     "text": "Ratiocinia hypothetica haben kernen medium terminum. Der minor kommt in beyden Prämissen vor.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s85-021",
     "kind": "text",
     "aa": 476,
     "text": "Die hypothetischen Vernunfftschlüsse sind",
     "ocrConf": 42
    },
    {
     "id": "philippi-s85-022",
     "kind": "text",
     "aa": 476,
     "text": "1. affirmirend und denn muß geschlossen werden a positione antecedentis als des Grundes ad positionem consequentis als der Folge.",
     "dehyphenated": 1,
     "ocrConf": 52
    },
    {
     "id": "philippi-s85-023",
     "kind": "text",
     "aa": 476,
     "text": "2. negirend ; und denn muß geschlossen werden a remotione consequentis ad remotionem antecedentis.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "philippi-s85-024",
     "kind": "text",
     "aa": 476,
     "text": "Es geht nicht an von der Sezzung der Folge auf die Sezzung des Grundes zu schlüßen; denn die Folge kann auch aus einem andern Grunde geflossen seyn und nicht aus dem ersten einzig und allein.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s85-025",
     "kind": "text",
     "aa": 476,
     "text": "Aber von dem Mangel der Folge kann ich auf den Mangel des Grundes Schlüssen; nicht aber von dem Mangel eines gewissen Grundes auf den Mangel der Folge ; denn eben dieselbe Folge kann aus einem andern Grunde wahr seyn.",
     "dehyphenated": 1,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s86",
   "title": "§395",
   "titleSrc": "heading",
   "headings": [
    "§395"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s86-001",
     "kind": "heading",
     "aa": 477,
     "text": "§395"
    },
    {
     "id": "philippi-s86-002",
     "kind": "text",
     "aa": 477,
     "text": "Ein disjunktiver Vernunfftschluß ist wo maior propositio ein disiunctives Urtheil ist.",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "philippi-s86-003",
     "kind": "text",
     "aa": 477,
     "text": "Ein solches Ratiocinium enunciirt allemal eine logische Eintheilung und es werden viele Urtheile im Verhältniß des Widerstreits erwogen und zwar ist nicht ein Glied der Diuision einem andern sondern allen andern contradictorisch entgegengesetzt.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s86-004",
     "kind": "text",
     "aa": 477,
     "text": "Der conceptus diuisus ist das Subiect; alle membra diuidentia machen das Prädikat aus.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s87",
   "title": "§ 396",
   "titleSrc": "heading",
   "headings": [
    "§ 396"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s87-001",
     "kind": "heading",
     "aa": 477,
     "text": "§ 396"
    },
    {
     "id": "philippi-s87-002",
     "kind": "text",
     "aa": 477,
     "text": "Die Modi der disiunktiven Schlüsse sind so wie der bedingten zwiefach 1. modus ponens, davon ist die Regel diese : Wenn alle Glieder der Eintheilung falsch sind ausser einem; so ist das eine wahr.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "philippi-s87-003",
     "kind": "text",
     "aa": 477,
     "ms": [
      {
       "p": 165,
       "i": 0
      }
     ],
     "text": "2. modus tollens, wenn das eine Glied wahr ist; so sind alle übrigen falsch.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s87-004",
     "kind": "text",
     "aa": 477,
     "text": "Bey disjunktiven Schlüssen hat man, wenn man ihre Richtigkeit prüfen will, zu sehen :",
     "ocrConf": 45
    },
    {
     "id": "philippi-s87-005",
     "kind": "text",
     "aa": 477,
     "text": "1. auf die Wahrheit der minoris propositionis.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s87-006",
     "kind": "text",
     "aa": 477,
     "text": "2. auf die richtige logische Eintheilung; ob nicht einige Glieder fehlen und ob sie alle sich contradictorisch entgegengesetzt sind.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s87-007",
     "kind": "text",
     "aa": 477,
     "text": "Bey hypothetischen hat man zu sehen auf",
     "ocrConf": 39
    },
    {
     "id": "philippi-s87-008",
     "kind": "text",
     "aa": 477,
     "text": "1. die Wahrheit des Antecedens oder Consequens",
     "ocrConf": 50
    },
    {
     "id": "philippi-s87-009",
     "kind": "text",
     "aa": 477,
     "text": "2. auf die richtige Folgerung.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s87-010",
     "kind": "text",
     "aa": 477,
     "text": "Wenn minor propositio ein hypothetischer Saz ist, dessen consequens ein disiunctives Urtheil ist ; so heißt ein solches Urtheil Dilemma (Syllogismus cornutus) weil es sehr in die Enge treibt. Das Dilemma wird nach den Regeln des syllogismi hypothetici erwiesen; ordinair gilt immer modus tollens indem ich durch alle membra negire.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s88",
   "title": "§399",
   "titleSrc": "heading",
   "headings": [
    "§399"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s88-001",
     "kind": "heading",
     "aa": 477,
     "text": "§399"
    },
    {
     "id": "philippi-s88-002",
     "kind": "text",
     "aa": 477,
     "text": "Ratiocinium crypticum und formale muß von einander unterschieden werden. Es sind beide ratiocinia ordinaria. Ratiocinia cryptica sind wirkliche ordentliche Vernunfftschlüsse wo man aber sich der Kürze zu bedienen was bekannt ist ausläßt. Es gehört dazu",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "philippi-s88-003",
     "kind": "text",
     "aa": 477,
     "text": "1. enthymema wo ich eine von den Praemissen weglasse. Alle Mensehen können irren, also auch der Pabst.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "philippi-s88-004",
     "kind": "text",
     "aa": 477,
     "text": "2. ratiocinia contracta wo ich per medios terminos Schlüsse. Alle Körper sind veränderlich «eil sie zusammengesetzt sind.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s88-005",
     "kind": "text",
     "aa": 478,
     "text": "Obgleich alle Vernunf f tschlüsse darinn bestehen, daß man vom allgemeinen aufs besondre schlüßt; so schließt man doch auch in Erfahrungserkenntnissen (obgleich freylich nicht nach aller Strenge) vom besondern aufs allgemeine. Diese Schlußart heißt Inductio.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s88-006",
     "kind": "text",
     "aa": 478,
     "ms": [
      {
       "p": null,
       "i": 542,
       "raw": "iß«",
       "unresolved": true
      }
     ],
     "text": "Analogie ist hiebey der Grund. Diese besteht im philosophischen Verhältniß. Wenn ich eine Wirkung habe und ihre Ursache weiß und sehe darauf eine ähnliche Wirkung anderswo; so Schlüsse ich daß da auch eine ähnliche Ursache sey. So Schlüsse ich auch von ähnlichen Ursachen auf ähnliche Wirkungen. Ferner wenn ich sehe daß zwey Dinge in den mehresten Stücken überemkommen ; so urtheile ich daß sie ganz übereinkommen. Es fehlen indessen solche Schlüsse vom besondern aufs Allgemeine sehr offt ; weil man doch nicht alle einzele besondre Stücke kennt; nur die Vernunfft kann allgemein richtig Schlüssen Z. E. Wenn ich schlüßen wollte daß alle Elektricität im Wasser verlohren gehe, weil jeder Körper den ich kenne und versucht habe, sie verliert, so wäre das falsch, denn der Zitteral behält die Elektricität im Waßer.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s88-007",
     "kind": "text",
     "aa": 478,
     "text": "Reisende machen offt solche unrichtige Inductionen. Wenn sie z. E. in 2 oder 3 Wirthshäusern schlecht aufgenommen sind, so glauben sie alle Wirthshäuser sind so; ja sie glauben der ganzen Nation ihr Charakter sey nicht der beste.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s88-008",
     "kind": "text",
     "aa": 478,
     "text": "Man schlüßt immer nur mit Vermuthung vom besondern aufs allgemeine.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "philippi-s88-009",
     "kind": "text",
     "aa": 478,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "165",
       "unresolved": true
      }
     ],
     "text": "Die Analogie die in der Gleichheit zweener philosophischen Verhältniße steht ist sehr conform den mathematischen Verhältnissen. In der Physik und Theologia naturalis bey den Eigenschaften der Gottheit schlüßt man das mehreste durch Analogie.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s88-010",
     "kind": "text",
     "aa": 478,
     "ms": [
      {
       "p": 166,
       "i": 0
      }
     ],
     "text": "Die theoretische Logic zeigt die Conditionen der Vollkommenheit der Erkennt niß an.",
     "ocrConf": 49
    },
    {
     "id": "philippi-s88-011",
     "kind": "text",
     "aa": 478,
     "text": "Wenn ein Argument zu wenig in sich enthält, so beweißt es doch einen Theil von der Sache, und ihm fehlt nur das Complementum zur Sufficienz.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s88-012",
     "kind": "text",
     "aa": 478,
     "text": "Was mehr als wahr ist, ist falsch. Wenn ein Beweisgrund mehr beweist als wahr ist, so ist er falsch, z. E. wir haben nicht das Recht einem Wesen das Leben zu nehmen, da wir es nicht gegeben haben.",
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s89",
   "title": "§402",
   "titleSrc": "heading",
   "headings": [
    "§402"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s89-001",
     "kind": "heading",
     "aa": 479,
     "text": "§402"
    },
    {
     "id": "philippi-s89-002",
     "kind": "text",
     "aa": 479,
     "text": "Ein Vernunfftschluß der falsch in der Form ist heißt Paralogismus. Ist der Fehler versteckt, so heißt er Sophisma. Der alten Dialektiker ihre Sophismata sind rechte Denkmäler der Alten Thorheit.",
     "ocrConf": 37
    }
   ]
  },
  {
   "id": "s90",
   "title": "§ 404",
   "titleSrc": "heading",
   "headings": [
    "§ 404"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s90-001",
     "kind": "heading",
     "aa": 479,
     "text": "§ 404"
    },
    {
     "id": "philippi-s90-002",
     "kind": "text",
     "aa": 479,
     "text": "Fallacia accidentis ist eine wahre Conclusio a dicto secundum quid ad dictum secundum quid und nicht wie der Autor sagt ad dictum simpliciter e. g. Wer da sagt daß der Respondens ein Mensch sey redet die Wahrheit; atqui, wer da sagt der Respondens sey ein Mohr, der sagt daß er ein Mensch sey: ergo.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s90-003",
     "kind": "text",
     "aa": 479,
     "text": "Fallacia medii ist wenn der terminus medius bald ohne bald mit Bestimmung genommen wird.",
     "ocrConf": 54
    }
   ]
  },
  {
   "id": "s91",
   "title": "§406",
   "titleSrc": "heading",
   "headings": [
    "§406"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s91-001",
     "kind": "heading",
     "aa": 479,
     "text": "§406"
    },
    {
     "id": "philippi-s91-002",
     "kind": "text",
     "aa": 479,
     "text": "Die Ratiocinia composita bestehen darinn, daß mehrere Vernunfft-Schlüsse nicht coordinirt sondern subordhiirt sind.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s91-003",
     "kind": "text",
     "aa": 479,
     "text": "Ratiocinatio polysyllogistica besteht darinn, daß die Conclusion des einen Syllogismus eine Prämiße des andern wird. Der Syllogismus der untergeordnet wird heißt : episyllogismus ; der dem einer untergeordnet wird heißt prosyllogismus. Beym Disputiren wird erst episyllogisch und dann prosyllogisch geschlossen.",
     "dehyphenated": 2,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s92",
   "title": "§408",
   "titleSrc": "heading",
   "headings": [
    "§408"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s92-001",
     "kind": "heading",
     "aa": 479,
     "text": "§408"
    },
    {
     "id": "philippi-s92-002",
     "kind": "text",
     "aa": 479,
     "text": "Sorites ist ein gehäuffter Vernunfftschluß (ratio polysyllogistica ratiociniorum contractorum)",
     "ocrConf": 48
    },
    {
     "id": "philippi-s92-003",
     "kind": "text",
     "aa": 479,
     "ms": [
      {
       "p": 167,
       "i": 0,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "§ 409",
     "ocrConf": 23
    },
    {
     "id": "philippi-s92-004",
     "kind": "text",
     "aa": 479,
     "text": "Sind die zusammengekettete Syllogismen hypothetisch, so wird der Sorites hypotheticus seyn.",
     "ocrConf": 36
    }
   ]
  },
  {
   "id": "s93",
   "title": "§411",
   "titleSrc": "heading",
   "headings": [
    "§411"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s93-001",
     "kind": "heading",
     "aa": 479,
     "text": "§411"
    },
    {
     "id": "philippi-s93-002",
     "kind": "text",
     "aa": 479,
     "text": "Petere principium heißt etwas als unerweißlich zum Grunde legen was doch noch erst erwiesen werden muß. So ist der Crusianische Saz : alles ist irgendwo und irgendwenn petitio principii.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s93-003",
     "kind": "text",
     "aa": 479,
     "text": "Circulus in probando ist. da man die Folge zum Grunde anführt. Diese sind in weitläufftigen Systemen, wenn man Lemmata macht, häufig.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s93-004",
     "kind": "text",
     "aa": 480,
     "text": "Eine Hypothese. Postulatio principii ist der Satz: Das Ganze ist größer als ein Theil deßelben.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s94",
   "title": "Der andre Haupttheil. Von der Lehrart der gelehrten Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Der andre Haupttheil.",
    "Von der Lehrart der gelehrten Erkenntniß."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s94-001",
     "kind": "heading",
     "aa": 480,
     "text": "Der andre Haupttheil. Von der Lehrart der gelehrten Erkenntniß."
    },
    {
     "id": "philippi-s94-002",
     "kind": "text",
     "aa": 480,
     "text": "Die Methode ist die Art wie viele Gedanken und Erkenntnisse verbunden werden sollen. Sie bedeutet die Form eines logisch vollkommenen Ganzen. Diese logische Vollkommenheit ist zwiefach:",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "philippi-s94-003",
     "kind": "text",
     "aa": 480,
     "text": "oc. nach Regeln des Gesunden Verstandes und",
     "ocrConf": 40
    },
    {
     "id": "philippi-s94-004",
     "kind": "text",
     "aa": 480,
     "text": "ß. nach Regeln der Wissenschafft.",
     "ocrConf": 32
    },
    {
     "id": "philippi-s94-005",
     "kind": "text",
     "aa": 480,
     "text": "Alle Methode respicirt",
     "ocrConf": 53
    },
    {
     "id": "philippi-s94-006",
     "kind": "text",
     "aa": 480,
     "text": "1. aufs Object was erkannt werden soll.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s94-007",
     "kind": "text",
     "aa": 480,
     "text": "2. auf die Natur und die Erkenn tnißfähigkeit wodurch der Gegenstand soll erkannt werden.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s94-008",
     "kind": "text",
     "aa": 480,
     "text": "3. auf die besondre Beschaffenheit des Subjekts was den Gegenstand einsehen, faßen und verstehen soll.",
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s95",
   "title": "I.",
   "titleSrc": "heading",
   "headings": [
    "I."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s95-001",
     "kind": "heading",
     "aa": 480,
     "text": "I."
    },
    {
     "id": "philippi-s95-002",
     "kind": "text",
     "aa": 480,
     "text": "Die Philosophie hat zum Gegenstande die Beschaffenheit der Dinge; die Mathematik aber die Quantitaet. Dies macht die Methode sehr verschieden. Ist der Gegenstand ein Objekt der Vernunffterkenntniß, so wird die Methode rational; ist es ein Gegenstand der sinnlichen Erkenntniß: so wird er historisch abzuhandeln seyn.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s96",
   "title": "II.",
   "titleSrc": "heading",
   "headings": [
    "II."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s96-001",
     "kind": "heading",
     "aa": 480,
     "text": "II."
    },
    {
     "id": "philippi-s96-002",
     "kind": "text",
     "aa": 480,
     "ms": [
      {
       "p": 168,
       "i": 493
      }
     ],
     "text": "Die Methode muß verschieden seyn nach der Subjekte Umstände. Vor Kinder ist die Lehrart anders als für Erwachsene; für Frauenzimmer anders als für Männer; auch die verschiedene Fähigkeiten und Neigungen. Die Methode muß sich auch schicken für die Person die da vorträgt und sie muß sich auch einem einzelnen Subject accommodiren. In diesem Stück ists schwer in einem Collegio seine Methode nach eines jeden Wunsch einzurichten. Der eine ist flatterhafft und will immer aufgemuntert; der andre ist tiefsinnig und will immer instruirtso werden.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s97",
   "title": "§421",
   "titleSrc": "heading",
   "headings": [
    "§421"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s97-001",
     "kind": "heading",
     "aa": 481,
     "text": "§421"
    },
    {
     "id": "philippi-s97-002",
     "kind": "text",
     "aa": 481,
     "text": "Etwas so fern es demonstrirt wird heißt eine Scientz. Alle Wissenschaften sind entweder rational oder historisch. Die rationale sind entweder Wissenschaften, deren Form nur rational ist die Materie aber empirisch z. E. theoretische Physik oder Wissenschaft des reinen Verstandes, deren Materie und Form aus dem reinen Verstände entsprungen; oder eigentlich zu reden, deren Objekt die Form oder das Verfahren des Verstandes ist und die eigentlich keine Materie haben.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "philippi-s97-003",
     "kind": "text",
     "aa": 481,
     "text": "Die Erkenntnisse der reinen Vernunft sind",
     "ocrConf": 43
    },
    {
     "id": "philippi-s97-004",
     "kind": "text",
     "aa": 481,
     "text": "1. dogmatisch in der Moral",
     "ocrConf": 47
    },
    {
     "id": "philippi-s97-005",
     "kind": "text",
     "aa": 481,
     "text": "2. critisch in der Metaphysik.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s97-006",
     "kind": "text",
     "aa": 481,
     "text": "Beyde Wissen schafften sind verwandt.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s97-007",
     "kind": "text",
     "aa": 481,
     "text": "Die Wissenschafft der Quantitaet der Objecte d. i. die Mathematik demonstrirt alles euident, weil sie sich ganz auf Raum und Zeit als welche sinnlicher Intuitus sind gründet. Die Mathematik kann euident seyn, weil sie sich nur mit den Grössen beschäfftigt d. i. wie offt etwas gesezt sey was es auch sey. Die Philosophie nicht; denn che bemüht sich zu entwickeln, was da gesezt sey.",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s98",
   "title": "§422",
   "titleSrc": "heading",
   "headings": [
    "§422"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s98-001",
     "kind": "heading",
     "aa": 481,
     "text": "§422"
    },
    {
     "id": "philippi-s98-002",
     "kind": "text",
     "aa": 481,
     "text": "Die Analysis und Synthesis kann in der Coordination und Subordination betrachtet werden. Die Analysis der Coordination ist da ich von dem Ganzen zu den Theilen gehe.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s98-003",
     "kind": "text",
     "aa": 481,
     "text": "Die Synthesis der Coordination da ich von den Theilen aufs Ganze gehe.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s98-004",
     "kind": "text",
     "aa": 481,
     "text": "Analysis der Subordination ist die Ableitung der Folgen aus ihren Gründen.",
     "ocrConf": 46
    },
    {
     "id": "philippi-s98-005",
     "kind": "text",
     "aa": 481,
     "text": "S3'nthesis der Subordination ist wenn ich von den Folgen zu den Gründen gehe.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s98-006",
     "kind": "text",
     "aa": 481,
     "text": "Indessen ist in dem Verhältniß der Gründe und Folgen und in dem der Theüe zum Ganzen ein grosser Unterschied und ein ganz besonder Verfahren des Verstandes.",
     "ocrConf": 51
    },
    {
     "id": "philippi-s98-007",
     "kind": "text",
     "aa": 481,
     "text": "Die Mathematik und alle empirische Wissenschafften haben die synthetische Methode ; denn diese alle sezzen ihre Wissenschaft nach und nach zusammen indem sie immer mehr erfinden.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s98-008",
     "kind": "text",
     "aa": 481,
     "ms": [
      {
       "p": 169,
       "i": 137
      }
     ],
     "text": "Die Methode der Philosophie aber besonders der reinen Philosophie ist analytisch. Es ist die ganze Erkenntniß, es sind alle Begriffe gegeben. Man soll sie nur durch geschickte Zerlegung deutlich machen. Dann komme ich vom allgemeinen aufs besondre.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s98-009",
     "kind": "text",
     "aa": 482,
     "text": "Daß die reine Philosophie bisher seit Jahrhunderten keinen Fortgang gehabt, da die Mathematik fast die höchste Stuf fe erreicht, kommt daher weil man ihre Methode verkannt und synthetisch hat philosopliiren wollen.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "philippi-s98-010",
     "kind": "text",
     "aa": 482,
     "text": "§",
     "ocrConf": 15
    },
    {
     "id": "philippi-s98-011",
     "kind": "text",
     "aa": 482,
     "text": "Der Autor definirt hier die Kunst. Es darf aber nicht alles defdnirt werden. Die künstliche Lehrart wird contradistinguirt der Natürlichen. So wie ein Unterschied zu machen zwischen einer vernünfftigen Erkenntniß d. i. einer solchen, die der Vernunfft nicht widerspricht und einer vernünftigen Erkenntniß d. i. einer solchen, die aus der Vernunff t entspringt ; so heißt auch eine Erkenntniß in zwiefachem Verstände natürlich nämlich 1. wenn sie mit der Natur des Objekts und Subjects übereinstimmt und dann 2. wenn sie aus der Natur entspringt.",
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "philippi-s98-012",
     "kind": "text",
     "aa": 482,
     "text": "Die Lehrart muß nicht sowol subjectiv als objectiv natürlich, das heißt, dem Objekt angemessen seyn. Eine natürliche Methode überhaupt ist nicht so was leichtes.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s98-013",
     "kind": "text",
     "aa": 482,
     "text": "Die künstliche Lehrart ist die Lehrart der Schule.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s99",
   "title": "§428",
   "titleSrc": "heading",
   "headings": [
    "§428"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s99-001",
     "kind": "heading",
     "aa": 482,
     "text": "§428"
    },
    {
     "id": "philippi-s99-002",
     "kind": "text",
     "aa": 482,
     "text": "Methodus tabellaris eine ganze Wissenschafft in Tabellen zu entwerfen ist sehr schön; es gehört aber Einsicht dazu, nicht gar zu viel und nicht unnütze Eintheilungen zu machen. Daries hat ein besonder Talent zu dieser Methode, die nicht soviel zum Vortrage als zur Repetition vortreflich ist. Die Lehrart nach der Zertheilung eines ganzen Lehrgebäudes ist keine Lehrart. Die Art der Zusammensezzung der Theüe macht das Lehrgebäude aus.",
     "dehyphenated": 2,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s100",
   "title": "§429",
   "titleSrc": "heading",
   "headings": [
    "§429"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s100-001",
     "kind": "heading",
     "aa": 482,
     "text": "§429"
    },
    {
     "id": "philippi-s100-002",
     "kind": "text",
     "aa": 482,
     "text": "Affectatio heißt eine unnatürliche Kunst. Affectirt heißt alles wodurch man will künstlich scheinen. So ist es affectirt, wenn man nicht seine Kunst sondern Spuren einer künstlichen Unterweisung zeigt, Das af feetüte ist gemeinhin mit Pedanterie verbunden. Wenn man eine einzige Methode auf alles applitirt, sie mag sich schicken oder nicht.",
     "dehyphenated": 1,
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s101",
   "title": "§430",
   "titleSrc": "heading",
   "headings": [
    "§430"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s101-001",
     "kind": "heading",
     "aa": 482,
     "text": "§430"
    },
    {
     "id": "philippi-s101-002",
     "kind": "text",
     "aa": 482,
     "aaEnd": 483,
     "pages": [
      {
       "p": 483,
       "i": 129
      }
     ],
     "ms": [
      {
       "p": 170,
       "i": 200,
       "raw": "uo",
       "inferred": true
      }
     ],
     "text": "Die sokratische Lehrart ist die Lehrart durch Gespräche, da man durch woleingerichtete Fragen alles aus dem Schüler herausbringt und ihn auf Antworten führt die ihm ganz neu sind. Sie hat den grösten Nuzzen. Wir sehen deutlich ein wie die Erkenntniß entspringt und wir werden in den Stand gesezt auf alle vorgelegte Quaestionen selbst zu antworten. Sie ist ehie Gattung catechetischer Methode; aber sie ist sehr ermüdend; und für erfahrne Leser langweilig. Moses Mendelssohn hat sie am besten nachgeahmt. Die platonische Lehrart bestand in einer freyen Rede, wo man ein System gewahr wird.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 40
    }
   ]
  },
  {
   "id": "s102",
   "title": "§432",
   "titleSrc": "heading",
   "headings": [
    "§432"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s102-001",
     "kind": "heading",
     "aa": 483,
     "text": "§432"
    },
    {
     "id": "philippi-s102-002",
     "kind": "text",
     "aa": 483,
     "text": "In historischen Wissenschafften hat man zwey Methoden, die chronologische und geographische. Beyde sind zu vereinbaren. Die leztere scheint mir vorzüglicher zu seyn als die erste, ob man gleich sich derselben nicht bedienet.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s102-003",
     "kind": "text",
     "aa": 483,
     "text": "In allen zusammenhängenden Erkenntnissen muß man eher das Ganze als seine Theile, und von den Theilen eher die großen als die kleinen, eher die Ober- als Untereintheilungen in Erwägung ziehen.",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s103",
   "title": "§434",
   "titleSrc": "heading",
   "headings": [
    "§434"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s103-001",
     "kind": "heading",
     "aa": 483,
     "text": "§434"
    },
    {
     "id": "philippi-s103-002",
     "kind": "text",
     "aa": 483,
     "text": "Von der Historie sagt der Autor, daß sie zu kemer Doctrin gehöre ; allein sie ist eben so gut eine Doctrin als dogmatische Wahrheiten. Es ist zu unterscheiden",
     "ocrConf": 44
    },
    {
     "id": "philippi-s103-003",
     "kind": "text",
     "aa": 483,
     "text": "a. Doctrin ein Zusammenhang verschiedener Erkenntnisse und Lehren.",
     "ocrConf": 32
    },
    {
     "id": "philippi-s103-004",
     "kind": "text",
     "aa": 483,
     "text": "b. Disciplin, wenn dieser Zusammenhang in eine Methode gebracht wird.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s103-005",
     "kind": "text",
     "aa": 483,
     "text": "e. Wissenschafft wenn die Erkenntniß nach einer solchen Methode complet ausgearbeitet ist.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s103-006",
     "kind": "text",
     "aa": 483,
     "text": "Die Wissenschafft ist eine complete Disciplin.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s103-007",
     "kind": "text",
     "aa": 483,
     "text": "Bey der Doctrin richte ich nur mein Augenmerk auf das was gelehrt wird; bei der Disciplin sehe ich auf die Methode.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s103-008",
     "kind": "text",
     "aa": 483,
     "text": "Doctrin und Disciplin finden also in historischen eben so gut als in dogmatischen Erkenntnissen statt. Bey Wissenschaften muß jederzeit Doctrin seyn.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s103-009",
     "kind": "text",
     "aa": 483,
     "text": "Der Doctrin ist die Critic contradistinguirt. Die Lehre wodurch ich einer Erkenntniß nicht einen Zusatz gebe, sondern sie nur beurtheile heißt Dokimastik.",
     "ocrConf": 40
    }
   ]
  },
  {
   "id": "s104",
   "title": "§ 435",
   "titleSrc": "heading",
   "headings": [
    "§ 435"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s104-001",
     "kind": "heading",
     "aa": 483,
     "text": "§ 435"
    },
    {
     "id": "philippi-s104-002",
     "kind": "text",
     "aa": 483,
     "text": "Tumult uarisch denkt man, wenn man ohne Methode denkt.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s104-003",
     "kind": "text",
     "aa": 484,
     "ms": [
      {
       "p": 171,
       "i": 0,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "§ 436",
     "ocrConf": 9
    },
    {
     "id": "philippi-s104-004",
     "kind": "text",
     "aa": 484,
     "text": "Meditiren heißt nicht sich an Erkenntnisse erinnern die man gehabt hat, sondern neue hervorbringen die man noch nicht gehabt hat. Der Autor glaubt daß man Methodisch meditiren müsse, allein das methodische Meditiren hindert daß man nicht genügsame Materialien zum Meditiren sich verschafft. Im Anfange meditirt man tumultuarisch . Man muß das was einem einfällt aufschreiben wenn einem bisweilen Gedanken in den Sinn kommen, die man in seinem Leben nickt hat. Man schreibe erst alle Gedanken, wie man sie hat, hin ohne Ordnung. Hernach fange man an zu coordiniren und dann zu subordiniren. Will man was verfertigen ; so muß man gewiß das Skelet des Systems allgemein fertig machen, hierauf in Capitel theilen. Mithin müssen bey jeder Außarbeitung 3 Arbeiten vorgehen",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s104-005",
     "kind": "text",
     "aa": 484,
     "text": "1. Alle Gedanken, ohne Ordnung schreibt man hin.",
     "ocrConf": 37
    },
    {
     "id": "philippi-s104-006",
     "kind": "text",
     "aa": 484,
     "text": "2. macht man emen allgemeinen Plan.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s104-007",
     "kind": "text",
     "aa": 484,
     "text": "3. Arbeitet man alle Theile aus.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s104-008",
     "kind": "text",
     "aa": 484,
     "text": "Was das Meditiren selbst betrifft, so muß man wol freylich dazu von Natur geneigt seyn ; doch macht man einen Anfang darum, wenn man unter den Worten sich übt Sachen als gegenwärtig in der Einbildung vorzustellen ; wenn man sich gleichsam innerlich der Worte bewust wird was sie bedeuten und wenn man auf das was in uns vorgeht Acht giebt. Das Zweifeln übt im Nachdenken aber auch das Bestreben eines jeden Meynung recht einzusehen und sich in sie versezzen zu können.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s104-009",
     "kind": "text",
     "aa": 484,
     "text": "Es ist gut, wenn man das Meditiren mit andern Wissenschaften die erholend sind, abwechselt.",
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s105",
   "title": "Der dritte Haupttheil. Vom gelehrten Vortrage. Der erste Abschnitt. Vom Gebrauch der Worte.",
   "titleSrc": "heading",
   "headings": [
    "Der dritte Haupttheil.",
    "Vom gelehrten Vortrage.",
    "Der erste Abschnitt.",
    "Vom Gebrauch der Worte."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s105-001",
     "kind": "heading",
     "aa": 484,
     "text": "Der dritte Haupttheil. Vom gelehrten Vortrage. Der erste Abschnitt. Vom Gebrauch der Worte."
    },
    {
     "id": "philippi-s105-002",
     "kind": "text",
     "aa": 484,
     "text": "Es ist die Beschaffenheit der Worte ein würdiges Object der Betrachtungen des Philosophen.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s105-003",
     "kind": "text",
     "aa": 484,
     "text": "Der rechte Gebrauch der Worte ist der, daß sie einen Gedanken genau bezeichnen.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s105-004",
     "kind": "text",
     "aa": 484,
     "aaEnd": 485,
     "pages": [
      {
       "p": 485,
       "i": 133
      }
     ],
     "ms": [
      {
       "p": 172,
       "i": 70,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Es giebt keine Synonyma die in der That einerley wären. Sie sind alle öffters aber sehr fein unterschieden z. E. Stolz und Hochmuth. Man kann von einem Menschen ohne ihn zu tadeln sagen, daß er stolz sej'; man tadelt ihn aber beständig wenn man sagt, daß er hochmüthig sey. Der Stolze ist der der sich nicht will verachten lassen; der Hochmüthige aber der so andre verachtet. Eigenliebe und Selbsthebe sind auch verschieden. Eigenliebe ist wenn man sich recht wol will. Selbsthebe aber, wenn man sich mehr liebt als andre.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "philippi-s105-005",
     "kind": "text",
     "aa": 485,
     "text": "Wer sich daher synonymisch ausdrücken will, der kann sich niemals logisch vollkommen ausdrücken; denn ein Wort bedeutet immer was andres, als ein andres.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s105-006",
     "kind": "text",
     "aa": 485,
     "text": "Ein Ausdruck bekommt verschiedene Namen. Wemi er unter allen bekannt ist, so heißt er vulgaris. Wenn er aber nur unter den Gelehrten bekannt ist, dann heißt er reeeptus sc. ab eruditis. Wenn ein Ausdruck nur unter Personen von gewisser Kunst gebräuchlich ist, so heißt er terminus technicus. Ein terminus technicus ist nur eine Nothhülfe wo der vsus communis nicht zulangt. Sie werden offt zur Ostentation gebraucht. Man muß sie aber nur in der Kunst brauchen ausser ihr gar nicht.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s105-007",
     "kind": "text",
     "aa": 485,
     "text": "Es ist eine grosse Hülfe für unsern Verstand daß wir auch für die gemeinsten Begriffe Worte haben und da soU die Vernunfft bemüht seyn die rechte Bedeutung die mit dem Wort verbunden ist aufzusuchen. Alle morahsche Ausdrücke sind von der Art. Wenn man das Wort: Offenherzigkeit betrachtet; so sieht man daß es ein Resultat von der Summe vieler andern Ausdrücke sey. Es faßt dies Wort in sich : daß ein Mensch nichts verheelt ; er verheelt nichts weil er sich keines Bösen bewust ist. Dieses muß aus Bonitaet fliessen.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s105-008",
     "kind": "text",
     "aa": 485,
     "text": "Man sieht liier, daß das Gemüth viel Reflexionen hat machen müssen, bis es zu allen Ideen ein schickliches Wort hat finden können. So in vielen andern. Die deutsche Sprache ist darinn schön, daß sie in einem Wort offt so viel vortreffliche Ideen einschließt. Man versteht auch die Worte und die darinn hegende Ideen sehr leicht.",
     "ocrConf": 44
    },
    {
     "id": "philippi-s105-009",
     "kind": "text",
     "aa": 485,
     "text": "Es ist ungemein viel daran gelegen, daß man das rechte Wort findet, wo man es braucht. In moralischen Dingen kann man wenn man das rechte Wort trifft offt seine Gedanken verständlicher machen, als die besten Definitionen und Umschreibungen thun würden.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s106",
   "title": "§ 449",
   "titleSrc": "heading",
   "headings": [
    "§ 449"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s106-001",
     "kind": "heading",
     "aa": 485,
     "text": "§ 449"
    },
    {
     "id": "philippi-s106-002",
     "kind": "text",
     "aa": 485,
     "text": "Terminus inanis ist, dessen Bedeutung wir zu verstehen glauben, in der That aber nicht verstehen. Z. E. Die entelechia der Alten und die Quintessenz des Theophrasti Paracelsi.",
     "ocrConf": 39
    },
    {
     "id": "philippi-s106-003",
     "kind": "text",
     "aa": 486,
     "ms": [
      {
       "p": 173,
       "i": 68,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Ein Ausdruck ist betrügerisch (deceptrix) wo wir glauben es sey was möglich und ist doch unmöglich. Z. E. Die größte Zahl die aliergeschwindeste Bewegung.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s107",
   "title": "§450",
   "titleSrc": "heading",
   "headings": [
    "§450"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s107-001",
     "kind": "heading",
     "aa": 486,
     "text": "§450"
    },
    {
     "id": "philippi-s107-002",
     "kind": "text",
     "aa": 486,
     "text": "Terminus famüiaris ist der Ausdruck, dessen Sinn niemals ist untersucht worden, weil er niemals ist beachtet worden. Jede Sprache hat solche. Ich sage z. E. süchtig. Das Wort was es bedeutet weiß keiner zu sagen; aber jeder verstehts. Solche termini sind bey näherer Untersuchung auch offt betrügerische Ausdrücke.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s107-003",
     "kind": "text",
     "aa": 486,
     "text": "§ 452",
     "ocrConf": 2
    },
    {
     "id": "philippi-s107-004",
     "kind": "text",
     "aa": 486,
     "text": "Die Wortkrämerey der Gelehrten ist ein betrügerischer Handel, da man Worte für Sachen ausgiebt. Was ist gewöhnlicher wie das ?",
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s108",
   "title": "§454",
   "titleSrc": "heading",
   "headings": [
    "§454"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s108-001",
     "kind": "heading",
     "aa": 486,
     "text": "§454"
    },
    {
     "id": "philippi-s108-002",
     "kind": "text",
     "aa": 486,
     "text": "Ein Ausdruck heißt verständlich der da kann verstanden werden. Verständlich kann etwas seyn ohne deutlich zu seyn. Schon dadurch daß ich an die Stelle eines confusen einen weniger confusen an die Stelle eines ungewöhnlichen Wortes ein gewöhnlicheres sezze, wird ein Ausdruck verständlich.",
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s109",
   "title": "§457",
   "titleSrc": "heading",
   "headings": [
    "§457"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s109-001",
     "kind": "heading",
     "aa": 486,
     "text": "§457"
    },
    {
     "id": "philippi-s109-002",
     "kind": "text",
     "aa": 486,
     "text": "Wenn 2 Ausdrücke eine Bedeutung haben oder wo wenigstens die Bedeutungen nicht sehr verschieden sind; so heissen sie synonymische Ausdrücke. Hat ein Ausdruck mehr als eine Bedeutung, so heißt er terminus vagus, ambiguus, anceps. Die französische Sprache hat deren viel. Zweideutigkeiten geben ein Spiel des Wizzes ab.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s110",
   "title": "Der andre Abschnitt. Von der gelehrten Schreibart.",
   "titleSrc": "heading",
   "headings": [
    "Der andre Abschnitt.",
    "Von der gelehrten Schreibart."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s110-001",
     "kind": "heading",
     "aa": 486,
     "text": "Der andre Abschnitt. Von der gelehrten Schreibart."
    },
    {
     "id": "philippi-s110-002",
     "kind": "text",
     "aa": 486,
     "text": "Styl bedeutet eigentlich das Werkzeug eines Bildhauers. Styl bedeutet hier den Charakter seine Gedanken auszudrücken. Jeder hat seinen eigenen Styl, so wie jeder seine besondre Hand schreibt. Der Styl ist zu erwägen",
     "ocrConf": 42
    },
    {
     "id": "philippi-s110-003",
     "kind": "text",
     "aa": 486,
     "text": "1. so fern er angemessen ist den Sachen, dem Obiect.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s110-004",
     "kind": "text",
     "aa": 486,
     "text": "2. der Person (Subiect) und ihrem Stande.",
     "ocrConf": 36
    },
    {
     "id": "philippi-s110-005",
     "kind": "text",
     "aa": 486,
     "text": "3. denen für die man schreibt.",
     "ocrConf": 35
    },
    {
     "id": "philippi-s110-006",
     "kind": "text",
     "aa": 487,
     "text": "Für jeden schickt sich ein besonderer Styl und ein jeder kann nicht seine Gedanken in die Form eines andern bringen.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s110-007",
     "kind": "text",
     "aa": 487,
     "text": "Qu. Wie findet man welcher Styl jedem angemessen ist ?",
     "ocrConf": 42
    },
    {
     "id": "philippi-s110-008",
     "kind": "text",
     "aa": 487,
     "text": "Man muß viel Bücher lesen ; das Buch dessen Schreibart mit unsern ( redanken in gröster Sympathie steht dessen Styl den muß ich zu dem meinigen machen.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s110-009",
     "kind": "text",
     "aa": 487,
     "ms": [
      {
       "p": 174,
       "i": 152,
       "raw": "IM",
       "inferred": true
      }
     ],
     "text": "Schullehrer corrumpiren sehr den Styl, da sie schön schreiben lehren wollen welches doch eine Sache des Genies ist Zur blossen Nachahmung aber wenn sie die fordern ist kein Genie nöthig. Dies thut so grossen Nachtheil, daß man, wenn man aus der Schule kommt lange Zeit braucht, bis man den Schulstyl vergißt, und wenn das Gemüth dann in die natürliche Form gekommen und wenn man ihn vergißt, denn kann man erst anfangen in der Schreibart sich zu üben.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s110-010",
     "kind": "text",
     "aa": 487,
     "text": "Der Styl muß der Sache angemessen seyn. Wenn sie erhaben ist. so muß er auch in erhabenen Ausdrücken bestehen; ist sie niedrig, so muß der Styl zwar nicht unrein, aber doch populair seyn. Die Ordnung im Vortrage unsrer Gedanken, die Zusammenstellung der Begriffe hat auf die Lebhaftigkeit grossen Einfluß. Der affectirte Styl ist am schlimmsten zu verhüten und ist nachtheiliger als die Einfalt. Diese gefällt nur nicht, jener ekelt.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s110-011",
     "kind": "text",
     "aa": 487,
     "text": "Bey dem Styl muß nicht eine Aengstlichkeit in der blossen Form des Ausdrucks hervorleuchten. Dem Styl ist entgegengesetzt die Unreinigkeit der Sprache, wenn Wörter nicht usuell sind, oder wenn die Verbindungen derselben der Grammatik zuwider laufen. Der St}d kann rein seyn ohne affectirt zu seyn. Es ist nicht unerlaubt von den Sprachregeln abzugehen, wenn es die Vernunfftregeln fordern.",
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s111",
   "title": "§473",
   "titleSrc": "heading",
   "headings": [
    "§473"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s111-001",
     "kind": "heading",
     "aa": 487,
     "text": "§473"
    },
    {
     "id": "philippi-s111-002",
     "kind": "text",
     "aa": 487,
     "text": "Die Füglichkeit der Schreibart besteht darinn, daß sie so beschaffen sey, daß sie nicht zu groß sondern passend ist für die Sache. Der Wollaut der Schreibart ist etwas was mehr unter die Chimären als zu dem wahren gehört. Die Engländer sagen, daß Virgils Gedichte wol lauten, aber wenn wir einen Engländer die Verse recitiren hörten, so würde dies unsern Ohren unleidlich seyn. Das Sonorum besteht in dem Maaß der Sylben.",
     "dehyphenated": 1,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s112",
   "title": "§ 477",
   "titleSrc": "heading",
   "headings": [
    "§ 477"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s112-001",
     "kind": "heading",
     "aa": 487,
     "text": "§ 477"
    },
    {
     "id": "philippi-s112-002",
     "kind": "text",
     "aa": 487,
     "aaEnd": 488,
     "pages": [
      {
       "p": 488,
       "i": 125
      }
     ],
     "text": "Die Congruentz der Schreibart besteht darinn, daß der Styl der Sache und vornemhch dem Zweck angemessen sey. Diese läßt sich nur durch Erfahrung lernen. Segner hat über die Arithmetik und Geometrie geschrieben, aber anstatt es deutlich zu machen wird er undeutlich.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 38
    }
   ]
  },
  {
   "id": "s113",
   "title": "Der dritte Abschnitt.",
   "titleSrc": "heading",
   "headings": [
    "Der dritte Abschnitt."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s113-001",
     "kind": "heading",
     "aa": 488,
     "text": "Der dritte Abschnitt."
    },
    {
     "id": "philippi-s113-002",
     "kind": "text",
     "aa": 488,
     "text": "Von einer gelehrten Rede.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s114",
   "title": "§490",
   "titleSrc": "heading",
   "headings": [
    "§490"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s114-001",
     "kind": "heading",
     "aa": 488,
     "text": "§490"
    },
    {
     "id": "philippi-s114-002",
     "kind": "text",
     "aa": 488,
     "ms": [
      {
       "p": 175,
       "i": 60,
       "raw": "IT»",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "Vom dono didactico und den Requisiten der Lehrer. Es müssen 1 sich überhaupt 2 Stücke an einem Lehrer finden. Er muß besizzen",
     "ocrConf": 39
    },
    {
     "id": "philippi-s114-003",
     "kind": "text",
     "aa": 488,
     "text": "a. eine Condescendenz zu den schlechtem und",
     "ocrConf": 43
    },
    {
     "id": "philippi-s114-004",
     "kind": "text",
     "aa": 488,
     "text": "b. eine Coadscendenz zu den höhern Fähigkeiten.",
     "ocrConf": 34
    },
    {
     "id": "philippi-s114-005",
     "kind": "text",
     "aa": 488,
     "text": "I. Ein jeder Lehrer muß sich in die Stelle seiner Zuhörer zu sezzen wissen. Ich kann einen andern nur belehren durch seinen eignen Verstand ; mithin habe ich eine Materie zu bearbeiten die schon in dem Kopfe des andern liegt. Das nennt man die Condescendenz, sie sezt voraus daß man sich in die Stelle derer zu sezzen wisse die man lehrt. Das können nur sehr wenige Lehrer der Religion und andre Lehrer. Ausserdem muß ein Lehrer sehen wozu das Kind am meisten Genie zeigt. Es ist schwer zu erkennen wozu es am meisten Neigung und Faßlichkeit hat. Viele Autoren haben Handbücher von der Leiter-Weisung der Jugend geschrieben. Basedow arbeitet an einem Elementar buche von der Erziehung der Jugend. Es ist dies eine grosse Unternehmung. Es gehört mehr Kunst die ersten Gründe einem beyzubringen als die Fälligkeiten dessen der schon was gelernt hat mehr zu excoliren.",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "philippi-s114-006",
     "kind": "text",
     "aa": 488,
     "text": "IL Das 2te Requisituni eines Lehrers ist die Coadscendenz daß man zu den Talenten die über den Mittelstand erhoben sind, hinaufsteige. Der wenig weiß kann es nicht. Es ist der beste Fall, daß man sich einen Mittelgrad wähle.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s114-007",
     "kind": "text",
     "aa": 488,
     "text": "Wie muß man sich aber in öff entheben Vorträgen verhalten, da man der Auditorum Fähigkeit nicht kennt. Man kann nichts besser thun als daß man für fähige und schlechte Köpfe zugleich sorge, damit beyde für sich was finden, das andre mögen sie weglassen. Zur Erholung giebts einen Vortrag der Belustigung. Wenn etwas das Gemüth vergnügen soll; so muß es in die Sache selbst eingewebet seyn. Dieses geschieht durch gute Beispiele. Die Gelehrsamkeit muß die Quelle des Scherzes seyn. Die Illustrationes und Similia müssen einem gelehrten Mann anständig se}m.",
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s115",
   "title": "§493",
   "titleSrc": "heading",
   "headings": [
    "§493"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s115-001",
     "kind": "heading",
     "aa": 489,
     "text": "§493"
    },
    {
     "id": "philippi-s115-002",
     "kind": "text",
     "aa": 489,
     "ms": [
      {
       "p": 176,
       "i": 679,
       "raw": "1T6",
       "inferred": true
      }
     ],
     "text": "Hier wird gefragt, welche Methode man gebrauchen muß um einen zu widerlegen. Es ist unterschieden einem eine Meynung beybringen und eines Meynung widerlegen. Im ersten Fall ist das Subject leer, in dem andern aber muß ich es entleeren. Vor aller Belehrung muß ich erst die Data haben worinn der andre irrt. Jeder Irrthum ist als ein Phänomenon anzusehen welches einer Erklärung würdig ist. Ich muß erst aufsuchen wie er zu dem Irrthum hat kommen können. Dann muß ich auch den Theil der Wahrheit, der in seinem Irrthum ist, aufspüren. Denn es duldet kein Mensch daß man sage er habe ganz geirret. Das ist auch niemals an dem und dann wenn ich ihm alle gesunde Vernunft abspreche, dannists ja auch ungereimt ihn belehren oder widerlegen zu wollen. Es ist verschieden: auf etwas antworten und etwas beantworten. Es kann auf alles geantwortet Averden aber daß alles beantwortet worden, das wird selten bey Disputationen effectuirt. Beantworten heißt zur Ueberzeugung bringen. Bey allen gelehrten Streitigkeiten soll der Zweck seyn die Wahrheit herauszubringen. Es ist wiedersinnig, daß sie durch Streit soll herausgebracht werden; nur durch die Einigkeit die etwa durch den Streit vermittelt wird, wird sie herausgebracht. Modus litem finiendi est amicabilis compositio. Ich muß das Wahre, so in des andern Urtheil und das Falsche, so in meinem ist, zeigen: dann laßt sehen, ob wir uns wol verstehen und hierauf wird sichs zeigen, ob nicht partial der eine Saz wahr ist.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s116",
   "title": "§ 501",
   "titleSrc": "heading",
   "headings": [
    "§ 501"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s116-001",
     "kind": "heading",
     "aa": 489,
     "text": "§ 501"
    },
    {
     "id": "philippi-s116-002",
     "kind": "text",
     "aa": 489,
     "text": "Ein Wortstreit ist, wenn Personen glauben verschiedene Meinungen zu bestreiten und doch nur in den Worten uneins, in der Sache selbst einig sind. Von der Praedestination haben einige geglaubt, daß es mehr ein Wort- als Sachstreit sey.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s117",
   "title": "§ 504",
   "titleSrc": "heading",
   "headings": [
    "§ 504"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s117-001",
     "kind": "heading",
     "aa": 489,
     "text": "§ 504"
    },
    {
     "id": "philippi-s117-002",
     "kind": "text",
     "aa": 489,
     "text": "Argumentum ad hominem ist ein solches Argumentum welches zwar nicht wahr für jedermann ist, aber doch dient jemanden zum Stillschweigen zu bringen. Wenn ich z. E. ex concessis und den besonderen Säzzen, die ein andrer hat, etwas herhole. Dieses sind gute Mittel einen sich vom Halse zu schaffen und den Streit zu endigen, aber nicht die Wahrheit zu finden.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s118",
   "title": "§509",
   "titleSrc": "heading",
   "headings": [
    "§509"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s118-001",
     "kind": "heading",
     "aa": 490,
     "text": "§509"
    },
    {
     "id": "philippi-s118-002",
     "kind": "text",
     "aa": 490,
     "text": "Retorsiones und reprehensiones sind in persönlichen Streitigkeiten. Die Distinctionen dienen gut sieh aus dem Gedränge zu ziehen. Instantia ist wenn etwas allgemein gebraucht wird, und ich zeige daß es nicht allgemein ist.",
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s119",
   "title": "§ 512",
   "titleSrc": "heading",
   "headings": [
    "§ 512"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s119-001",
     "kind": "heading",
     "aa": 490,
     "text": "§ 512"
    },
    {
     "id": "philippi-s119-002",
     "kind": "text",
     "aa": 490,
     "text": "Eine Verteidigung welche auf die Person geht heißt Apologie, geht sie auf die Urt heile andrer so heißt sie Refutatio.",
     "ocrConf": 51
    }
   ]
  },
  {
   "id": "s120",
   "title": "§514",
   "titleSrc": "heading",
   "headings": [
    "§514"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s120-001",
     "kind": "heading",
     "aa": 490,
     "text": "§514"
    },
    {
     "id": "philippi-s120-002",
     "kind": "text",
     "aa": 490,
     "ms": [
      {
       "p": 177,
       "i": 58,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Eine formelle Disputation ist die Handlung wo man in Gegen wart gelehrter Leute einige Säzze Preiß giebt sie wider alle Einwendungen zu vertheidigen. Es könnte das Disputiren grossen Nuzzen schaffen, wenn es nicht ein certamen personarum wäre und wenn man nicht durch Streit sondern durch Einigung die Wahrheit aufsuchen wollte. Den Opponenten muß man beym Disputieren von dem statu controuersiae nicht abgleiten lassen. Denn sonst gerät h man in Nebensachen. Man kann den Opponenten durch Retorsion, Argumentation, Questioniren daß er sich erläutern solle und durch Distinctionen bald verwirrt machen. Der Opponent kann praeparirt seyn auf die möglichen Fragen und Antworten. In allen Disputationen ist die Sprache das wesentlichste; es scheint ein exercitium Scholasticum zu seyn. Die Hauptabsicht ist nur eine todte Sprache noch lebend zu erhalten. Die Alten nannten die Disputirkunst Dialecticam eristicam, die kämpfende Dialectik.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "philippi-s120-003",
     "kind": "text",
     "aa": 490,
     "text": "Der vierte Abschnitt.",
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s121",
   "title": "Von gelehrten Schriften. § 518",
   "titleSrc": "heading",
   "headings": [
    "Von gelehrten Schriften.",
    "§ 518"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s121-001",
     "kind": "heading",
     "aa": 490,
     "text": "Von gelehrten Schriften. § 518"
    },
    {
     "id": "philippi-s121-002",
     "kind": "text",
     "aa": 490,
     "text": "Alle gelehrte Schrifften sind entweder historische oder dogmatische. Eine Schrifft kann historisch seyn sowol der Materie nach wenn sie etwas wirklich geschehenes oder eine Kenntniß vom Indiuiduo ist, als auch der Form nach. Die Form heißt historisch die nicht rational ist : wo ich nicht durch allgemeine Erkenntniß der Gründe was herleite. Die Unterweisung z. E. der Kinder in der Religion ist historisch der Form nach ; sie ist subiectiv historisch, ob sie gleich obiectiv dogmatisch ist.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s121-003",
     "kind": "text",
     "aa": 491,
     "text": "Es ist ganz verkehrt dogmata historisch vorzutragen; denn sie können nur entspringen aus Verstand undVernunfft mithin müssen sie durch Verstand gefasset und rational erkannt werden.",
     "ocrConf": 40
    },
    {
     "id": "philippi-s121-004",
     "kind": "text",
     "aa": 491,
     "text": "Historische Erkenntniße sollen auf die sinnliche Erkenntnißkrafft, auf die Imagination und das Gedächtniß gepfropft werden. Historisch dogmatisch heißt eine Erkenntniß der Form nach, wenn die data dogmata sind aber historisch vorgetragen werden; der Materie nach aber, wenn einiges historisch anderes aber Dogmata sind.",
     "ocrConf": 48
    },
    {
     "id": "philippi-s121-005",
     "kind": "text",
     "aa": 491,
     "ms": [
      {
       "p": 178,
       "i": 346,
       "raw": "us",
       "inferred": true
      }
     ],
     "text": "Alles was da geschieht wird betrachtet in Verbindung mit Raum und Zeit. Wenn man das was da geschieht betrachtet, in sofern es zu verschiedener Zeit ist ; so heißt das Historie : sofern es zu gleicher Zeit i>t so gehörts ins Feld der Geographie. Es giebt verschiedene Arten sowol der Geographie als Historie. Man kann die Dinge der Welt insofern sie zu gleicher Zeit geschehen hervorzählen; dann gehört das zur natürlichen oder physischen Geographie. Man kann erzählen was zu verschiedenen Zeiten in der Natur sich zugetragen ; dann heißt dies Naturhistorie. Eine politische Geographie wäre die Wissenschafft, wo man die Verfassung des Staats, wie sie zu einer Zeit ist, betrachtet.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s121-006",
     "kind": "text",
     "aa": 491,
     "text": "Theologische Geographie wäre wo man die Religionen verschiedener zu einer Zeit lebenden Völker betrachtete. Alexander Ross hat eine solche Geographie geschrieben.",
     "ocrConf": 41
    },
    {
     "id": "philippi-s121-007",
     "kind": "text",
     "aa": 491,
     "text": "Eine moralische Geographie die die Sitten der Völker, wie sie jetzt sind oder zu alten Zeiten gewesen sind erwägt.",
     "ocrConf": 47
    },
    {
     "id": "philippi-s121-008",
     "kind": "text",
     "aa": 491,
     "text": "( '<< schichte d. i. Betrachtung der nach einander geschehenen Begebenheiten kann von der Geographie nicht getrennt werden; so wenig als diese von jener. Denn jede Begebenheit ist mit den Umständen des Orts und mit andern Dingen connectirt; und ich kann den jezigen Zustand nicht recht erkennen, wenn ich nicht die vorhergegangenen Veränderungen weiß.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "philippi-s121-009",
     "kind": "text",
     "aa": 491,
     "text": "Es giebt auch eine Geographie der Gelehrsamkeit, wenn ich zeige, auf welcher Stufe die Wissenschafften jetzt sind. Denn Geographie begreifft alles was in der Welt zugleich ist.",
     "ocrConf": 43
    },
    {
     "id": "philippi-s121-010",
     "kind": "text",
     "aa": 491,
     "text": "Wenn ich aber zeige, was die Gelehrsamkeit für fata gehabt, so gehört das in die Historie.",
     "ocrConf": 37
    }
   ]
  },
  {
   "id": "s122",
   "title": "§ 519",
   "titleSrc": "heading",
   "headings": [
    "§ 519"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s122-001",
     "kind": "heading",
     "aa": 491,
     "text": "§ 519"
    },
    {
     "id": "philippi-s122-002",
     "kind": "text",
     "aa": 491,
     "aaEnd": 492,
     "pages": [
      {
       "p": 492,
       "i": 198
      }
     ],
     "text": "Der Unterschied, welchen der Autor macht, indem er die Historie in die politische, Karchen- Gelehrten- und Privathistorie theilt, der wird von den verschiedenen Objecten der historischen Kenntnisse bestimmt. Es könnte auch eine Moralgeschichte seyn, welche die Art des gemeinen Lebens und auch unmoralische Dinge z. E. \"wie sie gegeßen enthielte, die gewiß sehr schön seyn dürfte. Der gelehrte Hume hat gefunden, daß bey den Römern schon 6 pro Cent die Interessen gewesen, und in Polen schon bis 10 pro Cent. Hamberger hat eine Geschichte von den Wissenschafften und Winkelmami eine Geschichte von der Skulptur und Bildhauerkunst geschrieben. Biographie ist das Leben eines einzigen Subjekts. Alle Geschichte von welcher Art sie auch seyn mag, soll den Zweck haben, die Vernunfft zu erweitern. Sie soll den Stof zum Vernunfftgebrauch dargeben.",
     "joined": [
      "layout"
     ],
     "ocrConf": 40
    },
    {
     "id": "philippi-s122-003",
     "kind": "text",
     "aa": 492,
     "ms": [
      {
       "p": 179,
       "i": 0,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "§ 520",
     "ocrConf": 17
    },
    {
     "id": "philippi-s122-004",
     "kind": "text",
     "aa": 492,
     "text": "Pragmatisch heißt die Geschichte die durch allgemeine Regeln nüzlich ist. Diese kann ein Verhältniß entweder auf die Spekulation oder auf die praktische Vernunfft haben. Wenn man blos die Namen der Regenten lernt und ihre Regierung weiß, so giebt dies zum Vernunfft gebrauch d. i. zur Speculation oder zu praktischen Regeln wenig Stoff. Indessen muß man im Anfange schon vom Vernunfftgebrauche abstrahiren und sich auf gute Hofnung mit vielen historischen Kenntnissen versehen. Newton hat doch blos daraus schon einen Schluß zu ziehen gewust, indem er gefunden, daß jeder Fürst im Durchschnitt 20 Jahre regiert.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "philippi-s122-005",
     "kind": "text",
     "aa": 492,
     "text": "Die gelehrte Geschichte wird pragmatisch wenn man blos die Gelehrsamkeit im Verhältniß auf die menschliche Vernunfft betrachtet, auf den Wachsthum oder auf die Ursachen wodurch sie ist zurückgehalten worden siehet. Man hat bemerket grosse Muster bringen die Wissenschafften eine Zeitlang zurück, denn alles ahmt dann nur dies Muster nach und keiner bestrebt sich Original zu werden. So ists mit dem Aristotel, Leibniz, Cartes und Newton geschehen.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "philippi-s122-006",
     "kind": "text",
     "aa": 492,
     "text": "Es sind 2 Methoden dogmatische Schrifften abzufassen entweder tumultuarisch oder methodisch ; die letztere Methode bringt ein System zu Stande. Ein System ist ein jedes Ganze. Die systematischen Schrifften unterscheiden sich von den tumultuarischen Schrifften dadurch daß jene ein zusammenhangendes Ganze ausmachen. Auszüge Epitomen sind würkliche Systeme. In dogmatischen Schrifften müssen die prineipia der Dogmatum vorgetragen, dann in concreto erwogen werden und hierauf muß man etwas historisches einstreuen um die Evidenz zu geben.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s123",
   "title": "§525",
   "titleSrc": "heading",
   "headings": [
    "§525"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s123-001",
     "kind": "heading",
     "aa": 493,
     "text": "§525"
    },
    {
     "id": "philippi-s123-002",
     "kind": "text",
     "aa": 493,
     "ms": [
      {
       "p": 180,
       "i": 396,
       "raw": "i»o",
       "inferred": true
      }
     ],
     "text": "Die Methode da man nicht aus den eignen Qvellen eine Erkenntniß schöpft, sondern aus denen nimmt die aus der Qvelle geschöpft haben, heißt compiliren. Die Geschichte ist compilirt wenn ich sie nicht aus den ersten Qvellen, sondern von spätem zusammengeschrieben. Man kann auch philosophische Säzze compiliren, da man das was andre durch Vernunft gedacht haben zusammenließt. Man beweist indessen doch Geschicklichkeit, wenn man aus den Autoren welche große Scharfsinnigkeit besizzen aus den gründlichsten Historien das wichtigste mit kluger Wahl zusammenträgt. Vom Compilator ist der Plagiarius unterschieden, der affectirt, daß er aus den ersten gelehrten Quellen selbst geschöpft, wenn er gleichwol nur ein Produkt von einem andern aufweist. Dies ist bey den Gelehrten das was den Bürgerlichen ein grober Diebstal ist.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s124",
   "title": "§ 526",
   "titleSrc": "heading",
   "headings": [
    "§ 526"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s124-001",
     "kind": "heading",
     "aa": 493,
     "text": "§ 526"
    },
    {
     "id": "philippi-s124-002",
     "kind": "text",
     "aa": 493,
     "text": "Die Franzosen sind sonderlich von dem Character, daß bey ihnen die Wissenschafften mehr extensiue als intensive wachsen. Zu den epitomis gehört viel Verstand um das wichtigste und faßlichste wählen zu können.",
     "dehyphenated": 1,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s125",
   "title": "Der vierte Haupttheil. Von dem Character eines Gelehrten.",
   "titleSrc": "heading",
   "headings": [
    "Der vierte Haupttheil.",
    "Von dem Character eines Gelehrten."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s125-001",
     "kind": "heading",
     "aa": 493,
     "text": "Der vierte Haupttheil. Von dem Character eines Gelehrten."
    },
    {
     "id": "philippi-s125-002",
     "kind": "text",
     "aa": 493,
     "text": "Der Character eines Gelehrten ist zwiefach, der Character des Kopfs und des Herzens; der erstere geht auf das Erkenntniß, der leztere auf die Neigung. Der Charakter des Herzens hat mit dem Charakter des Geistes grosse Verbindung, wenn die Gelehrsamkeit soll befördert werden. Die Beschaffenheit des Herzens hat einen grossen Einfluß auf die Direction des Verstandes und ist dieselbe daher auch bey blos spekulativen Wissenschafften nicht gleichgültig.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s126",
   "title": "§ 530",
   "titleSrc": "heading",
   "headings": [
    "§ 530"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s126-001",
     "kind": "heading",
     "aa": 493,
     "text": "§ 530"
    },
    {
     "id": "philippi-s126-002",
     "kind": "text",
     "aa": 493,
     "aaEnd": 494,
     "pages": [
      {
       "p": 494,
       "i": 187
      }
     ],
     "ms": [
      {
       "p": 181,
       "i": 559,
       "raw": "ist",
       "inferred": true
      }
     ],
     "text": "Der Charakter des Kopfs betrifft Verstand, Vernunfft und Geschmack. Das Vermögen der Nachahmung ist just entgegen dem Vermögen des Genies. Diejenigen, so Fähigkeiten des Genies besizzen. haben zuweilen gar nicht den Geist der Nachahmung; welche hingegen offt denen in grossem Grade eigen ist, die kein Genie zeigen. Die Rußen sollen den Fehler haben daß ihnen Genie mangelt und sie es eben daher nicht andre lehren können, daher stirbt die Wissenschaf f timmer bey ihnen aus. Zur Philosophie wird Genie erfordert, zu schönen Künsten gleichfalls, zu nüzlichen Wissenschafften aber der Geist der Nachahmung. Die Mathematik bedarf nur Nachahmung. Gelehrsamkeit und guter Geschmack sind von einander unterschieden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s127",
   "title": "§533",
   "titleSrc": "heading",
   "headings": [
    "§533"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s127-001",
     "kind": "heading",
     "aa": 494,
     "text": "§533"
    },
    {
     "id": "philippi-s127-002",
     "kind": "text",
     "aa": 494,
     "text": "Der Mutterwiz ist die natürliche Fähigkeit des gesunden Verstandes und der gesunden Vernunfft. Dieser läßt sich nicht erlernen, was hernach aber gelernt wird heißt Schul wiz.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "philippi-s127-003",
     "kind": "text",
     "aa": 494,
     "text": "Alle Belehrung sezt schon gewisse Erkenntniß oder wenigstens die Fähigkeit dazu voraus. So supponirt der Schul wiz den Mutterwiz. Es ist erträglicher des Schulwizzes zu mangeln als ihn ohne Mutterwiz zu haben; das erlernte ist daim am Menschen schön, er selbst absurd in der Anwendung. Daher kommt die Pedanterie und man wird durch Schulwizz noch ungereimter als sonst weil man mehr Materiahen hat. Der Schulwiz ist eine Vollendung des Mutterwizzes.",
     "ocrConf": 42
    },
    {
     "id": "philippi-s127-004",
     "kind": "text",
     "aa": 494,
     "text": "§ 540",
     "ocrConf": 17
    },
    {
     "id": "philippi-s127-005",
     "kind": "text",
     "aa": 494,
     "text": "Zu den besondern gelehrten Uebungen gehört",
     "ocrConf": 48
    },
    {
     "id": "philippi-s127-006",
     "kind": "text",
     "aa": 494,
     "text": "I. Das Lernen. Dieses geschieht durch mündlichen Vortrag oder durch Lesen der Bücher. Man lernt indem man entweder neue Erkenntnisse hervorbringt oder gehabte Erkenntnisse reproducirt. Lehren heißt eigentlich Erkenntnisse hervorbringen lassen durch andre. Der Lernende ist in dem Stück passiv, er muß aber auch activ seyn, er muß Receptiuitaet d. i. Verstandesfähigkeit haben und sie auch anwenden.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "philippi-s127-007",
     "kind": "text",
     "aa": 494,
     "text": "Der mündliche Vortrag hat einen grossen Vorzug vor dem schriftlichen, denn der mündliche ist nicht so künstlich als der schrifftliche. Er ist auch faßlicher denn es ist eine Handlung des Gemüths weniger als beym Lesen. Bey dem Lesen muß ich auch in Gedanken hören.",
     "dehyphenated": 1,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s128",
   "title": "§541",
   "titleSrc": "heading",
   "headings": [
    "§541"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s128-001",
     "kind": "heading",
     "aa": 494,
     "text": "§541"
    },
    {
     "id": "philippi-s128-002",
     "kind": "text",
     "aa": 494,
     "text": "IL Das Lesen gelehrter Schriften.",
     "ocrConf": 45
    },
    {
     "id": "philippi-s128-003",
     "kind": "text",
     "aa": 494,
     "aaEnd": 495,
     "pages": [
      {
       "p": 495,
       "i": 129
      }
     ],
     "ms": [
      {
       "p": 182,
       "i": 638
      }
     ],
     "text": "Es kommt zuerst sehr auf die Ordnung an, wie man ließt und auf die Wahl der Schrifften wo man anfängt. Es fragt sich : Sollen Compendia oder große Werke zuerst gelesen werden ? Von den Compendiis die viel Gedanken in wenig Raum enthalten soll man nicht anfangen, sondern von denen die wenig Gedanken in einem weiten Raum enthalten. In der Historie und Mathematik muß man erst das allgemeine sich bekannt machen. Man muß erst synthetisch verfahren; dann ist man im Stande nachher auch analytisch zu verfahren. Historische Bücher welche man sich zum Lesen wählet müssen zuerst nicht so sehr die genaue Begebenheiten sondern die allgemeinen betreffen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "philippi-s128-004",
     "kind": "text",
     "aa": 495,
     "text": "Man muß nach einer gewissen Ordnung gehen und des Morgens und Abends Bücher der Speculation, des Mittags historische Bücher lesen. Man muß viel lesen und das Gelesene so zu sagen verdauen und das Feld muß nicht sehr offt geändert werden. Ein jedes Buch muß man wenigstens zweimal lesen einmal geschwinde wo man die Stellen die einer Erläuterung bedürfen sich marquirt. Einige Bücher sind von grosser Wichtigkeit und erfordern viel Nachdenken; die muß man offt lesen e. g. Hume, Rousseau, Locke der als eine Grammatik für den Verstand kann angesehen werden und Montesquieu von dem Geist der Gesezze.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s129",
   "title": "§544",
   "titleSrc": "heading",
   "headings": [
    "§544"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s129-001",
     "kind": "heading",
     "aa": 495,
     "text": "§544"
    },
    {
     "id": "philippi-s129-002",
     "kind": "text",
     "aa": 495,
     "text": "Die gar zu öfftere Wiederholung ist eben so schädlich als die gar zu lange Aussezzung.",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s130",
   "title": "§546",
   "titleSrc": "heading",
   "headings": [
    "§546"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s130-001",
     "kind": "heading",
     "aa": 495,
     "text": "§546"
    },
    {
     "id": "philippi-s130-002",
     "kind": "text",
     "aa": 495,
     "text": "Nachahmung in Sachen des Styls ist nicht rathsam.",
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s131",
   "title": "§548",
   "titleSrc": "heading",
   "headings": [
    "§548"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s131-001",
     "kind": "heading",
     "aa": 495,
     "text": "§548"
    },
    {
     "id": "philippi-s131-002",
     "kind": "text",
     "aa": 495,
     "text": "Von der Erfindung neuer Wahrheiten ist keine Regel zu geben.",
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s132",
   "title": "§549",
   "titleSrc": "heading",
   "headings": [
    "§549"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s132-001",
     "kind": "heading",
     "aa": 495,
     "text": "§549"
    },
    {
     "id": "philippi-s132-002",
     "kind": "text",
     "aa": 495,
     "text": "Ein Avtodidaktus ist derjenige, so sich durch Meditiren und Lesen selbst gelehrt macht. Es ist dieses immer ein groß Genie. Ein mündlicher Vortrag ist indessen immer vorzuziehen. Man kann mehr Reflexiones machen.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s133",
   "title": "§553",
   "titleSrc": "heading",
   "headings": [
    "§553"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s133-001",
     "kind": "heading",
     "aa": 495,
     "text": "§553"
    },
    {
     "id": "philippi-s133-002",
     "kind": "text",
     "aa": 495,
     "aaEnd": 496,
     "pages": [
      {
       "p": 496,
       "i": 127
      }
     ],
     "ms": [
      {
       "p": 183,
       "i": 766
      }
     ],
     "text": "Der gelehrte Fleiß bedeutet die Stärke der Anstrengung die man anwendet Mas zu lernen. Der Mensch ist von Natur träge, und die Faulheit ist selbst der Endzweck seines Fleisses. Die künfftige Ruhe ist der Sporn der die Menschen in Activität sezt. Die Grösse und Würdigkeit der Gegenstände kann doch den Fleiß sehr excitiren. Der gelehrte Fleiß, wenn er continuirt, heißt ein stetiger Fleiß. Von diesem ist verschieden der vehemente Fleiß, der in einer gar zu starken Anstrengung besteht die aber nur kurze Zeit dauret. Das Gemüth leidet bey dem vehementen Fleiß ; es erlöschen bald die Vorstellungen, denn es will nicht gezwungen werden. Die Variation der Objekte stöhrt sehr den Fleiß. Wenn man durch Neuigkeit nur wozu gelocket werden muß ; so ist das eine Anzeige einer lauen und nachgelassenen Emsigkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s134",
   "title": "§554",
   "titleSrc": "heading",
   "headings": [
    "§554"
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s134-001",
     "kind": "heading",
     "aa": 496,
     "text": "§554"
    },
    {
     "id": "philippi-s134-002",
     "kind": "text",
     "aa": 496,
     "text": "Ein Studirender muß erst den Zweck und den Umfang seiner Kräffte wol erwägen. Es ist schlimm, daß andre uns den Zweck vorschreiben und daß man sie selbst noch nicht kennt wenn man zu studiren anfängt. Niemals muß man mit vehementem Fleiß studiren, aber niemals muß man zu lernen aufhören. Man weiß erst zu beurtheilen was man zu lernen habe, wenn man dem Ende nahe ist. Daher sich auch jener Philosoph beklagte, daß man dann erst lerne zu leben wemi man diese Welt verlassen müsse. Es gehört auch zum Charakter des Gelehrten, daß er eine Person ohne Titel, Stand und bürgerlichen Rang sey hauptsächlich daß er ein Mann von allen Ständen sey und daß seine Erkenntniß allgemein brauchbar sey und sich nicht blos für die Form der Schule schicke. Zu dem Ende muß er mit Menschen umgehen. Nur ist zu bedauren, daß die gewöhnlichen Gespräche nichts als seichte Sachen zum Zweck haben und daß es in unsern Oertern fast pedantisch istt, wenn man in ein Gespräch Wissenschafft einfliessen läßt und die Erweiterung derselben zum Zweck hat. Die Franzosen und Engländer haben in diesem Stück einen grossen Vorzug vor den Deutschen, daß sie in Gelehrsamkeit ihre Würde suchen. Der lezte Zweck der Gelehrsamkeit soll sejm dem menschlichen Geschlecht die wahre Form zu geben, es von Vorurtheilen zu befreien, die Sitten zu verfeinern und die Seelenkräffte zu erhöhen. Dann ists eine Wolthat für das menschliche Geschlecht; wenn sie aber blos zur Operation gebraucht wird, so ist sie nur als eine Art des Luxus anzusehen.",
     "dehyphenated": 4,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s135",
   "title": "Ende der Logik.",
   "titleSrc": "heading",
   "headings": [
    "Ende der Logik."
   ],
   "provenance": "III Logik Philippi Vorlesungen des Herrn Profeßoris Kant über die Logic. Philippi Koenigsberg im May 1772",
   "blocks": [
    {
     "id": "philippi-s135-001",
     "kind": "heading",
     "aa": 496,
     "text": "Ende der Logik."
    }
   ]
  }
 ]
};
