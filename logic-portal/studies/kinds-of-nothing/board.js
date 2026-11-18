/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing: the board of three models (board.html).

   The study's own board, as the seminar last agreed it. What anyone changes on the page
   stays in their browser until they export it and it is added here.

   models   each model: id, title, name, cite, color; ocr when the text quoted is OCR;
            from, when the seminar split it off another model.
   items    the cards. kind is
              part     a part of a model, built only from Kant's own labels. Its quotes are
                       cut from the portal's text of the passage, verbatim, OCR slips and all.
              passage  a passage put on the board for itself.
              problem  a model's problem, in the seminar's words (text), signed.
              note     anything else written on the board, signed.
            model is the model a card belongs to, or null. A quote is { q, ref, cite }, ref
            being the portal's textKey:id; one pasted on the page has pasted: true until it
            is checked against the portal.
   arrows   from, to (card ids), type, and layer:
              division    a division inside a model, as Kant's text gives it;
              hypothesis  the seminar's claim about how a part fares from one model to
                          another: kept, renamed, split into, merged from, dropped, new, or
                          a type of their own;
              problem     answers?: a card that may answer a problem;
              computer    same label: drawn only because two parts share a label, never a
                          claim.
            Claims carry text (in the seminar's words), evidence (quotes), by (a GitHub
            username) and date.
   views    arrangements of the same cards: pos (card id -> [x, y]), hidden (cards taken
            off that view), layers (which are shown), and ink, what was drawn on that view:
            pts ([x, y] along the stroke), color, w (its width), model (when drawn inside a
            model's frame, so that it moves with the model), by and date.

   Statements are the seminar's, never Claude's.
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_BOARD = {
 "models": [
  {
   "id": "m1763",
   "title": "1763",
   "name": "Negative Größen",
   "cite": "AA 2:171–172",
   "color": "#5c6e3a",
   "ocr": true
  },
  {
   "id": "m1769",
   "title": "c. 1769",
   "name": "Refl. 3990",
   "cite": "AA 17:379 · phase κ1 · ZuM § 7-9",
   "color": "#8b5e3c"
  },
  {
   "id": "m1781",
   "title": "1781",
   "name": "The table of nothing",
   "cite": "A 290–292 / B 346–348",
   "color": "#3b5068"
  }
 ],
 "items": [
  {
   "id": "n63",
   "kind": "part",
   "model": "m1763",
   "label": "Entgegensetzung",
   "sub": "zwiefach",
   "quotes": [
    {
     "ref": "aa02:negative-groessen-0017",
     "cite": "AA 2:171",
     "q": "Einander entgegengesetzt ist: wovon eines dasjenige aufhebt, was durch das andre gesetzt ist. Diese Entgegensetzung ist zwiefach: entweder s logisch durch den Widerspruch, oder real, d. i. ohne Widerspruch."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n63neg",
   "kind": "part",
   "model": "m1763",
   "label": "nihil negativum",
   "sub": "logisch, durch den Widerspruch",
   "quotes": [
    {
     "ref": "aa02:negative-groessen-0018",
     "cite": "AA 2:171",
     "q": "Die erste Opposition, nämlich die logische, ist diejenige, worauf man bis daher einzig und allein sein Augenmerk gerichtet hat. Sie besteht darin: daß von eben demselben Dinge etwas zugleich bejaht und verneint wird. Die Folge dieser logischen Verknüpfung ist gar nichts (nihil o negativum irrepraesentabile)"
    },
    {
     "ref": "aa02:negative-groessen-0018",
     "cite": "AA 2:171",
     "q": "allein ein Körper, der in Bewegung und in eben demselben Verstande zugleich nicht in Bewegung wäre, ist gar nichts."
    },
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
   "src": "labels"
  },
  {
   "id": "n63priv",
   "kind": "part",
   "model": "m1763",
   "label": "nihil privativum · Zero",
   "sub": "real, ohne Widerspruch",
   "quotes": [
    {
     "ref": "aa02:negative-groessen-0018",
     "cite": "AA 2:171–172",
     "q": "Die Folge davon ist auch Nichts, aber in einem andern Verstande wie beim Widerspruch (nihil privativum, repraesentabile). Wir wollen dieses Nichts künftighin Zero = O nennen"
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
    },
    {
     "ref": "aa02:negative-groessen-0019",
     "cite": "AA 2:172",
     "q": "daß dieses Zero ein verhältnißmäßiges Nichts sei, indem nämlich nur eine gewisse Folge nicht ist, wie in diesem Falle ein gewisses Capital und in dem oben angeführten eine gewisse Bewegung nicht ist; dagegen ist bei der Aufhebung durch den Widerspruch schlechthin Nichts."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n69",
   "kind": "part",
   "model": "m1769",
   "label": "setzen und aufheben",
   "sub": "Refl. 3990",
   "quotes": [
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "Wenn ich zuerst etwas setze und hernach aufhebe, so ist 0 (g rei), wenn ich zugleich setze und aufhebe, so ist [0 cogitationis\n. . . 0] unmoglich. Das unmogliche bedeutet nicht blos conceptum inanem, wobey gar nichts gedacht wird; denn es ist möglich, gar nichts zu denken."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n69rei",
   "kind": "part",
   "model": "m1769",
   "label": "0 (rei)",
   "sub": "zuerst … hernach",
   "quotes": [
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "Wenn ich zuerst etwas setze und hernach aufhebe, so ist 0 (g rei)"
    }
   ],
   "src": "labels"
  },
  {
   "id": "n69cog",
   "kind": "part",
   "model": "m1769",
   "label": "0 cogitationis",
   "sub": "zugleich · unmöglich",
   "quotes": [
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "wenn ich zugleich setze und aufhebe, so ist [0 cogitationis\n. . . 0] unmoglich"
    },
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "Das unmogliche bedeutet nicht blos conceptum inanem, wobey gar nichts gedacht wird; denn es ist möglich, gar nichts zu denken."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81",
   "kind": "part",
   "model": "m1781",
   "label": "Gegenstand überhaupt",
   "sub": "problematisch genommen",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0486",
     "cite": "A 290 / B 346",
     "q": "Da aber alle Eintheilung einen eingetheilten Begriff voraussezt, so muß noch ein höherer angegeben werden, und dieser ist der Begriff von einem Gegenstande überhaupt (problematisch genommen, und unausgemacht, ob er Etwas oder Nichts sey.) Weil die Categorien die einzige Begriffe sind, die sich auf Gegenstände überhaupt beziehen, so wird die Unterscheidung eines Gegenstandes, ob er Etwas, oder Nichts sey, nach der Ordnung und Anweisung der Categorien fortgehen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81etw",
   "kind": "part",
   "model": "m1781",
   "label": "Etwas",
   "sub": "",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0491",
     "cite": "A 291–292 / B 348",
     "q": "Die Tafel dieser Eintheilung des Begriffs von Nichts (denn die dieser gleichlaufende Eintheilung des Etwas folgt von selber)"
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81n",
   "kind": "part",
   "model": "m1781",
   "label": "Nichts",
   "sub": "nach der Ordnung der Categorien",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0491",
     "cite": "A 291–292 / B 348",
     "q": "Die Tafel dieser Eintheilung des Begriffs von Nichts (denn die dieser gleichlaufende Eintheilung des Etwas folgt von selber)"
    },
    {
     "ref": "krv-a:krv-a-0486",
     "cite": "A 290 / B 346",
     "q": "Da aber alle Eintheilung einen eingetheilten Begriff voraussezt, so muß noch ein höherer angegeben werden, und dieser ist der Begriff von einem Gegenstande überhaupt (problematisch genommen, und unausgemacht, ob er Etwas oder Nichts sey.) Weil die Categorien die einzige Begriffe sind, die sich auf Gegenstände überhaupt beziehen, so wird die Unterscheidung eines Gegenstandes, ob er Etwas, oder Nichts sey, nach der Ordnung und Anweisung der Categorien fortgehen."
    },
    {
     "ref": "krv-a:krv-a-0492",
     "cite": "A 292 / B 348",
     "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81er",
   "kind": "part",
   "model": "m1781",
   "label": "ens rationis",
   "sub": "Leerer Begriff ohne Gegenstand",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0487",
     "cite": "A 290 / B 347",
     "q": "Den Begriffen von Allem, Vielen und Einem ist der, so alles aufhebt; d. i. Keines entgegen gesezt, und so ist der Gegenstand eines Begriffs, dem gar keine anzugebende Anschauung correspondirt, = Nichts, d. i. ein Begriff ohne Gegenstand, wie die Noümena, die nicht unter die Möglichkeiten gezehlt werden können, obgleich auch darum nicht vor unmöglich ausgegeben werden müssen, (ens rationis)"
    },
    {
     "ref": "krv-a:krv-a-0492",
     "cite": "A 292 / B 348",
     "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81np",
   "kind": "part",
   "model": "m1781",
   "label": "nihil privativum",
   "sub": "Leerer Gegenstand eines Begriffs",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0488",
     "cite": "A 291 / B 347",
     "q": "Realität ist Etwas, Negation ist Nichts, nemlich, ein Begriff von dem Mangel eines Gegenstandes, wie der Schatten, die Kälte (nihil privativum)."
    },
    {
     "ref": "krv-a:krv-a-0492",
     "cite": "A 292 / B 348",
     "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81ei",
   "kind": "part",
   "model": "m1781",
   "label": "ens imaginarium",
   "sub": "Leere Anschauung ohne Gegenstand",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0489",
     "cite": "A 291 / B 347",
     "q": "Die blosse Form der Anschauung, ohne Substanz, ist an sich kein Gegenstand, sondern die blos formale Bedingung desselben, (als Erscheinung) wie der reine Raum, und die reine Zeit (ens imaginarium)"
    },
    {
     "ref": "krv-a:krv-a-0492",
     "cite": "A 292 / B 348",
     "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "n81nn",
   "kind": "part",
   "model": "m1781",
   "label": "nihil negativum",
   "sub": "Leerer Gegenstand ohne Begriff",
   "quotes": [
    {
     "ref": "krv-a:krv-a-0490",
     "cite": "A 291 / B 348",
     "q": "Der Gegenstand eines Begriffs, der sich selbst widerspricht, ist Nichts, weil der Begriff nichts ist, das Unmögliche, wie etwa die geradlinigte Figur von zwey Seiten (nihil negativum)."
    },
    {
     "ref": "krv-a:krv-a-0492",
     "cite": "A 292 / B 348",
     "q": "Man siehet: daß das Gedankending (n. 1.) von dem Undinge (n. 4.) dadurch unterschieden werde, daß ienes nicht unter die Möglichkeiten gezehlt werden darf, weil es blos Erdichtung (obzwar nicht widersprechende) ist, dieses aber der Möglichkeit entgegen gesezt ist, indem der Begriff so. gar sich selbst aufhebt. Beide sind aber leere Begriffe. Dagegen sind das nihil privativum (n. 2.) und ens imaginarium (n. 3.) leere Data zu Begriffen."
    }
   ],
   "src": "labels"
  },
  {
   "id": "P1",
   "kind": "problem",
   "model": "m1763",
   "text": "Kant does not seem to have enough notions of negation to make sense of all the different ways and meanings of negating something that he wants to accommodate. (From what you said in the session of 13 November: correct the wording.)",
   "quotes": [],
   "by": "mikrishnan",
   "date": "2026-11-13"
  }
 ],
 "arrows": [
  {
   "id": "D-n63-n63neg",
   "from": "n63",
   "to": "n63neg",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n63-n63priv",
   "from": "n63",
   "to": "n63priv",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n69-n69rei",
   "from": "n69",
   "to": "n69rei",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n69-n69cog",
   "from": "n69",
   "to": "n69cog",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81-n81etw",
   "from": "n81",
   "to": "n81etw",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81-n81n",
   "from": "n81",
   "to": "n81n",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81n-n81er",
   "from": "n81n",
   "to": "n81er",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81n-n81np",
   "from": "n81n",
   "to": "n81np",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81n-n81ei",
   "from": "n81n",
   "to": "n81ei",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "D-n81n-n81nn",
   "from": "n81n",
   "to": "n81nn",
   "type": "divides into",
   "layer": "division"
  },
  {
   "id": "L1",
   "from": "n63neg",
   "to": "n81nn",
   "type": "same label",
   "layer": "computer",
   "text": "The same label in both models. Whether it plays the same role is for the seminar to say.",
   "evidence": [],
   "by": "computer"
  },
  {
   "id": "L2",
   "from": "n63priv",
   "to": "n81np",
   "type": "same label",
   "layer": "computer",
   "text": "The same label in both models. Whether it plays the same role is for the seminar to say.",
   "evidence": [],
   "by": "computer"
  },
  {
   "id": "L3",
   "from": "n69",
   "to": "P1",
   "type": "answers?",
   "layer": "problem",
   "text": "Refl. 3990 seems in some way to deal with this problem, and shows a way of thinking intermediate between the 1763 model and the 1781 model. (From what you said in the session of 13 November: correct the wording.)",
   "evidence": [
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "Wenn ich zuerst etwas setze und hernach aufhebe, so ist 0 (g rei)"
    },
    {
     "ref": "refl-meta:r3990",
     "cite": "AA 17:379",
     "q": "wenn ich zugleich setze und aufhebe, so ist [0 cogitationis\n. . . 0] unmoglich"
    }
   ],
   "by": "mikrishnan",
   "date": "2026-11-13"
  }
 ],
 "views": [
  {
   "id": "v-side",
   "name": "The three models, side by side",
   "pos": {
    "n63": [
     126,
     70
    ],
    "n63neg": [
     21,
     330
    ],
    "n63priv": [
     231,
     330
    ],
    "n69": [
     606,
     70
    ],
    "n69rei": [
     501,
     330
    ],
    "n69cog": [
     711,
     330
    ],
    "n81": [
     1246,
     70
    ],
    "n81etw": [
     1061,
     200
    ],
    "n81n": [
     1431,
     200
    ],
    "n81er": [
     968,
     330
    ],
    "n81np": [
     1154,
     330
    ],
    "n81ei": [
     1338,
     330
    ],
    "n81nn": [
     1524,
     330
    ],
    "P1": [
     20,
     520
    ]
   },
   "hidden": [],
   "layers": {
    "frames": true,
    "division": true,
    "hypothesis": true,
    "problem": true,
    "passage": true,
    "note": true,
    "computer": true
   }
  }
 ]
};
