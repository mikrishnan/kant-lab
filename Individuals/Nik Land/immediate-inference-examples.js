/* ─────────────────────────────────────────────────────────────────────────────
   Examples of immediate inferences (consequentiae immediatae, Verstandesschlüsse)
   in Kant's logic, from the three Logik transcripts of AA XXIV and from Kant's
   own Reflexionen on Meier's Auszug (AA XVI). Hand-curated; read by
   immediate-inferences.html.

   The text is NOT copied here as the source of record. Each entry points at a
   block of ../../data/logik-<work>-24.js by id (or at a Reflexion of
   ../../data/reflexionen-16-meier.js by number) and gives the stretch of it
   (`quote`) and the judgements inside that stretch (`t`) verbatim. The page
   re-finds both at load time and works out the Academy page from the block's
   own `pages` offsets, so a re-run of the extractor cannot leave a stale page
   number behind; an entry whose quote no longer matches is shown with a
   warning rather than hidden.

   Fields of an entry
     id         stable id: blo-, wie-, bus- (the transcripts), refl- (AA XVI)
     src        blomberg | wiener | busolt | refl16
     block      id of the block in the data file, e.g. "busolt-s26-042"
                (the transcripts)
     r          the Reflexion's number in Adickes' numbering (refl16)
     quote      verbatim stretch of that block's / Reflexion's text that carries
                the example and whatever is said about it
     kinds      which kind or kinds of inference the passage is filed under,
                an array of:
                  general         what an immediate inference is, and how it
                                  differs from a Vernunftschluss
                  aequipollentia  per judicia aequipollentia
                  subalternation  per judicia subalternata
                  contradictory   per judicia opposita, contradictorie
                  contrary        per judicia opposita, contrarie
                  subcontrary     per judicia opposita, subcontrarie
                  conversion      per conversionem (metathesis terminorum, the
                                  quality kept)
                  contraposition  per contrapositionem (the quality changed,
                                  the quantity kept; in Kant's list the
                                  inference by modality)
                More than one where the passage speaks of several, or where one
                example serves two.
     named      true where the passage itself names the kind it is filed under
                (a heading, a technical term, a list item it points back to).
                False where the kind was assigned here from the shape of the
                example or from the Reflexion's locus in Meier: Attested vs.
                inferred, as the root CLAUDE.md requires. Shown as inferred.
     sub        the species, where the passage gives one: "per accidens",
                "simpliciter", ...
     judgements the judgements the passage actually writes down, in the order
                it writes them; may be empty (a rule with no instance). Each:
                  t           the judgement, verbatim, a substring of `quote`
                  role        premise | conclusion | member (one of an
                              opposed pair) | intermediate | rejected
                  form        A universal affirmative, E universal negative,
                              I particular affirmative, O particular
                              negative, S+ / S- singular. Read off the
                              quantifier and the copula
                  formStated  true where the passage itself says what form
                              the judgement has ("allgemein bejahend", ...).
                              False: the form is the annotator's reading,
                              shown as inferred
                  supply      the judgement written out, where the passage
                              leaves part of it to be understood ("einige").
                              Not in the text; shown as supplied
                  mod         assertoric | apodictic, and modStated as for
                              formStated, only where the passage speaks of it
                  tv          true | false, where the passage says whether the
                              judgement is true or false
     counter    present where the passage offers the argument as NOT an
                immediate inference, with the reason
     invalid    present where the passage rules an inference out, with what
                it rules out
     note       the annotator's remark, where one is needed

   A judgement or inference that the passage does not write down is not added.
   Where the transcription is in note form, or breaks off, it is shown as it
   stands.
   ───────────────────────────────────────────────────────────────────────────── */

