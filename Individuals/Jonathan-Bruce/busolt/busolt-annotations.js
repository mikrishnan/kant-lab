/* ─────────────────────────────────────────────────────────────────────────────
   Hand-made annotations on the Logik Busolt (AA 24:603–686). NOT part of the
   transcription: these are one reader's categorisations, kept apart from it.

   Fidelity rule: every categorisation says who made it.
     x: [...]   the dimensions (judgments) or the type (inferences) that Busolt
                himself names for that very example. These are attested.
     anything else is my classification, shown as such in the app.
   Each `q` is a verbatim stretch of one block's text (the app and
   a check script confirm it), and `b` is that block's id.

   The categories themselves are Busolt's own: the four titles and twelve
   modes of judgment are listed at s24-001..006, and the inference types at
   s26-035..055, s27, s28 and s29.
   ───────────────────────────────────────────────────────────────────────── */

const JUDGMENT_DIMS = [
  {id:'quant', label:'Quantität', vals:['allgemein','besonders','einzeln'],
   gloss:'universale, particulare, singulare (s24-006, s25-008..011)'},
  {id:'qual', label:'Qualität', vals:['bejahend','verneinend','unendlich'],
   gloss:'affirmativum, negativum, infinitum (s24-006, s25-005..008)'},
  {id:'rel', label:'Relation', vals:['kategorisch','hypothetisch','disjunktiv'],
   gloss:'Subiect–Praedicat, Grund–Folge, Glieder der Eintheilung (s24-007..010)'},
  {id:'mod', label:'Modalität', vals:['problematisch','assertorisch','apodiktisch'],
   gloss:'möglich, mit Bewußtsein der Wahrheit, nothwendig (s24-011..012)'},
  {id:'other', label:'Other distinctions Busolt draws',
   vals:['bedingt','modal (Copula)','zusammengesetzt','exponibel','ästhetisch','theoretisch','formal praktisch','materiell praktisch','tautologisch / leer'],
   gloss:'s25-012, s25-014, s26-004, s26-005, s26-010..011'}
];

