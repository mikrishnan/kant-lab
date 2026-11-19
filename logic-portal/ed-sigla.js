/* ADICKES' SIGLA in the Reflexionen. The Academy Edition marks what Kant struck out and what
   he added later with a small raised letter after the parenthesis that opens the passage:
   "Der Form (g nach) ist …". The transcription flattens that letter onto the line, where it
   reads as a stray word. This draws it as the AA prints it, small and raised, with its meaning
   on hover.

   Only how it looks changes: the letter stays in the text, so it is still searched, copied and
   quoted as "(g nach)", and the data is not touched. The pass runs over the page's text nodes,
   never its markup, so it reaches every view (search results, the study view, handouts, topic
   boards, English translations that keep the sign) without any renderer knowing about it.
   Included by index.html and topic-board.html. */
(function () {
  const MEANING = {
    g: 'g — gestrichen: struck out by Kant (Adickes’ sign in the Academy Edition)',
    s: 's — a later addition by Kant (Adickes’ sign in the Academy Edition)'
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
