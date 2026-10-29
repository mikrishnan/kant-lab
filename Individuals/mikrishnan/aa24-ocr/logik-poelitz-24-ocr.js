/* ─────────────────────────────────────────────────────────────────────────────
   Logik Pölitz, Academy Edition XXIV (1780–82) — AA 24:497–602
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

const LOGIK_POELITZ = {
 "meta": {
  "work": "Logik Pölitz",
  "label": "IV. Logik Pölitz",
  "volume": 24,
  "date": "1780–82",
  "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
  "source": "OCR of the printed AA XXIV (Internet Archive item kantsgesammeltes242imma), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   497,
   602
  ],
  "scan": {
   "item": "kantsgesammeltes242imma",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + -487",
   "note": "page image of AA 24:P is SCAN_URL with n = P + (-487)"
  },
  "counts": {
   "sections": 31,
   "blocks": 367,
   "pages": 101,
   "words": 38242,
   "joinedLayout": 70,
   "dehyphenated": 658,
   "meanOcrConf": 44
  },
  "contentsRefer": "AA XXIV pages — the volume's Inhaltsverzeichnis to this transcript"
 },
 "front": [
  "IV",
  "Logik Pölitz",
  "MAR 19 1968",
  "Logik und Metaphysik",
  "von Kant",
  "Ein Collegium anno 1789",
  "nachgeschrieben"
 ],
 "contents": [
  {
   "label": "Logik",
   "pages": "502"
  },
  {
   "label": "Benennung und Geschichte der Logik",
   "pages": "509"
  },
  {
   "label": "Abhandelung der Logik",
   "pages": "510—602"
  },
  {
   "label": "Von der Erkenntniß",
   "pages": "510"
  },
  {
   "label": "Von Vollkommenheit der Erkenntniß überhaupt",
   "pages": "516"
  },
  {
   "label": "Vom Begrif der Wissenschaft",
   "pages": "519"
  },
  {
   "label": "Vom Horizont der Erkenntniß",
   "pages": "521"
  },
  {
   "label": "Von der Wahrheit der gelehrten Erkenntniß",
   "pages": "525"
  },
  {
   "label": "Vom System",
   "pages": "530"
  },
  {
   "label": "Vom vermeidlichen und unvermeidlichen Irthum",
   "pages": "531"
  },
  {
   "label": "Von der Klarheit der Erkenntniße",
   "pages": "532"
  },
  {
   "label": "Von wichtigen und unwichtigen Merkmalen",
   "pages": "534"
  },
  {
   "label": "Von der total und partial Klarheit",
   "pages": "537"
  },
  {
   "label": "Von der Lebhaftigkeit",
   "pages": "537"
  },
  {
   "label": "Synthesis und Analysis",
   "pages": "539"
  },
  {
   "label": "Von der totalen und partialen Deutlichkeit",
   "pages": "540"
  },
  {
   "label": "Von den conipleten und adaequaten Begriffen",
   "pages": "540"
  },
  {
   "label": "Von der Gewißheit der Erkenntniße",
   "pages": "541"
  },
  {
   "label": "De suspensione judicii",
   "pages": "545"
  },
  {
   "label": "Von den Vorurteilen",
   "pages": "547"
  },
  {
   "label": "Vom Ansehn der Person",
   "pages": "550"
  },
  {
   "label": "Vom Ansehn der Menge",
   "pages": "550"
  },
  {
   "label": "Von der wahrscheinlichen Erkenntniß",
   "pages": "554"
  },
  {
   "label": "Von den Hypothesen",
   "pages": "558"
  },
  {
   "label": "Von der Gewißheit",
   "pages": "560"
  },
  {
   "label": "Von Beweisen und zwar von den apodiktischen",
   "pages": "561"
  },
  {
   "label": "Vom historischen Glauben",
   "pages": "561"
  },
  {
   "label": "Von Vereinbarung der Vernunft und Erfahrung",
   "pages": "563"
  },
  {
   "label": "Vom praktischen Erkenntniß",
   "pages": "564"
  },
  {
   "label": "Von den Begriffen",
   "pages": "565"
  },
  {
   "label": "Von den Definitionen",
   "pages": "570"
  },
  {
   "label": "Von der Description",
   "pages": "574"
  },
  {
   "label": "Von der logischen Einteilung",
   "pages": "576"
  },
  {
   "label": "Von den Urteilen",
   "pages": "577"
  },
  {
   "label": "Von unmittelbar gewißen Urtheilen",
   "pages": "581"
  },
  {
   "label": "Von den Teilen eines Systems",
   "pages": "582"
  },
  {
   "label": "Von Schlüßen seu de consequentiis immediatis",
   "pages": "583"
  },
  {
   "label": "Von Vernunftschlüßen",
   "pages": "586"
  },
  {
   "label": "Regeln der categorischen Schlüße",
   "pages": "591"
  },
  {
   "label": "Regeln der Vernunftsclilüße",
   "pages": "591"
  },
  {
   "label": "Kunst und Wissenschaft",
   "pages": "599"
  },
  {
   "label": "Von der Lehrart",
   "pages": "599"
  }
 ],
 "sections": [
  {
   "id": "s01",
   "title": "Logik Pölitz",
   "titleSrc": "none",
   "headings": [],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s01-001",
     "kind": "text",
     "aa": 502,
     "ms": [
      {
       "p": 1,
       "i": 0,
       "raw": "I",
       "inferred": true
      }
     ],
     "text": "Logik.",
     "ocrConf": 65
    },
    {
     "id": "poelitz-s01-002",
     "kind": "text",
     "aa": 502,
     "text": "Alles geschiehet nach Regeln, so wol in der Körper- Welt als in der Menschheit. Die Ausübung unserer Kräfte geschieht auch nach gewißen Regeln und wir verfahren nach denselben ob wir gleich uns derselben nicht bewust sind, wir gelangen aber zur Erkentniß derselben durch Versuche und durch den Gebrauch. Auf die Art können wir durch Probieren vieles von uns selbsten lernen. Almählich finden wir durch den längern Gebrauch unserer Kräfte diese Regel geläufiger und endlich in einem solchen Grade, daß es Mühe kostet sie zu abstrahiren — z. E. Grammatik ist die Form einer Sprache überhaupt. Man spricht aber auch, ohne Grammatik zu lernen d. i. man spricht nach Regeln deren man sich nicht bewust ist. Der Verstand handelt auch nach Regeln, die wir untersuchen können. Er ist das Vermögen zu denken, wir können also nicht denken als nach gewißen Regeln — die Regeln selbst können wir wieder selbst denken ohne ihre Untersuchung d. i. in abstracto — denken heist eigentlich nur die Vorstellungen der Sinne unter Regeln bringen. Daher definirt man auch den Verstand durch das Vermögen der Regeln. Der Mensch gaft oft Gegenstände an, aber er denkt nicht d. i. er bringt seine Vorstellungen nicht unter Regeln. Verstand heißt also auch das Vermögen Vorstelhingen der Sinnen unter Regeln zu bringen. Da also unser Verstand immer nach Regeln handelt: so ists wohl werth, daß wir uns um die Kentniß derselben bekümmern, ob wir uns gleich vorher schon unseres Verstandes bedient. Der Verstand ist das Vermögen der Regeln (so wie die Sinne das Vermögen der Anschauungen sind) und er ist begierig Regeln zu suchen und befriedigt wenn er sie gefunden. Da er nun die Quelle der Regeln ist, so wird gefragt, nach welchen Regeln der Verstand selbsten verfährt. Von diesem folgendes",
     "dehyphenated": 4,
     "ocrConf": 38
    },
    {
     "id": "poelitz-s01-003",
     "kind": "text",
     "aa": 502,
     "aaEnd": 503,
     "pages": [
      {
       "p": 503,
       "i": 451
      }
     ],
     "ms": [
      {
       "p": 2,
       "i": 274,
       "raw": "%",
       "inferred": true
      }
     ],
     "text": "Alle Regeln sind entweder not h wendig ohne welche gar kein richtiger Verstandes Gebrauch möglich ist, oder zufällig ohne welche kein bestirnter Verstandes Gebrauch Statt findet. Z. B. Die Regeln des Verstandes Gebrauchs in der Mathematik, Metaphysik. Moral, etc. sind zufällige Regeln aber die, ohne die man nicht denken würde, sind nothwendig. Die zufälligen Regeln die von einem bestirnten Object der Erklärung abhängen, sind so vielfältig als die Objecte. Weil aber bey jedem Denken Verstand ist, der nach Regeln handelt: so muß es Regeln des Denkens geben, die allem Denken ohn Unterscheid der Objecte gemein sind, und die jedem Verstandsgebrauch zum Grunde liegen, ohne die er gar nicht möglich ist; und dieses sind die noth wendigen Sie müßen also bloß die Form des Denkens enthalten.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 39
    },
    {
     "id": "poelitz-s01-004",
     "kind": "text",
     "aa": 503,
     "text": "In allem unserm Denken sind 2 Stücke: Materie und Form. —",
     "ocrConf": 32
    },
    {
     "id": "poelitz-s01-005",
     "kind": "text",
     "aa": 503,
     "aaEnd": 504,
     "pages": [
      {
       "p": 504,
       "i": 2155
      }
     ],
     "ms": [
      {
       "p": 3,
       "i": 1421
      }
     ],
     "text": "Einige Erkenntniße sind der Materie nach unterschieden, der Form nach einerley. Z.B. Physick und Psychologie sind beyde empirisch, demnach ist eine Wißenschaft die die algemeinen Regeln enthält blos eine Wißenschaft der Form des Erkennens unsers Verstandes, oder des Denkens wo man von allen Objecten abstrahirt und eine solche Wißenschaft nennen wir eine Logic. — Das Wort Aoyos von dem das Wort herkomt hat verschiedene Bedeutung hier aber: Verstand und Vernunft Also wird die Logic eine Wißenschaft seyn von der Form des Verstands und Vernunft überhaupt. Die algemeine Logic muß von allen Objecten abstrahiren. Z. B. In aller Erkenntniß sind Begriffe Die Logic zeigt also nur die Form derselben ohne sich um die Materie zu bekümmern. — Wir haben also den Anschlag zu einer Wißenschaft die die Regeln der Form des Verstandes enthält ohne Unterschied der Objecte und eine solche Wißenschaft geht auf alles Denken und ist eine Grundlage zu andern Wißenschaften. Eine Wißenschaft die zu andern vorbereitet heißt Propädevtik: Logik ist also die Propädevtik zum Gebrauch unseres Verstandes. Der Inbegrif der Regeln in concreto, die wir in abstracto nicht kennen, soll die natürliche Logik seyn, die künstliche trägt diese Regeln ausführlich vor. Diese Eintheilung der Logic in die natürliche und künstliche ist nicht gut, die Logik soll eine Wißenschaft seyn, eine Wißenschafft aber ist ein Inbegrif von Regeln in abstracto und sezt also ein artifizielles Erkenntniß voraus. — Wir müßen unterscheiden die Logik des gemeinen Verstands von der Logik des spekulativen Verstands. Verstand ist überhaupt das Vermögen der Regeln, die Regeln können wir entweder in concreto oder in abstracto nehmen. Der gemeine Verstand, intellectus communis ist das Vermögen der Regeln in concreto, der gemeine Verstand in so fern er ein richtiger ist, heißt ein gesunder Verstand, er ist unterschieden von dem vulgaris, vulgaris ist der, den jeder Mensch hat, communis aber, der von einem jeden gefordert werden kann, nehmlich, daß er richtig urteile. — Der spekulative Verstand ist das Vermögen der Regeln in abstracto. Diesen hat nur ein Gelehrter, und er kann von keinem, der sich nicht auf Wißenschaften legt, gefordert werden. Die Regeln der Logik sind 2fach",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s01-006",
     "kind": "text",
     "aa": 504,
     "text": "1.) wie der Verstand denkt und",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s01-007",
     "kind": "text",
     "aa": 504,
     "aaEnd": 505,
     "pages": [
      {
       "p": 505,
       "i": 2404
      }
     ],
     "ms": [
      {
       "p": 4,
       "i": 1942
      }
     ],
     "text": "2.) wie er denken solte, und dieses 2te lehrt uns die Logic. Die Logik lehrt also den richtigen Verstandesgebrauch d. i. den mit sich selbst übereinstimmenden Gebrauch des Verstandes. — Richtiger Verstand ist der, der in seinem Gebrauch durchgängig mit sich selbst zusammen stimmt, die Regeln die er dann befolgt sind richtig. Ist der Verstand in seinem Gebrauch oft mit sich im Wiederstreit: so ist die Regel falsch, das ist das einzige Criterium a priori. Die subjectiven Regeln würden die Geseze seyn, nach welchen wir uns unseres Verstandes bedienen. Die objective Regeln sind die, nach welchen wir uns unsers Verstandes bedienen solten. Die objectiven und subjectiven Regeln sind in der Logik wenn wir vom Inhalt abstrahiren einerley. Alles empirische muß aus der Logüi weggelaßen werden und nichts hereinkommen als was a priori erkannt werden kann. Man kann es aber doch als Erklärung beybehalten. Wolte man alles Empirische weglaßen: so würde die Logik zu kurz werden. Man muß es aber absezen und nicht unter die eigentliche Glieder der Logik sezen. Z. B. Das ganze Kapitel von den Vorurtheilen müßte wegfallen weü es aus der Psychologie entlehnt ist, die Psychologie aber betrachtet die Phänomene der menschlichen Seele, diese aber sind aus Erfahrung genommen. Alle Erkenntniß ist entweder a priori ohnabhängig von aller Erfahrung, Z.B. 2 X 2 = 4, oder a posteriori empirisch deren Quelle in der Erfahrung liegt. Diese ist zufällig und ihre Regeln sind nicht noth wendig. Hieraus fließt also der vorige Saz, die Logik muß gar keine empirische Principien haben, denn weil in der Logic von allem Inhalt abstrahirt wird : so abstrahirt man auch zugleich von aller Art wie uns die Gegenstände durch die Erfahrung gegeben worden, und eine solche Wißenschaft nennt man rationalis zum Unterscheid der empirischen. Eine Logic wird also der Quelle nach rationalis seyn müßen. Logik ist aus der Vernunft hergelehnt, und hat zu ihrem Object die Vernunft. Man definirt die Logik so: rationalis durch Scientia, hierin liegt 2erle}^, daß sie nicht aus der Erfahrung hergenommen ist, daß sie die Vernunft zum Object hat. Nun fragt sich was der der Zweck dieser Wißenschaft sey. — Der Zweck einer Wißenschaft ist 2fach 1.) unser Erkentniß zu erweitern 2.) es zu erläutern und zu berichtigen. Die algemeine Logik kan keine Erweiterung aber wol die Berichtigung unsres Erkenntnißes seyn — Eine Wißenschaft die apriori Prinzipien heranträgt, wornach die Kräfte nnsers Verstandes richtig gebraucht werden können, ist Canon. Canon ist eine auf der reinen Vernunft beruhende Vorschrift ohne welche kein richtiger Verstandes Gebrauch möglich ist. Die Logik ist also auch ein Canon des Verstands und der Vernunft. Außer der Berichtigung unsers Erkentniß wollen wir auch eine Erweiterung deßelben haben und wenn wir dieses der Logic anmuthen: so fordern wir etwas, was wieder ihre Natur streitet. Eine Wißenschaft die der Grund der Erweiterung unsers Erkentniß ist heißt Organon z. B. Mathematik.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s01-008",
     "kind": "text",
     "aa": 505,
     "text": "Die Logik als Canon ist eine Wißenschaft, die Logik aber als Organon ist eine Kunst. Die Logik ist aber kein Organon, denn sonst müste es auch eine praktische Logik geben ; sie ist nur ein Canon der Beurteilung. Daß die Logik nicht in die theoretische und praktische kann eingeteilt werden, wird noch gezeigt werden.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s01-009",
     "kind": "text",
     "aa": 505,
     "text": "Jezt können wir eine rechte Definition von der Logik geben nehmlich Logica est regularum vniversalium vsus intellectus et rationis. Aesthetik enthält die Grundsäze des Geschmacks. Logik und Aesthetik würden sich also schon durch die Verschiedenheit der Erkenntniß Kräfte unterscheiden, die in den Disciplinen vorgetragen werden. Das Object der Logik ist das obere Erkentniß vermögen. Die Definition der Logik als scientia rationalis ist 2deutig, sie ist rational der Form nach, darin ist sie aber von den andern noch gar nicht unterschieden, die eigentliche Ursache der Definition liegt darin, daß die Vernunft ihr Object ist und zwar nach den algemeinen Gesezen des Gebrauchs derselben. Dieser Ausdruck ist also nicht paslich. Aus der vorhin gegebenen Definition wollen wir jezt die übrigen Eigenschaften der Logik herleiten nehmlich 1.) wenn sie eine Wißenschaft von den algemeinen Gesezen seyn soll:",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s01-010",
     "kind": "text",
     "aa": 505,
     "text": "so muß sie es auch von den nothwendigen seyn; denn wenn sie",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s01-011",
     "kind": "text",
     "aa": 505,
     "text": "algemein sind; so müßen sie von jedem Verstände ohne Unterschied der Objecte gelten. 2.) Eine Wißenschaft die auf Prinzipien a priori beruht ist eine demonstrative Wißenschaft. Logic ist also eine demonstrative Wißenschaft. Also ist alles was sie vorträgt eines strengen Beweises fähig.",
     "dehyphenated": 3,
     "ocrConf": 48
    },
    {
     "id": "poelitz-s01-012",
     "kind": "text",
     "aa": 505,
     "text": "Die Wahrheit einer Sache aus der Erfahrung einzusehn ist noch",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s01-013",
     "kind": "text",
     "aa": 505,
     "ms": [
      {
       "p": 5,
       "i": 33
      }
     ],
     "text": "nicht demonstriren, denn alsdenn sehe ich nicht die Nothwendigkeit ein.",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s01-014",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "3.)Alle",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "Regeln die nothwendig sind müßen a priori abgeleitet werden,",
     "ocrConf": 37
    },
    {
     "id": "poelitz-s01-015",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "denn",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "die, die aus der Erfahrung genommen sind, sind beständig zufällig, weil die Erfahrung lehrt wie sie sind und nicht wie sie",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s01-016",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "seyn",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "müßen.",
     "ocrConf": 80
    },
    {
     "id": "poelitz-s01-017",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "4.)Logic",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "ist eine Doktrin. — Doktrin ist eine Wißenschaft die aus Principien a priori erwiesen werden kann. Empirischen Wißenschaften kann dieser Name nicht beygelegt werden. Jede Doctrin",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s01-018",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "ist",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 163,
       "raw": "5.)",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "dogmatisch d. i. sie kann a priori erwiesen werden. Aesthetik kann nicht Doktrin seyn, denn sie kann nie eine Wißenschaft seyn. Home nennt sie daher beßer Kritik. Da sie aber die Richtschnur unsers Verstandes enthält, oder die Regeln der Beurtheilung des rechten Gebrauchs des Verstandes und der Vernunft: so heißt sie auch Canon. Nach jedem Canon kann ich beurtheilen ob das Verfahren richtig sey: Die Logic ist also das Principium der Dijudication des Verstandesgebrauchs aber nur der Richtigkeit der Form nach. Die Logic ist aber kein Organon, wir werden nur durch die Logik der Regeln, nach welchen wir schon lange gedacht, uns bewust. Sie ist ein Kanon der nachher zur",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "poelitz-s01-019",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 113,
       "raw": "heit",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "Kritik dient ob das was gedacht ist richtig ist. — Die Logik wird eingetheilt in die Analytik oder Logik der Wahrund Dialektik oder Logik des Scheins. (Unser Autor teilt sie so",
     "dehyphenated": 1,
     "ocrConf": 38
    },
    {
     "id": "poelitz-s01-020",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "ein,",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "wir finden, daß schon Aristoteles sie so eingeteilt habe.) Der",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s01-021",
     "kind": "text",
     "aa": 506,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "erste",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "Theil entdeckt alle Handlungen der Vernunft die wir beym Denken ausüben durch ihre Zergliederung, sie enthält die nothwendige Regeln aller Wahrheit. Sie heißt die Logik der Wahrheit weil ohne sie unser Erkenntniß ohnangesehn der Objecte auch in sich selbst unwahr ist Sie ist also nur ein Kanon der Beurtheilung. Wolte sie jemand zum Organon brauchen, so wäre dieses schon Dialectik. Sie ist ein Mißbrauch der Analytik, so fern wir sie zum Organon brauchen wollen. Der Kanon scheint Organon zu seyn, ist es aber nicht. — Dialektik wurde in den vorigen Zeiten mit vielem Fleis studiert ; sie suchte Dinge dem Schein nach zu bestätigen, und trug also falsche Grundsäze unter dem Schein der Wahrheit vor. — (Die Dialektiker wurden auch sonsten Sophisten genennet, Sophistae, davon auch das Wort Sophisma ein Trugschluß herkommt.) Dialektiker waren bey den Griechen die Sachwalter und Redner, die eine Sache mit eben solchen Gründen beweisen",
     "dehyphenated": 2,
     "ocrConf": 39
    },
    {
     "id": "poelitz-s01-022",
     "kind": "text",
     "aa": 506,
     "text": "und stürzen konten, und dadurch das Volle hintergangen. Nichts ist",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s01-023",
     "kind": "text",
     "aa": 506,
     "aaEnd": 508,
     "pages": [
      {
       "p": 507,
       "i": 66
      },
      {
       "p": 508,
       "i": 2673
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 76,
       "raw": "«",
       "unresolved": true
      },
      {
       "p": null,
       "i": 2052,
       "raw": "T-U",
       "unresolved": true
      },
      {
       "p": 18,
       "i": 4373
      }
     ],
     "text": "einem Philosophen unanständiger als diese Wißenschaft. Wir werden Dialektik tractiren als die Kunst den falschen Schein von der Wahrheit zu unterscheiden. — Wir haben also 2 Theile in der Logik nehmlich Analytik die die formalen Kriterien der Wahrheit vorträgt, und Dialektik die die Merkmahle enthalten wird, wodurch wir erkennen, ob etwas mit den formalen Kriterien der Wahrheit nicht übereinstimmt, wenn es gleich würklich mit denselben übereinzustimmen scheint. — Wie können wir einen Schein erkünsteln und warum muß die Logik Gegenmittel haben ? Dies komt daher, weil wir in unsern Urtheilen und Schlüßen dem Schein sehr unterworfen sind. Der logische Schein in der Form der Erkenntniß entspringt aus gewißen Mitteln zur Wahrheit, wodurch man aber oft nur einen Schein der Wahrheit herausbringt. Z. B. Wir werden oft getäuscht wenn wir glauben die Uebereinstimmung des Erkenntnißes mit der logischen Form des Denkens sey ein schon zureichendes Kennzeichen der Wahrheit. Dies istesaber nicht denn die Uebereinstimmung mit den logischen Regeln ist conditio sine qua non sie kann nicht fehlen, aber allein ist sie noch nicht zureichend weil sie von allem Inhalt abstrahirt. So wie es eine rednerische Dialectik giebt nehmlich eine Menge Wörter in Form einer Rede zu sagen wo aber kein Sinn und Verstand ist ; so giebt s auch eine logische, die Sprache des Verstands zu führen, wenn derselbe gleich von allem Inhalt leer ist. Der Autor und andre meinen Dialektik sey die Logik der Wahrscheinlichkeit, wobei aber ein Unterschied zum Schein ist. — Wahrscheinlichkeit ist eine partiale Wahrheit. Schein ist der Wahrheit entgegen gesezt aber nicht Wahrscheinlichkeit. — Wahrscheinlich ist ein Urtheil über die Wahrheit aus gewißen aber unzureichenden Gründen und das Wahrscheinliche gehört eben so zur Wahrheit wie das Unzureichende zum Zureichenden. Denn wenn zum Wahrscheinlichen noch mehr Gründe hinzukommen, so wird es wahr — Die Logik kann eingetheilt werden in die reine und applicirte. Die reine Logik betrachtet wie der Verstand handeln soll. Die applizierte Logik sollte eigentlich nicht Logik heißen, denn sie ist eine Psychologie, wo wir die Phänomene des Verstandes d. i. wie er zu handeln pflegt, betrachten, nicht wie er handeln soll. Man sagt die Technik oder die Art eine Wißenschaft zu bauen, soll in der applizirten Logik vorgetragen werden, dies ist aber vergeblich ja gar schädlich, denn man kann nicht bauen ohne Materialien. Die Technik muß bey jeder Wißenschaft vorgetragen werden. — ■ Man theilt die Logik auch ein in die theoretische und practische. Logik aber als Kanon kann nicht practisch seyn, weil die Logik von allem Inhalt abstrahirt. Eine practische Logik sezt zum voraus eine gewiße Art von Gegenständen auf die sie angewandt wird. — Wir sagen jede Wißenschaft ist eine angewandte Logik. Denn in jeder Wißenschaft müßten wir eine Form des Denkens haben. — Wir werden die Logik eintheilen in den dogmatischen und technischen Theil. Der erste enthält alle Regeln des Verstandsgebrauchs überhaupt d. i. die Theorie der 2te ist die Vorschrift der Regeln der Schule, nach welchen wir alle logische Unterschiede benennen. Er zeigt also alle Kunstwörter an, die hernach zur Kritik dienen. Dieser Theil ist daher nicht überflüßig, weil wir ohne Terminologie nicht kritisiren können. Der technische Theil der Logik könte seyn, die Logik in so ferne sie die Form eines Systems enthält. — Der Unterschied der Logik in die Logik des gemeinen und spekulativen Verstandes ist wichtiger. Der gemeine Verstand ist das Vermögen die Regeln des Denkens in concreto einzusehn. (Die Logik des gemeinen Verstandes ist dieKenntniß der Regeln in concreto.) Bedient sich der gemeine Verstand dieser Regeln in concreto recht, so heißt er der gesunde. (Die Logik des spekulativen Verstandes ist die Kenntniß der Regeln in abstracto) Der speculative Verstand ist das Vermögen die Regeln in abstracto einzusehn. Z. B. Wenn jemand einem andern etwas verspricht, und hält nicht Wort, so ist dies unbillig in concreto Doch sieht dies jeder leicht ein, aber in abstracto wirds auch dem Juristen sogar schwer. Aber es ist durchaus nöthig Regeln in abstracto einzusehn, weil man ohne das nicht ihre Grenzen einsehn kann, wir müßen also, wenn wir unser Erkenntniß erweitern wollen, zur spekulativen Vernunft übergehn. Wenn sich der gemeine Verstand immer in Urtheilen begränzte die er in concreto einsehn kann, so wäre er sehr zureichend. Der gemeine Verstand muß also nie über den Leitfaden der Erfahrung herausgehn. Logik als Product des gemeinen Verstandes, die die Regeln enthält in so fern sie in concreto erkannt werden, ist nicht möglich. Wenn also die Logik eine Wißenschaft von den Regeln in abstracto seyn soll : so kann sie kein Product des gemeinen Verstandes seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 16,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s01-024",
     "kind": "text",
     "aa": 508,
     "aaEnd": 509,
     "pages": [
      {
       "p": 509,
       "i": 465
      }
     ],
     "text": "Man kann die Logik auf 2fache Art abhandeln oder vortragen. Vortrag ist die Art und Weise wie eine Doctrin faslich gemacht werden kann. Methode ist die Art wie das Object volständig zu erkennen sey. — Der Vortrag ist entweder scholastisch, wenn er angemeßen ist der Wißbegierde, Fähigkeit und Kultur derer die das Erkenntniß als Wißenschaft tractiren woUen; oder populär, vor die, die Logik nicht als Wißenschaft tractiren wollen, sondern sie nur ihren Verstand aufzuklären brauchen. Der populäre Vortrag vermeidt alle Kunstwörter und wißenschaftliche Einrichtung. Er ist für das gemeine Wesen sehr wolthätig, und ein jeder Gelehrter hat viel Verdienst wenn er sich zur Popularität herablaßen kann. Im scholastischen Verstände müßen die Regeln algemein seyn, im lezteren aber so wenig wie möglich, sondern alles in concreto. Populär zu schreiben kann niemand lernen, sondern es muß durch Weltkenntniß geschehn, oder durch Uebung seinen Schul Unterricht dem gemeinen Wesen vorzutragen. Die Franzosen haben hierin den Vorzug. — Der scholastische Vortrag ist das Fundament des populären.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s02",
   "title": "Benennung und Geschichte der Logik.",
   "titleSrc": "heading",
   "headings": [
    "Benennung und Geschichte der Logik."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s02-001",
     "kind": "heading",
     "aa": 509,
     "text": "Benennung und Geschichte der Logik."
    },
    {
     "id": "poelitz-s02-002",
     "kind": "text",
     "aa": 509,
     "ms": [
      {
       "p": 19,
       "i": 1116,
       "raw": "i»",
       "inferred": true
      }
     ],
     "text": "Epikur nannte die Logik canonica, sie war sehr compendioes und die Bennenung gut, nehmlich Canon der Vernunft. Aristoteles kann als der Vater der Logik angesehen werden, wenigstens von uns. Seine Lehrart ist sehr scholastisch und geht auf die algemeinsten Begrife die der Logik zum Grunde liegen. In der That aber hat keiner Nuzen davon, weil fast alles auf Subtilitaeten herausläuft. Die Benennung verschiedener Verstands Handlungen hat man herausgezogen, welches fast ihr einziger Nuze ist. — Die aristotelische Philosophie hatte sehr lange die Oberhand, bis der Reformator Ramus kam, der aber auf der Pariser Bluthochzeit sein Leben verlohr. Ferner Malebranche und Locke, die aber nicht eine eigentliche Logik abgehandelt, weil sie auch vom Inhalt der Erkenntniß reden. Unter den Neuern sind 2 die die algemeine Logik im ganzen betrachten nehmlich Leibniz und Wolf, und des leztern algemeine Logik ist die beste die man hat. — Andere haben Wolfs Logik mit der aristotelischen verbunden. — Wolfs Logik wurde konzentrirt durch Baumgarten, ein Mann der hierin viel Verdienste hat, und über ihn hat Meier kommentirt. bemerken wir kürzlich : Aristoteles trug sie als Organon vor und theilte sie in Analytik und Dialektik. Er hat fast die größte Scharfsinnigkeit in seinen Schriften unter allen Alten bewiesen, dennoch aber hatte er viele Mikrologien. — Die Scholastiker, die immer wetteiferten, wer am besten den Aristoteles erklären könte, verloren ihr Ansehn nach der Reformation, hernach kamen die Skeptiker, unter welchen Lullus, David Hume und Bayle, die auch Antilogiker (d. i. die den Verstand in Ungewißheit sezten) können genannt werden. Ferner gehört hieher das Buch deßen Verfaßer unbekannt ist recherches de la verite. Lambert hat in Absicht der Logik etwas in seinem Organon bestirnt.",
     "dehyphenated": 4,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s03",
   "title": "Abhandelung der Logik Von der Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Abhandelung der Logik",
    "Von der Erkenntniß."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s03-001",
     "kind": "heading",
     "aa": 510,
     "text": "Abhandelung der Logik Von der Erkenntniß."
    },
    {
     "id": "poelitz-s03-002",
     "kind": "text",
     "aa": 510,
     "text": "Alle unsere Erkenntniße haben eine 2fache Beziehung",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s03-003",
     "kind": "text",
     "aa": 510,
     "text": "1.) eine Beziehung aufs Object d. i. Vorstellung",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s03-004",
     "kind": "text",
     "aa": 510,
     "text": "2.) eine Beziehung aufs Subject d. i. das Bewustseyn dieser Vor-Stellung. Eigentlich ist das Bewustseyn eine Vorstellung, daß eine andere Vorstellung in mir ist. Der Autor bemüht sich die Vorstellung zu erklären, es ist aber vergeblich, denn eine Vorstellung müste immer durch eine andere Vorstellung erklärt werden.",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s03-005",
     "kind": "text",
     "aa": 510,
     "text": "In jedem Erkenntniß muß unterschieden werden, Materie, d. i. Gegenstand, und Form d. i. die Art wie wir den Gegenstand erkennen. Z.E. Ein Wilder sieht in der Ferne ein Haus, deßen Gebrauch er aber nicht kennt, so hat er eben daßelbe Object in seiner Vorstellung was ein anderer hat, die Form aber ist unterschieden. Bey ihm ists bloß Anschauung, beym andern aber Anschauung und Begrife, nehmlich daß es eine Wohnung für Menschen sey. —",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s03-006",
     "kind": "text",
     "aa": 510,
     "text": "Vorstellung die das enthält, was mehreren gemein ist, ist Begriff; eine einzelne Vorstellung aber, die das enthält was nur einem gemein ist, ist Anschauung. Erkenntniß durch Begriffe ist eine discursive Erkenntniß, Erkenntniß durch Anschauung ist eine intuitive Erkenntniß",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s03-007",
     "kind": "text",
     "aa": 510,
     "aaEnd": 511,
     "pages": [
      {
       "p": 511,
       "i": 1089
      }
     ],
     "ms": [
      {
       "p": 20,
       "i": 482
      }
     ],
     "text": "Die Verschiedenheit der Form beruht auf dem Bewustseyn, bin ich mir der Vorstellung bewust : so ist sie klar , bin ich mir derselben nicht bewust: alsdenn ist sie dunkel. Das Bewustseyn ist die wesentliche Bedingung aller logischen Form der Erkenntniße. Die Logik handelt nicht von der Art wie wir uns mit dunklen Vorstellungen beschäftigen, sondern sie nimmt an daß sie klar sind, und in so fern kann sie sich auch nur mit ihnen beschäftigen, denn wenn ich nicht weiß daß ich eine Vorstellung habe : so kann ich auch nicht auf sie die logischen Regeln anwenden. Dunkle Vorstellungen sind also nicht ein Object der Logik, weil wir hier nicht sehen, wie Vorstellungen entspringen, sondern nur wie sie mit der logischen Form übereinstimmen. — Alle klare Vorstellungen können unterschieden werden in Ansehung der Deutlichkeit und Undeutlichkeit. Bin ich mir der ganzen Vorstellung bewust, aber nicht des mannigfaltigen was in ihr enthalten ist : so ist die Vor-Stellung undeutlich. Z. E. Ich sehe in der Ferne ein Landhaus, und bin mir bewust daß dies ein Haus ist, so habe ich doch auch nothwendig eine Vorstellung von denTheilen des Haußes z. E. vom Fenster etc, denn sähe ich die Theile nicht so sähe ich auch das ganze Haus nicht, da ich mir nun aber dieser Vorstellung des Mannigfaltigen nicht bewust bin : so habe ich eine undeutliche Vorstellung. Noch ein Beyspiel: Im Begriffe der Schönheit kommt verschiedenes vor, nehmlich es muß etwas seyn was in die Sinne fällt es muß etwas seyn was algemein gefält : jeder hat vom Schönen einen klaren Begrif : sobald er aber das Mannigfaltige deßelben nicht auseinander sezen kann, ist der Begrif doch undeutlich. Eine undeutliche Vorstellung nennen die Schüler des Wolfs verworren, dieser Ausdruck ist aber nicht angemeßen, weil das Gegentheil von Verwirrung nicht Deutlichkeit, sondern Ordnung ist. Deutlichkeit ist zwar eine Wirckung der Ordnung und Undeutlichkeit eine Wirckung der Unordnung. Aber es ist nicht einerley, zwar sind jede verwirrte Erkenntniße undeutlich, aber nicht alle undeutliche verwirrt. Die Undeutlichkeit rührt oft nicht her von Verwirrung, sondern aus Mangel des Bewustseyns. Bey Erkenntnißen wo kein Mannigfaltiges da ist, findet keine Ordnung aber auch keine Verwirrung statt. Also muß man alle einfache Vorstellungen nicht verworren, sondern undeutlich nennen. Etwas kann deutlich seyn der Form nach d. i. ich kann mir des Mannigfaltigen in der Vorstellung bewust seyn, aber der Materie nach kann Deutlichkeit abnehmen, wenn der Grad des Bewustseyns kleiner wird, obgleich alle Ordnung da ist. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s03-008",
     "kind": "text",
     "aa": 511,
     "text": "Eine undeutliche Vorstellung ist, wenn ich mir zwar des Ganzen, aber nicht der Theile derselben bewust bin — eine deutliche, wenn ich mir auch des Mannigfaltigen, oder der theile in dem ganzen bewust bin, wie wohl das Bewustseyn des Mannigfaltigen in der Vorstellung nicht die Deutlichkeit geradezu ausmacht, denn es wird dazu noch Ordnung erfordert",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s03-009",
     "kind": "text",
     "aa": 511,
     "ms": [
      {
       "p": null,
       "i": 34,
       "raw": "%i",
       "unresolved": true
      }
     ],
     "text": "Die Deutlichkeit kann 2fach seyn: l.)eine sinnliche welche besteht in dem Bewustseyn des Mannigfaltigen in der Anschauung. Z.E. Die Milchstraße sehe ich als",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s03-010",
     "kind": "text",
     "aa": 511,
     "text": "einen weislichen Streifen am Himmel an, die Sterne derselben",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s03-011",
     "kind": "text",
     "aa": 511,
     "text": "müßen noth wendig in mein Aug gekommen seyn, aber die Vor-Stellung war nur klar, durch das Teleskop wird sie deutlich, weil",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s03-012",
     "kind": "text",
     "aa": 511,
     "aaEnd": 512,
     "pages": [
      {
       "p": 512,
       "i": 58
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 58,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "ich jezt alle kleine in derselben enthaltene Sterne sehe. 2.) Deutlichkeit in Begriffen oder Verstandesdeutlichkeit besteht darin, wenn ich den Begrif zergliedere nach dem Mannigfaltigen, was in ihm liegt. Z. E. Tugend: hier ist enthalten erstlich :",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s03-013",
     "kind": "text",
     "aa": 512,
     "text": "der Begrif der Freiheit, dann: die Anhänglichkeit an Regeln, und:",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s03-014",
     "kind": "text",
     "aa": 512,
     "text": "die Macht, die Neigungen wenn sie diesen Regeln zuwieder sind,",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s03-015",
     "kind": "text",
     "aa": 512,
     "text": "zu überwältigen.",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s03-016",
     "kind": "text",
     "aa": 512,
     "aaEnd": 516,
     "pages": [
      {
       "p": 513,
       "i": 2229
      },
      {
       "p": 514,
       "i": 4850
      },
      {
       "p": 515,
       "i": 7420
      },
      {
       "p": 516,
       "i": 9946
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 1709,
       "raw": "%%",
       "unresolved": true
      },
      {
       "p": null,
       "i": 3881,
       "raw": "33",
       "unresolved": true
      },
      {
       "p": 24,
       "i": 6214
      },
      {
       "p": 25,
       "i": 8705
      },
      {
       "p": 26,
       "i": 11364,
       "raw": "28",
       "inferred": true
      }
     ],
     "text": "Durch solche Deutlichniachung habe ich meinem Begrif, hier z. E. von der Tugend nichts hinzugesezt, sondern ihn nur erklärt. — Bey der Deutlichkeit werden also die Vorstellungen nicht der Materie sondern der Form nach verbeßert. — Der Autor redt von vernünftigen Erkenntnißen um sie zu unterscheiden von den historischen. Alle Erkenntniß wodurch vorgestelt wird daß etwas sey, ist historisch, daß etwas nothwendig seyn müße, ist Vernunfterkenntniß — sie sind also Erkenntniße der Noth wendigkeit der Urtheile. Man nennt sonst auch schon Erkenntniße vernünftig, wenn sie mit der Vernunft übereinstimmen. Historisch erkenne ich etwas, in so fern es mir von andern mitgetheilt wird, es begreift die Erfahrung von dem Urtheil anderer in sich. Die Vernunft schlüßt nothwendig, weil sie alles aus den notwendigen Bedingungen der Wahrheit folgert. — Alle unsere Erkenntniße sind entweder Anschauungen oder Begriffe. Das Vermögen der Anschauung ist Sinnlichkeit, das Vermögen der Begriffe ist Verstand. Man kann Sinnlichkeit noch anders definiren nehmlich metaphj^sisch, wo sie von einer andern Seite betrachtet wird, nehmlich sie ist das Vermögen der Receptivität, der Verstand aber ist das Vermögen der Spontaneität, der nur Dinge vorstellt wie sie sind, nicht wie sie uns afficiren. — ■ Die Sinnlichkeit heißt facultas inferior, weil sie uns den Stof zum Denken giebt, Verstand heißt facultas superior, weil er über diesen Stof disponirt, und unter eine Vorstellung oder einen Begrif bringt. Ein Erkenntniß kann vorkommen seyn nach Gesezen der Sinnlichkeit, denn ist es ä s t h e t i s c h volkommen, oder nach Gesezen des Verstandes, denn ist es logisch volkommen. — Die Sinnlichkeit ist also eine Vollkommenheit in so fern sie dient Stof zum Denken zu geben und die Regeln des Verstandes in concreto deutlich zu machen. Hierin ist sie unentbehrlich. Die Sinnlichkeit ist aber Unvolkommenheit, wenn sie die Begriffe verwirrt. — ■ Verstand von Sinnlichkeit begleitet wird erhoben, komt aber die leztere an des ersten Stelle, so entsteht Verwirrung. Ohne Sinnlichkeit hätten die Begriffe keinen Gegenstand und sie haben nur Bedeutung in der Anschauung, d. i. in der Sinnlichkeit. In Ansehuno; der Sinnlichkeit kann ein Erkenntniß viel Volkommenheit haben die von der logischen weit unterschieden ist. Z. E. wenn es neu, leicht und lebhaft ist d. i. subjective Klarheit hat. Ein mathematischer Beweiß kann aber deßwegen nicht abgewiesen werden weil er schwer ist. — Die Volkommenheit der Erkenntniß so fern sie nur nach normen a posteriori beurtheilt werden kann ist ästhetisch, so fern sie nach normen a priori beurtheilt werden kann ist logisch. Es fragt sich : Was ist Volkommenheit ? Eigentlich kommt dieses in der Metaphysik vor. Statt Volkommenheit wollen wir sezen Es gefält, denn das nennen wir Volkommenheit, wenn etwas dazu beyträgt, daß es gefält. Gefält etwas nach Gesezen der Vernunft : so muß es gefallen, nach Gesezen der Sinnlichkeit: so ists nicht nothwendig. Die Beschaffenheit der Gegenstände, wodurch sie mit den algemeinen Gesezen der Sinnlichkeit stimmen, ist ästhetische Volkommenheit, und man lernt sie bloß aus Erfahrung. — Das Vermögen zu beurtheilen ob etwas mit den Gesezen der SinnHchkeit übereinstimmt, ist Geschmack, mit den Gesezen des Verstandes, ist Urtheils Krafft. Was gefält, gefält entweder mittelbahr oder unmittelbahr. — Ueberhaupt : was mit den Gesezen der Vorstellungskraft Kraft übereinstimmt, gefält, die Vorstellungen mögen Empfindungen, Begriffe oder Anschauungen seyn, daher gefält etwas intellektuel oder sensitiv. Das was mittelbahr gefält ist an sich indifferent, kann auch wol gar an sich mißfallen, es gefält aber als ein Mittel zu einer Sache, welche in höherm Grad gefält, daß etwas als Mittel gefalle gehört für den Verstand, ist aber kein Object unserer gegenwärtigen Untersuchung von den algemeinen Gesezen was gefält und mißfält. Das was gefält, theilt man ein, ins Angenehme, Schöne und Gute. Die Begriffe sind richtig, die Eintheilung aber nicht recht logisch. Beßer ist diese Eintheilung: alles was gefält ist entweder ein Object des Privat oder algemeinen Wohlgefallens. Ist das leztere: so erkenne ich auch die Noth wendigkeit. Nichts anders findt hier statt, als ich muß sagen können : Es muß jedem gefallen, und denn liegts im Object. — Das was ein Grund des Privatwohlgefallens ist, ist angenehm. Daher sagt man nicht das Object ist angenehm, sondern es ist mir angenehm. Das angenehme ist entweder Reizung oder Rührung. Das was algemein gefält gefält entweder nach Gesezen der Sinnlichkeit, und dann heißt es schön oder nach Gesezen des Verstandes, und denn heißt es gut Die wahre Schönheit muß also von Reiz und Rührung ganz separirt sejm. Das angenehme gefält den Sinnen in der Empfindung und ist die Ursache des Privat Wohlgefallens — Das Schöne gefält den Sinnen in der Anschauung, und ist die Ursache des algemeinen Wohlgefallens, daher sagt man auch, das Vermögen das Angenehme vom Unangenehmen zu xmterscheiden, ist das Gefühl, das hat jeder. Das Schöne vom nicht Schönen (nicht vom häßlichen, denn was nicht schön ist, ist nicht allemal häßlich) zu unterscheiden, ist Geschmack. Beyde gehören zum sinnlichen Beurtheilungs Vermögen. Geschmack hat der, der das wählt, was algemein gefält, und in so fern es dem Verstand eines jeden vernünftigen Menschen gefält, ist es gut. Gut und schön kommen darin überein, daß sie beyde aufs Object gehn. Bey beyden ist ein algemein gültiges Wohlgefallen, aber sie sind darin verschieden : bey jenem ist strikte und bey diesem comparative Algemeinheit. Das objective höchste Wohlgefallen ist im Guten, das subjective im Angenehmen. Alle stricte Algemeinheit muß können erwiesen werden, d. i. es muß können gezeigt werden, warum es gefalle und daß es gefallen müße. — Das Gute kann auch erwiesen werden aus algemeinen Grundsazen, — aber die Regeln des Geschmacks laßen sich nicht beweisen, d. i. nicht a priori erkennen, denn sie sind Regeln der Sinnlichkeit. — Demnach kann nur die Erfahrung allein über die Richtigkeit des Geschmacks dezidiren. Alle logische Volkommenheit beruht auf der Uebereinstimmung des Erkenntnißes mit dem Object, die sinnhche auf der Uebereinstimmung des Erkenntnißes mit dem Subject. Die logische Volkommenheit enthält also Regeln die vor jeden Verstand und Erkenntniß gelten müßen, denn aller denkenden Wesen Erkenntniß muß mit unserm einerley seyn, wenn wir einerley Object betrachten. Die Verstandes Volkommenheit beruht also auf algemeingültigen Gesezen, die ästhetische aber auf der besondern Sinnlichkeit eines jeden Menschen. Eine logisch volkomene Erkenntniß kann auch ästhetisch seyn. Z. E. Wenn ein Erkenntniß, das wahr ist, auch zugleich leicht ausgebreitet ist. — Unter allen ästhetischen Volkommenheiten last sich keine beßer mit der Logik verbinden, und keine scheint ihr wesentlicher zu seyn als die Anschauung d. i. Form, worin es auch algemeine Geseze giebt. Empfindungen d. i. Materie laßen sich nicht mittheilen, und es finden hier auch keine algemeine Geseze statt. — Unsere Erkentniße, wenn sie schon logische Volkommenheit haben, die in Deutlichkeit, Wahrheit, und Algemeinheit bestehn, können auch noch ästhetische Volkommenheit bekommen. Die ästhetische Volkommenheit ist in Ansehung der angeführten Stükke nicht nur von der logischen unterschieden, sondern ihr auch in einigen Stüken entgegen: Zuerst in Ansehung der Deutlichkeit durch Begriffe. Die ästhetische Volkommenheit ist Deutlichkeit in der Anschauung also bloß Lebhaftigkeit. Die Lebhaftigkeit der Erkenntniß wird dadurch befördert, daß der Gegenstand den Sinnen vorgestelt wird. Die Deutlichkeit durch Begriffe wird befördert, wenn er von den Sinnen abgezogen wird. Logische Wahrheit darf nicht statt finden, oder das Erkenntniß darf nicht mit dem Object, sondern mit dem Subject übereinstimmen. Aesthetisch und poetisch wahr, ist das was dem sinnlichen Schein gemäß ist. — Zur Wahrheit gehört Untersuchung, Vergleichung und Prüfung, das ist schwer, laß ich bloß die Imagination spielen, so ists leichter d. i. was belebendes, d. i. was meine Gemüthskräffte in ein harmonisches Spiel bringt. — Algemeinheit, dieser Begrif ist das Gegentheil von dem, was zur ästhetischen Vollkommenheit erfordert wird. Bey der logischen Volkommenheit wird Algemeinheit in abstracto erfordert. Bey der ästhetischen Volkommenheit wird diese Algemeinheit in concreto durch besondere Fälle erläutert, und hier ist die ästhetische Volkommenheit der logischen nachtheilig. Die ästhetische Volkommenheit kann also aus 2 Rücksichten betrachtet werden, nehmlich als derlogischen vortheilhaft,und schädlich, das erste ist das wesentliche Schöne, das lezte das außerwesentliche Schöne. — Was zur Empfindung nicht zur Anschauung gehört, davon hat man keinen Begrif. Empfindungen verstatten gar keine logische Volkommenheit. Reiz gehört zum Angenehmen, Rührung zum Erhabenen, und gehören bej^de zur ästhetischen Volkommenheit aber zum außerwesentlichen Schönen. Nur das, was in der Anschauung ist gehört zum wesentlichen Schönen. Einige Gegenstände beschäftigen mehr unser Gefühl, einige mehr die Anschauung. Unsre sinnliche Erkenntnißkraft kann also auch mehr Anschauung oder von einem andern Gegenstand mehr Empfindung haben. Empfindung gehört zur Schönheit und zu dem was dem Geschmack gemäß ist, aber der logischen Volkommenheit ist sie am meisten zuwieder, so wie Reiz und Rührung, denn dadurch wird mein Erkenntniß nicht gewißer, nicht wahrer, sondern sogar Reiz und Rührung korrumpiren logische Volkommenheit in unsern Erkenntnißen und Urtheilen; hieraus folgt : logische Volkommenheit ist die Basis ohne welche kerne Volkommenheit statt finden kann. Aesthetische Volkommenheit kann vor sich allein nicht bestehn, die logische kann wohl nachgeben, aber nicht ganz aufgehoben werden, ich darf z. E. dem Begrif nicht alle mögliche Deutlichkeit geben, um der ästhetischen etwas einzuräumen, und man kann general sagen : Die ästhetische Volkommenheit nimmt der logischen immer etwas ab, aber das Bedürfniß der menschlichen Natur erfordert es. Beyde, Sinnlichkeit und Verstand müßen zusammen gepaart werden und die schulgerechte (logische) Volkommenheit muß populär werden d. i. nachgeben. Die Regel der Vereinigung der logischen und ästhetischen Volkommenheit folgt also hieraus 1.) Die logische Volkommenheit ist das Fundament 2.) Die Sinnlichkeit kann dazu kommen, die Begriffe in concreto zu erklären und faslich zu machen 3.) man muß aber mehr auf Anschauungen als auf Empfindungen sehen, weil die ersten das wesentliche Schöne sind 4) Endlich kann noch Beiz und Rührung hinzukommen, womit man aber sehr behutsam seyn muß, weil dadurch die Aufmerksamkeit vom Object aufs Subject kann gezogen werden, welches sehr nachtheilig ist. Daß man der logischen Volkommenheit den Vorzug last, kommt daher, weil der Verstand das vorteilhafte hat, daß das, was er sagt, algemein ist, weil also das Verstandes Urtheil algemeine Gültigkeit hat, so hat die Empfindung in Ansehung seiner wenig Werth, weil sie nur auf Einiges nicht aufs algemeine geht. Weil aber logische und ästhetische Volkommenheit zusammen seyn müßen: so entsteht hieraus immer eine Verbindung des Lobes und Tadels, weil man es beyden Erkenntniß -kräfften nicht genung thun kann z. E. ein Vortrag ist schön, aber seicht, gründlich aber trokken, hier muß man also noth wendig auf den Zweck sehen : Gewiße Erkenntniße sollen unterrichten, die müßen gründlich seyn, oder unterhalten, also schön seyn, und in Vereinbahrung dieser beyden Stücke bey Erkenntnißen die beydes, unterrichten und unterhalten sollen, beruht das was man Genie nennt. Der Verstand will belehrt, die Sinnlichkeit belebt seyn, der erste begehrt Einsicht, die zweite Faslichkeit. Zwischen beyden ist also eine Art von Wiederstreit der nicht gehoben werden kann. Man muß hier also suchen dem grösten Zweck ein Gnüge zu thun. Z.E. Bey einer Rede ist logische Volkommenheit nöthiger als ästhetische ob die gleich nicht zu versäumen ist. beym Gedicht ist ästhetische nöthiger. Manche Erkenntniße können sehr geschmackvoll werden wenn sie erst trocken und gründlich vorgetragen sind z.E. Moral.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 42,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s04",
   "title": "Von Volkommenheit der Erkenntniß überhaupt.",
   "titleSrc": "heading",
   "headings": [
    "Von Volkommenheit der Erkenntniß überhaupt."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s04-001",
     "kind": "heading",
     "aa": 516,
     "text": "Von Volkommenheit der Erkenntniß überhaupt."
    },
    {
     "id": "poelitz-s04-002",
     "kind": "text",
     "aa": 516,
     "text": "Die Volkommenheit der Erkenntniß ist 1.) logisch 2.) ästhetisch 3.) praktisch.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s04-003",
     "kind": "text",
     "aa": 516,
     "aaEnd": 517,
     "pages": [
      {
       "p": 517,
       "i": 126
      }
     ],
     "text": "Anmerkung. Praktische Volkommenheit gehört nicht in die Logik denn die handelt vom Erkenntniß vermögen nicht vom Willen. Auch die ästhetische eigentlich nicht, aber wir nehmen sie nur, durch die Entgegensezung die logische beßer zu erläutern. — Diese Volkomnienheiten beruhn auf den 3 Vermögen, Verstand, Gefühl, Begierde. Eine Volkommenheit kann also in 3f acher x4bsicht betrachtet werden 1.) auf das Erkenntnißvermögen selbst 2.) daß sie mit Wohlgefallen erfülle. 3.) daß sie nicht ein müßiges Erkenntniß sey, sondern einen Einfluß auf unsere Handlung habe. ■ — ■ Perfectio logica consistit",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s04-004",
     "kind": "text",
     "aa": 517,
     "text": "1) respectu quantitatis in vniversalitate.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s04-005",
     "kind": "text",
     "aa": 517,
     "text": "2) qualitatis in perspicuitate.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s04-006",
     "kind": "text",
     "aa": 517,
     "text": "3) relationis in veritate.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s04-007",
     "kind": "text",
     "aa": 517,
     "text": "4) modalitatis in neceßitate.",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s04-008",
     "kind": "text",
     "aa": 517,
     "text": "Die logische Vollkommenheit eines Erkenntnißes Avird nach 4 Hauptstücken betrachtet.",
     "ocrConf": 30
    },
    {
     "id": "poelitz-s04-009",
     "kind": "text",
     "aa": 517,
     "text": "1.) nach der Quantitaet wenn es algemem ist.",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s04-010",
     "kind": "text",
     "aa": 517,
     "text": "2.) nach der Qualitaet, wenn es deutlich ist.",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s04-011",
     "kind": "text",
     "aa": 517,
     "text": "3.) nach der Relation, wenn es wahr ist.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s04-012",
     "kind": "text",
     "aa": 517,
     "text": "4.) nach der Modalitaet, wenn es gewiß ist. Zu 1. Ein Erkenntniß das zur Regel dient und andere Erkenntniße",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s04-013",
     "kind": "text",
     "aa": 517,
     "text": "unter sich hat ist volkommener als das was nur einen besondern",
     "ocrConf": 35
    },
    {
     "id": "poelitz-s04-014",
     "kind": "text",
     "aa": 517,
     "text": "Gebrauch hat. Zu 2. Man fragt hier ist ein Erkenntniß deutlich oder undeutlich?",
     "ocrConf": 34
    },
    {
     "id": "poelitz-s04-015",
     "kind": "text",
     "aa": 517,
     "text": "Ist es deutlich: so ists der Qualitaet nach volkommener. Zu 3. Relation des Erkenntnißes aufs Object ist Wahrheit. Ist die",
     "ocrConf": 36
    },
    {
     "id": "poelitz-s04-016",
     "kind": "text",
     "aa": 517,
     "text": "Erkenntniß des Gegenstandes nicht wahr, so ist sie keine Erkenntniß oder nicht des Objects, das ich zu erkennen glaubte,",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s04-017",
     "kind": "text",
     "aa": 517,
     "ms": [
      {
       "p": 27,
       "i": 8
      }
     ],
     "text": "und sie ist die Hauptsache — Sieht man bloß auf Empfindung,",
     "ocrConf": 32
    },
    {
     "id": "poelitz-s04-018",
     "kind": "text",
     "aa": 517,
     "text": "so fragt man nicht viel nach der Wahrheit. Zu 4. Gewißheit ist das was allen Zweifel verbannt, sie ist das Bewustseyn der Noth wendigkeit der Wahrheit.",
     "dehyphenated": 1,
     "ocrConf": 37
    },
    {
     "id": "poelitz-s04-019",
     "kind": "text",
     "aa": 517,
     "text": "Wir wollen jezt die ästhetische Volkommenheiten nehmen die diesen korrespondiren. — Ich kann mir denken",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s04-020",
     "kind": "text",
     "aa": 517,
     "aaEnd": 519,
     "pages": [
      {
       "p": 518,
       "i": 203
      },
      {
       "p": 519,
       "i": 2814
      }
     ],
     "ms": [
      {
       "p": 28,
       "i": 1945
      }
     ],
     "text": "1.) subjective Wahrheit, die ist nicht die Wahrheit einer Sache an sich selbst, sondern der Sache wie sie uns scheint und unsere Sinne affizirt 2.) subjective Deutlichkeit oder Deutlichkeit m der Anschauung die durch Beyspiele erlangt wird. 3.) ästhetische Algernemheit das ist Popularitaet nehmlich daß sie jedem gefält und für jedes Verstand angemeßen ist 4.) ästhetische Noth wendigkeit und Gewißheit beruht darauf, daß ein Erkenntniß unsern Sinnen nach nothwendig ist d. i. daß es die Erfahrung bestätigt. Hier kommen immer 2 Stücke vor die die Vollkommenheit ausmachen, Mannigfaltigkeit und Einheit. Unsere Erkenntniß Kraft ist begierig nach der erstem fehlt ihr aber die leztere : so kann sie uns nicht befriedigen. Beym Verstand ist die Einheit Begrif , bey den Sinnen Anschauung. Wahrheit aber ist die Haupt Volkommenheit, weil sie der Grund der Einheit ist, durch die Relation aufs Object. Auch in der ästhetischen Volkommenheit ist Wahrheit die vornehmste negative Bedingung, denn dieses ist die Annehmlichkeit, aber Unwahrheit kann auch mit der ästhetischen Volkommenheit nicht bestehn. Niemand kommt also in den schönen Wißenschaften fort, wofern er nicht logische Volkommenheit in seinen Erkenntnißen zum Grund gelegt hat. Kerne Wißenschaft kann man sagen ist an sich selbst schön, weil immer vor der Ausübung Regeln müßen vorhergehn, das Schöne muß aber aus dem Effect beurtheilt werden, welches für die Sinnlichkeit gehört. — Der Geschmack kann aber unter keine Regeln gebracht werden. Man kann zwar einige geben, die aber zur Beurtheilung dienen, nicht als Geseze gelten, die in sich eine innere Gewißheit haben. Die Verstands Regeln sind aber alles Geseze. Alles Schöne hat das besondere, daß es sich nicht als Wißenschaft tractiren läßt, es kann daher auch keine schöne Wißenschaft geben. — Es ist also kein anderer Weg zum Besiz des Schönen und Geschmacks zu kommen als durch schöne Muster, die man unter den Alten findt. Sie sind von der Art, daß sie die Kritik so vieler Jahrhunderte ausgehalten haben, und immer für gut befunden sind. Also scheint hier etwas beständiges zu seyn. Das Kennzeichen des Geschmacks ist das: daß das was einem gefält auch andern gefält, er hat also etwas Gesellschaftliches, und ist modeartig und nachahmend. — Geschmack aber ist das was zulezt kommt, denn er ist eine Urtheils Kraft die aber später kommt als alle Gedächtniß Kultur und Verstandes Kultur denn man muß schon viel zu wählen haben wenn man urtheilen will. — Wir können uns auf 2fache Art beschäftigen, durch Muße und eigentliche Beschäftigung oder Arbeit. Alle unsere Beschäftigung mit dem Schönen ist Spiel und in so fern zu billigen, wenn dies Spiel aber ein Geschäft wird: so ist es lächerlich. Alles dieses giebt uns Anleitung wie der Geschmack zu bilden sey, nehmlich nicht nach Regeln, sondern nach Mustern, sie sind aber nicht nachzuahmen, sondern sie sollen nur einen Eindruck bey uns zurücklassen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s05",
   "title": "Vom Begrif der Wißenschaft.",
   "titleSrc": "heading",
   "headings": [
    "Vom Begrif der Wißenschaft."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s05-001",
     "kind": "heading",
     "aa": 519,
     "text": "Vom Begrif der Wißenschaft."
    },
    {
     "id": "poelitz-s05-002",
     "kind": "text",
     "aa": 519,
     "text": "Eine Wißenschaft ist ein Systehm von Erkenntnißen. Die Erkenntniße sind entweder gemein oder systematisch. — Man kann sein1 viele gemeine Erkenntniße haben, die aber doch nicht in systematischer Verbindung sind, und also den Nuzen nicht haben, den sie haben könnten. Wißenschaften sind entweder Vernunftwißenschafft oder Gelehrsamkeit. Die erste kann nur aus algemeinen Prinzipien der Vernunft erkannt werden, die andere kann gelehrt werden, oder sie kann historisch gelernt werden. Kenntniß und Kritik der Sprache und Bücher sind Instrumente der Gelehrsamkeit und sie können auch zu ihr gerechnet werden. Der Philosoph ist also kein Gelehrter, er muß nur auf die lezten Zwecke der Gelehrsamkeit sehen. Er ist auch kein Vernunft Künstler, sondern er studiert die Gesezgebung der Vernunft. Philosophie und Mathematik gehören auch nicht zur Gelehrsamkeit, aber die Philosophie anderer kennen ist Gelehrsamkeit. Der Philosoph kann seine Philosophie mit Gelehrsamkeit ausschmücken.",
     "dehyphenated": 2,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s05-003",
     "kind": "text",
     "aa": 519,
     "text": "Gelehrsamkeit ist der Inbegriff historischer Wissenschaften, zu Vernunfter kenntnißen aber kann man gelangen ohne von jemandem gelahrt zu werden so wie z. B. ein Bursche in England der noch nichts von der Mathematik verstand nach und nach auf viele Euclidische Lehrsatze von selbst verfiel man nennt wohl den Phüosophen und Mathematiker im Gegensatz des Bürgers Gelehrte aber lateinisch nicht eruditos sondern litteratos (das sind eigentlich nur solche die lesen und schreiben können). Der Inbegriff aller historischen Wißenschaften heißet polyhistorie der Inbegriff aller Vernunftwißenschaften zusammengenommen Polymathie. — Der Inbegriff dieser beyder pansophie Das historische Erkenntniß der Vernunft verbunden mit Philosophie könnte Encyclopädie heißen.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s05-004",
     "kind": "text",
     "aa": 519,
     "aaEnd": 520,
     "pages": [
      {
       "p": 520,
       "i": 341
      }
     ],
     "ms": [
      {
       "p": 29,
       "i": 357,
       "raw": "39",
       "inferred": true
      }
     ],
     "text": "An Vastität geht Gelehrsamkeit der Vernunft Erkenntniß vor, denn sie ist selbst Wißenschaft der Vernunft Erkenntniß, obgleich sie nicht Vernunft Erkenntniß ist, beyde aber unterscheiden sich von der Kunst. Der schöne Geist Redner und Poet sind nicht Philosophen nicht Mathematiker nicht Gelehrte sondern Künstler, denn das Schöne kann nicht gelehrt werden. Alle Unvolkommenheit der Erkenntniß betrift entweder die Quantitaet oder Qualitaet. In Ansehung beyder ist sie materiel oder formel. Logische oder formale Größe ist Algemeinheit, Aesthetische oder materiele Größe ist Weitläuftigkeit. Auf je mehr Dinge die Erkenntniß angewandt werden kann; desto logisch größer ist sie, je mehr ich erkenne, desto ästhetisch größer ist sie. Die materiale Unvolkommenheit der Qualitaet nach besteht in Irthum oder Falschheit, oder daß das Erkenntniß nicht mit dem Object stimmt. Ein Erkenntniß kann wahr aber undeutlich, wahr aber nicht algemein seyn. Die Unvolkommenheit ist entweder Unvolkommenheit der Beraubung oder des Wiederspiels, imperfectio contradictorie sie dieta und imperfectio contrarie sie dieta. Man könnte die erste auch nennen imperfectio negative sie dieta wo ein bloßes Nichtseyn der Volkommenheit statt findet. Unvolkommenheit des Mangels heist in der Logik generaliter Unwißenheit, der Beraubung heist Irthum. Bey diesem f hielt immer jene statt und leztere ist ärger als die erste. Der Autor theilt die Unvolkommenheit in defectum und vitium. Imperfectio privative dieta est clefectus, Imperfectio contrarie dieta est vitium. Die Unvolkommenheit des Mangels ist nicht zu tadeln, in Ansehung der Unvollkommenheit in sensu contrario, die Fehler sind entweder logisch oder ästhetisch eßentiel die den Zweck selbst betreffen, und extra eßentiel. Die ästhetische Unvolkommenheit ist Trokkenheit. Die logische ist Seichtigkeit. Aesthetische Unvolkommenheit ist nicht Häslichkeit, denn Trockenheit ist ein Mangel deßen was den Sinnen gefält. Wahre Häßlichkeit kann sich auch nicht mit der logischen Volkommenheit vertragen. Man muß den Sinnen nicht gar zu viel schmeicheln, aber ihnen auch nicht zu viel abnehmen. Die Alten entschuldigten ihre Barbarismen durch Gründlichkeit, da aber die Wißenschaften beßer exeolirt wurden sähe man ein, daß es nöthig sey der ästhetischen Volkommenheit nicht Abbruch zu thun. Alle3o unsre Erkenntniße selbst wenn sie aus der Erfahrung sind, müßen wir auf Begriffe bringen, und die Begriffe wieder umgekehrt auf Anschauungen, weil wir uns bald in den algemeinen Begriffen verwirren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s05-005",
     "kind": "text",
     "aa": 520,
     "text": "alles Erkennen kann 2fache Vollkommenheiten haben",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s05-006",
     "kind": "text",
     "aa": 520,
     "text": "1. Ehie scholastische die den objeetiven Regeln angemeßen ist.",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s05-007",
     "kind": "text",
     "aa": 520,
     "text": "2. Eine populaire die den subjeetiven Regeln des Umgangs angemeßen ist erstere heißt: Wahrheit, letztere Geschmack.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s05-008",
     "kind": "text",
     "aa": 521,
     "text": "Der so die scholastische Pünktlichkeit insofern sie unnöthig dem Geschmack widerstreitet beobachtet heißt Pedant, aber nicht der der sie vor dem Kenner zeigt. Definitio generahs Die unnöthige Pünktlichkeit in formalien heißt Pedanterie z. E. in Gesellschaft von Ungelehrten Schillsentenzen vorbringen.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s06",
   "title": "Vom Horizont der Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Vom Horizont der Erkenntniß."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s06-001",
     "kind": "heading",
     "aa": 521,
     "text": "Vom Horizont der Erkenntniß."
    },
    {
     "id": "poelitz-s06-002",
     "kind": "text",
     "aa": 521,
     "aaEnd": 522,
     "pages": [
      {
       "p": 522,
       "i": 2104
      }
     ],
     "ms": [
      {
       "p": 30,
       "i": 327,
       "raw": "»o",
       "inferred": true
      },
      {
       "p": 31,
       "i": 2812
      }
     ],
     "text": "Horizont ist die Congruenz der Gränzen unserer Erkenntniß mit den Zwecken der Menschheit, es wäre also der Inbegrif unserer Erkenntniß die zusammengenommen mit dem Zweck den wir haben adaequat ist. Nehmen wir die Zwecke algemein, so ist der Horizont absolut, nehmen wir aber die Zwecke besonders in dieser oder jener Absicht ; so ist der Horizont relativ determinirt. Den Horizont zu bestimmen gehört Kultur unserer Urtheilskraft, obgleich dieses aber ein schweres Werk ist; so ists doch nüzlich, weil dadurch viel Confusion in unsern Begriffen und Urtheilen vermieden wird. Man kann den Horizont bestimmen 1.) logisch in Verhältniß auf unser Erkenntniß vermögen, Avie weit wir kommen können, und wie weit man gehen muß, oder im Verhältniß auf logische Absicht, in wie fern Erkenntniße als Mittel zu unserm Haupt Erkenntniß als unserm Zweck dienen. Im Zuschnitt muß alles auf Volständigkeit angelegt werden. Zum Abschlag komts doch. Das erste ist nöthig für die Philosophie. 2.) ästhetisch im Verhältniß auf Geschmack. Den Horizont im Verhältniß auf Geschmack könte man auch Popularität nennen. Ich kann den Horizont entweder nach dem Urtheil des Publikums oder der Kenner bestimmen. Einer der nicht ein Gelehrter von metier werden will, sondern nur so viel wißen will daß er in Gesellschaft mitsprechen kann sucht kurrente Gelehrsamkeit, die jedem gefält, wo auch sogar Frauenzimmer Intereße daran nehmen können, er bestimmt also den Horizont in Ansehung des Geschmacks. Da es mehr reizend ist den Beyfall des Publikums als einiger Stubengelehrten zu haben, so sieht man bloß auf den ästhetischen Horizont oder richtet die Wißenschaft nach dem Geschmack des Publikums ein, und dadurch geräth man in Seichtigkeit. Das ist der Fall bey den Franzosen. 3.) praktisch im Verhältniß auf den Nuzen. Der praktische Horizont in Ansehung des Einflußes den er auf unsere Sittlichkeit hat ist pragmatisch. Man muß den Horizont nicht zu früh bestimmen, weil man dann noch keine Wißenschaft kennt, also keine wählen kann. Man muß ihn auch nicht zu oft verändern, das geschieht bey denen die ihn sich nicht ordentlich und zu frühzeitig bestimmt haben. Was ich nicht wißen kann ist über meinem Horizont. Was ich nicht wißen darf ist außer meinem Horizont. Das, deßen Unwißenheit so gar rühmlich ist, ist unter meinem Horizont. Der Horizont ist in Ansehung der historischen Kenntniße unermeßlich und von denen muß man sich so viel verschaffen als möglich besonders in der Jugend, da das Gedächtniß noch die mehreste Receptivität hat, und da man noch Geschmack daran findt, hernach wenn man selbst denkt, verliehrt sich der Geschmack an historischen Kenntnißen. Der Horizont der Mathematik läßt sich so bestimmen nehmhch auf welche Art von Objecten die Mathematik nicht ausgedehnt werden kann. In Absicht der Vernunft Erkenntniß in so fern : wie weit die Vernunft a priori ohne Erfahrung gehen kann, und dies ist nüzlich um nicht fruchtlose Unternehmung zu machen. Irthum ist eine Unvolkommenheit der Beraubung. Unwißenheit eine Unvolkommenheit des Mangels, und jener ist ärger als diese, denn Irthum wegzubringen muß man wieder Unwißenheit verschaffen. Diese ist etwas negatives, jener etwas positives. Bey Aufhebung der Unwißenheit ist man immer in Gefahr der Irthümer, deßwegen wir nicht unwißend bleiben dürfen. Zum Irthum tragen 2 Stücke bey, Unwißenheit und Vorwitz mehr wißen zu wollen als man wißen kann. Unwißenheit ist kein großer Vorwurf den man jemandem macht, dies bezieht sich aber nur auf solche die sehr viele Kenntniße haben, und bey alle dem doch über die Menge deßen, das sie nicht wißen, erstaunen. Der Autor redt von einer lobenswürdigen Unwißenheit. Unwißenheit ist nie lobenswürdig, etwas ignoriren oder nicht wißen wollen könte wol lobenswürdig seyn, da lobt man aber nicht die Unwißenheit, sondern die Reflexion nach welcher ich die Erkenntniß von meinen übrigen ausschlüße, das heißt eigentlich abstrahiren, nicht ignoriren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s06-003",
     "kind": "text",
     "aa": 522,
     "aaEnd": 524,
     "pages": [
      {
       "p": 523,
       "i": 653
      },
      {
       "p": 524,
       "i": 3220
      }
     ],
     "ms": [
      {
       "p": 32,
       "i": 1160,
       "raw": "",
       "inferred": true
      },
      {
       "p": 33,
       "i": 3138
      }
     ],
     "text": "Die Alten unterscheiden Idioten und Sophisten. Idiot ist ein Mensch, der sich viel zu wißen dünkt, und doch nichts weiß. Die Nichtkenntniß seiner Unwißenheit ist ein Vorwurf, und die Kenntniß derselben ist Wißenschaft Denn der nichts weiß, weiß auch nicht daß er unwißend se}\\ Das Gegentheil der Unwißenheit ist das Viel wißen. Das historische Wißen ohne bestirnte Gränzen ist Polyhistorie, das ohne bestimmte Gränzen ausgedehnte vernünftige Wißen heißt Polymathie. Der muß aber auch historische Kenntniße haben, weil er sonst von seinen Spekulationen keine Anwendung hat. Beides kann heißen Pansophie. Zu der erstem gehört Philologie, eine Wißenschaft von den Werkzeugen der Gelehrsamkeit. Kritische Kenntniße der Bücher und Sprachen machen einen Philologen aus. Ein Theil der Philologie heist humaniora und der sie traktiert heist humanist. humaniora sind die Unterweisungen deßen, was zur Kultur des Geschmacks dient. Alle diese Kenntniße müßen auf eine Haupt Wißenschaft reduzirt werden und die andern sieht man nur als Mittel zu der zu gelangen. Alle Wißenschaften sind in einem Zusammenhang und man kann auf Wißenschaften gehn ohne Zusammenhang, welches alsdenn die praktische Polyhistorie ist, wenn man sich aber eine3S Haupt Wißenschaft vorsezet und die andern als Mittel zu derselben zu gelangen ansieht; so ist das ein System. Man kann die Gelehrte eintheilen in Zunftgelehrte und Zunftfreie Gelehrte. Wären die Wißenschaften nicht zu Brodkünsten geworden, so wären wir nie so weit darin gekommen. Jede Wißenschaft als freye Kunst hat viel Vortheile, sie hat ihre völlige Freyheit und kann ihr Wißen von allem Wahn und Vorurtheilen reinigen, aber sie hat nicht genungsamen Trieb und Anstrengung der Kräffte sich zu vervolkommenern. Der Autor redt jezt von einem Fehler der den Gebrauch unsers Wißens betrift, nehmlich von der Pedanterie. Im Gebrauch unsers Erkenntnißes kann unterschieden werden, daß der Gebrauch mehr der Schule als der Welt angemeßen ist. Der erste enthält die Methode und die Form nüzliche Wißenschaft zu lehren und zu lernen welche aber im Gebrauch wegfallen kann. Die scholastische Vollkommenheit besteht also in der didaktischen Form die tauglich ist ein Erkenntniß preziser zu lernen, als auch es einem Anfänger nach allen Regeln der Unterweisungskunst zu lehren. Unser Vortrag kann also schulgerecht oder populär seyn. Ein Gelehrter von metier muß den scholastischen Vortrag haben. Das schulgerechte ist immer das erste und in der scholastischen Volkommenlieit beobachten wir alle Regeln der Gründlichkeit und ohne sie wäre Wißenschaft nur Tändelwerk. Wollen wir aber unsere Kentniße der Welt konmiuniziren, so müßen die didaktischen Lehren wegfallen und die Methoden müßen weggelaßen werden, die dazu dienen, die didaktische Form zu unterhalten. Einige Wißenschaften können nicht populär werden z. E. Mathematik. Die populäre Volkommenheit muß aber die scholastische nicht verdrängen um dem Volle zu gefallen muß Gründlichkeit nicht wegfallen. Pedanterie nun ist die Unvolkommenheit da man etwas mit der Manier, als es in Schulen vorgetragen wird dem Publiko vortragen will. Unter allen ist der Pedant im gelehrten Fach der erträglichste. Von ihm kann man lernen, denn es Avird vorausgesezt daß er gelehrt sey. Man findt bey ihm zwar nicht so viel Annehmlichkeit als bey dem, der sich populär ausdrücken kann, aber",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s06-004",
     "kind": "text",
     "aa": 524,
     "text": "zu brauchen ist er doch immer. Die Pedanten in andern Fächern sind gemeinhin leere Köpfe. Der Fehler im Gegentheil der Pedanterie ist Galanterie. Galant ist der der jemandem Vorzüge beylegt, die dieser sich selbst nicht beylegen würde und zwar aus der Ueberlegenheit seiner Verfeinrung über den andern. Sie erstreckt sich auch über die Schreibart und niemand schreibt so galant als die Franzosen. Sie hat das reizende und verführerische an sich welches gefährlich ist weil man dadurch verleitet wird den Beyfall der Dilettanten höher zu schäzen als der Kenner, und daher kommt auch eine Seichtigkeit bey den Franzosen.",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s06-005",
     "kind": "text",
     "aa": 524,
     "text": "Die Abtheilung des Autors von der Größe der gelehrten Erkenntniß ist schlecht, denn er hat schon vorhero von der Weitläuftigkeit der gelehrten Erkenntniß geredt, und das ist daßelbe. Eine Erkenntniß",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s06-006",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "kann",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "extensive1) nach der Menge des gelehrten Erkenntnißes intensive nach der Wichtigkeit deßelben d. i. die Größe der Erkenntniß nach den Folgen seyn. Die logische Wichtigkeit ist das was",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s06-007",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "die",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 121,
       "raw": "nißen",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "logische Vohkommenheit des Erkenntnißes befördert. Die praktische Vollkommenheit besteht in dem Nuzen der aus den Erkenntgezogen werden kann und diese kann nicht voraus gesezt werden. Doch kann ein Erkenntniß respective hinreichende logische Vollkommenheit haben, das in anderer Absicht doch noch logisch unvollkommen ist. Inhalt beruht in dem Mannigfaltigen, Avas als Theile verbunden ist die ein Ganzes ausmachen. Fruchtbahrkeit beruht auf der",
     "dehyphenated": 6,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s06-008",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "Menge",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 61,
       "raw": "33/*)",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "der Folgen. Man unterscheidet sonst Schwere und Wichtigkeit. Z. E. Es kann sich einer in einem Topf heissen Wassers eher so gar den Finger verbrennen als in einer Braatpfanne wenn die intensive Größe i. e. die Wärme einerley ist.",
     "ocrConf": 39
    },
    {
     "id": "poelitz-s06-009",
     "kind": "text",
     "aa": 524,
     "text": "Große Gegenstände geben nicht immer große Erkenntniße z. E. Gott und so auch wichtige Gegenstände nicht immer wichtige Erkenntniße. Eine Erkenntniß kann comparative groß werden nachdem sich iemand einen Zweck vorgesetzet hat und es kann eben deswegen zu klein werden, weil wir einen großen Zweck gesetzet haben",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "poelitz-s06-010",
     "kind": "text",
     "aa": 524,
     "text": "Ambition ist seinem Stande angemeßene Eigenschaften haben. Mängel können nur relative aufs object erkannt werden, und man darf sich davor",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s06-011",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "nicht",
       "approx": true,
       "unresolved": true
      },
      {
       "p": 34,
       "i": 85
      }
     ],
     "text": "schämen, denn es ist theils nicht möglich, theils nicht nöthig, alles zu erschöpfen. aber Mangel an dem was man sich zu Zwecken vorgesetzet hat,",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s06-012",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "ist",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "ein Fehler. Verstand kommt nicht vor Jahren. Den Werth der Dinge lernt",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s06-013",
     "kind": "text",
     "aa": 524,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "man",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "nicht vor Jahren und zu dem quantum est quod nescimus kommen wir",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s06-014",
     "kind": "text",
     "aa": 524,
     "aaEnd": 525,
     "pages": [
      {
       "p": 525,
       "i": 47
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "erst",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "denn, wenn wir schon vieles durchgegangen sind Ein Erkenntniß kann schwer seyn und nicht wichtig und ein Erkenntniß kann nicht schwer seyn und doch wichtig. Schwere ist also kein Werth der Erkenntniß, aber auch keine Objection wieder den Werth derselben. Wichtigkeit beruht auf der Größe der Folgen. Jemehr Folgen, desto mehr Wichtigkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s07",
   "title": "Von der Wahrheit der gelehrten Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Von der Wahrheit der gelehrten Erkenntniß."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s07-001",
     "kind": "heading",
     "aa": 525,
     "text": "Von der Wahrheit der gelehrten Erkenntniß."
    },
    {
     "id": "poelitz-s07-002",
     "kind": "text",
     "aa": 525,
     "aaEnd": 526,
     "pages": [
      {
       "p": 526,
       "i": 2047
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 142,
       "raw": "34",
       "unresolved": true
      },
      {
       "p": 35,
       "i": 2661
      }
     ],
     "text": "Wir kommen jezt zu einer wesentlichen Bedingung der Volkommenheit eines Erkenntnißes nehmlich zur Wahrheit. Wahrheit ist die Uebereinstimmung der Erkenntniß mit dem Gegenstand, das ist aber bloß eine Erklärung der Wortbedeutung. Wahrheit ist nicht die einzige Volkommenheit auch nicht in aller Absicht der Haupt Vollkommenheit. Freylich eine ganz falsche Erkenntniß ist nichts, denn dadurch erkenne ich kein Object, sie ist also eine unzertrennliche Bedingung der Volkommenheit aber der Grad der Wahrheit ist nicht noth wendig derselbe, sondern der ist verschieden nach den verschiedenen Absichten. In logischer Absicht ist Wahrheit die Haupt volkommenheit. Die Frage, was ist Wahrheit ? heist so viel, man soll ein sicheres, algemeines und in der Anwendung brauchbahres Criterium der Wahrheit angeben. Die Forderung ist wichtig und scheint an den Logiker billig zu seyn. Das materiale Criterium würde in der Uebereinstimmung der Erkenntniß mit dem Object, das formale in der Uebereinstimmung der Erkenntniß mit sich selbst bestehn. — Giebts ein algemeines materiales Criterium der Wahrheit oder nur ein formales ? Antw. Dies ist unmöglich, weil es ein Criterium der Wahrheit ohnangesehn aller Objecte seyn müste und von allem Unterschiede derselben abstrahiren müste. Alle Wahrheit aber besteht darin, daß die Erkenntniß mit dem Object übereinstimmt, auf das sie bezogen wird. Denn das Erkenntniß was vom einen Object wahr ist, kann vom andern falsch seyn. Ein algemeines Merkmal kann also nicht in der Uebereinstimmung des Erkenntnißes mit dem Object bestehn, mithin ist ein algemeines materiales Criterium der Wahrheit nicht möglich. Die Logik kann es ohnedem nicht geben, denn die abstrahirt von aUem Inhalt und sieht blos auf die Form. Also werden nur formale Kriterien der Wahrheit hier können angetroffen werden. Die formalen Kriterien sind vom Saz des Wiederspruchs genommen. Was sich wiederspricht ist falsch. Vom Saz der Identität als seine Folge. Wenn sich das Gegen -theil des Sazes wiederspricht, ist der Saz wahr, das ist aber nicht zureichend. Wiederspricht sich der Saz nicht, so ist er deßwegen nicht allemal wahr. Ist das lezte Criterium, so ist er zwar wahr, aber das findt nicht immer statt. Ein Erkenntniß kann nur möglich heißen, in so fern es sich nicht wiederspricht, also ist in der Möglichkeit auch ein Criterium der Wahrheit, aber noch lange nicht zureichend, denn ich kann nur sagen: Ein Erkenntniß ist möglich aber nicht das Object. Auch Gründlichkeit ist Criterium nach dem Saz des zureichenden Grundes. — Denn die mögliche sind lauter willkührliche Säze, die sich gar nicht wiedersprechen, wo aber auch weiter nichts ist. Das ist auch unzureichend. Das sind logische objektive formale Criterien der Wahrheit. Wir müßen durch Erfahrung uns mit den Objecten bekannt machen und unser Erkenntniß auf sie referiren. Außer diesen objectiven Kriterien haben wir noch ein subjectives, das ist die Einstimmung xmsres Urtheils mit dem Urtheil anderer Menschen. Bey dem Juristen ist das sehr häufig, in der Philosophie aber lächerlich. Doch ganz kann man sich deßen auch nicht entschlagen. Die formalen Kriterien der Logik sind blos conditiones sine quibus non nehmlicli Zusammenhang und Einheit. Die Uebereinstimmung des Erkenntnißes mit sich selbst, nach den algemeinen Gesezen des Verstandes die in der Logik enthalten sind ist auch ein formal Criterium. Die Regeln der Uebereinstimmung des Erkenntnißes mit sich selbst sind",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s07-003",
     "kind": "text",
     "aa": 526,
     "text": "1.) Es muß sich selbst nicht wieder sprechen",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s07-004",
     "kind": "text",
     "aa": 526,
     "text": "2.) Wenn ein Erkenntniß als Grund mit wahren Folgen zusammenhängt, so ist dies auch ein Criterium der Wahrheit.",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s07-005",
     "kind": "text",
     "aa": 526,
     "text": "3.) Zwischen verschiedenen Kenntnißen muß Einheit seyn.",
     "ocrConf": 39
    },
    {
     "id": "poelitz-s07-006",
     "kind": "text",
     "aa": 526,
     "aaEnd": 530,
     "pages": [
      {
       "p": 527,
       "i": 873
      },
      {
       "p": 528,
       "i": 3479
      },
      {
       "p": 529,
       "i": 6132
      },
      {
       "p": 530,
       "i": 8724
      }
     ],
     "ms": [
      {
       "p": 36,
       "i": 1317
      },
      {
       "p": 37,
       "i": 3066,
       "raw": "",
       "inferred": true
      },
      {
       "p": 38,
       "i": 4925
      },
      {
       "p": 39,
       "i": 7088
      },
      {
       "p": 40,
       "i": 9350
      }
     ],
     "text": "Das oppositum der Wahrheit ist Falschheit, und wird diese für Wahrheit gehalten : so ists Irthum. Ein Irthum enthält also Falschheit und einen Schein der Wahrheit. Ein Urtheil welches den Sehern der Wahrheit mit der Wahrheit selbst verwechselt ist ein irriges. Schein ist ein Grund falsche Erkenntniße für wahr zu halten. Der Grund des Scheins liegt immer im Subject. Wenn der Grund des Fürwahrhaltens der im Subject liegt mit dem im Object verwechselt wird; so ist Schein. Jeder der besorgt in Irthum zu stecken, muß prüfen ob er nicht subjeetive Gründe habe, die er fälschlich für objeetive hielt. Wie ist Irthum formaliter möglich ? oder wie ist die Verstandswiedrige Form des Denkens möglich ? Es ist schwer zu begreifen, wie eine Kraft von ihren wesentlichen Gesezen abgehen soll. Der Verstand kann also auch nicht von seinen wesentlichen Gesezen abweichen, und in so fern wäre Irthimi unmöglich. Hätten wir also keine andere Erkenntniß Quelle als den Verstand; so würden wir nie irren, aber der Irthum hat als Urtheil den Sitz im Verstand. Die weil wir aber durch den Verstand kein Object haben würden; so müßen wir noch eine andere Kraft haben, die uns Stof zum Denken giebt, und das ist die Sinnlichkeit, sie würkt nach andern Gesezen, Sinnlichkeit und Verstand handeln aber immer zusammen, welches gleichsam eine dritte diagonale Richtung giebt. Und also schließen wir: Sinnlichkeit ist die Ursache des Scheins und die Quelle aller Irthümer obgleich auch der Verstand einigermaßen Schuld ist, weil er nicht genung aufmerksam und behutsam ist. Aus der Sinnlichkeit selbst entspringen auch keine Irthümer, denn die Sinne urtheilen gar nicht. Man kann auf 2fache Weise des Irthums überhoben seyn, entweder immer durch richtig urtheilen oder durch gar nicht urtheilen. Also sowol im Verstand als in den Sinnen allein liegt nicht der Irthum, sondern im Einfluß der Sinnlichkeit auf den Verstand, indem wir denselben nicht merken. Die Logik kann nicht mehr von der Sinnlichkeit reden, als daß sie sie für den subjectiven, den Verstand für den objectiven Grund der Urtheile hält. Es ist falsch den Grund der Irthümer in die Schranken des Verstandes zu sezen: hier Hegt der Grund der Unwißenheit aber nicht der Irthümer. Schranken ist die notwendige uns anhängende Unwißenheit und Mangel der Erkentniß und nicht Ursache der Irthümer. Die Natur hat uns viele Kenntniße versagt aber den Irthum verursacht sie nicht, aber unsere Neigung zu urtheilen und etwas auszumachen da wo wir begrenzt sind, leitet uns zu Irthümern. Nie kann aber ein Mensch ganz und gar irren, etwas wahres ist immer in seiner Erkenntniß. Aller Irtum ist also partial, denn ein totaler Irthum wäre ein gänzlicher Wiederstreit wieder die Geseze des Verstandes und der Vernunft, denn könnte er gar nicht aus dem Verstände kommen, also kein Urteil seyn, dies geht also gar nicht an. — Ist die Rede vom Criterio der Wahrheit, so kann es hier nur bestehn in der Uebereinstimmung des Erkentnißes mit den Regeln des Verstandes überhaupt. Die Regeln der Uebereinstimmung der Erkenntniße mit sich selbst sind 1.) der3» Saz des Wiederspruchs und 2.) der Saz des zureichenden Grundes die formaliter aber nicht materiahter liinreichend seyn. Erkenntniß das sich wiederspricht ist falsch, aber wenn es sich nicht wiederspricht ist es nicht allemal wahr, das ist ein negatives Criterium. Wenn ein Erkenntniß mit einem wahren Grunde zusammenhengt, und wieder wenn ein Erkenntniß wahre Folgen hat, so ists wahr. Das ist ein positives Criterium. In der Logik haben wir nicht mehrere. Ist das Gegentheil eines Sazes falsch: so ist der Saz gewiß wahr. Aus dem Nicht wiedersprechen entsteht keine Einheit und also kann ich auch nicht auf die Wahrheit schließen es muß noch hinzukommen die Verknüpfung von Grund und Folgen. Vom Saz des zureichenden Grundes als ein Criterium der Wahrheit, aus dem Zusammenhang der Erkenntniße als Grund und Folgen. Der Zusammenhang ist 2fach: a priori ein Zusammenhang als Folge mit den Gründen und a posteriori ein Zusammenhang als Grund mit den Folgen. Ein Erkenntniß ist a priori connectirt, wenn es mit Gründen, und a posteriori wenn es mit Folgen zusammenhengt. Wie kann man von der Wahrheit der Folge auf die Wahrheit des Erkenntnißes als Grundes schließen ? negative wenn eine Folge falsch ist, so ist das Erkenntniß falsch. Unter falsche Folgen mengt man auch gefährliche, was aber gefährlich ist, ist nicht falsch. Daß der Schlus richtig ist sehen wir : weil wenn der Grund wahr wäre so müste die Folge auch wahr seyn. Es kann das Pricipium rationis sufficientis gut gebraucht werden a posteriori auch a priori. Ist der Grund wahr so ist die Folge auch wahr. Aber so kann ich nicht schließen : weil eine Folge wahr ist, so ist auch der Grund wahr, sondern wenn alle Folgen wahr sind ; so ist auch der Grund wahr, denn ein Erkenntniß kann etwas wahres haben, woraus gerade diese eine Folge fließt. Sind aber alle Folgen wahr : so muß das Erkenntniß auch wahr seyn ; denn wäre etwas falsches im Erkenntniß, so müste auch eine falsche Folge statt finden. Also ist hier ein positiver Schluß. Beim negativen Schluß ist ein Vorteil, denn ich darf nur eine falsche Folge herleiten so ist der Saz falsch aber beim positiven habe ich Nachteil nemlich mir Hegt das onus probandi ob. Ascendendo kann ich eigentlich nicht schließen, weil man nicht alle Folgen eines Erkenntnißes kennen kann, dies gibt also nur einen wahrscheinlichen Schluß und findt bey allen unsern hypothesen statt. Directe kann ich aus den Folgen nicht auf die Wahrheit des Sazes schließen; aber wohl indirecte kann ich aus der Falschheit einer Folge die aus einem Saze gezogen ist auf die Wahrheit des Gegenteils des Sazes schließen, denn da jener Saz falsch ist, so muß das Gegenteil wahr seyn. Der Saz des Wiederspruchs dient zum positiven Criterio bei der Noth wendigkeit der Begriffe. — Der Autor redt jezt von der totalen und partialen Falschheit. Ein Erkenntniß kann entweder total oder partial falsch seyn und bisweilen ist uns daran gelegen auch auf die partiale Wahrheit zu attendiren, obgleich eine partial falsche Erkenntniß immer falsch ist, so können doch hier Grade statt finden. Z. E. wer viele Götter glaubt irrt, der aber keinen Gott glanbt irrt noch mehr. Man muß bey Irtümern immer den Schein woraus sie entsprungen entwickeln und erklären, das haben aber die wenigsten Philosophen gethan. sie haben zwar die Irtümer wiederlegt, aber nicht den Schein gezeigt, dadurch sind die Quellen der Irtümer nicht gehoben, durch die man bei andern Fällen wieder irren kann. Man findt bey jeder falschen Erkenntniß etwas wahres, bis weilen ists nicht nothig, das wahre aufzusuchen, bis weilen ists aber gut. — Wenn ein Erkenntniß aufs ganze Object geht, oder wenn ich alles, was im Object ist erkenne, so ist das Erkenntniß total wahr. Wenn man die totale und partiale Wahrheit unterscheiden will: so muß man einen Unterschied machen zwischen Erkenntniß als Erkenntniß und Erkenntniß aufs Object. Ist die Erkenntniß im ersten Fall partial wahr: so ist gewis etwas falsches darin. Im andern Fall kann sie an sich selbst wahr seyn nur wir erkennen nicht durch sie das ganze Object. — Ein Erkenntniß ist tolerabiliter wahr, wenn es partiale Falschheit hat, die aber dem Zweck nicht ganz zu wieder ist. In allen Irtümern muß man aufs tolerabiliter wahre sehen. — Ferner wird unterschieden ein genaues und rohes Erkenntniß. Ein Erkenntniß ist genau, wenn es seinem Object angemeßen ist, oder wenn in Ansehung seines Objects nicht der mindeste Irtum statt findet ; roh ist es wenn Irtümer sein können die aber der Absicht nicht hinderlich sind. Man muß unterscheiden late und stricte determiniren. Anfangs ist es nöthig zuweilen late zu determiniren, besonders in historischen Sachen, aber in Vernunfterkenntnißen muß alles stricte seyn. Etwas rohes genau zu nennen komt auf die Absicht des Erkenntnißes an. Die late Determination last immer einen Raum für den Irthum übrig, der aber doch seine bestirnte Grenzen hat. Irtum findt besonders statt, wenn late Determination für stricte gehalten wird. Vom genauen Erkenntniß kann noch das subtile unterschieden werden. Genauigkeit ist objective Vollkommenheit. Subtilitaet ist subjective Vollkommenheit Ein Erkenntniß ist subtil wenn es einen großen Grad von Aufmerksamkeit und Verstandskraft erfordert, um wahrgenommen zu werden. Man tadelt oft Subtilitäten und nennt sie unnüz. In manchen Dmgen ist Subtilitaet äußerst nothwendig. Wenn man aber mit minderer Aufmerksamkeit und Anstrengung des Verstandes den Zweck hätte erreichen können, so nennt mans unnüze Subtilitaet. Ein Anhänger an Subtilitaeten ist micrologisch. Der unnüzen Subtilitaet ist diametraliter Grobheit entgegengesezt. Ein Erkenntniß ist grob, in so fern es noch Merkmale des gemeinen Verstandes hat. — Alle unsere Erkenntniß ist historisch oder rational. Die erste besizen wir, in so fern sie uns gegeben ist. Subjective rationale Erkenntniße sind solche die aus der Vernunft geschöpft sind, als die mathematische und philosophische, historisch objective, sind die, die ihrer Natur nach nicht a priori erkannt werden können, sondern durch unmittelbare Erfarung, Nachricht, und Belehrung. Bei manchen ist die Vernunft Erkenntniß subjectiv blos historisch, hier betrachten wir sie aber als objectiv rational. Alle Gewißheit der historischen Erkenntniß ist empirisch und der VernunftErkenntniß apodiktisch. Die apodiktische Gewißheit ist das Fürwahrhalten mit dem Bewustsein der Noth wendigkeit, die empirische ist ein Fürwahrhalten mit dem Bewustsein der Zufälligkeit. Apodiktische Wahrheiten aus Begriffen sind dogmata. Apodiktische Wahrheiten aus der Construction der Begrife sind mathemata. Moral ist sehr reichhaltig an Dogmen, und Theologie auch, in so fern sie eine auf Gott angewandte Moral ist. — In der Mathematik giebts also wol apodictische Säze, aber nicht dogmata, die finden nur in der Philosophie statt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 24,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s07-007",
     "kind": "text",
     "aa": 530,
     "text": "Apodiktische Urtheile sind die, deren Wahrheit aus sich selbst i. e. aus inneren Gründen als hinreichend erhellet",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s07-008",
     "kind": "text",
     "aa": 530,
     "text": "Erkenntniße von deren Wahrheit die Gründe in der Erfahrung oder überhaupt Sinnlichkeit liegen sind empirisch",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s07-009",
     "kind": "text",
     "aa": 530,
     "text": "Hypothesen sind solche Urtheile die man für wahr annimmt um daraus die Zulänglichkeit gewißer Folgen zu erklären, aber hier muß man vorsichtig seyn Denn von einer gegebenen Würkung kann man nicht auf eine bestimmte Ursache schließen. Z. E. Man fand in eines Münz-Meisters Kasten in England falsche Münzen, er wurde hingerichtet und nach seinem Tode kam es heraus daß sie ein andrer hereingelegt hatte.",
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s07-010",
     "kind": "text",
     "aa": 530,
     "text": "Vom System.",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s07-011",
     "kind": "text",
     "aa": 530,
     "aaEnd": 531,
     "pages": [
      {
       "p": 531,
       "i": 447
      }
     ],
     "ms": [
      {
       "p": 41,
       "i": 1149
      }
     ],
     "text": "System definirt der Autor als einen Inbegrif von dogmatischen Wahrheiten. Das Object macht keinen Unterschied in den Systemen, denn alles muß systematisch gemacht werden, wenn es soll Warheit seyn. In jedem Systehm muß eine Idee als das Ganze seyn, die die Einteilung und den Zweck bestimmt, und diese Idee macht die systematische Einheit aus. Fehlt diese: so ist ein manigfaltiges System rhapsodistisch verbunden, das ist aber noch nicht tumultuarisch, denn dieses ist dem methodischen entgegengesezt. Etwas kann methodisch seyn, was doch nicht systematisch ist, und das ist ein Kennzeichen des Systems, daß wenn etwas drin fehlt gleich diese Lücke zu bemerken ist, weil wir einen Begrif vom Ganzen haben sollen. Das System ist also ein Probierstein der Vollständigkeit und Richtigkeit. Wahrheit ist Erkenntniß im System und gemeine Erkenntniß ist jede die nicht System ist, sie kann sehr ausgebreitet seyn, ist aber doch nicht Wißenschaft. Man kann also historische und Vernunft Wißenschaft haben. Viele glauben das systematische gehöre nur zum Vortrag, nicht daß die Erkenntniß selbst systematisch entstehn solle. Vortrag betrift nur die Art der Mitteilung der Erkenntniß, aber auch der Ursprung der Erkenntniß ist in vielen Fällen schon systematisch. — Aphorismen sind abgesonderte Säze die nicht Glieder eines Systems sind. — Der Autor redt von ästhetischen und gelehrten Erkenntnißen. Ein Ganzes von Erkenntnißen als Aggregat ist gemeine Erkenntniß. Ein Ganzes von Erkenntnißen als System ist gelehrte Erkenntniß, oder wenn ein Ganzes verbunden ist gemäß einem Princip z. E. Geographie kann Rhapsodie auch System seyn, aber systematisch macht sie der Globus. — Ein falsches Erkenntniß undlrtum sind auch unterschieden, denn Irtum ist erst das Fürwahrhalten der falschen Erkenntniß. Also muß beym Irtum außer dem falschen Erkenntniß noch der Schein hinzukommen. Es giebt viele Scheine wir können aber nur vom logischen reden, der aus der Uebereinstimmung des Erkenntnißes mit der Form entspringt, die Form eines Erkenntnißes kann richtig seyn, bloß der Inhalt ist falsch und dieser logische Schein ist gemeinhin bey unserm Erkenntniß.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 41
    }
   ]
  },
  {
   "id": "s08",
   "title": "Vom vermeidlichen und unvermeidlichen Irthum.",
   "titleSrc": "heading",
   "headings": [
    "Vom vermeidlichen und unvermeidlichen Irthum."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s08-001",
     "kind": "heading",
     "aa": 531,
     "text": "Vom vermeidlichen und unvermeidlichen Irthum."
    },
    {
     "id": "poelitz-s08-002",
     "kind": "text",
     "aa": 531,
     "aaEnd": 532,
     "pages": [
      {
       "p": 532,
       "i": 663
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 522,
       "raw": "&",
       "unresolved": true
      }
     ],
     "text": "Kein Irtum ist an sich unvermeidlich. Unwißenheit aber ist bisweilen unvermeidlich, denn diese beruht nicht auf unserm Willen sondern auf den Schranken unseres Verstandes, doch giebts Fälle wo geurteilt werden muß, und irren wir alsdenn: so ist der Irthum respective unvermeidlich aber absolut nicht. — Eine Falschheit ist offenbar, die dem gemeinen Verstand klar ist, ist sie nicht offenbar, so ist sie verstekt und kann offenbar gemacht werden, und hierauf beruhen alle Wiederlegungen. Den Irtum der offenbar Falschheit hat, nennt man ungereimt, dem aber der ihn für wahr annimmt, ist er so nicht offenbar. — Diese Ungereimtheit bezieht sich auch auf Personen, weil sie dadurch unwürdig gemacht werden in der Klaße der Menschen zu stehen, die nur gemeinen Verstand haben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s08-003",
     "kind": "text",
     "aa": 532,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "41",
       "unresolved": true
      }
     ],
     "text": "Man muß nicht sagen daß die Schranken unsres Verstandes Ursache des Irrthums sind denn erstens wird der Verstand der seine Schranken kennt, nicht weiter gehen, als er kann und denn, so legt man auch Gott die Ursache des Irrthums bey. Die Schranken des Verstandes sind aber Ursachen der Unwißenheit.",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s08-004",
     "kind": "text",
     "aa": 532,
     "text": "Jeder Irrthum hat doch eine partiale Wahrheit und nicht einmal des gestörten sein Urtheil ist ganz falsch, denn der Verstand urtheilt d. h. er äußert daß er hier oder da mit sich selbst übereinstimmt. —",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s08-005",
     "kind": "text",
     "aa": 532,
     "ms": [
      {
       "p": 43,
       "i": 0
      }
     ],
     "text": "Wer einen andern vom Irrthum befreyen will muß ihm ltens speciem evoluere d. h. die Falschheit eines für wahrgehaltenen Urtheils beweisen 2tens speciem exponere den Schein erklären und zeigen, wie er hier durch den Schein hintergangen wurde",
     "dehyphenated": 1,
     "ocrConf": 40
    },
    {
     "id": "poelitz-s08-006",
     "kind": "text",
     "aa": 532,
     "text": "Von der Klarheit der Erkenntniße.",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s08-007",
     "kind": "text",
     "aa": 532,
     "aaEnd": 533,
     "pages": [
      {
       "p": 533,
       "i": 1454
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 1319,
       "raw": "43",
       "unresolved": true
      }
     ],
     "text": "Zur Klarheit gehören Merkmale. Was als Teil einer ganzen möglichen Vorstellung eines Dinges angesehen werden kann ist Merkmal des Dinges z. E. rothe Farbe ist eine Teilvorstellung der ganzen möglichen Vorstellung von einer Rose. Z. E. Die Schädlichkeit der Ausdünstung der Rose ist eine Teilvorstellung nicht der würklich ganzen VorsteUung die wir gemeinhin von ihr haben, (denn wenige glauben es), sondern der möglichen. Merkmale können also durch Zergliederung gefunden werden, in so fern sie Teilvorstellungen von würklichen Begriffen sind, — in so fern sie Teilvorstelungen von möglichen Begrif en sind, aber nur durch die Synthesis indem wir eins zum andern hinzuthun, und hie ist keine Grenze, denn welch Ding kennt man schon ganz. Wir können also auch einen deutlichen Begrif definiren als einen solchen der klare Merkmale hat, oder der in Merkmale kann aufgelöst werden. — Merkmale der Verknüpfung nach oder untereinander werden eingeteilt in coorclinirte und subordinirte. Coordinirt sind sie, wenn jedes als ein unmittelbares Merkmal der Sache vorgestelt wird, subordinirt sind sie, wenn ein Merkmal nur vermittelst des andern am Dinge vorgestelt wird. Jenes heißt Verbindung eines Aggregats, dieses, Verbindung einer Reihe. Die Aggregation der Merkmale macht Totalitaet eines Begrifs aus. Durch die Subordination der Merkmale erkenne ich am Dinge nicht das geringste mehr aber wol durch die aggregation. Durch die Subordinirung der Merkmale erkenne ich bis aufs algemeinste, die Reihe der auf einander subordinirten Merkmale hat Grenzen, (denn ich muß doch einmal aufs Einfachste kommen, was sich nicht weiter erklären last) und die Deutlichkeit durch subordinirte Merkmale ist die Tiefe der Deutlichkeit. — Ein Körper ist ein Ganzes Undurchdringliches und Ausgedehntes, diese Merkmale sind compartes, und coordinirte Merkmale. Und die Reihe dieser coordinirten Merkmale ist unendlich. Ein Erkenntniß wird also 2fach deutlich",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s08-008",
     "kind": "text",
     "aa": 533,
     "text": "1.) durch das Aggregat der coordinirten Merkmale, und hier wächst",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s08-009",
     "kind": "text",
     "aa": 533,
     "text": "die Deutlichkeit extensive durch die Ankunft eines jeden andern",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s08-010",
     "kind": "text",
     "aa": 533,
     "text": "Merkmals.",
     "ocrConf": 83
    },
    {
     "id": "poelitz-s08-011",
     "kind": "text",
     "aa": 533,
     "text": "2.) durch die Reihe der subordinirten Merkmale, und da wächst",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s08-012",
     "kind": "text",
     "aa": 533,
     "text": "die Deutlichkeit intensive. So angenehm das erste ist so trocken",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s08-013",
     "kind": "text",
     "aa": 533,
     "text": "ist das lezte.",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s08-014",
     "kind": "text",
     "aa": 533,
     "aaEnd": 534,
     "pages": [
      {
       "p": 534,
       "i": 1661
      }
     ],
     "ms": [
      {
       "p": 44,
       "i": 1117
      },
      {
       "p": 45,
       "i": 2786
      }
     ],
     "text": "Die Tiefe der Deutlichkeit die hier entsteht dient aber sehr zur Gründlichkeit und Gewißheit unsers Erkenntnißes. Sie gehört zum Eigentümlichen der logischen Vollkommenheit, die erstere zur aesthetischen. Die extensive Deutlichkeit könnte man die ausgebreitete nennen, und diese sucht besonders der Dichter und in dieser Absicht sind Poesien nüzlich zu lesen, denn auch in der Logik kann man die ausgebreitete Deutlichkeit nüzen, sie ist die leichteste und unterhaltendste. Die tiefe Deutlichkeit ist aber eine Sache der Philosophie. Sie wird in metaphysischen Untersuchungen am höchsten getrieben, denn hier fragt man immer nach dem Warum vom Warum. Unsere Erkenntniße werden durch sie sehr trocken aber desto gründlicher. Die Merkmale sind Erkenntniß Gründe, und sind entweder (innere) zum innern Gebrauch, in so fern sie dienen das Mannigfaltige vom Gegenstand selbst abzuleiten oder den Gegenstand an sich selbst zu erklären ; oder (äußere) zum äußern Gebrauch, so ferne sie dienen Gegenstände miteinander zu vergleichen in der Einerleiheit und Verschiedenheit. Dadurch daß wir die gewiße Merkmale der Identitaet der Dinge erkennen machen wir genera, dadurch daß wir die Merkmale der Diversitaet der Dinge erkennen machen wir species, oder finden cliff erentiam specificam; oder ohne Begrif vom genere kann man nicht claßificiren, und ohne Begrif von species kann man nicht specificiren. Die Merkmale die zum innern Gebrauch dienen, sind auch zum äußern gut, aber nicht umgekehrt. Der leztere Gebrauch ist der gangbarste, der erstere der wichtigste. — Die Merkmale werden noch eingeteilt in Ansehung ihrer Beziehung auf das Ding selbst, in bejahende und verneinende. Es sind verneinende und bejahende Begriffe und also müßen auch solche Merkmale seyn. Merkmale sind bejahend wenn ich erkenne was das Ding ist, verneinend wenn ich erkenne, was es nicht ist. In einigen Wißenschaften haben negative Merkmale vielen Wert. Z. E. in der natürlichen Gottesgelartheit. Ist der Gegenstand ein Mangel so ist der Begrif negativ. Wenn wir ein Ding deutlich erkennen, indem wir etwas verneinen: so sind es verneinende Merkmale und bejahen wir etwas so sind es bejahende Merkmale, diese suchen wir eigentlich, denn vermöge derer können wir ein Ding seinem Inhalt nach mit mehrerer Klarheit erkennen. Die verneinende sind Mittel zur Deutlichkeit zu gelangen dadurch, daß ich etwas von einem Dinge ausschließe, sie dienen dazu, uns von Irtümern abzuhalten, und bejahende Merkmale gründen unser Erkenntniß. Z. E. die Seele ist nicht körperlich, dadurch hab ich nicht verstanden was die Seele sei, sondern ich hab nur einen Irtum removirt und dies Verdienst ist eben so wichtig als der bejahenden, denn dies ist conditio sine qua non. Verneinende Merkmale können also nur von Wichtigkeit seyn, wenn sie uns von wichtigen Irtümern abhalten, in die wir leicht kommen können. Alsdenn sind sie unnüz, wenn sie uns von einem unmöglichen Irthum abhalten; die bejahende Merkmale dienen Begrife zu verstehen, verneinende sie nicht mißzuverstehen. Man kann ohne Nachteil in gewißen Dingen unwißend seyn, die nicht zu unserm Zweck gehören. Von der Unwißenheit ist zu unterscheiden das wilkührliche Ignoriren, und dies ist eine der vorzüglichsten Klugheiten im Denken. Z. E. der Richter ignorirt wenn der Kläger den Beklagten allerley Dinge beschuldigt die nicht zur Sache gehören und nur etwa dazu dienen sollen den Richter auf seine Seite zu bringen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 13,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s09",
   "title": "Von wichtigen und unwichtigen Merkmalen.",
   "titleSrc": "heading",
   "headings": [
    "Von wichtigen und unwichtigen Merkmalen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s09-001",
     "kind": "heading",
     "aa": 534,
     "text": "Von wichtigen und unwichtigen Merkmalen."
    },
    {
     "id": "poelitz-s09-002",
     "kind": "text",
     "aa": 534,
     "aaEnd": 536,
     "pages": [
      {
       "p": 535,
       "i": 594
      },
      {
       "p": 536,
       "i": 3202
      }
     ],
     "ms": [
      {
       "p": 46,
       "i": 1186
      },
      {
       "p": 47,
       "i": 3507,
       "raw": "41",
       "inferred": true
      }
     ],
     "text": "Wichtig ist ein Erkenntniß in so fern es ein Grund von großem Gebrauch ist. Es ist also nur relativ, denn was einem wichtig ist, ist es dem andern nicht. (Absolute Wichtigkeit oder Würde hat nichts als Moralitaet und die auf sie gegründete Religion) Einer hat große der andere hat viele Endzwecke. Merkmale haben Wichtigkeit in Ansehung des innern Gebrauchs wenn sie hinreichend sind, um dadurch sehr viel an der Sache selbst zu erkennen, in Ansehung des äußern Gebrauchs, wenn sie dienen ihre Aehnlichkeit mit vielen andern zu erkennen und von vielen andern zu unterscheiden. Jemanden von der Wichtigkeit eines Zwecks zu überzeugen, ist schwer, von der Wichtigkeit der Mittel zu einem Zweck der ihm schon wichtig ist, ist leicht; hier ist nur von der relativen Wichtigkeit der Mittel die Rede. — Ein Erkenntniß ist wichtig wenn es dient ein ander Erkenntniß klar zu machen und zwar formal wichtig. Ists ein Grund von großen Folgen, so ists material wichtig; ists ein Grund von zahlreichen Folgen, so ists fruchtbar. Merkmale sind zureichend, wenn sie in Ansehung der Absicht alles leisten, die Hinlänglichkeit beruht also darauf, daß sie nicht etwas sondern alles leisten welches aber immer relativ ist zu gewißen Zwecken. Merkmale sind noth wendig, die vom Begrif eines Dinges nicht können getrennt werden, die nicht constitutiva sind, sind zufällig, diese nennt man außerwesentlich und jene wesentlich. Eßentia, est complexus notarum neceßariarum interne sufficientium. Wir reden aber hier vom Wesen des Begrif s nicht vom WTesen der Dinge. Bei den notwendigen ist ein Unterscheid, einige kommen einem Dinge zu als Gründe anderer Merkmale eines und ebendeßelben Dinges, und einige kommen einem Dinge zu als Folgen von andern Merkmalen z. E. die 3 Winkel komen dem Triangel zu als rationata der 3 Seiten, diese kommen ihm aber als rationes zu. Notae quae sunt rationes notarum aliarum sunt eßentialia, quae sunt rationata notarum aliarum sunt attributa. Die attributa müßen also immer von den eßentialibus abgeleitet werden, sie gehören auch zum Wesen aber nicht als constitutiva sondern als consectaria. Extraeßentialia sind auch 2fach, entweder gehören sie zur innern Bestimmung denn sinds modi, oder zum äußern Verhältniß und denn sinds relationes. Z. E. Die Gelehrsamkeit ist nota extraeßentialis interna sie gehört zur innern Bestimmung. Z. E. Herr oder Knecht seyn ist nota extraeßentialis externa, sie zeigt nur das äußere Verhältniß an, denn der Mensch ist von Natur weder Herr noch Knecht, es sind also relationes. Das Wesen der Dinge an sich selbst ist realwesen, und das Wesen der Dinge nach Begrifen, die wir von ihnen haben, ist das logische Wesen. Ob wir gleich das real wesen der Dinge nicht einsehn können, so können wir doch das logische Wesen der Dinge leicht erkennen, denn es ist nichts als complexus notarum omnium conceptuum primitive constituentium. Zum logischen Wesen wird also erfordert totalitaet der Merkmale, die dem Ding nicht als Folgen sondern als Gründe zukommen, als constitutiva primitiva. Wollen wir z. E. das logische Wesen des Körpers bestimmen, so dürfen wir üin nicht in der Natur studieren, sondern wir nehmen das was der Begrif den wir von ihm haben in sich fast. Das logische Wesen betrift nichts als die Auflösung des Begrifs in seine Merkmale und die Aufmerksamkeit auf die primitiva, hiedurch sind also unsere Klagen über die Schranke unseres Verstandes eingeschrenkt : daß wir nemlich das real wesen nicht einsehen können denn das geht über unsern Verstand. Das real wesen heist sonst auch Natur, wovon hier in der Logik nicht geredt werden kann.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 13,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s09-003",
     "kind": "text",
     "aa": 536,
     "aaEnd": 537,
     "pages": [
      {
       "p": 537,
       "i": 2192
      }
     ],
     "ms": [
      {
       "p": 48,
       "i": 1937
      }
     ],
     "text": "Der Autor redt jezt von klaren und dunkeln Erkenntnißen. Diese Materie gehört nicht hierher, denn die Logik kann uns nicht Regeln geben von Vorstellungen, deren wir uns gar nicht bewust sind. Die Logik lehrt nicht Erkenntniße klar machen, sondern deutlich, bewust müßen wir aber unseres Erkenntnißes seyn d. h. es muß klar seyn. Dunkel nennt man den Begrif der zu unserm Zweck nicht genung Klarheit hat. Logische Dunkelheit giebts also; die aber von der psychologischen sehr unterschieden ist. Comparative Dunkelheit ists also, womit sich die Logik beschäftigt. Relative dunkel mus man immer werden, wenn man zu einer nicht gemeinen Klarheit heraufsteigen will. Das nennt man auch dunkel, was nicht der gemeine Verstand, wol aber der spekulative einsieht. Es ist besonders, daß der Verstand oft im dunkeln arbeitet; daß dies wahr sey, sehn wir aus dem unschicklichen Ausdruck: ich fühle daß dies oder jenes wahr sey, man weiß aber davon keinen Grund anzugeben. Der Reflexion des Verstandes ist er sich nicht bewust, wol aber des resultats derselben, daß etwas wahr oder falsch sey. Das leztere nennt man Scrupel, man ist sich eines Zweifels Avieder eine Sache bewust, weis aber nicht Grund anzugeben, ist das leztere, so nennt man es Einwurf. Alle Wahrheit und Falschheit liegt im Urtheil, demnach kann sie nicht empfunden werden, mithin ist der Ausdruck ganz falsch. Man muß suchen zu erfahren, was der Verstand im Dunkeln für reflexionen gemacht hat, wodurch er drauf gekommen ist, etwas anzunehmen oder zu verwerfen. Hiezu gehört eine Leitung, nehmlich ich gehe zurück aufs nächste bekannte, und sehe ob nicht mit dem das zusammenhengt was mir unbekannt ist. Diese Handlung nennt man evolution und ist oft sehr schwer sowol bei uns als bei andern. Der Autor redt noch von der Ausführlichkeit. Die Einteilung bezieht sich eigentlich nicht auf Klarheit, sondern auf Deutlichkeit. Alle Deutlichkeit besteht in der Klarheit der Merkmale. Wenn alle Merkmale bis zur Klarheit gekommen sind : so ist mein deutlicher Begrif der Sache adaequat. Die Deutlichkeit durch die coordination der Merkmale ist von anderer Art als die durch Subordination der Merkmale. Das adaequate kann beruhn auf coordination der Merkmale und denn ists completudo, oder auf Subordination der Merkmale, und denn ists profunditaet. Sowol intensive als extensive Deutlichkeit gehören zur Logik.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s10",
   "title": "Von der total und partial Klarheit",
   "titleSrc": "heading",
   "headings": [
    "Von der total und partial Klarheit"
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s10-001",
     "kind": "heading",
     "aa": 537,
     "text": "Von der total und partial Klarheit"
    },
    {
     "id": "poelitz-s10-002",
     "kind": "text",
     "aa": 537,
     "text": "In cognitione quadam notae singulae possunt eße obscurae, vniversae, clarae. Das ist der Fall bei einer undeutlichen Vorstellung. Z. E. wenn man blau und gelb mischt, so entsteht das Grüne. Im Ganzen sind wir uns des Grünen bewust, aber nicht der Teile woraus es besteht. Z. E. wenn man das Wort Recht braucht, so hat man immer einen klaren Begrif , was der aber in sich faßt, das wißen Avenige. Wir haben also eine Menge von Vorstellungen, die uns im Ganzen aber nicht in ihren Teilen klar sind. Die Philosophie muß aber die Klarheit so weit als möglich treiben. Wenn wir den Begrif willkührlich zusammen -sezen, so ist er uns auch in seinen Teilen klar, denn wir wißen die Teile aus welchen er zusammengesezt ist.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s11",
   "title": "Von der Lebhaftigkeit.",
   "titleSrc": "heading",
   "headings": [
    "Von der Lebhaftigkeit."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s11-001",
     "kind": "heading",
     "aa": 537,
     "text": "Von der Lebhaftigkeit."
    },
    {
     "id": "poelitz-s11-002",
     "kind": "text",
     "aa": 537,
     "aaEnd": 539,
     "pages": [
      {
       "p": 538,
       "i": 1317
      },
      {
       "p": 539,
       "i": 3920
      }
     ],
     "ms": [
      {
       "p": 49,
       "i": 318
      },
      {
       "p": 50,
       "i": 1973
      },
      {
       "p": 51,
       "i": 4117
      }
     ],
     "text": "Die logisch größere Klarheit ist Deutlichkeit, die aesthetisch größere Klarheit ist lebhaftigkeit. Es kann seyn Lebhaftigkeit des bloßen Eindrucks oder der Idee, die besteht in der Menge der Merkmale die die Vorstellung ausmachen ; denn jedes Merkmal bringt in uns Bewegung hervor. Gewiße Vorstellungen hengen mit dem Intereße des Gemüts zusammen d. h. sie erleichtern das freie Spiel der Gemütskräfte. Wir tadeln an einem Autor Trockenheit, wenn er sich nicht dem Geschmack accommodirt, Schläfrigkeit wenn er nicht etwas was unsere Aufmerksamkeit reizt vorbringt. Man nennt den auch trocken, der sein Erkenntniß in logischen Begriffen bloß vorträgt. Lebhaftigkeit ist demnach von der logischen Vollkommenheit ganz unterschieden und gehört zur Aesthetik, sie ist gleichsam das vehiculum der Logik, dient dazu sie zu introduciren, doch muß sie mit Behutsamkeit angewandt werden, damit der Effekt der logischen Absicht nicht gehindert wird. Die Lebhaftigkeit ist also extensive und intensive. Der intensive Grad heißt Stärke und Rührung, der extensive dient unserm Begrif mehr Anschauung zu geben oder ihn in concreto deutlich zu machen, sie ist also sehr wichtig. Die Größe der intensiven Lebhaftigkeit beruht bloß auf dem Gefühl, hiedurch erkennen wir aber den Gegenstand nicht beßer, sondern wir sind im ungeschicktesten Zustande Sachen zu erkennen und zu beurteilen. Zur Lebhaftigkeit die auf der Anschauung beruht gehört Einsicht, Gelehrsamkeit und Gründlichkeit. Die extensive kann auch ein gemeiner Kopf hervorbringen. Da wir gesagt haben, die Logik macht Begriffe deutlich, so fragt es sich: auf was für Art sie sie deutlich mache. Von unserm Autor und Wolf wird die Deutlichmachung immer analytisch betrachtet, sie meinen nemlich, sie entstehe bloß durch Zergliederung des Begrifs. Sie entsteht zwar dadurch in Ansehung der Merkmale die wir schon im Begrif dachten, aber in Ansehung der Merkmale die zum Begrif hinzukommen als Theile des ganzen möglichen Begrifs entsteht sie durch Synthesis. Durch die analytische Deutlichmachung wird unser Erkenntniß nicht erweitert, sondern wir lernen das nur beßer unterscheiden, was vorher schon in unserm Erkenntniß enthalten war. Z. E. wenn ich sage: der Körper ist ein ausgedehntes, Undurchdringliches Ding das eine Figur hat, so habe ich zum Begrif des Körpers nichts hinzugesetzt, sondern das nur zergliedert was vorher drinnen lag. Die Logik beschäftigt sich mit der Form der Deutlichkeit so daß der Inhalt derselbe bleibt und das Erkenntniß dem Inhalt nach nicht wächst. Das analytische Verfahren Deutlichkeit zu erzeugen, ist das erste und hauptsächlichste und das was logisch ist. Bisweilen ists auch nöthig seinen Begrif zu erweitern, denn wächst die Deutlichkeit und zwar synthetisch z. E. Tugend ist die Harmonie der Wilkühr mit der Vernunft, das denkt man sich immer unter dem Begrif der Tugend, seze ich noch hinzu, daß sie Vorteile mit sich führt, so habe ich doch dadurch ob es gleich nur eine zufällige Eigenschaft ist, meinen Begrif synthetisch deutlich gemacht. Es ist ein Unterschied der wol muß bemerkt werden zwischen dem Saz: einen deutlichen Begrif machen (daraus entspringt synthetische Deutlichkeit) und einen Begrif deutlich machen (daraus entspringt die analytische Deutlichkeit) beim erstem sind noch keine Merkmale da, ich fange also von den Teüen an, und gehe zum Ganzen und hier erweitere ich mein Erkenntniß dem Inhalt nach ; beim 2ten wächst es nicht dem Inhalt nach, sondern die Form wird nur verändert. Einige wollen behaupten die Deutlichmachung schade der Energie welches aber falsch ist, denn je deutlicher ich etwas einsehe, desto stärker und lebhafter ist es, nur muß die Analysis nicht so weit gehen daß der Gegenstand endlich gar verschwindet. — Der Mathematiker verfärt synthetisch, der Philosoph analytisch. Zur Synthesis gehört die Deutlichmachung der Objecte, zur Analysis die Deutlichmachung der Begriffe. Hier geht das Ganze vor den Teilen, dort die Teile vor dem Ganzen. Bisweilen verfärt man synthetisch, wenn der Begrif auch gegeben ist, wenn man mit den Merkmalen noch nicht zufrieden ist, das findt oft bei Erfarungs Säzen statt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 15,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s11-003",
     "kind": "text",
     "aa": 539,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "so",
       "unresolved": true
      }
     ],
     "text": "Synthesis und Analysis",
     "ocrConf": 26
    },
    {
     "id": "poelitz-s11-004",
     "kind": "text",
     "aa": 539,
     "text": "Analytische Urteile sind erläuternde, synthetische aber erweiternde. Alle analytische sind Urteile a priori; und alle Erfahrungsurteile sind synthetisch.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s11-005",
     "kind": "text",
     "aa": 539,
     "text": "Die synthetischen sind entweder a priori, oder a posteriori. In der Arithmetic und Geometrie sind fast lauter synthetische Begriffe a priori d. h. meine Erkenntniße können hier unabhängig von aller Erfahrung erweitert werden.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s11-006",
     "kind": "text",
     "aa": 539,
     "aaEnd": 540,
     "pages": [
      {
       "p": 540,
       "i": 1659
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "51",
       "unresolved": true
      }
     ],
     "text": "Der Autor redt jezt vom begreifen, und nennt es concipere, welches eigentlich heißt durch Begriffe i. e. durch den Verstand etwas erkennen, denn sonst finden wir zu comprehendere kein deutsches Wort. Doch liegt hieran eben nicht viel. Wir wollen die Grade nehmen nach welchen unser Erkenntniß dem Object nach kann gesteigert werden. Der lste Grad ist — sich etwas vorstellen. Der 2te ist — wahrnehmen, oder mit Bewustsein vorstellen, percipere. Der 3te ist etwas erkennen cognoscere. Der 4te ist, etwas verstehen intelligere, etwas durch den Verstand erkennen vermöge der Begriffe, das könnte man auch concipere nennen, und dies ist von begreifen sehr unterschieden. Concipiren kann ich alles z. E. ein perpetuum mobile obgleich in der Mechanik die Unmöglichkeit deßelben gezeigt wird. Der 5te ist, etwas durch die Vernunft erkennen, perspicere wenn ich den Grund wovon einsehe. Bis zum Verstehen kommen wir in vielen Dingen aber nicht zum Einsehen. Unsere Erkenntniße werden immer weniger in der Zahl je mehr wir sie vervolkommnern wollen. Der 6te Grad ist comprehendere begreifen, etwas in dem Grad durch die Vernunft erkennen, als es zu unserer Absicht hinreichend ist. Erkennt man etwas in dem Grad, daß es zu aller Absicht hinreichend ist, so heist es schlechthin begreifen, und das geht über das menschliche Vermögen. Wenn man etwas lernt muß man nothwendig das was zu der Absicht gehört begreifen, sonst ists vergeblich und aller Gebrauch fällt weg. Ein synthetisch deutlicher Begrif, wo keiner in dem andern enthalten ist und auch keiner fehlt, kann eine Definition genannt werden. Anmerkung. Wir haben einen Vernunft Gebrauch der hinreichend zu seyn scheint etwas zu begreifen wenn eine Sache da ist, wir finden doch nach näherer Untersuchung, daß wir dies a priori nicht eingesehn hätten, und dies ist sehr der Fall bey den Naturforschern. Ich würde also etwas begreifen, was ich a priori hätte bestimmen können. Was ich a priori nicht bestimmen kann, das begreife ich auch nicht, ob ichs gleich erklären kann.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s12",
   "title": "Von der totalen und partialen Deutlichkeit.",
   "titleSrc": "heading",
   "headings": [
    "Von der totalen und partialen Deutlichkeit."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s12-001",
     "kind": "heading",
     "aa": 540,
     "text": "Von der totalen und partialen Deutlichkeit."
    },
    {
     "id": "poelitz-s12-002",
     "kind": "text",
     "aa": 540,
     "ms": [
      {
       "p": 53,
       "i": 101
      }
     ],
     "text": "Die totalitaet der extensiven Deutlichkeit beruht auf der Menge der coordinirten Merkmale, und der intensiven Deutlichkeit auf der Menge der subordinirten Merkmale.",
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s13",
   "title": "Von den completen und adaequaten Begriffen",
   "titleSrc": "heading",
   "headings": [
    "Von den completen und adaequaten Begriffen"
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s13-001",
     "kind": "heading",
     "aa": 540,
     "text": "Von den completen und adaequaten Begriffen"
    },
    {
     "id": "poelitz-s13-002",
     "kind": "text",
     "aa": 540,
     "aaEnd": 541,
     "pages": [
      {
       "p": 541,
       "i": 1675
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 1979,
       "raw": "53",
       "unresolved": true
      }
     ],
     "text": "Ein Begrif ist deutlich wenn seine Merkmale klar sind. Der deutliche Begrif der alle Merkmale enthält die den ganzen Begrif exhauriren ist ein completer Begrif und diese Vollkommenheit heist completudo. Wenn einem deutlichen Begrif kein Merkmal fehlt, so kann noch ein Fehler seyn, daß eins zu viel ist. Die Vollkommenheit so fern ein Begrif nicht zu viel Merkmale hat, heist precision. — Cognitio simul completa et precisa est adaequata. Wolf und seine Anhänger definiren ihn als einen Begrif deßen Merlanale deutlich sind. Dies ist zAvar ein hoher Grad der Deutlichkeit, aber kein fester bestirnter, sondern nur schwankender Begrif, denn ich kann mir von den Merkmalen der Merkmale wieder Merkmale denken u.s.w. Dadurch ist der Begrif aber nicht festgesezt. Die rechte Definition ist: cognitio adaequata objectum si habet omnes notas quae conceptum exhauriunt sed non abundantes. Durch die Precision kann man gewiß werden daß weder zu viel noch zu wenig Merkmale sind. Der Mangel derselben beruht auf Tavtologie, daß ich daßelbe Merkmal 2 mal sage nur auf eine andere Art. Wenn ich z. E. sage: Gott ist unendlich, almächtig etc. etc. so liegt die Almacht schon in dem Begrif der Unendlichkeit. Es giebt Fälle wo Precision einige Dunkelheit verursacht, einem tiefsehenden Kopf ist sie aber desto schäzbarer, denn precise Begriffe sind immer der Sache angemeßen und beim Kunstverständigen ist der Mangel derselben ein großer Fehler. Am Ende dieser Section redt der Autor von den Begriffen eines hellen Kopfes, welche Materie wir auch, ob sie gleich nicht in die Logik gehört, mitnehmen wollen. Unter Helligkeit wird populäre Deutlichkeit mit der scholastischen verbunden, verstanden. Je mehr Precision in einem Begrif ist, desto schulgerechter ist er. Man kann die logische Deutlichkeit auch schulgerecht und die aesthetische populär nennen. Die populäre Deutlichkeit besteht in der Verbindung der Vorstellungen in abstracto mit denen in concreto, und öhiezu gehört viel Talent. Viele Autores sind sehr populär, sie haben aber dabei das schulgerechte versäumt, und man kann sich auf sie nicht verlaßen. Der hellste Kopf ist der, der mit der logischen Vollkommenheit zugleich so deutlich ist, daß er auch vom gemeinsten Verstände kann verstanden Averden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s14",
   "title": "Von der Gewißheit der Erkenntniße.",
   "titleSrc": "heading",
   "headings": [
    "Von der Gewißheit der Erkenntniße."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s14-001",
     "kind": "heading",
     "aa": 541,
     "text": "Von der Gewißheit der Erkenntniße."
    },
    {
     "id": "poelitz-s14-002",
     "kind": "text",
     "aa": 541,
     "text": "Es sind 3 Grade des Fürwahrhaltens, es ist entweder",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s14-003",
     "kind": "text",
     "aa": 541,
     "text": "1.) problematisch, denn heists meinen oder",
     "ocrConf": 54
    },
    {
     "id": "poelitz-s14-004",
     "kind": "text",
     "aa": 541,
     "text": "2.) aßertorisch, wenn ich nicht mein Erkenntniß als für möglich wahr sondern als würklich wahr ansehe, denn heists glauben, oder",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s14-005",
     "kind": "text",
     "aa": 541,
     "text": "3.)apodictisch, wenn es mit dem Begrif der Noth wendigkeit verbunden ist, daß ichs für unwiederruflich wahr erkläre, das heist wißen.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s14-006",
     "kind": "text",
     "aa": 541,
     "text": "Der lste Grad ist Meinen.",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s14-007",
     "kind": "text",
     "aa": 541,
     "text": "Meinen ist ein mit Bewustsein unzureichendes objectives Fürwahrhalten. Von Meinungen fangen wir gröstenteils bei unsern Erkenntnißen an. Bisweilen hat man ein dunkles Vorausahnden, wo wir aber selbst nicht wißen was wir eigentlich denken, obgleich die Sache ein Merkmal der Wahrheit zu haben scheint. Meinen ist ein vorläufiges Urteil und wir können es nicht leicht entbehren, aber man muß sich hüten Meinungen für etwas mehr als Meinungen zu halten, das ist auch wol bei Hypothesen oder phüosophischen Meinungen zu beobachten. In vielen Wißenschaften ists nicht erlaubt zu meinen z. E. in der Metaphysik, Mathematik, Moral etc. etc. In der Physik sind viele Meinungen besonders bei den Ursachen und Begebenheiten. Aus unserer Definition fließt, daß meinen auch ein subjectiv unzureichendes Fürwahrhalten sei, weil wir uns bewust sind, daß es objectiv unzureichend ist.",
     "dehyphenated": 5,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s14-008",
     "kind": "text",
     "aa": 541,
     "text": "Der 2te Grad ist Glauben.",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s14-009",
     "kind": "text",
     "aa": 541,
     "aaEnd": 542,
     "pages": [
      {
       "p": 542,
       "i": 196
      }
     ],
     "text": "Glauben ist ein zwar subjectiv zureichendes aber objectiv unzureichendes Fürwahrhalten. Der Glaube kann theoretisch und praktisch seyn. Der erste gründt sich aufs Zeugniß anderer und ist der historische, der andere aufs Intereße, aber auch auf Vernunft, das ist der moralische Glaube.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "poelitz-s14-010",
     "kind": "text",
     "aa": 542,
     "ms": [
      {
       "p": 54,
       "i": 95
      }
     ],
     "text": "Anmerkung In der Mathematik kann man auch glauben, was ein großer Mann gesagt hat, aber in der Philosophie nicht, weil da nicht solche Mittel sind den Fehltritt zu erkennen",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s14-011",
     "kind": "text",
     "aa": 542,
     "text": "Der3te Grad ist Wißen.",
     "ocrConf": 27
    },
    {
     "id": "poelitz-s14-012",
     "kind": "text",
     "aa": 542,
     "text": "Dem Glauben ist contradistinguirt das Wißen. Man kann noch einen so vernünftigen Glauben haben, und man kann doch nicht sagen, man wiße es. Denn Wißen ist das objectiv zureichende Für wahrhalten, alsdenn erkenne ich etwas aus logischen Gründen. Bisweilen erkenne ich etwas aus praktischen Gründen, glaube es ganz fest, ich weiß es aber noch nicht. Und so sind z. E. viele Religions Wahrheiten.",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s14-013",
     "kind": "text",
     "aa": 542,
     "aaEnd": 544,
     "pages": [
      {
       "p": 543,
       "i": 1808
      },
      {
       "p": 544,
       "i": 4458
      }
     ],
     "ms": [
      {
       "p": 55,
       "i": 1528
      },
      {
       "p": 56,
       "i": 3921
      },
      {
       "p": 57,
       "i": 6119
      }
     ],
     "text": "Die Ueberredung ist das Subjective des Fürwahrhaltens, so fern kein Grund des Objectiven hierin enthalten ist. Das Ueberredtseyn ist also das Bewustseyn eines subjectiven Grundes, bei der Ueberredung finden also keine logische Gründe statt, d. h. die für jeden gültig sind. Ueberzeugung ist der Zustand des Subjects in Avelchem es immöglich ist, daß es das Gegenteil für wahr halte. Hier ist ein subjectiv nothwendiges Fürwahrhalten, also nrnß sie im Object auch ihren Grund haben. Alle Ueberzeugung oder completes Fürwahrhalten ist 2fach, sie last sich entweder miteilen und denn ist sie logisch, oder nicht, und denn beruht sie entweder auf bloß subjectiven Gründen, denn ist sie Ueberredung und aesthetisch, oder auf objectiven und subjectiven practischen Gründen d. h. die den Willen bestimmen und das ist praktischer Glaube. Welches ist der Unterschied der logisch und praktisch hinreichenden Ueberzeugung ? Sind wir von allem Intereße frei, und es ist denn Ueberzeugung bei uns, so ist sie logisch, wir mögen uns von dem Intereße frei gemacht, oder sie mag selbst keines gehabt haben. Man nennt diese Ueberzeugung auch spekulativ, haben wir aber Intereße daran, so ist sie praktisch d. h. sie ist zureichend uns zu etwas zu bestimmen, aber wir können das keinem andern mitteilen, weil Intereße was Subjectives ist, und wir nicht andern daran Intereße beibringen können, woran wir es haben. Praeoccupirt seyn heist einen subjectiven Grund in seinem Urteil haben, der seinen Beifall bestimmt, ehe noch die objectiven Gründe untersucht sind. Sie sind dem Menschen sehr gewöhnlich. Die Lehren der Jugend praeoccupiren uns immer, und wir können uns von ihnen schwer losmachen. Wir werden ferner praeoccupirt, durch Groll, Haß, Feindschaft und Praedilection etc. etc. die sehr stark auf uns einfließen. Beim Fürwahrhalten ist das schwerste zu sehen wovon es herrührt, ob von dem sinnlichen Einfluß oder vom Verstände, und oft unterscheiden wir selbst durchs Gefühl die Ueberredung und Ueberzeugung. Beim Meinen halten Avir das Erkenntniß nicht einmal für subjectiv zureichend, beim Glauben aber. Der praktische Glaube ist oft fester als alles Wißen. Bei lezterm hört man noch nach Gegengründen aber beim praktischen Glauben nicht. Z. E. Der Glaube an Gott und eine andere Welt ist fester als alles Wißen, weil wir dabei soviel Intereße haben. Die praktische Ueberzeugung ist die gröstmöglichste und es sind deren nur einige Säze fähig, die moralisch gewiß heißen, das sind solche die der Grund aller Moralitaet sind, und die mit unserer Gewißenhaftigkeit, wenn wir ihnen folgen, sehr übereinstimmen. Der praktische Glaube ist also eine feste unwandelbare Ueberzeugung und zwar deswegen weil kein Gegner einen moralisch ge wißen Saz wiederlegen kann, obwol Einwürfe dagegen gemacht werden. — Die sinnliche Gewißheit kann eingeteilt werden in die Gewisheit der Sinne und die Gewisheit der Erfarung oder empirische Gewisheit. Die Sinne allein machen nicht die Erfarung aus, sondern das Urteil des Verstandes über die Verbindung der sinnlichen Vorstellungen. Sinne und Verstand sind die Quellen unserer Erkenntniß. Durch die Sinne haben wir Erscheinungen und der Verstand verbindt sie und das Verhältniß derselben oder ihre Einheit ist die Erfahrung, sie ist also die erkannte Verknüpfung der Erscheinungen. Alle Erfahrung enthält also Urteile die aus dem Verstand kommen. Die Logiker haben sich nun beschäftigt die Frage von der Gewisheit der Sinne zu entscheiden. Hier ist nicht die Frage ob in dem Gegenstand den sie uns vorstellen etwas wahres sei, sondern ob sie Objecte haben, oder ob sie uns nur durch Schein hintergehen, denen kein Gegenstand korrespondirt. Diese Frage gehört nicht in die Logik, weil sie sich nicht mit Objecten beschäftigt, sondern in die Metaphysik, wo vom Schein geredt wird. Aber aus der Logik können wir doch schon einsehen, daß weder Falschheit noch Wahrheit in den Sinnen liege, weil sie gar nicht urteilen. Hier kommt vielmehr die Frage von der Gewisheit vor. Ein empirisch Erkenntniß ist ein Erkenntniß durch den Verstand über Objecte die durch Sinnlichkeit vorgestelt «erden. Alle empirische Gewisheit geht also auf das Verhältniß der sinnlichen Vorstellungen und hiebei müßen wir es bewenden laßen. Das sinnliche Erkenntniß wird unterschieden vom rationalen Erkenntniß wenn sein Object ein Object der Vernunft ist, wie Moral, die ist also materialiter rational. Logik allein ist aber materialiter und formaliter rational, so fern sie den Verstand zu ihrem Object hat. Unsere Erkenntniße können Gegenstände der Erfahrung betrefen und die Gewisheit kann doch empirisch und rational seyn. (Die empirische Gewisheit ist entweder originarie, wenn ich etwas aus eigner Erfahrung, oder derivative empirisch wenn ich etwas aus fremder Erfahrung weis). Die Vernunft sezt zu aller Gewisheit Notwendigkeit welches die Erfahrung nicht thun kann z. E. daß eine Sache nüzlich sei lehrt die Erfahrung, daß sie aber nothwendig nüzlich seyn müße lehrt die Vernunft allein. Von allem können wir nicht rationale Gewisheit haben, wo wir sie aber haben können, müßen wir sie der empirischen weit vorziehn. Wir müßen aber nicht rationale Gewisheit mit der empirischen verwechseln, rational geAvis ist man von dem, was man auch ohne Erfahrung a priori eingesehn haben würde. Rationale Gewisheit ist wieder 2fach, denn da unsere Erkenntniße entweder aus Begriffen sind, discursiv, oder aus der Construction der Begriffe, intuitiv, so ist die Gewisheit auch discursiv und intuitiv. Die intuitive ist mathematisch, die discursive, philosophisch. Die empirische Gewisheit ist aßertorisch, die rationale apodiktisch d. h. die Gewisheit einer Erkenntniß die mit dem Bewustsein der Noth wendigkeit verbunden ist. Die mathematische Gewisheit heist noch evident, weil der Gegenstand in der Anschauung dargestelt wird. Ein intuitives Erkenntniß ist klärer als ein discursives. Gewis sind sie beide gleich aber nicht gleich klar, d. h. die Art ihrer Gewißheit ist verschieden. Der Autor redt noch von den modis des Fürwahrhaltens. Modus ist der Unterschied in der Art wie ich was für wahr halte. Die modi sind folgende: 1.) Es ist etwas angenommen wenn eine Sache Beifall bekömmt ohne zu wißen ob sie gewiß sei.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 18,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s14-014",
     "kind": "text",
     "aa": 544,
     "text": "2.) Es ist etwas ausgemacht wenn es angenommen ist weil seine Wahrheit bekannt ist.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s14-015",
     "kind": "text",
     "aa": 544,
     "text": "3.) Es ist etwas unläugbar, wenns unmöglich ist, es für falsch zu halten.",
     "ocrConf": 35
    },
    {
     "id": "poelitz-s14-016",
     "kind": "text",
     "aa": 544,
     "aaEnd": 545,
     "pages": [
      {
       "p": 545,
       "i": 455
      }
     ],
     "ms": [
      {
       "p": 58,
       "i": 2033
      }
     ],
     "text": "Dieses sind die 3 Grade des Beifalls. Wenn etwas ausgemacht ist: so wird vorausgesezt, daß es objectiv und subjectiv wahr sey. Ungezweifelte Säze nennt man nicht ausgemacht, weil niemalen controversen dagegen gemacht sind z. E. der pythagorische Lehrsaz. Ein Erkenntniß kann gründlich seyn auf verschiedene Weise z. E. ein gründlich moralischer Vortrag ist von anderer Art als der mathematische. Gründlichkeit bedeutet nicht eine logische Vollständigkeit der Gewisheit, sondern ein Erkenntniß ist gründlich wenn es die Vollkommenheit hat, die der Natur und dem Zweck der Erkenntniß angemeßen ist. Gewiße Erkenntniße sind seicht, die man mit einem andern Namen nennt: superficielle, obgleich diese Ausdrücke sehr unterschieden sind. Das erste zeigt den Mangel der Tiefe der Erkenntniß an. Was sich dem gemeinen Verstand gleich offerirt ist oftmals dem Zweck auch recht sehr angemeßen. Wenn aber ein Erkenntniß über die zweckmäßige Vollkommenheit für einen gemeinen Verstand herüber gehen soll und man doch nur das nimt was dem gemeinenVerstand gleich deutlich ist, so ist es superfiziell. — Der Autor redt jezt vom Beifall und Zurückhalten des Beifals, oder Aufschub unsers Urteils. Die Ausdrücke, ich gebe Beifall, ich verwerfe, ich halte meinen Beifall zurük, zeigen an, daß bei uns etwas willkührliches ist in unserm Urteil, indem wir etwas für wahr halten, weil wir es wollen, oder kurz : es fragt sich: ob das Wollen einen Einfluß auf unser Urteil hat. Unmittelbar hat der Wille keinen Einflus auf unsern Verstand, wie z. E. bey mathematischen Wahrheiten, die doch wahr bleiben, wenn sie uns auch zuwieder sind, aber auf den Gebrauch unseres Verstandes hat er einen Einfluß, ihn zur Nachforschung einer Wahrheit anzutreiben, oder davon abzuhalten, aber nicht auf die Ueberzeugung deßelben, da die leztere aber sehr von dem Gebrauch unseres Verstandes abhengt : so hat der Wille indirecte auch einen Einfluß auf die Ueberzeugung; hätte der Wille aber einen solchen Einfluß, uns davon zu überzeugen, was wir gerne wünschten, so würden wir uns beständig Schimären von einem glücklichen Zustande machen, und sie auch immer für wahr halten. Er kann aber nicht wieder überzeugende Beweise von Dingen, die wir nicht gerne wünschen streiten die behalten doch immer recht. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s14-017",
     "kind": "text",
     "aa": 545,
     "text": "De suspensione judicii",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s14-018",
     "kind": "text",
     "aa": 545,
     "aaEnd": 547,
     "pages": [
      {
       "p": 546,
       "i": 590
      },
      {
       "p": 547,
       "i": 3211
      }
     ],
     "ms": [
      {
       "p": 59,
       "i": 1819
      },
      {
       "p": null,
       "i": 3734,
       "raw": "m",
       "unresolved": true
      }
     ],
     "text": "Wenn wir bisweilen können Fehler in unserm Erkenntniß finden, so können wir von ohngefehr darauf kommen durch Vergleichung mit anderen Erkenntnißen, auf unser Urteil mißtrauisch zu werden, woraus suspensio judicii nostri entstellt, welches der Vorsaz ist ein vorläufiges Urteil nicht ein bestimmendes werden zu laßen. Ich urteile definitiv, wenn ich gerad zu bestimme: das ist wahr; oder problematisch, wenn ich äußere ich habe Gründe etwas für wahr anzunehmen die aber doch noch nicht zureichend sind. Das Bewustseyn, daß mein Urteil problematisch sey, ist suspensio judicn. Die suspensio kann in doppelter Absicht geschehen 1.) um die Gründe des bestimmenden Urteils aufzusuchen, suspensio judicii indagatoria, 2.) oder niemals zu urteilen welches renunciatio judicii ist. Die erste heist kritische die andere skeptische Suspension. — Man kann auch Beifall fordern und gebieten, d. h. der andere kann, wenn er meine Gründe gesehen, sie nicht, ohne in Ungereimtheit zu verfallen, verwerfen z. E. der Mathematiker. Der Philosoph hat das Glük nicht, seine Säze sind auch apodiktisch gewiß, aber nicht evident. Bei philosophischen Erkenntnißen kann man nur seinen Beifall bedingt geben, ob sich alles in der Folge so werde mainteniren. Denn oft scheint ein Saz ganz richtig zu seyn, im Gebrauch aber, d. h. wenn man Folgen daraus zieht, finden sich Schwürigkeiten. Man muß immer untersuchen wie ein Erkenntniß sich im Ganzen seines Gebrauchs verhalte, dazu gehört immer eine Vollendung und eine Uebersicht des Ganzen. Den Beifall zurückhalten nach Maximen kann nur eine geübte Urteils Kraft, und sie findt sich nur bei zunehmendem Alter. Unser Verstand ist begierig sich zu erweitern und sich durch Urteile zu bereichern, daher es kommt, daß man eine Sache die den Schein der Wahrheit hat für wahr hält, und diese Art zu urteilen ist bei lebhaften Köpfen schwer zu entfernen, wenn er aber durch Schaden klug geworden, so wird er vorsichtig seyn seinen Beifal nicht schnell zu geben, wenn er ihn oft hat zurücknehmen müßen. In dubio etwas laßen ist noch anders als suspensio judicii, denn hier habe ich ein Intereße, bei jenem ists aber nicht immer dem Zweck gemäß zu entscheiden ob etwas wahr sey oder nicht. Urteile werden eingeteilt in vorläufige, (praevia antecedentia) oder bestimmende (determinantia consequentia) jene gehn vor, diese folgen auf die Untersuchung. Die vorläufige Urteile sind sehr nötig bei Wißenschaften daß man sagen kann die Logik werde durch die Abhandelung derselben sehr bereichert, wenn es nur nicht zu tief für sie wäre, denn es müßen mir hier die Objecte gegeben seyn, über welche ich vorläufig oder bestimmend urteilen kann. Der Mensch urteilt gleich, so wenig data er auch hat, und macht gleichsam eine Probe, ob sein Urteil richtig seyn wird oder nicht, welches einen starken Einfluß auf den Menschen hat, so daß ihn oft das bestimmende mit allen seinen Gründen nicht vertreiben kann. Z. E. Fast bei den mehresten Büchern urteilt man nach den Titeln, hört man der Autor sei ein verdienter Mann, so seze ich in das Buch mehr Zutrauen, und ist die Materie neu, so hab ich noch mehr Recht zu einem günstigen Urteil und solche Urteile sind nötig beim Meditiren, wenn ich mir den Plan mache, obgleich oft nachher noch vieles wegkommen muß. Da diese Urteile dienen den Verstand zu verschiedenen Mitteln zu dirigieren, so sind sie in der Absicht sehr nöthig. Bestimmende Urteile sind die, die zum Beifall zureichend sind. Die vorläufigen Urteile kann man judicia praevia nennen und wir müßen sie von den Vorurteilen unterscheiden. Man kann sich durch vorläufige Urteile Maximen denken zu Untersuchung einer Sache. Man könnte diese Urteile auch anticipationes nennen, weil man seine Urteile anticipirt, ehe man das Bestimmende noch hat. Sie sind das Fürwahrhalten aus mit Bewustseyn unzureichenden Gründen, die uns anreizen sollen, die zureichende zu suchen. Man nennt sie auch sonst Philosophie des gemeinen Verstandes denn er ist ihrer allein fähig, Aveil er sich in tiefere Untersuchungen nicht einlaßen kann.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s15",
   "title": "Von den Vorurteilen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Vorurteilen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s15-001",
     "kind": "heading",
     "aa": 547,
     "text": "Von den Vorurteilen."
    },
    {
     "id": "poelitz-s15-002",
     "kind": "text",
     "aa": 547,
     "text": "Bemerkung. Es ist ein Unterschied zwischen untersuchen und überlegen. Viele Säze können ohne Untersuchung angenommen werden z. E. daß das Ganze gleich sey allen Teilen zusammengenommen, aber überlegen muß ich es doch, d. h. ich muß mir bewust seyn was das ist was ich denke. Ueberlegung ist eine Zusammenhaltung des Erkenntnißes mit der Erkenntnißkraft, woraus sie entspringen soll. Z. E. wenn jemand sagt : zwischen 2 Puncten ist nur eine gerade Linie möglich; so entsteht eine Operation in meinem Gemüt, wodurch ich dieses mit der Anschauung (d. h. hier mit der Erkenntnißkraft) vergleiche und zusammenhalte, ich probire es also gleichsam in Gedanken, und dies geschieht immer wenn wir auch das Erkenntniß nicht untersuchen. Wenn ein Erkenntniß aus einem Erkenntnißvermögen entspringt das in Ansehung des Objects ungültig ist, so muß das Erkenntniß entweder abgewiesen werden, oder das Urteil muß suspendirt werden, und man muß unterscheiden welche Erkenntnißkraft hier einen Einfluß hat, und diese Unterscheidung ist auch da nöthig, wo keine Untersuchung statt findt. Wir nehmen auch Urteile ohne Ueberlegung an; und denn sind es Vorurteile.",
     "dehyphenated": 6,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s15-003",
     "kind": "text",
     "aa": 547,
     "aaEnd": 548,
     "pages": [
      {
       "p": 548,
       "i": 325
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 270,
       "raw": "61",
       "unresolved": true
      }
     ],
     "text": "Was Vorurteile sind ? Vorurteile können entweder im subjeetiven oder objeetiven Verstände genommen werden. Ein Vorurteil in sensu subjeetivo ist (kurz zu sagen) der Hang zur Ueberredung. Die Ueberredung ist das Fürwahrhalten aus blos subjeetiven Ursachen die fälschlich für objeetiv gehalten werden. Das Vorurteil entspringt entweder aus Nachahmung, Gewohnheit oder Neigung. Das Vorurteil in sensu objectivo ist der Schein in so fern er zum Principium der Wahrheit gemacht wird.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s15-004",
     "kind": "text",
     "aa": 548,
     "aaEnd": 549,
     "pages": [
      {
       "p": 549,
       "i": 2305
      }
     ],
     "ms": [
      {
       "p": 60,
       "i": 0
      },
      {
       "p": 61,
       "i": 466
      },
      {
       "p": 62,
       "i": 2496,
       "raw": "68",
       "inferred": true
      }
     ],
     "text": "Vorurteile sind vorläufige Urteile, so fern sie als Grundsäze angenommen werden. Man muß unterscheiden Vorurteil und die falsche Erkenntniß die aus dem Vorurteil entspringt. Ein Erkenntniß das in Ansehung besonderer Gegenstände was bestimmt ist kein Vorurteil. Zuweilen sind sie wahre vorläufige Urteile z. E. Jung gewohnt alt gethan, aber das ist unrecht wenn sie als Grundsäze angenommen werden, und das kommt daher, weil subjective Gründe fälschlich für objectiv gehalten werden, und dies kommt daher weil wir nicht überlegt haben. Ein jedes Vorurteil ist ein principium irriger Urteile. Aus Vorurteilen entspringen also nicht Vorurtheile sondern irrige Urteile, und sie sind immer Quellen derselben z. E. der Apfel fält nicht weit vom Stam, dies kann man immer als ein Vorurteil annehmen, weil es nicht ein algemeiner Saz ist und für ein principium gilt. Bei irrigen Urteüen muß man immer aufs Vorurteil sehen, woraus sie entsprungen sind. — Die 3 Quellen der Vorurteile sind, Nachahmung, Gewohnheit und Neigung. — Nachahmung hat einen algemeinen Einfluß. Der Verstand sucht sich zu erweitern und thuts durch Nachahmung besonders beim Kinde und gemeinen Mann. Sie ist ein starker Grund das für wahr zu halten, was andere dafür ausgeben. — Gewohnheit ist Leichtigkeit etwas zu thun und die ist gut, aber Angewohnheit nicht, das ist die Nothwendigkeit etwas so zu thun, wie mans vorhin gethan hat. Gewohnheit würkt stärker bei Alten als bei Jungen, weil diese noch lange nicht genung gelebt haben sich etwas habituel zu machen. Ist ein Erkenntniß das zur Gewohnheit geworden, noch dazu aus Nachahmung entstanden, so ist ein solcher Mensch völlig incurabel. Vorurteile der Gewohnheit können nur durch Länge ausgerottet werden, wenn der Verstand nach und nach durch Gegengründe aufgehalten und verzögert wird. — Man könnte beim Vorurteil der Nachahmung den activen und paßiven Gebrauch unserer Vernunft unterscheiden, denn Vorurteil aus Nachahmung ist nichts anders als der Hang zum paßiven Gebrauch unserer Vernunft. Ich handele activ, wenn ich etwas aus den Naturregeln unserer Vernunft herleite. Das erste ist contradictio in adjecto und sie ist doch bei sehr vielen Menschen ausgebreitet. Vernunft ist ein thätiges principium das nichts vom andern entlehnen kann, auch nicht einmal von der Erfahrung, wenn wir die reine Vernunft brauchen wollen. Es kommt aber von der Faulheit der Menschen her, daß sie lieber in anderer Fußstapfen treten, als ihre Kräfte selbst anstrengen wollen. Z. E. Die Gewißheit einer künftigen Welt ist ein objectiv vernünftiges, bei den mehresten aber ein historisches Erkenntniß. — Einige Mittel wodurch wir uns zur Nachahmung gewönen können sind : 1.) Formeln, Regeln deren Ausdrükung zum Muster der Nachahmung",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s15-005",
     "kind": "text",
     "aa": 549,
     "text": "dient. Formeln sind Erleichterungen wenn etwas verwikelt ist, und",
     "ocrConf": 53
    },
    {
     "id": "poelitz-s15-006",
     "kind": "text",
     "aa": 549,
     "text": "der erleuchtetste Kopf sucht solche zu erfinden. 2.) Spruch, deßen Ausdruk eine Abgemeßenheit seines prägnanten",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s15-007",
     "kind": "text",
     "aa": 549,
     "text": "Sinnes hat, dicta sind Aussprüche die zu einer Regel oder zum",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s15-008",
     "kind": "text",
     "aa": 549,
     "text": "Gesez dienen. Sprüche, dicta, müßen immer von andern entlehnet",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s15-009",
     "kind": "text",
     "aa": 549,
     "text": "werden, und denen müßen wir eine gewiße Unfehlbarkeit zuschreiben, weil wirs annehmen, weil ers sagt. 3.) Sentenzen, Säze die ihr Ansehn haben, weil sie sich durch den",
     "dehyphenated": 1,
     "ocrConf": 50
    },
    {
     "id": "poelitz-s15-010",
     "kind": "text",
     "aa": 549,
     "text": "Nachdruk der Gedanken von selbst empfehlen. (Sentenzen könnte",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s15-011",
     "kind": "text",
     "aa": 549,
     "text": "man auf deutsch Sinnsprüche nennen.) Sie sind von bon mots",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s15-012",
     "kind": "text",
     "aa": 549,
     "text": "unterschieden, welches Säze sind, die sich mehr durch Wiz als",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s15-013",
     "kind": "text",
     "aa": 549,
     "text": "reife Urteilskraft empfehlen. Sentenzen erhalten sich Jahrhunderte,",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s15-014",
     "kind": "text",
     "aa": 549,
     "text": "weil ein Urteil, das ein ursprünglich Produkt der Vernunft ist, und",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s15-015",
     "kind": "text",
     "aa": 549,
     "text": "wo in einem concisen Ausdruk viel Sinn umfaßt wird, sich sehr",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s15-016",
     "kind": "text",
     "aa": 549,
     "text": "empfiehlt.",
     "ocrConf": 76
    },
    {
     "id": "poelitz-s15-017",
     "kind": "text",
     "aa": 549,
     "text": "Canones (Canones auf deutsch Lehr Sprüche und Proverbia",
     "ocrConf": 27
    },
    {
     "id": "poelitz-s15-018",
     "kind": "text",
     "aa": 549,
     "text": "Denksprüche.) sind algemeine Lehrsprüche die Wißenschaften",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s15-019",
     "kind": "text",
     "aa": 549,
     "text": "zur Grundlage dienen, sie können auch sentenziös ausgedrukt",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s15-020",
     "kind": "text",
     "aa": 549,
     "text": "werden, und denn gefallen sie mehr.",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s15-021",
     "kind": "text",
     "aa": 549,
     "text": "Proverbia, Sprüclrwörter sind die gebräuchlichen Ausdrüke für",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s15-022",
     "kind": "text",
     "aa": 549,
     "text": "ein populär Urteil des gemeinen Verstandes. Sie enthalten den",
     "ocrConf": 58
    },
    {
     "id": "poelitz-s15-023",
     "kind": "text",
     "aa": 549,
     "aaEnd": 550,
     "pages": [
      {
       "p": 550,
       "i": 659
      }
     ],
     "ms": [
      {
       "p": 63,
       "i": 379
      }
     ],
     "text": "currenten Wiz des gemeinen Verstandes und dienen dazu den Verstand deßelben erkennen zu geben. Sie sind provinzial da die Sentenzen algemein sind. Obgleich sie auch zu Sentenzen und Kanonen für den gemeinsten Pöbel dienen, daher sie auch bei Leuten von feinerer Erziehung nicht anzutrefen sind. Vorurteile werden dadurch gegründet, wenn man seine Weisheit in Sentenzen und Sprüchwörtern sezt, darnach sich richtet und niemals selbst zu denken unternimmt. Der Autor redt jezt vom Vorurteil des Ansehns. Das Ansehn ist vielfältig, der Zeiten, der Person, der Menge, des Zeitalters und eines ganzen Volks. Hieraus entstehen Vorurteile oder hier laufen die Sinne dem Verstand vor, deswegen sie auch praejudicia heißen, das Urteil ist gleichsam vorher beschloßen vor die Menge, Person etc. Diese gründen sich auf die Propension, (Hang) anderer Urteile beizufallen, und ein solches Urteil aus Nachahmung könnte man ein knechtisches nennen. Es giebt auch Vorurteile aus Eigenliebe, wenn man gegen das, was ein Produkt des eigenen Verstandes ist, von Praedilection eingenommen ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s16",
   "title": "Vom Ansehn der Person.",
   "titleSrc": "heading",
   "headings": [
    "Vom Ansehn der Person."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s16-001",
     "kind": "heading",
     "aa": 550,
     "text": "Vom Ansehn der Person."
    },
    {
     "id": "poelitz-s16-002",
     "kind": "text",
     "aa": 550,
     "ms": [
      {
       "p": 64,
       "i": 1041
      }
     ],
     "text": "In historischen Sachen muß es die Grundlage unserer Urteile seyn, denn bei Dingen die auf Erfahrung und Zeugniße beruhn, können wir mit unserm Verstand nicht alles umfaßen, sondern wir müßen unser Erkenntniß auf das Ansehn anderer Personen bauen, welches aber nicht ein praejudicium ist. Wenn Erkenntniße aber so beschaffen sind, daß sie nur mit dem Verstand allein können ausgemacht werden, so ist das Ansehn anderer kein ächter Grund des Fürwahrhaltens, wenn es aber ein Grund ist, der eine propension in unserm Verstand zu der Sache macht ; so ist es praejudicium auctoritatis. Vernunftwahrheiten gelten anonymisch d. h. man muß nicht fragen, wer sie gesagt hat, sondern was er gesagt hat. Das Ansehn der Person hat mit unserer Neigung was übereinstimmendes, weil es dient unserer Eitelkeit indirecte zu schmeicheln. Wenn ein Mann als gelehrt erhoben wird: so preist man ihn deswegen hoch, weil alle ihn hochpreisen, und sie sind hierin gleich, weil sie gegen den großen Mann nichts sind, und der Unterschied, den die Verehrer unter sich haben für unbedeutend gerechnet wird. Citationen gelehrter Männer können bei Vernunft Erkenntnißen zu keinem Beweiß dienen, ob sie gleich ein gewißes Gewicht haben unsern Glauben zu verstärken, es ist ein äußeres Criterium der Wahrheit die algemeine Uebereinstimmung des menschlichen Verstandes Bei metaphysischen Säzen geht dies aber nicht an, aber wol bei der jurisprudence daher man sehn kann wie unsicher das juristische Urteil ist. Die Ursache ist hier wol die Mannigfaltigkeit der Fälle, die sich unmöglich in einem Gesez bestimmen noch vorhersehn laßen.",
     "dehyphenated": 4,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s17",
   "title": "Vom Ansehn der Menge.",
   "titleSrc": "heading",
   "headings": [
    "Vom Ansehn der Menge."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s17-001",
     "kind": "heading",
     "aa": 550,
     "text": "Vom Ansehn der Menge."
    },
    {
     "id": "poelitz-s17-002",
     "kind": "text",
     "aa": 550,
     "aaEnd": 551,
     "pages": [
      {
       "p": 551,
       "i": 203
      }
     ],
     "text": "Dazu ist der Pöbel geneigt denn die Verdienste, Fähigkeiten etc. einer Person kann er nicht beurteilen er hält sich daher an die Menge. Er sezt voraus was alle Menschen sagen ist wahr, aber auch nur bei historischen Dingen, in Religionssachen, wo er intereßirt ist, überlast er dies Gelehrten.",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "poelitz-s17-003",
     "kind": "text",
     "aa": 551,
     "ms": [
      {
       "p": 65,
       "i": 961
      }
     ],
     "text": "Vorurteile dürfen nicht immer falsch seyn, sondern wenn ich eine Sache aus Vorurteil annehme, so kann sie doch wahr seyn, aber daß ich sie mit Vorurteil annehme ist logisch schädlich. — In Ansehung der Erkenntniß Art ists besonders, daß der Unwißende ein Vorurteil für die Gelehrsamkeit hat, indem er dem Gelehrten selbst da mehr Kenntniß zutraut, wo er nicht mehr haben kann. Z. E. vom Zustand nach dem Tode. Der Gelehrte hat wieder ein Vorurteil für den gemeinen Verstand, indem er ein Mistrauen für die Gelehrsamkeit bekommt und zwar denn, wenn alle seine Bemühungen ihm nicht gehörige Genungthuung verschaffen, sie findt sich also bei dem, der den Kreis der Wißenschaften schon ziemlich durchgelaufen und bei solchen Spekulationen die ihre Begriffe nicht sinnlich machen können, und deren Fundamente schwankend sind (das geschieht bei Metaphysik und Moral) er glaubt also doch den Schlüßel hievon wo zu finden, und sucht ihn beim gemeinen Verstand, welches aber trüglich ist, denn wo das kultivirte Vermögen nichts ausricht, da wird das unkultivirte gewis nichts ausrichten. Die Berufung auf den gesunden Menschen Verstand ist nichts anders als die Berufung auf die Menge, denn auf gesunden Menschen Verstand macht jeder Anspruch. In der Metaphysik geht dies gar nicht an, denn da kann kern Fall in concreto dargestelt werden, aber in der Moral ists besonders, daß alle Fälle in concreto können gegeben werden, daher hier der gemeine Verstand oft richtiger urteilt als der spekulative. Z. E. der juristische Saz : casum sentit dominus ist dem spekulativen Verstände richtig aber der gemeine Verstand sieht wol ein, daß dies falsch sei, ob er gleich nicht die Ursache davon angeben kann. Ueberhaupt ist der praktische Gebrauch der Vernunft mehr nach dem Gebrauch der gemeinen als der spekulativen Vernunft und alle Regeln der Sittenlehre in abstracto wenn sie nicht in concreto erwogen werden, sind fehlerhaft. Dem Vorurteil des Ansehns ist entgegengesezt der logische Egoismus. Dieser ist das principium der Indifferenz in Ansehung aller fremden Urteile als Criterien der Wahr-",
     "dehyphenated": 6,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s17-004",
     "kind": "table",
     "aa": 551,
     "text": "",
     "lines": [
      "fy _ m",
      "«i heit. Die Uebereinstimmung der Urteile anderer reicht zwar lang nicht"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "poelitz-s17-005",
     "kind": "text",
     "aa": 551,
     "aaEnd": 553,
     "pages": [
      {
       "p": 552,
       "i": 360
      },
      {
       "p": 553,
       "i": 3002
      }
     ],
     "ms": [
      {
       "p": 66,
       "i": 695
      },
      {
       "p": 67,
       "i": 2335,
       "raw": "6T",
       "inferred": true
      }
     ],
     "text": "zu, ist aber doch ein criterium, weil mein Erkenntniß durch subjective Gründe sehr verfälscht werden kann, die beim andern nicht statt finden, ob er gleich andere hat. Es ist nur eine Wißenschaft, wo wir ohne diesen Fehler zu begehn, uns blos auf unser Urteil verlaßen können, das ist Mathematik. Allein im phüosophischen und discur-* 3 *. *• ** ^ 5> \\> <x >$ siven Erkenntniß können wir die Beistimmung anderer nicht immer als entbehrlich ansehn, weil die Versehn die hier so leicht sind, bei intuitiven Erkenntnißen unmöglich sind. Die Vorsehung hat gewolt, daß wir unsere Urteile dem Gerichtshofe der gemeinschaftlichen Menschenvernunft d. h. in so fern viele darin übereinstimmen, übergeben sollen. Zwar hat die Eitelkeit auch einen Einfluß darinn, aber wir werden doch dadurch belehrt. Das Vorurteil des Altertums ist eines der wichtigsten, es entsteht, weil sich die Alten sozusagen in kerne neue Form schmieden wollen. Hiebei ist auch noch etwas algemeineres was auch junge Leute betrefen kann, der Grund davon ist die Meinung daß alles mit der Zeit schlechter werde, welches aber eine nichtige Klage ist. Anmerkung Eins ist in der Natur, was unvergänglich, unveränderlich und ein unergründlich Geheimniß ist nemlich, daß die species immer dieselben bleiben, obgleich die individua sich verändern. Die Betrachtung der subjectiven Ursachen des Gebrauchs des Verstandes und der Vernunft ist die Erklärung wie es zugeht, daß man sich seines Verstandes so und nicht anders bediene. Die Logik zeigt, wie wir uns deßelben bedienen sollen, nicht wie wir uns deßelben bedienen. Die Logik sieht nicht darauf ob der Verstand corrumpirt sey oder nicht. Die Lehre der Vorurteile gehört demnach eigentlich nicht in die Logik sondern in die Anthropologie. Man nimmt sie hier aber mit, weil sie sehr nüzlich seyn kann im Gebrauch der logischen Anweisungen. Es ist eine besondere Erscheinung, daß wir ein Ding zu sehr achten, wenn wir vorher geglaubt haben, es sey der Achtung nicht werth, so wie umgekehrt, wenn man von einem Dinge viel erwartet, und es nachher nicht so findt, man es weit mehr herabsezt als es verdient. — Das Vorurteil des Altertums entspringt aus einem oben angeführten Wahn, daß sich alles verschlechtere. — Bisweilen entspringt das Vorurteil gerade aus einer entgegengesezten Ursache. Diese Vorurtheile entpringen öfters aus einem nachteiligen Urteil über daßelbe. Es ist da Bewunderung mit Verwunderung vermischt, die leztere entsteht, wenn man etwas da findt wo man es nicht sucht, und Bewunderung ist die algemeine Empfindung, wenn wir etwas sehr groß finden. Indeßen geschiehts oft daß die Verwunderung in eine Bewunderung ausartet, ob sie gleich von verschiedener Art sind, welches auch hier statt findt. Von den Alten haben wir gröstenteils ein nachteiliges Urteil nach den Zeitumständen in welchen sie waren. Finden wir etwas bei ihnen was wir nicht gesucht ; so verwundern wir uns darüber, oder wir halten sie für klüger als sie würklich sind, woraus die Bewunderung entsteht und denn wirds Vorurteil — Noch eine Ursache des Vorurteils des Altertums ist diese : die Kenntniß die wir von den Alten haben ist bei uns Gelehrsamkeit die sich immer eine Achtung bewürkt, daraus entspringt Hang und Gunst gegen die Alten selbst, damit das Studium das man darauf gewandt doch nicht leer sey.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s17-006",
     "kind": "text",
     "aa": 553,
     "ms": [
      {
       "p": 68,
       "i": 751
      }
     ],
     "text": "Der Saz der von den Alten herkommt kann an sich sehr gemein und schlecht seyn, er zeigt aber doch Gelehrsamkeit und Belesenheit. Dies geht so gar auf die Entfernung des Orts, wenn z. E. jemand anführt, was Confucius gesagt; so giebt dies dem Saz selbst eine Gunst. Wir haben einen Grund vom Altertum günstig zu urteilen, ohne daß darunter ein Vorurteil steke, aber es ist nur ein Grund zur gemäßigten Achtung die wir nur zu oft überschreiten. Nemlich da die Zeit gleichsam alles siebet und sich das nur erhält was innern Werth hat, so haben wir auch nur die besten Schriften der Alten, und wir irren uns wenn wir glauben, sie hätten aUe so geschrieben. Sie haben keinen absoluten Werth, sondern nur einen relativen, auch die schlechten die verloren gegangen; besonders bei den Philosophen macht man diesen relativen Wert zu einem absolut hohen, so ist das Vorurteil unsere Nachkommen werden denken, wir wären Riesen am Verstand, und in eben demselben Verhältniß stehen wir mit dem Altertum. Dies bringt uns dahin uns der paßiven Leitung des Altertums anzuvertrauen oder den Gebrauch unserer Talente zu vernachläßigen. — Zuweilen fiel auch das Altertum und das Vorurteil zu Gunsten deßelben nehmlich im Anfang dieses Jahrhunderts, da sich der berühmte Fontenelle auf die Seite der Neuern schlug. Im Vortrag sind und bleiben sie zwar unsere Lehrer, und sind in der Absicht beizubehalten aber nicht als tresoriers der Wißenschaften und Erkenntniße. Was sie lehren konnten ist schon lange heraus gesucht, und noch in sie zurückzukehren, ist Ableitung des Verstandes von der rechten Bahn. — Eine 3te Ursache des Vorurteils der Alten ist die Dankbarkeit, daß sie uns die Bahn zu vielen Kenntnißen gebrochen und es scheint billig zu seyn ihnen dafür Ehre zu erweisen, wo wir als denn oft das Maaß überschreiten. Hiezu kommt noch das Bewustseyn daß wir auch einmal alt werden. Die lezte Ursache des Vorurteils der Alten ist der Neid gegen die Zeitgenoßen. Der es mit den Neuern nicht aufnehmen kann, hält sie gegen die Alten geringschäzig, daß sie sich nicht über ihn erheben können. Alles dieses giebt zu erkennen auf welcher Illusion die Hochpreisung der Alten beruht.",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s17-007",
     "kind": "text",
     "aa": 554,
     "ms": [
      {
       "p": 69,
       "i": 179
      }
     ],
     "text": "Anmerkung Unter allem Wißen bläht keines mehr auf, als das Philologische, weil hier eine gewiße Algemeinheit des Erkennt -nißes ist, ob sie gleich nur historisch ist. Philosophie schlägt den Stolz nieder und bringt noch eher Misologie zu wege. Die Philologen bringen aber den Verstand nicht weiter.",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s17-008",
     "kind": "text",
     "aa": 554,
     "text": "Das Vorurteil der Neuigkeit ist das Gegenteil des vorigen. Ist die Erkenntniß eines Menschen einer Erweiterung fähig, so ist natürlich, daß wir auf Neuere mehr Zutrauen sezen können als auf die Alten, wir sind in vorteilhaften Umständen, — das ist ein richtiges vorläufiges Urteil aber noch nicht zureichend. Zum Vorurteil kommt noch der Hang gegen Neue hinzu, weil wir mit der Denkungsart unsers Zeitalters gestimmt sind, nicht weil der Verstand es einsieht, dies Vorurteil wird aber auch sehr verdächtig gemacht, weil man immer glauben muß, daß den Autor ein Neuerungstrieb angetrieben (wie es oft wirklich geschieht) einer längst bewiesenen Wahrheit einen Sehern entgegenzusezen, der sich auch wol eine Zeitlang erhält. — Das Vorurteil des angenommenen Lehrgebäudes ist noch zu merken. Ein Lehrgebäude ist die Herleitung vieler Kenntniße aus einem prineipio, dafür bekommen wir praedilection, da wir manche Fehler übersehn. Die Praedilection ist gut, wenn das Lehrgebäude nicht auf falschen prineipien beruht. Anmerkung Die Säze sind nicht allemal darum falsch, weil sie aus einem Vorurteil kommen, oft sind sie richtig nur der modus acquirendi (wie die Juristen sagen) ist illegal, ich habe dadurch dem falschen Erkenntniß einen breiten Weg gebahnt, und die Art ist öfters wichtiger als das Erkenntniß selbst.",
     "dehyphenated": 3,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s18",
   "title": "Von der wahrscheinlichen Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Von der wahrscheinlichen Erkenntniß."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s18-001",
     "kind": "heading",
     "aa": 554,
     "text": "Von der wahrscheinlichen Erkenntniß."
    },
    {
     "id": "poelitz-s18-002",
     "kind": "text",
     "aa": 554,
     "aaEnd": 556,
     "pages": [
      {
       "p": 555,
       "i": 805
      },
      {
       "p": 556,
       "i": 3426
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 85,
       "raw": "?o",
       "unresolved": true
      },
      {
       "p": null,
       "i": 1804,
       "raw": "»i",
       "unresolved": true
      },
      {
       "p": 73,
       "i": 3416
      },
      {
       "p": null,
       "i": 5068,
       "raw": "n",
       "unresolved": true
      }
     ],
     "text": "Es ist hier wie in allen Logiken ein Fehler im Ausdruck. Statt daß es heißen sollte, die Erkenntniß des Wahrscheinlichen, so heist es die wahrscheinliche Erkenntniß. Mein Erkenntniß von einem wahrscheinlichen Object kann gewis und richtig seyn, nur halte ich durch daßelbe dasObject für wahrscheinlich. Die Erkenntniß des Wahrscheinlichen ist gut, aber die Logik davon kann keine reine seyn, weil da schon Objeete sind. Das auf deßen Seite mehr Gründe des Geschehens sind als auf der andern, das halte ich für wahrscheinlich. Alle Wahrscheinlichkeit kann man bruchweise ausdrüken, der Nenner ist die Zahl aller möglichen Fälle, der Zehler die Zahl der würklichen Fälle. Wahrscheinlichkeit ist also das Fürwahrhalten aus unzureichenden Gründen, die aber zu den zureichenden ein größer Verhältniß haben als die Gründe des Gegenteils. Praktisch hinreichend sind auch wahrscheinliche Erkenntniße aber logisch nicht. Scheinbarkeit ist die Gültigkeit einer Erkenntniß aus unzureichenden Gründen, so fem sie größer sind als die Gründe des Gegenteils. Hier vergleiche ich sie also nicht mit den zureichenden Gründen, sondern nur mit den Gründen des Gegenteils, ich weis also nicht wieviel zur Gewisheit wie beim wahrscheinlichen Erkenntniß gehört. Scheinbarkeit giebt ein vorläufiges, Wahrscheinlichkeit ein bestimmendes aber nicht apodiktisches Urteil. Man kann Wahrscheinlichkeit auch mathematisch ausdrücken: nehmlich: sie ist mehr als die Hälfte der Gewisheit. Die Hälfte der Gewisheit ist zweifelhaft. — Der Grad des Fürwahrhaltens bey der Wahrscheinlichkeit ist objectiv gültig, bey der Scheinbarkeit subjectiv gültig. Bei jeder Wahrscheinlichkeit muß immer ein Maaßstab nehmlich die Gewisheit da seyn, die ist aber bei verschiedenen Menschen verschieden, einer fordert mehr dazu als der andere. WTenn die Gründe des Fürwahrhaltens homogen sind: so kommt der Grad des Fürwahrhaltens auf die Zahl derselben an, oder sie müßen denn numerirt werden ; sind sie heterogen : so müßen sie ponderirt werden. Mit den ersten wird man bald fertig, da sind sie sich alle einig, aber mit den leztern ists schwerer. Die Wahrscheinlichkeit last sich also in philosophischen Erkennt nißen nicht schäzen, aber wol in der Mathematik. Man hat viel von einer logica probabüium geredt, die ist aber aus eben angeführtern Grund nicht möglich. Bei der Wahrscheinlichkeit abstrahirt man aus dem gewöhnlichen Verfahren die Verstandesregeln und nimmt sie als logische Regeln an, sie sind aber nichts als von der gewöhnlichen praxis des Verstandes abstrahirte Regeln in algemeine Formeln gebracht. Die Erkenntniß des Wahrscheinlichen muß gewis seyn d. h. ich muß gewis seyn daß es wahrscheinlich ist. Einem bloß wahrscheinlichen Erkenntniß muß man nie folgen, aber es kann uns antreiben, den Gründen nachzuforschen. Ein Gegengrund des Fürwahrhaltens ist ein Hindernis. Subjectives Hindernis ist Zweifel. Objectives Hindernis ist Einwurf. Zweifel ist noch kein Grund etwas für falsch zu halten, sondern nur ein Grund der Suspension des Urteils. Im gemeinen Redegebrauch wird dubium (objectiver Grund), und dubitatio (subjectiver Grund), oft verwechselt. Ein subjectiver Grund des Zweifels ist nur für mich, aber der objective muß für jeden andern gelten. — Skrupel ist ein Hinderniß des Fürwahrhaltens, wo ich nicht weiß ob es objectiv oder subjectiv ist, ists blos subjectiv, so ists nicht gültig, weils bloßer Schein ist, wißen wir daß es bloß subjectiv ist, so kann es uns auch nicht betrügen. Die Ursache ist Neigung, Gewohnheit etc. etc. Finden wir z. E. ein neues Urteil und haben zugleich die stärksten Gründe dafür : so können wir uns doch nicht drin schicken, denn ist es Skrupel, sehe ich aber ein, daß hier was subjectives bei mir ist, so hört es auf Skrupel zu seyn, alsdenn habe ich den Schein entdekt. In vielen Fällen können wir es aber nicht so weit bringen, weil wir nicht immer unser Erkenntniß mit dem Object vergleichen können, sondern die Erkenntniße untereinander. Bei jedem Skrupel ist ein Hindernis im Subjekt, nur ich will wißen ob es blos im Subject ist. Ein Skrupel kann nicht eher weggenommen werden, bis er zum Einwurf gemacht ist, und es ist ein groß Talent, Skrupel die aufstoßen könnten, vorher zu errathen. Durch Einwürfe will ich nicht wiederlegen, sondern nur die Gewisheit schwächen, und die Gewisheit wird durch sie zur Deutlichkeit und Volständigkeit gebracht. Ein jeder muß also Einwürfe hören und keiner kann von einer Sache gewiß seyn, wenn nicht Gegengründe excitirt sind, wodurch bestimmt werden kann, wieweit man noch von der Gewisheit entfernt ist, oder wie nahe man derselben sey. — Ein Knote (Einwurf) kann abgehauen werden, wenn man zeigt daß man nicht nöthig habe, sich mit Auflösung deßelben abzugeben. Z. E. wie man das Böse in der Welt mit der Weisheit Gottes zusammen räumen könne. — Man muß unterscheiden: einen Einwurf beantworten und auf ihn antworten. — ■ Auch auf die Einwürfe gegen die ungegründetsten Meinungen wird der, der sie hat, was antworten können, sonst wird er lächerlich, ob er sie aber wird beantworten können, ist eine andere Frage. Beantworten heist zeigen, wie der Skrupel entstanden sei. Geschieht dies nicht, so ist er abgewiesen, aber nicht aufgehoben. Im lateinischen sind die Wörter verisimilitudo und probabilitas, das erste wäre beßer durch scheinbar zu übersezen im Gegensaze des Wahren und es betrift nur das Erkenntniß. Das Object ist entweder probabel oder improbabel.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 16,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s18-003",
     "kind": "text",
     "aa": 556,
     "aaEnd": 557,
     "pages": [
      {
       "p": 557,
       "i": 471
      }
     ],
     "text": "Wir kommen jezt zu einem Grundsaz des Zweifels in Beziehung auf den Grundsaz des Behauptens. Derjenige der bei seiner Erkenntniß die Behauptung zur Absicht zu wälen hat ist ein Dogmatiker. Der aber die Maxime hat Erkenntniß in der Absicht zu behandeln, daß man sie ungewiß macht und die Unmöglichkeit zeigt zur Gewisheit zu gelangen ist ein Skeptiker. CTKayacTÖoü heist so viel als indagare. Die ersten Skeptiker untersuchten also die Sachen und suspendirten so lang ihr Urteil. Skepticismus war Maxime der Suspension des Urteils um der Untersuchung willen.",
     "joined": [
      "layout"
     ],
     "ocrConf": 42
    },
    {
     "id": "poelitz-s18-004",
     "kind": "text",
     "aa": 557,
     "ms": [
      {
       "p": 74,
       "i": 727
      },
      {
       "p": 75,
       "i": 2358
      }
     ],
     "text": "Was ist Maxime ? Wenn objective Regeln subjectiv werden d. h. wenn wir darnach handeln; so ist das Maxime. Maxime zu zweifeln ist was anders als Einsicht des Grundes an einer Sache zu zweifeln, ich zweifle an meiner Aufmerksamkeit, ob ich alles werde erfüllt haben, was der Verstand von mir fordert, ehe ich ein bestimmendes Urteil fällen soll. Man hat Maximen der dogmatischen, der skeptischen Denkart. Das mittlere ist die kritische Denkart, d. h. man behandelt etwas eine Zeitlang problematisch, bis man zur völligen Gewisheit drin kommt. Die erste Methode ist den Wißenschaften sein- schädlich weil sie allen Irtümern freien Lauf läßt, wenn sie nur einigen Schein haben. Der Skepticism ist auch nicht gut, denn es kann dochwas wahres im Erkenntniß seyn, das kritische Verfahren ist das beste, es entspringt aus Mißtrauen auf unser Urteil besonders wenn man besorgt, daß subjective Gründe fälschlich für objectiv gehalten werden, und da dies oft geschieht : so hat diese Methode immer Grund für sich. Die skeptische Methode ist der kritischen sehr nüzlich, nemlich wenn man eine Wahrheit angenommen hat : so sezt man sich an die Stelle des Gegners, und sucht alle möglichen Gründe herbei, seinen Saz umzuwerfen und so die Wahrheit zu finden. Oft kommts daß man auf die entgegengesezte Meinung gebracht wird. — Der absolute und brutale Skepticism sagt: es ist kein zureichend criterium der Wahrheit, um das sagen zu können muß er einen Maaßstab haben. Der Maaßstab muß das zureichende criterium der Wahrheit seyn, also hat er doch Wahrheit ; er wiederspricht sich also. In Mathematik und Physik ist Skepticism nicht nötig, denn in der leztern weist die Erfarung uns gleich zurecht. In der Mathematik ohnedem nicht wegen der Evidenz. Aber die Erkenntniß die nicht mathematisch oder empirisch also philosophisch ist hat den Skepticism veranlast. Die reine Philosophie in so fern sie spekulativ ist heist Metaphysik. Von da ging man weiter, und sezte sogar Mistrauen in die Erfarung und auch in Mathematik, wozu man sich der lächerlichsten Gründe bediente. Die Skeptiker hatten den Saz : Es ist so sehr alles ungewis, daß es ungewiß ist, ob alles ungewiß sey. Dies vernichtet den Skepticism selbst. Sie nannten es KO0apKTiKÖv (Reinigungsmittel). Die ersten Skeptiker müßen einsichtsvolle Männer gewesen seyn, denn den Wiederstreit der Vernunft entdecken, die Gründe die wieder einen Saz können angeführt werden auszuspähen ist schwer.",
     "dehyphenated": 6,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s19",
   "title": "Von den Hypothesen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Hypothesen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s19-001",
     "kind": "heading",
     "aa": 558,
     "text": "Von den Hypothesen."
    },
    {
     "id": "poelitz-s19-002",
     "kind": "text",
     "aa": 558,
     "ms": [
      {
       "p": 76,
       "i": 1529,
       "raw": "T6",
       "inferred": true
      }
     ],
     "text": "Der Autor definirt sie durch eine Meinung die philosophisch ist d. h. die gebraucht wird, Erscheinungen in der Welt zu erklären. Meinung erklärt nicht wie Hypothese. Eigentlich ist sie ein Für wahrhalten des Urteils von der Wahrheit eines Grundes, um der Zulänglichkeit der Folgen willen, oder wenn man etwas darum als wahr annimmt, weil daraus aus gegebenen Folgen ein zureichender Grund kann gezogen werden, oder das Fürwahrhalten einer Voraussezung als Grundes. Ist etwas mittelbar gewis, so ists als Folge wahr; wird etwas für wahr gehalten als ein Grund, so ist das Hypothese. Ich nehme eine Sache würklich an ohne Beweis, ist sie ein zureichender Grund daraus Folgen herzuleiten, so wird sie wegen der Folgen als wahr angenommen und nicht deswegen, weil sie selbst die Folge eines wahren Erkenntnißes ist. Wenn die Folge wahr, so ist der Grund nicht allemal wahr, denn zu derselben Folge können mehrere Gründe seyn. Alles Für wahrhalten einer Hypothese grün dt sich darauf daß es als Grund hinreichend ist, andere Erkenntniße als Folgen draus zu erklären. Wir schließen also liier von der Wahrheit der Folge auf die Wahrheit des Grundes. Oben ist angemerkt, daß dies zwar ein Criterium der Wahrheit sey, aber doch nicht hinreichend. Nur denn ist dieser Schlus völlig richtig, wenn alle mögliche Folgen wahr sind, denn wäre was falsches im Grunde, so müste auch eine falsche Folge draus gezogen werden können. Weil wir aber alle möglichen Folgen nie bestimmen können, so giebt dies auch keinen sichern Schluß. Wir sehn also daß Hypothesen immer Hypothesen bleiben, denn ich kann einen kleinen Umstand vergeßen haben, den die Erfahrung gezeigt und der sich vielleicht aus der Hypothese nicht würde erklären laßen, und wir eigentlich nie zur völligen Gewisheit derselben kommen können obgleich es einen Grund der Wahrscheinlichkeit giebt. Wenn aber alle Folgen die mir vorgekommen sind, sich aus der Hypothese erklären laßen : so wächst der Hypothesen Wahrscheinlichkeit und es ist kein Grund warum ich nicht annehmen soll, daß sich alle möglichen Folgen werden erklären laßen; — ich schließe daher alle möglichen Folgen sind wahr, sie werden also für wahr angenommen nicht apodictisch, sondern per inductionem. Etwas muß in einer Hypothese doch apodictisch seyn nehmlich: a.) Die Möglichkeit der Voraussezung z. E. Wenn wir zur Erklärung",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s19-003",
     "kind": "text",
     "aa": 558,
     "text": "der Erdbeben und feuerspeienden Berge ein unterirdisch Feuer",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s19-004",
     "kind": "text",
     "aa": 558,
     "text": "annehmen, so muß doch möglich seyn, daß es ein solches Feuer",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s19-005",
     "kind": "text",
     "aa": 559,
     "text": "könne, oder es muß doch wenigstens ein hiziger Körper seyn.",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s19-006",
     "kind": "text",
     "aa": 559,
     "text": "aber ein anderer die Erde ist ein Thier, wo die innere Säfte",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s19-007",
     "kind": "text",
     "aa": 559,
     "text": "Wärme bewirken, so ist das nicht möglich. Würklichkeiten kann",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s19-008",
     "kind": "text",
     "aa": 559,
     "text": "erdichten aber nicht Möglichkeiten die müßen gewiß seyn der",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s19-009",
     "kind": "text",
     "aa": 559,
     "text": "Probierstein der Möglichkeit ist die Erfarung.",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s19-010",
     "kind": "text",
     "aa": 559,
     "ms": [
      {
       "p": 77,
       "i": 224,
       "raw": "**",
       "inferred": true
      }
     ],
     "text": "Consequenz. Aus dem angenommenen Grunde muß die Folge richtig fließen, sonst ists eine Chimäre, wird die Einheit erfordert d. h. es muß nur eine Hypothese seyn. Muß ich schon viele nehmen, so verliert sie viel von ihrer Wahrscheinlichkeit. Denn ich schließe : je mehr Folgen aus einer Hypothese fließen desto wahrscheinlicher ist sie, je weniger, desto unwahrscheinlicher z. E. Tycho de Brahes Hypothese: daß sich die Sonne, Planeten und Fixsterne um die Erde bewegten reichte zu vielen Erscheinungen nicht zu, er muste also immer mehrere annehmen. Denn ists schon zu errathen, daß dies der ächte Grund nicht sey. Das Kopernikanische System ist hingegen eine Hypothese aus der sich alles was bisher vorgefallen ist, hat erklären laßen. Man braucht hier nicht hypotheses subsidiarias, das sind solche die",
     "dehyphenated": 5,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s19-011",
     "kind": "text",
     "aa": 559,
     "text": "angenommen werden, um einer schon angenommenen zu Hülfe zu",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s19-012",
     "kind": "text",
     "aa": 559,
     "text": "kommen. In der Metaphysik sind Hypothesen etwas ungereimtes.",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s19-013",
     "kind": "text",
     "aa": 559,
     "text": "Nirgends sind aber mehr H3q:>othesen als in der Naturlehre: sie",
     "ocrConf": 35
    },
    {
     "id": "poelitz-s19-014",
     "kind": "text",
     "aa": 559,
     "text": "gelten auch bei den Commentatoren der klaßischen Autoren.",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s19-015",
     "kind": "text",
     "aa": 559,
     "text": "Der Autor redt jezt von der Ueberredung. Wir haben schon oben",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s19-016",
     "kind": "text",
     "aa": 559,
     "ms": [
      {
       "p": 78,
       "i": 767,
       "raw": "*8",
       "inferred": true
      }
     ],
     "text": "davon erwähnt. Sie ist das Für wahrhalten aus unzureichenden Gründen, von denen man nicht weiß, ob sie objectiv oder subjectiv sind. Wir glauben etwas gewis, und halten es doch nur für Ueberredung, weil wir von den Gründen nicht Rechenschaft geben können. Viele Erkenntniße fangen an daß wir uns ihrer nur bewust sind als Ueberredung. Auf Ueberredung folgt Ueber legung d. h. wir sehen zu welcher Erkenntnißkraft das Erkenntniß gehöre und darauf folgt Untersuchung d. h. wir sehen ob die Gründe in Ansehung des Objects zureichend oder unzureichend sind bei vielen bleibts bei der Ueberredung, bei einigen kommts zur Ueberlegung, bei wenigen zur Untersuchung. Die Ueberredungen gehn oft vor der Ueberzeugung, aber bei denen sind sie selten die wißen was zur Gewisheit gehört, die werden",
     "dehyphenated": 3,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s19-017",
     "kind": "text",
     "aa": 559,
     "text": "Ueberzeugung und Ueberlegung nicht leicht verwechseln. Der wird am",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s19-018",
     "kind": "text",
     "aa": 559,
     "text": "wenigsten überredt, der oft betrogen ist. Das sich so leicht überreden",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s19-019",
     "kind": "text",
     "aa": 559,
     "aaEnd": 560,
     "pages": [
      {
       "p": 560,
       "i": 67
      }
     ],
     "text": "laßen und können zeigt eine seichte Denkungs Art an. Man muß daher nicht jeden tadeln, der nicht so geschwind einer Sache Beifall giebt als ein anderer.",
     "joined": [
      "layout"
     ],
     "ocrConf": 47
    },
    {
     "id": "poelitz-s19-020",
     "kind": "text",
     "aa": 560,
     "text": "Von Wißenschaften ist auch schon oben geredt. Ein Inbegrif von Erkenntnißen als Aggregat ist gemeine Erkenntniß und ein Inbegrif von Erkenntnißen als System ist Wißenschaft. Jede Wißenschaft muß dem Prinzip gemäs a priori eingeteilt werden können, ich muß wißen wie viele Teile zu der Wißenschaft gehören noch ehe sie abgehandelt ist. Das System beruht auf einer Idee des Ganzen. Bei Erkenntnißen als Aggregat sind die Teile vorher, beim System aber die Idee des Ganzen, die die gröste Schwierigkeit macht, und man kann mit Recht sagen, daß Metaphysik eine Rhapsodie sey.",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s19-021",
     "kind": "text",
     "aa": 560,
     "text": "Der Autor redt noch von Kunst. Wißen und Können sind verschiedene Vollkommenheiten. Ich kann etwas gleich können, so bald ich es weiß, aber einiges kann ich doch nicht, ob ichs gleich weiß. Es gehört dazu Uebung und das ist Kunst. Der Autor thut nicht Recht daß er unter Wißenschaft nur Vernunft Erkenntniß versteht, auch historische Erkenntniße können wißenschaftlich seyn.",
     "dehyphenated": 1,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s20",
   "title": "Von der Gewisheit.",
   "titleSrc": "heading",
   "headings": [
    "Von der Gewisheit."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s20-001",
     "kind": "heading",
     "aa": 560,
     "text": "Von der Gewisheit."
    },
    {
     "id": "poelitz-s20-002",
     "kind": "text",
     "aa": 560,
     "ms": [
      {
       "p": 79,
       "i": 292
      }
     ],
     "text": "Sie ist empirisch oder apodiktisch. Die Erfahrung ist entweder unsere eigene oder anderer, die wir durch Zeugniße haben. Die empirische Gewisheit ist also Gewisheit durch eigene Erfahrung oder durch das Zeugnis anderer. Dies ist die historische Gewisheit und man kann oft dem Zeugnis anderer mehr glauben als seiner eigenen Erfahrung. Der Autor redt von mathematischer Gewisheit des ersten und zweiten Ranges, er hat aber nicht Recht, alle mathematische Gewisheit ist von einerley Art. Vernunftgewisheit ist jederzeit apodiktisch, oder es findet absolute Noth wendigkeit da statt. Die intuitive Gewisheit oder durch die Construction der Begriffe ist die mathematische, die diskursive, die philosophische. Der Autor redt jezt von willkürlichen Wahrheiten, welches ein besonderer Ausdruck ist wir wollen Heber sagen, willkührliehe Säze oder positiones sind wilUüihrliche Regeln des Gebrauchs. Es ist aber weiter nichts als ein Imperativ, es ist ein Gebot meiner Vernunft nicht eine Erkenntniß Sache selbst. Der Autor definirt sie als solche Wahrheiten, die durch unsere Willkühr wahr sind, dazu rechnet er die Hypothesen, die werden willkührhch angenommen aber nicht als Wahrheiten, sondern dies wird erst durch unwillkührliche Folgen bestimmt.",
     "dehyphenated": 4,
     "ocrConf": 48
    }
   ]
  },
  {
   "id": "s21",
   "title": "Von Beweisen und zwar von den apodiktischen.",
   "titleSrc": "heading",
   "headings": [
    "Von Beweisen und zwar von den apodiktischen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s21-001",
     "kind": "heading",
     "aa": 561,
     "text": "Von Beweisen und zwar von den apodiktischen."
    },
    {
     "id": "poelitz-s21-002",
     "kind": "text",
     "aa": 561,
     "text": "Sie werden eingeteilt in acroamatische die diskursiv sind und sich durch Worte ausdrucken laßen, und in mathematische die intuitiv sind aus der Construction der Begriffe. Bei einem Beweise ist also:",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s21-003",
     "kind": "text",
     "aa": 561,
     "text": "1.) die Sache die bewiesen werden soll.",
     "ocrConf": 56
    },
    {
     "id": "poelitz-s21-004",
     "kind": "text",
     "aa": 561,
     "text": "2.) der Beweisgrund und",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s21-005",
     "kind": "text",
     "aa": 561,
     "text": "3.) die Consequenz, wie der Saz aus dem Beweisgrund folgt.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s21-006",
     "kind": "text",
     "aa": 561,
     "ms": [
      {
       "p": null,
       "i": 120,
       "raw": "so",
       "unresolved": true
      },
      {
       "p": null,
       "i": 1724,
       "raw": "gi",
       "unresolved": true
      }
     ],
     "text": "Man kann den Beweisgrund kennen ohne die Form des Beweises zu kennen oder die Consequenz. Wenn man blos den Beweisgrund oder materiam probationis vorträgt, beim disputiren, so heist das per terminos medios disputiren. Erkenntniße sind nach des Autors Definition unerweißlich, die auch ohne Beweis völlig gewis sind. Dieser Ausdruk bedeutet aber im Deutschen eine Sache die wol eines Beweises bedarf, aber keinen hat. Ein unmittelbar gewißer Saz ist also indemonstrabel. Alle unsere Erkenntniße müßen von immediate gewißen Säzen anfangen. Wenn noch so viel mittelbar d. h. durch einen Beweiß gewis ist: so muß doch auch etwas indemonstrabel oder unmittelbar gewis seyn. Der Beweis ist entweder directe der ist zugleich positiv, der beweißt daß der Saz wahr sey, oder ein apagogischer der negativ ist, der refutirt das Gegenteil, oder zeigt daß des Sazes Gegenteil falsch sey. Die apagogischen Beweise sind in der Mathematik einleuchtend, in der Philosophie ist man ihrer gern überhoben ; denn die positive zeigen mir nicht nur die Sache, sondern auch die Quellen der Wahrheit. Der apagogische Beweis zeigt nur das Gegenteil, wenn ich von der Falschheit deßelben auf die Wahrheit meines Sazes schließe. Soll der apagogische Beweis gelten: so müßen sich die Säze contradictorie diametraliter opponirt seyn, nicht contrarie, sonst können sie beide falsch seyn. Ein Beweis der der Grund mathematischer Gewisheit ist, heist demonstration, und ein Beweis der der Grund philosophischer Gewisheit ist, heist acroamatischer Beweis. Der Autor redt jezt von den Erkenntniß Quellen und rechnet dazu Vernunft Erkenntniß und Glaube. Glaube aber gehört zur Erfahrung, denn ich glaube um des Zeugnißes anderer willen, und das muß ich doch erfahren,",
     "dehyphenated": 7,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s21-007",
     "kind": "text",
     "aa": 561,
     "text": "Vom historischen Glauben.",
     "ocrConf": 61
    },
    {
     "id": "poelitz-s21-008",
     "kind": "text",
     "aa": 561,
     "aaEnd": 563,
     "pages": [
      {
       "p": 562,
       "i": 194
      },
      {
       "p": 563,
       "i": 2796
      }
     ],
     "ms": [
      {
       "p": 83,
       "i": 1478
      },
      {
       "p": null,
       "i": 3116,
       "raw": "83",
       "unresolved": true
      }
     ],
     "text": "Den Glauben bezieht der Autor blos aufs Zeugnis, das ist aber falsch. Wir unterscheiden die beiden Ausdrüke etwas glauben und einem glauben ; im ersten wird Glauben nur vom Wißen unterschieden, der zweite sezt voraus daß es ein anderer gesagt hat. Etwas glauben bezieht sich aufs Erkenntniß und den Grund des Fürwahrhaltens, es mag auch aus der Vernunft seyn, wenn die Gründe des Fürwahrhaltens für den logischen Gebrauch d. h. für den puren Verstand unzureichend sind, zum praktischen Gebrauch d. h. zur Anwendung aber zureichend sind, so ist das Glaube. Theoretischen Vernunftglauben giebts nicht, denn in der Speculation giebt uns die Vernunft entweder wißen oder nichts, auch Meinen aber nicht Überzeugung. Aber praktischen Vernunftglauben giebts — logische Gründe dürfen nicht zureichend seyn, aber die Vernunft kann in Ansehung unseres Intereße Gründe haben, etwas für wahr anzunehmen. Vernunftsäze sind an sich selbst zwar kein Gegenstand des Glaubens, aber bei der Mathematik gehts wol an, weil sich die Irtümer in der Anwendung nicht so leicht verbergen. Wenn wir etwas glauben, weil wir einem andern glauben, so ist das der historische Glaube, oder wenn man etwas für wahr hält blos um des Zeugnißes willen. Es giebt einen ganz gegründeten Vernunftglauben der aber nie zum Wißen hinauf steigen kann, und er kann in praktischer Absicht ein so starkes Fürwahrhalten seyn, als die gröste Gewisheit, nur fehlen ihm die logischen requisita. Der historische Glaube kann ein würklich Wißen seyn und darf nicht von demselben unterschieden werden, der Vernunftglaube aber muß unterschieden werden. Wenn wir Glauben vom Wißen contradistinguiren, so müßen wir es für ein logisch unzureichendes aber praktisch zureichendes Fürwahrhalten nehmen. Zum historischen Glauben wird ein Zeuge erfordert, dem kann man historisch glauben, wenn er von untrüglicher Vernunft ist oder seine eigene Erfarung erzählt. Bei philosophischer Erkenntniß können wir nichts für wahr halten als das Zeugnis Gottes. Alle Citationes haben einen historischen Glauben und die Anrufung der Zeugen ist in Ansehung des Empirischen ganz noth wendig, weil wir nicht alles selbst erfahren können. Zur Glaubwürdigkeit eines Zeugen wird erfodert, Tüchtigkeit, daß er die Wahrheit hat sagen können oder avthenticitaet und Aufrichtigkeit daß er sie hat sagen wollen oder integritaet. Er muß tüchtig seyn, daß er die Erfahrung hat anstellen können, und er muß sie auch declariren können daß man ihn verstehe. Es ist nicht so leicht Erfahrungen anzustellen als man glaubt. Was die Aufrichtigkeit des Zeugen betritt, so ist bei dem gemeinen Mann sich drauf nicht zu ver laßen, er ist zu roh in die Wahrheit einen Werth zu sezen. Die alten Zeiten waren also gestimmt, und fast alle alte Schriftsteller sind nicht sehr pünktlich in der Wahrheit gewesen. Z. E. Herodot, Livius. Hierin haben die neuern Zeiten vieles vor den Alten voraus. Wir sind redlicher in unserer Denkart und gezwungen die Wahrheit zu bekennen, weil wir sonst unsern ehrbaren Namen verliehren. Diese Veränderung ging am Ende des vorigen Jahrhunderts vor — und die Genauigkeit des Zeugnißes f indt besonders in der Experimental Physik statt, welches sich auch auf die Historie erstrekte, wozu die Buchdruckerey und die Zeitungen vieles beitrugen, welches Mittel sind die Lügen bald zu wiederlegen. Bei der Aufrichtigkeit muß man untersuchen, ob der Zeuge Intereße gehabt hat, von der Wahrheit abzugehen, dies ist aber so vielfältig daß man es kaum beurteilen kann, das was wir gar nicht für ein Intereße halten ist beim andern eines. Die Zeugen werden eingeteilt in Ohren- und Augenzeugen, dieser bezeugt seine eigne Erfahrung einer Sache, jener seine Erfahrung der Zeugniße anderer. — Bei der griechischen Sage und Ueber lieferung ist kein ordentlicher Zeuge. Bei jener glaubt man nicht wegen der Gültigkeit des Zeugen, sondern wegen der Menge derselben, bei dieser ist Menge subordinirter Zeugen. Wenn Unglaube ein Tadel ist so muß der Glaube moralisch seyn. Im lateinischen ist man nicht fähig es zu übersezen. — Der Glaube ist entweder theoretisch, oder praktisch d. h. moralisch, den nennt man ungläubig der keinen moralischen Glauben hat, d. h. der kein moralisch Intereße hat und den kann man von jedem fodern, und dieser Unglaube ist ein Tadel, wenn nehmlich ein Mensch nicht an die Tugend glaubt und dieser Unglaube ist schädlich weil er dadurch allen Vorsaz zur Tugend fahren last, indem er glaubt es wäre keine.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s22",
   "title": "Von Vereinbarung der Vernunft und Erfahrung.",
   "titleSrc": "heading",
   "headings": [
    "Von Vereinbarung der Vernunft und Erfahrung."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s22-001",
     "kind": "heading",
     "aa": 563,
     "text": "Von Vereinbarung der Vernunft und Erfahrung."
    },
    {
     "id": "poelitz-s22-002",
     "kind": "text",
     "aa": 563,
     "ms": [
      {
       "p": 84,
       "i": 174
      }
     ],
     "text": "Wenn aus der Erfahrung vermittelst der Vernunft was gefolgert wird: so kann man nicht sagen, sie werden vereinbaret, sondern Erfahrung wird durch die Vernunft genüzt. — DamitErfahrungsgrund Erkenntniß werde, gehört Vernunft dazu Die Erfahrung ist als denn der zureichende Grund und die Vernunft bedient sich deßelben zu Erkenntnißen. Die Vernunft ist das Vermögen wodurch wir Erfahrung als Grund zu Erkenntnißen brauchen können, denn werden aber Vernunft und Erfahrung nicht vereinbaret, sondern wenn ein Erkenntnißvermögen dem andern complementum ad sufficientiam giebt. Ist ein Erkenntniß aus Erfahrung und Vernunft unzureichend und eins ergänzt das andere, so wird Vernunft und Erfahrung vereinbart. So ists bei Hypothesen.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s23",
   "title": "Vom praktischen Erkenntniß.",
   "titleSrc": "heading",
   "headings": [
    "Vom praktischen Erkenntniß."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s23-001",
     "kind": "heading",
     "aa": 564,
     "text": "Vom praktischen Erkenntniß."
    },
    {
     "id": "poelitz-s23-002",
     "kind": "text",
     "aa": 564,
     "aaEnd": 565,
     "pages": [
      {
       "p": 565,
       "i": 2467
      }
     ],
     "ms": [
      {
       "p": 85,
       "i": 1401
      }
     ],
     "text": "Ein Erkenntniß wird praktisch genannt im Gegenverhältnis des theoretischen aber auch des spekulativen. Wenn ein Saz ein Imperativ ist : so ist er praktisch. Das Sollen bedeutet hier eine freie Handlung die in gewißer Absicht gut ist, und ein Saz der eine solche Handlung ausdrükt ist ein Imperativ. Dieser Imperativ ist praktisch im Gegensaz des theoretischen, denn dieser sagt nicht was geschehen soll, sondern was geschehen ist. Die praktische Erkenntniß wird auch der spekulativen entgegengesezt und hier kann sie auch theoretisch seyn, wenn nur Imperative können hergeleitet werden, denn heist die Erkenntniß objectiv praktisch, nehmlich wenn sie den Grund zu möglichen Imparativen enthält. Anmerkung Was spekulativ ist, ist immer theoretisch, aber nicht umgekehrt, denn das theoretische kann in einer andern Absicht theoretisch seyn. — Ein spekulativ Erkenntniß wäre also ein solches, woraus keine Regeln des Verhältnißes können hergeleitet werden, oder das kein Grund zu möglichen Imperativen ist. Z. E. in der Theologie sind solche blos spekulative Erkenntniße die auf den Lebenswandel keinen Einfluß haben z. E. ob Gott im Raum gegenwärtig sey, oder ob die Algegenwart nur ein Einflus auf alle Geschöpfe sey, ohne daß er durch den Raum bestimmt werde. Man kann auch so definiren: Ein Erkenntniß ist theoretisch, wenn es nicht anzeigt, was geschehen soll, sondern die Erkenntniß eines Gegenstandes, wie er ist, enthält. Der Gebrauch der Erkenntniß ist entweder theoretisch oder praktisch. Z. E. Die Moral ist ein praktisch Erkenntniß indeßen kann der Gebrauch derselben doch spekulativ seyn und in Erwartung des praktischen Gebrauchs bekommen unsere Erkenntniße nur einen Werth, und alles spekulative sieht in der Ferne aufs praktische hinaus. (Spekulation ist auch in der Absicht gut, weil der Verstand zu praktischen Untersuchungen geübt wird.) Dieser Werth kann blos mittelbar seyn, oder auch unmittelbar, denn ist er Würde. Wir kennen eigentlich noch kein Ding das Würde hätte, als der Mensch, denn er gehört nicht zu den Mitteln zu andern Zwecken, wie alle andere Dinge. Alle Kenntniße und was sich der Mensch erwirbt hat doch nur einen mittelbaren Werth, und alles dies muß sich auf einen unmittelbaren Werth beziehen. Wenn sich der Wüle der erworbenen Kenntniß gut bedient, so ist er mehr werth als alle Erkenntniß. Die Würde des Menschen beruht also auf der Moralitaet und die nennen wir Korr 'e^ox^l v praktisch, und der Teil der Philosophie, der die Moral abhandelt, heist praktische Philosophie obgleich in den andern Teilen auch etwas praktisches ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s23-003",
     "kind": "text",
     "aa": 565,
     "ms": [
      {
       "p": 86,
       "i": 596,
       "raw": "8«",
       "inferred": true
      }
     ],
     "text": "Der Autor hat noch eine besondere Section, von dem Gebrauch unseres Verstandes und der Vernunft im Gegensaz des spekulativen Gebrauchs. Dies gehört gar nicht in die Logik, sie betracht blos die Form des Denkens, und kann keine Säze haben als die auf principien a priori beruhn. Da aber alles praktische unsern Willen und die verschiedenen Zwecke zur Absicht hat, die wir durch Beobachtungen erkennen müßen, so ist das praktische vom spekulativen dem Inhalt nach unterschieden, dies sehn wir aus der Abhandelung selbst: Der Autor redt vom Vergnügen, Begierde etc. etc. welches alles nicht hierher gehört. — Ferner ist hier die Einteilung der Erkenntniße in todte die unsern Willen nicht bewegen und lebendige die ihn bewegen. Sie ist gut, nur werden auch die Grenzen der Logik überschritten. Wir laßen also diese Section aus. Sie gehört in die Psychologie.",
     "dehyphenated": 2,
     "ocrConf": 44
    }
   ]
  },
  {
   "id": "s24",
   "title": "Von den Begriffen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Begriffen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s24-001",
     "kind": "heading",
     "aa": 565,
     "text": "Von den Begriffen."
    },
    {
     "id": "poelitz-s24-002",
     "kind": "text",
     "aa": 565,
     "aaEnd": 566,
     "pages": [
      {
       "p": 566,
       "i": 1412
      }
     ],
     "ms": [
      {
       "p": 87,
       "i": 1349,
       "raw": "sr",
       "inferred": true
      }
     ],
     "text": "Bisher haben wir vom Erkennt niß nach den mancherley Arten geredt, jezt teilt der Autor die Erkenntniße in ihre Elemente ein, welches billig schon hätte eher geschehen sollen. 1.) Die erste Vollkommenheit sagt der Autor ist, wenn eine Erkenntniß Vorstellung und Begrif wird. 2.) wenn Begriffe verbunden werden und also Urteile entstehn, 3.) wenn Urteile verbunden werden und also Schlüße entstehn. Die Alten sagten : quot sunt mentis operationes ? tres, apprehensio simplex, Judicium, et ratiocinium. Um einen Begrif zu erklären merken wir, repraesentatio ist das erste und algemeinste und kann nicht erklärt werden, 2.) eine Vorstellung mit Bewustseyn ist perceptio, Wahrnehmung 3.) Vorstellung so fern sie betrachtet wird als bezogen auf einen Gegenstand ist cognitio, oder perception so fern sie objectiv ist. Ich muß mir also auch des Gegenstandes beAvust werden. Wir haben viele Vorstellungen die sich auf kein Object beziehn z. E. alle innerliche Empfindungen. Sie beziehn sich aufs Subject. Redt jemand zu mir: so hab ich eine Vorstellung bezogen aufs Object also Erkenntniß ; schreit er so sehr daß mir die Ohren wehe thun ; so ist das Empfindung und ich fühle meinen Zustand. Erkenntniß ist entweder intuitus oder conceptus ; intuitus, wenn ich nur einzelne Vorstellungen habe, conceptus wenn ich Vorstellungen hab, die vielen gemein sind,  oder repraesentatio communis. Conceptus est repraesentatio communis weil der Begrif aufs Merkmal des Gegenstandes geht und also den Gegenstand mediate durchs Merkmal vorstelt und dies Merkmal kann vielen Dingen gemein seyn. Intuitus ist repraesentatio singularis, denn es ist immer ein einzelner Gegenstand der Sinne.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s24-003",
     "kind": "text",
     "aa": 566,
     "aaEnd": 567,
     "pages": [
      {
       "p": 567,
       "i": 2332
      }
     ],
     "ms": [
      {
       "p": 88,
       "i": 1364
      },
      {
       "p": 89,
       "i": 3025,
       "raw": "8»",
       "inferred": true
      }
     ],
     "text": "Wir fangen immer von Anschauungen an. Jeder conceptus ist entweder empiricus wenn er aus den Sinnen entsprungen ist und durch den Verstand blos Algemeinheit erhalten hat, oder durch Vergleichung der Gegenstände der Erfahrung entstanden ist, oder purus, der nicht durch die Sinne entspringt. Bei dieser Einteilung kommts auf den Ursprung an, sie gehört also nicht in die Logik, sondern in die Metaphysik. Wir haben viele empirische Begriffe nehmlich der Farbe, Empfindung etc. etc. purus war ein solcher der unabhängig von der Erfahrung aus dem Verstände entspringt. Sie sind wieder solche deren Gegenstände in der Erfahrung können gegeben werden z. E. von den Substanzen, Ursachen, Wirkungen etc. etc. oder es sind solche deren Gegenstände in keiner Erfahrung können gegeben werden, das ist ein Begrif der bloßen Vernunft. Conceptus purus est notio. Notio ist also doch mehr als conceptus, aber im Deutschen ist doch kein korrespondirender Ausdruk. Notio deren Gegenstand in concreto kann dargestelt werden ist notio intellectus, wo der Gegenstand in keiner Erfahrung kann gegeben werden ist Idee. Idee kann man Vernunftbegrif nennen, denn durch Vernunft denk ich etwas a priori. Man redt sonst von der Idee der rothen Farbe etc. das ist aber falsch. — Die ganze Moral beruht auf Ideen, denn reine Tugend ist in keiner Erfahrung möglich. Eine notion ist sensitiv, deren Gegenstände können sinnlich gemacht werden wo nicht in empirischer so doch in reiner Anschauung. Z. E. Der Begrif eines Dreieks. — Wie entspringen Begriffe oder wie können Vorstellungen zu Begriffen werden ? Dies kann ich nur in der Logik fragen, per reflectionem, comparationem, separationem seu abstractionem. Ich reflectire über Dinge d. h. ich werde mir nach und nach verschiedener Vorstellungen bewust, oder ich vergleiche verschiedene Vorstellungen mit meineni Bewustseyn; ist das, so vergleiche ich sie untereinander, das ist comparation ; wo ich Identitaet des Bewustseins finde, das separire ich oder abstrahire vom übrigen; so habe ich einen Begrif z.E. Ich sehe eine Fichte, Weide oder Linde ich sehe sie haben einen Stamm, Aeste und Blätter die verschieden sind, einer hat mehr Aeste als der andere etc. ich attendire nun auf das, was sie gemein haben als auf den Stamm, Aeste und Blätter, von der Figur abstrahire ich, so bekomm ich den Begriff vom Baum. Anmerkung Man braucht in der Logik das Wort abstrahiren nicht recht. Wir müßen nicht sagen abstrahere aliquid sondern ab aliquo. Beim vorigen Beispiel abstrahiren wir nicht den Stamm, die Aeste etc., die separiren wir, sondern wir abstrahiren von der Figur der Blätter etc. etc. Die Abstraction thut also nichts zu unserm Erkenntniß hinzu, sondern sie schränkt es ein. Attention aufs ähnliche nennt man Wiz. Um Begriffe zu machen muß man also compariren, attendiren und abstrahiren können z. E. wenn ich beim Scharlach nur die rothe Farbe gedenke: so abstrahire ich vom Tuch, abstrahir ich von dem, und denk ihn mir nur als ein Wesen, so abstahir ich noch von mehrerem, und einen solchenBegrif nennt man abstract.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s24-004",
     "kind": "text",
     "aa": 567,
     "text": "Jeder Begrif hat einen Gegenstand von dem er das Merkmal ist, und kann mir nur in dem Gegenstande gegeben werden. Betracht ich nun den Begrif ohne das Ding von dem er ein Merkmal ist : so betracht ich ihn in abstracto betracht ich zugleich das Ding : so betracht ich ihn in concreto und in concreto müßen wir ihn betrachten können, sonst hat er gar keine Bedeutung.",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s24-005",
     "kind": "text",
     "aa": 567,
     "aaEnd": 568,
     "pages": [
      {
       "p": 568,
       "i": 1497
      }
     ],
     "ms": [
      {
       "p": 90,
       "i": 1076
      },
      {
       "p": 91,
       "i": 2672
      }
     ],
     "text": "Der Gebrauch eines Begrif s ist entweder in abstracto oder in concreto. In concreto, wenn ich den Begrif anwende auf das, was in ihm enthalten ist, in abstracto wenn man von den Fällen abstrahirt wo er könnte angewandt werden. Erkenntniße sind abstract wenn sie in abstracto gebraucht werden. Die Logik handelt nur vom Begrif als Begrif, um die Ideen etc. bekümmert sie sich nicht. Wie wir uns z. E. durch die Vernunft etwas vorstellen können, was der Verstand nicht einmal faßen kann, ist eine wichtige Frage, nur sie gehört nicht in die Logik. Sie handelt nicht von dem Ursprung der Begrif e dem Inhalt nach, oder vom Unterschied in Ansehung der Objecte, sondern von der Form eines Begrifs als Begrifs, die entsteht in der Gemeingültigkeit. Jeder conceptus ist repraesentatio communis, das liegt schon in der Erklärung, aber der Gebrauch kann seyn communis aut singularis d. h. in individuo. Wende ich den Begrif auf vielerley Gegenstände an, so ist der Gebrauch communis d. h. in abstracto. Es ist ein Fehler in der Logik daß man algemeine, besondere und einzelne Begrif e annimmt, denn es giebt solche nicht, aber der Gebrauch derselben kann so eingeteilt werden. Demnach werden wir nicht die conceptus, sondern die judicia so einteilen, weil sie die Verhältniße der Begriffe sind, denn ich kann einen Begrif mit dem andern ganz vergleichen, oder nur einige Teile, oder nur einen einzigen Teil. Dieser Fehler ist aber schon so eingerißen, daß man ihn nicht vermeiden kann. Nun frägts sich wie entspringen Begriffe ? Hier wird von der logischen Form der Begriffe geredt, die besteht, wie schon gesagt worden, darin, daß er vielen gemein ist, welches ein Vorrecht des Verstandes ist, und er hat also das Vermögen Begriffe zu machen, so definirt man ihn auch. Wir definirten ihn zwar anfangs als das Vermögen der Regeln, welches aber einerlei ist, denn Begriffe dienen zu Regeln. Verstand ist das Vermögen der diskursiven Erkenntniß Sinne das Vermögen der intuitiven Erkenntniß. Ein abstracter Begrif ist eine Tavtologie, denn jeder Begrif ist abstract, und ein nicht abstracter Begrif ist contradictio in adjecto. Wie entspringen Begriffe dem Inhalt nach? 1) Durch Erfahrung die bringt sie nicht hervor sondern sie Hegt nur zum Grund sie giebt die Vorstellungen woraus wir Begriffe machen, der Ursprung ist empirisch 2.) aus dem Verstände, so daß die Vorstellung gar nicht durch die Erfahrung gegeben wird. Z. E. Der Begrif der Möglichkeit, Noth wendigkeit. 3.) Durch willkürliche Erdichtung, hiernach kann man sie einteilen in datos und factitios oder arbitrarios. Dati sind gegeben entweder durch den bloßen Verstand oder a priori, oder durch Erfahrung, a posteriori. Diese Sache gehört nicht in die Logik, wir haben sie aber berührt, weil sie im Capitel von den Definitionen nöthig ist. Erdichtete Begriffe entstehen durch die Zusammensezung, Einfache neue Begriffe kann man nicht erdenken, aber wol sie verschieden zusammensezen, und hier ist die Regel, wir können nichts verbinden was sich wiederspricht, man verbindt aber doch Begrif e die sich wiedersprechen, nicht um sie für wahr zu halten, sondern zu zeigen, wie sie mit andern Begriffen übereinstimmen würden, um daraus auf ihre Falschheit schließen zu können. Ein jeder Begrif enthält unter sich mehrere mögliche Begriffe d. h. er enthält das, was mehrern Vorstellungen von verschiedenen Dingen gemein ist. Er ist also selbst wieder in andern enthalten. Ein jeder conceptus communis ist in den Begriffen, von denen er abstrahirt enthalten, denn er ist ein Teil davon. Der conceptus communis hat also viele Dinge unter sich d. h. sie können alle durch ihn vorgestelt werden, nachdem worin sie übereinstimmen, und das macht eben seine Brauchbarkeit aus. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s24-006",
     "kind": "text",
     "aa": 568,
     "aaEnd": 570,
     "pages": [
      {
       "p": 569,
       "i": 342
      },
      {
       "p": 570,
       "i": 2966
      }
     ],
     "ms": [
      {
       "p": 93,
       "i": 398
      },
      {
       "p": null,
       "i": 1828,
       "raw": "93",
       "unresolved": true
      },
      {
       "p": null,
       "i": 3227,
       "raw": "»■i",
       "unresolved": true
      }
     ],
     "text": "Ein Begrif wird ein höherer genannt in so fern er andere unter sich enthält, ein niedriger ist ein solcher, der unter einem andern enthalten ist z. E. Mensch ist ein niedrigerer Begrif in Ansehung deßen vom Thier. — Wir haben also conceptus superiores et inferiores und sie stehn immer in relation. Respective kann ein Begrif in relation auf einen superior, auf einen andern kann er inferior seyn. Z. E. Mensch ist conceptus superior in Ansehung eines Negers, inferior in Ansehung eines Thiers. Hieraus entsteht nun eine Reihe z. E. Eisen, Metal, Körper, Ding, der conceptus infimus last sich nicht bestimmen, cognitio infima könnte ich wol sagen, denn Erkenntniße enthalten sowol Begriffe als Anschauungen. Cognitio infima wäre also die unmittelbare Anschauung, weil die nur ein einzeln Ding enthält. Conceptus infimus war ein solcher unter dem kein anderer mehr enthalten ist, oder deßen man sich bei einem individuo bedient z. E. der Philosoph Wolf: hier ist der Begrif Philosoph auf das individuum Wolf angewandt. Ein solcher Begrif ist unmöglich zu bestimmen, denn wenn wir auch einen solchen Begrif haben, den wir unmittelbar auf die individua anwenden, so können doch noch Unterschiede seyn, die wir nicht bemerken, oder die wir negligiren. In der Reihe der subordinirten Begriffe ist also kein conceptus infimus, aber auf einen summum kann ich kommen, weil ich doch endüch einen solchen erlangen muß, von dem ich nichts mehr abstrahiren kann, ohne daß das Ganze des Begrif s verschwindt und dies ist conceptus summus. Im Gebrauch giebts conceptos infimos die gleichsam conventionel infimi geworden sind, wo man übereingekommen ist nicht tiefer zu gehen. Den conceptum superiorem nennt man in Ansehung seines inferioris genus, ihn selbst in Ansehung seines superioris species. Genus und species macht also an sich keinen Unterschied in den Begriffen, sondern nur in ihrer relation z. E. Ein Gelehrter ist ein genus in Ansehung der Philosophen, aber eine species in Ansehung der Menschen. Nun können wir uns eine Reihe von speciebus und generibus denken, so werden wir genera superiora haben können. Eine jede species ist immer ein genus, ratione ihres conceptus inferioris, species infima ist auch nur comparativ d. h. im Gebrauch giebts eigentlich keine, genus summum können wir haben. Eine species die ich unmittelbar in Relation auf die individua betrachte ist infima. — Bei allen Begriffen merken wir den Umfang (sphaera). Ein Begrif heist latior in Ansehung deßen der unter ihm enthalten ist und der conceptus inferior in Ansehung des superioris heist angustior. Dies Verhältniß subordinirter Begriffe da einer unter dem andern enthalten ist, und noch mehr dazu, — und da einer den andern unter sich hat, und noch mehr dazu ist die sphaera oder der Umfang des Gebrauchs des Begrif s. Weiter bemerken wir den Inhalt d. h. die Menge der Merkmale die in ihm enthalten sind und hier merkt man: je größer der Umfang eines Begrif s ist, desto kleiner ist sein Inhalt. Conceptus superior hat immer einen großen Umfang, aber desto kleiner ist sein Inhalt, denn je höher der Begrif ist, desto mehr muß ich abstrahiren z. E. der Begrif von Etwas geht auf alles, hat aber keinen Inhalt. Niedrige Begriffe werden also dadurch, wenn man die höhern bestimmt. Bestimmen heist mehrere Merkmale hinzusezen, um die unter dem conceptui superiori enthaltene Begriffe beßer zu unterscheiden. Durch die fortgesezte Abstraction entstehn höhere Begriffe und umgekehrt durch die fortgesezte Determination entstehn inferiores. Conceptus omni modo determinatus est conceptus infimus. Nun frägts sich : was ist beßer, eine sein: concrete oder abstracte Vor-Stellung ? d. h. eine solche, die dem generi summo sehr nahe kömmt, jene kommt dem individuo sehr nahe. Durch sehr abstracte Erkenntniße erkennen wir an vielen Dingen wenig und durch sehr concrete Erkenntniße erkennen wir an wenig Dingen viel. Was wir also auf der einen Seite gewinnen, ver Hehren wir wieder auf der andern. — Zwei Begriffe die beide superiores und inferiores seyn können heißen reciproci, hiezu gehört immer, daß sie einerley bedeuten müßen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 45
    }
   ]
  },
  {
   "id": "s25",
   "title": "Von den Definitionen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Definitionen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s25-001",
     "kind": "heading",
     "aa": 570,
     "text": "Von den Definitionen."
    },
    {
     "id": "poelitz-s25-002",
     "kind": "text",
     "aa": 570,
     "aaEnd": 571,
     "pages": [
      {
       "p": 571,
       "i": 1279
      }
     ],
     "ms": [
      {
       "p": 95,
       "i": 578
      }
     ],
     "text": "Definition ist ein logisch vollkomner Begrif, sie beruht darauf, in wie fern ein Begrif dient gut zu urteilen, dazu gehört Deutlichkeit, daß ich mir des Mannigfaltigen im Begrif bewust werde, die ist eine Qualitaet; nun kann ich mir noch eine Quantitaet der Deutlichkeit denken, alle Merkmale eines Begrif s klar vorzustellen, denn ist die Deutlichkeit complet und das ist das 2te, was zur logischen Vollkommenheit gehört, das 3te ist die Precision. Zur absoluten Vollkommenheit (die relative kann verschieden seyn) kann ich nichts niehr verlangen, als daß der Begrif ganz oder vollständig ist, oder der Sache adaequat. Dazu gehört, es muß nicht zu viel nicht zu wenig seyn. Der Autor und andere nennen Praecision die Determination des Begrifs das ist falsch. Der logisch vollkomene Begrif ist conceptus rem adaequans, so könnte man wol eine Definition def innen. Wesentliche Vollkommenheit des Begrifs ist Deutlichkeit, und der definition completudo, und praecision. und hiernach ist jede definition zu examiniren. Zuerst muß sie als Saz betrachtet wahr sein das Merkmal muß dem Begrif der Sache zukommen, ist das nicht, so fällt alles weg. In der Absicht sind schlechte Definitionen auch gut, denn man lernt doch neue Merkmale der Sache, auf die man sonst nicht gekommen wäre, und das Erkenntniß der Sache erlangt mehr Deutlichkeit. Eine falsche Definition kann demnach als wahrer Saz richtig seyn. Definitionen sind tavtologisch, wenn ich den Begrif zum Grunde legen muß, um das Merkmal zu verstehn, da ich doch das Merkmal suchte um den Begrif zu verstehn. Man kann Tavtologie sehr verstecken, wenn man blos andere Worte nimt die denselben Begrif in sich faßen. Z. E. wenn man ratio erklärt dadurch : ratio est id ex quo cognoscitur, cur aliquid sit ; cur bedeutet aber nichts anders als ex qua ratione. Durch solche Definitionen entsteht nicht Deutlichkeit. Von der completudo der Deutlichkeit können wir nie recht gewis werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s25-003",
     "kind": "text",
     "aa": 571,
     "aaEnd": 572,
     "pages": [
      {
       "p": 572,
       "i": 1936
      }
     ],
     "ms": [
      {
       "p": 96,
       "i": 240,
       "raw": "9s",
       "inferred": true
      },
      {
       "p": 97,
       "i": 1927,
       "raw": "9T",
       "inferred": true
      }
     ],
     "text": "Die logische Regel Definitionen zu verfertigen ist diese: Machet euren Begrif deutlich, die Deutlichkeit complet und praecise. Anmerkung. Die logische Regeln haben alle den Fehler, daß sie voraus sezen, man könne die Sachen schon zu Stande bringen die man von ihnen lernen will z. E. liier fragt man: wie mache ich den Begrif deutlich, woran erkenne ich die completudo der Deutlichkeit, wie mache ich ihn praecise ? Das kann die Logik alles nicht lehren. Alle unsere Begriffe sind entweder gegeben oder gemacht. Gegeben sind die, die nicht von unserer Wülkühr abhangen entweder blos in meinem Verstände a priori oder in der Erfahrung a posteriori. Der Begrif von Metal ist a posteriori gegeben der Begrif von Ursache und Würkung aber a priori. Die gemachten Begriffe, factitii, sind auch entweder a priori oder a posteriori gemacht, wenn der Gegenstand in der Erfahrung gegeben ist. Im ersten Fall ist er durch das bloße Denken gemacht, ohne daß der Gegenstand in der Erfahrung gegeben ist. Alle unsere Begriffe, so fern sie gegeben sind, es sey a priori oder a posteriori können nur per analysin definirt werden. Weil er gegeben ist ; so kann man ihn nur deutlich machen, indem man die Merkmale succeßive klar macht. Werden aber alle Merkmale klar gemacht so wird der Begrif complet deutlich, aber auch nicht zu viel, so ist er praecise und es entsteht eine Definition. Sind die Begriffe gemacht, so wird die Definition per synthesin zuwege gebracht z. E. ich will mir ein denkend Wesen concipiren, das mit keinem Körper umgeben ist, so hab ich mir durch die Definition erst den Begrif gemacht und zwar synthetisch. Die ganze Mathematik ist vol von solchen gemachten Begriffen und sie definirt alles per synthesin. Wenn kann ich sagen, daß ein Begrif Definition wird ? wenn seine Merkmale complet und praecise sind. Kann man auch durch Proben sicher werden, ob alle Merkmale analytisch sind ? Das geht nicht an, hieraus folgt daß alle analytische Definitionen unsicher sind, weil man nicht gewis werden kann, ob alle Merkmale zergliedert sind. Synthetische Definitionen so fern der Gegenstand erdichtet ist, können nie fehlen ; denn ich sage, so soll es seyn. Endlich die Definitionen der aus der Erfahrung zu ziehenden Begriffen sind synthetisch unmöglich, weil man noch immer mehr Merkmale entdeckt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s25-004",
     "kind": "text",
     "aa": 572,
     "ms": [
      {
       "p": 98,
       "i": 1363
      }
     ],
     "text": "Es sind gewiße Arten von Handlungen wodurch Begriffe deutlich werden, und sich der completudine nähern, oder es sind gewiße logische approximationes zur Definition: 1.) expositiones. expositio ist die succeßive Zergliederung des Begrifs, sie geht der Definition vorher und kann zuweilen ihre Stelle vertreten. Um zu wißen was einem Begrif zukommt ist Definition nicht nöthig, aber um zu wißen, welchem Ding der Begrif zukommt ist sie nöthig. Z. E. ich will wißen was zur Tugend gehört, da ist sie nicht nöthig, aber um sagen zu können, dies oder jenes ist Tugend, da ist sie nöthig. Der Saz ist falsch: daß immer eine Definition vorher gehn müße, ehe man von einer Sache was sagen kann. Man kann viel von einer Sache mit Grund einsehn ohne eine Definition zu haben denn vor der Definition kann expositio vorhergehn, die kann sehr incomplet zu meiner Absicht aber sehr gut seyn. 2.) descriptiones. Die ist nicht Definition weil es ihr an der Praecision fehlt; sie kann auch incomplet seyn — das Hauptzeichen aber ist Praecision. Vor alle dem was vermittelst eines conceptus arbitrarii gesagt wird, muß die Definition vorhergehn, denn man muß doch Rechenschaft geben, was man gedacht hat. Man könnte die Definition lieber declaration nennen, weil man dadurch nur seine Gedanken declarirt und das ist bei den Mathematikern die Definition, willkührliche Begrife sind also nicht nur immer möglich, sondern auch nothwendig. In der Philosophie ist Definition das späteste, was nach langwieriger Zergliederung der Begriffe erreicht werden kann.",
     "dehyphenated": 4,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s25-005",
     "kind": "text",
     "aa": 572,
     "aaEnd": 573,
     "pages": [
      {
       "p": 573,
       "i": 592
      }
     ],
     "text": "Die Objecte der analytischen Definition sind reine Verstandesbegriffe z. E. Substanz, von denen kann man deswegen Definitionen geben, weil der ganze Begrif im Verstände hegen muß. Die Metaphysik hat also Begriffe die alle einer analytischen Definition fähig sind. Von einem analytisch defmirten Begrif muß man nie anfangen, selbst wenn mans auch könnte, denn zu sagen, daß etwas eine Definition sey, dazu gehört ein Beweis, ob ich complet analysirt habe. Ich muß also vorher analysiren. können Erfahrungs Begriffe nicht auch analytisch definirt werden ? Erfahrungs Begriffe sollen nicht analytisch definirt werden, denn damit kommt man nicht weg z. E. vom Waßer sagen wir : es ist eine flüßige, durchsichtige Substanz die nicht Farbe, Geruch und Geschmack hat. Hier müßen wir aus dem Begrif herausgehn und die Erfahrung zu rathe ziehen. Vermittelst der Erfahrung etwas erklären, heist synthetisch definiren. Synthetisch last er sich aber auch nicht definiren, weil wir alsdenn alles wißen müßen, was jede mögliche Erfahrung vom Gegenstande lehren kann. Synthetisch können nur conceptus arbitrarii definirt werden, und hier muß immer die Definition voran gehen, weil ich dadurch sagen mus, was ich unter dem Wort verstehe.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s25-006",
     "kind": "text",
     "aa": 573,
     "aaEnd": 574,
     "pages": [
      {
       "p": 574,
       "i": 1973
      }
     ],
     "ms": [
      {
       "p": 99,
       "i": 453
      }
     ],
     "text": "Alle Definitionen werden eingeteilt in nominales et reales, leztere heißen auch geneticae, weil wenn die Merkmale zusammen genommen werden der Begrif der Sache wieder erzeugt wird. Nominal Definition ist der deutliche Begrif der zur Unterscheidung der Sache von andern zureichend ist. Real Definition ist der deutliche Begrif der zureicht alles was der Sache zukommt zu erklären, oder aus dem alles was der Sache zukommt abgeleitet werden kann. Sie ist innerlich, die erste äußerlich zureichend in Vergleichung mit andern Dingen. Die leztere ist eßentiel, durch die erste sehe ich ein Ding nicht beßer ein, sondern ich kann es nur von andern unterscheiden. Die nominal Definitionen können doch nur blos conrparativ zureichend seyn. Man kann durch sie die Sache nicht von allen möglichen Dingen unterscheiden, aber wol durch die Merkmale die zusammen genommen das ganze Wesen ausmachen. Das ist aber die real Definition. Wolf definirt sie als eine solche die das Entstehn erklärt, das ist aber falsch, z. E. er sagt: Der Zirkel ist die krumme Linie deren Puncte alle gleich weit vom Mittelpunkt abstehn: das nennt er eine nominal Definition und die real Definition lautet also: er entsteht wenn sich eine gerade Linie um einen festen Punkt bewegt, das ist nicht recht, die erste ist die real Definition und das Entstehn oder die andere Definition folgt schon daraus. Wenn ich ein attributum proprium einer Sache nehme, so kann ich sie durch ein einziges definiren. Z. E. der Mensch ist ein Thier das schließt, und diese Definitionen fließen aus dem ganzen Wesen. Ich definire also immer durch das ganze Wesen, weil ich es wirklich immer vor mir habe, indem ich durch ein attributum definire. Es ist schwer nominal und real Definitionen zu unterscheiden, daher hier auch die mehresten Autoren fehlen. Die Definition eines conceptus factitii ist immer real. Wenn ein Begrif innerlich zureichend ist, die Sache zu unterscheiden, so ist er es auch gewis äußerlich, wenn er aber nicht innerlich zureichend ist, so kann er doch äußerlich zureichend sein, aber comparative. In Moralsachen müßen immer real Definitionen gesucht werden, dahin muß all unser Bestreben gerichtet seyn. In empirischen sind sie aber kaum möglich, oder man kann sagen ganz und gar nicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s25-007",
     "kind": "text",
     "aa": 574,
     "ms": [
      {
       "p": 100,
       "i": 0
      }
     ],
     "text": "Von der Description. Sie ist die exposition der Merkmale eines Dinges, so fern sie die Materiahen einer Definition enthält; sie hat keine bestimmte Regeln. Bei der Definition ist aber alles bestimmt. Bei empirischen Begriffen muß also, wie schon oben gesagt, nicht Definition sondern Description gesucht werden. Begriffe a priori können aber Definitionen werden und factitii müßen Definitionen werden. Bei Begriffen a priori kann man auch auf description excurriren; aber bei einer spekulativen Wißenschaft lästs sich nicht thun, sondern da fodert man Definitionen.",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "poelitz-s25-008",
     "kind": "text",
     "aa": 574,
     "text": "Zur Definition gehört Praezision, die completudo ist wichtiger, und die Deutlichkeit ist das wichtigste. Die Praecision ist in manchen Fällen sehr schwer, bisweilen fehlt sie weil wir daßelbe Merkmal unvermerkt 2mal genommen haben. Wir halten bisweilen die für verschieden, die verschiedene Namen haben. Z. E. Der Körper ist ausgedehnt und teilbar, da fehlt schon Praecision, denn das lezte Merkmal ist im ersten enthalten. — Wiebeurtheilt man eine vorkommende Definition ?",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s25-009",
     "kind": "text",
     "aa": 574,
     "text": "1.) Zuerst fragt man: ob die Definition als Saz wahr sey,",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s25-010",
     "kind": "text",
     "aa": 574,
     "text": "2.) ob sie als Begrif deutlich sey ? Wenn ich idem per idem erklären",
     "ocrConf": 35
    },
    {
     "id": "poelitz-s25-011",
     "kind": "text",
     "aa": 574,
     "text": "will, so ist der Begrif noch nicht deutlich gemacht, das ist aber",
     "ocrConf": 36
    },
    {
     "id": "poelitz-s25-012",
     "kind": "text",
     "aa": 574,
     "text": "ein Hauptfehler in der Definition.",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s25-013",
     "kind": "text",
     "aa": 574,
     "text": "3.) Wenn eine Definition als Saz wahr, als Begrif deutlich ist ; so frag",
     "ocrConf": 39
    },
    {
     "id": "poelitz-s25-014",
     "kind": "text",
     "aa": 574,
     "text": "ich : ob sie als deutlicher Begrif complet sey ? Das ist eine schwere",
     "ocrConf": 36
    },
    {
     "id": "poelitz-s25-015",
     "kind": "text",
     "aa": 574,
     "text": "Arbeit bei gegebenen Begriffen.",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s25-016",
     "kind": "text",
     "aa": 574,
     "text": "4.) Endlich wird untersucht: ob der ausführliche Begrif bestimmt",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s25-017",
     "kind": "text",
     "aa": 574,
     "text": "sey ? Das last sich wol finden. Findt man es nicht; so liegt nicht",
     "ocrConf": 33
    },
    {
     "id": "poelitz-s25-018",
     "kind": "text",
     "aa": 574,
     "text": "so viel daran.",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s25-019",
     "kind": "text",
     "aa": 574,
     "ms": [
      {
       "p": 101,
       "i": 40
      }
     ],
     "text": "Man kann die Praecision definiren durch die Reduction einer Definition ad minimos terminos.",
     "ocrConf": 52
    },
    {
     "id": "poelitz-s25-020",
     "kind": "text",
     "aa": 574,
     "text": "Die Regeln nach welchen eine Definition kann gemacht werden sind folgende. Es versteht sich daß sie nur von analytischen Definitionen gelten :",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s25-021",
     "kind": "text",
     "aa": 575,
     "text": "Regel 1.) Suche wahre Merkmale von Dingen. Man könnte die Säze die durch analysiren des Begrifs erhalten werden, Elementarsäze nennen, weil sie die Elemente zu einer Definition enthalten, und man muß deren suchen, so viel man finden kann.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s25-022",
     "kind": "text",
     "aa": 575,
     "text": "Regel 2.) Man muß sehn ob nicht eines schon im andern enthalten sey.",
     "ocrConf": 37
    },
    {
     "id": "poelitz-s25-023",
     "kind": "text",
     "aa": 575,
     "text": "Regel 3.) Man muß die Merkmale eines Dinges samlen und sehn ob sie den Begrif des Dinges ausmachen, oder welches ebensoviel ist: ob sie dem Begrif der Sache gleich sind. Dies ist das schwierigste. Hier lomüßen wir das gröste Mißtrauen haben, ob unsere analysis complet gewesen sey oder nicht. Wenn man also sieht, wie ungewis es sei zu behaupten daß die analysis complet sei : so muß man seine Definition als einen Versuch aufstellen, sich auch gar nicht auf sie verlaßen, als ob sie fehlerfrei wäre, sondern sich derselben so bedienen, als wäre sie keine Definition und denn hab ich doch noch einen deutlichen und wahren Saz deßen ich mich nüzlich werde bedienen können. Ich werde aus den Merkmalen corrolaria folgern können. Ich werde sagen können, cui competit definitum, competit definitio d. h. dem der Begrif des definiti zukömmt, kommt auch die Definition zu, aber umgekehrt werde ich nicht sagen können : cui competit definitio, competit definitum. Meine Definition exhaurirt nicht das ganze Definitum.",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s25-024",
     "kind": "text",
     "aa": 575,
     "ms": [
      {
       "p": 102,
       "i": 206
      }
     ],
     "text": "Regel 4.) Die Definition mus präzis seyn, woran nicht so viel hegt. Wir sehn hieraus, daß wir durch einen deutlichen Begrif, der der Definition sehr nahe kommt, aber noch keine ist, viel ausrichten können. Logische Regeln einer Definition sind:",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s25-025",
     "kind": "text",
     "aa": 575,
     "text": "1.) Der Begrif muß durch sie deutlich werden. Wird er nicht deutlich, so geschieht es entweder immediate, denn ists circulus in definiendo, wenn ich zur Erklärung mich des Begrifs des definiti bediene oder ihn zum Grunde lege, oder mediate denn ists Tavtologie. Dieser circulus kommt sehr häufig vor, häufiger als wir denken.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s25-026",
     "kind": "text",
     "aa": 575,
     "text": "2.) Definitio nee sit angustior nee latior suo definito. Diese Regel ist überflüßig, sie ist schon im Begrif der Definition enthalten. Definitio und Definitum müßen reciprocable seyn, oder einerley sphaeram haben. Sie wird angustior wenn sie mehr Bestimmungen enthält z. E. Menschen sind vernünftige Wesen die sprechen können. Diese Definition ist angustior suo definito, denn dadurch werden die Stummen von den Menschen ausgeschloßen ; sie ist latior, wenn der Begrif des definiti durch die Definition nicht genau genung bestimmt wird. Z. E. Menschen sind lebende Wesen.",
     "dehyphenated": 2,
     "ocrConf": 50
    }
   ]
  },
  {
   "id": "s26",
   "title": "Von der logischen Einteilung.",
   "titleSrc": "heading",
   "headings": [
    "Von der logischen Einteilung."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s26-001",
     "kind": "heading",
     "aa": 576,
     "text": "Von der logischen Einteilung."
    },
    {
     "id": "poelitz-s26-002",
     "kind": "text",
     "aa": 576,
     "aaEnd": 577,
     "pages": [
      {
       "p": 577,
       "i": 2506
      }
     ],
     "ms": [
      {
       "p": 103,
       "i": 957
      }
     ],
     "text": "Ein jeder Begrif enthält ein Mannigfaltiges unter sich, in so fern es übereinstimmt, aber auch in so fern es verschieden ist, — und die Betrachtung des Begrif s nach allem Mannigfaltigen, das er unter sich enthält, in so fern es differirt, ist Einteilung, oder auch : die komplete exposition des Mannigfaltigen was unter einem Begrif enthalten ist, in so fern es verschieden ist. Alles Mannigfaltige, was unter einem Begrif enthalten ist, in so fern es verschieden ist, ist sich opponirt. Einteilung kann man also auch so definiren: sie ist der complete Inbegrif der oppositorum, in so fern sie unter einem conceptui communi enthalten sind z. E. Gelehrte und Ungelehrte sind opposita und sind unter dem Begrif der Menschen enthalten. Bei jeder Einteilung muß ich also sehn, daß die membra dividentia, opposita sind, daß sie unter einen conceptum communem gehören, und daß sie die Sphäre des conceptus divisi ausmachen z. E. außer recht- spiz- und stumpfwinklichten Dreieken müßen keine mehr seyn. Es muß immer das contradictorische Gegenteil seyn, nicht das contrarium oder Wiederspiel z. E. nicht Erkenntniß und Irthum, denn beides ist etwas positives, und das leztere ist falsche Erkenntniß, sondern Erkenntniß und Unwißenheit. Der eingeteilte Begrif muß also nicht weniger nicht mehr enthalten, als alle Glieder wenn sie zusammengenommen werden. Die Glieder müßen also entgegengesezt seyn und eines muß nicht im andern enthalten seyn. Z. E. wenn man die Menschen einteilen wolte, in Gelehrte, Ungelehrte und Philosophen, da sind die lezteren schon unter den erstem enthalten. — Man muß unterscheiden, Einteilung, Nebeneinteilung und Untereinteilung. Nebeneinteilung ist, wenn ich den Begrif verschiedenemal einteile oder in verschiedener Absicht. Z. E. wenn ich die Triangel einteile ratione laterum et angulorum. Untereinteilung besteht, wenn ich die membra dividentia einteile. Die Subdivision kann ins unendliche f ortgesezt werden, comparativ kann sie endlich seyn. Die codivision geht auch, besonders bei Erfahrungs Begriffen ins unendliche, denn wer kann alle relationen der Begriffe erschöpfen ? Alle Einteilung ist eine Einteilung in 2 Glieder oder eine Dichotomie, in mehr als 2 Glieder, das ist Polytomie. Jede Polytomie ist eine mittelbare nicht primitive Einteilung. Die erste Einteilung ist Dichotomie, denn die membra dividentia solln opposita seyn. Von a ist doch das Gegenteil nichts mehr als non a. Die Triangel müßen eingeteilt werden in rechtwinklichte und nicht rechtwinklichte oder schiefwinklichte. Jede Polytomie hat den Nachteil daß sie empirisch ist, aber dichotomie ist apodiktisch, denn a oder non a muß jedes Ding seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 47
    }
   ]
  },
  {
   "id": "s27",
   "title": "Von den Urteilen.",
   "titleSrc": "heading",
   "headings": [
    "Von den Urteilen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s27-001",
     "kind": "heading",
     "aa": 577,
     "text": "Von den Urteilen."
    },
    {
     "id": "poelitz-s27-002",
     "kind": "text",
     "aa": 577,
     "ms": [
      {
       "p": 104,
       "i": 139
      }
     ],
     "text": "Die Vorstellung des Verhältnißes verschiedener Begriffe zu einem Bewustseyn ist ein Urteil z. E. Ich habe 2 Begriffe Mensch und sterblich, so betracht ich ihr Verhältniß zu einem Bewustsein, dazu sie gehören: denn was ich durch den Begrif des Menschen denke, denk ich auch durch den Begrif der Sterblichkeit, und das Urteil lautet so : Menschen sind sterblich. Man kann auch sagen : Urteil ist die Vereinigung verschiedener Begriffe in einem Bewustsein. Ein jeder Begrif ist von der Art daß er verschiedene Vorstellungen in einem Bewustsein vereinigt, kann man nun wieder verschiedene Begriffe in einem Bewustsein vereinigen, so ist das Urteil. — Wir kommen jezt zu den Verstandes Handlungen, die bei jedem Urteil sind. Sie können auf folgende 4 reducirt werden. Die Urteile können betrachtet werden:",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-003",
     "kind": "text",
     "aa": 577,
     "text": "1.) Der Qualitaet nach, sind sie affirmantes, negantes und infinitae.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s27-004",
     "kind": "text",
     "aa": 577,
     "text": "2.) Der Quantitaet nach, universales, particulares1) et singulares.",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s27-005",
     "kind": "text",
     "aa": 577,
     "text": "3.) Der Relation nach, categorische, Ivypothetische und disjuncti\\e.",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-006",
     "kind": "text",
     "aa": 577,
     "text": "4.) Der Modalitaet nach, problematische, aßertorische, und apodiktische.",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "poelitz-s27-007",
     "kind": "text",
     "aa": 577,
     "text": "Anmerkung: Obgleich die Logiker zeigen daß im Gebrauch die äff irmantes so viel als die infinitae und die vniversales so viel als die singulares gelten : so ist hier doch ein logischer Unterschied. Die actus des Verstandes sind doch 3fach, obgleich sie gleich viel gelten.",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-008",
     "kind": "text",
     "aa": 577,
     "text": "Jede dieser 4 Functionen des Verstandes geben einen Unterschied",
     "ocrConf": 53
    },
    {
     "id": "poelitz-s27-009",
     "kind": "text",
     "aa": 577,
     "text": "Urteile, bei bejahenden Urteilen vergleiche ich einen Begrif mit dem andern positiv; verneinende, wenn ich einen Begrif vom andern trenne; unendliche, wenn ich einen Begrif durch den andern einschränke z. E. alle Menschen sind sterblich, die Menschen sind nicht unsterblich oder anima est non mortalis. Alle bejahende Säze zeigen i) beßer hieße es Plurales denn hier wird nicht gesehen was von allen gelte,",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s27-010",
     "kind": "text",
     "aa": 577,
     "aaEnd": 578,
     "pages": [
      {
       "p": 578,
       "i": 102
      }
     ],
     "ms": [
      {
       "p": 105,
       "i": 402
      }
     ],
     "text": "wenns man von vielen gilt, oft gilts aber auch von allen — doch iener Ausdruck ist einmal accreditirt ihre Verbindung durch die copula: Ist an. Wenn sie mit non affizirt sind, so bedeuten sie die Opposition der Begriffe und das Urteil ist verneinend, durch dieses wird das Subject immer aus der Sphäre des Praedikats ausgeschloßen, als anima non est mortalis, hier schließ ich die Seele aus der Sphäre des Begrifs der Sterblichkeit aus, oder sage : die Seele ist nicht unter dem Begrif der Sterblichkeit enthalten. Bei den unendlichen Urteilen gedenke ich mir, daß das Subject in einer andern Sphäre als in dem Praedicat enthalten ist. Z. E. anima est non mortalis, hier gedenke ich mir daß die Seele nicht zu den Sterblichen gehöre, aber ich denke noch mehr, nehmlich daß sie zu den Unsterbliehen gehöre, ich denke sie mir in einer andern Sphäre als im Begrif enthalten. Bejahung und Verneinung sind Qualitaeten der Urteile. Wenn die Negation nicht die Copula affizirt, so ists kein verneinendes sondern ein bejahendes Urteil, denn die Copula dient zur Verknüpfung. Aus dem Grunde gilt das bejahende so viel als das unendliche Urteil. Durch dieses denkt man sich doch mehr als durch ein verneinendes, welches oben schon gezeigt ist. Sie heißen infinita, weil man von einem Subject unendlich viel mit non affizirte Praedicate sagen kann. Z. E. Stein ist nicht Eisen, nicht Gold, nicht Fleisch etc. etc. etc.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s27-011",
     "kind": "text",
     "aa": 578,
     "text": "Der Quantitaet nach sind sie algemeine, besondere und einzelne Urteile z. E. Alle Menschen, einige Menschen, Cajus ist sterblich. Bei vniversales und singulares gilt das Praedicat vom Subject ohne Ausnahme. Denn bei den ersten sage ich: alle Menschen sind sterblich; bei den andern ist ein coneeptus singularis von dem auch keine Ausnahme möglich Es ist nur ein Cajus. Also gelten sie im Gebrauch auch gleich viel. Die Logiker haben die Gewohnheit die Quantitaet und Qualitaet mit Vocalen anzuzeigen. Der Vers davon ist :",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-012",
     "kind": "text",
     "aa": 578,
     "text": "Aßerit A, negat E sed vniversaliter ambo.",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s27-013",
     "kind": "text",
     "aa": 578,
     "text": "Aßerit I, negat 0 sed particulariter ambo.",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-014",
     "kind": "text",
     "aa": 578,
     "aaEnd": 579,
     "pages": [
      {
       "p": 579,
       "i": 669
      }
     ],
     "ms": [
      {
       "p": 106,
       "i": 298,
       "raw": "10s",
       "inferred": true
      }
     ],
     "text": "Der Relation nach sind sie categorische deren Materie besteht aus 2 Begriffen, deren einer das Subject, der andere das Praedicat ist z. E. alle Menschen sind sterblich. Alle zeigt hier die Quantitaet an, sind ist copula, Mensch und sterblich ist die Materie, jenes das Subject, dies das Praedicat, hypothetische deren Materie aus 2 Urteilen besteht z. E. wenn Gott gerecht ist, so wird das Böse gestraft. Wenn der erste Saz angenommen wird, so muß der 2te auch angenommen werden. Es sind da 2 Erkenntniße die als Grund und Folgen miteinander verbunden sind, und disjunetive deren Materie aus 2 oder mehrern Urteilen besteht, die in Opposition betrachtet werden, wo ich denke daß wenn sie zusammengenommen werden, sie alles ausmachen, was von einem Gegenstand gedacht werden kann. Siedrucken eine logische Einteilung aus z. E. wenn die Welt nicht die beste wäre, so hätte Gott entweder keine beßere schaffen können oder wollen. Die Einteilung in categorische und hypothetische und disjunctive muß billig zuerst genommen werden, Aveil relation das wesentliche bei den Urteilen ist. Der Autor redt gleich vom Subject und Praedicat, als wenn die die Materie aller Urteile ausmachten. Man hat geglaubt, alle andere Urteile wären auch categorisch, nur anders eingekleiclt, aber das ist falsch: sie sind ganz andere species. Die Materie des categorischen Urteils ist Subject und Praedicat. Die Form ist die copula est und druckt die Relation des Subjects zum Praedicat aus.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-015",
     "kind": "text",
     "aa": 579,
     "aaEnd": 580,
     "pages": [
      {
       "p": 580,
       "i": 1825
      }
     ],
     "ms": [
      {
       "p": 107,
       "i": 961,
       "raw": "lor",
       "inferred": true
      }
     ],
     "text": "Der Modalitaet nach sind sie problematisch, assertorisch und apodiktisch. Modal Urteile sind die, wo die copula mit einer limitalötion affizirt ist z. E. alle Menschen sind nothwendig unsterblich, hier ist nothwendig die limitation, die die Art und Weise zeigt wie ich etwas behaupte oder verneine. Problematisch ist ein Urteil über deßen Wahrheit oder Unwahrheit ich nichts bestimme, oder ein Urteil, das nur der Möglichkeit nach gedacht wird, darunter verstehe ich nicht, daß die Sache möglich sey, sondern daß das Urteil möglich sey, daß es jemandem könne in die Gedanken kommen. Z. E. Die Seele ist körperlich. Aßertorisch über deßen Wahrheit ich etwas aus mache. Apodiktisch bei dem eine Noth wendigkeit statt findt z. E. die Seele des Menschen mag sterblich seyn, ist problematisch, sie ist sterblich, ist aßertorisch, sie ist nothwendig sterblich ist apodiktisch. Bei hypothetischen Urteilen besteht die Materie aus 2 Urteilen die als Grund und Folge miteinander verbunden sind. Im disjunctiven betrachte ich die Urteile im Verhältnis der Teile zum Ganzen und im categorischen sind 2 Begriffe im Verhältniß wie Subject und Praedicat, und die sind die bases der beiden vorhergehenden. Beim hypothetischen bediene ich mich des Worts, wenn. Wenn zeigt nur das Verhältniß an, in welchem die beiden Urteile gedacht werden. Das erste Urteil eines hypothetischen ist problematisch, ich laß unausgemacht, obs wahr sey oder nicht. Aßertorisch sagen, heist auch per thesin sagen, problematisch, per hypothesin sagen. Die Verknüpfung des Grundes und der Folgen ist Consequenz. Die Form eines hypothetischen Urteils besteht also in der Consequenz. Das Urteil, welches den Grund enthält heist antecedens, prius, und die Folge consequens, posterius. In den h\\qiothetischen Urteüen wird nichts aßertorisch gesagt als die Consequenz. Anmerkung. Es ist gut, wenn wir für jeden \\inserer Begriffe ein eigentümlich Wort haben, oft geht das aber nicht an. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s27-016",
     "kind": "text",
     "aa": 580,
     "ms": [
      {
       "p": 108,
       "i": 1037,
       "raw": "103",
       "inferred": true
      }
     ],
     "text": "Die Logiker definiren einen Saz per Judicium verbis prolatum, welches aber falsch ist, wir würden gar nicht urteilen, wenn wir keine Wörter hätten. Der Unterschied ist der : ein Urteil wird als im Verhältniß 2er Begrife als problematisch betracht, ein Saz als aßertorisch. Ehe ich einen Saz habe muß ich doch urteilen, ich urteile über vieles, was ich nicht ausmache. Aber bei jedem Saz muß ich die Wahrheit der Begriffe ausmachen. Ein problematischer Saz ist also eine Contradiction. Bei hypothetischen Urteilen ist die Consequenz ein Saz. Einige glauben es sey leicht einen hypothetischen Saz in einen categorischen zu verwandeln. Herr Professor Kant behauptet es gehe gar nicht an, weil sie ihrer Natur nach ganz verschieden sind. Sie scheinen einer ley zu seyn, nach genauerer Untersuchung sind sie es nicht, denn bei categorischen ist nichts problematisch sondern alles aßertorisch Z. E. es ist ein großer Unterschied zwischen dem Saz : alle Körper sind teilbar und : wenn alle Körper zusammengesezt sind, so sind sie teilbar. Beim ersten behaupte ich gerade zu, daß sie teilbar sind. Bei allen Urteilen die hypothetisch sind, sind 2 modi, modus ponens, wenn das antecedens wahr ist, so ist auch das consequens wahr, und modus tollens, wenn dieses falsch ist, so ist jenes auch falsch, welches noch in der Syllogistik vorkömmt. — Beim disjunctiven Urteil werden verschiedene propositionen wie sie opponirt sind, betrachtet, und wie sie zusammengenommen die Sphäre des conceptus divisi ausmachen.",
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s27-017",
     "kind": "text",
     "aa": 580,
     "aaEnd": 581,
     "pages": [
      {
       "p": 581,
       "i": 1012
      }
     ],
     "text": "Einige Urteile haben in sich eine affirmation und negation zugleich aber auf eine verstekte Art und die heißen exponible Urteile. Z. E. wenige Menschen sind gelehrt, hier stekt die negation darin: viele Menschen sind nicht gelehrt und die affirmation : emige Menschen sind gelehrt. Exponible Urteile gehören nicht in die Logik, denn ihre Eigenschaft wohnt nicht der Logik, sondern der Sprache bei, weil man 2 Urteile kurz auf einmal ausdrüken kann z. E. wenige Menschen sind tugendhaft, das besteht aus 2 Urteilen, nehmlich: einige Menschen sind tugendhaft und viele Menschen sind nicht tugendhaft, das gehört also eigentlich in die Grammatik, daß in unserer Sprache Urteile seyn können die exponirt werden müßen. Einem Urteil kann etwas anhengen das nicht logisch ist d. h. ästhetisch. Logisch ist das was dem Verstand, ästhetisch was den Sinnen gehört. Das Aesthetische oder was für die Empfindungen ist, muß vom logischen sorgfältig abgesondert werden, man muß blos das Verhältnis der Erkenntniß zum Verstand betrachten. Es ist z. E. lächerlich, da wo es auf Verstandesrichtigkeit ankäme, exclamationen zu gebrauchen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-018",
     "kind": "text",
     "aa": 581,
     "ms": [
      {
       "p": 109,
       "i": 765
      }
     ],
     "text": "Judicia practica enthalten ein Sollen in sich oder die Vorschrift einer möglichen Handlung, theoretica sagen, wie die Sachen sind oder nicht sind. Jene sezen immer eine Absicht voraus. Judicia demonstrabilia sind solche die eines Beweises fähig sind, indemonstrabilia, die keines Beweises fähig sind z. E. ein Körper ist ausgedehnt. Ein unmittelbar gewißes Urteil ist indemonstrabel. Der Autor redt noch von leeren Urteilen. Einige unmittelbar gewiße Urteile haben ihre unmittelbare Gewisheit von der Identitaet wie z. E. das angeführte Beispiel. Die Identitas ist entweder explicita oder implicita. Ist die Identitas explicita, so ist der Saz tavtologisch z. E. der Mensch ist ein Mensch und der ist unerweißlich und bedarf auch keines Beweises, und er ist völlig unmöglich, denn höher kann mans nicht bringen als die Identitaet des Subjects und Praedicats zu zeigen. Der implicite identische Saz ist erweislich z. E. der Mensch ist ein vernünftiges Wesen, und der tavtologische Saz ist virtualiter leer d. h. er ist ohne Gebrauch, Nuzen und Folgen z. E. Avenn ich vom Menschen weiter nichts zu sagen weiß, als daß er ein Mensch ist, so weiß ich gar nichts. Den implicite identischen Saz muß ich zergliedern, daß er explicite identisch wird. Der Beweis beruht also darauf: identitatem implicite in explicite zu verwandeln. Die implicite identische Säze sind nicht leer, denn sie machen das Praedicat, welches im Begrif des Dinges lag, klar. Der Autor sagt : Der gröste Teil unserer Erkenntniße beruht auf leeren Säzen, wobei er sich sehr unrichtig ausgedrukt hat. Er hätte sagen sollen : auf inrpliciter Identitaet. Also ein größer Teil unserer Erkenntniße beruht auf der analysi derselben, so fern ich die Identitaet des Subjects und Praedicats dadurch einsehe. —",
     "dehyphenated": 8,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-019",
     "kind": "text",
     "aa": 581,
     "text": "Die Urteile können sinnleer seyn, denn versteht man sie nicht, oder fruchtleer, das findt bei den Tavtologien statt. Alle Urteile dienen dazu uns von der Sache einen deutlichen Begrif zu machen und nie kommen wir zu einem deutlichen Begrif als durch ein Urteil. Das Urteil ist leer das keinen deutlichen Begrif zu Stande bringen kann. Daher auch die Tavtologien aus der Philosophie ausgelaßen werden . Mit Tavtologie hat eine Aehnlichkeit battologie d. h. der Gebrauch vieler unnüzen Worte, die an sich den Begrif doch nicht deutlich machen.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s27-020",
     "kind": "text",
     "aa": 581,
     "aaEnd": 582,
     "pages": [
      {
       "p": 582,
       "i": 127
      }
     ],
     "ms": [
      {
       "p": 110,
       "i": 714
      }
     ],
     "text": "Von unmittelbar gewißen Urteilen. Das sind solche die keiner Beweise fähig sind, es sind also Elementarsäze. Sie sind entweder analytisch oder synthetisch. Analytisch wenn ich die Gewisheit durch die Identitaet einsehe, synthetisch, wenn ich zum Begrif etwas hinzuthue. Beim analytischen nehme ich aus dem Begrif etwas heraus. Die unmittelbar gewiße Urteile a priori können Grundsäze heißen, weil andere aus ihnen können erwiesen werden, und weil sie keinem andern können subordinirt werden, daher heißen sie auch principia, (Anfänge) sie sind entweder intuitiva die in der Anschauung können dargestelt werden, denn heißen sie axiomata oder diskursive, die nur durch Begriffe ausgedrukt werden können, denn heißen sie acroamata. Anmerkung. Dieser Unterschied in axiomata und acroamata ist noch nie in der Logik gemacht als von Professor Kant. Postulat ist ein praktischer Grundsaz der eine mögliche Handlung vorstelt, wo voraus gesezt wird, daß die Art sie auszuführen unmittelbar gewis sey, — wo die Art nicht unmittelbar gewis ist, das heist ein Problem. Erkenntniße so fern sie unmittelbar a posteriori gegeben sind heißen Erfahrung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-021",
     "kind": "text",
     "aa": 582,
     "aaEnd": 583,
     "pages": [
      {
       "p": 583,
       "i": 1524
      }
     ],
     "text": "Von den Teilen eines Systems. — Die Teile heißen Glieder, weil sie zu einem Ganzen gehören, also bestimmt sind Die Glieder sind entweder principalia, oder minus principalia. Zu den ersten gehören Definitionen, Axiome, Akroamen, theoremata das ist ein theoretisch Urteil, welches eines Beweises fähig ist, problemata, dieses sind praktische Säze in so fern sie demonstrabel sind. Zum Theorem gehört thesis und demonstratio. Zum Problem gehört quaestio welche den Saz enthält der geleistet werden soll, resolutio die die Art enthält wie der Saz kann geleistet werden und demonstratio, daß wenn ich so werde verfahren haben, das erforderte geschehen werde. Zu den membris minus principalibus gehören corrolaria, welches unmittelbare Folgen aus einem der vorhergehenden Säze sind. Zuweilen nennt der Autor auch das corrolarium, was nicht blos durch einen Schluß kann erwiesen werden, weil er glaubt, daß der Leser die ganze Reihe von Schlüßen werde so geschwind durchgehen können, als 'wenn es ein einziger wäre. — Theoremata und corrolaria unterscheiden sich dadurch, daß die lezteren unmittelbar geschloßen, die erstem durch eine Reihe als Folgen aus unmittelbaren Säzen gezogen werden. Lemmata sind Säze, die in der Wißenschaft nicht einheimisch sind z. E. es ist ein Gott und ein anderes Leben in der Moral. Qualitas occulta ist der Name einer an sich unbekannten Kraft, so fern sie zum Erklärungs Grund gebrauchet wird, dieses gehöret eigentlich in die Physik. — Zu einem System kommen noch scholia hinzu, die keine membra sind, sondern nur dazu dienen das Systehm zu illustriren z. E. sie erzählen wenn der Saz erfunden, angefochten etc. etc. ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s27-022",
     "kind": "text",
     "aa": 583,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "in",
       "unresolved": true
      }
     ],
     "text": "Von Schlüßen seu de consequentiis immediatis.",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s27-023",
     "kind": "text",
     "aa": 583,
     "text": "Die Folgerung eines Urteils aus dem andern heist ein Schlus, die Folgerungen sind entweder mittelbar, wenn man außer dem Begrif den ein Urteil in sich enthält noch andere braucht, um ein Erkenntniß draus herzuleiten, oder unmittelbar wenn ein Saz aus dem andern folgt, beide nur der Form nach unterschieden sind und die Materien d. h. Subject und Praedicat dieselbe bleiben d. h. consequentia immediata. Man kann noch ein Judicium intermedium machen aber das ist bloß tavtologisch z. E. Alle Menschen sind sterblich einige Menschen sind Menschen, also sind einige sterblich. — Ein unmittelbarer Schlus heist auch Verstandesschlus, und ist vom ratiocinio Vernunftschlus unterschieden. Bei diesem ist immer noch ein Judicium medium und sie sind auch der Materie nach verschieden z. E. wenn ich sage: alle Menschen sind sterblich, also ist Cajus auch sterblich ; so ist das keine consequentia immediata, denn hier muß ich noch ein Judicium medium haben, Cajus ist ein Mensch. Consequentiae immediatae finden statt:",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s27-024",
     "kind": "text",
     "aa": 583,
     "text": "1.) per judicia aequipollentia welches aber würklich kein Schluß ist. Z. E. Einige Menschen sind tugendhaft, und nicht alle Menschen sind tugendhaft ist eben daßelbe. Hier findt also keine Folge statt, sondern es ist nur immer eine Substitution der Worte die denselben Begrif anzeigen.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-025",
     "kind": "text",
     "aa": 583,
     "text": "2.) per judicia subalternata. Ein Judicium subalternatum ist. so fern es unter dem andern enthalten ist wie z. E. besondere unter algemeinen; und die Vorstellung daß das besondere Urteil aus dem algemeinen folgt ist consequentia subalternata. Die beiden Urteile sind der Quantitaet nach unterschieden z. E. alle Menschen sind sterblich, also sind einige Menschen sterblich. Also ab vniversali ad particularem valet consequentia.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-026",
     "kind": "text",
     "aa": 583,
     "text": "3.) per judicia opposita. Hier betritt die Veränderung dieQualitaet z. E. einige Menschen sind gelehrt, also sind einige Menschen nicht gelehrt. Die Opposition ist 3fach:",
     "dehyphenated": 1,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s27-027",
     "kind": "text",
     "aa": 583,
     "text": "a.) per judicia contradictorie opposita, wenn in einem das",
     "ocrConf": 55
    },
    {
     "id": "poelitz-s27-028",
     "kind": "text",
     "aa": 583,
     "text": "besonders oder algemein verneinet oder bejahet wird, was im",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s27-029",
     "kind": "text",
     "aa": 583,
     "text": "andern algemein oder besonders bejahet oder verneinet wird.",
     "ocrConf": 58
    },
    {
     "id": "poelitz-s27-030",
     "kind": "text",
     "aa": 583,
     "aaEnd": 584,
     "pages": [
      {
       "p": 584,
       "i": 65
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 12,
       "raw": "m",
       "unresolved": true
      }
     ],
     "text": "Das ist die ächte Opposition weil sie nichts mehr nichts weniger enthält, als was zu einer Opposition erforderlich ist. Sie können",
     "joined": [
      "layout"
     ],
     "ocrConf": 39
    },
    {
     "id": "poelitz-s27-031",
     "kind": "text",
     "aa": 584,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "nicht",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "beide wahr auch nicht falsch seyn, und wenn einer wahr,",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s27-032",
     "kind": "text",
     "aa": 584,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "so",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 612,
       "raw": "b)",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "ist der andere falsch und umgekehrt. Denn wenn ich etwas algemein bejahe, so sage ich daß von allem was unter einem Begrif enthalten ist, dieses oder jenes kann gesezet werden. Der andere der mir wiedersprechen will, darf nur sagen: In einigen Fällen findt eine Ausnahme statt : so ist mein Saz schon falsch, oder ist seiner falsch, so ist meiner wahr. Apagogische Beweise sind solche, wo ich von der Falschheit des contradictorie oppositi auf die Wahrheit meines Sazes schließe. Diese Beweise sind gut nur muß man sich hüten in Wißenschaften Sätze für contradictorie opposita zu halten, die es doch nicht sind. per judicia subcontrarie opposita. Wenn in einem das",
     "dehyphenated": 2,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-033",
     "kind": "text",
     "aa": 584,
     "text": "particulariter affirmirt oder negirt wird, was das andere particulariter affirmirt oder negirt z. E. einige Menschen sind gelehrt,",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "poelitz-s27-034",
     "kind": "text",
     "aa": 584,
     "text": "einige Menschen sind nicht gelehrt. Hier ist kerne Opposition",
     "ocrConf": 42
    },
    {
     "id": "poelitz-s27-035",
     "kind": "text",
     "aa": 584,
     "text": "im strikten Verstände, denn im andern wird das nicht von demselben Menschen negirt, was im ersten affirmirt wird. Sie können",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "poelitz-s27-036",
     "kind": "text",
     "aa": 584,
     "text": "beide wahr, aber beide nicht falsch seyn, denn wären sie falsch,",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s27-037",
     "kind": "text",
     "aa": 584,
     "text": "so müsten die beiden Säze wahr seyn: kein Mensch ist gelehrt,",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s27-038",
     "kind": "text",
     "aa": 584,
     "text": "und alle Menschen sind gelehrt. — Die sind aber falsch, also",
     "ocrConf": 38
    },
    {
     "id": "poelitz-s27-039",
     "kind": "text",
     "aa": 584,
     "text": "müßen vermöge der contradictorischen Opposition die vorhin",
     "ocrConf": 54
    },
    {
     "id": "poelitz-s27-040",
     "kind": "text",
     "aa": 584,
     "text": "angeführten Säze wahr seyn. Daher kann ich schließen, wenn",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s27-041",
     "kind": "text",
     "aa": 584,
     "text": "der eme falsch ist, ist der andere wahr, aber nicht umgekehrt. c.) per judicia contrarie opposita. Beide judicia opposita",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s27-042",
     "kind": "text",
     "aa": 584,
     "text": "sind hier algemein, das eine bejahend das andere verneinend.",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s27-043",
     "kind": "text",
     "aa": 584,
     "text": "Z. E. alle Menschen sind gelehrt, alle Menschen sind nicht gelehrt, die können beide falsch seyn, weil eines derselben mehr",
     "dehyphenated": 1,
     "ocrConf": 49
    },
    {
     "id": "poelitz-s27-044",
     "kind": "text",
     "aa": 584,
     "text": "sagt als zur Opposition nöthig ist und das überflüßig ist, worin",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-045",
     "kind": "text",
     "aa": 584,
     "text": "die Falschheit stekt, aber sie können nicht beide wahr seyn.",
     "ocrConf": 37
    },
    {
     "id": "poelitz-s27-046",
     "kind": "text",
     "aa": 584,
     "ms": [
      {
       "p": 113,
       "i": 48
      }
     ],
     "text": "4.) per judicia con versa seu per conversionem. Das betrift die Relation. Bei der conversion bleibt die Qualitaet der Urteile dieselbe, bei der contraposition wird sie verändert. Ich schließe ein Urteil aus",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s27-047",
     "kind": "text",
     "aa": 584,
     "text": "dem andern per conversionem, wenn ich das Subject zum Praedicat",
     "ocrConf": 43
    },
    {
     "id": "poelitz-s27-048",
     "kind": "text",
     "aa": 584,
     "text": "mache und umgekehrt. Bei einer Conversion wird entweder die Qualitaet verändert, denn ist das conversum von dem convertente der",
     "dehyphenated": 1,
     "ocrConf": 48
    },
    {
     "id": "poelitz-s27-049",
     "kind": "text",
     "aa": 584,
     "text": "Quantitaet nach unterschieden und die conversio heist per accidens,",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s27-050",
     "kind": "text",
     "aa": 584,
     "aaEnd": 585,
     "pages": [
      {
       "p": 585,
       "i": 73
      }
     ],
     "ms": [
      {
       "p": 114,
       "i": 1961,
       "raw": "in",
       "inferred": true
      }
     ],
     "text": "wenn sie bleibt so ists conversio simpliciter talis. Z. E. alle Menschen sind sterblich also sind einige Sterbliche Menschen das ist per accidens. Kein Mensch ist ohne Sünde, also nichts was ohne Sünde ist, ist ein Mensch, das ist simpliciter talis. Algemein bejahende Urteile laßen sich nur per accidens umkehren, denn das Subject ist unter der Sphäre des Praedicats enthalten, weil das immer latior seyn muß als das Subject. Es gehört also zu dem, was unter dem Praedicat enthalten ist, ist aber nicht allein unter ihm enthalten, mache ich nun das Subject zum Praedicat und das Praedicat zum Subject; so muß ich, da die Sphäre des Praedicats nicht kleiner seyn kann, als die des Subjects, und die des Subjects nicht großer, das Subject einschrenken. Z. E. alle Menschen sind sterblich, kehrte ichs um und wolte sagen: alles was sterblich ist, ist Mensch, so wäre das Subject latior als das Praedicat, ich muß das Subject also einschrenken und sagen: einige Sterbliche sind Menschen. Algemein verneinende Urteile laßen sich nur simpliciter umkehren, denn ich hebe das Subject aus der Sphäre des Praedicats : wenn ichs umkehre kann ich also sagen : alles was unter der Sphäre des Praedicats gehört, gehört nicht unter die Sphäre des Subjects z. E. omnes honiines non sunt irrationales, hier kann ich sagen: Alles dem das Praedicat irrationales zukommt, gehört nicht unter den Begrif vom Menschen, eben so, wie alles, was unter den Begrif vom Menschen gehört, nicht unter den Begrif von irrationales gehört. Denn 2 sich algemein wiedersprechende Begriffe, wiedersprechen sich doch m gleichem Umfange. Ich kann also sagen : omne irrationale non est homo. Alle particular Säze laßen sich simpliciter umkehren, denn im judicio convertente muste ich das Subject einschrenken, sonst wäre es latior als das Praedicat gewesen, im judicio converso wird das Praedicat Subject und das Subject Praedicat, das izige Subject war also latior als das jezige Praedicat also muß es eingeschrenkt werden z. E. einige Menschen sind gelehrt ; also einige Gelehrte sind Menschen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s27-051",
     "kind": "text",
     "aa": 585,
     "aaEnd": 586,
     "pages": [
      {
       "p": 586,
       "i": 689
      }
     ],
     "text": "5.) per judicia contraposita. Da findt eine solche metathesis, d. h. Versezung der terminorum statt, wo die Qualitaet mit verändert wird, es wird nehmlich ein negativer Saz Die Quantitaet aber bleibt, weil nur ein algemeiner Saz contraponirt werden kann. Z. E. alle Menschen sind sterblich. Was nicht sterblich ist, ist kein Mensch. Alle algemein bejahende Urteile laßen sich contraponiren. Sie sagen, wo das Subject ist, ist auch das Praedicat, und wo das Praedicat also nicht ist, ist auch das Subject nicht (das ist aber die contraposition) denn wäre das Subject so müste auch das praedicat seyn. Man kann sie auch so definiren : propositio A contraponitur, si praedicatum ejus mutetur in conceptum negativum, hie fiat subiectum novae propositionis, de quo subjeetum prioris A vniversaliter in hac negatur. Bei der eontraposition betrift die Veränderung blos die ModaHtaet. Sie bedeut die Noth wendigkeit eines bejahenden Begrifs. — Alle consequentiae immediatae haben die Beschaffenheit, daß keine Subsumtion statt finden kann als die tavtologiseh ist die ist aber keine wahre Subsumtion. Anmerkung. Manche algemein bejahende Urteile laßen sich auch simpliciter umkehren, das fliest aber nicht aus der Form derselben, sondern aus der besondern Beschaffenheit ihrer Materie. Z. E. Alles unveränderliche ist nothwendig, und alles noth wendige ist unveränderlich.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 42
    }
   ]
  },
  {
   "id": "s28",
   "title": "Von Vernunftschlüßen.",
   "titleSrc": "heading",
   "headings": [
    "Von Vernunftschlüßen."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s28-001",
     "kind": "heading",
     "aa": 586,
     "text": "Von Vernunftschlüßen."
    },
    {
     "id": "poelitz-s28-002",
     "kind": "text",
     "aa": 586,
     "ms": [
      {
       "p": 115,
       "i": 486
      }
     ],
     "text": "Ein Vernunftschluß ist die Wahrheit eines Urteils so fern erkannt wird, daß die Subsumtion derselben unter der Bedingung einer algemeinen Regel steht d. h. ich sage: es findt das beim Erkenntniß statt, welches eine Bedingung ist unter welcher eine algemeine Regel etwas affirmirt oder negirt, kommt nun dem Erkenntniß die Bedingung zu, so auch das was die Regel sagt. Cajus ist mit dem Begrif des Menschen nicht einerley. Die Regel ist, ich muß zeigen, daß der Begrif des Mensehen beim Cajus statt finde, und denn kann ich sagen, er sey sterblich. Zuerst ist also bei jedem Schluß eine algemeine Regel, major propositio. Der Saz der ein Erkenntniß unter die Bedingung einer Regel subsumirt ist minor. Subsumiren heist zu erkennen geben, daß dies oder jenes unter der Bedingung dieser Regel enthalten sei. Der Saz der das Praedicat der Regel von der subsumirten Erkenntniß bejaht oder verneint heist Schluß, •conclusio. Wir haben also 2 Vorsäze die Praemißen heißen. Im Vernunftschluß ist die conclusio gleich gegeben, sobald die Praemißen und die consequenz gegeben ist. Die Logik betrachtet also 2 Praemißen und deren ihre Wahrheit und die Richtigkeit der Consequenz aus denselben. Bei Verwerfung eines Vernunftschlußes muß man nie die conclusion zuerst verwerfen, sondern entweder die praemißen oder die consequenz. Die Praemißen machen die Materie die consequenz die Form des Vernunftschlußes aus.",
     "dehyphenated": 8,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s28-003",
     "kind": "text",
     "aa": 586,
     "aaEnd": 587,
     "pages": [
      {
       "p": 587,
       "i": 278
      }
     ],
     "ms": [
      {
       "p": 116,
       "i": 996,
       "raw": "m.",
       "inferred": true
      }
     ],
     "text": "Die Schlüße können nicht ratione qualitatis eingeteilt werden, weil jeder major eine Regel also algemein ist, auch nicht quantitatis weil es einerlei ist ob die conclusion affirmirend oder negirend sey, auch nicht modalitatis, weil jede conclusion eine Noth wendigkeit enthält, also alle apodiktisch sind. Der relation nach werden sie eingeteilt in categorische, in welchen major ein categorischer Saz ist, in hypothetische, in welchen major ein hypothetischer Saz ist, oder ein problematischer, der minor ist aßertorisch, in disjunctive, in welchen major ein disjunctiver Saz ist. Der Autor nennt die categorischen, ordentliche die andern, außerordentliche, dies ist aber falsch, sie sind alle drei ganz richtige von einander verschiedene Verstandes Handlungen. Dieser Fehler der Logiker kommt daher, weil sie glauben sie hätten immer mit categorischen Schlüßen zu thun. Sie fehlen daher auch in der Definition der propositionen. — Ein Vernunftschlus entsteht, wenn eine nota remota dem Subject wegen einer nota intermedia zukommt, oder removirt wird, weil sie der nota intermedia wiederspricht. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 45
    },
    {
     "id": "poelitz-s28-004",
     "kind": "text",
     "aa": 587,
     "aaEnd": 588,
     "pages": [
      {
       "p": 588,
       "i": 1735
      }
     ],
     "ms": [
      {
       "p": 117,
       "i": 1590,
       "raw": "nr",
       "inferred": true
      },
      {
       "p": 118,
       "i": 3474
      }
     ],
     "text": "Das Praedicat in der conclusion heist terminus major weil er eine größere Sphäre hat als das Subject. Das Subject heist also terminus minor, und die nota intermedia heist terminus medius. Die Logiker sagen: der erste Saz heist major, weil das Praedicat der conclusion terminus major und in ihr enthalten ist. Die 2te Praemiße heiße minor, weil das Subject in der Conclusion terminus minor und in ihr enthalten ist. Daß die termini so verteilt seyn müßen ist leicht einzusehn. Ich verknüpfe das entferntere Merkmal (major) mit einem nähern (medius), major und medius kommen also in majori, weil ich den major in der conclusion vom Subject praediziren will, und sagen, das Subject sey unter ihm enthalten. In minori verknüpfe ich die nota intermedia (medius) mit dem Subject (minor) hier kommt also terminus medius und minor, und in der conclusion sage ich, also kommt das entfernte Merkmal (major) der Sache zu (minor) hier kommt major und minor zusammen. Diese Benennungen müßen auf alle Syllogismen gehn, sowol categorische, hypothetische als disjunctive. Der hypothetische Saz, wo der major aus 2 Urteilen besteht, hätte nach dieser Definition keinen major und keinen minor, also fallen diese Definitionen weg und unsere sind die rechten. Denn hätte er nicht minorem und majorem, so war er auch kein Schluß. Beim categorischen sind 2 Begriffe im major, da finden also auch 2 Termhii statt major und medius, beim hypothetischen sind 2 Urteile z. E. wenn Gott gerecht ist bestraft er das beharrlich böse, hier sind 4 Termini. Beim categorischen Schluß sind immer 3 Begriffe. Die conclusion gehört zum Schluß nicht als ein Teil, sondern als die Folge, denn wenn die Praemißen gegeben sind, ist die conclusion auch gegeben. Die richtige Folgerung der conclusion oder die Richtigkeit der Consequenz macht die Form des Schkißes aus. Auf conclusion kommt alles an, und auf sie laufen alle Schlüße hinaus. Zuweilen ist die conclusion wahr, die Praemißen auch, aber der Schluß nehmlich die consequenz ist doch falsch, und solche Schlüße muß man immer bestreiten. — Ein Vernunftschluß wird eingeteilt in verum et falsum. Ein Schluß kann falsch seyn ratione materiae et formae. Ein jedes ratiocinium ist vel purum vel hybridum, wenn außer den 3 Säzen des Vernunftschlußes noch eine consequentia immediata miteingemischt wird z. E. kein denkend Wesen ist zusammengesezt — (nichts zusammengeseztes ist ein denkend Wesen) alle Körper sind zusammengesezt, also sind keine Körper denkende Wesen. Er ist richtig was Inhalt und Consequenz betrift, aber doch kein eigentlicher Vernunftschluß. Zum ratiocinio gehört also noch daß es purum sey. Wir werden unten zeigen daß alle Vernunftschlüße in den 3 lezten Figuren hybrida sind, weil eine consequentia immediata tacite drin stekt. Ratiocinium formale est Syllogismus ; man sagt sonst verbis expreßum, das ist falsch, ohne die Worte kann man gar nicht denken. Wir machen im gemeinen Leben immer Vernunftschlüße, nur nicht formlich, sind sie förmliche ratiocinia, so heißen sie Syllogismen. Der Autor redt ferner von den formal principien aller Schlüße, denn das material ist die Regel und giebt dazu an den Saz des Wiederspruchs, der ist wol das principium der Urteile aber nicht der Schlüße. Es sind eigentlich so viele formal principien als Gattungen der Schlüße. Das categorische ist nach dem Autor das dictum de omni et nullo. Wir behaupten aber, es geht auf alle Schlüße, denn wir schließen ja immer vom algemeinen aufs besondere. Wenn man das dictum de omni, et nullo so annimmt, nehmlich quid quid valet de genere et specie, valet quoque de omnibus sub isto genere et specie contentis — quidquid non valet de genere et specie etc. etc. non valet etc. etc. Denn giebts ein principium der categorischen Vernunftschlüße nehmlich es ist hier ein Verhältniß des Subjects und Praedicats. Ein Saz der das principium der Möglichkeit der Vernunftschlüße werden soll, kann durch keinen Vernunftschluß erwiesen werden. Das dictum de omni et nullo last sich aber beweisen und zwar durch das princip das wir anführen werden — Das der affirmirenden Schlüße lautet so: nota notae est nota rei ipsius, Was den Merkmalen zukommt, kommt den Sachen selbst zu. Der negirenden: repugnans notae repugnat rei ipsi, was dem Merkmal nicht zukommt, kommt dem Dinge auch nicht zu. Z. E.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 13,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s28-005",
     "kind": "text",
     "aa": 589,
     "text": "Nichts zusaminengeseztes ist ein denkend Wesen",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s28-006",
     "kind": "text",
     "aa": 589,
     "text": "Alle Körper sind zusammengesezt",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s28-007",
     "kind": "text",
     "aa": 589,
     "text": "Also ist kein Körper ein denkend Wesen. Denkend Wesen wiederstreitet dem zusammengesezten, das zusammengesezte ist ein Merkmal des Körpers. Denkend repugnat notae et rei ipsi d. h. dem Körper.",
     "dehyphenated": 1,
     "ocrConf": 53
    },
    {
     "id": "poelitz-s28-008",
     "kind": "text",
     "aa": 589,
     "text": "Alles zusammengesezte ist teilbar",
     "ocrConf": 47
    },
    {
     "id": "poelitz-s28-009",
     "kind": "text",
     "aa": 589,
     "text": "Alle Körper sind zusammengesezt,",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s28-010",
     "kind": "text",
     "aa": 589,
     "text": "Also sind alle Körper teilbar.",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s28-011",
     "kind": "text",
     "aa": 589,
     "ms": [
      {
       "p": 119,
       "i": 720
      }
     ],
     "text": "Das teilbar fliest nicht aus dem Körper, es ist nota remota. Durch intermediam muß sie ihm beigelegt werden. Teilbar ist ein Merkmal des zusammengesezten, zusammengesezt ist ein Merkmal des Körpers, also ist hier nota notae est nota rei ipsius d. h. des Körpers. Nun wird das dictum de omni et nullo davon abgeleitet. Das genus und die speis cies ist doch nota des Dinges, sie ist das algemeine Merkmal, quicquid competit generi seu speciei est nota notae, competit Ulis sub eo contentis d. h. nota rei ipsius. Dies sind die principia aller categorischen Schlüße und zwar die allerhöchsten. In jedem hypothetischen Saz ist doch ein antecedens und consequens und das principium der hypothetischen Schlüße ist dies: a positione antecedentis ad positionem consequentis valet consequentia, dies ist das principium aller affirmirenden Schlüße und a remotione consequentis ad remotionem antecedentis, das ist das principium aller negirenden Schlüße. Dies fliest aus dem ersten, denn wäre das antecedens, so müste auch das consequens seyn. In jedem disjunctiven Schluß ist das principium a veritate vnius membri divisionis ad remotionem ceterorum (weil sie alle opponirt sind) et a remotione ceterorum ad positionem vnius quod manet. Der Positus der terminorum eines categorischen Schlußes in den Praemißen ist eine Figur. In der lsten Praemiße ist major terrninus in der 2ten minor, da aber ein jedes Urteil 2 Termini haben muß, so kommt in beiden noch hinzu terminus medius. Es wird also alles bei den Figuren auf die Stellung des termini medii ankommen. Er kann in einem, loco subjecti, im andern Saz loco praedicati, oder in beiden loco subjecti oder in beiden loco praedicati seyn:",
     "dehyphenated": 8,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s28-012",
     "kind": "table",
     "aa": 589,
     "text": "",
     "lines": [
      "lste Figur",
      "2te Figur",
      "3te Figur",
      "4te Figur",
      "Subject Praedicat",
      "Subject Praedicat",
      "Subject Praedicat",
      "Subject Praedicat",
      "Medius —",
      "— Medius",
      "Medius —",
      "— Medius",
      "— Medius",
      "— Medius",
      "Medius —",
      "Medius —"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "poelitz-s28-013",
     "kind": "text",
     "aa": 590,
     "text": "Z. E. Kein Körper ist eine denkende Substanz. Medius zusamniengesezt der Schluß in der lsten Figur ist : Nichts zusammengeseztes ist eine denkende Substanz Alle Körper sind zusammengesezt ; Kern Körper ist eine denkende Substanz. Z. E. Kein Körper ist ein denkend Wesen medius zusammengesezt. Der Schluß in der 2ten Figur ist: Kein denkend Wesen ist zusammengesezt Alle Körper sind ziasammengesezt Kein Körper ist ein denkend Wesen. Z. E. Einige Tugendhafte sind unvolkommen medius sie sind Menschen. Der Schluß in der 3ten Figur ist:",
     "dehyphenated": 2,
     "ocrConf": 38
    },
    {
     "id": "poelitz-s28-014",
     "kind": "text",
     "aa": 590,
     "text": "Alle Menschen sind unvolkommen",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s28-015",
     "kind": "text",
     "aa": 590,
     "text": "Einige Menschen sind tugendhaft",
     "ocrConf": 54
    },
    {
     "id": "poelitz-s28-016",
     "kind": "text",
     "aa": 590,
     "text": "Einige Tugendhafte sind unvolkommen.",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s28-017",
     "kind": "text",
     "aa": 590,
     "ms": [
      {
       "p": 120,
       "i": 0
      }
     ],
     "text": "Z. E. Einiges was eine Kraft zu handeln hat ist ein Geist medius:",
     "ocrConf": 37
    },
    {
     "id": "poelitz-s28-018",
     "kind": "text",
     "aa": 590,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "weil",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "er eine Substanz ist. Der Schluß in der 4ten Figur ist der:",
     "ocrConf": 36
    },
    {
     "id": "poelitz-s28-019",
     "kind": "text",
     "aa": 590,
     "text": "Ein jeder Geist ist eine Substanz",
     "ocrConf": 36
    },
    {
     "id": "poelitz-s28-020",
     "kind": "text",
     "aa": 590,
     "text": "Eine jede Substanz hat die Kraft zu handeln",
     "ocrConf": 40
    },
    {
     "id": "poelitz-s28-021",
     "kind": "text",
     "aa": 590,
     "text": "Einiges was eine Kraft zu handeln hat, ist ein Geist.",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s28-022",
     "kind": "text",
     "aa": 590,
     "text": "Diesen Figuren liegt zum Grunde, daß man per notam intermediam zur Beschaffenheit des Dinges gelangt unter der Regel: nota notae est nota rei ipsius, et nota repugnans repugnat rei ipsi Der major sagt daß dies Merkmal diesem oder jenem Subject zukomme, und die conclusio sagt daß nota notae dem Dinge selbst zukomme, welches oben schon gezeigt.",
     "ocrConf": 49
    },
    {
     "id": "poelitz-s28-023",
     "kind": "text",
     "aa": 590,
     "text": "Wenn der terminus medius soll die Stelle der notae intermediae haben, so muß er in propositione majori das Subject in minori das Praedicat seyn. Denn in majori sehe ich ob die nota remota der intermediae zukomme, die intermedia muß also das Subject seyn. In minori vergleiche ich die intermedia mit dem Dinge selbst, sie muß also in minori das Praedicat seyn. In der 2ten Figur bin ich nicht a nota intermedia ad remotam gekommen, sondern der Schluß muste so seyn: ich sage nach der 2ten Figur:",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s28-024",
     "kind": "text",
     "aa": 590,
     "text": "Kein denkend Wesen ist zusammengesezt, simpliciter umgekehrt: Nichts zusammengeseztes ist ein denkend Wesen,",
     "ocrConf": 51
    },
    {
     "id": "poelitz-s28-025",
     "kind": "text",
     "aa": 590,
     "text": "Alle Körper sind zusammengesezt,",
     "ocrConf": 50
    },
    {
     "id": "poelitz-s28-026",
     "kind": "text",
     "aa": 590,
     "aaEnd": 591,
     "pages": [
      {
       "p": 591,
       "i": 36
      }
     ],
     "text": "Kein Körper ist ein denkend WTesen. und so in den übrigen Figuren. Diese Verschiedenheit der Figuren beruht auf der Einmischung einer consequentiae immediatae.",
     "joined": [
      "layout"
     ],
     "ocrConf": 36
    },
    {
     "id": "poelitz-s28-027",
     "kind": "text",
     "aa": 591,
     "text": "Alle 4 Figuren sind ganz richtig nur nicht logisch volkommen, es sind nicht ratiocinia pura sondern hybrida. —",
     "ocrConf": 34
    },
    {
     "id": "poelitz-s28-028",
     "kind": "text",
     "aa": 591,
     "ms": [
      {
       "p": 121,
       "i": 347
      }
     ],
     "text": "Modus besteht aus der Quantitaet und Qualitaet der Säze eines Schlußes die mit dem Vocal ausgedrukt werden. Wir wollen einige hersezen: aaa, aae, aai, aao, aea, aee, eaa etc. etc. Solcher modorum giebts 4 Klaßen, weil 4 Vocales sind und auf die Art bekommt man 64 modi, in jeder Figur 16, die sich denken laßen, 19 aber sind nur davon die mit den algemeinen Regeln der Vernunftschlüße übereinstimmen und unter denen sind doch nur 10 vtiles.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  },
  {
   "id": "s29",
   "title": "Regeln der categorischen Schlüße.",
   "titleSrc": "heading",
   "headings": [
    "Regeln der categorischen Schlüße."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s29-001",
     "kind": "heading",
     "aa": 591,
     "text": "Regeln der categorischen Schlüße."
    },
    {
     "id": "poelitz-s29-002",
     "kind": "text",
     "aa": 591,
     "text": "1.) Der Autor sagt: in jedem ordentlichen Syllogismus müßen nicht mehr als 3 termini seyn,denn ich soll 2 Begriffe durch eine notam interlsmediam verbinden. Das liegt in der Definition der Syllogismen. Unter ordentlichen Syllogismen versteht der Autor und alle andern den categorischen Syllogismus auf die wollen sie alles reduciren, damit sie ihr Figurenspiel treiben können, welches bei den hypothetischen und disjunctiven nicht angeht.",
     "dehyphenated": 1,
     "ocrConf": 46
    },
    {
     "id": "poelitz-s29-003",
     "kind": "text",
     "aa": 591,
     "text": "2.) Der Terminus medius muß nicht in der conclusion seyn. Dies Versehn findt nicht so leicht statt, weil es zu offenbar ist.",
     "ocrConf": 39
    }
   ]
  },
  {
   "id": "s30",
   "title": "Regeln der Vernunftschlüße.",
   "titleSrc": "heading",
   "headings": [
    "Regeln der Vernunftschlüße."
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s30-001",
     "kind": "heading",
     "aa": 591,
     "text": "Regeln der Vernunftschlüße."
    },
    {
     "id": "poelitz-s30-002",
     "kind": "text",
     "aa": 591,
     "text": "1.) ex puris negativis nihil sequitur. Denn wenn alles verneinend ist, so muß doch die Subsumtion affirmirend seyn, denn sie sagt ja, es stehe etwas unter der Bedingung der Regel — oder war etwas verneinend, so war keine Subsumtion.",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s30-003",
     "kind": "text",
     "aa": 591,
     "text": "2.) ex puris particularibus nihil sequitur. Alsdenn war wieder keine Regel, denn jede Regel muß algemein seyn.",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s30-004",
     "kind": "text",
     "aa": 591,
     "aaEnd": 592,
     "pages": [
      {
       "p": 592,
       "i": 541
      }
     ],
     "ms": [
      {
       "p": 122,
       "i": 676
      }
     ],
     "text": "3.) conclusio sequitur partem debiliorem. pars debilior ist negativ und particulär. Ist ein Saz negative oder particulär, so ist die conclusion auch negative oder particulär. Denn wenn ein Saz particulär ist, so ist die Subsumtion auch particulär und wenn ich sage : einiges ist nur unter der Regel enthalten, so kann ich in der conclusion auch sagen, daß das Praedicat der Regel einigem zukomme Wenn die Regel negativ ist, so muß die conclusion auch negativ seyn, denn die Regel sagt: von allem was unter der Bedingung der Regel steht, muß dies oder jenes verneinet werden, also mus die conclusion auch das Praedicat verneinen, weil die Subsumtion sagt, dies stehe unter der Bedingung der Regel.",
     "joined": [
      "layout"
     ],
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-005",
     "kind": "text",
     "aa": 592,
     "text": "Die Regel der lsten Figur ist: major sit vniversalis, weil er eine Regel ist, minor affirmans weil er die Subsumtion ist. Die erste Figur kann conclusionen haben von aller Quantitaet und Qualitaet, aber in allen übrigen Figuren sind nur conclusionen von ge wißer Art. Die Regel der 2ten Figur ist : major sit vniversalis, conclusio negativa. Die Regel der 3ten Figur ist major sit vniversalis, conclusio particularis. Der 4ten Figur, major sit vniversalis, conclusio entweder negativa oder particularis niemals algemein bejahend. Diese Emschrenkungen zeigen schon an, daß in den Schlüßen gewiße Bedingungen sind, unter denen sie in die erste Figur können gebracht werden. —",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s30-006",
     "kind": "text",
     "aa": 592,
     "text": "Alle Logiker gestehn,daß der Schluß in der 4ten Figur sehr unnatürlich ist weil 2 consequentiae immediatae eingemischt werden müßen. Die 3 Figuren sind also nur Kunststüke etwas zu verwikeln, richtig aber schließen sie doch und sind ratiocinia hybrida. —",
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s30-007",
     "kind": "text",
     "aa": 592,
     "ms": [
      {
       "p": 123,
       "i": 554,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Logiker haben um die reduction der andern auf die erste Figur möglich zu machen barbarische Wörter erdacht, wo die Vocales die Quantitaet und Qualitaet anzeigen, die Consonanten aber teils zur Euphonie dienen, zugleich aber zeigen sie auch bei allen Figuren die erste ausgenommen an, durch welche metathesis die Reduction möglich sey. S. vult simpliciter verti der Saz wo S. vorkommt muß simpliciter umgekehrt werden, P. vero per accidens. M. transponi d. h. der major muß zum minor gemacht werden, C. contraponirt werden. Der ganze Vers davon heist so :",
     "dehyphenated": 2,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-008",
     "kind": "text",
     "aa": 592,
     "text": "S vult simpliciter verti",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s30-009",
     "kind": "text",
     "aa": 592,
     "text": "P vero per accid.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-010",
     "kind": "text",
     "aa": 592,
     "text": "M vult transponi",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s30-011",
     "kind": "text",
     "aa": 592,
     "text": "C per impoßibile duci.",
     "ocrConf": 41
    },
    {
     "id": "poelitz-s30-012",
     "kind": "text",
     "aa": 592,
     "text": "Der Vers in dem die Vocalen die Quantitaet und Qualitaet anzeigen heist also :",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s30-013",
     "kind": "text",
     "aa": 592,
     "text": "Aßerit A negat E, sed vniversaliter ambo",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-014",
     "kind": "text",
     "aa": 592,
     "aaEnd": 593,
     "pages": [
      {
       "p": 593,
       "i": 245
      }
     ],
     "text": "Aßerit I, negat 0, sed particulariter ambo. In der ersten Figur ist: bArbArA, cELArEnt, dArll, fErlO. In der zweiten Figur ist: cEsArE, cAmEstrEs, fEstlnO, bArOccO. In der dritten Figur ist: dArAptl, fElAptOn, disAmis, dAtlsI, bOcArdO, fErlsOn. In der vierten Figur: cAlEmEs, bAmAllp, dlmAtls, fEsApO, frEsIsOm.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 42
    },
    {
     "id": "poelitz-s30-015",
     "kind": "text",
     "aa": 593,
     "ms": [
      {
       "p": 124,
       "i": 843,
       "raw": "iU",
       "inferred": true
      }
     ],
     "text": "Es sind deren 19 und so viel sind nur möglich in den 4 Figuren. Beim Lesen muß man die consonanten immer zum vorigen Vocal ziehen z. E. cAm-Estr-Es. — C will contraponirt werden, M transponirt, minor soll simpliciter umgekehrt werden, und die conclusion auch. Ein hypothetischer Schluß ist ein solcher, deßen major ein hypothetischer Saz ist, der 2 Glieder hat ein antecedens welches der Grund und ein consequens welches die Folge ist und hier schliest man a positione antecedentis ad positionem consequentis, welches modus ponens ist, und a remotione consequentis ad remotionem antecedentis welches modus tollens ist z. E. ist Gott gerecht, so straft er das Böse, atqui, verum est prius ergo posterius, oder die Seele ist zusammengesezt, also ist sie körperlich, atqui falsum est posterius ergo prius. Bei den disjunctiven Schlüßen ist major ein disjunctiver Saz, er muß also auch membra disjunctionis haben. Per modum ponentem schließ ich, vnum membrum est verum igitur falsa cetera; und per modum tolle ntem, omnia membra sunt falsa igitur verum est vnum quod manet. Z. E. Die Seele ist einfach oder zusammengesezt, atqui sie ist einfach also nicht zusammengesezt — oder sie ist nicht zusammengesezt, also ist sie einfach. —",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-016",
     "kind": "text",
     "aa": 593,
     "aaEnd": 594,
     "pages": [
      {
       "p": 594,
       "i": 1211
      }
     ],
     "ms": [
      {
       "p": 125,
       "i": 1495
      }
     ],
     "text": "Das Dilemma besteht aus einem disjunctiven hypothetischen Vernunftschluß. In jedem hypothetischen Vernunftschluß ist major ein hypothetischer Saz, das consequens aber ein Dilemma. Es ist ein disjunctives Urteil z. E. wenn diese Welt nicht die beste ist, so hat Gott keine beßere schaffen können oder wollen, nun refutire ich das consequens per omnia membra, Gott hat eine beßere Welt schaffen können denn er ist allmächtig, auch wollen, denn er ist unendlich gütig, also ist die Welt nicht die beste. Man schliest hier a remotione consequentis ad negationem antecedentis. Die Alten machten sehr viel davon, und nannten ihn cornutum. Sie wüsten ihren Gegner dadurch in die Enge zu treiben, daß sie alles hersagten, wo er sich hinwenden konnte, und ihm auch alles wiederlegten. Sie zeigten ihm viele Schwürigkeiten, bei jeder Meinung die er annahm. Aber es ist ein sophistischer Kunstgrif , Säze nicht geradezu zu wiederlegen, sondern nur Schwürigkeiten zu zeigen. Das geht bei vielen ja bei den mehresten Dingen an. Wenn ich das alles falsch nennen will, wo sich Schwürigkeiten finden, so ists ein leichtes Spiel alles zu verwerfen. Es ist zwar gut die Unmöglichkeit des Gegenteils zu zeigen, aber hier ist doch etwas verblendendes, weil man die Unbegreiflichkeit des Gegenteils für die Unmöglichkeit deßelben hält, und es ist immer der Kunstgrif des Sophisten apagogice zu beweisen. Diese Dilemmata haben viel Verfängliches bei sich, ob sie gleich richtig schließen. Sie können gebraucht werden wahre Säze zu vertheidigen, aber auch wahre Säze anzugreifen durch Schwierigkeiten die man gegen sie auf wirft. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s30-017",
     "kind": "text",
     "aa": 594,
     "text": "Man teilt die Vernunftschlüße weiter in cryptica und formalia. Ein versteckter Schluß ist ein solcher, der der Materie nach allesenthält, wo die Form aber nicht recht ausgedrukt ist, obgleich gedacht wird. Das nennt man auch per medios terminos schließen z. E. alle Körper sind teilbar, weil sie zusammengesezt sind. Kein Mensch schliest ins geheim anders als formal, denn ohne das könnten wir gar nicht schließen, weil sonsten kein Zusammenhang wäre. Ein Enthymema ist ein solcher versteckter Schluß, wo einer von den Vorsäzen fehlt, den man in Gedanken behält. —",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-018",
     "kind": "text",
     "aa": 594,
     "aaEnd": 595,
     "pages": [
      {
       "p": 595,
       "i": 1593
      }
     ],
     "ms": [
      {
       "p": 126,
       "i": 1196
      },
      {
       "p": 127,
       "i": 3119,
       "raw": "\\%i",
       "inferred": true
      }
     ],
     "text": "Wir haben jezt noch 2 Arten von Schlüßen die eigentlich nicht in die Logik gehören, aber nicht füglich anders wo können angebracht werden nehmlich der Schluß per inductionem, wo wir schließen: was vielen Dingen die zu einer Gattung gehören zukömmt, kommt allen übrigen die zu dieser Gattung gehören zu. Dies ist zwar nicht recht richtig geschloßen, denn wir können nicht von vielem auf alles, aber von allem auf vieles schließen; aber es muß so gemacht werden, \"weil wir sonst keine algemeine Urteile aus der Erfahrung haben. Wir müßen also eigentlich so sagen : von dem was vielen Dingen die zu einer Gattung gehören zukömmt, können wir praesumiren, daß es allen andern Dingen die zu derselben Gattung gehören, zukomme. Aber man muß wol merken, daß es nur eine empirische Gewisheit ist, die von der rationalen sehr unterschieden ist. Die 2te Art Schlüße ist der, per analogiam, wenn 2 oder mehr Dinge von einer Gattung in so viel Merkmalen übereinkommen die ich habe entdecken können : so schließ ich, daß sie in allen andern Merkmalen, die ich nicht kenne, auch übereinkommen werden. Ohne diese beiden Schlüße könnten wir kein ausgedehntes Erfahrungs Erkenntniß bekommen, denn ohne sie könnten wir keine algemeine Säze haben, also keine Schlüße machen. Wir könnten uns hier oft betriegen, aber vermeiden können wir sie doch nicht. Wir müßen sie aber mit großer Behutsamkeit brauchen. — Exempelschlüße sind gar nichts z. E. Menschen haben gesündigt, also können auch wol die Engel gesündigt haben, weil sie beide unter den Begrif der vernünftigen Wesen gehören. • — ■ Es kann eine Verbindung unter Urteilen seyn, die speciem des Vernnnftschhißes haben, und die Form kann doch falsch seyn, denn heist es fallacia. In so fern man sich selbst dadurch hintergeht ist es paralogismus, in so fern man andere mit Absicht hintergeht ist es sophisma. Die Alten und die Stoiker gaben sich sehr mit der Kunst ab, solche Sophismen zu machen. Daher sind verschiedene aufgekommen z. E. sophisma figurac dictionis wo der terminus medius in verschiedener Bedeutung genommen wird z. E. ein Weltweiser ist eine Gattung von Gelehrten, Leibniz ist ein Weltweiser, also ist er eine Gattung von Gelehrten. Fallacia a dicto seeundum quid ad dictum simpliciter. Wer da sagt du seist ein Tier redt die Wahrheit, atqui der da sagt du seist ein Esel, sagt du seist ein Tier, Ergo sagt der der da sagt du seist ein Esel, die Wahrheit. Zum Teil redt er die Wahrheit weil der Esel mit dem Menschen das gemeinschaftlich hat daß er ein Tier ist. Hier kann man antworten: conceclo totum argumentum. Nur muß man einige Emschrenkungen machen. Sophisma heterozeteseos, wenn man nicht die Frage beantAvortet, die man beantworten soll, sondern eine andere. Sophisma ignorationis Elenchi wenn man nicht das wieder legt was man wiederlegen soll, was nehmlich der andere meint, sondern was man glaubt, daß der andere meint. Man wiederlegt also seinen eigenen Wahn von des andern Säzen. Es heist eigentlich eine verfehlende Streitfrage, denn Elenchus ist die deutliche Vorstellung des Inhalts einer Sache. Die megarische Sekte machte draus das gröste Gewicht. Der Urheber derselben war Euclides von Megara. Einen nannten sie den Lügner vom termino medio. Wenn du sagest du lügest so redest du die Wahrheit indem du lügest, atqui du sagst du lügest also redest du die Wahrheit indem du lügst1). Deßen Unrichtigkeit ist leicht einzusehn, nehmlich im major ist was ausgelaßen, etc. indem (du sagest) du lügst. ■ — ■ Obullatus der hies so: kennst du deinen Vater? Ja — Nun stelle ich ihn dir bedeckt vor ; kennst du ihn noch ? Nein — Also kennst du deinen Vater, und kennst ihn auch nicht. Acervus, Calvus, Cornutus. Was du nicht verlohren hast, hast du noch, atqui die Hörner hast du nicht verlohren, also hast du sie noch. — Sorites heist eine Kette von Vernunftschlüßen die subordinirt sind. Eine Kette von Vernunftschlüßen wo die conclusio des einen die Praemiße des andern wird : so ist es ratiocinatio polysyllogistica. Hier kann ich doppelt l) Es heißt so: Wenn du sagst du lügst und indem du dies sagst die Wahrheit",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s30-019",
     "kind": "text",
     "aa": 595,
     "text": "redest so redst du die Wahrheit indem du lügst — es sollte heißen: indem du",
     "ocrConf": 46
    },
    {
     "id": "poelitz-s30-020",
     "kind": "text",
     "aa": 595,
     "aaEnd": 596,
     "pages": [
      {
       "p": 596,
       "i": 40
      }
     ],
     "text": "sagst du lügst und dann wäre es richtig schließen entweder herab zu den Folgen, denn sind es episyllogismi oder herauf zu den Gründen, denn sind es prosyllogismi, wenn nehmlich die Praemiße des einen die conclusio des andern wird z. E. alles Einfache ist unteilbar, die Seele ist einfach, also ist sie unteilbar — Alles was denkt ist einfach, die Seele denkt, also ist sie einfach. Per episyllogismos schließ ich: Alles Einfache ist unteilbar, die Seele ist einfach ergo etc. etc. Alles unteilbare ist unveränderlich atqui etc. etc. ergo etc. In Disputationen muß der Opponent per prosyllogismos schließen. — Wenn aus einer Reihe von episyllogismen der major ausgelaßen wird, so ist es sorites. Man last hier eine von den praemißen weg um der Kürze willen. Besteht er aus categorischen Säzen, so ists sorites categoricus. Es giebt auf die nehmliche Art auch hypothetische",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-021",
     "kind": "text",
     "aa": 596,
     "ms": [
      {
       "p": 128,
       "i": 97,
       "raw": "123",
       "inferred": true
      }
     ],
     "text": "Saltus in probando ist die Verbindung einer Praemiße mit der Conclusion wo die andere ausgelaßen ist, legitimus, wenn jeder gleich die fehlende einschieben kann, illegitimus wenn die Subsumtion z. E. nicht klar ist. Ich verknüpfe hier notam remotam mit einer Sache ohne intermedia. — Petitio principii ist die Annehmung eines Sazes zum Beweisgrund als unmittelbar gewis, der doch noch eines Beweises bedarf. —",
     "ocrConf": 48
    },
    {
     "id": "poelitz-s30-022",
     "kind": "text",
     "aa": 596,
     "text": "Circulus in probando, wenn ich den Saz den ich habe beweisen wollen seinem eigenen Beweise zum Grunde lege. Der circulus ist oft schwer zu entdecken, und da wo die Beweise schwer sind ist er am häufigsten. Ein Beweis kann zu viel auch zu wenig beweisen. Er beweist zu viel, wenn er auch auf das geht, was falsch ist ; beweist er zu wenig, so beweist er einen Teil der Wahrheit, oder einen Teil von dem, was bewiesen werden soll, er ist also nicht zu verwerfen.",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-023",
     "kind": "text",
     "aa": 596,
     "aaEnd": 597,
     "pages": [
      {
       "p": 597,
       "i": 797
      }
     ],
     "text": "Wir wollen jezt noch etwas von der Topik reden die Aristoteles in Gang gebracht hat. Wenn jemand über eine Sache nachdenken will, so muß er wißen zu welcher Wißenschaft sie gehört. In dieser sind Hauptteile in welche dieses oder jenes als in seinen Plaz gehört. Die Hauptteile heißen loci, und die regelmäßige Einteilung aller Thematen der Wißenschaft unter welchen jede Erkenntniß ihre Stelle bekommt, heist Topik. Eine solche wahre Topik wozu aber nicht das bloße herzählen der Thematen gehört, würde eine unvergleichliche Anleitung zum Nachdenken in Wißenschaften seyn. Z. E. Der Tugend kann ich einen politischen Ort geben als ein Mittel zum Glück zu gelangen, aber auch einen moralischen Ort. Man kann Ort auch definiren durch jede Bestimmung einer Erkenntniß in einem möglichen System, denn heist er locus scientificus und die Kunst den mancherley Erkenntnißen den Ort in einem möglichen System anzuzeigen ist die topica. Z. E. wenn ich von Philosophie reden will, so denke ich erst an die Etymologie des Worts, das ist locus grammaticus an die Definition das ist locus logicus. locus metaphysicus ist z. E. der Titel von Substanz, nexu effectivo, locus topicus ist also eine Tavtologie. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s30-024",
     "kind": "text",
     "aa": 597,
     "aaEnd": 598,
     "pages": [
      {
       "p": 598,
       "i": 2180
      }
     ],
     "ms": [
      {
       "p": 129,
       "i": 354
      },
      {
       "p": 130,
       "i": 2492
      }
     ],
     "text": "Wir kommen jezt zum praktischen Teil der Logik die soll die Regeln enthalten jeder Erkenntniß die Form einer Wißenschaft zu geben. Die Quellen der Erkenntniß kann sie nicht angeben, denn sie abstrahirt von allem Inhalt, sie hat blos mit der scholastischen Form der Wißenschaft zu thun. Wißenschaft ist System der Erkenntniße wo immer die Idee des Ganzen zum Grunde liegt die die Einteilung bestimmt. Wir werden von der scholastischen und populären Form der Wißenschaft reden, weil Wißenschaft seyn kann ohne scholastische Form des Systems. Die Art der Verbindung der Gedanken ist entweder Manier d. h. modus aestheticus, oder Methode d. h. modus logicus. Das erstere heist auch Popularitaet und ist eine große Kunst. Man wird aber nie dazu gelangen, als wenn man Methode inne hat, ohne die ist es blos Rhapsodie. Methode betrift das Wißenschaftliche im Durchdenken, die Manier betrift den Vortrag. Ohne alle Methode zu denken heist tumultuarisch. Wenn man nach einer Methode gedacht aber es nicht so vorträgt, so ist es rhapsodistisch. Das erstere verräth wenig Ordnung im Kopf des denkenden. Hängen die Säze ordentlich zusammen, doch so daß man den Uebergang eines Sazes zum andern nicht leicht verstehen kann, so ist das aphoristisch, wenn aber nach einer Methode gedacht, sie im Vortrag ausgedrukt und der Uebergang von einem Saz zum andern deutlich ist, so ist das Erkenntniß systematisch. — Popularitaet erfordert alles methodische wie die scholastische Vollkommenheit, nur sie fordert daß die scholastischen Anstalten und Mittel zu der Vollkommenheit verheelt werden und das nennt man natürlich. Der Autor redt noch von der mathematischen und philosophischen Lehrart weils vorher Mode war die mathematische Lehrart in die philosophische zu bringen und umgekehrt. — Eine Methode beobachten ist etwas anderes als methodisch vortragen. Methodus syllogistica ist ein Vortrag durch lauter Syllogismen d. h. ratio formalis — Erkenntniß Art ist die Art wie man zur Verbindung des Mannigfaltigen gelangt. — Stil ist die Art ein Mannigfaltiges von Erkenntnißen andern mitzuteilen und faslich zu machen. Wir brauchen Methode zum Denken und Stil zum Vortrage. Die Art des Vortrags ist wichtig, aber die Art des Denkens noch wichtiger. Die Methode gehört zur logischen der Stil zur ästhetischen Vollkommenheit. Wolredenheit geht blos die Sprache an in Ansehung der grammatikalischen Regeln : Beredsamkeit ist die Art Ueberredung statt Ueberzeugung hervorzubringen. Stil in genere ist die Art etwas auszudrücken, angemeßen der Methode zu denken, und in so fern wird die logische Vollkommenheit befördert. Alle Methode könnte eingeteilt werden in die populäre und scientifische. Ist etwas nach der lezten abgefaßt so heists methodisch Korr 'e^oyjiv und die dient den Wißenschaften zu großem Vorteil. Die populäre Methode hat nicht die Absicht die Wißenschaften zu befördern sondern das Intereße. Der populäre Vortrag ist ganz anders als die populäre Methode. Der Vortrag kann populär sein die Methode scholastisch. Man darf nur z. E. von Grundsäzen Definitionen etc. etc. anfangen so wie Gottsched, da er doch so leicht ist, daß ihn auch Frauenzimmer lesen und verstehn können. Die Franzosen die in der populären Methode am weitesten gekommen, fangen gleich beim Intereßanten an. Bei der scholastischen Methode muß ich von den ersten Elementen anfangen. Die populäre und scholastische Methode unterscheiden sich also der Art nach nicht dem Vortrag, das ist eine Naturgabe.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s30-025",
     "kind": "text",
     "aa": 598,
     "aaEnd": 599,
     "pages": [
      {
       "p": 599,
       "i": 1284
      }
     ],
     "ms": [
      {
       "p": 131,
       "i": 1008
      }
     ],
     "text": "Von der Lehrart des Vernunft- und historischen Erkenntnißes. Da das erste auf begriffen, das lezte auf facta beruht, so muß die Methode bei jedem auch verschieden seyn. Indeßen muß doch die Historie wenn sie eine Wißenschaf t seyn soll ein Systehm seyn, und als Systehm braucht sie eine Methode, die auf Regeln der Vernunft beruht. Jede Methode muß zwar vernunftmäßig seyn, aber ratione des Inhalts sind sie doch verschieden. Die Methode des Vernunft Erkenntnißes ist entweder scientifisch oder scholastisch, wo die Form der Wißenschaft deutlich hervorleuchtet, populär wo sie nicht hervorleuchtet, sondern gleichsam mit einem Gewand bedeckt ist. — Man bemerkt die scientifische Form jezt nicht mehr in der Philosophie weil sie dem jezigen Geschmack zu wieder ist. Aber das metaphysische der Wißenschaft muß scientifisch vorgetragen werden. Die Methode wird weiter eingeteilt in die analytische und synthetische. Die erste fängt von den principiatis an, und geht zu den principiis. Die synthetische geht von den principiis zu den Folgen, oder vom Einfachen zum Zusammengesezten. Die analytische Methode könnte man auch die regreßive und die synthetische die progreßive nennen. Bei der populären Methode ist das analytische Verfahren beßer, die synthetische ist aber die vollkommenste und ein System kann nur durch sie möglich seyjj. In der analytischen Methode, sagt man, steigen wir auf. Sie heist auch sonsten die Methode des Erfindens. — -Der Autor unterscheidt Kunst und Wißenschaft. Kunst kommt her von können und Wißenschaft von Wißen. Ich kann etwas wißen zu machen ohne es zu können und umgekehrt. Es giebt viele Künste die von Wißenschaft weit entfernt sind, und es geht auch nicht an, sie dazu zu machen z. E. Malerei und Musik. Die Kunst kann wieder eingeteilt werden in Brodkunst und freie Kunst. Sie ist Brodkunst, so fern sie nicht wegen ihres innern Werts, sondern als Mittel Brod zu erwerben geschäzt wird. Freie Künste sind die wegen ihres innern Werts geschäzt werden, und braucht man sie zu Brodkünsten, so werden sie herabgewürdigt (pretium internum est dignitas) z. E. Poesie und Beredsamkeit. Der Gebrauch einer an sich freien Kunst als Brod Kunst ist wol erlaubt. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s30-026",
     "kind": "text",
     "aa": 599,
     "text": "Kunst und Wißenschaft",
     "ocrConf": 45
    },
    {
     "id": "poelitz-s30-027",
     "kind": "text",
     "aa": 599,
     "text": "Wißen und können sind verschiedene Vollkommenheiten. Zur Kunst gehört Uebung. Eine Wißenschaft ist ein S}rstem von Erkenntnißen. Wißenschaft ist entweder Vernunfterkenntniß oder Gelehrsamkeit. Gelehrsamkeit ist selbst Wißenschaft der Vernunfterkenntniße obgleich sie nicht Vernunfterkenntniß ist. Beide sind aber von der Kunst unterschieden. Der schöne Geist, Redner, Poet sind nicht Philosophen, nicht Gelehrte, nicht Mathematiker sondern Künstler, vid. pag. 28.",
     "dehyphenated": 2,
     "ocrConf": 46
    }
   ]
  },
  {
   "id": "s31",
   "title": "Von der Lehrart",
   "titleSrc": "heading",
   "headings": [
    "Von der Lehrart"
   ],
   "provenance": "IV Logik Pölitz MAR 19 1968 Logik und Metaphysik von Kant Ein Collegium anno 1789 nachgeschrieben",
   "blocks": [
    {
     "id": "poelitz-s31-001",
     "kind": "heading",
     "aa": 599,
     "text": "Von der Lehrart"
    },
    {
     "id": "poelitz-s31-002",
     "kind": "text",
     "aa": 599,
     "aaEnd": 600,
     "pages": [
      {
       "p": 600,
       "i": 868
      }
     ],
     "ms": [
      {
       "p": 132,
       "i": 634,
       "raw": "m",
       "inferred": true
      },
      {
       "p": 133,
       "i": 2516
      }
     ],
     "text": "Ferner ist noch eine Einteilung der Lehrart in künstliche und natürliche. Jede Lehrart ist aber künstlich, wenn unter künstlich das verstanden wird, was nach vorher überlegten Prinzipien geschieht Künstliche Lehrart ist also eine Tavtologie. Die natürliche kann von der gekünstelten unterschieden werden. Gekünstelt ist das, woran eine Kunst gezeigt wird, die der Beschaffenheit und dem Zweck der Erkenntniß zuwieder ist, natürlich ist die, die zweckmäßig ist. — Syllogistische Methode ist eine solche wo man in einer Kette von Schlüßen die Wißenschaft vorträgt. — Tabellarische Methode ist die, da man ein schon fertiges Lehrgebäude in seinem ganzen Zusammenhang zeigt. Die Lehrart eines Erkenntnißes im System ist entweder acroamatisch wenn ich allein lehre oder erotematisch wenn ich frage. Die kann wieder eingeteilt werden in die dialogische oder sokratische und in die katechetische. Bei der sokratischen oder dialogischen fragen der lehrende und lernende und antworten sich auch wechselweise. Von dem der fragt wird vorausgesezt, daß er die Sache nicht weiß, sondern sie von dem, den er fragt, erlernen will. Bei der katechetischen Methode ist der Antwortende der Lernende, also gerad umgekehrt. Ist es blos aufs historische angesehn; so ist diese Lehrart recht gut, denn heist es examen und ist blos eine Untersuchung, ob der Lehrling die Gedächtnißsache gut gefaßt habe. Modus catecheticus ist mehr Manier als Methode, denn er ist nur die Art wie Gedächtnißsachen können abgefragt werden, nicht wie Vernunft Erkenntniße können beigebracht werden, da ist die dialogische Methode die beste. — Der Lehrende ist da auch Lehrer wie in der katechetischen aber es scheint auch daß der Schüler selbst Lehrer ist. Der Zweck ist sonst nicht erreicht, daß des Lehrlings Gedanken entwickelt sind, sondern der Lehrer hat sie hineingelegt. Auch beim Religionsunterricht wo Vernunft-Erkenntniße die wichtigsten sind, ist die katechetische Methode ganz unbrauchbar, denn dadurch daß der Lehrling die Fragen und Antworten nachbetet, bekommt er nicht mehr Licht in der Religion, sondern es wird dadurch Gedächtnißwerk, welches er in kurzer Zeit vergißt. Hier muß die eigentliche dialogische oder sokratische Methode beobachtet werden. Sokrates fragt seine Schüler, und es scheint als wiße er gar nichts. Er nennt sich selbst die Hebamme der Gedanken seiner Schüler, und sagt er lerne vieles daraus, daß er andere frage, und dies ist auch würklich, durch das Fragen wird man auf vieles gebracht, was man weis, und doch vorher nicht in seiner Erkenntniß zu haben glaubte. Dieses Fragen ist sehr künstlich. Der Schüler lernt aus der Quelle seiner Vernunft und solche Erkenntniße sind unauslöschlich. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 47
    },
    {
     "id": "poelitz-s31-003",
     "kind": "text",
     "aa": 600,
     "text": "Der Autor redt noch von der geographischen und chronologischen Lehrart. Jene trägt die Dinge der Welt vor nach ihrer Verbindung im Raum, diese nach ihrer Verbindung in der Zeit. Die erstere muß der letztern zum Grund hegen. Man muß unterscheiden doctrin und disciplin. Jede Institution kann negativ seynd.h. vor Irtümer bewahren, denn ist sie disciplin, oder positiv d. h. Erkenntniße erweitern, denn ist sie doctrin. — Kritik ist das, was vorhergeht ehe ich Erkenntniße als Doctrin oder disciplin vortrage. Sie ist das Nachforschen der Quellen, woraus die Erkenntniß entspringt, das ist aber für den Lehrer. Wißenschaft sagt der Autor ist demonstrirte Disciplin, das ist falsch, sie kann doctrin seyn, und kann Wißenschaft sein ohne Demonstration wie z. E. Historie. —",
     "dehyphenated": 3,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s31-004",
     "kind": "text",
     "aa": 601,
     "text": "Meditiren heist nicht etwas überdenken, denn das geschieht tumultuarisch, sondern nachdenken das ist methodisch. Beim meditiren muß man vorläufige Untersuchungen anstellen, sie sich aufschreiben und denn das in Ordnung bringen, welches das Meditiren ausmacht. Es muß alles lesen und lernen begleiten. —",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "poelitz-s31-005",
     "kind": "text",
     "aa": 601,
     "text": "Termini familiäres oder geläufige Ausdrüke die man wegen des häufigen Gebrauchs zu verstehen glaubt, wo es aber doch schwer wird, sich drüber zu erklären z. E. Schiksal, Glük etc. Logodaedalus ist ein solcher, der neue Worte erkünstelt, um damit den andern statt der Sachen abzufertigen. Er hat den Namen von Daedalus ein berümter Baumeister in Creta. Man nennt künstliche Werke : opera daedala. — Terminus vagus ist ein solcher, der keine bestimmte Bedeutung hat, inanis der keine Bedeutung hat. —",
     "ocrConf": 44
    },
    {
     "id": "poelitz-s31-006",
     "kind": "text",
     "aa": 601,
     "ms": [
      {
       "p": 134,
       "i": 0
      }
     ],
     "text": "Von Wörtern. Das gehört gar nicht in die Logik. Wenn es drauf ankömmt wie Worte sollen Gedanken gemäß gebraucht werden : so müste eine algemeine Charakteristik der Sprachen gemacht werden. Sie kann nur den Unterschied der terminorum technicorum und vulgarium zeigen. Synonyma sind 2 Wörter, wenn sie eine Bedeutung haben. In einer Sprache aber findt man nicht völlig synonymische Wörter. Homonyma wenn ein Wort verschiedene Bedeutung hat. — Wir dürfen es nicht wagen, veraltete Wörter wieder zu brauchen, oder neue einzuführen, oder es müste ein Vorschlag seyn zu einer neuen Idee zu der noch kein Wort ist. Ein tropischer Ausdruk ist ein Gleichnis, deßen man sich bedient die Sache auszudrüken z. E. Erleuchtung. — Propositio indefinita ist die wo das Zeichen der Quantitaet nicht hinzugesezt ist, und die betracht man immer als algemein. —",
     "dehyphenated": 3,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s31-007",
     "kind": "text",
     "aa": 601,
     "aaEnd": 602,
     "pages": [
      {
       "p": 602,
       "i": 863
      }
     ],
     "ms": [
      {
       "p": 135,
       "i": 701
      }
     ],
     "text": "Was die Schreibart betrift, so gehört sie auch nicht in die Logik. In der Philosophie muß man nicht lepores jagen, sondern die wesentliche Eigenschaft ist Simplizitaet und pünctliche Angemeßenheit des Ausdrucks. Barbarismen und alles, was wieder die Sprachrichtigkeit streitet kann man vermeiden. — Die Vernunft Erkenntniß hat mit dem Stil nichts zu thun als was Reinigkeit betrift. — Rede ist aesthetische Kunst auf Erkenntniße, die zugleich logische Vollkommenheit haben sollen, angewandt. Da ist zu merken, Beredheit, d. h. Menge der Ausdrücke, Wolredenheit betrift den Stil dem Gegenstande angemeßen zu reden, und Beredsamkeit, die Kunst jemanden zu überreden, welches eigentlich nicht sein soll. Ueberzeugen sollen wir, aber nicht überreden. In der didaktischen Methode ist condescendenz und coascendenz zu beobachten. Der Lehrer muß sich als in der Mitte betrachten, und zu solchen die mehrere Fähigkeiten und größere Endzwecke haben, sich erheben, zu andern, die dieses nicht haben, sich herablaßen. Es ist dies eine große Kunst sich in der Mittelstraße zu halten, und dies besizen nur sehr wenige. Die es nicht können müßen sich mehr der coascendenz als der condescendenz befleißigen. Bei Streitigkeiten ist immer ein status controversiae, da muß keine ignoratio Elenchi statt finden. Das beste wäre, alle Streitigkeiten aufzuheben und wenn 2 uneins wären sich gemeinschaftlich zu bemühen alles Mißverständnis zu lieben, und die Wahrheit zu erforschen. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 44
    },
    {
     "id": "poelitz-s31-008",
     "kind": "text",
     "aa": 602,
     "ms": [
      {
       "p": 136,
       "i": 635
      }
     ],
     "text": "Logomachie ist ein Wortstreit, wo man sich streitet, und am Ende in der Sache einig ist, nur in Ansehung der Ausdrücke es nicht gewesen ist. Professor Kant nimmt kerne Logomachien an, es ist immer ein Unterschied in den Sachen, nur unmerklich. Man kann argumentiren wieder Personen und Sachen, die ersten sind nur im persönlichen Streit und gelten nicht für alle Menschen. — argumenta koct 'dvOpcoiTOV sind: wenn ich die Meinung des Gegners annehme, aber nicht für wahr um daraus meine Meinung zu beweisen. Eigentlich solten alle argumente, argumenta Kcrr'aAr)6sioa; seyn wo ich etwas zum Grunde lege, was ich würklich für wahr halte. Ad verecundiam : wenn der Gegner sagt: Du wirst doch nicht weiser seyn als Leibniz, Wolf etc. etc. — Man kann jemandes Angriffe retorquiren durch böse Folgen, die man aus seinen Meinungen zieht, das heist argumentum ab odio. —",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "poelitz-s31-009",
     "kind": "text",
     "aa": 602,
     "text": "Vom Verfaßen der Schriften, dies gehört nicht in die Logik. — Der aus vielen Büchern eins macht heist compilator und der ist nüzlieh, weil oft in vielen Büchern wenig Kenntniß ist. Der aus einem Buch ein kleines macht heist epitomator. Am besten ists, wenn der Autor selbst epitomirt.",
     "dehyphenated": 1,
     "ocrConf": 43
    }
   ]
  }
 ]
};
