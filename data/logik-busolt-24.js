/* ─────────────────────────────────────────────────────────────────────────────
   Logik Busolt, Academy Edition XXIV (ca. 1789/90)
   Machine-extracted from the transcription in Textfiles/Vol24logikBusolt.rtf by
   scripts/parse_logik.py — do not hand-edit; corrections belong in the
   extractor so they survive the next run.

   One of Kant's three logic lecture transcripts in AA XXIV that this
   repository carries; logik-blomberg-24.js and logik-wiener-24.js are the others, in the same
   shape. The transcription sets the text in short lines broken by the Academy
   Edition's page markers; this file has it as running prose, with every page
   it crossed kept as an offset into that prose, so any stretch of it can be
   cited as `AA 24:N` and the pagination put back exactly where it stood.

   LOGIK_BUSOLT.meta     work, siglum, volume, the AA page range, the manuscript
                         note the volume prints, and the extractor's counts
   LOGIK_BUSOLT.front    the title page, verbatim, line by line
   LOGIK_BUSOLT.contents the volume's Inhaltsverzeichnis: { label, pages }
   LOGIK_BUSOLT.sections the lecture itself

   Section fields
     id         stable id, `s01`…; a block's id begins with it
     title      the section's title as the table of contents gives it
     headings   the heading again as the manuscript sets it, every form of it
                the transcription prints, in order. Kept rather than reconciled
                with `title`: the two differ, and the difference is the AA's.
     provenance the dating and shelfmark line the volume repeats at each
                section, verbatim
     blocks     the text

   Block fields
     id      stable id
     kind    text | note | rule. `note` is an AA cross-reference standing in
             the text (`Vgl. Logik Philippi § 428-544, xxiv 484ff.`); `rule`
             is a horizontal rule the transcription sets.
     aa      the AA XXIV page the block starts on — cite as `AA 24:<aa>`
     aaEnd   the page it ends on, where it runs over one
     pages   where the block crosses a page: { p, i }, page `p` beginning at
             character `i` of `text`. The first entry is at i=0 when the block
             itself begins a page. Re-inserting these restores the
             transcription's own lineation exactly; the extractor checks that
             on every run.
     ms      the manuscript's own pagination, the same way: { p, i } for the
             `[471]` the AA prints in the text band
     text    the prose, joined. Editorial brackets are left in it verbatim —
             `[ Textlücke: AA: Die ]`, `[AA: judicium ]`, `[erg. nicht]`,
             `< bricht ab >` — and so is the Wiener Logik's `|| V`.
     joined  present when this block was assembled from more than one line
             of the transcription, saying on whose authority:
               "mark"     the transcription's own `|`, which marks a page or
                          line break with the text running on through it.
                          Attested.
               "inferred" no marker said so, but the line broke off
                          mid-sentence and the next opened in lower case, and
                          the extractor joined them on its own judgement.
                          Shown as an inference, per the repository's
                          fidelity rule.
             Both, where a block was assembled both ways.
   ───────────────────────────────────────────────────────────────────────── */

