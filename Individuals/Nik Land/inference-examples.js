/* ─────────────────────────────────────────────────────────────────────────────
   Examples of syllogisms and immediate inferences in the three Logik
   transcripts of AA XXIV. Hand-curated; read by inference-explorer.html.

   The text is NOT copied here as the source of record. Each entry points at a
   block of ../../data/logik-<work>-24.js by id and gives the stretch of it
   (`quote`) and the inference inside that stretch (`example`) verbatim. The
   page re-finds both in the block at load time and works out the Academy page
   from the block's own `pages` offsets, so a re-run of the extractor cannot
   leave a stale page number behind; an entry whose quote no longer matches is
   shown with a warning rather than hidden.

   Fields
     id        stable id: blo-NN, wie-NN, bus-NN
     work      blomberg | wiener | busolt
     block     id of the block in the data file, e.g. "busolt-s28-002"
     quote     verbatim stretch of that block's `text` that carries the example
               and whatever the transcript says about it
     example   verbatim substring of `quote`: the inference itself (or, for a
               rule, the sentence that states it)
     kind      which of the four buttons the entry appears under, an array:
                 categorical   a syllogism whose major is a categorical judgement
                 hypothetical  one whose major is a conditional (modus ponens,
                               modus tollens)
                 disjunctive   one whose major is a disjunction
                 immediate     a consequentia immediata, an inference with no
                               middle term (conversion, contraposition,
                               opposition, subalternation, aequipollence)
               More than one value where the passage covers both: a Dilemma is
               hypothetical with a disjunctive consequent, and the reduction of
               the second figure to the first is a syllogism coupled to an
               immediate inference, as Busolt says himself.
     level     instance  a concrete example is given
               rule      the passage states the rule or the kind, and gives no
                         instance of its own
     form      the figure, mode, or species of inference, in the annotator's words
     named     which of `kind` and `form` the TRANSCRIPT ITSELF names inside
               `quote`. Whatever is not listed was assigned by the annotator from
               the shape of the argument and is displayed as inferred.
               Attested vs. inferred, as the root CLAUDE.md requires.
     faulty    present where the lecturer offers the argument as a mistake, with
               what he says is wrong with it
     note      the annotator's remark, where one is needed

   Only what the transcripts give is classified. An entry is a stretch of the
   lecture, not a reconstruction: where the transcription is in note form, or
   breaks off, it is shown as it stands.
   ───────────────────────────────────────────────────────────────────────────── */