const JUDGMENT_EXAMPLES = [
  {id:'j01', b:'busolt-s24-006', q:'Alle Menschen sind Sterblich', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch', mod:'assertorisch'}, x:['quant','qual','rel','mod'], note:'Busolt’s own worked example of all four titles.'},
  {id:'j02', b:'busolt-s24-010', q:'Alle Menschen sind entweder tugendhafte oder Lasterhafte', t:{quant:'allgemein', qual:'bejahend', rel:'disjunktiv', mod:'assertorisch'}, x:['rel'], note:'His example of the relation of the members to each other.'},
  {id:'j03', b:'busolt-s24-012', q:'der Mond könnte wohl Einwohner haben', t:{quant:'einzeln', qual:'bejahend', rel:'kategorisch', mod:'problematisch'}, x:['mod'], note:'A touchstone: held as possible, not asserted.'},
  {id:'j04', b:'busolt-s24-012', q:'sage ich er hat Einwohner', t:{quant:'einzeln', qual:'bejahend', rel:'kategorisch', mod:'assertorisch'}, x:['mod']},
  {id:'j05', b:'busolt-s24-012', q:'er muß Einwohner haben', t:{quant:'einzeln', qual:'bejahend', rel:'kategorisch', mod:'apodiktisch'}, x:['mod']},
  {id:'j06', b:'busolt-s24-012', q:'Menschen sind lebende Geschöpfe', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch'}, x:[], note:'Used to contrast concepts (“lebend”, “Geschöpfe”) with a judgment.'},
  {id:'j07', b:'busolt-s25-012', q:'Alle Winkel in einem Triangel machen zusammen 180 Grad aus', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch', other:'bedingt'}, x:['other'], note:'Holds only of rectilinear triangles: the subject must be restricted.'},
  {id:'j08', b:'busolt-s25-012', q:'alle Körper sind schwer', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch', other:'bedingt'}, x:['other'], note:'Heavy only in relation to another body.'},
  {id:'j09', b:'busolt-s25-012', q:'Alle Körper sind zufälliger Weise schwer', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch', other:'modal (Copula)'}, x:['other'], note:'The condition set at the copula rather than the subject.'},
  {id:'j10', b:'busolt-s25-014', q:'Gott, die Seele und alle endliche', t:{rel:'kategorisch', other:'zusammengesetzt'}, x:['other'], note:'Continues in the next block: “Geister sind Unsterblich”. A compound judgment with several subjects.'},
  {id:'j11', b:'busolt-s26-004', q:'Wenige Menschen sind Fromm', t:{quant:'besonders', other:'exponibel'}, x:['other'], note:'Affirms and denies at once: some are pious, some are not.'},
  {id:'j12', b:'busolt-s26-004', q:'O! Wie viele Menschen sind Gottlos!', t:{other:'ästhetisch'}, x:['other'], note:'Concepts plus a feeling.'},
  {id:'j13', b:'busolt-s26-004', q:'Ein Triangel besteht aus drei geraden Linien', t:{qual:'bejahend', rel:'kategorisch', other:'theoretisch'}, x:['other']},
  {id:'j14', b:'busolt-s26-004', q:'Aus drei gegebenen geraden Linien einen Triangel zu beschreiben', t:{other:'formal praktisch'}, x:['other'], note:'Practical in form: a relation of freedom, not of cognitions.'},
  {id:'j15', b:'busolt-s26-005', q:'Es ist ein einziger Weltrichter', t:{quant:'einzeln', qual:'bejahend', rel:'kategorisch', other:'materiell praktisch'}, x:['other'], note:'Theoretical in form, practical in matter.'},
  {id:'j16', b:'busolt-s26-010', q:'Der Mensch hat ein Menschliches Wesen', t:{other:'tautologisch / leer'}, x:['other'], note:'Empty in form of the understanding: idem per idem.'},
  {id:'j17', b:'busolt-s26-011', q:'die Seele ist nicht zusammengesezt', t:{quant:'einzeln', qual:'verneinend', rel:'kategorisch'}, x:['qual'], note:'Given as an example of a negative proposition.'},
  {id:'j18', b:'busolt-s26-042', q:'einige sind nicht sterblich', t:{quant:'besonders', qual:'verneinend', rel:'kategorisch'}, x:['quant','qual'], note:'The contradictory of “Alle Menschen sind Sterblich”.'},
  {id:'j19', b:'busolt-s26-042', q:'Keine Substanz ist einfach', t:{quant:'allgemein', qual:'verneinend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j20', b:'busolt-s26-042', q:'einige sind einfach', t:{quant:'besonders', qual:'bejahend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j21', b:'busolt-s26-043', q:'Einige Menschen sind böse', t:{quant:'besonders', qual:'bejahend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j22', b:'busolt-s26-043', q:'einige sind nicht böse', t:{quant:'besonders', qual:'verneinend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j23', b:'busolt-s26-044', q:'Alle Menschen sind Lasterhafte', t:{quant:'allgemein', qual:'bejahend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j24', b:'busolt-s26-044', q:'Kein Mensch ist Lasterhaft', t:{quant:'allgemein', qual:'verneinend', rel:'kategorisch'}, x:['quant','qual']},
  {id:'j25', b:'busolt-s29-022', q:'wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung', t:{qual:'bejahend', rel:'hypothetisch'}, x:[], note:'The major of a hypothetical inference (modus tollens).'},
  {id:'j26', b:'busolt-s29-023', q:'Sind die Körper theilbar, so sind sie veränderlich', t:{qual:'bejahend', rel:'hypothetisch'}, x:[], note:'The major of a hypothetical inference.'},
  {id:'j27', b:'busolt-s29-026', q:'Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen', t:{rel:'hypothetisch'}, x:[], note:'Hypothetical, with a disjunctive consequent: Busolt’s dilemma.'}
];

const INFERENCE_GROUPS = [
  {id:'imm', label:'Immediate inferences (consequentiae immediatae)', cats:[
    {id:'imm-contradictory', label:'Opposition: contradictory', desc:'Of two, only one is true; A against O, E against I (s26-042).'},
    {id:'imm-subcontrary', label:'Opposition: subcontrary', desc:'Particular affirmative against particular negative (s26-043).'},
    {id:'imm-contrary', label:'Opposition: contrary', desc:'Universal affirmative against universal negative; both may be false (s26-044).'},
    {id:'imm-conv', label:'Conversion', desc:'Quantity changes, quality does not; per accidens or simpliciter (s26-044, s26-046).'},
    {id:'imm-contrapos', label:'Contraposition', desc:'Quality changes, quantity does not (s26-044, s26-046).'},
    {id:'imm-invalid', label:'Not an immediate inference', desc:'A new concept enters, so a middle judgment is needed (s26-035).'}
  ]},
  {id:'cat', label:'Categorical syllogisms (Vernunftschlüsse)', cats:[
    {id:'cat-nota', label:'Nota notae', desc:'A mark of a mark is a mark of the thing (s27-003).'},
    {id:'cat-repugnans', label:'Repugnans notae', desc:'What conflicts with a mark conflicts with the thing (s27-004, s27-006).'},
    {id:'cat-fig1', label:'Figure I', desc:'The one natural and pure figure, Busolt says (s28-001, s29-010).'},
    {id:'cat-fig2', label:'Figure II', desc:'Middle term the predicate in both premises (s28-002).'},
    {id:'cat-fig3', label:'Figure III', desc:'Middle term the subject in both premises (s28-003).'},
    {id:'cat-fig4', label:'Figure IV', desc:'Middle term predicate in the major, subject in the minor (s28-004).'},
    {id:'cat-impure', label:'Reduction / impure ratiocinium', desc:'Figures II–IV brought to I by an immediate inference (s29-013..015).'}
  ]},
  {id:'hyp', label:'Hypothetical and disjunctive', cats:[
    {id:'hyp-ponens', label:'Modus ponens', desc:'From the ground to the consequent (s29-021).'},
    {id:'hyp-tollens', label:'Modus tollens', desc:'From denial of the consequent to denial of the antecedent (s29-022).'},
    {id:'dis', label:'Disjunctive syllogism', desc:'Deny all members but one, or posit one and deny the rest (s29-024..025). No example sentence in the text.'},
    {id:'dilemma', label:'Dilemma', desc:'A hypothetical major, negative conclusion (s29-026).'}
  ]},
  {id:'emp', label:'Induction and analogy', cats:[
    {id:'induction', label:'Induction', desc:'From the particular to the universal; not apodictic (s29-031).'},
    {id:'analogy', label:'Analogy', desc:'Agreement in known respects, concluded in unknown ones (s29-031).'}
  ]},
  {id:'short', label:'Abbreviated inferences', cats:[
    {id:'enthymeme', label:'Enthymeme / cryptic', desc:'A premise left out, or the form hidden (s29-030).'}
  ]},
  {id:'fal', label:'Faults and fallacies', cats:[
    {id:'fal-quaternio', label:'More than three terms', desc:'A double-meaning term runs through the whole inference (s29-001).'},
    {id:'fal-neg', label:'Ex puris negativis', desc:'Nothing follows from two negative premises (s29-003).'},
    {id:'fal-part', label:'Ex puris particularibus', desc:'Nothing follows from two particular premises (s29-004).'},
    {id:'fal-sophism', label:'Sophisma / paralogism', desc:'An inference with only the appearance of truth (s29-031..034).'}
  ]}
];

const INFERENCE_EXAMPLES = [
  {id:'i01', b:'busolt-s26-035', q:'Alle Menschen sind Sterblich, also ist auch Caius sterblich', cat:'imm-invalid', x:true, note:'Busolt: this is falsely inferred immediately; “Caius” is a concept not in the premise.'},
  {id:'i02', b:'busolt-s26-046', q:'Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich', cat:'cat-fig1', x:false, note:'Busolt gives it as the mediate inference; the figure is my classification (the major is universal, the minor affirmative).'},
  {id:'i03', b:'busolt-s26-042', q:'Alle Menschen sind Sterblich, einige sind nicht sterblich', cat:'imm-contradictory', x:true},
  {id:'i04', b:'busolt-s26-043', q:'Einige Menschen sind böse', cat:'imm-subcontrary', x:true, note:'Paired with “einige sind nicht böse”.'},
  {id:'i05', b:'busolt-s26-044', q:'Alle Menschen sind Lasterhafte. Ueber einen solchen Saz kann der andere so entsezt werden, daß er sagt: Kein Mensch ist Lasterhaft', cat:'imm-contrary', x:true, note:'Both may be false: the falsity lies in the universality.'},
  {id:'i06', b:'busolt-s26-044', q:'Alle Menschen sind Sterblich einige Sterbliche sind also Menschen', cat:'imm-conv', x:true, note:'Per accidens: universal becomes particular.'},
  {id:'i07', b:'busolt-s26-044', q:'Was nicht sterblich ist, ist kein Mensch', cat:'imm-contrapos', x:true},
  {id:'i08', b:'busolt-s26-046', q:'kein Triangel ist ohne Winkel keine Figur ohne Winkel ist ein Triangel', cat:'imm-conv', x:true, note:'Simpliciter: a negative universal converts without change of quantity.'},
  {id:'i09', b:'busolt-s26-046', q:'Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen', cat:'imm-contrapos', x:true},
  {id:'i10', b:'busolt-s27-004', q:'Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers', cat:'cat-nota', x:false, note:'Busolt sets this after the rule for negative inferences, but the example is affirmative and runs on marks (Merkmahle): nota notae is my classification.'},
  {id:'i11', b:'busolt-s27-006', q:'Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach', cat:'cat-repugnans', x:true},
  {id:'i12', b:'busolt-s28-002', q:'Kein denkendes Wesen ist zusammengesetzt, alle Körper sind zusammengesezt daher ist kein Körper ein denkendes Wesen', cat:'cat-fig2', x:true},
  {id:'i13', b:'busolt-s28-003', q:'Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen', cat:'cat-fig3', x:true},
  {id:'i14', b:'busolt-s28-004', q:'Quidquid habet vim agendi est Spiritus omnis spiritus est substantia, ergo omnis substantia habet vim agendi', cat:'cat-fig4', x:true},
  {id:'i15', b:'busolt-s29-001', q:'In dem Ort wo ich bin, ist kein anderer, die Stube das ist der Ort wo ich bin, also ist in der Stube kein anderer', cat:'fal-quaternio', x:true, note:'Busolt’s “doppelt Sinnig”.'},
  {id:'i16', b:'busolt-s29-003', q:'Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier', cat:'fal-neg', x:true},
  {id:'i17', b:'busolt-s29-004', q:'Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen', cat:'fal-part', x:true},
  {id:'i18', b:'busolt-s29-014', q:'kein denkendes Wesen ist zusammengesezt alle Körper sind zusammengesezt also ist kein Körper eine denkende Substanz', cat:'cat-impure', x:true, note:'Figure II, reduced to I by converting the major.'},
  {id:'i19', b:'busolt-s29-015', q:'Alle Menschen sind unvollkommen einige tugendhafte sind Menschen, also sind einige tugendhafte unvollkommen', cat:'cat-impure', x:true, note:'Figure III, reduced to I by converting the minor.'},
  {id:'i20', b:'busolt-s29-022', q:'wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus', cat:'hyp-tollens', x:true},
  {id:'i21', b:'busolt-s29-023', q:'Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius', cat:'hyp-ponens', x:false, note:'Busolt does not label it; modus ponens is my classification.'},
  {id:'i22', b:'busolt-s29-026', q:'Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen', cat:'dilemma', x:true},
  {id:'i23', b:'busolt-s29-030', q:'Alle Menschen können irren also ich', cat:'enthymeme', x:true},
  {id:'i24', b:'busolt-s29-030', q:'Die Seele weil sie einfach ist, ist unvergänglich', cat:'enthymeme', x:true, note:'Busolt’s ratiocinium cryptic: the form is hidden.'},
  {id:'i25', b:'busolt-s29-031', q:'Was so vielen indiuiduen zukommt, die nur je gewesen, das kommt allen andern dieser Art zu', cat:'induction', x:true},
  {id:'i26', b:'busolt-s29-031', q:'So schließen wir die circulation des Bluts bey thieren aus der sonstigen Aehnlichkeit des Menschlichen und thierischen Körpers', cat:'analogy', x:true},
  {id:'i27', b:'busolt-s29-034', q:'Kein Künstler wird geboren', cat:'fal-sophism', x:true, note:'A paralogism: the term is ambiguous.'},
  {id:'i28', b:'busolt-s29-034', q:'wenn du sagst du lügest und redest die Wahrheit, so redest du die Wahrheit, wenn du lügest', cat:'fal-sophism', x:true, note:'The Liar.'},
  {id:'i29', b:'busolt-s29-034', q:'Alles einfache ist Unsterblich, Gott und alle Geister sind einfach', cat:'fal-sophism', x:true, note:'A copulative sophism: two syllogisms joined.'}
];

/* Sections of the other two transcripts that treat the same topic, by Busolt section.
   Matched on exact section title; a mismatch is reported in the console.
   Hand-made, and an editorial judgment about topic only. */
const BLOMBERG_TITLES = {
  intro:'Einleitung in die Vernunft-Lehre nach denen Gedancken des Herrn Profeß: Kant:',
  intro2:'Einleitung in die Vernunft-Lehre nach dem Autore',
  horizon:'Der andere Abschnitt. Von der Weitläufigkeit der gelährten Erkenntniß',
  size:'Der Dritte Abschnitt. Von der Größe der Gelahrten Erkenntniß',
  truth:'Der Vierte Abschnitt. Von der Wahrheit der Gelahrten Erkenntniß',
  clarity:'Der fünfte Abschnitt. Von Der Klahrheit der Gelahrten Erkenntniß',
  certainty:'Der Sechste Abschnitt. Von der Gewißheit der Gelehrten Erkenntniß',
  practical:'Der Siebente Abschnitt von der practischen gelahrten Erkenntniß',
  concepts:'Der Achte Abschnitt. Von den Gelahrten Begriffen',
  judgments:'Der 9 te Abschnitt. Von den gelährten Urtheilen',
  inferences:'Der 10 te Abschnitt. Von den gelahrten Vernunft Schlüßen'
};
const PARALLEL_SECTIONS = {
  s02:[['blomberg',BLOMBERG_TITLES.intro],['wiener','Prolegomena']],
  s03:[['wiener','Geschichte der Logik']],
  s04:[['wiener','Tractatio Logices'],['blomberg',BLOMBERG_TITLES.intro2]],
  s05:[['wiener','Tractatio Logices'],['blomberg',BLOMBERG_TITLES.intro2]],
  s08:[['blomberg',BLOMBERG_TITLES.horizon]],
  s11:[['blomberg',BLOMBERG_TITLES.truth]],
  s12:[['blomberg',BLOMBERG_TITLES.clarity]],
  s13:[['blomberg',BLOMBERG_TITLES.size]],
  s14:[['blomberg',BLOMBERG_TITLES.certainty],['wiener','Vom Beyfall und Zurückhalten des Beyfalls']],
  s15:[['blomberg',BLOMBERG_TITLES.certainty],['wiener','Von der wahrscheinlichen Erkenntniß']],
  s16:[['blomberg',BLOMBERG_TITLES.certainty],['wiener','Von der wahrscheinlichen Erkenntniß']],
  s17:[['blomberg',BLOMBERG_TITLES.certainty]],
  s18:[['blomberg',BLOMBERG_TITLES.practical]],
  s19:[['blomberg',BLOMBERG_TITLES.concepts],['wiener','Von den Begriffen']],
  s20:[['wiener','Eintheilung aller definitionen']],
  s21:[['wiener','Eintheilung aller definitionen']],
  s22:[['wiener','Von der logischen Eintheilung']],
  s23:[['blomberg',BLOMBERG_TITLES.judgments],['wiener','Von den Urtheilen']],
  s24:[['blomberg',BLOMBERG_TITLES.judgments],['wiener','Von den Urtheilen']],
  s25:[['blomberg',BLOMBERG_TITLES.judgments],['wiener','Von den Urtheilen']],
  s26:[['blomberg',BLOMBERG_TITLES.judgments],['wiener','Von den Urtheilen'],['wiener','Von den Verstandes-Schlüssen']],
  s27:[['blomberg',BLOMBERG_TITLES.inferences],['wiener','Von den Vernunft-Schlüssen']],
  s28:[['blomberg',BLOMBERG_TITLES.inferences],['wiener','Von den Vernunft-Schlüssen']],
  s29:[['blomberg',BLOMBERG_TITLES.inferences],['wiener','Von den Vernunft-Schlüssen']]
};
