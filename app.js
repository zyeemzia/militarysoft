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
  const CAP = {
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
    wave: '<path d="M2 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0 2 3 2 3"/><path d="M12 3v3M12 18v3"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    report: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h3"/>',
    clash: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M4 4l3 3M20 4l-3 3"/>',
    lang: '<path d="M4 5h9M8 3v2M10 5c-1 5-4 8-6 9M6 9c1 2 3 4 6 5"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
    shield: '<path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12 18 6"/><circle cx="15" cy="9" r="1"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    offline: '<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/><path d="M3 3l18 18"/>',
    device: '<rect x="2" y="4" width="14" height="10" rx="1"/><path d="M6 18h6M9 14v4"/><rect x="17" y="8" width="5" height="12" rx="1"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    folder: '<path d="M3 6h6l2 2h10v11H3z"/><path d="M12 12v5M9.5 14.5 12 12l2.5 2.5"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-1.2-1-1.4-1-2.4s.8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.7-4-8.5-9-8.5z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>'
  };
  const capIcon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CAP[n] || CAP.check}</svg>`;
  const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;
  const img = (folder, name) => `img/${folder}/${name}.webp`;
  const mono = n => (n.replace(/[^A-Za-z0-9 ]/g, ' ').trim().split(/\s+/).length > 1 ? n.replace(/[^A-Za-z0-9 ]/g, ' ').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('') : n.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)).toUpperCase();
  const toolkit = (tools, compact) => !tools || !tools.length ? '' : `<div class="toolkit${compact ? ' compact' : ''}"><small>Built with</small><div class="tk">${tools.map(t => `<span class="tool" title="${esc(t[0])} — ${esc(t[1])}"><i aria-hidden="true">${esc(mono(t[0]))}</i><b>${esc(t[0])}</b>${compact ? '' : `<em>${esc(t[1])}</em>`}</span>`).join('')}</div></div>`;
  const cover = a => Math.max(0, a.shots.findIndex(x => !/launch/.test(x[0])));

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
      <div class="lb-cap"><b>${String(LB.i + 1).padStart(2, '0')}</b> ${esc(it.cap)}</div>
      ${LB.items.length > 1 ? `<div class="lb-strip" role="group" aria-label="All screens in order">${LB.items.map((x, k) => `<button type="button" data-lbgo="${k}" aria-label="Screen ${k + 1}: ${esc(x.cap)}" aria-current="${k === LB.i}"><img src="${esc(x.src)}" alt=""><span>${k + 1}</span></button>`).join('')}</div>` : ''}`;
    const cur = $('#lb [aria-current="true"]'); if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
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
          <p class="pitch">${esc(s.pitch)}</p>
          <p class="purpose">${esc(s.summary)}</p>
          <div class="caps">${s.caps.map(c => `<div class="cap"><span class="cap-ic">${capIcon(c[0])}</span><b>${esc(c[1])}</b><span>${esc(c[2])}</span></div>`).join('')}</div>
          ${s.also ? `<div class="also"><small>Also inside</small><div class="tags">${s.also.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>` : ''}
          ${toolkit(s.tools)}
        </div>
        <div class="sys-media">
          ${s.shots.length ? `
          <div class="window"><div class="window-bar"><i></i><i></i><i></i><span>${esc(s.window || s.name)}</span><em class="bar-seal" title="ZyeemZia"><img src="img/brand/signature-gold-sm.webp" alt="" loading="lazy"></em></div>
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
          ? `<button class="phone" type="button" data-app="${n}" aria-label="Open ${esc(a.name)} screenshots"><img src="${img('apps', a.shots[cover(a)][0])}" alt="${esc(a.shots[cover(a)][1])}" loading="lazy" data-cycle="${n}"></button>`
          : `<div class="phone" aria-hidden="true"><div class="feature-face"><b>${esc(a.name.replace('BD MIL ', ''))}</b>${(a.face || []).map(f => `<span>${esc(f)}</span>`).join('')}</div></div>`}
        <div><h3>${esc(a.name)}</h3><div class="sys-full" style="font-size:13px;margin-top:4px">${esc(a.tagline)}</div></div>
        <p>${esc(a.summary)}</p>
        <div class="tags">${(a.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
        ${toolkit(a.tools, true)}
        <div class="meta">
          <span>VERSION <b>${esc(a.ver)}</b></span>${a.shots.length ? `<span>SCREENS <b>${a.shots.length}</b></span>` : ''}${a.web ? '<span>RUNS IN <b>ANY BROWSER</b></span>' : '<span>PLATFORM <b>ANDROID</b></span>'}
        </div>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          ${a.shots.length ? `<button class="open" type="button" data-app="${n}">View all ${a.shots.length} screens</button>` : ''}
          ${a.link ? `<a class="open" href="${esc(a.link)}" target="_blank" rel="noopener">Open web app</a>` : `<a class="open" href="${esc(MS.links.downloads)}" target="_blank" rel="noopener">Download</a>`}
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
          const k = (cover(a) + tick) % a.shots.length;
          el.style.opacity = 0; setTimeout(() => { el.src = img('apps', a.shots[k][0]); el.alt = a.shots[k][1]; el.style.opacity = 1; }, 450);
        });
      }, 3600);
    }
  }

  /* ---------- capabilities at a glance ---------- */
  function renderGlance() {
    const host = $('#glance'); if (!host || !MS.glance) return;
    host.innerHTML = MS.glance.map(g => `<div class="glance-tile reveal"><span class="cap-ic">${capIcon(g[0])}</span><b>${esc(g[1])}</b><span>${esc(g[2])}</span></div>`).join('');
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
    const go = t.closest('[data-lbgo]');
    if (go && LB) { LB.i = +go.dataset.lbgo; renderLB(); return; }
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

  contours(); themeSwitch(); renderStats(); renderSystems(); renderApps(); renderGlance(); reveal();
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