const INFERENCE_EXAMPLES = [

  /* ── Logik Blomberg (ca. 1771) ─────────────────────────────────── */

  { id: "blo-01", work: "blomberg", block: "blomberg-s06-082",
    kind: ["categorical"], level: "instance", form: "affirmative, first-figure pattern", named: [],
    quote: "z.E. wenn ich beweisen will, daß ein Körper theilbar sey, so nehme ich eine Notam intermediam an, daß derselbe zusammen gesezt ist, und schlüße auf folgende Art: alles, was zusammen gesezet ist, ist theilba hr, atqui ein jeder Körper ist zusammen gesezt, ergo ist ein jeder Körper theilba hr.",
    example: "alles, was zusammen gesezet ist, ist theilba hr, atqui ein jeder Körper ist zusammen gesezt, ergo ist ein jeder Körper theilba hr",
    note: "Offered to show what a nota intermedia does in a proof. The same example, with the same middle term, recurs in Busolt (AA 24:673)." },

  { id: "blo-02", work: "blomberg", block: "blomberg-s11-009",
    kind: ["categorical", "immediate"], level: "rule", form: "Barbara Celarent; reduction to the first figure", named: ["kind"],
    quote: "es ist diese gantze Bezeichnung eine bloße Pedanterie (das Barbara Celarent), und ist auch sonsten die ganze Syllogistic bloße Pedanterie, und ich werde hernach zeigen, daß jeder Vernunft-Schluß außer der ersten Figur nicht einfach sey wie man doch aber fälschlich davor halt, sonderen aus der Consequentia immediata und einem Ratiocinio zusammen gesezet ist.",
    example: "jeder Vernunft-Schluß außer der ersten Figur nicht einfach sey wie man doch aber fälschlich davor halt, sonderen aus der Consequentia immediata und einem Ratiocinio zusammen gesezet ist",
    note: "Blomberg dismisses the mood names as pedantry and states the thesis the later transcripts illustrate: outside the first figure a syllogism is an immediate inference joined to a syllogism proper. No instance is given here." },

  { id: "blo-03", work: "blomberg", block: "blomberg-s11-019",
    kind: ["immediate"], level: "rule", form: "Verstandesschluß vs. Vernunftschluß", named: ["kind"],
    quote: "Ein jeder Schluß ist überhaupt ein Urtheil, nur mit dem Unterschiede: ist das Urtheil Mittelb ar so ist es ein Vernunft-, oder ein mittelbarer Schluß. ist aber das Urtheil unmittelbahr, so ist der Schluß nur ein Verstandes Schluß es wird nemlich eins aus dem anderen geurtheilt absque medio Termino alsdenn ist das Urtheil, oder auch die Conclusio immediata, oder eins wird aus dem anderen geschloßen per medium Terminum, und alsdenn ist der Schluß mediate, oder auch ein Vernunft Schluß.",
    example: "ist aber das Urtheil unmittelbahr, so ist der Schluß nur ein Verstandes Schluß es wird nemlich eins aus dem anderen geurtheilt absque medio Termino",
    note: "The definition: an inference without a middle term is an inference of the understanding, one through a middle term an inference of reason." },

  { id: "blo-04", work: "blomberg", block: "blomberg-s11-024",
    kind: ["immediate"], level: "rule", form: "judicia aequipollentia", named: ["kind", "form"],
    quote: "was nun die consequentia per Judicia aequipollentia anbetrifft, so ist dieses weil beyde Urtheile in derselben gantz mit einander einerley sind, eigentlich gar keine Consequens, und also der so genannte Schluß per Judicia aequipollentia ist gar kein Schluß.",
    example: "der so genannte Schluß per Judicia aequipollentia ist gar kein Schluß",
    note: "The first of the five modes is denied to be an inference at all, the two judgements being the same. The transcription introduces the five modes with \"wir wollen nun nur allein mittelbahre Schlüße erwegen\" (s11-019); it is printed so and has not been corrected." },

  { id: "blo-05", work: "blomberg", block: "blomberg-s11-024",
    kind: ["immediate"], level: "rule", form: "judicia subalternata", named: ["kind", "form"],
    quote: "Die Consequentia per Judicia Subalternata geschiehet ohne alle Veränderung der Stelle der Terminorum, die Qualitaet bleibt auch dieselbe, nur die Quantitaet wird darinn veränderet.",
    example: "Die Consequentia per Judicia Subalternata geschiehet ohne alle Veränderung der Stelle der Terminorum, die Qualitaet bleibt auch dieselbe, nur die Quantitaet wird darinn veränderet" },

  { id: "blo-06", work: "blomberg", block: "blomberg-s11-025",
    kind: ["immediate"], level: "instance", form: "contradictory opposition", named: ["form"],
    quote: "1: Contradictorie sind 2 Urtheile einander entgegen gesezt, wenn einem bejahenden Urtheile ein besonderes verneinendes Urtheil (oder umgekehrt) entgegenponirt wird. z.E. alle Menschen sind sterblich, aber einige sind nicht sterblich.",
    example: "alle Menschen sind sterblich, aber einige sind nicht sterblich",
    note: "Blomberg lists opposition among the modes of immediate inference (s11-024), so the pair is filed here; he states no inference from it in this block." },

  { id: "blo-07", work: "blomberg", block: "blomberg-s11-026",
    kind: ["immediate"], level: "rule", form: "subcontrary opposition", named: ["form"],
    quote: "2 Subcontraria sind Urtheile alsdenn, wenn in 2 Particular Urtheilen, die einerley Subject, und Praedicat haben, das eine bejahend, und das andere verneinend ist.",
    example: "Subcontraria sind Urtheile alsdenn, wenn in 2 Particular Urtheilen, die einerley Subject, und Praedicat haben, das eine bejahend, und das andere verneinend ist" },

  { id: "blo-08", work: "blomberg", block: "blomberg-s11-027",
    kind: ["immediate"], level: "rule", form: "contrary and subcontrary opposition", named: ["form"],
    quote: "3 giebt es noch eine Contrarietas Judicii, die findet denn statt, wenn in 2 Urtheilen das eine allgemein bejahend, und das andere allgemein verneinend ist. Die Judicia Subcontraria halten weniger, oder nicht genug in sich, als zur richtigen opposition gehöret, die Judicia contraria halten mehr, und die Judicia contradictoria eben so viel, als zur rechten opposition genug ist, in sich. und können wir dahero sagen: Judicia subcontraria, weil sie nicht genug enthalten, können 1) alle beyde wahr seyn, sie können aber 2) nicht alle beyde falsch seyn.",
    example: "Judicia subcontraria, weil sie nicht genug enthalten, können 1) alle beyde wahr seyn, sie können aber 2) nicht alle beyde falsch seyn" },

  { id: "blo-09", work: "blomberg", block: "blomberg-s11-028",
    kind: ["immediate"], level: "rule", form: "conversion", named: ["form"],
    quote: "Bey aller Logischen Conversion (vid. ant. § 346) der Urtheile heißt das urtheil, welches umgekehrt werden soll, conversum, das Urtheil, welches dieser Umkehrung entspringen soll, convertens. Eine Conversio bey der die Qualitaet des Urtheils nicht gehindert wird, heißt Simplex, wo sie aber gehinderet wird, conversio per accidens. allgemein bejahende Urtheile laßen sich per accidens umkehren, alle verneinende Urtheile aber laßen sich Simpliciter umkehren, und endlich die particulare laßen sich alle Simpliciter umkehren, das ist die einzige Regel der logischen Conversion.",
    example: "allgemein bejahende Urtheile laßen sich per accidens umkehren, alle verneinende Urtheile aber laßen sich Simpliciter umkehren" },

  { id: "blo-10", work: "blomberg", block: "blomberg-s11-028",
    kind: ["immediate"], level: "rule", form: "contraposition", named: ["form"],
    quote: "Die Regel der Contraposition ist diese: allgemein bejahende Urtheile laßen sich nur contraponiren.",
    example: "allgemein bejahende Urtheile laßen sich nur contraponiren" },

  { id: "blo-11", work: "blomberg", block: "blomberg-s12-001",
    kind: ["immediate"], level: "rule", form: "Verstandesschluß", named: ["kind"],
    quote: "Es giebt auch nemlich, wie vorhero gesagt, gewise Urtheilen, und Consequenzen, die wir immediatas genannt haben, diese waren indemonstrabel. wir nannten auch diese Folgen eines Urtheils aus anderen Urtheilen die unerweislich sind, nicht einen Vernunft-, sonderen einen Verstandes Schluß.",
    example: "nicht einen Vernunft-, sonderen einen Verstandes Schluß" },

  { id: "blo-12", work: "blomberg", block: "blomberg-s12-015",
    kind: ["immediate"], level: "rule", form: "unmittelbare Folgerungen", named: ["kind"],
    quote: "Hier redet der Autor von unmittelbahren Folgerungen, es schickt sich aber gar nicht, denn es sind ja gar keine Vernunft Schlüße sonderen nur Verstandes Schlüße. Denn sie haben keinen medium Terminum.",
    example: "es sind ja gar keine Vernunft Schlüße sonderen nur Verstandes Schlüße. Denn sie haben keinen medium Terminum" },

  { id: "blo-13", work: "blomberg", block: "blomberg-s12-003",
    kind: ["categorical"], level: "rule", form: "nota notae", named: [],
    quote: "Ein adaequater Schluß bestehet in einem Vernunft Schluß, dessen Regel diese ist: nota notae rei est nota rei ipsius und dieses ist auch die Grundregel aller Syllogistik, und zugleich der gantze Unterschied eines Urtheils von einem Vernunft-Schluß.",
    example: "nota notae rei est nota rei ipsius",
    note: "The basic rule of the categorical syllogism: a mark of a mark of a thing is a mark of the thing itself." },

  { id: "blo-14", work: "blomberg", block: "blomberg-s12-006",
    kind: ["categorical"], level: "rule", form: "nota notae (affirmative)", named: [],
    quote: "1: Nota Notae rei est nota rei ipsius",
    example: "Nota Notae rei est nota rei ipsius",
    note: "Given as the basic rule of all affirmative syllogisms." },

  { id: "blo-15", work: "blomberg", block: "blomberg-s12-009",
    kind: ["categorical"], level: "rule", form: "repugnans (negative)", named: [],
    quote: "Repugnans Nota Notae rei, repugnat rei ipsi Dieses ist nun die Grund Regel aller Vernunft Schlüße.",
    example: "Repugnans Nota Notae rei, repugnat rei ipsi",
    note: "The basic rule of all negative syllogisms." },

  { id: "blo-16", work: "blomberg", block: "blomberg-s12-011",
    kind: ["categorical"], level: "rule", form: "dictum de omni et nullo", named: [],
    quote: "Das Dictum de omni et nullo lautet bey den Logickern so: was einem allgemeinen Begrif zu komt, komt auch allen Begrifen zu, die unter ihm enthalten sind.",
    example: "was einem allgemeinen Begrif zu komt, komt auch allen Begrifen zu, die unter ihm enthalten sind",
    note: "In the preceding block Blomberg says the dictum is held by logicians to be the first ground of all inferences, but that the basic rules above come before it." },

  { id: "blo-17", work: "blomberg", block: "blomberg-s12-012",
    kind: ["hypothetical", "disjunctive"], level: "rule", form: "ratiocinium extraordinarium", named: ["kind"],
    quote: "Wenn in einem Vernunft Schluß das Verhältniß zweier Urtheile (nicht zweier Begrife) erwogen wird, so heißt das ein Ratiocinium Extraordinarium oder wenn ein Vernunft Schluß angenommen wird, wo major propositio nicht ein Judicium ordinarium sonderen ein Judicium Extraordinarium ist, so heißt es alsdenn auch ratiocinium Extraordinarium. alle ratiocinia Extraordinaria sind entweder Hypothetica oder Disjunctiva. Denn entweder wird in denselben das Verhältniß der Verknüpfung, oder das Verhältniß des Wiederstreits angezeiget; ist das erste, so heißet er ein Hypothetischer, im anderen Fall aber ein Disjunctiver Vernunft Schluß.",
    example: "alle ratiocinia Extraordinaria sind entweder Hypothetica oder Disjunctiva" },

  { id: "blo-18", work: "blomberg", block: "blomberg-s12-012",
    kind: ["hypothetical"], level: "rule", form: "modus ponens and modus tollens", named: ["form"],
    quote: "jeder Syllogismus Hypotheticus hat 2 modos, nemlich einen modum ponentem, wo eine Bejahung in der Conclusion geschloßen wird, und den modum tollentem, wo nemlich eine Verneinung geschloßen wird. Eine Bejahung wird hier nach der Regel geschloßen: atqui verum est prius, ergo quoque posterius. Die Verneinung aber aus der Falschheit des consequentis auf die Falschheit des antecedentis, und zwar nach der Regel: atqui falsum est prius, ergo quoque posterius remoto antecedente non tollitur consequens sed sublata consequentia tollitur antecedens. ich kann hier also niemahl a negatione antecedentis auf die negationem consequentis schließen, aber wohl umgekehrt.",
    example: "atqui verum est prius, ergo quoque posterius",
    note: "Blomberg adds that the conditional judgement is only a Substratum, not yet a Vernunftschluß, since the consequence is still to be proved. The modus tollens formula is printed \"atqui falsum est prius, ergo quoque posterius remoto antecedente non tollitur consequens sed sublata consequentia tollitur antecedens\"." },

  { id: "blo-19", work: "blomberg", block: "blomberg-s08-518",
    kind: ["hypothetical"], level: "instance", form: "conditional major, atqui, conclusion", named: [],
    quote: "Viele von denen Argumenten der Scepticer hatten und bekommen ihren Namen oftmals vom Termino medio des Syllogismi. So heißt z.E. eines ihrer Argumenten der Lügner, welches also Lautete: wenn du sagest, du lügest, und in dem du dieses sa gst, die Wahrheit redest, so redest du die Wahrheit, indem du Lügest, atqui du sagest, du Lügest, und, in dem du dieses sagest, so redest du also die Wahrheit, indem du lügest. Die rechte Conclusion aber solte seyn: Ergo redest du die Wahrheit, indem du sagest, du Lügest.",
    example: "wenn du sagest, du lügest, und in dem du dieses sa gst, die Wahrheit redest, so redest du die Wahrheit, indem du Lügest, atqui du sagest, du Lügest, und, in dem du dieses sagest, so redest du also die Wahrheit, indem du lügest",
    note: "The Sceptics' argument \"the Liar\", named for its middle term. Blomberg says the right conclusion should be \"Ergo redest du die Wahrheit, indem du sagest, du Lügest\"." },

  { id: "blo-20", work: "blomberg", block: "blomberg-s12-013",
    kind: ["disjunctive"], level: "rule", form: "disjunctive syllogism", named: ["kind"],
    quote: "Was nun die disjunctive Schlüße anbelangt, so sind dieses solche schlüße, in welchen die major propositio disjunctiv ist. ein disjunctiver Schluß ist eine logische Eintheilung, ich stelle mir bey demselben einen eingetheilten Begrif, und alle membra, welche mit dem Diviso gleich sind, vor. Das Subject der major propositio in demselben ist das Divisum, und das Praedicat sind alle membra dividentia. Folglich beruhet die Richtigkeit eines Disjunctiven Schlußes auf der Richtigkeit einer logischen Division, es muß nemlich alles in wahrer Disjunction und opposition gegen einander stehen, und überdem auch alles complet seyn.",
    example: "ein disjunctiver Schluß ist eine logische Eintheilung",
    note: "The major premise is a logical division; the syllogism is sound only if the division is sound. No instance is given." },

  { id: "blo-21", work: "blomberg", block: "blomberg-s12-014",
    kind: ["hypothetical", "disjunctive"], level: "rule", form: "Dilemma", named: ["form"],
    quote: "Ein Dilemma ist eigentlich ein ratiocinium Hypotheticum, deßen Consequenz disjunctiv ist. man Verfahre also in demselben so wohl nach den Regeln der Hypothetischen als nach denen des disjunctiven Schluß art. atqui falsum est prius, ergo etiam posterius. Ein Dilemma hat man niemals als modum ponendi, sonderen immer als modum tollendi.",
    example: "Ein Dilemma ist eigentlich ein ratiocinium Hypotheticum, deßen Consequenz disjunctiv ist",
    note: "A hypothetical syllogism whose consequent is disjunctive, used only as a modus tollens. No instance is given." },

  { id: "blo-22", work: "blomberg", block: "blomberg-s12-017",
    kind: ["categorical"], level: "rule", form: "enthymeme", named: ["form"],
    quote: "Enthymema dies ist ein solcher Schluß, in welchem nur 2 Urtheile, nemlich eine praemissa, und die conclusio gesezet werden.",
    example: "in welchem nur 2 Urtheile, nemlich eine praemissa, und die conclusio gesezet werden" },

  { id: "blo-23", work: "blomberg", block: "blomberg-s12-021",
    kind: ["categorical", "hypothetical"], level: "rule", form: "Sorites", named: ["form"],
    quote: "Es giebt Sorites per Syllogismos Hypoth: und dann heißt er auch Sorites Hypotheticus, oder der Sorites kann entspringen per Syllogismos Categoricos, und alsdenn heißt er auch Categoricus.",
    example: "Es giebt Sorites per Syllogismos Hypoth: und dann heißt er auch Sorites Hypotheticus, oder der Sorites kann entspringen per Syllogismos Categoricos, und alsdenn heißt er auch Categoricus" },


  /* ── Wiener Logik (1780ff.) ────────────────────────────────────── */

  { id: "wie-01", work: "wiener", block: "wiener-s11-024",
    kind: ["hypothetical"], level: "rule", form: "modus ponens and modus tollens", named: ["form"],
    quote: "Bey allen hypothetischen Urtheilen habe ich zwey modos, einen modum ponentem et tollentem. Der modus ponens heißt, wenn das antecedens wahr ist: so ist auch das consequens wahr. Der modus tollens heißt, wenn das consequens falsch ist: so ist auch das antecedens falsch. Dieses kommt nachher in der syllogistic vor.",
    example: "Der modus ponens heißt, wenn das antecedens wahr ist: so ist auch das consequens wahr. Der modus tollens heißt, wenn das consequens falsch ist: so ist auch das antecedens falsch",
    note: "Stated in the section on judgements, with the remark that it comes up again in the syllogistic. No instance is given." },

  { id: "wie-02", work: "wiener", block: "wiener-s12-001",
    kind: ["immediate"], level: "instance", form: "conversion per accidens; aequipollence", named: ["kind"],
    quote: "consequentia immediata weil der Materie nach eins, nur Form verschieden, z.B. alle Menschen sterblich folglich einige sterbliche Dinge Menschen oder kein Mensch unsterblich Hier conclusum und judicium concludens eines.",
    example: "alle Menschen sterblich folglich einige sterbliche Dinge Menschen oder kein Mensch unsterblich",
    note: "Two examples joined by \"oder\". The transcription is in note form, with abbreviations and no punctuation, and is shown as it stands." },

  { id: "wie-03", work: "wiener", block: "wiener-s12-001",
    kind: ["categorical"], level: "instance", form: "mediate inference, middle concept needed", named: ["kind"],
    quote: "Schluß aus Urtheil anders. mittelbar wo noch Begriffe die nicht im Urtheile liegen z.B. alle Körper theilbar, weil zusammengesetzt; aber alle Körper theilbar folglich auch einige",
    example: "alle Körper theilbar, weil zusammengesetzt",
    note: "The lecturer's example of an inference through a concept not in the judgement. The line breaks off into the immediate example, \"aber alle Körper theilbar folglich auch einige\"." },

  { id: "wie-04", work: "wiener", block: "wiener-s12-001",
    kind: ["categorical"], level: "instance", form: "Vernunftschluß, subject term new", named: ["kind"],
    quote: "Auch Verstandesschluß vom ratiocinio zu unterscheiden wo judicium Vernunft brauche weil materialiter unterschieden z.B. alle Menschen sterblich folglich auch Cajus.",
    example: "alle Menschen sterblich folglich auch Cajus",
    faulty: "Not an immediate inference, as the lecturer notes: it needs a further judgement.",
    note: "Offered to mark the difference from an inference of the understanding: the matter of the two judgements is different. Busolt (AA 24:670) uses the same example." },

  { id: "wie-05", work: "wiener", block: "wiener-s12-002",
    kind: ["immediate"], level: "instance", form: "judicia aequipollentia", named: ["kind", "form"],
    quote: "Judicia immediata sind 1) per judicia aequipollentia einige Menschen sind nicht7 ° tugendhaft folglich sind nicht alle Menschen tugendhaft; nichts ist ohne Grund und alles hat seinen Grund sind Substitutionen.",
    example: "einige Menschen sind nicht7 ° tugendhaft folglich sind nicht alle Menschen tugendhaft; nichts ist ohne Grund und alles hat seinen Grund",
    note: "\"nicht7 °\" is as the transcription prints it." },

  { id: "wie-06", work: "wiener", block: "wiener-s12-002",
    kind: ["immediate"], level: "instance", form: "judicia subalternata", named: ["form"],
    quote: "2) Subalternata auch nur Form nach verschieden z.B. alle Menschen sind sterblich folglich einige Quantität unterschieden.",
    example: "alle Menschen sind sterblich folglich einige",
    note: "The example breaks off after \"einige\", as printed." },

  { id: "wie-07", work: "wiener", block: "wiener-s12-002",
    kind: ["immediate"], level: "instance", form: "contradictory opposition", named: ["form"],
    quote: "einige Menschen nicht sterblich, alle Menschen sterblich Quantität und Qualität sind a) contradictoria wenn eins allgemein bejahet oder verneinet und das andere partikulär verneinet oder bejahet d.i. die eigentliche Opposition wo die Bejahung des einen das andere aufhebt affirmando unum negat alterum und umgekehrt.",
    example: "einige Menschen nicht sterblich, alle Menschen sterblich",
    note: "The block goes on to say that this is the proper opposition, where affirming one denies the other, and that indirect proofs rest on it." },

  { id: "wie-08", work: "wiener", block: "wiener-s12-003",
    kind: ["immediate"], level: "instance", form: "subcontrary opposition", named: ["form"],
    quote: "b) Subcontrarie opposita einige Menschen sind gelehrt, einige nicht Beide vielleicht wahr. Qualität verschieden, Quantität eins. Hier kan nicht indirecte geschlossen werden. Hier können beide wahr nicht beide falsch seyn also richtig der Schluß wenn das eine falsch ist das andere wahr nicht umgekehrt.",
    example: "einige Menschen sind gelehrt, einige nicht",
    note: "Both may be true, not both false; so, if one is false, the other is true, but not the reverse." },

  { id: "wie-09", work: "wiener", block: "wiener-s12-003",
    kind: ["immediate"], level: "instance", form: "contrary opposition", named: ["form"],
    quote: "c) contrarie opposita beide allgemein nur Qualität verschieden: alle Menschen gelehrt kein Mensch gelehrt, beide können falsch nicht wahr seyn sind das Gegentheil vom vorigen.",
    example: "alle Menschen gelehrt kein Mensch gelehrt",
    note: "Both may be false, not both true." },

  { id: "wie-10", work: "wiener", block: "wiener-s12-004",
    kind: ["immediate"], level: "instance", form: "conversion", named: ["form"],
    quote: "4) per conversionem judiciorum alle Menschen sterblich folglich einige Sterbliche Menschen. Quantitat muß verloren gehen, denn heißts conversio per accidens bleibt Quantitat heißts simpliciter talis z.B. kein Mensch ist ohne Feinde etc. allgemein bejahende nur per accidens convertiren aber 2 verneinende auch stricte talis – alle Partikulare bejahend oder verneinend lassen sich simpliciter umkehren einige Menschen sind gelehrt etc.",
    example: "alle Menschen sterblich folglich einige Sterbliche Menschen",
    note: "Quantity must be lost (conversio per accidens); other cases keep it (simpliciter). The text is in note form." },

  { id: "wie-11", work: "wiener", block: "wiener-s12-005",
    kind: ["immediate"], level: "instance", form: "contraposition", named: ["form"],
    quote: "5) consequentia immediata per contrapositionem wo Qualität auch geandert alle Menschen sind sterblich einiges Sterbliche ist nicht Mensch. Alle Bejahende lassen sich contraponiren alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch.",
    example: "alle Menschen sind sterblich einiges Sterbliche ist nicht Mensch",
    note: "As printed. The next sentence of the block gives the contraposition as \"alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch\"." },

  { id: "wie-12", work: "wiener", block: "wiener-s12-005",
    kind: ["immediate"], level: "instance", form: "contraposition", named: ["form"],
    quote: "Alle Bejahende lassen sich contraponiren alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch.",
    example: "alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch" },

  { id: "wie-13", work: "wiener", block: "wiener-s13-001",
    kind: ["categorical"], level: "instance", form: "nota intermedia", named: ["form"],
    quote: "Hier ist nota intermedia Cajus sterblich weil Mensch daraus Consequentia mediata Vernunftschluß ist die Wahrheit eines Urtheils durch die Subsumtion seiner Bedingung unter ein ander Urtheil.",
    example: "Cajus sterblich weil Mensch",
    note: "A compressed example: the middle term is \"Mensch\". The block breaks off (\"< bricht ab >\") further on." },

  { id: "wie-14", work: "wiener", block: "wiener-s13-001",
    kind: ["categorical", "hypothetical", "disjunctive"], level: "rule", form: "division of Vernunftschlüsse", named: ["kind"],
    quote: "Eintheilung 1) categorisch, 2) hypothetisch (wo major Verhältniß des Grundes zur Folge ausdrückt) 3) disjunctiv, wo major die Glieder der Eintheilung ausdrückt.",
    example: "1) categorisch, 2) hypothetisch (wo major Verhältniß des Grundes zur Folge ausdrückt) 3) disjunctiv, wo major die Glieder der Eintheilung ausdrückt" },


  /* ── Logik Busolt (ca. 1789/90) ────────────────────────────────── */

  { id: "bus-01", work: "busolt", block: "busolt-s26-035",
    kind: ["categorical"], level: "instance", form: "mediate inference, subject term new", named: [],
    quote: "Wird ein Urtheil aus einem andern gefolgert, ohne ein zwischen Urtheil, so ist dies ein Verstandesschluß, per iudicium intermedium ein Vernunftschluß, z.B. Alle Menschen sind Sterblich, also ist auch Caius sterblich. Hier ist nun Caius ein Begrif, den ich vorher nicht hatte, es ist also falsch geschloßen, und ich muß nur mittelbar schließen, dadurch, daß ich mir einen Begriff von Caius mache.",
    example: "Alle Menschen sind Sterblich, also ist auch Caius sterblich",
    faulty: "Faulty as an immediate inference; the lecturer completes it as a Vernunftschluß (see the full syllogism at AA 24:672).",
    note: "Busolt's example of an inference that cannot be made immediately. He says \"es ist also falsch geschloßen\" and that it must be made through a concept of Caius." },

  { id: "bus-02", work: "busolt", block: "busolt-s26-041",
    kind: ["immediate"], level: "rule", form: "aequipollentia, subalternata, opposita", named: ["kind", "form"],
    quote: "Die erste Art kann wegfallen, sie ist leer, weil es so viel als nichts ist, eines aus dem andern zu folgern, was dem erstern einerley ist, es bleibt immer dasselbe Urtheil. Auf die Zweyte Art schließe ich vom allgemeinen aufs besondere. Auf die Dritte Art ist per iudicia opposita unmittelbar zu schließen. Diese opposition ist Dreifach.",
    example: "Auf die Zweyte Art schließe ich vom allgemeinen aufs besondere. Auf die Dritte Art ist per iudicia opposita unmittelbar zu schließen",
    note: "The first mode is dropped as empty; the second goes from the universal to the particular." },

  { id: "bus-03", work: "busolt", block: "busolt-s26-042",
    kind: ["immediate"], level: "instance", form: "contradictory opposition", named: ["form"],
    quote: "Contradictorisch, hier kann von zwey Urtheilen nur eins wahr seyn, und ich schließe also: ist eins wahr; so ist das andere falsch und umgekehrt. Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist. Z.E. Alle Menschen sind Sterblich, einige sind nicht sterblich. Keine Substanz ist einfach, einige sind einfach:",
    example: "Alle Menschen sind Sterblich, einige sind nicht sterblich. Keine Substanz ist einfach, einige sind einfach",
    note: "Busolt: of two contradictories only one can be true, so if one is true the other is false, and conversely." },

  { id: "bus-04", work: "busolt", block: "busolt-s26-043",
    kind: ["immediate"], level: "instance", form: "subcontrary opposition", named: ["form"],
    quote: "Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist z.E. Einige Menschen sind böse, – einige sind nicht böse.",
    example: "Einige Menschen sind böse, – einige sind nicht böse" },

  { id: "bus-05", work: "busolt", block: "busolt-s26-044",
    kind: ["immediate"], level: "instance", form: "contrary opposition", named: ["form"],
    quote: "Contraire, wenn einem allgemeinen bejahenden Urtheil ein allgemein verneinendes Urtheil entgegengesezt wird, oder umgekehrt, z.E. Alle Menschen sind Lasterhafte. Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft. Hier thut er mehr als nothig ist, dem andern zu wiedersprechen Judicia contraria opposita können beide falsch seyn, weil darin mehr verneint wird als es nöthig ist. Die Falschheit steckt also in der Allgemeinheit.",
    example: "Alle Menschen sind Lasterhafte. Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft",
    note: "Contraries can both be false, because more is denied than is necessary." },

  { id: "bus-06", work: "busolt", block: "busolt-s26-044",
    kind: ["immediate"], level: "instance", form: "conversion", named: ["form"],
    quote: "Z.E. Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion Was nicht sterblich ist, ist kein Mensch d.i. durch die contraposition.",
    example: "Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion",
    note: "The example runs on to the contraposition, in the next entry." },

  { id: "bus-07", work: "busolt", block: "busolt-s26-044",
    kind: ["immediate"], level: "instance", form: "contraposition", named: ["form"],
    quote: "Z.E. Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion Was nicht sterblich ist, ist kein Mensch d.i. durch die contraposition.",
    example: "Was nicht sterblich ist, ist kein Mensch d.i. durch die contraposition" },

  { id: "bus-08", work: "busolt", block: "busolt-s26-046",
    kind: ["immediate"], level: "instance", form: "conversion per accidens", named: ["form"],
    quote: "a.) Allgemeine bejahende Säzze lassen sich nur per accidens, allgemein verneinende Sazze nur simpliciter und drittens particulaer bejahende oder verneinende Säzze auch simpliciter umkehren. Das erste heißt soviel iudicium conuersum est vniversale und von diesen kann ich nun umgekehrt sagen einige sterbliche sind Menschen Ich denke mir nemlich sterbliche unter denen auch die Menschen sind, d.i. das Subiect Mensch ist unter der Sphäre der Sterblichen, als des Praedicats. Das Praedicat muß also großer seyn als das Subiect, ich kann also einige Sterbliche für Menschen annehmen.",
    example: "einige sterbliche sind Menschen",
    note: "The predicate must be wider than the subject, so only some of the mortal can be taken for men." },

  { id: "bus-09", work: "busolt", block: "busolt-s26-046",
    kind: ["immediate"], level: "instance", form: "conversion simpliciter (equal spheres)", named: ["form"],
    quote: "Es giebt allgemein bejahende Säzze, die sich simpliciter umkehren lassen, bei welchen die Sphäre des Subiects und Praedicats gleich ist z.E. Alle Figuren in drei geraden Linien eingeschloßen, sind Triangel, alle Triangel sind Figuren in drei geraden Linien eingeschloßen sind Drei Ekke, d.i. eine Subtilitaet und ich überlaße es hier einem jedem, wieviel er aus einer unendlichen Menge Drei Ekke ausnehmen will. Dieser Unterschied aber ist euanescens.",
    example: "Alle Figuren in drei geraden Linien eingeschloßen, sind Triangel, alle Triangel sind Figuren in drei geraden Linien eingeschloßen sind Drei Ekke",
    note: "As printed; the example ends \"sind Drei Ekke\". Busolt calls the difference between the cases a subtlety and \"euanescens\"." },

  { id: "bus-10", work: "busolt", block: "busolt-s26-046",
    kind: ["immediate"], level: "instance", form: "conversion simpliciter (negative)", named: ["form"],
    quote: "Alle verneinende Urtheile, die einen Wiederstreit enthalten laßen sich simpliciter umkehren, z.E. kein Triangel ist ohne Winkel keine Figur ohne Winkel ist ein Triangel alle Particular bejahende oder verneinende Säzze laßen sich simpliciter umkehren, d.i. daß die Quantitaet nicht verändert wird.",
    example: "kein Triangel ist ohne Winkel keine Figur ohne Winkel ist ein Triangel" },

  { id: "bus-11", work: "busolt", block: "busolt-s26-046",
    kind: ["immediate"], level: "instance", form: "contraposition", named: ["form"],
    quote: "Die Contraposition will soviel sagen: ein jeder allgemeine Saz laßt sich contraponiren. Z.B. Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen.",
    example: "Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen" },

  { id: "bus-12", work: "busolt", block: "busolt-s26-046",
    kind: ["categorical"], level: "instance", form: "first figure (Barbara pattern)", named: [],
    quote: "Wie wird nach den Judiciis mediatis geschloßen? Wenn ein Begrif aus dem andern soll geschloßen werden, der im vorigen nicht enthalten ist; so muß man einen Begriff, der die Bedingung der Regeln enthält hinzufügen; der Begriff des Obiects enthalt nun die Bedingung der Regel, und also muß von dieser conclusion auch das Praedicat der Conclusion gelten. Z.E. Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich. Es gründet sich dieser Vernunftschluß auf den Grundsaz: einem jeden Dinge in so fern es unter die Bedingung subsumirt werden kann kommt das Praedikat zu ein Vernunftschluß aber ist cognitio a priori per subsumtionem conceptus sub conditione regulae cuiusdam generali.",
    example: "Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich",
    note: "Busolt's fullest example of a categorical syllogism, with the principle it rests on: whatever can be subsumed under the condition receives the predicate." },

  { id: "bus-13", work: "busolt", block: "busolt-s26-051",
    kind: ["categorical", "hypothetical", "disjunctive"], level: "rule", form: "division of Vernunftschlüsse", named: ["kind"],
    quote: "Bei diesen Schlüßen sieht man auf die Relation, und nach dieser werden die Schlüße eingetheilt in Kategorische, Hypothetische und disiunctiue. Alle Schlüße werden beurtheilt nach der Maiore propositione. Ist das ein kategorisches Urtheil so ist der Schluß auch Kategorisch.",
    example: "nach dieser werden die Schlüße eingetheilt in Kategorische, Hypothetische und disiunctiue",
    note: "The kind of syllogism follows the kind of the major proposition." },

  { id: "bus-14", work: "busolt", block: "busolt-s26-055",
    kind: ["hypothetical"], level: "rule", form: "hypothetical syllogism", named: ["kind"],
    quote: "Nur in den Kategorischen Schlüssen ist ein Medius Terminus. Bey den Hypothetischen ist nur bloß das Verhältniß zweierley Urtheile, wie eins aus der Richtigkeit des andern folgt.",
    example: "Bey den Hypothetischen ist nur bloß das Verhältniß zweierley Urtheile, wie eins aus der Richtigkeit des andern folgt",
    note: "Unlike the categorical syllogism it has no middle term." },

  { id: "bus-15", work: "busolt", block: "busolt-s27-003",
    kind: ["categorical"], level: "rule", form: "nota notae", named: [],
    quote: "a.) Nota notae est Nota rei ipsius, dies gilt von bejahenden Urtheilen.",
    example: "Nota notae est Nota rei ipsius" },

  { id: "bus-16", work: "busolt", block: "busolt-s27-004",
    kind: ["categorical"], level: "instance", form: "nota notae applied", named: [],
    quote: "b.) Repugnans notae repugnat rei ipsi dies gilt von verneinenden Schlüßen, z.E. Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers.",
    example: "Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers",
    note: "The transcription gives this under the rule for negative inferences (Repugnans notae), though the example as printed is affirmative." },

  { id: "bus-17", work: "busolt", block: "busolt-s27-006",
    kind: ["categorical"], level: "instance", form: "negative, first-figure pattern", named: [],
    quote: "Repugnans notae repugnat rei ipsi. Z.E. Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach etc. Einfach seyn gilt von Zusammengesezten, und vermöge des Zusammengesezten von Körpern. Die Beiden angeführten Regeln sind eben dies, was den alten dictum de omni et nullo war.",
    example: "Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach",
    note: "The example of the negative rule. Busolt adds that the two rules are what the old dictum de omni et nullo was." },

  { id: "bus-18", work: "busolt", block: "busolt-s27-009",
    kind: ["immediate"], level: "rule", form: "Consequentiae immediatae", named: ["kind"],
    quote: "Das Principium der Hypothetischen und Disiunctiuen Schlüße erklärt der Autor im 364. und 365. §. Es giebt also nur drey Principien der Vernunftschlüße denn die Consequentiae immediatae sind eigentlich keine Vernunftschlüße; sie sind nur Folgerungen und bedürfen keiner Regel. Der Autor redet von ordentlichen und außerordentlichen Vernunftschlüßen. Es ist aber hierin kein anderer Unterschied, als daß die Schlüße in denen die Form versteckt ist außerordentliche sind.",
    example: "die Consequentiae immediatae sind eigentlich keine Vernunftschlüße; sie sind nur Folgerungen und bedürfen keiner Regel",
    note: "So there are only three principles of Vernunftschlüsse: the categorical, the hypothetical and the disjunctive." },

  { id: "bus-19", work: "busolt", block: "busolt-s28-002",
    kind: ["categorical"], level: "instance", form: "second figure", named: ["form"],
    quote: "Figura II. Hic medius Terminus est praedicatum in maiori et minori z.E. Kein denkendes Wesen ist zusammengesetzt, alle Körper sind zusammengesezt daher ist kein Körper ein denkendes Wesen.",
    example: "Kein denkendes Wesen",
    note: "The middle term is the predicate of both premises." },

  { id: "bus-20", work: "busolt", block: "busolt-s28-003",
    kind: ["categorical"], level: "instance", form: "third figure", named: ["form"],
    quote: "Figura III. Hic medius Terminus in maiori et minori propositione est Subiectum. Z.E. Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen.",
    example: "Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen",
    note: "The middle term is the subject of both premises." },

  { id: "bus-21", work: "busolt", block: "busolt-s28-004",
    kind: ["categorical"], level: "instance", form: "fourth figure", named: ["form"],
    quote: "Figura IV. Hic medius Terminus est Praedicatum in maiori et Subiectum in minori Z.E. Quidquid habet vim agendi est Spiritus omnis spiritus est substantia, ergo omnis substantia habet vim agendi.",
    example: "Quidquid habet vim agendi",
    note: "The middle term is the predicate of the major and the subject of the minor. The example is in Latin." },

  { id: "bus-22", work: "busolt", block: "busolt-s29-001",
    kind: ["categorical"], level: "instance", form: "ambiguous term", named: [],
    quote: "1.) In einem ordentlichen Vernunftschluß können nicht mehr, als 3. Hauptbegriffe seyn; denn die Conclusion hat nur 2 Anmerkung Ist einer von den beiden Hauptbegriffen in den Praemißen doppelt Sinnig; so findet sich das doppelt Sinnige im ganzen Schluß Z.E. In dem Ort wo ich bin, ist kein anderer, die Stube das ist der Ort wo ich bin, also ist in der Stube kein anderer.",
    example: "In dem Ort wo ich bin, ist kein anderer",
    faulty: "Presented as a fault: a main concept used in two senses.",
    note: "The example of the rule that a syllogism has only three main concepts: if one is ambiguous in the premises, the ambiguity runs through the whole inference." },

  { id: "bus-23", work: "busolt", block: "busolt-s29-003",
    kind: ["categorical"], level: "instance", form: "two negative premises", named: [],
    quote: "3.) Ex puris negatiuis nihil sequitur. Dieses sieht man durch die gesunde Vernunft ein; es folgt aus der Natur der Sache selbst: Denn die Subsumtion muß unter der Bedingung der Regel seyn. Ich muß sagen daß einem Dinge das zu komme, was die Bedingung der Regel ist, und dies muß doch bejahend seyn. Z.E. Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier.",
    example: "Kein Mensch ist ein unvernünftiges Thier",
    faulty: "Presented as invalid: ex puris negativis nihil sequitur." },

  { id: "bus-24", work: "busolt", block: "busolt-s29-004",
    kind: ["categorical"], level: "instance", form: "two particular premises", named: [],
    quote: "4.) Ex puris particularibus nihil sequitur. Weil sonst das was unter der Bedingung der Regel steht, nicht aufs Praedicat derselben angewendet werden kann Z.E. Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen.",
    example: "Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen",
    faulty: "Presented as invalid: ex puris particularibus nihil sequitur." },

  { id: "bus-25", work: "busolt", block: "busolt-s29-005",
    kind: ["categorical"], level: "rule", form: "conclusio sequitur partem debiliorem", named: [],
    quote: "5.) Conclusio sequi debet partem debiliorem NB: Unter den Praemissen nennt man partem debiliorem welcher entweder Particulair oder verneinend ist Der Saz heißt: ist eine Praemisse verneinend, so ist die Conclusion verneinend, ist eine Praemisse Particulair so ist die Conclusion particulair.",
    example: "ist eine Praemisse verneinend, so ist die Conclusion verneinend, ist eine Praemisse Particulair so ist die Conclusion particulair" },

  { id: "bus-26", work: "busolt", block: "busolt-s29-014",
    kind: ["categorical", "immediate"], level: "instance", form: "second figure reduced to the first", named: ["form"],
    quote: "Ratiocinium impurum seu hybridum, da zu den 3 propositionen auch eine consequentia immediata muß gedacht werden. Es ist also Begattung eines ratiocinii mit einer consequentia immediata, diese findet bey den drey lezten Figuren statt. Die Erklärung aus der zweyten Figur: kein denkendes Wesen ist zusammengesezt alle Körper sind zusammengesezt also ist kein Körper eine denkende Substanz. – Hier denke ich mir bey Erwägung des Maioris per conversionem: nichts Zusammengeseztes ist eine denkende Substanz; ich bringe also die zweyte Figur per conuersionem maioris in die erste.",
    example: "kein denkendes Wesen ist zusammengesezt alle Körper sind zusammengesezt also ist kein Körper eine denkende Substanz",
    note: "Busolt calls this the coupling of a ratiocinium with a consequentia immediata: the major is converted (\"nichts Zusammengeseztes ist eine denkende Substanz\") so as to bring the second figure into the first." },

  { id: "bus-27", work: "busolt", block: "busolt-s29-015",
    kind: ["categorical", "immediate"], level: "instance", form: "third figure reduced to the first", named: ["form"],
    quote: "Erklärung der Dritten Figur: Alle Menschen sind unvollkommen einige sind tugendhaft; also sind einige tugendhafte unvollkommen. Hier steht Terminus medius nicht an seiner geziemenden Stelle, und diese giebt ihm blos die Reduction in die erste Figur. Alle Menschen sind unvollkommen einige tugendhafte sind Menschen, also sind einige tugendhafte unvollkommen. In reductione igitur tertiae Figurae metathesis Terminorum efficit minorem quae quidem per consequentiam immediatam. Aus einige Tugendhafte sind Menschen, folgt, einige Menschen sind tugendhaft.",
    example: "Alle Menschen sind unvollkommen einige sind tugendhaft; also sind einige tugendhafte unvollkommen",
    note: "The reduction replaces the minor \"einige sind tugendhaft\" with \"einige tugendhafte sind Menschen\", obtained by an immediate inference (next entry)." },

  { id: "bus-28", work: "busolt", block: "busolt-s29-015",
    kind: ["immediate"], level: "instance", form: "conversion simpliciter (particular)", named: ["kind"],
    quote: "In reductione igitur tertiae Figurae metathesis Terminorum efficit minorem quae quidem per consequentiam immediatam. Aus einige Tugendhafte sind Menschen, folgt, einige Menschen sind tugendhaft.",
    example: "Aus einige Tugendhafte sind Menschen, folgt, einige Menschen sind tugendhaft" },

  { id: "bus-29", work: "busolt", block: "busolt-s29-020",
    kind: ["categorical"], level: "rule", form: "mood names", named: ["form"],
    quote: "In der ersten Figur Barbara, Celarent, Darii, Ferio. In der zweiten Figur Cesare, Camestres, Festino, Barocco. In der dritten Figur Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison. In der vierten Figur Calemes, Bamalip, Dimatis, Fesapo, Fresisom.",
    example: "In der ersten Figur Barbara, Celarent, Darii, Ferio",
    note: "The names run on through the other three figures. Busolt follows them with: all of this holds only of categorical syllogisms." },

  { id: "bus-30", work: "busolt", block: "busolt-s29-021",
    kind: ["hypothetical"], level: "rule", form: "modus ponens", named: ["form"],
    quote: "a.) Modum ponentem. Da Schlüße ich a veritate antecedentis ad consequentis positionem.",
    example: "Da Schlüße ich a veritate antecedentis ad consequentis positionem" },

  { id: "bus-31", work: "busolt", block: "busolt-s29-022",
    kind: ["hypothetical"], level: "instance", form: "modus tollens", named: ["form"],
    quote: "b.) Modum tollentem; hier schließe ich a remotione consequentis ad remotionem antecedentis, e.g. wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus; id est modus tollens.",
    example: "wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus",
    note: "The inference runs from the denial of the consequent to the denial of the antecedent. Printed so." },

  { id: "bus-32", work: "busolt", block: "busolt-s29-023",
    kind: ["hypothetical"], level: "instance", form: "modus ponens (formula)", named: [],
    quote: "Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius. Der maior propositionis sagt nichts mehr als wie ein Saz aus dem andern folgt. Ist die consequens Unrichtig; so sagt man es ist a baculo ad angulum geschloßen.",
    example: "Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius",
    note: "Busolt adds that the major says only how one proposition follows from another." },

  { id: "bus-33", work: "busolt", block: "busolt-s29-023",
    kind: ["hypothetical"], level: "rule", form: "what does not follow", named: ["form"],
    quote: "Der modus tollens findet nur statt, a consequente ad antecedentem, nehmlich sublato consequente tollitur antecedens, aber a positione consequentis ad positionem antecedentis non valet modus ponens.",
    example: "a positione consequentis ad positionem antecedentis non valet modus ponens",
    faulty: "Names the invalid direction: from the consequent's truth to the antecedent's." },

  { id: "bus-34", work: "busolt", block: "busolt-s29-023",
    kind: ["disjunctive"], level: "rule", form: "disjunctive syllogism", named: ["kind"],
    quote: "Die Disiunctiuen Vernunftschlüße bestehen darinn, daß der maior in mehr theile getheilt wird, die einander opponirt sind.",
    example: "Die Disiunctiuen Vernunftschlüße bestehen darinn, daß der maior in mehr theile getheilt wird, die einander opponirt sind" },

  { id: "bus-35", work: "busolt", block: "busolt-s29-024",
    kind: ["disjunctive"], level: "rule", form: "disjunctive syllogism, denying a member", named: ["kind"],
    quote: "Die Membra diuidentia nennen wir in einem Vernunftschluß membra disiunctiua. In einem solchen Schluß schließen wir a negatigatione omnium membrorum disiunctionis praeter vnum ad positionem huius vnius",
    example: "schließen wir a negatigatione omnium membrorum disiunctionis praeter vnum ad positionem huius vnius",
    note: "\"negatigatione\" is as the transcription prints it." },

  { id: "bus-36", work: "busolt", block: "busolt-s29-025",
    kind: ["disjunctive"], level: "rule", form: "two members", named: ["kind"],
    quote: "Bey Zweyen Membris schließet man a negatione vnius ad positionem alterius. Ist eins falsch; so ist das andere wahr. Oder ich schließe auch a positione vnius membri disiunctionis ad negationem ceterorum omnium.",
    example: "Ist eins falsch; so ist das andere wahr. Oder ich schließe auch a positione vnius membri disiunctionis ad negationem ceterorum omnium",
    note: "Both directions are given: from the denial of one member to the other, and from the assertion of one to the denial of the rest." },

  { id: "bus-37", work: "busolt", block: "busolt-s29-026",
    kind: ["hypothetical", "disjunctive"], level: "instance", form: "Dilemma", named: ["form"],
    quote: "Dilemma est id argumentandi genus, in quo maior est hypothetica. Alle dilemmata haben eine negatiue conclusion z.E. Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen. Dicitur alius Syllogismus cornutus crocodilus. Daß die Alten viel vom Dilemma machten, wenn sie aus den Behauptungen andere Folgen zogen. Ein Dilemma hat allemal etwas Sophistisches, und ist ein modus indirectus zu schließen.",
    example: "Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen",
    note: "Only the major premise is given: a hypothetical judgement with a disjunctive consequent. Busolt says every dilemma has a negative conclusion." },

  { id: "bus-38", work: "busolt", block: "busolt-s29-030",
    kind: ["categorical"], level: "instance", form: "ratiocinium crypticum", named: ["form"],
    quote: "Jedes Ratiocinium ist entweder Formale oder crypticum, ein versteckter Vernunftschluß. Wir reden mehrenteils durch Ratiocinia cryptica. Z.E. Die Seele weil sie einfach ist, ist unvergänglich.",
    example: "Die Seele weil sie einfach ist, ist unvergänglich",
    note: "A hidden syllogism: one premise and the conclusion are spoken, the major (\"everything simple is imperishable\") is left to be thought." },

  { id: "bus-39", work: "busolt", block: "busolt-s29-030",
    kind: ["categorical"], level: "instance", form: "enthymeme", named: ["form"],
    quote: "Ein enthymema heißt ein Schluß, wo man eine von den praemissen wegläßt, z.B. Alle Menschen können irren also ich.",
    example: "Alle Menschen können irren also ich" },

  { id: "bus-40", work: "busolt", block: "busolt-s29-034",
    kind: ["hypothetical"], level: "instance", form: "the Liar", named: ["form"],
    quote: "Die Alten hatten einen solchen Schluß den sie den Lügner nannten: wenn du sagst du lügest und redest die Wahrheit, so redest du die Wahrheit, wenn du lügest.",
    example: "wenn du sagst du lügest und redest die Wahrheit, so redest du die Wahrheit, wenn du lügest",
    note: "Given under the paralogisms. Blomberg has the same argument at greater length (AA 24:215)." },

  { id: "bus-41", work: "busolt", block: "busolt-s29-034",
    kind: ["categorical"], level: "instance", form: "copulative sophism", named: ["form"],
    quote: "Copulatiue sophismen sind diejenige wo eigentlich zwey Syllogismen verbunden sind als: Alles einfache ist Unsterblich, Gott und alle Geister sind einfach.",
    example: "Alles einfache ist Unsterblich, Gott und alle Geister sind einfach",
    note: "Busolt says two syllogisms are joined in it. Only the premises are printed." },

  { id: "bus-42", work: "busolt", block: "busolt-s29-035",
    kind: ["categorical", "hypothetical"], level: "rule", form: "Sorites", named: ["form"],
    quote: "Sorites ist blos eine Folgerung des Ausdrucks. Daselbst häufe ich Conclusion auf Conclusion und laße die praemißen weg. Eine solche Verkettung von Schlüßen kann nun aus kategorischen, Hypothetischen Säzzen bestehen und so wird Sorites kategorikus Sorites Hypotheticus.",
    example: "Eine solche Verkettung von Schlüßen kann nun aus kategorischen, Hypothetischen Säzzen bestehen und so wird Sorites kategorikus Sorites Hypotheticus" }

];
