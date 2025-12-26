/* ==========================================================================
   SCRIPT.JS - VERSÃO CORRIGIDA E LIMPA
   Correções: Sintaxe SÜMBÜS, Fechamento de Blocos, Inicialização Segura
   ========================================================================== */

console.log("⚡ Script.js iniciado...");

/* ==== 1. Web Component: Frame Loader ==== */
class MyFrameLoader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); z-index: 999; display: flex; align-items: center; justify-content: center; }
        .container { width: 92%; height: 86%; background: #111; border-radius: 20px; box-shadow: 0 0 20px #0ff; overflow: hidden; position: relative; }
        iframe { width: 100%; height: 100%; border: none; }
        .close-btn { position: absolute; top: 10px; right: 10px; background: #f0f; border: none; color: #000; font-weight: bold; border-radius: 12px; padding: 4px 10px; cursor: pointer; z-index: 10; }
      </style>
      <div class="overlay"><div class="container"><button class="close-btn">✖</button><iframe></iframe></div></div>
    `;
    this.iframe = shadow.querySelector('iframe');
    shadow.querySelector('.close-btn').onclick = () => this.remove();
  }
  set src(val) { this.iframe.src = val; }
}
customElements.define('my-frame-loader', MyFrameLoader);

/* ==== 2. Core Logic & Audio ==== */
const frame = document.getElementById('frame');
const activationSound = new Audio('assets/sounds/acts/wounds/codigo-MT-OLX-0.wav');

function playSound() {
  activationSound.volume = 1;
  activationSound.play().catch(() => {});
}

function loadPage(url) {
  if(!frame) return;
  frame.classList.remove('active');
  setTimeout(() => {
    frame.src = url;
    frame.onload = () => frame.classList.add('active');
  }, 300);
}

// Upload Component
const uploadInput = document.getElementById('uploadHTML');
const uploadBtn = document.getElementById('uploadComponentBtn');
if(uploadBtn && uploadInput) {
    uploadBtn.onclick = () => { playSound(); uploadInput.click(); };
    uploadInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.name.endsWith('.html')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const blob = new Blob([ev.target.result], { type: 'text/html' });
          const frame = document.createElement('my-frame-loader');
          frame.src = URL.createObjectURL(blob);
          document.body.appendChild(frame);
        };
        reader.readAsText(file);
      } else { alert('Selecione um arquivo .html válido.'); }
    };
}

// Remote Component
const remoteBtn = document.getElementById('remoteComponentBtn');
if(remoteBtn) {
    remoteBtn.onclick = () => {
      playSound();
      const url = prompt("URL do componente remoto:");
      if (url) {
        const frame = document.createElement('my-frame-loader');
        frame.src = url;
        document.body.appendChild(frame);
      }
    };
}

// Decoder Toggle
const toggleDecoderBtn = document.getElementById('toggleDecoderBtn');
const decoderBox = document.getElementById('decoderBox');
if(toggleDecoderBtn && decoderBox) {
    toggleDecoderBtn.onclick = () => {
      playSound();
      decoderBox.style.display = decoderBox.style.display === 'none' ? 'block' : 'none';
    };
}

/* ==== 3. Code Map ==== */
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

function decodeSymbolicCode() {
  playSound();
  const input = document.getElementById('codeInput');
  if(!input) return;
  const code = input.value.trim().toUpperCase();
  const dest = CODE_MAP[code];
  if (dest) {
    const frame = document.createElement('my-frame-loader');
    frame.src = dest;
    document.body.appendChild(frame);
    if(decoderBox) decoderBox.style.display = 'none';
  } else {
    alert('Selo desconhecido ou não registrado.');
  }
}

/* ==== 4. Ritual & Visual Effects ==== */
const pulsos = document.getElementById("pulsos");

function logMistico(msg, options = {}) {
  const p = document.getElementById("pulsos");
  if(!p) return;
  const el = document.createElement("div");
  el.className = "debug-mistico";
  el.innerText = "◉ " + msg;
  p.appendChild(el);
  if (!p.classList.contains("expanded")) {
    p.scrollTop = p.scrollHeight;
  }
  if(options.simbolo) registrarPulsoEEnviar(options.simbolo);
}

document.getElementById("btn-expandir-ritual")?.addEventListener("click", () => {
  const alvo = document.getElementById("corpo-espelho") || document.getElementById("pulsos");
  if (alvo) {
    alvo.style.display = alvo.style.display === "none" ? "block" : "none";
    logMistico("⧉ Expandiu o plano ritual oculto.");
  }
});

if(pulsos) {
    pulsos.addEventListener("click", () => {
      pulsos.classList.toggle("expanded");
    });
}

function spawnCosmicExplosion(x, y) {
  const boom = document.createElement("div");
  boom.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle, #0ff, #f0f0ff, transparent);pointer-events:none;animation:pulse 0.4s ease-out;z-index:9999;`;
  document.body.appendChild(boom);
  setTimeout(() => boom.remove(), 1000);
}

document.addEventListener("click", e => {
  spawnCosmicExplosion(e.clientX, e.clientY);
  // Optional Vibrate
  if(navigator.vibrate) navigator.vibrate([5, 15, 5]);
});

window.addEventListener("message", function(event) {
  if (event.data?.type === "iframeClick") {
     const iframe = document.querySelector("iframe");
     if(iframe) {
        const rect = iframe.getBoundingClientRect();
        spawnCosmicExplosion(rect.left + event.data.x, rect.top + event.data.y);
     }
  }
});

/* ==== 5. Player de Áudio ==== */
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("togglePlayer");
  const controls = document.getElementById("playerControls");
  const playPauseBtn = document.getElementById("playPause");
  const trackSelect = document.getElementById("trackSelect");
  const trackVolume = document.getElementById("trackVolume");
  
  if(toggleBtn && controls) {
      toggleBtn.addEventListener("click", () => {
        controls.style.display = controls.style.display === "flex" ? "none" : "flex";
      });
  }
  
  const trackAudio = new Audio();
  if(playPauseBtn) {
      playPauseBtn.addEventListener("click", () => {
        if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
        playPauseBtn.textContent = trackAudio.paused ? "►" : "⏸";
      });
  }
  
  if(trackSelect) {
      trackSelect.addEventListener("change", () => {
        if (trackSelect.value) {
          trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
          trackAudio.loop = true;
          trackAudio.volume = trackVolume ? trackVolume.value : 0.5;
          trackAudio.play();
          if(playPauseBtn) playPauseBtn.textContent = "⏸";
        } else {
          trackAudio.pause();
        }
      });
  }
  
  if(trackVolume) {
      trackVolume.addEventListener("input", () => trackAudio.volume = trackVolume.value);
  }
});

