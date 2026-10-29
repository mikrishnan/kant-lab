/* ─────────────────────────────────────────────────────────────────────────────
   Logik Dohna-Wundlacken, Academy Edition XXIV (1792) — AA 24:687–784
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes242imma) by
   Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA 24:P
   is https://archive.org/details/kantsgesammeltes242imma/page/n<P-487>/mode/1up

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

const LOGIK_DOHNA = {
 "meta": {
  "work": "Logik Dohna-Wundlacken",
  "label": "VI. Logik Dohna-Wundlacken",
  "volume": 24,
  "date": "1792",
  "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
  "source": "OCR of the printed AA XXIV (Internet Archive item kantsgesammeltes242imma), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   687,
   784
  ],
  "scan": {
   "item": "kantsgesammeltes242imma",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + -487",
   "note": "page image of AA 24:P is SCAN_URL with n = P + (-487)"
  },
  "counts": {
   "sections": 24,
   "blocks": 798,
   "pages": 92,
   "words": 30581,
   "joinedLayout": 55,
   "dehyphenated": 530,
   "meanOcrConf": 44
  },
  "edition": "AA XXIV reprints this transcript from Kowalewski's edition (1924), not from the manuscript",
  "contentsRefer": "AA XXIV pages — the volume's Inhaltsverzeichnis to this transcript",
  "editorialNote": [
   "Zeichenerklärung",
   "Unleserliche Stellen sind durch Konjektur geheilt und regelmäßig",
   "durch f bezeichnet, solche Stellen, bei denen mir keine annehmbare",
   "Konjektur einfiel, durch ... f. Alle Zusätze zwischen den Zeilen und",
   "am Rande sowie die Anhangsnotizen habe ich dem Haupttext einver-",
   "leibt; doch sind die verschiedenartigen Zusätze durch besondere",
   "Zeichen kenntlich gemacht: die über die Zeilen geschriebenen durch <( ),",
   "die Randnotizen durch [], die Anhangsnotizen durch |[]|. Wo ich",
   "eigene Einschaltungen machen mußte, um kleine Lücken der Hand-",
   "schriften zu schließen, habe ich | | gebraucht. Hierdurch hoffe ich den",
   "Lesern in weitgehendem Umfange die Struktur der Originalhefte ver-",
   "schaulichen zu können.",
   "A. Kowalewski, Die philosophischen",
   "Hauptvorlesungen Immanuel Kants",
   "1924, S. 52."
  ]
 },
 "front": [
  "VI",
  "Logik Dohna-Wundlacken",
  "nach der Ausgabe von Kowalewski",
  "Logik",
  "nach",
  "den Vorlesungen des Herrn Prof. Kant",
  "im Sommerhalbenjahre 1792",
  "Den 23ten April 1792"
 ],
 "contents": [
  {
   "label": "Prolegomcna",
   "pages": "693"
  },
  {
   "label": "Tractatio ipsa",
   "pages": "700"
  },
  {
   "label": "Elementarlehre",
   "pages": "701-779"
  },
  {
   "label": "Bewusstsein der Vorstellung oder Apperzeption",
   "pages": "702"
  },
  {
   "label": "Schöne Erkenntnis",
   "pages": "705"
  },
  {
   "label": "Vollkommenheiten der Erkenntnis",
   "pages": "709"
  },
  {
   "label": "Weitläufigkeit der gelehrten Erkenntnis",
   "pages": "711"
  },
  {
   "label": "Pedanterie",
   "pages": "716"
  },
  {
   "label": "Größe der gelehrten Erkenntnis",
   "pages": "717"
  },
  {
   "label": "Fruchtbarkeit und Wichtigkeit einer Erkenntnis",
   "pages": "717"
  },
  {
   "label": "Wahrheit der gelehrten Erkenntnis",
   "pages": "718"
  },
  {
   "label": "Klarheit der Erkenntnis",
   "pages": "725"
  },
  {
   "label": "Dunkle Vorstellungen",
   "pages": "729"
  },
  {
   "label": "Begreifliches und Unbegreifliches",
   "pages": "730"
  },
  {
   "label": "Gewißheit der Erkenntnis",
   "pages": "731"
  },
  {
   "label": "Vorurteile",
   "pages": "737"
  },
  {
   "label": "Logische Egoisterei",
   "pages": "740"
  },
  {
   "label": "Wahrscheinliches",
   "pages": "742"
  },
  {
   "label": "Überredung und Überzeugung",
   "pages": "747"
  },
  {
   "label": "Beweise",
   "pages": "74g"
  },
  {
   "label": "Quellen unserer Erkenntnis",
   "pages": "749"
  },
  {
   "label": "Praktische Erkenntnis",
   "pages": "751"
  },
  {
   "label": "Begriffe",
   "pages": "752"
  },
  {
   "label": "Definitionen",
   "pages": "756"
  },
  {
   "label": "Regeln der Definitionen",
   "pages": "759"
  },
  {
   "label": "Einteilung der Begriffe",
   "pages": "760"
  },
  {
   "label": "Urteile",
   "pages": "762"
  },
  {
   "label": "Kategorische Urteile",
   "pages": "764"
  },
  {
   "label": "Bedingung unbedingter Urteile",
   "pages": "764"
  },
  {
   "label": "Unmittelbare Schlüsse",
   "pages": "769"
  },
  {
   "label": "Vernunftschlüsse",
   "pages": "772"
  },
  {
   "label": "Kategorische Vernunftschlüsse",
   "pages": "773"
  },
  {
   "label": "Hypothetische Vernunftschlüsse",
   "pages": "776"
  },
  {
   "label": "Dilemma",
   "pages": "776"
  },
  {
   "label": "Schluß aus Induktion und Analogie",
   "pages": "777"
  },
  {
   "label": "Sophismen",
   "pages": "777"
  },
  {
   "label": "Sorites",
   "pages": "778"
  },
  {
   "label": "Beweisfehler",
   "pages": "77g"
  },
  {
   "label": "T°pik",
   "pages": "77g"
  },
  {
   "label": "Methodenlehre",
   "pages": "779-783"
  },
  {
   "label": "Einteilung der Methoden",
   "pages": "779"
  },
  {
   "label": "Meditieren",
   "pages": "780"
  },
  {
   "label": "Arten von Vortrag",
   "pages": "782"
  },
  {
   "label": "Einteilung der Argumentationen",
   "pages": "782"
  },
  {
   "label": "Charakter des Gelehrten",
   "pages": "783"
  },
  {
   "label": "Noch einiges über das Meditieren",
   "pages": "783"
  }
 ],
 "sections": [
  {
   "id": "s02",
   "title": "[Erste Stunde, den 23ten April, v. 7 — 8]",
   "titleSrc": "heading",
   "headings": [
    "[Erste Stunde, den 23ten April, v. 7 — 8]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s02-001",
     "kind": "heading",
     "aa": 693,
     "text": "[Erste Stunde, den 23ten April, v. 7 — 8]"
    },
    {
     "id": "dohna-s02-002",
     "kind": "text",
     "aa": 693,
     "ms": [
      {
       "p": 1,
       "i": 0,
       "raw": "i",
       "inferred": true
      }
     ],
     "text": "Prolegomena",
     "ocrConf": 32
    },
    {
     "id": "dohna-s02-003",
     "kind": "text",
     "aa": 693,
     "text": "[Alle Dinge zAvischen Himmel und Erde geschehen und handeln nach Regeln, z. E. Körper nach den Gesetzen der Schwere.]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s02-004",
     "kind": "text",
     "aa": 693,
     "text": "Man muß über sein Denken nachdenken, d. h. es nach Regeln tun. Jede Sprache ist an gewisse besondre Regeln gebunden. Dies findet nun vorzüglich bei toten Sprachen statt, wo man die Regem eigentlich bezeichnen kann. Man kann aber auch die Regeln gebrauchen, ohne sie eigentlich namhaft zu machen. Diese Regeln lernt [exercitat] man durch Versuche nach und nach. Die ersten sind fehlerhaft, endlich gelangt man zur Fertigkeit. Unter den Regeln des Denkens gibt es allgemeine, die ohne Unterschied auf besondere Gegenstände gehen. So gibt es auch allgemeine Sprachregeln. Eine solche Grammatik enthält nicht Wörter, nicht copia vocabularum, sondern nur die Form der Sprache. Wir werden uns vorstellen können eine allgemeine Lehre (des Denkens). Diese allgemeine Lehre des Denkens heißt Logik, Verstandeslehre. Sie ist Vorbereitung über Gegenstände zu denken.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s02-005",
     "kind": "text",
     "aa": 693,
     "text": "Der Verstand ist das Vermögen zu denken {etwas zu verstehen), der Regeln, Urteilskraft das Vermögen zu subsumieren, Vernunft zu schließen (etwas einzusehen), was dahin gehört. Eine Regel ist ein Begriff, worunter vieles, eine Mannigfaltigkeit von Vorstellungen enthalten ist.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s02-006",
     "kind": "text",
     "aa": 693,
     "text": "Wir können unterscheiden :",
     "ocrConf": 40
    },
    {
     "id": "dohna-s02-007",
     "kind": "text",
     "aa": 693,
     "text": "1. die notwendigen [necess.] allgemeinen Regeln des Denkens, ohne Unterschied worauf es geht. Wären sie nicht allgemein, so wären sie nicht notwendig.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s02-008",
     "kind": "text",
     "aa": 693,
     "text": "[2. die zufälligen.]",
     "ocrConf": 50
    },
    {
     "id": "dohna-s02-009",
     "kind": "text",
     "aa": 693,
     "text": "Diese Regeln betreffen nur die Form aller Regeln des Denkens.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s02-010",
     "kind": "text",
     "aa": 693,
     "text": "[Z. B. Sind die Menschen sterblich, so sind sie auch (einmal) wohl t gewesen. Ist der eine Satz wahr, so ist's der andere auch. Solch ein Urteil, ein hypothetisches, bedingtes Urteil.]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s02-011",
     "kind": "text",
     "aa": 693,
     "text": "Der Inhalt einer Erkenntnis ist das Objekt oder die Materie und wird von der Form unterschieden. Eine allgemeine Logik muß von allen Objekten des Denkens abstrahieren.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s02-012",
     "kind": "text",
     "aa": 693,
     "aaEnd": 694,
     "pages": [
      {
       "p": 694,
       "i": 260
      }
     ],
     "ms": [
      {
       "p": 2,
       "i": 0,
       "raw": "*",
       "inferred": true
      }
     ],
     "text": "Die notwendigen allgemeinen Regeln des Denkens müssen ferner a priori, nicht aus Erfahrung abgeleitet sein. Empirisch heißt alles, was aus Erfahrung kommt (ex cognitione oriuntur) und wird dem (transcendentalen) Erkenntnisse a priori entgegengesetzt. Man gibt zwar dem letztern empirische Kenntnis zu Hilfe. Es ist aber niemals gut, sondern immer besser, wenn man alles aus der Vernunft erkennt.",
     "joined": [
      "layout"
     ],
     "ocrConf": 47
    },
    {
     "id": "dohna-s02-013",
     "kind": "text",
     "aa": 694,
     "text": "Die logischen Regeln sind nicht solche, wonach wir denken, sondern wonach wir denken sollen. [Logik enthält gar keine Materie, nur Form des Denkens.] Die Logik muß Prinzipien a priori enthalten. [Daher ist Logik eine Wissenschaft, und Grammatik nicht, weil ihre Regeln zufällig sind.] Mithin ist jede Logik, worin Regeln aus der Erfahrung vorkommen, nicht mehr rein. [Die Regeln über das sinnlich Vollkommene enthält die Ästhetik.]",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s02-014",
     "kind": "text",
     "aa": 694,
     "text": "Universell ist das, was der Vernunft nach allgemein ist, empirisch allgemein nur insofern, als es in der Erfahrung immer so ist. Paedeutica (Kinderzucht) [TrouSsuTiKri]. Übungslehre ist nicht mehr reine Logik, sondern nur die feinere Ausübung, Anwendung derselben. [Der deutliche Begriff ist der, dessen Merkmale ich mir bewußt bin. Ohne diese allgemeinen Regeln (wenn man sich ihrer auch nicht bewußt ist) ist das Denken überhaupt nicht möglich — daher ist Logik Propädeutik aller Wissenschaften, der oberste Probierstein, daß etwas den Verstandesgesetzen gemäß sei.] Alle psychologischen Bemerkungen müssen aus der (reinen) Logik ausgeschlossen werden. Alle logisch überhaupt erweislichen Regeln sind doch noch immer eines Grundes bedürftig, wovon sie abgeleitet sind. Viele Sätze (z. B. der des Widerspruchs) lassen sich gar nicht weder a priori noch empirisch beweisen.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "dohna-s02-015",
     "kind": "text",
     "aa": 694,
     "text": "[Gibt es eine natürliche Logik ? Logica est scientia. Omnis scientia vero est artificialis. Ergo — ]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s02-016",
     "kind": "text",
     "aa": 694,
     "text": "Einen Beweis, der völlig a priori gemacht ist [zugleich intuitiv mit Einsehn der Notwendigkeit], nennt man Demonstration. Was nun keiner Demonstration fähig <(dignum) ist, ist empirisch.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s02-017",
     "kind": "text",
     "aa": 694,
     "text": "Wir können diese Wissenschaft betrachten, ob sie Doktrin oder Kritik [ — geht auf Gebrauch — ] oder beides zusammen sei.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s02-018",
     "kind": "text",
     "aa": 694,
     "text": "[Die Logik als Doktrin kann heißen ein Kanon des Verstandes und der Vernunft. Ein Kanon ist demonstrierte Kritik (im Griechischen zeigt es an: Regel).]",
     "ocrConf": 49
    },
    {
     "id": "dohna-s02-019",
     "kind": "text",
     "aa": 694,
     "ms": [
      {
       "p": 3,
       "i": 27,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Logik ist Doktrin, sie gibt «(praebet) Regeln an die Hand, sie ist demonstrierte Theorie.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s02-020",
     "kind": "text",
     "aa": 694,
     "aaEnd": 695,
     "pages": [
      {
       "p": 695,
       "i": 334
      }
     ],
     "text": "Doktrin [ist ein Inbegriff von Regeln, wo die Regeln dem Produkte vorhergehen müssen (Kritik ist der Gebrauch der Urteilskraft, wo das Produkt der Regel vorhergeht)] enthält den Grund der Beurteilung, ob etwas wahr oder falsch sei. Sie kann zwiefachen Gebrauch haben, einmal nur als Kritik, das andere als Organon. Das erstemal z. B. Geschmackslehre, nur Kritik [dient etwas z. B. ein Gedicht zu beurteilen], lehrt uns nicht, selber etwas geschmackvoll machen. [Kritik erfordert, daß das Produkt schon da sei, wenn auch die technischen Regeln schon vorher gegeben werden können.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s02-021",
     "kind": "text",
     "aa": 695,
     "text": "Die Mathematik ist Doktrin, aber zugleich Organon [wodurch ein Erkenntnis dem Inhalte nach möglich wird] von großem Umfange, nänilich z. B. Arithmetik. Ist Logik auch Organon ? Nein, sie dient nur zur Kritik, so wie die Grammatik (die mit der Logik viel ähnliches hat), woraus man eigentlich die Sprache nicht lernen kann, es gehört dazu auch Reichtum an Worten.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s02-022",
     "kind": "text",
     "aa": 695,
     "text": "Doktrin ist demonstrierte Disziplin [Institution, Prinzip der Hervorbringung]. Logik reicht nicht zum Organon, sie hat nicht Objekte. Wenn aber gleichwohl eine Logik zum Organon gemißbraucht wird, nennt man sie Dialektik. [Die Kunst bei jedem Objekt pro et contra zu sprechen. Un vorsätzlich kann die Vernunft sich selbst betrügen, wenn sie die Gesetze der Logik übertritt.] Soll sie aber bloß zur Beurteilung dienen, so heißt sie Analytik oder Logik der Wahrheit. Dagegen Dialektik nur Logik des Scheins.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s02-023",
     "kind": "text",
     "aa": 695,
     "text": "[Der Gebrauch der Logik ist analytisch, wenn sie nur zum Kanon, dialektisch, wenn sie auch zum Organon gebraucht wird, dann ist sie Logik des Scheins und täuscht uns. Logik als Kanon heißt Analytik (Logik der Wahrheit). Zeno von Elea, ein großer Dialektiker.]",
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s03",
   "title": "[2te Stunde]",
   "titleSrc": "heading",
   "headings": [
    "[2te Stunde]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s03-001",
     "kind": "heading",
     "aa": 695,
     "text": "[2te Stunde]"
    },
    {
     "id": "dohna-s03-002",
     "kind": "text",
     "aa": 695,
     "text": "Das Denken heißt sich etwas im Begriff vorstellen. Die Logik kann heißen Vernunftlehre, nicht allein vernünftige Lehre [Vernunftwissenschaft nicht der Materie nach, weil ihr Objekt allein die menschliche Vernunft ist. Mathematik, Physik, Moral sind zwar auch Vernunftwissenschaften, aber nur der Form, nicht der Materie nach.] Logik beschäftigt sich nur mit den formalen Regeln des Denkens. [Das Objekt ist die Materie, das Subjekt die Form.]",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "dohna-s03-003",
     "kind": "text",
     "aa": 695,
     "ms": [
      {
       "p": 4,
       "i": 112
      }
     ],
     "text": "Kann die Unterweisung in schönen Künsten Doktrin sein ? Die Regeln derselben können nur zur Beurteilung dienen. Ästhetik erlaubt keine Doktrin, nur eine Kritik. Wissenschaften aber erlauben Doktrin. Zum Probierstein der Richtigkeit des Geschmacksurteils hat die schöne Kunst keine Regeln, die Doktrin aber hat Regeln.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s03-004",
     "kind": "text",
     "aa": 695,
     "aaEnd": 696,
     "pages": [
      {
       "p": 696,
       "i": 132
      }
     ],
     "text": "Unter Barbarei versteht man nicht nur das Einreißen gänzlicher Unwissenheit, sondern auch vorzüglich die Verderbnis des Geschmacks. Diese hätten wir zu befürchten, wenn wir nicht noch aus dem Altertum so herrliche Muster hätten. [Nämlich Dichter, schöne Geister, z. B. Horaz usw. Geschmack ist nur durch Beispiele, nicht durch Regeln zu bilden und zu erhalten. Anmerkung: Polyklet, ein berühmter Bildhauer des Altertums, machte eine Bildsäule, die man nachher immer zum Muster gebrauchte. Archetypon, Urbild, liegt in eines jeden Kopfe, was sich ihm nähern muß.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s03-005",
     "kind": "text",
     "aa": 696,
     "text": "Die schöne Kunst also bedarf Muster (exemplar), nicht so die Wissenschaft, sie bedarf der Regeln. Eine Doktrin, insofern sie demonstriert werden kann, heißt Kanon. Die Logik ist Kanon, nicht allein Kritik, sie ist auch nur Mittel der Beurteilung. [Kanon ist ein unverletzbares Gesetz. Also würde es bei dem Geschmack nicht angebracht werden können, wo alles auf Gewohnheit und Wohlgefallen anderer ankommt.]",
     "dehyphenated": 3,
     "ocrConf": 50
    },
    {
     "id": "dohna-s03-006",
     "kind": "text",
     "aa": 696,
     "text": "Ist Logik als Kanon auch Mittel zur Erwerbung der Wissenschaft ? Nein. Die Logik abstrahiert von allem Inhalt, also auch von allem Erkenntnis, [sie macht nur, daß unser Denken richtig sei] und sie ist kein Organon. Aber Mathematik ist nicht allein Kanon, sondern auch ein herrliches Organon. [Ja, gewiß das größte, denn sie beschäftigt sich mit Materie, mit Ausmessung der Zeit und des Raums.] Auch zur Naturwissenschaft gehört Mathematik.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s03-007",
     "kind": "text",
     "aa": 696,
     "text": "Logik wird nun eingetheilt :",
     "ocrConf": 60
    },
    {
     "id": "dohna-s03-008",
     "kind": "text",
     "aa": 696,
     "text": "1 . in die Logica naturalis (natürliche) und (nur ein Complement),",
     "ocrConf": 40
    },
    {
     "id": "dohna-s03-009",
     "kind": "text",
     "aa": 696,
     "text": "2. in die Logica artificialis (künstliche). Dies ist die Logik, die wirklich explicite, nicht implicite Gebrauch unsers Verstandes ist. [Im Grunde gibt es nur eine künstliche, denn natürliche Logik gibt's im Grunde nicht — natürliche Grammatik.]",
     "ocrConf": 48
    },
    {
     "id": "dohna-s03-010",
     "kind": "text",
     "aa": 696,
     "ms": [
      {
       "p": 5,
       "i": 0
      }
     ],
     "text": "Sie wird vorgetragen 1. scientifisch, wie eine Wissenschaft immer vorgetragen wird, 2. scholastisch-populär, schulgerecht, angemessen dem subjektiven Grund des Erkenntnisvermögens eines jeden. [Die Popularität geht von der Vollkommenheit ab.] Alle Wissenschaft muß schulgerecht vorgetragen werden. Dies ist eine Konsequenz von der Vollkommenheit .",
     "ocrConf": 50
    },
    {
     "id": "dohna-s03-011",
     "kind": "text",
     "aa": 696,
     "text": "Nun können wir die Logik einteilen :",
     "ocrConf": 53
    },
    {
     "id": "dohna-s03-012",
     "kind": "text",
     "aa": 696,
     "text": "1. in die Logik des gesunden Verstandes, sensus communis,",
     "ocrConf": 42
    },
    {
     "id": "dohna-s03-013",
     "kind": "text",
     "aa": 696,
     "text": "2. in die Logik des spekulativen Verstandes, gibt Regeln in abstracto.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s03-014",
     "kind": "text",
     "aa": 696,
     "aaEnd": 697,
     "pages": [
      {
       "p": 697,
       "i": 131
      }
     ],
     "text": "Der gemeine Verstand ist das Vermögen nach Regeln in concreto urteilen zu können. [Nicht der schlichte. Dies Wort ist absurd.] Der gemeine Verstand heißt der gesunde, wenn er richtig ist. Die Moral muß ganz in concreto erkannt werden, aber Physik hat auch abstracta.",
     "joined": [
      "layout"
     ],
     "ocrConf": 45
    },
    {
     "id": "dohna-s03-015",
     "kind": "text",
     "aa": 697,
     "text": "Eine Logik soll in abstracto vorgetragen werden. Sie ist Propädeutik [Vorübung zu Wissenschaften] aller Wissenschaften, was ihren Inhalt anbetrifft, z. B. in Ansehung der Physik und Moral.",
     "dehyphenated": 1,
     "ocrConf": 40
    }
   ]
  },
  {
   "id": "s04",
   "title": "[3te Stunde, d. 26ten April 1792]",
   "titleSrc": "heading",
   "headings": [
    "[3te Stunde, d. 26ten April 1792]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s04-001",
     "kind": "heading",
     "aa": 697,
     "text": "[3te Stunde, d. 26ten April 1792]"
    },
    {
     "id": "dohna-s04-002",
     "kind": "text",
     "aa": 697,
     "text": "Kann sie auch als Propädeutik der Philosophie (angesehn) sein ? Nein. Denn sie ist selbst ein Teil der Philosophie [und zwar der, von dem wir anfangen sollen], wie wir bald hören werden.",
     "ocrConf": 39
    },
    {
     "id": "dohna-s04-003",
     "kind": "text",
     "aa": 697,
     "text": "Alles unser Erkenntnis ist entweder (nach seiner Erwerbungsart)",
     "ocrConf": 44
    },
    {
     "id": "dohna-s04-004",
     "kind": "text",
     "aa": 697,
     "text": "1. rational, insofern es a priori aus der Vernunft abgeleitet ist (z. B. reine Mathematik, Metaphysik),",
     "ocrConf": 46
    },
    {
     "id": "dohna-s04-005",
     "kind": "text",
     "aa": 697,
     "text": "2. historisch, als solches ist es:",
     "ocrConf": 39
    },
    {
     "id": "dohna-s04-006",
     "kind": "text",
     "aa": 697,
     "text": "a) subjektiv historisch, wenn das Erkenntnis im Subjekt auf empirischen Gründen beruht;",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s04-007",
     "kind": "text",
     "aa": 697,
     "ms": [
      {
       "p": 6,
       "i": 693,
       "approx": true
      }
     ],
     "text": "b) objektivisch historisch, wenn der Erkenntnisgrund nie anders als historisch sein kann. Erkenntnisse, die <( objektiv) rational sind, können doch subjektivisch historisch sein. [Die Logik selbst ist System. Die ihr gemäßen Erkenntnisse sind teils systematisch , teils fragmentarisch .— Dem methodischen Erkenntnis ist das tumultuarische entgegengesetzt.] Es kann in der Mathematik ein subjektiv historisches Erkenntnis geben, wenn es auch gewiß objektiv rational ist, welches vorzüglich bei der Feldmeßkunst stattfindet. Auch leider bei der natürlichen Religion [welche viele nur bloß aus dem faulen Zutrauen zur Vernunft anderer glauben, um sich nicht den Kopf zu zerbrechen. Vergessen sie dann die Wörter, so ist die Sache auch vergessen.]",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "dohna-s04-008",
     "kind": "text",
     "aa": 697,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "[Was ist Philosophie ?] Alle Vernunfterkenntnis ist entweder 1. eine durch Begriffe, 2. eine durch Konstruktion der Begriffe. Letzteres nennt man einen Begriff darstellen, exhibere. Dies ist nur insofern Vernunfterkenntnis, als die Begriffe {in der Anschauung) a priori miteinander korrespondieren. Eine Vernunfterkenntnis durch Begriffe heißt philosophisch. Also ein System durch Begriffe ist Philosophie.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s04-009",
     "kind": "text",
     "aa": 697,
     "text": "[Einen Begriff konstruieren heißt ihni eine korrespondierende Anschauung a priori geben.] Ein Vernunfterkenntnis durch Konstruktion der Begriffe heißt mathematisch. Also ein System Mathematik.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s04-010",
     "kind": "text",
     "aa": 697,
     "aaEnd": 698,
     "pages": [
      {
       "p": 698,
       "i": 120
      }
     ],
     "text": "Ein System muß allemal durchdacht, eine Mannigfaltigkeit im Zusammenhange, eine Verbindung der Erkenntnisse aus einem gemeinschaftlichen Prinzip [sein]. Daher können wir viel Geographie lernen, aber nicht im System, nur als Aggregat. Der Philosoph kann wie [ein] Vernunftkünstler und Weisheitslehrer betrachtet werden. Philosophie <lm praktischen Sinn) ist die Wissenschaft von den letzten Zwecken der menschlichen Vernunft. Die Philosophie als Vernunftkunst nennt man spekulativ, als Weisheitslehre praktisch. Die Alten nannten Philosophie immer Weisheitslehre.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s05",
   "title": "[4te Stunde, d. 27ten]",
   "titleSrc": "heading",
   "headings": [
    "[4te Stunde, d. 27ten]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s05-001",
     "kind": "heading",
     "aa": 698,
     "text": "[4te Stunde, d. 27ten]"
    },
    {
     "id": "dohna-s05-002",
     "kind": "text",
     "aa": 698,
     "ms": [
      {
       "p": null,
       "i": 723,
       "raw": "1",
       "unresolved": true
      }
     ],
     "text": "Man kann einen Unterschied machen zwischen den zwei Ausdrücken Philosophie lernen und philosophieren lernen. Lernen heißt die Urteile andrer nachahmen, ist also vom eignen Nachdenken sehr unterschieden. [Nicht Philosophie lernen — sondern philosophieren lernen, sonst bleibts nur Nachahmung — aber selbst dazu gelangen durch Übung des Verstandes, darauf kommt es an. Nur der, der des Selbstgebrauchs seiner Vernunft fähig ist, heißt Philosoph. Philosophie ist scientifisches Erkenntnis in abstracto — sie ist selbst Wissenschaft.] Philosophieren lernen heißt: man muß seine Vernunft selbst gebrauchen lernen, und zwar findet hier ein Gebrauch der gesunden und spekulativen Vernunft statt. Wir müssen sie in Begriffen üben. Praktische Erkenntnis, sofern unser Verstand auf Bildung und Zweck geht: und praktische Vernunft ist der letzte Zweck menschlicher | Weisheit]. Philosophie als Weisheitslehre setzt einen Weisheitslehrer voraus. Die Alten verlangten von einem Weisheitslehrer, daß er auch praktisch ein Weiser sei. [Weisheit ist die Übereinstimmung mit den Endzwecken aller Dinge. Alle andern Erkenntnisse haben ihren Nutzen nur als Mittel — nur die Philosophie führt auf den letzten Endzweck — Weisheit. (Die Lehre vom höchsten Gut.) Philosophie — Liebe zur Weisheit.] Die Kyniker [der Name rührt her von Kynosarges, einer Hausstätte, wo sie sich gewöhnlich versammelten] nahmen, wie sie es nannten, den kurzen Weg zur Glückseligkeit, indem sie sich übten, alles entbehren zu können.",
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "dohna-s05-003",
     "kind": "text",
     "aa": 698,
     "text": "Jetzt wollen wir etwas von der Philosophie als Inbegriff von Kenntnissen und ihrer Geschichte reden.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s05-004",
     "kind": "text",
     "aa": 698,
     "aaEnd": 699,
     "pages": [
      {
       "p": 699,
       "i": 268
      }
     ],
     "text": "Die ersten Philosophen waren Poeten. Es gehörte nämlich Zeit dazu, für abstrakte Begriffe WTorte auszufinden, daher man anfangs die übersinnlichen Gedanken unter sinnlichen Bildern vorstellte. Pherekydes schrieb zuerst Philosophie in Prosa. [Der Stifter der jonischen Schule ist Thaies. Zur eleatischen gehören Parmenides, Xenophanes. Wegen Armut der Sprache konnte man damals nur in Poesie philosophieren.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s05-005",
     "kind": "text",
     "aa": 699,
     "text": "Die berühmteste Sekte ist die Platonische, dann die Aristotelische. Diese wurden Peripatetici genannt [hielten sich im Lyceo auf, dies war eine Kolonnade, wo ambulando gelehrt wurde], die erstem Akademiker. Die Stoiker {unter Zeno von Citium) hatten den Namen von crroa, porticus. Die Epikureer — (Horti) [Epikur lehrte darin].",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s05-006",
     "kind": "text",
     "aa": 699,
     "text": "Die sogenannte Akademie (d. h. die Schule des Plato) war anfangs ganz dogmatisch, artete aber nachher in Zweifelsucht, Skeptizismus, aus. Carneades kann nicht als Stifter einer neuen Schule, sondern nur als außerordentlicher Redner betrachtet werden. Arcesilas stiftete aber eine neue.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s05-007",
     "kind": "text",
     "aa": 699,
     "text": "[Anaxagoras war der erste Philosoph, welcher auch Theologie lehrte.] Die Alten teilten die ganze Philosophie in drei Teile, nämlich Logik, Physik und Ethik. Nur ist noch zu betrachten, ob hier nicht eine Dichotomie besser als eine Trichometrie wäre. [Praktische | Philosophie | : 1. ethische, Sokrates gab sich nie für einen Philosophen aus. Seine fragmentarischen Lehren hat Plato in ein System gebracht. 2. politisch, Klugheitsregeln, Pythagoras. In Rücksicht seiner liegt noch alles im Dunkel. Ein Glied der Subdivision kommt in die Obereinteilung.]",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "dohna-s05-008",
     "kind": "text",
     "aa": 699,
     "ms": [
      {
       "p": null,
       "i": 29,
       "raw": "'",
       "unresolved": true
      }
     ],
     "text": "Wir haben nun eigentlich die Philosophie eingeteilt :",
     "ocrConf": 39
    },
    {
     "id": "dohna-s05-009",
     "kind": "text",
     "aa": 699,
     "text": "1. in die formale, dies ist die Logik.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s05-010",
     "kind": "text",
     "aa": 699,
     "text": "2. in die materiale. Diese kann man einteilen in die theoretische und praktische.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s05-011",
     "kind": "text",
     "aa": 699,
     "text": "Die Ethik ist in den neueren Zeiten Tugendlehre genannt worden. Physik kann auch zweifach betrachtet werden.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s05-012",
     "kind": "text",
     "aa": 699,
     "text": "1. als Physica rationalis, reine Naturlehre [rein ist das Gegenteil von empirisch], diese heißt seit Aristoteles Metaphysik.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s05-013",
     "kind": "text",
     "aa": 699,
     "text": "2. als Physica materialis oder als Metaphysik und empirische Physik. Alle Erkenntnis ist rein, wenn kein Einfluß empirischer Kenntnisse dabei ist.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s05-014",
     "kind": "text",
     "aa": 699,
     "text": "Die Physica empirica kann man wieder einteilen",
     "ocrConf": 47
    },
    {
     "id": "dohna-s05-015",
     "kind": "text",
     "aa": 699,
     "text": "1. in die Körperlehre, physica specialis f und",
     "ocrConf": 39
    },
    {
     "id": "dohna-s05-016",
     "kind": "text",
     "aa": 699,
     "text": "2. in die Seelenlehre, ps}rchologia specialis f.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s05-017",
     "kind": "text",
     "aa": 699,
     "aaEnd": 700,
     "pages": [
      {
       "p": 700,
       "i": 201
      }
     ],
     "text": "Wenn Mir die Philosophie als Inbegriff mehrerer Wissenschaften ansehen, so wollen wir erst auf die sogenannten 7 freien Künste sehen : 1. Grammatik, 2. Rhetorik, 3. Dialektik, 4. Arithmetik, 5. Musik, 6. Geometrie, 7. Astronomie. [Diese Einteilung machte Hrabanus Maurus (zur Zeit Karls des Großen) zum Behuf der Theologie. — Man teilte damals alle Wissenschaften in a) obere Fakultät: 1. Erhaltung der Seligkeit, 2. der Freiheit und des Eigentums, 3. Leben und Gesundheit, überhaupt das esse;b)melius esse, die untere Fakultät].",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s06",
   "title": "[5te Stunde, d. 30sten April] Tractatio ipsa",
   "titleSrc": "heading",
   "headings": [
    "[5te Stunde, d. 30sten April]",
    "Tractatio ipsa"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s06-001",
     "kind": "heading",
     "aa": 700,
     "text": "[5te Stunde, d. 30sten April] Tractatio ipsa"
    },
    {
     "id": "dohna-s06-002",
     "kind": "text",
     "aa": 700,
     "text": "Logik ist die Wissenschaft, welche die formalen Regeln und Prinzipien des Denkens enthält. Sie wird gewöhnlich eingeteilt:",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s06-003",
     "kind": "text",
     "aa": 700,
     "text": "1. in die theoretische,",
     "ocrConf": 45
    },
    {
     "id": "dohna-s06-004",
     "kind": "text",
     "aa": 700,
     "text": "2. in die praktische, aber eine solche gibt es nicht, denn in dem Fall müßte sie auf Gegenstände angewandt werden, welches doch gar nicht stattfindet, denn sie enthält nur die formalen Regeln des Denkens.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s06-005",
     "kind": "text",
     "aa": 700,
     "text": "Man kann sie also vielmehr | einteilen | :",
     "ocrConf": 49
    },
    {
     "id": "dohna-s06-006",
     "kind": "text",
     "aa": 700,
     "text": "1. in die Elementarlehre, enthält die Regeln überhaupt,",
     "ocrConf": 50
    },
    {
     "id": "dohna-s06-007",
     "kind": "text",
     "aa": 700,
     "text": "2. in die Methodenlehre, enthält die Prinzipien der Wissenschaft.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s06-008",
     "kind": "text",
     "aa": 700,
     "ms": [
      {
       "p": 9,
       "i": 0
      }
     ],
     "text": "Die Methodenlehre ist der Inbegriff von Kenntnissen, insofern sie zu einem System gemacht sind [ — sie enthält eine Anleitung zu der Art, wie ein System der Erkenntnis zu erhalten sei]. Sie macht den sogenannten praktischen Teil aus.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s06-009",
     "kind": "text",
     "aa": 700,
     "text": "In der Geschichte der Logik ist das das vorzüglichste Phänomen, da sie mit sich selbst stritt, ob auch wohl irgendeine Erkenntnis gewiß sei. Wer nun glaubte, daß sie vollständig bewiesen werden könnte, wurde Dogmatiker genannt, die Zweifler aber Skeptiker. [Skeptiker wollten beweisen , daß man durchaus über nichts Gewißheit erhalten könne, und gerieten so mit sich selbst in Widerspruch — ein Kathartikon, was sich selbst aufhebt. — Ihre Scharfsinnigkeit, womit sie die Scholastiker angriffen, ist zu bewundern.] Sie waren am Ende eine nützliche Sekte. [Pyrrho war der älteste aller Skeptiker — nachher Arcesilas, Carneades.]",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s06-010",
     "kind": "text",
     "aa": 700,
     "text": "Wir haben keinen, der den Aristoteles übertroffen oder seine <reine> Logik vermehrt hat (welches auch im Grunde in sich selbst unmöglich ist) ebenso, wie kein Mathematiker den Euclides übertroffen hat.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s06-011",
     "kind": "text",
     "aa": 700,
     "aaEnd": 701,
     "pages": [
      {
       "p": 701,
       "i": 267
      }
     ],
     "text": "| [Etwas zur Geschichte der Logik. Die Griechen haben unter allen orientalischen Völkern das größte Verdienst um die Bearbeitung der Philosophie. Ihr Studium verfiel nachher in den Zeiten des Mittelalters fast ganz, bis im 12ten Jahrhundert die Scholastiker in Paris aufstanden. Eigentlich betrafen alle ihre Distinktionen nur die Theologie, daher auch die vielen unnützen Regeln und barbarischen Ausdrücke. Man half sich am Ende durch Hervorziehung der alten Klassiker aus dem scholastischen Wust und der daraus (erfolgten) Sprach-Verderbnis. — Locke wurde berühmt durch seinen Versuch über den menschlichen Verstand — er redet darin von dem Ursprung der Begriffe, dies gehört (aber) eigentlich nicht zur Logik, sondern zur Metaphysik. Das Resultat seiner Untersuchungen: Alles rührt aus der Erfahrung her. Aber dies folgt noch daraus gar nicht, daß die Begriffe (nur) in der Erfahrung dargelegt werden können. — Leibniz trat jetzt auf die Bahn. Obwohl er eigentHch keine Logik geschrieben, so hat er doch zur Aufhellung der Begriffe viel gewirkt (er schrieb zur Verteidigung seiner Landsleute gegen den Engländer Locke). Er äußerte in seinen Werken Ideen, welche in der Folge Wolffen zu seiner systematischen Logik bewogen. Man findet hierüber ausführliche Beschreibung in Reusch, Systema logicae und in Corvinus. Crusius gibt dem Verstände viel Nahrung. ]|",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 43
    },
    {
     "id": "dohna-s06-012",
     "kind": "text",
     "aa": 701,
     "text": "Ein Hauptpunkt in der Logik wird beruhen auf dem Kriterium der Wahrheit. Nun fangen wir an.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s07",
   "title": "I. Die Elementarlehre",
   "titleSrc": "heading",
   "headings": [
    "I. Die Elementarlehre"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s07-001",
     "kind": "heading",
     "aa": 701,
     "text": "I. Die Elementarlehre"
    },
    {
     "id": "dohna-s07-002",
     "kind": "text",
     "aa": 701,
     "text": "[Sie handelt von den Begriffen des Verstandes überhaupt. Die Einteilung alles Denkens — welches verschiedene Formen hat, die sich erschöpfen und in ein System bringen lassen. Das Generale, was aller Erkenntnis zum Grunde Hegt, ist Vorstellung — ein unerklärbarer Grundbegriff. Erkenntnis ist Beziehung der Vorstellung auf einen Gegenstand — verbunden mit einer actio im Gemüt — Bewußtsein (Vorstellung unsrer Vorstellung), welches den dunkeln Vorstellungen fehlt.]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s07-003",
     "kind": "text",
     "aa": 701,
     "aaEnd": 702,
     "pages": [
      {
       "p": 702,
       "i": 533
      }
     ],
     "ms": [
      {
       "p": 10,
       "i": 320,
       "raw": "io",
       "inferred": true
      }
     ],
     "text": "Die Alten teilten sie in 1 . Apprehensio simplex, in 2. Judicium und 3. in ratiocinium. Zu unserm Erkenntnis gehören zwei Stücke, Anschauung und Begriff. Vorstellungen können auch auf etwas anders, als Erkenntnis, nämlich auf Gefühl der Lust und Unlust (die Art, wie wir von den Dingen affiziert werden) bezogen werden. Alle unsre Anschauung gehört zur Sinnlichkeit, jeder Begriff zum Verstände. Die Sinnlichkeit enthält zwei Vermögen, den Sinn und die Einbildungskraft [dies ist die Zauberkraft des menschlichen Geistes] oder das Anschauungsvermögen eines Gegenstandes, sofern er nicht da ist, der Sinn aber das, sofern der Gegenstand da ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "dohna-s07-004",
     "kind": "text",
     "aa": 702,
     "text": "[Alle unsere Vorstellung ist : 1 . Empfindung — Beziehung derselben aufs Subjekt, 2. Erkenntnis — Beziehung aufs Objekt. 1. z. B. Lust — liegt bloß in mir — nicht im Objekt.]",
     "ocrConf": 32
    }
   ]
  },
  {
   "id": "s08",
   "title": "Vom Bewußtsein der Vorstellung oder Apperzeption",
   "titleSrc": "heading",
   "headings": [
    "Vom Bewußtsein der Vorstellung oder Apperzeption"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s08-001",
     "kind": "heading",
     "aa": 702,
     "text": "Vom Bewußtsein der Vorstellung oder Apperzeption"
    },
    {
     "id": "dohna-s08-002",
     "kind": "text",
     "aa": 702,
     "text": "Dies ist das Vorstellungsvermögen in Beziehung auf einen Gegenstand [der zu unserm Zustand gehört], welcher bei der Apprehension noch gar nicht da ist, sondern gleichsam hervorgebracht (gegriffen) wird. In dem Gedanken, daß der Mensch sagen kann: ich bin — liegt ausnehmend viel. Das Bewußtsein unserer Begriffe ist immer schwer. [Es wird vorzüglich dazu erfordert. Aus dem Mangel des Bewußtseins sind auch Tiere keiner Begriffe fähig — Anschauung haben sie. — Das Bewußtsein ist eine ganz aparte Dimension des Erkenntnisvermögens (daher nicht Gradation von den Tieren zum Menschen stattfindet).] Der Begriff enthält das, was vielen {(verschiedenen)) Vorstellungen allgemein ist. Ein Begriff heißt:",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s08-003",
     "kind": "text",
     "aa": 702,
     "text": "klar, dessen man sich bewußt ist. (Der Wilde würde fragen: Was ist ein Haus ?)",
     "ocrConf": 42
    },
    {
     "id": "dohna-s08-004",
     "kind": "text",
     "aa": 702,
     "text": "deutlich , wenn man sich nicht allein der Teilbegriffe, sondern auch der Totalbegriffe bewußt ist. Deutlichkeit bedürfen wir in allen Begriffen, die wir andern mitteilen wollen. Man kann von keinem Begriffe, der keine Mannigfaltigkeit (Teilvorstellungen) in sich enthält (Deutlichkeit) verlangen. Z. B. Zeit. [Bei diesem Begriff kann man nur Klarheit verlangen — es ist nur eine einfache Vorstellung.]",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "dohna-s08-005",
     "kind": "text",
     "aa": 702,
     "ms": [
      {
       "p": 11,
       "i": 359,
       "raw": "ii",
       "inferred": true
      }
     ],
     "text": "Wenn eine im ganzen klare Vorstellung particulariter dunkel ist, so ist sie undeutlich. [Undeutliche Vorstellungen nennt man verworrene (konfuse). Sie kommen aber eigentlich aus der ScliAväche der Vorstellung her. Ist aber Ordnung in den | Vorstellungen j, so kommt's von der Verwirrung. Nur wenn die Vorstellung zusammengesetzt ist, kann sie verwirrt sein.] Begriffe, deren man sich nicht bewußt ist, sind dunkel. Es gilt aber nur von dunkeln Vorstellungen. Diese sind entweder :",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s08-006",
     "kind": "text",
     "aa": 702,
     "text": "1. bloß klar, und zwar entweder",
     "ocrConf": 51
    },
    {
     "id": "dohna-s08-007",
     "kind": "text",
     "aa": 702,
     "text": "a) einfache oder",
     "ocrConf": 51
    },
    {
     "id": "dohna-s08-008",
     "kind": "text",
     "aa": 702,
     "text": "b) zusammengesetzte, oder",
     "ocrConf": 56
    },
    {
     "id": "dohna-s08-009",
     "kind": "text",
     "aa": 703,
     "text": "2. bloß deutlich. Diese Deutlichkeit ist:",
     "ocrConf": 52
    },
    {
     "id": "dohna-s08-010",
     "kind": "text",
     "aa": 703,
     "text": "a) Deutlichkeit der Anschauung,",
     "ocrConf": 49
    },
    {
     "id": "dohna-s08-011",
     "kind": "text",
     "aa": 703,
     "text": "b) Deutlichkeit der Begriffe. (Im Autor kommt nur diese vor, aber die korrespondierende Anschauung, Darstellung, exhibitio ist ebenso notwendig.)",
     "ocrConf": 48
    },
    {
     "id": "dohna-s08-012",
     "kind": "text",
     "aa": 703,
     "text": "[Ordnung ist in den Vorstellungen und Begriffen von der größten Wichtigkeit. Es sind drei Verhältnisse:",
     "ocrConf": 38
    },
    {
     "id": "dohna-s08-013",
     "kind": "text",
     "aa": 703,
     "text": "1. Subjekt zum Prädikat,",
     "ocrConf": 38
    },
    {
     "id": "dohna-s08-014",
     "kind": "text",
     "aa": 703,
     "text": "2. einteilende Glieder zum eingeteilten Begriff,",
     "ocrConf": 55
    },
    {
     "id": "dohna-s08-015",
     "kind": "text",
     "aa": 703,
     "text": "3. das Verhältnis des Grundes zur Folge.]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s08-016",
     "kind": "text",
     "aa": 703,
     "text": "Es ist selbst den Philosophen nicht gelungen, den Begriff der Tugend ganz auseinander zu setzen. Man hat ihn in sich, kann ihn aber nicht von sich geben. —",
     "ocrConf": 41
    },
    {
     "id": "dohna-s08-017",
     "kind": "text",
     "aa": 703,
     "text": "[6te Stunde, d. lten Mai]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s08-018",
     "kind": "text",
     "aa": 703,
     "text": "§ 15 und § 16 in unserm Autor gehören eigentlich gar nicht zur Logik. [K 11. 12]",
     "ocrConf": 36
    },
    {
     "id": "dohna-s08-019",
     "kind": "text",
     "aa": 703,
     "text": "§ 17. Das vernünftige Erkenntnis, eine deutliche Art, aus Gründen etwas zu erkennen. Eigentlich ist ein Erkenntnis aus Begriffen Verstandeserkenntnis. Denken heißt discursive sich etwas vorstellen, unterschieden von der Anschauung, intuitive sich etwas vorstellen. Vernunft, das Vermögen zu schließen, dazu gehören Urteile, und diese können nicht ohne Begriffe geschehen f. Die Empfänglichkeit, Receptivität, ist unterschieden von der Spontaneität [Selbsttätigkeit]. Verstand ist das Obererkenntnisvermögen. [Er ist nämlich das Vermögen der Regeln und diese sind schon Begriffe.] Dann kommt man von den Vorstellungen zu Begriffen (facultas concept . . .), dann zu Urteüen, dann zu Schlüssen.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "dohna-s08-020",
     "kind": "text",
     "aa": 703,
     "text": "[Das Obererkenntnisvermögen enthält :",
     "ocrConf": 44
    },
    {
     "id": "dohna-s08-021",
     "kind": "text",
     "aa": 703,
     "text": "1. Verstand,",
     "ocrConf": 58
    },
    {
     "id": "dohna-s08-022",
     "kind": "text",
     "aa": 703,
     "text": "2. Urteilskraft,",
     "ocrConf": 50
    },
    {
     "id": "dohna-s08-023",
     "kind": "text",
     "aa": 703,
     "text": "3. Vernunft.]",
     "ocrConf": 60
    },
    {
     "id": "dohna-s08-024",
     "kind": "text",
     "aa": 703,
     "ms": [
      {
       "p": 12,
       "i": 0,
       "raw": "n",
       "inferred": true
      }
     ],
     "text": "Der Verstand ist das Vermögen der Vorstellung des Allgemeinen als solchen. [Z. B. Definition des Menschen überhaupt.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s08-025",
     "kind": "text",
     "aa": 703,
     "text": "Die Urteilskraft ist das Vermögen das Besondere als enthalten unter dem Allgemeinen vorzustellen [Cajus ist ein Mensch] oder Vermögen der Subsumtion.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s08-026",
     "kind": "text",
     "aa": 703,
     "aaEnd": 704,
     "pages": [
      {
       "p": 704,
       "i": 119
      }
     ],
     "text": "Die Vernunft das Vermögen der Ableitung des Besondern aus dem Allgemeinen oder das Erkenntnis a priori. [Alle Menschen sind sterblich. Auch Sempronius ist ein Mensch. Sempronius ist sterblich.",
     "joined": [
      "layout"
     ],
     "ocrConf": 46
    },
    {
     "id": "dohna-s08-027",
     "kind": "text",
     "aa": 704,
     "text": "In den beiden ersten, Verstand und Urteilskraft, kann man lehren, in letzterer nur üben.]",
     "ocrConf": 50
    },
    {
     "id": "dohna-s08-028",
     "kind": "text",
     "aa": 704,
     "text": "Die Definition der Logik, cognitio rationalis, ist nicht die beste, könnte nur dann gelten, wenn sie zum Objekt den Gebrauch der Regeln des Verstandes und der Vernunft hat.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s08-029",
     "kind": "text",
     "aa": 704,
     "text": "Vernünftig muß alles Erkenntnis sein. Der Autor sollte also sagen Vernunfterkenntnis. Was nun nicht Vernunfterkenntnis ist, ist historisches Erkenntnis, beruht auf empirischen Gründen. [Seientifisches Erkenntnis ist das, wovon Regeln in abstracto möglich sind. Gemein ist das Erkenntnis, sofern es nicht scientifisch ist.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s08-030",
     "kind": "text",
     "aa": 704,
     "ms": [
      {
       "p": 13,
       "i": 558,
       "raw": "1$",
       "inferred": true
      }
     ],
     "text": "Man muß sich bemühen philosophieren, nicht bloß Philosophie zu lernen. Denn täten wir letzteres so wäre unser Erkenntnis bloß historisch und nicht aus uns selbst geschöpft. Ein Inbegriff von Kenntnissen als System ist Wissenschaft, wobei ein Hauptprinzip, aus dem alles übrige abgeleitet ist, zum Grunde Heget. Ein Erkenntnis wird gemein genannt, insofern es nicht Wissenschaft ist. Es kann bisweilen sehr vast sein, hat aber kein System, keine Einheit des Ganzen. Der Materie nach ist der, welcher ein solches Erkenntnis besitzt, dem, der Wissenschaft hat, nicht entgegengesetzt, sondern der Form nach. Ja, er kann sogar der Materie nach reicher sein, aber es ist alles durcheinander geworfen. Wir können das philosophische Erkenntnis mit zur Gelehrsamkeit zählen, insofern wir eine philosophische Geschichte angeben von dem, was alle Philosophen von jeher gesagt haben. Aber wer dies kann, ist darum noch kein Philosoph. Dies ist man nur dann, wenn man philosophieren kann. Das historische Erkenntnis als Wissenschaft ist Gelehrsamkeit. Ein Vernunftlehrer kann Philosoph und Mathematiker sein. Wer alle historische Erkenntnis als Wissenschaft besitzt, wird Polyhistor genannt.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s08-031",
     "kind": "text",
     "aa": 704,
     "text": "In dem Begriff des Philosophen kann man sich doch noch zweierlei Unterschied denken :",
     "ocrConf": 51
    },
    {
     "id": "dohna-s08-032",
     "kind": "text",
     "aa": 704,
     "text": "1. als Vernunftkünstler, 2. als Weiser oder Gesetzgeber.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s08-033",
     "kind": "text",
     "aa": 704,
     "aaEnd": 705,
     "pages": [
      {
       "p": 705,
       "i": 335
      }
     ],
     "text": "Zur eigentlichen Philosophie (die nicht bloß Vernunftkunst sein soll) gehört nichts als Metaphysik und Moral. Diese dienen als Mittel, unsre Existenz als vernünftige Wesen zu erkennen und den letzten Zweck, unser Ziel [ — das höchste Gut — ], das erhabenste, das wir haben, zu erkennen. Daraus erhellet nun, daß der Physiker gar keine Wissenschaft hat, obgleich man Physik immer zu den Wissenschaften zählet.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s08-034",
     "kind": "text",
     "aa": 705,
     "ms": [
      {
       "p": 14,
       "i": 0,
       "raw": "u",
       "inferred": true
      }
     ],
     "text": "Unser Autor handelt nun",
     "ocrConf": 42
    },
    {
     "id": "dohna-s08-035",
     "kind": "text",
     "aa": 705,
     "text": "Vom schönen Erkenntnis",
     "ocrConf": 50
    },
    {
     "id": "dohna-s08-036",
     "kind": "text",
     "aa": 705,
     "text": "[Schönes Erkenntnis gibt es eigentlich gar nicht. Es kommt beim Erkenntnis nur auf das Verhältnis zum Gegenstande an — ist er getroffen, so ist es wahr, aber nur die Darstellung kann schön sein.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s08-037",
     "kind": "text",
     "aa": 705,
     "text": "Sinnlichkeit ist das Vermögen der Anschauung:",
     "ocrConf": 48
    },
    {
     "id": "dohna-s08-038",
     "kind": "text",
     "aa": 705,
     "text": "a) Sinn, Vermögen der Anschauung in der Gegenwart,",
     "ocrConf": 40
    },
    {
     "id": "dohna-s08-039",
     "kind": "text",
     "aa": 705,
     "text": "b) Einbildungskraft, Vermögen der Anschauung in der Abwesenheit des Gegenstandes.]",
     "ocrConf": 54
    },
    {
     "id": "dohna-s08-040",
     "kind": "text",
     "aa": 705,
     "text": "Wenn ich etwas schön nenne, so drücke ich dadurch mein Wohlgefallen, meine Lust (die Beziehung des Gegenstandes auf das Subjekt, die eine angenehme Vorstellung hervorbringt, die das Gemüt selber zu ihrer eigenen Erhaltung bestimmt) an dem Gegenstande aus. Die Basis der Definition. Bei allem Schönen verstehn wir nur Beziehung der Erkenntnis auf das Subjekt, gar nicht den Gegenstand selbst. Z. B. bei Beschreibung von schönen Gegenden beschreibt man nur, wie man davon affiziert worden. Unmöglich kann man den Gegenstand selbst schildern. Ein schönes Erkenntnis gibt es also gar nicht.",
     "dehyphenated": 1,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s09",
   "title": "[7te Stunde, d. 3ten Mai]",
   "titleSrc": "heading",
   "headings": [
    "[7te Stunde, d. 3ten Mai]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s09-001",
     "kind": "heading",
     "aa": 705,
     "text": "[7te Stunde, d. 3ten Mai]"
    },
    {
     "id": "dohna-s09-002",
     "kind": "text",
     "aa": 705,
     "text": "Man teilt die Vollkommenheit",
     "ocrConf": 54
    },
    {
     "id": "dohna-s09-003",
     "kind": "text",
     "aa": 705,
     "text": "1. in die logische Vollkommenheit in der Übereinstimmung des Erkenntnisvermögens mit dem Objekt,",
     "ocrConf": 51
    },
    {
     "id": "dohna-s09-004",
     "kind": "text",
     "aa": 705,
     "text": "2. in die ästhetische Vollkommenheit, | sie | besteht in der Übereinstimmung des Objekts mit dem Erkenntnisvermögen des Subjekts.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s09-005",
     "kind": "text",
     "aa": 705,
     "text": "[Ästhetische Vollkommenheit ist die subjektive Übereinstimmung des Verstandes mit der Sinnlichkeit - — welche die Vorstellung eines Gegenstandes belebt. Weil die Übereinstimmung nur subjektiv ist, so wird sie auch nur durch Empfindung möglich sein. Es entsteht dabei Gefühl der Lust sowie bei Empfindung des Widerstreits Gefühl der Unlust.]",
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-006",
     "kind": "text",
     "aa": 705,
     "aaEnd": 706,
     "pages": [
      {
       "p": 706,
       "i": 127
      }
     ],
     "text": "Einbildungskraft und Verstand sind die beiden einzigen tätigen Erkenntnisvermögen des menschlichen Gemüts. Aber die Sinne sind ganz passive, sie erfordern notwendig einen Gegenstand, Einbildungskraft schafft sich selbst Gegenstände.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 52
    },
    {
     "id": "dohna-s09-007",
     "kind": "text",
     "aa": 706,
     "ms": [
      {
       "p": 15,
       "i": 0,
       "approx": true
      }
     ],
     "text": "I Zu allen unsern Erkenntnissen gehören folgende zwei Stücke [zwei Elemente, deren eines ohne das andre keine Erkenntnis gibt]:",
     "ocrConf": 49
    },
    {
     "id": "dohna-s09-008",
     "kind": "text",
     "aa": 706,
     "text": "1 . Anschauung (die Interpretation des Begriffs, des Denkens) ;",
     "ocrConf": 36
    },
    {
     "id": "dohna-s09-009",
     "kind": "text",
     "aa": 706,
     "text": "2. Begriff. Der pure Begriff wie die pure Regel gibt noch keine Deutlichkeit der Erkenntnis, es gehört auch Anschauung dazu. Umgekehrt ist Anschauung ohne Begriff ebenfalls nichts. Denn ohne wäre es ebenso, als hätte sie nichts gesehn. Z. B. geschmackvolle dichterische Beschreibungen von Gegenden, die nur Anschauung hervorbringen, dienen gar nicht zur Erkenntnis, sind auch nur für Toiletten.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s09-010",
     "kind": "text",
     "aa": 706,
     "text": "Wenn ich aber bloß lediglich auf Schönheit sehe, so verlange ich nicht Belehrung, sondern nur gefallende Unterhaltung. Dieses Wohlgefallen kann sich das Gemüt selbst erregen, es bleibt dabei in Spontaneität. Geschmack soll das Vermögen sein, aus der subjektiven Übereinstimmung der Erkenntniskräfte Wohlgefallen am Gegenstande zu haben.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "dohna-s09-011",
     "kind": "text",
     "aa": 706,
     "text": "[Da Schönheit nie durch Begriffe erkannt werden kann, nur durch Gefühl, dies aber nicht so mitteilbar ist, als Begriffe, die, da sie aufs Objekt gehn, bei allen Subjekten dieselben — so lassen sich keine objektiven Regeln darüber geben. Doch unterscheidet sich das Schöne vom Angenehmen dadurch, daß jenes bei allen subjektiv allgemein gilt, dies sich aber bloß auf einzelne Subjekte erstreckt. Man wird bei Sachen des Angenehmen niemandem ansinnen dasselbe Urteil zu fällen — wie bei Gegenständen des Schönen, wo das Urteil des Geschmacks allgemeingültig ist. — Das ästhetische Schöne ist nicht durch Regeln, sondern bloß durch Beispiele zu erläutern — daher der Wert der Klassiker.]",
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-012",
     "kind": "text",
     "aa": 706,
     "text": "In Ansehung des Wohlgefallens an Gegenständen ist das Erkenntnis zwiefach.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-013",
     "kind": "text",
     "aa": 706,
     "text": "1. Das Schöne, das Unterscheidungsvermögen des Schönen nennt man Geschmack.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s09-014",
     "kind": "text",
     "aa": 706,
     "text": "2. Das Erhabene, das Unterscheidungs vermögen | des Erhabenen | nennt man Gefühl.",
     "ocrConf": 38
    },
    {
     "id": "dohna-s09-015",
     "kind": "text",
     "aa": 706,
     "text": "Der Geschmack gehört zur Urteilskraft. Denn er ist nicht | ein | Mittel, Gegenstände hervorzubringen, sondern nur sie zu beurteilen.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s09-016",
     "kind": "text",
     "aa": 706,
     "ms": [
      {
       "p": 16,
       "i": 0
      }
     ],
     "text": "Nun ist die Urteilskraft auch zweifach :",
     "ocrConf": 40
    },
    {
     "id": "dohna-s09-017",
     "kind": "text",
     "aa": 706,
     "text": "1. logische,",
     "ocrConf": 50
    },
    {
     "id": "dohna-s09-018",
     "kind": "text",
     "aa": 707,
     "text": "2. ästhetische. Diese ist Geschmack [Verstand in Vereinigung mit der Einbildungskraft]. Ein empirisches Urteil wird durch den unmittelbaren Eindruck, den die (Vorstellung vom) Gegenstande [in Ansehung des Gefühls der Lust und Unlust] auf unser Gemüt machet, hervorgebracht. Logische Urteilskraft hat immer feststehende Regeln. Aber die der ästhetischen Urteilskraft beruhen nur auf empirischen Gründen. Über die Lust, die aus den Sinnen entspringt, zu zanken (z. B. sich zu wundern, warum dem andern das Sauerkraut nicht schmeckt), Aväre sehr töricht. Daher würde das Sprichwort Chacun ä son gout in diesem Fall, wenn es die Bedeutung hätte, richtig sein. Da dies aber nicht ist [denn wir verstehn ja hier nicht unter Geschmack den Reiz des Gaumens, sondern die ästhetische Urteilskraft], so ist es in jedem andern Betracht falsch. Denn Geschmack ist ästhetische Urteilskraft und ist allgemeingültig. Dieses kann uns auf die Spur bringen, worin eigentlich der Geschmack zu setzen ist. [Alles, was zur Empfindung gehört, ist subjektiv, alles, was zur Anschauung gehört, objektiv.] Alles, was nicht in der Beziehung unsers Vorstellungsvermögens aufs Objekt, sondern aufs Subjekt, aufs vorstellende Vermögen beruht, ist ästhetisch. Sofern wir Einbildungskraft und Verstand harmonisch durch ein gewisses Gefühl belebt finden, haben wir Geschmack. [Die Freiheit der Einbildungskraft übereinstimmend mit dem Begriff des Verstandes. Dieser würde ohne jene, die ihm Anschauung gibt, nichts ausrichten — das Objekt würde ihm verschwinden. Der Verstand kommt der Einbildungskraft zuhilf e, und er bringt Einheit in ihre Produkte.]",
     "dehyphenated": 6,
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-019",
     "kind": "text",
     "aa": 707,
     "text": "|[Geschmack ist Kunst. Der Verstand und die Einbildungskraft, die sich dazu vereinigen müssen, gleichen zwei Freunden, die sich nicht leiden und doch nicht voneinander lassen können — denn sie leben in einem beständigen Streite und sind sich doch wechselseitig unentbehrlich. Es gibt, wie aus dem obigen erfolgt, keine schönen Wissenschaften, sondern nur eine Kunst des Schönen. Um es hervorzubringen, wird Genie erfordert — z. B. ein gutes Gedicht läßt sich nicht bestellen, es gelingt nur dann, wenn der Dichter die Laune — glückliche Gemütsdisposition — dazu hat, Regeln sind dazu nicht genug. Es gab eher Poeten, als Regeln der Poetik.] |",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-020",
     "kind": "text",
     "aa": 707,
     "text": "[8te Stunde]",
     "ocrConf": 60
    },
    {
     "id": "dohna-s09-021",
     "kind": "text",
     "aa": 707,
     "aaEnd": 708,
     "pages": [
      {
       "p": 708,
       "i": 132
      }
     ],
     "ms": [
      {
       "p": 17,
       "i": 0,
       "raw": "n",
       "inferred": true
      }
     ],
     "text": "Die logische Vollkommenheit der Vorstellungen besteht darin, daß sie besondere Vorstellungen als im allgemeinen vorstellen [ — oder formale — (so wie die ästhetische materiale) Vollständigkeit ist das Requisit der logischen Vollkommenheit — sie sucht das Besondere unter dem Allgemeinen auf.] Aber beim ästhetischen ist es gerade umgekehrt. Da werden nämlich allgemeine Vorstellungen im Besondern vorgestellt. Bei einem logischen Urteile sehe ich also nur darauf, daß besondre Vorstellungen im Allgemeinen vorgestellt werden. [Mit dem ästhetischen Urteile ist es wieder gerade unigekehrt.] Die logische Vollkommenheit erfordert die Anschauung auf Begriffe, die ästhetische die Begriffe auf Anschauung zu bringen. Die logische Vollkommenheit besteht in der Übereinstimmung der Erkenntnis mit demio Objekt, die ästhetische in der mit dem Subjekt und seinem Erkenntnisvermögen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 47
    },
    {
     "id": "dohna-s09-022",
     "kind": "text",
     "aa": 708,
     "text": "Unser Autor setzt der Schönheit Häßlichkeit (deformitas) entgegen [Häßlichkeit ist ebensowohl positiv als Schönheit — Gegenstand, den ich hasse, das Maximum Ekel], es gebe aber noch ein Mittelwort, Trockenheit <(Jejunum> [sie ist ein Grad von Vollkommenheit, den die Mathematik besitzt, weil sie Trockenheit hat], und zwar können Trockenheit und Schönheit wohl zusammen bestehn [z.B. in einer Predigt, die trocken anfängt, in der Folge aber viele Schönheiten enthält.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s09-023",
     "kind": "text",
     "aa": 708,
     "text": "Schönheit kann nur auf die Darstellung gehn, auf die Anschauung, nicht ganz eigentlich auf den Begriff. Das große Geschäft der Fortpflanzung ist in der ganzen Natur verbreitet. — Der Ausdruck schöne Erkenntnis ist gar nicht passend.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-024",
     "kind": "text",
     "aa": 708,
     "text": "Die Vermögen unsers Gemüts lassen sich auf folgende drei Klassen bringen :",
     "ocrConf": 51
    },
    {
     "id": "dohna-s09-025",
     "kind": "text",
     "aa": 708,
     "text": "1 . Erkenntnisvermögen,",
     "ocrConf": 31
    },
    {
     "id": "dohna-s09-026",
     "kind": "text",
     "aa": 708,
     "text": "2. Gefühl der Lust und Unlust,",
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-027",
     "kind": "text",
     "aa": 708,
     "text": "3. Begehrungs vermögen.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-028",
     "kind": "text",
     "aa": 708,
     "text": "Eine Vorstellung ist unsere Erkenntnis, und zwar",
     "ocrConf": 40
    },
    {
     "id": "dohna-s09-029",
     "kind": "text",
     "aa": 708,
     "text": "1. In Beziehung auf das Erkenntnisvermögen heißt sie logische Vollkommenheit [in Beziehung auf den Verstand — Wahrheit ist ein Urteil, kein Gefühl].",
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-030",
     "kind": "text",
     "aa": 708,
     "text": "2. In Beziehung auf das Gefühl der Lust und Unlust ästhetische Vollkommenheit [in Beziehung auf die Urteilskraft].",
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-031",
     "kind": "text",
     "aa": 708,
     "text": "3. Daß sie übereinstimme mit unserm Begehrungsvermögen — praktische Vollkommenheit [in Beziehung auf die Vernunft].",
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-032",
     "kind": "text",
     "aa": 709,
     "ms": [
      {
       "p": 18,
       "i": 0
      }
     ],
     "text": "Von den Vollkommenheiten der Erkenntnis",
     "ocrConf": 35
    },
    {
     "id": "dohna-s09-033",
     "kind": "text",
     "aa": 709,
     "text": "Wir können Vollkommenheit in der Erkenntnis haben :",
     "ocrConf": 58
    },
    {
     "id": "dohna-s09-034",
     "kind": "text",
     "aa": 709,
     "text": "1 . in der Quantität — Allgemeinheit —",
     "ocrConf": 26
    },
    {
     "id": "dohna-s09-035",
     "kind": "text",
     "aa": 709,
     "text": "2. in Ansehung der Qualität — Deutlichkeit durch Begriffe [d. h. durch Bewußtsein der Merkmale],",
     "ocrConf": 41
    },
    {
     "id": "dohna-s09-036",
     "kind": "text",
     "aa": 709,
     "text": "3. in Ansehung der Relation — Beziehung (der Vorstellung) auf ein Objekt. Wahrheit Übereinstimmung des Urteils mit der Denkart. [Wahrheit ist hier die logische Vollkommenheit.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s09-037",
     "kind": "text",
     "aa": 709,
     "text": "4. in Ansehung der Modalität (beruht darauf, ob sie zufällig oder notwendig ist). [Hier ist es die a priori erkannte Notwendigkeit.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s09-038",
     "kind": "text",
     "aa": 709,
     "text": "Die logische Vollkommenheit <(der Quantität nach) besteht in der Allgemeinheit der Vorstellungen, daß die Begriffe deutlich werden. Diese Allgemeinheit war objektiv [und ging darauf, das Besondere im Allgemeinen in abstracto vorzustellen — ]. Aber ästhetisch ist sie subjektiv und diese subjektive Allgemeinheit heißt Popularität. [So geht die ästhetische Vollkommenheit im Gegenteil darauf, das Allgemeine in concreto vorzustellen — dies Popularität — Verstandesbegriffe dem sensus communis (d. h. dem gesunden gemeinen Verstände) angemessen zu machen. — ]",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s09-039",
     "kind": "text",
     "aa": 709,
     "text": "Die 2te logische Vollkommenheit ist D e u 1 1 i c h k e i t durch Begriffe . Diese wird bewirkt durch wenig Merkmale [bei denen ich mir aber auch der Teilvorstellungen bewußt bin] ; die ästhetische durch viele Merkmale. Die logische Deutlichkeit entspringt daraus, daß ich in viel Dingen wenig vorstelle, die ästhetische daraus, daß ich in (wenigen) vieles vorstelle. Die ästhetische Deutlichkeit heißt Lebhaftigkeit in der Verbindung vieler Vorstellungen. Zur logischen Deutlichkeit wird Abstraktion erfordert. Zur ästhetischen gehört ein Schwärm von Neben Vorstellungen .",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s09-040",
     "kind": "text",
     "aa": 709,
     "ms": [
      {
       "p": 19,
       "i": 154
      }
     ],
     "text": "Die 3te Vollkommenheit ist Beziehung aufs Objekt — Wahrheit [Übereinstimmung mit dem Objekt]. Ästhetisch wahr ist das, was nach der Erscheinung gilt, die Übereinstimmung eines Urteils mit der Denkungsart des Subjekts. So geht der Dichter auf den allgemeinen Schein, auf subjektive Wahrheit. Das Dichterische ist immer ästhetisch, selten logisch wahr. Z. B. der Donner grollt. [Wahrheit ist Übereinstimmung des Urteils mit der Denkungsart.]",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s09-041",
     "kind": "text",
     "aa": 709,
     "aaEnd": 710,
     "pages": [
      {
       "p": 710,
       "i": 197
      }
     ],
     "text": "Nun die 4te (Vollkommenheit). Die Modalität beruht darauf, ob es ein notwendiges oder bloß zufälliges Urteil ist. Eine ästhetische Notwendigkeit, wenn es nämlich nach Gesetzen der Einbildungskraft nötig ist, sich die Sache vorzustellen, nicht nach Gesetzen der Vernunft. Die ästhetische Notwendigkeit istnur subjektive Notwendigkeit. Die ästhetische Vollkommenheit ist Herablassung des Verstandes zur Sinnlichkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s09-042",
     "kind": "text",
     "aa": 710,
     "text": "[9te Stunde]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-043",
     "kind": "text",
     "aa": 710,
     "ms": [
      {
       "p": 20,
       "i": 575
      }
     ],
     "text": "Durch die Anschauung wird ein Objekt gegeben, durch den Begriff gedacht. Wenn Anschauung und Begriff zusammenstimmen zur Belebung der Erkenntnis selbst, so machen sie in uns ein Wohlgefallen und dann nennt man es schönes Erkenntnis. Man muß sich bemühen, daß Verstand und Einbildungskraft zu einem Geschäft zusammenstimmen. Dies aber ist nicht mehr Spiel. Bei einem schönen Produkte wird nicht ein neues Erkenntnis erfordert, sondern nur die Belebung der Erkenntniskräfte. Überhaupt ist Produzierung des Schönen nicht Wissenschaft, sondern freies Spiel der Einbildungskraft. Einbildungskraft und Verstand sind zwei Freunde, die einander nicht entbehren, aber auch einander nicht leiden können, denn immer tut einer dem andern Abbruch. Je allgemeiner der Verstand in seinen Regeln ist, desto vollkommener ist er, will er aber Dinge in concreto betrachten, so kann | er | schlechterdings gar nichts ohne die Einbildungskraft tun.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "dohna-s09-044",
     "kind": "text",
     "aa": 710,
     "text": "Die Un Vollkommenheiten der Erkenntnis sind 1. entweder Unvollkommenheiten des Mangels (defectus) oder 2. Unvollkommenheiten der Beraubung (vitium), besser der Übertretung (reatus, transgressio legis, eristreus).",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-045",
     "kind": "text",
     "aa": 710,
     "text": "[Unwissenheit gleicht einer tabula rasa — Irrtum einer bekritzelten Tafel. Hier hat man nun noch obendrein die Mühe, das Falsche wegzulöschen, um erst wieder zur Unwissenheit zu kommen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-046",
     "kind": "text",
     "aa": 710,
     "text": "Wahrheit Unwissenheit Irrtum",
     "ocrConf": 50
    },
    {
     "id": "dohna-s09-047",
     "kind": "text",
     "aa": 710,
     "text": "+ a a — a]",
     "ocrConf": 28
    },
    {
     "id": "dohna-s09-048",
     "kind": "text",
     "aa": 710,
     "aaEnd": 711,
     "pages": [
      {
       "p": 711,
       "i": 598
      }
     ],
     "text": "Denn wenn man auch nicht alles Wahre sagt, so muß doch alles, was man sagt, wahr sein. Das Widerspiel ist nicht allein etwas Negatives, sondern wirklich etwas Positives, was in der Mathematik das Zeichen Minus hätte. Z. B. wenn ein Arzt dem Kranken nicht allein den Mangel der Gesundheit | nicht | ersetzt, sondern sie ihm ganz zerrüttet. Daraus sieht man sogar, daß unter allen Unvollkommenheiten der menschlichen Existenz man sich am meisten vor der des Widerspiels hüten muß, weil sie die schreckliche Eigenschaft hat, daß sie nicht allein nicht nützet, sondern gar schadet. Denn wenn man etwas Falsches gelernt hat, so kostet es unsägliche Mühe, sich erst wieder in den Zustand zu versetzen, in dem man war, als man nichts davon wußte, um so die Wahrheit kennen zu lernen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s09-049",
     "kind": "text",
     "aa": 711,
     "text": "[lOte Stunde]",
     "ocrConf": 48
    },
    {
     "id": "dohna-s09-050",
     "kind": "text",
     "aa": 711,
     "ms": [
      {
       "p": 21,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Von der Weitläufigkeit der gelehrten Erkenntnis",
     "ocrConf": 40
    },
    {
     "id": "dohna-s09-051",
     "kind": "text",
     "aa": 711,
     "text": "[Horizont ist der Inbegriff derjenigen Erkenntnisse, die zum Zweck eines Menschen gehören.]",
     "ocrConf": 50
    },
    {
     "id": "dohna-s09-052",
     "kind": "text",
     "aa": 711,
     "text": "Die extensive Erkenntnis beruht auf der Vielheit, die intensive aber auf dem Grad. Die letzte ist eine Größe der Einheit. Die erste nennt der Autor die Weitläufigkeit der gelehrten Erkenntnis.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s09-053",
     "kind": "text",
     "aa": 711,
     "text": "Vom Horizonte der menschlichen Erkenntnis. — Der Horizont [Horizont, der Zirkel, der alle Objekte begrenzt] ist die Kongruenz {Übereinstimmung) der Grenzen irgendeiner Erkenntnis mit den Grenzen der menschlichen Vollkommenheit. Diese ist begrenzt, würde, wenn sie sich über die Grenzen ausbreitete, auf Chimären verfallen. Nichts kann über dem Horizont uns unsichtbar sein. Daher ist dieser Redegebrauch falsch. Nur das, was unter unserm Horizont ist, können Mir nicht wissen. Wir können unsern Horizont einteilen:",
     "ocrConf": 47
    },
    {
     "id": "dohna-s09-054",
     "kind": "text",
     "aa": 711,
     "text": "[N\\ir dieser gehört in unser Feld. Man teilt ein: Dinge, die über, außer und unter unserm Horizont sind — außer demselben : was wir nicht zu wissen bedürfen, unter demselben: was wir nicht wissen sollen. Dies geht schon auf Zweck, aufs Praktische.]",
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-055",
     "kind": "text",
     "aa": 711,
     "text": "1. logisch, die Bestimmung unsers logischen Horizonts [ — Verhältnis zum Erkenntnisvermögen erfordert Deutlichkeit der Abstraktion. Der Einbildungskraft würde dies schaden. Ästhetik braucht daher nur Klarheit].",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-056",
     "kind": "text",
     "aa": 711,
     "text": "2. ästhetisch, nach der Übereinstimmung mit unserm Geschmack.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s09-057",
     "kind": "text",
     "aa": 711,
     "text": "3. praktisch, nach der Angemessenheit unserer Erkenntnis mit unsern Zwecken.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s09-058",
     "kind": "text",
     "aa": 711,
     "text": "Den logischen Horizont können wir einteilen :",
     "ocrConf": 47
    },
    {
     "id": "dohna-s09-059",
     "kind": "text",
     "aa": 711,
     "text": "1. in den historischen, und der kann a) objektiv [z. B. Naturkunde, Geschichte], b) subjektiv sein.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-060",
     "kind": "text",
     "aa": 711,
     "text": "2. in den rationalen [objektiv rational, sofern er kann a priori eingesehn werden].",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s09-061",
     "kind": "text",
     "aa": 711,
     "aaEnd": 712,
     "pages": [
      {
       "p": 712,
       "i": 190
      }
     ],
     "ms": [
      {
       "p": 22,
       "i": 370,
       "raw": "83",
       "inferred": true
      }
     ],
     "text": "Der historische ist ungleich weitläuftiger, als der rationale [entweder der der reinen Vernunft oder Metaphysik oder 2. der auf Erfahrung gegründete oder Physiologie]. In der Mathematik ist letzterer, in der Philosophie ersterer der weitläufigste. Das Feld der Mathematik ist unübersehbar. Kritik ist die Bestimmung des (Rational->Horizonts der menschlichen Erkenntnis. [Es gibt einen allgemeinen Horizont der Erkenntnisse des menschlichen Geschlechts. Den Horizont des menschlichen Erkenntnisses, was Erfahrung betrifft, nennt man Physik. Die Physik hat auch insofern ihre Grenzen, daß wir mit der Vernunft nicht einsehn, woher dies oder jenes Objekt.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s09-062",
     "kind": "text",
     "aa": 712,
     "text": "Den Rationalhorizont des menschlichen Erkenntnisses zu bestimmen ist eine der edelsten und schwersten Beschäftigungen des menschlichen Geistes. Hier pflegen die Metaphysiker sich zu verlieren. — Nur die Metaphysik oder ihre (Grundlage, die) Kritik der reinen Vernunft kann zeigen, wo die Grenzen der Vernunft anfangen und wo all ihr Vermögen aufhört. Man kann sich beschäftigen | mit | dem allgemeinen Horizont der Menschheit und von dem einzelner Menschen handeln. Gewisse Erkenntnisse, behaupten einige mit gänzlichem Unrecht, können wir zwar wissen, | sie | würden uns aber nicht nützen. [Viele Erkenntnisse und Wissenschaften würden nicht die Stufe erreicht haben, wenn man gleich anfangs nach ihrem Nutzen gefragt hätte. Dieser äußert sich oft erst dann, wenn sie zur Vollkommenheit gelangt sind.] Quaerit delirus et non respondet Homerus. Das menschliehe Geschlecht muß alle uns nützlichen Erkenntnisse lernen [um dadurch seinen Verstand zu kultivieren. — Kein Wissen irgendeiner Art kann je ganz zweckwidrig sein (im allgemeinen)]. Freilich für einzelne Menschen kann vielleicht manches entbehrlich sein. Die Menschen teilen die Kenntnisse in verschiedene Felder. Zu jedem finden sich Liebhaber, nachdem sie Neigungen zu dieser oder jener Sache haben.",
     "dehyphenated": 6,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s10",
   "title": "[Ute Stunde, den lOten Mai]",
   "titleSrc": "heading",
   "headings": [
    "[Ute Stunde, den lOten Mai]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s10-001",
     "kind": "heading",
     "aa": 712,
     "text": "[Ute Stunde, den lOten Mai]"
    },
    {
     "id": "dohna-s10-002",
     "kind": "text",
     "aa": 712,
     "text": "[Noch kann man den Horizont menschlicher Erkenntnis teilen in :",
     "ocrConf": 52
    },
    {
     "id": "dohna-s10-003",
     "kind": "text",
     "aa": 712,
     "text": "1. Horizont der gesunden Vernunft,",
     "ocrConf": 43
    },
    {
     "id": "dohna-s10-004",
     "kind": "text",
     "aa": 712,
     "text": "2. der Wissenschaften.]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s10-005",
     "kind": "text",
     "aa": 712,
     "text": "Wir können gewissermaßen sagen, der Anfang der Welt ist da, wo die Schreibekunst aufgekommen ist. Es gibt gar keine Kenntnisse, die wir nicht wissen sollen, denn im allgemeinen ist es unsre Pflicht alles zu wissen, was wir nur wissen können. Wohl aber gibt es Kenntnisse, die wir entbehren können und daher nicht wissen dürfen [die außer unserm Horizonte sind nach der obigen Erklärung] (wie z. B. der Arzt das Hebräische entbehren kann, also nicht wissen darf).",
     "ocrConf": 46
    },
    {
     "id": "dohna-s10-006",
     "kind": "text",
     "aa": 713,
     "text": "Die Manier, wie Kenntnisse auf Universitäten gelehrt werden, nennt man fabrikenmäßig, weil hier nämlich viele sind, die an einem Zweck gemeinschaftlich arbeiten.",
     "ocrConf": 52
    },
    {
     "id": "dohna-s10-007",
     "kind": "text",
     "aa": 713,
     "ms": [
      {
       "p": 23,
       "i": 0
      }
     ],
     "text": "Größe der Erkenntnis. Es kommt dabei nicht auf die Menge, sondern auf den Grad an. [Non multa, sed multum. Die äußerliche extensive Größe der Erkenntnis zeigt die allgemeine Ausbreitung derselben unter viele Menschen an. — Dies ist der jetzige Zustand Aufklärung — der Grad der Kultur — der nach den Talenten des Subjekts den Menschen fähig macht zu seinen Zwecken als Mensch und als Bürger.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s10-008",
     "kind": "text",
     "aa": 713,
     "aaEnd": 714,
     "pages": [
      {
       "p": 714,
       "i": 1934
      }
     ],
     "text": "Praktische Regeln in Ansehung des Horizonts der menschlichen Erkenntnis. Man muß den Horizont seiner Erkenntnis nicht zu früh bestimmen, denn man weiß nicht, wozu man ins Künftige besondres Talent haben wird. Noch mein' kann sich die Neigung ändern. [Erst recht viel lernen, um dann zu sehn, wozu man die meiste Lust hat — doch nicht desxütorisch — von einem aufs andre. — Alles Studieren nach Regeln kultiviert den Verstand — daher Grammatik auch dem künftigen Künstler nützlich. Man lernt gewöhnlich erst, wenn es zu spät ist, seinen Talenten, Neigungen und Verhältnissen f gemäß zu handeln, überhaupt sie zu kennen.] Hat man aber einmal bestimmt den Horizont seiner Erkenntnis angenommen, so muß man ihn auch nicht leicht verändern. Man muß den Horizont andrer nicht nach dem seinigen messen. Hauptsächlich muß man das nicht gleich für unnütz ausgeben, was uns in gewisser Absicht entbehrlich scheint. Wenn man immer den Nutzen hätte mit Händen greifen wollen, so wäre man in keiner Wissenschaft hochgekommen. Kann es Dinge geben, von denen man sagen kann, wir wollen sie nicht wissen ? — lobenswürdige Unwissenheit ? Nie ist Unwissenheit lobenswürdig. [Also gibt es wohl eine ignoratio inculpabüis (untadelhaft), aber niemals eine ignorantia laudabihs.] Nicht sie, sondern die Kenntnis seiner Unwissenheit ist lobenswürdig [und sie erfordert viel Kenntnis]. Wer bis dahin kommt, macht den Schritt vom Felde der Wissenschaft zum Felde der Weisheit. Diejenigen, welche durch Eigendünkel aufgebläht sind, nennen andre gewöhnlich Idioten. [So nennt man Menschen, die, wenn sie auch viel Kenntnisse — doch nicht Wissenschaft haben, Ignorant, wer auch jene nicht hat. Überhaupt heißt Ignorant derjenige, der in Ansehung der Wissenschaft, die er profitiert, unwissend ist. — Idiot ist das gegen Vielwisser, was der Laicus gegen den Clericus ist oder was Literatus ist, einer der lesen und schreiben kann — damals viel!] Polyhistorie ist historische Vielwisserei, rationale Viel wisserei würde Polymathie [dahin gehörte Philosophie und Mathematik] und (beides zusammengenommen) die Allwisserei (wenn sie sich denken ließe) würde Pansophie heißen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 46
    },
    {
     "id": "dohna-s10-009",
     "kind": "text",
     "aa": 714,
     "ms": [
      {
       "p": 24,
       "i": 0
      }
     ],
     "text": "Der Polyhistor muß 1. Humanist sein, d. h. er muß Kenner der Alten und der schönen Künste (Dicht-, Redekunst) sein.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s10-010",
     "kind": "text",
     "aa": 714,
     "text": "[Humaniora sind vorzüglich zur Kenntnis des Geschmacks und zur Teilnahme an den Empfindungen andrer. Dies letztere, nämlich das Vermögen seine Empfindungen (Kenntnisse t und Gefühle) andern mitzuteilen, macht gerade das Charakteristische des Humanisten. — Der Humanist ist es dadurch, daß seine Erkenntnis Wissenschaft, Gelehrsamkeit ist. — ]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s10-011",
     "kind": "text",
     "aa": 714,
     "text": "Das Pendant zum Humanisten ist der Belletrist. Er geht aber nicht wie jener auf das selbständige Schöne, sondern nur auf das Wandelbare nach Verschiedenheit des Geschmacks, der sich nach der Mode richtet.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s10-012",
     "kind": "text",
     "aa": 714,
     "text": "[Der Belletrist ist nur der Affe vom Humanisten — bloßer Dilettant. Man kann sich nur zum einen oder zum andern entschließen. Um nicht Pedant zu werden, treibt der Belletrist bloß galante Studia. Die galante Manier ist nichts anders, als geschmackvolle Popularität. Scholastische Vollkommenheit (Angemessenheit zu den Regeln (zum Objekt) bleibt immer das erste Requisit der Erkenntnis, ebenso wie bei der Sprache zuerst grammatische Richtigkeit gefordert wird — dann Eleganz. Die Popularität (Angemessenheit zum Subjekt) muß Herablassung eines Erkenntnisses sein, sofern es schon scholastische Vollkommenheit hat. Wer sie | scholastische Vollkommenheit | (im Umgange) für die einzige hält, heißt Pedant : er kann sich immer nur dem mitteilen, der die Schule mitgemacht. Galanterie ist ebensowohl ein Fehler.]",
     "dehyphenated": 4,
     "ocrConf": 48
    },
    {
     "id": "dohna-s10-013",
     "kind": "text",
     "aa": 714,
     "text": "Der Polyhistor muß sein",
     "ocrConf": 39
    },
    {
     "id": "dohna-s10-014",
     "kind": "text",
     "aa": 714,
     "text": "2tens ein Linguist, ein Kenner der alten Sprachen, weil es hier auf selbständige bleibende Muster ankommt.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s10-015",
     "kind": "text",
     "aa": 714,
     "aaEnd": 715,
     "pages": [
      {
       "p": 715,
       "i": 462
      }
     ],
     "ms": [
      {
       "p": 25,
       "i": 631,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "3. Der Litteratorist Bücherkenner (Magliabecchi, ein berühmter Buchführer zu Florenz, hatte ein horrendes Gedächtnis). Philologie ist der Inbegriff aller Instrumente der Gelehrsamkeit, der Humanist der Kenner von der Bildung des Geschmacks. Humanität ist immer zugleich populär. Nur tote Sprachen können Muster des Geschmacks werden, lebende nicht, denn diese wandeln sich gar zu oft, und Wörter, deren Bedeutung edel war, haben eine niedere Bedeutung. Um einen dauernden Geschmack zu haben, muß man die Alten studieren. Wenn die Alten sollten verloren gehn, so muß man das Einreißen der Barbarei befürchten. In Hindostan ist auch eine daselbst ehedem übliche und gegenwärtig ebenfalls tote Sprache [deren Ursprung unbekannt] (Sanskrit), die sehr vollkommen ist, aber nur von wenig Braminen gesprochen wird. Den Belletrist nennt man den Dilettanten, er findet Vergnügen und Geschmack an den schönen Künsten.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s10-016",
     "kind": "text",
     "aa": 715,
     "text": "Wir können das Talent des Menschen einteilen, indem es geneigt ist :",
     "ocrConf": 50
    },
    {
     "id": "dohna-s10-017",
     "kind": "text",
     "aa": 715,
     "text": "1 . zur Wissenschaft oder",
     "ocrConf": 36
    },
    {
     "id": "dohna-s10-018",
     "kind": "text",
     "aa": 715,
     "text": "2. zur Kunst [auf diesen beiden Stücken beruht alle Kultur].",
     "ocrConf": 34
    },
    {
     "id": "dohna-s10-019",
     "kind": "text",
     "aa": 715,
     "text": "Diese | die Kunst | kann man nun einteilen :",
     "ocrConf": 37
    },
    {
     "id": "dohna-s10-020",
     "kind": "text",
     "aa": 715,
     "text": "a) in freie Künste, artes liberales oder ingenuae [freie Kunst ist die Geschicklichkeit, die unmittelbar gefällt],",
     "ocrConf": 48
    },
    {
     "id": "dohna-s10-021",
     "kind": "text",
     "aa": 715,
     "text": "b) in Lohnkünste, artes mercenales serviles, die nur als Mittel zu irgendeinem eigennützigen Zweck gefallen können [Lohnkünste gefallen immer nur mittelbar, zu andern Absichten, ebenso alle Wissenschaften. Fast immer nur gefallen sie wegen ihrer Brauchbarkeit etc. Mathematik gefällt freilich unmittelbar, aber insofern könnte man sie auch zu den freien Künsten rechnen. Lohnkunst läßt sich bestellen — freie Kunst nicht — ihre Produkte können | wir | nicht nach Regeln machen wie jene.]",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s10-022",
     "kind": "text",
     "aa": 715,
     "text": "Diese Einteilung des Talents ist sehr delikat. Das Schöne ist das, was durch sich selbst gefällt. Dabei fragt man gar nicht nach dem Nutzen. Wenn man schon bei einer Kunst nach dem Nutzen fragt, so ist sie Brotkunst.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s10-023",
     "kind": "text",
     "aa": 715,
     "text": "Was die Wissenschaften betrifft, so lassen sich diese einteilen in:",
     "ocrConf": 43
    },
    {
     "id": "dohna-s10-024",
     "kind": "text",
     "aa": 715,
     "text": "1 . historische und",
     "ocrConf": 20
    },
    {
     "id": "dohna-s10-025",
     "kind": "text",
     "aa": 715,
     "text": "2. Vernunftwissenschaften.",
     "ocrConf": 53
    },
    {
     "id": "dohna-s10-026",
     "kind": "text",
     "aa": 715,
     "text": "Der Inbegriff der historischen Wissenschaften ist Gelehrsamkeit. Der Inbegriff der Vernunftwissenschaften hat keinen besondern Namen, denn ihre Teile Philosophie und Mathematik sind gar zu sehr verschieden. Der Inbegriff aller Wissenschaften heißt Polyhistorie, wovon wir schon oben gesprochen haben.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s10-027",
     "kind": "text",
     "aa": 715,
     "text": "Der Autor redet jetzt vom Pedanten. Er ist 1. Schulpedant, 2. Höflichkeitspedant. Z. B. es spricht jemand wie ein Buch, immer im Zwange der Regeln. [Man findet dergl. bei Hofe, z. B. Kammerherren.]",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s10-028",
     "kind": "text",
     "aa": 716,
     "ms": [
      {
       "p": 26,
       "i": 0
      }
     ],
     "text": "Von der Pedanterie",
     "ocrConf": 38
    },
    {
     "id": "dohna-s10-029",
     "kind": "text",
     "aa": 716,
     "text": "[S. 24. § 65.]",
     "ocrConf": 18
    },
    {
     "id": "dohna-s10-030",
     "kind": "text",
     "aa": 716,
     "text": "Unter einem Pedanten verstehen wir nicht einen Unwissenden (daher ist die Erklärung des Autors unrichtig). Aber er wird doch verlacht. Woher kommt das ? Das Wort Pedant kommt aus dem Italienischen und heißt eigentlich magister pedanius. Dieser war nun lediglich ein Schulmann, gar nicht für die Welt, weil er nicht an den Tisch der Herrschaft kam, sondern meistenteils bei dem Gesinde war.",
     "dehyphenated": 2,
     "ocrConf": 49
    },
    {
     "id": "dohna-s10-031",
     "kind": "text",
     "aa": 716,
     "text": "[Pedanterie ist Peinlichkeit in der Form. Keine Nation inkliniert so sehr dazu, als die deutsche. Pedanterie findet in allen Fächern statt, vor allen Dingen im Militär und bei Juristen. — Charlatan, der Ostentator einer armseligen Erkenntnis.]",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s10-032",
     "kind": "text",
     "aa": 716,
     "text": "Pedanterie ist die unnützliche Genauigkeit (Peinlichkeit) in Formalien. Die zweckmäßige Genauigkeit (Pünktlichkeit) in Formalien ist Gründlichkeit. Also haben beide einige Ähnlichkeit. In vielen Fällen ist in den Formalien viel Willkürliches. Sie sind in scholastischer Absicht nützlich, aber nicht in populärer, d. h. im gesellschaftlichen Umgange. Peinlichkeit und Pünktlichkeit ist also wohl zu unterscheiden.",
     "dehyphenated": 4,
     "ocrConf": 46
    },
    {
     "id": "dohna-s10-033",
     "kind": "text",
     "aa": 716,
     "text": "Daß der Übergang von der Pünktlichkeit zur Peinlichkeit sehr leicht sei, ist wohl wahr. Man kann unmöglich alles nach Formalien lernen, z. B. einen Brief schreiben. Daher sieht man den großen Unterschied zwischen dem hölzernen Brief des Schülers und dem fließenden seiner Schwester [obgleich dieser gar nicht orthographisch sein mag]. Also bedürfen die Musen doch der Gesellschaft der Grazien, und diese bestehen darin, daß der Schulstaub, das Scholastische von der Erkenntnis Avegge wischt und sie populär, allgemeinfaßlich werde. [Darum aber muß doch der Grund der Erkenntnis schulgerecht sein.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s10-034",
     "kind": "text",
     "aa": 716,
     "ms": [
      {
       "p": 27,
       "i": 0
      }
     ],
     "text": "Pedanterie ist nicht dem gelehrten Stande allein, sondern allen Ständen eigen. Ein Pinsel ist der, der nichts aus sich selbst schöpfen, sondern bloß nachahmen kann, und wenn er was von seinen Erkenntnissen vorbringen will, gar nicht von den Schulformeln abgehen kann. [D. umbraticus — die Bezeichnung eines Pedanten. — Galanterie bedeutet eine Verschönerung desjenigen, das für sich kein schöner Gegenstand ist.] Charlatanerie ist Prahlerei und Ostentation. Belletristerei gehört zu dem modemäßigen Studio, welches sich so sehr oft verändert. Je mehr eine Wissenschaft (nicht) dem Inhalte nach, sondern dem Baume nach ausgebreitet wird, je seichter wird sie.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s11",
   "title": "Von der Größe der gelehrten Erkenntnis",
   "titleSrc": "heading",
   "headings": [
    "Von der Größe der gelehrten Erkenntnis"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s11-001",
     "kind": "heading",
     "aa": 717,
     "text": "Von der Größe der gelehrten Erkenntnis"
    },
    {
     "id": "dohna-s11-002",
     "kind": "text",
     "aa": 717,
     "text": "Weitläufigkeit ist die extensive Größe, die in der Vielheit, in dem Mannigfaltigen besteht [von vielen Dingen wissen]. Die intensive Größe geht auf den Grad [viel von einem Dinge wissen. — Non multa, sed multum. Die Größe des Umfangs schwächt den Grad — bringt Seichtigkeit hervor. Es hat im ganzen mehr Nutzen, wenn einige wenige tiefe Erkenntnis in der Wissenschaft haben — welche sie mit Gründlichkeit behandeln — als wenn sie allgemein verbreitet sind.]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s11-003",
     "kind": "text",
     "aa": 717,
     "text": "Mathematik ist z. B. extensive Größe. Man muß die Vielheit der Erkenntnisse restringieren, um eine Einheit hervorzubringen.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s11-004",
     "kind": "text",
     "aa": 717,
     "ms": [
      {
       "p": 28,
       "i": 323,
       "raw": "og",
       "inferred": true
      }
     ],
     "text": "Der Autor redet immer von einer gelehrten Erkenntnis. Aber dieser Ausdruck ist uneigentlich. Die Erkenntnis kann scientifisch genannt werden, wenn sie wissenschaftlich und systematisch ist. Dazu gehört nun ein Hauptprinzip, so wie man z. B. in der Geschichte zum Hauptprinzip bürgerliche Verfassung annimmt. Die Geschichte kann also auch als Wissenschaft angesehn werden, wenn sie auf ein System gebracht wird, was man von einem Hauptprinzip ableitet.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s11-005",
     "kind": "text",
     "aa": 717,
     "text": "Die ganze Elementar lehre ist nichts weiter als gemeine Erkenntnis, und so sollte eigentlich die ganze Logik abgehandelt werden, so daß der gemeine Mann ohne andre Erkenntnisse sie verstehn kann. In Ansehung der Objekte kann ein Erkenntnis extensiv groß sein, in Ansehung der Objekte — ihrer Vielheit und vielfältigen Anwendung, wie bei der Mathematik. Auch Popularität geht nicht auf wieviel <(quantum), sondern wie vielerlei <quot> wir wissen. Dies dient dazu, es in Gesellschaft zu gebrauchen. In einem Zeitalter kann die Aufklärung extensiv groß, wenn sie sich nämlich auf alle erstreckt, aber intensiv klein sein, weil nämlich keiner recht viel davon hat, sondern nur alle etwas wenig, sie sind sogenannte bureaux d'esprit, wie z. B. die Madame Geoffrin, die deswegen berühmt war. Geradso als wenn man Geld sehr platt schlägt, so nimmt es zwar einen großen Raum em, aber allenthalben ist es dünn und kann leicht lädiert werden. Die extensive Größe der Aufklärung kann man auch die subjektive nennen, indem sie sich auf alle Subjekte erstreckt, die intensive aber die objektive, die auf den Grad geht.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-006",
     "kind": "text",
     "aa": 717,
     "ms": [
      {
       "p": 29,
       "i": 0
      }
     ],
     "text": "Der Autor redet nun wieder : Von der Fruchtbarkeit und Wichtigkeit einer Erkenntnis",
     "ocrConf": 36
    },
    {
     "id": "dohna-s11-007",
     "kind": "text",
     "aa": 717,
     "aaEnd": 718,
     "pages": [
      {
       "p": 718,
       "i": 136
      }
     ],
     "text": "Fecunditas et dignitas. Beide gehn auf das intensiv Große. Erstere beruht auf der Menge (der Folgen), letztere auf der [Wichtigkeit der Folgen]. Wir haben auch Erkenntnisse, die fruchtbar und wichtig zugleich sind. [Alles ist logisch wichtig, was den Verstand kultiviert. Daher ist es die Mathematik in einem ganz vorzüglichen Grade, wegen ihrer Klarheit, Deutlichkeit, Gewißheit. — Deutlichkeit: wo die Merkmale des Begriffs klar sind. Wenn die Merkmale von den Merkmalen es sind, nannte es Wolff Vollständigkeit — indes können die Teilbegriffe immer noch andere unter sich haben und hier ist also | keine | Grenze bis zu den einfachen Vorstellungen.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-008",
     "kind": "text",
     "aa": 718,
     "text": "Wir kommen jetzt zu einer Materie, die schon zur eigentlichen Logik gehört, nämlich",
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-009",
     "kind": "text",
     "aa": 718,
     "text": "Von der Wahrheit der gelehrten Erkenntnis",
     "ocrConf": 56
    },
    {
     "id": "dohna-s11-010",
     "kind": "text",
     "aa": 718,
     "text": "Die Logik fängt an mit den Idaren Begriffen, gibt aber keine Regeln, wie sie klar gemacht werden. Denn das Bewußtsein der Vorstellungen setzt die Logik voraus. Also lehrt die Logik eigentlich nur von der Deutlichkeit der Begriffe.",
     "ocrConf": 50
    },
    {
     "id": "dohna-s11-011",
     "kind": "text",
     "aa": 718,
     "text": "Wir haben nun geredet von der Quantität und Qualität der Erkenntnis und kommen jetzt zur",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s11-012",
     "kind": "text",
     "aa": 718,
     "text": "III. Relation der Vorstellungen in unserm Erkenntnis. Die Übereinstimmung der Vorstellungen mit ihrem Objekt heißt die Wahrheit. — Wir wollen nun in diesem Kapitel ein Kriterium der Wahrheit haben, was in allen Erkenntnissen ohne Unterschied gilt. [Die Skeptiker sagten : Alle Urteile würden aufs Geratewohl gemacht — SiaÄXr|Ar), immer das Gegründete auf dem Grunde und dieser wieder auf dem Gegründeten, also im Zirkel.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s11-013",
     "kind": "text",
     "aa": 718,
     "ms": [
      {
       "p": 30,
       "i": 0
      }
     ],
     "text": "[Es gibt aber ein allgemeines formales Kriterium der WTahrheit, die Übereinstimmung derselben mit sich selbst — ein materiales, Übereinstimmung mit dem Objekte kann nicht allgemein möglich sein — denn es müßte (wenn es allgemein wäre), auch dann stattfinden, wenn ich von aller Materie abstrahiere, — und die Übereinstimmung meiner Erkenntnis vom Objekt mit meiner Erkenntnis vom Objekt wäre <ein) tautologisches Kriterium. Dies warfen daher die Skeptiker um, jenes konnten sie nicht angreifen.]",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-014",
     "kind": "text",
     "aa": 718,
     "aaEnd": 719,
     "pages": [
      {
       "p": 719,
       "i": 323
      }
     ],
     "text": "Das allgemeine Kriterium der Wahrheit wird eigentlich nur immer formal sein, von allem Inhalt und Unterschied der Erkenntnis abstrahieren. Es wird mir also nie sagen, ob mein Erkenntnis mit dem Objekt übereinstimme, sondern ob mein Erkenntnis mit mir selbst übereinstimme. Das allgemeine Kriterium der Wahrheit, wird nicht ein Organon sein, sondern nur die conditio sine qua non, die unumgängliche Bedingung der Wahrheit. Diese ist, daß wir im Denken mit uns selbst einstimmig sind. Wie könnte auch eine Erkenntnis, die mit {sich selbst uneins ist, mit dem Objekt stimmen ?). Das Kriterium muß bestehen in der Regel, mit welcher allein der Verstand im Denken mit sich selbst stimmt. Es ist nicht hinreichend material, aber es ist doch unumgänglich notwendig. Ein Materialkriterium der Wahrheit kann unmöglich allgemein sein und für alle Objekte gelten. Man kann wohl materiale Kriterien der Wahrheit haben, aber sie können nicht allgemein sein f. Es würden die sein, die wir von der Beschaffenheit des Objekts in Rücksicht auf die Sinne haben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s11-015",
     "kind": "text",
     "aa": 719,
     "ms": [
      {
       "p": 31,
       "i": 0,
       "raw": "3i",
       "inferred": true
      }
     ],
     "text": "[Stunde]",
     "ocrConf": 20
    },
    {
     "id": "dohna-s11-016",
     "kind": "text",
     "aa": 719,
     "text": "Durch Anschauung wird das Objekt gegeben und durch Begriffe gedacht. Das allgemeine Kriterium der Wahrheit ist bloß negativ. Die Skeptiker kann man einteilen in Pyrrhonisten und Akademiker, welche letztere es am weitesten trieben. Der Satz des Widerspruchs ist das erste formale Kriterium der Wahrheit. Zur Wahrheit ist es nicht genug, daß ein Urteil möglich sei — die Wahrheit könnte man nennen die logische Wirklichkeit. Sagt man: posito ein Dreieck hat 6 Seiten, so ist dies ein problematisches Urteil, sagt man : ein Hexagon hat 6 Seiten, so ist's ein Satz.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-017",
     "kind": "text",
     "aa": 719,
     "text": "Das erste Kriterium der Wahrheit (nach dem Satz des Widerspruchs)",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s11-018",
     "kind": "text",
     "aa": 719,
     "text": "ist das Prinzip der problematischen Urteile — Möglichkeit. Das",
     "ocrConf": 39
    },
    {
     "id": "dohna-s11-019",
     "kind": "text",
     "aa": 719,
     "text": "2. ist das Prinzip der assertorischen Urteile, worin die logische Wirklichkeit [— Wahrheit].",
     "ocrConf": 42
    },
    {
     "id": "dohna-s11-020",
     "kind": "text",
     "aa": 719,
     "text": "Das 2te Prinzip ist der Satz des zureichenden Grundes.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s11-021",
     "kind": "text",
     "aa": 719,
     "text": "[Ursache ist das, was allen Erscheinungen zum Grunde liegt.]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s11-022",
     "kind": "text",
     "aa": 719,
     "text": "3. Ein jedes Erkenntnis hat irgendeine Folge und wenn nur eine Folge falsch ist, so ist auch das Erkenntnis falsch. Wenn alle Folgen wahr sind, so ist das Erkenntnis wahr — aber wer kann alle Folgen wissen ? Dazu gehört Allwissenheit. Man kann also aus den Folgen auf die Gründe schließen. Aus der Falschheit der Folgen kann man nur auf die Falschheit des Grundes schließen, aber aus dieser auf die Wahrheit des Gegenteils. [ — 106]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s11-023",
     "kind": "text",
     "aa": 719,
     "aaEnd": 720,
     "pages": [
      {
       "p": 720,
       "i": 130
      }
     ],
     "ms": [
      {
       "p": 32,
       "i": 0,
       "raw": "&",
       "inferred": true
      }
     ],
     "text": "[ad § 109.] Ein falsches Urteil ist allemal ein Irrtum. Man muß aber in diesem Falle beweisen, daß es gegen das Kriterium der Wahrheit streite. Zum Irrtum wird erfordert, daß wir ein falsches Urteil für wahr halten. Wir sind leider mit Irrtümern angefüllt, aber damit wir ihnen vorbeugen, müssen wir zuvor wissen, woher sie entsprungen sind.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s11-024",
     "kind": "text",
     "aa": 720,
     "text": "[Wahrheit und Irrtum sind in Anschauungen unmöglich enthalten — sondern in den Urteilen. Daher in einer Akademie der Wissenschaften mehr Irrtümer als in einem Dorf voll Bauern, weil dort mehr geurteilt wird — wer nie urteilt, wird auch nie irren.]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s11-025",
     "kind": "text",
     "aa": 720,
     "text": "Weder Wahrheit noch Irrtum beruht in den Begriffen unsers Verstandes, sondern nur in seinen (Urteilen). Urteil ist eine Handlung des Verstandes. Wahrheit aber nach ihrem formalen Kriterium ist die Übereinstimmung eines Urteils mit den Gesetzen des Verstandes. Irrtum aber ist eine Abweichung des Urteils von den Gesetzen des Verstandes. — [Wenn ich also den Verstand isoliere, so daß ich die Sinnlichkeit wegnehme, so könnte er nicht irren (denn keine Kraft kann eine Wirkung tun ohne nach gewissen Gesetzen) — nur dann, wenn ich einen Einfluß der Sinnlichkeit für einen actus des Verstandes halte, so ist dies Irrtum. Alle unsere Irrtümer sind Lenkungen der Urteile in die Diagonale — in die Quere (das Wort kommt vielleicht aus dem englischen Square — Quadrat) — ].",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s11-026",
     "kind": "text",
     "aa": 720,
     "ms": [
      {
       "p": 33,
       "i": 534
      }
     ],
     "text": "Wie ist es möglich, daß eine Kraft von ihren eigenen Gesetzen abgeht ? — Die Schranken des menschlichen Verstandes sind nicht der Grund der Irrtümer. Sie sind zwar Gründe eines großen Mangels unserer Erkenntnis < — der Unwissenheit (die wir nur nach vieler Vernunft -Wissenschaft erkennen)), aber nicht des Widerspruchs. Da es nun nichts Negatives ist, und der Verstand allein für sich selbst nicht irren kann, so muß es etwas Positives sein — die Sinnlichkeit. Das oppositum des Verstandes urteilt aber gar nicht. Nun haben wir aber keine andre Quelle. Wir sehen also, daß es durch Verbindung des Verstandes und der Sinnlichkeit [so nennen wir das Subjektive unserer Vorstellungen] geschieht. Soferne dieser Grund in der Sinnlichkeit liegt, nennen wir ihn Sehern. Dieser wird gewöhnlich erklärt : das Subjektive, was fälschlich für etwas Objektives gehalten wird. [Der Grund alles Irrtums ein subjektiver Grund unsers Urteils, den wir für einen objektiven ansehn. Ein Mensch glaubt leicht, was er wünscht. Wunsch ein subjektiver | Grund, | aber zum Glauben muß man einen objektiven haben.]",
     "dehyphenated": 5,
     "ocrConf": 43
    },
    {
     "id": "dohna-s11-027",
     "kind": "text",
     "aa": 720,
     "aaEnd": 721,
     "pages": [
      {
       "p": 721,
       "i": 136
      }
     ],
     "text": "Die Sinnlichkeit hat auch ihre eigenen Gesetze. Verbunden in einem Urteile können sie wohl miteinander übereinstimmen. Lediglich in der Verbindung zweier ungleichartiger Bestimmungsgründe. Die Materie der Irrtümer ist also weder wahr noch falsch.",
     "joined": [
      "layout"
     ],
     "ocrConf": 46
    },
    {
     "id": "dohna-s11-028",
     "kind": "text",
     "aa": 721,
     "text": "[Porismata : Alle Irrtümer sind verschuldet — denn alle Urteile sind willkürlich und nur durch Urteile sind Irrtümer möglich.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s11-029",
     "kind": "text",
     "aa": 721,
     "text": "Kein Irrtum ist ein gänzlich falsches Urteil. Das Urteil kann in der Form richtig sein.]",
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s12",
   "title": "[Stunde, Freit., d. 18. Mai]",
   "titleSrc": "heading",
   "headings": [
    "[Stunde, Freit., d. 18. Mai]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s12-001",
     "kind": "heading",
     "aa": 721,
     "text": "[Stunde, Freit., d. 18. Mai]"
    },
    {
     "id": "dohna-s12-002",
     "kind": "text",
     "aa": 721,
     "text": "Ein jeder Irrtum muß erklärt werden. Wir haben innere Merkmale der Wahrheit, die in unserm Verstände gegründet sind, und 2tens äußere Merkmale. Zu den erstem gehört der Satz des Widerspruchs {das logische Kriterium der Möglichkeit (problemat.)) und der 2te Satz, daß das Urteil als Satz immer müsse gegründet sein {das logische Kriterium der Wirkhchkeit (der assertorischen Urteile), Prinzip des zureichenden Grundes). Der 3te{das logische Kriterium der Wahrheit {Notwendigkeit)), daß, wenn man die Wahrheit eines Satzes nicht aus den Gründen erkennen kann, so geht es doch aus den Folgen. [Nicht durch Wahrheitssinn kann man hier urteilen — so wenig als Pflicht durch das sittliche Gefühl. Nie kann man durch die Sinne urteilen, nur durch den Verstand. — ]",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s12-003",
     "kind": "text",
     "aa": 721,
     "text": "Die äußern Kriterien (Merkmale) der Wahrheit bestehen in der Zusammenstimmung der Urteile andrer mit den unsrigen. Dies ist eigentlich kern logisches, sondern psychologisches Kriterium. Bloß dadurch, daß man sein Urteil mit dem eines andern vergleicht, erkennt man, ob der Bestimmungsgrund unsers Urteils subjektiv oder objektiv sei: der letztere ist allgemein gültig, | der | erstere nicht. [(Viele Ausnahmen von einer Regel zeigen Mangelhaftigkeit derselben an.)]",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "dohna-s12-004",
     "kind": "text",
     "aa": 721,
     "text": "Sinnlichkeit wird in der Logik das Subjektive unsrer f Erkenntnis genannt.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s12-005",
     "kind": "text",
     "aa": 721,
     "text": "[Principium rationati: nihil sine ratione, alles muß seinen Grund haben. Dies ist das Kriterium aus den Folgen. Es ist negativ und sicher. Sind die Folgen falsch, so ist es gewiß auch der Grund. Nicht umgekehrt kann man so schließen. Sind die Folgen wahr usw. Denn es können mehr Gründe sein. Principium rationis: jeder Satz ist selbst Grund, hat seine Folgen.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s12-006",
     "kind": "text",
     "aa": 721,
     "ms": [
      {
       "p": 34,
       "i": 0
      }
     ],
     "text": "[Es ist ein Trieb der Natur, ein Beruf, seine Erkenntnisse andern mitzuteilen — daher die Freiheit der Mitteilung ein Recht der Menschheit (nur dann etwa, wenn es dem Staatsinteresse ganz zuwider sein könnte, dürfte ein Verbot von Seiten der Obrigkeit stattfinden.)",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s12-007",
     "kind": "text",
     "aa": 722,
     "text": "Besitz der Urteilskraft ist das größte Geschenk der Natur. Es kann Mangel daran bei sonst gutem Verstände stattfinden.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s12-008",
     "kind": "text",
     "aa": 722,
     "text": "Man kann in gewisser Art von allen Erkenntnissen sagen, daß man sie erst dann recht versteht, wenn man sie selber machen kann, d. h. nicht bloß kopieren, sondern aus sich ableiten.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s12-009",
     "kind": "text",
     "aa": 722,
     "text": "Kein Urteil wäre zu finden, was ganz falsch wäre. Dies kann solange nicht stattfinden, als unsre Urteile aus dem Verstände abgeleitet sind.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s12-010",
     "kind": "text",
     "aa": 722,
     "text": "Man kann niemanden recht vom Gegenteil seiner Meinung überzeugen, wenn man ihm nicht sagt, wie er dazu gekommen, aus seinem besondern Gesichtspunkt, daß also sein Urteil nicht objektiv, sondern lediglich subjektiv sei. So wäre nach unserm subjektiven Urteil unser letzter Zweck Glückseligkeit, das behaget uns wohl, das wollen wir. Wenn wir aber darauf gehen, was wir sollen, auf das Objektive, so muß Sittlichkeit, Pflicht diesen Platz einnehmen. Durch die eben angegebene Methode gewinnt man an kritischem Verstandes vermögen. So sagt man, daß in einem großen Buch große Irrtümer wären, und dies ist sehr natürlich.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s12-011",
     "kind": "text",
     "aa": 722,
     "text": "Nun folgt ein Unterschied zwischen",
     "ocrConf": 52
    },
    {
     "id": "dohna-s12-012",
     "kind": "text",
     "aa": 722,
     "text": "1. der partialen (tolerabiliter wahr, z. B. bei Messungen) [da näm-Hch die Annahme des partial Wahren als totalen Wahren dem Zweck nicht widerspricht — obwohl dies eine gewisse Unrichtigkeit in sich faßt. — ] und",
     "ocrConf": 43
    },
    {
     "id": "dohna-s12-013",
     "kind": "text",
     "aa": 722,
     "text": "2. der totalen Wahrheit.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s12-014",
     "kind": "text",
     "aa": 722,
     "text": "Jemand kann die Wahrheit, aber nicht die ganze Wahrheit sagen. Aber man muß besonders darauf sehn, daß sie nie den Zwecken der Erkenntnis zuwider läuft.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s12-015",
     "kind": "text",
     "aa": 722,
     "ms": [
      {
       "p": 35,
       "i": 0
      }
     ],
     "text": "Jetzt redet der Autor vom",
     "ocrConf": 44
    },
    {
     "id": "dohna-s12-016",
     "kind": "text",
     "aa": 722,
     "aaEnd": 723,
     "pages": [
      {
       "p": 723,
       "i": 743
      }
     ],
     "text": "genauen und groben Erkenntnis. Letzteres zeigt noch nicht an, daß es etwas Falsches enthalte, sondern nur, daß es nicht ganz wahr sei. Jedes Erkenntnis ist entweder cognitio vaga oder cognitio determinata. So z. B. medium tenuere beati, was ist gut und was ist zuviel und zu wenig, das wissen solche Menschen nicht. Dies ist eine regula vaga, die gar nicht determiniert, bloß tautologische Weisheit. Sei weise, mache dich vollkommen ! Nun, worin besteht das ? Einer nimmt es so, der andere anders. Auch determinierte Regeln können sein regulae late und stricte determinatae. Von der ersten Art sind viele Definitionen. Ein Erkenntnis heißt exakt, wenn kein Spielraum für den Irrtum darin enthalten. Eine Erkenntnis heißt genau in Ansehung des Objekts, heißt subtil in Ansehung des »Subjekts, wozu viel Aufmerksamkeit gehört. Wer das Kleine unzweckmäßig zum Gebrauch seiner Erkenntnis macht, heißt Mikrolog. Wenn etwas praktisch ist, so kann man Subtilität nicht tadeln.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "dohna-s12-017",
     "kind": "text",
     "aa": 723,
     "ms": [
      {
       "p": 36,
       "i": 0
      }
     ],
     "text": "[Stunde, d. 21ten Mai]",
     "ocrConf": 28
    },
    {
     "id": "dohna-s12-018",
     "kind": "text",
     "aa": 723,
     "text": "Kasuistik besteht in einer Menge unnützer Subtilitäten, wo man sich Fälle ausgedacht hat, die im gemeinen Leben gar nicht vorkommen. Es gab Zeitalter, wo Subtilitäten und Mikrologie erstaunlich viel galten.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s12-019",
     "kind": "text",
     "aa": 723,
     "text": "Es gibt eine gewisse Kleingeisterei, die man nicht immer anmerket. Die Leute nämlich, welche sie besitzen, können nie aus einem Stück der Erkenntnis auf das ganze System derselben Anwendung machen. Dies ist ein großer Probierstein, woraus man gleich auf den Geist des Menschen schließen kann. Es gibt Unterschiede zwischen Kopf und Geist. Kopf, das Vermögen des Verstandes, aber Geist das Vermögen der Prinzipien.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s12-020",
     "kind": "text",
     "aa": 723,
     "text": "[Ästhetisch wahr ist das, was mit dem allgemeinen Schein übereinstimmt, z. B. Auf- und Niedergehn der Sonne — es ist also sehr verschieden von der logischen Wahrheit. Vom Irrtum geht man nicht geradezu zur Wahrheit, sondern erst durch das Bewußtsein der Unwissenheit.]",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "dohna-s12-021",
     "kind": "text",
     "aa": 723,
     "text": "Eine in Ansehung des Objekts genaue Kenntnis (exacta) wird der rohen (rudi) entgegengesetzt. Cognitio vaga, keinem Dinge zu viel, keinem zu wenig tun zu, das ist doch fast gar nichts gesagt. Man nennt die Latitudinarier, die da glauben, daß der Gesetzgeber zu strenge gebiete, daß es zwischen seinen Gesetzen und ihrer Übertretung noch einen Spielraum gebe. Dabei ist nun freilich nichts Festes, und wir müssen uns immer Mühe geben, daß unsre Erkenntnis strikt, genau determiniert sei. Dies ist Vorzug der Geometrie.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s12-022",
     "kind": "text",
     "aa": 723,
     "text": "Dann hat man auch eine cognitio crassa — über Pausch und Bogen, eine Schätzung des Ganzen, ohne besondre Beurteilung des Einzelnen. [Die crasse Erkenntnis hat nicht allein keine exactitudo, sondern sie verdirbt auch die Menschen, indem sie zu Irrtümern Anlaß gibt.]",
     "ocrConf": 43
    },
    {
     "id": "dohna-s12-023",
     "kind": "text",
     "aa": 723,
     "aaEnd": 724,
     "pages": [
      {
       "p": 724,
       "i": 261
      }
     ],
     "ms": [
      {
       "p": 37,
       "i": 0,
       "raw": "3*",
       "inferred": true
      }
     ],
     "text": "Die Wahrheit kann Substantive und adjektive gebraucht werden, z. B. wenn wir uns die Wahrheit überhaupt oder die Wahrheit eines Satzes denken. Eine in Ansehung des Objekts bestimmte Erkenntnis heißt Wahrheit. Diese Rationalerkenntnis ist jederzeit apodiktisch, weil wir uns nicht allein ihrer Wahrheit, sondern auch ihrer Notwendigkeit bewußt sind. Eine apodiktische Erkenntnis ist entweder durch Begriffe oder durch Konstruktion der Begriffe. Im ersten Fall ist sie dogmatisch, im letztern mathematisch. Ein apodiktisch gewisses Erkenntnis aus Begriffen heißt Dogma, ein apodiktisch gewisses Erkenntnis aus der Konstruktion der Begriffe mathema. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s12-024",
     "kind": "text",
     "aa": 724,
     "text": "[Ein apodiktischer Satz : Alles ist zufällig — (hat eine Ursache) — 2-4 = 4. Dies ist Anschauung, dort nur Begriff. Beides ist objektiv gleich gewiß, subjektiv aber ist große Verschiedenheit. Der Mathematiker kann bei seiner Arbeit ruhen, ihm bleibt die Anschauung — dies ist beim Philosophen nicht der Fall, daher seine Arbeit weit ermüdender.]",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "dohna-s12-025",
     "kind": "text",
     "aa": 724,
     "text": "Die Sätze der Moral und Metaphysik sind alle Dogmata. —",
     "ocrConf": 38
    },
    {
     "id": "dohna-s12-026",
     "kind": "text",
     "aa": 724,
     "text": "Weil Physik nur Anwendung jener Erkenntnisse ist, hat sie eine apodiktische Gewißheit. System ist ein Ganzes {dogmatischer Wahrheiten) aus Prinzipien. [System unterscheidet sich vom Aggregat, indem dies das Ganze ist, dem die Teile vorhergehen.]",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s12-027",
     "kind": "text",
     "aa": 724,
     "text": "Das Prinzip der Geschichte ist Zeit — Chronologie.",
     "ocrConf": 37
    }
   ]
  },
  {
   "id": "s13",
   "title": "[Stunde, d. 22ten Mai]",
   "titleSrc": "heading",
   "headings": [
    "[Stunde, d. 22ten Mai]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s13-001",
     "kind": "heading",
     "aa": 724,
     "text": "[Stunde, d. 22ten Mai]"
    },
    {
     "id": "dohna-s13-002",
     "kind": "text",
     "aa": 724,
     "ms": [
      {
       "p": 38,
       "i": 388
      }
     ],
     "text": "An sich selbst kann man von keinem Irrtum sagen, er sei unvermeidlich, aber wohl läßt sich dies von der Unwissenheit sagen. Denn wir haben ja nicht nötig, über alles zu urteilen, und wenn wir es ja tun, darf es doch auch nur problematisch geschehn. [Es gibt kernen error invincibilis — doch praktisch schwer zu vermeidende Irrtümer — Merkmal: die Unvereinbarkeit mit dem Urteil anderer.] Ein unvermeidlicher Irrtum setzt immer die Notwendigkeit des Urteils voraus. [Wenn das Urteil nämlich nicht notwendig wäre, so könnte man den Irrtum leicht vermeiden, indem man gar nicht urteilt. — ]",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-003",
     "kind": "text",
     "aa": 724,
     "text": "Der, welcher ein offenbar ungereimtes Urteil annimmt, handelt abgeschmackt. [Was schon der sensus communis dafür anerkennt — welches nicht einmal den Schein für sich hat. — (Logisch betrachtet ist kein Irrtum gefährlich — wir sehn hier nicht auf die Materie) — wenn man einmal jemandes Urteile | für | abgeschmackt erklärt, ihm also dadurch den Verstand abspricht, so hilft kein discours ihn davon abzubringen. Wer sich also darin einläßt, handelt selbst abgeschmackt.]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-004",
     "kind": "text",
     "aa": 724,
     "aaEnd": 725,
     "pages": [
      {
       "p": 725,
       "i": 134
      }
     ],
     "text": "In Ansehung des offenbar Falschen ist kein Irrtum möglich, nur in solchen Urteilen, da die Falschheit versteckt liegt. Die Mathematik hat das einzig an sich, daß man augenblicklich die Falschheit eines Satzes darin wahrnimmt. Den versteckten Grund des Irrtums aufheben, heißt den Schein entwickeln. Wenn jemand etwas behauptet, dessen Falschheit er wohl einsieht und doch nicht davon abgeht, so geht der Tadel mehr auf seinen Willen, als auf seinen Verstand. Ein grober Irrtum ist der, dessen Vermeidung leicht ist — er ist nicht einerlei mit dem abgeschmackten. Ein gefährlicher Irrtum, wenn uns nicht bloß darum zu tun ist, unsre Erkenntnis zu erweitern, sondern z. B. wir fragen immer zuerst nach dem Nutzen [den wir dann vielleicht noch nicht einsehn können. Dies tun gewöhnlich die seichtesten Köpfe.] Denjenigen, der, wenn er die Falschheit eines Erkenntnisses anzeigen soll, ihren Nachteil zeigt, nennt man Consequentiarius, weil er immer aus den Folgen auf den Grund schließt [ — er fängt beim Praktischen an] . —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s13-005",
     "kind": "text",
     "aa": 725,
     "text": "Der Autor redet nun im 5ten Abschnitt",
     "ocrConf": 36
    },
    {
     "id": "dohna-s13-006",
     "kind": "text",
     "aa": 725,
     "ms": [
      {
       "p": 39,
       "i": 0
      }
     ],
     "text": "Von der Klarheit der Erkenntnis",
     "ocrConf": 47
    },
    {
     "id": "dohna-s13-007",
     "kind": "text",
     "aa": 725,
     "text": "Klarheit ist Bewußtsein <nicht> nur der Vorstellungen im ganzen, sondern auch ihrer Teilvorstellungen. Ein Merkmal ist eine Teilvorstellung, sofern es ein Erkenntnisgrund der ganzen Vorstellung ist. Ein Erkenntnisgrund ist zwiefach :",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s13-008",
     "kind": "text",
     "aa": 725,
     "text": "1. ein Grund, ein Ding an sich zu erkennen oder der innere Erkenntnisgrund ;",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s13-009",
     "kind": "text",
     "aa": 725,
     "text": "2. ein Grund, ein Ding aus andern Nebendingen zu erkennen oder der äußere. —",
     "ocrConf": 42
    },
    {
     "id": "dohna-s13-010",
     "kind": "text",
     "aa": 725,
     "text": "In der Vergleichung mit andern erkennen wir entweder",
     "ocrConf": 53
    },
    {
     "id": "dohna-s13-011",
     "kind": "text",
     "aa": 725,
     "text": "1. durch die nota [nota, eine Teilvorstellung, die bei dem Begriff als Merkmal zum Grunde liegt] identitatis [Merkmal, Kennzeichen] und",
     "ocrConf": 46
    },
    {
     "id": "dohna-s13-012",
     "kind": "text",
     "aa": 725,
     "text": "2. durch die nota diversitatis [Unterscheidungszeichen, z. B. zwischen Mensch und Tier].",
     "ocrConf": 36
    },
    {
     "id": "dohna-s13-013",
     "kind": "text",
     "aa": 725,
     "text": "Partialvorstellungen als Erkenntnisgründe können Partialbegriffe und Partialanschauungen sein. Letztere kommen in der Logik nicht vor.",
     "ocrConf": 52
    },
    {
     "id": "dohna-s13-014",
     "kind": "text",
     "aa": 725,
     "aaEnd": 726,
     "pages": [
      {
       "p": 726,
       "i": 247
      }
     ],
     "text": "Ein Begriff ist die Vorstellung von demjenigen, was mehrere Vorstellungen in sich faßt. Der Autor macht einen Unterschied zwischen mittelbaren und unmittelbaren Vorstellungen. Alle Verbindungen sind entweder Verbindungen der Koordination oder der Subordination. Die erstem schaffen ein Ganzes, welches Aggregat heißt. Sie entstehn durch Verknüpfung des Mannigfaltigen. Sofern es einander subordiniert ist, heißt es eine Reihe. Da gibt es nun einen terminum a priori und einen a posteriori, in der Logik nur den a parte ante, nicht den letztern a parte post. [Ein mittelbares Merkmal ist nota notae, ein Merkmal vom Merkmal. Wenn man zuletzt in der Reihe der einander subordinierten Vorstellungen auf eine unteilbare kommt, heißt dies der terminus a parte ante. Dieser kann eingeteilt werden, z. B. quid, a parte post kann man nicht beweisen, nur illustrieren.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s13-015",
     "kind": "text",
     "aa": 726,
     "ms": [
      {
       "p": 40,
       "i": 0
      }
     ],
     "text": "Die Merkmale werden hier eingeteilt :",
     "ocrConf": 51
    },
    {
     "id": "dohna-s13-016",
     "kind": "text",
     "aa": 726,
     "text": "1 . in bejahende und",
     "ocrConf": 32
    },
    {
     "id": "dohna-s13-017",
     "kind": "text",
     "aa": 726,
     "text": "2. in verneinende. Aber dies gehört eigentlich mehr für das Urteil als für die Merkmale. [Negative Merkmale, wodurch ich etwas als Irrtum bezeichne, worauf ohnedem niemand verfallen wäre, sind überflüssig — ebenso affirmative, die nichts Neues oder Unbekanntes sagen — tautologisch.] Der Ausdruck verneinende Merkmale läßt auf die Materie schließen und die gehört nicht zur Logik. Alle Verneinungen setzen Bejahungen voraus. So gibt's unter den Wüden keine Armut, denn diese würde nur im Vergleich mit den Wohlhabenden stattfinden. Da sie nun nicht das Positive kennen, machen sie sich vom Negativen keine Vorstellung. So kann sich auch kern Blinder (geborener) eine Vorstellung von der Finsternis machen, weil er das Licht nicht kennt.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s13-018",
     "kind": "text",
     "aa": 726,
     "text": "Ein Merkmal ist wichtig, wenn es ein Erkenntnisgrund von großen Folgen ist. [Die Merkmale in Vergleichung mit andern (nach Diversität oder Identität) sind nicht so wichtig, als die durch Ableitung, innern Merkmale. Die Wichtigkeit ist: 1. logisch, z. B. 3 termini im Syllogismus ; 2. praktisch. — So kann logische, grammatische Unrichtigkeit praktisch unwichtig sein (in gewisser Rücksicht).]",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-019",
     "kind": "text",
     "aa": 726,
     "aaEnd": 727,
     "pages": [
      {
       "p": 727,
       "i": 511
      }
     ],
     "text": "Wenn es zur Unterscheidung eines Erkenntnisgrundes, der selber dem Grade nach groß ist, dient, so heißt dies (wo das Merkmal dem Grade nach bestimmt ist) intensiv, wenn das Merkmal auf Menge, Mannigfaltigkeit [überhaupt auf Ausdehnung] Bezug hat — extensiv. Das Merkmal ist zureichend, wenn es den Grund von allen unterscheidenden Merkmalen enthält [zu der Ableitung zureicht], unzureichend, wenn es nur den Grund von einigen Unterscheidungszeichen enthält. Aber der unzureichende Grund ist nicht zu verwerfen. Denn er enthält immer einen Teil des Grundes — sowie Mutmaßungen [ohne diese kommen wir nie zur Gewißheit].",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s13-020",
     "kind": "text",
     "aa": 727,
     "ms": [
      {
       "p": 41,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Merkmale werden ferner eingeteilt :",
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-021",
     "kind": "text",
     "aa": 727,
     "text": "1. in schlechterdings notwendige, unveränderliche und",
     "ocrConf": 51
    },
    {
     "id": "dohna-s13-022",
     "kind": "text",
     "aa": 727,
     "text": "2. in zufällige.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s13-023",
     "kind": "text",
     "aa": 727,
     "text": "Notwendig sind die, ohne welche die Sache schlechterdings nicht gedacht werden kann. Man erhält sie durch die bloße Zergliederung des Begriffs. [Wesen der Inbegriff der obersten Merkmale eines Dinges, complexus notarum conceptum aliquem primitive constituentium. Zuerst wird erfordert completudo ; 2. daß die Merkmale nicht aus andern abgeleitet, sondern primitiv sind — und unabtrennbar — das logische Wesen die innere Möglichkeit.]",
     "ocrConf": 49
    },
    {
     "id": "dohna-s13-024",
     "kind": "text",
     "aa": 727,
     "text": "In der Logik ist nie von den Merkmalen der Sache die Rede. Sie würde sich in dem Fall mit Materie beschäftigen. Aber sie handelt nur von den Merkmalen des Begriffs. Was physisch notwendig ist, kann logisch nur zufällig sein. Z. B. es ist physisch notwendig, daß alle Körper fallen, aber dies liegt nur in der Sache und ist logisch nur zufällig. Die notae logicae necessariae gehören zum esse des Begriffs. Diese sind ad esse conceptus necessariae, pertinent ad essentiam. [Der Mensch ist sterblich, kann irren — extraessentiale — ■ was nicht wesentlich dazu gehört.] Man kann diese Merkmale nicht aufheben, ohne das Ding selber aufzuheben. — Melius esse logicum (wie die beatitudo juridica, wenn es heißt beati possidentes).",
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "dohna-s13-025",
     "kind": "text",
     "aa": 727,
     "text": "Die notwendigen Merkmale der Dinge gehören zum Dinge selbst [od. ad f esse] :",
     "ocrConf": 48
    },
    {
     "id": "dohna-s13-026",
     "kind": "text",
     "aa": 727,
     "text": "1. als constitutiva, entweder wie Bestandstücke «(essentialia) [wesentliche Stücke] — originarie | zum Begriff gehörig | [originarie : die Ausdehnung]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s13-027",
     "kind": "text",
     "aa": 727,
     "text": "2. alsrationata, oder als Folgen <attributa) die derivative zum Begriff gehören, z. B. der Begriff Triangel — die Folgen sind, ob die Winkel recht f oder usw.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s13-028",
     "kind": "text",
     "aa": 727,
     "text": "Bei körperlichen Dingen ist Teilbarkeit ein Merkmal, quod pertinet ad essentiam, aber nicht als constitutivum, sondern als rationatum. [Aus dem Merkmal, daß das Wesen körperlich ist, kann die Teilbarkeit abgeleitet werden.]",
     "dehyphenated": 1,
     "ocrConf": 53
    },
    {
     "id": "dohna-s13-029",
     "kind": "text",
     "aa": 727,
     "text": "Erstere heißen auch essentialia, wesentliche Stücke [der Inbegriff aller Essentialien heißt das Wesen], letztere Attributa (Eigenschaften) [sie sind 1. communia; 2. propria].",
     "ocrConf": 51
    },
    {
     "id": "dohna-s13-030",
     "kind": "text",
     "aa": 728,
     "ms": [
      {
       "p": 42,
       "i": 0,
       "raw": "48",
       "inferred": true
      }
     ],
     "text": "Die zufälligen Merkmale sind entweder :",
     "ocrConf": 43
    },
    {
     "id": "dohna-s13-031",
     "kind": "text",
     "aa": 728,
     "text": "1. notae internae contingentes — Modi, z. B. Gelehrsamkeit | oder |",
     "ocrConf": 39
    },
    {
     "id": "dohna-s13-032",
     "kind": "text",
     "aa": 728,
     "text": "2. notae externae contingentes — sive Relationes.",
     "ocrConf": 52
    },
    {
     "id": "dohna-s13-033",
     "kind": "text",
     "aa": 728,
     "text": "Die tabellarische Einteilung der Merkmale (Prädikate) wäre also",
     "ocrConf": 43
    },
    {
     "id": "dohna-s13-034",
     "kind": "text",
     "aa": 728,
     "text": "1. ad essentiam pertinentia, ohne die das Ding nicht gedacht werden kann.",
     "ocrConf": 50
    },
    {
     "id": "dohna-s13-035",
     "kind": "text",
     "aa": 728,
     "text": "a) ut rationata sive attributa ;",
     "ocrConf": 53
    },
    {
     "id": "dohna-s13-036",
     "kind": "text",
     "aa": 728,
     "text": "b) ut constitutiva sive essentialia.",
     "ocrConf": 34
    },
    {
     "id": "dohna-s13-037",
     "kind": "text",
     "aa": 728,
     "text": "[Man kann oft einen Begriff aus dem andern ableiten, reciprocieren. Das gibt das sicherste Merkmal.]",
     "ocrConf": 53
    },
    {
     "id": "dohna-s13-038",
     "kind": "text",
     "aa": 728,
     "text": "2. extraessentialia [ohne die der Begriff | gedacht werden kann|], z. B. ein Triangel — da sind die Winkel unbestimmt.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-039",
     "kind": "text",
     "aa": 728,
     "text": "a) externa — Relation, die äußere Bestimmung, ob er Vater oder Sohn [allemal sind die äußern Bestimmungen der Merkmale zufällig] ;",
     "ocrConf": 50
    },
    {
     "id": "dohna-s13-040",
     "kind": "text",
     "aa": 728,
     "text": "b) interna, die innern Bestimmungen eines Dinges, insofern sie nicht notwendig sind, heißen Modi, z. B. gelehrt oder ungelehrt.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s13-041",
     "kind": "text",
     "aa": 728,
     "text": "Wenn wir vom Wesen der Dinge reden, so geschieht es vom logischen Wesen (das im Begriff besteht), nicht vom Realwesen (der Natur), wovon in der Metaphysik gehandelt wird. [Inbegriff aller derjenigen innern Bestimmungen, welche den ersten Grund des Daseins eines Dinges enthalten, ist das Naturwesen. — Dies ist sehr schwer einzusehn, das logische Wesen sehr leicht, es hegt bloß im Begriff. — ]",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s13-042",
     "kind": "text",
     "aa": 728,
     "ms": [
      {
       "p": 43,
       "i": 509
      }
     ],
     "text": "Essentia est complexus notarum conceptum aliquem primitive constituentium. Das logische Wesen ist der Inbegriff derjenigen Merkmale, die zureichend sind, das, was zum Wesen gehört, abzuleiten. Das logische Wesen ist leicht zu erkennen. Denn man hat dabei nichts mehr zu tun, als die Begriffe zu analysieren. Das Realwesen können wir nie ganz einsehn, z. B. wir können nie alle Merkmale des Wassers erfahren und wenn die Physik noch so hoch steht. Manche logische Begriffe sind gleichwohl schwer zu definieren , z. B. der Begriff Tugend. Da hat man noch lange nicht alle Merkmale heraus.Man nennt folgende: eine Fertigkeit in gesetzmäßigen Handlungen, welche frei ausgeübt werden, aber dies ist noch nicht genug [sie ist die moralische Stärke in Befolgung derselben mit Kampf gegen Hindernisse]. Körper kann man vollkommen definieren — eine Ausfüllung des Raums zeigt nur die Materie, aber die Beschreibung ihrer Figur nach den drei Dimensionen den Körper an.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s13-043",
     "kind": "text",
     "aa": 728,
     "text": "Jetzt redet der Autor",
     "ocrConf": 53
    },
    {
     "id": "dohna-s13-044",
     "kind": "text",
     "aa": 729,
     "text": "Von dunkeln Vorstellungen",
     "ocrConf": 44
    },
    {
     "id": "dohna-s13-045",
     "kind": "text",
     "aa": 729,
     "text": "Man setze die Vorstellung sei deutlich, d. h. ihre Partialvorstellungen klar, z. B. Recht, dabei findet Zwang statt, Billigkeit ist davon unterschieden, dies ist sehr schwer einzusehn. Wir können dunkle Vorstellungen durch Beispiele klar machen, aber diese Klarmachung ist nicht logisch, nur ästhetisch.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s13-046",
     "kind": "text",
     "aa": 729,
     "text": "[Die Dunkelheit ist subjektiv, wenn der Grund im Subjekt — objektiv, wenn er im Objekt liegt. — Eine dunkle Vorstellung — die deren man sich nicht bewußt ist, dies scheint ein Widerspruch zu sein — man kann es nicht unmittelbar, aber doch mittelbar durch Schluß | erfassen |.]",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s13-047",
     "kind": "text",
     "aa": 729,
     "ms": [
      {
       "p": 44,
       "i": 823
      }
     ],
     "text": "Oft nennt man einen Vortrag dunkel, weil er logisch deutlich, aber ästhetisch nicht Klarheit genug hat — keine passenden Beispiele gegeben werden können [z.B. Körper, ausgedehnte undurchdringhche Figur]. Man kann die Tugend von der Heiligkeit unterscheiden; denn bei der letztern finden gar keine Versuchungen zum Bösen statt [z. B. die Engel]. Dies hat man sonst vergessen. In unserer deutlichen Erkenntnis können wir uns noch eine Vollkommenheit denken, die Completudo {Ausführlichkeit — ausführliche Deutlichkeit) [in einem Begriff , wo koordinierte Merkmale sind, sowie tiefe durch subordinierte Merkmale — wenn ich hier auch nur ein einziges habe, so kann es nota superior sein — sich zurückführen lassen bis auf einfache Begriffe.] Die größte Deutlichkeit durch subordinierte Merkmale heißt die Tiefe der Erkenntnis. Beide zusammen machen die Gründlichkeit aiis.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s14",
   "title": "[nte Stunde]",
   "titleSrc": "heading",
   "headings": [
    "[nte Stunde]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s14-001",
     "kind": "heading",
     "aa": 729,
     "text": "[nte Stunde]"
    },
    {
     "id": "dohna-s14-002",
     "kind": "text",
     "aa": 729,
     "text": "Die tiefe Deutlichkeit ist immer schwerer zu verstehn, weil sie abstrakter ist. Um zu voller Deutlichkeit zu gelangen, muß man immer die Merkmale von den Merkmalen aufsuchen, bis man zuletzt zu den höchsten Merkmalen, zu den einfachen Begriffen gelangt. Wir können hiemit vergleichen die lebhafte Erkenntnis oder vielmehr Vorstellungsart <(das Bewußtsein ist dabei lebhaft). [Je mehr diese Vorstellung im Subjekt Veränderungen hervorbringt, desto lebhafter ist diese Wissenschaft f durch Beispiele]. Man kann diese ästhetisch größere Klarheit, Lebhaftigkeit nennen. Die logisch größere Klarheit ist Deutlichkeit.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s14-003",
     "kind": "text",
     "aa": 729,
     "aaEnd": 730,
     "pages": [
      {
       "p": 730,
       "i": 129
      }
     ],
     "text": "[Faßlichkeit und Klarheit sind zu unterscheiden. Durch Auflösung der Merkmale wird der Begriff schwerer zu fassen — wegen der Subtilität.Alle Deutlichmachung beruht auf der Entwickelung der Teilvorstellungen (insofern diese nicht für sich selbst klar sind).]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s14-004",
     "kind": "text",
     "aa": 730,
     "text": "Alle unsere Vorstellungen können zweifache Beziehung haben, erstlich auf das Subjekt, dann heißen sie Empfindungen, zweitens auf das Objekt, Erkenntnis.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s14-005",
     "kind": "text",
     "aa": 730,
     "text": "Erkenntnisse können lebhaft werden :",
     "ocrConf": 63
    },
    {
     "id": "dohna-s14-006",
     "kind": "text",
     "aa": 730,
     "text": "1. wenn sie bezogen werden auf das Materiale, die Sinnlichkeit {Empfindung) (subj.);",
     "ocrConf": 46
    },
    {
     "id": "dohna-s14-007",
     "kind": "text",
     "aa": 730,
     "text": "2. wenn sie bezogen werden auf das Formale, die Anschauung (objektiv).",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s14-008",
     "kind": "text",
     "aa": 730,
     "text": "[Eine Vorstellung, die belebt, muß den Gegenstand als gegenwärtig darstellen.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s14-009",
     "kind": "text",
     "aa": 730,
     "text": "Es ist verschieden 1. ein Erkenntnis deutlich machen (hier kommt nichts hinzu, nur erheben zur Deutlichkeit, dies | analytisch |,",
     "ocrConf": 42
    },
    {
     "id": "dohna-s14-010",
     "kind": "text",
     "aa": 730,
     "text": "2. ein deutliches Erkenntnis machen — wo vorhin noch keines da war, dies | synthetisch | .]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s14-011",
     "kind": "text",
     "aa": 730,
     "text": "Es kommt bei der logischen Deutlichkeit gar nicht auf die Menge der Merkmale an <S. P. 42 . . .f), bei der ästhetischen aber liegt es eben an der Vielfältigkeit derselben (z. B. Beschreibung des Frühlings). Der Ursprung der Deutlichkeit ist zwiefach, analytisch und synthetisch. Der Mathematiker hat die letzte Manier.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s14-012",
     "kind": "text",
     "aa": 730,
     "text": "Jetzt redet der Autor",
     "ocrConf": 54
    },
    {
     "id": "dohna-s14-013",
     "kind": "text",
     "aa": 730,
     "ms": [
      {
       "p": 45,
       "i": 0
      }
     ],
     "text": "Vom Begreiflichen und Unbegreiflichen",
     "ocrConf": 48
    },
    {
     "id": "dohna-s14-014",
     "kind": "text",
     "aa": 730,
     "text": "Gefühle können nie ein Erkenntnis hervorbringen. [Das Wort Vorstellung darf gar nicht erklärt werden. Denn man würde auch eben dadurch schon den Begriff davon voraussetzen müssen.]",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "dohna-s14-015",
     "kind": "text",
     "aa": 730,
     "aaEnd": 731,
     "pages": [
      {
       "p": 731,
       "i": 782
      }
     ],
     "text": "Man fängt an 1. mit vorstellen. Das 2te ist dann etwas wahrnehmen — percipere — sich mit Bewußtsein etwas vorstellen, das 3te — etwas kennen <(noscere), d. h. so erkennen, daß man es in Vergleichung mit andern nach ihrer Identität und Diversität kennt. Etwas verstehen Einteiligere): sich etwas durch den Verstand, durch Begriffe vorstellen [so daß man sich darüber erklären, die Merkmale davon angeben kann]. Aus der Vernunft [d. h. a priori durch den Verstand, wenn es auch nicht gegeben wäre], aus allgemeinen Prinzipien nach ihren Gründen die Sache erkennen heißt einsehen [einsehen perspicere]. Also . . . a priori einsehen ist: erkennen nicht allein, daß es so ist (wie z. B. Auflösung des Salzes durch Wasser), sondern daß es so sein muß (z. B. eine Sonnenfinsternis (mathematisch) [wenn wir es auch nie gesehn hätten]). Die letzte Stufe ist begreifen, etwas zureichend (zu einer gewissen Absicht) einsehn. Absolut (in aller Absicht) begreifen, comprehendere (ist uns unmöglich) [nicht die moralischen Regeln]. Man kann vollkommen begreifen z. B. verschiedne hydraulische Phänomene des Wassers und dies a priori einsehn [sobald wir die Flüssigkeit als hypothesis annehmen — einsehen erfordert durchaus Bewußtsein der Wahrheit]. Aber das, was flüssig ist, kann man a priori (nicht) einsehen. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 43
    },
    {
     "id": "dohna-s14-016",
     "kind": "text",
     "aa": 731,
     "text": "Zum Verstehen trägt das Beispiel nur ästhetisch bei. [Geist, Geischt (noch in der Schweiz), Gescht, Dunst.] Wir glauben oft etwas einzusehn, was wir uns im Grunde nur erklären können — seiner Möglichkeit nach verstehen.",
     "dehyphenated": 1,
     "ocrConf": 36
    },
    {
     "id": "dohna-s14-017",
     "kind": "text",
     "aa": 731,
     "text": "Man versteht das immer am besten, was man selber machen kann.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s14-018",
     "kind": "text",
     "aa": 731,
     "ms": [
      {
       "p": 46,
       "i": 0
      }
     ],
     "text": "Der deutliche Begriff wird complet, wenn alle Merkmale darin enthalten sind [ausführlich deutlich, sofern er alle koordinierte Merkmale enthält.] [Totalität in Ansehung der subordinierten Merkmale nennt der Autor Vollständigkeit.] Superabundant muß man seinen Begriff nicht machen, denn man erschwert es sich selbst, wenn man überflüssige | Merkmale | aufnimmt. Der Begriff, wo alle entbehrliche Merkmale ausgelassen sind, heißt präzis. — Der Begriff, der nicht zuviel, nicht zu wenig enthält, heißt angemessen (adäquat) [da man nicht allein die Merkmale selbst, sondern auch die Merkmale der Merkmale erkennt, es paßt aber der Begriff adäquat nicht eher, als die Reihe ganz zu Ende gebracht ist.]",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s14-019",
     "kind": "text",
     "aa": 731,
     "text": "Der erste Grad der Subordination ist ein Merkmal vom Merkmal. Der adäquate Begriff beruht auf der Koordination.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s14-020",
     "kind": "text",
     "aa": 731,
     "text": "[Wenn die Summe der Merkmale nicht zuviel enthält — präzis — wenn sie nicht zu wenig enthält — adäquat. — Verstandesdeutlichkeit ist die durch Begriffe. Die Deutlichkeit der Urteilskraft die der Beispiele durch Anschauung. Vernunftdeutlichkeit die durch mittelbare Merkmale (sowie Verstandesdeutlichkeit durch unmittelbare). Alle nicht präzise Begriffe unbestimmt, vag.]",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s14-021",
     "kind": "text",
     "aa": 731,
     "text": "Ein heller Kopf, der immer weiß, was er will.",
     "ocrConf": 49
    }
   ]
  },
  {
   "id": "s15",
   "title": "Sechster Abschnitt Von der Gewißheit der Erkenntnis",
   "titleSrc": "heading",
   "headings": [
    "Sechster Abschnitt",
    "Von der Gewißheit der Erkenntnis"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s15-001",
     "kind": "heading",
     "aa": 731,
     "text": "Sechster Abschnitt Von der Gewißheit der Erkenntnis"
    },
    {
     "id": "dohna-s15-002",
     "kind": "text",
     "aa": 731,
     "aaEnd": 732,
     "pages": [
      {
       "p": 732,
       "i": 131
      }
     ],
     "text": "Hier ist nicht die Rede von der Wahrheit, sondern vom Fürwahrhalten. [Objektiv sind alle Sätze gewiß wahr oder gewiß falsch.] Dies ist das Urteil im Verhältnis und der Beziehung auf das Subjekt. Wir wollen dabei nicht eben die Gründe der Wahrheit, sondern nur die des Fürwahrhaltens wissen. Die Stufen sind: 1. meinen, 2. glauben, 3. wissen. Man kann diese drei Begriffe die Modalitäten des sensus veri et falsi nennen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-003",
     "kind": "text",
     "aa": 732,
     "ms": [
      {
       "p": 47,
       "i": 180,
       "raw": "4T",
       "inferred": true
      }
     ],
     "text": "Meinen ist ein sowohl subjektiv als objektiv mit Bewußtsein unzureichendes Für wahrhalten. Ein unzureichendes Fürwahrhalten ist, was nicht hinreicht, das Gegenteil auszuschließen. Wer nur meint, ist noch offen für Gegengründe.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-004",
     "kind": "text",
     "aa": 732,
     "text": "Wenn (man) aber glaubt, so ist dies nicht mehr. [Es ist ein assertorisches Für wahrhalten, welches wir indes doch nicht mit dem Bewußtsein der Notwendigkeit erkennen (also doch zugeben müssen, daß Abänderungen möglich sind).] Glaube ist ein zwar subjektiv <zureichendes,) doch mit Bewußtsein objektiv unzureichendes Fürwahrhalten. So ist das Glauben vom Wissen unterschieden, daß es nicht beweisfähig ist. Glauben ist ein Privatfürwahrhalten, nur für mich zureichend gewiß. Daher kann ich noch nicht sagen, ich wisse es.",
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-005",
     "kind": "text",
     "aa": 732,
     "text": "Wissen ist ein sowohl subjektiv als objektiv hinreichendes Fürwahrhalten. [Ich halte das Gegenteil für unmöglich. Ein mit Bewußtsein sowohl objektiv als subjektiv unzureichendes Für wahrhalten ist das Meinen. Den Begriff des Glaubens faßt man am besten in praktischer Absicht (wiewohl dieser Einfluß auf den Willen nicht in die Logik gehört).] Es kann empirisch durch Erfahrung und apodiktisch a priori sein. Das Für wahrhalten eines apodiktischen Satzes kann apodiktisch gewiß sein.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-006",
     "kind": "text",
     "aa": 732,
     "text": "Was ich meine, das Urteil sage ich nur problematisch, mithin ist das Fürwahrhalten 1. problematisch, wenn es nämlich so angenommen wird, daß es noch zu erweisen f ist. Es heißt problematisch, weil es nur dazu dient, unter mehrern Gründen den zureichenden zu finden.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-007",
     "kind": "text",
     "aa": 732,
     "text": "Nun ist das Fürwahrhalten 2. assertorisch im Glauben. Denn sage ich, daß es für mich (subjektiv) zureichend ist, ob es aber objektiv zureichend sei, mache ich nicht aus. Sehr viele Vorstellungen von einem künftigen Zustande sind bloße Produkte der Einbildungskraft, manche Ideen, die uns sehr gefallen (z. B. von männlichem und weiblichem Licht) nur Ideen im Subjekt.",
     "dehyphenated": 2,
     "ocrConf": 48
    },
    {
     "id": "dohna-s15-008",
     "kind": "text",
     "aa": 732,
     "text": "Das Fürwahrhalten ist 3. apodiktisch im Wissen, [intuitio in der Mathematik. Überzeugung. Persuasion ist der Schein der Überzeugung, ungewiß, ob subjektiv oder objektiv.]",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s15-009",
     "kind": "text",
     "aa": 733,
     "ms": [
      {
       "p": 48,
       "i": 0
      }
     ],
     "text": "Die Sätze des Fürwahrhaltens können empirisch und das Fürwahrhalten apodiktisch sein. Das Fürwahrhalten ist entweder mit dem Bewußtsein der subjektiven Notwendigkeit oder mit dem des Zufälligen verbunden. Im letztern Fall ist es, wenn es subjektiv und objektiv unzureichend ist, Meinen, aber wenn es subjektiv zureichend und objektiv unzureichend ist — Glauben. Hypothesen sind Meinungen. In der Mathematik gibt es weder meinen noch glauben, sondern nur wissen — oder nichts — und in der bloß spekulativen Metaphysik ist es ebenso.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-010",
     "kind": "text",
     "aa": 733,
     "text": "[Etwas ist Sache des Meinens, wenn es gar nicht Gegenstand des Wissens werden kann, weder objektiv noch subjektiv (z.B. ob es Mondbewohner gibt). — Über die Möglichkeit der tierischen Erzeugung seinesgleichen werden wir nie mehr als Meinungen haben. — Glaubenssachen, wo nur ein subjektiv zureichender Grund des Fürwahrhaltens für uns f ist. — Alles, was wir aus Zwecken annehmen, ist für uns nur subjektiv hinreichend — (d. h. ich muß annehmen, daß dies so sei, sonst komme ich mit meiner Vernunft hier nicht fort — dies kann ich nun freilich nicht als objektiv geltend annehmen, doch ist es für mich hinreichend.)",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "dohna-s15-011",
     "kind": "text",
     "aa": 733,
     "text": "Wo f Wissen möglich ist, dies ist schon Sache des Wissens, z. B. Geographie. — Nur Gegenstände des Vernunftglaubens kann man Glaubenssachen nennen.]",
     "ocrConf": 37
    },
    {
     "id": "dohna-s15-012",
     "kind": "text",
     "aa": 733,
     "ms": [
      {
       "p": 49,
       "i": 512
      }
     ],
     "text": "Was sind Gegenstände des Meinens, Glaubens und Wissens ? Sind objektiv historische Sätze Gegenstände des Meinens, des Glaubens oder gar des Wissens ? Sie sind Gegenstände des Wissens. Denn es gibt Fälle, wo wir die Erfahrung anderer als unsere eigene gebrauchen können. Sind mathematische Sätze Gegenstände des Meinens usw. Sie sind alle, weil sie a priori sind, Gegenstände des Wissens. (Begriffe heißen transcendental, wenn wir sie a priori haben.) Kann man nicht auch Sätze a priori auf Glauben annehmen ? Ja . Die Mathematik ist auch von der Art. [Man glaubt den Mathematikern, weil es nicht möglich ist, daß sie irren können, indem sie gleich auf falsche Folgen stoßen würden. In Philosophie aber gibt es keinen Glauben.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-013",
     "kind": "text",
     "aa": 733,
     "text": "Gläubig, wer fähig ist eines Vernunftglaubens. Das moralisch Praktische beruht lediglich auf Vernunft. Was nun also entweder selbst Pflicht ist oder damit in connater Verbindung steht — dies Gegenstand des Glaubens (praktischen Fürwahrhaltens) — wer dies nicht usw. ungläubig, wer alles andern glaubt, leichtgläubig.]",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-014",
     "kind": "text",
     "aa": 733,
     "aaEnd": 734,
     "pages": [
      {
       "p": 734,
       "i": 126
      }
     ],
     "ms": [
      {
       "p": 50,
       "i": 1181
      }
     ],
     "text": "Eine Sache des Meinens ist die, zu deren Gegenteil man keine Gründe hat. Es gibt Gegenstände des Meinens, die Gegenstände des Glaubens und Wissens werden können, z. B. in der Physik das, was Newton von der Entstehung der Planeten meint usw. Es gibt ein Glauben, welches in praktischer (nicht in spekulativer) Beziehung dem Wissen gleichgeschätzt wird, z. B. manche Sätze der alten Philosophen — Probabilismus. Die Gewißheit, die zur Kenntnis des Gebots oder Verbots einer Handlung (gehört), ist die moralische. Man kann das, was nach den Regeln der Klugheit gewiß ist, nicht moralisch, sondern pragmatisch gewiß (nennen). Man mißbraucht den Begriff von moralischer Gewißheit, wenn man oft nichts weiter hat [z. B. bei Wetten] als einen praktisch hinreichenden Grund der Wahrheit, er darf nicht theoretisch hinreichend sein. [Logische Gewißheit (apodiktische) ist 1. philosophisch, 2. mathematisch.] Die moralische Gewißheit bezieht sich aufs Gewissen. Z. B. bei Lehrsätzen des Katholizismus, die manche annehmen, ohne das Gewissen zu befragen. Wenn man etwas tut auf die Gefahr zu irren, so ist man nie moralisch gewiß. Man denkt sich bei dem Wort Glauben immer einen freiwilligen Beifall, bei dem Worte meinen einen entschiedenen Beifall. Glaubenssache ist das, was für wahr gehalten werden soll und wovon kein Wissen stattfindet. Es wird als ein Fürwahrhalten angesehn, was auf mein Beheben ankommt. Der Vernunftglaube heißt schlechthin f ides. Es ist ein verwickelter Begriff. [Für Gläubig haben wir eigentlich kein lateinisches Wort — fidelis — treu — .] Es sind gewisse überschwengliche Urteile (transcendent), die außer den Grenzen unserer Erkenntnis hegen, die man nur glauben kann. Wer auch durch moralische Gründe nicht überzeugt wird, ist ein Ungläubiger. Ein Ungläubiger im theologischen Verstände ist der, der das Übersinnliche, wenn es auch moralisch wirklich notwendig ist, weil es mit der Vernunft theoretisch nicht bewiesen werden kann (es ungewiß ist), nicht einsieht und nicht annehmen will. Man nennt den, der auch das, was historisch gewiß ist, bloß darum, weil die Gewißheit nicht apodiktisch ist, nicht annimmt, ungläubisch. Gewißheit ist die objektive Zulänglichkeit des Fürwahrhaltens. Beim Glauben ist sie subjektiv. Da kann ich nur sagen: ich bin gewiß. Aber bei der Gewißheit: es ist gewiß, dies ist allgemeingültig.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 10,
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-015",
     "kind": "text",
     "aa": 734,
     "ms": [
      {
       "p": 51,
       "i": 0
      }
     ],
     "text": "Ein vernünftiges Erkenntnis ist vom Vernunfterkenntnis verschieden, ersteres muß die Eigenschaft aller Erkenntnisse sein. Beim Unterschied der mathematischen Gewißheit kommt es nicht auf den Grad, sondern auf die Quantität an.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s15-016",
     "kind": "text",
     "aa": 734,
     "text": "Alle Gewißheit ist entweder",
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-017",
     "kind": "text",
     "aa": 735,
     "text": "1. empirisch, ist die, welche aus der Erfahrung herrührt, | oder |",
     "ocrConf": 37
    },
    {
     "id": "dohna-s15-018",
     "kind": "text",
     "aa": 735,
     "text": "2. rational, ist die, deren Ursprung a priori ist. Sie wird wieder in doppelter Rücksicht betrachtet :",
     "ocrConf": 52
    },
    {
     "id": "dohna-s15-019",
     "kind": "text",
     "aa": 735,
     "text": "objektiv a) logisch, in Rücksicht aufs theoretische Erkenntnisvermögen;",
     "dehyphenated": 1,
     "ocrConf": 35
    },
    {
     "id": "dohna-s15-020",
     "kind": "text",
     "aa": 735,
     "text": "subjektiv b) praktisch, in Rücksicht auf den moralischen Gebrauch.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s15-021",
     "kind": "text",
     "aa": 735,
     "text": "Die rationale logische Gewißheit heißt generaliter eine apodiktische, denn sie wird aus Gründen a priori erkannt. [Wir haben Überzeugung von einer Sache, wenn wir sie mit dem Bewußtsein, daß unser Urteil objektiv sei, für wahr erkennen.] Man kann nicht sagen, daß die mathematische Gewißheit größer, als die philosophische sei. Es hegt der Unterschied nur darin, daß sie intuitiv, die philosophische aber nur discursiv ist. Denselben Grad kann die philosophische Gewißheit wohl erlangen, aber (nie) die Eigenschaft, daß sie intuitiv <würde). Man pflegt bei philosophischen Sätzen zu sagen, sie wären so gewiß als 2 mal 2 4, aber dies ist nicht bestimmt, denn letzteres ist mathematische, nicht philosophische Gewißheit. [Der Grad der beiden Gewißheiten ist gleich, aber sie sind von verschiedener Art.]",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-022",
     "kind": "text",
     "aa": 735,
     "ms": [
      {
       "p": 52,
       "i": 0
      }
     ],
     "text": "[Stunde, Montag]",
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-023",
     "kind": "text",
     "aa": 735,
     "text": "Annehmen ist ein zufälliger Beifall, der in Ansehung einer gewissen Absicht hinreichenden Grund hat. Ausgemacht, dies setzt einen Streit voraus, da die Sache ungewiß war. Von mathematischen Sätzen kann man nicht sagen, daß sie ausgemacht sind ; denn wer kann darüber streiten ?",
     "ocrConf": 46
    },
    {
     "id": "dohna-s15-024",
     "kind": "text",
     "aa": 735,
     "text": "[Man sagt bisweilen, etwas sei unstreitig. Dies heißt aber nur soviel als unbestritten — es hat sich nie jemand gefunden, der es widerlegt hatte.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-025",
     "kind": "text",
     "aa": 735,
     "text": "Augenscheinlich kann kein anderes Erkenntnis dargelegt werden, als das mathematische. Es kann nämlich sonst nichts einen intuitum a priori zuwege bringen.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s15-026",
     "kind": "text",
     "aa": 735,
     "text": "[Gründlich heißt ein Erkenntnis, sofern es durch logisch hinreichende Gründe gegen Zweifel gesichert ist.] Ein gründliches Erkenntnis muß aus sichern Prinzipien abgeleitet sein. Gründliche Geschichte kann nur durch Chronologie erworben werden.",
     "dehyphenated": 3,
     "ocrConf": 49
    },
    {
     "id": "dohna-s15-027",
     "kind": "text",
     "aa": 735,
     "aaEnd": 736,
     "pages": [
      {
       "p": 736,
       "i": 180
      }
     ],
     "text": "Bündig heißt soviel wie konsequent, daß alles im nexu, im Zusammenhange steht. Das Bündige ist das Höchste im Gebrauch unserer Erkenntnis — konsequent sein. [Konsequent heißt folgerecht, wenn die Verknüpfung der Folge mit dem Grunde den logischen Gesetzen gemäß ist. Bündig, dieser Satz hängt mit den vorigen in der Reihe eines Systems zusammen. — Je konsequenter ein Mensch von gefährlichen Maximen ist, desto schädlicher ist er. — ]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-028",
     "kind": "text",
     "aa": 736,
     "text": "Wenn der Mathematiker demonstriert, so zwingt er jeden, der ihn versteht, zum Beifall. Da können wir also eigentlich nicht sagen: wir geben ihm Beifall. [Der Ausdruck: Beifall zu geben, scheint nicht in unserm Willen zu stehn. Können wir unsern Beifall für einen mathematischen Beweis zurückhalten ? Fürwahrhalten gehört zum Verstände, Untersuchung aber zur Willkür.]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-029",
     "kind": "text",
     "aa": 736,
     "ms": [
      {
       "p": 53,
       "i": 145
      }
     ],
     "text": "In der Suspensio judicn steckt etwas von Freiheit. Man kann auch seinen Beifall geben, ohne mit dem Urteil zu entscheiden — was noch auf mehrere Gründe Avartet — wo man das Gegenteil noch als möglich annimmt. Ich bin frei, wenn ich in praktischer Absicht auf das Gute, was aus dem Satze folgen kann, ihn annehme. Man kann also sagen : Es gibt Dinge in Religionssachen, z. B. unsre ewige Fortdauer, die wir annehmen aus eben diesem Guten, denn der Idee des höchsten Guts ist dieses Leben noch lange nicht angemessen.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-030",
     "kind": "text",
     "aa": 736,
     "text": "Die suspensio judicn besteht darin, daß, wenn auf beiden Seiten alle Gründe gleich unzureichend sind, keiner überwiegend ist. Sie kann sein 1. ob indifferentiam — 2. ob aequihbrium. Willkürlich sich in suspensione judicii zu erhalten [es ist das Mittlere zwischen dem Fürwahrhalten und Verwerfen — es bleibt nur problematisches Urteil], zeugt von einem sehr großen Kopf und ist deswegen äußerst schwer, weil die Neigung sich gleich in das Verstandesurteil einmengt. Ob aequilibrium unschlüssig sein und bleiben, zeugt von schwachen Köpfen.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-031",
     "kind": "text",
     "aa": 736,
     "text": "Argumentum ad crumenam, weil der, der kernen vollen Beutel hat, nicht mitwetten kann. [Wer nicht mitwetten will, wird davor angenommen, daß er seiner Sache ungewiß sei.]",
     "dehyphenated": 1,
     "ocrConf": 52
    },
    {
     "id": "dohna-s15-032",
     "kind": "text",
     "aa": 736,
     "text": "Argumentum ad verecundiam. Weil ein großer Mann es behauptet hat, und man es doch nicht wird besser wissen wollen. [Ein schlechtes Argument.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-033",
     "kind": "text",
     "aa": 736,
     "ms": [
      {
       "p": 54,
       "i": 0
      }
     ],
     "text": "Das beste Argument ist wohl immer das ad tutum, nämlich in dem Fall, daß man das Sicherste annimmt. Es ist listig, geht aber nicht immer auf das Wahre.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-034",
     "kind": "text",
     "aa": 736,
     "text": "Was die suspensio judicn betrifft, so ist sie:",
     "ocrConf": 48
    },
    {
     "id": "dohna-s15-035",
     "kind": "text",
     "aa": 736,
     "text": "1. critica oder indagatoria, ein Aufschub des Urteils bis zur nähern Untersuchung [bis sich ein Grund zum Fürwahrhalten darbietet];",
     "ocrConf": 39
    },
    {
     "id": "dohna-s15-036",
     "kind": "text",
     "aa": 737,
     "text": "2. sceptica, ist die Renunciation auf ein assertorisches Urteil. [Eine gänzliche Entsagung aller Gewißheit. Den Grundsatz, sein Urteil immer aufzuschieben, nennt man ettoxt) — Status indifferentiae.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-037",
     "kind": "text",
     "aa": 737,
     "text": "Wir kommen jetzt zu der Lehre",
     "ocrConf": 46
    },
    {
     "id": "dohna-s15-038",
     "kind": "text",
     "aa": 737,
     "text": "Von den Vorurteilen",
     "ocrConf": 50
    },
    {
     "id": "dohna-s15-039",
     "kind": "text",
     "aa": 737,
     "ms": [
      {
       "p": 55,
       "i": 724,
       "approx": true
      },
      {
       "p": null,
       "i": 812,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Ein vorläufiges Urteil [Judicium praevium] hat mit dem Vorurteil nur das gemein, daß es ebenfalls vor der Untersuchung der Sache gefällt wird. [Praejudicium ist nicht verschieden von f beides ist einerlei. Das letztere ist eigentlich Berufung auf ein Urteil, also {durch) Erfahrung, dies trägt indes zur Kultur bei. Judicium praevium ist ein Urteil, was vor der Überlegung vorhergeht — ohne Überlegung kann gar nicht geurteilt werden, aber wohl ohne Untersuchung, was unmittelbar gewiß ist, verstattet auch keine. — ] Judicium reflectens, wo man ein Urteil gleich als ein Problem setzt, um die Wahrheit zu untersuchen. Auch zum Suchen muß man ein besondres Prinzip haben. Dies aufzusuchen, gehört Urteilskraft. Man kann sie nicht lehren. Denn wollte man ihm Regeln geben, so gebrauchte er schon Urteilskraft, um unter dieselben zu subsumieren. Ein Judicium praevium geht also vor der Untersuchung; aber mit der Überlegung muß es jederzeit gleichgehen.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-040",
     "kind": "text",
     "aa": 737,
     "text": "[Vorläufige Urteile entspringen aus mit Bewußtsein unzureichenden Gründen. — Geschicklichkeit in vorläufigen Urteilen ist eine Art Klugheit. Dieses Kapitel ist bis jetzt in der Logik vernachlässigt. Jeder Erfinder muß vorläufig urteilen.]",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s15-041",
     "kind": "text",
     "aa": 737,
     "text": "Ich überlege etwas, wenn ich es mit den Gesetzen des Verstandes vergleiche. Es gibt Sätze, die vor aller Untersuchung schon iudicia determinantia (bestimmende Urteile) sind, z. B. zwischen 2 Punkten ist nur eine gerade Linie möglich. Judicia mdemonstrabilia nennt man sie auch — beweislose, unmittelbar gewisse, nicht unbeweisbare — wir werden noch in der Folge davon reden.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s15-042",
     "kind": "text",
     "aa": 737,
     "text": "[Der Hang aus subjektiv allgemeinen Ursachen zu urteilen, objektiv allgemeine Prinzipien zu machen, ist das Vorurteil. — ]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s15-043",
     "kind": "text",
     "aa": 737,
     "aaEnd": 738,
     "pages": [
      {
       "p": 738,
       "i": 344
      }
     ],
     "ms": [
      {
       "p": 56,
       "i": 556
      }
     ],
     "text": "Judicia reflectentia sind diejenigen, die die Untersuchung einleiten, die da zeigen 1. ob eine Sache einer Untersuchung bedarf, 2. wie ich eine Sache untersuchen soll. Das Vorurteil ist eine Maxime, aus subjektiven Gründen objektiv zu urteilen. Ein Vorurteil ist nie ein einzelner Satz, z.B. der Apfel fällt nicht weit vom Stamm. Dies ist noch kein Vorurteil, sondern nur eine Folge ans einem andern. Denn kein Vorurteil ist ein Satz, sondern nur eine Maxime, um daraus Sätze zu ziehn. Maxime heißt ein subjektiver Grundsatz. Ein objektiver heißt Prinzip. Eine Regel, die das Subjekt sich zum Prinzip macht, heißt Maxime. So machen sich viele Menschen eine Regel, die objektiv falsch ist, subjektiv zur Maxime. Da gründet sich die Maxime auf einen Schein, den wir schon oben solchergestalt definiert haben. Vorurteil also ist eine Maxime, Regeln, die auf Sehern gegründet sind, für wahr zu halten. Die Formeln sind entweder 1. Denksprüche, |oder| 2. Sinnsprüche — Sentenzen | oder | 3. Lehrsprüche oder | 4. 1 Sprichwörter, proverbia. [Spruch ist ein Satz, der an einen gewöhnlichen Ausdruck gebunden ist, so daß dieser die Erinnerung erleichtert. — Lehrsprüche oder Canones. — Sentenzen sind ästhetische Formeln. — Canones sind klassische — Dicta sind heilige Formeln.] Man wird den Nationalgeist eines Volks am besten aus seinen Sprich-Wörtern erkennen. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 41
    },
    {
     "id": "dohna-s15-044",
     "kind": "text",
     "aa": 738,
     "text": "Das Vorurteil, was wir erst genannt, wie der Vater, so der Sohn, oder dergl. gründet sich eigentlich darauf, daß man die Maxime, daß es zwischen Menschen und Tieren viel Ähnlichkeit gebe, für allgemein -geltend angenommen. Und dies Vorurteil gründet sich auf den subjektiven Grund, daß dasjenige, was alle Welt sagt, wahr sei.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s15-045",
     "kind": "text",
     "aa": 738,
     "ms": [
      {
       "p": 57,
       "i": 0,
       "raw": "st",
       "inferred": true
      }
     ],
     "text": "Sentenzen könnte man nennen ästhetische Formeln, sowie Sprichwörter formulas vulgares. Die Sentenzen sind geAvöhnlich Formeln für die Weisheit. Die Canones sind Formeln für die Wissenschaft. Klassische Formeln nennt man im juristischen Sinn : Brocardica. [Sie haben Autorität und erklären alle Untersuchung für überflüssig. Man nennt die Sprichwörter loci communes, weil jedermann so spricht, so soll dies wahr sein — Sprichwörter sind die konzentrierte (gemeine) Volksweisheit. Daher die immer Sprichwörter reden wollen, pöbelhaft.] Dicta sind Sprüche koct5 e£oxr|v.",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-046",
     "kind": "text",
     "aa": 738,
     "text": "Bei allen bloß subjektiven Gründen sind wir immer passiv, z. B. bei der Neigung, bei der Gewohnheit — dem Hange zur Nachahmung. Der Hang zum Vorurteil ist Hang zum Mechanismus im Vernunft -gebrauch. Es gibt Sentenzen, die sich schon als Vorurteile ankündigen.",
     "ocrConf": 39
    },
    {
     "id": "dohna-s15-047",
     "kind": "text",
     "aa": 738,
     "text": "Man kann die Vorurteile überhaupt einteilen",
     "ocrConf": 51
    },
    {
     "id": "dohna-s15-048",
     "kind": "text",
     "aa": 738,
     "text": "1. in das Vorurteil, praejudicium, hominis;",
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-049",
     "kind": "text",
     "aa": 738,
     "text": "2. in das der Gelegenheit unserer (Urteile) a) loci vel b) temporis.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s15-050",
     "kind": "text",
     "aa": 738,
     "text": "Das praejudicium hominis ist wieder zwiefach :",
     "ocrConf": 52
    },
    {
     "id": "dohna-s15-051",
     "kind": "text",
     "aa": 738,
     "text": "1. praejudicium vel personae (für eine Person);",
     "ocrConf": 52
    },
    {
     "id": "dohna-s15-052",
     "kind": "text",
     "aa": 739,
     "text": "2. praejudicium — multitudinis (für die Menge) — es ist dem Frauenzimmer eigen und schickt sich auch recht gut für sie. [Was alle Welt sagt, ist wahr.] Ein solcher, der das praejudicium multitudinis hat, mißtraut seiner Vernunft. [Das Vorurteil des Ansehens, z. B. des Altertums, welches z. B. in der Dankbarkeit seinen Grund hat.] j [Vorurteile des Ansehens z. B. für große Männer schaden oft sehr den Wissenschaften, indem sie durch ihre Größe andere vom Wetteifer zurückschrecken — ein jeder, der dies Feld zur Bearbeitung wählen möchte, verzweifelt, dies Ideal zu erreichen odergar je zu übertreffen.— Wir bewundern bisweilen aus Verachtung, indem für die geringe Vorstellung, die wir von jemandem hatten das, was er getan, immer viel Avar. So bewundert Mercier die Deutschen, so bewundert man Frauen-7.immer, die etwas Wissenschaftliches hefern.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-053",
     "kind": "text",
     "aa": 739,
     "text": "Ein Unterschied zwischen Bewundern und Verwundern. Wir bewundern die Alten nicht wegen des Grades der Erkenntnis, sondern wie sie relativ auf die wenigen Hilfsmittel es so weit gebracht haben. — Gelehrsamkeit. Kenntnis der Alten. Von der Achtung, welche sie verdient, lassen wir immer viel auf die Alten selbst fallen. — Das Vorurteil für die Alten hat manche Ursachen. Man kennt das Neue nicht, will es nicht kennen, aus Faulheit. In Sachen der schönen Kunst sind die Alten wirklich noch jetzt Muster — in andern Gegenständen hat man seitdem viel Schritte getan. Im Ästhetischen, in Sachen der Empfindung konnten es die Alten weiter bringen als wir wegen ihrem bürgerlichen Zustande. — Reden zu einem kultivierten (feinen) Volke in Hinsicht auf Staatsverfassung mußten einen hohen Grad der Vollkommenheit < — Energie — > erreichen. — Hier ist ein Fundament. Die Meinung beruht also nicht auf bloßem Vorurteil. Gingen diese Werke verloren, so würden wir sie nicht wiederbekommen, weil wir nicht in diesen Zustand kommen können. Nur eine tote Sprache kann Muster der Darstellung werden, lebende erleiden zu oft Veränderungen.]!",
     "dehyphenated": 5,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-054",
     "kind": "text",
     "aa": 739,
     "ms": [
      {
       "p": 58,
       "i": 0,
       "raw": "ss",
       "inferred": true
      }
     ],
     "text": "Auch das praejudicium multitudinis ist zweifach",
     "ocrConf": 34
    },
    {
     "id": "dohna-s15-055",
     "kind": "text",
     "aa": 739,
     "text": "1. praejudicium eruditorum [das Vorurteil für die Gelehrten], so traut der gemeine Mann den Gelehrten.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-056",
     "kind": "text",
     "aa": 739,
     "aaEnd": 740,
     "pages": [
      {
       "p": 740,
       "i": 331
      }
     ],
     "text": "2. praejudicium sensus communis. Der gemeine Verstand ist eine Art von Sinn {(praejudicium empirismi)) der gewissermaßen eine Anschauung hat. [Oft haben auch Gelehrte eine besondere Achtung davor.] Doch ist in der Medizin das Gegenteil, weil sie nämlich glauben, daß es gefährlich sei, sich auf gut Glück der Gelehrsamkeit zu bedienen f. [sie glauben nämlich, daß gelehrte Mediziner gar nicht aus f der Erfahrung etwas ersinnen f].",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s15-057",
     "kind": "text",
     "aa": 740,
     "text": "Der Autor handelt jetzt",
     "ocrConf": 34
    },
    {
     "id": "dohna-s15-058",
     "kind": "text",
     "aa": 740,
     "text": "Von der logischen Egoisterei",
     "ocrConf": 54
    },
    {
     "id": "dohna-s15-059",
     "kind": "text",
     "aa": 740,
     "text": "[Der logische Egoism ist ein selbstsüchtiges Vorurteil.] Dies ist nicht bloß Eigendünkel, sondern eine Art von logischem Grundsatz, der das Kriterium der Wahrheit, seine Meinungen mit denen andrer Menschen zu vergleichen, für entbehrlich hält. [Der Mathematiker kann es nie riskieren — Vitium subreptionis, aus subjektiven Gründen. — ] Das Prinzip der Gleichgültigkeit usw. der Urteile anderer im Vergleich mit den meinigen ist das Prinzip des logischen Egoism. Es ist unbillig, Leute dafür zu kondemnieren, daß sie alle ihre Urteile für sich behalten sollen. Denn sie müssen sich mitteilen, wenn sie nicht das starke Kriterium der Wahrheit, üire Urteile mit den Urteilen andrer zu vergleichen, verlieren sollen.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s15-060",
     "kind": "text",
     "aa": 740,
     "ms": [
      {
       "p": 59,
       "i": 118
      }
     ],
     "text": "Ferner redet der Autor vom Vorurteil zugunsten eines ander n — dies ist genau das Gegenteil von dem vorher erwähnten. Man erhebt nämlich bisweilen einen großen Mann, um seine eigene Schwäche gegen die Zeitgenossen zu verbergen — es ist ein Mittel zur Vergleichung und Aufhebung des Unterschieds. Solch ein Idol, was man zur Bewunderung erhoben hat, z. B. Aristoteles, hat der Menschheit außerordentlich geschadet und sie immer gebunden gehalten. Denn niemand glaubte, daß dieser Mann je übertroffen werden konnte, daher man nur immer nachahmte. Da schadete die Größe eines Mannes der Nachwelt [vid. auch p. 57], welche nicht den Mut hatte, ihn zu übertreffen.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-061",
     "kind": "text",
     "aa": 740,
     "aaEnd": 741,
     "pages": [
      {
       "p": 741,
       "i": 725
      }
     ],
     "ms": [
      {
       "p": 60,
       "i": 677,
       "raw": "co",
       "inferred": true
      }
     ],
     "text": "Wir kommen jetzt speziell auf das Vorurteil des Altertums, praejudicium antiquitatis. Wir haben das Vorurteil, daß damals, als die Alten gelebt, die Natur noch nicht so in Verfall geraten. Es sind auch noch andre Ursachen. Die Hochschätzung des Altertums findet vorzüglich bei denen statt, die die Alten studiert haben, <ohne> welches Studieren man auf den Namen eines Gelehrten gar nicht Anspruch machen kann — bei andern aus bloßer Nachahmung. [Ein vorläufiges Urteil als entscheidend angenommen heißt ein Vorurteil.] Auch bewundern wir die Alten, weil sie es im Kindesalter des menschlichen Geschlechts schon soweit gebracht hatten. Es ist ferner der Dankbarkeit gemäß, daß wir sie ihrer großen Verdienste wegen loben und ihre Schwächen vergessen und übersehen. — Wir können ja selbst einst Alte sozusagen mit f werden, wenn wir solche Produkte hinterlassen wie sie usw.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-062",
     "kind": "text",
     "aa": 741,
     "text": "Das Vorurteil der Neuigkeit entspringt aus Neigung. Denn der erste, der so etAvas mitteilt, findet darin ein Verdienst. Das wahre vorläufige Urteil würde dieses sein, daß Schriften, die sich durch so lange Zeiten bloß wegen ihres innern Werts und Vortrefflichkeit erhalten haben, doch etwas haben müssen, was bleibend und dauerhaft ist.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s15-063",
     "kind": "text",
     "aa": 741,
     "text": "[Wenn wir mit Mühe gewisse Erkenntnisse erlangt und diese im Zusammenhang mit andern in einer gewissen Verbindung zum Ganzen ein System ausmachen, so haben wir dafür eine Vorliebe. — Dies fließt aus der Natur des Menschen, wir f schließen auf die Wahrheit aus dem Zusammenhange. Es kann wohl ein angenommener Grund zur Erklärung vieler Folgen dienen, ohne der rechte Grund zu sein.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-064",
     "kind": "text",
     "aa": 741,
     "text": "Das Vorurteil des angenommenen Lehrsatzes, praejudicium systematis. Gegen dies wird häufig geschrieben. Ein System erlaubt ein vorläufiges günstiges Urteil zum Vorteil desselben. Die Tauglichkeit eines Satzes zum ganzen System beweist die Wahrheit <desselben>.",
     "dehyphenated": 1,
     "ocrConf": 51
    },
    {
     "id": "dohna-s15-065",
     "kind": "text",
     "aa": 741,
     "text": "Es gibt viele volontairs in den Wissenschaften, die unter keinem Kommando der Schule (sozusagen) stehen wollen. Wir müssen nicht zu sehr gegen die Systeme deklamieren. Dies haben einige französische Schriftsteller getan. Nachher gibt es ein Vorurteil des <faulen> Vertrauens, der Leichtigkeit.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s15-066",
     "kind": "text",
     "aa": 741,
     "ms": [
      {
       "p": 61,
       "i": 60,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Allgemeingültigkeit einer Regel kann man nur aus Regeln in6i abstracto beurteilen. Z. B. Man will über den Begriff der Lüge ein Prinzip haben. Darüber muß man in abstracto urteilen. Denn Avollte man auf einzelne Fälle sehn, so könnten manche Lügen nützlich sein, z. B. der Vorschlag des Themistokles — Aristides. Aber jede Treulosigkeit ist schändlich.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-067",
     "kind": "text",
     "aa": 741,
     "text": "Das Vorurteil der Seichtigkeit. Es besteht darin, daß man nicht in die Tiefen der Erkenntnis geht — nämlich auf subordinierte Merkmale. [Zu einem guten vorläufigen Urteil wird durchaus Genie erfordert.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s15-068",
     "kind": "text",
     "aa": 741,
     "aaEnd": 742,
     "pages": [
      {
       "p": 742,
       "i": 380
      }
     ],
     "text": "Hierauf redet der Autor von den entgegengesetzten Vorurteilen: nämlich, wenn man Mißtrauen gegen gewisse Dinge hat. [So läßt sich ein Vorurteil gegen das Alte denken, ebenso eins gegen das Neue — Mißtrauen in die ganze menschliche Erkenntnis nennt man Misologie.] Es kann auch auf sich selbst Bezug haben. Es ist dann für den Menschen vernichtend, wenn es seinen Mut zu allen und jeden Arbeiten zurückschreckt ; wenn es aber nur so ist f , daß wir bei jedem Geschäft unsern eigenen Kräften mißtrauen, so ist das die herrlichste Situation des menschlichen Gemüts.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s15-069",
     "kind": "text",
     "aa": 742,
     "text": "Nun kommen Avir zu der Lehre",
     "ocrConf": 38
    },
    {
     "id": "dohna-s15-070",
     "kind": "text",
     "aa": 742,
     "text": "Von dem Wahrscheinlichen",
     "ocrConf": 44
    },
    {
     "id": "dohna-s15-071",
     "kind": "text",
     "aa": 742,
     "ms": [
      {
       "p": 62,
       "i": 265,
       "raw": "02",
       "inferred": true
      }
     ],
     "text": "[Ein Kapitel, Avorin es die Logik nie weit bringen kann.] Wenn ich sage: etwas ist wahrscheinlich (sollte es auch nur subjektiv sein), so geht's auf Qualität. Frage ich aber: wie groß ist die Wahrscheinlich -keit, so betrachte ich sie dem Grad nach. Das Verhältnis der Gründe für die Wahrheit zu den Gründen des Gegenteils (verisimilitudo). Das Verhältnis aber der Gründe für die zureichende Wahrheit ist die Probabilität. Wenn ich nur einen Grund des Fürwahrhaltens und keinen zum Beweis des Gegenteils habe, so ist dies schon verisimilitudo. [Das verisimile ist das scheinbare — probabile annehmbar. Das Urteil über die verisimilitudo beruht auf der Vergleichung der Urteile für die Wahrheit zu den Gründen des Gegenteils. Bei der Probabilität machen die Gründe des Fürwahrhaltens mehr aus als die Hälfte — sie überwiegen.] Der zureichende Grund ist die Summe aller Fälle, die sich nur zutragen können. Nur in der Mathematik kann man die Gründe des Fürwahrhaltens bestimmt angeben.",
     "dehyphenated": 2,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s16",
   "title": "Stunde, Montag < f >",
   "titleSrc": "heading",
   "headings": [
    "Stunde, Montag < f >"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s16-001",
     "kind": "heading",
     "aa": 742,
     "text": "Stunde, Montag < f >"
    },
    {
     "id": "dohna-s16-002",
     "kind": "text",
     "aa": 742,
     "text": "[Alle Wahrscheinlichkeit finden wir numerando durch Zusammenzählen oder ponderando. Zum ersten Wege wird Gleichartigkeit erfordert, z. B. Wurf der Würfel, ebenso leicht 3 Sechsen als 3 Achten. Ich soll mit 2 Würfeln 8 werfen. Hier sind 5 Fälle möglich. Die Wahrscheinlichkeit läßt sich abzählen, ist = g56 der Gewißheit. Wenn aber etwas zu erraten, z. B. ein Zeugnis, so sind die Gründe zu ponderieren, z.B. ein Mensch von guter Erziehung usw. Wo die Gründe numeriert werden, kann ich sagen: es ist wahrscheinlich, wo sie aber ponderiert werden, nur: es ist mir wahrscheinlich. Ebenso kann man nie sagen: dies ist moralisch gewiß, sondern <ich bin) moralisch gewiß, d. h. es beruht bei mir auf praktischen Gründen, sonst darf man das Wort moralisch gar nicht gebrauchen — sonst sagt man besser: Gewißheit aus physischen Gründen — theoretisch.]",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "dohna-s16-003",
     "kind": "text",
     "aa": 742,
     "aaEnd": 743,
     "pages": [
      {
       "p": 743,
       "i": 124
      }
     ],
     "ms": [
      {
       "p": 63,
       "i": 639,
       "raw": "es",
       "inferred": true
      }
     ],
     "text": "Wahrscheinlich kann ein Satz nur heißen, insofern er auf dem Wege zur Gewißheit hegt und durch gleichartige Gründe vermehrt Gewißheit hervorbringt. Urteile, die aufs Übersinnliche gehen (sonst auch aufs Überschwengliche, Transcendente, im Gegensatz des Immanenten, welches mit den Sinnen gefaßt wird, in der Vorstellung bleibt). Also in metaphysischen, überhaupt in allen Dingen a priori gibt es keine Wahrscheinlichkeit im Theoretischen. Hier können wir nur wissen oder es ist nichts. Denn alle unsre Vermutungen können auf diesem Wege nicht zur Gewißheit gebracht werden. Auch dann nicht, wenn mehrere verschiedne Gründe vorhanden sind. Dieses nämlich zeigt weiter nichts an, als daß viel unzureichende Gründe sind, die nie einen allgemein geltenden Beweis abgeben können, und es ist immer ein Beweis von Ungewißheit, wenn man, anstatt einen zureichenden Grund zu nennen, mehrere, die es nicht sind, angibt. Wahrscheinlichkeit ist Annäherung zur Gewißheit, und mehrere Gründe, wenn sie gelten, sollen zusammen in einen Beweis verbunden werden. Es fehlt in den gleichen Fällen, wo wir auf dem Wege zur Gewißheit sind, nur noch ein complementum. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s16-004",
     "kind": "text",
     "aa": 743,
     "aaEnd": 744,
     "pages": [
      {
       "p": 744,
       "i": 1519
      }
     ],
     "ms": [
      {
       "p": 64,
       "i": 938
      }
     ],
     "text": "[ad § 176 p. 55] Der Verfasser redet noch von Zweifeln. Wir erhalten einen Zweifel — dubitatio — subjektiv, wenn unser Für wahrhalten nicht bestimmt (im aequilibrio steht). Es müssen bei der suspensio judicü die Gründe noch einen Zweifel lassen. Die Bezweifelung (dubium) als objektiver Grund des Fürwahrhaltens ist das Urteil, welches ich über Wahrheit fälle, oder eine Beziehung des Urteils aufs Subjekt, insofern es etwas für wahr hält. — Bezweifelung ist ein objektiver Grund, das Gegenteil für wahr zu halten, so klein er auch sein mag. [Der Zustand des Fürwahrhaltens mit Bewußtsein der Unzulänglichkeit heißt Zustand des Zweifels.] Einwurf ist ein Dubium, dessen ich mir bewußt bin, d. h. insoferne es in Begriffen des Verstandes angegeben wird — soferne es dunkel vorgestellt wird, ein Skrupel. [Aus diesem Skrupel kann ein determinierter Zweifel werden.] Dieser kann in einigen Fällen zur Klarheit eines Einwurfs erhoben werden. Es gibt häufige Einwendungen wider Verstandesurteile, denen Deutlichkeit fehlt [man hat ihnen geantwortet, sie sind aber noch nicht beantwortet], daher denn die Behandlung eines Skrupels Entwickelung erfordert. Man muß es dartun, woran der andre sich stößt. [Wenn dies klar wird, so trägt es sehr zur Vervollkommnung des Fürwahrhaltens bei.] Oft zerhaut man den Knoten, statt ihn zu lösen, z. B. im Streit bei der Behauptung, die Welt wäre die beste, wird von den Gegnern angeführt, es gebe soviel Arges, besonders für den Menschen darin, daß die Welt unmöglich gut genannt werden könnte, und man pflegt ohne ihre Falschheit aufzudecken <(zu) zeigen, daß die Welt, (das Werk) eines Allweisen, nicht schlecht sein könne. [Leibniz beantwortet den Einwurf so: es ist einmal ein Urheber da, den ich mir nicht anders als das beste, weiseste Wesen denken kann.] Difficultatem differre, non auferre, wenn Schwierigkeiten, auch durch Erkenntnisgründe gehoben, gleichen Schwierigkeiten unterworfen sind. [Z. B. Sündenfall durch den Teufel. (Würfel — 36 F.)] Ein andrer Ausdruck: obnubilare, non diluere — die Wahrheit noch mehr verdunkeln.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-005",
     "kind": "text",
     "aa": 744,
     "text": "[Stunde, Dienstag]",
     "ocrConf": 56
    },
    {
     "id": "dohna-s16-006",
     "kind": "text",
     "aa": 744,
     "text": "Wir kommen jetzt zu dem Zustand des Zweifels — Zustand des Gemüts, insofern es sich bewußt, daß es in Ansehung des Fürwahrhaltens undeterminiert ist. Dogmatismus und Skeptizismus sind einander entgegengesetzt. [Die skeptische Methode ist die, seinen Beifall aufzuschieben, da man gleich offen für die Gegengründe ist.] Der allgemeine Skeptizism ist das Vorurteil, alle Erkenntnis überhaupt als ungewiß anzunehmen. Der Dogmatism ist das Vorurteil, die (völlige) Gewißheit der Erkenntnis anzunehmen, ohne daß man die Kritik unsers Vernunftvermögens für notwendig hält [ — der Vernunft nachteilig]. [Dogmatischer Skeptizism, der alle Gewißheit für unmöglich erklärt.]",
     "dehyphenated": 4,
     "ocrConf": 49
    },
    {
     "id": "dohna-s16-007",
     "kind": "text",
     "aa": 744,
     "text": "[Logice dijudicata gibt es nicht — hier sind nicht völlig ausgemachte Wahrheiten. Wir müssen wenigstens immer die möglichen Zweifel dagegen beantworten.",
     "dehyphenated": 1,
     "ocrConf": 52
    },
    {
     "id": "dohna-s16-008",
     "kind": "text",
     "aa": 744,
     "text": "Kritizism ist das Prinzip, Urteile a priori nicht eher wahr zu halten, als bis wir sie verglichen haben mit den Gesetzen unsers Vernunftvermögens. Nur in Erkenntnissen a priori durch Begriffe ist diese Methode anwendbar und notwendig.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-009",
     "kind": "text",
     "aa": 744,
     "aaEnd": 745,
     "pages": [
      {
       "p": 745,
       "i": 651
      }
     ],
     "ms": [
      {
       "p": 65,
       "i": 0,
       "raw": "«5",
       "approx": true,
       "inferred": true
      },
      {
       "p": 66,
       "i": 1022
      }
     ],
     "text": "j Mathematik und Naturwissenschaft bedürfen nicht der Kritik unserer Vernunft. Wir haben da nicht nötig zu untersuchen, wo die Grenzen dieser Erkenntnisse sind, weil alles durch Anschauung dargetan werden kann. — Das Vorurteil des Dogmatismus gründet sich aufs Gelingen vieler Erkenntnisse a priori ohne Kritik durch die Vernunft. Hier gelingt es ihr herrlich, und daher glaubt man, daß es ihr in andern Fällen auch gelingen werde. Man kann es dem Plato nicht übelnehmen, daß er durch Nachdenken über die Mathematik auf schwärmerische Ideen kam — wenn nur hernach die Platoniker es nicht zu weit getrieben hätten. Unsere Begriffe sind, wie schon oben erwähnt, mathematisch und philosophisch — die erstem bestätigen sich von selber durch die Anschauung, welches bei den letztern gar nicht stattfinden kann. Erläutern heißt bloß seine Begriffe analysieren, aber erweitern, wenn man über die gewöhnlichen Begriffe hinausgeht. Wenn man sein Vernunfterkenntnis durch bloße Begriffe erweitern will, so ist man schon, wenn dabei keine weitere Kritik stattfindet, Dogmatiker. [Hypothese: Schluß aus der Zulänglichkeit eines Grundes auf gegebene Folgen, daß dieser Grund der richtige sei — diese Annehmung, um daraus jene Folgen erklären zu können, ad p. 68.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "dohna-s16-010",
     "kind": "text",
     "aa": 745,
     "text": "Sehr oft hat der Gegensatz ebensoviel Gründe als der Satz selber. Ein Beispiel — Satz: Die Welt hat einen Anfang, Gegensatz: Die Welt kann keinen Anfang haben. Was hätte denn das Wesen, was sie erschaffen — die ganze Ewigkeit hindurch gemacht ? Die Metaphysik ist Erweiterung unseres Erkenntnisses durch Begriffe a priori — durch Konstruktion derselben — die Mathematik. Unsere Vernunft im reinen Gebrauch ist dialektisch. —",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-011",
     "kind": "text",
     "aa": 745,
     "ms": [
      {
       "p": null,
       "i": 678,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Der strengste Skeptiker, der gar nicht mehr kritisch ist, kann mit Recht ein dogmatischer Skeptiker genannt werden, obgleich es widersprechend scheint. Man kann sie leicht fangen. Sie wollen demonstrieren, daß keine Wahrheit demonstriert werden könne. Sie widerlegen die Argumente der Dogmatiker und nehmen doch Gewißheit an — am Ende sagen sie : alles in der Welt ist ungewiß, auch das, daß alles in der Welt ungewiß sei, sie nannten es Kathartikon oder Purganz, die sich selbst mit abführt. Die Skeptiker hatten gewöhnlich viel dialektischen Scharfsinn, wie man aus ihren Schriften ersehen kann. [Persiflage — Piatos Schüler Speusipp, Arcesilas, Carneades Skeptiker — partial Pyrrho) — nichts {der akademische Zweifel).]",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s16-012",
     "kind": "text",
     "aa": 745,
     "aaEnd": 746,
     "pages": [
      {
       "p": 746,
       "i": 796
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "6T",
       "unresolved": true
      }
     ],
     "text": "Der Mathematiker darf nie untersuchen, warum seine Sätze a priori sind. Der Kritizism ist das Mittlere zwischen dem Dogmatism und Skeptizism, das Prinzip eines rechtmäßigen Zutrauens auf seinen Vernunftgebrauch. Transcendent ist das, was durch kerne Erfahrung oder sinnliche Belege dargetan werden kann. Man kann aus eben dem Grunde nie auf einen Irrtum stoßen, nur in dem Fall, wenn man selbst das Gegenteil beweisen kann. In diesen Fällen ist also durchaus Kritik notwendig, nicht in der Mathematik, weil es hier wirkliche Facta gibt. — Der Skeptizism ist also wohl freilich verwerf lieh — aber die skeptische Methode, eine Sache immer mehr zu prüfen und zu untersuchen, hat sehr viel Vorzüge — der Zweifel des Aufschubs — indagare. — [Dies ist der Zweifel, welcher für die Erforschung der Wahrheit die nützlichsten Folgen hat.] — Der akademische Zweifel war dogmatisch. Sie wollten nämlich, daß nichts gewiß wäre. Der pyrrhonische Zweifel scheint mehr Zweifel des Aufschubs gewesen | zu | sein. Wenigstens war er gewiß nicht so allgemein als der akademische.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "dohna-s16-013",
     "kind": "text",
     "aa": 746,
     "ms": [
      {
       "p": 68,
       "i": 0
      }
     ],
     "text": "[| ad | § 181 P. 57] Hypothese — Voraussetzung. Sie ist ein Urteil aus der Zulänglichkeit eines Urteils zu gegebnen Folgen auf die Wirklichkeit des Grundes zu schließen. Jede Hypothese ist am Ende bloße Meinung — aus der Zulänglichkeit eines Grundes zu einer gegebenen Folge kann man noch nicht auf die Wahrheit des Satzes schließen. Denn es könnten ja auch andere Gründe für die (Folgen) zureichend sein. [Die Zulänglichkeit des Grundes aus gewissen gegebnen Folgen gibt noch keinen vollkommenen Schluß auf seine Wahrheit.]",
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "dohna-s16-014",
     "kind": "text",
     "aa": 746,
     "text": "Wir bedürfen Hypothesen und können sie in der Naturwissenschaft gar nicht entbehren. [Hypothese ist mehr als Meinung, wirkliche Voraussetzung.] Allein, was besonders ist, die Metaphysik hat auch Hypothesen — wohl nicht in theoretischer Rücksicht, aber doch in praktischer.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s16-015",
     "kind": "text",
     "aa": 746,
     "text": "| 1. | Der Grund, den ich per hypothesin annehme, davon muß die Möglichkeit gewiß sein [sonst geht man ganz mit leeren Fiktionen], z. B. Zentralfeuer. [Gurken im Honigtopf. Coming will die Isis gefunden haben.]",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s16-016",
     "kind": "text",
     "aa": 746,
     "text": "2. Die Folge aus dem angenommenen Grunde muß gegeben sein, diese muß also wirklich sein — die Ursache darf nur möglich sein.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s16-017",
     "kind": "text",
     "aa": 746,
     "text": "3. Die Konsequenz (der Folgen) aus ihrer Ursache muß ebensowohl ganz gewiß sein. Wie kann man sonst daraus schließen ?",
     "ocrConf": 41
    },
    {
     "id": "dohna-s16-018",
     "kind": "text",
     "aa": 746,
     "ms": [
      {
       "p": 69,
       "i": 0,
       "raw": "(ü)",
       "inferred": true
      }
     ],
     "text": "Das 4te Requisitum die Einheit des angenommenen Grundes bei seiner Zulänglichkeit in Ansehung der Folgen. [— Alle Folgen müssen aus diesem einen angenommenen Grunde fließen. Wenn es nicht geht, so nimmt man noch eine neue | Hypothese | zu Hilfe, hypothesis subsidiaria — (so sucht f man . . .f) z. B. gewisse Arzneien heilen gewisse Krankheiten. Die Zulänglichkeit eines Grundes zu allen Folgen bleibt aber ungewiß, also jede Hypothese.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-019",
     "kind": "text",
     "aa": 746,
     "aaEnd": 747,
     "pages": [
      {
       "p": 747,
       "i": 457
      }
     ],
     "text": "Eine Hypothese erlangt, solange sie Hypothese bleibt, nie völlige Gewißheit, cl. h. keine apodiktische (wo das Gegenteil unmöglich wäre), empirische kann sie wohl erlangen. Wir reden hier nur von Hypothesen des theoretischen Erkenntnisses. Es giebt aber auch moralisch praktische Hypothesen, welche notwendig sind, indem sie beständig nach gewissen Gesetzen geschehen. Aber eine Hypothesis in theoretischer Absicht ist nie notwendig. In moralischer Absicht aber, z. B. die Pflicht objektiv und Glückseligkeit subjektiv notwendig sind usw. gewiß.",
     "joined": [
      "layout"
     ],
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-020",
     "kind": "text",
     "aa": 747,
     "text": "[ad §184 P. 58] Von der Überredung und Überzeugung, [persuasio male signif icat . . . . j]",
     "ocrConf": 32
    },
    {
     "id": "dohna-s16-021",
     "kind": "text",
     "aa": 747,
     "ms": [
      {
       "p": 70,
       "i": 443,
       "raw": "iit",
       "inferred": true
      }
     ],
     "text": "Der Unterschied zwischen Überredung und Überzeugung ist mißlich. Die Persuasion ist eigentlich das Fürwahrhalten aus Gründen, ohne eben zu untersuchen, ob sie objektiv oder subjektiv sind. Das Fürwahrhalten eines Satzes, ohne unterscheiden zu können, ob es aus subjektiven oder objektiven Gründen geschieht. Selbst ein Rechtschaffner ist als Richter unvermögend, die subjektiven Gründe seines Urteils von den objektiven zu unterscheiden, wenn er vorteilhaft für die Sache seines Freundes gesinnt ist.",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s16-022",
     "kind": "text",
     "aa": 747,
     "text": "Wir haben schon oben von der Wissenschaft geredet. [Eine Erkenntnis ist systematisch, wenn die Verbindung, welche sie hat, zu einem Ganzen notwendig ist. Ein System ist ein Ganzes, soferne das Bewußtsein seiner Totalität nur allein nach Prinzipien möglich ist. — ] Sie | seil, die Wissenschaft | ist eigentlich der Inbegriff der Erkenntnisse, insofern sie in einem System verbunden sind. Es wird dazu eben nicht erfordert, daß sie rational seien. Man muß aber auch die Kunst sorgfältig von der Wissenschaft unterscheiden. Sie ist in sensu stricto: diejenige Geschicklichkeit etwas hervorzubringen, welches man, wenn man es auch weiß, doch noch nicht machen kann. Mechanische Kunst würde die heißen, welche man schon kann, wenn man sie nur weiß, oder handwerksmäßige Kunst. Kunst aber, im Unterschied von der gemeinen Geschicklichkeit, die oben definierte in sensu stricto.",
     "dehyphenated": 4,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s17",
   "title": "[Stunde, Montag]",
   "titleSrc": "heading",
   "headings": [
    "[Stunde, Montag]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s17-001",
     "kind": "heading",
     "aa": 747,
     "text": "[Stunde, Montag]"
    },
    {
     "id": "dohna-s17-002",
     "kind": "text",
     "aa": 747,
     "ms": [
      {
       "p": 71,
       "i": 388,
       "raw": ":i",
       "inferred": true
      }
     ],
     "text": "Kunst ist das System ungleichartiger Geschicklichkeiten. Außer der mathematischen oder intuitiven und der philosophischen oder diskursiven gibt es noch eine Gewißheit, die nicht objektiv ist. Der Grund ist eigentlich subjektiv — es ist nämlich eine praktisch gültige Gewißheit, die man nicht eben moralisch, sondern eher pragmatisch nennen muß, wenn man nämlich etwas nicht so nach Regeln der Sittlichkeit, sondern mehr nach Regeln der Klugheit annimmt. Eine technische Regel ist Regel der Kunst, eine pragmatische der Klugheit, eine moralische der Sittlichkeit, der Tugend — Pflicht. Unter die praktische Gewißheit gehört auch die moralische. —",
     "ocrConf": 44
    },
    {
     "id": "dohna-s17-003",
     "kind": "text",
     "aa": 748,
     "text": "Der Autor spricht hier von einer mathematischen Gewißheit vom ersten und 2ten Range. Aber es gibt hier kernen Unterschied, als den zwischen mathematischer und diskursiver Gewißheit. [Die bloß absolute Notwendigkeit ist noch lange nicht mathematische Gewißheit — 2-2=4. Denn obwohl was wahr ist, nicht noch wahrer sein kann, so bleibt doch immer Verschiedenheit im Grade der Gewißheit, weil dort nur durch Begriffe, hier aber durch Anschauung bewiesen wird.]",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s17-004",
     "kind": "text",
     "aa": 748,
     "text": "Hypothesis bedeutet in den meisten Fällen eine bloß willkürliche Position. Thesis, ein fester Satz.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s17-005",
     "kind": "text",
     "aa": 748,
     "text": "Jetzt kommt der Autor zu dem Abschnitt",
     "ocrConf": 42
    },
    {
     "id": "dohna-s17-006",
     "kind": "text",
     "aa": 748,
     "text": "Von den Beweisen",
     "ocrConf": 44
    },
    {
     "id": "dohna-s17-007",
     "kind": "text",
     "aa": 748,
     "text": "Die Constitutiva jedes Beweises sind:",
     "ocrConf": 49
    },
    {
     "id": "dohna-s17-008",
     "kind": "text",
     "aa": 748,
     "text": "1. Die Beweisführung, probatio,",
     "ocrConf": 48
    },
    {
     "id": "dohna-s17-009",
     "kind": "text",
     "aa": 748,
     "text": "2. das, was bewiesen werden soll, probandum. Es ist das Materiale des Beweises.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s17-010",
     "kind": "text",
     "aa": 748,
     "text": "3. Das Verhältnis zwischen beiden, daß eine richtige Konsequenz daraus folge: z. B. alles Ausgedehnte ist teilbar, alle Körper sind ausgedehnt, also sind alle Körper teilbar, und hernach die fernem Schlüsse usw.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s17-011",
     "kind": "text",
     "aa": 748,
     "text": "Unerweislich kann erstlich das, was ganz falsch, und das, was unmittelbar gewiß ist, genannt werden. Letztere Sätze sind indemonstrabel, die mittelbaren demonstrabel.",
     "dehyphenated": 1,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s18",
   "title": "[Stunde]",
   "titleSrc": "heading",
   "headings": [
    "[Stunde]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s18-001",
     "kind": "heading",
     "aa": 748,
     "text": "[Stunde]"
    },
    {
     "id": "dohna-s18-002",
     "kind": "text",
     "aa": 748,
     "ms": [
      {
       "p": 72,
       "i": 0
      }
     ],
     "text": "Beweisen heißt mittelbar um eines Grundes willen etwas für wahr halten. Wir können alle Beweise in direkte [oder ostensive] und indirekte oder apagogische teilen. Letztere sind diejenigen, die man aus der Falschheit des Gegenteils (herleitet). Die apagogischen Beweise haben fast mehr intuitus in sich, als die direkten, weil der Widerspruch immer auffallend ist. [Apodiktische Beweise — mit Bewußtsein der Notwendigkeit — demonstratio, ein Beweis verbunden mit Anschauung.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s18-003",
     "kind": "text",
     "aa": 748,
     "text": "Man kann vieles apagogisch beweisen ex concessis, nämlich wenn der andre schon etwas concediert hat. Dies sind die argumenta ad hominem. Es gibt in der Mathematik viele solche Beweise. Sie sind allezeit vortrefflich.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s18-004",
     "kind": "text",
     "aa": 749,
     "ms": [
      {
       "p": 73,
       "i": 518,
       "raw": "T3",
       "inferred": true
      }
     ],
     "text": "Jetzt wollen wir sehn, wie sie zur Philosophie passen. Wenn ein angenommener Begriff selber Widerspruch enthält, so kann auch das Prädikat dem Begriff widerstreiten und das Gegenteil des Prädikats auch. [Die apagogischen Beweise sind in der Philosophie sehr mißlich.] Man kann apagogisch ganz verschiedene Sätze auf einmal beweisen. Dies kommt in der Philosophie sehr oft vor. Es kann jemand apagogisch seinen Gegner widerlegen und von ihm selbst ebenso kräftig widerlegt werden daß er auch ad absurdum gebracht wird. Der menschliche Wille ist frei. Dieser Satz ist in der Moral unentbehrlich. Denn wenn die Menschen nicht anders handeln könnten, als sie handeln, so wären ja alle Gesetze umsonst. Die Meinung des Gegenteils von diesem Satze heißt der Fatalismus, daß alle Menschen nur nach gewissen von der Natur bestimmten Gesetzen handeln. Priestley und Price haben darüber einen langen Streit gehabt. Jeder brachte den andern ad absurdum und doch kam nichts zu Ende. [Keiner beweist directe seinen Satz, sondern immer nur die Falschheit des Gegenteils. Das kann in der Philosophie leicht täuschen, denn man kann dabei ebensowohl selbst irren, wenn man auch beweiset, daß der andre irret — sehr leicht können alle beide unrecht haben.] Die gegebene Menge aller Teile ist endlich oder unendlich, d.h. alle Teile eines Körpers zusammengenommen, und dies können wir nie tun, denn jeder Körper ist unendlich teilbar, man würde nie fertig. Daher ist eine Zusammennehmung aller Teile eine Contradictio in adjecto. —",
     "dehyphenated": 4,
     "ocrConf": 44
    },
    {
     "id": "dohna-s18-005",
     "kind": "text",
     "aa": 749,
     "text": "Das Resultat von allem diesem ist, daß man sich in der Philosophie der apagogischen Beweise nicht bedienen kann, weil man sie närnlich hier nicht in der Anschauung dartun kann.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s18-006",
     "kind": "text",
     "aa": 749,
     "text": "Eine ästhetische Demonstration würde die genannt werden, die durch ein Bonmot geschieht [aber nicht immer wahr ist].",
     "ocrConf": 48
    },
    {
     "id": "dohna-s18-007",
     "kind": "text",
     "aa": 749,
     "text": "Nun kommen wir zu dem Abschnitt :",
     "ocrConf": 45
    },
    {
     "id": "dohna-s18-008",
     "kind": "text",
     "aa": 749,
     "ms": [
      {
       "p": 74,
       "i": 0
      }
     ],
     "text": "Von den Quellen unserer Erkenntnis",
     "ocrConf": 36
    },
    {
     "id": "dohna-s18-009",
     "kind": "text",
     "aa": 749,
     "aaEnd": 750,
     "pages": [
      {
       "p": 750,
       "i": 479
      }
     ],
     "text": "[Der Autor hat 3, Erfahrung, Vernunft und Glauben.] Sie sind nicht 3fach, sondern nur 2fach: 1. rational, 2. empirisch. [Es gibt einen Vernunftglauben, aber bloß in praktischer Rücksicht — dies ist also keine aparte Quelle sondern immer nur Vernunft, welche entweder theoretisch oder praktisch ist. Alle Erfahrung ist 2fach, unmittelbar oder mittelbar. Diese letztere Art ist der historische Glaube.] Was den Glauben anbetrifft, kann man den historischen auch empirisch nennen : er gründet sich immer auf das Zeugnis und die Erfahrung eines andern. Ein rationaler Glaube geht auf solche Dinge, die man gar nicht wissen kann. Aber auf den Vernunftglauben gründet sich keine theoretische Erkenntnis : er ist bloß in praktischer Absicht hinreichend. Eine Vergleichung und Verbindung der Wahrheit zu einer Erkenntnis. Erfahrung ist Operation des Verstandes, daher Wahrnehmung noch lange nicht zureicht. Historischer Glaube ist Verknüpfung der Erfahrungen anderer mit der meinigen. [Es kommt nun darauf an, zu bestimmen, was mich berechtige, mittelbare Erfahrung ebenso als unmittelbare zu achten — worauf Autorität beruhe.] Der Zeuge ist authentisch, der ein Augenzeuge, testis oculatus ist, [der unmittelbare Erfahrung selbst hat]. Er ist unverwerflich, wenn er die Wahrheit wissen kann und sagen will. Also Capazität und Integrität sind die beiden Requisita.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "dohna-s18-010",
     "kind": "text",
     "aa": 750,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "w",
       "unresolved": true
      }
     ],
     "text": "Testis auritus. In der Reihe solcher Zeugen gibt es oft nichts als Sage — rumor <(sine capite) — je mehr derselben sind, desto unsicherer ist die Sage. Es ist so als die Kopie von der Kopie. [Je länger die Kette, desto ungewisser. Tradition, wo der erste Zeuge unbekannt ist. Wenn du glaubtest, würdest du die Sage nicht bis auf den ersten Grund erforschen. Die Tüchtigkeit ist gar nicht auszumachen. — ] Aber je größer die Menge der koordinierten Zeugen ist, desto glaubwürdiger ist die Sage. — Es ist nicht das beste Mittel, die Integrität einer Person, deren Charakter man sonst nicht kennt, daraus zu beurteilen, ob sie Interesse dabei gehabt habe oder nicht. Es gehören hierher noch mancherlei Klugheitsregeln, die man aber in der Logik nicht anführen darf.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s18-011",
     "kind": "text",
     "aa": 750,
     "text": "Wir wollen nun den Begriff des Glaubens berühren, insofern er nicht Erkenntnisquelle ist, sondern bloßes Urteil der Vernunft, insofern er nicht mehr eine theoretische, sondern bloß praktische Absicht hat. [Ungläubig in Rücksicht des Praktischen — des Vernunftglaubens, ungläu bisch in Absicht des Theoretischen, des historischen Glaubens. Für ungläubig ist im Lateinischen kein Wort. Ungläubig ist der, welcher aus moralischen Gründen (die hinreichend sind zu Triebfedern der Sittlichkeit) etwas nicht annehmen will, z. B. das Dasein eines höchsten Wesens. — ]",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "dohna-s18-012",
     "kind": "text",
     "aa": 750,
     "aaEnd": 751,
     "pages": [
      {
       "p": 751,
       "i": 258
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 273,
       "raw": "*<»",
       "unresolved": true
      }
     ],
     "text": "Eine Hypothesis, die man in praktischer Absicht für notwendig hält, z. B. ein Kaufmann findet einen Grund, der hinreichend ist, etwas zu unternehmen. Z. B. Ein General muß notwendig etwas urteilen und beschließen, wenn er vor dem Feinde steht. Also ist hier die Hypothesis nicht beliebig, um etwas zu erklären, sondern sie ist notwendig in praktischer Absicht. Im erstem Falle wäre aber die Absicht theoretisch. Alle praktischen Absichten ( — Gesetzgebungen der Vernunft) sind entweder 1. pragmatisch oder 2. moralisch, d. h. entweder Regeln der Klugheit oder Gesetze der Sittlichkeit. So ist die Absicht jenes Generals pragmatisch. Der Glaube, als Hypothese angesehen, wird in moralischer Absicht notwendig, kann reiner Vernunftglaube genannt werden. Der Begriff der Pflicht ist ganz von dem des Vorteils unterschieden. Der gesetzte Zweck der Erfüllung aller Pf hellten ist Beförderung des höchsten Guts, insofern man es hier erreichen kann, Glückseligkeit der Menschen: die Vereinigung der Sittlichkeit, Würdigkeit glücklich zu sein, mit der Glückseligkeit selbst, steht in keines Menschen Gewalt. Wenn wir sehen, daß unsere Erkenntnisquellen nicht hinreichen, um Gott als moralisches Wesen zu erkennen, so können wir darum doch einen moralischen Glauben dadurch haben. [Der praktische Glaube erweitert die Erkenntnis nicht, er ist nur der Übergang vom Theoretischen zum Praktischen.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s18-013",
     "kind": "text",
     "aa": 751,
     "text": "Unser Autor redet nun von der Vollkommenheit der praktischen Erkenntnis, ein Kapitel, welches eigentlich speziell nicht in die Logik gehört.",
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s19",
   "title": "Von der praktischen Erkenntnis",
   "titleSrc": "heading",
   "headings": [
    "Von der praktischen Erkenntnis"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s19-001",
     "kind": "heading",
     "aa": 751,
     "text": "Von der praktischen Erkenntnis"
    },
    {
     "id": "dohna-s19-002",
     "kind": "text",
     "aa": 751,
     "text": "Man sieht, daß das, was er darüber sagt, nicht so ganz in die Logik gehört. Es wäre gut, daß man die bloß spekulativen Dinge in der Religion wegheße. Ein spekulatives Erkenntnis ist das, Avaspraktisch gar keine Anwendung hat. Praktische Sätze sind entweder Imperativen — dann werden sie den theoretischen entgegengesezt — oder sie sind Gründe zu möglichen Imperativen und alsdann werden sie den bloß spekulativen entgegengesetzt. Z. E. Es ist ein Gott, dies ist kein bloß spekulativer, sondern ein praktischer Satz. Denn er enthält Gründe zu möglichen Imperativen.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s19-003",
     "kind": "text",
     "aa": 751,
     "text": "[Praktische Sätze (sind die, welche) Erkenntnisgründe zu möglichen Imperativen enthalten. Der Satz: Es ist ein ander Leben, ist praktisch, weil er Gründe enthält zu möglichen Imperativen. — Auch theoretische Sätze heißen praktisch, wenn sie Gründe dazu enthalten. Spekulative Sätze sind die, welche gar keine Gründe dazu enthalten. Imperative bestimmen zum Handeln.]",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s19-004",
     "kind": "text",
     "aa": 751,
     "text": "Nun gehen wir zu einer neuen Sektion :",
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s20",
   "title": "Von Begriffen",
   "titleSrc": "heading",
   "headings": [
    "Von Begriffen"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s20-001",
     "kind": "heading",
     "aa": 752,
     "text": "Von Begriffen"
    },
    {
     "id": "dohna-s20-002",
     "kind": "text",
     "aa": 752,
     "text": "Alle Erkenntnis ist durch Anschauung oder Begriff — Vorstellung ist ein Elementarausdruck, der nicht weiter aufgelöst werden kann. Mit der Repräsentation läßt sich noch die Apperzeption verbinden ■ — das Bewußtsein der Vorstellung.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s20-003",
     "kind": "text",
     "aa": 752,
     "ms": [
      {
       "p": 78,
       "i": 0
      }
     ],
     "text": "[ad p. 14] Eine Vorstellung mit Bewußtsein verbunden heißt Wahrnehmung, perceptio. Diese perceptio wird cognitio, sofern die Repräsentation mit Bewußtsem auf einen Gegenstand bezogen wird. Diese Vorstellung ist nun wieder zwiefach :",
     "ocrConf": 49
    },
    {
     "id": "dohna-s20-004",
     "kind": "text",
     "aa": 752,
     "text": "1. intuitus — dies ist noch kern Erkenntnis,",
     "ocrConf": 31
    },
    {
     "id": "dohna-s20-005",
     "kind": "text",
     "aa": 752,
     "text": "2. conceptus, enthält das, was mehrern Gegenständen gemein ist, nota communis. Der Begriff, für sich betrachtet, ist :",
     "ocrConf": 45
    },
    {
     "id": "dohna-s20-006",
     "kind": "text",
     "aa": 752,
     "text": "a) conceptus empiricus — wenn in seiner Vorstellung Empfindung ist [zu dessen Existenz das Vorausgehn der Erfahrung erfordert wird. Das Material aller empirischen Vorstellung ist Empfindung.]",
     "ocrConf": 48
    },
    {
     "id": "dohna-s20-007",
     "kind": "text",
     "aa": 752,
     "text": "b) conceptus purus, dieser heißt notio. Er kann heißen ein reiner Verstandesbegriff. Der Begriff vom Triangel ist conceptus |a| priori.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s20-008",
     "kind": "text",
     "aa": 752,
     "text": "[Begriff ist repraesentatio discursiva. — Die Handlung wodurch wir einem Begriff die korrespondierende Anschauung geben, heißt Darstellung, exhibitio. Erkenntnis ist mehr als conceptus, mehr als intuitus, es ist beides zusammen. Wir suchen objektive Realität, die wir durch Anwendung auf Anschauung erlangen.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s20-009",
     "kind": "text",
     "aa": 752,
     "text": "Idea heißt ein Vernunftbegriff, dem kein Gegenstand adäquat in der Anschauung kann gegeben werden.",
     "ocrConf": 51
    },
    {
     "id": "dohna-s20-010",
     "kind": "text",
     "aa": 752,
     "aaEnd": 753,
     "pages": [
      {
       "p": 753,
       "i": 947
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 458,
       "raw": "19",
       "unresolved": true
      }
     ],
     "text": "Die Vorstellung, wenn sie aus dem Verstände entspringt, ist allemal ein Begriff. Aber die Anschauung von rot gibt noch kernen Verstandesbegriff. — Die Vorstellung von etwas als Ursache kann nur durch den Verstand geschehn, ist also eine notio. [Eine Ursache kann man nie erfahren — denn die Kausalität ist notio.] Alle Anschauung ist nur Vorstellung desjenigen, was uns durch die Sinne gegeben ist. Wo sie stattfindet, — z. B. bei mathematischen Begriffen — da gibt es nie notiones — reine Verstandesbegriffe, aber wohl conceptus a priori. [Conceptus purus : 1. intellectualis, 2. rationalis. Conceptus purus intellectualis heißt notio — z. B. Tugend. Conceptus purus, dem keine Anschauung korrespondierend gegeben werden kann, idea, z. B. von Gott. — Von Tugend kann ich Beispiele geben. Doch ist sie kein Erfahrungsbegriff. Die Ontologiehat es mit lauter Notionen zu tun. — Begriffe sind ihrer Materie nach dati oder factitii. Die erstem heißen notiones, die letztern empirische Begriffe. (Conceptus arbitrarii, willkürliche). Jeder Erfahrungsbegriff ist gemacht. Wahrnehmung ist nur subjektiv — noch nicht Erfahrung. Diese ist Erkenntnis mit Bewußtsein der Beziehung aufs Objekt.]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 42
    },
    {
     "id": "dohna-s20-011",
     "kind": "text",
     "aa": 753,
     "text": "Zur Sinnlichkeit gehören zwei Stücke, Sinn und Einbildungskraft. Es gibt bloß logische Begriffe — die sogenannten ästhetischen Begriffe sind bloß Vorstellungen ohne Begriff. Es gibt a priori reine Verstandesbegriffe, aber auch sinnlich bestimmte Verstandesbegriffe [ad § 255].",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s20-012",
     "kind": "text",
     "aa": 753,
     "ms": [
      {
       "p": null,
       "i": 722,
       "raw": "8*",
       "unresolved": true
      }
     ],
     "text": "Erfahrung heißt empirisches Erkenntnis. Bei einer empirischen Vorstellung muß etwas wahrgenommen (mit Bewußtsein empfunden) werden. Also setzt Erfahrung empirische Anschauung und Begriff voraus. Empfindung ist dazu unentbehrlich. Die Transcendentalphilosophie, welche vor der Metaphysik vorhergehn muß, handelt von dem Ursprünge der reinen Verstandesbegriffe. Das tut die Logik nicht. Sie beschäftigt sich nur mit den wirklichen Handlungen. Zum Gebrauche eines Begriffs wird Absonderung erfordert, aber dadurch wird der Begriff noch nicht gemacht. Letzteres geschieht 1. dadurch, daß etwas als Teilvorstellung betrachtet wird, die mehrern gemein sein kann, z. B. die rote Farbe. 2. wenn ich die Teilvorstellung als notam, als Erkenntnisgrund einer Sache betrachte, z. B. durch rot Blut, Rose usw. erkenne. Die 3te Handlung ist die Abstraktion, diese Teilvorstellung als Erkenntnisgrund, insofern ich von allen übrigen Teilvorstellungen absehe. Der Begriff ist also eine Teilvorstellung, sofern ich von allen übrigen dabei abstrahiere.",
     "dehyphenated": 5,
     "ocrConf": 46
    },
    {
     "id": "dohna-s20-013",
     "kind": "text",
     "aa": 753,
     "text": "[Abstrahieren ist im philosophischen Sinne ein negativer Begriff — nicht attendieren. Es gibt nicht abstrakte Begriffe. Wir können nur von etwas abstrahieren, von gewissen Unterschieden, Merkmalen der Dinge. Der Unterschied zwischen abstrakt und konkret liegt nicht im Begriff, sondern im usu conceptuum.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s20-014",
     "kind": "text",
     "aa": 753,
     "text": "Ein Begriff kann in andern Begriffen enthalten (ein Teil von ihnen) sein, die andern können aber auch zugleich unter ihm, er der Grund derselben sein. Beides sind nur die verschiedenen Beziehungen desselben Begriffs, der ganz wohl zugleich Teil und Grund von etwas sein kann. Mensch ist die Teilvorstellung vom Neger, vom Gelehrten (denn ein Teil vom Begriff dieses usw. ist doch immer, daß er Mensch ist), zugleich ist aber auch dieser Begriff Erkenntnisgrund, worunter der Weiße, der Neger, der Gelehrte gehören.]",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s20-015",
     "kind": "text",
     "aa": 754,
     "text": "Durch Abstrahieren wird nicht nur nichts hervorgebracht, sondern vielmehr weggelassen. Man muß nicht sagen: ich abstrahiere eine Vorstellung, sondern ich abstrahiere von einer Vorstellung. Ich kann entweder abstrahieren von der Verschiedenheit der Dinge, denen dieser Begriff gemein ist, oder ich kann darauf attendieren im Vergleich mit andern. Dies ist eigentlich der Gebrauch des Begriffs, im erstem Fall in abstracto, im zweiten Fall in concreto.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s20-016",
     "kind": "text",
     "aa": 754,
     "text": "Das Vermögen des Gebrauchs der Begriffe in concreto heißt der gemeine Verstand, das Vermögen usw. in abstracto der spekulative Verstand. Der abstrakte Begriff {ist in dem) konkreten enthalten und <hält> selbst den konkreten unter sich. Ein höherer Begriff ist der, welcher mehrere in sich faßt. Repraesentatio singidaris — hat einen intuitum, zeigt ihn unmittelbar an, ist aber im Grunde kein conceptus. Z. B. Sokrates ist kein conceptus.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s20-017",
     "kind": "text",
     "aa": 754,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "8i",
       "unresolved": true
      }
     ],
     "text": "[Stunde, Montag]",
     "ocrConf": 37
    },
    {
     "id": "dohna-s20-018",
     "kind": "text",
     "aa": 754,
     "text": "Sobald ich mich schon |der| Worte bediene, ist die Vorstellung ein einzelner Begriff. Wird aber der Begriff ganz besonders ausgedrückt, so betrachtet man es in abstracto. Dann heißt er nicht mehr conceptus universalis, sondern communis. Ein conceptus communis kann in Ansehung der Begriffe, die in (ihm) enthalten sind, superior genannt werden [ein höherer Begriff], in Ansehung derer, in denen er enthalten ist, inferior. [Der inferior (unterer) enthält immer mehr in sich, jener | d. h. der superior | mehr unter sich, aber weniger in sich. Denn der conceptus superior ist eben dadurch, daß er wenig in sich enthält, ganz allgemein, z. B. der Begriff Mensch unter dem des Tiers. Daher dieser letzte ein conceptus superior, indem er nun mehr unter sich enthält, enthält er doch weniger in sich. Wir lassen hier die Eigenschaft des Verstandes (beim Menschen) weg. Je höher die Begriffe ■ — ■ desto einfacher. Lebende körperliche Wesen — noch höher körperliche Wesen, simpel. Der höchste: Wesen, Ding, der einfachste. Wenn wir auf den Inhalt des Begriffs sehn, so betrachten wir ihn in concreto. — Sehn wir auf die sphaera, so betrachten wir ihn in abstracto. — Von der erstem Art ist die Erkenntnis der Praktiker — (mit Maulwurfsaugen — bloß auf dem Fleck).]",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "dohna-s20-019",
     "kind": "text",
     "aa": 754,
     "aaEnd": 755,
     "pages": [
      {
       "p": 755,
       "i": 199
      }
     ],
     "ms": [
      {
       "p": 83,
       "i": 621
      }
     ],
     "text": "Ein jeder conceptus communis heißt in Ansehung (Relation) der conceptuum, unter (denen er) enthalten ist, species, in Ansehung der, die unter ihm enthalten sind, genus. [Der Begriff von genus und species ist bloß in Rücksicht der Relation verschieden.] Nun kann ich dasselbe, was im einen Respectu genns hieß, im andern species nennen, z. B. Mensch in vielfältiger Rücksicht genus, aber im Verhältnis gegen Tier doch species. Kann man ein genus summum finden ? Das genus summum ist das, was unter keinem andern enthalten, kein Teilbegriff ist, d. h. keinen Teil weiter hat. Wenn es nun ein genus summum, einen Gegenstand überhaupt gibt, kann man auch eine speciem infimam finden ? Man muß annehmen, daß es conceptus communes gibt, unter die man keine andere subsumieren kann. Aber es bleibt doch nur willkürlich, und man kann daher nicht sagen, daß eine species infima zu finden sei.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s20-020",
     "kind": "text",
     "aa": 755,
     "text": "In der Unterordnung menschlicher Begriffe fangen Avir an von der niedrigsten Stufe, dem Individuo — dieses wird zu dem conceptui singulari gerechnet. Von da geht man zum conceptui superiori — oder communi. Z. B. Eichbäume [Hex in Spanien, die herrlichen Eicheln, die wie Kastanien schmecken] — Gewächse — Pflanzen — Körper — Substanzen. Zuletzt kommt man per analysin zu dem Begriffe von einem Dinge. Der conceptus superior ist allemal nur ein Teil von dem inferior, so daß der conceptus summus das Allerwenigste in sich — Objekt, da man gar nicht bestimmt hat, was — aber er enthält alles andre unter sich.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s20-021",
     "kind": "text",
     "aa": 755,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "83",
       "unresolved": true
      }
     ],
     "text": "Unsere Erkenntnis gewinnt ungemein dadurch, wenn wir immer auf den conceptus superior gehn. Die Menge der Dinge, welche unter dem Begriff enthalten sind, heißt die logische sphaera des Begriffs. Je größer diese ist, desto kleiner ist sein Inhalt. [Sphaera ist latissime patens, je einfacher und abstrakter der Begriff ist. Man versteht darunter nicht den Inhalt, sondern den Zirkel der Anwendung, eine Linie, die an sich keine Breite hat, aber doch einen großen Raum umfaßt. Ein Begriff, der gar keine sphaera hat, z. B. der des Individuums Julius Caesar ist = einem Punkt.]",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s20-022",
     "kind": "text",
     "aa": 755,
     "aaEnd": 756,
     "pages": [
      {
       "p": 756,
       "i": 598
      }
     ],
     "text": "Manche Begriffe haben einerlei sphaeram, wie der Begriff vom Notwendigen und Unveränderlichen. Solche Begriffe heißen conceptus reciproci, Wechselbegriffe. Latior | conceptus |, wenn | man | noch mehr darunter versteht. Wollte man eine Betrachtung und Vergleichung anstellen zwischen Metall und Holz, so sind dies conceptus heterogenei, haben gar keinen respectum in Ansehung ihrer Quantität, z. B. 100 Jahre — deutsche Meile, [weil keiner dieser Begriffe, die miteinander verglichen werden, unter dem andern steht. — ] Conceptus reciproci müssen gleichartig sein. Conceptus universalis sollte man eigentlich nicht sagen. Nur die Anwendung kann gebraucht werden in abstracto, und dann ist er quoad usum universabs oder particularis usw. Ein conceptus ist immer repraesentatio communis, andre gibts in der Logik nicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s20-023",
     "kind": "text",
     "aa": 756,
     "ms": [
      {
       "p": 84,
       "i": 0
      }
     ],
     "text": "Es gibt verschiedene Arten der Dif ferentia. Sie ist nämlich :",
     "ocrConf": 37
    },
    {
     "id": "dohna-s20-024",
     "kind": "text",
     "aa": 756,
     "text": "1. generica — ist die Verschiedenheit der Gattungen, generum, z. B. die Mediziner nennen manche Krankheiten — materias sui generis.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s20-025",
     "kind": "text",
     "aa": 756,
     "text": "2. specifica — ist die Unterscheidung der Dinge, die zu einem genus gehören — in specie muß was sein, was nicht im genus enthalten war.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s20-026",
     "kind": "text",
     "aa": 756,
     "text": "3. numerica — d. h. der Unterschied der conceptuum singularium, insofern sie nicht mehrern gemein sind. Bei Menschen zeigen wir sie durch nomina propria an.",
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s21",
   "title": "Von den Definitionen",
   "titleSrc": "heading",
   "headings": [
    "Von den Definitionen"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s21-001",
     "kind": "heading",
     "aa": 756,
     "text": "Von den Definitionen"
    },
    {
     "id": "dohna-s21-002",
     "kind": "text",
     "aa": 756,
     "text": "Die logische Vollkommenheit der Definition besteht :",
     "ocrConf": 40
    },
    {
     "id": "dohna-s21-003",
     "kind": "text",
     "aa": 756,
     "text": "1. in der Deutlichkeit, sie ist das höchste Bedürfnis der Definition.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s21-004",
     "kind": "text",
     "aa": 756,
     "text": "2. in der completudo oder in der Deutlichkeit durch zureichende Merkmale.",
     "ocrConf": 51
    },
    {
     "id": "dohna-s21-005",
     "kind": "text",
     "aa": 756,
     "text": "3. praecisio — die Abgemessenheit, d. h. die Absonderung alles übrigen, was nicht zur hinlänglichen Deutlichkeit erfordert wird.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s21-006",
     "kind": "text",
     "aa": 756,
     "text": "[Präzision ist Bedürfnis vom 2ten Range zur Definition. Nicht mehr Merkmale als nötig. Die Definition ist die höchste logische Vollkommenheit der Begriffs.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s21-007",
     "kind": "text",
     "aa": 756,
     "text": "Conceptus adaequatus in minimis terminis — conceptus completus, praecise determinatus. Wenn der Begriff diese Erfordernisse hat, so ist er ein conceptus rei adaequatus.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s21-008",
     "kind": "text",
     "aa": 756,
     "ms": [
      {
       "p": 85,
       "i": 0
      }
     ],
     "text": "Wir wollen nun zeigen, wie Defmitionen gemacht werden.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s21-009",
     "kind": "text",
     "aa": 756,
     "text": "Alle Begriffe sind zwiefach, nämbch :",
     "ocrConf": 41
    },
    {
     "id": "dohna-s21-010",
     "kind": "text",
     "aa": 756,
     "text": "1 . conceptus dati, und diese sind entweder",
     "ocrConf": 45
    },
    {
     "id": "dohna-s21-011",
     "kind": "text",
     "aa": 756,
     "text": "a) empirici — a posteriori gegeben,",
     "ocrConf": 40
    },
    {
     "id": "dohna-s21-012",
     "kind": "text",
     "aa": 756,
     "text": "b) rationati — a priori gegeben. — [Z. B. Begriff der Ursache, der Größe, Substanz, Wirkung, Zeit und Raum. Wir können nicht den Raum beobachten Er ist nicht empirische Vorstellung. Denn diese beruht jederzeit auf Wahrnehmung.]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s21-013",
     "kind": "text",
     "aa": 756,
     "text": "2. conceptus facticn ( — gemachte — gedichtete — ) — sie können gegeben werden.",
     "ocrConf": 32
    },
    {
     "id": "dohna-s21-014",
     "kind": "text",
     "aa": 756,
     "text": "a) ex datis a posteriori,",
     "ocrConf": 43
    },
    {
     "id": "dohna-s21-015",
     "kind": "text",
     "aa": 756,
     "text": "b) ex datis a priori.",
     "ocrConf": 36
    },
    {
     "id": "dohna-s21-016",
     "kind": "text",
     "aa": 757,
     "text": "Alle Definitionen gegebener Begriffe, wenn sie a priori gegeben sind, sind allemal analytisch, alle Definitionen gemachter Begriffe ohne Unterschied synthetisch.",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "dohna-s21-017",
     "kind": "text",
     "aa": 757,
     "text": "[Synthetische Definition diejenige, Avelche aus vielen Begriffen zusammengenommen entsteht. Ich mache mir den Begriff von Quadratum (est rectangulum quadrilaterum aequilaterum) durch die Definition. Diese geht also vor dem Begriff vorher. So ist's immer in der Synthesis.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s21-018",
     "kind": "text",
     "aa": 757,
     "text": "Analysis. Ich suche in dem Begriff, den ich schon habe, die Merkmale auf. Dies erfordert: 1. (Exposition des Begriffs) (z. B. Körper. Durch die Exposition erhalten wir die Elementarsätze zur Definition. Auch hier die 3 Requisita. Körper. Ausgedehnt, zusammengesetztes, teilbar Hegt schon darin.)",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s21-019",
     "kind": "text",
     "aa": 757,
     "text": "Mathematische Definitionen können nie falsch sein, weil Mathematik ihre Begriffe selbst macht. — Definitionen von Erfahrungsbegriffen sind sjmthetisch. Sie können eigentlich nie definiert, nur describiert werden.]",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s21-020",
     "kind": "text",
     "aa": 757,
     "ms": [
      {
       "p": 86,
       "i": 415
      }
     ],
     "text": "Auch ein empirischer Begriff kann analytisch gegeben werden. Dabei ist nicht bloß der Begriff gegeben, sondern auch der Gegenstand. Wenn man z. B. Wasser definieren wollte, so würde man (nur) seinen Begriff davon, nicht den Gegenstand selbst definieren. Ebenso geht es mit allen andern Erfahrungsbegriffen. Man kann sie selbst wohl definieren, den Gegenstand aber nicht, weil wir nicht alle Merkmale finden können. Bei allen Erfahrungsbegriffen ist die Definition des Begriffs an und für sich ganz entbehrlich. — (Sie ist ja ganz subjektiv.) Die conceptus dati können nützlicherweise nur insofern definiert werden, als sie a priori gegeben werden. — Meine Definition wird in Ansehung des Gegenstandes niemals complet und eo ipso nie eine Definition werden.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-021",
     "kind": "text",
     "aa": 757,
     "text": "Soweit haben wir von den gegebenen Begriffen gehandelt und kommen jetzt zu den gemachten. Alle Definitionen sind hier synthetisch, denn es hegen immer data zum Grunde, welche zusammengesetzt werden. Alle mathematischen Definitionen sind synthetisch. Alle Annäherungen zu Erfahrungsbegriffen, Beobachtungen sind synthetisch. Aber die Synthesis ist nicht willkürlich, der Begriff also nicht arbitrarie facticius. Der Mathematiker kann nie irren, nur in der Präzision fehlen. Z. B. Wolff in der Definition des Zirkels, welche man kürzer fassen kann, als er es tat. Deswegen hat er nicht geirrt, sondern nur in der Präzision gefehlt.",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s21-022",
     "kind": "text",
     "aa": 758,
     "ms": [
      {
       "p": 87,
       "i": 0,
       "raw": "v",
       "approx": true,
       "inferred": true
      }
     ],
     "text": "I [Stunde]",
     "ocrConf": 25
    },
    {
     "id": "dohna-s21-023",
     "kind": "text",
     "aa": 758,
     "text": "Definition ist die Declaration von den Vorstellungen, welche ich mir von dem Gegenstande mache. Zu den gemachten Begriffen gehören auch die, welche aus Wahrnehmungen entspringen. Wenn eine Definition davon möglich ist, so kann sie nicht anders als synthetisch sein. Allein wir können Erfahrungsbegriffe nur nominal definieren [beschreiben. Die Description unterscheidet sich von der Definition dadurch, daß sie nicht die Erfordernisse der completudo und Präcision hat.]",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-024",
     "kind": "text",
     "aa": 758,
     "text": "Wir gehen jetzt zu den a priori gegebenen Begriffen. Alle Definitionen gegebener Begriffe a priori werden per analysin definiert. [Der Anfang ist hier immer die Exposition — (nicht die Definition).] Z. B. der Begriff vom Recht. Er ist uns freilich nicht angeboren, {sondern) um ihn hervorzubringen, mußten wir darüber reflektieren — in dem Begriff der Tugend ist erstlich enthalten — Gesetzmäßigkeit zu Handlungen, dann Gesetzmäßigkeit zu rechten Handlungen, dann noch Freiheit dazu. [Was in Widerstreit mit den Neigungen zum Gegenteil steht, — darin unterscheidet sie sich von der Heiligkeit.]",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s21-025",
     "kind": "text",
     "aa": 758,
     "ms": [
      {
       "p": 88,
       "i": 160,
       "raw": "ss",
       "inferred": true
      }
     ],
     "text": "Bei der Analysis eines Begriffs ist das lste — die Exposition — sich nach und nach bewußt zu werden des Mannigfaltigen, was in meinem Bewußtsein enthalten ist, 2tens — Definition, wenn die Exposition complet ist. Wie können wir aber nun gewiß werden, ob wir einen Begriff vollkommen exponiert haben ? Man muß in solchen Fällen sehr behutsam sein, z. B. in denen von Substanz und Ursache — Begriffe, die rein a priori sind. [Nie kann man sich in den philosopisehen Definitionen der completudo völlig bewußt sein — es ist sehr verschieden: sich nicht bewußt sein, daß etwas mangle, und sich bewußt sein, daß nichts mangle.]",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s21-026",
     "kind": "text",
     "aa": 758,
     "text": "Anmerkung. Bei den gegebenen Begriff en muß man nie bei der Definition, sondern allezeit bei der Exposition anfangen. Aber bei gemachten Begriffen — conc. factieiis, z. B. mathematischen, muß die Definition allemal vorausgehen. Die Exposition fängt von Elementarsätzen an. In Ansehung der Nebenbegriffe kann, wenn man das Wort strict nimmt, gar keine Definition und Demonstration stattfinden. Diese Worte gehören eigentlich nur für f die Mathematik. Gleichwohl nennen wir es in der Philosophie, insofern wir completudo vermuten — Definition. Es ist nicht immer nötig zu definieren. —",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s21-027",
     "kind": "text",
     "aa": 758,
     "text": "Wir gehen jetzt weiter und wollen handeln",
     "ocrConf": 44
    },
    {
     "id": "dohna-s21-028",
     "kind": "text",
     "aa": 759,
     "ms": [
      {
       "p": 89,
       "i": 0
      }
     ],
     "text": "Von den Regeln der Definitionen",
     "ocrConf": 33
    },
    {
     "id": "dohna-s21-029",
     "kind": "text",
     "aa": 759,
     "text": "Zur Beurteilung der Definitionen gehören folgende Regeln:",
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-030",
     "kind": "text",
     "aa": 759,
     "text": "1 . ob die vorgebliche Definition als Satz wahr sei,",
     "ocrConf": 30
    },
    {
     "id": "dohna-s21-031",
     "kind": "text",
     "aa": 759,
     "text": "2. ob die Definition als ein Begriff deutlich sei. —",
     "ocrConf": 33
    },
    {
     "id": "dohna-s21-032",
     "kind": "text",
     "aa": 759,
     "text": "Zwei Stücke hindern die Deutlichkeit eines Begriffes, nämlich",
     "ocrConf": 48
    },
    {
     "id": "dohna-s21-033",
     "kind": "text",
     "aa": 759,
     "text": "a) wenn die Merkmale tautologisch sind, ich idem per idem erkläre.",
     "ocrConf": 35
    },
    {
     "id": "dohna-s21-034",
     "kind": "text",
     "aa": 759,
     "text": "b) wenn ich obscurum per aeque obscurum erkläre.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s21-035",
     "kind": "text",
     "aa": 759,
     "text": "Das 3te Kriterium ist, ob der Begriff als deutlicher Begriff ausführlich sei [Completudo],",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s21-036",
     "kind": "text",
     "aa": 759,
     "text": "das 4te, ob der Begriff, den ich als ausführlich ansehe, präcis sei. [Präcision.] Wie sollen Definitionen gemacht werden ?",
     "ocrConf": 42
    },
    {
     "id": "dohna-s21-037",
     "kind": "text",
     "aa": 759,
     "text": "1. Suche mehrere Elementarsätze (hier ist von analytischen die Rede).",
     "ocrConf": 42
    },
    {
     "id": "dohna-s21-038",
     "kind": "text",
     "aa": 759,
     "text": "2. Siehe darauf, daß das Prädikat nicht eben so dunkel sei, als der Begriff, den du erklären willst. —",
     "ocrConf": 41
    },
    {
     "id": "dohna-s21-039",
     "kind": "text",
     "aa": 759,
     "text": "3. Sammle mehrere solche Prädikate, bis du gewiß seist, daß sie zusammen den ganzen Begriff exhaurieren.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s21-040",
     "kind": "text",
     "aa": 759,
     "text": "4. Siehe zu, daß nicht ein Merkmal schon das andre enthalte und also entbehrt werden kann. (Dadurch lernt man noch nicht Definitionen machen.)",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s21-041",
     "kind": "text",
     "aa": 759,
     "ms": [
      {
       "p": 90,
       "i": 0
      }
     ],
     "text": "Die nützlichste von allen Regeln ist die, daß man bei der Exposition anfangen muß, wodurch man Elementarsätze von einer Definition erhält. Bei einer analytischen Definition behalten wir uns immer die Erweiterung unserer Erkenntnis vor und vielleicht auch künftig das Gegenteil zu meinen. Wenn kein Begriff zum Grunde liegt, so kann ich von der Sache gar nicht reden. Dies geht aber dann immer an, wenn wir denselben klar gemacht haben. Man muß sich besonders dafür hüten, daß man die Definition nicht reciprociert, umkehrt. Alle Definitionen in der Philosophie müssen als tentamina zum Philosophieren angesehen werden.",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-042",
     "kind": "text",
     "aa": 759,
     "text": "Die Vollkommenheit einer Definition, was I die | Quantität anbelangt, beruht darauf, daß die definitio mit dem definito reciprociert, daß man eins fürs andere setzen kann. [Wenn die sphaera der Definitionen gleich ist mit der sphaera des definiti.] Definitio nee sit latior nee angustior definito. Ein coneeptus ist latior, als ein andrer, wenn er weniger enthält, angustior, wenn er mehrere Bestimmungen hat. Dies ist nämlich die Folge von dem Verengen des Begriffs.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s21-043",
     "kind": "text",
     "aa": 759,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "»i",
       "unresolved": true
      }
     ],
     "text": "Qualität in der Logik — Deutlichkeit. Das logische Requisit:",
     "ocrConf": 33
    },
    {
     "id": "dohna-s21-044",
     "kind": "text",
     "aa": 760,
     "text": "Ne definiatur obscurum per aeque obscurum. Die",
     "ocrConf": 38
    },
    {
     "id": "dohna-s21-045",
     "kind": "text",
     "aa": 760,
     "text": "2. logische Relation ist die Relation der Merkmale in der Definition zu dem Begriffe eines definiti. Jeder Grund generaliter muß etwas anders als die Folge sein, ohne dies ist er nicht Grund. Die dritte Regel ist",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-046",
     "kind": "text",
     "aa": 760,
     "text": "3. Non definiendum in circulo, circulo f , d. h. idem per idem erklären. Wenn die Identität offenbar ist, so heißt es tautologisch. [So wie : Ratio est id, per quod cognoscimus, cur aliquid sit. Cur heißt aber quam ob rationem. Die Erklärung ist also ganz tautologisch, sagt nichts Neues.] Ist sie aber versteckt, so nennen wir diese Methode: im Zirkel erklären. Die vierte Regel:",
     "ocrConf": 44
    },
    {
     "id": "dohna-s21-047",
     "kind": "text",
     "aa": 760,
     "text": "4. Modalität — Notwendigkeit ist hier die logische Vollkommenheit. Ein empirischer Satz enthält sie nicht. — Empirische Begriffe lassen sich gar nicht definieren.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s21-048",
     "kind": "text",
     "aa": 760,
     "text": "Definitionen können eingeteilt werden in",
     "ocrConf": 55
    },
    {
     "id": "dohna-s21-049",
     "kind": "text",
     "aa": 760,
     "ms": [
      {
       "p": 93,
       "i": 153
      }
     ],
     "text": "Nominal- und — zum Unterschied von andern, Realerklärungen, die zur Ableitung aller Prädikate und Begriffe hinreichend sind. Durch Sacherklärungen sehen wir die Möglichkeit der Dinge ein. Nominalerklärungen dienen lediglich | dazu | ein Ding zu unterscheiden. Eine Nominaldefinition, welche hinreichend wäre, das Ding von allen andern zu unterscheiden, wäre völlig so gut wie eine Realdefinition. Die mathematischen Definitionen sind alle real. Description unterscheidet sich von der Definition dadurch, daß sie nur Historisches enthält. Die Exposition eines Begriffs, in welcher es unbestimmt bleibt, ob er complet oder präcis sei, ist eine Description.",
     "dehyphenated": 2,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s22",
   "title": "[Stunde, Montag] Von der Einteilung der Begriffe",
   "titleSrc": "heading",
   "headings": [
    "[Stunde, Montag]",
    "Von der Einteilung der Begriffe"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s22-001",
     "kind": "heading",
     "aa": 760,
     "text": "[Stunde, Montag] Von der Einteilung der Begriffe"
    },
    {
     "id": "dohna-s22-002",
     "kind": "text",
     "aa": 760,
     "text": "[Sie besteht in der deutlichen Vorstellung aller niedern Begriffe, sofern sie unter einem höhern enthalten und einander entgegengesetzt sind.] Die logische Division heißt Einteilung und wird von der Teilung des Begriffs oder Analyse unterschieden. Man versteht unter der divisio logica nicht die Teilung des Begriffs selbst (divisio realis), sondern — seiner sphaera. Z. B. der Begriff des Menschen hat eine sphaeram — keine Mannigfaltigkeit in sich, sondern er faßt viele andre unter sich. [Eine Einteilung der Bäume z. B. in Krone, Stamm, Wurzel wäre partitio, nicht divisio.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s22-003",
     "kind": "text",
     "aa": 761,
     "text": "Partitio ist verschieden von divisio — die letztere teilt bloß den Begriff ein. Die logische Division ist jederzeit Dichotomie, a oder nona. Alle lebende Wesen sterblich oder nichtsterblich. Dies ist die analytische Einteilung nach dem Satz des Widerspruchs. Das Prinzip aller logischen Einteilungen ist das Principium exclusi medii inter duo contradictoria. Synthetische Einteilung in a und b. Polytomie setzt Real-, nicht bloß Formkenntnis zum Voraus. — Man kann dabei nie der Vollständigkeit seiner Einteilung gewiß werden. Billig müßte man übersehen können, wieviel möglich. Aber es sind konkrete Begriffe, Gegenstände der Erfahrung. Hier ist nur partitio möglich.]",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s22-004",
     "kind": "text",
     "aa": 761,
     "ms": [
      {
       "p": null,
       "i": 16,
       "raw": "93",
       "unresolved": true
      }
     ],
     "text": "Alle Einteilung kann geschehn in opposita oder in disparata. Die erste kann auch a priori gemacht werden, aber die empirische (Erfahrungs-> Einteilung ist nur in disparata, z. B. die verschiednen Menschenrassen, rotbraune, gelbe usw. | eine | in opposita würde sein, wenn ich sagte : alle Menschen sind entweder weiße oder nichtweiße.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s22-005",
     "kind": "text",
     "aa": 761,
     "text": "Jetzt wollen wir die Stücke, die zur Einteilung des Begriffs gehören, durchgehn.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s22-006",
     "kind": "text",
     "aa": 761,
     "text": "1. Der eingeteilte Begriff, conceptus divisus, dessen Sphäre geteilt werden kann.",
     "ocrConf": 52
    },
    {
     "id": "dohna-s22-007",
     "kind": "text",
     "aa": 761,
     "text": "2. Die membra dividentia, die niedern, die unter den höhern enthalten sind. Sie sind Glieder der Einteilung, die zusammengesetzt ein vollständiges Ganze bilden. Dies erkennt man daraus, wenn sie der Sphäre aequat sind. Eine Einteilung drückt also das aus, daß niedere Begriffe höhern untergeordnet zusammen der ganzen Sphäre des Begriffs gleich sind.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s22-008",
     "kind": "text",
     "aa": 761,
     "text": "Eine gegebene Einteilung kann in Relation betrachtet werden auf ihre Untereinteilungen, Subdi Visionen ^Einteilung eines Gliedes der Einteilung), die sehr weit gehen bis aufs Individuum und auf ihre Nebeneinteilungen (Codivisionen), z. B. Menschen, respective auf <1.> Gelehrsamkeit, <2.) auf Geschlecht, <3., 4.) usw. Die Glieder der Nebeneinteilung heißen membra codividentia.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s22-009",
     "kind": "text",
     "aa": 761,
     "ms": [
      {
       "p": 94,
       "i": 0
      }
     ],
     "text": "Wir kommen nun zu den eigentlichen Regeln. Die erste ist :",
     "ocrConf": 34
    },
    {
     "id": "dohna-s22-010",
     "kind": "text",
     "aa": 761,
     "text": "1. Der conceptus muß nicht latior sein, als alle membra dividentia zusammengenommen, je weniger in sich, desto mehr unter sich. [Dann enthält er zuviel.]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s22-011",
     "kind": "text",
     "aa": 761,
     "text": "2. Der conceptus muß auch nicht sein angustior als die membra dividentia.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s22-012",
     "kind": "text",
     "aa": 761,
     "aaEnd": 762,
     "pages": [
      {
       "p": 762,
       "i": 128
      }
     ],
     "text": "3. Zwischen den Gliedern der Einteilung müssen Opjwsitionen sein und diese nimmt man disjunctive zusammen, d. h. durch entweder oder. [Die membra dividentia müssen einander entgegengesetzt sein, sonst ist es nicht logische Einteilung.]",
     "joined": [
      "layout"
     ],
     "ocrConf": 47
    },
    {
     "id": "dohna-s22-013",
     "kind": "text",
     "aa": 762,
     "text": "4. Der eingeteilte Begriff muß nicht dem Begriff der Einteilung widersprechen.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s22-014",
     "kind": "text",
     "aa": 762,
     "text": "5. Die Glieder der Untereinteilung müssen nicht unter die Glieder der Obereinteilung kommen, das wäre widersprechend. Darauf muß man besondre Aufmerksamkeit wenden. Z. B. dem Unwissenden muß man nicht den Gelehrten, sondern den, der Wissenschaft besitzt, entgegensetzen.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s22-015",
     "kind": "text",
     "aa": 762,
     "text": "6. Die Zahl der Glieder der Einteilung muß ich aus der Natur des eingeteilten Begriffs ableiten. Alle empirische Einteilung kann man eher Partition als divisio logica nennen. [Bei dieser muß man wissen, daß nicht mehr noch weniger Glieder der Einteilung sind, bei der empirischen darf dies nicht sein. — ]",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s22-016",
     "kind": "text",
     "aa": 762,
     "text": "Alle logische Einteilung (die von allem Inhalt abstrahiert) kann nichts anders als Dichotomie <2 Glieder) sein — a — non a — nach dem Satz des Widerspruchs. [Er ist das Prinzip aller analytischen Urteile.] Polytomie, Trichotomie usw. — Einteilungen, die nicht nach diesem Satz gemacht sind, sind allemal synthetisch. [Synthetische Einteilungen — Trichotomie, überhaupt Polytomie. — Es fällt auf, daß Trichotomie so oft vorkommt, Subst f Gott : (Heiligkeit, Güte, Gerechtigkeit). Es ist gleichsam hier überall ein oberster Satz oder eine Bedingung <ein Bedingtes) eine Folge, f Einheit die Bedingung, Vielheit das Bedingte, Allheit die Folge, die Verbindung (Allheit — die Vielheit als Einheit) beider zusammen.]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s22-017",
     "kind": "text",
     "aa": 762,
     "ms": [
      {
       "p": 95,
       "i": 0
      }
     ],
     "text": "Von den Urteilen",
     "ocrConf": 46
    },
    {
     "id": "dohna-s22-018",
     "kind": "text",
     "aa": 762,
     "text": "Die Vorstellung, die durch ihr Bewußtsein als eines Merkmals allgemein ist, ist ein klarer Begriff. Das Bewußtsein einer allgemeinen Vorstellung (repraesentatio communis) heißt also nicht bloß Begriff, sondern klarer Begriff. Der Begriff, der durch ein Urteil klar wird, heißt ein deutlicher Begriff, und ein Begriff, der durch einen Vernunftschluß deutlich wird, heißt ein Vernunftbegriff (nach Wolff ein vollständiger).",
     "dehyphenated": 3,
     "ocrConf": 47
    },
    {
     "id": "dohna-s22-019",
     "kind": "text",
     "aa": 762,
     "text": "[Urteil ist die Vorstellung der Einheit gegebener Begriffe, sofern einer dem andern untergeordnet oder von demselben ausgeschlossen ist. —",
     "ocrConf": 49
    },
    {
     "id": "dohna-s22-020",
     "kind": "text",
     "aa": 762,
     "text": "1. Klarer Begriff, durch Bewußtsein der Allgemeinheit.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s22-021",
     "kind": "text",
     "aa": 763,
     "text": "2. deutlicher Begriff, nicht bloß durch apprehensio, sondern — Judicium.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "dohna-s22-022",
     "kind": "text",
     "aa": 763,
     "text": "3. Vernunft begriff.",
     "ocrConf": 31
    }
   ]
  },
  {
   "id": "s23",
   "title": "3 Urteile :",
   "titleSrc": "heading",
   "headings": [
    "3 Urteile :"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s23-001",
     "kind": "heading",
     "aa": 763,
     "text": "3 Urteile :"
    },
    {
     "id": "dohna-s23-002",
     "kind": "text",
     "aa": 763,
     "text": "1. wo eines unter dem andern wie f Subjekt unter Prädikat: kategorisch.",
     "ocrConf": 26
    },
    {
     "id": "dohna-s23-003",
     "kind": "text",
     "aa": 763,
     "text": "2. Das Urteil, wo ein Begriff unter dem andern als Bedingtes unter der Bedingung f , als Folge unter dem Grunde : hypothetisch.",
     "ocrConf": 33
    },
    {
     "id": "dohna-s23-004",
     "kind": "text",
     "aa": 763,
     "text": "3. Das Urteil, was eine Folge enthält, die geteilt werden kann f disjunktiv: QPJ.]",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-005",
     "kind": "text",
     "aa": 763,
     "text": "Handeln heißt die Ursache von der Wirkung absondern. Wenn ein Begriff soll deutlich werden, so muß man allemal ein Judicium fällen. Das Merkmal wird gleich das Prädikat des Urteils, z. B. der Mensch ist ein Tier. Dieser deutliche Begriff wird nur durch ein Urteil. Daraus sieht man, daß ehe man zu den deutlichen Begriffen geht, man von den Urteilen handeln muß.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s23-006",
     "kind": "text",
     "aa": 763,
     "ms": [
      {
       "p": 96,
       "i": 0,
       "raw": "»c",
       "inferred": true
      }
     ],
     "text": "Der Vernunft begriff entspringt aus einem Vernunftschluß. Z. B. Alle Menschen sind lebende Wesen, alle lebende Wesen smd Tiere, ergo f alle Menschen sind Tiere. Also kann man auf f eine notam remotam nur durch eine notam mediam, durch einen Vernunftschluß schließen. Daher man eher von Schlüssen handeln sollte, die drei Operationen des Denkens gleich zuerst vornehmen sollte. Dies war Aristoteles' Manier — sehr stringent. — Es war Wolff, der es abbrachte.",
     "dehyphenated": 2,
     "ocrConf": 40
    },
    {
     "id": "dohna-s23-007",
     "kind": "text",
     "aa": 763,
     "text": "Urteil ist die Vorstellung des Verhältnisses der Begriffe unter -einander, wodurch eine Erkenntnis deutlich wird. Ein großer Fehler in dieser Logik, daß der Autor gleich vom Subjekt und Prädikat spricht [ehe nämlich die nötigern f Vorkenntnisse vorausgeschickt worden, es ist fast in jeder f Logik so.] Die Definition unsers Autors vom Urteil paßt nur für die kategorischen. [Wir haben nicht bloß eine Art von Urteilen — ] Es gibt aber auch hypothetische, problematische. [3 Verhältnisse : 1. der Inhärenz, 2. der Dependenz, 3. der Teile, untereinander, die zusammen ein Ganzes machen.]",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s23-008",
     "kind": "text",
     "aa": 763,
     "ms": [
      {
       "p": 97,
       "i": 0,
       "raw": "91",
       "inferred": true
      }
     ],
     "text": "Alle Urteile lassen sich auf 3 Arten bringen : 1 . auf kategorische f , die das Verhältnis des Prädikats zum Subjekt enthalten.",
     "ocrConf": 32
    },
    {
     "id": "dohna-s23-009",
     "kind": "text",
     "aa": 763,
     "text": "2. hypothetische f, sie enthalten das Verhältnis des Grundes zur Folge. <(Wenn die Seele nicht zusammengesetzt, so usw.)",
     "ocrConf": 38
    },
    {
     "id": "dohna-s23-010",
     "kind": "text",
     "aa": 763,
     "text": "[Was nicht zusammengesetzt ist, ist nicht vergänglich. Die Seele ist nicht zusammengesetzt, die Seele ist nicht vergänglich.]",
     "ocrConf": 38
    },
    {
     "id": "dohna-s23-011",
     "kind": "text",
     "aa": 764,
     "text": "3. disjunktive, sie enthalten das Verhältnis eines eingeteilten Begriffs zur ganzen Sphäre der Einteilung <z. B. alle Menschen sind gelehrt oder ungelehrt). Diese Urteile sind von ganz anderer Art, haben aber dies gemein, daß <sie) immer auch kategorisch ausgedrückt werden können (doch möchte es nicht allemal gehen).",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-012",
     "kind": "text",
     "aa": 764,
     "text": "[Es gibt Arten der Differenz, numerisch — spezifisch — toto genere verschieden. — So gingen wir von unten herauf. Gelehrte sind spezifisch einerlei und generisch auch und doch numerisch verschieden als C. und J.]",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s23-013",
     "kind": "text",
     "aa": 764,
     "text": "Wir gehen nunmehr zu den",
     "ocrConf": 36
    },
    {
     "id": "dohna-s23-014",
     "kind": "text",
     "aa": 764,
     "text": "Kategorischen Urteilen",
     "ocrConf": 56
    },
    {
     "id": "dohna-s23-015",
     "kind": "text",
     "aa": 764,
     "text": "Materie ist in der Logik das Gegebene. [Die Form ist in der Logik die Art und Weise der Zusammenstellung und Verknüpfung von gegebenen Begriffen.] In kategorischen Urteilen muß das Subjekt und das Prädikat gegeben sein. In allen kategorischen Urteilen muß die Negation <das Zeichen der Verneinung) die Copula affizieren (nicht das Prädikat), sonst sind sie nicht negative Urteile. [Anima non est <(Copula) mortalis, wäre negatives Urteil. A. est immortalis <non mortalis) bejahend.] Urteile, deren Prädikate bloß negativ sind [z. B. nicht m. — das was | außerhalb | der Sphäre |m. ist|], nennt man unendliche Urteile <judicia infinita) [weil es solcher Dinge, die non a sind, kein Ende gibt, a läßt sich aber bestimmen].",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s23-016",
     "kind": "text",
     "aa": 764,
     "ms": [
      {
       "p": 98,
       "i": 0
      }
     ],
     "text": "Von der Bedingung unbedingter Urteile",
     "ocrConf": 48
    },
    {
     "id": "dohna-s23-017",
     "kind": "text",
     "aa": 764,
     "text": "[Jedes Urteil hat die Bedingung der Wahrheit — der Grund, warum man ihm ein Prädikat beilegt.] In jedem Urteil muß doch im Subjektes was sein, welches macht, daß ihm das Prädikat beigelegt wird und dieses nennt man die Bedingung. Z. B. ein jeder Körper als ein ausgedehntes Wesen ist teilbar. Oder noch ein Beispiel: alle Menschen als endliche Wesen sind fehlbar (faillible). Dies heißt nun wieder kein bedingtes, sondern ein eingeschränktes Urteil. Fällt dies letztere weg, so wird es bedingt. Die Einschränkung nennt man die Bestimmung des Urteils (determinatio judicii). — Zuweilen hegen diese Bestimmungen im Begriff, zuweilen werden sie hinzugesetzt.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-018",
     "kind": "text",
     "aa": 764,
     "text": "Wir kommen jetzt zur Einteilung der Urteile",
     "ocrConf": 53
    },
    {
     "id": "dohna-s23-019",
     "kind": "text",
     "aa": 765,
     "text": "1. der Qualität nach, da sind sie entweder bejahende oder verneinende {und unendliche), z. B. einige Menschen sind nicht gelehrt — ein verneinendes Urteil,",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s23-020",
     "kind": "text",
     "aa": 765,
     "text": "2. der Quantität nach sind alle Urteile entweder",
     "ocrConf": 46
    },
    {
     "id": "dohna-s23-021",
     "kind": "text",
     "aa": 765,
     "ms": [
      {
       "p": 99,
       "i": 0
      }
     ],
     "text": "a) universaha, werden ausgedrückt durch alles,",
     "ocrConf": 51
    },
    {
     "id": "dohna-s23-022",
     "kind": "text",
     "aa": 765,
     "text": "b) particularia, statt diesem Ausdruck lieber pluralistische Urteile.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s23-023",
     "kind": "text",
     "aa": 765,
     "text": "Wir können jedes Prädikat an sich als terminus major betrachten. Es gibt allgemeine Urteile, die man nicht universal, nur pluralistisch ausdrückt, z. B. Alle vernünftige Wesen sind denkende Menschen, einige Menschen sind vernünftige Wesen, einige Menschen sind denkende usw. Es gibt 3erlei Urteile nach der Quantität, näinlich allgemeine, besondre und einzelne. Jedes Judicium singulare leidet keine Ausnahme, weil es keine sphaeram hat.",
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "dohna-s23-024",
     "kind": "text",
     "aa": 765,
     "text": "| [Judicium generale, im allgemeinen, ist verschieden vom allgemeinen {universellen) Urteil. Es findet da statt, wo nur wenige Ausnahmen sind, wo durch man dieses Urteil am wenigsten in die Gefahr zu irren kommt, man kann es also generaliter sagen. Solche Urteile können nur im Empirischen stattfinden.]!",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s23-025",
     "kind": "text",
     "aa": 765,
     "text": "Ein kategorisches Urteil hat entweder 2 Subjekte und ein Prädikat, oder 2 Prädikate und ein Subjekt oder nur ein Subjekt und nur ein Prädikat.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-026",
     "kind": "text",
     "aa": 765,
     "text": "Wir kommen",
     "ocrConf": 66
    },
    {
     "id": "dohna-s23-027",
     "kind": "text",
     "aa": 765,
     "text": "3. zur Relation, nach derselben teilen wir die Urteile in:",
     "ocrConf": 42
    },
    {
     "id": "dohna-s23-028",
     "kind": "text",
     "aa": 765,
     "text": "a) kategorische. Das Verhältnis des Subjekts zum Prädikat.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s23-029",
     "kind": "text",
     "aa": 765,
     "text": "b) hypothetische. Das Verhältnis des Grundes zur Folge. [ — 2 Urteile sind in dem Verhältnis, daß das eine Grund vom andern ist. Ist also das eine wahr, so ist es auch das andere. Beim hypothetischen Urteil können nur 2 Sätze sein, — beim disjunktiven können mehrere sein.]",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s23-030",
     "kind": "text",
     "aa": 765,
     "ms": [
      {
       "p": 100,
       "i": 60
      }
     ],
     "text": "c) disjunktive. Das Verhältnis der Glieder des eingeteilten Begriffs, der Teile der Sphära zur ganzen Sphära.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-031",
     "kind": "text",
     "aa": 765,
     "text": "Das kategorische f {absolute) Urteil enthält nur das Verhältnis 2er Begriffe, das | hypothetische und | disjunktive aber zweier oder mehrerer Urteile f. [Propositio oder Satz heißt ein assertorisches Urteil.]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-032",
     "kind": "text",
     "aa": 765,
     "aaEnd": 766,
     "pages": [
      {
       "p": 766,
       "i": 263
      }
     ],
     "text": "Was der Grund in einem judicio hypothetico ist, heißt antecedens, die Verknüpfung mit dem letzten heißt die Copula, die hernach folgende {Schlußfolge aus) beiden Urteilen heißt die Konsequenz. Die Materie des hypothetischen Urteils besteht nicht aus 2 Begriffen, sondern aus zwei Urteilen, deren Verhältnis die Konsequenz ist. [Ein hypothetisches Urteil besteht aus zwei problematischen — dies ist seine Materie. Die Folge des consequens aus dem antecedens heißt consequentia. Das hypothetische Urteil tut nichts, als daß es die Konsequenz aus den beiden problematischen Sätzen zieht.]",
     "joined": [
      "layout"
     ],
     "ocrConf": 44
    },
    {
     "id": "dohna-s23-033",
     "kind": "text",
     "aa": 766,
     "text": "Nun ein Beispiel vom judicio disjunctivo : Alle Körper sind entweder flüssig oder fest. <Wenn diese Welt nicht die beste ist, so hat | Gott | nicht die bessere gekannt oder | nicht | erschaffen wollen oder | nicht erschaffen | können usw.) [Dies macht zusammen die ganze sphaeram aus.]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s23-034",
     "kind": "text",
     "aa": 766,
     "text": "4. Modalität (Bestimmung des Verbindungsbegriffs). Die 3 Bestimmungen der Copula [oder des Verbindungsbegriffs] (vorzüglich für kategorische Urteile) sind :",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-035",
     "kind": "text",
     "aa": 766,
     "text": "a) problematische Urteile, enthalten die logische Möglichkeit,",
     "ocrConf": 48
    },
    {
     "id": "dohna-s23-036",
     "kind": "text",
     "aa": 766,
     "text": "b) assertorische Urteile, enthalten die logische Wirklichkeit [Wahrheit],",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "dohna-s23-037",
     "kind": "text",
     "aa": 766,
     "text": "c) apodiktische Urteile, enthalten die logische Notwendigkeit.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s23-038",
     "kind": "text",
     "aa": 766,
     "ms": [
      {
       "p": 101,
       "i": 0
      }
     ],
     "text": "[Stunde, Freitag]",
     "ocrConf": 39
    },
    {
     "id": "dohna-s23-039",
     "kind": "text",
     "aa": 766,
     "text": "Der Autor sagt: ein Judicium ohne Modalität ist Judicium purum. Ein Urteil heißt exponibile, weil ein Gedanke oder Begriff als einfach ausgedrückt wird, ob er gleich in der Tat zusammengesetzt ist, und zwar aus einem bejahenden und verneinenden, z. B. wenige Menschen sind tugendhaft. [Dies bedeutet: einige Menschen sind tugendhaft, viele Menschen sind nicht tugendhaft, also ein bejahendes und ein verneinendes Urteil.] [Ein zusammengesetztes Urteil, wo 2 Urteile ein Prädikat haben.] Nicht <rein> logische Urteile sind diejenigen, die [ästhetisch sind] bloß das Subjektive in Beziehung auf ein Erkenntnisvermögen vorstellen. Z. B. wenn man eine Beschreibung von Bergen macht und dabei nicht allgemeingültige Begriffe von ihrer Größe und Lage, sondern bloß die dadurch in uns hervorgebrachten Empfindüngen erzählt.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-040",
     "kind": "text",
     "aa": 766,
     "text": "[Theoretische Urteile sind die, welche ein Objekt als möglich bestimmen. Praktische bezeichnen die Handlungen, es wirklich zu machen.]",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-041",
     "kind": "text",
     "aa": 766,
     "text": "Praktische Sätze beziehen sich auf die Handlungen, dadurch der Satz möglich wird.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s23-042",
     "kind": "text",
     "aa": 767,
     "text": "[ünerweisliches Urteil kann doch wahr sein. — Alle unmittelbar gewisse Sätze sind unerweislich.] Demonstrieren kann zweierlei Bedeutung haben. —",
     "dehyphenated": 1,
     "ocrConf": 32
    },
    {
     "id": "dohna-s23-043",
     "kind": "text",
     "aa": 767,
     "text": "Ein leeres Urteil [was keinen Grund irgendeines Erkenntnisses enthält, so tautologische Urteile] ist ein Urteil, das keinen Begriff enthält, welches ganz undeutlich ist, wenn ich obscurum per aeque obscurum erkläre. Ein leeres Urteil kann offenbar und verborgen sein. [Identische Urteile sind darum noch nicht leer. — Alle Definitionen sind identisch mit dem definierten Begriff. Die Identität kann auch durch Zergliederung erkannt werden.]",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "dohna-s23-044",
     "kind": "text",
     "aa": 767,
     "ms": [
      {
       "p": 102,
       "i": 0
      }
     ],
     "text": "Wenn die Identitas explicita, so ist das Urteil tautologisch — wenn ein Merkmal zweimal genannt wird. Nicht alles Unerweisliche ist ein identischer Satz. Es gehören dahin auch synthetische Sätze. Wenn ich identitatem implicitam in explieitam verwandelt habe, so habe ich die löAnalysis verrichtet.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-045",
     "kind": "text",
     "aa": 767,
     "text": "Der Autor redet nun von unerweislichen Urteilen. Axiome sind unerweisliche (unmittelbar gewisse) Sätze. [Sie smd nur in der Mathematik möglich.] Ließ sich auch manches per analysin entdecken, so will dies der Mathematiker nicht. Denn es ist nicht sein Geschäft, da er alles durch Konstruktion der Begriffe in der Anschauung hervorbringt. [Axiome sind immer synthetische Sätze, nämlich solche, die man in einer Anschauung dartun kann (durch) intuitum purum. Die anatytischen Sätze sind [ damit | nicht identisch.]",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-046",
     "kind": "text",
     "aa": 767,
     "text": "Postulat ist ein praktischer Satz von dem, was getan werden soll, ohne die Art und Weise zu zeigen, weil er annimmt, daß jedermann es kann, was er als Imperativen empfiehlt. [Denn in der Logik kommt es nicht auf die Materie, sondern immer auf die Form an.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s23-047",
     "kind": "text",
     "aa": 767,
     "text": "Urteile sind entweder intuitiv (sofern es auf ein Objekt geht, das sich in der Anschauung darstellen läßt) oder diskursiv (dessen Gegenstand durch Begriff dargestellt wird).",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s23-048",
     "kind": "text",
     "aa": 767,
     "ms": [
      {
       "p": 103,
       "i": 0
      }
     ],
     "text": "Ein Wahrnehmungsurteil ist intuitiv (nicht diskursiv). Ein empirisches Urteil ist intuitiv, Erfahrung doch schon diskursiv. Erfahrungsurteile sind jederzeit diskursiv, weil wir nämlich immer Wahrnehmungen damit verknüpfen. Ein Vitium subreptionis, wenn man das, was nur Wahrnehmungsurteil ist, für ein Erfahrungsurteil hält.",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "dohna-s23-049",
     "kind": "text",
     "aa": 767,
     "text": "Theorema ist ein theoretischer Satz, insofern er eines Beweises fähig ist. [Eine Folgerung, die man durch einen Schluß zieht: Corollarium consectarium.] Eine Aufgabe ist ein praktischer Satz, da man annehmen muß, Mas zu tun geboten wird.",
     "dehyphenated": 1,
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s24",
   "title": "[Stunde, Montag]",
   "titleSrc": "heading",
   "headings": [
    "[Stunde, Montag]"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s24-001",
     "kind": "heading",
     "aa": 768,
     "text": "[Stunde, Montag]"
    },
    {
     "id": "dohna-s24-002",
     "kind": "text",
     "aa": 768,
     "ms": [
      {
       "p": 104,
       "i": 454
      }
     ],
     "text": "Axiom ein Satz, der unmittelbar aus der Definition kommt. Es setzt eigentlich Anschauung voraus, oder doch unmittelbar Gewißheit a priori. Der praktische Satz, der einer Auflösung bedürftig und fähig ist, heißt quaestio problematis [der Satz, der die Handlung bestimmt, welche geschehn soll]. Die Vorstellung von der Art, wie der Gegenstand zu Stande gebracht wird, heißt resolutio. Der Beweis, daß — wenn man so verfahren hat — das folgt: demonstratio. Ein Postulat ist weder einer Resolution noch einer Demonstration fähig. Die Auflösung der Aufgabe ist vollständig, wenn alles darin enthalten, wenn das Verhältnis vollständig auf gelöset wird. Dies geht in der Mathematik nicht immer an, aber man kann sich ihm soviel nähern als man will, z. B. die Ausmessung des Diameters der Erde. — Genauigkeit — Präzision setzt voraus, daß es vollständig ■ — nicht zu wenig, auch nicht zuviel enthält.",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-003",
     "kind": "text",
     "aa": 768,
     "text": "Man nimmt bei Auflösungen im Praktischen es nicht so sein* genau und ist zufrieden, wenn man das Mittel hat, dessen Kraft man lieber zu stark als zu schwach annimmt. [Z. B. Hebel, Räder, lieber zuviel, als zu wenig Kraft. — Probe — das, was man analysiert hat — wieder zurück auf das Gegebene bringen. — ]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-004",
     "kind": "text",
     "aa": 768,
     "text": "Qualitas occulta, eine in der scholastischen Philosophie gewöhnliche Methode, nach der sie den Namen der Wirkung der Ursache für die Einsicht der Ursache selbst hielten. [Die Tautologie in Bestimmung der Ursache — z. B. Instinkt, horror vacui, Idiosynkrasie usw. — man wird oft dadurch hintergangen. — Nichts ist von sich selbst Ursach — die Ursache muß immer etwas andres sein, als das causatum — die Wirkung.] kvrsXsyeia. — der Name einer uns unbekannten Ursache.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-005",
     "kind": "text",
     "aa": 768,
     "aaEnd": 769,
     "pages": [
      {
       "p": 769,
       "i": 724
      }
     ],
     "ms": [
      {
       "p": 105,
       "i": 0
      }
     ],
     "text": "Wir sind noch bei der Benennung gewisser Sätze in einem System, [und zwar im dogmatischen System]. Corollarium ist der Satz, der durch einen einzigen Schluß aus einem andern Satz kann gefolgert werden. Die Corollaria können theoretische und praktische sein. Der Autor setzt oft bei den Lesern Kenntnisse voraus und macht Corollarien, welche für Anfänger noch Theoreme wären. Dies ist immer relativ auf die Fälligkeiten. Wolf f hat Corollar Zusatz (besser Folgerung) und Scholion Anmerkung übersetzt. Scholion — ein Ruheplatz, man versteht darunter das, was nicht als Bestandteil zu einem System, sondern als Erklärung angesehen wird. Die Scholia können auch den Nutzen, die Realität und die Geschichte des Satzes enthalten, wer ihn zuerst gesagt. Zuletzt kommt hier vor die Benennung des Lemma — Lehnurteil [wo man aus einem andern System etwas hernimmt], gehört nicht zum Territorio der Wissenschaft: est peregrinum aliquid [ — Episode — ].",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-006",
     "kind": "text",
     "aa": 769,
     "ms": [
      {
       "p": 106,
       "i": 0
      }
     ],
     "text": "Unmittelbare Schlüsse (consequentiae immediatae) sind die Folgerungen eines Satzes aus dem andern, die beide nicht der Materie nach, sondern <(bloß) der Form nach voneinander unterschieden sind. Sie haben keinen medium terminum. Unmittelbare Schlüsse sind solche Schlüsse, die nicht anders als durch tautologische Subsumtionen in Vernunftschlüsse können verwandelt werden. [Z. B. Alle Menschen sind sterblich, einige Sterbliche also Menschen, dies ist consequentia immediata. Vernunftschluß: Alle Menschen sind sterblich, ist major, atqui Einige Sterbliche sind sterblich, dies ist der minor, tautologische Subsumtion. Ergo sind einige Sterbliche Mensehen, die Conclusion. Da nun tautologische Sätze leer, so läßt man den minor aus und die Conclusion folgt immediat.] Tautologische Urteile können als leer angesehen werden, weil sie gar nichts zur Deutlichkeit beitragen, z. B. Alle Menschen sind sterblich, einige Menschen sind Menschen (tautologisch), einige Menschen sind sterblich.",
     "dehyphenated": 3,
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-007",
     "kind": "text",
     "aa": 769,
     "text": "Die erste consequentia immediata soll nach unserm Autor heißen :",
     "ocrConf": 51
    },
    {
     "id": "dohna-s24-008",
     "kind": "text",
     "aa": 769,
     "text": "1. per judicia aequipollentia. Ich schließe von einem Urteil auf das andere, was eben dasselbe bedeutet. Der Grund muß jederzeit von der Folge unterschieden sein.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-009",
     "kind": "text",
     "aa": 769,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "io*",
       "unresolved": true
      }
     ],
     "text": "Nun wollen wir die 4 consequentias immediatas durchgehen. Die erste — per judicia subalternata, da ich vom Allgemeinen auf das Besondre schließe, [quoad quantitate]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-010",
     "kind": "text",
     "aa": 769,
     "text": "2te per judicia opposita, da ich von | einem von | 2 einander entgegengesetzten Urteilen auf das andre schließe.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-011",
     "kind": "text",
     "aa": 769,
     "text": "3. Per conversionem judicii, da ich die terminos des Urteils umkehre, nur das Verhältnis, nicht die Qualität.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "dohna-s24-012",
     "kind": "text",
     "aa": 769,
     "text": "4. Per contrapositionem, da nämlich wieder nun nicht die Quantität verändert wird, nur die Qualität. Was im ersten Satz Prädikat war, wird nun Subjekt, aber die Quantität, das Bejahende und Verneinende bleibt. (Metathesis.) [In jedem bejahenden Urteil kann ich kontraponieren — man darf nur umkehren.]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-013",
     "kind": "text",
     "aa": 769,
     "text": "Wir (wollen) jetzt die einzelnen Konsequenzen durchgehen.",
     "ocrConf": 50
    },
    {
     "id": "dohna-s24-014",
     "kind": "text",
     "aa": 769,
     "text": "1. Per judicia subalternata — was allen zukommt, kommt einigen zu, z. B. alle Menschen sind sterblich, folglich sind einige Menschen sterblich.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-015",
     "kind": "text",
     "aa": 770,
     "text": "2. Alle oppositiones in der Logik haben 3 verschiedene Arten. Sie sind:",
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-016",
     "kind": "text",
     "aa": 770,
     "text": "1 . einander contradictorie opposita — [enthalten alles, was erfordert",
     "ocrConf": 36
    },
    {
     "id": "dohna-s24-017",
     "kind": "text",
     "aa": 770,
     "ms": [
      {
       "p": null,
       "i": 30,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "ist, zum Widerstreit — ] oder Weniger als zum Widerstreit erfordert wird, enthalten die judicia",
     "ocrConf": 36
    },
    {
     "id": "dohna-s24-018",
     "kind": "text",
     "aa": 770,
     "text": "2. subcontrarie opposita [daher können sie alle beide wahr sein] und",
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-019",
     "kind": "text",
     "aa": 770,
     "text": "3. contrarie opposita [enthalten mehr, als dazu gehört, daher können",
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-020",
     "kind": "text",
     "aa": 770,
     "text": "beide falsch sein.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-021",
     "kind": "text",
     "aa": 770,
     "text": "Nun gehen wir zu ihren Regeln.",
     "ocrConf": 35
    },
    {
     "id": "dohna-s24-022",
     "kind": "text",
     "aa": 770,
     "text": "Die Regel der ersten : Es ist kein Satz dem andern contradictorie entgegengesetzt, als das allgemein bejahende dem besonders verneinenden. —",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-023",
     "kind": "text",
     "aa": 770,
     "text": "Man nahm gewisse Zeichen an. Allgemein bejahende mit a, allgemein verneinende e, particulariter bejahende i, o partikulär verneinende. Man drückt dies so aus :",
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-024",
     "kind": "text",
     "aa": 770,
     "text": "Asserit a, negat e, sed universaliter ambo —",
     "ocrConf": 30
    },
    {
     "id": "dohna-s24-025",
     "kind": "text",
     "aa": 770,
     "text": "Asserit i, negat o, sed particulariter ambo.—",
     "ocrConf": 37
    },
    {
     "id": "dohna-s24-026",
     "kind": "text",
     "aa": 770,
     "text": "Wenn eins von 2 kontradiktorischen Urteilen wahr ist, so ist das andre falsch, und umgekehrt.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-027",
     "kind": "text",
     "aa": 770,
     "text": "Wir kommen",
     "ocrConf": 49
    },
    {
     "id": "dohna-s24-028",
     "kind": "text",
     "aa": 770,
     "text": "2. zu den Urteilen subcontrarie oppositae. Partikulare Urteile sind einander subcontrarie entgegengesetzt. Die",
     "ocrConf": 52
    },
    {
     "id": "dohna-s24-029",
     "kind": "text",
     "aa": 770,
     "text": "3. Urteile, contrarie oppositae, sind diejenigen, wo zwei allgemeine Urteile einander entgegengesetzt werden wie a und e.",
     "ocrConf": 58
    },
    {
     "id": "dohna-s24-030",
     "kind": "text",
     "aa": 770,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "",
       "unresolved": true
      },
      {
       "p": 109,
       "i": 64,
       "approx": true
      }
     ],
     "text": "Bei allgemeinen Urteilen sagt man mehr als zur Opposition nötig ist. Zur Opposition aber wird nichts mehr erfordert, als daß a und o, e und i im Widerstreit sind.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-031",
     "kind": "text",
     "aa": 770,
     "aaEnd": 771,
     "pages": [
      {
       "p": 771,
       "i": 604
      }
     ],
     "text": "3. Conversio judicii, besteht im Schluß eines Urteils aus dem andern durch metathesin terminorum [indem man das, was vorher Subjekt war, zum Prädikat macht], doch durch Beibehaltung der Qualität des Urteils. Das Judicium conversum ist gegeben, das convertens muß aus der consequentia immediata gefolgert werden. Die conversio simplex f ist die, wo die Quantität dieselbige bleibt. Der Begriff des Subjekts wird betrachtet, als steht er unter dem Prädikat als locus geometricus. [Daher kann man diese Sätze nicht umkehren, das würde latiorem unter angustiorem bringen.] Allgemein bejahende Urteile können eigentlich nur per accidens umgekehrt werden, partikulär bejahende aber (simpliciter). Alle verneinenden Urteile lassen sich simphciter umkehren — der Widerstreit ist immer reziprok. Alle allgemein bejahenden usw. Contraposition durch metathesin.",
     "joined": [
      "layout"
     ],
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-032",
     "kind": "text",
     "aa": 771,
     "text": "[NB. Dienstag, d. 17ten. Hier machte Kant Ferien auf mehr als •4 Wochen.]",
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-033",
     "kind": "text",
     "aa": 771,
     "ms": [
      {
       "p": 110,
       "i": 0,
       "raw": "uo",
       "inferred": true
      }
     ],
     "text": "[Montag, d. 20sten August]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-034",
     "kind": "text",
     "aa": 771,
     "text": "Ein Verstandesschluß ist die Folge eines Urteils aus dem andern, absque judicio intermedio. Ein Vernunftschluß ist die Erkenntnis der Notwendigkeit eines Satzes durch die Subsumtion seiner Bedingung unter eine allgemeine Regel. Das heißt Judicium intermedium.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-035",
     "kind": "text",
     "aa": 771,
     "text": "[Ein Vernunftschluß ist die Folge eines Verstandesschlusses aus dem andern durch ein Judicium intermedium. Verstandesschlüsse schließen vom Allgemeinen auf das Besondre, Schlüsse der Urteilskraft vom Besondern auf das Allgemeine. Sie substituiert : atqui das ist der Fall von der allgemeinen Regel. Ihre Schlüsse sind nie strenge — nur Versuch in subsidium — so Analogie und Induktion.]",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-036",
     "kind": "text",
     "aa": 771,
     "text": "Alles Ausgedehnte ist teilbar, folglich sind die Körper teilbar, ist keine consequentia immediata. Bei einem allgemeinen Vernunftschluß ist notwendig, daß er unter eine allgemeine Regel gebracht werde, und daß man zweitens die Bedingimg unter der allgemeinen Regel subsumiert. Z. B. Alles Ausgedehnte ist teilbar, atqui alle Körper sind {ausgedehnt), ergo alle Körper sind teilbar. Jeder Vernunftschluß besteht aus 3 Sätzen :",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-037",
     "kind": "text",
     "aa": 771,
     "text": "1. die allgemeine Regel, d.h. der Obersatz, major propositio,",
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-038",
     "kind": "text",
     "aa": 771,
     "text": "2. die Bedingung der Subsumtion eines gewissen Satzes unter einer allgemeinen Regel, minor,",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-039",
     "kind": "text",
     "aa": 771,
     "text": "3. der Satz, der durch Subsumtion unter einer allgemeinen Regel soll verstanden werden, conclusio.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-040",
     "kind": "text",
     "aa": 771,
     "aaEnd": 772,
     "pages": [
      {
       "p": 772,
       "i": 329
      }
     ],
     "ms": [
      {
       "p": 111,
       "i": 0,
       "raw": "in",
       "inferred": true
      }
     ],
     "text": "Analogie und Induktion sind Schlüsse der Urteilskraft. Bei allen Schlüssen kann man nie vom Besondern aufs Allgemeine (mit Sicherheit) schließen. Ein Schluß der (Induktion) ist derjenige, wenn ich von einigen Dingen, die einer gewissen Gattung zukommen, auf alle Dinge der Gattung schließe, daß es den übrigen allen zukomme. [Zu wissen, wie man die Verschiedenheit suchen soll, wie man reflektiert, kann man nicht lehren. — ]",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-041",
     "kind": "text",
     "aa": 772,
     "text": "Nach dem Schluß der Analogie: Wenn 2 Dinge unter so vielen [ Bestimmungen |, als ich habe kennen lernen, übereinkommen, so schließe ich, daß sie | in | den andern | Bestimmungen | auch übereinkommen f. Ich schließe also von einigen Bestimmungen, die ich erkenne, daß dem Ding die andern auch zukommen. Es ist Schluß eines provisorischen Urteils. Man behält sich vor, es zu ändern. [Schluß nach der Analogie, daß die Tiere Seele haben — ■ Warum . . . f denn ? Haben die Wespen von verbotenem Honig gesoffen, und wollen nun stechen, so fallen sie, aber sie haben . . . f Begehrungsvermögen. Dies trifft auch auf die Pflanzen zu, das Fliege nfangblatt. Sie suchen Luft und Sonne und Wasser, f]",
     "dehyphenated": 3,
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-042",
     "kind": "text",
     "aa": 772,
     "text": "Noch hat kein Logiker die Analogie und Induktion gehörig bearbeitet. Dieses Feld steht noch offen. Ein Urteil, welches ausmacht, was wahr oder falsch, heißt bestimmend . . . f",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-043",
     "kind": "text",
     "aa": 772,
     "ms": [
      {
       "p": 112,
       "i": 0,
       "raw": "118",
       "inferred": true
      }
     ],
     "text": "Es gibt dreierlei Vernunftschlüsse, kategorische, lvypothetische und disjunktive. In dem ersten sind nur 3 termini. Der Grund davon Hegt hierin, daß bei allen Vernunftschlüssen eine Regel zum Grunde Hegt, unter die man subsumiert. Das 3te ist die Anwendung — conclusio. In jedem Vernunftschluß haben wir Materie und Form. Die erste besteht aus den Prämissen [die Prämissen nennt man die Materie des Vernunftschlusses], die letztere aus der Konsequenz. Die Logik hat sich gar nicht um die Falschheit quoad materiam zu bekümmern. Wenn man auch aus falschen Prämissen richtig geschlossen hat, so ist die Conclusion doch richtig. Kern vernünftiges Wesen ist unfehlbar. Der Mensch ist ein vernünftiges Wesen, also ist kern Mensch unfehlbar. Die Conclusion ist richtig, die Prämissen falsch. Für die Logik gehört nur das Argumentieren und der error aut veritas ratiocinn quoad formam.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-044",
     "kind": "text",
     "aa": 772,
     "ms": [
      {
       "p": 113,
       "i": 0
      }
     ],
     "text": "Major propositio ist immer ein assertorischer Satz. [Major propositio enthält die Regel, minor die Subsumtion, conclusio die Folge. Vernunftschluß das Bewußtsein der Notwendigkeit eines Satzes durch Subsumtion unter eine allgemeine Regel. — ]",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "dohna-s24-045",
     "kind": "text",
     "aa": 772,
     "text": "Jeder dieser Vernunftschlüsse hat sein besondres Prinzip. Die kategorischen Vernunftschlüsse schheßen nach dem dicto de omni et nuUo. Die hypothetischen Vernunftschlüsse nach der Regel a ratione ad rationatum valet consequentia oder a negatione rationati (posita ratione ponitur rationatum).",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-046",
     "kind": "text",
     "aa": 773,
     "text": "Das Dictum de omni et nullo ist die Folge aus dem Principio contradictionis [der Satz des Widerspruchs ist Prinzip der Urteile, nicht der Vernunftschlüsse]. Es heißt:",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-047",
     "kind": "text",
     "aa": 773,
     "text": "Quicquid valet de genere, valet etiam de omnibus sub genere aut specie — quicquid non valet de genere aut specie, non valet etiam de omnibus sub isto genere aut ista specie contentis.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-048",
     "kind": "text",
     "aa": 773,
     "text": "Ich kann so schließen, denn der Begriff des Ganzen enthält die Merkmale des Einzelnen. Kant drückt dies aus:",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-049",
     "kind": "text",
     "aa": 773,
     "ms": [
      {
       "p": null,
       "i": 97,
       "raw": "H4",
       "unresolved": true
      }
     ],
     "text": "Nota notae est nota rei ipsius <clas allgemeine Prinzip aller affirmativen Schlüsse) — Repugnans notae repugnat rei ipsi <(das Prinzip aller verneinenden Schlüsse).",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-050",
     "kind": "text",
     "aa": 773,
     "text": "[Z. B. Alle Körper sind veränderlich. Ich suche notam intermediam teilbar, ein näheres Merkmal aller Körper. Veränderlich ist ein Merkmal von teilbar, teilbar ein Merkmal von Körper, mithin veränderlich ein Merkmal von Körper.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-051",
     "kind": "text",
     "aa": 773,
     "text": "teilbar",
     "ocrConf": 52
    },
    {
     "id": "dohna-s24-052",
     "kind": "text",
     "aa": 773,
     "text": "Körper — veränderlich",
     "ocrConf": 30
    },
    {
     "id": "dohna-s24-053",
     "kind": "text",
     "aa": 773,
     "text": "teilbar — veränderlich",
     "ocrConf": 30
    },
    {
     "id": "dohna-s24-054",
     "kind": "text",
     "aa": 773,
     "text": "Körper — teilbar",
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-055",
     "kind": "text",
     "aa": 773,
     "text": "— — veränderlich nach dem Prinzip aller affirmativen Schlüsse.",
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-056",
     "kind": "text",
     "aa": 773,
     "text": "Vernunftschlüsse bestehn also darin, daß wir notam notae mit der nota rei ipsius per notam intermediam vergleichen.]",
     "ocrConf": 54
    },
    {
     "id": "dohna-s24-057",
     "kind": "text",
     "aa": 773,
     "text": "Bei den disjunktiven Sätzen müssen die membra disjunctionis, wenn ihrer auch noch so viel sind, als ein Glied betrachtet <( werden nach dem Prinzipium exclusi medii inter duo contradictoria), denn bei widersprechenden Urteilen kann es nur 2 Sätze geben, a und non a.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-058",
     "kind": "text",
     "aa": 773,
     "text": "Wir kommen zu der Lehre",
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-059",
     "kind": "text",
     "aa": 773,
     "text": "Von den kategorischen Vernunftschlüssen",
     "ocrConf": 57
    },
    {
     "id": "dohna-s24-060",
     "kind": "text",
     "aa": 773,
     "text": "Sie gehn bloß auf die kategorischen Sätze. — Major terminus ist das Prädikat, minor das Subjekt und [ dazu | der medius. Es kann nur 4 Conclusionen geben. Medius terminus ist in majori {propositione loco) subjecti und in minori <loco> praedicati. Jede conclusio besteht aus einem Subjekt und einem Prädikat. Die 4 verschiedenen syllogistischen Figuren wollen wir hier darstellen.",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-061",
     "kind": "table",
     "aa": 774,
     "text": "",
     "lines": [
      "I",
      "II",
      "III",
      "IV",
      "Alle M. irren",
      "Korper s. teilbar",
      "M. P.",
      "P. M.",
      "M.P.",
      "P.M.",
      "Gelehrte sind M.",
      "Die Seele ist nicht",
      "teilbar",
      "S.M.",
      "S.M.",
      "M.S.",
      "M.S.",
      "Gelehrte können",
      "Die Seele i. nicht",
      "irren",
      "körperlich",
      "S.P.",
      "S.P.",
      "S.P.",
      "S.P."
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "dohna-s24-062",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "[Man",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "muß sich das als eine Kette von 3 Gliedern vorstellen.",
     "ocrConf": 35
    },
    {
     "id": "dohna-s24-063",
     "kind": "text",
     "aa": 774,
     "text": "— Körper sind teilbar.",
     "ocrConf": 34
    },
    {
     "id": "dohna-s24-064",
     "kind": "text",
     "aa": 774,
     "text": "Die Seele ist nicht teilbar.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-065",
     "kind": "text",
     "aa": 774,
     "text": "körperlich.",
     "ocrConf": 57
    },
    {
     "id": "dohna-s24-066",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "Denn",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "major ist die Regel. Minor ist immer bejahend. Denn ich sage",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-067",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "atqui",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "dies ist unter der Bedingung enthalten.] In der 2ten Figur findet man jederzeit eine negative Conclusion.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-068",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "Denn",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "es wird darin nie unmittelbar geschlossen, sondern man muß",
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-069",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "eine",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "conclusio immediata einschieben.",
     "ocrConf": 60
    },
    {
     "id": "dohna-s24-070",
     "kind": "text",
     "aa": 774,
     "text": "Die major propositio muß jederzeit <(in allen kategorischen Vernunftschlüssen) allgemein sein.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-071",
     "kind": "text",
     "aa": 774,
     "text": "In der 3ten Figur können wir bloß eine partikuläre Conclusion haben.",
     "ocrConf": 38
    },
    {
     "id": "dohna-s24-072",
     "kind": "text",
     "aa": 774,
     "ms": [
      {
       "p": 115,
       "i": 0
      }
     ],
     "text": "Die 4te Figur hat nie eine allgemein bejahende oder allgemein",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-073",
     "kind": "text",
     "aa": 774,
     "text": "verneinende Conclusion. Der Schluß der 2ten, 3ten und 4ten Figur 15",
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-074",
     "kind": "text",
     "aa": 774,
     "text": "muß in Gedanken immer in die erste gebracht werden.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-075",
     "kind": "text",
     "aa": 774,
     "text": "[Nur die Schlüsse nach der ersten Figur sind kategorisch. Die andern",
     "ocrConf": 37
    },
    {
     "id": "dohna-s24-076",
     "kind": "text",
     "aa": 774,
     "text": "sind alle ratiocinia impura. — Das Prädikat der conclusio muß nämlich",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-077",
     "kind": "text",
     "aa": 774,
     "text": "auf den medium terminum bezogen sein beim kategorischen Vernunftschluß. Ratiocinia hybrida, wo außer den Prämissen und der conclusio 20",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-078",
     "kind": "text",
     "aa": 774,
     "text": "noch eine consequentia immediata. — ]",
     "ocrConf": 54
    },
    {
     "id": "dohna-s24-079",
     "kind": "text",
     "aa": 774,
     "text": "Wir müssen jetzt die allgemeinen Regeln aller Vernunft Schlüsse",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-080",
     "kind": "text",
     "aa": 774,
     "text": "clurchgehn.",
     "ocrConf": 28
    },
    {
     "id": "dohna-s24-081",
     "kind": "text",
     "aa": 775,
     "text": "In einem jeden Vernunftschluß können nur 3 termini sein. Wenn ein terminus in zweierlei Bedeutung genommen wird, so hat der Schluß in der Tat4terniini. Dafür ist der Schulausdruck: der terminus gehe auf 4 Füßen. Der terminus medius muß in den Prämissen liegen.",
     "ocrConf": 36
    },
    {
     "id": "dohna-s24-082",
     "kind": "text",
     "aa": 775,
     "text": "Nun kommen einige Fehler, die leicht begangen werden:",
     "ocrConf": 52
    },
    {
     "id": "dohna-s24-083",
     "kind": "text",
     "aa": 775,
     "text": "1. Ex puris negativis <(praemissis> nil sequitur [denn minor propositio muß affirmativ sein,]",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-084",
     "kind": "text",
     "aa": 775,
     "text": "2. Ex puris particularibus nil sequitur [folgt aus dem Begriff eines Vernunftschlusses. Wenigstens muß major universalis sein.]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-085",
     "kind": "text",
     "aa": 775,
     "text": "3. Conclusio sequitur partem debiliorem, das will soviel sagen: eine von den Prämissen heißt pars debilior, wenn sie verneinend oder particular ist, dann ist auch die conclusio particular oder verneinend. [ — Nur die minor kann particular sein. — ]",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-086",
     "kind": "text",
     "aa": 775,
     "ms": [
      {
       "p": 116,
       "i": 0,
       "raw": "iig",
       "inferred": true
      }
     ],
     "text": "Verneinung ist ja Opposition, Widerspruch.",
     "ocrConf": 38
    },
    {
     "id": "dohna-s24-087",
     "kind": "text",
     "aa": 775,
     "text": "Wir kommen jetzt auf die besondern Regeln der Vernunftschlüsse erster Figur. Sie heißen",
     "ocrConf": 49
    },
    {
     "id": "dohna-s24-088",
     "kind": "text",
     "aa": 775,
     "text": "Major sit universalis, minor affirmans — dies paßt auf alle kategorische Schlüsse. Nun ferner Minor sit affirmans ebenso für alle. Minor propositio soll ja ausdrücken, daß diesem oder jenem die Bedingung zukommt. Alle Schlüsse in den übrigen Figuren sind nicht ratiocinia pura, sondern hybrida — d. h. solche, die eigentlich nicht aus 3 Propositionen, sondern wo per consequentiam immediatam eine 4te eingemischt ist. [Ein anderer Terminus im ratiocinio wird der 4te Fuß genannt.] Es ist nur eine Künstelei, durch Versetzung des medii termini dennoch einen richtigen Schluß hervorzubringen. [Die Versetzung, metathesis terminorum ist zweifach, per contrapositionem, per conversionem. Die Conclusio in den 3 übrigen Figuren ist nie universal bejahend — nach der ersten hat man alle 4 Arten (allg. <u.) part. bejahend und verneinend). Dies zeigt schon, daß jene auf Stelzen gehen.]",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-089",
     "kind": "text",
     "aa": 775,
     "text": "In der 2ten Figur, Major <(sit)> iiniversalis, conclusio negativa.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-090",
     "kind": "text",
     "aa": 775,
     "text": "In der dritten Figur, Minor (weil er Subsumtion ist) affirmans, conclusio particularis. [Die Veränderung geschieht in minori propositione. Wenn diese vorher allgemein <oder particular) bejahend ist, wie immer, so kann er nur per accidens umgekehrt (werden) — wäre er particular bejahend gewesen, so: conclusio sequitur partem debiliorem, also ist sie auch particular.]",
     "dehyphenated": 2,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-091",
     "kind": "text",
     "aa": 775,
     "ms": [
      {
       "p": 117,
       "i": 0,
       "raw": "in",
       "inferred": true
      }
     ],
     "text": "In der 4ten Figur: Conclusio vel negativa vel particularis.",
     "ocrConf": 37
    },
    {
     "id": "dohna-s24-092",
     "kind": "text",
     "aa": 776,
     "text": "a a e",
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-093",
     "kind": "table",
     "aa": 776,
     "text": "",
     "lines": [
      "a a i",
      "a a o",
      "a e a",
      "a i a",
      "a oa",
      "e a o",
      "e i o",
      "e o o",
      "usw."
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "dohna-s24-094",
     "kind": "text",
     "aa": 776,
     "text": "Reuschs Logik. Die Conclusion der 2ten Figur ist negativ, weil der Syllogism nicht zur ersten Figur gemacht werden kann. In der 3ten Figur muß mit der minor propositio eine metathesis terminorum vorgenommen werden. Ein allgemein bejahender Satz kann nur per accidens umgekehrt werden. Der Schluß in der ersten Figur ist der einzige reine. (Ars non habet osorem nisi ignorantem.)",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-095",
     "kind": "text",
     "aa": 776,
     "text": "Der Modus eines Satzes ist die Qualität und Quantität.",
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-096",
     "kind": "table",
     "aa": 776,
     "text": "",
     "lines": [
      "In der ersten Figur kann man schließen in Barbara [ad"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "dohna-s24-097",
     "kind": "text",
     "aa": 776,
     "text": "p. 110]. Man buchstabiert so: Cel — ar — ent. In den Sil-",
     "ocrConf": 33
    },
    {
     "id": "dohna-s24-098",
     "kind": "table",
     "aa": 776,
     "text": "",
     "lines": [
      "ben, wo s ist, muß ich den Satz simpliciter umkehren, p per",
      "accidens, wo ein m ist, muß konvertiert, wo ein c ist, kon-",
      "traponiert werden."
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "dohna-s24-099",
     "kind": "text",
     "aa": 776,
     "text": "Die modi kommen alle heraus auf 64 verschiedene Arten",
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-100",
     "kind": "table",
     "aa": 776,
     "text": "",
     "lines": [
      "aus den 4 Vokalen a — e — i — o ."
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "dohna-s24-101",
     "kind": "text",
     "aa": 776,
     "ms": [
      {
       "p": 118,
       "i": 0
      }
     ],
     "text": "Aus einem jeden sind 16 verschiedene Schlüsse. Aber 28 fallen weg nach der Regel: ex puris negativis nihil sequitur. 18 fallen weg nach der Regel: conclusio sequitur — — ' partem debiliorem. 8 fallen nach der Regel, daß negative Conclusion nicht aus bloß affirmativen folgen kann. Da bleiben nicht mehr wie 10 modi, davon nur 8 modi utiles. —",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-102",
     "kind": "text",
     "aa": 776,
     "text": "Der hypothetische Vernunftschluß ist der, wo major propositio ein bedingter Satz ist. Der modus ponens schließt vom Grunde zur Folge. Der modus tollens von der Folge zum Grunde. Es kann nicht geschehen, daß ich a consequente sublato ad antecedentem schließe",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-103",
     "kind": "text",
     "aa": 776,
     "text": "Das Dilemma ist ein hypothetisches (Urteil), dessen Konsequenz ein disjunktives Urteil. [Z. B. wenn diese Welt nicht die beste ist, so hat Gott entweder keine bessere gekannt, oder er hat keine bessere schaffen können oder wollen.]",
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-104",
     "kind": "text",
     "aa": 776,
     "text": "Ein förmlicher Vernunftschluß ist nun Enunciation, wo etwas explicite ausgedrückt wird. Unter die ratiocinia cryptica gehört das Enthymem. [Z. B. alle Tiere sind sterblich, folglich auch alle Menschen. Der medius terminus fehlt.]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-105",
     "kind": "text",
     "aa": 776,
     "ms": [
      {
       "p": 119,
       "i": 0
      }
     ],
     "text": "Ein Vernunftschluß ist kryptisch per transmissionem praemissarum oder per omissionem praemissarum.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-106",
     "kind": "text",
     "aa": 776,
     "text": "Der Syllogismus contractus ist, wenn ich per medium terminuni schließe.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s24-107",
     "kind": "text",
     "aa": 776,
     "aaEnd": 777,
     "pages": [
      {
       "p": 777,
       "i": 197
      }
     ],
     "ms": [
      {
       "p": 120,
       "i": 671
      }
     ],
     "text": "Alle Vernunftschlüsse sollen in ihrer Conclusion Notwendigkeit geben. Wenn 2 Dinge, die unter derselben Gattung stehn in allen Stücken, die ich kenne, übereinkommen, schließe ich, dies sei bei den andern auch. Ich schließe von der Identität einiger Eigenschaften auf die Identität aller. Ein Schluß kann nie ein Erkenntnis aus empirischen Sätzen hervorbringen. [Die Schlüsse aus Induktion und Analogie sind nur Krücken der menschlichen Vernunft.] Nur aus allgemeinen Prämissen können wir schließen. Doch gibt uns kein Erfahrungssatz die universitatem simpliciter, sondern nur secundum quid, soweit wir es kennen. Der Schluß, | wenn ich | von einigen Prädikaten der Dinge auf alle übrigen schließe, so ist das ein Schluß nach der Analogie. Z. B. Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus sind dunkle Planeten. Nun schließe ich durch Induktion, daß die übrigen Planeten, die vielleicht noch entdeckt werden können, auch dunkel sein möchten. Ob paritatem rationis nennt man auch den Schluß nach der Induktion.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "dohna-s24-108",
     "kind": "text",
     "aa": 777,
     "text": "Exempla illustrant, non probant. Also gibts keinen Exempelschluß.",
     "ocrConf": 49
    },
    {
     "id": "dohna-s24-109",
     "kind": "text",
     "aa": 777,
     "text": "Ein Vernunftschluß, der in der {Materie) falsch ist, heißt Trugschluß, und wenn er in -(forma) falsch ist — Paralogism. Sophisma ist ein in forma falscher Schluß. [Das Wort Sophist hat nicht immer die schlimme Bedeutung Vernünftler gehabt.]",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-110",
     "kind": "text",
     "aa": 777,
     "text": "Man glaubt von vielen falschen Schlüssen, daß sie es in forma sind, aber sehr oft sind sie es in materia. Die alte Megarische Schule, vom Euclides dem Megarenser (nicht dem Geometer) gestiftet, gab sich sehr mit solchen Schlüssen ab, wendete viele artig.",
     "ocrConf": 47
    },
    {
     "id": "dohna-s24-111",
     "kind": "text",
     "aa": 777,
     "ms": [
      {
       "p": 121,
       "i": 0
      }
     ],
     "text": "Achilles, Cretensis, Acervus. [S. Daries, Logik.]",
     "ocrConf": 34
    },
    {
     "id": "dohna-s24-112",
     "kind": "text",
     "aa": 777,
     "text": "[Wenn du sagest, du lügest und indem du dieses sagest, die Wahrssheit redest, so redest du die Wahrheit, meiern du lügest — ist in materia falsch: indem du sagest, daß du lügest. —",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-113",
     "kind": "text",
     "aa": 777,
     "text": "Epimenides sagt : Alle Cretenser sind Lügner. Ipse vero est Cretensis — ergo ipse est mendax, also wäre auch seine Behauptung Lüge.]",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-114",
     "kind": "text",
     "aa": 777,
     "text": "Man tut immer mehr hinzu, wieviel Körner gehören zum Haufen ? Bei dem allmählichen Steigern gibts keinen Überschritt zu einer andern Gattung. [Zu Begriffen komparativer Größe gibts keinen spezifischen Unterschied an einem bestimmten Orte. Dies dient hauptsächlich in Moral für Defekten des medii {der Mediokrität) zu warnen. Bei Dingen, die spezifisch verschieden, hüte man sich einen Unterschied nach dem Grade zu machen.]",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "dohna-s24-115",
     "kind": "text",
     "aa": 777,
     "text": "Cornutus. Quicquid non amisisti, habes. Cornua non amisisti. Ergo habes.",
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-116",
     "kind": "text",
     "aa": 777,
     "text": "Calvus. Wieviel Haare weg zum Kahlkopf? — Ich kann nichts durch das mehr oder weniger definieren. —",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-117",
     "kind": "text",
     "aa": 778,
     "text": "Das Sophisrna heterozeteseos heißt, wenn es eine Streitfrage betrifft, Sophisma ignorationis elenehi. — Z. B. der Beweis von der Unsterblichkeit der Seele — man bewiese ein künftiges Leben.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s24-118",
     "kind": "text",
     "aa": 778,
     "text": "Ratiocinia können auch, sofern sie einander subordiniert sind, composita sein.",
     "ocrConf": 51
    },
    {
     "id": "dohna-s24-119",
     "kind": "text",
     "aa": 778,
     "text": "Die Ratiocinatio episyllogistica geschieht, wenn die Conchision eines Syllogismi die Prämisse eines gegebenen ist. Bei allen akademischen Disputationen \"wird per prosyllogismos geschlossen.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-120",
     "kind": "text",
     "aa": 778,
     "ms": [
      {
       "p": 122,
       "i": 0,
       "raw": "n%",
       "inferred": true
      }
     ],
     "text": "[Sorites, eine Reihe Vernunftschlüsse nach episyllogistischer Ordnung.] Noch sind hier einige Erklärungen hinzuzufügen:",
     "ocrConf": 33
    },
    {
     "id": "dohna-s24-121",
     "kind": "text",
     "aa": 778,
     "text": "Ein saltus in probando, wenn man einen Grund mit einer entfernten Folge verbindet, ohne einen Zwischensatz. — [Man kann legitime springen, wenn sich der Zwischensatz von selbst versteht. — ]",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-122",
     "kind": "text",
     "aa": 778,
     "text": "Circulus in probando, wenn man das, was bewiesen Averden soll, im Beweisgrunde als bekannt anführt.",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-123",
     "kind": "text",
     "aa": 778,
     "text": "Petitio principii — gratis annehmen. —",
     "ocrConf": 38
    },
    {
     "id": "dohna-s24-124",
     "kind": "text",
     "aa": 778,
     "text": "Von Beweisen, die fehlerhaft sind, sagt man, sie sagen zuviel oder zu wenig, jener ist Vitium, dieser defectus. Wer zuviel beweiset, beweiset gar nichts. Ebenso wie der, der weniger als alles Wahre sagt, nicht lügt, aber der, welcher mehr als das Wahre sagt, lügt gewiß.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s24-125",
     "kind": "text",
     "aa": 778,
     "ms": [
      {
       "p": 123,
       "i": 269
      }
     ],
     "text": "[Topik, die Wissenschaft, welche zeigt, wie man logische Örter determinieren soll.] Topik ist die Kunst, seine Begriffe unter gewisse Hauptbegriffe (Fächer) zu bringen | : generalia capita argumentorum aut genera in quibus reperiuntur. Eine besondere Sentenz nennt man locus topicus oder, da das tautologisch ist, locus communis. So nennt man einen Canon wie: jung gewohnt, alt getan. Locus grammaticus, z. B. Etymologie, locus logicus wie das Dictum de omni et nullo — Schluß a toto ad partes usw. Locus metaphysicus, ethicus ob ich etwas vom utili oder honesto ableite. Argumentum ab utili usw. Locus physicus — von den Zwecken der Natur. Von dem locus",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-126",
     "kind": "text",
     "aa": 778,
     "text": "geometricus mag wohl eigentlich die",
     "ocrConf": 56
    },
    {
     "id": "dohna-s24-127",
     "kind": "text",
     "aa": 778,
     "text": "Benennung hergekommen sein, d. h.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-128",
     "kind": "text",
     "aa": 778,
     "text": "wenn eine Aufgabe auf unendlich verschiedene Art aufgelöst werden kann.",
     "dehyphenated": 1,
     "ocrConf": 36
    },
    {
     "id": "dohna-s24-129",
     "kind": "text",
     "aa": 778,
     "text": "[Parallele, der locus geometricus der",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-130",
     "kind": "text",
     "aa": 778,
     "text": "gleichen Dreiecke auf einer Basis.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s24-131",
     "kind": "text",
     "aa": 778,
     "text": "Es ist aber unmöglich, daß sich die Philosophie hierin mit der Mathematik gleichstellen kann.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "dohna-s24-132",
     "kind": "text",
     "aa": 779,
     "text": "Wir gehen unsrer Einteilung nach zum letzten Teile der Logik, den man als einen kurzen Anhang ansehn kann :",
     "ocrConf": 32
    },
    {
     "id": "dohna-s24-133",
     "kind": "text",
     "aa": 779,
     "ms": [
      {
       "p": 124,
       "i": 0
      }
     ],
     "text": "II. Die Methodenlehre",
     "ocrConf": 32
    },
    {
     "id": "dohna-s24-134",
     "kind": "text",
     "aa": 779,
     "text": "Man nennt sie auch den praktischen Teil. Eigentlich gibt es aber keine praktische Logik. Denn sie ist nicht Organon, nur Canon. Dieser Anhang dient zur Kritik der Erkenntnis.",
     "ocrConf": 40
    },
    {
     "id": "dohna-s24-135",
     "kind": "text",
     "aa": 779,
     "text": "Die Methodenlehre ist die Vorschrift der Möglichkeit eines Systems des Verstandes- und Vernunfterkenntnisses. Sie ist also die Lehre von der Methode [Methodus — Art, wie ein Erkenntnis wissenschaftliche Form erlangen könne.] Die Methode ist Verbindung der Gedanken. — Wir können sie uns zweifach denken, als methodus logica [nicht bloß Art zu lehren, sondern Art zu denken], die könnte man nennen Manier, sie beruht gänzlich auf Regeln : die methodus aesthetica beruht lediglich auf Geschmack und läßt sich auf keine Regeln bringen.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s24-136",
     "kind": "text",
     "aa": 779,
     "ms": [
      {
       "p": 125,
       "i": 79,
       "raw": "1x5",
       "inferred": true
      }
     ],
     "text": "Das Wort methodus wird nicht hinlänglich durch Lehrart übersetzt. Denn es gibt ebenso eine Methode als Denk- |wie| als Lehrart.",
     "dehyphenated": 2,
     "ocrConf": 35
    }
   ]
  },
  {
   "id": "s25",
   "title": "[Vortrag",
   "titleSrc": "heading",
   "headings": [
    "[Vortrag"
   ],
   "provenance": "VI Logik Dohna-Wundlacken nach der Ausgabe von Kowalewski Logik nach den Vorlesungen des Herrn Prof. Kant im Sommerhalbenjahre 1792 Den 23ten April 1792",
   "blocks": [
    {
     "id": "dohna-s25-001",
     "kind": "heading",
     "aa": 779,
     "text": "[Vortrag"
    },
    {
     "id": "dohna-s25-002",
     "kind": "text",
     "aa": 779,
     "text": "1. systematisch,",
     "ocrConf": 43
    },
    {
     "id": "dohna-s25-003",
     "kind": "text",
     "aa": 779,
     "text": "2. fragmentarisch,",
     "ocrConf": 54
    },
    {
     "id": "dohna-s25-004",
     "kind": "text",
     "aa": 779,
     "text": "1. methodisch,",
     "ocrConf": 51
    },
    {
     "id": "dohna-s25-005",
     "kind": "text",
     "aa": 779,
     "text": "2. tumultuarisch.]",
     "ocrConf": 40
    },
    {
     "id": "dohna-s25-006",
     "kind": "text",
     "aa": 779,
     "text": "Nun kommen die verschiedenen Methoden ran.",
     "ocrConf": 53
    },
    {
     "id": "dohna-s25-007",
     "kind": "text",
     "aa": 779,
     "text": "Die erste Einteilung ist in synthetische und analytische. Die letztere ist die, da ich von den Folgen zu den Gründen, die erstere die, da ich von den Gründen zu den Folgen übergehe. [Eine Einteilung ist unsystematisch, wenn man aus ihr nicht absehn kann, warum nicht noch mehr Glieder der Einteilung sein könnten.] Im Philosophieren kann man synthetisch und analytisch verfahren. Die mathematische Lehrart ist synthetische Methode. Sie unterscheidet sich von allen andern, indem sie durch Anschauung dartut. Denkungsart ist immer was Moralisches. Doch könnte man sagen, Denkart wäre die methodus. Die Methode ist",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-008",
     "kind": "text",
     "aa": 779,
     "text": "1. populär — diese ist für den gemeinen Verstand — in concreto.",
     "ocrConf": 38
    },
    {
     "id": "dohna-s25-009",
     "kind": "text",
     "aa": 779,
     "text": "2. scholastisch — gehört für Wissenschaften — in abstracto.",
     "ocrConf": 33
    },
    {
     "id": "dohna-s25-010",
     "kind": "text",
     "aa": 779,
     "ms": [
      {
       "p": 126,
       "i": 65,
       "raw": "i?6",
       "inferred": true
      }
     ],
     "text": "Sich orientieren heißt sich in einen gewissen Standpunkt setzen, wo man die Dinge bequem in concreto f betrachten kann.",
     "ocrConf": 35
    },
    {
     "id": "dohna-s25-011",
     "kind": "text",
     "aa": 780,
     "text": "Methodus syllogistica. Viele haben sich sogar bemüht, die Mathematik so vorzutragen. — [Es ist aber doch im Grunde nur eine bloße Spitzfindigkeit.]",
     "dehyphenated": 1,
     "ocrConf": 35
    },
    {
     "id": "dohna-s25-012",
     "kind": "text",
     "aa": 780,
     "text": "Die Lehrart nach Tabellen — ein gewisser Baum, der viele Haupt -und Nebenäste hat. —",
     "ocrConf": 31
    },
    {
     "id": "dohna-s25-013",
     "kind": "text",
     "aa": 780,
     "text": "Wissenschaft ist eine Erkenntnis, die aus gewissen Prinzipien abgeleitet und im System zusammenhängt.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "dohna-s25-014",
     "kind": "text",
     "aa": 780,
     "text": "Die sokratische Lehrart — die platonische. —",
     "ocrConf": 32
    },
    {
     "id": "dohna-s25-015",
     "kind": "text",
     "aa": 780,
     "text": "Methodus vel est acroamatica [wo einer allein vorträgt, ohne zu fragen oder zu antworten] vel erotematica [in Frage und Antwort]. Diese ist entweder katechetisch oder dialogisch. Bei der ersten ist jederzeit der Fragende Lehrer, bei der zweiten der Befragte. Die akroamatische Methode ist auch die platonische.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "dohna-s25-016",
     "kind": "text",
     "aa": 780,
     "text": "Philosophische Materien sollten nicht katechetisch vorgetragen werden. Catechesis kann sein mechanisch oder judicieuse [durch Assoziation der Vorstellungen — das kultiviert den Verstand].",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "dohna-s25-017",
     "kind": "text",
     "aa": 780,
     "ms": [
      {
       "p": 127,
       "i": 0,
       "raw": "13*",
       "inferred": true
      }
     ],
     "text": "Kann man Religion katechetisch vortragen ? [sie wird dadurch schon zu Vorurteilen verleitet.] Eigentlich ist dies nicht die beste Methode, die dialogische wäre es. Der gemeine Mann kann einen zusammenhängenden Vortrag nicht wohl fassen. Die historischen Erkenntnisse können katechetisch vorgetragen werden. —",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "dohna-s25-018",
     "kind": "text",
     "aa": 780,
     "text": "Sokrates sagte: ich bin die Hebamme der Gedanken des andern. Er leitete alles aus ihren Begriffen, die sie nur nicht gehörig entwickehi konnten, ab. — [Diese Art der katechetischen Methode ist die einzige, welche in philosophischen Gegenständen angewandt werden darf. Sie ist im Grunde erotematische Katechese, wiewohl sie dialogisch genannt wird. — Katechismen sollten so eingerichtet sein — erst alles aus Vernunft ableiten und hierauf positive Religion — für den Menschen, wie er jetzt ist — bauen.]",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-019",
     "kind": "text",
     "aa": 780,
     "text": "Man kann tumultuarisch und methodisch denken. Das letztere, wenn wir ein Erkenntnis hervorbringen wollen, heißt meditieren. Aber ehe man methodisch denkt, muß man jederzeit auch tumultuarisch denken, umherschweifen, um alles aufzusuchen, was da einschlägt.",
     "ocrConf": 48
    },
    {
     "id": "dohna-s25-020",
     "kind": "text",
     "aa": 780,
     "text": "1. was will ich ? — [Viele, die Bücher schrieben, wußten es gar nicht oder doch dunkel. — ]",
     "ocrConf": 36
    },
    {
     "id": "dohna-s25-021",
     "kind": "text",
     "aa": 780,
     "text": "2. worauf kommt es dabei an.",
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-022",
     "kind": "text",
     "aa": 780,
     "ms": [
      {
       "p": 128,
       "i": 0
      }
     ],
     "text": "Diese 2 Punkte zeigen den judicieusen Mann an. —",
     "ocrConf": 40
    },
    {
     "id": "dohna-s25-023",
     "kind": "text",
     "aa": 780,
     "aaEnd": 781,
     "pages": [
      {
       "p": 781,
       "i": 123
      }
     ],
     "text": "[Homonyma, Ausdrücke, die vielerlei bedeuten, sind Beweise der Armut einer Sprache.] Bezeichnung der Erkenntnis, sprechen, schreiben — Aber alles, \"was der Autor hierüber sagt, gehört nicht zur Logik. — Termini technici muß man nicht ohne Not schmieden. Doch gehören sie bisweilen zur scholastischen Strenge. Man versteht eine Sache nicht eher, als man sie andern mitteilen kann. Wörter, womit man keinen deutlichen Begriff verbinden kann (z. B. entelechia) heißen termini inanes. Conceptus deceptor, betrügerischer Begriff, enthält gewöhnlich 2 Begriffe, die an und für sich deutlich — zusammen aber nicht verständlich sind. [| Begriffe | die da scheinen etwas zu bedeuten und am Ende nichts bedeuten, wie Apathie und Idiosynkrasis.] Ferner terminus familiaris [geläufiger Ausdruck] — solche, die im gemeinen Leben vorkommen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-024",
     "kind": "text",
     "aa": 781,
     "text": "[Logomachie, Streit durch Mißverstand der Wörter, Wortstreit. Ein solcher kann nicht lange anhalten. Man würde es längst entdeckt haben, so z. B. der Streit zwischen | Verteidigern der | Freiheit und Verteidigern der Naturnotwendigkeit.]",
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-025",
     "kind": "text",
     "aa": 781,
     "text": "Sehr oft glauben Leute erst dann sich zu verstehen, wenn sie gar am weitesten voneinander entfernt sind.",
     "ocrConf": 52
    },
    {
     "id": "dohna-s25-026",
     "kind": "text",
     "aa": 781,
     "ms": [
      {
       "p": 129,
       "i": 0,
       "raw": "is»",
       "inferred": true
      }
     ],
     "text": "Terminus ambiguus [zweideutig], vagus, ein Ausdruck, von dem man nicht recht herausbekommt, was man dabei denken soll — Glück — einen solchen kann man determinieren. Satz — Judicium verbis prolatum — nein — nur assertorische {Urteile sind) Sätze. [ — Propositio ist ein Judicium categoricum, also eine Art des judicii, und Judicium ist nicht gleichbedeutend mit propositio.]",
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-027",
     "kind": "text",
     "aa": 781,
     "text": "Syllogismus heißt Ratiocinium formale, nicht verbis prolatum. Mit Worten muß man es ja allemal ausdrücken, laut oder sachte. [Es kommt nur auf den Ausdruck der Begriffe {durch Denken oder Worte) an.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s25-028",
     "kind": "text",
     "aa": 781,
     "text": "[Was die Logik in Ansehung des Denkens ist, ist der Stil in Ansehung der Bezeichnung des Denkens. Logische Vollkommenheit des Stils ist die scholastische — ihr steht die ästhetische entgegen.]",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "dohna-s25-029",
     "kind": "text",
     "aa": 781,
     "text": "Die Reinigkeit, Eleganz des Stils heißt Purism, wenn man sie übertreibt. Concinnität. Zwitterwörter: f, Longimetrie, halbgriechisch, halblateinisch. Nicht Redseligkeit — ornatus — (keine Sonorität). Eine Rede — sermo — oratio, wenn sie feierlich ist. Wohlredenheit schickt sich für jede Schrift. Beredsamkeit, ars persuadendi, für den gegenwärtigen Augenblick Beifall gewinnen.",
     "dehyphenated": 4,
     "ocrConf": 47
    },
    {
     "id": "dohna-s25-030",
     "kind": "text",
     "aa": 781,
     "ms": [
      {
       "p": 130,
       "i": 0
      }
     ],
     "text": "Bei dem gelehrten Vortrage — Descendenz und Coascendenz. [Beredtheit, copia von Wörtern, Wohlredenheit — Kunst diese copia anzuwenden. Beredsamkeit, die Fertigkeit mit dieser Kunst andre nach seinen Absichten zu leiten, das Falsche als wahr vorzuspiegeln.]",
     "ocrConf": 47
    },
    {
     "id": "dohna-s25-031",
     "kind": "text",
     "aa": 782,
     "text": "Predigten müssen allgemein verständlich sein. Es muß darin eine Kraft herrschen, die auf jede Seele wirkt. Sie kommen ja aus einem gemeinschaftlichen Zweck zusammen. A. Hermann Francke sagt, die Predigten müßten so beschaffen sein, daß wenn ein Mensch nur eine davon gehört, er eine vollkommene Moral findet. Condescendenz und Coascendenz ist eine große Gabe, zu unterscheiden, zu wählen, was dieser und was jener Zuhörer braucht. Dazu gehört viel Genie, jemanden, der wenig fassen kann, wenig zu lehren. In einem Auditorio sowie bei dem Schreiben eines Buchs muß man coascendieren, lieber für die größern Fähigkeiten sorgen, aus denen doch einmal was wird.",
     "ocrConf": 46
    },
    {
     "id": "dohna-s25-032",
     "kind": "text",
     "aa": 782,
     "ms": [
      {
       "p": 131,
       "i": 0
      }
     ],
     "text": "Wir haben zweierlei Arten von Vortrag",
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-033",
     "kind": "text",
     "aa": 782,
     "text": "1. didaktisch und 2. polemisch. Der erste ist belehrend (dogmatisch), der zweite bloß von Irrtümern befreiend.",
     "ocrConf": 41
    },
    {
     "id": "dohna-s25-034",
     "kind": "text",
     "aa": 782,
     "text": "Wir refutieren einen andern, wenn wir seine Behauptung Aviderlegen. {antworten und beantworten — verschieden.) Dem hegt ob zu beweisen, der da sagt, daß der andere Unrecht habe.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s25-035",
     "kind": "text",
     "aa": 782,
     "text": "Bei jedem Streit haben wir thesin und antithesin — thesis {status) controversiae. Die Bestimmung der Quaestion [diese hat öfters große Schwierigkeiten] heißt forma controversiae. Hier entdeckt man oft eine Logomachie — Wortstreit. Aber eine Logomachie pflegt niemals lange zu dauren. —",
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-036",
     "kind": "text",
     "aa": 782,
     "text": "Die Argumentationen werden eingeteilt in",
     "ocrConf": 69
    },
    {
     "id": "dohna-s25-037",
     "kind": "text",
     "aa": 782,
     "text": "1. argumentationes koct ' aAnOeiccv, aus objektiven,",
     "ocrConf": 28
    },
    {
     "id": "dohna-s25-038",
     "kind": "text",
     "aa": 782,
     "text": "2. argumentationes Kcnr5 avöpcoiTov, aus subjektiven Gründen [d. h. aus den Behauptungen des Subjekts, so wie z. B. im Evangelium, daß Geister sind, weil sie Gespenster glaubten. ■ — ]",
     "ocrConf": 36
    },
    {
     "id": "dohna-s25-039",
     "kind": "text",
     "aa": 782,
     "ms": [
      {
       "p": 132,
       "i": 0
      }
     ],
     "text": "Wette ist Vereinigung zur Strafe für den, der gefehlt. Die argumentatio ad crumenam ist ganz billig. Das argumentum a verecundia, da sagte der Mönch Abelard : Si omnes patres sie — ego non sie. — Instanz, ein besondrer Satz, der einem allgemeinen widerspricht. Retorsion, wenn einer umgekehrt beweiset, nämhch aus meinem bestrittenen Satz eine Folge macht, die den Gegner trifft. —",
     "dehyphenated": 4,
     "ocrConf": 41
    },
    {
     "id": "dohna-s25-040",
     "kind": "text",
     "aa": 782,
     "text": "Consequentiarius, wer aus den theoretischen Behauptungen eines andern Folgen zieht, die Gefahr bringen. [Consequentiarius ist der, welcher aus meinen Sätzen Folgerungen zieht, welche der Person jemandes nachteilig sind.—]",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-041",
     "kind": "text",
     "aa": 782,
     "aaEnd": 783,
     "pages": [
      {
       "p": 783,
       "i": 194
      }
     ],
     "ms": [
      {
       "p": 133,
       "i": 219
      }
     ],
     "text": "Apologie ist Verteidigung gegen einen Konsequenzenmacher. Eine förmliche Disputation — da sind die acteurs der Respondent und der Opponent. Um dem Respondenten es gleich faßlich zu machen, wird in Schlüssen gesprochen. Die Regel enthält hauptsächlich dies, daß die Conclusion seines Arguments geradezu der thesis des Respondenten widerspricht — per prosyllogismos. Der Praeses sucht als Assistent des Respondenten den Streit auszugleichen. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "dohna-s25-042",
     "kind": "text",
     "aa": 783,
     "text": "Pragmatisch heißt das, was klug macht. Die Beurteilung der Wirkungen aus ihren Ursachen.",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "dohna-s25-043",
     "kind": "text",
     "aa": 783,
     "text": "Compilator heißt derjenige, der aus vielen Büchern eins macht. [Es ist ungleich schwerer, sich kurz und zusammenhängend auszudrücken, z. B. in einem Brief — Handbuch — als weitläuftig.] Epitomator, der aus einem großen ein kleines macht. [Er muß Kenner sein, um auch im Auszuge nicht den Geist des Werkes zu verletzen.] Plagiarius, ein gelehrter Dieb, der dem andern seine Gedanken stiehlt.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-044",
     "kind": "text",
     "aa": 783,
     "text": "Der Autor redet zuletzt vom Charakter des Gelehrten. Ein Naturalist ist der, Avelcher sich Erkenntnisse erwirbt, die kein System ausmachen. Metaphysik und Moral sind die Steckenpferde für solche Leute. [Man kann in allen Fächern Naturalisten haben. ■ — ]",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "dohna-s25-045",
     "kind": "text",
     "aa": 783,
     "ms": [
      {
       "p": 134,
       "i": 0
      }
     ],
     "text": "Autodidactos, der ohne Lehrer Wissenschaft hat [wie Lambert], der entweder alles aus sich selbst geschöpft oder doch wenigstens bei Lesung wissenschaftlicher Bücher sein eigner Erklärer gewesen.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "dohna-s25-046",
     "kind": "text",
     "aa": 783,
     "text": "Es gibt eigentlich in keiner Sprache Synonymen. Denn als man die Worte erfand, wollte man gewiß mit jedem einen besondern Begriff bezeichnen, den man auch bei genauerer Untersuchung des Wortes gewiß allzeit auffinden wird. Z. B. Roß (Reiter), Pferd (Genus), Gaul, Mähre (Arbeit), (Kobbel, davon kömmt caballus), jedes führt einen besondern Begriff mit sich.",
     "ocrConf": 45
    },
    {
     "id": "dohna-s25-047",
     "kind": "text",
     "aa": 783,
     "text": "Wir haben vorhin bei Aufzählung der Methoden die mathematische vergessen. Diese ist keine andre, als die synthetische, welche von den ersten Gründen eines Erkenntnisses ausgeht und bei den letzten Folgen aufhört. Das erste bei dieser Methode ist nun die Definition, dann Axiom, Theorem, Problem usw.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "dohna-s25-048",
     "kind": "text",
     "aa": 783,
     "text": "[Scholion, Corollar. Wolff hat die Philosophie nach dieser Methode vorgetragen, welches sich nicht tun läßt.]",
     "ocrConf": 46
    },
    {
     "id": "dohna-s25-049",
     "kind": "text",
     "aa": 783,
     "ms": [
      {
       "p": 135,
       "i": 0
      }
     ],
     "text": "Anmerk. Zum Schluß fügte Kant noch einiges hinzu über das Meditieren, methodische Denken. Er sagte nämlich, es käme dabei (wie schon oben erwähnt) hauptsächlich auf die beiden Stücke an:",
     "ocrConf": 42
    },
    {
     "id": "dohna-s25-050",
     "kind": "text",
     "aa": 783,
     "text": "1. genau zu wissen, was man eigentlich will, und hernach",
     "ocrConf": 37
    },
    {
     "id": "dohna-s25-051",
     "kind": "text",
     "aa": 783,
     "aaEnd": 784,
     "pages": [
      {
       "p": 784,
       "i": 136
      }
     ],
     "text": "2. worauf es dabei ankommt. Nun führte er z. B. an, wieviel Mühe es ihm gemacht, da er mit dem Gedanken, die Kritik der reinen Vernunft zu schreiben, umging, zu wissen, was er eigentlich wolle. Zuletzt habe er gefunden, alles ließe sich in die Frage fassen: Sind synthetische Sätze a priori möglich ? — Ja. Aber es kommt darauf an, daß wir ihnen korrespondierende Anschauung geben können. Wenn dies aber nicht geschehn kann, haben sie diese Eigenschaft nicht. Hieraus ersieht man, wie sehr das Meditieren durch diese Methode erleichtert wird.",
     "joined": [
      "layout"
     ],
     "ocrConf": 41
    },
    {
     "id": "dohna-s25-052",
     "kind": "text",
     "aa": 784,
     "text": "[NB. Dies geschah im Repetitorio Sonnabends, das Collegium war vorher schon Freitags geschlossen. — ]",
     "ocrConf": 41
    },
    {
     "id": "dohna-s25-053",
     "kind": "text",
     "aa": 784,
     "text": "Ende von Kants Logik,",
     "ocrConf": 50
    },
    {
     "id": "dohna-s25-054",
     "kind": "text",
     "aa": 784,
     "text": "Sonnabend, den . . .sten September 1792.",
     "ocrConf": 48
    }
   ]
  }
 ]
};
