/* ─────────────────────────────────────────────────────────────────────────────
   Logic Corpus — the group's own annotation layers over the three Logik
   transcripts of AA XXIV (data/logik-blomberg-24.js, logik-busolt-24.js,
   logik-wiener-24.js).

   Hand-curated. Edit it directly; groups/logiccorpus/SPEC.md says what each
   layer claims. It stays in this folder until the group promotes it to data/.

   Every entry points at the text the same way:
     work    "blomberg" | "busolt" | "wiener"
     block   the id of a block in that work's `sections[].blocks[]`
     quote   a VERBATIM stretch of that block's `text` — the passage the entry is
             about. The page highlights it and cites its AA page. An entry whose
             quote cannot be found in its block is shown unhighlighted and says so.

   What is attested and what is the editors' reading
     quote, label, named   come from the Academy Edition's text. `named: true`
                           means the passage itself names the thing it is filed
                           under (`Figura II`, `modus tollens`, `Dilemma`);
                           `named: false` means the group has filed it there.
     cat, type, sub, point, note, mood   are the group's reading, never the edition's.
                           The page labels them so.

   LC_EXAMPLE_CATS   { key, label, desc }
   LC_EXAMPLES       { id, work, block, quote, cat, point }
                     `point` is what the example is brought in to illustrate.
   LC_SYLL_TYPES     { key, label, desc }
   LC_SYLLOGISMS     { id, work, block, quote, type, sub, named, mood?, note? }
                     `mood` is the group's reading of a figure and mood where the
                     text gives the premises but not the mood's name.
   LC_PARALLELS      { id, topic, kind, note, passages: [{ work, block, quote }] }
                     kind: "doctrine"  the same teaching in two or three lectures
                           "wording"   the same turn of phrase or the same terms
                           "example"   the same illustration recurring
   ───────────────────────────────────────────────────────────────────────────── */

const LC_EXAMPLE_CATS = [
  { key: 'math',     label: 'Mathematics & geometry',   desc: 'Triangles, figures and constructions — the lecture’s model of a priori certainty.' },
  { key: 'kinds',    label: 'Genus, species & kinds',   desc: 'Examples of subordination and comparison among natural kinds.' },
  { key: 'school',   label: 'School-logic cases',       desc: 'The stock propositions and inferences of the textbooks (Menschen, Caius, Mohren).' },
  { key: 'nature',   label: 'Natural philosophy',       desc: 'Physics, astronomy, chemistry and natural history.' },
  { key: 'theology', label: 'Theology & religion',      desc: 'God, the soul, polytheism, the last day.' },
  { key: 'ethics',   label: 'Ethics & conduct',         desc: 'Virtue, lying, resolutions of the will.' },
  { key: 'aesthetic',label: 'Poetry, art & aesthetics', desc: 'Shakespeare, Aesop, the aesthetic admixture in a judgement.' },
  { key: 'life',     label: 'Everyday life',            desc: 'Servants, needles, rivers of ice, first impressions.' }
];