const IMMEDIATE_EXAMPLES = [

  /* ── Logik Blomberg (ca. 1771) ─────────────────────────────────────────── */

  { "id": "blo-gen-01", "src": "blomberg", "block": "blomberg-s11-019",
    "kinds": ["general"], "named": true,
    "quote": "Ein jeder Schluß ist überhaupt ein Urtheil, nur mit dem Unterschiede: ist das Urtheil Mittelb ar so ist es ein Vernunft-, oder ein mittelbarer Schluß. ist aber das Urtheil unmittelbahr, so ist der Schluß nur ein Verstandes Schluß es wird nemlich eins aus dem anderen geurtheilt absque medio Termino alsdenn ist das Urtheil, oder auch die Conclusio immediata",
    "judgements": [] },
  { "id": "blo-gen-02", "src": "blomberg", "block": "blomberg-s12-001",
    "kinds": ["general"], "named": true,
    "quote": "Es giebt auch nemlich, wie vorhero gesagt, gewise Urtheilen, und Consequenzen, die wir immediatas genannt haben, diese waren indemonstrabel. wir nannten auch diese Folgen eines Urtheils aus anderen Urtheilen die unerweislich sind, nicht einen Vernunft-, sonderen einen Verstandes Schluß.",
    "judgements": [] },
  { "id": "blo-gen-03", "src": "blomberg", "block": "blomberg-s11-009",
    "kinds": ["general"], "named": true,
    "quote": "ich werde hernach zeigen, daß jeder Vernunft-Schluß außer der ersten Figur nicht einfach sey wie man doch aber fälschlich davor halt, sonderen aus der Consequentia immediata und einem Ratiocinio zusammen gesezet ist.",
    "judgements": [],
    "note": "Announces what the Busolt transcript works out in the reduction of the figures (AA 24:676–677): a syllogism outside the first figure is a Ratiocinium coupled to a consequentia immediata." },
  { "id": "blo-aeq-01", "src": "blomberg", "block": "blomberg-s11-024",
    "kinds": ["aequipollentia"], "named": true,
    "quote": "was nun die consequentia per Judicia aequipollentia anbetrifft, so ist dieses weil beyde Urtheile in derselben gantz mit einander einerley sind, eigentlich gar keine Consequens, und also der so genannte Schluß per Judicia aequipollentia ist gar kein Schluß.",
    "judgements": [] },
  { "id": "blo-sub-01", "src": "blomberg", "block": "blomberg-s11-024",
    "kinds": ["subalternation"], "named": true,
    "quote": "Die Consequentia per Judicia Subalternata geschiehet ohne alle Veränderung der Stelle der Terminorum, die Qualitaet bleibt auch dieselbe, nur die Quantitaet wird darinn veränderet.",
    "judgements": [] },
  { "id": "blo-conv-01", "src": "blomberg", "block": "blomberg-s11-024",
    "kinds": ["conversion"], "named": true,
    "quote": "Bey der consequentia per Conversionem Logicam muß gleichfals niemals die Qualität, sonderen nur die Quantitaet veränderet werden.",
    "judgements": [] },
  { "id": "blo-contrap-01", "src": "blomberg", "block": "blomberg-s11-024",
    "kinds": ["contraposition"], "named": false,
    "quote": "Bey der conversio Logica aber muß in derselben sowohl die Lage der Terminorum als auch die Qualitaet veränderet werden.",
    "judgements": [],
    "note": "The transcript calls this too “conversio Logica”, but it comes after the fifth item of the list at AA 24:281 (per Contrapositionem) and says that quality is changed. It is filed under contraposition on that ground; the passage itself does not name the kind." },
  { "id": "blo-contrad-01", "src": "blomberg", "block": "blomberg-s11-025",
    "kinds": ["contradictory"], "named": true,
    "quote": "1: Contradictorie sind 2 Urtheile einander entgegen gesezt, wenn einem bejahenden Urtheile ein besonderes verneinendes Urtheil (oder umgekehrt) entgegenponirt wird. z.E. alle Menschen sind sterblich, aber einige sind nicht sterblich.",
    "judgements": [
      {"t": "alle Menschen sind sterblich", "role": "member", "form": "A", "formStated": false},
      {"t": "einige sind nicht sterblich", "role": "member", "form": "O", "formStated": true, "supply": "einige Menschen sind nicht sterblich"}
    ] },
  { "id": "blo-subcon-01", "src": "blomberg", "block": "blomberg-s11-026",
    "kinds": ["subcontrary"], "named": true,
    "quote": "2 Subcontraria sind Urtheile alsdenn, wenn in 2 Particular Urtheilen, die einerley Subject, und Praedicat haben, das eine bejahend, und das andere verneinend ist.",
    "judgements": [] },
  { "id": "blo-contr-01", "src": "blomberg", "block": "blomberg-s11-027",
    "kinds": ["contrary"], "named": true,
    "quote": "3 giebt es noch eine Contrarietas Judicii, die findet denn statt, wenn in 2 Urtheilen das eine allgemein bejahend, und das andere allgemein verneinend ist.",
    "judgements": [] },
  { "id": "blo-opp-01", "src": "blomberg", "block": "blomberg-s11-027",
    "kinds": ["contradictory", "contrary", "subcontrary"], "named": true,
    "quote": "Die Judicia Subcontraria halten weniger, oder nicht genug in sich, als zur richtigen opposition gehöret, die Judicia contraria halten mehr, und die Judicia contradictoria eben so viel, als zur rechten opposition genug ist, in sich.",
    "judgements": [] },
  { "id": "blo-subcon-02", "src": "blomberg", "block": "blomberg-s11-027",
    "kinds": ["subcontrary"], "named": true,
    "quote": "Judicia subcontraria, weil sie nicht genug enthalten, können 1) alle beyde wahr seyn, sie können aber 2) nicht alle beyde falsch seyn.",
    "judgements": [] },
  { "id": "blo-contr-02", "src": "blomberg", "block": "blomberg-s11-028",
    "kinds": ["contrary"], "named": true,
    "quote": "Zweitens Judicia Contraria können beyde falsch seyn, denn in beyden ist zu viel, und können eben in ihrem zu viel auch falsch seyn.",
    "judgements": [] },
  { "id": "blo-contrad-02", "src": "blomberg", "block": "blomberg-s11-028",
    "kinds": ["contradictory"], "named": false,
    "quote": "von 2 reinen Oppositionen muß beständig dieses gelten können: posito uno tollitur alterum. et vice versa",
    "judgements": [],
    "note": "Said of “reine Oppositionen”. Filed under contradictory because only that pair satisfies it both ways (cf. Wiener Logik, AA 24:938–939: “die Bejahung des einen das andere aufhebt … und umgekehrt”)." },
  { "id": "blo-conv-02", "src": "blomberg", "block": "blomberg-s11-028",
    "kinds": ["conversion"], "named": true,
    "quote": "Bey aller Logischen Conversion (vid. ant. § 346) der Urtheile heißt das urtheil, welches umgekehrt werden soll, conversum, das Urtheil, welches dieser Umkehrung entspringen soll, convertens. Eine Conversio bey der die Qualitaet des Urtheils nicht gehindert wird, heißt Simplex, wo sie aber gehinderet wird, conversio per accidens. allgemein bejahende Urtheile laßen sich per accidens umkehren, alle verneinende Urtheile aber laßen sich Simpliciter umkehren, und endlich die particulare laßen sich alle Simpliciter umkehren, das ist die einzige Regel der logischen Conversion.",
    "judgements": [],
    "note": "Terms: the judgement to be converted is the conversum, the one that results from the conversion the convertens." },
  { "id": "blo-contrap-02", "src": "blomberg", "block": "blomberg-s11-028",
    "kinds": ["contraposition"], "named": true,
    "quote": "Die Regel der Contraposition ist diese: allgemein bejahende Urtheile laßen sich nur contraponiren.",
    "judgements": [] },

  /* ── Wiener Logik (1780ff.) ────────────────────────────────────────────── */

  { "id": "wie-gen-01", "src": "wiener", "block": "wiener-s12-001",
    "kinds": ["general"], "named": true,
    "quote": "Schluß aus Urtheil anders. mittelbar wo noch Begriffe die nicht im Urtheile liegen z.B. alle Körper theilbar, weil zusammengesetzt;",
    "judgements": [
      {"t": "alle Körper theilbar", "role": "conclusion", "form": "A", "formStated": false}
    ],
    "counter": "Given as the mediate case: the ground “zusammengesetzt” is a concept that does not lie in the judgement." },
  { "id": "wie-sub-02", "src": "wiener", "block": "wiener-s12-001",
    "kinds": ["subalternation"], "named": false,
    "quote": "aber alle Körper theilbar folglich auch einige consequentia immediata weil der Materie nach eins, nur Form verschieden",
    "judgements": [
      {"t": "alle Körper theilbar", "role": "premise", "form": "A", "formStated": false},
      {"t": "auch einige", "role": "conclusion", "form": "I", "formStated": false, "supply": "auch einige Körper sind theilbar"}
    ],
    "note": "The passage names the genus (consequentia immediata) but not which kind." },
  { "id": "wie-conv-01", "src": "wiener", "block": "wiener-s12-001",
    "kinds": ["conversion"], "named": false, "sub": "per accidens",
    "quote": "alle Menschen sterblich folglich einige sterbliche Dinge Menschen",
    "judgements": [
      {"t": "alle Menschen sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige sterbliche Dinge Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "The passage does not name the kind; it is the same example the transcript gives under conversio per accidens at AA 24:939." },
  { "id": "wie-aeq-03", "src": "wiener", "block": "wiener-s12-001",
    "kinds": ["aequipollentia"], "named": false,
    "quote": "alle Menschen sterblich folglich einige sterbliche Dinge Menschen oder kein Mensch unsterblich Hier conclusum und judicium concludens eines.",
    "judgements": [
      {"t": "alle Menschen sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "kein Mensch unsterblich", "role": "conclusion", "form": "E", "formStated": false}
    ],
    "note": "Read as an equipollent of the premise. The transcription offers it as an alternative to the conversion and says only that conclusum and judicium concludens are one; the reading is the annotator's." },
  { "id": "wie-gen-02", "src": "wiener", "block": "wiener-s12-001",
    "kinds": ["general"], "named": true,
    "quote": "Auch Verstandesschluß vom ratiocinio zu unterscheiden wo judicium Vernunft brauche weil materialiter unterschieden z.B. alle Menschen sterblich folglich auch Cajus.",
    "judgements": [
      {"t": "alle Menschen sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "auch Cajus", "role": "conclusion", "form": "S+", "formStated": false, "supply": "auch Cajus ist sterblich"}
    ],
    "counter": "Offered as not immediate: it brings in a new concept (Cajus), so the judgement has to use Vernunft, “materialiter unterschieden”." },
  { "id": "wie-aeq-01", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["aequipollentia"], "named": true,
    "quote": "per judicia aequipollentia einige Menschen sind nicht7 ° tugendhaft folglich sind nicht alle Menschen tugendhaft",
    "judgements": [
      {"t": "einige Menschen sind nicht7 ° tugendhaft", "role": "premise", "form": "O", "formStated": false},
      {"t": "sind nicht alle Menschen tugendhaft", "role": "conclusion", "form": "O", "formStated": false, "supply": "nicht alle Menschen sind tugendhaft"}
    ],
    "note": "The transcription prints “nicht7 °” in the premise; kept as it stands." },
  { "id": "wie-aeq-02", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["aequipollentia"], "named": true,
    "quote": "nichts ist ohne Grund und alles hat seinen Grund sind Substitutionen.",
    "judgements": [
      {"t": "nichts ist ohne Grund", "role": "member", "form": "E", "formStated": false},
      {"t": "alles hat seinen Grund", "role": "member", "form": "A", "formStated": false}
    ],
    "note": "Stands under the heading per judicia aequipollentia, where the transcript calls such pairs “Substitutionen”." },
  { "id": "wie-sub-01", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["subalternation"], "named": true,
    "quote": "2) Subalternata auch nur Form nach verschieden z.B. alle Menschen sind sterblich folglich einige Quantität unterschieden.",
    "judgements": [
      {"t": "alle Menschen sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige", "role": "conclusion", "form": "I", "formStated": false, "supply": "einige Menschen sind sterblich"}
    ] },
  { "id": "wie-subcon-00", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["subcontrary"], "named": false,
    "quote": "einige Menschen sind gelehrt einige nicht Qualität verschieden",
    "judgements": [
      {"t": "einige Menschen sind gelehrt", "role": "member", "form": "I", "formStated": false},
      {"t": "einige nicht", "role": "member", "form": "O", "formStated": false, "supply": "einige Menschen sind nicht gelehrt"}
    ],
    "note": "Offered under “3) per judicia opposita” as a pair differing in quality only; the transcript gives the same pair again under b) Subcontrarie." },
  { "id": "wie-contrad-01", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["contradictory"], "named": true,
    "quote": "einige Menschen nicht sterblich, alle Menschen sterblich Quantität und Qualität sind a) contradictoria wenn eins allgemein bejahet oder verneinet und das andere partikulär verneinet oder bejahet d.i. die eigentliche Opposition wo die Bejahung des einen das andere aufhebt affirmando unum negat alterum und umgekehrt.",
    "judgements": [
      {"t": "einige Menschen nicht sterblich", "role": "member", "form": "O", "formStated": true},
      {"t": "alle Menschen sterblich", "role": "member", "form": "A", "formStated": true}
    ] },
  { "id": "wie-contrad-02", "src": "wiener", "block": "wiener-s12-002",
    "kinds": ["contradictory"], "named": true,
    "quote": "(So Beweise apagogisch indirecte nur sehe man ob wirklich contradictoria opposita",
    "judgements": [],
    "note": "Indirect (apagogic) proof is sound only where the opposition really is contradictory." },
  { "id": "wie-subcon-01", "src": "wiener", "block": "wiener-s12-003",
    "kinds": ["subcontrary"], "named": true,
    "quote": "b) Subcontrarie opposita einige Menschen sind gelehrt, einige nicht Beide vielleicht wahr. Qualität verschieden, Quantität eins. Hier kan nicht indirecte geschlossen werden. Hier können beide wahr nicht beide falsch seyn also richtig der Schluß wenn das eine falsch ist das andere wahr nicht umgekehrt.",
    "judgements": [
      {"t": "einige Menschen sind gelehrt", "role": "member", "form": "I", "formStated": false},
      {"t": "einige nicht", "role": "member", "form": "O", "formStated": false, "supply": "einige Menschen sind nicht gelehrt"}
    ] },
  { "id": "wie-contr-01", "src": "wiener", "block": "wiener-s12-003",
    "kinds": ["contrary"], "named": true,
    "quote": "c) contrarie opposita beide allgemein nur Qualität verschieden: alle Menschen gelehrt kein Mensch gelehrt, beide können falsch nicht wahr seyn sind das Gegentheil vom vorigen.",
    "judgements": [
      {"t": "alle Menschen gelehrt", "role": "member", "form": "A", "formStated": true},
      {"t": "kein Mensch gelehrt", "role": "member", "form": "E", "formStated": true}
    ] },
  { "id": "wie-conv-02", "src": "wiener", "block": "wiener-s12-004",
    "kinds": ["conversion"], "named": true, "sub": "per accidens",
    "quote": "4) per conversionem judiciorum alle Menschen sterblich folglich einige Sterbliche Menschen. Quantitat muß verloren gehen, denn heißts conversio per accidens",
    "judgements": [
      {"t": "alle Menschen sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige Sterbliche Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ] },
  { "id": "wie-conv-03", "src": "wiener", "block": "wiener-s12-004",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "bleibt Quantitat heißts simpliciter talis z.B. kein Mensch ist ohne Feinde etc.",
    "judgements": [
      {"t": "kein Mensch ist ohne Feinde", "role": "premise", "form": "E", "formStated": false}
    ],
    "note": "The converse is not written out (“etc.”)." },
  { "id": "wie-conv-04", "src": "wiener", "block": "wiener-s12-004",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "allgemein bejahende nur per accidens convertiren aber 2 verneinende auch stricte talis – alle Partikulare bejahend oder verneinend lassen sich simpliciter umkehren einige Menschen sind gelehrt etc.",
    "judgements": [
      {"t": "einige Menschen sind gelehrt", "role": "premise", "form": "I", "formStated": false}
    ],
    "note": "The rule, and a particular judgement as its instance; the converse is not written out (“etc.”)." },
  { "id": "wie-contrap-01", "src": "wiener", "block": "wiener-s12-005",
    "kinds": ["contraposition"], "named": true,
    "quote": "5) consequentia immediata per contrapositionem wo Qualität auch geandert alle Menschen sind sterblich einiges Sterbliche ist nicht Mensch.",
    "judgements": [
      {"t": "alle Menschen sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einiges Sterbliche ist nicht Mensch", "role": "conclusion", "form": "O", "formStated": false}
    ],
    "note": "As the transcription prints it. The next example, and Kant's own examples elsewhere, contrapose an A into a universal negative; this conclusion reads as a particular." },
  { "id": "wie-contrap-02", "src": "wiener", "block": "wiener-s12-005",
    "kinds": ["contraposition"], "named": true,
    "quote": "Alle Bejahende lassen sich contraponiren alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch.",
    "judgements": [
      {"t": "alle M. sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "nichts was nicht sterblich ist, ist ein Mensch", "role": "conclusion", "form": "E", "formStated": false}
    ] },
  { "id": "wie-contrap-03", "src": "wiener", "block": "wiener-s12-005",
    "kinds": ["contraposition"], "named": true,
    "quote": "contraoppositio zeigt bloß Modalität der Urtheile die Nothwendigkeit eines bejahenden Urtheils Z.B. alle Menschen sind sterblich wenn wahr nothwendig was nicht sterblich ist nicht Mensch.",
    "judgements": [
      {"t": "alle Menschen sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "was nicht sterblich ist nicht Mensch", "role": "conclusion", "form": "E", "formStated": false, "mod": "apodictic", "modStated": true}
    ],
    "note": "Contraposition shows only the modality of the judgements: the necessity of an affirmative one." },
  { "id": "wie-gen-03", "src": "wiener", "block": "wiener-s12-005",
    "kinds": ["general"], "named": true,
    "quote": "Also bei immediatis betrift Veränderung nur Form",
    "judgements": [],
    "note": "What follows in the transcription (“b ist quoad qualitatem c quoad relationem”) is too broken to read." },

  /* ── Logik Busolt (ca. 1789/90) ────────────────────────────────────────── */

  { "id": "bus-gen-01", "src": "busolt", "block": "busolt-s26-035",
    "kinds": ["general"], "named": true,
    "quote": "Wird ein Urtheil aus einem andern gefolgert, ohne ein zwischen Urtheil, so ist dies ein Verstandesschluß, per iudicium intermedium ein Vernunftschluß,",
    "judgements": [] },
  { "id": "bus-gen-02", "src": "busolt", "block": "busolt-s26-035",
    "kinds": ["general"], "named": true,
    "quote": "z.B. Alle Menschen sind Sterblich, also ist auch Caius sterblich. Hier ist nun Caius ein Begrif, den ich vorher nicht hatte, es ist also falsch geschloßen, und ich muß nur mittelbar schließen",
    "judgements": [
      {"t": "Alle Menschen sind Sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "ist auch Caius sterblich", "role": "conclusion", "form": "S+", "formStated": false, "supply": "Caius ist sterblich"}
    ],
    "counter": "Not immediate: Caius is a concept the premise did not contain, so the inference needs a middle term." },
  { "id": "bus-gen-03", "src": "busolt", "block": "busolt-s26-035",
    "kinds": ["general"], "named": true,
    "quote": "Zur consequentia immediata muß iudicium praeuium und exclusio einen Begriff erhalten. Sie sind nicht anders unterschieden als nur in der Qualitaet, Quantitaet und Relation.",
    "judgements": [],
    "note": "“exclusio” as printed; presumably conclusio." },
  { "id": "bus-gen-04", "src": "busolt", "block": "busolt-s27-009",
    "kinds": ["general"], "named": true,
    "quote": "die Consequentiae immediatae sind eigentlich keine Vernunftschlüße; sie sind nur Folgerungen und bedürfen keiner Regel.",
    "judgements": [] },
  { "id": "bus-aeq-01", "src": "busolt", "block": "busolt-s26-041",
    "kinds": ["aequipollentia"], "named": true,
    "quote": "Die erste Art kann wegfallen, sie ist leer, weil es so viel als nichts ist, eines aus dem andern zu folgern, was dem erstern einerley ist, es bleibt immer dasselbe Urtheil.",
    "judgements": [],
    "note": "“Die erste Art” is the first item of the list at AA 24:670, per iudicia aequipollentia." },
  { "id": "bus-sub-01", "src": "busolt", "block": "busolt-s26-041",
    "kinds": ["subalternation"], "named": true,
    "quote": "Auf die Zweyte Art schließe ich vom allgemeinen aufs besondere.",
    "judgements": [],
    "note": "“Die Zweyte Art” is the second item of the list at AA 24:670, per iudicia subalternata." },
  { "id": "bus-opp-01", "src": "busolt", "block": "busolt-s26-041",
    "kinds": ["contradictory", "contrary", "subcontrary"], "named": true,
    "quote": "Auf die Dritte Art ist per iudicia opposita unmittelbar zu schließen. Diese opposition ist Dreifach.",
    "judgements": [] },
  { "id": "bus-contrad-01", "src": "busolt", "block": "busolt-s26-042",
    "kinds": ["contradictory"], "named": true,
    "quote": "a.) Contradictorisch, hier kann von zwey Urtheilen nur eins wahr seyn, und ich schließe also: ist eins wahr; so ist das andere falsch und umgekehrt. Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich.",
    "judgements": [
      {"t": "Alle Menschen sind Sterblich", "role": "member", "form": "A", "formStated": true},
      {"t": "einige sind nicht sterblich", "role": "member", "form": "O", "formStated": true, "supply": "einige Menschen sind nicht sterblich"}
    ] },
  { "id": "bus-contrad-02", "src": "busolt", "block": "busolt-s26-042",
    "kinds": ["contradictory"], "named": true,
    "quote": "Keine Substanz ist einfach, einige sind einfach:",
    "judgements": [
      {"t": "Keine Substanz ist einfach", "role": "member", "form": "E", "formStated": true},
      {"t": "einige sind einfach", "role": "member", "form": "I", "formStated": true, "supply": "einige Substanzen sind einfach"}
    ],
    "note": "The second instance given under a.) Contradictorisch, where the rule allows an E against an I." },
  { "id": "bus-subcon-01", "src": "busolt", "block": "busolt-s26-043",
    "kinds": ["subcontrary"], "named": true,
    "quote": "b.) Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist z.E. Einige Menschen sind böse, – einige sind nicht böse.",
    "judgements": [
      {"t": "Einige Menschen sind böse", "role": "member", "form": "I", "formStated": true},
      {"t": "einige sind nicht böse", "role": "member", "form": "O", "formStated": true, "supply": "einige Menschen sind nicht böse"}
    ] },
  { "id": "bus-contr-01", "src": "busolt", "block": "busolt-s26-044",
    "kinds": ["contrary"], "named": true,
    "quote": "c.) Contraire, wenn einem allgemeinen bejahenden Urtheil ein allgemein verneinendes Urtheil entgegengesezt wird, oder umgekehrt, z.E. Alle Menschen sind Lasterhafte. Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft. Hier thut er mehr als nothig ist, dem andern zu wiedersprechen Judicia contraria opposita können beide falsch seyn, weil darin mehr verneint wird als es nöthig ist. Die Falschheit steckt also in der Allgemeinheit.",
    "judgements": [
      {"t": "Alle Menschen sind Lasterhafte", "role": "member", "form": "A", "formStated": true},
      {"t": "Kein Mensch ist Lasterhaft", "role": "member", "form": "E", "formStated": true}
    ] },
  { "id": "bus-conv-00", "src": "busolt", "block": "busolt-s26-044",
    "kinds": ["conversion", "contraposition"], "named": true,
    "quote": "Man nennt die Versezzung der Terminen metathesis terminorum.",
    "judgements": [],
    "note": "Both kinds proceed by this transposition of the terms." },
  { "id": "bus-conv-01", "src": "busolt", "block": "busolt-s26-044",
    "kinds": ["conversion"], "named": true, "sub": "per accidens",
    "quote": "Durch diese entsteht ein unmittelbarer Schluß durch die conversion der Urtheile wo versezt wird die Quantitaet und nicht die Qualitaet und durch die contraposition der Urtheile, wo versezt wird die Qualitaet und nicht die Quantitaet. Z.E. Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion",
    "judgements": [
      {"t": "Alle Menschen sind Sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige Sterbliche sind also Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "Busolt: conversion changes the quantity and not the quality; contraposition the quality and not the quantity." },
  { "id": "bus-contrap-01", "src": "busolt", "block": "busolt-s26-044",
    "kinds": ["contraposition"], "named": true,
    "quote": "und durch die contraposition der Urtheile, wo versezt wird die Qualitaet und nicht die Quantitaet. Z.E. Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion Was nicht sterblich ist, ist kein Mensch d.i. durch die contraposition.",
    "judgements": [
      {"t": "Alle Menschen sind Sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "Was nicht sterblich ist, ist kein Mensch", "role": "conclusion", "form": "E", "formStated": false}
    ] },
  { "id": "bus-conv-02", "src": "busolt", "block": "busolt-s26-044",
    "kinds": ["conversion"], "named": true,
    "quote": "Bei der conversion der Urtheile heißt das Urtheil was umgekehrt werden soll: Judicium conversum das wodurch die Umkehrung entspringt iudicium convertens. Die Umkehrung geschieht entweder per accidens oder simpliciter.",
    "judgements": [] },
  { "id": "bus-conv-03", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["conversion"], "named": true,
    "quote": "a.) Allgemeine bejahende Säzze lassen sich nur per accidens, allgemein verneinende Sazze nur simpliciter und drittens particulaer bejahende oder verneinende Säzze auch simpliciter umkehren.",
    "judgements": [] },
  { "id": "bus-conv-04", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["conversion"], "named": true, "sub": "per accidens",
    "quote": "Das erste heißt soviel iudicium conuersum est vniversale und von diesen kann ich nun umgekehrt sagen einige sterbliche sind Menschen Ich denke mir nemlich sterbliche unter denen auch die Menschen sind, d.i. das Subiect Mensch ist unter der Sphäre der Sterblichen, als des Praedicats.",
    "judgements": [
      {"t": "einige sterbliche sind Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "The converse of “Alle Menschen sind Sterblich”, which the passage does not repeat." },
  { "id": "bus-conv-05", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "Es giebt allgemein bejahende Säzze, die sich simpliciter umkehren lassen, bei welchen die Sphäre des Subiects und Praedicats gleich ist z.E. Alle Figuren in drei geraden Linien eingeschloßen, sind Triangel, alle Triangel sind Figuren in drei geraden Linien eingeschloßen sind Drei Ekke, d.i. eine Subtilitaet und ich überlaße es hier einem jedem, wieviel er aus einer unendlichen Menge Drei Ekke ausnehmen will. Dieser Unterschied aber ist euanescens.",
    "judgements": [
      {"t": "Alle Figuren in drei geraden Linien eingeschloßen, sind Triangel", "role": "premise", "form": "A", "formStated": false},
      {"t": "alle Triangel sind Figuren in drei geraden Linien eingeschloßen", "role": "conclusion", "form": "A", "formStated": false}
    ],
    "note": "The exception: where the spheres of subject and predicate are equal, an A converts simply. Busolt calls the difference “euanescens”." },
  { "id": "bus-conv-06", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "Alle verneinende Urtheile, die einen Wiederstreit enthalten laßen sich simpliciter umkehren, z.E. kein Triangel ist ohne Winkel keine Figur ohne Winkel ist ein Triangel",
    "judgements": [
      {"t": "kein Triangel ist ohne Winkel", "role": "premise", "form": "E", "formStated": false},
      {"t": "keine Figur ohne Winkel ist ein Triangel", "role": "conclusion", "form": "E", "formStated": false}
    ] },
  { "id": "bus-conv-07", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "alle Particular bejahende oder verneinende Säzze laßen sich simpliciter umkehren, d.i. daß die Quantitaet nicht verändert wird.",
    "judgements": [] },
  { "id": "bus-contrap-02", "src": "busolt", "block": "busolt-s26-046",
    "kinds": ["contraposition"], "named": true,
    "quote": "Die Contraposition will soviel sagen: ein jeder allgemeine Saz laßt sich contraponiren. Z.B. Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen.",
    "judgements": [
      {"t": "Alle Menschen sind Sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "Nichtsterbliche sind nicht Menschen", "role": "conclusion", "form": "E", "formStated": false}
    ] },
  { "id": "bus-gen-05", "src": "busolt", "block": "busolt-s29-014",
    "kinds": ["general"], "named": true,
    "quote": "Ratiocinium impurum seu hybridum, da zu den 3 propositionen auch eine consequentia immediata muß gedacht werden. Es ist also Begattung eines ratiocinii mit einer consequentia immediata, diese findet bey den drey lezten Figuren statt.",
    "judgements": [] },
  { "id": "bus-conv-08", "src": "busolt", "block": "busolt-s29-014",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "Die Erklärung aus der zweyten Figur: kein denkendes Wesen ist zusammengesezt alle Körper sind zusammengesezt also ist kein Körper eine denkende Substanz. – Hier denke ich mir bey Erwägung des Maioris per conversionem: nichts Zusammengeseztes ist eine denkende Substanz; ich bringe also die zweyte Figur per conuersionem maioris in die erste.",
    "judgements": [
      {"t": "kein denkendes Wesen ist zusammengesezt", "role": "premise", "form": "E", "formStated": false},
      {"t": "nichts Zusammengeseztes ist eine denkende Substanz", "role": "conclusion", "form": "E", "formStated": false}
    ],
    "note": "Used inside a syllogism: the immediate inference converts the major, which brings the second figure into the first." },
  { "id": "bus-conv-09", "src": "busolt", "block": "busolt-s29-015",
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "In reductione igitur tertiae Figurae metathesis Terminorum efficit minorem quae quidem per consequentiam immediatam. Aus einige Tugendhafte sind Menschen, folgt, einige Menschen sind tugendhaft.",
    "judgements": [
      {"t": "einige Tugendhafte sind Menschen", "role": "premise", "form": "I", "formStated": false},
      {"t": "einige Menschen sind tugendhaft", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "Used inside a syllogism: the minor of the third figure is converted so that the term falls where the first figure needs it." },

  /* ── Reflexionen on Meier, AA XVI ──────────────────────────────────────── */

  { "id": "refl-gen-01", "src": "refl16", "r": 3166,
    "kinds": ["general"], "named": true,
    "quote": "In den consequentiis immediatis ist kein Mittelbegrif.",
    "judgements": [] },
  { "id": "refl-aeq-01", "src": "refl16", "r": 3167,
    "kinds": ["aequipollentia"], "named": true,
    "quote": "sind nicht conseqventzen.",
    "judgements": [],
    "note": "Written to the words “iudicia aequipollentia” in Meier’s § 341." },
  { "id": "refl-gen-02", "src": "refl16", "r": 3168,
    "kinds": ["general"], "named": true,
    "quote": "Zeigen bloß die Form des Schlusses oder die Folgerung eines Urtheils aus dem andern (g ohne subsumtion).",
    "judgements": [] },
  { "id": "refl-conv-01", "src": "refl16", "r": 3168,
    "kinds": ["conversion"], "named": false, "sub": "per accidens",
    "quote": "e.g. »Alle Menschen sind sterblich, folglich einige [sind] sterbliche sind menschen«, zeigt nur an, daß die subsumtion unter dem praedicat eine particularitaet, mithin keinen Vernunftschluß ab universali gebe.",
    "judgements": [
      {"t": "Alle Menschen sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige [sind] sterbliche sind menschen", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "Kant’s own example of a consequentia immediata. The note does not name the kind; the example is a conversion per accidens. Its point: the subsumption under the predicate gives only a particularity, hence no Vernunftschluß ab universali." },
  { "id": "refl-gen-03", "src": "refl16", "r": 3169,
    "kinds": ["general"], "named": true,
    "quote": "Verstandesschlüsse können nicht anders als durch tavtologische subsumtionen in Vernunftschlüsse verwandelt werden.",
    "judgements": [] },
  { "id": "refl-gen-04", "src": "refl16", "r": 3169,
    "kinds": ["general"], "named": true,
    "quote": "Die Folgerung eines Urtheils aus dem andern, von welchem es blos der Form nach Unterschieden ist. Dem Inhalte oder der Materie nach aber einerley.",
    "judgements": [] },
  { "id": "refl-gen-05", "src": "refl16", "r": 3169,
    "kinds": ["general"], "named": true,
    "quote": "(s Unterschied. 1. Blos der Qvantitat nach. 2. [blos] der qvalitat nach (g und Qvantitat (vielleicht)). 3. der relation des Subiects zum praedicat mit Beybehaltung der Qvalität. 4. eben derselben relation mit veranderung der Qvalität, aber Beybehaltung der Qvantität.)",
    "judgements": [],
    "note": "Kant’s own fourfold division of the differences: by quantity only; by quality (“und Qvantität (vielleicht)”); by the relation of subject to predicate with quality kept; by the same relation with quality changed and quantity kept." },
  { "id": "refl-gen-06", "src": "refl16", "r": 3170,
    "kinds": ["general"], "named": true,
    "quote": "Die conseqventiae immediatae als unmittelbar, d.i. Verstandesschlüsse (g Sie gehen blos aus categorische Urtheile) gehen durch alle classen der categorien.",
    "judgements": [] },
  { "id": "refl-sub-01", "src": "refl16", "r": 3170,
    "kinds": ["subalternation"], "named": true,
    "quote": "Die per iudicia subalternata\ngehören zur qvantitaet.",
    "judgements": [] },
  { "id": "refl-opp-01", "src": "refl16", "r": 3170,
    "kinds": ["contradictory", "contrary", "subcontrary"], "named": true,
    "quote": "Die per iudicia opposita\ngehören zur qvalitaet.",
    "judgements": [] },
  { "id": "refl-conv-02", "src": "refl16", "r": 3170,
    "kinds": ["conversion"], "named": true,
    "quote": "Die per conversionem iudicii\ngehören zur relation.",
    "judgements": [] },
  { "id": "refl-contrap-01", "src": "refl16", "r": 3170,
    "kinds": ["contraposition"], "named": true,
    "quote": "Die per contrapositionem iudicii\ngehören zur modalitaet: aus einem assertorischen ein apodictisch Urtheil zu machen.",
    "judgements": [] },
  { "id": "refl-contrap-02", "src": "refl16", "r": 3170,
    "kinds": ["contraposition"], "named": false,
    "quote": "Alle Korper sind theilbar (assertorisch). Was also nicht theilbar ist, ist kein Korper (apodictisch Urtheil, weil es sich wiederspricht, ein Korper und nicht theilbar zu seyn, und ein Satz, dessen Gegentheil sich wiederspricht, apodictisch ist.)",
    "judgements": [
      {"t": "Alle Korper sind theilbar", "role": "premise", "form": "A", "formStated": false, "mod": "assertoric", "modStated": true},
      {"t": "Was also nicht theilbar ist, ist kein Korper", "role": "conclusion", "form": "E", "formStated": false, "mod": "apodictic", "modStated": true}
    ],
    "note": "Follows Kant’s list in the same Reflexion, where contraposition is the inference by modality; this sentence does not itself name the kind." },
  { "id": "refl-contrap-03", "src": "refl16", "r": 3170,
    "kinds": ["contraposition"], "named": false,
    "quote": "e.g. Alle Menschen sind sterblich. Denn, diesen Vorausgesetzt, ist der Satz: was nicht sterblich ist, ist nicht Mensch, apodictisch ausgedrükt.)",
    "judgements": [
      {"t": "Alle Menschen sind sterblich", "role": "premise", "form": "A", "formStated": false},
      {"t": "was nicht sterblich ist, ist nicht Mensch", "role": "conclusion", "form": "E", "formStated": false, "mod": "apodictic", "modStated": true}
    ],
    "note": "An empirical example for the same point; the premise is “vorausgesetzt”, and the contraposition is then expressed apodictically." },
  { "id": "refl-sub-02", "src": "refl16", "r": 3171,
    "kinds": ["subalternation"], "named": false,
    "quote": "Unter dem allgemeinen sind die besondern und einzelnen alle enthalten,\naber nicht unter dem besondern alle einzelne.",
    "judgements": [],
    "note": "Written beside Meier’s § 342, on the inference from the universal to the particular and singular." },
  { "id": "refl-sub-03", "src": "refl16", "r": 3171,
    "kinds": ["subalternation"], "named": false,
    "quote": "3. Man kan nicht schließen: wenn das allgemeine Urtheil falsch ist, so sind auch die besondern und einzelnen Urtheile falsch; denn es kan das praedicat bloß ein besonderer Begriff in Ansehung des subjects seyn. e.g. es ist falsch: alle Gelehrte sind fromm, aber wahr, daß es einige sind.\n4. Nicht von besondern Urtheilen und ihrer Warheit auf allgemeine.",
    "judgements": [
      {"t": "alle Gelehrte sind fromm", "role": "member", "form": "A", "formStated": false, "tv": "false"},
      {"t": "einige sind", "role": "member", "form": "I", "formStated": false, "supply": "einige Gelehrte sind fromm", "tv": "true"}
    ],
    "invalid": "Kant limits the inference: one cannot go from the falsity of the universal to the falsity of the particulars under it, nor from the truth of particulars to the universal." },
  { "id": "refl-contrad-01", "src": "refl16", "r": 3172,
    "kinds": ["contradictory"], "named": false,
    "quote": "Nach dem principio exclusi Medii.",
    "judgements": [],
    "note": "Written beside sentence 2 of Meier’s § 343. Filed under contradictory because the opposition there is shown to be that of A–O and E–I (Refl. 3173)." },
  { "id": "refl-gen-07", "src": "refl16", "r": 3172,
    "kinds": ["general"], "named": true,
    "quote": "particulariter negans.\nZu»E«:\nvniversaliter negans.\nZu»I«:\nparticulariter affirmans.",
    "judgements": [],
    "note": "Kant’s glosses on the vowels O, E and I printed in Meier’s § 343." },
  { "id": "refl-contrad-02", "src": "refl16", "r": 3173,
    "kinds": ["contradictory"], "named": true,
    "quote": "Bey den einzelnen wiedersprechenden Urtheilen muß eben daßelbe subject seyn: diese Welt ist die beste.",
    "judgements": [
      {"t": "diese Welt ist die beste", "role": "member", "form": "S+", "formStated": false}
    ],
    "note": "For singular judgements the contradictory must keep the same subject." },
  { "id": "refl-contrad-03", "src": "refl16", "r": 3173,
    "kinds": ["contradictory"], "named": true,
    "quote": "Sollen judicia communia einander wiedersprechen, so muß das eine allgemein bejahen und das andere besonders verneinen, oder allgemein verneinen und das andere besonders bejahen.\nalle Tugenden der Heiden sind wahre Tugenden: einige nicht.",
    "judgements": [
      {"t": "alle Tugenden der Heiden sind wahre Tugenden", "role": "member", "form": "A", "formStated": true},
      {"t": "einige nicht", "role": "member", "form": "O", "formStated": true, "supply": "einige Tugenden der Heiden sind nicht wahre Tugenden"}
    ] },
  { "id": "refl-subcon-01", "src": "refl16", "r": 3175,
    "kinds": ["subcontrary"], "named": false,
    "quote": "Einige Menschen sind fromm, einige nicht fromm.\nFerner L 96 aus κ−θ:\nnicht genug zum wiederstreit.",
    "judgements": [
      {"t": "Einige Menschen sind fromm", "role": "member", "form": "I", "formStated": false},
      {"t": "einige nicht fromm", "role": "member", "form": "O", "formStated": false, "supply": "einige Menschen sind nicht fromm"}
    ],
    "note": "Written to Meier’s § 344. “Nicht genug zum Wiederstreit” is Kant’s formula for the subcontraries: they say too little for a true opposition." },
  { "id": "refl-subcon-02", "src": "refl16", "r": 3176,
    "kinds": ["subcontrary"], "named": false,
    "quote": "Religionsspotter, einige Geistliche sind Heuchler, also ist es falsch, daß viele nicht Heuchler wären.",
    "judgements": [
      {"t": "einige Geistliche sind Heuchler", "role": "premise", "form": "I", "formStated": false},
      {"t": "daß viele nicht Heuchler wären", "role": "conclusion", "form": "O", "formStated": false, "tv": "false"}
    ],
    "note": "Filed by its locus alone (Meier § 344, no. 1). The note is brief and how the inference is meant to run is not clear from it." },
  { "id": "refl-subcon-03", "src": "refl16", "r": 3176,
    "kinds": ["subcontrary"], "named": false,
    "quote": "Wenn es falsch ist, das einige fromm seyn: so müßen alle Menschen |\ngottlos seyn; denn alsdenn wird die einschrenkung von dem praedicat weggenomen, und denn heißt es: alle menschen sind (g nicht) fromm, und: einige sind fromm.",
    "judgements": [
      {"t": "das einige fromm seyn", "role": "premise", "form": "I", "formStated": false, "tv": "false"},
      {"t": "alle Menschen |\ngottlos seyn", "role": "conclusion", "form": "E", "formStated": false}
    ],
    "note": "Written to Meier’s § 344, no. 2: if one of two subcontraries is false, the other is true." },
  { "id": "refl-contr-01", "src": "refl16", "r": 3177,
    "kinds": ["contrary"], "named": false,
    "quote": "Alle Menschen sind gelehrt, kein Mensch ist gelehrt.\neinige —— —\neinige nicht.",
    "judgements": [
      {"t": "Alle Menschen sind gelehrt", "role": "member", "form": "A", "formStated": false},
      {"t": "kein Mensch ist gelehrt", "role": "member", "form": "E", "formStated": false}
    ],
    "note": "Kant’s figure for Meier’s § 345: the four judgements of one subject and predicate, the universal pair above and the particular pair below." },
  { "id": "refl-contr-02", "src": "refl16", "r": 3177,
    "kinds": ["contrary", "subalternation"], "named": false,
    "quote": "Denn was von allen verneinet wird, wird auch von einigen verneinet.\ne.g. alle Menschen können irren,\nkein Mensch kann irren.\neinige Menschen können nicht irren.",
    "judgements": [
      {"t": "alle Menschen können irren", "role": "member", "form": "A", "formStated": false},
      {"t": "kein Mensch kann irren", "role": "member", "form": "E", "formStated": false},
      {"t": "einige Menschen können nicht irren", "role": "member", "form": "O", "formStated": false}
    ],
    "note": "Written to Meier’s § 345, no. 2. What is denied of all is denied of some (E to O, a subalternation); so if the E were true, the O would be, and the A could not be true beside it." },
  { "id": "refl-contr-03", "src": "refl16", "r": 3177,
    "kinds": ["contrary"], "named": false,
    "quote": "κ−θ. L 96. Neben L §. 345 »allgemeine — sein« (Z. 30f.):\nzuviel zum wiederstreit.",
    "judgements": [],
    "note": "Kant’s formula for the contraries: they say too much for a true opposition, as the subcontraries say too little (Refl. 3175)." },
  { "id": "refl-opp-02", "src": "refl16", "r": 3178,
    "kinds": ["contradictory", "contrary", "subcontrary"], "named": false,
    "quote": "Wo ich nicht sagen kan: Aut Aut, d.i. wo beydes wahr oder falsch seyn kann, ist keine wahre opposition.",
    "judgements": [],
    "note": "Kant’s test of a true opposition. Only the contradictory pair always passes it; the contraries (both can be false) and the subcontraries (both can be true) do not." },
  { "id": "refl-conv-03", "src": "refl16", "r": 3179,
    "kinds": ["conversion"], "named": true,
    "quote": "Wir haben es nur mit der Umkehrung categorischer Urtheile zu thun.",
    "judgements": [] },
  { "id": "refl-conv-04", "src": "refl16", "r": 3180,
    "kinds": ["conversion"], "named": true,
    "quote": "Die metathesis terminorum oder die Versetzung heißt nur alsdenn Umkehrung, wenn die Qvalität dieselbe bleibt.",
    "judgements": [] },
  { "id": "refl-contrap-04", "src": "refl16", "r": 3180,
    "kinds": ["contraposition"], "named": true,
    "quote": "Sie ist contrapositio, wenn blos die Qvantitat dieselbe bleibt.",
    "judgements": [] },
  { "id": "refl-conv-05", "src": "refl16", "r": 3181,
    "kinds": ["conversion"], "named": false,
    "quote": "aber blos als bejahende Urtheile betrachtet können es nur die particulare.\nDenn das praedicat ist conceptus latior; also können nur einige von denen, die unter ihm enthalten sind, dem Subject zukommen.",
    "judgements": [],
    "note": "Written to the words Kant underlined at the start of Meier’s § 347." },
  { "id": "refl-conv-06", "src": "refl16", "r": 3182,
    "kinds": ["conversion"], "named": true, "sub": "simpliciter",
    "quote": "Wenn ich sage: »einige Menschen sind gelehrt«: so heißt das so viel: »sie nehmen einen Theil in der sphaera der Gelehrten ein«; also ist ein Theil dieser Gelehrten einerley mit Menschen. Diese Umkehrung ist ein identischer Satz.",
    "judgements": [
      {"t": "einige Menschen sind gelehrt", "role": "premise", "form": "I", "formStated": false},
      {"t": "ein Theil dieser Gelehrten einerley mit Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ] },
  { "id": "refl-conv-07", "src": "refl16", "r": 3183,
    "kinds": ["conversion"], "named": false, "sub": "simpliciter",
    "quote": "Allen denen, so das [subiect] praedicat des verneinenden Urtheils zukommt, ist das Subject zu wieder. e.g. Kein mensch ist unfehlbar, und keiner, der unfehlbar ist, ist ein Mensch.",
    "judgements": [
      {"t": "Kein mensch ist unfehlbar", "role": "premise", "form": "E", "formStated": false},
      {"t": "keiner, der unfehlbar ist, ist ein Mensch", "role": "conclusion", "form": "E", "formStated": false}
    ],
    "note": "Written to Meier’s § 349; the example is a simple conversion of an E." },
  { "id": "refl-conv-08", "src": "refl16", "r": 3184,
    "kinds": ["conversion"], "named": false, "sub": "per accidens",
    "quote": "indem sie in besondere verändert werden. Alle triangel sind figuren, einige figuren sind triangel.",
    "judgements": [
      {"t": "Alle triangel sind figuren", "role": "premise", "form": "A", "formStated": false},
      {"t": "einige figuren sind triangel", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "Written to Meier’s § 350: the universals are changed into particulars." },
  { "id": "refl-conv-09", "src": "refl16", "r": 3185,
    "kinds": ["conversion"], "named": false, "sub": "per accidens",
    "quote": "In allen beiahenden Urtheilen ist das subiect in Ansehung des praedicats particular; denn weil dieses notio latior ist, so [ist das sub] bedeutet das subiect nur einige von denen Dingen, die unter dem allgemeinen Begrif des praedicats enthalten sind. Daher sind Menschen einige von den sterblichen, d.i. einige sterbliche sind Menschen",
    "judgements": [
      {"t": "einige sterbliche sind Menschen", "role": "conclusion", "form": "I", "formStated": false}
    ],
    "note": "The ground of the conversion per accidens: the predicate is the wider concept, so the subject is only some of what falls under it." },
  { "id": "refl-conv-10", "src": "refl16", "r": 3186,
    "kinds": ["conversion"], "named": false,
    "quote": "Das Praedicat ist [bet] conceptus latior; also nur einiges von demselben ist unter der notion des Subiects enthalten.",
    "judgements": [] },
  { "id": "refl-conv-11", "src": "refl16", "r": 3187,
    "kinds": ["conversion"], "named": false, "sub": "of a particular negative",
    "quote": "einige Menschen sind nicht gelehrt. Einige sind ungelehrt. also einige Ungelehrte sind Menschen.\nsonst nicht: einige Menschen sind keine gelehrte Menschen. und einige gelehrte Menschen sind keine Menschen.",
    "judgements": [
      {"t": "einige Menschen sind nicht gelehrt", "role": "premise", "form": "O", "formStated": false},
      {"t": "Einige sind ungelehrt", "role": "intermediate", "form": "I", "formStated": false, "supply": "einige Menschen sind ungelehrt"},
      {"t": "einige Ungelehrte sind Menschen", "role": "conclusion", "form": "I", "formStated": false},
      {"t": "einige gelehrte Menschen sind keine Menschen", "role": "rejected", "form": "O", "formStated": false}
    ],
    "note": "Written to Meier’s § 351. Kant writes the negative as an affirmative with the predicate “ungelehrt” and converts that; the direct transposition is the one he marks “sonst nicht”." },
  { "id": "refl-contrap-05", "src": "refl16", "r": 3188,
    "kinds": ["contraposition"], "named": false,
    "quote": "Alle Menschen sind vernünftige Wesen. [Einige die] Was nicht ein vernünftig wesen ist, ist kein Mensch.",
    "judgements": [
      {"t": "Alle Menschen sind vernünftige Wesen", "role": "premise", "form": "A", "formStated": false},
      {"t": "Was nicht ein vernünftig wesen ist, ist kein Mensch", "role": "conclusion", "form": "E", "formStated": false}
    ],
    "note": "Written to sentence 3 of Meier’s § 352. The bracketed “Einige die” is a deletion or insertion of Kant’s as the AA prints it." },
  { "id": "refl-contrap-06", "src": "refl16", "r": 3189,
    "kinds": ["contraposition"], "named": false,
    "quote": "Entgegenstellung.\nDen wenn das praedicat als das, was das subiect unter sich enthält, mithin die Ganze Sphäre, verneint wird, so wird auch ein theil derselben Verneint, d.i. auch das Subject.",
    "judgements": [],
    "note": "Written to the start of Meier’s § 352; Kant heads it “Entgegenstellung”." },
  { "id": "refl-gen-08", "src": "refl16", "r": 3194,
    "kinds": ["general"], "named": true,
    "quote": "Conseqventia immediata est [transitus a iudicio derivatio] deductio iudicii ab alio absqve iudicio intermedio.",
    "judgements": [],
    "note": "Kant’s definition, written opposite Meier’s text at AA 16:704, line 19." },
  { "id": "refl-sub-04", "src": "refl16", "r": 3200,
    "kinds": ["general", "subalternation"], "named": true,
    "quote": "1) Verstandesschlüße (s sind unmittelbare Schlüsse) schließen vom allgemeinen aufs besondere oder vom besonderen aufs besondere (s aber unmittelbar), niemals aber vom besonderen aufs allgemeine, weil sie bestimmende Urtheile geben sollen.",
    "judgements": [] }
];
