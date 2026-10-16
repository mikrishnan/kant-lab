/* ─────────────────────────────────────────────────────────────────────────────
   Jäsche Logik, Academy Edition IX (1800)
   Machine-extracted from the transcription in Textfiles/Vol9Logic.rtfd by
   Individuals/Alex Li/parse_jasche.py — do not hand-edit; corrections belong in the
   extractor so they survive the next run.

   Immanuel Kant's Logik, the handbook for lectures that G. B. Jäsche edited from
   Kant's own notes on Meier's Auszug (AA 9:3–150): Jäsche's Vorrede, the
   Einleitung, the Elementarlehre and the Methodenlehre, §§ 1–120. Kant lectured
   on the same Auszug, so this is the text of the Blomberg, Busolt and Wiener
   transcripts (logik-blomberg-24.js, logik-busolt-24.js, logik-wiener-24.js) in
   Jäsche's editing. It has the same shape as theirs, with a § index added.

   LOGIK_JASCHE.meta       work, volume, date, editor, source, the AA page range,
                           the extractor's counts and the oddities of the pagination
   LOGIK_JASCHE.front      the title page, verbatim, line by line
   LOGIK_JASCHE.contents   the Inhalt as the transcription gives it: { label, range? }
   LOGIK_JASCHE.sections   the text
   LOGIK_JASCHE.paras      the 120 §§, for tools keyed to § numbers

   Section fields
     id       stable id, `s01`…; a block's id begins with it
     part     the part it belongs to: Vorrede | Einleitung | I. Allgemeine
              Elementarlehre | II. Allgemeine Methodenlehre
     title    the heading's title, as printed
     running  the running title the transcription sets above it, `[Einleitung.]`
     range    the §§ it covers where it prints them: { from, to, raw }
     heading  the whole heading as printed, line breaks as ` / `
     blocks   the text

   Block fields
     id      stable id
     kind    text | rule. `rule` is the horizontal line the transcription sets.
     aa      the AA IX page the block starts on — cite as `AA 9:<aa>`
     aaEnd   the page it ends on, where it runs over one
     pages   where the block crosses a page: { p, i }, page `p` beginning at
             character `i` of `text`. The first entry is at i=0 when the block
             itself begins a page.
     text    the prose, joined. Editorial brackets are left in it. `\ufffc` is a
             glyph the transcription could not set (six places; see meta).
     em      italic stretches, as [start, end) offsets into `text`: the Latin and
             Greek terms and the emphasis. Words the file sets in another font
             are not emphasis and are not here.
     para    the § the block belongs to, where it is under one
     zone    the number of `——————` rules since the § (or the section) began.
             It counts and does not interpret: under a § the rule comes before the
             Anmerkungen; the transcription does not say what it means elsewhere.
     anm     the label, where the paragraph opens with one: `Anmerkung 1.`
     indent  hanging-indent depth the transcription sets, for enumerations
     align   `center` where the paragraph is centred: under a heading, the
             printed summary of the section
     maybeContinues
             the block breaks off without terminal punctuation at a page marker
             that has no `|`, and the next block begins with a capital, which in
             German a noun may. The extractor did not join them; the next block may
             continue this one.
     joined  present when this block was assembled from more than one piece:
               "mark"     the transcription's own `|`. Attested.
               "inferred" no `|`, but a page marker fell between two paragraphs,
                          the first broke off without terminal punctuation and the
                          second began in lower case. The extractor's own
                          judgement, shown as such.

   Para fields
     n        the § number
     title    its title as printed
     sec      the section it is in
     blocks   the ids of its blocks, in order
     aa, aaEnd  the pages it starts and ends on
   ───────────────────────────────────────────────────────────────────────────── */

const LOGIK_JASCHE = {
 "meta": {
  "work": "Jäsche Logik",
  "label": "Jäsche Logik",
  "volume": 9,
  "date": "1800",
  "editor": "G. B. Jäsche",
  "source": "Textfiles/Vol9Logic.rtfd",
  "aa": [
   3,
   150
  ],
  "counts": {
   "sections": 21,
   "blocks": 870,
   "paras": 120,
   "words": 40258,
   "rules": 111,
   "pages": 147,
   "joinedAtMark": 52,
   "joinedInferred": 21,
   "unset": 6
  },
  "pagination": {
   "markedTwice": [
    16,
    21,
    33,
    49,
    65,
    81,
    86,
    131,
    140
   ],
   "gaps": [
    {
     "from": 87,
     "to": 89
    }
   ]
  }
 },
 "front": [
  "LOGIK (1800)",
  "Titelseite",
  "Logik. Physiche Geographie, Pädagogik\nImmanuel Kant’s\nLogik\nEin Handbuch zu Vorlesungen.\n[Hrsg.: G.B. Jäsche]\n1800."
 ],
 "contents": [
  {
   "label": "Vorrede: Logik [Jäsche]"
  },
  {
   "label": "Einleitung"
  },
  {
   "label": "I. Begriff der Logik"
  },
  {
   "label": "II. Haupteintheilungen der Logik"
  },
  {
   "label": "III. Begriff von der Philosophie überhaupt"
  },
  {
   "label": "IV. Kurzer Abriß einer Geschichte der Philosophie"
  },
  {
   "label": "V. Erkenntniß überhaupt"
  },
  {
   "label": "VI. Besondre logische Vollkommenheiten des Erkenntnisses: / A) Logische Vollkommenheit des Erkenntnisses der Quantität nach"
  },
  {
   "label": "VII. B) Logische Vollkommenheit des Erkenntnisses der Relation nach"
  },
  {
   "label": "VIII.C) Logische Vollkommenheit des Erkenntnisses der Qualität nach"
  },
  {
   "label": "IX. D) Logische Vollkommenheit des Erkenntnisses der Modalität nach"
  },
  {
   "label": "X. Wahrscheinlichkeit"
  },
  {
   "label": "Anhang. Von dem Unterschiede des theoretischen und des praktischen Erkenntnisses / I. Allgemeine Elementarlehre"
  },
  {
   "label": "1. Abschnitt. Von den Begriffen",
   "range": {
    "from": 1,
    "to": 16,
    "raw": "[§§ 1 – 16]"
   }
  },
  {
   "label": "2. Abschnitt. Von den Urtheilen",
   "range": {
    "from": 17,
    "to": 40,
    "raw": "[§§ 17 – 40]"
   }
  },
  {
   "label": "3. Abschnitt. Von den Schlüssen",
   "range": {
    "from": 41,
    "to": 43,
    "raw": "[§§ 41 – 43]"
   }
  },
  {
   "label": "I. Verstandesschlüsse",
   "range": {
    "from": 44,
    "to": 55,
    "raw": "[§§ 44 – 55]"
   }
  },
  {
   "label": "II Vernunftschlüsse",
   "range": {
    "from": 56,
    "to": 80,
    "raw": "[§§ 56 – 80]"
   }
  },
  {
   "label": "III. Schlüsse der Urtheilskraft [§§ 81 – 93] / II. Allgemeine Methodenlehre"
  },
  {
   "label": "",
   "range": {
    "from": 94,
    "to": 98,
    "raw": "[§ 94 – 98]"
   }
  },
  {
   "label": "I. Befördg. d. log. Vollkommenheit d. Erkenntnisses durch Definition, Exposition und Beschreibung der Begriffe",
   "range": {
    "from": 99,
    "to": 109,
    "raw": "[§§ 99 -109]"
   }
  },
  {
   "label": "II. Befördg. d. Vollkommenheit d. Erkenntnisses durch logische Eintheilung der Begriffe",
   "range": {
    "from": 110,
    "to": 120,
    "raw": "[§§ 110 – 120]"
   }
  }
 ],
 "sections": [
  {
   "id": "s01",
   "part": "Vorrede",
   "title": "Vorrede. [Jäsche]",
   "heading": "Vorrede. [Jäsche]",
   "blocks": [
    {
     "id": "jasche-s01-001",
     "kind": "text",
     "aa": 3,
     "text": "Es sind bereits anderthalb Jahre, seit mir Kant den Auftrag ertheilte, seine Logik, so wie er sie in öffentlichen Vorlesungen seinen Zuhörern vorgetragen, für den Druck zu bearbeiten, und dieselbe in der Gestalt eines compendiösen Handbuches dem Publicum zu übergeben. Ich erhielt zu diesem Zweck von ihm die selbsteigene Handschrift, deren er sich bei seinen Vorlesungen bedient hatte, mit Äußerung des besondern, ehrenvollen Zutrauens zu mir, daß ich, bekannt mit den Grundsätzen seines Systems überhaupt, auch hier in seinen Ideengang leicht eingehen, seine Gedanken nicht entstellen oder verfälschen, sondern mit der erforderlichen Klarheit und Bestimmtheit und zugleich in der gehörigen Ordnung sie darstellen werde. Da nun auf diese Art, indem ich den ehrenvollen Auftrag übernommen und denselben so gut, als ich vermochte, dem Wunsche und der Erwartung des preißwürdigen Weisen, meines vielverehrten Lehrers und Freundes gemäß, auszuführen gesucht habe, alles, was den Vortrag, die Einkleidung und Ausführung, die Darstellung und Anordnung der Gedanken, betrifft, auf meine Rechnung zum Theil zu setzen ist: so liegt es natürlicher Weise auch mir ob, hierüber den Lesern dieses neuen Kantischen Werkes einige Rechenschaft abzulegen. Über diesen Punkt also hier eine und die andre nähere Erklärung.",
     "pages": [
      {
       "p": 3,
       "i": 0
      }
     ],
     "aaEnd": 3
    },
    {
     "id": "jasche-s01-002",
     "kind": "text",
     "aa": 3,
     "text": "Seit dem Jahre 1765 hatte Herr Prof. Kant seinen Vorlesungen über die Logik ununterbrochen das Meier’sche Lehrbuch (George Friedrich Meiers Auszug aus der Vernunftlehre, Halle bei Gebauer 1752) als Leitfaden zum Grunde gelegt; aus Gründen, worüber er sich in einem zu Ankündigung seiner Vorlesungen im Jahr 1765 von ihm herausgegebenen Programm erklärte. Das Exemplar des gedachten Compendiums, dessen er sich bei seinen Vorlesungen bediente, ist, wie alle die übrigen Lehrbücher, die er zu gleichem Zwecke brauchte, mit Papier durchschossen; seine allgemeinen Anmerkungen und Erläuterungen so wohl als die speciellern, die sich zunächst auf den Text des Compendiums in den einzelnen §§. beziehen, finden sich theils auf dem durchschossenen Papiere, theils auf dem leeren Rande des Lehrbuches selbst. Und dieses hier und da in zerstreuten Anmerkungen und Erläuterungen schriftlich Aufgezeichnete macht nun zusammen das Materialien-Magazin aus, das Kant hier für seine Vorlesungen anlegte, und das er von Zeit zu Zeit theils durch neue Ideen erweiterte, theils in Ansehung verschiedener einzelner Materien immer wieder von Neuem revidirte und verbesserte. Es enthält also wenigstens das Wesentliche von alle dem, was der berühmte Commentator des Meier’schen Lehrbuches in seinen nach einer freien Manier gehaltenen Vorlesungen seinen Zuhörern über die Logik mitzutheilen pflegte, und das er des Aufzeichnens werth geachtet hatte.",
     "pages": [
      {
       "p": 4,
       "i": 481
      }
     ],
     "aaEnd": 4,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s01-003",
     "kind": "text",
     "aa": 4,
     "text": "Was nun die Darstellung und Anordnung der Sachen in diesem Werke betrifft, so habe ich geglaubt, die Ideen und Grundsätze des großen Mannes am treffendsten auszuführen, wenn ich mich in Absicht auf die Ökonomie und die Eintheilung des Ganzen überhaupt an seine ausdrückliche Erklärung hielte, nach welcher in die eigentliche Abhandlung der Logik und namentlich in die Elementarlehre derselben nichts weiter aufgenommen werden darf als die Theorie von den drei wesentlichen Hauptfunctionen des Denkens: den Begriffen, den Urtheilen und Schlüssen. Alles dasjenige also, was bloß von der Erkenntniß überhaupt und deren logischen Vollkommenheiten handelt und was in dem Meier’schen Lehrbuche der Lehre von den Begriffen vorhergeht und beinahe die Hälfte des Ganzen einnimmt, muß hiernach noch zur Einleitung gerechnet werden. »Vorher war,« bemerkt Kant gleich am Eingange zum achten Abschnitte, worin sein Autor die Lehre von den Begriffen vorträgt — »Vorher war von der Erkenntniß überhaupt gehandelt, als Propädeutik der Logik; jetzt folgt Logik selbst.«"
    },
    {
     "id": "jasche-s01-004",
     "kind": "text",
     "aa": 4,
     "text": "Diesem ausdrücklichen Fingerzeige zufolge habe ich daher alles, was bis zu dem erwähnten Abschnitte vorkommt, in die Einleitung herüber genommen, welche aus diesem Grunde einen viel größern Umfang erhalten hat, als sie sonst in andern Handbüchern der Logik einzunehmen pflegt. Die Folge hiervon war denn auch, daß die Methodenlehre, als der andere Haupttheil der Abhandlung, um so viel kürzer ausfallen mußte, je mehr Materien, die übrigens jetzt mit Recht von unsern neuern Logikern in das Gebiet der Methodenlehre gezogen werden, bereits in der Einleitung waren abgehandelt worden, wie z.B. die Lehre von den Beweisen u.dgl.m. Es wäre eine eben so unnöthige als unschickliche Wiederholung gewesen, dieser Materien hier noch einmal an ihrer rechten Stelle Erwähnung zu thun, um nur das Unvollständige vollständig zu machen und alles an seinen gehörigen Ort zu stellen. Das Letztere habe ich indessen doch gethan in Absicht auf die Lehre von den Definitionen und der logischen Eintheilung der Begriffe, welche im Meier’schen Compendium schon zum achten Abschnitte, nämlich zur Elementarlehre von den Begriffen gehört; eine Ordnung, die auch Kant in seinem Vortrage unverändert gelassen hat.",
     "pages": [
      {
       "p": 5,
       "i": 484
      }
     ],
     "aaEnd": 5,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s01-005",
     "kind": "text",
     "aa": 5,
     "text": "Es versteht sich übrigens wohl von selbst, daß der große Reformator der Philosophie und, was die Ökonomie und äußere Form der Logik betrifft, auch dieses Theils der theoretischen Philosophie insbesondre, nach seinem architektonischen Entwurfe, dessen wesentliche Grundlinien in der Kritik der reinen Vernunft verzeichnet sind, die Logik würde bearbeitet haben, wenn es ihm gefallen und wenn sein Geschäft einer wissenschaftlichen Begründung des gesammten Systems der eigentlichen Philosophie, der Philosophie des reellen Wahren und Gewissen, dieses unweit wichtigere und schwerere Geschäft, das nur er zuerst und auch er allein nur in seiner Originalität ausführen konnte, ihm verstattet hätte, an die selbsteigene Bearbeitung einer Logik zu denken. Allein diese Arbeit konnte er recht wohl Andern überlassen, die mit Einsicht und unbefangener Beurtheilung seine architektonischen Ideen zu einer wahrhaft zweckmäßigen und wohlgeordneten Bearbeitung und Behandlung dieser Wissenschaft benutzen konnten. Es war dies von mehreren gründlichen und unbefangenen Denkern unter unsern deutschen Philosophen zu erwarten. Und diese Erwartung hat Kanten und die Freunde seiner Philosophie auch nicht getäuscht. Mehrere neuere Lehrbücher der Logik sind mehr oder weniger, in Betreff der Ökonomie und Disposition des Ganzen, als eine Frucht jener Kantischen Ideen zur Logik anzusehen. Und daß diese Wissenschaft dadurch wirklich gewonnen, daß sie zwar weder reicher noch eigentlich ihrem Gehalte nach solider oder in sich selbst gegründeter, wohl aber gereinigter theils von allen ihr fremdartigen Bestandtheilen, theils von so manchen unnützen Subtilitäten und bloßen dialektischen Spielwerken, daß sie systematischer und doch bei aller scientifischen Strenge der Methode zugleich einfacher geworden: davon muß wohl Jeden, der übrigens nur richtige und klare Begriffe von dem eigenthümlichen Charakter und den gesetzmäßigen Grenzen der Logik hat, auch die flüchtigste Vergleichung der ältern mit den neuern, nach Kantischen Grundsätzen bearbeiteten Lehrbüchern der Logik überzeugen. Denn so sehr sich auch so manche unter den ältern Handbüchern dieser Wissenschaft an wissenschaftlicher Strenge in der Methode, an Klarheit, Bestimmtheit und Präcision in den Erklärungen und an Bündigkeit und Evidenz in den Beweisen auszeichnen mögen: so ist doch fast keines darunter, in welchem nicht die Grenzen der verschiedenen, zur allgemeinen Logik im weitern Umfange gehörigen Gebiete des bloß Propädeutischen, des Dogmatischen und Technischen, des Reinen und Empirischen, so in einander und durch einander liefen, daß sich das eine von dem andern nicht bestimmt unterscheiden läßt.",
     "pages": [
      {
       "p": 6,
       "i": 1837
      }
     ],
     "aaEnd": 6,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s01-006",
     "kind": "text",
     "aa": 6,
     "text": "Zwar bemerkt Herr Jakob in der Vorrede zur ersten Auflage seiner Logik: »Wolff habe die Idee einer allgemeinen Logik vortrefflich gefaßt und wenn dieser große Mann darauf gefallen wäre, die reine Logik ganz abgesondert vorzutragen, so hätte er uns gewiß, vermöge seines systematischen Kopfes, ein Meisterstück geliefert, welches alle künftigen Arbeiten dieser Art unnütz gemacht hätte.« Aber er hat diese Idee nun einmal nicht ausgeführt und auch keiner unter seinen Nachfolgern hat sie ausgeführt, so groß und wohlgegründet auch übrigens überhaupt das Verdienst ist, das die Wolffische Schule um das eigentlich Logische, die formale Vollkommenheit in unserm philosophischen Erkenntnisse sich erworben."
    },
    {
     "id": "jasche-s01-007",
     "kind": "text",
     "aa": 6,
     "text": "Aber abgesehen nun von dem, was in Ansehung der äußern Form zu Vervollkommnung der Logik durch die nothwendige Trennung reiner und bloß formaler von empirischen und realen oder metaphysischen Sätzen noch geschehen konnte und geschehen mußte, so ist, wenn es die Beurtheilung und Bestimmung des innern Gehaltes dieser Wissenschaft als Wissenschaft gilt, Kant’s Urtheil über diesen Punkt nicht zweifelhaft. Er hat sich mehreremale bestimmt und ausdrücklich darüber erklärt: daß die Logik als eine abgesonderte, für sich bestehende und in sich selbst gegründete Wissenschaft anzusehen sei, und daß sie mithin auch seit ihrer Entstehung und ersten Ausbildung vom Aristoteles an bis auf unsre Zeiten eigentlich nichts an wissenschaftlicher Begründung habe gewinnen können. Dieser Behauptung gemäß hat also Kant weder an eine Begründung der logischen Principien der Identität und des Widerspruchs selbst durch ein höheres Princip noch an eine Deduction der logischen Formen der Urtheile gedacht. Er hat das Princip des Widerspruchs als einen Satz anerkannt und behandelt, der seine Evidenz in sich selber habe und keiner Ableitung aus einem höhern Grundsatze bedürfe. Nur den Gebrauch, die Gültigkeit dieses Princips hat er eingeschränkt, indem er es aus dem Gebiete der Metaphysik, worin es der Dogmatismus geltend zu machen suchte, verwies und auf den bloß logischen Vernunftgebrauch, als allein gültig nur für diesen Gebrauch, beschränkte.",
     "pages": [
      {
       "p": 7,
       "i": 1041
      }
     ],
     "aaEnd": 7,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s01-008",
     "kind": "text",
     "aa": 7,
     "text": "Ob nun aber wirklich der logische Satz der Identität und des Widerspruchs an sich und schlechthin keiner weitern Deduction fähig und bedürftig sei, das ist freilich eine andre Frage, die auf die vielbedeutende Frage führt: ob es überhaupt ein absolut erstes Princip aller Erkenntniß und Wissenschaft gebe, ob ein solches möglich sei und gefunden werden könne?"
    },
    {
     "id": "jasche-s01-009",
     "kind": "text",
     "aa": 7,
     "text": "Die Wissenschaftslehre glaubt, ein solches Princip in dem reinen, absoluten Ich entdeckt und damit das gesammte philosophische Wissen nicht der bloßen Form, sondern auch dem Gehalte nach vollkommen begründet zu haben. Und unter Voraussetzung der Möglichkeit und apodiktischen Gültigkeit dieses absolut einigen und unbedingten Princips handelt sie daher auch vollkommen consequent, wenn sie die logischen Grundsätze der Identität und des Widerspruches, die Sätze: A = A und –A= –A /nicht als unbedingt gelten läßt, sondern nur für subalterne Sätze erklärt, die durch sie und ihren obersten Satz: Ich bin, erst erwiesen und bestimmt werden können und müssen. (Siehe Grundl. d.W.L. S.13 etc.) Auf eine gleich consequente Art erklärt sich auch Schelling in seinem System des transscendentalen Idealismus gegen die Voraussetzung der logischen Grundsätze als unbedingter, d.h. von keinen höhern, abzuleitender, indem die Logik überhaupt nur durch Abstraction von bestimmten Sätzen und, sofern sie auf wissenschaftliche Art entsteht, nur durch Abstraction von den obersten Grundsätzen des Wissens entstehen könne, und folglich diese höchsten Grundsätze des Wissens und mit ihnen die Wissenschaftslehre selbst schon voraussetze. Da aber von der andern Seite diese höchsten Grundsätze des Wissens, als Grundsätze betrachtet, eben so nothwendig die logische Form schon voraussetzen: so entsteht eben hieraus jener Zirkel, der sich zwar für die Wissenschaft nicht auflösen, aber doch erklären läßt, erklären durch Anerkennung eines zugleich der Form und dem Gehalte nach (formellen und materiellen) ersten Princips der Philosophie, in welchem beides, Form und Gehalt, sich wechselseitig bedingt und begründet. In diesem Princip läge sodann der Punkt, in welchem das Subjective und das Objective, das identische und das synthetische Wissen, eines und dasselbe wären.",
     "pages": [
      {
       "p": 8,
       "i": 1733
      }
     ],
     "aaEnd": 8,
     "em": [
      [
       463,
       464
      ],
      [
       467,
       468
      ],
      [
       473,
       475
      ],
      [
       479,
       1732
      ],
      [
       1733,
       1854
      ]
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s01-010",
     "kind": "text",
     "aa": 8,
     "text": "Unter Voraussetzung einer solchen Dignität, wie sie einem solchen Princip ohne Zweifel zukommen muß, würde demnach die Logik, so wie jede andre Wissenschaft, der Wissenschaftslehre und deren Principien subordinirt sein müssen."
    },
    {
     "id": "jasche-s01-011",
     "kind": "text",
     "aa": 8,
     "text": "Welche Bewandtniß es nun aber auch immer hiermit haben möge, so viel ist ausgemacht: in jedem Falle bleibt die Logik im Innern ihres Bezirkes, was das Wesentliche betrifft, unverändert; und die transscendentale Frage: ob die logischen Sätze noch einer Ableitung aus einem höhern absoluten Princip fähig und bedürftig sind, kann auf sie selbst und die Gültigkeit und Evidenz ihrer Gesetze so wenig Einfluß haben, als auf die reine Mathematik in Ansehung ihres wissenschaftlichen Gehalts die transscendentale Aufgabe hat: Wie sind synthetische Urtheile a priori in der Mathematik möglich? So wie der Mathematiker als Mathematiker, so kann auch der Logiker als Logiker innerhalb des Bezirks seiner Wissenschaft beim Erklären und Beweisen seinen Gang ruhig und sicher fortgehen, ohne sich um die außer seiner Sphäre liegende transscendentale Frage des Transscendental-Philosophen und Wissenschaftslehrers bekümmern zu dürfen: Wie reine Mathematik oder reine Logik als Wissenschaft möglich sei?",
     "em": [
      [
       551,
       559
      ]
     ]
    },
    {
     "id": "jasche-s01-012",
     "kind": "text",
     "aa": 8,
     "text": "Bei dieser allgemeinen Anerkennung der Richtigkeit der allgemeinen Logik ist daher auch der Streit zwischen den Skeptikern und den Dogmatikern über die letzten Gründe des philosophischen Wissens, nie auf dem Gebiete der Logik, deren Regeln jeder vernünftige Skeptiker so gut als der Dogmatiker für gültig anerkannte, sondern jederzeit auf dem Gebiete der Metaphysik geführt worden. Und wie konnte es anders sein? Die höchste Aufgabe der eigentlichen Philosophie betrifft ja keinesweges das subjective, sondern das objective, nicht das identische, sondern das synthetische Wissen. Hierbei bleibt also die Logik als solche gänzlich aus dem Spiele, und es hat weder der Kritik noch der Wissenschaftslehre einfallen können — noch wird es überall einer Philosophie, die den transscendentalen Standpunkt von dem bloß logischen bestimmt zu unterscheiden weiß, einfallen können — die letzten Gründe des realen philosophischen Wissens innerhalb des Gebiets der bloßen Logik zu suchen und aus einem Satze der Logik, bloß als solchem betrachtet, ein reales Object herausklauben zu wollen."
    },
    {
     "id": "jasche-s01-013",
     "kind": "text",
     "aa": 9,
     "text": "Wer den himmelweiten Unterschied zwischen der eigentlichen (allgemeinen) Logik, als einer bloß formalen Wissenschaft, der Wissenschaft des bloßen Denkens als Denkens betrachtet, und der Transscendental-Philosophie, dieser einigen materialen oder realen reinen Vernunftwissenschaft, der Wissenschaft des eigentlichen Wissens, bestimmt ins Auge gefaßt hat und nie wieder aus der Acht läßt, wird daher leicht beurtheilen können, was von dem neuern Versuche zu halten sei, den Herr Bardili neuerdings (in seinem Grundrisse der ersten Logik) unternommen hat, der Logik selbst noch ihr Prius auszumachen, in der Erwartung, auf dem Wege dieser Untersuchung zu finden: »ein reales Object, entweder durch sie (die bloße Logik) gesetzt oder sonst überall keines setzbar; den Schlüssel zum Wesen der Natur entweder durch sie gegeben oder sonst überall keine Logik und keine Philosophie möglich.« Es ist doch in Wahrheit nicht abzusehen, auf welche mögliche Art Herr Bardili aus seinem aufgestellten Prius der Logik, dem Princip der absoluten Möglichkeit des Denkens, nach welchem wir Eines als Eines und Ebendasselbe im Vielen (nicht Mannigfaltigen) unendlichemal wiederholen können, ein reales Object herausfinden könne. Dieses vermeintlich neu entdeckte Prius der Logik ist ja offenbar nichts mehr und nichts weniger als das alte längst anerkannte, innerhalb des Gebiets der Logik gelegene und an die Spitze dieser Wissenschaft gestellte Princip der Identität: Was ich denke, denke ich, und eben dieses und nichts anders kann ich nun eben ins Unendliche wiederholt denken. — Wer wird denn auch bei dem wohl verstandenen logischen Satze der Identität an ein Mannigfaltiges und nicht an ein bloßes Vieles denken, das allerdings durch nichts anders entsteht noch entstehen kann, als durch bloße Wiederholung Eines und Ebendesselben Denkens, das bloße wiederholte Setzen eines A = A = A und so weiter ins Unendliche fort. Schwerlich dürfte sich daher wohl auf dem Wege, den Herr Bardili dazu eingeschlagen und nach derjenigen heuristischen Methode, deren er sich hierzu bedient hat, dasjenige finden lassen, woran der philosophirenden Vernunft gelegen ist, der Anfangs- und Endpunkt, wovon sie bei ihren Untersuchungen ausgehen und wohin sie wiederum zurückkehren könne. Die hauptsächlichsten und bedeutendsten Einwürfe, die Herr Bardili Kanten und seiner Methode des Philosophirens entgegensetzt, könnten also auch nicht so wohl Kanten den Logiker, als vielmehr Kanten den Transscendental-Philosophen und Metaphysiker treffen. Wir können sie daher hier insgesammt an ihren gehörigen Ort dahin gestellt sein lassen.",
     "pages": [
      {
       "p": 9,
       "i": 0
      },
      {
       "p": 10,
       "i": 2536
      }
     ],
     "aaEnd": 10,
     "em": [
      [
       580,
       585
      ],
      [
       988,
       993
      ],
      [
       1245,
       1250
      ],
      [
       1864,
       1865
      ],
      [
       1868,
       1869
      ],
      [
       1872,
       1873
      ]
     ],
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s01-014",
     "kind": "text",
     "aa": 10,
     "text": "Schließlich will ich hier noch bemerken: daß ich die Kantische Metaphysik, wozu ich die Handschrift auch bereits in Händen habe, so bald es die Muße mir verstattet, nach derselben Manier bearbeiten und herausgeben werde. Königsberg, den 20sten September 1800."
    },
    {
     "id": "jasche-s01-015",
     "kind": "text",
     "aa": 10,
     "text": "Gottlob Benjamin Jäsche,",
     "indent": 1
    },
    {
     "id": "jasche-s01-016",
     "kind": "text",
     "aa": 10,
     "text": "Doctor und Privatdocent der Philosophie",
     "indent": 1
    },
    {
     "id": "jasche-s01-017",
     "kind": "text",
     "aa": 10,
     "text": "auf der Universität in Königsberg,",
     "indent": 1
    },
    {
     "id": "jasche-s01-018",
     "kind": "text",
     "aa": 10,
     "text": "Mitglied der gelehrten Gesellschaft",
     "indent": 1
    },
    {
     "id": "jasche-s01-019",
     "kind": "text",
     "aa": 10,
     "text": "zu Frankfurt an der Oder.",
     "indent": 1
    }
   ]
  },
  {
   "id": "s02",
   "part": "Einleitung",
   "title": "I. Begriff der Logik.",
   "heading": "I. Begriff der Logik.",
   "blocks": [
    {
     "id": "jasche-s02-001",
     "kind": "text",
     "aa": 11,
     "text": "Alles in der Natur, sowohl in der leblosen als auch in der belebten Welt, geschieht nach Regeln, ob wir gleich diese Regeln nicht immer kennen. — Das Wasser fällt nach Gesetzen der Schwere, und bei den Thieren geschieht die Bewegung des Gehens auch nach Regeln. Der Fisch im Wasser, der Vogel in der Luft bewegt sich nach Regeln. Die ganze Natur überhaupt ist eigentlich nichts anders als ein Zusammenhang von Erscheinungen nach Regeln; und es giebt überall keine Regellosigkeit. Wenn wir eine solche zu finden meinen, so können wir in diesem Falle nur sagen: daß uns die Regeln unbekannt sind."
    },
    {
     "id": "jasche-s02-002",
     "kind": "text",
     "aa": 11,
     "text": "Auch die Ausübung unsrer Kräfte geschieht nach gewissen Regeln, die wir befolgen, zuerst derselben unbewußt, bis wir zu ihrer Erkenntniß allmählig durch Versuche und einen längern Gebrauch unsrer Kräfte gelangen, ja uns am Ende dieselben so geläufig machen, daß es uns viele Mühe kostet, sie in abstracto zu denken. So ist z.B. die allgemeine Grammatik die Form einer Sprache überhaupt. Man spricht aber auch, ohne Grammatik zu kennen; und der, welcher, ohne sie zu kennen, spricht, hat wirklich eine Grammatik und spricht nach Regeln, deren er sich aber nicht bewußt ist.",
     "em": [
      [
       292,
       304
      ]
     ]
    },
    {
     "id": "jasche-s02-003",
     "kind": "text",
     "aa": 11,
     "text": "So wie nun alle unsre Kräfte insgesammt, so ist auch insbesondre der Verstand bei seinen Handlungen an Regeln gebunden, die wir untersuchen können. Ja, der Verstand ist als der Quell und das Vermögen anzusehen, Regeln überhaupt zu denken. Denn so wie die Sinnlichkeit das Vermögen der Anschauungen ist, so ist der Verstand das Vermögen zu denken, d.h. die Vorstellungen der Sinne unter Regeln zu bringen. Er ist daher begierig, Regeln zu suchen, und befriedigt, wenn er sie gefunden hat. Es frägt sich also, da der Verstand die Quelle der Regeln ist, nach welchen Regeln er selber verfahre?",
     "pages": [
      {
       "p": 12,
       "i": 474
      }
     ],
     "aaEnd": 12,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s02-004",
     "kind": "text",
     "aa": 12,
     "text": "Denn es leidet gar keinen Zweifel: wir können nicht denken oder unsern Verstand nicht anders gebrauchen als nach gewissen Regeln. Diese Regeln können wir nun aber wieder für sich selbst denken, d.h. wir können sie ohne ihre Anwendung oder in abstracto denken. Welches sind nun diese Regeln?",
     "em": [
      [
       239,
       251
      ]
     ]
    },
    {
     "id": "jasche-s02-005",
     "kind": "rule",
     "aa": 12,
     "zone": 1
    },
    {
     "id": "jasche-s02-006",
     "kind": "text",
     "aa": 12,
     "text": "Alle Regeln, nach denen der Verstand verfährt, sind entweder nothwendig oder zufällig. Die erstern sind solche, ohne welche gar kein Gebrauch des Verstandes möglich wäre; die letztern solche, ohne welche ein gewisser bestimmter Verstandesgebrauch nicht stattfinden würde. Die zufälligen Regeln, welche von einem bestimmten Object der Erkenntniß abhängen, sind so vielfältig als diese Objecte selbst. So giebt es z.B. einen Verstandesgebrauch in der Mathematik, der Metaphysik, Moral u.s.w. Die Regeln dieses besondern bestimmten Verstandesgebrauches in den gedachten Wissenschaften sind zufällig, weil es zufällig ist, ob ich dieses oder jenes Object denke, worauf sich diese besondern Regeln beziehen.",
     "zone": 1
    },
    {
     "id": "jasche-s02-007",
     "kind": "text",
     "aa": 12,
     "text": "Wenn wir nun aber alle Erkenntniß, die wir bloß von den Gegenständen entlehnen müssen, bei Seite setzen und lediglich auf den Verstandesgebrauch überhaupt reflectiren: so entdecken wir diejenigen Regeln desselben, die in aller Absicht und unangesehen aller besondern Objecte des Denkens schlechthin nothwendig sind, weil wir ohne sie gar nicht denken würden. Diese Regeln können daher auch a priori d.i. unabhängig von aller Erfahrung eingesehen werden, weil sie, ohne Unterschied der Gegenstände, bloß die Bedingungen des Verstandesgebrauchs überhaupt, er mag rein oder empirisch sein, enthalten. Und hieraus folgt zugleich: daß die allgemeinen und nothwendigen Regeln des Denkens überhaupt lediglich die Form, keinesweges die Materie desselben betreffen können. Demnach ist die Wissenschaft, die diese allgemeinen und nothwendigen Regeln enthält, bloß eine Wissenschaft von der Form unsers Verstandeserkenntnisses oder des Denkens. Und wir können uns also eine Idee von der Möglichkeit einer solchen Wissenschaft machen, so wie von einer allgemeinen Grammatik, die nichts weiter als die bloße Form der Sprache überhaupt enthält, ohne Wörter, die zur Materie der Sprache gehören.",
     "pages": [
      {
       "p": 13,
       "i": 1100
      }
     ],
     "aaEnd": 13,
     "em": [
      [
       390,
       398
      ]
     ],
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s02-008",
     "kind": "text",
     "aa": 13,
     "text": "Diese Wissenschaft von den nothwendigen Gesetzen des Verstandes und der Vernunft überhaupt, oder, welches einerlei ist, von der bloßen Form des Denkens überhaupt, nennen wir nun Logik.",
     "zone": 1
    },
    {
     "id": "jasche-s02-009",
     "kind": "rule",
     "aa": 13,
     "zone": 2
    },
    {
     "id": "jasche-s02-010",
     "kind": "text",
     "aa": 13,
     "text": "Als eine Wissenschaft, die auf alles Denken überhaupt geht, unangesehen der Objecte als der Materie des Denkens ist die Logik",
     "zone": 2
    },
    {
     "id": "jasche-s02-011",
     "kind": "text",
     "aa": 13,
     "text": "1) als Grundlage zu allen andern Wissenschaften und als die Propädeutik alles Verstandesgebrauchs anzusehen. Sie kann aber auch eben darum, weil sie von allen Objecten gänzlich abstrahirt,",
     "zone": 2
    },
    {
     "id": "jasche-s02-012",
     "kind": "text",
     "aa": 13,
     "text": "2) kein Organon der Wissenschaften sein.",
     "zone": 2
    },
    {
     "id": "jasche-s02-013",
     "kind": "text",
     "aa": 13,
     "text": "Unter einem Organon verstehen wir nämlich eine Anweisung, wie ein gewisses Erkenntniß zu Stande gebracht werden solle. Dazu aber gehört, daß ich das Object der nach gewissen Regeln hervorzubringenden Erkenntniß schon kenne. Ein Organon der Wissenschaften ist daher nicht bloße Logik, weil es die genaue Kenntniß der Wissenschaften, ihrer Objecte und Quellen voraussetzt. So ist z.B. die Mathematik ein vortreffliches Organon, als eine Wissenschaft, die den Grund der Erweiterung unserer Erkenntniß in Ansehung eines gewissen Vernunftgebrauches enthält. Die Logik hingegen, da sie als allgemeine Propädeutik alles Verstandes- und Vernunftgebrauchs überhaupt, nicht in die Wissenschaften gehen und deren Materie anticipiren darf, ist nur eine allgemeine Vernunftkunst (canonica Epicuri), Erkenntnisse überhaupt der Form des Verstandes gemäß zu machen, und also nur in so fern ein Organon zu nennen, das aber freilich nicht zur Erweiterung, sondern bloß zur Beurtheilung und Berichtigung unsers Erkenntnisses dient.",
     "em": [
      [
       767,
       783
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s02-014",
     "kind": "text",
     "aa": 13,
     "text": "3) Als eine Wissenschaft der nothwendigen Gesetze des Denkens, ohne welche gar kein Gebrauch des Verstandes und der Vernunft stattfindet, die folglich die Bedingungen sind, unter denen der Verstand einzig mit sich selbst zusammen stimmen kann und soll, — die nothwendigen Gesetze und Bedingungen seines richtigen Gebrauchs — ist aber die Logik ein Kanon. Und als ein Kanon des Verstandes und der Vernunft darf sie daher auch keine Principien weder aus irgend einer Wissenschaft noch aus irgend einer Erfahrung borgen; sie muß lauter Gesetze a priori, welche nothwendig sind und auf den Verstand überhaupt gehen, enthalten.",
     "pages": [
      {
       "p": 14,
       "i": 551
      }
     ],
     "aaEnd": 14,
     "em": [
      [
       541,
       549
      ]
     ],
     "zone": 2,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s02-015",
     "kind": "text",
     "aa": 14,
     "text": "Einige Logiker setzen zwar in der Logik psychologische Principien voraus. Dergleichen Principien aber in die Logik zu bringen, ist eben so ungereimt als Moral vom Leben herzunehmen. Nähmen wir die Principien aus der Psychologie, d.h. aus den Beobachtungen über unsern Verstand, so würden wir bloß sehen, wie das Denken vor sich geht und wie es ist unter den mancherlei subjectiven Hindernissen und Bedingungen; dieses würde also zur Erkenntniß bloß zufälliger Gesetze führen. In der Logik ist aber die Frage nicht nach zufälligen, sondern nach nothwendigen Regeln; nicht, wie wir denken, sondern, wie wir denken sollen. Die Regeln der Logik müssen daher nicht vom zufälligen, sondern vom nothwendigen Verstandesgebrauche hergenommen sein, den man ohne alle Psychologie bei sich findet. Wir wollen in der Logik nicht wissen: wie der Verstand ist und denkt und wie er bisher im Denken verfahren ist, sondern wie er im Denken verfahren sollte. Sie soll uns den richtigen, d.h. den mit sich selbst übereinstimmenden Gebrauch des Verstandes lehren.",
     "zone": 2
    },
    {
     "id": "jasche-s02-016",
     "kind": "rule",
     "aa": 14,
     "zone": 3
    },
    {
     "id": "jasche-s02-017",
     "kind": "text",
     "aa": 14,
     "text": "Aus der gegebenen Erklärung der Logik lassen sich nun auch noch die übrigen wesentlichen Eigenschaften dieser Wissenschaft herleiten; nämlich daß sie",
     "zone": 3
    },
    {
     "id": "jasche-s02-018",
     "kind": "text",
     "aa": 14,
     "text": "4) eine Vernunftwissenschaft sei nicht der bloßen Form, sondern der Materie nach, da ihre Regeln nicht aus der Erfahrung hergenommen sind und da sie zugleich die Vernunft zu ihrem Objecte hat. Die Logik ist daher eine Selbsterkenntniß des Verstandes und der Vernunft, aber nicht nach den Vermögen derselben in Ansehung der Objecte, sondern lediglich der Form nach. Ich werde in der Logik nicht fragen: Was erkennt der Verstand und wie viel kann er erkennen oder wie weit geht seine Erkenntniß? Denn das wäre Selbsterkenntniß in Ansehung seines materiellen Gebrauchs und gehört also in die Metaphysik. In der Logik ist nur die Frage: Wie wird sich der Verstand selbst erkennen?",
     "zone": 3
    },
    {
     "id": "jasche-s02-019",
     "kind": "text",
     "aa": 14,
     "text": "Als eine der Materie und der Form nach rationale Wissenschaft ist die Logik endlich auch",
     "zone": 3
    },
    {
     "id": "jasche-s02-020",
     "kind": "text",
     "aa": 14,
     "text": "5) eine Doctrin oder demonstrirte Theorie. Denn da sie sich nicht mit dem gemeinen und als solchem bloß empirischen Verstandes- und Vernunftgebrauche, sondern lediglich mit den allgemeinen und nothwendigen Gesetzen des Denkens überhaupt beschäftigt: so beruht sie auf Principien a priori, aus denen alle ihre Regeln abgeleitet und bewiesen werden können, als solche, denen alle Erkenntniß der Vernunft gemäß sein müßte.",
     "pages": [
      {
       "p": 15,
       "i": 132
      }
     ],
     "aaEnd": 15,
     "em": [
      [
       279,
       287
      ]
     ],
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s02-021",
     "kind": "text",
     "aa": 15,
     "text": "Dadurch daß die Logik als eine Wissenschaft a priori oder als eine Doctrin für einen Kanon des Verstandes- und Vernunftgebrauchs zu halten ist, unterscheidet sie sich wesentlich von der Ästhetik, die als bloße Kritik des Geschmacks keinen Kanon (Gesetz), sondern nur eine Norm (Muster oder Richtschnur bloß zur Beurtheilung) hat, welche in der allgemeinen Einstimmung besteht. Die Ästhetik nämlich enthält die Regeln der Übereinstimmung des Erkenntnisses mit den Gesetzen der Sinnlichkeit; die Logik dagegen die Regeln der Übereinstimmung des Erkenntnisses mit den Gesetzen des Verstandes und der Vernunft. Jene hat nur empirische Principien und kann also nie Wissenschaft oder Doctrin sein, wofern man unter Doctrin eine dogmatische Unterweisung aus Principien a priori versteht, wo man alles durch den Verstand ohne anderweitige, von der Erfahrung erhaltene Belehrungen einsieht, und die uns Regeln giebt, deren Befolgung die verlangte Vollkommenheit verschafft.",
     "em": [
      [
       44,
       52
      ],
      [
       762,
       770
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s02-022",
     "kind": "text",
     "aa": 15,
     "text": "Manche, besonders Redner und Dichter haben versucht, über den Geschmack zu vernünfteln, aber nie haben sie ein entscheidendes Urtheil darüber fällen können. Der Philosoph Baumgarten in Frankfurt hatte den Plan zu einer Ästhetik, als Wissenschaft, gemacht. Allein richtiger hat Home die Ästhetik Kritik genannt, da sie keine Regeln a priori giebt, die das Urtheil hinreichend bestimmen, wie die Logik, sondern ihre Regeln a posteriori hernimmt, und die empirischen Gesetze, nach denen wir das Unvollkommnere und Vollkommnere (Schöne) erkennen, nur durch die Vergleichung allgemeiner macht.",
     "em": [
      [
       331,
       339
      ],
      [
       421,
       433
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s02-023",
     "kind": "text",
     "aa": 15,
     "text": "Die Logik ist also mehr als bloße Kritik; sie ist ein Kanon, der nachher zur Kritik dient, d.h. zum Princip der Beurtheilung alles Verstandesgebrauchs überhaupt, wiewohl nur seiner Richtigkeit in Ansehung der bloßen Form, da sie kein Organon ist, so wenig als die allgemeine Grammatik.",
     "zone": 3
    },
    {
     "id": "jasche-s02-024",
     "kind": "text",
     "aa": 15,
     "text": "Als Propädeutik alles Verstandesgebrauchs überhaupt unterscheidet sich die allgemeine Logik nun auch zugleich von einer andern Seite von der transscendentalen Logik, in welcher der Gegenstand selbst als ein Gegenstand des bloßen Verstandes vorgestellt wird; dagegen die allgemeine Logik auf alle Gegenstände überhaupt geht.",
     "zone": 3
    },
    {
     "id": "jasche-s02-025",
     "kind": "text",
     "aa": 16,
     "text": "Fassen wir nun alle wesentliche Merkmale zusammen, die zu ausführlicher Bestimmung des Begriffs der Logik gehören, so werden wir also folgenden Begriff von ihr aufstellen müssen:",
     "pages": [
      {
       "p": 16,
       "i": 0
      }
     ],
     "aaEnd": 16,
     "zone": 3
    },
    {
     "id": "jasche-s02-026",
     "kind": "text",
     "aa": 16,
     "text": "Die Logik ist eine Vernunftwissenschaft nicht der bloßen Form, sondern der Materie nach; eine Wissenschaft a priori von den nothwendigen Gesetzen des Denkens, aber nicht in Ansehung besonderer Gegenstände, sondern aller Gegenstände überhaupt; — also eine Wissenschaft des richtigen Verstandes- und Vernunftgebrauchs überhaupt, aber nicht subjectiv, d.h. nicht nach empirischen (psychologischen) Principien, wie der Verstand denkt, sondern objectiv, d.i. nach Principien a priori, wie er denken soll.",
     "em": [
      [
       107,
       115
      ],
      [
       470,
       478
      ]
     ],
     "zone": 3
    }
   ]
  },
  {
   "id": "s03",
   "part": "Einleitung",
   "title": "II. Haupteintheilungen der Logik.",
   "heading": "[Einleitung.] / II. Haupteintheilungen der Logik.",
   "blocks": [
    {
     "id": "jasche-s03-001",
     "kind": "text",
     "aa": 16,
     "text": "— Vortrag. — Nutzen dieser Wissenschaft. — Abriß einer Geschichte derselben.",
     "align": "center"
    },
    {
     "id": "jasche-s03-002",
     "kind": "text",
     "aa": 16,
     "text": "Die Logik wird eingetheilt",
     "pages": [
      {
       "p": 16,
       "i": 0
      }
     ],
     "aaEnd": 16
    },
    {
     "id": "jasche-s03-003",
     "kind": "text",
     "aa": 16,
     "text": "1) in die Analytik und in die Dialektik."
    },
    {
     "id": "jasche-s03-004",
     "kind": "text",
     "aa": 16,
     "text": "Die Analytik entdeckt durch Zergliederung alle Handlungen der Vernunft, die wir beim Denken überhaupt ausüben. Sie ist also eine Analytik der Verstandes- und Vernunftform und heißt auch mit Recht die Logik der Wahrheit, weil sie die nothwendigen Regeln aller (formalen) Wahrheit enthält, ohne welche unser Erkenntniß, unangesehen der Objecte, auch in sich selbst unwahr ist. Sie ist also auch weiter nichts als ein Kanon zur Dijudication (der formalen Richtigkeit unsers Erkenntnisses)."
    },
    {
     "id": "jasche-s03-005",
     "kind": "text",
     "aa": 16,
     "text": "Wollte man diese bloß theoretische und allgemeine Doctrin zu einer praktischen Kunst, d.i. zu einem Organon brauchen: so würde sie Dialektik werden. Eine Logik des Scheins (ars sophistica, disputatoria), die aus einem bloßen Mißbrauche der Analytik entspringt, sofern nach der bloßen logischen Form der Schein einer wahren Erkenntniß, deren Merkmale doch von der Übereinstimmung mit den Objecten, also vom Inhalte hergenommen sein müssen, erkünstelt wird.",
     "em": [
      [
       173,
       187
      ],
      [
       189,
       201
      ]
     ]
    },
    {
     "id": "jasche-s03-006",
     "kind": "text",
     "aa": 16,
     "text": "In den vorigen Zeiten wurde die Dialektik mit großem Fleiße studirt. Diese Kunst trug falsche Grundsätze unter dem Scheine der Wahrheit vor und suchte diesen gemäß, Dinge dem Scheine nach zu behaupten. Bei den Griechen waren die Dialektiker die Sachwalter und Redner, welche das Volk leiten konnten, wohin sie wollten, weil sich das Volk durch den Schein hintergehen läßt. Dialektik war also damals die Kunst des Scheins. In der Logik wurde sie auch eine Zeitlang unter dem Namen der Disputirkunst vorgetragen, und so lange war alle Logik und Philosophie die Cultur gewisser geschwätziger Köpfe, jeden Schein zu erkünsteln. Nichts aber kann eines Philosophen unwürdiger sein als die Cultur einer solchen Kunst. Sie muß daher in dieser Bedeutung gänzlich wegfallen und statt derselben vielmehr eine Kritik dieses Scheines in die Logik eingeführt werden.",
     "pages": [
      {
       "p": 17,
       "i": 275
      }
     ],
     "aaEnd": 17,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s03-007",
     "kind": "text",
     "aa": 17,
     "text": "Wir würden demnach zwei Theile der Logik haben: die Analytik, welche die formalen Kriterien der Wahrheit vortrüge und die Dialektik, welche die Merkmale und Regeln enthielte, wonach wir erkennen könnten, daß etwas mit den formalen Kriterien der Wahrheit nicht übereinstimmt, ob es gleich mit denselben übereinzustimmen scheint. Die Dialektik in dieser Bedeutung würde also ihren guten Nutzen haben als Katharktikon des Verstandes."
    },
    {
     "id": "jasche-s03-008",
     "kind": "text",
     "aa": 17,
     "text": "Man pflegt die Logik ferner einzutheilen"
    },
    {
     "id": "jasche-s03-009",
     "kind": "text",
     "aa": 17,
     "text": "2) in die natürliche oder populare und in die künstliche oder wissenschaftliche Logik (logica naturalis, log. scholastica s. artificialis).",
     "em": [
      [
       87,
       103
      ],
      [
       105,
       121
      ],
      [
       122,
       137
      ]
     ]
    },
    {
     "id": "jasche-s03-010",
     "kind": "text",
     "aa": 17,
     "text": "Aber diese Eintheilung ist unstatthaft. Denn die natürliche Logik oder die Logik der gemeinen Vernunft (sensus communis) ist eigentlich keine Logik, sondern eine anthropologische Wissenschaft, die nur empirische Principien hat, indem sie von den Regeln des natürlichen Verstandes- und Vernunftgebrauchs handelt, die nur in concreto, also ohne Bewußtsein derselben in abstracto, erkannt werden. — Die künstliche oder wissenschaftliche Logik verdient daher allein diesen Namen, als eine Wissenschaft der nothwendigen und allgemeinen Regeln des Denkens, die unabhängig von dem natürlichen Verstandes- und Vernunftgebrauche in concreto a priori erkannt werden können und müssen, ob sie gleich zuerst nur durch Beobachtung jenes natürlichen Gebrauchs gefunden werden können.",
     "em": [
      [
       104,
       119
      ],
      [
       320,
       331
      ],
      [
       364,
       376
      ],
      [
       620,
       631
      ],
      [
       632,
       640
      ]
     ]
    },
    {
     "id": "jasche-s03-011",
     "kind": "text",
     "aa": 17,
     "text": "3) Noch eine andre Eintheilung der Logik ist die in theoretische und praktische Logik. Allein auch diese Eintheilung ist unrichtig."
    },
    {
     "id": "jasche-s03-012",
     "kind": "text",
     "aa": 17,
     "text": "Die allgemeine Logik, die, als ein bloßer Kanon, von allen Objecten abstrahirt, kann keinen praktischen Theil haben. Dieses wäre eine contradictio in adjecto, weil eine praktische Logik die Kenntniß einer gewissen Art von Gegenständen, worauf sie angewandt wird, voraussetzt. Wir können daher jede Wissenschaft eine praktische Logik nennen; denn in jeder müssen wir eine Form des Denkens haben. Die allgemeine Logik, als praktisch betrachtet, kann daher nichts weiter sein als eine Technik der Gelehrsamkeit überhaupt, ein Organon der Schulmethode.",
     "pages": [
      {
       "p": 18,
       "i": 280
      }
     ],
     "aaEnd": 18,
     "em": [
      [
       134,
       157
      ]
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s03-013",
     "kind": "text",
     "aa": 18,
     "text": "Dieser Eintheilung zufolge würde also die Logik einen dogmatischen und einen technischen Theil haben. Der erste würde die Elementarlehre, der andere die Methodenlehre heißen können. Der praktische oder technische Theil der Logik wäre eine logische Kunst in Ansehung der Anordnung und der logischen Kunstausdrücke und Unterschiede, um dem Verstande dadurch sein Handeln zu erleichtern."
    },
    {
     "id": "jasche-s03-014",
     "kind": "text",
     "aa": 18,
     "text": "In beiden Theilen, dem technischen so wohl als dem dogmatischen, würde aber weder auf Objecte noch auf das Subject des Denkens die mindeste Rücksicht genommen werden dürfen. In der letztern Beziehung würde die Logik eingetheilt werden können"
    },
    {
     "id": "jasche-s03-015",
     "kind": "text",
     "aa": 18,
     "text": "4) in die reine und in die angewandte Logik."
    },
    {
     "id": "jasche-s03-016",
     "kind": "text",
     "aa": 18,
     "text": "In der reinen Logik sondern wir den Verstand von den übrigen Gemüthskräften ab und betrachten, was er für sich allein thut. Die angewandte Logik betrachtet den Verstand, sofern er mit den andern Gemüthskräften vermischt ist, die auf seine Handlungen einfließen und ihm eine schiefe Richtung geben, so daß er nicht nach den Gesetzen verfährt, von denen er wohl selbst einsieht, daß sie die richtigen sind. Die angewandte Logik sollte eigentlich nicht Logik heißen. Es ist eine Psychologie, in welcher wir betrachten, wie es bei unserm Denken zuzugehen pflegt, nicht, wie es zugehen soll. Am Ende sagt sie zwar, was man thun soll, um unter mancherlei subjectiven Hindernissen und Einschränkungen einen richtigen Gebrauch vom Verstande zu machen; auch können wir von ihr lernen, was den richtigen Verstandesgebrauch befördert, die Hülfsmittel desselben oder die Heilungsmittel von logischen Fehlern und Irrthümern. Aber Propädeutik ist sie doch nicht. Denn die Psychologie, aus welcher in der angewandten Logik alles genommen werden muß, ist ein Theil der philosophischen Wissenschaften, zu denen die Logik die Propädeutik sein soll."
    },
    {
     "id": "jasche-s03-017",
     "kind": "text",
     "aa": 18,
     "text": "Zwar sagt man: die Technik, oder die Art und Weise, eine Wissenschaft zu bauen, solle in der angewandten Logik vorgetragen werden. Das ist aber vergeblich, ja sogar schädlich. Man fängt dann an zu bauen, ehe man Materialien hat und giebt wohl die Form, es fehlt aber am Inhalte. Die Technik muß bei jeder Wissenschaft vorgetragen werden."
    },
    {
     "id": "jasche-s03-018",
     "kind": "text",
     "aa": 18,
     "text": "Was endlich",
     "maybeContinues": true
    },
    {
     "id": "jasche-s03-019",
     "kind": "text",
     "aa": 19,
     "text": "5) die Eintheilung der Logik in die Logik des gemeinen und die des speculativen Verstandes betrifft: so bemerken wir hierbei, daß diese Wissenschaft gar nicht so eingetheilt werden kann.",
     "pages": [
      {
       "p": 19,
       "i": 0
      }
     ],
     "aaEnd": 19
    },
    {
     "id": "jasche-s03-020",
     "kind": "text",
     "aa": 19,
     "text": "Sie kann keine Wissenschaft des speculativen Verstandes sein. Denn als eine Logik des speculativen Erkenntnisses oder des speculativen Vernunftgebrauchs wäre sie ein Organon andrer Wissenschaften und keine bloße Propädeutik, die auf allen möglichen Gebrauch des Verstandes und der Vernunft gehen soll."
    },
    {
     "id": "jasche-s03-021",
     "kind": "text",
     "aa": 19,
     "text": "Eben so wenig kann die Logik ein Product des gemeinen Verstandes sein. Der gemeine Verstand nämlich ist das Vermögen, die Regeln des Erkenntnisses in concreto einzusehen. Die Logik soll aber eine Wissenschaft von den Regeln des Denkens in abstracto sein.",
     "em": [
      [
       147,
       158
      ],
      [
       236,
       248
      ]
     ]
    },
    {
     "id": "jasche-s03-022",
     "kind": "text",
     "aa": 19,
     "text": "Man kann indessen den allgemeinen Menschenverstand zum Object der Logik annehmen, und in so fern wird sie von den besonderen Regeln der speculativen Vernunft abstrahiren und sich also von der Logik des speculativen Verstandes unterscheiden."
    },
    {
     "id": "jasche-s03-023",
     "kind": "rule",
     "aa": 19,
     "zone": 1
    },
    {
     "id": "jasche-s03-024",
     "kind": "text",
     "aa": 19,
     "text": "Was den Vortrag der Logik betrifft: so kann derselbe entweder scholastisch oder popular sein.",
     "zone": 1
    },
    {
     "id": "jasche-s03-025",
     "kind": "text",
     "aa": 19,
     "text": "Scholastisch ist er, sofern er angemessen ist der Wißbegierde, den Fähigkeiten und der Cultur derer, die das Erkenntniß der logischen Regeln als eine Wissenschaft behandeln wollen. Popular aber, wenn er zu den Fähigkeiten und Bedürfnissen derjenigen sich herabläßt, welche die Logik nicht als Wissenschaft studiren, sondern sie nur brauchen wollen, um ihren Verstand aufzuklären. — Im scholastischen Vortrage müssen die Regeln in ihrer Allgemeinheit oder in abstracto; im popularen dagegen im Besondern oder in concreto dargestellt werden. Der scholastische Vortrag ist das Fundament des popularen; denn nur derjenige kann etwas auf eine populare Weise vortragen, der es auch gründlicher vortragen könnte.",
     "em": [
      [
       455,
       467
      ],
      [
       508,
       519
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s03-026",
     "kind": "text",
     "aa": 19,
     "text": "Wir unterscheiden übrigens hier Vortrag von Methode. Unter Methode nämlich ist die Art und Weise zu verstehen, wie ein gewisses Object, zu dessen Erkenntniß sie anzuwenden ist, vollständig zu erkennen sei. Sie muß aus der Natur der Wissenschaft selbst hergenommen werden und läßt sich also, als eine dadurch bestimmte und nothwendige Ordnung des Denkens, nicht ändern. Vortrag bedeutet nur die Manier, seine Gedanken andern mitzutheilen, um eine Doctrin verständlich zu machen.",
     "pages": [
      {
       "p": 20,
       "i": 402
      }
     ],
     "aaEnd": 20,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s03-027",
     "kind": "rule",
     "aa": 20,
     "zone": 2
    },
    {
     "id": "jasche-s03-028",
     "kind": "text",
     "aa": 20,
     "text": "Aus dem, was wir über das Wesen und den Zweck der Logik bisher gesagt haben, läßt sich nunmehr der Werth dieser Wissenschaft und der Nutzen ihres Studiums nach einem richtigen und bestimmten Maaßstabe schätzen.",
     "zone": 2
    },
    {
     "id": "jasche-s03-029",
     "kind": "text",
     "aa": 20,
     "text": "Die Logik ist also zwar keine allgemeine Erfindungskunst und kein Organon der Wahrheit — keine Algebra, mit deren Hülfe sich verborgene Wahrheiten entdecken ließen.",
     "zone": 2
    },
    {
     "id": "jasche-s03-030",
     "kind": "text",
     "aa": 20,
     "text": "Wohl aber ist sie nützlich und unentbehrlich als eine Kritik der Erkenntniß, oder zu Beurtheilung der gemeinen so wohl als der speculativen Vernunft, nicht um sie zu lehren, sondern nur um sie correct und mit sich selbst übereinstimmend zu machen. Denn das logische Princip der Wahrheit ist Übereinstimmung des Verstandes mit seinen eigenen allgemeinen Gesetzen.",
     "zone": 2
    },
    {
     "id": "jasche-s03-031",
     "kind": "rule",
     "aa": 20,
     "zone": 3
    },
    {
     "id": "jasche-s03-032",
     "kind": "text",
     "aa": 20,
     "text": "Was endlich die Geschichte der Logik betrifft, so wollen wir hierüber nur Folgendes anführen:",
     "zone": 3
    },
    {
     "id": "jasche-s03-033",
     "kind": "text",
     "aa": 20,
     "text": "Die jetzige Logik schreibt sich her von Aristoteles’ Analytik. Dieser Philosoph kann als der Vater der Logik angesehen werden. Er trug sie als Organon vor und theilte sie ein in Analytik und Dialektik. Seine Lehrart ist sehr scholastisch und geht auf die Entwickelung der allgemeinsten Begriffe, die der Logik zum Grunde liegen, wovon man indessen keinen Nutzen hat, weil fast alles auf bloße Subtilitäten hinausläuft, außer daß man die Benennungen verschiedener Verstandeshandlungen daraus gezogen.",
     "zone": 3
    },
    {
     "id": "jasche-s03-034",
     "kind": "text",
     "aa": 20,
     "text": "Übrigens hat die Logik von Aristoteles’ Zeiten her an Inhalt nicht viel gewonnen und das kann sie ihrer Natur nach auch nicht. Aber sie kann wohl gewinnen in Ansehung der Genauigkeit, Bestimmtheit und Deutlichkeit. Es giebt nur wenige Wissenschaften, die in einen beharrlichen Zustand kommen können, wo sie nicht mehr verändert werden. Zu diesen gehört die Logik und auch die Metaphysik. Aristoteles hatte keinen Moment des Verstandes ausgelassen; wir sind darin nur genauer, methodischer und ordentlicher.",
     "zone": 3
    },
    {
     "id": "jasche-s03-035",
     "kind": "text",
     "aa": 21,
     "text": "Von Lamberts Organon glaubte man zwar, daß es die Logik sehr vermehren würde. Aber es enthält weiter nichts mehr als nur subtilere Eintheilungen, die, wie alle richtigen Subtilitäten wohl den Verstand schärfen, aber von keinem wesentlichen Gebrauche sind.",
     "pages": [
      {
       "p": 21,
       "i": 0
      }
     ],
     "aaEnd": 21,
     "zone": 3
    },
    {
     "id": "jasche-s03-036",
     "kind": "text",
     "aa": 21,
     "text": "Unter den neuern Weltweisen giebt es zwei, welche die allgemeine Logik in Gang gebracht haben: Leibniz und Wolff.",
     "zone": 3
    },
    {
     "id": "jasche-s03-037",
     "kind": "text",
     "aa": 21,
     "text": "Malebranche und Locke haben keine eigentliche Logik abgehandelt, da sie auch vom Inhalte der Erkenntniß und vom Ursprunge der Begriffe handeln.",
     "zone": 3
    },
    {
     "id": "jasche-s03-038",
     "kind": "text",
     "aa": 21,
     "text": "Die allgemeine Logik von Wolff ist die beste, welche man hat. Einige haben sie mit der Aristotelischen verbunden, wie z.B. Reusch.",
     "zone": 3
    },
    {
     "id": "jasche-s03-039",
     "kind": "text",
     "aa": 21,
     "text": "Baumgarten, ein Mann, der hierin viel Verdienst hat, concentrirte die Wolffische Logik, und Meier commentirte dann wieder über Baumgarten.",
     "zone": 3
    },
    {
     "id": "jasche-s03-040",
     "kind": "text",
     "aa": 21,
     "text": "Zu den neuern Logikern gehört auch Crusius, der aber nicht bedachte, was es mit der Logik für eine Bewandtniß habe. Denn seine Logik enthält metaphysische Grundsätze und überschreitet also in so fern die Grenzen dieser Wissenschaft; überdies stellt sie ein Kriterium der Wahrheit auf, das kein Kriterium sein kann, und läßt also in so fern allen Schwärmereien freien Lauf.",
     "zone": 3
    },
    {
     "id": "jasche-s03-041",
     "kind": "text",
     "aa": 21,
     "text": "In den jetzigen Zeiten hat es eben keinen berühmten Logiker gegeben, und wir brauchen auch zur Logik keine neuen Erfindungen, weil sie bloß die Form des Denkens enthält.",
     "zone": 3
    },
    {
     "id": "jasche-s03-042",
     "kind": "rule",
     "aa": 21,
     "zone": 4
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s04",
   "part": "Einleitung",
   "title": "III. Begriff von der Philosophie überhaupt.",
   "heading": "[Einleitung.] / III. Begriff von der Philosophie überhaupt.",
   "blocks": [
    {
     "id": "jasche-s04-001",
     "kind": "text",
     "aa": 21,
     "text": "— Philosophie nach dem Schulbegriffe und nach dem Weltbegriffe betrachtet. — Wesentliche Erfordernisse und Zwecke des Philosophirens. — Allgemeinste und höchste Aufgaben dieser Wissenschaft.",
     "pages": [
      {
       "p": 21,
       "i": 0
      }
     ],
     "aaEnd": 21,
     "align": "center"
    },
    {
     "id": "jasche-s04-002",
     "kind": "text",
     "aa": 21,
     "text": "Es ist zuweilen schwer, das, was unter einer Wissenschaft verstanden wird, zu erklären. Aber die Wissenschaft gewinnt an Präcision durch Festsetzung ihres bestimmten Begriffs, und es werden so manche Fehler aus gewissen Gründen vermieden, die sich sonst einschleichen, wenn man die Wissenschaft noch nicht von den mit ihr verwandten Wissenschaften unterscheiden kann."
    },
    {
     "id": "jasche-s04-003",
     "kind": "text",
     "aa": 22,
     "text": "Ehe wir indessen eine Definition von Philosophie zu geben versuchen, müssen wir zuvor den Charakter der verschiedenen Erkenntnisse selbst untersuchen und, da philosophische Erkenntnisse zu den Vernunfterkenntnissen gehören, insbesondre erklären, was unter diesen letztern zu verstehen sei.",
     "pages": [
      {
       "p": 22,
       "i": 0
      }
     ],
     "aaEnd": 22
    },
    {
     "id": "jasche-s04-004",
     "kind": "text",
     "aa": 22,
     "text": "Vernunfterkenntnisse werden den historischen Erkenntnissen entgegengesetzt. Jene sind Erkenntnisse aus Principien (ex principiis); diese Erkenntnisse aus Daten (ex datis). — Eine Erkenntniß kann aber aus der Vernunft entstanden und demohngeachtet historisch sein; wie wenn z.B. ein bloßer Literator die Producte fremder Vernunft lernt, so ist sein Erkenntniß von dergleichen Vernunftproducten bloß historisch.",
     "em": [
      [
       115,
       128
      ]
     ]
    },
    {
     "id": "jasche-s04-005",
     "kind": "text",
     "aa": 22,
     "text": "Man kann nämlich Erkenntnisse unterscheiden"
    },
    {
     "id": "jasche-s04-006",
     "kind": "text",
     "aa": 22,
     "text": "1) nach ihrem objectiven Ursprunge, d.i. nach den Quellen, woraus eine Erkenntniß allein möglich ist. In dieser Rücksicht sind alle Erkenntnisse entweder rational oder empirisch;"
    },
    {
     "id": "jasche-s04-007",
     "kind": "text",
     "aa": 22,
     "text": "2) nach ihrem subjectiven Ursprunge, d.i. nach der Art, wie eine Erkenntniß von den Menschen kann erworben werden. Aus diesem letztern Gesichtspunkte betrachtet, sind die Erkenntnisse entweder rational oder historisch, sie mögen an sich entstanden sein, wie sie wollen. Es kann also objectiv etwas ein Vernunfterkenntniß sein, was subjectiv doch nur historisch ist."
    },
    {
     "id": "jasche-s04-008",
     "kind": "text",
     "aa": 22,
     "text": "Bei einigen rationalen Erkenntnissen ist es schädlich, sie bloß historisch zu wissen, bei andern hingegen ist dieses gleichgültig. So weiß z.B. der Schiffer die Regeln der Schiffahrt historisch aus seinen Tabellen; und das ist für ihn genug. Wenn aber der Rechtsgelehrte die Rechtsgelehrsamkeit bloß historisch weiß, so ist er zum ächten Richter und noch mehr zum Gesetzgeber völlig verdorben."
    },
    {
     "id": "jasche-s04-009",
     "kind": "text",
     "aa": 22,
     "text": "Aus dem angegebenen Unterschiede zwischen objectiv und subjectiv rationalen Erkenntnissen erhellt nun auch, daß man Philosophie in gewissem Betracht lernen könne, ohne philosophiren zu können. Der also eigentlich Philosoph werden will, muß sich üben, von seiner Vernunft einen freien und keinen bloß nachahmenden und, so zu sagen, mechanischen Gebrauch zu machen."
    },
    {
     "id": "jasche-s04-010",
     "kind": "rule",
     "aa": 22,
     "zone": 1
    },
    {
     "id": "jasche-s04-011",
     "kind": "text",
     "aa": 22,
     "text": "Wir haben die Vernunfterkenntnisse für Erkenntnisse aus Principien erklärt und hieraus folgt: daß sie a priori sein müssen. Es giebt aber zwei Arten von Erkenntnissen, die beide a priori sind, dennoch aber viele namhafte Unterschiede haben, nämlich Mathematik und Philosophie.",
     "pages": [
      {
       "p": 23,
       "i": 138
      }
     ],
     "aaEnd": 23,
     "em": [
      [
       102,
       110
      ],
      [
       178,
       186
      ]
     ],
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s04-012",
     "kind": "text",
     "aa": 23,
     "text": "Man pflegt zu behaupten, daß Mathematik und Philosophie dem Objecte nach von einander unterschieden wären, indem die erstere von der Quantität, die letztere von der Qualität handele. Alles dieses ist falsch. Der Unterschied dieser Wissenschaften kann nicht auf dem Objecte beruhen, denn Philosophie geht auf alles, also auch auf quanta, und Mathematik zum Theil auch, sofern alles eine Größe hat. Nur die verschiedene Art des Vernunfterkenntnisses oder Vernunftgebrauches in der Mathematik und Philosophie macht allein den specifischen Unterschied zwischen diesen beiden Wissenschaften aus. Philosophie nämlich ist die Vernunfterkenntniß aus bloßen Begriffen, Mathematik hingegen die Vernunfterkenntniß aus der Construction der Begriffe.",
     "em": [
      [
       329,
       335
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s04-013",
     "kind": "text",
     "aa": 23,
     "text": "Wir construiren Begriffe, wenn wir sie in der Anschauung a priori ohne Erfahrung darstellen oder, wenn wir den Gegenstand in der Anschauung darstellen, der unserm Begriffe von demselben entspricht. — Der Mathematiker kann sich nie seiner Vernunft nach bloßen Begriffen, der Philosoph ihrer nie durch Construction der Begriffe bedienen. In der Mathematik braucht man die Vernunft in concreto, die Anschauung ist aber nicht empirisch, sondern man macht sich hier etwas a priori zum Gegenstande der Anschauung.",
     "em": [
      [
       57,
       65
      ],
      [
       379,
       390
      ],
      [
       467,
       475
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s04-014",
     "kind": "text",
     "aa": 23,
     "text": "Und hierin hat also, wie wir sehen, die Mathematik einen Vorzug vor der Philosophie, daß die Erkenntnisse der erstern intuitive, die der letztern hingegen nur discursive Erkenntnisse sind. Die Ursache aber, warum wir in der Mathematik mehr die Größen erwägen, liegt darin, daß die Größen in der Anschauung a priori können construirt werden, die Qualitäten dagegen sich nicht in der Anschauung darstellen lassen.",
     "em": [
      [
       306,
       314
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s04-015",
     "kind": "rule",
     "aa": 23,
     "zone": 2
    },
    {
     "id": "jasche-s04-016",
     "kind": "text",
     "aa": 23,
     "text": "Philosophie ist also das System der philosophischen Erkenntnisse oder der Vernunfterkenntnisse aus Begriffen. Das ist der Schulbegriff von dieser Wissenschaft. Nach dem Weltbegriffe ist sie die Wissenschaft von den letzten Zwecken der menschlichen Vernunft. Dieser hohe Begriff giebt der Philosophie Würde, d.i. einen absoluten Werth. Und wirklich ist sie es auch, die allein nur innern Werth hat, und allen andern Erkenntnissen erst einen Werth giebt.",
     "pages": [
      {
       "p": 24,
       "i": 348
      }
     ],
     "aaEnd": 24,
     "zone": 2,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s04-017",
     "kind": "text",
     "aa": 24,
     "text": "Man frägt doch immer am Ende, wozu dient das Philosophiren und der Endzweck desselben die Philosophie selbst als Wissenschaft nach dem Schulbegriffe betrachtet?",
     "zone": 2
    },
    {
     "id": "jasche-s04-018",
     "kind": "text",
     "aa": 24,
     "text": "In dieser scholastischen Bedeutung des Worts geht Philosophie nur auf Geschicklichkeit; in Beziehung auf den Weltbegriff dagegen auf die Nützlichkeit. In der erstern Rücksicht ist sie also eine Lehre der Geschicklichkeit; in der letztern, eine Lehre der Weisheit die Gesetzgeberin der Vernunft und der Philosoph in so fern nicht Vernunftkünstler, sondern Gesetzgeber.",
     "zone": 2
    },
    {
     "id": "jasche-s04-019",
     "kind": "text",
     "aa": 24,
     "text": "Der Vernunftkünstler oder, wie Sokrates ihn nennt, der Philodox, strebt bloß nach speculativem Wissen, ohne darauf zu sehen, wie viel das Wissen zum letzten Zwecke der menschlichen Vernunft beitrage; er giebt Regeln für den Gebrauch der Vernunft zu allerlei beliebigen Zwecken. Der praktische Philosoph, der Lehrer der Weisheit durch Lehre und Beispiel, ist der eigentliche Philosoph. Denn Philosophie ist die Idee einer vollkommenen Weisheit, die uns die letzten Zwecke der menschlichen Vernunft zeigt.",
     "zone": 2
    },
    {
     "id": "jasche-s04-020",
     "kind": "text",
     "aa": 24,
     "text": "Zur Philosophie nach dem Schulbegriffe gehören zwei Stücke:",
     "zone": 2
    },
    {
     "id": "jasche-s04-021",
     "kind": "text",
     "aa": 24,
     "text": "Erstlich ein zureichender Vorrath von Vernunfterkenntnissen, für’s Andre: ein systematischer Zusammenhang dieser Erkenntnisse oder eine Verbindung derselben in der Idee eines Ganzen.",
     "zone": 2
    },
    {
     "id": "jasche-s04-022",
     "kind": "text",
     "aa": 24,
     "text": "Einen solchen streng systematischen Zusammenhang verstattet nicht nur die Philosophie, sondern sie ist sogar die einzige Wissenschaft, die im eigentlichsten Verstande einen systematischen Zusammenhang hat und allen andern Wissenschaften systematische Einheit giebt.",
     "zone": 2
    },
    {
     "id": "jasche-s04-023",
     "kind": "text",
     "aa": 24,
     "text": "Was aber Philosophie nach dem Weltbegriffe (in sensu cosmico) betrifft: so kann man sie auch eine Wissenschaft von der höchsten Maxime des Gebrauchs unserer Vernunft nennen, sofern man unter Maxime das innere Princip der Wahl unter verschiedenen Zwecken versteht.",
     "em": [
      [
       44,
       60
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s04-024",
     "kind": "text",
     "aa": 24,
     "text": "Denn Philosophie in der letztern Bedeutung ist ja die Wissenschaft der Beziehung alles Erkenntnisses und Vernunftgebrauchs auf den Endzweck der menschlichen Vernunft, dem, als dem obersten, alle andern Zwecke subordinirt sind und sich in ihm zur Einheit vereinigen müssen.",
     "zone": 2
    },
    {
     "id": "jasche-s04-025",
     "kind": "text",
     "aa": 25,
     "text": "Das Feld der Philosophie in dieser weltbürgerlichen Bedeutung läßt sich auf folgende Fragen bringen: 1) Was kann ich wissen? 2) Was soll ich thun? 3) Was darf ich hoffen? 4) Was ist der Mensch?",
     "pages": [
      {
       "p": 25,
       "i": 0
      }
     ],
     "aaEnd": 25,
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s04-026",
     "kind": "text",
     "aa": 25,
     "text": "Die erste Frage beantwortet die Metaphysik, die zweite die Moral, die dritte die Religion und die vierte die Anthropologie. Im Grunde könnte man aber alles dieses zur Anthropologie rechnen, weil sich die drei ersten Fragen auf die letzte beziehen.",
     "zone": 2
    },
    {
     "id": "jasche-s04-027",
     "kind": "text",
     "aa": 25,
     "text": "Der Philosoph muß also bestimmen können 1) die Quellen des menschlichen Wissens, 2) den Umfang des möglichen und nützlichen Gebrauchs alles Wissens und endlich 3) die Grenzen der Vernunft.",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s04-028",
     "kind": "text",
     "aa": 25,
     "text": "Das letztere ist das nöthigste aber auch das schwerste, um das sich aber der Philodox nicht bekümmert.",
     "zone": 2
    },
    {
     "id": "jasche-s04-029",
     "kind": "text",
     "aa": 25,
     "text": "Zu einem Philosophen gehören hauptsächlich zwei Dinge: 1) Cultur des Talents und der Geschicklichkeit, um sie zu allerlei Zwecken zu gebrauchen. 2) Fertigkeit im Gebrauch aller Mittel zu beliebigen Zwecken. Beides muß vereinigt sein; denn ohne Kenntnisse wird man nie ein Philosoph werden, aber nie werden auch Kenntnisse allein den Philosophen ausmachen, wofern nicht eine zweckmäßige Verbindung aller Erkenntnisse und Geschicklichkeiten zur Einheit hinzukommt und eine Einsicht in die Übereinstimmung derselben mit den höchsten Zwecken der menschlichen Vernunft.",
     "zone": 2
    },
    {
     "id": "jasche-s04-030",
     "kind": "text",
     "aa": 25,
     "text": "Es kann sich überhaupt keiner einen Philosophen nennen, der nicht philosophiren kann. Philosophiren läßt sich aber nur durch Übung und selbsteigenen Gebrauch der Vernunft lernen.",
     "zone": 2
    },
    {
     "id": "jasche-s04-031",
     "kind": "text",
     "aa": 25,
     "text": "Wie sollte sich auch Philosophie eigentlich lernen lassen? Jeder philosophische Denker baut, so zu sagen, auf den Trümmern eines Andern sein eigenes Werk, nie aber ist eines zu Stande gekommen, das in allen seinen Theilen beständig gewesen wäre. Man kann daher schon aus dem Grunde Philosophie nicht lernen, weil sie noch nicht gegeben ist. Gesetzt aber auch, es wäre eine wirklich vorhanden: so würde doch keiner, der sie auch lernte, von sich sagen können, daß er ein Philosoph sei, denn seine Kenntniß davon wäre doch immer nur subjectiv-historisch.",
     "zone": 2
    },
    {
     "id": "jasche-s04-032",
     "kind": "text",
     "aa": 26,
     "text": "In der Mathematik verhält sich die Sache anders. Diese Wissenschaft kann man wohl gewissermaßen lernen, denn die Beweise sind hier so evident, daß ein jeder davon überzeugt werden kann; auch kann sie ihrer Evidenz wegen als eine gewisse und beständige Lehre gleichsam aufbehalten werden.",
     "pages": [
      {
       "p": 26,
       "i": 0
      }
     ],
     "aaEnd": 26,
     "zone": 2
    },
    {
     "id": "jasche-s04-033",
     "kind": "text",
     "aa": 26,
     "text": "Der philosophiren lernen will, darf dagegen alle Systeme der Philosophie nur als Geschichte des Gebrauchs der Vernunft ansehen und als Objecte der Übung seines philosophischen Talents.",
     "zone": 2
    },
    {
     "id": "jasche-s04-034",
     "kind": "text",
     "aa": 26,
     "text": "Der wahre Philosoph muß also als Selbstdenker einen freien und selbsteigenen, keinen sklavisch nachahmenden Gebrauch von seiner Vernunft machen. Aber auch keinen dialektischen, d.i. keinen solchen Gebrauch, der nur darauf abzweckt, den Erkenntnissen einen Schein von Wahrheit und Weisheit zu geben. Dieses ist das Geschäft des bloßen Sophisten, aber mit der Würde des Philosophen, als eines Kenners und Lehrers der Weisheit, durchaus unverträglich.",
     "zone": 2
    },
    {
     "id": "jasche-s04-035",
     "kind": "text",
     "aa": 26,
     "text": "Denn Wissenschaft hat einen innern, wahren Werth nur als Organ der Weisheit. Als solches ist sie ihr aber auch unentbehrlich, so daß man wohl behaupten darf: Weisheit ohne Wissenschaft sei ein Schattenriß von einer Vollkommenheit, zu der wir nie gelangen werden.",
     "zone": 2
    },
    {
     "id": "jasche-s04-036",
     "kind": "text",
     "aa": 26,
     "text": "Der die Wissenschaft haßt, um desto mehr aber die Weisheit liebt, den nennt man einen Misologen. Die Misologie entspringt gemeiniglich aus einer Leerheit von wissenschaftlichen Kenntnissen und einer gewissen damit verbundenen Art von Eitelkeit. Zuweilen verfallen aber auch diejenigen in den Fehler der Misologie, welche anfangs mit großem Fleiße und Glücke den Wissenschaften nachgegangen waren, am Ende aber in ihrem ganzen Wissen keine Befriedigung fanden.",
     "zone": 2
    },
    {
     "id": "jasche-s04-037",
     "kind": "text",
     "aa": 26,
     "text": "Philosophie ist die einzige Wissenschaft, die uns diese innere Genugthuung zu verschaffen weiß, denn sie schließt gleichsam den wissenschaftlichen Zirkel und durch sie erhalten sodann erst die Wissenschaften Ordnung und Zusammenhang.",
     "zone": 2
    },
    {
     "id": "jasche-s04-038",
     "kind": "text",
     "aa": 26,
     "text": "Wir werden also zum Behuf der Übung im Selbstdenken oder Philosophiren mehr auf die Methode unsers Vernunftgebrauchs zu sehen haben als auf die Sätze selbst, zu denen wir durch dieselbe gekommen sind.",
     "zone": 2
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s05",
   "part": "Einleitung",
   "title": "IV. Kurzer Abriß einer Geschichte der Philosophie.",
   "heading": "[Einleitung.] / IV. Kurzer Abriß einer Geschichte der Philosophie.",
   "blocks": [
    {
     "id": "jasche-s05-001",
     "kind": "text",
     "aa": 27,
     "text": "Es macht einige Schwierigkeit, die Grenzen zu bestimmen, wo der gemeine Verstandesgebrauch aufhört und der speculative anfängt, oder, wo gemeine Vernunfterkenntniß Philosophie wird."
    },
    {
     "id": "jasche-s05-002",
     "kind": "text",
     "aa": 27,
     "text": "Indessen giebt es doch hier ein ziemlich sicheres Unterscheidungsmerkmal, nämlich folgendes:"
    },
    {
     "id": "jasche-s05-003",
     "kind": "text",
     "aa": 27,
     "text": "Die Erkenntniß des Allgemeinen in abstracto ist speculative Erkenntniß, die Erkenntniß des Allgemeinen in concreto gemeine Erkenntniß. Philosophische Erkenntniß ist speculative Erkenntniß der Vernunft und sie fängt also da an, wo der gemeine Vernunftgebrauch anhebt, Versuche in der Erkenntniß des Allgemeinen in abstracto zu machen.",
     "em": [
      [
       31,
       43
      ],
      [
       103,
       114
      ],
      [
       310,
       322
      ]
     ]
    },
    {
     "id": "jasche-s05-004",
     "kind": "text",
     "aa": 27,
     "text": "Aus dieser Bestimmung des Unterschiedes zwischen gemeinem und speculativem Vernunftgebrauche läßt sich nun beurtheilen, von welchem Volke man den Anfang des Philosophirens datiren müsse. Unter allen Völkern haben also die Griechen erst angefangen zu philosophiren. Denn sie haben zuerst versucht, nicht an dem Leitfaden der Bilder die Vernunfterkenntnisse zu cultiviren, sondern in abstracto; statt daß die andern Völker sich die Begriffe immer nur durch Bilder in concreto verständlich zu machen suchten. So giebt es noch heutiges Tages Völker, wie die Chinesen und einige Indianer, die zwar von Dingen, welche bloß aus der Vernunft hergenommen sind, als von Gott, der Unsterblichkeit der Seele u.dgl.m. handeln, aber doch die Natur dieser Gegenstände nicht nach Begriffen und Regeln in abstracto zu erforschen suchen. Sie machen hier keine Trennung zwischen dem Vernunftgebrauche in concreto und dem in abstracto. Bei den Persern und Arabern findet sich zwar einiger speculativer Vernunftgebrauch, allein die Regeln dazu haben sie vom Aristoteles, also doch von den Griechen entlehnt. In Zoroasters Zendavesta entdeckt man nicht die geringste Spur von Philosophie. Eben dieses gilt auch von der gepriesenen ägyptischen Weisheit, die in Vergleichung mit der griechischen Philosophie ein bloßes Kinderspiel gewesen ist.",
     "em": [
      [
       379,
       391
      ],
      [
       462,
       473
      ],
      [
       785,
       797
      ],
      [
       882,
       893
      ],
      [
       902,
       914
      ]
     ]
    },
    {
     "id": "jasche-s05-005",
     "kind": "text",
     "aa": 27,
     "text": "Wie in der Philosophie, so sind auch in Ansehung der Mathematik die Griechen die ersten gewesen, welche diesen Theil des Vernunfterkenntnisses nach einer speculativen, wissenschaftlichen Methode cultivirten, indem sie jeden Lehrsatz aus Elementen demonstrirt haben."
    },
    {
     "id": "jasche-s05-006",
     "kind": "text",
     "aa": 28,
     "text": "Wenn und Wo aber unter den Griechen der philosophische Geist zuerst entsprungen sei, das kann man eigentlich nicht bestimmen.",
     "pages": [
      {
       "p": 28,
       "i": 0
      }
     ],
     "aaEnd": 28
    },
    {
     "id": "jasche-s05-007",
     "kind": "text",
     "aa": 28,
     "text": "Der erste, welcher den Gebrauch der speculativen Vernunft einführte, und von dem man auch die ersten Schritte des menschlichen Verstandes zur wissenschaftlichen Cultur herleitete, ist Thales, der Urheber der ionischen Secte. Er führte den Beinamen Physiker, wiewohl er auch Mathematiker war; so wie überhaupt Mathematik der Philosophie immer vorangegangen ist."
    },
    {
     "id": "jasche-s05-008",
     "kind": "text",
     "aa": 28,
     "text": "Übrigens kleideten die ersten Philosophen alles in Bilder ein. Denn Poesie, die nichts anderes ist als eine Einkleidung der Gedanken in Bilder, ist älter als die Prose. Man mußte sich daher anfangs selbst bei Dingen, die lediglich Objecte der reinen Vernunft sind, der Bildersprache und poetischen Schreibart bedienen. Pherekydes soll der erste prosaische Schriftsteller gewesen sein."
    },
    {
     "id": "jasche-s05-009",
     "kind": "text",
     "aa": 28,
     "text": "Auf die Ionier folgten die Eleatiker. Der Grundsatz der eleatischen Philosophie und ihres Stifters Xenophanes war: in den Sinnen ist Täuschung und Schein, nur im Verstande allein liegt die Quelle der Wahrheit."
    },
    {
     "id": "jasche-s05-010",
     "kind": "text",
     "aa": 28,
     "text": "Unter den Philosophen dieser Schule zeichnete sich Zeno als ein Mann von großem Verstande und Scharfsinne und als ein subtiler Dialektiker aus."
    },
    {
     "id": "jasche-s05-011",
     "kind": "text",
     "aa": 28,
     "text": "Die Dialektik bedeutete anfangs die Kunst des reinen Verstandesgebrauchs in Ansehung abstracter, von aller Sinnlichkeit abgesonderter Begriffe. Daher die vielen Lobeserhebungen dieser Kunst bei den Alten. In der Folge, als diejenigen Philosophen, welche gänzlich das Zeugniß der Sinne verwarfen, bei dieser Behauptung nothwendig auf viele Subtilitäten verfallen mußten, artete Dialektik in die Kunst aus, jeden Satz zu behaupten und zu bestreiten. Und so ward sie eine bloße Übung für die Sophisten, die über alles raisonniren wollten und sich darauf legten, dem Scheine den Anstrich des Wahren zu geben und schwarz weiß zu machen. Deswegen wurde auch der Name Sophist, unter dem man sich sonst einen Mann dachte, der über alle Sachen vernünftig und einsichtsvoll reden konnte, jetzt so verhaßt und verächtlich und statt desselben der Name Philosoph eingeführt."
    },
    {
     "id": "jasche-s05-012",
     "kind": "rule",
     "aa": 28,
     "zone": 1
    },
    {
     "id": "jasche-s05-013",
     "kind": "text",
     "aa": 28,
     "text": "Um die Zeit der ionischen Schule stand in Groß-Griechenland ein Mann von seltsamen Genie auf, welcher nicht nur auch eine Schule errichtete, sondern zugleich ein Project entwarf und zu Stande brachte, das seines Gleichen noch nie gehabt hatte. Dieser Mann war Pythagoras, zu Samos geboren. Er stiftete nämlich eine Societät von Philosophen, die durch das Gesetz der Verschwiegenheit zu einem Bunde unter sich vereinigt waren. Seine Zuhörer theilte er in zwei Klassen ein: in die der Akusmatiker (ἀκουσμαθικοι), die bloß hören mußten, und die der Akroamatiker (ἀκροαμαθικοι), die auch fragen durften.",
     "pages": [
      {
       "p": 29,
       "i": 141
      }
     ],
     "aaEnd": 29,
     "em": [
      [
       496,
       508
      ],
      [
       560,
       572
      ]
     ],
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s05-014",
     "kind": "text",
     "aa": 29,
     "text": "Unter seinen Lehren gab es einige exoterische, die er dem ganzen Volke vortrug; die übrigen waren geheim und esoterisch, nur für die Mitglieder seines Bundes bestimmt, von denen er einige in seine vertrauteste Freundschaft aufnahm und von den übrigen ganz absonderte. Zum Vehikel seiner geheimen Lehren machte er Physik und Theologie, also die Lehre des Sichtbaren und des Unsichtbaren. Auch hatte er verschiedene Symbole, die vermuthlich nichts anders als gewisse Zeichen gewesen sind, welche den Pythagoräern dazu gedient haben, sich untereinander zu verständigen.",
     "zone": 1
    },
    {
     "id": "jasche-s05-015",
     "kind": "text",
     "aa": 29,
     "text": "Der Zweck seines Bundes scheint kein anderer gewesen zu sein, als: die Religion von dem Wahn des Volks zu reinigen, die Tyrannei zu mäßigen und mehrere Gesetzmäßigkeit in die Staaten einzuführen.Dieser Bund aber, den die Tyrannen zu fürchten anfingen, wurde kurz vor Pythagoras’ Tode zerstört, und diese philosophische Gesellschaft aufgelöst, theils durch Hinrichtung, theils durch die Flucht und Verbannung des größten Theils der Verbündeten. Die Wenigen, welche noch übrig blieben, waren Novizen. Und da diese nicht viel von des Pythagoras eigenthümlichen Lehren wußten, so kann man davon auch nichts Gewisses und Bestimmtes sagen. In der Folge hat man dem Pythagoras, der übrigens auch ein sehr mathematischer Kopf war, viele Lehren zugeschrieben, die aber gewiß nur erdichtet sind.",
     "zone": 1
    },
    {
     "id": "jasche-s05-016",
     "kind": "rule",
     "aa": 29,
     "zone": 2
    },
    {
     "id": "jasche-s05-017",
     "kind": "text",
     "aa": 29,
     "text": "Die wichtigste Epoche der griechischen Philosophie hebt endlich mit dem Sokrates an. Denn er war es, welcher dem philosophischen Geiste und allen speculativen Köpfen eine ganz neue praktische Richtung gab. Auch ist er fast unter allen Menschen der einzige gewesen, dessen Verhalten der Idee eines Weisen am nächsten kommt.",
     "zone": 2
    },
    {
     "id": "jasche-s05-018",
     "kind": "text",
     "aa": 29,
     "text": "Unter seinen Schülern ist Plato, der sich mehr mit den praktischen Lehren des Sokrates beschäftigte, und unter den Schülern des Plato Aristoteles, welcher die speculative Philosophie wieder höher brachte, der berühmteste.",
     "pages": [
      {
       "p": 30,
       "i": 67
      }
     ],
     "aaEnd": 30,
     "zone": 2,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s05-019",
     "kind": "text",
     "aa": 30,
     "text": "Auf Plato und Aristoteles folgten die Epikuräer und die Stoiker, welche beide die abgesagtesten Feinde von einander waren. Jene setzten das höchste Gut in ein fröhliches Herz, das sie die Wollust nannten; diese fanden es einzig in der Hoheit und Stärke der Seele, bei welcher man alle Annehmlichkeiten des Lebens entbehren könne.",
     "zone": 2
    },
    {
     "id": "jasche-s05-020",
     "kind": "text",
     "aa": 30,
     "text": "Die Stoiker waren übrigens in der speculativen Philosophie dialektisch, in der Moralphilosophie dogmatisch und zeigten in ihren praktischen Principien, wodurch sie den Samen zu den erhabensten Gesinnungen, die je existirten, ausgestreut haben, ungemein viel Würde. Der Stifter der stoischen Schule ist Zeno aus Citium. Die berühmtesten Männer aus dieser Schule unter den griechischen Weltweisen sind Kleanth und Chrysipp.",
     "zone": 2
    },
    {
     "id": "jasche-s05-021",
     "kind": "text",
     "aa": 30,
     "text": "Die epikurische Schule hat nie in den Ruf kommen können, worin die stoische war. Was man aber auch immer von den Epikuräern sagen mag, so viel ist gewiß: sie bewiesen die größte Mäßigung im Genusse und waren die besten Naturphilosophen unter allen Denkern Griechenlands.",
     "zone": 2
    },
    {
     "id": "jasche-s05-022",
     "kind": "text",
     "aa": 30,
     "text": "Noch merken wir hier an, daß die vornehmsten griechischen Schulen besondere Namen führten. So hieß die Schule des Plato Akademie, die des Aristoteles Lyceum, die Schule der Stoiker Porticus (στοα), ein bedeckter Gang, wovon der Name Stoiker sich herschreibt, die Schule des Epikurs horti, weil Epikur in Gärten lehrte.",
     "em": [
      [
       181,
       189
      ],
      [
       191,
       195
      ],
      [
       282,
       287
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s05-023",
     "kind": "text",
     "aa": 30,
     "text": "Auf Platos Akademie folgten noch drei andere Akademien, die von seinen Schülern gestiftet wurden. Die erste stiftete Speusippus, die zweite Arkesilaus und die dritte Karneades.",
     "zone": 2
    },
    {
     "id": "jasche-s05-024",
     "kind": "text",
     "aa": 30,
     "text": "Diese Akademien neigten sich zum Skepticismus hin. Speusippus und Arkesilaus, beide stimmten ihre Denkart zur Skepsis und Karneades trieb es darin noch höher. Um deswillen werden die Skeptiker, diese subtilen, dialektischen Philosophen, auch Akademiker genannt. Die Akademiker folgten also dem ersten großen Zweifler Pyrrho und dessen Nachfolgern. Dazu hatte ihnen ihr Lehrer Plato selbst Anlaß gegeben, indem er viele seiner Lehren dialogisch vortrug, so daß Gründe pro und contra angeführt wurden, ohne daß er selbst darüber entschied, ob er gleich sonst sehr dogmatisch war.",
     "em": [
      [
       467,
       470
      ],
      [
       475,
       481
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s05-025",
     "kind": "text",
     "aa": 31,
     "text": "Fängt man die Epoche des Skepticismus mit dem Pyrrho an, so bekommt man eine ganze Schule von Skeptikern, die sich in ihrer Denkart und Methode des Philosophirens von den Dogmatikern wesentlich unterschieden, indem sie es zur ersten Maxime alles philosophirenden Vernunftgebrauchs machten: auch selbst bei dem größten Scheine der Wahrheit sein Urtheil zurückzuhalten, und das Princip aufstellten: die Philosophie bestehe im Gleichgewichte des Urtheilens und lehre uns den falschen Schein aufzudecken. Von diesen Skeptikern ist uns aber weiter nichts übrig geblieben als die beiden Werke des Sextus Empiricus, worin er alle Zweifel zusammengebracht hat.",
     "pages": [
      {
       "p": 31,
       "i": 0
      }
     ],
     "aaEnd": 31,
     "zone": 2
    },
    {
     "id": "jasche-s05-026",
     "kind": "rule",
     "aa": 31,
     "zone": 3
    },
    {
     "id": "jasche-s05-027",
     "kind": "text",
     "aa": 31,
     "text": "Als in der Folge die Philosophie von den Griechen zu den Römern überging, hat sie sich nicht erweitert; denn die Römer blieben immer nur Schüler.",
     "zone": 3
    },
    {
     "id": "jasche-s05-028",
     "kind": "text",
     "aa": 31,
     "text": "Cicero war in der speculativen Philosophie ein Schüler des Plato, in der Moral ein Stoiker. Zur stoischen Secte gehörten Epiktet, Antonin der Philosoph und Seneca, als die berühmtesten. Naturlehrer gab es unter den Römern nicht, außer Plinius dem jüngern, der eine Naturbeschreibung hinterlassen hat.",
     "zone": 3
    },
    {
     "id": "jasche-s05-029",
     "kind": "text",
     "aa": 31,
     "text": "Endlich verschwand die Cultur auch bei den Römern und es entstand Barbarei, bis die Araber im 6ten und 7ten Jahrhundert anfingen, sich auf die Wissenschaften zu legen und den Aristoteles wieder in Flor zu bringen. Nun kamen also die Wissenschaften im Occident wieder empor und insbesondere das Ansehen des Aristoteles, dem man aber auf eine sklavische Weise folgte. Im 11ten und 12ten Jahrhundert traten die Scholastiker auf; sie erläuterten den Aristoteles und trieben seine Subtilitäten ins Unendliche. Man beschäftigte sich mit nichts als lauter Abstractionen. Diese scholastische Methode des After-Philosophirens wurde zur Zeit der Reformation verdrängt, und nun gab es Eklektiker in der Philosophie, d.i. solche Selbstdenker, die sich zu keiner Schule bekannten, sondern die Wahrheit suchten und annahmen, wo sie sie fanden.",
     "zone": 3
    },
    {
     "id": "jasche-s05-030",
     "kind": "text",
     "aa": 31,
     "text": "Ihre Verbesserung in den neueren Zeiten verdankt aber die Philosophie theils dem größeren Studium der Natur, theils der Verbindung der Mathematik mit der Naturwissenschaft. Die Ordnung, welche durch das Studium dieser Wissenschaften im Denken entstand, breitete sich auch über die besonderen Zweige und Theile der eigentlichen Weltweisheit aus. Der erste und größte Naturforscher der neuern Zeit war Baco von Verulam. Er betrat bei seinen Untersuchungen den Weg der Erfahrung und machte auf die Wichtigkeit und Unentbehrlichkeit der Beobachtungen und Versuche zur Entdeckung der Wahrheit aufmerksam. Es ist übrigens schwer zu sagen, von wo die Verbesserung der speculativen Philosophie eigentlich herkommt. Ein nicht geringes Verdienst um dieselbe erwarb sich Descartes, indem er viel dazu beitrug, dem Denken Deutlichkeit zu geben durch sein aufgestelltes Kriterium der Wahrheit, das er in die Klarheit und Evidenz der Erkenntniß setzte.",
     "pages": [
      {
       "p": 32,
       "i": 272
      }
     ],
     "aaEnd": 32,
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s05-031",
     "kind": "text",
     "aa": 32,
     "text": "Unter die größten und verdienstvollsten Reformatoren der Philosophie zu unsern Zeiten ist aber Leibniz und Locke zu rechnen. Der letztere suchte den menschlichen Verstand zu zergliedern und zu zeigen, welche Seelenkräfte und welche Operationen derselben zu dieser oder jener Erkenntniß gehörten. Aber er hat das Werk seiner Untersuchung nicht vollendet, auch ist sein Verfahren dogmatisch, wiewohl er den Nutzen stiftete, daß man anfing, die Natur der Seele besser und gründlicher zu studiren.",
     "zone": 3
    },
    {
     "id": "jasche-s05-032",
     "kind": "text",
     "aa": 32,
     "text": "Was die besondre, Leibnizen und Wolffen eigene, dogmatische Methode des Philosophirens betrifft, so war dieselbe sehr fehlerhaft. Auch liegt darin so viel Täuschendes, daß es wohl nöthig ist, das ganze Verfahren zu suspendiren und statt dessen ein anderes, die Methode des kritischen Philosophirens, in Gang zu bringen, die darin besteht, das Verfahren der Vernunft selbst zu untersuchen, das gesammte menschliche Erkenntnißvermögen zu zergliedern und zu prüfen: wie weit die Grenzen desselben wohl gehen mögen.",
     "zone": 3
    },
    {
     "id": "jasche-s05-033",
     "kind": "text",
     "aa": 32,
     "text": "In unserm Zeitalter ist Naturphilosophie im blühendsten Zustande, und unter den Naturforschern giebt es große Namen z.B. Newton. Neuere Philosophen lassen sich jetzt als ausgezeichnete und bleibende Namen eigentlich nicht nennen, weil hier alles gleichsam im Flusse fortgeht. Was der eine baut, reißt der andere nieder.",
     "zone": 3
    },
    {
     "id": "jasche-s05-034",
     "kind": "text",
     "aa": 32,
     "text": "In der Moralphilosophie sind wir nicht weiter gekommen als die Alten. Was aber Metaphysik betrifft: so scheint es, als wären wir bei Untersuchung metaphysischer Wahrheiten stutzig geworden. Es zeigt sich jetzt eine Art von Indifferentism gegen diese Wissenschaft, da man es sich zur Ehre zu machen scheint, von metaphysischen Nachforschungen als von bloßen Grübeleien verächtlich zu reden. Und doch ist Metaphysik die eigentliche, wahre Philosophie!",
     "zone": 3
    },
    {
     "id": "jasche-s05-035",
     "kind": "text",
     "aa": 33,
     "text": "Unser Zeitalter ist das Zeitalter der Kritik, und man muß sehen, was aus den kritischen Versuchen unsrer Zeit, in Absicht auf Philosophie und Metaphysik insbesondre, werden wird.",
     "pages": [
      {
       "p": 33,
       "i": 0
      }
     ],
     "aaEnd": 33,
     "zone": 3
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s06",
   "part": "Einleitung",
   "title": "V. Erkenntniß überhaupt.",
   "heading": "[Einleitung.] / V. Erkenntniß überhaupt.",
   "blocks": [
    {
     "id": "jasche-s06-001",
     "kind": "text",
     "aa": 33,
     "text": "— Intuitive und discursive Erkenntniß; Anschauung und Begriff und deren Unterschied insbesondre. — Logische und ästhetische Vollkommenheit des Erkenntnisses.",
     "align": "center"
    },
    {
     "id": "jasche-s06-002",
     "kind": "text",
     "aa": 33,
     "text": "Alle unsre Erkenntniß hat eine zwiefache Beziehung: erstlich eine Beziehung auf das Object, zweitens eine Beziehung auf das Subject. In der erstern Rücksicht bezieht sie sich auf Vorstellung, in der letztern aufs Bewußtsein, die allgemeine Bedingung alles Erkenntnisses überhaupt. — (Eigentlich ist das Bewußtsein eine Vorstellung, daß eine andre Vorstellung in mir ist.)"
    },
    {
     "id": "jasche-s06-003",
     "kind": "text",
     "aa": 33,
     "text": "In jeder Erkenntniß muß unterschieden werden Materie, d.i. der Gegenstand, und Form, d.i. die Art, wie wir den Gegenstand erkennen. — Sieht z.B. ein Wilder ein Haus aus der Ferne, dessen Gebrauch er nicht kennt: so hat er zwar eben dasselbe Object wie ein Anderer, der es bestimmt als eine für Menschen eingerichtete Wohnung kennt, in der Vorstellung vor sich. Aber der Form nach ist dieses Erkenntniß eines und desselben Objects in beiden verschieden. Bei dem Einen ist es bloße Anschauung, bei dem Andern Anschauung und Begriff zugleich."
    },
    {
     "id": "jasche-s06-004",
     "kind": "text",
     "aa": 33,
     "text": "Die Verschiedenheit der Form des Erkenntnisses beruht auf einer Bedingung, die alles Erkennen begleitet, auf dem Bewußtsein. Bin ich mir der Vorstellung bewußt: so ist sie klar; bin ich mir derselben nicht bewußt, dunkel."
    },
    {
     "id": "jasche-s06-005",
     "kind": "text",
     "aa": 33,
     "text": "Da das Bewußtsein die wesentliche Bedingung aller logischen Form der Erkenntnisse ist: so kann und darf sich die Logik auch nur mit klaren, nicht aber mit dunkeln Vorstellungen beschäftigen. Wir sehen in der Logik nicht, wie Vorstellungen entspringen, sondern lediglich, wie dieselben mit der logischen Form übereinstimmen. — Überhaupt kann die Logik auch gar nicht von den bloßen Vorstellungen und deren Möglichkeit handeln. Das überläßt sie der Metaphysik. Sie selbst beschäftigt sich bloß mit den Regeln des Denkens bei Begriffen, Urtheilen und Schlüssen, als wodurch alles Denken geschieht. Freilich geht etwas vorher, ehe eine Vorstellung Begriff wird. Das werden wir an seinem Orte auch anzeigen. Wir werden aber nicht untersuchen: Wie Vorstellungen entspringen? Zwar handelt die Logik auch vom Erkennen, weil beim Erkennen schon Denken stattfindet. Aber Vorstellung ist noch nicht Erkenntniß, sondern Erkenntniß setzt immer Vorstellung voraus. Und diese letztere läßt sich auch durchaus nicht erklären. Denn man müßte, was Vorstellung sei? doch immer wiederum durch eine andere Vorstellung erklären.",
     "pages": [
      {
       "p": 34,
       "i": 644
      }
     ],
     "aaEnd": 34,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s06-006",
     "kind": "text",
     "aa": 34,
     "text": "Alle klaren Vorstellungen, auf die sich allein die logischen Regeln anwenden lassen, können nun unterschieden werden in Ansehung der Deutlichkeit und Undeutlichkeit. Sind wir uns der ganzen Vorstellung bewußt, nicht aber des Mannigfaltigen, das in ihr enthalten ist: so ist die Vorstellung undeutlich. — Zur Erläuterung der Sache zuerst ein Beispiel in der Anschauung."
    },
    {
     "id": "jasche-s06-007",
     "kind": "text",
     "aa": 34,
     "text": "Wir erblicken in der Ferne ein Landhaus. Sind wir uns bewußt, daß der angeschaute Gegenstand ein Haus ist, so müssen wir nothwendig doch auch eine Vorstellung von den verschiedenen Theilen dieses Hauses, den Fenstern, Thüren u.s.w. haben. Denn sähen wir die Theile nicht, so würden wir auch das Haus selbst nicht sehen. Aber wir sind uns dieser Vorstellung von dem Mannigfaltigen seiner Theile nicht bewußt und unsre Vorstellung von dem gedachten Gegenstande selbst ist daher eine undeutliche Vorstellung."
    },
    {
     "id": "jasche-s06-008",
     "kind": "text",
     "aa": 34,
     "text": "Wollen wir ferner ein Beispiel von Undeutlichkeit in Begriffen: so möge der Begriff der Schönheit dazu dienen. Ein jeder hat von der Schönheit einen klaren Begriff. Allein es kommen in diesem Begriffe verschiedene Merkmale vor, unter andern, daß das Schöne etwas sein müsse, das 1) in die Sinne fällt und das 2) allgemein gefällt. Können wir uns nun das Mannigfaltige dieser und andrer Merkmale des Schönen nicht auseinandersetzen, so ist unser Begriff davon doch immer noch undeutlich."
    },
    {
     "id": "jasche-s06-009",
     "kind": "text",
     "aa": 34,
     "text": "Die undeutliche Vorstellung nennen Wolffs Schüler eine verworrene. Allein dieser Ausdruck ist nicht passend, weil das Gegentheil von Verwirrung nicht Deutlichkeit, sondern Ordnung ist. Zwar ist Deutlichkeit eine Wirkung der Ordnung und Undeutlichkeit eine Wirkung der Verwirrung; und es ist also jede verworrene Erkenntniß auch eine undeutliche. Aber der Satz gilt nicht umgekehrt: nicht alle undeutliche Erkenntniß ist eine verworrene. Denn bei Erkenntnissen, in denen kein Mannigfaltiges vorhanden ist, findet keine Ordnung, aber auch keine Verwirrung statt."
    },
    {
     "id": "jasche-s06-010",
     "kind": "text",
     "aa": 35,
     "text": "Diese Bewandtniß hat es mit allen einfachen Vorstellungen, die nie deutlich werden; nicht, weil in ihnen Verwirrung, sondern weil in ihnen kein Mannigfaltiges anzutreffen ist. Man muß sie daher undeutlich, aber nicht verworren nennen.",
     "pages": [
      {
       "p": 35,
       "i": 0
      }
     ],
     "aaEnd": 35
    },
    {
     "id": "jasche-s06-011",
     "kind": "text",
     "aa": 35,
     "text": "Und auch selbst bei den zusammengesetzten Vorstellungen, in denen sich ein Mannigfaltiges von Merkmalen unterscheiden läßt, rührt die Undeutlichkeit oft nicht her von Verwirrung, sondern von Schwäche des Bewußtseins. Es kann nämlich etwas deutlich sein der Form nach, d.h. ich kann mir des Mannigfaltigen in der Vorstellung bewußt sein; aber der Materie nach kann die Deutlichkeit abnehmen, wenn der Grad des Bewußtseins kleiner wird, obgleich alle Ordnung da ist. Dieses ist der Fall mit abstracten Vorstellungen."
    },
    {
     "id": "jasche-s06-012",
     "kind": "text",
     "aa": 35,
     "text": "Die Deutlichkeit selbst kann eine zwiefache sein:"
    },
    {
     "id": "jasche-s06-013",
     "kind": "text",
     "aa": 35,
     "text": "Erstlich, eine sinnliche. Diese besteht in dem Bewußtsein des Mannigfaltigen in der Anschauung. Ich sehe z.B. die Milchstraße als einen weißlichten Streifen; die Lichtstrahlen von den einzelnen in demselben befindlichen Sternen müssen nothwendig in mein Auge gekommen sein. Aber die Vorstellung davon war nur klar und wird durch das Teleskop erst deutlich, weil ich jetzt die einzelnen in jenem Milchstreifen enthaltenen Sterne erblicke."
    },
    {
     "id": "jasche-s06-014",
     "kind": "text",
     "aa": 35,
     "text": "Zweitens, eine intellectuelle; Deutlichkeit in Begriffen oder Verstandesdeutlichkeit. Diese beruht auf der Zergliederung des Begriffs in Ansehung des Mannigfaltigen, das in ihm enthalten liegt. So sind z.B. in dem Begriffe der Tugend als Merkmale enthalten 1) der Begriff der Freiheit, 2) der Begriff der Anhänglichkeit an Regeln (der Pflicht), 3) der Begriff von Überwältigung der Macht der Neigungen, wofern sie jenen Regeln widerstreiten. Lösen wir nun so den Begriff der Tugend in seine einzelnen Bestandtheile auf, so machen wir ihn eben durch diese Analyse uns deutlich. Durch diese Deutlichmachung selbst aber setzen wir zu einem Begriffe nichts hinzu; wir erklären ihn nur. Es werden daher bei der Deutlichkeit die Begriffe nicht der Materie, sondern nur der Form nach verbessert."
    },
    {
     "id": "jasche-s06-015",
     "kind": "rule",
     "aa": 35,
     "zone": 1
    },
    {
     "id": "jasche-s06-016",
     "kind": "text",
     "aa": 35,
     "text": "Reflectiren wir auf unsre Erkenntnisse in Ansehung der beiden wesentlich verschiedenen Grundvermögen der Sinnlichkeit und des Verstandes, woraus sie entspringen: so treffen wir hier auf den Unterschied zwischen Anschauungen und Begriffen. Alle unsre Erkenntnisse nämlich sind, in dieser Rücksicht betrachtet, entweder Anschauungen oder Begriffe. Die erstern haben ihre Quelle in der Sinnlichkeit, dem Vermögen der Anschauungen, die letztern im Verstande, dem Vermögen der Begriffe. Dieses ist der logische Unterschied zwischen Verstand und Sinnlichkeit, nach welchem diese nichts als Anschauungen, jener hingegen nichts als Begriffe liefert. Beide Grundvermögen lassen sich freilich auch noch von einer andern Seite betrachten und auf eine andre Art definiren; nämlich die Sinnlichkeit als ein Vermögen der Receptivität, der Verstand als ein Vermögen der Spontaneität. Allein diese Erklärungsart ist nicht logisch, sondern metaphysisch. Man pflegt die Sinnlichkeit auch das niedere, den Verstand dagegen das obere Vermögen zu nennen, aus dem Grunde, weil die Sinnlichkeit den bloßen Stoff zum Denken giebt, der Verstand aber über diesen Stoff disponirt und denselben unter Regeln oder Begriffe bringt.",
     "pages": [
      {
       "p": 36,
       "i": 138
      }
     ],
     "aaEnd": 36,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s06-017",
     "kind": "text",
     "aa": 36,
     "text": "Auf den hier angegebenen Unterschied zwischen intuitiven und discursiven Erkenntnissen, oder zwischen Anschauungen und Begriffen gründet sich die Verschiedenheit der ästhetischen und der logischen Vollkommenheit des Erkenntnisses.",
     "zone": 1
    },
    {
     "id": "jasche-s06-018",
     "kind": "text",
     "aa": 36,
     "text": "Ein Erkenntniß kann vollkommen sein, entweder nach Gesetzen der Sinnlichkeit, oder nach Gesetzen des Verstandes; im erstern Falle ist es ästhetisch, im andern logisch vollkommen. Beide, die ästhetische und die logische Vollkommenheit, sind also von verschiedener Art, die erstere bezieht sich auf die Sinnlichkeit, die letztere auf den Verstand. Die logische Vollkommenheit des Erkenntnisses beruht auf seiner Übereinstimmung mit dem Objecte; also auf allgemeingültigen Gesetzen, und läßt sich mithin auch nach Normen a priori beurtheilen. Die ästhetische Vollkommenheit besteht in der Übereinstimmung des Erkenntnisses mit dem Subjecte und gründet sich auf die besondere Sinnlichkeit des Menschen. Es finden daher bei der ästhetischen Vollkommenheit keine objectiv- und allgemeingültigen Gesetze statt, in Beziehung auf welche sie sich a priori auf eine für alle denkenden Wesen überhaupt allgemeingeltende Weise beurtheilen ließe. Sofern es indessen auch allgemeine Gesetze der Sinnlichkeit giebt, die, obgleich nicht objectiv und für alle denkenden Wesen überhaupt, doch subjectiv für die gesammte Menschheit Gültigkeit haben: läßt sich auch eine ästhetische Vollkommenheit denken, die den Grund eines subjectiv-allgemeinen Wohlgefallens enthält. Dieses ist die Schönheit, das, was den Sinnen in der Anschauung gefällt und eben darum der Gegenstand eines allgemeinen Wohlgefallens sein kann, weil die Gesetze der Anschauung allgemeine Gesetze der Sinnlichkeit sind.",
     "pages": [
      {
       "p": 37,
       "i": 1205
      }
     ],
     "aaEnd": 37,
     "em": [
      [
       518,
       526
      ],
      [
       837,
       845
      ]
     ],
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s06-019",
     "kind": "text",
     "aa": 37,
     "text": "Durch diese Übereinstimmung mit den allgemeinen Gesetzen der Sinnlichkeit unterscheidet sich der Art nach das eigentliche, selbstständige Schöne, dessen Wesen in der bloßen Form besteht, von dem Angenehmen, das lediglich in der Empfindung durch Reiz oder Rührung gefällt, und um deswillen auch nur der Grund eines bloßen Privat-Wohlgefallens sein kann.",
     "zone": 1
    },
    {
     "id": "jasche-s06-020",
     "kind": "text",
     "aa": 37,
     "text": "Diese wesentliche ästhetische Vollkommenheit ist es auch, welche unter allen mit der logischen Vollkommenheit sich verträgt und am besten mit ihr verbinden läßt.",
     "zone": 1
    },
    {
     "id": "jasche-s06-021",
     "kind": "text",
     "aa": 37,
     "text": "Von dieser Seite betrachtet kann also die ästhetische Vollkommenheit in Ansehung jenes wesentlich Schönen der logischen Vollkommenheit vortheilhaft sein. In einer anderen Rücksicht ist sie ihr aber auch nachtheilig, sofern wir bei der ästhetischen Vollkommenheit nur auf das außerwesentlich Schöne sehen, das Reizende oder Rührende, was den Sinnen in der bloßen Empfindung gefällt und nicht auf die bloße Form, sondern die Materie der Sinnlichkeit sich bezieht. Denn Reiz und Rührung können die logische Vollkommenheit in unsern Erkenntnissen und Urtheilen am meisten verderben.",
     "zone": 1
    },
    {
     "id": "jasche-s06-022",
     "kind": "text",
     "aa": 37,
     "text": "Überhaupt bleibt wohl freilich zwischen der ästhetischen und der logischen Vollkommenheit unsers Erkenntnisses immer eine Art von Widerstreit, der nicht völlig gehoben werden kann. Der Verstand will belehrt, die Sinnlichkeit belebt sein, der erste begehrt Einsicht, die zweite Faßlichkeit. Sollen Erkenntnisse unterrichten, so müssen sie in so fern gründlich sein; sollen sie zugleich unterhalten, so müssen sie auch schön sein. Ist ein Vortrag schön, aber seicht, so kann er nur der Sinnlichkeit, aber nicht dem Verstande, ist er umgekehrt gründlich, aber trocken, nur dem Verstande, aber nicht auch der Sinnlichkeit gefallen.",
     "zone": 1
    },
    {
     "id": "jasche-s06-023",
     "kind": "text",
     "aa": 37,
     "text": "Da es indessen das Bedürfniß der menschlichen Natur und der Zweck der Popularität des Erkenntnisses erfordert, daß wir beide Vollkommenheiten mit einander zu vereinigen suchen: so müssen wir es uns auch angelegen sein lassen, denjenigen Erkenntnissen, die überhaupt einer ästhetischen Vollkommenheit fähig sind, dieselbe zu verschaffen und eine schulgerechte, logisch vollkommene Erkenntniß durch die ästhetische Form populär zu machen. Bei diesem Bestreben, die ästhetische mit der logischen Vollkommenheit in unsern Erkenntnissen zu verbinden, müssen wir aber folgende Regeln nicht aus der Acht lassen: nämlich 1) daß die logische Vollkommenheit die Basis aller übrigen Vollkommenheiten sei und daher keiner andern gänzlich nachstehen oder aufgeopfert werden dürfe; 2) daß man hauptsächlich auf die formale ästhetische Vollkommenheit sehe; die Übereinstimmung einer Erkenntniß mit den Gesetzen der Anschauung, weil gerade hierin das wesentlich Schöne besteht, das mit der logischen Vollkommenheit sich am besten vereinigen läßt; 3) daß man mit Reiz und Rührung, wodurch ein Erkenntniß auf die Empfindung wirkt und für dieselbe ein Interesse erhält, sehr behutsam sein müsse, weil hierdurch so leicht die Aufmerksamkeit vom Object auf das Subject kann gezogen werden, woraus denn augenscheinlich ein sehr nachtheiliger Einfluß auf die logische Vollkommenheit des Erkenntnisses entstehen muß.",
     "pages": [
      {
       "p": 38,
       "i": 426
      }
     ],
     "aaEnd": 38,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s06-024",
     "kind": "rule",
     "aa": 38,
     "zone": 2
    },
    {
     "id": "jasche-s06-025",
     "kind": "text",
     "aa": 38,
     "text": "Um die wesentlichen Verschiedenheiten, die zwischen der logischen und der ästhetischen Vollkommenheit des Erkenntnisses stattfinden, nicht bloß im Allgemeinen, sondern von mehreren besondern Seiten noch kenntlicher zu machen, wollen wir sie beide unter einander vergleichen in Rücksicht auf die vier Hauptmomente der Quantität, der Qualität, der Relation und der Modalität, worauf es bei Beurtheilung der Vollkommenheit des Erkenntnisses ankommt.",
     "zone": 2
    },
    {
     "id": "jasche-s06-026",
     "kind": "text",
     "aa": 38,
     "text": "Ein Erkenntniß ist vollkommen 1) der Quantität nach, wenn es allgemein ist; 2) der Qualität nach, wenn es deutlich ist; 3) der Relation nach, wenn es wahr ist, und endlich 4) der Modalität nach, wenn es gewiß ist.",
     "zone": 2
    },
    {
     "id": "jasche-s06-027",
     "kind": "text",
     "aa": 38,
     "text": "Aus diesen angegebenen Gesichtspunkten betrachtet, wird also ein Erkenntniß logisch vollkommen sein der Quantität nach: wenn es objective Allgemeinheit (Allgemeinheit des Begriffs oder der Regel), der Qualität nach: wenn es objective Deutlichkeit (Deutlichkeit im Begriffe), der Relation nach: wenn es objective Wahrheit, und endlich der Modalität nach: wenn es objective Gewißheit hat.",
     "zone": 2
    },
    {
     "id": "jasche-s06-028",
     "kind": "text",
     "aa": 38,
     "text": "Diesen logischen Vollkommenheiten entsprechen nun folgende ästhetische Vollkommenheiten in Beziehung auf jene vier Hauptmomente; nämlich",
     "zone": 2,
     "maybeContinues": true
    },
    {
     "id": "jasche-s06-029",
     "kind": "text",
     "aa": 39,
     "text": "1) die ästhetische Allgemeinheit. Diese besteht in der Anwendbarkeit einer Erkenntniß auf eine Menge von Objecten, die zu Beispielen dienen, an denen sich die Anwendung von ihr machen läßt, und wodurch sie zugleich für den Zweck der Popularität brauchbar wird;",
     "pages": [
      {
       "p": 39,
       "i": 0
      }
     ],
     "aaEnd": 39,
     "zone": 2
    },
    {
     "id": "jasche-s06-030",
     "kind": "text",
     "aa": 39,
     "text": "2) die ästhetische Deutlichkeit. Dieses ist die Deutlichkeit in der Anschauung, worin durch Beispiele ein abstract gedachter Begriff in concreto dargestellt oder erläutert wird;",
     "em": [
      [
       133,
       144
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s06-031",
     "kind": "text",
     "aa": 39,
     "text": "3) die ästhetische Wahrheit. Eine bloß subjective Wahrheit, die nur in der Übereinstimmung des Erkenntnisses mit dem Subject und den Gesetzen des Sinnen-Scheines besteht und folglich nichts weiter als ein allgemeiner Schein ist;",
     "zone": 2
    },
    {
     "id": "jasche-s06-032",
     "kind": "text",
     "aa": 39,
     "text": "4) die ästhetische Gewißheit. Diese beruht auf dem, was dem Zeugnisse der Sinne zufolge nothwendig ist, d.i. was durch Empfindung und Erfahrung bestätigt wird.",
     "zone": 2
    },
    {
     "id": "jasche-s06-033",
     "kind": "rule",
     "aa": 39,
     "zone": 3
    },
    {
     "id": "jasche-s06-034",
     "kind": "text",
     "aa": 39,
     "text": "Bei den so eben genannten Vollkommenheiten kommen immer zwei Stücke vor, die in ihrer harmonischen Vereinigung die Vollkommenheit überhaupt ausmachen, nämlich: Mannigfaltigkeit und Einheit. Beim Verstande liegt die Einheit im Begriffe, bei den Sinnen in der Anschauung.",
     "zone": 3
    },
    {
     "id": "jasche-s06-035",
     "kind": "text",
     "aa": 39,
     "text": "Bloße Mannigfaltigkeit ohne Einheit kann uns nicht befriedigen. Und daher ist unter allen die Wahrheit die Hauptvollkommenheit, weil sie der Grund der Einheit ist durch die Beziehung unsers Erkenntnisses auf das Object. Auch selbst bei der ästhetischen Vollkommenheit bleibt die Wahrheit immer die conditio sine qua non, die vornehmste negative Bedingung, ohne welche etwas nicht allgemein dem Geschmacke gefallen kann. Es darf daher niemand hoffen, in schönen Wissenschaften fortzukommen, wenn er nicht logische Vollkommenheit in seinem Erkenntnisse zum Grunde gelegt hat. In der größten möglichen Vereinbarung der logischen mit der ästhetischen Vollkommenheit überhaupt in Rücksicht auf solche Kenntnisse, die beides, zugleich unterrichten und unterhalten sollen, zeigt sich auch wirklich der Charakter und die Kunst des Genies.",
     "em": [
      [
       298,
       319
      ]
     ],
     "zone": 3
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s07",
   "part": "Einleitung",
   "title": "VI. Besondre logische Vollkommenheiten des Erkenntnisses.",
   "heading": "[Einleitung.] / VI. Besondre logische Vollkommenheiten des Erkenntnisses.",
   "blocks": [
    {
     "id": "jasche-s07-001",
     "kind": "text",
     "aa": 40,
     "text": "A) Logische Vollkommenheit des Erkenntnisses der Quantität nach. — Größe.— Extensive und intensive Größe. — Weitläuftigkeit und Gründlichkeit oder Wichtigkeit und Fruchtbarkeit des Erkenntnisses. — Bestimmung des Horizonts unsrer Erkenntnisse.",
     "em": [
      [
       0,
       1
      ]
     ],
     "align": "center"
    },
    {
     "id": "jasche-s07-002",
     "kind": "text",
     "aa": 40,
     "text": "Die Größe der Erkenntniß kann in einem zwiefachen Verstande genommen werden, entweder als extensive oder als intensive Größe. Die erstere bezieht sich auf den Umfang der Erkenntniß und besteht also in der Menge und Mannigfaltigkeit derselben; die letztere bezieht sich auf ihren Gehalt, welcher die Vielgültigkeit oder die logische Wichtigkeit und Fruchtbarkeit einer Erkenntniß betrifft, sofern sie als Grund von vielen und großen Folgen betrachtet wird (non multa sed multum).",
     "em": [
      [
       456,
       476
      ]
     ]
    },
    {
     "id": "jasche-s07-003",
     "kind": "text",
     "aa": 40,
     "text": "Bei Erweiterung unsrer Erkenntnisse oder bei Vervollkommnung derselben ihrer extensiven Größe nach, ist es gut sich einen Überschlag zu machen, in wie weit ein Erkenntniß mit unsern Zwecken und Fähigkeiten zusammenstimme. Diese Überlegung betrifft die Bestimmung des Horizonts unsrer Erkenntnisse, unter welchem die Angemessenheit der Größe der gesammten Erkenntnisse mit den Fähigkeiten und Zwecken des Subjects zu verstehen ist."
    },
    {
     "id": "jasche-s07-004",
     "kind": "text",
     "aa": 40,
     "text": "Der Horizont läßt sich bestimmen"
    },
    {
     "id": "jasche-s07-005",
     "kind": "text",
     "aa": 40,
     "text": "1) logisch, nach dem Vermögen oder den Erkenntnißkräften in Beziehung auf das Interesse des Verstandes. Hier haben wir zu beurtheilen: wie weit wir in unsern Erkenntnissen kommen können, wie weit wir darin gehen müssen und in wie fern gewisse Erkenntnisse in logischer Absicht als Mittel zu diesen oder jenen Haupterkenntnissen, als unsern Zwecken, dienen;"
    },
    {
     "id": "jasche-s07-006",
     "kind": "text",
     "aa": 40,
     "text": "2) ästhetisch, nach dem Geschmack in Beziehung auf das Interesse des Gefühls. Der seinen Horizont ästhetisch bestimmt, sucht die Wissenschaft nach dem Geschmacke des Publicums einzurichten, d.h. sie populär zu machen, oder überhaupt nur solche Erkenntnisse sich zu erwerben, die sich allgemein mittheilen lassen und an denen auch die Klasse der Nichtgelehrten Gefallen und Interesse findet;"
    },
    {
     "id": "jasche-s07-007",
     "kind": "text",
     "aa": 40,
     "text": "3) praktisch, nach dem Nutzen in Beziehung auf das Interesse des Willens. Der praktische Horizont, sofern er bestimmt wird nach dem Einflusse, den ein Erkenntniß auf unsre Sittlichkeit hat, ist pragmatisch und von der größten Wichtigkeit.",
     "pages": [
      {
       "p": 41,
       "i": 61
      }
     ],
     "aaEnd": 41,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s07-008",
     "kind": "text",
     "aa": 41,
     "text": "Der Horizont betrifft also die Beurtheilung und Bestimmung dessen, was der Mensch wissen kann, was er wissen darf, und was er wissen soll."
    },
    {
     "id": "jasche-s07-009",
     "kind": "rule",
     "aa": 41,
     "zone": 1
    },
    {
     "id": "jasche-s07-010",
     "kind": "text",
     "aa": 41,
     "text": "Was nun insbesondre den theoretisch oder logisch bestimmten Horizont betrifft — und von diesem kann hier allein die Rede sein —, so können wir denselben entweder aus dem objectiven oder aus dem subjectiven Gesichtspunkte betrachten.",
     "zone": 1
    },
    {
     "id": "jasche-s07-011",
     "kind": "text",
     "aa": 41,
     "text": "In Ansehung der Objecte ist der Horizont entweder historisch oder rational. Der erstere ist viel weiter als der andre, ja er ist unermeßlich groß, denn unsre historische Erkenntniß hat keine Grenzen. Der rationale Horizont dagegen läßt sich fixiren, es läßt sich z.B. bestimmen, auf welche Art von Objecten das mathematische Erkenntniß nicht ausgedehnt werden könne. So auch in Absicht auf das philosophische Vernunfterkenntniß, wie weit hier die Vernunft a priori ohne alle Erfahrung wohl gehen könne?",
     "em": [
      [
       456,
       464
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s07-012",
     "kind": "text",
     "aa": 41,
     "text": "In Beziehung aufs Subject ist der Horizont entweder der allgemeine und absolute, oder ein besondrer und bedingter (Privat-Horizont).",
     "zone": 1
    },
    {
     "id": "jasche-s07-013",
     "kind": "text",
     "aa": 41,
     "text": "Unter dem absoluten und allgemeinen Horizont ist die Congruenz der Grenzen der menschlichen Erkenntnisse mit den Grenzen der gesammten menschlichen Vollkommenheit überhaupt zu verstehen. Und hier ist also die Frage: Was kann der Mensch als Mensch überhaupt wissen?",
     "zone": 1
    },
    {
     "id": "jasche-s07-014",
     "kind": "text",
     "aa": 41,
     "text": "Die Bestimmung des Privat-Horizonts hängt ab von mancherlei empirischen und speciellen Rücksichten, z.B. des Alters, des Geschlechts, Standes, der Lebensart u.dgl.m. Jede besondre Klasse von Menschen hat also in Beziehung auf ihre speciellen Erkenntnißkräfte, Zwecke und Standpunkte ihren besondern, jeder Kopf nach Maaßgabe der Individualität seiner Kräfte und seines Standpunktes seinen eigenen Horizont. Endlich können wir uns auch noch einen Horizont der gesunden Vernunft und einen Horizont der Wissenschaft denken, welcher letztere noch Principien bedarf, um nach denselben zu bestimmen, was wir wissen und nicht wissen können.",
     "zone": 1
    },
    {
     "id": "jasche-s07-015",
     "kind": "text",
     "aa": 42,
     "text": "Was wir nicht wissen können, ist über unsern Horizont, was wir nicht wissen dürfen oder nicht zu wissen brauchen, außer unserm Horizonte. Dieses letztere kann jedoch nur relativ gelten in Beziehung auf diese oder jene besondren Privatzwecke, zu deren Erreichung gewisse Erkenntnisse nicht nur nichts beitragen, sondern ihr sogar hinderlich sein könnten. Denn schlechthin und in aller Absicht unnütz und unbrauchbar ist doch kein Erkenntniß, ob wir gleich seinen Nutzen nicht immer einsehen können. Es ist daher ein eben so unweiser als ungerechter Vorwurf, der großen Männern, welche mit mühsamen Fleiße die Wissenschaften bearbeiten, von schalen Köpfen gemacht wird, wenn diese hierbei fragen: wozu ist das nütze? Diese Frage muß man, indem man sich mit Wissenschaften beschäftigen will, gar nicht einmal aufwerfen. Gesetzt, eine Wissenschaft könnte nur über irgend ein mögliches Object Aufschlüsse geben, so wäre sie um deswillen schon nützlich genug. Jede logisch vollkommene Erkenntniß hat immer irgend einen möglichen Nutzen, der, obgleich uns bis jetzt unbekannt, doch vielleicht von der Nachkommenschaft wird gefunden werden. — Hätte man bei Cultur der Wissenschaften immer nur auf den materiellen Gewinn, den Nutzen derselben gesehen, so würden wir keine Arithmetik und Geometrie haben. Unser Verstand ist auch überdies so eingerichtet, daß er in der bloßen Einsicht Befriedigung findet und mehr noch als in dem Nutzen, der daraus entspringt. Dieses merkte schon Plato an. Der Mensch fühlt seine eigene Vortrefflichkeit dabei, er empfindet, was es heiße, Verstand haben. Menschen, die das nicht empfinden, müssen die Thiere beneiden. Der innere Werth, den Erkenntnisse durch logische Vollkommenheit haben, ist mit ihrem äußern, dem Werthe in der Anwendung, nicht zu vergleichen.",
     "pages": [
      {
       "p": 42,
       "i": 0
      }
     ],
     "aaEnd": 42,
     "zone": 1
    },
    {
     "id": "jasche-s07-016",
     "kind": "text",
     "aa": 42,
     "text": "Wie das, was außer unserm Horizonte liegt, sofern wir es nach unsern Absichten, als entbehrlich für uns, nicht wissen dürfen, so ist auch das, was unter unserm Horizont liegt, sofern wir es, als schädlich für uns, nicht wissen sollen, nur in einem relativen, keinesweges aber im absoluten Sinne zu verstehen.",
     "zone": 1
    },
    {
     "id": "jasche-s07-017",
     "kind": "rule",
     "aa": 42,
     "zone": 2
    },
    {
     "id": "jasche-s07-018",
     "kind": "text",
     "aa": 42,
     "text": "In Absicht auf die Erweiterung und Demarcation unserer Erkenntniß sind folgende Regeln zu empfehlen:",
     "zone": 2
    },
    {
     "id": "jasche-s07-019",
     "kind": "text",
     "aa": 42,
     "text": "Man muß sich seinen Horizont",
     "indent": 2,
     "zone": 2,
     "maybeContinues": true
    },
    {
     "id": "jasche-s07-020",
     "kind": "text",
     "aa": 43,
     "text": "1) zwar frühzeitig bestimmen, aber freilich doch erst alsdann, wenn man ihn sich selbst bestimmen kann, welches gewöhnlich vor dem 20ten Jahre nicht stattfindet;",
     "pages": [
      {
       "p": 43,
       "i": 0
      }
     ],
     "aaEnd": 43,
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-021",
     "kind": "text",
     "aa": 43,
     "text": "2) ihn nicht leicht und oft verändern (nicht von einem auf das andre fallen);",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-022",
     "kind": "text",
     "aa": 43,
     "text": "3) den Horizont Anderer nicht nach dem seinigen messen, und nicht das für unnütz halten, was uns zu Nichts nützt; es würde verwegen sein, den Horizont Anderer bestimmen zu wollen, weil man theils ihre Fähigkeiten, theils ihre Absichten nicht genug kennt;",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-023",
     "kind": "text",
     "aa": 43,
     "text": "4) ihn weder zu sehr ausdehnen, noch zu sehr einschränken. Denn der zu viel wissen will, weiß am Ende nichts, und der umgekehrt von einigen Dingen glaubt, daß sie ihn nichts angehen, betrügt sich oft; wie wenn z.B. der Philosoph von der Geschichte glaubte, daß sie ihm entbehrlich sei.",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-024",
     "kind": "text",
     "aa": 43,
     "text": "Auch suche man",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-025",
     "kind": "text",
     "aa": 43,
     "text": "5) den absoluten Horizont des ganzen menschlichen Geschlechts (der vergangenen und künftigen Zeit nach) zum voraus zu bestimmen, so wie insbesondre auch",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-026",
     "kind": "text",
     "aa": 43,
     "text": "6) die Stelle zu bestimmen, die unsre Wissenschaft im Horizonte der gesammten Erkenntniß einnimmt. Dazu dient die Universal-Encyklopädie als eine Universalcharte (Mappe-monde) der Wissenschaften.",
     "em": [
      [
       163,
       174
      ]
     ],
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-027",
     "kind": "text",
     "aa": 43,
     "text": "7) Bei Bestimmung seines besondern Horizonts selbst prüfe man sorgfältig: zu welchem Theile des Erkenntnisses man die größte Fähigkeit und Wohlgefallen habe, was in Ansehung gewisser Pflichten mehr oder weniger nöthig sei, was mit den nothwendigen Pflichten nicht zusammen bestehen könne und endlich",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-028",
     "kind": "text",
     "aa": 43,
     "text": "8) suche man seinen Horizont immer doch mehr zu erweitern als zu verengen.",
     "indent": 2,
     "zone": 2
    },
    {
     "id": "jasche-s07-029",
     "kind": "text",
     "aa": 43,
     "text": "Es ist überhaupt von der Erweiterung des Erkenntnisses das nicht zu besorgen, was d'Alembert von ihr besorgt. Denn uns drückt nicht die Last, sondern uns verengt das Volumen des Raums für unsre Erkenntnisse. Kritik der Vernunft, der Geschichte und historischen Schriften, ein allgemeiner Geist, der auf das menschliche Erkenntniß en gros und nicht bloß im detail geht, werden immer den Umfang kleiner machen, ohne im Inhalte etwas zu vermindern. Bloß die Schlacke fällt vom Metalle weg oder das unedlere Vehikel, die Hülle, welche bis so lange nöthig war. Mit der Erweiterung der Naturgeschichte, der Mathematik u.s.w. werden neue Methoden erfunden werden, die das Alte verkürzen und die Menge der Bücher entbehrlich machen. Auf Erfindung solcher neuen Methoden und Principien wird es beruhen, daß wir, ohne das Gedächtniß zu belästigen, alles mit Hülfe derselben nach Belieben selbst finden können. Daher macht sich der um die Geschichte wie ein Genie verdient, welcher sie unter Ideen faßt, die immer bleiben können.",
     "pages": [
      {
       "p": 44,
       "i": 560
      }
     ],
     "aaEnd": 44,
     "em": [
      [
       82,
       92
      ],
      [
       330,
       337
      ],
      [
       356,
       362
      ]
     ],
     "zone": 2,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s07-030",
     "kind": "rule",
     "aa": 44,
     "zone": 3
    },
    {
     "id": "jasche-s07-031",
     "kind": "text",
     "aa": 44,
     "text": "Der logischen Vollkommenheit des Erkenntnisses in Ansehung seines Umfanges steht die Unwissenheit entgegen. Eine negative Unvollkommenheit oder Unvollkommenheit des Mangels, die wegen der Schranken des Verstandes von unserm Erkenntnisse unzertrennlich bleibt.",
     "zone": 3
    },
    {
     "id": "jasche-s07-032",
     "kind": "text",
     "aa": 44,
     "text": "Wir können die Unwissenheit aus einem objectiven und aus einem subjectiven Gesichtspunkte betrachten.",
     "zone": 3
    },
    {
     "id": "jasche-s07-033",
     "kind": "text",
     "aa": 44,
     "text": "1) Objectiv genommen, ist die Unwissenheit entweder eine materiale oder eine formale. Die erstere besteht in einem Mangel an historischen, die andere in einem Mangel an rationalen Erkenntnissen. Man muß in keinem Fache ganz ignorant sein, aber wohl kann man das historische Wissen einschränken, um sich desto mehr auf das rationale zu legen, oder umgekehrt.",
     "zone": 3
    },
    {
     "id": "jasche-s07-034",
     "kind": "text",
     "aa": 44,
     "text": "2) In subjectiver Bedeutung ist die Unwissenheit entweder eine gelehrte, scientifische oder eine gemeine. Der die Schranken der Erkenntniß, also das Feld der Unwissenheit, von wo es anhebt, deutlich einsieht, der Philosoph z.B., der es einsieht und beweist, wie wenig man aus Mangel an den dazu erforderlichen Datis in Ansehung der Structur des Goldes wissen könne, ist kunstmäßig oder auf eine gelehrte Art unwissend. Der hingegen unwissend ist, ohne die Gründe von den Grenzen der Wissens einzusehen und sich darum zu bekümmern, ist es auf eine gemeine, nicht wissenschaftliche Weise. Ein solcher weiß nicht einmal, daß er nichts wisse. Denn man kann sich seine Unwissenheit niemals anders vorstellen als durch die Wissenschaft, so wie ein Blinder sich die Finsterniß nicht vorstellen kann, als bis er sehend geworden.",
     "zone": 3
    },
    {
     "id": "jasche-s07-035",
     "kind": "text",
     "aa": 44,
     "text": "Die Kenntniß seiner Unwissenheit setzt also Wissenschaft voraus und macht zugleich bescheiden, dagegen das eingebildete Wissen aufbläht. So war Sokrates’ Nichtwissen eine rühmliche Unwissenheit, eigentlich ein Wissen des Nichtwissens nach seinem eigenen Geständnisse. Diejenigen also, die sehr viele Kenntnisse besitzen und bei alle dem doch über die Menge dessen, was sie nicht wissen, erstaunen, kann der Vorwurf der Unwissenheit eben nicht treffen.",
     "pages": [
      {
       "p": 45,
       "i": 210
      }
     ],
     "aaEnd": 45,
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s07-036",
     "kind": "text",
     "aa": 45,
     "text": "Untadelhaft (inculpabilis) ist überhaupt die Unwissenheit in Dingen, deren Erkenntniß über unsern Horizont geht, und erlaubt (wiewohl auch nur im relativen Sinne) kann sie sein in Ansehung des speculativen Gebrauchs unserer Erkenntnißvermögen, sofern die Gegenstände hier, obgleich nicht über, aber doch außer unserm Horizonte liegen. Schändlich aber ist sie in Dingen, die zu wissen uns sehr nöthig und auch leicht ist.",
     "em": [
      [
       13,
       25
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s07-037",
     "kind": "text",
     "aa": 45,
     "text": "Es ist ein Unterschied, etwas nicht wissen und etwas ignoriren, d.i. keine Notiz wovon nehmen. Es ist gut viel zu ignoriren, was uns nicht gut ist zu wissen. Von beidem ist noch unterschieden das Abstrahiren. Man abstrahirt aber von einer Erkenntniß, wenn man die Anwendung derselben ignorirt, wodurch man sie in abstracto bekommt und im Allgemeinen als Princip sodann besser betrachten kann. Ein solches Abstrahiren von dem, was bei Erkenntniß einer Sache zu unserer Absicht nicht gehört, ist nützlich und lobenswerth.",
     "em": [
      [
       310,
       322
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s07-038",
     "kind": "text",
     "aa": 45,
     "text": "Historisch unwissend sind gemeiniglich Vernunftlehrer.",
     "zone": 3
    },
    {
     "id": "jasche-s07-039",
     "kind": "text",
     "aa": 45,
     "text": "Das historische Wissen ohne bestimmte Grenzen ist Polyhistorie; diese bläht auf. Polymathie geht auf das Vernunfterkenntniß. Beides, das ohne bestimmte Grenzen ausgedehnte historische so wohl als rationale Wissen kann Pansophie heißen. Zum historischen Wissen gehört die Wissenschaft von den Werkzeugen der Gelehrsamkeit — die Philologie, die eine kritische Kenntniß der Bücher und Sprachen (Literatur und Linguistik) in sich faßt.",
     "zone": 3
    },
    {
     "id": "jasche-s07-040",
     "kind": "text",
     "aa": 45,
     "text": "Die bloße Polyhistorie ist eine cyklopische Gelehrsamkeit, der ein Auge fehlt, das Auge der Philosophie, und ein Cyklop von Mathematiker, Historiker, Naturbeschreiber, Philolog und Sprachkundiger ist ein Gelehrter, der groß in allen diesen Stücken ist, aber alle Philosophie darüber für entbehrlich hält.",
     "zone": 3
    },
    {
     "id": "jasche-s07-041",
     "kind": "text",
     "aa": 45,
     "text": "Einen Theil der Philologie machen die Humaniora aus, worunter man die Kenntniß der Alten versteht, welche die Vereinigung der Wissenschaft mit Geschmack befördert, die Rauhigkeit abschleift und die Communicabilität und Urbanität, worin Humanität besteht, befördert.",
     "em": [
      [
       38,
       47
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s07-042",
     "kind": "text",
     "aa": 46,
     "text": "Die Humaniora betreffen also eine Unterweisung in dem, was zur Cultur des Geschmacks dient, den Mustern der Alten gemäß. Dahin gehört z.B. Beredsamkeit, Poesie, Belesenheit in den classischen Autoren u.dgl.m. Alle diese humanistischen Kenntnisse kann man zum praktischen, auf die Bildung des Geschmacks zunächst abzweckenden Theile der Philologie rechnen. Trennen wir aber den bloßen Philologen noch vom Humanisten, so würden sich beide darin von einander unterscheiden, daß jener die Werkzeuge der Gelehrsamkeit bei den Alten sucht, dieser hingegen die Werkzeuge der Bildung des Geschmacks.",
     "pages": [
      {
       "p": 46,
       "i": 0
      }
     ],
     "aaEnd": 46,
     "em": [
      [
       4,
       13
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s07-043",
     "kind": "text",
     "aa": 46,
     "text": "Der Belletrist oder bel esprit ist ein Humanist nach gleichzeitigen Mustern in lebenden Sprachen. Er ist also kein Gelehrter, denn nur todte Sprachen sind jetzt gelehrte Sprachen, sondern ein bloßer Dilettant der Geschmackskenntnisse nach der Mode, ohne der Alten zu bedürfen. Man könnte ihn den Affen des Humanisten nennen. Der Polyhistor muß als Philolog Linguist und Literator und als Humanist muß er Klassiker und ihr Ausleger sein. Als Philolog ist er cultivirt, als Humanist civilisirt.",
     "em": [
      [
       20,
       30
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s07-044",
     "kind": "rule",
     "aa": 46,
     "zone": 4
    },
    {
     "id": "jasche-s07-045",
     "kind": "text",
     "aa": 46,
     "text": "In Ansehung der Wissenschaften giebt es zwei Ausartungen des herrschenden Geschmacks: Pedanterie und Galanterie. Die eine treibt die Wissenschaften bloß für die Schule und schränkt sie dadurch ein in Rücksicht ihres Gebrauches, die andre treibt sie bloß für den Umgang oder die Welt und beschränkt sie dadurch in Absicht auf ihren Inhalt.",
     "zone": 4
    },
    {
     "id": "jasche-s07-046",
     "kind": "text",
     "aa": 46,
     "text": "Der Pedant ist entweder als Gelehrter dem Weltmanne entgegengesetzt und ist in so fern der aufgeblasene Gelehrte ohne Weltkenntniß, d.i. ohne Kenntniß der Art und Weise, seine Wissenschaft an den Mann zu bringen, oder er ist zwar als der Mann von Geschicklichkeit überhaupt zu betrachten, aber nur in Formalien, nicht dem Wesen und Zwecke nach. In der letztern Bedeutung ist er ein Formalienklauber; eingeschränkt in Ansehung des Kerns der Sachen, sieht er nur auf das Kleid und die Schale. Er ist die verunglückte Nachahmung oder Caricatur vom methodischen Kopfe. Man kann daher die Pedanterei auch die grüblerische Peinlichkeit und unnütze Genauigkeit (Mikrologie) in Formalien nennen. Und ein solches Formale der Schulmethode außer der Schule ist nicht bloß bei Gelehrten und im gelehrten Wesen, sondern auch bei andern Ständen und in andern Dingen anzutreffen. Das Ceremoniell an Höfen, im Umgange, was ist es anders als Formalienjagd und Klauberei? Im Militär ist es nicht völlig so, ob es gleich so scheint. Aber im Gespräche, in der Kleidung, in der Diät, in der Religion herrscht oft viel Pedanterie.",
     "pages": [
      {
       "p": 47,
       "i": 812
      }
     ],
     "aaEnd": 47,
     "zone": 4,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s07-047",
     "kind": "text",
     "aa": 47,
     "text": "Eine zweckmäßige Genauigkeit in Formalien ist Gründlichkeit (schulgerechte, scholastische Vollkommenheit). Pedanterie ist also eine affectirte Gründlichkeit, so wie Galanterie, als eine bloße Buhlerin um den Beifall des Geschmacks, nichts als eine affectirte Popularität ist. Denn die Galanterie ist nur bemüht, sich dem Leser gewogen zu machen und ihn daher auch nicht einmal durch ein schweres Wort zu beleidigen.",
     "zone": 4
    },
    {
     "id": "jasche-s07-048",
     "kind": "text",
     "aa": 47,
     "text": "Pedanterei zu vermeiden, dazu werden ausgebreitete Kenntnisse nicht nur in den Wissenschaften selbst, sondern auch in Ansehung des Gebrauches derselben erfordert. Daher kann sich nur der wahre Gelehrte von der Pedanterei losmachen, die immer die Eigenschaft eines eingeschränkten Kopfes ist.",
     "zone": 4
    },
    {
     "id": "jasche-s07-049",
     "kind": "text",
     "aa": 47,
     "text": "Bei dem Bestreben, unserm Erkenntnisse die Vollkommenheit der scholastischen Gründlichkeit und zugleich der Popularität zu verschaffen, ohne darüber in die gedachten Fehler einer affectirten Gründlichkeit oder einer affectirten Popularität zu gerathen, müssen wir vor Allem auf die scholastische Vollkommenheit unsers Erkenntnisses, die schulgerechte Form der Gründlichkeit, sehen und sodann erst dafür sorgen, wie wir die methodisch in der Schule gelernte Erkenntniß wahrhaft populär, d.i. Andern so leicht und allgemein mittheilbar machen, daß doch die Gründlichkeit nicht durch die Popularität verdrängt werde. Denn um der populären Vollkommenheit willen, dem Volke zu Gefallen, muß die scholastische Vollkommenheit nicht aufgeopfert werden, ohne welche alle Wissenschaft nichts als Spielwerk und Tändelei wäre.",
     "zone": 4
    },
    {
     "id": "jasche-s07-050",
     "kind": "text",
     "aa": 47,
     "text": "Um aber wahre Popularität zu lernen, muß man die Alten lesen, z.B. Cicero’s philosophische Schriften, die Dichter Horaz, Virgil u.s.w., unter den Neuern Hume, Shaftesbury u.a.m. Männer, die alle vielen Umgang mit der verfeinerten Welt gehabt haben, ohne den man nicht populär sein kann. Denn wahre Popularität erfordert viele praktische Welt- und Menschenkenntniß, Kenntniß von den Begriffen, dem Geschmacke und den Neigungen der Menschen, worauf bei der Darstellung und selbst der Wahl schicklicher, der Popularität angemessener Ausdrücke beständige Rücksicht zu nehmen ist. Eine solche Herablassung (Condescendenz)",
     "zone": 4
    },
    {
     "id": "jasche-s07-051",
     "kind": "text",
     "aa": 48,
     "text": "zu der Fassungskraft des Publicums und den gewohnten Ausdrücken, wobei die scholastische Vollkommenheit nicht hintenan gesetzt, sondern nur die Einkleidung der Gedanken so eingerichtet wird, daß man das Gerüst, das Schulgerechte und Technische von jener Vollkommenheit nicht sehen läßt (so wie man mit Bleistift Linien zieht, auf die man schreibt und sie nachher wegwischt), diese wahrhaft populäre Vollkommenheit des Erkenntnisses ist in der That eine große und seltene Vollkommenheit, die von vieler Einsicht in die Wissenschaft zeigt. Auch hat sie außer vielen andern Verdiensten noch dieses, daß sie einen Beweis für die vollständige Einsicht in eine Sache geben kann. Denn die bloß scholastische Prüfung einer Erkenntniß läßt noch den Zweifel übrig: ob die Prüfung nicht einseitig sei, und ob die Erkenntniß selbst auch wohl einen von allen Menschen ihr zugestandenen Werth habe? Die Schule hat ihre Vorurtheile so wie der gemeine Verstand. Eines verbessert hier das andre. Es ist daher wichtig, ein Erkenntniß an Menschen zu prüfen, deren Verstand an keiner Schule hängt.",
     "pages": [
      {
       "p": 48,
       "i": 0
      }
     ],
     "aaEnd": 48,
     "zone": 4
    },
    {
     "id": "jasche-s07-052",
     "kind": "text",
     "aa": 48,
     "text": "Diese Vollkommenheit der Erkenntniß, wodurch sich dieselbe zu einer leichten und allgemeinen Mittheilung qualificirt, könnte man auch die äußere Extension oder die extensive Größe eines Erkenntnisses nennen, sofern es äußerlich unter viele Menschen ausgebreitet ist.",
     "zone": 4
    },
    {
     "id": "jasche-s07-053",
     "kind": "rule",
     "aa": 48,
     "zone": 5
    },
    {
     "id": "jasche-s07-054",
     "kind": "text",
     "aa": 48,
     "text": "Da es so viele und mannigfaltige Erkenntnisse giebt, so wird man wohl thun, sich einen Plan zu machen, nach welchem man die Wissenschaften so ordnet, wie sie am besten zu seinen Zwecken zusammen stimmen und zu Beförderung derselben beitragen. Alle Erkenntnisse stehen unter einander in einer gewissen natürlichen Verknüpfung. Sieht man nun bei dem Bestreben nach Erweiterung der Erkenntnisse nicht auf diesen ihren Zusammenhang: so wird aus allem Vielwissen doch weiter nichts als bloße Rhapsodie. Macht man sich aber eine Hauptwissenschaft zum Zweck und betrachtet alle andern Erkenntnisse nur als Mittel, um zu derselben zu gelangen: so bringt man in sein Wissen einen gewissen systematischen Charakter. — Und um nach einem solchen wohlgeordneten und zweckmäßigen Plane bei Erweiterung seiner Erkenntnisse zu Werke zu gehen, muß man also jenen Zusammenhang der Erkenntnisse unter einander kennen zu lernen suchen. Dazu giebt die Architektonik der Wissenschaften Anleitung, die ein System nach Ideen ist, in welchem die Wissenschaften in Ansehung ihrer Verwandtschaft und systematischen Verbindung in einem Ganzen der die Menschheit interessirenden Erkenntniß betrachtet werden.",
     "pages": [
      {
       "p": 49,
       "i": 975
      }
     ],
     "aaEnd": 49,
     "zone": 5,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s07-055",
     "kind": "rule",
     "aa": 49,
     "zone": 6
    },
    {
     "id": "jasche-s07-056",
     "kind": "text",
     "aa": 49,
     "text": "Was nun insbesondre aber die intensive Größe des Erkenntnisses, d.h. ihren Gehalt, oder ihre Vielgültigkeit und Wichtigkeit betrifft, die sich, wie wir oben bemerkten, von der extensiven Größe, der bloßen Weitläuftigkeit desselben wesentlich unterscheidet: so wollen wir hierüber nur noch folgende wenige Bemerkungen machen:",
     "zone": 6
    },
    {
     "id": "jasche-s07-057",
     "kind": "text",
     "aa": 49,
     "text": "1) Eine Erkenntniß, die aufs Große, d.i. das Ganze im Gebrauch des Verstandes geht, ist von der Subtilität im Kleinen (Mikrologie) zu unterscheiden.",
     "zone": 6
    },
    {
     "id": "jasche-s07-058",
     "kind": "text",
     "aa": 49,
     "text": "2) Logisch wichtig ist jedes Erkenntniß zu nennen, das die logische Vollkommenheit der Form nach befördert, z.B. jeder mathematische Satz, jedes deutlich eingesehene Gesetz der Natur, jede richtige philosophische Erklärung. Die praktische Wichtigkeit kann man nicht voraussehen, sondern man muß sie abwarten.",
     "zone": 6
    },
    {
     "id": "jasche-s07-059",
     "kind": "text",
     "aa": 49,
     "text": "3) Man muß die Wichtigkeit nicht mit der Schwere verwechseln. Ein Erkenntniß kann schwer sein, ohne wichtig zu sein, und umgekehrt. Schwere entscheidet daher weder für noch auch wider den Werth und die Wichtigkeit eines Erkenntnisses. Diese beruht auf der Größe oder Vielheit der Folgen. Je mehr oder je größere Folgen ein Erkenntniß hat, je mehr Gebrauch sich von ihm machen läßt, desto wichtiger ist es. Eine Erkenntniß ohne wichtige Folgen heißt eine Grübelei; dergleichen z.B. die scholastische Philosophie war.",
     "zone": 6
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s08",
   "part": "Einleitung",
   "title": "VII. B) Logische Vollkommenheit des Erkenntnisses der Relation nach.",
   "heading": "[Einleitung.] / VII. B) Logische Vollkommenheit des Erkenntnisses der Relation nach.",
   "blocks": [
    {
     "id": "jasche-s08-001",
     "kind": "text",
     "aa": 49,
     "text": "— Wahrheit. — Materiale und formale oder logische Wahrheit. — Kriterien der logischen Wahrheit. —Falschheit und Irrthum. — Schein, als Quelle des Irrthums. — Mittel zu Vermeidung der Irrthümer.",
     "align": "center"
    },
    {
     "id": "jasche-s08-002",
     "kind": "text",
     "aa": 49,
     "text": "Eine Hauptvollkommenheit des Erkenntnisses, ja die wesentliche und unzertrennliche Bedingung aller Vollkommenheit desselben, ist die Wahrheit. Wahrheit, sagt man, besteht in der Übereinstimmung der Erkenntniß mit dem Gegenstande. Dieser bloßen Worterklärung zufolge soll also mein Erkenntniß, um als wahr zu gelten, mit dem Object übereinstimmen. Nun kann ich aber das Object nur mit meinem Erkenntnisse vergleichen, dadurch daß ich es erkenne. Meine Erkenntniß soll sich also selbst bestätigen, welches aber zur Wahrheit noch lange nicht hinreichend ist. Denn da das Object außer mir und die Erkenntniß in mir ist, so kann ich immer doch nur beurtheilen: ob meine Erkenntniß vom Object mit meiner Erkenntniß vom Object übereinstimme. Einen solchen Cirkel im Erklären nannten die Alten Diallele. Und wirklich wurde dieser Fehler auch immer den Logikern von den Skeptikern vorgeworfen, welche bemerkten: es verhalte sich mit jener Erklärung der Wahrheit eben so, wie wenn jemand vor Gericht eine Aussage thue und sich dabei auf einen Zeugen berufe, den niemand kenne, der sich aber dadurch glaubwürdig machen wolle, daß er behaupte, der, welcher ihn zum Zeugen aufgerufen, sei ein ehrlicher Mann. Die Beschuldigung war allerdings gegründet. Nur ist die Auflösung der gedachten Aufgabe schlechthin und für jeden Menschen unmöglich.",
     "pages": [
      {
       "p": 50,
       "i": 133
      }
     ],
     "aaEnd": 50,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s08-003",
     "kind": "text",
     "aa": 50,
     "text": "Es frägt sich nämlich hier: Ob und in wie fern es ein sicheres, allgemeines und in der Anwendung brauchbares Kriterium der Wahrheit gebe? Denn das soll die Frage: Was ist Wahrheit? bedeuten."
    },
    {
     "id": "jasche-s08-004",
     "kind": "text",
     "aa": 50,
     "text": "Um diese wichtige Frage entscheiden zu können, müssen wir das, was in unserm Erkenntnisse zur Materie desselben gehört und auf das Object sich bezieht, von dem, was die bloße Form, als diejenige Bedingung betrifft, ohne welche ein Erkenntniß gar kein Erkenntniß überhaupt sein würde, wohl unterscheiden. Mit Rücksicht auf diesen Unterschied zwischen der objectiven, materialen und der subjectiven, formalen Beziehung in unserm Erkenntnisse, zerfällt daher die obige Frage in die zwei besondern:"
    },
    {
     "id": "jasche-s08-005",
     "kind": "text",
     "aa": 50,
     "text": "1) Giebt es ein allgemeines materiales, und"
    },
    {
     "id": "jasche-s08-006",
     "kind": "text",
     "aa": 50,
     "text": "2) Giebt es ein allgemeines formales Kriterium der Wahrheit?"
    },
    {
     "id": "jasche-s08-007",
     "kind": "text",
     "aa": 50,
     "text": "Ein allgemeines materiales Kriterium der Wahrheit ist nicht möglich; es ist sogar in sich selbst widersprechend. Denn als ein allgemeines, für alle Objecte überhaupt gültiges, müßte es von allem Unterschiede derselben völlig abstrahiren und doch auch zugleich als ein materiales Kriterium eben auf diesen Unterschied gehen, um bestimmen zu können, ob ein Erkenntniß gerade mit demjenigen Objecte, worauf es bezogen wird, und nicht mit irgend einem Object überhaupt — womit eigentlich gar nichts gesagt wäre — übereinstimme. In dieser Übereinstimmung einer Erkenntniß mit demjenigen bestimmten Objecte, worauf sie bezogen wird, muß aber die materiale Wahrheit bestehen. Denn ein Erkenntniß, welches in Ansehung Eines Objectes wahr ist, kann in Beziehung auf andre Objecte falsch sein. Es ist daher ungereimt, ein allgemeines materiales Kriterium der Wahrheit zu fordern, das von allem Unterschiede der Objecte zugleich abstrahiren und auch nicht abstrahiren solle.",
     "pages": [
      {
       "p": 51,
       "i": 415
      }
     ],
     "aaEnd": 51,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s08-008",
     "kind": "text",
     "aa": 51,
     "text": "Ist nun aber die Frage nach allgemeinen formalen Kriterien der Wahrheit, so ist die Entscheidung hier leicht, daß es dergleichen allerdings geben könne. Denn die formale Wahrheit besteht lediglich in der Zusammenstimmung der Erkenntniß mit sich selbst bei gänzlicher Abstraction von allen Objecten insgesammt und von allem Unterschiede derselben. Und die allgemeinen formalen Kriterien der Wahrheit sind demnach nichts anders als allgemeine logische Merkmale der Übereinstimmung der Erkenntniß mit sich selbst oder — welches einerlei ist — mit den allgemeinen Gesetzen des Verstandes und der Vernunft."
    },
    {
     "id": "jasche-s08-009",
     "kind": "text",
     "aa": 51,
     "text": "Diese formalen, allgemeinen Kriterien sind zwar freilich zur objectiven Wahrheit nicht hinreichend, aber sie sind doch als die conditio sine qua non derselben anzusehen.",
     "em": [
      [
       127,
       148
      ]
     ]
    },
    {
     "id": "jasche-s08-010",
     "kind": "text",
     "aa": 51,
     "text": "Denn vor der Frage: ob die Erkenntniß mit dem Object zusammenstimme, muß die Frage vorhergehen, ob sie mit sich selbst (der Form nach) zusammenstimme? Und dies ist Sache der Logik."
    },
    {
     "id": "jasche-s08-011",
     "kind": "text",
     "aa": 51,
     "text": "Die formalen Kriterien der Wahrheit in der Logik sind"
    },
    {
     "id": "jasche-s08-012",
     "kind": "text",
     "aa": 51,
     "text": "1) der Satz des Widerspruchs,"
    },
    {
     "id": "jasche-s08-013",
     "kind": "text",
     "aa": 51,
     "text": "2) der Satz des zureichenden Grundes."
    },
    {
     "id": "jasche-s08-014",
     "kind": "text",
     "aa": 51,
     "text": "Durch den erstern ist die logische Möglichkeit, durch den letztern die logische Wirklichkeit eines Erkenntnisses bestimmt."
    },
    {
     "id": "jasche-s08-015",
     "kind": "text",
     "aa": 51,
     "text": "Zur logischen Wahrheit eines Erkenntnisses gehört nämlich"
    },
    {
     "id": "jasche-s08-016",
     "kind": "text",
     "aa": 51,
     "text": "Erstlich: daß es logisch möglich sei, d.h. sich nicht widerspreche. Dieses Kennzeichen der innerlichen logischen Wahrheit ist aber nur negativ; denn ein Erkenntniß, welches sich widerspricht, ist zwar falsch, wenn es sich aber nicht widerspricht, nicht allemal wahr."
    },
    {
     "id": "jasche-s08-017",
     "kind": "text",
     "aa": 51,
     "text": "Zweitens: daß es logisch gegründet sei, d.h. daß es a) Gründe habe und b) nicht falsche Folgen habe.",
     "em": [
      [
       52,
       53
      ],
      [
       71,
       72
      ]
     ]
    },
    {
     "id": "jasche-s08-018",
     "kind": "text",
     "aa": 51,
     "text": "Dieses zweite, den logischen Zusammenhang eines Erkenntnisses mit Gründen und Folgen betreffende Kriterium der äußerlichen logischen Wahrheit oder der Rationabilität des Erkenntnisses ist positiv. Und hier gelten folgende Regeln:",
     "pages": [
      {
       "p": 52,
       "i": 133
      }
     ],
     "aaEnd": 52,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s08-019",
     "kind": "text",
     "aa": 52,
     "text": "1) Aus der Wahrheit der Folge läßt sich auf die Wahrheit des Erkenntnisses als Grundes schließen, aber nur negativ: wenn Eine falsche Folge aus einer Erkenntniß fließt, so ist die Erkenntniß selbst falsch. Denn wenn der Grund wahr wäre, so müßte die Folge auch wahr sein, weil die Folge durch den Grund bestimmt wird. —",
     "indent": 2
    },
    {
     "id": "jasche-s08-020",
     "kind": "text",
     "aa": 52,
     "text": "Man kann aber nicht umgekehrt schließen: wenn keine falsche Folge aus einem Erkenntnisse fließt, so ist es wahr; denn man kann aus einem falschen Grunde wahre Folgen ziehen."
    },
    {
     "id": "jasche-s08-021",
     "kind": "text",
     "aa": 52,
     "text": "2) Wenn alle Folgen eines Erkenntnisses wahr sind: so ist das Erkenntniß auch wahr. Denn wäre nur etwas Falsches im Erkenntnisse, so müßte auch eine falsche Folge stattfinden.",
     "indent": 2
    },
    {
     "id": "jasche-s08-022",
     "kind": "text",
     "aa": 52,
     "text": "Aus der Folge läßt sich also zwar auf einen Grund schließen, aber ohne diesen Grund bestimmen zu können. Nur aus dem Inbegriffe aller Folgen allein kann man auf einen bestimmten Grund schließen, daß dieser der wahre sei."
    },
    {
     "id": "jasche-s08-023",
     "kind": "text",
     "aa": 52,
     "text": "Die erstere Schlußart, nach welcher die Folge nur ein negativ und indirect zureichendes Kriterium der Wahrheit eines Erkenntnisses sein kann, heißt in der Logik die apagogische (modus tollens).",
     "em": [
      [
       178,
       191
      ]
     ]
    },
    {
     "id": "jasche-s08-024",
     "kind": "text",
     "aa": 52,
     "text": "Dieses Verfahren, wovon in der Geometrie häufig Gebrauch gemacht wird, hat den Vortheil, daß ich aus einem Erkenntnisse nur Eine falsche Folge herleiten darf, um seine Falschheit zu beweisen. Um z.B. darzuthun, daß die Erde nicht platt sei, darf ich, ohne positive und directe Gründe vorzubringen, apagogisch und indirect nur so schließen: Wäre die Erde platt, so müßte der Polarstern immer gleich hoch sein; nun ist dieses aber nicht der Fall, folglich ist sie nicht platt."
    },
    {
     "id": "jasche-s08-025",
     "kind": "text",
     "aa": 52,
     "text": "Bei der andern, der positiven und directen Schlußart (modus ponens) tritt die Schwierigkeit ein, daß sich die Allheit der Folgen nicht apodiktisch erkennen läßt, und daß man daher durch die gedachte Schlußart nur zu einer wahrscheinlichen und hypothetisch-wahren Erkenntniß (Hypothesen) geführt wird, nach der Voraussetzung: daß da, wo viele Folgen wahr sind, die übrigen auch alle wahr sein mögen.",
     "em": [
      [
       54,
       66
      ]
     ]
    },
    {
     "id": "jasche-s08-026",
     "kind": "text",
     "aa": 52,
     "text": "Wir werden also hier drei Grundsätze, als allgemeine, bloß formale oder logische Kriterien der Wahrheit aufstellen können; diese sind"
    },
    {
     "id": "jasche-s08-027",
     "kind": "text",
     "aa": 52,
     "text": "1) der Satz des Widerspruchs und der Identität (principium contradictionis und identitatis), durch welchen die innere Möglichkeit eines Erkenntnisses für problematische Urtheile bestimmt ist;",
     "pages": [
      {
       "p": 53,
       "i": 130
      }
     ],
     "aaEnd": 53,
     "em": [
      [
       48,
       74
      ],
      [
       78,
       90
      ]
     ],
     "indent": 2,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s08-028",
     "kind": "text",
     "aa": 53,
     "text": "2) der Satz des zureichenden Grundes (principium rationis sufficientis), auf welchem die (logische) Wirklichkeit einer Erkenntniß beruht, daß sie gegründet sei, als Stoff zu assertorischen Urtheilen;",
     "em": [
      [
       38,
       70
      ]
     ],
     "indent": 2
    },
    {
     "id": "jasche-s08-029",
     "kind": "text",
     "aa": 53,
     "text": "3) der Satz des ausschließenden Dritten (principium exclusi medii inter duo contradictoria), worauf sich die (logische) Nothwendigkeit eines Erkenntnisses gründet — daß nothwendig so und nicht anders geurtheilt werden müsse, d.i. daß das Gegentheil falsch sei — für apodiktische Urtheile.",
     "em": [
      [
       41,
       90
      ]
     ],
     "indent": 2
    },
    {
     "id": "jasche-s08-030",
     "kind": "rule",
     "aa": 53,
     "zone": 1
    },
    {
     "id": "jasche-s08-031",
     "kind": "text",
     "aa": 53,
     "text": "Das Gegentheil von der Wahrheit ist die Falschheit, welche, sofern sie für Wahrheit gehalten wird, Irrthum heißt. Ein irriges Urtheil — denn Irrthum sowohl als Wahrheit ist nur im Urtheile — ist also ein solches, welches den Schein der Wahrheit mit der Wahrheit selbst verwechselt.",
     "zone": 1
    },
    {
     "id": "jasche-s08-032",
     "kind": "text",
     "aa": 53,
     "text": "Wie Wahrheit möglich sei, das ist leicht einzusehen, da hier der Verstand nach seinen wesentlichen Gesetzen handelt.",
     "zone": 1
    },
    {
     "id": "jasche-s08-033",
     "kind": "text",
     "aa": 53,
     "text": "Wie aber Irrthum in formaler Bedeutung des Worts, d.h. wie die verstandeswidrige Form des Denkens möglich sei, das ist schwer zu begreifen, so wie es überhaupt nicht zu begreifen ist, wie irgend eine Kraft von ihren eigenen wesentlichen Gesetzen abweichen solle. Im Verstande selbst und dessen wesentlichen Gesetzen können wir also den Grund der Irrthümer nicht suchen, so wenig als in den Schranken des Verstandes, in denen zwar die Ursache der Unwissenheit, keinesweges aber des Irrthumes liegt. Hätten wir nun keine andre Erkenntnißkraft als den Verstand: so würden wir nie irren. Allein es liegt, außer dem Verstande, noch eine andre unentbehrliche Erkenntnißquelle in uns. Das ist die Sinnlichkeit, die uns den Stoff zum Denken giebt und dabei nach andern Gesetzen wirkt als der Verstand. Aus der Sinnlichkeit an und für sich selbst betrachtet kann aber der Irrthum auch nicht entspringen, weil die Sinne gar nicht urtheilen.",
     "zone": 1
    },
    {
     "id": "jasche-s08-034",
     "kind": "text",
     "aa": 53,
     "text": "Der Entstehungsgrund alles Irrthums wird daher einzig und allein in dem unvermerkten Einflusse der Sinnlichkeit auf den Verstand, oder genauer zu reden, auf das Urtheil, gesucht werden müssen. Dieser Einfluß nämlich macht, daß wir im Urtheilen bloß subjective Gründe für objective halten und folglich den bloßen Schein der Wahrheit mit der Wahrheit selbst verwechseln. Denn darin besteht eben das Wesen des Scheins, der um deswillen als ein Grund anzusehen ist, eine falsche Erkenntniß für wahr zu halten.",
     "pages": [
      {
       "p": 54,
       "i": 193
      }
     ],
     "aaEnd": 54,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s08-035",
     "kind": "text",
     "aa": 54,
     "text": "Was den Irrthum möglich macht, ist also der Schein, nach welchem im Urtheile das bloß Subjective mit dem Objectiven verwechselt wird.",
     "zone": 1
    },
    {
     "id": "jasche-s08-036",
     "kind": "text",
     "aa": 54,
     "text": "In gewissem Sinne kann man wohl den Verstand auch zum Urheber der Irrthümer machen, sofern er nämlich aus Mangel an erforderlicher Aufmerksamkeit auf jenen Einfluß der Sinnlichkeit sich durch den hieraus entsprungenen Schein verleiten läßt, bloß subjective Bestimmungsgründe des Urtheils für objective zu halten, oder das, was nur nach Gesetzen der Sinnlichkeit wahr ist, für wahr nach seinen eigenen Gesetzen gelten zu lassen.",
     "zone": 1
    },
    {
     "id": "jasche-s08-037",
     "kind": "text",
     "aa": 54,
     "text": "Nur die Schuld der Unwissenheit liegt demnach in den Schranken des Verstandes, die Schuld des Irrthums haben wir uns selbst beizumessen. Die Natur hat uns zwar viele Kenntnisse versagt, sie läßt uns über so Manches in einer unvermeidlichen Unwissenheit, aber den Irrthum verursacht sie doch nicht. Zu diesem verleitet uns unser eigener Hang zu urtheilen und zu entscheiden, auch da, wo wir wegen unsrer Begrenztheit zu urtheilen und zu entscheiden nicht vermögend sind.",
     "zone": 1
    },
    {
     "id": "jasche-s08-038",
     "kind": "rule",
     "aa": 54,
     "zone": 2
    },
    {
     "id": "jasche-s08-039",
     "kind": "text",
     "aa": 54,
     "text": "Aller Irrthum, in welchen der menschliche Verstand gerathen kann, ist aber nur partial, und in jedem irrigen Urtheile muß immer etwas Wahres liegen. Denn ein totaler Irrthum wäre ein gänzlicher Widerstreit wider die Gesetze des Verstandes und der Vernunft. Wie könnte er, als solcher, auf irgend eine Weise aus dem Verstande kommen, und, sofern er doch ein Urtheil ist, für ein Product des Verstandes gehalten werden!",
     "zone": 2
    },
    {
     "id": "jasche-s08-040",
     "kind": "text",
     "aa": 54,
     "text": "In Rücksicht auf das Wahre und Irrige in unserer Erkenntniß unterscheiden wir ein genaues von einem rohen Erkenntnisse.",
     "zone": 2
    },
    {
     "id": "jasche-s08-041",
     "kind": "text",
     "aa": 54,
     "text": "Genau ist das Erkenntniß, wenn es seinem Object angemessen ist, oder wenn in Ansehung seines Objects nicht der mindeste Irrthum stattfindet, roh ist es, wenn Irrthümer darin sein können, ohne eben der Absicht hinderlich zu sein.",
     "zone": 2
    },
    {
     "id": "jasche-s08-042",
     "kind": "text",
     "aa": 55,
     "text": "Dieser Unterschied betrifft die weitere oder engere Bestimmtheit unsers Erkenntnisses (cognitio late vel stricte determinata). Anfangs ist es zuweilen nöthig, ein Erkenntniß in einem weitern Umfange zu bestimmen (late determinare), besonders in historischen Dingen. In Vernunfterkenntnissen aber muß alles genau (stricte) bestimmt sein. Bei der laten Determination sagt man: ein Erkenntniß sei praeter propter determinirt. Es kommt immer auf die Absicht eines Erkenntnisses an, ob es roh oder genau bestimmt sein soll. Die late Determination läßt noch immer einen Spielraum für den Irrthum übrig, der aber doch seine bestimmten Grenzen haben kann. Irrthum findet besonders da statt, wo eine late Determination für eine stricte genommen wird, z.B. in Sachen der Moralität, wo alles stricte determinirt sein muß. Die das nicht thun, werden von den Engländern Latitudinarier genannt.",
     "pages": [
      {
       "p": 55,
       "i": 0
      }
     ],
     "aaEnd": 55,
     "em": [
      [
       87,
       124
      ],
      [
       213,
       229
      ],
      [
       313,
       320
      ],
      [
       394,
       409
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s08-043",
     "kind": "text",
     "aa": 55,
     "text": "Von der Genauigkeit, als einer objectiven Vollkommenheit des Erkenntnisses — da das Erkenntniß hier völlig mit dem Object congruirt — kann man noch die Subtilität als eine subjective Vollkommenheit desselben unterscheiden.",
     "zone": 2
    },
    {
     "id": "jasche-s08-044",
     "kind": "text",
     "aa": 55,
     "text": "Ein Erkenntniß von einer Sache ist subtil, wenn man darin dasjenige entdeckt, was Anderer Aufmerksamkeit zu entgehen pflegt. Es erfordert also einen höhern Grad von Aufmerksamkeit und einen größern Aufwand von Verstandeskraft.",
     "zone": 2
    },
    {
     "id": "jasche-s08-045",
     "kind": "text",
     "aa": 55,
     "text": "Viele tadeln alle Subtilität, weil sie sie nicht erreichen können. Aber sie macht an sich immer dem Verstande Ehre und ist sogar verdienstlich und nothwendig, sofern sie auf einen der Beobachtung würdigen Gegenstand angewandt wird. Wenn man aber mit einer geringern Aufmerksamkeit und Anstrengung des Verstandes denselben Zweck hätte erreichen können, und man verwendet doch mehr darauf: so macht man unnützen Aufwand und verfällt in Subtilitäten, die zwar schwer sind, aber zu nichts nützen (nugae difficiles).",
     "em": [
      [
       493,
       509
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s08-046",
     "kind": "text",
     "aa": 55,
     "text": "So wie dem Genauen das Rohe, so ist dem Subtilen das Grobe entgegengesetzt.",
     "zone": 2
    },
    {
     "id": "jasche-s08-047",
     "kind": "rule",
     "aa": 55,
     "zone": 3
    },
    {
     "id": "jasche-s08-048",
     "kind": "text",
     "aa": 55,
     "text": "Aus der Natur des Irrthums, in dessen Begriffe, wie wir bemerkten, außer der Falschheit, noch der Schein der Wahrheit als ein wesentliches Merkmal enthalten ist, ergiebt sich für die Wahrheit unsers Erkenntnisses folgende wichtige Regel:",
     "zone": 3
    },
    {
     "id": "jasche-s08-049",
     "kind": "text",
     "aa": 56,
     "text": "Um Irrthümer zu vermeiden — und unvermeidlich ist wenigstens absolut oder schlechthin kein Irrthum, ob er es gleich beziehungsweise sein kann für die Fälle, da es, selbst auf die Gefahr zu irren, unvermeidlich für uns ist, zu urtheilen — also um Irrthümer zu vermeiden, muß man die Quelle derselben, den Schein, zu entdecken und zu erklären suchen. Das haben aber die wenigsten Philosophen gethan. Sie haben nur die Irrthümer selbst zu widerlegen gesucht, ohne den Schein anzugeben, woraus sie entspringen. Diese Aufdeckung und Auflösung des Scheines ist aber ein weit größeres Verdienst um die Wahrheit als die directe Widerlegung der Irrthümer selbst, wodurch man die Quelle derselben nicht verstopfen und es nicht verhüten kann, daß nicht der nämliche Schein, weil man ihn nicht kennt, in andern Fällen wiederum zu Irrthümern verleite. Denn sind wir auch überzeugt worden, daß wir geirrt haben: so bleiben uns doch, im Fall der Schein selbst, der unserm Irrthume zum Grunde liegt, nicht gehoben ist, noch Scrupel übrig, so wenig wir auch zu deren Rechtfertigung vorbringen können.",
     "pages": [
      {
       "p": 56,
       "i": 0
      }
     ],
     "aaEnd": 56,
     "zone": 3
    },
    {
     "id": "jasche-s08-050",
     "kind": "text",
     "aa": 56,
     "text": "Durch Erklärung des Scheins läßt man überdies auch dem Irrenden eine Art von Billigkeit widerfahren. Denn es wird niemand zugeben, daß er ohne irgend einen Schein der Wahrheit geirrt habe, der vielleicht auch einen Scharfsinnigern hätte täuschen können, weil es hierbei auf subjective Gründe ankommt.",
     "zone": 3
    },
    {
     "id": "jasche-s08-051",
     "kind": "text",
     "aa": 56,
     "text": "Ein Irrthum, wo der Schein auch dem gemeinen Verstande (sensus communis) offenbar ist, heißt eine Abgeschmacktheit oder Ungereimtheit. Der Vorwurf der Absurdität ist immer ein persönlicher Tadel, den man vermeiden muß, insbesondre bei Widerlegung der Irrthümer.",
     "em": [
      [
       56,
       71
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s08-052",
     "kind": "text",
     "aa": 56,
     "text": "Denn demjenigen, welcher eine Ungereimtheit behauptet, ist selbst doch der Schein, der dieser offenbaren Falschheit zum Grunde liegt, nicht offenbar. Man muß ihm diesen Schein erst offenbar machen. Beharrt er auch alsdann noch dabei, so ist er freilich abgeschmackt; aber dann ist auch weiter nichts mehr mit ihm anzufangen. Er hat sich dadurch aller weitern Zurechtweisung und Widerlegung eben so unfähig als unwürdig gemacht. Denn man kann eigentlich Keinem beweisen, daß er ungereimt sei; hierbei wäre alles Vernünfteln vergeblich. Wenn man die Ungereimtheit beweist, so redet man nicht mehr mit dem Irrenden, sondern mit dem Vernünftigen. Aber da ist die Aufdeckung der Ungereimtheit (deductio ad absurdum) nicht nöthig.",
     "em": [
      [
       689,
       709
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s08-053",
     "kind": "text",
     "aa": 56,
     "text": "Einen abgeschmackten Irrthum kann man auch einen solchen nennen, dem nichts, auch nicht einmal der Schein zur Entschuldigung dient; so wie ein grober Irrthum ein Irrthum ist, welcher Unwissenheit im gemeinen Erkenntnisse oder Verstoß wider gemeine Aufmerksamkeit beweist.",
     "pages": [
      {
       "p": 57,
       "i": 65
      }
     ],
     "aaEnd": 57,
     "zone": 3,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s08-054",
     "kind": "text",
     "aa": 57,
     "text": "Irrthum in Principien ist größer als in ihrer Anwendung.",
     "zone": 3
    },
    {
     "id": "jasche-s08-055",
     "kind": "rule",
     "aa": 57,
     "zone": 4
    },
    {
     "id": "jasche-s08-056",
     "kind": "text",
     "aa": 57,
     "text": "Ein äußeres Merkmal oder ein äußerer Probirstein der Wahrheit ist die Vergleichung unserer eigenen mit Anderer Urtheilen, weil das Subjective nicht allen Andern auf gleiche Art beiwohnen wird, mithin der Schein dadurch erklärt werden kann. Die Unvereinbarkeit Anderer Urtheile mit den unsrigen ist daher als ein äußeres Merkmal des Irrthums und als ein Wink anzusehen, unser Verfahren im Urtheilen zu untersuchen, aber darum nicht sofort zu verwerfen. Denn man kann doch vielleicht recht haben in der Sache und nur unrecht in der Manier, d.i. dem Vortrage.",
     "zone": 4
    },
    {
     "id": "jasche-s08-057",
     "kind": "text",
     "aa": 57,
     "text": "Der gemeine Menschenverstand (sensus communis) ist auch an sich ein Probirstein, um die Fehler des künstlichen Verstandesgebrauchs zu entdecken. Das heißt: sich im Denken oder im speculativen Vernunftgebrauche durch den gemeinen Verstand orientiren, wenn man den gemeinen Verstand als Probe zur Beurtheilung der Richtigkeit des speculativen gebraucht.",
     "em": [
      [
       30,
       45
      ]
     ],
     "zone": 4
    },
    {
     "id": "jasche-s08-058",
     "kind": "rule",
     "aa": 57,
     "zone": 5
    },
    {
     "id": "jasche-s08-059",
     "kind": "text",
     "aa": 57,
     "text": "Allgemeine Regeln und Bedingungen der Vermeidung des Irrthums überhaupt sind: 1) selbst zu denken, 2) sich in der Stelle eines Andern zu denken, und 3) jederzeit mit sich selbst einstimmig zu denken. Die Maxime des Selbstdenkens kann man die aufgeklärte; die Maxime sich in Anderer Gesichtspunkte im Denken zu versetzen, die erweiterte; und die Maxime, jederzeit mit sich selbst einstimmig zu denken, die consequente oder bündige Denkart nennen.",
     "zone": 5
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s09",
   "part": "Einleitung",
   "title": "VIII. C) Logische Vollkommenheit des Erkenntnisses der Qualität nach.",
   "heading": "[Einleitung.] / VIII. C) Logische Vollkommenheit des Erkenntnisses der Qualität nach.",
   "blocks": [
    {
     "id": "jasche-s09-001",
     "kind": "text",
     "aa": 58,
     "text": "— Klarheit. — Begriff eines Merkmals überhaupt. — Verschiedene Arten der Merkmale. — Bestimmung des logischen Wesens einer Sache. — Unterschied desselben vom Realwesen. — Deutlichkeit, ein höherer Grad der Klarheit. — Ästhetische und logische Deutlichkeit. — Unterschied zwischen analytischer und synthetischer Deutlichkeit.",
     "align": "center"
    },
    {
     "id": "jasche-s09-002",
     "kind": "text",
     "aa": 58,
     "text": "Das menschliche Erkennen ist von Seiten des Verstandes discursiv, d.h. es geschieht durch Vorstellungen, die das, was mehreren Dingen gemein ist, zum Erkenntnißgrunde machen, mithin durch Merkmale als solche. Wir erkennen also Dinge nur durch Merkmale und das heißt eben Erkennen, welches von Kennen herkommt."
    },
    {
     "id": "jasche-s09-003",
     "kind": "text",
     "aa": 58,
     "text": "Ein Merkmal ist dasjenige an einem Dinge, was einen Theil der Erkenntniß desselben ausmacht, oder — welches dasselbe ist — eine Partialvorstellung, sofern sie als Erkenntnißgrund der ganzen Vorstellung betrachtet wird. — Alle unsre Begriffe sind demnach Merkmale und alles Denken ist nichts anders als ein Vorstellen durch Merkmale."
    },
    {
     "id": "jasche-s09-004",
     "kind": "text",
     "aa": 58,
     "text": "Ein jedes Merkmal läßt sich von zwei Seiten betrachten:"
    },
    {
     "id": "jasche-s09-005",
     "kind": "text",
     "aa": 58,
     "text": "Erstlich, als Vorstellung an sich selbst;"
    },
    {
     "id": "jasche-s09-006",
     "kind": "text",
     "aa": 58,
     "text": "Zweitens, als gehörig wie ein Theilbegriff zu der ganzen Vorstellung eines Dinges und dadurch als Erkenntnißgrund dieses Dinges selbst."
    },
    {
     "id": "jasche-s09-007",
     "kind": "text",
     "aa": 58,
     "text": "Alle Merkmale, als Erkenntnißgründe betrachtet, sind von zwiefachem Gebrauche, entweder einem innerlichen oder einem äußerlichen. Der innere Gebrauch besteht in der Ableitung, um durch Merkmale, als ihre Erkenntnißgründe, die Sache selbst zu erkennen. Der äußere Gebrauch besteht in der Vergleichung, sofern wir durch Merkmale ein Ding mit andern nach den Regeln der Identität oder Diversität vergleichen können."
    },
    {
     "id": "jasche-s09-008",
     "kind": "rule",
     "aa": 58,
     "zone": 1
    },
    {
     "id": "jasche-s09-009",
     "kind": "text",
     "aa": 58,
     "text": "Es giebt unter den Merkmalen mancherlei specifische Unterschiede, auf die sich folgende Classification derselben gründet.",
     "zone": 1
    },
    {
     "id": "jasche-s09-010",
     "kind": "text",
     "aa": 59,
     "text": "1) Analytische oder synthetische Merkmale. Jene sind Theilbegriffe meines wirklichen Begriffs (die ich darin schon denke), diese dagegen sind Theilbegriffe des bloß möglichen ganzen Begriffs, (der also durch eine Synthesis mehrerer Theile erst werden soll). Erstere sind alle Vernunftbegriffe, die letztern können Erfahrungsbegriffe sein.",
     "pages": [
      {
       "p": 59,
       "i": 0
      }
     ],
     "aaEnd": 59,
     "zone": 1
    },
    {
     "id": "jasche-s09-011",
     "kind": "text",
     "aa": 59,
     "text": "2) Coordinirte oder subordinirte. Diese Eintheilung der Merkmale betrifft ihre Verknüpfung nach oder unter einander.",
     "zone": 1
    },
    {
     "id": "jasche-s09-012",
     "kind": "text",
     "aa": 59,
     "text": "Coordinirt sind die Merkmale, sofern ein jedes derselben als ein unmittelbares Merkmal der Sache vorgestellt wird, und subordinirt, sofern ein Merkmal nur vermittelst des andern an dem Dinge vorgestellt wird. Die Verbindung coordinirter Merkmale zum Ganzen des Begriffs heißt ein Aggregat, die Verbindung subordinirter Merkmale eine Reihe. Jene, die Aggregation coordinirter Merkmale macht die Totalität des Begriffs aus, die aber in Ansehung synthetischer empirischer Begriffe nie vollendet sein kann, sondern einer geraden Linie ohne Grenzen gleicht.",
     "zone": 1
    },
    {
     "id": "jasche-s09-013",
     "kind": "text",
     "aa": 59,
     "text": "Die Reihe subordinirter Merkmale stößt a parte ante, oder auf Seiten der Gründe, an unauflösliche Begriffe, die sich ihrer Einfachheit wegen nicht weiter zergliedern lassen, a parte post, oder in Ansehung der Folgen hingegen, ist sie unendlich, weil wir zwar ein höchstes genus, aber keine unterste species haben.",
     "em": [
      [
       39,
       52
      ],
      [
       174,
       187
      ],
      [
       272,
       277
      ],
      [
       299,
       306
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s09-014",
     "kind": "text",
     "aa": 59,
     "text": "Mit der Synthesis jedes neuen Begriffs in der Aggregation coordinirter Merkmale wächst die extensive oder ausgebreitete Deutlichkeit, so wie mit der weitern Analysis der Begriffe in der Reihe subordinirter Merkmale die intensive oder tiefe Deutlichkeit. Diese letztere Art der Deutlichkeit, da sie nothwendig zur Gründlichkeit und Bündigkeit des Erkenntnisses dient, ist darum hauptsächlich Sache der Philosophie und wird insbesondre in metaphysischen Untersuchungen am höchsten getrieben.",
     "zone": 1
    },
    {
     "id": "jasche-s09-015",
     "kind": "text",
     "aa": 59,
     "text": "3) Bejahende oder verneinende Merkmale. Durch jene erkennen wir, was das Ding ist, durch diese, was es nicht ist.",
     "zone": 1
    },
    {
     "id": "jasche-s09-016",
     "kind": "text",
     "aa": 59,
     "text": "Die verneinenden Merkmale dienen dazu, uns von Irrthümern abzuhalten. Daher sind sie unnöthig, da wo es unmöglich ist zu irren, und nur nöthig und von Wichtigkeit in denjenigen Fällen, wo sie uns von einem wichtigen Irrthume abhalten, in den wir leicht gerathen können. So sind z.B. in Ansehung des Begriffs von einem Wesen, wie Gott, die verneinenden Merkmale sehr nöthig und wichtig.",
     "zone": 1
    },
    {
     "id": "jasche-s09-017",
     "kind": "text",
     "aa": 60,
     "text": "Durch bejahende Merkmale wollen wir also etwas verstehen, durch verneinende — in die man alle Merkmale insgesammt verwandeln kann — nur nicht mißverstehen oder darin nur nicht irren, sollten wir auch nichts davon kennen lernen.",
     "pages": [
      {
       "p": 60,
       "i": 0
      }
     ],
     "aaEnd": 60,
     "zone": 1
    },
    {
     "id": "jasche-s09-018",
     "kind": "text",
     "aa": 60,
     "text": "4) Wichtige und fruchtbare oder leere und unwichtige Merkmale.",
     "zone": 1
    },
    {
     "id": "jasche-s09-019",
     "kind": "text",
     "aa": 60,
     "text": "Ein Merkmal ist wichtig und fruchtbar, wenn es ein Erkenntnißgrund von großen und zahlreichen Folgen ist, theils in Ansehung seines innern Gebrauchs, des Gebrauchs in der Ableitung, sofern es hinreichend ist, um dadurch sehr viel an der Sache selbst zu erkennen, theils in Rücksicht auf seinen äußern Gebrauch, den Gebrauch in der Vergleichung, sofern es dazu dient, sowohl die Ähnlichkeit eines Dinges mit vielen andern als auch die Verschiedenheit desselben von vielen andern zu erkennen.",
     "zone": 1
    },
    {
     "id": "jasche-s09-020",
     "kind": "text",
     "aa": 60,
     "text": "Übrigens müssen wir hier die logische Wichtigkeit und Fruchtbarkeit von der praktischen, der Nützlichkeit und Brauchbarkeit unterscheiden.",
     "zone": 1
    },
    {
     "id": "jasche-s09-021",
     "kind": "text",
     "aa": 60,
     "text": "5) Zureichende und nothwendige oder unzureichende und zufällige Merkmale.",
     "zone": 1
    },
    {
     "id": "jasche-s09-022",
     "kind": "text",
     "aa": 60,
     "text": "Ein Merkmal ist zureichend, sofern es hinreicht, das Ding jederzeit von allen andern zu unterscheiden; widrigenfalls ist es unzureichend, wie z.B. das Merkmal des Bellens vom Hunde. Die Hinlänglichkeit der Merkmale ist aber so gut wie ihre Wichtigkeit nur in einem relativen Sinne zu bestimmen, in Beziehung auf die Zwecke, welche durch ein Erkenntniß beabsichtigt werden.",
     "zone": 1
    },
    {
     "id": "jasche-s09-023",
     "kind": "text",
     "aa": 60,
     "text": "Nothwendige Merkmale sind endlich diejenigen, die jederzeit bei der vorgestellten Sache müssen anzutreffen sein. Dergleichen Merkmale heißen auch wesentliche und sind den außerwesentlichen und zufälligen entgegengesetzt, die von dem Begriffe des Dinges getrennt werden können.",
     "zone": 1
    },
    {
     "id": "jasche-s09-024",
     "kind": "text",
     "aa": 60,
     "text": "Unter den nothwendigen Merkmalen giebt es aber noch einen Unterschied.",
     "zone": 1
    },
    {
     "id": "jasche-s09-025",
     "kind": "text",
     "aa": 60,
     "text": "Einige derselben kommen dem Dinge zu als Gründe andrer Merkmale von Einer und derselben Sache, andre dagegen nur als Folgen von andern Merkmalen.",
     "zone": 1
    },
    {
     "id": "jasche-s09-026",
     "kind": "text",
     "aa": 60,
     "text": "Die erstern sind primitive und constitutive Merkmale (constitutiva, essentialia in sensu strictissimo), die andern heißen Attribute (consectaria, rationata) und gehören zwar auch zum Wesen des Dinges, aber nur, sofern sie aus jenen wesentlichen Stücken desselben erst abgeleitet werden müssen; wie z.B. die drei Winkel im Begriffe eines Triangels aus den drei Seiten.",
     "pages": [
      {
       "p": 61,
       "i": 132
      }
     ],
     "aaEnd": 61,
     "em": [
      [
       54,
       101
      ],
      [
       133,
       155
      ]
     ],
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s09-027",
     "kind": "text",
     "aa": 61,
     "text": "Die außerwesentlichen Merkmale sind auch wieder von zwiefacher Art, sie betreffen entweder innere Bestimmungen eines Dinges (modi) oder dessen äußere Verhältnisse (relationes). So bezeichnet z.B. das Merkmal der Gelehrsamkeit eine innere Bestimmung des Menschen, Herr oder Knecht sein, nur ein äußeres Verhältniß desselben.",
     "em": [
      [
       125,
       129
      ],
      [
       164,
       174
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s09-028",
     "kind": "rule",
     "aa": 61,
     "zone": 2
    },
    {
     "id": "jasche-s09-029",
     "kind": "text",
     "aa": 61,
     "text": "Der Inbegriff aller wesentlichen Stücke eines Dinges oder die Hinlänglichkeit der Merkmale desselben der Coordination oder der Subordination nach, ist das Wesen (complexus notarum primitivarum, interne conceptui dato sufficientium; s. complexus notarum, conceptum aliquem primitive constituentium).",
     "em": [
      [
       162,
       296
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s09-030",
     "kind": "text",
     "aa": 61,
     "text": "Bei dieser Erklärung müssen wir aber hier ganz und gar nicht an das Real- oder Natur-Wesen der Dinge denken, das wir überall nicht einzusehen vermögen. Denn da die Logik von allem Inhalte des Erkenntnisses, folglich auch von der Sache selbst abstrahirt: so kann in dieser Wissenschaft lediglich nur von dem logischen Wesen der Dinge die Rede sein. Und dieses können wir leicht einsehen. Denn dazu gehört weiter nichts als die Erkenntniß aller der Prädicate, in Ansehung deren ein Object durch seinen Begriff bestimmt ist; anstatt daß zum Real-Wesen des Dinges (esse rei) die Erkenntniß derjenigen Prädicate erfordert wird, von denen alles, was zu seinem Dasein gehört, als Bestimmungsgründen, abhängt. Wollen wir z.B. das logische Wesen des Körpers bestimmen: so haben wir gar nicht nöthig die Data hierzu in der Natur aufzusuchen; wir dürfen unsre Reflexion nur auf die Merkmale richten, die als wesentliche Stücke (constitutiva, rationes) den Grundbegriff desselben ursprünglich constituiren. Denn das logische Wesen ist ja selbst nichts anders als der erste Grundbegriff aller nothwendigen Merkmale eines Dinges (esse conceptus).",
     "em": [
      [
       561,
       569
      ],
      [
       917,
       939
      ],
      [
       1116,
       1130
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s09-031",
     "kind": "rule",
     "aa": 61,
     "zone": 3
    },
    {
     "id": "jasche-s09-032",
     "kind": "text",
     "aa": 61,
     "text": "Die erste Stufe der Vollkommenheit unsers Erkenntnisses der Qualität nach ist also die Klarheit desselben. Eine zweite Stufe, oder ein höherer",
     "zone": 3,
     "maybeContinues": true
    },
    {
     "id": "jasche-s09-033",
     "kind": "text",
     "aa": 62,
     "text": "Grad der Klarheit, ist die Deutlichkeit. Diese besteht in der Klarheit der Merkmale.",
     "pages": [
      {
       "p": 62,
       "i": 0
      }
     ],
     "aaEnd": 62,
     "zone": 3
    },
    {
     "id": "jasche-s09-034",
     "kind": "text",
     "aa": 62,
     "text": "Wir müssen hier zuvörderst die logische Deutlichkeit überhaupt von der ästhetischen unterscheiden. Die logische beruht auf der objectiven, die ästhetische auf der subjectiven Klarheit der Merkmale. Jene ist eine Klarheit durch Begriffe, diese eine Klarheit durch Anschauung. Die letztere Art der Deutlichkeit besteht also in einer bloßen Lebhaftigkeit und Verständlichkeit, d.h. in einer bloßen Klarheit durch Beispiele in concreto, (denn verständlich kann vieles sein, was doch nicht deutlich ist, und umgekehrt kann Vieles deutlich sein, was doch schwer zu verstehen ist, weil es bis auf entfernte Merkmale zurückgeht, deren Verknüpfung mit der Anschauung nur durch eine lange Reihe möglich ist).",
     "em": [
      [
       420,
       431
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s09-035",
     "kind": "text",
     "aa": 62,
     "text": "Die objective Deutlichkeit verursacht öfters subjective Dunkelheit und umgekehrt. Daher ist die logische Deutlichkeit nicht selten nur zum Nachtheil der ästhetischen möglich und umgekehrt wird oft die ästhetische Deutlichkeit durch Beispiele und Gleichnisse, die nicht genau passen, sondern nur nach einer Analogie genommen werden, der logischen Deutlichkeit schädlich. Überdies sind auch Beispiele überhaupt keine Merkmale und gehören nicht als Theile zum Begriffe, sondern als Anschauungen nur zum Gebrauche des Begriffs. Eine Deutlichkeit durch Beispiele, die bloße Verständlichkeit, ist daher von ganz anderer Art als die Deutlichkeit durch Begriffe als Merkmale. In der Verbindung beider, der ästhetischen oder populären mit der scholastischen oder logischen Deutlichkeit, besteht die Helligkeit. Denn unter einem hellen Kopfe denkt man sich das Talent einer lichtvollen, der Fassungskraft des gemeinen Verstandes angemessenen Darstellung abstracter und gründlicher Erkenntnisse.",
     "zone": 3
    },
    {
     "id": "jasche-s09-036",
     "kind": "text",
     "aa": 62,
     "text": "Was nun hiernächst insbesondre die logische Deutlichkeit betrifft: so ist sie eine vollständige Deutlichkeit zu nennen, sofern alle Merkmale, die zusammen genommen den ganzen Begriff ausmachen, bis zur Klarheit gekommen sind. Ein vollständig oder complet deutlicher Begriff kann es nun hinwiederum sein, entweder in Ansehung der Totalität seiner coordinirten oder in Rücksicht auf die Totalität seiner subordinirten Merkmale. In der totalen Klarheit der coordinirten Merkmale besteht die extensiv vollständige oder zureichende Deutlichkeit eines Begriffs, die auch die Ausführlichkeit heißt. Die totale Klarheit der subordinirten Merkmale macht die intensiv vollständige Deutlichkeit aus, die Profundität.",
     "zone": 3
    },
    {
     "id": "jasche-s09-037",
     "kind": "text",
     "aa": 63,
     "text": "Die erstere Art der logischen Deutlichkeit kann auch die äußere Vollständigkeit (completudo externa), so wie die andre, die innere Vollständigkeit (completudo interna) der Klarheit der Merkmale genannt werden. Die letztere läßt sich nur von reinen Vernunftbegriffen und von willkürlichen Begriffen, nicht aber von empirischen erlangen.",
     "pages": [
      {
       "p": 63,
       "i": 0
      }
     ],
     "aaEnd": 63,
     "em": [
      [
       81,
       99
      ],
      [
       148,
       166
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s09-038",
     "kind": "text",
     "aa": 63,
     "text": "Die extensive Größe der Deutlichkeit, sofern sie nicht abundant ist, heißt Präcision (Abgemessenheit). Die Ausführlichkeit (completudo) und Abgemessenheit (praecisio) zusammen machen die Angemessenheit aus (cognitionem, quae rem adaequat); und in der intensiv adäquaten Erkenntniß, in der Profundität, verbunden mit der extensiv adäquaten in der Ausführlichkeit und Präcision, besteht (der Qualität nach) die vollendete Vollkommenheit eines Erkenntnisses (consummata cognitionis perfectio).",
     "em": [
      [
       124,
       134
      ],
      [
       156,
       165
      ],
      [
       207,
       237
      ],
      [
       456,
       488
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s09-039",
     "kind": "rule",
     "aa": 63,
     "zone": 4
    },
    {
     "id": "jasche-s09-040",
     "kind": "text",
     "aa": 63,
     "text": "Da es, wie wir bemerkt haben, das Geschäft der Logik ist, klare Begriffe deutlich zu machen, so frägt es sich nun: Auf welche Art sie dieselben deutlich mache?",
     "zone": 4
    },
    {
     "id": "jasche-s09-041",
     "kind": "text",
     "aa": 63,
     "text": "Die Logiker aus der Wolffischen Schule setzen alle Deutlichmachung der Erkenntnisse in die bloße Zergliederung derselben. Allein nicht alle Deutlichkeit beruht auf der Analysis eines gegebenen Begriffs. Dadurch entsteht sie nur in Ansehung derjenigen Merkmale, die wir schon in dem Begriffe dachten, keinesweges aber in Rücksicht auf die Merkmale, die zum Begriffe erst hinzukommen, als Theile des ganzen möglichen Begriffs.",
     "zone": 4
    },
    {
     "id": "jasche-s09-042",
     "kind": "text",
     "aa": 63,
     "text": "Diejenige Art der Deutlichkeit, die nicht durch Analysis, sondern durch Synthesis der Merkmale entspringt, ist die synthetische Deutlichkeit. Und es ist also ein wesentlicher Unterschied zwischen den beiden Sätzen: Einen deutlichen Begriff machen und einen Begriff deutlich machen.",
     "zone": 4
    },
    {
     "id": "jasche-s09-043",
     "kind": "text",
     "aa": 63,
     "text": "Denn wenn ich einen deutlichen Begriff mache: so fange ich von den Theilen an und gehe von diesen zum Ganzen fort. Es sind hier noch keine Merkmale vorhanden; ich erhalte dieselben erst durch die Synthesis. Aus diesem synthetischen Verfahren geht also die synthetische Deutlichkeit hervor, welche meinen Begriff durch das, was über denselben in der (reinen oder empirischen) Anschauung als Merkmal hinzukommt, dem Inhalte nach wirklich erweitert. — Dieses synthetischen Verfahrens in Deutlichmachung der Begriffe bedient sich der Mathematiker und auch der Naturphilosoph. Denn alle Deutlichkeit des eigentlich mathematischen so wie alles Erfahrungserkenntnisses beruht auf einer solchen Erweiterung desselben durch Synthesis der Merkmale.",
     "pages": [
      {
       "p": 64,
       "i": 500
      }
     ],
     "aaEnd": 64,
     "zone": 4,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s09-044",
     "kind": "text",
     "aa": 64,
     "text": "Wenn ich aber einen Begriff deutlich mache: so wächst durch diese bloße Zergliederung mein Erkenntniß ganz und gar nicht dem Inhalte nach. Dieser bleibt derselbe, nur die Form wird verändert, indem ich das, was in dem gegebenen Begriffe schon lag, nur besser unterscheiden oder mit klärerem Bewußtsein erkennen lerne. So wie durch die bloße Illumination einer Karte zu ihr selbst nichts weiter hinzukommt: so wird auch durch die bloße Aufhellung eines gegebenen Begriffs vermittelst der Analysis seiner Merkmale dieser Begriff selbst nicht im mindesten vermehrt.",
     "zone": 4
    },
    {
     "id": "jasche-s09-045",
     "kind": "text",
     "aa": 64,
     "text": "Zur Synthesis gehört die Deutlichmachung der Objecte, zur Analysis die Deutlichmachung der Begriffe. Hier geht das Ganze den Theilen, dort gehen die Theile dem Ganzen vorher. Der Philosoph macht nur gegebene Begriffe deutlich. Zuweilen verfährt man synthetisch, auch wenn der Begriff, den man auf diese Art deutlich machen will, schon gegeben ist. Dieses findet oft statt bei Erfahrungssätzen, wofern man mit den in einem gegebenen Begriffe schon gedachten Merkmalen noch nicht zufrieden ist.",
     "zone": 4
    },
    {
     "id": "jasche-s09-046",
     "kind": "text",
     "aa": 64,
     "text": "Das analytische Verfahren, Deutlichkeit zu erzeugen, womit sich die Logik allein beschäftigen kann, ist das erste und hauptsächlichste Erforderniß bei der Deutlichmachung unseres Erkenntnisses. Denn je deutlicher unser Erkenntniß von einer Sache ist: um so stärker und wirksamer kann es auch sein. Nur muß die Analysis nicht so weit gehen, daß darüber der Gegenstand selbst am Ende verschwindet.",
     "zone": 4
    },
    {
     "id": "jasche-s09-047",
     "kind": "text",
     "aa": 64,
     "text": "Wären wir uns alles dessen bewußt, was wir wissen, so müßten wir über die große Menge unserer Erkenntnisse erstaunen.",
     "zone": 4
    },
    {
     "id": "jasche-s09-048",
     "kind": "rule",
     "aa": 64,
     "zone": 5
    },
    {
     "id": "jasche-s09-049",
     "kind": "text",
     "aa": 64,
     "text": "In Ansehung des objectiven Gehaltes unserer Erkenntniß überhaupt lassen sich folgende Grade denken, nach welchen dieselbe in dieser Rücksicht kann gesteigert werden:",
     "zone": 5
    },
    {
     "id": "jasche-s09-050",
     "kind": "text",
     "aa": 64,
     "text": "Der erste Grad der Erkenntniß ist: sich etwas vorstellen;",
     "zone": 5
    },
    {
     "id": "jasche-s09-051",
     "kind": "text",
     "aa": 64,
     "text": "Der zweite: sich mit Bewußtsein etwas vorstellen oder wahrnehmen (percipere);",
     "em": [
      [
       66,
       75
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s09-052",
     "kind": "text",
     "aa": 65,
     "text": "Der dritte: etwas kennen (noscere) oder sich etwas in der Vergleichung mit andern Dingen vorstellen sowohl der Einerleiheit als der Verschiedenheit nach;",
     "pages": [
      {
       "p": 65,
       "i": 0
      }
     ],
     "aaEnd": 65,
     "em": [
      [
       26,
       33
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s09-053",
     "kind": "text",
     "aa": 65,
     "text": "Der vierte: mit Bewußtsein etwas kennen, d.h. erkennen (cognoscere). Die Thiere kennen auch Gegenstände, aber sie erkennen sie nicht.",
     "em": [
      [
       56,
       66
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s09-054",
     "kind": "text",
     "aa": 65,
     "text": "Der fünfte: etwas verstehen (intelligere), d.h. durch den Verstand vermöge der Begriffe erkennen oder concipiren. Dieses ist vom Begreifen sehr unterschieden. Concipiren kann man Vieles, obgleich man es nicht begreifen kann, z.B. ein perpetuum mobile, dessen Unmöglichkeit in der Mechanik gezeigt wird.",
     "em": [
      [
       29,
       40
      ],
      [
       234,
       251
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s09-055",
     "kind": "text",
     "aa": 65,
     "text": "Der sechste: etwas durch die Vernunft erkennen oder einsehen (perspicere). Bis dahin gelangen wir in wenigen Dingen und unsre Erkenntnisse werden der Zahl nach immer geringer, je mehr wir sie dem Gehalte nach vervollkommnen wollen.",
     "em": [
      [
       62,
       72
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s09-056",
     "kind": "text",
     "aa": 65,
     "text": "Der siebente endlich: etwas begreifen (comprehendere), d.h. in dem Grade durch die Vernunft oder a priori erkennen, als zu unsrer Absicht hinreichend ist. Denn alles unser Begreifen ist nur relativ, d.h. zu einer gewissen Absicht hinreichend, schlechthin begreifen wir gar nichts. Nichts kann mehr begriffen werden, als was der Mathematiker demonstrirt, z.B. daß alle Linien im Cirkel proportional sind. Und doch begreift er nicht: wie es zugehe, daß eine so einfache Figur diese Eigenschaften habe. Das Feld des Verstehens oder des Verstandes ist daher überhaupt weit größer als das Feld des Begreifens oder der Vernunft.",
     "em": [
      [
       39,
       52
      ],
      [
       97,
       105
      ]
     ],
     "zone": 5
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s10",
   "part": "Einleitung",
   "title": "IX. D) Logische Vollkommenheit des Erkenntnisses der Modalität nach.",
   "heading": "[Einleitung.] / IX. D) Logische Vollkommenheit des Erkenntnisses der Modalität nach.",
   "blocks": [
    {
     "id": "jasche-s10-001",
     "kind": "text",
     "aa": 65,
     "text": "Gewißheit. — Begriff des Fürwahrhaltens überhaupt. — Modi des Fürwahrhaltens: Meinen, Glauben, Wissen. — Überzeugung und Überredung. — Zurückhalten und Aufschieben eines Urtheils. — Vorläufige Urtheile. — Vorurtheile, deren Quellen und Hauptarten.",
     "align": "center"
    },
    {
     "id": "jasche-s10-002",
     "kind": "text",
     "aa": 65,
     "text": "Wahrheit ist objective Eigenschaft der Erkenntniß, das Urtheil, wodurch etwas als wahr vorgestellt wird; die Beziehung auf einen Verstand und also auf ein besonderes Subject ist subjectiv das Fürwahrhalten.",
     "pages": [
      {
       "p": 66,
       "i": 129
      }
     ],
     "aaEnd": 66,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-003",
     "kind": "text",
     "aa": 66,
     "text": "Das Fürwahrhalten ist überhaupt von zwiefacher Art, ein gewisses oder ein ungewisses. Das gewisse Fürwahrhalten oder die Gewißheit ist mit dem Bewußtsein der Nothwendigkeit verbunden, das ungewisse dagegen oder die Ungewißheit, mit dem Bewußtsein der Zufälligkeit oder der Möglichkeit des Gegentheils. Das letztere ist hinwiederum entweder sowohl subjectiv als objectiv unzureichend, oder zwar objectiv unzureichend, aber subjectiv zureichend. Jenes heißt Meinung, dieses muß Glaube genannt werden."
    },
    {
     "id": "jasche-s10-004",
     "kind": "text",
     "aa": 66,
     "text": "Es giebt hiernach drei Arten oder Modi des Fürwahrhaltens: Meinen, Glauben und Wissen. Das Meinen ist ein problematisches, das Glauben ein assertorisches und das Wissen ein apodiktisches Urtheilen. Denn was ich bloß meine, das halte ich im Urtheilen mit Bewußtsein nur für problematisch; was ich glaube, für assertorisch, aber nicht als objectiv, sondern nur als subjectiv nothwendig (nur für mich geltend); was ich endlich weiß, für apodiktisch gewiß, d.i. für allgemein und objectiv nothwendig (für Alle geltend), gesetzt auch, daß der Gegenstand selbst, auf den sich dieses gewisse Fürwahrhalten bezieht, eine bloß empirische Wahrheit wäre. Denn diese Unterscheidung des Fürwahrhaltens nach den so eben genannten drei modis betrifft nur die Urtheilskraft in Ansehung der subjectiven Kriterien der Subsumtion eines Urtheils unter objective Regeln.",
     "em": [
      [
       721,
       726
      ]
     ]
    },
    {
     "id": "jasche-s10-005",
     "kind": "text",
     "aa": 66,
     "text": "So wäre z.B. unser Fürwahrhalten der Unsterblichkeit bloß problematisch; wofern wir nur so handeln, als ob wir unsterblich wären, assertorisch aber, sofern wir glauben, daß wir unsterblich sind, und apodiktisch endlich: sofern wir Alle wüßten, daß es ein anderes Leben nach diesem giebt."
    },
    {
     "id": "jasche-s10-006",
     "kind": "text",
     "aa": 66,
     "text": "Zwischen Meinen, Glauben und Wissen findet demnach ein wesentlicher Unterschied statt, den wir hier noch genauer und ausführlicher auseinandersetzen wollen."
    },
    {
     "id": "jasche-s10-007",
     "kind": "text",
     "aa": 66,
     "text": "1) Meinen.Das Meinen oder das Fürwahrhalten aus einem Erkenntnißgrunde, der weder subjectiv noch objectiv hinreichend ist, kann als ein vorläufiges Urtheilen (sub conditione suspensiva ad interim) angesehen werden, dessen man nicht leicht entbehren kann. Man muß erst meinen, ehe man annimmt und behauptet, sich dabei aber auch hüten, eine Meinung für etwas mehr als bloße Meinung zu halten. Vom Meinen fangen wir größtentheils bei allem unserm Erkennen an. Zuweilen haben wir ein dunkles Vorgefühl von der Wahrheit, eine Sache scheint uns Merkmale der Wahrheit zu enthalten; wir ahnen ihre Wahrheit schon, noch ehe wir sie mit bestimmter Gewißheit erkennen.",
     "pages": [
      {
       "p": 67,
       "i": 403
      }
     ],
     "aaEnd": 67,
     "em": [
      [
       159,
       195
      ]
     ],
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-008",
     "kind": "text",
     "aa": 67,
     "text": "Wo findet nun aber das bloße Meinen eigentlich statt? In keinen Wissenschaften, welche Erkenntnisse a priori enthalten, also weder in der Mathematik, noch in der Metaphysik, noch in der Moral, sondern lediglich in empirischen Erkenntnissen: in der Physik, der Psychologie u.dgl. Denn es ist an sich ungereimt, a priori zu meinen. Auch könnte in der That nichts lächerlicher sein, als z.B. in der Mathematik nur zu meinen. Hier, so wie in der Metaphysik und Moral, gilt es: entweder zu wissen oder nicht zu wissen. Meinungssachen können daher immer nur Gegenstände einer Erfahrungserkenntniß sein, die an sich zwar möglich, aber nur für uns unmöglich ist nach den empirischen Einschränkungen und Bedingungen unsers Erfahrungsvermögens und dem davon abhängenden Grade dieses Vermögens, den wir besitzen. So ist z.B. der Äther der neuern Physiker eine bloße Meinungssache. Denn von dieser, so wie von jeder Meinung überhaupt, welche sie auch immer sein möge, sehe ich ein: daß das Gegentheil doch vielleicht könnte bewiesen werden. Mein Fürwahrhalten ist also hier objectiv sowohl als subjectiv unzureichend, obgleich es an sich betrachtet, vollständig werden kann.",
     "em": [
      [
       100,
       108
      ],
      [
       310,
       318
      ]
     ]
    },
    {
     "id": "jasche-s10-009",
     "kind": "text",
     "aa": 67,
     "text": "2) Glauben. Das Glauben oder das Fürwahrhalten aus einem Grunde, der zwar objectiv unzureichend, aber subjectiv zureichend ist, bezieht sich auf Gegenstände, in Ansehung deren man nicht allein nichts wissen, sondern auch nichts meinen, ja auch nicht einmal Wahrscheinlichkeit vorwenden, sondern bloß gewiß sein kann, daß es nicht widersprechend ist, sich dergleichen Gegenstände so zu denken, wie man sie sich denkt. Das Übrige hierbei ist ein freies Fürwahrhalten, welches nur in praktischer, a priori gegebener Absicht nöthig ist, also ein Fürwahrhalten dessen, was ich aus moralischen Gründen annehme und zwar so, daß ich gewiß bin, das Gegentheil könne nie bewiesen werden.*[1]",
     "em": [
      [
       494,
       502
      ]
     ]
    },
    {
     "id": "jasche-s10-010",
     "kind": "text",
     "aa": 68,
     "text": "Sachen des Glaubens sind also I) keine Gegenstände des empirischen Erkenntnisses. Der sogenannte historische Glaube kann daher eigentlich auch nicht Glaube genannt und als solcher dem Wissen entgegengesetzt werden, da er selbst ein Wissen sein kann. Das Fürwahrhalten auf ein Zeugniß ist weder dem Grade noch der Art nach vom Fürwahrhalten durch eigene Erfahrung unterschieden.",
     "pages": [
      {
       "p": 68,
       "i": 0
      },
      {
       "p": 69,
       "i": 138
      }
     ],
     "aaEnd": 69,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s10-011",
     "kind": "text",
     "aa": 69,
     "text": "II) auch keine Objecte des Vernunfterkenntnisses (Erkenntnisses a priori), weder des theoretischen, z.B. in der Mathematik und Metaphysik, noch des praktischen in der Moral.",
     "em": [
      [
       64,
       72
      ]
     ]
    },
    {
     "id": "jasche-s10-012",
     "kind": "text",
     "aa": 69,
     "text": "Mathematische Vernunftwahrheiten kann man auf Zeugnisse zwar glauben, weil Irrthum hier theils nicht leicht möglich ist, theils auch leicht entdeckt werden kann, aber man kann sie auf diese Art doch nicht wissen. Philosophische Vernunftwahrheiten lassen sich aber auch nicht einmal glauben, sie müssen lediglich gewußt werden; denn Philosophie leidet in sich keine bloße Überredung. Und was insbesondre die Gegenstände des praktischen Vernunfterkenntnisses in der Moral, die Rechte und Pflichten, betrifft: so kann in Ansehung dieser eben so wenig ein bloßes Glauben stattfinden. Man muß völlig gewiß sein: ob etwas recht oder unrecht, pflichtmäßig oder pflichtwidrig, erlaubt oder unerlaubt sei. Auf’s Ungewisse kann man in moralischen Dingen nichts wagen, nichts auf die Gefahr des Verstoßes gegen das Gesetz beschließen. So ist es z.B. für den Richter nicht genug, daß er bloß glaube, der eines Verbrechens wegen Angeklagte habe dieses Verbrechen wirklich begangen. Er muß es (juridisch) wissen, oder handelt gewissenlos.",
     "pages": [
      {
       "p": 70,
       "i": 497
      }
     ],
     "aaEnd": 70,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-013",
     "kind": "text",
     "aa": 70,
     "text": "III) Nur solche Gegenstände sind Sachen des Glaubens, bei denen das Fürwahrhalten nothwendig frei, d.h. nicht durch objective, von der Natur und dem Interesse des Subjects unabhängige Gründe der Wahrheit bestimmt ist."
    },
    {
     "id": "jasche-s10-014",
     "kind": "text",
     "aa": 70,
     "text": "Das Glauben giebt daher auch wegen der bloß subjectiven Gründe keine Überzeugung, die sich mittheilen läßt und allgemeine Beistimmung gebietet, wie die Überzeugung, die aus dem Wissen kommt. Ich selbst kann nur von der Gültigkeit und Unveränderlichkeit meines praktischen Glaubens gewiß sein und mein Glaube an die Wahrheit eines Satzes oder die Wirklichkeit eines Dinges ist das, was in Beziehung auf mich nur die Stelle eines Erkenntnisses vertritt, ohne selbst ein Erkenntniß zu sein."
    },
    {
     "id": "jasche-s10-015",
     "kind": "text",
     "aa": 70,
     "text": "Moralisch ungläubig ist der, welcher nicht dasjenige annimmt, was zu wissen zwar unmöglich, aber vorauszusetzen, moralisch nothwendig ist. Dieser Art des Unglaubens liegt immer Mangel an moralischem Interesse zum Grunde. Je größer die moralische Gesinnung eines Menschen ist: desto fester und lebendiger wird auch sein Glaube sein an alles dasjenige, was er aus dem moralischen Interesse in praktisch nothwendiger Absicht anzunehmen und vorauszusetzen sich genöthigt fühlt."
    },
    {
     "id": "jasche-s10-016",
     "kind": "text",
     "aa": 70,
     "text": "3) Wissen. Das Fürwahrhalten aus einem Erkenntnißgrunde, der sowohl objectiv als subjectiv zureichend ist, oder die Gewißheit ist entweder empirisch oder rational, je nachdem sie entweder auf Erfahrung — die eigene sowohl als die fremde mitgetheilte — oder auf Vernunft sich gründet. Diese Unterscheidung bezieht sich also auf die beiden Quellen, woraus unser gesammtes Erkenntniß geschöpft wird: die Erfahrung und die Vernunft."
    },
    {
     "id": "jasche-s10-017",
     "kind": "text",
     "aa": 70,
     "text": "Die rationale Gewißheit ist hinwiederum entweder mathematische oder philosophische Gewißheit. Jene ist intuitiv, diese discursiv."
    },
    {
     "id": "jasche-s10-018",
     "kind": "text",
     "aa": 70,
     "text": "Die mathematische Gewißheit heißt auch Evidenz, weil ein intuitives Erkenntniß klärer ist als ein discursives. Obgleich also beides, das mathematische und das philosophische Vernunfterkenntniß an sich gleich gewiß ist: so ist doch die Art der Gewißheit in beiden verschieden.",
     "pages": [
      {
       "p": 71,
       "i": 137
      }
     ],
     "aaEnd": 71,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-019",
     "kind": "text",
     "aa": 71,
     "text": "Die empirische Gewißheit ist eine ursprüngliche (originarie empirica), sofern ich von etwas aus eigener Erfahrung, und eine abgeleitete (derivative empirica), sofern ich durch fremde Erfahrung wovon gewiß werde. Diese letztere pflegt auch die historische Gewißheit genannt zu werden.",
     "em": [
      [
       49,
       68
      ],
      [
       137,
       156
      ]
     ]
    },
    {
     "id": "jasche-s10-020",
     "kind": "text",
     "aa": 71,
     "text": "Die rationale Gewißheit unterscheidet sich von der empirischen durch das Bewußtsein der Nothwendigkeit, das mit ihr verbunden ist, sie ist also eine apodiktische, die empirische dagegen nur eine assertorische Gewißheit. Rational gewiß ist man von dem, was man auch ohne alle Erfahrung a priori würde eingesehen haben. Unsre Erkenntnisse können daher Gegenstände der Erfahrung betreffen und die Gewißheit davon kann doch empirisch und rational zugleich sein, sofern wir nämlich einen empirisch gewissen Satz aus Principien a priori erkennen.",
     "em": [
      [
       285,
       293
      ],
      [
       522,
       530
      ]
     ]
    },
    {
     "id": "jasche-s10-021",
     "kind": "text",
     "aa": 71,
     "text": "Rationale Gewißheit können wir nicht von Allem haben, aber da, wo wir sie haben können, müssen wir sie der empirischen vorziehen."
    },
    {
     "id": "jasche-s10-022",
     "kind": "text",
     "aa": 71,
     "text": "Alle Gewißheit ist entweder eine unvermittelte oder eine vermittelte, d.h. sie bedarf entweder eines Beweises, oder ist keines Beweises fähig und bedürftig. Wenn auch noch so Vieles in unserm Erkenntnisse nur mittelbar, d.h. nur durch einen Beweis gewiß ist: so muß es doch auch etwas Indemonstrables oder unmittelbar Gewisses geben und unser gesammtes Erkenntniß muß von unmittelbar gewissen Sätzen ausgehen."
    },
    {
     "id": "jasche-s10-023",
     "kind": "text",
     "aa": 71,
     "text": "Die Beweise, auf denen alle vermittelte oder mittelbare Gewißheit eines Erkenntnisses beruht, sind entweder directe oder indirecte d.h. apagogische Beweise. Wenn ich eine Wahrheit aus ihren Gründen beweise, so führe ich einen directen Beweis für dieselbe, und wenn ich von der Falschheit des Gegentheils auf die Wahrheit eines Satzes schließe, einen apagogischen. Soll aber dieser letztere Gültigkeit haben, so müssen sich die Sätze contradictorisch oder diametraliter entgegengesetzt sein. Denn zwei einander bloß conträr entgegengesetzte Sätze (contrarie opposita) können beide falsch sein. Ein Beweis, welcher der Grund mathematischer Gewißheit ist, heißt Demonstration und der der Grund philosophischer Gewißheit ist, ein akroamatischer Beweis. Die wesentlichen Stücke eines jeden Beweises überhaupt sind die Materie und die Form desselben, oder der Beweisgrund und die Consequenz.",
     "em": [
      [
       547,
       565
      ]
     ]
    },
    {
     "id": "jasche-s10-024",
     "kind": "text",
     "aa": 72,
     "text": "Vom Wissen kommt Wissenschaft her, worunter der Inbegriff einer Erkenntniß als System zu verstehen ist. Sie wird der gemeinen Erkenntniß entgegengesetzt, d.i. dem Inbegriff einer Erkenntniß als bloßem Aggregate. Das System beruht auf einer Idee des Ganzen, welche den Theilen vorangeht, beim gemeinen Erkenntnisse dagegen oder dem bloßen Aggregate von Erkenntnissen gehen die Theile dem Ganzen vorher. Es giebt historische und Vernunftwissenschaften.",
     "pages": [
      {
       "p": 72,
       "i": 0
      }
     ],
     "aaEnd": 72
    },
    {
     "id": "jasche-s10-025",
     "kind": "text",
     "aa": 72,
     "text": "In einer Wissenschaft wissen wir oft nur die Erkenntnisse, aber nicht die dadurch vorgestellten Sachen; also kann es eine Wissenschaft von demjenigen geben, wovon unsre Erkenntniß kein Wissen ist."
    },
    {
     "id": "jasche-s10-026",
     "kind": "rule",
     "aa": 72,
     "zone": 1
    },
    {
     "id": "jasche-s10-027",
     "kind": "text",
     "aa": 72,
     "text": "Aus den bisherigen Bemerkungen über die Natur und die Arten des Fürwahrhaltens können wir nun das allgemeine Resultat ziehen: daß also alle unsre Überzeugung entweder logisch oder praktisch sei. Nämlich wenn wir wissen, daß wir frei sind von allen subjectiven Gründen und doch das Fürwahrhalten zureichend ist, so sind wir überzeugt und zwar logisch oder aus objectiven Gründen überzeugt (das Object ist gewiß).",
     "zone": 1
    },
    {
     "id": "jasche-s10-028",
     "kind": "text",
     "aa": 72,
     "text": "Das complete Fürwahrhalten aus subjectiven Gründen, die in praktischer Beziehung so viel als objective gelten, ist aber auch Überzeugung, nur nicht logische, sondern praktische (ich bin gewiß). Und diese praktische Überzeugung oder dieser moralische Vernunftglaube ist oft fester als alles Wissen. Beim Wissen hört man noch auf Gegengründe, aber beim Glauben nicht, weil es hierbei nicht auf objective Gründe, sondern auf das moralische Interesse des Subjects ankommt.*[2]",
     "zone": 1
    },
    {
     "id": "jasche-s10-029",
     "kind": "text",
     "aa": 73,
     "text": "Der Überzeugung steht die Überredung entgegen, ein Fürwahrhalten aus unzureichenden Gründen, von denen man nicht weiß, ob sie bloß subjectiv oder auch objectiv sind.",
     "pages": [
      {
       "p": 73,
       "i": 0
      }
     ],
     "aaEnd": 73,
     "zone": 1
    },
    {
     "id": "jasche-s10-030",
     "kind": "text",
     "aa": 73,
     "text": "Die Überredung geht oft der Überzeugung vorher. Wir sind uns vieler Erkenntnisse nur so bewußt, daß wir nicht urtheilen können, ob die Gründe unsers Fürwahrhaltens objectiv oder subjectiv sind. Wir müssen daher, um von der bloßen Überredung zur Überzeugung gelangen zu können, zuvörderst überlegen, d.h. sehen, zu welcher Erkenntnißkraft ein Erkenntniß gehöre, und sodann untersuchen, d.i. prüfen, ob die Gründe in Ansehung des Objects zureichend oder unzureichend sind. Bei Vielen bleibt es bei der Überredung. Bei Einigen kommt es zur Überlegung, bei Wenigen zur Untersuchung. Der da weiß, was zur Gewißheit gehört, wird Überredung und Überzeugung nicht leicht verwechseln und sich also auch nicht leicht überreden lassen. Es giebt einen Bestimmungsgrund zum Beifall, der aus objectiven und subjectiven Gründen zusammengesetzt ist, und diese vermischte Wirkung setzen die mehresten Menschen nicht aus einander.",
     "zone": 1
    },
    {
     "id": "jasche-s10-031",
     "kind": "text",
     "aa": 73,
     "text": "Obgleich jede Überredung der Form nach (formaliter) falsch ist, sofern nämlich hierbei eine ungewisse Erkenntniß gewiß zu sein scheint: so kann sie doch der Materie nach (materialiter) wahr sein. Und so unterscheidet sie sich denn auch von der Meinung, die eine ungewisse Erkenntniß ist, sofern sie für ungewiß gehalten wird.",
     "em": [
      [
       40,
       50
      ],
      [
       171,
       183
      ]
     ],
     "zone": 1
    },
    {
     "id": "jasche-s10-032",
     "kind": "text",
     "aa": 73,
     "text": "Die Zulänglichkeit des Fürwahrhaltens (im Glauben) läßt sich auf die Probe stellen durch Wetten oder durch Schwören. Zu dem ersten ist comparative, zum zweiten absolute Zulänglichkeit objectiver Gründe nöthig, statt deren, wenn sie nicht vorhanden sind, dennoch ein schlechterdings subjectiv zureichendes Fürwahrhalten gilt.",
     "zone": 1
    },
    {
     "id": "jasche-s10-033",
     "kind": "rule",
     "aa": 73,
     "zone": 2
    },
    {
     "id": "jasche-s10-034",
     "kind": "text",
     "aa": 73,
     "text": "Man pflegt sich oft der Ausdrücke zu bedienen: Seinem Urtheile beipflichten, sein Urtheil zurückhalten, aufschieben oder aufgeben. Diese und ähnliche Redensarten scheinen anzudeuten, daß in unserm Urtheilen etwas Willkürliches sei, indem wir etwas für wahr halten, weil wir es für wahr halten wollen. Es frägt sich demnach hier: Ob das Wollen einen Einfluß auf unsre Urtheile habe?",
     "zone": 2
    },
    {
     "id": "jasche-s10-035",
     "kind": "text",
     "aa": 73,
     "text": "Unmittelbar hat der Wille keinen Einfluß auf das Fürwahrhalten; dies wäre auch sehr ungereimt. Wenn es heißt: Wir glauben gern, was wir wünschen, so bedeutet das nur unsre gutartigen Wünsche, z.B. die des Vaters von seinen Kindern. Hätte der Wille einen unmittelbaren Einfluß auf unsre Überzeugung von dem, was wir wünschen: so würden wir uns beständig Chimären von einem glücklichen Zustande machen und sie sodann auch immer für wahr halten. Der Wille kann aber nicht wider überzeugende Beweise von Wahrheiten streiten, die seinen Wünschen und Neigungen zuwider sind.",
     "pages": [
      {
       "p": 74,
       "i": 128
      }
     ],
     "aaEnd": 74,
     "zone": 2,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s10-036",
     "kind": "text",
     "aa": 74,
     "text": "Sofern aber der Wille den Verstand entweder zur Nachforschung einer Wahrheit antreibt oder davon abhält, muß man ihm einen Einfluß auf den Gebrauch des Verstandes und mithin auch mittelbar auf die Überzeugung selbst zugestehen, da diese so sehr von dem Gebrauche des Verstandes abhängt.",
     "zone": 2
    },
    {
     "id": "jasche-s10-037",
     "kind": "text",
     "aa": 74,
     "text": "Was aber insbesondre die Aufschiebung oder Zurückhaltung unsers Urtheils betrifft: so besteht dieselbe in dem Vorsatze, ein bloß vorläufiges Urtheil nicht zu einem bestimmenden werden zu lassen. Ein vorläufiges Urtheil ist ein solches, wodurch ich mir vorstelle, daß zwar mehr Gründe für die Wahrheit einer Sache, als wider dieselbe da sind, daß aber diese Gründe noch nicht zureichen zu einem bestimmenden oder definitiven Urtheile, dadurch ich geradezu für die Wahrheit entscheide. Das vorläufige Urtheilen ist also ein mit Bewußtsein bloß problematisches Urtheilen.",
     "zone": 2
    },
    {
     "id": "jasche-s10-038",
     "kind": "text",
     "aa": 74,
     "text": "Die Zurückhaltung des Urtheils kann in zwiefacher Absicht geschehen: entweder, um die Gründe des bestimmenden Urtheils aufzusuchen, oder um niemals zu urtheilen. Im erstern Falle heißt die Aufschiebung des Urtheils eine kritische (suspensio judicii indagatoria), im letztern eine skeptische (suspensio judicii sceptica). Denn der Skeptiker thut auf alles Urtheilen Verzicht, der wahre Philosoph dagegen suspendirt bloß sein Urtheil, wofern er noch nicht genugsame Gründe hat, etwas für wahr zu halten.",
     "em": [
      [
       231,
       260
      ],
      [
       292,
       318
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s10-039",
     "kind": "text",
     "aa": 74,
     "text": "Sein Urtheil nach Maximen zu suspendiren, dazu wird eine geübte Urtheilskraft erfordert, die sich nur bei zunehmendem Alter findet. Überhaupt ist die Zurückhaltung unsers Beifalls eine sehr schwere Sache, theils weil unser Verstand so begierig ist durch Urtheilen sich zu erweitern und mit Kenntnissen zu bereichern, theils weil unser Hang immer auf gewisse Sachen mehr gerichtet ist als auf andre. Wer aber seinen Beifall oft hat zurücknehmen müssen und dadurch klug und vorsichtig geworden ist, wird ihn nicht so schnell geben, aus Furcht, sein Urtheil in der Folge wieder zurücknehmen zu müssen. Dieser Widerruf ist immer eine Kränkung und eine Ursache, auf alle andren Kenntnisse ein Mißtrauen zu setzen.",
     "pages": [
      {
       "p": 75,
       "i": 575
      }
     ],
     "aaEnd": 75,
     "zone": 2,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s10-040",
     "kind": "text",
     "aa": 75,
     "text": "Noch bemerken wir hier: daß es etwas anders ist, sein Urtheil in dubio, als es in suspenso zu lassen. Bei diesem habe ich immer ein Interesse für die Sache, bei jenem ist es nicht immer meinem Zwecke und Interesse gemäß zu entscheiden, ob die Sache wahr sei oder nicht.",
     "em": [
      [
       62,
       71
      ],
      [
       79,
       90
      ]
     ],
     "zone": 2
    },
    {
     "id": "jasche-s10-041",
     "kind": "text",
     "aa": 75,
     "text": "Die vorläufigen Urtheile sind sehr nöthig, ja unentbehrlich für den Gebrauch des Verstandes bei allem Meditiren und Untersuchen. Denn sie dienen dazu, den Verstand bei seinen Nachforschungen zu leiten und ihm hierzu verschiedene Mittel an die Hand zu geben.",
     "zone": 2
    },
    {
     "id": "jasche-s10-042",
     "kind": "text",
     "aa": 75,
     "text": "Wenn wir über einen Gegenstand meditiren, müssen wir immer schon vorläufig urtheilen und das Erkenntniß gleichsam schon wittern, das uns durch die Meditation zu Theil werden wird. Und wenn man auf Erfindungen oder Entdeckungen ausgeht, muß man sich immer einen vorläufigen Plan machen, sonst gehen die Gedanken bloß aufs Ohngefähr. Man kann sich daher unter vorläufigen Urtheilen Maximen denken zur Untersuchung einer Sache. Auch Anticipationen könnte man sie nennen, weil man sein Urtheil von einer Sache schon anticipirt, noch ehe man das bestimmende hat. Dergleichen Urtheile haben also ihren guten Nutzen und es ließen sich sogar Regeln darüber geben, wie wir vorläufig über ein Object urtheilen sollen.",
     "zone": 2
    },
    {
     "id": "jasche-s10-043",
     "kind": "rule",
     "aa": 75,
     "zone": 3
    },
    {
     "id": "jasche-s10-044",
     "kind": "text",
     "aa": 75,
     "text": "Von den vorläufigen Urtheilen müssen die Vorurtheile unterschieden werden.",
     "zone": 3
    },
    {
     "id": "jasche-s10-045",
     "kind": "text",
     "aa": 75,
     "text": "Vorurtheile sind vorläufige Urtheile, in so fern sie als Grundsätze angenommen werden. Ein jedes Vorurtheil ist als ein Princip irriger Urtheile anzusehen und aus Vorurtheilen entspringen nicht Vorurtheile, sondern irrige Urtheile. Man muß daher die falsche Erkenntniß, die aus dem Vorurtheil entspringt, von ihrer Quelle, dem Vorurtheil selbst, unterscheiden. So ist z.B. die Bedeutung der Träume an sich selbst kein Vorurtheil, sondern ein Irrthum, der aus der angenommenen allgemeinen Regel entspringt: Was einigemal eintrifft, trifft immer ein oder ist immer für wahr zu halten. Und dieser Grundsatz, unter welchen die Bedeutung der Träume mit gehört, ist ein Vorurtheil.",
     "zone": 3
    },
    {
     "id": "jasche-s10-046",
     "kind": "text",
     "aa": 75,
     "text": "Zuweilen sind die Vorurtheile wahre vorläufige Urtheile, nur daß sie uns als Grundsätze oder als bestimmende Urtheile gelten, ist unrecht. Die Ursache von dieser Täuschung ist darin zu suchen, daß subjective Gründe fälschlich für objective gehalten werden, aus Mangel an Überlegung, die allem Urtheilen vorhergehen muß. Denn können wir auch manche Erkenntnisse, z.B. die unmittelbar gewissen Sätze, annehmen, ohne sie zu untersuchen, d.h. ohne die Bedingungen ihrer Wahrheit zu prüfen: so können und dürfen wir doch über nichts urtheilen, ohne zu überlegen, d.h. ohne ein Erkenntniß mit der Erkenntnißkraft, woraus es entspringen soll, (der Sinnlichkeit oder dem Verstande) zu vergleichen. Nehmen wir nun ohne diese Überlegung, die auch da nöthig ist, wo keine Untersuchung stattfindet, Urtheile an: so entstehen daraus Vorurtheile, oder Principien zu urtheilen aus subjectiven Ursachen, die fälschlich für objective Gründe gehalten werden.",
     "pages": [
      {
       "p": 76,
       "i": 139
      }
     ],
     "aaEnd": 76,
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-047",
     "kind": "text",
     "aa": 76,
     "text": "Die Hauptquellen der Vorurtheile sind: Nachahmung, Gewohnheit und Neigung.",
     "zone": 3
    },
    {
     "id": "jasche-s10-048",
     "kind": "text",
     "aa": 76,
     "text": "Die Nachahmung hat einen allgemeinen Einfluß auf unsere Urtheile, denn es ist ein starker Grund, das für wahr zu halten, was Andre dafür ausgegeben haben. Daher das Vorurtheil: was alle Welt thut, ist Recht. Was die Vorurtheile betrifft, die aus der Gewohnheit entsprungen sind, so können sie nur durch die Länge der Zeit ausgerottet werden, indem der Verstand, durch Gegengründe nach und nach im Urtheilen aufgehalten und verzögert, dadurch allmählig zu einer entgegengesetzten Denkart gebracht wird. Ist aber ein Vorurtheil der Gewohnheit zugleich durch Nachahmung entstanden: so ist der Mensch, der es besitzt, davon schwerlich zu heilen. Ein Vorurtheil aus Nachahmung kann man auch den Hang zum passiven Gebrauch der Vernunft nennen, oder zum Mechanism der Vernunft statt der Spontaneität derselben unter Gesetzen.",
     "zone": 3
    },
    {
     "id": "jasche-s10-049",
     "kind": "text",
     "aa": 76,
     "text": "Vernunft ist zwar ein thätiges Princip, das nichts von bloßer Autorität Anderer, auch nicht einmal, wenn es ihren reinen Gebrauch gilt, von der Erfahrung entlehnen soll. Aber die Trägheit sehr vieler Menschen macht, daß sie lieber in Anderer Fußtapfen treten als ihre eigenen Verstandeskräfte anstrengen. Dergleichen Menschen können immer nur Copien von Andern werden, und wären alle von der Art, so würde die Welt ewig auf einer und derselben Stelle bleiben. Es ist daher höchst nöthig und wichtig: die Jugend nicht, wie es gewöhnlich geschieht, zum bloßen Nachahmen anzuhalten.",
     "zone": 3
    },
    {
     "id": "jasche-s10-050",
     "kind": "text",
     "aa": 76,
     "text": "Es giebt so manche Dinge, die dazu beitragen, uns die Maxime der Nachahmung anzugewöhnen und dadurch die Vernunft zu einem fruchtbaren Boden von Vorurtheilen zu machen. Zu dergleichen Hülfsmitteln der Nachahmung gehören",
     "pages": [
      {
       "p": 77,
       "i": 65
      }
     ],
     "aaEnd": 77,
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-051",
     "kind": "text",
     "aa": 77,
     "text": "1) Formeln. Dieses sind Regeln, deren Ausdruck zum Muster der Nachahmung dient. Sie sind übrigens ungemein nützlich zur Erleichterung bei verwickelten Sätzen und der erleuchtetste Kopf sucht daher dergleichen zu erfinden.",
     "zone": 3
    },
    {
     "id": "jasche-s10-052",
     "kind": "text",
     "aa": 77,
     "text": "2) Sprüche, deren Ausdruck eine große Abgemessenheit eines prägnanten Sinnes hat, so daß es scheint, man könne den Sinn nicht mit weniger Worten umfassen. Dergleichen Aussprüche (dicta), die immer von Andern entlehnt werden müssen, denen man eine gewisse Unfehlbarkeit zutraut, dienen, um dieser Autorität willen, zur Regel und zum Gesetz. Die Aussprüche der Bibel heißen Sprüche κατ' ἐξοχην.",
     "em": [
      [
       179,
       184
      ],
      [
       380,
       383
      ],
      [
       385,
       391
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s10-053",
     "kind": "text",
     "aa": 77,
     "text": "3) Sentenzen, d.i. Sätze, die sich empfehlen und ihr Ansehen oft Jahrhunderte hindurch erhalten, als Producte einer reifen Urtheilskraft durch den Nachdruck der Gedanken, die darin liegen.",
     "zone": 3
    },
    {
     "id": "jasche-s10-054",
     "kind": "text",
     "aa": 77,
     "text": "4) Canones. Dieses sind allgemeine Lehrsprüche, die den Wissenschaften zur Grundlage dienen und etwas Erhabenes und Durchdachtes andeuten. Man kann sie noch auf eine sententiöse Art ausdrücken, damit sie desto mehr gefallen.",
     "em": [
      [
       3,
       11
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s10-055",
     "kind": "text",
     "aa": 77,
     "text": "5) Sprüchwörter (proverbia). Dieses sind populäre Regeln des gemeinen Verstandes oder Ausdrücke zu Bezeichnung der populären Urtheile desselben. Da dergleichen bloß provinziale Sätze nur dem gemeinen Pöbel zu Sentenzen und Canonen dienen: so sind sie bei Leuten von feinerer Erziehung nicht anzutreffen.",
     "em": [
      [
       17,
       26
      ]
     ],
     "zone": 3
    },
    {
     "id": "jasche-s10-056",
     "kind": "rule",
     "aa": 77,
     "zone": 4
    },
    {
     "id": "jasche-s10-057",
     "kind": "text",
     "aa": 77,
     "text": "Aus den vorhin angegebenen drei allgemeinen Quellen der Vorurtheile, und insbesondre auch der Nachahmung, entspringen nun so manche besondre Vorurtheile, unter denen wir folgende, als die gewöhnlichsten, hier berühren wollen.",
     "zone": 4
    },
    {
     "id": "jasche-s10-058",
     "kind": "text",
     "aa": 77,
     "text": "1) Vorurtheile des Ansehens.Zu diesen ist zu rechnen:",
     "zone": 4
    },
    {
     "id": "jasche-s10-059",
     "kind": "text",
     "aa": 77,
     "text": "a) das Vorurtheil des Ansehens der Person. Wenn wir in Dingen, die auf Erfahrung und Zeugnissen beruhen, unsre Erkenntniß auf das Ansehen andrer Personen bauen: so machen wir uns dadurch keiner Vorurtheile schuldig, denn in Sachen dieser Art muß, da wir nicht alles selbst erfahren, und mit unserm eigenen Verstande umfassen können, das Ansehen der Person die Grundlage unsrer Urtheile sein. Wenn wir aber das Ansehen Anderer zum Grunde unsers Fürwahrhaltens in Absicht auf Vernunfterkenntnisse machen: so nehmen wir diese Erkenntnisse auf bloßes Vorurtheil an. Denn Vernunftwahrheiten gelten anonymisch; hier ist nicht die Frage: Wer hat es gesagt, sondern Was hat er gesagt? Es liegt nichts daran, ob ein Erkenntniß von edler Herkunft ist; aber dennoch ist der Hang zum Ansehen großer Männer sehr gemein, theils wegen der Eingeschränktheit eigner Einsicht, theils aus Begierde, dem nachzuahmen, was uns als groß beschrieben wird. Hierzu kommt noch: daß das Ansehen der Person dazu dient, unsrer Eitelkeit auf eine indirecte Weise zu schmeicheln. So wie nämlich die Unterthanen eines mächtigen Despoten stolz darauf sind, daß sie nur alle gleich von ihm behandelt werden, indem der Geringste mit dem Vornehmsten in so fern sich gleich dünken kann, als sie beide gegen die unumschränkte Macht ihres Beherrschers nichts sind, so beurtheilen sich auch die Verehrer eines großen Mannes als gleich, sofern die Vorzüge, die sie unter einander selbst haben mögen, gegen die Verdienste des großen Mannes betrachtet, für unbedeutend zu achten sind. Die hochgepriesenen großen Männer thun daher dem Hange zum Vorurtheile des Ansehens der Person aus mehr als einem Grunde keinen geringen Vorschub.",
     "pages": [
      {
       "p": 78,
       "i": 242
      }
     ],
     "aaEnd": 78,
     "em": [
      [
       0,
       1
      ]
     ],
     "zone": 4,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s10-060",
     "kind": "text",
     "aa": 78,
     "text": "b) Das Vorurtheil des Ansehens der Menge. Zu diesem Vorurtheil ist hauptsächlich der Pöbel geneigt. Denn da er die Verdienste, die Fähigkeiten und Kenntnisse der Person nicht zu beurtheilen vermag: so hält er sich lieber an das Urtheil der Menge, unter der Voraussetzung, daß das, was Alle sagen, wohl wahr sein müsse. Indessen bezieht sich dieses Vorurtheil bei ihm nur auf historische Dinge, in Religionssachen, bei denen er selbst interessirt ist, verläßt er sich auf das Urtheil der Gelehrten.",
     "em": [
      [
       0,
       1
      ]
     ],
     "zone": 4
    },
    {
     "id": "jasche-s10-061",
     "kind": "text",
     "aa": 78,
     "text": "Es ist überhaupt merkwürdig, daß der Unwissende ein Vorurtheil für die Gelehrsamkeit hat und der Gelehrte dagegen wiederum ein Vorurtheil für den gemeinen Verstand.",
     "zone": 4
    },
    {
     "id": "jasche-s10-062",
     "kind": "text",
     "aa": 78,
     "text": "Wenn dem Gelehrten, nachdem er den Kreis der Wissenschaften schon ziemlich durchgelaufen ist, alle seine Bemühungen nicht die gehörige Genugthuung verschaffen: so bekommt er zuletzt ein Mißtrauen gegen die Gelehrsamkeit, insbesondre in Ansehung solcher Speculationen, wo die Begriffe nicht sinnlich gemacht werden können, und deren Fundamente schwankend sind, wie z.B. in der Metaphysik. Da er aber doch glaubt, der Schlüssel zur Gewißheit über gewisse Gegenstände müsse irgendwo zu finden sein: so sucht er ihn nun beim gemeinen Verstande, nachdem er ihn so lange vergebens auf dem Wege des wissenschaftlichen Nachforschens gesucht hatte.",
     "pages": [
      {
       "p": 79,
       "i": 196
      }
     ],
     "aaEnd": 79,
     "zone": 4,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s10-063",
     "kind": "text",
     "aa": 79,
     "text": "Allein diese Hoffnung ist sehr trüglich, denn wenn das cultivirte Vernunftvermögen in Absicht auf die Erkenntniß gewisser Dinge nichts ausrichten kann, so wird es das uncultivirte sicherlich eben so wenig. In der Metaphysik ist die Berufung auf die Aussprüche des gemeinen Verstandes überall ganz unzulässig, weil hier kein Fall in concreto kann dargestellt werden. Mit der Moral hat es aber freilich eine andre Bewandtniß. Nicht nur können in der Moral alle Regeln in concreto gegeben werden, sondern die praktische Vernunft offenbart sich auch überhaupt klärer und richtiger durch das Organ des gemeinen als durch das des speculativen Verstandesgebrauchs. Daher der gemeine Verstand über Sachen der Sittlichkeit und Pflicht oft richtiger urtheilt als der speculative.",
     "em": [
      [
       329,
       340
      ],
      [
       466,
       477
      ]
     ],
     "zone": 4
    },
    {
     "id": "jasche-s10-064",
     "kind": "text",
     "aa": 79,
     "text": "c) Das Vorurtheil des Ansehens des Zeitalters. Hier ist das Vorurtheil des Alterthums eines der bedeutendsten. Wir haben zwar allerdings Grund vom Alterthum günstig zu urtheilen, aber das ist nur ein Grund zu einer gemäßigten Achtung, deren Grenzen wir nur zu oft dadurch überschreiten, daß wir die Alten zu Schatzmeistern der Erkenntnisse und Wissenschaften machen, den relativen Werth ihrer Schriften zu einem absoluten erheben und ihrer Leitung uns blindlings anvertrauen. Die Alten so übermäßig schätzen, heißt: den Verstand in seine Kinderjahre zurückführen und den Gebrauch des selbsteigenen Talentes vernachlässigen. Auch würden wir uns sehr irren, wenn wir glaubten, daß Alle aus dem Alterthum so classisch geschrieben hätten, wie die, deren Schriften bis auf uns gekommen sind. Da nämlich die Zeit alles sichtet und nur das sich erhält, was einen innern Werth hat: so dürfen wir nicht ohne Grund annehmen, daß wir nur die besten Schriften der Alten besitzen.",
     "em": [
      [
       0,
       1
      ]
     ],
     "zone": 4
    },
    {
     "id": "jasche-s10-065",
     "kind": "text",
     "aa": 79,
     "text": "Es giebt mehrere Ursachen, durch die das Vorurtheil des Alterthums erzeugt und unterhalten wird.",
     "zone": 4
    },
    {
     "id": "jasche-s10-066",
     "kind": "text",
     "aa": 80,
     "text": "Wenn etwas die Erwartung nach einer allgemeinen Regel übertrifft: so verwundert man sich anfangs darüber und diese Verwunderung geht sodann oft in Bewunderung über. Dieses ist der Fall mit den Alten, wenn man bei ihnen etwas findet, was man, in Rücksicht auf die Zeitumstände, unter welchen sie lebten, nicht suchte. Eine andre Ursache liegt in dem Umstande, daß die Kenntniß von den Alten und dem Alterthum eine Gelehrsamkeit und Belesenheit beweist, die sich immer Achtung erwirbt, so gemein und unbedeutend die Sachen an sich selbst sein mögen, die man aus dem Studium der Alten geschöpft hat. Eine dritte Ursache ist die Dankbarkeit, die wir den Alten dafür schuldig sind, daß sie uns die Bahn zu vielen Kenntnissen gebrochen. Es scheint billig zu sein, ihnen dafür eine besondre Hochschätzung zu beweisen, deren Maaß wir aber oft überschreiten. Eine vierte Ursache ist endlich zu suchen in einem gewissen Neide gegen die Zeitgenossen. Wer es mit den Neuern nicht aufnehmen kann, preist auf Unkosten derselben die Alten hoch, damit sich die Neuern nicht über ihn erheben können.",
     "pages": [
      {
       "p": 80,
       "i": 0
      }
     ],
     "aaEnd": 80,
     "zone": 4
    },
    {
     "id": "jasche-s10-067",
     "kind": "text",
     "aa": 80,
     "text": "Das entgegengesetzte von diesem ist das Vorurtheil der Neuigkeit. Zuweilen fiel das Ansehen des Alterthums und das Vorurtheil zu Gunsten desselben, insbesondre im Anfange dieses Jahrhunderts, als der berühmte Fontenelle sich auf die Seite der Neuern schlug. Bei Erkenntnissen, die einer Erweiterung fähig sind, ist es sehr natürlich, daß wir in die Neuern mehr Zutrauen setzen als in die Alten. Aber dieses Urtheil hat auch nur Grund als ein bloßes vorläufiges Urtheil. Machen wir es zu einem bestimmenden: so wird es Vorurtheil.",
     "zone": 4
    },
    {
     "id": "jasche-s10-068",
     "kind": "text",
     "aa": 80,
     "text": "2) Vorurtheile aus Eigenliebe oder logischem Egoismus, nach welchem man die Übereinstimmung des eigenen Urtheils mit den Urtheilen Anderer für ein entbehrliches Kriterium der Wahrheit hält. Sie sind den Vorurtheilen des Ansehens entgegengesetzt, da sie sich in einer gewissen Vorliebe für das äußern, was ein Product des eigenen Verstandes ist, z.B. des eigenen Lehrgebäudes.",
     "zone": 4
    },
    {
     "id": "jasche-s10-069",
     "kind": "rule",
     "aa": 80,
     "zone": 5
    },
    {
     "id": "jasche-s10-070",
     "kind": "text",
     "aa": 80,
     "text": "Ob es gut und rathsam sei, Vorurtheile stehen zu lassen oder sie wohl gar zu begünstigen? Es ist zum Erstaunen, daß in unserm Zeitalter dergleichen",
     "zone": 5,
     "maybeContinues": true
    },
    {
     "id": "jasche-s10-071",
     "kind": "text",
     "aa": 81,
     "text": "Fragen, besonders die wegen Begünstigung der Vorurtheile, noch können aufgegeben werden. Jemandes Vorurtheile begünstigen, heißt eben so viel als Jemanden in guter Absicht betrügen. Vorurtheile unangetastet lassen, ginge noch an; denn wer kann sich damit beschäftigen, eines Jeden Vorurtheile aufzudecken und wegzuschaffen. Ob es aber nicht rathsam sein sollte, an ihrer Ausrottung mit allen Kräften zu arbeiten, das ist doch eine andre Frage. Alte und eingewurzelte Vorurtheile sind freilich schwer zu bekämpfen, weil sie sich selbst verantworten und gleichsam ihre eigenen Richter sind. Auch sucht man das Stehenlassen der Vorurtheile damit zu entschuldigen, daß aus ihrer Ausrottung Nachtheile entstehen würden. Aber man lasse diese Nachtheile nur immer zu, in der Folge werden sie desto mehr Gutes bringen. Anmerkungen:",
     "pages": [
      {
       "p": 81,
       "i": 0
      }
     ],
     "aaEnd": 81,
     "zone": 5
    },
    {
     "id": "jasche-s10-072",
     "kind": "text",
     "aa": 81,
     "text": "*[1] Das Glauben ist kein besonderer Erkenntnißquell. Es ist eine Art des mit Bewußtsein unvollständigen Fürwahrhaltens und unterscheidet sich, wenn es, als auf besondre Art Objecte (die nur für’s Glauben gehören) restringirt, betrachtet wird, vom Meinen nicht durch den Grad, sondern durch das Verhältniß, was es als Erkenntniß zum Handeln hat. So bedarf z.B. der Kaufmann, um einen Handel einzuschlagen, daß er nicht bloß meine, es werde dabei was zu gewinnen sein, sondern //IX68// daß er’s glaube, d.i. daß seine Meinung zur Unternehmung auf’s Ungewisse zureichend sei. Nun haben wir theoretische Erkenntnisse (vom Sinnlichen), darin wir es zur Gewißheit bringen können und in Ansehung alles dessen, was wir menschliches Erkenntniß nennen können, muß das Letztere möglich sein. Eben solche gewisse Erkenntnisse und zwar gänzlich a priori haben wir in praktischen Gesetzen, allein diese gründen sich auf ein übersinnliches Princip (der Freiheit) und zwar in uns selbst, als ein Princip der praktischen Vernunft. Aber diese praktische Vernunft ist eine Causalität in Ansehung eines gleichfalls übersinnlichen Objects, des höchsten Guts, welches in der Sinnenwelt durch unser Vermögen nicht möglich ist. Gleichwohl muß die Natur als Object unsrer theoretischen Vernunft dazu zusammenstimmen, denn es soll in der Sinnenwelt die Folge oder Wirkung von dieser Idee angetroffen werden. Wir sollen also handeln, um diesen Zweck wirklich zu machen.",
     "em": [
      [
       833,
       841
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s10-073",
     "kind": "text",
     "aa": 81,
     "text": "Wir finden in der Sinnenwelt auch Spuren einer Kunstweisheit, und nun glauben wir: die Weltursache wirke auch mit moralischer Weisheit zum höchsten Gut. Dieses ist ein Fürwahrhalten, welches genug ist zum Handeln, d.i. ein Glaube. Nun bedürfen wir diesen nicht zum Handeln nach moralischen Gesetzen, denn die werden durch praktische Vernunft allein gegeben, aber wir bedürfen der Annahme einer höchsten Weisheit zum Object unsers moralischen Willens, worauf wir außer der bloßen Rechtmäßigkeit unserer Handlungen nicht umhin können, unsre Zwecke zu richten. Obgleich dieses objectiv keine nothwendige Beziehung unsrer Willkür wäre: so ist das höchste Gut doch subjectiv nothwendig das Object eines guten (selbst menschlichen) Willens, und der Glaube an die Erreichbarkeit desselben wird dazu nothwendig vorausgesetzt.",
     "zone": 5
    },
    {
     "id": "jasche-s10-074",
     "kind": "text",
     "aa": 81,
     "text": "Zwischen der Erwerbung einer Erkenntniß durch Erfahrung (a posteriori) und durch die Vernunft (a priori) giebt es kein Mittleres. Aber zwischen der Erkenntniß eines Objects und der bloßen Voraussetzung der Möglichkeit desselben giebt es ein Mittleres, nämlich einen empirischen oder einen Vernunftgrund die letztere anzunehmen in Beziehung auf eine nothwendige Erweiterung des Feldes möglicher Objecte über diejenige, deren Erkenntniß uns möglich ist. Diese Nothwendigkeit findet nur in Ansehung dessen statt, da das Object als praktisch und durch Vernunft praktisch nothwendig erkannt wird, denn zum Behuf der bloßen Erweiterung der theoretischen Erkenntniß etwas anzunehmen, ist jederzeit zufällig. Diese praktisch nothwendige Voraussetzung eines Objects ist die der Möglichkeit des höchsten Guts als Objects der Willkür, mithin auch der Bedingung dieser Möglichkeit (Gott, Freiheit und Unsterblichkeit). Dieses ist eine subjective Nothwendigkeit, die Realität des Objects um der nothwendigen Willensbestimmung halber anzunehmen. Dies ist der casus extraordinarius, ohne welchen die praktische Vernunft sich nicht in Ansehung ihres nothwendigen Zwecks erhalten kann, und es kommt ihr hier favor necessitatis zu statten in ihrem eigenen Urtheil. Sie kann kein Object logisch erwerben, sondern sich nur //IX69// allein dem widersetzen, was sie im Gebrauch dieser Idee, die ihr praktisch angehört, hindert.",
     "em": [
      [
       57,
       69
      ],
      [
       95,
       103
      ],
      [
       1045,
       1067
      ],
      [
       1191,
       1209
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s10-075",
     "kind": "text",
     "aa": 81,
     "text": "Dieser Glaube ist die Nothwendigkeit, die objective Realität eines Begriffs (vom höchsten Gut) d.i. die Möglichkeit seines Gegenstandes, als a priori nothwendigen Objects der Willkür anzunehmen. Wenn wir bloß auf Handlungen sehen, so haben wir diesen Glauben nicht nöthig. Wollen wir aber durch Handlungen uns zum Besitz des dadurch möglichen Zwecks erweitern: so müssen wir annehmen, daß dieser durchaus möglich sei. Ich kann also nur sagen: Ich sehe mich durch meinen Zweck nach Gesetzen der Freiheit genöthigt, ein höchstes Gut in der Welt als möglich anzunehmen, aber ich kann keinen Andern durch Gründe nöthigen (der Glaube ist frei).",
     "em": [
      [
       141,
       149
      ]
     ],
     "zone": 5
    },
    {
     "id": "jasche-s10-076",
     "kind": "text",
     "aa": 81,
     "text": "Der Vernunftglaube kann also nie auf’s theoretische Erkenntniß gehen, denn da ist das objectiv unzureichende Fürwahrhalten bloß Meinung. Er ist bloß eine Voraussetzung der Vernunft in subjectiver, aber absolutnothwendiger praktischer Absicht. Die Gesinnung nach moralischen Gesetzen führt auf ein Object der durch reine Vernunft bestimmbaren Willkür. Das Annehmen der Thunlichkeit dieses Objects und also auch der Wirklichkeit der Ursache dazu ist ein moralischer Glaube oder ein freies und in moralischer Absicht der Vollendung seiner Zwecke nothwendiges Fürwahrhalten.",
     "zone": 5
    },
    {
     "id": "jasche-s10-077",
     "kind": "rule",
     "aa": 81,
     "zone": 6
    },
    {
     "id": "jasche-s10-078",
     "kind": "text",
     "aa": 81,
     "text": "Fides ist eigentlich Treue im pacto oder subjectives Zutrauen zu einander, daß einer dem Andern sein Versprechen halten werde, Treue und Glauben. Das erste, wenn das pactum gemacht ist, das zweite, wenn man es schließen soll.",
     "em": [
      [
       0,
       5
      ],
      [
       30,
       35
      ],
      [
       166,
       172
      ]
     ],
     "zone": 6
    },
    {
     "id": "jasche-s10-079",
     "kind": "text",
     "aa": 81,
     "text": "Nach der Analogie ist die praktische Vernunft gleichsam der Promittent, der Mensch der Promissarius, das erwartete Gute aus der That das Promissum.",
     "zone": 6
    },
    {
     "id": "jasche-s10-080",
     "kind": "text",
     "aa": 81,
     "text": "*[2] Diese praktische Überzeugung ist also der moralische Vernunftglaube, der allein im eigentlichsten Verstande ein Glaube genannt und als solcher dem Wissen und aller theoretischen oder logischen Überzeugung überhaupt entgegengesetzt werden muß, weil er nie zum Wissen sich erheben kann. Der sogenannte historische Glaube dagegen darf, wie schon bemerkt, nicht von dem Wissen unterschieden werden, da er, als eine Art des theoretischen oder logischen Fürwahrhaltens, selbst ein Wissen sein kann. Wir können mit derselben Gewißheit eine empirische Wahrheit auf das Zeugniß Anderer annehmen, als wenn wir durch Facta der eigenen Erfahrung dazu gelangt wären. Bei der erstern Art des empirischen Wissens ist etwas Trügliches, aber auch bei der letztern.",
     "zone": 6
    },
    {
     "id": "jasche-s10-081",
     "kind": "text",
     "aa": 81,
     "text": "Das historische oder mittelbare empirische Wissen beruht auf der Zuverlässigkeit der Zeugnisse. Zu den Erfordernissen eines unverwerflichen Zeugen gehört: Authenticität (Tüchtigkeit) und Integrität.",
     "zone": 6
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s11",
   "part": "Einleitung",
   "title": "X. Wahrscheinlichkeit.",
   "heading": "[Einleitung.] / X. Wahrscheinlichkeit.",
   "blocks": [
    {
     "id": "jasche-s11-001",
     "kind": "text",
     "aa": 81,
     "text": "— Erklärung des Wahrscheinlichen. — Unterschied der Wahrscheinlichkeit von der Scheinbarkeit. — Mathematische und philosophische Wahrscheinlichkeit. — Zweifel — subjectiver und objectiver. — Skeptische, dogmatische und kritische Denkart oder Methode des Philosophirens. — Hypothesen.",
     "align": "center"
    },
    {
     "id": "jasche-s11-002",
     "kind": "text",
     "aa": 81,
     "text": "Zur Lehre von der Gewißheit unsers Erkenntnisses gehört auch die Lehre von der Erkenntniß des Wahrscheinlichen, das als eine Annäherung zur Gewißheit anzusehen ist."
    },
    {
     "id": "jasche-s11-003",
     "kind": "text",
     "aa": 81,
     "text": "Unter Wahrscheinlichkeit ist ein Fürwahrhalten aus unzureichenden Gründen zu verstehen, die aber zu den zureichenden ein größeres Verhältniß haben, als die Gründe des Gegentheils. Durch diese Erklärung unterscheiden wir die Wahrscheinlichkeit (probabilitas) von der bloßen Scheinbarkeit (verisimilitudo), einem Fürwahrhalten aus unzureichenden Gründen, in so fern dieselben größer sind als die Gründe des Gegentheils.",
     "em": [
      [
       244,
       256
      ],
      [
       288,
       302
      ]
     ]
    },
    {
     "id": "jasche-s11-004",
     "kind": "text",
     "aa": 81,
     "text": "Der Grund des Fürwahrhaltens kann nämlich entweder objectiv oder subjectiv größer sein als der des Gegentheils. Welches von beiden er sei, das kann man nur dadurch ausfindig machen, daß man die Gründe des Fürwahrhaltens mit den zureichenden vergleicht; denn alsdenn sind die Gründe des Fürwahrhaltens größer, als die Gründe des Gegentheils sein können. Bei der Wahrscheinlichkeit ist also der Grund des Fürwahrhaltens objectiv gültig, bei der bloßen Scheinbarkeit dagegen nur subjectiv gültig. Die Scheinbarkeit ist bloß Größe der Überredung, die Wahrscheinlichkeit ist eine Annäherung zur Gewißheit. Bei der Wahrscheinlichkeit muß immer ein Maßstab da sein, wonach ich sie schätzen kann. Dieser Maßstab ist die Gewißheit. Denn indem ich die unzureichenden Gründe mit den zureichenden vergleichen soll, muß ich wissen, wie viel zur Gewißheit gehört. Ein solcher Maßstab fällt aber bei der bloßen Scheinbarkeit weg, da ich hier die unzureichenden Gründe nicht mit den zureichenden, sondern nur mit den Gründen des Gegentheils vergleiche.",
     "pages": [
      {
       "p": 82,
       "i": 328
      }
     ],
     "aaEnd": 82,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s11-005",
     "kind": "text",
     "aa": 82,
     "text": "Die Momente der Wahrscheinlichkeit können entweder gleichartig oder ungleichartig sein. Sind sie gleichartig, wie im mathematischen Erkenntnisse: so müssen sie numerirt werden; sind sie ungleichartig, wie im philosophischen Erkenntnisse: so müssen sie ponderirt, d.i. nach der Wirkung geschätzt werden; diese aber nach der Überwältigung der Hindernisse im Gemüthe. Letztere geben kein Verhältniß zur Gewißheit, sondern nur einer Scheinbarkeit zur andern. Hieraus folgt: daß nur der Mathematiker das Verhältniß unzureichender Gründe zum zureichenden Grunde bestimmen kann, der Philosoph muß sich mit der Scheinbarkeit, einem bloß subjectiv und praktisch hinreichenden Fürwahrhalten begnügen. Denn im philosophischen Erkenntnisse läßt sich wegen der Ungleichartigkeit der Gründe die Wahrscheinlichkeit nicht schätzen; die Gewichte sind hier, so zu sagen, nicht alle gestempelt. Von der mathematischen Wahrscheinlichkeit kann man daher auch eigentlich nur sagen: daß sie mehr als die Hälfte der Gewißheit sei."
    },
    {
     "id": "jasche-s11-006",
     "kind": "text",
     "aa": 82,
     "text": "Man hat viel von einer Logik der Wahrscheinlichkeit (logica probabilium) geredet. Allein diese ist nicht möglich; denn wenn sich das Verhältniß der unzureichenden Gründe zum zureichenden nicht mathematisch erwägen läßt: so helfen alle Regeln nichts. Auch kann man überall keine allgemeinen Regeln der Wahrscheinlichkeit geben, außer daß der Irrthum nicht auf einerlei Seite treffen werde, sondern ein Grund der Einstimmung sein müsse im Object; ingleichen: daß, wenn von zwei entgegengesetzten Seiten in gleicher Menge und in gleichem Grade geirrt wird, im Mittel die Wahrheit sei.",
     "em": [
      [
       53,
       71
      ]
     ]
    },
    {
     "id": "jasche-s11-007",
     "kind": "rule",
     "aa": 82,
     "zone": 1
    },
    {
     "id": "jasche-s11-008",
     "kind": "text",
     "aa": 83,
     "text": "Zweifel ist ein Gegengrund oder ein bloßes Hinderniß des Fürwahrhaltens, das entweder subjectiv oder objectiv betrachtet werden kann. Subjectiv nämlich wird Zweifel bisweilen genommen als ein Zustand eines unentschlossenen Gemüths, und objectiv als die Erkenntniß der Unzulänglichkeit der Gründe zum Fürwahrhalten. In der letztern Rücksicht heißt er ein Einwurf, das ist: ein objectiver Grund, ein für wahr gehaltenes Erkenntniß für falsch zu halten.",
     "pages": [
      {
       "p": 83,
       "i": 0
      }
     ],
     "aaEnd": 83,
     "zone": 1
    },
    {
     "id": "jasche-s11-009",
     "kind": "text",
     "aa": 83,
     "text": "Ein bloß subjectiv gültiger Gegengrund des Fürwahrhaltens ist ein Scrupel. Beim Scrupel weiß man nicht: ob das Hinderniß des Fürwahrhaltens objectiv oder nur subjectiv, z.B. nur in der Neigung, der Gewohnheit u.dgl.m. gegründet sei. Man zweifelt, ohne sich über den Grund des Zweifelns deutlich und bestimmt erklären und ohne einsehen zu können: ob dieser Grund im Object selbst oder nur im Subjecte liege. Sollen nun solche Scrupel hinweggenommen werden können: so müssen sie zur Deutlichkeit und Bestimmtheit eines Einwurfs erhoben werden. Denn durch Einwürfe wird die Gewißheit zur Deutlichkeit und Vollständigkeit gebracht, und keiner kann von einer Sache gewiß sein, wenn nicht Gegengründe rege gemacht worden, wodurch bestimmt werden kann: wie weit man noch von der Gewißheit entfernt, oder wie nahe man noch derselben sei. Auch ist es nicht genug: daß ein jeder Zweifel bloß beantwortet werde, man muß ihn auch auflösen, das heißt: begreiflich machen, wie der Scrupel entstanden ist. Geschieht dieses nicht: so wird der Zweifel nur abgewiesen, aber nicht aufgehoben, der Same des Zweifelns bleibt dann immer noch übrig. In vielen Fällen können wir freilich nicht wissen: ob das Hinderniß des Fürwahrhaltens in uns nur subjective oder objective Gründe habe und also den Scrupel nicht heben durch Aufdeckung des Scheines, da wir unsere Erkenntnisse nicht immer mit dem Object, sondern oft nur unter einander selbst vergleichen können. Es ist daher Bescheidenheit, seine Einwürfe nur als Zweifel vorzutragen.",
     "align": "center",
     "zone": 1
    },
    {
     "id": "jasche-s11-010",
     "kind": "rule",
     "aa": 83,
     "zone": 2
    },
    {
     "id": "jasche-s11-011",
     "kind": "text",
     "aa": 83,
     "text": "Es giebt einen Grundsatz des Zweifelns, der in der Maxime besteht, Erkenntnisse in der Absicht zu behandeln, daß man sie ungewiß macht und die Unmöglichkeit zeigt, zur Gewißheit zu gelangen. Diese Methode des Philosophirens ist die skeptische Denkart oder der Skepticismus. Sie ist der dogmatischen Denkart oder dem Dogmatismus entgegengesetzt, der ein blindes Vertrauen ist auf das Vermögen der Vernunft, ohne Kritik sich a priori durch bloße Begriffe zu erweitern, bloß um des scheinbaren Gelingens willen.",
     "pages": [
      {
       "p": 84,
       "i": 345
      }
     ],
     "aaEnd": 84,
     "em": [
      [
       423,
       431
      ]
     ],
     "zone": 2,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s11-012",
     "kind": "text",
     "aa": 84,
     "text": "Beide Methoden sind, wenn sie allgemein werden, fehlerhaft. Denn es giebt viele Kenntnisse, in Ansehung deren wir nicht dogmatisch verfahren können, und von der andern Seite vertilgt der Skepticism, indem er auf alle behauptende Erkenntniß Verzicht thut, alle unsre Bemühungen zum Besitz einer Erkenntniß des Gewissen zu gelangen.",
     "zone": 2
    },
    {
     "id": "jasche-s11-013",
     "kind": "text",
     "aa": 84,
     "text": "So schädlich nun aber auch dieser Skepticism ist: so nützlich und zweckmäßig ist doch die skeptische Methode, wofern man darunter nichts weiter als nur die Art versteht, etwas als ungewiß zu behandeln und auf die höchste Ungewißheit zu bringen, in der Hoffnung, der Wahrheit auf diesem Wege auf die Spur zu kommen. Diese Methode ist also eigentlich eine bloße Suspension des Urtheilens. Sie ist dem kritischen Verfahren sehr nützlich, worunter diejenige Methode des Philosophirens zu verstehen ist, nach welcher man die Quellen seiner Behauptungen oder Einwürfe untersucht, und die Gründe, worauf dieselben beruhen; eine Methode, welche Hoffnung giebt, zur Gewißheit zu gelangen.",
     "zone": 2
    },
    {
     "id": "jasche-s11-014",
     "kind": "text",
     "aa": 84,
     "text": "In der Mathematik und Physik findet der Skepticism nicht statt. Nur diejenige Erkenntniß hat ihn veranlassen können, die weder mathematisch noch empirisch ist: die rein philosophische. Der absolute Skepticism giebt alles für Schein aus. Er unterscheidet also Schein von Wahrheit und muß mithin doch ein Merkmal des Unterschiedes haben, folglich ein Erkenntniß der Wahrheit voraussetzen, wodurch er sich selbst widerspricht.",
     "zone": 2
    },
    {
     "id": "jasche-s11-015",
     "kind": "rule",
     "aa": 84,
     "zone": 3
    },
    {
     "id": "jasche-s11-016",
     "kind": "text",
     "aa": 84,
     "text": "Wir bemerkten oben von der Wahrscheinlichkeit, daß sie eine bloße Annäherung zur Gewißheit sei. Dieses ist nun insbesondre auch der Fall mit den Hypothesen, durch die wir nie zu einer apodiktischen Gewißheit, sondern immer nur zu einem bald größern, bald geringern Grade der Wahrscheinlichkeit in unserm Erkenntnisse gelangen können.",
     "zone": 3
    },
    {
     "id": "jasche-s11-017",
     "kind": "text",
     "aa": 84,
     "text": "Eine Hypothese ist ein Fürwahrhalten des Urtheils von der Wahrheit eines Grundes um der Zulänglichkeit der Folgen willen, oder kürzer: das Fürwahrhalten einer Voraussetzung als Grundes.",
     "zone": 3
    },
    {
     "id": "jasche-s11-018",
     "kind": "text",
     "aa": 84,
     "text": "Alles Fürwahrhalten in Hypothesen gründet sich demnach darauf, daß die Voraussetzung, als Grund, hinreichend ist, andre Erkenntnisse, als Folgen, daraus zu erklären. Denn wir schließen hier von der Wahrheit der Folge auf die Wahrheit des Grundes. Da aber diese Schlußart, wie oben bereits bemerkt worden, nur dann ein hinreichendes Kriterium der Wahrheit giebt und zu einer apodiktischen Gewißheit führen kann, wenn alle möglichen Folgen eines angenommenen Grundes wahr sind: so erhellt hieraus, daß, da wir nie alle möglichen Folgen bestimmen können, Hypothesen immer Hypothesen bleiben, das heißt: Voraussetzungen, zu deren völliger Gewißheit wir nie gelangen können. Demohngeachtet kann die Wahrscheinlichkeit einer Hypothese doch wachsen und zu einem Analogon der Gewißheit sich erheben, wenn nämlich alle Folgen, die uns bis jetzt vorgekommen sind, aus dem vorausgesetzten Grunde sich erklären lassen. Denn in einem solchen Falle ist kein Grund da, warum wir nicht annehmen sollten, daß sich daraus alle möglichen Folgen werden erklären lassen. Wir ergeben uns also in diesem Falle der Hypothese, als wäre sie völlig gewiß, obgleich sie es nur durch Induction ist.",
     "pages": [
      {
       "p": 85,
       "i": 63
      }
     ],
     "aaEnd": 85,
     "zone": 3,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s11-019",
     "kind": "text",
     "aa": 85,
     "text": "Und etwas muß doch auch in jeder Hypothese apodiktisch gewiß sein, nämlich",
     "zone": 3
    },
    {
     "id": "jasche-s11-020",
     "kind": "text",
     "aa": 85,
     "text": "1) die Möglichkeit der Voraussetzung selbst. Wenn wir z.B. zu Erklärung der Erdbeben und Vulcane ein unterirdisches Feuer annehmen: so muß ein solches Feuer doch möglich sein, wenn auch eben nicht als ein flammender, doch als ein hitziger Körper. Aber zum Behuf gewisser andrer Erscheinungen die Erde zu einem Thiere zu machen, in welchem die Circulation der inneren Säfte die Wärme bewirke, heißt eine bloße Erdichtung und keine Hypothese aufstellen. Denn Wirklichkeiten lassen sich wohl erdichten, nicht aber Möglichkeiten; diese müssen gewiß sein.",
     "zone": 3
    },
    {
     "id": "jasche-s11-021",
     "kind": "text",
     "aa": 85,
     "text": "2) Die Consequenz.Aus dem angenommenen Grunde müssen die Folgen richtig herfließen; sonst wird aus der Hypothese eine bloße Chimäre.",
     "zone": 3
    },
    {
     "id": "jasche-s11-022",
     "kind": "text",
     "aa": 85,
     "text": "3) Die Einheit. Es ist ein wesentliches Erforderniß einer Hypothese, daß sie nur Eine sei und keiner Hülfshypothesen zu ihrer Unterstützung bedürfe. Müssen wir bei einer Hypothese schon mehrere andre zu Hülfe nehmen: so verliert sie dadurch sehr viel von ihrer Wahrscheinlichkeit. Denn je mehr Folgen aus einer Hypothese sich ableiten lassen, um so wahrscheinlicher ist sie, je weniger, desto unwahrscheinlicher. So reichte z.B. die Hypothese des Tycho de Brahe zu Erklärung vieler Erscheinungen nicht zu; er nahm daher zur Ergänzung mehrere neue Hypothesen an. Hier ist nun schon zu errathen, daß die angenommene Hypothese der ächte Grund nicht sein könne. Dagegen ist das Copernikanische System eine Hypothese, aus der sich Alles, was daraus erklärt werden soll, soweit es uns bis jetzt vorgekommen ist, erklären läßt. Wir brauchen hier keine Hülfshypothesen (hypotheses subsidiarias).",
     "pages": [
      {
       "p": 86,
       "i": 558
      }
     ],
     "aaEnd": 86,
     "em": [
      [
       453,
       455
      ],
      [
       862,
       885
      ]
     ],
     "zone": 3,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s11-023",
     "kind": "text",
     "aa": 86,
     "text": "Es giebt Wissenschaften, die keine Hypothesen erlauben, wie z.B. die Mathematik und Metaphysik. Aber in der Naturlehre sind sie nützlich und unentbehrlich.",
     "zone": 3
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s12",
   "part": "Einleitung",
   "title": "Anhang.",
   "heading": "[Einleitung.] / Anhang.",
   "blocks": [
    {
     "id": "jasche-s12-001",
     "kind": "text",
     "aa": 86,
     "text": "Von dem Unterschiede des theoretischen und des praktischen Erkenntnisses.",
     "align": "center"
    },
    {
     "id": "jasche-s12-002",
     "kind": "text",
     "aa": 86,
     "text": "Ein Erkenntniß wird praktisch genannt im Gegensatze des theoretischen, aber auch im Gegensatze des speculativen Erkenntnisses."
    },
    {
     "id": "jasche-s12-003",
     "kind": "text",
     "aa": 86,
     "text": "Praktische Erkenntnisse sind nämlich entweder:"
    },
    {
     "id": "jasche-s12-004",
     "kind": "text",
     "aa": 86,
     "text": "1) Imperative und in so fern den theoretischen Erkenntnissen entgegengesetzt; oder sie enthalten"
    },
    {
     "id": "jasche-s12-005",
     "kind": "text",
     "aa": 86,
     "text": "2) die Gründe zu möglichen Imperativen und werden in so fern den speculativen Erkenntnissen entgegengesetzt."
    },
    {
     "id": "jasche-s12-006",
     "kind": "text",
     "aa": 86,
     "text": "Unter Imperativ überhaupt ist jeder Satz zu verstehen, der eine mögliche freie Handlung aussagt, wodurch ein gewisser Zweck wirklich gemacht werden soll. Eine jede Erkenntniß also, die Imperative enthält, ist praktisch, und zwar im Gegensatze des theoretischen Erkenntnisses praktisch zu nennen. Denn theoretische Erkenntnisse sind solche, die da aussagen: nicht, was sein soll, sondern was ist, also kein Handeln, sondern ein Sein zu ihrem Object haben."
    },
    {
     "id": "jasche-s12-007",
     "kind": "text",
     "aa": 86,
     "text": "Setzen wir dagegen praktische Erkenntnisse den speculativen entgegen: so können sie auch theoretisch sein, wofern aus ihnen nur Imperative können abgeleitet werden. Sie sind alsdann, in dieser Rücksicht betrachtet, dem Gehalte nach (in potentia) oder objectiv praktisch. Unter speculativen Erkenntnissen nämlich verstehen wir solche, aus denen keine Regeln des Verhaltens können hergeleitet werden, oder die keine Gründe zu möglichen Imperativen enthalten. Solcher bloß speculativen Sätze giebt es z.B. in der Theologie die Menge. Dergleichen speculative Erkenntnisse sind also immer theoretisch, aber nicht umgekehrt ist jede theoretische Erkenntniß speculativ; sie kann, in einer andern Rücksicht betrachtet, auch zugleich praktisch sein.",
     "pages": [
      {
       "p": 87,
       "i": 618
      }
     ],
     "aaEnd": 87,
     "em": [
      [
       233,
       244
      ]
     ],
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s12-008",
     "kind": "text",
     "aa": 87,
     "text": "Alles läuft zuletzt auf das Praktische hinaus, und in dieser Tendenz alles Theoretischen und aller Speculation in Ansehung ihres Gebrauchs besteht der praktische Werth unsers Erkenntnisses. Dieser Werth ist aber nur alsdann ein unbedingter, wenn der Zweck, worauf der praktische Gebrauch des Erkenntnisses gerichtet ist, ein unbedingter Zweck ist. Der einige, unbedingte und letzte Zweck (Endzweck), worauf aller praktische Gebrauch unsers Erkenntnisses zuletzt sich beziehen muß, ist die Sittlichkeit, die wir um deswillen auch das schlechthin oder absolut Praktische nennen. Und derjenige Theil der Philosophie, der die Moralität zum Gegenstande hat, würde demnach praktische Philosophie κατ' ἐξοχην heißen müssen; obgleich jede andre philosophische Wissenschaft immer auch ihren praktischen Theil haben, d.h. von den aufgestellten Theorien eine Anweisung zum praktischen Gebrauche derselben für die Realisirung gewisser Zwecke enthalten kann.",
     "em": [
      [
       690,
       693
      ],
      [
       695,
       701
      ]
     ]
    },
    {
     "id": "jasche-s12-009",
     "kind": "rule",
     "aa": 87,
     "zone": 1
    }
   ],
   "running": "[Einleitung.]"
  },
  {
   "id": "s13",
   "part": "I. Allgemeine Elementarlehre",
   "title": "Erster Abschnitt. Von den Begriffen.",
   "heading": "Erster Abschnitt. Von den Begriffen. / [§§ 1 – 16]",
   "blocks": [
    {
     "id": "jasche-s13-001",
     "kind": "text",
     "aa": 91,
     "text": "Alle Erkenntnisse, das heißt: alle mit Bewußtsein auf ein Object bezogene Vorstellungen sind entweder Anschauungen oder Begriffe. Die Anschauung ist eine einzelne Vorstellung (repraesentatio singularis), der Begriff eine allgemeine (repraesentatio per notas communes) oder reflectirte Vorstellung (repraesentatio discursiva).",
     "pages": [
      {
       "p": 91,
       "i": 0
      }
     ],
     "aaEnd": 91,
     "em": [
      [
       176,
       201
      ],
      [
       233,
       266
      ],
      [
       298,
       323
      ]
     ],
     "para": 1
    },
    {
     "id": "jasche-s13-002",
     "kind": "text",
     "aa": 91,
     "text": "Die Erkenntniß durch Begriffe heißt das Denken (cognitio discursiva).",
     "em": [
      [
       48,
       67
      ]
     ],
     "para": 1
    },
    {
     "id": "jasche-s13-003",
     "kind": "rule",
     "aa": 91,
     "zone": 1,
     "para": 1
    },
    {
     "id": "jasche-s13-004",
     "kind": "text",
     "aa": 91,
     "text": "Anmerkung 1. Der Begriff ist der Anschauung entgegengesetzt, denn er ist eine allgemeine Vorstellung oder eine Vorstellung dessen, was mehreren Objecten gemein ist, also eine Vorstellung, sofern sie in verschiedenen enthalten sein kann.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 1,
     "zone": 1
    },
    {
     "id": "jasche-s13-005",
     "kind": "text",
     "aa": 91,
     "text": "2. Es ist eine bloße Tautologie, von allgemeinen oder gemeinsamen Begriffen zu reden, — ein Fehler, der sich auf eine unrichtige Eintheilung der Begriffe in allgemeine, besondre und einzelne gründet. Nicht die Begriffe selbst, nur ihr Gebrauch kann so eingetheilt werden.",
     "indent": 1,
     "para": 1,
     "zone": 1
    },
    {
     "id": "jasche-s13-006",
     "kind": "text",
     "aa": 91,
     "text": "An jedem Begriffe ist Materie und Form zu unterscheiden. Die Materie der Begriffe ist der Gegenstand, die Form derselben die Allgemeinheit.",
     "para": 2
    },
    {
     "id": "jasche-s13-007",
     "kind": "text",
     "aa": 92,
     "text": "Der Begriff ist entweder ein empirischer oder ein reiner Begriff (vel empiricus vel intellectualis). Ein reiner Begriff ist ein solcher, der nicht von der Erfahrung abgezogen ist, sondern auch dem Inhalte nach aus dem Verstande entspringt.",
     "em": [
      [
       66,
       83
      ],
      [
       84,
       98
      ]
     ],
     "para": 3
    },
    {
     "id": "jasche-s13-008",
     "kind": "text",
     "aa": 92,
     "text": "Die Idee ist ein Vernunftbegriff, deren Gegenstand gar nicht in der Erfahrung kann angetroffen werden.",
     "para": 3
    },
    {
     "id": "jasche-s13-009",
     "kind": "rule",
     "aa": 92,
     "zone": 1,
     "para": 3
    },
    {
     "id": "jasche-s13-010",
     "kind": "text",
     "aa": 92,
     "text": "Anmerkung 1. Der empirische Begriff entspringt aus den Sinnen durch Vergleichung der Gegenstände der Erfahrung und erhält durch den Verstand bloß die Form der Allgemeinheit. Die Realität dieser Begriffe beruht auf der wirklichen Erfahrung, woraus sie, ihrem Inhalte nach, geschöpft sind. Ob es aber reine Verstandesbegriffe (conceptus puri) gebe, die, als solche, unabhängig von aller Erfahrung lediglich aus dem Verstande entspringen, muß die Metaphysik untersuchen.",
     "em": [
      [
       325,
       339
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 3,
     "zone": 1
    },
    {
     "id": "jasche-s13-011",
     "kind": "text",
     "aa": 92,
     "text": "2. Die Vernunftbegriffe oder Ideen können gar nicht auf wirkliche Gegenstände führen, weil diese alle in einer möglichen Erfahrung enthalten sein müssen. Aber sie dienen doch dazu, durch Vernunft in Ansehung der Erfahrung und des Gebrauchs der Regeln derselben in der größten Vollkommenheit, den Verstand zu leiten oder auch zu zeigen, daß nicht alle mögliche Dinge Gegenstände der Erfahrung seien, und daß die Principien der Möglichkeit der letztern nicht von Dingen an sich selbst, auch nicht von Objecten der Erfahrung als Dingen an sich selbst gelten.",
     "indent": 1,
     "para": 3,
     "zone": 1
    },
    {
     "id": "jasche-s13-012",
     "kind": "text",
     "aa": 92,
     "text": "Die Idee enthält das Urbild des Gebrauchs des Verstandes, z.B. die Idee vom Weltganzen, welche nothwendig sein muß, nicht als constitutives Princip zum empirischen Verstandesgebrauche, sondern nur als regulatives Princip zum Behuf des durchgängigen Zusammenhanges unsers empirischen Verstandesgebrauchs. Sie ist also als ein nothwendiger Grundbegriff anzusehen, um die Verstandeshandlungen der Subordination entweder objectiv zu vollenden oder als unbegrenzt anzusehen. — Auch läßt sich die Idee nicht durch Zusammensetzung erhalten, denn das Ganze ist eher als der Theil. Indessen giebt es doch Ideen, zu denen eine Annäherung stattfindet. Dieses ist der Fall mit den mathematischen oder den Ideen der mathematischen Erzeugung eines Ganzen, die sich wesentlich von den dynamischen unterscheiden, welche allen concreten Begriffen gänzlich heterogen sind, weil das Ganze nicht der Größe (wie bei den mathematischen), sondern der Art nach von den concreten Begriffen verschieden ist.",
     "pages": [
      {
       "p": 93,
       "i": 849
      }
     ],
     "aaEnd": 93,
     "para": 3,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s13-013",
     "kind": "text",
     "aa": 93,
     "text": "Man kann keiner theoretischen Idee objective Realität verschaffen oder dieselbe beweisen, als nur der Idee von der Freiheit, und zwar, weil diese die Bedingung des moralischen Gesetzes ist, dessen Realität ein Axiom ist. Die Realität der Idee von Gott kann nur durch diese und also nur in praktischer Absicht, d.i. so zu handeln, als ob ein Gott sei, also nur für diese Absicht bewiesen werden.",
     "para": 3,
     "zone": 1
    },
    {
     "id": "jasche-s13-014",
     "kind": "text",
     "aa": 93,
     "text": "In allen Wissenschaften, vornehmlich denen der Vernunft, ist die Idee der Wissenschaft der allgemeine Abriß oder Umriß derselben, also der Umfang aller Kenntnisse, die zu ihr gehören. Eine solche Idee des Ganzen — das Erste, worauf man bei einer Wissenschaft zu sehen und was man zu suchen hat, ist architektonisch, wie z.B. die Idee der Rechtswissenschaft.",
     "para": 3,
     "zone": 1
    },
    {
     "id": "jasche-s13-015",
     "kind": "text",
     "aa": 93,
     "text": "Die Idee der Menschheit, die Idee einer vollkommenen Republik, eines glückseligen Lebens u.dgl.m. fehlt den meisten Menschen. Viele Menschen haben keine Idee von dem, was sie wollen, daher verfahren sie nach Instinct und Autorität.",
     "para": 3,
     "zone": 1
    },
    {
     "id": "jasche-s13-016",
     "kind": "text",
     "aa": 93,
     "text": "Alle Begriffe sind der Materie nach entweder gegebene (conceptus dati) oder gemachte Begriffe (conceptus factitii). Die erstern sind entweder a priori oder a posteriori gegeben.",
     "em": [
      [
       55,
       69
      ],
      [
       95,
       113
      ],
      [
       142,
       150
      ],
      [
       156,
       168
      ]
     ],
     "para": 4
    },
    {
     "id": "jasche-s13-017",
     "kind": "text",
     "aa": 93,
     "text": "Alle empirisch oder a posteriori gegebenen Begriffe heißen Erfahrungsbegriffe, a priori gegebene, Notionen.",
     "em": [
      [
       20,
       32
      ],
      [
       79,
       87
      ]
     ],
     "para": 4
    },
    {
     "id": "jasche-s13-018",
     "kind": "rule",
     "aa": 93,
     "zone": 1,
     "para": 4
    },
    {
     "id": "jasche-s13-019",
     "kind": "text",
     "aa": 93,
     "text": "Anmerkung. Die Form eines Begriffs als einer discursiven Vorstellung ist jederzeit gemacht.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 4,
     "zone": 1
    },
    {
     "id": "jasche-s13-020",
     "kind": "text",
     "aa": 93,
     "text": "Der Ursprung der Begriffe der bloßen Form nach beruht auf Reflexion und auf der Abstraction von dem Unterschiede der Dinge, die durch eine gewisse Vorstellung bezeichnet sind. Und es entsteht also hier die Frage: Welche Handlungen des Verstandes einen Begriff ausmachen oder — welches dasselbe ist — zu Erzeugung eines Begriffes aus gegebenen Vorstellungen gehören?",
     "para": 5
    },
    {
     "id": "jasche-s13-021",
     "kind": "rule",
     "aa": 93,
     "zone": 1,
     "para": 5
    },
    {
     "id": "jasche-s13-022",
     "kind": "text",
     "aa": 94,
     "text": "Anmerkung 1. Da die allgemeine Logik von allem Inhalte des Erkenntnisses durch Begriffe, oder von aller Materie des Denkens abstrahirt: so kann sie den Begriff nur in Rücksicht seiner Form, d.h. nur subjectivisch erwägen; nicht wie er durch ein Merkmal ein Object bestimmt, sondern nur, wie er auf mehrere Objecte kann bezogen werden. Die allgemeine Logik hat also nicht die Quelle der Begriffe zu untersuchen; nicht wie Begriffe als Vorstellungen entspringen, sondern lediglich, wie gegebene Vorstellungen im Denken zu Begriffen werden; diese Begriffe mögen übrigens etwas enthalten, was von der Erfahrung hergenommen ist, oder auch etwas Erdichtetes, oder von der Natur des Verstandes Entlehntes. — Dieser logische Ursprung der Begriffe — der Ursprung ihrer bloßen Form nach — besteht in der Reflexion, wodurch eine mehreren Objecten gemeine Vorstellung (conceptus communis) entsteht, als diejenige Form, die zur Urtheilskraft erfordert wird. Also wird in der Logik bloß der Unterschied der Reflexion an den Begriffen betrachtet.",
     "pages": [
      {
       "p": 94,
       "i": 0
      }
     ],
     "aaEnd": 94,
     "em": [
      [
       857,
       875
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 5,
     "zone": 1
    },
    {
     "id": "jasche-s13-023",
     "kind": "text",
     "aa": 94,
     "text": "2. Der Ursprung der Begriffe in Ansehung ihrer Materie, nach welcher ein Begriff entweder empirisch oder willkürlich oder intellectuell ist, wird in der Metaphysik erwogen.",
     "indent": 1,
     "para": 5,
     "zone": 1
    },
    {
     "id": "jasche-s13-024",
     "kind": "text",
     "aa": 94,
     "text": "Die logischen Verstandes-Actus, wodurch Begriffe ihrer Form nach erzeugt werden, sind:",
     "para": 6
    },
    {
     "id": "jasche-s13-025",
     "kind": "text",
     "aa": 94,
     "text": "1) die Comparation, d.i. die Vergleichung der Vorstellungen unter einander im Verhältnisse zur Einheit des Bewußtseins;",
     "indent": 2,
     "para": 6
    },
    {
     "id": "jasche-s13-026",
     "kind": "text",
     "aa": 94,
     "text": "2) die Reflexion, d.i. die Überlegung, wie verschiedene Vorstellungen in Einem Bewußtsein begriffen sein können; und endlich",
     "indent": 2,
     "para": 6
    },
    {
     "id": "jasche-s13-027",
     "kind": "text",
     "aa": 94,
     "text": "3) Die Abstraction oder die Absonderung alles Übrigen, worin die gegebenen Vorstellungen sich unterscheiden.",
     "indent": 2,
     "para": 6
    },
    {
     "id": "jasche-s13-028",
     "kind": "rule",
     "aa": 94,
     "zone": 1,
     "para": 6
    },
    {
     "id": "jasche-s13-029",
     "kind": "text",
     "aa": 94,
     "text": "Anmerkung 1. Um aus Vorstellungen Begriffe zu machen, muß man also compariren, reflectiren und abstrahiren können, denn diese drei logischen Operationen des Verstandes sind die wesentlichen und allgemeinen Bedingungen zu Erzeugung eines jeden Begriffs überhaupt. Ich sehe z.B. eine Fichte, eine Weide und eine Linde. Indem ich diese Gegenstände zuvörderst unter einander vergleiche, bemerke ich, daß sie von einander verschieden sind in Ansehung des Stammes, der Äste, der Blätter u.dgl.m.; nun reflectire ich aber hiernächst nur auf das, was sie unter sich gemein haben, den Stamm, die Äste, die Blätter selbst und abstrahire von der Größe, der Figur derselben u.s.w.; so bekomme ich einen Begriff vom Baume.",
     "pages": [
      {
       "p": 95,
       "i": 587
      }
     ],
     "aaEnd": 95,
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 6,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s13-030",
     "kind": "text",
     "aa": 95,
     "text": "2. Man braucht in der Logik den Ausdruck Abstraction nicht immer richtig. Wir müssen nicht sagen: Etwas abstrahiren (abstrahere aliquid), sondern von Etwas abstrahiren (abstrahere ab aliquo). Wenn ich z.B. beim Scharlach-Tuche nur die rothe Farbe denke: so abstrahire ich vom Tuche, abstrahire ich auch von diesem und denke mir den Scharlach als einen materiellen Stoff überhaupt: so abstrahire ich von noch mehreren Bestimmungen, und mein Begriff ist dadurch noch abstracter geworden. Denn je mehrere Unterschiede der Dinge aus einem Begriffe weggelassen sind oder, von je mehreren Bestimmungen in demselben abstrahirt worden: desto abstracter ist der Begriff. Abstracte Begriffe sollte man daher eigentlich abstrahirende (conceptus abstrahentes) nennen, d.h. solche, in denen mehrere Abstractionen vorkommen. So ist z.B. der Begriff Körper eigentlich kein abstracter Begriff, denn vom Körper selbst kann ich ja nicht abstrahiren, ich würde sonst nicht den Begriff von ihm haben. Aber wohl muß ich von der Größe, der Farbe, der Härte oder Flüssigkeit, kurz: von allen speciellen Bestimmungen besondrer Körper abstrahiren. Der abstracteste Begriff ist der, welcher mit keinem von ihm verschiedenen etwas gemein hat. Dieses ist der Begriff von Etwas, denn das von ihm Verschiedene ist Nichts, und hat also mit dem Etwas nichts gemein.",
     "em": [
      [
       117,
       135
      ],
      [
       169,
       189
      ],
      [
       724,
       746
      ]
     ],
     "indent": 1,
     "para": 6,
     "zone": 1
    },
    {
     "id": "jasche-s13-031",
     "kind": "text",
     "aa": 95,
     "text": "3. Die Abstraction ist nur die negative Bedingung, unter welcher allgemeingültige Vorstellungen erzeugt werden können, die positive ist die Comparation und Reflexion. Denn durchs Abstrahiren wird kein Begriff, die Abstraction vollendet ihn nur und schließt ihn in seine bestimmten Grenzen ein.",
     "indent": 1,
     "para": 6,
     "zone": 1
    },
    {
     "id": "jasche-s13-032",
     "kind": "text",
     "aa": 95,
     "text": "Ein jeder Begriff, als Theilbegriff, ist in der Vorstellung der Dinge enthalten, als Erkenntnißgrund, d.i. als Merkmal sind diese Dinge unter ihm enthalten. In der erstern Rücksicht hat jeder Begriff einen Inhalt, in der andern einen Umfang.",
     "para": 7
    },
    {
     "id": "jasche-s13-033",
     "kind": "text",
     "aa": 95,
     "text": "Inhalt und Umfang eines Begriffes stehen gegen einander in umgekehrtem Verhältnisse. Je mehr nämlich ein Begriff unter sich enthält, desto weniger enthält er in sich und umgekehrt.",
     "para": 7
    },
    {
     "id": "jasche-s13-034",
     "kind": "rule",
     "aa": 95,
     "zone": 1,
     "para": 7
    },
    {
     "id": "jasche-s13-035",
     "kind": "text",
     "aa": 95,
     "text": "Anmerkung. Die Allgemeinheit oder Allgemeingültigkeit des Begriffes beruht nicht darauf, daß der Begriff ein Theilbegriff, sondern daß er ein Erkenntnißgrund ist.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 7,
     "zone": 1
    },
    {
     "id": "jasche-s13-036",
     "kind": "text",
     "aa": 96,
     "text": "Der Umfang oder die Sphäre eines Begriffes ist um so größer, je mehr Dinge unter ihm stehen und durch ihn gedacht werden können.",
     "para": 8
    },
    {
     "id": "jasche-s13-037",
     "kind": "rule",
     "aa": 96,
     "zone": 1,
     "para": 8
    },
    {
     "id": "jasche-s13-038",
     "kind": "text",
     "aa": 96,
     "text": "Anmerkung. So wie man von einem Grunde überhaupt sagt, daß er die Folge unter sich enthalte: so kann man auch von dem Begriffe sagen, daß er als Erkenntnißgrund alle diejenigen Dinge unter sich enthalte, von denen er abstrahirt worden, z.B. der Begriff Metall das Gold, Silber, Kupfer u.s.w. Denn da jeder Begriff, als eine allgemeingültige Vorstellung, dasjenige enthält, was mehreren Vorstellungen von verschiedenen Dingen gemein ist: so können alle diese Dinge, die in so fern unter ihm enthalten sind, durch ihn vorgestellt werden. Und eben dies macht die Brauchbarkeit eines Begriffs aus. Je mehr Dinge nun durch einen Begriff können vorgestellt werden: desto größer ist die Sphäre desselben. So hat z.B. der Begriff Körper einen größeren Umfang als der Begriff Metall.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 8,
     "zone": 1
    },
    {
     "id": "jasche-s13-039",
     "kind": "text",
     "aa": 96,
     "text": "Begriffe heißen höhere (conceptus superiores), sofern sie andre Begriffe unter sich haben, die im Verhältnisse zu ihnen niedere Begriffe genannt werden. Ein Merkmal vom Merkmal — ein entferntes Merkmal — ist ein höherer Begriff, der Begriff in Beziehung auf ein entferntes Merkmal, ein niederer.",
     "em": [
      [
       24,
       44
      ]
     ],
     "para": 9
    },
    {
     "id": "jasche-s13-040",
     "kind": "rule",
     "aa": 96,
     "zone": 1,
     "para": 9
    },
    {
     "id": "jasche-s13-041",
     "kind": "text",
     "aa": 96,
     "text": "Anmerkung. Da höhere und niedere Begriffe nur beziehungsweise (respective) so heißen: so kann also Ein und derselbe Begriff in verschiedenen Beziehungen, zugleich ein höherer und ein niederer sein. So ist z.B. der Begriff Mensch in Beziehung auf den Begriff Neger ein höherer, in Beziehung auf den Begriff Thier aber ein niederer.",
     "em": [
      [
       63,
       73
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 9,
     "zone": 1
    },
    {
     "id": "jasche-s13-042",
     "kind": "text",
     "aa": 96,
     "text": "Der höhere Begriff heißt in Rücksicht seines niederen Gattung (genus), der niedere Begriff in Ansehung seines höheren Art (species).",
     "em": [
      [
       63,
       68
      ],
      [
       123,
       130
      ]
     ],
     "para": 10
    },
    {
     "id": "jasche-s13-043",
     "kind": "text",
     "aa": 97,
     "text": "So wie höhere und niedere, so sind also auch Gattungs- und Artbegriffe nicht ihrer Natur nach, sondern nur in Ansehung ihres Verhältnisses zu einander (termini a quo oder ad quod) in der logischen Subordination unterschieden.",
     "pages": [
      {
       "p": 97,
       "i": 0
      }
     ],
     "aaEnd": 97,
     "em": [
      [
       152,
       165
      ],
      [
       171,
       178
      ]
     ],
     "para": 10
    },
    {
     "id": "jasche-s13-044",
     "kind": "text",
     "aa": 97,
     "text": "Die höchste Gattung ist die, welche keine Art ist (genus summum non est species), sowie die niedrigste Art die, welche keine Gattung ist (species, quae non est genus, est infima).",
     "em": [
      [
       51,
       79
      ],
      [
       138,
       170
      ],
      [
       171,
       177
      ]
     ],
     "para": 11
    },
    {
     "id": "jasche-s13-045",
     "kind": "text",
     "aa": 97,
     "text": "Dem Gesetze der Stetigkeit zufolge kann es indessen weder eine niedrigste, noch eine nächste Art geben.",
     "para": 11
    },
    {
     "id": "jasche-s13-046",
     "kind": "rule",
     "aa": 97,
     "zone": 1,
     "para": 11
    },
    {
     "id": "jasche-s13-047",
     "kind": "text",
     "aa": 97,
     "text": "Anmerkung. Denken wir uns eine Reihe von mehreren einander subordinirten Begriffen, z.B. Eisen, Metall, Körper, Substanz, Ding: so können wir hier immer höhere Gattungen erhalten, — denn eine jede Species ist immer zugleich als Genus zu betrachten in Ansehung ihres niederen Begriffes, z.B. der Begriff Gelehrter in Ansehung des Begriffs Philosoph — bis wir endlich auf ein Genus kommen, das nicht wieder Species sein kann. Und zu einem solchen müssen wir zuletzt gelangen können, weil es doch am Ende einen höchsten Begriff (conceptum summum) geben muß, von dem sich, als solchem nichts weiter abstrahiren läßt, ohne daß der ganze Begriff verschwindet. — Aber einen niedrigsten Begriff (conceptum infimum) oder eine niedrigste Art, worunter kein anderer mehr enthalten wäre, giebt es in der Reihe der Arten und Gattungen nicht, weil ein solcher sich unmöglich bestimmen läßt. Denn haben wir auch einen Begriff, den wir unmittelbar auf Individuen anwenden: so können in Ansehung desselben doch noch specifische Unterschiede vorhanden sein, die wir entweder nicht bemerken, oder die wir aus der Acht lassen. Nur comparativ für den Gebrauch giebt es niedrigste Begriffe, die gleichsam durch Convention diese Bedeutung erhalten haben, sofern man übereingekommen ist, hierbei nicht tiefer zu gehen.",
     "em": [
      [
       526,
       542
      ],
      [
       688,
       705
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 11,
     "zone": 1
    },
    {
     "id": "jasche-s13-048",
     "kind": "text",
     "aa": 97,
     "text": "In Absicht auf die Bestimmung der Art- und Gattungsbegriffe gilt also folgendes allgemeine Gesetz: Es giebt ein Genus, das nicht mehr Species sein kann, aber es giebt keine Species, die nicht wieder sollte Genus sein können.",
     "para": 11,
     "zone": 1
    },
    {
     "id": "jasche-s13-049",
     "kind": "text",
     "aa": 98,
     "text": "Der höhere Begriff heißt auch ein weiterer; der niedere ein engerer Begriff.",
     "para": 12
    },
    {
     "id": "jasche-s13-050",
     "kind": "text",
     "aa": 98,
     "text": "Begriffe, die einerlei Sphäre haben, werden Wechselbegriffe (conceptus reciproci) genannt.",
     "em": [
      [
       61,
       80
      ]
     ],
     "para": 12
    },
    {
     "id": "jasche-s13-051",
     "kind": "text",
     "aa": 98,
     "text": "Der niedere Begriff ist nicht in dem höhern enthalten, denn er enthält mehr in sich als der höhere; aber er ist doch unter demselben enthalten, weil der höhere den Erkenntnißgrund des niederen enthält.",
     "para": 13
    },
    {
     "id": "jasche-s13-052",
     "kind": "text",
     "aa": 98,
     "text": "Ferner ist ein Begriff nicht weiter als der andre, darum weil er mehr unter sich enthält — denn das kann man nicht wissen ‑, sondern sofern er den andern Begriff, und außer demselben noch mehr, unter sich enthält.",
     "para": 13
    },
    {
     "id": "jasche-s13-053",
     "kind": "text",
     "aa": 98,
     "text": "In Ansehung des logischen Umfanges der Begriffe gelten folgende allgemeine Regeln:",
     "para": 14
    },
    {
     "id": "jasche-s13-054",
     "kind": "text",
     "aa": 98,
     "text": "1) Was den höhern Begriffen zukommt oder widerspricht, das kommt auch zu oder widerspricht allen niedrigern Begriffen, die unter jenen höhern enthalten sind; und",
     "indent": 2,
     "para": 14
    },
    {
     "id": "jasche-s13-055",
     "kind": "text",
     "aa": 98,
     "text": "2) umgekehrt: Was allen niedrigern Begriffen zukommt oder widerspricht, das kommt auch zu oder widerspricht ihrem höhern Begriffe.",
     "indent": 2,
     "para": 14
    },
    {
     "id": "jasche-s13-056",
     "kind": "rule",
     "aa": 98,
     "zone": 1,
     "para": 14
    },
    {
     "id": "jasche-s13-057",
     "kind": "text",
     "aa": 98,
     "text": "Anmerkung. Weil das, worin Dinge übereinkommen, aus ihren allgemeinen Eigenschaften, und das, worin sie von einander verschieden sind, aus ihren besondern Eigenschaften herfließt, so kann man nicht schließen: Was einem niedrigern Begriffe zukommt oder widerspricht, das kommt auch zu oder widerspricht andern niedrigeren Begriffen, die mit jenem zu Einem höhern Begriffe gehören. So kann man z.B. nicht schließen: Was dem Menschen nicht zukommt, das kommt auch den Engeln nicht zu.",
     "pages": [
      {
       "p": 99,
       "i": 371
      }
     ],
     "aaEnd": 99,
     "indent": 1,
     "anm": "Anmerkung",
     "para": 14,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s13-058",
     "kind": "text",
     "aa": 99,
     "text": "Durch fortgesetzte logische Abstraction entstehen immer höhere, so wie dagegen durch fortgesetzte logische Determination immer niedrigere Begriffe. Die größte mögliche Abstraction giebt den höchsten oder abstractesten Begriff — den, von dem sich keine Bestimmung weiter wegdenken läßt. Die höchste vollendete Determination würde einen durchgängig bestimmten Begriff (conceptum omnimode determinatum) d.i. einen solchen geben, zu dem sich keine weitere Bestimmung mehr hinzu denken ließe.",
     "em": [
      [
       367,
       398
      ]
     ],
     "para": 15
    },
    {
     "id": "jasche-s13-059",
     "kind": "rule",
     "aa": 99,
     "zone": 1,
     "para": 15
    },
    {
     "id": "jasche-s13-060",
     "kind": "text",
     "aa": 99,
     "text": "Anmerkung. Da nur einzelne Dinge oder Individuen durchgängig bestimmt sind: so kann es auch nur durchgängig bestimmte Erkenntnisse als Anschauungen, nicht aber als Begriffe, geben; in Ansehung der letztern kann die logische Bestimmung nie als vollendet angesehen werden (§. 11. Anm.).",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 15,
     "zone": 1
    },
    {
     "id": "jasche-s13-061",
     "kind": "text",
     "aa": 99,
     "text": "Ein jeder Begriff kann allgemein und besonders (in abstracto und in concreto) gebraucht werden. In abstracto wird der niedere Begriff in Ansehung seines höhern, in concreto der höhere Begriff in Ansehung seines niederen gebraucht.",
     "em": [
      [
       48,
       60
      ],
      [
       65,
       76
      ],
      [
       96,
       108
      ],
      [
       161,
       172
      ]
     ],
     "para": 16
    },
    {
     "id": "jasche-s13-062",
     "kind": "rule",
     "aa": 99,
     "zone": 1,
     "para": 16
    },
    {
     "id": "jasche-s13-063",
     "kind": "text",
     "aa": 99,
     "text": "Anmerkung 1. Die Ausdrücke des Abstracten und Concreten beziehen sich also nicht sowohl auf die Begriffe an sich selbst — denn jeder Begriff ist ein abstracter Begriff — als vielmehr nur auf ihren Gebrauch. Und dieser Gebrauch kann hinwiederum verschiedene Grade haben, — je nachdem man einen Begriff bald mehr bald weniger abstract oder concret behandelt, d.h. bald mehr bald weniger Bestimmungen entweder wegläßt oder hinzusetzt. Durch den abstracten",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 16,
     "zone": 1,
     "maybeContinues": true
    },
    {
     "id": "jasche-s13-064",
     "kind": "text",
     "aa": 100,
     "text": "Gebrauch kommt ein Begriff der höchsten Gattung, durch den concreten Gebrauch dagegen dem Individuum näher.",
     "pages": [
      {
       "p": 100,
       "i": 0
      }
     ],
     "aaEnd": 100,
     "para": 16,
     "zone": 1
    },
    {
     "id": "jasche-s13-065",
     "kind": "text",
     "aa": 100,
     "text": "2. Welcher Gebrauch der Begriffe, der abstracte oder der concrete, hat vor dem andern einen Vorzug? Hierüber läßt sich nichts entscheiden. Der Werth des einen ist nicht geringer zu schätzen, als der Werth des andern. Durch sehr abstracte Begriffe erkennen wir an vielen Dingen wenig, durch sehr concrete Begriffe erkennen wir an wenigen Dingen viel; was wir also auf der einen Seite gewinnen, das verlieren wir wieder auf der andern. Ein Begriff, der eine große Sphäre hat, ist in so fern sehr brauchbar, als man ihn auf viele Dinge anwenden kann; aber es ist auch dafür um so weniger in ihm enthalten. In dem Begriffe Substanz denke ich z.B. nicht so viel als in dem Begriffe Kreide.",
     "indent": 1,
     "para": 16,
     "zone": 1
    },
    {
     "id": "jasche-s13-066",
     "kind": "text",
     "aa": 100,
     "text": "3. Das Verhältniß zu treffen zwischen der Vorstellung in abstracto und in concreto in derselben Erkenntniß, also der Begriffe und ihrer Darstellung, wodurch das Maximum der Erkenntniß, dem Umfange sowohl als dem Inhalte nach, erreicht wird, darin besteht die Kunst der Popularität.",
     "em": [
      [
       54,
       66
      ],
      [
       71,
       82
      ]
     ],
     "indent": 1,
     "para": 16,
     "zone": 1
    },
    {
     "id": "jasche-s13-067",
     "kind": "rule",
     "aa": 100,
     "zone": 2,
     "para": 16
    }
   ],
   "range": {
    "from": 1,
    "to": 16,
    "raw": "[§§ 1 – 16]"
   }
  },
  {
   "id": "s14",
   "part": "I. Allgemeine Elementarlehre",
   "title": "Zweiter Abschnitt. Von den Urtheilen.",
   "heading": "Zweiter Abschnitt. Von den Urtheilen. / [§§ 17 — 40]",
   "blocks": [
    {
     "id": "jasche-s14-001",
     "kind": "text",
     "aa": 101,
     "text": "Ein Urtheil ist die Vorstellung der Einheit des Bewußtseins verschiedener Vorstellungen oder die Vorstellung des Verhältnisses derselben, sofern sie einen Begriff ausmachen.",
     "pages": [
      {
       "p": 101,
       "i": 0
      }
     ],
     "aaEnd": 101,
     "para": 17
    },
    {
     "id": "jasche-s14-002",
     "kind": "text",
     "aa": 101,
     "text": "Zu jedem Urtheile gehören als wesentliche Bestandstücke desselben Materie und Form. In den gegebenen, zur Einheit des Bewußtseins im Urtheile verbundenen Erkenntnissen besteht die Materie, in der Bestimmung der Art und Weise, wie die verschiedenen Vorstellungen, als solche, zu Einem Bewußtsein gehören, die Form des Urtheils.",
     "para": 18
    },
    {
     "id": "jasche-s14-003",
     "kind": "text",
     "aa": 101,
     "text": "Da die Logik von allem realen oder objectiven Unterschiede des Erkenntnisses abstrahirt: so kann sie sich mit der Materie der Urtheile so wenig als mit dem Inhalte der Begriffe beschäftigen. Sie hat also lediglich den Unterschied der Urtheile in Ansehung ihrer bloßen Form in Erwägung zu ziehen.",
     "para": 19
    },
    {
     "id": "jasche-s14-004",
     "kind": "text",
     "aa": 102,
     "text": "Die Unterschiede der Urtheile in Rücksicht auf ihre Form lassen sich auf die vier Hauptmomente der Quantität, Qualität, Relation und Modalität zurückführen, in Ansehung deren eben so viele verschiedene Arten von Urtheilen bestimmt sind.",
     "para": 20
    },
    {
     "id": "jasche-s14-005",
     "kind": "text",
     "aa": 102,
     "text": "Der Quantität nach sind die Urtheile entweder allgemeine oder besondre oder einzelne, je nachdem das Subject im Urtheile entweder ganz von der Notion des Prädicats ein- oder ausgeschlossen, oder davon zum Theil nur ein- zum Theil ausgeschlossen ist. Im allgemeinen Urtheile wird die Sphäre eines Begriffs ganz innerhalb der Sphäre eines andern beschlossen; im particularen wird ein Theil des erstern unter die Sphäre des andern, und im einzelnen Urtheile endlich wird ein Begriff, der gar keine Sphäre hat, mithin bloß als Theil unter die Sphäre eines andern beschlossen.",
     "para": 21
    },
    {
     "id": "jasche-s14-006",
     "kind": "rule",
     "aa": 102,
     "zone": 1,
     "para": 21
    },
    {
     "id": "jasche-s14-007",
     "kind": "text",
     "aa": 102,
     "text": "Anmerkung 1. Die einzelnen Urtheile sind der logischen Form nach im Gebrauche den allgemeinen gleich zu schätzen, denn bei beiden gilt das Prädicat vom Subject ohne Ausnahme. In dem einzelnen Satze z.B.: Cajus ist sterblich, kann auch so wenig eine Ausnahme stattfinden als in dem allgemeinen: Alle Menschen sind sterblich. Denn es giebt nur Einen Cajus.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-008",
     "kind": "text",
     "aa": 102,
     "text": "2. In Absicht auf die Allgemeinheit eines Erkenntnisses findet ein realer Unterschied statt zwischen generalen und universalen Sätzen, der aber freilich die Logik nichts angeht. Generale Sätze nämlich sind solche, die bloß etwas von dem Allgemeinen gewisser Gegenstände und folglich nicht hinreichende Bedingungen der Subsumtion enthalten, z.B. der Satz: man muß die Beweise gründlich machen. Universale Sätze sind die, welche von einem Gegenstande etwas allgemein behaupten.",
     "indent": 1,
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-009",
     "kind": "text",
     "aa": 102,
     "text": "3. Allgemeine Regeln sind entweder analytisch oder synthetisch allgemein. Jene abstrahiren von den Verschiedenheiten, diese attendiren auf die Unterschiede und bestimmen folglich doch auch in Ansehung ihrer. Je einfacher ein Object gedacht wird, desto eher ist analytische Allgemeinheit zufolge eines Begriffs möglich.",
     "pages": [
      {
       "p": 103,
       "i": 225
      }
     ],
     "aaEnd": 103,
     "indent": 1,
     "para": 21,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s14-010",
     "kind": "text",
     "aa": 103,
     "text": "4. Wenn allgemeine Sätze, ohne sie in concreto zu kennen, in ihrer Allgemeinheit nicht können eingesehen werden, so können sie nicht zur Richtschnur dienen und also nicht heuristisch in der Anwendung gelten, sondern sind nur Aufgaben zu Untersuchung der allgemeinen Gründe zu dem, was in besondern Fällen zuerst bekannt worden. Der Satz zum Beispiel: Wer kein Interesse hat zu lügen und die Wahrheit weiß, der spricht Wahrheit, — dieser Satz ist in seiner Allgemeinheit nicht einzusehen, weil wir die Einschränkung auf die Bedingung des Uninteressirten nur durch Erfahrung kennen, nämlich daß Menschen aus Interesse lügen können, welches daher kommt, daß sie nicht fest an der Moralität hängen. Eine Beobachtung, die uns die Schwäche der menschlichen Natur kennen lehrt.",
     "em": [
      [
       35,
       46
      ]
     ],
     "indent": 1,
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-011",
     "kind": "text",
     "aa": 103,
     "text": "5. Von den besondern Urtheilen ist zu merken, daß, wenn sie durch die Vernunft sollen können eingesehen werden und also eine rationale, nicht bloß intellectuale (abstrahirte) Form haben: so muß das Subject ein weiterer Begriff (conceptus latior) als das Prädicat sein. Es sei das Prädicat jederzeit = O, das Subject ￼, so ist",
     "em": [
      [
       228,
       244
      ]
     ],
     "indent": 1,
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-012",
     "kind": "text",
     "aa": 103,
     "text": "{￼}",
     "align": "center",
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-013",
     "kind": "text",
     "aa": 103,
     "text": "ein besonderes Urtheil, denn einiges unter a Gehörige ist b, einiges nicht b, — das folgt aus der Vernunft. Aber es sei",
     "em": [
      [
       43,
       44
      ],
      [
       58,
       59
      ],
      [
       75,
       76
      ]
     ],
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-014",
     "kind": "text",
     "aa": 103,
     "text": "{￼}",
     "align": "center",
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-015",
     "kind": "text",
     "aa": 103,
     "text": "so kann zum wenigsten alles a unter b enthalten sein, wenn es kleiner ist, aber nicht wenn es größer ist, also ist es nur zufälliger Weise particular.",
     "em": [
      [
       28,
       29
      ],
      [
       36,
       37
      ]
     ],
     "para": 21,
     "zone": 1
    },
    {
     "id": "jasche-s14-016",
     "kind": "text",
     "aa": 103,
     "text": "Der Qualität nach sind die Urtheile entweder bejahende oder verneinende oder unendliche. Im bejahenden Urtheile wird das Subject unter der Sphäre eines Prädicats gedacht, im verneinenden wird es außer der Sphäre des letztern gesetzt, und im unendlichen wird es in die Sphäre eines Begriffs, die außerhalb der Sphäre eines andern liegt, gesetzt.",
     "pages": [
      {
       "p": 104,
       "i": 258
      }
     ],
     "aaEnd": 104,
     "para": 22,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s14-017",
     "kind": "rule",
     "aa": 104,
     "zone": 1,
     "para": 22
    },
    {
     "id": "jasche-s14-018",
     "kind": "text",
     "aa": 104,
     "text": "Anmerkung 1. Das unendliche Urtheil zeigt nicht bloß an, daß ein Subject unter der Sphäre eines Prädicats nicht enthalten sei, sondern daß es außer der Sphäre desselben in der unendlichen Sphäre irgendwo liege; folglich stellt dieses Urtheil die Sphäre des Prädicats als beschränkt vor.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 22,
     "zone": 1
    },
    {
     "id": "jasche-s14-019",
     "kind": "text",
     "aa": 104,
     "text": "Alles Mögliche ist entweder A oder non A. Sage ich also: etwas ist non A, z.B. die menschliche Seele ist nicht-sterblich, einige Menschen sind Nichtgelehrte u.dgl.m., so ist dies ein unendliches Urtheil. Denn es wird durch dasselbe über die endliche Sphäre A hinaus nicht bestimmt, unter welchen Begriff das Object gehöre, sondern lediglich, daß es in die Sphäre außer A gehöre, welches eigentlich gar keine Sphäre ist, sondern nur die Angrenzung einer Sphäre an das Unendliche oder die Begrenzung selbst. Obgleich nun die Ausschließung eine Negation ist: so ist doch die Beschränkung eines Begriffs eine positive Handlung. Daher sind Grenzen positive Begriffe beschränkter Gegenstände.",
     "em": [
      [
       28,
       29
      ],
      [
       35,
       40
      ],
      [
       67,
       72
      ],
      [
       257,
       258
      ],
      [
       369,
       370
      ]
     ],
     "para": 22,
     "zone": 1
    },
    {
     "id": "jasche-s14-020",
     "kind": "text",
     "aa": 104,
     "text": "2. Nach dem Principium der Ausschließung jedes Dritten (exclusi tertii) ist die Sphäre eines Begriffs relativ auf eine andre entweder ausschließend oder einschließend. Da nun die Logik bloß mit der Form des Urtheils, nicht mit den Begriffen ihrem Inhalte nach, es zu thun hat: so ist die Unterscheidung der unendlichen von den negativen Urtheilen nicht zu dieser Wissenschaft gehörig.",
     "em": [
      [
       56,
       70
      ]
     ],
     "indent": 1,
     "para": 22,
     "zone": 1
    },
    {
     "id": "jasche-s14-021",
     "kind": "text",
     "aa": 104,
     "text": "3. In verneinenden Urtheilen afficirt die Negation immer die Copula, in unendlichen wird nicht die Copula, sondern das Prädicat durch die Negation afficirt, welches sich im Lateinischen am besten ausdrücken läßt.",
     "indent": 1,
     "para": 22,
     "zone": 1
    },
    {
     "id": "jasche-s14-022",
     "kind": "text",
     "aa": 104,
     "text": "Der Relation nach sind die Urtheile entweder kategorische oder hypothetische oder disjunctive. Die gegebenen Vorstellungen im Urtheile sind nämlich eine der andern zur Einheit des Bewußtseins untergeordnet, entweder: als Prädicat dem Subjecte, oder: als Folge dem Grunde, oder: als Glied der Eintheilung dem eingetheilten Begriffe. Durch das erste Verhältniß sind die kategorischen, durch das zweite die hypothetischen und durch das dritte die disjunctiven Urtheile bestimmt.",
     "para": 23
    },
    {
     "id": "jasche-s14-023",
     "kind": "text",
     "aa": 105,
     "text": "In den kategorischen Urtheilen machen Subject und Prädicat die Materie derselben aus, die Form, durch welche das Verhältniß (der Einstimmung oder des Widerstreits) zwischen Subject und Prädicat bestimmt und ausgedrückt wird, heißt die Copula.",
     "para": 24
    },
    {
     "id": "jasche-s14-024",
     "kind": "rule",
     "aa": 105,
     "zone": 1,
     "para": 24
    },
    {
     "id": "jasche-s14-025",
     "kind": "text",
     "aa": 105,
     "text": "Anmerkung. Die kategorischen Urtheile machen zwar die Materie der übrigen Urtheile aus, aber darum muß man doch nicht, wie mehrere Logiker, glauben, daß die hypothetischen sowohl als die disjunctiven Urtheile weiter nichts als verschiedene Einkleidungen der kategorischen seien und sich daher insgesammt auf die letztern zurückführen ließen. Alle drei Arten von Urtheilen beruhen auf wesentlich verschiedenen logischen Functionen des Verstandes und müssen daher nach ihrer specifischen Verschiedenheit erwogen werden.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 24,
     "zone": 1
    },
    {
     "id": "jasche-s14-026",
     "kind": "text",
     "aa": 105,
     "text": "Die Materie der hypothetischen Urtheile besteht aus zwei Urtheilen, die mit einander als Grund und Folge verknüpft sind. Das eine dieser Urtheile, welches den Grund enthält, ist der Vordersatz (antecedens, prius), das andre, das sich zu jenem als Folge verhält, der Nachsatz (consequens, posterius), und die Vorstellung dieser Art von Verknüpfung beider Urtheile unter einander zur Einheit des Bewußtseins wird die Consequenz genannt, welche die Form der hypothetischen Urtheile ausmacht.",
     "em": [
      [
       194,
       211
      ],
      [
       276,
       297
      ]
     ],
     "para": 25
    },
    {
     "id": "jasche-s14-027",
     "kind": "rule",
     "aa": 105,
     "zone": 1,
     "para": 25
    },
    {
     "id": "jasche-s14-028",
     "kind": "text",
     "aa": 105,
     "text": "Anmerkung 1. Was für die kategorischen Urtheile die copula, das ist für die hypothetischen also die Consequenz — die Form derselben.",
     "em": [
      [
       52,
       58
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 25,
     "zone": 1
    },
    {
     "id": "jasche-s14-029",
     "kind": "text",
     "aa": 105,
     "text": "2. Einige glauben, es sei leicht, einen hypothetischen Satz in einen kategorischen zu verwandeln. Allein dieses geht nicht an, weil beide ihrer Natur nach ganz von einander verschieden sind. In kategorischen Urtheilen ist nichts problematisch, sondern alles assertorisch, in hypothetischen hingegen ist nur die Consequenz assertorisch. In den letztern kann ich daher zwei falsche Urtheile mit einander verknüpfen, denn es kommt hier nur auf die Richtigkeit der Verknüpfung — die Form der Consequenz an, worauf die logische Wahrheit dieser Urtheile beruht. Es ist ein wesentlicher Unterschied zwischen den beiden Sätzen: Alle Körper sind theilbar, und: Wenn alle Körper zusammengesetzt sind, so sind sie theilbar. In dem erstern Satze behaupte ich die Sache gerade zu, im letztern nur unter einer problematisch ausgedrückten Bedingung.",
     "pages": [
      {
       "p": 106,
       "i": 473
      }
     ],
     "aaEnd": 106,
     "indent": 1,
     "para": 25,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s14-030",
     "kind": "text",
     "aa": 106,
     "text": "Die Form der Verknüpfung in den hypothetischen Urtheilen ist zwiefach: die setzende (modus ponens) oder die aufhebende (modus tollens).",
     "em": [
      [
       85,
       97
      ],
      [
       120,
       133
      ]
     ],
     "para": 26
    },
    {
     "id": "jasche-s14-031",
     "kind": "text",
     "aa": 106,
     "text": "1) Wenn der Grund (antecedens) wahr ist: so ist auch die durch ihn bestimmte Folge (consequens) wahr; heißt der modus ponens.",
     "em": [
      [
       19,
       29
      ],
      [
       84,
       94
      ],
      [
       112,
       124
      ]
     ],
     "indent": 2,
     "para": 26
    },
    {
     "id": "jasche-s14-032",
     "kind": "text",
     "aa": 106,
     "text": "2) Wenn die Folge (consequens) falsch ist: so ist auch der Grund (antecedens) falsch; modus tollens.",
     "em": [
      [
       19,
       29
      ],
      [
       66,
       76
      ],
      [
       86,
       99
      ]
     ],
     "indent": 2,
     "para": 26
    },
    {
     "id": "jasche-s14-033",
     "kind": "text",
     "aa": 106,
     "text": "Ein Urtheil ist disjunctiv, wenn die Theile der Sphäre eines gegebenen Begriffs einander in dem Ganzen oder zu einem Ganzen als Ergänzungen (complementa) bestimmen.",
     "em": [
      [
       141,
       152
      ]
     ],
     "para": 27
    },
    {
     "id": "jasche-s14-034",
     "kind": "text",
     "aa": 106,
     "text": "Die mehreren gegebenen Urtheile, woraus das disjunctive Urtheil zusammengesetzt ist, machen die Materie desselben aus und werden die Glieder der Disjunction oder Entgegensetzung genannt. In der Disjunction selbst, d.h. in der Bestimmung des Verhältnisses der verschiedenen Urtheile, als sich wechselseitig einander ausschließender und einander ergänzender Glieder der ganzen Sphäre des eingetheilten Erkenntnisses, besteht die Form dieser Urtheile.",
     "para": 28
    },
    {
     "id": "jasche-s14-035",
     "kind": "rule",
     "aa": 106,
     "zone": 1,
     "para": 28
    },
    {
     "id": "jasche-s14-036",
     "kind": "text",
     "aa": 106,
     "text": "Anmerkung. Alle disjunctiven Urtheile stellen also verschiedene Urtheile als in der Gemeinschaft einer Sphäre vor und bringen jedes Urtheil nur durch die Einschränkung der andern in Ansehung der ganzen Sphäre hervor, sie bestimmen also jedes Urtheils Verhältniß zur ganzen Sphäre, und dadurch zugleich das Verhältniß, das diese verschiedenen Trennungsglieder (membra disjuncta) unter einander selbst haben. — Ein Glied bestimmt also hier jedes andre nur, sofern sie insgesammt als Theile einer ganzen Sphäre von Erkenntniß, außer der sich in gewisser Beziehung nichts denken läßt, in Gemeinschaft stehen.",
     "pages": [
      {
       "p": 107,
       "i": 150
      }
     ],
     "aaEnd": 107,
     "em": [
      [
       360,
       376
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 28,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s14-037",
     "kind": "text",
     "aa": 107,
     "text": "Der eigenthümliche Charakter aller disjunctiven Urtheile, wodurch ihr specifischer Unterschied dem Momente der Relation nach von den übrigen, insbesondre von den kategorischen Urtheilen bestimmt ist, besteht darin: daß die Glieder der Disjunction insgesammt problematische Urtheile sind, von denen nichts anders gedacht wird, als daß sie, wie Theile der Sphäre einer Erkenntniß, jedes des andern Ergänzung zum Ganzen (complementum ad totum), zusammengenommen, der Sphäre des ersten gleich seien. Und hieraus folgt: daß in Einem dieser problematischen Urtheile die Wahrheit enthalten sein oder — welches dasselbe ist ‑, daß Eines von ihnen assertorisch gelten müsse, weil außer ihnen die Sphäre der Erkenntniß unter den gegebenen Bedingungen nichts mehr befaßt und eine der andern entgegengesetzt ist, folglich weder außer ihnen etwas anders, noch auch unter ihnen mehr als Eines wahr sein kann.",
     "em": [
      [
       418,
       439
      ]
     ],
     "para": 29
    },
    {
     "id": "jasche-s14-038",
     "kind": "rule",
     "aa": 107,
     "zone": 1,
     "para": 29
    },
    {
     "id": "jasche-s14-039",
     "kind": "text",
     "aa": 107,
     "text": "Anmerkung. In einem kategorischen Urtheile wird das Ding, dessen Vorstellung als ein Theil von der Sphäre einer andern subordinirten Vorstellung betrachtet wird, als enthalten unter dieses seinem obern Begriffe betrachtet, also wird hier in der Subordination der Sphären der Theil vom Theile mit dem Ganzen verglichen. Aber in disjunctiven Urtheilen gehe ich vom Ganzen auf alle Theile zusammengenommen. Was unter der Sphäre eines Begriffs enthalten ist, das ist auch unter einem der Theile dieser Sphäre enthalten. Darnach muß erstlich die Sphäre eingetheilt werden. Wenn ich z.B. das disjunctive Urtheil fälle: Ein Gelehrter ist entweder ein historischer oder ein Vernunftgelehrter, so bestimme ich damit, daß diese Begriffe der Sphäre nach Theile der Sphäre der Gelehrten sind, aber keineswegs Theile von einander, und daß sie alle zusammengenommen complet sind.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-040",
     "kind": "text",
     "aa": 108,
     "text": "Daß in den disjunctiven Urtheilen nicht die Sphäre des eingetheilten Begriffs, als enthalten in der Sphäre der Eintheilungen, sondern das, was unter dem eingetheilten Begriffe enthalten ist, als enthalten unter einem der Glieder der Eintheilung, betrachtet werde, mag folgendes Schema der Vergleichung zwischen kategorischen und disjunctiven Urtheilen anschaulicher machen.",
     "pages": [
      {
       "p": 108,
       "i": 0
      }
     ],
     "aaEnd": 108,
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-041",
     "kind": "text",
     "aa": 108,
     "text": "In kategorischen Urtheilen ist x, was unter b enthalten ist, auch unter a:",
     "em": [
      [
       31,
       32
      ],
      [
       44,
       45
      ],
      [
       72,
       73
      ]
     ],
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-042",
     "kind": "text",
     "aa": 108,
     "text": "{￼}",
     "align": "center",
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-043",
     "kind": "text",
     "aa": 108,
     "text": "In disjunctiven ist x, was unter a enthalten ist, entweder unter b oder c u.s.w. enthalten:",
     "em": [
      [
       20,
       21
      ],
      [
       33,
       34
      ],
      [
       65,
       66
      ],
      [
       72,
       73
      ]
     ],
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-044",
     "kind": "text",
     "aa": 108,
     "text": "{￼}",
     "align": "center",
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-045",
     "kind": "text",
     "aa": 108,
     "text": "Also zeigt die Division in disjunctiven Urtheilen die Coordination nicht der Theile des ganzen Begriffs, sondern alle Theile seiner Sphäre an. Hier denke ich viel Dinge durch einen Begriff, dort ein Ding durch viel Begriffe, z.B. das Definitum durch alle Merkmale der Coordination.",
     "para": 29,
     "zone": 1
    },
    {
     "id": "jasche-s14-046",
     "kind": "text",
     "aa": 108,
     "text": "Der Modalität nach, durch welches Moment das Verhältniß des ganzen Urtheils zum Erkenntnißvermögen bestimmt ist, sind die Urtheile entweder problematische oder assertorische oder apodiktische. Die problematischen sind mit dem Bewußtsein der bloßen Möglichkeit, die assertorischen mit dem Bewußtsein der Wirklichkeit, die apodiktischen endlich mit dem Bewußtsein der Nothwendigkeit des Urtheilens begleitet.",
     "para": 30
    },
    {
     "id": "jasche-s14-047",
     "kind": "rule",
     "aa": 108,
     "zone": 1,
     "para": 30
    },
    {
     "id": "jasche-s14-048",
     "kind": "text",
     "aa": 108,
     "text": "Anmerkung 1. Dieses Moment der Modalität zeigt also nur die Art und Weise an, wie im Urtheile etwas behauptet oder verneint wird: ob man über die Wahrheit oder Unwahrheit eines Urtheils nichts ausmacht, wie in dem problematischen",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 30,
     "zone": 1,
     "maybeContinues": true
    },
    {
     "id": "jasche-s14-049",
     "kind": "text",
     "aa": 109,
     "text": "Urtheile: die Seele des Menschen mag unsterblich sein; oder ob man darüber etwas bestimmt, wie in dem assertorischen Urtheile: die menschliche Seele ist unsterblich; oder endlich, ob man die Wahrheit eines Urtheils sogar mit der Dignität der Nothwendigkeit ausdrückt, wie in dem apodiktischen Urtheile: die Seele des Menschen muß unsterblich sein. Diese Bestimmung der bloß möglichen oder wirklichen oder nothwendigen Wahrheit betrifft also nur das Urtheil selbst, keineswegs die Sache, worüber geurtheilt wird.",
     "pages": [
      {
       "p": 109,
       "i": 0
      }
     ],
     "aaEnd": 109,
     "para": 30,
     "zone": 1
    },
    {
     "id": "jasche-s14-050",
     "kind": "text",
     "aa": 109,
     "text": "2. In problematischen Urtheilen, die man auch für solche erklären kann, deren Materie gegeben ist mit dem möglichen Verhältniß zwischen Prädicat und Subject, muß das Subject jederzeit eine kleinere Sphäre haben als das Prädicat.",
     "indent": 1,
     "para": 30,
     "zone": 1
    },
    {
     "id": "jasche-s14-051",
     "kind": "text",
     "aa": 109,
     "text": "3. Auf dem Unterschiede zwischen problematischem und assertorischem Urtheilen beruht der wahre Unterschied zwischen Urtheilen und Sätzen, den man sonst fälschlich in den bloßen Ausdruck durch Worte, ohne die man ja überall nicht urtheilen könnte, zu setzen pflegt. Im Urtheile wird das Verhältniß verschiedener Vorstellungen zur Einheit des Bewußtseins bloß als problematisch gedacht, in einem Satze hingegen als assertorisch. Ein problematischer Satz ist eine contradictio in adjecto. Ehe ich einen Satz habe, muß ich doch erst urtheilen; und ich urtheile über vieles, was ich nicht ausmache, welches ich aber thun muß, sobald ich ein Urtheil als Satz bestimme. Es ist übrigens gut, erst problematisch zu urtheilen, ehe man das Urtheil als assertorisch annimmt, um es auf diese Art zu prüfen. Auch ist es nicht allemal zu unsrer Absicht nöthig, assertorische Urtheile zu haben.",
     "em": [
      [
       461,
       484
      ]
     ],
     "indent": 1,
     "para": 30,
     "zone": 1
    },
    {
     "id": "jasche-s14-052",
     "kind": "text",
     "aa": 109,
     "text": "Urtheile, in denen eine Bejahung und Verneinung zugleich, aber versteckter Weise, enthalten ist, so daß die Bejahung zwar deutlich, die Verneinung aber versteckt geschieht, sind exponible Sätze.",
     "para": 31
    },
    {
     "id": "jasche-s14-053",
     "kind": "rule",
     "aa": 109,
     "zone": 1,
     "para": 31
    },
    {
     "id": "jasche-s14-054",
     "kind": "text",
     "aa": 109,
     "text": "Anmerkung. In dem exponiblen Urtheile, z.B. wenige Menschen sind gelehrt, liegt 1), aber auf eine versteckte Weise, das negative Urtheil: viele Menschen sind nicht gelehrt, und 2) das affirmative: einige Menschen sind gelehrt. Da die Natur der exponiblen Sätze lediglich von Bedingungen der Sprache abhängt, nach welchen man zwei Urtheile auf einmal in der Kürze ausdrücken kann: so gehört die Bemerkung, daß es in unsrer Sprache Urtheile geben könne, die exponirt werden müssen, nicht in die Logik, sondern in die Grammatik.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 31,
     "zone": 1
    },
    {
     "id": "jasche-s14-055",
     "kind": "text",
     "aa": 110,
     "text": "Theoretische Sätze heißen die, welche sich auf den Gegenstand beziehen und bestimmen, was demselben zukomme oder nicht zukomme; praktische Sätze hingegen sind die, welche die Handlung aussagen, wodurch, als nothwendige Bedingung desselben, ein Object möglich wird.",
     "para": 32
    },
    {
     "id": "jasche-s14-056",
     "kind": "rule",
     "aa": 110,
     "zone": 1,
     "para": 32
    },
    {
     "id": "jasche-s14-057",
     "kind": "text",
     "aa": 110,
     "text": "Anmerkung. Die Logik hat nur von praktischen Sätzen der Form nach, die in so fern den theoretischen entgegengesetzt sind, zu handeln. Praktische Sätze, dem Inhalte nach, und in so fern von den speculativen unterschieden, gehören in die Moral.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 32,
     "zone": 1
    },
    {
     "id": "jasche-s14-058",
     "kind": "text",
     "aa": 110,
     "text": "Demonstrable Sätze sind die, welche eines Beweises fähig sind; die keines Beweises fähig sind, werden indemonstrable genannt.",
     "para": 33
    },
    {
     "id": "jasche-s14-059",
     "kind": "text",
     "aa": 110,
     "text": "Unmittelbar gewisse Urtheile sind indemonstrabel und also als Elementar-Sätze anzusehen.",
     "para": 33
    },
    {
     "id": "jasche-s14-060",
     "kind": "text",
     "aa": 110,
     "text": "Unmittelbar gewisse Urtheile a priori können Grundsätze heißen, sofern andre Urtheile aus ihnen erwiesen, sie selbst aber keinem andern subordinirt werden können. Sie werden um deswillen auch Principien (Anfänge) genannt.",
     "em": [
      [
       29,
       37
      ]
     ],
     "para": 34
    },
    {
     "id": "jasche-s14-061",
     "kind": "text",
     "aa": 110,
     "text": "Grundsätze sind entweder intuitive oder discursive. Die erstern können in der Anschauung dargestellt werden und heißen Axiome (axiomata), die letztern lassen sich nur durch Begriffe ausdrücken und können Akroame (acroamata) genannt werden.",
     "em": [
      [
       127,
       135
      ],
      [
       213,
       222
      ]
     ],
     "para": 35
    },
    {
     "id": "jasche-s14-062",
     "kind": "text",
     "aa": 111,
     "text": "Analytische Sätze heißen solche, deren Gewißheit auf Identität der Begriffe (des Prädicats mit der Notion des Subjects) beruht. Sätze, deren Wahrheit sich nicht auf Identität der Begriffe gründet, müssen synthetische genannt werden.",
     "para": 36
    },
    {
     "id": "jasche-s14-063",
     "kind": "rule",
     "aa": 111,
     "zone": 1,
     "para": 36
    },
    {
     "id": "jasche-s14-064",
     "kind": "text",
     "aa": 111,
     "text": "Anmerkung 1. Alles x, welchem der Begriff des Körpers (a+b) zukommt, dem kommt auch die Ausdehnung (b) zu, ist ein Exempel eines analytischen Satzes.",
     "em": [
      [
       19,
       20
      ],
      [
       55,
       58
      ],
      [
       100,
       101
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 36,
     "zone": 1
    },
    {
     "id": "jasche-s14-065",
     "kind": "text",
     "aa": 111,
     "text": "Alles x, welchem der Begriff des Körpers (a+b) zukommt, dem kommt auch die Anziehung (c) zu, ist ein Exempel eines synthetischen Satzes. Die synthetischen Sätze vermehren das Erkenntniß materialiter, die analytischen bloß formaliter. Jene enthalten Bestimmungen (determinationes), diese nur logische Prädicate.",
     "em": [
      [
       6,
       7
      ],
      [
       86,
       87
      ],
      [
       186,
       198
      ],
      [
       222,
       232
      ],
      [
       263,
       278
      ]
     ],
     "para": 36,
     "zone": 1
    },
    {
     "id": "jasche-s14-066",
     "kind": "text",
     "aa": 111,
     "text": "2. Analytische Principien sind nicht Axiome, denn sie sind discursiv. Und synthetische Principien sind auch nur dann Axiome, wenn sie intuitiv sind.",
     "indent": 1,
     "para": 36,
     "zone": 1
    },
    {
     "id": "jasche-s14-067",
     "kind": "text",
     "aa": 111,
     "text": "Die Identität der Begriffe in analytischen Urtheilen kann entweder eine ausdrückliche (explicita) der eine nicht-ausdrückliche (implicita) sein. Im erstern Falle sind die analytischen Sätze tautologisch.",
     "em": [
      [
       87,
       96
      ],
      [
       128,
       137
      ]
     ],
     "para": 37
    },
    {
     "id": "jasche-s14-068",
     "kind": "rule",
     "aa": 111,
     "zone": 1,
     "para": 37
    },
    {
     "id": "jasche-s14-069",
     "kind": "text",
     "aa": 111,
     "text": "Anmerkung 1. Tautologische Sätze sind virtualiter leer oder folgeleer, denn sie sind ohne Nutzen und Gebrauch. Dergleichen ist z.B. der tautologische Satz: der Mensch ist Mensch. Denn wenn ich vom Menschen nichts weiter zu sagen weiß, als daß er ein Mensch ist: so weiß ich gar weiter nichts von ihm.",
     "em": [
      [
       38,
       49
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 37,
     "zone": 1
    },
    {
     "id": "jasche-s14-070",
     "kind": "text",
     "aa": 111,
     "text": "Implicite identische Sätze sind dagegen nicht folge- oder fruchtleer, denn sie machen das Prädicat, welches im Begriffe des Subjects unentwickelt (implicite) lag, durch Entwickelung (explicatio) klar.",
     "em": [
      [
       0,
       9
      ],
      [
       147,
       156
      ],
      [
       183,
       193
      ]
     ],
     "para": 37,
     "zone": 1
    },
    {
     "id": "jasche-s14-071",
     "kind": "text",
     "aa": 111,
     "text": "2. Folgeleere Sätze müssen von sinnleeren unterschieden werden, die darum leer an Verstand sind, weil sie die Bestimmung sogenannter verborgener Eigenschaften (qualitates occultae) betreffen.",
     "em": [
      [
       160,
       179
      ]
     ],
     "indent": 1,
     "para": 37,
     "zone": 1
    },
    {
     "id": "jasche-s14-072",
     "kind": "text",
     "aa": 112,
     "text": "Ein Postulat ist ein praktischer, unmittelbar gewisser Satz oder ein Grundsatz, der eine mögliche Handlung bestimmt, bei welcher vorausgesetzt wird, daß die Art sie auszuführen, unmittelbar gewiß sei.",
     "para": 38
    },
    {
     "id": "jasche-s14-073",
     "kind": "text",
     "aa": 112,
     "text": "Probleme (problemata) sind demonstrable, einer Anweisung bedürftige Sätze, oder solche, die eine Handlung aussagen, deren Art der Ausführung nicht unmittelbar gewiß ist.",
     "em": [
      [
       10,
       20
      ]
     ],
     "para": 38
    },
    {
     "id": "jasche-s14-074",
     "kind": "rule",
     "aa": 112,
     "zone": 1,
     "para": 38
    },
    {
     "id": "jasche-s14-075",
     "kind": "text",
     "aa": 112,
     "text": "Anmerkung 1. Es kann auch theoretische Postulate geben zum Behuf der praktischen Vernunft. Dieses sind theoretische, in praktischer Vernunftabsicht nothwendige Hypothesen, wie die des Daseins Gottes, der Freiheit und einer andern Welt.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 38,
     "zone": 1
    },
    {
     "id": "jasche-s14-076",
     "kind": "text",
     "aa": 112,
     "text": "2. Zum Problem gehört 1) die Quästion, die das enthält, was geleistet werden soll, 2) die Resolution, die die Art und Weise enthält, wie das zu Leistende könne ausgeführt werden, und 3) die Demonstration, daß, wenn ich so werde verfahren haben, das Geforderte geschehen werde.",
     "indent": 1,
     "para": 38,
     "zone": 1
    },
    {
     "id": "jasche-s14-077",
     "kind": "text",
     "aa": 112,
     "text": "Theoreme sind theoretische, eines Beweises fähige und bedürftige Sätze. Corollarien sind unmittelbare Folgen aus einem der vorhergehenden Sätze. — Lehnsätze (lemmata) heißen Sätze, die in der Wissenschaft, worin sie als erwiesen vorausgesetzt werden, nicht einheimisch, sondern aus andern Wissenschaften entlehnt sind. Scholien endlich sind bloße Erläuterungssätze, die also nicht als Glieder zum Ganzen des Systems gehören.",
     "em": [
      [
       158,
       165
      ]
     ],
     "para": 39
    },
    {
     "id": "jasche-s14-078",
     "kind": "rule",
     "aa": 112,
     "zone": 1,
     "para": 39
    },
    {
     "id": "jasche-s14-079",
     "kind": "text",
     "aa": 112,
     "text": "Anmerkung. Wesentliche und allgemeine Momente eines jeden Theorems sind die Thesis und die Demonstration. Den Unterschied zwischen Theoremen und Corollarien kann man übrigens auch darin setzen, daß diese unmittelbar geschlossen, jene dagegen durch eine Reihe von Folgen aus unmittelbar gewissen Sätzen gezogen werden.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 39,
     "zone": 1
    },
    {
     "id": "jasche-s14-080",
     "kind": "text",
     "aa": 113,
     "text": "Ein Wahrnehmungsurtheil ist bloß subjectiv, ein objectives Urtheil aus Wahrnehmungen ist ein Erfahrungsurtheil.",
     "para": 40
    },
    {
     "id": "jasche-s14-081",
     "kind": "rule",
     "aa": 113,
     "zone": 1,
     "para": 40
    },
    {
     "id": "jasche-s14-082",
     "kind": "text",
     "aa": 113,
     "text": "Anmerkung. Ein Urtheil aus bloßen Wahrnehmungen ist nicht wohl möglich als nur dadurch, daß ich meine Vorstellung, als Wahrnehmung, aussage: Ich, der ich einen Thurm wahrnehme, nehme an ihm die rothe Farbe wahr. Ich kann aber nicht sagen: er ist roth. Denn dieses wäre nicht bloß ein empirisches, sondern auch ein Erfahrungsurtheil, d.i. ein empirisches Urtheil, dadurch ich einen Begriff vom Object bekomme. Z.B. Bei der Berührung des Steins empfinde ich Wärme, ist ein Wahrnehmungsurtheil, hingegen: der Stein ist warm, ein Erfahrungsurtheil. Es gehört zum letztern, daß ich das, was bloß in meinem Subject ist, nicht zum Object rechne, denn ein Erfahrungsurtheil ist die Wahrnehmung, woraus ein Begriff vom Object entspringt; z.B. ob im Monde lichte Punkte sich bewegen oder in der Luft oder in meinem Auge.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 40,
     "zone": 1
    },
    {
     "id": "jasche-s14-083",
     "kind": "rule",
     "aa": 113,
     "zone": 2,
     "para": 40
    }
   ],
   "range": {
    "from": 17,
    "to": 40,
    "raw": "[§§ 17 — 40]"
   }
  },
  {
   "id": "s15",
   "part": "I. Allgemeine Elementarlehre",
   "title": "Dritter Abschnitt. Von den Schlüssen.",
   "heading": "Dritter Abschnitt. Von den Schlüssen. / [§§ 41 — 43]",
   "blocks": [
    {
     "id": "jasche-s15-001",
     "kind": "text",
     "aa": 114,
     "text": "Unter Schließen ist diejenige Function des Denkens zu verstehen, wodurch ein Urtheil aus einem andern hergeleitet wird. Ein Schluß überhaupt ist also die Ableitung eines Urtheils aus dem andern.",
     "pages": [
      {
       "p": 114,
       "i": 0
      }
     ],
     "aaEnd": 114,
     "para": 41
    },
    {
     "id": "jasche-s15-002",
     "kind": "text",
     "aa": 114,
     "text": "Alle Schlüsse sind entweder unmittelbare oder mittelbare.",
     "para": 42
    },
    {
     "id": "jasche-s15-003",
     "kind": "text",
     "aa": 114,
     "text": "Ein unmittelbarer Schluß (consequentia immediata) ist die Ableitung (deductio) eines Urtheils aus dem andern ohne ein vermittelndes Urtheil (judicium intermedium). Mittelbar ist ein Schluß, wenn man außer dem Begriffe, den ein Urtheil in sich enthält, noch andre braucht, um ein Erkenntniß daraus herzuleiten.",
     "em": [
      [
       26,
       48
      ],
      [
       69,
       77
      ],
      [
       141,
       161
      ]
     ],
     "para": 42
    },
    {
     "id": "jasche-s15-004",
     "kind": "text",
     "aa": 114,
     "text": "Die unmittelbaren Schlüsse heißen auch Verstandesschlüsse, alle mittelbaren Schlüsse hingegen sind entweder Vernunftschlüsse oder Schlüsse der Urtheilskraft. Wir handeln hier zuerst von den unmittelbaren oder den Verstandesschlüssen.",
     "para": 43
    }
   ],
   "range": {
    "from": 41,
    "to": 43,
    "raw": "[§§ 41 — 43]"
   }
  },
  {
   "id": "s16",
   "part": "I. Allgemeine Elementarlehre",
   "title": "I. Verstandesschlüsse.",
   "heading": "[Dritter Abschnitt. Von den Schlüssen.] / I. Verstandesschlüsse.[§§ 44 — 55]",
   "blocks": [
    {
     "id": "jasche-s16-001",
     "kind": "text",
     "aa": 115,
     "text": "Der wesentliche Charakter aller unmittelbaren Schlüsse und das Princip ihrer Möglichkeit besteht lediglich in einer Veränderung der bloßen Form der Urtheile, während die Materie der Urtheile, das Subject und Prädicat, unverändert dieselbe bleibt.",
     "pages": [
      {
       "p": 115,
       "i": 0
      }
     ],
     "aaEnd": 115,
     "para": 44
    },
    {
     "id": "jasche-s16-002",
     "kind": "rule",
     "aa": 115,
     "zone": 1,
     "para": 44
    },
    {
     "id": "jasche-s16-003",
     "kind": "text",
     "aa": 115,
     "text": "Anmerkung 1. Dadurch daß in den unmittelbaren Schlüssen nur die Form und keinesweges die Materie der Urtheile verändert wird, unterscheiden sich diese Schlüsse wesentlich von allen mittelbaren, in welchen die Urtheile auch der Materie nach unterschieden sind, indem hier ein neuer Begriff als vermittelndes Urtheil, oder als Mittelbegriff (terminus medius) hinzukommen muß, um das eine Urtheil aus dem andern zu folgern. Wenn ich z.B. schließe: Alle Menschen sind sterblich, also ist auch Cajus sterblich: so ist dies kein unmittelbarer Schluß. Denn hier brauche ich zu der Folgerung noch das vermittelnde Urtheil: Cajus ist ein Mensch; durch diesen neuen Begriff wird aber die Materie der Urtheile verändert.",
     "em": [
      [
       340,
       355
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 44,
     "zone": 1
    },
    {
     "id": "jasche-s16-004",
     "kind": "text",
     "aa": 115,
     "text": "2. Es läßt sich zwar auch bei den Verstandesschlüssen ein judicium intermedium machen, aber alsdann ist dieses vermittelnde Urtheil bloß tautologisch. Wie z.B. in dem unmittelbaren Schlusse: Alle Menschen sind sterblich. Einige Menschen sind Menschen. Also sind einige Menschen sterblich, der Mittelbegriff ein tautologischer Satz ist.",
     "em": [
      [
       58,
       78
      ]
     ],
     "indent": 1,
     "para": 44,
     "zone": 1
    },
    {
     "id": "jasche-s16-005",
     "kind": "text",
     "aa": 115,
     "text": "Die Verstandesschlüsse gehen durch alle Klassen der logischen Functionen des Urtheilens und sind folglich in ihren Hauptarten bestimmt durch die Momente der Quantität, der Qualität, der Relation und der Modalität. Hierauf beruht die folgende Eintheilung dieser Schlüsse.",
     "para": 45
    },
    {
     "id": "jasche-s16-006",
     "kind": "text",
     "aa": 116,
     "text": "In den Verstandesschlüssen per judicia subalternata sind die beiden Urtheile der Quantität nach unterschieden, und es wird hier das besondre Urtheil aus dem allgemeinen abgeleitet, dem Grundsatze zufolge: Vom Allgemeinen gilt der Schluß auf das Besondere (ab universali ad particulare valet consequentia).",
     "em": [
      [
       27,
       51
      ],
      [
       256,
       303
      ]
     ],
     "para": 46
    },
    {
     "id": "jasche-s16-007",
     "kind": "rule",
     "aa": 116,
     "zone": 1,
     "para": 46
    },
    {
     "id": "jasche-s16-008",
     "kind": "text",
     "aa": 116,
     "text": "Anmerkung. Ein judicium heißt subalternatum, sofern es unter dem andern enthalten ist; wie z.B. besondre Urtheile unter allgemeinen.",
     "em": [
      [
       15,
       23
      ],
      [
       30,
       43
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 46,
     "zone": 1
    },
    {
     "id": "jasche-s16-009",
     "kind": "text",
     "aa": 116,
     "text": "Bei den Verstandesschlüssen dieser Art betrifft die Veränderung die Qualität der Urtheile und zwar in Beziehung auf die Entgegensetzung betrachtet. Da nun diese Entgegensetzung eine dreifache sein kann, so ergiebt sich hieraus folgende besondre Eintheilung des unmittelbaren Schließens: durch contradictorisch entgegengesetzte, durch conträre und durch subconträre Urtheile.",
     "para": 47
    },
    {
     "id": "jasche-s16-010",
     "kind": "rule",
     "aa": 116,
     "zone": 1,
     "para": 47
    },
    {
     "id": "jasche-s16-011",
     "kind": "text",
     "aa": 116,
     "text": "Anmerkung. Verstandesschlüsse durch gleichgeltende Urtheile (judicia aequipollentia) können eigentlich keine Schlüsse genannt werden, denn hier findet keine Folge statt, sie sind vielmehr als eine bloße Substitution der Worte anzusehen, die einen und denselben Begriff bezeichnen, wobei die Urtheile selbst auch der Form nach unverändert bleiben. Z.B.: Nicht alle Menschen sind tugendhaft, und: Einige Menschen sind nicht tugendhaft. Beide Urtheile sagen ein und dasselbe.",
     "em": [
      [
       61,
       83
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 47,
     "zone": 1
    },
    {
     "id": "jasche-s16-012",
     "kind": "text",
     "aa": 116,
     "text": "In Verstandesschlüssen durch Urtheile, die einander contradictorisch entgegengesetzt sind und als solche die ächte, reine Opposition ausmachen, wird die Wahrheit des einen der contradictorisch entgegengesetzten Urtheile aus der Falschheit des andern gefolgert und umgekehrt. Denn die ächte Opposition, die hier stattfindet, enthält nicht mehr noch weniger als was zur Entgegensetzung gehört. Dem Princip des ausschließenden Dritten zufolge können daher nicht beide widersprechende Urtheile wahr, aber auch [auch] eben so wenig können sie beide falsch sein. Wenn daher das eine wahr ist, so ist das andre falsch und umgekehrt.",
     "pages": [
      {
       "p": 117,
       "i": 144
      }
     ],
     "aaEnd": 117,
     "em": [
      [
       0,
       143
      ],
      [
       144,
       625
      ]
     ],
     "para": 48,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s16-013",
     "kind": "text",
     "aa": 117,
     "text": "Conträre oder widerstreitende Urtheile (judicia contrarie opposita) sind Urtheile, von denen das eine allgemein bejahend, das andre allgemein verneinend ist. Da nun eines derselben mehr aussagt, als das andre, und in dem Überflüssigen, das es außer der bloßen Verneinung des andern noch mehr aussagt, die Falschheit liegen kann: so können sie zwar nicht beide wahr, aber sie können beide falsch sein. In Ansehung dieser Urtheile gilt daher nur der Schluß von der Wahrheit des einen auf die Falschheit des andern, aber nicht umgekehrt.",
     "em": [
      [
       40,
       66
      ]
     ],
     "para": 49
    },
    {
     "id": "jasche-s16-014",
     "kind": "text",
     "aa": 117,
     "text": "Subconträre Urtheile sind solche, von denen das eine besonders (particulariter) bejaht oder verneint, was das andre besonders verneint oder bejaht.",
     "em": [
      [
       64,
       78
      ]
     ],
     "para": 50
    },
    {
     "id": "jasche-s16-015",
     "kind": "text",
     "aa": 117,
     "text": "Da sie beide wahr, aber nicht beide falsch sein können, so gilt in Ansehung ihrer nur der folgende Schluß: Wenn der eine dieser Sätze falsch ist, so ist der andre wahr; aber nicht umgekehrt.",
     "para": 50
    },
    {
     "id": "jasche-s16-016",
     "kind": "rule",
     "aa": 117,
     "zone": 1,
     "para": 50
    },
    {
     "id": "jasche-s16-017",
     "kind": "text",
     "aa": 117,
     "text": "Anmerkung. Bei den subconträren Urtheilen findet keine reine, strenge Opposition statt, denn es wird in dem einen nicht von denselben Objecten verneint oder bejaht, was in dem andern bejaht oder verneint wurde. In dem Schlusse z.B. Einige Menschen sind gelehrt, also sind einige Menschen nicht gelehrt, wird in dem ersten Urtheile nicht von denselben Menschen das behauptet, was im andern verneint wird.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 50,
     "zone": 1
    },
    {
     "id": "jasche-s16-018",
     "kind": "text",
     "aa": 118,
     "text": "Die unmittelbaren Schlüsse durch Umkehrung betreffen die Relation der Urtheile und bestehen in der Versetzung der Subjecte und Prädicate in den beiden Urtheilen, so daß das Subject des einen Urtheils zum Prädicat des andern Urtheils gemacht wird, und umgekehrt.",
     "para": 51
    },
    {
     "id": "jasche-s16-019",
     "kind": "text",
     "aa": 118,
     "text": "Bei der Umkehrung wird die Quantität der Urtheile entweder verändert oder sie bleibt unverändert. Im erstern Falle ist das Umgekehrte (conversum) von dem Umkehrenden (convertente) der Quantität nach unterschieden, und die Umkehrung heißt eine veränderte (conversio per accidens), im letztern Falle wird die Umkehrung eine reine (conversio simpliciter talis) genannt.",
     "em": [
      [
       135,
       144
      ],
      [
       167,
       178
      ],
      [
       255,
       277
      ],
      [
       329,
       356
      ]
     ],
     "para": 52
    },
    {
     "id": "jasche-s16-020",
     "kind": "text",
     "aa": 118,
     "text": "In Absicht auf die Verstandesschlüsse durch die Umkehrung gelten folgende Regeln:",
     "para": 53
    },
    {
     "id": "jasche-s16-021",
     "kind": "text",
     "aa": 118,
     "text": "1) Allgemein bejahende Urtheile lassen sich nur per accidens umkehren; denn das Prädicat in diesen Urtheilen ist ein weiterer Begriff, und es ist also nur Einiges von demselben in dem Begriffe des Subjects enthalten.",
     "em": [
      [
       48,
       60
      ]
     ],
     "indent": 2,
     "para": 53
    },
    {
     "id": "jasche-s16-022",
     "kind": "text",
     "aa": 118,
     "text": "2) Aber alle allgemein verneinenden Urtheile lassen sich simpliciter umkehren; denn hier wird das Subject aus der Sphäre des Prädicats herausgehoben. Ebenso lassen sich endlich",
     "em": [
      [
       57,
       68
      ]
     ],
     "indent": 2,
     "para": 53
    },
    {
     "id": "jasche-s16-023",
     "kind": "text",
     "aa": 118,
     "text": "3) Alle particulär bejahenden Sätze simpliciter umkehren; denn in diesen Urtheilen ist ein Theil der Sphäre des Subjects dem Prädicate subsumirt worden, also läßt sich auch ein Theil von der Sphäre des Prädicats dem Subjecte subsumiren.",
     "em": [
      [
       36,
       47
      ]
     ],
     "indent": 2,
     "para": 53
    },
    {
     "id": "jasche-s16-024",
     "kind": "rule",
     "aa": 118,
     "zone": 1,
     "para": 53
    },
    {
     "id": "jasche-s16-025",
     "kind": "text",
     "aa": 118,
     "text": "Anmerkung 1. In allgemein bejahenden Urtheilen wird das Subject als ein contentum des Prädicats betrachtet, da es unter der Sphäre desselben enthalten ist. Ich darf daher z.B. nur schließen: Alle Menschen sind sterblich, also sind einige von denen, die unter dem Begriff Sterbliche enthalten sind, Menschen. Daß aber allgemein verneinende Urtheile sich simpliciter umkehren lassen, davon ist die Ursache diese: daß zwei einander allgemein widersprechende Begriffe sich in gleichem Umfange widersprechen.",
     "pages": [
      {
       "p": 119,
       "i": 151
      }
     ],
     "aaEnd": 119,
     "em": [
      [
       72,
       81
      ],
      [
       353,
       364
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 53,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s16-026",
     "kind": "text",
     "aa": 119,
     "text": "2. Manche allgemein bejahenden Urtheile lassen sich zwar auch simpliciter umkehren. Aber der Grund hievon liegt nicht in ihrer Form, sondern in der besondern Beschaffenheit ihrer Materie; wie z.B. die beiden Urtheile: Alles Unveränderliche ist nothwendig, und alles Nothwendige ist unveränderlich.",
     "em": [
      [
       62,
       73
      ]
     ],
     "indent": 1,
     "para": 53,
     "zone": 1
    },
    {
     "id": "jasche-s16-027",
     "kind": "text",
     "aa": 119,
     "text": "Die unmittelbare Schlußart durch die Contraposition besteht in derjenigen Versetzung (metathesis) der Urtheile, bei welcher bloß die Quantität dieselbe bleibt, die Qualität dagegen verändert wird. Sie betreffen nur die Modalität der Urtheile, indem sie ein assertorisches in ein apodiktisches Urtheil verwandeln.",
     "em": [
      [
       86,
       96
      ]
     ],
     "para": 54
    },
    {
     "id": "jasche-s16-028",
     "kind": "text",
     "aa": 119,
     "text": "In Absicht auf die Contraposition gilt die allgemeine Regel:",
     "para": 55
    },
    {
     "id": "jasche-s16-029",
     "kind": "text",
     "aa": 119,
     "text": "Alle allgemein bejahenden Urtheile lassen sich simpliciter contraponiren. Denn wenn das Prädicat als dasjenige, was das Subject unter sich enthält, mithin die ganze Sphäre verneint wird: so muß auch ein Theil derselben verneint werden, d.i. das Subject.",
     "em": [
      [
       47,
       58
      ]
     ],
     "para": 55
    },
    {
     "id": "jasche-s16-030",
     "kind": "rule",
     "aa": 119,
     "zone": 1,
     "para": 55
    },
    {
     "id": "jasche-s16-031",
     "kind": "text",
     "aa": 119,
     "text": "Anmerkung 1. Die Metathesis der Urtheile durch die Conversion und die durch die Contraposition sind also in so fern einander entgegengesetzt, als jene bloß die Quantität, diese bloß die Qualität verändert.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 55,
     "zone": 1
    },
    {
     "id": "jasche-s16-032",
     "kind": "text",
     "aa": 119,
     "text": "2. Die gedachten unmittelbaren Schlußarten beziehen sich bloß auf kategorische Urtheile.",
     "indent": 1,
     "para": 55,
     "zone": 1
    }
   ],
   "running": "[Dritter Abschnitt. Von den Schlüssen.]",
   "range": {
    "from": 44,
    "to": 55,
    "raw": "[§§ 44 — 55]"
   }
  },
  {
   "id": "s17",
   "part": "I. Allgemeine Elementarlehre",
   "title": "II. Vernunftschlüsse.",
   "heading": "[Dritter Abschnitt. Von den Schlüssen.] / II. Vernunftschlüsse. [§§ 56 — 80]",
   "blocks": [
    {
     "id": "jasche-s17-001",
     "kind": "text",
     "aa": 120,
     "text": "Ein Vernunftschluß ist das Erkenntniß der Nothwendigkeit eines Satzes durch die Subsumtion seiner Bedingung unter eine gegebene allgemeine Regel.",
     "para": 56
    },
    {
     "id": "jasche-s17-002",
     "kind": "text",
     "aa": 120,
     "text": "Das allgemeine Princip, worauf die Gültigkeit alles Schließens durch die Vernunft beruht, läßt sich in folgender Formel bestimmt ausdrücken:",
     "para": 57
    },
    {
     "id": "jasche-s17-003",
     "kind": "text",
     "aa": 120,
     "text": "Was unter der Bedingung einer Regel steht, das steht auch unter der Regel selbst.",
     "para": 57
    },
    {
     "id": "jasche-s17-004",
     "kind": "rule",
     "aa": 120,
     "zone": 1,
     "para": 57
    },
    {
     "id": "jasche-s17-005",
     "kind": "text",
     "aa": 120,
     "text": "Anmerkung. Der Vernunftschluß prämittirt eine allgemeine Regel und eine Subsumtion unter die Bedingung derselben. Man erkennt dadurch die Conclusion a priori nicht im Einzelnen, sondern als enthalten im Allgemeinen und als nothwendig unter einer gewissen Bedingung. Und dies, daß alles unter dem Allgemeinen stehe und in allgemeinen Regeln bestimmbar sei, ist eben das Princip der Rationalität oder der Nothwendigkeit (principium rationalitatis sive necessitatis).",
     "em": [
      [
       149,
       157
      ],
      [
       419,
       462
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 57,
     "zone": 1
    },
    {
     "id": "jasche-s17-006",
     "kind": "text",
     "aa": 120,
     "text": "Zu einem jeden Vernunftschlusse gehören folgende wesentlichen drei Stücke:",
     "para": 58
    },
    {
     "id": "jasche-s17-007",
     "kind": "text",
     "aa": 120,
     "text": "1) eine allgemeine Regel, welche der Obersatz (propositio major) genannt wird,",
     "em": [
      [
       47,
       63
      ]
     ],
     "indent": 2,
     "para": 58
    },
    {
     "id": "jasche-s17-008",
     "kind": "text",
     "aa": 120,
     "text": "2) der Satz, der ein Erkenntniß unter die Bedingung der allgemeinen Regel subsumirt und der Untersatz (propositio minor) heißt, und endlich",
     "em": [
      [
       103,
       119
      ]
     ],
     "indent": 2,
     "para": 58
    },
    {
     "id": "jasche-s17-009",
     "kind": "text",
     "aa": 120,
     "text": "3) der Satz, welcher das Prädicat der Regel von der subsumirten Erkenntniß bejaht oder verneint: der Schlußsatz (conclusio).",
     "em": [
      [
       113,
       122
      ]
     ],
     "indent": 2,
     "para": 58
    },
    {
     "id": "jasche-s17-010",
     "kind": "text",
     "aa": 121,
     "text": "Die beiden erstern Sätze werden in ihrer Verbindung mit einander die Vordersätze oder Prämissen genannt.",
     "pages": [
      {
       "p": 121,
       "i": 0
      }
     ],
     "aaEnd": 121,
     "para": 58
    },
    {
     "id": "jasche-s17-011",
     "kind": "rule",
     "aa": 121,
     "zone": 1,
     "para": 58
    },
    {
     "id": "jasche-s17-012",
     "kind": "text",
     "aa": 121,
     "text": "Anmerkung. Eine Regel ist eine Assertion unter einer allgemeinen Bedingung. Das Verhältniß der Bedingung zur Assertion, wie nämlich diese unter jener steht, ist der Exponent der Regel.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 58,
     "zone": 1
    },
    {
     "id": "jasche-s17-013",
     "kind": "text",
     "aa": 121,
     "text": "Die Erkenntniß, daß die Bedingung (irgendwo) stattfinde, ist die Subsumtion.",
     "para": 58,
     "zone": 1
    },
    {
     "id": "jasche-s17-014",
     "kind": "text",
     "aa": 121,
     "text": "Die Verbindung desjenigen, was unter der Bedingung subsumirt worden, mit der Assertion der Regel, ist der Schluß.",
     "para": 58,
     "zone": 1
    },
    {
     "id": "jasche-s17-015",
     "kind": "text",
     "aa": 121,
     "text": "In den Vordersätzen oder Prämissen besteht die Materie, und in der Conclusion, sofern sie die Consequenz enthält, die Form der Vernunftschlüsse.",
     "para": 59
    },
    {
     "id": "jasche-s17-016",
     "kind": "rule",
     "aa": 121,
     "zone": 1,
     "para": 59
    },
    {
     "id": "jasche-s17-017",
     "kind": "text",
     "aa": 121,
     "text": "Anmerkung 1. Bei jedem Vernunftschlusse ist also zuerst die Wahrheit der Prämissen und sodann die Richtigkeit der Consequenz zu prüfen. Nie muß man bei Verwerfung eines Vernunftschlusses zuerst die Conclusion verwerfen, sondern immer erst entweder die Prämissen oder die Consequenz.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 59,
     "zone": 1
    },
    {
     "id": "jasche-s17-018",
     "kind": "text",
     "aa": 121,
     "text": "2. In jedem Vernunftschlusse ist die Conclusion sogleich gegeben, so bald die Prämissen und die Consequenz gegeben ist.",
     "indent": 1,
     "para": 59,
     "zone": 1
    },
    {
     "id": "jasche-s17-019",
     "kind": "text",
     "aa": 121,
     "text": "Alle Regeln (Urtheile) enthalten objective Einheit des Bewußtseins des Mannigfaltigen der Erkenntniß, mithin eine Bedingung, unter der ein Erkenntniß mit dem andern zu einem Bewußtsein gehört. Nun lassen sich aber nur drei Bedingungen dieser Einheit denken, nämlich: als Subject der Inhärenz der Merkmale, oder als Grund der Dependenz eines Erkenntnisses zum andern, oder endlich als Verbindung der Theile in einem Ganzen (logische Eintheilung). Folglich kann es auch nur eben so viele Arten von allgemeinen Regeln (propositiones majores) geben, durch welche die Consequenz eines Urtheils aus dem andern vermittelt wird.",
     "pages": [
      {
       "p": 122,
       "i": 480
      }
     ],
     "aaEnd": 122,
     "em": [
      [
       516,
       537
      ]
     ],
     "para": 60,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s17-020",
     "kind": "text",
     "aa": 122,
     "text": "Und hierauf gründet sich die Eintheilung aller Vernunftschlüsse in kategorische, hypothetische und disjunctive.",
     "para": 60
    },
    {
     "id": "jasche-s17-021",
     "kind": "rule",
     "aa": 122,
     "zone": 1,
     "para": 60
    },
    {
     "id": "jasche-s17-022",
     "kind": "text",
     "aa": 122,
     "text": "Anmerkung 1. Die Vernunftschlüsse können weder der Quantität nach eingetheilt werden, denn jeder major ist eine Regel, mithin etwas Allgemeines; noch in Ansehung der Qualität, denn es ist gleichgeltend, ob die Conclusion bejahend oder verneinend ist; noch endlich in Rücksicht auf die Modalität, denn die Conclusion ist immer mit dem Bewußtsein der Nothwendigkeit begleitet und hat folglich die Dignität eines apodiktischen Satzes. Also bleibt allein nur die Relation als einzig möglicher Eintheilungsgrund der Vernunftschlüsse übrig.",
     "em": [
      [
       97,
       102
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 60,
     "zone": 1
    },
    {
     "id": "jasche-s17-023",
     "kind": "text",
     "aa": 122,
     "text": "2. Viele Logiker halten nur die kategorischen Vernunftschlüsse für ordentliche, die übrigen hingegen für außerordentliche. Allein dieses ist grundlos und falsch. Denn alle drei dieser Arten sind Producte gleich richtiger, aber von einander gleich wesentlich verschiedener Functionen der Vernunft.",
     "indent": 1,
     "para": 60,
     "zone": 1
    },
    {
     "id": "jasche-s17-024",
     "kind": "text",
     "aa": 122,
     "text": "Das Unterscheidende unter den drei gedachten Arten von Vernunftschlüssen liegt im Obersatze. In kategorischen Vernunftschlüssen ist der Major ein kategorischer, in hypothetischen ist er ein hypothetischer oder problematischer, und in disjunctiven ein disjunctiver Satz.",
     "para": 61
    },
    {
     "id": "jasche-s17-025",
     "kind": "text",
     "aa": 122,
     "text": "In einem jeden kategorischen Vernunftschlusse befinden sich drei Hauptbegriffe (termini), nämlich:",
     "em": [
      [
       80,
       87
      ]
     ],
     "para": 62
    },
    {
     "id": "jasche-s17-026",
     "kind": "text",
     "aa": 122,
     "text": "1) das Prädicat in der Conclusion, welcher Begriff der Oberbegriff (terminus major) heißt, weil er eine größere Sphäre hat als das Subject,",
     "em": [
      [
       68,
       82
      ]
     ],
     "indent": 2,
     "para": 62
    },
    {
     "id": "jasche-s17-027",
     "kind": "text",
     "aa": 122,
     "text": "2) das Subject (in der Conclusion), dessen Begriff der Unterbegriff (terminus minor) heißt, und",
     "em": [
      [
       69,
       83
      ]
     ],
     "indent": 2,
     "para": 62,
     "maybeContinues": true
    },
    {
     "id": "jasche-s17-028",
     "kind": "text",
     "aa": 123,
     "text": "3) ein vermittelndes Merkmal (nota intermedia), welches der Mittelbegriff (terminus medius) heißt, weil durch denselben ein Erkenntniß unter die Bedingung der Regel subsumirt wird.",
     "pages": [
      {
       "p": 123,
       "i": 0
      }
     ],
     "aaEnd": 123,
     "em": [
      [
       30,
       45
      ],
      [
       75,
       90
      ]
     ],
     "indent": 2,
     "para": 62
    },
    {
     "id": "jasche-s17-029",
     "kind": "rule",
     "aa": 123,
     "zone": 1,
     "para": 62
    },
    {
     "id": "jasche-s17-030",
     "kind": "text",
     "aa": 123,
     "text": "Anmerkung. Dieser Unterschied in den gedachten terminis findet nur in kategorischen Vernunftschlüssen statt, weil nur diese allein durch einen terminum medium schließen; die andern dagegen nur durch die Subsumtion eines im Major problematisch und im Minor assertorisch vorgestellten Satzes.",
     "em": [
      [
       47,
       55
      ],
      [
       143,
       158
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 62,
     "zone": 1
    },
    {
     "id": "jasche-s17-031",
     "kind": "text",
     "aa": 123,
     "text": "Das Princip, worauf die Möglichkeit und Gültigkeit aller kategorischen Vernunftschlüsse beruht, ist dieses:",
     "para": 63
    },
    {
     "id": "jasche-s17-032",
     "kind": "text",
     "aa": 123,
     "text": "Was dem Merkmale einer Sache zukommt, das kommt auch der Sache selbst zu; und was dem Merkmale einer Sache widerspricht, das widerspricht auch der Sache selbst (nota notae est nota rei ipsius; repugnans notae, repugnat rei ipsi).",
     "em": [
      [
       161,
       227
      ]
     ],
     "para": 63
    },
    {
     "id": "jasche-s17-033",
     "kind": "rule",
     "aa": 123,
     "zone": 1,
     "para": 63
    },
    {
     "id": "jasche-s17-034",
     "kind": "text",
     "aa": 123,
     "text": "Anmerkung. Aus dem so eben aufgestellten Princip läßt sich das sogenannte Dictum de omni et nullo leicht deduciren, und es kann um deswillen nicht als das oberste Princip weder für die Vernunftschlüsse überhaupt, noch für die kategorischen insbesondre gelten.",
     "em": [
      [
       74,
       97
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 63,
     "zone": 1
    },
    {
     "id": "jasche-s17-035",
     "kind": "text",
     "aa": 123,
     "text": "Die Gattungs- und Art-Begriffe sind nämlich allgemeine Merkmale aller der Dinge, die unter diesen Begriffen stehen. Es gilt demnach hier die Regel: Was der Gattung oder Art zukommt oder widerspricht, das kommt auch zu oder widerspricht allen den Objecten, die unter jener Gattung oder Art enthalten sind. Und diese Regel heißt eben das Dictum de omni et nullo.",
     "em": [
      [
       336,
       359
      ]
     ],
     "para": 63,
     "zone": 1
    },
    {
     "id": "jasche-s17-036",
     "kind": "text",
     "aa": 123,
     "text": "Aus der Natur und dem Princip der kategorischen Vernunftschlüsse fließen folgende Regeln für dieselben:",
     "para": 64
    },
    {
     "id": "jasche-s17-037",
     "kind": "text",
     "aa": 124,
     "text": "1) In jedem kategorischen Vernunftschlusse können nicht mehr noch weniger Hauptbegriffe (termini) enthalten sein als drei; denn ich soll hier zwei Begriffe (Subject und Prädicat) durch ein vermittelndes Merkmal verbinden.",
     "pages": [
      {
       "p": 124,
       "i": 0
      }
     ],
     "aaEnd": 124,
     "em": [
      [
       89,
       96
      ]
     ],
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-038",
     "kind": "text",
     "aa": 124,
     "text": "2) Die Vordersätze oder Prämissen dürfen nicht insgesammt verneinen (ex puris negativis nihil sequitur); denn die Subsumtion im Untersatze muß bejahend sein, als welche aussagt, daß ein Erkenntniß unter der Bedingung der Regel stehe.",
     "em": [
      [
       69,
       102
      ]
     ],
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-039",
     "kind": "text",
     "aa": 124,
     "text": "3) Die Prämissen dürfen auch nicht insgesammt besondere (particulare) Sätze sein (ex puris particularibus nihil sequitur); denn alsdann gäbe es keine Regel, d.h. keinen allgemeinen Satz, woraus ein besonderes Erkenntniß könnte gefolgert werden.",
     "em": [
      [
       82,
       120
      ]
     ],
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-040",
     "kind": "text",
     "aa": 124,
     "text": "4) Die Conclusion richtet sich allemal nach dem schwächern Theile des Schlusses; d.h. nach dem verneinenden und besondern Satze in den Prämissen, als welcher der schwächere Theil des kategorischen Vernunftschlusses genannt wird (conclusio sequitur partem debiliorem). Ist daher",
     "em": [
      [
       229,
       265
      ]
     ],
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-041",
     "kind": "text",
     "aa": 124,
     "text": "5) einer von den Vordersätzen ein negativer Satz: so muß die Conclusion auch negativ sein, und",
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-042",
     "kind": "text",
     "aa": 124,
     "text": "6) ist ein Vordersatz ein particularer Satz: so muß die Conclusion auch particular sein.",
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-043",
     "kind": "text",
     "aa": 124,
     "text": "7) In allen kategorischen Vernunftschlüssen muß der Major ein allgemeiner (universalis), der Minor aber ein bejahender Satz (affirmans) sein, und hieraus folgt endlich,",
     "em": [
      [
       75,
       86
      ],
      [
       125,
       134
      ]
     ],
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-044",
     "kind": "text",
     "aa": 124,
     "text": "8) daß die Conclusion in Ansehung der Qualität nach dem Obersatze, in Rücksicht auf die Quantität aber nach dem Untersatze sich richten müsse.",
     "indent": 2,
     "para": 64
    },
    {
     "id": "jasche-s17-045",
     "kind": "rule",
     "aa": 124,
     "zone": 1,
     "para": 64
    },
    {
     "id": "jasche-s17-046",
     "kind": "text",
     "aa": 124,
     "text": "Anmerkung. Daß sich die Conclusion jederzeit nach dem verneinenden und besondern Satze in den Prämissen richten müsse, ist leicht einzusehen.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 64,
     "zone": 1
    },
    {
     "id": "jasche-s17-047",
     "kind": "text",
     "aa": 124,
     "text": "Wenn ich den Untersatz nur particular mache und sage: Einiges ist unter der Regel enthalten, so kann ich in der Conclusion auch nur sagen, daß das Prädicat der Regel Einigem zukomme, weil ich nicht mehr als dieses unter die Regel subsumirt habe. Und wenn ich einen verneinenden Satz zur Regel (Obersatz) habe: so muß ich die Conclusion auch verneinend machen. Denn wenn der Obersatz sagt: Von allem, was unter der Bedingung der Regel steht, muß dieses oder jenes Prädicat verneint werden: so muß die Conclusion das Prädicat auch von dem (Subject) verneinen, was unter die Bedingung der Regel subsumirt worden.",
     "pages": [
      {
       "p": 125,
       "i": 500
      }
     ],
     "aaEnd": 125,
     "para": 64,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s17-048",
     "kind": "text",
     "aa": 125,
     "text": "Ein kategorischer Vernunftschluß ist rein (purus), wenn in demselben kein unmittelbarer Schluß eingemischt, noch die gesetzmäßige Ordnung der Prämissen verändert ist; widrigenfalls wird er ein unreiner oder vermischter (ratiocinium impurum oder hybridum) genannt.",
     "em": [
      [
       43,
       48
      ],
      [
       220,
       239
      ],
      [
       245,
       253
      ]
     ],
     "para": 65
    },
    {
     "id": "jasche-s17-049",
     "kind": "text",
     "aa": 125,
     "text": "Zu den vermischten Schlüssen sind diejenigen zu rechnen, welche durch die Umkehrung der Sätze entstehen und in denen also die Stellung dieser Sätze nicht die gesetzmäßige ist. Dieser Fall findet statt bei den drei letztern sogenannten Figuren des kategorischen Vernunftschlusses.",
     "para": 66
    },
    {
     "id": "jasche-s17-050",
     "kind": "text",
     "aa": 125,
     "text": "Unter Figuren sind diejenigen vier Arten zu schließen zu verstehen, deren Unterschied durch die besondre Stellung der Prämissen und ihrer Begriffe bestimmt wird.",
     "para": 67
    },
    {
     "id": "jasche-s17-051",
     "kind": "text",
     "aa": 125,
     "text": "Es kann nämlich der Mittelbegriff, auf dessen Stellung es hier eigentlich ankommt, entweder 1) im Obersatze die Stelle des Subjects und im Untersatze die Stelle des Prädicats, oder 2) in beiden Prämissen die Stelle des Prädicats, oder 3) in beiden die Stelle des Subjects, oder endlich 4) im Obersatze die Stelle des Prädicats und im Untersatze die Stelle des Subjects einnehmen. Durch diese vier Fälle ist der Unterschied der vier Figuren bestimmt. Es bezeichne S das Subject der Conclusion, P das Prädicat derselben und M den terminum medium, so läßt sich das Schema für die gedachten vier Figuren in folgender Tafel darstellen:",
     "pages": [
      {
       "p": 126,
       "i": 427
      }
     ],
     "aaEnd": 126,
     "em": [
      [
       463,
       464
      ],
      [
       493,
       494
      ],
      [
       522,
       523
      ],
      [
       528,
       543
      ]
     ],
     "para": 68,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s17-052",
     "kind": "text",
     "aa": 126,
     "text": "{￼}",
     "align": "center",
     "para": 68
    },
    {
     "id": "jasche-s17-053",
     "kind": "text",
     "aa": 126,
     "text": "Die Regel der ersten Figur ist: daß der Major ein allgemeiner, der Minor ein bejahender Satz sei. Und da dieses die allgemeine Regel aller kategorischen Vernunftschlüsse überhaupt sein muß: so ergiebt sich hieraus, daß die erste Figur die einzig gesetzmäßige sei, die allen übrigen zum Grunde liegt, und worauf alle übrigen, sofern sie Gültigkeit haben sollen, durch Umkehrung der Prämissen (metathesin praemissorum) zurückgeführt werden müssen.",
     "em": [
      [
       392,
       415
      ]
     ],
     "para": 69
    },
    {
     "id": "jasche-s17-054",
     "kind": "rule",
     "aa": 126,
     "zone": 1,
     "para": 69
    },
    {
     "id": "jasche-s17-055",
     "kind": "text",
     "aa": 126,
     "text": "Anmerkung. Die erste Figur kann eine Conclusion von aller Quantität und Qualität haben. In den übrigen Figuren giebt es nur Conclusionen von gewisser Art; einige modi derselben sind hier ausgeschlossen. Dies zeigt schon an, daß diese Figuren nicht vollkommen, sondern daß gewisse Einschränkungen dabei vorhanden sind, die es verhindern, daß die Conclusion nicht in allen modis, wie in der ersten Figur, stattfinden kann.",
     "em": [
      [
       162,
       166
      ],
      [
       371,
       376
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 69,
     "zone": 1
    },
    {
     "id": "jasche-s17-056",
     "kind": "text",
     "aa": 126,
     "text": "Die Bedingung der Gültigkeit der drei letztern Figuren, unter welcher in einer jeden derselben ein richtiger Modus des Schließens möglich ist, läuft darauf hinaus: daß der Medius Terminus in den Sätzen eine solche Stelle erhalte, daraus durch unmittelbare Schlüsse (consequentias immediatas) die Stelle derselben nach den Regeln der ersten Figur entspringen kann. — Hieraus ergeben sich folgende Regeln für die drei letztern Figuren.",
     "pages": [
      {
       "p": 127,
       "i": 143
      }
     ],
     "aaEnd": 127,
     "em": [
      [
       266,
       290
      ]
     ],
     "para": 70,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s17-057",
     "kind": "text",
     "aa": 127,
     "text": "In der zweiten Figur steht der Minor recht, also muß der Major umgekehrt werden, und zwar so, daß er allgemein (universalis) bleibt. Dieses ist nur möglich, wenn er allgemein verneinend ist; ist er aber bejahend, so muß er contraponirt werden. In beiden Fällen wird die Conclusion negativ (sequitur partem debiliorem).",
     "em": [
      [
       112,
       123
      ],
      [
       290,
       316
      ]
     ],
     "para": 71
    },
    {
     "id": "jasche-s17-058",
     "kind": "rule",
     "aa": 127,
     "zone": 1,
     "para": 71
    },
    {
     "id": "jasche-s17-059",
     "kind": "text",
     "aa": 127,
     "text": "Anmerkung. Die Regel der zweiten Figur ist: Wem ein Merkmal eines Dinges widerspricht, das widerspricht der Sache selbst. Hier muß ich nun erst umkehren und sagen: Wem ein Merkmal widerspricht, das widerspricht diesem Merkmal, oder ich muß die Conclusion umkehren: Wem ein Merkmal eines Dinges widerspricht, dem widerspricht die Sache selbst, folglich widerspricht es der Sache.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 71,
     "zone": 1
    },
    {
     "id": "jasche-s17-060",
     "kind": "text",
     "aa": 127,
     "text": "In der dritten Figur steht der Major recht, also muß der Minor umgekehrt werden; doch so, daß ein bejahender Satz daraus entspringt. Dieses aber ist nur möglich, indem der bejahende Satz particular ist, folglich ist die Conclusion particular.",
     "para": 72
    },
    {
     "id": "jasche-s17-061",
     "kind": "rule",
     "aa": 127,
     "zone": 1,
     "para": 72
    },
    {
     "id": "jasche-s17-062",
     "kind": "text",
     "aa": 127,
     "text": "Anmerkung. Die Regel der dritten Figur ist: Was einem Merkmale zukommt oder widerspricht, das kommt auch zu oder widerspricht Einigen, unter denen dieses Merkmal enthalten ist. Hier muß ich erst sagen: Es kommt zu oder widerspricht Allen, die unter diesem Merkmal enthalten sind.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 72,
     "zone": 1
    },
    {
     "id": "jasche-s17-063",
     "kind": "text",
     "aa": 128,
     "text": "Wenn in der vierten Figur der Major allgemein verneinend ist: so läßt er sich rein (simpliciter) umkehren, eben so der Minor als particular; also ist die Conclusion negativ. Ist hingegen der Major allgemein bejahend: so läßt er sich entweder nur per accidens umkehren oder contraponiren; also ist die Conclusion entweder particular oder negativ. Soll die Conclusion nicht umgekehrt (PS in SP verwandelt) werden: so muß eine Versetzung der Prämissen (metathesis praemissorum) oder eine Umkehrung (conversio) beider geschehen.",
     "em": [
      [
       84,
       95
      ],
      [
       246,
       258
      ],
      [
       383,
       385
      ],
      [
       389,
       391
      ],
      [
       450,
       473
      ],
      [
       496,
       505
      ]
     ],
     "para": 73
    },
    {
     "id": "jasche-s17-064",
     "kind": "rule",
     "aa": 128,
     "zone": 1,
     "para": 73
    },
    {
     "id": "jasche-s17-065",
     "kind": "text",
     "aa": 128,
     "text": "Anmerkung. In der vierten Figur wird geschlossen: das Prädicat hängt am medio termino, der medius terminus am Subject (der Conclusion), folglich das Subject am Prädicat; welches aber gar nicht folgt, sondern allenfalls sein Umgekehrtes. — Um dieses möglich zu machen, muß der Major zum Minor und vice versa gemacht und die Conclusion umgekehrt werden, weil bei der erstern Veränderung terminus minor in majorem verwandelt wird.",
     "em": [
      [
       72,
       85
      ],
      [
       91,
       106
      ],
      [
       276,
       281
      ],
      [
       286,
       291
      ],
      [
       296,
       306
      ],
      [
       385,
       399
      ],
      [
       403,
       410
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 73,
     "zone": 1
    },
    {
     "id": "jasche-s17-066",
     "kind": "text",
     "aa": 128,
     "text": "Aus den angegebenen Regeln für die drei letztern Figuren erhellt,",
     "para": 74
    },
    {
     "id": "jasche-s17-067",
     "kind": "text",
     "aa": 128,
     "text": "1) daß in keiner derselben es eine allgemein bejahende Conclusion giebt, sondern daß die Conclusion immer entweder negativ oder particular ist;",
     "indent": 2,
     "para": 74
    },
    {
     "id": "jasche-s17-068",
     "kind": "text",
     "aa": 128,
     "text": "2) daß in einer jeden ein unmittelbarer Schluß (consequentia immediata) eingemischt ist, der zwar nicht ausdrücklich bezeichnet wird, aber doch stillschweigend mit einverstanden werden muß, daß also auch um deswillen",
     "em": [
      [
       48,
       70
      ]
     ],
     "indent": 2,
     "para": 74
    },
    {
     "id": "jasche-s17-069",
     "kind": "text",
     "aa": 128,
     "text": "3) alle diese drei letztern modi des Schließens nicht reine, sondern unreine Schlüsse (ratiocinia hybrida, impura) genannt werden müssen, da jeder reine Schluß nicht mehr als drei Hauptsätze (termini) haben kann.",
     "em": [
      [
       28,
       32
      ],
      [
       87,
       113
      ],
      [
       192,
       199
      ]
     ],
     "indent": 2,
     "para": 74
    },
    {
     "id": "jasche-s17-070",
     "kind": "text",
     "aa": 129,
     "text": "Ein hypothetischer Schluß ist ein solcher, der zum Major einen hypothetischen Satz hat. Er besteht also aus zwei Sätzen, 1) einem Vordersatze (antecedens) und 2) einem Nachsatze (consequens), und es wird hier entweder nach dem modo ponente oder dem modo tollente gefolgert.",
     "em": [
      [
       51,
       56
      ],
      [
       143,
       153
      ],
      [
       179,
       189
      ],
      [
       227,
       239
      ],
      [
       249,
       262
      ]
     ],
     "para": 75
    },
    {
     "id": "jasche-s17-071",
     "kind": "rule",
     "aa": 129,
     "zone": 1,
     "para": 75
    },
    {
     "id": "jasche-s17-072",
     "kind": "text",
     "aa": 129,
     "text": "Anmerkung 1. Die hypothetischen Vernunftschlüsse haben also keinen medium terminum, sondern es wird bei denselben die Consequenz eines Satzes aus dem andern nur angezeigt. Es wird nämlich im Major derselben die Consequenz zweier Sätze aus einander ausgedrückt, von denen der erste eine Prämisse, der zweite eine Conclusion ist. Der Minor ist eine Verwandlung der problematischen Bedingung in einen kategorischen Satz.",
     "em": [
      [
       67,
       82
      ],
      [
       191,
       196
      ],
      [
       332,
       337
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 75,
     "zone": 1
    },
    {
     "id": "jasche-s17-073",
     "kind": "text",
     "aa": 129,
     "text": "2. Daraus daß der hypothetische Schluß nur aus zwei Sätzen besteht, ohne einen Mittelbegriff zu haben, ist zu ersehen: daß er eigentlich kein Vernunftschluß sei, sondern vielmehr nur ein unmittelbarer, aus einem Vordersatze und Nachsatze, der Materie oder der Form nach, zu erweisender Schluß (consequentia immediata demonstrabilis [ex antecedente et consequente] vel quoad materiam vel quoad formam).",
     "em": [
      [
       294,
       331
      ],
      [
       332,
       363
      ],
      [
       364,
       399
      ]
     ],
     "indent": 1,
     "para": 75,
     "zone": 1
    },
    {
     "id": "jasche-s17-074",
     "kind": "text",
     "aa": 129,
     "text": "Ein jeder Vernunftschluß soll ein Beweis sein. Nun führt aber der hypothetische nur den Beweis- Grund bei sich. Folglich ist auch hieraus klar, daß er kein Vernunftschluß sein könne.",
     "para": 75,
     "zone": 1
    },
    {
     "id": "jasche-s17-075",
     "kind": "text",
     "aa": 129,
     "text": "Das Princip der hypothetischen Schlüsse ist der Satz des Grundes: A ratione ad rationatum; a negatione rationati ad negationem rationis valet consequentia.",
     "em": [
      [
       66,
       154
      ]
     ],
     "para": 76
    },
    {
     "id": "jasche-s17-076",
     "kind": "text",
     "aa": 129,
     "text": "In den disjunctiven Schlüssen ist der Major ein disjunctiver Satz und muß daher, als solcher, Glieder der Eintheilung oder Disjunction haben.",
     "em": [
      [
       38,
       43
      ]
     ],
     "para": 77
    },
    {
     "id": "jasche-s17-077",
     "kind": "text",
     "aa": 130,
     "text": "Es wird hier entweder 1) von der Wahrheit Eines Gliedes der Disjunction auf die Falschheit der übrigen geschlossen, oder 2) von der Falschheit aller Glieder, außer Einem, auf die Wahrheit dieses Einen. Jenes geschieht durch den modum ponentem (oder ponendo tollentem), dieses durch den modum tollentem (tollendo ponentem).",
     "pages": [
      {
       "p": 130,
       "i": 0
      }
     ],
     "aaEnd": 130,
     "em": [
      [
       228,
       242
      ],
      [
       249,
       266
      ],
      [
       286,
       301
      ],
      [
       303,
       320
      ]
     ],
     "para": 77
    },
    {
     "id": "jasche-s17-078",
     "kind": "rule",
     "aa": 130,
     "zone": 1,
     "para": 77
    },
    {
     "id": "jasche-s17-079",
     "kind": "text",
     "aa": 130,
     "text": "Anmerkung 1. Alle Glieder der Disjunction, außer Einem, zusammengenommen, machen das contradictorische Gegentheil dieses Einen aus. Es findet also hier eine Dichotomie statt, nach welcher, wenn eines von beiden wahr ist, das andre falsch sein muß und umgekehrt.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 77,
     "zone": 1
    },
    {
     "id": "jasche-s17-080",
     "kind": "text",
     "aa": 130,
     "text": "2. Alle disjunctiven Vernunftschlüsse von mehr als zwei Gliedern der Disjunction sind also eigentlich polysyllogistisch. Denn alle wahre Disjunction kann nur bimembris sein, und die logische Division ist auch bimembris, aber die membra subdividentia werden um der Kürze willen unter die membra dividentia gesetzt.",
     "em": [
      [
       158,
       167
      ],
      [
       209,
       218
      ],
      [
       229,
       249
      ],
      [
       287,
       304
      ]
     ],
     "indent": 1,
     "para": 77,
     "zone": 1
    },
    {
     "id": "jasche-s17-081",
     "kind": "text",
     "aa": 130,
     "text": "Das Princip der disjunctiven Schlüsse ist der Grundsatz des ausschließenden Dritten:",
     "para": 78
    },
    {
     "id": "jasche-s17-082",
     "kind": "text",
     "aa": 130,
     "text": "A contradictorie oppositorum negatione unius ad affirmationem alterius, a positione unius ad negationem alterius valet consequentia.",
     "em": [
      [
       0,
       70
      ],
      [
       72,
       131
      ]
     ],
     "para": 78
    },
    {
     "id": "jasche-s17-083",
     "kind": "text",
     "aa": 130,
     "text": "Ein Dilemma ist ein hypothetisch-disjunctiver Vernunftschluß, oder ein hypothetischer Schluß, dessen consequens ein disjunctives Urtheil ist. Der hypothetische Satz, dessen consequens disjunctiv ist, ist der Obersatz; der Untersatz bejaht, daß das consequens (per omnia membra) falsch ist, und der Schlußsatz bejaht, daß das antecedens falsch sei. (A remotione consequentis ad negationem antecedentis valet consequentia.)",
     "em": [
      [
       101,
       111
      ],
      [
       173,
       183
      ],
      [
       248,
       258
      ],
      [
       260,
       276
      ],
      [
       325,
       335
      ],
      [
       349,
       419
      ]
     ],
     "para": 79
    },
    {
     "id": "jasche-s17-084",
     "kind": "rule",
     "aa": 130,
     "zone": 1,
     "para": 79
    },
    {
     "id": "jasche-s17-085",
     "kind": "text",
     "aa": 130,
     "text": "Anmerkung. Die Alten machten sehr viel aus dem Dilemma und nannten diesen Schluß cornutus. Sie wußten einen Gegner dadurch in die Enge zu treiben, daß sie alles hersagten, wo er sich hinwenden konnte und ihm dann auch alles widerlegten. Sie zeigten ihm viele Schwierigkeiten bei jeder Meinung, die er annahm. Aber es ist ein sophistischer Kunstgriff, Sätze nicht geradezu zu widerlegen, sondern nur Schwierigkeiten zu zeigen; welches denn auch bei vielen, ja bei den mehresten Dingen angeht.",
     "pages": [
      {
       "p": 131,
       "i": 138
      }
     ],
     "aaEnd": 131,
     "em": [
      [
       81,
       89
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 79,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s17-086",
     "kind": "text",
     "aa": 131,
     "text": "Wenn wir nun alles das sogleich für falsch erklären wollen, wobei sich Schwierigkeiten finden: so ist es ein leichtes Spiel, alles zu verwerfen. Zwar ist es gut, die Unmöglichkeit des Gegentheils zu zeigen, allein hierin liegt doch etwas Täuschendes, wofern man die Unbegreiflichkeit des Gegentheils für die Unmöglichkeit desselben hält. Die Dilemmata haben daher vieles Verfängliche an sich, ob sie gleich richtig schließen. Sie können gebraucht werden, wahre Sätze zu vertheidigen, aber auch wahre Sätze anzugreifen durch Schwierigkeiten, die man gegen sie aufwirft.",
     "para": 79,
     "zone": 1
    },
    {
     "id": "jasche-s17-087",
     "kind": "text",
     "aa": 131,
     "text": "Ein förmlicher Vernunftschluß ist ein solcher, der nicht nur der Materie nach alles Erforderliche enthält, sondern auch der Form nach richtig und vollständig ausgedrückt ist. Den förmlichen Vernunftschlüssen sind die versteckten (cryptica) entgegengesetzt, zu denen alle diejenigen können gerechnet werden, in welchen entweder die Prämissen versetzt, oder eine der Prämissen ausgelassen, oder endlich der Mittelbegriff allein mit der Conclusion verbunden ist. Ein versteckter Vernunftschluß von der zweiten Art, in welchem die eine Prämisse nicht ausgedrückt, sondern nur mit gedacht wird, heißt ein verstümmelter oder ein Enthymema. Die der dritten Art werden zusammengezogene Schlüsse genannt.",
     "em": [
      [
       230,
       238
      ]
     ],
     "para": 80
    }
   ],
   "running": "[Dritter Abschnitt. Von den Schlüssen.]",
   "range": {
    "from": 56,
    "to": 80,
    "raw": "[§§ 56 — 80]"
   }
  },
  {
   "id": "s18",
   "part": "I. Allgemeine Elementarlehre",
   "title": "III. Schlüsse der Urtheilskraft.",
   "heading": "[Dritter Abschnitt. Von den Schlüssen.] / III. Schlüsse der Urtheilskraft. [§§ 81 — 93]",
   "blocks": [
    {
     "id": "jasche-s18-001",
     "kind": "text",
     "aa": 131,
     "text": "Die Urtheilskraft ist zwiefach: die bestimmende oder die reflectirende Urtheilskraft. Die erstere geht vom Allgemeinen zum Besondern, die zweite vom Besondern zum Allgemeinen. Die letztere hat nur subjective Gültigkeit, denn das Allgemeine, zu welchem sie vom Besondern fortschreitet, ist nur empirische Allgemeinheit — ein bloßes Analogon der logischen.",
     "pages": [
      {
       "p": 132,
       "i": 260
      }
     ],
     "aaEnd": 132,
     "para": 81,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s18-002",
     "kind": "text",
     "aa": 132,
     "text": "Die Schlüsse der Urtheilskraft sind gewisse Schlußarten, aus besondern Begriffen zu allgemeinen zu kommen. Es sind also nicht Functionen der bestimmenden, sondern der reflectirenden Urtheilskraft; mithin bestimmen sie auch nicht das Object, sondern nur die Art der Reflexion über dasselbe, um zu seiner Kenntniß zu gelangen.",
     "para": 82
    },
    {
     "id": "jasche-s18-003",
     "kind": "text",
     "aa": 132,
     "text": "Das Princip, welches den Schlüssen der Urtheilskraft zum Grunde liegt, ist dieses: daß Vieles nicht ohne einen gemeinschaftlichen Grund in Einem zusammenstimmen, sondern daß das, was Vielem auf diese Art zukommt, aus einem gemeinschaftlichen Grunde nothwendig sein werde.",
     "para": 83
    },
    {
     "id": "jasche-s18-004",
     "kind": "rule",
     "aa": 132,
     "zone": 1,
     "para": 83
    },
    {
     "id": "jasche-s18-005",
     "kind": "text",
     "aa": 132,
     "text": "Anmerkung. Da den Schlüssen der Urtheilskraft ein solches Princip zum Grunde liegt, so können sie um deswillen nicht für unmittelbare Schlüsse gehalten werden.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 83,
     "zone": 1
    },
    {
     "id": "jasche-s18-006",
     "kind": "text",
     "aa": 132,
     "text": "Die Urtheilskraft, indem sie vom Besondern zum Allgemeinen fortschreitet, um aus der Erfahrung, mithin nicht a priori (empirisch) allgemeine Urtheile zu ziehen, schließt entweder von vielen auf alle Dinge einer Art, oder von vielen Bestimmungen und Eigenschaften, worin Dinge von einerlei Art zusammenstimmen, auf die übrigen, sofern sie zu demselben Princip gehören. Die erstere Schlußart heißt der Schluß durch Induction, die andre der Schluß nach der Analogie.",
     "em": [
      [
       109,
       117
      ]
     ],
     "para": 84
    },
    {
     "id": "jasche-s18-007",
     "kind": "rule",
     "aa": 132,
     "zone": 1,
     "para": 84
    },
    {
     "id": "jasche-s18-008",
     "kind": "text",
     "aa": 133,
     "text": "Anmerkung 1. Die Induction schließt also vom Besondern aufs Allgemeine (a particulari ad universale) nach dem Princip der Allgemeinmachung: Was vielen Dingen einer Gattung zukommt, das kommt auch den übrigen zu. Die Analogie schließt von particularer Ähnlichkeit zweier Dinge auf totale, nach dem Princip der Specification: Dinge von einer Gattung, von denen man vieles Übereinstimmende kennt, stimmen auch in dem Übrigen überein, was wir in einigen dieser Gattung kennen, an andern aber nicht wahrnehmen. Die Induction erweitert das empirisch Gegebene vom Besondern aufs Allgemeine in Ansehung vieler Gegenstände, die Analogie dagegen die gegebenen Eigenschaften eines Dinges auf mehrere eben desselben Dinges — Eines in Vielen, also in Allen: Induction, Vieles in Einem (was auch in Andern ist), also auch das Übrige in demselben: Analogie. So ist z.B. der Beweisgrund für die Unsterblichkeit aus der völligen Entwickelung der Naturanlagen eines jeden Geschöpfs ein Schluß nach der Analogie.",
     "pages": [
      {
       "p": 133,
       "i": 0
      }
     ],
     "aaEnd": 133,
     "em": [
      [
       72,
       99
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 84,
     "zone": 1
    },
    {
     "id": "jasche-s18-009",
     "kind": "text",
     "aa": 133,
     "text": "Bei dem Schlusse nach der Analogie wird indessen nicht die Identität des Grundes (par ratio) erfordert. Wir schließen nach der Analogie nur auf vernünftige Mondbewohner, nicht auf Menschen. Auch kann man nach der Analogie nicht über das tertium comparationis hinaus schließen.",
     "em": [
      [
       82,
       91
      ],
      [
       237,
       258
      ]
     ],
     "para": 84,
     "zone": 1
    },
    {
     "id": "jasche-s18-010",
     "kind": "text",
     "aa": 133,
     "text": "2. Ein jeder Vernunftschluß muß Nothwendigkeit geben. Induction und Analogie sind daher keine Vernunftschlüsse, sondern nur logische Präsumtionen oder auch empirische Schlüsse; und durch Induction bekommt man wohl generale, aber nicht universale Sätze.",
     "indent": 1,
     "para": 84,
     "zone": 1
    },
    {
     "id": "jasche-s18-011",
     "kind": "text",
     "aa": 133,
     "text": "3. Die gedachten Schlüsse der Urtheilskraft sind nützlich und unentbehrlich zum Behuf der Erweiterung unsers Erfahrungserkenntnisses. Da sie aber nur empirische Gewißheit geben: so müssen wir uns ihrer mit Behutsamkeit und Vorsicht bedienen.",
     "indent": 1,
     "para": 84,
     "zone": 1
    },
    {
     "id": "jasche-s18-012",
     "kind": "text",
     "aa": 133,
     "text": "Ein Vernunftschluß heißt einfach, wenn er nur aus einem, zusammengesetzt, wenn er aus mehreren Vernunftschlüssen besteht.",
     "para": 85
    },
    {
     "id": "jasche-s18-013",
     "kind": "text",
     "aa": 133,
     "text": "Ein zusammengesetzter Schluß, in welchem die mehreren Vernunftschlüsse nicht durch bloße Coordination, sondern durch Subordination, d.h. als Gründe und Folgen mit einander verbunden sind, wird eine Kette von Vernunftschlüssen genannt (ratiocinatio polysyllogistica).",
     "pages": [
      {
       "p": 134,
       "i": 132
      }
     ],
     "aaEnd": 134,
     "em": [
      [
       235,
       264
      ]
     ],
     "para": 86,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s18-014",
     "kind": "text",
     "aa": 134,
     "text": "In der Reihe zusammengesetzter Schlüsse kann man auf eine doppelte Art, entweder von den Gründen herab zu den Folgen, oder von den Folgen herauf zu den Gründen schließen. Das erste geschieht durch Episyllogismen, das andre durch Prosyllogismen.",
     "para": 87
    },
    {
     "id": "jasche-s18-015",
     "kind": "text",
     "aa": 134,
     "text": "Ein Episyllogismus ist nämlich derjenige Schluß in der Reihe von Schlüssen, dessen Prämisse die Conclusion eines Prosyllogismus, also eines Schlusses wird, welcher die Prämisse des erstern zur Conclusion hat.",
     "para": 87
    },
    {
     "id": "jasche-s18-016",
     "kind": "text",
     "aa": 134,
     "text": "Ein aus mehreren abgekürzten und unter einander zu einer Conclusion verbundenen Schlüssen bestehender Schluß heißt ein Sorites oder Kettenschluß, der entweder progressiv oder regressiv sein kann; je nachdem man von den nähern Gründen zu den entferntern hinauf-, oder von den entferntern Gründen zu den nähern herabsteigt.",
     "para": 88
    },
    {
     "id": "jasche-s18-017",
     "kind": "text",
     "aa": 134,
     "text": "Die progressiven sowohl als die regressiven Kettenschlüsse können hinwiederum entweder kategorische oder hypothetische sein. Jene bestehen aus kategorischen Sätzen als einer Reihe von Prädicaten, diese aus hypothetischen, als einer Reihe von Consequenzen.",
     "para": 89
    },
    {
     "id": "jasche-s18-018",
     "kind": "text",
     "aa": 134,
     "text": "Ein Vernunftschluß, welcher der Form nach falsch ist, ob er gleich den Schein eines richtigen Schlusses für sich hat, heißt ein Trugschluß (fallacia). Ein solcher Schluß ist ein Paralogismus, in so fern man sich selbst dadurch hintergeht, ein Sophisma, sofern man Andre dadurch mit Absicht zu hintergehen sucht.",
     "pages": [
      {
       "p": 135,
       "i": 207
      }
     ],
     "aaEnd": 135,
     "em": [
      [
       140,
       148
      ]
     ],
     "para": 90,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s18-019",
     "kind": "rule",
     "aa": 135,
     "zone": 1,
     "para": 90
    },
    {
     "id": "jasche-s18-020",
     "kind": "text",
     "aa": 135,
     "text": "Anmerkung. Die Alten beschäftigten sich sehr mit der Kunst, dergleichen Sophismen zu machen. Daher sind viele von der Art aufgekommen; z.B. das Sophisma figurae dictionis, worin der medius terminus in verschiedener Bedeutung genommen wird — fallacia a dicto secundum quid ad dictum simpliciter, sophisma heterozeteseos, elenchi, ignorationis u.dgl.m.",
     "em": [
      [
       144,
       171
      ],
      [
       182,
       197
      ],
      [
       241,
       293
      ],
      [
       295,
       341
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 90,
     "zone": 1
    },
    {
     "id": "jasche-s18-021",
     "kind": "text",
     "aa": 135,
     "text": "Ein Sprung (saltus) im Schließen oder Beweisen ist die Verbindung einer Prämisse mit der Conclusion, so daß die andre Prämisse ausgelassen wird. Ein solcher Sprung ist rechtmäßig (legitimus), wenn ein Jeder die fehlende Prämisse leicht hinzudenken kann, unrechtmäßig (illegitimus) aber, wenn die Subsumtion nicht klar ist. Es wird hier ein entferntes Merkmal mit einer Sache ohne Zwischenmerkmal (nota intermedia) verknüpft.",
     "em": [
      [
       12,
       18
      ],
      [
       180,
       189
      ],
      [
       268,
       279
      ],
      [
       397,
       412
      ]
     ],
     "para": 91
    },
    {
     "id": "jasche-s18-022",
     "kind": "text",
     "aa": 135,
     "text": "Unter einer petitio principii versteht man die Annehmung eines Satzes zum Beweisgrunde als eines unmittelbar gewissen Satzes, obgleich er noch eines Beweises bedarf. Und einen Cirkel im Beweisen begeht man, wenn man denjenigen Satz, den man hat beweisen wollen, seinem eigenen Beweise zum Grunde legt.",
     "em": [
      [
       12,
       29
      ]
     ],
     "para": 92
    },
    {
     "id": "jasche-s18-023",
     "kind": "rule",
     "aa": 135,
     "zone": 1,
     "para": 92
    },
    {
     "id": "jasche-s18-024",
     "kind": "text",
     "aa": 135,
     "text": "Anmerkung. Der Cirkel im Beweisen ist oft schwer zu entdecken, und dieser Fehler wird gerade da gemeiniglich am häufigsten begangen, wo die Beweise schwer sind.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 92,
     "zone": 1
    },
    {
     "id": "jasche-s18-025",
     "kind": "text",
     "aa": 136,
     "text": "Ein Beweis kann zu viel, aber auch zu wenig beweisen. Im letztern Falle beweist er nur einen Theil von dem, was bewiesen werden soll, im erstern geht er auch auf das, welches falsch ist.",
     "para": 93
    },
    {
     "id": "jasche-s18-026",
     "kind": "rule",
     "aa": 136,
     "zone": 1,
     "para": 93
    },
    {
     "id": "jasche-s18-027",
     "kind": "text",
     "aa": 136,
     "text": "Anmerkung. Ein Beweis, der zu wenig beweist, kann wahr sein und ist also nicht zu verwerfen. Beweist er aber zu viel: so beweist er mehr, als was wahr ist; und das ist denn falsch. So beweist z.B. der Beweis wider den Selbstmord: daß, wer sich nicht das Leben gegeben, es sich auch nicht nehmen könne, zu viel; denn aus diesem Grunde dürften wir auch keine Thiere tödten. Er ist also falsch.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 93,
     "zone": 1
    },
    {
     "id": "jasche-s18-028",
     "kind": "rule",
     "aa": 136,
     "zone": 2,
     "para": 93
    }
   ],
   "running": "[Dritter Abschnitt. Von den Schlüssen.]",
   "range": {
    "from": 81,
    "to": 93,
    "raw": "[§§ 81 — 93]"
   }
  },
  {
   "id": "s19",
   "part": "II. Allgemeine Methodenlehre",
   "title": "II. Allgemeine Methodenlehre.",
   "heading": "II. Allgemeine Methodenlehre. / [Allgemeine Methodenlehre.] / [§§ 94 — 98]",
   "blocks": [
    {
     "id": "jasche-s19-001",
     "kind": "text",
     "aa": 139,
     "text": "Alle Erkenntniß und ein Ganzes derselben muß einer Regel gemäß sein. (Regellosigkeit ist zugleich Unvernunft.) Aber diese Regel ist entweder die der Manier (frei) oder die der Methode (Zwang).",
     "pages": [
      {
       "p": 139,
       "i": 0
      }
     ],
     "aaEnd": 139,
     "para": 94
    },
    {
     "id": "jasche-s19-002",
     "kind": "text",
     "aa": 139,
     "text": "Die Erkenntniß, als Wissenschaft, muß nach einer Methode eingerichtet sein. Denn Wissenschaft ist ein Ganzes der Erkenntniß als System und nicht bloß als Aggregat. Sie erfordert daher eine systematische, mithin nach überlegten Regeln abgefaßte Erkenntniß.",
     "para": 95
    },
    {
     "id": "jasche-s19-003",
     "kind": "text",
     "aa": 139,
     "text": "Wie die Elementarlehre in der Logik die Elemente und Bedingungen der Vollkommenheit einer Erkenntniß zu ihrem Inhalt hat: so hat dagegen die allgemeine Methodenlehre, als der andre Theil der Logik, von der Form einer Wissenschaft überhaupt, oder von der Art und Weise zu handeln, das Mannigfaltige der Erkenntniß zu einer Wissenschaft zu verknüpfen.",
     "para": 96
    },
    {
     "id": "jasche-s19-004",
     "kind": "text",
     "aa": 139,
     "text": "Die Methodenlehre soll die Art vortragen, wie wir zur Vollkommenheit des Erkenntnisses gelangen. Nun besteht eine der wesentlichsten logischen",
     "para": 97,
     "maybeContinues": true
    },
    {
     "id": "jasche-s19-005",
     "kind": "text",
     "aa": 140,
     "text": "Vollkommenheiten des Erkenntnisses in der Deutlichkeit, der Gründlichkeit und systematischen Anordnung derselben zum Ganzen einer Wissenschaft. Die Methodenlehre wird demnach hauptsächlich die Mittel anzugeben haben, durch welche diese Vollkommenheiten des Erkenntnisses befördert werden.",
     "pages": [
      {
       "p": 140,
       "i": 0
      }
     ],
     "aaEnd": 140,
     "para": 97
    },
    {
     "id": "jasche-s19-006",
     "kind": "text",
     "aa": 140,
     "text": "Die Deutlichkeit der Erkenntnisse und ihre Verbindung zu einem systematischen Ganzen hängt ab von der Deutlichkeit der Begriffe sowohl in Ansehung dessen, was in ihnen, als in Rücksicht auf das, was unter ihnen enthalten ist.",
     "para": 98
    },
    {
     "id": "jasche-s19-007",
     "kind": "text",
     "aa": 140,
     "text": "Das deutliche Bewußtsein des Inhalts der Begriffe wird befördert durch Exposition und Definition derselben, das deutliche Bewußtsein ihres Umfanges dagegen durch die logische Eintheilung derselben. — Zuerst also hier von den Mitteln zu Beförderung der Deutlichkeit der Begriffe in Ansehung ihres Inhalts.",
     "para": 98
    }
   ],
   "running": "[Allgemeine Methodenlehre.]",
   "range": {
    "from": 94,
    "to": 98,
    "raw": "[§§ 94 — 98]"
   }
  },
  {
   "id": "s20",
   "part": "II. Allgemeine Methodenlehre",
   "title": "I. Beförderung der logischen Vollkommenheit des Erkenntnisses durch Definition, Exposition und Beschreibung der Begriffe.",
   "heading": "I. Beförderung der logischen Vollkommenheit des Erkenntnisses durch Definition, Exposition und Beschreibung der Begriffe. [§§ 99 — 109]",
   "blocks": [
    {
     "id": "jasche-s20-001",
     "kind": "text",
     "aa": 140,
     "text": "Eine Definition ist ein zureichend deutlicher und abgemessener Begriff (conceptus rei adaequatus in minimis terminis, complete determinatus).",
     "em": [
      [
       72,
       117
      ],
      [
       118,
       139
      ]
     ],
     "para": 99
    },
    {
     "id": "jasche-s20-002",
     "kind": "rule",
     "aa": 140,
     "zone": 1,
     "para": 99
    },
    {
     "id": "jasche-s20-003",
     "kind": "text",
     "aa": 140,
     "text": "Anmerkung. Die Definition ist allein als ein logisch vollkommener Begriff anzusehen, denn es vereinigen sich in ihr die beiden wesentlichsten Vollkommenheiten eines Begriffs: die Deutlichkeit und die Vollständigkeit und Präcision in der Deutlichkeit (Quantität der Deutlichkeit).",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 99,
     "zone": 1
    },
    {
     "id": "jasche-s20-004",
     "kind": "text",
     "aa": 141,
     "text": "Alle Definitionen sind entweder analytisch oder synthetisch. Die erstern sind Definitionen eines gegebenen, die letztern Definitionen eines gemachten Begriffs.",
     "para": 100
    },
    {
     "id": "jasche-s20-005",
     "kind": "text",
     "aa": 141,
     "text": "Die gegebenen Begriffe einer analytischen Definition sind entweder a priori oder a posteriori gegeben; so wie die gemachten Begriffe einer synthetischen Definition entweder a priori oder a posteriori gemacht sind.",
     "em": [
      [
       67,
       75
      ],
      [
       81,
       93
      ],
      [
       173,
       181
      ],
      [
       187,
       199
      ]
     ],
     "para": 101
    },
    {
     "id": "jasche-s20-006",
     "kind": "text",
     "aa": 141,
     "text": "Die Synthesis der gemachten Begriffe, aus welcher die synthetischen Definitionen entspringen, ist entweder die der Exposition (der Erscheinungen) oder die der Construction. Die letztere ist die Synthesis willkürlich gemachter, die erstere, die Synthesis empirisch, — d.h. aus gegebenen Erscheinungen, als der Materie derselben, gemachter Begriffe (conceptus factitii vel a priori vel per synthesin empiricam). Willkürlich gemachte Begriffe sind die mathematischen.",
     "em": [
      [
       348,
       407
      ]
     ],
     "para": 102
    },
    {
     "id": "jasche-s20-007",
     "kind": "rule",
     "aa": 141,
     "zone": 1,
     "para": 102
    },
    {
     "id": "jasche-s20-008",
     "kind": "text",
     "aa": 141,
     "text": "Anmerkung. Alle Definitionen der mathematischen und — wofern anders bei empirischen Begriffen überall Definitionen stattfinden könnten — auch der Erfahrungsbegriffe, müssen also synthetisch gemacht werden. Denn auch bei den Begriffen der letztern Art, z.B. den empirischen Begriffen Wasser, Feuer, Luft u.dgl. soll ich nicht zergliedern, was in ihnen liegt, sondern durch Erfahrung kennen lernen, was zu ihnen gehört. Alle empirischen Begriffe müssen also als gemachte Begriffe angesehen werden, deren Synthesis aber nicht willkürlich, sondern empirisch ist.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 102,
     "zone": 1
    },
    {
     "id": "jasche-s20-009",
     "kind": "text",
     "aa": 141,
     "text": "Da die Synthesis der empirischen Begriffe nicht willkürlich, sondern empirisch ist und als solche niemals vollständig sein kann (weil man in der Erfahrung immer noch mehr Merkmale des Begriffs entdecken kann): so können empirische Begriffe auch nicht definirt werden.",
     "pages": [
      {
       "p": 142,
       "i": 141
      }
     ],
     "aaEnd": 142,
     "para": 103,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s20-010",
     "kind": "rule",
     "aa": 142,
     "zone": 1,
     "para": 103
    },
    {
     "id": "jasche-s20-011",
     "kind": "text",
     "aa": 142,
     "text": "Anmerkung. Synthetisch lassen sich also nur willkürliche Begriffe definiren. Solche Definitionen willkürlicher Begriffe, die nicht nur immer möglich, sondern auch nothwendig sind, und vor alle dem, was vermittelst eines willkürlichen Begriffs gesagt wird, vorangehen müssen, könnte man auch Declarationen nennen, sofern man dadurch seine Gedanken declarirt oder Rechenschaft von dem giebt, was man unter einem Worte versteht. Dies ist der Fall bei den Mathematikern.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 103,
     "zone": 1
    },
    {
     "id": "jasche-s20-012",
     "kind": "text",
     "aa": 142,
     "text": "Alle gegebenen Begriffe, sie mögen a priori oder a posteriori gegeben sein, können nur durch Analysis definirt werden. Denn gegebene Begriffe kann man nur deutlich machen, sofern man die Merkmale derselben successiv klar macht. Werden alle Merkmale eines gegebenen Begriffs klar gemacht: so wird der Begriff vollständig deutlich, enthält er auch nicht zu viel Merkmale, so ist er zugleich präcis und es entspringt hieraus eine Definition des Begriffs.",
     "em": [
      [
       35,
       43
      ],
      [
       49,
       61
      ]
     ],
     "para": 104
    },
    {
     "id": "jasche-s20-013",
     "kind": "rule",
     "aa": 142,
     "zone": 1,
     "para": 104
    },
    {
     "id": "jasche-s20-014",
     "kind": "text",
     "aa": 142,
     "text": "Anmerkung. Da man durch keine Probe gewiß werden kann, ob man alle Merkmale eines gegebenen Begriffs durch vollständige Analyse erschöpft habe: so sind alle analytische Definitionen für unsicher zu halten.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 104,
     "zone": 1
    },
    {
     "id": "jasche-s20-015",
     "kind": "text",
     "aa": 142,
     "text": "Nicht alle Begriffe können also, sie dürfen aber auch nicht alle definirt werden.",
     "para": 105
    },
    {
     "id": "jasche-s20-016",
     "kind": "text",
     "aa": 142,
     "text": "Es giebt Annäherungen zur Definition gewisser Begriffe; dieses sind theils Erörterungen (expositiones), theils Beschreibungen (descriptiones).",
     "em": [
      [
       89,
       101
      ],
      [
       127,
       140
      ]
     ],
     "para": 105
    },
    {
     "id": "jasche-s20-017",
     "kind": "text",
     "aa": 143,
     "text": "Das Exponiren eines Begriffs besteht in der an einander hängenden (successiven) Vorstellung seiner Merkmale, so weit dieselben durch Analyse gefunden sind.",
     "pages": [
      {
       "p": 143,
       "i": 0
      }
     ],
     "aaEnd": 143,
     "para": 105
    },
    {
     "id": "jasche-s20-018",
     "kind": "text",
     "aa": 143,
     "text": "Die Beschreibung ist die Exposition eines Begriffs, sofern sie nicht präcis ist.",
     "para": 105
    },
    {
     "id": "jasche-s20-019",
     "kind": "rule",
     "aa": 143,
     "zone": 1,
     "para": 105
    },
    {
     "id": "jasche-s20-020",
     "kind": "text",
     "aa": 143,
     "text": "Anmerkung 1. Wir können entweder einen Begriff oder die Erfahrung exponiren. Das erste geschieht durch Analysis, das zweite durch Synthesis.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 105,
     "zone": 1
    },
    {
     "id": "jasche-s20-021",
     "kind": "text",
     "aa": 143,
     "text": "2. Die Exposition findet also nur bei gegebenen Begriffen statt, die dadurch deutlich gemacht werden, sie unterscheidet sich dadurch von der Declaration, die eine deutliche Vorstellung gemachter Begriffe ist.",
     "indent": 1,
     "para": 105,
     "zone": 1
    },
    {
     "id": "jasche-s20-022",
     "kind": "text",
     "aa": 143,
     "text": "Da es nicht immer möglich ist, die Analysis vollständig zu machen, und da überhaupt eine Zergliederung, ehe sie vollständig wird, erst unvollständig sein muß: so ist auch eine unvollständige Exposition, als Theil einer Definition, eine wahre und brauchbare Darstellung eines Begriffs. Die Definition bleibt hier immer nur die Idee einer logischen Vollkommenheit, die wir zu erlangen suchen müssen.",
     "para": 105,
     "zone": 1
    },
    {
     "id": "jasche-s20-023",
     "kind": "text",
     "aa": 143,
     "text": "3. Die Beschreibung kann nur bei empirisch gegebenen Begriffen stattfinden. Sie hat keine bestimmten Regeln und enthält nur die Materialien zur Definition.",
     "indent": 1,
     "para": 105,
     "zone": 1
    },
    {
     "id": "jasche-s20-024",
     "kind": "text",
     "aa": 143,
     "text": "Unter bloßen Namen-Erklärungen oder Nominal-Definitionen sind diejenigen zu verstehen, welche die Bedeutung enthalten, die man willkürlich einem gewissen Namen hat geben wollen, und die daher nur das logische Wesen ihres Gegenstandes bezeichnen, oder bloß zu Unterscheidung desselben von andern Objecten dienen. Sach-Erklärungen oder Real-Definitionen hingegen sind solche, die zur Erkenntniß des Objects, seinen innern Bestimmungen nach, zureichen, indem sie die Möglichkeit des Gegenstandes aus innern Merkmalen darlegen.",
     "para": 106
    },
    {
     "id": "jasche-s20-025",
     "kind": "rule",
     "aa": 143,
     "zone": 1,
     "para": 106
    },
    {
     "id": "jasche-s20-026",
     "kind": "text",
     "aa": 143,
     "text": "Anmerkung 1. Wenn ein Begriff innerlich zureichend ist, die Sache zu unterscheiden, so ist er es auch gewiß äußerlich, wenn er aber innerlich nicht zureichend ist: so kann er doch bloß in gewisser Beziehung äußerlich zureichend sein, nämlich in der Vergleichung des Definitums mit andern. Allein die unumschränkte äußere Zulänglichkeit ist ohne die innere nicht möglich.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 106,
     "zone": 1
    },
    {
     "id": "jasche-s20-027",
     "kind": "text",
     "aa": 144,
     "text": "2. Erfahrungsgegenstände erlauben bloß Nominalerklärungen. Logische Nominal-Definitionen gegebener Verstandesbegriffe sind von einem Attribut hergenommen, Real-Definitionen hingegen aus dem Wesen der Sache, dem ersten Grunde der Möglichkeit. Die letztern enthalten also das, was jederzeit der Sache zukommt — das Realwesen derselben. Bloß verneinende Definitionen können auch keine Real-Definitionen heißen, weil verneinende Merkmale wohl zur Unterscheidung einer Sache von andern eben so gut dienen können als bejahende, aber nicht zur Erkenntniß der Sache ihrer innern Möglichkeit nach.",
     "pages": [
      {
       "p": 144,
       "i": 0
      }
     ],
     "aaEnd": 144,
     "indent": 1,
     "para": 106,
     "zone": 1
    },
    {
     "id": "jasche-s20-028",
     "kind": "text",
     "aa": 144,
     "text": "In Sachen der Moral müssen immer Real-Definitionen gesucht werden, dahin muß alles unser Bestreben gerichtet sein. Real-Definitionen giebt es in der Mathematik, denn die Definition eines willkürlichen Begriffs ist immer real.",
     "para": 106,
     "zone": 1
    },
    {
     "id": "jasche-s20-029",
     "kind": "text",
     "aa": 144,
     "text": "3. Eine Definition ist genetisch, wenn sie einen Begriff giebt, durch welchen der Gegenstand a priori in concreto kann dargestellt werden; dergleichen sind alle mathematischen Definitionen.",
     "em": [
      [
       93,
       101
      ],
      [
       102,
       113
      ]
     ],
     "indent": 1,
     "para": 106,
     "zone": 1
    },
    {
     "id": "jasche-s20-030",
     "kind": "text",
     "aa": 144,
     "text": "Die wesentlichen und allgemeinen Erfordernisse, die zur Vollkommenheit einer Definition überhaupt gehören, lassen sich unter den vier Hauptmomenten der Quantität, Qualität, Relation und Modalität betrachten:",
     "para": 107
    },
    {
     "id": "jasche-s20-031",
     "kind": "text",
     "aa": 144,
     "text": "1) der Quantität nach — was die Sphäre der Definition betrifft — müssen die Definition und das Definitum Wechselbegriffe (conceptus reciproci), und mithin die Definition weder weiter noch enger sein als ihr Definitum,",
     "em": [
      [
       122,
       141
      ]
     ],
     "indent": 2,
     "para": 107
    },
    {
     "id": "jasche-s20-032",
     "kind": "text",
     "aa": 144,
     "text": "2) der Qualität nach muß die Definition ein ausführlicher und zugleich präciser Begriff sein,",
     "indent": 2,
     "para": 107
    },
    {
     "id": "jasche-s20-033",
     "kind": "text",
     "aa": 144,
     "text": "3) der Relation nach muß sie nicht tautologisch, d.i. die Merkmale des Definitums müssen, als Erkenntnißgründe desselben, von ihm selbst verschieden sein, und endlich",
     "indent": 2,
     "para": 107
    },
    {
     "id": "jasche-s20-034",
     "kind": "text",
     "aa": 144,
     "text": "4) der Modalität nach müssen die Merkmale nothwendig und also nicht solche sein, die durch Erfahrung hinzukommen.",
     "indent": 2,
     "para": 107
    },
    {
     "id": "jasche-s20-035",
     "kind": "rule",
     "aa": 144,
     "zone": 1,
     "para": 107
    },
    {
     "id": "jasche-s20-036",
     "kind": "text",
     "aa": 144,
     "text": "Anmerkung. Die Bedingung: daß der Gattungsbegriff und der Begriff des specifischen Unterschiedes (genus und differentia specifica) die Definition ausmachen sollen, gilt nur in Ansehung der Nominal-Definitionen in der Vergleichung, aber nicht für die Real-Definitionen in der Ableitung.",
     "pages": [
      {
       "p": 145,
       "i": 156
      }
     ],
     "aaEnd": 145,
     "em": [
      [
       98,
       103
      ],
      [
       108,
       129
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 107,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s20-037",
     "kind": "text",
     "aa": 145,
     "text": "Bei Prüfung der Definitionen sind vier Handlungen zu verrichten; es ist nämlich dabei zu untersuchen: ob die Definition",
     "para": 108
    },
    {
     "id": "jasche-s20-038",
     "kind": "text",
     "aa": 145,
     "text": "1) als ein Satz betrachtet, wahr sei, ob sie",
     "indent": 2,
     "para": 108
    },
    {
     "id": "jasche-s20-039",
     "kind": "text",
     "aa": 145,
     "text": "2) als ein Begriff, deutlich sei,",
     "indent": 2,
     "para": 108
    },
    {
     "id": "jasche-s20-040",
     "kind": "text",
     "aa": 145,
     "text": "3) ob sie als ein deutlicher Begriff auch ausführlich, und endlich",
     "indent": 2,
     "para": 108
    },
    {
     "id": "jasche-s20-041",
     "kind": "text",
     "aa": 145,
     "text": "4) als ein ausführlicher Begriff zugleich bestimmt, d.i. der Sache selbst adäquat sei.",
     "indent": 2,
     "para": 108
    },
    {
     "id": "jasche-s20-042",
     "kind": "text",
     "aa": 145,
     "text": "Eben dieselben Handlungen, die zu Prüfung der Definition gehören, sind nun auch beim Verfertigen derselben zu verrichten. Zu diesem Zweck suche also: 1) wahre Sätze, 2) solche, deren Prädicat den Begriff der Sache nicht schon voraussetzt, 3) sammle deren mehrere und vergleiche sie mit dem Begriffe der Sache selbst, ob sie adäquat sei, und endlich 4) siehe zu, ob nicht ein Merkmal im andern liege oder demselben subordinirt sei.",
     "para": 109
    },
    {
     "id": "jasche-s20-043",
     "kind": "rule",
     "aa": 145,
     "zone": 1,
     "para": 109
    },
    {
     "id": "jasche-s20-044",
     "kind": "text",
     "aa": 145,
     "text": "Anmerkung 1. Diese Regeln gelten, wie sich auch wohl ohne Erinnerung versteht, nur von analytischen Definitionen. — Da man nun hier nie gewiß sein kann, ob die Analyse vollständig gewesen: so darf man die Definition auch nur als Versuch aufstellen und sich ihrer nur so bedienen, als wäre sie keine Definition. Unter dieser Einschränkung kann man sie doch als einen deutlichen und wahren Begriff brauchen und aus den Merkmalen desselben Corollarien ziehen. Ich werde nämlich sagen können: dem der Begriff des Definitums zukommt, kommt auch die Definition zu, aber freilich nicht umgekehrt, da die Definition nicht das ganze Definitum erschöpft.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 109,
     "zone": 1
    },
    {
     "id": "jasche-s20-045",
     "kind": "text",
     "aa": 145,
     "text": "2. Sich des Begriffs vom Definitum bei der Erklärung bedienen, oder das Definitum bei der Definition zum Grunde legen, heißt durch einen Cirkel erklären (circulus in definiendo).",
     "em": [
      [
       154,
       176
      ]
     ],
     "indent": 1,
     "para": 109,
     "zone": 1
    }
   ],
   "range": {
    "from": 99,
    "to": 109,
    "raw": "[§§ 99 — 109]"
   }
  },
  {
   "id": "s21",
   "part": "II. Allgemeine Methodenlehre",
   "title": "II. Beförderung der Vollkommenheit des Erkenntnisses durch logische Eintheilung der Begriffe.",
   "heading": "II. Beförderung der Vollkommenheit des Erkenntnisses durch / logische Eintheilung der Begriffe.[§§ 110 — 120]",
   "blocks": [
    {
     "id": "jasche-s21-001",
     "kind": "text",
     "aa": 146,
     "text": "Ein jeder Begriff enthält ein Mannigfaltiges unter sich, in so fern es übereinstimmt, aber auch, in so fern es verschieden ist. Die Bestimmung eines Begriffs in Ansehung alles Möglichen, was unter ihm enthalten ist, sofern es einander entgegengesetzt, d.i. von einander unterschieden ist, heißt die logische Eintheilung des Begriffs. Der höhere Begriff heißt der eingetheilte Begriff (divisum), und die niedrigern Begriffe die Glieder der Eintheilung (membra dividentia).",
     "em": [
      [
       385,
       392
      ],
      [
       452,
       469
      ]
     ],
     "para": 110
    },
    {
     "id": "jasche-s21-002",
     "kind": "rule",
     "aa": 146,
     "zone": 1,
     "para": 110
    },
    {
     "id": "jasche-s21-003",
     "kind": "text",
     "aa": 146,
     "text": "Anmerkung 1. Einen Begriff theilen und ihn eintheilen ist also sehr verschieden. Bei der Theilung des Begriffs sehe ich, was in ihm enthalten ist (durch Analyse), bei der Eintheilung betrachte ich, was unter ihm enthalten ist. Hier theile ich die Sphäre des Begriffs, nicht den Begriff selbst ein. Weit gefehlt also, daß die Eintheilung eine Theilung des Begriffs sei: so enthalten vielmehr die Glieder der Eintheilung mehr in sich als der eingetheilte Begriff.",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 110,
     "zone": 1
    },
    {
     "id": "jasche-s21-004",
     "kind": "text",
     "aa": 146,
     "text": "2. Wir gehen von niedrigern zu höhern Begriffen hinauf und nachher können wir wieder von diesen zu niedrigern herabgehen — durch Eintheilung.",
     "indent": 1,
     "para": 110,
     "zone": 1
    },
    {
     "id": "jasche-s21-005",
     "kind": "text",
     "aa": 146,
     "text": "Bei jeder Eintheilung eines Begriffs ist darauf zu sehen:",
     "para": 111
    },
    {
     "id": "jasche-s21-006",
     "kind": "text",
     "aa": 146,
     "text": "1) daß die Glieder der Eintheilung sich ausschließen oder einander entgegengesetzt seien, daß sie ferner",
     "indent": 2,
     "para": 111
    },
    {
     "id": "jasche-s21-007",
     "kind": "text",
     "aa": 146,
     "text": "2) unter Einen höhern Begriff (conceptum communem) gehören, und daß sie endlich",
     "em": [
      [
       31,
       49
      ]
     ],
     "indent": 2,
     "para": 111
    },
    {
     "id": "jasche-s21-008",
     "kind": "text",
     "aa": 146,
     "text": "3) alle zusammengenommen die Sphäre des eingetheilten Begriffs ausmachen oder derselben gleich seien.",
     "indent": 2,
     "para": 111
    },
    {
     "id": "jasche-s21-009",
     "kind": "rule",
     "aa": 146,
     "zone": 1,
     "para": 111
    },
    {
     "id": "jasche-s21-010",
     "kind": "text",
     "aa": 147,
     "text": "Anmerkung. Die Glieder der Eintheilung müssen durch contradictorische Entgegensetzung, nicht durch ein bloßes Widerspiel (contrarium) von einander getrennt sein.",
     "pages": [
      {
       "p": 147,
       "i": 0
      }
     ],
     "aaEnd": 147,
     "em": [
      [
       122,
       132
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung",
     "para": 111,
     "zone": 1
    },
    {
     "id": "jasche-s21-011",
     "kind": "text",
     "aa": 147,
     "text": "Verschiedene Eintheilungen eines Begriffes, die in verschiedener Absicht gemacht werden, heißen Nebeneintheilungen, und die Eintheilung der Glieder der Eintheilung wird eine Untereintheilung (subdivisio) genannt.",
     "em": [
      [
       192,
       202
      ]
     ],
     "para": 112
    },
    {
     "id": "jasche-s21-012",
     "kind": "rule",
     "aa": 147,
     "zone": 1,
     "para": 112
    },
    {
     "id": "jasche-s21-013",
     "kind": "text",
     "aa": 147,
     "text": "Anmerkung 1. Die Subdivision kann ins Unendliche fortgesetzt werden, comparativ aber kann sie endlich sein. Die Codivision geht auch, besonders bei Erfahrungsbegriffen, ins Unendliche; denn wer kann alle Relationen der Begriffe erschöpfen?",
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 112,
     "zone": 1
    },
    {
     "id": "jasche-s21-014",
     "kind": "text",
     "aa": 147,
     "text": "2. Man kann die Codivision auch eine Eintheilung nach Verschiedenheit der Begriffe von demselben Gegenstande (Gesichtspunkte), so wie die Subdivision eine Eintheilung der Gesichtspunkte selbst nennen.",
     "indent": 1,
     "para": 112,
     "zone": 1
    },
    {
     "id": "jasche-s21-015",
     "kind": "text",
     "aa": 147,
     "text": "Eine Eintheilung in zwei Glieder heißt Dichotomie; wenn sie aber mehr als zwei Glieder hat, wird sie Polytomie genannt.",
     "para": 113
    },
    {
     "id": "jasche-s21-016",
     "kind": "rule",
     "aa": 147,
     "zone": 1,
     "para": 113
    },
    {
     "id": "jasche-s21-017",
     "kind": "text",
     "aa": 147,
     "text": "Anmerkung 1. Alle Polytomie ist empirisch, die Dichotomie ist die einzige Eintheilung aus Principien a priori, also die einzige primitive Eintheilung. Denn die Glieder der Eintheilung sollen einander entgegengesetzt sein und von jedem A ist doch das Gegentheil nichts mehr als non A.",
     "em": [
      [
       101,
       109
      ],
      [
       235,
       236
      ],
      [
       277,
       282
      ]
     ],
     "indent": 1,
     "anm": "Anmerkung 1",
     "para": 113,
     "zone": 1
    },
    {
     "id": "jasche-s21-018",
     "kind": "text",
     "aa": 147,
     "text": "2. Polytomie kann in der Logik nicht gelehrt werden, denn dazu gehört Erkenntniß des Gegenstandes. Dichotomie aber bedarf nur des Satzes des Widerspruchs, ohne den Begriff, den man eintheilen will, dem Inhalte nach, zu kennen. Die Polytomie bedarf Anschauung; entweder a priori, wie in der Mathematik (z.B. die Eintheilung der Kegelschnitte), oder empirische Anschauung, wie in der Naturbeschreibung. Doch hat die Eintheilung aus dem Princip der Synthesis a priori Trichotomie, nämlich: 1) den Begriff als die Bedingung, 2) das Bedingte, und 3) die Ableitung des letztern aus dem erstern.",
     "pages": [
      {
       "p": 148,
       "i": 494
      }
     ],
     "aaEnd": 148,
     "em": [
      [
       269,
       277
      ],
      [
       456,
       464
      ]
     ],
     "indent": 1,
     "para": 113,
     "zone": 1,
     "joined": [
      "mark"
     ]
    },
    {
     "id": "jasche-s21-019",
     "kind": "text",
     "aa": 148,
     "text": "Was nun insbesondre noch die Methode selbst bei Bearbeitung und Behandlung wissenschaftlicher Erkenntnisse betrifft: so giebt es verschiedene Hauptarten derselben, die wir nach folgender Eintheilung hier angeben können.",
     "para": 114
    },
    {
     "id": "jasche-s21-020",
     "kind": "text",
     "aa": 148,
     "text": "Die scientifische oder scholastische Methode unterscheidet sich von der popularen dadurch, daß jene von Grund- und Elementar-Sätzen, diese hingegen vom Gewöhnlichen und Interessanten ausgeht. — Jene geht auf Gründlichkeit und entfernt daher alles Fremdartige, diese zweckt auf Unterhaltung ab.",
     "para": 115
    },
    {
     "id": "jasche-s21-021",
     "kind": "rule",
     "aa": 148,
     "zone": 1,
     "para": 115
    },
    {
     "id": "jasche-s21-022",
     "kind": "text",
     "aa": 148,
     "text": "Anmerkung. Diese beiden Methoden unterscheiden sich also der Art und nicht dem bloßen Vortrage nach, und Popularität in der Methode ist mithin etwas anders als Popularität im Vortrage.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 115,
     "zone": 1
    },
    {
     "id": "jasche-s21-023",
     "kind": "text",
     "aa": 148,
     "text": "Die systematische Methode ist der fragmentarischen oder rhapsodistischen entgegengesetzt. Wenn man nach einer Methode gedacht hat, und sodann diese Methode auch im Vortrage ausgedrückt und der Übergang von einem Satze zum andern deutlich angegeben ist, so hat man ein Erkenntniß systematisch behandelt. Hat man dagegen nach einer Methode zwar gedacht, den Vortrag aber nicht methodisch eingerichtet: so ist eine solche Methode rhapsodistisch zu nennen.",
     "para": 116
    },
    {
     "id": "jasche-s21-024",
     "kind": "rule",
     "aa": 148,
     "zone": 1,
     "para": 116
    },
    {
     "id": "jasche-s21-025",
     "kind": "text",
     "aa": 148,
     "text": "Anmerkung. Der systematische Vortrag wird dem fragmentarischen, so wie der methodische dem tumultuarischen entgegengesetzt. Der methodisch denkt, kann nämlich systematisch oder fragmentarisch vortragen. Der äußerlich fragmentarische, an sich aber methodische Vortrag ist aphoristisch.",
     "pages": [
      {
       "p": 149,
       "i": 139
      }
     ],
     "aaEnd": 149,
     "indent": 1,
     "anm": "Anmerkung",
     "para": 116,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s21-026",
     "kind": "text",
     "aa": 149,
     "text": "Die analytische Methode ist der synthetischen entgegengesetzt. Jene fängt von dem Bedingten und Begründeten an und geht zu den Principien fort (a principiatis ad principia), diese hingegen geht von den Principien zu den Folgen oder vom Einfachen zum Zusammengesetzten. Die erstere könnte man auch die regressive, so wie die letztere die progressive nennen.",
     "em": [
      [
       144,
       171
      ]
     ],
     "para": 117
    },
    {
     "id": "jasche-s21-027",
     "kind": "rule",
     "aa": 149,
     "zone": 1,
     "para": 117
    },
    {
     "id": "jasche-s21-028",
     "kind": "text",
     "aa": 149,
     "text": "Anmerkung. Die analytische Methode heißt auch sonst die Methode des Erfindens. Für den Zweck der Popularität ist die analytische, für den Zweck der wissenschaftlichen und systematischen Bearbeitung des Erkenntnisses aber ist die synthetische Methode angemessener.",
     "indent": 1,
     "anm": "Anmerkung",
     "para": 117,
     "zone": 1
    },
    {
     "id": "jasche-s21-029",
     "kind": "text",
     "aa": 149,
     "text": "Die syllogistische Methode ist diejenige, nach welcher in einer Kette von Schlüssen eine Wissenschaft vorgetragen wird.",
     "para": 118
    },
    {
     "id": "jasche-s21-030",
     "kind": "text",
     "aa": 149,
     "text": "Tabellarisch heißt diejenige Methode, nach welcher ein schon fertiges Lehrgebäude in seinem ganzen Zusammenhange dargestellt wird.",
     "para": 118
    },
    {
     "id": "jasche-s21-031",
     "kind": "text",
     "aa": 149,
     "text": "Akroamatisch ist die Methode, sofern Jemand allein lehrt, erotematisch, sofern er auch frägt. Die letztere Methode kann hinwiederum in die dialogische oder sokratische und in die katechetische eingetheilt werden, je nachdem die Fragen entweder an den Verstand, oder bloß an das Gedächtniß gerichtet sind.",
     "para": 119
    },
    {
     "id": "jasche-s21-032",
     "kind": "rule",
     "aa": 149,
     "zone": 1,
     "para": 119
    },
    {
     "id": "jasche-s21-033",
     "kind": "text",
     "aa": 149,
     "text": "Anmerkung. Erotematisch kann man nicht anders lehren als durch den Sokratischen Dialog, in welchem sich beide fragen und auch wechselsweise antworten müssen, so daß es scheint, als sei auch der Schüler selbst Lehrer. Der Sokratische Dialog lehrt nämlich durch Fragen, indem er den Lehrling seine eigenen Vernunftprincipien kennen lehrt und ihm die Aufmerksamkeit darauf schärft. Durch die gemeine Katechese aber kann man nicht lehren, sondern nur das, was man akroamatisch gelehrt hat, abfragen. Die katechetische Methode gilt daher auch nur für empirische und historische, die dialogische dagegen für rationale Erkenntnisse.",
     "pages": [
      {
       "p": 150,
       "i": 150
      }
     ],
     "aaEnd": 150,
     "indent": 1,
     "anm": "Anmerkung",
     "para": 119,
     "zone": 1,
     "joined": [
      "inferred"
     ]
    },
    {
     "id": "jasche-s21-034",
     "kind": "text",
     "aa": 150,
     "text": "Unter Meditiren ist Nachdenken oder ein methodisches Denken zu verstehen. Das Meditiren muß alles Lesen und Lernen begleiten, und es ist hierzu erforderlich, daß man zuvörderst vorläufige Untersuchungen anstelle und sodann seine Gedanken in Ordnung bringe oder nach einer Methode verbinde.",
     "para": 120
    },
    {
     "id": "jasche-s21-035",
     "kind": "text",
     "aa": 150,
     "text": "Logik (1800)",
     "align": "center",
     "para": 120
    }
   ],
   "range": {
    "from": 110,
    "to": 120,
    "raw": "[§§ 110 — 120]"
   }
  }
 ],
 "paras": [
  {
   "n": 1,
   "title": "Begriff überhaupt und dessen Unterschied von der Anschauung.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-001",
    "jasche-s13-002",
    "jasche-s13-003",
    "jasche-s13-004",
    "jasche-s13-005"
   ],
   "aa": 91,
   "aaEnd": 91
  },
  {
   "n": 2,
   "title": "Materie und Form der Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-006"
   ],
   "aa": 91,
   "aaEnd": 91
  },
  {
   "n": 3,
   "title": "Empirischer und reiner Begriff.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-007",
    "jasche-s13-008",
    "jasche-s13-009",
    "jasche-s13-010",
    "jasche-s13-011",
    "jasche-s13-012",
    "jasche-s13-013",
    "jasche-s13-014",
    "jasche-s13-015"
   ],
   "aa": 92,
   "aaEnd": 93
  },
  {
   "n": 4,
   "title": "Gegebene (a priori oder a posteriori) und gemachte Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-016",
    "jasche-s13-017",
    "jasche-s13-018",
    "jasche-s13-019"
   ],
   "aa": 93,
   "aaEnd": 93
  },
  {
   "n": 5,
   "title": "Logischer Ursprung der Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-020",
    "jasche-s13-021",
    "jasche-s13-022",
    "jasche-s13-023"
   ],
   "aa": 93,
   "aaEnd": 94
  },
  {
   "n": 6,
   "title": "Logische Actus der Comparation, Reflexion und Abstraction.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-024",
    "jasche-s13-025",
    "jasche-s13-026",
    "jasche-s13-027",
    "jasche-s13-028",
    "jasche-s13-029",
    "jasche-s13-030",
    "jasche-s13-031"
   ],
   "aa": 94,
   "aaEnd": 95
  },
  {
   "n": 7,
   "title": "Inhalt und Umfang der Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-032",
    "jasche-s13-033",
    "jasche-s13-034",
    "jasche-s13-035"
   ],
   "aa": 95,
   "aaEnd": 95
  },
  {
   "n": 8,
   "title": "Größe des Umfanges der Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-036",
    "jasche-s13-037",
    "jasche-s13-038"
   ],
   "aa": 96,
   "aaEnd": 96
  },
  {
   "n": 9,
   "title": "Höhere und niedere Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-039",
    "jasche-s13-040",
    "jasche-s13-041"
   ],
   "aa": 96,
   "aaEnd": 96
  },
  {
   "n": 10,
   "title": "Gattung und Art.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-042",
    "jasche-s13-043"
   ],
   "aa": 96,
   "aaEnd": 97
  },
  {
   "n": 11,
   "title": "Höchste Gattung und niedrigste Art.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-044",
    "jasche-s13-045",
    "jasche-s13-046",
    "jasche-s13-047",
    "jasche-s13-048"
   ],
   "aa": 97,
   "aaEnd": 97
  },
  {
   "n": 12,
   "title": "Weiterer und engerer Begriff. — Wechselbegriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-049",
    "jasche-s13-050"
   ],
   "aa": 98,
   "aaEnd": 98
  },
  {
   "n": 13,
   "title": "Verhältniß des niederen zum höhern, des weitern zum engeren Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-051",
    "jasche-s13-052"
   ],
   "aa": 98,
   "aaEnd": 98
  },
  {
   "n": 14,
   "title": "Allgemeine Regeln in Absicht auf die Subordination der Begriffe.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-053",
    "jasche-s13-054",
    "jasche-s13-055",
    "jasche-s13-056",
    "jasche-s13-057"
   ],
   "aa": 98,
   "aaEnd": 99
  },
  {
   "n": 15,
   "title": "Bedingungen der Entstehung höherer und niederer Begriffe: Logische Abstraction und logische Determination.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-058",
    "jasche-s13-059",
    "jasche-s13-060"
   ],
   "aa": 99,
   "aaEnd": 99
  },
  {
   "n": 16,
   "title": "Gebrauch der Begriffe in abstracto und in concreto.",
   "sec": "s13",
   "blocks": [
    "jasche-s13-061",
    "jasche-s13-062",
    "jasche-s13-063",
    "jasche-s13-064",
    "jasche-s13-065",
    "jasche-s13-066",
    "jasche-s13-067"
   ],
   "aa": 99,
   "aaEnd": 100
  },
  {
   "n": 17,
   "title": "Erklärung eines Urtheils überhaupt.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-001"
   ],
   "aa": 101,
   "aaEnd": 101
  },
  {
   "n": 18,
   "title": "Materie und Form der Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-002"
   ],
   "aa": 101,
   "aaEnd": 101
  },
  {
   "n": 19,
   "title": "Gegenstand der logischen Reflexion die bloße Form der Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-003"
   ],
   "aa": 101,
   "aaEnd": 101
  },
  {
   "n": 20,
   "title": "Logische Formen der Urtheile: Quantität, Qualität, Relation und Modalität.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-004"
   ],
   "aa": 102,
   "aaEnd": 102
  },
  {
   "n": 21,
   "title": "Quantität der Urtheile: Allgemeine, Besondre, Einzelne.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-005",
    "jasche-s14-006",
    "jasche-s14-007",
    "jasche-s14-008",
    "jasche-s14-009",
    "jasche-s14-010",
    "jasche-s14-011",
    "jasche-s14-012",
    "jasche-s14-013",
    "jasche-s14-014",
    "jasche-s14-015"
   ],
   "aa": 102,
   "aaEnd": 103
  },
  {
   "n": 22,
   "title": "Qualität der Urtheile: Bejahende, Verneinende, Unendliche.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-016",
    "jasche-s14-017",
    "jasche-s14-018",
    "jasche-s14-019",
    "jasche-s14-020",
    "jasche-s14-021"
   ],
   "aa": 103,
   "aaEnd": 104
  },
  {
   "n": 23,
   "title": "Relation der Urtheile: Kategorische, Hypothetische, Disjunctive.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-022"
   ],
   "aa": 104,
   "aaEnd": 104
  },
  {
   "n": 24,
   "title": "Kategorische Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-023",
    "jasche-s14-024",
    "jasche-s14-025"
   ],
   "aa": 105,
   "aaEnd": 105
  },
  {
   "n": 25,
   "title": "Hypothetische Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-026",
    "jasche-s14-027",
    "jasche-s14-028",
    "jasche-s14-029"
   ],
   "aa": 105,
   "aaEnd": 106
  },
  {
   "n": 26,
   "title": "Verknüpfungsarten in den hypothetischen Urtheilen: modus ponens und modus tollens.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-030",
    "jasche-s14-031",
    "jasche-s14-032"
   ],
   "aa": 106,
   "aaEnd": 106
  },
  {
   "n": 27,
   "title": "Disjunctive Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-033"
   ],
   "aa": 106,
   "aaEnd": 106
  },
  {
   "n": 28,
   "title": "Materie und Form disjunctiver Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-034",
    "jasche-s14-035",
    "jasche-s14-036"
   ],
   "aa": 106,
   "aaEnd": 107
  },
  {
   "n": 29,
   "title": "Eigenthümlicher Charakter der disjunctiven Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-037",
    "jasche-s14-038",
    "jasche-s14-039",
    "jasche-s14-040",
    "jasche-s14-041",
    "jasche-s14-042",
    "jasche-s14-043",
    "jasche-s14-044",
    "jasche-s14-045"
   ],
   "aa": 107,
   "aaEnd": 108
  },
  {
   "n": 30,
   "title": "Modalität der Urtheile: Problematische, assertorische, apodiktische.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-046",
    "jasche-s14-047",
    "jasche-s14-048",
    "jasche-s14-049",
    "jasche-s14-050",
    "jasche-s14-051"
   ],
   "aa": 108,
   "aaEnd": 109
  },
  {
   "n": 31,
   "title": "Exponible Urtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-052",
    "jasche-s14-053",
    "jasche-s14-054"
   ],
   "aa": 109,
   "aaEnd": 109
  },
  {
   "n": 32,
   "title": "Theoretische und praktische Sätze.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-055",
    "jasche-s14-056",
    "jasche-s14-057"
   ],
   "aa": 110,
   "aaEnd": 110
  },
  {
   "n": 33,
   "title": "Indemonstrable und demonstrable Sätze.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-058",
    "jasche-s14-059"
   ],
   "aa": 110,
   "aaEnd": 110
  },
  {
   "n": 34,
   "title": "Grundsätze.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-060"
   ],
   "aa": 110,
   "aaEnd": 110
  },
  {
   "n": 35,
   "title": "Intuitive und discursive Grundsätze: Axiome und Akroame.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-061"
   ],
   "aa": 110,
   "aaEnd": 110
  },
  {
   "n": 36,
   "title": "Analytische und synthetische Sätze.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-062",
    "jasche-s14-063",
    "jasche-s14-064",
    "jasche-s14-065",
    "jasche-s14-066"
   ],
   "aa": 111,
   "aaEnd": 111
  },
  {
   "n": 37,
   "title": "Tautologische Sätze.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-067",
    "jasche-s14-068",
    "jasche-s14-069",
    "jasche-s14-070",
    "jasche-s14-071"
   ],
   "aa": 111,
   "aaEnd": 111
  },
  {
   "n": 38,
   "title": "Postulat und Problem.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-072",
    "jasche-s14-073",
    "jasche-s14-074",
    "jasche-s14-075",
    "jasche-s14-076"
   ],
   "aa": 112,
   "aaEnd": 112
  },
  {
   "n": 39,
   "title": "Theoreme, Corollarien, Lehnsätze und Scholien.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-077",
    "jasche-s14-078",
    "jasche-s14-079"
   ],
   "aa": 112,
   "aaEnd": 112
  },
  {
   "n": 40,
   "title": "Wahrnehmungs- und Erfahrungsurtheile.",
   "sec": "s14",
   "blocks": [
    "jasche-s14-080",
    "jasche-s14-081",
    "jasche-s14-082",
    "jasche-s14-083"
   ],
   "aa": 113,
   "aaEnd": 113
  },
  {
   "n": 41,
   "title": "Schluß überhaupt.",
   "sec": "s15",
   "blocks": [
    "jasche-s15-001"
   ],
   "aa": 114,
   "aaEnd": 114
  },
  {
   "n": 42,
   "title": "Unmittelbare und mittelbare Schlüsse.",
   "sec": "s15",
   "blocks": [
    "jasche-s15-002",
    "jasche-s15-003"
   ],
   "aa": 114,
   "aaEnd": 114
  },
  {
   "n": 43,
   "title": "Verstandesschlüsse, Vernunftschlüsse und Schlüsse der Urtheilskraft.",
   "sec": "s15",
   "blocks": [
    "jasche-s15-004"
   ],
   "aa": 114,
   "aaEnd": 114
  },
  {
   "n": 44,
   "title": "Eigenthümliche Natur der Verstandesschlüsse.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-001",
    "jasche-s16-002",
    "jasche-s16-003",
    "jasche-s16-004"
   ],
   "aa": 115,
   "aaEnd": 115
  },
  {
   "n": 45,
   "title": "Modi der Verstandesschlüsse.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-005"
   ],
   "aa": 115,
   "aaEnd": 115
  },
  {
   "n": 46,
   "title": "1. Verstandesschlüsse (in Beziehung auf die Quantität der Urtheile) per judicia subalternata.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-006",
    "jasche-s16-007",
    "jasche-s16-008"
   ],
   "aa": 116,
   "aaEnd": 116
  },
  {
   "n": 47,
   "title": "2. Verstandesschlüsse (in Beziehung auf die Qualität der Urtheile) per judicia opposita.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-009",
    "jasche-s16-010",
    "jasche-s16-011"
   ],
   "aa": 116,
   "aaEnd": 116
  },
  {
   "n": 48,
   "title": "a. Verstandesschlüsse per judicia contradictorie opposita./",
   "sec": "s16",
   "blocks": [
    "jasche-s16-012"
   ],
   "aa": 116,
   "aaEnd": 117
  },
  {
   "n": 49,
   "title": "b. Verstandesschlüsse per judicia contrarie opposita.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-013"
   ],
   "aa": 117,
   "aaEnd": 117
  },
  {
   "n": 50,
   "title": "c. Verstandesschlüsse per judicia subcontrarie opposita.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-014",
    "jasche-s16-015",
    "jasche-s16-016",
    "jasche-s16-017"
   ],
   "aa": 117,
   "aaEnd": 117
  },
  {
   "n": 51,
   "title": "3. Verstandesschlüsse (in Rücksicht auf die Relation der Urtheile) per judicia conversa sive per conversionem.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-018"
   ],
   "aa": 118,
   "aaEnd": 118
  },
  {
   "n": 52,
   "title": "Reine und veränderte Umkehrung.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-019"
   ],
   "aa": 118,
   "aaEnd": 118
  },
  {
   "n": 53,
   "title": "Allgemeine Regeln der Umkehrung.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-020",
    "jasche-s16-021",
    "jasche-s16-022",
    "jasche-s16-023",
    "jasche-s16-024",
    "jasche-s16-025",
    "jasche-s16-026"
   ],
   "aa": 118,
   "aaEnd": 119
  },
  {
   "n": 54,
   "title": "4. Verstandesschlüsse (in Beziehung auf die Modalität der Urtheile) per judicia contraposita.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-027"
   ],
   "aa": 119,
   "aaEnd": 119
  },
  {
   "n": 55,
   "title": "Allgemeine Regel der Contraposition.",
   "sec": "s16",
   "blocks": [
    "jasche-s16-028",
    "jasche-s16-029",
    "jasche-s16-030",
    "jasche-s16-031",
    "jasche-s16-032"
   ],
   "aa": 119,
   "aaEnd": 119
  },
  {
   "n": 56,
   "title": "Vernunftschluß überhaupt.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-001"
   ],
   "aa": 120,
   "aaEnd": 120
  },
  {
   "n": 57,
   "title": "Allgemeines Princip aller Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-002",
    "jasche-s17-003",
    "jasche-s17-004",
    "jasche-s17-005"
   ],
   "aa": 120,
   "aaEnd": 120
  },
  {
   "n": 58,
   "title": "Wesentliche Bestandstücke des Vernunftschlusses.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-006",
    "jasche-s17-007",
    "jasche-s17-008",
    "jasche-s17-009",
    "jasche-s17-010",
    "jasche-s17-011",
    "jasche-s17-012",
    "jasche-s17-013",
    "jasche-s17-014"
   ],
   "aa": 120,
   "aaEnd": 121
  },
  {
   "n": 59,
   "title": "Materie und Form der Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-015",
    "jasche-s17-016",
    "jasche-s17-017",
    "jasche-s17-018"
   ],
   "aa": 121,
   "aaEnd": 121
  },
  {
   "n": 60,
   "title": "Eintheilung der Vernunftschlüsse (der Relation nach) in kategorische, hypothetische und disjunctive.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-019",
    "jasche-s17-020",
    "jasche-s17-021",
    "jasche-s17-022",
    "jasche-s17-023"
   ],
   "aa": 121,
   "aaEnd": 122
  },
  {
   "n": 61,
   "title": "Eigenthümlicher Unterschied zwischen kategorischen, hypothetischen und disjunctiven Vernunftschlüssen.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-024"
   ],
   "aa": 122,
   "aaEnd": 122
  },
  {
   "n": 62,
   "title": "1. Kategorische Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-025",
    "jasche-s17-026",
    "jasche-s17-027",
    "jasche-s17-028",
    "jasche-s17-029",
    "jasche-s17-030"
   ],
   "aa": 122,
   "aaEnd": 123
  },
  {
   "n": 63,
   "title": "Princip der kategorischen Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-031",
    "jasche-s17-032",
    "jasche-s17-033",
    "jasche-s17-034",
    "jasche-s17-035"
   ],
   "aa": 123,
   "aaEnd": 123
  },
  {
   "n": 64,
   "title": "Regeln für die kategorischen Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-036",
    "jasche-s17-037",
    "jasche-s17-038",
    "jasche-s17-039",
    "jasche-s17-040",
    "jasche-s17-041",
    "jasche-s17-042",
    "jasche-s17-043",
    "jasche-s17-044",
    "jasche-s17-045",
    "jasche-s17-046",
    "jasche-s17-047"
   ],
   "aa": 123,
   "aaEnd": 125
  },
  {
   "n": 65,
   "title": "Reine und vermischte kategorische Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-048"
   ],
   "aa": 125,
   "aaEnd": 125
  },
  {
   "n": 66,
   "title": "Vermischte Vernunftschlüsse durch Umkehrung der Sätze — Figuren.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-049"
   ],
   "aa": 125,
   "aaEnd": 125
  },
  {
   "n": 67,
   "title": "Vier Figuren der Schlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-050"
   ],
   "aa": 125,
   "aaEnd": 125
  },
  {
   "n": 68,
   "title": "Bestimmungsgrund ihres Unterschiedes durch die verschiedene Stellung des Mittelbegriffes.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-051",
    "jasche-s17-052"
   ],
   "aa": 125,
   "aaEnd": 126
  },
  {
   "n": 69,
   "title": "Regel für die erste Figur, als die einzig gesetzmäßige.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-053",
    "jasche-s17-054",
    "jasche-s17-055"
   ],
   "aa": 126,
   "aaEnd": 126
  },
  {
   "n": 70,
   "title": "Bedingung der Reduction der drei letztern Figuren auf die erstere.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-056"
   ],
   "aa": 126,
   "aaEnd": 127
  },
  {
   "n": 71,
   "title": "Regel der zweiten Figur.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-057",
    "jasche-s17-058",
    "jasche-s17-059"
   ],
   "aa": 127,
   "aaEnd": 127
  },
  {
   "n": 72,
   "title": "Regel der dritten Figur.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-060",
    "jasche-s17-061",
    "jasche-s17-062"
   ],
   "aa": 127,
   "aaEnd": 127
  },
  {
   "n": 73,
   "title": "Regel der vierten Figur.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-063",
    "jasche-s17-064",
    "jasche-s17-065"
   ],
   "aa": 128,
   "aaEnd": 128
  },
  {
   "n": 74,
   "title": "Allgemeine Resultate über die drei letztern Figuren.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-066",
    "jasche-s17-067",
    "jasche-s17-068",
    "jasche-s17-069"
   ],
   "aa": 128,
   "aaEnd": 128
  },
  {
   "n": 75,
   "title": "2. Hypothetische Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-070",
    "jasche-s17-071",
    "jasche-s17-072",
    "jasche-s17-073",
    "jasche-s17-074"
   ],
   "aa": 129,
   "aaEnd": 129
  },
  {
   "n": 76,
   "title": "Princip der hypothetischen Schlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-075"
   ],
   "aa": 129,
   "aaEnd": 129
  },
  {
   "n": 77,
   "title": "3. Disjunctive Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-076",
    "jasche-s17-077",
    "jasche-s17-078",
    "jasche-s17-079",
    "jasche-s17-080"
   ],
   "aa": 129,
   "aaEnd": 130
  },
  {
   "n": 78,
   "title": "Princip der disjunctiven Vernunftschlüsse.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-081",
    "jasche-s17-082"
   ],
   "aa": 130,
   "aaEnd": 130
  },
  {
   "n": 79,
   "title": "Dilemma.",
   "sec": "s17",
   "blocks": [
    "jasche-s17-083",
    "jasche-s17-084",
    "jasche-s17-085",
    "jasche-s17-086"
   ],
   "aa": 130,
   "aaEnd": 131
  },
  {
   "n": 80,
   "title": "Förmliche und versteckte Vernunftschlüsse (ratiocinia formalia und cryptica.)",
   "sec": "s17",
   "blocks": [
    "jasche-s17-087"
   ],
   "aa": 131,
   "aaEnd": 131
  },
  {
   "n": 81,
   "title": "Bestimmende und reflectirende Urtheilskraft.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-001"
   ],
   "aa": 131,
   "aaEnd": 132
  },
  {
   "n": 82,
   "title": "Schlüsse der (reflectirenden) Urtheilskraft.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-002"
   ],
   "aa": 132,
   "aaEnd": 132
  },
  {
   "n": 83,
   "title": "Princip dieser Schlüsse.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-003",
    "jasche-s18-004",
    "jasche-s18-005"
   ],
   "aa": 132,
   "aaEnd": 132
  },
  {
   "n": 84,
   "title": "Induction und Analogie — die beiden Schlußarten der Urtheilskraft.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-006",
    "jasche-s18-007",
    "jasche-s18-008",
    "jasche-s18-009",
    "jasche-s18-010",
    "jasche-s18-011"
   ],
   "aa": 132,
   "aaEnd": 133
  },
  {
   "n": 85,
   "title": "Einfache und zusammengesetzte Vernunftschlüsse.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-012"
   ],
   "aa": 133,
   "aaEnd": 133
  },
  {
   "n": 86,
   "title": "Ratiocinatio polysyllogistica.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-013"
   ],
   "aa": 133,
   "aaEnd": 134
  },
  {
   "n": 87,
   "title": "Prosyllogismen und Episyllogismen.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-014",
    "jasche-s18-015"
   ],
   "aa": 134,
   "aaEnd": 134
  },
  {
   "n": 88,
   "title": "Sorites oder Kettenschluß.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-016"
   ],
   "aa": 134,
   "aaEnd": 134
  },
  {
   "n": 89,
   "title": "Kategorische und hypothetische Sorites.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-017"
   ],
   "aa": 134,
   "aaEnd": 134
  },
  {
   "n": 90,
   "title": "Trugschluß — Paralogismus — Sophisma.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-018",
    "jasche-s18-019",
    "jasche-s18-020"
   ],
   "aa": 134,
   "aaEnd": 135
  },
  {
   "n": 91,
   "title": "Sprung im Schließen.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-021"
   ],
   "aa": 135,
   "aaEnd": 135
  },
  {
   "n": 92,
   "title": "Petitio principii. — Circulus in probando.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-022",
    "jasche-s18-023",
    "jasche-s18-024"
   ],
   "aa": 135,
   "aaEnd": 135
  },
  {
   "n": 93,
   "title": "Probatio plus und minus probans.",
   "sec": "s18",
   "blocks": [
    "jasche-s18-025",
    "jasche-s18-026",
    "jasche-s18-027",
    "jasche-s18-028"
   ],
   "aa": 136,
   "aaEnd": 136
  },
  {
   "n": 94,
   "title": "Manier und Methode.",
   "sec": "s19",
   "blocks": [
    "jasche-s19-001"
   ],
   "aa": 139,
   "aaEnd": 139
  },
  {
   "n": 95,
   "title": "Form der Wissenschaft. — Methode.",
   "sec": "s19",
   "blocks": [
    "jasche-s19-002"
   ],
   "aa": 139,
   "aaEnd": 139
  },
  {
   "n": 96,
   "title": "Methodenlehre. — Gegenstand und Zweck derselben.",
   "sec": "s19",
   "blocks": [
    "jasche-s19-003"
   ],
   "aa": 139,
   "aaEnd": 139
  },
  {
   "n": 97,
   "title": "Mittel zu Beförderung der logischen Vollkommenheit der Erkenntniß.",
   "sec": "s19",
   "blocks": [
    "jasche-s19-004",
    "jasche-s19-005"
   ],
   "aa": 139,
   "aaEnd": 140
  },
  {
   "n": 98,
   "title": "Bedingungen der Deutlichkeit des Erkenntnisses.",
   "sec": "s19",
   "blocks": [
    "jasche-s19-006",
    "jasche-s19-007"
   ],
   "aa": 140,
   "aaEnd": 140
  },
  {
   "n": 99,
   "title": "Definition.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-001",
    "jasche-s20-002",
    "jasche-s20-003"
   ],
   "aa": 140,
   "aaEnd": 140
  },
  {
   "n": 100,
   "title": "Analytische und synthetische Definition.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-004"
   ],
   "aa": 141,
   "aaEnd": 141
  },
  {
   "n": 101,
   "title": "Gegebene und gemachte Begriffe a priori und a posteriori.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-005"
   ],
   "aa": 141,
   "aaEnd": 141
  },
  {
   "n": 102,
   "title": "Synthetische Definitionen durch Exposition oder Construction.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-006",
    "jasche-s20-007",
    "jasche-s20-008"
   ],
   "aa": 141,
   "aaEnd": 141
  },
  {
   "n": 103,
   "title": "Unmöglichkeit empirisch synthetischer Definitionen.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-009",
    "jasche-s20-010",
    "jasche-s20-011"
   ],
   "aa": 141,
   "aaEnd": 142
  },
  {
   "n": 104,
   "title": "Analytische Definitionen durch Zergliederung a priori oder a posteriori gegebene Begriffe.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-012",
    "jasche-s20-013",
    "jasche-s20-014"
   ],
   "aa": 142,
   "aaEnd": 142
  },
  {
   "n": 105,
   "title": "Erörterungen und Beschreibungen.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-015",
    "jasche-s20-016",
    "jasche-s20-017",
    "jasche-s20-018",
    "jasche-s20-019",
    "jasche-s20-020",
    "jasche-s20-021",
    "jasche-s20-022",
    "jasche-s20-023"
   ],
   "aa": 142,
   "aaEnd": 143
  },
  {
   "n": 106,
   "title": "Nominal- und Real-Definitionen.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-024",
    "jasche-s20-025",
    "jasche-s20-026",
    "jasche-s20-027",
    "jasche-s20-028",
    "jasche-s20-029"
   ],
   "aa": 143,
   "aaEnd": 144
  },
  {
   "n": 107,
   "title": "Haupterfordernisse der Definition.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-030",
    "jasche-s20-031",
    "jasche-s20-032",
    "jasche-s20-033",
    "jasche-s20-034",
    "jasche-s20-035",
    "jasche-s20-036"
   ],
   "aa": 144,
   "aaEnd": 145
  },
  {
   "n": 108,
   "title": "Regeln zu Prüfung der Definitionen.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-037",
    "jasche-s20-038",
    "jasche-s20-039",
    "jasche-s20-040",
    "jasche-s20-041"
   ],
   "aa": 145,
   "aaEnd": 145
  },
  {
   "n": 109,
   "title": "Regeln zu Verfertigung der Definitionen.",
   "sec": "s20",
   "blocks": [
    "jasche-s20-042",
    "jasche-s20-043",
    "jasche-s20-044",
    "jasche-s20-045"
   ],
   "aa": 145,
   "aaEnd": 145
  },
  {
   "n": 110,
   "title": "Begriff der logischen Eintheilung.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-001",
    "jasche-s21-002",
    "jasche-s21-003",
    "jasche-s21-004"
   ],
   "aa": 146,
   "aaEnd": 146
  },
  {
   "n": 111,
   "title": "Allgemeine Regeln der logischen Eintheilung.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-005",
    "jasche-s21-006",
    "jasche-s21-007",
    "jasche-s21-008",
    "jasche-s21-009",
    "jasche-s21-010"
   ],
   "aa": 146,
   "aaEnd": 147
  },
  {
   "n": 112,
   "title": "Codivision und Subdivision.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-011",
    "jasche-s21-012",
    "jasche-s21-013",
    "jasche-s21-014"
   ],
   "aa": 147,
   "aaEnd": 147
  },
  {
   "n": 113,
   "title": "Dichotomie und Polytomie.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-015",
    "jasche-s21-016",
    "jasche-s21-017",
    "jasche-s21-018"
   ],
   "aa": 147,
   "aaEnd": 148
  },
  {
   "n": 114,
   "title": "Verschiedene Eintheilungen der Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-019"
   ],
   "aa": 148,
   "aaEnd": 148
  },
  {
   "n": 115,
   "title": "1. Scientifische oder populare Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-020",
    "jasche-s21-021",
    "jasche-s21-022"
   ],
   "aa": 148,
   "aaEnd": 148
  },
  {
   "n": 116,
   "title": "2. Systematische oder fragmentarische Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-023",
    "jasche-s21-024",
    "jasche-s21-025"
   ],
   "aa": 148,
   "aaEnd": 149
  },
  {
   "n": 117,
   "title": "3. Analytische oder synthetische Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-026",
    "jasche-s21-027",
    "jasche-s21-028"
   ],
   "aa": 149,
   "aaEnd": 149
  },
  {
   "n": 118,
   "title": "4. Syllogistische — Tabellarische Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-029",
    "jasche-s21-030"
   ],
   "aa": 149,
   "aaEnd": 149
  },
  {
   "n": 119,
   "title": "5. Akroamatische oder erotematische Methode.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-031",
    "jasche-s21-032",
    "jasche-s21-033"
   ],
   "aa": 149,
   "aaEnd": 150
  },
  {
   "n": 120,
   "title": "Meditiren.",
   "sec": "s21",
   "blocks": [
    "jasche-s21-034",
    "jasche-s21-035"
   ],
   "aa": 150,
   "aaEnd": 150
  }
 ]
};