const LC_EXAMPLES = [
  // — Mathematics & geometry
  { id: 'ex01', work: 'busolt', block: 'busolt-s02-001',
    quote: 'In der Mathematik kann man ohne die Augen oder Instrumente zu gebrauchen',
    cat: 'math', point: 'Understanding as the faculty of rules, the senses as the faculty of intuition.' },
  { id: 'ex02', work: 'busolt', block: 'busolt-s12-006',
    quote: 'Die drey Seiten des Triangels sind essentialien, sie gehören zum Wesen; die Winkel sind attributen.',
    cat: 'math', point: 'Essentialia against attributa among a concept’s marks.' },
  { id: 'ex03', work: 'busolt', block: 'busolt-s22-004',
    quote: 'Die Triangel sind Gleichseitig oder Gleichschenklich. Diese Einteilung ist falsch.',
    cat: 'math', point: 'A faulty logical division: members of the subdivision set beside those of the division.' },
  { id: 'ex04', work: 'wiener', block: 'wiener-s11-025',
    quote: 'Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.',
    cat: 'math', point: 'The disjunctive judgement as a logical division of a concept’s sphere.' },
  { id: 'ex05', work: 'wiener', block: 'wiener-s09-005',
    quote: 'Ich will mir eine Figur denken, sagt der mathematicus, die so und so aussehen, und so und so heißen soll.',
    cat: 'math', point: 'Mathematical definition is synthetic: the concept is made, not given.' },

  // — Genus, species & kinds
  { id: 'ex06', work: 'busolt', block: 'busolt-s19-019',
    quote: 'Eisen ist die Species von Metall. Ein Genus kann in einem andern betrachtet auch Species seyn. Z.E. Metall ist Species vom Körper.',
    cat: 'kinds', point: 'The same concept is species to the one above it and genus to the one below: iron, metal, body.' },
  { id: 'ex07', work: 'busolt', block: 'busolt-s19-015',
    quote: 'Die Vergleichung zwischen fichten und tannen, und den Weiden',
    cat: 'kinds', point: 'Comparation: what spruces and firs share against willows (needles against leaves).' },

  // — School-logic cases
  { id: 'ex08', work: 'busolt', block: 'busolt-s26-046',
    quote: 'Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich.',
    cat: 'school', point: 'The textbook syllogism: a rule, a subsumption, a conclusion.' },
  { id: 'ex09', work: 'wiener', block: 'wiener-s04-091',
    quote: 'wer da sagt, alle Mohren sind Menschen. Der Respondent ist ein Mensch. Also ist er ein Mohr.',
    cat: 'school', point: 'A subtle Trugschluss used in disputations to confuse the respondent.' },

  // — Natural philosophy
  { id: 'ex10', work: 'busolt', block: 'busolt-s11-022',
    quote: 'Ich laße einen Stein vom Thurm fallen; so werde ich urtheilen, er werde gerade herunter fallen',
    cat: 'nature', point: 'A force departs from its law only when a second force intrudes: the stone driven aside by the wind, as understanding and senses are mixed in error.' },
  { id: 'ex11', work: 'wiener', block: 'wiener-s04-081',
    quote: 'eine Kugel, die gerade ins Centrum der Scheibe gegangen seyn würde',
    cat: 'nature', point: 'Understanding and sensibility as two forces; the diagonal motion of a ball driven aside by wind.' },
  { id: 'ex12', work: 'busolt', block: 'busolt-s14-009',
    quote: 'Vom Gewitter hat man anfangs geglaubt, daß es eine Aehnlichkeit mit der Elektrizitaet haben könnte',
    cat: 'nature', point: 'A hypothesis that grows by confirmation until it becomes certainty.' },
  { id: 'ex13', work: 'busolt', block: 'busolt-s21-018',
    quote: 'Die Definizion des Zinnobers, Quecksilber und Schwefel sublimirt giebt Zinnober',
    cat: 'nature', point: 'Testing a definition by whether one can make the thing from it.' },
  { id: 'ex14', work: 'blomberg', block: 'blomberg-s06-013',
    quote: 'warum der eine gähnet und jenen ansiehet, so sagten die Alten ernsthaft, der Grund davon ist die Sympathie',
    cat: 'nature', point: 'A “ground” that explains nothing: the qualitas occulta in the guise of sympathy.' },
  { id: 'ex15', work: 'wiener', block: 'wiener-s04-116',
    quote: 'Mondsfinsterniß kann ich begreiffen, weil ich den Lauf des Mondes weiß.',
    cat: 'nature', point: 'Begreifen is knowing something a priori to the degree needed.' },
  { id: 'ex16', work: 'busolt', block: 'busolt-s15-001',
    quote: 'Das System des Copernicus ist nur Hypothese.',
    cat: 'nature', point: 'A hypothesis can be strengthened but never brought to apodictic certainty.' },

  // — Theology & religion
  { id: 'ex17', work: 'busolt', block: 'busolt-s21-002',
    quote: 'Gott ist ein Unendliches, Ewiges, Allwißendes Wesen.',
    cat: 'theology', point: 'Tautology in a definition: the marks “flow” from one another and are counted twice.' },
  { id: 'ex18', work: 'wiener', block: 'wiener-s04-091',
    quote: 'im polytheismus ist mehr Wahrheit als im atheismus',
    cat: 'theology', point: 'A cognition can be false overall and yet partly true.' },
  { id: 'ex19', work: 'blomberg', block: 'blomberg-s07-042',
    quote: 'in keiner Wißenschaft mehrere Menge von verneinenden Merckmahlen, als in der vernünftigen Gottes-Gelahrtheit',
    cat: 'theology', point: 'Negative marks keep us from error where positive ones cannot be had.' },
  { id: 'ex20', work: 'busolt', block: 'busolt-s11-022',
    quote: 'Wenn der jüngste Tag kommen wird.',
    cat: 'theology', point: 'An unavoidable ignorance, hence an error that cannot be avoided (error invincibilis).' },

  // — Ethics & conduct
  { id: 'ex21', work: 'busolt', block: 'busolt-s11-022',
    quote: 'Alles lügen ist Schändlich, man sagt aber, Nothlügen sind erlaubt.',
    cat: 'ethics', point: 'Brought as a case of the understanding mixed with sensibility: lying is shameful, yet “white lies” are said to be allowed.' },
  { id: 'ex22', work: 'busolt', block: 'busolt-s14-050',
    quote: 'Ich will, niemals lügen wenn ich gleich sehr viel dadurch gewinnen könnte',
    cat: 'ethics', point: 'A resolution regarding an object — the practical maxim as an example of a method.' },
  { id: 'ex23', work: 'wiener', block: 'wiener-s04-096',
    quote: 'was ist Tugend? Eine Herrschaft über die Neigungen. Was ist Herrschaft?',
    cat: 'ethics', point: 'Ascending through subordinate marks: each answer raises a new question.' },

  // — Poetry, art & aesthetics
  { id: 'ex24', work: 'wiener', block: 'wiener-s11-027',
    quote: 'wenn ich sage: der Werth der Tugend ist der größte: so ist das logisch',
    cat: 'aesthetic', point: 'The same judgement with and without the aesthetic admixture of wonder.' },
  { id: 'ex25', work: 'busolt', block: 'busolt-s11-016',
    quote: 'Man tadelt am Shakespeare, daß er die Geister erscheinen läßt.',
    cat: 'aesthetic', point: 'Logical truth and aesthetic truth can come apart.' },
  { id: 'ex26', work: 'busolt', block: 'busolt-s11-016',
    quote: 'in Äsops Fabeln werden die Thiere redend vorgestellt',
    cat: 'aesthetic', point: 'Aesthetic truth is enough for a poet’s purposes though the cognition is untrue.' },

  // — Everyday life
  { id: 'ex27', work: 'busolt', block: 'busolt-s24-016',
    quote: 'Ein Diener steht in einem Palais so hat er von demselben zwar eine sensitiue Deutlichkeit',
    cat: 'life', point: 'Aesthetic distinctness without logical distinctness.' },
  { id: 'ex28', work: 'wiener', block: 'wiener-s04-056',
    quote: 'Bey Verfertigung einer Nadel concurriren mehr denn 4 bis 10 Menschen.',
    cat: 'life', point: 'Division of labour: perfection by ignorance of the other’s trade.' },
  { id: 'ex29', work: 'wiener', block: 'wiener-s04-095',
    quote: 'ein Mensch will über den Fluß gehen, der gefroren ist.',
    cat: 'life', point: 'An error that was unavoidable in the circumstances.' },
  { id: 'ex30', work: 'busolt', block: 'busolt-s14-018',
    quote: 'Wenn ein Mensch in eine Gesellschaft tritt, so fällt ein jeder gleich aus seinen Zügen ein Urtheil',
    cat: 'life', point: 'Provisional judgement: we judge at once on whatever grounds we have.' }
];

