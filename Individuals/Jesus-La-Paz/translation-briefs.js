/* ─────────────────────────────────────────────────────────────────────────────
   Two statements of translation method, for the "Translate selection" panel of
   meier-kant-comparison.html. Each is the working method of a published English
   translation of the Critique of Pure Reason, taken from what its translators say
   about their own practice:

     guyer  Paul Guyer and Allen W. Wood (eds. and trs.), Critique of Pure Reason,
            Cambridge Edition of the Works of Immanuel Kant (Cambridge UP, 1998):
            the General Editors' Preface (pp. vii-viii), the "Note on translation"
            (pp. 73-76) and the German-English Glossary (pp. 757-774).
     kemp   Norman Kemp Smith (tr.), Immanuel Kant's Critique of Pure Reason
            (Macmillan, 1929): the Translator's Preface (pp. v-viii), and his
            renderings as they stand in his text.

   WHAT THIS IS AND IS NOT. Neither translation covers the texts this page shows
   (logic lecture transcripts, Reflexionen, Meier, Baumgarten). The briefs ask a
   language model to apply each translator's stated PRINCIPLES, and for Guyer-Wood
   their glossary, to a passage chosen by the reader. The result is a machine
   draft written in the manner of each method. It is not either translator's
   work, and the page says so wherever it shows one.

   The glossary below is the Guyer-Wood German-English glossary as printed
   (pp. 757-774), read by OCR and checked against its English-German half; it is a
   selection, not the whole. The Kemp Smith list is what his own text shows, not a
   glossary he published (he published none).

   Shape: TRANSLATION_BRIEFS[style] = { label, citation, principles: [{ t, p }],
   terms: [[German, English]], system } where `system` is the system prompt sent
   to the model, built from the same principles and terms the reader can open and
   read in the panel.
   ───────────────────────────────────────────────────────────────────────────── */

