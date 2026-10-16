/* ─────────────────────────────────────────────────────────────────────────────
   Content for the Table of Judgments learning tool. Hand-written; edit freely.

   SHAPES (stable ids, so other tools can link in by id)
     S(w, id, q)     a source: transcript `w` ('busolt' | 'blomberg' | 'wiener'),
                     block id, and a verbatim quote `q` from that block. The app
                     looks the block up and shows its AA page; a check page
                     confirms every quote is really there.
     L(...)          a light: a cell (or a title's header) that an item makes glow.
       L(cell, tag, why, opts)      cell = 'quant-allgemein' etc.
       LT(title, tag, why)          lights a title's column header only
       opts.bar = true              the cell is *forbidden* in that role
       opts.by  = 'source'|'mine'   who made this mapping (default 'mine')

   ATTESTED vs MINE. Anything a transcript states is given as S(...) with its
   quote. Anything else (English glosses, constructed examples, which cell an
   item lights) is mine and labelled so in the app.

   INTEGRATION. The app reads and writes its state in the URL hash and exposes
   window.JudgmentTable; see index.html. Ids below are the keys it uses:
     cells   quant-allgemein … mod-apodiktisch
     items   cat:kant:…  cat:arist:…  cat:busolt:…  syl:…  pri:…
   ───────────────────────────────────────────────────────────────────────── */

const S  = (w, id, q) => ({w, id, q});
const L  = (c, tag, why, o) => Object.assign({c, tag, why, by:'mine'}, o || {});
const LT = (t, tag, why) => ({t, tag, why, by:'mine'});

/* ═══ THE TABLE ═════════════════════════════════════════════════════════════ */
const JT_TITLES = [
  {id:'quant', de:'Quantität', la:'quantitas', en:'Quantity', ask:'Quanta est propositio?',
   askSrc:S('busolt','busolt-s25-013','Die Quantitaet durch Quanta est propositio.'),
   moments:[
    {id:'allgemein', de:'allgemein', la:'universale', en:'universal', letters:'A, E',
     gloss:'The predicate is said of the whole sphere of the subject.',
     def:S('busolt','busolt-s25-009','Judicium universale ubi praedicatum de tota Sphaera praedicatur.')},
    {id:'besonders', de:'besonders', la:'particulare', en:'particular', letters:'I, O',
     gloss:'The predicate is said of only a part of the subject’s sphere.',
     def:S('busolt','busolt-s25-010','Judicium particulare vbi praedicatum de parte Sphaerae praedicatur.')},
    {id:'einzeln', de:'einzeln', la:'singulare', en:'singular', letters:'(counted as A, E)',
     gloss:'The subject has no sphere (it is one individual), so the predicate holds of all of it.',
     def:S('busolt','busolt-s25-011','Judicium singulare ubi Subiectum caret Sphaera ideoque praedicatum de toto subiecto praedicatur.')}
   ]},
  {id:'qual', de:'Qualität', la:'qualitas', en:'Quality', ask:'Qualis est propositio?',
   askSrc:S('busolt','busolt-s25-013','Die Qualitaet durch Qualis est propositio?'),
   moments:[
    {id:'bejahend', de:'bejahend', la:'affirmativum', en:'affirmative', letters:'A, I',
     gloss:'The copula joins subject and predicate.',
     def:S('busolt','busolt-s25-006','Judicium affirmatiuum, wenn die Copula est die Verbindung des Subiects und Praedicats ausdruckt.')},
    {id:'verneinend', de:'verneinend', la:'negativum', en:'negative', letters:'E, O',
     gloss:'The copula denies the connection; the negation belongs to the copula, not the predicate.',
     def:S('busolt','busolt-s25-007','Judicium negatiuum, wenn die Copula non est die opposition des Subiects und Praedicats')},
    {id:'unendlich', de:'unendlich', la:'infinitum', en:'infinite', letters:'',
     gloss:'The predicate itself is negated (“is non-mortal”), while the copula still affirms.',
     def:S('busolt','busolt-s25-008','Judicium infinitum wenn das Praedicat verneinet wird')}
   ]},
  {id:'rel', de:'Relation', la:'relatio', en:'Relation', ask:'Quae propositio?',
   askSrc:S('wiener','wiener-s11-017','quae propositio bezieht sich auf die Relation'),
   askNote:'Busolt (AA 24:665) ties “Quae propositio?” to modality; Wiener (AA 24:932) ties it to relation. The transcripts differ here.',
   moments:[
    {id:'kategorisch', de:'kategorisch', la:'categoricum', en:'categorical', letters:'',
     gloss:'The relation of a subject to a predicate.',
     def:S('busolt','busolt-s24-008','Das Subiect zum Praedicat, d.i. Kategorisch;')},
    {id:'hypothetisch', de:'hypothetisch', la:'hypotheticum', en:'hypothetical', letters:'',
     gloss:'The relation of a ground to its consequence, between two judgments.',
     def:S('busolt','busolt-s24-009','Der Grund zur Folge, d.i. Hypothetisch')},
    {id:'disjunktiv', de:'disjunktiv', la:'disjunctivum', en:'disjunctive', letters:'',
     gloss:'The relation of the members of a division to each other and to the divided concept.',
     def:S('busolt','busolt-s24-010','Das Verhältniß der Glieder untereinander, und zum eingetheilten Begriff, d.i. disjunctivisch')}
   ]},
  {id:'mod', de:'Modalität', la:'modalitas', en:'Modality', ask:'Quae propositio?',
   askSrc:S('busolt','busolt-s25-013','Die Modalitaet drükken die Logicer aus durch die Frage Quae propositio?'),
   askNote:'Busolt (AA 24:665) ties “Quae propositio?” to modality; Wiener (AA 24:932) ties it to relation. The transcripts differ here.',
   moments:[
    {id:'problematisch', de:'problematisch', la:'problematicum', en:'problematic', letters:'',
     gloss:'Held as possible, taken as a touchstone for what might follow.',
     def:S('busolt','busolt-s24-012','Halte ich ein Urtheil für möglich, nehme ichs blos als einen Probierstein an, was wohl daraus folgen möchte so ist dies ein Problematisches Urtheil.')},
    {id:'assertorisch', de:'assertorisch', la:'assertoricum', en:'assertoric', letters:'',
     gloss:'Asserted with consciousness of its truth.',
     def:S('busolt','busolt-s24-012','Ein Urtheil mit Bewußtseyn der Wahrheit ist Aßertorisch.')},
    {id:'apodiktisch', de:'apodiktisch', la:'apodicticum', en:'apodictic', letters:'',
     gloss:'Necessarily true.',
     def:S('busolt','busolt-s24-012','Ein Urtheil welches nothwendig Wahr ist, ist apodictisch.')}
   ]}
];
const JT_TITLE_SRC = S('busolt','busolt-s24-001','Alle Urtheilen werden unter vier Titul gebracht, und eingetheilt nach vier Functionen');

