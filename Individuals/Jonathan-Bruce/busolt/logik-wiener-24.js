/* ─────────────────────────────────────────────────────────────────────────────
   Wiener Logik, Academy Edition XXIV (1780ff.)
   Machine-extracted from the transcription in Textfiles/Vol24logikWien.rtf by
   scripts/parse_logik.py — do not hand-edit; corrections belong in the
   extractor so they survive the next run.

   One of Kant's three logic lecture transcripts in AA XXIV that this
   repository carries; logik-blomberg-24.js and logik-busolt-24.js are the others, in the same
   shape. The transcription sets the text in short lines broken by the Academy
   Edition's page markers; this file has it as running prose, with every page
   it crossed kept as an offset into that prose, so any stretch of it can be
   cited as `AA 24:N` and the pagination put back exactly where it stood.

   LOGIK_WIENER.meta     work, siglum, volume, the AA page range, the manuscript
                         note the volume prints, and the extractor's counts
   LOGIK_WIENER.front    the title page, verbatim, line by line
   LOGIK_WIENER.contents the volume's Inhaltsverzeichnis: { label, pages }
   LOGIK_WIENER.sections the lecture itself

   Section fields
     id         stable id, `s01`…; a block's id begins with it
     title      the section's title as the transcription prints it before the
                provenance line; where it prints none there, the manuscript's
                own heading stands in. Never body text — see `titleSrc`
     titleSrc   where `title` came from: `line` for its own line before the
                provenance line, `heading` for the manuscript heading after it
                standing in because there was no such line, `none` for a
                section the transcription gives no title at all (the Titelei
                of Busolt and the Wiener Logik). Attested either way; recorded
                because the two are not the same evidence
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

const LOGIK_WIENER = {
 "meta": {
  "work": "Wiener Logik",
  "label": "VIII. Wiener Logik",
  "volume": 24,
  "date": "1780ff.",
  "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym-Wien. Nach dem Orig.)",
  "source": "Textfiles/Vol24logikWien.rtf",
  "aa": [
   785,
   940
  ],
  "counts": {
   "sections": 13,
   "blocks": 395,
   "pages": 154,
   "joinedAtMark": 95,
   "joinedInferred": 1
  }
 },
 "front": [],
 "contents": [],
 "sections": [
  {
   "id": "s01",
   "title": "",
   "titleSrc": "none",
   "headings": [],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym-Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s01-001",
     "kind": "text",
     "aa": 787,
     "text": "Kant’s von einer Gesellschaft Zuhörern",
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "wiener-s01-002",
     "kind": "text",
     "aa": 787,
     "text": "Inhaltsverzeichnis"
    },
    {
     "id": "wiener-s01-003",
     "kind": "text",
     "aa": 789,
     "text": "Prolegomena"
    },
    {
     "id": "wiener-s01-004",
     "kind": "text",
     "aa": 789,
     "text": "790"
    },
    {
     "id": "wiener-s01-005",
     "kind": "text",
     "aa": 789,
     "text": "Geschichte der Logik"
    },
    {
     "id": "wiener-s01-006",
     "kind": "text",
     "aa": 789,
     "text": "796"
    },
    {
     "id": "wiener-s01-007",
     "kind": "text",
     "aa": 789,
     "text": "Tractatio Logices"
    },
    {
     "id": "wiener-s01-008",
     "kind": "text",
     "aa": 789,
     "text": "805- 940"
    },
    {
     "id": "wiener-s01-009",
     "kind": "text",
     "aa": 789,
     "text": "Von der Erkenntniß"
    },
    {
     "id": "wiener-s01-010",
     "kind": "text",
     "aa": 789,
     "text": "805"
    },
    {
     "id": "wiener-s01-011",
     "kind": "text",
     "aa": 789,
     "text": "Vom Beyfall und Zurückhalten des Beyfalls"
    },
    {
     "id": "wiener-s01-012",
     "kind": "text",
     "aa": 789,
     "text": "859"
    },
    {
     "id": "wiener-s01-013",
     "kind": "text",
     "aa": 789,
     "text": "Von der wahrscheinlichen Erkenntniß"
    },
    {
     "id": "wiener-s01-014",
     "kind": "text",
     "aa": 789,
     "text": "879"
    },
    {
     "id": "wiener-s01-015",
     "kind": "text",
     "aa": 789,
     "text": "Von den Begriffen"
    },
    {
     "id": "wiener-s01-016",
     "kind": "text",
     "aa": 789,
     "text": "904"
    },
    {
     "id": "wiener-s01-017",
     "kind": "text",
     "aa": 789,
     "text": "Kurze Wiederholung des Vorigen"
    },
    {
     "id": "wiener-s01-018",
     "kind": "text",
     "aa": 789,
     "text": "908"
    },
    {
     "id": "wiener-s01-019",
     "kind": "text",
     "aa": 789,
     "text": "Eintheilung aller Definitionen"
    },
    {
     "id": "wiener-s01-020",
     "kind": "text",
     "aa": 789,
     "text": "913"
    },
    {
     "id": "wiener-s01-021",
     "kind": "text",
     "aa": 789,
     "text": "Von der logischen Eintheilung"
    },
    {
     "id": "wiener-s01-022",
     "kind": "text",
     "aa": 789,
     "text": "925"
    },
    {
     "id": "wiener-s01-023",
     "kind": "text",
     "aa": 789,
     "text": "Von den Urtheilen"
    },
    {
     "id": "wiener-s01-024",
     "kind": "text",
     "aa": 789,
     "text": "928"
    },
    {
     "id": "wiener-s01-025",
     "kind": "text",
     "aa": 789,
     "text": "Von den Verstandes-Schlüssen"
    },
    {
     "id": "wiener-s01-026",
     "kind": "text",
     "aa": 789,
     "text": "938"
    },
    {
     "id": "wiener-s01-027",
     "kind": "text",
     "aa": 789,
     "text": "Von den Vernunft-Schlüssen"
    },
    {
     "id": "wiener-s01-028",
     "kind": "text",
     "aa": 789,
     "text": "939"
    },
    {
     "id": "wiener-s01-029",
     "kind": "rule",
     "aa": 789,
     "text": "__________"
    },
    {
     "id": "wiener-s01-030",
     "kind": "text",
     "aa": 789,
     "text": "[Wiener Logik]"
    }
   ]
  },
  {
   "id": "s02",
   "title": "Prolegomena",
   "titleSrc": "line",
   "headings": [
    "Prolegomena."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s02-001",
     "kind": "text",
     "aa": 790,
     "text": "Alles in der Welt geschieht nach Regeln, so wie wir dies in der körperlichen Natur wahrnehmen, so finden wir es selbst bey der Ausübung unserer eigenen Kräfte, ob wir uns gleich der Regeln nicht ein Mahl bewußt sind. Zu dieser Ausübung gelangt man durch bloße Versuche, und eben aus diesen Versuchen, z.E. Jemand reden oder gehen zu lehren, kann man die Menge der Regeln abnehmen. Auf diese Art können wir von uns selbst viele Regeln lernen. Grammatik besteht aus unendlichen Regeln. Deswegen haben auch Einige die Sprache für göttliche Eingebung gehalten. Indeßen ist so viel gewiß, daß alle Sprachen ihren ersten Prinzipien nach in eine Grammatik zusammen gebracht werden können. Sonst ist Grammatik freylich eine Verstandeslehre. Denn wie unsre Seele Begriffe verbindet: so müssen auch die Wörter verbunden werden. Sie ist für die Schulfähigkeit zu abstrakt. Man nehme nur die abstrakten Regeln vom genere Substantivo etc. Diese Regeln, wornach unsre Kräften wirken, laßt uns näher untersuchen. Der Verstand ist das Vermögen der Regeln selbst, und der Verstand allein kann diese Regeln prüfen. Nach welchen Regeln thut er das? Dies ist deßwegen schwer zu finden, weil er, wenn er selbst irret, die Richtigkeit der Regeln nicht angeben kann, wornach er verfährt.",
     "ms": [
      {
       "p": 2,
       "i": 891
      }
     ]
    },
    {
     "id": "wiener-s02-002",
     "kind": "text",
     "aa": 790,
     "text": "Alle Regeln des Gebrauches unsrer Kräfte, sind entweder schlechterdings nothwendig, oder bedingt nothwendig. Ohne die ersten findet gar kein Gebrauch des Verstandes Statt, ohne die zufälligen wird der Gebrauch des Verstandes in gewißer Absicht aufhören. Die Nothwendigen müssen so beschaffen seyn, daß sie ohne Unterschied der Objekte vom Verstande gelten. Sie müssen bloß die Form des Verstandes betreffen."
    },
    {
     "id": "wiener-s02-003",
     "kind": "text",
     "aa": 791,
     "text": "Anmerkung. In allem Denken ist Materie und Form. Materie betrifft den Gegenstand, und Form die Art der Behandlung. So ist Physiologie und Psychologie der Materie nach unterschieden. Der Form nach können sie, wenn sie empirisch behandelt werden, gleich seyn. Unsere Sinne geben der Materie die Erkenntniß. Im Verstand lieget [erg. nicht] die Anschauung. Wörter sind die Materie, Grammatik aber die Form der Sprache. Eine Wissenschaft also, die sich mit der Form des Verstandes beschäftiget, heißt Logik.",
     "pages": [
      {
       "p": 791,
       "i": 396
      }
     ],
     "aaEnd": 791,
     "ms": [
      {
       "p": 3,
       "i": 162
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s02-004",
     "kind": "text",
     "aa": 791,
     "text": "Unser Verstand hat mancherley Objekte der Erkenntniß und der Wissenschaft, als Historie, Mathematik – die allgemeine Logik aber abstrahirt von allem diesem Inhalte, von aller Verschiedenheit der Erkenntniß, und betrachtet in allem nur die Form der Begriffe, der Urtheile und der Schlüsse. Kurz, sie ist eine von den Wissenschaften, die uns zu andern vorbereiten."
    },
    {
     "id": "wiener-s02-005",
     "kind": "text",
     "aa": 791,
     "text": "Προπαιδευτική (propositiones). Ein jeder Mensch beobachtet die Regel, ehe er sie in Formeln bringen kann. Allmählich aber attendirt er auf das, was er thut. Der Inbegriff aller dieser Regeln heißt Logica naturalis. Die Wissenschaft, die dieselben Regeln systematisch vorträgt, artificialis. Es ist affektirt, diesen natürlichen Hang mit dem Nahmen einer Wissenschaft zu belegen. So könnte man auch eine natürliche Optik, Mechanik – haben. Man theilt, wie oben gesagt ist, die Logik in naturalis und artificialis ein. Diese Eintheilung ist deswegen schlecht, weil die Logik der Inbegriff der Regeln des Verstandes seyn soll, die wir, ohne uns bewußt zu seyn, ausüben. Da wir aber diese Regeln nicht wissen: so kann sie keine Wissenschaft seyn. Folglich ist dieses eine contradiction. Logica naturalis ist die Kenntniß der Regeln des Verstandes in concreto; Logica artificialis in abstracto.",
     "ms": [
      {
       "p": 4,
       "i": 367
      }
     ]
    },
    {
     "id": "wiener-s02-006",
     "kind": "text",
     "aa": 791,
     "text": "Bey uns heißt also nur immer Logica artificialis Logik. Wir können die Gesetze unsers Verstandes auf folgende Art mittheilen"
    },
    {
     "id": "wiener-s02-007",
     "kind": "text",
     "aa": 791,
     "text": "1. Regeln, wie wir denken."
    },
    {
     "id": "wiener-s02-008",
     "kind": "text",
     "aa": 791,
     "text": "2. Regeln, wie wir denken sollen."
    },
    {
     "id": "wiener-s02-009",
     "kind": "text",
     "aa": 792,
     "text": "Bisweilen denken wir ganz verkehrt. Dieser Gebrauch kann mit den Regeln nie zusammen stimmen. Dieses ist der Mißbrauch des Verstandes, und wird hier ausgeschloßen. Die Logik lehrt das Letzte, nähmlich die objektiven Regeln unsers Verstandes zu gebrauchen. Die Logik hat das Besondere, daß die subjektiven Gesetze auch die objektiven Regeln sind, weil die allgemeine Regeln die einzige Bedingung unsers Denkens sind. Man gibt zuweilen aus Gewohnheit, oder Neigung einer Sache Beyfall. Dieses ist kein allgemeines Gesetz. Folglich können die subjektive Gesetze des Wollens nicht objektive Gesetze des Verstandes seyn. Einige Logiker setzen bey der Logik Psychologie zum voraus. Da diese eine empirische Wissenschaft ist: so würde hieraus eine Wissenschaft entstehen, wie wir unter den mancherley Hindernißen denken, nicht wie wir denken sollen. Es würden lauter zufällige und Naturgesetze seyn. Allein darnach fragen wir nicht. Logische Regeln müssen vom nothwendigen Verstandesgebrauch hergenommen werden. Bey einer Grammatik betrachten wir die allgemeine Regeln, ohne welche gar keine Sache existiren kann.",
     "pages": [
      {
       "p": 792,
       "i": 914
      }
     ],
     "aaEnd": 792,
     "ms": [
      {
       "p": 5,
       "i": 184
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s02-010",
     "kind": "text",
     "aa": 792,
     "text": "Es gibt eine zweyfache Erkenntniß. Eine a priori, die unabhängig von der Erfahrung ist; und eine a posteriori, welche sich auf empirische Prinzipien gründet. Da nun die Erfahrung uns lauter zufällige Dinge lehret, die allgemeine Logik aber von allem Inhalt abstrahirt, und folglich auf principiis a priori beruhet: so wird sie mit zu den scientiis rationalibus gezählt. Logi k wird aus einem doppelten Grunde so genannt:",
     "ms": [
      {
       "p": 6,
       "i": 200
      }
     ]
    },
    {
     "id": "wiener-s02-011",
     "kind": "text",
     "aa": 792,
     "text": "1.) Sie ist aus der Vernunft geschöpft."
    },
    {
     "id": "wiener-s02-012",
     "kind": "text",
     "aa": 792,
     "text": "2.) Sie hat die Vernunft zum Gegenstand."
    },
    {
     "id": "wiener-s02-013",
     "kind": "text",
     "aa": 792,
     "text": "In die definition gehört aber eigentlich nur, daß sie dem Objekt nach rational ist."
    },
    {
     "id": "wiener-s02-014",
     "kind": "text",
     "aa": 792,
     "text": "Der Zweck bey einer jeden Wissenschaft ist, entweder unsre Erkenntniße zu erweitern, oder zu erläutern. Die Logik erläutert nur, weil sie die Form betrachtet, die sich nicht erweitern läßt. Eine allgemeine, auf Gründen a priori beruhende Vorschrift heißt Canon. Die Logik heißt so, weil sie auf Regeln a priori beruhet. Sie ist ein Canon alles Denkens, die Moral ein Canon alles Wollens. – [ Textlücke: AA: Die ] Logik ist eine rational [ Textlücke: AA: -e Wissenschaft, ] ein Canon vor den Verstand. So wie die Grammatik lediglich zur Beurtheilung der Sprache der Form nach ist. Wörter sind die Materie. Organon heißt eine Wissenschaft, die unsre Kenntniße erweitert. Logik kann nicht also genannt werden, weil sie von allem Inhalt abstrahirt. Eben so wenig kann sie eine [ Textlücke: AA: Kunst ] seyn, da diese ein Organon einer Kenntniß ist. Einige werfen die Kunst Definitionen zu machen ein. Allein diese müssen noch immer sehr geprüft werden, und der Geschmack nach Gesetzen der Sinnen [ Textlücke: AA: zu ] urtheilen hat keinen Canon, weil er a posteriori herstammt. Logik und Aesthetik unterscheiden sich also durch die Verschiedenheit der Objekte.",
     "ms": [
      {
       "p": 7,
       "i": 897
      }
     ]
    },
    {
     "id": "wiener-s02-015",
     "kind": "text",
     "aa": 793,
     "text": "Definition. Logica est scientia regularum universalium usus intellectus. Wenn nun die Logik eine Wissenschaft der allgemeinen Gesetze des Verstandes seyn soll; so müssen diese nothwendige Regeln seyn, weil sie auf alles ohne Unterschied der Objekte Beziehung haben sollen, und ohne dieselbe gar nichts gedacht werden kann. Alle nothwendige Regeln müssen a priori abgeleitet werden. Erfahrungsregeln sind a posteriori. Schwere ist in der ganzen Welt anzutreffen. Ich werde aber nie einsehen, daß alle Körper schwer sind, als bis ich die Nothwendigkeit der Schwere a priori einsehe. Eine Wissenschaft, die auf principiis a priori beruhet, heißt eine demonstrirte Wissenschaft. Erfahrung kann nicht demonstrirt werden, weil wir die Nothwendigkeit derselben erst beweisen müssen.",
     "pages": [
      {
       "p": 793,
       "i": 535
      }
     ],
     "aaEnd": 793,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s02-016",
     "kind": "text",
     "aa": 793,
     "text": "Logik ist daher eine demonstrirte Wissenschaft. Eine Wissenschaft, die aus principiis a priori gelehret werden kann, heißet Doctrina, folglich auch die Logik. Wenn die Regel des Urtheils vor der Beurtheilung vorhergeht: so heißts Doctrina. Wenn die Beurtheilung vorher geht, Critic. H Daher heißt Critic [ Textlücke ] Doctrina, nachdem die Regel oder Beurtheilung vorher geht. Denn habe ich die Erfahrungsregel nun ein Mahl: so kann ich sie auch beurtheilen. Wir fragen nun: was ist die Logik, eine Kritik oder Doktrin? Weil sie der Probierstein, und vor unserm Verstande hergehen solle: so ist sie eine Doktrin. Die kritische Beurtheilung setzt alle Mahl eine Doktrin voraus. Die Logik ist also gar keine Kritik. Sie dient aber dazu. –",
     "ms": [
      {
       "p": 8,
       "i": 159
      }
     ]
    },
    {
     "id": "wiener-s02-017",
     "kind": "text",
     "aa": 793,
     "text": "Man theilet die Logik in 2. Theile."
    },
    {
     "id": "wiener-s02-018",
     "kind": "text",
     "aa": 793,
     "text": "1.) Analytic,"
    },
    {
     "id": "wiener-s02-019",
     "kind": "text",
     "aa": 793,
     "text": "2.) Dialectic."
    },
    {
     "id": "wiener-s02-020",
     "kind": "text",
     "aa": 793,
     "text": "1.) Analytic oder die Logic als Kritik der Erkenntniß in Ansehung der Wahrheit ist derjenige Theil der durch die Zergliederung unsers Verstandes die allgemeine Regel der Form unsers Verstandes, mithin die nothwendige Regeln aller Wahrheit darstellt. Sie ist folglich der bloße Canon der Beurtheilung des Verstandes."
    },
    {
     "id": "wiener-s02-021",
     "kind": "text",
     "aa": 794,
     "text": "2.) Dialectic ist der Mißbrauch dieses Canons, wenn wir ihn zum Organon machen, und daraus Wahrheit erkennen wollen. Analytic ist die Kunst des Scheidens in Ansehung unserer Urtheile. Es hat einen großen Schein, daß wir durch den Canon der Beurteilung des Verstandes, da sie [ Textlücke ] der Form nach richtig ist, Wahrheit erkennen können. Da aber die Analytic von allem Inhalt abstrahirt, und nichts weiters, als die Form betrachtet: so kann sie kein Organon neuer Wahrheiten seyn. Die Dialektiker waren unter den Alten diejenigen, die pro et contra disputirten. Sie waren Sophisten, und suchten zu täuschen. Sie nahmen falsche Sätze an, accomodirten Alles nach den formalen Gesetzen des Verstandes, und gaben sich folglich einen großen Schein der Wahrheit. Es ist möglich in der logischen Form von einer Sache zu sprechen, von der man nichts versteht, nähmlich durch die Häufung von Schlüssen auf Schlüsse, u.dgl. – und dadurch wird der Hörer getäuscht. So wird die Logik mißbraucht als Kunst, und wird Organon, aber nicht der Wahrheit. So lange diese Kunst florirte, war die Logic nichts anders als eine Cultur der Dialektik als Kunst. Noch vor einem Jahrhunderte war der Professor der beste, der Dialektik als Kunst vortrug. Wir nennen Dialektik ein Mittel, woran man erkennen kann, daß etwas den formalen Gesetzen des Verstandes entgegen sey. Sie ist folglich nur ein Reinigungsmittel. Wir sind durch die Sinne dem Schein unterworfen in unsern Urtheilen, Schlüssen u.s.w. Ferner gibt es gewiße Mittel der Wahrheit, die man nachahmen kann, ohne übrigens mit der Wahrheit etwas gemein zu haben. Z.B. ein Autor, der die Form der Gründlichkeit nachahmet, übrigens aber Unwahrheiten vorträgt. Durch diese Fertigkeiten werden wir oft getäuscht, wenn wir des Inhaltes unkundig sind. Es ist freylich die Uebereinstimmung mit den logischen Regeln conditio sine qua non. Aber dieses ist nicht hinreichend, Wahrheit zu finden. Wie Dialektik entspringt, kann man auf Schulen sehen. Eine Schul-Chrie ist voller [ Textlücke ] Worte ohne Inhalt.",
     "pages": [
      {
       "p": 794,
       "i": 1155
      }
     ],
     "aaEnd": 794,
     "ms": [
      {
       "p": 9,
       "i": 80
      },
      {
       "p": 10,
       "i": 1080
      },
      {
       "p": 11,
       "i": 1820
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s02-022",
     "kind": "text",
     "aa": 794,
     "text": "Unser Autor glaubt, Dialectic sey Logic der Wahrscheinlichkeit. Diese aber ist ein Urtheil über die Wahrheit nach richtigen, aber unzureichenden Gründen. Sind aber ihre Gründe richtig: so gehört sie zur analytic. Die Dialectic ist die Logic des Scheins, wo er vor leer angenommen wird. Die Anwendung der Logic kann nur auf Gegenstände geschehen. Die allgemeine Logic handelt aber ohne Unterschied der Objecte. Folglich muß der Canon theoretisch seyn. Die allgemeine Logic kann aber auch deswegen nicht angewendet werden, weil praktische Logik Kenntniße und Wissenschaften voraussetzt, die allgemeine Logik aber keine Wissenschaften voraussetzen kann, weil sie eine Propaedevtic ist.",
     "ms": [
      {
       "p": 12,
       "i": 682
      }
     ]
    },
    {
     "id": "wiener-s02-023",
     "kind": "text",
     "aa": 794,
     "text": "Denn einen praktischen Theil, wie unser Autor meint, gibts in der Logic nicht. Sonst wäre Dialektik ein purer Schein. Denn eine praktische Logic, als so der Erziehungskunst, kann es nicht geben. Denn diese setzt schon Studium [der ] all [ Textlücke: AA: -gemeinen Logic ] voraus. Alle Wissenschaften aber sind praxis der Logic, weil ohne Logic keine Sache fortkommen kann. Logic muß also nicht in den theoretischen und praktischen Theil, sondern in den dogmatischen und technischen Theil getheilet werden. Der dogmatische ist der Canon . Der technische ist die Vorschrift der Regeln der Schule. Die allgemeine Logic soll die Form des Verstandes betrachten. Daher abstrahirt sie von aller Speculation, und betrachtet die Logic der allgemeinen Menschenvernunft. Hier geht sie ganz von Wissenschaften ab. Die Logic wird, wie alle Wissenschaften, die a priori ihre Begriffe haben, getheilt in die logische Elementar- und Methodenlehre. Die Elementarlehre ist die Dialectica oder Analytic der Vernunft, oder die theoretische Logik. Denn sie ist propaedevtic.",
     "ms": [
      {
       "p": 13,
       "i": 1007
      }
     ]
    },
    {
     "id": "wiener-s02-024",
     "kind": "text",
     "aa": 795,
     "text": "Die Methodenlehre ist die Logic von der Form eines Systemes der Erkenntniße. Man kann eine besondere Methodenlehre zu ein oder der andern Wissenschaft entwerfen. Und dieses ist denn die technische Logic, oder das Organon. Dieses Organon kann nur am Ende einer Wissenschaft vorkommen, weil ich dann erst die Natur der Wissenschaft kenne. Es ist die Vollendung der Regeln zu ihrer Vollkommenheit, der alle terminos technicos, wodurch wir die logischen Anweisungen in der Critic unterscheiden, enthält. Es ist das, was in der Oratorie das Kapitel von den Metaphern, Metonymien u.s.w. ist. Es betrachtet nicht so wohl die Form des Verstandes, als vielmehr die Form der Systeme, und ist größtentheils dialectischen Inhalts. Sie redet nur von verschiedenen Arten der Form des System es. In der Kunst braucht man Manier, in der Wissenschaft Methode. In jener handele ich nach Beyspielen, in dieser nach Gründen. Sie enthält den Inbegrif aller formalen Regeln des Verstandsgebrauches.",
     "ms": [
      {
       "p": 14,
       "i": 930
      }
     ]
    },
    {
     "id": "wiener-s02-025",
     "kind": "text",
     "aa": 795,
     "text": "Man hat eine Logic der gemeinen Vernunft, und eine Logic der speculativen Vernunft. Wir können Regeln in concreto, nicht alle aber in abstracto sie zu erkennen, das Vermögen haben. Das Vermögen der Erkenntniß der Regeln in concreto ist der gemeine Verstand, der gesunde Verstand, in so weit er richtig ist. Die Erkenntniß der Regeln in concreto, oder wenn wir nach einer Erfahrung, nach einem Beyspiel urtheilen, ist der Gängelwagen der Unmündigen. Es ist nöthig, Regeln in abstracto zu wissen, und zu erkennen, wie weit diese Regeln sich erstrecken. Der gesunde Verstand dient, u nd gesund und richtig zu denken. Wenn dieser sich nur auf das begränzt, was sich auf die Erfahrung gründet: so wird er sich nie versteigen. Will man aber nicht nur gesunden, sondern auch vollkommenen Verstand haben: so muß man einen speculativen Verstand besitzen. Denn es gibt eine große Menge von Begriffen, die dem gesunden Verstand zu hoch sind, die er aber dennoch braucht. Die Logic der speculativen Vernunft ist also das Vermögen, Regeln in abstracto einzusehen.",
     "ms": [
      {
       "p": 15,
       "i": 917
      }
     ]
    },
    {
     "id": "wiener-s02-026",
     "kind": "text",
     "aa": 795,
     "text": "Der Vortrag in einer Wissenschaft sieht nicht so wohl auf die Verständigkeit des Objects, als vielmehr auf die Thätigkeit des Subjects. Dieser kann in der Logic zweyfach seyn."
    },
    {
     "id": "wiener-s02-027",
     "kind": "text",
     "aa": 795,
     "text": "1.) Scholastisch. Wenn er der Wißbegierde um Cultur de re r angemeßen ist, die diese Kenntniß als Wissenschaft tractiren wollen. Eine Wissenschaft erfordert Beweise, Erklärungen u.s.w."
    },
    {
     "id": "wiener-s02-028",
     "kind": "text",
     "aa": 796,
     "text": "2.) Populär zum Behufe derer, die keine Wissenschaft daraus machen, sondern nur ihren Verstand dadurch aufräumen wollen, dieser ist vor das gemeine Wesen sehr wohlthätig, erfordert aber viel Genie, weil die populäre Logik mit zu den descendenten Kenntnißen gehört. Die Alten hatten mehr Popularität in ihrem Vortrage, weil sie vor dem Volke redeten. Unter den Neuern haben es die Franzosen am weitesten darin gebracht. Doch ist die Scholastische Darstellung das Fundament der Populären, da sie das Fundament aller Wissenschaften ist, und die Letzte ist nur gleichsam ein Schmuck derselben.",
     "pages": [
      {
       "p": 796,
       "i": 127
      }
     ],
     "aaEnd": 796,
     "ms": [
      {
       "p": 16,
       "i": 432
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
   "title": "Geschichte der Logik",
   "titleSrc": "line",
   "headings": [
    "Geschichte der Logik."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s03-001",
     "kind": "text",
     "aa": 796,
     "text": "Logik kommt vonλόγος (sermo), und hat die Bedeutung von Vernunft. Epicur nannte sie Canonicon eine Wissenschaft vom behutsamen und richtigen Gebrauch des Verstandes. Aristoteles kann als der Vater der Logik angesehen werden. Doch ist seine Logik zu scholastisch, voller Subtilitaeten, und hat im Grunde dem menschlichen Verstande nicht viel genutzet. Sie ist eine Dialectic, und ein Organon der Disputirkunst. In seinem Organon ist viel Scharfsinnigkeit. Von ihm sind alle unsre logische Terminologien. Sonst deutet es auf Mythologie und Spitzfindigkeit, und ist aus den Schulen verbannt. Sonst hat man noch die Hauptideen daraus behalten, und das kommt daher, weil sich die Logic mit keinem Objecte beschäftigt, und daher ist sie bald auszuschöpfen. Seine Logic hat viele Jahrhunderte in allen Schulen florirt, bis Petrus Ramus zuerst eine Logic in 2 Theilen schrieb, wovon",
     "ms": [
      {
       "p": 17,
       "i": 751
      }
     ]
    },
    {
     "id": "wiener-s03-002",
     "kind": "text",
     "aa": 796,
     "text": "1. de Inventione,"
    },
    {
     "id": "wiener-s03-003",
     "kind": "text",
     "aa": 796,
     "text": "2. de Iudicio handelt."
    },
    {
     "id": "wiener-s03-004",
     "kind": "text",
     "aa": 797,
     "text": "Durch seine Widerlegungen des Aristoteles zog er sich einen tödtlichen Haß zu. Nach ihnen kommt Malebranche und Locke. Der Letzte schrieb eine Abhandlung de intellectu humano. Aber beyde Schriften handeln nicht so wohl von der Form des Verstandes, sondern vom Inhalt. Sie sind Vorübungen zur Metaphysic. Unter den Neuern ist Leibnitz und Wolff zu bemerken. Wolffii Logic ist die beßte, die man antrifft. Sie wurde hernach vom Baumgarten concentrirt, und dieser wurde vom Meyer wieder extendirt. Nach ihnen haben Reusch und Knutzen Logiken geschrieben. Reusch ist Jenaischer Philosoph. Um eben diese Zeit kamen in Frankreich Récherches de la vérité heraus. Die Logic des Crusius ist voller Dinge gepfropft, die aus andern Wissenschaften gezogen sind, und enthält metaphysische und theologische Grundsätze. Lambert hat ein Organon der reinen Vernunft geschrieben. Es ist merkwürdig, daß man von einer Wissenschaft, wenn sie gleich fast zu ihrer Vollkommenheit gekommen ist, keine praecise definition geben kann. Die Ursache ist, weil unsre Vernunft ihre Zwecke wegen der Wahrheit derselben erst spät entwickeln kann. Aber am Ende bekommt eine Wissenschaft dadurch ihre rechte Vollkommenheit. Da die Logic eine Propaedevtic aller philosophischen Wissenschaften ist: so muß hier der Begriff der Philosophie festgesetzt werden – Vernunft-Erkenntniße aus Begriffen sind philosophische Erkenntniße. Vernunft-Erkenntniße aus der Construction der Begriffe sind mathematische Erkenntniße. Das System der Erstern heißt Philosophie, der Letztern Mathematik. Vernunft-Erkenntniß wird dem historischen Erkenntniß entgegen gesetzt. Historisch ist eine Erkenntniß der Form nach, wenn sie eine Erkenntniß ex datis ist. Vernunft-Erkenntniß ist eine Erkenntniß ex principiis, die aus Gründen a priori geschöpft worden.",
     "pages": [
      {
       "p": 797,
       "i": 912
      }
     ],
     "aaEnd": 797,
     "ms": [
      {
       "p": 18,
       "i": 710
      },
      {
       "p": 19,
       "i": 1799
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s03-005",
     "kind": "text",
     "aa": 797,
     "text": "Eine Erkenntniß kann aus der Vernunft entstanden seyn. Allein die Art, wie ich sie erkenne, ist doch historisch, wenn ich sie nähmlich nur erwerbe, wie sie mir gegeben war. Z.E. der Polyhistor, der die Philosophie der Alten studirt. Hier ist die Erkenntniß objective eine Vernunft-Erkenntniß, subjective aber historisch. Es ist zweyerley, Philosophie lernen, und philosophiren lernen. Es ist einer der größten Fehler in der Unterweisung, wenn man Systeme der Philosophie eines Autors auswendig lernen läßt, ohne über den Autor urtheilen zu laßen. Es ist daher nöthig, in der Methode der Vernunft mehr Vernunft zu gebrauchen. Viele Philosophen prahlen also mit nichts, als mit der Nachahmung einer andern Vernunft."
    },
    {
     "id": "wiener-s03-006",
     "kind": "text",
     "aa": 797,
     "text": "Man glaubt gemeiniglich, Mathematik und Philosophie haben zwey verschiedene Objecte, die Philosophie sey ein Erkenntniß der Qualitaet, und Mathematik ein Erkenntniß der Quantitaet. Wir behaupten, daß Philosophie und Mathematik ins besondere die erste auf alle Gegenstände gehe. In der Philosophie wird so wohl von Größen geredt, als in der Mathematik. Der specifische Unterschied dieser beyden Wissenschaften ist, daß Philosophie eine Vernunft-Erkenntniß aus Begriffen, Mathematik eine Vernunft-Erkenntniß aus der construction der Begriffe ist. Construction aus Begriffen ist, wenn ich einen Begriff a priori in der Anschauung darstelle. Durch die Philosophie aus Begriffen kann man nichts in der Mathematik einsehen. Allein bey der Anschauung sieht man ex principiis die construction dieses oder jenes Satzes ein. Die Mathematik hat also einen großen Vorzug vor der Philosophie, da alle ihre Erkenntniße intuitiv, der Philosophie hingegen",
     "ms": [
      {
       "p": 20,
       "i": 455
      }
     ]
    },
    {
     "id": "wiener-s03-007",
     "kind": "text",
     "aa": 799,
     "text": "discursiv sind. Die Ursache, warum wir in der Mathematik nur immer die Größen betrachten, ist, weil sich die Größen allein nur construiren laßen. Qualitaeten lassen sich nicht construiren, sondern allein aus Begriffen erkennen. Der Unterschied der Mathematik beruht also nicht so wohl auf den Objecten, als auf der Form. Philosophie ist das System der philosophischen Erkenntniß. Hier laße ich speculativ weg, denn Vernunft-Erkenntniß unter einem System muß durchaus speculativ seyn. Denn System ist aus principiis a priori. Dies ist die Philosophie im scholastischen Sinne. Man hat aber auch eine Philosophie nach einem conceptu cosmico, und denn ist sie eine Wissenschaft von den letzten Endzwecken der menschlichen Vernunft. Die speculative Vernunft-Erkenntniß unterscheidet sich von der gemeinen dadurch: Jene ist die Vernunft-Erkenntniß nach Regeln in abstracto, diese nach Regeln in concreto. Die Vernunft-Erkenntniß nach Regeln in concreto ist die populäre Art des Vortrages, die dem gemeinen Mann angemessen. Ist sie richtig: so ist es die gesunde Vernunft. Philosophische Erkenntniß ist die speculative Vernunft -5 °Erkenntniß aus Begriffen. Mathematische sind Vernunft-Erkenntniße aus der construction der Begriffe. Einen Begriff kann ich belegen, das heißt, ich kann eine Anschauung eines wahren Begriffes geben, wenn ich ihn a posteriori belege. Der Mathematiker belegt aber seine Begriffe a priori. Z.B. wenn ich einen Zirkel habe, der nicht recht richtig: so kann ich doch demonstriren. Denn die Vorstellung liegt schon in mir. Die scholastische Philosophie ist eine Unterweisung zur Geschicklichkeit, die wahre eine Lehre zur Weisheit, die das höchste Gut unsres Bestrebens seyn muß. Sie ist die Gesetzgebung der Vernunft. Man kann Vernunft-Künsteleyen von der Gesetzgebung der Vernunft unterscheiden. Der Vernunft-Künstler, oder der Philodox, wie ihn Sokrates nennt, ist der, der die Vernunft zu allen beliebigen Zwecken einrichtet. Der Mathematiker ist ein Vernunftkünstler, desgleichen der Logiker und der Physikus. Am Ende siehet man doch, daß Philosophie als Weisheitslehre nothwendig ist. Philosophie ist also eine Idee der vollkommensten Gesetzgebung des menschlichen Verstandes, und der Philosoph der Gesetzkundige der menschlichen Vernunft. Da nun dieser Titel so erhaben ist: so kann sich wohl keiner mit Recht einen Philosophen nennen lassen. Die Ursache, warum man Jemanden, der seine Handlungen nach den strengesten Gesetzen der Sittlichkeit einrichtet, und nie die gerade Bahn verläßt, hochschätzt, ist vielleicht, weil am Ende Moral doch immer der Zweck ist, wohin alle Speculationen hinaus gehen. Sie macht eine Einheit der gesammten Vernunft-Erkenntniß aus, und wer ihre Regeln befolgt, kann allein Philosoph genannt werden. Wo kommt der Nahme Philosophie her? Man hat ihn dem Pythagoras zuerst beygelegt. Nicht als Weisheitslehrer, sondern als den hohen Begriff, den er von der Weisheit des erhabenen Gottes hatte.",
     "pages": [
      {
       "p": 799,
       "i": 2620
      }
     ],
     "aaEnd": 799,
     "ms": [
      {
       "p": 21,
       "i": 800
      },
      {
       "p": 22,
       "i": 2042
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s03-008",
     "kind": "text",
     "aa": 799,
     "text": "Zur Philosophie in sensu scholastico gehört zweyerley. 1.) ein zureichender Vorrath der Vernunft-Erkenntnißen. 2.) ein richtiger Zusammenhang derselben, oder ein System. Denn ein System ist der Zusammenhang vieler Erkenntniße nach einer Idee. Unsere historische Kenntniße nützen dazu, daß unsere Vernunft einen zweckmässigen Gebrauch davon machen kann. Da die Zwecke einander subordinirt sind: so muß es obere Zwecke geben, und so entsteht unter diesen Zwecken eine Einheit, oder ein System der Zwecke. Der wahre Werth unsers Vernunftsgebrauches kann nur durch den Zusammenhang, den diese Kenntniß mit den letzten Zwecken hat, bestimmt werden. Es ist daher eine Wissenschaft der Weisheit. Wenn wir das innere principium der Wahl der verschiedenen Zwecke Maximen nennen: so können wir sagen, daß Philosophie in sensu cosmico eine Wissenschaft von den höchsten Maximen des Gebrauches unserer Vernunft ist. Und hier bezeichnet sich der Philosoph mehr durch die Maxime seiner Denkungsart, als durch den Zusammenhang seiner Erkenntniße. Philosophie im Schulbegriff (Philodoxie) ist ein Organon der Geschicklichkeit, und Philodox verhält sich zum Philosophen, wie der, der im Staate Gewerbe treibt, zum Gesetzgeber. Wenn der Philosoph den Zusammenhang aller Vernunft-Erkenntnißen mit den letzten Zwecken erkennen soll, muß er",
     "ms": [
      {
       "p": 23,
       "i": 289
      }
     ]
    },
    {
     "id": "wiener-s03-009",
     "kind": "text",
     "aa": 799,
     "text": "1. die Quellen des menschlichen Wissens,"
    },
    {
     "id": "wiener-s03-010",
     "kind": "text",
     "aa": 799,
     "text": "2. den Anfang ihres Gebrauches,"
    },
    {
     "id": "wiener-s03-011",
     "kind": "text",
     "aa": 799,
     "text": "3. ihre Gränzen bestimmen. Dies ist eins der schwersten, aber auch der erhabensten Dinge in der Philosophie, die gegenwärtig noch Wenige erreicht haben.",
     "ms": [
      {
       "p": 24,
       "i": 96
      }
     ]
    },
    {
     "id": "wiener-s03-012",
     "kind": "text",
     "aa": 800,
     "text": "Und die Philosophie in sensu cosmico wird deswegen auch Philosophie in sensu eminenti genannt. Die Philosophie kann nicht erlernet werden, weil ein jeder Philosoph auf den Trümmern eines Andern sein eigen Gebäude aufrichtet, und wenn mir wirklich ein System gegeben würde, das so klar wäre, daß es auch immer unwidersprechliche Sätze enthielte: so würde ich dennoch kein Philosoph seyn, wenn ich alle Sätze deßelben auswendig lernte. Ich würde dann nicht philosophiren lernen, sondern ein historisches Erkenntniß besitzen, ohne die Quellen, woraus es geschöpfet wäre, zu wißen. Man kann auch eben das hier sagen, was man in der Jurisprudence sagen kann: Legis peritus der obersten Gesetze der Vernunft ist der wahre Philosoph. Leguleii der obersten Gesetze der Vernunft sind Sophisten und Dialectiker, die sich einen gewißen Schein der Weisheit geben, und mit diesem gewiße Zwecke mit Gewalt durchzusetzen suchen.",
     "pages": [
      {
       "p": 800,
       "i": 540
      }
     ],
     "aaEnd": 800,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s03-013",
     "kind": "text",
     "aa": 800,
     "text": "Der Mensch bedarf zwey Stücke bey der Philosophie:"
    },
    {
     "id": "wiener-s03-014",
     "kind": "text",
     "aa": 800,
     "text": "1. Eine Cultur unserer Geschicklichkeit. Diese ist deswegen nöthig, weil wir zu allen Zwecken eine Fertigkeit zum Gebrauch aller Mittel zu diesen Zwecken nöthig haben. Ohne Kenntnisse kann man eben so wenig Philosoph seyn, als man durch bloße Kenntniße zum Philosoph wird. Die beßten principien unsrer Denkungsart haben keine Dauerhaftigkeit, wenn nicht Wissenschaft der Weisheit sie sichern. Unschuld ist liebenswürdig, aber für Verführung nicht gesichert, es muß denn eine Belehrung von alle dem, was locken kann, und von Entstehung der Irrthümer, worein sie verfallen kann, hinzu kommen. Wer einen Haß gegen alle Wissenschaften hat, und praetendirt, daß die Weisheit allein hochgeachtet werden soll, wird ein Misolog genannt. Epikur wird blamirt, er habe einen Lehrbegrif von Weisheit hervor bringen wollen, wodurch alle Wissenschaften aufgegeben, und die Misologie eingeführt würde. Die Misologie entspringt gemeiniglich daraus, daß einer sich von allen solchen Geschicklichkeiten leer fühlt. Es gibt aber auch eine Misologie bey denen, die ausgebreitete Kenntniße haben, und hier entsteht sie daraus, weil diese Kenntniße ihnen nicht hatten genug thun können. Philosophie allein kann diese innere Genugthuung verschaffen. Sie schließt den Zirkel, und denn siehet sie, wie alle Kenntniße in einem Bau regelmäßig zu solchen Zwecken zusammen hängen, die der Menschheit angemeßen sind.",
     "ms": [
      {
       "p": 25,
       "i": 136
      },
      {
       "p": 26,
       "i": 1316
      }
     ]
    },
    {
     "id": "wiener-s03-015",
     "kind": "text",
     "aa": 800,
     "text": "2. Indem wir die Philosophie als Geschicklichkeit betrachten, so werden wir mehr auf die Methode derselben, als auf die Absicht, worauf sie gerichtet ist, sehen. Auf die obersten Maximen werden wir freylich auch unsere Blicke richten. Allein da wir durch die Methode angeführt werden, wie wir philosophiren lernen sollen, und folglich die Philosophie den menschlichen Geist in die größte Freyheit setzt: so verdient sie die größte Aufmerksamkeit. Kein Volk auf der Welt hat eher angefangen zu philosophiren, als die Griechen, indem kein Volk durch Begriffe, sondern alle durch Bilder dachten. Sie fiengen zuerst an, Regeln in abstracto zu studiren. Welches Volk hat wohl je die Begriffe von Tugend, vom höchsten Gut untersucht? Die Aegyptische"
    },
    {
     "id": "wiener-s03-016",
     "kind": "text",
     "aa": 802,
     "text": "Weisheit ist lauter Kinderspiel gegen die griechische, und neuere Autoren haben bewiesen, daß die Aegypter zwar viele Feldmesser gehabt, die nach gewißem angenommenem Maße das Feld ausmaßen, aber nichts von der Mathematik verstanden. Die Griechen waren die ersten Urheber der Mathematik, die aus den ersten Gründen und Elementen dieselbe demonstrirten. Sie sind der Kern des menschlichen Geschlechtes und seine Wohlthäter. Inder griechischen Geschichte ist es dunkel, wo die Philosophie entsprungen. Die Thracier scheinen die einsehendsten und ältesten zu seyn. Die Fragmentisten unter ihnen sind Orpheus und Mus aeus. Die Weisen in Griechenland hatten nichts, als Sentenzen und Sittensprüche, die schon längst bekannt unter dem Volke waren. Sentenzen sind in einen vertrauten Ausdruck zusammengefaßte Gedanken, um sie dem Gedächtniß bequemer einzuschärfen. Einer unter ihnen ist merkwürdig, und von dem rechnet sich alle Philosophie her, Thales, der wegen seiner Kenntniß der Naturwissenschaft auch Physicus genannt wird. Er ist der Urheber der Ionischen Sekte. Seine Schüler sind Anaximander und Anaximenes. Es ist merkwürdig, daß die Dichtersprache die erste war in der Dinge, die Gegenstände der Vernunft sind, ausgedrückt wurden, so daß durch die Poesie die Philosophie sehr gehindert wird. Pherecydes war der erste prosaische Philosoph, und bald nach ihm Heraclitus. Ihre Schriften schienen Jedermann sehr dunkel, weil damahls die Philosophie noch ganz neu war. Die Dichtersprache ist erstaunlich reich an Ideen. Das beweisen die Werke des Homers, Hesiodus. Aber damahls waren die Ideen noch nicht frey gemacht von den körperlichen Nebenbedeutungen. Auf diese folgte die Eleatische Sekte. Ihr Stifter war Xenophanes, und nach ihm Parmenides. Sie lehrten in den Sinnen ist lauter Täuschung, und nur im Verstande ist Wahrheit. Hier klärt sich die Philosophie schon sehr auf, und macht sich ganz von den Dichtern los. Zeno, ein Mann von großer Scharfsinnigkeit, gehört zu dieser Sekte. – Unter dem Nahmen Dialectic ward damahls der reine Verstandesgebrauch verstanden. Daher gibt es bey den Alten große Lobeserhebungen von der Dialectic. Man rechnete zu ihr die Lehre vom höchsten Gut, von dem in uns denkenden Wesen u.s.f. Wenn der Verstand sich vom Leitfaden der Sinne los macht: so läuft er Gefahr, sich in Labyrinthen zu verlaufen. Daher ist es begreiflich, wie ein solcher Verstandesgebrauch auf lauter Subtilitäten hat verfallen können. Aus diesen entstand der jetzige Nahme der Dialectic, die die Pedanten gut zu nützen wissen. Um die Zeit der Ionischen Sekte richtete Pythagoras in magna Graecia die itälische Schule auf. Er ist unter allen Philosophen der einzige, der was Eigenthümliches gehabt hat. Er war ein großer Mathematicus, und wußte die Music unter mathematische Gesetze zu bringen. Er stiftete eine Societät von Philosophen, die durch Verschwiegenheit einander verbunden waren. Geometrische Lehren trug er nur seinen Freunden vor. Diese Philosophie verbreitete sich durch das ganze Land. Ihre wesentliche Stücke, die sie lehrten, waren wohl gemäßigtere Begriffe von den Göttern, als das Volk hatte, zu geben, und den Machinationen der Prinzen etwas entgegen zu stellen. Es war in der That eine Art von Freymaurerey. Endlich kamen sie in solchen Ruf, daß alle Städte sich ihre Regenten vom Pythagoras, der in Crotona wohnte, aus seinen Schülern ausbaten. – Er glaubte die Seelenwanderung, doch man kann nicht viel davon sagen, weil er lauter Geheimniße hatte. – Spielte mit den Zahlen. Um diese Zeit stand ein Mann in Griechenland auf, der unter den speculativen Köpfen eine ganz neue Laufbahn oeffnete, wie man wohl zum höchsten Gut gelangen sollte, Sokrates, den Xenophon als einen solchen beschreibt, der der Idee eines Weisen am nächsten kommt. Er besaß eine große Geschicklichkeit, durch Fragen und Antworten die Dialecticer einzutreiben, dies nennet man die Ironie des Sokrates. Sein Schüler war Plato, und deßen Schüler Aristoteles. Jener excolirte den practischen Theil der Sokratischen Philosophie, und dieser brachte die speculative Philosophie zu größerer Vollkommenheit. Jetzt folgen die moralischen Philosophen. Die Epikuräer setzten alle Tugend in einem stäts fröhlichen Herzen. Die Stoiker setzten die Tugend in einer Entbehrung alles Vergnügens des Lebens, und in der Hoheit der Seele. Ob die Epikuräer gleichviel irrige Sachen lehrten: so waren sie doch die beßte Natur-Philosophen unter allen Griechen.",
     "pages": [
      {
       "p": 802,
       "i": 2589
      }
     ],
     "aaEnd": 802,
     "ms": [
      {
       "p": 27,
       "i": 247
      },
      {
       "p": 28,
       "i": 1407
      },
      {
       "p": 29,
       "i": 2599
      },
      {
       "p": 30,
       "i": 3962
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s03-017",
     "kind": "text",
     "aa": 802,
     "text": "Die vornehmsten Schulen6 * der Griechen hatten besondre Nahmen. – Die Akademie des Plato war nicht ein einziges Gebäude, sondern ein freyer Platz unter freyem Himmel bey den vorzüglichsten Gebäuden. Sie theilt sich in 3 Theile."
    },
    {
     "id": "wiener-s03-018",
     "kind": "text",
     "aa": 803,
     "text": "1. die Academie des Speusippus, der noch ein treuer Schüler des Plato blieb, und ganz dogmatisch lehrte.",
     "ms": [
      {
       "p": 30,
       "i": 0
      }
     ]
    },
    {
     "id": "wiener-s03-019",
     "kind": "text",
     "aa": 803,
     "text": "2: ......... Arcesilaus. Dieser war ein bloßer Zweifeler. Daher kommts, daß die Academici auch Sceptici genannt werden. Plato trug seine Lehre dialogisch vor, und so daß er denn nicht entschied, sondern auf beyden Seiten disputiren ließ. Nun findet die Methode leicht Beyfall, die die Sache suspendirt, und es wahrscheinlich macht, daß es anders seyn könnte."
    },
    {
     "id": "wiener-s03-020",
     "kind": "text",
     "aa": 803,
     "text": "3. ....... des Carneades, der gleichfalls ein äußerst subtiler, und dialectischer Zweifeler war.",
     "ms": [
      {
       "p": 31,
       "i": 42
      }
     ]
    },
    {
     "id": "wiener-s03-021",
     "kind": "text",
     "aa": 803,
     "text": "Lycaeum oder Gymnasium war die Schule des Aristoteles, und weil er gemeiniglich mit seinen Schülern auf dem Platze spatzierte, werden sie auch peripatetici genannt. Er hatte keine berühmte Schüler. Theophrastus und Demetrius Phaleraeus haben keine Bücher geschrieben, auch den Aristoteles gar nicht erweitert. Porticus war ein verdeckter Gang, eine Bildergallerie, und die Schule der Sekte der Stoiker. Diese waren in speculativer Philosophie meistentheils dialectisch, in der Moral aber sehr practisch. Ihr Stifter war Zeno von Citium. Seine berühmtesten Schüler sind Cleanthes und Chrysippus. Sie hat den Grund zu den großmüthigsten Grundsätzen auf der Welt gelegt, obgleich ihre Lehren idealisch, und für die Ausübung zu hoch sind.",
     "ms": [
      {
       "p": 32,
       "i": 613
      }
     ]
    },
    {
     "id": "wiener-s03-022",
     "kind": "text",
     "aa": 803,
     "text": "Horti die Schule des Epicurs. Diese stritten mit den Stoikern, und wurden zuletzt von ihnen verdrängt, weil doch Jedermann solche hohe Grundsätze hochschätzte. Lucretius Buch de natura rerum ist das einzige, das nach ihren Grundsätzen geschrieben ist. Außer den Scepticis academicis ist noch der Scepticismus des Pyrrho merkwürdig. ( H — —) Die Dogmatici behaupteten Wahrheit lasse sich genau beweisen. Dieser behauptete, die Philosophie stehe im Gleichgewicht unsers Urtheiles, und in der Geschicklichkeit, allen falschen Schein aufdecken zu können, ohne sonst etwas Entscheidendes beweisen zu können. Aber da den Menschen mehr bange ist, als sie Lust niederzureißen haben: so fand diese Sekte wenig Beyfall. Sextus Empiricus ist merkwürdig, weil er alle diese Zweifel gesammelt hat."
    },
    {
     "id": "wiener-s03-023",
     "kind": "text",
     "aa": 803,
     "text": "Als die Philosophie der Griechen zu den Römern kam: nahm sie im geringsten nicht zu. Cicero hängt in der speculativen Philosophie dem Plato, in der practischen dem Porticus an. In der Naturwissenschaft hat Plinius secundus allein etwas vorzügliches geleistet.",
     "ms": [
      {
       "p": 33,
       "i": 230
      }
     ]
    },
    {
     "id": "wiener-s03-024",
     "kind": "text",
     "aa": 804,
     "text": "Als das Römische Reich durch die Barbaren umgestürzt war: verschwand alle Cultur, bis sich die Araber im 10.ten Seculo im Occident ausbreiteten, und die Wissenschaften zu cultiviren anfingen. Alle Philosophie nahm man aus dem Aristoteles, dem man auf eine sklavische Weise folgte. Im 10.ten Seculo entstand die scholastische Schule; die nichts, als Commentarien über den Aristoteles machte. Da Aristoteles bekanntlich nichts, als die speculative Vernunft bearbeitet hat: so hielt man sich allein bey den erstaunlichen Subtilitaeten in der Logik und Metaphysik auf. Um die Zeit der Reformation wurde der Rest der Scholastiker ausgefegt. Gleich nach den Scholastikern erhoben sich als Sceptici: Huetius, Bayle, Hume, die man antilogicos nannte. Dann kamen eclectici auf, d.i. Philosophen, die keiner Sekte besonders anhingen. Diese Verbeßerung ist keinem Umstande mehr beyzumeßen, als dem Studio der Natur, womit man Mathematik verband. Hierdurch ward die Ordnung im Denken befördert. Zu dieser trug der Großkanzler Baco von Verulam in seinem Organon der Wissenschaften bey, indem er auf die Methode in der Physic, nähmlich auf observationen und experimente aufmerksam machte. Cartesius war der erste, der diesen Weg einschlug. Der speculativen Vernunft haben eine Leitung gegeben Leibnitz in Deutschland, und Locke in England, indem sie sie von aller Scholastik zu reinigen, und alles auf deutliche Begriffe zu bringen suchten. – Kein Philosoph hatte wohl je eine solche ausgebreitete Geschicklichkeit, dogmatisch zu philosophiren, als Leibnitz. Gefährlich ist es deswegen, weil in unsern dogmatischen Sätzen wegen des Scheines der Erfahrung viel falsches ist. Daher ist es besser, die Wahrheit zu kritisiren. – Locke behandelt die Philosophie psychologisch, d.h. als ein Zergliederer der menschlichen Erkenntniß-Kräfte. Von seiner Zeit fing man in unserm Vaterlande an, die menschliche Seele zu studiren. In unsern Zeiten blüht die Natur-Philosophie im höchsten Grade. In der Moral sind wir noch nicht viel weiter, als die Alten. Einige setzen sie im Willen, andere in der Selbstliebe etc. etc. wie bey den Alten. Was die Metaphysik anbetrift, so stutzen wir, nachdem wir alle Theile durchgegangen sind, und es findet sich bey uns gegen dies Studium wegen der weiten Schwierigkeiten eine Art von Indifferentismus ein. Status anceps. Dies ist das Zeitalter der Kritik für dieses Studium, und der Zeitpunkt ist nahe, wo das Gebäude derselben umgerissen, und ein ganz neues auf den Trümmern des alten aufgerichtet werden wird. Sonst ist Metaphysik allein die wahre Philosophie, und in ihr liegen die ächten Quellen, aus welchen der Verstand seinen Vernunftgebrauch hernimmt.",
     "pages": [
      {
       "p": 804,
       "i": 130
      }
     ],
     "aaEnd": 804,
     "ms": [
      {
       "p": 34,
       "i": 993
      },
      {
       "p": 35,
       "i": 2144
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s04",
   "title": "Tractatio Logices",
   "titleSrc": "line",
   "headings": [
    "Tractatio Logices",
    "Von der Erkenntniß",
    "Von der Erkenntniß"
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s04-001",
     "kind": "text",
     "aa": 805,
     "text": "Alle unsre Erkenntniße können in einer zweyfachen Beziehung betrachtet werden."
    },
    {
     "id": "wiener-s04-002",
     "kind": "text",
     "aa": 805,
     "text": "1. In Beziehung aufs Object. Das ist die Vorstellung."
    },
    {
     "id": "wiener-s04-003",
     "kind": "text",
     "aa": 805,
     "text": "2. In Beziehung aufs Subject. Das ist das Bewußtseyn der Vorstellung."
    },
    {
     "id": "wiener-s04-004",
     "kind": "text",
     "aa": 805,
     "text": "Vorstellung kann nicht definirt werden, weil man dazu immer neue Vorstellungen braucht. Alle Vorstellung ist entweder Empfindung, oder Erkenntniß. Es ist etwas, welches auf etwas in uns eine Beziehung hat. Empfindungen affiziren wohl, aber sie verfliegen auch bald, weil sie keine Erkenntniße sind. Denn wenn ich empfinde: so erkenne ich nichts. Erkenntniß ist zweyfach, entweder Anschauung oder Begriff. Jene ist einzeln, diese allgemein. Denn der Begriff kommt Allen zu.",
     "ms": [
      {
       "p": 36,
       "i": 118
      }
     ]
    },
    {
     "id": "wiener-s04-005",
     "kind": "text",
     "aa": 805,
     "text": "In aller Erkenntniß ist Materie und Form unterschieden. Materie bedeutet den Gegenstand, die Form, die Art, den Gegenstand zu erkennen. Es kommt bey derselben aufs Bewußtseyn an. Eine Erkenntniß, deren ich mir bewußt bin, heißt klar. Bin ich mir ihrer nicht bewußt: heißt sie dunkel. Das Bewußtseyn ist die maßgebliche Bedingung aller logischen Form unserer Erkenntniße. Daher sind dunkle Erkenntniße kein Object der Logic, weil uns keine logische Regel helfen kann, die uns dunkel ist."
    },
    {
     "id": "wiener-s04-006",
     "kind": "text",
     "aa": 805,
     "text": "Alle unsre klare Vorstellungen können logisch unterschieden werden, in deutliche und undeutliche Vorstellungen. Die undeutliche Vorstellung ist das Bewußtseyn einer Vorstellung im Ganzen, ohne doch das Mannigfaltige zu unterscheiden, was im Ganzen enthalten ist. Die Deutlichkeit ist die Klarheit, die auch auf die Theile geht. Alle Wolfianer nennen eine undeutliche Vorstellung verworren. – Allein das Gegentheil von Verwirrung ist nicht Deutlichkeit, sondern Ordnung. Freylich ist Undeutlichkeit eine Wirkung von Verwirrung, nicht die Verwirrung selbst. Es gibt auch undeutliche Erkenntniße, die nicht durch die Verwirrung, sondern durch den Mangel der Vorstellung undeutlich sind. Der Begriff von etwas ist ganz einfach. Hier kann weder Ordnung, noch Verwirrung hinein gebracht werden. Es gibt eine zweyfache Deutlichkeit der Erkenntniße",
     "ms": [
      {
       "p": 37,
       "i": 112
      }
     ]
    },
    {
     "id": "wiener-s04-007",
     "kind": "text",
     "aa": 805,
     "text": "1. Eine sinnliche Deutlichkeit in der Anschauung, wenn wir uns des Mannigfaltigen bewußt sind, was in der Anschauung enthalten ist."
    },
    {
     "id": "wiener-s04-008",
     "kind": "text",
     "aa": 806,
     "text": "2. Eine Verstandes-Deutlichkeit in Begriffen. Wenn eine Erkenntniß nicht dem Inhalte, sondern der Form nach entwickelt wird, und die mancherley Theile der Vorstellung, die im Verstande liegen, entwickelt werden.",
     "ms": [
      {
       "p": 38,
       "i": 193
      }
     ]
    },
    {
     "id": "wiener-s04-009",
     "kind": "text",
     "aa": 806,
     "text": "Alle unsre Erkenntniße sind entweder Anschauung, oder Begriffe. Das Vermögen der Anschauung ist die Sinnlichkeit. Das Vermögen der Begriffe ist der Verstand, und durch Begriffe etwas erkennen, heißt denken. Die Anschauung aber geht nur auf etwas Einzelnes, Begriff auf das, was mehrere Dinge gemein haben. Von einer andern Seite wird die Sinnlichkeit so erklärt, daß sie sey eine receptivitaet, eine Fähigkeit von Gegenständen afficirt zu werden. Der Verstand, als eine Spontaneitaet, ein Vermögen, Dinge vorzustellen, wie sie sind, nicht wie sie uns afficiren. Die Sinnlichkeit ist folglich das untere Erkenntniß-Vermögen, weil die Sinnlichkeit mir den Stof zum Denken gibt, der Verstand hingegen über diesen Stof disponirt. Es gibt eine zweyfache Vollkommenheit der Erkenntniße ."
    },
    {
     "id": "wiener-s04-010",
     "kind": "text",
     "aa": 806,
     "text": "1. Die Vollkommenheit nach den Gesetzen der Sinnlichkeit, ästhetische."
    },
    {
     "id": "wiener-s04-011",
     "kind": "text",
     "aa": 806,
     "text": "2. Die Vollkommenheit nach den Gesetzen des Verstandes, die logische.",
     "ms": [
      {
       "p": 39,
       "i": 69
      }
     ]
    },
    {
     "id": "wiener-s04-012",
     "kind": "text",
     "aa": 806,
     "text": "Eine der ästhetischen Vollkommenheiten im Vortrage ist, daß ein Fall in concreto den Regeln in abstracto Anschauung gibt, und sie sinnlich macht, muß aber nicht an die Stelle des Verstandes gesetzet werden, denn alsdenn würde er verdorben, sondern sie muß seine Begleiterin seyn. Begriffe ohne Sinnlichkeit haben gar keinen Gegenstand. Die Bedingung aller unsrer Begriffe liegt zuletzt immer in den Sinnen. Sie ist also ein sehr nothwendiges Stück. Und ob sie gleich zuweilen den Verstand verleitet: so ist doch eigentlich er selbst Schuld, daß er sie nicht beßer untersucht. Eine Erkenntniß nach Gesetzen der Sinnlichkeit ist vollkommen, wenn sie neu, leicht, lebhaft ist, nach Gesetzen des Verstandes, wenn sie gründlich ist."
    },
    {
     "id": "wiener-s04-013",
     "kind": "text",
     "aa": 807,
     "text": "Die logische Vollkommenheit beruht auf der Einstimmung der Erkenntniß mit dem Obje ct, die ästhetische auf der Einstimmung mit dem Subject. Die Regeln der Uebereinstimmung der Erkenntniß mit dem Gegenstande müssen nothwendig seyn, und für alle Erkenntniß und für jeden Verstand gelten, denn weil meine Erkenntniß mit dem Gegenstande übereinstimmen soll, muß sie auch mit der anderer übereinstimmen. || V Die ästhetische Vollkommenheit beruht auf den besondern Gesetzen der Sinnlichkeit des Menschen, und ist also nicht allgemein für alle Wesen. Da aber die Gegenstände nicht nur durch Begriffe, sondern auch durch die Anschauung vorgestellt werden: so muß es auch nothwendige und allgemeine Gesetze der Sinnlichkeit geben. Hierin liegt der Begriff des Schönen. Zwar ist der Grund des sinnlichen Wohlgefallens subjectiv, aber subjectiv in Absicht der gesammten Menschheit. Z.E. Music. Symmetrie. Was aber mit den Gesetzen des Verstandes übereinstimmt, gilt nicht bloß für die Menschen, sondern für alle denkende Wesen. Aber logisch vollkommene Erkenntniße können auch zugleich eine ästhetische Vollkommenheit haben. Denn gewiße philosophische Erörterungen werden schön genannt.",
     "pages": [
      {
       "p": 807,
       "i": 528
      }
     ],
     "aaEnd": 807,
     "ms": [
      {
       "p": 40,
       "i": 255
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-014",
     "kind": "text",
     "aa": 807,
     "text": "Unter allen Eigenschaften der ästhetischen Vollkommenheit ist keine der logischen angemessener, und der ästhetischen wesentlicher, als die Anschauung. Sie ist die Form der Sinnlichkeit, da hingegen die Empfindung, der Reitz nie so allgemeine Gesetze geben. – Schönheit, Deutlichkeit und Allgemeinheit sind 3 wesentliche Stücke der logischen Vollkommenheit. Wer seine Zuhörer überzeugen will, muß nicht ihre Empfindungen aufwecken, sondern ihrer Anschauung die Sache darstellen.",
     "ms": [
      {
       "p": 41,
       "i": 43
      }
     ]
    },
    {
     "id": "wiener-s04-015",
     "kind": "text",
     "aa": 807,
     "text": "Empfindungen, z.E. Reitz, Rührungen sind die Materie der Sinnlichkeit, die Anschauung ist ihre Form. Einbildungskraft gilt also nur von der Form der Sinnlichkeit, aber nicht von der Materie. Die wesentliche ästhetische Vollkommenheit ist das Gegentheil von der logischen, die Deutlichkeit der Anschauung ist nichts weiter, als Lebhaftigkeit bey der ästhetischen Wahrheit; es ist nicht das Hauptstück, daß die Erkenntniß mit dem Object zusammen stimme, wenn sie nur mit unsern Gesetzen der Sinnlichkeit zusammen stimmt. Poetisch wahr ist nicht, was Logisch wahr, sondern was dem Scheine gemäß ist. Gemeine Vorurtheile haben ästhetische Wahrheit.",
     "ms": [
      {
       "p": 42,
       "i": 644
      }
     ]
    },
    {
     "id": "wiener-s04-016",
     "kind": "text",
     "aa": 808,
     "text": "Die Allgemeinheit der Begriffe ist das Gegentheil von dem, was zur ästhetischen Vollkommenheit gehört. Hier sollen die Sachen allgemein in concreto, dort allgemein in abstracto vorgestellt werden. Aesthetische Vollkommenheit, wenn sie der logischen vortheilhaft ist, enthält das wesentlich Schöne, wenn sie ihr nachtheilig ist, das ausserwesentlich Schöne. Was zur Empfindung, und nicht zur Anschauung gehört, trägt nichts zu Begriffen bey. Was einer empfindet, kann er nicht ein Mahl erzählen, wenn es der Andere nicht mitempfindet, daher gehört dies zum ausserwesentlich Schönen. Der Reitz gehört zum Angenehmen, er vermischt sich oft mit dem Urtheile des Geschmackes, daher lieben wir das Frauenzimmer wegen seiner zarten Bauart, welches doch nach allgemeinen Regeln des Geschmackes gegen die starke Bauart der Männer eine Unvollkommenheit ist. Rührungen gehören zum Erhabenen, sind aber sehr täuschend. Daher muß der Kanzelredner dadurch den Zweck seiner Predigt nicht zu erreichen suchen, sondern durch Deutlichkeit, Wahrheit und Allgemeinheit. Denn Empfindungen sind der logischen Vollkommenheit jederzeit zuwider. Wenn die Sache rührt, so hindert sie das gründliche Nachforschen, und der Richter kann durch Thränen corrumpirt werden. Erschütterungen des Gemüthes schaden, indem sie oft das Gegentheil des vorgesetzten Zweckes befördern. Daher muß der Prediger sich der Anschauung bedienen, und in Bildern und Gleichnißen reden, wo uns ein object dargestellt wird, aber sich kein Bewußtseyn von den Veränderungen unsers Zustandes damit vereinigt. || V Die logische Vollkommenheit ist die conditio sine qua non, und die basis alles Denkens. Die ästhetische kann vor sich nicht bestehen, sondern ist nur die Ausschmückung der schon richtigen logischen. Nun kann man zwar von der logischen etwas nachlaßen. Allein man muß sie nicht verstümmeln. Man kann auch etwas von der Wahrheit gleichsam ignoriren, indem man sie nicht ganz allgemein machen kann, ohne sonst im geringsten an der logischen Vollkommenheit etwas ermangeln zu lassen. Am ersten wird unter die ästhetische Vollkommenheit gerechnet die Poesie. In dieser ist die logische Vollkommenheit dem Grade nach geringer, als die ästhetische, und jede ästhetische streitet mit der logischen jederzeit um einen Platz. Allein das Bedürfniß der menschlichen Natur erfordert es, daß Sinnlichkeit und Verstand zu Paaren gehe, und der größte Gelehrte kann sich nicht von aller Sinnlichkeit los machen. Daraus entsteht die Popularitaet, oder die Condescendenz des Verstandes, wenn er von der schulgerechten Erkenntniß etwas abläßt, um faßlicher zu werden. Nur muß man sich bey ästhetischen Empfindungen hüten, daß unsre Aufmerksamkeit nicht vom Object ab auf unsere Subjecte gebracht werde. Sanfte Rührungen können zwar zu weiterm Nachdenken Anlaß geben. Allein sie sind doch zur Ueberzeugung nicht hinreichend.",
     "pages": [
      {
       "p": 808,
       "i": 670
      }
     ],
     "aaEnd": 808,
     "ms": [
      {
       "p": 43,
       "i": 1102
      },
      {
       "p": 44,
       "i": 2248
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-017",
     "kind": "text",
     "aa": 809,
     "text": "|| V Unsere Anschauung wird bereichert durch Geschichte, die uns Fälle gibt, wo das, was der Begriff in abstracto sagt, in concreto vorgetragen worden. Ferner durch Beobachtungen aus dem gemeinen Leben, wozu in Spaldings Predigten gute Anleitung gegeben wird, wenn sie nur nicht von Empfindungen überschrieen werden. – Vor kurzem ward viel von Empfindungen gesprochen. Wer aber viel vom Gefühl spricht, kann nicht denken, aber fühlen kann ein Jeder.",
     "pages": [
      {
       "p": 809,
       "i": 334
      }
     ],
     "aaEnd": 809,
     "ms": [
      {
       "p": 45,
       "i": 449
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-018",
     "kind": "text",
     "aa": 809,
     "text": "Aus dem Angeführten entspringt eine Vereinbarung des [ Textlücke: AA: Ästhetischen ] und [ Textlücke: AA: Logischen ] bey der Erkenntnißen. Denn eine Erkenntniß kann gründlich, und logisch vollkommen, aber dabey trocken, sie kann schön, aber dabey seicht seyn. Trocken können Kenntniße seyn, die den Zweck zu unterrichten haben, und diesfalls gründlich seyn müssen. Andere sollen nur unterhalten, daher mögen sie immer seicht seyn. Einige sollen beydes enthalten. Dies zu bewerkstelligen wird viel Genie erfordert. Denn der Verstand erfordert Einsicht, die Sinnlichkeit, Leichtigkeit. Daher ist zwischen Beyden eine Art von Widerstreit, wo man diejenige Wahl treffen muß, die dem Zwecke die nächste ist, am meisten genug thut, z.B. || V Mathematik kann das Geschmackvolle nur spät bekommen, weil alles überzeugend vorgetragen werden muß."
    },
    {
     "id": "wiener-s04-019",
     "kind": "text",
     "aa": 809,
     "text": "Die Vollkommenheit der Erkenntniße überhaupt ist"
    },
    {
     "id": "wiener-s04-020",
     "kind": "text",
     "aa": 809,
     "text": "1. Logische."
    },
    {
     "id": "wiener-s04-021",
     "kind": "text",
     "aa": 809,
     "text": "2. Aesthetische."
    },
    {
     "id": "wiener-s04-022",
     "kind": "text",
     "aa": 809,
     "text": "3. Practische Vollkommenheit."
    },
    {
     "id": "wiener-s04-023",
     "kind": "text",
     "aa": 809,
     "text": "|| V Die logische Vollkommenheit geht auf den Verstand, und ist die Erkenntniß der Gegenstände durch denselben. Die Aesthetische geht aufs Gefühl, und auf den Zustand unsers Subjects, wie wir nähmlich vom Object afficirt werden. Denn durch die Schönheit der Erkenntniß such ich nicht Kenntniß des Objects, sondern des Subjects. Die practische Vollkommenheit geht auf unsere Begierden, wodurch die Thätigkeit bewirkt wird.",
     "ms": [
      {
       "p": 46,
       "i": 147
      }
     ]
    },
    {
     "id": "wiener-s04-024",
     "kind": "text",
     "aa": 809,
     "text": "Die Vollkommenheit einer Erkenntniß beruht auf 4 Hauptpunkten."
    },
    {
     "id": "wiener-s04-025",
     "kind": "text",
     "aa": 809,
     "text": "1. Auf der Quantitaet der Erkenntniß, indem eine allgemein ist. Eine Erkenntniß, die zur Regel dient, muß vollkommener seyn, als eine, die nur in besondern Fällen gilt."
    },
    {
     "id": "wiener-s04-026",
     "kind": "text",
     "aa": 809,
     "text": "Die Logische Vollkommenheit der Quantitaet nach oder in Ansehung des Urtheil es ist die Allgemeinheit. Der Aesthetischen die Gemeingültigkeit."
    },
    {
     "id": "wiener-s04-027",
     "kind": "text",
     "aa": 809,
     "text": "2. ... Qualitaet, Deutlichkeit der Erkenntniß. Enthält das quomodo? Die logische Vollkommenheit der qualitaet nach ist die Deutlichkeit, der aesthetischen die Lebhaftigkeit."
    },
    {
     "id": "wiener-s04-028",
     "kind": "text",
     "aa": 810,
     "text": "3. ... Relation, Wahrheit der Erkenntniß. Wahrheit ist die Relation der Erkenntniß aufs Object. || V Geht eine Erkenntniß zu Gemüthsbewegungen über: so geht die Wahrheit nur auf mein Subject, und ist aesthetische Wahrheit. Die logische Vollkommenheit der Relation nach ist objective Wahrheit. Der aesthetischen subjective Wahrheit.",
     "pages": [
      {
       "p": 810,
       "i": 199
      }
     ],
     "aaEnd": 810,
     "ms": [
      {
       "p": 47,
       "i": 223
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-029",
     "kind": "text",
     "aa": 810,
     "text": "4. ... Modalitaet, so fern sie eine gewiße und nothwendige Erkenntniß ist. Die logische Vollkommenheit der Modalitaet nach ist die Nothwendigkeit der Erkenntniße dem Verstande nach. Der aesthetischen die empirische Nothwendigkeit – –"
    },
    {
     "id": "wiener-s04-030",
     "kind": "text",
     "aa": 810,
     "text": "|| V Bey der ästhetischen Vollkommenheit kann man sich denken"
    },
    {
     "id": "wiener-s04-031",
     "kind": "text",
     "aa": 810,
     "text": "1. subjective Wahrheit. Sie ist die Uebereinstimmung der Erkenntniß mit der Denkungsart des Subjects. Aesthetisch wahr sind die Gespenster Erscheinungen u.d.gl. Die Sonne etc. hat ästhetische Wahrheit, logische wird hier gar nicht verlangt. Der Dichter braucht nur ästhetische, wie es unsern Sinnen vorkommt, und zu seyn scheinet. Die Sonne taucht sich ins Waßer, sagt der Poet. Würde er sagen, die Erde dreht sich um ihre Axe: so würde er sich der logischen Wahrheit angleichen, und kein Poet seyn."
    },
    {
     "id": "wiener-s04-032",
     "kind": "text",
     "aa": 810,
     "text": "2. subjective Deutlichkeit (relatione) in der Anschauung, wenn ich durch Beyspiele die Regeln der Begriffe festsetze, Schilderung. Wenn ich nach der ästhetischen Vollkommenheit in Ansehung der Lebhaftigkeit der Anschauung etwas erkennen will: so muß es sehr lebhaft seyn. Wenn z.B. Jemand den Frühling logisch erkennen will: so urtheilt er nach der Qualitaet und hat durch ein einziges Merkmahl alles deutlich. Der Poet redet hier aber von einer Menge Dinge, vom Zwitschern der Vögel u.d.gl. Es ist aber doch sehr lebhaft.",
     "ms": [
      {
       "p": 48,
       "i": 222
      }
     ]
    },
    {
     "id": "wiener-s04-033",
     "kind": "text",
     "aa": 810,
     "text": "3. aesthetische Allgemeinheit, d.i. popularitaet, daß eine Erkenntniß dem sens commun angemessen sey. Ich muß die Art voraus setzen, wie ich urtheile, wie ein jeder Andrer urtheilen kann. Hier ist also subjective ( H — —)."
    },
    {
     "id": "wiener-s04-034",
     "kind": "text",
     "aa": 810,
     "text": "4. Nothwendigkeit und Gewißheit der ästhetischen Vollkommenheit, daß eine Erkenntniß der Sinnen nothwendig sey, d.i. daß die Erfahrung und aller Menschen Stimmen sie bestätigen. Subjective Nothwendigkeit ist Gewohnheit."
    },
    {
     "id": "wiener-s04-035",
     "kind": "text",
     "aa": 811,
     "text": "|| V Mannigfaltigkeit und Einheit machen jede Vollkommenheit aus. Unsre Erkenntniß-Kraft strebt sehr nach Mannigfaltigkeit. Allein sie hat ein e Bedürfniß, daß sie Einheit haben muß. Sonst würde sie uns nicht befriedigen, weil die Erkenntniß ohne Einheit, wenn nicht eines an das andere geknüpft ist, unsere Kenntniße nicht vermehrt. Bey der ästhetischen Vollkommenheit z.B. muß der Mahler die Mannigfaltigkeit der Figuren zu gruppiren wissen, daß eine Einheit heraus kommt, wenn sein Gemählde gefallen soll. Wahrheit ist der vorzügliche Grund der Einheit, und das nothwendigste und vorzüglichste Stück. Ohne Wahrheit findet gar keine Erkenntniß Statt. In der logischen Vollkommenheit ist sie die positive größte Bedingung. Bey der aesthetischen ist sie die conditio sine qua non, und die vornehmste negative Bedingung, indem sie da nicht der Hauptzweck ist, welcher in Annehmlichkeit und Uebereinstimmung der Sinnlichkeit besteht. Weil aber kein Wohlgefallen entstehen kann, wo nicht der Verstand dazu kommt, und Irrthümer aufdeckt: so können mit der ästhetischen keine Widersprüche bestehen. Kein Mensch kann demnach in Dingen des Geschmackes fortkommen, wenn er nicht logische Vollkommenheit zum Grunde geleget hat. Das meiste der Geschmackskünstler in Deutschland ist äußerst eckelhaft, wenn man Produkte fremder Völker ließt, die nicht bloß schöne Wissenschaften studirt haben. Wahre ästhetische Vollkommenheit findet man im Spectateur, Sulzer, Wieland, denen man es anmerket, daß sie den Kopf voller Ideen haben, und alle Machinen beyfügen, das Gemüth zu überreden, um sich denn der Gemächlichkeit des Geschmackes zu accomodiren. Gewiße Bücher haben nichts Anziehendes, ob sie gleich sehr gründlich sind, weil nähmlich ihre Verfaßer nie daran dachten, ihrem Vortrage einen Schwung zu geben, und ihn zu beleben. – Logische Vollkommenheit ist das Scelette unserer Erkenntniße. Daher wer etwas Tüchtiges gelernt hat, kann leicht von der logischen Strenge etwas mildern, und Schönheit anbringen. – Romanen sind Hirngespinster, die den Lauf der Dinge überschreiten, und das Herz welk machen. Geschichte, Geographie, Lesung der Alten, die beyde Vollkommenheiten vereinigen, Anthropologie müssen unsre Lehrmeister seyn, und den Geist aufgeweckter machen. Keine Wissenschaft kann schön seyn. || V Denn sie enthält allgemeine Regeln, die vor der Ausübung vorher gehen. Gefühle können mit dem Schönen verbunden werden, sie können behagen und rühren; sie tragen aber zum Spiele unsrer Vorstellung als Erkenntnißkräfte nichts bey, wohl aber als Empfindung. Die sind aber nicht so allgemein mittheilbar, als Vorstellung und Begriffe. Reitze und Gefühle gehören zum wesentlich Schönen, wie ungefähr ein goldner Rahmen zu einem schönen Bilde.",
     "pages": [
      {
       "p": 811,
       "i": 474
      }
     ],
     "aaEnd": 811,
     "ms": [
      {
       "p": 49,
       "i": 411
      },
      {
       "p": 50,
       "i": 1482
      },
      {
       "p": 51,
       "i": 2539
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-036",
     "kind": "text",
     "aa": 812,
     "text": "|| V Das Schöne muß aber mehr aus dem Effect auf die Sinnlichkeit, als aus dem Verstande beurtheilet werden, indem Schönheit Uebereinstimmung mit der Sinnlichkeit, der Verstand allein aber das Vermögen der Regeln ist. Der Geschmack kann also nicht auf Gesetze gebracht werden. Denn ein Gesetz dient nicht allein zur Beurtheilung, sondern auch zur Befolgung. Die Regeln des Geschmackes sind empirisch, aber nicht diese machen unser Urtheil wahr, sondern sie dienen nur, unser Urtheil, wenn es durch viele Uebungen cultivirt wird, unter gewiße Begriffe zu bringen. Geschmack läßt sich demnach auf keine Weise als Wissenschaft tractiren. Daher gibts auch keine schöne Wissenschaften. Schöne Künste sind Künste, die nicht nach logischen Regeln, sondern durch empirische Versuche geschehen. Denn der Effect allein unterscheidet die Regeln der Sinnlichkeit, die keine Regel des Verstandes erkennet, weswegen man auch nicht Regeln des Geschmackes haben kann. Aesthetisch kann also kein Canon seyn, sondern die Versuche der schönen Künste gehen jederzeit voran, und denn folgen die Regeln, die aber nur dazu dienen, die Kunst zu critisiren. Man muß sich also mit den Mustern der Schönheit bekannt machen, um sich Geschmack doch nicht zu erwerben. Denn im Geschmack ist der Mensch modenmäßig, und zur Gefälligkeit geneigt. Geschmack hat einer, wenn das, was ihm gefällt, Allen gefällt. Und so hat die gesellschaftliche Neigung aller den Geschmack hervor gebracht, und ihn modificirt. Nun haben die Alten die Critic vieler Seculorum ausgestanden, und bleiben dadurch in ihrem Ansehen, und wer sie ließt, und auf wen sie Eindruck zurücklassen, nur muß er sie nicht nachahmen wollen, der erwirbt sich Geschmack. – || V Geschmack ist eine Wirkung der Urtheilskraft. Diese kommt später, als Witz, und selbst als Verstand. Er zeigt, wie wir einen Gebrauch machen können vom Urtheile der Sinnlichkeit, folglich muß man, um zu wählen, eine Menge von Kenntnißen gesammelt haben. Unsere Erkenntniß hat [ein ] gewiße r [ Textlücke: AA: -s Mittel ] nöthig, und das ist die Sprache. Es ist aber dies [ Textlücke: AA: Mittel] vielen Veränderungen unterworfen. Daher muß man in einer todten Sprache schreiben. || V Der gesuchte Zwang und Grimaße des Schönen mißfällt im höchsten Grade. Beßer ist der natürliche Verstand in seiner Einfalt. || V Wir können uns zweyfach beschäftigen",
     "pages": [
      {
       "p": 812,
       "i": 268
      }
     ],
     "aaEnd": 812,
     "ms": [
      {
       "p": 52,
       "i": 862
      },
      {
       "p": 53,
       "i": 1910
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-037",
     "kind": "text",
     "aa": 812,
     "text": "1. per otium 2. per negotium."
    },
    {
     "id": "wiener-s04-038",
     "kind": "text",
     "aa": 813,
     "text": "Alle Geschmacks-Beschäftigung ist ein Spiel. Verstands-Beschäftigung ist wahres Geschäft Als Spiele betrachtet verdienen jene alle Billigung. Wenn aber das Spiel ein Geschäft zu seyn scheint: so ist es übertrieben. Z.B. wenn einer in der Rede dem Witz nachjagt: so wird sein Spiel ein Geschäft. In keiner Sprache gibt es zwey Wörter die wirklich synonyma wären. Am wenigsten sind Philosophie und gelehrte Erkenntniß es, wie unser Autor will, sondern sind himmelweit unterschieden. Eine Wissenschaft ist ein System. Dadurch unterscheidet sie sich von der allgemeinen Erkenntniß sie mag dem Object nach seyn, was sie will Naturalisten im Felde der Gelehrten sind die, denen das systematische fehlt, und die nichts, als rhapsodie besitzen. Beym mündlichen Vortrage kann man das System beßer fassen, als aus Büchern, indem hier nicht so, wie dorten, darüber raisonnirt wird, sondern nach einem gewißen Faden fortgegangen wird.",
     "pages": [
      {
       "p": 813,
       "i": 465
      }
     ],
     "aaEnd": 813,
     "ms": [
      {
       "p": 54,
       "i": 705
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-039",
     "kind": "text",
     "aa": 813,
     "text": "Eine Wissenschaft kann seyn:"
    },
    {
     "id": "wiener-s04-040",
     "kind": "text",
     "aa": 813,
     "text": "1. Eine Wissenschaft der Vernunft, die nur nach allgemeinen principien der Vernunft erkannt werden kann. Z.E. Mathematik."
    },
    {
     "id": "wiener-s04-041",
     "kind": "text",
     "aa": 813,
     "text": "2. Wissenschaft der Gelehrsamkeit, die man historisch erlernen kann. Als: Historien, Sprachen, Philologie, die Kenntniß aller Werkzeuge der Gelehrsamkeit, Litteratur."
    },
    {
     "id": "wiener-s04-042",
     "kind": "text",
     "aa": 813,
     "text": "Philosoph ist kein Gelehrter, sondern er sieht nur zu, wozu am Ende alle Gelehrsamkeit nütze. Er muß aber Gelehrsamkeit besitzen, um von der Philosophie Gebrauch machen zu können. Er ist also kein Vernunft-Künstler, sondern einer, der die Gesetze der Vernunft studirt. Gelehrt werden heißt einen Andern nachahmen, in dem was er weiß, folglich kann der Schüler nie gelehrter werden, als sein Lehrer. Mathematik kann gelernt werden. Aber aus ihr können noch viel neue Sachen gefunden werden. Philosophie aber kann nicht gelernt werden, sondern das philosophiren, indem wir mehr das Urtheil über die Sache, als die Sache selbst vortragen. Wer anfängt, Philosophie auswendig zu lernen, entfernet sich immer mehr von derselben. Denn im Menschen liegen Urtheile, die, wenn sie nicht durch adoptirte Sätze angesteckt sind, lauter und rein sind.",
     "ms": [
      {
       "p": 55,
       "i": 490
      }
     ]
    },
    {
     "id": "wiener-s04-043",
     "kind": "text",
     "aa": 813,
     "text": "Die Unvollkommenheit theilt unser Autor in defectus und vitia."
    },
    {
     "id": "wiener-s04-044",
     "kind": "text",
     "aa": 813,
     "text": "In der Metaphysik hat man"
    },
    {
     "id": "wiener-s04-045",
     "kind": "text",
     "aa": 813,
     "text": "1. defectio privative dicta (defectus) ist im geringen Maß zu tadeln, wenn nähmlich Trockenheit, aber doch übrigens Gründlichkeit in einer Abhandlung herrscht. Mangel ist das Nichtseyn einer Erkenntniß. – Unwissenheit ist Mangel der Erkenntniß."
    },
    {
     "id": "wiener-s04-046",
     "kind": "text",
     "aa": 813,
     "text": "2. defectio contrarie dicta (vitia), wenn z.B. in einem Briefe vitia grammaticalia, und affectirte Sachen vorkommen. Es gibt logische e ssentielle, [ Textlücke: AA: und ] extra e ssentielle vitia. In unserer Sprache herrschen manche Widersprüche. Ich ging allein mit einem andern aus. Die Engländer nennen das einen Bull. Ein solcher Fehler gehört zu eßentiellen vitiis."
    },
    {
     "id": "wiener-s04-047",
     "kind": "text",
     "aa": 815,
     "text": "Irthum ist ein vitium des Urtheiles. Da die Logik die allgemeinen formalen Regeln vorträgt, und von allem Object abstrahirt: so können die ästhetischen und practische Vollkommenheiten nicht eigentlich dazu gehören, sondern werden als episodische, und der Logik nicht eigenthümliche Stücke angesehen. Die practische Erkenntniß fließt eigentlich auf unsern Willen ein. Allein sie wird deswegen mitgenommen, um dadurch die logische desto beßer erkennen, und von den andern Erkenntnißen unterscheiden zu können. Practische Vollkommenheit ist Bestimmung der Zwecke der menschlichen Handlungen. Aesthetische ist popularitaet. Horizont ist die Congruenz der Gränzen unserer Erkenntniß mit den Zwecken der Menschheit, und der Menschen. Er ist also ein Inbegriff der Kenntniße, die zusammen genommen unsern Zwecken adaequat sind. Nun können wir entweder die Zwecke der gesammten Menschheit, d.i. den absoluten Horizont, als auch den besondern betrachten, d.i. den Horizont eines Menschen, der folglich ein relativisch bestimmter Horizont ist. Was den besondern Horizont betrift, da ist der Horizont eines [ Textlücke: AA: Ungebildeten ] ein anderer, als der Horizont des Kenners. Jener lernt Wissenschaften, ohne sich einen gewißen Zweck ihrer Anwendung vorzusetzen. Höchstens um in Gesellschaft mit sprechen zu können, dieser, um dadurch andern nützlich zu werden. Der Horizont einer Religion ist ein Catechismus, d.i. ein Inbegriff der Kenntniße, die dem Menschen als Menschen nöthig sind. Es setzt aber einen cultivirten Verstand voraus, die Kenntniße aller Personen, und den Nexus aller nützlichen Kenntniße unter einander zu bestimmen, ferner eine Urtheilskraft, die durch Jahre und Erfahrung gereift ist. – || V Den Horizont der allgemeinen menschlichen Erkenntniß logisch zu determiniren, ist nicht allenthalben möglich. In der Metaphysic kann man in manchen Stücken die Gränzen des menschlichen Erkenntnißes absehen. In der Naturwissenschaft aber geht dies wegen des großen Umfanges dieses Studiums nicht an. Möglich aber ist es, daß es ein Ma hl geschehen könne. Bey der aesthetischen Bestimmung des allgemeinen Horizonts kommts darauf an, wie die aesthetische mit der logischen in der Nachbarschaft steht. Die logische erfordert deutliche Wahrheit und Gewißheit, welches aber nicht so genau bey der aesthetischen angetroffen werden muß, wenn sie allgemein nützlich seyn soll. Wir müssen aber mehr auf die logische sehen, und zum wenigsten muß das Maß zwischen Beyden genau bestimmt werden. Manches kann ich nicht wissen. Das ist über meinen Horizont. Anderes darf ich nicht wissen. Das ist ausser meinem Horizont. Z.B. der Medicus darf als Medicus nicht alle Rechtsgänge wissen. Was ist aber nützlich zu wissen, und was kann ich entbehren? Darüber drückt sich Geßner in seinen Schriften-Vorlesungen über seine Isagoge, indem er sich über das lustige Fragen derer aufhält, die bey jeder Sache fragen: wozu nützt das? wozu, daß ich die alte Kleidertracht der Hebräer , H daß ich die [ Textlücke ] und ihre Naturkenne? so aus: quaerit delirus quod non respondet Homerus. Was jetzt nicht nützt, kann dereinst nützen. Z.B. Wenn durch ein Experiment ein neu Gesetz in der Natur gegeben wird. Habt ihr eure Kenntniße nur recht erweitert und berichtiget: so wird die Kenntniß ihres Nutzens schon hinten her kommen. Hinreichend ist diese Antwort bey Bestimmung des allgemeinen Horizonts der Menschen. Denn selbst der, der die Ungereimtheiten der Menschen sammelt, und also unter allen menschlichen Bemühungen den wenigsten Nutzen stiftet, indem er nur gleichsam ein Verzeichnis des Unrathes in der Welt aufstellt, kann doch in Ansehung der Geschichte einigen wenigen Nutzen stiften.",
     "pages": [
      {
       "p": 815,
       "i": 2604
      }
     ],
     "aaEnd": 815,
     "ms": [
      {
       "p": 56,
       "i": 0
      },
      {
       "p": 57,
       "i": 1009
      },
      {
       "p": 58,
       "i": 2100
      },
      {
       "p": 59,
       "i": 3269
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-048",
     "kind": "text",
     "aa": 815,
     "text": "Horizont ist der Begriff unserer Kenntniße, die zusammen genommen mit den Zwecken, die wir haben, adaequat sind. Er ist"
    },
    {
     "id": "wiener-s04-049",
     "kind": "text",
     "aa": 815,
     "text": "|| V 1. logisch. Im Verhältniß auf unsre Erkenntniß Vermögen, wie weit wir kommen können, und wie weit wir gehen müßen. Es muß alles auf Vollkommenheit angelegt werden. Daher können wir gehen, so weit wir kommen."
    },
    {
     "id": "wiener-s04-050",
     "kind": "text",
     "aa": 815,
     "text": "2. ästhetisch ist der Horizont im Verhältniß des Geschmackes. Dies ist popularitaet. Man sucht entweder den Beyfall des Publicum, oder der Kenner zu gewinnen. Im ersten Falle sucht man kurrente Gelehrsamkeit, die Jedem angemessen ist und gefällt. Auf diese Art aber geräth man in Seichtigkeit, wie es bey den Franzosen der Fall ist.",
     "ms": [
      {
       "p": 60,
       "i": 305
      }
     ]
    },
    {
     "id": "wiener-s04-051",
     "kind": "text",
     "aa": 816,
     "text": "3. practisch im Verhältniß auf den Nutzen. Aber in Ansehung der besondern Zwecke muß man immer nach der vorzüglichern Absicht fragen, und nur einen allgemeinen und determinirten Grund, dies und das zu thun, haben. Z.B. Wenn der Theolog als ein Gelehrter auftreten will: so ist die theologische Gelehrsamkeit die größte unter Allen. Er muß die natürliche Theologie wohl studiren, um den Freydenkern zu begegnen, ferner die physico-theologie wegen der schwierigen eventuum in den h. Büchern, Mathematik, theologia sacra etc. etc. Allein als Prediger und Lehrer seiner Gemeinde darf er nur klare Ideen von den Wahrheiten haben, die er vorträgt, um die Wichtigkeit derselben zu finden. Der Ausdruck über den Horizont ist der Sache nicht recht angemeßen. Denn was am Horizont des Himmels ist, kann ich ja sehen. Man sieht wohl, es soll das vorstellen, was außer der Fläche, worin alle nur mögliche Kenntnißen enthalten sind, liegt. Historisch hat die menschliche Kenntniß keine Gränzen. Denn die Erfahrung erweitert sie continuirlich. Die Gränzen der Mathematik laßen sich nicht bestimmen, indem noch immer neue Sachen dazu kommen. Aber der Horizont der Erkenntniße der Physik überhaupt ist sehr beschränkt, weil sie sich bloß mit Gegenständen der Sinnlichkeit beschäftiget. In wie weit unsre Vernunft von aller Erfahrung abgehen könne, läßt sich ein Horizont angeben. Unter unserm Horizont ist das, was wir nicht wissen sollten. Dies läßt sich relative sagen. Z.B. Wenn einer Religionsstreitigkeiten auf die Kanzel bringt: so kriegt das Publicum Dinge in den Kopf, die es nicht wißen sollte. Der wichtigste Gebrauch dieser Lehre vom Horizont ist der relativische. Relativ kann ich immer sagen: dies ist über dieses Menschen Horizont, wenn er cultivirt wird. Doch kann man darin auch irren, wenn nicht gehörig dabey zu Werke gegangen wird. In Erweiterung des Horizontes steht der Mensch gleichsam auf einem Berge, und beschreibt einen größern Radium seines Zirkels. Aber hütet euch, daß ihr euern Horizont nicht unaufhörlich verändert, und einen andern Mittelpunct annehmet. Denn dadurch wird aller Zusammenhang eurer Erkenntniße wegfallen. Daher müßen wir einen gewißen Mittelpunct haben, auf den alle unsre Erkenntniße zusammen stimmen. Und dies muß in den ersten Jahren des Studirens geschehen. Und zwar muß man seinen Verstand mit historischen Erkenntnißen bereichern, wenn man sich einen Vorrath auf das ganze Leben sammeln will. Denn nur um diese Zeit ist das Gedächtniß fähig, Dinge aufzufaßen, die ewig nicht erlöschen. Aber mit dem Zunehmen der Urtheilskraft hört auch die Schärfe des Gedächtnißes auf. Wir müßen ferner den Horizont unsrer Erkenntniße im Anfange gehörig zu determiniren wissen. Allein gemeiniglich gelangen die Menschen zu spät, und dann zu dieser Einsicht, wenn sie einsehen, wo er hätte determinirt werden sollen. Und das rührt gemeiniglich mehr von der Nachläßigkeit und Ergetzungen der Jugend her, als von der Unwissenheit. Anderer Menschen Horizont kann man nach Verschiedenheit der Kenntniße determiniren. Bey der Unterweisung muß der Vortrag darnach eingerichtet seyn, woran mein Schüler in diesen Jahren ein Interesse nimmt; in folgender Zeit als Jüngling hat er wieder ein anderes Intereße, und so muß ich immer den Horizont meines Lehrlings umfaßen. Ich muß ihn auch nicht allzu enge machen, und z.B. auf der Kanzel der Faßlichkeit",
     "pages": [
      {
       "p": 816,
       "i": 787
      }
     ],
     "aaEnd": 816,
     "ms": [
      {
       "p": 61,
       "i": 1001
      },
      {
       "p": 62,
       "i": 2031
      },
      {
       "p": 63,
       "i": 2984
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-052",
     "kind": "text",
     "aa": 817,
     "text": "gemeiner Leute zu wenig zutrauen. Wissenschaften haben einen Horizont. Das ist das territorium der Wissenschaft, daher gehört Manches nicht ins territorium der Wissenschaft, was doch bey der Wissenschaft zu wissen nöthig ist."
    },
    {
     "id": "wiener-s04-053",
     "kind": "text",
     "aa": 817,
     "text": "Die Unvollkommenheit unsers Erkenntnißes ist"
    },
    {
     "id": "wiener-s04-054",
     "kind": "text",
     "aa": 817,
     "text": "1. Unwissenheit, die Unvollkommenheit des Mangels, die also einen leeren Raum ausmacht."
    },
    {
     "id": "wiener-s04-055",
     "kind": "text",
     "aa": 817,
     "text": "2. Irthum, eine Unvollkommenheit der Bereicherungen, wenn ich Ideen gesammelt habe, die der Wahrheit widerstreben."
    },
    {
     "id": "wiener-s04-056",
     "kind": "text",
     "aa": 818,
     "text": "Das Schicksal eines Irrenden ist also schlimmer, als jenes eines Unwissenden, denn er verhindert den Eingang der Wahrheit. Ihn aufzuheben muß man den Menschen erst zur Unwissenheit reduciren. Es ist also eine doppelte Unvollkommenheit. Denn es ist nicht allein ein negativer Mangel der Wahrheit, sondern auch eine Ursache der Vollkommenheit zu widerstehen. Bey aller Wissenschaft ist Gefahr. Allein dem ungeachtet müssen wir es doch auf Gefahr des Irthumes wagen, weil man sonst nie Fortschritte machen könnte. Den Irthum erzeugen 2 Stücke, Unwissenheit, und Begierde zu wissen, die ihn eigentlich hervor bringt. Unwissenheit ist kein grosser Vorwurf, wenn es an Gelegenheit gefehlet hat, gewiße Dinge zu wissen. Der Nahme des Idioten soll einen Unwissenden bedeuten, so wie die alten Sophisten weise und idioten Dummköpfe unterschieden. Allein der Stolz, womit man einen Idioten betrachtet, ist übel berichtet. Der Nahme gehört nicht für den Unwissenden, sondern für den, der sich von allen Dingen zu urtheilen anmaßt, und doch nichts weiß. Es ist im gemeinen Leben die Anmerkung gemacht, daß es sehr nützlich sey, daß ein Mensch nicht das Ganze einer Sache mache. Ein Ignorant ist derjenige, der nicht so viel Kenntniße hat, als er in Ansehung dieses, oder jenes Zweckes braucht. Z.B. Bey Verfertigung einer Nadel concurriren mehr denn 4 bis 10 Menschen. Diese Vertheilung macht alles vollkommen, und alles leicht. So ists auch in den Kenntnißen. Der eine findet ein Vergnügen, Archive durchzuwühlen, der andere hält das vor leer. Unwissenheit ist demnach kein Vorwurf; weil wir Manches theils nicht wissen dürfen, theils nicht wissen können. Die Kenntniß seiner eigenen Unwissenheit ist eine Wissenschaft, dazu eine Kenntniß vom leeren Raum gehört, in welchem mögliches Wissen angetroffen werden kann. Der gemeine Mann ist unwissend in Absicht der Astronomie. Aber er weiß seine eigene Unwissenheit nicht. Es ist also sehr nöthig, dem Menschen den Abgrund seiner Unwissenheit aufzudecken, und das können nur diejenige, die ihr Wissen extendirt haben, und daher die Wenigkeit deßelben einsehen. Helvetius sagt, jetzt weiß man alles, außer das, was Socrates wußte, nähmlich nichts. Dieser Unwissenheit ist entgegen gesetzt das Vielwissen.",
     "pages": [
      {
       "p": 818,
       "i": 1995
      }
     ],
     "aaEnd": 818,
     "ms": [
      {
       "p": 64,
       "i": 168
      },
      {
       "p": 65,
       "i": 1159
      },
      {
       "p": 66,
       "i": 2183
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-057",
     "kind": "text",
     "aa": 818,
     "text": "1. Die historische Polyhistoria, die nach bestimmten Gränzen ausgebreitete Gelehrsamkeit."
    },
    {
     "id": "wiener-s04-058",
     "kind": "text",
     "aa": 818,
     "text": "2. Das ohne Gränzen bestimmte extendirte Wissen der Vernunft, polymathia. Beydes zusammen kann man pansophia nennen."
    },
    {
     "id": "wiener-s04-059",
     "kind": "text",
     "aa": 819,
     "text": "In den Wissenschaften ist also eine Verschiedenheit derjenigen, die man aus der Vernunft heraus bringen kann, und die daraus nicht gelehrt werden müssen, als geographie etc. Im vorigen seculo gieng der Hang der Mehresten auf polyhistoria. Hierzu ist noch erforderlich philologie, d.i. die Kenntniß der Werkzeuge der Alten, in welchen die Muster der historischen Erkenntniß zu uns gebracht worden sind. Die philologie, worunter der Linguist und Humanist begriffen ist, und denn der Litterator machen die polyhistorie aus. Der philolog muß ein litterator, er muß ein Humanist seyn, d.h. er muß seinen Geschmack bilden, und andern Menschen mittheilen können. Zur Bildung seines Geschmackes nun nimmt er die klaßischen Autorn, d.h. die Muster und exemplarisch sind. Linguist ist der, der die alten Sprachen mit critic studiret, und wählet er sie sich zu Mustern des Geschmackes, so heißt er Humanist. Die Alten allein werden jederzeit Muster des ächten Geschmackes bleiben, weil die Sprachen todte Sprachen sind. Der litterator nun ist der, der viele Bücher der Alten, als ihre Ausgaben, ihre Verfasser – nennen kann. Wer viel Bücher kennt, ist ein litterator. Wer viel Sprachen kennt, ist ein Linguist, und dies zusammen macht den großen Gelehrten aus. Das ist das Vielwissen, wovon Paulus sagt, daß es aufbläset. Denn wenn der polyhistor eine Kenntniß von so vielen Büchern hat: so glaubt er eben so viel zu wissen, als die, die sie geschrieben haben, ob er sie gleich nur historisch kennt. Die philosophie kann den Stolz niederschlagen, und ihm seine wahren Zwecke vor Augen stellen. Eine Gelehrsamkeit ohne philosophie ist eine cyclopische Gelehrsamkeit. Die Philosophie ist das zweyte Auge, und sieht, wie die gesammelten Kenntniße des einen Auges zum gesammten Zweck stimmen. || V Ein Theil der philosophie heißt Humaniora. Der Character der Humanität besteht in der Geselligkeit. Humaniora sind freye Künste. Die freye Kunst ist bloß Spiel, die Brodkunst Arbeit. Was zur schönen Kunst gehört, ist aber noch nicht ganz frey, denn Mahler etc. sind noch immer mechanisch. Dichtkunst und Beredsamkeit sind schon freyer. Ein Humanist ist, der die Schönheiten tractirt, und im Studio der Alten seinen Geist cultivirt, um deßen Wildheit zu vertreiben. Dardurch entspringt jene Urbanitaet, die wir bey den Alten gewahr werden, und in dieser Absicht, daß sie die rusticitaet vertreibt, ist die historische Erkenntniß von Wichtigkeit.",
     "pages": [
      {
       "p": 819,
       "i": 2071
      }
     ],
     "aaEnd": 819,
     "ms": [
      {
       "p": 67,
       "i": 675
      },
      {
       "p": 68,
       "i": 1675
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-060",
     "kind": "text",
     "aa": 819,
     "text": "Alle diese Kenntniße können auf eine Hauptwissenschaft zusammen gezogen werden, und werden als Mittel derselben angesehen. Etwa auch die Brodwissenschaft, die man studirt. Es ist unter den Menschen gewöhnlich, etwas lieber aus Neigung, als des Zwanges der Pflicht wegen zu thun. Manchem mißlingen oft seine Neigungen, und bringen ihn nicht weit. Dies ist das Steckenpferd eines Menschen, das er lieber reitet, als den Karrengaul seines Amtes. Da also Pflicht etwas ist, wovon ihr euch gern frey macht: so lernet etwas, womit ihr mit Vernunft spielen könnt. Z.B. das Studium der Botanik, der Geographie u.s.f.",
     "ms": [
      {
       "p": 69,
       "i": 128
      }
     ]
    },
    {
     "id": "wiener-s04-061",
     "kind": "text",
     "aa": 819,
     "text": "Diese Nebenwissenschaften müßen dem Plan unsers Wissens gemäß überdacht werden. Oft sind sie die nothwendigen Mittel bey einer Wissenschaft. Z.B. ein Medicus muß zum Hülfsmittel Naturwissenschaft haben, ferner philologie, weil Belesenheit eine Menge von Erfahrungen gibt. Oft aber sind sie nur ein Spiel der Unterhaltung, und eines jeden Belieben ausgesetzt. Es ist ein Unterschied der Wissenschaftler zwischen Brodkunst und freyer Kunst. Und so sind Gelehrte entweder Zunftgelehrte, oder zunftfreye Gelehrte.",
     "ms": [
      {
       "p": 70,
       "i": 509
      }
     ]
    },
    {
     "id": "wiener-s04-062",
     "kind": "text",
     "aa": 820,
     "text": "Ein Gelehrter wird oft entgegen gesetzt denjenigen, die mechanische Künste treiben. Der Gelehrte ist also angenommen als einer, der kein Handwerk treibt. So laßen sich die Gelehrten in Sina die Nägel an den Händen wachsen, zum Beweis, daß sie keine Handarbeit treiben. Brodkunst ist eine Wissenschaft, wenn sie ein Mittel des Erwerbes ist, soll sie bloß den Geist intereßiren, und die Talente civilisiren: so ist sie freye Kunst. Brodkünste sind daher große Triebfedern der Thätigkeit, aber die Wissenschaften werden durch diese Brodkünste sehr eingeschränkt, indem man sich dabey nach dem allgemeinen Wahn richten muß, denn wenn Wahrheiten gleich von gar keinem Nutzen sind: so muß man sie doch, weil das Publicum sich daran gewöhnt hat, vortragen. So könnte aus der Logic Manches weggestrichen werden, was ein Mahl recipirt ist, und bey examinibus vorkommt. Kurz, Zunftgelehrte sind an ihr metier gebunden. – Freye Kunst hat hier viele Vortheile voraus, indem sie nicht auf die Bedingungen des Gewerbes eingeschränkt ist, und gar nicht nach dem Wahn der Menge, sondern nach dem innern Gehalte der Wissenschaften gefragt wird. Doch hat sie auf der andern Seite nicht Antrieb genug die Menschen zu zwingen, sich mit großer Bemühung darauf zu legen. Fehler im Gebrauch unsers Wissens sind Galanterie und Pedanterie. Das Wort Pedant ist Italienisch, und hat seinen Ursprung vom Magister Pedarius, der einem jungen Menschen zur Aufsicht gesetzt wurde, und ihn auf allen Tritten nachfolgte. Er mußte ihn in Wissenschaften und Schulgelehrsamkeit unterrichten, wurde aber nie in die Gesellschaft seines Vaters mit hinein gezogen, daher er keinen Gebrauch von seinem Wissen im Umgange mit andern Menschen zu machen lernte.",
     "pages": [
      {
       "p": 820,
       "i": 979
      }
     ],
     "aaEnd": 820,
     "ms": [
      {
       "p": 71,
       "i": 1005
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-063",
     "kind": "text",
     "aa": 820,
     "text": "Im Gebrauch unserer Erkenntniß kann sie entweder mehr der Schule, oder mehr der Welt angemessen seyn. Die Schule enthält Vorschriften und Methoden, d.i. Mittel zum Lehren und Lernen. Schulgerecht ist also ein Erkenntniß, wenn es alle Formen enthält, wornach man lehren soll. Jede Wissenschaft hat 2 Vollkommenheiten, eine scholastische und populäre.",
     "ms": [
      {
       "p": 72,
       "i": 336
      }
     ]
    },
    {
     "id": "wiener-s04-064",
     "kind": "text",
     "aa": 820,
     "text": "Die scholastische Vollkommenheit besteht also in der didactischen Form, die dazu dient, einem Anfänger die Erkenntniß zu erleichtern. Sie macht das Wesen und den Grund aus, sie ist die Uebereinstimmung des Gebrauches unserer Vernunft, und die Pünctlichkeit der logischen Regeln. Der Vortrag also ist es, der entweder schulgerecht, oder populär seyn kann. Die popularitaet besteht in der accomodation einer Wissenschaft zur Faßungskraft und zum Geschmack des gemeinen Wesens. Eine solche Erkenntniß ist nicht bloß für die Schule, sondern auch für die Welt. –"
    },
    {
     "id": "wiener-s04-065",
     "kind": "text",
     "aa": 821,
     "text": "Die scholastische Methode gewöhnt sich an gewiße Peinlichkeiten z.B. terminos technicos, demonstrationen, definitionen – die einem Dilettanten nicht angemessen sind. Indeßen ist der scholastische Zuschnitt die größte Vollkommenheit, und immer das Erste, indem sie die gewiße Regeln unsers Verfahrens enthält, und ohne sie alle Gründlichkeit wegfallen würde. Scholastische Vollkommenheit muß voran gehen, dann Popularität folgen, denn mit der Popularität anzufangen, ist sehr ungereimt. Widmen wir aber unsere Kenntnisse der menschlichen Gesellschaft: so müssen wir diese Regeln weglassen, und doch von der Wissenschaft so viel übrig behalten, als der Faßungskraft und Neigung Anderer angemessen ist. Popularitaet erfordert also Weltkenntniße und Umgang mit Menschen, und der versteht seine Sache gewiß am beßten, der sie einem Andern, der ungelehrt ist, faßlich und hell machen kann. Nur muß man bey der popularitaet nicht von der Gründlichkeit ablassen, indem sie nichts anders, als eine Veränderung des Vortrages ist. – Nun ist pedanterie die eingeschränkte Fähigkeit im Gebrauch der Erkenntniß, wenn man sie bloß auf den Schulgebrauch restringirt. Es wird zur Pedanterie geschätzt, wenn Jemand bey abstracten Begriffen von Adam anfängt. Es zeigt doch aber eine gewiße Gründlichkeit an. Eine Peinlichkeit im Formale, Micrologie, Kleinigkeitskrämerey ist Pedanterie. Der Pedant ist eine schlechte Kopie vom methodischen Kopf, der zu seinem Wissen sich den rechten Zweck vorsetzt, und den auch damit zu erreichen weiß. Pedant aber kommt nie mit seiner großen Gelehrsamkeit zu seinem Zweck. Es gibt in allen Ständen Pedanten, z.E. Jagd Pedanten, Kriegs Pedanten, Putz- und Höflichkeits Pedanten, die immer von ihrer Sache reden, und damit zu thun haben. Der gelehrte Pedant ist der erträglichste. Denn bey ihm ist nur Vorwurf des Mangels der Weltkenntniße, ob man von ihm gleich übrigens lernen kann, wenn man schon keine Annehmlichkeit dabey empfindet. Pedanten im anderen Fache aber sind leere Köpfe. Außer der pedanterie kann auch zu der Erkenntniß Galanterie kommen. Galant ist, der einem Andern aus der Ueberlegenheit seiner Verfeinerung Vorzüge zugesteht, die jener sich selbst nicht anmaßt. || V Bey den Alten war der Begriff von Galanterie gänzlich unbekannt. Horaz Carmina lib. II, Ode 16. ad Grosphum, wenn er seinen Gönner rühmt, schreibt ihm Vorzüge des Besitzes, sich Vorzüge des Geistes zu, und ziehet sich also offenbar vor. Ueberhaupt findet man bey ihnen nicht die mindeste delicate sse andere zu schonen. – Kein Volk hat mehr Galanterie in der Schreibart, als Frankreich. || V Die meisten Bücher sind dort dem Geschmack des schönen Geschlechtes accommodirt, und daher sind diese dort auch Richterinnen wissenschaftlicher Gegenstände. Freylich müssen sie im Umgange den Ton der Aufführung geben, aber ganze Wissenschaften ihretwegen zu durchwässern, bis sie ihrer Fähigkeit angemessen sind, verursacht Seichtigkeit, und die scholastische Vollkommenheit verliert dabey ihren Gehalt. || V Die Deutschen verunglücken, und zeigen etwas genirtes in ihrem Wesen, wenn sie durch Galanterie dem Franzosen gleichkommen wollen. Diese Galanterie ist gefährlich, weil sie das Reitzende und Verführerische an sich hat, daß man, weil das ganze Publicum uns Beyfall zujauchzt, die ß höher schätzet, als den Tadel gelehrter Männer.",
     "pages": [
      {
       "p": 821,
       "i": 789
      }
     ],
     "aaEnd": 821,
     "ms": [
      {
       "p": 73,
       "i": 486
      },
      {
       "p": 74,
       "i": 1503
      },
      {
       "p": 75,
       "i": 2503
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-066",
     "kind": "text",
     "aa": 822,
     "text": "Die Größe der gelehrten Erkenntniß ist extensiv nach der Menge der Erkenntniß, oder intensiv nach ihrer Wichtigkeit, d.i. in Ansehung ihrer Folgen und Wirkungen. Diese Wichtigkeit kann man betrachten",
     "ms": [
      {
       "p": 76,
       "i": 134
      }
     ]
    },
    {
     "id": "wiener-s04-067",
     "kind": "text",
     "aa": 822,
     "text": "1.) in logischer Absicht, da sie das ist was die logische Vollkommenheit enthält, nähmlich wodurch die Erkenntniße gründlicher, deutlicher und gewißer werden,"
    },
    {
     "id": "wiener-s04-068",
     "kind": "text",
     "aa": 822,
     "text": "2.) ihre practische Wichtigkeit besteht im Nutzen der Erkenntniß. Dieser kann nicht vorher gesehen werden, und muß deßhalb erweckt werden. Die logische Vollkommenheit lehret die practische, indem der Nutzen dadurch mehr bestimmt wird. Sie ist also die erste Vollkommenheit. Doch kann eine Erkenntniß logische Vollkommenheit respective ganz haben."
    },
    {
     "id": "wiener-s04-069",
     "kind": "text",
     "aa": 822,
     "text": "Fruchtbarkeit der Erkenntniß gehet auf die Größe und Menge der Erkenntniß. Inhalt der Erkenntniß liegt im mannigfaltigen, und zeigt die Theile deßelben an. Zur Vollkommenheit der Erkenntniß gehört, daß sie wahr sey. Die Wahrheit ist eine Uebereinstimmung der Erkenntniß mit dem Object. Aber dieses ist eigentlich nur eine Worterklärung, das ist eines der befremdendsten phaenomene in einer Wissenschaft, wenn man auf eine Frage, die das Wesen der Wissenschaft ausmacht, nicht antworten kann. Eine solche Frage ist in der Logic schon längst vorgelegt worden, nähmlich was ist Wahrheit? Pilatus war der erste, der diese Frage aufgeworfen. Hier scheint sie beym Namen zu scheitern, ob sie gleich dem Verstand Regeln der Wahrheit geben will. Die obige Erklärung passet nicht. Denn der Gegenstand ist nicht bey uns, sondern nur die Erkenntniß deßelben. Daher können wir unsere Erkenntniß davon nicht mit dem Gegenstand, sondern nur mit unserer Erkenntniß vergleichen. Da also keine andere Erkenntniß wahr ist, als die mit dem object übereinstimmt: so ist keine Erkenntniß vom object wahr, als die mit unserer Erkenntniß vom object übereinstimmt. Die Alten nannten das dial lele, einen Trugschluß. Z.E. wenn einer, um seine Redlichkeit zu behaupten, sich auf die Redlichkeit eines andern berufen wollte. So hat Lavater aus Schlüßen in die Ewigkeit vieles behauptet, und von der Beschaffenheit des künftigen Lebens geredet, was nicht den mindesten Schein von Unrichtigkeit und Widerstreit an sich hat. Allein hat diese Erkenntniß ein mit derselben übereinstimmendes object? Solche Erkenntniße heißen alsdenn leer. Also die Erkenntniß ist wahr, wenn sie mit sich selbst übereinstimmt. Aber auf die Art können alle Lügen wahr seyn, wenn es keiner andern Bestätigung, als die — [AA: der Übereinstimmung ]",
     "ms": [
      {
       "p": 77,
       "i": 802
      }
     ]
    },
    {
     "id": "wiener-s04-070",
     "kind": "text",
     "aa": 823,
     "text": "der Erkenntniß [AA: mit sich ] selbst bedarf. – Gibts nun ein allgemein criterium der Wahrheit? eine Regel, wodurch sich die allgemeine Wahrheit unterscheiden läßt? Es ist unmöglich. Denn es soll ein allgemeines criterium der Wahrheit ohne Unterschied der objecte seyn. Wäre es ein criterium von gewißen objecten nur: so wäre es nicht allgemein. Da es aber abstrahiren muß von allem Unterschied der objecte, alle Wahrheit aber die übereinstimmung der Erkenntniß mit dem object ist, wodurch die Erkenntniß eines Objects von dem andern unterschieden ist, und die Erkenntniß der Allgemeinheit kein Kennzeichen hat, wodurch ein Object unterschieden ist: so ist ein materiales criterium der Wahrheit also unmöglich. Die Materie aller Erkenntniß ist das Object, die Form ist die Art der Abhandlung. Logic geht auf die Form, Wahrheit aufs Object. Daher ist es zuerst unmöglich, und contradicirt sich, ein allgemeines materielles criterium der Wahrheit zu geben. Da aber die Logic von allem Inhalt abstrahirt: so kann es nur formale criterien der Wahrheit geben. Zur Wahrheit gehört zweyerley .",
     "ms": [
      {
       "p": 78,
       "i": 159
      }
     ]
    },
    {
     "id": "wiener-s04-071",
     "kind": "text",
     "aa": 823,
     "text": "1.) Uebereinstimmung der Erkenntniß mit dem object."
    },
    {
     "id": "wiener-s04-072",
     "kind": "text",
     "aa": 823,
     "text": "2.) Uebereinstimmung mit sich selbst."
    },
    {
     "id": "wiener-s04-073",
     "kind": "text",
     "aa": 823,
     "text": "Die Uebereinstimmung der Erkenntniß mit sich selbst, unangesehen der objecte ist ein formales criterium der Wahrheit. Denn dies macht eine Erkenntniß als Erkenntniß möglich. Ohne dies ist gar keine Erkenntniß möglich. Daher ist es immer unentbehrlich, wiewohl es zum materiellen criterio nicht hinreichend ist. Es ist conditio sine qua non, z.E. der Satz des Widerspruches ist ein formales criterium der Wahrheit. Wer aber eine Logic so fein vorträgt, daß sie mit sich selbst übereinstimmt, dem reicht dies criterium nicht hin. Die Antwort auf die Frage: was ist Wahrheit? wäre also die Uebereinstimmung einer Erkenntniß mit sich selbst, und ist mit ein Grund sie für wahr zu halten. Ein allgemein hinreichendes criterium der Wahrheit kann nicht gefordert werden. – Wenn ich von allen verschiedenen Gegenständen abstrahire: so behalte ich nur einen Begriff vom Object über. Ein allgemeines criterium der Wahrheit handelt nur von der Form des Denkens, welches nicht die Uebereinstimmung der Erkenntniß mit dem Object, sondern mit sich selbst ist.",
     "ms": [
      {
       "p": 79,
       "i": 45
      },
      {
       "p": 80,
       "i": 1045
      }
     ]
    },
    {
     "id": "wiener-s04-074",
     "kind": "text",
     "aa": 823,
     "text": "Die Regeln der Uebereinstimmung mit sich selbst sind"
    },
    {
     "id": "wiener-s04-075",
     "kind": "text",
     "aa": 823,
     "text": "1.) Eine Erkenntniß muß sich selbst nicht widersprechen. Dies ist die conditio sine qua non."
    },
    {
     "id": "wiener-s04-076",
     "kind": "text",
     "aa": 824,
     "text": "2.) affirmatio, wenn Erkenntniße als Gründe mit ihren Folgen zusammen hängen. Wenn ich z.E. von der Näße der Westwinde den Grund anführe, weil sie übers Meer kommen: so ist das mit ein Grund der Wahrheit. Es gehört zum innern criterio der Wahrheit, daß eine Erkenntniß gegründet sey. Ein criterium, welches auf dem principio des zureichenden Grundes beruhet, muß immer vom Grunde auf die Folge schließen.",
     "pages": [
      {
       "p": 824,
       "i": 128
      }
     ],
     "aaEnd": 824,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-077",
     "kind": "text",
     "aa": 824,
     "text": "3.) Zwischen welchen Erkenntnißen soll Einheit seyn, d.i. Beziehung vieler Erkenntniße auf eines."
    },
    {
     "id": "wiener-s04-078",
     "kind": "text",
     "aa": 824,
     "text": "Der Wahrheit ist entgegen gesetzt Falschheit. Wenn Falschheit für Wahrheit gehalten wird: ist sie Irthum."
    },
    {
     "id": "wiener-s04-079",
     "kind": "text",
     "aa": 824,
     "text": "1.) Falschheit, d.i. ein Mangel der Uebereinstimmung mit dem Object."
    },
    {
     "id": "wiener-s04-080",
     "kind": "text",
     "aa": 824,
     "text": "2.) Schein der Wahrheit."
    },
    {
     "id": "wiener-s04-081",
     "kind": "text",
     "aa": 825,
     "text": "Ist Wahrheit möglich? Wahrheit ist in der Logic eine Uebereinstimmung der Erkenntniß mit den Gesetzen des Verstandes, da der Verstand also hier nach seinen eigenen Gesetzen handelt: so ist hier nichts widersinnisches, warum Wahrheit nicht möglich seyn sollte. Ist Irthum möglich? d.i. wie weit ist die Verstandes widrige Form unsers Denkens möglich. Es ist schwer zu begreifen, wie eine Kraft von ihren eigenen Gesetzen abweichen solle, da sie doch nur nach gewißen Gesetzen handelt. Sind diese wesentlich: so kann sie nicht davon abweichen, ist also unter den formalen Gesetzen des Verstandes, die die Logic vorträgt, ein wesentliches möglich: so kann er davon nicht abweichen. Z.E. ein schwerer Körper kann nicht aufhören zu fallen. – Wenn wir keine andere Erkenntnißquellen als Verstand hätten, und nichts als Verstand wären: so würden wir meinen, der Verstand würde immer nur nach seinen Gesetzen urtheilen, wenn er gleich bisweilen eingeschränkt urtheilte, aber durch den Verstand haben wir gar kein Object, indem er bloß die Form enthält. Die Sinnlichkeit, d.i. das Vermögen der Anschauung und der Empfindung gibt den Stof zu denken, und ist die andere Erkenntnißquelle. Soll nun eine Erkenntniß aufs object bezogen werden: so wirken beyde zusammen, die Sinnlichkeit gibt die Anschauung, und der Verstand den Begriff. Wenn ein Körper durch 2 Kräfte getrieben wird: so entspringt eine dritte Bewegung wo er weder im Geleise der einen, noch der andern bleibt, d.i. die diagonal Kraft. Z.E. eine Kugel, die gerade ins Centrum der Scheibe gegangen seyn würde, geht etwas wenn sie durch den Wind seitwärts getrieben wird an den Rand der Scheibe, wohin sie weder von der Kraft des Pulvers, noch des Windes getrieben würde. Nun fließet die Sinnlichkeit in die Handlungen des Verstandes mit ein, und hieraus entspringt die diagonal Richtung des Verstandes, wo er bald Wahrheit, bald Schein erhält. Die Sinnlichkeit also ist die Ursache des Scheines, und der Verstand, insofern er das Urtheil darüber fällt. Die Sinnlichkeit an sich aber ist auch keine Quelle der Irthümer, denn so fern sie sich auf ihre Gegenstände beziehet, ist eine Uebereinstimmung mit den Gesetzen dieser Erkenntnißkraft. Der Grund, daß die Sinnen nicht irrig urtheilen, ist, weil sie gar nicht urtheilen können. Denn nur der Verstand urtheilt. Der Irthum ist also weder im Verstande allein, noch in den Sinnen allein, sondern liegt immer im Einfluße der Sinnen auf den Verstand, wenn wir den Einfluß der Sinnlichkeit auf den Verstand nicht wohl unterscheiden.",
     "pages": [
      {
       "p": 825,
       "i": 1854
      }
     ],
     "aaEnd": 825,
     "ms": [
      {
       "p": 81,
       "i": 42
      },
      {
       "p": 82,
       "i": 912
      },
      {
       "p": 83,
       "i": 1794
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-082",
     "kind": "text",
     "aa": 825,
     "text": "Die Logic, da sie von allem Inhalt abstrahirt, kann nicht weiter vom Einfluße der Sinnlichkeit reden, als daß sie den subjectiven Grund unsers Urtheiles darstellet. Der Verstand ist der objective Grund unsers Urtheiles. Wenn aber in unser Urtheil etwas subjectives fließt, das doch zur Sinnlichkeit gehört: so hat sich Sinnlichkeit mit eingemischt, und die ß ist die Quelle der Irthümer. Aus dieser Einmischung entspringt cognitio hybrida, eine Bastarderkenntniß, die aus 2 Theilen zusammen gesetzt ist. Hier dient die Sinnlichkeit dem Verstande nicht, sondern sie verwirret ihn, und hieraus entspringt die diagonale Richtung des Verstandes. Z.E. ein Anhänger einer Meinung hält die Meinung für etwas wahrscheinliches. Wahrscheinlichkeit ist ein objectiver Grund. Allein die subjective Anhänglichkeit bringt den effect, der für objectiv gehalten wird. – Weil bey jedem Irthum doch immer der Verstand wirksam ist: so üben Menschen, wenn sie auf Gefahr des Irthumes urtheilen, doch immer Wahrheit aus. Die also viele Irthümer haben, haben doch immer etwas Wahres, denn sie haben ihren Verstand gebraucht, und ihre Kräften cultivirt.",
     "ms": [
      {
       "p": 84,
       "i": 178
      },
      {
       "p": 85,
       "i": 1103
      }
     ]
    },
    {
     "id": "wiener-s04-083",
     "kind": "text",
     "aa": 825,
     "text": "Wir können uns beym Irthum auch nicht über die Schranken unsers Verstandes beklagen. Denn klagen wir die Natur an. Denn die Schranken des Verstandes sind wohl die Ursache der Unwissenheit, aber nicht der Irthümer. Denn bey der Unwissenheit darf ich ja nur nicht urtheilen. Mithin ist jeder Irthum selbst verschuldet, wenn uns unsere Neigung außerhalb unserer Gränzen zieht. In allen unsern Urtheilen ist immer etwas Wahres. Nie kann ein Mensch ganz und gar irren. Scheint es uns bisweilen: so haben wir den Menschen nicht verstanden. Denn nachdem, was er vielleicht voraus setzt, kann er immer einige, wenn gleich nur partiale Wahrheit haben. Ein totaler Irthum wäre ein gänzlicher Widerstreit gegen die Gesetze des Verstandes. Denn alsdenn könnte er ja nicht aus dem Verstande entspringen,"
    },
    {
     "id": "wiener-s04-084",
     "kind": "text",
     "aa": 826,
     "text": "der nichts hervor bringen kann, was seiner Natur widerstreitet. Was aber abweichend ist von seinen Gesetzen, ist Einfluß der Sinnlichkeit. In jedem Irthum ist noch immer ein wahres Urtheil, wird aber noch vieles von der Sinnlichkeit untergeschoben: so ist wohl Falschheit darin, aber sie ist nur partial.",
     "ms": [
      {
       "p": 86,
       "i": 139
      }
     ]
    },
    {
     "id": "wiener-s04-085",
     "kind": "text",
     "aa": 826,
     "text": "Da wir von aller Beziehung aufs Object abstrahiren, und nur die Regel der Zusammenstimmung des Verstandes mit sich selbst betrachten: so kann das criterium der Wahrheit in der Logic nur die Uebereinstimmung der Gesetze der Erkenntniß mit sich selbst seyn. Die Regel der Zusammenstimmung der Erkenntniß mit sich selbst ist der Satz des Widerspruches und der Satz des zureichenden Grundes, die wohl materialiter nicht hinreichend sind, aber doch, um von einer Sache formaliter zu urtheilen, ob sie mit sich selbst übereinstimmt. Der Satz des Widerspruches ist ein negativer Satz. Eine Erkenntniß ist falsch, wenn sie sich selbst widerspricht. Aber eine Erkenntniß, die sich nicht widerspricht, ist darum doch auch nicht wahr. Der Satz des Widerspruches ist zwar so, daß ihm nichts entgegen seyn kann, aber als ein positives principium, die Wahrheit zu erkennen, ist er nicht zureichend. Insofern ist er wohl positiv, daß ich durch ihn die Nothwendigkeit der Wahrheit bey einer nothwendigen Erkenntniß einsehen kann. – Der Satz des zureichenden Grundes ist, wenn eine Erkenntniß mit einem Grunde zusammen hängt, oder wenn aus einer Erkenntniß lauter wahre Folgen sich anschließen. Beyde Sätze dringen also auf Einheit. – Wenn eine Erkenntniß sich selbst nicht widerspricht, sondern das Gegentheil derselben sich widersprechen würde: so ist sie wahr. Wenn eine Erkenntniß sich nicht widerspricht: ist sie möglich, aber aus dem principio contradictionis läßt sich noch nicht alle Einheit einer Erkenntniß schließen. Z.E. daß meine Gedanken in andrer Menschen Seele eindringen, ist möglich, aber deßhalb noch nicht wahr. Wenn eine Erkenntniß der Grund der andern ist: so ist eine Verknüpfung beyder Erkenntniße. Wenn der Grund wahr ist: so ist auch die Folge wahr. Wenn alle Folgen wahr sind: muß auch der Grund wahr seyn. Der Satz des Widerspruches wird in der Metaphysic geflissentlich abgehandelt, und daß das criterium der Wahrheit das principium rationis ist.",
     "ms": [
      {
       "p": 87,
       "i": 768
      },
      {
       "p": 88,
       "i": 1686
      }
     ]
    },
    {
     "id": "wiener-s04-086",
     "kind": "text",
     "aa": 826,
     "text": "1.) a priori der Zusammenhang einer Erkenntniß mit ihrem Grunde."
    },
    {
     "id": "wiener-s04-087",
     "kind": "text",
     "aa": 826,
     "text": "2.) a posteriori der Zusammenhang eines Grundes mit seinen Folgen."
    },
    {
     "id": "wiener-s04-088",
     "kind": "text",
     "aa": 827,
     "text": "Eine Erkenntniß ohne Grund ist grundlos aber noch nicht falsch, Z.E. daß die Pflanzen Seelen haben, aber daß sie wahr sey, dazu gehören Gründe, und daß die Erkenntniß a priori connectirt sey. Aus den Folgen auf die Wahrheit der Erkenntniß schließt man,",
     "pages": [
      {
       "p": 827,
       "i": 127
      }
     ],
     "aaEnd": 827,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-089",
     "kind": "text",
     "aa": 827,
     "text": "1.) negativ, wenn nur eine einzige Folge falsch ist: so ist die ganze Erkenntniß falsch. Denn wäre die Erkenntniß wahr: so müßte auch diese Folge wahr seyn. Unter falschen Folgen rühmet man auch die Gefährlichkeiten. Allein Gefahren sind oft nur relative Gefahren, und beruhen oft nur auf äußerlichen Umständen, wenn z.E. die Zeiten so schlecht sind, daß selbst die Wahrheit Gefahr leidet. Also kommts hier nicht auf die Gefährlichkeit, sondern auf die Falschheit des Satzes an. Wer von Gefahren anfangt, sucht Kunstgriffe, einen zu gewinnen, ehe man die Vernunft gebrauchen kann.",
     "ms": [
      {
       "p": 89,
       "i": 242
      }
     ]
    },
    {
     "id": "wiener-s04-090",
     "kind": "text",
     "aa": 828,
     "text": "2.) positive. Bey der Erkenntniß der Wahrheit eines Satzes gehet es nicht an, daß ich von der Wahrheit einiger Folgen auf die Wahrheit einer Erkenntniß schließe. Die Erkenntniß kann etwas Wahres haben, und daraus entspringt die Wahrheit dieser einzigen Folge. Das Uebrige aber kann falsch seyn. Also kann ich auf die Wahrheit der Erkenntniß aus einem solchen Grunde nicht schließen. Sind gar alle Folgen falsch: so ist nichts Wahres und nichts Gesundes an der Erkenntniß Der positive Schluß ist also das onus probandi, wo ich die Wahrheit aller Folgen zeigen muß. Beym negativen aber darf ich nur die Falschheit einiger Folgen zeigen, und daher ist dies ein genugsames criterium. Nur aber ists schwer, ja es kann gar nicht geschehen, daß ich alle Folgen wissen könnte. Denn wüßte ich sie: so wäre meine Erkenntniß gewiß. Doch brauchen wirs, und machen dabey diesen wahrscheinlichen Schluß. Wenn die meiste Folgen wahr sind: so sind sie alle wahr. Denn wenn eine Erkenntniß sich nicht widerspricht: so suche ich ihren Grund, und examinire die Folgen desselben. Sind viele, aber nicht alle Folgen heraus zu finden: so nehme ich sie als eine unvollständige Erkenntniß an, indem ich aus der Wahrheit verschiedener Folgen auf die Wahrheit des Satzes schließe. Denn da es unmöglich ist, die Wahrheit aller Folgen zu zeigen: so folgt, daß wir auch hier keine stricte hinreichende Brauchbarkeit des criteriums haben, sondern es nur als einen Grund der Wahrscheinlichkeit gebrauchen können. Der Satz des zureichenden Grundes wird hier nicht, wie in der Metaphysic abgehandelt, wo er vom object gilt, sondern als ein logischer Satz. Denn da der Satz des Widerspruches noch kein hinreichendes criterium der Wahrheit ist: so muß dennoch durch ihn der Zusammenhang der Erkenntniß erforscht werden. Der Satz des Widerspruches ist der Satz des zusammen bestehenden, und der Einstimmung, der Satz des zureichenden Grundes, der Satz des Zusammenhanges.",
     "pages": [
      {
       "p": 828,
       "i": 1824
      }
     ],
     "aaEnd": 828,
     "ms": [
      {
       "p": 90,
       "i": 564
      },
      {
       "p": 91,
       "i": 1717
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-091",
     "kind": "text",
     "aa": 829,
     "text": "Eine Erkenntniß ist total falsch, oder partial falsch. Eine Erkenntniß kann immer falsch seyn, und doch kann man partiale Wahrheiten darin entdecken, z.E. im polytheismus ist mehr Wahrheit als im atheismus. – Bey disputationen gibts gewiße subtile Trugschlüße, um andere zu verwirren. Z.E. wer da sagt, alle Mohren sind Menschen. Der Respondent ist ein Mensch. Also ist er ein Mohr. Der Respondent ist zwar Mensch, aber kein schwarzer, und daher redet er nicht ganz falsch. Oft ist es gut, dieses Wahre heraus zu suchen, und nicht alles gleich wegzuwerfen, was einen Irthum enthält. Wir können auf 2fache Art streiten, entweder weil wir verschiedenes Intereße haben, und dann streiten wir als Feinde, oder wir haben ein gemeinschaftliches Intereße, stimmen aber in der Art es zu befördern nicht überein, und dann streiten wir als Freunde. Alle Menschen haben bey Untersuchung der Wahrheit ein gemeinschaftliches Intereße, und daher müßen wir in solchem Streit Theilnehmende seyn, indem wir uns nicht dabey aufhalten zu zeigen, wo der andere geirret hat, sondern wo er Recht hat. Diese theilnehmende Gesinnung ist nun zwar moralisch, und gehört eigentlich nicht in die Logic. Aber die Logic schreibet die Regeln derselben als richtige Maximen vor. Wenn wir glauben, ein Satz sey ganz falsch, müßen wir nur unsern obigen Satz zurück rufen p. 85, daß kein Satz ganz falsch seyn kann. Man kann sich wohl eine totale Falschheit fingiren, die keiner für wahr hält. Aber diese ist denn kein Irthum. Wenn die Sache so falsch ist, daß nicht ein Mahl ein Intereße dabey ist, einen eigenen Grad von Wahrheit darin zu suchen und also unter aller Bemerkung ist: so ist sie ungereimt. Wenn also die Falschheit beym allgemeinen Verstande klar ist: ist die Erkenntniß ungereimt. Zwischen der totalen und partialen Wahrheit betrifft der Unterschied entweder das Object, oder die Erkentniß. Die Mängel der Erkentniß sind partiale Falschheit der Erkenntniß (vitium), oder sie ist ganz wahr, betrifft aber nicht die ganze Wahrheit des Objects (defectus). Bey der partial Falschheit liegt es am Mangel der totalitaet der Wahrheit der Erkenntniß, nicht an der totalitaet der Wahrheit des Objects; wenn diese Unrichtigkeit nicht den wesentlichen Zweck der Erkenntniß ausmacht: ist sie tolerabiliter wahr. Z.E. Vorurtheile in der Religion, die man zu dulden und zu beßern suchen muß. – – Wir haben angemerkt, eine Erkenntniß ist so beschafen, daß in ihr als Erkenntniß nicht alles wahr ist, oder die ganze Erkenntniß ist wohl wahr, aber die ganze Wahrheit des Objects ist nicht da. Z.E. wer eine Geschichte erzählt, und einen Theil derselben verhehlt, lügt darum nicht. Denn er bedienet sich hier nur einer List, und es ist auch bisweilen nöthig, und unvermeidlich einen Theil zu verschweigen. Man dißimulirt, wenn man bloß verhehlt, und die Erkenntniß ist dabey totaliter wahr, wenn gleich das Ganze des Objects darin nicht enthalten ist. – Dieses Examen, wie viel Irthümer in einer Erkenntniß angetroffen werden, und ob diese oder jene Erkenntniß deshalb angefochten werden muß, ist von großer Wichtigkeit, und setzt viel Klugheit voraus, die sich auf eine durch Erfahrung ertheilte Kraft gründen muß. – Man macht in Ansehung Beyder den Unterschied zwischen genauer und grober Erkenntniß. Die Genauigkeit betrifft das Verhältniß der Erkenntniß zum object, ob das object ganz, oder zum Theil erkannt wird. Z.E. die Bestimmung der Weite durch Schritte ist zur Bestimmung der Reise hinreichend und genau, aber nicht zur Bestimmung der Gränzen eines Landgutes. Brüche bey den Zahlen können weggelaßen werden, wenn es zur Bezahlung genau genug seyn soll. Aber ein Kaufmann, der seine Bücher schließt, darf nicht 1/10 von dem auslaßen, weil dann die Bilanz nicht genau ist, die der Beweis der Richtigkeit der Rechnung ist. So kann eine Erkenntniß in einer Absicht genau, in einer andern ein grober Ueberschlag heißen. Genauigkeit sieht oft wie Pedanterie aus, wenn sie objective in den Stücken, wo es ganz und gar meiner Absicht nicht erforderlich ist, genau ist. Z.E. die Alten bestimmten bey der Fortification, wie viel Cubic Zoll bey Verfertigung eines Grabens ausgekarrt werden müßten. Die scrupulöse Genauigkeit ist von der exactitudo oder praecisen Genauigkeit darin unterschieden, daß die praecise zweckmäßig ist, und eben darum den Nahmen exactitudo erhält. In den Wissenschaften, die auf principien a priori beruhen, kommts außerordentlich auf Genauigkeit an. Z.E. in der Mathematik. Die meisten Denkungsarten gehen fast niemahls aufs Genaue, und es gibt wenig solche gründliche Köpfe, die allenthalben Genauigkeit beobachten, da doch diese Genauigkeit ihren großen Werth hat, und nie unterlaßen werden muß, indem sie die Urtheilskraft hebt, wenn sie oft gleich nicht zweckmäßig ist, und dabey nur wenig Bemühung erfordert.",
     "pages": [
      {
       "p": 829,
       "i": 2501
      }
     ],
     "aaEnd": 829,
     "ms": [
      {
       "p": 92,
       "i": 826
      },
      {
       "p": 93,
       "i": 1972
      },
      {
       "p": 94,
       "i": 3072
      },
      {
       "p": 95,
       "i": 4105
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-092",
     "kind": "text",
     "aa": 831,
     "text": "Es gibt Urtheile en gros und en detail. || V Madame Geoffrin war eine große Maecenatin von Gelehrten, ob sie gleich selbst kein großes genie war, indem sie die Verdienste aufmunterte, und sagte, man müßte von jedem Menschen en gros urtheilen, weil er sonst viel verlieren müßte, wenn man ihn en detail beurtheilte. Aber en gros beurtheilen kann ein Jeder. Z.E. das Buch gefällt mir sehr, es ist schön. Aber was in dem Buche? en detail zu tadeln, und zu rühmen, nicht. Unsere neuen großen, so genannten Genies lernen Wissenschaften en gros, und daher sind alle ihre Urtheile und Erkenntnißen en gros, und nie en detail. Hieraus entsteht das superficiale der Erkenntniß. Deshalb sie niemahls genau werden kann. Von genauer Erkenntniß ist unterschieden das subtile, scrupuleuse, d.i. die Genauigkeit, die auf Theile geht, Geschicklichkeit, etwas das der gemeinen Aufmerksamkeit leichter entgehet zu bemerken, die auch das microscopische unsrer Beurtheilung heißt. Micrologisch ist die Erkenntniß, wenn man am Kleinen haftet, und vor dem Kleinen das Große nicht sehen kann. Die subtile Genauigkeit ist deswegen noch nicht micrologisch. Denn der subtile Kopf kann dennoch erweitert von Begriffen seyn in Ansehung der Erkenntniß. Denn wir müßten die Gegenstände nicht nur in weiten [ Textlücke: AA: Entfernungen ] sondern auch auf die Puncte unterscheiden. Aber Manche ziehen alle ihre Erkenntniß auf das Kleine zusammen, und der subtile Kopf ist gemeinhin micrologisch. Das diametral entgegengesetzte dem subtilen ist das grobe Erkenntniß. Diametral entgegengesetzt, wenn man aus einem Fehler auf den entgegen gesetzten Andern verfällt. Beyde sind tadelhaft. Denn wer viel an Subtilitaeten haftet, ist blind in Absicht des Ganzen. Die grobe Erkenntniß, die aufs große und ganze geht, scheint doch noch mehr von sich erwarten zu laßen. – Grobe Erkenntniß ist nicht grober Irthum, der den gemeinen Gesetzen des Verstandes widerspricht, sondern sie ist grob, so fern sie noch nicht ausgebreitet, und noch roh ist, und Merkmahle eines bloß gemeinen Verstandes enthält. Unser Autor sagt: alle Wahrheit ist dogmatisch. – Alle unsere Erkenntniße sind entweder historisch, oder rational. Historisch sind Erkenntniße, wenn sie uns anderwärts mitgetheilet werden, subjectiv rational, sofern sie aus principien der Vernunft geschöpft sind. Objectiv rational, sofern die Erkenntniße nach ihren wahren Quellen in der Vernunft liegen. Objective historische Erkenntniß ist nur vermittelst der Sinnen und der Mittheilung, und der Belehrung möglich. Die subjective philosophie ist bey Manchen historisch, objectiv ist alle philosophie Vernunft-Erkenntniß. – Alle Vernunft-Erkenntniß ist zu gleicher Zeit apodictisch, d.i. sie führt den Beweis der Nothwendigkeit mit sich. Durch die Erfahrung allein kann ich nur zufällige Dinge erkennen durch die Vernunft hingegen auch nothwendige Erkenntniß. philosophie und mathematic sind demnach apodictische Erkenntniße. Daß der Stein schwer ist, erkenne ich zwar durch die Erfahrung. Aber den Beweis von der Nothwendigkeit der Schwere gibt mir die Vernunft. Apodictische Sätze sind zweyfach mathematisch, so fern sie zur Mathematic gehören, dogmatisch, so fern sie zur philosophie gehören. Demnach ist alle Vernunft-Erkenntniß aus Begriffen dogma alle Vernunft-Erkenntniß aus der Construction der Begriffe mathema. Wenn ich sage: jeder Körper ist theilbar: so ist dies ein apodictisch gewißer Satz. – In der geoffenbarten Religion nennt man Sätze dogmata die Lehren enthalten, die die Vernunft nicht erkennen kann. Dies ist schon ein uneigentlicher Ausdruck. Allein wenn unsere Vernunft erweitert wäre: würde sie diese Erkenntniß auch haben, und denn wären es auch dogmata, wiewohl sie jetzt nur historische Erkenntniße sind.",
     "pages": [
      {
       "p": 830,
       "i": 278
      },
      {
       "p": 831,
       "i": 2898
      }
     ],
     "aaEnd": 831,
     "ms": [
      {
       "p": 96,
       "i": 243
      },
      {
       "p": 97,
       "i": 1224
      },
      {
       "p": 98,
       "i": 2186
      },
      {
       "p": 99,
       "i": 3095
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-093",
     "kind": "text",
     "aa": 831,
     "text": "Unser autor nennt System einen Inbegriff dogmatischer Wahrheiten. – Allein das object der systematischen und gemeinen Erkenntniß macht keinen Unterschied, sondern Beyde sind nur der Form nach unterschieden. Ein System ist, wo alles einer Idee untergeordnet ist, die aufs Ganze gehen, und die Theile bestimmen muß. Z.E. Einer kann viele Historien wissen, ohne eine Wissenschaft davon zu haben. Denn er hat die Form nicht. Er hat sich keinen Abriß vom Ganzen gemacht, und nach einer Idee alles geordnet. Diese Idee also macht die systematische Form. Wir können uns das System als ein aggregat oder Ganzes der Erkenntniß denken. Die Totalität ist nun die Bestimmung des Ganzen, und diese liegt in der Idee. Bey einem aggregat aber ist nichts bestimmt. Denn ich weis nicht, was noch dazu kommt. Bey einem System aber ist alles schon bestimmt. – Eine Erkenntniß kann rhapsodistisch seyn, und ist dennoch nicht tumultuarisch. Denn dem tumultuarischen ist das methodische entgegen gesetzt, und ohne methode ist eine Erkenntniß tumultuarisch. Allein eine Erkenntniß, die methodisch, aber ohne System heraus gebracht wird, ist rhapsodistisch. Z.B. wenn wir uns nach der Fassungskraft des zu unterrichtenden Subjects richten.",
     "ms": [
      {
       "p": 100,
       "i": 325
      }
     ]
    },
    {
     "id": "wiener-s04-094",
     "kind": "text",
     "aa": 832,
     "text": "Manche haben ihre Sache durch aphorismen vorgetragen, ohne die articulation des Ganzen vorzustellen, indem diese gleich immer vorhanden ist, aber nicht deutlich zu sehen ist für den, der die Idee vom Ganzen nicht hat. Es ist also nöthig, Dinge systematisch abzufassen, um einen Begriff von Vollständigkeit zu bekommen, und um einen Probierstein von verschiedenen Theilen zu haben, wie sie mit dem Ganzen zusammen stimmen. Man muß bey Wissenschaften immer das Scelet derselben vor Augen haben, um darnach zu beurtheilen, ob dies und das in die Wissenschaft gehört. – aesthetische Wahrheiten sind solche, die der allgemeinen Faßlichkeit angemessen sind, logische sind scholastisch, oder wie unser Autor sagt, gelehrt.",
     "pages": [
      {
       "p": 832,
       "i": 458
      }
     ],
     "aaEnd": 832,
     "ms": [
      {
       "p": 101,
       "i": 126
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-095",
     "kind": "text",
     "aa": 833,
     "text": "Ein falsches Erkenntniß und Irthum sind unterschieden. Wenn ich ein falsches Urtheil proponire und examinire: so ists noch kein Irthum, die Vorwahrhaltung der Falschheit ist Irthum. Daher muß noch der Schein hinzu kommen, und zwar der logische Schein. Beym optischen Schein werden die Sinnen betrogen. Der moralische Schein ist, wenn uns das aus Pflicht zu entspringen scheint, was zu unserm Beßten dienet. Der logische Schein entspringt aus der puren Form des Verstandes. Nun kann unsere Erkenntniß der Form nach dem Verstand wohl gemäß seyn. Denn ich kann leicht die Form nachahmen, ohne innere Richtigkeit der Sätze zu haben, und also gibt selbst die logische Form einen Schein der Wahrheit, deßen sich die Sophisten häufig bedienen. Kein Irthum ist an sich selbst unvermeidlich, weil man nur über Dinge nicht urtheilen darf, von denen man nichts versteht. Eine Unwissenheit kann wohl unvermeidlich seyn. Denn diese beruhet nicht immer auf unserm Willen, sondern oft auf den Schranken unserer Natur. Aber beym Irthum sind wir selbst immer Schuld, indem wir nicht behutsam genug sind bey Wagung eines Urtheiles, wozu wir nicht Kenntniß genug haben. Doch gibts Fälle, wo durchaus etwas muß geurtheilt werden, und hier trägt sichs zu, daß einer in einen Irthum geräth der in dieser Relation unvermeidlich war. Z.E. ein Mensch will über den Fluß gehen, der gefroren ist. Es ist aber durch einen Zufall das Eis an einem Ort dünner, und er ertrinkt. Hätte er dieses vorher urtheilen können: wäre er nicht hinüber gegangen. Der Irthum ist immer was positives; das nicht wahr seyn aber ist was negatives, denn das positive im Irthum ist, daß er doch gedacht wird. Schein ist der subjective Grund eines Irthumes. Eine Unrichtigkeit und Falschheit ist offenbar, wenn sie dem gemeinen Menschenverstand klar ist. Wenn die Unrichtigkeit nicht jedem Verstande klar ist, ist sie versteckt, kann aber doch offenbar gemacht werden, und hierauf gehen alle Wiederlegungen. Bey Widerlegungen ist es eine Pflicht erst zu zeigen, woher diese oder jene Unrichtigkeit des menschlichen Erkenntnißes gekommen ist, d.i. ich muß die quelle des Irthumes entdecken, d.i. den Schein, und nachher kann ich ihm die Falschheit davon beweisen. Denn thue ich das erstere nicht, und mache ihm nicht deutlich genug, wodurch er verleitet ist, dies oder jenes für wahr zu halten: so laße ich ihn noch immer in Ungewißheit und Zweifel. Daher muß ich auch nicht so gerade zu Jemanden ungereimt nennen. Denn er würde gewiß dies oder jenes Erkenntniß nicht angenommen haben, wenn er nicht durch diesen oder jenen versteckten Schein dahin gebracht worden wäre, das für wahr zu halten. Ein solcher Mensch, der einen Andern gleich ungereimt nennt, beleidiget den Andern sehr, und verkennet das Intereße der allgemeinen Menschenvernunft , H dabey erinere man sich jenes wahren Ausspruches des. —Was eine offenbare Falschheit enthält, ist eine Ungereimtheit. Man kann aber keinem eine offenbare Unrichtigkeit beweisen. Denn ihm ist sie durch irgend einen Mißverstand nicht offenbar. Der Ausdruck ungereimt, abgeschmackt betrifft erstlich den Irthum selbst, zweytens hat er Beziehung auf die Person, die ihn hat. Denn ich erkläre sie dadurch für unwürdig, in die Klasse des allgemeinen Menschenverstandes aufgenommen zu werden. Wenn ich meine Widerlegung wider den Richter den ich für abgeschmackt halte, erklärt habe: so kann ich nicht die Absicht haben ihn zu belehren. Denn indem ich ihm den gemeinen Menschenverstand abspreche, habe ich ihn der Belehrung unwürdig erklärt, und ich würde selbst abgeschmackt handeln. Meine Widerlegung müßte also an Andere gerichtet seyn. Aber Andere, die gesunden Menschenverstand haben, werden die Ungereimtheit von selbst einsehen. Daher sind diese Ausdrücke nicht gut zu gebrauchen. Man muß lieber eine Ungereimtheit gehen lassen, es müßte denn seyn, daß sie etwas haßenswürdiges nach sich zieht, das ich von ihr entfernen muß.",
     "pages": [
      {
       "p": 833,
       "i": 2331
      }
     ],
     "aaEnd": 833,
     "ms": [
      {
       "p": 102,
       "i": 407
      },
      {
       "p": 103,
       "i": 1291
      },
      {
       "p": 104,
       "i": 2230
      },
      {
       "p": 105,
       "i": 3092
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-096",
     "kind": "text",
     "aa": 836,
     "text": "Wer blos empfindet und nicht urtheilt, der irret nicht. Also liegt jeder Irthum im Urtheil. Urtheile sind Handlungen des Verstandes und der Vernunft. Generaliter kann man sagen, Wahrheit objectiv ist Uebereinstimmung mit dem Gegenstand; subjective Wahrheit ist Uebereinstimmung mit den Gesetzen des Verstandes und der Vernunft. Der Verstand stimmt also mit seinen eigenen oder Verstandesgesetzen überein. Wir haben ein Vermögen vom Nothwendigen und Zufälligen, wir haben also Beschäftigungen des reinen Verstandes. Dieser Theil heißt die transcendental Philosophie. Unser Verstand ist von einer besondern Art, daß er keiner Anschauung fähig ist. Denn das können nur die Sinnen. Nun kommt jene zweyte Kraft ins Spiel, nähmlich die Sinnlichkeit. Wir haben gesprochen vom Verstand in Ansehung des Irthumes im Urtheile. Wir haben unsern Verstand nun so weit excolirt, daß er für sich nicht irrt. Die Sinnen irren auch nicht für sich. Warum? weil sie gar nicht urtheilen. In unserer Sinnlichkeit ist etwas, das blos aufs object bezogen wird, und das ist Anschauung, und etwas, das aufs Subject bezogen wird, und das ist Empfindung. Zur Klarheit der Erkenntniß gehören die Merkmahle notae. Ein Merkmahl ist ein Erkenntnißgrund, hauptsächlich auch in der Vergleichung der Dinge. Bey der Vergleichung sehe ich auf die identitaet, oder diversitaet der Dinge. Man braucht Merkmahle nicht bloß um Dinge zu unterscheiden, wie unser autor will, sondern auch ihre Uebereinstimmung zu entdecken. Z.E. Ein Schaaf will ich nicht bloß von einer Ziege unterscheiden, sondern ich will auch wissen, worin es mit einem andern Schaaf übereinkommt. – Merkmahle können betrachtet werden als eine positive Vorstellung der ganzen Vorstellung der Sache. Deutlich ist demnach eine Erkenntniß, wenn wir uns ihrer partial Begriffe bewußt sind, und uns dieselben klar vorstellen. Wenn nun diese Theilbegriffe wieder getheilt werden: so kriege ich Merkmahle von Merkmahlen. Diese Theile der Merkmahle heißen subordinirte Merkmahle, wodurch unsere Erkenntniße bis zu allgemeinen und höheren Merkmahlen hinauf steigen, die den mehrsten Dingen gemein sind. Z.E. was ist Tugend? Eine Herrschaft über die Neigungen. Was ist Herrschaft? Die Gewalt, die einer über den Andern hat. Was ist Gewalt? u.s.f. Durch diese subordinirte Merkmahle entstehet die tiefe Deutlichkeit, wo man immer weiter hin eindringt. – Man kann Merkmahle haben durch coordination, indem beyde Merkmahle compartes sind. Z.E. ein Körper ist ein undurchdringliches Ganzes. 1.) ein Ganzes 2.) undurchdringlich. Dies gehet nicht aufs Ganze, sondern Beyde gehen auf den Begriff vom Körper, den sie als complementum zusammen faßen. Die Reihen der coordinirten Merkmahle können ins Unendliche gehen. Z.E. Das Gold ist schwer, dehnbar, feuerbeständig, rostet nicht etc. etc. Hier ist noch nicht Vollständigkeit. Denn man könnte noch 1000 dergleichen Merkmahle auffinden. Eine Erkenntniß wird also durch klare Merkmahle deutlich. Nun kann durch ein aggregat coordinirter Merkmahle eine Erkenntniß deutlich werden, und denn wächset sie extensiv durch die Hinzukunft jedes neuen Merkmahles. Ich nehme so viel neue Merkmahle zusammen, bis sie das ganze aggregat auszumachen scheinen, indem ich, so lang ich kann ein neues hinzu setze. Auf die Art verfährt man bey definitionen. In einer gewißen Absicht können sie wohl Gränzen haben, nähmlich zu diesem oder jenem Zwecke. Sie wächset aber auch durch die Reihe der subordinirten Merkmahle, indem man diese zergliedert, und aus ihnen neue Merkmahle aushebet, die zwar in ihr schon lagen, die man sich aber noch nicht klar vorstellet. Seine Erkenntniß durch coordination auszubreiten ist angenehmer, als subordination. Diese ist schwer, indem einer mit der Aufmerksamkeit an einem Begriff haften muß, deßen Merkmahle immer subtiler werden, so lange bis sie zuletzt keiner Eintheilung mehr fähig sind. Dennoch hat diese Eintheilung Gränzen. Dies ist die intensive Größe der Deutlichkeit, die dem Verstande zwar mehr zu schafen macht, aber die Erkenntniß mehr erweitert, und ungemein richtig macht. Hier werden nicht Merkmahle zugesetzt, sondern ich decomponire nur den Begriff, indem ich zum Merkmahl kein Merkmahl hinzu nehme, und also nichts hinzusetze, sondern theile Diese Art, die Reihen der Merkmahle zu prosequiren hat einen Fortgang, der begränzt ist, denn zuletzt komme ich auf solche Theilbegriffe, die irresolubel sind, und ich komme auf den Begriff vom Einfachen. Deutlich ist eine Erkenntniß, wenn die Merkmahle selbst klar sind. Kann ich klare Merkmahle angeben: so kann ich mich über ein Ding expliciren. Kann ich keine Merkmahle angeben: so kann ich einem andern es nicht erklären, was er nicht versteht, sondern ich muß mich etwa mit Beyspielen behelfen. Die Größe der Deutlichkeit durch coordinirte Merkmahle ist die ausgebreitete Deutlichkeit (extensive). Die Größe durch subordinirte Merkmahle ist die tiefe (intensive) Deutlichkeit. – || V Dichter wollen alles in der Anschauung deutlich darstellen, und dieser Absicht wegen coordiniren sie Merkmahle in einer Sache, um die Deutlichkeit ausgebreitet zu machen. Der Dichter unterscheidet sich dadurch vom philosophen, daß dieser für den Verstand, jener für die Sinnlichkeit arbeitet. Zwar muß der Dichter auch in so weit logische Richtigkeit beobachten, daß er Einheit hat. Allein sein eigentlicher Zweck gehet doch auf Ergetzung der Sinnlichkeit. || V Das Lesen der Poesie hat also großen Nutzen, indem sie unserm Verstand das Vermögen einer ausgebreiteten Deutlichkeit verschaft, welche die leichteste und unterhaltendste Deutlichkeit unter allen ist, weil sie historisch erworben wird. Die tiefe Deutlichkeit ist eine Sache der philosophie, und es kommt darauf an, daß ich zu einem Merkmahle ein anderes heraus bekomme, und das so lange fortsetze, bis sie microscopisch werden. Hierdurch wird die Erkenntniß nicht erweitert, sondern auf die Tiefe hinabgegangen. Sie wird vorzüglich in metaphysischen Untersuchungen gebraucht, wo ich immer nach dem Grunde von dem Grunde frage, ohne neue hinzu zu setzen. Sie ist die intensive Deutlichkeit, die unsere Erkenntniß zwar sehr trocken, aber gründlich macht. Denn wenn wir immer beym Ganzen bleiben, und nie die Theile berühren: so schwimmen wir nur auf der Oberfläche, und haben superficielle Kenntniße. Die Merkmahle dienen entweder zum innern oder zum äußern Erkenntnißgrunde. Eine Erkenntniß dient zum innern Gebrauch, in so fern sie dazu dient, das Mannigfaltige im Gegenstande zu sehen. Zum äußern Gebrauch dient sie, wenn man den Gegenstand von andern unterscheiden, oder seine Uebereinstimmung mit anderen sehen will. Zum äußern Gebrauch können wenige Merkmahle leicht hinreichen, die doch zum innern von geringer Erheblichkeit sind. Die Merkmahle zum Behuf des innern Gebrauches sind von größerer Wichtigkeit. Denn wenn ich die Sache von innen kenne: so reichen diese Merkmahle gewiß zum äußern Gebrauch zu, ob dieser gleich zum innern Gebrauch nicht zureicht.",
     "pages": [
      {
       "p": 834,
       "i": 1001
      },
      {
       "p": 835,
       "i": 3543
      },
      {
       "p": 836,
       "i": 6152
      }
     ],
     "aaEnd": 836,
     "ms": [
      {
       "p": 106,
       "i": 43
      },
      {
       "p": 107,
       "i": 1006
      },
      {
       "p": 108,
       "i": 1901
      },
      {
       "p": 109,
       "i": 2928
      },
      {
       "p": 110,
       "i": 3908
      },
      {
       "p": 111,
       "i": 4852
      },
      {
       "p": 112,
       "i": 5760
      },
      {
       "p": 113,
       "i": 6614
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-097",
     "kind": "text",
     "aa": 836,
     "text": "1.) Verneinende und bejahende Begriffe."
    },
    {
     "id": "wiener-s04-098",
     "kind": "text",
     "aa": 836,
     "text": "2.) Verneinende und bejahende Merkmahle von den Begriffen."
    },
    {
     "id": "wiener-s04-099",
     "kind": "text",
     "aa": 838,
     "text": "Wenn der Gegenstand selbst ein Mangel ist: so kann ich nur einen verneinenden Begriff haben. Z.E. Freyheit ist, daß der Wille nicht unter dem Zwange der Menschen steht. In der Logic, die von allem Inhalt abstrahirt, kann nur von verneinenden oder bejahenden Merkmahlen gehandelt werden, und die Art, die Begriffe deutlich zu machen, geschiehet eben durch Bejahung oder Verneinungen. Durch die Verneinung habe ich den Begriff nicht erweitert, und kann hierdurch den Begriff nicht deutlicher einsehen. Der bejahende Begriff muß hinzu kommen, und tiefere Deutlichkeit verschaffen. Durch diese sehen wir die Erkenntniß ihrem Inhalte nach deutlicher und mit größter Klarheit ein. Ein verneinendes Merkmahl wird also nicht zur Vermehrung unsrer Einsicht gebraucht, sondern es dienet nur dazu, einen Begriff von andern Dingen auszuschließen, um Irthümer zu verhüten. Alle bejahende Merkmahle dienen dazu, eine Erkenntniß zu gründen und hervor zu bringen. – Der Verstand geht eigentlich darauf, die Vollkommenheit der Erkenntniß zu befördern. Aber es ist auch sein Verdienst, wenn nicht Irthümer mit hinein kommen. Verneinende Merkmahle sind hier conditio sine qua non. Denn da wir in Gefahr sind, auf Falschheit auszulaufen: so müssen sie dazu dienen, Irthümer abzuhalten, und sie sind mit das vortrefflichste Mittel, unsre Erkenntniß vollkommen zu machen. Alle verneinende Merkmahle, die einen von Irthümern abhalten, in die kein Mensch gerathen ist, haben gar keinen Nutzen. Denn sie sind nur nützlich, wenn sie von einem möglichen Irthum abhalten. Es gibt gewiße Wissenschaften, die festgesetzte negative Merkmahle enthalten. Es wäre zu wünschen, daß man um jede Wissenschaft einen Wall von negativen Merkmahlen ziehen könnte, ohne hie und da eine Pforte offen zu laßen, wo Irthümer sich einschleichen können. Die Theologen fangen an mit der Vernunft über Dinge, die Gott in der Schöpfung sagt, zu speculiren, über das Verhältniß und Beschaffenheit dieser oder jener offenbarten Lehre zu fragen, welches die Quelle vieler Irthümer in der Theologie ist. Verneinende Merkmahle halten so die Irthümer ab. Unwissenheit in Dingen ist ohne Schade. Irthümer aber vergrößern nicht nur nicht die Erkenntniß der Wahrheit, sondern verhindern sie. Es ist oben erwähnt worden, daß man in manchen Stücken unwissend sey, daß man auch nicht immer nach dem Nutzen fragen kann, sondern ohne Umgang auf alles Wissenswürdige, so viel man kann, los gehen soll. Von Unwissenheit ist unterschieden das willkürliche ignoriren, wenn man von manchen Umständen nicht notiz nimmt, die zur Absicht des Dinges nichts beytragen. Was ausser unserm Zweck ist, dürfen wir nicht wissen. Bey Gesprächen und Sachen ignoriren, d.i. abstrahiren wir von manchen Sachen, die man wohl weiß, aber wegläßt, weil sie nicht zum Zweck gehören. Es gehöret zum ignoriren daher viel Klugheit im Religionsvortrage. Man sollte die Irthümer des gemeinen Pöbels ignoriren, denn wenn man den Wust, der unter der Asche glimmet, aufrührt: so brennt er lichterloh auf. Nur muß, was man ignorirt, dem Hauptzweck nicht nachtheilig seyn. Aber Irthümer selbst zu veranlaßen ist wahrer Betrug, d.i. das peccatum philosophicum der Jesuiten, die, wenn sie eine gute Absicht hatten, auch bey schlechten Handlungen gut zu handeln glaubten. Ignoriren ist also ganz etwas anders, als vorstellen, indem es die Sache so mit sich bringt. Die Wichtigkeit betrift die Beziehung auf den Gebrauch und Zweck. Wichtig ist eine Erkentniß, wenn sie ein großer Grund zum Gebrauch ist, oder zu vielerley Zwecken dient. Die Wichtigkeit ist aber jederzeit relativ. Z.E. Für den Minister ist die politic eine Sache von großer Wichtigkeit, für einen andern ist sie unwichtig. Wenige setzen die Wichtigkeit in ernsthaften und wichtigen Dingen, sondern in Nebensachen. Manche halten für unwichtig, über die wichtigsten Gegenstände der Religion und moralitaet zu sprechen, und handeln ehrlich entweder aus Sitten, oder aus Vorsatz, u.s.f. Einen von der Wichtigkeit einer Sache zu informiren, ist sehr schwer. Von der Wichtigkeit des Zweckes kann ich wohl reden. Aber die Wichtigkeit der Mittel ist schwer. Z.E. einen Hofmann zu bilden, zu diesem Zweck kann ich französisch sprechen, Belesenheit etc. etc. recommandiren. Aber die Wichtigkeit der Mittel ignorire ich. Aber die Logic abstrahirt von der Wichtigkeit des Inhaltes, und redet von der relativen formalen Wichtigkeit. Logisch wichtig ist eine Erkenntniß, wenn sie ein Grund von großen Folgen ist. Wenn ein Erkenntniß der Grund ist von vielen und zahlreichen Folgen, d.i. die Fruchtbarkeit der Erkenntniß. Z.E. was die cultur unserer Sitten ausmacht, ist unwichtig, doch eben so häufig, daß es nützlich und fruchtbar ist. Tugend ist mehr als conduite, und gehört daher zur Wichtigkeit. Erkenntniße sind zureichend zum innern gebrauch, wenn aus diesen Merkmahlen alles verstanden werden kann, was dazu gehört; zureichend in äußerm Gebrauch, wenn sie in der Vergleichung dazu dienen, zu sehen, wie Dinge mit andern übereinstimmen, oder sich unterscheiden, absolut ist kein Merkmahl zureichend, sondern immer in dieser oder jener Absicht. Z.E. Merkmahle sind zureichend zur praxis, aber nicht zur speculation.",
     "pages": [
      {
       "p": 837,
       "i": 1510
      },
      {
       "p": 838,
       "i": 4089
      }
     ],
     "aaEnd": 838,
     "ms": [
      {
       "p": 114,
       "i": 383
      },
      {
       "p": 115,
       "i": 1367
      },
      {
       "p": 116,
       "i": 2315
      },
      {
       "p": 117,
       "i": 3187
      },
      {
       "p": 118,
       "i": 4057
      },
      {
       "p": 119,
       "i": 4894
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-100",
     "kind": "text",
     "aa": 838,
     "text": "Nothwendige Merkmahle können vom Begriff eines Dinges gar nicht getrennet werden, sondern gehören ad e sse. Zufällige sind nicht Bestandtheile des Dinges, sondern acce ssoria. Z.E. Vernunft ist beym Menschen nothwendig. Gelehrsamkeit ist zufällig. – Außerwesentlich sind Merkmahle, die nicht als constitutiva zur Sache gehören, wesentliche sind constitutiva der Sache. Die Ausdehnung ad essentiam corporis pertinens est. Die Bewegung ist außerwesentlich, und acce ssio zum Begriff vom Körper. Also kann man alle praedicata in ad e ssentiam pertinentia et extrae ssentialia eintheilen.",
     "ms": [
      {
       "p": 120,
       "i": 584
      }
     ]
    },
    {
     "id": "wiener-s04-101",
     "kind": "text",
     "aa": 838,
     "text": "Das Wesen ist der complexus notarum nece ssarium interne sufficientium. In der Logic wird vom Wesen der Begriffe, nicht der Dinge geredet. Die nothwendigen Merkmahle eines Dinges werden unterschieden. Einige kommen dem Dinge ut rationata, als Folgen von andern Merkmahlen eben deßelben Dinges zu, aliae notae conceptus alieni non nisi ut rationes competunt. Z.E. der Mensch hat eine Sprache, ist ein inneres Merkmahl, aber es kommt von andern Merkmahlen her, daß er nähmlich Vernunft, Zunge etc. etc. hat, daß er aber ein Thier ist, kann ich aus nichts anders urtheilen. Ideae conceptus quia sunt rationes, minime derivatae sunt e ssentiales, d.i. die im Begriffe nicht als Folgen, sondern als Grund liegen, die, die ad e ssentiam ut rationata pertinent, sind attributa, diese müßen aus den eßentiellen abgeleitet werden, e ssentia ipsa est complexus e ssentialium,",
     "ms": [
      {
       "p": 121,
       "i": 822
      }
     ]
    },
    {
     "id": "wiener-s04-102",
     "kind": "text",
     "aa": 839,
     "text": "die attribute gehören auch zum Wesen, aber als Folgen, und nicht als Bestandtheile des Wesens."
    },
    {
     "id": "wiener-s04-103",
     "kind": "text",
     "aa": 839,
     "text": "Extrae ssentialia sind zweyfach, ein Mahl interna: modi, oder zufällige Beschaffenheit, 2.) externae relationes äußere Verhältniße. Alle relationen sind zufällig, hingegen können die innern bisweilen e ssentialia seyn. Z.E. die Gelehrsamkeit ist extraeßentiel, bey Manchem aber ist sie doch eine innere Bestimmung, hingegen Herr oder Knecht zu seyn sind relationes Verhältnißbegriffe. Denn auf einer wüsten Insel ist man weder Herr, noch Knecht, die sämtliche äußere Merkmahle sind also außerhalb und innerhalb der Dinge."
    },
    {
     "id": "wiener-s04-104",
     "kind": "text",
     "aa": 839,
     "text": "Wir reden vom Wesen der Dinge nach dem Begriff, den wir von Dingen haben, nach dem logischen Begriff. Wir können aber auch nach dem Wesen des Dinges an und vor sich selbst fragen. Dieses ist, was das Wesen ausmacht, und ihm nothwendig gehört, wenn es gleich in unserm Begriffe nicht darin enthalten ist, kurz, das erste Grundstücke eines Körpers.",
     "ms": [
      {
       "p": 122,
       "i": 152
      }
     ]
    },
    {
     "id": "wiener-s04-105",
     "kind": "text",
     "aa": 839,
     "text": "Dies ist das real Wesen. Das andere ist das logische Wesen. Man klagt, uns sey das Wesen der Dinge unbekannt, nähmlich der Grund alles deßen, was Dingen eigentlich zukommt. Aber dennoch können wir das logische Wesen sehr leicht erkennen. Das logische Wesen bedeutet nichts weiter als den Inbegrif aller Merkmahle, die einen gewißen Begrif zuerst ausmachen. complexus omnium notarum conceptum aliquem primitive constituentium. complexus omnium notarum d.i. ein Begrif, der complet in Ansehung der Merkmahle ist, die zusammen genommen den Begrif ausmachen. Zum logischen Wesen gehört also die totalitaet der Merkmahle. Sie sollen primitive Merkmahle seyn d.i. die nicht als Folgen, sondern als constitutiva zum Begriffe gehören. Z.E. wenn ich das logische Wesen der Körper wissen will: so finde ich viele Merkmahle. Unter diesen gehören einige zum Wesen, als Folgen, andere sind die Bestandtheile, die e ssentialia eines Begriffes der complexus e ssentiae heißt. Ausdehnung, Undurchdringlichkeit, Figur sind primitiv, hingegen Theilbarkeit etc. etc. sind attribute. Es ist möglich, das logische Wesen von allen Dingen zu geben. Denn von allen Dingen, wovon wir reden, müssen wir doch Begriffe haben, und diese müssen wir doch erklären, um die e ssentialia und rationata derselben auffinden zu können, und das was primitive und derivative zum Wesen gehört.",
     "ms": [
      {
       "p": 123,
       "i": 575
      }
     ]
    },
    {
     "id": "wiener-s04-106",
     "kind": "text",
     "aa": 840,
     "text": "Das real wesen einzusehen reicht über den menschlichen Verstand. Von keinem einzigen Dinge können wir einen completen Grund angeben. Es gehört dazu eine allgemeine complete Erfahrung, und über einen Gegenstand alle mögliche Erfahrung anzustellen ist unmöglich; a priori und ohne alle Erfahrung können wir kein Ding der Natur erklären, weil der Verstand über das, was er nicht kennt, nicht speculiren kann. Das reale Wesen nennt man auch Natur. Wenn ich also Wesen und Natur unterscheide: so unterscheide ich das logische Wesen vom real Wesen. Wenn wir die Merkmahle unsers Begriffes abstrahiren: haben wir das logische Wesen. Untersuchen wir aber den innersten Grund eines Körpers: so werde ich seine Natur, d.i. sein real wesen erkennen.",
     "pages": [
      {
       "p": 840,
       "i": 123
      }
     ],
     "aaEnd": 840,
     "ms": [
      {
       "p": 124,
       "i": 85
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-107",
     "kind": "text",
     "aa": 841,
     "text": "Die Materie von deutlichen und klaren Erkenntnißen gehöret nicht für die Logic. Sie soll die Regeln des Verstandes lehren bey Vorstellungen, die in uns angetroffen werden. Wir müssen uns also der Vorstellungen bewußt seyn, um die Regeln mit ihren Verbindungen zu kennen. Sind wir uns ihrer aber nicht bewußt: so können wir auch mit ihnen nicht so verfahren. Klarheit also, wo ich mir meiner Vorstellung bewußt bin, gehört für die Logic, dunkele Vorstellungen klar zu machen ist sie nicht vermögend. Daß wir also bey der Seele dunkele Vorstellungen annehmen, gehet die Logic nichts an, sondern wie Klarheit zur Deutlichkeit, und diese zur Ausführlichkeit gebracht werde, wie viele klare Vorstellungen allgemein gemacht, und verglichen werden sollen u.s.f. Von dunkelen Begriffen redet die psychologie. Man nennt Vorstellungen dunkel in Vergleichung mit solchen, die [...] den Grad der Klarheit haben, den man verlangt. Wenn eine Vorstellung von einigen aber nur wenigen Sachen das Ding unterscheidet, wenn die Sache eines, aber nicht aller Faßlichkeit angemeßen ist. Es gibt also auch eine logische Dunkelheit, die aber von der psychischen unterschieden ist, deren man sich gar nicht bewußt ist. Die logische ist die comparative, diese die absolute Dunkelheit. Z.E. der Begriff vom instinct ist ein dunkeler Begriff. Man weiß wohl, er ist ein Antrieb zu handeln, aber das erschöpft nicht alles. – Comparative Dunkelheit kann man im Verhältniß haben. In einem Verhältniß, wo es zur Unterscheidung hinreichend ist, ist es klar, in einem andern, wo es nicht dazu hinreicht, dunkel. Z.E. wenn ein Erkenntniß im Verhältniß mit gewißen subjecten conscendirt: so kanns nicht anders seyn, daß es die Fähigkeit anderer transcendirt. Dies ist gar nicht zu vermeiden. Man muß dabey aber sehr aufmerksam seyn. Ein Lehrer kann sehr deutlich reden, wenn er gleich gar nichts versteht, indem er sich der Fassungskraft seiner Zuhörer accommodirt, ihre terminologien usurpirt, und ihnen deshalb deutlich dunkel ( H— ) [AA: ist ]. Relativ dunkel muß man jederzeit reden, wenn man zu einer Klarheit aufsteigen will, die einiger massen allgemein ist. Der Lehrer muß durch Dunkelheit die Leute zu sich hinan ziehen, damit sie dadurch allgemein deutlich lernen, und sich nicht zu ihnen ganz hinab lassen. Die Deutlichkeit ist relativ in Ansehung des Menschen, sie muß dem speculativen Verstand, und nicht dem gemeinen Menschenverstand accommodirt seyn. Unser Gegenstand muß so beschaffen seyn, wie wir durch abstraction Begriffe fassen. Wenn mans nicht kann: muß mans bleiben lassen, und nicht über die Dunkelheit klagen. Man muß studiren, was unserer Fassungskraft angemessen ist, und absolute Wissenschaften nicht tadelhaft finden, wenn gleich andere tiefer hinab gezogen werden können. Bey der totalen und partialen Dunkelheit ist zu merken: Ganz kann eine Erkenntniß nicht klar seyn, sed obscurae quaedam notae in conceptu claro universali notae singulares possunt esse obscurae universalis autem clarae. Z.E. ein Lichtfunke erhellet nicht, aber viele machen hell. So auch bey den Begriffen. Eine Vorstellung, die im Ganzen klar, es aber in Absicht der Theile nicht ist, ist eine undeutliche Vorstellung. Z.E. Blau und gelb macht grün, bey der grünen Farbe sind wir uns aber dieser Theile, die darin liegen, nicht immer bewußt, eben so bey den Begriffen. Z.E. der Begriff vom Recht. Es soll das gerade und ohne Umschweif und List genommene bezeichnen, aber es ist doch nicht so, wie bey einer geraden Linie. Denn jeder sieht seinen eigenen Vortheil, ohne auch Andern zu schaden. Kurz, es gehört viel dazu alles Mannigfaltige eines Begriffes aus einander zu setzen, und hernach wieder Theile von den Theilen entwickeln zu können, und wir haben vielfache Begriffe, die wir nur im Ganzen erkennen können. Es ist ein Stück der philosophie, die tiefe Deutlichkeit der Theile von Theilen zu geben. Aber zuletzt kommt man immer auf Theilbegriffe, die einfach sind, und uns nur klar werden können. Z.E. Realitaet, Mathematischer Punct. Wenn wir einen Begriff selbst willkürlich zusammen setzen: so kann er ganz deutlich werden. Denn weil wir ihn selbst gemacht haben: so wissen wir auch, was wir hinein gebracht haben, und sind uns der Theilvorstellungen bewußt. Wird er uns aber gegeben: so können wir nicht immer deutlich einsehen.",
     "pages": [
      {
       "p": 841,
       "i": 1958
      }
     ],
     "aaEnd": 841,
     "ms": [
      {
       "p": 125,
       "i": 176
      },
      {
       "p": 126,
       "i": 1061
      },
      {
       "p": 127,
       "i": 1963
      },
      {
       "p": 128,
       "i": 2878
      },
      {
       "p": 129,
       "i": 3752
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-108",
     "kind": "text",
     "aa": 843,
     "text": "|| V Alle Klarheit kann entweder subjectiv oder objectiv verstanden werden. Durch die objective wird das Object klar, sie ist die logische größre Vollkommenheit, deren erster Grad ist, daß wir uns ihrer bewußt sind, und deren zweyter Grad Klarheit in den Theilen, d.i. Deutlichkeit ist. Die Erkenntniß wächst subjectiv durch die Größe der logischen Klarheit, wenn die Vorstellungen im subject in Beziehung auf die übrige Erkenntniß mehr Aufmerksamkeit erregen, und die Gemüthskraft stärker beschäftigen. || V Wenn eine Vorstellung statt von andern im Gemüth verdunkelt zu werden, andere verdunkelt: so ist dies diejenige Klarheit, die im Gemüth eine größere Veränderung des Zustandes erregt. Wir haben oft nöthig unsern Zustand durch eine Vorstellung zu afficiren, und des Gemüths Triebfedern anzuspannen. Diese subjectiv größre Klarheit heißt Lebhaftigkeit. || V Die Lebhaftigkeit der Erkenntniß gehört demnach zur ästhetischen Erkenntniß und zur Sinnlichkeit. Hier muß man genau darauf merken, wie Lebhaftigkeit bey der Dunkelheit anzubringen sey. Ein gewißer Grad Lebhaftigkeit kann allenthalben unbeschadet der Dunkelheit gebraucht werden, Z.E. ein treffender Ausdruck. Ja sie ist gut, denn ohne alle Lebhaftigkeit würde keine Aufmerksamkeit rege gemacht werden. – || V In der Predigt muß erst Deutlichkeit und richtige Auseinandersetzung vorkommen, und denn muß dem Vortrag auch Lebhaftigkeit gegeben werden, um die Aufmerksamkeit zu erregen, und die Seele zu commoviren. Diese Lebhaftigkeit hat ihre Grade. Der intensive Grad ist die Stärke der Erkenntniß. || V Der extensive Grad kommt auf die Anschauung an, nicht aufs Gefühl, wo durch Beyspiele aus dem gemeinen Leben, und Fällen in concreto die Sache vor Augen gestellt wird. Je mehr wir Merkmahle herbey schafen, um durch Anschauung die Sache von der puren Idee los zu wickeln, desto mehr bringen wir extensive größere subjective Klarheit herein. Dieses ist das Nothwendigste, daß dadurch die Begriffe unserm Verstande angemeßener und deutlicher werden. Denn der Verstand muß durch die Sinnlichkeit zweckmäßig dirigiren. – || V Die intensive Lebhaftigkeit beruht auf dem Gefühl, nicht auf der Anschauung, sondern auf der Stärke der Erkenntniß. Zum Gefühl gehöret, daß es die Schönheiten abmahlt, und Rührung, d.h. Gemüthsbewegung hervor bringt. Diese sind Erstaunen, Furcht, Bewunderung etc. Hierdurch werden wir in den unschicklichsten Zustand versetzt zu urtheilen. || V Wenn die Anschauung schon da ist: so kann wohl Gefühl hinzu kommen. Denn da sind wir schon überzeugt, und könnten nicht leicht durch betäubendes Gefühl die Anschauung verlieren. Alles, was man thut, muß aus principien geschehen. Sonst ists zweydeutig, so daß dieselbe Rührung mich heute zu guten, morgen zu schlechten Handlungen leitet. || V Gefühl erregt Thränen, aber nichts auf der Welt trocknet eher als Thränen. || V Wenn das Urtheil tief in die Seele gedrungen ist: können wohl Empfindungen, aber als Nebenursachen, und gleichsam als Theile mit genommen werden. || V Aber die Majestät der Religion ist zu groß, als daß man auf der Kanzel mit Gefühlen spielen könnte. Sie müssen nicht die Nahrung, sondern die Begleiterin der Seele seyn, daß, wenn unsere Seele durch Erkenntniß aufgehellt ist, eine moderate Rührung hervorkommt, und sie aufheitert. Nur muß diese Rührung die Anschauung nicht überschreyen. Dies ist die Lebhaftigkeit, die die aesthetic der Form nach hat. Bey der, die auf die Anschauung geht, muß nicht viel Rührung angebracht werden. Denn die wirkt auf den Verstand allein, der das nicht achtet. || V Um genau zu belehren, wie diese Anschauung und Empfindung verbunden werden müsse, wie man nähmlich aller Ueberzeugung Anschauung geben, und doch auch Empfindung hinzu lassen könne, lese man den Sulzer, und vorzüglich seine Theorie der schönen Künste, oder seine Vorübungen. Man bemühe sich um Kenntniße in der Geschichte. Roußeau zeigt gleichfalls viel Verstand in seinen Schriften, läßt sich aber zu sehr durch seinen Enthusiasmus hinreissen, aber er hat doch so sehr viel gut gemeintes und Wahres, daß man es einem Jeden überlaßen muß, das von seinem enthusiastischen zu unterscheiden. Auch den Hume kann man in dieser Absicht nutzen.",
     "pages": [
      {
       "p": 842,
       "i": 268
      },
      {
       "p": 843,
       "i": 2841
      }
     ],
     "aaEnd": 843,
     "ms": [
      {
       "p": 130,
       "i": 287
      },
      {
       "p": 131,
       "i": 1099
      },
      {
       "p": 132,
       "i": 1812
      },
      {
       "p": 133,
       "i": 2488
      },
      {
       "p": 134,
       "i": 3161
      },
      {
       "p": 135,
       "i": 3800
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-109",
     "kind": "text",
     "aa": 844,
     "text": "Die größte logische Vollkommenheit nach der Klarheit ist die Deutlichkeit. In den Wolffischen Logiken wird immer nur die analytische Art der Deutlichkeit betrachtet. Es gibt aber eine weit ausgebreitetere Art, nähmlich die synthetische Erzeugung der Deutlichkeit. Alle analytische Erzeugungen nähren die Erkenntniß nicht, sie lösen nur die Erkenntniß, die mir gegeben ist, auf, so daß ich nun beßer unterscheiden lerne, was schon vorher in der Erkenntniß enthalten war. Sie wächst also nicht dem Inhalte nach, sondern ich erkenne sie nur mit mehrerem Bewußtseyn. Mit dieser Art beschäftigt sich die philosophie vorzüglich z.B. durch die Moral nähre ich meine Erkenntniß nicht, sondern ich setze sie nur in ein beßeres Licht. Socrates sagte, er wäre die Hebamme seiner Zuhörer, d.i. er machte, daß sie über das, was sie schon wüßten, beßer nachdenken, und sich deßen beßer bewußt würden. Wenn wir immer wüßten, was wir wissen, nähmlich beym Gebrauch gewißer Worte und Begriffe die so subtil in der Anwendung sind: so würden wir über den Schatz unserer Erkenntniß erstaunen. Z.B. Philosophen und Juristen haben den Begriff von Recht und Billigkeit noch nie entwickeln und auseinander setzen können. Aber man darf einem nur einen Fall in con creto geben, so wird er bald sagen, in wie fern es recht, und in wie fern es billig ist. In meinem Begriffe von Billigkeit muß also doch etwas stecken, was von dem von Recht unterschieden ist, und dieses in Dunkel gehüllten Merkmahles bediene ich mich casu. Es ist eine der größten Geschicklichkeiten eines Gelehrten, der nicht bloß schulgerecht ist, sondern auch popularitaet besitzt, daß er, wenn er mit Leuten redet, die ihre Begriffe gar nicht an den Tag bringen können, Alles aus ihnen heraus heben kann, und ihnen das saget, was sie denken. Dadurch befriediget z.B. der Prediger auf die angenehmste Weise seine Zuhörer. Wenn einer sagen möchte, ich habe ja nicht so gelehrt – Ja, warst du dir deßen Alles ordentlich bewußt was du wußtest? – Diese Deutlichmachung des Begriffes geschiehet vorzüglich durch definitionen. Aber ist dieses vollbracht: so ist es auch nöthig seinen Begriff zu erweitern, und denn wächst die Deutlichkeit synthetisch, indem neue Merkmahle hinzu kommen. Platonische oder Socratische Fragen sind von der Art, daß sie aus den Kenntnißen des Andern das heraus hohlen, was in ihnen liegt, indem man ihn zum Bewußtseyn deßen bringt, was er wirklich dachte. Sie sind demnach von Catechismus Fragen sehr unterschieden, wo nur nach dem gefragt wird, was in dem Gedächtniße liegt. – Definitionen haben den höchsten Grad analytischer Deutlichkeit, sie sind die Endabsicht aller unserer Begriffe.",
     "pages": [
      {
       "p": 844,
       "i": 1181
      }
     ],
     "aaEnd": 844,
     "ms": [
      {
       "p": 136,
       "i": 264
      },
      {
       "p": 137,
       "i": 1013
      },
      {
       "p": 138,
       "i": 1778
      },
      {
       "p": 139,
       "i": 2557
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-110",
     "kind": "text",
     "aa": 845,
     "text": "Der gesunde Verstand hat das Besondre, daß er Speculationen so stark vorläuft, daß wir schon die Sachen immer ein gut Stück voraus gebracht haben, ehe wir darüber zu speculiren anfangen, z.B. in den Begriffen von Glück, Billigkeit etc. Wenn Jemand von seinen Begriffen, die er gehabt hat, einen unrichtigen Gebrauch macht: so ist der Begriff nicht nur für chicanisch und tadelhaft zu halten, denn unsere Begriffe enthalten in sich immer viel Vernunft, aber wenn wir sie nicht recht entwickeln: so können wir manchmahl vom rechten Weg abkommen. Einen deutlichen Begriff machen ist die synthetische Methode, einen Begriff deutlich machen, ist die analytische. Wenn ein deutlicher Begriff gemacht werden soll: so muß man erst Merkmahle anführen, z.B. ein gewißer Gegenstand hat Undurchdringlichkeit, Schwere etc. den will ich Körper nennen. Ich fingire mir demnach einen Begriff z.B. eine Republik ohne Strafen, wo ein Jeder um seines eigenen Beßten willen gut handelt. Eine solche fiction ist ein deutlicher Begriff, den ich selbst gemacht habe. Mathematische Deutlichkeit ist ganz synthetisch. Der Mathematiker sagt, was auch alle Leute sich unter Zirkel vorgestellt haben, ich denke nur, daß er seyn soll, wo sich eine gerade Linie um einen festen Punct bewegt. Hier habe ich den Begriff vom Zirkel nicht deutlich gemacht, sondern einen deutlichen Begriff gemacht. Einige sagen bey der Deutlichkeit der logischen Form nach, d.i. bey der analytischen schwinde die energie der Erkenntniß, und die aesthetische Vollkommenheit verliere ihr pondus dadurch, wenn ich einem immer deutlich zu erkennen gebe, was er verworren dachte. Bey der illusion z.B. bey der Schönheit kann das wahr seyn, aber wenn die Rede von der Wahrheit ist: so kann die Zergliederung der Erkenntniß in diesem Stücke nicht hinderlich, sondern beförderlich seyn. Die Zergliederung muß nur nicht so lange dauern, daß denen, die sie nicht gewahr sind, der Gegenstand selbst dadurch zuletzt aus dem Auge komme. Denn indem ich auf die minuti ssima gehe, verlier ich oft die Vorstellung des Ganzen. Bey der analytischen Erkenntniß mache ich einen gegebenen Begriff deutlich. Die synthetische gibt mit der Deutlichkeit zugleich den Begriff. Der Mathematicus macht Begriffe mit der Deutlichkeit. Der philosoph macht Begriffe deutlich. Indem jener der Mathematicus den Begriff gibt, gibt er zugleich alle partial Merkmahle an, woraus er besteht. Hieraus erhellet: die Deutlichmachung der Objecte geschiehet synthetisch, die Deutlichmachung der Begriffe analytisch. Bey der synthetischen setze ich durch die Erfahrung zum Begriff eines Gegenstandes neue Merkmahle hinzu. Sie entspringt so, daß die Theile der Erkenntniß vor der ganzen Erkenntniß vorher gehen. In der analytischen geht das Ganze vor den Theilen vorher. Z.B. Tugend kann ich nicht synthetisch erklären. Denn ich soll sagen, was wir alle unter dem Begriffe von Tugend denken, nicht was ich nach meinem Eigensinn vielleicht darunter verstehe.",
     "pages": [
      {
       "p": 845,
       "i": 1057
      }
     ],
     "aaEnd": 845,
     "ms": [
      {
       "p": 140,
       "i": 714
      },
      {
       "p": 141,
       "i": 1523
      },
      {
       "p": 142,
       "i": 2284
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-111",
     "kind": "text",
     "aa": 845,
     "text": "Begreiffen, d.i. durch Begriffe erkennen nennt der autor concipere. Dies ist aber nicht so recht gut. Denn wir haben für comprehendere d.i. durch die Anschauung per apprehensionem erkennen, im Deutschen keinen Ausdruck. Die Grade der Deutlichkeit sind",
     "ms": [
      {
       "p": 143,
       "i": 41
      }
     ]
    },
    {
     "id": "wiener-s04-112",
     "kind": "text",
     "aa": 845,
     "text": "1.) der niedrigste Grad ist sich etwas vorstellen. Wenn ich das, was sich auf den Gegenstand bezieht, erkenne: so stell ich mir den Gegenstand vor."
    },
    {
     "id": "wiener-s04-113",
     "kind": "text",
     "aa": 846,
     "text": "2.) erkennen, percipere, heißt sich etwas in Vergleichung mit andern vorstellen, und seine identitaet oder Verschiedenheit davon einsehen. Also mit Bewußtseyn etwas erkennen. Denn Thiere erkennen auch ihren Herrn aber sind sich deßen nicht bewußt.",
     "pages": [
      {
       "p": 846,
       "i": 138
      }
     ],
     "aaEnd": 846,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-114",
     "kind": "text",
     "aa": 846,
     "text": "3.) etwas verstehen, intelligere, etwas im Verstande, nicht bloß mit Bewußtseyn erkennen. Der Verstand ist das Vermögen der Begriffe Mithin durch Begriffe etwas erkennen heißt etwas verstehen, concipere.",
     "ms": [
      {
       "p": 144,
       "i": 133
      }
     ]
    },
    {
     "id": "wiener-s04-115",
     "kind": "text",
     "aa": 846,
     "text": "4.) etwas einsehen, mit der Vernunft erkennen, nicht bloß verstehen, sondern nach solchen Begriffen, die der Bestimmung nach allgemein sind. Z.B. nicht bloß, was ein Haus sey, sondern auch die Nutzbarkeit, Einrichtung etc. des Hauses. – Wie Wenige sind, die etwas einsehen, wenn sie es gleich verstehen. Z.B. der Pulver Fabrikant weiß, daß es eine treibende Kraft hat, daß es so und so entstanden ist. Zum Verstehen kommen sehr viele. Das macht, sie haben gewiße Regeln des Verstandes. Aber sie sehens nicht ein, non perspiciunt."
    },
    {
     "id": "wiener-s04-116",
     "kind": "text",
     "aa": 847,
     "text": "5.) Comprehendere, begreiffen, hinreichend einsehen, wie fern etwas zu einer gewißen Absicht dient. Begriff schlechthin heißt, wenn ich aus der Vernunft erkenne, daß es zu aller Absicht hinreichend ist. So können wir aber nichts erkennen. Der Mathematicus sieht die Eigenschaften des Dinges zu vieler Absicht ein, aber nicht die absolute Hinreichung derselben. Indeßen relative kann man diese wohl haben. – Dies begreiffen ist etwas sehr delicates. Die Menschen müßen, was sie lernen, wirklich begreiffen, zum wenigsten in der Absicht, wozu es begreiflich ist. Z.B. Bey Religions Sachen, Geheimnißen der Natur, Moral. Denn wenn er sie zu seiner Absicht nicht hinreichend einsieht: so kann er keinen Gebrauch davon machen. Daher muß man nicht gleich von unbegreiflich reden, wenn gleich in speculativer Absicht etwas zu erkennen nicht möglich ist. Es gibt bey uns einen besondern Gebrauch der Vernunft, wo sie uns hinreichend scheint, etwas einzusehen, wenn die Sache einmahl da ist, so daß wir uns überreden, wir hätten das durch unsere Vernunft auch einsehen können, aber wenn wir uns fragen, ob wir das wohl a priori auch hätten erkennen können: so scheints doch, als wenn wir es nicht gekonnt hätten. Hierher gehören alle Proben – in der Naturwissenschaft. Zu begreiffen, was ich a priori bestimmt habe, ist sie wohl hinreichend. Z.B. Mondsfinsterniß kann ich begreiffen, weil ich den Lauf des Mondes weiß. Aber würde ich wohl, wenn ich nicht wüßte, daß der Salpeter so eine treibende Kraft hätte, vorher wissen können, daß das Pulver so aufplatzen würde, wenn ich gleich das Pulver noch so gut erklären, oder verfertigen könnte? Am Ende zeigt es sich, wenn man in die Sache hineingeht, daß wir nur von wenigen Dingen sagen können, wir sehen sie hinreichend ein. Den Begriff erklären können sehr viele. Aber vom Begreiffen sind die Meisten sehr weit en tfernt. – Was in der Erfahrung liegt, hat man probirt, a priori zu demonstriren. Z.B. die Eigenschaft des Hebebaumes demonstrirt man sehr gut in der Mechanic. Aber diese Erkenntniße zeigen immer etwas Fehlerhaftes an sich, woraus erhellet, daß, wenn uns das nicht die Erfahrung gegeben hätte, wir nie darauf gekommen wären. Was ich also a priori nicht bestimmen kann, das kann ich nicht begreiffen, oder völlig einsehen. Z.B. die Brechung des Lichtstrahles im Wasser kann man jetzt schon erklären, und es kann die Vernunft die Sachen in der Erfahrung recht begreiflich machen, aber daß wir uns schmeicheln, wir würden dergleichen a priori haben einsehen können, ist falsch.",
     "pages": [
      {
       "p": 847,
       "i": 1597
      }
     ],
     "aaEnd": 847,
     "ms": [
      {
       "p": 145,
       "i": 100
      },
      {
       "p": 146,
       "i": 934
      },
      {
       "p": 147,
       "i": 1815
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-117",
     "kind": "text",
     "aa": 847,
     "text": "Ein Begriff ist deutlich, deßen Merkmahle klar sind. Merkmahle sind subordinirt oder coordinirt. Die subordinirte machen eine Reihe aus, und wenn wir in der Reihe der subordinirten Merkmahle fortgehen: so ist das profunditas, Gründlichkeit. Wir fragen hier zuerst, welches ist das unmittelbare Merkmahl vom Körper? Ausdehnung. Was ist Ausdehnung? etc. bis wir zuletzt auf Merkmahle kommen, die die Grundbegriffe ausmachen. Die Profunditaet ist ein Fortgang in der Reihe subordinirter Merkmahle, bis wir an ihre Gränzen kommen. In der coordination oder beym aggregat der Merkmahle eines Begriffes ist keine bestimmte Gränze, ausgenommen wenn der Begriff analytisch werden soll. Z.E. Tugend ist eine Fertigkeit in gesetzmäßigen Handlungen, ferner Fertigkeit in Handlungen, die der Idee des höchsten Gutes angemeßen sind, ferner Beherrschung der Neigungen, und so immer weiter.",
     "ms": [
      {
       "p": 148,
       "i": 121
      }
     ]
    },
    {
     "id": "wiener-s04-118",
     "kind": "text",
     "aa": 849,
     "text": "Der deutliche Begriff, der alle Merkmahle enthält, die zusammen genommen den ganzen Begriff ausmachen, ist ein ausführlicher Begriff, und diese Vollkommenheit, die alle zusammen genommenen Merkmahle enthält, heißt completudo. Wir erlangen folglich bey aller Erkenntniß eine Ausführlichkeit, daß nähmlich alle Merkmahle da sind, die den ganzen Begriff ausmachen. – Wenn einem deutlichen Begriff kein Merkmahl fehlet: so kann doch eine Versäumniß beym Begriff vorgegangen seyn, daß nähmlich ein, oder mehrere Merkmahle zu viel sind, man will aber bey einer Erkenntniß, nach welcher mein Verstand in die gehörige Thätigkeit versetzt seyn soll, zwar alle, aber nicht zu viele Merkmahle haben. Es ist eine unnöthige Verschwendung der Aufmerksamkeit des Verstandes. Diese Vollkommenheit in so fern der Begriff nicht abundirt an Merkmahlen, ist praecision. Der Autor nennt das Bestimmte allein praecis, oder gleichsam beschnitten. Die Mathematic ist der praecision wegen am vortrefflichsten. – Die Vollkommenheit, die aus der vereinigten completudo und praecision entstehet, ist die adaequate Vollkommenheit, quando adaequatur objecto, ist die Erkenntniß adaequat, wenn sie weder weniger, noch mehr enthält, als im object enthalten ist. Die praecision in einem Begriffe könnte man die logische eleganz nennen. Praecision ist eigentlich nur negative Vollkommenheit, indem ich das was bey einem Begriffe an Merkmalen abundirt, wegnehme. Wolff nennet eine Erkenntniß adaequat, so fern sie profunditaet und intensive Deutlichkeit hat, und so fern sie durch untergeordnete Merkmahle deutlich ist, deren Merkmahle wieder klar sind. Wir sagen, notae simul sumtae adaequant conceptus, und zwar richtige. Bey jenen ist schon das adaequat, wo Merkmahle von Merkmahlen klar sind, da doch dies deswegen nicht hinreichend ist, weil ich wieder die Merkmahle von Merkmahlen deutlich machen kann. Die Wolffische Schule hat also hier einen schwankenden Begriff. Die praecision ist eine Vollkommenheit, unsere Erkenntniße zu schätzen, und gewiß zu werden, daß gerade nicht zu viel, nicht zu wenig Merkmahle darin sind. Diese Genauigkeit dienet zur Gewährleistung. Denn wer hier weniger sagt, als er soll, wird dort mehr sagen, als er soll. Der Mangel an praecision beruhet auf tavtologien, daß ich ein Merkmahl zwey Mahl, oder auf verschiedene Art setze. Z.E. Gott ist ein Wesen, das allmächtig, unendlich etc. ist. Hier liegt schon im Unendlichen die Allmacht. Es gibt Fälle, wo die praecision nicht füglich gesucht werden kann und wo sie Undeutlichkeit verursacht, ob sie gleich vor einen fähigen Kopf desto mehr Deutlichkeit verschafft. Z.B. Im Catechismus kann man wohl eine Sache zwey Mahl sagen. Denn von zwey Worten, die einerley bedeuten, ist oft eines leichter, als das andere. – Der Inbegriff der Merkmahle, die in einem gegebenen Begriffe ausführlich und abgemeßen sind, sind dem Begriffe angemeßen, adaequat. Bey Kunstverständigen ist der Mangel der praecision ein großer Fehler. Wer aber Verzicht thut auf die Forderungen der Verständigen, und nur die Unverständigen lehren will, kann etwas von praecision ablaßen. – Der autor handelt jetzt vom hellen Kopf. Viele können gründlich über Sachen nachdenken, aber ihnen nicht Helligkeit, d.i. popularitaet geben. Schulgerechte Vollkommenheit bestehet in der Einstimmung der Erkenntniß mit den vorhin erwähnten Regeln, daß sie nähmlich dem Begriff adaequat sey. Dies ist die logische oder scholastische Vollkommenheit, die nähmlich durch die Regeln des Verstandes bestimmet ist. Die populäre ist die ästhetische Deutlichkeit, und ästhetisch deutlich wird etwas durch Beyspiele, indem es durch die Anschauung dargestellet wird. Je mehr ich meine abstractions Begriffe mit Vorstellungen in concreto verbinden kann, desto populaerer wird meine Erkenntniß. Die popularitaet ist also, wo die Erkenntniß in abstracto mit der Erkenntniß in concreto, und also Verstand und Sinnlichkeit mit einander verbunden werden. Die scholastische Vollkommenheit ist aber immer die Hauptsache. Es gibt autorn, die sehr populär sind, wenn aber die logische Vollkommenheit fehlt, sind sie unzuverläßig, ob sie gleich einnehmen. – Was selbst dem gemeinsten Menschen verständlich ist, hat den größten Grad der Vollkommenheit, die aesthetisch ist. Was dem gemeinsten Manne klar ist, ist dem speculativen gewiß auch klar. Dieser höchste Grad der popularitaet muß in der Religion und Moral Statt finden. Dabey aber muß die logische Vollkommenheit auf keine Weise verabsäumt werden. Denn sie ist die Grundlage, durch welche eine Erkenntniß als Erkenntniß Statt findet, und befugt ist, vom Verstand adoptirt zu werden. Zu manchem Zweck bedarf es nur einen gewißen Grad der logischen Vollkommenheit, und der niedrigste Grad der logischen ist der höchste Grad der popularitaet. Der Moralist muß ja nicht die Deutlichkeit der Begriffe verabsäumen, aber er muß auch Beyspiele zur Hand haben, und als ein guter Anthropolog die menschliche Natur vorstellen, und die Uebereinstimmung seiner Lehren mit derselben zeigen. – Wenn diese beyde Vollkommenheiten verbunden selbst vom gemeinsten Verstande begriffen werden können, dieses ist der größte Grad der Helligkeit, der vielen Menschen unmöglich ist. Mancher kann die Regeln in abstracto wissen, hat aber nicht die Leichtigkeit des Witzes und Stärke der Einbildungskraft, um die tiefesten Beyspiele zum durchschauen Anderer zu wählen. Von der Gewißheit der Erkenntniß. Es gibt drey Grade des Fürwahrhaltens. Fürwahrhalten und Wahrheit sind subjectiv und objectiv unterschieden. Ist das Fürwahrhalten subjectiv unvollständig: so heißt es Ueberredung. Ein subjectiv vollständiges Fürwahrhalten aber ist Ueberzeugung, der Zustand des Gemüthes, wo ich einer Erkenntniß Beyfall gebe, die Fürwahrhaltung. Dieses ist das Phänomen der menschlichen Seele, worüber hier raisonnirt wird, und nicht, ob die Erkenntniß objectiv wahr ist.",
     "pages": [
      {
       "p": 848,
       "i": 724
      },
      {
       "p": 849,
       "i": 3326
      }
     ],
     "aaEnd": 849,
     "ms": [
      {
       "p": 149,
       "i": 42
      },
      {
       "p": 150,
       "i": 781
      },
      {
       "p": 151,
       "i": 1428
      },
      {
       "p": 152,
       "i": 2167
      },
      {
       "p": 153,
       "i": 2886
      },
      {
       "p": 154,
       "i": 3630
      },
      {
       "p": 155,
       "i": 4452
      },
      {
       "p": 156,
       "i": 5119
      },
      {
       "p": 157,
       "i": 5852
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-119",
     "kind": "text",
     "aa": 850,
     "text": "Die 3 Grade des Fürwahrhaltens sind meinen, glauben, wissen."
    },
    {
     "id": "wiener-s04-120",
     "kind": "text",
     "aa": 850,
     "text": "Meinen ist noch keine Ueberzeugung denn sonst müßte es doch wenigstens subjective hinreichend seyn, für mich in der Lage des Gemüthes, worin ich mich befinde. Beym Meinen ist unser Urtheil problematisch, d.h. ich mache nichts aus, sondern ich habe nur einen Grad des Fürwahrhaltens, obgleich derselbe nicht zureichend ist. Meinen hat nichts schädliches, so bald ich mir nur der Unzulänglichkeit meines Fürwahrhaltens bewußt bin."
    },
    {
     "id": "wiener-s04-121",
     "kind": "text",
     "aa": 850,
     "text": "Meinen ist ein Fürwahrhalten aus einem Erkenntnißgrunde, der weder objectiv noch subjectiv hinreichend ist. Wenn ich etwas für wahr halte, z.B. daß eine Durchfahrt durchs Eismeer sey, bin mir aber bewußt, daß mein Erkenntniß von der Sache noch schwankend, und in Absicht des objectes unzureichend ist: so ist es eine Meinung. Wo diese auch mir selber nicht satisfacirt, und ich nichts darauf wetten möchte: so ist sie auch subjectiv unzureichend. Brockes sagt, der Mensch ist ein Thier, das meint der Philosoph ein Mensch, der seine Meinung für wahr hält. Meinungen häufen den größten Theil unserer Erkenntniß an. Das erste bey einer Erkenntniß ist immer ein Wille, ein dunkles voraus sehen, das bey uns eine Fürwahrhaltung erzeuget. In manchen Wissenschaften ist gar nicht erlaubt zu meinen. Z.B. bey Pflichten muß man nicht meinen, sondern wissen. Auf ein pures Meinen von einer Erkenntniß kann man etwas zu thun nicht wagen.",
     "ms": [
      {
       "p": 158,
       "i": 225
      }
     ]
    },
    {
     "id": "wiener-s04-122",
     "kind": "text",
     "aa": 851,
     "text": "In speculationen kann man vielleicht etwas meinen. In der Metaphysic wird von Meinungen geredet, so fern sie auf den Probierstein der Erfahrung gebracht werden können. Z.B. von den reinen Geistern. Hier wird gezeigt, daß, weil hier der Meinung kein Ende seyn würde, nicht erlaubt ist zu meinen. Von Möglichkeiten muß man nicht meinen, die müssen gewiß seyn. Wenn man sagt, wie man nach dem Tode lebt. Kann ich hier meinen? Nein, ich muß wissen, oder glauben. Hier ist durch die Erfahrung, und leider a priori nichts auszumachen. Was a priori kann bewiesen werden, das muß man nicht meinen, sondern wissen. Was überhaupt mit der Vernunft ausgemacht werden kann, muß ich entweder wissen, oder glauben. Meinen gilt hier nichts. – Wenn ich meinen sage, habe ich einen Anspruch auf das Wissen zu machen. Bey dem Meinen thue ich immer einen Schritt zum Wissen. Denn es ist ein unzureichender Grund, wozu noch Complemente kommen müßen, um es vollkommen zu machen. Ich denke mir hier ein complementum ad totum ein Ergänzungsstück zum Ganzen. Wenn eine Erkenntniß von der Art ist, daß das Wissen für sie unmöglich ist, so ist es auch das meinen. Z.E. Aus dem Bedürfniße meiner Vernunft sehe ich ein, daß die Menschen von einem vernünftigen Wesen erschaffen seyn müssen, denn die Menschen sind von ihren Aeltern u.s.w. geboren. Es muß doch aber einer der Erste gewesen seyn, der von keinem Menschen geboren ist. Dies ist nur ein Glaube. Denn es sind hier subjective Gründe. Warum nehme ich das so an? Weil es meine Vernunft bedarf. Es ist kein Wissen hier möglich, also auch kein Meinen. So ist es unmöglich, daß der Mensch die Fortdauer seiner Seele nach dem Tode a posteriori wissen kann. Es ist hier wieder der Glaube, nähmlich da Alles in der Natur zweckmässig ist, der Mensch aber im Bedürfniß die speculative Vernunft hat, wodurch er von andern Thieren unterschieden, daß er nach der ersten Ursache, der Bewegung, nach der Sonne etc. fragt Hier kann er nicht mit der Vernunft die ersten Keime bis zu ihrer letzten Entwickelung ergründen. Denn das Leben ist zu kurz, und im Alter hat die Vernunft auch nicht ihre rechte Stärke. Es muß also noch einen Ort geben, wo die menschliche Vernunft zu ihrer rechten Entwickelung gelangen kann. So geht der Glaube. –",
     "pages": [
      {
       "p": 851,
       "i": 1094
      }
     ],
     "aaEnd": 851,
     "ms": [
      {
       "p": 159,
       "i": 43
      },
      {
       "p": 160,
       "i": 799
      },
      {
       "p": 161,
       "i": 1555
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-123",
     "kind": "text",
     "aa": 852,
     "text": "Beym Glauben urtheilen wir aßertorisch d.h. wir erklären uns für die Wahrheit, wiewohl sie nur für uns allein subjectiv hinreichend ist, und wir nicht jeden Andern davon überzeugen können. Ich kann einen subjectiven Grund haben, etwas für wahr zu halten, doch so, daß dieser beständig ist, aber für mich nicht auf jede Zeit hinreichend, sondern nur auf die Lage, worin ich mich befinde, wird mein Fürwahrhalten restringirt, denn ich kann zu beßern Einsichten kommen. Dieses ist also nur relativ. Es gibt doch aber auch einen Glauben, den man nicht theoretischen Glauben nennen kann, sondern dieses ist ein practischer Glaube, wobey ich mein Fürwahrhalten gar nicht verändern kann. Daher ist er völlig so groß, als Ueberzeugung, und die größte apodictische Gewißheit. Dieser practische Glaube ist der moralische. Dieser ist, wenn ich bey meiner moralischen Gesinnung etwas annehme, was nothwendiger weise damit verknüpft wird, das ganz unveränderlich angesehen ist. Z.B. daß ein Gott sei, kann ich zwar aus der Zweckmässigkeit und Ordnung in der Welt einsehen. Doch scheint auch Manches zweckwidrig. Hierzu sind dergleichen speculative Gründe nicht hinreichend, sondern allein die Moralitaet. Soll ich aber Jemand von meinem Glauben überzeugend machen: so wird voraus gesetzt, daß er eben solche moralische Gesinnungen habe. Der theoretische Glaube ist zwar nicht wandelbar, wenn er nicht unterstützt wird vom moralischen Glauben. Denn ich kann zu beßerm Einsehen kommen, und etwas widriges in der Natur antreffen, und denn hört mein Fürwahrhalten auf. – Vernunftsätze auf Glauben anzunehmen, geht nur auf eine einzige Art an nähmlich in der Mathematic, weil sich wegen der Evidenz nicht so leicht irren läßt, und man gleich den Irthum einsieht. In philosophischen Wissenschaften aber ist es ungereimt, behauptete Sätze ohne Beweis anzunehmen. In der Geschichte kann ich auch ein Wissen haben, wenn es so beschaffen ist, daß es sich Jedermann mittheilen läßt. Z.B. daß London in England liegt, weil wir alle Posttage, und von so vielen übereinstimmenden Leuten eben daßelbe hören.",
     "pages": [
      {
       "p": 852,
       "i": 1387
      }
     ],
     "aaEnd": 852,
     "ms": [
      {
       "p": 162,
       "i": 39
      },
      {
       "p": 163,
       "i": 736
      },
      {
       "p": 164,
       "i": 1490
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-124",
     "kind": "text",
     "aa": 853,
     "text": "Glauben ist ein subjectiv zureichendes, aber objective unzureichendes Fürwahrhalten. Subjectiv ist allemahl der Sinn. Wissen ist ein mit Bewußtseyn objectives Fürwahrhalten. Wer etwas unternimmt, muß nach seiner Meinung etwas wagen. Dieser Glaube kann ein ganz vernünftiger Glaube seyn, und ich kann subjective einen so hinreichenden Grund, etwas für wahr zu halten, haben, daß ich darnach meine Erkenntnißentschließung nehmen kann. Z.B. das Säen, Ausschiffen etc. gründet sich darauf. Man glaubt, das Korn würde aufgehen, der Ostwind werde dann, und dann der Westwind wehen. Indeß kann man von allen diesen Sachen nicht gewiß seyn, und man hat nur subjective Gründe des Fürwahrhaltens. Wenn ich nun aber auf mein eigenes Conto manches fürwahrhalten kann, wenn es gleich objective nicht so gewiß wäre: so kann ich doch nie einen subjectiven Grund des Fürwahrhaltens in der Moral haben, sondern es muß stets darin objective Wahrheit herrschen. Der Richter kann keinen zum Tode verdammen, ehe er ihn nach Jemandes Ausspruch verdient hat, und kein Gegentheil statt findet. Daß man einen etwa blutig gefunden, ist zwar subjectiv, aber nicht objectiv zum Fürwahrhalten hinreichend. Einer kann etwas nach einem sehr vernünftigen Grunde für wahr halten, aber von eben dem Ding, das er für wahr hält, kann er auch nicht sagen, er wisse es. – Beym Wißen kommt es nicht auf den Grund des Fürwahrhaltens an. Denn wer etwas glaubt, hälts vielleicht mit mehrerer Anhänglichkeit für wahr, als der es weiß, sondern es kommt auf die rechte Art des Fürwahrhaltens an. Manche hangen practischen Wahrheiten mit vielem Eifer an, wenn gleich nicht logische Wahrheit darin ist. – Die Wette ist ein Versuch, durch den man probirt, ob der Andere das, was er glaubt, auch mit festem Glauben für wahr halte und wisse. Wer nicht wetten will, hat Lust etwas dreist zu behaupten, ohne daß es ihm etwas kosten soll. Oft will man nur um einen Dukaten wetten [ Textlücke ]. Zwey schrecken schon Manchen von der Wette ab. Wer Leib und Leben verwettet, ist völlig subjectiv überzeugt. Und dergleichen Fälle gibts. Z.B. Wer gewiße Vortheile des Lebens ziehen läßt, und heilig lebt, weil er weiß, er wird belohnet werden, der hat einen starken Glauben. Wer so stark glaubt, daß er sein Leben dafür läßt, ist es so gut, als die größte Gewißheit. Aber man kann doch nicht sagen, er weiß das, sondern er glaubts nur. Z.E. Geheimniß der Religion. In der Mathematik findet kein Glauben Statt. Hier muß wissen seyn. Denn es wäre lächerlich, wenn Jemand sagte: ich glaube ein Triangel ist eine Figur, die aus 3 Seiten und 3 eingeschloßenen Winkeln besteht. — [ Textlücke: AA: Der Glaube an ] die Wahrheit ist nur practisch fest, und sein Grund ist nur subjectiv. Zum Wissen gelangt er durch seine Verstandes-Ueberzeugung beym gleichgültigsten Verstande, dadurch er geschickt wird, das, was er weiß, auch Andern deutlich und gewiß zu machen. Demnach ist das Wissen bey der allerfestesten Ueberzeugung zwar nicht nöthig. Aber dann allein weiß man, wenn man jedem auch dem allergleichgültigsten Verstande eben die Gewißheit geben kann. Im kurzen können wir den Unterschied von einem Glauben und Wissen so faßen: Meinen ist ein subjectiv und objective unzureichendes Fürwahrhalten. Glauben ein subjectiv zureichendes, aber objectiv unzureichendes Fürwahrhalten. Also ist Glauben das Gegentheil von Meinen, Wissen ein so wohl objectiv als subjectiv hinreichendes Fürwahrhalten.",
     "pages": [
      {
       "p": 853,
       "i": 1823
      }
     ],
     "aaEnd": 853,
     "ms": [
      {
       "p": 165,
       "i": 118
      },
      {
       "p": 166,
       "i": 851
      },
      {
       "p": 167,
       "i": 1551
      },
      {
       "p": 168,
       "i": 2250
      },
      {
       "p": 169,
       "i": 2993
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-125",
     "kind": "text",
     "aa": 855,
     "text": "Wenn ein Fürwahrhalten bloß aufs subjective geht, ohne aufs object zu sehen, wobey auch ein Anderer überzeugt werden könnte: so sag ich, ich bin überredet. Von meinen subjectiven Gründen des Fürwahrhaltens kann ich keine Rechenschaft geben, sie gelten nur für mich, und für keinen Andern. Wenn ich sage, ich kann mich nicht von der Sache überreden: so gilt das nur für mich, ich sehe wohl ein, daß ein Anderer, der die Sachen nicht so gut kennt und unterscheiden kann, sich wohl überreden möchte. – Jede Sprache hat Merkmahle der Aufrichtigkeit, von denen ein ehrlicher Mann gleich glaubt, daß die Sache im Herzen so gemeint sey. Das kann ich aber einem Andern nicht ausdrücken, wie das Wahrhafte im Ton und in den Worten mich afficire, und was mich zum Fürwahrhalten bewege, ich sage, ich bin davon überredet. – Wenn ich sage, ich bin überzeugt: so ist das auch noch ein subjectiver Grund. Denn er geht nur aufs subject. Aber es ist auch eine subjective Nothwendigkeit da, also muß doch ein Grund im Object liegen. Sonst könnte sich der Zustand auch wohl bey mir ändern. Es liegt etwas in meinem Fürwahrhalten, das mich glauben läßt, ich werde nie davon abgehen, ich glaube einen Grund im Object zu finden, wenn ich ihn gleich nicht deutlich machen kann. – Wer wird am leichtesten überredet? Kinder. Denn ihre Urtheile sind bloß subjectiv. Sie glauben, was sie wünschen. Ihre Erkenntniß sucht sich zu erweitern, und daher macht die Unerfahrenheit, daß sie annehmen, was ihnen gefällt, und nach dem was der Verstand bedarf, nicht einmahl forschen. Es können aber auch Leute überredet werden, die wovon praeoccupirt sind, d.i. eine Meinung hat beym Menschen Fuß gefaßt, und die andere findet den Platz nun nicht mehr leer. Praeoccupirt sind Menschen sehr gewöhnlich. Denn die Urtheile unserer Jugend kommen zuerst, und daher finden spätere nicht mehr Platz. Denn der Verstand kann das nicht wieder ganz wegräumen, indem es schwer ist, von allen Eindrücken etwas zu erreichen, so wie im Jure der prior occupans immer der Glücklichste ist. Zur praeoccupation gehört praedilection, wenn man durch Liebe Jemandem zu sehr geneigt ist, wenn das, was unsere Patronen, Freunde etc. behauptet haben, mit in unsere Urtheile fließt, so daß wir diese Urtheile für objectiv halten. Wenn der Mensch einem solchen Urtheil Beyfall gibt: so weiß er nicht, was ihn eigentlich bestimmt, ob Verstand, Idee oder Sinnlichkeit. Sinnlichkeit kann nur mit dem Verstande zusammen eine gemischte Wirkung ausüben. Könnten wir nur immer unterscheiden, was Sinnlichkeit und Verstand thun: so würde uns das Einfließen der Sinnlichkeit nicht schaden. Aber beruht das Urtheil auf praeoccupation: so sind diese Einflüße schwer zu bemerken. Beym Fürwahrhalten also ist es die schwerste Frage, woher es entstehe, wenn die Sinnlichkeit gleich viel wirkt: so ist die Sache darnach doch nicht zu verwerfen. Denn der Verstand hat auch seinen Antheil daran, und er kennt dem Objecte nach Gründe genug. Wenn aber unser Beyfall auch größten Theils objective Gründe hat: so müßen wir doch mißtrauisch seyn, vorzüglich wenn Menschen über die Sache getrennt sind, und wir müssen denn untersuchen, welche von beyden Meinungen wohl subjective Gründe hat. Wie kann man nun Ueberzeugung und Ueberredung unterscheiden? Wir unterscheiden diese Beyde schon so gar durchs Gefühl. Man sagt, ich bin persuadirt, daß diese Geschichte nicht so zugegangen seyn kann, so weit ich nach dem Lauf der Dinge urtheilen kann, muß ich mich wider diese Geschichte erklären. Ueberzeugt bin ich, wenn die Sache so logisch vollkommen ist, daß ich sie einem Andern mittheilen kann, wenn ich mir vorstelle, daß ich in allen Gefahren die Sache vor wahr halten würde, würde ich denn wanken, so würde ich nicht wirklich überzeugt seyn. Aber wenn ich nichts zu wagen glaube, wenn ich gleich mein ganzes Intereße zum Pfande setze: so bin ich überzeugt.",
     "pages": [
      {
       "p": 854,
       "i": 987
      },
      {
       "p": 855,
       "i": 3578
      }
     ],
     "aaEnd": 855,
     "ms": [
      {
       "p": 170,
       "i": 338
      },
      {
       "p": 171,
       "i": 1016
      },
      {
       "p": 172,
       "i": 1695
      },
      {
       "p": 173,
       "i": 2404
      },
      {
       "p": 174,
       "i": 3073
      },
      {
       "p": 175,
       "i": 3753
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-126",
     "kind": "text",
     "aa": 855,
     "text": "Wenn wir also meinen: so ist das eine Erkenntniß, die nicht ein Mahl subjective Gründe hat, es ist der Anfang des Fürwahrhaltens. Glaube bedeutet schon ein subjectiv hinreichendes Fürwahrhalten, das objectiv nicht hinreichend zu seyn scheinet, aber doch allerley Gründe hat, die im Verstande bestimmt sind. Glauben setzt allemal Ueberzeugung voraus. Denn es ist doch darin etwas festes. Wenn einer sagt, ich glaube, das könnte geschehen: so meint er nur, und es ist das nur eine Verwechselung der Wörter. Denn er würde sich auch gern eines andern belehren laßen. Die Ursache des Glaubens ist z.E. bey der Hoffnung einer andern Welt, wenn uns ein Anderer das Gegentheil, und die Unmöglichkeit davon nicht beweisen kann, und man dabey Grund im Verstand hat. Z.B. die ungleiche Austheilung des Guten und Bösen. Indeßen kann der subjective Grund, der sich auf moralitaet gründet, nicht zu dem objectiven Grund geschlagen werden. Der Glaube ist denn feste, der einen vernünftigen Menschen hinreißt, die Vortheile seines Lebens dem Glauben hintan zu setzen. Wen Pflicht und Hoffnung verbunden antreibt, allen Vortheilen zu entsagen, der glaubt und ist überzeugt. Dieses Fürwahrhalten weicht der allergrößten Gewißheit nicht in Ansehung der Wirkung aufs subject, und practische Ueberzeugung ist die höchst mögliche. Diese practische Ueberzeugung kann auf gewiße Sätze fallen, und dann sind das moralisch gewiße Sätze. Diese sind der Grund aller moralitaet, und stimmen mit unserer größten Gewissenhaftigkeit überein, wenn wir ihnen nachleben, und also unsere Handlungen ihnen unterordnen. Von dem Glauben, daß die scheinbare disharmonie des Guten und Bösen aufhören werde, kann ein jeder einsehen, daß ihm ihn Niemand rauben wird, und deßhalb frag ich: hab ich Grund genug ihn anzunehmen? Ja, einen practischen, aber nicht einen logischen. Er hängt aber mit der Vernunft so fest zusammen. Denn vorher könnte der größte Mathematicus nichts darthun, als wenn ich mir auch ums Leben den Glauben nicht rauben lassen wollte.",
     "ms": [
      {
       "p": 176,
       "i": 579
      },
      {
       "p": 177,
       "i": 1309
      }
     ]
    },
    {
     "id": "wiener-s04-127",
     "kind": "text",
     "aa": 856,
     "text": "Wenn diese Ueberzeugung gleich nicht zu speculativen, sondern nur zu practischen Ueberzeugungen dient. Z.B. der Begriff von Gott ist nicht zu speculationen gegeben, sondern zur practischen Ausübung. Wenn man also gewiße Sätze, die die Menschen für eine Wissenschaft ausgeben, so weit herabstimmt, daß man ihnen wohl practische, aber nicht logische Ueberzeugungen gibt: so hat man ihnen nichts benommen, sondern man hat nur den Menschen den Eigendünkel benommen, daß sie durch speculative Gründe einsehen zu können glauben. Die practische Gründe erscheinen dadurch in einem helleren Lichte, indem die Menschen auf ihr Intereße zurück geführt werden. Sinnliche Gewißheit wird eingetheilt in Gewißheit der Sinne, und empirische Gewißheit. Sinne allein machen noch keine Erfahrung, sondern die Erfahrung ist das Urtheil des Verstandes über die Verbindung unserer sinnlichen Vorstellungen. Die sinnliche Gewißheit ist demnach nichts anders, als die Gewißheit des erkannten Verhältnißes der Sinne. – Sinne und Verstand machen alle unsere Kenntniße aus. Die Sinne geben Erscheinung. Der Verstand verknüpft sie, und das macht Erfahrung, und Erfahrung ist also die erkannte Verknüpfung, oder Einheit der Erscheinungen. Die Menschen müssen also die Anschauungen objective verbinden, um von ihnen etwas sagen zu können. Es gibt Logiker, die nur von der Gewißheit der Sinne reden, ob unsere sinnliche Vorstellungen an sich selber wahr sind, d.i. ob sie objecte haben, oder ob sie größten Theils nur ein gewißer Sinn sind, der dem object correspondirt. Z.B. Wir träumen. Das halten wir für eben so wahr, als wenn wir wachen, ob nun solche Vorstellungen dem objecte nach real, oder ideal sind, ob sie so sind, wie sie uns vorkommen, oder ob sie uns nur die Art geben, wie die Sinne afficirt werden, oder ob es nur Blendwerke unsrer Imagination sind, diese Frage gehöret nicht in die Logic, sondern in die Metaphysic, wo von dem Ursprunge des Scheines und der Wahrhaftigkeit aus dem Sinn geredt wird. – Am Ende kommt es doch darauf hinaus, daß weder Wahrheit, noch Falschheit in den Sinnen sey, und daß Beyde nur im Gebrauch liegen, den unser Verstand von den sinnlichen Vorstellungen macht. Denn die Sinne urtheilen gar nicht, und deßhalb enthalten sie nicht Irthümer, nicht weil sie niemahls falsch urtheilen, sondern weil sie gar nicht urtheilen. – Es kann hier also nur die Frage seyn von der Gewißheit der empirischen Erkenntniß. Diese ist eine Erkenntniß der objecte durch den Verstand, so fern sie dem Verstande dargestellt werden. Alle empirische Gewißheit geht nur das Verhältniß sinnlicher Vorstellungen an, wie gewiße Vorstellungen unter einander verglichen werden können. Diese sinnliche Gewißheit unterscheiden wir von der rationalen Erkenntniß. Diese kann deutlich zweyfach ausgedrückt werden.",
     "pages": [
      {
       "p": 856,
       "i": 198
      }
     ],
     "aaEnd": 856,
     "ms": [
      {
       "p": 178,
       "i": 37
      },
      {
       "p": 179,
       "i": 689
      },
      {
       "p": 180,
       "i": 1326
      },
      {
       "p": 181,
       "i": 1945
      },
      {
       "p": 182,
       "i": 2603
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-128",
     "kind": "text",
     "aa": 857,
     "text": "1.) Eine Vernunft-Erkenntniß, wenn ihr Object ein bloßes object der Vernunft ist."
    },
    {
     "id": "wiener-s04-129",
     "kind": "text",
     "aa": 857,
     "text": "2.) Eine vernünftige Erkenntniß betrifft die Form, wie ich einen Gegenstand durch die Vernunft erkenne, ihr object mag empirisch oder rational seyn."
    },
    {
     "id": "wiener-s04-130",
     "kind": "text",
     "aa": 857,
     "text": "Einige Erkenntniße sind bloß Gegenstände der Vernunft, z.B. Moral, dieses sind materielle rationale Erkenntniße. Von der Beschaffenheit der rationalen Erkenntniß dem Objecte nach handelt die Metaphysic. Die Logic handelt von dem zweyten Stück, nähmlich von der formalen. Unsere Erkenntniß kann Gegenstände der Erfahrung begreifen, und unsere Gewißheit kann doch entweder empirisch, oder rational seyn. Z.B. der Satz von der Potenz vermittelst des Hebels hat empirische Gewißheit, aber auch rationale. Denn wenn die Erfahrung uns auch von ihr nichts lehrte: so würde ich es schon durch die Vernunft erkennen können. Daß gewiße Dinge ungleich sind, kann die Erfahrung sagen. Daß sie es aber nothwendig seyn müssen, lehrt die Vernunft. Sie erhöht also doch die Gewißheit, indem sie die Erkenntniß als nothwendig darstellt. – Manchmahl können wir keine rationale Gewißheit haben. Denn müssen wir uns mit der empirischen begnügen. Dieses ist vorzüglich in der Naturwissenschaft. Wovon wir aber rationale Gewißheit bekommen können, ist die Erkenntniß vorzüglicher. – Bey Sachen, worauf wir, wenn wir sie aus der Erfahrung nicht gelernt hätten, gar nicht gekommen seyn würden, ist die Erfahrungs-Gewißheit die beßte. Erkennen wir aber solche Gründe, die nothwendig sind, und wodurch wir es auch voraus hätten sehen können: so hat die rationale Gewißheit den Vorzug. Alle unsere Erkenntniß ist entweder aus Begriffen, oder aus der Construction der Begriffe. Die erste heißt discursiv, die andere intuitiv, und also auch alle vernünftige Gewißheit discursiv oder intuitiv. Die rationale Gewißheit, so fern sie intuitiv ist, ist die mathematische Gewißheit, sofern sie discursiv ist, die philosophische Gewißheit. Die mathematische unterscheidet sich also von der philosophischen, sie sind beyde gewiß, werden beyde durch die Vernunft erkannt, aber die eine Gewißheit ist discursiv, die andere intuitiv.",
     "ms": [
      {
       "p": 183,
       "i": 213
      },
      {
       "p": 184,
       "i": 896
      },
      {
       "p": 185,
       "i": 1549
      }
     ]
    },
    {
     "id": "wiener-s04-131",
     "kind": "text",
     "aa": 858,
     "text": "Ein moralischer und ein mathematischer Satz sind beyde apodictisch gewiß, d.i. sie sind mit dem Bewußtseyn der Nothwendigkeit verbunden im Gegensatz der empirischen, die nur aßertorisch ist. Beyde können demnach complet überzeugen, wenn sie gleich durch discursiv und intuitiv unterschieden sind. Daher nennt man die mathematische Gewißheit evident, augenscheinlich, d.i. daß die Gegenstände nicht in abstracto durch Begriffe, sondern in einer einzelnen Anschauung dargestellt werden. Wenn aber die Frage ist von dem Grade der Gewißheit: so kann man nicht philosophische Sätze in mathematische verändern. Manche kommen den Intuitionen sehr nahe, sind aber doch noch unterschieden. Wolff hat den Fehler begangen, daß er in der mathematic discursiv urtheilen will. Z.E. definition von der Aehnlichkeit der Triangel. Der Satz: thue recht, darf nicht construirt werden. Denn er ist schon klar. Im Gegentheil würde man durch keinen Begriff den Beweis 2+2=4 heraus kriegen. Daher kann philosophische und mathematische Gewißheit gar nicht verwechselt werden. Unser autor redet nun von den modis judicii veritatis et falsitatis, oder von den modis des Fürwahrhaltens.",
     "pages": [
      {
       "p": 858,
       "i": 330
      }
     ],
     "aaEnd": 858,
     "ms": [
      {
       "p": 186,
       "i": 367
      },
      {
       "p": 187,
       "i": 1022
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-132",
     "kind": "text",
     "aa": 858,
     "text": "1.) Man sagt, eine Erkenntniß ist durchgängig angenommen, d.i. wenn sie bey allen Beyfall findet, ob sie gleich an sich selbst noch nicht gewiß ist. Dieses ist also ein bloß äußeres Merkmahl, daraus noch nicht auf die Gewißheit zu schließen ist."
    },
    {
     "id": "wiener-s04-133",
     "kind": "text",
     "aa": 858,
     "text": "2.) Eine Erkenntniß ist ausgemacht, d.i. sie wird als eine allgemein erkannte Wahrheit angenommen."
    },
    {
     "id": "wiener-s04-134",
     "kind": "text",
     "aa": 858,
     "text": "3.) Eine Erkenntniß ist unläugbar, unstreitig, es ist unmöglich an der Wahrheit der Erkenntniß zu zweifeln."
    },
    {
     "id": "wiener-s04-135",
     "kind": "text",
     "aa": 858,
     "text": "Ausgemacht ist eine Erkenntniß im doppelten Sinn. Einmahl, wenn sie objectiv gewiß ist, d.i. unstreitig, oder auch subjective, wenn man angenommen hat, daß eine Erkenntniß vor gewiß erkannt werde. In der Naturwissenschaft gibts viel ausgemachte, aber auch eine Menge angenommener Sätze. Ungezweifelte Sätze nennet man nicht ausgemacht, weil nähmlich nicht mehr darüber gestritten werden kann. Z.B. mathematische Sätze. Wider manche physicalische Aufgaben laßen sich noch Einwürfe finden, wenn die Natur-Erkenntniß nur zufällig ist, darf man auch in seinem Urtheil nicht so apodictische Nothwendigkeit behaupten. Eine Erkenntniß nennet man gründlich, wenn sie adaequat ist der Natur derselben Erkenntniß überhaupt.",
     "ms": [
      {
       "p": 188,
       "i": 59
      },
      {
       "p": 189,
       "i": 713
      }
     ]
    },
    {
     "id": "wiener-s04-136",
     "kind": "text",
     "aa": 859,
     "text": "Gründliche Erkenntniße sind verschieden nach Verschiedenheit ihrer Natur. Ein moralischer Vortrag ist auf eine andere Art gründlich als ein physischer. Die Gründlichkeit ist nicht eine logische Vollkommenheit, oder Vollständigkeit der Gewißheit, sondern nur diejenige Vollkommenheit, die der Natur dieser Erkenntniß angemeßen ist. Einer kann ein sehr gründlicher Lehrer seiner Gemeinde seyn, wenn er in seiner Zuhörer Fassungskraft die Wahrheiten aptirt, und eben dieser Vortrag könnte für doctores theologiae weniger gründlich seyn, wenn es ein Probestück seyn soll, wo auf diejenige principia gesehen würde, die bey einer Erkenntniß ihrer Natur gemäß zum Grunde geleget werden.",
     "pages": [
      {
       "p": 859,
       "i": 458
      }
     ],
     "aaEnd": 859,
     "ms": [
      {
       "p": 190,
       "i": 635
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s04-137",
     "kind": "text",
     "aa": 859,
     "text": "Seichte Erkenntniße zeigen etwas anders an, als superficielle. Seichtigkeit zeigt einen Mangel der Tiefe der Erkenntniß an, daß man mit seiner Erkenntniß nicht auf die Höhe geht, sondern nahe am Ufer bleibt, und einer Erkenntniß nicht bis auf ihre erste Gründe nachgeht. Gewiße Erkenntniße schwimmen, wie die Stoppeln oben, sind aber dem gemeinen Verstande faßlich, und dem Zweck angemeßen, das sind seichte Erkenntniße. Wenn man eine Erkenntniß, die über die Gränzen des gemeinen Verstandes hinaus gehen soll, haben will, z.B. wenn man sich von pünktlichen Subtilitaeten, die in der Metaphysic die Vernunft haben muß, belehren wollte: so würde das superficiell seyn, wenn es nur dem gemeinen Verstande angemessen wäre. Wollte ich ihm nur bloß die ersten Begriffe der metaphysic: es ist ein Gott, eine unsterbliche Seele, beybringen: so würde ich ihm eine seichte, aber dem Zweck angemeßene Erkenntniß geben. Man nennt auch superficiell eine Erkenntniß, wenn einer die Titel der Bücher weiß, ohne selbst etwas von der Wissenschaft zu verstehen.",
     "ms": [
      {
       "p": 191,
       "i": 517
      }
     ]
    }
   ]
  },
  {
   "id": "s05",
   "title": "Vom Beyfall und Zurückhalten des Beyfalls",
   "titleSrc": "line",
   "headings": [
    "Vom Beyfall und Zurückhalten des Beyfalls."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s05-001",
     "kind": "text",
     "aa": 859,
     "text": "Wir können aus unsern Ausdrücken: ich nehme das an, räume das ein, oder ich halte meinen Beyfall zurück, sehen, daß in unserm Beyfall etwas seyn muß, das willkührlich sey, wo wir uns selbst bestimmen müssen, ob wir die Erkenntniß vor wahr halten wollen, oder nicht. Wir wollen also untersuchen, wie fern unser Urtheil hier vom Willen abhängt. Der Verstand kann sich in keinem andern Grunde unserm Willen unterwerfen als in so fern er in Gebrauch gesetzt wird. Sonst beruht seine Ueberzeugung auf Gründen, nicht auf Entschließungen. Weil nun der Wille eine große Ursache ist, wodurch gewiße Ueberzeugungen entstehen: so hat der Wille auf diesen Verstand indirecte einen Einfluß. Wenn wir uns durch den Verstand gleich überzeugen könnten von dem, was wir gerne wünschten: so würde sich ein jeder durch den Verstand so glückliche chimaeren machen, als er kann, wenn nähmlich diese chimaeren, die der Wille hervor bringt, nicht der Widerlegung des Verstandes nachgeben müßten. – Gewiße Erkenntniße",
     "ms": [
      {
       "p": 192,
       "i": 52
      },
      {
       "p": 193,
       "i": 710
      }
     ]
    },
    {
     "id": "wiener-s05-002",
     "kind": "text",
     "aa": 860,
     "text": "sind so, daß, wenn wir gleich in den Bewegungsgründen nichts Fehlerhaftes finden, wir doch um der Aehnlichkeit dieser Erkenntniß mit andern willen, worin wir uns oft geirrt haben, ob wir gleich nichts Verdächtiges darin finden, mit unserm Urtheil mißtrauisch sind, das ist, suspensio judicii, der Vorsatz, ein vorläufiges Urtheil nicht zu einem Bestimmenden werden zu laßen. Es sind hier wohl Gründe zum Fürwahrhalten, die gewißer sind, als die Gründe des Gegentheiles. Wir können Gründe haben, halten sie aber nicht für bestimmt, und so unterscheiden wir das vorläufige vom bestimmten Urtheil. Wir können diesen zurückgehaltenen Beyfall doppelt mittheilen. Suspensio judicii indagatoria ist, wenn man die Gründe des bestimmten Urtheiles noch aufsuchen will. Das ist eigentlich ein Aufschub des Urtheiles, um in der Zeit noch darüber nachzuforschen, oder renunciatio judicii, indem wir unserm Urtheil entsagen, und alle Hoffnung aufgeben, etwas zu bestimmen. Der Scepticismus renuncirt alle Urtheile in Ansehung verschiedener Dinge. Z.B. ob die Seele körperlich sey. Der Philosoph hält diese Sache noch nicht für entschieden, und suspendirt sein Urtheil.",
     "ms": [
      {
       "p": 194,
       "i": 419
      },
      {
       "p": 195,
       "i": 1154
      }
     ]
    },
    {
     "id": "wiener-s05-003",
     "kind": "text",
     "aa": 860,
     "text": "Seinen Beyfall zurück halten ist ein Vermögen einer geübten Urtheilskraft, und findet sich bey Anfängern und bey der Jugend nicht, sondern nur bey zunehmendem Alter. Denn unser Erkenntniß-Vermögen ist so begierig sich auszubreiten, daß es mit größter Ungeduld, so bald sich ein Vorfall darbiethet, sich zu erweitern sucht. Dieser Hang das scheinbare vor wahr anzunehmen, ist bey jungen Gemüthern so groß, daß es ihnen sehr schwer fällt, ihr Urtheil zurück zu halten. Wenn sie aber sehen, wie man verleitet werden kann ein Urtheil zu fällen, das man zurück nehmen muß, d.i. wenn sie gewitziget sind durch viele Erfahrung: so suspendiren sie mehr. – Es ist eine schwere Handlung, sein Urtheil zurück zu halten, auch für den, der eine starke Urtheilskraft hat, sich lange in dem Zustande zu erhalten. Denn der Mensch hat einen Hang jeden Augenblick einen von zwei Sätzen für wahr anzunehmen. Sie ist beym Menschen fast niemahls so vollkommen, daß er ganz gleichgültig seyn sollte, und hält er es gleich zurück: so hat er doch immer mehr Neigung auf die eine, als auf die andere Seite. – Man hält sein Urtheil oft zurück, damit man in der Folge oft nicht nöthig habe, sein Urtheil zurück zu nehmen, je mehr man Ansprüche macht auf die Ehre einer gegründeten Einsicht, in so fern man an seiner Reputation dabey verlieren möchte. Je größer die autoren sind, desto behutsamer sind sie in den Ausdrücken über Sachen, die noch controvers sind, und tragen ihre Sätze problematisch,",
     "ms": [
      {
       "p": 196,
       "i": 714
      },
      {
       "p": 197,
       "i": 1457
      }
     ]
    },
    {
     "id": "wiener-s05-004",
     "kind": "text",
     "aa": 861,
     "text": "nicht aßertorisch vor Es ist dieses Zurückhalten immer eine Zurückhaltung davor, daß man ein Mißtrauen in seine noch so gegründete Urtheile setzt. – Von der Suspensio judicii ist unterschieden, wenn ich eine Sache gar nicht abhandele, indem die Entscheidung derselben gar nicht zu meiner Absicht gehöret, so laße ich etwas in dubio. Dies ist judicium anceps, und ist kindisch, dahingegen suspensio judicii männlich ist, und bey einem Manne von Erfahrung Statt findet. – Dem [AA: judicium ] an [ Textlücke: AA: -ceps ] ist das judicium [AA: praeceps ] entgegen gesetzt, welches noch ärger ist. Dieses ist etwas anders noch, als das suspendirende. Wenn ich suspendire: habe ich nicht Gründe genug zu einem bestimmten Urtheile. Ich laße es in dubio, wenn es meinem Zweck gar nicht gemäß ist, ob es wahr, oder nicht wahr ist. Vorläufige Erkenntniße machen eine so große Wissenschaft aus, daß es ein sehr brauchbares Kapitel vor die Logik seyn könnte, wenn es nicht vor sie zu tief wäre zu entscheiden, wie z.B. vorläufige zu bestimmten Urtheilen gemacht werden können. Es gehört dazu die genaueste Kenntniß der Gegenstände selbst. Daher kann die Logic von der Natur Nutzen, Gränzen, Requisiten und Bedingung der vorläufigen Erkenntniß nicht hinreichend reden. Das würde vielmehr ein organon der philosophie werden, welches man gegenwärtig wohl noch nicht hat. – Jeder Mensch urtheilt vorläufig in dem, was er zuerst urtheilt, z.B. aus dem Gesicht. Das erste Ansehen, Gebärde, Kleidung, die einer in Gesellschaft hat, muß ihn beurtheilen, ob das gleich nicht hinreichend ist. Das vorläufige Urtheil hat aber gemeiniglich, und zwar, weil es das erste ist, einen so starken Eindruck auf den Menschen, daß hernach die bestimmten Urtheile durch die stärkesten Gründe die vorläufigen nicht auslöschen können. Wir urtheilen vorläufig von einem Buch nach dem Titel. Vorläufige Urtheile können aber nach und nach eine größere Annäherung zu bestimmten Urtheilen haben. Beym meditiren müssen erst vorläufige Urtheile kommen. Ich nehme dieses mit, und glaube, es schickt sich in den Zusammenhang. Hernach bey der ganzen Ueberschauung fallen vielleicht die bestimmten Urtheile ganz anders aus. Unser Verstand merkt vorläufig etwas von dem, was er erst selbst erfinden soll. Wir nehmen die Wahrheit an, und haben eine Witterung von dem Schlüßel unserer Erkenntniß. Unser Verstand wird also durch sie dirigirt, indem sie uns die Mittel zu dem Zwecke der Erkenntniß zu gelangen geben.",
     "ms": [
      {
       "p": 198,
       "i": 752
      },
      {
       "p": 199,
       "i": 1454
      },
      {
       "p": 200,
       "i": 2177
      }
     ]
    },
    {
     "id": "wiener-s05-005",
     "kind": "text",
     "aa": 862,
     "text": "Bestimmt ist das, was uns zureichend zum Beyfall ist. Ein vorläufiges Urtheil muß nicht vor bestimmt gehalten werden. Der Gegner kann bey Widerlegung ein gutes vorläufiges Urtheil gefällt haben. Da muß man ihn durch Bescheidenheit dahin bringen, daß er sein Urtheil suspendirt.",
     "pages": [
      {
       "p": 862,
       "i": 128
      }
     ],
     "aaEnd": 862,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-006",
     "kind": "text",
     "aa": 862,
     "text": "Wenn wir uns nur bewußt sind, daß es ein vorläufiges Urtheil ist: so können wir immer urtheilen. Praevia judicia, d.i. vorläufige Urtheile sind von großer Wichtigkeit, indem man dabey gewiße Maximen zur vorläufigen Untersuchung einer Sache hat. Bey jeder Sache muß man doch immer etwas vorher urtheilen. Z.B. Beym Metallsuchen in Bergwerken muß ich doch schon einen vorläufigen Grund haben, warum ich gerade in diesem Bergwerke grabe. Wir müssen vorläufig urtheilen beym meditiren, wo wohl die Wahrheit seyn möchte. Die Logic, die die Maximen der vorläufigen Urtheile angeben möchte, wäre von großer Wichtigkeit, sie wäre wirklich eine Hevristic neuer Wahrheiten, die aber noch nicht erfunden ist. Man urtheilt vorläufig, wo man, ehe man bestimmt urtheilt, gewiße Gründe hat, seine Untersuchung mehr auf das eine, als auf das andere object zu richten. Im Prospect der Gegenstände, in dem ich eine zukünftige Erkenntniß suche, urtheile ich etwas, damit ich hernach Versuche darüber anstellen kann. Vor aller Erfindung muß doch Untersuchung angestellt werden. Denn durch ein pures Glück findet man nichts ohne Spüren, und ohne Anleitung. – So bald man etwas meditirt, macht man sich schon Plane, vor deren Ausführung ein gewißes halbirtes Urtheil über die Eigenschaften, die noch erfunden werden sollen, vorher läuft. Wenn das Alles durch Beyspiele von Erfindern illustrirt würde, wie sie durch Vorläufige Urtheile auf dies und das gerathen wären: so würde das Anleitung geben zur Entdeckung mehrerer Erkenntnißen zu gelangen. Der Richter im criminal-Recht könnte sich deßen als einer Sache von großer Wichtigkeit bedienen. Man nennt die vorläufigen Urtheile auch anticipationes, wo man sein bestimmtes Urtheil suspendirt. Man hat sich zu bestimmenden Urtheilen noch nicht entschloßen. Man anticipirt also diese gewißer maßen. Epicur nannte anticipation die Begriffe unseres Verstandes, die er vor der Erfahrung voraus setzt. Von diesen vorläufigen Urtheilen sind gar sehr unterschieden die Vorurtheile, und sind gerade das Gegentheil davon. Denn ohne oder statt vorläufig zu urtheilen bestimmt man. – Man muß unterscheiden untersuchen und überlegen. Manche Sätze können ohne Untersuchung angenommen werden z.B. Ob das ganze Größer sey, als seine Theile. Ob wir hier gleich nicht unterscheiden dürfen: so ist es doch nothwendig zu überlegen,",
     "ms": [
      {
       "p": 201,
       "i": 66
      },
      {
       "p": 202,
       "i": 664
      },
      {
       "p": 203,
       "i": 1404
      },
      {
       "p": 204,
       "i": 2074
      }
     ]
    },
    {
     "id": "wiener-s05-007",
     "kind": "text",
     "aa": 864,
     "text": "d.i. den Zusammenhang einer Erkenntniß mit unserer Erkenntnißkraft, aus der sie entspringen soll, aufzusuchen. Unser Erkenntnißvermögen ist mannigfaltig, und alle Kräfte deßelben sind im Spiel. Sie laufen alle durch einander, und jedes wirkt bey dem objecte, das sich für dasselbe schickt, und wir suchen immer das gehörige Erkenntnißvermögen dazu auf, ohne daß uns das Mühe macht. Z.E. der Satz zwischen zwey Puncten kann nur eine gerade Linie Statt finden, wird dem Verstande zur Ueberlegung vorgelegt, und die Anschauung probirt, ob man hier nur die eine ziehen kann. Dieses muß man stets thun, selbst bey Erkenntnißen, die nicht nöthig zu haben scheinen untersucht zu werden. Denn wenn ein Erkenntniß entspringt aus dem Einfluß einer Erkenntnißkraft, welche in Ansehung dieses Objectes gar keine Gültigkeit hat: so muß die Erkenntniß entweder weggewiesen, oder suspendirt werden. Ich muß sehen, ob die Sinne, oder der Verstand, oder imagination hier im Spiele sind. Denn darauf beruhen ja alle Irthümer, wenn Sinnlichkeit in den Verstand einfließt. Wenn man dieses durch den Verstand zu haben glaubt, und die Sinnlichkeit einen geheimen Einfluß dabey gehabt hat: so entstehen die Irthümer. – Man pflegt zu sagen, aus Nichts wird Nichts. Wir müssen doch einen Stoff haben, aus dem wir Erkenntniße machen. Diese Materie können wir nicht selbst hervor bringen. Also muß doch Alles aus der Erfahrung herkommen, und ist also doch nie etwas evident, als wenn es die Vernunft allein gemacht hatte. Wenn du dich durch Verstand allein überzeugen willst, woher willst du das nehmen? – Diese angeführte Ueberzeugung ist selbst da nöthig, wo die Untersuchung unmöglich zu seyn scheint. Z.B. Bey mathematischen Sätzen. Wir nehmen manche Urtheile an ohne Ueberzeugung und ohne Aufmerksamkeit auf die Erkenntnißkraft, welche auf das Urtheil einen Einfluß hat, und daraus entstehen Vorurtheile. Vorurtheil ist der Mechanism der Vernunft in Grundsätzen. Ein Vorurtheil ist ein principium zu urtheilen aus subjectiven Ursachen, die für objective Gründe angesehen werden. Subjective Ursachen liegen alle in der Sinnlichkeit. Objective Gründe liegen im Verstande. Demnach weil die Sinnlichkeit Einfluß hat, kann das Urtheil nicht wahr seyn. – Ein Vorurtheil ist demnach ein principium des Urtheiles, Vernunft in Grundsätzen. Ich kann nicht sagen, das ist ein Vorurtheil, was z.B. dieser Mann von seinem Sohn sagt, daß er selbst wohl ein gutes Gemüth hätte, aber von Andern verführt würde, wenn der Sohn selbst gleich ein schlechter Mensch ist, sondern es entspringt aus einem Vorurtheil. Irrige Urtheile aus Vorurtheilen sind nicht selbst Vorurtheile, daher wirkliche Vorurtheile eine Quelle vieler falscher Urtheile im Grundsatz und principium derselben sind. Im angeführten Beyspiel ist der Satz aus einem principio genommen, und hat doch den effect von einem principium. Man muß bey einem Vorurtheil immer überlegen, wo kommt das her? Z.B. der Apfel fällt nicht weit vom Stamm, könnte man ein Vorurtheil nennen, weil es ein allgemeiner Satz, und also ein principium ist. Doch könnte man auch sagen, daß es aus ältern Vorurtheilen, die Kinder von ihren Aeltern haben, entstanden sey. – Alle Vorurtheile sind principia zum urtheilen. Aus ihnen muß also ein Urtheil entstehen. Es hat einer einen Satz so und so vom Leibnitz behauptet gefunden. Nun hält er ihn vor gründlich, ob er gleich den Beweis gar nicht einsieht. Dieses ist kein Vorurtheil, sondern die Neigung aus einem Vorurtheil. Die Vorurtheile bekannter Verdienste geben große Vermuthungen, daß Alles, was z.B. von Wolff, Leibnitz etc. gesagt wird, verdienstvoll seyn werde. – Das Vorurtheil ist ein principium zu urtheilen, nicht aus objectiven Gründen, wenn aber alle Gründe des Urtheiles nicht aus dem Object, sondern Subject gezogen werden: so sind sie aus solchen Quellen gezogen. Ich darf daher mir nur sagen: es kommt mir so vor und nicht, der Gegenstand ist so. Alle Gründe müssen also eigentlich objectiv seyn. Die objectiven Gründe werden den subjectiven Ursachen entgegen gesetzt. Bey Gründen denke ich nur an etwas Allgemeines, und bey subjectiven Ursachen wirkt ein gewißer Zustand beym Menschen. – Gewohnheit macht, daß Sätze, denen wir schon lang angehangen haben, uns leicht gar nothwendig werden, so daß wir zuletzt Grund zum urtheilen daraus machen, und so kann man principia der Urtheile aus puren Gewohnheiten machen. Z.B. es ist Gewohnheit vor Jemand eine abergläubische Hochachtung zu haben, weil nähmlich dieser immer vor Zeiten so gewesen ist, so entspringt daraus ein principium zu urtheilen, d.i. ein Hang, der durch öftere Uebung uns zu eigen geworden ist. Hieraus erhellet, wie aus subjectiven Ursachen ein principium entstehe. – Man urtheilet kritisch von anderer Maximen, und hält seine eigene für gut. Hier ist das Vorurtheil suum cuique pulchrum, deßen subjective Ursache Eigenliebe ist In den Manieren Anderer selbst ist es oft nichts unanständiges, wenn wir es dafür halten.",
     "pages": [
      {
       "p": 864,
       "i": 2559
      }
     ],
     "aaEnd": 864,
     "ms": [
      {
       "p": 205,
       "i": 405
      },
      {
       "p": 206,
       "i": 1075
      },
      {
       "p": 207,
       "i": 1814
      },
      {
       "p": 208,
       "i": 2516
      },
      {
       "p": 209,
       "i": 3204
      },
      {
       "p": 210,
       "i": 3822
      },
      {
       "p": 211,
       "i": 4362
      },
      {
       "p": 212,
       "i": 4953
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-008",
     "kind": "text",
     "aa": 864,
     "text": "Hier wird der Verstand nur irre geleitet, und hält das für objective Gründe, und das verursacht denn, daß wir urtheilen durch Einmischung"
    },
    {
     "id": "wiener-s05-009",
     "kind": "text",
     "aa": 865,
     "text": "der Sinnlichkeit. Die Hauptquellen der Vorurtheile sind demnach subjective Ursachen, die fälschlich für objective Gründe gehalten werden. Sie dienen gleichsam statt principien, weil Vorurtheile principien seyn müssen. Die Hauptquellen der Vorurtheile sind vorzüglich Nachahmung, Gewohnheit und Neigung."
    },
    {
     "id": "wiener-s05-010",
     "kind": "text",
     "aa": 865,
     "text": "Idee derselben ist ein Grund aus subjectiven Ursachen zu urtheilen und jedes gilt auch als ein principium zu urtheilen, d.i. es ist von allgemeinem Einfluß. Also",
     "ms": [
      {
       "p": 213,
       "i": 157
      }
     ]
    },
    {
     "id": "wiener-s05-011",
     "kind": "text",
     "aa": 865,
     "text": "1. Nachahmung. Der menschliche Verstand sucht sich zu erweitern, und bey der Unwissenheit, die bey Kindern und dem gemeinen Mann sich findet, erweitert er sich durch anderer Beyspiele, indem er Anderer Denken nachahmet. Die Nachahmung ist also ein Grund etwas vor wahr zu halten, was der Andere gesagt hat. Z.B. Was alle Menschen behaupten, muß wahr seyn. Hierher gehören alle Spr üchwörter."
    },
    {
     "id": "wiener-s05-012",
     "kind": "text",
     "aa": 865,
     "text": "2.) Gewohnheit ist die zweyte Quelle der Vorurtheile. Sie wirkt am stärksten bey Alten, so wie die Nachahmung mehr bey Jungen als bey Alten statt findet. Die jungen Leute haben noch nicht lange genug gelebet, um die Gewohnheit bey sich so wichtig werden zu laßen. Wenn aber einer alt ist: so kann er nicht so leicht eine andere Gestalt annehmen. Ja die Gewohnheit wirkt bey alten Leuten so stark, daß man sie gar nicht davon abbringen kann, vorzüglich wenn sie noch dazu aus Nachahmung entstanden ist. Da ist der Mensch ganz incurabel. Denn die Nachahmung macht alles eigene Nachdenken unmöglich. Sie macht, daß, wenn z.B. ein autor ein neues System in einer Wissenschaft vortragen wollte, er im Anfange viel Schwierigkeiten hat. Denn es muß erst Zeit vorbey gehen, ehe eine solche Erkenntniß den Strom der Gewohnheiten aufhält, und ihn allmählich zum Stillstande bringt, und dann die entgegen gesetzte Richtung gibt. Also Vorurtheile aus Gewohnheit können nur durch die Länge der Zeit aufgehoben werden.",
     "ms": [
      {
       "p": 214,
       "i": 99
      },
      {
       "p": 215,
       "i": 672
      }
     ]
    },
    {
     "id": "wiener-s05-013",
     "kind": "text",
     "aa": 865,
     "text": "3.) Neigung oder Abneigung. Praedilection oder Neigung ist, wenn man, ehe man eine Sache untersucht hat, schon zum voraus vortheilhaft dafür eingenommen ist."
    },
    {
     "id": "wiener-s05-014",
     "kind": "text",
     "aa": 866,
     "text": "Nachahmung ist dem freyen Gebrauch unserer Vernunft am meisten zuwider, weil wir uns hier frühzeitig daran gewöhnen, anstatt unsers eigenen uns fremder Urtheile zu bedienen. Man kann den freyen Gebrauch der Vernunft in den activen und in den paßiven Gebrauch eintheilen, und Urtheile der Nachahmung sind habitus eines paßiven Gebrauches. Activ bediene ich mich meiner Vernunft, wenn ich etwas selbst aus den Naturgesetzen ableite. Es ist schädlich, der Jugend gewiße Männer als Meister vorzustellen, so daß sie ihre Sprache oder Ausdrücke nachbethen müßen. Denn daraus wird eine paßive Vernunft, und das ist doch contradictio in adjecto. Denn alle Vernunft ist ihrer Natur nach ein selbst thätiges principium des Denkens, und selbst denn, wenn ich beym Denken die Erfahrung zum Grunde lege, macht sie doch allgemeine Regeln der Erfahrung. Der Gebrauch der Vernunft besteht also in Selbstthätigkeit, aber die Faulheit des Menschen macht, daß sie sich lieber pa ssive verhalten, als daß sie ihre Erkenntnißkraft so weit erheben sollten, sich ihrer eigenen Kräfte zu bedienen. Sie haben demnach bloß subjective und historische Erkenntniße, weil sie bloß nachbethen. Ein solches Verhalten ist ein fruchtbarer Boden zu wuchernden Vorurtheilen, und es behindert alle Verbeßerung und Fortschritte in einer Sache, und doch ist es so allgemein verbreitet, weil es dem menschlichen Hang zur Gemächlichkeit so sehr angemeßen ist. Es ist daher nichts schädlicher, als wenn man die Schüler angewöhnet den Autor nachzumachen oder vielmehr nachzuäffen.",
     "pages": [
      {
       "p": 866,
       "i": 317
      }
     ],
     "aaEnd": 866,
     "ms": [
      {
       "p": 216,
       "i": 55
      },
      {
       "p": 217,
       "i": 629
      },
      {
       "p": 218,
       "i": 1290
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-015",
     "kind": "text",
     "aa": 867,
     "text": "Ein Grundsatz der Nachahmung sind Sentenzen und Sprüchwörter. Sprüchwörter sind Ausdrücke, die aus dem gemeinen Leben und aus der Sprache des Pöbels genommen sind. Die erste Quelle der Sprüchwörter sind gemein hin Vorurtheile. Z.E. Der Apfel fällt nicht weit vom Stamm, u.d.gl. Sentenzen sind Sinnsprüche, die Belesenheit anzeigen, und da sie also gewißer maßen mit zur Gelehrsamkeit gehören: so bedienen sich diejenige derselben, die sich zieren, und ihre Gelehrsamkeit zeigen wollen. – Formel ist eine Regel, deren Ausdruck selbst zum Muster der Anwendung dient. Man hat nur dem Gedächtniß dadurch zu Hülfe zu kommen: So hat man Formeln in der Algebra, Grammatic, Jus etc. etc. Selbst der größte Gelehrte bedienet sich solcher Formeln, wenn er im Anfang über die Regeln nachgesonnen hat, so macht er sich, um bey der Anwendung hernach leichter zu verfahren, Formeln, damit er, wenn er die Formeln weiß, so gleich alle actus, die er zu beobachten hat, weiß. Sie sind demnach von großer Wichtigkeit, aber bloße Nachahmung der Formeln bringt so gute Sachen nicht zuwege. – Ein Spruch ist ein Satz, deßen Ausdruck in Anzeige seines Sinnes eine gewiße Abgemeßenheit hat. Wenn also ein Ausdruck praegnant ist, und in diesem vollen Gehalte doch eine solche Abgemeßenheit des Ausdruckes herrscht, daß es scheint, man könne nicht mit weniger Worten einen so viel befaßenden Vortrag vortragen, ist – das – ein Spruch. Sprüche dienen zum Gesetze. Daher nennt man Stellen der h. Schrift dicta. Dicta aus Philosophen kann man also nicht geben, so wie es die Schüler des Pythagoras, die acusmatici machten, indem sie sagten: [ Textlücke: AA:αὐτὸς ἔφα. ]",
     "pages": [
      {
       "p": 867,
       "i": 1310
      }
     ],
     "aaEnd": 867,
     "ms": [
      {
       "p": 219,
       "i": 362
      },
      {
       "p": 220,
       "i": 968
      },
      {
       "p": 221,
       "i": 1547
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-016",
     "kind": "text",
     "aa": 867,
     "text": "Der Mechanism in Sachen des Verstandes kommt dem Verstande in einiger Rücksicht sehr zu Hülfe, wenn ich erst das selbst durchgedacht habe. Allein ohne Ueberzeugung dergleichen anzunehmen, ist auch ein fruchtbarer Quell zu Irthümern. Ein solcher mechanism herrscht in Formeln, d.i. allgemeinen Sätzen in ganz praecis bestimmte Worte gekleidet. Von dieser Art sind"
    },
    {
     "id": "wiener-s05-017",
     "kind": "text",
     "aa": 867,
     "text": "1.) die Sprüchwörter, formulae vulgares, die für den gemeinen Manns Verstand gelten. Diese aber ohne alle Prüfung annehmen, ist nicht rathsam."
    },
    {
     "id": "wiener-s05-018",
     "kind": "text",
     "aa": 867,
     "text": "2.) Sentenzen, Aesthetische Formalien, Formeln der Vorschrift, worin eine Verhaltungsregel enthalten ist. Dergleichen findet man bey Dichtern, wie Horaz.",
     "ms": [
      {
       "p": 222,
       "i": 28
      }
     ]
    },
    {
     "id": "wiener-s05-019",
     "kind": "text",
     "aa": 867,
     "text": "3.) Canones, Formeln der Wissenschaft. Dergleichen hat man in allen Wissenschaften, und sie dienen dazu, die Sache leichter vortragen zu können."
    },
    {
     "id": "wiener-s05-020",
     "kind": "text",
     "aa": 867,
     "text": "4.) Dicta. Formeln des Glaubens in theologischen Sachen, wo die Worte selbst für heilig gehalten, und also ohne alle Umänderung angenommen werden."
    },
    {
     "id": "wiener-s05-021",
     "kind": "text",
     "aa": 867,
     "text": "Diese alle nun, haben sie erst bey mir Wurzel geschlagen, ohne reife Ueberlegung, sind eine Wurzel unsäglicher Irthümer.",
     "ms": [
      {
       "p": 223,
       "i": 120
      }
     ]
    },
    {
     "id": "wiener-s05-022",
     "kind": "text",
     "aa": 867,
     "text": "Sprüche müssen also immer von Jemand anders entlehnet werden. – Sentenz bedeutet wohl nicht immer dictum, aber hat dadurch eine Aehnlichkeit, daß es durch den Nachdruck der Gedanken sich empfiehlt. Eine Sentenz ist, wenn das Vernunftmäßige mit nachdrücklichen Worten ausgedrückt sich dem sens commun empfiehlt. Ein Spruch ist, wenn etwas aus dem gemeinen Verstande geschöpft zu seyn scheint, und doch eine Abgemeßenheit mit denen dazu gehörigen Worten ausdrückt. Bons mots sind allgemeine Sätze, die mehr durch den Witz, als durch eine reiche Urtheilskraft empfohlen werden. –",
     "ms": [
      {
       "p": 224,
       "i": 576
      }
     ]
    },
    {
     "id": "wiener-s05-023",
     "kind": "text",
     "aa": 867,
     "text": "Eine Sentenz hat viel Vortheil. Denn sie dienet zur Grundlage, und ist unterhaltend vors Gemüth, indem bey wenigem Inhalt viel gedacht wird, und dieses wenige ist eines Jeden Vernunft angemessen."
    },
    {
     "id": "wiener-s05-024",
     "kind": "text",
     "aa": 868,
     "text": "Canones sind Lehrsprüche, die mehr auf den Inhalt des Ausdruckes sehen. Es sind allgemeine Sätze, die in Wissenschaften zur Grundlage dienen. Ein Canon kann auch durch sentenzen ausgedrückt werden, und dann gefällt er desto mehr. Sprüchwörter, Denksprüche sind die gebräuchlichsten Ausdrücke im populären Urtheile des Verstandes und der Vernunft. Es kann etwas ein Ausdruck des gesunden Verstandes seyn, und ist doch nicht populär. Denn ist es wohl eine Sentenz, aber kein Sprüchwort. Sprüchwörter enthalten den currenten Witz des Volkes, aber doch auf eine concise Art ausgedrückt, so daß er sich von den gewöhnlichen Redensarten unterscheidet. Sie geben den gemeinen Verstand des Volkes zu erkennen, und haben immer etwas provinciales an sich. Denn sie sind gemeiniglich in national Bilder eingekleidet. Sie sind canones für den gemeinsten Pöbel. Denn sie sind die Regeln, die sich schon bey der ersten Einrichtung einwurzelten, und also allgemein gelten. Daher findet man auch, daß sie bey Leuten von feiner Erziehung nicht Statt finden. Wenn aber einer einen Canon z.B. aus einem autor cla ssicus in der feinen Welt vorbringt: so wird das sehr gern angenommen. Vorurtheile werden dadurch sehr geprüft, wenn man die Weisheit auf Sentenzen und Sprüchwörter gründen will, weil man sich immer darnach umsieht, was Andere gesagt haben. Es entstehen daraus immer Partheylichkeiten für die Meinungen dieses oder jenes berühmten Mannes und Philosophen. Das waren die Vorurtheile aus Nachahmung. Die Gewohnheit zeigt ihre Wirkung, wenn man einerley Denkart lange gehabt hat, und nun mit einem Mahl davon abgehen soll.",
     "ms": [
      {
       "p": 225,
       "i": 365
      },
      {
       "p": 226,
       "i": 917
      },
      {
       "p": 227,
       "i": 1404
      }
     ]
    },
    {
     "id": "wiener-s05-025",
     "kind": "text",
     "aa": 869,
     "text": "Der hat mit vielen Schwierigkeiten zu kämpfen, der etwas neues in der Religion, Metaphysic etc. vortragen will. Aber die Zeit macht, daß ein Satz mit den Beweisgründen hernach so klar in die Augen fällt, daß Leute sich wundern müssen, wie sie ihn vorher nicht haben einsehen können. Die erste Beurtheilung einer Sache, die neu ist, geschieht immer nach eben den Vorurtheilen, die man gerade aus dieser Sache ausrotten wollte. Wenn man wider ein Vorurtheil kämpft: vertheidigt es sich gleichsam selbst. Denn man kann von dem Hange an irgend einen Ausspruch nicht so bald abgebracht werden, und eben mit diesem Hange, und nicht mit der Vernunft hat man denn zu thun. Denn mit der Vernunft würde es leichter von statten gehen. Das dauert so lange, bis endlich die Neigung allgemeiner wird. Dann wird sie auch von Allen angenommen. – Es fragt sich: ist es nöthig vor einen Lehrer und rathsam, Vorurtheile unangetastet zu laßen, oder sie wohl gar zu begünstigen? Damit sie nach und nach in den Gemüthern der Zuhörer tiefer wurzeln, ist es eben so viel, als wenn man fragt: ist es erlaubt, Leute in guter Absicht zu betrügen? Die Absicht mag so gut seyn, als sie will, so ist das Mittel doch ärger, als die beßte Absicht, die man haben kann.",
     "pages": [
      {
       "p": 869,
       "i": 932
      }
     ],
     "aaEnd": 869,
     "ms": [
      {
       "p": 228,
       "i": 312
      },
      {
       "p": 229,
       "i": 801
      },
      {
       "p": 230,
       "i": 1235
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-026",
     "kind": "text",
     "aa": 869,
     "text": "Unangetastet könnte man sie wohl lassen, weil man sich damit begnügen kann, einen Irthum hingehen zu lassen, wenn man ihn nur nicht bestärkt, man würde den Menschen nur aus seiner alten Gewohnheit heraus bringen, und man könnte ihn doch nicht so bald gewöhnen. – Aber es ist dennoch rathsam, alle Irthümer und Vorurtheile aufzudecken, wenn man vollkommen von der Richtigkeit seiner Einsicht überzeugt ist. Denn in der Folge sehen die Leute doch, daß man Recht hat. Man muß also das Verfahren der Menschen allerwärts untersuchen, und ihnen aufdecken, was sie aus Vorurtheilen begehen. Der Nachtheil, den man anfänglich durch das Widerstreben leidet, wird reichlich ersetzt. Wir haben ja auch einen Beruf, die allgemeine Gebothe der Vernunft nicht zu cachiren, sondern zu promulgiren, und wenn wir schweigen, scheints gleichsam, als wenn wir die Leute vor nicht werth halten, das zu wißen. – Einige Menschen haben eine Einsicht in gewiße Dinge nicht nöthig z.B. in speculativen Sachen, ohne die sie mit ihrem Gewißen ganz weggehen können, und die in ihre Handlungen nicht den geringsten Einfluß haben. Sind ihre Vorurtheile aber vom practischen Nachtheile: so trage du das vor, was du beßer weißt, als jene, und glaube, daß der Nachtheil, den du im Anfange haben könntest, kleiner sey, als jener practische Vortheil der Andern. Jetzt kommen wir zu den positiven und negativen Vorurtheilen. Wir können sie aber Beyde auf einen Fuß nehmen. Denn beym negativen versteht man auch sehr bald das positive. Sie sind Vorurtheile des Ansehens, des Zutrauens auf die Menge, auf Zeitalter eines Volkes. In allen diesen Stücken können Vorurtheile herrschen, d.i. wo die Sinne dem Verstand vorlaufen. Daher der Verstand, der schon zuvor darauf bereitet ist, in seinem Urtheil eine propension zeigt, Achtung zu haben etwa vor der Gelehrsamkeit eines Mannes, oder umgekehrt ein größeres Zutrauen in den gemeinen Verstand zu setzen, als in die Gelehrsamkeit. Von diesem Stücke wird unten noch besonders gehandelt werden. Es gründen sich diese Vorurtheile auf eine propension, anderer Meinung beyzustimmen. Alle Vorurtheile, wodurch wir Andere nachahmen, indem wir unser Vorurtheil auf das Ansehen anderer Menschen gründen, kann man die knechtische Vorurtheile",
     "ms": [
      {
       "p": 231,
       "i": 465
      },
      {
       "p": 232,
       "i": 1007
      },
      {
       "p": 233,
       "i": 1551
      },
      {
       "p": 234,
       "i": 2106
      }
     ]
    },
    {
     "id": "wiener-s05-027",
     "kind": "text",
     "aa": 870,
     "text": "nennen. Doch gibt es auch ein eigenliebiges Vorurtheil, wenn man die Werke seines Geistes mit einer praedilection ansieht, und die Kinder seines Verstandes fehlerfrey findet."
    },
    {
     "id": "wiener-s05-028",
     "kind": "text",
     "aa": 872,
     "text": "Vorurtheile des Ansehens einer Person sind knechtische Vorurtheile. – In historischen Sachen ist das Ansehen anderer Personen durchaus nothwendig, und macht das Fundament unserer Vorurtheile in vielen Fällen aus. Denn Dinge, die auf zwey Zeugnißen beruhen, kann ich aus mir selbst nicht herausbringen, weil mein eigener Verstandesgebrauch nicht hinreichend ist, die Wahrheit der Geschichte zu bestimmen, die auf Erfahrung beruht. Hier kann ich ohne Vorurtheil auf die Nachricht Anderer bauen, ja es ist in diesem Falle nothwendig, denn weil ich sie durch eigene Erfahrung nicht erlangen kann: so müssen sie von solchen Personen kommen, die bey uns in solchem Ansehen stehen, daß wir ihnen Glauben beymeßen. Diese Annehmung deßen, was ein Anderer sagt, ist nicht auf ein Vorurtheil gegründet, sondern es ist eine Bedingung, die unserm Verstande gültig genug ist ihm Beyfall zu geben. Wenn aber die Erkenntniß ihren Beweisgrund in nichts anders, als in der Vernunft hat, nicht aber ihn aus der Erfahrung nimmt: so kann das Zeugniß anderer nicht ein Grund des Verhaltens seyn, und eben dieses Urtheil, was unserm Verstand vorläuft, und bey uns ohne alle Prüfung eine propension etwas vor wahr zu halten macht, ist das Vorurtheil des Ansehens, wenn ich z.B. die Unsterblichkeit der Seele darum glauben möchte, weil es Plato gesagt hat. Wahrheit, so fern sie auf Vernunft beruht, gilt anonymisch, d.i. man muß nicht fragen, wer das gesagt hat, sondern was er gesagt hat. Es kommt hier nicht darauf an, zu welcher Familie die Erkenntniß gehört, und ob der, der sie sagte, von großen Verdiensten war, sondern auf das, was er sagte. – Man beklagt sich darüber, daß die Staats- und Religionssachen so viel anonymische Schriften zum Vorschein brächten, wodurch man Pfeile wider die Sachen schmiedete. Freylich wenn der Mensch an sich boßhaft ist: so ist es noch ärger, wenn er anonymisch handelt, aber was die Sache selbst betrifft, so muß diese anonymisch gelten, der Mensch mag sich so schlecht, oder gut aufführen, als er will. Wenn ein edler und rechtschaffener Mann was schlechtes sagt: so ist es darum nicht minder schlecht, weil er rechtschaffen ist. – Die Hochachtung einer Nazion für einen gewißen Mann ist deßhalb schädlich, weil sie den Menschen zur Faulheit bringt, sich nicht selbst in ihrer Erkenntniß fest zu setzen, sondern Andere darüber walten zu lassen. Locke sagt davon, das Ansehen großer Männer dient zu disputen, oft ad verecundiam, wenn man Andere damit still machen will, weil es ein großer Mann gesagt hat. Dieser Hang zum Ansehen großer Männer entspringt aus Gewohnheit der Nachahmung deßen, was uns als gewiß vorgeschrieben ist, und aus Mangel der Einsicht, indem wir uns immer einen Gewährsmann aufsuchen, auf den wir uns verlassen müssen können, und der gleichsam für uns Verstand hat, und auf den wir uns immer berufen können. – Das Vorurtheil des Ansehens der Person verursacht darum etwas Besonderes in unsern Neigungen, weil es dazu dient, unserer Eitelkeit indirecte zu schmeicheln. Denn so wie Unterthanen eines mächtigen despoten stolz sind, wenn sie gleich in den niedrigsten Ständen leben, weil nähmlich sie Alle gegen ihn nichts sind, und der eine morgen so groß werden kann, als der Andere heute ist, so auch wenn einer unter den Männern zu einem großen Gelehrten erhoben wird, so geschiehts oft nur zu der Absicht, damit der, der ihn preiset, allen andern Gelehrten gleich gehalten seyn will. Denn weil nach diesen Lobeserhebungen alle Andere gegen den großen Mann nichts sind, so ist der kleine Unterschied unter den andern nicht zu rechnen. Der Neid gegen andere Menschen also ists, daß einer einen einzigen Menschen groß macht. Die gepriesene Person beneiden wir nicht mehr, aber wir verstatten auch nicht, daß Andere sich ihr gleichstellen wollen. – Citationen gelehrter und berühmter Männer können nicht als Beweisgründe angesehen werden. Denn die eigentliche Frage ist doch immer: wie viel Grund hat die Behauptung in der Vernunft, und nicht wer hat es gesagt? Dem ungeachtet aber führt die Neigung der Citationen anderer Autoren so ein gewißes Gewichte mit sich, unsern Beyfall gegen eine Sache zu verstärken, es ist folglich ein äußeres criterium der Wahrheit, d.i. die Einstimmung des allgemeinen Menschenverstandes ist ein Grund der Vermuthung, daß ich richtig geurtheilt haben werde. Es ist eine Art der Experience des Urtheiles an mehr, als einem Verstande. Hierbey arrivirts aber doch oft z.B. in der Metaphysic, daß Menschen alle einerley Blendwerk haben. Es gibt eine Wissenschaft, die das an sich hat, daß sie der citationen gar nicht entbehren kann, nähmlich das Jus. Da sieht man, wie unsicher alle juristische Urtheile seyn müssen. Es könnte aber wirklich ein ursprüngliches Recht geführt werden, ohne zu citiren. Beobachtet nur immer den Nachtheil dieses oder jenes Gesetzes aus der Erfahrung. Denn die Vielheit der Fälle, die die jedesmahlige Richtung des Willens veranlassen kann, läßt sich nie in einem Gesetze ganz bestimmt ausdrücken. Man muß daher andere Augen zu Hülfe nehmen, weil keiner so scharfsichtig ist, jeden Fall genau zu untersuchen. Habt ihr auf die verschiedene Ausgänge der Prozeße Acht gegeben: so werdet ihr im Stande seyn, mehr entscheiden zu können. – Citationen haben immer etwas Angenehmes, wo nähmlich ganze Stellen aus andern autoren angeführt sind. Es ist unstreitig das Unterhaltende, was veranlaßt, daß sie uns gefallen. Doch zu Beweisgründen müssen sie dem ungeachtet nicht dienen, weil es nur ein äußeres criterium der Wahrheit ist.",
     "pages": [
      {
       "p": 871,
       "i": 2373
      },
      {
       "p": 872,
       "i": 4957
      }
     ],
     "aaEnd": 872,
     "ms": [
      {
       "p": 235,
       "i": 493
      },
      {
       "p": 236,
       "i": 1284
      },
      {
       "p": 237,
       "i": 2166
      },
      {
       "p": 238,
       "i": 2964
      },
      {
       "p": 239,
       "i": 3811
      },
      {
       "p": 240,
       "i": 4617
      },
      {
       "p": 241,
       "i": 5404
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-029",
     "kind": "text",
     "aa": 873,
     "text": "Vorurtheil aus dem Ansehen der Menge ist ein Vorurtheil entweder des gesunden Verstandes, oder der Gelehrten, wozu der Pöbel hauptsächlich einen Hang hat, da nähmlich bey ihm das Urtheil der Menge gilt. Der Pöbel ist nicht im Stande, den Werth einer einzelnen Person zu schätzen, darum hält er sich an die Menge, aber NB nicht an eine jede Menge. – Schon durch Sprichwörter wird ein Vorurtheil der Menge angenommen, indem man voraussetzt, was alle Menschen sagen, muß doch wohl wahr seyn. Doch dieses ist nur ein historisches Urtheil. Aber in Religionssachen traut er, weil er sich selbst nicht getraut davon zu urtheilen, den Gelehrten, die uns als Vorbilder gleichsam in der Religion gelten. Dieses gilt bey allen geschriebenen Religionen. Hier glaubt ein jeder seinen Gelehrten, die diese Bücher studiren, und von solchen Religionen melden, den Mißionaren, daß es eben deßhalb schwer sey, dort proselyten zu machen. Hier gründet sich also das Vorurtheil auf eine Menge von Personen. Es ist aber dabey zu bemerken, das, was ich aus Vorurtheil annehme, kann auch zufälliger Weise wahr seyn. Daß ich es aber als ein Vorurtheil annehme, das ist falsch und logisch verwerflich. Daher ist das Erkenntniß nicht tadelhaft, als wenn es falsch wäre, sondern weil ich es aus Vorurtheil angenommen habe. In Ansehung der Erkenntniße herrschen Vorurtheile des gemeinen Mannes für die Gelehrsamkeit. Aber auch der Gelehrte hat wieder ein Vorurtheil für den gemeinen Stand. Es ist leicht zu finden daß der größte Haufen stets ein günstiges Vorurtheil vor den Gelehrten hat, und hier hat er auch wohl guten Grund. Denn diese müssen der Erkenntniß nachspüren, und sie zu ihrem Hauptgeschäfte machen, ihm aber stoßen solche Sachen nur bey Gelegenheit auf. – Bey Gelehrten findet sich ein Vorurtheil vor den gemeinen Verstand, und ein Mißtrauen in den gelehrten Verstand. Es entsteht daßelbe bey dem wißbegierigen Gelehrten, wenn er sieht, daß ihm alle seine Bemühungen nicht genug thun wollen. Er glaubt, er habe nicht den rechten Weg genommen, und kehrt deshalb zum gemeinen Verstande zurück, weil er hier den rechten Schlüßel einer ihm dunkeln Erkenntniß zu finden glaubt. Dieses findet sich denn, wenn er den Kreis der Wissenschaften ziemlich durchgelaufen ist, und vorzüglich in solchen Wissenschaften, die er ohne Begriffe nicht sinnlich machen könnte, z.B. Metaphysic, Recht. In der Naturwissenschaft hat er auf keine Weise ein günstigers Vorurtheil vor den gemeinen, als vor den gelehrten Verstand, weil er sieht, daß man hier durch experimente weiter gelangen kann. Aber was die Urtheile vom Daseyn eines höchsten Wesens, der Natur unserer Seele betrift, wenn da der Gelehrte alle seine Kunst verschwendet hat, und sich doch kein Genügen thut, und so viel Gebräuchliches bey sich und andern Gelehrten findet: so glaubt er, es stecke irgend wo der Schlüßel, und da sucht er ihn im gemeinen Verstande. Aber dieser Glaube ist sehr trüglich. Denn wie werden diese ungeübten Augen mehr ausrichten, als wenn sie cultivirt wären? und wie können solche Begriffe von einer andern Welt auf Begriffe gebracht werden? Gleichwohl gibts gewiße Erkenntniße, die in concreto können dargestellt werden. Z.B. alle moralische Fragen können in concreto gegeben werden. Hier urtheilt der gemeine Verstandes Gebrauch richtiger, als der speculativische Verstandesgebrauch, weil er die Sachen in der Erfahrung vor sich hat. Man muß also hier beym speculativen Gebrauch den gemeinen Verstand oft zu Hülfe rufen wegen der besondern Sätze, die aus puren speculativen zuletzt entspringen. Es gibt also gewisse Wissenschaften, wo die bloß speculative Vernunft ohne Bestimmung der gesunden Vernunft nicht gesichert ist, und wo eine gewiße vorläufige Meinung des speculativen Verstandes die Gewährleistung des gemeinen Verstandes wahrscheinlich irre leiten muß. Z.B. der Satz der Juristen damnum patitur dominus ist nach dem gemeinen Verstande untersucht höchst unbillig. Daher nicht der Gelehrte in solchen Fällen zum gemeinen Verstande seine Zuflucht nehmen kann. Aber dieses ist denn kein Vorurtheil bey den Gelehrten, sondern nur eine Methode seine Speculation auf die Probe zu stellen. Denn es gibt so viele Fälle in practischen Wissenschaften, die man bey der Speculation unmöglich alle übersehen kann, daher man Fälle in concreto dazu nehmen muß.",
     "pages": [
      {
       "p": 873,
       "i": 2002
      }
     ],
     "aaEnd": 873,
     "ms": [
      {
       "p": 242,
       "i": 1017
      },
      {
       "p": 243,
       "i": 2015
      },
      {
       "p": 244,
       "i": 3056
      },
      {
       "p": 245,
       "i": 3958
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-030",
     "kind": "text",
     "aa": 873,
     "text": "Den Vorurtheilen des Ansehens ist entgegen gesetzt der logische egoismus, d.i. das Vorurtheil, nach welchem wir die Einstimmung unseres Verstandes mit fremder Vernunft als ein criterium der Weisheit vor unmöglich halten. Es gibt Wissenschaften, in denen wir wirklich,"
    },
    {
     "id": "wiener-s05-031",
     "kind": "text",
     "aa": 874,
     "text": "ohne den Fehler des egoismus zu begehen, uns oft auf unsre eigene Vernunft verlassen müssen, ohne unser Urtheil nach fremder Vernunft zu prüfen, und ohne dieses äußern criteriums zu bedürfen. Z.B. In der Mathematic ist die evidenz so groß, daß keiner ihr widerstehen kann, wenn er nur den vorgelegten Beweisen folget. Aber sonst kann dieses historische criterium der Beistimmung Anderer nicht ganz entbehrt werden. Denn ob es gleich nicht allein ein criterium ist: so ist es doch mit ein criterium. Denn in discursiven Vernunft-Erkenntnißen, wo wir Alles durch Begriffe darlegen, kann man die Einstimmung Anderer nie für entbehrlich halten aus der Ursache, weil die Fehler hierbey so leicht sind, die bey einer intuitiven Vorstellung nicht möglich sind. Der Fehler, den ich beging, entstand aus einer illusion, die aus der Lage entstand, wie ich die Erkenntniß erkannte, daher kann ich das Urtheil Anderer nicht vor entbehrlich halten. Denn diese können das Meinige corrigiren, z.B. wenn ich in der Ferne etwas sehe, sage ich, es ist ein Pferd, der andere, es ist ein Baum. Ich habe vielleicht nur den Gedanken vom Pferde vorher tief eingepräget, und durch diese illusion glaube ich in der Ferne ein Pferd zu sehen. Der Egoismus ist demnach der Fehler, wo man glaubt, daß, wenn vom criterium der Wahrheit die Frage ist, man die Beurtheilung Anderer nicht bedarf.",
     "ms": [
      {
       "p": 246,
       "i": 301
      },
      {
       "p": 247,
       "i": 1216
      }
     ]
    },
    {
     "id": "wiener-s05-032",
     "kind": "text",
     "aa": 874,
     "text": "Der logische egoismus ist entweder Indifferentism oder Gleichgültigkeit gegen Anderer Urtheile, indem ich anderer Urtheile zur Beurtheilung des meinigen für unnöthig halte, oder Eigendünkel und arroganz, da man sich nur allein anmaßt, vor allen Andern ein richtiges Urtheil von einer Sache zu fällen."
    },
    {
     "id": "wiener-s05-033",
     "kind": "text",
     "aa": 875,
     "text": "Die Vorsehung hat es aber gelenkt, daß wir unsere Urtheile der allgemeinen Menschenvernunft vortragen, und hat dazu den Trieb in uns gelegt. Viele glauben hier wohl, daß das nichts weiter, als die Triebfedern der Eitelkeit sind. Das könnte seyn, aber die Absicht der Vorsehung ist dennoch erreicht, und wir bemühen uns auch wirklich beßer. Findet das nicht Statt, daß wir unsern Gedanken der allgemeinen Vernunft vorlegen, so haben wir Ursach, in die Gültigkeit unserer Urtheile Verdacht zu setzen, weil wir die weise Vorschrift der Natur nicht befolgen wollen, unsere Wahrheit an fremden Urtheilen zu probiren. Es ist demnach Unrecht, im Staate zu verbiethen, daß Menschen Bücher schreiben, und etwa z.B. über Religionssachen urtheilen sollen. Denn da wird ihnen das einzige Mittel genommen, das ihnen die Natur gegeben, nähmlich ihr Urtheil an fremder Vernunft zu prüfen. Die Freyheit im Stillen zu denken geben die Leute, die so despotisch tyrannisiren. Aber das ist nur das Schlimmste, daß sie das Niemand wehren können. Denken kann ich immer, was ich will. Aber was den logischen Egoismus betrift, so muß man doch auch einräumen, daß, da die menschliche Natur darauf gewiesen ist, dieses äußere criterium zu gebrauchen, ich auch ein Recht habe, meinen Gedanken oeffentlich vorzutragen. || V Das Vorurtheil des Alterthumes ist eines der nachtheiligsten Vorurtheile. Es ist sehr natürlich, daß es vorzüglich ein Alter hat. Denn da er sich in eine neue Form nicht mehr schmieden kann: so defendirt er, so viel er kann, das Alte, und vertheidiget sich gleichsam in seiner Besitzung. Junge Leute sind mehr vors Neue, weil sie sich noch muthig genug finden, sich neue Erkenntniße zu erwerben. – Doch gibt es auch etwas Allgemeines bey diesem Vorurtheile, es gibt eine gewiße Meinung, die dabey zum Grunde liegt, die Menschen glauben nähmlich durchgängig, daß alles mit der Zeit schlechter werde, und daß alles in der Welt veralte. || V Das ist nun freylich gewißer maßen wahr. Aber unsere Lebenszeit ist viel zu kurz, um das Alles zu beobachten, wie es nach und nach veraltet. Eines ist in der Natur, das ist ganz unveränderlich, das ist die Species, wenn gleich jedes individuum veraltet. Auf solche Weise bildet man sich ein, daß diese Species immer nach und nach degradirt werde, und daß die Menschen nach und nach nichts anders, als geschickte Ochsen werden würden, || V die alte deutsche Redlichkeit höre ganz auf. Aber gewiß die Menschen sind ehedem nicht größer, tugendhafter, verständiger gewesen, als jetzo, und ein Mann, der nicht durch schlechte Aufführung seinen Körper verdorben hat, wird noch einen eben so gesunden Sohn zeugen, als Adam. || V Die Anlagen sind dieselben, als ehemals. Deßhalb sind wir nicht im Stande in Abweichung davon vorzügliche und merkwürdige Sachen zu finden. || V Das Vorurtheil des Alterthumes steigt und fällt von Zeit zu Zeit. Jetzt scheint es wieder sehr anzusteigen. Ehedem stieg die Neuheit mehr. || V Genügt man sich bey dem Alten, um bloß eine historische Kenntniß der Alten mit seinen übrigen Kenntnißen zu verbinden: so ist es nützlich und gut. || V Wenn wir aber glauben, die Weisheit in ihnen zu finden: so irren wir gar sehr, und wir würden alle Wissenschaften zu Grunde richten, wenn wir in die Gelehrsamkeit eines fremden Alters zurück gehen, und das, was die Alten als Kinder sammelten, zu unserm geübten Urtheil hinzu nehmen wollten. Unsern Geschmack können sie aber wohl bilden.",
     "pages": [
      {
       "p": 875,
       "i": 931
      }
     ],
     "aaEnd": 875,
     "ms": [
      {
       "p": 248,
       "i": 479
      },
      {
       "p": 249,
       "i": 1521
      },
      {
       "p": 250,
       "i": 2419
      },
      {
       "p": 251,
       "i": 3422
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-034",
     "kind": "text",
     "aa": 876,
     "text": "Vorurtheile entspringen oft aus entgegen gesetzten Ursachen. Denn je nachdem ein Kopf gestimmt ist, geräth er in ein Vorurtheil aus einer entgegen gesetzten Ursache. || V Das Vorurtheil zu Gunsten der Alten entspringt aus einem nachtheiligen Urtheile gegen das Alte, so wie das Vorurtheil zu Gunsten der Gelehrsamkeit des Frauenzimmers, weil man ein nachtheiliges Vorurtheil für die capricitaet dieses Geschlechtes hat. Wenn man von den Alten einen nachtheiligen Begriff hat, so kann man sich doch eine vortheilhafte Vorstellung von den Alten machen, weil man die Bewunderung mit der Verwunderung verwechselt. Denn wenn man ein nachtheiliges Vorurtheil von einer Sache hat, und dabey doch etwas antrift, was unsere Erwartung übersteigt: so verwundert man sich. Die Bewunderung aber ist die angenehme Empfindung, wenn wir etwas sehr groß finden. Z.E. Wir verwundern uns, wenn ein Kind, von dem wir gar nicht die Meinung haben, schon so klug sprechen kann. || V Aber zuletzt kann diese Verwunderung auch in eine Bewunderung ausarten. Verwunderung ist der Zustand der Seele beym Anschauen des Neuen und Unerwarteten, Bewunderung des Unerwarteten Guten z.B. wenn ein Frauenzimmer anfängt, wie ein Buch zu sprechen: so verwundert man sich, und glaubt, daß es klüger ist, als es wirklich ist. – Die Alten hatten die Vorurtheile in den Wissenschaften lange nicht, die wir haben. Man sollte also doch nicht vermuthen, daß sie die Kenntniße, wie wir, haben sollten. Daher verwundern wir uns, wenn wir sehen, daß sie so, wie wir, gedacht haben. Dieses bringet die Verwunderung über einen Alten zuwege, weil er in dem Zeitalter, worin er lebte, schon so etwas Kluges sagte, und die Verwunderung artet zuletzt in eine Bewunderung aus, indem wir mehr Verdienste an ihm finden, als er wirklich hat. || V Z.B. wenn einer eine Stelle aus dem Plato anführt: so würde das gewiß schlecht gesagt seyn, wenn ein Neuer so sagen wollte: aber das ist doch viel, denken wir, daß der Mann schon damahls so viel ausmachen konnte, und da bewundern wir am Ende seinen Satz, und nicht den Mann mehr. Und hieraus entsteht eben das Vorurtheil. Denn es ist Unrecht, daß wir statt den Mann, den wir wohl Ursache zu bewundern haben, den Satz bewundern.",
     "pages": [
      {
       "p": 876,
       "i": 137
      }
     ],
     "aaEnd": 876,
     "ms": [
      {
       "p": 252,
       "i": 870
      },
      {
       "p": 253,
       "i": 1811
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-035",
     "kind": "text",
     "aa": 877,
     "text": "|| V Die zweyte Ursache der Vorurtheile zu Gunsten des Alterthumes ist, daß alle Kenntniße, die wir vom Alterthume haben, bey uns selbst Gelehrsamkeit sind. Obgleich die Wissenschaften der Alten, von denen wir jetzt Nachrichten haben, sehr wenig, oder gar keine Gelehrsamkeit an sich haben. Schon die Kenntniß der Sprache der Alten ist Gelehrsamkeit, und erwirbt jederzeit Achtung. Demnach erwirbt schon die Kenntniß von den Verdiensten der Alten Achtung, und hier geschiehet nun wieder durch eine illusion, daß sich die Einsichten selbst Achtung erwerben, obgleich nur die Kenntniß des Mannes, der etwas weiß, Achtung erfordert. || V Der Satz bringt ein reflectirtes favorables Licht hervor, daß die Gelehrten der Alten auch den Satz eingesehen haben. Denn Gelehrsamkeit verdienet Gunst, wenn gleich der Satz nichts förderliches enthält. || V Denn es ist immer eine angenehme Sache zu hören: das hat Cicero gesagt, weil es Belesenheit des autors in den Alten anzeigt; indem ich nur mit Gunst den Vortrag annehme, nehme ich den Satz mit Gunst an, wenn er auch nicht in die Gelehrsamkeit gehört. || V Weil also der Satz in einem solchen vehiculo vorgetragen wird, und der Satz dadurch ein Ansehen kriegt, weil er aus entferntem Ort und Zeit an uns gekommen ist: so bringt das das Vorurtheil zuwege zu glauben, daß er beßer gesagt sey, als in neuern Zeiten. || V Wir haben Ursache uns günstige Urtheile vom Alterthume zu machen, ohne daß darunter ein Vorurtheil stecken darf. Dieser Grund reicht aber nur zu einer gemäßigten Achtung. Aber wenn wir den Grund haben: so verlassen wir oft die Schranken, und eignen ihnen eine ungemäßigte Achtung zu. Die Zeit sichtet alle Sachen, was heute gerühmt wird, wird morgen verachtet und verworffen. Was aber in einer langen Zeit nicht abgekommen ist, da ist zu vermuthen, daß es einen innern Werth habe. Die Schriften des Alterthumes sind so gesichtet worden, weil sie sich nur dadurch erhalten haben, daß sie sich von anderen Schriften unterscheiden. Daher hat man Ursache von diesen Schriften günstig zu urtheilen. Aber dieses ist kein Beweis, daß die Schriften des Alterthumes einen absoluten großen Werth haben, sondern sie haben nur in Verhältniß einen großen Werth gegen die übrigen Schriftsteller, und macht man diesen relativen zu einem absoluten Werth, so entsteht daraus denn ein Vorurtheil. Wenn wir denn die schlechten und guten Bücher der Alten nehmen, und wollen daraus ein Urtheil von der durchgängigen Kenntniß der Alten machen: wie erstaunlich wird das Urtheil seyn? || V Wenn z.B. unsere Nachkommen den Plunder von Büchern, da zu wünschen wäre, daß er gar nicht existirte, in die Hände kriegten: so würden sie wohl nicht begreiffen können, wie zu einer Zeit, da der rechte Lauf der Sonne entdeckt wurde, auch solcher Unsinn gedacht werden konnte. Blieben aber alle schlechten Bücher weg; so würden sie uns alle vor Riesen im Urtheile halten. So ists bey den Alten auch. || V Wenn wir die Meinung der Alten annehmen, und uns selbst ihnen anvertrauen auf eine solche Art, daß wir uns selbst dabey unsers eigenen Vernunftsgebrauches begeben: so ist das ein Vorurtheil,",
     "pages": [
      {
       "p": 877,
       "i": 475
      }
     ],
     "aaEnd": 877,
     "ms": [
      {
       "p": 254,
       "i": 476
      },
      {
       "p": 255,
       "i": 1401
      },
      {
       "p": 256,
       "i": 2300
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-036",
     "kind": "text",
     "aa": 878,
     "text": "das hier entsteht. Das haben Vorurtheile an sich, daß sie den einzelnen Verstandesgebrauch ganz hindern.",
     "ms": [
      {
       "p": 257,
       "i": 104
      }
     ]
    },
    {
     "id": "wiener-s05-037",
     "kind": "text",
     "aa": 878,
     "text": "|| V Eine andere Ursache zu Gunsten des Alterthumes zu urtheilen, ist die Dankbarkeit. Wir sind ihre Schüler. Denn eine generation ist immer Lehrerin der folgenden. || V Die Dankbarkeit scheint zu erfordern, daß wir den Alten Ehre erweisen, und da glaubt man denn die, denen man Dank schuldig ist, über die maßen preisen zu müssen. Wir denken ja auch ein Mahl die Alten zu werden, und wie man den verachtet, der einen Greis verspottet, weil er ja selbst alt werden will, so wären auch wir zu verachten, wenn wir die Alten verspotten wollten, und damit das Unrecht gut werden soll, so wird immer die Hochpreisung der Alten über Alles getrieben. Denn man hält das für tugendhaft, seine Dankbarkeit auch zu übertreiben. Denn da hat man doch etwas gethan, was zu ihrer Ehre gereicht. || V Auch entstehen Urtheile zu Gunsten des Alterthumes aus Neid gegen die Zeitgenossen. Wenn ein Mensch die Alten immer studirt hat, der hat das Neue versäumt, und darum bewundert er nur immer die Alten, weil er sich darauf nur versteht. || V Weil er nun die Neuern nicht übertreffen kann: so macht er es so: er rühmt immer die Alten. || V Die Verstorbene beneidet man nicht mehr, aber die noch Lebenden sind ein Gegenstand des Neides. Wenn einer also die Alten fleißig studirt hat: so preiset er sie hoch, um den Neuern nicht einen Vorzug über sich zu lassen. – || V Kein Wissen bläht mehr auf, als das philologische Wissen, und als das, was man polyhistorie nennt, welches Statt findet, wenn man eine Art von Allgemeinheit in Ansehung der Kenntniße der Alten hat, ob diese gleich nicht hinreichend, sondern historisch sind. Die Litterati finden das gleich Alles in den Alten, und gestatten es gar nicht, daß das Neuere sollten gefunden haben. Als die Magnetnadel erfunden war: fand sich gleich ein Wort im Terenz, das sie schon anzeigte. Das Welt System des Copernicus sollte schon Philolaus gehabt haben. Die philosophie schlägt den ganzen Stolz darnieder, und bringt wohl eine Misologie dagegen zuwege, was Wissenschaft ist. Denn die entdeckt so sehr den Abgrund unserer Unwissenheit, daß wir uns hüten, weiter auf dem Wege fortzugehen. Aber alle philologie kann unsern Verstand nicht um einen Grad erweitern, sondern sie macht nur, daß wir die Verbindung und die Kenntniß des Zusammenhanges unserer Kenntniße mit den Alten nicht verlieren.",
     "ms": [
      {
       "p": 258,
       "i": 941
      },
      {
       "p": 259,
       "i": 1852
      }
     ]
    },
    {
     "id": "wiener-s05-038",
     "kind": "text",
     "aa": 879,
     "text": "|| V Das Vorurtheil der Neuigkeit. Das Neue selbst ist niemahls ein Vorurtheil. Die Alten haben etwas zum Grunde gelegt. Wir hoffen aber, daß das Neue beßer seyn würde. Das erzeuget viel Eitelkeit, so wie das Vorurtheil des Alterthumes viel pedanterie erzeugt.",
     "pages": [
      {
       "p": 879,
       "i": 131
      }
     ],
     "aaEnd": 879,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s05-039",
     "kind": "text",
     "aa": 879,
     "text": "Das Vorurtheil aus einem angenommenen Lehrgebäude gehört nicht eigentlich zu den allgemeinen Vorurtheilen. Ein Lehrgebäude ist Einheit in einer Erkenntniß, das sich aus einem principio herleiten läßt. An das principium kriegen wir zuletzt eine gewiße praedilection, indem wir urtheilen, daß Alles, was in dem System vorkommt, eine große Achtung verdiene, und dieses macht, daß wir oft ein Auge zuthun, wenn Fehler in dem System vorkommen. Dieses ist eigentlich nur ein privat Vorurtheil der Eigenliebe.",
     "ms": [
      {
       "p": 260,
       "i": 81
      }
     ]
    },
    {
     "id": "wiener-s05-040",
     "kind": "text",
     "aa": 879,
     "text": "Das Vorurtheil des Mißtrauens in das Alterthum. Alle die negativen Vorurtheile sind aus den vorigen zu erkennen, denn es ist leicht zu erkennen, daß aus einer zu großen Liebe gegen mich selbst ein Mißtrauen in das Alterthum entstehe, u.s.f."
    },
    {
     "id": "wiener-s05-041",
     "kind": "text",
     "aa": 879,
     "text": "Vorurtheile sind eigentlich gar nicht für die Logic. Denn sie hat mit den objectiven Gründen des Verstandes, und nicht mit den subjectiven Ursachen deßelben zu thun. Die subjectiven Ursachen sind Erklärungen der wirklichen Erscheinungen, wie es doch zugeht, daß Menschen sich das eine so, das andere so nach ihrem Verstande bilden. Es gehört also eigentlich für die anthropologie. Die Logic betrachtet nur die objectiven allgemeinen Gründe der Vernunft, ohne zu sehen, ob der Verstand corrumpirt sey, oder nicht. Vorurtheil ist eine bloße Gegebenheit. Alle explication der Gegebenheit gehört zur psychologie. Man kann es aber doch hier mit nehmen, weil es möglich seyn kann, im Gebrauch der logischen Unterweisung, und man muß Acht haben auf die Ursachen, die uns ableiten können vom rechten Gebrauch derselben.",
     "ms": [
      {
       "p": 261,
       "i": 208
      }
     ]
    }
   ]
  },
  {
   "id": "s06",
   "title": "Von der wahrscheinlichen Erkenntniß",
   "titleSrc": "line",
   "headings": [
    "Von der wahrscheinlichen Erkenntniß."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s06-001",
     "kind": "text",
     "aa": 879,
     "text": "Es wird von allen, und so auch von unserm Autor der Fehler begangen, daß anstatt, daß es heißen sollte: die Erkenntniß ist wahrscheinlich, vom object die Rede ist, in so fern ich das object für wahrscheinlich halte, obgleich mein Erkenntniß wahr und gewiß seyn kann. Mein Erkenntniß ist wahrscheinlich, wenn der Fälle mehr sind, die die Sache, als die das Gegentheil bestimmen. Wenn man das vor Augen hat: so kann man wohl sagen, eine Erkenntniß ist wahrscheinlich, aber die Logic des Wahrscheinlichen ist keine reine Logic. Sie würde eine Wissenschaft seyn, die zum Gegenstande die objecte hätte, wozu die Ursachen an sich möglich sind, wo wir denn sehen, wie viel Ursachen",
     "ms": [
      {
       "p": 262,
       "i": 312
      }
     ]
    },
    {
     "id": "wiener-s06-002",
     "kind": "text",
     "aa": 880,
     "text": "zur Wirkung, und wie viel zum Gegentheile da sind. So ist durch einen Grund zu vermuthen, daß das, wofür mehr Gründe sind, wahrscheinlich ist, wiewohl es nicht zureichend ist. Alle Wahrscheinlichkeit ist ein Bruch, dessen Nenner die Zahl aller möglichen Fälle ist, und deßen Zähler die Zahl der Treffer enthält. Z.B. wenn einer mit 2 Würffeln 8 werfen soll: so hat er 6 Treffer, und 36 mögliche Fälle. Der Bruch ist also 6/36, wovon der Gegner 30 und er 6 Fälle hat. Wahrscheinlichkeit des objectes beruhet auf dem Verhältniß, welche Gründe eine Begebenheit zur völligen Gewißheit hat. Man kann also die Wahrscheinlichkeit nicht recht einsehen, wenn man nicht weiß, was zur völligen Gewißheit gehört. Denn da man zur Wahrscheinlichkeit ein großes Maß haben muß, und das Maß bey jedem unzureichenden Grunde der zureichende Grund ist: so ist das Maß zur Wahrscheinlichkeit die Gewißheit. – Die Mathematic kann hier ein gewißes Maß angeben, wodurch sie die Größen vergleicht, weil Größen nichts enthalten, als das, was gleichartig ist. Aber in der philosophie geht das nicht an, weil hier die Gründe der möglichen Treffer alle ungleichartig sind. Wenn ich alle mögliche Fälle nehme, und sage: hierin müssen die Treffer auch enthalten seyn: so ist das Verhältniß der Gründe des Vorwahrhaltens ungleichartig. Z.B. Es sind viele Zeugniße vor einen Beklagten. 1.) die That war geschehen, da er nicht zu Hause war. Er war auch wirklich nicht zu Hause. Dieses ist res facti. 2.) ein Anderer hatte ihn gesehen zu der Zeit. Hier ist die Glaubwürdigkeit des Andern der Grund. Die Gründe in der philosophie sind dennoch immer der qualitaet nach unterschieden, und können nicht numerirt, sondern ponderirt werden. Die Größe der Wahrscheinlichkeit kann oft in der philosophie nicht so bestimmt werden, weil die Gründe nicht gleichartig sind. Aber doch wird in der Erkenntniß hier nicht die Erkenntniß vor wahrscheinlich angesehen, sondern das Object. Die Erkenntniß an sich kann wahr seyn.",
     "ms": [
      {
       "p": 263,
       "i": 586
      },
      {
       "p": 264,
       "i": 1507
      }
     ]
    },
    {
     "id": "wiener-s06-003",
     "kind": "text",
     "aa": 885,
     "text": "Was die Wahrscheinlichkeit der Erkenntniß betrift: so sind das Gründe des Vorwahrhaltens vor aller Untersuchung. Wenn ich in dem Erkenntniß keinen Widerspruch, sondern Zusammenhang mit den andern Dingen finde: so sag ich nicht: das object ist wahr. Die Wahrscheinlichkeit der Erkenntniß bedeutet nicht viel, sondern es kommt darauf an, ob das Object wahr sey? – Menschen denken oft, wenn sie etwas wahrscheinliches vorher sagen, sie haben einen rechten Triumph erhalten, wenn sie gleich keine Gründe hatten, das vor wahr zu halten, es kam von ungefähr, obgleich das Urtheil ungegründet war, die Erkenntniß war darum gar nicht wahrscheinlich, wenn sie gleich die Erkenntniß von einem wahrscheinlichen objecte war. Der wahrscheinlichen Erkenntniß müssen wir nicht immer folgen. Sie ist nur der Anfang des Anfanges der Prüfung, und kann uns darauf führen, über die Wahrheit weiter nachzuforschen. Zweifelhaft ist eine Erkenntniß, wenn Gründe vor, und wider dieselbe sind. Es kann dawider kein Zweifel gemacht werden, weil sie eben so wohl das Gegentheil behauptet. Dieses indifferente im Logischen ist eben das, was das indifferente im practischen, wo also der Verstand ganz indifferent in Ansehung der Erkenntniß ist. Bezweifelt ist die Erkenntniß, wenn man sich schon dafür declarirt hat, aber auf der andern Seite Gegengründe dawider gebracht werden. Zweifel bedeutet ein bloßes Hinderniß des Vorwahrhaltens Es ist der Zustand des Gemüthes, wenn etwas ist, das uns am Beyfall hindert. Man kann ihn objectiv und subjectiv betrachten. Wenn der Zweifel objectiv deutlich ist: so ist er Einwurf. Ist er objectiv undeutlich und dunkel: so ist er Skrupel. Im gemeinen Redegebrauch wird dubitatio, subjectiver Zweifel, und dubium, objectiver Zweifel mit einander verwechselt. Man sagt: ich habe viel Zweifel dagegen, wenn das nicht objective Gründe sind: so könnte man wohl vor sich zweifeln. Aber man kann das dem Andern nicht als Gründe vortragen, um ihn zu bewegen, daß er auch zweifeln soll. Die Gründe des subjectiven Vorwahrhaltens sind in der Erziehung zu setzen, indem man seinen Kopf noch nicht recht daran gewöhnen kann, eine andere Meinung anzunehmen. – Man hat einen Skrupel wider eine Erkenntniß, wenn man das Hinderniß des Vorwahrhaltens nicht von sich nehmen kann. Dieser Skrupel kann auch subjectiv seyn. Er ist das, was uns bey Erkenntnißen bange macht, daß wir nicht mit ganzer Seele der Erkenntniß beyfallen wollen, weil sich etwas in uns dem völligen Beyfall entgegen setzt. – Skrupel sind nicht zu verachten. Denn im Anfange sind alle unsere Erkenntniße dunkel, und so wird uns im Anfange freylich Manches scrupulös vorgetragen, weil es Gründe sind, die dem objecte widerstreiten. Wird ein Skrupel klar: so wird er ein Einwurf, und ehe er klar gemacht ist, muß also der Skrupel nicht verworfen werden. Es zeigt ein großes Talent an, wenn man einem Andern seine Skrupel klar machen kann. Einwürfe setzen voraus, daß Erkenntniße schon vor wahr genommen sind. Zweifel setzen das nicht voraus, sondern wir können da immer problematisch verfahren. – Einwürfe widerlegen noch nicht, sondern sie sollen die Erkenntniß nur schwächen. Sie haben deshalb bey jedem Vorwahrhalten den Nutzen, daß die Gewißheit der Erkenntniß zu größerer Vollkommenheit kommt. Daher kann eine Sache nicht mehr angegriffen werden, weil der Gegner alle Gründe des Gegentheiles aufgerichtet hat. Es bedürfen Gesetz und Religion folglich allerdings Einwürfe, weil sie dadurch zu größerer Gewißheit kommen. Zweifel können beantwortet werden. Einwürfe werden widerlegt. Ein jeder Zweifel muß nicht nur beantwortet, denn alsdenn wird er nur bloß abgewiesen, sondern er muß auch aufgelöst werden, indem ich zeigen muß, wie er hat entstehen können. Geschieht das nicht: so ist das Hinderniß des Vorwahrhaltens noch nicht völlig gehoben, und der Grund zu neuen Zweifeln bleibt da. Hieraus fließt, daß Widerlegung der Einwürfe freundschaftlich geschehen müße, so daß man anstatt den Andern bloß zurück zu treiben, auch forschen muß, wodurch ein sonst guter Verstand auf solche Einwürfe hätte können gebracht werden, d.i. durch welchen Schein die Einwürfe entstanden sind. Finden wir denn Verwechselung: so müßen wir ihm diese erklären, und so nodum resolvere, non secare. Probabilitas ist Wahrscheinlichkeit, verisimilitudo, Scheinbarkeit. Eine Erkenntniß als Erkenntniß kann Scheinbarkeit heißen, die Sache aber, die ich vor wahr, oder wahrscheinlich halte, ist darum nicht verisimile, sondern probabel, oder improbabel. Der Unterschied beruht darauf. Bey der Wahrscheinlichkeit vergleiche ich die Gründe des Vorwahrhaltens zur Gewißheit. Ist das Vorwahrhalten größer, als die Hälfte des zureichenden Grundes: so ist die Erkenntniß wahrscheinlich. Ist es weniger, als die Hälfte: so ist das Erkenntniß unwahrscheinlich. Denn wenn ich mehr, als die Hälfte des Grundes habe: so habe ich mehr, als Gründe zum Gegentheil überhaupt möglich sind, und diese nothwendig auch mehr, als alle Gründe, die auf der andern Seite möglich sind. In der Mathematic kann man den zureichenden Grund des Vorwahrhaltens bey der Wahrscheinlichkeit mit Zahlen bestimmen, weil die Sachen gleichartig sind in den Gründen der Möglichkeit, und wenn Sachen nur von gleicher Art sind: so dürfen sie nur zusammen gezählt werden, ob meine Gründe mehr, als die Hälfte ausmachen. Aber die Gründe der Wahrheit in philosophischen Erkenntnißen kann ich nur discursiv bestimmen. Denn dadurch, daß hier die Gründe nicht gleichartig sind, geschiehts, daß ich nicht sagen kann: hier ist die Hälfte des zureichenden Grundes. Denn man kann nicht anzeigen, wie sich ein Grund zum zureichenden Grund verhält, weil zwischen ungleichartigen Dingen kein gleiches Verhältniß angegeben werden kann. Gesetze und Exempel aus der Natur, ohne Zeugniße Anderer sind Gründe von der Art. Wo ist hier die Hälfte zu finden? Daher ist eine Logic der Wahrscheinlichkeit ein unmögliches Unternehmen. Ja wenn man darunter den Theil der Logic versteht, wo die Begriffe des Wahrscheinlichen und Zweifelhaften etc. verständlich gemacht werden: so kann das füglich geschehen. Sollen aber Grade angegeben werden, um zu beurtheilen, ob es wahrscheinlich sey, oder nicht? so ist es deshalb unmöglich, weil man bey der Gewißheit nicht eher die Einsicht in die Gründe zur Gewißheit erlanget, als bis man wirklich zur Gewißheit gelanget ist, und da in der philosophie die Gründe des Vorwahrhaltens ungleichartig sind: so können wir sie nur ponderiren, d.i. versuchen die Gründe an unserem Beyfalle zu messen. Wir können sie aber nicht meßen, sondern die Meßkunst der Wahrscheinlichkeit trifft auf die Mathematic. – Man hat in den gewöhnlichen Logiken immer gewiße Regeln, nach denen der Verstand bey der Wahrscheinlichkeit gebraucht werden soll. Aber die Regeln sind noch dunkeler zu verstehen, als wenn man sich ihrer bedienen wollte. Sie helfen uns auch im Gebrauche nichts, sondern es gehört bloß Ueberlegung dazu. – Verstand ist das Vermögen der Regeln. Urtheilskraft ist das Vermögen zu unterscheiden, ob eine Regel an dieser Stelle gebraucht werden soll, also das Vermögen unter eine Regel zu subsumiren. Diesem Vermögen kann ich nicht bloße Regeln geben, die darüber gesetzt werden. Bey der Untersuchung der Wahrscheinlichkeit also in der philosophie, wohin doch die Urtheilskraft sich auch erstreckt, gibt es keine Vorschriften der Wahrscheinlichkeit. Eine Mathematic der Wahrscheinlichkeit gibt es wohl, und diese wird auch ausgeübt. Z.B. bey Schulen im calculiren wird Anleitung gegeben von der beßten Art, die Wahrscheinlichkeit heraus zu bekommen, im Verhältniß der Fehler der andern Methoden. Z.B. ich rechne die Höhe eines Sterns 20 Mahl aus. Das eine Mahl kommt heraus 10 Grade, 13 Minuten das andere Mahl 13 Grade, 11 Minuten etc. Alle diese facit rechne ich zusammen, und dividire damit 20 so habe ich die wahrscheinliche Höhe. So bestimmt die Mathematic gewiße Regeln, nach welchen das object wahrscheinlich erkannt werden kann. In der philosophie aber ist das unmöglich. Exempel könnet ihr wohl geben, um darin eure Urtheilskraft zu üben. Aber Regeln werdet ihr nie angeben können, wie fern etwas wahrscheinlich sey, oder nicht. Die probabilitaet geht auf Sachen. Die Scheinbarkeit geht darauf, ob in der Erkenntniß mehr Gründe vor, als wider die Sachen sind. Denn wenn ich die Gründe des Vorwahrhaltens mit dem zureichenden Grund vergleiche und keine Gründe des Gegentheiles habe: so kommt Scheinbarkeit heraus. Z.B. Einer führt an, das denkende Wesen, die Seele wird noch im Tode nicht aufhören weil sie im Leben vom Körper nicht abgehangen hat, und ich wendete ein etwa die Zufälligkeit der Zeugung: so frage ich: ist es hier wahrscheinlich? Der Einwurf will nichts sagen, folglich ist die Erkenntniß scheinbar. Wenn bey einem Grunde etwas vor wahr zu halten kein Grund des Gegentheiles da ist: so ist die Erkenntniß scheinbar. Weiß ich einen Grund, der aber eben das sagt, was im Gegentheile steht: so ist es zweifelhaft. Wenn ich aber die Sache mit dem zureichenden Grunde der Wahrheit vergleiche: so ist es wahrscheinlich. Denn alle Wahrscheinlichkeit besteht in der Annäherung der Vorwahrhaltung zur Gewißheit. Objective Zweifel sind der Grund, der eine Erkenntniß falsch macht. Subjectiver Zweifel ist der Zustand des Gemüthes, da wir eben so viele Gründe vor, als wider die Sachen haben. Der Mensch ist im Zweifel subjectiv, hat Zweifel objectiv. Grundsätze des Zweifels sind 1.) der Grundsatz des Behauptens. Der dieser Maxime: es ist alle Erkenntniß in der Absicht zu behandeln, etwas dadurch zu behaupten, heißt der dogmatische Grundsatz. Dogmatisch ist eine Erkenntniß, wodurch alle gemeinte Dinge behauptet werden. Die Maxime, eine Erkenntniß in der Absicht zu behandeln, daß man die völlige Ungewißheit und Unmöglichkeit zur Gewißheit zu gelangen, einsieht, ist 2.) die sceptische Maxime, die Art zu philosophiren, wo man auf alle behauptende Erkenntniße Verzicht thut, und alle Gründe seines Urtheiles so ansieht, daß man ihnen gleich starke Gegengründe entgegen setzt. Dogmatisch behandeln wir etwas, wenn wir mit völliger Gewißheit die Sache entscheiden, sceptisch, wenn wir die völlige Ungewißheit zu zeigen suchen. Beyde sind allgemein genommen fehlerhaft. Denn manche Erkenntniße sind unmöglich, da doch der dogmatismus sie gewiß zu machen sucht. Z.B. Von der Veränderung der Witterung. Aus der Aussicht in die allgemeine Beschaffenheit der Dinge kann man dogmatisch nicht ausmachen, ob es ein einfaches Wesen gebe. Hier müssen wir oft einen andern Weg einschlagen, um etwas auszumachen. Sceptisch zu verfahren vernichtet alle unsere Bemühung, und es ist ein antilogischer Grundsatz, ein Versuch, Unwissenheit abzutreiben. Denn wenn ich die Erkenntniß dahin bringe, daß sie sich zuletzt vernichtet: so ist es so viel, als wenn wir alle Erkenntniße der Menschen vor nichts ansähen. Ungeachtet der Scepticismus so schädlich ist: so hindert das doch nicht, daß die philosophische Methode etwas, das ungewiß ist zu tractiren, indem ich mich bemühe, die Ungewißheit auf den höchsten Grad zu treiben, in der Hoffnung, durch dieses Verfahren zuletzt die Spuren der Wahrheit zu entdecken, gut sey. Es ist die suspension des Urtheiles, um zur Gewißheit zu gelangen. Diese methode also, wo wir nicht nur zweifeln an Allem, sondern auch die Ursache des Widerstreites des Verstandes mit sich selbst aufsuchen, um dadurch die Wahrheit zu erklären, ist die critische methode. Wir haben demnach eine dogmatische, sceptische und critische methode. –",
     "pages": [
      {
       "p": 881,
       "i": 590
      },
      {
       "p": 882,
       "i": 3167
      },
      {
       "p": 883,
       "i": 5730
      },
      {
       "p": 884,
       "i": 8308
      },
      {
       "p": 885,
       "i": 10887
      }
     ],
     "aaEnd": 885,
     "ms": [
      {
       "p": 265,
       "i": 471
      },
      {
       "p": 266,
       "i": 1408
      },
      {
       "p": 267,
       "i": 2273
      },
      {
       "p": 268,
       "i": 3099
      },
      {
       "p": 269,
       "i": 3933
      },
      {
       "p": 270,
       "i": 4738
      },
      {
       "p": 271,
       "i": 5587
      },
      {
       "p": 272,
       "i": 6441
      },
      {
       "p": 273,
       "i": 7310
      },
      {
       "p": 274,
       "i": 8149
      },
      {
       "p": 275,
       "i": 8916
      },
      {
       "p": 276,
       "i": 9649
      },
      {
       "p": 277,
       "i": 10313
      },
      {
       "p": 278,
       "i": 11027
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-004",
     "kind": "text",
     "aa": 885,
     "text": "Dogmatisch mit allen Erkenntnißen zu verfahren, d.i. entschiedene Gewißheit hoffen, ohne die Gründe des Gegentheiles in Erwägung zu ziehen, bringt einen unzulänglichen Schein hervor. Denn wenn ich glaube, es lasse sich nichts mehr wider die Wahrheit aufsuchen: so höre ich gleich im Nachforschen auf. Aber die Sache hat denn auch wenig Fundament. Man kann wohl dogmatisch etwas versuchen, aber nicht dogmatisch verfahren. Man muß bey der dogmatischen methode auch sceptisch verfahren, d.i. wenn ich probire, ob nicht bey der Sache auch etwas angeführt werden kann, das ich auf die Seite eines Gegners setzte. Der scepticismus ist also, wo auf beyden Seiten dogmatisch behauptet wird. Dieses kann man bey sich selbst thun, aber welcher von Beyden kann nun mehr entscheiden? Nun kommt die critische methode, d.i. ich untersuche die Quellen der dogmatischen und sceptischen methode, und denn fang ich an zu sehen, auf welchen Gründen eine Behauptung, und auf welchen ihr Gegentheil beruhe. Die critische ist also die Zwischenmethode, durch welche eine Erkenntniß zur Gewißheit gelangen kann. Sie beugt dem dogmatischen Schein vor, weil sie dem dogmatism den scepticism entgegen setzt, und indem sie dadurch die Gründe von Beyden erwogen hat, kann sie allein decidiren, wie viel Gründe ich zum Vorwahrhalten habe. Der Scepticismus ist eine Entsetzung aller Belehrung der Vernunft, und widerspricht sich selber. Er gibt Alles vor Schein aus, und doch unterscheidet er den Schein von der Wahrheit, weil er uns warnet, nichts vor Wahrheit anzunehmen, so muß er doch ein Merkmahl haben, worin er Wahrheit erkennen kann, und da er den Grund angibt, warum man an alle dem zweifeln soll, so muß doch auch wohl das Gegentheil möglich seyn. Er kann also durch sich selbst widerlegt werden. Die Zweifler der alten Zeit waren sehr merkwürdig. Pyrrho ist der erste Zweifler. Er lebte nach den Zeiten des Socrates, und zweifelte an allen Sachen, welches er so ausdrückte: non liquet. Dieses ist der Pyrrhonische",
     "ms": [
      {
       "p": 279,
       "i": 193
      },
      {
       "p": 280,
       "i": 880
      },
      {
       "p": 281,
       "i": 1554
      }
     ]
    },
    {
     "id": "wiener-s06-005",
     "kind": "text",
     "aa": 886,
     "text": "Zweifel. Aber es ist auch der academische Zweifel merkwürdig. Denn nach Platons Tode setzte Speusippus seine Schule fort, nach ihm Arkesilaos, die dritte Schule Carneades. Plato hatte des Socrates methode in seinen dialogen, er war aber gar kein Sceptiker, sondern er that das nur, um durch das lange suspendiren die Wahrheit endlich zu eruiren. Speusippus blieb ihm getreu, und lehrte so dogmatisch als Plato. Aber Arkesilaos errichtete eine sceptische Schule. Das ist der academische scepticismus. Er sagte: es ist alles so ungewiß, daß es so gar ungewiß ist, ob das ungewiß ist, das nennete man ein rechtes [ Textlücke: AA: Purgativ ] der Vernunft, daß er, indem er die Vernunft zu reinigen suchte, die Vernunft selbst mit abführte. Die dritte Schule des Carneades bestand aus entsetzlichen Sophisten und Dialectikern, was sie heute behaupteten, morgen verneinten. Hypothese, definirt der Autor, ist eine Meinung, und zwar der philosophen, da sie aus den Erscheinungen die Welt erklären. Aber Meinung erklärt er noch nicht hinlänglich.",
     "ms": [
      {
       "p": 282,
       "i": 313
      },
      {
       "p": 283,
       "i": 1038
      }
     ]
    },
    {
     "id": "wiener-s06-006",
     "kind": "text",
     "aa": 886,
     "text": "Der Unterschied zwischen Meinung und Hypothese ist dieser. Meinung ist ein unvollständiges Vorwahrhalten aus unzureichenden Gründen, aus denen ich nichts ableite. Hypothese aber bedeutet das Urtheil von der Wahrheit aus Gründen, die zulänglich sind. Wenn etwas als Grund angenommen wird, daraus ich von gegebenen Folgen den hinreichenden Grund einsehen kann: so ist es hypothesis. Sie ist demnach das Vorwahrhalten einer Voraussetzung, nicht einer Erkenntniß, so fern sie selbst aus Gründen abgeleitet ist, sondern weil sie mittelbar gewiß ist. Unmittelbare gewiße Erkenntniße sind Erfahrung und axiomen. Axiom ist, wenn ich eine Erkenntniß vor gewiß annehme, weil sie aus der Natur der Sache a priori erkannt werden kann. Erfahrungs-Erkenntniße werden aus dem Sinn geführt.",
     "ms": [
      {
       "p": 284,
       "i": 717
      }
     ]
    },
    {
     "id": "wiener-s06-007",
     "kind": "text",
     "aa": 888,
     "text": "Mittelbar wird eine Erkenntniß gefolgert aus einer Andern, oder sie wird vor wahr gehalten aus einem Grund, und das ist die Hypothese. Wenn ich eine Erkenntniß darum für wahr halte, weil sie ein tüchtiger Grund zu andern Gründen ist: so ist es eine Hypothese. Ich nehme etwas an, und dann sehe ich, was vor andere Kenntniße sich daraus ableiten lassen. Ich nehme sie also an, nicht um des Grundes willen, woraus sie abgeleitet ist, sondern ich halte sie für wahr um der Gründe willen, die aus ihr abgeleitet werden können. Es ist also etwas umgekehrtes im Vergleich mit andern Erkenntnißen. Das Vorwahrhalten gründet sich darauf. Ich nehme die Erkenntniß willkührlich als einen Grund an, aber durch die Annahme deßelben kann ich Gründe angeben von andern Erkenntnißen, die gewiß wahr sind, und in so fern es also demnach mit der Wahrheit verknüpft ist, heißt es Hypothese. Alles Vorwahrhalten einer Hypothese gründet sich darauf, durch sie als einen Grund andere Erkenntniße als Folgen zu erklären. Ich schließe also eigentlich aus der Wahrheit der Folgen auf den Grund, und schließe also die Wahrheit des Erkenntnißes eigentlich aus den Folgen. Z.B. ich sage: es ist ein central Feuer in der Erde vorhanden, weil die Feuer speyende Berge, Erdbeben und andere phaenomene das beweisen. Aus den Folgen auf den Grund zu schließen ist auch ein criterium der Wahrheit. pag. 88 wenn nähmlich wahre Folgen daraus abgeleitet werden: so schließ ich auf die Wahrheit des Erkenntnißes. Ob es aber gleich mit ein criterium der Wahrheit ist: so ist es doch bey weitem nicht hinreichend, sondern nur denn ist die Erkenntniß wahr, wenn alle Folgen aus der Erkenntniß wahr sind. Aber da wir unmöglich alle Folgen aus der Erkenntniß ableiten können: so gibt auch wirklich dieser Weg a posteriori einen unsichern Schluß, daß der Grund der wahre Grund sey. Aus einem falschen Grunde können einige wahre Folgen gezogen werden, weil doch zum Theil Wahrheit darin ist. Eine Hypothese bleibt also immer Hypothese, d.i. wird keine völlige Gewißheit. Denn ich erkenne doch nur die Zulänglichkeit der Erkenntniß zu einigen Folgen, und nur die Zulänglichkeit der Erkenntniß zu allen möglichen Folgen würde apodictische Gewißheit machen. Die Ableitung vieler Folgen betrifft noch gar nicht die Gewißheit einer Erkenntniß. Denn andere Gründe können eben die Erkenntniß nach sich ziehen. Es macht also wohl einen Grund der Wahrscheinlichkeit, aber nicht der Gewißheit. Einige Wissenschaften leiden gar keine Hypothesen. Z.B. die Mathematic. In der Naturwissenschaft aber sind sie unentbehrlich. Wenn sich doch aber so viele Folgen, als wir nur immer auffinden können, alle aus einem angenommenen Grunde ableiten laßen: so wächst die Hypothese immer in der Wahrscheinlichkeit, und zwar so sehr, daß, obgleich sie nie apodictisch gewiß seyn kann, doch ein analogon der Gewißheit daraus wird, d.i. man ergibt sich derselben, wie der völligen Gewiß heit. Z.B. bey der Hypothese des Copernicanischen Systems ist man noch auf keine einzige Beobachtung gestossen, die daraus nicht abgeleitet werden könnte. Es ist hier also ein analogon der Gewißheit. Apodictisch gewiß aber ist es nicht. Aber es ist doch möglich, daß der Schöpfer eine andere Einrichtung der Planeten gemacht hat, wie das die Hypothese des Tycho de Brahe zeigt. Unsere Ueberzeugung aber gründet sich darauf, daß so viel Erscheinungen auch gefunden werden, sich diese alle aus dem System des Copernicus ableiten lassen. Wir approximiren demnach der apodictischen Gewißheit, und sie ist comparative damit verbunden.",
     "pages": [
      {
       "p": 887,
       "i": 724
      },
      {
       "p": 888,
       "i": 3317
      }
     ],
     "aaEnd": 888,
     "ms": [
      {
       "p": 285,
       "i": 655
      },
      {
       "p": 286,
       "i": 1417
      },
      {
       "p": 287,
       "i": 2147
      },
      {
       "p": 288,
       "i": 2865
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-008",
     "kind": "text",
     "aa": 888,
     "text": "Eine Hypothese ist nicht eine vollständig vor wahr gehaltene Erkenntniß, aber einiges in der Erkenntniß muß völlig gewiß seyn, und zwar",
     "ms": [
      {
       "p": 289,
       "i": 42
      }
     ]
    },
    {
     "id": "wiener-s06-009",
     "kind": "text",
     "aa": 888,
     "text": "1.) die Möglichkeit einer Voraussetzung muß völlig gewiß seyn, wenn ein angenommener Grund möglich ist: so bleibt die Sache dennoch noch ungewiß. Denn es kann auch ein anderer Grund Statt finden, zu dem die Erkenntniß paßt. Aber die Möglichkeit selbst muß völlig gewiß in der Hypothese seyn. Z.B. ich wollte das commercium pnevmaticum annehmen, d.i. die Kraft, durch die der Mensch wohl auf andere Gemüther wirken kann. Diese Hypothese läßt sich gar nicht annehmen, sondern es ist eine pure Erdichtung. Denn die Möglichkeit dieser Voraussetzung ist noch nicht ein Mahl gewiß. Wenn wir von der Möglichkeit gewißer Kräfte gar keine Kenntniß haben: so müssen wir sie nicht als Hypothesen zum Grunde legen. Der Gebrauch davon darf nur der Gewißheit approximiren, aber die Möglichkeit muß gewiß seyn.",
     "ms": [
      {
       "p": 290,
       "i": 670
      }
     ]
    },
    {
     "id": "wiener-s06-010",
     "kind": "text",
     "aa": 888,
     "text": "2.) Die Consequenz muß völlig gewiß seyn, d.i. wenn ich etwas vor gewiß halte: so müßen die Folgen, die ich daraus schließe, völlig gewiß seyn. Sonst wird es für eine pure chimaere gehalten. – Z.B. wenn man bey einer Dieberey die Urheber kennen will: so macht man eine Hypothese, und da muß es"
    },
    {
     "id": "wiener-s06-011",
     "kind": "text",
     "aa": 888,
     "text": "1.) möglich seyn, daß diese Leute es thun konnten. Wenn das ist: so muß"
    },
    {
     "id": "wiener-s06-012",
     "kind": "text",
     "aa": 888,
     "text": "2.) auch die Vollziehung derer die gestohlen complet begriffen seyn, d.i. es muß sicher folgen, daß sie es haben thun können."
    },
    {
     "id": "wiener-s06-013",
     "kind": "text",
     "aa": 889,
     "text": "3.) Zur Hypothese wird die Einheit erfordert. Es ist nicht mehr, als eine Voraussetzung nöthig, um eine Vielheit von Folgen zu erklären. So bald wir viele Voraussetzungen machen, verliert alle Hypothese in ihrer Wahrscheinlichkeit. Bey der Einheit schließe ich: weil viele Folgen zu einem Grunde passen, desto wahrscheinlicher ist es, daß der Grund wahr, und der rechte sey. Wenn aber einige, aber nicht viele Folgen sich aus der Hypothese ableiten lassen, und immer neue Hypothesen gemacht werden müssen, um sie zu unterstützen: so ist wenig Wahrscheinlichkeit da. – Hypothesis subsidiaria, eine hülfleistende Hypothese ist, wenn etwas angenommen wird, um einer Hypothese zu Hülfe zu kommen, die sich ohne eine neue Hypothese nicht würde erhalten können. Dabey verliert eine Hypothese alle ihre Glaubwürdigkeit. –",
     "pages": [
      {
       "p": 889,
       "i": 672
      }
     ],
     "aaEnd": 889,
     "ms": [
      {
       "p": 291,
       "i": 104
      },
      {
       "p": 292,
       "i": 814
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-014",
     "kind": "text",
     "aa": 889,
     "text": "Von dieser Art war die Erklärung des Tycho de Brahe, um das Stillstehen der Planeten zu erklären. Er machte Cyclos, und um diese abweichende Cyclos zu erklären, nahm er Cyclos in den Cyclos an, und so immer weiter, und da sieht man, daß es ohne Ende fortgeht. In der philosophie erkläret sich das von der hypothese Gesagte alles deutlich, und es werden oft sehr wahre und richtige Folgen aus hypothesen abgeleitet. Jeder Mensch, der experimente macht, macht zuerst hypothesen, indem er glaubt, daß dieser, oder jener Versuch solche Folgen haben werde. Er darf bey mißlungener Untersuchung nicht gleich den Muth sinken lassen, so wie der Alchymist noch immer an der hypothese Gold zu machen arbeitet.",
     "ms": [
      {
       "p": 293,
       "i": 699
      }
     ]
    },
    {
     "id": "wiener-s06-015",
     "kind": "text",
     "aa": 891,
     "text": "In der philosophie, vorzüglich in der Naturwissenschaft können sie nicht entbehrt werden, indem wir das, was als die rechte Ursach der Dinge statt finden kann, auch dafür halten. Wir nehmen nach der Analogie der Dinge eine und alle andere Ursachen an. So ist z.B. eine hypothese, daß die Bergkristalle sich prismatisch bilden. Es gibt aber Wissenschaften, wo gar keine hypothesen statt finden, und zwar in der metaphysic. Z.B. daß die Seele des Menschen auch ohne den Körper in der Welt wirken kann, wobey zugleich eingeräumt werden kann, daß sie nach dem Tode erscheinen kann, und auf die Seelen anderer Menschen wirken. Solche Hypothesen hinzu machen ist nicht erlaubt, weil ich die Möglichkeit solcher Wirksamkeit nicht beweisen kann. Die Möglichkeit muß immer durch die Erfahrung gegeben werden. Wenigstens muß uns Aehnlichkeit mit dieser Kraft gezeiget werden, damit ich einige Ursache habe, den Satz anzunehmen. Ueberredung. Man könnte sagen, daß die Vorwahrhaltung aus Gründen, von denen man selbst nicht weiß, ob sie subjectiv oder objectiv sind, eine Ueberredung sey. Wir sind von etwas eingenommen, und nennen es doch eine Ueberredung, weil wir von unserm Vorwahrhalten nicht Rechenschaft geben können, und nicht sagen können, ob die Ursache des Vorwahrhaltens in unserm Sinne liege, und unsere Neigung betrifft, oder ob der Verstand es aus der Kenntniß des Objectes her hat. Wenn das nicht statt findet: so sind wir uns bewußt, daß es eine pure Ueberredung sey. Die Ueberredungen gehen oft vor der Ueberzeugung vorher. Das trifft aber selten bey dem ein, der viel eingesehen, und viel gelernet hat, um zur Gewißheit zu gelangen, weil er sie gut von Ueberzeugungen unterscheiden kann. Ferner wer viel betrogen und gewitziget ist, ist nicht so leicht zu überreden. Indeß sind es manche Leute, die sich sehr mit Hoffnung speisen. Das ist aber nicht gut. Denn das Gemüthe muß auf Alles gefaßt seyn. Es zeigt eine seichte Denkungsart an wenn sich ein Mensch so leicht überreden läßt, oder selbst wovon überredet. Dieses ist eine große Ursache davon, daß Menschen in der Religion keine Schwierigkeit finden, diesen und jenen Satz leicht anzunehmen. Sie überreden sich leicht, ob sie gleich keinen Grund davon angeben können. Mancher Mensch kann das nicht, sondern er muß etwas haben, das ihm genug thut, und er gibt nicht gleich Gründe an, von denen er nicht weiß, ob sie subjectiv oder objectiv sind. Wir sehen also wohl, daß wir keinen Menschen tadeln müßen, weil er nicht so gleich der Sache Beyfall geben will. Denn alle Menschen sind darin sehr verschieden. Der eine kann sich leicht davon überreden, der andere wünscht auch hundert Mahl daß die Sache so seyn möchte, und doch will sein Verstand nicht sogleich applaudiren, weil er nähmlich objective Gründe verlangt. – Es gibt etwas, worauf der Beyfall beruht, der eine Mischung von Neigung und Verstand ist. Dieses nun sucht mancher Mensch nicht gehörig auseinander zu setzen, so daß er untersuche, welches von Beyden seinen Beyfall hervor bringt. – Viele Menschen nennen Ueberzeugung, was wirklich Ueberredung ist. Ueberredungen sind aber nicht immer falsch. Nur dieser Mensch hat die Sache aus Ueberredung, nicht aus Ueberzeugung. Der Mensch kann einige Gründe vom Objecte durch den Verstand erkennen. Aber es kommen doch viele subjective Gründe hinzu. Z.B. Vom Beyspiel berühmter Männer, die doch, wie man sagt, keine Narren waren, vom hohen Alterthum der Sachen, und anderes mehr. Dieses ins gesammt mischt sich also zusammen, und bringt den effect hervor, der Ueberredung heißt. Die Menschen können durch Ueberredung gewiße, aber auch unwichtige Sachen annehmen. Es liegt denn gar nicht am Herzen, wenn einer gewiße Sachen gar nicht annehmen will, sondern am Kopf. Z.B. Aeltern persuadiren sich leicht, daß ihre Kinder unschuldig sind, und daß sie von Nachbarskindern verführt werden, woher entsteht dieser Hang? Sie bilden sich das aber ein, wenn gleich ein Fremder sieht, daß der Junge selbst ein Taugenichts ist. Der Hang der Neigung ist so wichtig, daß sie mit subjectiven und wirklichen halbirten Gründen vorlieb nehmen. Ein anderer fordert taugliche Gründe, und läßt sich nicht so leicht abfertigen. Dieses wird uns billig machen, wenn Andere das nicht gleich annehmen wollen, was uns so klar scheint; weil wir unsere Gründe doch nicht für die ersten principien der Gewohnheit ausgeben können.",
     "pages": [
      {
       "p": 890,
       "i": 1644
      },
      {
       "p": 891,
       "i": 4203
      }
     ],
     "aaEnd": 891,
     "ms": [
      {
       "p": 294,
       "i": 717
      },
      {
       "p": 295,
       "i": 1418
      },
      {
       "p": 296,
       "i": 2130
      },
      {
       "p": 297,
       "i": 2826
      },
      {
       "p": 298,
       "i": 3539
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-016",
     "kind": "text",
     "aa": 891,
     "text": "Wissenschaft. Ein Inbegriff von Erkenntniß. Wird eingetheilt in aggregat und system. Aggregat ist eine gemeine Erkenntniß. System ist eine Wissenschaft. System beruht auf der Einheit der idee, wie nähmlich das Mannigfaltige einer Erkenntniß neben einander gerichtet ist. Es setzt also eine idee vom ganzen voraus, in dem die Wissenschaft enthalten ist. Beym aggregat denkt man auch auf das Ganze zu kommen, indem man immer Theile hinzu thut. Beym aggregat gehen also die Theile vor dem Ganzen; beym system das Ganze vor den Theilen vorher. Dieser Unterschied ist sehr wichtig. Alle Metaphysic ist lauter aggregat und rhapsodie, weil wir die idee vom Ganzen noch nie gehabt haben, wie weit der Mensch über die Vernunft hinaus gehe, und auf was für Mittel er das baue, was er sagt. Daher ist die Metaphysic eine feste rhapsodie. Der Metaphysiker stübert Alles auf, von dem, was er glaubet, daß es mit dem Ganzen in Verbindung stehe. Aber er hat noch keinen Begriff vom Ganzen, und das Ganze ist ihm unbekannt. –",
     "ms": [
      {
       "p": 299,
       "i": 44
      },
      {
       "p": 300,
       "i": 858
      }
     ]
    },
    {
     "id": "wiener-s06-017",
     "kind": "text",
     "aa": 891,
     "text": "Wissenschaften sind historische und Vernunftwissenschaften. Es ist nicht gut, daß der autor unter Wissenschaften bloß eine Vernunft-Erkenntniß versteht. Denn auch von historischen Sachen kann ein System gegeben werden, indem ich nähmlich eine idee voran schicke, wornach das Mannigfaltige in der Historie geordnet werden soll. Leider aber sind die historici gemeiniglich rhapsodisten. Die idee könnte diese seyn. Die menschlichen Handlungen kommen aus der menschlichen Natur her, um die Bestimmung derselben complet zu erfüllen, wenn ich das mir zur idee mache, wie sich die menschliche Natur in den verschiedenen Zeitaltern entwickelt hat, und sich allmählig ihrer ganzen Bestimmung, d.i. der Vollendung aller ihrer Zwecke nähert, die der Menschheit auf Erden vorgelegt sind, so bring ich ein system in den Kopf, nach dem ich die Historie ordnen kann. Die Gewißheit ist entweder",
     "ms": [
      {
       "p": 301,
       "i": 562
      }
     ]
    },
    {
     "id": "wiener-s06-018",
     "kind": "text",
     "aa": 891,
     "text": "1.) empirische Gewißheit. Diese beruhet entweder auf eignen, oder auf fremden Erfahrungen, wenn ich ihres Zeugnißes halber die Sache vor gewiß halte. Sie heißt auch die historische Gewißheit. Sie ist aber eben so gut empirisch, wie meine eigene Erfahrung. Denn oft muß ich meinen Beobachtungen nicht so sehr trauen, als Manches Andern, von dem ich weiß, daß er ein achtsamer Mann ist, und daß ich wohl Manches in der Sache übersehe."
    },
    {
     "id": "wiener-s06-019",
     "kind": "text",
     "aa": 892,
     "text": "Die Gewißheit ist um so viel stärker. Denn ich attendire auf manche Sachen nicht so sehr, wie ein Anderer.",
     "ms": [
      {
       "p": 302,
       "i": 0
      }
     ]
    },
    {
     "id": "wiener-s06-020",
     "kind": "text",
     "aa": 892,
     "text": "2.) Vernunftgewißheit ist jederzeit apodictische Gewißheit, d.i. daß etwas nicht so seyn kann, sondern nothwendig so seyn muß. Die empirische Gewißheit ist nie apodictisch. Die mathematische Gewißheit ist apodictisch intuitiv, die philosophische apodictisch discursiv."
    },
    {
     "id": "wiener-s06-021",
     "kind": "text",
     "aa": 892,
     "text": "Willkührliche Wahrheit. Es scheint wunderlich zu seyn, daß der Autor von willkührlicher Wahrheit redet. Denn darum, daß ich etwas sage, ist es ja noch nicht wahr, sondern die Wahrheit muß ja im Objecte liegen. Wir sagen also besser willkührliche Sätze. Es sind solche Sätze, wo ich will, daß etwas so seyn soll, die also wirklich auf meinem Willen beruhen. Es sind Gebothe meiner Vernunft, wo die Erkenntniß von der Willkührlichkeit meiner Erkenntniß abhängt. Ich befehle z.B. der Zirkel soll in 360 abgetheilet werden, man soll mit 9 Ziffern und der 0 zählen. Dieses sind willkührliche Sätze. Denn man kann auch mit 4 Ziffern zählen, wie Leibnitz that. – Der Beweis wird eingetheilt in den acroamatischen Beweis, der discursiv ist, und in den mathematischen Beweis, der intuitiv ist. Der erste wird aus Begriffen, der andere aus der construction der Begriffe geführt. Von empirischen Beweisen reden wir hier gar nicht. Man muß also nicht gleich mit der Gewißheit seiner Sätze triumphiren, denn kein Satz in der philosophie kann mathematische Gewißheit haben. Denn ich kann keinem z.B. eine ganze Welt in der Anschauung darstellen. Bey jedem Beweise kommt vor",
     "ms": [
      {
       "p": 303,
       "i": 357
      },
      {
       "p": 304,
       "i": 1132
      }
     ]
    },
    {
     "id": "wiener-s06-022",
     "kind": "text",
     "aa": 892,
     "text": "1.) der Satz, der bewiesen werden soll."
    },
    {
     "id": "wiener-s06-023",
     "kind": "text",
     "aa": 892,
     "text": "2.) der Beweisgrund, und"
    },
    {
     "id": "wiener-s06-024",
     "kind": "text",
     "aa": 892,
     "text": "3.) die Folge des Beweises, wie nähmlich die Erkenntniß aus dem Beweißgrunde folge. Der Beweisgrund heißt argument. Bisweilen wird auch der Schluß argument genannt. In der philosophie muß man immer den Beweisgrund untersuchen, ob er bey der Erkenntniß möglich sey."
    },
    {
     "id": "wiener-s06-025",
     "kind": "text",
     "aa": 893,
     "text": "Solche Untersuchungen sind sehr wichtig, ob ein Beweisgrund hier oder da genommen werden kann, ob eine Erkenntniß sich auf die Erfahrung bezieht, oder ob wir ihr durch die Vernunft theilhaftig werden. Hierin, ob wir durch den Beweisgrund zu Folgen gelangen werden, kommt es in der metaphysic an, die die Folgen selbst examinirt. Die Logik-Erkenntniße sind unerweislich, sagt der autor, die auch ohne Bewilligung gewiß sind. Sonst bedeutet unerweislich auch eine Sache, die eines Beweises bedarf, aber keinen hat. Unerweislich falsch ist eine Erkenntniß, deren Falschheit nicht bewiesen werden kann. Ein indemonstrabler Satz ist ein unmittelbar gewisser Satz. Was ohne allen Beweisgrund gewiß ist, ist unmittelbar gewiß. Wenn in einer Erkenntniß auch noch so viel mittelbar gewiß ist: so ist doch eines immer unmittelbar gewiß. Also werden wir in allen Wissenschaften indemonstrable Sätze haben, die nicht nur den Beweis nicht nöthig haben wie der autor will, sondern in der philosophie ist ein jeder Satz indemonstrabel, so bald er unmittelbar gewiß ist. Der Beweis ist ein directer, d.i. ein positiver Beweis, oder er ist apagogisch, d.i. negativ. Der directe zeigt, daß der Satz wahr sey, der apagogische, daß das Gegentheil nicht wahr sey. Er refutirt bloß das Gegentheil. In der mathematic ist er sehr einleuchtend, aber in der philosophie muß man ihn sehr sparsam gebrauchen. Denn der apagogische thut nie so viel, als der directe Beweis. Dieser geht auch auf die Quellen zurück, woraus ein Satz herkommet. Der apagogische aber zeigt mir nur einen Fehler, und daß ich auf eine Ungereimtheit stossen würde, wenn ich den Satz nicht annähme. Ich habe den Satz dadurch wohl bewiesen, aber nicht begriffen. Sie sind in der philosophie aber auch deswegen nicht zu nehmen, weil ich meinen Gegner oft [ Textlücke ]widerlegen kann, indem wir deshalb beyde [ Textlücke: AA: falsch ] urtheilen. Wir haben Beyde Unrecht, und wenn ich den Andern widerlegt habe, kann er mich eben auch so gut ohne allen Widerspruch apagogice widerlegen, und keiner kann seinen Satz dadurch beweisen.",
     "pages": [
      {
       "p": 893,
       "i": 525
      }
     ],
     "aaEnd": 893,
     "ms": [
      {
       "p": 305,
       "i": 412
      },
      {
       "p": 306,
       "i": 1208
      },
      {
       "p": 307,
       "i": 1980
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-026",
     "kind": "text",
     "aa": 894,
     "text": "Historischer Glaube. Den Glauben bezieht unser autor bloß auf das Zeugniß. Wir unterscheiden aber etwas glauben, und einem glauben. Wir können etwas glauben, ohne daß es uns Jemand gesagt hat. Wir können einem glauben, wenn wir auf eines Zeugniß etwas angenommen haben. Beweise aus der Erfahrung können wohl darthun, daß die Sache sey, aber nicht die absolute Nothwendigkeit der Sache. Denn die Erfahrung gibt nur etwas Zufälliges. Beweise a priori aber geben apodictische Gewißheit, sie mögen aus Begriffen, oder aus der construction der Begriffe kommen. Wenn ich einen Gegenstand nicht aus bloßen Begriffen erkenne, sondern a priori in der Anschauung, die dem Begriff correspondirt: so construire ich den Begriff, und das ist eine demonstration. Dieser Beweis hat bey sich evidenz, d.i. der Beweis ist anschaulich. Dieses ist der mathematische Beweis. Der philosophische Beweis ist nie intuitiv, sondern jederzeit discursiv, d.i. wird immer mit Worten geführt. Da der philosophische Beweis nicht in der Anschauung erkannt wird: so kann er auch nicht demonstration heißen. Beyde Beweise sind apodictisch, aber mit dem Unterschiede, der eine in der Anschauung, der andere in puren Begriffen. Daher müssen wir das Wort demonstration nie von philosophischen Beweisen brauchen.",
     "pages": [
      {
       "p": 894,
       "i": 1051
      }
     ],
     "aaEnd": 894,
     "ms": [
      {
       "p": 308,
       "i": 556
      },
      {
       "p": 309,
       "i": 1218
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-027",
     "kind": "text",
     "aa": 895,
     "text": "Es ist eingerißen, daß man von demonstration redet, bey apodictischen Beweisen, die gar nichts intuitives an sich haben. Demonstration kommt her von monstrare vorzeigen, vor Augen legen. Daher kann es eigentlich wirklich nur gebraucht werden von Beweisen, wo der Gegenstand in der Anschauung dargestellt wird, und wo die Wahrheit nicht bloß discursiv, sondern auch intuitiv erkannt wird. Wir werden also hier der philosophie Schranken setzen, und ihre Beweise nie demonstrationen nennen, so apodictisch sie auch immer seyn mögen. In der mathematic kommt man gar nicht fort, wenn man Alles aus lauter Begriffen beweisen will, sondern sie müssen nothwendig construirt werden. – Die Griechen sind die ersten, die demonstrationen erfunden haben. Kein Volk hat gewußt, was demonstriren war, ehe es bey den Griechen aufgekommen war. Man sagt, die Griechen hätten ihre Weisheit von den Egyptern erlernt. Aber die Egypter sind Kinder gegen die Griechen. Sie hatten wohl mancherley Kenntniße, aber nicht Wissenschaften. Die Griechen klärten zuerst den menschlichen Verstand auf. Mehrere Geschichten sind alle in den autoren angeführt, die auf die demonstration dieses, oder jenes Satzes geführt haben. Hätten sie sie nur von den Egyptern erlernt, so hätten sie sie gar nicht mehr demonstriren dürfen. Die Egypter hatten bloß empirische Feldmesser, die nach gewißen Regeln ohne Beweise gut messen konnten. Kein Volk, als die, die es von den Griechen gelernt haben, weiß, was demonstrationen sind. Alle die, die es von ihnen nicht gelernt haben, haltens vor Umschweife, und doch sind demonstrationen der sichere Schritt, den die ausgebreitete Einsicht in die mathematic gemacht hat. Ohne dieses wären alle ihre Versuche trüglich, wie alle philosophische Versuche, wobey die menschliche Vernunft sich oft hintergeht. Beym Glauben ist ein Unterschied zu machen zwischen etwas glauben und einem andern glauben. Etwas glauben bezieht sich bloß auf das Erkenntniß, und auf den Grund des Vorwahrhaltens. Eine Erkenntniß kann aus der Vernunft seyn, und der Grund des Vorwahrhaltens ist, ob er gleich logisch unzureichend ist, doch practisch völlig zureichend, d.i. obgleich logisch vor dem puren Verstande der Grund des Vorwahrhaltens dieser Erkenntniß nicht völlig richtig ist: kann die Erkenntniß doch practisch vor wahr genommen werden. Dieses ist der Vernunft-Glauben, der vom Wissen völlig unterschieden ist, und bedeutet logisch unzureichendes Vorwahrhalten, das aber practisch zureichend ist, und Beydes aus Gründen Z.B. in der Mathematic wird anfänglich gesagt, der diameter verhalte sich zur peripherie, wie 100 zu 314. Es wird erst hernach in der Trigonometrie bewiesen. Hier gründet sich also das Vorwahrhalten bloß darauf, daß berühmte Männer es erfunden haben, weil man aber schon weiß, daß in der mathematic sich so leicht kein Irthum verbergen kann: so hat er große Ursache, festiglich zu glauben, daß es wahr sey, aber er kann doch nicht sagen, ich weiß es. – Andern Zeugnißen etwas glauben, wo die Erkenntniß ganz auf der Vernunft beruht, ist ein gänzlicher Mißbrauch der Vernunft, denn Anderer Zeugniße müssen nur auf der Erfahrung beruhen. Weil aber in der Mathematic nicht so leicht Irthümer bleiben können, die sich lange verbergen: so kann ich sicherlich mich darauf verlassen, daß der diameter zur peripherie sich, wie 100:314 verhält, ob ich es nur gleich glaube, und nicht sagen kann: ich weiß es. Wir können auch gewiße Vernunftsätze auf Glauben annehmen. Große Mathematiker nehmen Sätze in der Mathematic an, ohne etwa die demonstration durchgegangen zu seyn. In der philosophie kann man das aber nicht thun, weil sich da die Irthümer so leicht verbergen. Der historische Glaube, wo wir etwas vor wahr halten, weil wir einem Andern glauben, kann Gewißheit werden. – Der Glaube ist also ein Vernunft-Glaube, und ein historischer Glaube. Der Vernunft-Glaube ist, der aus dem Grunde der Vernunft zwar nicht logisch, aber practisch zureichend ist. Der historische Glaube ist, wo ich bloß auf das Zeugniß eines Andern, auch allenfalls ohne Gründe etwas vor wahr halte. Ein Vernunftglaube ist, der nur angenommen wird, ob wir von der Sache gleich noch gar keine Gewißheit haben, aber er hat practische Gründe, z.E. daß die Seele unsterblich ist, kann mich zu einer bessern Einrichtung meines Lebens antreiben. Dieser practische Grund kann niemahls zu einem Grund hinauf steigen, der wissen heißt. Denn wissen bedeutet, daß das Vorwahrhalten auch logisch hinreichend sey. Es kann aber ein so starkes Vorwahrhalten seyn, das eben so unerschütterlich ist, als die größte Gewißheit. Wer aber speculiren will, muß Erkenntniße haben, die auch nach logischen Gründen hinreichend sind.",
     "pages": [
      {
       "p": 895,
       "i": 2332
      }
     ],
     "aaEnd": 895,
     "ms": [
      {
       "p": 310,
       "i": 610
      },
      {
       "p": 311,
       "i": 1204
      },
      {
       "p": 312,
       "i": 1911
      },
      {
       "p": 313,
       "i": 2528
      },
      {
       "p": 314,
       "i": 3282
      },
      {
       "p": 315,
       "i": 3948
      },
      {
       "p": 316,
       "i": 4591
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-028",
     "kind": "text",
     "aa": 897,
     "text": "Der historische Glaube kann ein wirkliches Wissen seyn. Demnach muß der Glaube aus einem Zeugniß nicht vom Wissen unterschieden werden, obgleich der Vernunft-Glaube jederzeit vom Wissen unterschieden werden muß. Daß der historische Glaube auch ein Wissen seyn kann, sehen wir daraus, wenn ich einen frage: wie heißt die Hauptstadt in Spanien? und er würde sagen, ich glaube Madrid: so würde ich sagen, das must du nicht glauben, sondern wissen. Wenn man sagen möchte, man kann es ja nicht wissen, wenn man nicht selbst da gewesen ist: so ist zu antworten: wenn ich selbst da bin: so kann ich es ja auch nicht anders erfahren, als daß es mir die dortigen Einwohner sagen, und ich nehme es doch auf das Zeugniß Anderer also an. Auch hindert es gar nicht, daß Gewißheit darin seyn sollte, weil es ein Zeugniß ist. Denn wir können etwas eben so gut auf das Zeugniß Anderer annehmen, als auf eigene Erfahrung. Denn bey unserer Erfahrung ist eben so viel trügliches, als bey Anderer Zeugnißen. Unser Denken bey der Vorwahrhaltung einer Erfahrung ist vielen Gefahren unterworffen. Zwar ist das Zeugniß Anderer, das wir annehmen, eben so vielen Gefahren unterworffen, als unsere eigene Erfahrung Irthümern unterworffen ist. Aber wir können doch durch das Zeugniß Anderer eben so gut Gewißheit haben, als durch unsere eigene Erfahrung. Glauben ist also mit Wissen einerley. Wenn wir also Glauben dem Wissen contradistinguiren: so ist es nur ein practisches zureichendes Vorwahrhalten. Was wir durch die Vernunft erkennen, können wir nicht immer wissen. Was wir durch den historischen Glauben erkennen, können wir wissen. – Worüber kann ich einen Zeugen befragen? Ich kann etwas alsdenn vor wahr halten, wenn der Andere untrügliche Vernunft hat, oder seine Erfahrung es ihm sagen heißt. ich kann etwas vor wahr halten vermittelst eines Zeugen von untrüglicher Vernunft in Vernunftwahrheiten, oder um desjenigen willen, was er aus seinen eigenen Erfahrungen hat. Da bey der Erfahrung nicht so viel Irthümer, als bey den Speculationen anzutreffen sind: so ist es leichter zu glauben, was die Erfahrung angibt, als was der Andere aus der Vernunft erkannt hat, weil die Vernunft nicht so untrüglich ist. Mathematic hat eine untrügliche Vernunft. Daher so bald ein Satz von ihr behauptet ist, ist er untrüglich. – Da aber der Begriff der Untrüglichkeit der Vernunft nur zur höchsten Vollkommenheit gehört: so können wir kein Zeugniß vor untrüglich wahr annehmen, als das göttliche Zeugniß selbst. Man wirft hier ein: kann denn ein Mensch nicht göttliche Orakel bezeugen? Resp. er kann nichts anders bezeugen, als durch eine Erfahrung von der inspiration, die er gehabt hat, und hierbey ist noch immer möglich, daß der Mensch irren kann. Hier kann also subjective nicht geglaubt werden, sondern alle Gründe müßen genau geprüfet werden. – Und so glaube ich beym Zeugniß eines Andern vieles, was er für seine eigene Erfahrung ausgibt, auch auf das Zeugniß Anderer. Z.B. wenn einer erzählt, was er gelesen hat: so bezeugt er seine eigene Erfahrung aus einem Buche. Hier verlasse ich mich also 1.) auf die Aussage eines Andern und 2.) auf die Erfahrung selbst, die der Andere gemacht hat.",
     "pages": [
      {
       "p": 896,
       "i": 185
      },
      {
       "p": 897,
       "i": 2753
      }
     ],
     "aaEnd": 897,
     "ms": [
      {
       "p": 317,
       "i": 626
      },
      {
       "p": 318,
       "i": 1327
      },
      {
       "p": 319,
       "i": 1979
      },
      {
       "p": 320,
       "i": 2686
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-029",
     "kind": "text",
     "aa": 898,
     "text": "Eine Wissenschaft, nähmlich die Rechtsgelehrsamkeit ist von der Art, daß, ob sie gleich ganz auf der Vernunft beruht, man sich doch hierin sehr der Zeugniße bedient. In der philosophie kommt es nicht darauf an, welche Zeugniße, sondern welche Gründe man anführt, und die Sache verdient wohl nähere Untersuchung, daß, obgleich das Jus von der Art ist, daß es auf der Vernunft beruht, man doch dabey das Urtheil Anderer mit nimmt. Die Ursache ist vielleicht, weil das Jus auf Gesetzen beruht, und diese eine große Mannigfaltigkeit von Fällen enthalten, dazu eine besondere Bestimmung nöthig ist, wo Irthümer möglich sind, daß man etwas vor allgemein hält, was Ausnahme leidet. Wenn man nun ein Gesetz völlig gültig und brauchbar haben will: so glaubt man, andere werden nicht so leicht was übersehen haben. Deshalb heissen auch die Rechtsgelehrte Juris periti, ob es gleich eine Vernunft -Wissenschaft ist. Es ist aber eine klägliche Beschaffenheit, wenn es so zugeht. Denn wenn Menschen noch so geübt sind, auf alle Fälle Acht zu geben: so ist es doch möglich, daß sie noch welche übersehen haben. – Alle citationen, wenn sie Beweisgründe abgeben sollen, enthalten einen historischen Glauben, wenn ich auf das Zeugniß eines Andern etwas nicht vor wahr halten wollte: so würde ich ihn nicht citiren, d.i. zum Zeugen rufen. Ich kann wohl etwas erzählen, z.B. daß Plato dieses und das behauptet hat, und ich führe die Stelle an, aber da citire ich den Plato nicht. – Citation in Ansehung der Vernunftwissenschaft ist ein heterogeneum. Beyde schicken sich nicht zusammen. Es ist folglich eine grosse Gebrechlichkeit, wenn man sich genöthiget sieht, historischen Glauben zu den Gründen der Vernunft hinzu zu fügen. – In allen empirischen Erkenntnißen ist der historische Glaube unentbehrlich. Was wir nicht wissen, oder selbst erfahren können, müßen wir durch Anderer Erfahrung erkennen, und seiner Natur nach paßt der historische Glaube bloß auf die Erfahrung Anderer. In Sachen, die die Vernunft betreffen, kann ich keinen zum Zeugen rufen, sondern bey dem, was Andere erfahren haben, diese declaration Anderer von ihrer Erfahrung, weshalb ich diese Sache vor wahr halte, ist das Zeugniß, das den historischen Glauben hervor bringt. Zur Glaubwürdigkeit eines Zeugen wird erfordert.",
     "pages": [
      {
       "p": 898,
       "i": 2192
      }
     ],
     "aaEnd": 898,
     "ms": [
      {
       "p": 321,
       "i": 194
      },
      {
       "p": 322,
       "i": 900
      },
      {
       "p": 323,
       "i": 1531
      },
      {
       "p": 324,
       "i": 2168
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-030",
     "kind": "text",
     "aa": 898,
     "text": "1.) Die Tüchtigkeit des Zeugen besteht darin, daß er hat können die Wahrheit sagen. Hierzu gehört"
    },
    {
     "id": "wiener-s06-031",
     "kind": "text",
     "aa": 898,
     "text": "a. daß er eine genugsame Geschicklichkeit hat, Erfahrung anzustellen. Es ist nicht so leicht in allen Fällen Erfahrung anzustellen, und es gehört Uebung dazu. Und es ist bey der Erfahrung viel Betrug der Sinne. Der gemeine Mann ist kein gehöriger Zeuge. Denn er kann nicht recht Erfahrungen anstellen. Denn wenn ihn Furcht überfällt: sieht er eines vor das andere, und übersieht Manches.",
     "ms": [
      {
       "p": 325,
       "i": 387
      }
     ]
    },
    {
     "id": "wiener-s06-032",
     "kind": "text",
     "aa": 898,
     "text": "b. daß er in den Umständen gewesen ist, worin er hat Erfahrungen anstellen können. Vornähmlich kann der gemeine Mann es nicht in allen innern Umständen. Z.B. er ist oft schläfrig, furchtsam, zerstreut, u.s.w."
    },
    {
     "id": "wiener-s06-033",
     "kind": "text",
     "aa": 898,
     "text": "c. daß er auch die Geschicklichkeit hat, seine Erfahrungen zu declariren, daß man seinen Sinn wohl verstehen kann. Es ist dieses nicht so leicht. Mancher erzählt sehr pünktlich. Andere können nur einen leichten Schattenriß ihrer Erfahrung, und nicht von allen Umständen derselben Rechenschaft geben."
    },
    {
     "id": "wiener-s06-034",
     "kind": "text",
     "aa": 899,
     "text": "2.) Die Aufrichtigkeit des Zeugen, daß er hat wollen die Wahrheit sagen. Der gemeine Mann ist zu roh dazu, einen großen Werth in die Wahrheit zu setzen. Ein Mund voll Lügen, wenn einem was daran gelegen ist, glaubt er, verschlage nicht viel. Uebel erzählen sie immer mit einer Vergrösserung, so daß Alles übertrieben ist, und in das Gräßliche fällt. Kurz, sie suchen Bewunderung zu erwecken. Hier muß man sie durch die Drohung mit dem Eide aufmerksam machen. Dann fangen sie an zu stutzen, und werden sehr zweifelhaft. – Eben das gilt auch von den alten Zeiten. Kein einziger Geschichtschreiber der Alten schränkt sich so pünktlich auf die Wahrheiten ein, sondern sie trachten immer schön zu schreiben. Sie nehmen alle Gerüchte an, ohne sie zu untersuchen. Z.B. Herodot hat viele alte Weibermährchen. Aber sie halten auch nicht viel vor wichtig, die Wahrheit zu sagen. Z.B. Livius sucht blühend zu schreiben, und läßt generale Reden halten, die nie gehalten sind. – Wir in unsern Zeiten sind schon mehr gezwungen, die Wahrheit zu reden, durch Umstände, vornähmlich die experimental physic, und daß man durch Beobachtungen und Versuche die Erscheinungen genau zu bestimmen sucht, um mit mehrerer Gewißheit die Gesetze der Natur zu durchschauen. Im Anfange des vorigen saeculi erst fieng man an einzusehen, daß es nöthig sey, die Wahrheit ganz zu sagen, und ein Jeder mußte denn in seinen Nachrichten ganz genau seyn, und wenn einer nur ein bischen von der Wahrheit in seinen Schriften abwich: so wurde er blamirt und verunehrt. Deßwegen pfleget man sich allerhand behutsamer Ausdrücke zu bedienen. Z.B. Jurin sagt immer, wie fern das wahr ist etc. Diese Genauigkeit im Berichte der Erfahrung ging hernach von der Naturwissenschaft in die Historie über. Denn man sah ein, es ist nothwendig, nicht im geringsten Punkte die Wahrheit zu verletzen. Jetzt haben wir Erleichterungen die Wahrheit zu erfahren. Die Druckerpreßen zeigen gleich, wo er in seiner Schrift gefehlt hat, ferner die Gazetten, es laßen sich jetzt nicht mehr wie in Rom Histörchen erzählen. Denn da ehedem nach 3 Jahren einer aus einem Lande in das andere kam: so ist jetzt durch die Einrichtung der Posten in wenig Tagen die Nachricht aus einem Orte in dem andern. Z.B. die alte Erzählungen vom Apoll onius Tyanaeus und Alexander von Paphlagonien kamen nach Rom, indem sie unter Weges wuchsen. In Rom fanden sie Beyfall, und man glaubte ihnen, wie denn auch Philostratus davon schreibt. Jetzt aber ist durch die Post dem ungeheuern Steigen der Gerüchte abgeholfen. So aber ist es nicht in alten Zeiten gewesen, daß die Wahrheit so genau bestimmt wurde. Es gibt viel ehrliche Leute. Aber sie halten es oft nicht für nöthig so pünktlich zu seyn, wenn die Unwahrheit keinen Schaden hat, oder Ergetzlichkeit mit sich führt, oder sie glauben wohl gar, daß es eine Nachricht von großem Nutzen sey. Dieses ist der so genannte pia fraus, wenn es nicht eine contradiction ist. – Aus diesem Allem erhellet, daß der historische Glaube erstaunliche Glaubwürdigkeit mit sich führe, weil der Zeuge so vielerley Eigenschaften haben muß, um die Wahrheit zu reden. – Jeder Mensch hat so sein verschiedenes Interesse, das man nicht immer beurtheilen kann. Mancher sucht bloß durch eine Erzählung die Sache zu embelliren u.s.w. Da wir also ohne solche critische Gründe in der Beurtheilung eines Zeugnisses einem Zeugen nicht glauben können: so beruht der historische Glaube in wichtigen Fällen auf solcher Bedenklichkeit, daß er sehr geprüft werden muß. Denn wie vielfältig ist der menschliche Willen disponirt? Es ist also beßer, diesen Glauben, wenn er nicht die gehörigen Eigenschaften hat, gänzlich wegzulassen, wenn man nicht errathen kann, warum Menschen so, und nicht anders reden. Indeßen kann doch auf das Zeugniß anderer Menschen Gewißheit gegründet werden, wie Historie und Geographie darauf gegründet sind.",
     "pages": [
      {
       "p": 899,
       "i": 1318
      }
     ],
     "aaEnd": 899,
     "ms": [
      {
       "p": 326,
       "i": 153
      },
      {
       "p": 327,
       "i": 801
      },
      {
       "p": 328,
       "i": 1467
      },
      {
       "p": 329,
       "i": 2125
      },
      {
       "p": 330,
       "i": 2812
      },
      {
       "p": 331,
       "i": 3577
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-035",
     "kind": "text",
     "aa": 900,
     "text": "Der Ohrenzeuge bezeugt seine Erfahrung von dem Zeugniße eines Andern, von einer Sache. Der Augenzeuge bezeugt seine eigene Erfahrung von der Sache. Wer eine Nachricht erzählt, die er wo gelesen hat, ist ein Ohrenzeuge, der etwas vorträgt, was der Zuhörer nicht aus eigener Erfahrung erkennen konnte, ist ein Ohrenzeuge. Bey der gemeinen Sage, und Ueberlieferung oder Gerüchte kann man den Zeugen nicht selbst bestimmen. Der Zeuge ist eine Menge von Personen, wo man glaubt, daß die Menge Glaubwürdigkeit haben werde. Eine Ueberlieferung ist, so fern der eine seine Zeugniße dem Andern mündlich übertragen hat. Ist also eine Reihe subordinirter Zeugniße.",
     "ms": [
      {
       "p": 332,
       "i": 376
      }
     ]
    },
    {
     "id": "wiener-s06-036",
     "kind": "text",
     "aa": 900,
     "text": "Wenn der Begriff unglaubig, der auch in der Theologie vorkommt, einen Tadel bedeuten soll: so kann er nicht in der Schwierigkeit bestehen, einem Zeugniße Glauben beyzumeßen, denn das ist keine Schwierigkeit, sondern, so bald es ein Tadel ist, muß der Grund moralisch seyn. Das erste kann ihm zur Ehre gereichen, wenn er schwerglaubig, oder unglaubig ist. Z.B. Bey einem allgemeinen Gerüchte, dieses kann ihm nicht zum moralischen Nachtheile gereichen. Bey allen Erzählungen ist es gut und rühmlich unglaubig zu seyn, und man muß daselbst, wenn es möglich ist, critisch verfahren. Der Glaube kann zweyfach in den theoretischen und practischen eingetheilet werden. Beym theoretischen kann man unglaubig seyn. Beym moralischen Glauben wird der unglaubig genannt, der kein moralisches Intereße hat, etwas vor wahr anzunehmen, indem er doch sieht, wie wichtig dieser, oder jener Satz sey. Den moralischen Glauben kann man also bey jedem Menschen voraus setzen, und der moralische Unglaube ist folglich sehr tadelhaft. Man kann auch den, der den Beweis vom Daseyn Gottes nach der bloßen Vernunft verwirft, unglaubig nennen, und auch den, der nicht mehr an die Tugend glaubt, wenn er nichts aus einem moralischen Intereße thut, sondern alles aus Häucheley. Hier gibt der Mensch allen Vorsatz zur Tugend auf, weil er an keine glaubt.",
     "ms": [
      {
       "p": 333,
       "i": 355
      },
      {
       "p": 334,
       "i": 1013
      }
     ]
    },
    {
     "id": "wiener-s06-037",
     "kind": "text",
     "aa": 900,
     "text": "Von der practischen Erkenntniß. Hierbey ist eine zweyfache Eintheilung zu bemerken, wodurch einer Zweydeutigkeit vorgebeuget wird, die durch die Worte veranlaßt werden kann. Practisch heißt eine Erkenntniß im Gegenverhältniß gegen die theoretische, und auch im Gegenverhältniß gegen die speculativen Erkenntniße. – Wenn ein Satz ein gebiethender Satz, ein imperativus ist, und sagt, daß etwas geschehen soll: so ist er ein practischer Satz, er sagt, welche freye Handlungen in einer gewißen Absicht gut seyn würden. Ein imperativus",
     "ms": [
      {
       "p": 335,
       "i": 356
      }
     ]
    },
    {
     "id": "wiener-s06-038",
     "kind": "text",
     "aa": 903,
     "text": "ist also ein solcher Satz, der zu einer möglichen freyen Handlung antreibt, in so fern sie in gewißer Absicht gut und nothwendig wäre. Alle practische Sätze, wenn sie den theoretischen entgegen gesetzt sind, sind imperativi. Diese sind verschieden: in Wissenschaften, die nichts als Wissenschaft oder Geschicklichkeit sind, da nimmt man sich gewiße beliebige Absichten, wornach man voraus setzt, was geschehen soll. Z.B. in der Geometrie, wie ich sage, eine gerade Linie zu messen, nimm etc. theoretische Sätze hingegen sagen nicht, wie es geschehen soll, sondern wie die Sache ist. Z.B. Eine gerade Linie ist der kürzeste Weg etc. Diese lassen sich im Augenblick von den practischen unterscheiden, weil die practischen jederzeit imperativi sind, und sind von solchen Sätzen, die die Eigenschaften der Handlung bezeugen, gar leicht zu unterscheiden. – Die practischen Erkenntniße sind aber auch zweytens den speculativen entgegen gesetzt. Erkenntniße können theoretisch seyn, und sind doch entweder practisch, oder speculativ. Denn ob sie gleich nicht sagen, was geschehen soll, weil sie theoretisch sind: so können doch practische Sätze aus ihnen abgeleitet werden, und sind in so fern den speculativen Sätzen entgegen gesetzt. Z.B. Es ist ein Gott, ist ein theoretischer Satz, aber in potentia practisch, du mußt nur so handeln, als ob ein oberster Gesetzgeber deiner Handlungen sey. So sind Erkenntniße, ob sie zwar an sich theoretisch sind, von andern practischen Erkenntnißen nicht unterschieden, weil sie nähmlich in potentia practisch sind. – Speculative Sätze sind alle, aus denen keine Regeln und imperativi für unsere Handlungen abfließen, in der natürlichen Theologie sind Sätze bloß speculativ. Z.B. ob die Allgegenwart Gottes einen Raum einnehme, oder bloß in einem Einfluß in die Geschöpfe bestehe. Dieses hat keinen Einfluß auf unsere Handlungen, und ist also eine bloße speculation. Aber ob der göttliche Wille auch ein heiliger Wille sey, ist ein Satz von practischer Wichtigkeit, aus dem sich Regeln für unser Verhalten ableiten lassen. Theoretische Sätze sind demnach entweder speculative, oder objectiv practische Sätze, d.i. die practisch in potentia sind. Man könnte auch sagen: Alle Erkenntniß ist practisch oder theoretisch. Practisch ist die, wo die Sätze des imperativi ausgedrückt werden, indem sie die Nothwendigkeit einer freyen Handlung anzeigen. Theoretische Erkenntniße enthalten die Erkenntniß eines Gegenstandes, was er ist, aber der Gebrauch derselben ist immer ein speculativer, oder ein practischer Gebrauch. Und dieser Unterschied ist nicht so wohl als ein Unterschied der Erkenntniß, sondern des Gebrauches der Erkenntniß. Manche haben wir bloß zum speculativen Gebrauch, manche zum practischen Gebrauch, und zu Regeln unsers Verhaltens. Der Gebrauch der moralischen Sätze kann ein speculativer Gebrauch seyn. Die über die principien der Tugend vernünfteln, haben bloß einen speculativen Gebrauch derselben. Die alten philosophen, die über das höchste Gut philosophirten, wandten das nie im practischen Gebrauch an. Nicht alle Erkenntniße lassen sich zum practischen Gebrauch anwenden. – Wer kann z.B. von der Mathematic oder Naturwissenschaft einen practischen Gebrauch machen? Wir suchen aber gern unsere Erkenntniße zum practischen Gebrauch anzuwenden. Denn durch den practischen Gebrauch bekommen unsere Erkenntniße immer mehr Wahrheit, und der letzte Zweck aller unserer Erkenntniße scheint doch darauf zu beruhen, daß sie eine Regel enthalten sollen, von dem, was zu unsern höchsten Zwecken mit zusammen stimmt, und wenn daraus keine Folgen auf unser Verhalten abfließen: so scheint ein Erkenntniß ohne Nutzen. Daher auch alle Speculation auf das practische hinaus sieht, ob man es schon nicht gleich einsieht. Der die erste mathematische Figur zeichnete, dachte doch, daß ein Mahl ein Gebrauch davon gemacht werden könnte. Sonst würde das nur ein Geschäfte der langen Weile gewesen seyn. Aber gesetzt, wir wollten durch die mathematic bloß unsere Vernunft cultiviren: so wäre das so gut, als ein practischer Gebrauch. Denn die Vernunft kann unserm Verhalten Regeln vorschreiben, und das gehört doch zum practischen Gebrauch. Daher sich das Ansehen unserer Erkenntniß vorzüglich gründet auf den practischen Gebrauch. Denn in Erwartung des practischen Gebrauches cultiviren wir die Erkenntniß. Diesen Werth der Erkenntniß können wir bisweilen als einen mittelbaren Werth betrachten, als ein Mittel zu andern Zwecken, oder als einen unmittelbaren Werth, und das heißt dann Würde. Keine Sache auf der Welt hat eine Würde. Es ist der letzte Zweck, um deßwillen die Welt diese Einrichtung hat. Manches in der Vollkommenheit des Menschen hat einen mittelbaren Werth, z.B. manche Eigenschaften deßelben. Aber eines hat doch einen unmittelbaren Werth bey ihm, und das ist seine Würde. Die Mathematic hat manchen Nutzen, daß nach ihr Kalender gemacht werden können, oder Aecker ausgemessen etc. Das ist der mittelbare Nutzen, und der Marktpreis derselben. Aber darin ist sie vielen andern Mitteln nicht vorzuziehen, indem Alles, was nur ein Mittel ist, ohne Werth ist. Aber schon Plato sagt, daß dieser mittelbare Nutzen bey weitem nicht der höchste Zweck der mathematic sey. Denn die Sätze haben an sich selbst ihre innere Vortrefflichkeit, die bey weitem alle auszumessenden Aecker übersteigt. Longin sagt, das ist nicht erhaben, deßen Verachtung erhaben ist. Z.E. der Reichtum ist nicht erhaben. Denn die Verachtung des Reichthumes ist erhaben. Also dadurch, daß die Mathematic den Acker und das Eigenthum des Menschen bestimmt, ist sie nicht erhaben, sie hat aber einen innern Werth, und es findet sich in der mathematic eine Herrlichkeit, und etwas, das unsere Vernunft erhebt, und wobey wir unsere Vernunft in ihrer ganzen Stärke fühlen. Durch die Gründlichkeit ihrer Beweise und methode hat sie einen erhabenen Werth. Wenn wir nun aber dieses wieder recht erwägen: so sehen wir wohl, dieses ist doch noch nicht die rechte Würde, und daß nur das die wahre Würde ausmacht, wenn der Wille gut ist. Denn was würde alle Geschicklichkeit helfen, wenn der Mensch sich derselben arglistig bedienen wollte? Der Wille sich dieser Geschicklichkeit zu bedienen ist sein wahrer Werth. Alle Erkenntniße, die zur Würde des Menschen mit beytragen, machen lange seinen höchsten Werth nicht aus, sondern dieser ist es: sich aller seiner Talente wohl zu bedienen. Die wahre Würde des Menschen beruht also auf der Moralitaet. Daher heißt auch das [ Textlücke ]practisch, was unsern Willen zu bessern dient, weshalb auch die philosophische Moral practische philosophie heißt, weil in der Wissenschaft practische Sachen vorkommen. – Wenn Erkenntniße so beschaffen sind, daß aus ihnen nichts practisches zu ziehen ist, und daß daraus also gar keine Handlungen fließen: so hat ein solches Erkenntniß einen bloß speculativen Gebrauch. –",
     "pages": [
      {
       "p": 902,
       "i": 2590
      },
      {
       "p": 903,
       "i": 5149
      }
     ],
     "aaEnd": 903,
     "ms": [
      {
       "p": 336,
       "i": 588
      },
      {
       "p": 337,
       "i": 1439
      },
      {
       "p": 338,
       "i": 2206
      },
      {
       "p": 339,
       "i": 2947
      },
      {
       "p": 340,
       "i": 3667
      },
      {
       "p": 341,
       "i": 4351
      },
      {
       "p": 342,
       "i": 5065
      },
      {
       "p": 343,
       "i": 5780
      },
      {
       "p": 344,
       "i": 6568
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s06-039",
     "kind": "text",
     "aa": 903,
     "text": "Die ganze Lehre vom practischen Gebrauche, die der Autor abhandelt, gehört gar nicht in die Logic. Denn in die Logic gehört nichts, als die logische Form aller Erkenntniße, d.i. die Form des Denkens ohne Absicht auf den Inhalt. Sie kann also nur Sätze enthalten, die demonstrirt werden können. Erfahrung von Sachen, wobey empirische Grundsätze müßen zum Grunde geleget werden, gehören, weil sie nicht demonstrirt werden können, nicht in die Logic. Das practische Erkenntniß ist aber vom speculativen dem Inhalt nach unterschieden. Daher kann die Logic mit dem practischen zu thun haben. – Der Autor handelt von Begierden und Verabscheuung. In der Logic aber muß man denken, als habe man gar keinen Willen, es würde daraus eine practische Wissenschaft werden, wir haben daher die Wissenschaft des Denkens, und nicht des Wollens. –",
     "ms": [
      {
       "p": 345,
       "i": 428
      }
     ]
    },
    {
     "id": "wiener-s06-040",
     "kind": "text",
     "aa": 904,
     "text": "Er redet ferner von lebendigen und todten Erkenntnißen, todte, d.i. die den Willen bewegen könnten, weil sie practisch sind, und doch nicht bewegen, und also bloß speculation sind. – Doch es fällt gleich in die Augen, daß das Alles nicht zur Logic gehört. Er redet von Gleichgültigkeit, wenn etwas indifferent ist etc."
    }
   ]
  },
  {
   "id": "s07",
   "title": "Von den Begriffen",
   "titleSrc": "line",
   "headings": [
    "Von den Begriffen."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s07-001",
     "kind": "text",
     "aa": 904,
     "text": "Bis dato haben wir von Erkenntniß überhaupt geredet, so fern die Erkenntniß deutlich oder klar, gewiß oder ungewiß ist. Wir haben von der Art der Beweise und des Vorwahrhaltens, vom Glauben und Wissen u.s.f. gehandelt. Jetzt theilt der Autor, welches gleich hätte im Anfange geschehen sollen, die Erkenntniß in ihre Elemente. Logisch sind alle Anfänge im Denken so eingetheilt:"
    },
    {
     "id": "wiener-s07-002",
     "kind": "text",
     "aa": 904,
     "text": "1.) Die Erkenntniß ist eine einfache Erkenntniß, ein Begriff."
    },
    {
     "id": "wiener-s07-003",
     "kind": "text",
     "aa": 904,
     "text": "2.) Die Erkenntniße verbunden werden ein Urtheil."
    },
    {
     "id": "wiener-s07-004",
     "kind": "text",
     "aa": 904,
     "text": "3.) Daß Urtheile verbunden werden, und Schlüße daraus entstehen. Die Alten sagten: Quot sunt operationes mentis? Resp. tres. apprehensio simplex, Judicium et Ratiocinium. Was nun den Begriff betrift, so wollen wir bey dem anfangen, was in unsern Erkenntnißen das allereinfachste ist, nähmlich daß die Erkenntniß eine Vorstellung ist, repraesentatio. Eine Vorstellung mit Bewußtseyn ist perceptio. Ich habe einen Wahn und denke, ich bin mir deßen bewußt. In so fern ich bey einer solchen Vorstellung auch Acht habe auf den Gegenstand: so ist es cognitio, Erkenntniß. Die Erkenntniß ist zweyfach, intuitus, Anschauung, conceptus, Begriff. Intuitus ist eine einzelne Vorstellung, repraesentatio singularis.",
     "ms": [
      {
       "p": 347,
       "i": 171
      }
     ]
    },
    {
     "id": "wiener-s07-005",
     "kind": "text",
     "aa": 904,
     "text": "Wir beziehen bey der perception unsere Erkenntniße nicht auf einen Gegenstand. Durch Empfindung, Wohlbefinden, Schmerz – erkennt man keinen Gegenstand. Es ist nur eine Art von Vorstellungen. Aber sie wird nicht von einem besondern Objecte unterschieden. Ueberhaupt die Beziehung der Vorstellung aufs subject heißt Empfindung, auf das Object, Erkenntniß. Die Logic beschäftigt sich bloß mit Erkenntniß, aber nicht mit Empfindung",
     "ms": [
      {
       "p": 348,
       "i": 163
      }
     ]
    },
    {
     "id": "wiener-s07-006",
     "kind": "text",
     "aa": 904,
     "text": "Conceptus ist repraesentatio communis, die vielen Sachen gemein ist. Wer von der rothen Farbe zuerst eine Vorstellung haben wollte, mußte die rothe Farbe sehen. Als er aber bey der rothen Farbe Zinnober, c ramoisin und ponceau roth verglich: so wurde er inne, daß in der rothen Farbe etwas generales ist, das auch in andern Vorstellungen"
    },
    {
     "id": "wiener-s07-007",
     "kind": "text",
     "aa": 905,
     "text": "von der rothen Farbe mit enthalten war, und dachte er sich unter roth das, was vielen Gegenständen gemein war, und das war ein Begriff. Ein Begriff ist also eine Vorstellung die vielen Dingen gemein ist. Beym intuitus betrachte ich einzelne Dinge. Z.E. die Sonne, Erde. Denke ich mir aber eine gewiße Gattung von Planeten: so ist es repraesentatio communis, d.i. conceptus. – Begriff unterscheidet sich von Anschauung dadurch daß alle Anschauung einzeln ist. Der, der den ersten Baum sieht, weiß nicht, was das ist, was er sieht. Wird er gewahr, daß diese Gegenstände etwas gemein haben, so läßt er darauf alles weg, was sie Verschiedenes haben, und nimmt das zusammen, was sie gemein haben, und so hat er repraesentationem communem, d.i. conceptum. Hieraus erhellet, daß man nicht sagen muß conceptus communis, weil es eine tautologie wäre, weil ein jeder conceptus auch communis ist. – Ein jeder conceptus ist empiricus, oder purus. Conceptus empiricus ist der, der durch die Vergleichung der Gegenstände der Erfahrung erzeugt ist. Repraesentatio empirica ist, die aus den Sinnen entspringt. Diese kann zum conceptus werden, wenn ich das nehme, was mehreren empirischen Vorstellungen gemein ist. Man sieht wohl beym Unterschiede des empiricus und purus kommt es auf den Ursprung des Begriffes an, und ist dieses also schon eine metaphysische Untersuchung. Denn die Logic fragt nicht darnach, wo Begriffe herkommen, sondern wie sie nach den Gesetzen des Verstandes können geformet und geordnet werden. Daß also ein Begriff ist, gehört zur Logic. Ob er aber unabhängig von der Erfahrung, oder aus der Erfahrung herkomme, gehört nicht vor sie. – Es sind viele conceptus empirici d.i. wir vergleichen oft Erfahrungen, und bilden daraus repraesentationem communem, und diese heißt denn empiricus conceptus. – Dem Empirico wird conceptus purus contradistinguirt. Purus ist der Begriff, der unabhängig von der Erfahrung im bloßen Verstande seinen Ursprung hat. Der Begriff z.B. von Ursache, Größe, Qualitaet etc. Ob es solche Begriffe gibt, ist eine Untersuchung, die in die metaphysic gehört, weil diese cognitio pura ist. – Unsere Moral hat viele conceptus. Der Begriff von Tugend wird in der Erfahrung nicht angetroffen, und wenn die Welt gleich nichts, als Laster zeigte: so würden wir doch einen Begriff von Tugend haben. – Dieser purus kann entweder aus dem Verstande entspringen, und zwar kann, wenn sein Grund bloß in dem Verstande ist, sein Gegenstand doch in concreto vorgestellt werden. Z.B. Ursach und Wirkung des Verstandes. Man kann die Dinge wohl im Verstande unterscheiden,",
     "ms": [
      {
       "p": 349,
       "i": 75
      },
      {
       "p": 350,
       "i": 812
      },
      {
       "p": 351,
       "i": 1473
      },
      {
       "p": 352,
       "i": 2178
      }
     ]
    },
    {
     "id": "wiener-s07-008",
     "kind": "text",
     "aa": 906,
     "text": "empfinden, wovon bey Wirkung, Ursache etc. die Rede ist, aber der Begriff von causalitaet liegt bloß im Verstande. Nun fragt es sich: kann man den Gegenstand dieses seines Verstandes-Begriffes in der Erfahrung antreffen? Resp. Ja. Dieses geschiehet durch die Beyspiele. Ein Beyspiel der causalitaet ist: das Feuer zerstört das Holz. –",
     "ms": [
      {
       "p": 353,
       "i": 255
      }
     ]
    },
    {
     "id": "wiener-s07-009",
     "kind": "text",
     "aa": 907,
     "text": "Oder dieser conceptus purus ist so beschaffen, daß sein Gegenstand in keiner Erfahrung kann gegeben werden. Dann ist er ein Begriff nicht des Verstandes, sondern der bloßen Vernunft, d.i. man hat den Begriff nicht aus der Erfahrung zu verstehen, sondern ich gehe über das, wohin mich die Erfahrung leitet. – conceptus purus heißt generaliter notio. Notio ist also schon mehr, als Begriff denn z.B. der Begriff von Möglichkeit kann nicht in der Erfahrung dargestellt werden. Eine notio, deren Gegenstand in der Erfahrung gegeben werden kann, heißt notio intellectualis. Wenn der Gegenstand in keiner Erfahrung kann gegeben werden, heißt es notio rationis, oder idea. Also ist eigentlich die notio, so fern sie in keiner Erfahrung gegeben werden kann, und auch keiner Erfahrung correspondirt, eine idea. Der Begriff des Ganzen kann in der Erfahrung gegeben werden, est notio intellectualis, wenn ich mir aber noch einen neuen Begriff mache, z.B. den Begriff von einer Welt, die das unerzeugte Ganze, das alle Dinge einfaßt, seyn soll, und in dem alle Theile zusammen in Verbindung stehen, kann man ihn nicht in der Erfahrung geben. Was kann, wenn die Welt ewig ist, die ganze Ewigkeit derselben befassen? Der Begriff der Welt also ist bloß eine Idee. – Der Begriff vom Theile ist conceptus purus intellectualis, seu notio. Aber der Begriff eines Theiles, der nicht zusammen gesetzt ist, ist notio rationis, idea. So lange sich meine Vernunft etwas Theilbares vorstellt, so kann das immer noch getheilet werden. Aber meine Vernunft verlanget endlich den letzten Theil, der weiter nicht getheilet werden kann, d.i. einfach ist. Dieser Begriff kann nicht in der Erfahrung gezeigt werden, ist also ein Begriff a priori, eine Idee. Der Begriff von Gott ist eine Idee. Denn die Erfahrung kann uns nicht lehren, ob alle mögliche Vollkommenheiten irgend wo beysammen seyn mögen. – Die ganze Moral beruht auf Ideen. Eine Tugend können wir unter den Menschen gar nicht antreffen. Aber doch muß meine Vernunft von der Tugend einen Begriff haben, wie sie in ihrer ganzen Vollkommenheit seyn muß. Wir können in der Erfahrung wohl Tugend wahrnehmen. Allein da muß noch viel hinzu kommen, sie ist also eine Idee. – Die Lehre von den Ideen ist sehr wichtig, gehört aber eigentlich in die Metaphysic. Man hat sie bisher unrecht vorgetragen. Wenn man sie aber nicht recht unterscheidet: so können wir den Gebrauch unserer Erkenntniße nicht recht bestimmen. Die ordinairen autoren gebrauchen das Wort idee ganz unrecht. Z.B. man redet von der idee der rothen Farbe, da diese doch nicht ein Mahl notio ist. Man redet von der idee eines Triangels, da er doch nur eine notio ist. In der Metaphysic wird gezeigt, daß rationes entweder intellectuel, oder sensitiv sind. Rationes intellectuales sind Nothwendigkeit, Ursache etc. die mit dem Nahmen categorien belegt werden. Rationes sensitivae sind, wo ein Gegenstand der Sinne gegeben wird, den ich nicht in der empirischen Anschauung, sondern in der reinen Anschauung erkennen kann. Der Begriff vom Triangel ist also notio sensitiva. Die Ideen schließen alle unsere Kenntniße aus. Sie sind bloß aus der Vernunft geschöpft, fließen aber doch auf die Erfahrung ein, als Regeln, nach denen man die mehresten Erfahrungen anstellen kann.",
     "pages": [
      {
       "p": 907,
       "i": 2230
      }
     ],
     "aaEnd": 907,
     "ms": [
      {
       "p": 354,
       "i": 630
      },
      {
       "p": 355,
       "i": 1310
      },
      {
       "p": 356,
       "i": 1968
      },
      {
       "p": 357,
       "i": 2603
      },
      {
       "p": 358,
       "i": 3242
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s07-010",
     "kind": "text",
     "aa": 907,
     "text": "Wie entspringen Begriffe? D.i. wie werden Vorstellungen zu Begriffen? Die Logic bekümmert sich nicht darum, wie data zu einer Erkenntniß beschaffen seyn müssen, sondern bloß um das, was der Verstand dabey thut, gibt also Acht auf die Form, und nicht auf den Gegenstand. Wie kommt es also, daß repraesentatio singularis zur communis wird? Resp. per comparationem, separationem seu abstractionem. Ich vergleiche Dinge, und attendire auf das, was sie gemein haben, und abstrahire von allen übrigen Dingen: so ist dieses ein conceptus, wodurch alle diese Dinge können gedacht werden.",
     "ms": [
      {
       "p": 359,
       "i": 579
      }
     ]
    },
    {
     "id": "wiener-s07-011",
     "kind": "text",
     "aa": 908,
     "text": "Es ist in der Logic ein Mißbrauch, daß man den Ausdruck abstrahiren so behält, daß man sagt: aliquid abstrahere. Z.B. als wenn ich um den Begriff eines Baumes zu haben, den Begriff der Blätter und des Stammes besonders nehme, und von allem Unterschiede des Baumes abstrahirte, und sagte: was Stamm und Blätter hat, ist ein Baum. Nein, ich abstrahire nicht die Blätter und den Stamm, sondern ich behalte sie bey, und separire sie von allem Uebrigen. Ich muß Acht haben auf das, was eine Erkenntniß gemein hat, und abstrahiren von dem, was sie Verschiedenes hat. z.B. von der Größe oder Kleinheit des Baumes. Demnach muß das Wort nicht so gebraucht werden, daß es heißt aliquid abstrahere. Ich ignorire von den übrigen Dingen. Die abstraction setzt also nichts hinzu, sondern schneidet alles das ab, was nicht zum Begriff gehört, und merkt bloß, was er mit andern Vorstellungen gemein hat. Es gehört also zur Unterscheidung eines Begriffes Comparatio. Ich muß attention haben auf die Uebereinstimmung und identitaet der Dinge, welches man Witz nennet, und zweytens abstractio. – Es ist also falsch ausgedrückt, wenn man von conceptibus abstractis redet, da abstractis so viel heißen soll als qui abstractus est a re. Dieses ist falsch, nam non abstrahimus a re, sed separamus conceptum ab aliis rebus, conceptum abstrahimus a ceteris. Wir müssen von vielen Dingen abstrahiren, wenn ich nur pur beym rothen Scharlache die rothe Farbe denke: so abstrahire ich schon von vielen Farben, wenn ich mir beym Scharlach bloß ein ausgedehntes Wesen denke, so abstrahire ich schon von vielen mehreren Dingen, denke ich mir bloß dabey, daß es ein Ding ist, so abstrahire ich von noch mehreren Dingen. Eigentlich aber sollten wir sagen Gebrauch des Begriffes ist abstract. Denn jeder Gebrauch des Begriffes ist entweder in abstracto, oder concreto. Ich erkenne einen Begriff in concreto, wenn ich ihn auf das, was unter ihm enthalten ist, anwende. Ich denke den Begriff in abstracto, wenn ich ihn überhaupt denke. Hieraus sieht man: Ein Erkenntniß ist abstract, nicht weil der Begriff in abstracto gedacht wird, ohne auf Gegenstände angewendet zu werden. Z.B. Man redet von der Erziehung, und handelt bloß von der frühen Bildung des Menschen, ohne eben von der Anwendung auf die Kinderzucht zu sprechen. Hier wird der Begriff gar nicht in concreto, sondern bloß in abstracto vorgetragen.",
     "pages": [
      {
       "p": 908,
       "i": 927
      }
     ],
     "aaEnd": 908,
     "ms": [
      {
       "p": 360,
       "i": 637
      },
      {
       "p": 361,
       "i": 1310
      },
      {
       "p": 362,
       "i": 1909
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s08",
   "title": "Kurze Wiederhohlung des Vorigen",
   "titleSrc": "line",
   "headings": [
    "Kurze Wiederhohlung des Vorigen."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s08-001",
     "kind": "text",
     "aa": 909,
     "text": "Die Form eines Begriffes besteht in der Gemeingültigkeit. Repraesentatio, quae pluribus est communis. Das macht also den conceptus aus. – Conceptus communis kann ich nicht sagen, weil es eine tautologie seyn würde. Tautologie ist eine Enunciation, wenn ich den Begriff durch sich selbst deutlich mache. Denn wenn eine Vorstellung nicht repraesentatio communis ist: so ist sie gar kein Begriff. Da es also schon darin steckt: muß ich es nicht hinzu thun. – Aber der Gebrauch eines conceptus kann singularis seyn. Denn was von vielen Dingen gilt, kann auch auf einen einzelnen Fall angewendet werden. Ich denke mir einen Menschen in individuo, d.i. ich gebrauche den Begriff des Menschen, um ein ens singulare zu haben. Ich kann mich eines Begriffes bedienen, in so fern er auf viele Gegenstände angewendet wird, denn wird der Begriff als repraesentatio communis gebraucht, d.i. in abstracto gebraucht, z.B. Haus. Wenn ich nun von allen Häusern sage, sie müssen ein Dach haben: so ist es usus universalis. Es ist aber immer derselbe Begriff, und wird hier ganz allgemein gebraucht. Denn ein Dach zu haben gilt für alle Häuser. Der Gebrauch des Begriffes geht also allgemein auf alle. Aber ein besonderer Gebrauch geht nur auf viele. Z.B. einige Häuser müßen ein Thor haben. Oder ich gebrauche den Begriff nur für ein einzelnes Ding. Z.B. dieses Haus ist so oder so abgeputzt. Wir theilen also nicht die conceptus in universales, particulares und singulares ein, sondern die Urtheile, wie wir bald hören werden. Ich kann in meinem Urtheil das Ding mit allen, einigen, und einem einzelnen Dinge vergleichen. Dieses dient dazu, unsere Ausdrücke genau zu bestimmen, und nicht von Allem in allgemeinen Begriffen zu reden. In der Art sind alle Begriffe allgemein, und können immer von andern Dingen in gewisser Art gelten. Z.B. Gewächse gilt für alle Gräser, aber auch für einige Körper. Der Verstand hat das Vermögen der Begriffe, und man kann ihn auch so definiren. Wir haben oben gesagt, der Verstand ist das Vermögen der Regeln. Aber dieses ist einerley, denn wenn ich einen Begriff gebe, gebe ich immer ein Fundament von Regeln.",
     "pages": [
      {
       "p": 909,
       "i": 928
      }
     ],
     "aaEnd": 909,
     "ms": [
      {
       "p": 363,
       "i": 131
      },
      {
       "p": 364,
       "i": 794
      },
      {
       "p": 365,
       "i": 1455
      },
      {
       "p": 366,
       "i": 2125
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s08-002",
     "kind": "text",
     "aa": 909,
     "text": "Begriffe entstehen per comparationem, reflexionem et abstractionem. In einem Bewußtseyn fasse ich viele Vorstellungen, in denen ich vergleiche, was nur eine Wiederhohlung des Andern ist. Aus der reflexion erkennt man also das, was viele Dinge gemein haben, hernach nimmt man die abstraction weg, worin sie nicht überein kommen, und denn bleibt repraesentatio communis übrig. Kein Begriff wird also ohne Vergleichung, ohne Wahrnehmung einer Einstimmung und ohne abstraction. Könnte ich nicht abstrahiren: so würde ich keinen Begriff haben, weil mir da immer etwas Anders in den Sinn kommen würde, als was der einzelnen Vorstellung gemein ist. Z.B. Wenn Jemanden beym Ausdruck Haus nur immer der Krug, den er gesehen, in den Sinn käme, der behielt immer einen intuitus. Man sieht wohl durch Weglassen und abstrahiren wird kein Begriff, aber es vollendet ihn, und macht, daß er kein singularis bleibt. Das positive beym Entstehen eines Begriffes ist compariren und reflectiren, das negative abstrahiren. Manchem Menschen wird es schwer zu abstrahiren, wenn er gleich compariren und reflectiren kann. Daher hat man seine liebe Noth, wenn man mit solchen Menschen zu thun hat. Die Gewohnheit hat sie schon dahin gebracht, daß es ihnen große Mühe macht, das wegzulassen, was nicht zum Begriff gehört. Daß die meiste Menschen so schlechte Grundsätze haben, kommt daher, weil sie so pöbelhaft",
     "ms": [
      {
       "p": 367,
       "i": 596
      },
      {
       "p": 368,
       "i": 1384
      }
     ]
    },
    {
     "id": "wiener-s08-003",
     "kind": "text",
     "aa": 910,
     "text": "denken, und nicht das Anständige, Geziemende etc. von einem Begriffe der Tugend abstrahiren können."
    },
    {
     "id": "wiener-s08-004",
     "kind": "text",
     "aa": 910,
     "text": "Abstracter Begriff ist nur im Gebrauch abstract, er ist minder abstract, wenn ich in concreto rede, was ich in abstracto gesagt habe. Z.B. Körper ist eine Ausdehnung, die eine Figur hat. Nun gebe ich Exempel, d.i. ich nehme alle Dinge, die ich beym Begriff weggelassen habe. Der Begriff wird in abstracto gebraucht, wenn ich alle Unterschiede weglaße, die dem Dinge gemein sind. Der Begriff entspringt folglich zwar immer durch abstrahiren, aber der Begriff selbst ist nicht abstract, sondern sein Gebrauch. Der Gebrauch des Begriffes in concreto hat seine Grade, bis endlich der Begriff maxime in concreto wird, und nur einem individuo zukommt. Eben so kann ich auch in der abstraction immer weiter hinaus gehen. Z.B. Mensch, Thie r, lebend Wesen etc.",
     "ms": [
      {
       "p": 369,
       "i": 687
      }
     ]
    },
    {
     "id": "wiener-s08-005",
     "kind": "text",
     "aa": 910,
     "text": "Ein jeder Begriff enthält mehr mögliche Begriffe unter sich, und enthält das, was verschiedenen Vorstellungen mehrer Dinge gemein ist. Wenn also ein Begriff etwas enthält, was mehreren Dingen gemein ist: so ist er selbst in andern möglichen Begriffen enthalten, er ist ein Theil von ihnen, enthält aber nur das, was sie gemein haben, und läßt weg, was in ihnen verschieden ist. Ein jeder allgemeiner Begriff ist also in den Begriffen enthalten, woraus er abstrahirt ist. Z.B. der Begriff Metall kommt dem Golde, Kupfer etc. zu."
    },
    {
     "id": "wiener-s08-006",
     "kind": "text",
     "aa": 910,
     "text": "Umgekehrt sind diese Dinge unter ihm enthalten, und dieses macht eben die Brauchbarkeit eines Begriffes aus. Bey der Anschauung habe ich keine andere Brauchbarkeit, als nur einen einzigen Gegenstand. Nun enthält immer der Grund die Folgen unter sich. Demnach ist jeder allgemeine Begriff ein Erkenntnißgrund von vielen Dingen, und ausgerüstet mit einem Begriff habe ich einen Erkenntnißgrund vieler Dinge. Der Begriff selbst aber ist auch in den Dingen enthalten. Denn er macht nur einen Theil ihrer Vernunft aus.",
     "ms": [
      {
       "p": 370,
       "i": 188
      }
     ]
    },
    {
     "id": "wiener-s08-007",
     "kind": "text",
     "aa": 911,
     "text": "Man nennt einen Begriff einen höhern Begriff, so fern er andere unter sich enthält, und jeder Begriff ist folglich eine höhere Vorstellung anderer, weil er immer viele unter sich enthält. Ein niedriger Begriff ist ein solcher Begriff, der unter andern enthalten ist. Z.E. der Mensch, der ist ein Thier. Der Begriff des Thieres kommt allen Menschen zu, und auch noch mehreren Dingen, folglich ist Mensch ein niedrigerer Begriff, als Thier. – Alle conceptus stehen so in relation gegen einander, daß ein conceptus immer respective gegen den andern superior und inferior ist, so fern einer unter dem andern enthalten ist, und hieraus wird endlich eine Reihe subordinirter Begriffe. Der Conceptus infimus läßt sich nicht bestimmen. Denn so bald ich einen Begriff habe, den ich auf individua anwende, so wäre es doch noch möglich, daß unter den individuis, ob ich gleich keinen Unterschied mehr mache, doch noch kleinere Unterschiede statt finden. In dieser gradation nun ist doch immer einer wieder höher, als der andere, bis ich zum höchsten komme. Die niedrigste Erkenntniß ist die Anschauung, weil sie immer auf etwas eigenes geht. Den conceptum summum kann ich angeben, weil es doch einen Begriff geben muß, in dem ich Alles weglassen kann. Denn wenn ich einen höhern Begriff machen will: muß ich immer abstrahiren. Kann ich aber nicht abstrahiren: so läßt sich kein höherer Begriff mehr machen, z.B. von Etwas. – Den conceptum superiorem nennen wir in Ansehung dieses inferioris ein genus. Wenn wir also viele conceptus mit einander vergleichen: so können wir einen jeden Begriff in Ansehung des inferioris das genus, in Ansehung seines superioris Species nennen. Genus und species machen folglich an sich selbst keinen Unterschied in den Begriffen, sondern nur in der Relation der Begriffe. Gelehrter ist ein genus in Ansehung der philosophen, aber Gelehrter ist eine species in Ansehung des Menschen. Nun können wir uns eine Reihe von generibus und speciebus denken, unter denen doch einige genera superiora werden seyn müßen, bis wir endlich auf ein genus summum, nähmlich Etwas, Gegenstand kommen.",
     "pages": [
      {
       "p": 911,
       "i": 596
      }
     ],
     "aaEnd": 911,
     "ms": [
      {
       "p": 371,
       "i": 428
      },
      {
       "p": 372,
       "i": 1131
      },
      {
       "p": 373,
       "i": 1870
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s08-008",
     "kind": "text",
     "aa": 913,
     "text": "Jede species ist zugleich ein genus in Ansehung der unter ihr enthaltenen species. Species infima ist nur comparativ infima, und im Gebrauch die Letzte. Möglich muß es noch immer seyn, eine andere species zu finden, wodurch diese denn wieder zum genus werden würde. Aber unmittelbar auf die individua angewandt kann eine species species infima heißen. – Wir können hier den Umfang und den Inhalt eines Begriffes in Erwägung ziehen. Sphaera ist der Umfang eines Begriffes, und geht auf die Menge der Dinge, die unter dem Begriff enthalten sind. Nach dem Inhalt betrachten wir den Begriff, wenn wir auf die Menge der Vorstellungen sehen, die in dem Begriffe selber enthalten sind. Je größer der Umfang eines Begriffes ist, desto kleiner ist sein Inhalt, d.i. desto weniger enthält er in sich. Z.B. der Begriff Mensch hat einen großen Umfang, aber der Begriff Neger enthält noch mehr, nähmlich auch den Begriff der schwarzen Farbe hat folglich mehr Inhalt. Je höher nun ein Begriff ist, desto mehr muß man vom Mannigfaltigen abstrahiren, und desto mehr schwindet der Inhalt. Er ist ein desto höherer Begriff, in je mehreren Dingen er enthalten ist, und je mehr er das enthält, was mehreren Dingen zukommt. Da ich nun beym höchsten Begriffe so viel weglaßen muß, daß mir nur das übrig bleibt, was allen Dingen gemein ist: so enthält dieser eben darum das Allerwenigste in sich. Aus dem höchsten Begriffe werden folglich die Niedrigsten bestimmt werden, und dies begreift sogleich die richtige determination aller Dinge. Ein durchgängig bestimmter Begriff ist der Niedrigste unter allen. Denn er ist nicht mehreren Dingen gemein. Ein höherer Begriff, der multimode indeterminirt ist, und der höchste Begriff ist der, der in allen Dingen indeterminirt ist. Die logische sphaera wächst immer, wie ein Goldblatt sich streckt, wenn es an der Dicke verliert, und eben deswegen wird es dem Menschen so schwer in die Höhe zu gehen, und Sachen ohne Inhalt zu denken. Je mehr die Begriffe hingegen der Erfahrung näher kommen, desto voller oder concreter ist die Vorstellung. Es fragt sich, was besser sey, eine sehr concrete oder sehr abstracte Vorstellung, daß man sich da individuis, oder generi summo nähert? Resp.: das eine ist so gut, wie das andere. Es ist schön, wenn unsere Vorstellungen eine große sphaere haben. Denn da ist ein Begriff allerwärts gültig für das, was unter ihm enthalten ist, folglich beruht die Allgemeinheit der Erkenntniß immer auf der Sphaere. Aber dem ungeachtet verliert der Begriff doch am Inhalt, und dieser Mangel ist unvermeidlich, und in Ansehung des Menschenverstandes bedauernswürdig. Ein jeder niedriger Begriff wird auch angustior, ein jeder, der eine höhere sphaeram hat, latior genannt Das genus ist also immer conceptus latior, species conceptus angustior. Wenn zwey Begriffe neben einander stehen, und einerley sphaeram haben: so werden sie conceptus reciproci genannt. Das Kapitel von den definitionen ist in der Logic das allerwichtigste. Denn es ist immer die größte Forderung, die man an einen philosophen thun kann, daß er seinen Begriff definiren soll. Alle logische Vollkommenheit unserer Erkenntniß bestand darin, daß unser Begriff deutlich war. Die zweyte Vollkommenheit war, daß er auch zu gleicher Zeit complet war, daß die Deutlichkeit nähmlich nicht bloß auf einigen klaren Merkmahlen beruhete, sondern auf so vielen als zusammen genommen den ganzen Begriff ausmachen. Wenn nun der Begriff ausführlich ist: so fehlet freylich kein Merkmahl. Aber obgleich keines fehlet: so könnte doch vielleicht eines überflüßig seyn, indem ein Merkmahl schon im andern enthalten seyn könnte. Dieß ist eine Unvollkommenheit im Begriff, wenn wir Merkmahle unnöthiger Weise multipliziren, und durch tautologien ein Merkmahl zu vielen Merkmahlen machen. Demnach gehöret zur logischen Vollkommenheit des Begriffes auch, daß der Begriff abgemessen sey, d.i. daß der Begriff nicht mehr Merkmahle enthalte, als nöthig sind, den Begriff auszumachen. Abgemessen, praecisus ist wohl kein gut lateinischer Ausdruck. Indessen determinatus, welches der autor abgemessen nennt, heißt gar nichts. Denn indeterminatus ist ein Begriff, der zu wenig enthält, folglich determinatus wäre ein Begriff, wo immer mehr hinzu gesetzt wird, und der folglich nicht ausführlich ist. Aber praecidere wird bey Gewächsen vom Beschneiden gebraucht, und so ist es auch mit unsern Begriffen, die wir gleich in Ansehung der überflüßigen Merkmahle beschneiden. Wenn wir completudo und praecision zusammen nehmen: können wir einen Begriff adaequat nennen. Er ist dem Gegenstande angemeßen, wenn die Merkmahle nicht mehr, oder weniger enthalten, als gerade der Begriff ausmacht. Damit der Begriff nicht so klein sey, muß er complet, damit er auch nicht so groß sey, praecis seyn. Eine definition ist also ein conceptus distinctus adaequatus. Wolff aber nimmt das Wort adaequat ganz anders, und nennt einen Begriff adaequat, wo ich nicht bloß klare Merkmahle habe, sondern die Merkmahle selber deutlich erkenne. Dieses sind aber intensive Grade der Deutlichkeit, von denen hier nicht geredet wird. Sind nun die Merkmahle klar: so ist es schon eine definition hinten her. Kann ich auch die Merkmahle definiren: so ist dieses denn eine definition der T heile der definition. Wenn schon bey ihm der Begriff adaequat heißt, deßen Merkmahle bloß deutlich sind: so ist er ja schon am Ende. Allein man kann ja noch Merkmahle von Merkmahlen deutlich machen. Bey uns aber vollendet der Ausdruck, adaequat, oder conceptus adaequatus die Definition und paßt auf den Gegenstand. Unsere definition sagt folglich eben so viel, als definitio est conceptus distinctus completus praecisus.",
     "pages": [
      {
       "p": 912,
       "i": 1071
      },
      {
       "p": 913,
       "i": 3672
      }
     ],
     "aaEnd": 913,
     "ms": [
      {
       "p": 374,
       "i": 461
      },
      {
       "p": 375,
       "i": 1106
      },
      {
       "p": 376,
       "i": 1853
      },
      {
       "p": 377,
       "i": 2570
      },
      {
       "p": 378,
       "i": 3294
      },
      {
       "p": 379,
       "i": 3932
      },
      {
       "p": 380,
       "i": 4625
      },
      {
       "p": 381,
       "i": 5339
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s09",
   "title": "Eintheilung aller definitionen",
   "titleSrc": "line",
   "headings": [
    "Eintheilung aller definitionen."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s09-001",
     "kind": "text",
     "aa": 914,
     "text": "Die definition hat eine gewiße Vollkommenheit, über die nichts gehen kann. Man könnte einwerffen: gebt ihr in der definition nicht Merkmahle von Merkmahlen? Resp. Man kann auch die Merkmahle der Merkmahle definiren, und daraus eine neue definition machen. Da sie also die größte Vollkommenheit eines Begriffes ausmachen: so müssen wir alle requisita derselben genau kennen, und sehen, in wie fern es angeht, welche zu machen, wie weit wir damit langen. Alle unsere Begriffe sind entweder gegebene, oder gemachte Begriffe. Ein Begriff ist gegeben, so fern er nicht aus meiner Willkühr entspringt. Er kann aber entweder a priori bloß im Verstande gegeben seyn, oder a posteriori durch die Erfahrung. Ich habe viele Begriffe, die mir durch die Natur meines Verstandes gegeben sind, und die ich nicht erdichtet habe. Z.B. der Begriff von Ursache, Zeit etc. Eben so werden uns viele Begriffe durch die Erfahrung gegeben. Z.B. daß das Wasser ein flüßiger Körper ist.",
     "pages": [
      {
       "p": 914,
       "i": 387
      }
     ],
     "aaEnd": 914,
     "ms": [
      {
       "p": 382,
       "i": 350
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-002",
     "kind": "text",
     "aa": 914,
     "text": "Den conceptibus datis werden contradistinguirt die conceptus factitii, die gemachte Begriffe, die gleichfalls entweder a priori, oder a posteriori gemacht werden. A priori ist ein Begriff gemacht, wenn er, ohne daß die Gegenstände durch die Erfahrung gegeben sind, durch pures Nachdenken gemacht ist. Z.B. ich stelle mir ein 1000 Eck vor, ohne es je gesehen zu haben. Ein solcher Begriff heißt auch conceptus fictitius, ein gedichteter Begriff. Beßer dünkt mich ein ausgedachter Begriff. Ich kann auch einen Begriff a posteriori machen, so daß der Gegenstand mir in der Erfahrung gegeben wird. Z.B. ich habe ein Stück Metall, das ist immer a posteriori gegeben, nicht gemacht. Will ich aber einen deutlichen Begriff davon haben: so muß ich das Metall nach allen Eigenschaften probiren, und auf solche Weise find ich sie durch verschiedene Erfahrungen, die nicht im Begriffe liegen, die Natur des Metalles ist also ein gemachter Begriff a posteriori.",
     "ms": [
      {
       "p": 383,
       "i": 71
      },
      {
       "p": 384,
       "i": 786
      }
     ]
    },
    {
     "id": "wiener-s09-003",
     "kind": "text",
     "aa": 914,
     "text": "A posteriori einen Begriff machen heißt also der gegebenen Erfahrung weiter nachspüren, und so einen adaequaten Begriff herausziehen. – Das wäre also nichts mehr, als den Begriff erweitern. –"
    },
    {
     "id": "wiener-s09-004",
     "kind": "text",
     "aa": 914,
     "text": "Alle unsere Begriffe, sofern sie uns gegeben werden, es sey a priori oder a posteriori, können nur per analysin definirt werden, durch die Zergliederung. Denn weil er gegeben ist: so kann ich ihn nicht anders deutlich machen, als daß ich die Merkmahle, die in ihm liegen, klar mache, und das ist eben denn analysis. Ist diese analysis complet: so wird daraus eine complete Deutlichkeit. Sind der Merkmahle hernach nicht so viel: so ist sie praecis, und so entsteht eine definition.",
     "ms": [
      {
       "p": 385,
       "i": 359
      }
     ]
    },
    {
     "id": "wiener-s09-005",
     "kind": "text",
     "aa": 915,
     "text": "Wenn aber Begriffe nicht gegeben, sondern gemacht sind, so daß wir nicht bloß die Deutlichkeit des Begriffes hervor bringen sollen, sondern den Begriff selbst machen sollen: so werden wir nur per synthesin eine definition zu Stande bringen. Z.B. wenn ich mir einen Geist vorstellen will: so muß ich mir den Begriff machen. Ich sage: ich will mir ein denkendes Wesen vorstellen, das mit keinem Körper verbunden ist. Hier habe ich durch die definition den Begriff allererst gemacht. Gemachte Begriffe sind also nicht anders möglich zu definiren, als per synthesin. Die ganze Mathematic definirt per synthesin, sie definirt nicht gegebene, sondern gemachte Begriffe. Ich will mir eine Figur denken, sagt der mathematicus, die so und so aussehen, und so und so heißen soll. Man kann auch einen Begriff a priori factitium haben, deßen materialien zwar die Erfahrung gegeben, der Begriff indeßen selbst ist gemacht worden. Z.B. Man denke sich eine unüberwindliche Vestung, dergleichen es doch gar nicht gibt. Die Materialien als Graben, Stein – liegen in der Erfahrung. Der Begriff selbst ist factitius. So verhält es sich mit dem, der ein neues Instrument erfindet.",
     "pages": [
      {
       "p": 915,
       "i": 332
      }
     ],
     "aaEnd": 915,
     "ms": [
      {
       "p": 386,
       "i": 597
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-006",
     "kind": "text",
     "aa": 915,
     "text": "A posteriori gibt es aber auch factitios conceptus. Wenn ich eine Erfahrung definiren will dadurch, daß ich das, was nicht in meinem Begriff enthalten ist, durch die Erfahrung erkläre: so muß dieses auch per synthesin geschehen. Ich will mir einen erweiterteren Begriff verschaffen, als ich hatte, dardurch kriege ich zuletzt einen Begriff, der aus Merkmahlen besteht, die ich per Synthesin aus der Erfahrung zusammen las. – Es ist also eine allgemeine Regel, alle gegebene Begriffe können nur analytisch, alle gemachte Begriffe, sie seyen durch den Verstand, oder die Erfahrung gemacht, synthetisch definirt werden. Wenn kann ich sagen, daß ein Begriff in der analysi definirt werde? Wenn alle seine Merkmahle complet und praecis sind. Wenn können wir gewiß überzeugt seyn, daß unsere analysis complet sey? Resp. Wir können es niemahls seyn, weil es nur durch Proben geschehen kann, bey denen wir noch immer vieles übersehen können, folglich alle analytische definitionen sind mit einer Unsicherheit verbunden. Wenn ein Begriff ein Erfahrungsbegriff ist: so ist es noch weniger merklich zu wissen, daß ich richtig analysirt habe. Durch die analysis hat man nie apodictische Gewißheit. Alle analytische definitionen kennen wir so, daß man von ihnen kein sicheres criterium angeben kann.",
     "ms": [
      {
       "p": 387,
       "i": 156
      },
      {
       "p": 388,
       "i": 894
      }
     ]
    },
    {
     "id": "wiener-s09-007",
     "kind": "text",
     "aa": 915,
     "text": "Synthetische definitionen, so fern sie einen gedichteten Gegenstand haben, können niemahls irren, weil ich nach meiner Willkühr sage, ich will mir das denken. – Synthetische definitionen aus der Erfahrung gezogener Begriffe sind ganz und gar unmöglich. Wir können keinen Gegenstand in der Erfahrung complet machen, und alle die Merkmahle, die den Begriff ausmachen, angeben. Denn die experimental",
     "ms": [
      {
       "p": 389,
       "i": 299
      }
     ]
    },
    {
     "id": "wiener-s09-008",
     "kind": "text",
     "aa": 916,
     "text": "physic entdeckt von Zeit zu Zeit noch immer neue Eigenschaften der Körper."
    },
    {
     "id": "wiener-s09-009",
     "kind": "text",
     "aa": 916,
     "text": "Analytisch mache ich einen gegebenen Begriff deutlich, indem ich den Begriff bloß exponire, per synthesin aber mache ich mir einen deutlichen Begriff. Wenn wir einen Begriff analytisch definiren sollen: so ist er uns nur gegeben, und wir sollen ihn nur complet und praecis machen. – Ist diese analysis nur incomplet: so ist das wohl keine definition, aber es ist doch schon ein Grad der Deutlichkeit, die weiter fortgesetzt werden, und sich immer mehr der completudini nähern kann. Ehe ein Begriff complet wird, muß er doch vorher nothwendig incomplet seyn, und zweytens ist es ja auch nicht immer möglich, zu completen Begriffen zu gelangen. Sollte wohl ein deutlicher Begriff stattfinden, der noch nicht complet ist? Ich kann allerdings auch eine complete analysis gebrauchen, weil ich doch auch einige klare Merkmahle schon habe. Daher ist es bey einem jeden Begriffe nicht immer möglich, daß ich ihn definirt habe, und es ist nicht nothwendig, daß man, um von einem Gegenstande zu reden, ihn per analysin definirt habe. Denn wo ich nicht Alles sagen kann, muß ich nur so viel sagen, als ich mit Wahrheit sagen kann. Die definitionen sind folglich nicht so nothwendig, als man glaubt, und es ist dieses deshalb anzumerken, weil die definition in den meisten Fällen äußerst schwer ist, und die analytische Vollendung nicht immer erwartet werden kann. Daß man aber sicher sey, daß man bey der completen analysis genug erkenne, erhellet daraus, weil die incomplete analysis doch schon ein Theil der definition ist, und folglich doch nur wahr und richtig ist. Z.B. wenn ich sage, Tugend ist eine Fertigkeit in moralisch guten Handlungen, und ich lasse dabey weg, daß sie auch eine Herrschaft über unsere Neigungen ist: so frage ich: läßt sich aus dem ersten incompleten Begriffe gar nichts schließen? contraire. Aus dem ersten haben die meisten philosophen alle ihre Moral gefolgert. Aus jedem Merkmahle eines Dinges kann ich Folgen ziehen, erkenne ich nur einige Merkmahle im Dinge, so lassen sich einige Folgen ziehen, erkenne ich aber alles, so lassen sich alle Folgen ziehen. Zuerst also mit der definition anzufangen, wie doch in den meisten philosophien geschieht, und sich nicht eher auf etwas einzulassen, als biß man die definition voran hat, heißt wirklich alle Untersuchung unmöglich machen. Denn ich muß ja erst vom Unvollkommenen anfangen. Die Bemühung der philosophen ist freylich durch definitionen zur größten Vollkommenheit zu gelangen. Indeßen müssen wir nicht sagen, daß das, wovon keine definition",
     "ms": [
      {
       "p": 390,
       "i": 512
      },
      {
       "p": 391,
       "i": 1160
      },
      {
       "p": 392,
       "i": 1872
      },
      {
       "p": 393,
       "i": 2472
      }
     ]
    },
    {
     "id": "wiener-s09-010",
     "kind": "text",
     "aa": 917,
     "text": "gegeben worden, gar keine Abhandlung verdiene. Denn von vielen Dingen können wir keinen completen Begriff geben. Z.B. die Juristen haben noch nie eine definition von Billigkeit geben können."
    },
    {
     "id": "wiener-s09-011",
     "kind": "text",
     "aa": 917,
     "text": "Begriffe, die unabhängig von der Erfahrung a priori gegeben sind, können analytisch definirt werden. Denn hier betrift der Begriff einen Gegenstand, den ich nur durch den Verstand erkennen soll, folglich so viel ich davon sagen soll, muß in meinem Verstande sein, weil wir aus unserm Verstande nicht heraus gehen, und anderwärts suchen können. So hat es die ganze Metaphysic und Moral mit der analytischen definition zu thun. Aber obgleich diese beyde Wissenschaften die wahren objecte der analytischen definitionen sind: so ist doch offenbar, daß die definitionen nicht immer unumgänglich nothwendig sind, sondern bey der analytischen definition muß man nie damit anfangen, zu sagen, dies oder das soll eine definition seyn. Denn es erfordert einen Beweis, ob alle analysis complet sey, ich muß erstlich zeigen, daß die Merkmahle im Begriff liegen, und dann zeigen, daß sie zusammen genommen den Begriff ausmachen.",
     "ms": [
      {
       "p": 394,
       "i": 503
      }
     ]
    },
    {
     "id": "wiener-s09-012",
     "kind": "text",
     "aa": 917,
     "text": "Es wäre sehr vortrefflich, und würde unsern Erkenntnißen einen großen Werth geben, wenn wir in der philosophie alle solche dem Dinge angemessene Begriffe hätten, die dabey auch nicht die präcision überschritten, denn das ist die Erlangung unserer Wissenschaften. Allein da wir solches zu leisten nicht im Stande sind: so müssen wir uns mit vielen klaren Merkmahlen eines Begriffes behelfen, als wir in unserer Vernunft auffinden können. Solche incomplete Begriffe, die auch in der physic statt finden, nennen wir descriptionen.",
     "ms": [
      {
       "p": 395,
       "i": 347
      }
     ]
    },
    {
     "id": "wiener-s09-013",
     "kind": "text",
     "aa": 918,
     "text": "Gerade zu sagen zu wollen, daß dieses allein den Begriff ausmache, ist zu dictatorisch. Denn wir müssen erst sagen, wie wir zur analysi gekommen sind. Es ist also ganz falsch, was Wolff in seiner philosophie versucht, und jede seiner definitionen ist auch deshalb in der philosophie falsch. Der Begriff ist gemeiniglich incomplet analysirt, ob man gleich nicht läugnen kann, daß er ziemlich klare Merkmahle angibt, und dem ganzen Begriff oft sehr nahe kommt, und es lassen sich seine definitionen in der philosophie und dem Naturrechte dem ungeachtet sehr wohl gebrauchen, indem sie viel Scharfsinn zeigen. Er hatte das Voranschicken der definition in der mathematic gelernt, wo das freylich recht gut ist, weil diese synthetische definitionen hat. Man findet das selbst in Gesellschaften. Man spricht z.B. vom Rechte, und der Eine sagt: definirt mir das Recht. Er will, daß ich die ganze Tiefe des Begriffes soll ergründet haben, an statt daß man über das, was man weiß, und doch auch im Begriffe liegt, raisonniren könnte.",
     "pages": [
      {
       "p": 918,
       "i": 947
      }
     ],
     "aaEnd": 918,
     "ms": [
      {
       "p": 396,
       "i": 556
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-014",
     "kind": "text",
     "aa": 918,
     "text": "Daher kommt es auch, daß solche definitionen immer 99 / 100 falsch sind, und Baumeisters definirte philosophie wimmelt von Irthümern. – Von mathematischen definitionen ist keine einzige falsch, weil die Begriffe willkührlich gemacht sind, alle analytische aber sind gegebene Begriffe. Können Erfahrungsbegriffe analytisch definirt werden? Wenn der Naturforscher z.B. Waßer definirt als einen solchen flüßigen Körper ohne Geschmack und Farbe: so sieht man wohl, wie schwankend die definition ist. Wer sonst nicht Wasser kennt, wird es dadurch nicht kennen lernen. Es ist aber gar nicht nöthig, Erfahrungsbegriffe per analysin zu definiren. Denn wozu brauche ich eine solche definition? Denn wenn ich das Wort Wasser sage; so versteht mich der Andere. Aber um es ihn kennen zu lehren, dazu ist die definition ganz untauglich. Denn in dem Begriff Wasser liegt so sehr wenig, daß ich gleich aus dem Begriff heraus gehe, und durch die Erfahrung neue Merkmahle sammeln muß, das heißt aber synthetisch, und nicht analytisch, durch die Exposition einen Begriff definiren. Analytisch läßt sich der empirische Begriff wohl definiren nach dem, was darin liegt. Aber das sucht man nie, weil nur so wenig darin liegt. Synthetisch läßt er sich aber auch nicht definiren, weil wir nicht alle mögliche Merkmahle kennen können, die die Erfahrung von einem Gegenstande lehren kann, folglich Erfahrungsbegriffe können niemahls definirt werden.",
     "ms": [
      {
       "p": 397,
       "i": 285
      },
      {
       "p": 398,
       "i": 1045
      }
     ]
    },
    {
     "id": "wiener-s09-015",
     "kind": "text",
     "aa": 919,
     "text": "Das resultat von allem Gesagten ist also: unsere Begriffe sind entweder gegeben, oder gemacht. Die gegebene sind entweder empirische, oder Verstandesbegriffe. Der gegebene Erfahrungsbegriff kann weder per synthesin, noch per analysin recht erklärt werden, weil im erstern Falle ich ihn bloß [ Textlücke ] durch neue Merkmahle erklären kann, im letztern Falle zu wenig in ihm liegt, um ihn von andern unterscheiden zu können. Bey Verstandes- und zwar gegebenen Begriffen ist ebenfalls keine rechte analytische Erklärung möglich, welches aber nicht an der Sache, sondern an uns liegt, indem es schwer ist die Merkmahle eines Begriffes praecis anzugeben. Die willkürlichen Begriffe können so wohl a priori, als a posteriori, aber nur synthetisch gemacht werden. Synthetisch können nur conceptus arbitrarii (factitii) definirt werden, die per synthesin arbitrariam gemacht sind, wohin alle mathematische Begriffe gehören. Ja, was noch mehr ist, beym conceptu arbitrario muß man immer mit der definition vorangehen, weil dadurch eben der Begriff hervor gebracht wird, und weil ich eben dadurch declarire, was ich durch einen solchen Begriff sagen will, den ich willkürlich gemacht habe, folglich ohne definition wäre ein solcher Begriff nichts.",
     "pages": [
      {
       "p": 919,
       "i": 1040
      }
     ],
     "aaEnd": 919,
     "ms": [
      {
       "p": 399,
       "i": 316
      },
      {
       "p": 400,
       "i": 1067
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-016",
     "kind": "text",
     "aa": 919,
     "text": "Die nominal definition ist derjenige deutliche Begriff, der zureicht zur Unterscheidung einer Sache von andern. Real definition ist derjenige deutliche Begriff, der zureicht, um Alles, was der Sache zukommt, davon zu erkennen und abzusondern, sie reicht folglich innerlich zu, die Sache zu erklären, und das zu verstehen, was der Sache zukommt."
    },
    {
     "id": "wiener-s09-017",
     "kind": "text",
     "aa": 919,
     "text": "Sie ist eßentiell, und enthält den Begriff vom Wesen der Sache. Die nominal definition hingegen ist nur äußerlich zureichend, in der Vergleichung mit andern, um ihre identitaet oder Unterscheidung mit andern einzusehen. Sie bedeutet fast nichts mehr, als was der Ausdruck nominal definition sagt, eine gewiße Bezeugung der Benennung der Sache, um den Nahmen der Sache deutlich zu machen, die Sache selbst aber dadurch nicht besser einzusehen. Sie begreift nicht das Wesen der Sache in sich, sondern nur eine Vergleichung einiger Merkmahle des Unterschiedes mit andern. Sie kann daher auch nur bloß comparative Gültigkeit haben. Z.B. wenn ich sage: der Mensch ist ein Thier, das Vermögen zu sprechen hat. Hier kann ich ihn von allen Thieren (doch aber noch nicht vom Staar) unterscheiden. Indessen ist der Begriff in Vergleichung mit andern Thieren schon zureichend. –",
     "ms": [
      {
       "p": 401,
       "i": 255
      }
     ]
    },
    {
     "id": "wiener-s09-018",
     "kind": "text",
     "aa": 921,
     "text": "Wie kann ich wissen, daß mein Begriff zureichend ist, die Sache von allen Möglichen zu unterscheiden? Resp. Nur diejenigen Merkmahle können absolut hinreichen, die zusammen genommen das ganze Wesen der Sache ausmachen, denn das ganze Wesen der Sache kann nicht – zwey Dingen gemein seyn. Und dieses ist denn die real definition. Die nominal definitionen sind nur in tantum gültig, so weit ich Gebrauch davon mache. Die Real definitionen sind also die eigentlichen definitionen. Wenn Wolff sagt, auch das Entstehen des Begriffes könne aus der Real definition begriffen werden: so ist dieses falsch. Denn das Entstehen muß hernach aus der real definition geschlossen werden. Denn sie macht das Urtheil möglich, wie es wohl entstanden seyn könnte. Seine Beyspiele setzen das, was wir gesagt haben, sehr wohl ins Licht – wie er z.B. zur real definition angibt: ein Zirkel ist eine krumme Linie, die sich um einen festen Punkt herum bewegt, und deren Theile gleich weit vom Mittelpunkt entfernt sind, so ist das erste überflüßig, weil es aus dem letzten geschlossen werden kann. Das Entstehen ist nur eine Folgerung aus der real definition. Das sagt ja Wolff auch bloß. Sonst hat die real definition mit dem Entstehen nichts zu thun, sondern nur mit der innern Möglichkeit der Sache. – Wenn ich eine Sache nach einem attributo proprio kenne, so kann ich sie durch ein solches attributum proprium auch definiren. Z.B. der Mensch ist ein Thier, das urtheilt. Weil das Urtheil ein attributum proprium eines Menschen ist: so muß es nothwendig aus dem ganzen Wesen des Menschen herfließen. Wenn es nur aus einem Theile des Wesens flöße: so könnten mehrere Dinge, die verschiedenen Wesens sind, diesem Theile nach mit dem Wesen doch überein kommen. Die definition gilt also wirklich für das ganze Wesen. Denn sie kann nicht anders, als vom ganzen Wesen verstanden werden. – Durch die real definition läßt sich die Sache jederzeit, und von allen übrigen unterscheiden. Es ist sehr schwer Beyde zu unterscheiden, und oft sieht man für real definition an, was nur nominal definition war. Bey synthetischen Gegenständen sind die definitionen immer real. Denn der Gegenstand wird nur durch diese eine definition a priori gegeben, und dadurch ist es möglich ihn zu denken, aber von gegebenen analytischen Gegenständen reale definitionen zu machen ist sehr schwer. Ich kann nicht ein Mahl wissen, ob meine nominal definition zureichend ist, weil ich niemahls die Merkmahle finden kann, die Sache von allen möglichen Andern zu unterscheiden, weil ich sie nicht mit allen möglichen vergleichen kann, sondern nur denn, wenn ich weiß, daß meine Merkmahle den ganzen Begriff exhauriren, d.i. wenn ich eine real definition geben kann, ist gewiß auch eine nominal definition zureichend. So ist es mit allen definitionen in der Naturwissenschaft bewandt –. In der Moral, Metaphysic etc. hingegen müßen lauter real definitionen vorkommen, weil dieses doch das Ziel ist, wohin wir Alle unsere analysis, einen completen Begriff zu Stande zu bringen, richten müßen. Definition ist eigentlich ein Inbegriff, eine recension oder exposition von Merkmahlen, so fern sie die Materialien zu einem möglichen Begriff enthalten. Das Beschreiben ist keine bestimmte Regel. Man kann so weit, wie man will, umständlich seyn, oder sich kurz fassen. Wir können viel damit ausrichten, indem wir Sachen dadurch zuvor kenntlich machen. Dennoch gehen vor den definitionen solcher Begriffe, die empirisch sind, immer Beschreibungen vorher, ja da wir empirische Begriffe nicht definiren können: so sind sie nur einer Beschreibung fähig. Begriffe a priori hingegen, wenn sie per synthesin gemacht sind, z.B. in der mathematic müssen immer definirt werden. Ein gegebener Vernunftbegriff darf aber nicht immer definirt werden, sondern man nimmt denn oft mit einem incompleten Begriffe vorlieb. Beschreibungen aber in Vernunftbegriffen sind gar nicht paßend. So gibt z.B. Lavater, der durch die Lebhaftigkeit seiner phantasie mehr excursionen gibt, als daß er die Sachen erschöpfte, wenn er die Liebe beschreibt, sehr viele Wirckungen der Liebe an. Aber aus alle dem kann man praecis den Begriff nicht heraus bekommen, was Liebe ist. Vor speculative Wissenschaften schicken sich descriptionen gar nicht, sondern nur in praxi, wo ich mit meinem Begriff ein lebhaftes Bild verbinden kann.",
     "pages": [
      {
       "p": 920,
       "i": 1073
      },
      {
       "p": 921,
       "i": 3687
      }
     ],
     "aaEnd": 921,
     "ms": [
      {
       "p": 402,
       "i": 160
      },
      {
       "p": 403,
       "i": 965
      },
      {
       "p": 404,
       "i": 1753
      },
      {
       "p": 405,
       "i": 2552
      },
      {
       "p": 406,
       "i": 3340
      },
      {
       "p": 407,
       "i": 4064
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-019",
     "kind": "text",
     "aa": 921,
     "text": "Die Deutlichkeit ist das Allerwichtigste in der definition. Denn folgt die completudo. Die praecision aber ist nicht so wichtig, als die completudo. Diese praecision ist in manchen Fällen schwer, weil wir unvermerkt ein Merkmahl zwey Mahl nehmen, weil wir Sachen für verschieden halten, die verschiedene Nahmen haben. Z.B. ein Körper ist ein ausgedehntes theilbares Wesen. Die Ausdehnung liegt hier schon in der Theilbarkeit. Bey descriptionen nimmt man dieses Ganze gar nicht genau, weil man da nur den Satz zu einer möglichen definition sucht, die man vielleicht gar nicht machen will. So kann ich im Katechismus viele Beschreibungen von Gott nach seinen Eigenschaften geben, ob ich gleich am Ende sehe, daß der praecise Begriff von Gott ein Wesen aller Wesen ist. Selbst in der definition kommt nichts darauf an, wenn an der praecision etwas mangelt, und in der definition zu viel ist. Es kann das gar nicht schaden, ausgenommen daß man wider den Canon verstößt: quod fieri potest per pauca etc. Praecision ist nur ein Gesetz der Sparsamkeit, und erleichtert das Bewußtseyn der completudo. Wie beurtheilen wir eine vorkommende definition? Resp. Wir fragen:",
     "ms": [
      {
       "p": 408,
       "i": 467
      }
     ]
    },
    {
     "id": "wiener-s09-020",
     "kind": "text",
     "aa": 921,
     "text": "1.) Ob die definition als ein Satz wahr sey, ob wirklich dem Dinge das zukomme, was in der definition von ihm gesagt wird? Z.B. Grund ist das, woraus ich erkenne, warum etwas sey, ist ein wahrer Satz.",
     "ms": [
      {
       "p": 409,
       "i": 40
      }
     ]
    },
    {
     "id": "wiener-s09-021",
     "kind": "text",
     "aa": 921,
     "text": "2.) Der Begriff muß deutlich seyn. Wenn gleich etwas als ein Satz wahr ist: so ist es darum noch nicht als Begriff deutlich. So wird mir obiges Beyspiel durch die definition gar nicht deutlich. Denn warum heißt so viel, als durch welchen Grund. Folglich hätte ich gesagt: ein Grund ist das, woraus ich erkenne, durch welchen Grund etwas wahr ist. Dieses ist also idem per idem. Das ist ein Hauptfehler, der sehr gewöhnlich ist, und die meisten Erklärungen in discursen sind von der Art."
    },
    {
     "id": "wiener-s09-022",
     "kind": "text",
     "aa": 922,
     "text": "3.) Wenn der Begriff nur als ein Satz wahr ist, und auch deutlich ist: so kann ich fragen, ob der deutliche Begriff auch complet sey? Ob die Merkmahle zusammen genommen den ganzen Begriff ausmachen? Dieses ist sehr schwer. Denn wie können wir wissen, daß unserm Begriffe nichts mehr fehle, und daß wir nichts ausgelaßen haben? Wir bemerken zwar nicht, daß uns noch etwas fehlt. Aber das ist kein hinreichender Grund, den Begriff complet zu nennen. Denn wie oft bemerken wir etwas nicht, das wir hinten her doch noch finden?",
     "ms": [
      {
       "p": 410,
       "i": 116
      }
     ]
    },
    {
     "id": "wiener-s09-023",
     "kind": "text",
     "aa": 922,
     "text": "4.) Der ausführliche Begriff muß auch bestimmt seyn. Dieses läßt sich noch thun, und wenn es nicht da ist: so ist es kein großer Fehler. Die praecision ist die reduction der definition ad minimos terminos, so wie 12 / 24 zu 1 / 2 reducirt werden kann, so muß ich auch den Begriff praecidiren können. Es ist sehr schön, wenn wir es können, und alle unsere definitionen in sententieusen Sätzen auszudrücken wissen. Dieses ist die Eleganz einer Erkenntniß.",
     "ms": [
      {
       "p": 411,
       "i": 300
      }
     ]
    },
    {
     "id": "wiener-s09-024",
     "kind": "text",
     "aa": 922,
     "text": "Demnach kann eine falsche definition wahre Sätze enthalten, und eben deshalb möglich seyn, ob sie gleich für keinen der Sache angemessenen Begriff kann gehalten werden. Nur muß ich sie nicht umkehren. Sonst entsteht ein Fehler, indem das eine Merkmahl nicht die ganze Sache erschöpft."
    },
    {
     "id": "wiener-s09-025",
     "kind": "text",
     "aa": 922,
     "text": "Wodurch wird ein Begriff deutlich gemacht? Durch klare Merkmahle. Sind aber diese Merkmahle tavtologisch, d.h. ist eines in dem andern enthalten: so wird der Begriff nicht im mindesten deutlich, ob es gleich bisweilen so scheint, weil die tavtologie darin versteckt ist, worauf man bey Untersuchung der definition sehr zu sehen hat.",
     "ms": [
      {
       "p": 412,
       "i": 185
      }
     ]
    },
    {
     "id": "wiener-s09-026",
     "kind": "text",
     "aa": 923,
     "text": "Wie werden also definitionen gefunden? Es versteht sich von selbst, daß dieses nur die analytische definition angehe. Denn bey der synthesi eines willkürlichen Begriffes, wo ich einen Begriff mache, darf die definition nicht gefunden werden, weil ich deutlich heraus sage, was ich im Verstande erfunden habe. Solche definitionen des Mathematikers sind eigentlich nur declarationen seiner Willensmeinung, und mathematische definitionen bedürfen folglich gar keine Regel. Denn er darf es nur einem Jeden deutlich sagen, was vor einen Begriff er etabliren und festsetzen will. Doch versehen die mathematici bisweilen ihren Begriff, und zwar in alten Zeiten seltener, als in neueren. Euclides hat es nie gethan. Aber Wolff bringt alle philosophie in die mathematic. Wenn er den Begriff von der Aehnlichkeit gibt: so analysirt er den Begriff. Aber hier kann große Gefahr seyn, daß er seine analysis nicht complet gemacht habe. Alles aber, was der mathematicus sagt, muß ungezweifelt gewiß seyn. Er hätte daher sagen sollen, eine ähnliche Figur, die ich mir denken will, ist etc. Hier muß folglich immer synthetisch definirt werden.",
     "pages": [
      {
       "p": 923,
       "i": 960
      }
     ],
     "aaEnd": 923,
     "ms": [
      {
       "p": 413,
       "i": 435
      },
      {
       "p": 414,
       "i": 1065
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-027",
     "kind": "text",
     "aa": 923,
     "text": "Die Regeln bey der analytischen definition sind folgende: suche wahre Merkmahle. Du willst analysiren, daher attendire auf die Merkmahle, und suche wahre, die wirklich dem Dinge zukommen. Man könnte diejenigen Sätze, die durch die analysis eines Begriffes gefunden werden, durch die ich mir der Merkmahle des Begriffes bewußt werde, elementar Sätze nennen, weil sie die elemente zur definition darlegen. Denn ob zwar noch keine definition daraus wird: so sind es doch die Vorstellungen dazu etc. Z.B. wenn ich sage: Tugend ist eine Fertigkeit, eine Freyheit im Handeln etc. so suche ich mir hier durch die analysis ein Merkmahl nach dem andern, um dadurch zur definition zu gelangen.",
     "ms": [
      {
       "p": 415,
       "i": 574
      }
     ]
    },
    {
     "id": "wiener-s09-028",
     "kind": "text",
     "aa": 923,
     "text": "Nun analysiren wir den Begriff, und suchen so viel elementar Sätze als wir können. Denn aber müßen wir auch sehen, ob nicht in diesem oder jenem Merkmahl schon ein anderes liegt, und da muß man sich dann hüten, daß man in der definition nie ein Merkmahl zwey Mahl setzt. – Wenn ich nun wahre Sätze gesucht, und dabei gesehen habe, daß diese Merkmahle verschiedene Merkmahle sind: so sammle ich sie alle wieder, und vergleiche sie mit dem ganzen Begriff, und setze sie also wieder zusammen. Hier steckt nun eben die ganze Schwierigkeit, nähmlich das Zergliedern läßt sich noch wohl leisten, aber das zu wissen, ob die Merkmahle complet da sind, ist äußerst schwer, und wir haben Ursache, großes Mißtrauen darin zu setzen. Da wir also nicht stets behaupten können, daß unsere analysis complet gewesen sey: so müssen wir mit Furcht und Zittern unsere definition attendiren. Und da die Sache so schwierig ist: so würde ich sagen: ich werde zum Versuch definiren, ich werde eine definition feststellen, gleichsam wie einen Versuch, ich will mich nicht auf sie, als auf etwas fehlerfreyes verlaßen, und will dieselbe ansehen, als wenn sie nicht eine definition wäre. Hier kann ich denn behaupten, ist sie gleich keine definition: so muß sie doch 1.) ein wahrer Satz, 2.) ein deutlicher Begriff seyn, wenn er gleich kein complet deutlicher Begriff ist.",
     "ms": [
      {
       "p": 416,
       "i": 480
      },
      {
       "p": 417,
       "i": 1111
      }
     ]
    },
    {
     "id": "wiener-s09-029",
     "kind": "text",
     "aa": 924,
     "text": "Dieser praesumtiven definition werde ich mich nützlich bedienen können. Denn ich werde immer sagen können: cui competit definitum, ei competit definitio. Z.B. wer tugendhaft ist, hat einen festen Vorsatz zu handeln. Diese definitio kommt immer dem definito des Tugendhaften zu. Aber nicht umgekehrt werde ich sagen können: cui competit definitio, illi competit definitum. Ich kann nicht umgekehrt sagen: wer einen festen Vorsatz zu handeln hat, ist tugendhaft, und ich nenne ihn doch nicht tugendhaft. Ich sehe also wohl, daß ich von einer praesumtiven definition mir jeden directen Begriff machen kann, nur umkehren werde ich sie nicht können, weil ich nicht alles genannt, und nicht alle Merkmahle complet erkannt habe. Ich kann z.B. sagen: der Mensch ist ein vernünftiges Thier, aber nicht jedes vernünftige Thier ist ein Mensch. Denn in der definition fehlt was. – Glaube ich nun endlich, ich habe alle Merkmahle complet zusammen, und setze sie denn zusammen: so habe ich auf nichts weiter zu sehen, als daß meine definition praecis sey. Dieses letzte ist gut und nett, macht aber kein wesentliches requisitum der definition aus, so daß auch ohne praecision solche Begriffe ihre hinlängliche Brauchbarkeit haben. – Wenn ich das erste Stück, nähmlich bloß wahre Sätze in der definition gesucht habe: so definire ich obscurum per aeque obscurum, und man könnte das tavtologische Sätze nennen. – Mit definitionen, wenn sie sonst nur wahre Sätze sind, kann man viel ausrichten, wenn es gleich nicht ein ausführlicher Begriff ist. Allein wer reciprociren will, muß einen completen Begriff haben.",
     "pages": [
      {
       "p": 924,
       "i": 335
      }
     ],
     "aaEnd": 924,
     "ms": [
      {
       "p": 418,
       "i": 397
      },
      {
       "p": 419,
       "i": 1114
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s09-030",
     "kind": "text",
     "aa": 924,
     "text": "Allgemeine Regeln der definition."
    },
    {
     "id": "wiener-s09-031",
     "kind": "text",
     "aa": 924,
     "text": "1.) Es soll nicht durch einen Zirkel definirt werden. Durch einen Zirkel erklären heißt, durch ein solches Merkmahl definiren, das den Begriff als definitum voraussetzt. Z.B. wenn ich den Grund definire durch eine Ursache, warum etwas ist: so ist mein Merkmahl warum, d.i. aus welchem Grunde ein solches Merkmahl, das schon den Begriff vom Grund bedeutet. Dieser circulus vitiosus kommt sehr häufig vor. Man nimmt ein Merkmahl, und ohne weiter zu examiniren, ob der Begriff vor sich selbst unabhängig vom Begriff definitive klar ist, erklärt man idem per idem.",
     "ms": [
      {
       "p": 420,
       "i": 143
      }
     ]
    },
    {
     "id": "wiener-s09-032",
     "kind": "text",
     "aa": 925,
     "text": "2.) definitio nec sit latior, nec angustior suo definito. Ich verlange einen Inbegriff von Merkmahlen, die zusammen genommen den ganzen Inbegriff darstellen. Daher sucht man nicht mehr, nicht weniger, als nöthig sind, damit definitio und definitum reciprocabel sind, d.i. daß eines in die Stelle des andern gesetzt werden kann. Z.B. wenn ich sage: ein Körper ist ein undurchdringliches Wesen, welches schwer ist, so ist die definitio angustior definito. Denn durch das Merkmahl der Schwere ist der Begriff vom Körper zu eingeschränkt und enge. Denn er geht nur auf die Körper, die wir kennen, folglich wenn die definition gar zu viel Bestimmung hat: wird sie angustior definito. Je unbestimmter aber ein Begriff ist, desto größer ist seine sphaera, et latior est definitio definito. Z.B. wenn ich sage: Figur, so geht das auf viele Dinge. Sage ich: eine dreyeckige Figur: so schränkt sich das schon mehr ein etc. Latior definito ist der Begriff, der durch die definition nicht genug bestimmt ist, hingegen angustior, wenn er durch so viel Bestimmung zu sehr eingeengt wird.",
     "pages": [
      {
       "p": 925,
       "i": 668
      }
     ],
     "aaEnd": 925,
     "ms": [
      {
       "p": 421,
       "i": 201
      },
      {
       "p": 422,
       "i": 826
      }
     ],
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s10",
   "title": "Von der logischen Eintheilung",
   "titleSrc": "line",
   "headings": [
    "Von der logischen Eintheilung."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s10-001",
     "kind": "text",
     "aa": 925,
     "text": "Hierbey können wir uns ganz kurz faßen. Ein allgemeiner Begriff hat eine sphaeram, und hat niedrigere Begriffe unter sich. Diese Niedrigern untersuchen wir, in so fern die niedrigen Begriffe von einander sich unterscheiden. Die Eintheilung ist also die complete Vorstellung, so fern sie nach ihrem Unterschiede, darin sie zusammen genommen, der sphaera des ganzen Begriffes gleich sind, betrachtet werden. Z.B. alle Wesen auf der Erde sind organisirte und nicht organisirte. Die organisirten sind Gewächse oder Thiere. Die logische Eintheilung ist also nichts anders, als die Theilung der sphaera eines Begriffes. Dieses Eintheilen ist etwas anders, als das Theilen eines Begriffes. Beym Eintheilen unterscheide ich das Mannigfaltige unter dem Begriffe, d.i. die sphaeram. Beym Theilen analysire ich den Begriff. Den Begriff selbst zergliedere ich nicht, sondern nur die sphaeram theile ich ein, die niedrigen Begriffe, so fern sie unter dem Allgemeinen enthalten sind.",
     "ms": [
      {
       "p": 423,
       "i": 341
      }
     ]
    },
    {
     "id": "wiener-s10-002",
     "kind": "text",
     "aa": 926,
     "text": "Je größer die sphaera eines Begriffes ist, desto weniger enthält er in sich. Er enthält aber desto mehr in sich, je weniger er in sich hat. Wir theilen also bey einer jeden Eintheilung eines Begriffes diesen Begriff in seine Theile ein, ohne den Begriff zu theilen, d.i. man theilt die Menge der Dinge ein, die unter dem allgemeinen Begriff enthalten sind. Und dieses wird fortgesetzt werden können, es werden um so mehrere Glieder der Eintheilung da seyn, eine je größere sphaeram der Begriff hat, und je kleiner seine sphaera ist, desto weniger Glieder der Eintheilung werden da seyn. Da also ein jeder Begriff, je weniger Theile er hat, eine desto größere sphaeram hat: so folgt, daß ein Begriff desto mehr kann eingetheilet werden, je weniger Theile er hat. Z.B. Wir stellen uns viele Dinge unter dem Begriffe der Thiere vor. Es sind Thiere, die sich auf dem Lande, in der Luft, und im Wasser bewegen, und deren Aller Merkmahl die Bewegung ist. Wir haben hier nicht den Begriff des Thieres getheilet, d.i. analysirt. Denn da würden wir haben sagen müssen: Thier ist eine Materie, die da lebt etc. Nein, wir theilen den Begriff ein. Wir sehen nur, wie viel Arten unter dem Begriff enthalten sind. Bey jeder Eintheilung stellen wir uns vor, erstlich, daß eine Menge verschiedener Dinge ganz die sphaeram des Begriffes ausfülle, d.i. der sphaera des Begriffes gleich sind, daß folglich kein Begriff als Theil fehlet. Zweytens, daß diese verschiedene Begriffe, die alle in der sphaera des Begriffes enthalten seyn sollen, unter einander verschieden sind, daß also ein Theil der sphaera nicht in andern enthalten ist. Wir sagen also nach unserm gebrauchten Beyspiele: alle Thiere nach der Bewegung eingetheilt, sind solche, die sich entweder auf der Erde, oder in der Luft, oder im Wasser bewegen können. Dieses entweder, oder drückt aus, daß sie verschieden, und eine Art der andern entgegen gesetzt sey. Durch das Wort alle aber drückt man aus, daß die Merkmahle den Begriff zusammen ausmachen. –",
     "pages": [
      {
       "p": 926,
       "i": 1004
      }
     ],
     "aaEnd": 926,
     "ms": [
      {
       "p": 424,
       "i": 68
      },
      {
       "p": 425,
       "i": 762
      },
      {
       "p": 426,
       "i": 1522
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s10-003",
     "kind": "text",
     "aa": 927,
     "text": "Wir haben also bey jeder Eintheilung eine sphaeram und membra dividentia. Diese Letzter n müssen einander opponirt seyn, und müssen auch zusammen genommen die ganze sphaeram des conceptus ausfüllen. Z.B. wenn ich sage: alle Menschen sind entweder tugendhaft, oder lasterhaft: so geht das nicht an. Denn es gibt Menschen, die gar keinen Charakter haben, als z.B. ein Wilder. Es kommen in der Logic viele Regeln vor, von denen es gut ist sie anzuzeigen, damit man beweise, man verstehe alle Verstandeshandlungen, die bey seinen operationen vorkommen. Aber diese Regeln sind von der Art, daß man sich dieser Regeln als Vorschriften sehr gut überheben kann, weil sie ein Jeder schon von selbst beobachtet, und hernach auch in abstracto wohl vortragen kann. So ist z.B. diese Regel bey der Eintheilung: der eingetheilte Begriff muß nicht weiter, oder enger seyn, als alle Glieder der Eintheilung, wenn sie durch eine Entgegensetzung zusammen genommen werden können, das heißt, es muß kein Glied bey der Eintheilung fehlen. Denn wenn ein Glied fehlt: so hätte der Begriff eine größere sphaeram, weil ich nicht alle Glieder her numerirt hätte, d.i. er wäre weiter. Sag ich aber mehr Glieder, als wirklich sind: so hat der eingetheilte Begriff eine kleinere sphaeram. Hier sieht man, wie schwer eine Regel des Verstandes in abstracto gegeben werden kann. In concreto aber denkt sie ein Jeder, ohne sich deßen bewußt zu seyn. Daher muß man in solchen Fällen nicht an die Regeln in abstracto denken, sondern an die Exempel in concreto, die man vor sich hat. – Die Glieder der Eintheilung müssen einander auch entgegen gesetzt seyn. Denn sonst würde ich nicht entweder, oder sagen können. Wir sehen Alles hieraus, was schon in den prolegomenis pag. 14 erinnert ist. Der gemeine und gesunde Verstand ist der Regeln sehr wohl kundig. Er erkennt aber nur in concreto. Der speculative Verstand hingegen kann sie auch in abstracto beweisen. – In der mathematic sind solche Regeln recht gut. Sie ist aber auch eine Wissenschaft, die sich ohne abstraction gar nicht denken läßt. Ein eingetheilter Begriff muß keinem Gliede der Eintheilung widersprechen. Z.E. wenn ich sage: alle Triangel sind rund und viereckig. In der Eintheilung sollen die Glieder unter dem Begriff enthalten seyn, d.i. der Begriff der Eintheilung muß in ihnen enthalten seyn, welches hier nicht statt findet, weil weder runde noch viereckige Triangel unter dem Begriffe vom Triangel enthalten sind.",
     "pages": [
      {
       "p": 927,
       "i": 1621
      }
     ],
     "aaEnd": 927,
     "ms": [
      {
       "p": 427,
       "i": 155
      },
      {
       "p": 428,
       "i": 798
      },
      {
       "p": 429,
       "i": 1482
      },
      {
       "p": 430,
       "i": 2141
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s10-004",
     "kind": "text",
     "aa": 927,
     "text": "Man muß unterscheiden Eintheilung, Untereintheilung und Nebeneintheilung. Eintheilung ist überhaupt Vorstellung der mannigfaltigen Begriffe, die einander entgegen gesetzt werden, und die ganze sphaeram des Begriffes ausfüllen. Diese kann nun fortgesetzt werden. Ich kann einen Begriff in einem respectu, und wieder in einem andern respectu eintheilen. Alle sind dem Character nach tugendhaft, und lasterhaft, dem Geschlechte nach Männer und Frauen, dem Alter nach Junge und Alte, der Kenntniß nach Gelehrte und Ungelehrte etc. Dieses ist codivision, wo ich jedes Mahl nur einen gegebenen conceptum eintheile. Ich kann den Begriff aber auch untereintheilen. Denn theile ich die Glieder der Eintheilung ein. Eine jede subdivision ist also eine Eintheilung eines membri dividentis. Z.B. Menschen sind Gelehrte oder Ungelehrte. Gelehrte sind Vernunft-Gelehrte, Erfahrungs-Gelehrte. Die Vernunft-Gelehrte sind philosophen, oder Mathematiker etc. Für den, der species infimas annimmt, werden die subdivisiones zuletzt ein Ende haben. Da wir aber eben gezeigt haben pag. 373 daß nach der Natur der Sache jede species noch immer species inferiores enthalten kann: so werden wir nie auf solche Begriffe kommen, deren unterenthaltene Begriffe nicht sollten wieder eingetheilt werden können. Es muß also die subdivision ins Unendliche fortgehen, obgleich freylich manche subdivision comparative für uns ein Ende hat.",
     "ms": [
      {
       "p": 431,
       "i": 262
      },
      {
       "p": 432,
       "i": 941
      }
     ]
    },
    {
     "id": "wiener-s10-005",
     "kind": "text",
     "aa": 928,
     "text": "Die Codivision geht auch ins Unendliche. Z.B. den Triangel kann ich in Ansehung seiner laterum in gleichseitige, ungleichseitige, in Ansehung seiner Winkel in rechtwinklichte und schiefwinklichte eintheilen. Mehr laßen sich hier wohl nicht angeben. Aber in Ansehung der Dinge der Natur lassen sich unzählig viel codivisionen geben.",
     "pages": [
      {
       "p": 928,
       "i": 265
      }
     ],
     "aaEnd": 928,
     "ms": [
      {
       "p": 433,
       "i": 208
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s10-006",
     "kind": "text",
     "aa": 928,
     "text": "Quaeritur. Wie geht eigentlich alle Eintheilung fort? Ist die Eintheilung durch unsern reinen Verstand immer eine reine Theilung nur in zwey Theile, und denn in Untertheilungen, d.i. ist sie immer eine dichotomie, so daß alle übrigen Eintheilungen nur subdivisionen sind, oder kann ich gleich anfänglich einen Begriff in mehr, als zwey Theile theilen? Resp. Es ist offenbar, daß jede unmittelbare Eintheilung eine dichotomie ist. Wenn wir in mehrere Theile eintheilen: so ist es polytomie, welches jedes Mahl eine subdivision ist. Z.B. Wenn ich einen Apfel in viele Stücke theilen will: so muß ich ihn doch zuerst in zwey Stücke eintheilen. Diese mögen der Größe nach verschieden seyn, oder nicht. Hernach kann ich ihn in mehrere Theile theilen. Aber das sind denn schon subdivisionen. Jede unmittelbare Eintheilung ist folglich eine dichotomie. Die dichotomie wird gleich zu Stande gebracht durch das pure Wort: nicht. Z.B. die Triangel sind entweder gleichseitig oder nicht gleichseitig. Die gleichseitige sind entweder aequicrura oder scalena. Die Mathematiker, wenn sie die Triangel in aequilatera, aequicrura und scalena eintheilen, haben folglich die subdivision unter die unmittelbare Eintheilung gebracht und falsch eingetheilt. Da dieses aber so weitläufig ist, weil man bey vielen subdivisionen zuletzt den conceptum divisum aus dem Gesichte verliert: so wird es nicht immer beobachtet.",
     "ms": [
      {
       "p": 434,
       "i": 560
      },
      {
       "p": 435,
       "i": 1280
      }
     ]
    }
   ]
  },
  {
   "id": "s11",
   "title": "Von den Urtheilen",
   "titleSrc": "line",
   "headings": [
    "Von den Urtheilen."
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s11-001",
     "kind": "text",
     "aa": 928,
     "text": "Urtheil ist generaliter die Vorstellung der Einheit in einem Verhältniße vieler Erkenntniße. Ein Urtheil ist die Vorstellung der Art, wie die Begriffe allgemein objectiv zu einem Bewußtsein gehören. Wenn man sich zwey Vorstellungen denkt, wie sie als Erkenntniße zusammen verbunden sind, und zusammen Eine Erkenntniß ausmachen: so ist es ein Urtheil. In jedem Urtheil ist also ein gewißes Verhältniß verschiedener Vorstellungen, so fern sie zu einer Erkenntniß gehören. Z.B. ich sage: der Mensch ist nicht unsterblich. Bey dieser Erkenntniß denk ich den Begriff des Sterblich seyn durch den Begriff vom Menschen, und dadurch geschieht es, daß diese Erkenntniß, die die Einheit zweyer verschiedener Vorstellungen ausmacht, ein Urtheil wird.",
     "ms": [
      {
       "p": 436,
       "i": 541
      }
     ]
    },
    {
     "id": "wiener-s11-002",
     "kind": "text",
     "aa": 928,
     "text": "Zu jedem Urtheil gehört Materie und Form. Die Materie sind die Erkenntniße generaliter, und die Begriffe, die Form muß die Verbindung"
    },
    {
     "id": "wiener-s11-003",
     "kind": "text",
     "aa": 929,
     "text": "und Einheit der Vorstellung ausmachen. Wenn ich z.B. sage: Gott ist gerecht, das Böse wird bestraft, und der Andere fragte: sind dieses rhapsodien, die du vorbringst? so würde ich sagen: nein! weil Gott gerecht ist, so straft er das Böse, welches denn die Form ausmacht, wodurch die Erkenntniß zur Einheit gebracht wurde. Alle Verstandeshandlungen, die in einem Urtheile vorkommen, reduciren sich auf 4 und darnach werden alle Urtheile betrachtet.",
     "ms": [
      {
       "p": 437,
       "i": 322
      }
     ]
    },
    {
     "id": "wiener-s11-004",
     "kind": "text",
     "aa": 929,
     "text": "Nähmlich zuerst ihrer qualitaet nach werden sie in bejahende, verneinende, und unendliche Urtheile eingetheilet. Wenn gleich die Logici sagen, daß die unendliche als bejahende Urtheile gebraucht werden können: so ist das ein Satz, der in einer besondren Anmerkung kann vorgetragen werden. Im Grunde aber ist es der Form nach etwas anders, und im Anfang muß man so eintheilen, wie der Unterschied der Handlung unsers Verstandes ist. Wie viel aber darunter gedacht werde, gehört in eine Anmerkung."
    },
    {
     "id": "wiener-s11-005",
     "kind": "text",
     "aa": 929,
     "text": "2.) der quantitaet nach werden unsere Urtheile in allgemeine, besondere und einzelne Urtheile eingetheilet, und wenn gleich die Logici zeigen, daß einzelne Urtheile, was die Materie betrift, so viel sind, als allgemeine Urtheile: so ist doch ein einzelnes Urtheil von den allgemeinen unterschieden, und dieses muß anfänglich unterschieden werden, ob man gleich hernach sagen kann, daß die einzelnen zu den allgemeinen gehören. Die actus des Verstandes sind offenbar verschieden, ob man gleich sieht, daß der eine Gebrauch des Verstandes eben so viel gilt, als der andere.",
     "ms": [
      {
       "p": 438,
       "i": 62
      }
     ]
    },
    {
     "id": "wiener-s11-006",
     "kind": "text",
     "aa": 929,
     "text": "3.) der Relation nach werden die Urtheile in categorische, hypothetische und disjunctive Urtheile getheilet."
    },
    {
     "id": "wiener-s11-007",
     "kind": "text",
     "aa": 929,
     "text": "4.) der Modalitaet nach in problematische, aßertorische und apodictische Urtheile. Jede dieser 4 functionen gibt also eine besondere Art von Urtheilen ab.",
     "ms": [
      {
       "p": 439,
       "i": 83
      }
     ]
    },
    {
     "id": "wiener-s11-008",
     "kind": "text",
     "aa": 930,
     "text": "Die qualitaet ist die Relation der Begriffe, in so fern sie in relation der Einheit mit einander stehen, nach derselben werden sie eingetheilt in bejahende Urtheile, wenn ich einen Begriff mit dem andern positiv verbinde, in negative, wenn ich einen Begriff von dem andern trenne, in unendliche, wenn ich einen Begriff durch den andern einschränke. Z.B. die Menschen sind sterblich, hier bejahe ich die Sterblichkeit vom Menschen, oder ich denke mir die Menschen, wie sie unter dem Begriffe der Sterblichkeit stehen. Kein Mensch ist sterblich, hier verneine ich die Sterblichkeit von dem Menschen. Wenn ich mir den Menschen denke, denke ich mir ihn, wie er von alle dem unterschieden ist, was sterblich ist als z.E. Anima non est mortalis, ist ein verneinender Satz. Hingegen anima est non mortalis, ist ein unendlicher Satz. – Alle bejahende Sätze zeigen ihre Bejahung durch die copula est, welche copula das Verhältniß zweyer Begriffe anzeigt. Wenn die copula est simpliciter besteht, bedeutet sie die Verknüpfung zweyer – wenn die copula est mit dem non afficirt ist: so bedeutet sie opposition der beyden Begriffe, und zeigt an, daß der eine Begriff nicht zum andern gehört, oder nicht in der sphaera des andern enthalten sey. Z.B. anima non est mortalis, hier stelle ich mir vor, daß die Sterblichkeit die Seele nicht mit in sich schließt. Sage ich aber: anima est non mortalis: so sage ich nicht bloß, daß die Seele nichts sterbliches enthalte, sondern daß sie auch in der sphaera alles deßen, was nicht sterblich ist, enthalten sey. Es ist also hierbey etwas besonders gesagt, daß ich einen Begriff nähmlich nicht bloß von der sphaera eines andern Begriffes ausschließe, sondern auch den Begriff unter der ganzen übrigen sphaera denke, die nicht unter dem Begriffe, der ausgeschlossen ist, gehört. Ich sage eigentlich nicht: est immortalis, sondern ich sage: unter allen Begriffen überhaupt, die außerhalb dem Begriff der Sterblichkeit gedacht werden mögen, kann die Seele gezählt werden. Und dieses macht eigentlich die unendlichen Urtheile aus. –",
     "pages": [
      {
       "p": 930,
       "i": 692
      }
     ],
     "aaEnd": 930,
     "ms": [
      {
       "p": 440,
       "i": 716
      },
      {
       "p": 441,
       "i": 1384
      },
      {
       "p": 442,
       "i": 2055
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-009",
     "kind": "text",
     "aa": 930,
     "text": "Bejahung und Verneinung sind demnach qualitaeten im Urtheil. Ein verneinendes Urtheil ist nicht ein jedes Urtheil, das negativ ist, sondern ein solches verneinendes Urtheil, wo die negation die copula afficirt. Ein solches Urtheil aber, wo sie nicht die copula afficirt, sondern das praedicat, wie bey einem unendlichen Urtheil geschieht, und die copula also ohne alle negation ist, ist demnach ein bejahendes Urtheil, folglich sind alle unendliche Urtheile bejahend, weil die negation nur das praedicat afficirt. Obgleich aber jedes unendliche Urtheil die Natur des Bejahenden hat: so ist doch immer eine Verneinung da, zwar nicht des Urtheiles, d.i. des Verhältnißes der Begriffe, sondern des praedicats.",
     "ms": [
      {
       "p": 443,
       "i": 706
      }
     ]
    },
    {
     "id": "wiener-s11-010",
     "kind": "text",
     "aa": 930,
     "text": "Das Verhältniß ist zwar daßelbe, wie bey einem bejahenden Urtheil, aber die negation ist doch immer da, und folglich sind sie vom bejahenden unterschieden. Diese Sache scheint in der Logic eine subtilitaet zu seyn. Aber in der Metaphysic wird es von Wichtigkeit, sie hier nicht übergangen zu haben. Denn da ist der Unterschied zwischen realitaet, negation und limitation größer. Bey den limitationen denk ich etwas positives, aber nicht bloß, sondern auch negatives, und es ist etwas eingeschränktes positives. – Sie heissen judicia infinita, weil sie unbegränzt sind. Sie sagen nur immer, was nicht ist, und solcher praedicate"
    },
    {
     "id": "wiener-s11-011",
     "kind": "text",
     "aa": 931,
     "text": "kann ich unzählige machen, denn die sphaera der praedicate, die mit non afficirt vom subjecte können gesagt werden, ist unendlich.",
     "ms": [
      {
       "p": 444,
       "i": 0
      }
     ]
    },
    {
     "id": "wiener-s11-012",
     "kind": "text",
     "aa": 931,
     "text": "Das Princip von allen möglichen praedicatis contrarie oppositis muß aus der Sache kommen. Dieses ist das princip der durchgängigen Bestimmung. Diese durchgängige Bestimmung eines Dinges aber ist unmöglich, weil eine unendliche Erkenntniß dazu gehöret, alle die praedicate aufzusuchen, die einem Dinge zukommen, und ich kann daher ins Unendliche fortgehen, und doch das Ding nicht durchgängig bestimmen. Z.B. die Seele ist körperlich, nicht körperlich. Die Seele ist sterblich, nicht sterblich. Im logischen Gebrauche können sie hier vor bejahende gelten.",
     "ms": [
      {
       "p": 445,
       "i": 494
      }
     ]
    },
    {
     "id": "wiener-s11-013",
     "kind": "text",
     "aa": 931,
     "text": "Denn jedes Ding ist durch Bestimmung von andern unterschieden. Alle andere Dinge mit non afficirt können davon gesagt werden. Z.B. das Merkmahl des Steines ist die Härte. Nun kann ich immer fortgehen bis ins Unendliche, und sagen: ein Stein ist nicht Metall, nicht Holz etc. Sag ich dadurch aber etwas Neues? Denn was hilft es, daß ich weiß, daß alles Übrige ausser dem Begriff nicht Stein ist? Die sphaera dieses alles Übrigen ist unendlich, und deshalb nennt man diese judicia infinita. Die quantitaet der Urtheile unterscheidet sie so, daß allgemeine, besondere und einzelne Urtheile sind. Z.B. Alle Menschen sind sterblich, einige Menschen sind sterblich. Caesar ist sterblich. Hier habe ich judicium universale, particulare und singulare. Bey jedem judicio singulari gilt das praedicat vom Subject ohne Ausnahme, wenn ich sage: Caesar ist sterblich, so kann dabey keine Ausnahme statt finden, weil der Begriff Caesar ein einzelner Begriff ist, der nicht eine Menge unter sich faßt, sondern nur ein einzelnes Ding ist, folglich gilt er eben so ohne Ausnahme, als das judicium universale, weil er nähmlich gar keine Sphaeram hat, aus welcher etwas ausgenommen werden könnte. Das Universale gilt ohne Ausnahme, weil die sphaera Alles befaßt, und folglich ist singulare judicium im Gebrauche dem Universali gleich. Es ist aber doch ein Unterschied da, auf den man sehen muß, wiewohl im formalen Gebrauche Beyde zugleich gehen können.",
     "ms": [
      {
       "p": 446,
       "i": 667
      }
     ]
    },
    {
     "id": "wiener-s11-014",
     "kind": "text",
     "aa": 931,
     "text": "Die Logici haben einen Gebrauch, durch gewiße vocales die Sache deutlich zu machen in folgenden Versen:",
     "ms": [
      {
       "p": 447,
       "i": 76
      }
     ]
    },
    {
     "id": "wiener-s11-015",
     "kind": "text",
     "aa": 931,
     "text": "Asserit A Negat E sed universaliter ambo."
    },
    {
     "id": "wiener-s11-016",
     "kind": "text",
     "aa": 931,
     "text": "Asserit I Negat O sed particulariter ambo."
    },
    {
     "id": "wiener-s11-017",
     "kind": "text",
     "aa": 932,
     "text": "d.i. universaliter affirmans ist der vocalis A. Z.B. Alle Menschen sind sterblich. judicium universaliter negans soll durch E bedeutet werden. Z.E. Kein Mensch ist sterblich. Particulariter affirmans ist I. Z.B. einige Menschen sind gelehrt, particulariter negans ist O. Z.B. einige Menschen sind nicht gelehrt. Dieses gebraucht man hernach in der syllogistic, wo unverständliche Wörter z.B. celarent, barocco, die nichts bedeuten, gebraucht werden, um durch die 3 Vocales des Wortes die qualitaet des Satzes zu zeigen. – So hat man auch einige Schul-Sprichwörter, die man sich merken muß. Man fragt: quae, qualis, quanta est propositio? quae propositio bezieht sich auf die Relation, ob es categorische, hypothetische oder disjunctive Urtheile sind? qualis propositio, ob sie bejahend, oder verneinend sind? quanta propositio, ob sie allgemeine, oder besondere Sätze sind? Hieraus ist die qualitaet und quantitaet der Urtheile entstanden.",
     "pages": [
      {
       "p": 932,
       "i": 142
      }
     ],
     "aaEnd": 932,
     "ms": [
      {
       "p": 448,
       "i": 675
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-018",
     "kind": "text",
     "aa": 932,
     "text": "Der autor handelt hier noch von der Bedingung der Urtheile. Diese ist die Bestimmung des Subjectes in einem categorischen Urtheile, welche den Grund der Wahrheit enthält. Z.E. wenn ich sage: ein Mensch ist sträflich, so sehe ich, daß ohne Bedingung dieses dem Begriffe des Menschen gar nicht zukommt. Sage ich aber: ein Mensch, der lasterhaft ist, ist sträflich: so ist das Lasterhaft seyn die Bestimmung des Subjectes. Eigentlich gehört das nicht in die Logic, weil die Logic sich gar nicht mit dem Inhalte beschäftiget. – Zergliederung des Urtheiles besteht in der Beurtheilung eines Urtheiles, nach den 3 modis judicandi. Diese verlangte man in Schulen vorzeiten, wenn man fragte: quae, qualis, quanta?",
     "ms": [
      {
       "p": 449,
       "i": 477
      }
     ]
    },
    {
     "id": "wiener-s11-019",
     "kind": "text",
     "aa": 933,
     "text": "Nach der relation der Urtheile sind alle Urtheile categorisch, oder hypothetisch oder disjunctiv. Die Materie aller categorischen Sätze besteht aus einem Begriffe, in dem der Begriff des subjectes dem Begriffe des praedicats angehört. Z.B. der Mensch ist sterblich, das subject, Mensch, gehört dem Begriffe des praedicates, sterblich seyn an. – Bey hypothetischen Urtheilen besteht die Materie zum Begriff aus zwey Urtheilen. Z.B. wenn Gott gerecht ist: so wird das Böse bestraft. Ich will durch eine propositionem hypotheticam so viel sagen, daß, wenn das eine angenommen wird, das andere auch angenommen werden muß. Ein Urtheil gilt unter der Bedingung des andern. – Die propositiones disjunctivae sind ihrer Materie nach zwey, oder mehrere Urtheile, die immer in der Opposition betrachtet werden, und von denen ich mir vorstelle, daß alle diese Urtheile, wenn sie zusammen genommen werden, Alles ausmachen, was von dem Urtheile gesagt werden kann. Wenn eines derselben wahr ist: so sind alle falsch. Sind alle falsch außer einem: so muß das eine wahr seyn. Denn weil Alles gedacht ist, was gedacht werden kann und alle übrige falsch sind: so muß doch dieses eine wahr seyn. Die Materie der disjunctiven Urtheile sind also verschiedene Urtheile, die aber in Opposition betrachtet werden, so daß alle Urtheile zusammen genommen, das ganze Urtheil ausmachen. Man sieht wohl, daß sie bloß eine logische Eintheilung ausmachen. Denn wenn ich z.B. sage: alle Triangel sind entweder gleichschenklicht, oder gleichseitig, oder gleichwinklich: so ist der Triangel in so viele Glieder getheilet, als er eigentlich werden kann.",
     "pages": [
      {
       "p": 933,
       "i": 1059
      }
     ],
     "aaEnd": 933,
     "ms": [
      {
       "p": 450,
       "i": 501
      },
      {
       "p": 451,
       "i": 1215
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-020",
     "kind": "text",
     "aa": 933,
     "text": "Die Form bey den Urtheilen der Relation ist, daß entweder das Verhältniß eines subjectes mit dem praedicat, oder eines Grundes mit der Folge, oder das Verhältniß zweyer, oder mehrerer Urtheile, so fern sie disjunctive die sphaeram eines Begriffes erfüllen, erwogen wird. – Die categorischen Urtheile machen die basin aller Übrigen aus. Hier wird das Verhältniß des subjectes mit dem praedicat angezeigt. Das hypothetische ist aus zwey problematischen zusammen gesetzt; das disjunctive aber aus zwey, oder mehreren Urtheilen. Im hypothetischen Urtheile betrachte ich die Verbindung zweyer Urtheile, als Grund und Folge. Im disjunctiven sind alle categorischen Urtheile Glieder der Eintheilung, doch ist zu merken, daß die Urtheile bey den hypothetischen und disjunctiven Urtheilen sich nicht wieder in categorische verwandeln lassen. – Die materie eines categorischen Urtheiles besteht aus zwey Begriffen, die Form in der relation, in der der eine das subject, der andere das praedicat angeht. Z.B. Alle Menschen sind sterblich. – Im hypothetischen Urtheile besteht die Materie aus zwey Urtheilen. Z.B. wenn die Seele körperlich ist: so ist keine Hoffnung von der Nothwendigkeit eines andern Lebens. Das wenn drückt das Verhältniß aus. Wenn ein Urtheil so gedacht würde, ohne zu sagen, was wahr, und nicht wahr ist: so ist das ein problematisches Urtheil, welches angenommen wird, um zu sehen, ob das andere folgen wird, wenn ich dieses annehme. Es wird bloß seiner Möglichkeit nach gedacht. Ich sehe nur, ob das Urtheil möglich ist, wenn gleich die Sache selbst nicht möglich ist, da die Menschen ja auf allerhand sonderbare Sätze gekommen sind und sie behauptet haben.",
     "ms": [
      {
       "p": 452,
       "i": 300
      },
      {
       "p": 453,
       "i": 985
      },
      {
       "p": 454,
       "i": 1669
      }
     ]
    },
    {
     "id": "wiener-s11-021",
     "kind": "text",
     "aa": 934,
     "text": "Dieses ist also ein solches Urtheil, das ich der modalitaet nach nicht als wahr ansehe, und wird problematisch genannt. Ich sage: es ist kein anderes Leben, ich will immer dieses bloß denken, um zu sehen, wie der Satz, den ich denke, mit dem andern in Verbindung stehen würde. Also die Materie der hypothetischen Urtheile besteht aus zwey Sätzen. Nun sage ich: es mag mit den Sätzen beschaffen seyn, wie es will, so ist doch so viel gewiß, wenn ich annehme, die Seele sey körperlich, so kann man unmöglich sagen, daß sie unsterblich sey. In allen hypothetischen Urtheilen sind zwey Urtheile, die problematisch, nicht aßertorisch gedacht werden, und das Verhältniß eines Begriffes als Grund zur Folge ausmachen. – Man sagt sonst in Schulen, sagt es der autor, per thesin, d.i. aßertorisch oder per hypothesin, d.i. problematisch. Per thesin heißt etwas categorisch sagen, per hypothesin etwas problematisch sagen, wo aber die Sätze in so fern doch categorisch sind, als das Verhältniß und der nexus des Grundes mit der Folge angezeiget wird. Bey allen hypothetischen Urtheilen sind zwey problematische Urtheile. Die Form derselben besteht in der consequenz, nach welcher das eine Urtheil die Folge des andern ist. Der Grund im hypothetischen Urtheile heißt das antecedens, die Folge heißt das consequens, folglich besteht die materie der hypothetischen Urtheile aus dem antecedente und consequente, hingegen die Form ist die consequentia, d.i. was wir aus dem andern folgern.",
     "pages": [
      {
       "p": 934,
       "i": 338
      }
     ],
     "aaEnd": 934,
     "ms": [
      {
       "p": 455,
       "i": 664
      },
      {
       "p": 456,
       "i": 1333
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-022",
     "kind": "text",
     "aa": 934,
     "text": "Gut ist es, wenn wir für unsere Begriffe immer ganz eigenthümliche Worte haben können, und uns nicht mit Umschreibungen behelfen dürfen. So sind Urtheil und Satz dem Redegebrauch nach wirklich unterschieden. Wenn aber die Logici sagen: ein Urtheil ist ein Satz in Worte eingekleidet: so heißt das nichts, und diese definition taugt gar nichts. Denn wie werden sie Urtheile denken können ohne Wörter? Wir sagen also lieber: ein Urtheil betrachtet das Verhältniß zweyer Begriffe, so fern es problematisch ist, hingegen durch Sätze verstehen wir ein aßertorisches Urtheil. Im Urtheile probire ich meinen Satz: ich urtheile vorher, ehe ich behaupte. Beym Satz aber setze ich, und aßerire ich etwas, und eben in der aßertion besteht der Satz . Daher behaupten wir: die consequenz der hypothetischen Urtheile wird Satz genannt, weil diese Folgerung gewiß, und folglich eine position ist.",
     "ms": [
      {
       "p": 457,
       "i": 486
      }
     ]
    },
    {
     "id": "wiener-s11-023",
     "kind": "text",
     "aa": 935,
     "text": "Einige meinen, man könne ganz wohl hypothetische in categorische Sätze verwandeln. Man kann es thun. Aber da ist nicht mehr dieselbe Behauptung. Das heißt den hypothetischen Satz aufheben, und in seine Stelle einen andern setzen. Es scheinet wohl einerley zu seyn, wenn ich sage: Alle Menschen sind sterblich, oder wenn etwas ein Mensch ist, so ist es sterblich. Es ist aber verschieden. Denn bey dem zweyten Urtheile ist es problematisch, ob etwas sterblich sey. Das sterblich seyn wird nicht categorisch behauptet, sondern gilt nur denn, wenn das Mensch seyn gilt. Folglich ist es mit categorischen Sätzen ganz etwas anders, als mit hypothetischen. Im hypothetischen Satze wird noch gar nicht behauptet, daß etwas sey, sondern daß es denn sey, wenn etwas, nähmlich der Grund angenommen wird.",
     "pages": [
      {
       "p": 935,
       "i": 600
      }
     ],
     "aaEnd": 935,
     "ms": [
      {
       "p": 458,
       "i": 265
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-024",
     "kind": "text",
     "aa": 935,
     "text": "Bey categorischen Sätzen aber ist keine ausgemachte Bedingung. Es sind also wesentlich voneinander unterschiedene Urtheile. Bey allen hypothetischen Urtheilen habe ich zwey modos, einen modum ponentem et tollentem. Der modus ponens heißt, wenn das antecedens wahr ist: so ist auch das consequens wahr. Der modus tollens heißt, wenn das consequens falsch ist: so ist auch das antecedens falsch. Dieses kommt nachher in der syllogistic vor.",
     "ms": [
      {
       "p": 459,
       "i": 168
      }
     ]
    },
    {
     "id": "wiener-s11-025",
     "kind": "text",
     "aa": 935,
     "text": "Das disjunctive Urtheil enthält das Verhältniß verschiedener Urtheile, insofern sie als membra dividentia der sphaera einer cognitioni divisae gleich sind. Z.B. Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht. – Ich stelle mir die verschiedene Glieder vor, wie sie einander opponirt sind, und wie sie zusammen genommen die ganze sphaeram einer cognitio divisa ausmachen. Es ist das in der That nichts anders, als eine logische division, es braucht in der division aber nicht ein conceptus divisus zu seyn, sondern es kann auch eine cognitio divisa seyn. Z.B. wenn das nicht die beßte Welt ist: so hat Gott keine beßere schaffen können oder wollen. Das ist die Eintheilung der sphaera der Erkenntniß, die mir gegeben ist. Dieses sind problematische Urtheile, von denen aber das aßertorisch gesagt wird, daß sie zusammen vollständig genommen die sphaera des Begriffes ausmachen.",
     "ms": [
      {
       "p": 460,
       "i": 348
      },
      {
       "p": 461,
       "i": 931
      }
     ]
    },
    {
     "id": "wiener-s11-026",
     "kind": "text",
     "aa": 936,
     "text": "Was die Modalitaet der Urtheile betrifft, so haben die Alten die Eintheilung nicht so genau genommen als wir, sondern jeden Verbindungsbegriff nannten sie Modalitaet. Z.B. die Welt ist nothwendiger Weise da. Hier war bey ihnen das Wort: nothwendiger Weise, die modalitaet. Aber kann die Logic wohl urtheilen, ob ein Ding nothwendig sey oder nicht? Nein, denn sie hat nichts mit den Dingen und ihrer Nothwendigkeit zu thun. Daher kann sie nur fragen, ob ein Urtheil mit einer Nothwendigkeit ausgedrückt sey, oder nicht? Ich frage nur nach der Nothwendigkeit, die im Urtheil anzutreffen ist. Ist die Möglichkeit aus der Form bestimmt; so ist es ein problematisches Urtheil. Ist sie wirklich da: so ist es ein aßertorisches. Und ist sie gar mit der Nothwendigkeit verbunden: so ist es ein apodictisches Urtheil. Ein aßertorisches Urtheil kann bloß zufällig wahr, oder apodictisch wahr sein. Das zufällige Wahre sind empirische Sätze. Denn die Erfahrung zeigt mir nur, wie es ist, nicht aber daß es so seyn muß. Apodictische Sätze aber sind Sätze a priori, wo ich zugleich die Nothwendigkeit derselben erkenne. Judicia exponibilia. Z.B. wenn ich sage: wenn wenige Menschen gelehrt sind: so kann ich daraus herleiten: 1.) einige Menschen sind gelehrt. Denn wenige sind doch einige. 2.) Viele Menschen sind nicht gelehrt, denn wenige ist das Gegentheil von vielen. Diese zwey Sätze werden in einen Satz eingeschlossen, der eine Bejahung und Verneinung enthält, doch aber mit der Form der Bejahung ausgedrückt wird. Das sind exponible Urtheile.",
     "pages": [
      {
       "p": 936,
       "i": 1002
      }
     ],
     "aaEnd": 936,
     "ms": [
      {
       "p": 462,
       "i": 633
      },
      {
       "p": 463,
       "i": 1195
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-027",
     "kind": "text",
     "aa": 936,
     "text": "Es kann etwas nicht logisches, sondern etwas aesthetisches das Urtheil angehen. Ein Urtheil ist 1.) etwas logisches, das den Verstand angeht. 2.) etwas sinnliches, das die Sinnen angeht. Z.E. wenn ich sage: der Werth der Tugend ist der größte: so ist das logisch, aber der Werth der Tugend übersteigt Alles zur Verwunderung, oder wenn ich ein O oder Ach! hinzu setze: so sind diese Zusätze etwas ästhetisches im Urtheile. Es würde sehr lächerlich aussehen, wenn einer in die Mathematic aesthetic hinein bringen wollte. Eben so würde der nicht pur logisch, sondern auch aesthetisch schreiben, der in die philosophie Spöttereyen hinein bringen wollte. Dieses muß man wohl von einander unterscheiden und nicht vermengen. Denn der Eindruck des aesthetischen macht einen oft blind in Ansehung des Logischen. Wenn von der Wahrheit der Sache die Rede ist, so muß Alles fortgelassen werden, was affecten rege machen kann. Man überläßt das denjenigen, die Beyfall durch schön geputzte Ausdrücke erschleichen, und nicht durch Gründe erwerben wollen.",
     "ms": [
      {
       "p": 464,
       "i": 301
      },
      {
       "p": 465,
       "i": 914
      }
     ]
    },
    {
     "id": "wiener-s11-028",
     "kind": "text",
     "aa": 936,
     "text": "Practische Urtheile enthalten ein Sollen, die Nothwendigkeit, warum etwas geschieht zu irgend einer Absicht. Theoretische Urtheile enthalten ein Seyn, oder Nichtseyn, ich sage, ob sie in einer gewißen Absicht sind, oder nicht. Erweislich, demonstrabel ist ein Urtheil, das eines Beweises fähig ist. Ein Unerweisliches Urtheil ist, das keines Beweises fähig ist. Es muß doch unter allen Urtheilen einige geben, die keines Beweises fähig sind, und unmittelbar gewiß sind, d.i. unerweisliche Sätze sind. Die aber noch eines Beweises bedürfen, sind erweislich. – So viele Sätze es immer geben mag, die mittelbar gewiß sind, so muß es doch zuletzt einige geben, die unmittelbar gewiß sind. Z.B. zwischen zwey Puncten kann ich nur eine gerade Linie ziehen. –",
     "ms": [
      {
       "p": 466,
       "i": 540
      }
     ]
    },
    {
     "id": "wiener-s11-029",
     "kind": "text",
     "aa": 937,
     "text": "Leere Urtheile. Unter denen, die unmittelbar gewiß sind, beruhen einige auf der identitaet, z.B. ein jeder Körper ist ausgedehnt. Wenn ich den Begriff vom Körper entwickele: so finde ich, daß ich den Begriff der Ausdehnung darin denke. Hier ist also eine identitaet vom Körper und Ausdehnung. Denn die undurchdringliche Ausdehnung ist ein Theil des Begriffes vom Körper und liegt in ihm. –",
     "pages": [
      {
       "p": 937,
       "i": 195
      }
     ],
     "aaEnd": 937,
     "ms": [
      {
       "p": 467,
       "i": 380
      }
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "wiener-s11-030",
     "kind": "text",
     "aa": 937,
     "text": "Wenn die identitaet explicata ist: so ist ein solcher analytischer Satz, der auf der identitaet beruht, ein tavtologischer Satz. Z.E. der Mensch ist ein Mensch. Wenn ich aber sage: der Mensch ist ein vernünftiges Wesen: so ist der Begriff implicite einerley. Ein jeder Satz, der implicite identisch ist, ist erweislich. Denn er kann seinen Theilen nach entwickelt werden. Wenn aber ein Satz explicite identisch ist: so ist er ganz indemonstrabel. Ein solcher Satz kann ein leerer Satz genannt werden, z.B. ein jeder Körper ist körperlich. Hingegen Sätze, die implicite identisch sind, sind nicht leere Sätze. Denn es wird doch dadurch ein Merkmahl, das verborgen lag, klar gemacht. Z.E. Alle Körper sind ausgedehnt. Hier darf ich nur per analysin die identitaet deutlich machen, so sehe ich, daß sie nicht tavtologisch, sondern mittelbar darin liegt. – Es ist aber sehr falsch, und eines so großen Mannes unwürdig, wenn der autor sagt, zuletzt beruhen alle unsere Vernunfterkenntniße auf leeren Sätzen. Denn da würden sie wohl auf nichts beruhen. Nein, sie beruhen auf Sätzen, die wahr, aber implicite identisch sind, und ein großer Theil beruht auf der analysis, nach welcher ich das Verhältniß zwischen subject und praedicat einsehe. Man nennt Sätze leer, die Sinn leer sind, aber auch solche, die fruchtleer und ohne Nutzen sind. Die identisch tavtologische Sätze sind nicht sinnleer, sondern fruchtleer. Alle Urtheile dienen nur, deutliche Begriffe von den Sachen zu geben. Z.B. Jeder Mensch ist ein vernünftiges Wesen. Dieses ist ein deutlicher Begriff vom Menschen. Hier habe ich ein Merkmahl des Begriffes klar gemacht, d.i. ich habe ihn durch sein praedicat deutlich gemacht, ich habe geurtheilet. Folglich können wir keine klare Merkmahle haben, als durch ein categorisches Urtheil, und die Urtheile dienen folglich zu deutlichen Begriffen zu gelangen. Leer aber ist ein Urtheil, das keinen deutlichen Begriff hervor bringt. Es ist nicht sinnleer, sondern logisch leer. Durch sie wird kein Nutzen erreicht, weil sie keinen deutlichen Begriff geben, und die Verstandeszwecke nicht erfüllen. Battologie hat Aehnlichkeit mit tautologie, ist der unnütze Gebrauch vieler Wörter, wo der Begriff mit vielen Worten < bricht ab >",
     "ms": [
      {
       "p": 468,
       "i": 527
      },
      {
       "p": 469,
       "i": 1102
      },
      {
       "p": 470,
       "i": 1706
      }
     ]
    },
    {
     "id": "wiener-s11-031",
     "kind": "text",
     "aa": 937,
     "text": "In neuer Handschrift bis Ende auf beigefügtem Blatt:"
    },
    {
     "id": "wiener-s11-032",
     "kind": "text",
     "aa": 938,
     "text": "Ein System also Verbindung gewißer Erk. d. ihrer Natur nach nothwendig auf einanderfolgen. Erforderniße: 1) Definit, 2) principia acroamatica nur durch Worte nicht durch Anschauung. 3) postulaten. Hier weiß ich wie zu Werk zu gehen. 4) theoremata Beweise fähig und bedürftig, was kann muß bewiesen werden. 5) problemata praktische Sätze die erweislich, die müssen es auch. Problem 3 Stücke 1) Quaestio, 2) Resolutio, 3) Demonstratio (ist oft nicht nöthig). 6) Scholion Erläuterung oder Anwendung. Lemma ist episodisch z.B. in Moral Gott. Lemmata nöthig. Glieder des Systems verschieden benannt in Hauptabsicht Definit. axiomata theoremata problem principia minus principalia cor rollaria. Unterschied zwischen theoremata und corrol.? Scholia zum intereßiren und verschönern erweitern nur Brauchbarkeit. Qualitates occultae z.B. woher Zeugungskraft der Thiere? Durch eine belebende Kraft. Diese woher etc. tautologisch. So Sympathie Antipathie etc. Vermuthung will lieber falschen als keinen Grund, hindert aber weitere Untersuchung daher schädlich. So fehlten Kanzelredner und Moralisten.",
     "pages": [
      {
       "p": 938,
       "i": 181
      }
     ],
     "aaEnd": 938,
     "joined": [
      "mark"
     ]
    }
   ]
  },
  {
   "id": "s12",
   "title": "Von den Verstandes-Schlüssen",
   "titleSrc": "line",
   "headings": [
    "Von den Verstandes-Schlüssen"
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s12-001",
     "kind": "text",
     "aa": 938,
     "text": "Schluß aus Urtheil anders. mittelbar wo noch Begriffe die nicht im Urtheile liegen z.B. alle Körper theilbar, weil zusammengesetzt; aber alle Körper theilbar folglich auch einige consequentia immediata weil der Materie nach eins, nur Form verschieden, z.B. alle Menschen sterblich folglich einige sterbliche Dinge Menschen oder kein Mensch unsterblich Hier conclusum und judicium concludens eines. Auch Verstandesschluß vom ratiocinio zu unterscheiden wo judicium Vernunft brauche weil materialiter unterschieden z.B. alle Menschen sterblich folglich auch Cajus."
    },
    {
     "id": "wiener-s12-002",
     "kind": "text",
     "aa": 938,
     "text": "Judicia immediata sind 1) per judicia aequipollentia einige Menschen sind nicht7 ° tugendhaft folglich sind nicht alle Menschen tugendhaft; nichts ist ohne Grund und alles hat seinen Grund sind Substitutionen. 2) Subalternata auch nur Form nach verschieden z.B. alle Menschen sind sterblich folglich einige Quantität unterschieden. 3) per judicia opposita einige Menschen sind gelehrt einige nicht Qualität verschieden; einige Menschen nicht sterblich, alle Menschen sterblich Quantität und Qualität sind a) contradictoria wenn eins allgemein bejahet oder verneinet und das andere partikulär verneinet oder bejahet d.i. die eigentliche Opposition wo die Bejahung des einen das andere aufhebt affirmando unum negat alterum und umgekehrt. (So Beweise apagogisch indirecte nur sehe man ob wirklich contradictoria opposita, in Metaphysik stößt man immer bei Gegentheil"
    },
    {
     "id": "wiener-s12-003",
     "kind": "text",
     "aa": 939,
     "text": "auf Ungereimtheiten). Manche beweisen weil gegentheil auf Ungereimtheit führt und triumphiren aber opponent kan oft das nämliche. b) Subcontrarie opposita einige Menschen sind gelehrt, einige nicht Beide vielleicht wahr. Qualität verschieden, Quantität eins. Hier kan nicht indirecte geschlossen werden. Hier können beide wahr nicht beide falsch seyn also richtig der Schluß wenn das eine falsch ist das andere wahr nicht umgekehrt. c) contrarie opposita beide allgemein nur Qualität verschieden: alle Menschen gelehrt kein Mensch gelehrt, beide können falsch nicht wahr seyn sind das Gegentheil vom vorigen.",
     "ms": [
      {
       "p": 472,
       "i": 22
      }
     ]
    },
    {
     "id": "wiener-s12-004",
     "kind": "text",
     "aa": 939,
     "text": "4) per conversionem judiciorum alle Menschen sterblich folglich einige Sterbliche Menschen. Quantitat muß verloren gehen, denn heißts conversio per accidens bleibt Quantitat heißts simpliciter talis z.B. kein Mensch ist ohne Feinde etc. allgemein bejahende nur per accidens convertiren aber 2 verneinende auch stricte talis – alle Partikulare bejahend oder verneinend lassen sich simpliciter umkehren einige Menschen sind gelehrt etc."
    },
    {
     "id": "wiener-s12-005",
     "kind": "text",
     "aa": 939,
     "text": "5) consequentia immediata per contrapositionem wo Qualität auch geandert alle Menschen sind sterblich einiges Sterbliche ist nicht Mensch. Alle Bejahende lassen sich contraponiren alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch. Also bei immediatis betrift Veränderung nur Form b ist quoad qualitatem c quoad relationem – contraoppositio zeigt bloß Modalität der Urtheile die Nothwendigkeit eines bejahenden Urtheils Z.B. alle Menschen sind sterblich wenn wahr nothwendig was nicht sterblich ist nicht Mensch."
    }
   ]
  },
  {
   "id": "s13",
   "title": "Von den Vernunft-Schlüssen",
   "titleSrc": "line",
   "headings": [
    "Von den Vernunft-Schlüssen"
   ],
   "provenance": "[Wiener Logik] (1780ff. Ms.: Anonym Wien. Nach dem Orig.)",
   "blocks": [
    {
     "id": "wiener-s13-001",
     "kind": "text",
     "aa": 940,
     "text": "Hier ist nota intermedia Cajus sterblich weil Mensch daraus Consequentia mediata Vernunftschluß ist die Wahrheit eines Urtheils durch die Subsumtion seiner Bedingung unter ein ander Urtheil. Nothig 1) Regel major (maxima) 2) minor ist die Subsumtio der Erkenntniß unter der Bedingung der Regul, das Pradikat der Subsumtion kommt der Regel zu (Subsumiren d.h. erkennen, daß etwas unter die Bedingung einer Regel gehört) 3) Pradikat der Regel von der Subsumtion. 2 Prämissa [ Textlücke ]. Materie Prämissen, Form Conklusion (Materie eines categorischen 2 Begriffe, eines hypothetischen und disjunktiven, Vernunftsschlüsse aus 2 Urtheilen). Eintheilung ist Quantität denn major immer allgemein, Qualität thut hier nichts, nicht in Problematisch, aßertorisch und apodictisch denn Conclusio ist immer apodiktisch. Eintheilung 1) categorisch, 2) hypothetisch (wo major Verhältniß des Grundes zur Folge ausdrückt) 3) disjunctiv, wo major die Glieder der Eintheilung ausdrückt. Grund der Eintheilung relatio majoris – autor aber nennt nur categorische ordentliche Schlüsse aber < bricht ab >",
     "pages": [
      {
       "p": 940,
       "i": 718
      }
     ],
     "aaEnd": 940,
     "joined": [
      "mark"
     ]
    }
   ]
  }
 ]
};
