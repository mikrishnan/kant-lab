# What counts as each form of judgment

*The criteria the judgment finder works by, settled point by point with the tool's owner
on 2 November 2026 and implemented the same day. Not a `SPEC.md`: the repository no
longer keeps specs, and this is a statement of the criteria rather than of the tool's
behaviour. It is written to be applied to any text of the school tradition, not only to
the three transcripts below, so the rules are stated in terms of the structure of a
judgment and not in terms of these works' vocabulary. Where a rule is not implemented,
or is implemented by a proxy, it says so.*

## Question

Kant's table of judgments (KrV A70/B95) divides every judgment on four heads — quantity,
quality, relation, modality. The three logic transcripts of AA XXIV teach that table and
illustrate it in passing, but the examples are scattered through 800 pages of lecture
prose and the Academy Edition indexes none of them. The tool finds the judgments the
lectures use as examples, labels each on the four heads, and says on what ground it
assigned each label.

## Sources

- **The lectures.** [../../data/logik-blomberg-24.js](../../data/logik-blomberg-24.js),
  [../../data/logik-busolt-24.js](../../data/logik-busolt-24.js) and
  [../../data/logik-wiener-24.js](../../data/logik-wiener-24.js): `LOGIK_BLOMBERG`,
  `LOGIK_BUSOLT`, `LOGIK_WIENER`. Loaded with plain `script src`, never copied.
- **The doctrine, in the lectures' own words.** Where a rule below rests on something the
  transcripts say, the rule cites it. The quality criterion is the *Wiener Logik* at
  AA 24:929–931; the remark that singular judgments may be counted as universal is
  *Logik Busolt* at AA 24:665; the division of the heads is Busolt at AA 24:665–672.

## 1. What a judgment is, here

1.1 The unit is a **simple sentence**: one subject and one predicate, no subordinate
clause, at most fourteen words. Only a hypothetical or a disjunctive may have two
clauses, for the ground–consequence and the division respectively; thirty words and two
finite verbs are then allowed.

1.2 A span the text draws as an inference is split into its judgments at a comma before a
new capitalised subject with its own verb, or before *also*, *folglich*, *mithin*,
*demnach*, *ergo*, *igitur*. Each resulting judgment is labelled on its own.

1.3 A sentence is an **example** when its content carries no weight in the lecture — it
shows a form rather than making a point. A sentence whose subject is the lecture's own
subject matter (cognition, reason, judgment, truth, science, proof, method) is making the
point and is not an example, and neither is one in an expounding voice (*man nennt*, *wir
sehen*, *ich sage*). A sentence is admitted when the text sets it off (*z.E.*, *z.B.*,
*zum Beispiel*), or it stands in a syllogism, or its subject is one of the stock subjects
of school-logic examples.

1.4 **Fails at present.** 1.3's last clause is carried by a hand-written list of stock
subjects, derived from the subjects of the text's own marked examples. It is a proxy for
the criterion, not the criterion, and it is the weakest rule in this spec.

## 2. Every judgment carries four labels

2.1 One label from each head — quantity, quality, relation, modality — on every judgment,
always.

2.2 A label is assigned from what a cue **scopes over**, never from the presence of a word
somewhere in the sentence. Word lists are confined to one table at the head of the code,
so that a new text extends the table rather than the logic.

2.3 German and Latin are one criterion with two vocabularies. The lectures mix them
inside a single sentence and the rules take no notice of which is which.

## 3. Quantity — how much of the subject's sphere the predicate is said of

3.1 **Universal.** The predicate holds of the whole sphere: *alle*, *jeder*, *omnis*,
*omne*, and *kein*, *nullus*, which make a universal negative.

3.2 **Particular.** Of part of it: *einige*, *etliche*, *manche*, *quidam*, *aliquis*,
*ein Theil*.

3.3 **Singular.** The subject is one individual: a proper name, or a demonstrative with a
noun.

3.4 A bare plural with no quantifier is **universal** — *Geister sind unsterblich*. The
tradition calls this indefinite; the lectures use such sentences as universals, and no separate label is introduced for them.

3.5 A definite article on an abstract noun is **universal**, not singular — *Die Tugend
ist eine Fertigkeit*, *Die Seele ist einfach*. The subject is one concept taken in its
whole sphere.