/* ═══ FACTOR 1: CATEGORIES (three sets) ════════════════════════════════════ */
const CRIT_TABLES = 'Critique of Pure Reason, A70/B95 (table of judgments) and A80/B106 (table of categories)';
const JT_CATEGORY_SETS = [
  {id:'kant', label:'Kant’s categories of the understanding',
   blurb:'Twelve pure concepts of the understanding. In the Critique Kant derives them from the twelve forms of judgment, which is why each one lights a cell.',
   provenance:'Not from the three lecture transcripts: the Busolt transcript sets out the four titles and their moments (s24) but not this derivation. Source: ' + CRIT_TABLES + '.',
   items:[
    {id:'unity', de:'Einheit', en:'Unity', title:'quant', lights:[L('quant-einzeln','Einheit','Paired here by sense: one individual subject. Kant lists the quantity categories in a different order from the judgments, so a pairing by position would differ; treat this one as open.')]},
    {id:'plurality', de:'Vielheit', en:'Plurality', title:'quant', lights:[L('quant-besonders','Vielheit','Paired by sense: some, a plurality, of the subject’s sphere.')]},
    {id:'totality', de:'Allheit', en:'Totality', title:'quant', lights:[L('quant-allgemein','Allheit','Paired by sense: the whole sphere. (See the note on Einheit about the order.)')]},
    {id:'reality', de:'Realität', en:'Reality', title:'qual', lights:[L('qual-bejahend','Realität','Affirmation corresponds to reality (A80/B106 with A70/B95).',{by:'source'})]},
    {id:'negation', de:'Negation', en:'Negation', title:'qual', lights:[L('qual-verneinend','Negation','Negative judgment corresponds to negation.',{by:'source'})]},
    {id:'limitation', de:'Limitation', en:'Limitation', title:'qual', lights:[L('qual-unendlich','Limitation','The infinite judgment corresponds to limitation.',{by:'source'})]},
    {id:'inherence', de:'Inhärenz und Subsistenz', en:'Inherence and subsistence (substance and accident)', title:'rel', lights:[L('rel-kategorisch','Substanz/Akzidens','The categorical form (subject–predicate) gives substance and accident.',{by:'source'})]},
    {id:'causality', de:'Kausalität und Dependenz', en:'Causality and dependence (cause and effect)', title:'rel', lights:[L('rel-hypothetisch','Ursache/Wirkung','The hypothetical form (ground–consequence) gives cause and effect.',{by:'source'})]},
    {id:'community', de:'Gemeinschaft', en:'Community (reciprocity)', title:'rel', lights:[L('rel-disjunktiv','Gemeinschaft','The disjunctive form (members of a division) gives community.',{by:'source'})]},
    {id:'possibility', de:'Möglichkeit – Unmöglichkeit', en:'Possibility – impossibility', title:'mod', lights:[L('mod-problematisch','Möglichkeit','Problematic judgment corresponds to possibility.',{by:'source'})]},
    {id:'existence', de:'Dasein – Nichtsein', en:'Existence – non-existence', title:'mod', lights:[L('mod-assertorisch','Dasein','Assertoric judgment corresponds to existence.',{by:'source'})]},
    {id:'necessity', de:'Notwendigkeit – Zufälligkeit', en:'Necessity – contingency', title:'mod', lights:[L('mod-apodiktisch','Notwendigkeit','Apodictic judgment corresponds to necessity.',{by:'source'})]}
   ]},
  {id:'arist', label:'Aristotle’s ten categories',
   blurb:'Kinds of things said without combination (Categories, ch. 4). These are not forms of judgment, so most have no cell. Three share a name with a title (quantity, quality, relation); only the name is shared.',
   provenance:'Not from the three lecture transcripts. Kant discusses Aristotle’s list in Critique § 10 (A79–83/B105–109), criticising it as taken up without a principle.',
   items:[
    {id:'substance', de:'Substanz', en:'Substance (ousia)', lights:[], none:'Nothing in the table of judgments corresponds to it. Substance and accident come in only through Kant’s category of inherence, via the categorical form.'},
    {id:'quantity', de:'Quantität', en:'Quantity (poson)', lights:[LT('quant','nur der Name','The same word, a different thing: the title of judgment is about the extent of a subject’s sphere, Aristotle’s category about how much a thing is.')]},
    {id:'quality', de:'Qualität', en:'Quality (poion)', lights:[LT('qual','nur der Name','The same word, a different thing: affirmation or denial in the copula versus what kind a thing is.')]},
    {id:'relation', de:'Relation', en:'Relation (pros ti)', lights:[LT('rel','nur der Name','The same word, a different thing: how things stand to each other, versus the relation of subject to predicate, ground to consequence, members of a division.')]},
    {id:'where', de:'Wo', en:'Where (pou)', lights:[], none:'No counterpart among the titles of judgment.'},
    {id:'when', de:'Wann', en:'When (pote)', lights:[], none:'No counterpart among the titles of judgment.'},
    {id:'position', de:'Lage', en:'Position (keisthai)', lights:[], none:'No counterpart among the titles of judgment.'},
    {id:'state', de:'Haben', en:'State (echein)', lights:[], none:'No counterpart among the titles of judgment.'},
    {id:'action', de:'Wirken', en:'Action (poiein)', lights:[], none:'No counterpart among the titles of judgment.'},
    {id:'affection', de:'Leiden', en:'Affection (paschein)', lights:[], none:'No counterpart among the titles of judgment.'}
   ]},
  {id:'busolt', label:'Other distinctions Busolt draws',
   blurb:'Besides the four titles, Busolt separates judgments in other ways. Where one of them clearly bears on a cell, it lights it; where it falls outside the table, nothing lights.',
   provenance:'From the Busolt transcript (AA 24:661–670). Which cell each lights is my mapping.',
   items:[
    {id:'bedingt', de:'bedingte Urtheile', en:'conditioned judgments', lights:[L('quant-allgemein','bedingt','The subject’s generality must be restricted for the predicate to hold, e.g. angles in a triangle sum to 180° only for rectilinear ones.')],
     srcs:[S('busolt','busolt-s25-012','Dergleichen Urtheile nun, wo die aßertion bedingt ist, heißen bedingte Urtheile.')]},
    {id:'modale', de:'Judicium modale', en:'modal judgment (condition at the copula)', lights:[
       L('mod-problematisch','Copula','Busolt names possibility here.',{by:'source'}),
       L('mod-assertorisch','Copula','He names actuality.',{by:'source'}),
       L('mod-apodiktisch','Copula','He names necessity.',{by:'source'})],
     srcs:[S('busolt','busolt-s25-012','Wird aber die Bedingung nicht zum Subiect; sondern zur Copula gesezt, so heißt das Urtheil Judicium modale')]},
    {id:'zusammengesetzt', de:'zusammengesetzte Urtheile', en:'compound judgments', lights:[L('rel-kategorisch','zusammengesetzt','Busolt’s example (“God, the soul and all finite spirits are immortal”) is a categorical judgment with several subjects.')],
     srcs:[S('busolt','busolt-s25-014','Bis hieher haben wir von einfachen Urtheilen geredt, es giebt aber auch zusammengesezte Urtheile.')]},
    {id:'exponibel', de:'exponible Urtheile', en:'exponible judgments (affirm and deny at once)', lights:[
       L('qual-bejahend','exponibel','It affirms …'), L('qual-verneinend','exponibel','… and denies at the same time.'), L('quant-besonders','exponibel','“Few men are pious” means some are and some are not.')],
     srcs:[S('busolt','busolt-s26-004','Ein Exponibel Urtheil ist ein solches welches zugleich bejahend und verneinend ist.')]},
    {id:'aesthetisch', de:'ästhetische Urtheile', en:'aesthetic judgments (concepts plus a feeling)', lights:[], none:'Outside the table: Busolt sets them against logical judgments.',
     srcs:[S('busolt','busolt-s26-004','Aesthetische Urtheile unterscheiden wir von den Logischen dadurch, wenn neben den Begriffen noch eine Empfindung ist')]},
    {id:'praktisch', de:'theoretisch / praktisch', en:'theoretical / practical', lights:[], none:'Outside the table: Busolt says logic knows nothing of practical propositions in the sense that sets them against the speculative.',
     srcs:[S('busolt','busolt-s26-004','Von solchen Praktischen Säzzen, die den Spekulativen entgegen sind, weiß die Logic nichts.')]},
    {id:'tautologisch', de:'tautologische (leere) Sätze', en:'tautological (empty) propositions', lights:[L('qual-bejahend','idem per idem','Such a proposition affirms something of itself (“man has a human nature”).')],
     srcs:[S('busolt','busolt-s26-010','Der Mensch hat ein Menschliches Wesen.')]}
   ]}
];

