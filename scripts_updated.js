
/*
  Updated script.js for Dual.Infodose
  - Cleaned syntax
  - Safe particles init
  - Fixed SÜMBÜS IIFE
  - MyFrameLoader webcomponent
  - Upload / remote component handlers
  - decodeSymbolicCode using CODE_MAP
  - Basic player controls and UI handlers
  - Safe guards and console logging
*/

const CODE_MAP = {
  "DUAL": "https://kodux78k.github.io/dual-app/docs/menu.html",
  "KBX":  "https://kodux78k.github.io/dual-app/docs/menu-x-1.html",
  "ATVR": "https://kodux78k.github.io/dual-app/docs/render-response.html",
  "ATVD": "https://kodux78k.github.io/dual-app/docs/decodificador.html",
  "337":  "https://kodux78k.github.io/dual-app/docs/KOBLLUX_MetaLux_CLEANED.html",
  "DBK":  "https://kodux78k.github.io/dual-app/docs/dual-book-12.html",
  "IMN":  "https://kodux78k.github.io/dual-app/docs/index-manifestado.html",
  "IMNN": "https://kodux78k.github.io/dual-app/docs/index-manifestado-tangle.html",
  "BTS":  "https://kodux78k.github.io/dual-app/docs/botao-simbolico.html",
  "SBK":  "https://kodux78k.github.io/dual-app/docs/SmbS-book-4.html",
  "SBL":  "https://kodux78k.github.io/dual-app/docs/SmbS-book-2.html",
  "KDX":  "https://kodux78k.github.io/dual-app/docs/menu-kobllux-v2-completo.html",
  "KDI":  "https://kodux78k.github.io/dual-app/docs/menu-integrado-kobllux.html",
  "KDP":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-4.html",
  "KDF":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-8.html",
  "KDB":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-10.html",
  "KDJ":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-4-com-botoes-injetados.html",
  "HTM":  "https://kodux78k.github.io/dual-app/docs/KBLX-HTML-v4.1-FULLSCREEN-SEPARADOR.html",
  "MN6":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-6.html",
  "MN7":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-7.html",
  "MN8":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-8.html",
  "MN9":  "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-9.html",
  "MN10": "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-10.html",
  "MN11e":"https://kodux78k.github.io/dual-app/docs/menu-x-1-E-11e.html",
  "MN12": "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-12.html",
  "MN13": "https://kodux78k.github.io/dual-app/docs/menu-final-com-pulso.html",
  "MN14": "https://kodux78k.github.io/dual-app/docs/menu-pulso-final.html",
  "MN15": "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-15.html",
  "MN16": "https://kodux78k.github.io/dual-app/docs/menu-x-1-E-16.html",

  /* ==== Mapeamento para os apps do seu inventário (mantidos) ==== */
  "Orc":  "https://kodux78k.github.io/CRatelie-DualHUB/apps/CostaRibeiro-ORc.html",
  "CATCR":"https://kodux78k.github.io/CRatelie-DualHUB/apps/CATCR.html",
  "Contratos": "https://kodux78k.github.io/CRatelie-DualHUB/apps/CostaRibero-Cotar0.html",
  "Cotas": "https://kodux78k.github.io/CRatelie-DualHUB/apps/CatCostaRibeiro.html",
  "d0x": "https://kodux78k.github.io/CRatelie-DualHUB/apps/index_final_cards_nossolar.html",
  "ticos": "https://kodux78k.github.io/CRatelie-DualHUB/PWA_TICO_Ultra/index.html",
  "regulacao": "https://kodux78k.github.io/CRatelie-DualHUB/apps/lp-reg-10-ok-R-5.html",
  "contratoGen": "https://kodux78k.github.io/CRatelie-DualHUB/apps/JHBARROS-contratos.html",
  "dual-editor": "https://kodux78k.github.io/Dual-Editor/",
  "unouno-oraculo": "https://kodux78k.github.io/Unouno-/index.html",
  "info-doc": "https://kodux78k.github.io/info-Doc/index.html",
  "nossolar-dual": "https://kodux78k.github.io/NosSolar-dualInfodose/",
  "dual-app": "https://kodux78k.github.io/dual-app/index.html",
  "dual-splash": "https://kodux78k.github.io/A.Dual.Infodose/splash.html"
};

