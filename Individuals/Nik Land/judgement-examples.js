/* ─────────────────────────────────────────────────────────────────────────────
   Examples of judgements in the three Logik transcripts of AA XXIV, classified
   under Kant's four moments. Hand-curated; read by judgement-explorer.html.

   The text is NOT copied here as the source of record. Each entry points at a
   block of ../../data/logik-<work>-24.js by id and gives the stretch of it
   (`quote`) and the judgement inside that stretch (`judgement`) verbatim. The
   page re-finds both in the block at load time and works out the Academy page
   from the block's own `pages` offsets, so a re-run of the extractor cannot
   leave a stale page number behind; an entry whose quote no longer matches is
   shown with a warning rather than hidden.

   Fields
     id         stable id: bus-NN, wie-NN, blo-NN
     work       busolt | wiener | blomberg
     block      id of the block in the data file, e.g. "busolt-s24-006"
     quote      verbatim stretch of that block's `text` that carries the example
                and whatever the transcript says about it
     judgement  verbatim substring of `quote`: the judgement itself
     quantity   the moments of the judgement, each an array of values, or null
     quality      where the judgement has no such moment that this entry can
     relation     read off (e.g. the antecedent clause of a hypothetical).
     modality     More than one value only for an exponible judgement, which
                  Kant says is affirming and denying at once.
                    quantity  universal | particular | singular
                    quality   affirmative | negative | infinite
                    relation  categorical | hypothetical | disjunctive
                    modality  problematic | assertoric | apodictic
     stated     which of the four moments the TRANSCRIPT ITSELF names for this
                judgement, inside `quote`. Every moment not listed was assigned
                by the annotator from the form of the sentence (a quantifier, a
                negated copula, a wenn–so) and is displayed as inferred.
                Attested vs. inferred, as the root CLAUDE.md requires.
     note       the annotator's remark, where the classification needs one

   Only classify what the sentence's form supports. A moment is left null,
   not guessed: the modality of a hypothetical judgement as a whole, for
   instance, is not assigned, because the transcripts speak only of its two
   members as problematic.
   ───────────────────────────────────────────────────────────────────────────── */