/* ═══ FACTOR 2: SYLLOGISM AND INFERENCE TYPES ══════════════════════════════ */
/* Moods, in the order and figures Busolt lists them (s29-020). The vowels are read off the names. */
const MOOD_LIST_SRC = S('busolt','busolt-s29-020','In der ersten Figur Barbara, Celarent, Darii, Ferio. In der zweiten Figur Cesare, Camestres, Festino, Barocco. In der dritten Figur Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison. In der vierten Figur Calemes, Bamalip, Dimatis, Fesapo, Fresisom.');
const VOWEL_SRC = S('busolt','busolt-s29-016','Jedes Urtheil hat einen modum, der die Quantitaet und Qualitaet ausdrückt, dergleichen bedeuten die vocalen A, E, I, O.');
const VOWEL_CELLS = {A:['quant-allgemein','qual-bejahend'], E:['quant-allgemein','qual-verneinend'], I:['quant-besonders','qual-bejahend'], O:['quant-besonders','qual-verneinend']};
const VOWEL_EN = {A:'all … are …', E:'no … is …', I:'some … are …', O:'some … are not …'};
const FIGURES = {
  1:{schema:'M–P · S–M ⊢ S–P', where:'middle term: subject of the major, predicate of the minor', src:S('busolt','busolt-s28-001','Figura I. Est notior quam ut egeat explicatione')},
  2:{schema:'P–M · S–M ⊢ S–P', where:'middle term: predicate in both premises', src:S('busolt','busolt-s28-002','Hic medius Terminus est praedicatum in maiori et minori')},
  3:{schema:'M–P · M–S ⊢ S–P', where:'middle term: subject in both premises', src:S('busolt','busolt-s28-003','Hic medius Terminus in maiori et minori propositione est Subiectum.')},
  4:{schema:'P–M · M–S ⊢ S–P', where:'middle term: predicate in the major, subject in the minor', src:S('busolt','busolt-s28-004','Hic medius Terminus est Praedicatum in maiori et Subiectum in minori')}
};
/* ex: constructed example (English, mine); att: attested example from Busolt (German), with my translation */
const JT_MOODS = [
  {n:'Barbara', f:1, ex:['All humans are mortal.','All Greeks are humans.','So all Greeks are mortal.'],
   att:{src:S('busolt','busolt-s27-004','Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers'),
        en:'Being changeable is a mark of everything divisible; being divisible is a mark of a body; so, by means of divisibility, changeability is a mark of a body.', note:'Busolt gives this as an example of the rule “nota notae”, not under the name Barbara; matching it to Barbara is my reading. It runs on marks (Merkmale).'}},
  {n:'Celarent', f:1, ex:['No reptile is warm-blooded.','All snakes are reptiles.','So no snake is warm-blooded.'],
   att:{src:S('busolt','busolt-s27-006','Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach'),
        en:'Nothing composite is simple; all matter is composite; so no matter is simple.', note:'Busolt gives it for the rule “repugnans notae”; reading it as Celarent is mine.'}},
  {n:'Darii', f:1, ex:['All birds lay eggs.','Some pets are birds.','So some pets lay eggs.']},
  {n:'Ferio', f:1, ex:['No reptile is warm-blooded.','Some pets are reptiles.','So some pets are not warm-blooded.']},
  {n:'Cesare', f:2, ex:['No thinking being is composite.','All bodies are composite.','So no body is a thinking being.'],
   att:{src:S('busolt','busolt-s28-002','Kein denkendes Wesen ist zusammengesetzt, alle Körper sind zusammengesezt daher ist kein Körper ein denkendes Wesen'),
        en:'No thinking being is composite; all bodies are composite; so no body is a thinking being.', note:'Busolt’s example for Figure II. The mood name Cesare is my identification.'}},
  {n:'Camestres', f:2, ex:['All birds are feathered.','No bat is feathered.','So no bat is a bird.']},
  {n:'Festino', f:2, ex:['No reptile is warm-blooded.','Some pets are warm-blooded.','So some pets are not reptiles.']},
  {n:'Barocco', f:2, ex:['All birds are feathered.','Some pets are not feathered.','So some pets are not birds.']},
  {n:'Darapti', f:3, ex:['All whales are mammals.','All whales live in the sea.','So some sea-dwellers are mammals.'], note:'The conclusion is only particular, although both premises are universal.'},
  {n:'Felapton', f:3, ex:['No whale is a fish.','All whales live in the sea.','So some sea-dwellers are not fish.']},
  {n:'Disamis', f:3, ex:['Some students are Greek.','All students are hard-working.','So some hard-working people are Greek.']},
  {n:'Datisi', f:3, ex:['All humans are imperfect.','Some humans are virtuous.','So some virtuous people are imperfect.'],
   att:{src:S('busolt','busolt-s28-003','Alle Menschen sind unvollkommen; einige Menschen sind tugendhaft, also sind einige Tugendhafte unvollkommen'),
        en:'All humans are imperfect; some humans are virtuous; so some virtuous people are imperfect.', note:'Busolt’s example for Figure III. The mood name Datisi is my identification.'}},
  {n:'Bocardo', f:3, ex:['Some animals are not mammals.','All animals are living things.','So some living things are not mammals.']},
  {n:'Ferison', f:3, ex:['No fish is a mammal.','Some fish are edible.','So some edible things are not mammals.']},
  {n:'Calemes', f:4, ex:['All whales are mammals.','No mammal is a fish.','So no fish is a whale.']},
  {n:'Bamalip', f:4, ex:['All whales are mammals.','All mammals are warm-blooded.','So some warm-blooded things are whales.']},
  {n:'Dimatis', f:4, ex:['Some mammals live in the sea.','All sea-dwellers need water.','So some things that need water are mammals.']},
  {n:'Fesapo', f:4, ex:['No fish is a mammal.','All mammals are warm-blooded.','So some warm-blooded things are not fish.']},
  {n:'Fresisom', f:4, ex:['No fish is a mammal.','Some mammals live in the sea.','So some sea-dwellers are not fish.']}
];
JT_MOODS[JT_MOODS.findIndex(m => m.n === 'Fresisom')].note = 'Busolt prints the name as “Fresisom”.';
JT_MOODS[JT_MOODS.findIndex(m => m.n === 'Calemes')].note = 'Standard handbooks call this mood Camenes; Busolt prints “Calemes”.';
JT_MOODS.find(m => m.n === 'Bamalip').att = {src:S('busolt','busolt-s28-004','Quidquid habet vim agendi est Spiritus omnis spiritus est substantia, ergo omnis substantia habet vim agendi'),
  en:'Whatever has force to act is spirit; every spirit is substance; therefore every substance has force to act.', note:'Busolt gives this as his Figure IV example. Its conclusion is universal (A, A, A); the valid Figure IV mood with these premises, Bamalip, only gives a particular conclusion. That observation is mine, not Busolt’s.'};

