# Logic Corpus

*The spec is the source of truth for this tool. Claude builds what it says; reviewers
check the tool against it. When the tool's behaviour changes, this file changes in the
same pull request.*

## Question

From the group's issue ([#17](https://github.com/mikrishnan/kant-lab/issues/17)): "We will iterate on this tool, it will be more efficiently studying the Kantian logical tradition." The group has not yet said more precisely what it will build; the data it will use "will be added to data later".

The page now in `index.html` is a prototype brought in from `Individuals/mikrishnan/concept-hierarchy.html`. It asks: *given a concept hierarchy built by hand, what follows from the way it was built?* Concepts are individuated by their intension, the higher concepts above them; their extension is the concepts beneath them. The user builds the tree, and the page states the truths that hold in it in virtue of its shape. Whether this is the question the group wants to keep is Open question 1.

## Sources

The page loads nothing from `data/` and quotes no text. Everything it shows is derived from the tree the user builds. The doctrine it follows is that of intension and extension, higher and lower concepts, genus and species, and the inverse relation between content and sphere of a concept (the Jäsche *Logik*, AA 9). Which passages the group wants to cite is Open question 6.

## Attested vs. inferred

Nothing on the page is attested: it quotes no edition. Everything in the truths panel is inferred from the shape of the tree, and each statement carries its ground ("because: Pecora lies under Quadruped, which lies under Animal.") so that the user can see where it came from. The page does not label these statements as inferences in so many words; see Open question 2.

Two readings are built in and are not the user's input:

- the top concept, *Object in general*, is always there, with an empty intension, and every other concept lies beneath it;
- concepts standing side by side under one genus, at the top level too, are read as co-ordinate species that exclude one another. Nothing is claimed about whether the species of a genus exhaust it.

## Behaviour

*Items are never renumbered. When one is dropped, strike it through and say why —
`~~3. …~~ (dropped: superseded by 7)` — so that a pull request saying "implements item 4"
keeps its meaning.*

**The tree**

1. On opening, the tree holds one concept, *Object in general*, drawn in italics with a double border and the label "∅ empty concept". It is selected, and the legend explains the notation.
2. *Object in general* cannot be renamed, removed, or given a neighbour: with it selected, the Rename, Remove and "Add at the same level" buttons are disabled.
3. Selecting a concept in the tree, by clicking it, fills it solid. Its marks (the concepts above it) are shaded, and its extension (the concepts beneath it) is outlined with a dashed line, as the legend says.

**Adding, renaming, removing**

4. Typing a name and pressing "Add beneath it", or Enter, adds a concept directly beneath the selected one. Names separated by commas add several at once. The selection does not change.
5. Pressing "Add at the same level", or Shift+Enter, adds the concept beside the selected one, under the same parent.
6. A name that is empty, longer than 60 characters, or already in the tree (compared without regard to case or extra spaces) is refused with a message. In a list of several names the others are still added.
7. "Rename" changes the selected concept's name, under the same rules as item 6. The truths update.
8. "Remove it and everything beneath it" asks for confirmation, then removes the selected concept and every concept beneath it, and selects its parent.
9. "Insert between it and what lies beneath" is enabled only when the selected concept has concepts directly beneath it. It adds the named concept directly beneath the selected one, and every concept that was directly beneath the selected one, with its own extension, is now beneath the new concept. Names separated by commas make a chain, the first highest.
10. "Clear all concepts" asks for confirmation and returns the tree to *Object in general* alone. It is disabled when only that concept is there.
11. "Load the example" (asking for confirmation if concepts have been added) replaces the tree with Animate Substance, Plant, Animal, Quadruped, Bird, Amphibian, Fish, Insect, Worm, Anthropomorpha, Ferae, Glires, Jumenta and Pecora, as in the figure the prototype began from, and opens the "Whole hierarchy" tab.

**Dragging**

