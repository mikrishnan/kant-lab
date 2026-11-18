/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing: three models, as cards. A draft for the seminar to correct.

   Each card holds two kinds of thing, kept apart:
   - Kant's words: every quotation is cut from the portal's own text of its passage, so it is
     verbatim, slips of the OCR included, with the passage's address (ref) and citation (cite).
     Made by make_models.py in Claude's scratch space; rerun or edit by hand, keeping the shape.
   - seminar: what the seminar states, in its own words and signed: what is divided
     (divided), by what (criterion), the model's problems, and what it does about earlier
     problems (answers). Empty until the seminar fills it. Nothing here is Claude's reading.

   Fields: key, title, name, color, anchors [{ref, cite}], division [quotes: Kant on what is
   divided and how], kinds [{label, la, ref, cite, q}], examples [quotes], compare [quotes:
   Kant comparing the kinds], words [words for negating found in the anchors], aa (for a
   Reflexion: the AA's phase, locus and sigla, verbatim), ocr (a note where the text is OCR).
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_MODELS = [
 {
  "key": "m1763",
  "title": "1763",
  "name": "Negative Größen",
  "color": "m1",
  "anchors": [
   {
    "ref": "aa02:negative-groessen-0017",
    "cite": "AA 2:171–172"
   }
  ],
  "ocr": "AA II is OCR in the portal: the quotations keep its slips (“nihil o negativum”, “Zero = O”). Check against the page image.",
  "division": [
   {
    "ref": "aa02:negative-groessen-0017",
    "cite": "AA 2:171",
    "q": "Einander entgegengesetzt ist: wovon eines dasjenige aufhebt, was durch das andre gesetzt ist. Diese Entgegensetzung ist zwiefach: entweder s logisch durch den Widerspruch, oder real, d. i. ohne Widerspruch."
   }
  ],
  "kinds": [
   {
    "ref": "aa02:negative-groessen-0018",
    "cite": "AA 2:171",
    "q": "Die erste Opposition, nämlich die logische, ist diejenige, worauf man bis daher einzig und allein sein Augenmerk gerichtet hat. Sie besteht darin: daß von eben demselben Dinge etwas zugleich bejaht und verneint wird. Die Folge dieser logischen Verknüpfung ist gar nichts (nihil o negativum irrepraesentabile)",
    "label": "die logische",
    "la": "nihil negativum irrepraesentabile"
   },
   {
    "ref": "aa02:negative-groessen-0018",
    "cite": "AA 2:171–172",
    "q": "Die zweite Opposition, nämlich die reale, ist diejenige: da zwei Prädicate eines Dinges entgegengesetzt sind, aber nicht durch den Satz des Widerspruchs. … Die Folge davon ist auch Nichts, aber in einem andern Verstande wie beim Widerspruch (nihil privativum, repraesentabile). Wir wollen dieses Nichts künftighin Zero = O nennen",
    "label": "die reale",
    "la": "nihil privativum, repraesentabile"
   }
  ],
  "examples": [
   {
    "ref": "aa02:negative-groessen-0018",
    "cite": "AA 2:171",
    "q": "allein ein Körper, der in Bewegung und in eben demselben Verstande zugleich nicht in Bewegung wäre, ist gar nichts."
   },
   {
    "ref": "aa02:negative-groessen-0018",
    "cite": "AA 2:171",
    "q": "Die Folge davon ist die Ruhe, welche Etwas (repraesentabile) ist."
   },
   {
    "ref": "aa02:negative-groessen-0019",
    "cite": "AA 2:172",
    "q": "Beide Schulden zusammen sind ein Grund vom Zero, d. i. weder Geld zu geben noch zu bekommen."
   }
  ],
  "compare": [
   {
    "ref": "aa02:negative-groessen-0019",
    "cite": "AA 2:172",
    "q": "daß dieses Zero ein verhältnißmäßiges Nichts sei, indem nämlich nur eine gewisse Folge nicht ist, wie in diesem Falle ein gewisses Capital und in dem oben angeführten eine gewisse Bewegung nicht ist; dagegen ist bei der Aufhebung durch den Widerspruch schlechthin Nichts."
   },
   {
    "ref": "aa02:negative-groessen-0019",
    "cite": "AA 2:172",
    "q": "Es läßt sich denken, daß eine gewisse Bewegung nicht sei, daß sie aber zugleich sei und nicht sei, läßt sich garnicht denken."
   }
  ],
  "words": [
   "entgegengesetzt",
   "aufhebt",
   "gesetzt",
   "Widerspruch",
   "bejaht",
   "verneint",
   "zugleich",
   "Zero",
   "Repugnanz",
   "negatio"
  ],
  "seminar": {
   "divided": "",
   "criterion": "",
   "problems": [],
   "answers": ""
  }
 },
 {
  "key": "m1769",
  "title": "c. 1769",
  "name": "Refl. 3990",
  "color": "m2",
  "anchors": [
   {
    "ref": "refl-meta:r3990",
    "cite": "Refl. 3990, AA 17:379"
   }
  ],
  "aa": {
   "phRaw": "κ1",
   "loc": "ZuM § 7-9",
   "sig": "M 2.",
   "src": "locus"
  },
  "division": [],
  "kinds": [
   {
    "ref": "refl-meta:r3990",
    "cite": "AA 17:379",
    "q": "Wenn ich zuerst etwas setze und hernach aufhebe, so ist 0 (g rei)",
    "label": "zuerst … hernach",
    "la": ""
   },
   {
    "ref": "refl-meta:r3990",
    "cite": "AA 17:379",
    "q": "wenn ich zugleich setze und aufhebe, so ist [0 cogitationis\n. . . 0] unmoglich",
    "label": "zugleich",
    "la": ""
   }
  ],
  "examples": [],
  "compare": [
   {
    "ref": "refl-meta:r3990",
    "cite": "AA 17:379",
    "q": "Das unmogliche bedeutet nicht blos conceptum inanem, wobey gar nichts gedacht wird; denn es ist möglich, gar nichts zu denken."
   }
  ],
  "words": [
   "setze",
   "aufhebe",
   "zuerst",
   "hernach",
   "zugleich",
   "unmoglich",
   "conceptum inanem"
  ],
  "seminar": {
   "divided": "",
   "criterion": "",
   "problems": [],
   "answers": ""
  }
 },
 {
  "key": "m1781",
  "title": "1781",
  "name": "The table of nothing",
  "color": "m3",
  "anchors": [
   {
    "ref": "krv-a:krv-a-0486",
    "cite": "A 290–292 / B 346–348"
   }
  ],
  "division": [
   {
    "ref": "krv-a:krv-a-0486",
    "cite": "A 290 / B 346",
    "q": "Da aber alle Eintheilung einen eingetheilten Begriff voraussezt, so muß noch ein höherer angegeben werden, und dieser ist der Begriff von einem Gegenstande überhaupt (problematisch genommen, und unausgemacht, ob er Etwas oder Nichts sey.) Weil die Categorien die einzige Begriffe sind, die sich auf Gegenstände überhaupt beziehen, so wird die Unterscheidung eines Gegenstandes, ob er Etwas, oder Nichts sey, nach der Ordnung und Anweisung der Categorien fortgehen."
   }
  ],
  "kinds": [
   {
    "ref": "krv-a:krv-a-0487",
    "cite": "A 290 / B 347",
    "q": "Den Begriffen von Allem, Vielen und Einem ist der, so alles aufhebt; d. i. Keines entgegen gesezt, und so ist der Gegenstand eines Begriffs, dem gar keine anzugebende Anschauung correspondirt, = Nichts, d. i. ein Begriff ohne Gegenstand, wie die Noümena, die nicht unter die Möglichkeiten gezehlt werden können, obgleich auch darum nicht vor unmöglich ausgegeben werden müssen, (ens rationis)",
    "label": "1. Leerer Begriff ohne Gegenstand",
    "la": "ens rationis"
   },
   {
    "ref": "krv-a:krv-a-0488",
    "cite": "A 291 / B 347",
    "q": "Realität ist Etwas, Negation ist Nichts, nemlich, ein Begriff von dem Mangel eines Gegenstandes, wie der Schatten, die Kälte (nihil privativum).",
    "label": "2. Leerer Gegenstand eines Begriffs",
    "la": "nihil privativum"
   },
   {
    "ref": "krv-a:krv-a-0489",
    "cite": "A 291 / B 347",
    "q": "Die blosse Form der Anschauung, ohne Substanz, ist an sich kein Gegenstand, sondern die blos formale Bedingung desselben, (als Erscheinung) wie der reine Raum, und die reine Zeit (ens imaginarium)",
    "label": "3. Leere Anschauung ohne Gegenstand",
    "la": "ens imaginarium"
   },
   {
    "ref": "krv-a:krv-a-0490",
    "cite": "A 291 / B 348",
    "q": "Der Gegenstand eines Begriffs, der sich selbst widerspricht, ist Nichts, weil der Begriff nichts ist, das Unmögliche, wie etwa die geradlinigte Figur von zwey Seiten (nihil negativum).",
    "label": "4. Leerer Gegenstand ohne Begriff",
    "la": "nihil negativum"
   }
  ],
  "examples": [
   {
    "ref": "krv-a:krv-a-0487",
    "cite": "A 290 / B 347",
    "q": "wie die Noümena, die nicht unter die Möglichkeiten gezehlt werden können, obgleich auch darum nicht vor unmöglich ausgegeben werden müssen,"
   },
   {
    "ref": "krv-a:krv-a-0488",
    "cite": "A 291 / B 347",
    "q": "wie der Schatten, die Kälte"
   },
   {
    "ref": "krv-a:krv-a-0489",
    "cite": "A 291 / B 347",
    "q": "wie der reine Raum, und die reine Zeit"
   },
   {
    "ref": "krv-a:krv-a-0490",
    "cite": "A 291 / B 348",
    "q": "wie etwa die geradlinigte Figur von zwey Seiten"
   }
  ],
  "compare": [
   {
    "ref": "krv-a:krv-a-0492",
    "cite": "A 292 / B 348",
    "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
   }
  ],
  "words": [
   "aufhebt",
   "Keines",
   "Negation",
   "Mangel",
   "ohne",
   "widerspricht",
   "Unmögliche",
   "leere"
  ],
  "seminar": {
   "divided": "",
   "criterion": "",
   "problems": [],
   "answers": ""
  }
 }
];