function buildMoodItems(){
  return JT_MOODS.map(m => {
    const v = (m.n.toLowerCase().match(/[aeio]/g) || []).map(x => x.toUpperCase());
    const roles = ['Maior', 'Minor', 'Concl.'], abbr = ['Mj', 'Mn', 'C'];
    const lights = [L('rel-kategorisch', 'all three', 'All three propositions are categorical.')];
    v.forEach((ch, i) => VOWEL_CELLS[ch].forEach(c => lights.push(L(c, abbr[i], roles[i] + ' is “' + VOWEL_EN[ch] + '” (' + ch + ').', {by:'source'}))));
    const fig = FIGURES[m.f];
    return {
      id:'syl:' + m.n.toLowerCase(), group:'Figure ' + ['I', 'II', 'III', 'IV'][m.f - 1], label:m.n, vowels:v.join(''),
      desc:'A categorical syllogism of Figure ' + ['I', 'II', 'III', 'IV'][m.f - 1] + ', mood ' + v.join('') + '. Major: “' + VOWEL_EN[v[0]] + '”, minor: “' + VOWEL_EN[v[1]] + '”, conclusion: “' + VOWEL_EN[v[2]] + '”. The cells lit are read off the vowels, as Busolt says the vowels express quantity and quality.',
      schema:fig.schema + ' (' + fig.where + ')',
      examples:(m.att ? [{k:'attested', de:m.att.src.q, en:m.att.en, src:m.att.src, note:m.att.note}] : []).concat([{k:'constructed', en:m.ex.join(' ')}]),
      srcs:[S('busolt', 'busolt-s29-020', FIG_LIST_QUOTE[m.f]), fig.src, VOWEL_SRC],
      note:m.note || '', lights:lights, kind:'mood'
    };
  });
}
const FIG_LIST_QUOTE = {
  1:'In der ersten Figur Barbara, Celarent, Darii, Ferio.',
  2:'In der zweiten Figur Cesare, Camestres, Festino, Barocco.',
  3:'In der dritten Figur Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison.',
  4:'In der vierten Figur Calemes, Bamalip, Dimatis, Fesapo, Fresisom.'
};

