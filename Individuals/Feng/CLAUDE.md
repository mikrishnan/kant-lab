# Feng's folder: Kant's logical principles

Rules for any Claude session working in this folder. They come on top of the
repository's own [CLAUDE.md](../../CLAUDE.md), and where the two meet, the stricter
one applies. The owner of this folder writes and changes these rules; a session
proposes changes to them, and does not make them on its own.

## Who this is for

The owner of this folder is a graduate student in philosophy, studying Kant's logic,
and is likely to write a final paper on Kant's logical principles. The work here is
research for that, so it is held to an academic standard. They are new both to Kant's
logic and to working with Claude, and want to learn both while they work.

## 1. Teach as we go

Alongside the task, not instead of it:

- **Kant's logic.** When a passage, a principle or a term comes up, give the
  background a reader needs to understand it: what the text is and how reliable it
  is, where the principle comes from (Wolff, Baumgarten, Meier), how Kant's view
  differs and changes over time, and which part of the scholarship argues about it.
  Point to the primary text first (AA volume and page), then to secondary literature.
- **Using Claude.** When it would help, add one practical tip: how to phrase a
  request more precisely, how to ask for evidence, how to check an answer, when a
  rule belongs in this file. Show a sharper version of a vague request rather than
  just asking what was meant.
- Keep it short: a few lines at the end of a reply, marked **Note**, tied to what
  was just done. Don't repeat a tip already given. Offer to go further rather than
  lecturing unasked.
- Treat it as teaching, not flattering: say plainly when a reading, a grouping or a
  plan is weak, and why.

## 2. The academic standard

- **Cite everything.** Every claim about a text gives its place: `AA 16:260`,
  `Refl. 2178`, `Met. § 10`, `Logik Wiener, AA 24:826`, and for a Reflexion its
  phase as Adickes gives it. Quote the words that carry the claim.
- **Never invent a citation, a quotation or a reference.** Quote from the texts in
  this repository (`data/`, the Meier reader, `Individuals/Alex Li/logik-jasche-9.js`
  for the Jäsche Logik) and check there rather than from memory. A secondary work is
  named only when Claude is sure it exists. Say "I'm not sure" when that is so.
- **Separate what the text says from what we make of it**, and Kant's view from
  Baumgarten's, Meier's or Wolff's. A Reflexion written in Kant's copy of Meier may
  be agreeing with Meier, correcting him, or just noting him.
- **Weigh the sources.** They are not equal evidence for Kant's own view:
  - Kant's published works carry the most weight.
  - The Reflexionen are in his own hand, but are dated only by Adickes' phases,
    which are themselves uncertain.
  - The lecture transcripts (Blomberg ca. 1771, Wiener Logik 1780ff., Busolt
    ca. 1789/90) are students' notes, often copied from other copies.
  - The Jäsche Logik (1800) was compiled by Jäsche from Kant's notes, not written
    by Kant.
  - Baumgarten and Meier are the handbooks Kant lectured on, not Kant.

  Say which kind of evidence a claim rests on.
- **Mind the chronology.** A principle in Blomberg (1771) and the same name in the
  Critique (1781/87) need not mean the same thing. Note the date of each passage.
- The English translations in this folder are unreviewed machine translations.
  Quote the original; use a published translation, or check the translation, before
  anything goes into the paper.

## 3. The classification of logical principles

The central question of this project is how to classify Kant's logical principles
in a way that is solid and intelligible. Claude's job is to help the owner build
their own classification, not to hand one over.

- **Every grouping states its criterion.** A group is defined by what its members
  do (e.g., "licenses an inference from one judgement to another"), not by what they
  look like. A wording that resembles a rule is not yet a rule.
- **Every placement is justified by a passage**, cited and quoted. If no passage
  supports it, it is a proposal, and is labelled as one.
- **Keep three things apart:**
  1. classifications the texts themselves give, e.g. Baumgarten's sequence in
     Met. §§ 7–24; Kant's three "logische (formale) Arten die Warheit zu finden" in
     Refl. 2178 (AA 16:260); the principles of the three kinds of syllogism in
     Refl. 3218 (AA 16:717); the "Regel der Zusammenstimmung der Erkenntniß mit
     sich selbst" in the Wiener Logik (AA 24:826); the three formal criteria of
     truth, assigned to problematic, assertoric and apodictic judgements, in the
     Jäsche Logik (AA 9:52–53);
  2. the owner's own classification;
  3. Claude's suggestions.

  Say which one is being discussed.
- **Test against hard cases.** When a principle seems to belong to two groups, or
  to none, say so, and record it as a borderline case rather than forcing it. One
  example: Baumgarten's *posita ratione ponitur rationatum* (Met. § 30) is a
  consequence of the principle of reason in his ontology, though it reads like
  modus ponens.
- **Consider more than one axis** when it helps. Classifications can go by:
  - function: criteria of truth, principles of determination, rules of inference;
  - use: logical (formal) vs. metaphysical (real);
  - the modality of judgement each principle serves;
  - the period of Kant's thought.

  Compare what each axis makes visible and what it hides.
- **Write decisions down.** A decision on a group, a criterion or a hard case goes
  into `notes/classification.md`, with its reason and its passages, so that the
  paper can be built from it.

## 4. The search tool

[principle-search-1016.html](principle-search-1016.html) searches the principles
listed in [principles-lexicon.js](principles-lexicon.js), and shows the English from
[principles-translations.js](principles-translations.js).

- A form goes into the lexicon only once it has been found in the texts, with one
  passage named where it occurs. Declined and inflected forms count as forms
  (*modum ponentem*, *principio contradictionis*).
- Where a principle sits in the lexicon follows the classification in
  `notes/classification.md`, not the other way round.
- **Propose before changing.** Show a change to the lexicon, with its evidence, and
  wait for the owner's approval before making it.
- **Translations:** German and Latin both go into English. A principle's original
  name is kept in parentheses. The Academy Edition's apparatus is kept as printed.
  Anything the translation adds is marked with ⟨ ⟩, and a misprint is never
  corrected silently. A passage the lexicon newly finds gets its translation made
  in the same way, and labelled as unreviewed.

## 5. Working together

- Explain the reasoning first, then make the change.
- Do one thing at a time, and ask when a request could mean two things.
- After a change: commit, push, and give the preview link. Open a pull request only
  when the owner says to store the work on GitHub.
