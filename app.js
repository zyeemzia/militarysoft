/* ZyeemZia Military Software — page renderer. Copyright © ZyeemZia */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ICON = {
    arrowL: '<path d="M15 5l-7 7 7 7"/>', arrowR: '<path d="M9 5l7 7-7 7"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
    down: '<path d="M12 4v13M6 11l6 6 6-6M5 20h14"/>', ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };
  const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;
  const img = (folder, name) => `img/${folder}/${name}.webp`;

  /* ---------- contour background (generated, so it costs no image weight) ---------- */
  function contours() {
    const c = $('#contours'); if (!c) return;
    const x = c.getContext('2d');
    const draw = () => {
      const cs = getComputedStyle(document.documentElement);
      const cMinor = cs.getPropertyValue('--contour').trim(), cMajor = cs.getPropertyValue('--contour-major').trim(), cGrid = cs.getPropertyValue('--grid').trim();
      const dpr = Math.min(2, devicePixelRatio || 1), W = innerWidth, H = innerHeight;
      c.width = W * dpr; c.height = H * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
      // smooth height field from a few gaussian hills
      const hills = [[.18, .28, .22], [.72, .2, .18], [.55, .72, .26], [.12, .85, .16], [.9, .62, .2]];
      const f = (px, py) => hills.reduce((s, [hx, hy, r]) => s + Math.exp(-(((px / W - hx) ** 2) + ((py / H - hy) ** 2) * (H / W) ** 2) / (r * r)), 0);
      const step = 14, cols = Math.ceil(W / step) + 1, rows = Math.ceil(H / step) + 1, g = [];
      for (let j = 0; j < rows; j++) { g[j] = []; for (let i = 0; i < cols; i++) g[j][i] = f(i * step, j * step); }
      x.lineWidth = 1;
      for (let k = 1; k <= 14; k++) {
        const lvl = k * .085; x.strokeStyle = k % 5 === 0 ? cMajor : cMinor; x.beginPath();
        for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
          const a = g[j][i], b = g[j][i + 1], cc = g[j + 1][i + 1], d = g[j + 1][i];
          const idx = (a > lvl) | ((b > lvl) << 1) | ((cc > lvl) << 2) | ((d > lvl) << 3);
          if (idx === 0 || idx === 15) continue;
          const X = i * step, Y = j * step, t = (p, q) => (lvl - p) / ((q - p) || 1e-6);
          const pts = { T: [X + t(a, b) * step, Y], R: [X + step, Y + t(b, cc) * step], B: [X + t(d, cc) * step, Y + step], L: [X, Y + t(a, d) * step] };
          const segs = { 1: ['L', 'T'], 2: ['T', 'R'], 3: ['L', 'R'], 4: ['R', 'B'], 5: ['L', 'T', 'R', 'B'], 6: ['T', 'B'], 7: ['L', 'B'], 8: ['B', 'L'], 9: ['B', 'T'], 10: ['T', 'L', 'B', 'R'], 11: ['B', 'R'], 12: ['R', 'L'], 13: ['R', 'T'], 14: ['T', 'L'] }[idx];
          for (let s = 0; s < segs.length; s += 2) { x.moveTo(...pts[segs[s]]); x.lineTo(...pts[segs[s + 1]]); }
        }
        x.stroke();
      }
      // grid
      x.strokeStyle = cGrid;
      x.beginPath(); for (let i = 0; i < W; i += 120) { x.moveTo(i, 0); x.lineTo(i, H); } for (let j = 0; j < H; j += 120) { x.moveTo(0, j); x.lineTo(W, j); } x.stroke();
    };
    draw(); let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(draw, 200); });
    MS.redrawContours = draw;
  }

  /* ---------- lightbox ---------- */
  let LB = null;
  function openLB(title, sub, items, start) {
    LB = { items, i: start || 0, title, sub };
    $('#lb').hidden = false; document.body.style.overflow = 'hidden'; renderLB(); $('#lb .x').focus();
  }
  function renderLB() {
    const it = LB.items[LB.i];
    $('#lb').innerHTML = `
      <div class="lb-top"><div><b>${esc(LB.title)}</b> <span>${esc(LB.sub || '')} · ${LB.i + 1}/${LB.items.length}</span></div>
        <button class="x" type="button" aria-label="Close">${icon('x')}</button></div>
      <div class="lb-stage">
        <button class="nav-b" type="button" data-lb="-1" aria-label="Previous" ${LB.items.length < 2 ? 'hidden' : ''}>${icon('arrowL')}</button>
        <div class="lb-fig"><img src="${esc(it.src)}" alt="${esc(it.cap)}"></div>
        <button class="nav-b" type="button" data-lb="1" aria-label="Next" ${LB.items.length < 2 ? 'hidden' : ''}>${icon('arrowR')}</button>
      </div>
      <div class="lb-cap">${esc(it.cap)}</div>`;
  }
  function closeLB() { $('#lb').hidden = true; $('#lb').innerHTML = ''; document.body.style.overflow = ''; LB = null; }

  /* ---------- desktop systems ---------- */
  function renderSystems() {
    const host = $('#systems'); if (!host || !MS.systems) return;
    host.innerHTML = MS.systems.map((s, n) => `
      <article class="system reveal" id="${esc(s.id)}">
        <div class="sys-text">
          <div class="sys-code">SER ${String(n + 1).padStart(2, '0')} · ${esc(s.code)}</div>
          <h3>${esc(s.name)}</h3>
          <div class="sys-full">${esc(s.full)}</div>
          <p class="purpose">${esc(s.summary)}</p>
          <ul class="feat">${s.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
          <div class="chips">${s.tech.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>
          <div class="mini-tl">${s.history.map(h => `<div><b>${esc(h[0])}</b>${esc(h[1])}</div>`).join('')}</div>
        </div>
        <div class="sys-media">
          ${s.shots.length ? `
          <div class="window"><div class="window-bar"><i></i><i></i><i></i><span>${esc(s.window || s.name)}</span><em class="bar-seal" title="Signed build"><span>SIGNED BUILD</span><img src="img/brand/signature-gold-sm.webp" alt="" loading="lazy"></em></div>
            <button class="window-shot" type="button" data-sys="${n}" data-i="0" aria-label="Enlarge screenshot"><img src="${img('systems', s.shots[0][0])}" alt="${esc(s.shots[0][1])}" loading="lazy"></button></div>
          <div class="caption" id="cap-${n}">${esc(s.shots[0][1])}</div>
          ${s.shots.length > 1 ? `<div class="thumbs" role="group" aria-label="Screenshots">${s.shots.map((sh, i) => `<button type="button" data-thumb="${n}:${i}" aria-pressed="${i === 0}" aria-label="${esc(sh[1])}"><img src="${img('systems', sh[0])}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}`
          : `<div class="window"><div class="window-bar"><i></i><i></i><i></i><span>${esc(s.name)}</span></div><div class="no-shot">${esc(s.noShot || 'Screens kept internal')}</div></div>`}
        </div>
      </article>`).join('');
  }

  /* ---------- apps ---------- */
  function renderApps() {
    const host = $('#apps'); if (!host) return;
    host.innerHTML = MS.apps.map((a, n) => `
      <article class="app reveal" id="app-${esc(a.id)}">
        ${a.web ? '<span class="badge-web">WEB APP</span>' : ''}
        <div class="app-top"><span class="app-ser">APP ${String(n + 1).padStart(2, '0')}</span><span class="app-ver">${esc(a.ver)}</span></div>
        ${a.shots.length
          ? `<button class="phone" type="button" data-app="${n}" aria-label="Open ${esc(a.name)} screenshots"><img src="${img('apps', a.shots[0][0])}" alt="${esc(a.shots[0][1])}" loading="lazy" data-cycle="${n}"></button>`
          : `<div class="phone" aria-hidden="true"><div class="feature-face"><b>${esc(a.name.replace('BD MIL ', ''))}</b>${(a.face || []).map(f => `<span>${esc(f)}</span>`).join('')}</div></div>`}
        <div><h3>${esc(a.name)}</h3><div class="sys-full" style="font-size:13px;margin-top:4px">${esc(a.tagline)}</div></div>
        <p>${esc(a.summary)}</p>
        <div class="meta">
          <span>FIRST <b>${esc(a.first)}</b></span><span>LATEST <b>${esc(a.latest)}</b></span>
          ${a.releases ? `<span>RELEASES <b>${a.releases}</b></span>` : ''}${a.installs ? `<span>PLAY <b>${esc(a.installs)}</b></span>` : ''}
        </div>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          ${a.shots.length ? `<button class="open" type="button" data-app="${n}">View screens</button>` : ''}
          ${a.link ? `<a class="open" href="${esc(a.link)}" target="_blank" rel="noopener">Open web app</a>` : a.play ? `<a class="open" href="${esc(a.play)}" target="_blank" rel="noopener">Google Play</a>` : `<a class="open" href="${esc(MS.links.downloads)}" target="_blank" rel="noopener">Download</a>`}
        </div>
      </article>`).join('');
    // gently cycle phone screens
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let tick = 0;
      setInterval(() => {
        tick++;
        document.querySelectorAll('[data-cycle]').forEach(el => {
          const a = MS.apps[+el.dataset.cycle]; if (a.shots.length < 2) return;
          const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
          const k = (tick + +el.dataset.cycle) % a.shots.length;
          el.style.opacity = 0; setTimeout(() => { el.src = img('apps', a.shots[k][0]); el.alt = a.shots[k][1]; el.style.opacity = 1; }, 450);
        });
      }, 3600);
    }
  }

  /* ---------- timeline ---------- */
  function renderTimeline() {
    const host = $('#timeline'); if (!host || !MS.timeline) return;
    host.innerHTML = MS.timeline.map(p => `
      <div class="phase reveal"><div class="phase-label">${esc(p.label)}<small>${esc(p.span)}</small></div>
        <div class="events">${p.events.map(e => `<div class="ev ${e.desk ? 'desk' : ''}"><time>${esc(e.date)}</time><div><b>${esc(e.title)}</b> — ${esc(e.text)}</div></div>`).join('')}</div></div>`).join('');
  }

  /* ---------- stats ---------- */
  function renderStats() {
    const host = $('#stats'); if (!host || !MS.stats) return;
    host.innerHTML = MS.stats.map(s => `<div class="stat"><b data-count="${esc(s[0])}">${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join('');
  }

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const t = e.target;
    const th = t.closest('[data-thumb]');
    if (th) {
      const [n, i] = th.dataset.thumb.split(':').map(Number); const s = MS.systems[n];
      const shot = $(`[data-sys="${n}"]`); shot.dataset.i = i; $('img', shot).src = img('systems', s.shots[i][0]); $('img', shot).alt = s.shots[i][1];
      $('#cap-' + n).textContent = s.shots[i][1];
      th.parentElement.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b === th));
      return;
    }
    const ws = t.closest('[data-sys]');
    if (ws) { const s = MS.systems[+ws.dataset.sys]; openLB(s.name, s.full, s.shots.map(x => ({ src: img('systems', x[0]), cap: x[1] })), +ws.dataset.i); return; }
    const ap = t.closest('[data-app]');
    if (ap) { const a = MS.apps[+ap.dataset.app]; openLB(a.name, a.ver, a.shots.map(x => ({ src: img('apps', x[0]), cap: x[1] })), 0); return; }
    if (t.closest('#lb .x') || t.id === 'lb') { closeLB(); return; }
    const nb = t.closest('[data-lb]');
    if (nb && LB) { LB.i = (LB.i + +nb.dataset.lb + LB.items.length) % LB.items.length; renderLB(); }
  });
  document.addEventListener('keydown', e => {
    if (!LB) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowRight') { LB.i = (LB.i + 1) % LB.items.length; renderLB(); }
    if (e.key === 'ArrowLeft') { LB.i = (LB.i - 1 + LB.items.length) % LB.items.length; renderLB(); }
  });

  /* ---------- reveal on scroll (content is visible at rest; only below-fold items wait) ---------- */
  function reveal() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.remove('pending'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pending'); io.observe(el); } });
  }

  /* ---------- DAY OPS / NIGHT OPS ---------- */
  function themeSwitch() {
    const btn = $('#opsSwitch'); if (!btn) return;
    const mq = matchMedia('(prefers-color-scheme: light)');
    const current = () => document.documentElement.getAttribute('data-theme') || (mq.matches ? 'light' : 'dark');
    const sync = () => { const m = current(); btn.dataset.mode = m; btn.setAttribute('aria-pressed', m === 'light'); btn.title = m === 'light' ? 'Day ops — switch to night' : 'Night ops — switch to day'; if (MS.redrawContours) MS.redrawContours(); };
    btn.addEventListener('click', () => {
      const next = current() === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('ms-theme', next); } catch (e) { /* storage blocked */ }
      sync();
    });
    mq.addEventListener('change', () => { if (!document.documentElement.getAttribute('data-theme')) sync(); });
    sync();
  }

  contours(); themeSwitch(); renderStats(); renderSystems(); renderApps(); renderTimeline(); reveal();
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