const JT_OTHER_SYLLOGISMS = [
  {id:'syl:modus-ponens', group:'Hypothetical and disjunctive', label:'Modus ponens',
   desc:'From a hypothetical major (“if A then B”) and the minor that A holds, conclude that B holds. Major, minor and conclusion differ in relation and modality: the major is hypothetical, built from two problematic judgments (Wiener); the minor asserts the antecedent.',
   schema:'if A then B · A ⊢ B',
   examples:[{k:'attested', de:'Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius', en:'If bodies are divisible, they are changeable; but the first is true; therefore the second.', src:S('busolt','busolt-s29-023','Sind die Körper theilbar, so sind sie veränderlich; atqui verum est prius, ergo posterius'), note:'Busolt does not label this one; calling it modus ponens is my reading.'}],
   srcs:[S('busolt','busolt-s29-021','Da Schlüße ich a veritate antecedentis ad consequentis positionem.'), S('wiener','wiener-s11-024','Der modus ponens heißt, wenn das antecedens wahr ist: so ist auch das consequens wahr.')],
   caution:'Busolt warns that the converse does not hold: from positing the consequent one may not posit the antecedent.',
   cautionSrc:S('busolt','busolt-s29-023','a positione consequentis ad positionem antecedentis non valet modus ponens'),
   lights:[L('rel-hypothetisch','Mj','The major is a hypothetical judgment (ground–consequence).',{by:'source'}),
           L('mod-problematisch','in Mj','The two members of the hypothetical are problematic judgments (Wiener).',{by:'source'}),
           L('mod-assertorisch','Mn','The minor asserts the antecedent.')]},
  {id:'syl:modus-tollens', group:'Hypothetical and disjunctive', label:'Modus tollens',
   desc:'From a hypothetical major and the denial of its consequent, conclude the denial of its antecedent.',
   schema:'if A then B · not B ⊢ not A',
   examples:[{k:'attested', de:'wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus', en:'If there is blind chance, there is no order in the world; but the second is false; therefore the first.', src:S('busolt','busolt-s29-022','wenn ein Blindes Ohngefähr ist, so ist in der Welt keine Ordnung atqui falsum est posterius ergo primus'), note:'Busolt names this the modus tollens.'}],
   srcs:[S('busolt','busolt-s29-022','hier schließe ich a remotione consequentis ad remotionem antecedentis'), S('wiener','wiener-s11-024','Der modus tollens heißt, wenn das consequens falsch ist: so ist auch das antecedens falsch.')],
   lights:[L('rel-hypothetisch','Mj','The major is a hypothetical judgment.',{by:'source'}),
           L('mod-problematisch','in Mj','The two members of the hypothetical are problematic judgments (Wiener).',{by:'source'}),
           L('qual-verneinend','Mn, C','The minor denies the consequent and the conclusion denies the antecedent.')]},
  {id:'syl:disjunctive', group:'Hypothetical and disjunctive', label:'Disjunctive syllogism',
   desc:'The major is a disjunctive judgment: a division of a concept. Deny all members but one and posit the remaining one; or posit one and deny all the others. Its correctness rests on the correctness of the division.',
   schema:'A is B or C · not B ⊢ C   (and:  A is B or C · B ⊢ not C)',
   examples:[{k:'attested', de:'Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.', en:'All triangles are, by their angles, either right-angled, acute-angled or obtuse-angled.', src:S('wiener','wiener-s11-025','Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.'), note:'Wiener’s example of a disjunctive judgment (the major of such a syllogism). The inference itself is not worked in this passage.'}],
   srcs:[S('busolt','busolt-s29-024','In einem solchen Schluß schließen wir a negatigatione omnium membrorum disiunctionis praeter vnum ad positionem huius vnius'), S('busolt','busolt-s29-025','Oder ich schließe auch a positione vnius membri disiunctionis ad negationem ceterorum omnium.'), S('blomberg','blomberg-s12-013','die Richtigkeit eines Disjunctiven Schlußes auf der Richtigkeit einer logischen Division')],
   lights:[L('rel-disjunktiv','Mj','The major is a disjunctive judgment (members of a division).',{by:'source'}),
           L('mod-problematisch','members','Wiener: the members of a disjunctive judgment are problematic judgments …',{by:'source'}),
           L('mod-assertorisch','exhaustive','… of which it is asserted that together they exhaust the sphere.',{by:'source'})],
   link:{href:'../busolt/division-checker.html', label:'Test a division in the division checker'}},
  {id:'syl:dilemma', group:'Hypothetical and disjunctive', label:'Dilemma',
   desc:'A hypothetical syllogism whose consequent is disjunctive; it is used as a modus tollens to refute rather than to prove.',
   schema:'if A then (B or C) · neither B nor C ⊢ not A',
   examples:[{k:'attested', de:'Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen', en:'If God did not create the best world, he either could not or would not create it.', src:S('busolt','busolt-s29-026','Wenn Gott nicht die beste Welt geschaffen, so hätte er sie entweder nicht schaffen können, oder nicht schaffen wollen'), note:'Wiener (AA 24:935) has the same example, as a disjunctive judgment.'}],
   srcs:[S('busolt','busolt-s29-026','Dilemma est id argumentandi genus, in quo maior est hypothetica.'), S('blomberg','blomberg-s12-014','Ein Dilemma ist eigentlich ein ratiocinium Hypotheticum, deßen Consequenz disjunctiv ist.'), S('blomberg','blomberg-s12-014','Ein Dilemma hat man niemals als modum ponendi, sonderen immer als modum tollendi.')],
   lights:[L('rel-hypothetisch','Mj','The major is hypothetical …',{by:'source'}), L('rel-disjunktiv','its consequent','… and its consequent is disjunctive.',{by:'source'}),
           L('qual-verneinend','C','Busolt: every dilemma has a negative conclusion.')]},
  {id:'syl:contradictory', group:'Immediate inferences (not syllogisms)', label:'Opposition: contradictory',
   desc:'Two judgments of which one denies exactly what the other affirms: a universal affirmative against a particular negative, or a universal negative against a particular affirmative. One is true, the other false.',
   schema:'A vs O   ·   E vs I',
   examples:[{k:'attested', de:'Alle Menschen sind Sterblich, einige sind nicht sterblich', en:'All humans are mortal; some are not mortal.', src:S('busolt','busolt-s26-042','Alle Menschen sind Sterblich, einige sind nicht sterblich'), note:'Blomberg (AA 24:281) gives the same example.'}],
   srcs:[S('busolt','busolt-s26-042','Hiezu wird erfordert, daß eins allgemein bejahend das andere particulair verneinend, oder daß eins allgemein verneinend, das andere particulair bejahend ist.'), S('blomberg','blomberg-s11-025','Contradictorie sind 2 Urtheile einander entgegen gesezt'), S('wiener','wiener-s12-002','contradictoria wenn eins allgemein bejahet oder verneinet und das andere partikulär verneinet oder bejahet')],
   lights:[L('quant-allgemein','changes','Quantity differs between the two.',{by:'source'}), L('quant-besonders','changes','Quantity differs between the two.',{by:'source'}),
           L('qual-bejahend','opposed','Quality differs between the two.',{by:'source'}), L('qual-verneinend','opposed','Quality differs between the two.',{by:'source'})]},
  {id:'syl:contrary', group:'Immediate inferences (not syllogisms)', label:'Opposition: contrary',
   desc:'A universal affirmative against a universal negative. They cannot both be true, but both may be false, because they deny more than is needed.',
   schema:'A vs E',
   examples:[{k:'attested', de:'Alle Menschen sind Lasterhafte … Kein Mensch ist Lasterhaft', en:'All humans are vicious … no human is vicious.', src:S('busolt','busolt-s26-044','Alle Menschen sind Lasterhafte.'), note:'Busolt: the falsity lies in the universality.'}],
   srcs:[S('busolt','busolt-s26-044','Contraire, wenn einem allgemeinen bejahenden Urtheil ein allgemein verneinendes Urtheil entgegengesezt wird, oder umgekehrt'), S('busolt','busolt-s26-044','Judicia contraria opposita können beide falsch seyn'), S('blomberg','blomberg-s11-028','Judicia Contraria können beyde falsch seyn')],
   lights:[L('quant-allgemein','kept','Both are universal.',{by:'source'}), L('qual-bejahend','opposed','One affirms …',{by:'source'}), L('qual-verneinend','opposed','… the other denies.',{by:'source'})]},
  {id:'syl:subcontrary', group:'Immediate inferences (not syllogisms)', label:'Opposition: subcontrary',
   desc:'A particular affirmative against a particular negative. They can both be true, but not both false, because they say less than is needed for a true opposition.',
   schema:'I vs O',
   examples:[{k:'attested', de:'Einige Menschen sind böse, einige sind nicht böse', en:'Some humans are evil; some are not evil.', src:S('busolt','busolt-s26-043','Einige Menschen sind böse'), note:''}],
   srcs:[S('busolt','busolt-s26-043','Subcontraire, da ein Urtheil particulair bejahend das andere particulaer verneinend ist'), S('blomberg','blomberg-s11-027','Judicia subcontraria, weil sie nicht genug enthalten, können 1) alle beyde wahr seyn')],
   lights:[L('quant-besonders','kept','Both are particular.',{by:'source'}), L('qual-bejahend','opposed','One affirms …',{by:'source'}), L('qual-verneinend','opposed','… the other denies.',{by:'source'})]},
  {id:'syl:subalternation', group:'Immediate inferences (not syllogisms)', label:'Subalternation',
   desc:'From the universal to the particular of the same quality. Quantity changes, quality is kept.',
   schema:'A ⊢ I   ·   E ⊢ O',
   examples:[{k:'attested', de:'alle Menschen sind sterblich folglich einige', en:'All humans are mortal; therefore some are.', src:S('wiener','wiener-s12-002','Subalternata auch nur Form nach verschieden z.B. alle Menschen sind sterblich folglich einige'), note:''}],
   srcs:[S('busolt','busolt-s26-041','Auf die Zweyte Art schließe ich vom allgemeinen aufs besondere.'), S('blomberg','blomberg-s11-024','Die Consequentia per Judicia Subalternata geschiehet ohne alle Veränderung der Stelle der Terminorum, die Qualitaet bleibt auch dieselbe, nur die Quantitaet wird darinn veränderet.')],
   lights:[L('quant-allgemein','from','The premise is universal.'), L('quant-besonders','to','The conclusion is particular.'), LT('qual','kept','Quality is unchanged.')]},
  {id:'syl:conversion', group:'Immediate inferences (not syllogisms)', label:'Conversion',
   desc:'Subject and predicate trade places. A universal affirmative converts only per accidens, to a particular; a universal negative and the particulars convert simpliciter, keeping their quantity. Quality is kept.',
   schema:'All S are P ⊢ some P are S   ·   no S is P ⊢ no P is S',
   examples:[{k:'attested', de:'Alle Menschen sind Sterblich einige Sterbliche sind also Menschen', en:'All humans are mortal; so some mortals are humans.', src:S('busolt','busolt-s26-044','Alle Menschen sind Sterblich einige Sterbliche sind also Menschen'), note:'Busolt’s example of conversion per accidens.'}],
   srcs:[S('busolt','busolt-s26-044','bei der conversion kann man die Quantitaet ändern, nicht aber die Qualitaet'), S('busolt','busolt-s26-046','Allgemeine bejahende Säzze lassen sich nur per accidens'), S('blomberg','blomberg-s11-028','allgemein bejahende Urtheile laßen sich per accidens umkehren, alle verneinende Urtheile aber laßen sich Simpliciter umkehren'), S('wiener','wiener-s12-004','allgemein bejahende nur per accidens convertiren')],
   lights:[LT('quant','may change','Conversion per accidens turns a universal into a particular.'), LT('qual','kept','Quality never changes in conversion.')]},
  {id:'syl:contraposition', group:'Immediate inferences (not syllogisms)', label:'Contraposition',
   desc:'Subject and predicate trade places and both are negated. Quality changes, quantity is kept.',
   schema:'All S are P ⊢ all non-P are non-S',
   examples:[{k:'attested', de:'Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen', en:'All humans are mortal; what is not mortal is not human.', src:S('busolt','busolt-s26-046','Alle Menschen sind Sterblich, Nichtsterbliche sind nicht Menschen'), note:''}],
   srcs:[S('busolt','busolt-s26-044','durch die contraposition der Urtheile, wo versezt wird die Qualitaet und nicht die Quantitaet'), S('wiener','wiener-s12-005','Alle Bejahende lassen sich contraponiren')],
   lights:[LT('quant','kept','Quantity is unchanged.'), LT('qual','changes','Quality changes: the terms are negated.')]}
];