const JUDGEMENT_EXAMPLES = [

  /* ── Logik Busolt (ca. 1789/90) ─────────────────────────────────────────── */

  { id: "bus-01", work: "busolt", block: "busolt-s24-006",
    quote: "Alle Menschen sind Sterblich. Dies Urtheil ist der Qualitaet nach bejahend, der Quantitaet nach allgemein, der Relation nach Kategorisch, der Modalitaet nach Aßertorisch.",
    judgement: "Alle Menschen sind Sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality", "relation", "modality"],
    note: "The one judgement in the three transcripts that the lecturer classifies under all four titles at once." },

  { id: "bus-02", work: "busolt", block: "busolt-s24-010",
    quote: "disjunctivisch, das Verhältniß der Glieder unter einander ist wenn sie opponirt sind. Alle Menschen sind entweder tugendhafte oder Lasterhafte.",
    judgement: "Alle Menschen sind entweder tugendhafte oder Lasterhafte",
    quantity: ["universal"], quality: ["affirmative"], relation: ["disjunctive"], modality: null,
    stated: ["relation"] },

  { id: "bus-03", work: "busolt", block: "busolt-s24-012",
    quote: "Wenn ich sage der Mond könnte wohl Einwohner haben, so ist das Problematisch",
    judgement: "der Mond könnte wohl Einwohner haben",
    quantity: ["singular"], quality: ["affirmative"], relation: ["categorical"], modality: ["problematic"],
    stated: ["modality"] },

  { id: "bus-04", work: "busolt", block: "busolt-s24-012",
    quote: "sage ich er hat Einwohner; so ist dies Aßertorisch",
    judgement: "er hat Einwohner",
    quantity: ["singular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["modality"] },

  { id: "bus-05", work: "busolt", block: "busolt-s24-012",
    quote: "und wollte ich sagen er muß Einwohner haben, so ist das apodictisch geurtheilt",
    judgement: "er muß Einwohner haben",
    quantity: ["singular"], quality: ["affirmative"], relation: ["categorical"], modality: ["apodictic"],
    stated: ["modality"] },

  { id: "bus-06", work: "busolt", block: "busolt-s25-012",
    quote: "Alle Winkel in einem Triangel machen zusammen 180 Grad aus das gilt aber doch nur von den Geradlienigten nicht aber von den krummlienigten Dreyekken",
    judgement: "Alle Winkel in einem Triangel machen zusammen 180 Grad aus",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: [],
    note: "Offered as a judgement whose subject must be restricted for it to hold; a conditioned (bedingtes) universal." },

  { id: "bus-07", work: "busolt", block: "busolt-s25-012",
    quote: "Wird aber die Bedingung nicht zum Subiect; sondern zur Copula gesezt, so heißt das Urtheil Judicium modale, z.B. Alle Körper sind zufälliger Weise schwer",
    judgement: "Alle Körper sind zufälliger Weise schwer",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: null,
    stated: [],
    note: "A judicium modale, with its condition set at the copula. The transcript does not say which of the three modalities it is, so none is assigned." },

  { id: "bus-08", work: "busolt", block: "busolt-s26-004",
    quote: "Ein Exponibel Urtheil ist ein solches welches zugleich bejahend und verneinend ist. Zu solchen Urtheilen dienen im deutschen die Worter allein, nur wenige etc. etc. z.B. Wenige Menschen sind Fromm, einige Menschen sind Fromm, einige sind nicht Fromm",
    judgement: "Wenige Menschen sind Fromm",
    quantity: ["particular"], quality: ["affirmative", "negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "An exponible judgement: \"zugleich bejahend und verneinend\", which is why both qualities are assigned." },

  { id: "bus-09", work: "busolt", block: "busolt-s26-042",
    quote: "Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich.",
    judgement: "Alle Menschen sind Sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Half of a contradictory (contradictorisch) pair." },

  { id: "bus-10", work: "busolt", block: "busolt-s26-042",
    quote: "Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich.",
    judgement: "einige sind nicht sterblich",
    quantity: ["particular"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "The other half of the contradictory pair." },

  { id: "bus-11", work: "busolt", block: "busolt-s26-042",
    quote: "oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich. Keine Substanz ist einfach, einige sind einfach:",
    judgement: "Keine Substanz ist einfach",
    quantity: ["universal"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"] },

  { id: "bus-12", work: "busolt", block: "busolt-s26-042",
    quote: "oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich. Keine Substanz ist einfach, einige sind einfach:",
    judgement: "einige sind einfach",
    quantity: ["particular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"] },

  { id: "bus-13", work: "busolt", block: "busolt-s26-043",
    quote: "Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist z.E. Einige Menschen sind böse, – einige sind nicht böse.",
    judgement: "Einige Menschen sind böse",
    quantity: ["particular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Half of a subcontrary pair." },

  { id: "bus-14", work: "busolt", block: "busolt-s26-043",
    quote: "Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist z.E. Einige Menschen sind böse, – einige sind nicht böse.",
    judgement: "einige sind nicht böse",
    quantity: ["particular"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"] },

  { id: "bus-15", work: "busolt", block: "busolt-s26-044",
    quote: "Contraire, wenn einem allgemeinen bejahenden Urtheil ein allgemein verneinendes Urtheil entgegengesezt wird, oder umgekehrt, z.E. Alle Menschen sind Lasterhafte.",
    judgement: "Alle Menschen sind Lasterhafte",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Half of a contrary pair." },

  { id: "bus-16", work: "busolt", block: "busolt-s26-044",
    quote: "Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft. Hier thut er mehr als nothig ist, dem andern zu wiedersprechen Judicia contraria opposita können beide falsch seyn",
    judgement: "Kein Mensch ist Lasterhaft",
    quantity: ["universal"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: [],
    note: "The contrary of bus-15. That it is universal and negative follows from the passage's own definition of contrariety, which is not repeated in this quotation." },

  { id: "bus-17", work: "busolt", block: "busolt-s29-026",
    quote: "Dilemma est id argumentandi genus, in quo maior est hypothetica. Alle dilemmata haben eine negatiue conclusion z.E. Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen.",
    judgement: "Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen",
    quantity: null, quality: null, relation: ["hypothetical"], modality: null,
    stated: ["relation"],
    note: "The major premise of a dilemma: hypothetical, with a disjunctive consequent." },

  /* ── Wiener Logik (1780ff.) ─────────────────────────────────────────────── */

  { id: "wie-01", work: "wiener", block: "wiener-s11-008",
    quote: "die Menschen sind sterblich, hier bejahe ich die Sterblichkeit vom Menschen",
    judgement: "die Menschen sind sterblich",
    quantity: null, quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"] },

  { id: "wie-02", work: "wiener", block: "wiener-s11-008",
    quote: "Kein Mensch ist sterblich, hier verneine ich die Sterblichkeit von dem Menschen.",
    judgement: "Kein Mensch ist sterblich",
    quantity: ["universal"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"] },

  { id: "wie-03", work: "wiener", block: "wiener-s11-008",
    quote: "Anima non est mortalis, ist ein verneinender Satz. Hingegen anima est non mortalis, ist ein unendlicher Satz.",
    judgement: "Anima non est mortalis",
    quantity: null, quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "The negation falls on the copula." },

  { id: "wie-04", work: "wiener", block: "wiener-s11-008",
    quote: "Anima non est mortalis, ist ein verneinender Satz. Hingegen anima est non mortalis, ist ein unendlicher Satz.",
    judgement: "anima est non mortalis",
    quantity: null, quality: ["infinite"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "The negation falls on the predicate; the copula is affirmed." },

  { id: "wie-05", work: "wiener", block: "wiener-s11-013",
    quote: "und sagen: ein Stein ist nicht Metall, nicht Holz etc. Sag ich dadurch aber etwas Neues? Denn was hilft es, daß ich weiß, daß alles Übrige ausser dem Begriff nicht Stein ist? Die sphaera dieses alles Übrigen ist unendlich, und deshalb nennt man diese judicia infinita.",
    judgement: "ein Stein ist nicht Metall, nicht Holz",
    quantity: null, quality: ["infinite"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"] },

  { id: "wie-06", work: "wiener", block: "wiener-s11-013",
    quote: "Alle Menschen sind sterblich, einige Menschen sind sterblich. Caesar ist sterblich. Hier habe ich judicium universale, particulare und singulare.",
    judgement: "Alle Menschen sind sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity"] },

  { id: "wie-07", work: "wiener", block: "wiener-s11-013",
    quote: "Alle Menschen sind sterblich, einige Menschen sind sterblich. Caesar ist sterblich. Hier habe ich judicium universale, particulare und singulare.",
    judgement: "einige Menschen sind sterblich",
    quantity: ["particular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity"] },

  { id: "wie-08", work: "wiener", block: "wiener-s11-013",
    quote: "Alle Menschen sind sterblich, einige Menschen sind sterblich. Caesar ist sterblich. Hier habe ich judicium universale, particulare und singulare.",
    judgement: "Caesar ist sterblich",
    quantity: ["singular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity"],
    note: "A singular judgement holds without exception, like a universal one, because its subject has no sphere from which anything could be excepted." },

  { id: "wie-09", work: "wiener", block: "wiener-s11-017",
    quote: "universaliter affirmans ist der vocalis A. Z.B. Alle Menschen sind sterblich.",
    judgement: "Alle Menschen sind sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "The scholastic vowel A." },

  { id: "wie-10", work: "wiener", block: "wiener-s11-017",
    quote: "judicium universaliter negans soll durch E bedeutet werden. Z.E. Kein Mensch ist sterblich.",
    judgement: "Kein Mensch ist sterblich",
    quantity: ["universal"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "The scholastic vowel E." },

  { id: "wie-11", work: "wiener", block: "wiener-s11-017",
    quote: "Particulariter affirmans ist I. Z.B. einige Menschen sind gelehrt,",
    judgement: "einige Menschen sind gelehrt",
    quantity: ["particular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "The scholastic vowel I." },

  { id: "wie-12", work: "wiener", block: "wiener-s11-017",
    quote: "particulariter negans ist O. Z.B. einige Menschen sind nicht gelehrt.",
    judgement: "einige Menschen sind nicht gelehrt",
    quantity: ["particular"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "The scholastic vowel O." },

  { id: "wie-13", work: "wiener", block: "wiener-s11-019",
    quote: "Die Materie aller categorischen Sätze besteht aus einem Begriffe, in dem der Begriff des subjectes dem Begriffe des praedicats angehört. Z.B. der Mensch ist sterblich",
    judgement: "der Mensch ist sterblich",
    quantity: null, quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["relation"] },

  { id: "wie-14", work: "wiener", block: "wiener-s11-019",
    quote: "Bey hypothetischen Urtheilen besteht die Materie zum Begriff aus zwey Urtheilen. Z.B. wenn Gott gerecht ist: so wird das Böse bestraft.",
    judgement: "wenn Gott gerecht ist: so wird das Böse bestraft",
    quantity: null, quality: null, relation: ["hypothetical"], modality: null,
    stated: ["relation"] },

  { id: "wie-15", work: "wiener", block: "wiener-s11-019",
    quote: "Denn wenn ich z.B. sage: alle Triangel sind entweder gleichschenklicht, oder gleichseitig, oder gleichwinklich: so ist der Triangel in so viele Glieder getheilet, als er eigentlich werden kann.",
    judgement: "alle Triangel sind entweder gleichschenklicht, oder gleichseitig, oder gleichwinklich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["disjunctive"], modality: null,
    stated: ["relation"],
    note: "Given as the example of the disjunctive judgement, which the lecturer calls a logical division." },

  { id: "wie-16", work: "wiener", block: "wiener-s11-020",
    quote: "Im hypothetischen Urtheile besteht die Materie aus zwey Urtheilen. Z.B. wenn die Seele körperlich ist: so ist keine Hoffnung von der Nothwendigkeit eines andern Lebens.",
    judgement: "wenn die Seele körperlich ist: so ist keine Hoffnung von der Nothwendigkeit eines andern Lebens",
    quantity: null, quality: null, relation: ["hypothetical"], modality: null,
    stated: ["relation"] },

  { id: "wie-17", work: "wiener", block: "wiener-s11-020",
    quote: "wenn die Seele körperlich ist: so ist keine Hoffnung von der Nothwendigkeit eines andern Lebens. Das wenn drückt das Verhältniß aus. Wenn ein Urtheil so gedacht würde, ohne zu sagen, was wahr, und nicht wahr ist: so ist das ein problematisches Urtheil",
    judgement: "wenn die Seele körperlich ist",
    quantity: null, quality: null, relation: null, modality: ["problematic"],
    stated: ["modality"],
    note: "The antecedent of wie-16, which the lecturer calls a problematic judgement in its own right: it is entertained, not asserted. Only its modality is classified." },

  { id: "wie-18", work: "wiener", block: "wiener-s11-023",
    quote: "Einige meinen, man könne ganz wohl hypothetische in categorische Sätze verwandeln. Man kann es thun. Aber da ist nicht mehr dieselbe Behauptung. Das heißt den hypothetischen Satz aufheben, und in seine Stelle einen andern setzen. Es scheinet wohl einerley zu seyn, wenn ich sage: Alle Menschen sind sterblich, oder wenn etwas ein Mensch ist, so ist es sterblich. Es ist aber verschieden.",
    judgement: "Alle Menschen sind sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["relation"],
    note: "Set against wie-19: the same content, but the lecturer insists the two are different judgements, because the categorical one asserts that things are mortal." },

  { id: "wie-19", work: "wiener", block: "wiener-s11-023",
    quote: "Einige meinen, man könne ganz wohl hypothetische in categorische Sätze verwandeln. Man kann es thun. Aber da ist nicht mehr dieselbe Behauptung. Das heißt den hypothetischen Satz aufheben, und in seine Stelle einen andern setzen. Es scheinet wohl einerley zu seyn, wenn ich sage: Alle Menschen sind sterblich, oder wenn etwas ein Mensch ist, so ist es sterblich. Es ist aber verschieden.",
    judgement: "wenn etwas ein Mensch ist, so ist es sterblich",
    quantity: null, quality: null, relation: ["hypothetical"], modality: null,
    stated: ["relation"] },

  { id: "wie-20", work: "wiener", block: "wiener-s11-025",
    quote: "Das disjunctive Urtheil enthält das Verhältniß verschiedener Urtheile, insofern sie als membra dividentia der sphaera einer cognitioni divisae gleich sind. Z.B. Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.",
    judgement: "Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht",
    quantity: ["universal"], quality: ["affirmative"], relation: ["disjunctive"], modality: null,
    stated: ["relation"] },

  { id: "wie-21", work: "wiener", block: "wiener-s11-025",
    quote: "Z.B. wenn das nicht die beßte Welt ist: so hat Gott keine beßere schaffen können oder wollen.",
    judgement: "wenn das nicht die beßte Welt ist: so hat Gott keine beßere schaffen können oder wollen",
    quantity: null, quality: null, relation: ["disjunctive"], modality: null,
    stated: ["relation"],
    note: "Given as an example of the disjunctive judgement, one that divides a cognition rather than a concept. It has a wenn–so form, which is why it sits beside bus-17." },

  { id: "wie-22", work: "wiener", block: "wiener-s11-026",
    quote: "wenn ich sage: wenn wenige Menschen gelehrt sind: so kann ich daraus herleiten: 1.) einige Menschen sind gelehrt. Denn wenige sind doch einige. 2.) Viele Menschen sind nicht gelehrt, denn wenige ist das Gegentheil von vielen. Diese zwey Sätze werden in einen Satz eingeschlossen, der eine Bejahung und Verneinung enthält",
    judgement: "wenige Menschen gelehrt sind",
    quantity: ["particular"], quality: ["affirmative", "negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "An exponible judgement (judicia exponibilia): one sentence that holds an affirmation and a denial." },

  { id: "wie-23", work: "wiener", block: "wiener-s12-003",
    quote: "b) Subcontrarie opposita einige Menschen sind gelehrt, einige nicht Beide vielleicht wahr. Qualität verschieden, Quantität eins.",
    judgement: "einige Menschen sind gelehrt",
    quantity: ["particular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Half of a subcontrary pair." },

  { id: "wie-24", work: "wiener", block: "wiener-s12-003",
    quote: "b) Subcontrarie opposita einige Menschen sind gelehrt, einige nicht Beide vielleicht wahr. Qualität verschieden, Quantität eins.",
    judgement: "einige nicht",
    quantity: ["particular"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Elliptical in the transcript: \"einige [Menschen sind] nicht [gelehrt]\"." },

  { id: "wie-25", work: "wiener", block: "wiener-s12-003",
    quote: "c) contrarie opposita beide allgemein nur Qualität verschieden: alle Menschen gelehrt kein Mensch gelehrt",
    judgement: "alle Menschen gelehrt",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"],
    note: "Half of a contrary pair; elliptical in the transcript." },

  { id: "wie-26", work: "wiener", block: "wiener-s12-003",
    quote: "c) contrarie opposita beide allgemein nur Qualität verschieden: alle Menschen gelehrt kein Mensch gelehrt",
    judgement: "kein Mensch gelehrt",
    quantity: ["universal"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"] },

  /* ── Logik Blomberg (ca. 1771) ──────────────────────────────────────────── */

  { id: "blo-01", work: "blomberg", block: "blomberg-s11-002",
    quote: "anima non est mortalis nicht aber anima est non mortalis, denn sonst afficiret die negation des Vernunft Urtheils nicht die Form sonderen die materie des Urtheils, und folglich ist es alsdenn auch kein Verneinendes sonderen ein sogenanntes Judicium infinitum",
    judgement: "anima non est mortalis",
    quantity: null, quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "Blomberg's rule that the non belongs with the copula, not the predicate." },

  { id: "blo-02", work: "blomberg", block: "blomberg-s11-002",
    quote: "anima non est mortalis nicht aber anima est non mortalis, denn sonst afficiret die negation des Vernunft Urtheils nicht die Form sonderen die materie des Urtheils, und folglich ist es alsdenn auch kein Verneinendes sonderen ein sogenanntes Judicium infinitum",
    judgement: "anima est non mortalis",
    quantity: null, quality: ["infinite"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"] },

  { id: "blo-03", work: "blomberg", block: "blomberg-s11-025",
    quote: "Contradictorie sind 2 Urtheile einander entgegen gesezt, wenn einem bejahenden Urtheile ein besonderes verneinendes Urtheil (oder umgekehrt) entgegenponirt wird. z.E. alle Menschen sind sterblich, aber einige sind nicht sterblich.",
    judgement: "alle Menschen sind sterblich",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "Half of a contradictory pair." },

  { id: "blo-04", work: "blomberg", block: "blomberg-s11-025",
    quote: "Contradictorie sind 2 Urtheile einander entgegen gesezt, wenn einem bejahenden Urtheile ein besonderes verneinendes Urtheil (oder umgekehrt) entgegenponirt wird. z.E. alle Menschen sind sterblich, aber einige sind nicht sterblich.",
    judgement: "einige sind nicht sterblich",
    quantity: ["particular"], quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quantity", "quality"] },

  { id: "blo-05", work: "blomberg", block: "blomberg-s07-040",
    quote: "Verneinende Merckmahle aber dienen nur dazu, um Irrthümer zu vermeiden. Z.E. die Thiere haben keine vernünftige Seele.",
    judgement: "die Thiere haben keine vernünftige Seele",
    quantity: null, quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "Given as an example of a negative mark of a thing; read here as the negative judgement it expresses." },

  { id: "blo-06", work: "blomberg", block: "blomberg-s07-040",
    quote: "bejahende Merckmahlen aber dienen dazu, um eine weitläuftige unausgearbeitete Erkenntniß von einer Sache zu erhalten. z.E. Gott ist allwißend etc.",
    judgement: "Gott ist allwißend",
    quantity: ["singular"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "Given as an example of an affirmative mark of a thing." },

  { id: "blo-07", work: "blomberg", block: "blomberg-s07-044",
    quote: "Die Verneinende Urtheile sind wircklich öfters thöricht, weil das, was verneinet wird, ofters schon an sich selbst unmöglich ist. z.E.: der Mensch hat Vernunft, also ist er kein Stein.",
    judgement: "ist er kein Stein",
    quantity: null, quality: ["negative"], relation: ["categorical"], modality: ["assertoric"],
    stated: ["quality"],
    note: "The lecturer's example of a negative judgement that is true and pointless." },

  { id: "blo-08", work: "blomberg", block: "blomberg-s08-644",
    quote: "Die Erfahrung kann mich gar nicht mit Apodictischer Gewißheit lehren, daß alle Menschen sterben müßen z.E. sonderen nur blos, daß alle Menschen, die bishero gelebet haben, gestorben sind.",
    judgement: "alle Menschen sterben müßen",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["apodictic"],
    stated: ["modality"],
    note: "Experience cannot teach this with apodictic certainty; only reason could." },

  { id: "blo-09", work: "blomberg", block: "blomberg-s08-644",
    quote: "Die Erfahrung kann mich gar nicht mit Apodictischer Gewißheit lehren, daß alle Menschen sterben müßen z.E. sonderen nur blos, daß alle Menschen, die bishero gelebet haben, gestorben sind.",
    judgement: "alle Menschen, die bishero gelebet haben, gestorben sind",
    quantity: ["universal"], quality: ["affirmative"], relation: ["categorical"], modality: ["assertoric"],
    stated: [],
    note: "What experience does give: a universal only of the cases so far observed, so assertoric but not apodictic." }

];