3.6 A singular judgment is labelled **singular** and is not collapsed into universal.
Busolt reports at AA 24:665 that singular judgments may be counted as universal, and in
general logic they are equivalent; the table of judgments belongs to transcendental
logic, where the distinction is the point of the third moment. The remark is recorded in
the tool, not acted on. A proper name is recognised from a list, which German's capitalising of every noun makes unavoidable; Open question 6 records it.

## 4. Quality — what the copula does

4.1 The criterion is **where the negation sits**, and it is the *Wiener Logik*'s own
(AA 24:930): "Ein verneinendes Urtheil ist nicht ein jedes Urtheil, das negativ ist,
sondern ein solches verneinendes Urtheil, wo die negation die copula afficirt. Ein
solches Urtheil aber, wo sie nicht die copula afficirt, sondern das praedicat, wie bey
einem unendlichen Urtheil geschieht, und die copula also ohne alle negation ist, ist
demnach ein bejahendes Urtheil."

4.2 **Negative.** The negation affects the copula: *Die Seele ist nicht sterblich*.

4.3 **Infinite.** The copula is clean and the negation is inside the predicate, so that
the judgment says only what the subject is not and places it in the unlimited remaining
sphere. Wiener, AA 24:930: "Sie sagen nur immer, was nicht ist"; and AA 24:929 on the
soul — not *est immortalis*, but: the soul may be counted among all the concepts thought
outside the concept of mortality.

4.4 **Affirmative.** Neither.

4.5 A negation inside a subordinate part does not make the judgment negative. Scope is the main copula: in a hypothetical, quality is read off the consequent, and in a division off the first disjunct, since that is the one the copula governs.

4.6 An explicit *nicht-B*, *non-B* or solid *Nicht-B* predicate is infinite. The three
transcripts contain no hyphenated instance and one solid one, *Nichtsterbliche* at
AA 24:671, where it is a subject term in a contraposition.

4.7 A predicate in *un-* is **infinite** when the positive stem is itself a predicate the
work uses, so that the *un-* word is formed by negating something in play — *unsterblich*
against *sterblich*, *unvollkommen* against *vollkommen*. It is **affirmative** when the
word names a property with no positive counterpart in use: *undurchdringlich*, which
Kant predicates of body as a real property, has no *durchdringlich* anywhere in the three
transcripts.

4.8 Overriding 4.7, a predicate naming a **divine attribute is affirmative**, whatever its
morphology. *Unendlich*, *unveränderlich*, *unermeßlich*, *unbegreiflich*, *unwandelbar*
name perfections, not privations, and the tradition treats them as positive. The list
lives with the other word tables and is meant to be extended.

## 5. Relation — what is related to what

5.1 **Categorical.** A predicate is related to a subject.

5.2 **Hypothetical.** One judgment is related to another as ground to consequence, and
what is asserted is the consequence, not either member. Both members must themselves be
judgments.

5.3 **Disjunctive.** Members divide one sphere: *entweder … oder*, and equally a divided
predicate without *entweder* — *A ist b oder c*, *A ist b oder nicht-b*.

5.4 A disjunction requires the disjuncts to be **co-predicates of one subject or
co-subjects of one predicate**. An appositional *oder*, which names the same thing twice
— *Kanon oder ein Inbegrif von Regeln* — is not a division. A division in the predicate counts on its own; one in the subject counts only where *entweder* marks it.

5.5 A judgment is disjunctive when it is **presented as** a division. Whether the division
is exhaustive and exclusive, as Kant requires of a good one, is not a question the tool
answers.

5.6 Hypothetical takes precedence over disjunctive where both are present.

## 6. Modality — the value of the copula with respect to thinking

6.1 Modality is the attitude to the **whole assertion**. A modal word inside the predicate
does not by itself set it.

6.2 **The modal governs a copula** — *seyn*, *sein*, *bleiben*, *heißen* with a predicate
— and so modalises the predication: *Die Seele muß einfach seyn* is apodictic; *kan
jemand ein Gelahrter ohne gesunden Verstand seyn* is problematic.

6.3 **The modal governs a lexical verb** — *Der Mensch kann irren*, *man muß selbst
dencken* — and the capacity or duty is part of what is predicated, asserted flatly:
**assertoric**. A passive, *werden* with a participle, counts as a lexical verb: *kan mit
Handwerckeren verglichen werden* ascribes a capacity.

6.4 An adverbial over the whole assertion sets the modality whatever the verb does:
*vielleicht*, *wahrscheinlich*, *ohne Zweifel*, *es ist möglich daß*, *es ist nothwendig
daß*, *schlechterdings*, *necessario*.