const LC_SYLL_TYPES = [
  { key: 'immediate',    label: 'Immediate inference',          desc: 'Verstandesschluss, consequentia immediata: one judgement from another, no middle term.' },
  { key: 'categorical',  label: 'Categorical syllogism',        desc: 'Vernunftschluss by a middle term: the principles, the figures, the rules of the figures.' },
  { key: 'hypothetical', label: 'Hypothetical',                 desc: 'Antecedent and consequent: modus ponens and modus tollens.' },
  { key: 'disjunctive',  label: 'Disjunctive',                  desc: 'A major that divides: from the denial of all members but one to the affirmation of that one.' },
  { key: 'dilemma',      label: 'Dilemma',                      desc: 'Hypothetical major with a disjunctive consequent; the cornutus.' },
  { key: 'abbreviated',  label: 'Enthymeme & ratiocinium cryptic', desc: 'Inferences with a premise left unspoken.' },
  { key: 'ampliative',   label: 'Induction & analogy',          desc: 'From the particular to the general: the crutches of the understanding.' },
  { key: 'chain',        label: 'Polysyllogism & sorites',      desc: 'Syllogisms chained, the conclusion of one the premise of the next.' },
  { key: 'fallacy',      label: 'Fallacies',                    desc: 'Paralogism, sophism, petitio principii, the circle, proofs that prove too much.' }
];

