/* ─────────────────────────────────────────────────────────────────────────────
   Parallel passages from the tradition, keyed to the §§ of G. F. Meier,
   Auszug aus der Vernunftlehre (AA XVI). Read by the Meier reader's Tradition
   tab.

   HAND-CURATED, not generated: edit this file directly. Only 10 of Meier's 563
   §§ are annotated so far; every other § shows a "no entries yet" placeholder.
   Adding entries is the intended way for this layer to grow, and needs no
   change to the reader.

   Shape
     TRADITION = { <§ number>: [ entry, entry, … ], … }

   Entry fields
     strata    wolff | scholastic | aristotle — picks the colour band, and must
               match one of the reader's three filter buttons
     author    "Christian Wolff"
     source    the work and its place, "Philosophia Rationalis, §§ 1–3"
     relation  source | parallel | contrast — how the passage stands to Meier's
     text      the annotation itself

   Adding an entry: copy an existing one, keep the field order above, and end
   it — and every § key's closing ] — with a comma, so that the next addition
   never has to edit a line someone else wrote. A new § goes in numerical
   order among the others.
   ───────────────────────────────────────────────────────────────────────────── */

const TRADITION = {
  1: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 1–3", relation: "source",
      text: "Wolff defines logic as the science of directing the use of reason in the cognition of truth. Meier follows this closely, though he widens the scope to include not just cognition but also its scholarly presentation (gelehrter Vortrag)." },
    { strata: "scholastic", author: "Thomas Aquinas", source: "In Posteriora Analytica, Proem.", relation: "parallel",
      text: "Aquinas describes logic as the 'art of arts' because it directs the act of reason from which all other arts proceed — the closest Scholastic parallel to Meier's definition of Vernunftlehre as foundational to all learned cognition." },
    { strata: "aristotle", author: "Aristotle", source: "Analytica Priora I.1, 24a", relation: "source",
      text: "Aristotle opens the Prior Analytics by announcing he will treat demonstration and demonstrative science. The discipline that governs correct reasoning (syllogistikē) is the ancestor of what Meier calls Vernunftlehre." },
  ],
  10: [
    { strata: "wolff", author: "Christian Wolff", source: "Psychologia Empirica, § 48", relation: "source",
      text: "Wolff's definition of Vorstellung (representation) as the power of the soul by which external things become internal is the direct source for Meier's opening of the first main section. Meier's image of the soul as a painter (malerische Geschicklichkeit) is a mild aesthetic embellishment of Wolff's more austere formulation." },
    { strata: "wolff", author: "G. W. Leibniz", source: "Monadology, §§ 14, 56", relation: "parallel",
      text: "Leibniz grounds all monadic activity in representation (perception) — every monad represents the universe from its own perspective. Meier's claim that we have infinitely many representations echoes this Leibnizian pervasiveness of the representative power." },
  ],
  14: [
    { strata: "wolff", author: "G. W. Leibniz", source: "Meditationes de Cognitione, Veritate et Ideis (1684)", relation: "source",
      text: "Leibniz's foundational 1684 paper introduces the hierarchy: obscure → clear (confused or distinct) → distinct (adequate or inadequate). Meier's § 14 distinction between undeutlich/verworren and deutlich is a simplified pedagogical version of this Leibnizian ladder." },
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 14–29", relation: "source",
      text: "Wolff systematises Leibniz's grades into his logic. He distinguishes clara from distincta by whether the marks (Merkmale) by which we recognise a thing are themselves cognised clearly. Meier in §§ 14, 115–137 follows this framework very closely." },
    { strata: "scholastic", author: "A. G. Baumgarten", source: "Metaphysica, § 510; Aesthetica, § 1", relation: "contrast",
      text: "Baumgarten diverges here in a way crucial for Kant: he rehabilitates confused (verworrene) cognition as the proper domain of aesthetics, arguing it has its own perfection rather than being merely a defective form of distinct cognition. Meier, his student, gestures at this in §§ 19, 22–24 but subordinates it to the logical ideal." },
  ],
  15: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Prima (Ontologia), §§ 56, 70–71", relation: "source",
      text: "The ratio/rationatum pair (ground and consequence) is fundamental to Wolff's entire system. His Ontologia defines ground (Grund) as that from which something can be understood, and the principle of sufficient reason (§ 70) states that nothing exists without a sufficient ground." },
    { strata: "wolff", author: "G. W. Leibniz", source: "Principes de la Nature et de la Grâce, § 7", relation: "source",
      text: "Leibniz's principle of sufficient reason — that nothing happens without a reason why it is thus rather than otherwise — is the metaphysical bedrock underlying Meier's § 15–16. Meier presents it as a logical principle governing the structure of cognition." },
    { strata: "aristotle", author: "Aristotle", source: "Analytica Posteriora I.2, 71b–72a", relation: "parallel",
      text: "Aristotle's account of demonstration requires knowing causes: we know a thing scientifically only when we know the cause from which it necessarily follows. The Aristotelian aitia (cause) maps approximately onto Meier's hinreichender Grund, though the logical structure is quite different." },
  ],
  115: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 36–37", relation: "source",
      text: "Wolff defines a nota (mark, Merkmal) as what is represented in a concept by which we recognise an object, and grounds the possibility of consciousness in the cognition of marks. Meier's § 115 follows this almost verbatim." },
    { strata: "scholastic", author: "Porphyry", source: "Isagoge, cap. 2–3 (on genus and differentia)", relation: "parallel",
      text: "Porphyry's five predicables — genus, species, differentia, proprium, accidens — are the classical Scholastic account of the marks by which things are classified. Meier's taxonomy in §§ 117–121 (wesentliche Stücke, attributa, modi, etc.) is the Wolffian reworking of this Porphyrian framework." },
    { strata: "aristotle", author: "Aristotle", source: "Topics I.4–5, 101b–102a", relation: "source",
      text: "Aristotle's Topics introduces the four predicables (definition, proprium, genus, accident) as the instruments of dialectical argumentation. The Meier–Wolff notion of essential marks, attributes, and modes descends from this Aristotelian taxonomy through centuries of Scholastic commentary." },
  ],
  155: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 483–493", relation: "source",
      text: "Wolff defines certitudo as the clear cognition of the truth of a proposition. His distinction between the subjective and objective aspects of certainty, and his grades from opinion through belief to knowledge (Meinen, Glauben, Wissen — Meier §§ 168–175), are the direct source for Meier's §§ 155–215." },
    { strata: "scholastic", author: "Thomas Aquinas", source: "Summa Theologiae IIa-IIae, q. 1, a. 4", relation: "parallel",
      text: "Aquinas distinguishes scientia (demonstrative knowledge), fides (belief resting on testimony), and opinio (probable judgment). This tripartite division is the Scholastic ancestor of Wolff's and Meier's taxonomy of the grades of assent." },
  ],
  292: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 38–60", relation: "source",
      text: "Wolff's account of judgement (iudicium) as the representation of the agreement or conflict of concepts is the direct source for Meier's § 292. Wolff defines subject, predicate, and copula in the same terms Meier employs in §§ 292–293." },
    { strata: "scholastic", author: "Thomas Aquinas", source: "Summa Theologiae Ia, q. 85, a. 5", relation: "parallel",
      text: "Aquinas distinguishes the first operation of the intellect (apprehending a quiddity) from the second (composing and dividing, i.e., judging). This Scholastic framework — still operative in Wolff — underlies Meier's account of judgement as the representation of a logical relation between concepts." },
    { strata: "aristotle", author: "Aristotle", source: "De Interpretatione 1, 16a; 4–5, 17a", relation: "source",
      text: "Aristotle defines the proposition (apophansis) as a speech in which truth or falsity inheres, and distinguishes the affirmative from the negative. His analysis of subject, predicate, and the verb 'to be' as copula is the root of the Meier–Wolff account, transmitted through centuries of Scholastic logic." },
  ],
  353: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 333–340", relation: "source",
      text: "Wolff defines ratiocinium as a cognition whose truth is derived from other cognitions through the nexus veritatum (connection of truths). Meier follows this in § 353–355, adding only the qualification that it must be a distinct (deutliche) representation of this connection." },
    { strata: "aristotle", author: "Aristotle", source: "Analytica Priora I.1, 24b", relation: "source",
      text: "Aristotle's definition of the syllogism — a discourse in which, certain things being posited, something different from what was posited necessarily follows — is the ultimate source for the entire tradition of syllogistic that Meier inherits through Wolff. Meier's 'ordentlicher Vernunftschluss' (§ 367) maps onto Aristotle's categorical syllogism." },
  ],
  362: [
    { strata: "wolff", author: "G. W. Leibniz", source: "Monadology, § 31; Nouveaux Essais IV.ii.1", relation: "source",
      text: "Leibniz identifies the principle of contradiction as one of the two great principles of reasoning (alongside sufficient reason). It states that a proposition cannot be both true and false at once. Meier's § 362 presents it as the foundational logical principle underlying all syllogistic." },
    { strata: "aristotle", author: "Aristotle", source: "Metaphysics IV.3, 1005b–1006a", relation: "source",
      text: "Aristotle's canonical statement of the principle of non-contradiction — that it is impossible for the same thing to belong and not belong to the same thing at the same time and in the same respect — is the direct ancestor of Meier's principium contradictionis. Aristotle calls it the most certain of all principles." },
  ],
  414: [
    { strata: "wolff", author: "Christian Wolff", source: "Philosophia Rationalis, §§ 885–891", relation: "source",
      text: "Wolff's account of methodus as the order of thoughts in a learned discourse, and his distinction between analytic and synthetic method, are the direct source for Meier's Part II. The 'mathematical method' Meier discusses in § 426 is Wolff's famous methodus mathematica, his defining contribution to German academic style." },
    { strata: "aristotle", author: "Aristotle", source: "Analytica Posteriora II.19; Nicomachean Ethics I.4", relation: "contrast",
      text: "Aristotle's reflections on the order of inquiry — starting from what is better known to us vs. what is better known by nature — prefigure the analytic/synthetic distinction, but without the systematic rigidity of Wolff's application. Meier in § 423–424 already notes the limits of the synthetic method." },
  ],
};
