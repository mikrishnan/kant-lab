/* ═══════════════════════════════════════════════════════════════════════════
   THE CLASS PASSWORD, FOR THE HANDOUTS

   The handouts are the class's: the Handouts page, a published handout, and the class
   screen all ask for the class password first, and go no further without it.

   The password is not in this file, nor anywhere in the site or the repository. What is
   here is a random salt and the password's fingerprint: 600,000 rounds of PBKDF2-SHA256
   over the password and the salt (the key), hashed once more with SHA-256 (the check). A
   password typed in is put through the same rounds; if its check matches, its key is the
   class's. The key never leaves the browser and is never written out as bytes: it is a
   WebCrypto key that can encrypt and decrypt but not be exported.

   A published handout is encrypted with that key (AES-256-GCM, a fresh 96-bit IV each time),
   so its file in the public repository reads as nothing without the password:
     { "kind": "kantlab-handout-locked", "v": 1, "iv": <base64>, "ct": <base64> }

   What this cannot do. The site is public and runs in the reader's browser, so anyone can
   read this code, and anyone can change the page in their own browser to skip the prompt.
   Doing so gets them the Handouts page in their own browser, empty, and nothing of the
   class's: the published handouts stay encrypted. The lock is as strong as the password: a
   word anyone might guess can be guessed, and each guess costs a guesser only the 600,000
   rounds. A longer password is stronger; make-lock.py, beside this file, sets a new one.

   "Remember on this computer" keeps the key in this browser's IndexedDB (still
   unexportable), so that the password is not asked again until "Lock" on the Handouts page.
   Without it, the key lasts as long as the page.

   Read by the portal's handout-tray.js and by teaching/class-screen/, as window.KANTLAB_LOCK,
   which no later script can replace.
   ═══════════════════════════════════════════════════════════════════════════ */
