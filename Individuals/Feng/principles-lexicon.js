/* ─────────────────────────────────────────────────────────────────────────────
   The logical principles that principles-search.html looks for, with the
   German and Latin forms under which the texts in data/ (and Meier's Auszug)
   name them. Hand-curated: edit it directly.

   PRINCIPLE_LEXICON is a list of principles, in the order the page shows them.

     id      stable slug, used in the page's URL
     group   A  the first principles (Baumgarten, Metaphysica §§ 7–24)
             B  determination and the indiscernibles
             C  principles of inference
     en      the English name. A translation: the texts contain no English
     enAlt   other English names a user might type
     forms   the forms the texts use, one spelling each:
               t     the words exactly as the transcription prints them.
                     Matched case-insensitively, as whole words, across line
                     breaks; otherwise literally, so that "Satz des Wiederspruchs"
                     and "Satz des Widerspruchs" are two forms, not one
               lang  'de' or 'la'
               kind  'name'        the principle's name
                     'formula'     its stock statement (nihil est sine ratione)
                     'paraphrase'  a wording that states it without naming it
               not   optional: words that, following t, make it a different
                     principle (principium identitatis indiscernibilium is not
                     the principle of identity)

   A form is added here only once it has been seen in the texts. Spellings follow
   the transcription, Kant's included: Wiederspruch, Identitaet, durchgangig.
   ───────────────────────────────────────────────────────────────────────────── */