const LOGIK_BUSOLT = {
 "meta": {
  "work": "Logik Busolt",
  "label": "VI. Logik Busolt",
  "volume": 24,
  "date": "ca. 1789/90",
  "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
  "source": "Textfiles/Vol24logikBusolt.rtf",
  "aa": [
   603,
   686
  ],
  "counts": {
   "sections": 33,
   "blocks": 541,
   "pages": 82,
   "joinedAtMark": 47,
   "joinedInferred": 2
  }
 },
 "front": [],
 "contents": [],
 "sections": [
  {
   "id": "s01",
   "title": "― xxiv.603 ―",
   "headings": [],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s01-001",
     "kind": "text",
     "aa": 605,
     "text": "Die Logik oder",
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "busolt-s01-002",
     "kind": "text",
     "aa": 605,
     "text": "Vernunftlehre von"
    },
    {
     "id": "busolt-s01-003",
     "kind": "text",
     "aa": 605,
     "text": "Herrn Professor Kant."
    },
    {
     "id": "busolt-s01-004",
     "kind": "text",
     "aa": 605,
     "text": "Königsberg d. 8ten Sept. 1790."
    },
    {
     "id": "busolt-s01-005",
     "kind": "text",
     "aa": 605,
     "text": "G.C.W. Busolt."
    },
    {
     "id": "busolt-s01-006",
     "kind": "text",
     "aa": 605,
     "text": "[Logik Busolt] Inhaltsverzeichnis"
    },
    {
     "id": "busolt-s01-007",
     "kind": "text",
     "aa": 607,
     "text": "Prolegomena"
    },
    {
     "id": "busolt-s01-008",
     "kind": "text",
     "aa": 607,
     "text": "608"
    },
    {
     "id": "busolt-s01-009",
     "kind": "text",
     "aa": 607,
     "text": "Die Geschichte der Logic"
    },
    {
     "id": "busolt-s01-010",
     "kind": "text",
     "aa": 607,
     "text": "613"
    },
    {
     "id": "busolt-s01-011",
     "kind": "text",
     "aa": 607,
     "text": "Nuzzen der Logic"
    },
    {
     "id": "busolt-s01-012",
     "kind": "text",
     "aa": 607,
     "text": "613"
    },
    {
     "id": "busolt-s01-013",
     "kind": "text",
     "aa": 607,
     "text": "Abhandlung der Logic"
    },
    {
     "id": "busolt-s01-014",
     "kind": "text",
     "aa": 607,
     "text": "616-686"
    },
    {
     "id": "busolt-s01-015",
     "kind": "text",
     "aa": 607,
     "text": "Von der Vollkommenheit der Erkenntniß überhaupt"
    },
    {
     "id": "busolt-s01-016",
     "kind": "text",
     "aa": 607,
     "text": "620"
    },
    {
     "id": "busolt-s01-017",
     "kind": "text",
     "aa": 607,
     "text": "Von den Mängeln der Erkenntniß überhaupt"
    },
    {
     "id": "busolt-s01-018",
     "kind": "text",
     "aa": 607,
     "text": "622"
    },
    {
     "id": "busolt-s01-019",
     "kind": "text",
     "aa": 607,
     "text": "Vom Horizont der Erkenntniß"
    },
    {
     "id": "busolt-s01-020",
     "kind": "text",
     "aa": 607,
     "text": "623"
    },
    {
     "id": "busolt-s01-021",
     "kind": "text",
     "aa": 607,
     "text": "Vom Mißbrauch oder Mangel der Erkenntniß"
    },
    {
     "id": "busolt-s01-022",
     "kind": "text",
     "aa": 607,
     "text": "626"
    },
    {
     "id": "busolt-s01-023",
     "kind": "text",
     "aa": 607,
     "text": "Eintheilung der Gelehrten"
    },
    {
     "id": "busolt-s01-024",
     "kind": "text",
     "aa": 607,
     "text": "627"
    },
    {
     "id": "busolt-s01-025",
     "kind": "text",
     "aa": 607,
     "text": "Von der Wahrheit"
    },
    {
     "id": "busolt-s01-026",
     "kind": "text",
     "aa": 607,
     "text": "627"
    },
    {
     "id": "busolt-s01-027",
     "kind": "text",
     "aa": 607,
     "text": "Von der Klarheit der Gelehrten Erkenntniß"
    },
    {
     "id": "busolt-s01-028",
     "kind": "text",
     "aa": 607,
     "text": "633"
    },
    {
     "id": "busolt-s01-029",
     "kind": "text",
     "aa": 607,
     "text": "Von der Größe der Gelehrten Erkenntniß"
    },
    {
     "id": "busolt-s01-030",
     "kind": "text",
     "aa": 607,
     "text": "636"
    },
    {
     "id": "busolt-s01-031",
     "kind": "text",
     "aa": 607,
     "text": "Von der Gewißheit der Gelehrten Erkenntniß"
    },
    {
     "id": "busolt-s01-032",
     "kind": "text",
     "aa": 607,
     "text": "637"
    },
    {
     "id": "busolt-s01-033",
     "kind": "text",
     "aa": 607,
     "text": "Von den verschiednen Arten des fürwahrhaltens"
    },
    {
     "id": "busolt-s01-034",
     "kind": "text",
     "aa": 607,
     "text": "637"
    },
    {
     "id": "busolt-s01-035",
     "kind": "text",
     "aa": 607,
     "text": "Von den Hypothesen"
    },
    {
     "id": "busolt-s01-036",
     "kind": "text",
     "aa": 607,
     "text": "647"
    },
    {
     "id": "busolt-s01-037",
     "kind": "text",
     "aa": 607,
     "text": "Von der Ueberredung"
    },
    {
     "id": "busolt-s01-038",
     "kind": "text",
     "aa": 607,
     "text": "647"
    },
    {
     "id": "busolt-s01-039",
     "kind": "text",
     "aa": 607,
     "text": "Von der Mathematischen Gewißheit"
    },
    {
     "id": "busolt-s01-040",
     "kind": "text",
     "aa": 607,
     "text": "649"
    },
    {
     "id": "busolt-s01-041",
     "kind": "text",
     "aa": 607,
     "text": "Von Praktischen Erkenntnißen"
    },
    {
     "id": "busolt-s01-042",
     "kind": "text",
     "aa": 607,
     "text": "652"
    },
    {
     "id": "busolt-s01-043",
     "kind": "text",
     "aa": 607,
     "text": "Von den Begriffen"
    },
    {
     "id": "busolt-s01-044",
     "kind": "text",
     "aa": 607,
     "text": "653"
    },
    {
     "id": "busolt-s01-045",
     "kind": "text",
     "aa": 607,
     "text": "Von den Definizionen"
    },
    {
     "id": "busolt-s01-046",
     "kind": "text",
     "aa": 607,
     "text": "656"
    },
    {
     "id": "busolt-s01-047",
     "kind": "text",
     "aa": 607,
     "text": "Von der Philosophischen Definizion"
    },
    {
     "id": "busolt-s01-048",
     "kind": "text",
     "aa": 607,
     "text": "657"
    },
    {
     "id": "busolt-s01-049",
     "kind": "text",
     "aa": 607,
     "text": "Die Logische Eintheilung eines Begriffs"
    },
    {
     "id": "busolt-s01-050",
     "kind": "text",
     "aa": 607,
     "text": "660"
    },
    {
     "id": "busolt-s01-051",
     "kind": "text",
     "aa": 607,
     "text": "Von den Urtheilen"
    },
    {
     "id": "busolt-s01-052",
     "kind": "text",
     "aa": 607,
     "text": "661"
    },
    {
     "id": "busolt-s01-053",
     "kind": "text",
     "aa": 607,
     "text": "Die Eintheilung der Urtheile"
    },
    {
     "id": "busolt-s01-054",
     "kind": "text",
     "aa": 607,
     "text": "661"
    },
    {
     "id": "busolt-s01-055",
     "kind": "text",
     "aa": 607,
     "text": "Von den Kategorischen Urtheilen"
    },
    {
     "id": "busolt-s01-056",
     "kind": "text",
     "aa": 607,
     "text": "664"
    },
    {
     "id": "busolt-s01-057",
     "kind": "text",
     "aa": 607,
     "text": "Von den Hypothetischen und Disiunctiven Urtheilen"
    },
    {
     "id": "busolt-s01-058",
     "kind": "text",
     "aa": 607,
     "text": "666"
    },
    {
     "id": "busolt-s01-059",
     "kind": "text",
     "aa": 607,
     "text": "Regeln der Vernunftschlüße"
    },
    {
     "id": "busolt-s01-060",
     "kind": "text",
     "aa": 607,
     "text": "673"
    },
    {
     "id": "busolt-s01-061",
     "kind": "text",
     "aa": 607,
     "text": "Die vier Vernunftschlüße nach ihren Figuren"
    },
    {
     "id": "busolt-s01-062",
     "kind": "text",
     "aa": 607,
     "text": "674"
    },
    {
     "id": "busolt-s01-063",
     "kind": "text",
     "aa": 607,
     "text": "Regeln der Vernunftschlüße. Fortsezzung"
    },
    {
     "id": "busolt-s01-064",
     "kind": "text",
     "aa": 607,
     "text": "674"
    },
    {
     "id": "busolt-s01-065",
     "kind": "text",
     "aa": 607,
     "text": "De locis topicis"
    },
    {
     "id": "busolt-s01-066",
     "kind": "text",
     "aa": 607,
     "text": "681"
    },
    {
     "id": "busolt-s01-067",
     "kind": "text",
     "aa": 607,
     "text": "Die Praktische Logic"
    },
    {
     "id": "busolt-s01-068",
     "kind": "text",
     "aa": 607,
     "text": "682"
    },
    {
     "id": "busolt-s01-069",
     "kind": "text",
     "aa": 607,
     "text": "Anmerkung über das Meditiren"
    },
    {
     "id": "busolt-s01-070",
     "kind": "text",
     "aa": 607,
     "text": "685"
    },
    {
     "id": "busolt-s01-071",
     "kind": "text",
     "aa": 607,
     "text": "Vom Gebrauch der Wörter"
    },
    {
     "id": "busolt-s01-072",
     "kind": "text",
     "aa": 607,
     "text": "685"
    },
    {
     "id": "busolt-s01-073",
     "kind": "text",
     "aa": 607,
     "text": "Logik Busolt"
    },
    {
     "id": "busolt-s01-074",
     "kind": "text",
     "aa": 607,
     "text": "Prolegomena"
    }
   ]
  },
  {
   "id": "s02",
   "title": "__________",
   "headings": [
    "Prolegomena"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s02-001",
     "kind": "text",
     "aa": 608,
     "text": "Alles handelt nach gewißen Regeln, welche sind entweder 1. Allgemeine oder Nothwendige die in aller Absicht gebraucht werden und nöthig sind ohne auf diesen oder jenen Gegenstand besonders zu sehen. Ohne diese ist gar kein Verstandesgebrauch möglich; oder 2.) Besondere, oder solche, die in besonderen Absichten auf diesen oder jenen Gegenstand rücksicht nehmen. Die ersteren Regeln sind unveränderlich, die andern werden Wilkührlich geändert: denn alles besondere ist zufällig. Ohne das besondere ist der Verstandesgebrauch nur in einer gewißen Wißenschaft möglich. Denn der Verstand ist eigentlich das Vermögen der Regeln. Die Sinne hingegen sind das Vermögen der Anschauung. Z.E. In der Mathematik kann man ohne die Augen oder Instrumente zu gebrauchen, begreifen, daß ein Triangel drei Seiten und eben so viel Winkel habe; allein will man wißen, wie ein Triangel gemessen werde; so wird der Gebrauch der Augen dazu nothwendig erfordert. Der Studirende lernt die Mathematik so wie sie durch den Verstand, der Landmesser so wie sie durch die Sinnen kann begriffen werden, und so handeln beide nach besonderen Regeln. Natürliche Kräfte beobachtet man, ehe man sie kennt. Erworbene Kräfte muß man vor ihrem Gebrauch kennen. Die Thiere die unbelebte Natur handelt nach Gesezzen, nach Regeln, ohne deren bewußt zu sein. Dem Menschen sind sie auch oft unbekannt, obgleich er darnach handelt. Man handelt nach natürlichen Regeln:",
     "ms": [
      {
       "p": 2,
       "i": 1228
      }
     ]
    },
    {
     "id": "busolt-s02-002",
     "kind": "text",
     "aa": 608,
     "text": "1.) Weil sie schon in der Natur sind."
    },
    {
     "id": "busolt-s02-003",
     "kind": "text",
     "aa": 608,
     "text": "2.) Aus Nachahmung, wo die Ausübung ohne Kenntniß der Regeln geschieht."
    },
    {
     "id": "busolt-s02-004",
     "kind": "text",
     "aa": 608,
     "text": "3.) Durch eigenen Gebrauch und Ausübung, hier irren wir oft, hiedurch gelangen wir aber zur Fertigkeit. Doch Gewohnheits fehler ausgenommen. Die Logik ist die Wißenschaft der Regeln des Gebrauchs des Verstandes und der Vernunft"
    },
    {
     "id": "busolt-s02-005",
     "kind": "text",
     "aa": 609,
     "text": "Hinieden findet sich bei uns das Vermögen zu handeln, und daher entstehet die natürliche Logik. Denn die Logik ist die Wißenschaft der Regeln. Der Mensch handelt im Anfange nach Regeln, denen er sich nicht bewußt ist; also hat er so lange eine natürliche Logik; komt er zu reiferem Alter so berichtigt er diese durch Regeln, und so entsteht die künstliche Logik. So redet jemand deutsch und bringet sich nachher Regeln aus einer deutschen Grammatik bei. Die Gramatik ist aber nur eine Disciplin, die Logik eine Wißenschaft; Doktrin. Der Unterschied zwischen Disciplin und Wißenschaft oder Doktrin ist der; Bei der ersteren kann man nicht wißen, warum etwas so und nicht anders ist, bei der andern aber hat man einen inneren Beweiß davon. bei der erstern Consultiren wir die Erfahrung, bei der andern den Verstand allein, die erstere ist besonders die andere allgemein, die erste heißt Scientia empirica, die andere Scientia scientifica. Der Mensch hat Kräfte deren einige dazu dienen, Materialien zu schaffen andere sie zu ordnen. Das erste thut die Sinnlichkeit, das andere die Vernunft und die Urtheilskraft.",
     "pages": [
      {
       "p": 609,
       "i": 269
      }
     ],
     "aaEnd": 609,
     "ms": [
      {
       "p": 3,
       "i": 833
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s02-006",
     "kind": "text",
     "aa": 610,
     "text": "Die künstliche Logik nun (denn von dieser ist hier die rede) gehet mit allgemeinen Regeln um, mithin mit solchen die in allen Wißenschaften, und bei Beurtheilung aller Gegenstände gebraucht werden müßen. Sie sondert demnach alles zufällige, alles besondere ab, und abstrahiret also auch vom Unterschiede der Gegenstände. Sie erwählt nur die Form nicht aber die Materie oder den Inhalt der Dinge. Bei jeder Erkenntniß ist zu unterscheiden Materiale z.E. Wenn die Körper schwer seyn; so werden sie von andern getrieben, und Formale z.E. Wenn Gott gerecht ist so bestraft er die bösen Handlungen. Materie ist der Gegenstand des Erkenntnißes, Form, die Art, wie wir die Gegenstände erkennen. Z.E. die Physik erkennt die Gegenstande des äußeren die Psychologie aber des innern Sinns. Beides erkennen wir empirisch, dieses ist die Form welche also bei Beiden gleich ist. Demnach ist die Logik, in dieser Betrachtung die Wißenschaft von der Verstandesform. Ihre Regeln sind also a priori d.i. ihre allgemeine Regeln haben demnach zu ihren Principien die Vernunft, da hingegen die Grammatik, und jede andere empirische Wißenschaft Regeln a posteriori haben, d.i. solche, die die Erfahrung zu ihren principien haben. Die Erfahrung lehret uns wie eine Sache wirklich ist, die Vernunft aber wie sie seyn muß, oder woher sie also sey. Daß z.E. das Wasser flüßig ist lehret die Erfahrung woher es aber flüßig sey lehret die Vernunft. Wie die Menschen sittlich handeln sehen wir aus der Erfahrung, wie sie handeln sollen sehen wir aus der Vernunft. Alle unsere Erkenntniße haben zwo Qvellen die Sinne und den Verstand; beide zusammen machen das Erkenntnißvermögen aus. Dieses erkennen heißt cognoscere. Die Sinne geben die Materie zum Denken der Verstand aber denkt. Die Sinne geben die Vorstellung, dieser die Regel. Die Regeln der Erkenntniß sind entweder",
     "pages": [
      {
       "p": 610,
       "i": 1727
      }
     ],
     "aaEnd": 610,
     "ms": [
      {
       "p": 4,
       "i": 1130
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s02-007",
     "kind": "text",
     "aa": 610,
     "text": "1.) Regeln der Sinnlichkeit, und das heißt aesthetic vonαἰσθητός, instrumentum sensorium, oder"
    },
    {
     "id": "busolt-s02-008",
     "kind": "text",
     "aa": 610,
     "text": "2.) Regeln des Verstandes, und das heißt die Logic.Diese Logik enthält die Regeln aller Erkenntniße und unterscheidet sich von der aesthetic in der Art, daß darin alles aus der Vernunft hergenommen ist, und begriffen ist, diese aber auf die Erfahrung und Vernunft sich gründet. Logic heißt also die Vernunft-Lehre, aesthetic die Geschmacks-Lehre."
    },
    {
     "id": "busolt-s02-009",
     "kind": "text",
     "aa": 610,
     "text": "Alle Wißenschaften, die Regeln vortragen sind entweder 1. Kanon oder ein Inbegrif von Regeln a priori die uns lehren beurtheilen ob etwas der Vernunft gemäs ist oder nicht; oder 2. Organon oder ein Inbegrif von Regeln, die zur Vervollkommenung dieser oder jener Wißenschaft dienen.",
     "ms": [
      {
       "p": 5,
       "i": 55
      }
     ]
    },
    {
     "id": "busolt-s02-010",
     "kind": "text",
     "aa": 610,
     "text": "Die Allgemeine Logic, ist sie nun ein Kanon oder Organon? Soll sie ein Organon seyn, so müßte sie uns eine Anweisung geben wie z.E. die Mathematik oder Metaphysik zur größern Vollkommenheit können gebracht werden. Das thut sie nun aber nicht, sondern ihr Objekt ist blos die Verstandes Form, die bei allen und jeden Gegenständen gleich seyn muß Ihr Objekt ist also allgemein, mithin ist sie auch keine Wißenschaft; denn jede Wißenschaft hat ein besonderes Objekt. Jede Wißenschaft erweitert also auch unsere Erkentniße; die Logic berichtigt sie aber nur. Die allgemeine Logic ist also auch nicht Organon, nicht Norma, denn jede Norm gründet sich auf Erfahrung. Da kann sie auch Norm a priori heißen. Ein Organon findet auch nur dann statt, wenn eine Wißenschaft bereits erfunden, und zu einer gewißen Höhe gebracht worden; so daß sie sich nun vervollkommne, wie z.E. Bako von Verulam ein Organon scientiarum geschrieben, wo er unter anderm Anweisungen giebt, wie die Physik zu einem hohen Grade könne gebracht werden. Die Logic ist vielmehr ein Kanon d.i. sie enthält Regeln, die sich allein auf den Verstand gründen, und auch nur a priori können demonstriret werden. Die Beispiele in der Logic werden aus dem allgemeinen Verstandes Gebrauch im gemeinen Leben hergenommen. Sie ist also Propädeutik aller Wißenschaften. Die aesthetic ist nicht Organon. Denn sonst folgt daraus, daß man könte lernen wizzig seyn, auch nicht Kanon; denn sie trägt nicht Regeln a priori vor; sondern sie ist eine Kritik oder Kenntniß von Regeln, und zwar von den Allgemeinsten den Geschmack zu bilden. Sie setzt uns demnach in den Stand, ein Produkt des Nuzzens",
     "ms": [
      {
       "p": 6,
       "i": 1018
      }
     ]
    },
    {
     "id": "busolt-s02-011",
     "kind": "text",
     "aa": 611,
     "text": "gehörig zu beurtheilen. Anmerkung: Kanon ist doctrina demonstrabilis und dienet zur judication Organon zur construction der Erkenntniße, mithin erfinden sie nichts, die Logic ist demnach nicht ars heuristica, oder Kunst zu erfinden. Sie nüzte also auch selbst der Erfindungskraft vortreflich denn sie ordnet sie und ändert; das Erfundene sondert sie ab. Die aesthetic ist die Lehre der Sinnlichen Urtheilskraft, ob ein Werk des Genies, oder sonst etwas gefällt, oder nicht. Sie ist also die sinnliche Erkenntnißkraft wie der Geschmack die sinnliche Beurtheilungskraft ist. Beim Geschmack ist immer experiment und Erfahrung nöthig: denn wenn zuweilen auch ein Stück nach allen Regeln der Tonkunst componirt ist, so gefällt es doch nicht; sondern Plurima vota valent. Die aesthetic kann auch nur empirische Regeln enthalten; d.i. Regeln a posteriori, und man könnte solcher Gestalt sagen, sie sey Kritik des Schönen: denn komts gleich dabei auf die Erfahrung an, so kann doch der Kritiker Gründe anführen, woher dieses oder jenes gefällt oder misfällt. Dennoch giebts etwas was ein Poet sagt: malo convivis quam coquis placere, fercula mea.",
     "ms": [
      {
       "p": 7,
       "i": 641
      }
     ]
    },
    {
     "id": "busolt-s02-012",
     "kind": "text",
     "aa": 612,
     "text": "In der Logic muß man keine fremde Wißenschaft einmischen, so gehört z.E. nicht in die Logic die empirische Psychologie: denn dieses ist die Lehre von den Phänomenen der menschlichen Seele, oder sie tragt allgemeine Regeln des wirklichen Verfahrens der menschlichen Seele vor. Vor allem die Logic lehrt nicht wie wir wirklich verfahren, sondern wie wir verfahren sollen Dies zeigt auch selbst schon das Wort Regel an: Denn eine Regel ist die Bedingung unter welcher etwas hervorgebracht werden soll. Wir teilen die Regeln des Verstandes ein, in subiective, vom wirklichen Verfahren des Verstandes. In Objective, von den richtigen Regeln nach denen man verfahren soll. Die Logik ist eine Lehre von den allgemeinen Gesezzen des Verstandes überhaupt. Sie sieht nur auf die Form des Verstandes bei einem Gegenstande, nicht auf den Inhalt desselben, z.E. ob ein Schluß nach Schluß Gesezzen gemacht sei. Der Logische Verstandesgebrauch ist entweder, allgemein, und der heißt sensus communis, sana ratio, bon sens, d.i. man kann dadurch etwas geradezu begreifen, und dieser gemeine Verstand, ist der so genannte Mittelverstand. Das heißt wenn jeder gleich viel Verstand hätte, so würde gerade so viel Verstand unter den Menschen seyn, als izzo ist, da derselbe so ungleich von der Natur verteilt wird jedoch hat jeder davon genung, und niemand beklagt sich über Mangel an Verstand denn nur mit seinem Verstande kann er die Gränzen des Verstandes meßen. Auf diesen Gesunden Verstand bezieht man sich in neuern Zeiten, gleichsam als eine Göttliche Offenbahrung, und man glaubt berechtigt zu seyn, sich im Nachdenken nicht weiter zu üben, und Mühe zu geben, weil es doch ein jeder leicht einsehen könnte. Oder 2. Speculatiuisch der Unterschied zwischen dem gemeinen und speculatiuen Verstande; es kommt darauf an, daß der Speculativische in abstracto der gemeine in Concreto die Dinge erkent, z.B. die Regel aus dem Naturrecht: Casum sentit dominus versteht der speculativische Verstand ohne Anwendung auf diese oder jene besondere Fälle des gemeinen Lebens. Der Gemeine Verstand muß aber erstlich Beispiele und Beweise haben. Anmerkung Man kann sich nur erst alsdann auf den Gesunden Verstand Beziehen, wenn etwas in Concreto erkannt werden kann. Der speculatiue Verstand muß sich dem Gemeinen zu beqvemen suchen, d.i. er muß das, was er in Abstracto erkannt hat in Concreto begreiflich machen, und dies heißt die Popularitaet. Eben diese ist ein Beweis, daß unsere spekulativische Erkenntniß klar und deutlich sei. Nach diesem doppelten Verstandesgebrauch wird die Logik in die Natürliche und spekulativische eingeteilt. Die eigentliche Logic ist die Lehre von dem spekulativischen Verstandesgebrauch: denn die Natürliche hat schon jeder selbst sie ist auch darum spekulativisch, weil sie Regeln in abstracto vorträgt.",
     "pages": [
      {
       "p": 612,
       "i": 1464
      }
     ],
     "aaEnd": 612,
     "ms": [
      {
       "p": 8,
       "i": 826
      },
      {
       "p": 9,
       "i": 2048
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s02-013",
     "kind": "text",
     "aa": 613,
     "text": "Bei den Aristotelicern wurde die Logic in Analytik und Dialektik d.i. nach des Autors Erklärung in die Logic 1. des gewissen und 2. des wahrscheinlichen Erkenntnißes unterschieden. Allein so kann man sie nicht vollkommen genung unterscheiden: denn beides hat solcher Gestalt wahrheit zum Objekt und es differirt nur in Ansehung der Gewißheit, indem man das eine durch unzulängliche, das andere durch zulängliche Gründe darstellt. Die gehörige Erklärung, der Analytic und Dialectic soll diese seyn: Die Analytic ist die Logic der Wahrheit Dialectic ist die Logic des Scheins was ist nun nach dieser Erklärung die Logic ist sie Analytik oder Dialectic? Als Kanon betrachtet ist sie eine Analytik, und als Organon eine Dialectic. Sieht man die Logik, als Organon betrachtet, für die Logic der Wahrheit an, so wird ein Advocat ein Rabulist ein Philosoph ein Sophist denn man urtheilt solcher Gestalt von Gegenständen nach allgemeinen Regeln, ohne den Gegenstand selbst zu kennen, wie z.B. vor kurzem Disputationen etc. etc. alles nach Mathematischer Ordnung vorgetragen wurde. Demnach war die Form gewahrt. Die Materie aber falsch vorgetragen Dennoch ist die Uebung in der Logik des Scheins nicht zu tadeln. Die Logic heißt Vernunftlehre, nicht aber in Ansehung der Ordnung ihres Vortrages: denn jede Wißenschaft muß Vernunftmäßig vorgetragen werden, weil sie die Vernunft zum Gegenstande hat. Statt Vernunftlehre könnte man sie auch Verstandeslehre nennen: denn den Verstand brauchen wir bei allen Gegenständen, die Vernunft aber nicht. Man darf in der Logic nicht ganz abstrahiren, sondern man kann auch Exkurse in die Psychologie und in die Regeln in Concreto machen: maaßen die Logic eigentlich die Lehre von der Gränznachbarschaft derer Vernunft mit der Sinnlichkeit, Psychologie und Geschichte ist. Logic ist der Kanon der Vernunft.",
     "pages": [
      {
       "p": 613,
       "i": 1178
      }
     ],
     "aaEnd": 613,
     "ms": [
      {
       "p": 10,
       "i": 383
      },
      {
       "p": 11,
       "i": 1550
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s03",
   "title": "Die Geschichte der Logic",
   "headings": [
    "Die Geschichte der Logic."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s03-001",
     "kind": "text",
     "aa": 613,
     "text": "Aristoteles war der erste Logiker, er ist der Vater der Logic: Seine Logic ist ein Produkt von großem Scharfsinn. Die Scholastiker nahmen seine Lehrsäzze an, und suchten die Logik zu erheben vor allen sie gewannen dabei aber nichts. Baco de verulam gab sich auch in der Logic einige Mühe. Descartes in seinem Buch de methodo that ein gleiches Malebranche schreibt in seinem Werke: Recherches de la vérité mehr Metaphysik als Logik. Von Tschirnhausen schreibt Medicinam mentis et corporis mathematice illustratur, welches sehr zu empfehlen ist. Locke und Leibniz haben auch sehr viel in der Logik verursacht. Wolfs Logik ist die beste die mehresten dieser Männer sezten der Logic nicht die gehörige Schranken. Sie ist so zu sagen die Anatomie des Verstandes Crusius gefällt auch aber nur seinen Anhängern Lamberts Organon enthält eine Menge von Einsichten."
    }
   ]
  },
  {
   "id": "s04",
   "title": "Nuzzen der Logic",
   "headings": [
    "Nuzzen der Logic."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s04-001",
     "kind": "text",
     "aa": 613,
     "text": "Dieser ist klar: denn die Form des Verstandes ist wichtiger als der Inhalt, dahingegen ein Logischer Fehler der allerärgste ist: denn man macht ihn nicht allein; sondern man macht sichs auch zur Regel zu sündigen. Sie hat auch einen allgemeinen Nuzzen, wenn sie Populäre vorgetragen wird. Alle Erkenntniß wird demnach eingetheilt"
    },
    {
     "id": "busolt-s04-002",
     "kind": "text",
     "aa": 613,
     "text": "1.) In Cognitionem ex datis i.e. cognitio a posteriori."
    },
    {
     "id": "busolt-s04-003",
     "kind": "text",
     "aa": 613,
     "text": "2.) In Cognitionem ex principiis i.e. cognitio a priori oder Vernunft Kenntniße antequam nobis data sunt."
    },
    {
     "id": "busolt-s04-004",
     "kind": "text",
     "aa": 614,
     "text": "Cognitio ex datis ist, wenn uns ein Objekt gegeben ist z.B. das wir aus der Erzählung anderer haben z.B. die Bewegung der Sterne, wer aber anzugeben weiß, warum eine Sonnenfinsterniß eben zu der zeit entstanden der Beweist ex principiis. cognitio a posteriori ist die Empirische cognitio a priori, ist die Speculative Vernunfterkenntniß. Diese haben wir entweder 1. aus Begriffen, d.i. die Philosophische Erkenntniß",
     "pages": [
      {
       "p": 614,
       "i": 133
      }
     ],
     "aaEnd": 614,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s04-005",
     "kind": "text",
     "aa": 614,
     "text": "2. Aus Construction, das ist die Mathematische Erkenntniß. Die Mathematik und Philosophie differiren also sehr: denn die Philosophie wird aus Begriffen die Mathematik aus der Construction der Begriffe erkannt. Beide aber sind nicht dem Gegenstande nach unterschieden. Denn auch die Philosophie hat Größen zum Objekt. Es sind beides Vernunfterkenntniße, und zwar beide speculatiue der Unterschied liegt darin, daß die eine auf Begriffen, die andere auf Construction der Begriffe beruht. Z.B. Wenn ich über einen Triangel Sinnen wollte, wie groß doch der Winkel wäre, der alle drei in sich enthielte, so würde ich Philosophisch nichts ausfindig machen um einen richtigen Begriff davon zu haben. Ich muß also die Begriffe construiren d.i. ich muß die Dinge im Singulari coram intuitu einsehen. Intuitus a priori ist wenn ich mir die Figur nicht aus der Erfahrung denke und mahle. Intuitus empiricus aber, wenn ich die Figur aus der Erfahrung mache. Die Mathematik hat mit dem Intuitu a priori zu thun. Sonst pflegt man die Philosophie und Mathematik dem Objecte nach zu unterscheiden, dadurch daß man saget, die Philosophie handle von Qualitaeten, die Mathematik von Quantitaeten. Dieser Unterschied aber ist unrichtig, denn sowohl Philosophie als Mathematik handeln großen ab, die Mathematik aber besonders, weil ich nur nach der größe einen Begriff construiren kann. Die Philosophie ist eine Wißenschaft, und muß ein System ausmachen. Sie ist also das System aller Speculatiuen Erkenntniß aus Begriffen. Unser Denken ist eigentlich ein Erkenntniß durch Begriffe, oder eine discursive Erkenntniß. Die Sinne aber geben uns nur Erkenntniß durch Anschauung, oder intuitiue Erkenntniße. Denn den der da die erstere inne hat, könnte man einen Philosophen, den aber der das andere hat, einen Mann von gesundem Verstande nennen. Die Philosophie ist nicht practisch, sondern sie ist die Gesezkunde der Vernunft. Die Gesezzen nach denen wir verfahren sind",
     "ms": [
      {
       "p": 13,
       "i": 47
      },
      {
       "p": 14,
       "i": 1256
      }
     ]
    },
    {
     "id": "busolt-s04-006",
     "kind": "text",
     "aa": 614,
     "text": "1.) Regeln der Geschicklichkeit d.i. Politische Gesezze."
    },
    {
     "id": "busolt-s04-007",
     "kind": "text",
     "aa": 614,
     "text": "2.) Regeln der Weißheit, d.i. Moralische Gesezze."
    },
    {
     "id": "busolt-s04-008",
     "kind": "text",
     "aa": 614,
     "text": "In der Philosophie ist zu unterscheiden obiectives und subiectiues Erkenntniß Objectiue kann diese Erkenntniß eine Vernunft Erkenntniß"
    },
    {
     "id": "busolt-s04-009",
     "kind": "text",
     "aa": 615,
     "text": "seyn, a priori, subiective kann die Philosophie nichts als eine Historische Erkenntniß seyn. Die Philosophie erkennt also ex conceptu die Mathematik ex intuitu. In der Philosophie kann ein Intuitus nur ein Beispiel sein, da hingegen in der Mathematik ein Intuitus das wesentliche ist, daher fehlt Wolff, wenn er in seinem Auszuge aller Mathematischen Wißenschaften von der Ähnlichkeit nur eine durchaus speculatiuische Definition giebt. Ganz anders macht es Euclides, der sogleich auf die Anwendung geht. Die Philosophische Erkenntniß ist demnach discursiv, die Mathematische intuitiv. Die Philosophie kann nicht auswendig gelernt werden, und ein Philosoph kann kein Anhänger einer besondern Secte seyn; denn so wird er die Philosophie, nicht aber Philosophiren, lernen, in der Mathematik hingegen, kann man den Nuzzen, die Nothwendigkeit eines andern Lehrsazzes befolgen, da man in der Mathematik als einer intuitiven Wißenschaft sich selbst durch den Leitfaden der Anschauung überführen kann, ob dieser oder jener richtig geurtheilt; dahingegen in der Philosophie als einer discursiuen Wißenschaft dieser Leitfaden fehlt. Wenn man findet, qui dicunt academia, so bedeutet es die Platonicer, qui dicunt Porticus bedeutet Stoicer. Wenn man findet qui dicunt horti so bedeutet es die Epicureer.",
     "ms": [
      {
       "p": 15,
       "i": 149
      }
     ]
    },
    {
     "id": "busolt-s04-010",
     "kind": "text",
     "aa": 615,
     "text": "Die Philosophie ist eine speculatiue VernunftErkenntniß nach Regeln in abstracto. Sie muß ein System seyn, das ist: alles muß darin nach einer gesezmäßigen Ordnung vorgetragen werden, denn durch die Aesthetik unterscheidet sich das System vom aggregat, worin alles untereinander geworfen wird, welches auch Rhapsodie heißt.",
     "ms": [
      {
       "p": 16,
       "i": 189
      }
     ]
    },
    {
     "id": "busolt-s04-011",
     "kind": "text",
     "aa": 615,
     "text": "Die Philosophie ist ein System von Vernunft Erkenntnißen, doch obiectiue kann sie eine Vernunft Erkenntniß seyn und nicht subiective: denn selbst die Philosophie, die eine Vernunft Erkenntniß im strictesten Verstande ist, kann durch hören sagen, von einem andern erlernet werden, so ist sie in Rücksicht dieses subiectiv demnach keine Vernunft Erkenntniß. Ein Philosoph ist entweder ein Praktischer, d.i. ein solcher, der durch Begriffe Meister über seine Leidenschaften ist, oder ein Theoretischer, der der Gesezgeber oder vielmehr Gesezkündiger der Menschen Vernunft ist. Der Naturlehrer ist kein Philosoph, denn er braucht die Vernunft so viel er kann, bey den natürlichen Gegenständen, dahingegen der Metaphysiker seine Vernunft gleichsam sich selbst betrachten läßt, und daher den Namen Philosoph mit recht führet. Er ist ein Legislator der Menschheit, ein Sophist hingegen ein leguleius derselben."
    }
   ]
  },
  {
   "id": "s05",
   "title": "Abhandlung der Logic",
   "headings": [
    "Abhandlung der Logic."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s05-001",
     "kind": "text",
     "aa": 616,
     "text": "Hier wird von der Erkenntniß ueberhaupt geredet. Die Logic selbst handelt von den Vorstellungen, aber nicht von solchen, deren wir uns nicht bewußt sind, d.i. von dunkeln, sondern von klaren, d.i. von solchen von denen wir ein Bewußtseyn haben. Jede Erkenntniß hat einen Gegenstand und kann daher auf doppelte Weise betrachtet werden: nemlich",
     "ms": [
      {
       "p": 17,
       "i": 184
      }
     ]
    },
    {
     "id": "busolt-s05-002",
     "kind": "text",
     "aa": 616,
     "text": "1.) Im Verhältniß auf den Gegenstand das ist das Materiale."
    },
    {
     "id": "busolt-s05-003",
     "kind": "text",
     "aa": 616,
     "text": "2.) Im Verhältnis auf die Verstandes Form, d.i. das Formale der Erkenntniß."
    },
    {
     "id": "busolt-s05-004",
     "kind": "text",
     "aa": 616,
     "text": "In der Logic abstrahirt man vom Gegenstande, und siehet auf die Form des Verstandes, d.i. modus cognoscendi. Dieses Formale der Erkenntniß ist nun wieder:"
    },
    {
     "id": "busolt-s05-005",
     "kind": "text",
     "aa": 616,
     "text": "1. Logicum das Denken intellectuell"
    },
    {
     "id": "busolt-s05-006",
     "kind": "text",
     "aa": 616,
     "text": "2. Aestheticum das Anschauen sensuell"
    },
    {
     "id": "busolt-s05-007",
     "kind": "text",
     "aa": 616,
     "text": "Die Vorstellungen sind:"
    },
    {
     "id": "busolt-s05-008",
     "kind": "text",
     "aa": 616,
     "text": "1. Subiective d.i. Empfindung sie ist die Veranderung des Zustandes im Subiect."
    },
    {
     "id": "busolt-s05-009",
     "kind": "text",
     "aa": 616,
     "text": "2. Obiective d.i. Erkenntniß, sie reflectirt die Vorstellung auf den Gegenstand."
    },
    {
     "id": "busolt-s05-010",
     "kind": "text",
     "aa": 616,
     "text": "Empfindung kann man nur dem mitteilen, der sie hat oder gehabt hat, mithin läßt sich darüber weder in der Logic noch in der aesthetic was Regelmäßiges festsezzen, weil ein Subiect immer von andern unterschieden bleibt, und also auch die Empfindung. Jede Vorstellung ist immer Erkenntniß als Anschauung: solcher gestalt sind die Vorstellungen"
    },
    {
     "id": "busolt-s05-011",
     "kind": "text",
     "aa": 616,
     "text": "1.) der Anschauung (Sinnlichkeit)"
    },
    {
     "id": "busolt-s05-012",
     "kind": "text",
     "aa": 616,
     "text": "2.) der Begriffe (Verstand)",
     "ms": [
      {
       "p": 18,
       "i": 27
      }
     ]
    },
    {
     "id": "busolt-s05-013",
     "kind": "text",
     "aa": 616,
     "text": "1.) Die Anschauung geht auf einen einzelnen Gegenstand, in so fern er von andern unterschieden wird,"
    },
    {
     "id": "busolt-s05-014",
     "kind": "text",
     "aa": 616,
     "text": "2.) Die Begriffe gehen auf etwas allgemeines, denn sie machen das Besondere allgemein. Aus solchen Eintheilungen entstehen denn;"
    },
    {
     "id": "busolt-s05-015",
     "kind": "text",
     "aa": 616,
     "text": "a) Die aesthetic, d.i. diejenige Disciplin die die Regel der Vollkommenheit aus den Vorstellungen des Anschauens vorträgt."
    },
    {
     "id": "busolt-s05-016",
     "kind": "text",
     "aa": 616,
     "text": "b) Die Logic ist diejenige Wißenschaft die die Regeln der Vollkommenheit aus den Vorstellungen des Verstandes vorträgt."
    },
    {
     "id": "busolt-s05-017",
     "kind": "text",
     "aa": 617,
     "text": "Die Logic hat es demnach mit klaren Vorstellungen zu thun d.i. mit solchen Begriffen deren wir uns bewußt sind, und diese teilen wir wieder ein in die deutliche, und Undeutliche."
    },
    {
     "id": "busolt-s05-018",
     "kind": "text",
     "aa": 617,
     "text": "Ein deutlicher Begriff ist derjenige, nach welchem wir das Mannigfaltige, das eine Sache enthält erkennen z.B. beim Begriff der Tugend denke ich dreierlei"
    },
    {
     "id": "busolt-s05-019",
     "kind": "text",
     "aa": 617,
     "text": "1.) Die Regelmäßigkeit."
    },
    {
     "id": "busolt-s05-020",
     "kind": "text",
     "aa": 617,
     "text": "2.) Die Freyheit zu handeln."
    },
    {
     "id": "busolt-s05-021",
     "kind": "text",
     "aa": 617,
     "text": "3.) Die Beherrschung der Begierden und Leidenschaften."
    },
    {
     "id": "busolt-s05-022",
     "kind": "text",
     "aa": 617,
     "text": "Hat man bloß vom ganzen einen Begriff aber nicht von den theilen, so heißt der Begriff zwar ein klarer, aber Undeutlicher, man nennt ihn nicht recht Verworren; denn die Verworrenheit steht der Ordnung entgegen nicht aber der Deutlichkeit. Alle Erkenntniße erlangt man durch die Ordnung d.i. per reductionem idearum subactis quosdam titulos. Zwischen Deutlich und Verworren giebt es noch ein Mittelding nehmlich einfach. Eine einfache Vorstellung ist diejenige in welcher keine Mannigfaltigkeit enthalten ist. Z.B. Von einem einzigen Buch kann ich nicht sagen, daß es unordentlich liege. Die Deutlichkeit der Anschauung findet nicht statt ohne Begriffe von den Theilen. – – Die Deutlichkeit der Begriffe ist nicht anders möglich, als daß man zugleich das Mannigfaltige erkenne und unterscheide. Die Philosophie geht damit um, unsern Verstand anzuhalten, um unsere allgemeine Begriffe aufzulösen und uns den ganzen Vorrath unserer Erkenntniß zu zeigen. Est enim vt aiebat Socrates; Philosophia cognitionem nostrarum, quasi quaedam obstetrix non mater.",
     "ms": [
      {
       "p": 19,
       "i": 268
      }
     ]
    },
    {
     "id": "busolt-s05-023",
     "kind": "text",
     "aa": 617,
     "text": "So lernen wir in der Philosophie den Unterschied zwischen Stolz, Hochmuth, Hoffarth, da wir doch schon vorher von diesen einige Begriffe erhalten. Allein in der Philosophie werden aus dunkeln Begriffe klare aus klaren deutliche, und es wird darin uns gleichsam ein Bewußtseyn unserer Erkenntniß beigebracht. Der Unterschied der Logischen und aesthetischen Vorstellungen besteht darin,"
    },
    {
     "id": "busolt-s05-024",
     "kind": "text",
     "aa": 617,
     "text": "1.) Die aesthetische Vorstellung ist die Vorstellung durch die Sinne oder Einbildungskraft, diese imagination gehöret gleichsam mit zu den Sinnen, sie ist ihr copist, sie ist die Quelle der Anschauung.",
     "ms": [
      {
       "p": 20,
       "i": 110
      }
     ]
    },
    {
     "id": "busolt-s05-025",
     "kind": "text",
     "aa": 617,
     "text": "2.) Die Logische Vorstellung ist die Vorstellung durch den Verstand, und denken heißt daher, durch die Begriffe erkennen."
    },
    {
     "id": "busolt-s05-026",
     "kind": "text",
     "aa": 617,
     "text": "Die erste Art der Vorstellung wird auch das Sinnliche Erkenntnißvermögen, oder die untere Kraft der Seele genant, dahingegen die zweite Art die obere Kraft der Seele."
    },
    {
     "id": "busolt-s05-027",
     "kind": "text",
     "aa": 618,
     "text": "Die Vernunft ist im Verhältniß gegen den Verstand das, was für die Sinnen der Verstand ist; beide Arten sind bei einem Begriff nöthig, und anders kann kein Begriff hervorgebracht werden. Die aesthetische Vollkommenheiten sind entweder Wesentliche, d.i. die Conformitaet des Sinnlichen mit dem Logischen, oder intellectuelle, ein Stück kann bei den Wizzigsten Einfällen nicht gefallen, wenn man nicht die Uebereinstimmung der ganzen Einbildung mit dem Thema finden kann. Eben aus dieser wesentlichen Vollkommenheit entstehet der Sensus publicus der allgemeine Geschmack: denn dieser ist das Vermögen der Wahl nach den allgemeinen Gesezzen der Sinnlichkeit, oder die aesthetischen Vollkommenheiten sind auch zufällige Diese kann man nicht bestimmen, denn sie gehen aufs Subiect."
    },
    {
     "id": "busolt-s05-028",
     "kind": "text",
     "aa": 618,
     "text": "Die allgemeine und besondere Gesezze der aesthetic.",
     "ms": [
      {
       "p": 21,
       "i": 29
      }
     ]
    },
    {
     "id": "busolt-s05-029",
     "kind": "text",
     "aa": 618,
     "text": "Die allgemeine Gesezze sind in Rücksicht der Anschauung möglich. Denn bei Beurtheilung des schönen, welches in der aesthetic untersucht wird (dahingegen in der Logic das wahre), ist die Anschauung das Principal, die Empfindung Accessorium. Die Anschauung kann nicht geteilt werden; allein Empfindungen können nicht beigebracht werden, geschiehts, so geschiehts durch gleichnüße. Die Privat Gesezzen beruhen auf den Verschiedenen Empfindungen eines jeden. Die Empfindungen sind gewiße Veränderungen unseres Zustandes, wodurch alle unsere Erkenntniß Kräfte belebt und angestrengt werden. Der Geschmack ist das Vermögen der Sinnlichen Beurtheilungskraft nach allgemeinen Gesezzen der Sinnlichkeit. Das Gefühl ist das Vermögen der Empfindung nach privat Gesezzen der Sinnlichkeit."
    },
    {
     "id": "busolt-s05-030",
     "kind": "text",
     "aa": 619,
     "text": "Hieraus entstehet die Mischung unserer Erkenntniße aus Empfindungen und Begriffen. Ist unsere Erkenntniß von allen Empfindungen abgesondert, so ist sie rein. Je reiner die Erkenntniß, destoweniger ist sie Empfindung. Je stärker die Empfindung ist; destoweniger und richtig rein ist die Erkenntniß. Demnach müßen wir uns nicht durch die blendende Zauber Kraft der Sinnen hinreißen laßen, sondern erst die Erkenntniß selbst gründen, und dann die Empfindung darauf bauen, und so entsteht die gehörige Erbauung. Empfindungen ueberraschen, Erkenntniß kommt nach und nach; jene sind etwas vorübergehendes, diese etwas Beständiges. Die General aesthetische Vollkommenheit besteht in Reiz und Rührung. (Delinementum est mentis concussio.) Attrahit delinementum, nos quoad contemplandum longius objectum detinent. Convolvit concussio animum nobisque quasi quendam horrorem infundit. Mens delinementa sentit, quandam animae voluptatem, atque in objectum quasi acquiescit. Concussio est tamquam animae aliqua actio. Delinemento, ne ob dulce animis condimentum fastidium moveat, concussionis atque commutationis aliquid admisceatur, conquassatio haec est, habitur quidam dolor, puncto temporis inquinatam voluptatem resolvitur.",
     "pages": [
      {
       "p": 619,
       "i": 906
      }
     ],
     "aaEnd": 619,
     "ms": [
      {
       "p": 22,
       "i": 440
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s05-031",
     "kind": "text",
     "aa": 620,
     "text": "Von den mancherley Arten der Erkenntniße. Eine Vernünftige und eine Vernunft Erkenntniß sind sehr unterschieden. Eine Vernünftige Erkenntniß ist, wenn sie nur Vernunftmäßig ist, d.i. die der Mensch durch seine Vernunft einsehen kann, und Vernunfterkenntniße sind die, die aus der Vernunft hergeleitet sind; in jeder Wißenschaft erfordert man solche. Der Autor sagt, ein Gelehrtes Erkenntniß, und eine Philosophische Erkenntniß wäre einerley, aber sie sind sehr unterschieden. Denn alle unsere Erkenntniß ist entweder historisch oder vernunfts Erkenntniß, diese muß seyn speculativ aus Begriffen, wenn sie Philosophie seyn soll. Zum historischen Erkenntniß gehört die Litteratur, dieses kommt her von Litterator, d.i. einer der die Bücher kennt, dieser ist ein Philolog, wenn er ein Kritikus ist, und besonders die alten Sprachen kennt. Es ist schon ein großer Grad eines solchen gelehrten bis auf den Polyhistor, dieser ist gleichsam ein Gigant der Gelehrsamkeit. Er lernet nicht die Philosophie und Mathematik, sondern er weiß sie schon Historisch. Er hat eine Bücherkenntniß und beurteilt selbst die alten Philosophen. Sie sind nichts als Halbgelehrte, sie wißen Historisch, was große Männer gesagt haben. Aber der Grund fehlt ihnen. Durch den Weg der Nachahmung kann ich kein Philosoph werden, ich muß andern nichts zu Dank haben, sondern durch sie nur ihre Begriffe verbessern. Ein Philosoph ist kein Gelehrter, denn in der Philosophie braucht man nicht unterrichtet zu werden. Ein Gelehrter ist ein solcher, der gelehrt worden ist. Sie wißen nichts anders, als was ihnen gelehret worden. Philosophie und Mathematik kann ich aber aus mir selbst haben, nur die Historie kann ich lernen. Ein Gelehrter ist eruditus nicht Litteratus, der letzte ist der lesen und Schreiben kann. Mathematik ist keine Gelehrsamkeit, sondern eine Vernunft Erkenntniß, Philosophie ist auch eine Vernunft Erkenntniß; in der Philosophie läßt aber sich discursive, in der Mathematik intuitive reden. Einen Mathematischen Schwäzzer kann man sich nicht denken wohl aber einen Philosophen, wenn man nemlich die Ausdrücke lernt, die sie alle gebraucht haben und einiges Neue beifügt. Sie tragen Wißenschaften zur Schau. Die schöne Wißenschaften sind keine Gelehrsamkeit. Es ist gut wenn ein Poet, ein Redner, ein Gelehrter ist, aber was schön ist, was rühret muß er aus der Vernunft haben. Sie sind Künste und nicht Wißenschaften. Es kommt bei denselben nicht darauf an, was zu wißen, sondern was zu können. Es gehöret Wiz, Geschmack, Genie dazu. Die aesthetic ist eine Kritik der Kunst. Die Logische Vollkommenheit macht das besondere allgemein, geht von der Anschauung auf Begriffe. Die aesthetische Vollkommenheit hingegen umgekehrt. Die größte Vollkommenheit ist die Verbindung der Logischen Vollkommenheit mit der aesthetischen, indem man nur alsdann begreift und verständlich wird. Alle Erkenntniß die unsern Verstand angeht, bezieht sich aufs Obiect, alle Erkenntniß die unsere Sinnen angeht bezieht sich aufs Subiect, die Logic geht darauf, das besondere durch allgemeine Begriffe zu erkennen. Die aesthetic erkennt das allgemeine durchs besondere, sie füllt die Seele mit Anschauungen nur an. Die Logic sucht alle Erkenntniß auf Begriffe, die aesthetic alle auf Anschauungen, zu bringen. Beide müßen können vereinbart werden, wenn ich das allgemeine in Konkreto erkennen will. Nur der kann die Erkenntniß Sinnlich machen, der sie anschauend macht. Eine Erkenntniß die zwar Logisch vollkommen ist aber nicht aesthetisch, nennt man wohl gründlich, aber trocken. Auf der anderen Seite ist eine Erkenntniß schön, anregend, angenehm, einnehmend, es fehlt ihr aber an Logischer Vollkommenheit; so ist sie seicht. Das Unterhaltende macht zwar nicht das Wesentliche aus; aber unsere Erkenntniß verliert doch wenn es fehlt. Der Schönheit ist Mangel davon entgegengesezt und auf der anderen Seite Häßlichkeit. Das erste nennt man Trockenheit. Die Affektazion ist eine Häßlichkeit. Man kann die grausamsten Vorstellungen erzählen, und dieselbe doch Schön einkleiden; nur nicht den Ekel, dieser kann durch keine Kunst versteckt werden.",
     "pages": [
      {
       "p": 620,
       "i": 2321
      }
     ],
     "aaEnd": 620,
     "ms": [
      {
       "p": 23,
       "i": 258
      },
      {
       "p": 24,
       "i": 1452
      },
      {
       "p": 25,
       "i": 2691
      },
      {
       "p": 26,
       "i": 3932
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s06",
   "title": "Von der Vollkommenheit der Erkenntniß überhaupt",
   "headings": [
    "Von der Vollkommenheit der Erkenntniß überhaupt."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s06-001",
     "kind": "text",
     "aa": 621,
     "text": "Erkenntniß nennt man den ganzen Umfang des Begriffes den jemand von einer Sache erreicht und der alle ihm davon bekannt gewordene Säzze in sich begreift; je größer die Anzahl dieser Säzze ist, desto ausführlicher und vollstandiger, je schärfer man sie erweisen kann, desto gewißer und je öftere Anwendung auf vorkommende Fälle diese Säzze zulaßen, desto nüzlicher ist unsere Erkenntniß. Die Vollkommenheit der Erkenntniß spezificirt sich in die Qualitaet und die Quantitaet. Die Vollkommenheit der Erkenntniß in Ansehung der Qualitaet ist bei allen Erkenntnißen einerley; in Ansehung der Quantitaet kommts bei jedem Gegenstande auf die Menge und den Grad an. In Ansehung der Qualitaet ist die Vollkommenheit der Erkenntniß Theoretisch und Praktisch. Die erste bezieht sich auf den Verstand, die andere auf den Willen. Die erste wird nur in der Logik erwogen, die andere bestimmt Handlungen.",
     "pages": [
      {
       "p": 621,
       "i": 524
      }
     ],
     "aaEnd": 621,
     "ms": [
      {
       "p": 27,
       "i": 890
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s06-002",
     "kind": "text",
     "aa": 621,
     "text": "Theoretische Erkenntniß ist die Frucht der Spekulation oder des Nachdenkens; die Praktische erwächst aus den Anwendungen welche man bei der Ausübung zu machen Gelegenheit findt. Jene wird erhalten, indem man gewiße Begriffe zum Grunde legt, daraus folgen zieht, und dann Schlüße auf Schlüße sezt; diese besteht in einer Sammlung von Erfahrungen, und daraus gezogenen folgen. Die theoretische Vollkommenheit ist entweder aesthetisch oder Logisch"
    },
    {
     "id": "busolt-s06-003",
     "kind": "text",
     "aa": 621,
     "text": "1.) Die Logische Vollkommenheit enthält"
    },
    {
     "id": "busolt-s06-004",
     "kind": "text",
     "aa": 621,
     "text": "a.) Die Materie (obiectum) welche in der Wahrheit besteht, und also in Ansehung der Qualitaet."
    },
    {
     "id": "busolt-s06-005",
     "kind": "text",
     "aa": 621,
     "text": "b.) Die Form (modum cognoscendi) welche besteht:"
    },
    {
     "id": "busolt-s06-006",
     "kind": "text",
     "aa": 621,
     "text": "aa.) In der Allgemeinheit, daß wir alles aus Begriffen erkennen."
    },
    {
     "id": "busolt-s06-007",
     "kind": "text",
     "aa": 621,
     "text": "bb.) In der Deutlichkeit, daß wir diese abstrakte Begriffe in concreto vorstellig machen"
    },
    {
     "id": "busolt-s06-008",
     "kind": "text",
     "aa": 621,
     "text": "2.) Die aesthetische Vollkommenheit enthält"
    },
    {
     "id": "busolt-s06-009",
     "kind": "text",
     "aa": 621,
     "text": "a.) Das Materiale, dies ist hier die Empfindung,"
    },
    {
     "id": "busolt-s06-010",
     "kind": "text",
     "aa": 621,
     "text": "b.) Das Formale, das ist"
    },
    {
     "id": "busolt-s06-011",
     "kind": "text",
     "aa": 621,
     "text": "aa.) Die Mannigfaltigkeit, von dieser ist die Logische Allgemeinheit das Gegentheil. Sie muß bei ihren definitionen alles übrige wegschicken, alles abkürzen, dahingegen jene alles etendirt und erweitert, durch Synonymen etc. etc.",
     "ms": [
      {
       "p": 28,
       "i": 122
      }
     ]
    },
    {
     "id": "busolt-s06-012",
     "kind": "text",
     "aa": 621,
     "text": "bb.) Die Einheit: denn alle diese Erweiterungen müßen doch alle ein ganzes ausmachen Z.E. Die Beschreibung des Frühlings aus dem Munde des Poeten und des Astronomen."
    },
    {
     "id": "busolt-s06-013",
     "kind": "text",
     "aa": 621,
     "text": "Das wesentliche der Begriffe ist die allgemeinheit; das Essentielle der Anschauung die Mannigfaltigkeit aesthetische Vollkommenheit der Form nach, paaret sich am besten mit der Logic. Logische Vollkommenheit mit der aesthetischen verbunden nennt man Bündigkeit. aesthetic und Logic verbunden heißt: Mannigfaltigkeit. Mannigfaltigkeit und Allgemeinheit sind so verbunden, daß keine der andern Abbruch"
    },
    {
     "id": "busolt-s06-014",
     "kind": "text",
     "aa": 622,
     "text": "thut. Deutlichkeit in der Logic ist das, was in der aesthetic die Lebhaftigkeit ist. Je lebhafter die Vorstellung ist desto mehr rührung erregt sie, aber desto weniger erkenne ich. Sie ist also die Belebung der Sinne. Die Deutlichkeit aber beschäftigt uns mit dem Gegenstande"
    },
    {
     "id": "busolt-s06-015",
     "kind": "text",
     "aa": 622,
     "text": "Aesthetische Vollkommenheit erfordert,"
    },
    {
     "id": "busolt-s06-016",
     "kind": "text",
     "aa": 622,
     "text": "1.) Geschmack und dies ist die Form,"
    },
    {
     "id": "busolt-s06-017",
     "kind": "text",
     "aa": 622,
     "text": "2.) Gefühl und das ist die Materie: denn es gehört dazu Reiz und Rührung."
    },
    {
     "id": "busolt-s06-018",
     "kind": "text",
     "aa": 622,
     "text": "Eine praktische Vollkommenheit der Logic ist nicht möglich, denn sie wäre die Bewegung des Wollens, dies wird in der Moral vorgetragen. Die Kunst des Schönen ist bisweilen angebracht. Die Malerische Schönheit von der Natur im Dichten zu gebrauchen ist nicht gut angebracht. Denn keine Kunst erreicht durch schildern und beschreiben die Schönheiten der Natur. Wir scheinen mit der Natur gleichsam wetteifern zu wollen, ob wir auch so einen Anschauenden Begriff machen können, der der Natur nachgehe, deswegen Haller in seinen schwyzerischen Gedichten getadelt wird. In Ansehung der Menschlichen Handlungen kann die Kunst dieselbe nicht nur erreichen; sondern auch uebertreffen; Z.E. In jenen können wir nicht so beschaut werden mit unserm schildern als in der Anschauung, z.E. Milton die Kugel und den Abfall derselben prächtig beschrieben hat. Bis zum höchsten Wesen dürfen wir uns nicht mit Malerischen Schönheiten wagen; daher würde ein Astronom Gott beßer schildern können als ein Poet, denn der erste sagt: Siehe so groß sind die Werke des HErrn; dahingegen der andere mit seinen sinnlichen Bildern zu niedrig schildern würde, da doch Sinnlichkeit bei dem Begriff von Gott sich nicht denken läßt.",
     "ms": [
      {
       "p": 29,
       "i": 100
      }
     ]
    }
   ]
  },
  {
   "id": "s07",
   "title": "Von den Mängeln der Erkenntniß ueberhaupt",
   "headings": [
    "Von den Mängeln der Erkenntniß ueberhaupt."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s07-001",
     "kind": "text",
     "aa": 622,
     "text": "Mängel (defectus) müßen von Fehlern (vitiis) wohl unterschieden werden. Bei Mangel ist die Erkenntniß noch richtig, sie fehlt mir nur. Beim Fehler aber ist sie irrig. Z.E. in der Geographie kann ich wichtige Städte auslaßen, so ist dies ein Mangel, sezze ich aber einen Ort falsch an, so ist dies ein Fehler. Der Mangel kann ersezt werden, der Fehler muß aber vorher zum Mangel reducirt werden. Ein Irrthum ist ein Hinderniß der wahren Erkenntniß; ehe man sich also im Irrthum bestärke, so bleibe man lieber in einem Grad der Unwißenheit.",
     "ms": [
      {
       "p": 30,
       "i": 50
      }
     ]
    }
   ]
  },
  {
   "id": "s08",
   "title": "Vom Horizont der Erkenntniß",
   "headings": [
    "Vom Horizont der Erkenntniß"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s08-001",
     "kind": "text",
     "aa": 623,
     "text": "Ein Horizont ist ueberhaupt ein Kreis, welcher alle Gegenstände begränzt, die wir sehen können. Hier ist der Horizont: Congruentia cognitionis cum terminis perfectionis humanae. Dieser Horizont theilt sich in den Logischen nach dem Erkenntnißvermögen, in den Praktischen nach dem Nuzzen. Der Logische Horizont muß vor der Bestimmung des Praktischen vorhergehen: denn der Nuzzen folgt erst auf Erkenntniß. Ich muß hier zuerst nicht nach dem Nuzzen fragen. Die Nuzzen verbergen sich oft sehr lange. Als Archimedes das Verhältniß des Kegels zum Cylinder fand, würde es ihm schwer geworden seyn, den Nuzzen davon anzugeben; lange nachher zeigete sich derselbe im gemeinen Leben. Der Praktische theil gehört nicht für die Logic, es wird also nichts mehr davon gesagt werden. Was aber den Logischen betrifft, so teilen wir ihn ein:",
     "ms": [
      {
       "p": 31,
       "i": 626
      }
     ]
    },
    {
     "id": "busolt-s08-002",
     "kind": "text",
     "aa": 623,
     "text": "1.) In den allgemeinen Horizont des Menschlichen Verstandes ueberhaupt. Dieser kann nur durch tiefe Metaphysische Untersuchungen bestimmt werden."
    },
    {
     "id": "busolt-s08-003",
     "kind": "text",
     "aa": 623,
     "text": "2.) In den Praktischen Horizont dieser oder jener Absicht. Hiebei ist der Unterschied zu merken:"
    },
    {
     "id": "busolt-s08-004",
     "kind": "text",
     "aa": 623,
     "text": "a.) Wie ich den Horizont von meiner"
    },
    {
     "id": "busolt-s08-005",
     "kind": "text",
     "aa": 623,
     "text": "b.) Wie ich den Horizont von anderer Kenntniße bestimme. Ich kann den Horizont bestimmen"
    },
    {
     "id": "busolt-s08-006",
     "kind": "text",
     "aa": 623,
     "text": "1.) Aus den Lebensabsichten,"
    },
    {
     "id": "busolt-s08-007",
     "kind": "text",
     "aa": 623,
     "text": "2.) Aus dem Geschlecht."
    },
    {
     "id": "busolt-s08-008",
     "kind": "text",
     "aa": 623,
     "text": "3.) Aus dem Stande."
    },
    {
     "id": "busolt-s08-009",
     "kind": "text",
     "aa": 623,
     "text": "4.) Aus dem alter eines Menschen."
    },
    {
     "id": "busolt-s08-010",
     "kind": "text",
     "aa": 623,
     "text": "Regeln bei Bestimmung des Horizonts. Man bestimme den Horizont von Anfang nicht zu weit Z.B. In den Schulen lernt man viele Dinge, die man nachher liegen läßt, wie z.B. die Orientalischen Sprachen. Man bestimme also den Horizont immer Enge. Man bestimme seinen Horizont auch nicht gar zu Enge, weil"
    },
    {
     "id": "busolt-s08-011",
     "kind": "text",
     "aa": 623,
     "text": "a.) Von den Kenntnißen viel verlohren gehen"
    },
    {
     "id": "busolt-s08-012",
     "kind": "text",
     "aa": 623,
     "text": "b.) Weil wir nicht wißen wozu wir diese Erkenntniße noch gebrauchen können."
    },
    {
     "id": "busolt-s08-013",
     "kind": "text",
     "aa": 623,
     "text": "Man verändere den Horizont seiner Kenntnisse nicht zu oft. Z.E. wenn aus einem Theolog ein Jurist wird, und bisweilen umgekehrt. Den allgemeinen Logischen Horizont können wir auch bestimmen:",
     "ms": [
      {
       "p": 32,
       "i": 104
      }
     ]
    },
    {
     "id": "busolt-s08-014",
     "kind": "text",
     "aa": 624,
     "text": "1.) Logisch oder a priori und dies ist der Horizont der Vernunft."
    },
    {
     "id": "busolt-s08-015",
     "kind": "text",
     "aa": 624,
     "text": "2.) Empirisch oder a posteriori."
    },
    {
     "id": "busolt-s08-016",
     "kind": "text",
     "aa": 624,
     "text": "aa.) Bei einzelnen Obiecten."
    },
    {
     "id": "busolt-s08-017",
     "kind": "text",
     "aa": 624,
     "text": "bb.) In Ansehung des ganzen Menschlichen Geschlechts, wie weit nehmlich von Anfang bis auf unsere Zeiten die Wißenschaften gestiegen sind."
    },
    {
     "id": "busolt-s08-018",
     "kind": "text",
     "aa": 624,
     "text": "Der erste nehmlich der Horizont der Vernunft wird besonders bestimmt in der Metaphysik: denn dergleichen frägt man nicht, wie weit es der Menschliche Verstand gebracht habe, sondern wie weit er es bringen könnte. Der Horizont der Vernunft ist:"
    },
    {
     "id": "busolt-s08-019",
     "kind": "text",
     "aa": 624,
     "text": "a.) Der Horizont der Gesunden Vernunft und"
    },
    {
     "id": "busolt-s08-020",
     "kind": "text",
     "aa": 624,
     "text": "b.) Der Horizont der Speculatiuen Vernunft."
    },
    {
     "id": "busolt-s08-021",
     "kind": "text",
     "aa": 625,
     "text": "Der Horizont der Gesunden Vernunft ist enger begränzt, als der der Speculatiuen. Alles steigt: Naturlehre, Naturgeschichte, Mathematik, Historie und man wird nothwendig alles in engere Form gießen müßen, damit die Wißenschaften nicht in Verfall gerathen, bloß weil sie so hoch gestiegen sind. Denn die Menschen müßten nothwendig decouragirt werden, wenn sie nicht den Namen eines Erfinders Glänzend machen mögten. Man hat also zu izzigen Zeiten viele Philosophie nöthig, um aus so vielen Wißenschaften die nöthigsten und nützlichsten zu wählen. Die Unwißenheit zu erkennen, muß man viel wißen, denn ein Unwißender erkennt nicht seine Unwißenheit. Er kann es nicht begreifen, wie ihm an Weltkenntniß so viel fehlen sollte. Der gemeine Mann z.B. hält die Sterne für Punkte und glaubt, daß sie ein anderer auch dafür halte. Je mehr wir erkennen; desto mehr sehen wir, daß wir noch Unwißend sind, daß wir noch vom großem Felde der möglichen und Nüzlichen Wißenschaften nur einen kleinen theil cultiviren. Um seine Unwißenheit zu kennen, muß man wenigstens einen Umriß der Wißenschaften kennen, damit wir erkennen, was wir wißen und was uns fehlt, wir müßen wenigstens extensiv die Wißenschaften kennen. Die Unwißenheit an und für sich selbst ist etwas tadelnswürdiges, nicht aber jede Unwißenheit ist zu bedauren denn derienige, der immer hinter die Handlungen der Menschen grabt und die Quelle derselben aufsucht, wird zulezt, wenn er nur ueberall eigennuzzig eigenes Beste und eigene Absichten als Bewegungsgründe zu Handlungen findet, Tugend für Chimäre, und Ausübung derselben für Thorheit halten. Vollkommene Tugend hat nie einer und kann auch nicht ausgeübt werden. Gelehrte die ihre Unwißenheit kennen, werden nicht selten wirr, z.B. Condamine der berühmte Französische Naturalist der bei erblickung des unerschöpflichen Vorraths der Natürlichen Dinge in Peru, alle Lust zur Erweiterung der Naturhistorie verlor. Sie werden uns immer mehr Problemata aufgeben die wir nicht auflösen können. Von der Weitläuftigkeit des Wißens",
     "pages": [
      {
       "p": 625,
       "i": 1705
      }
     ],
     "aaEnd": 625,
     "ms": [
      {
       "p": 33,
       "i": 517
      },
      {
       "p": 34,
       "i": 1747
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s08-022",
     "kind": "text",
     "aa": 625,
     "text": "1.) Die Gelehrsamkeit ist der Inbegriff aller Historischen Wißenschaften."
    },
    {
     "id": "busolt-s08-023",
     "kind": "text",
     "aa": 625,
     "text": "2.) Die Philologie der alten Sprachen ist der Inbegriff der Werkzeuge der Gelehrsamkeit."
    },
    {
     "id": "busolt-s08-024",
     "kind": "text",
     "aa": 625,
     "text": "Ein Philolog ist,"
    },
    {
     "id": "busolt-s08-025",
     "kind": "text",
     "aa": 625,
     "text": "a.) Ein Litterator, d.i. einer der die Bücherkenntniß der alten Schriften hat,"
    },
    {
     "id": "busolt-s08-026",
     "kind": "text",
     "aa": 625,
     "text": "b.) Ein Linguist wenn er die alten Sprachen kennt und zwar Critisch,"
    },
    {
     "id": "busolt-s08-027",
     "kind": "text",
     "aa": 625,
     "text": "c.) Ein Humanist, wenn er die Schönheit der alten Schriften studirt, und dann"
    },
    {
     "id": "busolt-s08-028",
     "kind": "text",
     "aa": 625,
     "text": "d.) Ein Belletrist der seinen Geschmack aus den neuern Schriften bildet."
    },
    {
     "id": "busolt-s08-029",
     "kind": "text",
     "aa": 625,
     "text": "Die ganze Polyhistorie scheint eine gar zu große Erkenntniß zu seyn. Es ist nur aber eine Erkenntniß aller Wißenschaften. Man könnte sie einen Cyklopen nennen weil ihr ein Auge, nemlich die Kritische Philosophie fehlt. Die Philosophie ist auch eine Polyhistorie, aber nur die Historische Philosophie. Der Polyhistorie wird zur Seite gesezt, die Polymathie. Jene ist eine Erkenntniß aller Historischen Wißenschaften, diese eine Erkenntniß aller Vernunft Wißenschaften, oder aller Meinungen der Philosophen. Ein Gelehrter der Beides zusammen ist, ist ein Pansoph.",
     "ms": [
      {
       "p": 35,
       "i": 327
      }
     ]
    },
    {
     "id": "busolt-s08-030",
     "kind": "text",
     "aa": 625,
     "text": "Hiezu gehört aber mehr Gedächtniß als Genie. Die encyklopaedische Geschicklichkeit ist eine Fertigkeit die Wißenschaften ins kleine zu bringen. Sie ist rhapsodistisch und eine bloße Kompilazion, sie soll aber ein System seyn; und muß also nicht rhapsodistisch, sondern Methodisch seyn. Die Enzyklopädie bringt alle Wißenschaften unter einen Titel, sie giebt den Stammbaum davon an. Ein solcher Baum ist organisch. Die Todten Sprachen sind dies Vehikel der Polyhistorie und das Kommerzium der schönen Wißenschaften, weil sie"
    },
    {
     "id": "busolt-s08-031",
     "kind": "text",
     "aa": 625,
     "text": "1.) Das Werkzeug der Wißenschaften sind und"
    },
    {
     "id": "busolt-s08-032",
     "kind": "text",
     "aa": 625,
     "text": "2.) Sich nicht verändern."
    }
   ]
  },
  {
   "id": "s09",
   "title": "Vom Mißbrauch oder Mangel der Erkenntniß",
   "headings": [
    "Vom Mißbrauch oder Mangel der Erkenntniß."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s09-001",
     "kind": "text",
     "aa": 626,
     "text": "Dahin gehören Pedanterie und Charlatanerie. Das Wort Pedant kommt aus dem Italienischen her. Magister pedarius war ein solcher, der Kinder führte und bloß in ihrer Gesellschaft war der folglich Manieren annahm, die nicht mit den öfentlichen passen. Denn gemeinhin pflegen sie eine gar zu ängstliche Peinlichkeit in Formeln zu beobachten, welchem eine zweckmäßige Pünktlichkeit entgegen gesezt ist Charlatanerie gränzt an Pedanterie. Denn wer erstere besizt der hat zwar keine schulgerechte Kenntniße, sucht doch aber durch den Schein des Besizzes derselben andere zu hintergehen. Pedanterie aber sezt Schulgerechte Kenntniße voraus. Sie nähern sich vorzüglich der popularitaet indem sie Kenntniße die nicht selten tiefes Nachdenken erfordern, spielend und der Faßungskraft eines jeden als leichtbegreiflich vorstellt. Dies ist ein Haupt Charakter der Franzosen. Der Autor sagt: Die Pedanterie sey eine Charlatanerie. Es sind aber beide sehr unterschieden. Erstere ist eine Gelehrte aber eingeschränkte Erkenntniß ohne popularitaet. Leztere ist eine Pralerey in der Erkenntniß und besteht darin, daß man seine eigene eingeschränkte Geschicklichkeit über all anzubringen sucht. Die Vollkommenheit der Erkenntniß muß eine gewiße Beziehungskunst haben. Sie ist entweder:",
     "ms": [
      {
       "p": 36,
       "i": 181
      }
     ]
    },
    {
     "id": "busolt-s09-002",
     "kind": "text",
     "aa": 626,
     "text": "a.) Scholastisch, wenn sie einen Theil der Gelehrsamkeit ausmacht, oder, coascendentia ad certum conditionis gradum oder,"
    },
    {
     "id": "busolt-s09-003",
     "kind": "text",
     "aa": 626,
     "text": "b.) Populair, d.i. die Kondescendenz zu allgemeinen Begriffen.",
     "ms": [
      {
       "p": 37,
       "i": 40
      }
     ]
    },
    {
     "id": "busolt-s09-004",
     "kind": "text",
     "aa": 626,
     "text": "Diese Kondescendenz ist eine Geschicklichkeit sich zu bequemen,"
    },
    {
     "id": "busolt-s09-005",
     "kind": "text",
     "aa": 626,
     "text": "aa.) Sowohl dem Inbegriff, als auch"
    },
    {
     "id": "busolt-s09-006",
     "kind": "text",
     "aa": 626,
     "text": "bb.) Der Fähigkeit und faßlichkeit des publici und der Menge."
    },
    {
     "id": "busolt-s09-007",
     "kind": "text",
     "aa": 627,
     "text": "Die Scholastische Kenntniß kann ihrem Grade nach groß der Anwendung nach klein seyn. Will man populair seyn, so muß man von der Gründlichkeit, Ausführlichkeit, bestimmtheit etwas abziehen. Die Scholastische Erkenntniß hat die Gründlichkeit zu ihrem Wesentlichen; die popularitaet zieret und schmükket, nur die Gründlichkeit Soliditaet wird mit dem Gangelwagen der Terminologie geleitet. Eine Predigt muß nicht allein Schulgerecht, sondern auch populair seyn, und es gehört dazu eine anhaltende Herablaßung. Ein Prediger kann kein Galanter Redner seyn. Denn je mehr Würde eine Sache selbst hat, desto weniger Schmuck bedarf sie. Ueberhaupt ist die Soliditaet immer der popularitaet vorzuziehen. Denn je mehr populair desto weniger solide. Die Geschicklichkeit sich aller Welt zu bequemen ist eine Weltkenntniß, und einen der diese besizt, nennt man einen Gelehrten von der Welt. Die Pedanterie ist also der Mangel der Popularitaet des Gelehrten Erkenntnißes.",
     "pages": [
      {
       "p": 627,
       "i": 663
      }
     ],
     "aaEnd": 627,
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s10",
   "title": "Eintheilung der Gelehrten",
   "headings": [
    "Eintheilung der Gelehrten"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s10-001",
     "kind": "text",
     "aa": 627,
     "text": "1.) In Zunftgelehrte, die durch die Gelehrsamkeit ihr Brod suchen."
    },
    {
     "id": "busolt-s10-002",
     "kind": "text",
     "aa": 627,
     "text": "2.) In Zunft freye Gelehrte, die bloß die Gelehrsamkeit zum Vergnügen brauchen."
    },
    {
     "id": "busolt-s10-003",
     "kind": "text",
     "aa": 627,
     "text": "Erstere müßen der Welt nothwendig mehr Nüzzen als diese: denn sie sehen sich genothiget der Sache tiefer nachzudenken, indem sie ihren Zuhörern den Gegenstand gleichsam in verschiedenen Lagen zu zeigen verpflichtet sind. Die andern sind freilich Stolzer: denn sie sagen die freye Künste müßen nicht in der Absicht, als Handwerke gebraucht werden."
    }
   ]
  },
  {
   "id": "s11",
   "title": "Von der Wahrheit",
   "headings": [
    "Von der Wahrheit"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s11-001",
     "kind": "text",
     "aa": 628,
     "text": "Wahrheit ist die Uebereinstimmung des Erkenntnißes mit dem Obiect. Der Wahrheit wird der Schein kontradiktorisch entgegen gesezt. An der Frage der allgemeinen Kriterien scheitert der Philosoph. Sie haben kein allgemeines Kriterium der Wahrheit finden können. Ein allgemeines Kriterium ist wo ein Merkmahl an die Hand gegeben wird, ohne betracht des Gegenstandes selbst; es muß gegen alle Gegenstände gleichgültig seyn, die Erklärung muß hier abstrahirt werden von allen unterschieden bestimmter Gegenstände; sie beschaftigt sich also bloß mit der Form. Es liegt also das allgemeine Kriterium der Wahrheit schon in der Frage. Er will Zeichen der Wahrheit haben, und dies ist die uebereinstimmung des Erkenntnißes mit dem Obiect. Er will allgemeine Kennzeichen haben d.i. er will ein Zeichen haben, welches allgemein auf alle Gegenstände geht, er will ein Zeichen von der Form haben. Das allgemeine Kriterium der Wahrheit ist hier also bloß Formale, die Uebereinstimmung des Erkenntnißes mit dem obiect. Die Logic kann also bloß Formale nicht Materiale allgemeine Kriteria der Wahrheit geben. Sie giebt bloß ein relatiues Kriterium an, allgemeine materiale Kriterien der Wahrheit kann die Logik nicht geben. Denn eine Erkenntniß kann beziehungsweise auf ein obiect falsch seyn auf ein anderes aber wahr. Ein jedes Obiect hat sein Materielles Kriterium. Das Materiale Kriterium kann nicht von allen obiecten gelten. Materielle Wahrheit besteht bloß in der Unterscheidung eines Gegenstandes von andern. Wer also von dem Logiker ein allgemeines Kriterium der Wahrheit verlangt, muß nicht eine Erkenntniß des Obiects, obs richtig ist, auch kein allgemeines Kriterium der Wahrheit verlangen. Das allgemeine Kriterium der Wahrheit in der Logic ist eine Uebereinstimmung der Erkenntniß mit sich selbst. Dies Merkmahl giebt indirecte einen Unterschied an, daß wenn eine Erkenntniß der Logischen Form zuwider ist, sie gewiß falsch ist, weil sie sich selbst widerspricht.",
     "pages": [
      {
       "p": 628,
       "i": 1318
      }
     ],
     "aaEnd": 628,
     "ms": [
      {
       "p": 39,
       "i": 508
      },
      {
       "p": 40,
       "i": 1634
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s11-002",
     "kind": "text",
     "aa": 628,
     "text": "Anmerkung Der Dialektische Gebrauch des Verstandes ist hervorbringung des Scheins. Das Formale betrügt sehr oft. Z.E. Ein schönes Kleid zieret einen Dummen Kopf. Hingegen ist unter einem schlechten Kleide oft ein Gelehrter verborgen, eben so ist es mit den Erkenntnißen. Wenn von zweien entgegen gesezten Säzzen der eine falsch ist, so ist der andere wahr. Wer also die Wahrheit eines Satzes zeigen will hat zwei Wege vor sich. Einmal kann er geradezu die Wahrheit eines Sazzes selbst beweisen das andere mahl die Falschheit des entgegengesezten, welches leztere geschieht, wenn er daraus etwas absurdes Richtig folgert. Denn ein Saz ist gewiß falsch, wenn er falsche Folgen hat. Im ersten Falle heißt er eine directe, im andern eine indirecte et apagogische demonstration. Die Kriteria der Wahrheit sind entweder wesentlich oder außerwesentlich. Wesentlich sind sie wenn sie im Erkenntniß selbst beruhen und mit den obersten Gesezzen des Verstandes zusammenstimmen. Außerwesentlich, wenn sie in der Uebereinstimmung des allgemeinen Menschen Verstandes bestehen. Die Merkmale die wir von der Wahrheit haben sind also zwiefach:",
     "ms": [
      {
       "p": 41,
       "i": 729
      }
     ]
    },
    {
     "id": "busolt-s11-003",
     "kind": "text",
     "aa": 628,
     "text": "1.) a priori und"
    },
    {
     "id": "busolt-s11-004",
     "kind": "text",
     "aa": 628,
     "text": "2.) a posteriori."
    },
    {
     "id": "busolt-s11-005",
     "kind": "text",
     "aa": 629,
     "text": "Die Beurtheilung a posteriori, ob ein Saz, den ich nach allgemeinen Verstandes Regeln gemacht habe, auch bei jedermanns Verstande, Beifall findet kann man nicht entbehren. Sie ist die Probe ob ein Saz mit den gemeinen Verstandes Gesezzen stimme, oder nicht Merkmahle sind nicht obiectiv sondern subiectiv, sie sind von der Einstimmung anderer, besonderer subiecte hergenommen. Es giebt daher Obiective Kriteria der Wahrheit, diese bestehen in der Uebereinstimmung der Erkenntniß mit den Gesezzen des Verstandes und der Vernunft. Diese sind nicht hinreichend. Es giebt zwei subiectiue Kriteria der Wahrheit, welche zu den vorigen kommen müßen, und darin bestehen, daß man das Urtheil verschiedener Leute zusammennimmt. Ich bekümmere mich also hier um die Uebereinstimmung der subiecte. –",
     "pages": [
      {
       "p": 629,
       "i": 670
      }
     ],
     "aaEnd": 629,
     "ms": [
      {
       "p": 42,
       "i": 607
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s11-006",
     "kind": "text",
     "aa": 629,
     "text": "Ich muß Probe anstellen:"
    },
    {
     "id": "busolt-s11-007",
     "kind": "text",
     "aa": 629,
     "text": "1.) Vergleiche ich meine Kenntniß, die ich von Gegenständen habe mit der Erkenntniß anderer Gegenstände die schon führ wahr angenommen worden. Dieses macht einen großen Unterschied in der Anwendung der gemeinen Regeln des Verstandes und der Vernunft."
    },
    {
     "id": "busolt-s11-008",
     "kind": "text",
     "aa": 629,
     "text": "2.) Sehe ich, ob die Erkenntniß meines Subiects uebereinstimmt mit der Erkenntniß anderer Subiecte."
    },
    {
     "id": "busolt-s11-009",
     "kind": "text",
     "aa": 629,
     "text": "Ueberhaupt ist das wahr, was für jeder Mann gilt, und was nur eine Privatgültigkeit hat ist nur ein Schein. Der Trieb bei Untersuchung der Wahrheit andere zurathe zu ziehen ist dem Menschen von Natur schon beigelegt. Die Formale wesentliche Kenntniße der Wahrheit sind:"
    },
    {
     "id": "busolt-s11-010",
     "kind": "text",
     "aa": 629,
     "text": "a.) Eine Kenntniß muß moglich seyn dies ist ein negatiues Kriterium."
    },
    {
     "id": "busolt-s11-011",
     "kind": "text",
     "aa": 629,
     "text": "b.) Eine Erkenntniß muß gewißer Weise gegründet seyn:"
    },
    {
     "id": "busolt-s11-012",
     "kind": "text",
     "aa": 629,
     "text": "A.) Als Folge und"
    },
    {
     "id": "busolt-s11-013",
     "kind": "text",
     "aa": 629,
     "text": "B.) Als Grund. Als solche wenn sie eine richtige Folge aus wahren Gründen ist. Als Grund, wenn sie ein Grund von wahren folgen ist.",
     "ms": [
      {
       "p": 43,
       "i": 90
      }
     ]
    },
    {
     "id": "busolt-s11-014",
     "kind": "text",
     "aa": 629,
     "text": "Die Folgen können angesehen werden als Gründe (rationes), zwar nicht als rationes succedendi, sondern cognoscendi. Die Möglichkeit der Erkenntniß muß mit einem wahren Grunde verknüpft seyn der richtige Folgen hat, und mit wahren folgen die einen richtigen Grund haben. – Grundlosigkeit und unmöglichkeit sind Zeichen der Falschheit. Grundlosigkeit ist ein unvollständiges Zeichen der Falschheit. – Die Unmöglichkeit ist ein hinreichender, Apodictischer Grund, daß eine Erkenntniß falsch sey Hingegen ist bei der Wahrheit die moglichkeit ein vollstandiges Zeichen, die Gründlichkeit aber ein hinreichendes Zeichen derselben."
    },
    {
     "id": "busolt-s11-015",
     "kind": "text",
     "aa": 629,
     "text": "Die Wahrheit ist eine Vollkommenheit der Erkenntniß ueberhaupt. Sie gehört aber specifice zur Logischen Erkenntniß. Sie ist Logisch auch aesthetisch vollkommen, besonders aber aesthetisch: denn sie bezieht sich aufs Subiect."
    },
    {
     "id": "busolt-s11-016",
     "kind": "text",
     "aa": 630,
     "text": "Die Logische und aesthetische Wahrheit unterscheidet sich darin; aesthetische Wahrheit ist die, die mit den Zwecken der Sinnlichkeit übereinstimmt. Es kann eins von diesen beiden bei einer Erkenntniß statt finden, das andere aber nicht. Z.B. Man tadelt am Shakespeare, daß er die Geister erscheinen läßt. Es ist hiebei nicht zwar Logische Wahrheit, aber doch Aesthetische denn Shakespeare hat den Zweck dieses Recht den Sinnen zu imprimiren. Ferner ist es ja eben auch nichts unmögliches, daß Geister uns sinnlich erscheinen könnten, ob es gleich nicht ausgemacht ist. Zu diesen Absichten des Shakespears aber ist Aesthetische Wahrheit hinreichend Z.E. in Äsops Fabeln werden die Thiere redend vorgestellt. Wir können uns eine Erkenntniß die ganz wahr, auch eine, die ganz falsch, aber auch eine die weder wahr noch falsch ist denken. Ein jedes Urtheil, wenn es auch falsch ist, muß doch in einiger Absicht mit den Gesezzen des Verstandes stimmen, und auch etwas wahr seyn. Es ist also gewiß daß bei einem falschen Urtheil allemahl etwas weniges wahr sey, wenn es gleich gegen das Falsche unbeträchtlich ist. Der Autor giebt einen Unterschied zwischen einer genauen und groben Erkenntniß. Dieser Unterschied ist Unrichtig. Denn der Groben ist die subtile Erkenntniß entgegen gesezt. Eine genaue Erkenntniß ist eine solche, die mit dem Gegenstand in allen Stücken uebereinstimmt, und dem Zweck gemäß ist. Sie heißt eine praecise Erkenntniß. Eine subtile in welcher ein größerer Grad der Erkentniß ist, als der Zweck erfordert, eine grobe Erkentniß, in welcher ein kleinerer Grad der Erkentniß ist, als der Zweck erfordert. Z.E. Die Erkenntniß Gottes ist eine genaue, grobe auch subtile Erkentniß. Alle Menschen müßen eine richtige Erkentniß Gottes haben. Der Grad der Richtigkeit ist bei verschiedenen Menschen verschieden. Ein Lehrer Z.E. muß schon eine subtile Erkenntniß haben. Wenn er ihn aber sich als ein körperliches wesen dächte d.i. wenn er eine grobe Erkentniß hätte, so wäre er deswegen sehr zu tadeln. Wenn es gleich dem gemeinen Mann erlaubt ist. Die subtile Erkentniß fehlt im Extensiven. Es sind Wißenschaften, die alles praecise verlangen Z.E. Ich gehe spazieren; so ist beßer, wenn ich das Geld, welches ich dazu anwenden will, den Armen gebe, dadurch uebe ich meine Liebespflicht aus. Man sagt: es ist etwas tolerabiliter wahr d.i. wenn der Fehler in der Erkentniß nicht beträchtlich ist; oder wenn das unrichtige einer Erkentniß den Zweck derselben nicht hindert. Der Autor macht § 104 einen Unterschied, zwischen dogmatischen und Historischen Wahrheiten (ex datis) diese werden den Vernunft Erkentnißen (ex principiis) entgegengesezt; nicht aber die dogmatischen. Die Vernunft Erkentniß ist aus Begriffen, und ist ein apodictischer Grund, d.i. der mit dem bewußt seyn der Nothwendigkeit",
     "pages": [
      {
       "p": 630,
       "i": 205
      }
     ],
     "aaEnd": 630,
     "ms": [
      {
       "p": 44,
       "i": 299
      },
      {
       "p": 45,
       "i": 1531
      },
      {
       "p": 46,
       "i": 2660
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s11-017",
     "kind": "text",
     "aa": 631,
     "text": "verbunden ist. Ex Principiis ist eine Erkentniß entweder aus Begriffen, oder aus Construction der Begriffe. Die Erkentniße aus Begriffen sind dogmata die aber mit Anschauung verbunden sind, d.i. wenn das allgemeine in der Anschauung (in concreto) erkannt wird sind Mathemata. Die erste ist also eine Philosophische, die andere eine Mathematische Erkentniß. Nun sind dem Autor eine Menge dogmatischer Urtheile Wahrheiten, die so verbunden sind, daß sie ein ganzes ausmachen, ein System. Dies ist es aber nicht. Denn man kann das mannigfaltige zusammen nehmen durch bloße Aehnlichkeit. Ein System ist aber wo die Idee des ganzen vor der Bestimmung der theile vorher geht. Ein Aggregat aber ist, wo die Kentniß der theile vor dem Begriff des Ganzen vorhergehet. Es wäre also die Erklärung unsers Autor vom System nichts anders als ein aggregat Aggregiren kann ich nach Aehnlichkeit; nicht nach Ideen. Der Autor sagt: Daß ein System aus dogmatischen Wahrheiten bestehe, dies ist nicht rechte denn es giebt ja auch andere Systeme z.E. das Natursystem ist ein Historisches system. Alle Erkentniß die ein aggregat ausmacht, kann heißen eine rhapsodie, die aber ein System ausmacht, eine Wißenschaft, d.i. Begriff des ganzen wo nehmlich die Theile desselben zusammengenommen ein ganzes ausmachen. Die Wahrheit wird dem Irrthum entgegen gesezt. Der Irrthum ist eine Vorstellung einer falschen Erkentniß, als einer Wahrheit. Wir bedienen uns nicht immer der Gesezze des Verstandes und der Vernunft. Wie kann der Irrthum entstehen? Dies ist eine schwere Frage. Wir merken also an:",
     "ms": [
      {
       "p": 47,
       "i": 988
      }
     ]
    },
    {
     "id": "busolt-s11-018",
     "kind": "text",
     "aa": 631,
     "text": "1.) Irrthum und Wahrheit finden nur in der Vernunft statt, nicht in Begriffen, oder Anschauungen."
    },
    {
     "id": "busolt-s11-019",
     "kind": "text",
     "aa": 631,
     "text": "2.) Durch die Sinne haben wir keine Urtheile; sondern nur Anschauung. Wo nicht geurtheilet wird, ist weder Wahrheit noch Irrthum. Die Sinne irren also auch nicht."
    },
    {
     "id": "busolt-s11-020",
     "kind": "text",
     "aa": 631,
     "text": "3.) Der Verstand irrt auch nicht bey Begriffen"
    },
    {
     "id": "busolt-s11-021",
     "kind": "text",
     "aa": 632,
     "text": "Ein Compendioeses Mittel nicht zu irren ist: gar nicht zu urtheilen. Dieses Mittel ist wohl nicht anzupreisen, dennoch aber ist es gut, wenn die Erkentniß der Sache über unsere Verstandes Erkentniß [nicht] zu sehr erhaben ist; weil daher sehr leicht ein Irrthum entsteht. Man kann urtheilen, und doch nicht irren, wenn man nehmlich nicht unterscheidend urtheilet, nicht Assertorisch; sondern Problematisch; wenn ich zu meinem Urtheil noch hinzufüge: non liquet, es ist nicht ausgemacht. Aber so zu urtheilen ist kein Gewinn für die Vernunft. Ich muß nur am Anfange die Erkentniß Problematisch, mit der Zeit Aßertorisch beurtheilen. Das Problematische urtheilen muß vor dem aßertorischen vorhergehen. Diejenige die Problematisch urtheilen nennt man Zweifler; beßer könnt man sie cunctatores nennen.",
     "pages": [
      {
       "p": 632,
       "i": 545
      }
     ],
     "aaEnd": 632,
     "ms": [
      {
       "p": 48,
       "i": 338
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s11-022",
     "kind": "text",
     "aa": 633,
     "text": "Alle Urtheile sind Handlungen des Verstandes und der Vernunft ob sie zwar auch irrig sind, so können wir doch nicht sagen, daß der Verstand an sich selbst irre. Denn er ist der Probierstein der Wahrheit. Der Verstand handelt nach seinen Gesezzen jederzeit einstimmend, und die Einstimmung ist formale Wahrheit. Die Sinnen irren an sich selbst nicht. Denn sie urteilen nicht. Der Irrthum entspringt aus der Vermischung beider. Wir unterscheiden nehmlich nicht den Schluß der Sinne von den Wirkungen des Verstandes. Eine Kraft kann nur als denn von ihren Gesezzen abweichen; wenn sich eine andere einmengt. Z.E. Ich laße einen Stein vom Thurm fallen; so werde ich urtheilen, er werde gerade herunter fallen, er wird aber vom Winde zur Seite getrieben; so werde ich doch nicht denken, daß er von selbst abgewichen sey, sondern daß sich eine zweite Kraft untermengt habe, die ihn fortgestoßen. Eben so ist es mit dem Verstande und mit den Sinnen. Wir berufen uns beim Irrthum auf die Schranken der Vernunft und beschimpfen hiedurch nicht uns selbst; sondern die Natur. Dies ist aber Unrecht: denn die enge Schranken der Vernunft sind die Ursachen des Mangels und nicht des Irrthums Jeder Irrthum entsteht theils aus dem Verstande, teils aus den Sinnen, wir müßen also die Quellen desselben bei Beiden suchen. In sofern er nun aus dem Verstande entsprungen ist, ist er wahr. Der Irrthum entspringt auch bisweilen aus dem Verstande, also hat aller Irrthum, als ein Urtheil eine partiale Wahrheit. Wenn Subiectiue Gründe fälschlich für Obiectiue gehalten werden, so ist dies ein Irrthum wir vermengen das Subiectiue mit der Beschaffenheit des Obiects, und dann entsteht ein Irrthum, durch diese Vertauschung. Man vertauscht hier die Bedingungen des Verstandes mit den Bedingungen der Sinnlichkeit. Ein negatiues Kriterium der Wahrheit, ist also die Gewißheit, daß man nicht geirret, daß man die subiectiuen Gründe des führwahr haltens abgesondert habe. Man hat sich bloß des Verstandes mit Sistierung der Sinnlichkeit bedient. Das kommt aber selten vor. – Denn man kann es nicht bemerken, es ist wie eine Bezauberung, wenn man die Sinnlichkeit mit einmengt. Z.E. Wenn jemand ein abergläubisches Histörchen erzählt; so sagt er zuvor, ich bin nicht Abergläubisch, und finde doch das Histörchen wundersam. Indessen muß man sich auf alle mögliche Weise vor dem Einfluß des Verstandes auf die Sinnlichkeit hüten, Z.E. Alles lügen ist Schändlich, man sagt aber, Nothlügen sind erlaubt. Dies sind sie aber nicht. Denn mehrentheils geschieht dies aus Eigennuz; dieser ist ein Einfluß der Sinnlichkeit in den Gebrauch des Verstandes, und hier ist das Lügen eben so schimpflich, als sonst. In jeder Wißenschaft findet eine solche Einmischung statt, ausser in der Mathematik, wo ich alles intuitu einsehe. Der Autor redet von einem gewißen Unvermeidlichen Irrthum (error invincibilis) der so gewiß da eine gewiße Unwißenheit Unvermeidlich ist. Z.E. Wenn der jüngste Tag kommen wird. Ein Irrthum ist immer vermeidlich, das beßte Hülfsmittel ist, nicht urtheilen. Wenn ich aber etwas urteilen muß z.E. In den Dingen der Religion, so ist in diesem Fall zuweilen ein Irrthum unvermeidlich. In der Moral muß man urtheilen, da ist aber kein Irrthum Unvermeidlich: denn sie hat eine gewiße euidenz bei sich. Im Beurtheilen der Dinge der Natur z.E. ob im Mond Einwohner sind, kann ein unvermeidlicher Irrthum seyn, ich darf aber hier nicht urtheilen. Wir haben bei allen Dingen, wo man das absolut große nicht weiß ein Mittelsmaaß, was großer ist als dieses, wird bewundert, was kleiner ist, wird verachtet. Eben so ist es mit dem Verstande: Der gemeine Verstand ist das Mittelmaaß zwischen aller Menschen Verstande, und man nennt das ungereimt, was diesem Verstande wiederspricht. Den Menschen den gemeinen Verstand absprechen ist Beleidigung. Der Irrthum kann oft wiederlegt werden durch eine Probe. – Man muß aber suchen auf die Ursachen und Beschaffenheit des Irrthums zu kommen. Kein Irrthum wird dadurch geheilt, daß er wiederlegt wird: sondern daß er erklärt wird, da man die Ehre der Vernunft anderer sonst beleidigt. Alle Wahrheiten sind entweder nothwendig oder zufällig. – Die Nothwendige müßen durch die Vernunft a priori eingesehen werden, die Zufälligen aber durch die Erfahrung. – Beide werden von der Logic betrachtet, wenn gleich die Regeln der Logic nothwendige sind Mathematic hat nothwendige Wahrheiten, und urtheilet a priori. Die Ausübung und Probe aber bestätigt nicht den Saz; sondern dient zur Erklärung dieser nothwendigen Wahrheiten, welche man Apodictische Wahrheiten nennt.",
     "pages": [
      {
       "p": 633,
       "i": 2335
      }
     ],
     "aaEnd": 633,
     "ms": [
      {
       "p": 49,
       "i": 662
      },
      {
       "p": 50,
       "i": 1819
      },
      {
       "p": 51,
       "i": 2981
      },
      {
       "p": 52,
       "i": 4062
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s12",
   "title": "Von der Klarheit der Gelehrten Erkentniß",
   "headings": [
    "Von der Klarheit der Gelehrten Erkentniß"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s12-001",
     "kind": "text",
     "aa": 634,
     "text": "Ein Merkmahl bedeutet einen Teil Begrif einer ganzen Vorstellung. Es betrachtet nicht einen Theil der Sache. Unter dem Merkmahl versteht Wolff unrecht einen Unterscheidungs Begrif: denn 2 Dinge können ja auch eine Aehnlichkeit haben. Es giebt also ein Merkmahl der identitaet, und eins der Diuersitaet; die Identitaet zu erkennen, dazu ist unser Verstand von selbst schon aufgelegt; die diuersitaet zu erkennen muß er angetrieben werden. Die Merkmahle sind",
     "pages": [
      {
       "p": 634,
       "i": 193
      }
     ],
     "aaEnd": 634,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s12-002",
     "kind": "text",
     "aa": 634,
     "text": "1.) Mittelbahre d.i. ein Merkmahl von einem Merkmahl, ein Merkmahl von einer Vorstellung vom Merkmahl.",
     "ms": [
      {
       "p": 53,
       "i": 102
      }
     ]
    },
    {
     "id": "busolt-s12-003",
     "kind": "text",
     "aa": 634,
     "text": "2.) Unmittelbare, d.i. ein Merkmahl vom Gegenstande, das nicht durch allgemeine Begriffe entsteht z.E. Mir würde ein Körper vorgestellt und ich sage es ist ein Stein, so frägt man was ist ein Stein? Es ist ein Körper, der aus sehr harter Erde besteht. Was ist Erde? Was ist Körper? Dies ist Mittelbar. Die erste nennt man subordinirt die andere coordinirt, die erste machen eine Reihe aus, die anderen ein aggregat, und sind Teilvorstellungen, die als partes zum ganzen gehören. In der Reihe der Subordinirten muß ein Merkmahl a priori ein erstes Merkmahl seyn Z.E. Was ist ein Mensch? ein denkendes Wesen in einem organischen Körper: Was ist denken? Vorstellen durch Begriffe. Was ist vorstellen? Weiter kann ich nicht, dies ist das erste merkmahl, und solche sind allgemeine. Die Merkmahle der coordinirten sind eine Linie ohne Gränze sie sind aber Zählbar worin sie einen Begriff ausmachen, den sie von der Sache haben. Es giebt zweitens verneinende und bejahende Merkmahle. Das erstere eigentlich ist kein Teil Begriff einer Sache, es ist relatiues das andere ein Subiectiues Merkmahl. Die negatiue sind nichts anders als Vorstellungen den Irrthum zu meiden. Es giebt Wißenschaften wo die negatiuen Merkmahle den großten Theil ausmachen z.E. die Natürliche Theologie. Oft kann man ein negatiues Merkmahl von einer Sache haben, ein Positives aber nicht. Es giebt ferner wichtige und geringe, Fruchtbare und unfruchtbare, Zureichende und unzureichende Merkmahle. Zureichende Merkmale sind die, die den ganzen Begriff der Sache haben. Es muß gelten von der identitaet.",
     "ms": [
      {
       "p": 54,
       "i": 1231
      }
     ]
    },
    {
     "id": "busolt-s12-004",
     "kind": "text",
     "aa": 634,
     "text": "Die Merkmale sind entweder innerliche oder äußerliche Innerliche, welche die innere Beschaffenheit und Eigenschaften betrachten, der Inbegriff aller innerlichen Merkmahle in so weit sie einen Begriff ausmachen ist ein innerlicher Begrif. Alle innerliche Merkmahle sind entweder notae primitiuae die einem Dinge allein zukommen oder notae deriuatiuae, wo mer als ein Merkmahl von einer Sache gesezt werden kann."
    },
    {
     "id": "busolt-s12-005",
     "kind": "text",
     "aa": 634,
     "text": "Das Logische Wesen ist complexus omnium conceptuum primitiuorum. Primitiue Merkmahle sind essentialia. die Deriuatiue Merkmahle"
    },
    {
     "id": "busolt-s12-006",
     "kind": "text",
     "aa": 635,
     "text": "sind attributa. Die essentialia logica heißen auch constitutiua und sind angesehen als Gründe. Es sind die Attributa rationalia, die aus den Gründen kommen bestandzeichen, wenn sie nicht als folgen von andern Merkmahlen zum Wesen der Dinge gehören. Z.E. Die drey Seiten des Triangels sind essentialien, sie gehören zum Wesen; die Winkel sind attributen. Z.E. Bei einem Körper sind die Ausdehnung und Gestalt, als constitutiua. Sie gehören zum Wesen und sind primitiua, hingegen sind die Theilbarkeit, die Beweglichkeit, die Veränderkeit, deriuatiua. Extraessentialien sind entweder gar keine innerliche Merkmahle und sind relationes oder sie sind zwar innere, aber es sind modi z.E. daß ein Mensch Reich oder Arm, Herr oder Knecht ist sind relationes. Die Gelehrsamkeit ist ein modus. Klare Erkentniße gehören für die Logic, Dunkele aber nicht, sondern für die Psychologie. Daß klare Erkentniß in uns sey, können wir durch Wahrheit wißen, daß dunkele in uns sey, aber durch Schlüße. Die Logic hat mit dunkeln Vorstellungen gar nichts zu thun, es müßen ihr klare gegeben werden. Die Handlung wodurch ein Begriff klar wird, wenn er vorher dunkel war, heißt euolutio conceptus. Die Deutlichmachung einer Vorstellung ist nicht euolutio; sondern analysis, oder Zergliederung. Analysis eines Begriffs ist der Successiue auf die partial Vorstellungen geführte Begriff. Vom ersten giebt uns die Logic nicht Mittel an die Hand, aber vom andern. Wenn die Merkmahle Klar werden; so wird die ganze Vorstellung deutlich. Beim Begrif des Triangels habe ich",
     "ms": [
      {
       "p": 55,
       "i": 284
      },
      {
       "p": 56,
       "i": 1406
      }
     ]
    },
    {
     "id": "busolt-s12-007",
     "kind": "text",
     "aa": 635,
     "text": "1.) Den Begrif einer Fläche"
    },
    {
     "id": "busolt-s12-008",
     "kind": "text",
     "aa": 635,
     "text": "2.) Einer ebenen Fläche"
    },
    {
     "id": "busolt-s12-009",
     "kind": "text",
     "aa": 635,
     "text": "3.) Einer eingeschloßenen Fläche; und auf diese Art habe ich eine deutliche Vorstellung eines Triangels."
    },
    {
     "id": "busolt-s12-010",
     "kind": "text",
     "aa": 636,
     "text": "Der Autor redet § 125 von obiectiuer und speculatiuer Dunkelheit; Dunkel aber ist immer subiectiv; denn der Gegenstand meiner Betrachtung begreift weder Deutlichkeit noch Dunkelheit in sich, sondern diese entsteht bloß durch die Vorstellung oder die Begriffe irgend einer Sache den Dunkeln Vorstellungen haben wir sehr oft viel zu danken. Denn, indem wir durch die Speculative Vernunft in Künstliche Sophistische Irrthümer sehr oft wären gestürzet worden, wenn nicht einige Dunkele Vorstellungen uns noch zurückgehalten hätten; Dunkele Vorstellungen sind also nicht als gar keine anzusehen, sondern als solche, die nicht einen hinlänglichen Begrif uns von einem Obiect zurücklaßen. Completudo conceptus clari besteht in der totalitaet der Merkmahle, die zusammengenommen den Begrif von einer Sache formiren. Diese Begriffen treffen wir wenig in empirischen Dingen an. Totale Klarheit wird nur da seyn, wo wir das, was wir denken, auch mit der Anschauung verknüpfen können. Subiectiue Klarheit der Erkentniß ist stärke und Lebhaftigkeit des Verstandes. Alle Leidenschaften kann man wohl zum spaß erregen, nur nicht den Ekel dieser wird geschwind erregt, aber verschwindet nicht sobald: denn die andern Leidenschaften beleben die Gemüthskräfte, der Ekel schlägt sie aber nieder. Starke ist von Lebhaftigkeit darin unterschieden, daß sie eine Lebhaftigkeit von Praktischen Folgen ist. Lebhaftigkeit ist etwas, wenn uns eine Sache so zur Anschauung gebracht wird, als wenn die Sache sich wirklich vor mir befände. Es giebt aber auch eine Lebhaftigkeit, die nicht einmal Obiectiue Sinnlich ist. Wenn eine Sache lebhaft vorgetragen wird so muß sie",
     "pages": [
      {
       "p": 636,
       "i": 738
      }
     ],
     "aaEnd": 636,
     "ms": [
      {
       "p": 57,
       "i": 824
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s12-011",
     "kind": "text",
     "aa": 636,
     "text": "1.) Aufs interesse führen, dies ist obiectiv"
    },
    {
     "id": "busolt-s12-012",
     "kind": "text",
     "aa": 636,
     "text": "2.) Auf die Anschauung wirken, und das ist subiectiv"
    },
    {
     "id": "busolt-s12-013",
     "kind": "text",
     "aa": 636,
     "text": "Einen Begriff deutlich machen, heißt nicht einen Begriff erweitern; sondern ihn in allen Theilen deutlich machen durch die Analysis, wenn ich aber den Gegenstand, von dem ich noch nicht einen deutlichen Begrif habe, deutlich kennen will, so heißt dieses ihn durch die Synthesis deutlich machen, oder das hinzusezzen was die Anschauung zur Erkentniß darbietet. Wenn ich z.E. weiß daß das Gold nicht nur Gelb biegsam und von besonderer Schwere ist, sondern auch daß es nicht rostet und Feuer bestandig ist; so ist mein Begriff vom Golde per synthesin erweitert. Die Deutlichkeit per synthesin kann empirisch d.i. durch Erfahrung oder a posteriori geschehn.",
     "ms": [
      {
       "p": 58,
       "i": 216
      }
     ]
    },
    {
     "id": "busolt-s12-014",
     "kind": "text",
     "aa": 636,
     "text": "Man kann sich die Dinge auf verschiedne Arten vorstellen."
    },
    {
     "id": "busolt-s12-015",
     "kind": "text",
     "aa": 636,
     "text": "1.) Durch einen Begriff sich etwas vorstellen."
    },
    {
     "id": "busolt-s12-016",
     "kind": "text",
     "aa": 636,
     "text": "2.) Durch Begriffe kennen"
    },
    {
     "id": "busolt-s12-017",
     "kind": "text",
     "aa": 636,
     "text": "3.) Durch den Verstand erkennen, oder verstehen"
    },
    {
     "id": "busolt-s12-018",
     "kind": "text",
     "aa": 636,
     "text": "4.) Durch einsehen durch Regeln a priori."
    },
    {
     "id": "busolt-s12-019",
     "kind": "text",
     "aa": 636,
     "text": "5.) Etwas Zureichend respektive aller Dinge einsehen."
    }
   ]
  },
  {
   "id": "s13",
   "title": "Von der Größe der Gelehrten Erkentniß",
   "headings": [
    "Von der Größe der Gelehrten Erkentniß"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s13-001",
     "kind": "text",
     "aa": 637,
     "text": "Die extensiue Größe beruht auf der Deutlichkeit koordinirter Merkmahle, als ein aggregat; die intensiue größe beruht auf der Deutlichkeit der subordinirten Merkmahle oder der Merkmahlen von den Merkmalen. Die extensive Deutlichkeit ist completudo cognitionis, die intensiue Deutlichkeit ist Profunditas cognitionis. Profunditas oder Gründlichkeit ist die Reihe der Subordinirten Merkmahle, oder den Merkmalen von den Merkmahlen. Negativ seine Erkentniß vollkommen machen heißt nicht die Erkentniß aggregiren; sondern nur das abhalten, was der Erkentniß hinderlich wäre. Die Praecision ist, wenn die Merkmale der Sache substituirt sind. Wenn der Begriff weder zu wenig Merkmahle hat, oder complet ist, noch zuviel Merkmahle in sich begreift, oder praecise ist, so ist er conceptus, qui adaequat rem.",
     "pages": [
      {
       "p": 637,
       "i": 263
      }
     ],
     "aaEnd": 637,
     "ms": [
      {
       "p": 59,
       "i": 464
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s13-002",
     "kind": "text",
     "aa": 637,
     "text": "Anmerkung. Die Praecision kann man nicht in allen Wißenschaften fordern; durchaus aber completudinem. Wenn also ein Begriff einer Sache adaequat seyn soll, so muß er erst complet und nachher praecise seyn. Es folgt aus dieser Praecision die Eleganz, die die Mathematik besitzt. – Denn wenn der Mathematiker eine Definizion giebt; so muß diese der Sache so angemeßen seyn daß keine Rednerische Schönheiten darin vorkommen. Die Praecision ist also im striktesten Verstande eine Logische Vollkommenheit, die abundanz muß eine Erlaubniß haben, wo sie zuzulaßen sey, und diese kann nur da gegeben werden, wo etwas in fauorem sensualem geschieht."
    }
   ]
  },
  {
   "id": "s14",
   "title": "Von der Gewißheit der Gelehrten Erkentniße von den verschiednen Arten des fürwahrhaltens",
   "headings": [
    "Von der Gewißheit der Gelehrten Erkentniße von den verschiednen Arten des fürwahrhaltens."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s14-001",
     "kind": "text",
     "aa": 637,
     "text": "Gewißheit ist ein hinreichendes bewustseyn der Wahrheit. Es ist also ein Zustand unserer Vernunft. Führwahrhalten bedeutet den Zustand des Gemüths in sofern es von einer Sache urtheilt. Gewißheit ist obiectiv. Dies ist Gewißheit:"
    },
    {
     "id": "busolt-s14-002",
     "kind": "text",
     "aa": 637,
     "text": "1.) Empirisch und"
    },
    {
     "id": "busolt-s14-003",
     "kind": "text",
     "aa": 637,
     "text": "2.) Rational durch die Vernunft, oder apodictisch gewiß. Die verschiedene Arten des Führwahrhaltens sind:"
    },
    {
     "id": "busolt-s14-004",
     "kind": "text",
     "aa": 637,
     "text": "1.) Meinen, d.i.: wenn ich eine Sache für wahr halte, ob ich gleich weiß, daß ich keinen hinreichenden Grund dazu habe. Es ist weder ein subiectiuer noch ein obiectiuer Grund des Fürwahrhaltens. Es wird gefragt ob wir hier aßertorisch oder problematisch urtheilen? Die Antwort ist:"
    },
    {
     "id": "busolt-s14-005",
     "kind": "text",
     "aa": 637,
     "text": "Es ist eigentlich nichts anders als ein Problematisches führwahrhalten. Meinungen sind nicht bestimmte Erklärungen. Es ist ein Zeichen, daß ein Mensch denkt, wenn er seine Meinungen abändern kann, wenn er sie von einer andern Seite zu betrachten weiß. Meinung ist eigentlich"
    },
    {
     "id": "busolt-s14-006",
     "kind": "text",
     "aa": 638,
     "text": "ein Bewußt seyn der unzulänglichkeit seines eigenen fürwahrhaltens."
    },
    {
     "id": "busolt-s14-007",
     "kind": "text",
     "aa": 638,
     "text": "Das meynen ist von großem Nuzzen. Alle Kenntniße ausser den Mathematischen fangen von Meinungen an, nach der Meinung kommt die Vergleichung der Merkmahle und denn die Gewißheit.",
     "ms": [
      {
       "p": 61,
       "i": 39
      }
     ]
    },
    {
     "id": "busolt-s14-008",
     "kind": "text",
     "aa": 638,
     "text": "2.) Glauben, dieses ist ein subiectiv hinreichender Grund des führwahrhaltens, mit dem Bewußtseyn, daß es Obiectiv unzureichend ist. Meinen ist weder ein Subiectiuer noch obiectiuer, Glauben nur ein Subiectiuer Zureichender Grund des führwahrhaltens. Dies Glauben ist keine Obiectiue Nothwendigkeit deswegen weil der andere eben so wichtige Gründe haben kann die Sache nicht fürwahrzuhalten. Anfangs müßen wir auch mit unzureichenden Gründen urtheilen: Denn sie sind ein teil der Gewißheit."
    },
    {
     "id": "busolt-s14-009",
     "kind": "text",
     "aa": 639,
     "text": "3.) Wißen. Es ist ein subiectiv hinreichendes führwahrhalten, mit der Gewißheit, daß es auch obiectiv hinreichend ist. Das Glauben schränken wir auf ein anderes Zeugnis ein; hierauf können wir auch schon das Wißen Gründen. Wo nicht Urkunden sind, da glauben wir nur. Wenn ich aber auch ganz Deutliche Kennzeichen habe, so kann ich doch nicht sagen, ich weiß es gewiß: denn es kann doch etwas unzureichendes seyn. Am besten ist die Sprache der Bescheidenheit, daß man sagt: ich glaube es. Beym glauben läuft immer mit dem speculatiuen Erkentniß ein Praktisches intereße mit ein, das ist von der Art, daß es kein Mensch herausbringen kann. Der Grund des führwahrhaltens durch den Glauben ist oft hinreichender, als das Wißen. Anmerkung. Beim meinen, urtheile ich Problematisch, beim Glauben Aßertorisch, beim Wißen apodiktisch. Das obiectiue hinreichende führwahrhalten, obs gleich als Logisch unzureichend wird, ist dem Glauben beim Erkentniß ohne Rücksicht auf die Handlung des Logischen führwahrhaltens hinreichend. Hier ist die Rede vom Historischen Glauben. Es giebt auch einen Vernunftglauben. Wenn das Praktische Führwahrhalten, in gewißer Absicht nothwendig ist; so ist es ein Vernunftglaube. Es ist Wunderbar daß ein Rational glaube statt finden kann, aber durch die Vernunft kann ein Mensch schon glauben daß ein Gott sey. In speculatiuen oder Philosophischen Erkentnißen kann man Meinen, aber nur von empirischen Dingen. Wenn nun Dinge sind, die bloß die Vernunft betreffen; so kann ich nicht meinen, ich muß Gründe haben, entweder zu glauben oder zu wißen. Bei empirischen Dingen können wir Meinungen fällen, weil, wenn wir diesen nachgehen, wir an dem Leitfaden unzureichender Gründe fortgehen und auch wohl allmählich zur Gewißheit kommen, und es bestätigen können. Z.E. Vom Gewitter hat man anfangs geglaubt, daß es eine Aehnlichkeit mit der Elektrizitaet haben könnte, und nachher hat man es durch Erfahrung bestätigt.",
     "pages": [
      {
       "p": 639,
       "i": 1704
      }
     ],
     "aaEnd": 639,
     "ms": [
      {
       "p": 62,
       "i": 560
      },
      {
       "p": 63,
       "i": 1663
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-010",
     "kind": "text",
     "aa": 639,
     "text": "In der Mathematik haben wir nicht Meinungen; sondern Gewißheit. In der Philosophie können auch Meinungen stattfinden; um die Meinungen der anderen zu widerlegen. Glauben gilt eigentlich nur von praktischen Erkentnißen. Man gebraucht es auch bisweilen von empirischen Z.E. Ob der Mond Einwohner habe; die Gewißheit ist entweder empirisch oder rational. Empirisch kann ich von einer Sache gewiß seyn, daß sie dasey, nicht daß sie Nothwendig sey. Zum lezten gehört eine rational Gewißheit wo Vernunft etwas ausmacht, da ist die Erfahrung gering. Z.E. Wenn einer wollte nachdem er einen Saz bewiesen, das alle Winkel in einem Triangel 180 Grad ausmachen den Transporteur nehmen und nachmeßen. Die Rational Gewißheit ist entweder apodictisch, oder Moralisch. Eine speculative Gewißheit ist apodictisch eine Praktische Moralisch. Apodictisch ist die Beziehung der Erkenntniß auf den Verstand. Moralisch ist die Beziehung auf den Willen. Moralische Gewißheit ist das, was ich mit aller Gewißenhaftigkeit behaupten kann, die apodictische Logische Gewißheit ist entweder, a Intuitiv d.i. die Mathematische Gewißheit, oder, b Discursiv d.i. die Philosophische Gewißheit.",
     "ms": [
      {
       "p": 64,
       "i": 979
      }
     ],
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "busolt-s14-011",
     "kind": "text",
     "aa": 639,
     "text": "Diese kann apodictische Gewißheit haben, nicht aber Anschauung. Apodictische Gewißheit ist eine vollkommene Gewißheit a priori, die Mathematische und Philosophische Gewißheiten kommen darin überein, daß sie apodictische Gewißheiten sind; der Unterschied liegt darin, daß die eine intuitiv die andere discursiv ist. Die Mathematische Gewißheit führt eine Gewiße Euidenz a priori mit sich."
    },
    {
     "id": "busolt-s14-012",
     "kind": "text",
     "aa": 639,
     "text": "Wenn die Erkentniß obiectiv nicht hinreichend ist, so ist sie eine Ueberredung. Mancher glaubt überzeugt zu seyn, wenn er überredet ist. Wer sich leicht überreden läßt zeigt eine schwäche des Verstandes an. Man bedienet sich der Ausdrücke annehmen und verwerfen."
    },
    {
     "id": "busolt-s14-013",
     "kind": "text",
     "aa": 640,
     "text": "Sie scheinen sich auf den Willen zu beziehen, und beziehen sich auch wirklich auf ihn: Das annehmen gilt nur da, wo keine apodictische Gewißheit ist. Bin ich einer Sache gewiß, sind die Gründe hinreichend, so muß ich sie annehmen. Um etwas anzunehmen darf ich eben nicht gewiß seyn, und dann habe ichs mit einer Einschränkung angenommen. In der Philosophie sind solche Annehmungen sehr gut, und sind eine Aufschiebung suspension des Urtheils. Diese Suspension ist entweder Kritisch, oder Skeptisch. Eine Kritische Suspension ist: wenn ich meine Urtheile aufschiebe, um sie künftig zu fällen. Bei einer solchen Suspension sage ich: non liquet. Eine Skeptische Suspension ist; wenn ich die Sache immer in Dunkelheit laße.",
     "pages": [
      {
       "p": 640,
       "i": 325
      }
     ],
     "aaEnd": 640,
     "ms": [
      {
       "p": 65,
       "i": 381
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-014",
     "kind": "text",
     "aa": 640,
     "text": "Von einer solchen Suspension sagt man beßer er giebt sein Urtheil auf, er renuncirt es als daß er es suspendirt."
    },
    {
     "id": "busolt-s14-015",
     "kind": "text",
     "aa": 640,
     "text": "Die Dogmaticer machen die Sache gleich aus, und suspendiren nicht ihr Urtheil. Mancher ist von Natur dogmatisch, gemeinhin die Stolzen, die einen großen Eigendünkel haben. Sie werden aber auch Manigmahl von den Skeptikern wieder niedergeschlagen, die auch ihren Eigendünkel haben, indem sie das Urtheil immer renunciren. Sein Urtheil aufzuschieben ist in der Philosophie nüzlich, und es ist gut, wenn man sich frühe daran gewöhnt. Man muß nicht gleich seine Seele verschließen. Wenns aber auf das Praktische ankommt, muß man entschloßen seyn. Wir haben zweierley Arten von Urtheil,"
    },
    {
     "id": "busolt-s14-016",
     "kind": "text",
     "aa": 640,
     "text": "a. Ein Vorläufiges"
    },
    {
     "id": "busolt-s14-017",
     "kind": "text",
     "aa": 640,
     "text": "b. Ein Bestimtes."
    },
    {
     "id": "busolt-s14-018",
     "kind": "text",
     "aa": 640,
     "text": "Vorläufig Urtheilen ist jederzeit, so wenig wir auch Gründe für eine oder die andere Seite haben. Z.E. Wenn ein Mensch in eine Gesellschaft tritt, so fällt ein jeder gleich aus seinen Zügen ein Urtheil auf seinen Charakter. Wenn ein Mensch bleich aussieht so pflegt man gleich auf seine Kränklichkeit zu schließen. Es ist aber fehlerhaft, wenn man ein Vorläufiges Urtheil für ein bestimmtes hält denn der Schein kann trügen. Die Vorläufigen Urtheile leiten uns zu den bestimmten. Vorläufige Urtheile können auch schon richtig seyn, und da man sie aus Ungeduld nicht auf die Bestimmten anwendet, sondern sie selbst dafürhält, so entsteht ein Grundsaz, und das nennt man Vorurtheil. Aus solchen Vernünftigen Vorläufigen Urtheilen entstehen die Sprichworter und Kanones der Schule, diese muß man nicht für bestimmte Urtheile halten.",
     "ms": [
      {
       "p": 66,
       "i": 91
      }
     ]
    },
    {
     "id": "busolt-s14-019",
     "kind": "text",
     "aa": 640,
     "text": "Wir haben subiectiue Gründe des Urtheils, besser könnte man es Ursachen des Urtheils nennen, wenn wir diese subiectiue Gründe fälschlich für obiectiue halten, so daß ein vitium subreptionis entsteht. Hierzu kann beitragen:"
    },
    {
     "id": "busolt-s14-020",
     "kind": "text",
     "aa": 640,
     "text": "a.) Die Meinung, die Praedilection d.i. daß uns alles Beifalls würdig scheint, und wenn es auch böse ist, dennoch entschuldigung verdient."
    },
    {
     "id": "busolt-s14-021",
     "kind": "text",
     "aa": 641,
     "text": "Es giebt auch eine Praedilection, die ein, esprit du Corps ist, da man alles fürwahrhält; ferner giebts eine Praedilection des Vaterlandes, und Praedilection des Eigenthums.",
     "ms": [
      {
       "p": 67,
       "i": 90
      }
     ]
    },
    {
     "id": "busolt-s14-022",
     "kind": "text",
     "aa": 641,
     "text": "b.) Die Gewohnheit, diese ist sehr schlimm, da solche Leute die sie Besizzen auch die Deutlichsten Beweise nur durch die Länge der Zeit überführen. Solches befindet sich bei allen Leuten, vornehmlich welche von ihrem Begriff nicht gerne abweichen. Man muß sich enthalten, sich nichts anzugewöhnen, d.i. es zur Nothwendigkeit zu machen."
    },
    {
     "id": "busolt-s14-023",
     "kind": "text",
     "aa": 641,
     "text": "Man pflegt auch das ein Vorurtheil zu nennen, was aus dem Vorurtheil fließt, und so ist ein wirkliches Vorurtheil ein Grundsaz. Ein Vorurtheil ist ein Grundsaz aus positivem Verstande, oder Vernunft. Der Verstand oder die Vernunft besteht in thätigkeit, ist actiue, hat eine Spontaneitaet, die Sinne sind passiue. Beim Vorurtheil ist die Vernunft nur leidend, denn es entsteht aus der Neigung, diese ist an sich passiue. Wir können also auch die Vernunft in einem passiuen Zustande haben. Wir haben zwey Handlungen der Spontaneitaet des Verstandes."
    },
    {
     "id": "busolt-s14-024",
     "kind": "text",
     "aa": 641,
     "text": "a.) Reflexion oder Ueberlegung, wenn wir unser Urtheil mit den Gesezzen des Verstandes vergleichen.",
     "ms": [
      {
       "p": 68,
       "i": 99
      }
     ]
    },
    {
     "id": "busolt-s14-025",
     "kind": "text",
     "aa": 641,
     "text": "b.) Untersuchung, wenn ich gleich auf den Grund der Urtheile zu kommen suche Gewiße Urtheile bedürfen einer Untersuchung, viele aber nicht Ueberlegung aber muß bei jedem Urtheil stattfinden, obs nehmlich Subiectiv oder Obiectiv gilt."
    },
    {
     "id": "busolt-s14-026",
     "kind": "text",
     "aa": 641,
     "text": "Bisweilen urtheilen wir ohne Ueberlegung, wir ueberlegen nehmlich nicht ob das Urtheil aus dem Verstande entspringt d.i. obiectiv sey, oder ob die Sinnen mit eingeschoben seyen, d.i. subiectiv, Wobei die Neigung etwas unterschoben hat, und daher kann es leicht kommen, daß die Menschen subiectiue Ursachen für obiectiue nehmen, und dann entsteht das Vorurtheil ein Hang ist, subiectiue Ursachen für obiectiue zu nehmen; Ein Vorurtheil findet sich nicht anders, als wo eine Propension ist, es ist propensio ad iudicia ex caußis subiectiuis. Ein solches Vorurtheil entsteht aus Nachahmung, Neigung, Gewohnheit. Nachahmung findet nicht nur bei Kindern; sondern auch bei alteren Leuten statt. Hiezu gehören die Sprichwörter des Poebels, Sentenzen gelehrter Leute und Poeten die Kanones der Schule."
    },
    {
     "id": "busolt-s14-027",
     "kind": "text",
     "aa": 642,
     "text": "Uebereilung ist ein Mangel der Ueberlegung des Verstandes Vorurtheil geschieht durch einen Hang nicht durch Uebereilung. Der Hang, der aus der neuen Gewohnheit entstanden ist, macht die Vorurtheile zur Nothwendigkeit. Es giebt",
     "pages": [
      {
       "p": 642,
       "i": 124
      }
     ],
     "aaEnd": 642,
     "ms": [
      {
       "p": 69,
       "i": 91
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-028",
     "kind": "text",
     "aa": 642,
     "text": "a. Vorurtheile des Ansehens. Dieses gründet sich auf die Hochachtung, die wir für andere haben. Das Ansehen gilt entweder der Person, der Hochachtung, die wir für die Menge haben, und dafür, was alle Welt sagt, es ist Gut. Ferner Gründen wir auch darauf eine Richtigkeit. Das Urtheil der Menge ist ein Kriterium der Wahrheit: Denn da bei der Menge verschiedene Subiecte sind, das Urtheil der Menge aber Subiectiv seyn muß, d.i. daß sie alle in eines übereinkommen müßen, so nehmen wir das Urtheil für richtig an."
    },
    {
     "id": "busolt-s14-029",
     "kind": "text",
     "aa": 642,
     "text": "b.) Das Vorurtheil, des Alterthums. Vom Ende des vorigen Jahrhundert bis izt ging das Vorurtheil der Neuigkeiten."
    },
    {
     "id": "busolt-s14-030",
     "kind": "text",
     "aa": 642,
     "text": "Izt aber will man wieder die alten Schriften anpreisen. Fontenelle hat eine Schrift herausgegeben von alten und neuen Schriftstellern, darin sagt er: daß wir den alten keinen Vorzug geben dürffen: denn wir sind alle aus einem Stoff gemacht. Er sagt, Wir haben noch den Vorzug darin vor ihnen daß wir ihre Schriften, als vorübungen haben welchen sie nicht hätten. Wir haben ein Vorurtheil vom Alterthum:",
     "ms": [
      {
       "p": 70,
       "i": 388
      }
     ]
    },
    {
     "id": "busolt-s14-031",
     "kind": "text",
     "aa": 642,
     "text": "a.) Weil wir glauben, die Wißenschaften nehmen mit den Jahren ab. Die Natur werde Aelter und verschlimmere sich."
    },
    {
     "id": "busolt-s14-032",
     "kind": "text",
     "aa": 642,
     "text": "b.) Wir halten das Wißen der Alten für Gelehrsamkeit und schazzen dadurch das Alterthum selbst hoch. Von Historischen Dingen aber haben wir den alten viel zu danken."
    },
    {
     "id": "busolt-s14-033",
     "kind": "text",
     "aa": 642,
     "text": "c.) Unsere Verwunderung halten wir für eine Bewunderung. Die Verwunderung betrifft die Sinnlichkeit, da wir etwas nicht vermuthen. Bewunderung betrifft den Gegenstand selbst, nehmlich das vorzügliche. Eben so ist es mit dem Alterthum, wir verwundern uns nehmlich, daß die Alten schon so gedacht haben; Bei einem gelehrten Frauenzimmer verwundern wir uns ueber seine Gelehrsamkeit, weil es etwas seltenes ist, wir bewundern es aber nicht. Diese Verwunderung ist sehr nahe dem Eindruck der Bewunderung."
    },
    {
     "id": "busolt-s14-034",
     "kind": "text",
     "aa": 642,
     "text": "d.) Unsere Hochachtung fürs Alterthum kommt daher weil die Bücher der Alten, die uns noch übrig sind, diese so wenige Produkte, der Zerstörenden Kraft entrannen; so glauben wir, daß das, was sich so lange Zeit hindurch erhalten hat, gewiß das beste seyn müste."
    },
    {
     "id": "busolt-s14-035",
     "kind": "text",
     "aa": 643,
     "text": "Anmerkung Das Günstige Vorurtheil des Alterthums herscht insonderheit unter den Literatoren, als welche sich eigentlich mit Lecture der alten Schriftsteller beschäftigen. – Diese glauben nun neue Entdekkungen bereits zu finden in den Schriften der Alten. Aber gemeinhin finden sie dieselbe nicht eher, als bis sie schon entdeckt sind. So soll Aristarch schon das Kopernikanische System gehabt haben, und auf gleiche Weise sucht man aus dem Wort versorum die Kentniß der Alten von der Magnetischen Kraft, erweislich zu machen.",
     "pages": [
      {
       "p": 643,
       "i": 259
      }
     ],
     "aaEnd": 643,
     "ms": [
      {
       "p": 71,
       "i": 80
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-036",
     "kind": "text",
     "aa": 643,
     "text": "e.) Die Dankbarkeit gegen die Alten ist gleichfals mit ein Grund von dem günstigen Vorurtheil für sie, und sie bleiben in der Wahrheit doch immer die Helden der Gelehrsamkeit und die ersten Vorarbeiter. So sind im Philosophischen Aristoteles, im Mathematischen Euclides, Archimedes immer die Väter, so in den Mustern des Geschmacks, und der darin herrschenden Popularitaet werden sie immer unsere Meister bleiben. Wir sind ihnen also viel schuldig und können sie daher wohl beurtheilen; Aber nicht verurtheilen; wiewohl man besonders in unsern neuen Zeiten diese Verpflichtung zu weit treibt, in dem man bei Erlernung der Wißenschaften mehr den Weg der Lecturae als des Nachdenkens vorschlagt. Zwar ist die Belesenheit in den alten Schriften zu empfehlen, aber dabei muß man nicht den Weg des Nachdenkens verlaßen.",
     "ms": [
      {
       "p": 72,
       "i": 699
      }
     ]
    },
    {
     "id": "busolt-s14-037",
     "kind": "text",
     "aa": 643,
     "text": "1.) Der Neid der Gelehrten untereinander: denn sowie die Gelehrten ihre Gewalt bloß der Mißgunst der Bücher zu verdanken haben, indem gleichsam aus langem Ueberdruß des langen Gepränges sie die Herrschaft einem allein übertragen, die sie alle gleich macht, eben so gehts in Ansehung der Alten."
    },
    {
     "id": "busolt-s14-038",
     "kind": "text",
     "aa": 643,
     "text": "2.) Das Vorurtheil der Neuigkeit. Hiebei können wir glauben, daß wirs weiter bringen werden als die Alten."
    },
    {
     "id": "busolt-s14-039",
     "kind": "text",
     "aa": 643,
     "text": "3.) Das Vorurtheil des angenommenen Lehrgebäudes. Diejenige Wißenschaften, die auf ein Dogmatisches Lehrgebäude gegründet sind, sind von solchen Vorurtheilen nicht frey, imgleichen die Philosophie. Ein solches Vorurtheil ist in dem wir auch durch die besten obiectiuen Gründe nichts annehmen wollen, was wieder unser System ist."
    },
    {
     "id": "busolt-s14-040",
     "kind": "text",
     "aa": 643,
     "text": "4.) Egoismus. Dieser ist"
    },
    {
     "id": "busolt-s14-041",
     "kind": "text",
     "aa": 643,
     "text": "a.) Moralisch d.i. da man sich selbst allein für Werth halte, andere aber nicht."
    },
    {
     "id": "busolt-s14-042",
     "kind": "text",
     "aa": 643,
     "text": "b.) Logisch, da man sein Urtheil für entscheidend, alle andere Urtheile aber hingegen für überflüßig und ihren Wiederspruch für gleichgültig hält. Man hat gar keine Acht auf uebereinstimmende urtheile.",
     "ms": [
      {
       "p": 73,
       "i": 141
      }
     ]
    },
    {
     "id": "busolt-s14-043",
     "kind": "text",
     "aa": 644,
     "text": "5.) Das Vorurtheil der Sinnlichkeit, d.i. eine Art der Faulheit: denn man giebt dem gemeinen Verstand einen Vorzug für alle Wißenschaften, man glaubt alles durch den gemeinen Verstand auszumachen. Man unterscheidet nicht gehörig den populairen Gebrauch des Verstandes vom scientifischen. Eine Wißenschaft geräth auch in Verdacht, wenn sie dem gemeinen Verstand ganz wiederspricht. Diese angeführte Vorurtheile, waren Vorurtheile des Zutrauens.",
     "pages": [
      {
       "p": 644,
       "i": 123
      }
     ],
     "aaEnd": 644,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-044",
     "kind": "text",
     "aa": 644,
     "text": "Das Vorurtheil des Mißtrauens ist, wenn man wieder das Altertum, oder wieder die Neuigkeit eingenommen ist. Ausser diesen findet sich auch eine gewiße Schwermüthige Denkungsart, die sich gemein nach und nach durch Zunehmende Erfahrung einzustellen pflegt. Sie ist doppelt."
    },
    {
     "id": "busolt-s14-045",
     "kind": "text",
     "aa": 644,
     "text": "a.) im Praktischen das ist in Ansehung der Sitten der Menschen und in Ansehung der Handlungen. davon können uns z.E. die Geschichtsschreiber die allerbeste Ideen beybringen, wenn wir in allen Zeitaltern eine so emsige Bemühung der Sterblichen sich einander zu schaden gewahr werden; so werden wir endlich gegen alle Menschen mißtrauisch, und verbannen Treue und Redlichkeit aus der ganzen gesitteten Welt. Dies nennt man Misanthropie.",
     "ms": [
      {
       "p": 74,
       "i": 358
      }
     ]
    },
    {
     "id": "busolt-s14-046",
     "kind": "text",
     "aa": 644,
     "text": "b.) Im Theoretischen, in Ansehung der Philosophie, das heißt Misologie oder ein Haß gegen die Vernunft; da sich nehmlich Gelehrte, nachdem sie sich so viele Mühe gegeben haben, doch endlich in den wichtigsten und nöthigsten Fragen Unbefriedigt sehen, wozu ihre Vernunft nicht hinreicht. Z.E. Woher bin ich? Was werde ich nach dem Tode seyn? Ein Condamine, ein Rousseau können davon Beyspiele geben. Dies Vorurtheil entsteht mehrentheils davon her, weil man sich anfänglich gar zu viel vorgestellt hat. Noch findet sich ein Vorurtheil, wieder die Völkerschaft. Es ist ein gemeines Vorurtheil, und findet vornehmlich bei den Franzosen statt. Die Teutsche Nation hingegen hat es nicht, sie hat eher einen Hang andere nachzuahmen. Es giebt auch ein Vorurtheil des Mißtrauens wieder sich selbst. Dies ist etwas seltenes, indem man sich öfter mehr als weniger zutraut. Dennoch aber findet es statt und zwar bei Personen die sich mehr zutrauen konnten. Die Wahrscheinlichkeit Probabilitas est dimidium certitudinis; possibilis modus id est, quod gradum quendam probabilitatis habet. Sie gehet auf obiect ive Gründe. Verisimilitudo aber auf subiectiue. Obgleich bei allen diesen unzureichende Gründe sind, so sinds doch immer Gründe des fürwahrhaltens. Alle Wahrscheinlichkeiten sind ein Verhältniß der Wahrheit zur Gewißheit, folglich muß hier der Grund mit zureichenden Gründen verglichen werden. Obiectiues Kriterium der Wahrscheinlichkeit kanns nicht geben, Ehrlichkeit und Aufrichtigkeit",
     "ms": [
      {
       "p": 75,
       "i": 1109
      }
     ]
    },
    {
     "id": "busolt-s14-047",
     "kind": "text",
     "aa": 645,
     "text": "der Zeugen scheint zwar ein obiectiues Kriterium der Wahrheit zu seyn, aber ist es nicht. sondern es macht uns nur aufmerksam auf die Kriterien der Wahrscheinlichkeit, deswegen geben sie uns gar keine Regeln, nach denen wir das Wahrscheinliche beurtheilen können. Das Beurtheilen der Wahrscheinlichkeit ist kein Werk des Verstandes; sondern der Urtheilskraft; diese zeigt uns, ob es unter den Regeln des Verstandes stehe, oder nicht. Alle Beobachtungen die man anstellt, differiren unter sich also sowohl in exceßu als in defectu. – Das Mittlere aller dieser Beobachtungen kann für das Wahrscheinlichste gehalten werden. Ohne Unterschied die Regeln der Wahrscheinlichkeit anzugeben, ist gänzlich unmöglich."
    },
    {
     "id": "busolt-s14-048",
     "kind": "text",
     "aa": 645,
     "text": "Zweifel ist ein Subiectiv unzureichender Grund, der dem führwahrhalten wiederspricht. Er ist das Mittel, wodurch die Wahrheit geschwächt wird, aber auch zugleich ein Organon ihrer Befestigung. Wenn die Zweifel wiederlegt werden, wenn sie aufgehoben sind, entstehen aus ihrer Aufhebung wieder Zweifel, obs auch wirklich ein Schritt zur näheren Einsicht der Wahrheit sey oder nicht. Hiedurch befestige ich mich nun in den Gründen der Wiederlegung, die aus der bezweifelten Wahrheit fließen, folglich werde ich auch diese näher bringen. Sowohl bei dem fürwahrhalten als auch bei den Einwürfen fange ich mit dunkeln Vorstellungen an. Ehe wir Einwürfe machen fängt das fürwahrhalten an, Zweifelhaft zu werden, man will dies oder jenes nicht einräumen kann es aber doch dem andern nicht bekannt machen und so entsteht ein Skrupel. Ein Skrupel ist also ein Grund des Zweifels in so weit er nicht klar erkannt wird, und findet vornehmlich bei denen statt, die ihre Einwürfe nicht zur Deutlichkeit bringen können. Man findet Skrupel aus subiectiuen Ursachen. Diese können nicht wiederlegt werden, denn sie betreffen den Gemüthszustand, die Gewohnheit. Beim Einwurf haben wir uns zwiefach zu verhalten:",
     "ms": [
      {
       "p": 76,
       "i": 93
      },
      {
       "p": 77,
       "i": 1192
      }
     ]
    },
    {
     "id": "busolt-s14-049",
     "kind": "text",
     "aa": 645,
     "text": "a.) Wenn man ihn abweiset,"
    },
    {
     "id": "busolt-s14-050",
     "kind": "text",
     "aa": 646,
     "text": "b.) Wenn man ihn beantwortet. Man nennet einen Saz, der nicht bezweifelt worden, eine ausgemachte Wahrheit. Diese bleibt auch nach langen Zweifeln richtig und behalt eine Gewißheit. In der Menschen Vernunft können wir subiectiue Gründe haben um obiectiue eine Sache zu behaupten. Diese lezte sind Principien Skeptizismus streitet der Vernunft alle Gewißheit ab, und halt sie für ungewiß. Der Skeptiker sagt: Es giebt keine Obiectiue Behauptungen. Aber eben dadurch, daß er es sagt, wiederspricht er sich selbst. Nichts kann als Gewiß bestimmt werden, ist ihr allgemeiner Grundsaz. Nun bestimmen sie aber ja etwas, wenn sie sagen: daß ein jeder nur Subiectiue behauptungen habe. Man nennt einen gewißen Vorsaz Maxime, dies ist ein subiectiv praktischer Grundsaz der Vernunft d.i. eine Entschließung in Ansehung des obiects, sich seiner Vernunft auf eine gewiße Art zu bedienen Z.E. Ich will, niemals lügen wenn ich gleich sehr viel dadurch gewinnen könnte: Eine jede Methode erfordert gewiße subiectiue Regeln nach welchen man Erkenntnisse verbindet, und ein Mensch ohne Maximen hat gar keine Zuverläßigkeit. Die Maximen des Nachdenkens sind:",
     "pages": [
      {
       "p": 646,
       "i": 594
      }
     ],
     "aaEnd": 646,
     "ms": [
      {
       "p": 78,
       "i": 1108
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s14-051",
     "kind": "text",
     "aa": 646,
     "text": "a.) Die Maximen des dogmatischen Gebrauchs d.i. der Vorsaz sich seiner Vernunft so zu bedienen, daß man hoft zur apodictischen Gewißheit zu gelangen. Maxima confidentia in certitudinem cognitionis humanae est dogmatica."
    },
    {
     "id": "busolt-s14-052",
     "kind": "text",
     "aa": 646,
     "text": "b.) Die Maximen des Skeptischen Gebrauchs da man immer zweifelt, zur Gewißheit zu kommen Maxima diffidentia in certitudinem cognitionis humanae est sceptica. Von beiden Arten hat es Gelehrte gegeben. Die Skeptiker nannten sich auch Zeteticos. Von beiden Arten bewies einer die Grundlosigkeit der andern. Die Schule des Plato wurde genannt academia von dieser waren 3 Schulen, von denen die zweite in den Skepticismus verfiel. Arcesilaus war ihr Stifter. Man hat auch eine andere Schule der Skeptiker welcher sich nannten Pyrrhonisten. Sie unterschieden sich von den Academicern dadurch, daß diese leztere behaupteten, daß gar nicht Wahrheit sey; jene sezten nur einen Zweifel darin, sie nahmen nur einen Aufschub. Es giebt ein unbeschränktes Zutrauen, auch ein unbeschränktes Mißtrauen gegen die Menschliche Vernunft. Katexochen dogmatisch ist, der ein unbeschränktes Zutrauen aus Begriffen für die Menschliche Vernunft hat. Das Gegentheil katexochen skeptisch. Die Skeptische maxime hebt gänzlich allen Nuzzen des Vernunftgebrauchs auf etc. Die Dogmatische scheint anfangs von großem Nuzzen zu seyn, nachgehends aber findt mans anders. Der Kritikus ist zwischen beiden. Dieser Kritische Gebrauch der Vernunft ist bei den angeführten Arten des Vernunftgebrauchs zu empfehlen, weil er denn nur urtheilt, wenn man die Quellen genugsam examinirt hat. Die Kritik ist stets etwas erlaubtes, ja sogar Nothwendiges, weil die Menschliche Erkenntniß bloß dadurch zur hinlänglichen Gewißheit kommen kann. Nur schade daß diese Freyheit der Kritik so sehr gemißbraucht wird. Die Kritik wird nicht eher gebraucht, als bis der Verstand zu einer gewißen Reife gekommen.",
     "ms": [
      {
       "p": 79,
       "i": 845
      }
     ]
    }
   ]
  },
  {
   "id": "s15",
   "title": "Von den Hypothesen",
   "headings": [
    "Von den Hypothesen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s15-001",
     "kind": "text",
     "aa": 647,
     "text": "Eine Hypothese ist das führwahrhalten einer Erkentniß, da ich aus der Zulänglichkeit derselben auf ihre wahre Folgen schließe z.E. Wenn ich weiß, daß unter der Erde Feuer ist. Die Erkentniß also welche aus vielen wahren Folgen abfließt ist eine Hypothese. Wenn ein Grund lauter wahre Folgen hat; so ist er ein wahrer Grund, aber ich erkenne es noch nicht a priori; sondern a posteriori, oder durch eine Hypothese. Hypothese ist eine Voraussezzung. Ein Grund der lauter wahre Folgen hat, hört auf eine wahre Meinung zu seyn, er wird gewiß. Eine Hypothese kann niemals zur Apodictischen Gewißheit gebracht werden. Z.E. Das System des Copernicus ist nur Hypothese. Aus gegebenen Folgen können wir auf bestimmte Gründe nicht mit Sicherheit schließen, wenn nicht auch dargethan werden kann, daß die Folgen aus einem einzigen Grunde fließen. –",
     "ms": [
      {
       "p": 80,
       "i": 227
      }
     ]
    },
    {
     "id": "busolt-s15-002",
     "kind": "text",
     "aa": 647,
     "text": "Zur Vollkommenheit einer Hypothese gehört folgendes:"
    },
    {
     "id": "busolt-s15-003",
     "kind": "text",
     "aa": 647,
     "text": "a.) Die Möglichkeit der Hypothese muß gewiß seyn: Apodictisch Gewiß ist keine Hypothese. Hieraus folget daß in der Metaphysik keine Hypothesen sind in der Physik hingegen sind sie nothwendig."
    },
    {
     "id": "busolt-s15-004",
     "kind": "text",
     "aa": 647,
     "text": "b.) Die Consequenz, der aus diesem angenommenen Grunde hergeleiteten Folgen muß Gewiß seyn."
    },
    {
     "id": "busolt-s15-005",
     "kind": "text",
     "aa": 647,
     "text": "c.) Die Sufficienz des angenommenen Grundes zu allen möglichen Folgen bleibt Ungewiß.",
     "ms": [
      {
       "p": 81,
       "i": 44
      }
     ]
    },
    {
     "id": "busolt-s15-006",
     "kind": "text",
     "aa": 647,
     "text": "d.) Es gehört dazu die Einheit des angenommenen Grundes die das ganze Wahrscheinliche der Hypothese ausmacht. – Je mehr Subsidiar Hypothesen nöthig sind, desto unwahrscheinlicher ist die Hypothese. Aus den Folgen auf die Gründe zu schließen, giebt eine Unsicherheit weil eben dieselbe Erkentniß mehr als einen Grund haben kann, und weil eine Folge aus mehr als einem Grunde fließet. Die Richtigkeit eines solchen Grundes erweiset man durch die Folgen, man kann ihn aber niemals zur Apodictischen Gewißheit bringen."
    }
   ]
  },
  {
   "id": "s16",
   "title": "Von der Ueberredung",
   "headings": [
    "Von der Ueberredung."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s16-001",
     "kind": "text",
     "aa": 648,
     "text": "Das komplette Führwahrhalten mit Bewußtseyn nennt man Ueberzeugung. Das Führwahrhalten aus subiectiuen Gründen, die in Praktischer Beziehung hinreichend sind, ist der Glaube. Das Führwahrhalten von dem man nicht weiß, ob es aus Subiectiuen oder Obiectiuen Gründen entsteht, ist Ueberredung. Ein Redner hat vornehmlich die Absicht zu ueberreden. Es soll Beyfall entspringen, wenn er gleich weder von obiectiuer, noch subiectiuer Zulänglichkeit weiß.",
     "pages": [
      {
       "p": 648,
       "i": 321
      }
     ],
     "aaEnd": 648,
     "ms": [
      {
       "p": 82,
       "i": 448
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s16-002",
     "kind": "text",
     "aa": 648,
     "text": "Man unterscheidet wißen und können dadurch; was wir wißen daß es geschehen soll, aber nicht ausüben können; so gilt vom ersten Wißen, vom andern Können. eigentlich bedingt nicht jedes wißen eine Wißenschaft: denn diese macht ein System aus. Auch nicht jedes Können ist eine Kunst denn diese ist das Vermögen, etwas nach Ideen herauszubringen. In jeder Wißenschaft die ein System ausmacht, ist auch Kunst: denn"
    },
    {
     "id": "busolt-s16-003",
     "kind": "text",
     "aa": 648,
     "text": "1.) Ist in jedem System eine,"
    },
    {
     "id": "busolt-s16-004",
     "kind": "text",
     "aa": 648,
     "text": "2.) Es ist immer eine Kunst etwas in systematischer Ordnung zu bringen."
    },
    {
     "id": "busolt-s16-005",
     "kind": "text",
     "aa": 649,
     "text": "Die Idee ist der Grund des Mannigfaltigen in Ansehung des Produkts der Köpfe. Der Künstler handelt nach einem System, der Handwerker durch Nachahmung. Der Künstler und der Gelehrte haben auch Aehnlichkeit. Rhapsodien von Erkentnißen können sehr Reichhaltig seyn, und doch kein System. Dies beruht auf Systematischer Einheit der Idee des Ganzen. Für Wißenschaften gehört ueberzeugende Kentniß der Totalitaet des Ganzen, und hiezu muß vorhergehen die Idee des Ganzen, die die Stelle vor jeden Theil voraus bestimmt. Z.E. Wie im Anfange der Logic geredet wurde, von Materie und Form, vom Kanon und Organon etc. etc. Eben so ists mit der Kunst, sie kommt von konnen her, und unterscheidet sich hierin von Handwerk. Eine Ausübung wozu Geschicklichkeit durch Nachahmung gehört, ist das Handwerk, durch Ideen aber die Kunst Z.E. Ist ein Baumeister ein Künstler? Wenn er gleich nach einem Riß arbeitet, so ist er nur ein Copist, er hat aber eine Ausübung nach der Idee des andern, die er faßen können muß. Diesen nennt man einen Virtuosen, der aber originalitaet der Ideen, d.i. der eigenes Genie hat, ist ein Künstler, und wenn er auf solche Art ein Haus bauet, ist er Baukünstler. Man handelt auch nach Ideen die sich nicht lehren laßen sie laßen sich nicht auseinandersezzen und wenn es auch anginge, so könnte der andere nicht zugleich nach diesen Regeln handeln. Dies sind auch Künste, und nicht Wißenschaften, z.E. die Rechenkunst, Dichtkunst etc. etc. Es giebt auch Künste, wo die Wißenschaften vorhergehen. Z.E. Die Glasschleiferey nach der Optic. Was Wißenschaften seyen? Der Inbegriff der Erkentniß ist entweder ein aggregat oder ein System; diese Erkentniße mögen historische oder vernunft Erkentniße seyn. Beides, so wohl aggregat als System ist ein ganzes. Ein System ist dasjenige ganze, dessen Verbindung auf einer Idee beruht. Beim aggregat gehen die Theile vor dem ganzen vorher; beim System aber geht die Idee des ganzes vor der Zusammensezzung der Theile. Ein jeder Inbegriff von Erkentnißen heißt eine Wißenschaft; in so fern die Erkentniße ein System ausmachen; alle historische Erkentniß sowohl, als alle Autodidaxie ist immer ein Aggregat und kein System.",
     "pages": [
      {
       "p": 649,
       "i": 1786
      }
     ],
     "aaEnd": 649,
     "ms": [
      {
       "p": 83,
       "i": 544
      },
      {
       "p": 84,
       "i": 1644
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s17",
   "title": "Von der Mathematischen Gewißheit",
   "headings": [
    "Von der Mathematischen Gewißheit"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s17-001",
     "kind": "text",
     "aa": 649,
     "text": "Es giebt einen Apodictischen und Empirischen Beweis. Man kann zuweilen etwas empirisch beweisen, ihm aber doch keine apodictische Gewißheit geben z.E. Ob die See ehemals über dem festen Lande gestanden. Dem empirischen Beweis ist entgegen gesezt der Vernunftbeweis a priori. – Ein Beweis der nicht zur apodictischen Gewißheit kommen kann, ist ein analogischer Beweis. Beides, sowohl der apodictische als analogische Beweis ist entweder discursiv oder intuitiv. Dieser ist Beweis der Construction durch Begriffe jener durch Begriffe, Ein intuitiv apodictischer Beweis kann nicht anders, als in der Mathematik stattfinden; denn:",
     "ms": [
      {
       "p": 85,
       "i": 533
      }
     ]
    },
    {
     "id": "busolt-s17-002",
     "kind": "text",
     "aa": 649,
     "text": "1.) Es soll ein apodictischer Beweis a priori seyn,"
    },
    {
     "id": "busolt-s17-003",
     "kind": "text",
     "aa": 649,
     "text": "2.) Durch Anschauung a priori erkannt werden."
    },
    {
     "id": "busolt-s17-004",
     "kind": "text",
     "aa": 649,
     "text": "Hiezu gehören nicht nur Begriffe; sondern auch Konstruktion der Begriffe, wodurch man eines anschauenden Begrifs fähig ist, und dies ist demonstration. Diese kann also nicht anders stattfinden, als in der Mathematik. Diese apodictische Gewißheit, sie mag discursiv oder intuitiv seyn; so heißt sie die Gewißheit vom ersten Range Die empirische macht die vom zweiten Range aus. Der Autor redt auch von willkührlicher Wahrheit. Wenn etwas willkührlich Wahr ist; so kann ichs nehmen wie ich will. – Wenn etwas angenommen wird, was nicht obiectiv bestimmt wird, so ist dies willkührliche Wahrheit eines Sazzes, und heißt position. Z.E. Das wir von 1 bis 10 zählen, das in einem Zirkel 360 Grad sind etc. etc. Von den Beweisen nun wird erfordert"
    },
    {
     "id": "busolt-s17-005",
     "kind": "text",
     "aa": 649,
     "text": "a.) Die Bewiesene Erkentniß"
    },
    {
     "id": "busolt-s17-006",
     "kind": "text",
     "aa": 649,
     "text": "b.) der Zusammenhang der Beweis Gründe, mit der Erkentniß,"
    },
    {
     "id": "busolt-s17-007",
     "kind": "text",
     "aa": 649,
     "text": "c.) Eine Gewißheit die aus diesem Zusammenhang besteht.",
     "ms": [
      {
       "p": 86,
       "i": 55
      }
     ]
    },
    {
     "id": "busolt-s17-008",
     "kind": "text",
     "aa": 649,
     "text": "Es ist also kein unmittelbarer gewißer Saz ein Beweis. Die Form der Gründe beruht auf der Deutlichkeit. Diese kann nun intuitiv oder discursiv seyn. Die Deutlichkeit des Zusammenhangs einer Erkentniß"
    },
    {
     "id": "busolt-s17-009",
     "kind": "text",
     "aa": 650,
     "text": "oder Urtheils mit seinen Gründen giebt der demonstration die discursiue Deutlichkeit. Wenn man einen Beweis generaliter betrachtet; so kann man die Probazion aus verschiedenen Gründen hernehmen. Ich kann ihn empirisch begründen, dieses giebt keine apodictische Gewißheit Jeder Vernunft Beweis muß complet seyn. Man unterscheidet hier auch Beweis und beweis Grund. Jeder Beweis Grund ist ein unkompleter Beweis, und nur die komplete Gewißheit, die Deutlichkeit des Zusammenhangs mit den Beweisgründen macht den Beweis. Ein empirischer Beweis zeigt die Wahrheit des Sazzes aus der wirklichkeit, wie solche bei andern Dingen angetroffen wird. Ein apodictischer oder Vernunftbeweis zeigt aus der Beschaffenheit der Sache, die Nothwendigkeit. Ein Beweis ist eine deutliche Erkentniß des richtigen Zusammenhangs eines Sazzes mit hinreichenden Gründen. Ein Beweis kann also falsch seyn"
    },
    {
     "id": "busolt-s17-010",
     "kind": "text",
     "aa": 650,
     "text": "a.) In Materia."
    },
    {
     "id": "busolt-s17-011",
     "kind": "text",
     "aa": 650,
     "text": "b.) In Consequentia welches mehrentheils bey analogischen Beweisen geschieht.",
     "ms": [
      {
       "p": 87,
       "i": 45
      }
     ]
    },
    {
     "id": "busolt-s17-012",
     "kind": "text",
     "aa": 650,
     "text": "Diese consequenz ist der Zusammenhang der Gründe mit den Folgen. Ein apodictischer Beweis ist also entweder eine philosophische probation oder Mathematische demonstration. ein analogischer Beweis scheint bisweilen apodictisch zu seyn, weil sich oft viele Begriffe bey einer discursiuen Erkentniß verbergen. Der Autor redet von einer erweißlichen und unerweißlichen Erkentniß. Das Wort unerweißlich ist sonst äquivok. Denn es heißt auch Grundlos-Unerweißlich. Solche Wahrheiten sind Grundsazze, und sind die unmittelbare Gewißheit eines Dinges. Sie sind der lezte Grund aller mittelbaren und bedürfen keines Beweises. Die unmittelbare unabhängige Gewißheiten müßen Nothwendig den Grund der Abhängigen in sich enthalten. Die Beweise werden eingetheilt ferner in"
    },
    {
     "id": "busolt-s17-013",
     "kind": "text",
     "aa": 650,
     "text": "a.) Directe und"
    },
    {
     "id": "busolt-s17-014",
     "kind": "text",
     "aa": 650,
     "text": "b.) Indirecte Beweise. Die erstere heißen ostensiue und die andere apagogische Beweise."
    },
    {
     "id": "busolt-s17-015",
     "kind": "text",
     "aa": 650,
     "text": "Das erstere ist wenn man die Wahrheit des Sazzes geradezu beweiset durch wichtige Gründe das andere wenn man die Falschheit des Gegentheils beweiset, dieser gründet sich darauf; ein ieder Saz, dessen Gegentheil falsch ist, ist Wahr.",
     "ms": [
      {
       "p": 88,
       "i": 150
      }
     ]
    },
    {
     "id": "busolt-s17-016",
     "kind": "text",
     "aa": 650,
     "text": "Apagogische Beweise gehören nicht sowohl für die Mathematik als für die Philosophie. Einen Beweis, der eine vollkommene Gewißheit"
    },
    {
     "id": "busolt-s17-017",
     "kind": "text",
     "aa": 651,
     "text": "hat, nennt man auch eine demonstration. Eine demonstration soll eigentlich eine apodictische Gewißheit, eine Gewißheit durch die Vernunft seyn, und zwar eine intuitiue, cum intuitu a priori, denn wenn sie a posteriori wäre, so wäre sie empirisch; alle demonstration ist also Mathematisch. Demonstrirsucht ist die Affektation in der Philosophie demonstrationen anzubringen. Man nennt auch das demonstrirsucht, wenn man Dinge beweiset wozu keine Beweise nöthig sind. Dies findet sich vornehmlich in discussionen. Die Logik sezt einen Begriff von Erfahrung voraus. Wir beweisen a posteriori wenn wir durch die Erfahrung, a priori, wenn wir durch die Vernunft beweisen. Der Glaube ist keine Erkentniß Quelle. Ich kann generaliter glauben, d.i. ich glaube einer Erkentniß, und nicht jemandem, dies geschieht durch die Vernunft. Die nothwendige Voraussezzung einer Erkenntniß mit dem praktischen Interesse ist glauben. Wir können nicht glauben; wenn kein Praktisches Interesse dabei ist. Etwas zu glauben ist also möglich",
     "ms": [
      {
       "p": 89,
       "i": 924
      }
     ]
    },
    {
     "id": "busolt-s17-018",
     "kind": "text",
     "aa": 651,
     "text": "a.) Durch bloße Vernunft, aber auch"
    },
    {
     "id": "busolt-s17-019",
     "kind": "text",
     "aa": 651,
     "text": "b.) Durch Zeugniße."
    },
    {
     "id": "busolt-s17-020",
     "kind": "text",
     "aa": 651,
     "text": "Hier glaube ich jemandem und dies ist ein historischer Glaube: Vernunftglaube ist zu unterscheiden von vernünftigem Glauben: Denn auch der historische Glauben muß vernünftig seyn. Ein vernünftiger Glaube ist der, der hinreichende Gründe hat etwas anzunehmen."
    },
    {
     "id": "busolt-s17-021",
     "kind": "text",
     "aa": 651,
     "text": "Kann ich obiecte des Vernunftsglaubens historisch glauben? Wenn ich schon durch die Vernunft glaube; so wäre es Lächerlich, Historisch zu glauben; reicht aber unsere Vernunft nicht hin, so können wir andern glauben; doch nur in der Mathematik, nicht in der Philosophie. Auf das Zeugniß anderer kann ich etwas nicht anders als Historisch annehmen, und dies hat zum Obiect die Erfahrung. Aber die Aussprüche Gottes können wir glauben: denn mit dem Begriff von Gott ist zugleich der Begriff vom vollkommensten Verstande verbunden. Dies glauben geht aber doch auf Menschenglauben: denn wir glauben denjenigen, die die Bibel aufgezeichnet haben. Niemand kann also etwas anders angeben, als seine Erfahrung; dennoch giebts eine Erwerbung der Erkentniße, wo wir auch etwas auf anderer Zeugniß glauben. Dies beruht:",
     "ms": [
      {
       "p": 90,
       "i": 748
      }
     ]
    },
    {
     "id": "busolt-s17-022",
     "kind": "text",
     "aa": 651,
     "text": "a.) Auf der Richtigkeit der Zeugniße,"
    },
    {
     "id": "busolt-s17-023",
     "kind": "text",
     "aa": 651,
     "text": "b.) Auf der Aufrichtigkeit der Zeugen, nichts mehr zu sagen, als wirklich geschehen."
    },
    {
     "id": "busolt-s17-024",
     "kind": "text",
     "aa": 652,
     "text": "Die Griechen und Roemer sahen nicht hierauf. Z.E. Curtius ist voll lügen bei den Reden die er den Leuten in den Mund legte. Dieser Grundsatz ist vielmehr erst seit anderthalb 100 Jahren unter den Gelehrten eingeführt worden. Das obiect des historischen Glaubens ist also Erfahrung wo ich durch die Erfahrung anderer die meinige vermehre. Wir können Erfahrung von andern haben, wir konnen auch von uns selbst Erfahrungen haben. Bei den Erfahrungen anderer müßen wir auf Tüchtigkeit und auf das Ansehen der Zeugen sehen. Den Unglauben können wir eintheilen in einen Vernunft Unglauben, und historischen Unglauben. Einen Vernunft Ungläubigen könnte man auch Moralisch ungläubig nennen: denn die Vernunft läuft zulezt auf Moralitaet aus. Dieser ist sehr zu tadeln, denn er wirft alle Sittlichkeit um. Der historische Unglaube hingegen nicht: Denn er hat nichts anders als einen Mangel der Einsicht in die Glaubwürdigkeit der Zeugen. Die Gelehrte haben mehr Ursach Historisch zu glauben, als der gemeine Mann: Denn sie gründen sich hiebei auf die Reputation der Gelehrten. Der Historische Unglauben zeigt also entweder",
     "ms": [
      {
       "p": 91,
       "i": 901
      }
     ]
    },
    {
     "id": "busolt-s17-025",
     "kind": "text",
     "aa": 652,
     "text": "a.) Ignoranz oder"
    },
    {
     "id": "busolt-s17-026",
     "kind": "text",
     "aa": 652,
     "text": "b.) Ein böses Herz indem man alle Menschen für lügner erklärt, und auf eine Tückische Weise ihren Schriften nicht glauben will. Man verwirft hier alle Aufrichtigkeit alle Zuverläßigkeit unter den Menschen, und es ist in gewißer Absicht auch Unglaube der Moralitaet."
    }
   ]
  },
  {
   "id": "s18",
   "title": "Von Praktischen Erkentnißen",
   "headings": [
    "Von Praktischen Erkentnißen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s18-001",
     "kind": "text",
     "aa": 652,
     "text": "Wir haben wie ein theoretisches, so auch ein praktisches Erkentniß, das erste stellt vor, wie etwas ist, das zweite wie etwas seyn soll; auf gleiche Art unterscheidet man die speculatiue und pragmatische Erkentniß. Diese muß die triebfedern zur Handlung enthalten. Selbst pragmatische Erkentniße, und ueberhaupt eine jede Vorstellung, wenn sie nicht zugleich den trieb zu Handlungen enthält hat den Grund zur Spekulation. Die praktische Kentniß ist eben nicht jederzeit Pragmatisch. Denn es ist nicht ein Trieb, daß ichs thun soll; sondern nur Vorschriften auf den Fall gegeben, wenn sie einer ausüben wollte. Daß was der Autor hiebei in diesem Kapitel noch saget, gehort nicht für die Logic. Eine theoretische Erkentniß kann wiederum Pragmatisch seyn. Z.E. Ob Gott Gerecht, Allgegenwärtig etc. etc. Wenn wir dieses wißen, so suchen wir recht zu handeln.",
     "ms": [
      {
       "p": 92,
       "i": 445
      }
     ]
    }
   ]
  },
  {
   "id": "s19",
   "title": "Von den Begriffen",
   "headings": [
    "Von den Begriffen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s19-001",
     "kind": "text",
     "aa": 653,
     "text": "Die Logic hats bloß mit dem Verstande zu thun; operationes mentis wurden schon von den Alten recht eingetheilt, nehmlich: apprehensio simplex d.i. conceptus iudicium et ratiocinium. Jede Vorstellung erlangen wir durch die Anschauung, per intuitum, intuitus ist aber eigentlich repraesentatio singularis, conceptus est repraesentatio generalis. Der intuitus in der Mathematik ist allgemein:"
    },
    {
     "id": "busolt-s19-002",
     "kind": "text",
     "aa": 653,
     "text": "Denn dieser intuitus geschieht per constructionem conceptuum. Repraesentatio cuius mihi conscius sum, est perceptio."
    },
    {
     "id": "busolt-s19-003",
     "kind": "text",
     "aa": 653,
     "text": "Repraesentatio obiective spectata est cognitio.",
     "ms": [
      {
       "p": 93,
       "i": 47
      }
     ]
    },
    {
     "id": "busolt-s19-004",
     "kind": "text",
     "aa": 653,
     "text": "Repraesentatio subiectiue spectata est sensatio, Empfindung. Die Erkentniß ist die Uebereinstimmung einer Vorstellung mit dem Gegenstande. Alle Erkentniß ist entweder intuitus oder conceptus. Sonst theilt man den conceptus ein:"
    },
    {
     "id": "busolt-s19-005",
     "kind": "text",
     "aa": 653,
     "text": "a.) in conceptum sensitiuum oder empiricum, wo wir durch Anschauung zu etwas kommen:"
    },
    {
     "id": "busolt-s19-006",
     "kind": "text",
     "aa": 653,
     "text": "b.) in conceptum intellectualem purum, wenn die Vorstellung bloß auf dem Verstand beruht und dies ist notio."
    },
    {
     "id": "busolt-s19-007",
     "kind": "text",
     "aa": 653,
     "text": "Die Idee vom conceptus rationis, für den auch nicht ein Gegenstand in der Erfahrung kann gegeben werden, der Gebrauch der Notion hingegen kann in der Erfahrung seyn, und findet auch hier in der Erfahrung seine Gegenstände. – Perceptio obiectiue spectata ist also cognitio. Diese ist entweder Sinnlich oder intellectuell. Sinnliche Erkentniße a posteriori heißen empirische. conceptus sensitiui sind, wo das obiect durch die Sinne gegeben wird. Die Sinne geben eigentlich keinen conceptus, der Verstand ist nicht intuitus wohl aber geben mir die Sinne die Materie zu denen Conceptus; hingegen sind die conceptus selbst ein Werk des Verstandes. Denn dieser ist das Vermögen durch Begriffe zu erkennen. Es kann demnach ein conceptus formaliter ein Produkt des Verstandes, materialiter ein Produkt der Sinne seyn.",
     "ms": [
      {
       "p": 94,
       "i": 627
      }
     ]
    },
    {
     "id": "busolt-s19-008",
     "kind": "text",
     "aa": 653,
     "text": "Anmerkung von den Sinnen wird eigentlich nicht Produkt sondern Resultat gebraucht, weil die Vorstellungen der Sinne nicht repraesentationes sentenciae sind, sondern gegeben werden."
    },
    {
     "id": "busolt-s19-009",
     "kind": "text",
     "aa": 654,
     "text": "Ein Conceptus kann auch nur intellectualis seyn. Eben daraus entsteht die Logische Form. Ein solcher conceptus heißt notio, et oppositum huius est conceptus sensitiuus, seu potius empiricus. Diese notiones können in Concreto dargestellet werden. Begriffe a priori aber, von denen kein Gegenstand in Concreto kann gegeben werden, sind Ideen gehen über die Erfahrung hinweg, sind aber dennoch keine Chimären.",
     "pages": [
      {
       "p": 654,
       "i": 333
      }
     ],
     "aaEnd": 654,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s19-010",
     "kind": "text",
     "aa": 654,
     "text": "Die Conceptus wurden eingetheilt in conceptus dati und factittii seu arbitrarii Conceptus dati sind die Begriffe, die mir von einem Dinge gegeben sind, conceptus factitii, die ich mir wirklich gemacht habe Z.E. Jeder Erfinder eines Kunstwerks hat von den zu verfertigenden Werken conceptum arbitrarium seu factitium Conceptus dati sunt dati vel per experientiam als conceptus coloris rub ri vel per naturam intellectus, als: der Begriff von der Substanz. Die Vorstellungen sind entweder a priori oder empirische, wir haben",
     "ms": [
      {
       "p": 95,
       "i": 302
      }
     ]
    },
    {
     "id": "busolt-s19-011",
     "kind": "text",
     "aa": 654,
     "text": "a.) Conceptus factitios a priori."
    },
    {
     "id": "busolt-s19-012",
     "kind": "text",
     "aa": 654,
     "text": "b.) Conceptus factitios a posteriori, die Mathematik beschäftigt sich mit conceptibus factitiis. Die Conceptus dati sind entweder a priori oder a posteriori. Diese sind empirisch jene sind reine. Z.E. Alle Begriffe von Farben, vom Geschmack sind conceptus dati a posteriori von der Tugend a priori."
    },
    {
     "id": "busolt-s19-013",
     "kind": "text",
     "aa": 654,
     "text": "Die Frage der Logic ist, wie die Vorstellungen zu Begriffen werden? Sie betrachten also die Form. Wie wird aus Anschauung ein Begriff? hiezu gehört"
    },
    {
     "id": "busolt-s19-014",
     "kind": "text",
     "aa": 654,
     "text": "a.) Reflexion, oder Aufmerksamkeit auf das Mannigfaltige was in der Anschauung gedacht wird."
    },
    {
     "id": "busolt-s19-015",
     "kind": "text",
     "aa": 654,
     "text": "b.) Comparation, oder die Vergleichung der Verschiedenheit und der identitaet, z.E. Die Vergleichung zwischen fichten und tannen, und den Weiden; jene haben Nadel und diese Laub; ich habe also einen Begriff von Nadelholz und Laubholz diese beide stücken gehören zum positiuen; zum negatiuen gehört"
    },
    {
     "id": "busolt-s19-016",
     "kind": "text",
     "aa": 654,
     "text": "c.) Abstractio, da ich alle Verschiedenheiten vergesse und nur bloß die Identitaet betrachte.",
     "ms": [
      {
       "p": 96,
       "i": 93
      }
     ]
    },
    {
     "id": "busolt-s19-017",
     "kind": "text",
     "aa": 654,
     "text": "Ein Begriff ist das, was in vielen Dingen enthalten ist, die Repraesentatio communis. Repraesentatio communis est quae efficit identitatem des Mannigfaltigen. Im Intuitu kann ich mehr Vorstellungen haben, in conceptu nur die, welche verschiedenen Dingen gemein sind. Usus conceptuum est vel in abstracto, vel in concreto, non vero conceptus ipse. In abstracto, wenn ich von aller Mannigfaltigkeit einen Begrif absondere z.E. Der Begrif von Menschen ueberhaupt."
    },
    {
     "id": "busolt-s19-018",
     "kind": "text",
     "aa": 655,
     "text": "Diese sind vom großen Nuzzen, und müßen vor dem andern vorhergehen: Denn wie kann ich mir z.E. einen Begrif von einem Könige machen, wenn ich mir nicht zuerst einen Begrif vom Menschen mache. Ob man gleich abstracten Begriffen den Vorwurf macht daß sie nicht verständlich und also unfruchtbar sind, so antwortet man hierauf: man nimmt nur von ihnen ein gemeinschaftliches Merkmahl vieler Dinge, durch welches man viel auseinandersezzen kan.",
     "pages": [
      {
       "p": 655,
       "i": 124
      }
     ],
     "aaEnd": 655,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s19-019",
     "kind": "text",
     "aa": 656,
     "text": "Vom Begriff in abstracto muß ich allmahlich zum Begriff in concreto hinabsteigen, weil sonst keine Anwendung ist. Die Begriffe werden eingetheilt in Hohe und Niedrige. Die Materie ist das, was ich mir im Begriff vorstelle. Er kann also mehr auch weniger Vorstellung haben. Der Umfang besteht in dem, was unter dem Begriff stehet, und was allem Mannigfaltigen zukommt. Dieses begreift eine gewisse Grösse des Begrifs, oder des Umfangs. Ein Begrif kann also eine grössere Sphäre haben, eine größere Anwendung, als ein anderer, je mehr ich einen Begriff in abstracto denke, desto großer wird die Sphäre, und der Inhalt nimmt ab. Je mehr ich einen Begriff in concreto denke desto kleiner wird seine Sphäre er wachst aber im Inhalt. Conceptus singularis hat gar keine Sphäre. Ein Begrif heißt nur in Betrachtung, und Vergleichung der unter ihm stehenden Superior; der unter ihm stehende heißt inferior. Der Unterschied ist also relativ. Ein Conceptus muß eine Sphäre haben, conceptus der den andern in sich begreift heißt genus, der in andern enthalten ist, heißt species. Z.E. Eisen ist die Species von Metall. Ein Genus kann in einem andern betrachtet auch Species seyn. Z.E. Metall ist Species vom Körper. Ferner kann auch eine Species genus seyn. Z.E. Eisen ist das Genus vom Stangeneisen. Der Unterschied bestehet in der Relation; und so kommen wir allezeit vom Genus auf die Species um endlich bis aufs indiuiduum zu kommen. Je größer der Begriff in abstracto ist, desto größer ist die Sphäre. Der Conceptus summus der die groste Sphäre hat, hat das größte Genus, und von diesem ersten genere kommen wir gradatim bis aufs indiuiduum, das man conceptum singularem nennen könnte. Wir können nur durch die Sphäre vergleichen, wenn die Begriffe von einerley Art sind. Der Unterschied der Specierum die unter einerley Genus gehören, ist differentia specifica. Differentia numerica est, si res specie eadem sunt numero diuerso: Conceptus superior heißt Latior; inferior heißt angustior. Wenn aber die Sphäre der conceptuum gleich d.i. wenn der Unterschied der conceptuum unendlich klein ist, so sind dieses conceptus reciproci. Der Autor redet vom conceptu universali et particulari, aber nur der Gebrauch der Conceptuum ist entweder allgemein oder besonders. Vielleicht versteht er unter dem conceptui universali, conceptum communem; aber dies ist ein jeder Begriff.",
     "pages": [
      {
       "p": 656,
       "i": 2274
      }
     ],
     "aaEnd": 656,
     "ms": [
      {
       "p": 97,
       "i": 266
      },
      {
       "p": 98,
       "i": 1395
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s20",
   "title": "Von den Definizionen",
   "headings": [
    "Von den Definizionen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s20-001",
     "kind": "text",
     "aa": 656,
     "text": "Die Definizionen sind deutlich bestimmte Begriffe sie sind:",
     "ms": [
      {
       "p": 99,
       "i": 0
      }
     ]
    },
    {
     "id": "busolt-s20-002",
     "kind": "text",
     "aa": 656,
     "text": "a.) Analytische und"
    },
    {
     "id": "busolt-s20-003",
     "kind": "text",
     "aa": 656,
     "text": "b.) Synthetische."
    },
    {
     "id": "busolt-s20-004",
     "kind": "text",
     "aa": 656,
     "text": "Die Analytische ist die Definizion eines gegebenen Begrifs, worin das Mannigfaltige durch die Zergliederung deutlich gemacht wird, die Synthetische ist die Definizion eines gemachten Begrifs d.i. die willkührliche Zusammensezzung des Mannigfaltigen wodurch ich einen Begrif von der Sache deutlich mache Zur Analysis gehört"
    },
    {
     "id": "busolt-s20-005",
     "kind": "text",
     "aa": 656,
     "text": "1.) Ein Begriff muß gegeben werden."
    },
    {
     "id": "busolt-s20-006",
     "kind": "text",
     "aa": 656,
     "text": "2.) Ich muß zu diesem nichts hinzusezzen, sondern ihn mir durch die Analysis deutlich machen. Nach der Synthesis kann ich sagen ich will z.E. daß ein Tetraeder ein Körper sey, aus 4 gleichseitigen Flächen zusammengesezt."
    },
    {
     "id": "busolt-s20-007",
     "kind": "text",
     "aa": 656,
     "text": "Die Synthesis kann a priori auch posteriori sein. In Ansehung aller gemachten Begriffe muß eine definition gegeben werden. Die Mathematik fängt jederzeit mit Definizionen an, denn sie hats bloß mit gemachten Begriffen zu thun. sie ist eine reine Synthesis der größe. Zwar handelt sie auch vom Raum, aber weils kein gemachter Begriff ist, so definirt sie ihn auch nicht, sondern nimmt ihn als jedermann bekannt an. Eine Synthetische Definizion eines Dinges kann nicht falsch seyn: Denn ich mache dadurch das definitum, d.i. den Begriff, den ich durch die Definizion vom Dinge habe.",
     "ms": [
      {
       "p": 100,
       "i": 325
      }
     ]
    },
    {
     "id": "busolt-s20-008",
     "kind": "text",
     "aa": 656,
     "text": "Ein gegebener Begriff ist entweder a priori gegeben. Z.E. Der Begriff der Tugend, des Raums etc. etc. oder a posteriori z.E. der Begriff des Metals. Beide werden durch die Analysis definirt, z.E. a priori, wenn ich die Ursache definiren soll, so zergliedere ich den Begriff der Ursach und finde, daß dazu gehört;"
    },
    {
     "id": "busolt-s20-009",
     "kind": "text",
     "aa": 656,
     "text": "a.) Ein Ding was geschieht,"
    },
    {
     "id": "busolt-s20-010",
     "kind": "text",
     "aa": 657,
     "text": "b.) Ein Ding woraus es folgt, und alsdenn definire ich z.E. a posteriori, wenn ich den Körper definire, so analysire ich die Eigenschaften desselben, und gebe eine vollkommene Definizion. Den Gegenstand des empirischen Begriffs kann man nicht erklären denn ein jeder hat schon einen vollkommenen Begrif davon. Z.E. was Erde ist, was das Waßer etc. Es geht nicht durch die analysis, weil es umsonst ist, das zu zergliedern, was durch die Erklährung deutlich gemacht werden kann. Auch nicht durch Synthesis: denn ich kann nur describiren und Begriffe sammlen. Wir haben empirisch gegebene und auch empirisch gemachte Begriffe. Empirisch gegebene Begriffe können und sollen nicht definirt werden: denn die Merkmale sind nicht hinlänglich der Definizion eine ausführliche Deutlichkeit zu geben, sie sind vielleicht nur unendlich kleine theile davon, wohl aber findet bei denselben die description statt. Z.E. Das Gold kann ich nicht definiren; sondern describiren. Bei den empirisch gemachten Begriffen werden uns die data aus der Erfahrung gegeben, und eben daraus bilden wir unsern Begriff. Diese finden sich da, wo die Natur verändert wird z.E. den Begrif von einem Hause, von einer Festung.",
     "pages": [
      {
       "p": 657,
       "i": 332
      }
     ],
     "aaEnd": 657,
     "ms": [
      {
       "p": 101,
       "i": 448
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s20-011",
     "kind": "text",
     "aa": 657,
     "text": "Alle Definizion legt den Inhalt des Begrifs dar, sowohl die Analytische als Synthetische der Unterschied zwischen Definizion und Description besteht darin; daß die erste den Begriff komplet deutlich macht die andere hingegen ihn nur erweitert. Sie hat mit dem Inhalt zu thun, insofern wir ihn haben. Bei empirischen gemachten Begriffen declarire ich, denke, was ich sagen will. Dies geschieht durch die Erfahrung, nicht a priori Begriffe a priori enthalten eine Definizion. In der Naturwißenschaft finden descriptionen statt, und wenn ich mir mehreres in demselben Dinge denke; so erfordert dies eine declaration.",
     "ms": [
      {
       "p": 102,
       "i": 289
      }
     ]
    }
   ]
  },
  {
   "id": "s21",
   "title": "Von der Philosophischen Definizion",
   "headings": [
    "Von der Philosophischen Definizion"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s21-001",
     "kind": "text",
     "aa": 657,
     "text": "Diese geschieht durch die Analysis. Hiebei ist die Schwierigkeit, ob die Analysis auch komplet ist? Dies ist sehr selten. Demohngeachtet laßen sich aus diesen Unvollkommenheiten viele richtigen Konsectarien herleiten ich kann zwar wißen daß ich nichts mehr weiß; daß aber nichts fehlet kann niemand wißen. Es kann also eine Analytische Definizion niemals zur apodictischen Gewißheit kommen. Vom Mathematiker kann ich Definizion fordern: denn durch die Definizion macht er den Begriff. Er kann ihn aber auch geben."
    },
    {
     "id": "busolt-s21-002",
     "kind": "text",
     "aa": 658,
     "text": "Vom Philosophen hingegen kann ich sie nicht fordern. Denn er kann nicht bestimmen, ob die Analysis auch komplet sey. Aber ob er gleich keine komplete Analysis haben kann, so kann er doch eine Unkomplette haben, die ihm einige Merkmahle giebt. So lange eine solche Analysis Unkomplet ist, heißt sie nicht definizion. Die Materialien der Definizion heißen elementar Säzze d.i. Unkomplette Säzze zu einer Definizion. Definitio est conceptus, qui rem adaequat. Wenn ein Begriff zwar deutliche, aber zu wenig Merkmahle hat, so ist er Unkomplett, hat er zuviel Merkmahle, so ist er nicht Praecise. Ein Begriff welcher nicht zuwenig nicht zuviel Merkmahle hat, d.i. welcher der Sache angemeßen ist, conceptus qui adaequat rem, est definitio. Eine Definizion kann also completudinem haben, hat sie aber nicht Praecision, so ist sie doch fehlerhaft denn es ist etwas Ueberflüßiges, nicht etwas nettes praecises angegeben. Der Praecision ist entgegen die Tautologie, da dasselbe Merkmahl zweimahl, wiewohl besondere mahl versteckt vorkömmt. Z.E. Gott ist ein Unendliches, Ewiges, Allwißendes Wesen. Aus dem Begriff unendlich fließen schon alle andere Eigenschaften. Bei gemachten Begriffen geht die Definition vorher, bei gegebenen mache ich erst den Begriff deutlich, ich analysire ihn, und dann gebe ich eine Definizion.",
     "pages": [
      {
       "p": 658,
       "i": 401
      }
     ],
     "aaEnd": 658,
     "ms": [
      {
       "p": 103,
       "i": 159
      },
      {
       "p": 104,
       "i": 1249
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s21-003",
     "kind": "text",
     "aa": 658,
     "text": "Eine Definizion muß complet seyn; aber ich kann wenn auch nicht komplette so doch unkomplette deutliche Begriffe haben, und dann wird erfordert eine exposition der Elementar Begriffe. Von Begriffen a priori ist eine Definizion wohl möglich, aber nicht nothwendig wohl aber expositio. Bei Begriffen a posteriori kann nicht Definizion sondern Deskription seyn. Es ist ein Unterschied zu machen zwischen einer Nominal und realdefinition Nominal Definizion ist, wo Merkmahle angegeben werden, um die Identitaet und diversitaet einzusehen. Dies wäre ein äußerlicher Gebrauch der Definizion. Real Definizion oder auch genetische Definizion, wenn Merkmahle angegeben werden um das Obiect von allen andern zu unterscheiden. Dies wäre ein innerlicher Gebrauch der Definizion. Die von Wolff gegebene Nominal und real Definizion wird hier getadelt. Soll eine Definizion den Unterschied von allen möglichen Begriffen enthalten, so müßen die Merkmale ganz complet seyn. Sie muß also nominal und auch real Definizion seyn. Nominal Definizionen sind also nicht nöthig wenn nicht ein Mißverstand des Ausdruckes besorgt wird. Allein bei lateinischen Terminen ist das nöthig. Diese Terminen müßen der Sache und ihrer Genesis angemeßen seyn. Die Ethymologie giebt also besondere Namen erklärungen an die Hand. Namen Erklärungen dienen bloß dazu um Gegenstände von andern zu unterscheiden.",
     "ms": [
      {
       "p": 105,
       "i": 1064
      }
     ]
    },
    {
     "id": "busolt-s21-004",
     "kind": "text",
     "aa": 659,
     "text": "Description gilt bloß vom Empirischen. Definizionen welche nicht definirt werden können, in so fern sie obiective suffizient seyn sollen, sind selbst eine unkomplete exposition und dienen immer auch als Definizion ad instantem vsum. In intellectuellen Dingen geht es freylich nicht an, doch kann sie auch hier nominal seyn, und daneben incomplette exposition seyn. Denn sie ist doch immer Approximation zur Definizion. Denn ein unkompleter Begriff et hoc sensu definitione procedere potest descriptio.",
     "pages": [
      {
       "p": 659,
       "i": 275
      }
     ],
     "aaEnd": 659,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s21-005",
     "kind": "text",
     "aa": 659,
     "text": "Anmerkung: Man kann am besten unterscheiden ob man etwas nicht describirt hat, wenn man rückwärts von der Erfahrung zu der Vernunft übergeht, und das a priori genetisch erklären kann, was man vorher a posteriori hat demonstriren müßen. Z.E. So konnte man leicht eine Definizion a priori von den Mondfinsternißen geben so bald man weiß, daß der Mond sein Licht von der Sonne erhält, und die Erde zuweilen zwischen beide kommt. Die Chemie componirt, und das läßt sich alsdenn definiren. Kann ich demnach den Gegenstand in die notas auflösen, die das Wesentliche desselben ausmachen so heißt das Urstoffe. Bei der Definition muß man fragen, ob die Definizion als ein Saz wahr sey. Z.E. Ein Mensch ist ein Mensch, dies ist gewiß als ein Saz wahr. Die Seele ist ein denkendes Wesen. In der Definizion findet man die größte uneinigkeit der Philosophie. Z.E. die Tugend ist eine gewisse Fertigkeit in gewissen Handlungen. Dies ist nicht richtig. Denn",
     "ms": [
      {
       "p": 106,
       "i": 267
      }
     ]
    },
    {
     "id": "busolt-s21-006",
     "kind": "text",
     "aa": 659,
     "text": "a.) Die Tugend ist eine freye Handlung"
    },
    {
     "id": "busolt-s21-007",
     "kind": "text",
     "aa": 659,
     "text": "b.) Ein fester Vorsaz"
    },
    {
     "id": "busolt-s21-008",
     "kind": "text",
     "aa": 659,
     "text": "c.) Eine Beharrliche Gesinnung in Ausübung des Rechts."
    },
    {
     "id": "busolt-s21-009",
     "kind": "text",
     "aa": 659,
     "text": "Von der Natur der Dinge kann ich vieles durch die Analysis sagen. Analytische Säzze sind gewiß wahr, aber es kann bisweilen eine große Tautologie darinn stekken. Dies ist das Zweite was untersucht werden muß.",
     "ms": [
      {
       "p": 107,
       "i": 175
      }
     ]
    },
    {
     "id": "busolt-s21-010",
     "kind": "text",
     "aa": 659,
     "text": "3.) Ob der Begrif auch complet ist. Diese Completudo entsteht aus dem Zusammenfluß aller Merkmahle. Die Zeit ist die Ordnung der Dinge, in so fern sie auf einander folgen."
    },
    {
     "id": "busolt-s21-011",
     "kind": "text",
     "aa": 659,
     "text": "4.) Ob der Begriff auch Praecise ist, d.i. daß nicht mehr Merkmahle hinzu kommen, als nöthig sind. Die überflüßigen Merkmahle können nicht compartes der andern seyn."
    },
    {
     "id": "busolt-s21-012",
     "kind": "text",
     "aa": 659,
     "text": "Die Ursache des Mangels der Praecision ist, daß ich ein Merkmahl versezze Definite etwas sagen heißt, den Begriff so abfassen, daß nichts mehr, nichts weniger gesagt wird, als der Begriff enthält. Es gehört also zur Definizion:"
    },
    {
     "id": "busolt-s21-013",
     "kind": "text",
     "aa": 659,
     "text": "Wahrheit, completudo und Deutlichkeit. Bei der Definizion handle ich also:"
    },
    {
     "id": "busolt-s21-014",
     "kind": "text",
     "aa": 660,
     "text": "a.) Ich analysire meinen Begriff und suche wahre Säzze."
    },
    {
     "id": "busolt-s21-015",
     "kind": "text",
     "aa": 660,
     "text": "b.) Die Sazze müßen Merkmahlen enthalten, wodurch der Begriff des definiti deutlich wird."
    },
    {
     "id": "busolt-s21-016",
     "kind": "text",
     "aa": 660,
     "text": "c.) Ich samle so viele Merkmahle, als nothig sind, einen completten Begriff herauszubringen"
    },
    {
     "id": "busolt-s21-017",
     "kind": "text",
     "aa": 660,
     "text": "Eine Definizion von der description können wir nicht geben, weil es für die Philosophie gehört, und in dieser ist die erste ein verfahren, wo man definirt, die andere ein verfahren wo man describirt.",
     "ms": [
      {
       "p": 108,
       "i": 199
      }
     ]
    },
    {
     "id": "busolt-s21-018",
     "kind": "text",
     "aa": 660,
     "text": "Wenn wir in der Natur vieles zu erklären versuchen, können wir daraus sehen, ob man die Erklärung verstanden habe; wenn man acht hat, ob der Saz auch a priori konne erkannt werden, aus eben den Gründen. Die Mondfinsterniß kann man auch a priori erklären, wenn man weiß, daß die Erde zwischen die Sonne und den Mond tritt. Ferner wenn man sieht, ob man auch den Begriff machen könne Z.E. Die Definizion des Zinnobers, Quecksilber und Schwefel sublimirt giebt Zinnober: ich kann also den Zinnober machen und definiren. Definitio nec sit latior nec sit angustior; seu nec plus, nec minus suo in se continet definito. Definitio ne sit per circulum heißt, ich will eine Sache durch sich selbst erklären, ich bringe das definiendum in die Definizion. Man hat einen circulum vitiosum in demonstrando, wenn ich den Saz den ich beweißen will, zum Grunde lege. Man hat auch definitum obscurum in definiendo, wenn ich einen andern Begriff, der auch dunkel ist zur Deutlichkeit des andern brauchen will. Definitio ne sit Tautologica. Z.E. Die Seele ist ein vernünftiges Wesen, welches urtheilen kann hier liegt unter dem vernünftigen Wesen schon das Vermögen zu urtheilen. Diese Tautologie kann explicite auch implicite seyn.",
     "ms": [
      {
       "p": 109,
       "i": 1083
      }
     ]
    }
   ]
  },
  {
   "id": "s22",
   "title": "Die Logische Eintheilung eines Begriffs",
   "headings": [
    "Die Logische Eintheilung eines Begriffs"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s22-001",
     "kind": "text",
     "aa": 660,
     "text": "Diese ist unterschieden von der Zergliederung. Bei der Logischen Eintheilung sehe ich auf die Sphäre d.i. auf die weitläuftige Anwendung eines Begrifs. Die Logische Eintheilung ist also die Eintheilung der Sphäre. Je größer also die Sphäre ist, desto mehr kann sie eingetheilt werden. Die Logische Eintheilung enthält den Unterschied verschiedener Begriffe, insofern sie unter einem gemeinschaftlichen Begriff enthalten sind. Wenn alle disiunctive Begriffe zusammengenommen, der Sphaera conceptus gleich sind, so ist dies eine Logische vollkommene Eintheilung z.E. die Triangel sind entweder Gleichseitig"
    },
    {
     "id": "busolt-s22-002",
     "kind": "text",
     "aa": 661,
     "text": "oder gleich schenklich. Die andern Begriffe heißen membra dividentia müßen der Sphaera conceptus divisi gleich seyn es giebt eine codivision auch subdivision eines membri. Die Subdiuision ist die Diuision eines Membri dividentis Z.E. Alle Menschen sind Gelehrte oder Ungelehrte. Die Codiuisionen sind also Eintheilungen wo ich den Begriff unter verschiedenen Abteilungen einteile. Sie sind neben Eintheilungen wo ich nehmlich den Begriff unter einer andern Sphäre betrachte. Die Fehler in den Logischen Eintheilungen sind:",
     "ms": [
      {
       "p": 110,
       "i": 306
      }
     ]
    },
    {
     "id": "busolt-s22-003",
     "kind": "text",
     "aa": 661,
     "text": "a.) Wenn die Membra dividentia sich nicht einander entgegen sind"
    },
    {
     "id": "busolt-s22-004",
     "kind": "text",
     "aa": 661,
     "text": "b). Die Glieder der Subdivision müßen nicht unter die Glieder der division gebracht werden z.E. Die Triangel sind Gleichseitig oder Gleichschenklich. Diese Einteilung ist falsch. Man müßte sie so eintheilen. Die Triangel sind entweder in allen 3 Seiten gleich, oder ungleich. Die Ungleichen sind entweder Gleichschenklich, welche zwey gleiche Seiten haben, oder Ungleichschenklich, wo keine Seite gleich ist. Die leichteste Eintheilung ist die Dichotomie. Alle Substanzen sind entweder Körper; oder nicht; dies ist das Fundament aller Logischen Definizionen."
    }
   ]
  },
  {
   "id": "s23",
   "title": "Von den Urtheilen",
   "headings": [
    "Von den Urtheilen"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s23-001",
     "kind": "text",
     "aa": 661,
     "text": "Wir erkennen etwas Unmittelbar, oder Mittelbar, d.i. wir erkennen unsere Erkenntniße vom Gegenstande, eine solche mittelbare Erkenntniß der Erkenntniß vom Gegenstande ist ein Urtheil ich kann also unmittelbar durch einen Begriff nur etwas vorstellen, oder ich kann durch Mittelbare Erkentniß einen Begriff haben. Ich kann also ein Urtheil fällen geradezu vom Gegenstande und durch dieses kann ich wieder ein Urtheil von der Erkentniß vom Gegenstande fällen. Das Verhältniß einer Erkentniß zur andern in so fern die eine das Mittel ist der andern, ist das Urtheil.",
     "ms": [
      {
       "p": 111,
       "i": 114
      }
     ]
    }
   ]
  },
  {
   "id": "s24",
   "title": "Die Eintheilung der Urtheile",
   "headings": [
    "Die Eintheilung der Urtheile"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s24-001",
     "kind": "text",
     "aa": 661,
     "text": "Alle Urtheilen werden unter vier Titul gebracht, und eingetheilt nach vier Functionen, nehmlich;"
    },
    {
     "id": "busolt-s24-002",
     "kind": "text",
     "aa": 661,
     "text": "a.) Die Quantitaet"
    },
    {
     "id": "busolt-s24-003",
     "kind": "text",
     "aa": 661,
     "text": "b.) Die Qualitaet."
    },
    {
     "id": "busolt-s24-004",
     "kind": "text",
     "aa": 661,
     "text": "c.) Die Relation."
    },
    {
     "id": "busolt-s24-005",
     "kind": "text",
     "aa": 661,
     "text": "d.) Die Modalitaet."
    },
    {
     "id": "busolt-s24-006",
     "kind": "text",
     "aa": 662,
     "text": "Jede von diesen hat drei modos. Die Urtheile der Qualitaet nach, sind entweder bejahende, oder verneinende oder unendliche Urtheile. Der Quantitaet nach, sind entweder allgemeine, oder besondere, oder einzelne. Der Relation nach, sind entweder Kategorisch, oder Hypothetisch, oder disjunctivisch. Und der Modalitaet nach, entweder problematisch, oder Assertorisch, oder Apodictisch. Z.E. Alle Menschen sind Sterblich. Dies Urtheil ist der Qualitaet nach bejahend, der Quantitaet nach allgemein, der Relation nach Kategorisch, der Modalitaet nach Aßertorisch. Die Urtheile der Beiden ersten Titul unterscheidet man wohl.",
     "pages": [
      {
       "p": 662,
       "i": 132
      }
     ],
     "aaEnd": 662,
     "ms": [
      {
       "p": 112,
       "i": 513
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s24-007",
     "kind": "text",
     "aa": 662,
     "text": "1.) Wie unterscheidet man aber das Urtheil der Relation? Wir haben dreierley Verhältniße"
    },
    {
     "id": "busolt-s24-008",
     "kind": "text",
     "aa": 662,
     "text": "a.) Das Subiect zum Praedicat, d.i. Kategorisch;"
    },
    {
     "id": "busolt-s24-009",
     "kind": "text",
     "aa": 662,
     "text": "b.) Der Grund zur Folge, d.i. Hypothetisch"
    },
    {
     "id": "busolt-s24-010",
     "kind": "text",
     "aa": 662,
     "text": "c.) Das Verhältniß der Glieder untereinander, und zum eingetheilten Begriff, d.i. disjunctivisch, das Verhältniß der Glieder unter einander ist wenn sie opponirt sind. Alle Menschen sind entweder tugendhafte oder Lasterhafte."
    },
    {
     "id": "busolt-s24-011",
     "kind": "text",
     "aa": 662,
     "text": "2.) Die Urtheile der Modalitaet."
    },
    {
     "id": "busolt-s24-012",
     "kind": "text",
     "aa": 662,
     "text": "Halte ich ein Urtheil für möglich, nehme ichs blos als einen Probierstein an, was wohl daraus folgen möchte so ist dies ein Problematisches Urtheil. Ein Urtheil mit Bewußtseyn der Wahrheit ist Aßertorisch. Ein Urtheil welches nothwendig Wahr ist, ist apodictisch. Z.E. Wenn ich sage der Mond könnte wohl Einwohner haben, so ist das Problematisch, sage ich er hat Einwohner; so ist dies Aßertorisch, und wollte ich sagen er muß Einwohner haben, so ist das apodictisch geurtheilt. Bei den Problematischen Urtheilen bleibt also die Folge klar, der Grund aber, oder der eine Vordersaz ist unausgemacht. Ein Urtheil ist also eine Erkentniß von Einer Erkentniß, oder eine mittelbare Erkentniß vom Gegenstande: denn jeder Begriff ist blos eine Erkentniß. Z.E. Lebend und Geschöpfe sind Begriffe, aber Menschen sind lebende Geschöpfe, ist ein Urtheil. Bei der Definizion des Urtheils kann ich nicht allein den Begriff erwägen: denn es giebt Urtheile, wo nur das Verhältniß zweyer Begriffe nöthig ist, das ist kategorisch; aber bey andern ist auch das Verhältniß zweyer, oder mehrerer Urtheile nöthig d.i. bey den Hypothetischen und disiunctiven. Die erste Definizion, daß ein Urtheil eine Erkentniß von einer Erkentniß sey, bleibet also wohl die beste. Daß die Definizion des Urtheils nicht so evident ist, kommt daher weil wir schon urtheilen, wenn wir definiren.",
     "ms": [
      {
       "p": 113,
       "i": 535
      }
     ]
    },
    {
     "id": "busolt-s24-013",
     "kind": "text",
     "aa": 663,
     "text": "Anmerkung Alle Verstandes Handlungen gehen auf Urtheile und jeder Gegenstand den wir erkennen, jeder Begriff ist gleichsam ein Praedikat zu einem möglichen Urtheil; so kann man den Verstand den man vorher als das Vermögen der Begriffe erklärt, als das Vermögen der Urtheile, oder Regeln erklären: Denn der Verstand ist die Qvelle der Regeln, weil jedes Urtheil eine Regel jede Regel ein Urtheil ist; z.E. Alle Menschen sind sterblich. So bald ich also einen Menschen sehe, so ist mir dieser Saz gleichsam eine Regel, auch dieser muß sterben. Eben diese Definizion des Verstandes stimmt mit der Definizion, die Wolff gegeben hat, überein, daß nehmlich der Verstand, das Vermögen der Deutlichen Vorstellungen, sey: Denn nur durch Urtheile entspringt die Logische Deutlichkeit der Vorstellungen. Demnach sollte von den Deutlichen Vorstellungen bei den Urtheilen geredet werden weil ein Deutlicher Begriff ein Urtheil schon voraussezt. Ein Deutlicher Begriff ist nehmlich möglich durch ein klares Merkmahl die Vorstellung aber ist eben so viel, als ein Praedikat eines Urtheils. Die Vorstellung des Gegenstandes selbst ist das Subiect, mithin habe ich Materiam sc. dati iudicii. Der Begriff ein Mensch ist klar, ein vernünftiger Mensch, deutlich: Denn hier stelle ich mir den Menschen vermittelst des Praedikats Vernünftig vor, und habe also ein Urtheil. Die Deutlichkeit ist zwiefach.",
     "pages": [
      {
       "p": 663,
       "i": 126
      }
     ],
     "aaEnd": 663,
     "ms": [
      {
       "p": 114,
       "i": 222
      },
      {
       "p": 115,
       "i": 1243
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s24-014",
     "kind": "text",
     "aa": 663,
     "text": "a.) Im Begriff, dies ist die Logische haec respicit intellectum."
    },
    {
     "id": "busolt-s24-015",
     "kind": "text",
     "aa": 663,
     "text": "b.) In der Anschauung, dies ist die aesthetische sententia haec respicit sens us."
    },
    {
     "id": "busolt-s24-016",
     "kind": "text",
     "aa": 663,
     "text": "Wir können von Dingen aesthetische Deutlichkeit haben und die logische kann uns fehlen. Z.E. Ein Diener steht in einem Palais so hat er von demselben zwar eine sensitiue Deutlichkeit, da er aber nicht weiß, was Gesimse, was Säulen sind so fehlet ihm die Logische Deutlichkeit. Die Logische Deutlichkeit gehört eigentlich nur für den Philosophen. Bei jedem Urtheil kömmt vor Materie und Form."
    },
    {
     "id": "busolt-s24-017",
     "kind": "text",
     "aa": 663,
     "text": "a.) Materie d.i. die Erkentniß vermittelst der ich ein Obiect erkenne."
    },
    {
     "id": "busolt-s24-018",
     "kind": "text",
     "aa": 663,
     "text": "b.) Die Form, d.i. das Verhaltniß der Erkentnisse. Z.E. Der Mensch ist Sterblich; hier ist Mensch und Sterblich die Materie, das Verhaltniß aber des Menschen zur Sterblichkeit ist die Form.",
     "ms": [
      {
       "p": 116,
       "i": 189
      }
     ]
    },
    {
     "id": "busolt-s24-019",
     "kind": "text",
     "aa": 664,
     "text": "Weil die Logic von aller Materie abstrahirt; so bleibt ihr bloß die Form übrig, und diese wird in vierfacher Absicht betrachtet, wie eben angeführt worden. Die wesentliche Form der Urtheile bestehet in der Relation, denn die Begriffe haben Sphäre, qualitaet modalitaet, allein die Relation ist dem Judicio eigen. Die Kategorische Urtheile liegen den andern zum Grunde: Denn die Hypothetischen bestehen aus zwey Kategorischen Urtheilen, von denen ich eins als den Grund, das andere als die Folge betrachte. Die Disiunctiuen bestehen aus mehreren Kategorischen Urtheilen. Die Disiunctiuen zusammengenommen sind dem conceptu diviso gleich.",
     "pages": [
      {
       "p": 664,
       "i": 480
      }
     ],
     "aaEnd": 664,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s24-020",
     "kind": "text",
     "aa": 664,
     "text": "Weil die Judicia kategorica also die data iudiciorum hypotheticorum et disiunctorum sind; so sehen die Logicer die erste, als die einzigen wahren Urtheile an und sagten, daß die andern darauf reducirt werden könnten. Wenn der Autor von subiect, praedicat und copula redet; so versteht sich dieses nur von den kategorischen Urtheilen: denn bei den Hypothetischen ist zu unterscheiden antecedens und consequens, und bei den disiunctiuen membra diuidentia und conceptus divisi. Wir werden also reden.",
     "ms": [
      {
       "p": 117,
       "i": 339
      }
     ]
    }
   ]
  },
  {
   "id": "s25",
   "title": "Von den Kategorischen Urtheilen",
   "headings": [
    "Von den Kategorischen Urtheilen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s25-001",
     "kind": "text",
     "aa": 664,
     "text": "Diese enthalten zwey Begriffe von Dingen, und ist bei ihnen unterschieden"
    },
    {
     "id": "busolt-s25-002",
     "kind": "text",
     "aa": 664,
     "text": "a.) Subiect ist der Begriff von dem der andere ein Merkmahl ist, oder est conceptus, quem per alium cognitio."
    },
    {
     "id": "busolt-s25-003",
     "kind": "text",
     "aa": 664,
     "text": "b.) Praedicat ist ein Begriff der ein Merkmahl des andern ist, oder est conceptus per quem subiectum repraesento cognitione."
    },
    {
     "id": "busolt-s25-004",
     "kind": "text",
     "aa": 664,
     "text": "c.) Die Copula ist das, wodurch das Verhältniß der conceptuum bezeichnet wird."
    },
    {
     "id": "busolt-s25-005",
     "kind": "text",
     "aa": 664,
     "text": "Die Kategorische Urtheile werden eingetheilt, quoad qualitatem in affirmatiua negatiua und infinita"
    },
    {
     "id": "busolt-s25-006",
     "kind": "text",
     "aa": 664,
     "text": "a.) Judicium affirmatiuum, wenn die Copula est die Verbindung des Subiects und Praedicats ausdruckt."
    },
    {
     "id": "busolt-s25-007",
     "kind": "text",
     "aa": 664,
     "text": "b.) Judicium negatiuum, wenn die Copula non est die opposition des Subiects und Praedicats, oder die Verneinung des Urtheils ist wird also ausgedrückt durch die Verneinung des Verhältnißes, die negation muß also bey der Copula und nicht beim Praedicat stehen: Denn geschieht das leztere, so ist zwar der Begriff verneinend aber nicht das Urtheil: denn die Logic sieht bey denen Urtheilen bloß auf das Verhältniß",
     "ms": [
      {
       "p": 118,
       "i": 134
      }
     ]
    },
    {
     "id": "busolt-s25-008",
     "kind": "text",
     "aa": 664,
     "text": "Judicium infinitum wenn das Praedicat verneinet wird, quoad quantitatem in universalia particularia, et singularia."
    },
    {
     "id": "busolt-s25-009",
     "kind": "text",
     "aa": 664,
     "text": "1.) Judicium universale ubi praedicatum de tota Sphaera praedicatur."
    },
    {
     "id": "busolt-s25-010",
     "kind": "text",
     "aa": 665,
     "text": "2.) Judicium particulare vbi praedicatum de parte Sphaerae praedicatur."
    },
    {
     "id": "busolt-s25-011",
     "kind": "text",
     "aa": 665,
     "text": "3.) Judicium singulare ubi Subiectum caret Sphaera ideoque praedicatum de toto subiecto praedicatur."
    },
    {
     "id": "busolt-s25-012",
     "kind": "text",
     "aa": 665,
     "text": "Die Judicia singularia Können betrachtet werden als Judicia vniversalia, insofern das Praedicat vom Subiect ohne Ausnahme gilt, und daher werden auch die Judicia singularia von den meisten mit recht ausgelassen. Man redet auch von generalia und Specialia, aber generalia sind nicht universalia, und Specialia sind nicht particularia. Z.E. Die Geographie generaliter vortragen heißt nicht sie vniversaliter vortragen. Denn die Geographie gilt nur particulariter von der Erde Generalia quae ad genus pertinent et specialia, quae ad speciem pertinent. Einige Urtheile sind so beschaffen daß man den Begriff des Subiects einschranken muß damit das Urtheil gultig sey. Z.E. Alle Winkel in einem Triangel machen zusammen 180 Grad aus das gilt aber doch nur von den Geradlienigten nicht aber von den krummlienigten Dreyekken Eben so alle Körper sind schwer, wenn nun aber kein anderer Korper da ist, wornach er sich richten kann, wie kann er schwer seyn? Also muß auch dieser Begriff eingeschränkt werden im Verhältniß gegen einen andern Körper In solchen Urtheilen muß also das Subiect oder besser die Allgemeinheit des Subiects eingeschränkt werden, damit ihm dies Praedicat zukommt. Dergleichen Urtheile nun, wo die aßertion bedingt ist, heißen bedingte Urtheile. Wird aber die Bedingung nicht zum Subiect; sondern zur Copula gesezt, so heißt das Urtheil Judicium modale, z.B. Alle Körper sind zufälliger Weise schwer; daraus entsteht denn die sogenannte modalitas iudiciorum woselbst vorkommt: Möglichkeit Wirklichkeit, Nothwendigkeit. Anmerkung Diese Modalitaet ist höchst wichtig: denn wie oft wird nicht Möglichkeit und Nothwendigkeit mit einander verwechselt. Z.E. Bei der Demonstrazion der unsterblichkeit der Seele. Um die Urtheile der Qualitaet und Quantitaet auszudrükken, hat man Buchstaben gewählt welches hier wohl von keinem Nuzzen ist, als nur in der Syllogistik, nehmlich: Aßerit A, negat E, sed vniversaliter ambo Aßerit I, negat O, sed particulariter ambo.",
     "ms": [
      {
       "p": 119,
       "i": 406
      },
      {
       "p": 120,
       "i": 1481
      }
     ]
    },
    {
     "id": "busolt-s25-013",
     "kind": "text",
     "aa": 665,
     "text": "Die Modalitaet drükken die Logicer aus durch die Frage Quae propositio? Die Qualitaet durch Qualis est propositio? Die Quantitaet durch Quanta est propositio."
    },
    {
     "id": "busolt-s25-014",
     "kind": "text",
     "aa": 665,
     "text": "Bis hieher haben wir von einfachen Urtheilen geredt, es giebt aber auch zusammengesezte Urtheile. Z.E. Gott, die Seele und alle endliche"
    },
    {
     "id": "busolt-s25-015",
     "kind": "text",
     "aa": 666,
     "text": "Geister sind Unsterblich. Die zusammengesezte Urtheile beruhen darauf daß entweder"
    },
    {
     "id": "busolt-s25-016",
     "kind": "text",
     "aa": 666,
     "text": "a.) Subiect oder"
    },
    {
     "id": "busolt-s25-017",
     "kind": "text",
     "aa": 666,
     "text": "b.) Praedicat Urtheile sind."
    }
   ]
  },
  {
   "id": "s26",
   "title": "Von den Hypothetischen und Disiunktiven Urtheilen",
   "headings": [
    "Von den Hypothetischen und Disiunktiven Urtheilen."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s26-001",
     "kind": "text",
     "aa": 666,
     "text": "Die Hypothetische Urtheilen bestehen aus zwey Urtheilen die ein Verhaltniß des Consequens haben, und hiezu gehört",
     "ms": [
      {
       "p": 121,
       "i": 41
      }
     ]
    },
    {
     "id": "busolt-s26-002",
     "kind": "text",
     "aa": 666,
     "text": "a. Antecedens oder daß, was der Folge vorhergehet, Das ist der Grund."
    },
    {
     "id": "busolt-s26-003",
     "kind": "text",
     "aa": 666,
     "text": "b. Consequens oder daß, was aus dem Antecedens folget das ist die Folge. Sie haben also ein Verhältniß der nexus der Urtheile. Die Disiunctiven Urtheile bestehen aus zwey, oder mehreren Urtheilen, die ein Verhältniß der opposition haben, welche opposition aber contradictorisch seyn muß, es müßen also die membra contradictorisch seyn, aber zusammen dem Conceptui diuerso gleich seyn."
    },
    {
     "id": "busolt-s26-004",
     "kind": "text",
     "aa": 666,
     "text": "Ein Exponibel Urtheil ist ein solches welches zugleich bejahend und verneinend ist. Zu solchen Urtheilen dienen im deutschen die Worter allein, nur wenige etc. etc. z.B. Wenige Menschen sind Fromm, einige Menschen sind Fromm, einige sind nicht Fromm Aesthetische Urtheile unterscheiden wir von den Logischen dadurch, wenn neben den Begriffen noch eine Empfindung ist z.E. O! Wie viele Menschen sind Gottlos! Dies ist ein Aesthetisches Urtheil. Wenn wir einen Saz als Praktisch annehmen, so können wir sagen: er ist Formaliter Praktisch und als denn ist er entgegen den Theoretischen, oder er ist materialiter Praktisch, als denn ist er entgegen den Spekulativen. Der Form nach sind Praktische Sazze solche nach denen eine Ausübung moglich ist, hiebei ist nicht das Verhältniß der Erkentniße sondern das Verhältniß der Freyheit. Diese Praktische Säzze stehen entgegen den theoretischen. Z.E. Ein Triangel besteht aus drei geraden Linien, dies ist theoretisch. Aus drei gegebenen geraden Linien einen Triangel zu beschreiben, ist Formal praktisch. Von solchen Praktischen Säzzen, die den Spekulativen entgegen sind, weiß die Logic nichts.",
     "ms": [
      {
       "p": 122,
       "i": 526
      }
     ]
    },
    {
     "id": "busolt-s26-005",
     "kind": "text",
     "aa": 667,
     "text": "Eine der Form nach Theoretische Erkentniß, aus der viele Säzze können hergeleitet werden die ich thun soll, oder die viel imperatiuen enthält ist der Materie nach Praktisch. Z.E. Es ist ein einziger Weltrichter. Die Logic aber, die von allem Inhalt abstrahirt, weiß davon nichts, daß einige Erkentniße so fruchtbar sind. Die Praktische Säzze in der Logic müßen seyn, aus gegebenen Urtheilen, und einem Termino medio einen Schluß zu machen. Das Autor redet von erweislichen und unerweislichen Urtheilen. Erweisliche Urtheile sind solche, vor denen ein Urtheil voraus gehen muß, oder die zur bestätigung ihrer Wahrheit einen Beweis fordern. Unerweisliche Urtheile sind solche, die gar keinen Beweis nothig haben, sondern an sich selbst schon wahr sind. Die ersten sind Mittelbar gewiße die andern unmittelbar gewiße Urtheile. Oft sagen wir ein Saz ist unmittelbar gewiß, da er es doch nicht ist. Daher muß man zuerst ein Urtheil für mittelbar Gewiß annehmen; weil wir",
     "pages": [
      {
       "p": 667,
       "i": 341
      }
     ],
     "aaEnd": 667,
     "ms": [
      {
       "p": 123,
       "i": 450
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s26-006",
     "kind": "text",
     "aa": 667,
     "text": "a.) Wohl auch das resultat des Beweises in uns verspüren den Beweis selbst aber nicht haben."
    },
    {
     "id": "busolt-s26-007",
     "kind": "text",
     "aa": 667,
     "text": "b.) Weil der Menschliche Verstand geneigter ist, etwas als mittelbar Gewiß anzunehmen. Denn er will immer weiter, wir mußen daher mit diesen Säzzen sorgfältig umgehen, und sie zuerst genau untersuchen."
    },
    {
     "id": "busolt-s26-008",
     "kind": "text",
     "aa": 667,
     "text": "Der Autor nennt ein unerforschliches Erkentniß leer, weil dadurch unsere Erkentniß um nichts zunimmt, auch nichts verliert. Aber es kann eine Erkentniß seyn",
     "ms": [
      {
       "p": 124,
       "i": 156
      }
     ]
    },
    {
     "id": "busolt-s26-009",
     "kind": "text",
     "aa": 667,
     "text": "a.) Sinn leer d.i. ein Saz, der der Materie nach leer ist."
    },
    {
     "id": "busolt-s26-010",
     "kind": "text",
     "aa": 667,
     "text": "b.) Der Verstandes Form nach leer, z.E. Der Mensch hat ein Menschliches Wesen."
    },
    {
     "id": "busolt-s26-011",
     "kind": "text",
     "aa": 667,
     "text": "Diese Säzze die idem per idem Erklären befordern die Erkentniß weder analytisch, noch synthetisch, es sind Tautologische Säzze, ich habe durch sie weder eine Vermehrung in der Deutlichkeit, noch einen Zuwachs an der Erkentniß. Aber nicht alle Identische Säzze sind leere Säzze; sondern nur die Tautologischen. Ein Identischer Satz der nur durch die analysis kann eingesehen werden ist nicht als ein leerer Saz anzusehen: Denn er verhilft zur Deutlichkeit. Dem Inhalt nach ist ein Saz leer, wenn seine Vorstellungen sich auf kein Subiect beziehen. Die Identitaet in der Tautologie wird unmittelbar erkannt, die eigentliche Identitaet aber mittelbar, d.i. durch die Auseinandersezzung der Begriffe. Diese Tautologische Säzze helfen und schaden nichts. Wir vernehmen aber selbst das Wahre als ungereimt, wenn es zu keinen unseren Absichten beförderlich ist. Verneinende Säzze erweitern zwar unsere Erkentniße nicht, sie helfen aber Irrthümern ab, dahingegen die falschen Sazze schaden. Z.E. die Seele ist nicht zusammengesezt. Brauche ich etwas negativ, was kein Mensch jemals in Zweifel gezogen so wirds ungereimt.",
     "ms": [
      {
       "p": 125,
       "i": 867
      }
     ]
    },
    {
     "id": "busolt-s26-012",
     "kind": "text",
     "aa": 668,
     "text": "Propositiones indemonstrabiles sind Hypothetische Sazze die nicht durch Zergliederung des Subiects, sondern anders woher entsprungen sind, Synthetische Sazze a priori, wenn sie a priori intuitiv sind, sind axiomata. Die Philosophie hat nicht falsche Urtheile a priori, aber in so fern sie discursiv ist hat die Philosophie wohl Principia axiomata. Axiom bedeutet soviel als eine Würde die an sich selbst deutlich ist, und nicht darf erwiesen werden, sie bringt schon eine Gewißheit mit sich. Der Autor behandelt Judicia intuitiua und discursiua."
    },
    {
     "id": "busolt-s26-013",
     "kind": "text",
     "aa": 668,
     "text": "a.) Judicia intuitiua sind, wenn sie etwas concretes in singulari vorstellen."
    },
    {
     "id": "busolt-s26-014",
     "kind": "text",
     "aa": 668,
     "text": "Diese sind entweder"
    },
    {
     "id": "busolt-s26-015",
     "kind": "text",
     "aa": 668,
     "text": "1.) A priori intuitiv d.i. reine anschauende Begriffe (iudicia) Mathematische.",
     "ms": [
      {
       "p": 126,
       "i": 78
      }
     ]
    },
    {
     "id": "busolt-s26-016",
     "kind": "text",
     "aa": 668,
     "text": "2.) A posteriori empirisch anschauende iudicia."
    },
    {
     "id": "busolt-s26-017",
     "kind": "text",
     "aa": 668,
     "text": "Consectarium ist ein Folgerungs Saz, besonders in der Philosophie. Corollarium ist ein Saz, daraus der andere durch einen Schluß gefolgert wird, besonders in der Mathematik. Corollarium est ratio cinatio monosyllogistica. Ein Theorem ist ein theoretischer Saz, in so fern er eines Beweises fahig und benöthigt ist Es ist nichts anders, als eine est ratio cinatio polysyllogistica, d.i. ein Saz der aus andern vorhergegangenen Schlüßen gefolgert wird. Die Requisiten des Theorems sind."
    },
    {
     "id": "busolt-s26-018",
     "kind": "text",
     "aa": 668,
     "text": "a. Proposition"
    },
    {
     "id": "busolt-s26-019",
     "kind": "text",
     "aa": 668,
     "text": "b. Demonstration."
    },
    {
     "id": "busolt-s26-020",
     "kind": "text",
     "aa": 668,
     "text": "Problema ist ein Praktischer Saz vom vorigen unterschieden. Denn die requisiten des Problems sind:"
    },
    {
     "id": "busolt-s26-021",
     "kind": "text",
     "aa": 668,
     "text": "a.) Quaestio Problematis per quod exponitur, quid fieri debeat."
    },
    {
     "id": "busolt-s26-022",
     "kind": "text",
     "aa": 668,
     "text": "b.) Resolutio quaestionis, quo modo fieri debeat."
    },
    {
     "id": "busolt-s26-023",
     "kind": "text",
     "aa": 668,
     "text": "c.) Demonstratio, hanc resolutionem esse veram",
     "ms": [
      {
       "p": 127,
       "i": 46
      }
     ]
    },
    {
     "id": "busolt-s26-024",
     "kind": "text",
     "aa": 668,
     "text": "Diese Aufgaben gehören besonders in die Mathematik doch giebts auch besondere, als in der Moral, der Medicin der Menschlichen Seele."
    },
    {
     "id": "busolt-s26-025",
     "kind": "text",
     "aa": 669,
     "text": "Es ist also eine sehr wichtige Regel ne sit tautologica problematis resolutio, i.e. ne resolutionem praedicamus in definitionem. In der Moral giebts also, wie gesagt, dergleichen problematische Auflösungen zu viel daraus kommts eben, daß Moral als Kanon schon wirklich da ist, d.i. daß wir wirklich Regeln haben, wornach wir die Verstandes Urtheile lenken, und Beurtheilungen der Moralischen Handlungen, allein als Organon nicht, d.i. die Moral ist noch nicht so vorgetragen, daß die Verstandes Begriffe auf meinen Willen und Neigung einfließen, daß die Tugend nicht allein gebilligt sondern auch geübt wird. Bei der Tautologischen resolution des Problems analysirt man die Definizion selbst, in der Moral darf die Abhandlung nicht eben praecise seyn, allein in der Mathematik kann keine abundanz stattfinden denn obgleich sonst die Praecision eine wesentliche Eigenschaft eines Systems ist; so sind doch einige Wißenschaften davon ausgenommen, und hiezu gehören nebst der Moral auch die Physischen Wißenschaften",
     "pages": [
      {
       "p": 669,
       "i": 616
      }
     ],
     "aaEnd": 669,
     "ms": [
      {
       "p": 128,
       "i": 1012
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s26-026",
     "kind": "text",
     "aa": 669,
     "text": "1. Definitiones axiomata corollaria, theoremata cum suis demonstrationibus, problemata etiam resolutionibus et demonstrationibus, hae sunt partes systematis eiusdemque dogmatici."
    },
    {
     "id": "busolt-s26-027",
     "kind": "text",
     "aa": 669,
     "text": "Es gehört aber zu einem solchen dogmatischen System:"
    },
    {
     "id": "busolt-s26-028",
     "kind": "text",
     "aa": 669,
     "text": "a.) Partes domesticae quae constituent proprie systemam."
    },
    {
     "id": "busolt-s26-029",
     "kind": "text",
     "aa": 669,
     "text": "b.) Partes peregrinae quae quasi alio ex campo depromuntur, vbi in morali Philosophia de existentia Dei, ita in metaphysicis, exempla ex physicis desumuntur eiusmodi pars vocatur lemma, quod est pars systematis peregrinae alia ex scientia exercita."
    },
    {
     "id": "busolt-s26-030",
     "kind": "text",
     "aa": 669,
     "text": "2.) Partes essentiales et extra essentiales."
    },
    {
     "id": "busolt-s26-031",
     "kind": "text",
     "aa": 669,
     "text": "a.) Partes essentiales sunt quibus sublatis totum tollitur systema."
    },
    {
     "id": "busolt-s26-032",
     "kind": "text",
     "aa": 669,
     "text": "b.) Partes extra essentiales, quibus illustratur haec alienae systematis pars non extenditur; tale est Notion. Das ist eigentlich der Ruheplaz des Systems, man erwähnt darin die Geschichte den Nuzzen des Systems man wiederlegt darin die Gegner. Sie sind merenteils aesthetisch.",
     "ms": [
      {
       "p": 129,
       "i": 277
      }
     ]
    },
    {
     "id": "busolt-s26-033",
     "kind": "text",
     "aa": 669,
     "text": "Qualitaet nulla in logicis dicitur, vbi ignorantiae scrutantis proceßio, pro ipsius rei definitione causaeque inventione sumitur e.g. quae nam est causa propagationis animalium, plantarumque? resp.: vis plastica. Hier definire ich idem per idem, und ist eben so viel gesagt, als: Die Ursache dieser Wirkung ist verborgen. Was gewinnt nun eine Erkentniß nach solcher An twort?"
    },
    {
     "id": "busolt-s26-034",
     "kind": "text",
     "aa": 670,
     "text": "Anmerkung Qualitas occulta est Tautologica phaenomenorum explicatio et enim subiectum respicit, non Obiectum. Eiusmodi est ideosyncrasia Lamberti, cuius ait hominis sibi propinquam habitum cane et angue aversantem. Et vero ideosyncrasia quali, quae in hoc illudere indiuiduum influit. Von eben dieser Art ist das in neueren Zeiten sogenannte Wort bon sens (gesunder Verstand). Denn wer hat eine Definition von Sensu communi gegeben, es sey denn Tautologisch? selbst die Krusianische Philosophie beruhet auf einem Grundsaz der nichts anders als Qualitas occulta ist, nehmlich was ich nicht anders als Wahr befinde, das ist wahr. Die newtonianische Philosophie die sich auf den Grundsaz der Wechßelseitigen Sphäre im Zusammenhange des Weltlaufs gründet nimmt das Wort vis attractiva für qualitatem occultam im Physischen Sinn an, das heißt blos als ein Geständniß der Unwißenheit der wahren Ursachen, nicht aber für die wahre Ursache selbst.",
     "pages": [
      {
       "p": 670,
       "i": 750
      }
     ],
     "aaEnd": 670,
     "ms": [
      {
       "p": 130,
       "i": 628
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s26-035",
     "kind": "text",
     "aa": 670,
     "text": "Wird ein Urtheil aus einem andern gefolgert, ohne ein zwischen Urtheil, so ist dies ein Verstandesschluß, per iudicium intermedium ein Vernunftschluß, z.B. Alle Menschen sind Sterblich, also ist auch Caius sterblich. Hier ist nun Caius ein Begrif, den ich vorher nicht hatte, es ist also falsch geschloßen, und ich muß nur mittelbar schließen, dadurch, daß ich mir einen Begriff von Caius mache. Zur consequentia immediata muß iudicium praeuium und exclusio einen Begriff erhalten. Sie sind nicht anders unterschieden als nur in der Qualitaet, Quantitaet und Relation. Die Consequentiae immediatae geschehen"
    },
    {
     "id": "busolt-s26-036",
     "kind": "text",
     "aa": 670,
     "text": "a.) Per iudicia aequipollentia"
    },
    {
     "id": "busolt-s26-037",
     "kind": "text",
     "aa": 670,
     "text": "b.) Per iudicia subalternata."
    },
    {
     "id": "busolt-s26-038",
     "kind": "text",
     "aa": 670,
     "text": "c.) Per iudicia opposita.",
     "ms": [
      {
       "p": 131,
       "i": 25
      }
     ]
    },
    {
     "id": "busolt-s26-039",
     "kind": "text",
     "aa": 670,
     "text": "d.) Per conversionem iudiciorum"
    },
    {
     "id": "busolt-s26-040",
     "kind": "text",
     "aa": 670,
     "text": "e.) Per contrapositionem iudiciorum."
    },
    {
     "id": "busolt-s26-041",
     "kind": "text",
     "aa": 670,
     "text": "Die erste Art kann wegfallen, sie ist leer, weil es so viel als nichts ist, eines aus dem andern zu folgern, was dem erstern einerley ist, es bleibt immer dasselbe Urtheil. Auf die Zweyte Art schließe ich vom allgemeinen aufs besondere. Auf die Dritte Art ist per iudicia opposita unmittelbar zu schließen. Diese opposition ist Dreifach."
    },
    {
     "id": "busolt-s26-042",
     "kind": "text",
     "aa": 670,
     "text": "a.) Contradictorisch, hier kann von zwey Urtheilen nur eins wahr seyn, und ich schließe also: ist eins wahr; so ist das andere falsch und umgekehrt. Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich. Keine Substanz ist einfach, einige sind einfach:"
    },
    {
     "id": "busolt-s26-043",
     "kind": "text",
     "aa": 670,
     "text": "b.) Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist z.E. Einige Menschen sind böse, – einige sind nicht böse.",
     "ms": [
      {
       "p": 132,
       "i": 149
      }
     ]
    },
    {
     "id": "busolt-s26-044",
     "kind": "text",
     "aa": 671,
     "text": "c.) Contraire, wenn einem allgemeinen bejahenden Urtheil ein allgemein verneinendes Urtheil entgegengesezt wird, oder umgekehrt, z.E. Alle Menschen sind Lasterhafte. Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft. Hier thut er mehr als nothig ist, dem andern zu wiedersprechen Judicia contraria opposita können beide falsch seyn, weil darin mehr verneint wird als es nöthig ist. Die Falschheit steckt also in der Allgemeinheit. Bei den folgenden Arten ändert man das Subiect und Praedicat, aber bei der conversion kann man die Quantitaet ändern, nicht aber die Qualitaet. Man nennt die Versezzung der Terminen metathesis terminorum. Durch diese entsteht ein unmittelbarer Schluß durch die conversion der Urtheile wo versezt wird die Quantitaet und nicht die Qualitaet und durch die contraposition der Urtheile, wo versezt wird die Qualitaet und nicht die Quantitaet. Z.E. Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion Was nicht sterblich ist, ist kein Mensch d.i. durch die contraposition. Bei der conversion der Urtheile heißt das Urtheil was umgekehrt werden soll: Judicium conversum das wodurch die Umkehrung entspringt iudicium convertens. Die Umkehrung geschieht entweder per accidens oder simpliciter.",
     "pages": [
      {
       "p": 671,
       "i": 328
      }
     ],
     "aaEnd": 671,
     "ms": [
      {
       "p": 133,
       "i": 1017
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s26-045",
     "kind": "text",
     "aa": 671,
     "text": "Die Bedingungen der Form nach sind diese;"
    },
    {
     "id": "busolt-s26-046",
     "kind": "text",
     "aa": 672,
     "text": "a.) Allgemeine bejahende Säzze lassen sich nur per accidens, allgemein verneinende Sazze nur simpliciter und drittens particulaer bejahende oder verneinende Säzze auch simpliciter umkehren. Das erste heißt soviel iudicium conuersum est vniversale und von diesen kann ich nun umgekehrt sagen einige sterbliche sind Menschen Ich denke mir nemlich sterbliche unter denen auch die Menschen sind, d.i. das Subiect Mensch ist unter der Sphäre der Sterblichen, als des Praedicats. Das Praedicat muß also großer seyn als das Subiect, ich kann also einige Sterbliche für Menschen annehmen. Es giebt allgemein bejahende Säzze, die sich simpliciter umkehren lassen, bei welchen die Sphäre des Subiects und Praedicats gleich ist z.E. Alle Figuren in drei geraden Linien eingeschloßen, sind Triangel, alle Triangel sind Figuren in drei geraden Linien eingeschloßen sind Drei Ekke, d.i. eine Subtilitaet und ich überlaße es hier einem jedem, wieviel er aus einer unendlichen Menge Drei Ekke ausnehmen will. Dieser Unterschied aber ist euanescens. Alle verneinende Urtheile, die einen Wiederstreit enthalten laßen sich simpliciter umkehren, z.E. kein Triangel ist ohne Winkel keine Figur ohne Winkel ist ein Triangel alle Particular bejahende oder verneinende Säzze laßen sich simpliciter umkehren, d.i. daß die Quantitaet nicht verändert wird. Die Contraposition will soviel sagen: ein jeder allgemeine Saz laßt sich contraponiren. Z.B. Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen. Wie wird nach den Judiciis mediatis geschloßen? Wenn ein Begrif aus dem andern soll geschloßen werden, der im vorigen nicht enthalten ist; so muß man einen Begriff, der die Bedingung der Regeln enthält hinzufügen; der Begriff des Obiects enthalt nun die Bedingung der Regel, und also muß von dieser conclusion auch das Praedicat der Conclusion gelten. Z.E. Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich. Es gründet sich dieser Vernunftschluß auf den Grundsaz: einem jeden Dinge in so fern es unter die Bedingung subsumirt werden kann kommt das Praedikat zu ein Vernunftschluß aber ist cognitio a priori per subsumtionem conceptus sub conditione regulae cuiusdam generali.",
     "pages": [
      {
       "p": 672,
       "i": 1542
      }
     ],
     "aaEnd": 672,
     "ms": [
      {
       "p": 134,
       "i": 727
      },
      {
       "p": 135,
       "i": 1819
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s26-047",
     "kind": "text",
     "aa": 672,
     "text": "Der Vernunftschluß hat zwei requisitionen"
    },
    {
     "id": "busolt-s26-048",
     "kind": "text",
     "aa": 672,
     "text": "a.) Allgemeine Regel d.i. Maior."
    },
    {
     "id": "busolt-s26-049",
     "kind": "text",
     "aa": 672,
     "text": "b.) Die Subsumtion eines Begrifs unter die Bedingung dieser allgemeinen Regel d.i. Minor."
    },
    {
     "id": "busolt-s26-050",
     "kind": "text",
     "aa": 672,
     "text": "c.) Die Verbindung des Praedicats mit dem Subiect, oder das was aus der allgemeinen Regel der Subsumtion zukommt, dies ist die Conclusion. Maior und Minor heißen Praemissen. Die Praemissen und die Conclusion ist also das, was zum Schluß gehört."
    },
    {
     "id": "busolt-s26-051",
     "kind": "text",
     "aa": 672,
     "text": "Bei diesen Schlüßen sieht man auf die Relation, und nach dieser werden die Schlüße eingetheilt in Kategorische, Hypothetische und disiunctiue. Alle Schlüße werden beurtheilt nach der Maiore propositione. Ist das ein kategorisches Urtheil so ist der Schluß auch Kategorisch. Nur in Kategorischen Schlüssen ist Subiect praedicat und Terminus medius, und daher sieht man leicht die Wichtigkeit ein daß man sagte: zu einem Vernunftschluß werden 3 Termini: Maior oder das Praedicat der Conclusion, minor oder das Subiect der Conclusion und Terminus medius der die Condition der Conclusion ist, erfordert; jeder Vernunftschluß besteht überhaupt aus 3 Stücken.",
     "ms": [
      {
       "p": 136,
       "i": 230
      }
     ]
    },
    {
     "id": "busolt-s26-052",
     "kind": "text",
     "aa": 672,
     "text": "a.) Praemissen."
    },
    {
     "id": "busolt-s26-053",
     "kind": "text",
     "aa": 672,
     "text": "b.) Maior und Minor und"
    },
    {
     "id": "busolt-s26-054",
     "kind": "text",
     "aa": 672,
     "text": "c.) Conclusion."
    },
    {
     "id": "busolt-s26-055",
     "kind": "text",
     "aa": 672,
     "text": "Die Materie zu den Vernunftschlüßen sind die Praemissen oder Propositionen aus welchen die Conclusion folgt. Die Form besteht in der Folgerung der Conclusion aus den Praemißen. Ein Vernunftschluß kann in der Materie richtig seyn, aber in der Form fehlen. Nur in den Kategorischen Schlüssen ist ein Medius Terminus. Bey den Hypothetischen ist nur bloß das Verhältniß zweierley Urtheile, wie eins aus der Richtigkeit des andern folgt."
    }
   ]
  },
  {
   "id": "s27",
   "title": "Regeln der Vernunftschlüße",
   "headings": [
    "Regeln der Vernunftschlüße"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s27-001",
     "kind": "text",
     "aa": 673,
     "text": "Zu der Hauptregel der Vernunftschlüße wird sonst von andern gerechnet der Saz des Wiederspruchs. Kein Urtheil ist wahr, wo das praedicat dem Subiect wiederspricht. Allein dies Principium der Contradiction kann nicht als ein Vernunftschluß gebraucht werden: denn es ist nur ein Principium iudicii.",
     "ms": [
      {
       "p": 137,
       "i": 43
      }
     ]
    },
    {
     "id": "busolt-s27-002",
     "kind": "text",
     "aa": 673,
     "text": "Ein Vernunftschluß ist bejahend, wenn die Conclusion bejahend ist, und verneinend, wenn die Conclusion verneinend ist. Nach dieser allgemeinen Eintheilung aller Vernunftschlüße machen wir 2. besondere Regeln:"
    },
    {
     "id": "busolt-s27-003",
     "kind": "text",
     "aa": 673,
     "text": "a.) Nota notae est Nota rei ipsius, dies gilt von bejahenden Urtheilen."
    },
    {
     "id": "busolt-s27-004",
     "kind": "text",
     "aa": 673,
     "text": "b.) Repugnans notae repugnat rei ipsi dies gilt von verneinenden Schlüßen, z.E. Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers."
    },
    {
     "id": "busolt-s27-005",
     "kind": "text",
     "aa": 673,
     "text": "Eine jede Conclusion enthält Subiect und Praedicat Terminus medius kommt in beiden Praemißen vor; also wird in Maiori seyn Praedicat und Terminus medius, in minore Subiect und Terminus medius. Es kann in solchen Vernunftschlüßen bloß Terminus medius versezt werden. Die Art der Versezzung ist vierfach, und daher entstehen eben die 4. Figuren der Syllogistic.",
     "ms": [
      {
       "p": 138,
       "i": 234
      }
     ]
    },
    {
     "id": "busolt-s27-006",
     "kind": "text",
     "aa": 673,
     "text": "Repugnans notae repugnat rei ipsi. Z.E. Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach etc. Einfach seyn gilt von Zusammengesezten, und vermöge des Zusammengesezten von Körpern. Die Beiden angeführten Regeln sind eben dies, was den alten dictum de omni et nullo war."
    },
    {
     "id": "busolt-s27-007",
     "kind": "text",
     "aa": 673,
     "text": "a.) Dictum de omni quidquid valet de genere aut specie valet etiam de omnibus indiuiduis in genere aut specie contentis."
    },
    {
     "id": "busolt-s27-008",
     "kind": "text",
     "aa": 673,
     "text": "b.) Dictum de nullo quidquid repugnat generi aut speciei, repugnat etiam omnibus indiuiduis in genere aut specie contentis."
    },
    {
     "id": "busolt-s27-009",
     "kind": "text",
     "aa": 674,
     "text": "Das Principium der Hypothetischen und Disiunctiuen Schlüße erklärt der Autor im 364. und 365. §. Es giebt also nur drey Principien der Vernunftschlüße denn die Consequentiae immediatae sind eigentlich keine Vernunftschlüße; sie sind nur Folgerungen und bedürfen keiner Regel. Der Autor redet von ordentlichen und außerordentlichen Vernunftschlüßen. Es ist aber hierin kein anderer Unterschied, als daß die Schlüße in denen die Form versteckt ist außerordentliche sind.",
     "pages": [
      {
       "p": 674,
       "i": 393
      }
     ],
     "aaEnd": 674,
     "ms": [
      {
       "p": 139,
       "i": 331
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s28",
   "title": "Die vier Vernunftschlüße nach ihren Figuren",
   "headings": [
    "Die vier Vernunftschlüße nach ihren Figuren"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s28-001",
     "kind": "text",
     "aa": 674,
     "text": "Figura I. Est notior quam ut egeat explicatione, est quasi radi x omnis conversionis medii Termini in ceteris."
    },
    {
     "id": "busolt-s28-002",
     "kind": "text",
     "aa": 674,
     "text": "Figura II. Hic medius Terminus est praedicatum in maiori et minori z.E. Kein denkendes Wesen ist zusammengesetzt, alle Körper sind zusammengesezt daher ist kein Körper ein denkendes Wesen."
    },
    {
     "id": "busolt-s28-003",
     "kind": "text",
     "aa": 674,
     "text": "Figura III. Hic medius Terminus in maiori et minori propositione est Subiectum. Z.E. Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen."
    },
    {
     "id": "busolt-s28-004",
     "kind": "text",
     "aa": 674,
     "text": "Figura IV. Hic medius Terminus est Praedicatum in maiori et Subiectum in minori Z.E. Quidquid habet vim agendi est Spiritus omnis spiritus est substantia, ergo omnis substantia habet vim agendi."
    }
   ]
  },
  {
   "id": "s29",
   "title": "Regeln der Vernunftschlüße. Fortsezzung",
   "headings": [
    "Regeln der Vernunftschlüße. Fortsezzung."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s29-001",
     "kind": "text",
     "aa": 674,
     "text": "1.) In einem ordentlichen Vernunftschluß können nicht mehr, als 3. Hauptbegriffe seyn; denn die Conclusion hat nur 2 Anmerkung Ist einer von den beiden Hauptbegriffen in den Praemißen doppelt Sinnig; so findet sich das doppelt Sinnige im ganzen Schluß Z.E. In dem Ort wo ich bin, ist kein anderer, die Stube das ist der Ort wo ich bin, also ist in der Stube kein anderer."
    },
    {
     "id": "busolt-s29-002",
     "kind": "text",
     "aa": 674,
     "text": "2.) Medius Terminus ne ingrediatur conclusionem, id vero pessimi concurrit vitium."
    },
    {
     "id": "busolt-s29-003",
     "kind": "text",
     "aa": 674,
     "text": "3.) Ex puris negatiuis nihil sequitur. Dieses sieht man durch die gesunde Vernunft ein; es folgt aus der Natur der Sache selbst: Denn die Subsumtion muß unter der Bedingung der Regel seyn. Ich muß sagen daß einem Dinge das zu komme, was die Bedingung der Regel ist, und dies muß doch bejahend seyn. Z.E. Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier."
    },
    {
     "id": "busolt-s29-004",
     "kind": "text",
     "aa": 675,
     "text": "4.) Ex puris particularibus nihil sequitur. Weil sonst das was unter der Bedingung der Regel steht, nicht aufs Praedicat derselben angewendet werden kann Z.E. Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen.",
     "ms": [
      {
       "p": 141,
       "i": 93
      }
     ]
    },
    {
     "id": "busolt-s29-005",
     "kind": "text",
     "aa": 675,
     "text": "5.) Conclusio sequi debet partem debiliorem NB: Unter den Praemissen nennt man partem debiliorem welcher entweder Particulair oder verneinend ist Der Saz heißt: ist eine Praemisse verneinend, so ist die Conclusion verneinend, ist eine Praemisse Particulair so ist die Conclusion particulair. Grund: Wenn ich nur einige Dinge subsumirt habe unter der Bedingung der allgemeinen Regel; so muß auch das Praedicat der allgemeinen Regel nur von einigen gelten ist die Regel verneinend, so muß auch von dem, was unter der Regel steht, die Verneinung der Regel gelten."
    },
    {
     "id": "busolt-s29-006",
     "kind": "text",
     "aa": 675,
     "text": "6.) In Conclusione nec Plus, nec Minus continentur quam in praemissis id est, ne notus in conclusione amplus reperiatur. Es muß also nicht mehr geschloßen werden, als was in den Praemissen begriffen ist in den Praemissis ist maior, minor und Terminus medius. In der Conclusion nur maior und minor. Die erste Figur ist unmittelbar euident. Bey der Zweyten und Dritten Figur muß man sich erst besinnen welches wohl die Folge wäre. Die vierte Figur haben die Logiker die Unnatürliche genannt, bey dieser haben sie wohl die Verwickelung gemerkt. In den lezten Figuren läßt sich die Form sehr verstecken.",
     "ms": [
      {
       "p": 142,
       "i": 359
      }
     ]
    },
    {
     "id": "busolt-s29-007",
     "kind": "text",
     "aa": 675,
     "text": "Die Regeln der ersten Figur sind:"
    },
    {
     "id": "busolt-s29-008",
     "kind": "text",
     "aa": 675,
     "text": "a.) Maior esse debet vniversalis."
    },
    {
     "id": "busolt-s29-009",
     "kind": "text",
     "aa": 675,
     "text": "b.) Minor affirmans."
    },
    {
     "id": "busolt-s29-010",
     "kind": "text",
     "aa": 676,
     "text": "Diese Regeln scheinen die erste Figur einzuschränken allein sie zeigen uns vielmer derselben ausdehnung auf alle und jede Arten der Schlüße, der maior muß vermöge der Regel vniversal seyn, er kann aber auch affirmativ oder negativ seyn; minor soll affirmans seyn, er kann aber auch vniversal und particulaer seyn. Also sind in der ersten Figur Schlüße von aller Qualitaet und Quantitaet möglich, also von A, E, I, et O In den übrigen sind allemal nur einige derselben möglich; folglich ist die erste Figur die ächte, die einzig Natürliche und Reine. Anmerkung Obige Regeln gelten für alle und jede Vernunftschlüße: denn in jedem Vernunftschluß muß immer eine Regel seyn, eine Regel aber ist nichts anders, als eine allgemeine Wahrheit. Ferner, da ich in jedem Vernunftschluß einen Begriff subsumiren soll so muß ich ja behaupten, daß dieser Begriff unter eine allgemeine Regel gehöre; mithin affirmiren.",
     "pages": [
      {
       "p": 676,
       "i": 818
      }
     ],
     "aaEnd": 676,
     "ms": [
      {
       "p": 143,
       "i": 726
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s29-011",
     "kind": "text",
     "aa": 676,
     "text": "Die Regeln der Zweyten Figur beschränken sich nur blos auf eine Art von Schlüßen, nehmlich auf verneinende conclusionen!"
    },
    {
     "id": "busolt-s29-012",
     "kind": "text",
     "aa": 676,
     "text": "Die Dritte Figur kann nur particulaere conclusionen haben."
    },
    {
     "id": "busolt-s29-013",
     "kind": "text",
     "aa": 676,
     "text": "In der vierten Figur sind nur particulaere oder negative Conclusionen möglich; die conclusion hat also nur partes debiliores. Hieraus erhellet, daß die erste Figur bloß die Reine sey, daß die andern aber alle vermischte Schlüße haben. Ratiocinium purum ist, wo ausser dem maiori, minori und der Conclusion kein anderer Saz mit ein läuft."
    },
    {
     "id": "busolt-s29-014",
     "kind": "text",
     "aa": 676,
     "text": "Ratiocinium impurum seu hybridum, da zu den 3 propositionen auch eine consequentia immediata muß gedacht werden. Es ist also Begattung eines ratiocinii mit einer consequentia immediata, diese findet bey den drey lezten Figuren statt. Die Erklärung aus der zweyten Figur: kein denkendes Wesen ist zusammengesezt alle Körper sind zusammengesezt also ist kein Körper eine denkende Substanz. – Hier denke ich mir bey Erwägung des Maioris per conversionem: nichts Zusammengeseztes ist eine denkende Substanz; ich bringe also die zweyte Figur per conuersionem maioris in die erste. Die erste conclusion muß hier negativ seyn, denn die zweyte soll per conversionem in die erste gebracht werden, in dieser muß maior seyn vniversaliter, so muß da nur verneinende Säzze einen allgemeinen Saz geben können per conversionem simpliciter, auch die Conclusion verneinend seyn: Conclusio sequitur partem debiliorem.",
     "ms": [
      {
       "p": 144,
       "i": 343
      }
     ]
    },
    {
     "id": "busolt-s29-015",
     "kind": "text",
     "aa": 677,
     "text": "Erklärung der Dritten Figur: Alle Menschen sind unvollkommen einige sind tugendhaft; also sind einige tugendhafte unvollkommen. Hier steht Terminus medius nicht an seiner geziemenden Stelle, und diese giebt ihm blos die Reduction in die erste Figur. Alle Menschen sind unvollkommen einige tugendhafte sind Menschen, also sind einige tugendhafte unvollkommen. In reductione igitur tertiae Figurae metathesis Terminorum efficit minorem quae quidem per consequentiam immediatam. Aus einige Tugendhafte sind Menschen, folgt, einige Menschen sind tugendhaft. Der Beweis der Dritten Figur, daß nehmlich bloß particulaere conclusionen darin statt finden liegt darin weil ich hier den minorem in die erste Figur muß reduciren können, dieser minor aber affirmans seyn muß, so ists nothwendig, daß da immer particulaere Säzze per conseqventiam immediatam können simpliciter conuertirt werden, auch ein particulaerer Saz in minori propositione seyn und dann nach diesem als parti debiliori richtig sey auf den Schluß, mithin muß die Conclusion in der Dritten Figur immer particulaer seyn.",
     "pages": [
      {
       "p": 677,
       "i": 986
      }
     ],
     "aaEnd": 677,
     "ms": [
      {
       "p": 145,
       "i": 464
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s29-016",
     "kind": "text",
     "aa": 677,
     "text": "In der vierten Figur wird der maior zum minor gemacht, aus diesem aber erhellet nun, daß die 3 lezten Schlußarten Unnatürlich seyn, und den Verstand bloß verwirren, mithin aus der Logik, die ein Leuchtturm der Seele seyn soll, verbannt seyn müßen; Jedes Urtheil hat einen modum, der die Quantitaet und Qualitaet ausdrückt, dergleichen bedeuten die vocalen A, E, I, O. Von diesen vier Vokalen können in einem Syllogismus nur 3 vorkommen, weil nur 3 Propositionen sind.",
     "ms": [
      {
       "p": 146,
       "i": 392
      }
     ]
    },
    {
     "id": "busolt-s29-017",
     "kind": "text",
     "aa": 677,
     "text": "Aus der Versezzung dieser Vokalen entstehen 64 besondere Formen. Allein durch die Regel ex puris negatiuis nihil sequitur fallen 16 weg durch conclusio sequitur partem debiliorem fallen 24 weg ueberhaupt sind nur 19 mogliche, unter denen sind einige corrupt so daß nur übrig bleiben. Um diese auf Formeln zu bringen, hat man eine gewiße Technic von Kunstwörtern ersonnen. Man hat dabei zu den Vocalen auch consonanten gesezt welche aber auch alle willkührlich sind. Die Regeln der Vokale sind:"
    },
    {
     "id": "busolt-s29-018",
     "kind": "text",
     "aa": 677,
     "text": "a.) S vult simpliciter verti, P vero accidens. M vult transponi, dies geschieht per Metathesin, per migrationem."
    },
    {
     "id": "busolt-s29-019",
     "kind": "text",
     "aa": 677,
     "text": "b.) C per impossibili duci, per contrapositionem, die Kunstwörter heißen"
    },
    {
     "id": "busolt-s29-020",
     "kind": "text",
     "aa": 677,
     "text": "In der ersten Figur Barbara, Celarent, Darii, Ferio. In der zweiten Figur Cesare, Camestres, Festino, Barocco. In der dritten Figur Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison. In der vierten Figur Calemes, Bamalip, Dimatis, Fesapo, Fresisom. Dieses alles was bisher von den Syllogismen gesagt ist, gilt nur von den Kategorischen Schlüßen Die Hypothetischen Ratiocinia sind von ganz anderer Art. Die Ratiocinia hypothetica haben 2 Modos:",
     "ms": [
      {
       "p": 147,
       "i": 265
      }
     ]
    },
    {
     "id": "busolt-s29-021",
     "kind": "text",
     "aa": 677,
     "text": "a.) Modum ponentem. Da Schlüße ich a veritate antecedentis ad consequentis positionem."
    },
    {
     "id": "busolt-s29-022",
     "kind": "text",
     "aa": 677,
     "text": "b.) Modum tollentem; hier schließe ich a remotione consequentis ad remotionem antecedentis, e.g. wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus; id est modus tollens."
    },
    {
     "id": "busolt-s29-023",
     "kind": "text",
     "aa": 678,
     "text": "Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius. Der maior propositionis sagt nichts mehr als wie ein Saz aus dem andern folgt. Ist die consequens Unrichtig; so sagt man es ist a baculo ad angulum geschloßen. Der modus tollens findet nur statt, a consequente ad antecedentem, nehmlich sublato consequente tollitur antecedens, aber a positione consequentis ad positionem antecedentis non valet modus ponens. Die Disiunctiuen Vernunftschlüße bestehen darinn, daß der maior in mehr theile getheilt wird, die einander opponirt sind.",
     "pages": [
      {
       "p": 678,
       "i": 334
      }
     ],
     "aaEnd": 678,
     "ms": [
      {
       "p": 148,
       "i": 570
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s29-024",
     "kind": "text",
     "aa": 678,
     "text": "Die Membra diuidentia nennen wir in einem Vernunftschluß membra disiunctiua. In einem solchen Schluß schließen wir a negatigatione omnium membrorum disiunctionis praeter vnum ad positionem huius vnius"
    },
    {
     "id": "busolt-s29-025",
     "kind": "text",
     "aa": 678,
     "text": "Bey Zweyen Membris schließet man a negatione vnius ad positionem alterius. Ist eins falsch; so ist das andere wahr. Oder ich schließe auch a positione vnius membri disiunctionis ad negationem ceterorum omnium."
    },
    {
     "id": "busolt-s29-026",
     "kind": "text",
     "aa": 678,
     "text": "Dilemma est id argumentandi genus, in quo maior est hypothetica. Alle dilemmata haben eine negatiue conclusion z.E. Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen. Dicitur alius Syllogismus cornutus crocodilus. Daß die Alten viel vom Dilemma machten, wenn sie aus den Behauptungen andere Folgen zogen. Ein Dilemma hat allemal etwas Sophistisches, und ist ein modus indirectus zu schließen."
    },
    {
     "id": "busolt-s29-027",
     "kind": "text",
     "aa": 678,
     "text": "Eine Art zu schließen ist:"
    },
    {
     "id": "busolt-s29-028",
     "kind": "text",
     "aa": 678,
     "text": "Von der Folge auf den Grund, denn der Saz ist alsdenn nicht affirmation, weil eine Folge mehr als einen Grund haben kann. Nur alsdenn kann ich nach diesem modo mit Wahrheit schließen, wenn ich die Wahrheit aller Folgen als wahr bestätige Von der Falschheit der Folgen auf die Falschheit des Grundes zu schließen ist ganz leicht denn ich darf nur zeigen, daß eine Folge falsch sey. Das Dilemma hat viel bequemes an sich: denn",
     "ms": [
      {
       "p": 149,
       "i": 189
      }
     ]
    },
    {
     "id": "busolt-s29-029",
     "kind": "text",
     "aa": 678,
     "text": "a.) Beweiset man nicht geradezu, aus der Beschaffenheit der Sache"
    },
    {
     "id": "busolt-s29-030",
     "kind": "text",
     "aa": 678,
     "text": "b.) Haben auch die verneinende Säzze mehr Nachdruck. Sie dienen gleichsam zur Ueberzeugung. Ein Wiederspruch macht immer einen größeren relatiuen Eindruck, er ist viel auffallender, als ein wahrer Beweis, was von unmittelbaren Folgen gilt, ist eben gesagt worden. Jedes Ratiocinium ist entweder Formale oder crypticum, ein versteckter Vernunftschluß. Wir reden mehrenteils durch Ratiocinia cryptica. Z.E. Die Seele weil sie einfach ist, ist unvergänglich. Ein Ratiocinium formale ist das, was Schulgerecht ist. Im Verstande ist jedes Ratiocinium formale, in den Worten nicht immer. Ein enthymema heißt ein Schluß, wo man eine von den praemissen wegläßt, z.B. Alle Menschen können irren also ich."
    },
    {
     "id": "busolt-s29-031",
     "kind": "text",
     "aa": 680,
     "text": "Die Schlüße durch die induction und durch die analogie. Die Vernunftschlüße sind entweder apodictisch oder nicht. Was ich durch die Vernunft erkenne ist apodictisch. Ich erkenne durch sie alles, was Nothwendig ist; was ich hingegen durch die Erfahrung erkenne ist nicht apodictisch Die Verstandesschlüße geben blos eine empirische Gewißheit, es kann doch aber eine empirische Gewißheit Nothwendigkeit heißen, wenn sie nehmlich zum Erfahrungsgebrauch so viel als eine Nothwendigkeit hilft. Jene sind strenge, diese nicht strenge Schlüsse. Bey vernunftschlüßen folgern wir aus dem allgemeinen das besondere; bey Verstandesschlüßen aus dem besonderen das allgemeine. Jenes ist Ratiocinium genuinum, dieses spurium welche der Autor ordinaire extraordinis nennt. Weil aber aus lauter besondern Säzzen nichts folgt; so ist der Verstand bemüht durch seine Wahrnehmungen hier Regeln d.i. allgemeine Säzze zu machen. So sehe ich z.E. blos durch die Erfahrung ein, daß alle Menschen sterben müßen, weil nemlich dieser, jener und alle Menschen, die gelebt haben, gestorben sind: Ich schließe hier also umgekehrt, als bey den ratiociniis. Was so vielen indiuiduen zukommt, die nur je gewesen, das kommt allen andern dieser Art zu d.i. was wir induction nennen. Dies ist der Weg, den der Verstand continuirlich geht. Indessen giebts hier keine apodictische Gewißheit: denn es können noch immer einzelne Fälle von unseren sogenannten Regeln Ausnamen machen, wie z.E. noch einige Menschliche Körper gefunden werden, wo das Herz an der rechten Seite schlägt, und ueberhaupt alles verkehrt liegt. Dem ohngeachtet ändert der Medicus seine Laudana. Eben so ists mit allen Sprachen und mit dem allgemeinen Charakter der Nazionen, wie man z.E. sagt: daß alle Leute in Frankreich höflich seyn, nur die Wirtsleute nicht, und umgekehrt in England alle Grob nur die Wirte aber höflich im ganzen gehört hieher die Regel nulla regula sine exceptione. Diese Ausnamen nennt man im disputiren Instanzen die Regel hat als denn nur eine Wirklichkeit, in der Erfahrung zu schließen und da kann eine Ausname seyn, wenn nur nicht die ganze Größe aufgehoben wird. Durch die Induction machen wir allgemeine Säzze, und dieser Schluß ist a particulaire ad vniversale. Sonst giebts auch eine Art von Inductionen aus Systematischen Säzzen d.i. wenn etwas einer Gattung praedicirt wird, weil es schon in der analysis des Begriffs selbst liegt. Z.E. der Mensch ist Vernünftig. Noch giebts eine Zweyte Art oblique zu schließen, nehmlich durch die Analogie. Diese Schlußart ist von der vorigen dadurch unterschieden, wenn zweyen Dingen so viel stükke als ich durch die scharfeste Untersuchung wahrgenommen habe, gemein sind, so können sie auch in allen Stükken übereinkommen, die ich noch nicht erforschen kann. Ich bringe also meinen Schluß nicht auf mehrere Urtheile sondern Eigenschaften eben dieser nemlichen Dinge. So schließen wir die circulation des Bluts bey thieren aus der sonstigen Aehnlichkeit des Menschlichen und thierischen Körpers in ihrer constitution. Eben so den innern Bau der Polypen, an denen wir doch sonst keine Eingeweide bemerken. Diese Schlüße durch die induction und analogie sind gleichsam die beiden Krükken der Menschlichen Ratiocination wahre Krükken, denn wir gehen sehr unsicher Daher, es ist ein bloßer Versuch. Sie sagen z.E. alle Jungen kommen entweder lebendig in die Welt oder werden aus den Eyern gebrütet. Demohngeachtet war immer bekannt. daß es bei den Polypen in jedem abgeschnittenen theil Junge giebt. Sophisma ist eine dialectische Schlußart, die blos den Schein der Wahrheit hat. Der Schein kann liegen",
     "pages": [
      {
       "p": 680,
       "i": 2593
      }
     ],
     "aaEnd": 680,
     "ms": [
      {
       "p": 150,
       "i": 90
      },
      {
       "p": 151,
       "i": 1254
      },
      {
       "p": 152,
       "i": 2328
      },
      {
       "p": 153,
       "i": 3427
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s29-032",
     "kind": "text",
     "aa": 680,
     "text": "a.) In der Materie d.i. in praemißis oder in den Sazzen selbst, oder"
    },
    {
     "id": "busolt-s29-033",
     "kind": "text",
     "aa": 680,
     "text": "b.) In der Form d.i. wenn der Schein in der Conclusion (in der Art zu schließen) liegt."
    },
    {
     "id": "busolt-s29-034",
     "kind": "text",
     "aa": 680,
     "text": "Von erstern reden wir hier nicht, Einige dialecticer vergnügten sich mit dem Zweyten, andere mit dem ersten. Einen solchen Schluß nennt man einen paralogischen wenn z.E. ein Terminus Zweydeutig ist z.E. Kein Künstler wird geboren. Die Alten hatten einen solchen Schluß den sie den Lügner nannten: wenn du sagst du lügest und redest die Wahrheit, so redest du die Wahrheit, wenn du lügest. Sophisma heterogenea, vbi Status quaestionis mutatur, dicitur etiam Sophisma ignorationis elenchi Hic pertinet illud alter mulget hircum, alter supponit cribrum. Copulatiue sophismen sind diejenige wo eigentlich zwey Syllogismen verbunden sind als: Alles einfache ist Unsterblich, Gott und alle Geister sind einfach.",
     "ms": [
      {
       "p": 154,
       "i": 572
      }
     ]
    },
    {
     "id": "busolt-s29-035",
     "kind": "text",
     "aa": 681,
     "text": "Die ars Polysyllogistica ist, wenn wir viele Schlüße miteinander verketten, und es wird darin die conclusion des vorigen Schlußes die Praemisse des folgenden, und wir schließen hier immer in Episyllogismen, und so ist die Polysyllogistic progrediens; gehe ich aber auf die Deduction und beweise eine der Praemissen zurück so ist die Polysyllogistic regrediens. Diese scheint sonst Vortheilhaft angebracht zu werden. Besonders beim disputiren; allein es ist große Behutsamkeit dabei nöthig, denn räume ich bei der Polysyllogistic progrediens die erste praemisse ein, und untersuche ich nicht recht ihre Richtigkeit in der Materie und Form so können immer wahre Sachen gefolgert werden, die aber mit der Praemisse stehen sowohl, als fallen. Damit also kein Fehler im disputiren hierin ausfalle; so ist es Ratsam, daß die conclusion des Opponenten immer die Behauptung der Respondenten gebe. Erwähnter Fehler bei den progredienten Syllogismen hat sich nicht selten in Philosophische Systeme eingeschlichen. Die regrediente Syllogistic hat dagegen weit mehr Vorzüge vor der ersten: Denn ich kritisire hier, ob der Grund wahr und die Folge richtig sey. Sorites ist blos eine Folgerung des Ausdrucks. Daselbst häufe ich Conclusion auf Conclusion und laße die praemißen weg. Eine solche Verkettung von Schlüßen kann nun aus kategorischen, Hypothetischen Säzzen bestehen und so wird Sorites kategorikus Sorites Hypotheticus. Circulus in demonstrando, saltus in probando geschieht, wenn ich a ratione remota sogleich ad rationatum schließe. Es ist hier also die Folge nicht klar, und ich laße einen nöthigen zwischen schluß weg.",
     "pages": [
      {
       "p": 681,
       "i": 616
      }
     ],
     "aaEnd": 681,
     "ms": [
      {
       "p": 155,
       "i": 1004
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s29-036",
     "kind": "text",
     "aa": 681,
     "text": "Petitio Principii. Petere Principium, heißt ein principium erbitten, postulare principium ist, forderen daß man ihm das beweisen darf. Ein Beweis der zuwenig dartut, ist darum nicht als falsch sondern als Mangelhaft anzusehen, denn ich beweise etwas, und es kann noch immer etwas zugetan werden. Ein Beweis aber, der zuviel beweiset, ist falsch und beweiset gar nichts."
    }
   ]
  },
  {
   "id": "s30",
   "title": "De locis topicis",
   "headings": [
    "De locis topicis."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s30-001",
     "kind": "text",
     "aa": 681,
     "text": "Die Topica des Aristoteles waren nichts anders, als eine Rezension aller Titteln und argumentae worunter die Gegenstände betrachtet werden können; wie wir z.E. eine Sache aus verschiedenen Gesichtspunkten betrachten können. Locus topicus ist ein in der Logic angeblicher tittel, worunter ein Gegenstand kann betrachtet und behandelt werden. Ich kann ein Ding betrachten in genere und in differentia specifica, nach der Deutlichkeit und Undeutlichkeit; als Grund und Folge, als axiom und Theorem etc. So ist eine Metaphysische Stelle Locus metaphysicus loci rerum sunt etiam fines rerum. Es giebt locos grammaticos da kann ich einen Gegenstand nach seiner definition betrachten. Diese Locos Logicos, weil sie nur die Form betreffen, nennt man gemeinarten, Locos communes oder besser gemeinsäzze. Locorum communium vsus et in logicis et in rhetoricis locum habet. Loci ethici handelt von decore und honesto Loci physici, ob ich aus causis efficientibus, oder finalibus ein Ding herleite."
    }
   ]
  },
  {
   "id": "s31",
   "title": "Die Praktische Logic",
   "headings": [
    "Die Praktische Logic."
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s31-001",
     "kind": "text",
     "aa": 682,
     "text": "So wie der theoretische Theil der Logic die allgemeine Bedingung der möglichen Vollkommenheit der Logischen Erkenntniß vorträgt, so ist die Praktische Logic eine allgemeine Wißenschaft, welche die Bedingung enthält, zu einer möglichen Logischen Vollkommenen Erkentniß zu gelangen. Hier ist also die Frage: wie soll ich nun zur möglichen Logischen Vollkommenheit in der Erkentniß gelangen, wo diese, wo jene anbringen? Hier neme man sich vor Tautologischen Definitionen in acht: Denn merentheils pflegt man die Auflösung so abzufertigen; man soll das thun, was dazu erfordert wird. Man sage dafür lieber: Die Bekanntschaft mit dem vorhabenden Obiect giebt hier die beste Auflösung. Denn hiebey komts auf die Materie allein an, und diese kann auch selbst die Praktische Logic nicht zu ihrem Gegenstande haben. Nur so viel zur Form gehört kann sie uns alle Regeln der Theorie anwenden lehren; also nur die Anwendung Der Hauptgegenstand der praktischen Logic ist demnach die Methode, d.i. die Anordnung der mannigfaltigen Erkentniß mit aller Logischen Vollkommenheit, in so fern sie in ein ganzes zusammengenommen werden soll. Die Praktische Logic konnte man demnach auch nennen die pure allgemeine Methodenlehre. Der Methode wird contra distinguirt die Manier. Diese leztere erfordert blos gemeine Lehrart, und jeder hat daher seine Manier, seinen Geschmack, doch ist die popularitaet das Hauptstück dabei. Die Manier ist eine Art der Behandlung des Obiects nach Vernunftgesezzen. Die Manier läßt sich demnach wie alles empirische nicht in Regeln bringen. Doch ist die Popularitaet die Lobenswürdigste Eigenschaft dabei: denn sie sezt die Logische Vollkommenheit voraus, da sie nichts anders ist, als accomodatio Logicae cognitionis ad sensum communem. Man zeigt hier ohne alle Kunst, wie sich unsere Begriffe allmählich ohne Scholastische Strenge erweitern. Ferner zeichnen sich Manier und Methode dadurch aus, daß die Methode zur Wißenschaft gehört, die Manier blos zur Unterhaltung; so wie eben diese sich durch Hang und Uebung kundbar macht. In dem leztern sind selbst die Fehler schon: denn es ist Natur; so wie beym Frauenzimmer selbst die Flecken im Gesicht die Schonheit mehr hervorstehend machen.",
     "ms": [
      {
       "p": 158,
       "i": 999
      },
      {
       "p": 159,
       "i": 1986
      }
     ]
    },
    {
     "id": "busolt-s31-002",
     "kind": "text",
     "aa": 682,
     "text": "Der Methode steht entgegen:"
    },
    {
     "id": "busolt-s31-003",
     "kind": "text",
     "aa": 682,
     "text": "a.) Das Tumultuarische, wo man keine Ordnung im Denken beobachtet; doch im concipiren ist das tumultuarische erlaubt, und vorteilhaft;"
    },
    {
     "id": "busolt-s31-004",
     "kind": "text",
     "aa": 683,
     "text": "denn man sieht sich gleichsam ganz frey im Felde der Gegenstände um; dahingegen uns die Methode in der Betrachtung schranken sezt: denn das Tumultuarische dient zur mannigfaltigkeit, die Methode zur Einheit. Dies Tumultuarische in der Methode ist allemal ein Beweis von einer Tumultuarischen Denkungsart."
    },
    {
     "id": "busolt-s31-005",
     "kind": "text",
     "aa": 683,
     "text": "b.) Giebts eine Art von Vortragen, die ist Rhapsodistisch, vermöge derselben kann man immer eine Ordnung im Denken beobachtet haben, nur ist man nicht im stande den Leitfaden seiner Betrachtung Sichtbar zu machen. Der entdecket sich besonders im Mangel an titeln der Abschnitte; kurz es fehlt das schuldige Rechte der Methode; denn das macht einander klar."
    },
    {
     "id": "busolt-s31-006",
     "kind": "text",
     "aa": 683,
     "text": "c.) Aphoristisch nennt man einen Vortrag, wenn zwar Methode im Denken und selbst im Vortrage hervorleuchtet, nur der Uebergang von einem theil zum andern nicht deutlich vorgestellt wird, wenn Einheit im Denken, aber nicht continuitaet da ist. Es enthält gleichsam das vorhergehende Kapitel keine Propädeutik zum Uebergange zum Folgenden, die Aphoristiker überraschen uns gleichsam, und werden nicht selten angenehm. Dahingegen ein Buch von rhapsodistischer Methode unerträglich ist, indem man gleich nicht sobald im Archiv des Gedächtnißes nachschlagen kann. in der Aphoristischen Methode ist es gleichsam als springe ich von einem Stein zum andern die in gerader Linie liegen.",
     "ms": [
      {
       "p": 160,
       "i": 93
      }
     ]
    },
    {
     "id": "busolt-s31-007",
     "kind": "text",
     "aa": 683,
     "text": "d.) Es verdient endlich die populaere Methode, als die gemeinnützigste, allen andern vorgezogen zu werden. Denn sie ist gleichsam die Herablassung eines Mannes von Wißenschaft zum gemeinen menschlichen Verstande."
    },
    {
     "id": "busolt-s31-008",
     "kind": "text",
     "aa": 683,
     "text": "Die eigentliche Methode hat gar zu viel Anstrengung des Verstandes, und alsdenn verbietet sie jede Art der Versöhnung In der Popularitaet haben sonst die Franzosen den großen Vorzug, und ein Fontenelle kann einen Mathematischen Saz eben so begreiflich machen als eine aesthetische Wahrheit. Die Methode wird auch eingetheilt in die Analytische und Synthetische. Bey der Synthetischen geht man von Prinzipien zu Principata, bey der andern umgekehrt, so ist die ganze Mathematik Synthetisch. Die Analytische ist gleichsam eine inverse Synthesis, und ist die Philosophie. Ferner wird die Methode eingeteilt:",
     "ms": [
      {
       "p": 161,
       "i": 281
      }
     ]
    },
    {
     "id": "busolt-s31-009",
     "kind": "text",
     "aa": 683,
     "text": "a.) In die Scientifische diese gehört für Gelehrte und man sieht dabei besonders auf die Gründlichkeit. sie trägt alles in abstracto vor, nehmlich Ordnung und Deutlichkeit ist das Hauptwerk dabei."
    },
    {
     "id": "busolt-s31-010",
     "kind": "text",
     "aa": 684,
     "text": "b.) In die populäre diese sieht auch auf die Ideen, indem dabei alles in concreto vorgetragen wird. So schreibt Hume reflexionen über den Menschlichen Verstand in scientiuischer Methode, allein mit wenigem Beifall. Eben diese Materie handelte er in populaerer Methode ab, brachte dabei Vergleiche aus der Redekunst, Poesie, Empfindung etc. etc. an, und das Buch war durchgangig approbirt. Anmerkung zum Vorigen. Die Synthetische Methode ist nur den Wißenschaften angemeßen, wo man vom allgemeinen zum besondern geht, also der Mathematik; dahingegen in der Philosophie die Analytische am meisten stattfindet in einigen teilen ausgenommen. Die Mathematische Methode ist die eigentliche Methode. Eben diese auf andere Wißenschaften angewandt, ist blos vergeblich sonst verfällt man in das Laster der Methodenmanier. Noch ist die Eintheilung der Methode in die:",
     "ms": [
      {
       "p": 162,
       "i": 584
      }
     ]
    },
    {
     "id": "busolt-s31-011",
     "kind": "text",
     "aa": 684,
     "text": "a.) Natürliche, nemlich obiective natürliche, die dem Gegenstande angemeßen ist. Die Methode in concreto ist eine Naturliche"
    },
    {
     "id": "busolt-s31-012",
     "kind": "text",
     "aa": 684,
     "text": "b.) Die Künstliche. Soll diese Künstliche keinen Fehler haben, so muß sie Natur seyn; denn die Kunst ist wirklich nichts anders als Kultivirte Natur. Eben dies nennt man die naivitaet, nemlich eine Kunst, die Natur scheint, oder eine Natur, die Kunst scheint. Ferner die Syllogistische Lehrart, dergleichen giebts nicht eigentlich, und muß auch nicht geduldet werden: denn wen verdrüßen nicht die Formale Schlüßen. Ja bei einzelnen Sazzen, beim disputiren ist sie erlaubt. Die Tabellarische Methode ist die wo man das Gerippe eines Systems entwürft. Die Dialogische Methode unterrichtet durch discuriren. Sie ist zwiefach:"
    },
    {
     "id": "busolt-s31-013",
     "kind": "text",
     "aa": 684,
     "text": "a.) Socratisch, wo sich der Lehrer als Schüler anstellt, und durch Zergliederung aus dem Schüler selbst die Frage zu entscheiden sucht. Sie heißt deswegen so; weil Socrates in seinen Dialogen sich derselben besonders bedient.",
     "ms": [
      {
       "p": 163,
       "i": 89
      }
     ]
    },
    {
     "id": "busolt-s31-014",
     "kind": "text",
     "aa": 684,
     "text": "b.) Catechetisch, diese ist blos für Gedächtniß Erkentniße, denn da giebt sie der Lehrer dem Schüler selbst. Die Geographische Methode ist diejenige, welche die Gegenstände vorträgt, die zugleich sind."
    },
    {
     "id": "busolt-s31-015",
     "kind": "text",
     "aa": 684,
     "text": "Die Chronologische Methode ist diejenige, welche die Gegenstände vorträgt, die in der zeit auf einander folgen. Noch ist die Einteilung in doctrin und disciplin. Die Doctrin erweitert die Erkentniße und ist also positiv. Die Disciplin hält blos den Irrthum ab, ist also negativ. Die Tumultuarische Meditation hat viel Vortheilhaftes in sich: denn durch diese Art von Streiferey, wo wir vom Fußsteig, ohne Aufhaltung überall"
    },
    {
     "id": "busolt-s31-016",
     "kind": "text",
     "aa": 685,
     "text": "aus jeder Gegend plündern, gewinnt unsere Erkentniß gewiß nicht wenig."
    }
   ]
  },
  {
   "id": "s32",
   "title": "Anmerkung über das Meditiren",
   "headings": [
    "Anmerkung über das Meditiren"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s32-001",
     "kind": "text",
     "aa": 685,
     "text": "Beim meditiren hat man ein Obiect nothig, folglich muß man die Materialien samlen und dies geht am besten durch das Tumultuarische Denken an. Zur weiteren Beförderung davon peset man Bücher, besonders wenn es Historische oder Polemische Sachen betrift: sonstens aber giebt das Denken anderer uns selbst zu neuen Ideen anlaß und zu neuen Gedanken.",
     "ms": [
      {
       "p": 164,
       "i": 51
      }
     ]
    },
    {
     "id": "busolt-s32-002",
     "kind": "text",
     "aa": 685,
     "text": "Lambert brauchte Lexica, und suchte Synonyma, analogien etc. etc. auf, und so erlangt man die Mannigfaltigkeit. Diese beobachtet man im Denken; im aufschreiben aber wird Einheit erfordert, die uns gleichsam unterwegens aufstoßende Neben Gedanken merkt man am Rande an, und theilt sie nachher in ihre Fächer. Weil aber unsere imagination sobald sie einmal auf eine Reise gebracht worden, nicht sobald davon abläßt; so muß man sich, damit man den Gegenstand nicht immer nur aus einem Gesichtspunkte betrachte Gewalt antun öfters abzubrechen, Bücher von ganz anderer Materie zu lesen, und gleichsam eine Diuersion zu machen. Des Morgens muß man die Materialien zu einem System in Ordnung bringen des Abends hingegen Materialien samlen: denn die Imagination schwärmt gleichsam des Abends mit vielen Gegenständen beschäftigt herum des Morgens ist sie aber gleichsam unter der Aufsicht der Vernunft.",
     "ms": [
      {
       "p": 165,
       "i": 596
      }
     ]
    }
   ]
  },
  {
   "id": "s33",
   "title": "Vom Gebrauch der Wörter",
   "headings": [
    "Vom Gebrauch der Wörter"
   ],
   "provenance": "[Logik Busolt] (ca. 1789/90. Ms.: Berlin. Nach dem Orig.)",
   "blocks": [
    {
     "id": "busolt-s33-001",
     "kind": "text",
     "aa": 686,
     "text": "Sprechen und reden sind unterschieden. Sprechen geschieht um sich verständlich zu machen; reden um zu seinem Zweck zu gelangen. Wie soll nun der Philosoph seine Sprache einrichten? Ueberhaupt sieht der Philosoph mehr auf die Bedeutung der Wörter, als auf den Styl. Das principium hiervon ist: Der Ausdruck muß dem Begrif angemeßen seyn. Er kann darum auch die Sprache der Gelehrten brauchen, das ist nicht allein todte Sprache, sondern auch Technische Termini. Doch sind diese nur so zu sagen ein Nothnagel, und er geht nicht ohne Bedacht und Not vom gemeinen Sprachgebrauch ab; allein für die Philosophischen Principien in Ansehung des Ausdrucks ist selten eine Sprache hinlänglich. Die Deutsche scheint nebst der Griechischen am meisten Philosophisch zu seyn; denn sie ist die aller richtigste, sie hat die meiste Synonyma. Demohngeachtet findet man doch selten Zwey Wörter in der ganzen Sprache, die einerley wären: Denn die Menge der Synonymen ist immer ein Beweis von Reichthum der Sprache. Denn man kann vermittelst der Synonymen die verschiedene Grade der Genauigkeit im Obiect bestimmen. Die Ursache des Reichtums der deutschen Sprache, leitet man füglich von ihren Missionaren her, die, als sie sie bekehren wollten viele ihrer schon erfundenen Wörter nach dem Griechischen und Lateinischen bildeten als aus compassio Mitleiden, misericordia Barmherzigkeit. Eben weil diese Missionare alle verbesserer der Deutschen Sprache, den Verstand der Deutschen aufklären wollten, so mußten sie auch wenig tropisch reden, und daher mußten sie aus Noth die Welsche Sprache mit ganz neueren Wörtern bereichern, da sonst auch eben diese tropi ein Beweis von der Armut einer Sprache sind. Eben wenn eine Sprache viel tropos hat; so giebt dies Anlaß zu Unterschiedenen Wortspielen und wizzigen Einfällen.",
     "pages": [
      {
       "p": 686,
       "i": 800
      }
     ],
     "aaEnd": 686,
     "ms": [
      {
       "p": 166,
       "i": 512
      },
      {
       "p": 167,
       "i": 1499
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "busolt-s33-002",
     "kind": "text",
     "aa": 686,
     "text": "Die Wortschneiderei ist ein großer Fehler. Freylich sagt man verba valent sicut nummi, allein es hat doch nur die Hohe Landes Obrigkeit die Münzgerechtigkeit sonst aber bleibt es wahr"
    },
    {
     "id": "busolt-s33-003",
     "kind": "text",
     "aa": 686,
     "text": "Penes vsum est et ius et norma loquendi"
    },
    {
     "id": "busolt-s33-004",
     "kind": "text",
     "aa": 686,
     "text": "Finis."
    }
   ]
  }
 ]
};