Object.defineProperty(window, 'KANTLAB_LOCK', { enumerable: true, value: Object.freeze((() => {
  'use strict';
  // Written by make-lock.py. Changing it re-locks the handouts: publish them again after.
  const L = { v: 1, salt: '/EzNuIvZOcg+UsTnRvZmJA==', iter: 600000, check: 'u9bgTCbE9lUL/HOOUJwxtWp1u6mVOFolEWwDIRP7e8U=' };
  const AAD = 'kantlab-handout-v1';
  const te = new TextEncoder(), td = new TextDecoder();
  const b64e = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
  const b64d = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const same = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a[i] ^ b[i]; return d === 0; };
  let KEY = null;   // this page's key, once the password is given

  /* The password's key, or null if it is not the class password */
  async function derive(pw) {
    const base = await crypto.subtle.importKey('raw', te.encode(String(pw).trim().normalize('NFC')), 'PBKDF2', false, ['deriveBits']);
    const bits = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: b64d(L.salt), iterations: L.iter }, base, 256));
    const tag = te.encode('kantlab-handouts-check'), both = new Uint8Array(tag.length + bits.length);
    both.set(tag); both.set(bits, tag.length);
    const ok = same(new Uint8Array(await crypto.subtle.digest('SHA-256', both)), b64d(L.check));
    const key = ok ? await crypto.subtle.importKey('raw', bits, 'AES-GCM', false, ['encrypt', 'decrypt']) : null;
    bits.fill(0); both.fill(0);
    return key;
  }

  /* Remembered on this computer: the key, unexportable, in IndexedDB, with the check it was made for */
  function idb(mode, fn) {
    return new Promise((res, rej) => {
      if (!window.indexedDB) { rej(new Error('no IndexedDB')); return; }
      const r = indexedDB.open('kantlab-lock', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('k');
      r.onerror = () => rej(r.error);
      r.onsuccess = () => {
        const db = r.result, tx = db.transaction('k', mode), q = fn(tx.objectStore('k'));
        tx.oncomplete = () => { db.close(); res(q && q.result); };
        tx.onerror = () => { db.close(); rej(tx.error); };
      };
    });
  }
  const recall = () => idb('readonly', s => s.get('class')).catch(() => null);
  const keep = k => idb('readwrite', s => s.put({ key: k, check: L.check }, 'class')).catch(() => {});
  const drop = () => idb('readwrite', s => s.delete('class')).catch(() => {});

  async function unlock(pw, remember) {
    const k = await derive(pw);
    if (!k) return false;
    KEY = k;
    if (remember) await keep(k); else await drop();
    return true;
  }
  async function remembered() {
    if (KEY) return KEY;
    const x = await recall();
    if (x && x.key && x.check === L.check) KEY = x.key;
    else if (x) await drop();   // made for a password since changed
    return KEY;
  }
  async function forget() { KEY = null; await drop(); }

  /* A handout's published file: sealed with the key, and opened again */
  async function seal(text) {
    if (!KEY) throw new Error('locked');
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: te.encode(AAD) }, KEY, te.encode(text)));
    return JSON.stringify({ kind: 'kantlab-handout-locked', v: 1, iv: b64e(iv), ct: b64e(ct) }, null, 1) + '\n';
  }
  const isLocked = d => !!(d && d.kind === 'kantlab-handout-locked');
  // The handout inside a sealed file; throws if this key did not seal it
  async function open(d) {
    if (!KEY) throw new Error('locked');
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(d.iv), additionalData: te.encode(AAD) }, KEY, b64d(d.ct));
    return JSON.parse(td.decode(pt));
  }

  /* The prompt: a small card over the page, in the portal's look. Resolves true once the class
     password is given, false if it is put aside. After each wrong password it waits longer
     before taking another (1, 2, 4 … 30 seconds). */
  let fails = 0, asking = null;
  function ask(opts) {
    if (KEY) return Promise.resolve(true);
    if (asking) return asking;
    const o = Object.assign({ title: 'Class password', text: 'The handouts are for the class. Enter the class password to go on.', cancel: 'Not now' }, opts || {});
    asking = new Promise(res => {
      const wrap = document.createElement('div');
      wrap.id = 'klock';
      wrap.setAttribute('role', 'dialog');
      wrap.setAttribute('aria-modal', 'true');
      wrap.innerHTML = '<style>' +
        '#klock { position: fixed; inset: 0; z-index: 2000; background: rgba(40, 28, 14, 0.42); display: flex; align-items: center; justify-content: center; font-family: "EB Garamond", Georgia, serif; }' +
        '#klock form { background: var(--parchment, #f5efe0); color: var(--ink, #1a1208); border: 1px solid var(--accent-light, #8b5e3c); border-radius: 10px; box-shadow: 0 10px 34px rgba(30, 18, 6, 0.3); padding: 1.1rem 1.3rem 1rem; width: min(25rem, calc(100vw - 2rem)); }' +
        '#klock b { display: block; font-family: "Cinzel", serif; color: var(--accent, #5c3d1e); letter-spacing: 0.05em; font-size: 1.05rem; margin-bottom: 0.35rem; }' +
        '#klock p { margin: 0 0 0.7rem; line-height: 1.4; }' +
        '#klock input[type=password] { display: block; width: 100%; box-sizing: border-box; font: inherit; font-size: 1.05rem; padding: 0.35rem 0.6rem; border: 1px solid var(--line, #d9ccb0); border-radius: 6px; background: var(--paper, #faf6ec); }' +
        '#klock label { display: flex; align-items: center; gap: 0.4rem; margin: 0.55rem 0 0.2rem; font-size: 0.92rem; color: var(--faded, #7a6a52); cursor: pointer; }' +
        '#klock .err { min-height: 1.3em; margin: 0.25rem 0 0.4rem; color: #9a3b1e; font-size: 0.92rem; }' +
        '#klock .row { display: flex; gap: 0.6rem; justify-content: flex-end; }' +
        '#klock button { font: inherit; border-radius: 999px; padding: 0.15rem 0.9rem; cursor: pointer; border: 1px solid var(--line, #d9ccb0); background: var(--card, #fbf8f1); color: var(--accent, #5c3d1e); }' +
        '#klock button.go { background: var(--accent, #5c3d1e); border-color: var(--accent, #5c3d1e); color: var(--parchment, #f5efe0); }' +
        '#klock button:disabled { opacity: 0.5; cursor: default; }' +
        '</style><form autocomplete="off"><b></b><p></p>' +
        '<input type="password" name="pw" aria-label="The class password" autocomplete="off" spellcheck="false">' +
        '<label><input type="checkbox" name="rem"> Remember on this computer</label>' +
        '<div class="err" aria-live="polite"></div>' +
        '<div class="row"><button type="button" class="no"></button><button type="submit" class="go">Unlock</button></div></form>';
      wrap.querySelector('b').textContent = o.title;
      wrap.querySelector('p').textContent = o.text;
      wrap.querySelector('.no').textContent = o.cancel;
      document.body.appendChild(wrap);
      const f = wrap.querySelector('form'), pw = f.elements.pw, err = wrap.querySelector('.err'), go = wrap.querySelector('.go');
      const done = ok => { wrap.remove(); asking = null; document.removeEventListener('keydown', esc, true); res(ok); };
      const esc = e => { if (e.key === 'Escape') { e.stopPropagation(); e.preventDefault(); done(false); } };
      document.addEventListener('keydown', esc, true);
      wrap.querySelector('.no').addEventListener('click', () => done(false));
      f.addEventListener('submit', async e => {
        e.preventDefault();
        if (go.disabled || !pw.value.trim()) return;
        go.disabled = true; err.textContent = 'Checking…';
        const ok = await unlock(pw.value, f.elements.rem.checked).catch(() => false);
        pw.value = '';
        if (ok) { fails = 0; done(true); return; }
        const wait = Math.min(30, 2 ** fails++);
        let left = wait;
        const tick = () => {
          if (!wrap.isConnected) return;
          if (left <= 0) { go.disabled = false; err.textContent = 'That is not the class password.'; pw.focus(); return; }
          err.textContent = 'That is not the class password. Try again in ' + left + ' s.';
          left--; setTimeout(tick, 1000);
        };
        tick();
      });
      setTimeout(() => pw.focus(), 30);
    });
    return asking;
  }

  return { unlock, remembered, forget, key: () => KEY, seal, open, isLocked, ask };
})()) });