6.5 **Soll is assertoric**, even governing a copula. It states a norm or an obligation
laid on the subject, not the necessity of a predication, and the lectures use it
overwhelmingly for precept — *wie man dencken soll*. Kant's practical necessitation is
not the apodictic modality of the third head. Open question 3 records the doubt.

6.6 The members of a hypothetical or a disjunctive, taken singly, are **problematic**,
which is Kant's doctrine and a structural rule rather than a lexical one. The compound judgment as a whole is assertoric, and that is the part the tool acts on: it never shows a member of a compound as a judgment of its own, so it has no occasion to apply the first half of the rule.

## 7. What the tool says about its own grounds

7.1 Every label carries how it was arrived at, and shows it: **named**, the text calls the
judgment that form within a few lines of it; **premise** or **conclusion**, it stands in a
syllogism that goes through, which fixes its quantity and quality; **speculated**, nothing
says what it is and the form follows from these rules alone.

7.2 A syllogism goes through when the classical rules for quantity and quality hold — no
two negative premises, no two particular premises, the conclusion following the weaker
part — reading a singular judgment as universal for that purpose only, on Busolt's remark
at AA 24:665. Where the labels would make the inference invalid, the syllogism is not used
as a ground.

7.3 Nothing a model or a rule worked out is presented as the Academy Edition's. This is the
repository's attested-versus-inferred rule; the root [CLAUDE.md](../../CLAUDE.md) states it.

## 8. Behaviour

8.1 The three transcripts stand in tabs on the left, with a section picker, the AA page
and Blomberg's Meier § in the gutter, and the Academy Edition's page and manuscript
markers inline.

8.2 The right-hand panel searches both ways: a form, or a combination of forms with at
most one from each head, gives its examples; keywords give the examples containing them,
labelled.

8.3 Clicking a sentence in the transcript labels it by the same rules, and says whether it
is one of the examples and, if not, which test it failed.

8.4 Each example is shown with an English translation beneath it, marked as machine
translation.

8.5 The rules of §§2–6 are one function, `classify`, which reads a judgment into its
subject phrase, its finite verb and what follows, and then applies each head to the part
that head is about. The word tables it consults — quantifiers, demonstratives, names,
divine attributes, modal adverbs — stand above it together, so that a new text extends
the tables rather than the logic. The test of 4.7, whether a privative's positive stem is
a predicate the text itself uses, is computed from whatever works are loaded, so it
travels with the text and is not a fact about these three transcripts.

## Out of scope

- Judging whether a division is a good one (5.5), whether a definition is correct, or
  whether an example is well chosen.
- The Jäsche *Logik* and the other logic transcripts of AA XXIV. The Logic Portal
  catalogues those.
- Any judgment that is not a simple sentence by 1.1 — the lectures' long periods are left
  to the reader.

## Open questions

1. **Un- predicates that are neither clearly privative nor clearly positive.** *Unrecht*
   has *recht* in the corpus 109 times, so 4.7 makes it infinite, though wrongness is
   arguably a positive moral quality. Left as 4.7 decides it, pending a ruling.
2. **Unmöglich and ungewiß.** 4.7 makes them infinite in quality, but their work in the
   lectures is modal. Where they stand in a frame — *es ist unmöglich, daß …* — the *es*
   is no subject and the judgment is the embedded one, so the frame should set modality
   under 6.4 and the quality should be read off the embedded judgment. Not yet settled for
   the plain predicative use, *dieser Satz ist unmöglich*.
3. **Soll**, 6.5. Decided by the tool's author, not by its owner.
4. **Whether the stock-subject list of 1.4 can be replaced** by something that is the
   criterion rather than a proxy for it.
5. **The indefinite article.** 3.4 and 3.5 cover the bare plural and the definite
   article; *Ein Körper ist ein ausgedehntes Wesen* is covered by neither. The tool reads
   it as universal, on the ground that such a sentence is a definition and says something
   of every body. School logic would more often call it indefinite.
6. **Proper names come from a list** — *Gott*, *Caius*, *Socrates*, *Caesar* and the rest
   — because German capitalises every noun, so nothing in the writing distinguishes a
   name from a common noun. A name the list does not hold makes its judgment universal by
   the default of 3.4. The list stands beside the other word tables and is meant to grow.