/* ═══ FACTOR 3: PRINCIPLES AND LAWS ════════════════════════════════════════ */
const JT_PRINCIPLES = [
  {id:'pri:nota-notae', label:'Nota notae est nota rei ipsius', short:'A mark of a mark is a mark of the thing.',
   forms:[S('busolt','busolt-s27-003','Nota notae est Nota rei ipsius, dies gilt von bejahenden Urtheilen.'), S('blomberg','blomberg-s12-003','nota notae rei est nota rei ipsius und dieses ist auch die Grundregel aller Syllogistik')],
   explain:'If M is a mark of S, and P is a mark of M, then P is a mark of S. This is the principle behind affirmative syllogisms, and it ties the syllogism to the theory of marks (Merkmale).',
   examples:[{k:'attested', de:'Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers', en:'Being changeable is a mark of everything divisible; being divisible is a mark of a body; so changeability is a mark of a body.', src:S('busolt','busolt-s27-004','Veränderlich seyn ist ein Merkmahl alles theilbaren, theilbar seyn ist ein Merkmahl eines Körpers, also ist vermittelst der theilbarkeit die Veränderlichkeit ein Merkmahl des Körpers')}],
   lights:[L('rel-kategorisch','basis','A categorical syllogism: terms related as subject and predicate.'), L('qual-bejahend','affirmative','Busolt: it holds of affirmative inferences.',{by:'source'}), L('quant-allgemein','Mj, Mn','The marks run through universal premises.')]},
  {id:'pri:repugnans', label:'Repugnans notae repugnat rei ipsi', short:'What conflicts with a mark conflicts with the thing.',
   forms:[S('busolt','busolt-s27-004','Repugnans notae repugnat rei ipsi dies gilt von verneinenden Schlüßen'), S('blomberg','blomberg-s12-009','Repugnans Nota Notae rei, repugnat rei ipsi')],
   explain:'If P conflicts with a mark M of S, then P conflicts with S. This is the principle behind negative syllogisms.',
   examples:[{k:'attested', de:'Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach', en:'Nothing composite is simple; all matter is composite; so no matter is simple.', src:S('busolt','busolt-s27-006','Nichts Zusammengeseztes ist einfach, alle Materie ist zusammengesezt, also ist keine Materie einfach')}],
   lights:[L('rel-kategorisch','basis','A categorical syllogism.'), L('qual-verneinend','negative','Busolt: it holds of negative inferences.',{by:'source'}), L('quant-allgemein','Mj','The major is universal.')]},
  {id:'pri:dictum-omni', label:'Dictum de omni', short:'What holds of a genus or species holds of all individuals under it.',
   forms:[S('busolt','busolt-s27-007','Dictum de omni quidquid valet de genere aut specie valet etiam de omnibus indiuiduis in genere aut specie contentis.'), S('blomberg','blomberg-s12-011','was einem allgemeinen Begrif zu komt, komt auch allen Begrifen zu, die unter ihm enthalten sind')],
   explain:'The old logicians’ ground of syllogisms. Busolt says nota notae and repugnans notae are “just what the ancients’ dictum de omni et nullo was”; Blomberg says those rules go before the dictum.',
   examples:[{k:'constructed', en:'Whatever holds of all animals holds of this horse, because the horse falls under animal.'}],
   lights:[L('quant-allgemein','Mj','The major is a universal judgment about a whole sphere.'), L('qual-bejahend','affirms','It states what is affirmed of the whole.'), L('rel-kategorisch','basis','A categorical syllogism.')],
   extra:[S('busolt','busolt-s27-006','Die Beiden angeführten Regeln sind eben dies, was den alten dictum de omni et nullo war.'), S('blomberg','blomberg-s12-010','Allein diese angeführte Grund-Regeln gehen noch selbst vor diesem voraus.')]},
  {id:'pri:dictum-nullo', label:'Dictum de nullo', short:'What conflicts with a genus or species conflicts with all individuals under it.',
   forms:[S('busolt','busolt-s27-008','Dictum de nullo quidquid repugnat generi aut speciei, repugnat etiam omnibus indiuiduis in genere aut specie contentis.')],
   explain:'The negative counterpart of the dictum de omni.',
   examples:[{k:'constructed', en:'Whatever is denied of all reptiles is denied of this snake, because the snake falls under reptile.'}],
   lights:[L('quant-allgemein','Mj','The major is a universal judgment about a whole sphere.'), L('qual-verneinend','denies','It states what is denied of the whole.'), L('rel-kategorisch','basis','A categorical syllogism.')]},
  {id:'pri:contradiction', label:'Principle of contradiction', short:'No judgment is true where the predicate contradicts the subject.',
   forms:[S('busolt','busolt-s27-001','Kein Urtheil ist wahr, wo das praedicat dem Subiect wiederspricht.'), S('blomberg','blomberg-s11-015','das Principium contradictionis nun ist nur analytisch')],
   explain:'Busolt: it cannot serve as the main rule of syllogisms, for it is only a principle of judgment. Blomberg: it is a formal principle, with no determinate subject or predicate, and only analytic.',
   examples:[{k:'constructed', en:'“Some bodies are not extended” is not true, because it denies of a body something contained in the concept of body.'}],
   lights:[L('rel-kategorisch','subject–predicate','The principle speaks of predicate against subject.'), L('qual-verneinend','denial','What contradicts the subject must be denied of it.'), L('qual-bejahend','barred','A predicate that contradicts the subject cannot be affirmed.',{bar:true})],
   extra:[S('busolt','busolt-s27-001','denn es ist nur ein Principium iudicii.')]},
  {id:'pri:neg-neg', label:'Ex puris negativis nihil sequitur', short:'Nothing follows from two negative premises.',
   forms:[S('busolt','busolt-s29-003','Ex puris negatiuis nihil sequitur.')],
   explain:'The subsumption must put the thing under the condition of the rule, and that must be affirmative. (Busolt’s ground.)',
   examples:[{k:'attested', de:'Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier', en:'No human is an irrational animal; no ox is a human; so no ox is an irrational animal. (A bad inference.)', src:S('busolt','busolt-s29-003','Kein Mensch ist ein unvernünftiges Thier, Kein Ochs ist ein Mensch also ist kein Ochs ein unvernünftiges Thier')}],
   lights:[L('qual-verneinend','both premises','Two negative premises give no conclusion.',{bar:true}), L('rel-kategorisch','basis','A rule for categorical syllogisms.')]},
  {id:'pri:part-part', label:'Ex puris particularibus nihil sequitur', short:'Nothing follows from two particular premises.',
   forms:[S('busolt','busolt-s29-004','Ex puris particularibus nihil sequitur.')],
   explain:'What stands under the condition of the rule could not otherwise be applied to its predicate.',
   examples:[{k:'attested', de:'Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen', en:'Some sentient beings are humans; some irrational animals are sentient beings; so some irrational animals are humans. (A bad inference.)', src:S('busolt','busolt-s29-004','Einige empfindende Wesen sind Menschen, einige unvernünftige Thiere sind empfindende Wesen, also sind einige unvernünftige Thiere Menschen')}],
   lights:[L('quant-besonders','both premises','Two particular premises give no conclusion.',{bar:true}), L('rel-kategorisch','basis','A rule for categorical syllogisms.')]},
  {id:'pri:weaker-part', label:'Conclusio sequitur partem debiliorem', short:'The conclusion follows the weaker premise.',
   forms:[S('busolt','busolt-s29-005','Unter den Praemissen nennt man partem debiliorem welcher entweder Particulair oder verneinend ist')],
   explain:'If a premise is negative the conclusion is negative; if a premise is particular the conclusion is particular.',
   examples:[{k:'constructed', en:'All birds lay eggs; some pets are birds; so some pets lay eggs (a particular premise gives a particular conclusion).'}],
   lights:[L('quant-besonders','weaker','A particular premise is the weaker part.',{by:'source'}), L('qual-verneinend','weaker','A negative premise is the weaker part.',{by:'source'})]},
  {id:'pri:figure1-rules', label:'Rules of Figure I', short:'The major universal, the minor affirmative.',
   forms:[S('busolt','busolt-s29-008','Maior esse debet vniversalis.'), S('busolt','busolt-s29-009','Minor affirmans.')],
   explain:'Busolt says these rules do not narrow Figure I but widen it: the major may be affirmative or negative, the minor universal or particular, so all four of A, E, I, O are possible in it, which is why he calls it the genuine, natural and pure figure.',
   examples:[{k:'constructed', en:'Barbara, Celarent, Darii and Ferio are the four Figure I moods.'}],
   lights:[L('quant-allgemein','Mj','The major must be universal.',{by:'source'}), L('qual-bejahend','Mn','The minor must be affirmative.',{by:'source'})],
   extra:[S('busolt','busolt-s29-010','folglich ist die erste Figur die ächte, die einzig Natürliche und Reine')]},
  {id:'pri:categorical-basis', label:'Categorical judgments are the basis', short:'The hypothetical and disjunctive are built from categorical judgments.',
   forms:[S('busolt','busolt-s24-019','Die Kategorische Urtheile liegen den andern zum Grunde'), S('wiener','wiener-s11-020','Die categorischen Urtheile machen die basin aller Übrigen aus.')],
   explain:'A hypothetical judgment consists of two categorical judgments, one as ground and one as consequence; a disjunctive judgment of several, which together equal the divided concept.',
   examples:[{k:'attested', de:'Die Disiunctiuen zusammengenommen sind dem conceptu diviso gleich.', en:'The disjunctive judgments taken together equal the divided concept.', src:S('busolt','busolt-s24-019','Die Disiunctiuen zusammengenommen sind dem conceptu diviso gleich.')}],
   lights:[L('rel-kategorisch','basis','The ground on which the others stand.',{by:'source'}), L('rel-hypothetisch','built on','Made of two categorical judgments.',{by:'source'}), L('rel-disjunktiv','built on','Made of several categorical judgments.',{by:'source'})]},
  {id:'pri:singular-universal', label:'Singular judgments count as universal', short:'A judgment about one individual is treated as universal.',
   forms:[S('busolt','busolt-s25-012','Die Judicia singularia Können betrachtet werden als Judicia vniversalia, insofern das Praedicat vom Subiect ohne Ausnahme gilt'), S('blomberg','blomberg-s11-009','und also sind jede einzele Urtheile allgemein')],
   explain:'Because the predicate holds of the whole subject without exception. It is why “Caius is a man” can serve as a minor premise in a Figure I syllogism.',
   examples:[{k:'attested', de:'Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich', en:'All humans are mortal; Caius is a human; so Caius is mortal.', src:S('busolt','busolt-s26-046','Alle Menschen sind Sterblich, Caius ist ein Mensch, also ist Caius sterblich')}],
   lights:[L('quant-einzeln','is counted as','The singular judgment …',{by:'source'}), L('quant-allgemein','universal','… is treated as a universal one.',{by:'source'})]},
  {id:'pri:negation-copula', label:'The negation belongs to the copula', short:'A negated predicate does not make a negative judgment.',
   forms:[S('busolt','busolt-s25-007','die negation muß also bey der Copula und nicht beim Praedicat stehen'), S('busolt','busolt-s25-008','Judicium infinitum wenn das Praedicat verneinet wird')],
   explain:'Logic looks at the relation. If the negation sits in the predicate (“the soul is non-mortal”) the concept is negative but the judgment is not: that is the infinite judgment. If it sits in the copula (“the soul is not mortal”), the judgment is negative.',
   examples:[{k:'constructed', en:'“The soul is not mortal” (negative) against “The soul is non-mortal” (infinite).'}],
   lights:[L('qual-verneinend','copula','Negation in the copula.',{by:'source'}), L('qual-unendlich','predicate','Negation in the predicate.',{by:'source'})]},
  {id:'pri:hyp-problematic', label:'The hypothetical is made of problematic judgments', short:'Neither member of a hypothetical is asserted.',
   forms:[S('wiener','wiener-s11-020','Das hypothetische ist aus zwey problematischen zusammen gesetzt'), S('busolt','busolt-s24-012','Bei den Problematischen Urtheilen bleibt also die Folge klar, der Grund aber, oder der eine Vordersaz ist unausgemacht.')],
   explain:'In “if the world is not the best, then God could not or would not make a better one” neither clause is asserted on its own; only their connection is.',
   examples:[{k:'attested', de:'wenn Gott gerecht ist: so wird das Böse bestraft', en:'If God is just, evil is punished.', src:S('wiener','wiener-s11-019','wenn Gott gerecht ist: so wird das Böse bestraft')}],
   lights:[L('rel-hypothetisch','built from','The hypothetical judgment …',{by:'source'}), L('mod-problematisch','its members','… is made of problematic judgments.',{by:'source'})]},
  {id:'pri:disjunction-division', label:'A disjunctive judgment is a logical division', short:'Its members are the members of a division and must equal the sphere.',
   forms:[S('blomberg','blomberg-s12-013','die Richtigkeit eines Disjunctiven Schlußes auf der Richtigkeit einer logischen Division'), S('wiener','wiener-s11-025','Es ist das in der That nichts anders, als eine logische division')],
   explain:'So a disjunctive judgment is only as good as the division behind it: opposed members that together equal the divided sphere. Busolt’s rules for division are in his section on the logical division of a concept.',
   examples:[{k:'attested', de:'Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.', en:'All triangles are, by their angles, right-angled, acute-angled or obtuse-angled.', src:S('wiener','wiener-s11-025','Alle Triangel sind den Winkeln nach entweder rechtwinklicht, oder spitzwinklicht, oder stumpfwinklicht.')}],
   lights:[L('rel-disjunktiv','division','The disjunctive form is a division of a sphere.',{by:'source'}), L('mod-problematisch','members','The members are problematic …',{by:'source'}), L('mod-assertorisch','exhaustive','… and it is asserted that they exhaust the sphere.',{by:'source'})],
   link:{href:'../busolt/division-checker.html', label:'Test a division in the division checker'}},
  {id:'pri:conclusion-apodictic', label:'The conclusion is apodictic', short:'Wiener’s note on the modality of an inference’s conclusion.',
   forms:[S('wiener','wiener-s13-001','denn Conclusio ist immer apodiktisch')],
   explain:'A terse note in Wiener’s transcript, set among remarks on how syllogisms are divided; its exact sense should be read in context before relying on it.',
   examples:[],
   caution:'Only Wiener says this, in a compressed passage with a gap in the transcription. Read it in context.',
   lights:[L('mod-apodiktisch','conclusion','The conclusion is said to be apodictic.',{by:'source'})]}
];

/* ═══ PRACTICE ═════════════════════════════════════════════════════════════ */
/* The practice questions are built in the app from the Busolt examples whose title is attested
   (../busolt/busolt-annotations.js, JUDGMENT_EXAMPLES, field x). */

