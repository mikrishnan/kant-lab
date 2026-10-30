/* ─────────────────────────────────────────────────────────────────────────────
   The logical principles that principle-search.html looks for, with the
   German and Latin forms under which the texts name them. Hand-curated: edit it
   directly. The division into three groups is set out, with its reasons, in
   notes/classification.md; this file follows it.

   PRINCIPLE_GROUPS: the three groups, by what a principle governs.
     1  Judging    whether a single judgement is true in its form
     2  Inferring  whether one judgement follows from another
     3  Things     what holds of objects: ontology, outside logic

   PRINCIPLE_LEXICON is a list of principles, in the order the page shows them.

     id      stable slug, used in the page's URL
     was     older slugs that now lead here, so that links made before the
             regrouping of October 2026 still open the right principle
     group   '1', '2' or '3'
     en      the English name. A translation: the texts contain no English
     enAlt   other English names a user might type
     note    optional: why the principle stands where it does, shown in the chart
     forms   the forms the texts use, one spelling each:
               t     the words exactly as the transcription prints them.
                     Matched case-insensitively, as whole words, across line
                     breaks; otherwise literally, so that "Satz des Wiederspruchs"
                     and "Satz des Widerspruchs" are two forms, not one
               lang  'de' or 'la'
               kind  'name'        the principle's name
                     'formula'     its stock statement (nihil est sine ratione)
                     'paraphrase'  a wording that states it without naming it
               not   optional: words that, following t, make it something else,
                     separated by |. principium identitatis indiscernibilium is
                     not the principle of identity

   A form is added here only once it has been found in the texts the page
   searches, with a passage where it occurs. Spellings follow the transcription,
   Kant's included: Wiederspruch, Identitaet, durchgangig.
   ───────────────────────────────────────────────────────────────────────────── */

const PRINCIPLE_GROUPS = {
  1: 'Judging',
  2: 'Inferring',
  3: 'Things',
};

const PRINCIPLE_GROUP_NOTES = {
  1: 'whether a single judgement is true in its form',
  2: 'whether one judgement follows from another',
  3: 'what holds of objects: ontology, outside logic',
};