/* ----------------- Utilities ----------------- */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const safePlay = (audio) => { try { audio.currentTime = 0; audio.play().catch(()=>{}); } catch(e) {} };

/* ----------------- MyFrameLoader WebComponent ----------------- */
class MyFrameLoader extends HTMLElement {
  constructor(){
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <style>
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(6px);z-index:9999;display:flex;align-items:center;justify-content:center}
        .container{width:92%;height:86%;background:#0b0b0b;border-radius:16px;overflow:hidden;position:relative;box-shadow:0 10px 40px rgba(0,0,0,0.6);}
        iframe{width:100%;height:100%;border:0;background:#fff}
        .close-btn{position:absolute;right:10px;top:10px;padding:6px 10px;border-radius:8px;border:none;background:#f0f;color:#000;cursor:pointer}
      </style>
      <div class="overlay">
        <div class="container">
          <button class="close-btn">✖</button>
          <iframe sandbox="allow-forms allow-scripts allow-same-origin"></iframe>
        </div>
      </div>
    `;
    this.iframe = shadow.querySelector('iframe');
    shadow.querySelector('.close-btn').onclick = () => this.remove();
  }
  set src(u){ this.iframe.src = u; }
  get src(){ return this.iframe.src; }
}
if (!customElements.get('my-frame-loader')) customElements.define('my-frame-loader', MyFrameLoader);

/* ----------------- SÜMBÜS fix IIFE ----------------- */
(function(){
  if (window.__SUMBUS_IIFE__) return; window.__SUMBUS_IIFE__ = true;

  function findToggle(){
    let el = document.querySelector('[data-symbus-toggle]');
    if (el) return el;
    const all = Array.from(document.querySelectorAll('button, [role="button"], .btn, .chip, .pill'));
    return all.find(b => /s[üu]mb[üu]s|symbols|símbolos/i.test((b.innerText||'').trim()));
  }

  function label(on){ return `SÜMBÜS ∴ ${on ? 'ON' : 'OFF'}`; }

  function setLabel(el, on){
    if (!el) return;
    el.classList.add('symbus-toggle');
    const slot = el.querySelector('[data-label]');
    if (slot) slot.textContent = label(on);
    else el.textContent = label(on);
  }

  function pulse(el){
    if (!el) return;
    el.classList.remove('ring-pulse');
    void el.offsetWidth;
    el.classList.add('ring-pulse');
  }

  const prevApply = window.__symbus_apply;
  window.__symbus_apply = function(on){
    const result = prevApply ? prevApply(on) : undefined;
    try {
      const el = findToggle();
      setLabel(el, on);
      pulse(el);
      el?.setAttribute('aria-pressed', on ? 'true' : 'false');
    } catch(e) { /* silent */ }
    return result;
  };

  function init(){
    try {
      const stored = (localStorage.getItem('dual_symbols')||'on') === 'on';
      const el = findToggle();
      if (el) setLabel(el, stored);
    } catch(e){}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ----------------- particles.js safe init ----------------- */
(function(){
  function initParticles(){
    if (!window.particlesJS) {
      console.warn('particlesJS não disponível — verifique CDN/path');
      return;
    }
    try {
      particlesJS('particles-js', {
        particles: {
          number: { value: 40 },
          color: { value: ['#00ffff', '#ff00ff'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 2 },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.18, width: 1 },
          move: { enable: true, speed: 1.5 }
        },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' } } },
        retina_detect: true
      });
      console.info('particlesJS inicializado');
    } catch(e) {
      console.error('Erro ao inicializar particlesJS', e);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initParticles);
  else initParticles();
})();

/* ----------------- decodeSymbolicCode (safe) ----------------- */
function decodeSymbolicCode(){
  try {
    const raw = (document.getElementById('codeInput')?.value || '').trim();
    if (!raw) { alert('Digite um selo'); return; }
    const key = raw.toString().toUpperCase();
    const dest = (typeof CODE_MAP !== 'undefined') && (CODE_MAP[key] || CODE_MAP[key.toLowerCase()] || CODE_MAP[raw] || CODE_MAP[raw.replace(/\s+/g,'')]);
    if (dest) {
      if (window.customElements && customElements.get('my-frame-loader')) {
        const m = document.createElement('my-frame-loader');
        m.src = dest;
        document.body.appendChild(m);
      } else {
        window.open(dest, '_blank');
      }
      const db = document.getElementById('decoderBox');
      if (db && db.style) db.style.display = 'none';
    } else {
      alert('Selo desconhecido ou não registrado: ' + raw);
    }
  } catch (e) {
    console.error('decodeSymbolicCode erro', e);
    alert('Erro ao decodificar o selo (ver console).');
  }
}
window.decodeSymbolicCode = decodeSymbolicCode;

/* ----------------- Upload / Remote component handlers ----------------- */
(function(){
  const uploadInput = document.getElementById('uploadHTML');
  const uploadBtn = document.getElementById('uploadComponentBtn');
  const remoteBtn = document.getElementById('remoteComponentBtn');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => uploadInput.click());
    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.name.match(/\.html?$/i)) { alert('Selecione um arquivo .html'); return; }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const blob = new Blob([ev.target.result], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        if (customElements.get('my-frame-loader')) {
          const m = document.createElement('my-frame-loader');
          m.src = blobUrl;
          document.body.appendChild(m);
        } else {
          window.open(blobUrl, '_blank');
        }
      };
      reader.readAsText(file);
    });
  }

  if (remoteBtn) {
    remoteBtn.addEventListener('click', () => {
      const url = prompt('URL do componente remoto:');
      if (!url) return;
      if (customElements.get('my-frame-loader')) {
        const m = document.createElement('my-frame-loader');
        m.src = url;
        document.body.appendChild(m);
      } else {
        window.open(url, '_blank');
      }
    });
  }
})();

/* ----------------- Ritual / Pulsos log ----------------- */
(function(){
  const pulsos = document.getElementById('pulsos');
  const btn = document.getElementById('btn-expandir-ritual');
  function logMistico(msg){
    if (!pulsos) return;
    const el = document.createElement('div');
    el.className = 'debug-mistico';
    el.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    pulsos.prepend(el);
  }
  if (btn) btn.addEventListener('click', () => {
    if (pulsos) pulsos.classList.toggle('expanded');
    logMistico('Plano ritual alternado.');
  });

  document.addEventListener('click', (e) => {
    // small visual feedback
    const boom = document.createElement('div');
    boom.style.position = 'absolute';
    boom.style.left = (e.clientX - 8) + 'px';
    boom.style.top = (e.clientY - 8) + 'px';
    boom.style.width = boom.style.height = '16px';
    boom.style.borderRadius = '50%';
    boom.style.pointerEvents = 'none';
    boom.style.background = 'radial-gradient(circle,#0ff,#fff,transparent)';
    boom.style.opacity = '0.9';
    boom.style.transition = 'opacity .6s, transform .6s';
    document.body.appendChild(boom);
    requestAnimationFrame(()=>{ boom.style.transform = 'scale(2)'; boom.style.opacity = '0'; });
    setTimeout(()=>boom.remove(),700);
    if (pulsos) {
      const coords = `Pulso em ${e.clientX},${e.clientY}`;
      logMistico(coords);
    }
  }, {passive:true});
})();

/* ----------------- Simple player controls ----------------- */
(function(){
  const toggleBtn = document.getElementById('togglePlayer');
  const controls = document.getElementById('playerControls');
  const playPauseBtn = document.getElementById('playPause');
  const trackSelect = document.getElementById('trackSelect');
  const binauralSelect = document.getElementById('binauralSelect');
  const trackVolume = document.getElementById('trackVolume');
  const binauralVolume = document.getElementById('binauralVolume');

  const trackAudio = new Audio();
  const binauralAudio = new Audio();

  if (toggleBtn && controls) toggleBtn.addEventListener('click', ()=> {
    controls.style.display = (getComputedStyle(controls).display === 'none') ? 'flex' : 'none';
  });

  if (playPauseBtn) playPauseBtn.addEventListener('click', ()=> {
    if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
    if (binauralAudio.src) binauralAudio.paused ? binauralAudio.play() : binauralAudio.pause();
    playPauseBtn.textContent = (trackAudio.paused && binauralAudio.paused) ? '►' : '⏸';
  });

  if (trackSelect) trackSelect.addEventListener('change', ()=> {
    if (trackSelect.value) {
      trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
      trackAudio.loop = true; trackAudio.volume = +(trackVolume?.value || 1);
      trackAudio.play().catch(()=>{});
      playPauseBtn && (playPauseBtn.textContent = '⏸');
    } else {
      trackAudio.pause(); trackAudio.src = '';
    }
  });

  if (binauralSelect) binauralSelect.addEventListener('change', ()=> {
    if (binauralSelect.value) {
      binauralAudio.src = `assets/sounds/binaural/${binauralSelect.value}.wav`;
      binauralAudio.loop = true; binauralAudio.volume = +(binauralVolume?.value || 1);
      binauralAudio.play().catch(()=>{});
    } else {
      binauralAudio.pause(); binauralAudio.src = '';
    }
  });

  if (trackVolume) trackVolume.addEventListener('input', ()=> { trackAudio.volume = +(trackVolume.value); });
  if (binauralVolume) binauralVolume.addEventListener('input', ()=> { binauralAudio.volume = +(binauralVolume.value); });
})();

/* ----------------- Panel toggle / layout state (save/load) ----------------- */
(function(){
  const togglePanelBtn = document.getElementById('togglePanelBtn');
  const layoutPanel = document.getElementById('layoutTogglePanel');

  if (togglePanelBtn && layoutPanel) {
    togglePanelBtn.addEventListener('click', ()=> {
      layoutPanel.style.display = (getComputedStyle(layoutPanel).display === 'none') ? 'flex' : 'none';
    });
  }

  window.mostrarTodos = () => ['#response', '.svg-container', '#koblluxPlayer', '#uploadComponentBtn', '#remoteComponentBtn', '#toggleDecoderBtn', '.symbol-bar']
    .forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.display = ''));

  window.ocultarTodos = () => ['#response', '.svg-container', '#koblluxPlayer', '#uploadComponentBtn', '#remoteComponentBtn', '#toggleDecoderBtn', '.symbol-bar']
    .forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.display = 'none'));

  window.salvarEstadoUI = () => {
    const estado = {
      response: document.querySelector('#response')?.style.display !== 'none',
      svg: document.querySelector('.svg-container')?.style.display !== 'none',
      player: document.querySelector('#koblluxPlayer')?.style.display !== 'none',
      botoes: document.querySelector('#uploadComponentBtn')?.style.display !== 'none',
      bar: document.querySelector('.symbol-bar')?.style.display !== 'none'
    };
    localStorage.setItem('layoutConfig', JSON.stringify(estado));
    document.getElementById('pulsos')?.prepend(Object.assign(document.createElement('div'), {textContent:'🎛️ Layout salvo.'}));
  };

  window.carregarEstadoUI = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
      Object.entries(saved).forEach(([key, visible]) => {
        let sel;
        if (key === 'response') sel = '#response';
        if (key === 'svg') sel = '.svg-container';
        if (key === 'player') sel = '#koblluxPlayer';
        if (key === 'botoes') sel = '#uploadComponentBtn';
        if (key === 'bar') sel = '.symbol-bar';
        sel && document.querySelectorAll(sel).forEach(el => el.style.display = visible ? '' : 'none');
      });
    } catch(e){}
  };

  document.addEventListener('DOMContentLoaded', window.carregarEstadoUI);
})();

/* ----------------- End of script ----------------- */