const LC_SYLLOGISMS = [
  // — Immediate inference
  { id: 'sy01', work: 'busolt', block: 'busolt-s26-035', type: 'immediate', sub: 'Verstandesschluss', named: true,
    quote: 'Wird ein Urtheil aus einem andern gefolgert, ohne ein zwischen Urtheil, so ist dies ein Verstandesschluß',
    note: 'Defines the immediate inference by the absence of a middle judgement. Busolt’s own example, “Alle Menschen sind Sterblich, also ist auch Caius sterblich”, is one he calls wrongly drawn: Caius is a new concept and needs a mediating step.' },
  { id: 'sy02', work: 'wiener', block: 'wiener-s12-001', type: 'immediate', sub: 'consequentia immediata', named: true,
    quote: 'consequentia immediata weil der Materie nach eins, nur Form verschieden',
    note: 'The same boundary drawn from the other side: the Wiener Logik also sets “alle Menschen sterblich folglich auch Cajus” beside the inferences of form.' },
  { id: 'sy03', work: 'blomberg', block: 'blomberg-s12-015', type: 'immediate', sub: 'Verstandesschluss', named: true,
    quote: 'es sind ja gar keine Vernunft Schlüße sonderen nur Verstandes Schlüße. Denn sie haben keinen medium Terminum.',
    note: 'Blomberg objects that Meier treats immediate inference among the Vernunftschlüsse.' },
  { id: 'sy04', work: 'busolt', block: 'busolt-s26-041', type: 'immediate', sub: 'per judicia aequipollentia', named: true,
    quote: 'Die erste Art kann wegfallen, sie ist leer',
    note: 'Aequipollence is dropped as empty: it merely restates the same judgement.' },
  { id: 'sy05', work: 'wiener', block: 'wiener-s12-002', type: 'immediate', sub: 'per judicia aequipollentia', named: true,
    quote: 'folglich sind nicht alle Menschen tugendhaft',
    note: '“Einige Menschen sind nicht tugendhaft, folglich sind nicht alle Menschen tugendhaft” — a substitution of equivalent forms.' },
  { id: 'sy06', work: 'wiener', block: 'wiener-s12-002', type: 'immediate', sub: 'per judicia subalternata', named: true,
    quote: 'alle Menschen sind sterblich folglich einige Quantität unterschieden',
    note: 'From the universal to the particular; only the quantity differs.' },
  { id: 'sy07', work: 'busolt', block: 'busolt-s26-042', type: 'immediate', sub: 'contradictory opposition', named: true,
    quote: 'Contradictorisch, hier kann von zwey Urtheilen nur eins wahr seyn',
    note: 'Of two contradictories exactly one is true, so from the truth of one follows the falsity of the other and conversely.' },
  { id: 'sy08', work: 'busolt', block: 'busolt-s26-043', type: 'immediate', sub: 'subcontrary opposition', named: true,
    quote: 'Einige Menschen sind böse, – einige sind nicht böse.' },
  { id: 'sy09', work: 'busolt', block: 'busolt-s26-044', type: 'immediate', sub: 'contrary opposition', named: true,
    quote: 'Judicia contraria opposita können beide falsch seyn',
    note: 'Contraries can both be false, because more is denied than need be.' },
  { id: 'sy10', work: 'wiener', block: 'wiener-s12-003', type: 'immediate', sub: 'subcontrary opposition', named: true,
    quote: 'Subcontrarie opposita einige Menschen sind gelehrt, einige nicht' },
  { id: 'sy11', work: 'wiener', block: 'wiener-s12-003', type: 'immediate', sub: 'contrary opposition', named: true,
    quote: 'contrarie opposita beide allgemein nur Qualität verschieden' },
  { id: 'sy12', work: 'busolt', block: 'busolt-s26-044', type: 'immediate', sub: 'conversion', named: true,
    quote: 'Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion' },
  { id: 'sy13', work: 'wiener', block: 'wiener-s12-004', type: 'immediate', sub: 'conversion', named: true,
    quote: 'alle Menschen sterblich folglich einige Sterbliche Menschen. Quantitat muß verloren gehen' },
  { id: 'sy14', work: 'busolt', block: 'busolt-s26-046', type: 'immediate', sub: 'contraposition', named: true,
    quote: 'Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen.' },
  { id: 'sy15', work: 'wiener', block: 'wiener-s12-005', type: 'immediate', sub: 'contraposition', named: true,
    quote: 'alle M. sind sterblich, nichts was nicht sterblich ist, ist ein Mensch' },

  // — Categorical syllogism: the principles
  { id: 'sy16', work: 'blomberg', block: 'blomberg-s12-002', type: 'categorical', sub: 'definition: nota intermedia', named: true,
    quote: 'oder der Vernunft Schluß ist nichts anders, als die Vergleichung einer nota remota mit der Sache selbst, vermittelst einer Nota intermedia.' },
  { id: 'sy17', work: 'busolt', block: 'busolt-s26-051', type: 'categorical', sub: 'definition: three termini', named: true,
    quote: 'jeder Vernunftschluß besteht überhaupt aus 3 Stücken' },
  { id: 'sy18', work: 'wiener', block: 'wiener-s13-001', type: 'categorical', sub: 'definition: subsumption', named: true,
    quote: 'Vernunftschluß ist die Wahrheit eines Urtheils durch die Subsumtion seiner Bedingung unter ein ander Urtheil' },
  { id: 'sy19', work: 'blomberg', block: 'blomberg-s12-006', type: 'categorical', sub: 'principle of affirmative syllogisms', named: true,
    quote: 'Nota Notae rei est nota rei ipsius' },
  { id: 'sy20', work: 'blomberg', block: 'blomberg-s12-009', type: 'categorical', sub: 'principle of negative syllogisms', named: true,
    quote: 'Repugnans Nota Notae rei, repugnat rei ipsi' },
  { id: 'sy21', work: 'busolt', block: 'busolt-s27-004', type: 'categorical', sub: 'principle of negative syllogisms', named: true,
    quote: 'Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers' },
  { id: 'sy22', work: 'busolt', block: 'busolt-s27-007', type: 'categorical', sub: 'dictum de omni', named: true,
    quote: 'quidquid valet de genere aut specie valet etiam de omnibus indiuiduis' },
  { id: 'sy23', work: 'blomberg', block: 'blomberg-s12-011', type: 'categorical', sub: 'dictum de omni', named: true,
    quote: 'was einem allgemeinen Begrif zu komt, komt auch allen Begrifen zu, die unter ihm enthalten sind' },

  // — Categorical syllogism: figures and moods
  { id: 'sy24', work: 'busolt', block: 'busolt-s27-006', type: 'categorical', sub: 'negative syllogism, first figure', named: false, mood: 'Celarent (EAE-1)',
    quote: 'Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach',
    note: 'The text gives the premises but not the figure; the middle term is subject of the minor and predicate of the major.' },
  { id: 'sy25', work: 'busolt', block: 'busolt-s26-046', type: 'categorical', sub: 'first figure', named: false, mood: 'Barbara (AAA-1, singular minor as universal)',
    quote: 'Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich.' },
  { id: 'sy26', work: 'busolt', block: 'busolt-s28-001', type: 'categorical', sub: 'first figure', named: true,
    quote: 'Figura I. Est notior quam ut egeat explicatione' },
  { id: 'sy27', work: 'busolt', block: 'busolt-s28-002', type: 'categorical', sub: 'second figure', named: true, mood: 'Cesare (EAE-2)',
    quote: 'Kein denkendes Wesen ist zusammengesetzt, alle Körper sind zusammengesezt daher ist kein Körper ein denkendes Wesen.' },
  { id: 'sy28', work: 'busolt', block: 'busolt-s28-003', type: 'categorical', sub: 'third figure', named: true, mood: 'Datisi (AII-3)',
    quote: 'Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen.' },
  { id: 'sy29', work: 'busolt', block: 'busolt-s28-004', type: 'categorical', sub: 'fourth figure', named: true, mood: 'Bamalip (AAI-4)',
    quote: 'Quidquid habet vim agendi est Spiritus omnis spiritus est substantia, ergo omnis substantia habet vim agendi.' },
  { id: 'sy30', work: 'busolt', block: 'busolt-s29-020', type: 'categorical', sub: 'the mnemonic mood names', named: true,
    quote: 'In der ersten Figur Barbara, Celarent, Darii, Ferio.' },
  { id: 'sy31', work: 'busolt', block: 'busolt-s29-017', type: 'categorical', sub: 'counting the moods', named: true,
    quote: 'Aus der Versezzung dieser Vokalen entstehen 64 besondere Formen' },
  { id: 'sy32', work: 'busolt', block: 'busolt-s29-014', type: 'categorical', sub: 'reduction: ratiocinium impurum', named: true,
    quote: 'Ratiocinium impurum seu hybridum' },

  // — Categorical syllogism: rules and their violation
  { id: 'sy33', work: 'busolt', block: 'busolt-s29-001', type: 'categorical', sub: 'four terms (ambiguous term)', named: false,
    quote: 'In dem Ort wo ich bin, ist kein anderer' },
  { id: 'sy34', work: 'busolt', block: 'busolt-s29-003', type: 'categorical', sub: 'ex puris negativis nihil sequitur', named: true,
    quote: 'Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier.' },
  { id: 'sy35', work: 'busolt', block: 'busolt-s29-004', type: 'categorical', sub: 'ex puris particularibus nihil sequitur', named: true,
    quote: 'Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen.' },
  { id: 'sy36', work: 'busolt', block: 'busolt-s29-005', type: 'categorical', sub: 'conclusio sequitur partem debiliorem', named: true,
    quote: 'Conclusio sequi debet partem debiliorem' },

  // — Hypothetical
  { id: 'sy37', work: 'busolt', block: 'busolt-s29-021', type: 'hypothetical', sub: 'modus ponens', named: true,
    quote: 'a veritate antecedentis ad consequentis positionem' },
  { id: 'sy38', work: 'busolt', block: 'busolt-s29-022', type: 'hypothetical', sub: 'modus tollens', named: true,
    quote: 'wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus' },
  { id: 'sy39', work: 'busolt', block: 'busolt-s29-023', type: 'hypothetical', sub: 'modus ponens', named: false,
    quote: 'Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius.' },
  { id: 'sy40', work: 'wiener', block: 'wiener-s11-024', type: 'hypothetical', sub: 'modus ponens and tollens', named: true,
    quote: 'Der modus ponens heißt, wenn das antecedens wahr ist: so ist auch das consequens wahr. Der modus tollens heißt, wenn das consequens falsch ist: so ist auch das antecedens falsch.' },
  { id: 'sy41', work: 'blomberg', block: 'blomberg-s12-012', type: 'hypothetical', sub: 'ratiocinia extraordinaria', named: true,
    quote: 'alle ratiocinia Extraordinaria sind entweder Hypothetica oder Disjunctiva',
    note: 'The hypothetical and the disjunctive are the two extraordinary syllogisms, by whether the relation in the major is connection or conflict.' },

  // — Disjunctive
  { id: 'sy42', work: 'busolt', block: 'busolt-s29-025', type: 'disjunctive', sub: 'denying one member, affirming the other', named: true,
    quote: 'Bey Zweyen Membris schließet man a negatione vnius ad positionem alterius.' },
  { id: 'sy43', work: 'blomberg', block: 'blomberg-s12-013', type: 'disjunctive', sub: 'disjunctive syllogism as division', named: true,
    quote: 'ein disjunctiver Schluß ist eine logische Eintheilung' },

  // — Dilemma
  { id: 'sy44', work: 'busolt', block: 'busolt-s29-026', type: 'dilemma', sub: 'Dilemma', named: true,
    quote: 'Dilemma est id argumentandi genus, in quo maior est hypothetica' },
  { id: 'sy45', work: 'blomberg', block: 'blomberg-s12-014', type: 'dilemma', sub: 'Dilemma', named: true,
    quote: 'Ein Dilemma ist eigentlich ein ratiocinium Hypotheticum, deßen Consequenz disjunctiv ist' },
  { id: 'sy46', work: 'wiener', block: 'wiener-s11-025', type: 'dilemma', sub: 'the best-world disjunction', named: false,
    quote: 'wenn das nicht die beßte Welt ist: so hat Gott keine beßere schaffen können oder wollen',
    note: 'Wiener gives this as a disjunctive judgement; Busolt uses the same sentence as his dilemma.' },

  // — Enthymeme and cryptic syllogism
  { id: 'sy47', work: 'busolt', block: 'busolt-s29-030', type: 'abbreviated', sub: 'enthymema', named: true,
    quote: 'Ein enthymema heißt ein Schluß, wo man eine von den praemissen wegläßt, z.B. Alle Menschen können irren also ich.' },
  { id: 'sy48', work: 'busolt', block: 'busolt-s29-030', type: 'abbreviated', sub: 'ratiocinium crypticum', named: true,
    quote: 'Die Seele weil sie einfach ist, ist unvergänglich' },
  { id: 'sy49', work: 'blomberg', block: 'blomberg-s12-016', type: 'abbreviated', sub: 'ratiocinium crypticum', named: true,
    quote: 'Ratiocinia Cryptica sind solche, wo ich nur 2 Urtheile enuncire, aber das 3 te dabey dencke' },
  { id: 'sy50', work: 'blomberg', block: 'blomberg-s12-017', type: 'abbreviated', sub: 'enthymema', named: true,
    quote: 'Enthymema dies ist ein solcher Schluß, in welchem nur 2 Urtheile, nemlich eine praemissa, und die conclusio gesezet werden' },

  // — Induction and analogy
  { id: 'sy51', work: 'blomberg', block: 'blomberg-s12-017', type: 'ampliative', sub: 'inductio', named: true,
    quote: 'Die Inductio ist der Schluß wo ich das, was vielen unter einem allgemeinen Schluß und Begrif zu komt, für wahr halte, als wenn es allen zu käme.' },
  { id: 'sy52', work: 'blomberg', block: 'blomberg-s12-018', type: 'ampliative', sub: 'analogy', named: true,
    quote: 'Die Analogie, und die Induction sind nur bloß die Krücken für unseren Verstand' },
  { id: 'sy53', work: 'busolt', block: 'busolt-s29-031', type: 'ampliative', sub: 'induction as Verstandesschluss', named: true,
    quote: 'Bey vernunftschlüßen folgern wir aus dem allgemeinen das besondere; bey Verstandesschlüßen aus dem besonderen das allgemeine.',
    note: 'Busolt files induction under the Verstandesschlüsse, where Blomberg calls it a ratiocinatio laxa; the terminology differs although the contrast, general to particular against particular to general, is the same.' },

  // — Polysyllogism
  { id: 'sy54', work: 'blomberg', block: 'blomberg-s12-021', type: 'chain', sub: 'prosyllogism and episyllogism', named: true,
    quote: 'Derjenige Syllogismus nun, deßen Conclusio die Praemisse eines anderen ist, heißt Prosyllogismus.' },
  { id: 'sy55', work: 'busolt', block: 'busolt-s29-035', type: 'chain', sub: 'polysyllogistic', named: true,
    quote: 'Die ars Polysyllogistica ist, wenn wir viele Schlüße miteinander verketten' },

  // — Fallacies
  { id: 'sy56', work: 'busolt', block: 'busolt-s29-034', type: 'fallacy', sub: 'paralogism (ambiguous term)', named: true,
    quote: 'Einen solchen Schluß nennt man einen paralogischen wenn z.E. ein Terminus Zweydeutig ist z.E. Kein Künstler wird geboren.' },
  { id: 'sy57', work: 'busolt', block: 'busolt-s29-034', type: 'fallacy', sub: 'the Liar', named: false,
    quote: 'wenn du sagst du lügest und redest die Wahrheit, so redest du die Wahrheit, wenn du lügest' },
  { id: 'sy58', work: 'wiener', block: 'wiener-s04-091', type: 'fallacy', sub: 'Trugschluss', named: true,
    quote: 'wer da sagt, alle Mohren sind Menschen. Der Respondent ist ein Mensch. Also ist er ein Mohr.',
    note: 'The group reads this as an undistributed middle term; the lecture gives it only as a subtle Trugschluss.' },
  { id: 'sy59', work: 'blomberg', block: 'blomberg-s12-020', type: 'fallacy', sub: 'paralogism and sophism', named: true,
    quote: 'Ein jeder in der Form falscher Schluß ist ein Paralogismus.' },
  { id: 'sy60', work: 'blomberg', block: 'blomberg-s12-024', type: 'fallacy', sub: 'petitio principii', named: true,
    quote: 'Die Würckliche Auslassung eines Satzes, der einen Beweis verdienet, heißt Petitio Principii.' },
  { id: 'sy61', work: 'busolt', block: 'busolt-s29-036', type: 'fallacy', sub: 'proof that proves too much', named: true,
    quote: 'Ein Beweis aber, der zuviel beweiset, ist falsch und beweiset gar nichts.' },
  { id: 'sy62', work: 'blomberg', block: 'blomberg-s12-025', type: 'fallacy', sub: 'circulus in demonstrando', named: true,
    quote: 'Der Circulus in demonstrando ist derjenige Fehler, wenn man den Schlußsatz in einem Beweise zu seinem eigenen Vordersatz annimmt.' },
  { id: 'sy63', work: 'wiener', block: 'wiener-s04-069', type: 'fallacy', sub: 'diallele (circle)', named: true,
    quote: 'Die Alten nannten das dial lele, einen Trugschluß' }
];

