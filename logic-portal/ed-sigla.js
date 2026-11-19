/* ADICKES' SIGLA in the Reflexionen. The Academy Edition marks a passage Kant inserted into a
   note with a small raised letter after the parenthesis that opens it: g (gegenwärtig) when he
   inserted it at the same time as the note, s (später) when he inserted it later; every other
   parenthesis is Kant's own. (Key as given by Steve Naragon, "Kant: Overview of the Academy
   Edition", under Adickes's abbreviations.) "Der Form (g nach) ist …". The transcription flattens that letter onto the line, where it
   reads as a stray word. This draws it as the AA prints it, small and raised, with its meaning
   on hover.

   Only how it looks changes: the letter stays in the text, so it is still searched, copied and
   quoted as "(g nach)", and the data is not touched. The pass runs over the page's text nodes,
   never its markup, so it reaches every view (search results, the study view, handouts, topic
   boards, English translations that keep the sign) without any renderer knowing about it.
   Included by index.html and topic-board.html. */
(function () {
  const MEANING = {
    g: 'g — gegenwärtig: inserted by Kant at the same time as the note (Adickes’ sign in the Academy Edition)',
    s: 's — später: inserted by Kant at a later time (Adickes’ sign in the Academy Edition)'
  };
  // "(g " or "(s " opening a passage: the letter, then a space, then the passage's first character.
  const RX = /\(([gs]) (?=[^\s)])/g;
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'CODE', 'PRE']);

  function skip(node) {
    for (let el = node.parentElement; el; el = el.parentElement) {
      if (SKIP.has(el.tagName) || el.isContentEditable || el.classList.contains('edsig')) return true;
      if (el === document.body) break;
    }
    return false;
  }
  function mark(text) {
    const s = text.nodeValue;
    RX.lastIndex = 0;
    if (!RX.test(s) || skip(text)) return;
    RX.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = RX.exec(s))) {
      frag.appendChild(document.createTextNode(s.slice(last, m.index + 1)));   // up to and with the "("
      const sig = document.createElement('span');
      sig.className = 'edsig';
      sig.title = MEANING[m[1]];
      sig.textContent = m[1];
      frag.appendChild(sig);
      frag.appendChild(document.createTextNode(' '));
      last = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(s.slice(last)));
    text.parentNode.replaceChild(frag, text);
  }
  function walk(root) {
    if (root.nodeType === 3) { mark(root); return; }
    if (root.nodeType !== 1 || SKIP.has(root.tagName)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.nodeValue.indexOf('(') >= 0 ? 1 : 3 });
    const found = [];
    while (w.nextNode()) found.push(w.currentNode);
    found.forEach(mark);
  }

  document.head.insertAdjacentHTML('beforeend', '<style>' +
    '.edsig { font-size: 0.68em; vertical-align: 0.5em; line-height: 0; font-style: italic; color: var(--accent-light, #8b5e3c); ' +
    'margin: 0 0.12em 0 0.04em; cursor: help; }' +
    '</style>');

  function start() {
    walk(document.body);
    new MutationObserver(recs => recs.forEach(r => {
      if (r.type === 'characterData') mark(r.target);
      else r.addedNodes.forEach(walk);
    })).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
