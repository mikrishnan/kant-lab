/* ─────────────────────────────────────────────────────────────────────────────
   Metaphysik Mrongovius, Academy Edition XXIX (1782/83) — AA 29:743–940
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes0029kant) by
   logic-portal/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

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

const METAPHYSIK_MRONGOVIUS = {
 "meta": {
  "work": "Metaphysik Mrongovius",
  "label": "Metaphysik Mrongovius",
  "volume": 29,
  "date": "1782/83",
  "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
  "source": "OCR of the printed AA XXIX (Internet Archive item kantsgesammeltes0029kant), by logic-portal/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   743,
   940
  ],
  "scan": {
   "item": "kantsgesammeltes0029kant",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + -735",
   "note": "page image of AA 29:P is SCAN_URL with n = P + (-735)"
  },
  "counts": {
   "sections": 25,
   "blocks": 354,
   "pages": 194,
   "words": 73601,
   "joinedLayout": 123,
   "dehyphenated": 1311,
   "meanOcrConf": 78
  }
 },
 "front": [
  "Metaphysik Mrongovius",
  "Metaphysic",
  "vorgetragen von",
  "Prof. Immanuel Kant",
  "nachgeschrieben von",
  "C. C. Mrongovius",
  "1783 d. 4. Febr:"
 ],
 "contents": [],
 "sections": [
  {
   "id": "s02",
   "title": "Prolegomena Metaphysices",
   "titleSrc": "heading",
   "headings": [
    "Prolegomena Metaphysices"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s02-001",
     "kind": "heading",
     "aa": 747,
     "text": "Prolegomena Metaphysices"
    },
    {
     "id": "metaphysik-mrongovius-s02-002",
     "kind": "text",
     "aa": 747,
     "ms": [
      {
       "p": 2,
       "i": 1119
      }
     ],
     "text": "Unsere Erkenntniße sind in zwiefacher Art im Zusammenhang, erstens als aggregat, wenn man eines zum andern hinzuthut, um ein ganzes auszumachen, z.E. Ein Sandberg ist an sich selbst kein Zusammenhang von Dingen, sondern sie sind willkührlich zusammengesetzt (es ist hier nichts bestimmtes), zweytens als Reihe von Grund und Folgen, die Theile einer Reihe heißen Glieder, weil wir einen Theil nur durch den andern erkennen können, z.E. beym menschlichen Körper ist ein Theil durch den andern da. Wir sehen leicht ein, daß der Zusammenhang der Erkenntniße als aggregat keinen bestimmten Begriff vom Ganzen giebt und es ist so, als wenn ich ein Stückchen zum andern hinzuthue, bis ein Berg entsteht usw., bis ein Planet oder Erdkörper wird, wenigstens können wir es uns so denken. In der Reihe ist etwas, was die Verknüpfung nach einer Regel macht, nahmlich der Gründe und Folgen. Bey Gründen und Folgen müßen wir uns Gränzen a priori denken i. e. ein Grund, der weiter keine Folge ist, und Gränzen a posteriori, i. e., eine Folge, die kein Grund ist, z.E. bey den menschlichen Generationen ; die Menschen sind Glieder derReihe, hier müßen wir doch einen Menschen denken, der zwar zeugt aber nicht geboren ist, also terminus a priori; und einen, der geboren ist, aber keinen zeugt, also terminus a posteriori. Wir betrachten hier (in der Metaphysik) nicht die Dinge, wie sie als Gründe und Folgen zusammenhangen, sondern die Erkenntniße, die stammen auch so ab wie Menschen oder andere Dinge. Ich kann mir ein Erkenntniß vorstellen, das keine Folge ist, also der oberste Grund, und das kein Grund ist, also die letzte Folge.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s02-003",
     "kind": "text",
     "aa": 747,
     "text": "Die letzte Folge ist die unmittelbare Erfahrung, z.B. Etwas — Körper - — Stein — Kalkstein — Marmor — marmorne Säule.",
     "ocrConf": 61
    },
    {
     "id": "metaphysik-mrongovius-s02-004",
     "kind": "text",
     "aa": 747,
     "aaEnd": 748,
     "pages": [
      {
       "p": 748,
       "i": 303
      }
     ],
     "ms": [
      {
       "p": 3,
       "i": 700
      }
     ],
     "text": "Wir haben also eine Idee von einem Zusammenhänge der Efkenntniße als Gründe und Folgen Erkenntniß. Die Gründe von gründen nach einer gewißen Regel sind, heißen principia. Insoferne also Erkenntniße in einer Reihe sind, so müßen auch principia seyn Es ist merkwürdig, daß ich die Folge zum Grunde machen kann, woraus aber nicht das andere folgt, sondern wodurch ich immer nur auf die Erkenntniß des andern gekommen bin. Es sind also nicht principia eßendi, sondern cognoscendi, z.E. das Daseyn Gottes erkenne ich aus der Welt. Welt ist doch nicht der Grund von Gott, sondern umgekehrt, aber durch die Welt kann ich auf den Begriff von Gott kommen, und in so ferne kann ich von den principiatis zu den principiis gehen — die Folgen, die als Gründe gebraucht werden, umgekehrt zu ihren Gründen zu gehen, heißen principia a posteriori. Fange ich von den Folgen an, so erkenne ich etwas a posteriori, fange ich von den Gründen an, so erkenne ich a priori. Wenn mir etwas gegeben ist, so kann ich probiren, ob ichs wohl a priori aus Gründen erkannt hätte, z.E. daß das Sonnenlicht das Eis schmelze, lehrt die Erfahrung, a priori aber würden wir es schwerlich erkannt haben. Die Erkenntniß, die aus der Erfahrung hergenommen ist, ist kat’exochen a posteriori, und wenn wir künftig Erkenntniße a posteriori nennen, so verstehen wir immer solche, die aus der Erfahrung sind, weil die Erfahrung die letzte Folge unserer Erkenntniß enthält, zu der wir Gründe aus der Vernunft suchen. Nehmen wir die Erfahrung zum principium, so ist das princip empirisch: z.E. alle Körper sind schwer (in so weit wir sie kennen), lehrt die Erfahrung, wir können es zum princip annehmen und sagen: da alle Körper schwer sind, so folgt daraus . . . Principien a priori sind solche, die von keiner Erfahrung entlehnt sind. Ob es welche giebt, muß bald untersucht werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s02-005",
     "kind": "text",
     "aa": 748,
     "ms": [
      {
       "p": 4,
       "i": 182
      }
     ],
     "text": "Es kann aus der Zusammenkettung unserer Erkenntniß eine Einheit entspringen, d. i. Wissenschaft, oder es kann ein Zusammenhang angetroffen werden, der systematisch ist. A Wir können uns einen Zusammenhang unserer Erkenntniße als Wissenschaft denken, von den ersten Gründen bis zu den letzten Folgen, und dieser würde das Ganze aller erschlossenen Erkenntniße in sich faßen; sie übersteigt aber unsere Kräfte.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s02-006",
     "kind": "text",
     "aa": 748,
     "text": "Der erste Grund ist simpel — nehmlich von Etwas — aber um die letzten Folgen zu haben, mäßen wir das ganze Feld der Erfahrung durchgehen, welches nicht seyn kann.",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s02-007",
     "kind": "text",
     "aa": 748,
     "aaEnd": 749,
     "pages": [
      {
       "p": 749,
       "i": 259
      }
     ],
     "ms": [
      {
       "p": 5,
       "i": 1315,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Da dieses also nicht angeht, so können wir B den Stoff davon wegnehmen. Ich will nur ein Stück von dem System der ganzen menschlichen Erkenntniß haben, nehmlich die Wissenschaft der obersten principien der menschlichen Erkenntniß, und ein solches projeet ist bescheiden. Eine solche Wissenschaft hat man längst in Gedanken gehabt zu bearbeiten und sie Metaphysik genannt. Metaphysik ist also die Wissenschaft der ersten principien der gesamten Menschlichen Erkenntniß, die also die ersten Glieder der Reihe enthält. Dieser Begriff ist aber C nicht bestimmt genug, wie viel oder wenig dazu gehöre. Denn wenn ich einen Begriff von der Wissenschaft gebe, so muß bestimmt werden, was dazu gehöre oder nicht, und auch die Menschen können (durch den gegebenen Begriff) nicht wißen, wie weit diese principien bis zur Erfahrung herabreichen oder nicht, und wo wir stehen bleiben . — Eine iede Reihe kann in 2 Theile getheilt werden: der dem andern vorhergeht, ist comparative der erste, z.E. eine Kirchen Geschichte der ersten Jahrhunderte. Hier ist nichts bestimmtes, es kann das 3, 7, 8, folgende unserer Jahresrechnung seyn. Die Gränze a priori der Metaphysik ist bestimmt, nehmlich daß es keine principien gäbe, von denen sie könnte abgeleitet werden. Man redet vom Möglichen, Unmöglichen, Etwas und Nichts, höher kann der Mensch nicht steigen. Von Welt, Zufall, Schicksal, Natürlichem, Übernatürlichem — Ursache der Welt, Daseyn, Gott ist solange durch bloße Begriffe geredet. Nur von der Seele des Menschen, da wurde vermeint, was sagen zu können, wenn er nicht auf sich attendirte. Also kann auch wohl der Körper hergehören, und nun weiß ich nicht, ob nicht die gantze Naturlehre. Hieraus erhellet, daß ich der Metaphysik nicht Gränzen in der Reihe der Folgen und Gründe setzen kann dem Grade nach, wenn ich sie als mit andern Wißenschaften gleichartig und verwandt betrachte, sondern ich muß sie mir als ungleichartig und von den andern ganz verschieden denken.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s02-008",
     "kind": "text",
     "aa": 749,
     "text": "Die principien a priori haben immer Nothwendigkeit bei sich, die a posteriori ozi nicht, e. gr., alles was geschieht, muß einen Grund haben — ist ein Satz a priori, denn die Erfahrung lehrt nur, daß es so sei — kann aber nicht läugnen, daß nicht auch etwas ohne Grund einmal geschähe.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s02-009",
     "kind": "text",
     "aa": 749,
     "aaEnd": 750,
     "pages": [
      {
       "p": 750,
       "i": 464
      }
     ],
     "ms": [
      {
       "p": 6,
       "i": 641
      }
     ],
     "text": "Es sind 5 Arten von Erkenntnissen a priori und a posteriori, die ganz von einander unterschieden sind. Z.E. Gott kann blos a priori erkannt werden. D Nun sagen wir, die Metaphysik est scientia principiorum cognitionis humanae a priori. Gehört Mathematik nicht in die Metaphysik, ob sie gleich auch cognitio pura ist ? Nein, aber wohl die principien der Möglichkeit der Mathematik - denn sie enthält die principien der Möglichkeit aller Erkenntniße a priori. Jetzt ist der Begriff bestimmt und festgesetzt. Alle Erkenntniße die einer Erfahrung bedürfen, um zu dem zu gelangen, sind außer dem Felde der Metaphysik; um den Begriff zu bestimmen muß ich E eine besondere species von principien hinzuthun. Eine Erkenntniß, die mit keiner Erfahrung behaftet ist, ist rein, oder Metaphysik ist scientia principiorum cognitionis purae oder nur philosophia pura, das ist ein rechter Probierstein, z.E. Die Seele gehörtauch nicht in die Metaphysik; die Psychologie ist nur angeflickt. Der Gebrauch der Vernunft muß pura seyn — also isolirt, d. h. von aller Erfahrung befreyt und unabhängig von derselben. — Natur Wissenschaft ist auch Philosophie, aber philosophia applicata, sie ist eine Anwendung der Vernunft auf Gegenstände der Erfahrung, wo wir empirische principia zum Grunde legen. Wir haben 2 Felder des Gebrauchs der Vernunft. Sie kann fortgehen, indem sie principia a priori hat, oder principia a posteriori, indem sie die Erfahrung zu Rathe zieht. Den ersten Theil dieses Gebrauchs nennt man Metaphysik. Hier muß es 2 Haupttheile geben:",
     "joined": [
      "layout"
     ],
     "dehyphenated": 10,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s02-010",
     "kind": "text",
     "aa": 750,
     "aaEnd": 751,
     "pages": [
      {
       "p": 751,
       "i": 1452
      }
     ],
     "ms": [
      {
       "p": 7,
       "i": 645
      },
      {
       "p": 8,
       "i": 1720
      }
     ],
     "text": "1) müßen wir die Vernunft selbst betrachten - oder der erste Theil ist die Wissenschaft, die die Vernunft zum Gegenstände hat. Sie würde handlen von den Quellen, Umfang und Grenzen unserer reinen Vernunft— oder von der Natur, d. i. von der Möglichkeit, a priori zu urtheilen. 1. Zuerst werden wir examiniren: kann unsere Vernunfterkenntniß etwas a priori erkennen — die Möglichkeit der Erkenntniß a prion muß erst dargethan werden. 2. Ferner: die Ausbreitung, wie weit kann sie kommen, zu welchen Gegenständen kann sie ohne Erfahrung kommen. — c Endlich die Gränzen, über welche sie nicht schreiten darf, wenn sie ohne Erfahrung urtheilen will. Ich sage nicht, das ist Substanz, das Accidens; denn hier examinirte ich nicht die Vernunft selbst, sondern ich würde von den Gegenständen handlen. Die Transzendentalphilosophie ist also von der eigentlichen Metaphysik sehr unterschieden, i.e. das System der Erkenntniß durch die Vernunft. Wir fragen natürlich, wie kommen wir zu solchen Erkenntnissen a priori, wo die principien gewiß ganz a priori sind, z.E. ob die Welt einen Anfang habe oder nicht, das kann keine Erfahrung lehren, gleichwohl fragt die Vernunft darnach. Es ist ihr viel daraJ gelegen, es auszumachen. Es ist also eine Frage an die reine Vernunft, nicht an die, welche von den empirischen principien unterstützt ist, denn die kann uns hierauf keine Antwort geben. _ Hier entsteht natürlich die Frage, wie will das die Vernunft erkennen, ohnabhängig von der Erfahrung? Die Beantwortung der Frage gehört in die Transcendentale Philosophie, da sehen wir, daß es principien a priori giebt. Nun weiß ich wieder nicht, wie weit werden sie mich bringen? Ich muß also ihr ganzes Vermögen suchen kennen zu lernen, ohne in Verblendung und Irrthümer zu gerathen. Diesen ersten Theil könnte man Transcendentalphilosophie nennen oder Critik der reinen Vernunft. Reine Vernunft ist die, die ohnabhängig von aller Erfahrung urtheilt. Man könnte diesen Theil auch nennen Metaphysicam puram; und 2 die Anwendung der principia a priori auf Gegenstände der Erfahrung wäre metaphysica applicata. Was sie sey, werden wir nachher zeigen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s02-011",
     "kind": "text",
     "aa": 751,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "5",
       "unresolved": true
      }
     ],
     "text": "E Erkenntniße a priori sind doppelt : a mathematische b philosophische mit dem Unterschied: Logic — wir nehmen hier blos die letztere - , mithin gehört Mathematik nicht in die Metaphysik, ob sie gleich auch cognitio pura ist, aber wohl die principien der Möglichkeit der Mathematik, denn sie enthält die principien der Möglichkeit aller Erkenntniß a priori - Wir können aber über Mathematik philosophiren.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s02-012",
     "kind": "text",
     "aa": 751,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "6",
       "unresolved": true
      }
     ],
     "text": "F Etwas ist a priori a) simpliciter und a priori b) secundum quid — a priori secundum quid, wenn ich etwas durch die Vernunft erkenne, aber aus empirischen principien, z. B. wenn ich einen Stein horizontal werfe — so fällt er nicht gerade — man kann den Bogen bestimmen a priori, aber nach Gesetzen der Schwere, die erkennen wir a posteriori.",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s02-013",
     "kind": "text",
     "aa": 751,
     "text": "Reine philosophische Erkenntniße sind metaphysisch. Was ist philosophie? das System der Vernunft Erkenntniße durch Begriffe. Metaphysik ist also das System der reinen Vernunft Erkenntniße durch Begriffe.",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s02-014",
     "kind": "text",
     "aa": 751,
     "text": "Dem System muß eine Idee zum Grunde liegen, wodurch die T heile, Verbindung der Theile, und Vollständigkeit der I heile bestimmt ist.",
     "ocrConf": 70
    },
    {
     "id": "metaphysik-mrongovius-s02-015",
     "kind": "text",
     "aa": 751,
     "aaEnd": 752,
     "pages": [
      {
       "p": 752,
       "i": 524
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "8",
       "approx": true,
       "unresolved": true
      },
      {
       "p": 9,
       "i": 750
      }
     ],
     "text": "Wie reine Vernunft Erkenntnisse möglich sind, lehrt die Mathematik, denn die ist eine solche reine Vernunft Erkenntniß: da ihre Sätze ihre eigene Evidenz immer bey sich haben und überdem ieder derselben durch die Erfahrung bestätigt werden kann, so wäre es nicht nöthig die Möglichkeit derselben so weit herzuholen, nun aber hat unsere reine Vernunft ein besonderes lach von Erkenntnissen, bey denen es nicht so ist wie bey der Mathematik : sie sind nicht so glücklich, die Evidenz zu haben und auch nicht von der Erfahrung bestätigt zu werden — sie sind überdem auch von der Art, daß, obgleich der Mensch bald von einem und dem andern überzeugt zu sein glaubt, doch keiner ist, der nicht wäre bestritten worden, da die allgemeine Menschen Vernunft, i.e. der Inbegriff der Vernunft aller Menschen in der Philosophie der reinen Vernunft, das ist in der Metaphysik, mit sich selbst im Streite ist, so ist es nothwendig, die Möglichkeit der reinen Vernunft Erkenntnis zu untersuchen, und so werden wir auch die Möglichkeit der reinen Metaphysik untersuchen, nicht ihr zum besten, sondern ob wir nicht dadurch zugleich die Möglichkeit der reinen Philosophie lernen möchten,",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s02-016",
     "kind": "text",
     "aa": 752,
     "aaEnd": 754,
     "pages": [
      {
       "p": 753,
       "i": 1890
      },
      {
       "p": 754,
       "i": 4447
      }
     ],
     "ms": [
      {
       "p": 10,
       "i": 805
      },
      {
       "p": 11,
       "i": 1791
      },
      {
       "p": 12,
       "i": 2809
      },
      {
       "p": 13,
       "i": 3715
      },
      {
       "p": 14,
       "i": 4705
      }
     ],
     "text": "Die Metaphysica applicata, die die Erkenntnis der Gegenstände a priori enthält, macht ein System der reinen Vernunft aus, und das System der reinen Vernunft Erkenntniß heißt Metaphysic im stricten Verstände. Die Transcendentalphilosophie ist die propaedeutic der eigentlichen Metaphysik. Die Vernunft bestimmt hier nichts, sondern redt nur immer von ihrem eigenen Vermögen, und in der eigentlichen Metaphysik macht sie Gebrauch von diesem Vermögen, und in dem Verstände ist Metaphysic immer genommen. Wahre Transcendental Philosophie hat man nicht gehabt. Man hat das Wort gebraucht und darunter Ontologie verstanden; so nehmen wir es aber (wie leicht zu ersehen) nicht. In der Ontologie redt man von Dingen überhaupt, also eigentlich von keinem Dinge — man beschäftigt sich mit der Natur des Verstandes, sich Dinge zu denken — wir haben hier die Begriffe, durch welche wir Dinge denken, nehmlich die reine Vernunft Begriffe mithin ist sie Wissenschaft von den principien des reinen Verstandes und der reinen Vernunft. Das war aber auch Transcendentalphilosophie, also gehört sie zu derselben — man hat sie nie gut abgehandelt man handelte gleich von Dingen überhaupt — ohne zu untersuchen, ob gar solche reine Verstandes- oder reine Vernunftoder reine Wissenschaftliche Erkenntniße möglich wären. In derselben rede ich schon von Dingen, Substanzen und Accidenzen, das sind Eigenschaften der Dinge, die ich a priori erkenne. Aber in der Critic kann ich so nicht reden. Ich werde hier sagen, unter den Begriffen, die a priori sind, kommen auch die von Substanz und Accidenz vor. Wie komme ich dazu? Was kann ich damit ausrichten? Was ist möglich von den Objecten a priori zu erkennen, insofern sie Substanzen sind? Ich examinire also den Ursprung des Begriffs wie weit er wurde gehen können, und ihren Ursprung, wie weit sie reichen, und ihre Gränzen kennen zu lernen. Das ist das Geschäfte der Critic der reinen Vernunft. Gesetzt, wir trügen auf die Festsetzung der principien keine Achtsamkeit und machten gleichsam ein System, indem wir principien a priori, deren Gültigkeit durch den Gebrauch entstanden ist, nehmen, so würden wir eine eigentliche Metaphysic haben, aber mit welcher Zuverläßigkeit könnten wir uns derselben bedienen l Wir kämen zuletzt in solche Schwierigkeiten, daß wir gar nicht mehr herausfinden können, und die Vernunft würde ihre eigenen Producte selbst zerstören — die Critic ist also höchst nothwendig. Wenn die Vernunft irrt, so kann sie keine Erfahrung zurechte weisen. Wenn wir die Critic der reinen Vernunft unabhängig von aller Erfahrung betrachten, so ist das die wahrhafte reine Philosophie, oder die Betrachtung des Vernunft Vermögens selbst ist reine Philosophie. In allen Erkenntnißen, wo Vernunft Principien Vorkommen und zwar aus Begriffen, da giebt es nur Wissenschaft in ihrem reinen, i.e. Erfahrungsfreyen Gebrauch. Man kann sie mehr ansehen als Critic denn als Doctrin, da sind wir dogmatisch. Ein Erkenntniß ist dogmatisch, welches in seinem Zusammenhänge mit Gründen vorgetragen wird. In der Critic tragen wir nicht einen Erkenntnißzusammenhang vor, sondern wir erforschen erst die Quellen der Möglichkeit einer solchen Erkenntniß ohne Erfahrung. Der 2te Theil der Metaphysic ist nunmehr das System der reinen Vernunft. Philosophie bedeutet ein System der Vernunfterkenntniß aus Begriffen. — Hier soll reine Philosophie im System vorgetragen werden. Unsere Vernunft soll Objecte haben, die sind zweifach: entweder gehören sie zur Natur oder Freyheit. Beyde sind Regeln und Gesetzen unterworfen. Unsere Vernunft erkennt sie, indem sie sie unter Regeln bringt. Die Vernunft erwegt nothwendige Gesetze, und alles was durch die Vernunft erkannt werden kann, ist nothwendig. Die Objecte sollen wir erkennen durch die Vernunft, also nach dem, was ihnen nothwendig ist und zukommt; unsere Vernunft Erkenntniße sollen also den Character der Nothwendigkeit an sich haben. Wir können erkennen entweder 1 Was da ist, oder 2 Was da seyn soll. Jenes gehört zur Natur, dieses zur Freyheit. Natur ist der Inbegrif deßen was da ist, und der Inbegrif deßen was da seyn soll, ist Sitten. Wir haben also 2 Theile der Philosophie. Die Philosophie der Natur betrachtet Dinge die da sind. Philosophie der Sitten geht auf freye Handlungen, die geschehen sollen. Da wir oben gesagt haben, daß es in ieder Wissenschaft eine Metaphysic gäbe, so können wir uns auch eine Metaphysic der Natur denken, die die Principien der Dinge insofern sie sind, enthält — und eine Metaphysic der Sitten, die die Principien der Möglichkeit der Dinge insofern sie seyen sollen, enthält, das Sollen geht aber nur auf freye Handlungen. Metaphysic der Natur hat verschiedne Theile, sie ist Philosophie der a körperlichen, b denkenden, c gesamten Natur, d des obersten Grundes aller Natur. Die Gegenstände der Metaphysic sind a Natur oder Welt, b der Welt Urheber, also Cosmologia generalis und Theologia rationalis. Wir erkennen die Obiecte entweder durch den äußeren Sinn i.e. Physica generalis oder durch den innern Sinn, i.e. Psychologia rationalis nach Wolffs Eintheilung ; ob sie gleich unrichtig ist, rechnet man zur Cosmologie nur allein Physica generalis und eine Psychologia rationalis apart.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s02-017",
     "kind": "text",
     "aa": 754,
     "text": "Alle unsere Erkenntniße sind theoretisch, die die Dinge betrachten wie sie sind; oder practisch, die da sagen, wie etwas seyn soll und die Nothwendigkeit an sich haben etc. Wir handlen hier die Metaphysic der Natur ab und werden von der Metaphysic der Sitten (welche die Lebens Regeln beiseite setzt, die wir von der Natur der Seele aus der Erfahrung abstrahiren). nur etwas aus der theologia naturalis entnehmen, wo wir Gott als Gesetzgeber denken.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s02-018",
     "kind": "text",
     "aa": 754,
     "aaEnd": 756,
     "pages": [
      {
       "p": 755,
       "i": 1128
      },
      {
       "p": 756,
       "i": 3710
      }
     ],
     "ms": [
      {
       "p": 15,
       "i": 442
      },
      {
       "p": 16,
       "i": 1461
      },
      {
       "p": 17,
       "i": 2586,
       "raw": "n",
       "inferred": true
      },
      {
       "p": 18,
       "i": 3448,
       "approx": true
      },
      {
       "p": null,
       "i": 3712,
       "raw": "18",
       "unresolved": true
      }
     ],
     "text": "Metaphysic der Sitten ist reine Moral, die setzen wir ganz bey Seite. Metaphysic der Natur enthält die Principien des speculativen Gebrauchs der Vernunft, und Metaphysic der Sitten die Principien des practischen Gebrauchs der Vernunft; alles was da ist, kann eingetheilt werden A in das, was den Sinnen gegeben ist, und B in das, was den Gebrauch der Sinne zwar übersteiget, aber mit den Gegenständen der Sinne zusammenhängt. — ad A die Gegenstände der Sinne sind entweder Gegenstände des äußern Sinns der fünf Körper-Sinne, oder des innern Sinns, das ist Seele. Wir haben also die Körperlehre und Seelenlehre ; ad B betrachten wir den Inbegriff aller Gegenstände der Sinne, d. i. die gesamte Natur. Wir können auch denken die ganze Reihe der Dinge und denn müßen wir einen obersten Urheber der Natur annehmen, d. i. Gott ; dasistder lezteTheilder Metaphysic. Die Metaphysic der körperlichen Natur ist Physica rationalis, der denkenden ist Psychologia rationalis, der gesamten Natur oder der Welt ist Cosmologia rationalis, des obersten Urhebers der Natur und der gesamten Wesen Theologia naturalis. Der Begrif von einem Wesen, insoferne es den Grund der Möglichkeit der gesamten Natur enthält, ist der Begrif von Gott. Der lezte Theil der Metaphysic ist also Theologia rationalis. Nun sehen wir wohl ein, daß alles empirische wegfallen muß. Denn sonsten wäre es nicht Philosophia pura. Der Begriff des Körpers ist aber doch ein empirischer Begriff und so auch der Wissenschaft; dies heißt das, was product der Vernunft ist und von aller Erfahrung abgesondert. In allen Wissenschaften mäßen wir so viel als möglich die Stücke, die heterogen sind, weil sie aus verschiedenen Erkenntnißquellen entspringen, absondern, wie viel auf bloßer Philosophie und bloßer Erfahrung beruhet, z. B. in der Naturlehre ist manches a priori, z. B. nichts geschieht ohne zureichenden Grund, die Substanz vergeht nicht, sondern nur die Form usw. Nehme ich dies (apart und abgesondert von dem was die Erfahrung lehrt) mit allen Folgen, die daraus können gezogen werden, so ist das die Metaphysic der Naturlehre, so giebts also eine Metaphysic der politic, Gesetzgebung usw., doch kann sie nur stattfinden wo Vernunftsprincipien sind; Metaphysic der Geschichte ist nichts. Eine solche Metaphysic ist sehr gut, denn fehle ich in einer Wissenschaft, so kann ich gleich sehen, ob es an der Vernunft hege oder Erfahrung und Täuschung der Sinne. Im System der Metaphysic muß der Gegenstand der Philosophie liegen, es ist der Umfang alles dessen, was reine Vernunft nur denken kann — es enthält alles das zusammen, was, wie oben gesagt, in den verschiedenen Wissenschaften vertheilt ist. Metaphysic ist die größte Cultur der menschlichen Vernunft. Wir lernen alle Täuschungen kennen, die Ursache derselben einsehen und sie vermeiden, sie trägt die Elementar Begriffe vor, z. B. Substanz, Nothwendigkeit und Grundsätze, deren sich die Vernunft überall bedient. In ieder Wissenschaft also, wo Vernunft herrscht, muß eine Metaphysic möglich seyn, z. B. von der Naturlehre, nehmlich was die Vernunft vor principien hat ohne Erfahrung. Selbst Mathematic veranstaltet eine Metaphysic: sie bezieht sich nur auf Gegenstände insoferne sie eine Größe haben — und der allgemeine Vernunft Gebrauch der Principien auf alle Gegenstände liegt der Mathematic zum Grunde und ist ihre Metaphysic. — Mathematic, kann man sagen, ist die Philosophie aller Philosophie — Transcendental Philosophie ist das in Ansehung der Metaphysic, was Logic in Ansehung der ganzen Philosophie ist. — Logic enthält die allgemeinen Regeln des Gebrauchs des Verstandes und ist insoferne eine Einleitung in alle Philosophie. Transcendental Philosophie ist eine Einleitung in philosophiam puram, welche ein Theil der gesamten Philosophie ist. Wir erwägen in der Transcendental Philosophie nicht obiecte, sondern die Vernunft selbst, so wie wir in der allgemeinen Metaphysic nur den Verstand und seine Regeln betrachten. Man könnte also die Transcendental Philosophie auch Transcendentale Logic nennen. Sie beschäftigt sich mit den Quellen, dem Umfang und den Gränzen der reinen Vernunft, ohne sich mit den Objecten abzugeben. Daher ist es falsch, sie Ontologiam zu nennen. Da betrachten wir die Dinge schon nach ihren allgemeinen Eigenschaften. Transcendentale Logic abstrahirt von alle dem. sie ist eine Art von Selbst Erkenntniß. Die Vernunft probirt, ob sie nicht auf den Flügeln der Ideen sich über die Erfahrung hinweg setzen kann. Sie redet z.E. vom geistigen Wesen. — - Was hat sie nun für Quellen, um ein System von solchen Dingen zu etabliren? Wenn sie dieses erklärt hat, so frägt sichs, auf welche Dinge wird dieses angewandt werden können? Sie geht also nicht aufs Obiect, sondern Subiect — nicht auf Dinge, sondern den Quell, Umfang und Gränzen der Vernunft.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 16,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s02-019",
     "kind": "text",
     "aa": 756,
     "ms": [
      {
       "p": 19,
       "i": 0
      }
     ],
     "text": "Begrif der Seele.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s02-020",
     "kind": "text",
     "aa": 756,
     "text": "Seele nennen wir nehmlich das, deßen ich mir bewußt bin, indem ich denke. Wie kann also Physica und Psychologia rationalis hieher gebracht werden? Wir merken, daß das Obiect durch die Erfahrung kann gegeben seyn, wenn wir es nur nach principien, die a priori sind, betrachten. Z.E. der Begriff eines denkenden und körperlichen Wesens ist durch die Erfahrung gegeben. Wenn ich aber die principia der Eigenschaften nicht aus der Erfahrung nehme, so ist das Obiect gegeben, die principia aber nicht, kann also in die Metaphysic gehören. Also liegen Physica und Psychologia rationalis im Felde der Metaphysic. Die empirische Körperlehre nennt man die eigentliche Naturlehre, Physic die gehört nicht her. Es giebt auch Psychologia empirica, wo ich Beobachtungen voraus setzen muß, um etwas von der Seele zu sagen. — Sie gehört auch nicht her; die Psychologie wie sie hier abgehandelt wird, hat aber doch einen rationalen und empirischen feil. Dieser betrachtet die Seele aus Erfahrung jener aus Begrifen.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s02-021",
     "kind": "text",
     "aa": 756,
     "aaEnd": 757,
     "pages": [
      {
       "p": 757,
       "i": 261
      }
     ],
     "ms": [
      {
       "p": 20,
       "i": 0
      }
     ],
     "text": "Wie kommt nun der empirische Theil in die Metaphysic? Aus dei schlechten, oben angeführten, Definition physicae empiricae lesen sie es nicht, aber das sehen sie nicht ein, daß Psychologia empirica auch nicht dahin gehörte: Freude, Vergnügen und alle Bewegungen des Gemüths sind doch lauter Beobachtungen. Eine Psychologie der Beobachtungen könnte man Anthropologie nennen. — Wir werden sie hier aber tractiren, weil die Wissenschaften eingetheilt werden, nicht nur wie sie die Vernunft paart, sondern wie es der Academische Unterricht verlangt. Sie ist noch nicht so angewachsen, daß ein besonderes Collegium daraus könnte gemacht werden. Man schob sie daher in die Metaphysic. Es ist hier eine Metabasis eis allo genos. Von ihr kann man noch Anthropologie unterscheiden, wenn man darunter eine Kenntniß des Menschen versteht, insoferne sie pragmatisch ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s03",
   "title": "Geschichte der Metaphysic.",
   "titleSrc": "heading",
   "headings": [
    "Geschichte der Metaphysic."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s03-001",
     "kind": "heading",
     "aa": 757,
     "text": "Geschichte der Metaphysic."
    },
    {
     "id": "metaphysik-mrongovius-s03-002",
     "kind": "text",
     "aa": 757,
     "aaEnd": 758,
     "pages": [
      {
       "p": 758,
       "i": 1693
      }
     ],
     "ms": [
      {
       "p": 21,
       "i": 99
      },
      {
       "p": 22,
       "i": 1146
      },
      {
       "p": 23,
       "i": 2222
      },
      {
       "p": 24,
       "i": 3234
      }
     ],
     "text": "So alt die Vernunft ist, so alt sind auch metaphysische Untersuchungen. Es ist merkwürdig, daß die Menschen eher angefangen, über das, was die Sinne übersteigt, zu urtheilen, als über das, was ihnen gegeben ist. Die Naturlehre war nur schlecht bearbeitet. Die Ursach ist wohl die: über Natur zu philosophieren gehört anhaltender Fleiß, Beobachtung, Sammlung allerley Erfahrungsgesetze. Die Ideen des Verstandes und der Vernunft findt aber ein ieder in sich selbst und man spürt sie gleichsam aus sich. Ohne allen Zweifel ist der menschliche Verstand auch dazu angetrieben, durch natürliche Bedürfnisse das zu kennen, wo alle seine Zwecke herauslaufen. Er ist mit dem, was ihm die Sinnen Welt liefert, nicht zufrieden, sondern er muß wissen, was ihm in der Zukunft bevorsteht — der muß von seinem Leben einen geringen Begriff haben, der da glaubt, daß mit dem Tode alles aufhöre. Diese Bedürfnisse, Gott und die andre Welt zu kennen, die mit dem Intereße der menschlichen Vernunft so genau Zusammenhängen, sind an der Natur vorbeygegangen, die weit weniger Intereße für die Menschen hat. Obgleich dieses alles so sehr schwierig war, so würden sie doch durch die Wichtigkeit der Obiecte angetrieben zu weitern Untersuchungen, wenn gleich Einige fehlgeschlagen. Vor den Griechen haben noch keine Völker Metaphysik, so wie keine Philosophie gehabt. Wenn wir richtig zu rechnen anfangen, so finden wir eine Zeit, in welcher die Griechische Sprache so eingeschränkt war und ungeschickt, philosophische Betrachtungen damit auszudrücken, daß alles poetisch mußte ausgedrückt werden. Orpheus, Hesiod und andre haben in ihren Poesien viele Funken von Philosophie. Damals war die Art, um sich über Ideen auszudrücken, sie in Bilder einzukleiden, so daß man in der Regel Philosophie poetisch vorgetragen findet, welches eines Teils auch darum geschähe, um die Religion dem Gedächtniß desto beßer einzuprägen. Poesie aber ist uns immer ein Spiel der Sinnlichkeit. Man sagt, daß Pherekydes der erste Philosoph gewesen, der sich in Prosa ausgedrückt. Wir haben aber nichts von ihm und Heraclitus, deßen Schriften überaus dunkel gewesen, so daß auch Socrates, der sie kannte, denn nachher sind sie verloren gegangen, sagte: das was er verstanden, sey vortrefflich, also glaubt er, daß das, was er nicht verstanden, auch so seyn werde. (Dem Heraclit wurd es so schwer, daß er sagte: Delio natatore opus est). Das kommt daher, weil nicht genug Wörter da waren, und die erfundenen waren neu, größtentheils also unbekannt. Impoßibile ist kein lateinisches Wort. Cicero sagt, fieri necjuit, oder man brauchte ocSuvoctoi;. Neue Wörter zu erfinden ist nicht so leicht als man glaubt, weil sie wieder den Geschmack sind und dadurch der Geschmack ein Hinderniß der Philosophie ist. Pythagoras hat die Philosojihie noch mehr in die reine Vernunft Sprache eingekleidet. Aber der Fehler, die Ideen und Begriffe in Bilder einzukleiden, um ihnen die rechte Bedeutung zu geben, hing der Griechischen Philosophie noch lange an, wodurch ein Begriff viel von seiner Reinigkeit verlieret. Aristoteles hat es hierin am weitesten gebracht, zu den abstractesten Ideen erfand er Wörter, wozu die Griechische Sprache sehr gelenksam war. Hierin ist ihr die deutsche ähnlich. Diese hat viele treffende Ausdrücke. Paßt das eine Wort nicht, so paßt das andere, und eines drückt immer mehr aus als das andere. Dieses findet bey der Französischen gar nicht statt. H. Prof. Kant schreibt dieses her von der Ausbreitung der Religion in Deutschland : die Missionarii hatten keine rechte Wörter, ihre Gedanken und Begriffe auszudrücken, sie erfanden also neue, die mit dem Lateinischen sehr verwandt sind, weil sie das wußten. Z.E. Einfaltig bedeutet eigentlich das, was eine Falte hat, auf Lateinisch Simplex, das kommt her von simplus und plica, die Falte; dadurch ist unsere Sprache sehr bereichert. Zu den Zeiten des Pythagoras und der Elatischen Secte herrschte ein Philosophisches System, wo man Gegenstände der Sinne und des Verstandes unterschied. Die ersten hießen sensibilia und Phaenomena, die andern intelligibilia und Noumena. Die Eleatische Secte sagte: in sensibus nihil ineße ven. Sie geben Erscheinungen, nicht wie die Sachen sind, sondern wie sie uns afficiren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s03-003",
     "kind": "text",
     "aa": 759,
     "text": "Man hätte nicht die Dinge in intelligibilia und sensibilia oder Noumena und Phaenomena eintheilen sollen, sondern sagen, unsere Erkenntniß ist 2fach (1 Intellektuell und 2 sensitiv), das hätte verhindert, daß ein mystischer Begriff vom Intellektuellen entstanden wäre, der sich vom Logischen entfernet, wodurch die Metaphysic in Schwärmerey verfiel. Sie hätten die Philosophie nicht in Ansehung der Gegenstände eintheilen sollen.",
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s03-004",
     "kind": "text",
     "aa": 759,
     "ms": [
      {
       "p": 25,
       "i": 69
      }
     ],
     "text": "Hier entstanden 2 Partheyen, von denen wir zwey sehr berühmte Häupterkennen, kurz vor oder zu Alexanders Zeiten. Nehmlich Epicurus, Philosoph der Sinnlichkeit, und Plato, Philosoph der Ideen. Dieser sagte, in den Sinnen wäre keine Realitaet, die sinnlichen Erscheinungen könnten anders seyn, wenn wir andere Sinne hätten, ohne daß dadurch der Gegenstand verändert würde.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s03-005",
     "kind": "text",
     "aa": 759,
     "aaEnd": 760,
     "pages": [
      {
       "p": 760,
       "i": 1574
      }
     ],
     "ms": [
      {
       "p": 26,
       "i": 644,
       "raw": "2ß",
       "inferred": true
      },
      {
       "p": 27,
       "i": 1786
      }
     ],
     "text": "Anmerkung. Man hat Sinn und Erscheinung verwechselt. Schein liegt im Verstände, aber in den Sinnen ist kein falscher Schein. Sie geben Erscheinungen, und der Verstand urtheilt darüber; nun kann der Verstand falsch urtheilen durch Verbindung der Erscheinung, welches den Schein hervorbringt, woran die Sinne nicht eigentlich schuld sind, sondern der Verstand, weil er das nicht genau genug untersucht, worüber er urtheilt, ehe er urtheilt — die von der Seite der Intellectualisten sagten: nur im Verstände ist Wahrheit, und in den Sinnen, setzten einige noch hinzu, ist falscher Schein. Es war in den alten Zeiten die Methode, die sich noch von den Eleusinischen Geheimnissen herleitet. Einige Lehren exoterisch, i.e. zu Jedermanns Gebrauch und Captu vorzutragen, und andre Esoterisch für Confidente und Vertraute unter dem Siegel der Verschwiegenheit, sozusagen intra vela. Z.E. von der einen unsichtbaren Gottheit, von der Richtigkeit ihrer Theogonien und Mythologien. Zu gewißer Zeit, e.g. bey Entstehung solcher Lehren, kann dieses gut seyn, allein nachher kann es aufhören, und muß auch, weil sie nicht berechtigt sind, das Monopolium mit der Weisheit allein zu treiben. Zu Platos Zeiten wurden einige Esoterische Lehren; Exoterische jedoch aber immer zurückgehalten. Zu seiner Zeit entstand auch die Frage: wodurch entstehen unsre Intellectuelle Erkenntniße? Die sensitive Erkenntniße dürfen nicht erklärt werden, die entspringen aus den Sinnen. — Wir merken, entweder hat unser Verstand ein Anschauungs Vermögen von anderer Art als das sinnliche, dieses liefert nur Erscheinungen der Dinge, jenes aber wie sie sind. Denn wären es Intellectualia per intuitus; oder er hat das Vermögen der Begriffe, sich von den Anschauungen der Dinge durch Reflexion Begriffe zu machen, das wären Intellectualia per conceptus. Intellectualia per intuitus sind Obiecte, die der Verstand nur allein anschauen kann, und per conceptus wären Begriffe, die sich der Verstand macht. Das erste ist ein bloßes Hirngespinst; der Verstand kann nicht anschauen, sondern die Sinne, also sind blos intellectualia per conceptus. Die erste nennt Herr Prof. Kant Mystische, die andere Logische Intellectualia.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s03-006",
     "kind": "text",
     "aa": 760,
     "text": "Darnach theilten sich die Philosophen ein. Plato behauptete mystische Intellectualia, Aristoteles logische.",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s03-007",
     "kind": "text",
     "aa": 760,
     "ms": [
      {
       "p": null,
       "i": 61,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Aristoteles nahm Noumena an, nicht als Obiect der Anschauung des Verstandes, sondern als intellectuelle Begriffe.",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s03-008",
     "kind": "text",
     "aa": 760,
     "aaEnd": 761,
     "pages": [
      {
       "p": 761,
       "i": 1513
      }
     ],
     "ms": [
      {
       "p": 28,
       "i": 607
      },
      {
       "p": 29,
       "i": 1742
      }
     ],
     "text": "Plato sagt, wir haben Begriffe, die nicht von den Sinnen entlehnt sind, z.E. vom Urwesen etc., die haben wir durch eine höhere Anschauung erlangt, die unser Verstand vorher gehabt, darin Anschauung der Dinge, also die über die Sinne gehen, intuitive, gewesen. Wir haben, sagt er, eine Anschauung Gottes gehabt, woraus wir alle übrige Ideen hergenommen, von denen wir jetzt nur noch schwache Erinnerungen haben, die uns bey Gelegenheit der sinnlichen Erscheinungen beyfallen. Jetzt haben wir das nicht mehr, weil unsre Seele im Körper als in einem Gefängniß eingeschloßen ist. Alle Begriffe von der Gottheit sind nur Abdrücke der Anschauung, die die Seele gehabt, ehe sie mit dem Körper vereinigt ist. Logische Intellectualia entstehen durch die Reflexion des Verstandes. Er reflectieit über die Gegenstände der Sinne; läßt er den Gegenstand weg, so ist der Begriff ein logisches Intellectuale : Z.E. daß das Waßer Bei gab läuft, wenn sonst kein Hinderniß ist, sehen wir aus der Erfahrung. Der Verstand erkennt das als noth wendig. Läßt er nun das Wasser weglaufen, so hat er den Begriff vom Nothwendigen, welches ein logisches Intellectuale ist. Aristoteles hielt alles für logische Intellectualia. Durch diesen Zwiespalt entstand ein Philosophischer Streit, ob die conceptus intellecti conati oder acquisiti wären. Nach Plato wären es conati, denn erworben hätten wir sie wenigstens jetzt nicht, sondern ein ieder bringt sie mit als renovirte Ideen (Anmerkung: Ideen des Plato gehen auf mystische Anschauung und sind unterschieden von den conceptus des Aristoteles.) Wir merken, unser Verstand kann denken, aber nicht anschauen. Nimmt man das letztere an, so sind sie alle conati. Aristoteles sagt: die Verstandes Begriffe sind nicht conati sondern acquisiti, wir haben sie erlangt bey Gelegenheit der Erfahrung, wenn wir über Gegenstände der Sinne reflectiren. Jetzt sagt man so: Unsre Begriffe sind angebohren, aber nicht so wie Plato sagt, daß es renovirte Ideen sind, die wir ursprünglich erworben, sondern Gott habe gewiße Grundbegriffe in ieden gelegt, den Verstand nachher zu leiten. Dazu gehört der Begriff von Ursach und Wirkung. Wir mögen die Intellectualia logisch oder mystisch nehmen, so können wir doch fragen, sind sie uns angeboren, da wir nicht durch Reflexion haben darauf kommen können und dürfen, oder ist uns nichts angeboren als die Verstandes Fähigkeit. In neuern Zeiten war Locke der Anhänger des Aristoteles. Der sagte: Nihil est in intellectu quod non antea fuit in sensu.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s03-009",
     "kind": "text",
     "aa": 761,
     "text": "Locke behauptete: Ein geübter Verstand könne sogar die Art einsehen, wie etwas aus nichts werden könne, und doch wollte er alle Erkenntniß aus der Erfahrung herholen. Er verfuhr sehr inconsequent.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s03-010",
     "kind": "text",
     "aa": 761,
     "aaEnd": 762,
     "pages": [
      {
       "p": 762,
       "i": 1193
      }
     ],
     "ms": [
      {
       "p": 30,
       "i": 291
      },
      {
       "p": 31,
       "i": 1395
      },
      {
       "p": 32,
       "i": 2413
      },
      {
       "p": 33,
       "i": 3636,
       "raw": "83",
       "inferred": true
      }
     ],
     "text": "Leibnitz war der Anhänger des Plato, glaubte ideas connatas, aber das mystische ließ er weg. Crusius behauptete auch dieses, ob er sich gleich nicht so dunkel darüber ausdrückt. — Man kann sagen, daß die Schule des Plato noch etwas von dem Mystischen intellectus behalten hat. Diese Meinung ist aber fanatisch ; da kann sich ieder viel einbilden — z.E. mit Geistern in Gemeinschaft zu stehen usw. Legen wir die logischen Intellectualia zum Grunde, so entsteht die Frage, wie kommen wir dazu? Z.E. der Begriff vom Nothwendigen, Zufälligen usw. sind lauter Begriffe des Verstandes. Nun kann man 2 Wege annehmen: entweder sind sie entstanden aus dem Verstand, denn hängt man dem Plato an, aber nicht in seinem Mysticismo, sondern insoferne er den Ursprung derselben behauptet; und Aristoteles sagte: nihil est in intellectu quod non antea fuit in sensu. Es ist hier aber ein Mißverständniß : unsre Begriffe entstehen nie anders als bey Gelegenheit der Gegenstände der Sinne, über welche der Verstand reflectirt. Hierin hat Aristoteles recht. Denn wenn uns nichts gegeben ist, so können wir über nichts reflectiren. Plato sagt hingegen, sie sind nicht von den Sinnen entlehnt, darin hatte er auch recht, denn könnten wol unsre Sinne den Begriff vom Nothwendigen oder Möglichen zustande bringen? In welchem sollte er liegen, im Geruch, im Geschmack usw. ? Die Begriffe des Verstandes sind nichts als Handlungen der reflexion. Da ich aber unmöglich reflectiren kann, wenn ich keinen Gegenstand habe; da die Sinne den uns liefern, so würde der Verstand nicht reflectiren, wenn die Sinne keinen Stof gäben. Der reine Verstand bringt die Begriffe hervor, aber sie würden nicht statt finden, wenn kein Stof da wäre. Plato hatte also doch auch recht. Aristoteles hatte die Absicht zu behaupten, die Materie käme aus den Sinnen, aber nicht die Form; hätte er sich so ausgedrückt, und Plato wieder: die Form zu reflectiren ist das, was der Verstand ohnabhängig von den Sinnen hat, so wäre kein Streit entstanden und könnten beyde System Arten sehr wohl verbunden werden. Eins kann hier das andere nicht entbehren. Alle Verstandesbegriffe würden nichts bedeuten, wenn die Sinne keine Gegenstände und Beyspiele lieferten. Wenn ich z.E. noch so sehr erklärte, was eine Substanz wäre, und wüßte kein Beyspiel zu geben, so wäre alles nichts, und wieder ohne Verstand würden wir keine Begriffe haben und alles würden wir anstaunen. Durch Verstandes Begriffe denken wir die Form, wie der Verstand von den Erscheinungen Begriffe macht, nun kann ich die Erscheinungen weglaßen, aber der Begriff hätte doch ohne sie keine Bedeutung. Das ist aber ganz richtig, daß die Verstandes Begriffe nicht von den Sinnen entlehnt sind, denn sie entstehen aus Reflexion, die Sinne reflectiren aber nicht. Nun kann man fehlen, daß man sagt, alle Verstandes Begriffe sind aus den Sinnen entlehnt, und daran ist Aristoteles schuldig; er hatte seine Meinung nicht bestimmt genug ausgedrückt, und Plato geht wieder zu weit und sagt, wir haben Verstandesvorstellungen ohnabhängig von den Sinnen ; der Verstand würde ohne alle Sinne Dinge erkennen, ia noch weit beßer, denn die Sinne, statt uns behilflich zu seyn, hindern uns noch. Jetzt verfällt er aber schon ins fanatische: er sagt, wir sehen nur die Schatten der Dinge; der Verstand die Dinge an sich selbst. Hätte er gesagt, wir haben Begriffe, die wir nicht aus den Sinnen ziehen, sondern die im Verstand ohnabhängig von den Sinnen statt finden, und hätte zugegeben, daß sie allein die Gegenstände nicht geben, woferne sie die Sinne nicht liefern. Der Aristoteles schwingt sich bey seinem symbolischen Nihil etc. etc. dochzu Dingen, die gänzlich die Sinne übersteigen, z.E. das Weltganze, Urwesen. Hievon können uns die Sinne nichts lehren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s03-011",
     "kind": "text",
     "aa": 763,
     "text": "Aristoteles hatte recht, daß es keine conceptus connatos gäbe, aber das berechtigte ihn nicht zu dem Satz: Nihil est in intellectu quod non antea fuerit in sensu. Darauf baut alle Metaphysic und Aristoteles ist unter den uns bekannten alten Metaphysicern der größte.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s03-012",
     "kind": "text",
     "aa": 763,
     "aaEnd": 764,
     "pages": [
      {
       "p": 764,
       "i": 2216
      }
     ],
     "ms": [
      {
       "p": 34,
       "i": 1059
      },
      {
       "p": 35,
       "i": 2355
      }
     ],
     "text": "Wir werden zeigen, daß alle Begriffe acquisiti sind, nur nicht alle von den Sinnen, viele haben wir auch durch den reinen Vernunftgebrauch. Ein gelehrter verfährt inconsequent, wenn er seinen angenommenen Grundsätzen zuwider handelt, und die, die alle Verstandesbegriffe aus der Erfahrung nehmen, nennt Herr Prof. Kant Empiristen, und nun sagen wir, fast alle Empiristen, Aristoteles, Locke usw. handeln inconsequent. Denn wenn alle Begriffe aus der Erfahrung entlehnt sind, so können sie doch nichts annehmen, als auf Erfahrung beruht. Gott aber ist in keiner Erfahrung. Wir können also nichts von ihm reden. Zu denen, die sehr consequent verfahren, gehört Epicur. Von den Göttern schien Epicur zu heuchlen und darum, um nicht in die Censur der Priester zu kommen. Plato ist der Philosoph des Intellekts und Epicur der Sinnlichkeit. Obgleich seine Sätze seltsam waren, muß man ihn doch entschuldigen, weil man ihn vielleicht nicht recht verstanden. Er suchte durch seine Philosophie die Beweise der Dinge einzuschränken, aber nicht die Dinge selbst. Das ist immer ein großer Unterschied. Er sagte, kein Begriff hat eine Bedeutung, wenn ihm nicht ein correspondirender Gegenstand in der Erfahrung gegeben werden kann. Wir haben keine Schrift von ihm, seine Meinungen aber haben wir vom Poeten Lucrez. Einem Poeten muß man in der Philosophie nicht viel Glauben beymeßen. Er sagte: nur über die Gegenstände der Sinne können wir reflectiren. Er machte sich auch Götter, die aber ganz sinnlich waren, nehmlich aus den feinsten atomis der Welt zusammen gesetzt. Leibniz war ein Anhänger des Plato; er fing an, weiter zu gehen als die Sinne reichten, aber er sagte nicht, wie dieses zugehe, daß Verstandesbegriffe, die wir ohne Sinne haben, in Ansehung der Gegenstände der Sinne eine Gültigkeit haben. Plato und Aristoteles hatten eine Metaphysic. Epicur aber keine. Bey ihm war alles Physic, Naturwissenschaft. Er sagte, es könnte keine Grundsätze geben als die Erfahrung bestätiget. Hierin mag er unrecht haben oder nicht, so war er doch der Antimetaphysicer der Alten. Zum Unterschiede der Philosophischen Untersuchungen merken wir folgendes. Wir können unterscheiden Physiologie, Critic der Reinen Vernunft und System der Wissenschaft. Physiologie der Reinen Vernunft ist die Nachforschung über den Ursprung der Begriffe. Es ist eine Untersuchung von einer re facti, es ist, wie die Juristen sagen, quaestio facti. Wie ist er dazu gekommen?",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s03-013",
     "kind": "text",
     "aa": 764,
     "aaEnd": 765,
     "pages": [
      {
       "p": 765,
       "i": 2282
      }
     ],
     "ms": [
      {
       "p": 36,
       "i": 1130
      },
      {
       "p": 37,
       "i": 2420,
       "approx": true
      }
     ],
     "text": "Diese Untersuchung kann sehr artig seyn, gehört aber nicht in die Metaphysic; aber da wir solche Begriffe einmal haben, so müßen wir auch fragen, mit welchem Rechte bedienen wir uns derselben. Diese Frage hat einen weit wichtigeren Einfluß in die Metaphysic, denn das ist die Critic, also quaestio iuris — iene Frage ist die Beschäftigung der Philosophie gewesen, des Locke und Leibniz, iener schrieb ein Buch de intellectu humano und dieser gab eines in französischer Sprache unter diesem Titel heraus. Locke hängt dem Aristoteles an und behauptet, sie wären von der Erfahrung durch Reflexionen. Leibniz hangt dem Plato an, aber nicht seinem Mysticismo und sagt, daß die Verstandesbegriffe vor der Kenntniß aller sinnlichen Gegenstände gewesen. — Die Physiologie ist die Betrachtung von der Natur der Vernunft: wie die Vernunft in uns Verstandes Begriffe erzeugt, sie ist eigentlich ein Teil der Psychologie. An Critic der reinen Vernunft hat bis ietzt noch keiner gedacht. Die Autoren trugen ein System vor ohne Physiologie wie z.E. Wolf, der trägt auch ein System vor ohne anzugeben, wie dieses alles entstanden. Er untersucht nur den Inhalt, aber wie weit geht der Gebrauch der reinen Vernunft Erkenntniß, mit welchem Rechte bedienen wir uns derselben, das ist Critic, also quaestio iuris. Critic ist also von Physiologie und System weit unterschieden. Z.E. man beweiset, daß ein Geist denket; bey diesen Gründen kann man verschiedne Untersuchungen anstellen. 1. Wenn diese Gründe bey uns die Überzeugung hervorbringen, und die Untersuchung erlaubt auch Wolff. Wie es doch möglich sey, daß die Vernunft Eigenschaften wißen kann von Dingen, die in keiner Erfahrung gegeben sind, dies gehört zur Critic. In vielen Fällen scheint sie unnöthig zu seyn, denn es scheint überflüßig, von Erkenntnißen, die wir haben, zu sehen, ob sie möglich sind. Wenn wir aber sehen werden, welchen Illusionen die Vernunft unterworfen ist, so werden wir ihre Nothwendigkeit einsehen. Jezund haben wir also vor uns eine Beschäftigung von solcher Art, als noch nie getrieben ist. Sehen wir das Resultat aller durch die Metaphysic erworbenen Erkenntniße, so sehen wir, daß sie nicht länger so bestehen kann. Es sind genug Systeme abgefaßt, welche auch da, wo sie übereinstimmen, nicht einmal den Anfall eines hämischen Scepticismus aushalten. Sie enthalten keinen Nutzen, wenn wir das Principium contradictionis ausnehmen, das so beschaffen ist , daß es den Angriffen eines Gegners , der kein Sys tematicer ist , aushalten und ihnen wiederstehen kann. Männer, die ihre reine Vernunft nicht umsonst haben bearbeiten wollen, haben sie entweder aufgegeben oder so lange fortgesetzt, bis sie den Stein der Weisen gefunden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s03-014",
     "kind": "text",
     "aa": 765,
     "ms": [
      {
       "p": 38,
       "i": 1279
      }
     ],
     "text": "Welchen Weg schlagen wir nun ein, den ersten? Das ist unmöglich, weil wir dem Verstand die Fragen nicht abgewöhnen können. Sie sind so in der Natur der Vernunft verwebt, daß wir ihrer nicht loß werden können. Auch alle Verächter der Metaphysic, die sich dadurch ein Ansehen heiterer Köpfe haben geben wollen, hatten, selbst Voltaire, ihre eigene Metaphysic. Denn ein ieder wird doch etwas von seiner Seele denken. Diese Entschließung kann also nicht Stich halten. Die Vernunft würde lieber alle andre Wißenschaften aufgeben wollen als diese. Diese Fragen betreffen das höchste Intereße derselben, und die Vernunft soll sie nicht mehr an uns thun, heißt, sie soll aufhören, Vernunft zu seyn. Es bleibt uns also Critic der Vernunft übrig. Sie critisiret ihren reinen Gebrauch, aus welchem diese die Principien schöpft, ohnabhängig von der Erfahrung, wie weit sie gehen kann, und die Critic kann völlig befriedigend seyn. Wir haben bis dato in der Metaphysic noch nichts befriedigendes gehabt, denn alle Systeme können erschüttert werden. Der Lehrer der Metaphysic kann so gehen, daß er seinen Schülern die Schwäche der Beweise verhehlt und blos mit dieser Schein Weisheit prahlt. In der Zukunft, wenn sie mehreres darüber nachlesen und denken, so werden sie sehen, wie wenig alles Stich hielte, wodurch viele Köpfe verdorben waren. Unsre Vernunft kann ohne die Critic mächtige Schritte thun ; sie überzeugt sich von der Richtigkeit ihres Gebrauchs durch die gründlichen Fortschritte. Z.E. bey der Mathematic können wir uns der Vernunft sicher bedienen ohne sie vorher zu critisiren, die Ursache ist die, weil sie ihre Begriffe der Anschauung darlegen kann, weiter aber muß sie auch nicht gehen. Die Anschauung überzeugt sie von der Richtigkeit ihres Gebrauchs. In der Philosophie darf ich es nicht wagen, Erkenntniße zu Stande zu bringen, die eine vermeintliche Überzeugung haben, denn da können viele Illusionen stattfinden. In der Mathematic verhütet, wie gesagt, die Anschauung die Illusion, in der Metaphysic aber Critic. Wir sehen also die Nothwendigkeit derselben ein. Die Schwierigkeiten, die bey Erfindung einer Critic aufstoßen, müßen also überwunden werden.",
     "dehyphenated": 6,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s04",
   "title": "Der Nutzen der Metaphysic",
   "titleSrc": "heading",
   "headings": [
    "Der Nutzen der Metaphysic"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s04-001",
     "kind": "heading",
     "aa": 766,
     "text": "Der Nutzen der Metaphysic"
    },
    {
     "id": "metaphysik-mrongovius-s04-002",
     "kind": "text",
     "aa": 766,
     "ms": [
      {
       "p": 39,
       "i": 324
      }
     ],
     "text": "Nun fragen wir denn wie bey ieder Wißenschaft: welches ist der Zweck? Der Zweck ieder Wißenschaft kann seyn speculativ oder practisch. Wir haben die Absicht, entweder unsre Erkenntniße zu erweitern, oder die auf unser Intereße geht. Betrachten wir den ersten Fall, so sehen wir, daß die Gegenstände der speculation zweifach sind, entweder der Erfahrung, oder sie gehen über die Erfahrung. Um die ersten kennen zu lernen, brauchen wir keine Metaphysic. Nun fragen wir: möchte es wohl der Mühe lohnen, Metaphysic zu entwerfen zu dem Ende? — Was die Physic betrifft, so merken wir, sie erlaubt keine andre principia als die 1. aus der Erfahrung entlehnt sind. 2. Mathematische; 3. oder Philosophische, die dem sensu communi gemäß sind, und der Erfahrung — oder kürzer, ihre principien müßen aus der Erfahrung entlehnt seyn oder durch Erfahrung bestätigt werden. Dieses findet bey der Mathematic statt, die sind a priori, finden aber in der Erfahrung ihre Bestätigung. Daß iedes Ding seine Ursach hat, läßt Physic zu, denn die Erfahrung bestätigt es; aber weiter untersucht sie die Gründe nicht. Die Physic will keine metaphysischen principien haben. Eben so wenig dient Metaphysic dazu, eine tiefere Erfahrungs Kenntniß von der Seele zu geben. Wir können verschiedenes bey ihr entdecken, Folgerungen daraus ziehen, aber ohne alle Metaphysische principien — sondern sie müßen sich in der Erfahrung bestätigen. Die Metaphysic kann also zur Natur Erkenntniß nichts erhebliches beitragen. Denn um die Erscheinungen der Seele und des Körpers zu erklären, ist es am besten, die principien aus der Erfahrung zu nehmen, weil sie sonsten unzuverläßig sind.",
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s04-003",
     "kind": "text",
     "aa": 766,
     "aaEnd": 767,
     "pages": [
      {
       "p": 767,
       "i": 761
      }
     ],
     "ms": [
      {
       "p": 40,
       "i": 195
      }
     ],
     "text": "Die Verbindung zwischen Freunden ist gewißer als die zwischen Bürgern des Staats. Der Grund der Verbindung giebt einen Grad. Ordnung ist eine Qualität, dennoch kann sie bey einigen Dingen so großseyn als bey vielen; sie beruhet auf der Wahrheit der Regeln der Verbindung des mannigfaltigen. Die transcendentale Vollkommenheit ist dieselbe. Der Grund derselben beruht darauf, wie in mehreren ein Mannigfaltiges zusammenstimmt, desto mehr sind Vollkommenheit, unum ad quod varium consentitur est socius, ie mehr also socii sind, desto größer ist die Vollkommenheit, wenn ich sie nicht Metaphysisch nehme, ists nur beziehungsweise. Die Metaphysische Vollkommenheit ist der Grad der Realität, und den können wir nicht schätzen, weil wir keinen Begriff vom höchsten Grad der Realität haben. Der Autor redet ferner von der Größe der Veränderung. Auch die Einerleyheit kann groß oder klein seyn! Existentia determinationum oppositorum ist Veränderung. Die oppositi können nicht zugleich seyn, sondern succeßive. Das ist also existentia succeßiva. Ein Veränderliches ist das, in welchem determinatio oppositorum möglich ist; je größer die determinatio, desto größer ist die Veränderung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s04-004",
     "kind": "text",
     "aa": 767,
     "aaEnd": 768,
     "pages": [
      {
       "p": 768,
       "i": 2009
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "37",
       "unresolved": true
      },
      {
       "p": null,
       "i": 443,
       "raw": "38",
       "unresolved": true
      }
     ],
     "text": "Dieser transcendente Gebrauch der reinen Vernunft hat das Beschwerliche, daß man dabei nichts durch die Erfahrung bestätigen — aber das Vortheilhafte — daß keiner durch die Erfahrung wiederlegen kann. Im transcendenten Gebrauch der Vernunft concentrirt sich die Metaphysic, weil da die intereßantesten Objecte sind und in der Erfahrung sich keine Befriedigung findet. Des immanenten Gebrauchs der Vernunft wegen, würden wir uns nicht die Mühe geben, die Grundsätze zu beweisen und zu zergliedern — - und eine Wißenschaft zu machen — wenn uns dies nicht eine Vorbereitung schiene, zu den Ideen herauf zu steigen. Wir haben viele Erkenntniße a priori, die wir bei der Erfahrung nicht entbehren können. Z. B. wenn etwas geschieht, muß eine Ursache seyn. Dieser Satz ist wegen Müßen a priori — und bey der Erfahrung nothwendig, weil wir sonst keinen Zusammenhang in der Reihe der Erfahrungen haben. Zu den principien, die in der Erfahrung nothwendig sind, brauchen wir keine Metaphysic, ob es gleich gut ist — und Cultur des Verstandes, beides abzusondern, was in der Erfahrung der Vernunft und den Sinnen gehört. Zuerst müßen wir also den Gebrauch der reinen Vernunft in Ansehung der Erfahrung examiniren - — denn das ist der einfachste Gebrauch und das geschieht in der transcendentalen Analytic (Transcendental Philosophie ist die, welche die Möglichkeiten der Metaphysic untersucht), wo wir die Begriffe a priori, die zum Behuf der Erfahrung nothwendig sind, zergliedern — aber das ist doch eben von keinem Nutzen, z. B.: alles was geschieht usw. ist als ein Satz, der nur per inductionem wahr ist, schon brauchbar. Aber die Vernunft findet in der Erfahrung nicht ihre Befriedigung, sie fragt nach dem Warum und kann nicht immer, obgleich eine Zeitlang, das Darum finden. Sie wagt daher keinen Schritt aus dem I elde der Erfahrung und kommt auf Ideen, und hier kann man Vernunft nicht befriedigen — außer durch Kenntniße ihrer eigenen Natur und durch Beantwortungen, die durch Kenntniß ihrer Quellen Umfangs -und Gränzen können gegeben werden. Dieser Theil, dahin wir die Begriffe a priori rechnen, die über die Erfahrung gehen, heißt Transcendentale Dialectic, und hier ist Metaphysic nöthig, denn über den Gränzen der Erfahrung liegen die intereßantesten Objecte, und Metaphysic wird ihren Werth hernehmen von der nothwendigen Beziehung unsrer Vernunft auf Objecte über der Erfahrung. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s04-005",
     "kind": "text",
     "aa": 768,
     "ms": [
      {
       "p": null,
       "i": 503,
       "raw": "39",
       "unresolved": true
      }
     ],
     "text": "Es giebt 2erlei Gebrauch des reinen Verstandes: der immanente ist nehmlich, wo die Erkenntniße a priori ihre Objecte in der Erfahrung haben. Eben so giebt es auch Grund Sätze a priori, die auf Objecte der Erfahrung gehen, das ist reine Vernunft, aber im immanenten Gebrauch — und sondern wir die von der Erfahrung ab, so ist das analytic — und der transcendente, nehmlich wo die Erkenntniße a priori ihre Objecte nicht in der Erfahrung haben. Die Metaphysic, die den transcendenten Gebrauch der Vernunft vorträgt, beschäftigt sich mit Ideen und die ist das Feld der Notwendigkeiten — beym immanenten sind zwar auch welche, — aber nicht über die Richtigkeit der Sätze, der definitionen und der Beweise. Z. B. bis itzt sucht man nach einem Beweis des Satzes des zureichenden Grundes — aber man braucht ihn doch — - und es zweifelt keiner daran — aber beim transcendenten ist kein Satz, deßen Wahrheit nicht bezweifelt worden ist. Kein Metaphysicer hat bis itzt daran gedacht, diesen Gebrauch der Vernunft zu unterscheiden. — Denn in der Cosmologie und auch in der Ontologie sind Sätze, die ihre Objecte in der Erfahrung haben, und auch die sie nicht haben — und das ist nichtig; denn die Critic der Vernunft muß ganz andre Grund Sätze annehmen in Ansehung des immanenten als des transcendenten Gebrauchs.",
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s04-006",
     "kind": "text",
     "aa": 768,
     "text": "Wir haben Metaphysic eingetheilt in den Teil, der den immanenten und in den, der den transcendenten Gebrauch der Vernunft enthält. Transcendent und transcendental ist wol zu unterscheiden. Transcendental gehört nicht zu Begriffen, sondern zur Wißenschaft, d.h. zum Gebrauch des Verstandes. Die transcendental Philosophie ist die, die den reinen Gebrauch des Verstandes erwägt — und dazu gehören alle Begriffe und principien des reinen Verstandes und der reinen Vernunft. Einige Begriffe sind aber von immanentem, andre von transcendentem Gebrauch. Transcendental Philosophie erwägt das ganze Vermögen des reinen Verstandes und der reinen Vernunft, a priori was zu erkennen. Der Begriff von Grund und Ursache und von Gott gehört in die transcendental Philosophie, iener ist aber immanent.",
     "dehyphenated": 1,
     "ocrConf": 78
    }
   ]
  },
  {
   "id": "s05",
   "title": "40 Wir kommen itzt zu den Begriffen von Substanz und Accidens",
   "titleSrc": "heading",
   "headings": [
    "40 Wir kommen itzt zu den Begriffen von",
    "Substanz und Accidens"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s05-001",
     "kind": "heading",
     "aa": 769,
     "text": "40 Wir kommen itzt zu den Begriffen von Substanz und Accidens"
    },
    {
     "id": "metaphysik-mrongovius-s05-002",
     "kind": "text",
     "aa": 769,
     "aaEnd": 770,
     "pages": [
      {
       "p": 770,
       "i": 2400
      }
     ],
     "ms": [
      {
       "p": 41,
       "i": 272
      },
      {
       "p": 42,
       "i": 1750
      }
     ],
     "text": "Bey der Categorie haben wir geredet von der Relation der Substanz zum Accidenz — der caußa zum caußato und dem activ zum paßiv. Die zweyte wollen wir nennen die Categorie principii, die erste die Categorie subiecti, die 3te die Categorie com m er ei i. Die 3 sind nur von real Verhältnißen möglich. In allen Urtheilen ist ein Verhältniß des praedicats zum subject, ist das blos, so ist es categorisch, ist das Verhältniß des Grundes zur Folge, so ist es hypothetisch, wenn verschiedne Urtheile betrachtet werden als in einem Ganzen von Erkenntniß, so ist das disjunctiv. Wir wissen, daß die Tafel der Categorien analog sey der Tafel der functionen des Verstandes im Urtheilen — in der letzten finden wir categorische Urtheile, die liegen allen andern zum Grunde — sie enthalten die. Verhältniße des subjects zum praedicat. Das was nicht anders existiren kann wie das subject, ist Substanz, was nicht anders existiren kann wie das praedicat, ist accidens. Hier ist also alles so: wie die categorischen Urtheile die vornehmsten sind, so ist die Categorie der Substanz auch die vornehmste, die Begriffe von Accidens sind gleichsam nur conceptus secundarii. Substanz nennt man daher auch das substratum der Erscheinungen, und ist das erste, denn ich kann Substanz oder subject ohne accidens oder praedicat denken, aber nicht umgekehrt. Man nennt daher Substanz auch das substrat der accidentien. — Accidentien sind blos modi der Existenz der Substanz und können nicht außer deren Substanz seyn; denn sie existiren als praedicate, und die können nicht außer dem subject seyn. Die Alten sagten daher : Accidentia non migrant e substantia in substantiam, das würde anzeigen, daß sie ihre eigene existenz hätten. Wenn wir zurückgehen, so finden wir, daß der Substanz und accidens realitaet zu Grunde liegen. (Anmerkung: accidens praedicabile ist ein zufälliges accidens, dem nothwendigen entgegengesetzt — accidens praedicamentale der Substanz contradistinguirt). accidens ist auch eine existenz, aber nur als Inhaerenz und da muß was wirklich positives seyn. Negative praedicate sind daher auch nicht accidens, auch nicht logische praedicate, die gehen blos auf die Wirklichkeit eines Dinges, z. B. A is^ keine Substanz und 3 Winkel kein accidens. Durch den Ausdruck inhaerenz stellt man sich vor, als trüge die Substanz die accidentien, sie wären aparte existentien, die nur einer basis bedürfen, aber das ist. nur ein bloßer Mißbrauch im reden, sie sind nur Arten, wie Dinge existiren. — Insoferne ein Ding positive bestimmt ist, inhaeriren ihm accidentia, insoferne es negative bestimmt ist, inhaeriren sie ihm nicht. Sie existiren nicht vor sich und werden nicht blos von der Substanz unterstützt, wie ein Buch im Bücherschrank.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s05-003",
     "kind": "text",
     "aa": 770,
     "text": "Das was existirt, ohne determination eines andern zu seyn, ist Substanz; das was nur als determination existirt, ist accidens. Wir erwägen zuerst die Categorie Substanz : das was nicht anders als subiect kann vorgestellt werden, ist Substanz, und was nicht anders als praedicat kann vorgestellet. werden, ist accidens; die sind aus den logischen Begriffen des subiects und praedicats hergenommen. Logisches praedicat kann alles seyn. Z. E. Mensch, real betrachtet, kann nicht das praedicat eines Dinges seyn.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s05-004",
     "kind": "text",
     "aa": 770,
     "aaEnd": 771,
     "pages": [
      {
       "p": 771,
       "i": 1683
      }
     ],
     "ms": [
      {
       "p": 43,
       "i": 0
      },
      {
       "p": 44,
       "i": 1387,
       "approx": true
      },
      {
       "p": null,
       "i": 1449,
       "raw": "",
       "unresolved": true
      },
      {
       "p": 45,
       "i": 2831
      }
     ],
     "text": "Gelehrsamkeit kann vor sich nicht allein existiren. - — Bey hypothetischen und disiunctiven Urtheilen liegen die categorischen zum Grunde. Da wir ohne Urtheile nichts erkennen können und selbst ieder Begriff ein Urtheil ist, so machen die categorischen Urtheile eine wesentliche Bedingung der Erfahrung aus. In ieder Erfahrung ist das reale das Verhältniß der Substanz zum accidens. Die categorie der Substanz ist also die basis aller andern Erkenntniß. Alle determinationes sind entweder positivae oder negativae. Diese sind nicht accidentia, weil accidentia eine existens involviren : omnis existentia est subsistentia — cujus existentia est inhaerentia, est accidens. Bey einer Substanz können wir 2 respectus haben: respectu accidentiae hat sie Kraft, insoferne sie der Grund der Inhaerenz derselben ist, und respective des ersten subiects ohne alle accidentien, das ist das substantiale. Kraft ist also nicht neues accidens, sondern die accidentia sind durch die Kraft hervorgebrachte Wirkungen. Bisweilen sind die accidentia nicht real verschieden, denn sind die Kräfte auch nur logisch verschieden, z.E. leuchten und wärmen. Man nennt alle Kräfte derivationes, die von andern logisch verschieden sind, oder wo die Verschiedenheit durch die Analysis kann aufgehoben werden. Wir haben also primitive und derivative Kräfte in ieder Substanz: nimmt man, und zwar mit vieler Wahrscheinlichkeit, an, daß eine primitive Kraft seyn müße, von welcher alle andre herkommen. Aber wir können nicht alle Kräfte auf die eine reduciren, weil die accidentien so verschieden sind, daß wir sie nicht als einerley nehmen können. Laßen wir alle accidentien weg, so bleibt Substanz übrig, das ist das pure subiect, dem alles inhaerirt oder das substantiale, z.E. Ich. Hier werden alle Kräfte bey Seite gesetzt. Der andre respectus ist der der Substanz mit ihren accidentien zum substantiale, i.e. zum subiect, das von allen andern accidentien unterschieden wird. Was die Kraft betrifft, so ist zu merken : der Autor definirt sie durch das, was den Grund der inhaerenz der accidentien enthält; da ieder Substanz accidentien inhaeriren, so schließt er, ist iede Substanz eine Kraft. Das ist wieder allen Regelgebrauch ; ich sage nicht, die Substanz ist eine Kraft, sondern sie hat Kraft, der respectus der Substanz zu den accidentien, insoferne sie den Grund der Wirklichkeit derselben enthält, ist Kraft, z. B. : Ich kann nicht sagen, daß das Denkungs Vermögen in uns die Substanz selbst sey — das kommt ihr zu — auch nicht ein accidens der Gedanken ist das accidens. Wir haben also etwas, was nicht Substanz, auch nicht accidens ist. Was ist denn das Denkungs Vermögen? Die Beziehung der Seele zum Gedanken, insoferne sie den Grund der Wirklichkeit deßelben enthält. Das substantiale, i.e. das subject, dem keine accidentien inhaeriren, welches nothwendig von dem accidens unterschieden seyn muß, kennen wir gar nicht, denn hebe ich alle positive praedicate auf, so habe ich keine praedicate und kann gar nichts denken. Substanzen werden zuweilen durch einen Fehler für praedicate gehalten, das ist substantia praedicata; aber werden selten — öfterer verwandelt man praedicata in Substanzen, z.E. einige Theologen die Erbsünde.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s05-005",
     "kind": "text",
     "aa": 771,
     "aaEnd": 773,
     "pages": [
      {
       "p": 772,
       "i": 1054
      },
      {
       "p": 773,
       "i": 3630
      }
     ],
     "ms": [
      {
       "p": 46,
       "i": 1071
      },
      {
       "p": 47,
       "i": 2717
      }
     ],
     "text": "Categorien sind zwar reine Verstandesbegriffe, aber sie können auch auf Erfahrungs Gegenstände applicirt werden, dann behalten sie ihren Namen mit dem Zusatz phaenomenon, so auch hier: es giebt substantia phaenomenon. Z.E. Körper, welches zwar selbst eine Erscheinung ist, aber durch das substratum anderer Erscheinungen. Das, was nichts als Inbegrif von accidentien ist, aber nur als substanz vorkommt, ist phaenomenon substantiatum, z.E. Regenbogen. Nur durch Vernunft beweist Substanz ihr Daseyn. Eine wunderliche Folge, sie kommt her aus der falschen activitaet der Kraft. Sie ist kein Ding, sondern ein respectus, daher accidens. Nehme ich subject und accidens, so ist Substanz, laße ich die accidentien weg, so bleibt das substantiale. Davon können wir uns nicht den mindesten Begriff machen, d.h. wir erkennen nichts als accidentien. Denn unser Verstand erkennt alles durch praedicate; das, was dem praedicat zu Grunde liegt, erkennen wir nie. Z.E. alle Menschen sind sterblich, bedeutet, alles das was ich unter dem praedicat der Mensch erkenne, erkenne ich auch unter dem praedicat der Sterblichkeit. Mensch ist das Wesen des körperlichen, thierischen, ißt, denkt, will etc, das sind lauter accidentia. Der Begriff vom Menschen ist also aus lauter praedicaten zusammengesetzt, der der Substanz ist Etwas im Raume, dem die accidentien zukommen, das wir aber nicht kennen. Rede ich von mir selbst, ich will, ich thue, so sind das accidentien, das substantielle ist ich. Können wir denn was anders als durch accidentien kennen? Nicht den mindesten Begriff haben wir sonst davon. Wenn wir von Erscheinungen specieller reden, werden wir sehen, daß wir blos Kräfte kennen. Das Ding, dem die Kräfte inhaeriren, bleibt uns unbekannt. Negationen sind keine accidentien und wirkliche können nur nach ihrer Wirklichkeit, d.h. nach dem realen, was drinnen ist, erkannt werden. Kräfte sind derivativ, deren accidentien mit dem accidens einer andern Kraft einerley sind. Deren accidentien mit dem accidens einer anderen Kraft nicht einerley sind, oder die nicht auf eine höhere reducirt werden kann, ist eine primitive Kraft. Alle Naturphilosophie beschäftigt sich mit der reduction der Kräfte auf eine Grund Kraft, die können wir nicht weiter erklären, nehmlich daß, weil etwas ist, dadurch etwas anderes folgt. Alle Grundkräfte müßen durch Erfahrung gegeben werden. — Coexistentia mutabilium cum fixis est status. In iedem Dinge ist etwas beharrlich, das ist fixum. Das Veränderliche insoferne es mit der existenz coexistirt, ist Zustand — er ist also nichts als die Bestimmung einer Substanz in der Zeit. In der Zeit sind nur Veränderungen möglich; sind die Bestimmungen in verschiedenen Zeiten verschieden, so ist der Zustand verändert, sind sie dieselben, so ist der Zustand nicht verändert. Das unveränderliche hat daher 2 Zustände, mithin das ens reale nicht. Innrer Zustand ist coexistenz der innern veränderlichen Bestimmungen mit der existenz, äußerer Zustand ist coexistenz der relationen mit der existenz, modification ist Veränderung des innren Zustandes — wenn einer mehr Übel bekommt, wird er nicht modificirt. Der äußre Zustand kann ohne den innern, und dieser ohne ienen verändert werden. Jetzt kommen wir zu erheblicheren Begriffen. Aus der Kraft kann abgeleitet werden Handlung, und aus beyden andere Dinge; dem correspondirend ist paßio, Leiden. Möglichkeit zu handlen ist facultas, Möglichkeit zu leiden ist receptivitas. Eine Substanz, insoferne sie den Grund von dem was zum Daseyn eines Dinges gehört, enthält, agirt, handelt; insoferne der Grund von dem was zu ihrem eigenen Daseyn gehört, in einer anderen substanz enthalten ist, leidet sie paßive. Jede Substanz handelt, weil das subject subsistirt. Die praedicate inhaeriren in ieder Substanz, die accidentien (doch die nennen wir blos so) können nicht existiren ohne in der Substanz, mithin enthält sie den Grund von etwas, das zur existenz gehört, mithin handelt sie. In der Natur Wissenschaft hat man großen Grund, die vim attrahentem und pollentem als primitive Kräfte anzusehen. Können in einer Substanz viele oder nur eine Grund Kraft seyn? Auch unsre Vernunft müßen mehrere seyn < [bricht ab)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s05-006",
     "kind": "text",
     "aa": 773,
     "aaEnd": 776,
     "pages": [
      {
       "p": 774,
       "i": 1915
      },
      {
       "p": 775,
       "i": 4460
      },
      {
       "p": 776,
       "i": 7069
      }
     ],
     "ms": [
      {
       "p": 48,
       "i": 0,
       "approx": true
      },
      {
       "p": 49,
       "i": 2025
      },
      {
       "p": 50,
       "i": 3892
      },
      {
       "p": 51,
       "i": 6076,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "... unzuverläßig sind und wir können da auch recht gut fortkommen ohne alle metaphysische Principien, doch kann man sagen, daß eine Metaphysic oder Critic der Vernunft dabey Nutzen schafft, denn wenn man nicht die ersten Quellen des Urtheils geprüft, so läuft man Gefahr, metaphysisch falsch zu urtheilen. Hier ist also der Nutze negative, wieder falsche Metaphysic zu warnen, nicht positive, die Wissenschaft zu erweitern. Da der Gegenstand der Metaphysic nicht in der körperlichen und denkenden Natur liegt, was ist es denn, worauf die Metaphysic geht? Es muß ein Gegenstand über den Sinnen sejm. Metaphysic heißt ienseit der Natur Wissenschaft, psTa toc «puaixa, heißt trans physicam. Einige haben diese Benennung für unschicklich gehalten und geglaubt, Aristoteles habe sie so genannt, weil sie in seinen Convoluten nach der Physic folgte: pe t<x heißt nicht nach, sondern ienseit, und diese Benennung ist sehr schicklich und scheint vom Aristoteles sorgfältig ausgedacht zu seyn. Sie ist die Wissenschaft von den Dingen, die über alle Erscheinungen hinausgehen, was ienseit der Natur liegt. Hier nehmen wir Natur nicht sensu toto, sondern proprio. Denn heißt es der Inbegriff aller Gegenstände der Sinne. Hier kann ich nun nichts anders denken als Gott und eine andre Welt. Ein Wesen, das von allen andern unterschieden ist, und ein Leben das auf dieses folgt und davon unterschieden ist, diese beyde Sätze regieren die ganze Metaphysic : sind wir da indifferent, so können wir in allen Stücken indifferent seyn. Wenn diese 2 Sätze, die die cardines sind, worin sich die ganze Metaphysic dreht, so ist die Frage, wozu brauchen wir diese 2 Fragen zu beantworten? — Wenn wir den Theil der Metaphysic, wo sie vom Urwesen handelt, Theologia rationalis, und den T heil, wo sie von dem künftigen Leben handelt, weil der die Unsterblichkeit der Seele voraussetzt, Psychologia rationalis nennen, so hat Metaphysic nur diese beyde Theile: Psychologia rationalis und Theologia rationalis. Aber was haben die für Nutzen, sie müßen uns doch auf gewiße Weise intereßiren. — In Ansehung des speculativen Wesens ist uns dieses alles gleich, denn die Natur Erscheinungen werde ich so erklären, als kämen sie aus der Beschaffenheit der Natur, auf Gott kann ich mich nicht berufen. Denn das hieße alles Philosophiren bey Seite gesetzt. Eben so ist es mit der Unsterblichkeit der Seele, denn da kann ich sagen : Laßt uns warten, bis wir dahin kommen, wo wir Erfahrungen anstellen können. — Durch speculation können wir nichts ausrichten und ausmachen. Es muß also eine practische Absicht seyn. Was werde ich thun, wenn Gott und eine andere Welt ist? Nun zeigt sich deutlich, daß uns dieses sehr intereßirt. Jetzt muß ich mich ganz anders verhalten, als wenn ich sehe, daß blos die Sinnen Welt existire. — Dann bediene ich mich der Dinge, wie es meiner Absicht gemäß ist, wie ich mein Vergnügen befördern, meine Begierden stillen kann. (Alle Menschen wollen glücklich seyn — die Vernunft schreibt gesezze und Bedingungen vor, unter welchen man nur allein der Glückseeligkeit würdig ist. — Die Moral, die diese Bedingungen enthält, lehrt uns nicht den Weg zur Glückseeligkeit, sondern nur die Bedingungen, unter denen wir derselben würdig sind, und das ist das practische Intereße der Vernunft an den Principien des Lebens Wandels. — Die Religion ist aber auch connex mit einem speculativen Intereße — ich frage, kann ich auch hoffen, der Glückseeligkeit theilhaftig zu werden, wenn ich derselben nicht unwiüdig bin? Hier müßen wir einen weisen Weltregierer voraussetzen. — Wäre uns nicht daran gelegen, daß die Moral Regeln Einfluß auf uns hätten und bewegende Kraft, so könnten wir aller speculation hierüber überhoben seyn. Sobald wir kein practisches Intereße haben, d.h. sobald wir uns um die Würdigkeit glückseelig zu seyn nicht bekümmern, so fällt das alles weg.). Habe ich einen Grund der Vermuthung, es ist eine andre Welt und ein Welt Urheber, so eröfnet sich ein ganz anderes Intereße. Was habe ich also zu thun? In practischer Absicht sind also diese beyde Sätze von der äußersten Wichtigkeit und wichtiger als alle andern Zwecke. — Sie betreffen unsre letzten Zwecke. Wenn noch eine andre Welt ist, ein Welt-Urheber, von dem mein Schicksal in iener Welt abhängt, was habe ich zu thun, um einer dauerhaften Glückseeligkeit theilhaftig zu werden ? Gesetzt nunmehro, daß alle speculation uns über die 2 J ragen keine gnügsame und befriedigende Belehrung geben kann, was würde denn Metaphysic für Nutzen bringen? Wir müßen sehen, ob nicht ein andrer Weg wäre, dazu zu gelangen. Laßt uns denken, was soll ich thun, wenn Gott und eine andre Welt ist, so sehen wir, die Moral lehret, was ich thun muß, wenn ich nicht in meinen Augen selbst verachtungswürdig, und der Gliickseeligkeit theilhaftig werden will. (Wir finden nicht, daß das Glück immer in richtiger proportion ausgetheilt wird. Das Laster triumphirt, und der Tugendhafte muß nicht Kummer zeigen. Wenn also unser itziges Leben unser Daseyn beschließt, so können wir nicht sagen, daß wir in dem Maaße gliicklieh würden, als wir würdig sind. — Wir müßen also noch eine andre Welt annehmen. — Aus diesen beyden Bedürfnissen, Gott (denn von einer blinden Nothwendigkeit können wir nicht erwarten, daß sie uns glückseelig machen soll, insofern wir derselben würdig sind, sondern dazu müßen wir einen weisen Weltregierer annehmen) und eine andre Welt, entspringt die Metaphysic; auf die bezieht sich in der immanenten Welt alles, und unter all den Fragen die ie die speculative Philosophie aufwerfen kann, sind keine so dringend und interessirend, daß sie uns bewegen sollten, uns in solche schwierige speculationen zu verflechten. Diese beyde Gegenstände sind ganz über das Feld der Erfahrung (Gott und eine andere Welt, das ist eben die, welche außer dem Bezirk aller mir itzt möglichen Erfahrung liegt) ; empirische Principien können mir also itzt nichts nützen, sondern blos die reine Vernunft muß hier entscheiden. Theologie und Psychologie sind also die eigentliche Theile der Metaphysic. In der letzteren suchen wir aus der Natur der Seele so viel kennen zu lernen, daß sie noch fortleben kann, wenn das thierische Leben auf hört, und zwar ein geistiges Leben.) (Beine Philosophie hat noch einen andern Nutzen: sie klärt den Verstand auf, wir setzen hier unsere Begriffe auseinander. Der Nutzen ist logisch, aber viel zu klein für die Mühe, die wir auf sie wenden müßen. Ihr hauptsächlicher Nutze ist, uns von Irrthümern in Ansehung dieser Objecte zu befreien. Sie dienet nicht dazu, sie uns zu verschaffen, denn es ist wohl leicht einzusehen, daß Erkenntniße, die so große Bedürfniße sind, nicht so hoch liegen werden, daß die höchste speculation dazu nöthig ist, sondern daß sich auch der gesunde Menschen Verstand davon werde überzeugen können, und so ist es auch in der That. Er findt so viel Spuren der Weisheit in der Welt, woraus er schließt, daß ein weiser Welt Urheber seyn muß, wenn er hiemit das Gebot verbindet, welches ihm die Vernunft oder vielmehr dieser weise Welt Urheber giebt, so muß er eine andre Welt hoffen weil er findt, daß Tugend und Laster ihren Lohn nicht gehörig bekommen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 23,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s05-007",
     "kind": "text",
     "aa": 776,
     "ms": [
      {
       "p": 52,
       "i": 829
      }
     ],
     "text": "Es ist wohl wahr, daß speculative Vernunft nicht nöthig ist, diese Begriffe zu erzeugen — aber es werden sich doch viele finden, denn das speculiren und diese speculative Vernunft kann uns an dem Glauben so irre und so wankend machen, uns auch Irrthiimer hereinbringen (welches auch die gemeine Vernunft kann), daß wir nothwendig gleichartige Waffen dagegen haben müßen, und das ist Metaphysic. Jeder sieht leicht ein, daß es unbillig sey, eine Glückseeligkeit zu fordern, ohne sich derselben würdig zu verhalten. Dieses lehrt Moral. Sie beruht also nicht auf Metaphysic, da ich eine Moral zum Grunde legen kann, die Metaphysic nicht voraussetzt; so habe ich ein Gesetz des Verhaltens der Glückseeligkeit würdig zu werden, das lehrt sie apodictisch. lener aber, sehen wir, fehlet noch immer Etwas. Kann ich denn auch hoffen, der Glückseeligkeit theilhaftig zu werden, wenn ich derselben würdig bin? Wenn meine Gesinnung und Verhalten nach der Moral eingerichtet sind und zum Grunde liegen, so ist es nothwendig, mit dem moralischen Grund Satze : keine Handlungen auszuüben, als die dem Gesetz der Pflichten gemäß sind, einen Glaube an einen gütigen Weltregierer, der uns der Glückseeligkeit theilhaftig machen will, und an eine andere Welt, in der wir derselben theilhaftig werden können, zu verbinden. Kann nun Metaphysic diesen Glauben vergrößern? Nein, sondern dieser Glaube wird nicht nur durch die Betrachtung der gesamten Natur unterstützt, sondern sie sichert ihn auch wider alle Einwürfe der speculativen Vernunft, sie setzt derselben Grenzen. — Metaphysic ist also nicht die Grundfeste der Religion — wie würde es sonst mit den nicht metaphysischen Köpfen aussehen — , sondern die Schutzwehre wieder die Angriffe der speculativen Vernunft. Denn die ist sehr gefährlich und ihre Angriffe sind unvermeidlich. Ihr Nutzen ist also negative: Irrthümer zu verhindern, aber er ist unermeßlich, weil dieselben so verderblich sind.",
     "dehyphenated": 6,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s05-008",
     "kind": "text",
     "aa": 776,
     "aaEnd": 778,
     "pages": [
      {
       "p": 777,
       "i": 506
      },
      {
       "p": 778,
       "i": 3091
      }
     ],
     "ms": [
      {
       "p": 53,
       "i": 774,
       "approx": true
      },
      {
       "p": 54,
       "i": 2828
      },
      {
       "p": 55,
       "i": 4977
      }
     ],
     "text": "Die Erkenntniß deßen, was ich unnachläßlich thun muß nach den Grund Sätzen der Vernunft, die meinen gesamten Zweck betreffen, heißt Moral. Die ist uns schon gegeben und bedarf keiner metaphysischen Principien und braucht nicht Gott und eine andre Welt voi auszusetzen. Die moralischen Bewegungs Gründe aber werden dadurch mehr verstärkt, wenn ich sehe, daß Gott und eine andre Welt ist. Die moralischen Gesetze müßen auch den theologischen vorausgehn, die stellen uns den vollkommensten Willen Gottes dar. Zuerst aber nrüßen wir die \"V ollkommenheit unseres Willens erkennen und uns denn den göttlichen zum Muster setzen. Die Moral ist ein Canon. Canon ist eine iede Gesetzgebung, insoferne sie absolute gebietend ist; sie muß keine Bedingung voraussetzen. Selbst die nicht von Gott und einer anderen Welt. Aus der Natur der Handlung muß erkannt werden, was zu thun und zu laßen ist. Moral lehrt, was ich thun soll. Sie giebt aber keine Triebfedern an die Hand, das zu thun, was die Vernunft als Pflicht vorschreibt. Der Inbegriff der Triebfedern zu Handlungen ist Glückseeligkeit, und die kann kein Sterblicher entbehren — und die fehlt bey der Moral ; ich kann nicht hoffen oder ich kann nicht einsehen, ob ich hoffen kann, der Glückseligkeit theilhaftig zu werden. Dieses lehrt Moral nicht, aber wie der Glückseeligkeit würdig zu werden. Dieselbe läßt sich a priori einsehen, ohne Erkenntniß der Sätze von Gott und einer andern Welt. — Die Gesetze sind nicht complet, die nicht eine Drohung und Verheißung außer der Erfüllung bei sich führen. — Die moralischen Gesetze haben keine Drohung oder Verheißung, daß wir der Glückseeligkeit theilhaftig wurden oder verlustig gehen sollen. In dieser Welt kann das auch nicht seyn ; denn hier ist Wohlergehen und Wohlverhalten nicht zusammen verbunden. — Der Moral bleibt aber noch ein Glaube übrig, daß es vielleicht einen weisen Weltregierer und eine andre Welt gäbe. Wäre dieses nicht, so wären die moralischen Gesetze von keinem Erfolg. Nun können wir uns vorstellen ein practisches Dilemma, i.e. einen Satz , der zeigt, daß man, wenn man nicht etwas einräumt, man mag sich hinwenden wo man wolle, in lauter Ungereimtheiten gerathe. Ein practisches Dilemma ist ein solches, wo wenn ich nicht etwas voraussetze, ich mich immer in ein absurdum practicum stürze. Das ist 2erley: 1. Ein Grundsatz, nach welchem ich allen Anspruch auf Ehre, Redlichkeit und Gewißen aufgebe. 2. Ein Grundsatz, nach welchem ich allen Anspruch auf Glückseeligkeit aufgebe. — Wenn wir moralische Grundsätze annehmen, ohne Gott und eine andre Welt vorauszusetzen, so verflechten wir uns in ein practisches Dilemma. Nehmlich wenn kein Gott und keine andre Welt ist, so muß ich entweder standhaft den Regeln der Tugend folgen, denn bin ich ein tugendhafter Phantast, weil ich keine Folgen erwarte, die meines Verhaltens würdig sind, — oder ich werde das Gesetz der Tugend wegwerfen, verachten, alle Moral mit Füßen treten, weil sie mir keine Glückseeligkeit verschaffen kann, ich würde meinen Lastern nachhängen, diese Vergnügungen des Lebens genießen, wenn ich sie habe, und dann faße ich einen Grundsatz, wodurch ich ein Bösewicht werde. Wir müßen uns also entschließen, Narren oder Bösewichter zu seyn. — -Dieses Dilemma zeigt an, daß das moralische Gesetz, das in unsre Vernunft geschrieben ist, mit einem Glauben an Gott und eine andre Welt unzertrennlich verbunden sey. — Bei den Alten wurde keine so reine Tugend als bei uns gelehrt, die konnten sie aber auch ausüben ohne Gott und eine andre Welt zu glauben. Sie übten nur eine politische Tugend aus, die ihnen Ansehen, Glückseeligkeit und Vortheile des Lebens zu wege brachte, welches nur Klugheit ist. Hier ist die Frage, ob iemand der reinsten Tugend, bei welcher viele Vergnügen des Lebens aufgeopfert werden müßen, anhängen kann ohne Glauben an Gott und eine ander Welt. So ist das ganz ohnmöglich. In seinen Augen wäre er immer verehrungswürdig, aber bei alledem ein Phantast. Mit der Erkenntniß unsrer Pflicht, die die Vernunft vorschreibt, und der moralischen Maxime derselben gemäß zu leben, ist der Glaube an Gott und eine andre Welt unzertrennlich verbunden. Bios die Schönheit der Handlung kann uns nicht dazu antreiben; sie ist ein großer Bewegungsgrund, aber wir opfern sie doch dem Nutzen auf. Wenn wir also durch Metaphysic nach logischen Bedingungen kein Wissen erlangen sollten, so bleibt nur noch ein Moral Glaube übrig, welcher durch die Betrachtung der gesamten Natur nicht nur nicht bestritten wird, sondern vielmehr bestärket wird. Thun wir der Vernunft im speculativen Gebrauche kein gnüge, so doch im practischen, und dieser moralische Glaube ist so unerschütterlich als die größte speculative Gewißheit, ia noch fester, weil das, was auf den Principien der Entschließung gegründet ist, weit über die Principien der speculation hinweg ist — und nun bekommen wir Freiheit, alle Beweise von Gott und der Unsterblichkeit der Seele unpartheyisch auf das Schärfste zu examiniren, ihnen den Schein benehmen, wenn sie mehr zu thun vorgeben, als sie wirklich thun und thun können, alles sophistische wegwerfen, und blieb auch kein einziger, so werden diese großen Wahrheiten nichts desto weniger nichts verliehren, weil wenn wir in speculativer Absicht nicht genug überzeugt sind, so doch in practischer Absicht. Hier haben wir die rechte Freyheit, ohne allen Zwang und Parteylichkeit zu philosohiren. Bey unserm mehresten Philosophieren sollen wir nichts anders finden, als was andre schon gefunden, das billigen, was andre für wahr gehalten, nicht aber die geringste Änderung machen. Mit diesen Dingen wollen wir uns itzt weitläuftiger beschäftigen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 15,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s05-009",
     "kind": "text",
     "aa": 779,
     "aaEnd": 781,
     "pages": [
      {
       "p": 780,
       "i": 2537
      },
      {
       "p": 781,
       "i": 5084
      }
     ],
     "ms": [
      {
       "p": 56,
       "i": 1553
      },
      {
       "p": 57,
       "i": 3878
      },
      {
       "p": 58,
       "i": 5879
      }
     ],
     "text": "Die ganze Metaphysic ist nichts anderes als eine Kette von aufgebauten und umgestürzten Systemen. Es ist noch kein Buch herausgekommen, wo Etwas beständiges ist. Es ist keine Wissenschaft, die das Schicksal hat, beständig zu sein. Je mehr der Verstand anfängt aufgeklärt zu werden, desto mehr Wert bekommt sie, doch, weil sich keiner der metaphysischen Fragen entschlagen kann, weil sie mit dem Intereße der menschlichen Vernunft zu genau verbunden sind. Man wird einwenden, daß Wolf und Crusius Metaphysicen herausgegeben. Man sehe nur, ohne die Sache selbst zu prüfen, auf den Erfolg. Sie sind schon alle eingestürzt. Einige Sätze waren wahr, das Ganze aber nicht. In Ansehung solcher metaphysischen Sätze kann man den dogmatischen Weg einschlagen, d.h. seine reine Vernunft so weit zu kennen als möglich. Dogmatisch ist die Behandlung einer Wissenschaft, wenn man sich nicht bemüht zu untersuchen, aus welchen Gemüths Kräften das Erkenntniß entspringe, sondern gewiße allgemeine, für wahr gehaltene Sätze zum Grunde legt und das übrige daraus schließt, critisch ist die Behandlung, wenn man sucht, die Quellen zu entdecken, aus welchen es entspringt. In der Mathematik ist das letztere nicht nöthig, denn alles, was sie sagt, läßt sich durch Erfahrung bestätigen, aber in der Philosophie ist das nicht, und da finden wir denn im Gebrauch mancher Erkenntniße oft große Schwierigkeiten und Wiedersprüche, ob sie gleich unmittelbar gewiß zu seyn scheinen, eben so wie Grund Sätze der Mathematik, z.E. alles was existirt ist in der Zeit. Wir müßen daher die Gemüths Kräfte untersuchen, aus welchen die Erkenntniße entspringen, um zu sehen, ob wir ihnen trauen können, ob sie gleich offenbar wahr zu seyn scheinen - und dann, worauf sich das Vermögen überhaupt gründet, a priori was zu erkennen. Die critische Methode examinirt den Satz nicht obiective oder seinem Inhalt nach, sondern subiective. — Die Methode der Metaphysic ist demnach critisch dogmatisch, um ein criterium zu finden, die Erkenntniße, die aus dem Verstand und aus der Vernunft rechtmäßig entspringen, von denen zu unterscheiden, die ohne eine Illusion entstehen oder dadurch, indem er sich selbst hintergeht. In der Metaphysic werden wir nicht fragen, ob die Sätze: Es ist ein Gott und eine andre Welt, wahr sind, sondern ob der Verstand durch bloße speculation so weit kommen könne. Man kann nach allen Regeln eines vernünftigen Glaubens practisch von etwas so überzeugt werden, daß es keine Vernunft leugnen wird, aber in speculativer Absicht nicht. — Bey der ersten Frage, ob die Sätze allgemein wahr sind, werden wir zeigen, daß sie keiner leugnen wird, ohne alle vernünftigen Grund Sätze fahren zu laßen, dazu werden wir aber blos den gemeinen Menschen Verstand brauchen, ihn nur ein wenig aufklären. Bey der 2ten Absicht, ob wir blos durch bloße speculation ohne practische Absicht so weit kommen können, werden wir zeigen, daß das nicht angeht. — Das wollen wir nennen logische Wahrheit, also logisch gewiß können wir von den Sätzen nicht werden — bei critischen Untersuchungen werden wir Schwächen des Verstandes finden, die groß sind, und daß er manche Erkenntniß vorgiebt, die er nicht hat. Metaphysic hat hier keinen positiven Nutzen aber vielen negativen: man hat bisher immer Sätze critisirt, aber keiner die Vernunft selbst, daher ist auch nichts beständiges hier geleistet. (In keiner Wissenschaft ist der negative Nutzen so groß als in der Metaphysic, denn in keiner sind die Irrthümer so groß und gefährlich. In keiner Wissenschaft ist also Critic so nöthig als hier, denn hier hat alles negativen Nutzen. Wir können zeigen, daß solche Principien, mit welchen der Gegner wieder mich argumentirt, und den Glauben an Gott und eine andre Welt wankend machen will, gar nicht in der Vernunft gegründet sind — also das Unvermögen der Vernunft, der Religion was anzuhaben.) Sätze zu erfinden und sie in ein System zu bringen, das war der erste Weg; dann als man sähe, daß dieses Zwiespalt verursache, so fing man an, die Vernunft selbst zu examiniren, nicht über die Sachen zu disputiren, sondern zu untersuchen, was für Quellen sie haben, wie weit sie ohne Erfahrung kommen kann. Das waren Untersuchungen des subiects, und dieser Entschluß war sehr vernünftig. Denn wenn wir mit dem object nicht fortkommen, so ist es gut, unsre Aufmerksamkeit auf das subiect selbst zu richten, und dieses mußte einmal entstehen, denn kann ich nicht von Dingen speculativ gewiß seyn, so muß ich doch von den Quellen, Gränzen und principien der Vernunft gewiß seyn. Bey vielen Dingen können wir die Auflösung nicht geben, als z. B. in der Naturwissenschaft, und wir können hier nicht urtheilen, ob sie irgend möglich sey, weil alle unsre Einsichten in der Naturwissenschaft von der Erfahrung abhängen, und wir nicht wissen können, wie weit wir es in derselben bringen werden. Hier kann man ohnmöglich die Gränzen der Menschlichen Vernunft bestimmen. In Ansehung der Mathematic auch nicht, weil sich alles da auf Anschauungen gründet, aus denen Folgerungen fließen; da nun die Anschauungen unendlich seyn können, so können auch die Folgerungen unendlich seyn. Man kann also nicht bestimmen, ob nicht noch viele Eigenschaften des Circels entdeckt werden. In der Metaphysic brauchen wir reine Vernunft, ohne uns auf Anschauungen zu gründen. Sie ist reine Philosophie, die die Gegenstände durch pure Begriffe erkennt. Sie ist eine besondre Wissenschaft von dem Gebrauch der Vernunft durch Begriffe. Sind wir hier noch nicht weit gekommen, wie es würklich ist, so können wir doch etwas in Ansehung der Vernunft mit Gewißheit bestimmen. Die Grenzen der Reinen Vernunft laßen sich mit Gewißheit bestimmen, weil die Gegenstände aus Anschauungen zu reflectiren sind, denn wenn nicht die Gegenstände durch die Erfahrung gegeben sind, so haben wir keine Objecte der reflection. Wir werden also alle Begriffe der reinen Vernunft abzählen können, auch die Grund Sätze enummeriren und zeigen, wie weit der reine Vernunft Gebrauch reiche und in welchen Schranken er miiße gehalten werden, und nun können wir zeigen, wo der Schein herkomme und welche Fragen entweder beantwortet oder aufgeworfen sind, und der in so vielen Systemen geherrscht. Wir werden Moral und Religion sichern können wieder die Schein Einwürfe der speculativen Vernunft, und hiedurch kommt die Menschliche Vernunft zu einer völligen Befriedigung, und eine solche Arbeit ist möglich. (Im vorigen Saeculo, als alle Wissenschaften eine große revolution erlitten, als experimental Physic in Schwange kam, fing man auch an, die Vernunft zu examiniren, aber physiologisch, nicht critisch. Welches eigentlich eine Erklärung und Untersuchung der Entstehung der Begriffe war. Locke und Leibnitz haben an keine Critic der Vernunft Begriffe gedacht, sie untersuchten blos, wie wir zu den Begriffen kommen. Locke sagte, alle Begriffe sind aus der Erfahrung entlehnt. Leibnitz nein. Wir haben auch welche durch reine Vernunft. Das ist leicht zu unterscheiden, z. B. kann die Erfahrung wohl den Begriff von Ursache und Wirkung, von Gott etc. geben? Aber Leibnitz frug nicht, wie kommt die Vernunft ohnabhängig von aller Erfahrung zu dem Begriffe — worauf gründet sich das Vermögen, überhaupt etwas a priori zu erkennen? Wie weit reicht das ? Etwas Ähnliches von Critic der reinen V ernunft fand sich bei David Hume, der aber darüber dem in wildesten und trostlosesten Skepticism verfiel, und das ging leicht an, weil er die Vernunft nicht ganz und gar studirte, sondern nur diesen oder ienen Begriff).",
     "joined": [
      "layout"
     ],
     "dehyphenated": 20,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s05-010",
     "kind": "text",
     "aa": 781,
     "aaEnd": 782,
     "pages": [
      {
       "p": 782,
       "i": 120
      }
     ],
     "ms": [
      {
       "p": 59,
       "i": 653,
       "raw": "69",
       "inferred": true
      }
     ],
     "text": "Eine Untersuchung des facti, wie wir zur Erkenntniß kommen, ob aus Erfahrung oder durch pure Vernunft. Locke hat hierin viel geleistet, und dieses kann auch so Nutzen haben, ist aber doch nicht so sehr nöthig und auch wohl kaum möglich — besser fragt man, wie viel sind Reine Vernunft Begriffe, was haben sie für Bedeutung, d.h. auf welche Gegenstände können sie gehn, wie können sie gebraucht werden, und in welchen Gränzen mäßen sie sich halten? Das ist eine Oritic der Reinen Vernunft. Wir sehen hier, mit welchem Recht wir uns der Begriffe ohne Erfahrung bedienen, ob wir dieses nicht unrechtmäßig thun. Durch Critic gelange ich nicht zur Gewißheit der Fragen, insoferne sie dogmatisch beantwortet werden sollen, sondern dessen, was die Vernunft in Ansehung aller Metaphysischen Fragen ausrichten kann. Eine solche Critic ist noch nie herausgegeben als vom H. Professor Kant Riga 1781.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s05-011",
     "kind": "text",
     "aa": 782,
     "aaEnd": 783,
     "pages": [
      {
       "p": 783,
       "i": 1726
      }
     ],
     "ms": [
      {
       "p": 60,
       "i": 2004
      }
     ],
     "text": "(Anmerkung. Die Metaphysic kann eingetheilet werden in Metaphysic als Natur Anlage und in Metaphysic als Wissenschaft. Der Inbegriff aller unsrer Vernunft Erkenntniße durch Begriffe, die iedem Menschen beywohnen und deren er sich in der Erfahrung bedient, ist metaphysica naturalis. Jede Vernunft Erkenntniß, insoferne sie nicht speculativ oder in concreto ist, ist natürlich, und deren giebts eine große Menge; also hat der gemeine Gebrauch des Verstands auch Metaphysic, und diese Metaphysic verdient wohl zur Wissenschaft erhoben zu werden. Jeder natürliche Gebrauch der Vernunft darf nicht immer in einen wissenschaftlichen verwandelt werden, weil die Zwecke so erreicht werden, z. B. in der Moral darf man nicht die Regel in abstracto vorstellen, sondern blos in concreto. Es hält z. B. schwer, die Unzuläßigkeit der Lügen a priori zu beweisen oder in abstracto zu zeigen, in concreto gehts wohl an, aber in der Metaphysic ist es nothwendig. Wir haben verschiedene Erkenntniße a priori, die aber ihre Bestätigung in der Erfahrung finden — aber auch transcendente Begriffe, und itzt kann die materiale Metaphysic nichts helfen, da die Bestätigung der allgemeinen Grundsätze in der Eifahiung fehlt. So flattre ich gleichsam im leeren Raum, und wenn nicht Wissenschaft a priori sich durch sich selbst bestätigt, so laufe ich Gefahr auf Hirn Geschäfte zu fallen. Der natürliche Gebrauch dei Vernunft findt statt, wenn wir in der Erfahrung bleiben, reicht aber nicht zu, sobald wir über dieselbe gehen, und da das nothwendig ist, so ist Metaphysic als Wissenschaft in der Vernunft nothwendig unvermeidlich — sie sucht, ob sie da nicht Aufschlüsse der verwikt kelten Fragen finden kann, die selbst die wahre Vernunft aufwirft, selbst die practische Vernunft sieht sich nach einem um, der Metaphysic als Wissenschaft tractirt, oder probiert es bei sich selbst, und keine Erkenntniß bedarf so nöthig, eine Wissenschaft zu seyn, als Metaphysic. Man spottet über sie als eine unnütze und leicht zu entbehrendeSache, aber das konnte man auch wohl mit dem Thema der circulation des Bluts — man kann sich nicht damit entschuldigen : es gehe über die Vernunft und unsre Erkenntniße: in der Natur giebt es Geheimnisse, aber die Dinge sind außer mir und ich soll sie studiren, hier sind Decken vorgezogen ; aber denke ich etwas, denke ich mir Dinge a priori die nur Geschöpfe meines Verstandes sind, so muß in Ansehung deren Auskunft gegeben werden können, ob meine Behauptungen Grund haben oder nicht. Es ist nicht Nachforschung des Dinges, sondern eines Verstandes, die Grund Sätze und Begriffe desselben müßen erforschlich seyn, denn es liegt alles in mir.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s05-012",
     "kind": "text",
     "aa": 783,
     "aaEnd": 784,
     "pages": [
      {
       "p": 784,
       "i": 1584
      }
     ],
     "ms": [
      {
       "p": 61,
       "i": 1542
      }
     ],
     "text": "Indeßen wollen wir doch sehen, daß wir der dogmatischen Methode nicht verlustig gehn, daher werden wir sie so wie unser Autor vortragen. Wir werden demnach nicht die Metaphysic als ein Lehrgebäude, als eine doctrin etabliren, weil man doch in der Folge finden wird, daß alles Blendwerk ist, sondern wir werden die Critic der Reinen Vernunft mit beyfügen, wodurch alle dogmatische Großsprecherey wegfallen wird. Critic soll also ein System der Selbsterkenntniß unsrer Vernunft hervor bringen. In dem system der Metaphysic werden wir zuerst alle Begriffe analytisch durchgehen und blos erklären, was unsre Vernunft verstehe, wenn sie sich dieses oder ienes Begriffs bedienet. Das ist von großem Nutzen, ob wirs gleich hier dahingestellt seyn lassen, ob die Fragen der Metaphysic beantwortet werden oder nicht. Diese Erläuterung (nicht Erweiterung) unsrer Kenntniße ist sehr nützlich, denn in allem, wo nur Vernunft ist, sind metaphysische Begriffe. Metaphysic ist der Inbegriff aller reinen Vernunft Erkenntniße, die durch Analytic sehr aufgeklärt wird. Die Beantwortung aller Fragen der Vernunft ist der synthetische 1 heil der Metaphysic, wo wir unsre Erkenntniß durch reine Vernunft zu erweitern und reine Erkenntniß zu erwerben suchen. Der ist von andrer Art als der analytische, denn hier werden die Verstandesbegriffe zergliedert, aber keine Fragen beantwortet, also wird unser Erkenntniß nicht erweitert, sondern nur erläutert. Im synthetischen Theil aber werden sie erweitert und da bedürfen wir der Critic, weil wir da Versuche machen, ohne mit der Vernunft über die Erfahrung herauszugehen. Wenngleich itzt noch nicht alle Philosophen den Weg der Critic der Reinen Vernunft einschlagen, so werden sie doch genöthigt seyn, einmal darauf zu kommen. Die Noth wird ihnen dieses lehren, weil Critic allein nur die völlige Befriedigung giebt, und ohne sie wird unsre Vernunft mit sich selbst beständig im Zwiespalt seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s06",
   "title": "Finis Prolegomenorum Ontologia",
   "titleSrc": "heading",
   "headings": [
    "Finis Prolegomenorum",
    "Ontologia"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s06-001",
     "kind": "heading",
     "aa": 784,
     "text": "Finis Prolegomenorum Ontologia"
    },
    {
     "id": "metaphysik-mrongovius-s06-002",
     "kind": "text",
     "aa": 784,
     "aaEnd": 785,
     "pages": [
      {
       "p": 785,
       "i": 1881
      }
     ],
     "ms": [
      {
       "p": 62,
       "i": 2036
      }
     ],
     "text": "Wir fangen itzt die Wissenschaft von den Eigenschaften aller Dinge überhaupt an, die man Ontologie nennt. (Ontologie soll die Wissenschaft seyn, die von den generalen prädicaten aller Dinge handelt, das sind solche praedicate, die den mehrsten Dingen gemein sind — sind die praedicate nicht universalia, i.e. die allen Dingen gemein sind, so weiß man gar nicht, was ontologie sei. Sie müßen allen Dingen zu kommen, wenn nicht copulative, d.h. daß ihnen beyde zukommen, so doch disjunctive, eines von beyden, z. B. zusammengesetzt und nicht zusammengesetzt. — Diese praedicate kommen allen höheren zu, aber nicht copulative, d.h. daß ihnen beyde praedicate zukommen sollten, sondern disiunctive, eines von beiden. Wenn ich sage generale praedicate, so findt noch immer eine Ausnahme statt, und wie weit erstreckt sich die?). Man sieht leicht ein, daß sie nichts enthalten werden als alle Grund Begriffe und Grund Sätze unsrer Erkenntniß a priori überhaupt: denn wenn sie die Eigenschaften aller Dinge erwägen soll, so hat sie zum object nichts als ein Ding überhaupt, i.e. ieden Gegenstand des Denkens, also keinen bestimmten Gegenstand. Da bleibt mir also nichts als das Erkennen übrig, das ich betrachte. (Die Wissenschaft, die von Gegenständen überhaupt handelt, wird von nichts als von den Begriffen handlen, durch welche der Verstand denkt, also von der Natur des Verstandes und der Vernunft, insoferne sie a priori etwas erkennt. Das ist transcendental Philosophie, die nicht von den Objecten a priori etwas sagt, sondern das Vermögen des Verstandes oder der Vernunft a priori was zu erkennen, untersucht, sie ist also eine Selbst Erkenntniß des Verstandes oder der Vernunft dem Inhalt nach, so wie Logic eine Selbst Erkenntniß des Verstandes und der Vernunft der h orm nach ist; zu der transcendental Philosophie gehört nothwendig Critic der Reinen Vernunft. Da man aber Ontologie ohne Critic abhandelte ■ — was war damals Ontologie? Eine Ontologie, die keine transcendental Philosophie war. Man philosophirte also hin und wieder ohne zu fragen: kann man das auch? Die transcendental Philosophie ist das resultat der Critic, denn wenn ich den Umfang und die Quellen im Zusammenhang vorstellen kann, so ist die zusammenhängende Vorstellung der principien a priori die transcendental Philosophie, und nehme ich alle Folgen, die daraus fließen, so ist das Metaphysic; ohne Critic weiß ich nicht, ob die Reinen Vernunft und Reinen Verstandes Begriffe alle sind, oder ob nicht noch welche fehlen — weil ich keine Principien habe. Man hat keine Gränzen der Vernunft gesetzt, und ist dabey so weit gegangen als man hat können. Sie sehen wol ein, daß sie in Erfahrungs Sachen nicht alles mischen können, aber a priori können sie alles einsehen und daher, weil sie keiner wiederlegen kann.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-003",
     "kind": "text",
     "aa": 785,
     "text": "(Metaphysic hat das besondre, daß man sie völlig vollenden kann, das Vermögen der Vernunft nach ihren Quellen, Umfang und Grenzen kann man ausmeßen. Metaphysic kann nicht hoffen, in der Natur der Dinge Entdeckungen zu machen, sondern die Vernunft muß alles lehren, ich kann also ausmachen, welche Begriffe ohnabhängig von der Erfahrung in der Vernunft liegen — es ist hier so wie bei einer Grammatic, die kann vollständig seyn, aber kein Lexicon, denn unter der Zeit, da es der Autor schreibt, werden wieder neue Wörter gemacht.)",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-004",
     "kind": "text",
     "aa": 785,
     "text": "(In der Moral kann auch etwas vollendet werden, nehmlich, wie Herr Kant es nennt, Metaphysic der Sitten, d.h. die erste principien der Sittlichkeit, die sind aus reiner, aber practischer Vernunft.)",
     "dehyphenated": 1,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s06-005",
     "kind": "text",
     "aa": 785,
     "aaEnd": 788,
     "pages": [
      {
       "p": 786,
       "i": 662
      },
      {
       "p": 787,
       "i": 3196
      },
      {
       "p": 788,
       "i": 5749
      }
     ],
     "ms": [
      {
       "p": 63,
       "i": 1070
      },
      {
       "p": 64,
       "i": 3645
      },
      {
       "p": 65,
       "i": 5851
      }
     ],
     "text": "(Des Autors Ontologie ist ein Farrago, aufgesammeltes Wissen, was nicht System, sondern rhapsodistisch ist — obgleich er sonst einer der scharfsinnigsten Philosophen war. Die Ursache ist die, weil man noch nichts von Critic wußte.) Die V issenschaft, die die Eigenschaften aller Dinge überhaupt abhandlen soll, muß eine Wissenschaft a priori seyn. Also ist sie eine Erkenntniß aus bloßer Vernunft, kann nicht aus der Erfahrung geschöpft werden, denn die Eifaluung reicht nicht so weit, daß sie kann auf alle Dinge angewandt werden, sie lehrt nicht, was den Dingen überhaupt zukommen muß, sondern was uns die Sinne zeigen; dieweil die Ontologie keinen bestimmten Gegenstand hat, so kann sie nichts als die principien des Erkennens a priori überhaupt enthalten : die Wissenschaft also aller Grund Begriffe und Grund Sätze worauf alle unsre Reine Vernunft Erkenntniß beruht, ist Ontologie. Diese Wissenschaft wird aber nicht eigentlich Ontologie heißen. Denn ein Ding überhaupt zum Gegenstand zu haben, ist soviel als keinen Gegenstand haben und nur blos eine Erkenntniß zubehandlen, wie in der Logic. Der Name aber zeigt an, als hätte sie einen bestimmten Gegenstand. Sie hat aber keinen Gegenstand, der vom Wesen der Vernunft unterschieden wäre, sondern sie betrachtet Verstand und Vernunft selbst, nehmlich die Grund Begriffe und Grund Sätze derselben in ihrem reinen Gebrauch (oder der Reinen Vernunft und des Reinen Verstandes); der schicklichste Name würde seyn transcendental Philosophie. Eine Erkenntniß heißt ein reines Verstand = oder Vernunft Erkenntniß, in so ferne es a priori möglich ist, und ist zu unterscheiden vom empirischen. Eine reine Vernunft Erkenntniß ist aber nicht transcendental. Aber die Betrachtung der Natur und Möglichkeit einer solchen reinen Vernunft, Erkenntniß durch pure Vernunft ist transcendental, z. B. der Begriff von Ursache und Wirkung ist rein aber nicht transcendental, aber die Betrachtung der Möglichkeit eines solchen Begriffs ist transcendental. — Zwischen 2 Puncten ist nur eine gerade Linie möglich, ist ein Satz a priori, aber nicht ein transcendentaler Satz, denn er handelt vom Gegenstände. Wenn ich aber betrachte, wie ist das möglich, zu einer solchen Erkenntniß a priori zu gelangen, so ist das transcendental. Transcendental Philosophie enthält die Principien der Möglichkeit der Erkenntniß a priori. Sie enthält alle Grund Begriffe unsrer Reinen Vernunft und Reinen Verstandes, überhaupt alle Grund Sätze der Möglichkeit der Erkenntniß a jjriori, den Umfang und Gränzen aller Vernunft a priori. Sie bestimmt, wie weit die reine Vernunft kommen kann ohne Erfahrung , ehe das ist, müßen wir den Inhalt der Reinen Vernunft, die Grund Sätze, Grund Begriffe, Principien und Bedingungen des Gebrauchs der Begriffe der Reinen Vernunft wißen. Es ist sehr nöthig, bei Erweiterung unsrer Erkenntniß die Gränzen zu kennen, über die wir nicht gehen können, weil wir sonst Gefahr laufen, auf Verlust zu arbeiten. Wir wagen es, unsre Erkenntniß zu erweitern und wißen nicht, ob wir im Felde der Wahrheit oder der Hirngespinste sind, und selbst unsre wahren Erkenntniße werden zweifelhaft. Die Gränzen der empirischen Kenntniß laßen sich, wie oben gesagt, nicht bestimmen. Die Physic, i.e. die Philosophie über die Erscheinungen der Natur, hat also auch keine bestimmte Gränzen und eben so die Mathematic, weil sie ihre Anschauungen unendlich multipliciren kann. Die Objecte der Reinen Vernunft sind solche, die in der Erfahrung gegeben werden können, z. B. Gott, Welt, Ganze usw. Welches sind nun die Gränzen der Reinen Vernunft? Die müßen zu bestimmen möglich seyn, denn bey der Reinen Vernunft ist mir der Gegenstand gar nicht gegeben; ich darf also nur die Vernunft selbst studiren, denn die ist mir gegeben. Aber bey der Natur W ißenschaft bekommt man die Erkenntniß anderwärts her, nehmlich von der Erfahrung. Bei Erkenntnissen der Reinen Vernunft soll ich alles aus mir selbst spinnen, hier können mir Erfahrung und Anschauung nichts helfen, da das ganze also voraus aus meiner Erkenntniß gezogen werden kann, habe ich in mir Vernunft, also müßen die Gränzen der Reinen Vernunft sich bestimmen laßen und die transcendental Philosophie ist die Grenzbestimmung des Gebrauchs der Reinen Vernunft. — Nun gehen wir zu der wirklichen Erkenntniß, und ehe wir sie und ihre Elemente, d. i. Gränzen, Quellen und Umfang betrachten, so müßen wir noch etwas vorausschicken, nehmlich den Unterschied der analytischen und synthetischen Urtheile. Wir können 2fach urtheilen, entweder indem wir im Urtheilen dem subject ein praedicat beylegen was im Begriff des subjects liegt — oder indem wir im Urtheilen über den Begriff des subjects herausgehn und ihm ein praedicat beylegen, das nicht in seinem Begriff liegt. Jenes ist analytisch, dieses synthetisch, z. E.: Ein ieder Körper ist ausgedehnt, ist ein analytisches Urtheil. Wenn ich einen Körper denke, so denke ich zugleich etwas ausgedehntes. — -Hier kann ich das praedicat durch die analyse des subjects finden. Sie heißen Zergliederungs Urtheile. Herr Kant sagt: Erläuterungsurtheile, weil sie unsere Erkenntniß erläutern. — Ein ieder Körper ist schwer, ist ein synthetisches Urtheil, die Schwere liegt gar nicht im Begriff des Körpers. Alles was geschieht, hat eine Ursache. Im Begriff: es geschieht, ist der Begriff Ursache nicht enthalten. Geschehen heißt werden, was vorher nicht war, hier liegt gar nicht der Begriff der Ursache drin; dieses Urtheil ist erweiternd. Alles was geschieht, existirt in der Zeit, ist analytisch. Es geschieht, heißt: es war eine Zeit, in welcher es entstand, der eine andre Zeit vorherging, in welcher es nicht war. Den Begriff : alles geschieht, darf ich nur zergliedern, um das Urtheil herauszubringen. Die Möglichkeit der analytischen Urtheile ist leicht, denn ich erkenne das nur, was ich im Begriff des subjects schon hatte, ich darf den Begriff nur zergliedern. Ob die synthetischen Urtheile möglich sind, ist eine Frage: die synthetischen Urtheile a posteriori sind leicht möglich. Z.E. ein ieder Körper ist schwer, das lehrt die Erfahrung. Nun bleibt noch die Möglichkeit synthetischer Urtheile a priori zu zeigen übrig, und das ist schwer zu beantworten, macht aber den Geist der ganzen transcendental Philosophie aus. Hätten die Philosophen dieses schon eher untersucht, so wären sie in vielen Stücken schon weiter gekommen. Hie Mathe matic hat eine Menge synthetischer Urtheile a priori. Sie müssen also möglich seyn. Nun müßen wir sehen, wie sie möglich sind, da die Vernunft über die Erfahrung eine große Menge solcher synthetischer Urtheile macht. Ich habe einen Begriff, von dem soll ich gar nicht etwas sagen, was in demselben liegt, sondern außer ihm, und das zwar a priori ohne Beyhiilfe der Erfahrung. Wie ist das möglich? Z.E. alles, was geschieht, hat eine Ursache, d.h.: Es muß dem, was geschieht, Etwas vorausgehen, worauf dieses nach einer Regel folgt, und das, was geschieht, wird als Würkung betrachtet. Wie kann ich mir so a priori eine Erkenntniß erweitern? Diese Quaestio ist nie so allgemein aufgeworfen, da sie doch so überaus nöthig ist. Ja, man kann sagen, daß die ganze Transcendental Philosophie eine Untersuchung der Möglichkeit synthetischer Urtheile a priori ist. Ehe wir von der Beantwortung dieser Frage ausführlich reden, gehn wir noch zurück zu den analytischen Urtheilen.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 22,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s06-006",
     "kind": "text",
     "aa": 788,
     "aaEnd": 791,
     "pages": [
      {
       "p": 789,
       "i": 994
      },
      {
       "p": 790,
       "i": 3608
      },
      {
       "p": 791,
       "i": 6201
      }
     ],
     "ms": [
      {
       "p": 66,
       "i": 531,
       "raw": "6G",
       "inferred": true
      },
      {
       "p": 67,
       "i": 2804
      },
      {
       "p": 68,
       "i": 5364
      }
     ],
     "text": "Alle Urtheile müßen ein princip haben, welches das Criterium der Wahrheit ist. Denn ohne das ist gar kein Unterschied zwischen wahren und falschen Urtheilen. (Daß synthetische Urtheile ein anderes princip haben müßten, sahen wohl die Metaphysicer ein — Leibnitz machte dazu das principium rationis sufficientis: den Satz glaubt ieder, aber wie kommen wir dazu? Wolff wagte es, einen Beweis dazu hinzuzufügen aus dem princip des Wiederspruchs, — er sähe aber wohl ein, daß er nicht zulänglich sey, sagte also in der Anmerkung dazu, wenn dieser Beweis auch nicht stringent wäre, so könnte man sich hier auf den gemeinen Menschen Verstand berufen. — Das ist wohl wahr, wenn es aber ein Satz a priori seyn soll, muß er auch a priori erwiesen werden — und völlig, dieser Satz kann auch nicht das princip, d.h. Urteilsprincip, seyn, weil er selbst eines Beweises bedarf. Welches ist das princip der analytischen Urtheile? Denn das sieht ieder leicht ein, daß die synthetischen ein ganz anderes haben miißen. — Denn es ist was anderes, Etwas zu sagen, was im Begriff liegt, als über den Begriff hinauszugehen. Das princip der analytischen Urtheile ist der Satz des Wiederspruchs : cuilibet subjecti non competit praedicato ipsi oppositum. Alle Analyse ist nichts anders als das Bewußtseyn, daß ein gewisses Merkmal im Begriff des Dinges enthalten ist. Das Merkmal, das im Begriff des Dinges enthalten ist, ist zum Theil mit dem Dinge einerley. Jedes analytische Merkmal ist mit dem (nicht ganzen) Begriff identisch, sondern mit einem Theil des selben, z. E. ein ieder Körper ist ausgedehnt, ist würklich identisch geurtheilt. Alle analytisch bejahende Urtheile beruhen auf dem Satz der Identitaet: Cuilibet subjecti competit praedicato ipsi identicum (das praedicat. kann ex parte identicum seyn, z. B. jeder Körper ist zusammengesetzt — oder total identisch, dann ist es ein leerer Satz). Der Mensch ist ein Thier, da sage ich nichts als was ich schon im Begriff des Menschen denke. Der Satz der Identitaet zeigt nichts als die Analyse des Begriffs an (alle analytischen Urtheile sind leicht — und Sätze a priori — denn wir dürfen nur unsre Begriffe durchgehen und sehen was darinnen liegt, man giebt sie fälschlich für Erfahrungssätze aus). Es giebt auch analytische verneinende Urtheile. Analytisch verneinendes Urtheil ist ein solches, wo ich durch die Zergliederung finde, daß ein gewisses Merkmal dem Dinge widerstreitet, z.E. kein Körper ist einfach. Das Einfache widerstreitet dem Zusammengesetzten. Das principium ist: alles das muß vom Dinge verneint werden, was dem Begriff des Dinges wieder -spricht — das principium contradictionis drückt die Verneinung aus, bei welcher ich aus dem Begriff des Dinges nicht herausgehen darf. Sind dieses die principien aller analytischen Urtheile? Ja, alle sowohl analytisch affirmirende als negirende Urtheile stehen unter dem Satz des Widerspruchs. Denn wenn ein praedicat mit dem subject identisch ist, so wiederspricht sein Gegentheil dem subject und ich werde nach dem principium contradictionis die Falschheit gleich erkennen, wenn ich durchs principium identitatis die Wahrheit erkannt, und umgekehrt, ich werde durchs principium identitatis die Wahrheit gleich erkennen, wie ich durchs principium contradictionis die Falschheit erkannt, dieweil ich hier von einem aufs andere schließen kann, so werde ich das principium contradictionis als das allgemeine princip aller analytischen Urtheile annehmen, z. E. ein Körper ist einfach, d. h. dem Begriff des Körpers wiederspricht das Einfache, nicht das Zusammengesetzte. Es kommt ihm also das Zusammengesetzte zu. Es ist gleich, ob ich sage: Ein Begriff widerspricht dem Dinge oder sein Gegentheil ist ihm identisch — und : ein Begriff ist dem Dinge identisch oder sein Gegentheil widerspricht ihm. Das principium contradictionis ist also das princip aller analytischen Urtheile. — Können wir nicht auch sagen, das princip aller menschlichen Erkenntniß? ltespensio: Ja, dann ist es aber nicht ein princip, woraus alle Urtheile können abgeleitet werden, sondern ein Criterium der Wahrheit, welchem kein wahres Erkenntniß zuwieder seyn muß, weil dann der Gedanke in sich selbst wiedersprechend ist, aber das was dem principium contradictionis nicht zuwider ist, ist deswegen nicht wahr, es ist also ein negatives Criterium der Wahrheit. Der Gedanke davon kann möglich seyn, aber die Sache ist nicht deswegen möglich: Z.E. wir können uns eine Kraft des Gemüt-hs denken, wodurch wir andrer Gedanken denken, da ist nichts widersprechendes, die Sache ist deswegen noch nicht möglich. Hier kann das principium contradictionis kein Criterium der Wahrheit seyn. Aber das ist nach dem principium contradictionis falsch, daß ich zugleich denke und nicht denke - — oder mit einem entfernten Gegenstände in unmittelbarer Verbindung stehe. Das principium contradictionis ist ein allgemeines princip aller Menschlichen Erkenntniß, aber nur die Falschheit daraus herzuleiten. Es ist wohl allgemein, aber nicht zureichend. Es kann kein Widerspruch seyn, und die Sache kann doch falsch seyn. Das principium contradictionis ist das allgemeine negative Criterium aller Wahrheit, was dem wiederstreitet, ist falsch (das impoßibile in dem princip des Autors kann nichts seyn als die modalitaet — es soll blos das apodictische des Satzes anzeigen — welches allemal, wie auch hier, nicht immer nöthig ist auszudrücken, weil es sich von selbst versteht). Unser Autor drückt es aus : Impoßibile est aliquid simul eße et non eße. Wie können wir dieses brauchen, da wir noch nichts von Zeit geredet, und so haben sich viele scharfsinnige Autoren versehen (Wir müssen erst, oder können vielmehr fragen, inwiefern ist Zeit möglich?). Der Autor glaubt, dieses sey zugleich die definition des Unmöglichen. Impoßibile quod est et non est oder was sich selbst widerspricht. (Wie wir es ausgedrückt: nulli subjecto competit praedicatum ipsi oppositum, fällt das simul weg und gilt doch allgemein denn einem subject kann nie ein ihm opponirtes praedicat zukommen — aber es kann wohl einem subject ein praedicat zukommen, welches einem andern praedicat desselben subjects opponirt ist, nur nicht zu derselben Zeit, z.B. ein bewegter Körper der einfach ist, ist ein Widerspruch, aber ein Körper der in Ruhe und Bewegung ist, ist kein Widerspruch, nehmlich succeßive wenn dem einen subject ein praedicat zukommen kann, was einem andern praedicat deßelben subjects oppositum ist, muß und kann man nur durch Erfahrung erkennen, oder die Möglichkeit, daß ein Ding verändert werden kann, lehrt die Erfahrung.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 23,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s06-007",
     "kind": "text",
     "aa": 791,
     "aaEnd": 792,
     "pages": [
      {
       "p": 792,
       "i": 2215
      }
     ],
     "ms": [
      {
       "p": 69,
       "i": 1341
      },
      {
       "p": 70,
       "i": 3704
      }
     ],
     "text": "(Das principium contradictionis ist Critic der Möglichkeit und man kann auch sagen der Wahrheit, nur nicht das zureichende, sondern conditio sine qua non.) Wenn das ist, kann ich umkehren: was sich nicht widerspricht, ist nicht unmöglich (cui competit definitio competit definitum). Das ist falsch, denn sonsten wären alle Phantasien, die sich nicht wiedersprechen, Möglichkeiten. — Das principium contradictionis soll aller Erkenntniß vorhergehen, kann also nicht vom Begriff der Zeit abhängen. Einige haben es so ausgedrückt: ut aliquid sit et non sit, das ist auch falsch, denn das ist möglich, daß ein Ding sey und nicht sey, aber succeßive. Alle Dinge können, wie wir wißen, verändert werden und die Veränderung ist eben die succeßio praedicatorum contradictorie oppositorum. Den Satz der Identitaet hat er so ausgedrückt: quicquid est illud est (der Satz der Identitaet enunciirt das positive, was der Satz des Widerspruchs negative enunciirt; denn kämen dem subject identische praedicate zu, so müßte ihm das Gegentheil zukommen, das wäre praedicatum oppositum, das ist aber dem praedicatum contradictum zuwieder. — Dieser Satz des Wiederspruchs ist das oberste logische negative princip, und der Identitaet ist das oberste logische positive princip) (aus beyder principien Zusammensetzung entspringt ein drittes, nehmlich principium exclusi medii inter duo contradictoria, d.h. einem subject muß von 2 praedicaten, die opponirt sind, immer eines zukommen, denn lege ich ihm beyde zugleich bey, so hebt eines das andre auf, und ich denke nichts; negire ich beyde, so denke ich auch nichts (logisch), das heißt, wo eines A, das andre non A ist. Wir vergleichen bey dem principium exclusi medii nicht 2 contradictorisch opponirte Urtheile, sondern ein Ding mit allen möglichen Praedicaten der Dinge überhaupt. Der Verstand geht darauf heraus, einen gegebenen Begriff mit Praedicaten zu versehen aus allen Möglichkeiten.) Das ist ein leerer Satz, alle leere Sätze sind nicht Mittel, zur Deutlichkeit zu gelangen, weil idem per idem erklärt wird, so entspringt kein deutlicher Begriff, e. gr. ein Körper ist, ist ein wahrer Satz, aber leer, und ebenso der Satz quicquid est aliud est. Wenn ich den Begriff durch sich selbst erkläre, so habe ich nichts anders gedacht. Bei unsrer Erklärung haben wir nicht gesagt: praedicatum subjecto per tale identicum. Das wäre auch leer, z.E. Körper ist Körper, sondern ex parte identicum. Das praedicat ist ein criterium falsitatis aller menschlichen Erkenntniß, aber ein positives würkliches praedicat aller analytischen Urtheile, die sich aus demselben ableiten und beweisen laßen. (Ein analytisches Urtheil ist ein solches, wo das subject und praedicat identisch ist; lege ich nun dem subject ein identisches praedicat bei, so lege ich ihm ein oppositum bei und wiederspreche mir daher selbst — beym synthetischen aber nicht, weil da subject und praedicat nicht identisch sind.) Nun kann die Wahrheit der analytischen Urtheile nicht anders erkannt werden, als daß entweder das praedicat mit dem subject identisch ist, oder sein Gegentheil dem subject wiederspricht. Bey synthetischen Urtheilen ist aber kein Wiederspruch, darum kann ich sie nach dem principium contradictionis nicht beurtheilen, z.E. daß Etwas geschieht, ohne daß etwas vorher geht, widerspricht sich nicht, indeßen ist es doch falsch. Es entsteht nur alsdenn ein Wiederspruch, wenn dasselbe aufgehoben wird, was im Begriff des subjects gesetzt ist. Die Wahrheit der synthetischen Urtheile beruhet nicht auf dem Satz der Identitaet. Denn darin besteht das synthetische Urtheil, daß ich was andres setze, als was dem Dinge identisch ist, z.E. alles was geschieht, hat seine Ursache. Ursache ist mit dem was geschieht nicht identisch, sondern ist ganz was andres.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-008",
     "kind": "text",
     "aa": 792,
     "text": "Der Autor sagt, nihil negativum ist soviel als impoßibile, das ist so gewöhnlich, und recht gut. Es wird unterschieden vom nihil privativum, welches einen Mangel bedeutet, z.E. Licht ist etwas positives, Finsterniß etwas negatives. Helle Finsterniß ist ein nihil negativum. Nihil negativum ist das, wovon gar kein Gedanke möglich ist. Ich kann etwas affirmirendes und negirendes denken, ich denke aber gar nichts, wenn ich affirmirendes und negirendes zugleich denke, e.gr. Helle Dunkelheit. Hier kann ich nicht Dunkelheit denken, weil ich Helligkeit denke, und nicht Helligkeit, weil ich Dunkelheit denke — also gar nichts. Wenn ich entgegengesetzte Dinge denke, so hab ich 2 Gedanken, setze ich sie zusammen, so denke ich gar nichts. Man muß sich beim Fortgänge der Erkenntniß hüten, reelle Gedanken so zusammen zu paaren, daß zuletzt gar nichts gedacht wird.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s06-009",
     "kind": "text",
     "aa": 792,
     "aaEnd": 793,
     "pages": [
      {
       "p": 793,
       "i": 134
      }
     ],
     "text": "Contradiction wird eingetheilt in veram et apparentem, z.E. pia fraus scheint keiner zu seyn und ist doch ein würklicher Widerspruch, denn der fromm ist, kann nicht betrügen u.v.v. Daß die Erde den Mond unmittelbar anzieht, ohne ihn zu berühren, ist ein Schein Wiederspruch. Ferner sind sie latenter, wo die contradiction nur durch Analysis kann erkannt werden, z.E. eine erlaubte Nothlüge ist ein verborgener Wiederspruch; man muß erst den Begriff zeigen, denn Noth kann keine Erlaubniß zu lügen geben — Patenter, wo keine Zergliederung nöthig ist. Man muß nicht iemanden gleich des offenbaren Wiederspruchs beschuldigen, denn wäre er ihm bekannt, so würde er sich nicht wiedersprechen. Die patentes sind also nur relativ patentes. Will man einen der absurditaet, i.e. des contradictorischen patentis beschuldigen, so muß er latentem in patentem verwandeln, und beharret der Gegner doch dabey, so nimmt er eine absurditaet an.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s06-010",
     "kind": "text",
     "aa": 793,
     "aaEnd": 794,
     "pages": [
      {
       "p": 794,
       "i": 1706
      }
     ],
     "ms": [
      {
       "p": 71,
       "i": 0
      },
      {
       "p": 72,
       "i": 1598
      }
     ],
     "text": "Neben bey können wir noch das principium exclusi medii inter duo contradictoria anführen. 2 opposita praedicata, A et non A, kann man nicht zugleich setzen, das ist ein Wiederspruch. Zwey entgegengesetzte Praedicate zugleich aufzuheben geht auch nicht an, sondern eines muß dem Dinge zukommen, das sagt das principium exclusi medii etc., z.E. rund oder nicht rund, beyde können nicht dem subject zukommen nach dem principium contradictionis, aber beyde auch nicht vom subject verneinet werden nach dem principium exclusi medii etc. Dieses läßt sich nicht herleiten aus dem principium contradictionis: denn wenn 2 opponirte Praedicate Einem Dinge nicht zukommen können, sondern eins verneinet werden muß, so wird zugleich das andre dafür gesetzt. Mithin ist das principium contradictionis doch das Erste. Nach diesem princip können wir viele analytische Urtheile a priori machen, wir dürfen den Begriff zergliedern und sehen, was drin enthalten ist, und das eine davon bejahen, oder sein Gegentheil verneinen, z.E. Körper, da denke ich mir ein Ausgedehntes. Ich sage also, ein Körper ist ausgedehnt, oder kein Körper ist nicht ausgedehnt. — Das ist ein analytisches Urtheil a priori. Aus allen Begriffen, die sich zergliedern lassen, kann man analytische Urtheile a priori fällen; sind sie einfach, so können sie nicht zergliedert werden, z.E. Seyn, Etwas. — Wir kommen jetzt zu den synthetischen Urtheilen. — Die Erfahrung ist etwas anders als eine Kette synthetischer Urtheile a posteriori. Wir wollen aber nicht fragen: Wie sind synthetische Urtheile a posteriori möglich, das ist deutlich, z.E. ich habe Gold, ich will mehr davon wissen, als in meinem Begriffe von Gold liegt, so nehm ich die Erfahrung zu Hilfe, sezze es in verschiedene Umstände, wodurch ich mehr und mehr davon gewahr werde und bemerke, z.E. biegsahm, feuerbeständig etc., denn hab ich ein synthetisches Urtheil a posteriori. Die ganze Erfahrung ist nichts als die synthesis von Wahrnehmungen. Bewußtseyn der Empfindung ist Wahrnehmung. Von puren Empfindungen kann man sich keine Begriffe machen und sie andern nicht mittheilen, denn es ist die Art, wie man sich bey etwas befindet. Ein andrer befindet sich wieder anders. Aber von der synthesis der Wahrnehmungen kann man sich Begriffe machen. Weil wir da nicht paßiv sind, kann uns also alles das bewußt seyn, was wir thun möchten.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s06-011",
     "kind": "text",
     "aa": 794,
     "ms": [
      {
       "p": 73,
       "i": 428
      }
     ],
     "text": "Die Erfahrung giebt synthetische Urtheile a posteriori. Können wir nicht synthetische Urtheile a priori haben? Auf der Beantwortung dieser Frage beruht die Möglichkeit der ganzen Metaphysic. (viele leugnen synthetische Urtheile apriori und eben dadurch die ganze Metaphysic — ist Metaphysic möglich, so sind auch solche synthetische Urtheile a priori möglich, und ob sie es sind, ist die erste Cardinal Frage in der Metaphysic. Wir finden hier gleich große Schwierigkeiten. — Wir legen einem subject ein praedicat bey, was in dem Begriffe desselben nicht lag, z. B. alle Substanzen sind beharrlich, alle accidencen veränderlich, das ist ein synthetischer Satz. Im Begriff der Substanz liegt nichts, als daß sie keine Eigenschaft eines andern Dinges, sondern ein Ding selbst ist. — Ist es a priori oder a posteriori? Um das zu unterscheiden, muß man sehen, ob der Satz eine Nothwendigkeit enthält oder nicht. Denn die Erfahrung lehrt bloß, daß Dinge sind, nicht daß sie seyn sollen. — Hier bey diesem Satz ist Nothwendigkeit, also a priori. Wenn etwas entsteht, was vorher nicht war; so sagen wir, es muß eine Ursache haben. — Das ist ein synthetischer Satz, denn das Geschehen ist was anders als Ursache haben. — Es ist also ein synthetischer Satz und zwar a priori.) Zuerst fragen wir : sind zur Möglichkeit der Erfahrung oder synthetischer Erkenntniße a posteriori nicht gewiße synthetische Urtheile a priori nöthig? Muß es nicht gewiße synthetische Urtheile a priori geben, durch die die synthetischen Urtheile a posteriori möglich sind? und die waren gewiß wahr, weil sie der Erfahrung zu Grunde liegen, und die ist wahr. — Wir sehen also zuerst: ob eine Erfahrung möglich sey, ohne synthetische Urtheile a priori zum Grunde zu legen?",
     "dehyphenated": 5,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-012",
     "kind": "text",
     "aa": 794,
     "aaEnd": 799,
     "pages": [
      {
       "p": 795,
       "i": 131
      },
      {
       "p": 796,
       "i": 2630
      },
      {
       "p": 797,
       "i": 5202
      },
      {
       "p": 798,
       "i": 7775
      },
      {
       "p": 799,
       "i": 10299
      }
     ],
     "ms": [
      {
       "p": 74,
       "i": 0
      },
      {
       "p": 75,
       "i": 1274
      },
      {
       "p": 76,
       "i": 2589
      },
      {
       "p": 77,
       "i": 3702
      },
      {
       "p": 78,
       "i": 4763
      },
      {
       "p": 79,
       "i": 5787
      },
      {
       "p": 80,
       "i": 6935,
       "raw": "so",
       "inferred": true
      },
      {
       "p": 81,
       "i": 8387,
       "raw": "",
       "inferred": true
      },
      {
       "p": 82,
       "i": 10367
      }
     ],
     "text": "Erfahrung hat Materie, i. e. data, und Form, i. e. die Verbindung der datorum. Die Materie machen die Wahrnehmungen aus. Erfahrung ist die Einheit mannigfaltiger Wahrnehmungen. Die Einheit ist die Form der Wahrnehmungen. Hier muß doch eine Regel der Verknüpfung der Wahrnehmungen seyn, durch welche alle Erfahrung möglich ist. Diese Regel kann nun nicht wieder a posteriori seyn, denn sie muß vor aller Erfahrung vorher gehen, also a priori. Es wird also eine Regel a priori geben müßen von der Einheit der Wahrnehmungen, die die Erfahrung möglich macht. Es werden synthetische Sätze a priori seyn, die die principien der Möglichkeit der Erfahrung enthalten, vorausgesetzt, daß Erfahrung nicht ein aggregat der Wahrnehmungen ist, sondern eine nach gewißen Regeln geordnete Einheit der Wahrnehmungen, welches wir in der Folge noch illustriren werden. Nun sind wir bis dahin gekommen, von weitem, als in der Dämmerung zu sehen, daß auf gewiße Weise synthetische Urtheile a priori müßen möglich seyn; weil selbst welche der Erfahrung zu Grunde liegen müßen. Nun müßen wir forschen, welche synthetische Sätze mögen wohl a priori vor aller Erfahrung vorher gehen. — Ich bemerke in meiner Erfahrung zweyerley: Anschauung, die beruht auf den Sinnen und heißt empirische Anschauung und Begriff, der beruht nicht auf den Sinnen sondern kommt durch Kategorien zu Stande, beruht also auf dem Verstände. Ich habe also Anschauung, die gehört für die Sinne und Begriffe, die gehören für den Verstand. Nun fragt es sich: Ob es Anschauungen und Begriffe a priori gäbe, oder alles a posteriori sey. Die Empirische Anschauungen sind Vorstellungen eines Gegenstandes, wie unsre Sinne davon afficirt werden. Die empirische Anschauung hat zwey Stücke: Materie und Form, und die empirischen Begriffe auch. — Die Materie alles empirischen — der empirischen Anschauung, ist Empfindung, die Form ist die Gestalt. Der Begriff hat Materie, d. i. Inhalt, Vorstellungen, Data, die gegeben sind — die Form ist reflexion des Verstandes, wodurch er die Empfindungen so zusammen bringt, daß er Etwas allgemeines dadurch denkt. Der Begriff ist eine durch den Verstand bearbeitete Summe der Empfindungen. Das empirische macht die Materie aus in den Wahrnehmungen und Anschauungen und Begriffen. ■ — Das empirische beruhet auf Empfindüngen, die sind a posteriori. Die Materie aller Vorstellungen ist die Empfindung und uns a posteriori gegeben. — Lasse ich alles aus der Anschauung weg, so behalt ich doch noch die Form, d. i. die Gestalt. Vor aller empirischen Anschauung ist Etwas empirisches, d. i. Empfindung, und Etwas, was a priori kann vorgestellt werden. In iedem empirischen Begriffe ist materie, i. e. Empfindung, und die Form, die gehört für den Verstand, denn sie ist logisch. Nun kann ich das Intellectuelle, die Form, behalten, wenn ich alles empirische weglasse, z. B. bey der Kreide lasse ich die Anschauung weg, so bleibt nur die Form übrig, Grösse, Gestalt, das ist a priori. Die Erkenntniße a priori von der Form der Anschauung und der Form der Begriffe sind der Grund synthetischer Urtheile a priori. Wir müssen also Begriffe haben, die vor aller Erfahrung möglich sind, ihr zu Grunde liegen und synthetisch sind. Empfindung macht die Materie aller Erfahrung aus. Lassen wir das alles weg, so bleibt doch die Gestalt übrig. Im leeren Raum kann ich mir lOOOley Gestalt fingiren. In der Geometrie werden reale Gestalten a priori gedacht, z.E. Kegel etc. : Ich werde also das von ausgedehnten Wesen, was übrig bleibt, wenn ich alle Materie der Wahrnehmung weglasse, die Form der Anschauung nennen. Beym Körper denke ich mir nichts als Raum und Gestalt, d. i. die Form der Anschauung. Die Vorstellung des Raumes hat Jeder a priori, daß er in der Länge, Breite und Höhe ausgedehnt sey, daß zwischen 2 Puncten eine gerade Linie möglich — daher sind sie schlechthin nothwendig. Wir haben also eine Anschauung des Raumes. — Lassen wir alles empirische weg, als Schwere, Dichtigkeit und Farbe, so behalte ich Form und Gestalt übrig. Nun frage ich, kann ich das auch weglassen? Ja, dann bleibt mir aber kein Körper übrig. Durch Körper denke ich mir eine Substanz, der Begriff bleibt mir also noch übrig. Durch Substanz denke ich ein subject, das keines andern praedicat ist. Da komme ich nun schon auf Begriffe. Es ist ein Begriff, der übrig bleibt, wenn ich alles andre vom Gegenstand weglasse. Jeder Körper hat eine Kraft in sich, d. i. ein Grund der Handlung, das ist wieder ein Begriff. Form hat er, eine Menge von Theilen — oder er ist ein ganzes, da darf ich auch den Raum nicht denken. Endlich bleibt noch der Begrif von einem Dinge übrig, das Substanz ist, Kraft hat, Theile, ein ganzes ist, welches keine Gestalt und Figur voraussetzt. Zuletzt bleibt also reine Anschauung übrig, und bleibt die weg, so der reine Begriff : der ist rein, weil er nichts empirisches enthält und hat auch keine Anschauung, ist also transcendental. Alle reinen Begriffe gehören dem Verstände zu. Die Anschauungen liegen ihnen zum Grunde, sie liefern das object — unser Verstand reflectirt, schaut aber nicht an. Was sind Anschauungen? sie sind nichts als Arten, wie unsre Sinne vom object afficirt werden. Wir haben keinen intellectum archetypum, der die hervorbringende Ursache der Dinge wäre, daß der Gegenstand mit der Vorstellung zugleich entspringe. Weil dieses also nicht ist — wie können wir uns die Gegenstände vorstellen, die der Verstand nicht hervorbringt? Eine jede Vorstellung muß mit dem Gegenstände übereinstimmen, sonst ist es kein Erkenntniß. Die \"Übereinstimmung ist 2fach möglich, entweder wenn meine Vorstellung den Gegenstand hervorbringt, oder wenn der Gegenstand meine Vorstellung hervorbringt. Da nun unsre Erkenntniß nicht von der Art ist, daß sie selbst Gegenstände hervorbringt ; so bleibt nur das übrig, daß die Dinge selbst die Erkenntniß hervor bringen, das sind also Erkenntniße, die auf der Art beruhen, wie wir von Gegenständen afficirt werden. Darauf beruhet alle unsre Erkenntniß. Gesetzt, wir würden von keinem Dinge afficirt, so könnten wir von keinem Dinge einen Begriff haben. Die Eigenschaft der Vorstellungskraft, die uns anzeigt, wie wir von den Dingen afficirt werden, ist Sinnlichkeit. Sinnlichkeit ist also eine Receptivitaet, Empfänglichkeit, nach der wir von Dingen afficirt werden. Demnach sind alle Anschauungen sinnlich. Denn wenn uns nichts afficirt, so haben wir auch keine Vorstellung, denn wrenn wir obiecte erkennen sollen, die uns gegeben sind, so können wir niemals die geringste Vorstellung davon haben, wenn sie uns nicht afficiren. Empirische Anschauungen gehören also zur Sinnlichkeit und sogar reine Anschauungen werden dazu gehören, z. B. die empirische Anschauung vom Körper enthält Wärme, Kälte, aber wenn wir auch nur den Raum, auch die Ausdehnung des Körpers nehmen, so wird das als reine Anschauung nichts anders sein als die Form unsrer Sinnlichkeit, von Dingen afficirt zu werden durch äußere Umstände. Der Raum ist also nichts als die Form der äußern Anschauung. Ebenso ist es mit der Zeit. Wir finden in unsrer Seele Veränderungen und Neigungen des Willens, wenn wir alles zusammennehmen, so ist doch immer eine Verknüpfung da, da entweder etwas zugleich ist, oder eines auf das andre folgt. Die Zeit ist also das zugleich und aufeinander sein, sie ist also nichts als die Form der inneren Anschauung, oder des inneren Sinnes. Vor aller Erfahrung gehet also vorher die reine Form der Sinnlichkeit, a priori können wir nichts von Empfindungen wißen, z.E. wer kann dei Aloe ansehen, daß sie bitter sey? aber das können wir a priori wissen, wie wir von Dingen werden afficirt werden, die bloße Gestalten sind, z.E. vom Würfel lasse ich alles empirische weg, so behalte ich doch noch die Gestalt, sehe ich sie von der Ecke, so erblicke ich 3 Quadrate, das kann ich a priori wissen, denn das ist reine Anschauung. Also giebts Erkenntniße a priori, die möglich sind in Ansehung der reinen Anschauung. Wir finden also in unsrer Sinnlichkeit eine Regel, wodurch wir Anschauungen a priori fähig sind, mehr aber freylich nicht, als die Form der Anschauungen. Auf der andern Seite haben wir auch reine Vernunft Begriffe. Ein jeder Gegenstand der Erfahrung muß ein subiect einer Substanz seyn. Wir können uns also verschiedene Begriffe a priori durch den bloßen Verstand denken, denn das bloße Denken kann abgesondert von aller reinen Anschauung betrachtet werden, abgesondert von aller Anschauung und sinnlichen Empfindung. Die Eigenschaften der Dinge, sofern sie Gegenstände des reinen Denkens seyn, kann ich ebenso gut a priori wißen als die Gegenstände der reinen Anschauung. Hier ists klar, daß wir keiner Erkenntniß a priori fähig sind von Dingen der Erfahrung, denn alles beruhet auf der Form der sinnlichen Anschauung, die kann ich a priori wißen, denn vom Raum kann ich was a priori sagen, ohne daß ein Gegenstand da ist. Ich kann vieles a priori sagen ohne Erfahrung, so ferne die Gegenstände der Erfahrung von mir gedacht werden, und wenn ich das, was ich anschaue, nicht dächte, so könnte ich gar nicht sagen, daß ich Erfahrung hätte. Nun habe ich also Anschauung a priori. Die Anschauungen sind Formen der Sinnlichkeit, die ich vorher wißen kann; denn ehe ich afficirt werde, muß sich das Gemüth doch eine Form vorstellen, wie es weide afficirt werden. Wir würden aber auch keinen Begriff von Dingen kriegen, die da angeschaut werden, wenn wir keine Anschauung denken könnten. Wir können uns Begriffe von Dingen überhaupt nur durch den Verstand machen, wenngleich kein Gegenstand gegeben ist, indem wir uns nur die Art vorstellen, wie wir den Gegenstand denken können. Wir sehen also, aller Erfahrung liegt a priori zu Grunde eine Verstandes Anschauung, die nichts ist als die Form unsrer Sinnlichkeit, durch die es möglich ist, daß wir etwas wahrnehmen können und daß alle empirische Anschauungen endlich sind, 2 reine Begriffe a priori, denn da die Erfahrung nicht allein durch Wahrnehmung möglich ist, sondern Begriffe noch dazu kommen müßen, so müßen Begriffe a priori zu Grunde liegen, wodurch ich Wahrnehmungen unter Begriffe bringen kann: die liegen der Erfahrung zu Grunde als Substanz, und hätten wir nicht Begriffe a priori, so würden wir auch keine bekommen. — Die Empfindungen machen keinen Begriff. Diese Erkenntniß a priori wird also 2 Theile haben, der erste enthält die Form der Sinnlichkeit a priori, der andre die Form des Verstandes oder Denkens a priori. Wenn wir also die erste Quelle der Erfahrung betrachten wollen, so haben wir zwey, die eine ist aesthetisch, die zeigt, was zu den Sinnen gehört, und wie wir von den Gegenständen afficirt werden, die andre ist logisch und betrachtet die Form des Denkens. Wir haben also transcendentale Aesthetic, die die Anschauung a priori und die Bedingungen der Sinnlichkeit a priori betrachtet, und durch die werden wir die Möglichkeit der aesthetischen Urtheile erkennen, und wenn wir diese synthetische Erkenntniß a priori in ihrem ganzen Umfange nach werden durchgegangen seyn, so können wir sagen, wir haben a priori Grundsätze, worauf die Möglichkeit der Erfahrung, die auf alle Gegenstände geht, beruht; wir werden zeigen, daß sie gewiß sind, weil die Erfahrung gewiß ist und sie auf ihnen beruht. Wir werden die Gränzen der Erkenntniß a priori bestimmen können. Dieweil alle Erkenntniße a priori keine Bedeutung haben, als daß sie Bedingungen der Möglichkeit der Erfahrung sind, so können sie auch nicht weiter als auf dem Feld der Erfahrung gelten. Die Bemühung der Transcendentalphilosophie wird also seyn, zu zeigen, daß alle unsre Erkenntniße a priori nicht weiter als auf Gegenstände der Erfahrung gehen können, und unsre Vernunft also hindern, die Gränzen der Erfahrung zu übersteigen und Versuche zu wagen, die auf mögliche Gegenstände der Erfahrung abzwecken. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 35,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-013",
     "kind": "text",
     "aa": 799,
     "aaEnd": 801,
     "pages": [
      {
       "p": 800,
       "i": 1041
      },
      {
       "p": 801,
       "i": 3592
      }
     ],
     "ms": [
      {
       "p": 83,
       "i": 499
      },
      {
       "p": 84,
       "i": 1848
      },
      {
       "p": 85,
       "i": 3329
      },
      {
       "p": 86,
       "i": 4596,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Art, wie wir von Dingen afficirt werden, macht die sinnliche Vorstellung möglich. — Alle sinnliche Anschauung hat eine gewiße Form, die der menschlichen Natur eigenthümlich ist. Die äußere sinnliche Anschauung hat die Form, daß uns alle äußere Dinge im Raum erscheinen. Das ist eine besondre Art, wie wir Dinge anschauen. Keine Sache an sich selbst, sondern Form der Sinnlichkeit, daß aus den Vorstellungen Verhältniße entspringen, die Verhältniße des Raums sind. Auch die Zeit ist die Form der reinen Anschauung; sie ist doch nicht etwas, das wir unmittelbar erkennen, und nach dieser doppelten Form der Sinnlichkeit sind alle Vorstellungen möglich. Die müßen wir zuvor erkennen, ehe wir Eindrücke haben. Wir werden also Anschauungen a priori haben, ohne daß uns Gegenstände gegeben sind. Wir dürfen nichts als die Form der Anschauung haben, die beruhet nicht auf den Dingen, sondern auf uns. Nach der Verschiedenheit der subiecte wird man von denselben Dingen auf verschiedene Art afficirt werden, z. B. der Rabe wird durch ein faules Aas angenehm afficirt und wir laufen davon. Jedes subiect hat seine eigne Art afficirt zu werden. Seine Vorstellung beruht also nicht auf dem obiect, sondern auf der besondern Art der Anschauung. Unsre menschliche Natur ist von der Art, daß, wenn wir von äußerlichen Dingen afficirt werden, sie uns im Raume vorstellen, diese Form der Anschauung kann man allein a priori betrachten, weil sie ieder Vorstellung zu Grunde liegt, also vor denselben vorhergeht. Ebenso kann die Zeit a priori erwogen werden, d. i. die Form, durch die wir unsern innern Zustand erkennen. — Das ist alles möglich, weil unsre Anschauung sinnlich ist. — Die beruhet auf der Receptivität, Empfänglichkeit, von Dingen afficirt zu werden. Wir können uns ein Wesen denken, das durch spontaneitaet anschaut aus eigener Kraft, durch sich selbst ohne von Gegenständen afficirt zu werden, so stellt man sich Gott vor, wie dieses möglich, können wir nicht einsehen als vielleicht dadurch, daß die Erkenntniß Kraft Dinge hervorbringt, denn afficirte er sie, nicht sie ihn, davon haben wir aber auch keine Begriffe: unsre Anschauung ist receptivitaet. Unter Anschauung verstehen wir die sinnliche Anschauung durch alle organe, nicht bloß durchs Gesicht. Bey aller Art, wie wir afficirt werden, sind zwo Stücke: Materie, d. i. Empfindungs Eindruck und Form, d. i. die Art, wie die Eindrücke in meinem Gemüth vereiniget sind. Sonst hätte ich Millionen Eindrücke, aber keine Anschauung von einem ganzen obiect. Die Anschauung beruhet eben so auf der Natur als die Empfindung, die hat vermuthlich jeder anders, ob wir gleich dazu dieselben Worte haben. Alle obiecte unsrer Anschauung sind Erscheinungen. Wir sehen nie Dinge, wie sie sind, sondern wie sie unsren Sinnen Vorkommen — wenn ein Wesen, intellectuelle Anschauung hätte, wie wir von Gott denken, das würde die Wesen anschauen, wie sie sind, nicht wie sie erscheinen. Unsre Anschauungs Vorstellungen sind nur Vorstellungen über die Erscheinungen der Dinge. Wir kennen also nur der Dinge Erscheinungen. — Zu unsrer Erfahrung gehört also ltens Anschauung, 2tens Denken, was nicht zu den Sinnen gehört. Anschauen heißt nicht Erfahrung haben. Erfahrung ist ein Erkenntniß, das wir vom obiect der Anschauung haben. Dazu gehört also denken, das kann besonders erwogen werden. Das Denken macht einen Theil der Erfahrung aus, insofern der Verstand daran theil hat. Das Anschauen ist ein theil der Erfahrung, insofern die Sinnlichkeit daran Antheil hat. Alles empirische können wir weglassen, so bleibt reine Anschauung übrig, d. i. Raum und Zeit. Lassen wir das weg, so bleibt das reine Denken übrig — wenn wir uns Gegenstände überhaupt denken und die Bedingungen unter welchen sie sind, so nennen wir das Reine Verstandes Begriffe oder categorien. Sie kommen vom Aristoteles her, da er aber kein princip hatte, sie mit Sicherheit abzuzählen und nicht deduciren konnte, von wo wir sie haben, so geriethen sie zuletzt in Verfall, weil man hier keine Sicherheit hatte. Er nannte sie auch praedicamenta. Wir wollen im voraus ein System der categorien entwerfen, die alle Begriffe erschöpfen, deren sich der Verstand bedient bey der Erfahrung, (die Untersucliung, wie sind synthetische Erkenntnisse a priori möglich, heißt Critic der Vernunft.) Jedes System der Erkenntniß heißt, wenn ihr keine Critic vorhergeht, dogmatisch. Wir können uns also eine dogmatische Metaphysic denken. Und so ist bisher alle Metaphysic gewesen. — Alles dogmatische Verfahren ohne Critic — welches man auch anticritisches Verfahren nennen könnte — ist aber ein Wagstück der Vernunft. — Diese Frage zerfällt in 2. ltensj Wie sind speculative Begriffe, 2tens Urtheile möglich a priori? Der Begrif des Grundes ist ein synthetischer Begriff, denn ich denke mir darunter Etwas, worauf Etwas andres nach einer Regel folgt. Ehe wir diese Frage beantworten können (nehmlich wie kann unsre Vernunft ein mannigfaltiges verknüpfen, ohne die Regel der Identitaet) müßen wir die Tafel der Begriffe a priori, die überall zum Grunde liegen, darstellen. Erst der Urtheile, hiemit hängt zusammen alle Eintheilung der Begriffe",
     "joined": [
      "layout"
     ],
     "dehyphenated": 16,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-014",
     "kind": "table",
     "aa": 801,
     "text": "",
     "lines": [
      "25 1)",
      "2)",
      "3)",
      "Quantitaet",
      "Qualitaet",
      "Relation",
      "Universalitaet",
      "affirmative",
      "categorische",
      "Particularitaet",
      "negative",
      "hypothetische",
      "Singularitaet",
      "infinite",
      "disiunctive"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-mrongovius-s06-015",
     "kind": "text",
     "aa": 801,
     "text": "4)",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-016",
     "kind": "text",
     "aa": 801,
     "aaEnd": 802,
     "pages": [
      {
       "p": 802,
       "i": 314
      }
     ],
     "text": "Modalitaet problematische aßertorische apodiktische Es sind also so viel categorien als Momente des Verstandes beym Urtheilen. Wir haben durch diese Tabelle den Vortheil, daß wir den Ursprung derselben einsehen. — Die Logic handelt von Verknüpfungen der Begriffe, die Metaphysic vom Ursprünge derselben. Wir sehen hieraus, daß der Verstand dieselbe Handlung ausübt, wenn er sich Begriffe macht, als wenn er sie verknüpft.",
     "joined": [
      "inferred",
      "layout"
     ],
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s06-017",
     "kind": "text",
     "aa": 802,
     "ms": [
      {
       "p": 87,
       "i": 0
      }
     ],
     "text": "Alle Verstandes Handlungen reduciren sich auf Urtheile. So viel Momente iedes Urtheils, so viel Momente in Ansehung des Denkens der obiecte überhaupt müßen seyn, d. i. so viel momente der Urtheile da sind, so viel categorien müßen wir haben.",
     "ocrConf": 71
    },
    {
     "id": "metaphysik-mrongovius-s06-018",
     "kind": "table",
     "aa": 802,
     "text": "",
     "lines": [
      "1)",
      "2)",
      "3)",
      "Quantitaet",
      "Qualitaet",
      "Relation",
      "Unitas",
      "Realitaet",
      "Substanz cum accidenz",
      "Multitudo",
      "Negation",
      "caußa cum caußato"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-mrongovius-s06-019",
     "kind": "text",
     "aa": 802,
     "text": "Omnitudo Limitation actio mutua oder commercium",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-mrongovius-s06-020",
     "kind": "text",
     "aa": 802,
     "text": "4)",
     "ocrConf": 40
    },
    {
     "id": "metaphysik-mrongovius-s06-021",
     "kind": "text",
     "aa": 802,
     "text": "Modalitaet poßibilitas existentia neceßitas",
     "joined": [
      "inferred"
     ],
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s06-022",
     "kind": "text",
     "aa": 802,
     "aaEnd": 803,
     "pages": [
      {
       "p": 803,
       "i": 1469
      }
     ],
     "ms": [
      {
       "p": 88,
       "i": 1068
      }
     ],
     "text": "Diese Categorien kann man praedicamenta nennen. Unter diesen Grundbegriffen stehen abgeleitete, die heißen praedicabilia : Unter Omnitudo liegt Ganzes, Vollkommenheit, unter Multitudo: numerus, Infinitudo, unter ordo etc, und so kriegen wir ein völliges System des reinen Denkens ohne Rücksicht auf die Anschauung, die gedacht werden soll. — Raum, Zeit und Empfindung gehören zur Sinnlichkeit, also nicht zu den Categorien — Wir theilen daher die transcendentale Philosophie in 2 Theile: in die transcendentale Aesthetic, d. i. scientia sensuum, die Wissenschaft von der Sinnlichkeit und ihren Vorstellungen a priori. — Die Wissenschaft von den sinnlichen Erkenntnißen a priori handelt also von nichts als vom Raume und Zeit, denn andre sinnliche Erkenntnisse giebts nicht — Sie ist also einganz abgesonderter Theil — und transcendentale Logik, die enthält das Reine Denken a priori oder die Reine Form des Verstandes. — Diese transcendentale Logik unterscheidet sich von der gemeinen dadurch : diese betrifft die Erkenntniß ohne sich zu bekümmern, ob die Gegenstände a priori oder a posteriori sind, iene betrachtet die Erkenntniße des Verstandes, insoferne sie nicht a posteriori seyn können oder die Möglichkeit der Reinen Verstandes Erkenntniß a priori, hieher 35 gehören die Categorien. Aristoteles hatte 10 (viele sind von uns) 1. Substanz und Accidens, 2. Qualitas, 3. Quantitas, 4. Relation, 5. Actio paß io, (i. Quando (gehört zur Zeit), 7. Ubi, 8. Situs (die beyde gehören zum Raume), 9. Habitus (das ist Geschicklichkeit wozu, daß ein Ding zu einer Form empfänglich ist. Habilitaet).",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 72
    },
    {
     "id": "metaphysik-mrongovius-s06-023",
     "kind": "text",
     "aa": 803,
     "aaEnd": 805,
     "pages": [
      {
       "p": 804,
       "i": 2418
      },
      {
       "p": 805,
       "i": 4992
      }
     ],
     "ms": [
      {
       "p": 89,
       "i": 1328,
       "raw": "",
       "inferred": true
      },
      {
       "p": 90,
       "i": 2664
      },
      {
       "p": 91,
       "i": 4306
      },
      {
       "p": 92,
       "i": 5902
      }
     ],
     "text": "Bey Versuchen fand er, daß ihm noch was fehle, nahm also noch 4 postpraedicamenta an: oppositum, prius et posterius, simul, motus (ist gar empirisch), habere (das kann auch keine categorie seyn). Wir haben durch diese Tabelle den Vortheil, daß wir nicht aufs gerathe wohl Begriffe zusammensuchen, sondern hier können wir die Elemente unsres Reinen Verstandes abzählen, so daß keine Lücke übrig bleibt. (Wir haben auch die gehörige Ordnung und werden lieber von der Quantitaet anfangen, weil das die klarsten sind, als von der Modalitaet. wie der Autor, die sind schon weit schwerer, doch müßen wir ihm hier schon folgen). Die Praedicabilien sind auch Reine Verstandesbegriffe, aber aus den Categorien hergeleitet; der Begriff des ganzen ist ein Praedicabile, das unter der Categorie der Omnitudo steht, und so können wir viele Praedicate unter dieser Categorie haben. Wenn man itzt von Categorien, Praedicamenten und Praedicabilien redt, so scheint man die alte scholastische Philosophie aufzuwärmen. — Es sind aber in der That nichts als die Namen übrig vom Aristoteles, dessen Ansicht, die Reinen Vernunft Begriffe herzuzählen und unter ein Register zu bringen, sehr gut und eines Philosophen würdig war, aber nicht reüßirte. — In jedem System zeigt sich bey dem geringsten Mangel eine Lücke, weil da eine Idee des ganzen zum Grunde liegt. Bey einem Sandberge sehen wir das nicht, wenn einige Körner fehlen, aber bey einer Pyramide gleich. Eben dieses findet auch statt, wenn wir ein System der Categorien entwerfen. — Wir können denn wißen, welches die Begriffe sind, die den ganzen Umfang der Reinen Vernunft ausmachen. — Was sind Categorien? Sie sind Reine Vernunft Begriffe, d. i. solche, die völlig a priori sind. Ein Erfahrungs Begriff hat aber so seinen Sitz im Verstände als die Categorie, z. E. : der Begriff vom Körper, wo aber noch viel empirisches ist, d. i. was nichts weiter enthält als Empfindung — und auch Reine Anschauung als Raum, der, wie gesagt, sich a priori vorstellen läßt. Lassen wir das alles weg, so bleibt Substanz, Kraft etc. übrig. Der Reine Vernunft Begriff liegt in der Erfahrung, wo ich alles andre lassen muß, was zur Sinnlichkeit gehört. Das ist ltens Empfindung, 2 Anschauung, wodurch der Gegenstand erscheint. Hier bleibt nun also nichts übrig als das Reine Denken der Erscheinung, das sind die Categorien. Sie sind also das Reine Denken über die Gegenstände, sofern sie durch Anschauung gegeben sind. Unsre Erfahrung besteht im Anschauen und Denken. Die empirische Anschauung ist die Art, wie wir von Dingen afficirt werden. Dadurch wird nichts gegeben als Erscheinung. Die kann der Materie und Form nach betrachtet werden. Raum und Zeit gehört in die Aesthetic. Zur Erfahrung gehört auch das Denken ; der Begriff a priori, wodurch das Denken allein bey der Erfahrung möglich ist, ist Categorie. Hier abstrahiren wir vom Unterschiede aller Obiecte der Erfahrung, so wohl in Ansehung der Empfindung, als Anschauung. Die Categorien sind Vorbedingungen der Erscheinungen, wodurch Erfahrungsbegriffe entstehen, obgleich sie keine Erfahrungs Begriffe sind. — Unsre gemeine Sprache enthält schon alles das, was die transcendentale Philosophie mit Mühe herauszieht. — Diese Categorien sind schon alle bey uns enthalten, denn ohne sie wäre keine Erfahrung möglich, z. B. : Es ist Schnee gefallen. Hierin liegt, daß Schnee ist, Substanz; gefallen, bedeutet ein accidenz, auf die Erde, bedeutet einen Einfluß, das ist actio, gehört also zur caußa. Heute bezieht sich auf die Zeit, gefallen auf den Raum. Lassen wir alle Empfindungen weg, auch Raum und Zeit, so bleibt Substanz übrig, die auf gewiße Weise handelt, sie müßen also verbunden werden, daß der Erfahrungsbegriff entsteht. Setzen wir, wir hätten nicht solche pure Reine Verstandesbegriffe, so könnten wir gar nicht denken noch sprechen. — Erfahrung ist die Anordnung der Erscheinungen und der Begriffe, die Begriffe sind Categorien, sie sind also die Bedingungen der Möglichkeit der Erfahrung, insoferne das Denken dazu gehört — so wie Raum und Zeit die Bedingungen der Möglichkeit der Erfahrung sind, insoferne Anschauung dazu gehört. Categorien sind Reine Verstandesbegriffe, ohne welche keine Erfahrungsbegriffe wären, mithin keine Erfahrung. Durch sie werden die Anschauungen in einen Erfahrungsbegriff gebracht — und nun müßen noch Eindrücke der Sinnlichkeit dazu kommen. Die transcendentale Aesthetic enthält die Elemente unsrer Erkenntniße, die in der Sinnlichkeit liegen. Die transcendentale Logic die Elemente unsrer Erkenntniß, die im Verstände liegen. Sie wird eingetheilt in die transcendentale Analytic, transcendentale Dialectic, wrie bey der allgemeinen Logic. Jene enthält alle Reine Verstandes Erkenntniße, sofern sie nur vor Obiecte der Erfahrung gelten - — und heißt die Logic der Wahrheit der Reinen Verstandes Begriffe; sie hat mit Reinen Vernunft Erkenntnißen zu thun, die nur auf Gegenstände irgend einer möglichen Erfahrung gehen. Die transcendentale Dialectic enthält Reine Vernunft Begriffe, so ferne sie weiter gehen sollen als auf Gegenstände aller möglichen Erfahrung, also über die Grenzen der Erfahrung, und das ist Logic des Scheins ; denn über die Erfahrung können sie nicht gehen, weil sie keine andre Bedeutung haben, als daß durch sie aus gegebenen Erscheinungen Erfahrungen entstehen. Sie haben Wahrheit, insofern sie gehen auf Gegenstände möglicher Erfahrung, denn sie sind nichts als das Denken, welches zur Erscheinung hinzu kommen muß, daß Erfahrung wird. — Sie sind nichts als Begriffe, wodurch gegebene Erscheinungen exponirt werden, d. h. einen Begriff machen, der Erfahrungs Begriff ist. Insofern ein Theil der transcendental Philosophie nichts als die principien der möglichen Erfahrung enthält, so ist er Logic der Wahrheit. Der Satz a priori, der aller Erfahrung vorher geht, ist gewiß, denn was ist gewißer als Erfahrung, und nur um so weit willen ist sie gewiß. Es ist hier ganz besonders mit dem Verstand: Mit den Begriffen, deren er sich bedient, Erfahrung möglich zu machen, versucht er die Erfahrung zu überflügeln. Was entsteht daraus? Sie müßen alle Bedeutung verlieren, dieweil über die Grenzen der Erfahrung die Categorien keinen Gegenstand haben, so ist alle Erkenntniß durch Categorien, wenn sie über die Erfahrung geht, Schein, und die Dialectic ist Logic des Scheins. Wir werden, wie leicht einzusehen ist, nicht zeigen, einen Schein zu erkünsteln, sondern wodurch man den Schein entdecken kann — und die Dialectic ist der größte Zweck der transcendental Philosophie. Aber die Analytic muß vorher gehen. Wir werden die Begriffe analysiren und hier dogmatisch verfahren. Kommen wir an die synthetische Sätze, so werden wir zeigen, daß der, der nur aus puren Begriffen sollte bewiesen werden, es nur in Rücksicht auf mögliche Erfahrung kann. — Die Dialectic wollen wir hier weglassen und was dazu gehört versparen, da wo es gut eingeschaltet werden kann, und hier werden wrir in der Critic geübt werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 19,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s06-024",
     "kind": "text",
     "aa": 805,
     "aaEnd": 806,
     "pages": [
      {
       "p": 806,
       "i": 588
      }
     ],
     "ms": [
      {
       "p": 93,
       "i": 402
      },
      {
       "p": 94,
       "i": 1924
      }
     ],
     "text": "Wir wollen jetzt zu unserm Autor zurückkehren. Wir können aber ohnmöglich nach einem System Vorgehen, ohne unter daßelbe eine Grundlage zu legen. Unser Autor hatte wie alle andre die Absicht, ein System zu entwerfen, aber die Freiheit fehlte gänzlich, oder das princip, das Mannigfaltige zu ordnen. Ueberhaupt fehlte die Idee der Metaphysic: sie war kein System, sondern aggregat. Daher auch der Autor nicht Rechenschaft geben kann, ob das alle die Reinen Begriffe wären. - — Wenn wir also kein System haben, so werden wir analysiren alle Begriffe, die er vorlegt, wenn sie gleich die Ordnung der Categorien nicht haben. Inzwischen werden wir uns auf die Categorien berufen und anmerken, unter welche dieser oder jener Begriff gehört. In der Critic der Reinen Vernunft, die Herr Professor Kant herausgegeben, ist der Umfang der Reinen Vernunft zergliedert, die Idee festgesetzt, aus welcher alle Verstandes Begriffe können eingetheilt werden. Hie Begriffe selbst sind nicht alle analysirt, denn es war nicht nöthig, weil uns nur darum zu thun war, den Umfang und die Grenzen der Reinen Vernunft festzusezzen, so konnten die Theile ausgelassen werden. Sie sind zergliedert, sofern es nöthig war, sie in dem System der Reinen Vernunft zu faßen. Jetzt müßen wir diese Arbeit der Zergliederung vornehmen, zwar nicht nach der Ordnung der Categorien. Wir wollen uns aber darauf beziehen. Das was wir vor uns haben, ist Analytic, hier fehlet uns gleich etwas Wesentliches, nehmlich ein princip aller synthetischen Sätze a priori. Man kann sagen, die Summe der Metaphysic läuft darauf heraus, die Möglichkeit und das Criterium der Wahrheit aller synthetischen Sätze a priori zu zeigen. Ein princip aller synthetischen Urtheile a posteriori ist die Erfahrung; aber das der synthetischen Urtheile a priori haben wir noch nicht. Alle Begriffe, die wir haben, enthalten eine Synthesis, und haben wir eingesehen, wie die möglich ist, so werden wir auch bald ein Criterium der Wahrheit haben. Unsern Autor, der synthetische Sätze a priori vorträgt, wollen wir critisiren, aber eigentlich nicht ihn, denn das würde wenig Nutzen schaffen, sondern die ganze menschliche Vernunft, z. B. den Satz des zureichenden Grundes. Wir werden zeigen, daß es unmöglich sey, solche Sätze a priori durch pure Begriffe zu beweisen, und jedem derselben eine Stelle im System nach den Categorien anzuweisen. Wir nehmen zuerst den Begriff. Der Autor hat sich hier nach Wolff gerichtet, denn der sah wohl ein, daß das principium contradictionis nicht sufficient sey, er nahm also das principium rationis sufficientis dazu. Daher handelt der Autor hier gleich vom Grunde. Wir nehmen zuerst den Begrif",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s06-025",
     "kind": "text",
     "aa": 806,
     "text": "2tes Capitel",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s06-026",
     "kind": "text",
     "aa": 806,
     "text": "Vom Grund und Folge",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-mrongovius-s06-027",
     "kind": "text",
     "aa": 806,
     "aaEnd": 809,
     "pages": [
      {
       "p": 807,
       "i": 212
      },
      {
       "p": 808,
       "i": 2808
      },
      {
       "p": 809,
       "i": 5303
      }
     ],
     "ms": [
      {
       "p": 95,
       "i": 602
      },
      {
       "p": 96,
       "i": 2548,
       "approx": true
      },
      {
       "p": 97,
       "i": 4837
      }
     ],
     "text": "Ratio, respectus, ist ein Mannigfaltiges, insofern durch das eine deßelben ein andres gesetzt oder aufgehoben wird. Also ist alle relation relatio vel nexus, vel oppositionis, z.B. die Bürger einer Republic sind in relatione nexus, durch den einen wird bey dem andern ein Nuzzen gesetzt, oder in relatione oppositionis, in so ferne eines Intereße mit des andern seinem streitet. (Das Verhältniß des Grundes und der Folge und v.v. ist nexus. — Wäre ein Ding nicht ein Grund vom andern, und dies seine Folge, so wären die Dinge ganz getrennt. Das Ding bezieht sich als Grund auf seine Folge, d. i. nexus a posteriori und umgekehrt, das ist nexus a priori. — Etwas das in solchem nexu nicht wäre, mithin nicht Grund und Folge, wäre isolirt, das ist ein italienisches Wort und heißt Isola, eine Insel; denn wüßten wir gar nicht, wie wir dazu gekommen wären, hätten auch kein Merkmal, ob es zu unsrer Erkenntniß gehöre, mithin sind alle unsre Erkenntniße in nexu.) (Nexus sowohl als oppositio sind entweder analytisch, wenn die Verknüpfung nach dem Satz der identitaet, oder synthetisch, wenn sie nicht nach diesem Satz ist — oppositio ist analytisch — nach dem principium contradictionis, ist synthetisch, wenn es nicht nach dem principium contradictionis ist — das kann man nennen nexus und oppositio realis — das analytische logischer nexus, Verknüpfung und Widerspruch beruhen auf Gründen, sind logisch oder real. — Sie können seyn rationis ponendi, da etwas gesetzt wird nach Regeln der Identitaet, oder nicht nach den Regeln der Identitaet, und tollendi, da etwas aufgehoben wird nach dem princip der Identitaet oder nicht, z. B. Ausdehnung ist ein Grund der Theilbarkeit, diese wird durch jene gesetzt nach den Regeln der Identitaet, — aber: jeder Körper hat anziehende Kraft, da wird diese durch jenen (Körper) gesetzt, aber nicht nach den Regeln der Identitaet, und der nexus ist real, jener logisch. Der reale nexus ist nur Möglichkeit, a posteriori zu erkennen. Der Wiederstreit ist logisch, wenn er stattfindet, ob principium contradictionis — real auch ohne das — logische opposita, simul sumta dant nihil negativum, d. i. das Unmögliche, realiter opposita simul sumta dant nihil privativum, d. i. Mangel, und der läßt sich allerdings denken; sind 2 opponirende Gründe in demselben subject, so ist das resultat Zero, daher sind 2 logisch opponirende Gründe, so ist das resultat das unmögliche. Logisch opponirt ist das quo posito tollitur aliud — realiter opponirt ist das quo posito tollitur ratio realem, nicht das aliud). Die Opposition I können wir ansehen als die Verknüpfung mit dem Gegentheil, z. E. Etwas ist der Bewegung entgegengesetzt, so ist es verknüpft mit der Ruhe der Körper. — Unter connexum wollen wir verstehen alle relation, sowohl nexus als oppositum und sagen: connexa sunt, quorum uno posito ponitur aliud, z.E. wenn sich die Pferde bewegen, so wird der Wagen auch bewegt; bey andrer Verknüpfung ist ein respectus von zwey, nehmlich unum, quod ponitur, et aliud, quod uno posito ponitur. A ponitur, B aliud quod posito A ponitur, also sind in iedem nexu 2 correlata; das unum quo posito ponitur aliud, nennen wir Grund, das aliud Folge. A est ratio, B rationatum. Im Verhältniß des Grundes und Folge unterscheiden wir den Grund, — nehmlich das, wodurch ich etwas setze — und Folge, die ist das, was gesetzt wird. Durch die Definition kann ich Grund und Folge nicht unterscheiden. Denn ich kann eben so sagen: posito B, ponitur A (nehmlich bey den hypothetischen Urtheilen, da sagen wir: posito antecedens, ponitur consequens, aber nicht v.v., sondern: posito consequens ponitur quod dem anteceden«). Nun müßen wir zu der Logic zurückkehren, die die Formen unsres Verstandes enthält ohne LTnterschied der Objecte. Bey derselben sehen wir, daß wir aus dem Grunde auf die Folge schließen können, aber nicht umgekehrt von der Folge auf einen bestimmten Grund. Der nexus der Folge mit dem Grunde ist gewiß, aber nicht mit dem gesagten Grunde. Jetzt ist unsere Definition gleich in Ordnung gebracht: Ratio est id, quo posito aliud determinate ponitur, rationatum quod non ponitur nisi posito alia. — Man kann auch sagen: rationatum est quo posito ponitur aliud — -sed indeterminate ; denn ist eine Folge, so muß auch immer ein Grund da seyn, und ist etwas ein Grund, so muß auch immer eine Folge da seyn, nur im ersten Fall ist es indeterminate, im andern determinate.) Man kann bey manchem Dinge sehen, daß es eine Folge ist, aber den Grund können wir nicht wißen. Jetzt haben wir ein Criterium des Grundes, nehmlich: quo posito determinate, ponitur aliud. Determinate bedeutet secundum regulam generalem. Ein ieder Grund giebt eine Regel, daher ist der nexus des Grundes und der Folge nothwendig. (Logischer Grund ist ein Erkenntniß, auf welches ein anderes folgt nach einer Regel. Z.E. Nothwendigkeit ist der Grund von der Unveränderlichkeit. Das eine ist nicht die Ursache vom Daseyn des andern. Real Grund ist das Ding, auf das ein andres folgt.) Wird Etwas gesetzt, so wird dadurch andres gesetzt nach einer allgemeinen Regel. Der Ausdruck Folge ist unbestimmt, oft braucht man ihn von der Zeit, wir werden uns daher oft des Ausdrucks rationatum bedienen. So bedeutet er den Zusammenhang mit dem vorigen. (Grund enthält das, worauf es nach einer allgemeinen Regel folgt,) z.E. er hat immer das Fieber gehabt, aber da er China brauchte, verschwand es, so ist China der Grund des Verschwindens des Fiebers. Das Criterium des Grundes ist nicht, daß Etwas darauf folgt, sondern daß Etwas nach allgemeinen Regeln folgt. — Wohin gehört der Begriff? In die Categorie der Relation. — Dem Begriff der Ursache aber den Begriff des Grandes vorauszusetzen, der wäre das praedicamentum von ienem, und wir haben ihn nicht in die Tafel der Categorien gebracht? Responsio: Die beyden Begriffe von Grund und Folge sind logisch, aber nicht transcendental. Ursache und Wirkung sind Dinge. Ursache ist das, woraus die existenz eines andern folgt. In der Logic wird von der existenz gar nicht geredt — nicht wie ein Ding der Grund vom andern Dinge ist, sondern wie ein Begriff der Grund von andern Begriffen ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s06-028",
     "kind": "text",
     "aa": 809,
     "aaEnd": 810,
     "pages": [
      {
       "p": 810,
       "i": 1692
      }
     ],
     "ms": [
      {
       "p": 98,
       "i": 712
      },
      {
       "p": 99,
       "i": 2710
      }
     ],
     "text": "Wir haben hier von einem solchen Verhältniß von Begriffen geredt-, wo man von einem auf den andern bestimmt schließen kann; aber daß es solche Dinge gäbe, von denen ich von einem aufs andere schließen kann, gehört für die Metaphysic. Jetzt wollen wir die Möglichkeit. des real Grundes betrachten : daß wenn ein Ding gesetzt wird, das andre sich dadurch bestimmt setzen laße, — nicht das logische, da ich von einem aufs andre schließen kann. — Wenn das Ding, auf welches geschloßen werden soll, vom andern realiter unterschieden ist, so kann die Möglichkeit keine menschliche Vernunft einsehen, daß ein Ding der Grund von einem andern Dinge seyn könne, die Erfahrung lehrt es, aber die Vernunft kann es uns nicht begreiflich machen. (Alle Gründe sind entweder rationes cognoscendi, wenn eine Erkenntniß ein Grund von andern ist, e.gr. zusammengesetzt ist ein Erkenntniß Grund von theilbarem — oder wenn man eines Menschen Fußstapfen sieht, so sagt man, es sind Menschen da gewesen, ienes ist also Erkenntniß Grund, nicht ratio fiendi, sonsten müßten die Fußstapfen der Grund des Daseyns des Menschen seyn, Ratio eßendi ist der Grund von dem, was dem Dinge zukömmt nach seiner Möglichkeit betrachtet, z. E. die 3 beiten im A sind der Grund der 3 Winkel. Hier rede ich blos vom möglichen A, in Wirklichkeit betrachtet, e. gr. Tinte und Feder ist ratio fiendi des A> und ratio fiendi ist Ursache). Sie müßen aber real, nicht versteckt verschieden seyn, sonsten sind sie doch einerley, z.E. wenn ich A setze und doch B gesetzt wird, ist es gar nicht einzusehen. Ich kann doch aber so schließen, sonsten hätte die Logic unrecht. Ich kann es aber nicht bey realiter verschiedenen Dingen. Logisch verschieden sind Dinge, wenn sie wirklich einerley sind, aber versteckt, und der nexus des Grundes und der Folge ist analytisch nach der Regel der Identitaet: (Was als rationatum existirt, ist dependens) z.E. weil Etwas ein Körper ist, ist es theilbar. Der Schluß, den man in der allgemeinen Logic hat von Grund auf Folgen, welches nexus logicus ist, läßt sich leicht begreifen, aber der real nexus, der synthetisch ist, gar nicht, wo die Folge vom Grunde real verschieden, z. B. Schnee mit Salz verursacht Frost. Hier ist kein nexus nach der Regel der Identitaet. Es kommt zum Grunde eine Folge, die gar nicht im Begriff des Grundes lag, und dieser synthetische nexus kann durch keines Menschen Vernunft eingesehen werden. Es ist eine merkwürdige Eigenschaft des Verstandes : Er schließt vom Grund auf die Folge, und die Möglichkeit hievon kann er nicht einsehen — und dann kommt noch mehreres vor. — Alle relation ist, wie gesagt, nexus oppositorum. Denken wir uns eine logische Oppositio, die ist analytisch. Die real Opposition ist synthetisch. Logische Opposition ist contradictoria. Ein eckigter Zirkel ist eine Contradiction. Zwey logische opposita heben sich ganz auf, und es bleibt nichts (nihil negativum). Zwey real opposita heben sich nicht auf, sondern die Folgen heben sich auf, und was durch ihre Verbindung entsteht, ist zero, Null, nihil privativum, z.E. ich kriege eine Erbschaft, das verursacht Vergnügen, ich muß eben soviel Schulden tilgen, das verursacht Mißvergnügen. Die Opposita können recht gut zusammen seyn, nur die Folgen heben sich auf, und ich bleibe im Zustande der Gleichheit. Zwey real opposita können also zugleich in einem Dinge seyn, denn die Folgen werden nur aufgehoben, aber logische opposita können nicht zugleich in einem Dinge seyn (logische Opposita sind entweder contradictorie opposita, wie z. B. A et non A, oder disparata, z. B. jeder Körper ist entweder roth oder grün. Die disparata enthalten außer der contradictio opposita noch Etwas, was hinzu gethan wird, z.E. Etwas ist entweder roth — das contradictorie Opposition wäre nicht roth. Bey der disparaten Opposition ist noch etwas darüber, nehmlich grün. Das principium exclusi rnedii sagt nicht, daß von 2 disparaten praedicaten eines den Dingen zukomme, sondern contra Opposition). Man kann sagen, daß das ganze Spiel der Veränderung des universi von real Oppositionen herkommt. — -Weil sich hierdurch nur Folgen aufheben, so wird nicht daßelbe Ding aufgehoben, sondern ein anderes, nehmlich die Folge. Die real Oppositionen können also zusammenseyn. Wir kommen zum Begriff der",
     "joined": [
      "layout"
     ],
     "dehyphenated": 18,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-029",
     "kind": "text",
     "aa": 811,
     "text": "Möglichkeit und Unmöglichkeit",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-030",
     "kind": "text",
     "aa": 811,
     "text": "Der Autor redet erst von Unmöglichkeit, dann von Etwas und möglichem.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s06-031",
     "kind": "text",
     "aa": 811,
     "aaEnd": 812,
     "pages": [
      {
       "p": 812,
       "i": 2284
      }
     ],
     "ms": [
      {
       "p": 100,
       "i": 250,
       "raw": "ioo",
       "inferred": true
      },
      {
       "p": 101,
       "i": 2418
      }
     ],
     "text": "Anmerkung: Wenn 2 Begriffe von, zum Beispiel hier: möglich und unmöglich, opponirt sind, so stehen sie iederzeit unter einem höheren Begriff — denn die Opposition stellt immer einen disiunctiven Satz vor. Nun muß doch ein eingetheilter Begriff seyn, der die opponirten Begriffe zu Gliedern der Eintheilung hat, und der ist ein höherer Begriff. Was ist möglich oder unmöglich? Der Gegenstand (doch kann man Gegenstand auch mit unmöglichen praedicaten denken) ist demnach wol der höchste Begriff in der Ontologie. Das mögliche nennen wir Ding, Etwas, und dem wird opponirt das unmögliche, nichts. Dem Gegenstand aber ist nichts opponirt, mithin möchte er wohl ein noch höherer Begriff seyn als das Etwas. Z.E. unter Ding versteht man 1. Gegenstand überhaupt, 2. das Mögliche, 3. das positive oder realitaet, 4. das was wirklich ist.) Man definirt die Möglichkeit falsch, wenn man sagt, möglich ist das, was keinen Widerspruch enthält; was sich widerspricht ist unmöglich, aber nicht v.v., der Gedanke davon ist möglich, ob die Sache aber ohiective möglich sei, ist noch nicht gewiß. Wovon der Gedanke sich nicht widerspricht, das ist nicht möglich, auch nicht unmöglich. Es ist schwer, sie so zu definiren, daß sie zugleich auf Sachen und Gedanken geht. Was mit allen möglichen Regeln des Denkens übereinstimmte, wäre möglich, aber dann müßte man alle möglichen Regeln wißen. Kein Mögliches ist das, wovon der Gedanke einer möglichen Metaphysic möglich ist, das, von dem der Gedanke möglich, und die Sache an und für sich selbst ohne Rücksicht auf Erfahrung nicht möglich ist, z. B. ein 4eckigter Zirkel, ist logisch unmöglich. Denn der Gedanke ist unmöglich. Logische Möglichkeit ist Möglichkeit des Begriffs, und das principium contradictionis ist hinreichendes criterium derselben. Hievon ist different die reale Möglichkeit, da reicht das principium contradictionis nicht zu. Was aber logisch unmöglich ist, ist auch real unmöglich, aber nicht was logisch möglich ist, ist auch real möglich. (Das Unmögliche ist 2fach: I. Wenn entweder der Begriff selbst nichts ist, z. B. 4eckigter Zirkel, II. oder wenn kein möglicher Gegenstand correspondirt, z.E. die Feen Märchen.) Logische Möglichkeit ist die, worin kein Wiederspruch ist. Metaphysische Möglichkeit ist, wenn die Sache an und für sich selbst möglich ist ohne Beziehung auf meine Gedanken. Die kann kein Mensch einsehen. Wie will ich urtheilen von einer Sache, was sie an und für sich selbst sey, ohne Beziehung auf Erfahrung? Die Möglichkeit des Gedankens macht die Möglichkeit der Sache nicht aus. Die Sache selbst erkennen wir pur durch Begriffe, und alsdenn bleibt uns kein Merkmal der Möglichkeit übrig. Die Logic können wir einsehen, das macht aber bey der Sache nichts aus. Was den Gesetzen der Erfahrung nicht widerstreitet, ist physische Möglichkeit, dieses kann man wohl einsehen, z.E. es sei ein großes Palais in 4 Wochen fertig geworden, ist physisch unmöglich. Moralisch möglich ist das, was nach den Regeln der Sitten möglich ist, und nicht widerstreitet dem allgemeinen Gesetz der Freyheit. Diese Unterschiede sind nöthig zu merken. Viele Philosophen haben die logische mit der metaphysischen Möglichkeit verwechselt, z.E. die Möglichkeit oder Unmöglichkeit der Gespenster kann keine logische Philosophie darthun, kein Vernünftiger muß sie aber glauben, weil er keinen Begriff von ihrer Möglichkeit oder Unmöglichkeit hat. — Auf die Erfahrung muß man hier nicht bauen, denn gemeinhin sind das schwache Leute, die sie erfahren, und die erfahren viel, was nicht wahr ist. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 15,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-032",
     "kind": "text",
     "aa": 812,
     "aaEnd": 816,
     "pages": [
      {
       "p": 813,
       "i": 1255
      },
      {
       "p": 814,
       "i": 3814
      },
      {
       "p": 815,
       "i": 6377
      },
      {
       "p": 816,
       "i": 8872
      }
     ],
     "ms": [
      {
       "p": 102,
       "i": 1134
      },
      {
       "p": 103,
       "i": 3353
      },
      {
       "p": 104,
       "i": 5403
      },
      {
       "p": 105,
       "i": 7645,
       "raw": "",
       "inferred": true
      },
      {
       "p": 106,
       "i": 10278
      }
     ],
     "text": "Wenn in dem Begriff eine Synthesis gedacht wird, nicht nach dem Satz des Wiederspruchs oder der Identitaet, so kann sie gar nicht an dem Satz des Wiederspruchs erkannt werden, denn sie ist nicht logisch, sondern real, und hier haben wir kein logisches Merkmal der Möglichkeit, z.E. jeder Körper ist ausgedehnt, kann erkannt werden nach dem Satz des Wiederspruchs. Ein nicht ausgedehnter Körper ist ein Unding oder unmöglich. Hier erkennen wir die Möglichkeit a priori, aber analytisch, und die Möglichkeit eines analytischen Grundes kann a priori leicht eingesehen werden, z.E. jeder Körper hat eine Veränderlichkeit, analytischer Grund: es ist eine Menge von Theilen, die abgesondert werden können, also enthält der Begriff vom Körper den analytischen Grund der Veränderung. Die Möglichkeit eines analytischen Grundes und seiner Folge fließt aus dem Satz des Wiederspruchs. Wenn ich mir aber einen Grund denke, dessen Folge realiter verschieden ist, so läßt sich das nicht erkennen aus dem Satz des Wiederspruchs. — Es wiederspricht sich gar nicht, daß weil A gesetzt wird, deswegen auch B, aber deswegen kann mans nicht für möglich annehmen, weil es ein synthetisches Urtheil ist und wir nicht den geringsten Begriff davon haben, wie das zugeht. — Real Möglichkeit kann a priori ohne pure Begriffe nicht eingesehen werden. Wir werden in der Folge sehen, daß das criterium der Möglichkeit der Dinge dieses ist: Die Synthesis, die die Möglichkeit der Erfahrungs Bedingungen enthält, ist möglich, das geht aber nur auf die Obiecte der Erfahrung. (Wird etwas außer dem nexu betrachtet, so sagt man: spectatur per se oder interne, in nexu sagt man: interne spectatur.) — Etwas ist innerlich oder an und vor sich selbst möglich und relative in Beziehung und Verknüpfung mit andern Dingen. (Das interne impoßibile ist nihil negativum; Nichts durch einen bloßen Mangel woran, nennt man nichts. — Interne ist manches möglich, was externe in der Verknüpfung nicht möglich ist, d.h. auch bedingt möglich, die Bedingung ist hier soviel als Grund, z. B. es ist an sich möglich, daß ein Mensch reich werden kann, aber auch bedingt, denn seine Eltern sind reich, d.h. es ist noch überdem ein Grund dazu. — Bedingung so zu nehmen, ist nicht dem Sprachgebrauch gemäß — eigentlich bedeutet sie eine restiiction, z.E. mancher Befehlshaber kann Befehle geben, wenn das Volk dazu einstimmt.) Das innre criterium der Dinge ist der Satz des Wiederspruchs, aber lange nicht zureichend, und relative ist die Möglichkeit eines Dinges in Beziehung auf seine Gründe oder Folgen. Z.E. Es ist möglich, daß der Mensch zu großen Reichthümern gelange, aber wegen Faulheit, Unschicklichkeit und Mangel an reichen Anverwandten ist es unmöglich. — Was den Bedingungen, unter denen etwas möglich ist, wiederspricht, ist hypothetisch unmöglich, was sich selbst wiederspricht, ist absolute unmöglich. Etwas kann an sich selbst möglich sein, aber hypothetisch, entweder unter seiner logischen oder realen Hypothese, ist es unmöglich. Die hypothetische Unmöglichkeit setzt tacite die absolute Möglichkeit voraus, denn was an sich selbst gar nichts ist, kann in logischer relation betrachtet werden. Wir kommen itzt zu dem berühmten Satz des zureichenden Grundes (der ist der erste synthetische Satz a priori), Der Autor redt hier nicht von existirenden, sondern möglichen Dingen. Er heißt in seiner ganzen Allgemeinheit ausgedrückt: nihil est sine ratione. Hier wollen wir andre Worte substituiren: id quod habet sme rationem aliquam est rationatum, also: omne poßibile est rationatum, ist ganz dasselbe. (So drückt ihn der Autor aus, er behauptet aber doch nachher ein Wesen, welches Grund aber keine I olge ist. un hilft sich so heraus, daß er sagt, das hat den Grund in sich selbst, das ist absurd, der Grund muß immer was andres seyn, und ist er es nicht, so ist kein Grund. Es ist so, als wenn ich sage, ich will etwas, warum? weil ich es will, d.h. noch ist gar kein Grund, und das veile muß man originarium nennen, (ebenso das oberste Wesen ens originarium). Jetzt fällt der Satz sehr widersprüchig in die Augen, wir sehen lauter Folgen und keinen zureichenden Grund, der bloß ein Grund wäre. Der Inbegriff aller Dinge würde was sein, quod non poneretur nisi posito nihil. Der Grund der Möglichkeit aller Dinge wäre also ein Unding. Wir werden daher eine restriction brauchen müßen. Nehmlich: alles Zufällige hat einen Grund, zufällig ist das, dessen Gegentheil möglich ist, das können wir nicht aus puren Begriffen erkennen. Das logisch mögliche wohl, aber das reale nicht. Die logische Zufälligkeit läßt sich aus puren Begriffen erkennen, aber die reale Möglichkeit des Gegentheils kann auf keine Weise eingesehen werden. Da die Zufälligkeit der Dinge nicht a priori durch pure Begriffe erkannt werden kann, so müßen wir sagen, alles empirisch zufällige hat seinen Grund, d.h. das Zufällige in der Erscheinung; empirisch zufällig ist das, dessen Gegentheil empirisch möglich ist, wie die Erfahrung zeigt, daß etwas ist, welches vorher nicht war. Etwas geschieht, bedeutet immer die empirische Zufälligkeit. Also heißt der Satz auch so : alles was geschieht, hat einen Grund. Das Geschehen enthält ein Entstehen oder Vergehen in sich, das sind die species, lenes das genus. Dieser Satz des zureichenden Grundes soll bewiesen werden, aber nicht aus puren Begriffen. Denn es ist ein synthetischer Satz, wo ich aus meinem Begriff heraus gehe, um einen andern hinzuzusetzen, der in meinem gegebenen nicht enthalten war. Aber wir finden doch bey uns eine gewiße Pertheylichkeit für diesen Satz, wie ihn der Autor vorgetragen. Denn iede Behauptung die ungegründet ist, ist falsch. Hier ist eben das Blendwerk. Wenn wir von allem was geschieht, Grund angeben müßen, so folgt noch nicht, daß die Dinge an sich selbst einen Grund haben müßen, und hierin verwirrt man sich, z.E. das Höchste Wesen hat keinen Grund und dennoch müßen wir Gründe anführen, daß es da ist. Man kann den Satz auch so ausdrücken: Alles, was folgt in der Sinnlichkeit oder sinnlichen Anschauung, das folgt in den Begriffen des Verstandes. Oder, was als Folge vorgestellt werden kann der Sinnlichkeit, kann als Folge vorgestellt werden durch den Verstand. Hiedurch empfiehlt sich dieser Satz — da er, wie eben gesagt, nicht aus puren Begriffen erwiesen werden kann, so wird er einen anderen Beweis haben müßen. — Wir werden in der Folge sehen, synthetische Erkenntniße a priori haben eine Gültigkeit, in sofern sie Grundsätze der Möglichkeit der Erfahrung sind (alle unsre Urtheile haben einen Grund, warum das praedicat dem subject zukomme, bei analytischen Urtheilen ist es ein Grund der Analysis, bei synthetischen der Synthesis. — Wir haben auch Urtheile a posteriori; diese sind entweder Wahrnehmungs- oder Erfahrungsurtheile, diese setzen immer iene voraus, ■ — die erstem haben nur subjective Gültigkeit; ich sage z. B. mir ist kalt. Die letztem objective oder allgemeine Gültigkeit. Das hat also blos subjective Gültigkeit, soll es objective Gültigkeit haben oder Erfahrungsurtheil seyn, so muß die Folge der Wahrnehmungen nach Regeln bestimmt, i.e. nothwendig seyn — dann, sagt man, ist im Object auch eine Folge, daß eines auf das andere nach einer Regel folgt, ist Grund, also ist das principium rationis sufficientis der Grund der Möglichkeit der Erfahrung, ohne das wäre keine Erfahrung.) Wie ist Erfahrung möglich, oder wie macht der Verstand aus Wahrnehmungen Erkenntniße von Dingen? Er muß principien haben, die sind synthetische Sätze und zu denen gehört nun der Satz auch (die Wahrnehmungen können auf einander folgen, ohne daß die Dinge deswegen folgen. Ich kann z. B. im Hause erst das Dach, dann das Fundament, dann die Fenstern usw. wahrnehmen, ohne daß die Dinge so folgen, denn die sind zugleich.) Er (Satz) gilt von allen Objecten der Erfahrung und wir werden sehen, daß er nicht anders kann bewiesen werden als ein Satz, der von allen Objecten der Erfahrung gilt, über die aber nicht, und so gehts mit allen synthetischen Sätzen a priori, und aller Fehler der Metaphysic besteht darin, daß Sätze, die nur auf Erfahrung gehen, über dieselbe gebraucht werden, da sie doch nur von allen möglichen Objecten der Erfahrung gelten, nicht von Dingen an sich selbst. Sie sind Regeln der Synthesis der Erscheinungen, durch welche blos Erfahrung vom Traume unterschieden ist und so auch principium rationis sufficientis. Der Autor hat ihn bewiesen, aber sehr wunderlich, nehmlich: wenn ein Ding keinen Grund hätte, so wäre sein Grund nichts. Denn wäre nichts der Grund von Etwas, das ist aber ein Wiederspruch. Er hat hier, welches ihm kaum zu vergeben, das logische und metaphysische Nichts verwechselt. Man kann diesen Beweis leicht wiederlegen, wenn man ihn parodirt, das heißt etwas ungereimts daraus beweiset, z. B. du hast Geld im Kasten denn hättest du das nicht, so wäre Nichts vom Gelde im Kasten, denn wäre nichts Geld, also mußt du Geld haben. Der Fehler ist der, man meint einmal nihil als eine negation, das andre mal als Begriff. Es ist nicht gleich, ob ich sage: nihil est sine ratione, oder nihil est ratio. (Aus purem Begriff läßt sich das nicht beweisen, wir müßten noch ein 3tes nehmen, mit dem die Begriffe übereinstimmen, nehmlich den Begriff einer möglichen Erfahrung. Das empirische Erkenntniß, in sofern es als allgemein gültig, d.h. nothwendig betrachtet wird, heißt Erfahrung, das empirische Erkenntniß in sofern es subjectiv gültig ist, Wahrnehmung, und die ist unstrittig, aber nur vor mir, z. B. soll der Satz: auf Sonnenschein folgt Wärme, Erfahrungs Satz seyn, — so muß er heißen: auf Sonnenschein folgt für iedermann Wärme oder nothwendig. Was ist das aber, worauf Etwas nothwendiger Weise folgt? Grund. Soll also obige Wahrnehmung Erfahrung werden, so muß ich mir vorstellen, daß im Sonnenschein der Grund der Wärme liegt, denn gilt er für iedermann. Diese principien nun der nothwendigen Verbindung der Wahrnehmungen sind synthetische Principien a priori, und dazu gehört auch unser Satz — ohne den kann keine Erfahrung statt finden. Soll obiger Satz Erfahrungssatz werden, so muß er unter dem Princip der nothwendigen Verknüpfung der Wahrnehmungen stehen. Die hauptsächlichste Verknüpfung ist die des Grundes und der Folge. — Sollen Verknüpfungen der Dinge allgemein seyn, so muß eine beständigeRegel seyn, sonst kann ich nicht sagen, daß die Folge der Dinge allgemein gelten soll und denn ist es wieder keine Erfahrung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 42,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s06-033",
     "kind": "text",
     "aa": 816,
     "aaEnd": 817,
     "pages": [
      {
       "p": 817,
       "i": 986
      }
     ],
     "text": "Wir haben aber oben gesagt, empirische Erkenntniße oder Erfahrungen enthalten keine Nothwendigkeit. Sie lehrt nicht, daß etwas nothwendig sey, abstrahirt von allen Wahrnehmungen. — Sie setzen Grundsätze voraus, die nothwendig sind und unter denen sie allein möglich ist. Sie lehrt nicht die Nothwendigkeit der Dinge. — Alle Principien der Synthesis, die ich a priori denke, sind Principien der Möglichkeit der Erfahrung und gehen blos auf Dinge der Erfahrung, aber sind doch a priori, weil sie aller Erfahrung vorausgehen, die nur durch sie möglich ist. Sie sind auch synthetisch, ebenso wie die Erfahrung, denn sie ist nichts als synthesis der Wahrnehmungen, die nothwendig gilt, die ich durch Begriffe a priori erkennen kann. Eine synthesis, die in keiner Erfahrung gegeben wird, ist hier platt unmöglich. Aber diese synthetische Principien a priori kann ich einsehen, und sehe sie wirkleich ein, weil sonst keine Erfahrung wäre. Ich kann sie einsehen, denn sie sind blos Erkenntniße die in meinem Verstände liegen. Der Autor sagt, wenn alles seinen Grund und seine Folge hat, so ist alles connex a priori und a posteriori; das ist richtig, aber paßt nicht auf alle Dinge, weil sonst kein oberster Grund wäre.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 78
    }
   ]
  },
  {
   "id": "s07",
   "title": "Vom Zureichenden und Unzureichenden.",
   "titleSrc": "heading",
   "headings": [
    "Vom Zureichenden und Unzureichenden."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s07-001",
     "kind": "heading",
     "aa": 817,
     "text": "Vom Zureichenden und Unzureichenden."
    },
    {
     "id": "metaphysik-mrongovius-s07-002",
     "kind": "text",
     "aa": 817,
     "text": "Ein Grund ist auf 2fache Art zureichend 1. Wir können uns den Grund vorstellen als ein ganzes wie aggregat, 2. Wie Reihe. Die Vollständigkeit eines Grundes als aggregat ist zureichend, als Reihe ist er auch zureichend. Der Grund, wodurch alles in der Folge bestimmt wird, ist zureichend als aggregat, mithin muß alles einen zureichenden Grund haben. Ein unzureichender Grund ist auch wahr, er ist ein Theil vom zureichenden. Der Grund in der Reihe einander subordinirter Gründe ist nicht anders zureichend, als wenn wir alles auf den ersten Grund zurückführen. Er ist gemeinhin zureichend genannt, wenn er fähig ist, die Folgen daraus unmittelbar zu verstehen.",
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-003",
     "kind": "text",
     "aa": 817,
     "aaEnd": 818,
     "pages": [
      {
       "p": 818,
       "i": 1381
      }
     ],
     "ms": [
      {
       "p": 107,
       "i": 490
      }
     ],
     "text": "Der Autor beweist den Satz, alles hat seine Folgen, auch so wie den, alles hat seinen Grund; er läßt sich aber auch nicht aus puren Begriffen beweisen. Gründe betrachten wir in einer Reihe, wenn einer das rationatum des andern ist. In einer Reihe ist immer ein Grund unmittelbar, und ieder ist ein Grund der Folge zum Theil. — Wir können uns also Gründe vorstellen complet, coordinirt und subordinirt. Alle unsre Gründe sind Verbindungen, sind coordination, d. i. die Verbindung der Theile in einem aggregat — und Subordination, d. i. die Verbindung der Theile in einer Reihe. Ein Grund ist zureichend simpliciter oder secundum quid. Mittelbar ist Etwas ein Grund von was andrem, wenn es der Grund vermittelst eines andern ist, — unmittelbar, wenn er der Grund ist nicht vermittelst eines andern, remota posita oder ratiocinium von etwas durch viele rationes intermedias. Bey der coordination der Gründe ist einer das complementum des andern zum zureichenden Grunde, bei der Subordination ist ein Grund die Folge des andern. In einer Reihe sind rationes immediatae, mediatae et simpliciter talis. Die coordination der Gründe ist Verbindung derselben zu einem immediaten zureichenden Grunde, die Subordination der Gründe ist Verbindung derselben zu einem mittelbaren zureichenden Grunde.) (Ein Grund kann zureichend seyn in Ansehung seiner Folgen, und in Ansehung seiner selbst; in Ansehung seiner Folgen, wenn er alles bestimmt, was in derselben enthalten ist, in Ansehung seiner selbst, wenn er keinen anderen Grund voraussetzt. Nehme ich den Inbegriff aller Weltursachen, so enthalten die den vollständigen Grund von dem itzigen Zustande derselben, aber er ist nicht für sich zureichend, d. i. simpliciter talis, sondern nur in Ansehung seiner Folgen, d. i. secundum quid — in der Welt finden wir die rationes simpliciter talis nicht. Das Verhältnis des Grundes und der Folge enthält nur logische Folgerung, d.h. wird eines, so auch das andere gesetzt und zwar nothwendig, und insoferne enthält es den Grund der Möglichkeit der zusammenhängenden Wahrnehmungen, d. i. Erfahrung. In der Reihe subordinirter Begriffe ist das, was in gewißer Absicht zureichend ist, sufficient secundum quid, in aller Absicht simpliciter; folgende canones müßen wir anführen:",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s07-004",
     "kind": "text",
     "aa": 818,
     "text": "posita ratione, ponitur rationatum, erhellt schon aus der definition des Grundes, ferner posito rationato, ponitur ratio quaedam non certa. Z.E. Wenn einer erwürgt ist, ist er todt, aber wenn er todt ist, darf er nicht gerade erwürgt sein.",
     "joined": [
      "inferred"
     ],
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-005",
     "kind": "text",
     "aa": 818,
     "aaEnd": 821,
     "pages": [
      {
       "p": 819,
       "i": 1297
      },
      {
       "p": 820,
       "i": 3818
      },
      {
       "p": 821,
       "i": 6366
      }
     ],
     "ms": [
      {
       "p": 108,
       "i": 353
      },
      {
       "p": 109,
       "i": 2225
      },
      {
       "p": 110,
       "i": 3450,
       "raw": "lio",
       "inferred": true
      },
      {
       "p": 111,
       "i": 4718,
       "raw": "in",
       "inferred": true
      },
      {
       "p": 112,
       "i": 5914
      },
      {
       "p": 113,
       "i": 7641,
       "raw": "118",
       "inferred": true
      }
     ],
     "text": "Bestimmen heißt, von 2 contradictorisch opponirten entgegengesetzten Praedicaten eines dem Dinge beilegen. Alles kann ich vergleichen mit irgend einem möglichen Gegentheil eines Praedicats und mit dem Praedicat selbst. Lege ich dem Dinge das Praedicat bei, so wird das Gegentheil ausgeschloßen. Von 2 Praedicatis oppositis muß eines dem Dinge zukommen, also iedes Ding determinabel seyn. (Die Schlüsse des Autors gehören in die Logik, da kommen sie auch alle vor, nur Grund wird da antecedens und Folge consequens genannt. Sublato rationato tollitur ratio, denn bliebe der Grund, bliebe die Folge auch, aber nicht sublata ratione tollitur rationatum, denn die Folge kann einen andern Grund haben.) (Da einer ieden Folge von 2 contradictorisch opponirten Praedicaten eines zukommt, so ist iedes durchgängig bestimmt — man sagt aber doch, ein Ding ist indeterminirt in Ansehung gewisser Praedicata opposita, wenn durch den Begriff, den wir von ihm haben, ihm keines von beyden zukommt, z. B. jeder Mensch, der da ist, ist entweder gelehrt oder ungelehrt, aber durch den Begriff, den ich vom Menschen habe, ist es unbestimmt, ob er gelehrt oder ungelehrt sey. Es ist nur ein Wesen, welches durch seinen Begriff durchgängig determinirt ist, da ihm nehmlich alle realitaet zukomme, sonst sind Dinge in Ansehung oder durch ihren Begriff in vielen Stücken indeterminirt.) Ein allgemeiner Begriff ist an sich nicht bestimmt, z.E. ein Mensch ist entweder gelehrt oder ungelehrt, ist unbestimmt. Aber ein gelehrter Mensch ist bestimmt. Bestimmen kann man nur durch Synthesis, nicht durch Analysis, denn in Ansehung dessen, was darin liegt, war er nicht unbestimmt. Denn kann ich nur den Begriff bestimmen, wenn ich etwas hinzusezze. Jeder Grund der Bestimmung heißt ratio determinans. Unsre Erkenntniß, wenn sie bestimmt werden soll, muß einen Grund haben, so auch mit Dingen. Wenn 2 Dinge in Ansehung 2er Praedicate unbestimmt sind, so können sie bestimmt werden durch einen bestimmenden Grund. Bestimmung ist von logischen Praedicaten unterschieden. (Das logische Praedicat kann analytisch sein, aber Bestimmung ist immer synthetisch, z. B. man sagt, der Begriff des Körpers wird bestimmt durch Ausdehnung — ich bestimme den Begriff durch ein Praedicat, wenn er ohne daßelbe unbestimmt gewesen wäre, — aber der Begriff des Körpers ist ohne Ausdehnung nicht unbestimmt, denn das liegt schon im Begriff desselben, aber Schwere ist eine Bestimmung). (Kann jeder Grund bestimmt sein oder nicht, oder ist es nur der zureichen -de ? Die mehresten machen hierbei noch immer einen Unterschied, aber das ist falsch — Grund besteht eben darin, daß quo posito, determinate ponitur aliud — der unzureichende Grund determinirt Etwas in der Folge — der zureichende Alles.) Bestimmung ist ein praedicat eines Dinges, wodurch das Gegentheil ausgeschlossen wird. Das ist die gewöhnliche Art, Bestimmung zu denken, nehmlich man siehet es als ein praedicat an, das dem Dinge beygegeben wird, wodurch das Gegentheil ausgeschlossen wird. Das ist nicht genug. Bestimmung ist ein synthetisches praedicat, z.E. ein Körper ist ausgedehnt. Dadurch ist er noch nicht bestimmt. Ein gelehrter Mensch ist bestimmt, denn Gelehrsamkeit liegt nicht im Begriff des Menschen. — Ein praedicat kommt dem Dinge innerlich zu, wenn es schon in seinem Begriff liegt, äußerlich, wenn es ihm zukommt in Beziehung auf andre. (Innerliche praedicate sind solche, die dem Dinge an sich selbst zukommen. — Man theilt sie sonsten auch ein in absolute und respective. Die letzten sind respectiv (ad interna oder externa.) Der Respectus ad externa ist relation, z.E. daß der Mensch Herr über seine Leidenschaften ist, ist respective, aber ad interna; ich betrachte hier das Verhältnis einer Macht gegen den Unterworfenen. Es ist also hier ein respectus ; respective ad externa ist, wenn ich ihn betrachte als Herr und Unterthan. Der Autor erklärt, was idem und diversum ist: A und B sunt eadem, in so fern die Vorstellung von B nichts als eine Wiederholung der Vorstellung von A ist — wenn ich B durch die Vorstellung von A mit vorstellen kann. Wir sehen aber doch, daß 2 Dinge, die wir einerley nennen, nur in einigem Betracht eadem seyn können, weil man sonst nicht würde sagen können: das andre. Unten wird hievon mehreres Vorkommen. Der Autor redet de attributis, modis et affectionibus, das gehört alles in die Logic. Wir merken folgendes: Wir finden in den mehresten Philosophien einen schwankenden Unterschied zwischen Natur und Wesen. Was ist der Unterschied? Natur pflegt man sonst einem Dinge, das nicht für sich selbst besteht, nicht beyzulegen, z. B. von einem A sagt man, er habe eine Natur; bey Dingen, die für sich selbst bestehen, macht man keinen Unterschied. Wir haben oben unterschieden das analytische Verhältniß zwischen Grund und Polge; hier ist der Grund logisch, — und das synthetische Verhältniß zwischen Grund und Folge; hier ist der Grund ein realer Grund. Das Verhältnis des Grundes und der Folge ist analytisch, wenn das praedicat analytisch kann erkannt werden, synthetisch, wenn es nicht so erkannt werden kann. Der analytisch erste wäre Grund aller praedicate eines Dinges und heißt das logische Wesen — der synthetisch erste wäre Grund aller praedicate eines Dinges, heißt das reale Wesen oder Natur (der erste innre Grund alles dessen, was zur Möglichkeit eines Dinges gehört, ist Wesen — und dessen, was zur Wirklichkeit eines Dinges gehört, ist Natur, z.E. dem A in der Geometrie wird man nicht Natur zuschreiben, in dem Begriff jedes Dinges ist immer Etwas von ihm zertrennliches und unzertrennliches, das lte heißt ad poßibilitatem rei seu ad eßentiam pertinens, das 2te extra eßentiale, was nicht nothwendig mit dem Begriff oder Möglichkeit der Sache zusammenhängt. Die Deren können wieder seyn, ut rationis, das ist eßentia, oder ut rationata, das ist attributa — complexus eßentialiam, d.h. der erste wahre obere Grund alles dessen was zum Daseyn eines Dinges gehört, ist Natur) oder der erste logische innre Grund aller Bestimmungen eines Dings ist Wesen, der erste innre real Grund der Bestimmungen eines Dings ist Natur. Den completten innren real Grund aller Bestimmungen zu finden, ist unmöglich. Der logische ist leicht, da darf ich nur meinen Begriff analysiren, bis ich auf solche Begriffe komme, die nicht mehr von andern abgeleitet sind. (Wenn wir klagen, daß wir die Wesen der Dinge nicht kennen, so betrifft das blos die Natur, die Wesen können wir sehr wohl kennen — denn so etwas nicht wirklich ist, so liegt es blos in meinem Begriff. — Handle ich also von dem, was zur Möglichkeit eines Dings gehört, so handle ich von dem, was in meinem Begriff von dem Dinge liegt — und das kann ich doch wissen. Theilt man das Wesen ein, Avie H. P. Kant, in Logisches und Real Wesen, so ist das letztere Natur.) (Das attribut, welches nur aus dem ganzen Wesen des Dings fließen kann, ist proprium — denn ein andres Ding würde ein ander Wesen haben. Das, was immer aus einem Theil des Wesens ein consectarium ist, ist commune, denn der Theil kann bei andern Dingen auch statt finden, z. B. der Mensch ist ein vernünftiges Thier. — Wegen des ersten hat er Vernunft, dadurch ist er vom Geist nicht unterschieden, wegen des letzteren hat er Sinne, da ist er wieder nicht vom Thier unterschieden.) Welcher Mensch will es aber unternehmen, das ganze reale Wesen von Dingen anzuzeigen, die durch Erfahrung gegeben sind ? komparative können wir Etwas das real Wesen nennen, oder in gewisser Absicht können wir bei Untersuchung des real Wesens stehen bleiben, und damit zufrieden seyn. Wir hören oft die Klage, es sind die Wesen der Dinge unbekannt, wir kennen blos die Oberfläche. Das ist ganz richtig, gilt aber nur für das real Wesen. Vieles dahin gehörige können wir erkennen, aber doch nicht alles. Dieses real Wesen ist Natur.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 13,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s07-006",
     "kind": "text",
     "aa": 821,
     "text": "Wir kommen itzt zum Begriff der",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s07-007",
     "kind": "text",
     "aa": 821,
     "text": "Existenz.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s07-008",
     "kind": "text",
     "aa": 821,
     "aaEnd": 822,
     "pages": [
      {
       "p": 822,
       "i": 828
      }
     ],
     "ms": [
      {
       "p": 114,
       "i": 1555
      }
     ],
     "text": "Bey den Categorien haben wir unter dem 4ten Titel, nehmlich unter der Modahtaet, angeführt: Möglichkeit, Wirklichkeit und Nothwendigkeit, dann haben wir befunden, daß sie gar nicht Bestimmungen eines Dings sind oder synthetische Praedicate; sie sind nehmlich Begriffe, wodurch ein Ding mit allen Praedicaten gesetzt wird. Möglichkeit ist nichts als die Übereinstimmung des Dings mit Bedingungen des Denkens. Die Bedingungen sind analytisch oder synthetisch, stimmt es mit ienen nicht, so ist es unmöglich wegen des Satzes des Wiederspruchs. Es muß aber auch mit der synthesis übereinstimmen. Das Princip, welches die synthetischen Bedingungen des Denkens enthält, ist vorläufig dieses: Alle synthesis muß die Bedingungen enthalten, unter denen das Mannigfaltige in eine Einheit gebracht wird - oder: keinem Dinge kann ein synthetisches Praedicat beygelegt werden, als in so ferne es eine mögliche Erfahrung ist. Alle synthetische Urtheile a priori drücken nichts aus, als die Bedingungen einer möglichen Erfahrung. Z.E. Alles was in der Sinnen Welt existirt, ist im Raum, d.h. in so ferne es in der Erfahrung ist. Wenn ich sage, ein Ding ist möglich, so denke ich nichts mehr hinzu. Es ist nicht ein praedicat, das zum Dinge gehört, sondern zu der position des Dings, in so ferne es mit den Gesetzen des Denkens übereinstimmt. Wirklichkeit ist positio absoluta, Nothwendigkeit, wenn positio absoluta so beschaffen ist, daß ihr Aufheben den Gesetzen des Denkens widerspricht. Möglichkeit, Wirklichkeit, Noth-Wendigkeit sind nicht Begriffe der Dinge an sichselbst, sondern Möglichkeit setzt schon das Ding mit all seinen Praedicaten voraus, und ist die Vergleichung des Dinges mit den Gesetzen des Denkens, ob es gedacht werden kann oder nicht. (Wirklichkeit ist das, dem ein Object in der Erfahrung correspondirt ; die Wirklichkeit ist Nothwendigkeit, die aus der Möglichkeit folgt). (Bey der Wirklichkeit kommt das Object zu einem Begriff hinzu, zu dem Object aber nichts). Ebenso die Wirklichkeit; sie sind nur unterschieden in der Art wie ein Ding gesetzt wird. Ob wir zwar gesagt haben, daß sie nicht Praedicate der Dinge an sich selbst sind, sondern rnodi, wie es gesetzt wird, so müßen wir doch einräumen, daß alle Begriffe, auch modal Begriffe, zu Praedicaten gemacht werden können, aber nicht zu realen Praedicaten oder Bestimmungen, sondern logischen, Z. E. Gott ist möglich. Möglichkeit, Wirklichkeit und Nothwendigkeit setzen das Ding voraus, seine Bestimmungen sind aber nicht selbst Bestimmungen. Möglichkeit ist eine position respective auf unser Denken, Wirklichkeit ist positio absoluta. In der Wirklichkeit ist mehr enthalten als in der Möglichkeit, d.h. nicht, durch die Wirklichkeit wird an dem Dinge mehr vorgestellt als durch die Möglichkeit, aber es kommt zu unserem Denken mehr hinzu. Erst setze ich ein Ding respective auf mein Denken, nun setze ich es schlechthin dadurch denke ich offenbar mehr. Zur Illustration wollen wir folgendes merken: — . (bricht ab )",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s07-009",
     "kind": "text",
     "aa": 822,
     "aaEnd": 823,
     "pages": [
      {
       "p": 823,
       "i": 349
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "liu",
       "unresolved": true
      },
      {
       "p": 117,
       "i": 1520
      }
     ],
     "text": ". . . weil wir alles aufs eine nicht reduciren können, aber die Einheit ieder Substanz erfordert es, daß nur eine Grund Kraft sey. Die Substanz, in so ferne sie nicht blos den Grund der accidentien enthält, sondern auch die existenz der accidentien determinirt, handelt sie; oder die Substanz, in so ferne ihr accidentien inhaeriren, ist in action, und in so ferne sie der Grund der Wirklichkeit der accidentien ist, handelt sie, die Substanz, der accidentien durch eine andre Kraft inhaeriren, leidet (paßive). Wie ist die paßion möglich, da doch vorher gesagt ist, daß sie activ ist, in so ferne ihr accidentien inhaeriren? Eine iede Substanz ist activ, in so ferne ihr accidentien inhaeriren, aber auch paßive, in so ferne sie ihr durch trennende Kraft inhaeriren, das widerspricht sich nicht. Z.E. eine Vorstellung eines Trompeten Schalles, die mhaerirt mir durch fremde Kraft, aber nicht allein, denn hätte ich keine vim repraesentativam, so könnte immer geblasen werden, und ich könte keine Vorstellung haben. Aus der Vereinigung einer mit einer andern Substanz entsteht eine Wirkung, nehmlich die Vorstellung vom Trompeten Schall. Mere paßiv können wir nie seyn, sondern jede paßion ist zugleich action. Die Möglichkeit zu handeln ist eine facultas, und zu leiden receptivitas. Diese setzt iene immer voraus. Jede Substanz ist selbstthätig, ohne das könnte sie nicht Substanz seyn; in einem respectu kann sie leidend, aber auch in demselben thätig seyn. Eine blos leidende Substanz ist contradictio, sonst könnte sie keine Accidentien haben. Die actiones immanentes, die eine Substanz in sich selbst hervorbringen, oder transientes, handlen auf eine andre Substanz oder influxus. Substantia patiens ist eo ipso agens, denn das accidens würde nicht inhaeriren, wenn nicht die Substanz Kraft hätte, wodurch es ihr inhaerirte, mithin handelt sie auch, influxus ist daher ein unschicklicher Ausdruck, er bedeutet so viel als migrirte das accidens aus einer Substanz. Was ist denn eigentlich paßio? Die substantia agens bestimmt die Kraft der substantiae patientis zur Hervorbringung dieses accidens, mithin ist alle paßio nichts als Bestimmung der Kraft des leidenden durch äußere Kraft.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s07-010",
     "kind": "text",
     "aa": 823,
     "text": "Actio transiens, wenn ich etwas wirklich außer mir mache, ist 2fach : actio (actuare heißt wirklich machen), substantiae vel accidentiae extra se — das erste, wenn ich Substanz wirklich außer mir wirklich mache, heißt creatio — wenn ich accidentien außer mir wirklich mache, wäre es bestimmt, so heißt das influxus. Eine Handlung, die aus vielen Handlungen besteht, ist composita, die nicht aus kleinern actionen zusammengesetzt ist, ist Simplex.",
     "dehyphenated": 2,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s07-011",
     "kind": "text",
     "aa": 823,
     "ms": [
      {
       "p": 118,
       "i": 150
      }
     ],
     "text": "Kraft ist das Vermögen, in so ferne es hmreicht zur Wirklic keit eines accidens. Der Unterschied zwischen Kraft und Vermögen ist schwer zu bestimmen. Das Vermögen, in so ferne es m Ansehung einer Wirkung bestimmt wird, ist Kraft, und msoferne es unbestimm",
     "ocrConf": 68
    },
    {
     "id": "metaphysik-mrongovius-s07-012",
     "kind": "text",
     "aa": 823,
     "aaEnd": 824,
     "pages": [
      {
       "p": 824,
       "i": 29
      }
     ],
     "text": "6 Kant's Sohril'ten XXIX 1,2 ist, wird Vermögen. Kraft enthält den Grund der Wirklichkeit einer Handlung, Vermögen den Grund der Möglichkeit einer Handlung.",
     "joined": [
      "layout"
     ],
     "ocrConf": 59
    },
    {
     "id": "metaphysik-mrongovius-s07-013",
     "kind": "text",
     "aa": 824,
     "text": "Hie Kraft, die den innerlieh und äußerlich zureichenden Grund einer Handlung enthält, ist lebendige Kraft — insoferne sie blos den innerlich zureichenden Grund einer Handlung enthält, ist sie todte Kraft ; der todten Kräfte in der Welt ist in Ansehung der lebendigen unendlich viel. Hie Verbindung 2er Kräfte, die einander wiederstehen, ist confluens — an sieh ist iede Kraft lebendig — denn existirt sie, so muß die Wirkung auch exist iren.",
     "ocrConf": 59
    },
    {
     "id": "metaphysik-mrongovius-s07-014",
     "kind": "text",
     "aa": 824,
     "text": "Reaction ist nicht Gegenwirkung, sondern Wechselwirkung. Gegen-Wirkung ist die Wechselwirkung, die der Handlung des andern opponirt ist, oder actio opposita patient is in agentem, das nennt man auch impediment ; das ist 2fach: 1. negative, wo keine wirkende Ursachen sind, oder der Mangel von dem an der Ursache, was das eomplement derselben ausmaehen würde: 2. positive, da sind wirkende Ursachen der patientis, die opponirt sind den Handlungen der agenten.",
     "dehyphenated": 2,
     "ocrConf": 65
    },
    {
     "id": "metaphysik-mrongovius-s07-015",
     "kind": "text",
     "aa": 824,
     "aaEnd": 825,
     "pages": [
      {
       "p": 825,
       "i": 1439
      }
     ],
     "ms": [
      {
       "p": 119,
       "i": 60,
       "approx": true
      },
      {
       "p": 120,
       "i": 1378
      }
     ],
     "text": "Her Autor redet itzt von Gegenwart. Entfernung. Abwesenheit und Berührung. Hie ersteren könnten noch hieher gehören, aber nicht das letztere — das betrifft ausgedehnte Wesen, die eine Oberfläche haben und undurchdringlich sind, denn das ist eontaetus, wie 2 Körper im Raum sich durch ihre Undurchdringlichkeit wiederstreiten. Eine Substanz, kann man sagen, ist der anderen gegenwärtig. wenn sie in sie einfließt. Das kann geschehen mediate, auch immediate. Praesentia ist entweder bilateralis, wenn 2 Substanzen wechselseitig auf einander einfließen, vel unilateralis wie Gott auf alle Hinge einfließt, aber sie nicht auf ihn — in praesenz sind alle Hinge in der A\\ eit. Her Einfluß ist unilateralis. wo in Ansehung einer Substanz eine andre liiere patiens ist. bilateralis. wenn sie als reciproce agentes können angesehen werden. Beym influxu muß die Substanz gegenwärtig seyn. Her innerlich zureichende Grund der Handlung einer Substanz ist Kraft. Sie ist von patientia unterschieden, zu der muß noch etwas hinzukonunen. wenn sie Kraft werden soll. Hie Kraft, die innerlich, aber nicht äußerlich zureicht, ist todte Kraft; die innerlich und äußerlich zureicht, ist lebendige Kraft. Todte Kraft ist ein Grund, wodurch eine Wirkung existiren kann, aber nicht existirt wegen äußerer Umstände. Wenn der Grund innerlich zureicht und die Wirkung doch fehlt, so muß eine reale Kraft , deren Wirkung ein eben so starker Gegenstand ist, oder ein Hinderniß, i.e. Etwas was der Wirkung einer gegebenen Kraft zuwieder ist, sein. Wenn der Grund des Gegentheils einer Wirkung eine Kraft ist, so heißt es resistenz (Wiederstand); vires mortuae sind solche, die keine Wirklichkeit haben, weil ihnen eine andere Kraft wiedersteht . Vergrößert man sie innerlich, oder nimmt die Hinderniße weg, so kann sie wohl äußerlich zureichend werden. Zwischen todten und lebendigen Kräften ist an sich kein Unterschied, aber der Hinderniße wegen. Nehmen wir die Hinderniße weg, so werden viele Wirkungen in der Welt geschehen ohne Vermehrung der thätigen Kräfte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 66
    },
    {
     "id": "metaphysik-mrongovius-s07-016",
     "kind": "text",
     "aa": 825,
     "text": "Der Autor redet itzt vom contactu. 2 Körper berühren sich, wenn sie eine gemeinschaftliche Gränze haben. Er glaubt, es sei dasselbe, was praesentia immediata ist. Eine Substanz ist der andern gegenwärtig, wenn sie auf die einfließt. Ist dies unmittelbar, so ist es nach dem Autor contactus. Das gilt aber blos vom Raum und Ausgedehntem, und ist ein physischer Begriff, der Undurchdringlichkeit voraussetzt. Praesentia ist vel umlateralis vel bilateralis vel mutua. Bey iedem contactu ist influxus mutuus, aber umgekehrt, w'o influxus mutuus ist, ist nicht immer contactus. Bey sinnlichen Wesen wohl, aber nicht bey geistigen.",
     "dehyphenated": 2,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s07-017",
     "kind": "text",
     "aa": 825,
     "text": "Wir reden ietzt vom",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s07-018",
     "kind": "text",
     "aa": 825,
     "ms": [
      {
       "p": 121,
       "i": 0
      }
     ],
     "text": "Einfachen und Zusammengesetzten.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-019",
     "kind": "text",
     "aa": 825,
     "text": "Vom quanto und composito ist schon oben geredet. Beym quanto muß eines etlichemal genommen werden, beym composito nicht. Wir stellen uns vor, daß vieles Eins ausmacht ; ohne identitate plurium kann aber nichts als quantum betrachtet werden. Das compositum wird eingetheilt werden ins reale, i.e. compositum ex substantiis, und ins ideale, d.h. ins compositum, das aus etwas, was nicht Substanz ist, zusammengesetzt ist, oder aus accidenzen; das reale heißt auch strictus dictum. Wenn die Theile vor sich exiMiren, so ist die Zusammensetzung eine Handlung, wodurch die lei e verbunden werden; wenn die Theile vor der Zusammensetzung existiren können, so ist es compositum reale; wenn der Begriff des compositum vor dem Begriff der Theile vorhergeht, so ist es compositum ideale, z.E. Raum, den kann ich nicht denken als zusammengese z aus kleinen Räumen, sondern den kleinen Raum muß ich im großen denken. Die composition wird später gedacht als das compositum. Wir erwägen hier das compositum substantiale, dabey ist zu mei 'en .",
     "dehyphenated": 5,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s07-020",
     "kind": "text",
     "aa": 826,
     "text": "1) Materie, oder die Theile, aus welchen das compositum besteht,",
     "ocrConf": 70
    },
    {
     "id": "metaphysik-mrongovius-s07-021",
     "kind": "text",
     "aa": 826,
     "text": "2) Die Art und Weise, wie die Theile zusammengesetzt sind, i. e. die Form. Das Wesen iedes compositi besteht in der Form, i. e. in modo compositi onis. Die Alten sagten: forma clat eße rei. Darunter verstanden sie, die Materie in iedem Dinge ist was reales, die Form aber macht die Verschiedenheit der Dinge aus; und sie müßen wir uns eher denken als den Stoff.",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s07-022",
     "kind": "text",
     "aa": 826,
     "text": "Bey Substanz wurde schon vieles vorgestellet, in so fern es in einem enthalten ist, aber es waren nicht Theile, e. gr. die Seele bestehet nicht aus Gedanken; die inhaeriren ihr. Es ist also ein nexus, der nicht nexus der composition, sondern der inhaerenz ist. Wir nehmen itzt den ersteren; das compositum insoferne es nicht als Theil von etwas anderm angesehen wird, ist totum. Ein totum und compositum beziehen sich beyde auf Theile. — Vieles, insofern es in Eins ein aggregat wird — da heißt das eine compositum und, wenn das Viele homogen ist, quantum. Jetzt reden wir nur vom compositum quatenus est compositum.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-023",
     "kind": "text",
     "aa": 826,
     "text": "Compositum reale ist das, deßen Theile auch vor sich außer dem nexu mit andern existiren können — deßen Theile nie außer dem Zusammenhänge mit andern existiren können, ist ideale, z. B. Schluß ist compositum ideale, deßen Theile können nur in der Seele existiren. Körper ist compositum reale.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-024",
     "kind": "text",
     "aa": 826,
     "aaEnd": 827,
     "pages": [
      {
       "p": 827,
       "i": 984
      }
     ],
     "ms": [
      {
       "p": 122,
       "i": 0
      }
     ],
     "text": "Der Autor redet noch vom Entstehen und Vergehen und sagt, die Veränderung aus der Nicht existenz in die existenz ist ortus, und umgekehrt ist der interitus. Ortus ex nihilo ist der Ursprung der substanz, von accidentien kann man nicht sagen, daß sie aus nichts entstanden seyn — ex nihilo ortum est, ist das, dessen Theile praeexistenz hätten. Annihilatio betrifft auch nur die Substanz, die accidentien sind bloße modi existentiae der Substanz. Das ist aber nicht Veränderung eines Dinges selbst, denn die kann nur bei existirenden Dingen statt finden. Ortus bedeutet das Seyn, welchem ein Nichtseyn vorhergehet. Und interitus, welchem ein Nichtseyn folgt. In der Erscheinung ist das Substanz, was da bleibt, indeß die Bestimmungen wechseln. Das ist die Bedingung, unter der wir Etwas das erste substantiale nennen, nehmlich daß es beharret. Denn wäre kein beharrliches, das nicht entstünde und nicht verginge, so könnten wir von der Veränderung keine Erfahrung haben. Es muß ein substantiale seyn, von welchem wir die Veränderung nur wahrnehmen können. Bey dem, was beharret, ist der Zustand A gewesen, und itzt der Zustand B, also ist es verändert durch irgend was, und dieses perdurabile nennen wir Substanz. Wenn man sagt, alles ist in der Welt veränderlich, so heißt das: es entsteht und vergeht nichts als accidenzen und Verbindungen der Körper.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s07-025",
     "kind": "text",
     "aa": 827,
     "ms": [
      {
       "p": 123,
       "i": 288,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Die Theile eines compositi realis sind im commercio, und alle Substanzen, insofern sie im commercio stehen, machen ein compositum reale aus. Commercium ist influxus mutuus, denn wie ist das commercium verschiedener Substanzen möglich, als dadurch, daß eine in der anderen etwas bestimmt, denn wirken die Substanzen in einander, e. gr. beym Körper sind alle Theile im commercio ; was nicht im commercio ist, gehört nicht zu demselben. Die Verknüpfung der obersten Ursache mit ihren caußatis knüpft nichts, ist kein commercium. XHe Ursache gehört demnach nicht zu den caußatis.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s07-026",
     "kind": "text",
     "aa": 827,
     "aaEnd": 828,
     "pages": [
      {
       "p": 828,
       "i": 1594
      }
     ],
     "ms": [
      {
       "p": 124,
       "i": 1372,
       "raw": "m",
       "inferred": true
      },
      {
       "p": 125,
       "i": 3255
      }
     ],
     "text": "Ein iedes ganze aus Substanzen bestehet aus einfachen Substanzen. Noch merken wir an, der Autor behauptet wieder Leibniz, ein compositum solle man nicht eine Substanz nennen, obgleich die Theile Substanzen sind, denn Zusammensetzung ist nur ein accidenz. Das ist wol wahr, aber bloße subtilitaet. Leibnitz sagt, die Körper sind substantielle Phaenomene, sie scheinen es zu seyn, aber nur die Theile sind Substanzen. Er hat hiebey vermuthlich einen andern Sinn gehabt als diesen, den ihm Wolf und der Autor andichten, sonst hätte er immer dieses für sich behalten können, das sieht ieder leicht ein. (Monas ist soviel als Einheit einer untheilbaren Substanz, cl.h. die nicht weiter als aggregat von vielen Substanzen kann gedacht werden. Nun trägt es sich : kann man von iedem compositum substantiale sagen, es bestehe aus einfachen Substanzen, d.h. ist es monadatum? Ja, insoferne es Nouinenon ist, denn aller Zusammenhang ist nichts als relation. Da die Substanzen ex definitione vor sich äußere existenz kennen, so kann man alle relation aufheben, und die Substanzen bleiben übrig und sind einfach. Denn wären sie nicht einfach, so wäre die Zusammensetzung nicht aufgehoben. Aber wie ist es mit einem composito reali Phaenomenon? Was nur durch die Sinne als compositum substantiale vorgestellet wird und wo auch die Substanzen nur für die Sinne Substanzen sind, da fälltdas weg, denn der Beweis fällt weg. Die Erscheinung einer Substanz ist nicht die Substanz selbst, und es gilt nicht von ihr, was von dieser gilt. Gesetzt, ein Körper bestände aus einfachen Theilen, so dürfte sein Schatten nicht aus einfachen Theilen bestehen. Nehmen wir alle Zusammensetzung weg, so bleibt nichts übrig.) Wenn in dem composito aus Substanzen nichts Substanz ist als die Theile, bey denen wir von aller composition abstrahiren, welche nur ein accidenz ihrer wechselseitigen relation ist, so bleiben die Substanzen übrig, die sind ohne Zusammensetzung, demnach sind in iedem composito substantiale die Substanzen die einfachen Theile. Setze ich alle relation bey Seite, so bleibt das einfache übrig. Das ist ganz richtig, wenn ich rede von compositis quatenus sunt Noumena, denn durch den Verstand kann ich kein compositum denken, ohne vorher einfache Substanzen zu denken. Das Einfache ist das substratum alles zusammengesetzten bey den Noumenis. Compositio ist die relation der Substanzen, insoferne sie in Gemeinschaft sind; dieses aber findet nicht statt bey compositio Phaenomenon. Compositum reale, insoferne es Erscheinung ist, wird im Raum betrachtet. Der Raum besteht nicht aus einfachen Theilen, also auch nicht das compositum. Von einer beharrlichen Erscheinung kann ich das nicht sagen, was von Substanzen, insoferne sie durch den Verstand gedacht werden, gilt. Körper sind Erscheinungen und im Raum, bestehen also nicht aus Einfachen Substanzen. Würden wir das Unbekannte, was den Cörpern zu Grunde liegt und die körperlichen Erscheinungen hervorbringt, erkennen, so würden wir lauter Einfaches erkennen, das in commercio wäre. Wir machen in der Erscheinung die Phaenomene zu Substanzen, wir müssen denn aber bey dem Begrife der Substanz bleiben, denn die beharrliche Erscheinung leidet. Von einfachen Wesen zu reden, müßen wir aus der Sinnen Welt gehen, aber denn haben wir keinen Beweis für die objective realitaet unsres Begrifs, denn wir können kein Beispiel geben ; aber von allen Erscheinungen geht das an. Composita, von denen ich Beispiele geben kann, sind Phaenomena substantiata. Es gilt aber nicht das von ihnen, was von den Noumenis gilt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s07-027",
     "kind": "text",
     "aa": 828,
     "text": "Haben wir durch diese Lehre denn was Neues eingesehen? Nein, denn durch die Categorie der Substanz kennen wir keine Dinge. Die Erfahrung muß uns Beispiele geben — und das sind Erscheinungen. Wir können eben so wenig einsehen, wie Substanzen ein ganzes ausmachen sollen — wohl von Erscheinungen, die im Raum sind — aber nicht wie Substanzen an sich selbst, denn hier müßen wir den Raum, weil er die Eorin der sinnlichen Anschauung ist, weglaßen. Wir reden itzt von",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-028",
     "kind": "text",
     "aa": 829,
     "text": "Raum und Zeit",
     "ocrConf": 67
    },
    {
     "id": "metaphysik-mrongovius-s07-029",
     "kind": "text",
     "aa": 829,
     "ms": [
      {
       "p": 126,
       "i": 1025
      }
     ],
     "text": "Raum und Zeit sind nicht Bestimmungen der Dinge, insoferne sie durch den Verstand gedacht werden, sondern insoferne sie uns in den Sinn fallen, also sind sie Formen der Anschauungen. (Wir kommen itzt an die wichtigen Begriffe, die von der Art sind, daß, wenn wir ihre Natur haben entwicklen können, sie den ganzen Plan der Metaphysic verändern, und alle Widersprüche verbannen, die die Metaphysic um ihren Credit gebracht haben.) Raum, der äußere, Zeit, der innere Sinn. Die Materie aller Erscheinungen ist Empfindung, und was der correspondirt, ist real. Philosophie : das reale erkennen wir nur a posteriori, aber das formale a priori. Die Vorstellung vom Eindruck des Gegenstandes auf uns ist Empfindung, ist also was subiectives, die müßen wir alle a posteriori erkennen. In unserer Erkenntniß der Sinne ist etwas, davon wir a priori eine Vorstellung haben, das ist die Form der Erscheinung, der äußren Raum, der innren Zeit. Sie sind die Form, wie Gegenstände uns erscheinen werden, wenn sie uns afficiren, daher können wir uns viel vorstellen, was wir nie gesehen, z.E. Kegel und Pyramiden wie in der Geometrie; demnach kann man Raum und Zeit a priori erkennen. Außer der Erscheinung gehört noch was zur Erfahrung, denn sie ist nicht blos Wahrnehmung, sondern die Einheit miteinander verknüpfter Wahrnehmungen nach allgemeinen Regeln. Die Materie muß gegeben werden, die Form besteht in den Verstandes Begriffen. Das sind die Categorien, die machen die Form aller menschlichen Erfahrung aus und die Einheit der Erscheinungen ist a priori, das sind auch die Categorien z.E. Substanz, sie sind nehmlich die Verknüpfung des Mannigfaltigen der Erscheinung nach Regeln. — Wir können also a priori erkennen :",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s07-030",
     "kind": "text",
     "aa": 829,
     "text": "1.) Form der Anschauung, das ist Raum und Zeit und",
     "ocrConf": 73
    },
    {
     "id": "metaphysik-mrongovius-s07-031",
     "kind": "text",
     "aa": 829,
     "aaEnd": 830,
     "pages": [
      {
       "p": 830,
       "i": 568
      }
     ],
     "ms": [
      {
       "p": 127,
       "i": 1302
      }
     ],
     "text": "2.) Form des Verstandes, insoferne sie auf die Sinnlichkeit applicirt wird; oder die Form des Denkens der Gegenstände, die uns erscheinen;’ das ist ein Verstandes Begriff und macht die Form der Erfahrung aus. Raum und Zeit zur Sinnlichkeit, und die Categorien zum Verstand gehörig, machen die Begriffe aus, die wir a piiori haben können und denen wir in der Erfahrung correspondirende Gegenstände geben können. Wir haben auch noch andre transcendente Begriffe, denen aber kein object in der Erfahrung gegeben werden kann; sie müßen unterschieden werden von transcendentalen. Das sind solche, durch welche ich blos die Möglichkeit synthetischer Erkenntniß a priori vorstelle. Transcendent läßt sich im Deutschen ausdrücken durch überschwenglich. Begriffe sind immanent, wenn ihr Beyspiel aus der Erfahrung oder nach der analogie einer Erfahrung kann gegeben werden. — Diese Begriffe sind der Grund der Möglichkeit einer Erkenntniß a priori — und synthetischer Erkenntniß a priori. Sie sind immer ein Stein des Anstoßes gewesen. Vom Raum sagt man, daß er was an sich selbst wäre, so ist er ohne Dinge gar nichts, denn im Raume sind Oerter; der Ort, oder die Art, wie Dinge neben einander sind, ist nicht da, wenn keine Dinge existiren. Gleichwohl stellt sich unser Verstand vor: Er gehe vor allen Dingen vorher, er wird als ein alles befaßendes receptaculum angesehen, das nichts enthielte als Plätze der Dinge. Verhältniße können es auch nicht seyn, denn man kann sich nicht vorstellen, daß die ohne Dinge existiren sollten. Der Raum ist kein Ding, gleichwohl ein etwas, worin ich mir alle Verhältniße vorstellen kann. Was ist denn der Raum? Mit der Zeit gings eben so. Zeit ist das, worin Veränderungen bestehen, sie ist nicht ein Ding, sondern in derselben sind Dinge ; sie setzt nicht voraus das Daseyn der Dinge, sondern ich muß eine Zeit haben, worin ich das Ding seze. Nehme ich alle Dinge weg, so ist eine Zeit, darin nichts ist, worin aber was werden kann. Was ist sie nun? Ein Abfluß von Augenblicken. Was sind die wieder? Indem sie genöthigt waren, Raum und Zeit vor Etwas anzusehen, aber nicht vor ein Ding, so wußten sie nicht, was sie damit anfangen sollten. (Der Autor sagt Ordo succeßivormn est tempus — post se invicem posita coniuncta succedunt. Zeit ist also Verbindung der Dinge, insofern sie aufeinander folgen — aber das zugleich seyn läßt er aus, und das ist ein wichtiges Verhältniß. Wann sind Dinge zugleich? wenn sie sind in derselben Zeit; und nach einander, wenn sie sind Dinge in verschiedner Zeit. Und Folge hat kein Mensch begriffen, als wenn er Zeit voraussetzt, mithin ist die Definition falsch — Raum ist ordo simultaneorum extra se positorum — daß Dinge außer einander seyn können, dazu gehört Raum. Man sagt, Dinge kann man sich außer einander vorstellen, ohne im Raum, z. B. ich sage, die eine Substanz ist eine andre als die andre — ia, aber die extra position setzt auch einen Raum voraus, das sagt auch der Autor: simultaneorum extra et intra se posita, sonst kann ich nicht sehen, was für Verhältnisse die verschiedenen Dinge gegen einander haben.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 10,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s07-032",
     "kind": "text",
     "aa": 831,
     "ms": [
      {
       "p": 128,
       "i": 0
      }
     ],
     "text": "Der Autor erklärt Raum durch Ordo extra se positorum. Extra se positorum sind Dinge in verschiedenen Orten. Der Begriff des Orts setzt den Begriff des Raums voraus, und der Begriff wird schon als bekannt angenommen: ordo plurium, quatenus post se existunt est tempus ; nach einander seyn ist zu verschiedenen Zeiten seyn, also ist idem per idem erklärt.",
     "ocrConf": 73
    },
    {
     "id": "metaphysik-mrongovius-s07-033",
     "kind": "text",
     "aa": 831,
     "aaEnd": 834,
     "pages": [
      {
       "p": 832,
       "i": 2190
      },
      {
       "p": 833,
       "i": 4756
      },
      {
       "p": 834,
       "i": 7309
      }
     ],
     "ms": [
      {
       "p": 129,
       "i": 820
      },
      {
       "p": null,
       "i": 1234,
       "raw": "",
       "unresolved": true
      },
      {
       "p": 130,
       "i": 2352
      },
      {
       "p": 131,
       "i": 3718
      },
      {
       "p": 132,
       "i": 5223
      },
      {
       "p": 133,
       "i": 7024,
       "raw": "iss",
       "inferred": true
      }
     ],
     "text": "Die Hauptfrage ist, ob sie an und für sich selbst bestehende Dinge sind, denn sind sie unterschieden von allen möglichen Dingen, die in ihnen sind. Das haben größten Theils alle alte Philosophen verworfen. Nun glaubten einige, der Raum sei eine Bestimmung der Dinge. Wed Raum und Zeit in lauter Verhältnißen bestehen und enthalten, so glaubte man, diese relation der Dinge, in so ferne sie verbunden sind, mache den Raum und, in so ferne eins das andre in einer Reihe bestimmt ist, die Zeit aus, also wären es wahrhafte Verhältniße, die ohne Dinge wegfielen, die man sich durch den Verstand als möglich denken kann. Andre, es wäre nichts, als ein allgemeiner Begriff von Verhältnißen überhaupt. Wir wollen sehen, ob es sich so verhält. — Wären es Verhältniße, so könnten wir davon keinen Begriff a priori haben, welches doch in der Geometrie ist, oder wir müßten aus den relationen der Dinge die Eigenschaften des Raumes erkennen können, und in der ganzen Geometrie würden die synthetischen Sätze a priori unmöglich seyn ; a posteriori können wir die Eigenschaften erkennen, es giebt aber alsdenn keine apodictische Sätze. Der Raum ist kein Begriff, sondern eine Anschauung. Der Begriff setzt Anschauung voraus. Wir können von keinem \\ Eigenschaften beweisen, ohne sie hinzumahlen. Wir haben nur einen Raum, und unter vielen Räumen meinen wir Theile des Einigen unendlichen Raumes. Das ist aber nicht bei einem Begriff, z.E. Tugend ist nicht ein Iheil der allgemeinen Tugend, aber so ist es nicht beim alles befassenden Raum. A priori ein Ding anschauen, heißt ein Ding anschauen, das gar nicht gegeben ist, und so kann ich nichts anschauen, als die Form der Sinnlichkeit, wie ich die Dinge anschaue, die ist in mir. Der Raum muß auch so Etwas seyn, nehmlich die Form der äußeren Erscheinung. Er ist nicht das, was in den Dingen, sondern in uns selbst liegt. Nun kann ichs erklären: er ist das Formale der äußern Rischeinungen, und man kann also a priori Eigenschaften des Raumes erkennen. Diese Bedingung, unter welcher Erscheinungen möglich sind, ist reine äußere Anschauung. Jetzt ist es begreiflich, wie sie den Dingen oder vielmehr den Erscheinungen vorher gehen können. Sie betreffen blos die Natur der Sinnlichkeit, welcher gemäß sie nur afficirt werden kann. (Raum und Zeit geben uns Erkenntniße a priori vor aller Erfahrung, mithin können sie nicht von der Erfahrung entlehnt sein. — Sätze a priori erkennen wir an der Nothwendigkeit, solche nothwendigen Sätze haben wir in der Geometrie, z. B. zwischen 2 Puncten ist nur eine gerade Linie möglich — auch die Zeit giebt solche nothwendigen Sätze, z. B. 2 Zeiten können nicht zugleich seyn, sie können also nicht Eigenschaften der Dinge an sich selbst seyn. Die Dinge an sich selbst a priori einzusehen, ist hierfür glatt unmöglich. Da sie also nicht Bestimmungen des Objects sind, so mäßen sie Bestimmungen des subjects seyn — also die Formen unserer Sinnlichkeit. — Raum ist die Form, wie wir äußere Dinge, Zeit, wie wir uns selbst anschauen. Was wir durch äußern und innern Sinn erkennen, ist blos Erscheinung, nicht Dinge an sich selbst. — Man könnte sagen: wir könnten uns ia selbst wohl erkennen? Ja, wo wir selbstthätig sind, kann man sagen, das gehöre nicht zur Sinnlichkeit, aber beobachten wir uns selbst, ist das nichts als eine Reihe von innern Erscheinungen. Wir können doch nur alles so beobachten, wie wir innerlich afficirt werden.) (Wir können itzt auch sehen, wie wir Zeit und Raum a priori erkennen. Dinge an sich selbst können wir nicht a priori ansehen — aber wie können wir Erscheinungen a priori ansehen? Weil ich wißen kann, wie sie mich afficiren werden — denn sie sind nicht Dinge an sich selbst, z. B. ich werde keinen Körper sehen, als wenn die Lichtstrahlen aus einem Punct des Körpers in einem Punct in meiner Netzhaut Zusammenstößen — das kann ich a priori einsehen.) (Raum und Zeit werden also auch nicht von Dingen an sich selbst gelten — aber Dinge als Phaenomene sind Im Raum und Zeit, das ist das Fundament der transcendentalen aesthetic. Aesthetic ist die Lehre von der Sinnlichkeit. Die Alten theilten alles ein in aistheta und noeta, itzt braucht man es vom sinnlichen Wohlgefallen und nennt es Geschmackslehr 3. — Da die sich nicht eigentlich zur Wissenschaft erheben läßt, so ist es besser, bei der Bedeutung der Alten zu bleiben. Transcendentale Aesthetic ist die Betrachtung der Dinge als Gegenstände der Sinne, insoferne wir sie a priori erkennen können, sie zeigt die Gründe der Möglichkeit sinnlicher Anschauungen a priori, die beruht auf Raum und Zeit.) (Wenn ich sage, etwas ist ausgedehnt, so ist das Erscheinung — denn ausgedehnt ist eine Bestimmung des Raumes. Reden wir vom Entstehen und Vergehen, Veränderung u.s.w., so reden wir blos von Phaenomenen. Dieses hat keine Bedeutung, wenn wir blos vom Noumenon reden.) Den Begriff der Zeit können wir nicht a posteriori haben, denn wie sollten wir das anfangen, ihn a posteriori zu schöpfen, wir würden gar keine Erfahrung haben, daß Eins aufs andere folge, wenn der Begriff nicht zu Grunde läge. Sie ist nicht ein Begriff von Verhältnißen der Dinge, sonst könnten wir keine Eigenschaften a priori und keine apodictische Sätze von der Zeit haben, z.E. zwischen zwei Augenblicken ist nur eine Zeit — zwei Zeiten sind nicht zugleich — die Zeit hat nur eine Abmessung, wären aber die Eigenschäften Begriffe der relation, so könnten wir alle die Sätze nicht haben — Zeit ist auch Anschauung. Alle Dinge sind in derselben Zeit. — Alle Zeiten sind Theile derselben Zeit. Anschauung enthält nicht die Beschaffenheit des Dings, sondern die subjective Form der Sinnlichkeit, wie ich afficirt werde. Die Form des innern Sinns ist Zeit. Das kann ich a priori einsehen, wie mein innerer Sinn sich selbst anschaut, und viel a priori davon sagen. Haben die Begriffe auch objective lealitaet, oder sind sie entia rationis? Allerdings haben sie objective realitaet, sind aber eingeschränkt auf bloße Objecte der Sinne, sie gelten von allen Erscheinungen. Crusius sagt : alle Dinge sind irgend wo oder irgend wann, das muß eingeschränkt werden auf die Erscheinungen. Der Inbegriff aller möglichen Objecte der Sinne ist Sinnen Welt, die Begriffe gelten also nur von der Sinnen Welt — Welt ist das aggregat der Erscheinungen. Ich kann mir wohl eine intelligible Welt denken, eben so wie wir eine sensual Welt vorstellen, die blos durch den Verstand erkannt werden kann, aber der Verstand hat nicht das Vermögen anzuschauen, sondern über Erscheinungen zu reflectiren ; er kann also nicht wissen, was Dinge an sich selbst sind. Er kann Erfahrungen machen, aber dadurch hat er nur die Verknüpfung der Erscheinungen, nicht die Dinge an sich selbst erkannt. Erscheinung und Schein muß unterschieden werden. Erscheinung kann als Erscheinung wahr sein. Schein ist eine Wahrnehmung, wodurch ich habe wollen einen Begriff machen, ohne alle andre Wahrnehmungen hinzuzunehmen. Erscheinung urtheilt nicht. Wollen wir über Erscheinungen urtheilen, so urtheilen wir wahr, wenn es geschieht aus allen Wahrnehmungen; will ich nur aus einer Wahrnehmung urtheilen, so ist das Schein. Gott erkennt die Dinge an sich selbst, denn seine Erkenntniß Kraft bringt die Dinge hervor. Wir erkennen nur die Erscheinungen, d. i. die Art, wie wir afficirt werden, und Dinge müßen uns afficiren, sonst wissen wir gar nichts davon. — Raum und Zeit sind nichts als Vorstellungen der Dinge, und ietzt haben wir einen Schlüssel zu vielen Aufgaben. Wenn Erscheinungen nichts als Vorstellungen sind, wie alle sinnlichen Dinge Erscheinungen, so sind alle sinnlichen Dinge nichts als Vorstellungen. Erscheinungen existiren also nur in der Vorstellung selbst. Wir können demnach sagen: So viel existirt nur in der Sinnen Welt, als in unserer Vorstellung liegt, z.E. man setze, daß mitten unter der Music die Menschen das Gehör verlöhren, so existirte auch für sie keine Music, eben so vor die, die kein musicalisches Gehör haben. Die Objecte an sich selbst existiren nicht. Hierdurch sind wir vieler Fehler überhoben, z.E. ist die Welt endlich oder unendlich? Die Frage, die so viel Schwierigkeiten gemacht, fällt jetzt weg und heißt: Werde ich in der Reihe meiner Wahrnehmungen ohne Ende fortgehen oder nicht? und darauf ist die Antwort bestimmt: ohne Ende.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 19,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s08",
   "title": "Vom Endlichen und Unendlichen.",
   "titleSrc": "heading",
   "headings": [
    "Vom Endlichen und Unendlichen."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s08-001",
     "kind": "heading",
     "aa": 834,
     "text": "Vom Endlichen und Unendlichen."
    },
    {
     "id": "metaphysik-mrongovius-s08-002",
     "kind": "text",
     "aa": 834,
     "aaEnd": 838,
     "pages": [
      {
       "p": 835,
       "i": 1376
      },
      {
       "p": 836,
       "i": 3946
      },
      {
       "p": 837,
       "i": 6487
      },
      {
       "p": 838,
       "i": 9057
      }
     ],
     "ms": [
      {
       "p": 134,
       "i": 480
      },
      {
       "p": 135,
       "i": 2115,
       "raw": "",
       "inferred": true
      },
      {
       "p": 136,
       "i": 3958
      },
      {
       "p": 137,
       "i": 6032
      },
      {
       "p": 138,
       "i": 7944,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Die Größe, welche nicht unmittelbar als Größe angeschaut werden kann, wird geschäzt durch die Folge. Ich stelle sie mir vor wie qualitaet. Quantitas qualitatis ist Grad, ist definition des Autors, ganz recht, d.h. unmittelbar wird sie nicht vorgestellt als Quantitaet, aber mittelbar, nehmlich durch die Folge. Eben so kann man auch sagen: quantitas rationis (Grunds) ist Grad. Die Grade sind entgegen gesetzte extensive Größen, das sind Raum und Zeit und alles was darinnen ist. Von der innern Größe braucht man den Ausdruck Grad, nicht Größe, der gilt nur von extensiven Größen. Alle realitaet hat Grade. Von Empfindung bis zu dem Gedanken, da ich mich selbst denke in Ansehung des Verstandes, i. e. bis zu der apperception sind Grade. Etwas kann so wenig Grade haben, daß ichs kaum merken kann, aber ich bin mir doch noch immer deßen bewußt. Es giebt eigentlich kein größtes und kleinstes in der Erfahrung. Wir haben 3 Begriffe: des maximi, illimitati, und infiniti, die sind sehr nahe verwandt, aber doch von einander verschieden. Maximum ist das, worüber kein größeres möglich ist. Das illimitatum ist die negative Vorstellung vom größesten. Beim maximo ist der Begriff einer totalitaet, der nichts fehlt, was zu einer gewissen Art von Dingen erforderlich ist. (Was alles von einer gewissen Art enthält, ist illimitatum; was nicht alles usw. usw., ist eingeschränkt, das limitatum wird also der omnitudo opponirt.) Illimitatum kann also das maximum bedeuten, in so fern es durch einen negativen Begriff vorgestellt wird. Comparative kann etwas illimitatum seyn, aber nicht absolute; maximum ist ein positiver und illimitatum ein negativer Begriff von der totalitaet. Beyrn infinito stelle ich mir vor das Verhältniß der Größe eines Dinges zum Wesen. Das Verhältniß der Größe zu der Möglichkeit, sie zu meßen, bestimmt entweder die Größe, oder die Unendlichkeit ; ich sage nicht, wie groß das Ding ist — größer als alle Begriffe, mit denen ich sonst zu meßen pflege. Man hat es mit dem illimitatum verwechselt : Wir schätzen Größen succeßive unum rei addendo. Alles zählen ist ein progreßus in der Construction einer Größe. Die Größe, deren construction möglich ist durch progreßus finitum, ist quantitas finita, und infinita, deren progreßus infinitus ist. Ein Ding an sich selbst kann ich nicht infinitum nennen. Der Redegebrauch bringt es mit sich, daß man das illimitatum öfters das unendliche nennt. An sich selbst ist es nicht einerlei. Bei den Phaenomenis kann man sagen, das ist illimitatum und infinitum. Das ens summum stellen wir uns vor als illimitatum, können wir das nun infinitum nennen? Das ist nicht schicklich, denn ich sage dadurch nicht so viel als durch ens summum, d.h. es enthält alles, was ein Wesen enthalten kann, oder allgemein, dem nichts mangelt, sondern durch infinitum sage ich nicht, was das Wesen selbst sei, sondern nur, seine Größe kann nicht bestimmt werden in Verhältnis auf ein Maß, hiedurch weiß ich nicht, wie groß es selbst sei, ob es groß ist oder nicht, sondern nur, daß es zu groß für ieden meiner Begriffe ist, deswegen darfs aber nicht das größte unter allen Dingen seyn. (Infinit sagt nicht, wie groß ein Ding sey an sich, sondern respectiv auf ein Maß ist es größer als alle Zahl. Alle Schätzung des großem in Raum und Zeit ist relativ. z. B. die Sonne ist von der Erde weit, relativ auf die Fix Sterne ist sie der Erde nahe, und ie kleiner das Maß ist, desto giößer ist die Zahl. — Die absolute Größe ist Allheit, nehmen wir Etwas in Beziehung auf die Allheit, so ist das eingeschränkt. Die absolute metaphysische Größe ist die des ens realißimi, durch Allheit erkennen wir Dinge an sich selbst auch durch Einschränkung der omnitudo.) (Der Begriff des infiniten betrifft nur Phaenomene, also nur Raum und Zeit, und alles was darinnen möglich ist, und auf die müßcn wir ihn auch nur anwenden. Sage ich, Gott ist ens infinitum, so heißt das illimitatum.) (Bei den Noumenis ist ein maximum, aber bei den Phaenomenis findt weder ein maximum noch ein minimum statt.) Infinit bedeutet den Fortgang ins unendliche bei Meßung der Größe. Das infinitum zum Unterschiede des illimitatum heißt infinitum mathematicum und insofern es mit dem illimitatum einerlei ist, heißt es infinitum reale. Quantum relative ad unitatem aliquant dabilem omni numero maius, ist unendlich ; wenn es größer ist als alle Zahl, so übersteigt es meinen Begriff, denn ich kann mir nur von der Größe einen bestimmten Begriff durch die Zahl machen. Ein Wesen das ohne Zahl einen bestimmten Begriff von der Größe hat, kann das infinitum auch begreifen. Beym höchsten Wesen werden wir uns dieses Worts nicht bedienen können, denn es setzt voraus, daß wir ein Maß haben. Dazu gehört homogeneitaet, das höchste Wesen hat aber kein Homogeneum. Beim illimitatum vergleiche ich es mit keinem Maß, und der Begriff des Unendlichen kann nur bei Phaenomenen angewandt werden; denn es setzt voraus, daß der Progreßus von einem zum andern größer sei als alle Zahl. Der Progreßus geschieht in der Zeit. Ist bei den Erscheinungen das object infinitum oder der Progreßus? Das Phaenomen kann ich nicht unendlich nennen, denn es ist nichts außer mir. Wäre die Sinnen Welt ein Ding an sich selbst, so könnte man fragen, ob sie infinitum wäre oder nicht. So kann ich nicht fragen: ist die Welt unendlich dem Raum nach, sondern : muß ich in der Welt ins Unendliche fort gehn? Ja, der Pro- und Regreßus in infinitum ist möglich, aber von der andern Seite kann man sich nicht vorstellen, daß ein quantum unendlich sei. Eine künftige Ewigkeit ist unendlich, sie ist nicht ein infinitum datum, sondern ein unendlicher möglicher Fortgang von Veränderungen, die aufeinander folgen können, er ist eine unendliche Möglichkeit, nicht Wirklichkeit. (Die Unendlichkeit ist progreßive, die betrifft potentiale Größe, oder collective, die betrifft actuale Größe. Infinitum actuale läßt sich nicht denken, aber wohl das potentiale, z. B. künftige Ewigkeit ist nicht was wirkliches, sondern die Zusammensetzung mehrerer Zeiten, und die kann unendlich seyn. — Wollten wir uns ein erfülltes collective tale denken, so müßten wir uns vorstellen, als wären die Theile alle wirklich - — die müßten wir durchlaufen und zusammennehmen, das ist aber wieder die definition des infiniten, deswegen ist das infinite collective tale nicht an sich unmöglich, denn wir sagen nichts weiter, als daß die Größe nicht ohne Zahl bestimmt erkannt werden kann — denn weil wir ins Unendliche gehen, so können wir es durch keine Zahl ausdrücken — aber bei einem Verstände, der Größe nicht durch Zahlen setzen darf, wäre es anders.) (Der Begriff des infinitum sollte zugleich der Begriff des maximi sein, über welches kein größeres möglich sei — das ist aber das illimitatum ; ob das infinite Ding alles enthält, erhellt daraus noch nicht. Man hat daraus verschiedenes zu beweisen gesucht. Numerus infinitus, sagt man, ist impoßibel. Das ist apodictisch wahr. — Das wäre eine Zahl, die größer wäre als alle Zahlen, aber deswegen ist, wie man weiter schloß, multitudo infinita nicht unmöglich, z. B. Ein unendlicher Raum. Wir sagen, er ist eine Zahl von Meilen — hier ist gar keine Zahl, man bewies das so: die multitudo infinita würde die größte sein nach ihrer definition; zu ieder Größe läßt sich aber noch eine Einheit denken, demnach ist die größte, mithin unendliche Größe, unmöglich — wenn man so definitionen schnitzelt, kann man beweisen, was man will). Einige Autoren sagen: weil keine unendliche Zahl ist, so ist auch kein unendlich. Summus infinitus est contradictio, aber nicht eine unendliche Menge. Man muß unterscheiden ein infinitum actuale und potentiale. Potentiale, in welchem progreßus in infinitum möglich ist, das nicht gegeben ist, actuale, das gegeben ist. Das Uneingeschränkte gehört zu den noumenis ; ich stelle mir vor, es fehle keine realitaet, begränzt einen Begriff, der aufs Phaenomen geht. Grenzen denken wir uns in Raum und Zeit, Schranken bei Noumenis, quod rationem in se continet limitis vel in tempore vel in spatio, ist Grenze, die kann also nur bei Phaenomenen seyn. Infinitum mathematicum non est dabile, d.h. es kann mir nicht ganz existirend vorgestellt werden, z. B. künftige Ewigkeit läßt sich nicht ganz geben, sonst wäre es keine Ewigkeit. Wodurch stellen wir uns Größen als ganz existirend vor? Nur durch den Progreßus der addition von Einem zu Einem. Eine unendliche Größe kann deshalb nicht gegeben werden, weil der Progreßus in infinitum auch müßte ganz gegeben seyn, oder der Progreßus müßte vollendet seyn, und das ist unmöglich sich vorzustellen. Man kann sich ebensowenig einen infiniten Raum, aber den Progeßus im Raum kann man sich als infinit vorstellen. Wollten wir uns vorstellen, er existire noch vor dem Progreßus, so haben wir uns einen Begriff gemacht mit einer Eigenschaft, mit der wir ihn gar nicht denken können, denn wir können keine Größe denken als durch den Progreßus. (Maß ist die Größe, die wir anschauend erkennen können.) Progreßus in infinitum findet statt, denn ich kann in infinitum eine Größe weiter fortsetzen und in der Addition immer weiter fortgehen, auch in der kommenden Ewigkeit läßt er sich denken. Progreßus in indefinitum ist weniger als in infinitum. Hier ist mir blos keine bestimmte Grenze gesetzt. Wir reden itzt",
     "joined": [
      "layout"
     ],
     "dehyphenated": 21,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s08-003",
     "kind": "text",
     "aa": 838,
     "text": "Von der Uebereinstimmung und Verschiedenheit",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s08-004",
     "kind": "text",
     "aa": 838,
     "aaEnd": 839,
     "pages": [
      {
       "p": 839,
       "i": 2068
      }
     ],
     "ms": [
      {
       "p": 139,
       "i": 505
      },
      {
       "p": 140,
       "i": 2146
      }
     ],
     "text": "Jetzt redt der Autor de praedicatis entium relativis. Er nennt sie Praedicate der Verknüpfung (relation), das ist nicht gut. Praedicate dienen dazu, identitaet und diversitaet zu erkennen, aber dann darf keine relation seyn, z. B. 2 Menschen können sehr ähnlich seyn oder in vielen Merkmalen übereinstimmen, ohne die geringste relation gegeneinander zu haben. Wir merken folgendes: die Definition der Qualitaet ist similitudo, der Quantitaet aequalitas - — sie sind vel partialiter vel totaliter similia, aequalitas totalis ist Gleichheit in Ansehung aller praedicate. Stellen wir uns vor 2 totale aequalitates sind auch similia, denn sollen sie total gleich sein, so auch total ähnlich. Das aequale ist identische quantitaet. Homogenea können aber nur der Größe nach verglichen werden. Z.E. ich kann nicht vergleichen ein Jahr und eine Meile, sind sie völlig gleich, so müßen sie auch völlig homogen sein; denn sollen sie in Ansehung aller Bestimmungen gleich seyn, so müßen sie auch homogen seyn. Identitaet ist 3fach : a qualitativ, b quantitativ, beide zusammen machen die innre Identitaet aus, c relationum, d. i. die äußere Identitaet, z. B. daß ein Ding in verschiedener Zeit sei — totaliter congruent.ia, sollte man denken, könnten ratione relationis verschieden seyn — auch totaliter similia, sollte man denken, könnten unterschieden seyn. Daher sagt auch der Autor: Quantitas est discrimen internum, mere similium totaliter eadem tanquam ad internos et externos determinationes, sagt der Autor, sunt numerice eadem — oder nicht plure plura totaliter eadem sunt impoßibilia, dann wäre kein innerer Unterschied der Dinge. Der äußre Unterschied macht nicht Unterschied der Dinge, sondern der äußern relation — also der Art nach sind sie nicht unterschieden — denn ich habe keinen Grund zu sagen, daß das was andres sei. Weiter: perfecte aequalia sunt impoßibilia, denn nach dem vorhergehenden müßten sie völlig ähnlich sein mithin totaliter congruentia, die sind unmöglich. Weder mere similia sunt impoßibilia, denn wären sie völlig ähnlich, so differirten sie der Größe nach, eines ist größer als das andere. — Das eine ist also dem Teil des andern völlig gleich und ähnlich, also totaliter congruentia, mithin unmöglich. Diese Sätze haben Wolf, Baumgarten und vor ihnen Leibniz behauptet; er hatte das principium indiscernibilium.) (Dieses principium indiscernibilium fällt bei der Sinnen Welt weg; es ist auch absurd, sich zu denken, daß Gott iedes particelchen, welches mit andern einerlei effect thun sollte u.s.w., sollte verschieden erschaffen haben.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s08-005",
     "kind": "text",
     "aa": 839,
     "ms": [
      {
       "p": 141,
       "i": 1582,
       "raw": "l«",
       "inferred": true
      }
     ],
     "text": "Totaliter eadem sind die, wo keine diversitaet ist, partialiter eadem, die in Ansehung einzelner Beziehungen verschieden sind. Innerlich eadem, sind die, die in innren Bestimmungen, äußerlich eadem, die in relationen Übereinkommen. Dinge, die ganz und gar einerlei sind, heißen numero eadem, denn es ist ein und eben dasselbe Ding oder unum idemque. Wo ist numerische Einheit oder totale identitaet und pluralitas numerica oder numerische Verschiedenheit? Leibniz hat in die Metaphysic einen Satz bringen wollen, nehmlich von Dingen, die in Ansehung der quantitaet und qualitaet und auch in den innren Bestimmungen Übereinkommen, so sinds eadem, aber wenn sie nur an andern Orten sind, so sind sie schon verschieden. Hiebei ist zu merken: wenn man objecte als noumena betrachtet, so ist es wahr, weil wir da zwei Dinge blos durch den Verstand betrachten, und der unterscheidt sie gar nicht, auch wenn man sie in verschiedene relationen setzt, A mit B und C mit D, so ist es egal, ob A mit D oder C mit B. verglichen wird ; 2 entia Noumena, die sich in nichts unterscheiden, sind dieselbe. Betrachte ich aber Dinge als Phaenomene. so ist es anders, sie sind nicht eadem, wie sehr sie auch der quantitaet und qualitaet nach gleich sind, und sind an verschiedenen Orten. Denn sind sie schon plura und diversa, denn das bedeutet nicht unsre Vorstellung vom Raum der Dinge, die außer einander und also verschieden sind. Leibnitz nennt dieses Principium indiscernibilium und wollte es brauchen, zu beweisen, daß in der Welt 2 Dinge nicht gleich und ähnlich wären, und nicht sein könnten. Das erste ist zufällig und kann wohl wahr seyn, aber absolute nicht, z.B. daß Gott an einem Orte ein, am andern Orte sich befindendes ähnliches Ding nicht machen konnte. Das ist ungereimt. Demnach nennen wir Dinge numero diversa, die an verschiedenen Orten sind. Aber Verschiedenheit der Zeit giebt keine numerische diversitaet, e. g. ich lebe zu verschiedenen Zeiten und bin doch derselbe ; wir reden von Dingen, die neben einander sind.",
     "dehyphenated": 6,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s08-006",
     "kind": "text",
     "aa": 840,
     "aaEnd": 841,
     "pages": [
      {
       "p": 841,
       "i": 2555
      }
     ],
     "ms": [
      {
       "p": 142,
       "i": 1498
      }
     ],
     "text": "Das simultaneum ist ein mathematischer Begriff. Ort ist determinatus positus, i.e. Verhältnis gegen andre Dinge in spatio; es giebt auch einen positum in der Zeit, d. i. aetas, Positus ist nichts als die bestimmte relation eines Dinges mit andern, er wird bezogen auf Raum und Zeit. Der positus in der Zeit wird determiniert 1. durch das, was zugleich ist, 2. vorhergeht, 3. auf etwas folgt. Ort ist kein Raum, sondern im Raum sind Oerter, und ein Ort kann nicht viele Oerter haben. Das im Raum, was kein Raum ist, ist ein Punct, daher ist ieder Ort ein Punct. Da der Ort immer das Einfache im Raum sein muß, kann kein Raum aus Puncten bestehen. (Der Ort ist immer was einfaches, wenn ich z. B. den Ort von Paris bestimmen will, so ist es nicht gleich, in welche Straße ich gehe — sondern es geschieht in Observatorio, da ist wieder ein Raum. Formaliter, weil er relative sehr klein ist, nimmt man ihn für einen Punct an.) Denn bestände der Raum aus Oertern, so müßten die Oerter vorher gedacht werden können, das geht nicht an. (Ein Ding kann nicht an verschiedenen Orten zugleich seyn, denn wäre das, so wäre es von sich selber so weit entfernt als der eine Ort von dem andern, das ist ungereimt.) Ebenso besteht die Zeit nicht aus Augenblicken, denn das sind positus determinationis in tempore. (Bewegung ist continuirliche Veränderung des Ortes, wo ich alle Zwischen Räume succeßive durchgehe — gehe ich aus einem Ort in den andern ohne durch die Zwischen Oerter, sondern in der Zwischen Zeit, wäre ich nirgends, so wäre das mutatio interrupta. Ruhe ist die beharrliche Gegenwart eines Dings an einem Ort, d.h. die eine Zeit über ist.) In der Gränze ist was positives, in Schranken negatives, denn da fehlt eine realitaet. Die Gränze der Linie ist ein Punct, die Gränze der Fläche eine Linie, des Körpers eine Fläche (limites sunt negationis entis alicuius quatenus non est. maximum; Gränze ist ein Raum und Zeit, und das positive, welches den Grund der Schranken enthält und wodurch sie bestimmt werden.) (Der Raum, der nicht die Gränze eines andern Raumes ist, heißt der körperliche oder der vollständige Raum; er kann an die Gränze eines andern anstoßen, aber ist sie nicht. Es läßt sich denken ein Flächen Raum, der nur die Gränze eines andern (des körperlichen) seyn kann. — Linie ist die Gränze des Flächen Raumes, und Punct Gränze der Linie. Daraus sieht man auch, daß der Raum nicht aus Puncten bestehen kann, weil die Puncte Gränzen sind. (Folgendes gehört eigentlich nicht hieher. Zur Wirklichkeit iecles accidens muß man sich Kraft denken. Die bewegende Kraft ist oppositum der Trägheits Kraft, das ist contradictio in adjecto; eine Kraft, die der Grund ist, daß nichts gethan wird, ist keine Kraft, vis resistens kann man sagen, das ist aber nicht vis inertiae: die resistirt, ist auch materiel. Von Materie unterschieden der Kaum, der ist nichts als die Form. Materie ist das, was im Raum angeschaut werden kann. Man unterscheidt Materie und Körper. Man verstand unter Materie immer was paßives, was allen Erscheinungen zum Grunde liegt. — Cörper wäre das active princip. Das ist falsch. Keine Substanz ist mere paßiv — ist materie Substanz, und das liegt im Begriff derselben, so ist sie active, sonst könnte ihr keine Bewegung inhaeriren; man muß sie so unterscheiden : materia quo ad figuram et quantitatem determinata est corpus.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s08-007",
     "kind": "text",
     "aa": 841,
     "ms": [
      {
       "p": 143,
       "i": 0
      }
     ],
     "text": "Der vollständige Raum ist der körperliche Raum. Bewegung ist die continuirliche Veränderung des Orts der Dinge. Die Dinge, die außer einander sind, können nicht in demselben Orte seyn, und ein Ding kann nicht zugleich an verschiedenen Orten seyn, denn man würde das an andern Orten auch sehen und ein ander Ding nennen müßen. Die Handlung, wodurch ich nur den deutlichen Begriff von der Größe durch die succeßive addition der Einheit mache, ist meßen. Die Kraft, die eine Bewegung anfängt, fortsetzt und ihr wiedersteht, ist bewegende Kraft. Die Kraft des Wiederstandes heißt vis inertiae. Der Name ist aber unschicklich.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s08-008",
     "kind": "text",
     "aa": 841,
     "aaEnd": 842,
     "pages": [
      {
       "p": 842,
       "i": 1041
      }
     ],
     "text": "Von den Verhältnißen der Zeit. Sie betreffen nur die Erscheinungen, weil Zeit nicht die Vorstellung von der Beschaffenheit eines Dings an sich selbst ist. Der Begriff der Zeit ist nicht der Begriff der Dinge an sich selbst, sondern Ordnung in den Erscheinungen. In der Zeit ist das gegenwärtige, vergangene und zukünftige zu unterscheiden. Eigentlich können wir uns 2 Verhältnisse dei Dinge in der Zeit vorstellen, nehmlich insofern sie zugleich, und insofern sie nacheinander sind. Gegenwärtig ist das, was mit der Vorstellung der Zeit zusammen ist; vergangen, was dem Gegenwärtigen vorher geht; zukünftig, was auf das Gegenwärtige folgt. An sich selbst sind Dinge weder gegenwärtig, noch vergangen, noch Zukünftig, sondern das sind Verhältnisse, wie die Dinge in der Zeit geworden sind. Zum Begriff der Zeit gehört auch der Begriff der existenz, nehmlich in der Gegenwart, Vergangenheit und Zukunft. Zeitliche Existenz kann betrachtet werden als Größe, und die Größe der Existenz ist Dauer; darunter verstehe ich nicht die Größe der Dinge an sich selbst. Von der existenz des Dinges an sich selbst (ent.ia in potentia sind solche, die künftig werden können und deren Grund der existenz schon itzt angetroffen wird) (Grund der existenz ist Dauer. — Das Daseyn Gottes kann nicht in der Zeit gemeßen, auch nicht mit derselben verglichen werden.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s08-009",
     "kind": "text",
     "aa": 842,
     "aaEnd": 843,
     "pages": [
      {
       "p": 843,
       "i": 2261
      }
     ],
     "ms": [
      {
       "p": 144,
       "i": 0
      },
      {
       "p": 145,
       "i": 1497
      }
     ],
     "text": "Wie können wir uns den Begriff von der Größe der existenz machen? Wird die existenz betrachtet bei den Phaenomenen, so wird sie in die Zeit gesezt, ist lange Zeit, so ist große Dauer, ist kurze Zeit, so ist kurze Dauer. Dauer ohne Zeit können wir uns nicht vorstellen, es ist zwar keine contradictio der Begriffe, hat aber keine objective Realitaet, ist also problematisch. — (perdurabile ist das, dessen existenz dauert — oder dessen existenz einer Zeit gleich ist - — existentia non perdurabilis est instantanea — der Augenblick ist das in der Zeit, was selbst keine Zeit ist, also das, was der Punct im Raum ist. Was ist Punct? Ist immer die Gränze einer Linie, wo eine Linie anfängt und die andre aufhört, also kein Theil; eben so der Augenblick. Der Augenblick, der das eine Jahr beschließt, fängt zugleich das andre an.) Die Dauer in der Zeit eines Dinges ist das Maaß der Größe des Daseyns des Dinges, insofern es ein Phaenomen ist. Dessen Daseyn keine Dauer hat, ist eigentlich instantaneum — also muß man nicht sagen : Etwas dauert, sondern existirt einen Augenblick. Instantaneum und durabile sind also unterschieden. Einen Augenblick können wir uns vorstellen als Gränze der Zeit, aber nicht als Theil der Zeit, denn sie setzen die Zeit voraus — eben so wenig als Puncte Theile des Raums sind. Vom Anfang und Ende. Existenz, auf die eine ganze Dauer folgt, ist Anfang, und die existenz, der die ganze Dauer vorhergeht, ist Ende.) (Ewigkeit kann man sich vorstellen als Zeit in potentia — stelle ich sie mir als verfloßen vor, so ist das nichts. — Ewigkeit, sagt man, ist Dauer ohne Schranken. Davon haben wir keinen Begriff. — Dauer eines Dinges in der Zeit, insoferne die Zeit ohne Schranken ist, ist das Daseyn zu aller Zeit. Das ist Aeternitas Phaenomenon oder sempiternitas und ist zu unterscheiden von aeternitas noumenon; die denke ich als nicht in der Zeit und kann sie Gott beylegen. Sempiternitas ist die Grenzenlosigkeit eines Daseyn in der Zeit. Die läßt sich denken a parte priori und a parte posteriori. (Beyde haben keine Größe. Der Anfang ist Gränze a parte priori von der Dauer, und Ende Gränze a parte posteriori von der Dauer, also selbst keine Dauer. Dauer ohne Anfang und Ende ist der negative Begriff von der Ewigkeit, aber auch problematisch, denn ich kann ihn nicht in concreto darstellen. Aeternitas a parte ante läßt sich nicht in der Zeit concipiren, weil der Processus infinitus ut absolutus seyn kann. Durch aeternitas, als durch Dauer ohne Anfang und Ende, gewinnen wir nichts, weil der Begriff gar nicht von Noumenis gilt. Sempiternitas ist das Daseyn zu aller Zeit. Wir reden ietzt",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s08-010",
     "kind": "text",
     "aa": 843,
     "text": "Von Ursach und Verursachtem.",
     "ocrConf": 68
    },
    {
     "id": "metaphysik-mrongovius-s08-011",
     "kind": "text",
     "aa": 843,
     "aaEnd": 846,
     "pages": [
      {
       "p": 844,
       "i": 1894
      },
      {
       "p": 845,
       "i": 4446
      },
      {
       "p": 846,
       "i": 7015
      }
     ],
     "ms": [
      {
       "p": 146,
       "i": 227
      },
      {
       "p": 147,
       "i": 1507
      },
      {
       "p": 148,
       "i": 2741
      },
      {
       "p": 149,
       "i": 4028
      },
      {
       "p": 150,
       "i": 4821
      },
      {
       "p": 151,
       "i": 5977
      },
      {
       "p": 152,
       "i": 7084
      },
      {
       "p": 153,
       "i": 8266
      }
     ],
     "text": "Das, was den Grund des Daseyns von etwas enthält, ist Ursache. (Principium, sagt der Autor, ist der Grund — eigentlich drückt es eine Erkenntniß aus, insofern es den allgemeinen Grund anderer Erkenntniße nach einer allgemeinen Regel — aber auch zuweilen den Grund einer Sache, zum Beyspiel so statuirten die Manichaer ein principium boni et mali. — Der Ursache correspondirt das caußatum. — Was nur als caußatum existiren kann, ist ens ab alio sive dependens — besser ens ab alio, denn zuweilen kann ein Ding rationis seines Zustandes dependens seyn, aber nicht an sich, z. B. die Haus Thiere vom Menschen — ihm wird opponirt das Ens a se. — Wir können aber nicht einsehen, wie ein Ding vor sich selbst sey, das ist blos negativer Begriff.) Eßentialia enthalten den Grund der attributa und sind rationes logicae, aber sind nicht Ui Sachen, weil ich nur nach der Möglichkeit frage. Ens ab alio est caußatum, ens a se selbständig, quod non existit ut causatam. Der Begriff eines selbständigen Wesens ist nicht der Begriff eines nothwendigen, denn ich sage, es existirt a se, ohne den Unterschied zu machen zwischen selbständig und nothwendig. Der Autor aber sagt: Ens a se ist allein nothwendig und Ens contingens ist caußatum alterius. Nothwendig ist ein Verstandesbegriff, durch die Vernunft kann ich existenz nicht erkennen, als es muß schlechterdings oder durch was anders nothwendig seyn. Aus des Autors Satz folgt, daß alles das, was wir als zufällig erkennen, sein Daseyn von etwas anders haben müßte. Woran erkennen wir die contingenz ? Ens contingens ist das, deßen Nichtseyn möglich ist. Woran erkenne ich doch che Möglichkeit des Nichtseyns? Wäre schon der Mangel des Wiederspruchs genug, so ist alles contingent. Wir haben keinen Begriff von der Unmöglichkeit, als durch den Satz des Wiederspruchs, ein Nichtseyn ist ein Wiederspruch, also ist nichts nothwendig, und keine oberste Ur-Sache und alles caußatum. Wir haben keinen Begriff von der absoluten Noth Wendigkeit, noch von der absoluten Zufälligkeit. Denn wir sagen: Zufällig ist alles das, was an sich nicht nothwendig, oder dessen Nichtseyn an sich selbst möglich ist — deßen Nichtseyn sich also ohne Widerspruch denken läßt, ist zufällig; alles ist also zufällig. Der Satz des Autors, allgemein genommen, würde eine Bedeutung haben, wenn ich etwas als an sich zufällig erkennen könnte. Wir können vom Zufälligen und Nothwendigen einen Begriff haben, aber nur in der Erscheinung. Das ist zufällig, was geschieht in der Zeit; was nicht vergeht und nicht entsteht, ist nothwendig in der Erscheinung. Von der Nothwendigkeit und Zufälligkeit der Dinge haben wir keinen Begriff. Entstehen oder vergehen Substanzen? Nein, das war oben ein Haupt Grundsatz. Wir werden sagen: alle Veränderungen sind caußata alterius, aber nicht Substanzen, denn an denen erkenne ich gar nicht die contingenz; sie sind beharrlich. Daß ieder Zustand caußatum alterius sei, läßt sich wohl begreifen. Weil der Satz des Autors richtig ist, können wir nicht glauben, daß er gleich auf Dinge angewandt werden kann, sondern nur auf Zustände, denn wir haben keinen Begriff vom Contingenten an sich selbst. — Princip ist iede Ursach, soferne daraus andere caußata herfließen. — Principium fiendi ist Ursache (principium fiendi ist das, was den Grund der Wirklichkeit enthält), cognoscendi Urtheil, eßendi der Grund der Möglichkeit, und betrifft das Wesen der Dinge. Viele Ursachen, sofern sie zu einem caußato gehören, heißen concaußae, die sind entweder sibi subordinatae, wenn eine vermittelst der andern caußa causati ist — oder coordinatae, wenn keine als caußa remota, sondern alle als immediatae anzusehen sind. Die concaußae sind subordinirt, entweder eßentialiter, wenn sie sich quoad caußalitatem oder nach der Bestimmung, wodurch sie die Ursach der caußati ist, subordinirt sind, — oder accidentaliter, wenn sie nicht quoad caußalitatem, sondern quoad caeteras deteiminatibus subordinirt sind. (Correlata bedeuten den Terminus und das subiect der relation — in der relation ist etwas princip der relation, d. i. terminus, was davon abhängt ist subiect, und beide correlata, z. E. Lehre ist terminus und Lehrling subiect. Jede relation ist einseitig — -wenn eines Grund des andern Folge und nicht sowohl Folge wie der Grund ist oder zweyseitig, wenn die Folge Grund und v.v. Die erste kann man nennen correlata heteronyma, die andere homonyma. Wenn eine Ursache das Supplement zur Sufficienz der andern ist, so concurriren sie — und ihr nexus heißt concursus. Die minus principialis heißt die concurrirende — caußa caußae ist caußa caußatae, insofern sie die Ursache der caußalitaet der caußae subordinatae enthält, z. B. ein Vater ist caußa des Bösen seines Sohnes, oder wenn er Böses thut, nicht insofern er ihn auf die Welt gesetzt, sondern wenn er ihn zum Bösen angehalten, das wird in der Theologia naturali gebraucht.) Die Ursachen sind entweder efficientes oder finales, efficiens ist Ursache per actionem. Was der Grund der existenz eines andern ist, ist Ursache, es sey positive oder negative, material oder formal. Alle Caußae efficientes sind also Bestimmungen der Kräfte; soferne sie coordinirt sind oder efficientes coordinatae, heißen sociae. auxiliaris heißt die minus principalis (die efficienz wird oppositio caußa formalis, z. B. ein Keil ist durch seine lorm die Ursache dse Holzspaltens — oder er enthält die formale Bedingung desselben — der Schlegel, womit er eingeschlagen wird, und die veste Materie des Keils sind caußae efficientes.) Caußalitas caußa auxiliaris ist auxilium. Eventus ist eine einzelne Handlung mit ihrem Erfolge, Begebenheit in ihrer Verknüpfung betrachtet, heißt die Verknüpfung oder Relation mit andern Dingen in derselben Zeit (die äußere Verknüpfung, in der der eventus geschieht, ist circumstanz — circumstantiae loci, insoferne sie zur Begebenheit concurriren, heißen opportunitates temporis — tempestivität). Circumstanz oder relatio eventus respectu simultaneorum est circumstantia. In den circumstantiis stecken die concaußae coordinatae. Concursus est actio (caußalitaet) concaußarum coordmatarum, nicht subordinatarum ; alle circumstanzen soferne sie zu einer Begebenheit concurriren, heißen Gelegenheit; die ist entweder Gelegenheit der Zeit oder des Orts, und an beyden ist viel gelegen. Die concurrenz der circumstanzen der Zeit ist tempestivitas, des Orts opportunitas. Man sagt: minima circumstantia variant rem. Denn, will ich alle concaußas haben, so kommt es auf den geringsten Umstand an, auch der kann concaußa sein (ferner locus et tempus non variant rem _ denn es sind bloß Stellen, worinn Begebenheiten geschehen). Effectus univocus ist der, der mit der Ursache von einer Art ist aequivocus, der nicht mit ihr von einer Art ist. In der Physic wir effectus aequivocus geleugnet, aber allgemein geht das nicht an, sonst müßte Gott mit der Welt homogen sein (z.E. effectus aequivocus wäre, wenn Insecten aus Aas entspringen möchten. Hier wäre Ursach und Wirkung specifisch unterschieden. Effectus aequivocus ist bis ietzt nicht völlig wiederlegt worden. Der Autor macht dieses aber allgemein und sagt: effectus aequivocus ist allgemein, das geht nicht an. Was ist Gott und Welt, Uhrmacher und die Uhr?) Effectus testator de caußa. Die Wirkung zeigt an den Grund der caußalitaet, d.h. die Bestimmung der Ursache zu handeln, durch welche das caußatum existirt, denn effectus zeigt nur vires vivas, angewandte Kräfte, nicht mortuas, die keinen effect haben. (Ein effect kann sein mediatus, auch immediatus, plenus und minus plenus. Unter plenus versteht man das ganze Aggregat der coordinirten Wirkungen, d. i. die ganze Reihe der subordinirten Wirkungen, eigentlich ist es das erstere, doch das letztere nennt man auch effectus plenus. — Beym ersten meint man bloß alle effectus immediatos — -bey letzterm auch alle mediatos und daher kann man sagen: Eine Kanonenkugel kann eine unendliche Reihe von Veränderungen hervorbringen und wir bekommen einen effectus plenus. Effectus plenus (oder das ganze Aggregat coordinirter Wirkungen) est aequalis viribus efficientibus. Der Autor sagt: vivis, das heißt die angewandte, das heißt die Wirkungen beweisen den Grad der Kraft, aber nicht das Vermögens, in den Wirkungen kann nicht mehr Werth sein als in der Ursache, d.h. nicht mehr realitaet. Wir betrachten hier blos den metaphysischen Werth, der beruhet auf dem Grade der realitaet. Beides heißt effectus testatur de caußa, d.h. die Wirkung offenbaret die Existenz der Ursache — auch die quantitaet und qualitaet derselben. Der nexus zwischen caußa efficiens und effectus ist nexus effectivus.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 25,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s08-012",
     "kind": "text",
     "aa": 846,
     "aaEnd": 847,
     "pages": [
      {
       "p": 847,
       "i": 853
      }
     ],
     "text": "Vom nützlichen, das gehört gar nicht her. Nutzen setzt nehmlich voraus einen Gegenstand des Wollens. Wollen wiederum den Begriff der Lust und Unlust. Das gehört alles nicht in die Ontologie. Was ein Mittel zum Guten ist, ist nützlich. Der Grad der Nützlichkeit ist Werth oder pretium; der äußere Werth ist Preis, der innre dignitas, Würde, und der Mensch nur allein so fern er moralisch gut ist, hat Würde. Mißbrauch ist ein Gebrauch, der wieder die Utilitaet. ist. (Gut ist das, was als Grund zu etwas andern consentirt. Dinge sind absolut oder respectiv gut, bonum absolutum ist dignitas — bonum respective utilitas. Preis einer Sache ist was anderes als Werth — er bedeutet eine andre Sache, die an die Stelle dieser als aequivalent gesezt werden kann — - setzt also einen Maßstab voraus. - — Man nennt einen Menschen schätzbar, auch unschätzbar — — schätzbar, deßen Werth geschätzt werden kann, das ist wenig oder hohen Werth hat, und dann kommt es dem unschätzbaren nahe) Noch mäßen wir reden von",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s08-013",
     "kind": "text",
     "aa": 847,
     "text": "Materie und Form.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s08-014",
     "kind": "text",
     "aa": 847,
     "ms": [
      {
       "p": 154,
       "i": 16
      }
     ],
     "text": "Die Scholasticer unterschieden in allen Dingen Materie, d. i. genus und Form, das ist differentia specifica. In iedem Urtheil machen subject und praedicat Materie, und das Verhältnis beider die Form aus. Im ratiocinio die praemißen die Materie und die Consequenz die Form. Die Form macht immer das Wesen der Sache aus. Materia ex qua ist zum Beispiel das Holz, wenn ein Schrank davon gemacht wird, circa quam, w'omit, man occupirt ist, in qua, die data, denen schon die Bestimmungen inhaeriren.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s08-015",
     "kind": "text",
     "aa": 847,
     "aaEnd": 848,
     "pages": [
      {
       "p": 848,
       "i": 1643
      }
     ],
     "ms": [
      {
       "p": 155,
       "i": 1086
      }
     ],
     "text": "Außer den Verstandes Begriffen haben wir noch andre Begriffe a priori, die heißen Vernunft Begriffe oder Ideen, d. i. solche nothwendigen Begriffe der Vernunft, denen keine correspondirende Objecte in der Erfahrung können gegeben werden. Dem Begriff wird die Bedeutung bestimmt durch Nennung eines Beispiels, und ohne das hat er gar keine Bedeutung. Sind dergleichen Ideen in uns? Ja, z.E. der weise Stoiker in der moral ist eine bloße Idee. Weisheit ist vollkommne Moral ohne Mängel und Ausnahme, solche kann ich nicht finden, denn ieder Mensch hat wenigstens Hang zu Lastern , das stimmt aber schon nicht mit der Weisheit. Man kann nicht sagen, solcher Begriff ist wiedersprechend, sondern sehr wohl möglich, ia nothwendig. Ueber allen Ideen sind die transcendentale, mit denen wir es zu thun haben. Das sind Ideen der reinen Vernunft, und mit der wir uns itzt beschäftigen, ist die Idee der Welt, (außer dem nexu effectivo giebts noch einen nexum utilitatis, und alles ist in nexu utilitatis. Der nexus usuum kommt auf den Menschen an meiner. Die Möglichkeit, Nutzen hervorzubringen ist von der Vorsehung. Zweck, Mittel, Absicht gehört in die Psychologie. Zweck ist das, was ich mir als gut vorstelle, um deßen willen etwas anderes als Mittel für gut angesehen wird; in iedem Zwecke ist caußa impul -siva, d.h. das gute am Zwecke, um welches etwas anderes als Mittel gefällt. Zweck und Endzweck kann man unterscheiden. Zweck kann coordinirt sein, da sind denn cofines — oder subordinirt, und der, dem alle Zwecke subordinirt sind, heißt Endzweck.) (Materie und Form gehen durch alle Theile der Philosophie. Materie ist das determinabile, — Form die determination. — Materie ex qua, z. B. 3 Seiten, — - das ist das deterrninabile, circa quam quidam occupatus est, z. E. wovon handelt der Prediger? Ist die determination schon geschehen, so ist das materia in qua, z. B. die hölzerne Uhr.) Id cuius simile intenditus est, ist exemplar, die Copey ist exemplatum. Ein exemplar non exemplatum ist Original — de signo et de signato gehört gar nicht hieher.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s08-016",
     "kind": "text",
     "aa": 848,
     "text": "De Cosmologia",
     "ocrConf": 50
    },
    {
     "id": "metaphysik-mrongovius-s08-017",
     "kind": "text",
     "aa": 848,
     "ms": [
      {
       "p": 156,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Einleitung zur Cosmologie",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s08-018",
     "kind": "text",
     "aa": 848,
     "text": "Der Begriff von einer Welt überhaupt ist eine von den Einschränkungen der Sinnen Welt durch die Vernunft. Nun aber haben wir 2erley Begriffe in unsrer Seele: Verstandes- und Vernunft Begriffe. Vernunft Begriffe entstehen, wenn man einen Verstandes Begriff ins Unendliche vergrößert. So haben wir sinnliche Begriffe a priori, Verstandes Begriffe a priori und Vernunft Begriffe a priori. Vernunft Begriffe heißen Ideen und sind solche Vorstellungen, deren Gegenstand in keiner möglichen Erfahrung adaequat gegeben werden kann, sind aber der Vernunft doch äußerst nothwendig und wiedersprechen sich doch gar nicht. Diese Transcendentalen Ideen haben auch den Nutzen, daß sie, da sie uns über alle mögliche Erfahrung herausführen, uns glauben machen, daß es auch außer dem Felde der Erfahrung Dinge geben kann. Alle diese Ideen beziehen sich und bestehen in der absoluten Totalitaet der Bedingungen in der Welt. Die absolute Totalitaet der Reihe der Bedingungen, welche bei den Gegenständen der Erfahrung statt finden, ist die cosmologische Idee. Diese zerfällt in 4 besondre nach den Categorien",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s08-019",
     "kind": "text",
     "aa": 848,
     "text": "1. ) In die Cosmologische Idee der Quantitaet der Welt. Diese können wir gar nicht durch Erfahrung kennen. Denn wäre die Welt unendlich, so ginge das so nicht an. Wäre sie aber endlich, so kann ich die Gränze nicht erfahren; denn ich kann nichts negatives erfahren.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s08-020",
     "kind": "text",
     "aa": 848,
     "aaEnd": 849,
     "pages": [
      {
       "p": 849,
       "i": 193
      }
     ],
     "text": "2. ) In die Cosmologische Idee der Qualitaet oder der Decomposition, daß die Welt aus einfachen Theilen bestehe, welches ich auch aus der Erfahrung nicht erkennen kann ; da die Erfahrung durch die Sinne geschieht und Raum und Zeit, diese Formen der Sinnlichkeit, nicht aus einfachen Theilen bestehen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s08-021",
     "kind": "text",
     "aa": 849,
     "text": "3. ) In die Cosmologische Idee der Relation oder die absolute Totalitaet der Naturordnung. Ra in der Welt die Ursache des Bedingten immer wieder eine Bedingung ist; so suche ich das unbedingte, um zur absoluten Totalitaet zu gelangen, welches mir die Erfahrung nicht geben kann, da es nicht in der Welt angetroffen wird, sondern außer derselben ist.",
     "dehyphenated": 2,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s08-022",
     "kind": "text",
     "aa": 849,
     "text": "4. ) Die Cosmologische Idee des Noth wendigen, daß um der absoluten Totalitaet willen das oberste Wesen nothwendig ist. — Diese Ideen haben den Nutzen, daß sie uns antreiben, bei den Begebenheiten der Welt immer von einer Ursache zur andern zu schließen, um auf die absolute Totalitaet zu kommen. 2. Uns lehren, daß außer der Sinnen Welt noch was vorhanden sein müße. Insofern haben sie immanenten Gebrauch. Ra sie aber keine Beispiele in der Erfahrung haben, so sind sie leere Begriffe und können uns nichts von ihren Obiecten lehren.",
     "dehyphenated": 2,
     "ocrConf": 73
    }
   ]
  },
  {
   "id": "s09",
   "title": "Erster Abschnitt. Von dem Begriffe einer Welt. Erstes Capitel von dem positiven Begriff der Welt.",
   "titleSrc": "heading",
   "headings": [
    "Erster Abschnitt. Von dem Begriffe einer Welt.",
    "Erstes Capitel von dem positiven Begriff der Welt."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s09-001",
     "kind": "heading",
     "aa": 849,
     "text": "Erster Abschnitt. Von dem Begriffe einer Welt. Erstes Capitel von dem positiven Begriff der Welt."
    },
    {
     "id": "metaphysik-mrongovius-s09-002",
     "kind": "text",
     "aa": 849,
     "aaEnd": 850,
     "pages": [
      {
       "p": 850,
       "i": 1102
      }
     ],
     "ms": [
      {
       "p": 157,
       "i": 175
      }
     ],
     "text": "Die Welt ist ein Totum substantiale quod non est pars altenus, i. e. absolutum et non respectivum quod nullo respectu est pars alterius. Bloß Verknüpfung der Coordination der Dinge im commercio ist Verbindung der Theile zu einem ganzen; aber Verknüpfung Subordination als Wirkung und Ursache ist das nicht. Daher ist bei der Verknüpfung der Welt mit Gott die Welt kein Theil von demselben. Diese Erklärung der Welt ist eine Erklärung des mundi intelligibilis, wo wir unter Substanzen die Dinge, so wie sie an sich sind, verstehen, und ist wohl vom mundus sensibihs zu unterscheiden, welcher ein complexus, datum aller Erscheinungen, ist, wo wir unter Substanzen das beharrliche in den Erscheinungen verstehen. Durch die Verwechselung dieser beiden Begriffe entstehen hernach a e Antinomien in der Cosmologie. Wenn ich sage: die binnen Veit ist totum von Substanzen, so widerspricht sich das, da Raum und Zeit unendlich sind. Ich kann von der Sinnen Welt behaupten daß sie endlich, auch daß sie unendlich sei; das kommt daher weil un wenn ich sie mit der Verstandes Welt für einerlei halte. So irre ich auch bei der zweiten Cosmologischen Idee, wenn ich die Sinnen Welt für aus einfachen Theilen bestehend annehme. Das kann ich wohl von dem mundus noumenon sagen, indem, wenn ich da die Zusammensetzung aufhebe, mir die zusammengesetzten Substanzen bleiben, die, wenn sie nicht mehr zusammengesetzt sind, nothwendig einfach sein müßen. Aber wenn ich bei der Sinnen Welt die Zusammensetzung aufhebe; so bleibt mir nichts übrig. Die Sinnen Welt ist nichts anders als Synthesis oder Aneinanderreihung meiner Vorstellungen von Obiecten nach den Formen von Raum und Zeit. Hebe ich daher die letztem auf, so hebe ich doch zugleich die Sinnen Welt auf. Raum und Zeit bestehen nicht aus einfachen Theilen. Diese und andere Antinomien sind der Haupt Gegenstand und Inhalt der Cosmologie. Vom mundo intelligibili kommt nur wenig vor, da wir durch den Verstand von ihm wenig mehr, als was aus der Definition fließt, erkennen können. Vide Kants de mundi intelligibilis atque sensibilis Forma et Principiis. Regiom. 1770. Ein Auswärtiger nannte es Schwärmerei, vom mundo intelligibili zu reden. Aber dies ist gerade das Gegentheil, denn man versteht darunter nicht eine andre Welt, sondern diese Welt, wie ich sie mir durch den Verstand denke. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s09-003",
     "kind": "text",
     "aa": 850,
     "ms": [
      {
       "p": 158,
       "i": 306
      }
     ],
     "text": "Bei der gegebenen Definition von der Welt ist iedes Wort bedeutend. Daher wollen wir sie mehr entwickeln. Es sind hier lauter Ontologische Begriffe. Daher gehört sie zur transcendental Philosophie. Die Welt ist also ein Totum Substantiale, mithin nicht bloß ideale. Wir können uns verschiedene Tota idealiadenken, die aber keine Welt ausmachen, z. E. ich kann mir ein Totum syllogismorum, ein Totum accidentale oder ein Ganzes im Raum usw. vorstellen; das sind aber bloße Tota idealia, die aus Begriffen bestehen. Allein die Welt ist ein Totum reale, das aus Substanzen besteht. Der Autor vermengt diese beiden Arten von Totis. Denn er erklärt series durch multitudo, und Totum, indem er sie für Synonyma hält.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s09-004",
     "kind": "text",
     "aa": 850,
     "text": "Bei iedem Ganzen ist Materie und Form anzutreffen. Materie als die Data und die Form als die Art der Verbindung derselben.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-005",
     "kind": "text",
     "aa": 850,
     "text": "In einem composito besteht die Materie aus Theilen, und in der Metaphysic sind das die Substanzen, welche auch Geister sein können. Denn Materie nehmen wir hier nicht körperlich, sondern transcendentaliter für das quacumque rat.ione determinabile. Sind demnach Substanzen die Materie der Welt, so sind es die Accidentien doch nicht, sondern gehören bloß zu Zuständen derselben.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s09-006",
     "kind": "text",
     "aa": 851,
     "text": "Die Form der Welt ist nun der nexus der Substanzen.",
     "ocrConf": 66
    },
    {
     "id": "metaphysik-mrongovius-s09-007",
     "kind": "text",
     "aa": 851,
     "text": "Ist die Welt ein nexus von Substanzen, so kann ich mir die Welt nicht egoistisch denken, d. i. ich kann nicht sagen: ich bin die Welt. Alles außer mir sind nicht Dinge, sondern bloßer Schein. Denn da die Welt viele Substanzen und noch dazu einen nexum derselben erfordert, so kann ich als eine einzige Substanz keine Welt ausmachen. —",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-008",
     "kind": "text",
     "aa": 851,
     "text": "Der nexus ist ideal, wenn ich die Substanzen bloß zusammen denke, und real, wenn die Substanzen unter einander wirklich im commercio stehen.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-009",
     "kind": "text",
     "aa": 851,
     "text": "Die Form der Welt ist ein nexus realis, weil es ein Totum reale ist. Denn, wenn wir eine Menge von Substanzen haben, so müßen diese auch miteinander in Verbindung stehen, sonst wären sie isolirt. Isolirte Substanzen aber machen nie ein Totum aus. Sind die Substanzen zusammen, also ein Totum, so müßen sie auch ein Totum reale sein. Denn wären sie ideale, so ließen sie sich wohl in Gedanken als ein Totum vorstellen, oder die Vorstellungen von ihnen machten ein Totum aus ; aber die Dinge an sich selbst würden deswegen doch kein Totum ausmachen.",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s09-010",
     "kind": "text",
     "aa": 851,
     "text": "Demnach ist des Autors Definition der Welt durch eine Reihe falsch, weil sie den Begriff des Toti idealis mit sich führt. Endlich gehört zur Definition der Welt die Omnitudo, quae non est pars alterius.",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-mrongovius-s09-011",
     "kind": "text",
     "aa": 851,
     "ms": [
      {
       "p": 159,
       "i": 175,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Ein compositum kann entweder ein respective oder absolute Totum sein. Es ist respective ein Totum, soferne es nicht ein Theil von dem Ganzen derselben Art ist, absolute Totum aber, sofern es weder von derselben noch von einer andern Art ein Theil ist, z. E. ein Haus ist respectives Totum, insofern es ein Ganzes von seiner Art ist; aber es ist nicht ein absolutes Totum, denn es ist ein Theil von einer andern Art, nehmlich von einer Straße.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-012",
     "kind": "text",
     "aa": 851,
     "text": "Die Welt ist kein respectives Totum, sondern ein absolutes Totum im metaphysischen Verstand. Im Physischen Verstand heißt die Welt die Erde relative spectatum.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s09-013",
     "kind": "text",
     "aa": 851,
     "aaEnd": 852,
     "pages": [
      {
       "p": 852,
       "i": 382
      }
     ],
     "text": "Der Begriff des Weltalls ist ein bloßes Problem, ein Vernunft Begriff, den ich in abstracto wohl denken, in concreto aber niemals geben kann. Denn sollen wir ihn in concreto geben, so müßen wir ihn uns im Raum vorstellen, den er einnimmt. Wäre dieser Raum nun unbegränzt, so würden wir ihn nicht auszählen, sondern es würde noch immer etwas übrig bleiben. Mithin können wir die Totalitaet der Welt nicht erfahren. Wenn aber der Raum auch begränzt wäre, so könnten wir doch nicht die Gränze desselben erfahren. Denn wie können wir erfahren, daß nichts mehr da sei? Wir können etwas nicht mehr wahrnehmen, aber daraus folgt noch nicht, daß es auch wirklich nicht mehr ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s09-014",
     "kind": "text",
     "aa": 852,
     "text": "Sind denn aber diese Transcendentale oder Dialectische Ideen (auch vernünftelnde Begriffe) nicht bloße Hirngespinste (Entia rationis ratiocinantis) ?",
     "dehyphenated": 1,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s09-015",
     "kind": "text",
     "aa": 852,
     "text": "Nein. Es ist der Vernunft nothwendig, alle ihre Begriffe zur Vollständigkeit zu bringen und daher auch das compositum absolute complet zu machen, denn das bringt ia die Natur mit sich, allgemeine Regeln zu entwerfen, daher kann sie nichts unvollständiges leiden.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s09-016",
     "kind": "text",
     "aa": 852,
     "text": "Die Einheit des Mannigfaltigen ist 3fach : Compositum, Quantum und Totum. Compositum ist Einheit, sofern sie zusammengesetzt ist, Totum, wenn diese Zusammensetzung vollständig ist, und Quantum heißt diese Einheit in relation auf noch andere Einheiten.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s09-017",
     "kind": "text",
     "aa": 852,
     "text": "Die Welt ist Compositum, weil sie eine Menge von Substanzen hat, und Totum, weil alle diese in einem commereio stehen. Endlich auch ein Quantum, wenn wir sehen, ob sie endlich oder unendlich sei. Hierauf geht die ganze Cosmologie.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-018",
     "kind": "text",
     "aa": 852,
     "text": "In der Ontologie haben wir den Begriff einer Monas, eines Theils, was kein Ganzes mehr ist, und in der Cosmologie den Begriff einer Welt: eines Ganzen, welches kein Theil mehr ist.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s09-019",
     "kind": "text",
     "aa": 852,
     "ms": [
      {
       "p": 160,
       "i": 165
      }
     ],
     "text": "Das sind die beiden Extreme in der Composition und Decomposition. Denn in der Auflösung (Decomposition) komme ich nicht weiter als bis zur Monade und in der Zusammensetzung nicht weiter als bis an die Welt.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s09-020",
     "kind": "text",
     "aa": 852,
     "text": "Der Autor sagt in seiner Definition, daß die Welt eine Reihe endlicher Substanzen sei. Dies ist aber unnöthig, daß er finitorum (oder wie andre contingentium) hinzusetzt, denn es fließt schon aus der Definition selbst. Denn wenn die Welt ein Totum von Substanzen ist, eine iede derselben aber der andern als seines complementi ad totum bedarf, so kann sie ia nicht unendlich sein. Daher besteht die Welt aus endlichen Substanzen. Weil ferner die Substanzen in der Welt in einem commereio stehen und in actione et reactione sich befinden, so ist eine iede oder vielmehr ihr Zustand von dem Wirken einer abhängig. Mithin veränderlich und zufällig.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s09-021",
     "kind": "text",
     "aa": 852,
     "aaEnd": 853,
     "pages": [
      {
       "p": 853,
       "i": 133
      }
     ],
     "text": "Jetzt kommt der Autor auf den Satz : in mundo non datur insula, d.h. in der Welt ist alles in durchgängigem Nexu. Dieses liegt schon in dem Begriff des Ganzen. Denn eine von allen übrigen abgesonderte, also isolirte, Substanz würde gar nicht zur Welt gehören, indem sie dann nicht mit dem Ganzen verbunden wäre. Ja, eine große Menge isolirter Substanzen würde keine Welt ausmachen (die isolirten Substanzen sind nur der Stoff zu einer Welt), weil sie kein Ganzes ausmachen möchten, sondern iede derselben ganz allein und ohne alle Gemeinschaft mit der andern sein würde. Nun kommen wir auf die wichtige Frage: giebts nur eine Welt, oder sind noch mehrere Welten möglich? Diese Frage ist aber zweideutig, denn es ist so eine disjunctive Vielheit der Welt, daß an der Stelle der einen eine andre sein könnte; oder eine collective vel copulative Vielheit der Welt möglich, daß eine neben der andern sein könnte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s09-022",
     "kind": "text",
     "aa": 853,
     "text": "Ist demnach 1 eine disjunctive Vielheit der Welt möglich? Ja, denn die Welt ist nicht nothwendig, mithin könnte in ihrer Stelle auch eine andre sein. Daß die Welt zufällig sei, fließt aus dem eommercio der Substanzen in derselben.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s09-023",
     "kind": "text",
     "aa": 853,
     "ms": [
      {
       "p": 161,
       "i": 531
      }
     ],
     "text": "Ist aber eine collective Verschiedenheit der Welt möglich? Der Autor sagt, eine Vielheit der Welt sei unmöglich, und freilich, wenn man nach seiner Definition die Welt für einen Complex aller Dinge nimmt, so kann sie als collective nur eine sein. Denn zwei Universa können nicht existiren. Aber das ist der Begriff einer Welt, die ein ideales Ganze, nicht aber ein reales Ganze von Substanzen ausmacht. Denn zum realen Ganzen der Welt dürfen nicht alle Dinge, sondern nur die miteinander im commercio stehenden Substanzen gehören. Die nicht im commercio stehenden Substanzen sind isolirt und können wieder ein besonderes Totum ausmachen, wenn sie mit einander verknüpft Werden. Dieses Totum kann eine andere Welt sein, die mit dieser in gar keiner Verbindung stehen darf, auch allenfalls einen besonderen Schöpfer haben könnte.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s09-024",
     "kind": "text",
     "aa": 853,
     "text": "Wir können überhaupt die Welt als Noumenon und Phaenomenon betrachten .",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s09-025",
     "kind": "text",
     "aa": 853,
     "aaEnd": 854,
     "pages": [
      {
       "p": 854,
       "i": 518
      }
     ],
     "text": "Die Definiton ist ein Erkenntniß des Mundi Noumenon. Denn ich abstrahire da von der Art, wie ein solches Totum von Substanzen sollte angeschaut werden können, und finde keinen Wiederspruch m dieser Vernunft Idee. Ich finde auch keinen Wiederspruch dann, daß dieses absolute Ganze nicht auch in den Erscheinungen oder m der Sinnen Welt statt finden sollte. Aber es ist mir doch unmöglich, es zu erfahren, weil die Verknüpfung der Substanzen in der Sinnen Welt und Raum und Zeit besteht, diese aber quanta contmua sind, deren Totalitaet man niemals ausfindig machen kann, denn hier ist ein Progreßus in infinitum, und durch den vollendeten Progreßusist doch Totalitaet nur möglich. Daher heißt der Total itaetsbegriff in der Metaphysic nur mundus Noumenon und Phaenomenon.",
     "joined": [
      "layout"
     ],
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s09-026",
     "kind": "text",
     "aa": 854,
     "text": "Es ist nur eine Sinnen Welt möglich, denn da nur ein Raum und eine Zeit sind, und 2 Zeiten zusammen nicht statt finden können, beide aber den Grund des commercii aller Substanzen in der Sinnen Welt ausmachen, so ist auch nur eine Sinnen Welt möglich.",
     "ocrConf": 85
    }
   ]
  },
  {
   "id": "s10",
   "title": "Capitel 2. Von dem negativen Begriffe einer Welt.",
   "titleSrc": "heading",
   "headings": [
    "Capitel 2. Von dem negativen Begriffe einer Welt."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s10-001",
     "kind": "heading",
     "aa": 854,
     "text": "Capitel 2. Von dem negativen Begriffe einer Welt."
    },
    {
     "id": "metaphysik-mrongovius-s10-002",
     "kind": "text",
     "aa": 854,
     "text": "Hier betrachten wir die Welt als ein quantum und zwar nach der absoluten Totalitaet ihrer Composition und Decomposition. Bei der Composition betrachten wir die Welt als ein Quantum und gehen von den Theilen aufs Ganze. Bei der Decomposition betrachten wir die Welt als Compositum und gehen vom Ganzen zu den Theilen.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s10-003",
     "kind": "text",
     "aa": 854,
     "aaEnd": 855,
     "pages": [
      {
       "p": 855,
       "i": 1521
      }
     ],
     "ms": [
      {
       "p": 162,
       "i": 661
      }
     ],
     "text": "In Absicht der Composition entsteht die Frage: Ist die Welt endlich oder unendlich, und in Absicht der Decomposition: Ist die Welt begränzt oder nicht? Hat sie einfache Theile oder nicht? Die erste Frage: Ist die Welt endlich oder unendlich? Es giebt ein doppelt infinitum: ein infinitum reale oder das so genannte illimitatum, und das infinitum mathematicum, welches nur auf die Erscheinung der Dinge in Raum und Zeit geht und daher bloß bei Phaenomenen gilt. (Das infinitum mathematicum wird hier nicht potentiale, sondern actuale genommen. Denn eine potentiale oder künftige Unendlichkeit können wir uns immer denken.) Da wir hier von der Sinnen Welt reden, so verstehen wir hier also unter dem Unendlichen das infinitum reale, und fragen demnach, ob die Sinnen Welt dem Raum oder der Zeit nach unendlich sei oder nicht. Beides ist nicht wahr. Daß hier die beiden contradictorischen Urtheile zugleich falsch sind, kommt daher, weil der zum Grunde gelegte Begriff falsch ist. Wenn ich z.E. sage: Ein 4 eckigter Zirkel muß entweder Ecken haben oder rund sein, so gelten beide Praedicate — weil das Subject falsch ist. So ists auch hier bewandt. Denn die Frage, ob die Welt unendlich sei oder nicht, setzt voraus, daß die Sinnen Welt etwas an sich selbst sei. Nun aber ist die Sinnen Welt bloße Summe der Erscheinungen und kein Ganzes von Dingen. Betrachten wir sie also an sich selbst; so ist das Gontradictio in adjecto. Daher kommen diese Widersprüche der Vernunft mit sich selbst, welche in der Critic Antinomien der reinen Vernunft genannt werden, denn man mag annehmen, daß die Welt endlich oder unendlich sei, so findet man sich in beiden Fällen in Wiedersprüche und Ungereimtheiten verwickelt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s10-004",
     "kind": "text",
     "aa": 855,
     "ms": [
      {
       "p": 163,
       "i": 1420,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Nimmt man an, die Welt sei der Zeit nach unendlich, so ist schon eine Ewigkeit verflossen, und dieses ist absurde zu gedenken. Soll aber die Welt der Zeit nach einen Anfang genommen haben, so müßte doch eine Zeit vorhergegangen sein, denn der Anfang ist das Dasein, das auf das Nichtsein folgt. Ist also eine Zeit vorhergewesen, so muß es auch keine leere Zeit gewesen sein, denn eine Zeit in derselben kann man sich nicht vorstellen. In der Zeit muß also wieder eine Welt gewesen sein. Folglich ist immer eine Welt gewesen und hat doch auch einen Anfang genommen. Welch ein Wiederspruch! Anfang ist immer das, was geschieht. Alles was geschieht, hat eine Ursache. Also muß vor dem Anfänge was vorhergegangen sein. In Gott kann nichts vorgefallen sein, also was vorfiel, muß zur Welt gehören, also wäre denn doch kein Anfang der Welt. — Wolf will sich wohl herauswickeln, wenn er sagt: Vor dem Anfänge war gar keine Zeit. Aber denn war auch gar kein Anfang, denn dieser setzt allemal eine Zeit voraus. Man kann auch sagen, daß in der vor dem Anfange vorhergegangenen leeren Zeit das nothwendige höchste Wesen existirt hätte. Aber dann hätte es in dieser leeren Zeit nichts gewirkt, und zu der Zeit der Sehöpfung etwas gewürkt, folglich müßte mit ihm eine Veränderung vorgefallen sein. Und warum hat dieser Urheber die Welt nicht eher erschaffen? Lauter unerläßliche Schwierigkeiten. Nehme ich ferner an, daß die Welt in Ansehung des Raumes unendlich sei, so behaupte ich dadurch, daß die Welt ein Ganzes sei, welches durch alle mögliche Zusammensetzung doch nicht als ein Ganzes könne gedacht werden, und bei dem mithin die Zusammensetzung nie vollendet werde. Aber Totalitaet und unendliehe Zusammensetzung zugleich zu denken, ist ein Wiederspruch. Behaupte ich endlich, die Welt sei in Ansehung des Raumes endlich, so nehme ich außer dem Raum, den die Welt einnimmt, auch noch einen leeren Raum an (durch Erfahrung kann ich gar nicht ausmachen, daß die Welt endlich sei. Denn käme ich an die Grenze der Welt, so lehrte mich die Erfahrung doch nichts mehr, als daß ich nichts mehr bemerke, nicht aber, daß gar nichts mehi da ist. — )",
     "dehyphenated": 11,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-005",
     "kind": "text",
     "aa": 855,
     "aaEnd": 856,
     "pages": [
      {
       "p": 856,
       "i": 190
      }
     ],
     "text": "Warum ist sie aber nicht auch in dem leeren Raume ? Ist sie in Bewegung, oder in Ruhe? Sie kann sich in infinitum bewegen und verändern, ohne daß weder in der Welt, noch außer ihr im leeren Raume etwas verändert wird. Mithin geschähe da eine Veränderung, wobei doch nichts verändert würde. Wie absurd. Aus diesen Antinomien sehen wir deutlich, daß die Welt in Ansehung der Zeit und des Raumes weder finitum noch infinitum sein kann. Im Mundo Noumeno können wir uns wohl denken, daß die Welt endlich sei und aus einfachen Theilen bestehe, bei der Sinnen Welt aber nicht. Was ist sie denn? Die Sinnen Welt ist kein Ganzes von Dingen, sondern bloß eine Summe von Erscheinungen (die Sinnen Welt ist nichts anders, als die Aneinanderreihung meiner Vorstellungen von Dingen, die ich durch den Sinn bekomme nach den Beziehungen von Raum und Zeit, folglich liegt sie bloß in meinem Kopfe und ist nicht an sich, sondern in dem Progresse meiner Erfahrung von Dingen gegeben. Z. E. eine Rose ist nicht eher roth, als bis ich sie ansehe. Denn ihre Röthe beruht auf der Beschaffenheit der Augen. Zwar ist bei ihr die Ursache ihrer Röthe, aber daß sie wirklich roth ist, beruht auf meinem Auge. Man hat ia Menschen, die gar keine Farbe sehen, sondern alles wie im Kupferstiche als Licht und Schatten ansehen. — Dieser Progreß nun kann bei uns ins Unendliche fortgehen. Den Erscheinungen liegen Dinge zum Grunde, aber diese machen mundum Noumenon aus, und der ist freilich nach seinem Begriffe als ein Totum endlich. Der Progressus in infinitum ist ein infinitum potentiale aber nicht actuale, denn das letztere ist absurd. Daher folgt daraus noch nicht, daß die Welt unendlich sei.)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s10-006",
     "kind": "text",
     "aa": 856,
     "ms": [
      {
       "p": 164,
       "i": 0
      }
     ],
     "text": "Die Summe der Erscheinungen kann ich nun erfahren, und diese Erfahrung kann ins Unendliche fortgehen, oder einen progressus in infinitum haben, ohne daß ich dadurch bestimme, daß die Welt selbst unendlich sei. Denn die Ausdrücke: Es ist was unendlich, und es geht ins Unendliche fort, sind voneinander unterschieden. Sage ich, die Welt oder der Progreßus geht ins Unendliche fort, so kommt hier die Unendlichkeit nicht dem Gegenstände, sondern meinem Begrif von demselben zu. Denn alle Schätzung der Größe erkenne ich durchs Zählen. Dieses zeigt uns aber nicht die Größe der Dinge selbst, sondern das Verhältniß derselben zu meinem Schätzungs Vermögen. Es ist bloß eine Bedingung unseres Verstandes.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s10-007",
     "kind": "text",
     "aa": 856,
     "text": "Daher kann ich nicht gleich sagen: die Welt ist deshalb an sich selbst unendlich, sondern nur mein Progreßus in ihren Erscheinungen ist unendlich, und dieses ist es bloß für unsere Natur, denn für ein höheres Wesen würde die Welt doch endlich sein. Sind aber diese Summe von Erscheinungen nicht Dinge selbst?",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s10-008",
     "kind": "text",
     "aa": 857,
     "ms": [
      {
       "p": 165,
       "i": 1262
      }
     ],
     "text": "Nein. Denn die Sinnen Welt liegt bloß in meinen Sinnen. Diese aber zeigen uns nur die Art, wie sie von den Dingen afficirt werden, nicht aber diese selbst. Sie zeigen uns bloß die Erscheinungen der Dinge. Diese sind aber nicht die Dinge selbst. Sie liegen zwar den Erscheinungen zum Grunde, und ich kann daher wohl von den Erscheinungen auf die Wirklichkeit der Dinge, aber nicht von den Eigenschaften der Erscheinungen auf die Eigenschaften der Dinge selbst Schlüßen, z.E. die Farben des Regenbogens sind die bloße Erscheinung desselben, bloß Brechungen des Lichts, aber keine wirklichen Dinge. Die Wasser Tropfen aber, welche die Ursache dieser Brechungen, und folglich die Dinge an sich selbst sind, sehen wir nicht, sondern bloß ihre Erscheinung; und diese ist doch ganz was anderes, und von dieser können wir auch auf die Wassertropfen nicht im mindesten Schlüßen. Die itzige Sinnen Welt beruht also bloß auf unserem Sinne. Hätten wir andre Sinne, so würde uns die Welt ganz anders erscheinen; wir würden eine neue Welt sehen. Und wenn gleich die ganze Sinnen Welt einmal vergeht, so können doch die Dinge an sich selbst bleiben, nur die Erscheinung würde dann verändert. Vielleicht kann dies der Fall bei einer künftigen Welt sein, da wir da die Dinge wie sie an sich selbst sind, anschauen werden; das wäre eine intellectuelle Welt. Weil Gott die Ursache des mundi Noumeni und der Möglichkeit des Commercii in derselben ist, so würden wir, wenn wir ihren Quell anschauend erkennen könnten, auch dadurch die Dinge an sich selbst erkennen. Aber die Möglichkeit davon können wir nicht einsehen. Malebranche und andere bauten darauf, suchten aber schon hier Anschauungen Gottes zu haben, welches eine Schwärmerei ist, da Gott kein Gegenstand möglicher Erfahrung ist.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s10-009",
     "kind": "text",
     "aa": 857,
     "text": "Es giebt auch eine intelligibile Welt, die bloß in meinem Verstand außer aller möglichen Erfahrung existirt ; in der ist aber von Raum und Zeit gar nicht die Rede. —",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s10-010",
     "kind": "text",
     "aa": 857,
     "text": "Die Sinnen Welt existirt nur in den Sinnen und in ihrer Zusammensetzung der Erscheinungen. Diese ist aber ein progreßus. Nun fiägt es sich, ist der Progreßus der Zusammensetzung der Erscheinungen endlich oder unendlich. Dieser ist unendlich, d.h. er geht so fort, daß ich das Ende desselben nicht bestimmen kann. —",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-011",
     "kind": "text",
     "aa": 857,
     "aaEnd": 858,
     "pages": [
      {
       "p": 858,
       "i": 189
      }
     ],
     "text": "In den Erscheinungen giebts kein erstes, weil Raum und Zeit keine ersten Theile haben. Gesetzt, der Progreßus wäre endlich, so müßte er auch begrenzt sein. Die Sinnen Welt liegt bloß m der Erfahrung, demnach müßte ich die Grenze der Erscheinungen auch erfahren. Nun kann ich aber nicht das Ende erfahren, weil es nichts ist. Demnach ist der Progreßus unendlich.",
     "joined": [
      "layout"
     ],
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s10-012",
     "kind": "text",
     "aa": 858,
     "ms": [
      {
       "p": 166,
       "i": 928
      }
     ],
     "text": "So ist auch der Regreßus in der Zeit unendlich. Denn wollten wir den Anfang der Zeit wissen, so müßten wir eher als die Welt gewesen sein und würden doch mit zur Welt gehören. Der Anfang der Zeit ist das Dasein derselben, vor dem eine Zeit vorhergeht, wo sie nicht war. Ein Wiederspruch, denn da wird die Zeit vorausgesetzt. Und so sind denn alle die Wiedersprüche gehoben, wenn wir annehmen, daß in der Sinnen Welt ein Progreßus in infinitum in Ansehung des Raumes, und in Ansehung der Zeit ein Regreßus in infinitum statt finde, daß aber die Welt an sich weder endlich noch unendlich sei, weil wir von Dingen an sich selbst nichts wissen, auch aus ihren Erscheinungen nicht auf sie schließen können. Der Fehler in der Vorstellung, daß die Welt an sich selbst endlich oder unendlich ist, liegt darin, daß die Vernunft ein regulatives principium für ein const.itutives nahm. Die Welt ist daher nicht ein unendliches Compositum, sondern meine Composition von derselben ist unendlich.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-013",
     "kind": "text",
     "aa": 858,
     "text": "So ists auch mit der Decomposition oder mit der Frage, ob die Welt aus unendlichen Theilen bestehe oder nicht bestehe. Beide Begriffe sind falsch. Denn nehme ich z.E. an, daß eine Linie aus endlichen Theilen bestehe, so besteht sie aus einfachen Theilen. Dieses sind nun Punkte, Punkte sind Oerter, und die Linie bestände also aus Oertern. Demnach wären die Oerter eher als der Raum gedenkbar; das ist aber contradictorisch. (Die einfachen Theile im Raum sind Punkte. Diese aber machen nicht den Raum möglich, welches sein müßte, wenn der Raum aus Punkten bestünde, sondern der Raum macht sie möglich. Denke ich mir 2 Punkte, so kann ich sie mir nicht anders denken, als daß ein Raum dazwischen sey. Also besteht der Raum nicht aus Punkten und aus keinen einfachen Theilen. Denn hebe ich die Zusammensetzung auf, so bleibt mir nichts übrig. So ists beim Raum und so bei Erscheinungen.",
     "dehyphenated": 2,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s10-014",
     "kind": "text",
     "aa": 858,
     "text": "Nehme ich wieder im Gegentheil an, daß die Linie aus unendlichen Theilen bestehe, so muß ihre Zusammensetzung unendlich sein. Da ich aber eine Linie doch wirklich zusammensetzen kann, so ist meine Composition vollendet, aber endlich. Demnach ist hier die Composition endlich und unendlich, welches ein Wiederspruch ist.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s10-015",
     "kind": "text",
     "aa": 859,
     "text": "Hier ist also wieder das Noumenon mit dem Phaenomenon verwechselt. Denn die Welt, als Noumenon betrachtet, muß aus einfachen Theilen bestehen, weil sie sonst nicht zusammengesetzt werden kann. Aber als Phaenomenon ists anders. Die Dinge an sich selbst haben weder endliche noch unendliche Theile (wenigstens können wir dieses nicht wissen), sondern der Regreßus meiner Decomposition ist unendlich.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s10-016",
     "kind": "text",
     "aa": 859,
     "text": "Denn im Raum und Zeit giebts kein letztes. Sie sind quanta Continua. Polglich ist meine Decomposition derselben, also auch der übrigen, die in denselben sich befinden, unendlich. Diese Fragen der Com- und Decomposition in der Welt betreffen die Totalitaet der Synthesis der Erscheinungen, sofern sie ein Compositum ausmachen, und dies ist mathematische Synthesis.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-017",
     "kind": "text",
     "aa": 859,
     "ms": [
      {
       "p": 167,
       "i": 300
      }
     ],
     "text": "Jetzt kommen wir zu der dynamischen Synthesis in den Erscheinungen, insofern die Dinge als Ursachen und Folgen mit einander Zusammenhängen. Diese ist Deduction der Caußalitaet, und das Verhältnis zwischen Wirkungen und Ursache ist also ihr Obiect. Die mathematische Synthesis ist aber bloß Synthesis der Aggregation.",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s10-018",
     "kind": "text",
     "aa": 859,
     "text": "Wir reden itzt von lauter Reihen in der Verknüpfung unserer mannigfaltigen Vorstellungen. Eine Reihe ist denn, wenn eine Vorstellung die Bedingung einer andern ist. Der Fortgang in Raum und Zeit ist auch eine Reihe, aber eine Reihe von Erscheinungen. Gehe ich in der Reihe der Ursachen von den Bedingungen zum Bedingten, so ist das Progreßus, vom Bedingten zu den Bedingungen ist Regreßus. Der Progreßus in infinitum ist ein Infinitum potentiale und darf daher nicht als Totalitaet gedacht werden. Beim Raum aber stellen wir uns die Dinge auf einmal vor, und da muß Totalitaet sein. Die ganze Cosmologie hat mit dem Regreßu der Zeit zu thun. Denn die Vernunft fordert die Totalitaet der Bedingungen, nicht des Bedingten. Im Raum ist Pro- und Regreßus einerlei, denn da ist ieder Theil zugleich Bedingung und Bedingtes. Die Welt ist infinit in Ansehung der Ursachen, ist das constitutive Prmcipium der Vernunft. Das ist, in der Reihe der subordinirten Ursachen in der Welt, giebts keine erste. Behauptet man aber, daß es eine erste giebt, so behauptet man regreßum in defimtum. In der Welt laßen sich weder Regreßus in infinitum noch in fimtum denken, weder eine erste Ursache noch eine ins Unendliche geführte Caußalitaet. Das sind wieder Antinomien der Vernunft, wobei Noumenon und Phaenomenon wieder verwechselt wird.",
     "dehyphenated": 9,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-019",
     "kind": "text",
     "aa": 860,
     "ms": [
      {
       "p": 168,
       "i": 1150
      }
     ],
     "text": "Die Dinge an sich selbst sind bloß in einer Reihe, d.i. in der Verknüpfung zwischen Ursache und Wirkung möglich. Die Reihe kann aber nicht unendlich sein, sondern muß eine erste Ursache haben, welche keine Wirkung von einer andern mehr ist. Hier ist demnach Regreßus in finitum, das ist beim Mundo Noumenon. Hier ist kein unendlicher Regreßus möglich, denn da außer dieser unendlichen Reihe von Bedingungen keine Bedingung mehr statt fände, so muß eine der Bedingungen aus dieser Reihe nicht wieder ein Bedingtes, sondern erste Bedingung sein: weil, wenn sie nicht unbedingt wäre, sie zugleich bedingt und doch ohne Bedingung wäre; welches ein Wiederspruch ist. Der Regreßus ist rectilineus, wenn ich immer so fortgehe, oder curvilineus, wenn die letzte Folge zuerst Ursache von der ersten Ursache ist, und es so wie in einem Zirkel herum geht. Aber da ist noch immer eine erste Ursache. Das gilt eben so wenig als ein Zirkel im Beweise. Ein Commandant in einer flandrischen Vestung hatte bei einer Belagerung zwar Lebensmittel, aber kein Geld. Er verkaufte also die ersten an die Marquetender, diese gaben ihm Geld, das bezahlte er an die Soldaten, diese den Marquetendern, die wieder ihm etc. So lief eine Quantitaet Geld immer im Zirkel herum, so lange die Lebensmittel dauerten; diese waren doch die oberste Ursache.",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s10-020",
     "kind": "text",
     "aa": 860,
     "text": "Aber in der Erscheinung ist kein Regreßus in finitum. Denn da giebts kein erstes in der Zeit, d. i. das, vor dem kein anderes vorhergeht. Ist aber die Zeit in dem Regreßu unendlich, so muß auch die Reihe der Begebenheiten in der Zeit unendlich sein. Natur ist der Zusammenhang der Erscheinungen nach allgemeinen Gesetzen. Nun ist dieser Zusammenhang mancherlei, und dazu gehört auch die Reihe, z.E. die Inhaerenz vom Subject ist auch Verknüpfung, aber nicht Reihe; denn das Subject inhaerirt nicht wieder.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s10-021",
     "kind": "text",
     "aa": 860,
     "aaEnd": 861,
     "pages": [
      {
       "p": 861,
       "i": 648
      }
     ],
     "text": "In allen Erscheinungen der Begebenheit ist die Caußalitaet der Ursache der Begebenheit wieder eine Begebenheit. Wenn nun alle Ursachen wieder Ursachen haben, so ist in der Welt nichts als Natur. Da nun in der Sinnen Welt nichts als Begebenheit ist, so können wir bis ins Unendliche gehen; alles was wir erfahren werden, wird doch Begebenheit oder Effect sein. Denn ohne daß es Begebenheit wäre, würde es gar kein Object der Erfahrung sein. Darin besteht ia eben die Erfahrung, daß meine Wahrnehmungen durch die Verbindung von Caußa und caußato mit einander verknüpft werden. Ist diese nicht, so ist meine Wahrnehmung nicht viel mehr als ein Traum, der bloß für mich Privat Gültigkeit hat, — aber nie Erfahrung heißen kann. In der Welt bekommen wir also keine Begebenheit, die die erste wäre, zu erfahren, denn unser regreßus geht in infinitum. Es giebt aber keine wirklich infinite Reihe von Ursachen, sondern bloß ein regreßus ist infinit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-022",
     "kind": "text",
     "aa": 861,
     "text": "Wenn wir also in der Sinnen Welt nie auf die erste Ursache kommen, so muß doch nichts destoweniger eine solche sein, denn das wiederspräche unsrer Vernunft, keine erste Ursache zu denken. Da also die Sinnen Welt, d.i. alle Gegenstände möglicher Erfahrung, nichts als Begebenheitem sind und sein können, und daher immer eine Ursache zum Grunde legen; so kann die erste Ursache nicht in der Welt sein, sondern ist ein Ens extramundanum. Das ist also bloß ein regulatives, nicht constitutives Princip der Vernunft, zu sagen: die Erscheinungen und daher auch die Verknüpfung derselben nach Ursache und Wirkung gehen bis ins Unendliche. Denn sie sind nicht Dinge an sich selbst, und auch nicht eher wirklich, als bis wir in Regreßu dahin gekommen sind.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-023",
     "kind": "text",
     "aa": 861,
     "ms": [
      {
       "p": 169,
       "i": 363
      }
     ],
     "text": "Wenn eine Begebenheit durch eine Ursache, die keine Begebenheit ist, erfolgt, so heißt es von ihr sponte accidit. Sie geschieht zuerst, denn es geht vor ihr keine Begebenheit vorher. Freiheit ist das Vermögen, eine Reihe von Zuständen selbst anzufangen. Ist etwas Wirkung der Natur, so ist es schon Fortsetzung der Reihe von Zuständen; ists Wirkung der Freiheit, so ists ein neuer Zustand : das ist der Transcendentale Begriff von Freiheit. Z.E. Wenn ich aus Hypochondrie immer einsetze, so kommt das von meiner Natur her. Thue ich aber dies bloß, weil ichs will, so kommt dies von meiner Freiheit her. Nun ist die Frage: ist alles in der Welt Natur oder Freiheit? Wenn wir auf die Erscheinungen sehen, so hängen sie alle nach den Gesetzen der Natur zusammen. Alle Erscheinungen aber haben doch noch eine transcendentale Ursache, die wir nicht wissen, z. E.. der Körper ist zusammengesetzt, d. i. eine Erscheinung. Nun muß doch aber eine transcendentale Ursache dasein, die den Grund enthält, woraus diese Erscheinung entspringt. Diese Ursache ist uns unbekannt; weil sie aber nicht zur Sinnen Welt gehört, so kann sie auch nicht durch andere Ursachen in derselben bestimmt werden, folglich steht sie auch nicht unter den Gesetzen der Natur oder der Sinnen Welt und ist also totaliter frei.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-024",
     "kind": "text",
     "aa": 861,
     "aaEnd": 862,
     "pages": [
      {
       "p": 862,
       "i": 128
      }
     ],
     "text": "Also ist in der Welt auf der einen Seite Natur, auf der anderen Freiheit. Was geschieht, kann auch als solche Wirkung angesehen werden, die nicht in der Reihe der Erscheinungen, welche nach allgemeinen Gesetzen der Natur verknüpft sind, ihren Grund hat, sondern sponte nach Gesetzen der Freiheit geschieht, z.E. wenn ich etwas nach der Anleitung meines Verstandes thue, so ist dieses, sofern es aus dem Verstand entspringt, Freyheit; sofern es aber den Gesetzen der Natur gemäß geschieht (daß ich nehmlich das, was ich will, auch ausrichten kann), so ists Natur. Denn sie geschieht auch in der Welt und was in der Sinnen Welt geschieht, ist Natur. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s10-025",
     "kind": "text",
     "aa": 862,
     "text": "V ill ich eine Begebenheit in der Welt erklären, und ich leite dieses aus den allgemeinen Gesetzen der Natur her, so ist das eine natürliche Begebenheit. In der Welt als einer Reihe von Erscheinungen können und müßen wir keine Begebenheit ex spontaneitate erklären, bloß die Vernunft des Menschen ist davon ausgenommen. Die gehört nicht unter die Reihe der Erscheinungen. Sie ist unabhängig von den Gesetzen der Natur, und darin besteht eben die Freiheit. In Ansehung seiner Gemüths Kräfte gehört der Mensch wohl zum mundo Noumeno, denn er kann durch den Verstand die Dinge erkennen wie sie sind, als z. E. seine Moralische Verhältniße, Wahrheit etc., und in dieser Absicht sind seine Handlungen frei, als auch zum mundo Phaenomeno, insofern er durch seine Handlungen zur Kette der Erscheinungen gehört.",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-026",
     "kind": "text",
     "aa": 862,
     "ms": [
      {
       "p": 170,
       "i": 171,
       "raw": "no",
       "inferred": true
      }
     ],
     "text": "Wir kommen itzt zu den negativen Prinzipien in Ansehung der Welt. Sie sind die allgemeinen Principia der geformten Natur. Dieser negativen Principien sind 4 nach der Zahl der 4 Gattungen der Categorien : 1. geht auf die Qualitaet, 2 Quantitaet, 3 auf die Relation, die 4te auf die Modalitaet; also: 1 in mundo non datur saltus, 2 non datur hiatus, 3 non datui Casus, 4 non datur fatum. Diese beziehen sich alle auf den Nexum in der Welt.",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s10-027",
     "kind": "text",
     "aa": 862,
     "aaEnd": 863,
     "pages": [
      {
       "p": 863,
       "i": 570
      }
     ],
     "ms": [
      {
       "p": 171,
       "i": 2202
      }
     ],
     "text": "A In mundo non datur saltus. Saltus ist überhaupt eventus. (So beim Avancement in argumentando ; wo man aber die Zwischen Gründe darunter verstehen kann, da ists saltus legitimus. Hier ist saltus der unmittelbare Uebergang von einem quanto zu dem, was nicht quantum ist. Raum und Zeit sind quanta continua, das reale in denselben ist auch quantum. Denn das reale ist innerlich die Empfindungen, äußerlich, was denselben correspondirt. Empfindung aber hat einen Grad und eine unendliche Menge von Graden. Das einfache ist in Ansehung des Quanti ein Zero. Von dem bis zum Quantum sind unendlich viele Theile. Ein Ding bestellt also nicht aus endlichen Graden, auch nicht aus endlichen Theilen, denn das wäre infinituni datum, sondern der regreßus beim Theilen ist unendlich). Der saltus ist eine unmittelbare Folge zweener gar nicht mit einander verbundener Zustände, ohne die Zustände, die dazwischen sein, durchzugehen. Ein ieder Körper hat extensive Größe, sofern er im Raume und in der Zeit ist, und auch intensive Größe oder einen Grad von Realitaet. Keine Körper sind so nahe mit einander verwandt, daß der Unterschied derselben nicht noch kleiner sein könnte. Es ist kein Ueberschritt von einer Erscheinung, Qualitaet, zur andern, ohne einen Uebergang durch unendlich viele Zwischen Grade zwischen dem geringsten der Realitaet, den wir nur immer annehmen mögen, und dem Nichts, sind unendlich viele Zwischen Grade. In der Welt ist kein kleinstes der Erscheinung, weil im Raum und der Zeit kein kleinstes ist, sondern alles in einer unendlichen Continuitaet fortgeht. Dieser Satz könnte auch so ausgedrückt werden: Alles hängt zusammen nach dem lege continui, z.E. der Uebergang von einer Erscheinung ist nur möglich, wenn ich alle unendlichen Zwischen Grade durchlaufe. Keine Erscheinung kann also aus einfachem bestehen, weil vom Einfachen bis zur Materie ein plötzlicher Uebergang wäre zu etwas, was in genere davon unterschieden ist. Diesen Satz braucht man besonders im eigentlichen von Veränderungen der Zustände der Dinge, denn iede Veränderung hat ihren Grad. Kein Körper kann aus einem Zustand in einen anderen übergehen, ohne alle die Zwischen Zustände oder Zwischen Grade durchzulaufen, z.E. wenn sich ein Körper, der in Ruhe ist, auf einmal bewegt, so muß er alle die Zwischen Grade von der gänzlichen Ruhe bis zu dem Grad der Bewegung, den er itzt hat, durchlaufen. Dieses soll itzt bewiesen werden:",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-028",
     "kind": "text",
     "aa": 863,
     "aaEnd": 864,
     "pages": [
      {
       "p": 864,
       "i": 662
      }
     ],
     "text": "Gesetzt, ein Ding ist in dem Zustand A und will in den Zustand B übergehen. Dieses sind nur 2 verschiedene Zustände, mithin können sie auch nicht zugleich existiren, sondern ieder in einer besondern Zeit. Das Ding würde also in einem Augenblike in A und in dem andern in B sein. Zwischen 2 Augenbliken ist eine Zeit (sie mag so klein sein wie sie will), denn die Augenblike selbst sind nur Stellen in der Zeit. In dieser Zeit wird das Ding also in keinem von beiden Zuständen sein, auch in keinem andern Zustand, weil diese die unmittelbar aufeinander folgenden sind. Es bleibt also von ihm nichts mehr übrig, als daß es sich im Uebergange von einem Zustand zum andern befinde. Zwischen 2 Zuständen aber ist ein Grad und der Uebergang zu diesem Grad wird also ohne eine Reihe von Zwischen Graden geschehen. Demnach wird das Ding in seinem Uebergange von einem Zustand zum andern über die Zwischen Grade derselben durchgehen. Weil nun das Gegentheil von diesem ein saltus wäre, so ist der Satz dargethan: nihil fit in mundo per saltum.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-029",
     "kind": "text",
     "aa": 864,
     "text": "In der Welt verändert sich also alles nach Graden, denn die Ursachen wirken immer nach und nach. Zwischen den beiden Augenblicken konnte keine leere Zeit sein, sondern die Ursache mußte wirken, sonst wäre keine Wirkung entstanden. Und da muß die Ursache immer stärker gewirkt haben, bis die Wirkung den Grad erlangte, den sie erreichen sollte. Z.E. Wenn in meiner Seele dunkle Vorstellungen sind, so muß diese suchen, die Vorstellungen sich immer klarer zu machen, bis sie endlich den hinreichenden Grad der Klarheit erhalten.",
     "dehyphenated": 2,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s10-030",
     "kind": "text",
     "aa": 864,
     "text": "Weil alle Veränderungen also ohne Sprung, sondern in continuo fortgehen, so heißt dies auch lex continui.",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s10-031",
     "kind": "text",
     "aa": 864,
     "text": "Einen Triangel oder andre gradlinigte Figur kann ich durch motum continuum nicht beschreiben. Denn bei ieder Ecke ruhe ich einige Zeit; bei der Bewegung eines Körpers von A bis B ruhe ich einen Augenblick in B, und von B bis C ruhe ich einen Augenblick in B. Zwischen 2 Augenblicken ist eine Zeit, in der der Körper von seiner Bewegung aufhört, also ist hier motus interruptus und nicht continuus. Die krummen Linien haben hingegen einen motum continuum.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s10-032",
     "kind": "text",
     "aa": 864,
     "aaEnd": 865,
     "pages": [
      {
       "p": 865,
       "i": 971
      }
     ],
     "ms": [
      {
       "p": 172,
       "i": 0
      }
     ],
     "text": "In Ansehung der möglichen Vollständigkeit und Mannigfaltigkeit kann ich mir die Welt als unendlich vorstellen. Da aber dieses Materiale noch nicht die Vollkommenheit der Welt ausmacht, so gehört dazu die Verknüpfung der Substanzen unter einander. Endlich werden die Substanzen in dieser Welt ein vollständiges Ganze, dem nichts zu seiner Vollkommenheit fehlt. Nach dieser Verknüpfung und Einrichtung kann sie nicht vollständig sein, ob sie es wohl gleich nach einer anderen sein könnte. Dieses ist die vollständige Natur der Welt : Die formale Vollkommenheit derselben und gewiß die vornehmste, daß nehmlich alles in der schönsten Harmonie und Ordnung ist. Diese Natur Ordnung ist uns auch so heilig und unverbrüchlich, daß wir eine Welt, die ratione materiae noch so viel besser als diese Welt, ratione formae aber wieder schlechter wäre, gewiß verachten und unsrer Welt weit nachsetzen würden. Die Vollkommenheit der Welt kann man sich auch im Teleologischen Verstände (d. i. nach Zwecken oder practisch) denken. Wenn man alle mögliche Zwecke in einem Hauptzwecke vereinigen kann, so heißt sie summum bonum. — Perfectum und Optimum ist also von einander unterschieden. Hie gesamte Natur denkt man sich als ein Reich. Reich ist die Beziehung vieler auf Einen als summum Imperantem oder Gesetzgeber, und so ist es auch in der Natur. Was einmal unter gewissen Umständen geschieht, das geschieht unter denselben Umständen in Ewigkeit hindurch. Summum bonum ist demnach das vollkommenste Reich der Natur als das vollständigste System aller Zwecke.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-033",
     "kind": "text",
     "aa": 865,
     "text": "2tes Capitel",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s10-034",
     "kind": "text",
     "aa": 865,
     "text": "Von dem wechselseitigen Einfluß der Substanzen in der W eit.",
     "joined": [
      "inferred"
     ],
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s10-035",
     "kind": "text",
     "aa": 865,
     "aaEnd": 866,
     "pages": [
      {
       "p": 866,
       "i": 1548
      }
     ],
     "ms": [
      {
       "p": 173,
       "i": 991,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Hie Möglichkeit des nexus der Substanzen ist die Möglichkeit der formalen Vollkommenheit in der Welt. Hiese kann ich eben so wenig als die Möglichkeit der ersten Grund Kraft der Hinge einsehen. Henn iede Substanz existirt durch ihren Begriff für sich, scheint daher isolirt zu sein, und die andere Substanz gar nichts anzugehen. Man sagt zwar, es könne nicht anders sein, denn wenn ein Körper sich bewegt, so bewege er den Körper, der ihm im Wege ist, mit und wirke also auf ihn. Ha ist aber schon nexus im Raume und Zeit zum Grunde gelegt, und dann müßte man fragen, wie ist Raum und Zeit möglich? Hiese Präge ist nicht eher in die Philosophie gekommen, als wie man die Frage aufgeworfen hat, wie Seele als ein geistiges und Körper als ein ausgedehntes Wesen mit einander in commercio stehen könnten. Hieses müßte man in allgemeiner Hinsicht fragen: wie überhaupt Substanzen in commercio mit einander möglich sind? Leibnitz brachte dies zuerst auf die Bahn. Nach ihm ist diese Untersuchung vom Wolf (in dessen Philosophie der Satz zuerst steht) und Baumgarten aufs höchste getrieben worden. Jetzt aber, da man bloß Popularitaet sucht und die Gründlichkeit dabei gern fahren läßt, ist dieser Satz auch liegen geblieben, ob er gleich einer der wichtigsten in der ganzen Philosphie ist. (Influxus realis setzt eine Paßion voraus, die aber auch zugleich actio ist. Wie dieses möglich sei, kann ich aus dem Begriff der Substanz gar nicht herleiten. Im mundo Phaenomenon ist das aus der bloßen Existenz der Substanz im Raume möglich. — Henn der Raum verbindet sie alle. Im mundo Noumenon ists nicht anders möglich, als wenn man eine gemeinschaftliche Ursache annimmt, d. i. Gott, die das schon in die Natur der Substanz gelegt hat. Das ist Leibnitzens harmonia praestabilita. Der Influxus physicus ist qualitas occulta, denn durch das Wort wird nichts erkannt. Der Begriff vom Raum leistet im mundo sensibilis das, was die göttliche Allgegenwart im mundo Noumenon, und man kann ihn daher gleichsam ein Phaenomenon der göttlichen Allgegenwart nennen. Vielleicht hat uns Gott dadurch seine Allgegenwart sinnlich zu erkennen geben wollen. Newton nannte es das sensorium der göttlichen Allgegenwart. Vielleicht ist auch der Raum die einzige Sinnlichkeit, die allen vernünftigen Wesen außer Gott zukommt.) (NB. so wie hier Leibnitz’ System vorgestellet ist, hat er es vermuthlich auch verstanden, nur weil er sich dunkel ausdrückt, nahm man es in einem andern Sinn, welches falsch ist). Alle Verknüpfung der Substanzen unter einander läßt sich als nexus realis oder commercium substantiarum, wenn Substanzen wechselseitig in einander wirken, oder als nexus idealis, i. e. harmonia substantiarum absque commercio ansehen. Der Nexus idealis ist nicht Verknüpfung in den Dingen selbst, sondern bloß in der Idee des Zuschauers, der sie betrachtet, z.E. wenn ich die angenehmste Musique höre, so empfinde ich in meinem Gehör eine Harmonie aller der Instrumente. Diese Harmonie ist nun aber bloß in mir und in meinen Gedanken; aber die Instrumente haben nicht die geringste Harmonie mit einander. Nach diesem nexu ideali sind 2 Systeme erfunden, die das commercium der Substanzen unter einander erklären sollen. Dazu gehört 1.) das Cartesianische Systema harmoniae occasionaliter stabilitae oder Systema occasionalismi vel Aßistentiae. 2) Das Leibnitzsche Systema harmoniae praestabilitae. Beide sind Systemata externa stabilita. Denn da das commercium nie aus der Natur der Substanz ei’klärt werden kann, so leiten sie es von einem ente extramundo her.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-036",
     "kind": "text",
     "aa": 866,
     "aaEnd": 867,
     "pages": [
      {
       "p": 867,
       "i": 509
      }
     ],
     "ms": [
      {
       "p": 174,
       "i": 0
      }
     ],
     "text": "1. Das Systema Aßistentiae des Cartesius besteht darin, daß bei ieder Ursache und Wirkung oder bei iedem influxu der Substanzen Gott Caußa intermedia wäre und die Wirkungen den Ursachen harmonisch einrichtete. Z.E. bei Leibnitz ist die Gewohnheit, daß nur eine Uhr von selbst schlägt, die anderen von gewißen Leuten mit einem Klöppel angeschlagen werden. Auf solche Weise schlagen alle Uhren zusammen. Diese harmoniren nun jeder in meinem Ohre, aber diese Harmonie zwischen der ersten Uhr als Ursache und der andern als Wirkung kommt nicht von der ersten Uhr, sondern von caußis intermediis, den Leuten, die die Uhren anschlagen, her, und diese machen die Harmonie unter den Uhren. So ist es auch mit dem Nexu der Substanzen in der Welt. Cartes hatte dieses System zuerst dazu erfunden, um das Commercium der Seele mit dem Körper daraus herzuleiten. Denn weil er sich nicht vorstellen konnte, wie die Seele unmittelbar auf den Körper wirken könnte, so nahm er dabei eine Caußam intermediam an, die bei ieder Gelegenheit den Körper nach dem Willen der Seele regierte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-037",
     "kind": "text",
     "aa": 867,
     "ms": [
      {
       "p": 175,
       "i": 1412,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "2 Leibnitzens harmonia praestabilita. Ist mit ienem fast einerlei. Beide nehmen caußam intermediam extramundanam an. Cartes aber nimmt sie bei ieder Veränderung der Substanz an. Leibnitz hingegen statuirte, daß das höchste Wesen die Dinge von Ewigkeit schon so eingerichtet hätte, daß sie mit einander harmonirten, und eines Veränderung also das Werk des andern zu sein scheine, z.E. wenn Uhren, die alle von selbst durch ein Uhrwerk getrieben werden, zu gleicher Zeit schlagen, so kommt diese Harmonie nicht von ihnen her, sondern ist praestabilirt. Der Urheber derselben hat sie so eingerichtet. Diese beiden Systeme aber beruhen auf dem nexus idealis. Wenn aber die Substanzen in keinem andern nexu ständen, so wäre keine Welt, sondern bloß ein ideales Ganze in Gedanken. Da wäre ia iede Substanz vernünftig und isolirt, wenn sie selbst nichts wirken möchte. Mit Recht hat man dagegen eingeworfen, daß dann in Absicht der Seele die Körper ganz überflüßig wären. Denn Gott hätte auch in der Seele die Vorstellungen vom Körper, entweder occasionaliter oder praestabiliter, entstehen lassen können, ohne daß wirkliche Körper nöthig gewesen wären. Diese Vorstellungen konnten ia immer mit der Seele harmoniren. Alles dieses läuft, wie man sieht, auf Idealismus hinaus. Hernach kann man auch sagen, daß ratione corporum die Sachen überflüßig wären. Denn da die Seelen nichts wirken, so könnte ia Gott auch ohne dieselben alle Veränderungen m den Körpern wirken. Ferner wäre auch ein Körper gegen den andern oder in Ansehung des andern überflüßig. Jeder könnte isolirt sein. Man sieht aus diesem allen, daß diese Systeme wie Geschwister sind.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s10-038",
     "kind": "text",
     "aa": 867,
     "aaEnd": 868,
     "pages": [
      {
       "p": 868,
       "i": 330
      }
     ],
     "text": "Es giebt aber noch einen 2ten Nexum in der Welt, nehmlich den Nexus realis oder den Influxus, wenn Substanzen wechselweise per actionem et reactionem aufeinander einfließen. Dieses ist nun au zwiefache Weise möglich : entweder als originarius oder als Defectivus, Jener ist der Influxus derienigen Substanzen, die bloß durch ihre Existenz schon vermögend sind, in einander zu wirken. Nun ist die Frage: können Substanzen originarie im commercio sein? Nein, denn Substantiae originariae sind per se existentes, also unabhängig oder isolirt. Weil sie denn aber so existiren möchten, daß keine Bestimmung ihres Daseins von etwas anderem abhinge, so würden sie auch nicht im commercio mit einander sein. Ein Totum originarium von Substanzen ist daher unmöglich. 2 Derivationes, wenn Substanzen so existiren, daß die Möglichkeit ihres Commercii von einer 3ten Substanz abhängt. Sind Substanzen im commercio, so sind sie von einander abhängig, mithin zufällig und caußatum alterius. Die caußa aber muß ein ens originarium sein. Es können aber nicht viele entia originaria die Ursache der Welt und ihres commercii sein. Denn da iedes ens originarium isolirt wäre, so müßte auch sein Werk von dem Werk des andern völlig isolirt sein. Das finden wir aber in der Welt nicht, denn da ist alles in durchgängigem nexu. Demnach muß die Welt auch nur eine Ursache haben. Der Nexus der Substanzen ist deshalb nur als derivativ zu gedenken möglich, aber dabei nicht als ideal, sondern zugleich als real. Dieser Beweis gilt aber nur von dem Mundus Noumenon. In dem Mundus Phaenomenon brauchen wir das nicht, denn es ist nichts an sich selbst. Hier ist alles im commercio vermöge des Raums. Die Systeme der occasionellen und vorherbestimmten Harmonie finden nur in der Sinnen Welt statt. Denn hier ist die Frage, ob Gott im Anfänge oder in der Fortdauer die Harmonie so eingerichtet hat, und dies setzt Zeit voraus. Influxus physicus heißt craßiori sensu originarie, insofern Gott itzt nichts dabei wirkt; sensu subtiliori oder derivatus, indem von Gott als dem ante originario doch die Möglichkeit des Influxus herkommt. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s10-039",
     "kind": "text",
     "aa": 868,
     "text": "Der Influxus physicus geschieht nach allgemeinen Gesetzen, die beiden Systeme des nexus idealis aber nicht. —",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s10-040",
     "kind": "text",
     "aa": 868,
     "ms": [
      {
       "p": 176,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "3. Capitel. Vom Natuerlichen.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-041",
     "kind": "text",
     "aa": 868,
     "aaEnd": 869,
     "pages": [
      {
       "p": 869,
       "i": 448
      }
     ],
     "text": "Natur kann im doppelten Verstände genommen werden: 1 adjective als die besondere Natur iedes Dinges, 2 Substantive der Welt nach allgemeinen Principien und Gesetzen, das ist die gesamte Natur oder die Sinnen Welt nach ihrer Verbindung (natura universa). In sensu substantivo ist nur eine Natur, in sensu adjectivo so viel Dinge, so viel Naturen. Natürlich ist das, was aus der Natur eines Dinges erklärt werden kann, oder eine Begebenheit ist natürlieh, wenn die Ursache derselben im Welt Ganzen angetroffen wird. Sie kann nun eigentlich natürlich sein, wie sie aus der Natur des Dinges, mit dem sie sich zuträgt, erklärt werden kann, oder sie ist auch respective natürlich, wenn der Grund derselben in einem andern Dinge liegt. So ist auch die Kunst natürlich, indem sie aus der Natur irgend eines Dinges entspringt. Absolute natürlich ist das, dessen Ursache in der gesammten Natur angetroffen wird. Dieses heißt auch schlechthin natürlich (Lauf der Natur ist succeßion der Reihe der Begebenheiten), oder der Lauf der Natur ist der Zusammenhang der Begebenheiten, in sofern er mit Erfahrung verknüpft ist. Nach dem Lauf der Natur erfahre ich, was geschieht. Die Ordnung der Natur ist der Grund dieser Zusammenknüpfung der Erscheinungen. — Lauf der Natur zeigt die Regelmäßigkeit der Erfahrung, Ordnung der Natur die Noth Wendigkeit derselben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s10-042",
     "kind": "text",
     "aa": 869,
     "text": "Eine Begebenheit gehört zum Lauf der Natur, sofern sie ein Theil der Veränderung ist, die in der Welt entspringen. Die Ordnung in der Natur erregt in uns allezeit Bewunderung und Hochachtung. Woher kommt das aber? Daher, weil wir ohne Natur keine Gegenstände des Verstandes hätten. Ohne Natur ist nichts ein Object des Verstandes, da der Verstand nichts ohne Regeln erkennt. Nun würden wir uns aber keine Regeln machen können, wenn in der Welt alles erst wie ohne die geringste Ordnung geschähe. Wir würden alsdenn entweder gar keinen oder unnützen Verstand haben. Da also auf der Natur der Werth unseres Verstandes, dieser Adel unserer Seele, der uns zur Menschheit erhebt, beruht, so halten wir diese Natur Ordnung gleichsam für was Heiliges, und scheuen uns, sie zu verletzen; wenn sie auch gleich zu unserem Schaden wirken möchte, z.E. wenn eine Mauer vor Alter umfällt und einen Menschen erschlägt, so werden wir uns wohl darüber nicht freuen. Weil dies aber nach der Ordnung der Natur geschieht, so wünschen wir zwar, daß der Mensch zu der Zeit nicht vorbei gegangen wäre, aber ungereimt finden wir es, zu wünschen, daß die Mauer langer gestanden hätte, als sie nach den Gesetzen der Natur stehen konnte. —",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s10-043",
     "kind": "text",
     "aa": 869,
     "ms": [
      {
       "p": 177,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "4. Capitel. Vom Uebernatuerlichen und der Möglichkeit der Wunder.",
     "ocrConf": 46
    },
    {
     "id": "metaphysik-mrongovius-s10-044",
     "kind": "text",
     "aa": 869,
     "aaEnd": 871,
     "pages": [
      {
       "p": 870,
       "i": 128
      },
      {
       "p": 871,
       "i": 2659
      }
     ],
     "ms": [
      {
       "p": 178,
       "i": 2373,
       "raw": "rn",
       "inferred": true
      }
     ],
     "text": "Uebernatürlich, supernaturale, ist das, was aus der gesamten Natur nicht erklärt werden kann. Wiedernatürlich, praeternaturale, ist das, was der besonderen Natur eines Dinges zuwieder ist, aber aus der Natur anderer Dinge oder aus der gesamten Natur doch erkannt werden kann, z.E. daß ein Mensch nicht schaffen kann, kommt zwar nicht aus seiner Natur, aber doch aus der Natur anderer Dinge her, die Ursache davon sind. Nicht iedes supernaturale ist ein Wunder, sondern das, was wieder die Ordnung der Natur in der Welt geschieht. Was wieder die Ordnung der Natur außer der Welt geschieht, sind keine Wunder, z.E. die Schöpfung ist kein Wunder. Die Wunder sind entweder miracula rigorosa oder Comparativa; iene sind solche, die aus der gesamten Natur nicht erklärt werden können und caußam extra mundanam zum Urheber haben, und weil hier die Natur Ordnung unterbrochen wird, so kann das nur der Urheber, nehmlich Gott, thun. — Die miracula rigorosa sind wieder entweder occasionalia oder praestabilita ; ienes ist das, welches Gott immediate bei ieder Gelegenheit wirkt und dadurch die Natur Ordnung unterbricht. Dieses ist das eigentliche Wunder. 2 Miraculum praestabilitum ist, was Gott mediate durch Natur Ursachen wirkt, die aber von Gott zu besondern Absichten gebraucht werden, oder was Gott schon von Anfang bestimmt und zu dessen Vollziehung Natur Ursachen braucht. Dieses heißt auch eine Natur Wirkung, aber es ist ein eben solches Wunder als das occasionelle. Denn es hat zwar zur nächsten Ursache eine Natur Ursache, diese aber liegt nicht in den Gesetzen der Natur, sondern in der Vorherbestimmung Gottes, der sie eben zu der Zeit und unter den Umständen wirken wollte. Mira culum occasionale heißt auch materiale, und pi aestabilitum, formale. (Miraculum materiale ist das, wo Ursache und Caußalitaet der Wunder außerhalb der Welt ist, oder wo Gott etwas neues durch seine bloße Macht hervorbringt. Formale, — wo die immediate Ursache zwar in der Natur liegt, die Caußalitaet davon aber in Gott ist. Beides sind gleiche Wunder, denn auf die Form kommt es hier bloß an; Forma dat eße rei). Man erklärt die Miracula praestabilita für Natur Wunder, denn man sagt: Gott wirkt sie doch nach der Natur, zwar nicht nach den allgemeinen, aber doch besonderen Gesetzen. Bei diesen muß man aber doch wieder eine besondere göttliche Direction annehmen, und also ist diese Ausfluß Gottes. Es ist eben so unnatürlich als das occasionelle. So glaubt z.E. Wfiiston, die Siindfluth natürlich Erklären zu können, wenn er annimmt, es sei ein Comet gekommen, hätte seinen wäßrigen Schweif ausgeschüttet und hiedurch geschähe es. Hierauf habe er das Wasser wieder an sich gezogen. Aber das ist doch Miracel. Denn es ist doch kein Gesetz der Natur, daß ein Comet die Erde bloß denn und darum, weil ihre Bewohner gottlos wären, überschwemmen sollte. (So glaubte auch Teichmayer, was Großes erfunden zu haben, da er zeigte, daß, wenn eine Eis Wolke vor die Sonne träte, ihr Schatten denn um so viel zurücktreten möchte, und daß so das Wunder mit Ahas Sonnen Zeiger leicht erklärt wäre). Die Miracula praestabilita sind noch größere Wunder, denn sie sind noch künstlicher ausgedacht. Man mag aber gern die Wunder alle zu praestabilirten machen, weil man dadurch seiner eigenen Vernunft ein Compliment macht, daß man es so künstlich hat aussinnen können.) Indessen glaubt man doch, in der Erklärung eines Wunders als miraculum praestabilitum mehr Vernunft zu finden. Es kommt nicht daher, daß wir die Möglichkeit eines Wunders überhaupt nicht glauben, sondern daß bei der Annehmung eines Wunders, welches occasionell ist, aller unser Verstand in Erklärung desselben aufhört. Und wenn man meint, daß Gott diese Wunder vorher bestimmt habe, daß sie durch gewöhnliche Natur Ursachen geschehen sollten, so urtheilt man von Gott anthropopathisch, denn so wie es den Menschen mehr Mühe kostet, etwas nach und nach zu thun als auf einmal, so glaubt man, koste es Gott auch mehr Mühe, bei ieder Gelegenheit Wunder zu thun, als wenn er es bei der Schöpfung schon so eingerichtet hat.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s10-045",
     "kind": "text",
     "aa": 871,
     "aaEnd": 873,
     "pages": [
      {
       "p": 872,
       "i": 1082
      },
      {
       "p": 873,
       "i": 3588
      }
     ],
     "ms": [
      {
       "p": 179,
       "i": 767
      },
      {
       "p": 180,
       "i": 3220,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Indeßen ist es doch immer gut, wenn man Wunder natürlich zu erklären sucht, — wenigstens besser, als wenn man es zum Wunder zu machen sucht. Nun frägt es sich : Wie sind überhaupt die Wunder möglich? Ja, Effectus testatur de caußa. Da nun eine caußa extramundana die Ursache von der Ordnung der Natur ist, so kann sie auch dieselbe aufheben. Keine Welt kann ohne Mängel, ohne gewisse Negationen und Einschränkungen gedacht werden, und Wunder sind also, um den Defect der Natur zu ergänzen, auch in der besten Welt möglich und nach dem Begriff von Gottes Güte und Wahrheit gar wahrscheinlich. Nun frägt es sich aber noch: Wie ist die Vernunft befugt, Wunder anzunehmen? Denn im allgemeinen mäßen wir gestehen, daß Wunder möglich sind, aber bei besonderen Fällen müßen wir uns immer sträuben, sie anzunehmen, denn sie streiten wieder die subjectiven Maximen unserer Vernunft, welche befehlen, nur das anzunehmen, wobei ein Vernunftgebrauch statt findet.) 1 Jedes Wunder setzt Ordnung der Natur voraus. Denn wäre diese nicht, so wäre gar kein Wunder. Es wäre alles Wunder. Da dies nun aber nicht ist, so sehen wir, daß Wunder bloß eine Ausnahme von der Ordnung der Natur sind. Ausnahmen aber können nicht häufig sein; sonst hören alle Regeln und ihre Gewißheit auf. Wunder können also auch nicht häufig sein. Selbst der Begriff des Worts unterscheidet es vom Alltäglichen. 2. Wenn wir die Natur als eine vor sich selbst bestehende Ursache der Dinge, und Gott also nicht als den Schöpfer, sondern als Architect und Regierer derselben ansehen, so könnten wir häufigere Wunder annehmen. Denn da die Materie nicht von Gott herkäme, so könnte sie auch viele Mängel haben, die erst nach und nach verbeßert werden könnten. Da aber Gott Schöpfer der Welt ist, so wird er sie doch wol unverbesserlich erschaffen haben. Also können in solcher Welt Wunder äußerst selten sein. Es ist also auch falsch, wenn man sagt, daß derienige, der Wunder leugnet, die Natur für eine an sich bestehende Ursache erkennt. Es findet hier vielmehr das Gegentheil statt. Denn dieses thut er bloß darum, weil er sich Gott als den Schöpfer der Welt, und nicht bloß als den Architect derselben vorstellt. Da er sich aber Gott als die Ursache der Ordnung der Natur vorstellt, so glaubt er deswegen auch, daß alle Begebenheiten in der Welt von Gott herkommen. Er nimmt also bloß an Gott als caußa mediata aller Begebenheiten; dahingegen derienige, der Wunder statuirt, bei derselben Gott als caußa immediata ansieht. Vielmehr kann derienige, der die Natur als eine von Gott unabhängige Ursache ansieht, eben destoweniger Wunder glauben, indem er sich vorstellt und vorstellen kann, daß die Natur mit Gott bisweilen in Collision komme und Gott, weil er mächtiger als sie ist, Ausnahmen von ihrer Regel mache. Ja, er kann dann Wunder wünschen, weil er es von einer blind laufenden Natur nicht erwarten kann, daß sie die Vollkommenheit recht erreichen werde. Der nun wieder überall Wunder annimmt, indem er dadurch Götter Macht zu verherrlichen glaubt, thut gerade das Gegentheil. Denn er behauptet dabei die Unvollständigkeit und Unzulänglichkeit der Natur Ordnung, deren Mängel durch Wunder ergänzt werden. Da aber die Natur Ordnung Gottes Werk ist, so sagt er dadurch, daß Gott ein unvollkommenes Werk gemacht habe, und hiebei leidet Gottes Weisheit und Allmacht gar sehr. Aus allem dem angeführten sehen wir, daß Wunder, wenn sie ie in der Welt sind, nur äußerst selten sich zutragen müßen. Nun wollen wir auch sehen, durch welche Gründe denn unsre Vernunft bewogen werden kann, Wunder anzunehmen. (Wenn die Ursache einer Begebenheit nicht in der Natur angetroffen wird, so ists ein hiatus. Die Folgen des daraus entspringenden haben mit dem vorigen keinen Zusammenhang; um aber das zu wissen, muß ich alle Ursachen in der Welt kennen, um zu wissen, daß diese nicht in der Welt ist. Jeder Gegenstand, der mit anderen verknüpft ist, ist Erfahrung. Von Wundern wird geredet als Gegenständen der Erfahrung. Auf der bloßen Wahrnehmung beruht nicht die Erkenntniß der Wunder. Die Wunder setzen Natur voraus und sind bloße Ausnahmen davon, müssen also nicht häufig sein, sonst heben sie die Ordnung der Natur auf und wären keine Wunder.) Historische Zeugniße können sie nicht beweisen, sondern es müssen auch moralische hinzukommen. Um also die Glaubwürdigkeit eines Wunders darzuthun, muß man eine Natur Ordnung des menschlichen Willens voraussetzen, daß es unmöglich sei, zu lügen. Dieses nützt aber nichts. Denn hier muß ich glauben, etwas sei wieder die Ordnung der Natur wegen des Zeugnißes nach der Ordnung der Natur. Aber kann die moralische Ordnung der Natur nicht eben so gut aufgehoben werden? Kann der Mensch nicht lügen und ist pia fraus so was unerhörtes? Ferner ist es auch kein Wunder, sich zu betrügen. Denn es gehört fast wieder ein Wunder dazu, Natur Begebenheiten von Wundern zu unterscheiden und allemal zu wissen, was ein Wunder ist. Historische und moralische Zeugnisse können uns also noch nicht vom Dasein der Wunder überzeugen. Es muß also noch hinzukommen dieses, daß die Vernunft einsieht, es sei eine Begebenheit, die zur Vollkommenheit der Welt unentbehrlich und doch nach der Ordnung der Natur unmöglich sei. Diese Begebenheit kann aber nicht zur Vollkommenheit der Natur etwas beitragen, denn diese ist von Gott unverbesserlich gemacht; sondern sie kann bloß zur Beförderung unserer moralischen Welt beitragen. Diese hängt von der Ordnung der Natur gar nicht ab. Wenn also Wunder zur Bestätigung einer Lehre geschehen, die zu unserer moralischen Vollkommenheit gereicht, so sind sie glaubwürdig. Denn wir sehen das gleich ein, daß sie Gott beim Anfänge der Welt in die Natur nicht legen konnte und doch nothwendig thun mußte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 15,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s10-046",
     "kind": "text",
     "aa": 873,
     "aaEnd": 874,
     "pages": [
      {
       "p": 874,
       "i": 311
      }
     ],
     "ms": [
      {
       "p": 181,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Das ist nun der einzige Fall, wo wir Wunder annehmen können und der unsrer Vernunft und der Weisheit Gottes nicht zuwieder ist. Denn den kleinen Verlust, der durch die Unterbrechung der Naturordnung angerichtet wird, sieht man hier reichlich ersetz durch den großen Vortheil, den die Menschheit davon hat. Auch dann wären Wunder möglich, wenn die Hypothese wahr wäre, daß die höchste Vollkommenheit dann erreicht werde, wenn die Menschen zu einer gewissen Gemeinschaft mit dem höchsten Wesen bestimmt wären. —",
     "joined": [
      "layout"
     ],
     "ocrConf": 72
    },
    {
     "id": "metaphysik-mrongovius-s10-047",
     "kind": "text",
     "aa": 874,
     "aaEnd": 875,
     "pages": [
      {
       "p": 875,
       "i": 2265
      }
     ],
     "ms": [
      {
       "p": 182,
       "i": 2193
      }
     ],
     "text": "2 Miracula comparativa. Dieses sind Begebenheiten, die von höhern Wesen oder unbekannten Kräften der Natur geschehen sollten. Das ist aber gar nichts. Denn wenn ich die Ursache nicht kenne, so kann ich auch nichts aus ihr folgern. Aber nicht bloß die Unbekanntheit der Ursache, sondern auch ihres Wirkungs Gesetzes gehören zum miraculo Comparativo. Natur Ursachen, deren Wirkungs Gesetz doch bekannt ist, wenn auch nicht die Ursachen, sind nicht miracula comparativa, und das ist der Kall bei den qualitatibus occultis. Sie sind zwar unbekannt, aber ihre Wirkungs Gesetze doch nicht; also sind ihre Wirkungen auch nicht miracula comparativa. Bei höheren Wesen hingegen, denen wir Miracula comparativa zu schreiben, z.E. bei Teufeln, kennen wir weder sie noch ihre Wirkungs Gesetze. Denn ist es aber ganz vernunftwiedrig, sie als Ursache mancher Begebenheiten anzunehmen. Denn da wir keine Regeln von ihren Wirkungen anzugeben wissen, so können wir ia nicht bestimmen, was von ihnen herkomme oder nicht. Also nehmen wir sie bloß willkiihrlich an. An miracula comparativa glauben, wäre wohl im Munde, im Herzen aber nicht. Viele Menschen glauben alles, was sie nicht einsehen; sogleich kennen sie Übernatürliches, weil sie ihre Vernunft nicht gebrauchen wollen. Wer aber an das Natürliche glaubt, kann von Gott eher das Übernatürliche erwarten als der Gegner. Aber die Menschen, die das Übernatürliche so sehr lieben, haben ia auch einen besonderen Grund. Sie thuns nehmlich aus Stolz. Denn es giebt zweierlei Wege zum Hochmuth: entweder über andere sich zu erheben, oder andere zu sich herab zu ziehen. Das letzte ist das leichteste. Da nun diese Leute nicht so viel Vernunft anwenden wollen oder gar nicht einmal haben, die Natur Ursachen solcher Begebenheiten einzusehen, so beneiden sie doch diese andern und wollen sie auch zu solchen Dummköpfen machen als sie selbst sind. Daher suchen sie ihnen in einer versteckten frommen Sprache den Glauben ans Übernatürliche anzutragen. Woher kommts doch, daß man überall nicht gleich jetzige, sondern nur alte Wunder nennt? Nicht daher, weil itzt keine Wunder mehr nöthig sind, denn das wird man nie beweisen können, sondern darum: die alten Wunder und ihre Folgen sind schon unter gewisse Regeln gebracht. Bei den neuen Wundem aber kennen wir nicht die Folgen, die daraus entspringen können. Sie könnten in unserer Vernunft Moralitaet und alles umstoßen, und daher nehmen wir sie nicht sogleich an.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 82
    }
   ]
  },
  {
   "id": "s11",
   "title": "Dritter Theil Von der Psychologie Einleitung",
   "titleSrc": "heading",
   "headings": [
    "Dritter Theil",
    "Von der Psychologie",
    "Einleitung"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s11-001",
     "kind": "heading",
     "aa": 875,
     "text": "Dritter Theil Von der Psychologie Einleitung"
    },
    {
     "id": "metaphysik-mrongovius-s11-002",
     "kind": "text",
     "aa": 875,
     "text": "Alle Erkenntniß von Dingen ist zwiefach. Entweder können sie durch Erfahrung gegeben werden oder nicht. Beide Arten von Erkenntniß gehören zur reinen Metaphysik oder transcendental Philosophie. Die Transcendental Philosophie sollte bloß die Ontologie sein, aber die Erkenntnisse sind 2fach in derselben, wie wir schon angeführt haben. Die Gegenstände der Ontologie können in der Erfahrung gegeben werden und sind Verstandes Erkenntnisse. Es giebt aber auch Vernunft Erkenntnisse, die nicht in der Erfahrung gegeben werden können. Diese entspringen aus den Verstandes Erkenntnissen, welche aber die Vernunft so erweitert, daß sie nie in der Erfahrung gegeben werden können. Sie thut dieses dadurch, daß sie ihnen absolute Totalitaet giebt. Solche Vernunft Ideen giebts zwo: 1. die absolute Totalitaet vieler Dinge, d. i. das absolute Welt Ganze, 2. die absolute Totalitaet eines Dinges, d. i. ens realißimum. Diese werden nun in der Cosmologie und Theologie abgehandelt, daher sollten diese eigentlich zur Ontologie gehören, und diese 3. Ontologie, Cosmologie und Theologie machen Metaphysicam puram aus. In der Metaphysica pura kommen die Anschauungen der Sinnlichkeit als Raum und Zeit; die Categorien des Verstandes und die Vernunft Ideen vor. Der zweite Theil der Metaphysic ist metaphysica applicata, deren Gegenstände in der Erfahrung sind, die aber doch auf principien a priori beruhen. Das ist die Metaphysic der Natur, und zwar 1. der körperlichen Natur oder Gegenstände des äußern Sinnes, das ist physica generalis, und 2. denkende Natur, oder der Gegenstände des innern Sinnes, d. i. Psychologia rationale. Beide machen metaphysicam applicatam aus. Die Physica generalis kommt in der Cosmologie vor, die Psychologia rationahs aber wird folgen. . 1",
     "dehyphenated": 9,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s11-003",
     "kind": "text",
     "aa": 875,
     "aaEnd": 876,
     "pages": [
      {
       "p": 876,
       "i": 125
      }
     ],
     "text": "Diesen beiden Wissenschaften sind die empirische I hysic und Psychologie entgegengesetzt, die ihre Principien bloß aus der Erfahrung, und nicht a priori schöpfen. Diese gehören deswegen aber gar nicht in die Metaphysic. Die empirische Physic macht auch eine besondere Wissenschaft aus; die empirische Psychologie ist, da sie erst vor kurzem zu bearbeiten angefangen worden, noch nicht so vollständig, daß sie eine besondre Wissenschaft abgeben könnte. Daher ist sie, weil man sie mit keiner andern Wissenschaft zu paaren wußte, an die Psychologia rationalis als Fremdling und Gast angeschlossen, indem sie mit dieser noch am verwandtesten ist. Wir richten uns nach dem Autor, und wollen also die empirische Psychologie zuerst vornehmen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s11-004",
     "kind": "text",
     "aa": 876,
     "ms": [
      {
       "p": 183,
       "i": 0,
       "raw": "!83",
       "inferred": true
      }
     ],
     "text": "Erster Abschnitt",
     "ocrConf": 69
    },
    {
     "id": "metaphysik-mrongovius-s11-005",
     "kind": "text",
     "aa": 876,
     "text": "Von der empirischen Psychologie.",
     "ocrConf": 82
    }
   ]
  },
  {
   "id": "s12",
   "title": "Erstes Capitel Von dem Dasein der Seele",
   "titleSrc": "heading",
   "headings": [
    "Erstes Capitel",
    "Von dem Dasein der Seele"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s12-001",
     "kind": "heading",
     "aa": 876,
     "text": "Erstes Capitel Von dem Dasein der Seele"
    },
    {
     "id": "metaphysik-mrongovius-s12-002",
     "kind": "text",
     "aa": 876,
     "text": "Die Seele ist der Gegenstand des innern Sinnes. — Wer sie also läugnet, läugnet auch den innern Sinn. (Seele nennt man TCveujaa, aber das heißt ein ganz freier und reiner Geist, eigentlich gewöhnlicher heißt sie ^uxf), welches ein Papillon, Schmetterling, bedeutet und sehr passend ist, indem es ein herliches Symbol von der im Sterben vergehenden Entladung derselben von der Bürde des Körpers und Hinübergange in ein beßeres Leben abgiebt. (Das Wort Seele bedeutet eigentlich das Inwendige einer Sache, z.E. bei einer Jeder, Canone.) Meine Gedanken sind nicht Gegenstand der äußern Sinne, denn sie haben ia keine Figur. An mir habe ich den Körper als einen Gegenstand äußerer Sinne. Dieser ist aber von der Seele unterschieden. Seine Bestimmungen sind anders, denn die Form seiner Anschauung ist anders. Die Form der Anschauung beim Körper ist der Raum, bei der Seele Zeit, denn Gedanken sind nicht im Raum.",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s12-003",
     "kind": "text",
     "aa": 876,
     "aaEnd": 877,
     "pages": [
      {
       "p": 877,
       "i": 460
      }
     ],
     "ms": [
      {
       "p": 184,
       "i": 1329
      }
     ],
     "text": "Hier betrachten wir bloß die Seele als das Object des innern Sinnes, und der beruht aut unserer eigenen Erfahrung, die keiner leugnen kann. Übrigens bekümmern wir uns hier nicht um die Frage, ob die Seele materiell ist oder nicht, weil wir dies aus der Erfahrung nicht beweisen können, und es also in die Psychologia rationalis gehört. Die Seele ist bloß unser Ich, nicht der Körper, aber Körper und Seele heißen zusammen als menschliches Bewußtsein auch Ich. In der empirischen Psychologie betrachten wir unser Ich als Seele und als Mensch. Den Körper betrachten wir aber eines Theils als Organ der Seele, der von ihr abhängt, anderentheils aber als Behausung, da die Seele auch oft von ihm abhängt. In der empirischen Psychologie wird also eine kurze Anthropologie vorgetragen. Wir nehmen das als eine unbezweifelte Erfahrung an, daß die Seele existirt. Kartes aber, und auf ähnliche Art der Autor, suchen dieses erst durch einen Schluß herauszubringen. Jener sagt: Cogito ergo sum. Das ist aber unnöthig, denn cogito oder sum cogitans ist dasselbe. Kartes sagte selbst, von einer Wirklichkeit als eines Objects des innern Sinnes bin ich mir immediate bewußt. Von der Wirklichkeit aber der Objecte äußerer Sinne, z.E. meines Körpers, kann ich nur mediate durch einen Schluß bewußt werden, und doch schließt er hier die Existenzder Seele, sündigt also wieder seine eigne Regel. Daß ich als Mensch existire, ist schon ein Schluß, und zwar ein Schluß, der keine mathematische Gewißheit giebt, denn der Idealist leugnet das Dasein der Körper. Die empirische Psychologie theilt sich in 2 Haupttheile; nehmlich 1. In die Betrachtung der Seele an sich selbst — 2. In die Betrachtung der Gemeinschaft der Seele mit dem Körper. Die Kräfte der Menschlichen Seele theilen sich in 3 Hauptclassen : 1. Erkenntniß Vermögen, 2. Lust oder Unlust, 3. Begehrungs Vermögen. Lust geht vor dem Begehrungs Vermögen, und Erkenntniß Vermögen vor der Lust vorher. Nachdem das Erkenntniß Vermögen verschieden ist, nachdem sind auch die beiden folund Erkenntniß Vermögen vor der Lust vor. Nachdem das Erkenntniß Vermögen verschieden ist, nachdem sind auch die beiden folgenden verschieden. Es ist ein oberes und unteres Erkenntniß Vermögen. Jenes ist Verstand, dieses Sinnlichkeit. So giebt es auch ein vernünftiges und sinnliches Gefühl der Lust oder Unlust (und so ists auch beim Begehrungs Vermögen). Durch das sinnliche Erkenntniß Vermögen ist das Subject selbst leidend, und daher heißt es denn, es hat Receptivitaet ; durch das obere ist es selbst tliatig und daher hat es denn Spontaneitaet. Diese beiden Vermögen sin also durch die Art, wie das Subject dabei beschaffen ist, verschieden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s12-004",
     "kind": "text",
     "aa": 877,
     "aaEnd": 878,
     "pages": [
      {
       "p": 878,
       "i": 310
      }
     ],
     "text": "Wir haben Lust oder Unlust ohne zu begehren oder zu verabscheuen, z.E. wenn wir eine schöne Gegend sehen, so ergötzt sie uns deswegen werden wir aber nicht sogleich wünschen, sie zu besitzen. Lust oder Unlust ist also vom Begehrungs Vermögen ganz was verschiedenes. Aber auf der andern Seite können wir nichts begehren oder verabscheuen, wobei nicht Lust oder Unlust zum Grunde liegt. Denn zu was ich nicht Lust habe, will ich auch nicht. Also geht Lust oder Unlust vor dem Begehren oder Verabscheuen vorher. Was ich aber begehre, muß ich doch zuvor erkennen, an was ich Lust oder Unlust habe, auch ; demnach liegt beiden das Erkenntniß Vermögen zum Grunde. So giebts auch viele Vorstellungen, die weder mit Lust oder Unlust verbunden sind, und also ist Erkenntniß Vermögen vom Gefühl der Lust oder Unlust ganz unterschieden. Alle diese 3 Haupt Kräfte der Seele machen zusammengenommen ihr Leben aus.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s12-005",
     "kind": "text",
     "aa": 878,
     "ms": [
      {
       "p": 185,
       "i": 1022
      }
     ],
     "text": "(Das Bewußtsein ist Princip der Möglichkeit vom Verstände, aber nicht von der Sinnlichkeit. Das Bewußtsein nach Willkühr ist Aufmerksamkeit — das Wiederspiel derselben Abstraction. Das Selbst liegt zum Grunde des Bewußtseins und ist das eigenthümliche des Geistes. Dieses Selbst können wir aber 3fach betrachten : Ich denke als Intelligenz, d.h. das Subject des Denkens ist Intelligenz. Ich denke als Subject, das Sinnlichkeit hat, und bin Seele. Ich denke als Intelligenz und Seele, und bin Mensch. Ein Körper, der nur von einer Seele und nicht von Intelligenz belebt wird, ist ein Thier. Das Vermögen, den Gedanken zu fassen: Ich bin, gehört bloß für die Intelligenz. Dieses Ich bleibt, und wenn sich alles geändert hat, wenn sich Körper und Grundsätze geändert haben. Was nun die Identitaet seines Selbst ausmacht, ist schwer zu wissen; auf dieses bezieht sich alles, alles kann sich ändern, nur das Bewußtsein und die Apperception oder das Vermögen, die Vorstellungen auf sein Selbst zu referiren, bleiben. Diese Apperception in gewißem Grade giebt deutliche, im mindern Grade dunkle Vorstellungen. Diese sind also nicht der Art, sondern dem Grade nach unterschieden. Die Klarheit in der Anschauung ist aber von der Klarheit im Begriffe sehr unterschieden. Jenes ist die aesthetische, dieses die logische Klarheit. Die Actualisierung der Attention, wodurch nur eine einzige Vorstellung klar gemacht und alle übrige verdunkelt werden, ist Abstraction. Bei der Abstraction hört nicht die Attention auf, sondern sie wird nur von einem oder mehreren Objecten auf eines gerichtet und die übrigen Vorstellungen alle verdunkelt, und die eine klar).",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s12-006",
     "kind": "text",
     "aa": 878,
     "text": "Die erste und die Haupt Vorstellung ist die vom ich oder das Bewußtsein meiner Selbst, die Apperception (wie sie Herr Prof. Kant in seiner Critic nennt.)",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s12-007",
     "kind": "text",
     "aa": 879,
     "text": "Diese ist nun der Menschlichen Seele allein eigen und unterscheidet sie von allen Thieren. Das Thier hat keine Apperception, und daher ist es auch keiner moralischen Grundsätze, keines Verstandes und keines Vernunft Gebrauchs fähig, wie hernach weiter gezeigt werden wird. Der Körper von mir ist mein Körper, weil seine Veränderungen meine sind. Denn ich kann nur dadurch Vorstellungen von äußern Dingen bekommen und durch sie mein Körper affizirt werden. Ein Wesen, das bloß Object des innern Sinnes ist, kann sein Verhältniß gegen Dinge, die Objecte des äußern Sinnes sind, nicht wißen. Wo mein Körper ist, ist auch mein denkend Ich, denn durch ihn kann ich nur allein die Position meines selbst wißen. Ich selbst aber nehme im Körper keinen besonderen Kaum ein, da ich nicht nach der Eorm des Raumes angeschaut werden kann. Der Körper bestimmt nur mein Verhältniß des Orts in Ansehung anderer Dinge (daß ich nehmlieh in ihm bin), aber nicht in Ansehung meiner Selbst und wo ich in ihm bin. Unsre Vorstellungen sind entweder dunkel oder klar etc. Dunkle Vorstellungen sind die, deren ich mir nicht unmittelbar bewußt bin, durch Schlüsse aber doch mittelbar bewußt werden kann.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s12-008",
     "kind": "text",
     "aa": 879,
     "text": "Locke macht hingegen den Einwurf: dunkler \\ orstellungen bin ich mir nicht bewußt. Woher weiß man denn, daß ich dunkle Vorstellungen habe 1 Sich etwas nicht bewußt sein und es doch wißen, ist Contradictio in adjecto — aber das ist bloße Ghicane.",
     "dehyphenated": 1,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s12-009",
     "kind": "text",
     "aa": 879,
     "aaEnd": 880,
     "pages": [
      {
       "p": 880,
       "i": 1050
      }
     ],
     "ms": [
      {
       "p": 186,
       "i": 381,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Wir wissens freilich immediate nicht, aber durch Schlüße doch, z. E. wir sind es uns nicht bewußt, daß die Milchstraße, wenn wir sie mit bloßen Augen betrachten, aus lauter kleinen Sternen bestehe, aber durchs Telescop sehen wirs. Run schließen wir, da wir die ganze Milchstraße gesehen haben, so miißen wir auch alle einzelnen Sterne gesehen haben. Denn wäre das nicht, so hätten wir nichts gesehen. Was wir aber gesehen haben, müßen wir uns auch vorgestellt haben. Da wir von diesen Vorstellungen nichts wissen, so müssen sie dunkel gewesen sein. Wir haben also dunkle Vorstellungen, und diese zwar in so großer Menge, daß sie die Anzahl unserer klaren Vorstellungen bei weitem übersteigen. Unsre Seele ist gleichsam wie eine Karte, auf der einige wenige Stellen illuminirt sind. Würden alle unsre dunkle Vorstellungen einmal zu klaren werden, so wurden wir über die Menge derselben erstaunen. Wir würden uns gleichsam in eine andre Welt versetzt sehen. Die dunklen Vorstellungen machen die Tiefe der Seele aus und die Menge derselben ist das Feld der dunklen Vorstellungen. Diese Benennung ist vom Gleichniß (mit der Karte) hergenommen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 76
    }
   ]
  },
  {
   "id": "s13",
   "title": "Zweites Capitel. Vom untern Erkenntniß Vermögen",
   "titleSrc": "heading",
   "headings": [
    "Zweites Capitel.",
    "Vom untern Erkenntniß Vermögen"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s13-001",
     "kind": "heading",
     "aa": 880,
     "text": "Zweites Capitel. Vom untern Erkenntniß Vermögen"
    },
    {
     "id": "metaphysik-mrongovius-s13-002",
     "kind": "text",
     "aa": 880,
     "text": "Alle unsre Erkenntniße, Lust etc. und Begierde sind entweder sensuell oder intellectuell. So giebts auch sinnliche und intellectuelle Vorstellungen.",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-mrongovius-s13-003",
     "kind": "text",
     "aa": 880,
     "aaEnd": 881,
     "pages": [
      {
       "p": 881,
       "i": 1912
      }
     ],
     "ms": [
      {
       "p": 187,
       "i": 1639
      }
     ],
     "text": "Nach dem Autor sind sie bloß der logischen Form nach unterschieden, aber dies ist falsch. Hierin differirt der Autor nebst Wolf und Leibnitz von allen Philosophen und machen große Confusion. Sie unterscheiden sie bloß in Ansehung der Deutlichkeit und Undeutlichkeit. Das ist aber kein wesentlicher Unterschied. Denn intellectuelle Erkenntniße können auch dunkel oder undeutlich sein und sinnliche Erkenntniße können wieder noch so deutlich sein; iene bleiben deß wegen doch intellectuell und diese sensuell, z.E. der Begriff von Recht und Unrecht ist dunkel und doch intellectuell, dagegen der Begriff von den Tönen sehr deutlich und doch sinnlich ist. (Die deutliche Erkenntniß ist nicht eine in specie verschiedene Erkenntniß, sondern sie beruht bloß auf der relation des Bewußtseins zur Erkenntniß.) Daher muß die Ursache ihrer Verschiedenheit in ihrem verschiedenen Ursprünge liegen. Sinnliche Vorstellungen sind Vorstellungen nach der Art, wie ich von den Dingen afficirt werde; intellectuelle Vorstellungen sind solche, die davon unabhängig sind. Erkenntniß, die auf receptivitaet beruht, ist sinnlich, die auf spontaneitaet beruht, ist intellectuell. Durch die Sinnlichkeit erkenne ich die Dinge, wie sie für uns sind; durch den Verstand aber, wie sie an sich selbst sind. Denn alle Gegenstände unserer Sinne sind bloß Erscheinungen. Die Sinnlichkeit ist bei allen unseren Erkenntnißen das materiale. (Sie ist das Vermögen der Anschauung, und die Wissenschaft davon Aesthetic). Alles, was wir uns vorstellen, kommt aus d< n Sinnen. Denn durch sie können wir nur die Dinge anschauen. Hätten wir intellectuelle Anschauungen, so müßte unser Verstand schöpferisch sein und die Dinge selbst hervorbringen. Da das nicht ist, so müssen die Dinge in uns die Vorstellungen hervorbringen, und das durch die sinnliche Anschauung. Der Verstand thut denn zu der Erfahrung nichts als die Form hinzu. Bei der Erkenntniß Schaft die Sinnlichkeit die Empfindung. Bei der Lust oder Unlust das Vergnügen. Bei dem Begehrungs Vermögen die Triebfedern.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s13-004",
     "kind": "text",
     "aa": 881,
     "text": "Die Kraft, sinnliche Vorstellungen hervorzubringen, ist das sinnliche Erkenntniß Vermögen, und die Kraft intellectuelle hervorzubringen, ist das intellectuelle Erkenntniß Vermögen. Jenes heißt das untere, dieses heißt das obere Erkenntniß Vermögen.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s13-005",
     "kind": "text",
     "aa": 881,
     "text": "Das sinnliche Erkenntniß Vermögen kann man eintheilen A in Ansehung der Zeit, da ist es a das Vermögen der Anschauung des Gegenwärtigen oder die Sinne, Sensatio, B des Vergangenen oder die reproduction, und C des Zukünftigen oder Praevision (die Reproduction oder reproductive Einbildungs Kraft mit Bewußtsein verbunden, ist memoria). Zeit und Raum sind Bedingungen der sinnlichen Vorstellungen, welche alle auf dem Vermögen der Anschauung beruhen. Das Vermögen der Anschauung, sofern es von der Gegen -wart des Gegenstandes anfängt, ist der Sinn, sofern es ohne Gegenstand, aber doch in Rücksicht auf die Zeit ist, ist Einbildungskraft, und ohne alle Beziehung des Gegenstandes auf die Zeit Dichtungs Vermögen. Diese 3 Vermögen machen die Anschauung der Objecte aus.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s13-006",
     "kind": "text",
     "aa": 881,
     "text": "B in Ansehung der Erzeugung der Vorstellungen ist das Erkenntniß Vermögen a facultas comparandi. Dazu gehört V itz als das Vermögen, Ähnlichkeit, und Urtheilskraft als das Vermögen, Verschiedenheit bei den Dingen anzutreffen, b Facultas fingendi oder das Vermögen, neue Vorstellungen zu erzeugen, i. e. productive Einbildungskraft. c. Facultas signandi, das Vermögen der Verknüpfung der Vorstellungen mit einem Subject, vel Facultas characteristica oder das Vermögen, durch gewisse Vorstellungen als Mittel andre hervorzubringen, oder das Vermögen, repraesentationes vicarias oder subsidiarias hervorzubringen, die an sich keine Gültigkeit haben, aber doch dazu dienen, andere Vorstellungen in uns hervorzubringen. 30Z.E. das Wort Rom bringt die Vorstellung einer Stadt in Italien hervor. Hierauf beruht auch die Sprache. Das sinnliche Erkenntniß Vermögen beruht auf der Art, wie wir von den Dingen afficirt werden — daher receptivitaet oder eine paßive Eigenschaft, von anderen Dingen bestimmt zu werden — ; das Intellectuelle Erkenntniß Vermögen beruht auf Spontaneitaet oder dem Vermögen, sich selbst zu bestimmen, denn es ist unabhängig von der Empfindung. Der Verstand gehört zur Spontaneitaet, also zum oberen Erkenntnil Vermögen. Das Gefühl der Lust oder Unlust aber ist theils Spontaneitaet, theils Receptivitaet.",
     "dehyphenated": 6,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s13-007",
     "kind": "text",
     "aa": 882,
     "ms": [
      {
       "p": 188,
       "i": 0
      }
     ],
     "text": "3. Capitel vom Sinn",
     "ocrConf": 55
    },
    {
     "id": "metaphysik-mrongovius-s13-008",
     "kind": "text",
     "aa": 882,
     "aaEnd": 883,
     "pages": [
      {
       "p": 883,
       "i": 2405
      }
     ],
     "ms": [
      {
       "p": 189,
       "i": 2525
      }
     ],
     "text": "A Der Sinn (sensatio) ist zwiefach: 1. der innre und 2. der äußere Sinn. Das Vermögen der innern Anschauung ist der innre Sinn. Der innre Sinn ist das Bewußtsein unserer Vorstellungen selbst. (Die Apperception liegt dem innern Sinn zum Grunde). Es hat zum Object die Seele. Wenn die Seele sich selbst ihrer bewußt ist, ohne ihres Zustandes bewußt zu sein, so ists Apperception. Ist sie auch ihres Zustandes bewußt, so ist es Empfindung oder Wahrnehmung. Der äußere Sinn wird eingetheilt 1. in Organ Sinne, die sich auf gewisse Theile einschränken, deren sind bekanntlich 5, und 2 in den vitalen Sinn oder den Sinn, etwas ohne besondres Organ zu empfinden. Dieser ist überall, wo Leben ist, und da dies im Nerven System ist, besonders in äußern Enden der Nerven. Dieser findet sich bei einem gewißen sanften Wohlbefinden, bei Schaudern, Entsetzen etc. Es ist der 6te Sinn der Franzosen, nehmlich die Empfindung der Wollust bei der Geschlechts Gemeinschaft. Der vitale Sinn kann auch sensus vagus und die andern fixus heißen. — Alle organ Sinne haben etwas subjectives und objectives, aber einige sind mehr subjectiv als objectiv, und so umgekehrt. Das ist: bei einigen stellen wir uns mehr Veränderungen des Subjects als Objects vor et vice versa (andre Geschöpfe können mehr oder weniger Organ Sinne haben und von einigen Thieren ists bekannt. So muß z.E. den Schildkröten, die zu einer gewissen Jahreszeit von der Insel Iucatan 300 Meilen nach der Caiman Insel schwimmen, ein besondrer Sinn dazu eigen sein; auch uns mögen noch mehr Sinne eigen sein, die wir aber zum Gefühl rechnen). Geruch und Geschmack sind mehr subjectiv. Denn riecht oder schmeckt man bloß, so kann man das Ding dadurch noch nicht vom andern unterscheiden. Ich kann nicht Farbe, Gestalt etc. wissen. Diese wirken daher auch am meisten auf uns. Vom starken riechen können wir in Ohnmacht fallen und vom üblen Geschmack wird der Ekel, und dadurch im ganzen Körper Convulsionen erregt. Gefühl, Sehen und Hören sind mehr objectiv als subiectiv. Beim Gefühl könnte man nicht zweifeln, aber denn vereinigt man es mit der innern Empfindung, und das ist der vitale Sinn, welcher freilich mehr aufs subjective als obiective geht. Hier ist aber vom äußern Gefühl oder von der Empfindung der Dinge durchs Anfassen die Rede. Dieser besteht vornehmlich in den Fingern. Hierdurch kann ich die Figur, die Härte und Weiche eines Dinges, bestimmen. Er liegt allen übrigen Sinnen zum Grunde. Der blind geborne kann durchs Gefühl sogar die Farben unterscheiden, und wenn er sehend wird, so nützt ihm doch dieses Sehen nichts am Anfang: das Sehen hat noch mehr Objectivitaet an sich. Wenn ich um mich herum sehe, so fühle ich nicht, was in meinem Auge vorgeht, denn es ist so schwach, daß man es nicht immer merkt. Das Hören ist mehr objectiv als subjectiv. Denn wenn ich reden höre, so fühle ich keine Schläge und Anstöße der Luft an meinem Trommelfell. Es sei denn, daß iemand sehr kreischt; ia, da thun einem die Ohren weh. Es fragt sich nun, ob es noch mehrere Sinne geben kann. (Ja, denn wie viel feine Materien mögen nicht sein, die wir wegen Mangel an Organen nicht wahrnehmen, z.E. die Magnetische Materie. Man glaubt, daß die Thiere gewisse Sinne haben, von denen wir keinen Begriff haben und das ist wohl möglich, z.E. wenn die Wildgänse im Sommer in kalte Länder reisen, so ziehen sie in der dunkelsten Nacht doch den geradesten Strich nach Norden zu. Einige Sinne haben eine große Sphaere, worin sie Dinge wahrnehmen können. Gefühl und Geschmack haben die engste Sphaere, Geruch aber schon eine weitere, z.E. der Adler riecht wohl auf eine Meile das Aas. Gehör hat noch eine weitere und das Gesicht die weiteste. — Es ist bewunderungswürdig, daß wir noch Sterne sehen können, deren nächster auf 200000 mal weiter als die Sonne ist. Das kommt zum Theil auch daher, weil die Luft nur eine feine Materie ist, durch die das Licht als eine noch feinere leicht hindurchdringt. Nun kommen wir zu dem vierten Capitel oder der",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s13-009",
     "kind": "text",
     "aa": 883,
     "text": "B Reproductions Kraft der Seele oder der Imagination",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s13-010",
     "kind": "text",
     "aa": 883,
     "text": "Diese ist das Vermögen, die vergangenen Zustände sich vorzustellen. Wir werden uns unserer vergangenen Vorstellungen bewußt, und das zwar nach den Gesetzen der Vergesellschaftung oder Aßociation als Ideae sociae sese invicem reproducunt.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s13-011",
     "kind": "text",
     "aa": 883,
     "text": "Facultas imaginationis ist in Absicht auf die vergangene Zeit reproductiva, in Absicht auf künftige praevidendi, und in Absicht auf keine Zeit productiva. Die erstere hat lex aßociationis idearum sociarum, durch das die mit einander verbunden gewesenen Ideen sich auch wieder folgen, die 2te Lex expectationis casuum similium, die 3te Lex sociabilium, daß man reimen müßte, was sich zusammen faßt.",
     "ocrConf": 71
    },
    {
     "id": "metaphysik-mrongovius-s13-012",
     "kind": "text",
     "aa": 883,
     "aaEnd": 884,
     "pages": [
      {
       "p": 884,
       "i": 126
      }
     ],
     "text": "Die Facultas imaginandi kann eingetheilt werden a. in Facultas praevidendi oder fingendi, wenn meine Seele neue Vorstellungen durch die Einbildungskraft hervorbringt und b. in Facultas reproducendi, wenn sie bloß die gehabten erneuert. Die reproductive Einbildungskraft bezieht sich entweder auf den innern oder äußern Sinn. Mit ihr ist verbunden :",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s13-013",
     "kind": "text",
     "aa": 884,
     "ms": [
      {
       "p": 190,
       "i": 0
      }
     ],
     "text": "C. Facultas praevisionis, wenn ich auf meinen künftigen Zustand schließe (die Facultas praevisionis oder anticipirende Einbildungskraft beruht auf der reproductiven. Es wird z.E. die Glocke geläutet, so fällt mir dabei ein, daß dann die Mahlzeit ist; so ist das reproductive Einbildungskraft. Ich schließe aber nun zugleich hieraus, daß wenn die Glocke geläutet wird, eine Mahlzeit folgt. Die antizipirende Einbildungskraft mit Bewußtsein ist Praesagition, ohne dies ists praesensio) , und ich schließe auf das Künftige, wenn ein ähnlicher Fall schon gewesen ist, worauf etwas gefolgt ist, und glaube daher, daß dieser hall auch eine gleiche Folge haben werde. Es ist also bloß eine Anwendung des Gesetzes der reproductiven Einbildungskraft auf die künftige Zeit. Alle diese 3 Erkenntniß Vermögen können mit Apperception begleitet werden oder nicht. Sind sie es, so gehören sie bloß dem Menschen zu, wo nicht — so haben sie auch die Thiere. Wir sollten daher von iedem 2 verschiedene b* amen haben, aber das ist nur von einem, nehmlich der reproductiven Einbildungskraft; denn diese heißt, mit Apperception begleitet, Gedächtniß. Nun kommen wir zum 2ten Unterschied der sinnlichen Erkenntnißkräfte, nehmlich",
     "dehyphenated": 7,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s13-014",
     "kind": "text",
     "aa": 884,
     "text": "II. In Ansehung ihrer Erzeugung, und zwar A zu der Facultas comparandi. Diese unterscheidet sich ganz von der Facultas coniungendi seu componendi. Denn bei der Vergleichung setze ich nicht Begriffe zusammen, sondern ich halte sie nur gegen einander, um neue Vorstellungen herauszubringen. Hier sehen wir auf identitatem und Diversitatem. I acultas ad cognoscendum identitatem ist ingenium; acumen aber ad cognoscendum diversitatem. Der Nutzen des Ingenium ist positiv, des acumens aber negativ. Dieses bewahrt uns für Irrthümer, denn es zeigt uns Dinge nicht für einerlei anzunehmen, die es nicht sind. Aber es hat nicht das Angenehme und Unterhaltende des Ingenii.",
     "dehyphenated": 3,
     "ocrConf": 76
    }
   ]
  },
  {
   "id": "s14",
   "title": "C ap. 7. Vom Dichtungs Vermögen",
   "titleSrc": "heading",
   "headings": [
    "C ap. 7. Vom Dichtungs Vermögen"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s14-001",
     "kind": "heading",
     "aa": 884,
     "text": "C ap. 7. Vom Dichtungs Vermögen"
    },
    {
     "id": "metaphysik-mrongovius-s14-002",
     "kind": "text",
     "aa": 884,
     "aaEnd": 886,
     "pages": [
      {
       "p": 885,
       "i": 129
      },
      {
       "p": 886,
       "i": 2655
      }
     ],
     "ms": [
      {
       "p": 191,
       "i": 838,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Facultas fingendi ist das Vermögen, Vorstellungen von Dingen, die wir me gesehen haben, hervorzubringen. Die ist aut Imagination oder Phantasie. Imagination ist, wenn wir mit der Einbildungskraft spielen, und zu gewissen Absichten und Zwecken etwas erdichten. Phantasie ist, wenn die Einbildungskraft mit uns spielt. Jene ist willkührlich, denn wir können sie auf heben und richten, wie es uns beliebt, diese ist aber unwillkührlich. Jede Erdichtung muß nach der Analogie der Erfahrung geschehen, sonst ist sie effrenis, regellose Phantasie. Materialiter können wir daher nichts erdichten, sondern bloß formaliter. Ist die Erdichtung nach der Analogie der Erfahrung, so ist sie Phantasia subacta. Ist sie unwillkührlich, so heißt sie besonders Phantasia effrenis. Diese haben gemeinhin hypochondrische Leute; wer sie hat, heißt Phantast. (Die matte Einbildungskraft ist so wie die Esel in England, mit denen man am Schluß des Wettrennens noch Spaß macht. Wenn der Reuter nehmlieh ganz nah am Ziel ist, so giebt er dem Esel die Sporen, und da er dies nicht vertragen kann, steht er augenblicklich still. So gehts auch der zu sehr gespornten Einbildungskraft. Ist die Regelund Zügellosigkeit bei der Einbildungskraft vereinigt, so entsteht der so genannte Koller. Man schreibt das zuweilen dem zu vielen Studiren zu, aber davon kommts nicht her, wenn er es nicht schon vorher gehabt hat, oder wenigstens mit einer Anlage dazu zum Studiren gekommen ist. Der Wahnsinn besteht darin, wenn wir die Bilder der Einbildungskraft für wirklich halten, und der Wahnwitz, wenn man ganz verkehrte Urtheile fällt. Das Criterium eines Gestörten ist, wenn er unfähig ist, sein Urtheil mit andern ihrem zu vergleichen und nach diesem gar nicht fragt. Ein anderes Phaenomen der Einbildungskraft ist der Traum. Er entsteht ganz natürlich. Denn da die Einbildungskraft beständig wirksam ist, und im Schlaf die Wirkungen des Verstandes aufhören, so bleibt diese übrig und bekömmt dadurch freien Lauf, und macht uns statt des Verstandes Vorstellungen von Dingen — daher kommts auch, daß uns diese nothwendig scheinen. Es ist so wie mit dem Monde.) Diese productive Einbildungskraft äußert sich vornehmlich im Traum. Es ist eine Reihe von Erdichtungen, die aber unwillkührlich sind. Beim Wachen leben wir in einer gemeinschaftlichen Welt, beim Traum aber in unsrer eigenen. — Er ist der Dichtungskraft im Wachen sehr ähnlich, doch mit dem Unterschiede: im Traum ist die productive Einbildungskraft unwillkührlich, ohne Ordnung und Absicht. Im Wachen aber kann ich mehrentheils meiner Phantasie allerlei Richtungen und Ordnung geben, und mich immer selbst davon zurückrufen, wenn es mir beliebt. Im Wachen ist zwar die Phantasie zuweilen auch unwillkührlich, aber die Ideen sind noch nicht so klar wie im Traum, weil uns hier die Eindrücke der Sinne hindern, dort aber alle Sinne ruhen, und bloß das Feld der productiven Einbildungskraft rege ist. Denn der Traum hebt alles Bewußtsein unseres Zustandes auf. Daher kommt auch das Sonderbare, daß wir uns die vergangene Zeit vorstellen, ohne zu wissen, daß sie vergangen ist. Hier ist uns so zu sagen ein Fach der reproductiven Einbildungskraft bloß aufgethan, in dem wir herum schwärmen ohne unseres gegenwärtigen Zustandes bewußt zu sein.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 17,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s14-003",
     "kind": "text",
     "aa": 886,
     "ms": [
      {
       "p": 192,
       "i": 270
      }
     ],
     "text": "Indessen hat der Traum so wie alles in der Welt seinen Nutzen. Denn wenn das Gemüth nicht immer in Bewußtsein ist, so scheint der Körper nicht genug agitiert zu werden. Würde nun unser Körper nicht innerlich afficirt und, weil er im Schlaf ist, auch äußerlich afficirt, so würde ihm das sehr schaden. Im Traum wird das Gemüth und dadurch auch der Körper mit bewegt, besonders durch die Affecten. Hierdurch wirkt die Seele auf die Quellen des Lebens, und das ist uns sehr heilsam und noth wendig, weil wir durch kein körperliches Bewußtsein die Quellen unseres Lebens in Bewußtsein und Thätigkeit versetzen, sondern bloß den Kreislauf des Geblüths befördern können. Die Seele wirkt besonders aufs Athem System, und ohne dieses können wir doch nicht bestehen. Z.E. Wenn iemand sich eine gute Bewegung gemacht hat und darauf schlafen geht, so schläft er gemeiniglich recht fest. Da er auch denn nichts träumt, so verliert sich bei ihm das Athemholen, und dann bekommt er gemeiniglich ängstliche Träume, von denen er wieder erwacht. Nach dem Traum ist man auch des Morgens viel aufgewekter als sonst, weil dadurch das Leben gleichsam gestärkt ist. Was ist denn der Schlaf? Er ist ein Phaenomen, welches zur Physiologie oder zur Wissenschaft vom Menschlichen Körper gehört und läßt sich deswegen nicht metaphysicsh determiniren — Wer gesund ist, schläft auch gut.",
     "dehyphenated": 3,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s14-004",
     "kind": "text",
     "aa": 886,
     "aaEnd": 887,
     "pages": [
      {
       "p": 887,
       "i": 529
      }
     ],
     "text": "Wenn man die productive Einbildungskraft mit der vi signatrici vergleicht, so entsteht daraus die Traum Deuter Kunst. Man hält die Träume für Zeichen künftiger Begebenheiten, und das theils darum, weil sie oft mit der Erfahrung wenig übereinstimmen, und weil sie die Begebenheiten so lebhaft vorstellen, daß man glaubt, diese wären wirklich geschehen. Diese Signa prognostica können 1. natürlich und 2. willkührlich sein. Signa naturalia sind die Vorstellungen von ihren Wirkungen. Diese finden allerdings statt, und in diesem Betracht können die Träume immer signa prognostica sein, z. E. wenn sich bei einem Menschen des Nachts die Galle ergießt, so bekommt er fürchterliche und ärgerliche Träume; diese sind die Ursache, daß er des Morgens mit Grillen aufsteht, und seiner verdrießlichen und mürrischen Gemiithsart wegen überall Verdruß, Ärgerniß und Händel findet. So ist also die Galle eigentliche, die Träume aber nur mittelbare Ursache von dem Verdruß des folgenden Tages.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s14-005",
     "kind": "text",
     "aa": 887,
     "ms": [
      {
       "p": 193,
       "i": 546
      }
     ],
     "text": "2. Signa arbitraria. Das ist bloß Aberglauben, denn hier finde ich nicht den geringsten Zusammenhang. Ich kann ia das gar nicht wissen, nehmlich was sie bedeuten. Der Gebrauch der untern Erkenntnißkräfte geschieht von den obern, und zwar haben die obern vermittelst der Imagination die Herrschaft über die untern. Es ist bewunderungs würdig, wenn die untern Erkenntnißkräfte sich von den obern regiren lassen. In diesem Zustand ist derienige, der nicht abstrahiren und nichts attendiren kann. Die Imagination muß ganz auf unsrer Willkühr beruhen und es ist mit ihr so beschaffen wie mit der Function der Lunge im Athemholen, welche wir in unsrer Macht haben, doch nicht so, daß wir derselben gänzlich entbehren könnten. Wir müßen daher unsrer Imagination wohl zuweilen den Lauf lassen, doch so, daß wir sie immer regiren und ihr immer Einhalt thun können. Wenn sie aber die Lenkung des Verstandes respect-irt, so ist sie effrenis.",
     "dehyphenated": 1,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s15",
   "title": "Von dem Bezeichnungs Vermögen",
   "titleSrc": "heading",
   "headings": [
    "Von dem Bezeichnungs Vermögen"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s15-001",
     "kind": "heading",
     "aa": 887,
     "text": "Von dem Bezeichnungs Vermögen"
    },
    {
     "id": "metaphysik-mrongovius-s15-002",
     "kind": "text",
     "aa": 887,
     "text": "Facultas characteristica ist das Vermögen, seinen Verstand mit gewissen Zeichen zu belegen, oder Vorstellungen so zu associiren, daß die eine das Mittel der Reproduction der andern wird, und heißt auch Facultas signandi. Sie ist mechanisch, d.h. ohne Bestrebung der Kraft und auch unwillkührlich, z.B. wenn ich sage Rom, so entspringt gleich die Vorstellung von dieser Stadt. Ich mags wollen oder nicht. Dieses kommt aus Gewohnheit her. Ich erdichte Zeichen, um das, was ich denke, damit auszudrücken. Diese sind Worte und entweder a. demonstrativa oder repraesentativa, die das, was zu gleicher Zeit ist, betreffen, z.E. der Puls ist Zeichen von der Gesundheit oder Krankheit; b. rememorativa, die sich aufs Vergangene beziehen, z.E. Cicero; c, prognostica, die sich aufs Künftige beziehen, als z.E. der niedrige Flug der Schwalben ist ein Zeichen des bevorstehenden Regens.",
     "dehyphenated": 3,
     "ocrConf": 81
    }
   ]
  },
  {
   "id": "s16",
   "title": "Vom Verstand, Urtheilskraft und Vernunft",
   "titleSrc": "heading",
   "headings": [
    "Vom Verstand, Urtheilskraft und Vernunft"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s16-001",
     "kind": "heading",
     "aa": 888,
     "text": "Vom Verstand, Urtheilskraft und Vernunft"
    },
    {
     "id": "metaphysik-mrongovius-s16-002",
     "kind": "text",
     "aa": 888,
     "aaEnd": 889,
     "pages": [
      {
       "p": 889,
       "i": 2405
      }
     ],
     "ms": [
      {
       "p": 194,
       "i": 1750
      }
     ],
     "text": "Das obere Vermögen hat Spontaneitaet in seinen Vorstellungen. Wir sehen uns daher selbst als die zwingende Ursache dazu an. So gehört der Wille denn auch zum oberen Erkenntniß Vermögen, so er selbst sein Herr ist, und die Neigung zur Receptivitaet des obern Erkenntniß Vermögens heißt überhaupt Verstand. Das intellectuelle Erkenntniß Vermögen ist das Vermögen zu denken oder sich Begriffe zu machen. Es stellt sich nur das Object überhaupt vor, ohne auf die Art seiner Erscheinung zu sehen. Dieses ist discursiv, ienes intuitiv. Intuitus ist eine unmittelbare Vorstellung, Begriff, conceptus, eine mittelbare durch ein Merkmal (das Vermögen des Bewußtseins des Mannigfaltigen durch Begriffe ist doch ein unvollkommenes Vermögen, und ie größer und vollkommener das Vermögen, desto mehr näherts sich der Anschauung. Der vollkommenste Verstand würde demnach der sein, welcher bloß durch Anschauung erkennt, freilich aber nicht durch sinnliche Anschauung. So stellen wir uns den göttlichen Verstand vor. Es entsteht hier die Frage: ob wir nehmlich zu allgemeinen Vorstellungen nur durch Vergleichung kommen können? Es ist aber vielmehr umgekehrt richtig, daß bei Vergleichung uns allgemeine Begriffe entstehen, So kommen wir z.E. zu dem Begriff eines Triangels nicht durch Vergleichung, sondern wenn wir ihn zum ersten mal sehen, werden w'ir gleich gewahr, daß wir gar nicht durch seine Größe restringirt werden, alle dreiekigte Figuren, die wir künftig sehen, mit dem Namen Triangel zu belegen). Der Begriff ist das Bewußtsein, daß in einer Vorstellung desselben dasselbe enthalten ist als in einer andern, oder daß in mannigfaltigen Vorstellungen einerlei Merkmale enthalten sind. Dieser setzt also das Bewußtsein oder die Apperception voraus. Thiere vergleichen zwar Vorstellungen mit einander, aber sie sind sich nicht bewußt, worin sie mit einander harmoniren oder disharmoniren. Daher haben sie auch keine Begriffe, und weil aus diesen das obere Erkenntniß Vermögen besteht, auch kein Oberes Erkenntniß Vermögen. Dieses unterscheidet sich also durch Apperception vom untern Erkenntniß Vermögen. Das letztere haben wir als Thiere mit den letztem gemein, das erstere aber erhebt uns als denkende Wesen über die Thiere. Wer sich Begriffe machen kann, denkt. Alles Denken ist 3fach: 1. durch Begriffe, und deren Vermögen heißt Verstand. 2. durch Zusammensetzung zweener Begriffe, i.e. durch Urtheile, i.e. Urtheilskraft. 3. durch Herleitung eines Begriffes aus dem andern durch Schlüsse, i.e. Vernunft. Der Verstand ist das Vermögen, verschiedene Vorstellungen unter eine Regel zu bringen. Es beruht auf Apperception. (Er ist das Vermögen, durchs Allgemeine das Besondere zu bestimmen. Bei der oberen Erkenntniß Kraft betrachtet man das Erkenntniß Vermögen nicht im Verhältniß zur Anschauung, sondern zur Einheit des Bewußtseins. Dieses ist die Vorstellung seiner Vorstellungen und heißt auch darum Apperception. Ohne das Bewußtsein der Einerleiheit einer Vorstellung in vielen Vorstellungen wäre keine allgemeine Regel möglich. Denn Regel ist nothwendige Einheit des Bewußtseins einer Mannigfaltigkeit der Vorstellungen, Relation der Mannigfaltigkeit von Vorstellungen zu einem Bewußtsein.) Wie sind aber die Begriffe durch Apperception möglich? Dadurch, daß ich mir die Identitaet meiner Apperception in vielen Vorstellungen vorstelle. Der Begriff ist perceptio communis, z.E. der Begriff vom Körper. Dieser gilt von Metall, Gold, Stein, etc. Darin stelle ich mir eines im Mannigfaltigen vor. Die logische Function desselben besteht in der Allgemeinheit. Diese ist die analytische Einheit der Apperception, und vieles in einem ist die synthetische Einheit derselben. Die analytische Einheit der Apperception stellt uns nichts neues vor, sondern ist sich nur des Mannigfaltigen in einer Vorstellung bewußt. Die synthetische geht auf vieles, sofern es in einem enthalten ist. Sofern der Verstand nach dieser urtheilt, so ist er ein reiner Verstand. Der Verstand macht Regeln. Er zieht aus mannigfaltigen Vorstellungen das Allgemeine, was bei allen angetroffen wird, heraus. Er heißt daher auch das Vermögen der Regeln. Erfahrung setzt Verstand voraus, weil sie eine Verknüpfung der Wahrnehmungen nach Regeln ist. Er hat a posterioii und a priori Regeln.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s16-003",
     "kind": "text",
     "aa": 889,
     "aaEnd": 890,
     "pages": [
      {
       "p": 890,
       "i": 647
      }
     ],
     "ms": [
      {
       "p": 195,
       "i": 899
      }
     ],
     "text": "(Ohne Urtheilskraft würden wir nicht die differentia specifica, und ohne Wahrnehmung nicht die genera erkennen.) (Jeder Stand hat Urtheilskraft nöthig, aber doch einer mehr als der andere, z.E. Arzt mehr als Jurist. Hier sind viele Instanzen, wenn einer nicht recht decidirt, so wirds doch der andre, aber dort ists nicht so.) Urtheilskraft bringt die Objecte unter die Regeln. Vernunft wendet die Regeln auf sie an, ist also das Vermögen, nach Principien zu handeln. Die Vernunft bestimmt das Besondere aus einer allgemeinen Regel. Principien sind die Bestimmungen des besonderen aus dem allgemeinen. Die Urtheilskraft sieht, unter welcher Regel iedes Ding stehe, und ob dies Ding unter dieser Regel enthalten sei oder nicht. Es giebt Personen, die viel in abstracto und wenig in concreto denken, i. e. sie haben Verstand und keine Urtheilskraft, denn die muß angeboren sein und kann nicht gelernt werden. Denn da müßte man neue Regeln geben, wie die Verstandes Regeln angewandt werden sollen, aber diese neuen Regeln müßte man wieder anwenden lehren, folglich müßten wieder neue Regeln sein, und das würde denn so ohne Ende fortgehen. Die Klugheit besteht in Urtheilskraft. Daher ist mancher sehr gelehrt und doch nicht klug. Die Vernunft schließt, daß das, was die Regel allgemein sagt, auch von diesem oder ienem Dinge besonders gelte. Der Verstand zieht das allgemeine aus dem besonderen. Besonderen, nehmlich aus den verschiedenen Dingen in der Erfahrung, die Vernunft zieht das Besondere aus dem Allgemeinen. Diese 3 Erkenntniß Kräfte findet man im Syllogismus. Der Verstand giebt die allgemeine Regel, propositio major. Die Urtheilskraft ist die Subsumtion eines Begriffs unter den andern. Die Vernunft macht endlich Conclusion, denn sie schließt, daß das, was allgemein gilt, auch von dem subsumirten Dinge gelte. Was die Vernunft Erkenntniß erkennt, ist nothwendie sie ist aber sehr eingeschränkt, weil sie nichts aus der Erfahrung holt. Urtheilskraft muß man durch Praxin zu excoliren und zu verbessern suchen. Nun kommen wir zu dem 2ten Hauptstück dieser Psychologie, nehmlich zu dem Gefühl der Lust und Unlust.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s17",
   "title": "Lust oder Unlust",
   "titleSrc": "heading",
   "headings": [
    "Lust oder Unlust"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s17-001",
     "kind": "heading",
     "aa": 890,
     "text": "Lust oder Unlust"
    },
    {
     "id": "metaphysik-mrongovius-s17-002",
     "kind": "text",
     "aa": 890,
     "aaEnd": 892,
     "pages": [
      {
       "p": 891,
       "i": 837
      },
      {
       "p": 892,
       "i": 3380
      }
     ],
     "ms": [
      {
       "p": 196,
       "i": 1325
      },
      {
       "p": 197,
       "i": 3831
      }
     ],
     "text": "Lust oder Lhilust kann man nicht definiren, wenn man nicht das Begehrungsvermögen voraussetzt. Durch das Gefühl der Lust oder Unlust ist das Erkenntniß Vermögen mit dem Begehrungs Vermögen verbunden. Der Autor nennt es voluptas und taedium. Das ist falsch, denn dies gilt nur vom sinnlichen Wohlgefallen. — Denn öfters kann der Verstand woran ein Mißfallen haben, was den Sinnen am besten gefällt. Man muß es facultas complacentia und displicentia nennen. Man könnte diese eigentlich sensum internum nennen, indem er aul unseren Zustand selbst geht, indessen hat noch niemand den Begriff davon recht entwickelt. Gefühl der Lust ist die Fähigkeit meiner Vorstellungskraft, durch eine gegebene Vorstellung zur Erhaltung und Beförderung oder zur Vermeidung derselben bestimmt zu werden. Bei der Unlust bieten wir unser ganzes Vermögen auf, die Vorstellung zu verhindern, weiter ins Gemüthe einzudringen. Alles, was Gefühl von der Beförderung des Lebens erregt, erweckt Lust. (Gas Vermögen eines Subjects, sofern es durch die Lust an einem Gegenstand zur Hervorbringung dieses Gegenstandes bestimmt wird, heißt Begehrungs vermögen.) Es ist besonders, daß unsere Vorstellungen Ursache der Wirklichkeit der Objecte werden können, z.E. der Musicer ist Ursache von den Tönen, die er durch sein Instrument hervorbringt. Lust ist also das Bewußtsein der Übereinstimmung eines Objects mit der productiven Einbildungskraft unsrer Seele. Bei der Erkennbarkeit des Willens wird diese Definition noch deutlicher gemacht werden. — Unser Wohlgefallen oder Mißfallen ist entweder mittelbar oder unmittelbar; ienes ist intellectuell, dieses sinnlich. Mittelbar gefällt mir das, was mir nicht an sich selbst, sondern bloß als ein Mittel zu einem unmittelbaren Wohlgefallen gefällt. Es ist kein besonders Obiect der Lust, sondern ein Obiect der Vernunft, welche erkennt, daß ich dadurch einer Lust teilhaftig werde, z.E. am Gelde habe ich ein mittelbares Wohlgefallen. Denn an sich selbst gefällt es mir nicht, sondern bloß darum, weil ich mir vermittelst deßelben tausenderlei Vergnügungen verschaffen kann. Da ich Vernunft brauche, um zu erkennen, ob etwas als Mittel zu seinem Zweck gut sei, so ist dieses auch ein Obiect der Vernunft. Wir müssen daher bloß des Zweks wegen ein Mittel zum Wohlgefallen haben, und thun wir das nicht, so handeln wir thörigt, z.E. wer am Gelde an sich selbst ein Wohlgefallen hat, ohne es als Mittel zu einem Zweck anzusehen, und es daher immer in seinen Kisten verschließt, ist ein Geizhals. Dieses, woran ich bloß mittelbar Wohlgefallen habe, heißt auch nützlich oder zuträglich. Dieses ist nicht allgemein, sondern nach eines ieden Absicht. Einem ist das nützlich, und dem andern eben das schädlich. Davon kann aber nicht geredt werden. Die andre Art des Wohlgefallens ist das unmittelbare Wohlgefallen, welches uns an sich selbst gefällt. Dieses ist nun zweierlei: entweder subiectiv oder obiectiv. Subiectiv, wenn es auf der Veränderung unseres Zustandes beruht, und also bloß im Subiect liegt. Dieses heißt das Angenehme; es heißt auch das Privat Wohlgefallen, weil es nur in Beziehung auf die Sinne dieses oder ienes Subjects statt findet und also nicht allgemein ist, z.E. die Wärme, denn einer kann einen gewissen Grad der Warme recht angenehm finden, der dem andern unausstehlich ist, welches von seiner Lebens Constitution und überhaupt von seinem Zustand herkommt. Obiectiv ist das Wohlgefallen, welches gar nicht auf dem Subiect, sondern bloß auf dem Object beruht, daher ist es ein allgemeines Wohlgefallen, weil es allen, die das Object empfinden, gefallen muß. Dieses gefällt nun allgemein entweder nach Gesetzen der Sinnlichkeit, und dann ists schön. Das Schöne gefällt in der Einbildung oder nach Gesetzen des Verstandes und der Vernunft, und dann ist es gut. Das Gute ist unmittelbar und mittelbar. Mittelbar gut ist es das Nützliche, z.E. die Bestrafung des Bösen gefällt nicht an sich selbst, sondern als Mittel zur Erreichung eines guten Zweks. Daher ist sie uns nützlich und gut. Mittelbar gut ist vieles, unmittelbar gut aber bloß die Moralitaet. Der Mensch ist nicht unmittelbar gut, die Menschenfresser und Sclaven Händler ihiem Brauch nach; unmittelbar, wenn er moralisch ist. Denn ist er selbst Zweck.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s17-003",
     "kind": "text",
     "aa": 892,
     "aaEnd": 893,
     "pages": [
      {
       "p": 893,
       "i": 1707
      }
     ],
     "ms": [
      {
       "p": 198,
       "i": 1849
      }
     ],
     "text": "Das Schöne gefällt allgemein, es hat also allgemeine Regeln, z.E. eine Person ist schön, wenn sie iedermann gefällt. Wenn sie aber bloß für dies oder ienes Subject einen Reitz hat, so ist sie bloß angenehm. Daher kommts, daß wir uns nur über das Schöne, nicht aber über das Angenehme streiten, weil ienes auf allgemeinen Regeln beruht, und es könnte also lieber heißen: de gusto est disputandum. Das Vermögen, das Schöne zu beurteilen, ist Geschmack. Das Vermögen, das Angenehme zu beurteilen, hat keinen Namen, braucht ihn auch nicht. Der Geschmack beurtheilt nach allgemeinen Regeln ; das Angenehme beurtheilt man nach seiner Quelle, der Empfindung. Die Beurtheilungs Kraft ist also ein obiectives Vermögen. Die allgemeinen Regeln des Geschmaks gehören nur für die Sinnlichkeit des Menschen und für Wesen, die mit ihm gleiche Sinnlichkeit haben. Die allgemeinen Regeln des guten erstrecken sich auf alle vernünftigen Wesen, selbst auf Gott, denn sie gehen auf die Erkenntniß. Beim Geschmak sind Sinnlichkeit und Verstand im Urtheilen verbunden. Denn da er auf allgemeinen Regeln beruht, so muß der Verstand diese geben; durch die Sinne aber muß er das Object empfinden. Was in der Empfindung oder im Angenehmen gefällt, vergnügt; was der sinnlichen Beurtheilungs Kraft gefällt, nehmlicli das Schöne, gefällt im strictern V erstände. Es gefällt mir etwas, wenn mir die Existenz desselben gleichgültig ist, z.E. ein schöner Plan kann mir gefallen, obgleich das Ding selber noch nicht existirt, aber des Angenehmen Existenz ist mir nicht gleichgültig. Wenn mir eine schöne Gegend gefällt, so gefällt sie mir deswegen, weil sie mir so gefallen würde, wenn sie auch nicht da wäre, sondern wenn ich sie mir nur in Gedanken vorstellte. — Was mich vergnügt, besitze ich entweder, oder seine Existenz ist mir nicht gleichgültig. Jedes mittelbare Vergnügen setzt ein unmittelbares voraus. Die Schönheit ist die Allgemeinheit des sinnlichen Wohlgefallens oder die Beurtheilung des Gegenstandes nach dem allgemeinen Wohlgefallen. Gefühl geht auf die Materie, Geschmak aber auf die Form der Zusammensetzung des Mannigfaltigen in der Empfindung. Zum Geschmak gehört Talent; zur Empfindung nicht. Das Angenehme hat mehr Grade oder intensive Größe als das Schöne, und dieses wieder mehr extensive Größe als das vorhergehende. Das Gute hat noch mehr extensive Größe. Weil beim Geschmak noch immer einige Ausnahmen statt finden, so fallen einige in das Extrem, daß sie die Allgemeinheit deßelben leugnen. Schönheit ist das Object des Wohlgefallens in der sinnlichen Anschauung oder auch nach dem Autor perfectio phaenomenon, wenn man unter perfectio das Object des sinnlichen Wohlgefallens versteht. Güte oder gute Beschaffenheit eines Dinges ist das Object des Wohlgefallens nach Begriffen des Verstandes. Das Angenehme vergnügt, das Unangenehme schmerzt, das Schöne gefällt, das Schlechte mißfällt; das Gute wird gebilligt, das Böse wird gemißbilligt. Zum Angenehmen gehört Empfindung (das Angenehme gefällt wegen der Materie) ; zum Schönen gehört Geschmak — (das Schöne gefällt wegen der Form) und zum Guten Denkungs Art (Sentiment). Die Tugend ist ein wahrhaftes inneres Gute, aber nichts angenehmes. Es sind bei ihr intellectuelle und nicht sinnliche Urtheile. Aber sie hat doch etwas, was dem Schönen nahe kommt. Denn wenn man sich in Gedanken ein Ganzes Reich von Tugendhaften vorstellt, so erweckt die Ordnung und Regelmäßigkeit ihres Betragens, welche daraus nothwendig entspringen müßte, in uns ein sinnliches Wohlgefallen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s18",
   "title": "Vom Begehrungs Vermögen",
   "titleSrc": "heading",
   "headings": [
    "Vom Begehrungs Vermögen"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s18-001",
     "kind": "heading",
     "aa": 893,
     "text": "Vom Begehrungs Vermögen"
    },
    {
     "id": "metaphysik-mrongovius-s18-002",
     "kind": "text",
     "aa": 893,
     "aaEnd": 894,
     "pages": [
      {
       "p": 894,
       "i": 381
      }
     ],
     "ms": [
      {
       "p": 199,
       "i": 1143
      }
     ],
     "text": "Caußalitas ist die Bestimmung einer Ursache, wodurch sie Ursache wird, oder die Bestimmung der Relation eines Dinges als Ursache zu einer bestimmten Wirkung. Die Ursache ist also von der caußalitaet immer unterschieden, z.E. der Mensch ist die Ursache der Buchstaben aber nicht vermittelst seines Kopfs oder der Fusse etc., sondern vermittelst seiner Finger. — Das Vermögen, durci seine Vorstellungen Objecte hervorzubringen, ist das Begehrungsvermögen. Das Begehrungsvermögen beruht auf dem Grundsätze: Nihil appeto nisi quod placet, nihil averto nisi quod displicet. Vorstellungen können aber nicht Ursache vom Object werden, wofern wir nicht Lust oder Unlust an demselben haben. Daher ist dies die subiective Bedingung derselben, unter der die Vorstellung allein Ursache vom Gegenstand werden kann. Daher ist auch die Begierde ein Complexus von der Wirklichkeit des Obiects und des Begehrungsvermögens. Das Vermögen, sich dem Obiect des Wohlgefallens conform zum Handeln zu bestimmen. Das obiective der Begierden ist das physische Vermögen derselben. Dieses gehört aber zum Mechanism der Natur. Wir setzen es aber voraus, sonst wären unsre Begierden leer. Hier aber betrachten wir die Begierden überhaupt (außer den Dingen, die durch äußere Ursachen bewegt werden, giebt es lebendige, die durch innere bewegt werden. Ein Wesen ist lebendig, wenn seine Vorstellungs Kraft der Grund der Wirklichkeit ihrer Gegenstände sein kann. Die Caußalitaet der Vorstellung in Ansehung der Wirklichkeit ihrer Gegenstände ist also das Leben. Diese Caußalitaet der Vorstellungen ist nun in Ansehung des Subiects das Gefühl der Lust oder Unlust. In Ansehung des Obiects aber das Begehrungs Vermögen).",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s18-003",
     "kind": "text",
     "aa": 894,
     "text": "Lust ist die Vorstellung von der Uebereinstimmung eines Gegenstandes mit der productiven Kraft der Seele, und Unlust das Gegentheil. Das Begehrungs Vermögen ist die Caußalitaet des Gegenstandes, der hervorgebracht wird. Demnach ist Lust die Ueberein-Stimmung, und Unlust der Wiederstreit mit unserem Begehrungs Vermögen. Lust ist nun aber auch das Gefühl von der Beförderung des Lebens, und woher das? — Daher. Ein Ding lebt, wenn es ein Vermögen hat, sich nach Willkühr zu bewegen. Leben ist also das Vermögen, nach Willkühr oder nach seinen Begierden zu handeln. Dieses ist nun aber das Begehrungs Vermögen, practisch genommen. Da Lust also Uebereinstimmung mit dem Begehrungs Vermögen ist, so ist es auch Uebereinstimmung mit dem Leben, und Unlust Wiederstreit mit dem Leben. Lust und Unlust aber setzen Empfindung voraus. Demnach kann ich auch sagen : Lust und Unlust ist ein Gefühl von der Uebereinstimmung und dem Wiederstreit oder, welches einerlei ist, von der Beförderung oder dem Hinderniß des Lebens. Alle Begierden gehen immer auf etwas künftiges. Alle Begierden sind, so wie Lust und Unlust, intellectuell oder sensitiv. —",
     "dehyphenated": 9,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s18-004",
     "kind": "text",
     "aa": 895,
     "text": "Dasienige, was die Ursache der Begierde ist, ist caußa impulsiva oder Elater animi. Sind sie nun aus der Sinnlichkeit entstanden, so heißen sie Stimuli und ihre Wirkung appetitio per stimulos oder sinnliche Begierde. Entspringen sie aber aus dem Verstände, so heißen sie motiva, ihre Wirkung appetitio per motiva oder intellectuelle Begierden.",
     "dehyphenated": 1,
     "ocrConf": 71
    },
    {
     "id": "metaphysik-mrongovius-s18-005",
     "kind": "text",
     "aa": 895,
     "aaEnd": 896,
     "pages": [
      {
       "p": 896,
       "i": 2146
      }
     ],
     "ms": [
      {
       "p": 200,
       "i": 869
      }
     ],
     "text": "Aus dem Angenehmen entspringen die Stimuli, weil dieses für die Sinne ist und es bloß ein Privat-Urtheil ist. Das Schöne und Gute ist intellectuell, weil ihr Urtheil logisch ist, daher auch die Quelle der motive oder Bewegungs Gründe. Die Begierden sind ferner müßige (otiosae) wenn die Gegenstände nicht in unserer Gewalt stehen. Sie heißen auch phantastische und contemplative Begierden, z.E. wenn wir wünschen, dieses Jahr einen Cometen zu sehen, so haben wir müßige Begierden, so auch die Romanleser (beim Affect ist ein Gefühl größer als alle übrigen, und so auch bei der Leidenschaft eine Neigung. Das Bewußtsein der Uebereinstimmung aller unsrer Neigungen ist Zufriedenheit. Affekten zerstören die Annehmlichkeit. Leidenschaften die Zwecke.). Wir begehren oft was, ehe wir noch sehen, ob es uns zu erlangen möglich ist. Warum aber hat uns das die Natur gegeben? Um uns desto mehr zur Thätigkeit zu ermuntern. Denn dadurch werden wir angetrieben, recht zu untersuchen, ob sie nicht in unsrer Gewalt stehen; finden wir aber, daß sie nicht in unsrer Gewalt stehen, und wir hegen die Begierden doch noch, so handeln wir unnatürlich und ungereimt. Wir haben auch ein contemplatives Wohlgefallen, denn es geschehen viele Dinge, an denen wir uns vergnügen, ohne daß sie in unsrer Gewalt stehen. Dieses findet immer statt — aber müßige Begierden nicht. Die Thiere haben keine müßigen Begierden, denn wenn sie ihre Kräfte auch vergeblich anwenden, so wißen sie doch nicht, daß das Ding nicht in ihrer Gewalt ist. Den müßigen Begierden sind die practischen entgegengesetzt. Diese sind Begierden zu solchen Dingen, die in unsrer Gewalt stehen. Sind die Stimuli habituell geworden, so sind sie Neigungen, und die Quelle derselben Instinct oder Gewohnheit habituelle sinnliche Begierden sind Leidenschaften. Sie betreffen als Begierden und Affecten die Empfindung. Dort ist das Subiect nicht fähig, die Neigung zu einem Obiect mit der Summe aller Neigungen zu vergleichen ; hier nicht eine Emphndung mit der Summe aller zu vergleichen. Der Autor erklärt unbestimmt den Affect durch höheren Grad der Lust oder Llnlust. Die Harmonie des untern und obern Begehrungs Vermögens muß negativ sein, nehmlich so, daß das untere dem oberen kein Hinderniß in den Weg legt. Harum müßen die caußae impulsivae zur Tugend nicht von sinnlichen Vortheilen hergenommen werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s18-006",
     "kind": "text",
     "aa": 896,
     "text": "Von der Willkühr",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s18-007",
     "kind": "text",
     "aa": 896,
     "text": "Has Vermögen, prac tisch zu begehren oder Facultas appetitionum practicarum ist arbitrium. Das arbitrium oder die Willkühr ist entweder sensitivum, welches uns Dinge vorstellt, die den Sinnen angenehm sind, oder intellectuale — Dinge, die der Verstand billigt. Besser wird aber das arbitrium in brutum und liberum eingetheilt. Brutum ist das, welches von stimulis determinirt oder neceßitirt wird, und liberum, das durch motiva determinirt wird; ienes haben die Thiere, dieses die Menschen, daher heißt es auch humanum. Der Mensch kann wohl von stimulis afficirt, aber nicht neceßitirt werden, denn er ist unabhängig von den stimulis.",
     "dehyphenated": 2,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s19",
   "title": "Von der Freiheit",
   "titleSrc": "heading",
   "headings": [
    "Von der Freiheit"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s19-001",
     "kind": "heading",
     "aa": 896,
     "text": "Von der Freiheit"
    },
    {
     "id": "metaphysik-mrongovius-s19-002",
     "kind": "text",
     "aa": 896,
     "aaEnd": 897,
     "pages": [
      {
       "p": 897,
       "i": 1258
      }
     ],
     "ms": [
      {
       "p": 201,
       "i": 839
      }
     ],
     "text": "Das arbitrium liberum wird per motiva determinirt. Da diese bloß aus dem Verstände herkommen, so sind sie caußae impulsivae intellectuales. Diese sind die Begriffe des Guten. Arbitrium liberum ist voluntas. Die Freiheit ist also ein Vermögen, nach Begriffen des Guten und Bösen zu handeln (bei einer Reinen Intelligenz ist die obiective Neceßitaet zugleich die Subiective. So ist es bei Gott). Das ist der positive Begriff derselben im practischen Verstände. Negative ist sie das Vermögen, unabhängig von den sinnlichen Anreitzungen zu wählen in eben dem Verstände; wir sind also wohl frei von stimulis, aber nicht von motivis. Diese kann das obere Begehrungs Vermögen heißen, weil die Regeln derselben (die Begriffe des Guten) allgemein sind. (Was durch Motiven determinirt wird, ist Zweck, was dem Entschluß vorhergeht, die Ueberlegung. Nihil appeto nisi sub ratione boni — et nihil nisi sub ratione mali ist als Grundsatz zwar gut, als Erfahrungs Satz aber falsch, denn unter der Vorstellung des Angenehmen bezeichne ich oft das Böse, und unter der Vorstellung des Unangenehmen verwerfe ich das Gute). Woraus wissen wir, daß der Wille frei sei? — Freiheit ist nicht eine Eigenschaft, die wir aus der Erfahrung erlernen; denn wir können nichts negatives erfahren. Wir thun zwar viele Handlungen, bei denen wir wieder alle stimulos zu handlen scheinen, aber wir könnens daraus noch nicht schließen — denn es kann uns doch ein geheimer Stimulus dazu angetrieben haben, z.E. wenn ein Verbrecher trotz der Tortur und allen Qualen nicht bekennt, so handelt er zwar allen stimulos entgegen, aber doch einem Stimulus zu Gunst, nehmlich der Furcht vorm Tode. Der Schluß also, weil ich keine stimulos bemerke, so sind auch keine, kann demnach sehr unsicher sein.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s19-003",
     "kind": "text",
     "aa": 897,
     "aaEnd": 898,
     "pages": [
      {
       "p": 898,
       "i": 2026
      }
     ],
     "ms": [
      {
       "p": 202,
       "i": 2026
      }
     ],
     "text": "Wir selbst sind uns auch unmittelbar der Freiheit nicht bewußt. Wir sind uns nur der Triebfedern oder stimulorum bewußt, welche klare Vorstellungen sind. Wir können ia aber auch dunkle Vorstellungen haben und Stimuli zu etwas, deren wir uns also nicht bewußt sind (alle unsre Handlungen sind actiones voluntariae, aber diese sind wieder entweder libentes (Handlungen, die gern geschehen), wenn wir uns keiner Begierde zum Gegentheil bewußt sind, oder invitae, sofern wir uns dabei eines oder mehrerer Gründe zum Gegentheil bewußt sind. Diese sind aus appetitio und aversatio zusammengesetzt, nur daß die erstere stärker ist. Zwang, Coactio, ist neceßiatatio actionis invitae. Sie ist entweder in se ipsum oder ab alio. Sie kann physisch oder moralisch sein. Physisch ist sie entweder durch illecebras oder minas. Durch illecebras ist eigentlich kein Zwang, sondern Nöthigung, z.E. der Hunger ist illecebra des Diebes zum Stehlen. Physischer Zwang ohne illecebras, und minas ist extorsio. Der Zwang ist nicht neceßitatio arbitrii sensitivi, sondern intellectualis ; denn wäre er neceßitatio per stimulos, so wäre der Mensch ein Thier. So aber kann der Mensch durch Vernunft sich immer auch bei der stärksten physischen Nöthigung ein Uebergewicht über die sensitiven Vorstellungen geben. Das heißt: Voluntas non potest cogi physice, sed semet ipsam cogere potest volendi. So können wir andre zwingen, wenn wir ihnen Motiva vorstellen, welche sie bewegen, daß sie sich selbst zwingen. Neceßitatio actionis mvicem moraliter bonae est obligatio, das ist der practische Zwang. Wäre der practische oder auch obiective Zwang bei dem Menschen zugleich immer subiectiv, so wäre er vollkommen frei. Die moralische Verbindlichkeit kann nur gedacht werden in Beziehung auf eine sinnliche Willkühr, die durch stimulos afficirt wird. Bei Thieren giebts daher keine moralische Verbindlichkeit, aber viel Nothwendigkeit. Jedes erschaffene Wesen, es sei auch noch so vollkommen, hat moralische Verbindlichkeit. Denn sie haben alle Bedürfnisse, welche gewisse Stimuli geben, mit denen sie zu kämpfen haben. Der Mensch hat daher nicht Heiligkeit, aber Tugend. Wir können wohl Wohlgefallen am Gegenstand haben, nur es fehlt uns ein elater animi, diese sind also nicht die Ursachen der Lust oder Unlust. Wenn das Wohlgefallen mit meinem Zustand zusammenhängt, denn wird mir die Existenz des Objects nicht gleichgültig sein, d. i. ich werde Intereße daran haben. Bei der Tugend müssen wir daher auch Intereße haben. Die Moralisten sind aber über die Triebfedern derselben uneinig).",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s19-004",
     "kind": "text",
     "aa": 898,
     "text": "Die Freiheit, ist eine bloße Idee, und dieser Idee gemäß handeln, heißt frei sein im practischen Verstände. Die praktische Nothwendigkeit ist objectiv und nicht subiectiv. Hier muß ich etwas thun; aber die Natur Nothwendigkeit durch stimulos sagt nur; es wird geschehen. Practisch nothwendig ist das, ohne welches unsre Handlungen nicht statt finden, nehmlich ohne Gesetze des Verstandes und der Vernunft. Die Freiheit ist also practisch nothwendig — der Mensch muß also nach einer Idee von Freiheit handeln, und anders kann er nicht. Das beweist aber noch nicht die Freiheit im Theoretischen Verstand. Hiedurch fallen alle Schwierigkeiten und Wiedersprüche weg, welche der Begriff der Freiheit verursacht hat. Man mag die Freiheit im theoretischen Verstände beweisen oder auch wiederlegen, wie man will, genug, man wird doch immer nach Ideen der Freiheit handeln. Es geben viele Leute gewisse Sätze in der Speculation nicht zu, aber sie handeln doch darnach.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s19-005",
     "kind": "text",
     "aa": 898,
     "aaEnd": 901,
     "pages": [
      {
       "p": 899,
       "i": 979
      },
      {
       "p": 900,
       "i": 3540
      },
      {
       "p": 901,
       "i": 6091
      }
     ],
     "ms": [
      {
       "p": 203,
       "i": 1221
      },
      {
       "p": 204,
       "i": 4055
      }
     ],
     "text": "Freiheit ist bloß das Vermögen, nach dem arbitrio intellectuali zu handeln, und nicht das arbitrium selbst. Die caußae impulsivae intellectuales sind entweder secundum quid oder simpliciter talis. Caußa impulsiva secundum quid ist, wenn ich bloß ein gutes Mittel wähle, um meinen Zweck zu erreichen, der von einem Stimulo herrührt, z.E. wenn iemancl ein Buch schreibt, so giebt er gemeiniglich vor, es aus Wahrheits Liebe zu thun, ob er es gleich oft darum thut, um Geld zu verdienen. Das Mittel, was er braucht, nähmlich ein gutes Buch zu schreiben, ist gut. Er muß viel Stimulos, als nähmlich die Liebe zur Faulheit, überwinden, er kann der Welt auch nützen, aber seine Absicht ist doch nicht intellektuell, sondern sinnlich. Künftiges Wohlleben war sein Zweck; dies war also caußa impulsiva secundum quid. Wenn aber iemand aus bloßer Wahrheits Liebe ein Buch schreibt und es erst nach seinem Tode bekannt machen läßt, wo er keinen Nutzen mehr von der Welt zu hoffen hat, dann ist sein Zwek gut und die caußa impulsiva intellectualis. Diese hängt von keinem andern stimulo ab. Die Moral hat solche simpliciter intellectuale Gesetze, und bei der Moral muß dennoch die Freiheit vorausgesetzt werden. Alle Menschen wählen gute Mittel, die Absicht mag sein, welche sie will. Sie verfahren klüglich, indem ihre Begierden immer auf etwas Gutes, aber bloß als ein Mittel, die Absicht mag sein, welche sie will, zu einem sinnlichen Zwek gehen. Den Zwek sieht er als angenehm, das Mittel durch Verstand und Vernunft als gut ein. Hier handelt er immer secundum quid, das arbitrium ist bloß intellectuell, wenn es simpliciter tale ist. Nicht die Mittel, sondern, die Zweke bestimmen die Begierden. Wenn die Vernunft das, was wirklich gut ist, ausmacht, oder die Zwecke angiebt, so besorgt sie ihr Intereße und ist Domina. Erfindet sie bloß ein gutes Mittel zum besten des Zweks, der aus Neigung entspringt, so besorgt sie bloß das Intereße der Neigung und ist die Serua. Sie ist denn nicht Triebfeder, sondern die Neigung. Das arbitrium sirnul intellectuale ist auch purum, denn da findet bloß die Vernunft statt. Wo aber Vernunft und Sinnlichkeit regiert, und diese die Beherrscherin ist, da ist arbitrium sensitivum oder impurum, denn die caußa impulsiva liegt ia in der Sinnlichkeit. Und da Zwek mehr als Mittel ist, so geschieht a potiori denominatio. Glrikseeligkeit hat zweierlei Bedeutungen: 1. die Summe aller angenehmen Empfindungen. Diese können wir aber nicht bestimmen. 2. die Befriedigung aller gegenwärtigen Neigungen. Wenn die Absicht unserer Handlungen bloß Glückseeligkeit und Befriedigung aller unserer sinnlichen Neigungen ist, so ist unser arbitrium bloß sensitivum. Das ist also nicht Tugend, wenn wir gute Handlungen gewisser Vortheile wegen ausüben, z. E. wenn ein Bürger seine Pflicht thut, weil er Strafe fürchtet, sondern wenn wir das Gute darum thun, weil wir einsehen, daß es gut und unsre Pflicht ist. Hier handlen wir intellectuell, dort aber sinnlich. Arbitrium intellectuale oder strictius sic dictum oder arbitrium purum. So ist Freiheit das Vermögen, das zu wählen, was an sich und nicht bloß als Mittel gut ist. Wir sind also frei, wenn wir unsere Handlungen ganz nach den Gesetzen des Verstandes und der Vernunft einrichten, und le mehr wir dies thun, desto freier sind wir. Denn ist gleich der Wille von den Stimulis frei, so kann er doch nicht ganz frei sein. Denn da wir bloß das begehren, was uns gefällt, so ist das Gefallen die Ursache unseres Begehrens. Die Ursache des Gefallens aber ist entweder Sinnlichkeit oder Verstand. Kein 3tes ist möglich. Wenn ich also nicht aus Sinnlichkeit etwas begehre, so muß ichs darum begehren, weil es meinem Verstände gefällt. Würde ich aber weder nach Verstand noch Sinnlichkeit begehren, so würde ich das wollen, was mir mißfällt, ich würde ohne Triebfeder und Ursache handeln, und das ist unmöglich. Verstand und Vernunft geben dem Willen Gesetze, nach denen er sich richten muß, wenn er frei sein soll. Aber durch bloße Vorstellungen der Vernunft können wir nicht bestimmt werden; sie muß uns auch Triebfedern geben, und diese giebt sie uns auch, indem unser Gewissen billigt oder mißbilligt. Denn wenn wir ihr folgen, so können wir ein ruhiges Gewissen und alle geistige Glückseeligkeit erlangen. Sie übt hier nicht allein vim legislatoriam, sondern auch executivam aus. Ihr zu Folge ists also nicht allein objectiv nothwendig, sondern auch subiectiv möglich. Der Mensch ist deß wegen doch frei, denn er kann unter Sinnlichkeit und Verstand wählen; würde er aber nach Sinnlichkeit handeln, so würde er den Thieren gleich werden. Vernunft aber erhebt ihn über die Thiere, und ie mehr er nach derselben handelt, desto moralischer und zugleich desto freier wird er. Denn Moral ist Wissenschaft von dem was gut ist, sonst würde der Begriff der Freiheit überflüßig, wenn keine Moral wäre; und denn wäre auch die Vernunft überflüßig. Denn sie ist bloß um der Moralitaet der Gesetze willen da. Das Feld der Moralitaet ist entweder durch Neigungen afficirt oder nicht. Beides ist arbitrium liberum. Denn wir haben doch auch da die Freiheit, nach dem Verstände zu handeln. Das arbitrium intellectuale ist, wenn wir unabhängig von Neigungen handeln, ob wir sie gleich haben. Und nun können wir überlegen, ob wir ihnen folgen sollen oder nicht. Wir sind nur frei, um den Gesetzen der Sittlichkeit zu folgen. Denn sonst dürften wir keine Vernunft haben. So lange haben wrir von der kieiheit im practischen Verstände geredet. Die Freiheit aber im transcendentalen Verstände ist ein Vermögen, sich selbst zu bestimmen unabhängig von allen entfernten oder Natur Ursachen. Hier ist wieder eine Autonomie der Vernunft. Denn ich mag dies oder das Gegentheil annehmen, so verliere ich mich in Wiedersprüche. Die Sinnlichkeit ist durch Obiecte bestimmt; diese durch Gesetze der Natur und diese durch Gott. Daher bestimmt Gott unsere Sinnlichkeit und wir sind nicht transcendentaliter frei. Nehmen wir aber an, daß alles bloß nach Noth Wendigkeit geschehe, so kommen wir nie zum ersten, und dann können wir auch fragen, wodurch ist Gott bestimmt. Alle diese speculative Betrachtungen der Widersprüche schaden aber nicht dem practischen Begriff der Freiheit. Denn dieser sieht nicht, wie etwas geschieht, sondern daß es geschehen soll, und sollen setzt Freiheit voraus. Wenn wir beim Gebrauch unseres Willens bloß auf die empirische Glückseeligkeit Rücksicht nehmen, dann bestimmt die Vernunft nicht durch den Begriff des höchsten Guten, sondern durch den Begriff der höchsten Annehmlichkeit. Da regiert die Neigung, bestimmt den Zwek, und Vernunft ist der Sclave, der die Mittel herbei schaffen muß. In der Moral aber heißt es, die Sinne sollen nicht raisonniren, bloß die Vernunft muß Herr sein. Denn die Begierden kann ich nicht ganz erfüllen, es entstehen immer neue. — Aber das höchste Gut kann ich erreichen. Daher muß der Begriff eines arbitrii intellectualis nothwendig zum Grunde liegen, und sie selbst muß für ieden Menschen wichtig sein.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 17,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s20",
   "title": "Von Gleichgültigkeit und Gleichgewicht.",
   "titleSrc": "heading",
   "headings": [
    "Von Gleichgültigkeit und Gleichgewicht."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s20-001",
     "kind": "heading",
     "aa": 901,
     "text": "Von Gleichgültigkeit und Gleichgewicht."
    },
    {
     "id": "metaphysik-mrongovius-s20-002",
     "kind": "text",
     "aa": 901,
     "text": "Gleich gültig ist uns das, wobei wir weder angenehme noch unangenehme Empfindungen haben, also soviel als Unempfindlichkeit. Wir sind auch gleichgültig, wenn wir etwas weder begehren noch verabscheuen. Gleich aber ist das, was wir gleich begehren und verabscheuen, oder zu dessen Ausübung wir gleiche Gründe und Gegengründe haben.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s20-003",
     "kind": "text",
     "aa": 901,
     "aaEnd": 902,
     "pages": [
      {
       "p": 902,
       "i": 1044
      }
     ],
     "ms": [
      {
       "p": 205,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Man will durch das Vermögen, gleichgültige Dinge zu wählen, beweisen, daß Freiheit eine Gesetzlosigkeit von allen Triebfedern sei. Aber libertas indifferentiae ist ein Unding. Denn was mir nicht gefällt, kann ich auch nicht wollen, ich bleibe also in demselben Zustand. Das Aequilibrium oder die Gleichheit ist, wenn wir etwas gleich begehren und verabscheuen : dies findt aber beim Menschen selten statt. Wir finden ein gänzliches aequilibrium nicht einmal bei den Wageschalen. Das aequilibrium kann entweder sein 1. aequilibrium stimulorum : wenn die Triebfedern der Sinnlichkeit auf beiden Seiten gleich sind. Hier, sagt man, wird der Mensch doch eins von beiden thun und wählen können, und also frei handeln. Aber nein, er wird dann vielmehr keines von beiden thun und die Handlung unterlaßen. Dieses Unterlaßen ist auch Gleichgewicht, oder es bleibt ihm noch immer übrig, sich durch die Vernunft zu ändern und zu bestimmen, z.E. wenn iemand für etwas Bestimmtes zu thun die Willkühr gelaßen wird, entweder 5 rthl. oder einen Friednchsd’or zu nehmen, so ist er in Ansehung dessen, was er nehmen soll, in statu aequilibri. Aber er darf keinen davon nehmen, wenn er redlich handlen will.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-mrongovius-s20-004",
     "kind": "text",
     "aa": 902,
     "aaEnd": 903,
     "pages": [
      {
       "p": 903,
       "i": 2362
      }
     ],
     "ms": [
      {
       "p": 206,
       "i": 1994,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "2. Aequilibrium motivorum. Aber hier kann nie völlige Gleichheit statt, finden. Wäre volle Gleichheit, so könnte er nicht wählen; denn wenn kein Grund ist, so ist auch keine Wahl, oder man kann auch die Handlung unterlassen. Es ist keine völlige Gleichheit, denn wenn gleich die obiectiven Gründe von beiden Seiten gleich stark sind, so können auf der einen Seite noch besondre subiective Gründe hinzu kommen, die derselben ein Übergewicht geben, z.E. wenn mir die Freiheit gegeben wird, von 2 sich einander ganz gleichen Ducaten einen zu wählen, so würden darinn die obiectiven Triebfedern zu beiden Seiten gleich stark sein. Ich würde mich also eine Weile bedenken, welchen ich nehmen sollte, bis endlich eine subiective Triebfeder, die Habsucht oder auch die Ungeduld, so lange zu säumen, mich so reitzen würde, daß ich den ersten besten, der mir dann in die Augen fiele, nehmen würde, oder ich würde auch aus Bequemlichkeit den, der mir am nächsten wäre, nehmen. So sieht man also, daß eine subiective Ursache, dergleichen nach der jedesmaligen Beschaffenheit unseres Gemüths unzählige sein können, die uns oft dunkel bleiben und ins geheim wirken mögen, dem Obiect den Ausschlag geben muß. Sonst wird der Mensch beim völligen Aequilibrium nichts wählen können. Liberias aequilibrium ist also nichts. Denn wir handeln hier doch immer nach der größeren Menge der Triebfedern und also nicht nach eigenem Dünkel. Endlich hat man darin den Begriff wahrer Freiheit gesetzt, daß man gemeinhin dies wählen könne, wozu uns caußae impulsivae treiben. Dieses heißt libertas contrarietalis. Aber das kommt daher, weil man sich den Begriff der I reiheit bloß negative gedacht hat. Aber wir müssen doch einen positiven Begriff von ihr haben, sonst haben wir gar keinen Begriff. Der positive Begriff ist das Vermögen, nach Begriffen des Guten und Bösen zu handlen. — Weil die Freiheit den physischen Gesetzen oder den Gesetzen der Sinnlichkeit nicht unterworfen ist, so glaubt man, sie sei keinem Gesetz unterworfen. Aber das ist zu weit geschloffen. Daß wir von den Gesetzen der Sinnlichkeit frei sind, ist unser praerogativ. Die Thiere sind es nicht, daher sind sie bloß paßiv. Denn sind wir nicht paßiv, wenn wir nach Gesetzen des Verstandes handeln, weil diese ia von uns selbst herkommen. Wir werden also von niemandem bestimmt, sondern bestimmen uns selbst und also haben wir Spontaneitaet. Da hier unsre eigene Vernunft die Triebfeder der Gesetze ist, so sind wir ia frei, da wir uns selbst beherrschen. Freiheit ist also gar kein Vermögen, das Böse zu wählen, sondern das Gute, weil uns unsre Vernunft bloß das Gute gebietet. Wenn wir von den stimulis frei sind, so müßen wir doch einen Bewegungs Grund haben, wornach wir uns richten können. Denn ohne Bewegungs Grund zu handeln, wäre für uns gar kein praerogativ, sondern eine Schande. Denn was würde man von dem Menschen halten, der, um seine Freiheit zu zeigen, sich mit schönen Kleidern im Rinnstein wälzte. Die libertas contrarietatis ist bloß ein eingebildeter Traum, denn bei allen unseren Handlungen werden wir doch finden, daß sie aus Ursachen geschehen, und es wäre auch contradictorisch, das, was mir im höchsten Grade wohlgefällt, nicht zu wollen, sondern das Gegentheil. Das Gute ist immer das, was ieder Mensch will, und er würde es auch immer thun, wenn es ihm nur nicht schwer würde, es auszuüben, und wenn unsre Natur so beschaffen wäre, daß wir immer nach dem Begriff des guten handelten, so wären wir recht frei. Weil aber die Vernunft von immer andern Ursachen herkommt, so ist der Mensch bloß frei secundum quid. Man macht noch den Einwurf, wenn man sagt: Ein so erschaffenes Wesen, das nach seiner Natur nichts als Gutes thun kann, ist nicht frei. Denn es könnte denn nicht lügen und müßte denn die Wahrheit reden, wäre demnach gezwungen und nicht frei. Man kann darauf antworten: Es stehe in seiner Kraft, oder es sei physisch möglich, daß er lügen könnte, aber er wolle nie lügen. Doch ist ein so erschaffener Geist durch die oberste Ursache eingeschränkt und handelt wie eine Uhr. Alle diese Streitigkeiten über den transcendentalen Begriff der Freiheit haben auf das Practische keinen Einfluß. Denn da sehe ich nicht auf die oberste Ursache, sondern auf den letzten Zweck.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 10,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s21",
   "title": "Zweiter Abschnitt Rationale Psychologie Einteilung",
   "titleSrc": "heading",
   "headings": [
    "Zweiter Abschnitt Rationale Psychologie",
    "Einteilung"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s21-001",
     "kind": "heading",
     "aa": 903,
     "text": "Zweiter Abschnitt Rationale Psychologie Einteilung"
    },
    {
     "id": "metaphysik-mrongovius-s21-002",
     "kind": "text",
     "aa": 903,
     "aaEnd": 904,
     "pages": [
      {
       "p": 904,
       "i": 330
      }
     ],
     "text": "Diese soll ganz unabhängig von empirischen Principien bloß a priori abgeleitet werden. Hier haben wir 3erlei zu beobachten: 1. die transcendentalen Praedicate der Seele, ob sie Substanz und beharrlieh, endlich oder unendlich sei etc., 2. die Seele in Vergleichung mit andern Wesen, und zwar a in der Vergleichung mit der Materie, b in Vergleichung mit andern denkenden Wesen, 3. die Verknüpfung der Seele mit andern Wesen, a mit dem Leibe, b mit der Welt vermittelst des Leibes. Diese Verknüpfung heißt commercium animae et corporis und macht das Leben aus. Also a Möglichkeit des Lebens, b der Anfang desselben, c das Ende oder der Tod, d demnach der Zustand nach dem Tode, die Unsterblichkeit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s22",
   "title": "Von der Natur der Menschlichen Seele",
   "titleSrc": "heading",
   "headings": [
    "Von der Natur der Menschlichen Seele"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s22-001",
     "kind": "heading",
     "aa": 904,
     "text": "Von der Natur der Menschlichen Seele"
    },
    {
     "id": "metaphysik-mrongovius-s22-002",
     "kind": "text",
     "aa": 904,
     "ms": [
      {
       "p": 207,
       "i": 227,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Hier handlen wir von den transcendentalen Praedicaten der Menschlichen Seele. Hier frägts sich 1. Ist sie materiell oder immateriell? Das Ich ist schon ein Merkmal des immateriellen der Menschlichen Seele. Das Ich ist durchaus ein Gegenstand des innern Sinnes, und alles was ich von mir selbet mir bewußt bin, ist blos Gegenstand des innern Sinnes. Alle Bemühungen sind daher umsonst, die Vermögen der Seele durch körperliche Anschauung deutlich machen zu wollen. Wir finden nicht die geringste Analogie zwischen Denken und Materie.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s22-003",
     "kind": "text",
     "aa": 904,
     "aaEnd": 906,
     "pages": [
      {
       "p": 905,
       "i": 1361
      },
      {
       "p": 906,
       "i": 3895
      }
     ],
     "ms": [
      {
       "p": 208,
       "i": 2439
      }
     ],
     "text": "2. Die Seele ist Substanz, und nicht allein das, sondern ich bin mir auch des Substantialen der Seele bewußt. Denn von der Materie sind mir nur die Accidentien bekannt, das Substantiale aber nicht. Ich bin das letzte Subject und erkenne mich ohne Accidentien. Vom Substantialen aber sowohl im Körper als in mir habe ich eigentlich keinen Begriff; nichts weiß ich davon, als daß es ein Etwas ist. Jetzt kömnits nur darauf an, aus diesem sterilen Begriff von Etwas die Eigenschaften der Seele herzuleiten. Auf demselben soll die ganze rational Theologie gebaut werden ; wir sehen es leicht ein, daß das unmöglich ist, denn aus dem Begriff von Etwas läßt sich nichts begreifen. Daß die Seele eine Substanz sei, können wir aus ihrer Beharrlichkeit nicht beweisen. Denn woher wissen wir diese? Das ist Substanz, was unter allen Veränderungen dennoch bleibt. Von der Seele haben wir Erfahrung über sich, Erfahrung voraus bis in den Tod. Ob sie noch nach dem Tode bleiben werde, weiß ich nicht. Wenn wir also die Seele eine Substanz nennen, so können wir nichts mehr sagen, als daß Substanz hier eine logische Function sei — nemlich das Subiect und nicht das Praedicat. Betrachte ich dieses Subiect allein ohne alle Praedicate, so betrachte ich das Substantiale oder das Etwas. Daraus alle Eigenschaften herauszuklauben, ist nicht möglich. Können wir aber keine neuen Eigenschaften entdecken, so können wir doch falsche Schlüsse und Irrthümer vermeiden. So kann ich z.E. aus dem engen Begriff eines Subiects, aus dem Ich, ausmachen, daß die Seele kein Compositum sei. — Das Ich ist das letzte Subiect. Niemals aber ist das letzte Subject zusammengesetzt. Die Seele erkennen wir ferner durch lauter solche Praedicate, von denen kein einziges durch sinnliche Anschauung erkannt werden kann. Es sind bloß Objecte der innern Anschauung. Die Materie aber als Object der äußern Anschauung erkennen wir an ihrer Ausdehnung und an ihrer Figur. Das Denken macht keine Ausdehnung, keine Figur. — Die Seele muß daher auch was anderes sein als Materie. Hat diese Untersuchung keinen positiven Nutzen, so hat sie doch einen negativen, welcher darin besteht, daß wir nicht in die Fehler der Materialisten fallen und die Handlungen der Seele physico mechanisch erklären. Der Materialist begeht hier wirklich peTocßamv eiq aXXo yivoc,. Daß die Seele nicht Materie ist, kann deutlich ausgemacht werden; das kann aber noch sein, daß das substratum der Materie mit dem substrato der Seele gleich sei. Doch sind die Phaenomena verschieden. — Man beweist die Einfachheit der Seele und also ihre Immaterialitaet nach folgender Gestalt. Sollte nehmlich die Seele zusammengesetzt sein, so müßten ihre Vorstellungen so getheilt sein, daß in iedem Thei! der Seele eine Vorstellung wäre, die zusammen genommen die ganze Vorstellung ausmachen (Bei einem ieden Gedanken ist eine Einheit des Bewußtseins, immer dasselbe Ich, welches daher auch Einheit des Subiects voraussetzt). Das wäre so, als wenn in einer Gesellschaft von meinen Gedanken von iedwedem Gliede der Gesellschaft ein Wort gesagt würde. Unmöglich kann aber auf diese Art der ganze Gedanke entstehen und ich mir deßelben bewußt sein, sondern es muß denn ein Subiect wieder sein, das alle Theile des Gedankens zusammenfaßt und sich so den ganzen Gedanken bildet. Kann nun aber aus der Einfachheit der menschlichen Seele nicht auf ihre Beharrlichkeit geschlossen werden, wie Mendelssohn meint? Wenn wir uns kein anderes Vergehen denken könnten als durch Zertheilung, dann wäre dieser Beweis für die Beharrlichkeit und Unsterblichkeit der Seele unwiederleglich. Es ist aber noch ein anderes Vergehen der Seele möglich, nehmlich durch Evanescenz. — Ihre Reahtaet kann immer kleiner werden, bis sie verschwindt. Die Seele ist nicht Materie, deswegen kann sie doch materiell sein, d. i. das substratum der Seele: das Ich, das letzte Subiect, kann mit dem Substratum der n* Materie von gleichem Inhalte sein und hätte das Substratum der Materie werden können. So dachte Leibnitz, und auf den Gedanken brachte ihn die Monadologie. Weil er nehmlich glaubte, daß alle Monaden vires repraesentativas hätten und die Seele auch vim repraesentativam hätte und eine Monade wäre, so hielt er beides für einerlei. Wir haben aber nicht die geringste Ursache, anzunehmen, daß die Seele materiell sei, da das Denken von allen Accidentien der Materie ganz verschieden ist, und sehen nicht ein, warum wir etwas annehmen sollen, wozu wir keinen Grund haben. Daher sagen wir, die Seele ist immateriell oder pneumatisch, obgleich wir dieses nicht beweisen können. Es folgt aber daraus das nicht, was eine nothwendige Folge der Leibnitzschen Monadologie war, daß nehmlich durch Zusammensetzung vieler Seelen endlich ein Compositum, eine Erscheinung, entstehen möchte. Der Autor erklärt animam durch vim repraesentativam. Das ist aber falsch; denn hieraus folgt, daß die Seele nur eine Grund Kraft sein könne. Mehrere Grund Kräfte würden auch mehrere Seelen ausmachen. Demnach ists besser: anima est vis repraesentationis. Denn anima ist nicht einerlei mit vis, denn vis ist der effectus der Seele auf eine Caußalitaet. —",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s22-004",
     "kind": "text",
     "aa": 906,
     "ms": [
      {
       "p": 209,
       "i": 0
      }
     ],
     "text": "Von den Seelen der Thiere",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s22-005",
     "kind": "text",
     "aa": 906,
     "aaEnd": 907,
     "pages": [
      {
       "p": 907,
       "i": 1088
      }
     ],
     "text": "Wir kommen nun zu dem zweiten Stück der rationalen Psychologie, nehmlich zur Vergleichung der Seele mit anderen Wesen. — Wir können uns Wesen denken, die nur das untere Erkenntniß Vermögen haben und denen das obere gänzlich fehlt. Diese nennen wir substantias brutas. Haben Thiere nicht das obere Erkenntniß Vermögen, oder ist es nur in ihnen bloß vergraben? Daß sie es nicht haben, können wir nicht demonstriren. Warum aber sollen wir zur Erklärung gewisser Erscheinungen mehr annehmen, als nöthig ist. — Daher nehmen wir an, daß Thiere in Ewigkeit fortdauren und an ihren Kräften wachsen können und doch nicht Verstand bekommen werden, weil dann zu ihrer Sinnlichkeit ein wesentliches Stück dazu kommen muß, wodurch nur eben der Verstand möglich ist, nehmlich Apperception. Vielleicht dauren Thier Seelen in Ewigkeit und stehen so wie in diesem Leben auch im künftigen dem Menschen zum Dienst. Sie werden aber doch nie Menschen Seelen werden, weil sie nicht, wie Meier glaubt, bloß dem Grad, sondern der Art nach von dem Menschen verschieden sind. Es läßt sich aber leicht denken, daß, da itzt die Thiere ein Theil der Menschen Bedürfnisse sind, auch in ienein Leben, wenn der Mensch vollkommen sein wird, vollkommenere Thiere sein werden, die ihm dienen werden. Inzwischen bleiben dieses immer bloße Phantasien. So wie die verschiedenen Meinungen und Schwärmereyen von höhern Wesen als der Mensch ist. Wenn es auch solche giebt, so ist der Mensch nichts weniger als sie, denn das vernünftige Wesen ist selbst Zweck und der Glückseligkeit fähig, wenn es sich ihrer würdig macht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s22-006",
     "kind": "text",
     "aa": 907,
     "text": "Psychologische Systeme des Commerciums der Seele mit dem Körper",
     "joined": [
      "inferred"
     ],
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s22-007",
     "kind": "text",
     "aa": 907,
     "aaEnd": 909,
     "pages": [
      {
       "p": 908,
       "i": 1706
      },
      {
       "p": 909,
       "i": 4240
      }
     ],
     "ms": [
      {
       "p": 210,
       "i": 1157
      },
      {
       "p": 211,
       "i": 4077
      }
     ],
     "text": "Wir kommen nun zum 3ten Stück der rationalen Psychologie, nehmlich zur Verknüpfung der Seele mit andern Wesen und zwar mit a der Materie. Diese Verknüpfung ist a unmittelbar mit seinem Körper, ß mittelbar vermittelst des Körpers mit der übrigen Materie. Ich sage: das ist mein Körper, seine Veränderungen sind meine Veränderungen. Warum das? Die Seele kann durch das bloße Bewußtsein ihrer Selbst niemals ihre Stelle in der Welt bezeichnen — sondern der Körper bestimmt ihre Stelle. Die Seele ist kein Gegenstand des äußern Sinnes, und man kann deswegen auch nicht bestimmen, wo sie ihren Sitz hat; darum ist auch nicht möglich zu sagen, wo sie eigentlich im Körper ist. Zu dem Ende ist Seele und Körper im Commercio, und dieses Commercium ist so stark, daß bloß das Denken schon Einfluß auf den Körper hat. Auf das Nerven System wirkt die Seele unmittelbar, die übrigen Theile des Körpers sind bloß Werkzeuge, durchweiche sie vermittelst des Nerven Systems wirkt. Dieses Commercium näher zu bestimmen, ist das Geschäfte der Anthropologie. Wir betrachten nun a. die Möglichkeit des Commercii. Wir haben schon mit Schwierigkeiten zu thun, nur das Commercium des Körpers mit sich zu erklären, um wieviel schwerer wirds daher sein, die Möglichkeit des Commercii der Seele mit dem Körper einzusehen. Dieses Commercium äußert sich darin, daß die Seele durch den bloßen Willen Bewegungen in dem Körper verursachen kann. Hiezu dient nun folgendes: Bewegungen sind keine Wirkungen, sondern sind Phaenomene der Wirkungen. Die Bewegung ist succeßive Veränderung des Orts, den ein Körper einnimmt, aber keine Wirkung, sondern ein Phaenomen von einei Wirkung, die uns unbekannt ist. Ob das, was Einfluß hat und wirkt, eine Leibnitzsche Monade ist, wissen wir nicht. Das wissen wir aber, daß zwischen Ursache und Wirkung Homogeneitaet nicht nothwendig ist, sondern bloß Heterogeneitaet statt finden kann. (Man stößt sich bei der Erklärung des Commercii mit dem Körper vornehmlich daran, daß Bewegung und Denken so verschieden sind, daß man nicht einsehen könne, wie eins das andere bewirken soll ; aber der Körper ist ein Phaenomenon und folglich auch seine Eigenschaften. Das substrat davon kennen wir nicht. Wie nun dieses mit der Seele in Commercio sein könne, läuft darauf hinaus, wie überhaupt Substanzen in Commercio sein können, und iene Schwierigkeit wegen der Heterogeneitaet fällt nun weg. Daß Körper bloß Erscheinungen sind, folgt daraus ganz klärlich, weil alle Eigenschaften und Kräfte derselben auf die bewegende Kraft herauskommen. So auch die Undurchdringlichkeit. Bewegung ist succeßive Gegenwart an verschiedenen Orten. Was aber das bewirkt, daß ein Ding am eigenen Ort, und succeßive an verschiedenen Orten sein könne, wissen wir nicht.) Darum kann die Kraft zu denken ganz verschieden sein vom Körper, und die Heterogeneitaet macht gar keine Schwierigkeit. Wir sind also darum noch gar nicht genöthigt, uns eine harmoniam praestabilitam zu denken; es ist hier bloß das Systema caußarum efficientium anzunehmen. Die Verknüpfung per harmoniam praestabilitam ist bloß ideal. Es müßte der Körper nach demselben seine Verrichtungen thun können, wenn er auch keine Seele hätte, wenn auch die Seele von ihm schon getrennt wäre. Also ist hier die Seele überflüßig. Das beste System ist das caußarum efficientium oder bestimmter influxus physici — dadurch, daß die Seele mit dem Körper verbunden ist, heißt sie Seele. Die Seele bedient sich der Nerven als Werkzeuge und fließt durch diese unmittelbar auf die übrigen Theile des Körpers ein; die Nerven sind auf der andern Seite auch wieder die Werkzeuge, wodurch der Körper auf die Seele einfließt. Wenn ein Nerve unterbunden wird, so sehe ich nichts. Cartes sagte: es gäbe ideas materiales, Abdrücke im Gehirn, die die Seele wie auf einer Tafel hervorbringt. Wenn wir denken, so druken wir dieses im Gehirn ab, und dieses läßt Spuren zurück, die durch einige verwandte Gehirn Nerven wieder angestoßen und aufgefrischt werden. So sei das Gedächtnis zu erklären. Bonnet ist auch derselben Meinung. Der Materialismus aber ist, wie wir schon gesehen haben, nichts. Es können seine Denk Abdrücke übrig bleiben, aber es ist doch unnütze Künstelei, z.E. wenn man etwas behalten will, so thut einem der Kopf weh, das sind aber keine Ideen, sondern dient nur, Ideen zu erwecken. So auch, wenn sie sich durch die Einbildungs Kraft Anschauungen macht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 17,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s22-008",
     "kind": "text",
     "aa": 909,
     "text": "Wo hat die Seele ihren Sitz? Ueberhaupt hat sie ihn im Körper, wo aber im besonderen? Da ist großer Streit. Die Alten sagten: im Zwerchfell, weil dies bei gewissen Affecten bewegt wird. Cartes sagte, sie sei in der Zwirbeldrüse. Aber diese ist oft versteinert gefunden, und die Menschen haben doch gelebt (die Aerzte nennen es Commune sensorium, von wo die Seele ihre Wirkungen zunächst anfängt; das hat man nun auf allerlei Art auszumitteln gesucht). Die Alten sagten auch: anima est tota in corpore, sed totum tarnen in parte ejus. Dies ist nichts. Viele haben angenommen, daß iniedem Theile des Körpers ein eigner Grad der Bewegung sei, und daß folglich auch viel Seelen mit einem einzigen Körper verbunden wären. Bonnet setzt sie ins Corpus callosum, Hirnschwiele, hat aber keinen andern Grund dazu, als die Vermuthung, daß sie in demienigen Theile des Körpers sein müße, in dem nicht zwei verschieden sind. Sind aber alle diese Meinungen wohl vernünftig? Die Seele ist ein Gegenstand des innern Sinnes und nimmt daher keinen Raum ein. Gebe ich ihr aber denselben, so mache ich sie zum Gegenstand des äußern Sinnes und zur Materie. Daher kann ihre Gegenwart im Körper nicht localiter, sondern virtualiter bestimmt werden, durch den Einfluß, den sie auf den Körper hat. Dieser Einfluß ist nur unmittelbar auf die Nerven (i. e. die Seele ist iedem Nerven unmittel -bar gegenwärtig) und am stärksten im Gehirn, weil da die Nerven zusammen kommen. Bei der Materie geht zwar die Gegenwart im Ort dem Einflüße vorher, bei der Seele aber nicht. — So ist auch Gottes Allgegenwart nicht anders als virtualiter zu erklären. — Da sich die Seele ihres Orts im Körper nicht bewußt werden kann, weil sie mit keinem äußern Sinne angeschaut werden kann, so ist sie auch nicht vermögend, nach Belieben aus demselben heraus zu gehen. Geht die Seele gleich nach dem Tode des Körpers von ihm weg? Ist sie ein Atom, so muß sie wahrscheinlicherweise noch drin bleiben, so lange bis der Körper zerstört ist.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s22-009",
     "kind": "text",
     "aa": 909,
     "ms": [
      {
       "p": 212,
       "i": 0,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Cap. 3. Ursprung der menschlichen Seele",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-mrongovius-s22-010",
     "kind": "text",
     "aa": 909,
     "aaEnd": 910,
     "pages": [
      {
       "p": 910,
       "i": 127
      }
     ],
     "text": "Was die Geburt des Menschen anbetrift, so entsteht er durchs Zeugen. Wäre die Seele material, so würde sie auch auf die Art entstehen, wie die übrige Materie des Körpers. Alle Theile dieser Materie waren vorher, und sie erhalten durch die Zeugung nur eine neue Form. Ein Compositum kann ohne Schöpfung entstehen, weil die Substanzen schon vorher da sind. Ein Einfaches aber muß durch Schöpfung entstehen, also auch die Seele, da sie einfach ist. Eie Schöpfung ist actuatio substantiae. Des Autors Erklärung: actuatio ex nihilo, ist nicht recht. Denn es folgt schon aus dem Begriff einer Substanz, daß sie aus nichts entstehen müße. Denn wären die Theile schon vorher, so entspränge itzt bloß die Form derselben, welches ein Accidens, aber nicht Substanz ist. Nun aber frägt sichs: Hat Gott oder die Eltern die Seele erschaffen? Substanzen, die in der Welt sind, können unmöglich andere erschaffen. Denn alle Substanzen stehen im Commercio. Bringt nun eine die andere hervor, so erschafft sie etwas, woran sie hernach selbst paßiv ist. Sie ist also vor sich selbst paßiv, welches sich gar nicht denken läßt. — Die annehmen, daß die Eltern die Seelen der Kinder erschaffen haben, heißen Traducianer. Die propagatio per traducem, durch eine Seele, die andere erzeugten, ist ein gemeiner Begriff. Er beruht auf Materialismus. Eltern können nicht durch Theilung die Seele den Kindern mittheilen, sonst wären die ihrigen zusammengesetzt. Gott hat also die Seele erschaffen. Wann aber? Bei der Geburt, oder im Anfänge der Welt? Das erste behaupten Inducianer (Concreatianer), das letzte Praeexistentianer. Diese haben recht. Denn alle Substanzen müssen bei der Schöpfung der Welt erschaffen sein. Würden die Seelen itzt noch immer erschaffen, so würden das immer Wunder, denn jede Schöpfung ist ein Wunder. Würden aber die gewöhnlich, sind sie contradictorisch.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s23",
   "title": "Unsterblichkeit der menschlichen Seele",
   "titleSrc": "heading",
   "headings": [
    "Unsterblichkeit der menschlichen Seele"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s23-001",
     "kind": "heading",
     "aa": 910,
     "text": "Unsterblichkeit der menschlichen Seele"
    },
    {
     "id": "metaphysik-mrongovius-s23-002",
     "kind": "text",
     "aa": 910,
     "aaEnd": 912,
     "pages": [
      {
       "p": 911,
       "i": 583
      },
      {
       "p": 912,
       "i": 3120
      }
     ],
     "ms": [
      {
       "p": 213,
       "i": 507
      }
     ],
     "text": "Hier haben wir folgende Fragen zu beantworten: Wird die Seele fortfahren zu leben? 1. als Mensch oder als Intelligenz? 2. Fließt diese Fortdauer aus der Beschaffenheit ihrer Natur (d.i. eigentlich ist sie unsterblich) oder aus einem besonderen göttlichen Rathschlusse? 3. Wird diese Fortdauer allgemein oder particulair sein? In Ansehung der ersten Frage hat sich der Materialist nur darum zu bekümmern, ob der Mensch auch fortdauern werde, der Pneumatist aber, ob er auch als Intelligenz fortdauern werde. Die erste Frage können wir bei Seite setzen, denn sie kann uns gleichgültig sein, und der menschliche Körper scheint sich auch von seiner ersten Bestimmung an zur Erde zu neigen (Priestley ist ein Materialist und nimmt an, daß der Körper wieder nach dem Tode werde erwekt werden, aber das ist dann keine Unsterblichkeit. Denn es ist kein fortdaurendes Leben und es ist auch nicht Ich, der ich aufgeweckt werde, sondern ein ähnliches Wesen. Denn es ist einerlei, ob Gott von den Theilen meines Körpers oder von anderer Materie einen solchen Körper zusammensetzt, denn als Materie oder Substanzen sind sie ganz einerlei. Priestley sagt, die Lehre, daß der Mensch eine Seele habe, ist eine sinnlose Lehre und der Heiligen Schrift ganz zuwieder. Denn nveu^oc ist ein Hauch und zeigt was äußerliches an. Ob aber der Mensch als Intelligenz fortdauren werde, ist uns wichtiger zu wissen, und da müssen wir wieder fragen, ob seine Fortdauer nach seinem Tode als ein allgemeines Gesetz der Natur noth wendig sei, oder sich auf einen außerordentlichen göttlichen Kathschluß gründe. Das erstere ist uns wichtiger, denn beim letztem könnte die Fortdauer particulaer sein. Es ist hier nicht die Frage vom künftigen Leben überhaupt, denn das können wir teleologisch beweisen; sondern wir wollen von der Unsterblichkeit der Seele oder ihrer Unmöglichkeit zu sterben, überzeugt sein. Denn dann sind wir von der Fortdauer aller Seelen nach dem Tode gewiß. (Zur Unsterblichkeit gehört zu beweisen 1. die natürliche Unmöglichkeit zu sterben, 2. die Fortdauer der Seele mit allen ihren Kräften und derselben, denn sonst wäre das Leben nichts, 3. die hortdauer ihrer Persönlichkeit, daß sie sich ihres vorigen Lebens bewußt bleibt. Denn sonst daure ich nicht fort, sondern ein anderes geistiges Wesen.) Von der Unsterblichkeit der Seele wird ein natürlicher und moralischer Beweis möglich sein. Denn alle Philosophie geht entweder auf Natur oder Sitten. Die Moral ist die Bestimmung der Handlung nach Gesetzen der Freiheit. Die Philosophie, sowohl der Moral als der Natur, ist auf Principien a priori gegründet. Die Natur Beweise sind von 3erlei Art : 1 . aus der Erfahrung oder aus der dur ch die Erfahrung bekannten Natur des Menschen, 2. aus der rationalen Psychologie, 3. aus der Analogie der Natur der Seele mit der gesamten Natur Ordnung. Was den empirischen Beweis anlangt, so hat der sehr unsichre Argumente. Da wir nicht die geringste Eifahrung von der Unsterblichkeit haben, so sind alle lolgeiungen aus den Erfahrungen dieses Lebens bloße Vermuthungen. Die Eifahrungen geschehen nur während dem thierischen Leben, ich kann also nur die Kräfte der Seele wissen, wenn sie im Commercio mit dem Körper ist. Daher können sie uns nicht das geringste Licht davon geben, wie die Seele nach dem Commercio mit dem Körper beschaffen sein werde.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s23-003",
     "kind": "text",
     "aa": 912,
     "ms": [
      {
       "p": 214,
       "i": 0
      }
     ],
     "text": "(Um aus der Erfahrung einen Beweis zu führen, müßten wir uns außer dem Commercio mit unserm Körper setzen können, oder andre daraus gesetzte Seelen deßhalb befragen können, welches aber beides nicht angeht. Man vergleicht auch die Seele mit einer Raupe, die nach ihrem scheinbaren Tode ein schöner Papillon wird, und will darin eine Analogie in der Natur finden. Aber es ist ganz falsch, denn wenn man die Raupe tödtet, so wird aus ihr nie ein Papillon. Ueberhaupt ist davon in der Natur und Erfahrung nichts ähnliches). Man sagt : im Alter würde der Leib immer schwächer, der Geist aber immer stärker. Leute, die in einer hitzigen Krankheit phantasiren, werden kurz vor dem Tode vernünftig, und daraus schließt man, daß die Seele, wenn sie von dem Leibe befreit wäre, besser und freier würde denken können als itzt. Aber dagegen kann man theils einwenden, daß iene Erscheinungen sich so erklären lassen, daß, wenn der Mensch stirbt, der Lebenssaft im Gehirn um so viel lebhafter wird, iemehr der untere Theil des Leibes abstirbt; theils hat man auch Erfahrungen, die das Gegentheil bezeugen: Daß nehmlich der Körper auf die Seele vielen Einfluß hat, daß z.E. ein Schlag auf den Kopf Wahnwitz und Dummheit hervorbringen kann, daß die Seele mit dem Körper wechsele etc. Im Alter schwindet Gedächtniß, W itz und leichte Liebersicht des Ganzen, aber es entsteht eine, durch die lange Erfahrung geübte Urtheilskraft. Daher sind die Alten die besten Rathgeber, und man hat sie von ieher dazu gewählt).",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s23-004",
     "kind": "text",
     "aa": 912,
     "aaEnd": 913,
     "pages": [
      {
       "p": 913,
       "i": 816
      }
     ],
     "ms": [
      {
       "p": 215,
       "i": 1320
      }
     ],
     "text": "In der rationalen Psychologie haben wir 3 Stücke zu beweisen : 1 . die Beharrlichkeit der Seele als Substanz, 2. die Fortdauer dieser nach dem Tode, als Intelligenz, 3. ihre Fortdauer als Person. Man glaubt mit. der ersten fertig zu sein, da die Substanz beharrlich ist. Da die Seele aber nur durch das Ich als Substanz erkannt wird, so wissen wir nicht einmal, ob sie in dem Sinne Substanz sei, daß sie als solche nicht vergehen könnte. Mendelssohn versuchte zuerst die Unsterblichkeit der Seele als Substanz zu beweisen, aber es gelang ihm nicht. Er sagt: Sie sei einfach, könnte daher nicht durch Theilung aufgelöst. werden. Aber sie kann erlöschen und ihre Realitaet allmählich verschwinden. Er sagt, das wäre ein Sprung; aber es könnte ia noch beim Lege continui geschehen. Ist aber ihre Fortdauer als Substanz gewiß, so beweißt das noch nicht ihre Fortdauer als Intelligenz. Der vorige Beweis beweißt die Incorruptibilitaet der Seele. Deswegen aber kann sie nach dem Tode in ein ewiges Träumen oder immerwährenden Schlaf verfallen, welcher der Seelen Schlaf genannt wird. Dauert sie aber als Intelligenz fort, so ist das gar nicht zu befürchten. Endlich muß man die Fortdauer ihrer Persönlichkeit beweisen. Unsterblichkeit ist die Unmöglichkeit zu sterben. Sterben ist das Ende des Lebens. Das Leben ist thierisch im Commercium und geistig ohne Commercium mit dem Körper. Das thierische Leben kann daher wohl aufhören, das geistige aber nicht. Das Leben des denkenden Wesens besteht in der Persönlichkeit, da es sich seiner selbst bewußt ist. Unsterblichkeit wird die nothwendige Fortdauer vor diese Persönlichkeit sein, nicht vita bruta. Wenn die Seele ihre Persönlichkeit verliert oder eine andre Person würde, so wäre sie nicht mehr dieselbe und man könnte nicht sagen, daß sie ihr Leben continuirte. So ist z.E. die Metempsychose eine solche Interruption, da wird die Persönlichkeit verändert. Unsterblichkeit wird also continuirliches Leben sein. Sie muß den folgenden Zustand mit dem vorigen verknüpfen und wissen, daß sie dieselbe ist, die sie vorher war. Wenn die Seele in der andern Welt sich nichts von dem bewußt wäre, was mit ihr hier vorgegangen wäre, so würde wohl ihre Substanz, aber nicht ihre Person fortdauern.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s23-005",
     "kind": "text",
     "aa": 913,
     "aaEnd": 914,
     "pages": [
      {
       "p": 914,
       "i": 1132
      }
     ],
     "ms": [
      {
       "p": 216,
       "i": 1987,
       "raw": "21G",
       "inferred": true
      }
     ],
     "text": "2. Der rationale Beweis. Alle Materie ist leblos, hat kein V ermögen, sich selbst zu bestimmen, und das Princip des Lebens ist etwas anderes als Materie. Denn eine iede Materie bleibt in Bewegung oder Ruhe, bis sie von etwas anderm verändert wird. Die Materie hat also bloß Receptivitaet oder Paßivitaet. Das Princip des Lebens aber ist Spontaneitaet oder des Vermögen, aus innern Principien sich selbst zu bestimmen (der Körper ist Hinderniß des Lebens, weil er nichts zur Beförderung des Lebens beiträgt und doch auf die Seele sehr stark einfließt. Es ist eben so, als einer, der an eine Karre geschmiedet ist und sie immer mit sich ziehen muß. Ist nun die Karre gut bis zum Tode geschmiert, so kann er sie leichter ziehen und geschwinder gehen, wo nicht, so muß er langsamer gehen. Sollte man nun denken, daß er frei von der Karre gar nicht würde gehen können? Nein, er wird vielmehr leichter, besser gehen.) Die Materie hat kein Princip des Lebens in sich, trägt daher auch nichts zur Beförderung des Lebens bei. Weil sie ganz leblos ist, so giebt sie auch keine Bedingung des Lebens ab. Beim Menschen ist also nicht der Körper das Princip des Lebens, sondern die Seele, und er dient auch nicht zur Beförderung des Lebens. Derohalben muß die Trennung des Körpers von der Seele auch keine Veränderung des Lebens sein. Sie muß eben so viel bedeuten wie z.E. die Trennung des Pferdes von seinem bisher gezogenen Wagen. Wenn wir bei dem allen aber doch sehen, daß der Körper in die Seele einfließt, so muß er dann eine Hinderniß des Lebens sein. Denn andere Arten von Einflüßen laßen sich nicht denken. Der Tod ist also eine Beförderung des Lebens der Seele, und ihr künftiges Leben wird erst ihr wahres Leben sein. Das Thierische ist beinahe die Hälfte der Leblosigkeit. Dieser Beweis ist auch nicht ganz streng. Denn die Leblosigkeit der Materie ist bloß eine Eigenschaft der Erscheinung, nehmlich des Körpers. Ob aber die dem Körper zu Grunde liegende Substanz nicht auch Leben habe, wissen wir nicht, doch ist der Beweis gut wiedei die Materialisten.). Nun ist aber hiewieder noch die Schwierigkeit, daß der Körper, wenn er gleich nichts zum Leben beiträgt, doch gleich wohl die einzige Bedingung sein kann, von der das Leben abhängt. Hätte die Seele nicht Sinne und Empfindungen, so hätte sie auch nicht Stoff zum Denken. Würde die Seele also vom Leibe getrennt, so würde zwar nicht ihre Lebens Kraft, aber doch ihr Leben aufhören. Durch Krankheit kann man sein Gedächtnis verlieren. Daher mag die Seele vielleicht den Körper zum Gedächtniß nöthig haben. Vielleicht wird sie sich künftig ohne Körper ihrer selbst bewußt sein können, denn ich muß mir durch klare Vorstellungen bewußt werden. Diese beruhen aber auf dem Körper, da sie Empfindungen sind. Bei alledem hat dieser Beweis doch viel vor sich und zeigt, daß es nicht nothwendig sei, daß die Seele mit dem Körper aufhören müsse. Ueberdem dient es auch, die Schwürigkeiten zu renoviren, die der Annahme der Unsterblichkeit entgegen sind. Dieses war also ein Beweis aus der besondern Natur der Seele. Daraus werden wir es wohl nie gewiß beweisen können, aber vielleicht können wir es aus der gesamten Natur aller Dinge nach der Analogie beweisen. Das wollen wir itzt und also ß. den Beweis aus der Analogie der gesamten Natur mit der Natur unsrer Seele führen.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s23-006",
     "kind": "text",
     "aa": 914,
     "aaEnd": 919,
     "pages": [
      {
       "p": 915,
       "i": 262
      },
      {
       "p": 916,
       "i": 2792
      },
      {
       "p": 917,
       "i": 5357
      },
      {
       "p": 918,
       "i": 7885
      },
      {
       "p": 919,
       "i": 10422
      }
     ],
     "ms": [
      {
       "p": 217,
       "i": 2449,
       "raw": "",
       "inferred": true
      },
      {
       "p": 218,
       "i": 6696
      },
      {
       "p": 219,
       "i": 10384,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Dri Analogie können wir gar nicht entbehren. Die meisten unserer Schlüße sind analogisch; nehmlich wir schließen: weil 2 Dinge dieienigen Eigenschaften mit einander gemein haben, die wir kennen, so werden sie auch in denjenigen Eigenschaften übereinstimmen, die wir nicht kennen. Freilich ist hier auch Betrug möglich, und in vielen Fällen wirklich. Hier beweisen wir aus der Natur der Zweke, und darum ist dieser Beweis ein teleologischer. Denn die Natur ist physisch ein Reich der wirkenden Ursachen und teleologisch ein Reich der Zweke. Der Grundsatz im Reich der Zweke ist: daß alles seinen Zwek habe und nichts umsonst ist. Das ist ein nothwendiges Postulat der Vernunft. Denn sonst kann sie sich nichts erklären. Es wird aber auch durch die Erfahrung bestätigt. (Selbst der Atheist muß Zweke annehmen, sonst kann er sich gar nicht die Structur und Organisation der Körper erklären; durch das Princip sind die Natur Kündiger auf manche nützliche Erfahrung geleitet. Es haben Menschen ohne die Crystallinse sehen können, und man wußte daher nicht, was sie zu bedeuten hätte. Die Crystallinse ist ein dickerer Saft als der darunter liegende gläserne Saft. Euler kam daher auf den Gedanken, daß es die Schattierungen der Farben im Auge hindern werde, und daß, wenn man bei dem Telescopen auch ein dunkleres Glas als das Farben Glas Vorbringen werde, es auch so gehen werde. Dolland widerstritt ihm, probirte es aber endlich, und brachte das Flintglas hervor und die Dollandsche Fernröhre.) Wir finden aber in der Natur, daß alles nicht allein seinen Zwek hat, sondern auch bestimmt ist, sich ganz zu entwickeln und seinen ganzen Zwek zu erreichen, weil es ihn wirklich erreicht. Die Thiere haben Instincte, die gerade ihren Begierden angemessen sind. Alle Glieder haben ihren bestimmten Gebrauch. Nun giebts in der Menschliehen Seele Anlagen, die in diesem Leben gar nicht ihre Bestimmung erreichen. Daher schließen wir, daß eine Zeit kommen müßte, worin sie ihre Bestimmung erreichen werden. Nun beruht alles auf dem Beweis des minoris, und der ist folgender: Die Menschliche Seele hat 3 Fähigkeiten: Erkenntniß Vermögen, Gefühl der Lust-Unlust und Begehrungs Vermögen. Was das erstere betrifft, so wird das hier gar nicht befriedigt. Hier finden wir besonders, daß unsere Wißbegierde sich auf Dinge erstrekt, deren Erkenntniß uns in unserem Leben gar nicht nützen kann, ia daß wir ein desto größeres Vergnügen an der Erkenntniß der Dinge finden und diese Erkenntniß desto erhabener finden, ie entfernter die Dinge von uns sind, z.E. Sterne. Einen Menschen, der bloß darauf denkt, was ihm zur Erhaltung seines Lebens dienen kann, verachten wir. Was nutzte wol dem Newton die Erfindung der Gesetze der Anziehung und andere philosophische Untersuchungen? dies alles ist für dieses Leben gar nicht nothwendig. Es würde also überflüßig sein, wenn kein künftiges Leben wäre, und ferner befriedigen wir auch in diesem Leben unsere Wißbegierde nicht. Das Streben nach Erkenntniß scheint, in gewissem Grade getrieben, sogar unserer Bestimmung auf Erden zuwieder zu sein. Man schwächt dadurch seinen Geist, kann für sein physisches Glück nicht so sorgen, nicht seine thierische Bestimmung so erfüllen. Eben so ist es mit dem Gefühl der Lust oder Unlust beschaffen. Was hilfts uns, daß wir Gefallen am moralischen Schönen haben, und in Ansehung des Begehrungs Vermögens fühlt der Mensch Gesetze in sich, die ihn zum Guten treiben, und die er höher schätzt als sein Leben; und wir können sie hier nicht einmal recht ausüben, denn um sie auszuüben, müßten wir selbst unser Leben oft wagen und einbüßen, für die der Mensch hier keine Belohnung erwarten kann. Wenn er gleich weiß, daß kein Mensch seine guten Taten kennt und er nur innerlich davon überzeugt ist, so macht ihm schon dieses das schätzbarste Vergnügen. Das würde aber Phantasie und Chimäre sein, wenn er nur für dieses Leben bestimmt wäre. So sind alle Talente in diesem Leben disproportionirt. Newton, ein Mann von so großen Talenten, wird kaum 60 Jahre alt, hat kaum erst angefangen, was Neues zu entdeken, so stirbt er schon. Hätte nun der Mann nur noch einmal so lange gelebt, so würde er auf seinen Erfahrungen immer haben weiter bauen können, und mit der Zeit so viel erfinden, als das ganze menschliche Geschlecht in 1000 Jahren nicht erfinden wird. So aber, wenn ein Mensch erst recht einsieht, wie die Dinge sind, wenn er recht zu seiner Vernunft kommt, so stirbt er auch gleich. Hinzu kommt noch dies, daß es nicht einmal rathsam ist, alle seine Anlagen zu entwickeln, indem dies unsrer physischen Bestimmung oft zuwieder läuft. So kann man sich durch starkes Studiren einen frühen Tod zu ziehen. Man schadt sich im Haus Wesen. Viele werden dadurch verhindert, daß sie nicht einmal heyrathen. Dieser Beweis ist von Fordyce erfunden, der sich dabei des Gleichnisses bedient: Wenn ein höheres Wesen in dem Utero einer Mutter ein Geschöpf wahrnehmen sollte, das Auge, Ohren und andre Glieder hat, so würde es so schließen: dieses Geschöpf ist bestimmt zu einem Leben, wo diese Glieder angewandt werden könnten. — Dieser Beweis ist darum besonders vortrefflich, weil wir hier aus einem allgemeinen Naturgesetz schließen. Denn nach demselben sind alle Menschen unsterblich. Der vorige Beweis ging noch weiter, denn er bewies auch die l nsterblichkeit der Thierseelen. Das beweist aber dieser nicht. Aber iene haben auch für uns nicht so viel Intereße. Ob aber des Menschen Seele ewig leben werde, das weiß ich aus diesem Beweise noch nicht. Wer weiß, sterbe ich nicht dann, wenn sich alle diese Anlagen entwickelt haben? Gesetzt, daß ich auch noch so lange leben werde, wenn ich aber doch einmal aufhöre, so möchte ich lieber wünschen, eher aufgehört zu haben. Nun kommt der Moralische Beweis. Alle moralischen Argumente abstrahiren von der Natur der Seele, aber sie leugnen doch nicht die Immaterialitaet. Dadurch aber, daß sie die Beweise nicht auf Immaterialitaet bauen, sind sie dem gemeinen Mann verständlicher als die anderen. Dieser Beweis ist entweder ein moralischer theologischer oder theologisch moralischer, in diesem legen wir die moralischen Eigenschaften des höchsten Wesens zum Grunde. Er beruht auf Gottes Güte und Gerechtigkeit, ist aber sehr schwach. Man sagt: die Tugend werde hier in der Welt so wenig belohnt, und das Laster so wenig bestraft. Ist Gott gerecht, so ist ein künftiges Leben zu hoffen, wo diese Disproportion aufgehoben wird. Aber wenn wir nur den Tugendhaften ganz scharf beurtheilen könnten, so werden gewiß seine Laster mehr als seine Tugend betragen. (Wer kennt iedes Menschen Innerstes, um zu wissen, ob seine lasterhaften Handlungen nicht schon hier bestraft werden und die Tugendhaften belohnt? Und denn ists Vermessenheit, über Gottes Gerechtigkeit und Güte urtheilen zu wollen) Wenn wir aber auch eine künftige Vergeltung zugeben, so folgt gar nicht, daß sie ewig sein wird. Können wir nun für unsere wenigen Tugenden eine ewige Belohnung fordern? und wenn wir denn auch einige Myriaden von Jahren haben möchten, die dann vergingen — was würde uns das helfen? Endlich zeigt dieser Beweis auch nur, daß das künftige Leben particular sein wird. Denn Kinder, Blödsinnige und ganz Stupide, — Völker, deren Leben weder moralischen Werth noch Unwerth hat, sind nach diesem Beweise davon ausgeschloßen, wenigstens nicht mit drin begriffen. Man hat noch einen Beweis von der Weisheit Gottes, daß diese nehmlich großen Anstoß leiden würde, wenn nicht vernünftige Wesen nach der Veränderung der Welt fortdauren sollten, damit sie den Beweis der göttlichen Güte als eine ganze Quelle ansehen. Es wären sonst lauter Fragmente ; das Universum wäre umsonst, wenn nicht vernünftige Wesen das Ganze anschauen sollten. Aber es können ia andere vernünftige Wesen sein, die Gott dazu bestimmt hat, denn von allen folgt es gar nicht. Nun bleibt uns noch der moralisch theologische Beweis übrig. Dieser gründet sich auf die Moral Gesetze, die gleichsam geometrisch nothwendig sind. Die Moralitaet würde ohne Triebfedern sein, wenn keine Unsterblichkeit der Seele wäre. Nur in der Idee würde sie ohne Glauben an Unsterblichkeit eine Kraft haben, nicht aber in der Realitaet. Da also der Moralitaet die Realitaet fehlt, so läßt sich die Hoffnung der Unsterblichkeit von derselben nicht trennen. Demnach können die Menschen ohne sie keine Entschließung zu guten Handlungen fassen, und die Hoffnung und der Glaube an eine Unsterblichkeit ist ein practisches postulat der Vernunft. (Man macht einen Einwurf wieder die Fortdauer der Seele, daß es mit der Geburt so was zufälliges sei. Wie viel Millionen Keime werden nicht erstickt oder sterben im frühesten Alter? Ein Regent kann seine Untertlianen so multipliciren wie ein Landmann seine Hühner, wenn er alle Nahrungs Zweige befördert. Wie sollte nun eine so zufällige Sache als die Entstehung des Menschen zur Unsterblichkeit bestimmt sein? Antwort: Die Seele muß schon vorher existirt haben, obschon die Geburt der erste Anfang ihres Lebens in der Sinnen Welt ist. Die Metempsychose der Indianer ist doch eine besondere Idee, daß nehmlich die Seele vorher ein reiner Geist (Dewa) war, der zur Prüfung mit dem Menschlichen Körper verbunden wird, hernach in andere Thiere fährt, bis er wieder ein Mensch wird, wo er denn ganz heilig ist, welches die Lamaische Wiedergeburt ist, und dann wird er in den Abgrund aller Geister, d. i. Gott, verschlungen). Die Moral beruht auf dem Begriff von Freiheit und ist eine nothwendige Hypothese. Ob wir sie gleich nicht begreifen können, so müssen wir sie doch nothwendig annehmen. Wenn die menschlichen Handlungen nur aus dem Mechanism der Natur zu fließen scheinen, so gilt das nur von den Erscheinungen derselben. Was den Handlungen zum Grunde liegt, nehmlich die reinere Denkungs Art des Menschen, ist uns unbekannt. Die kreiheit im speculativen Verstände können wir nicht begreifen. Sie ist ein practisches Postulat. Dieses ist von Hypothesen unterschieden. Hypothese ist ein Satz, den man zur Erklärung gewisser Phaenomene annimmt, die man aber wohl noch durch eine andere Hypothese erklären könnte. Practisches Postulat ist aber nur das einzig mögliche, das gewisse Erscheinungen erklären kann. Daß Menschen verbunden sind, redlich zu handeln und gut zu sein, ist ein apodictischer Satz. Triebfedern dazu kann nur die Unsterblichkeit geben. Daher ist es ein practisches Postulat, daß die Seele unsterblich ist. Der analytische und moralische Beweis für die Unsterblichkeit sind sehr stark, vorzüglich der letztere. Obgleich man diesen nicht zu den wissenschaftlichen Beweisen rechnen kann, so hat er gleichwohl Stärke. Denn ich bringe dadurch den Gegner ad Absurdum praticum.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 24,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s23-007",
     "kind": "text",
     "aa": 919,
     "aaEnd": 920,
     "pages": [
      {
       "p": 920,
       "i": 2258
      }
     ],
     "text": "Wie können wir uns den Zustand nach dem Tode denken? Entweder so, daß die Seele ganz frei von meinem Körper sein wird, oder so, daß der Seele ein neuer Körper übergeben wird. Ist das letztere, so hndt eine Palingenesie statt. Priestley und andre Materialisten haben annehmen müßen, daß der itzige Körper der Seele sie auch in meinem neuen Leben umgeben würde. Es ist ein kühner Gedanke, die Auferstehung mit der Verwandelung eines Schmetterlings zu vergleichen. Denn wenn die Raupe verbrannt wird, so entsteht aus ihr keine Puppe. Ganze Nationen haben sich in Ansehung der Art, wie sie sich die Unsterblichkeit der Seele dachten, unterschieden — die Römer sahen z.E. den Körper für ein Gefängnis der Seele an und verbrannten ihn zu dem Ende. Die Aegypter hinwiederum glaubten, daß er ein nothwendiges Vehiculum der Seele sei und suchten ihn aufzubewahren und vor der Verwesung zu schützen. — Ob die Seele gleich nach dem Tode eine Zeitlang in einen Schlaf gerathen wird, da haben wir nichts dafür und auch nichts dawider zu sagen. Gesetzt auch, daß es so ist, so braucht sich dessentwegen kein Mensch zu beunruhigen, weil die Kürze dieses Schlafes sich gegen eine Ewigkeit verliert. Was haben wir uns aber unter der Scheidung der Seele vom Körper vorzustellen? Nichts weiter, als den Anfang deslntellectuellen und das Ende des sinnlichen Lebens. Es ist eine materialistische Vorstellung, wenn man denkt, daß die Seele sich gleichsam aus dem Zimmer begebe, wenn der Mensch stirbt; denn sie hat keine locale Gegenwart. Es fängt die Seele sodann an, die Dinge anders anzuschauen, als sie es in der Verknüpfung mit dem Leibe gewohnt gewesen ist. Schon itzt finden wir uns in der Intelligiblen Welt, und ieder Mensch kann sich nach Beschaffenheit seiner Denkungs Art entweder zur Gesellschaft der Seeligen oder der Verdammten zählen. Er ist sichs itzt nur nicht bewußt und nach dem Tode wird er sich dieser Gesellschaft bewußt werden. Der Mensch kommt also nicht erst in den Himmel oder die Hölle, sondern er sieht sich nur darin. Dies ist eine herrliche Vorstellung. Wo ist Himmel und Hölle? Fragen wir nach dem Ort, so ist das sinnlich, und die Seele zum Körper gemacht. Himmel ist das Reich des Belohnenden und Hölle ist das Reich des strafenden Richters. Wir sind uns itzt durch die Vernunft schon als in einem intelligiblen Reiche befindlich bewußt ; nach dem Tode werden wir das anschauen und erkennen und dann sind wir in einer ganz anderen Welt, die aber nur der Form nach verändert ist, wo wir nehmlich die Dinge erkennen, wie sie an sich selbst sind. Die Meinung des Leibnitz, daß die Seele schon hier ein Vehiculum von Materie, das unzerstörbar ist, habe und auch künftig haben werde, ist sinnlich und erklärt nichts. —",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s23-008",
     "kind": "text",
     "aa": 920,
     "text": "Ende der Psychologie",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s23-009",
     "kind": "text",
     "aa": 921,
     "text": "Aus einer anderen Fassung",
     "ocrConf": 59
    },
    {
     "id": "metaphysik-mrongovius-s23-010",
     "kind": "text",
     "aa": 921,
     "ms": [
      {
       "p": 220,
       "i": 0
      }
     ],
     "text": ". . Kaestner gab dies auf und sagte: Wer das lex eontinui beweisen will, muß diesen Satz beweisen. Sonst wäre es, wenn man von einer Richtung unmittelbar auf die andere käme, ein Sprung. Nur in einer krummen Linie kann sie ihre Richtung continuirlich verändern. Daher sagt auch Newton, daß die Lichtstrahlen auf den Spiegel in einer krummen Linie fallen und auch von ihm so zurückgestoßen werden, obgleich die Winkel x = y gleich sind).",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s23-011",
     "kind": "text",
     "aa": 921,
     "aaEnd": 922,
     "pages": [
      {
       "p": 922,
       "i": 1675
      }
     ],
     "ms": [
      {
       "p": 221,
       "i": 2224
      }
     ],
     "text": "Dieses Gesetz der Natur kann man auch auf die Arten und Gattungen der Dinge anwenden (diese Anwendung des Satzes aber, wie weit sie gehen könne, ist unbekannt), nehmlich wenn man sagt: keine Art oder Gattung ist mit einander so nahe verwandt, daß nicht zwischen derselben noch eine Zwischen Art oder Zwischen Gattung statt finden sollte (Das lex eontinui dient zur Widerlegung der Monadologie ; die Welt kann nicht aus Monaden bestehen, denn das einfache ist in Ansehung des Quanti eine Null. Von Null aber bis zum Quanto ist der Uebergang ein Sprung. Ich mag noch so viel einfaches zusammensetzen, so wirds nie ein Quantum. In Ansehung der Qualitaet ist das Einfache wol was positives, in Ansehung der Quantitaet aber nicht. Man kann keinen vollständigen Begriff vom lege eontinui bekommen, wenn man nicht den ersten Zustand, in dem ein Ding ist, für den unendlich kleinsten Theil des Zustandes nimmt, in den ein Ding noch kommen soll. So muß man das Zero für den unendlich kleinsten Theil vom folgenden Zustand halten. Die Ruhe z. E. für den unendlich kleinsten Theil der Bewegung. Man muß den ersten Zustand in Ansehung des folgenden nicht für bloße 0 halten, weil 0 von iedem Zustand gänzlich verschieden ist. Wir müssen auf dieses lex kommen ; denn zwei Zustände sind sich nie die nächsten, sondern es ist dazwischen noch ein Augenblik. In der Welt ist alles nach dem lege eontinui, daher auch alle Bewegung nach krummen Linien). Dieses heißt auch das Gesetz der Natur und zwar das mechanische Gesetz der Natur, da ienes das cosmologische heißt. Wir finden es freilich, weil es so beschaffen ist; aber wir können durch die Vernunft nicht beweisen, daß es so sein müsse. Daher gehört es gar nicht in die Metaphysic. Dieses wird auch die Stufenleiter der Dinge genannt, zu welcher man dann auch Gott gezählt hat, daß er also einen bloß unendlich höheren Grad der Vollkommenheit als die Geschöpfe hätte. Voltaire spottet hierüber, indem er sie als eine große Proceßion vorstellt, wo Gott, der Pabst, die Engel, die Cardinaele etc. wären. Es ist auch nichtig, Gott in diese Stufenleiter mit einzuschließen, denn er ist ia von den Geschöpfen ganz specifisch unterschieden. Er ist caußa von allem, das Geschöpf ist caußatum, das wäre eben so, als wenn ich, um eine Fläche zu beschreiben, eine gerade Linie unaufhörlich continuirte. Sie würde doch in Ewigkeit keine Fläche werden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s23-012",
     "kind": "text",
     "aa": 922,
     "text": "II.) In mundo non datur hiatus: Es giebt in der Welt keinen leeren Raum und keine leere Zeit. Dieser Satz gehört unter die Categorie der Größe. Es sind zweierlei Arten von leeren Räumen möglich",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s23-013",
     "kind": "text",
     "aa": 922,
     "text": "1 Ein leerer Raum außerhalb der Welt oder Vacuum extra mundanum, der sie umschließt. Und das ist nichts. Denn die Sinnen Welt hat keine Grenzen, wenigstens können wir sie durch keine mögliche Erfahrung bestimmen. Daher können wir auch den leeren Raum außerhalb der Welt gar nicht einsehen, weil er gar kein Object unserer Erfahrung und nichts reelles ist. Von diesem leeren Raum aber ist hier auch nicht die Rede, sondern",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s23-014",
     "kind": "text",
     "aa": 922,
     "aaEnd": 923,
     "pages": [
      {
       "p": 923,
       "i": 1177
      }
     ],
     "text": "2 Von dem leeren Raum in der Welt oder dem vacuo intermisso vel concreto. Hierüber ist uns auch keine Erfahrung möglich. Durch einen hiatus würden ferner in der Welt auch zwei Dinge von ihrem nexu getrennt und das geht nicht an, da die Welt im durchgängigen nexu steht. Ueberdies wäre ein hiatus auch zugleich ein saltus; und daß dieser letztere nicht statt finde, ist schon vorher bewiesen worden. Eine leere Zeit, in der nichts verginge, wäre ein saltus. Ein leerer Raum ist auch ein saltus. Denn wenn sich ein Körper in einem leeren Raum nur bewegte, so würde weder in ihm selbst noch außer ihm was verändert. Es würde denn also gar keine Veränderung geschehen, boiglich würde auf die vorhergehende Veränderung unmittelbar eine andere auf einmal erfolgen, ohne daß diese durch ein allmähliges Zunehmen in der Zwischen Zeit den Grad erlangte. Das wäre aber ein saltus, z.E. wenn durch eine hohle Kugel ein Körper durchfällt, und diese einen leeren Raum hat, so würde die Zeit, die er beim Durchfallen zubrächte, eine leere Zeit sein. Denn weder würde er an sich verändert, noch auch etwas außer ihm, weil denn nichts außer ihm da wäre. Durch seine Bewegung aber würde er gar nicht verändert. Die leere Zeit aber zwischen 2 Zuständen ist ein Saltus.",
     "joined": [
      "layout"
     ],
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s23-015",
     "kind": "text",
     "aa": 923,
     "ms": [
      {
       "p": 222,
       "i": 0
      }
     ],
     "text": "III. In mundo non datur casus. Casus est eventus in mundo non determinatus secundum leges naturales. Ein Zufall ist das Entstehen einer Begebenheit ohne Ursache und zureichenden Grund. Dieses läuft wieder das principium rationis sufficientis, ohne welches doch keine Erfahrung möglich ist. Die Welt ist eine Summe von Erscheinungen. In der Welt geschieht alles nach Natur Gesetzen. Auch die Handlungen der Menschen geschehen nach Natur Gesetzen, obgleich der Wille derselben nicht unter Natur Gesetzen steht. Zwischen Natur Nothwendigkeit und Zufall ist ein mittleres, nehmlich: die Freiheit. Diese kann wohl Ursachen von dem was geschieht auch zuwieder sein, aber Zufall gar nicht. Denn aus dem Zufall kann ich nicht das geringste erklären. Der Satz : In mundo non datur casus, gilt nur von Begebenheiten — also bloß von der Sinnen Welt.",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s23-016",
     "kind": "text",
     "aa": 923,
     "aaEnd": 925,
     "pages": [
      {
       "p": 924,
       "i": 1565
      },
      {
       "p": 925,
       "i": 4120
      }
     ],
     "ms": [
      {
       "p": 223,
       "i": 1863
      },
      {
       "p": 224,
       "i": 4415
      }
     ],
     "text": "Man nennt den Zufall auch ein blindes Ohngefähr und das deßwegen: Eine Sache, durch die man nicht sehen kann, nennt man bisweilen blind, z.E. blindes Glas. Nehmen wir nun einen Zufall als die Ursache der Begebenheiten an, so können wir, warum und wozu die Begebenheit geschah, gar nicht einsehen, indem uns ein zureichender Grund fehlt (In der Welt geschieht alles nach allgemeinen beständigen Regeln. Das gilt nur von der Sinnen Welt. Denn Geschehen setzt eine Zeit voraus, folglich geschieht im mundo noumeno nichts, daher gilt das principium rationis sufficientis nur von Phaenomenis. — Denn Sinnen Welt ist obiective die Summe aller möglichen Erfahrungen, und durch ratione sufficientis ist auch erst Erfahrung möglich. Ursache ist, worauf eine Begebenheit nach einer nothwendigen Regel folgt. In der Sinnen Welt ist die Caußalitaet einer Begebenheit wieder eine Begebenheit, denn in der Sinnen Welt geschieht alles. Daher ist hier in der Reihe der Bedingungen keine Totalitaet. Die Caußalitaet einer Begebenheit ist auch wieder eine Begebenheit. Denn wäre sie zu allen Zeiten Caußalitaet gewesen, so wäre die Begebenheit zu allen Zeiten gewesen. Das wiederspricht aber dem Begriff von Begebenheit, welcher das Entstehen eines Dinges bezeichnet, also eine Zeit voraussetzt, da das Ding nicht war. Die Caußalitaet ist also auch entstanden, mithin auch eine Begebenheit. Eine ganze Reihe solcher Begebenheiten muß auch ein unbedingtes enthalten: Denn ist die Reihe ganz, so muß sie unbedingt sein. Also muß eine unbedingte erste Ursache sein. Sage ich aber: Gott gab der Welt einen Anfang, so war er die Caußalitaet derselben, und da ich ihn so mit der Zeit verknüpfe, war seine Caußalitaet wieder eine Begebenheit. Um aus der Schwierigkeit herauszukommen, muß ich gedenken, daß Gott als ein Ding an sich selbst betrachtet wird. Bei solchem ist die Caußalitaet keine Begebenheit. Die Einrichtung, daß alles in der Welt nach beständigen Regeln geschieht, kann man nennen den Mechanism der Natur. Mechanism eines Dinges heißt sonst die Einrichtung eines Dinges nach Gesetzen der Bewegung, aber allgemeiner kann es die Einrichtung nach allerlei Arten von Gesetzen bedeuten. In der Sinnen Welt geht also alles nach dem Mechanism der Natur, nach Natur Nothwendigkeit. Diesem ist entgegengesetzt das Ohngefähr, Casus. Zwischen beiden nun ist das Mittlere — Freiheit. Nun sollte man denken, in der Sinnen Welt gebe es nicht Freiheit; aber sie ist doch. — Wenn ich mir nehmlich ein Ding an sich selbst denke, so ist dieses wohl ein substratum von Erscheinungen und insofern, als Erscheinung, gehört es unter den Mechanism der Natur, als Ding an sich selbst aber nicht. Ein solches Noumenon handelt also zwar als Escheinung nach dem Mechanism der Natur, seine Handlungen geschehen nicht so, sondern nach seinem Willen und nicht durch den Mechanism der Natur. Seine Caußalitaet von einer Begebenheit ist nicht wieder eine Begebenheit, denn er ist keine Erscheinung. Meine Vernunft ist ein Vermögen, die Dinge zu erkennen, wie sie sind, daher muß ich doch wohl auch ein Ding an sich selbst sein. Alle meine Handlungen geschehen nach dem Mechanism der Natur etc., insofern sie in der andern ihren Grund haben, aber nicht durch den Mechanism der Natur, sondern ich habe das Vermögen, mich durch die Vernunft nach obiectiven Gründen zu bestimmen, unabhängig von allen äußern Umständen, stimulis etc. Insofern habe ich Freiheit. Die Schwierigkeit bei der Freiheit liegt also bloß darin, daß man Erscheinungen für Dinge an sich selbst hält. Denn die können uns nicht heraushelfen, indem bei den Erscheinungen alles nach dem Mechanism der Natur geschieht. Da die Seele auch ein Ding an sich selbst ist, so ist sie frei. Denn da ist ihre Caußalitaet nicht wieder Begebenheit, sondern sie handelt da nach ihren eigenen Bewegungs Gründen, die sie aus sich selbst hernimmt. Als Ding an sich selbst bringt sie ihre Handlungen gar nicht in der Zeitfolge hervor, sondern so erscheinen sie uns nur. So ist also die Antinomie, daß in der Welt Freiheit und Nothwendigkeit sei, gehoben, indem gezeigt wird, daß das nicht wirkliche Opposita sind, indem sie auf verschiedne Obiecte gehen, nehmlich die erstere auf den mundus Noumenon und das andere auf den mundus Phaenomenon, und daher beides zugleich statt finden könne. So ist es auch mit folgender Antinomie: Ob in der Welt alles, sowohl Bedingtes als unbedingtes, zufällig, oder ob etwas darin nothwendiges sei. Das erstere gilt vom mundo Phaenomenon. Denn in Raum und Zeit ist nichts nothwendiges, weil alles, was Ursache hat, Begebenheit ist. Aber im mundo Noumenon kann die Ursache nothwendig sein, und von der gilt also das letzte. — Wenn eine Welt ist, so muß etwas nothwendiges existiren, weder als Ursache noch als Theil. Beide Sätze sind wahr, so widersprechend sie auch zu sein scheinen. Betrachten wir die Welt als den Inhalt der Erscheinung, dann ist nichts nothwendig, weil in der Sinnen Welt keine Totalitaet ist. Sehen wir aber die Welt als Inbegriff der Dinge selbst an, so muß etwas nothwendig sein. Bei Erscheinungen ist nichts nothwendig. Denn wäre ein Wesen, das die Erscheinung hervorgebracht hätte, so müßte es diese auch in der Zeit geschaffen haben. Demnach müßte eine Zeit sein, wo Gott noch keine Erscheinung geschaffen hätte. Er wäre demnach selbst eine Begebenheit, selbst eine Erscheinung, und hätte demnach seinen Grund in einer andern Begebenheit. Diesem Wiederspruch entgehen wir, wenn wir Gott als Ding an sich selbst betrachten, dessen Wirkungen in der Sinnen Welt zwar nach dem Mechanismus, aber nicht durch denselben, sondern durch Freiheit geschehen. In mundo non datur casus, dieser Satz bedeutet also positive so viel, daß alles in der Welt nach gewissen Regeln nothwendig geschehe. In der Welt giebt es also an sich keinen Zufall, aber wir können den einen comparativen Zufall nennen, der zwar seinen Grund hat, den wir aber nicht einsehen können, und solcher Zufälle giebts genug. Ein solcher comparativer Zufall heißt ein Gliik oder Unglük. Dann beruht die Ursache unseres Wohlbefindens nicht auf unseren Handlungen, sondern auf andern Umständen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 12,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s23-017",
     "kind": "text",
     "aa": 925,
     "aaEnd": 926,
     "pages": [
      {
       "p": 926,
       "i": 509
      }
     ],
     "text": "Wenn ich ein blindes Ohngefähr annehme, so habe ich keine Mühe, den Gründen der Begebenheiten nach zu spähen, und dieser Satz ist, wie der folgende, eine Nothhilfe der faulen Vernunft. IV. In mundo non datur fatum. Schicksahle sind Abweichungen von Maximen. Diese sind Grundsätze die vom Subiect, und Principien Grundsätze, die vom Obiect hergenommen sind. Sie sind speculativ oder practisch. Jene verlangen das, was das Intereße meiner Vernunft befördert. Schicksale widerstreiten dem Intereße der Vernunft. Denn nehme ich sie an, so muß ich dem Gebrauch der Vernunft entsagen; auch wieder die jiractischen Maximen, die mit dem Willen in Verbindung sind, ist das Schicksal, z.E. der Mohomedanismus, daß das Leben vom blinden Schicksal abhänge, daß iedem Menschen noch vor seiner Geburt bestimmt worden ist, wie lange er leben soll.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s23-018",
     "kind": "text",
     "aa": 926,
     "ms": [
      {
       "p": 225,
       "i": 0
      }
     ],
     "text": "Fatum bedeutet ein einmal ausgesprochenes. Das Schicksal ist eine blinde Nothwendigkeit ohne Gesetz. Die Natur Nothwendigkeit ist doch nach Gesetzen; nach dieser ereignen sich die Begebenheiten in der Welt. Die blinde Nothwendigkeit ist das contrarium vom Zufall. Aber davon, daß etwas ohne alle Gründe und Ursachen doch nothwendig sein soll, haben wir nicht den geringsten Begriff. Denn wir finden darin gar nichts wiedersprechendes, daß etwas auch nicht geschehen wäre. Etwas aus dem Schicksal erklären wollen, ist wiedersinnisch, denn daß ich mich auf das Schicksal berufe, heißt eben, daß ich etwas nicht erklären kann. Wenn wir etwas thun, sofern es aus physischen Ursachen herrührt, so müssen wir das aus den Gesetzen der Natur und nicht aus der Spontaneitaet erklären, sonst kämen wir auf intelligible Gründe, die zum mundo Noumenon gehören; und das wäre peraßaaK ; etc ; aXAo yevoc;, das findt nur in moralischen Verhältnissen statt. Zum Mundo noumeno gehören die intelligentia (Wesen von Verstand und freie Wesen, und so auch der Mensch.) Der Autor fängt hier an, vom ente extramundano zu reden. Ist diese Welt ein zufälliges Wesen, so ist sie caußatum alterius. Daß sie aber zufällig sei, kommt daher: mundus noumenon ist ein Totum von Substanzen, welche mit einander in commercio stehen. Vermittelst dieses commercii hängen die Substanzen wechselweise von einander ab. Die Substanzen haben also kein nothwendiges Dasein. Denn absolutes nothwendiges Dasein setzt ein unabhängiges Dasein voraus. Das hat aber nun die Welt nicht. Demnach ist sie von einem anderen Wesen abhängig. Dieses Wesen gehört nicht zu der Welt, denn sonst wäre es zugleich Ursache, indem es die Welt hervorgebracht hätte, aber auch zugleich Wirkung, indem es zugleich mit zu der Welt gehörte; das geht aber gar nicht an. Denn Ursache und V irkung müssen unterschieden sein. Demnach muß auch die Welt als Wirkung von ihrer Ursache unterschieden sein. Also ist die caußa mundi ein ens extra mundanum.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s23-019",
     "kind": "text",
     "aa": 926,
     "text": "Caußa mundi est ens super mundanum, da caußa nobilior ist als der Effectus, indem in ihr caußalitaet noch mehrerer und anderer effectuum liegt.",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-mrongovius-s23-020",
     "kind": "text",
     "aa": 927,
     "text": "Was nothwendig ist, kann für sich bestehen oder ist isolirt; das ens extra mundanum ist daher auch isolirt. Es kann zwar in andre Substanzen wirken, aber andre Substanzen können nicht zurückwirken. Die Sinnen Welt ist gewiß zufällig, denn die Erscheinungen sind ia an sich selbst nichts. Die nächste Ursache von der Sinnen Welt ist mundus Noumenon, den wir itzt nicht kennen, in den wir aber nach unserem Tode als in eine ganz andere Welt kommen können. —",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s23-021",
     "kind": "text",
     "aa": 927,
     "ms": [
      {
       "p": 226,
       "i": 0
      }
     ],
     "text": "Zweiter Abschnitt.",
     "ocrConf": 81
    }
   ]
  },
  {
   "id": "s24",
   "title": "Von den allgemeinen Theilen oder Monadologie. Erstes Capitel Von den allgemeinen einfachen Theilen",
   "titleSrc": "heading",
   "headings": [
    "Von den allgemeinen Theilen oder Monadologie.",
    "Erstes Capitel",
    "Von den allgemeinen einfachen Theilen"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s24-001",
     "kind": "heading",
     "aa": 927,
     "text": "Von den allgemeinen Theilen oder Monadologie. Erstes Capitel Von den allgemeinen einfachen Theilen"
    },
    {
     "id": "metaphysik-mrongovius-s24-002",
     "kind": "text",
     "aa": 927,
     "aaEnd": 928,
     "pages": [
      {
       "p": 928,
       "i": 1481
      }
     ],
     "text": "Der Egoismus ist, wenn iemand behauptet, es sei außer ihm nichts vorhanden, sondern alles, was wir sehen, sei bloßer Schein; und der dies behauptet, ist ein Egoist. Der Egoismus kann dogmatisch, auch sceptisch sein. Den Sceptizismus haben manche im Ernst behauptet, und das geht auch an, wenn man nehmlich behauptet, daß alle Gründe dawieder noch nicht hinreichend sein. Der Egoist sagt: Im Traum stelle ich mir auch eine Welt vor, und bin in derselben, und gleich wohl ist es nicht so. Kann es nun nicht im Wachen auch so mit mir sein? Aber dagegen ist dies, daß die Träume doch nicht mit einander Zusammenhängen, sondern ich bald dieses, bald ienes träume, die Erscheinungen im Wachen aber nach allgemeinen Regeln Zusammenhängen. Der Egoism ist ein bloßes Problem, welches gar keinen Grund vor sich hat, — aber auch dennoch sehr schwer zu beweisen und zu wiederlegen ist. Durch Erfahrung kann ich den Egoisten nicht wiederlegen, denn diese lehrt uns immediate nur unser eigen Dasein. Mediate erfahren wir wohl durch die Sinne, daß andre Dinge da sind ; aber der Egoist sagt, es liege in diesen Sinnen bloß der Grund, daß wir die Erscheinungen gewahr würden. An sich selbst aber wären sie nichts. Da man also auf dieser Seite nichts ausrichten kann, so braucht man moralische Beweise, und zwar folgenden: Der Mensch ist eingeschränkt, also zufällig. Demnach muß er eine Ursache haben. Diese höchste Ursache muß uneingeschränkt sein, weil sie von nichts abhängt, und sie also auch durch nichts eingeschränkt werden kann. Also kann man nicht vermuthen, daß man ganz allein da sein sollte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s24-003",
     "kind": "text",
     "aa": 928,
     "text": "Dem Egoismus ist der Dualismus (Pluralismus) entgegengesetzt. Der Dualist glaubt denkende Wesen und Körper außer sich. Ueberhaupt ist er so ungereimt, daß es sich wol keiner niemals wird einfallen lassen, diesen Irrthum im Ernst zu statuiren, wenn er auch unwiderleglich wäre.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s24-004",
     "kind": "text",
     "aa": 928,
     "ms": [
      {
       "p": 227,
       "i": 0
      }
     ],
     "text": "Der Idealismus ist, wenn man sich vorstellt, daß außer einem zwar denkende Wesen, aber keine Körper vorhanden wären. Diesen Irrthum kann man auch weder aus der Erfahrung noch a priori wiederlegen. Denn es ist nicht nothwendig, daß Körper sind. Nun hat man hier auch einen moralischen Grund. Man sagt nehmlich, Gott sei das vollkommenste Wesen und Urheber von mir. Mithin habe er auch meine Sinne, durch die ich stets Körper sehe, geschaffen. Es müßte auch die Illusion, wodurch wir beredet werden, das, was bloß Blendwerk unserer Sinne ist, für etwas zu halten, von Gott kommen. Daß dieser uns aber hintergehen werde, sei nicht zu vermuthen. Dieser Grund ist aber sehr lahm, denn man kann dagegen mit Recht einwenden: daß wir uns selbst betrügen, wenn wir das glauben, was unsere Sinne uns lehren. Es stehe ia vielmehr in unserer Gewalt, dieses zu glauben oder nicht.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s24-005",
     "kind": "text",
     "aa": 928,
     "text": "Der Idealismus hat auch wirkliche Gründe vor sich und ist daher auch wahrscheinlicher als der Egoismus. Bischof Cloyd in Irland sagte nehmlich: Wenn geistige Wesen so im Commercio wären, daß ihre Körper bloß Effecte ihrer Imagination wären, so würde die Welt durch nichts an ihrem Werthe verlieren. Denn dieser beruhe eigentlich auf den denkenden Wesen. Daher sei es also unnütz, eine Körpeiwelt anzunehmen nach dem Grundsatz: Entia non sunt sine neceßitate multiplicanda. Bischof Berkeley in Irland ging noch weiter, denn er behauptete, daß Körper so gar unmöglich sind, weil man sich, wenn man sie annehme, immer widerspräche. Dies ist der dogmatische oder grobe Idealismus, daß außer uns keine Körper existirten, sondern daß die Erscheinungen nichts wären und bloß in unsern Sinnen und unserer Einbildungskraft lägen. Es giebt aber auch einen critischen oder transcendentalen Idealism, wenn man annimmt, daß die Erscheinungen an sich selbst zwar nichts sind, dabei aber doch wirklich etwas unbekanntes zum Grunde liegt. Das hat seine Richtigkeit.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s24-006",
     "kind": "text",
     "aa": 929,
     "aaEnd": 930,
     "pages": [
      {
       "p": 930,
       "i": 2536
      }
     ],
     "ms": [
      {
       "p": 228,
       "i": 321,
       "approx": true
      }
     ],
     "text": "Materialismus ist, wenn man annimmt, daß alles material sei. Diese Hypothese nehmen viele im ganzen Ernste an. Zwischen Materie und material ist ein Unterschied. Material ist das, was pars constitutiva einer Materie ist oder sein kann, und Materie ist das extensum, das aus solchen partibus besteht, oder ein undurchdringliches Ganze. Der also behauptet: die Materie bestehe aus einfachen Theilen oder Monaden, der behauptet auch, daß diese Theile zwar nicht Materie, aber Materialia sind. Wenn ich also sage: die Seele ist einfach, so kann ich daraus noch nicht beweisen, daß sie immaterial sei, und materiale von immaterialen Monaden unterscheiden. Nein, wenn die Seele einfach ist, so kann sie auch material sein, deswegen aber braucht sie noch nicht Materie zu sein. Wenn die Monaden der Körper auch wirklich sind, so müssen sie so gut als die Seele eine Vorstellung haben, welches auch Leibnitz behauptet. Die Seele wäre denn auch eine solche Monade, also material. Bestünden also die Körper aus einfachen Theilen, so hätte der Materialist nicht unrecht. Die Gründe, woraus Leibnitz das Dasein der Monaden und ihre Vorstellungskraft herleiten wollte, sind: Welt, sagt er, ist ein Ganzes aus einfachen Theilen oder Monadatum, denn was zusammengesetzt ist, setzt etwas einfaches voraus, woraus es zusammengesetzt ist. Es sind also Monaden. Was haben diese nun aber für Kräfte? Alle Kräfte, die wir an den Dingen kennen, gehen bloß auf äußere Verhältnisse, z.E. bewegende Kraft ist bloß Veränderung des Orts, Undurchdringlichkeit zielt auf Beharrlichkeit im Ort. Diese innre Realitaeten müssen doch sein, ob wir sie gleich nicht kennen. Sie müssen die Ursachen der äußern sein. Diese innre Kräfte aber können wir an keinem Dinge als an unserer Seele gewahr werden. Denn wir können sie nicht durch den äußern, sondern bloß durch den innern Sinn wahr nehmen. Und da finden wir, daß ihre innere Kraft das Denken sei, woraus das Wollen, Lust und Unlust entspringen. Da nun die Monaden auch einfach wie die Seele sind, so können sie auch vires repraesentatives haben und ihr Einfluß kann bloß modificatio virium repraesentativarum sein. (Sie können auch facultatem appetitivam haben, die der repraesentativae gemäß ist.) Demnach haben die Monaden Vorstellungskraft von allen Theilen der Welt, durch die sie afficirt werden. Weil sie aber nicht allein sind, sondern mit andern Monaden immer verbunden sind, so werden sie dadurch an ihrer Vorstellungskraft gehindert und haben daher dunkle Vorstellungen, sind sopitae, schlummernde Monaden. Dadurch sind sie von der Seele unterschieden. Leibnitz verstand hier auch wirklich bloß mundum Noumenon, nur er hat sich nicht recht deutlich ausgedrückt.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 8,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s24-007",
     "kind": "text",
     "aa": 930,
     "ms": [
      {
       "p": 229,
       "i": 221
      }
     ],
     "text": "Das ist nun die berühmte Monaden Lehre des Leibnitz. Sie ist aber ein bloßes Hirngespinst. Denn Leibnitz hat hierbei den Fehler begangen, daß er Mundum Noumenon und Phaenomenon mit einander verwechselt hat, denn das gilt nur vom Mundo Noumeno, daß die Körper aus Monaden bestehen. Aber von diesen wissen wir nichts als den bloßen Namen. Die Natur derselben aber kennen wir nicht. (In Ansehung des Mundi Noumenon bestehen die Körper aus einfachen Theilen. Denn wenn ich die Zusammensetzung des compositi substantiale aufhebe, so bleiben doch die Theile übrig. Da diese alsdenn nicht zusammengesetzt sind, so müssen sie einfach sein. Beim Mundus Phaenomenon aber ist es anders. Wenn ich hier die Zusammensetzung aufhebe, so bleibt mir nichts übrig. Denn Raum und Zeit sind hier das Wesentliche der Zusammensetzung; ohne diese kann mir kein Ding erscheinen.)",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s24-008",
     "kind": "text",
     "aa": 930,
     "text": "In Ansehung des Mundi Phaenomenon aber ist es offenbar falsch. Denn alle diese Schlüsse, sowohl die des Leibnitz, als auch der Materialisten aus diesem Satz des Leibnitz, fallen durch folgenden Satz übern Haufen: die Materie, oder vielmehr die Erscheinungen derselben in der Sinnen Welt, bestehen nicht aus einfachen Theilen, denn lstens kein Theil des Raums ist einfach, 2tens, aus soviel Theilen der Raum besteht, den der Körper einnimmt, aus soviel Theilen muß auch der Körper bestehen. Daher ist der Körper ins Unendliche theilbar, weil der Raum ins Unendliche theilbar ist. Die Körper selbst können vielleicht aus einfachen Theilen bestehen, aber nicht die Erscheinungen, denn sie sind nicht die Körper selbst. Nun kann ich sagen: denkende Wesen sind einfach. Materie ist aber nicht einfach, auch nicht das materiale. Demnach sind die Seelen immaterial. Die Impenetrabilitaet gehört zur Physic.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s24-009",
     "kind": "text",
     "aa": 930,
     "text": "Leibnitz und der Autor unterscheiden mathematische und physische I unkte. Diese sind die Monaden, iene die Oerter im Raum. Sie sagen: alle Monaden sind einfach, mithin nicht im Raum, sonst wären sie theilbar. Mithin sind sie Punkte, die untheilbar sind. Aber dei Raum nun besteht nicht aus Punkten. Daher besteht auch das, was im Raum ist, nicht aus Punkten.",
     "dehyphenated": 1,
     "ocrConf": 82
    }
   ]
  },
  {
   "id": "s25",
   "title": "2tes Capitel. Vom ersten Ursprünge der Körper.",
   "titleSrc": "heading",
   "headings": [
    "2tes Capitel. Vom ersten Ursprünge der Körper."
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s25-001",
     "kind": "heading",
     "aa": 931,
     "text": "2tes Capitel. Vom ersten Ursprünge der Körper."
    },
    {
     "id": "metaphysik-mrongovius-s25-002",
     "kind": "text",
     "aa": 931,
     "ms": [
      {
       "p": 230,
       "i": 611
      }
     ],
     "text": "Der Autor redet itzt von der ersten Möglichkeit der Erzeugung der Körper und beweist hier a priori verschiedene Sätze. (Hier wird nicht die physische, sondern die metaphysische Möglichkeit verstanden. Der Autor erklärt die Möglichkeit eines Körpers als eines monadati — die Veränderung des Raums ist immer reciproque. Von einem Schiff, das nach Pillau geht, sage ich: es bewegt sich dahin. Aber ich kann auch eben so gut sagen: Pillau bewegt sich zum Schiff immer näher als das Schiff zu ihm. Das kann strenge erwiesen werden, und daraus kann ich auch die Möglichkeit des Commercii a priori erweisen. Der Autor sucht die Möglichkeit der Bewegung aus der vi repraesentativa zu erklären. Es ist aber schlechterdings, unmöglich zu beweisen, daß dasienige, was ein Gegenstand des innern Sinnes ist, eine Ursache sein kann von dem, was ein Gegenstand des äußern Sinnes ist.) (Von der Bewegung kann kein Begriff a priori gegeben werden, weil dabei nothwendiger Weise was empirisches zum Grunde hegt. Materiale ist entweder das, was Materie oder was wenigstens pars constitutiva materiae ist. Dieienigen, die die menschliche Seele zur Monade machen, können die Schwierigkeit nicht haben, die daraus folgt, daß viele Seelen einen Körper ausmachen; unsere Elemente sind die Grundtheile des Körpers. Elementa qualitativa sind dieienige Grundtheile, die sich nicht mehr auflösen lassen in Elemente verschiedener Art. Elementa quantitativa sind dieienigen Grundtheile, die gar nicht mehr getheilt werden können; sie heißen Atomi.)",
     "dehyphenated": 5,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s25-003",
     "kind": "text",
     "aa": 931,
     "text": "Der Satz, daß Substanzen wechselseitig ineinander einfließen durch Actio, und Reactio ist, wol recht. Er kann aber nur in der Physik aus Erfahrungen, keineswegs aber in der Metaphysik a priori erwiesen werden. Die Ausdrücke bellum omnium contra omnia etc., sind unschicklich. Es bedeutet nur Harmonie, z.E. der Kutscher wirkt auf die Pferde, und die Pferde wirken auf den Wagen und ziehen ihn fort. Aber reactio ist eine entgegengesetzte Wirkung, ein Wiederstand. Der Autor will das hier a priori aus dem Nexu der Substanzen beweisen, aber daraus fließt nur das Commercium. Der Autor aber irrt sich, indem er reactio und Impediment für reciptivitaet hält.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s25-004",
     "kind": "text",
     "aa": 931,
     "aaEnd": 932,
     "pages": [
      {
       "p": 932,
       "i": 192
      }
     ],
     "text": "Nun will er auch a priori beweisen, daß die Monaden Zusammenhängen. Wie kann ich aber a priori einsehen, daß die Substanz eine Kraft hat? Die Berührung ist nur eine Art der immediaten Wirkung und Gegenwirkung vermöge der Impenentrabilitaet. Diese ist aber ein Physischer Begriff.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s25-005",
     "kind": "text",
     "aa": 932,
     "text": "Ueberdem ist die Anziehung ganz verschieden, da ein Körper in den anderen so wirkt, daß der andre in den Raum, in welchem der wirkende ist, eindringen will. Der bei der Berührung gehört nicht hierher, sondern kommt der Materie zu und beruht auf der Undurchdringlichkeit. Diese können wir nur a posteriori beweisen. Immediate Wirkung ist ein V erstandes Begriff. Der Autor hat es daher ganz schlecht bewiesen.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s25-006",
     "kind": "text",
     "aa": 932,
     "ms": [
      {
       "p": 231,
       "i": 150
      }
     ],
     "text": "Atomus (indivisibile) ist entweder absolute oder mathematice talis, welches aus keinen Theilen mehr besteht, sondern einfach ist; oder physice talis, welcher durch keine Chymie weiter getheilt werden kann, ob er gleich doch noch aus Theilen besteht.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s25-007",
     "kind": "text",
     "aa": 932,
     "text": "Atomus absolute talis wäre eine Monade, und das ist nicht anzunehmen Atomus physicus ist aber von allen Physicern angenommen. Die Figur, sagen sie, mache die Differentiam specificam aus und könne nie aufgelöst werden. Denn wenn sie zu Monaden aufgelöst würden, so würde auch ihre Figur aufhören müssen; mithin würde unter ihnen gar kein Unterschied mehr sein und alle Mannigfaltigkeit in den Dingen in der Welt würde aufhören. Nun aber sehen wir, daß Gold Gold bleibt, wenn es auch in die subtilsten Theile aufgelöst ist.",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s25-008",
     "kind": "text",
     "aa": 932,
     "text": "Die Prmcipien, die die Atomos physicos zu den ersten Grund Theilen annimmt, ist Philosophia pigrorum.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s25-009",
     "kind": "text",
     "aa": 932,
     "text": "Die die Phaenomena aus Corpusculis (unsichtbaren Theilen) erklart, ist Philosophia corpuscularis (Corpuscula sind atomi physici. Nach Cartesius Hypothese sind sie untheilbar und machen die Verschiedenheit der Materie aus) (Bei ihm sind die atomi auch der Grund Stoff des Körpers. Körper ist das, dessen Schranken des Raums der Materie bestimmt sind.). Diese nehmen Gaßendi, Cartesius etc. etc. an. Atomistica des Epicurs ist damit einerlei, nur daß er dabei ein vacuum oder inane annahm.",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-mrongovius-s25-010",
     "kind": "text",
     "aa": 932,
     "text": "Der die Erscheinungen aus Monaden erklärt, ist Atomista Metaphysicus, und der sie aus den Corpusculis oder atomis physicis erklärt, ist Atomista physicus.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s25-011",
     "kind": "text",
     "aa": 932,
     "text": "Ignava ratio nannten die Alten das, wenn man von der ratione proxima gleich ad remotißimam geht, ohne die rationes intermedias zu berühren. Wenn man die Erklärung aller Begebenheiten sogleich auf Gott bezieht, ohne den nächsten natürlichen Ursachen nachzuspüren.",
     "ocrConf": 84
    }
   ]
  },
  {
   "id": "s26",
   "title": "Drittes Capitel. Von der Natur der Koerper",
   "titleSrc": "heading",
   "headings": [
    "Drittes Capitel. Von der Natur der Koerper"
   ],
   "provenance": "Metaphysik Mrongovius Metaphysic vorgetragen von Prof. Immanuel Kant nachgeschrieben von C. C. Mrongovius 1783 d. 4. Febr:",
   "blocks": [
    {
     "id": "metaphysik-mrongovius-s26-001",
     "kind": "heading",
     "aa": 933,
     "text": "Drittes Capitel. Von der Natur der Koerper"
    },
    {
     "id": "metaphysik-mrongovius-s26-002",
     "kind": "text",
     "aa": 933,
     "ms": [
      {
       "p": 232,
       "i": 429
      }
     ],
     "text": "Die obiectiven Principien sind die allgemeinen Vernunft Gründe, warum die Dinge geschehen sollten (Natur ist das Dasein des Dinges, sofern es nach allgemeinen Gesetzen innerlich bestimmt ist.) Wir können nicht einsehen, wie ein einziges erschaffenes Wesen die Dinge an sich selbst erkennen kann. Wir würden die Dinge nicht erkennen, wenn wir sie nicht durch die Handlung erkennten. Das sind die dynamischen Grundsätze der Natur. Der Grund der Bestimmbarkeit der Erscheinung muß im Verstand liegen, auch der Grund der Bestimmbarkeit des Wesens. Ihrem Wesen nach sind sie bestimmt in Raum und Zeit. Der Verstand ist das Vermögen der Regeln; ohne diesen ist keine Erfahrung. Wir müssen also Natur Gesetze vor der Erfahrung voraus schicken, die der Verstand giebt. Raum und Zeit machen die Erscheinung und so auch die Natur Gesetze der Erfahrung möglich. — Unser Verstand schreibt daher der Natur Gesetze vor. Man sagt aber: wo werden sich aber die Dinge nach meinem Verstand richten? Die Erscheinungen können nicht Erfahrungen werden, wenn sie nicht dem Verstand gemäß sind. Das bedeutet dieses bloß. Diese heißen also die obersten dynamischen Grundsätze. — Der Verstand schreibt nicht alle Gesetze der Natur vor, oder sieht sie ein, sondern bloß die zur Möglichkeit der Erfahrung gehören. 1. Nur die Substanz beharrt, und die Zustände wechseln. 2. Was geschieht, hat eine Ursache. 3. In allen Erscheinungen ist keine Wirkung ohne Gegenwirkung). Die Natur ist nun das erste allgemeine innre obiective Princip alles dessen, was zum Dasein der Caußalitaet eines Dinges gehört. Dadurch ist es vom Wesen unterschieden, welches das innre Princip der Möglichkeit eines Dinges ist. Natur ist das erste Princip, und also keinem andern subalternirt, z. E. der Grund der Erfindungen ist Nachdenken. Dieses kommt wieder aus dem Verstände; dieses wieder aus dem Bewußtsein, und dieses ist die Natur.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s26-003",
     "kind": "text",
     "aa": 933,
     "text": "Natur ist ferner ein allgemeines Princip, woraus ich alle Dinge erklären kann. Endlich ist es auch ein inneres Princip, welches in den Dingen selbst angetroffen wird. Dadurch ist es von einem Wunder unterschieden. Dieses ist auch ein Princip, aber ein äußeres, z.E. wenn ein Kranker durch seine Natur gesund wird, so kommt das von ihm selbst, von dem Bau seines Körpers her. Wird er aber durch ein Wunder kurirt, so kommt das von einer andern Ursache außer ihm her.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s26-004",
     "kind": "text",
     "aa": 934,
     "text": "Die Natur ist endlich das Princip vom Dasein der Dinge. Dadurch ist es genau von der Möglichkeit unterschieden. Diesen Unterschied haben auch scharfsichtige Männer außer Acht gelassen, wie z. E. Reimarus die Natur durch wesentliche Kraft erklärt, welches falsch ist. Denn zur Natur gehören Kräfte, weil zur Natur Wirklichkeit gehört. Ist aber eine Substanz wirklich, so hat sie, insofern sie der Grund von etwas anderm sein kann, Kraft.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s26-005",
     "kind": "text",
     "aa": 934,
     "ms": [
      {
       "p": 233,
       "i": 153,
       "raw": "283",
       "inferred": true
      }
     ],
     "text": "Zur Natur gehören aber auch Formale Bedingungen der äußern Kräfte. Z.E. Ein Keil muß, weil er Holz spalten soll, zugespitzt sein. Dieses ist das Formale bei der Kraft und gehört mit zur Natur des Keils. Was nur möglich ist, hat keine Natur, z.E. ein Triangel. Die Erklärung des Reimarus von der Natur ist also 1. unvollständig, denn zur Natur gehören nicht bloß Kräfte, sondern auch die Verbindung derselben miteinander. Ferner ist sie 2. mit Wesen verwechselt.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s26-006",
     "kind": "text",
     "aa": 934,
     "text": "Alle Obiecte der Erfahrung haben ihre Natur, denn ohne diese ist keine Erfahrung möglich. Erfahrung ist nicht ein Aggregat von Wahrnehmungen, sondern ein nach einem Princip verknüpftes Ganze von Wahrnehmungen. Mithin muß in jedem Dinge ein Princip sein, nach dem die Wahrnehmungen verknüpft werden und dieses ist — -Natur.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s26-007",
     "kind": "text",
     "aa": 934,
     "text": "Natur kann in 2erlei Bedeutung genommen werden. Erstens Substantive oder materialiter. Dieses heißt schlechthin die Natur aller Dinge. Es ist das Ganze aller Naturen, die Einheit aller verknüpften Natur, kurz, die allgemeine Natur aller Dinge, oder das, was alle Dinge mit einander gemein haben.",
     "dehyphenated": 1,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s26-008",
     "kind": "text",
     "aa": 934,
     "text": "2 wird Natur auch gebraucht als besondere Natur eines ieden Dinges, oder adjective vel formaliter. Jedes Ding hat seine eigene Natur, nach der es von anderen unterschieden ist, z.E. die Natur des Körpers ist Ausdehnung und Bewegungs Kraft. Die Natur der Seele ist Denken und Wollen etc.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s26-009",
     "kind": "text",
     "aa": 934,
     "text": "Endlich nennt man auch Natur, und zwar am mehresten, die Ordnung der Dinge nach gewissen allgemeinen Gesetzen.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s26-010",
     "kind": "text",
     "aa": 934,
     "aaEnd": 935,
     "pages": [
      {
       "p": 935,
       "i": 392
      }
     ],
     "text": "Es ist vernünftig, alles was in der Welt geschieht, nach diesen Gesetzen zu erklären; man muß das aber auch nicht allenthalben thun, wo es gar nicht angeht. Es ist dies eben so ein großer Fehler, als wenn wir unbekannte Kräfte zum Erkenntniß Grund annehmen. Denn da habe ich eigentlich nichts erklärt. Man braucht die Natur oft als eine Person oder als eine Form, die keine Substanz ist, und doch dafür gehalten wird. Aristoteles nannte des Forma substantialis, und das war auch bei ihm die Seele.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-mrongovius-s26-011",
     "kind": "text",
     "aa": 935,
     "text": "Der Natur sind entgegengesetzt 1. das Ohngefähr. Weil aber alle Dinge Natur haben, so ist nichts von Ungefähr. Es ist alles nach Gesetzen. Das Fatum aber Nothwendigkeit ohne Gesetze, ohne Grund.",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-mrongovius-s26-012",
     "kind": "text",
     "aa": 935,
     "ms": [
      {
       "p": 234,
       "i": 300
      }
     ],
     "text": "Die Freiheit ist auch eine Natur, sofern sie nicht von andern, sondern von sich selbst bestimmt ist. Diese hat der Mensch. Die Thiere bestimmen zwar ihren Instinct, dieser ist aber doch vorher schon von Gott dazu bestimmt. Den Anfang der Natur (wie der Autor will) Leben, und das Ende Tod zu nennen, gehört nur für lebendige, nicht aber für leblose Geschöpfe. Das wäre zu symbolisch. Machina ist nicht Corpus secundum leges universales motus mobile, wie der Autor es erklärt, sondern secundum leges parti culares. Sonst wäre ieder Körper eine Maschine. Mechanismus ist modus compositionis einer Maschine. Er ist das Formale, sowie die bewegende Kraft des materiale Gesetz in der Natur.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-mrongovius-s26-013",
     "kind": "text",
     "aa": 935,
     "text": "Etwas aus der Natur der Körper erklären, heißt physisch, und aus der Natur der denkenden Wesen erklären, pneumatisch. Wenn ich etwas nicht aus der Natur, sondern aus einer Ursache, die über die Natur geht, erkläre, so ist dieses hyperphysisch erklärt. Geschieht dies aber aus qualitatibus occultis, so ists Hypophysisch. Der Körper ist in nexu mechanico, der aus den bewegenden Kräften kann erklärt werden. Es giebt noch 2erlei physische Erklärungs Arten: 1. Philosophia mechanica, die alle Phaenomene aus der Gestalt und der allgemeinen bewegenden Kraft der Körper erklärt. Dies ist auch mechanice oder physico mechanice erklärt. Hier erkläre ich nicht den Ursprung, sondern die Veränderung der Bewegung aus schon vorhandenen Bewegungen. Z.E. Man erklärt mechanisch, wie Eßig Kreide auflößt, dadurch : Eßig hat in seinen Atomis lauter spitze Theilchen, die wie Spieße aussehen. Diese durchbohren nun die Kreide und so wird sie aufgelöst. Diese Kraft, die die Eßig Spieße in die Kreide treibt, kommt von der äußern Luft Wärme her. Wo kommt aber die her? Da sitzen wir. Mechanisch kann man also die Phaenomene doch nicht erklären.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-mrongovius-s26-014",
     "kind": "text",
     "aa": 935,
     "aaEnd": 936,
     "pages": [
      {
       "p": 936,
       "i": 257
      }
     ],
     "text": "2. Die Dynamische Erklärungs Art, wenn man gewisse Grund Kräfte annimmt, aus denen man die Phaenomene herleitet. Dieses ist zuerst von Newton erfunden und befriedigender und vollständiger als die vorige. Also mechanisch etwas erklären, heißt etwas nach den Gesetzen der Bewegung erklären, dynamisch, aus den Kräften der Körper. Bei ieder Erklärung kommt man niemals zu Ende. Die rechte Erklärungs Art ist die physico dynamische, die beide in sich schließt. Das ist die Erklärungs Art der itzigen Zeit. Die erste ist die Erklärungs Art des Cartesius, die 2te die der Chymiker. So erklärt z.E. Cartesius die Anziehungs Kraft der Körper so, daß er eine Materie annahm, die um die Körper flöße und sie zusammenhielte. Fragt man aber, wo kommt diese Materie her, so kann man sie nicht anders als von Gott herleiten. Newton erklärte diese Erscheinung dynamisch, so daß Gott in die Substanz Kraft gelegt hatte, die Körper an sich zu ziehen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s26-015",
     "kind": "text",
     "aa": 936,
     "ms": [
      {
       "p": 235,
       "i": 0
      }
     ],
     "text": "Dritter Abschnitt",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s26-016",
     "kind": "text",
     "aa": 936,
     "text": "Von der Vorstellung des Ganzen",
     "ocrConf": 89
    },
    {
     "id": "metaphysik-mrongovius-s26-017",
     "kind": "text",
     "aa": 936,
     "text": "1. Capitel",
     "ocrConf": 62
    },
    {
     "id": "metaphysik-mrongovius-s26-018",
     "kind": "text",
     "aa": 936,
     "text": "Von der besten Welt",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-mrongovius-s26-019",
     "kind": "text",
     "aa": 936,
     "aaEnd": 937,
     "pages": [
      {
       "p": 937,
       "i": 1272
      }
     ],
     "text": "(Im transcendentalen Verstände sind alle Dinge heterogen und mithin kann man in diesem Verstände nicht sagen, daß ein Ding vollkommener sei als das andre. Man muß daher auf eine gewisse Aehnlichkeit der Dinge sehen, und denn kann man den Unterschied machen zwischen dem Guten, Besten und dem Vollkommensten. Gut ist das, was der obiective Grund unserer Wahl ist, denn was der subiective Grund unserer Wahl ist, ist angenehm. Der größte obiective Grund unserer Wahl ist das Beste. Vollkommenheit ist der Grund der größten obiectiven Einheit des Erkenntnißes. So ist das Gute für den Willen, das Vollkommene für den Verstand. Zur größten Vollkommenheit der Welt gehört: 1. Die größte Menge der Substanzen nach ihrer extensiven, intensiven und protensiven Größe. 2. Eine vollständige Verknüpfung derselben nach den Regeln der größten Einheit. Dies letztere gehört vorzüglich dazu und ist das Vornehmste.) Man kann sich denken Summum bonum originarium und derivativum. Die Welt ist das letztere. Denn ein Totum ist immer zufällig und daher caußatum. Hier ist eigentlich von der Vollkommenheit der Welt die Rede. Der Autor hat das mit Optimum verwechselt, da es doch davon verschieden ist. Die Vollkommenheit, insofern sie eine Vollständigkeit des Ganzen und wechselseitige Harmonie und Verknüpfung des Ganzen bedeutet, ist transcendentale Vollkommenheit. Hier bedeutet also auch die Vollkommenheit der Welt die Vollkommenheit des Ganzen, welchem kein Theil fehlt, der noch hinzukommen könnte, und das in der besten Ordnung und Verbindung steht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s26-020",
     "kind": "text",
     "aa": 937,
     "text": "Bei der Vollkommenheit der Welt haben wir also zweierlei zu bemerken: 1. eine Vollkommenheit in Ansehung der Theile oder extensive Größe 2. die Vollkommenheit in der Verknüpfung oder intensive Größe. Keine Welt ist absolute vollständig in Ansehung ihrer Theile. Es können noch immer mehr Substanzen hinzukommen; so wie zu ieder Menge noch etwas hinzukommen kann. Die Menge der Theile macht aber nicht die Vollkommenheit aus, sondern nur die Mannigfaltigkeit derselben. Indeßen ist doch ein Größestes möglich, z.E. aus der Menge der Untherthanen in einem Lande kann ich nicht sogleich auf die Vollkommenheit des Staats schließen. ( bricht ab).",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s26-021",
     "kind": "text",
     "aa": 937,
     "ms": [
      {
       "p": 236,
       "i": 0,
       "approx": true
      }
     ],
     "text": "I Wäre keine Hoffnung zum künftigen Leben, so würde der Lasterhafte, welcher durch allerlei Mittel und Ränke sich in den Besitz der irdischen Glückseeligkeit zu setzen suchte, der glücklichste sein.",
     "dehyphenated": 1,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-mrongovius-s26-022",
     "kind": "text",
     "aa": 937,
     "text": "Daher sieht man, daß die Metaphysik aus diesem practischen Intereße unserer Vernunft zuerst entstanden sei.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-mrongovius-s26-023",
     "kind": "text",
     "aa": 937,
     "text": "Der Nutzen der Metaphysik ist",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-mrongovius-s26-024",
     "kind": "text",
     "aa": 937,
     "text": "2. Logisch, indem sie unsern Verstand erweitert, denn indem wir die Begriffe unseres Verstandes zergliedern, so klären wir ihn dadurch auf. Aber dieser Nutzen ist zu unerheblich, als daß er zur Erfindung der Metaphysik könnte Anlaß gegeben haben, und wäre er nur allein, so wäre die ganze Metaphysik entbehrlich.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-mrongovius-s26-025",
     "kind": "text",
     "aa": 937,
     "text": "Um der Physic und Mathematic willen brauchte man die Metaphysik nicht. Denn die Principien der Möglichkeit der Erfahrung sieht man täglich aus der Erfahrung selbst, und den Irrthum in der Erfahrung kann ich bald entdecken, wenn ichs wiederhole. Ueberdem so geht die Metaphysik nicht auf die Natur Wissenschaft, sondern über dieselbe. Der Nutzen der Metaphysik überhaupt betrachtet, ist entweder positiv oder negativ. Immer nehmlich besteht der positive Nutzen einer Sache darin, wie wir durch sie einige Vollkommenheit mehr erlangen können; der positive Nutzen der Metaphysik also ist die Erlangung einer Kenntniß von Gott und der Hoffnung eines künftigen Lebens. Der negative Nutzen, uns vor Irrthümern zu bewahren.",
     "dehyphenated": 3,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s26-026",
     "kind": "text",
     "aa": 937,
     "text": "13»",
     "ocrConf": 41
    },
    {
     "id": "metaphysik-mrongovius-s26-027",
     "kind": "text",
     "aa": 938,
     "aaEnd": 939,
     "pages": [
      {
       "p": 939,
       "i": 2532
      }
     ],
     "ms": [
      {
       "p": 237,
       "i": 601
      },
      {
       "p": 238,
       "i": 2709
      },
      {
       "p": 239,
       "i": 4739
      }
     ],
     "text": "Der negative Nutzen der Metaphysik ist der größere, indem er in der Abhaltung der Unvollkommenheit besteht. Es ist doch aber wol wichtiger, dem Schmerz abzuhelfen, als sich ein Vergnügen zu verschaffen. Der negative Nutzen der Metaphysik ist auch fast der einzige, denn das Dasein Gottes und die Hoffnung eines zukünftigen Lebens kann ein ieder Mensch bei einiger Betrachtung der Natur und seines Zustandes durch den gesunden Menschen Verstand erkennen und hat also kein speculatives Nachforschen nöthig. welches überhaupt von den wenigsten Menschen geschehen kann. Aber dies ist bloß ein practischer Glaube, bei dem der Mensch durch ieden speculativen Zweifel irre gemacht werden kann. Um nun diese speculativen Zweifel und Untersuchungen, die durch den practischen Glauben nicht wiederlegt werden können, und unsrer Vernunft doch unentbehrlich sind, aufzulösen, müssen auch speculative Principien entgegengesetzt werden, und dies thut die Metaphysik. Ihr Hauptnutzen ist also, unsre Erkenntniß von Irrthiimern zu reinigen und sie davor zu bewahren. Die Hauptzwecke der ganzen Metaphysik sind die Erkenntniß Gottes und die Hoffnung eines künftigen Lebens. Wenn die Metaphysik bloß diese Frage: Ists wahr, daß ein Gott und ein künftiges Leben ist? erörtern wollte, so wäre sie gar nicht nöthig, sondern man kann ia dieses nach den Regeln eines vernünftigen practischen Glaubens mit der größten Wahrscheinlichkeit einsehen. Aber sie untersucht vielmehr, ob wir durch bloße speculation zur Erkenntniß Gottes und eines künftigen Lebens kommen können, und wie weit wir das zu thun im Stande sind. Es giebt 2erlei Art, eine Wissenschaft zu behandeln, dogmatisch und critisch. 1. Die dogmatische Methode ist dieienige, wenn ich einige Erkenntniß als unerweißliche Sätze zum Grunde lege und die andern darauf baue. 2. die critische Methode, wenn ich die Grundsätze selbst nach ihrer Entstehungsart, aus welcher Gemüthskraft sie entsprungen sind, und nach ihrer Möglichkeit, wie sie a priori haben entspringen können, untersuche. In der Geometrie verfährt man dogmatisch, so wie auch in andern Wissenschaften, z.E. der Satz: zwischen 2 Puncten kann nur eine grade Linie sein. Dieses ist gar nicht zu untersuchen nöthig, denn man kann es gleich aus der Erfahrung bestätigen. Daher gelten auch in der Mathematic indemonstrable Sätze; aber in der Philosophie, besonders Metaphysik, kann man nicht dogmatisch verfahren. Z.E. Wenn ich den Grundsatz annehme: Alles was entsteht, ist in der Zeit, so kann ich daraus viele falsche und unbeweisbare Sätze schließen und Schlüße herleiten. Ich kann sagen, wenn alle Dinge in der Zeit sind, so muß die erste Ursache derselben auch in der Zeit sein. Sie muß also auch erst in der Zeit angefangen haben zu wirken. Warum aber hat sie denn nicht eher wirken können? Dieses ist für den Verstand unauflöslich, und wenn er der Sache noch weiter nachforscht, so fällt er zuletzt in Irrthümer. Daher gehts in der Philosophie nicht an, nach Grundsätzen zu verfahren, weil sie nicht sicher und hinreichend sind, alle daraus gezognen Folgen zu erklären. Die critische Methode geht nicht auf die Erkenntniß selbst oder aufs Obiect, sondern auf den Verstand. Daher ist sie nicht obiectiv, sondern subiectiv. Wenn ich also in der Philosophie einen Grundsatz angenommen habe, so muß ich ihn erst bewiesen haben. Kann ich ihn aber nicht beweisen, so ist er verdächtig und nicht zu gebrauchen. Denn wenn die daraus gefolgerte Erkenntnisse einen Wiederspruch faßen, so kann ich denselben nicht heben, weil die Metaphysik über die Erfahrung geht und ich also die Grundsätze nicht nach der Erfahrung prüfen kann. Bei der Metyphysik ist die Critic am unentbehrlichsten, weil man sonst sehr leicht irren kann, da sie keinen Leitfaden, hat indem sie über die Grenze der Erfahrung steigt; daher ist der Nutzen der Metaphysik auch negativ und zwar ist also dieser Nutzen der größte, weil die Critic der Metaphysik am nöthigsten ist. Indem sie also auf Critic gebaut ist und uns vor Irrthümern bewahrt, so ist sie eine Schutzwehr der Religion wieder alle speculativen Zweifel. Wir werden in unserm Vortrage beide Methoden verbinden, zuerst dogmatisch, und es hernach Schritt vor Schritt critisiren. Denn begleitet die Critic nicht die Dogmatic, so haben wir keinen Probierstein der Wahrheit. Wenn ich z.E. vom Welt Anfänge rede, so kann ich dieses doch unmöglich aus der Erfahrung haben, ich kann es auch nie durch Erfahrung bestätigen, sondern dieses geht über alle Erfahrung und ist also eine bloße Idee in meiner Vernunft. — Wie kommt aber mein Verstand dazu und wieweit reicht er? muß ich denn fragen. Es ist sonderbar, daß man diese Fragen noch fast gar nicht untersucht hat. Man hat zwar die Fragen gestellt und untersucht, woher unsere Begriffe kommen; aber das gehört nicht hieher.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s26-028",
     "kind": "text",
     "aa": 939,
     "aaEnd": 940,
     "pages": [
      {
       "p": 940,
       "i": 262
      }
     ],
     "text": "In ieder Wissenschaft, die Vernunft Begriffe in sich enthält, stellt man sich eine Metaphysik der Wissenschaft vor, die man von dieser Metaphysik wohl unterscheiden muß. Wenn ich in einer Verstandes Wissenschaft die reine Vernunft Erkenntniß von der empirischen absondere, so ist diese Sammlung — - eine Metaphysik derselben Wissenschaft. Sie ist also das reine Product der Vernunft in den Wissenschaften. Dies ist in einer Wissenschaft sehr nützlich, um die Vernunft Erkenntniß von der empirischen abzusondern, um die Irrthümer desto deutlicher einzusehen. Metaphysik ist der Geist der Philosophie. Sie verhält sich zur Philosophie wie der spiritus vini zum Weine. Sie läutert unsere Elementar Begriffe und macht uns dadurch geschickt, alle Wissenschaften einsehen zu können. Kurz, sie ist die größte Cultur des menschlichen Verstandes.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-mrongovius-s26-029",
     "kind": "text",
     "aa": 940,
     "text": "Geschichte der Metaphysik",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-mrongovius-s26-030",
     "kind": "text",
     "aa": 940,
     "text": "(bricht ab)",
     "ocrConf": 55
    }
   ]
  }
 ]
};