const PRINCIPLE_LEXICON = [

  /* ── A. The first principles ─────────────────────────────────────────────── */

  { id: 'contradiction', group: 'A',
    en: 'Principle of (non-)contradiction',
    enAlt: ['principle of contradiction', 'principle of non-contradiction', 'law of contradiction', 'law of non-contradiction', 'non-contradiction'],
    forms: [
      { t: 'Satz des Wiederspruchs',   lang: 'de', kind: 'name' },
      { t: 'Satze des Wiederspruchs',  lang: 'de', kind: 'name' },
      { t: 'Satzes des Wiederspruchs', lang: 'de', kind: 'name' },
      { t: 'Satz des Widerspruchs',    lang: 'de', kind: 'name' },
      { t: 'Satz des Widerspruches',   lang: 'de', kind: 'name' },
      { t: 'Satz der contradictio',    lang: 'de', kind: 'name' },
      { t: 'Principium der Contradiction', lang: 'de', kind: 'name' },
      { t: 'principium contradictionis', lang: 'la', kind: 'name' },
      { t: 'principio contradictionis',  lang: 'la', kind: 'name' },
      { t: 'Principium Identitatis, und Contradictionis', lang: 'la', kind: 'name' },
    ] },

  { id: 'sufficient-reason', group: 'A',
    en: 'Principle of sufficient reason',
    enAlt: ['principle of reason', 'law of sufficient reason', 'sufficient reason'],
    forms: [
      { t: 'Satz des zureichenden Grundes',  lang: 'de', kind: 'name' },
      { t: 'Satze des zureichenden Grundes', lang: 'de', kind: 'name' },
      { t: 'Gesetz des zureichenden Grundes', lang: 'de', kind: 'name' },
      { t: 'Principio des zureichenden Grundes', lang: 'de', kind: 'name' },
      { t: 'Princip des Grundes', lang: 'de', kind: 'name' },
      { t: 'nichts ist ohne Grund', lang: 'de', kind: 'formula' },
      { t: 'principium rationis sufficientis', lang: 'la', kind: 'name' },
      { t: 'principium rationis', lang: 'la', kind: 'name' },
      { t: 'principio rationis',  lang: 'la', kind: 'name' },
      { t: 'nihil est sine ratione', lang: 'la', kind: 'formula' },
      { t: 'regula rationis determinantis', lang: 'la', kind: 'name' },
    ] },

  { id: 'identity', group: 'A',
    en: 'Principle of identity',
    enAlt: ['law of identity', 'principle of position'],
    forms: [
      { t: 'Satz der Identitaet',   lang: 'de', kind: 'name' },
      { t: 'Satze der Identitaet',  lang: 'de', kind: 'name' },
      { t: 'Sätzen der Identitaet', lang: 'de', kind: 'name' },
      { t: 'Regel der Identitaet',  lang: 'de', kind: 'name' },
      { t: 'Principium der Identitaet', lang: 'de', kind: 'name' },
      { t: 'Gesez in der Identitaet', lang: 'de', kind: 'name' },
      { t: 'principium identitatis', lang: 'la', kind: 'name', not: 'indiscernibilium' },
      { t: 'principio identitatis',  lang: 'la', kind: 'name', not: 'indiscernibilium' },
      { t: 'principia identitatis',  lang: 'la', kind: 'name' },
      { t: 'principium positionis',  lang: 'la', kind: 'name' },
      { t: 'Principium Identitatis, und Contradictionis', lang: 'la', kind: 'name' },
    ] },

  { id: 'excluded-middle', group: 'A',
    en: 'Principle of excluded middle',
    enAlt: ['law of excluded middle', 'excluded middle', 'principle of excluded third', 'excluded third', 'tertium non datur'],
    forms: [
      { t: 'kein Drittes', lang: 'de', kind: 'paraphrase' },
      { t: 'principium exclusi tertii', lang: 'la', kind: 'name' },
      { t: 'principium exclusi medii',  lang: 'la', kind: 'name' },
      { t: 'principio exclusi medii',   lang: 'la', kind: 'name' },
      { t: 'exclusi medii', lang: 'la', kind: 'name' },
      { t: 'tertium non datur', lang: 'la', kind: 'formula' },
      { t: 'non datur tertium', lang: 'la', kind: 'formula' },
    ] },

  { id: 'rationati', group: 'A',
    en: 'Principle of the consequent',
    enAlt: ['principle of consequence', 'nothing without consequences', 'principle of the grounded'],
    forms: [
      { t: 'principium rationati', lang: 'la', kind: 'name' },
      { t: 'nihil est sine rationato', lang: 'la', kind: 'formula' },
    ] },

  { id: 'utrimque-connexorum', group: 'A',
    en: 'Principle of things connected both ways',
    enAlt: ['principle of mutual connexion', 'principle of things connected on both sides'],
    forms: [
      { t: 'principium utrimque connexorum', lang: 'la', kind: 'name' },
    ] },

  /* ── B. Determination and the indiscernibles ─────────────────────────────── */

  { id: 'thoroughgoing-determination', group: 'B',
    en: 'Principle of thoroughgoing determination',
    enAlt: ['principle of complete determination', 'thoroughgoing determination', 'complete determination', 'principle of thorough completeness', 'thorough determination'],
    forms: [
      { t: 'Princip der durchgängigen Bestimmung', lang: 'de', kind: 'name' },
      { t: 'Princip der durchgangigen Bestimmung', lang: 'de', kind: 'name' },
      { t: 'Grundsatz der durchgangigen Bestimung', lang: 'de', kind: 'name' },
      { t: 'durchgangigen determination', lang: 'de', kind: 'name' },
      { t: 'principium omnimodae determinationis', lang: 'la', kind: 'name' },
      { t: 'principio omnimodae determinationis',  lang: 'la', kind: 'name' },
    ] },

  { id: 'determination', group: 'B',
    en: 'Principle of determination',
    enAlt: ['of two opposed judgements one is true', 'principle of determinability'],
    forms: [
      { t: 'Princip der Bestimmung', lang: 'de', kind: 'name' },
      { t: 'principium determinationis', lang: 'la', kind: 'name' },
    ] },

  { id: 'indiscernibles', group: 'B',
    en: 'Principle of the identity of indiscernibles',
    enAlt: ['identity of indiscernibles', 'principle of indiscernibles', 'indiscernibles'],
    forms: [
      { t: 'principium (identitatis) indiscernibilium', lang: 'la', kind: 'name' },
      { t: 'principium identitatis indiscernibilium',   lang: 'la', kind: 'name' },
      { t: 'principium indiscernibilium', lang: 'la', kind: 'name' },
      { t: 'principii indiscernibilium',  lang: 'la', kind: 'name' },
    ] },

  { id: 'negatae-totalis', group: 'B',
    en: 'Principles of total non-dissimilarity, non-congruence and non-equality',
    enAlt: ['principle of denied total dissimilarity', 'principle of denied total congruence', 'principle of denied total equality'],
    forms: [
      { t: 'principium negatae totalis dissimilitudinis', lang: 'la', kind: 'name' },
      { t: 'principium negatae totalis congruentiae',     lang: 'la', kind: 'name' },
      { t: 'principium negatae totalis aequalitatis',     lang: 'la', kind: 'name' },
      { t: 'negatae totalis similitudinis',               lang: 'la', kind: 'name' },
    ] },

  { id: 'individuation', group: 'B',
    en: 'Principle of individuation',
    enAlt: ['individuation', 'haecceity'],
    forms: [
      { t: 'principium individuationis', lang: 'la', kind: 'name' },
    ] },

  /* ── C. Principles of inference ──────────────────────────────────────────── */

  { id: 'dictum-de-omni', group: 'C',
    en: 'What holds of all and of none',
    enAlt: ['dictum de omni et nullo', 'principle of the categorical syllogism', 'dictum of all and none'],
    forms: [
      { t: 'dictum de omni et nullo', lang: 'la', kind: 'name' },
      { t: 'dictum de omni', lang: 'la', kind: 'name' },
      { t: 'dictum de nullo', lang: 'la', kind: 'name' },
    ] },

  { id: 'nota-notae', group: 'C',
    en: 'A mark of a mark is a mark of the thing itself',
    enAlt: ['nota notae', 'mark of a mark', 'what contradicts a mark contradicts the thing'],
    forms: [
      { t: 'nota notae est nota rei ipsius', lang: 'la', kind: 'formula' },
      { t: 'nota notae rei est nota rei',    lang: 'la', kind: 'formula' },
      { t: 'nota notae', lang: 'la', kind: 'formula' },
      { t: 'repugnans notae repugnat rei ipsi', lang: 'la', kind: 'formula' },
      { t: 'repugnans notae', lang: 'la', kind: 'formula' },
    ] },

  { id: 'hypothetical', group: 'C',
    en: 'Rules of hypothetical inference',
    enAlt: ['modus ponens', 'modus tollens', 'hypothetical syllogism', 'from ground to consequence'],
    forms: [
      { t: 'modus ponens',  lang: 'la', kind: 'name' },
      { t: 'modus tollens', lang: 'la', kind: 'name' },
      { t: 'a ratione ad rationatum', lang: 'la', kind: 'formula' },
      { t: 'a negatione rationati',   lang: 'la', kind: 'formula' },
      { t: 'posita ratione',  lang: 'la', kind: 'formula' },
      { t: 'sublata ratione', lang: 'la', kind: 'formula' },
    ] },

  { id: 'disjunctive', group: 'C',
    en: 'Rule of disjunctive inference',
    enAlt: ['disjunctive syllogism', 'principle of the disjunctive syllogism'],
    forms: [
      { t: 'a contradictorie oppositorum negatione', lang: 'la', kind: 'formula' },
    ] },

  { id: 'modal', group: 'C',
    en: 'Modal rules of inference',
    enAlt: ['from actuality to possibility', 'ab esse ad posse', 'a posse ad esse'],
    forms: [
      { t: 'ab esse ad posse', lang: 'la', kind: 'formula' },
      { t: 'a posse ad esse',  lang: 'la', kind: 'formula' },
    ] },
];

const PRINCIPLE_GROUPS = {
  A: 'The first principles',
  B: 'Determination and the indiscernibles',
  C: 'Principles of inference',
};