const PRINCIPLE_LEXICON = [

  /* ── 1. Judging: the formal criteria of truth (Jäsche, AA 9:52–53) ───────── */

  { id: 'contradiction', group: '1',
    en: 'Principle of contradiction',
    enAlt: ['principle of non-contradiction', 'law of contradiction', 'law of non-contradiction', 'non-contradiction'],
    note: 'One criterion with identity in Jäsche (AA 9:52–53); kept as two here, as Baumgarten (Met. §§ 7, 11) and Kant’s notes treat them.',
    forms: [
      { t: 'Satz des Wiederspruchs',   lang: 'de', kind: 'name' },  // Refl. 2172
      { t: 'Satze des Wiederspruchs',  lang: 'de', kind: 'name' },  // Refl. 4035
      { t: 'Satzes des Wiederspruchs', lang: 'de', kind: 'name' },  // Refl. 3031
      { t: 'Satz des Widerspruchs',    lang: 'de', kind: 'name' },  // Jäsche AA 9:52
      { t: 'Satz des Widerspruches',   lang: 'de', kind: 'name' },  // Wiener AA 24:826
      { t: 'Saz des Wiederspruchs',    lang: 'de', kind: 'name' },  // Busolt AA 24:673
      { t: 'Satz der contradictio',    lang: 'de', kind: 'name' },  // Refl. 5686
      { t: 'Principium der Contradiction', lang: 'de', kind: 'name' },  // Busolt
      { t: 'Satzes des Widerspruchs',  lang: 'de', kind: 'name' },  // Jäsche AA 9:147
      { t: 'Satzes [des Wiederspruchs]', lang: 'de', kind: 'name' },  // Refl. 2093, the last two words struck out by Kant
      { t: 'Princip des Widerspruchs', lang: 'de', kind: 'name' },  // Jäsche AA 9:6 (Jäsche's Preface)
      { t: 'Grundsatze. 1. Des Wiederspruchs', lang: 'de', kind: 'name' },  // Refl. 5148
      { t: 'Grundsatze aller Urtheile: den des Wiederspruchs', lang: 'de', kind: 'name' },  // Refl. 5562
      // Named together with identity, identity first. Added 30 October 2026
      { t: 'Satz der Identitaet und des Wiederspruchs', lang: 'de', kind: 'name' },  // Refl. 3928
      { t: 'Satz der Identitaet und des Widerspruchs',  lang: 'de', kind: 'name' },  // Refl. 4370
      { t: 'Satz der Identitaet und Wiederspruchs',     lang: 'de', kind: 'name' },  // Refl. 4676
      { t: 'Satz der Identitaet und contradiction',     lang: 'de', kind: 'name' },  // Refl. 4872
      { t: 'Satze der Identitaet und des Wiederspruch', lang: 'de', kind: 'name' },  // Refl. 3745
      { t: 'Sätzen der Identitaet und des Wiederspruchs', lang: 'de', kind: 'name' },  // Refl. 3716
      { t: 'Satz der Identität und des Widerspruchs',   lang: 'de', kind: 'name' },  // Jäsche AA 9:7 (Preface)
      { t: 'Principien der Identität und des Widerspruchs', lang: 'de', kind: 'name' },  // Jäsche AA 9:6 (Preface)
      { t: 'Grundsätze der Identität und des Widerspruches', lang: 'de', kind: 'name' },  // Jäsche AA 9:7 (Preface)
      { t: 'principium contradictionis', lang: 'la', kind: 'name' },  // Met. § 7
      { t: 'principio contradictionis',  lang: 'la', kind: 'name' },  // Refl. 2142
      { t: 'princip contradictionis',    lang: 'la', kind: 'name' },  // Refl. 5274
      // Named together with identity, identity first. Added 30 October 2026
      { t: 'principium identitatis vel contradictionis', lang: 'la', kind: 'name' },  // Refl. 3741
      { t: 'principium identitatis und contradictionis', lang: 'la', kind: 'name' },  // Refl. 4655
      { t: 'principia identitatis et contradictionis',   lang: 'la', kind: 'name' },  // Refl. 3935
      { t: 'principio identitatis et contradictionis',   lang: 'la', kind: 'name' },  // Refl. 5176
      { t: 'principium der identitaet und der contradiction', lang: 'la', kind: 'name' },  // Refl. 3716
      { t: 'Principium Identitatis, und Contradictionis', lang: 'la', kind: 'name' },  // Blomberg AA 24:233
    ] },

  { id: 'identity', group: '1',
    en: 'Principle of identity',
    enAlt: ['law of identity', 'principle of position'],
    forms: [
      { t: 'Satz der Identitaet',   lang: 'de', kind: 'name' },  // Blomberg AA 24:88
      { t: 'Satze der Identitaet',  lang: 'de', kind: 'name' },  // Refl. 3710
      { t: 'Sätzen der Identitaet', lang: 'de', kind: 'name' },
      { t: 'Regel der Identitaet',  lang: 'de', kind: 'name' },  // Refl. 3942
      { t: 'Principium der Identitaet', lang: 'de', kind: 'name' },
      { t: 'Gesez in der Identitaet', lang: 'de', kind: 'name' },  // Blomberg AA 24:233
      { t: 'Satz des Widerspruchs und der Identität', lang: 'de', kind: 'name' },  // Jäsche AA 9:52
      { t: 'Satz der Identität',    lang: 'de', kind: 'name' },  // Jäsche
      { t: 'principium identitatis', lang: 'la', kind: 'name', not: 'indiscernibilium' },  // Blomberg AA 24:279
      { t: 'principio identitatis',  lang: 'la', kind: 'name', not: 'indiscernibilium' },
      { t: 'principia identitatis',  lang: 'la', kind: 'name' },
      { t: 'principium positionis',  lang: 'la', kind: 'name' },  // Met. § 11
      { t: 'principium contradictionis und identitatis', lang: 'la', kind: 'name' },  // Jäsche AA 9:52
      { t: 'Principium Identitatis, und Contradictionis', lang: 'la', kind: 'name' },  // Blomberg AA 24:233
    ] },

  { id: 'sufficient-reason', group: '1',
    en: 'Principle of sufficient reason',
    enAlt: ['principle of reason', 'law of sufficient reason', 'sufficient reason', 'principle of ground'],
    note: 'Also the principle of the hypothetical syllogism (Jäsche AA 9:129); its real use, of things, belongs with group 3.',
    forms: [
      { t: 'Satz des zureichenden Grundes',  lang: 'de', kind: 'name' },  // Wiener AA 24:826
      { t: 'Satze des zureichenden Grundes', lang: 'de', kind: 'name' },
      { t: 'Gesetz des zureichenden Grundes', lang: 'de', kind: 'name' },  // Refl. 3922
      { t: 'Principio des zureichenden Grundes', lang: 'de', kind: 'name' },  // Wiener
      { t: 'Princip des Grundes', lang: 'de', kind: 'name' },  // Refl. 3030
      { t: 'Satz des Grundes', lang: 'de', kind: 'name' },  // Jäsche AA 9:129
      { t: 'nichts ist ohne Grund', lang: 'de', kind: 'formula' },  // Wiener AA 24:938
      { t: 'principium rationis sufficientis', lang: 'la', kind: 'name' },  // Met. § 22
      { t: 'principium rationis', lang: 'la', kind: 'name' },  // Met. § 20
      { t: 'principio rationis',  lang: 'la', kind: 'name' },
      { t: 'nihil est sine ratione', lang: 'la', kind: 'formula' },  // Met. § 20
      { t: 'regula rationis determinantis', lang: 'la', kind: 'name' },  // Refl. 4334
    ] },

  { id: 'excluded-middle', group: '1',
    was: ['determination'],
    en: 'Principle of excluded middle',
    enAlt: ['law of excluded middle', 'excluded middle', 'principle of excluded third', 'excluded third', 'tertium non datur', 'principle of determination'],
    note: 'Includes the “principle of determination”: “unter zwey entgegengesetzten Urtheilen ist eines wahr” (Refl. 3063). Also the principle of the disjunctive syllogism (Jäsche AA 9:130).',
    forms: [
      { t: 'Satz des ausschließenden Dritten', lang: 'de', kind: 'name' },  // Jäsche AA 9:53
      { t: 'Grundsatz des ausschließenden Dritten', lang: 'de', kind: 'name' },  // Jäsche AA 9:130
      { t: 'Principium der Ausschließung jedes Dritten', lang: 'de', kind: 'name' },  // Jäsche AA 9:104
      { t: 'Princip der Bestimmung', lang: 'de', kind: 'name', not: 'der Dinge' },  // Refl. 3063; in Refl. 5202 it means sufficient reason
      { t: 'kein Drittes', lang: 'de', kind: 'paraphrase' },  // Refl. 3063, 5164
      { t: 'principium exclusi tertii', lang: 'la', kind: 'name' },  // Met. § 10
      { t: 'principium exclusi medii',  lang: 'la', kind: 'name' },  // Refl. 3751
      { t: 'principio exclusi medii',   lang: 'la', kind: 'name' },  // Refl. 3030
      { t: 'exclusi medii', lang: 'la', kind: 'name' },  // Refl. 2178
      { t: 'exclusi tertii', lang: 'la', kind: 'name' },  // Jäsche AA 9:104
      { t: 'tertium non datur', lang: 'la', kind: 'formula' },  // Met. § 114
      { t: 'non datur tertium', lang: 'la', kind: 'formula' },  // Refl. 4300
      { t: 'principium determinationis', lang: 'la', kind: 'name' },  // Refl. 5154
    ] },

  /* ── 2. Inferring: one principle per kind of syllogism (Jäsche, AA 9:122–130) */

  { id: 'categorical', group: '2',
    was: ['nota-notae', 'dictum-de-omni'],
    en: 'Principle of the categorical syllogism',
    enAlt: ['nota notae', 'mark of a mark', 'dictum de omni et nullo', 'what holds of all and of none', 'categorical syllogism'],
    note: 'The dictum de omni et nullo is derived from nota notae, and is not the highest principle (Jäsche AA 9:123).',
    forms: [
      { t: 'Was dem Merkmale einer Sache zukommt', lang: 'de', kind: 'formula' },  // Jäsche AA 9:123
      { t: 'nota notae est nota rei ipsius', lang: 'la', kind: 'formula' },  // Refl. 3217
      { t: 'nota notae rei est nota rei',    lang: 'la', kind: 'formula' },  // Blomberg
      { t: 'nota notae', lang: 'la', kind: 'formula' },
      { t: 'repugnans notae repugnat rei ipsi', lang: 'la', kind: 'formula' },  // Busolt AA 24:673
      { t: 'repugnans notae', lang: 'la', kind: 'formula' },
      { t: 'dictum de omni et nullo', lang: 'la', kind: 'name' },  // Meier § 363
      { t: 'dictum de omni', lang: 'la', kind: 'name' },
      { t: 'dictum de nullo', lang: 'la', kind: 'name' },  // Busolt
    ] },

  { id: 'hypothetical', group: '2',
    en: 'Principle of the hypothetical syllogism',
    enAlt: ['modus ponens', 'modus tollens', 'hypothetical syllogism', 'from ground to consequence'],
    note: 'Jäsche names it “der Satz des Grundes” (AA 9:129): sufficient reason, used in inference.',
    forms: [
      { t: 'Princip der hypothetischen Schlüsse', lang: 'de', kind: 'name' },  // Jäsche AA 9:129
      { t: 'a ratione ad rationatum', lang: 'la', kind: 'formula' },  // Refl. 3218
      { t: 'a negatione rationati',   lang: 'la', kind: 'formula' },  // Refl. 3218
      { t: 'modus ponens',  lang: 'la', kind: 'name' },  // Wiener AA 24:935
      { t: 'modus tollens', lang: 'la', kind: 'name' },
      { t: 'modum ponentem',  lang: 'la', kind: 'name', not: '(oder' },  // Blomberg AA 24:285; at Jäsche AA 9:130 it is disjunctive
      { t: 'modum tollentem', lang: 'la', kind: 'name', not: '(tollendo' },  // Busolt AA 24:677
      { t: 'sublato consequente', lang: 'la', kind: 'formula' },  // Busolt AA 24:678
      { t: 'a veritate antecedentis', lang: 'la', kind: 'formula' },  // Busolt AA 24:677
      { t: 'a remotione consequentis', lang: 'la', kind: 'formula' },  // Busolt; the dilemma, Jäsche AA 9:130
    ] },

  { id: 'disjunctive', group: '2',
    en: 'Principle of the disjunctive syllogism',
    enAlt: ['disjunctive syllogism'],
    note: 'Jäsche names it “der Grundsatz des ausschließenden Dritten” (AA 9:130): excluded middle, used in inference.',
    forms: [
      { t: 'Princip der disjunctiven Schlüsse', lang: 'de', kind: 'name' },  // Jäsche AA 9:130
      { t: 'a contradictorie oppositorum negatione', lang: 'la', kind: 'formula' },  // Refl. 3218
    ] },

  /* ── 3. Things: Baumgarten's ontology, outside logic ─────────────────────── */

  { id: 'thoroughgoing-determination', group: '3',
    en: 'Principle of thoroughgoing determination',
    enAlt: ['principle of complete determination', 'thoroughgoing determination', 'complete determination', 'principle of thorough completeness'],
    note: 'Of things, with all possible predicates; its logical counterpart is excluded middle, the principle of determination (Refl. 3063, 5154).',
    forms: [
      { t: 'Princip der durchgängigen Bestimmung', lang: 'de', kind: 'name' },  // Wiener AA 24:931
      { t: 'Princip der durchgangigen Bestimmung', lang: 'de', kind: 'name' },  // Refl. 6209
      { t: 'Grundsatz der durchgangigen Bestimung', lang: 'de', kind: 'name' },  // Refl. 6299
      { t: 'durchgangigen determination', lang: 'de', kind: 'name' },  // Refl. 3063
      { t: 'principium omnimodae determinationis', lang: 'la', kind: 'name' },  // Refl. 5154
      { t: 'principio omnimodae determinationis',  lang: 'la', kind: 'name' },
    ] },

  { id: 'indiscernibles', group: '3',
    en: 'Principle of the identity of indiscernibles',
    enAlt: ['identity of indiscernibles', 'principle of indiscernibles', 'indiscernibles'],
    forms: [
      { t: 'principium (identitatis) indiscernibilium', lang: 'la', kind: 'name' },  // Met. § 269
      { t: 'principium identitatis indiscernibilium',   lang: 'la', kind: 'name' },
      { t: 'principium indiscernibilium', lang: 'la', kind: 'name' },
      { t: 'principii indiscernibilium',  lang: 'la', kind: 'name' },  // Refl. 2093
    ] },

  { id: 'negatae-totalis', group: '3',
    en: 'Principles of denied total dissimilarity, congruence, similarity and equality',
    enAlt: ['principle of denied total dissimilarity', 'principle of denied total congruence', 'principle of denied total equality'],
    forms: [
      { t: 'principium negatae totalis dissimilitudinis', lang: 'la', kind: 'name' },  // Met. § 268
      { t: 'principium negatae totalis congruentiae',     lang: 'la', kind: 'name' },  // Met. § 270
      { t: 'principium negatae totalis aequalitatis',     lang: 'la', kind: 'name' },  // Met. § 272
      { t: 'negatae totalis similitudinis',               lang: 'la', kind: 'name' },  // Met. § 271
    ] },

  { id: 'individuation', group: '3',
    en: 'Principle of individuation',
    enAlt: ['individuation', 'haecceity'],
    forms: [
      { t: 'principium individuationis', lang: 'la', kind: 'name' },  // Met. § 151
    ] },

  { id: 'rationati', group: '3',
    en: 'Principle of the consequent',
    enAlt: ['principle of consequence', 'nothing without consequences', 'principle of the grounded'],
    note: 'Every ground has consequences: a principle about grounds in things (Met. § 23).',
    forms: [
      { t: 'principium rationati', lang: 'la', kind: 'name' },  // Met. § 23
      { t: 'nihil est sine rationato', lang: 'la', kind: 'formula' },
    ] },

  { id: 'utrimque-connexorum', group: '3',
    en: 'Principle of things connected both ways',
    enAlt: ['principle of mutual connexion', 'principle of things connected on both sides'],
    forms: [
      { t: 'principium utrimque connexorum', lang: 'la', kind: 'name' },  // Met. § 24
    ] },

  { id: 'positing-ground', group: '3',
    en: 'Positing and removing the ground',
    enAlt: ['posita ratione', 'sublata ratione'],
    note: 'Reads like modus ponens, but is Baumgarten’s ontology of grounds (Met. §§ 30–31).',
    forms: [
      { t: 'posita ratione',  lang: 'la', kind: 'formula', not: 'ponitur aliud' },  // Met. § 30; Refl. 3752 says only that ground and consequence differ
      { t: 'sublata ratione', lang: 'la', kind: 'formula' },  // Met. § 31
    ] },

  { id: 'modal', group: '3',
    en: 'Modal rules',
    enAlt: ['from actuality to possibility', 'ab esse ad posse', 'a posse ad esse'],
    note: 'Doubtful: rules of inference, but found only in Baumgarten’s ontology (Met. § 57) and Kant’s notes on it.',
    forms: [
      { t: 'ab esse ad posse', lang: 'la', kind: 'formula' },  // Met. § 57
      { t: 'a posse ad esse',  lang: 'la', kind: 'formula' },  // Refl. 3898
    ] },
];