/* ==== 6. Render Response (Core) ==== */
function renderResponse(txt) {
  // Versão segura que aceita string ou objeto Trinity
  const wrap = document.querySelector(".pages-wrapper");
  if (!wrap) return;
  wrap.innerHTML = "";
  
  let content = { intro: "", middle: "", ending: "" };
  
  if (typeof txt === "string") {
      // Split simplificado
      const parts = txt.split(/\n\s*\n/).filter(p => p.trim());
      content.intro = parts[0] || "";
      content.middle = parts[1] || "";
      content.ending = parts.slice(2).join("\n") || "";
  } else {
      content = txt;
  }

  const createBlock = (text, cls) => {
      const block = document.createElement("div");
      block.className = "response-block " + cls;
      
      // Parsers simples
      let html = text.replace(/(\p{Emoji_Presentation}|\p{Emoji})/gu, '<button class="symbol-btn">$1</button>');
      html = html.replace(/\[(.+?)\]/g, '<button class="symbol-btn">[$1]</button>');
      html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      block.innerHTML = `<p>${html}</p>`;
      
      block.addEventListener("click", () => {
         block.classList.toggle("expanded");
         logMistico("Bloco expandido: " + cls);
      });
      return block;
  };

  const pg = document.createElement("div");
  pg.className = "page active";
  
  if(content.intro) pg.appendChild(createBlock(content.intro, "intro"));
  if(content.middle) pg.appendChild(createBlock(content.middle, "middle"));
  if(content.ending) pg.appendChild(createBlock(content.ending, "ending"));
  
  wrap.appendChild(pg);
  const ind = document.getElementById("pageIndicator");
  if(ind) ind.textContent = "1 / 1";
}

/* ==== 7. AI Calls (Infodose Stub) ==== */
// Variáveis globais essenciais para o funcionamento da AI
let isEnabled = false;
let conversation = [];
const STORAGE_KEY = 'infodoseEnabled';

async function callAI() {
  // Stub básico - substitua pela lógica real se necessário ou use a do patch
  console.log("Chamando AI com:", conversation);
  // Simulação de delay
  await new Promise(r => setTimeout(r, 1000));
  // Fallback se não houver backend
  renderResponse("Resposta simulada do sistema...\n\nO pulso foi recebido.\n\nFim da transmissão.");
}

function registrarPulsoEEnviar(simbolo) {
  logMistico(`🧿 Pulso simbólico: ${simbolo}`);
  if (!isEnabled) {
    isEnabled = true;
    localStorage.setItem(STORAGE_KEY, '1');
  }
  conversation.push({ role: 'user', content: `Simbolo: ${simbolo}` });
  callAI();
}

/* ==== 8. SÜMBÜS (Corrigido) ==== */
(function(){
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
    el.style.color = on ? '#0ff' : '#aaa';
  }

  function pulse(el){
    if (!el) return;
    el.classList.remove('ring-pulse');
    void el.offsetWidth;
    el.classList.add('ring-pulse');
  }

  window.__symbus_apply = function(on){
    try {
      localStorage.setItem('dual_symbols', on ? 'on' : 'off');
      const el = findToggle();
      setLabel(el, on);
      pulse(el);
    } catch (e) { console.error(e); }
  };

  function init(){
    const stored = (localStorage.getItem('dual_symbols')||'on') === 'on';
    const el = findToggle();
    if(el) {
        setLabel(el, stored);
        el.onclick = () => {
            const current = localStorage.getItem('dual_symbols') === 'on';
            window.__symbus_apply(!current);
        };
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/* ==== 9. Particles e Inicialização Final ==== */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar Particles com segurança
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
          particles: {
            number: { value: 40 },
            color: { value: ['#0ff', '#f0f'] },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: 2.4 },
            move: { enable: true, speed: 1.5 }
          },
          retina_detect: true
        });
    } else {
        console.warn("Particles.js não carregou.");
    }

    // 2. Restaurar Estado UI
    const savedUI = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
    if(savedUI.response === false) document.getElementById('response')?.style.setProperty('display', 'none');
    
    // 3. Som de UI Global
    const uiSounds = {
        click: new Audio('assets/sounds/uiSamples/navigation.wav'),
        confirm: new Audio('assets/sounds/uiSamples/confirm.wav')
    };
    
    document.body.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            uiSounds.click.currentTime = 0;
            uiSounds.click.play().catch(()=>{});
        }
    });

    console.log("✅ Script carregado com sucesso.");
});

/* ==== Fim do Script ==== */