const TRANSLATION_BRIEFS = (() => {

  const COMMON = `You are an expert translator and historian of early modern German philosophy, translating for scholars. The reader will give you a passage selected from the logic lectures and handwritten notes of Immanuel Kant, from G. F. Meier's Auszug aus der Vernunftlehre, from J. G. Jäsche's Logik, or from Baumgarten's Metaphysica. The passage is usually German, sometimes Latin, often a mixture, and uses eighteenth-century spelling and punctuation.

Translate the selected passage into English according to the method set out below, which is the stated method of a named published translation of Kant. Apply it as that translator would apply it; do not blend in the other method.

Facts about the material that apply under either method:
- Much of it is not polished prose. Student transcripts and Kant's own notes are fragmentary, abbreviated and sometimes broken off. Square brackets, angle brackets and the signs | and || in the passage belong to the Academy Edition's apparatus (editorial insertions, deletions, page and line breaks): carry them over exactly where they stand, and do not translate or silently drop them.
- Latin words and phrases that Kant uses as technical terms stay in Latin, in italics (*like this*), with the English beside them where needed. Emphasis in the source cannot be recovered here, so do not invent any.
- Translate ONLY the passage marked as the passage. A "context" passage may follow it; it is there so you can resolve pronouns, ellipses and the sense of a term, and is not to be translated.
- Never invent text the passage does not contain, and never fill a gap or an illegible reading. If a reading is doubtful, or the passage looks corrupt or cut off, say so in the notes.
- The passage may be a mere fragment of a sentence. Translate what is there.

Output format, exactly:
1. The translation alone: no title, no preamble, no commentary inside it.
2. Then a line containing only ===NOTES===
3. Then the notes, as a short list of bullets (a dash and a space at the start of each), no more than eight, each one line or two. What the notes should contain is given under the method.
Use *asterisks* for italics and **double asterisks** only if the method below calls for bold. Do not use any other markup.`;

  /* ── Guyer & Wood ─────────────────────────────────────────────────────── */
  const guyerTerms = [
    ['Abfolge', 'succession'], ['Absicht', 'aim; intention'], ['Allheit', 'totality'], ['an sich', 'in itself'],
    ['Anschauung', 'intuition (intuitus)'], ['anschaulich', 'intuitive'], ['Art', 'way; species; kind; manner'],
    ['Aufgabe', 'problem'], ['Ausdehnung', 'extension'], ['Ausdruck', 'expression'],
    ['bedeuten / Bedeutung', 'signify / significance; meaning'], ['bedingt', 'conditioned'], ['Bedingung', 'condition'],
    ['Begebenheit', 'occurrence'], ['begreifen', 'comprehend (comprehendere)'], ['Begriff', 'concept (conceptus)'],
    ['beharren / Beharrlichkeit', 'persist / persistence'], ['behaupten', 'assert'], ['bejahen', 'affirm'],
    ['Belehrung', 'teaching'], ['Benennung', 'term'], ['Beobachtung', 'observation'],
    ['Beschaffenheit', 'constitution; property'], ['besonder', 'particular; special'], ['bestimmen', 'determine'],
    ['Bestimmung', 'determination (determinatio); vocation'], ['Betrachtung', 'consideration'],
    ['beurteilen / Beurteilung', 'assess; judge / estimation; judgment'], ['Bewegungsgrund', 'motive'], ['Beweis', 'proof'],
    ['Bewußtsein', 'consciousness'], ['Dasein', 'existence'], ['deutlich', 'distinct'], ['Ding', 'thing'],
    ['Eindruck', 'impression'], ['Einbildungskraft', 'imagination'], ['einfach', 'simple'], ['Einheit', 'unity'],
    ['Einteilung / Teilung', 'division'], ['Empfindung', 'sensation (sensatio)'], ['Ereignis', 'event'], ['Erfahrung', 'experience'],
    ['erkennen', 'cognize; recognize (cognoscere)'], ['Erkenntnis', 'cognition (cognitio)'],
    ['Erklärung', 'explanation; definition; declaration'], ['Erläuterung', 'clarification; elucidation'],
    ['Erörterung', 'exposition (expositio)'], ['Erscheinung', 'appearance'], ['Existenz', 'existence'],
    ['Fähigkeit', 'capacity (capacitas)'], ['Folge', 'sequel; sequence'], ['folgern', 'conclude'], ['Folgerung', 'consequence'],
    ['Form', 'form'], ['Fortgang', 'progression; progress (progressus)'], ['Fürwahrhalten', 'taking to be true'],
    ['Gattung', 'genus'], ['Gebrauch', 'use'], ['Gedankending', 'thought-entity (ens rationis)'], ['Gefühl', 'feeling'],
    ['Gegenstand / Object', 'object'], ['Geist', 'mind; spirit'], ['gemein', 'common'], ['Gemeinschaft', 'community'],
    ['Gemüt', 'mind'], ['Gesetz', 'law'], ['Glaube', 'belief; faith'], ['Grad', 'degree'], ['Grenze', 'bound(ary)'],
    ['Größe', 'magnitude'], ['Grund', 'ground; basis'], ['Grundsatz', 'principle'], ['gültig', 'valid'], ['Idee', 'idea'],
    ['Inbegriff', 'sum total'], ['Inhalt', 'content'], ['kennen', 'know; be acquainted with (noscere)'],
    ['Kenntnis', 'acquaintance; information; knowledge'], ['Kraft', 'force; power'], ['Kriterium', 'criterion'],
    ['Lehre', 'doctrine'], ['Lehrsatz', 'theorem'], ['Mannigfaltige', 'manifold (n.)'], ['Materie', 'matter'],
    ['Meinung', 'opinion'], ['Menge', 'multitude; multiplicity; amount'], ['Merkmal', 'mark (nota)'], ['Mittel', 'means'],
    ['möglich', 'possible'], ['notwendig', 'necessary'], ['Obersatz / Untersatz', 'major premise / minor premise'], ['Ort', 'place'],
    ['Raum', 'space'], ['Realität / Wirklichkeit', 'reality / actuality; reality'], ['rein', 'pure'], ['Satz', 'proposition; sentence; principle'],
    ['Schein', 'illusion'], ['Schluß', 'inference; conclusion'], ['Vernunftschluß', 'syllogism; inference of reason'],
    ['Schranke', 'limitation'], ['Selbstbewußtsein', 'self-consciousness'], ['setzen', 'posit'], ['Sinn', 'sense (n.)'],
    ['sinnlich / Sinnlichkeit', 'sensible / sensibility'], ['Stoff', 'material'], ['synthetisch', 'synthetic'], ['Teil', 'part'],
    ['Überlegung', 'reflection'], ['Überredung', 'persuasion'], ['Überzeugung', 'conviction'], ['Umfang', 'domain'],
    ['Urteil', 'judgment'], ['urteilen', 'judge (v.)'], ['Urteilskraft', '(power of) judgment'], ['Verbindung', 'combination (combinatio)'],
    ['Verknüpfung', 'connection (connexio)'], ['Vermögen', 'faculty; capacity (facultas)'], ['Vernunft', 'reason'],
    ['vernünfteln', 'rationalize'], ['Verstand', 'understanding (intellectus)'], ['verstehen', 'understand (intelligere)'],
    ['Vollkommenheit', 'perfection'], ['Vorstellung', 'representation (repraesentatio)'], ['Wahrnehmung', 'perception (perceptio)'],
    ['Wahrscheinlichkeit', 'probability'], ['Wechselwirkung', 'interaction'], ['Welt', 'world'], ['Weltweisheit', 'philosophy'],
    ['Wesen', 'being; essence'], ['Widerspruch', 'contradiction'], ['Wirkung', 'effect'], ['Wissen', 'knowledge (scientia)'],
    ['Wissenschaft', 'science (scientia)'], ['zufällig', 'contingent'], ['Zusammenhang', 'interconnection; nexus'],
    ['Zustand', 'state'], ['Zweck', 'end; purpose'], ['zureichend', 'sufficient'], ['Zahl', 'number'], ['Zeit', 'time'],
  ];

  const guyerPrinciples = [
    { t: 'Give the reader of the translation an experience as close as possible to that of the reader of the original. The test is that as much interpretive work is left to the reader of the translation as is left to the reader of the original.', p: 'Note on translation, p. 73' },
    { t: 'Avoid sacrificing literalness to readability. Leave as much of the interpretive work as possible to the reader.', p: 'General Editors’ Preface, p. viii' },
    { t: 'Consistency of terminology: use the same English word for every philosophically significant German word. Where one English word must stand for several German words (Gegenstand and Object are both “object”), keep the information by marking the Latinate member in a note, without imposing an interpretation of the difference in the text.', p: 'Note on translation, p. 73' },
    { t: 'Keep the author’s sentences, and his paragraph divisions, as wholes even where readability suggests breaking them up: the sentence is often the unit of the argument, and splitting it turns an argument into a series of assertions.', p: 'Note on translation, p. 73; General Editors’ Preface, p. viii' },
    { t: 'Preserve ambiguous and obscure constructions wherever possible. Do not emend or improve the text so long as some sense can be made of it as it stands; where an adverbial phrase such as “a priori” could attach to a verb or to a noun, leave it as ambiguous as the German.', p: 'Note on translation, pp. 73–74' },
    { t: 'Minimize interpretation in other ways: render emphasis as emphasis, put in italics the foreign (Latin) words the author printed in roman type, use quotation marks where a word is mentioned rather than used, and keep purely linguistic notes apart from any explanatory ones.', p: 'Note on translation, p. 76; General Editors’ Preface, p. viii' },
    { t: 'Let the author’s own Latin equivalents guide the English for technical terms, as Kemp Smith usually did, but do not follow Kemp Smith’s paraphrases: the Cambridge translation departs from him systematically.', p: 'Note on translation, p. 76' },
  ];

  const guyerSystem = `${COMMON}

METHOD: the translation principles of Paul Guyer and Allen W. Wood, Critique of Pure Reason (Cambridge Edition, 1998).

${guyerPrinciples.map((x, i) => `${i + 1}. ${x.t}`).join('\n')}

In practice, for this passage:
- Be literal. Follow the German word order and syntax as far as English allows, keep every clause in its place, and do not break a long sentence into several or join several into one. Keep the German punctuation's articulation (colons, semicolons, parentheses) where English can bear it.
- Use the glossary below for every term it covers, always with the same English word. Where a term is not in the glossary, choose the plain English cognate or standard technical equivalent and use it consistently in the passage.
- Do not paraphrase, explain, supply missing subjects, resolve pronouns by replacing them with nouns, or smooth the passage; keep what is awkward or obscure awkward or obscure. If the German is ambiguous, let the English be ambiguous in the same way.
- American spelling.

NOTES under this method are purely linguistic: for each philosophically significant term, the German (and Latin) behind the English where it is not obvious; any place one English word stands for two German words; any ambiguity you preserved and what the two readings are; any doubtful reading. Give no interpretation of what Kant or Meier means and no explanation of the doctrine.

GLOSSARY (Guyer and Wood, German-English, a selection; Latin in parentheses is Kant's own equivalent as the glossary prints it):
${guyerTerms.map(([g, e]) => `${g} = ${e}`).join('\n')}`;

  /* ── Kemp Smith ───────────────────────────────────────────────────────── */
  const kempTerms = [
    ['Erkenntnis', 'knowledge (“mode of knowledge” for the plural Erkenntnisse, because “knowledge” cannot be used in the plural)'],
    ['Anschauung', 'intuition'], ['Vorstellung', 'representation'], ['Verstand', 'understanding'], ['Begriff', 'concept'],
    ['Gegenstand', 'object'], ['Erscheinung', 'appearance'], ['Sinnlichkeit', 'sensibility'], ['Empfindung', 'sensation'],
    ['Vermögen', 'capacity; faculty; power (as the sense requires)'], ['Empfänglichkeit', 'receptivity'], ['Spontaneität', 'spontaneity'],
    ['Bestimmung', 'determination'], ['Gemüt', 'mind'], ['heißen / genannt werden', '“is entitled …”'],
    ['Kritik', '“criticism” or “critique”, as the context suits'],
  ];

  const kempPrinciples = [
    { t: 'Fidelity to Kant’s meaning, in English that reasonably approximates English idiom. Kemp Smith admires in Meiklejohn the gift of making Kant speak in language that approximates English idiom, and in Max Müller the exactness about the niceties of German idiom wherever the sense depends on them; he wants both.', p: 'Translator’s Preface, p. v' },
    { t: 'The translator must have made a thorough study of the Critical Philosophy: the shortcomings of earlier translations are traced to the want of it. Renderings and constructions are decided by command of Kant’s system, not by the words alone.', p: 'Translator’s Preface, p. v' },
    { t: 'The difficulty lies partly in Kant’s manner of writing: he crowds so much into each sentence that he overuses parentheses and relies on particles, pronouns and genders to show how the parts connect, sometimes with more than one possible antecedent. The translator must settle these by judgment.', p: 'Translator’s Preface, pp. vi–vii' },
    { t: 'There is no escape from restating the content of the more complex sentences in a number of separate sentences. This can generally be done without distortion of meaning, even for the most cumbrous sentences.', p: 'Translator’s Preface, p. vii' },
    { t: 'Where a sentence’s irregular structure shows that independently written passages or inserted clauses were combined, do not translate it just as it stands: retained irregularities would hinder, not aid, the reader, who could not tell them from faults in the English. Sacrifice part of what is said, or suggested, to gain smoothness, where nothing materially worth retaining is lost. The exact irregularities belong to the German, the ipsissima verba.', p: 'Translator’s Preface, pp. vii–viii' },
    { t: 'Technical terms: “knowledge” for Erkenntnis; and, as the Cambridge translators say of him, he usually let Kant’s own Latin equivalents for his German technical terms determine the English.', p: 'Footnotes in his text, p. 42 n. (Erkenntnisse) and p. 9 n. (Kritik); Cambridge Note on translation, p. 76' },
    { t: 'Departures from the text, supplied words and readings are shown in square brackets, with the German where it matters.', p: 'As practised throughout the translation (e.g. “[in the production]”, “[given]”)' },
  ];

  const kempSystem = `${COMMON}

METHOD: the translation principles of Norman Kemp Smith, Immanuel Kant's Critique of Pure Reason (Macmillan, 1929), as he states them in his Translator's Preface and applies them in his text.

${kempPrinciples.map((x, i) => `${i + 1}. ${x.t}`).join('\n')}

In practice, for this passage:
- Aim at clear, intelligible English prose in the register of Kemp Smith's own translation: British spelling, "is entitled" for heißen, "mode of knowledge" for Erkenntnisse, a measured philosophical idiom with no modern slang.
- Resolve ambiguous pronouns, particles and genders by judgment of what the argument requires, and let the English say so plainly. You may restate a long or tangled sentence as several shorter ones, and smooth an irregular construction, where nothing materially worth keeping is lost. Do not add content the German does not suggest.
- Put in square brackets any word you supply to complete the sense, and the German or Latin word where the sense turns on it.
- Keep the technical vocabulary below fixed; elsewhere choose the English technical term that Kant's own Latin parallel suggests, and use it consistently.

NOTES under this method say briefly where you restated or divided a sentence, resolved an ambiguity, smoothed an irregularity, or supplied a word, and give the German behind any term whose rendering is a choice. You may say why a construction was resolved the way it was. Flag any doubtful reading.

TERMS (as Kemp Smith's own text shows them; the rest is left to the method above):
${kempTerms.map(([g, e]) => `${g} = ${e}`).join('\n')}`;

  return {
    guyer: {
      label: 'Guyer–Wood principles',
      citation: 'Paul Guyer and Allen W. Wood, Critique of Pure Reason (Cambridge Edition, 1998)',
      tagline: 'literal; one English word per German term; Kant’s sentences kept whole',
      principles: guyerPrinciples, terms: guyerTerms, system: guyerSystem,
    },
    kemp: {
      label: 'Kemp Smith principles',
      citation: 'Norman Kemp Smith, Immanuel Kant’s Critique of Pure Reason (Macmillan, 1929)',
      tagline: 'faithful to the sense; readable English; tangled sentences resolved',
      principles: kempPrinciples, terms: kempTerms, system: kempSystem,
    },
  };
})();