12. Dragging a concept onto the middle of another puts it directly beneath that concept, with everything that lay beneath it. A label follows the pointer, the dragged concept and its extension fade, and the target is outlined while the drop is allowed.
13. Dragging a concept onto the left or right edge of another places it beside that concept, under the same parent, before or after it; a bar appears on that edge while the pointer is over it. This is also how concepts are reordered within a level.
14. A concept cannot be dropped on itself, or beneath or beside a concept within its own extension; the target is marked in red while the pointer is over it, and releasing gives a message and changes nothing. *Object in general* cannot be dragged. Dropping a concept where it already stands changes nothing and says so.
15. Pressing a concept and releasing without moving selects it.

**What follows from how it was built**

16. The "This concept" tab, for the selected concept, states its intension: how many marks it has, its proximate genus, each mark tagged proximate or remote, and the chain from *Object in general* down to it. For *Object in general* it says the intension is empty. It also states its extension: how many concepts lie beneath it, which are immediate, which remote. For a concept with none, it says so.
17. *Subordination:* for each concept above the selected one, "Whatever falls under the selected concept falls under X"; and for each concept beneath it, "Whatever falls under Y falls under the selected concept". Each carries its ground, the path from the lower concept up to the higher.
18. *Contraposition:* the same truths turned round ("Whatever does not fall under X does not fall under Y"). None is stated with *Object in general* as the higher concept.
19. *Not conversely:* for each such pair, "Not whatever falls under X falls under Y", with the two marks counts as its ground.
20. *Intension and extension, inversely:* for each such pair, the higher concept has the wider extension and the poorer intension, with the counts of concepts beneath and of marks.
21. *Exclusion:* for each concept that is neither above nor beneath the selected one, "Nothing falls under both", with the point where they part (the nearest common genus) and the species of it through which each is reached. Nearer relatives come first.
22. *Shared marks:* for each of those concepts, the marks they share, down to the nearest common genus, which is named.
23. In the "This concept" tab each of those six kinds is a collapsible section headed with its count; short sections open, long ones closed. A section with no entries says "None in this hierarchy yet."
24. Clicking a concept's name anywhere in the right-hand panel selects it and shows the "This concept" tab.
25. The "Whole hierarchy" tab gives the number of concepts and levels, the highest concept, the lowest concepts, a genus-and-species statement for each concept that has species, and a table of every concept with its number of marks and of concepts beneath it. Below that, the same six kinds of truth for every concept or pair in the tree, each section built when it is opened. A section longer than 400 entries shows the first 400 and says how many more there are.

## Out of scope

- Any claim that the species of a genus exhaust it, or any claim about the world beyond the shape of the tree.
- A concept with more than one proximate genus: the hierarchy is a tree, and every concept has exactly one place in it.

## Open questions

1. **The group's question.** The page is a prototype of one tool. Is "what follows from how a concept hierarchy was built" what Logic Corpus is for, or is it one part of a larger tool?
2. **Marking the inference.** The truths panel gives the ground of each statement but does not say, in so many words, that it is inferred. Does the group want an "inferred from the tree" tag, as the Reflexionen layer has?
3. **Exhaustive divisions.** Species under one genus are read as excluding one another, but never as exhausting it. Should the user be able to mark a division as complete, so that the page could also state "everything that falls under the genus falls under one of its species"?
4. **Top-level concepts.** Concepts directly beneath *Object in general* are read as excluding one another, like any other siblings. Is that right for a hierarchy begun with, say, "Animal" and "Red"?
5. **Saving.** The tree is lost on reload, as in the other tools. Should it be exportable, or kept in the address?
6. **Texts.** Should the page cite the passages of the Jäsche *Logik*, or of Meier's *Auszug* (AA 16), that state each doctrine it applies, or link a concept to passages in `data/`? Which?
7. **Wording.** Truths are worded "Whatever falls under X falls under Y". Would "Every X is a Y", or the traditional A/E/I/O forms, serve better?
8. **Not checked by a person.** The drag and drop and the six kinds of truth were exercised in a headless browser, not clicked through by a person, and dragging has not been tried on a touch screen.