const LC_PARALLELS = [
  { id: 'pa01', topic: 'The Vernunftschluss as mediate inference', kind: 'doctrine',
    note: 'All three define the syllogism by the middle term or middle judgement that separates it from a bare judgement.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-002', quote: 'wenn es aber per notam intermediam geschieht, so ist es ein Ratiocinium' },
      { work: 'busolt',   block: 'busolt-s26-035',   quote: 'per iudicium intermedium ein Vernunftschluß' },
      { work: 'wiener',   block: 'wiener-s13-001',   quote: 'Hier ist nota intermedia Cajus sterblich weil Mensch daraus Consequentia mediata' } ] },
  { id: 'pa02', topic: 'Immediate inference is no Vernunftschluss', kind: 'doctrine',
    note: 'Each lecture corrects the textbook’s habit of listing the immediate inferences with the syllogisms.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-015', quote: 'es sind ja gar keine Vernunft Schlüße sonderen nur Verstandes Schlüße' },
      { work: 'busolt',   block: 'busolt-s27-009',   quote: 'die Consequentiae immediatae sind eigentlich keine Vernunftschlüße' },
      { work: 'wiener',   block: 'wiener-s12-001',   quote: 'Auch Verstandesschluß vom ratiocinio zu unterscheiden' } ] },
  { id: 'pa03', topic: 'The dilemma as a hypothetical syllogism with a disjunctive consequent', kind: 'wording',
    note: 'Blomberg and Busolt define it nearly in the same words, and both treat it as a way of refuting rather than proving; Busolt also names the cornutus.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-014', quote: 'Ein Dilemma ist eigentlich ein ratiocinium Hypotheticum, deßen Consequenz disjunctiv ist' },
      { work: 'busolt',   block: 'busolt-s29-026',   quote: 'Dilemma est id argumentandi genus, in quo maior est hypothetica' } ] },
  { id: 'pa04', topic: 'The best-world disjunction', kind: 'example',
    note: 'The same sentence about God and the best world serves Wiener as a disjunctive judgement and Busolt as a dilemma.',
    passages: [
      { work: 'busolt', block: 'busolt-s29-026', quote: 'Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen.' },
      { work: 'wiener', block: 'wiener-s11-025', quote: 'wenn das nicht die beßte Welt ist: so hat Gott keine beßere schaffen können oder wollen' } ] },
  { id: 'pa05', topic: 'Induction and analogy as the understanding’s crutches', kind: 'doctrine',
    note: 'Blomberg’s ratiocinatio laxa is Busolt’s Verstandesschluss from the particular to the general.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-017', quote: 'Dieses aber die ratiocinatio laxa' },
      { work: 'blomberg', block: 'blomberg-s12-018', quote: 'Die Analogie, und die Induction sind nur bloß die Krücken für unseren Verstand' },
      { work: 'busolt',   block: 'busolt-s29-031',   quote: 'bey Verstandesschlüßen aus dem besonderen das allgemeine' } ] },
  { id: 'pa06', topic: 'Enthymeme and the hidden premise', kind: 'doctrine',
    note: 'The syllogism in which one premise is thought but not said.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-016', quote: 'Ratiocinia Cryptica sind solche, wo ich nur 2 Urtheile enuncire, aber das 3 te dabey dencke' },
      { work: 'busolt',   block: 'busolt-s29-030',   quote: 'Wir reden mehrenteils durch Ratiocinia cryptica.' } ] },
  { id: 'pa07', topic: 'Polysyllogism: the conclusion becomes the next premise', kind: 'doctrine',
    note: '',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-021', quote: 'Der Polysyllogisticus heißt ein Ratiocinium alsdann, wenn die Conclusio des einen Vernunft Schlußes die Praemissa des anderen ist.' },
      { work: 'busolt',   block: 'busolt-s29-035',   quote: 'es wird darin die conclusion des vorigen Schlußes die Praemisse des folgenden' } ] },
  { id: 'pa08', topic: 'Proofs that prove too little, or too much', kind: 'wording',
    note: 'Both say that a proof that proves too little may still be true, one that proves too much is false.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-029', quote: 'Ein Beweiß der zu wenig beweißt, kann wahr seyn, allein ein Beweiß, der zu viel beweißt, ist immer falsch.' },
      { work: 'busolt',   block: 'busolt-s29-036',   quote: 'Ein Beweis der zuwenig dartut, ist darum nicht als falsch sondern als Mangelhaft anzusehen' } ] },
  { id: 'pa09', topic: 'Petitio principii', kind: 'wording',
    note: '',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-024', quote: 'Die Würckliche Auslassung eines Satzes, der einen Beweis verdienet, heißt Petitio Principii.' },
      { work: 'busolt',   block: 'busolt-s29-036',   quote: 'Petitio Principii. Petere Principium, heißt ein principium erbitten' } ] },
  { id: 'pa10', topic: 'The sophism of ignoring the question', kind: 'wording',
    note: 'Both give the Latin name, sophisma ignorationis elenchi; Blomberg adds a gloss, Busolt a proverb.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-020', quote: 'Derjenige, der beym Streit die Streitfrage vergißt, begehet ein Sophisma ignorationis elenchi.' },
      { work: 'busolt',   block: 'busolt-s29-034',   quote: 'Sophisma heterogenea, vbi Status quaestionis mutatur, dicitur etiam Sophisma ignorationis elenchi' } ] },
  { id: 'pa11', topic: 'Conversion and contraposition', kind: 'doctrine',
    note: 'The same school examples (all men are mortal) and the same rule that quantity is lost in conversion per accidens.',
    passages: [
      { work: 'busolt', block: 'busolt-s26-044', quote: 'Alle Menschen sind Sterblich einige Sterbliche sind also Menschen, d.i. durch die Conversion' },
      { work: 'wiener', block: 'wiener-s12-004', quote: 'alle Menschen sterblich folglich einige Sterbliche Menschen. Quantitat muß verloren gehen' } ] },
  { id: 'pa12', topic: 'Contradictory opposition and indirect proof', kind: 'doctrine',
    note: 'Wiener adds a warning on apagogic proof in metaphysics that Busolt does not.',
    passages: [
      { work: 'busolt', block: 'busolt-s26-042', quote: 'ich schließe also: ist eins wahr; so ist das andere falsch und umgekehrt' },
      { work: 'wiener', block: 'wiener-s12-002', quote: 'affirmando unum negat alterum und umgekehrt' } ] },
  { id: 'pa13', topic: 'Qualitas occulta: the explanation that explains nothing', kind: 'doctrine',
    note: 'Three illustrations of one point: sympathy for yawning (Blomberg), a plastic force for generation (Busolt), a generative force for animals (Wiener).',
    passages: [
      { work: 'blomberg', block: 'blomberg-s06-012', quote: 'es ist dieses also eine Qualitas occulta' },
      { work: 'busolt',   block: 'busolt-s26-033',   quote: 'quae nam est causa propagationis animalium, plantarumque? resp.: vis plastica' },
      { work: 'wiener',   block: 'wiener-s11-032',   quote: 'Qualitates occultae z.B. woher Zeugungskraft der Thiere?' } ] },
  { id: 'pa14', topic: 'Mathematical definition is synthetic', kind: 'doctrine',
    note: 'The mathematician makes his concept and need not ask what others mean by it; if he treats it as given, he philosophizes.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s10-064', quote: 'Daß alle mathematischen Definitiones Definitiones willkührlicher Begrife sind' },
      { work: 'busolt',   block: 'busolt-s20-006',   quote: 'Nach der Synthesis kann ich sagen ich will z.E. daß ein Tetraeder ein Körper sey' },
      { work: 'wiener',   block: 'wiener-s09-005',   quote: 'Die ganze Mathematic definirt per synthesin, sie definirt nicht gegebene, sondern gemachte Begriffe.' } ] },
  { id: 'pa15', topic: 'Tautology in a definition', kind: 'doctrine',
    note: 'Busolt and Wiener use nearly the same example, God as an infinite and almighty being.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s10-042', quote: 'alle Tavtologie in denen Definitionen also ist ein Mangel der Deutlichkeit' },
      { work: 'busolt',   block: 'busolt-s21-002',   quote: 'Gott ist ein Unendliches, Ewiges, Allwißendes Wesen.' },
      { work: 'wiener',   block: 'wiener-s04-118',   quote: 'Gott ist ein Wesen, das allmächtig, unendlich etc. ist. Hier liegt schon im Unendlichen die Allmacht.' } ] },
  { id: 'pa16', topic: 'Essentialia, attributa and extra-essential marks', kind: 'doctrine',
    note: 'The triangle recurs in Blomberg and Busolt; learning (Gelehrsamkeit) is the stock inessential mark in Blomberg and Wiener.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s07-086', quote: 'bey dem Triangel sind die 3 Winkel eben so nöthig, und unentbehrlich, als die 3 Seiten' },
      { work: 'blomberg', block: 'blomberg-s07-064', quote: 'z.E. die Gelahrtsamkeit bey einem Menschen' },
      { work: 'busolt',   block: 'busolt-s12-006',   quote: 'Die drey Seiten des Triangels sind essentialien, sie gehören zum Wesen; die Winkel sind attributen.' },
      { work: 'wiener',   block: 'wiener-s04-103',   quote: 'die Gelehrsamkeit ist extraeßentiel' } ] },
  { id: 'pa17', topic: 'The horizon of knowledge', kind: 'doctrine',
    note: 'Blomberg defines the horizon as the circle in which we can see things; Busolt and Wiener advise on how wide to draw it.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s04-009', quote: 'Derjenige Circul, in dem wir die Dinge sehen können, heißt unser Horizont.' },
      { work: 'busolt',   block: 'busolt-s08-010',   quote: 'Man bestimme den Horizont von Anfang nicht zu weit' },
      { work: 'wiener',   block: 'wiener-s04-047',   quote: 'Das ist ausser meinem Horizont.' } ] },
  { id: 'pa18', topic: 'The aesthetic admixture in a judgement', kind: 'example',
    note: 'An exclamation (“O!”) is the standard sign that a judgement is aesthetic rather than logical.',
    passages: [
      { work: 'busolt', block: 'busolt-s26-004', quote: 'O! Wie viele Menschen sind Gottlos! Dies ist ein Aesthetisches Urtheil.' },
      { work: 'wiener', block: 'wiener-s11-027', quote: 'wenn ich ein O oder Ach! hinzu setze: so sind diese Zusätze etwas ästhetisches im Urtheile' } ] },
  { id: 'pa19', topic: 'The inhabitants of the moon', kind: 'example',
    note: 'The stock case of a judgement that outruns its grounds: probable, problematic, a matter of opinion or an unavoidable error. It recurs repeatedly in Blomberg and in Busolt; the passages below are a selection.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s03-017', quote: 'wenn wir sagen: daß der Mond Einwohner habe, weil in demselben Berge und Thäler befindlich sind, so ist dieses ein unzureichender Grund' },
      { work: 'blomberg', block: 'blomberg-s08-048', quote: 'Ich kann niemals sagen: ich weiß, daß im Monde Einwohner sind' },
      { work: 'busolt',   block: 'busolt-s14-010',   quote: 'Ob der Mond Einwohner habe' },
      { work: 'busolt',   block: 'busolt-s24-012',   quote: 'Wenn ich sage der Mond könnte wohl Einwohner haben, so ist das Problematisch' },
      { work: 'busolt',   block: 'busolt-s11-022',   quote: 'ob im Mond Einwohner sind, kann ein unvermeidlicher Irrthum seyn' } ] },
  { id: 'pa20', topic: 'Canon and Organon', kind: 'doctrine',
    note: 'Each asks whether logic is a Kanon or an Organon and denies the second: logic judges form but does not extend knowledge.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s01-061', quote: 'sie wäre eine Theorie aber kein Organon' },
      { work: 'busolt',   block: 'busolt-s02-010',   quote: 'Soll sie ein Organon seyn, so müßte sie uns eine Anweisung geben' },
      { work: 'wiener',   block: 'wiener-s02-014',   quote: 'Organon heißt eine Wissenschaft, die unsre Kenntniße erweitert.' } ] },
  { id: 'pa21', topic: 'Aristotle as the first logician', kind: 'wording',
    note: 'The phrase “father of logic” appears in Busolt and Wiener; Blomberg says he was the first to teach it, and that he invented the four figures.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s02-076', quote: 'Aristoteles der erste, der sie vorgetragen, und auch die 4 Syllogistischen Figuren erfunden hat' },
      { work: 'busolt',   block: 'busolt-s03-001',   quote: 'Aristoteles war der erste Logiker, er ist der Vater der Logic' },
      { work: 'wiener',   block: 'wiener-s03-001',   quote: 'Aristoteles kann als der Vater der Logik angesehen werden.' } ] },
  { id: 'pa22', topic: 'The hypothesis: from sufficiency of the ground to its truth', kind: 'wording',
    note: 'Blomberg and Busolt define it by the same inference, from the sufficiency of a ground for its consequences to its truth.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s08-539', quote: 'Eine Meynung von der Wahrheit eines Grundes aus der Zulänglichkeit desselben zur Folge ist eine Hypothese.' },
      { work: 'busolt',   block: 'busolt-s15-001',   quote: 'da ich aus der Zulänglichkeit derselben auf ihre wahre Folgen schließe' } ] },
  { id: 'pa23', topic: 'Avoidable and unavoidable error', kind: 'doctrine',
    note: 'The ice-crossing in Wiener and the judge in Blomberg are both cases where the judgement could not be withheld; Busolt names the error invincibilis.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s06-241', quote: 'Der Irrthum ist entweder vermeidlich oder unvermeidlich.' },
      { work: 'busolt',   block: 'busolt-s11-022',   quote: 'Unvermeidlichen Irrthum (error invincibilis)' },
      { work: 'wiener',   block: 'wiener-s04-095',   quote: 'daß einer in einen Irthum geräth der in dieser Relation unvermeidlich war' } ] },
  { id: 'pa24', topic: 'Negative marks, especially in theology', kind: 'doctrine',
    note: 'Where positive marks are lacking, as in rational theology, negative marks guard against error.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s07-042', quote: 'in keiner Wißenschaft mehrere Menge von verneinenden Merckmahlen, als in der vernünftigen Gottes-Gelahrtheit' },
      { work: 'busolt',   block: 'busolt-s12-003',   quote: 'Es giebt Wißenschaften wo die negatiuen Merkmahle den großten Theil ausmachen z.E. die Natürliche Theologie.' } ] },
  { id: 'pa25', topic: 'Dictum de omni et nullo', kind: 'doctrine',
    note: 'Blomberg ranks the two nota-notae rules before the dictum; Busolt identifies those two rules with what the ancients called the dictum.',
    passages: [
      { work: 'blomberg', block: 'blomberg-s12-010', quote: 'Allein diese angeführte Grund-Regeln gehen noch selbst vor diesem voraus.' },
      { work: 'busolt',   block: 'busolt-s27-006',   quote: 'Die Beiden angeführten Regeln sind eben dies, was den alten dictum de omni et nullo war.' } ] }
];
