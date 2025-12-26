/* 
  Monólito gerado automaticamente — script_monolitico.js
  Combina múltiplos uploads do projeto (script.js, script_fixed*, etc).
  Mantenha este arquivo como <script type="module" src="script_monolitico.js"></script>
  Revisões: preserve backups dos arquivos originais.
*/

const KoduxMonolitico = (function(){
  'use strict';
  // Namespace guard
  if (window.__KODUX_MONOLITICO_LOADED__) {
    console.warn('KoduxMonolitico já carregado');
    return window.KoduxMonolitico || {};
  }
  window.__KODUX_MONOLITICO_LOADED__ = true;

  // Helper minimal $
  const $ = (sel,root=document)=>root.querySelector(sel);


/* ----- Begin: script.js ----- */


/* extracted scripts from oiDual-menu-v9.html */

class MyFrameLoader extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
          <style>
            .overlay {
              position: fixed;
              inset: 0;
              background: rgba(0,0,0,0.6);
              backdrop-filter: blur(8px);
              z-index: 999;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container {
              width: 92%;
              height: 86%;
              background: #111;
              border-radius: 20px;
              box-shadow: 0 0 20px #0ff;
              overflow: hidden;
              position: relative;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
            .close-btn {
              position: absolute;
              top: 10px;
              right: 10px;
              background: #f0f;
              border: none;
              color: #000;
              font-weight: bold;
              border-radius: 12px;
              padding: 4px 10px;
              cursor: pointer;
              z-index: 10;
            }
          </style>
          <div class="overlay">
            <div class="container">
              <button class="close-btn">✖</button>
              <iframe></iframe>
            </div>
          </div>
        `;
        this.iframe = shadow.querySelector('iframe');
        shadow.querySelector('.close-btn').onclick = () => this.remove();
      }
      set src(val) {
        this.iframe.src = val;
      }
    }
    customElements.define('my-frame-loader', MyFrameLoader);

const frame = document.getElementById('frame');
    const activationSound = new Audio('assets/sounds/acts/wounds/codigo-MT-OLX-0.wav');

    function playSound() {
      activationSound.volume = 1;
      activationSound.play().catch(()=>{});
    }

    function loadPage(url) {
      frame.classList.remove('active');
      setTimeout(() => {
        frame.src = url;
        frame.onload = () => frame.classList.add('active');
      }, 300);
    }

    const uploadInput = document.getElementById('uploadHTML');
    document.getElementById('uploadComponentBtn').onclick = () => {
      playSound();
      uploadInput.click();
    };

    uploadInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.name.endsWith('.html')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const blob = new Blob([ev.target.result], { type: 'text/html' });
          const blobUrl = URL.createObjectURL(blob);
          const frame = document.createElement('my-frame-loader');
          frame.src = blobUrl;
          document.body.appendChild(frame);
        };
        reader.readAsText(file);
      } else {
        alert('Selecione um arquivo .html válido.');
      }
    };

    document.getElementById('remoteComponentBtn').onclick = () => {
      playSound();
      const url = prompt("URL do componente remoto:");
      if (url) {
        const frame = document.createElement('my-frame-loader');
        frame.src = url;
        document.body.appendChild(frame);
      }
    };

    const toggleDecoderBtn = document.getElementById('toggleDecoderBtn');
    const decoderBox = document.getElementById('decoderBox');
    toggleDecoderBtn.onclick = () => {
      playSound();
      decoderBox.style.display = decoderBox.style.display === 'none' ? 'block' : 'none';
    };

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

  /* ==== Mapeamento para os apps do seu inventário (mantidos como antes) ==== */
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
      const code = document.getElementById('codeInput').value.trim().toUpperCase();
      const dest = CODE_MAP[code];
      if (dest) {
        const frame = document.createElement('my-frame-loader');
        frame.src = dest;
        document.body.appendChild(frame);
        decoderBox.style.display = 'none';
      } else {
        alert('Selo desconhecido ou não registrado.');
      }
    }

document.getElementById("btn-expandir-ritual").onclick = () => {
  const alvo = document.getElementById("corpo-espelho") || document.getElementById("pulsos");
  if (alvo) {
    alvo.style.display = alvo.style.display === "none" ? "block" : "none";
    logMistico("⧉ Expandiu o plano ritual oculto.");
  }
};

document.getElementById("btn-expandir-ritual").onclick = () => {
  const alvo = document.getElementById("corpo-espelho") || document.getElementById("pulsos");
  if (alvo) {
    alvo.style.display = alvo.style.display === "none" ? "block" : "none";
    logMistico("⧉ Expandiu o plano ritual oculto.");
  }
};

const pulsos = document.getElementById("pulsos");

  function logMistico(msg) {
    const el = document.createElement("div");
    el.className = "debug-mistico";
    el.innerText = "◉ " + msg;
    pulsos.appendChild(el);
    if (!pulsos.classList.contains("expanded")) {
      pulsos.scrollTop = pulsos.scrollHeight;
    }
  }

  pulsos.addEventListener("click", () => {
    pulsos.classList.toggle("expanded");
    if (!pulsos.classList.contains("expanded")) {
      pulsos.scrollTop = pulsos.scrollHeight;
    }
  });

  function spawnCosmicExplosion(x, y) {
    const boom = document.createElement("div");
    boom.style.position = "absolute";
    boom.style.left = x + "px";
    boom.style.top = y + "px";
    boom.style.width = boom.style.height = "12px";
    boom.style.borderRadius = "50%";
    boom.style.background = "radial-gradient(circle, #0ff, #f0f0ff, transparent)";
    boom.style.pointerEvents = "none";
    boom.style.animation = "pulse 0.4s ease-out";
    document.body.appendChild(boom);
    setTimeout(() => boom.remove(), 1000);
  }

  // Pulso na página principal
  document.addEventListener("click", e => {
    spawnCosmicExplosion(e.clientX, e.clientY);
    navigator.vibrate?.([5, 15, 5]);
    logMistico("Pulso simbiótico em " + e.clientX + ", " + e.clientY);
  });

  // Recebe cliques do iframe
  window.addEventListener("message", function(event) {
    if (event.data?.type === "iframeClick") {
      const iframe = document.getElementById("seuIframeID"); // Troque para o ID real do seu iframe
      if (!iframe) return;

      const rect = iframe.getBoundingClientRect();
      const xGlobal = rect.left + event.data.x;
      const yGlobal = rect.top + event.data.y;

      spawnCosmicExplosion(xGlobal, yGlobal);
      navigator.vibrate?.([5, 15, 5]);
      logMistico("⚡ Pulso no iFrame em " + event.data.x + ", " + event.data.y);
    }
  });

document.addEventListener("DOMContentLoaded", () => {
const toggleBtn = document.getElementById("togglePlayer");
const controls = document.getElementById("playerControls");
const playPauseBtn = document.getElementById("playPause");
const trackSelect = document.getElementById("trackSelect");
const binauralSelect = document.getElementById("binauralSelect");
const trackVolume = document.getElementById("trackVolume");
const binauralVolume = document.getElementById("binauralVolume");
const trackAudio = new Audio();
const binauralAudio = new Audio();
toggleBtn.addEventListener("click", () => {
controls.style.display = controls.style.display === "flex" ? "none" : "flex";
});
playPauseBtn.addEventListener("click", () => {
if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
if (binauralAudio.src) binauralAudio.paused ? binauralAudio.play() : binauralAudio.pause();
playPauseBtn.textContent = (trackAudio.paused && binauralAudio.paused) ? "►" : "⏸";
});
trackSelect.addEventListener("change", () => {
if (trackSelect.value) {
trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
trackAudio.loop = true;
trackAudio.volume = trackVolume.value;
trackAudio.play();
playPauseBtn.textContent = "⏸";
} else {
trackAudio.pause();
trackAudio.src = "";
}
});
binauralSelect.addEventListener("change", () => {
if (binauralSelect.value) {
binauralAudio.src = `assets/sounds/binaural/${binauralSelect.value}.wav`;
binauralAudio.loop = true;
binauralAudio.volume = binauralVolume.value;
binauralAudio.play();
} else {
binauralAudio.pause();
binauralAudio.src = "";
}
});
trackVolume.addEventListener("input", () => {
trackAudio.volume = trackVolume.value;
});
binauralVolume.addEventListener("input", () => {
binauralAudio.volume = binauralVolume.value;
});
});

document.addEventListener("click", function(e) {
    window.parent.postMessage({
      type: "iframeClick",
      x: e.clientX,
      y: e.clientY
    }, "*");
  });
  document.addEventListener("touchstart", function(e) {
    const t = e.touches[0];
    if (t) {
      window.parent.postMessage({
        type: "iframeClick",
        x: t.clientX,
        y: t.clientY
      }, "*");
    }
  });

document.getElementById("btn-expandir-ritual")?.addEventListener("click", () => {
    const pulsos = document.getElementById("pulsos");
    if (pulsos) {
      pulsos.classList.toggle("expanded");
      if (!pulsos.classList.contains("expanded")) {
        pulsos.scrollTop = pulsos.scrollHeight;
      }
    }
  });

(function(){
    const STORAGE_KEY  = 'infodoseEnabled',
          THEME_KEY    = 'infodoseTheme',
          KIT_PRIMARY  = 'assets/icons/DualKittyKard-icon-3.png',
          KIT_FALLBACK = 'assets/icons/dual_Dual_Infodose.svg',
          CONFIG = {
            TRAINING_FILE:'data/Super_Treinamento_Universal_Dual_Infodose_v1-29.txt',
            API_URL      :'https://openrouter.ai/api/v1/chat/completions',
            MODEL        :'deepseek/deepseek-chat-v3-0324:free',
            TEMP         : 0.2,
            CHUNK_SIZE   :12000,
            AUTH_TOKEN   :'Bearer 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'
          };

    let training = '', chunks = [], chunkIndex = 0;
    let isEnabled = false, isStudying = false;
    let userName = '', assistantBase = '';
    let conversation = [];
    let pages = [], currentPage = 0, autoAdvance = true;
    let originalLogo = '';

    const $ = s => document.querySelector(s);
    const create = (t,c,h) => {
      const e = document.createElement(t);
      if(c) e.className = c;
      if(h) e.innerHTML = h;
      return e;
    };
    particlesJS('particles-js',{
      particles:{ number:{value:40}, color:{value:['#0ff','#f0f']},
        shape:{type:'circle'}, opacity:{value:0.4}, size:{value:2.4},
        move:{enable:true,speed:1.5}
      }, retina_detect:true
    });

    function applyTheme(theme){
      document.body.classList.remove('light','medium','vibe');
      if(theme!=='dark') document.body.classList.add(theme);
    }
    function toggleTheme(){
      const order=['dark','light','medium','vibe'];
      const cur=localStorage.getItem(THEME_KEY)||'dark';
      const next=order[(order.indexOf(cur)+1)%order.length];
      applyTheme(next);
      localStorage.setItem(THEME_KEY,next);
    }
    function changeLogo(srcs){
      const cont=$('#logoContainer'), obj=$('#logoObj');
      cont.classList.add('fading');
      cont.addEventListener('transitionend',function once(){
        cont.removeEventListener('transitionend',once);
        if(Array.isArray(srcs)){
          obj.data=srcs[0];
          obj.onerror=()=>obj.data=srcs[1];
        } else obj.data=srcs;
        cont.classList.remove('fading');
      });
    }

    async function init(){
      applyTheme(localStorage.getItem(THEME_KEY)||'dark');
      $('#themeToggle').addEventListener('click',toggleTheme);
      originalLogo = $('#logoObj').data;

      try {
        training = await fetch(CONFIG.TRAINING_FILE).then(r=>r.text());
        for(let i=0;i<training.length;i+=CONFIG.CHUNK_SIZE){
          chunks.push(training.slice(i,i+CONFIG.CHUNK_SIZE));
        }
      } catch(e){ console.error('Falha no treino:',e); }

      loadConfig();
      if(!conversation.length){
        conversation.push({
          role:'system',
          content:(chunks[0]||training)+'\n\nVocê é o assistente Dual.infodose.'
        });
        chunkIndex=1;
      }
      bindUI();
    }

    function loadConfig(){
      if(localStorage.getItem(STORAGE_KEY)==='1'){
        isEnabled=true;
        userName=localStorage.getItem('userName')||'';
        assistantBase=localStorage.getItem('assistantBase')||'';
        conversation=[{
          role:'system',
          content:(chunks[0]||training)
            +`\n\nUsuário: ${userName}.\nAssistente: ${assistantBase} dual.infodose.`
        }];
        chunkIndex=1;
        updateUI();
      }
    }

    function updateUI(){
      $('#toggleBtn').classList.toggle('active',isEnabled);
      $('#kittyBtn').classList.toggle('active',isStudying);
      $('#assistantName').textContent = isStudying
        ? 'Estudos dual.infodose'
        : (isEnabled ? `${assistantBase} dual.infodose` : '');
    }

    function showLoading(msg){
      const wrap=$('.pages-wrapper');
      wrap.innerHTML='';
      const p=create('div','page active'), foot=create('p','footer-text loading','');
      msg.split('').forEach((ch,i)=>{
        const sp=create('span'); sp.textContent=ch;
        sp.style.animationDelay=(i*0.02)+'s'; sp.classList.add('loading');
        foot.appendChild(sp);
      });
      p.appendChild(foot); wrap.appendChild(p);
      $('#pageIndicator').textContent = '1 / 1';
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
    }

    function splitText(t){
      let ps = t.split(/\n\s*\n/).filter(p=>p.trim());
      if(ps.length % 3 !== 0){
        ps = (t.match(/[^\.!\?]+[\.!\?]+/g)||[]).map(s=>s.trim());
      }
      const out=[];
      for(let i=0;i<ps.length;i+=3){
        out.push(ps.slice(i,i+3));
      }
      return out;
    }

    function renderResponse(txt){
      const wrap=$('.pages-wrapper');
      wrap.innerHTML=''; pages=[]; currentPage=0; autoAdvance=true;
      txt = txt
        .replace(/`([^`]+)`/g,'<code>$1</code>')
        .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
        .replace(/\*(.+?)\*/g,'<em>$1</em>');
      const groups = splitText(txt),
            titles = ['🎁 Recompensa Inicial','👁️ Exploração','⚡️ Antecipação'];

      groups.forEach((grp, gi)=>{
        const pg = create('div','page'+(gi===0?' active':''),'');
        grp.forEach((para,j)=>{
          const cls = j===0?'intro':j===1?'middle':'ending';
          const block = create('div',`response-block ${cls}`,`<p>${para}</p>`);
          block.addEventListener('click',()=>{
            autoAdvance=false;
                  const cleanPara = para
          .replace(/["“”‘’]/g, '')                        // aspas
          .replace(/[\u1F300-\u1F6FF\u1F900-\u1F9FF\u2600-\u26FF\u2700-\u27BF]/g, ''); // emojis
      
        const utter = new SpeechSynthesisUtterance(cleanPara);
        speechSynthesis.cancel();
        speechSynthesis.speak(utter);
      
        if (!block.dataset.spoken) {
          block.dataset.spoken = '1';
          block.classList.add('clicked');
        } else {
          block.classList.add('expanded');
          if (!isEnabled) {
            isEnabled = true;
            localStorage.setItem(STORAGE_KEY, '1');
            updateUI();
              }
              showLoading(' Pulso em Expansão...');
              conversation.push({role:'user',content:`${titles[j]}\n\n${para}`});
              callAI();
            }
          });
          pg.appendChild(block);
        });
        wrap.appendChild(pg);
        pages.push(pg);
      });

      $('#pageIndicator').textContent = `1 / ${pages.length}`;
      autoSpeakPage(0);
    }

    function autoSpeakPage(i){
  const txts = Array.from(pages[i].querySelectorAll('p'))
    .map(p=>p.textContent).join(' ');
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(txts);
  
  utter.onend = () => {
    if (autoAdvance && i < pages.length - 1) {
      changePage(1);
    } else if (i === pages.length - 1) {
      // Aqui, só após a ÚLTIMA página:
      speechSynthesis.speak(
        new SpeechSynthesisUtterance('Do seu jeito. Sempre único. Sempre seu.')
      );
    }
  };

  speechSynthesis.speak(utter);
}

    function changePage(d){
      const np = currentPage + d;
      if(np<0||np>=pages.length) return;
      pages[currentPage].classList.remove('active');
      pages[np].classList.add('active');
      currentPage=np;
      $('#pageIndicator').textContent = `${np+1} / ${pages.length}`;
      if(autoAdvance) autoSpeakPage(np)
    }

    async function callAI(){
      try {
        const res = await fetch(CONFIG.API_URL, {
          method: 'POST',
          headers: {
            'Authorization': CONFIG.AUTH_TOKEN,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: CONFIG.MODEL,
            messages: conversation,
            temperature: CONFIG.TEMP
          })
        });

        const payload = await res.json();
        if (!res.ok) throw new Error(payload.error?.message || res.statusText);
        if (!payload.choices?.length) throw new Error('Resposta vazia da API');
        const ans = payload.choices[0].message.content.trim();
        conversation.push({ role: 'assistant', content: ans });
        renderResponse(ans);

      } catch (err) {
        console.error('callAI erro:', err);
        const fallback = 'Desculpe, não consegui obter resposta. Tente novamente.';
        conversation.push({ role: 'assistant', content: fallback });
        renderResponse(fallback);
      }
    }

    function bindUI(){
      $('#sendBtn').addEventListener('click',onSend);
      $('#userInput').addEventListener('keypress',e=>{ if(e.key==='Enter') onSend(); });
      $('#voiceBtn').addEventListener('click',()=>{
        const rec = new (window.SpeechRecognition||window.webkitSpeechRecognition)();
        rec.lang='pt-BR'; rec.start();
        rec.onresult=evt=>{
          $('#userInput').value=evt.results[0][0].transcript; onSend();
        };
      });

      document.querySelector('.control-buttons').addEventListener('click',e=>{
        if(e.target.closest('.copy-button')){
          const txt=pages.map(p=>p.innerText.trim()).join('\n\n');
          navigator.clipboard.writeText(txt);
        }
        if(e.target.closest('.paste-button')){
          navigator.clipboard.readText().then(txt=>$('#userInput').value=txt);
        }
        if(e.target.closest('#toggleBtn')){
          if(!isEnabled) $('#loginBox').classList.add('active');
          else {
            isEnabled=false; localStorage.removeItem(STORAGE_KEY);
            conversation=[]; updateUI();
          }
        }
        if(e.target.closest('#kittyBtn')){
          isStudying=!isStudying;
          if(isStudying){
            conversation=[{
              role:'system',
              content:(chunks[0]||training)+'\n\nVocê é Assistente de Estudos dual.infodose.'
            }];
            changeLogo([KIT_PRIMARY,KIT_FALLBACK]);
          } else {
            changeLogo(originalLogo); loadConfig();
          }
          updateUI();
        }
      });

      document.querySelector('.pagination').addEventListener('click',e=>{
        if(e.target.dataset.action==='prev') changePage(-1);
        if(e.target.dataset.action==='next') changePage(1);
        autoAdvance=false;
      });

      $('#loginForm').addEventListener('submit',e=>{
        e.preventDefault();
        const u=$('#userName').value.trim(), a=$('#assistantInput').value.trim();
        if(!u||!a) return alert('Preencha os dados');
        isEnabled=true; userName=u; assistantBase=a;
        localStorage.setItem(STORAGE_KEY,'1');
        localStorage.setItem('userName',u);
        localStorage.setItem('assistantBase',a);
        loadConfig(); $('#loginBox').classList.remove('active');
      });

      // toggle apenas da área de resposta (blocos/loading)
      document.body.addEventListener('click',e=>{
        if(e.target.closest('.footer-text')){
          document.querySelector('.pages-wrapper').classList.toggle('collapsed');
          e.target.closest('.footer-text').classList.toggle('active');
        }
      });
    }

    function onSend(){
      const raw=$('#userInput').value.trim(); if(!raw) return;
      $('#userInput').value=''; autoAdvance=false;
      showLoading('Pulso enviado...Recebendo intenção…');
      conversation.push({role:'user',content:raw});
      callAI();
    }

    document.addEventListener('DOMContentLoaded',init);
  })();

function renderResponseBlocks({ intro = "", middle = "", ending = "" }) {
  const container = document.querySelector(".pages-wrapper");

  function createBlock(content, className) {
    const block = document.createElement("div");
    block.className = "response-block " + className;

    const parsed = content
      .replace(/(\p{Emoji_Presentation}|\p{Emoji})/gu, match => {
        return `<button class="symbol-btn" onclick="registrarPulsoEEnviar('Emoji: ${match}')">${match}</button>`;
      })
      .replace(/\[(.+?)\]/g, (match, p1) => {
        return `<button class="symbol-btn" onclick="registrarPulsoEEnviar('[${p1}]')">[${p1}]</button>`;
      });

    block.innerHTML = parsed;

    block.addEventListener("click", () => {
      block.classList.toggle("expanded");
      const pulsos = document.getElementById("pulsos");
      if (pulsos) pulsos.classList.toggle("expanded");
      logMistico("◉ Expandiu bloco: " + className);
    });

    return block;
  }

  if (intro)  container.appendChild(createBlock(intro, "intro"));
  if (middle) container.appendChild(createBlock(middle, "middle"));
  if (ending) container.appendChild(createBlock(ending, "ending"));
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-text");
  const inputContainer = document.querySelector(".input-container");
  const controls = document.querySelector(".control-buttons");
  const pagination = document.querySelector(".pagination");
const ritualBtn = document.getElementById("btn-expandir-ritual");

  if (footer && inputContainer && controls && pagination) {
    footer.addEventListener("click", () => {
      inputContainer.classList.toggle("hidden");
      controls.classList.toggle("hidden");
      pagination.classList.toggle("hidden");
    ritualBtn.classList.toggle("move-to-bottom-ritual");
      footer.classList.toggle("move-to-bottom");
    });
  }
});

// 🎧 Sons de interface - Coblux UI Samples
const uiSounds = {
click: new Audio('assets/sounds/uiSamples/navigation.wav'),
hover: new Audio('assets/sounds/uiSamples/hover.wav'),
confirm: new Audio('assets/sounds/uiSamples/confirm.wav'),
back: new Audio('assets/sounds/uiSamples/back.wav'),
temaUp: new Audio('assets/sounds/uiSamples/back-action.wav'),
temaDown: new Audio('assets/sounds/uiSamples/back-action.wav'),
};
// Volume padrão
for (const key in uiSounds) {
uiSounds[key].volume = 0.4;
}
// ⛔ Remover microfone automático
// window.SpeechRecognition = null;
// window.webkitSpeechRecognition = null;
// 🎯 Sons ao interagir
document.addEventListener("DOMContentLoaded", () => {
// Clique em qualquer botão
document.querySelectorAll("button").forEach(btn => {
btn.addEventListener("click", () => {
uiSounds.click.currentTime = 0;
uiSounds.click.play().catch(() => {});
});
btn.addEventListener("mouseover", () => {
uiSounds.hover.currentTime = 0;
uiSounds.hover.play().catch(() => {});
});
});
// Enviar mensagem (confirmar)
const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
sendBtn.addEventListener("click", () => {
uiSounds.confirm.currentTime = 0;
uiSounds.confirm.play().catch(() => {});
});
}
// Trocar tema manualmente (temaSelector)
const themeSelector = document.getElementById("themeSelector");
if (themeSelector) {
let lastIndex = themeSelector.selectedIndex;
themeSelector.addEventListener("change", () => {
const newIndex = themeSelector.selectedIndex;
if (newIndex > lastIndex) {
uiSounds.temaUp.currentTime = 0;
uiSounds.temaUp.play().catch(() => {});
} else if (newIndex < lastIndex) {
uiSounds.temaDown.currentTime = 0;
uiSounds.temaDown.play().catch(() => {});
}
lastIndex = newIndex;
});
}
// Navegação entre páginas
document.querySelectorAll('[data-action="prev"]').forEach(btn =>
btn.addEventListener("click", () => {
uiSounds.back.currentTime = 0;
uiSounds.back.play().catch(() => {});
})
);
document.querySelectorAll('[data-action="next"]').forEach(btn =>
btn.addEventListener("click", () => {
uiSounds.confirm.currentTime = 0;
uiSounds.confirm.play().catch(() => {});
})
);
});

// 🎧 Novos sons com base em IDs
const uiBL = {
toggle: new Audio('assets/sounds/uiSamples/toggleBtn-sfx.wav'),
kitty: new Audio('assets/sounds/uiSamples/kittyBtn-sfx.wav'),
ativar: new Audio('assets/sounds/uiSamples/ativar-click-toggleBtn.wav'),
nav: new Audio('assets/sounds/uiSamples/navigation.wav'),
cancel: new Audio('assets/sounds/uiSamples/cancel.wav')
};
// Volume padrão
for (const k in uiBL) uiBL[k].volume = 0.45;
document.addEventListener("DOMContentLoaded", () => {
// Botão toggle (login)
const toggle = document.getElementById("toggleBtn");
if (toggle) toggle.addEventListener("click", () => {
uiBL.toggle.currentTime = 0;
uiBL.toggle.play().catch(()=>{});
});
// Botão kitty
const kitty = document.getElementById("kittyBtn");
if (kitty) kitty.addEventListener("click", () => {
uiBL.kitty.currentTime = 0;
uiBL.kitty.play().catch(()=>{});
});
// Botão ativar no login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
loginForm.addEventListener("submit", () => {
uiBL.ativar.currentTime = 0;
uiBL.ativar.play().catch(()=>{});
});
}
// Copiar / colar
document.querySelectorAll('.copy-button, .paste-button').forEach(btn =>
btn.addEventListener("click", () => {
uiBL.cancel.currentTime = 0;
uiBL.cancel.play().catch(()=>{});
})
);
});

// Toggle do painel de controle
document.getElementById('togglePanelBtn').addEventListener('click', function () {
  const panel = document.getElementById('layoutTogglePanel');
  panel.style.display = (panel.style.display === 'none' || getComputedStyle(panel).display === 'none') ? 'flex' : 'none';
});

// Funções básicas de mostrar/ocultar
function toggleElement(selector, input) {
  selector.split(',').forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = input.checked ? '' : 'none';
    });
  });
}
function ocultarTodos() {
  ['#response', '.svg-container', '#koblluxPlayer', '#uploadComponentBtn', '#remoteComponentBtn', '#toggleDecoderBtn', '.symbol-bar']
    .forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.display = 'none'));
}
function mostrarTodos() {
  ['#response', '.svg-container', '#koblluxPlayer', '#uploadComponentBtn', '#remoteComponentBtn', '#toggleDecoderBtn', '.symbol-bar']
    .forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.display = ''));
}

// LocalStorage
function salvarEstadoUI() {
  const estado = {
    response: getDisplayState('#response'),
    svg: getDisplayState('.svg-container'),
    player: getDisplayState('#koblluxPlayer'),
    botoes: getDisplayState('#uploadComponentBtn,#remoteComponentBtn,#toggleDecoderBtn'),
    bar: getDisplayState('.symbol-bar')
  };
  localStorage.setItem('layoutConfig', JSON.stringify(estado));
  logMistico?.("🎛️ Preferência de layout salva.");
}
function getDisplayState(selector) {
  const el = document.querySelector(selector.split(',')[0]);
  return el?.style.display !== 'none';
}
function carregarEstadoUI() {
  const saved = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
  Object.entries(saved).forEach(([key, visible]) => {
    let sel;
    if (key === 'response') sel = '#response';
    if (key === 'svg') sel = '.svg-container';
    if (key === 'player') sel = '#koblluxPlayer';
    if (key === 'botoes') sel = '#uploadComponentBtn,#remoteComponentBtn,#toggleDecoderBtn';
    if (key === 'bar') sel = '.symbol-bar';
    sel && document.querySelectorAll(sel).forEach(el => el.style.display = visible ? '' : 'none');
  });
}

// MODO SIMBIÓTICO PRESET
function ativarModo(modo) {
  ocultarTodos();
  const modos = {
    pulse: ['#koblluxPlayer'],
    happyHour: ['#response', '.symbol-bar'],
    ritual: ['#response', '#koblluxPlayer'],
    exploracao: ['#response', '.symbol-bar', '#koblluxPlayer', '#uploadComponentBtn', '#remoteComponentBtn', '#toggleDecoderBtn', '.svg-container']
  };
  (modos[modo] || []).forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.style.display = '');
  });
  logMistico?.("⚙️ Modo ativado: " + modo);
}

// Carregar config ao iniciar
document.addEventListener("DOMContentLoaded", () => {
  carregarEstadoUI();
});

// ========= Markdown simbiótico =========
function renderMarkdown(raw) {
  return raw
    .replace(/(["“”'])(.+?)\1/g, '<button class="response-button">"$2"</button>')
    .replace(/\[(.+?)\]/g, '<button class="response-button">[$1]</button>')
    .replace(/([\u231A-\u2B55\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}])/gu, '<button class="emoji-button">$1</button>')
    .replace(/^### (.*)/gm, '<h3>$1</h3>')
    .replace(/^## (.*)/gm, '<h2>$1</h2>')
    .replace(/^# (.*)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

// ========= Separador de parágrafos robusto =========
function splitText(t) {
  return t
    .split(/\n\s*\n|(?<!\d)\. |! |\? /)
    .map(p => p.trim())
    .filter(Boolean)
    .reduce((acc, cur, i) => {
      const index = Math.floor(i / 3);
      acc[index] = acc[index] || [];
      acc[index].push(cur);
      return acc;
    }, []);
}

// ========= Função renderResponse simbiótica =========
function renderResponse(txt) {
  const wrap = document.querySelector(".pages-wrapper");
  wrap.innerHTML = "";
  let pages = [], currentPage = 0;
  txt = renderMarkdown(txt);

  const groups = splitText(txt),
        titles = ["🎁 Recompensa Inicial", "👁️ Exploração", "⚡️ Antecipação"];

  groups.forEach((grp, gi) => {
    const pg = document.createElement("div");
    pg.className = "page" + (gi === 0 ? " active" : "");

    grp.forEach((para, j) => {
      const cls = j === 0 ? "intro" : j === 1 ? "middle" : "ending";
      const block = document.createElement("div");
      block.className = "response-block " + cls;
      block.innerHTML = "<p>" + para + "</p>";

      block.addEventListener("click", () => {
        speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(block.textContent);
        speechSynthesis.speak(utter);
        block.classList.add("clicked");
      });

      pg.appendChild(block);
    });

    wrap.appendChild(pg);
    pages.push(pg);
  });

  document.getElementById("pageIndicator").textContent = "1 / " + pages.length;
}

function transformarSimbolosAvancado() {
  const targetBlocks = document.querySelectorAll('.renderResponse, .response-block, .output-block, .console');

  targetBlocks.forEach(block => {
    if (!block.dataset.parsed) {
      let html = block.innerHTML;

      // Colchetes [simbolo]
      html = html.replace(/\[(.+?)\]/g, (_, simbolo) =>
        `<span class="symbol-button tipo-colchete" onclick="registrarPulsoEEnviar('${simbolo}')">[${simbolo}]</span>`
      );

      // Chaves {simbolo}
      //html = html.replace(/\{(.+?)\}/g, (_, simbolo) =>
      //  `<span class="symbol-button tipo-chave" onclick="enviarPulsoSimbolico('${simbolo}')">{${simbolo}}</span>`
      //);

      // Parênteses (simbolo)
      //html = html.replace(/\((.+?)\)/g, (_, simbolo) =>
      //  `<span class="symbol-button tipo-parenteses" onclick="enviarPulsoSimbolico('${simbolo}')">(${simbolo})</span>`
      //);

      // Emojis únicos (corrigido: evita quadrado duplicado)
      html = html.replace(/([\p{Emoji}])/gu, (_, emoji) =>
        `<span class="symbol-button tipo-emoji" onclick="registrarPulsoEEnviar('${emoji}')">${emoji}</span>`
      );

      // ASCII blocks (3+ linhas)
      //* html = html.replace(/(?:<br\s*\/?>\s*){2,}([\s\S]+?)(?:<br\s*\/?>\s*){2,}/g, (_, ascii) => {
        //const id = 'ascii-' + Math.random().toString(36).substr(2, 6);
        //return `
        //  <div class="ascii-container">
         //   <span class="symbol-button tipo-ascii-toggle" onclick="toggleNested('${id}')">▶️ ASCII</span>
        //    <pre id="${id}" class="nestedBlock hidden">${ascii.trim()}</pre>
       //   </div>`;
     // }); 

      block.innerHTML = html;
      block.dataset.parsed = "true";
    }
  });
}

function enviarPulsoSimbolico(simbolo, tipo = "SimboloAvancado") {
  const role = localStorage.getItem("role") || "user";
  const system = localStorage.getItem("system") || "";

  const entradaSimbolica = {
    role,
    content: `[${simbolo}]`,
    system,
    tipo,
  };

  renderResponse(entradaSimbolica.content, tipo);
  console.log("🔮 Pulso simbiótico:", entradaSimbolica);
}

function toggleNested(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('hidden');
    const toggle = el.previousElementSibling;
    toggle.innerText = el.classList.contains('hidden') ? '▶️ ASCII' : '▼ ASCII';
  }
}

// Otimizado com MutationObserver (sem setInterval)
const observer = new MutationObserver(transformarSimbolosAvancado);
observer.observe(document.body, { childList: true, subtree: true });

function expandirPulso() {
  const pulsos = document.getElementById("pulsos");
  if (pulsos && !pulsos.classList.contains("expanded")) {
    pulsos.classList.add("expanded");
    pulsos.scrollTop = pulsos.scrollHeight;
    logMistico("◉ Pulso ativado com expansão externa.");
  }
}

function renderResponseBlocks({ intro = "", middle = "", ending = "" }) {
  const container = document.querySelector(".pages-wrapper");

  function createBlock(content, className) {
    const block = document.createElement("div");
    block.className = "response-block " + className;

    const parsed = content
      .replace(/(\p{Emoji_Presentation}|\p{Emoji})/gu, match => {
        return `<button class="symbol-btn" onclick="expandirPulso(); logMistico('Emoji: ${match}')">${match}</button>`;
      })
      .replace(/\[(.+?)\]/g, (match, p1) => {
        return `<button class="symbol-btn" onclick="expandirPulso(); logMistico('[${p1}]')">[${p1}]</button>`;
      });

    block.innerHTML = parsed;

    block.addEventListener("click", () => {
      block.classList.toggle("expanded");
      expandirPulso();
      logMistico("◉ Expandiu bloco: " + className);
    });

    return block;
  }

  if (intro)  container.appendChild(createBlock(intro, "intro"));
  if (middle) container.appendChild(createBlock(middle, "middle"));
  if (ending) container.appendChild(createBlock(ending, "ending"));
}

function renderSplitText(txt) {
  const groups = txt.split("---").map(str => str.trim()).filter(Boolean);
  return {
    intro: groups[0] || "",
    middle: groups[1] || "",
    ending: groups[2] || ""
  };
}

function renderResponse(input) {
  const wrap = document.querySelector(".pages-wrapper") || document.getElementById("pagesWrapper");
  if (!wrap) return console.warn("⚠️ .pages-wrapper não encontrado");

  wrap.innerHTML = "";

  // Aceita string dividida ou objeto Trinity
  const { intro, middle, ending } = typeof input === "string" ? renderSplitText(input) : input;

  const renderBlock = (text, className, icon) => {
    const block = document.createElement("div");
    block.className = `response-block ${className}`;
    
    // Submenu dinâmico
    const submenu = document.createElement("div");
    submenu.className = "submenu hidden";
    submenu.innerHTML = `
      <button onclick="logMistico('🔁 Reiniciando pulso: ${className}')">🔄 Repetir Pulso</button>
      <button onclick="mostrarNucleoAntecipacao()">◉ Ativar Núcleo</button>
      <button onclick="alert('💾 Exportar conteúdo em construção')">📥 Exportar</button>
    `;

    block.innerHTML = `
      <div class="nestedBlock">
        <div class="symbol-header">${icon}</div>
        <div class="symbol-body">${text}</div>
      </div>
    `;

    block.appendChild(submenu);

    // Toggle de submenu
    block.addEventListener("click", () => {
      submenu.classList.toggle("hidden");
      block.classList.toggle("expanded");
      logMistico(`🧬 Pulso expandido: ${className}`);
    pg.appendChild(block);
        });
        wrap.appendChild(pg);
        pages.push(pg);
    });

    return block;
  };

  if (intro) wrap.appendChild(renderBlock(intro, "intro", "🎁"));
  if (middle) wrap.appendChild(renderBlock(middle, "middle", "👁️"));
  if (ending) wrap.appendChild(renderBlock(ending, "ending", "◉"));
}

function salvarHistorico(pulso) {
  logResponseHistorico.push({ ...pulso, timestamp: new Date().toISOString() });

  const pulsos = document.getElementById("pulsos");
  if (pulsos) {
    const item = document.createElement("div");
    item.className = "pulso-item";
    item.innerHTML = `
      <div><strong>🕒</strong> ${new Date().toLocaleTimeString()}</div>
      <div>🎁 ${pulso.intro?.slice(0, 30) || ''}</div>
      <div>👁️ ${pulso.middle?.slice(0, 30) || ''}</div>
      <div>◉ ${pulso.ending?.slice(0, 30) || ''}</div>
      <button class="replay-btn">🔁 Repetir</button>
      <hr/>
    `;
    item.querySelector("button").addEventListener("click", () => {
      renderResponse(pulso);
      logMistico("♻️ Pulso do histórico reativado.");
    });
    pulsos.prepend(item);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const voiceBtn = document.getElementById("voiceBtn");
  if (!voiceBtn) return;

  let recognition;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn("Reconhecimento de voz não suportado.");
    voiceBtn.style.opacity = 0.2;
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    voiceBtn.classList.add("listening");
    logMistico("🎤 Pulso iniciado: ouvindo...");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    document.getElementById("userInput").value = transcript;
    logMistico("🎤 Voz detectada: " + transcript);
    document.getElementById("sendBtn").click();

    
  };

  recognition.onerror = (event) => {
    logMistico("⚠️ Erro de voz: " + event.error);
  };

  recognition.onend = () => {
    voiceBtn.classList.remove("listening");
    logMistico("🛑 Pulso finalizado");
  };

  voiceBtn.addEventListener("click", () => {
    try {
      recognition.start();
    } catch (err) {
      logMistico("🚫 Falha ao iniciar reconhecimento: " + err.message);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.getElementById("uploadFileBtn");
  const inputFile = document.getElementById("symbolicFileInput");

  uploadBtn?.addEventListener("click", () => {
    inputFile?.click();
  });

  inputFile?.addEventListener("change", () => {
    const file = inputFile.files[0];
    if (file) {
      logMistico("📂 Arquivo enviado: " + file.name);
      const reader = new FileReader();
      reader.onload = () => {
        logMistico("📖 Conteúdo: " + reader.result.slice(0, 300) + "...");
      };
      reader.readAsText(file);
    }
  });
});

function salvarConfiguracoesAvancadas() {
  const newSK = document.getElementById("skInput")?.value.trim();
  const roleSystem = document.getElementById("roleSystemInput")?.value.trim();
  const newModel = document.getElementById("modelSelector")?.value;

  if (newSK) {
    localStorage.setItem("INFODOSE_SK", newSK);
    logMistico("🔐 Nova chave SK salva.");
  }

  if (roleSystem) {
    sessionStorage.setItem("ROLE_SYSTEM_DOC", roleSystem);
    logMistico("📜 Role System atualizado.");
  }

  if (newModel) {
    localStorage.setItem("INFODOSE_MODEL", newModel);
    logMistico("🤖 Modelo alterado para: " + newModel);
  }

  alert("Configurações avançadas aplicadas.");
}

function ATIVAR_KOBLLUX_PATCH() {
  // CSS refinado com bordas suaves
  const style = document.createElement("style");
  style.textContent = `
    :root {
    
      --mask-gradient: linear-gradient(45deg, #F0F, #0FF);
    }

    button,
    .symbol-button,
   

    
    .response-container,
    .login-container,
    #decoderBox,
    #koblluxPlayer,
    #pulsos-container {

    -webkit-mask-image: var(--mask-gradient);
      mask-image: var(--mask-gradient);
      border-image: var(--mask-gradient);
      border-image-slice: 1;
      border-width: 1px;
      border-style: solid;
      border-radius: 28px;
    
  transition: transform 0.2s, box-shadow 0.3s;

  cursor: pointer;
    }

    .symbol-btn {
      -webkit-mask-image: var(--mask-gradient);
      mask-image: var(--mask-gradient);
      border-image: var(--mask-gradient);
      border-image-slice: 1;
      background: var(--bg);
      border: 1px solid rgba(0, 255, 255, 0.2);
      color: #0ff;
      border-radius: 8px;
      padding: 2px 6px;
      margin: 2px;
      cursor: pointer;
      font-size: 0.9em;
    }

    .response-block {
      padding: 1.8rem !important;
    }
  `;
  document.head.appendChild(style);

  // renderResponse aprimorado
  window.renderResponse = function(text) {
    const container = document.querySelector(".pages-wrapper");
    if (!container) return;
    container.innerHTML = "";

    const sentences = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const classes = ["intro", "middle", "ending"];

    sentences.forEach((para, index) => {
      const block = document.createElement("div");
      block.className = "response-block " + classes[index % 3];

      const parsed = para
        .replace(/(\p{Emoji_Presentation}|\p{Emoji})/gu, match =>
          `<button class="symbol-btn" onclick="logMistico('Emoji: ${match}')">${match}</button>`
        )
        .replace(/\[(.+?)\]/g, (match, p1) =>
          `<button class="symbol-btn" onclick="logMistico('[${p1}]')">[${p1}]</button>`
        );

      block.innerHTML = parsed;

      block.addEventListener("click", () => {
        block.classList.toggle("expanded");
        const pulsos = document.getElementById("pulsos");
        if (pulsos) pulsos.classList.toggle("expanded");
        logMistico("◉ Expandiu bloco: " + block.className);
      });

      container.appendChild(block);
    });

    logMistico("✅ renderResponse executado com " + sentences.length + " blocos");
  };

  // VoiceBtn refinado
  const voiceBtn = document.getElementById("voiceBtn");
  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'pt-BR';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const inputField = document.getElementById("userInput");
        if (inputField) {
          inputField.value = transcript;
          document.getElementById("sendBtn")?.click();
          logMistico("🎤 Voz capturada: " + transcript);
        }
      };

      recognition.onerror = (event) => {
        logMistico("❌ Erro no microfone: " + event.error);
      };

      logMistico("🎤 Microfone ativado");
    });
  }

  // LOG MISTICO — Universal logging visual + ações opcionais
window.logMistico = function(msg, options = {}) {
  const el = document.createElement("div");
  el.className = "debug-mistico";
  el.innerText = "◉ " + msg;

  const pulsos = document.getElementById("pulsos");
  if (pulsos) {
    pulsos.appendChild(el);
    pulsos.scrollTop = pulsos.scrollHeight;
  } else {
    console.log("[KOBLLUX LOG]:", msg);
  }

  // Ações opcionais integradas ao log
  if (options.enviarPulso && options.simbolo) {
    registrarPulsoEEnviar(options.simbolo);
  }

  if (options.callAI) {
    callAI();
  }

  if (options.updateUI) {
    updateUI();
  }
};

  // Eventos extras
  document.getElementById("toggleBtn")?.addEventListener("click", () => logMistico("🧠 Assistente Toggled"));
  document.getElementById("kittyBtn")?.addEventListener("click", () => logMistico("🐱 Kitty ativado"));
  document.getElementById("sendBtn")?.addEventListener("click", () => {
    const msg = document.getElementById("userInput")?.value;
    logMistico("📤 Enviado: " + msg);
  });

  logMistico("✨ PATCH KOBLLUX SUPREMO ativado");
}

function registrarPulsoEEnviar(simbolo) {
  logMistico(`🧿 Pulso simbólico ativado: ${simbolo}`);
  
  if (!isEnabled) {
    isEnabled = true;
    localStorage.setItem(STORAGE_KEY, '1');
    updateUI();
  }

  showLoading(` Pulso simbiótico de "${simbolo}" em expansão...`);
  conversation.push({
    role: 'user',
    content: `✨ Pulso simbólico: ${simbolo}`
  });

  callAI();
}

ATIVAR_KOBLLUX_PATCH();

(function(){
  function wireButtons(){
    const input = document.getElementById('userInput');
    // SEND
    const send = document.getElementById('sendBtn');
    if (send && !send.dataset.koduxWired) {
      const newSend = send.cloneNode(true);
      send.parentNode.replaceChild(newSend, send);
      newSend.dataset.koduxWired = "1";
      newSend.addEventListener('click', () => {
        const val = (input?.value || '').trim();
        if (!val) { input?.focus(); return; }
        if (typeof window.onSend === 'function') {
          try { window.onSend(); return; } catch(e){}
        }
        // Fallback: dispatch click to any original sendBtn (if re-added later)
        newSend.dispatchEvent(new Event('kodux-send', {bubbles:true}));
      });
    }
    // VOICE
    const voice = document.getElementById('voiceBtn');
    if (voice && !voice.dataset.koduxWired) {
      const newVoice = voice.cloneNode(true);
      voice.parentNode.replaceChild(newVoice, voice);
      newVoice.dataset.koduxWired = "1";
      newVoice.addEventListener('click', () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          try {
            const rec = new SpeechRecognition();
            rec.lang = 'pt-BR';
            rec.interimResults = false;
            rec.maxAlternatives = 1;
            newVoice.classList.add('listening');
            rec.onresult = (evt) => {
              const transcript = evt.results[0][0].transcript || '';
              if (input) input.value = transcript.trim();
              const val = (input?.value || '').trim();
              if (val && typeof window.onSend === 'function') {
                try { window.onSend(); } catch(e){}
              }
            };
            rec.onerror = () => { /* graceful fallback below onend */ };
            rec.onend = () => {
              newVoice.classList.remove('listening');
              // Fallback: if user dictated or typed something, send it
              const val = (input?.value || '').trim();
              if (val && typeof window.onSend === 'function') {
                try { window.onSend(); } catch(e){}
              } else {
                input?.focus();
              }
            };
            rec.start();
            return;
          } catch(err) {
            // continue to fallback
          }
        }
        // No SR support -> treat as quick-send
        const val = (input?.value || '').trim();
        if (val && typeof window.onSend === 'function') {
          try { window.onSend(); } catch(e){}
        } else {
          input?.focus();
        }
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireButtons);
  } else {
    wireButtons();
  }
})();

(function(){
  const b=document.getElementById('sumbus-toggle'); if(!b) return;
  const K='SUMBUS_ACTIVE'; const saved=localStorage.getItem(K);
  if(saved==='false'){ window.__SUMBUS_ACTIVE__=false; b.textContent='SÜMBÜS: OFF'; b.style.color='#aaa'; }
  b.addEventListener('click',(ev)=>{ ev.stopPropagation();
    const on = !(window.__SUMBUS_ACTIVE__===true);
    window.__SUMBUS_ACTIVE__ = on;
    b.textContent = on? 'SÜMBÜS: ON' : 'SÜMBÜS: OFF';
    b.style.color = on? '#0ff' : '#aaa';
    localStorage.setItem(K,String(on));
  });
})();

// SuperPatch v6.2.2 — no MetaLux, keep upload, single feed
(function(){
  if (window.__SUPERPATCH_V622__) return; window.__SUPERPATCH_V622__=true;
  window.__SUMBUS_ACTIVE__ = (window.__SUMBUS_ACTIVE__ ?? true);
  const INJECT_OUTBOUND = true;
  const $=(s,r=document)=>r.querySelector(s);
  const now=()=>{const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`};
  function dual_formatter(t){try{t=String(t??'');t=t.replace(/\.{3}/g,'…⚡');t=t.replace(/(\d+)/g,'🔢 $1');t=t.replace(/\b(\w+)\b(?=!)/g,'🌟 $1');if(/\?\s*$/.test(t))t=t.replace(/\?\s*$/,'')+'🌀';t=t.replace(/\s{2,}/g,'⸱');return t}catch(e){return String(t??'')}}
  function detectArch(t){const A=[[/(meta)?lux/i,'🜚 MetaLux'],[/kaos|caos|chaos/i,'🌪️ Chaos'],[/lumine|luz/i,'🌟 Lumine'],[/pulse|pulso/i,'💓 Pulse'],[/atlas|mundo|terra/i,'🌍 Atlas'],[/rhea|lua/i,'🌙 Rhea'],[/rhia/i,'🧬 RHIA'],[/nova/i,'☀️ Nova'],[/sol/i,'🔥 Sol'],[/ion|íon/i,'⚛️ Ion'],[/artemis/i,'🏹 Artemis'],[/anfodote|antidoto|antídoto/i,'🧪 Anfodote']];for(const [k,l] of A) if(k.test(t))return l;return '🧬 Neutro';}
  function vib(t){let h=0,s=String(t??'');for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;const v=((h%40)/4+6.0);return Math.min(10,Math.max(1,+(v/1.75).toFixed(1)))}
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const br=s=>esc(s).replace(/\n/g,'<br/>');

  function updateHUD({regex,vib,arch}){
    const ft=$('.footer-text'); if(!ft) return;
    ft.setAttribute('data-hud','1');
    const base=ft.getAttribute('data-base')||ft.textContent.trim()||'sempre único, sempre seu';
    ft.setAttribute('data-base',base);
    ft.innerHTML = `${esc(base)} · <span class="dual-chip">${esc(arch||'Neutro')}</span> <span class="dual-chip">Regex</span> <span class="dual-chip">Vib: ${esc(String(vib??'–'))}</span>`;
  }
  function logPulso(msg){
    const p=$('#pulsos'); if(!p) return;
    const d=document.createElement('div'); d.className='debug-mistico';
    const ts=new Date(),pad=n=>String(n).padStart(2,'0');
    d.textContent=`[${pad(ts.getHours())}:${pad(ts.getMinutes())}:${pad(ts.getSeconds())}] ${msg}`;
    p.prepend(d);
  }
  function applyTheme(label){
    const name=String(label||'').replace(/^[^A-Za-zÀ-ÿ]*\s*/, '').trim()||'Neutro';
    document.body.dataset.arch=name;
    localStorage.setItem('SUMBUS_LAST_ARCH',name);
    document.body.classList.add('vibe'); setTimeout(()=>document.body.classList.remove('vibe'),600);
    return name;
  }
  (function rsArch(){const last=localStorage.getItem('SUMBUS_LAST_ARCH'); if(last) document.body.dataset.arch=last;})();

  (function rsScroll(){
    const c=$('.response-container'); if(!c) return;
    const K='SUMBUS_SCROLL_TOP'; const last=+localStorage.getItem(K); if(!isNaN(last)) c.scrollTop=last;
    c.addEventListener('scroll',()=>localStorage.setItem(K,c.scrollTop),{passive:true});
  })();

  function renderDual({userQuery,resposta,regex,arch,energy}){
    const el=document.createElement('div'); el.className='dual-md';
    el.innerHTML = `<blockquote>🌌 ${esc(userQuery||'Dual.Infodose')}<br/><small>${now()}</small></blockquote>`+
      `<div>${br(resposta||'')}</div>`+
      `<div style="margin-top:10px"><span class="dual-chip">Regex: ${esc(regex||'')}</span> <span class="dual-chip">Arquétipo: ${esc(arch||'')}</span> <span class="dual-chip">Vibração: ${esc(String(energy||''))}/10</span></div>`;
    const cont=$('.response-container')||document.body; cont.appendChild(el); cont.scrollTop=cont.scrollHeight; return el;
  }

  if (typeof window.splitText==='function' && !window.splitText.__v622){
    const prev=window.splitText;
    window.splitText=function(text,maxLen){ try{return [String(text??'')]}catch(e){return prev.call(this,text,maxLen)} };
    window.splitText.__v622=true;
  }

  (function hookRender(){
    const g=window; if(typeof g.renderResponse!=='function' || g.renderResponse.__v622) return;
    const prev=g.renderResponse;
    g.renderResponse=function(...a){
      const ret=prev.apply(this,a);
      try{
        if(!window.__SUMBUS_ACTIVE__) return ret;
        const txt=(a && typeof a[0]==='string')?a[0]:''; if(!txt) return ret;
        const arch=detectArch(txt), energy=vib(txt), regex=r'\b(\w+)\b(?=!) + \?$ + \.\.\.→…⚡ + (\d+)';
        const out=dual_formatter(txt);
        const name=applyTheme(arch);
        updateHUD({regex,vib:energy,arch:name}); logPulso('🔁 Voz: '+arch);
        renderDual({userQuery: window.__KOBLLUX_LAST_QUERY__||'Dual.Infodose', resposta: out, regex, arch, energy});
      }catch(e){}
      return ret;
    }; g.renderResponse.__v622=true;
  })();

  (function hookCall(){
    const g=window; if(typeof g.callAI!=='function' || g.callAI.__v622) return;
    const prev=g.callAI;
    g.callAI=function(prompt,...rest){
      const raw=(typeof prompt==='string'?prompt:String(prompt??''));
      window.__KOBLLUX_LAST_QUERY__=raw;
      if(window.__SUMBUS_ACTIVE__){
        const energy=vib(raw); renderDual({userQuery:'Você',resposta:dual_formatter(raw),regex:'ida',arch:'Usuário',energy});
      }
      const payload=(window.__SUMBUS_ACTIVE__&&INJECT_OUTBOUND) ? dual_formatter(raw) : raw;
      const r=prev.call(this,payload,...rest);
      if(r && typeof r.then==='function'){ return r.then(x=>{ try{ window.renderResponse && window.renderResponse(String(x)); }catch(e){} return x; }); }
      return r;
    }; g.callAI.__v622=true;
  })();

  (function rememberInput(){
    const i=$('.input-container input'), b=$('.input-container button');
    if(!i||!b) return; const set=()=>window.__KOBLLUX_LAST_QUERY__=i.value;
    b.addEventListener('click',set,{capture:true}); i.addEventListener('keydown',ev=>{if(ev.key==='Enter') set();});
  })();

  // Do not remove upload; no MetaLux button
})();

(function(){
  if (window.__REFINE_629__) return; window.__REFINE_629__=true;

  const $ = (s,r=document)=>r.querySelector(s);
  const create = (t,c,h)=>{ const e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e; };
  const esc = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function protectCode(text){
    const stash=[];
    let i=0;
    const protected = text
      // ```code``` blocks
      .replace(/```([\s\S]*?)```/g, (_,code)=>`§§CODE${stash.push(code)-1}§§`)
      // inline `code`
      .replace(/`([^`]+)`/g, (_,code)=>`§§INL${stash.push(code)-1}§§`);
    return { 
      text: protected, 
      restore: (t)=>t
        .replace(/§§CODE(\d+)§§/g, (_,k)=>"<pre><code>"+esc(stash[+k])+"</code></pre>")
        .replace(/§§INL(\d+)§§/g,  (_,k)=>"<code>"+esc(stash[+k])+"</code>")
    };
  }

  function dualFormatter(t){
    // safe formatting outside of code
    const {text, restore} = protectCode(String(t||''));
    let x = text;
    x = x.replace(/\.{3}/g,'…⚡');
    x = x.replace(/(?<!\w)(\d{1,3}(?:[.,]\d{3})*|\d+)(?!\w)/g,'<span class="num">🔢 $1</span>');
    x = x.replace(/\b(\w+)\b(?=!)/g,'<span class="em">🌟 $1</span>');
    x = x.replace(/\?\s*$/,'🌀');
    x = x.replace(/\s{2,}/g,'⸱');
    return restore(x);
  }

  // smarter split for single-page blocks
  function smartSplit(text, maxChars){
    const MAX = +localStorage.getItem('SUMBUS_MAX_CHARS') || (maxChars||1200);
    const segments = [];
    const {text: safe, restore} = protectCode(text);
    // split on strong boundaries while preserving tables and code markers we've stashed
    let parts = safe
      .split(/\n(?=#{1,6}\s)|\n-{3,}\n|\n\*{3,}\n|\n\s*\n/g)
      .filter(p=>p && p.trim());

    // re-wrap to MAX by sentence if needed
    const out=[];
    for (let p of parts){
      if (p.length<=MAX){ out.push(p); continue; }
      const sentences = p.match(/[^\.!\?]+[\.!\?]+|\S+$/g) || [p];
      let buf="";
      for (const s of sentences){
        if ((buf+s).length>MAX){
          out.push(buf.trim()); buf=s;
        } else {
          buf+=s;
        }
      }
      if (buf.trim()) out.push(buf.trim());
    }
    for (const o of out) segments.push( restore(o) );
    return segments;
  }

  function renderResponseUnified(txt){
    const wrap = document.querySelector('.pages-wrapper');
    if (!wrap) return;
    wrap.innerHTML = '';
    const page = create('div','page active','');
    const blocks = smartSplit(dualFormatter(txt));

    blocks.forEach((chunk, idx)=>{
      const cls = idx===0?'intro': (idx%3===1?'middle':'ending');
      const block = create('div','response-block '+cls, '<p>'+chunk+'</p>');
      page.appendChild(block);
    });
    wrap.appendChild(page);

    const ind = document.querySelector('#pageIndicator');
    if (ind) ind.textContent = '1 / 1';
  }

  // hook original renderResponse if exists
  const g=window;
  if (typeof g.renderResponse === 'function' && !g.renderResponse.__refine629){
    const prev = g.renderResponse;
    g.renderResponse = function(text){
      try{
        renderResponseUnified(String(text||''));
      }catch(e){
        console.warn('refine629 fallback', e);
        return prev.apply(this, arguments);
      }
    };
    g.renderResponse.__refine629 = true;
  }

  // also refine when calling AI result comes back as string
  if (typeof g.callAI === 'function' && !g.callAI.__refine629){
    const prev = g.callAI;
    g.callAI = function(prompt, ...rest){
      const r = prev.call(this, prompt, ...rest);
      if (r && typeof r.then === 'function'){
        return r.then(ans=>{
          try{ renderResponseUnified(String(ans||'')); }catch(e){}
          return ans;
        });
      }
      return r;
    };
    g.callAI.__refine629 = true;
  }

  // Center controls if pagination is removed
  (function centerControls(){
    const rc = document.querySelector('.response-controls');
    if (rc){
      // ensure only control-buttons are visible inside
      const pag = rc.querySelector('.pagination');
      if (pag) pag.style.display='none';
    }
  })();

})();

/* --- KOBLLUX: bootstrap helpers for SÜMBÜS toggle --- */
(function(){
  const ON = true, OFF = false;
  function call(fnName, ...args){ try { if (typeof window[fnName] === 'function') return window[fnName](...args); } catch(e) {} }
  function applySymbolsMode(on){
    try { localStorage.setItem('dual_symbols', on ? 'on':'off'); } catch(e){}
    call('applySymbols', on);
    call('setSymbolsMode', on);
    call('enableSymbols', on);
    call('toggleSymbols', on);
    try { document.documentElement.setAttribute('data-symbus', on? 'on':'off'); } catch(e){}
  }
  window.__symbus_apply = applySymbolsMode;
})();

/* --- SÜMBÜS default ON (keep toggle visible) --- */
(function(){
  let stored = null;
  try { stored = localStorage.getItem('dual_symbols'); } catch(e){}
  if (!stored) { try { localStorage.setItem('dual_symbols','on'); } catch(e){} }
  function go(){ window.__symbus_apply(((stored||'on') === 'on')); }
  (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', go) : go());
})();

/* --- SÜMBÜS: label sync + micro-pulse --- */
(function(){
  function findToggle(){
    // Look for explicit attribute first
    let el = document.querySelector('[data-symbus-toggle]');
    if (el) return el;
    // Fallback: find by visible text
    const all = Array.from(document.querySelectorAll('button, [role="button"], .btn, .chip, .pill'));
    return all.find(b=>/s[üu]mb[üu]s|symbols|símbolos/i.test((b.innerText||'').trim()));
  }
  function label(on){
    return `SÜMBÜS ∴ ${on ? 'ON' : 'OFF'}`;
  }`;
\}`;
  }
  function setLabel(el,on){
    if (!el) return;
    el.classList.add('symbus-toggle');
    // prefer data-label container if exists
    const slot = el.querySelector('[data-label]');
    if (slot) slot.textContent = label(on);
    else el.textContent = label(on);
  }
  function pulse(el){
    if (!el) return;
    el.classList.remove('ring-pulse');
    // force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('ring-pulse');
  }
  // Hook into the bootstrap apply
  const apply = window.__symbus_apply;
  window.__symbus_apply = function(on){
    const r = apply ? apply(on) : undefined;
    try{
      const el = findToggle();
      setLabel(el,on);
      pulse(el);
      el?.setAttribute('aria-pressed', on ? 'true' : 'false');
    }catch(e){}
    return r;
  };
  // Initialize once DOM is ready
  function init(){
    try{
      const stored = (localStorage.getItem('dual_symbols')||'on') === 'on';
      const el = findToggle();
      setLabel(el, stored);
    }catch(e){}
  }
  (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init());
})();

(function(){
  const $ = (id) => document.getElementById(id);
  const els = {
    btn: $('aiConfigBtn'), modal: $('aiConfigModal'), close: $('aiClose'),
    list: $('symList'), add: $('addSymBtn'), reset: $('resetSymBtn'),
    map: $('codeMapArea'), preview: $('codeMapPreview'), valid: $('validateCodeBtn'),
    iframeBox: $('iframeBox'), iframe: $('previewFrame'), closeFrame: $('closeIframe'),
    role: $('roleSystemField'), sk: $('skField'), model: $('modelField'),
    api: $('apiUrlField'), temp: $('tempField'), embed: $('embedToggle'),
    save: $('saveBtn'), apply: $('applyBtn'), exp: $('exportBtn'), imp: $('importBtn'), file: $('importFile')
  };

  const KEYS = { SYM:'INFODOSE_SYMBOLS', MAP:'INFODOSE_CODE_MAP', SK:'INFODOSE_SK', MDL:'INFODOSE_MODEL', API:'INFODOSE_API_URL', TMP:'INFODOSE_TEMP' };
  const safeJson = (s) => { try{ return JSON.parse(s) }catch{ return null } };
  
  // --- SYMBOLS ---
  function renderSyms(arr){
    els.list.innerHTML = '';
    arr.forEach((it,i) => {
      const d = document.createElement('div'); d.className = 'sym-item';
      d.draggable = true;
      d.innerHTML = `
        <span class="drag-handle">≡</span>
        <input value="${it.label||''}" data-i="${i}" data-k="label" placeholder="Label">
        <input value="${it.url||''}" data-i="${i}" data-k="url" placeholder="URL">
        <button class="btn-del" data-i="${i}">✕</button>`;
      
      // Drag Logic Minimal
      d.ondragstart = e => e.dataTransfer.setData('i', i);
      d.ondragover = e => e.preventDefault();
      d.ondrop = e => {
        e.preventDefault();
        const from = e.dataTransfer.getData('i');
        const list = safeJson(localStorage.getItem(KEYS.SYM))||[];
        list.splice(i, 0, list.splice(from, 1)[0]);
        saveSyms(list);
      };
      els.list.appendChild(d);
    });
  }
  function saveSyms(a){ localStorage.setItem(KEYS.SYM, JSON.stringify(a)); renderSyms(a); }
  function getDom(){ 
    const b = document.querySelectorAll('.symbol-bar button');
    return Array.from(b).map(x=>({label:x.textContent, url:x.dataset.href||''})); 
  }

  // --- ACTIONS ---
  els.btn.onclick = () => {
    els.modal.style.display = 'flex';
    const s = safeJson(localStorage.getItem(KEYS.SYM)) || getDom();
    renderSyms(s);
    els.map.value = JSON.stringify(safeJson(localStorage.getItem(KEYS.MAP))||window.CODE_MAP||{}, null, 2);
    els.sk.value = localStorage.getItem(KEYS.SK)||'';
    els.model.value = localStorage.getItem(KEYS.MDL)||'';
    els.api.value = localStorage.getItem(KEYS.API)||'';
    els.role.value = sessionStorage.getItem('ROLE')||'';
  };
  els.close.onclick = () => els.modal.style.display = 'none';
  
  // Sym Actions
  els.add.onclick = () => { const l=safeJson(localStorage.getItem(KEYS.SYM))||[]; l.push({label:'New',url:''}); saveSyms(l); };
  els.reset.onclick = () => saveSyms(getDom());
  els.list.onclick = e => { if(e.target.classList.contains('btn-del')) {
     const l=safeJson(localStorage.getItem(KEYS.SYM)); l.splice(e.target.dataset.i,1); saveSyms(l);
  }};
  els.list.oninput = e => {
     if(e.target.tagName==='INPUT'){
       const l=safeJson(localStorage.getItem(KEYS.SYM)); l[e.target.dataset.i][e.target.dataset.k]=e.target.value;
       localStorage.setItem(KEYS.SYM, JSON.stringify(l));
     }
  };

  // Preview Logic
  els.valid.onclick = () => {
    const map = safeJson(els.map.value);
    els.preview.innerHTML = '';
    if(!map) return alert('JSON Inválido');
    Object.entries(map).forEach(([k,v]) => {
      const b = document.createElement('button');
      b.className = 'btn'; b.style.flex='none'; b.textContent = k;
      b.onclick = () => { els.iframeBox.style.display='block'; els.iframe.src=v; };
      els.preview.appendChild(b);
    });
  };
  els.closeFrame.onclick = () => { els.iframeBox.style.display='none'; els.iframe.src=''; };

  // Save/Apply
  const commit = (persist) => {
    const syms = safeJson(localStorage.getItem(KEYS.SYM))||[];
    const bar = document.querySelector('.symbol-bar');
    if(bar) {
      bar.innerHTML = '';
      syms.forEach(s => {
         const b = document.createElement('button'); b.className='symbol-button';
         b.textContent = s.label; b.onclick = () => window.open(s.url,'_blank'); 
         bar.appendChild(b);
      });
    }
    if(persist){
      localStorage.setItem(KEYS.MAP, els.map.value);
      localStorage.setItem(KEYS.SK, els.sk.value);
      localStorage.setItem(KEYS.MDL, els.model.value);
      localStorage.setItem(KEYS.API, els.api.value);
      sessionStorage.setItem('ROLE', els.role.value);
      alert('Salvo!');
    }
  };
  els.apply.onclick = () => commit(false);
  els.save.onclick = () => commit(true);
  
  // Import/Export
  els.exp.onclick = () => {
    const d = { sym:safeJson(localStorage.getItem(KEYS.SYM)), map:safeJson(els.map.value) };
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(d)],{type:'json'}));
    a.download = 'cfg.json'; a.click();
  };
  els.imp.onclick = () => els.file.click();
  els.file.onchange = e => {
    const r = new FileReader(); r.onload = ev => {
       const d = safeJson(ev.target.result);
       if(d && d.sym) localStorage.setItem(KEYS.SYM, JSON.stringify(d.sym));
       if(d && d.map) els.map.value = JSON.stringify(d.map);
       alert('Importado. Reabra o painel.');
    };
    r.readAsText(e.target.files[0]);
  };
})();

/* ----- End: script.js ----- */



/* ----- Begin: script_fixed 3.js ----- */

/* script_fixed.js — KODUX cleaned & robust version
   - Safe particles init
   - CODE_MAP updated to github pages
   - MyFrameLoader custom element
   - upload / remote component handling
   - decodeSymbolicCode using CODE_MAP
   - pulsos log + UI wiring
   - player controls
   - safe voice handling and send button wiring
   - lightweight renderResponse & registrarPulsoEEnviar
   Keep this file as /script.js in your repo.
*/

(function () {
  "use strict";

  /***** CONFIG & MAPS *****/
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

  const SOUND_PATHS = {
    click: 'assets/sounds/uiSamples/navigation.wav',
    hover: 'assets/sounds/uiSamples/hover.wav',
    confirm: 'assets/sounds/uiSamples/confirm.wav'
  };

  /***** UTILITIES *****/
  function safeQuery(sel) {
    try { return document.querySelector(sel); } catch(e) { return null; }
  }

  function $(sel) { return safeQuery(sel); }

  /***** PARTICLES (safe) *****/
  function initParticles() {
    if (!window.particlesJS) {
      console.warn('particlesJS not found — CDN or path may be missing.');
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
      console.info('particlesJS initialized');
    } catch (err) {
      console.error('particlesJS init error', err);
    }
  }

  /***** MyFrameLoader custom element *****/
  class MyFrameLoader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9999}
          .container{width:92%;height:86%;background:#111;border-radius:12px;overflow:hidden;position:relative}
          iframe{width:100%;height:100%;border:none}
          .close{position:absolute;right:12px;top:12px;background:#f0f;border:none;padding:6px;border-radius:8px;cursor:pointer}
        </style>
        <div class="overlay"><div class="container"><button class="close">✖</button><iframe></iframe></div></div>
      `;
      this._iframe = shadow.querySelector('iframe');
      shadow.querySelector('.close').addEventListener('click', () => this.remove());
    }

    set src(url) {
      this._iframe.src = url;
    }
  }
  if (!customElements.get('my-frame-loader')) customElements.define('my-frame-loader', MyFrameLoader);

  /***** PULSOS / LOGGING *****/
  const pulsosEl = $('#pulsos');
  function logMistico(msg) {
    if (!pulsosEl) { console.log('🔮', msg); return; }
    const d = document.createElement('div');
    d.className = 'debug-mistico';
    d.textContent = '◉ ' + msg;
    pulsosEl.appendChild(d);
    if (!pulsosEl.classList.contains('expanded')) pulsosEl.scrollTop = pulsosEl.scrollHeight;
  }

  /***** LOAD / OPEN PAGE *****/
  const mainFrame = $('#frame');
  function loadPage(url) {
    if (!mainFrame) { window.open(url, '_blank'); return; }
    mainFrame.classList.remove('active');
    setTimeout(() => {
      mainFrame.src = url;
      mainFrame.onload = () => mainFrame.classList.add('active');
    }, 220);
  }

  /***** UPLOAD & REMOTE COMPONENTS *****/
  const uploadInput = $('#uploadHTML');
  const uploadBtn = $('#uploadComponentBtn');
  const remoteBtn = $('#remoteComponentBtn');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      logMistico('📁 Selecionar arquivo local');
      uploadInput.click();
    });

    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.name.endsWith('.html')) return alert('Selecione um arquivo .html');
      const reader = new FileReader();
      reader.onload = (ev) => {
        const blob = new Blob([ev.target.result], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        const modal = document.createElement('my-frame-loader');
        modal.src = blobUrl;
        document.body.appendChild(modal);
        logMistico('📦 Componente carregado: ' + file.name);
      };
      reader.readAsText(file);
    });
  }

  if (remoteBtn) {
    remoteBtn.addEventListener('click', () => {
      const url = prompt('URL do componente remoto:');
      if (!url) return;
      const modal = document.createElement('my-frame-loader');
      modal.src = url;
      document.body.appendChild(modal);
      logMistico('🔗 Componente remoto aberto');
    });
  }

  /***** DECODER (CODE_MAP) *****/
  function decodeSymbolicCode() {
    try {
      const raw = ($('#codeInput') && $('#codeInput').value) || '';
      const code = raw.trim();
      if (!code) return alert('Digite um selo');
      const key = code.toString();
      const dest = CODE_MAP[key] || CODE_MAP[key.toUpperCase()] || CODE_MAP[key.toLowerCase()] || CODE_MAP[key.replace(/\s+/g,'')];
      if (!dest) { alert('Selo desconhecido'); return; }
      const modal = document.createElement('my-frame-loader');
      modal.src = dest;
      document.body.appendChild(modal);
      ($('#decoderBox') && ($('#decoderBox').style.display = 'none'));
      logMistico('🔓 Selo: ' + key);
    } catch (err) {
      console.error('decodeSymbolicCode error', err);
      alert('Erro ao decodificar (ver console)');
    }
  }
  window.decodeSymbolicCode = decodeSymbolicCode;

  /***** PLAYER CONTROLS (safe) *****/
  function initPlayerControls() {
    const toggle = $('#togglePlayer');
    const controls = $('#playerControls');
    const playBtn = $('#playPause');
    const trackSelect = $('#trackSelect');
    const binauralSelect = $('#binauralSelect');
    const trackVolume = $('#trackVolume');
    const binauralVolume = $('#binauralVolume');
    if (!toggle || !controls || !playBtn) return;

    const trackAudio = new Audio();
    const binauralAudio = new Audio();

    toggle.addEventListener('click', () => {
      controls.style.display = controls.style.display === 'flex' ? 'none' : 'flex';
    });

    playBtn.addEventListener('click', () => {
      if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
      if (binauralAudio.src) binauralAudio.paused ? binauralAudio.play() : binauralAudio.pause();
      playBtn.textContent = (trackAudio.paused && binauralAudio.paused) ? '►' : '⏸';
    });

    trackSelect && trackSelect.addEventListener('change', () => {
      if (!trackSelect.value) { trackAudio.pause(); trackAudio.src = ''; return; }
      trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
      trackAudio.loop = true;
      trackAudio.volume = trackVolume ? trackVolume.value : 1;
      trackAudio.play().catch(()=>logMistico('🔈 Falha ao tocar trilha (arquivo pode não existir)'));
    });

    binauralSelect && binauralSelect.addEventListener('change', () => {
      if (!binauralSelect.value) { binauralAudio.pause(); binauralAudio.src = ''; return; }
      binauralAudio.src = `assets/sounds/binaural/${binauralSelect.value}.wav`;
      binauralAudio.loop = true;
      binauralAudio.volume = binauralVolume ? binauralVolume.value : 1;
      binauralAudio.play().catch(()=>logMistico('🔉 Falha ao tocar binaural (arquivo pode não existir)'));
    });

    trackVolume && trackVolume.addEventListener('input', () => { trackAudio.volume = trackVolume.value; });
    binauralVolume && binauralVolume.addEventListener('input', () => { binauralAudio.volume = binauralVolume.value; });
  }

  /***** VOICE & SEND wiring *****/
  function wireSendAndVoice() {
    const input = $('#userInput');
    const sendBtn = $('#sendBtn');
    const voiceBtn = $('#voiceBtn');

    function safeOnSend() {
      const val = (input && input.value || '').trim();
      if (!val) { input && input.focus(); return; }
      // fallback behaviour: show as pulso in UI
      renderResponse(`Você: ${val}`);
      logMistico('📤 ' + val);
      input.value = '';
    }

    if (sendBtn && !sendBtn.dataset.koduxWired) {
      sendBtn.addEventListener('click', safeOnSend);
      sendBtn.dataset.koduxWired = '1';
    }

    if (input) {
      input.addEventListener('keypress', (e) => { if (e.key === 'Enter') safeOnSend(); });
    }

    if (!voiceBtn) return;
    // robust voice: only enable if available
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRec) {
      voiceBtn.style.opacity = 0.4;
      voiceBtn.title = 'Reconhecimento de voz não suportado';
      return;
    }

    let rec = null;
    voiceBtn.addEventListener('click', () => {
      try {
        if (!rec) {
          rec = new SpeechRec();
          rec.lang = 'pt-BR';
          rec.interimResults = false;
          rec.maxAlternatives = 1;
          rec.onstart = () => { voiceBtn.classList && voiceBtn.classList.add('listening'); logMistico('🎤 Ouvindo...'); };
          rec.onresult = (ev) => {
            const t = ev.results[0][0].transcript || '';
            if (input) input.value = t.trim();
            logMistico('🎤 Capturado: ' + t.trim());
            safeOnSend();
          };
          rec.onerror = (err) => { logMistico('⚠️ SR error: ' + (err.error || err.message || 'unknown')); };
          rec.onend = () => { voiceBtn.classList && voiceBtn.classList.remove('listening'); };
        }
        rec.start();
      } catch (err) {
        console.warn('Voice start failed', err);
      }
    });
  }

  /***** RENDERING PULSOS (simplified) *****/
  function renderResponse(text) {
    const wrapper = document.querySelector('.pages-wrapper') || document.getElementById('pagesWrapper');
    if (!wrapper) { console.warn('pages-wrapper not found'); return; }
    const page = document.createElement('div');
    page.className = 'page active';
    const block = document.createElement('div');
    block.className = 'response-block intro';
    block.innerHTML = `<p>${String(text).replace(/\n/g,'<br>')}</p>`;
    block.addEventListener('click', () => {
      block.classList.toggle('expanded');
      logMistico('◉ Bloco expandido');
    });
    page.appendChild(block);
    wrapper.appendChild(page);
    // update page indicator if present
    const indicator = $('#pageIndicator');
    if (indicator) indicator.textContent = `1 / ${wrapper.querySelectorAll('.page').length}`;
  }
  window.renderResponse = renderResponse;

  /***** registrarPulsoEEnviar (connects to AI later) *****/
  function registrarPulsoEEnviar(simbolo) {
    logMistico(`🧿 Pulso simbólico: ${simbolo}`);
    renderResponse(`✨ Pulso simbólico recebido: ${simbolo}`);
    // Placeholder: if you have callAI implemented, push to conversation & callAI()
    if (typeof window.callAI === 'function') {
      try {
        window.callAI(simbolo);
      } catch (e) { console.warn('callAI failed', e); }
    }
  }
  window.registrarPulsoEEnviar = registrarPulsoEEnviar;

  /***** salvarConfiguracoesAvancadas helper *****/
  window.salvarConfiguracoesAvancadas = function() {
    const sk = $('#skInput') && $('#skInput').value;
    const role = $('#roleSystemInput') && $('#roleSystemInput').value;
    const model = $('#modelSelector') && $('#modelSelector').value;
    if (sk) { localStorage.setItem('INFODOSE_SK', sk); logMistico('🔐 SK salva'); }
    if (role) { sessionStorage.setItem('ROLE_SYSTEM_DOC', role); logMistico('📜 Role salvo'); }
    if (model) { localStorage.setItem('INFODOSE_MODEL', model); logMistico('🤖 Modelo salvo'); }
    alert('Configurações aplicadas');
  };

  /***** LIFECYCLE: DOMContentLoaded *****/
  document.addEventListener('DOMContentLoaded', () => {
    // init pieces
    initParticles();
    initPlayerControls();
    wireSendAndVoice();

    // Wire decoder toggle button
    const toggleDecoderBtn = $('#toggleDecoderBtn');
    const decoderBox = $('#decoderBox');
    if (toggleDecoderBtn && decoderBox) {
      toggleDecoderBtn.addEventListener('click', () => {
        decoderBox.style.display = decoderBox.style.display === 'none' ? 'block' : 'none';
        logMistico('✦ Toggle Decoder');
      });
    }

    // Expand ritual button
    $('#btn-expandir-ritual') && $('#btn-expandir-ritual').addEventListener('click', () => {
      const p = $('#pulsos');
      if (p) { p.classList.toggle('expanded'); if (!p.classList.contains('expanded')) p.scrollTop = p.scrollHeight; }
    });

    // Layout panel toggle
    $('#togglePanelBtn') && $('#togglePanelBtn').addEventListener('click', () => {
      const panel = $('#layoutTogglePanel');
      if (!panel) return;
      panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });

    // load saved layout state (if any)
    try {
      const saved = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
      if (saved) {
        if (saved.svg === false) document.querySelectorAll('.svg-container').forEach(el => el.style.display = 'none');
      }
    } catch (e) { /* ignore */ }

    logMistico('✨ script_fixed.js ready');
  });

  // Expose some internals (safe)
  window.KODUX = window.KODUX || {};
  window.KODUX.CODE_MAP = CODE_MAP;

})();

/* ----- End: script_fixed 3.js ----- */



/* ----- Begin: script_fixed.js ----- */

/* script_fixed.js — KODUX cleaned & robust version
   - Safe particles init
   - CODE_MAP updated to github pages
   - MyFrameLoader custom element
   - upload / remote component handling
   - decodeSymbolicCode using CODE_MAP
   - pulsos log + UI wiring
   - player controls
   - safe voice handling and send button wiring
   - lightweight renderResponse & registrarPulsoEEnviar
   Keep this file as /script.js in your repo.
*/

(function () {
  "use strict";

  /***** CONFIG & MAPS *****/
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

  const SOUND_PATHS = {
    click: 'assets/sounds/uiSamples/navigation.wav',
    hover: 'assets/sounds/uiSamples/hover.wav',
    confirm: 'assets/sounds/uiSamples/confirm.wav'
  };

  /***** UTILITIES *****/
  function safeQuery(sel) {
    try { return document.querySelector(sel); } catch(e) { return null; }
  }

  function $(sel) { return safeQuery(sel); }

  /***** PARTICLES (safe) *****/
  function initParticles() {
    if (!window.particlesJS) {
      console.warn('particlesJS not found — CDN or path may be missing.');
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
      console.info('particlesJS initialized');
    } catch (err) {
      console.error('particlesJS init error', err);
    }
  }

  /***** MyFrameLoader custom element *****/
  class MyFrameLoader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9999}
          .container{width:92%;height:86%;background:#111;border-radius:12px;overflow:hidden;position:relative}
          iframe{width:100%;height:100%;border:none}
          .close{position:absolute;right:12px;top:12px;background:#f0f;border:none;padding:6px;border-radius:8px;cursor:pointer}
        </style>
        <div class="overlay"><div class="container"><button class="close">✖</button><iframe></iframe></div></div>
      `;
      this._iframe = shadow.querySelector('iframe');
      shadow.querySelector('.close').addEventListener('click', () => this.remove());
    }

    set src(url) {
      this._iframe.src = url;
    }
  }
  if (!customElements.get('my-frame-loader')) customElements.define('my-frame-loader', MyFrameLoader);

  /***** PULSOS / LOGGING *****/
  const pulsosEl = $('#pulsos');
  function logMistico(msg) {
    if (!pulsosEl) { console.log('🔮', msg); return; }
    const d = document.createElement('div');
    d.className = 'debug-mistico';
    d.textContent = '◉ ' + msg;
    pulsosEl.appendChild(d);
    if (!pulsosEl.classList.contains('expanded')) pulsosEl.scrollTop = pulsosEl.scrollHeight;
  }

  /***** LOAD / OPEN PAGE *****/
  const mainFrame = $('#frame');
  function loadPage(url) {
    if (!mainFrame) { window.open(url, '_blank'); return; }
    mainFrame.classList.remove('active');
    setTimeout(() => {
      mainFrame.src = url;
      mainFrame.onload = () => mainFrame.classList.add('active');
    }, 220);
  }

  /***** UPLOAD & REMOTE COMPONENTS *****/
  const uploadInput = $('#uploadHTML');
  const uploadBtn = $('#uploadComponentBtn');
  const remoteBtn = $('#remoteComponentBtn');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      logMistico('📁 Selecionar arquivo local');
      uploadInput.click();
    });

    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.name.endsWith('.html')) return alert('Selecione um arquivo .html');
      const reader = new FileReader();
      reader.onload = (ev) => {
        const blob = new Blob([ev.target.result], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        const modal = document.createElement('my-frame-loader');
        modal.src = blobUrl;
        document.body.appendChild(modal);
        logMistico('📦 Componente carregado: ' + file.name);
      };
      reader.readAsText(file);
    });
  }

  if (remoteBtn) {
    remoteBtn.addEventListener('click', () => {
      const url = prompt('URL do componente remoto:');
      if (!url) return;
      const modal = document.createElement('my-frame-loader');
      modal.src = url;
      document.body.appendChild(modal);
      logMistico('🔗 Componente remoto aberto');
    });
  }

  /***** DECODER (CODE_MAP) *****/
  function decodeSymbolicCode() {
    try {
      const raw = ($('#codeInput') && $('#codeInput').value) || '';
      const code = raw.trim();
      if (!code) return alert('Digite um selo');
      const key = code.toString();
      const dest = CODE_MAP[key] || CODE_MAP[key.toUpperCase()] || CODE_MAP[key.toLowerCase()] || CODE_MAP[key.replace(/\s+/g,'')];
      if (!dest) { alert('Selo desconhecido'); return; }
      const modal = document.createElement('my-frame-loader');
      modal.src = dest;
      document.body.appendChild(modal);
      ($('#decoderBox') && ($('#decoderBox').style.display = 'none'));
      logMistico('🔓 Selo: ' + key);
    } catch (err) {
      console.error('decodeSymbolicCode error', err);
      alert('Erro ao decodificar (ver console)');
    }
  }
  window.decodeSymbolicCode = decodeSymbolicCode;

  /***** PLAYER CONTROLS (safe) *****/
  function initPlayerControls() {
    const toggle = $('#togglePlayer');
    const controls = $('#playerControls');
    const playBtn = $('#playPause');
    const trackSelect = $('#trackSelect');
    const binauralSelect = $('#binauralSelect');
    const trackVolume = $('#trackVolume');
    const binauralVolume = $('#binauralVolume');
    if (!toggle || !controls || !playBtn) return;

    const trackAudio = new Audio();
    const binauralAudio = new Audio();

    toggle.addEventListener('click', () => {
      controls.style.display = controls.style.display === 'flex' ? 'none' : 'flex';
    });

    playBtn.addEventListener('click', () => {
      if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
      if (binauralAudio.src) binauralAudio.paused ? binauralAudio.play() : binauralAudio.pause();
      playBtn.textContent = (trackAudio.paused && binauralAudio.paused) ? '►' : '⏸';
    });

    trackSelect && trackSelect.addEventListener('change', () => {
      if (!trackSelect.value) { trackAudio.pause(); trackAudio.src = ''; return; }
      trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
      trackAudio.loop = true;
      trackAudio.volume = trackVolume ? trackVolume.value : 1;
      trackAudio.play().catch(()=>logMistico('🔈 Falha ao tocar trilha (arquivo pode não existir)'));
    });

    binauralSelect && binauralSelect.addEventListener('change', () => {
      if (!binauralSelect.value) { binauralAudio.pause(); binauralAudio.src = ''; return; }
      binauralAudio.src = `assets/sounds/binaural/${binauralSelect.value}.wav`;
      binauralAudio.loop = true;
      binauralAudio.volume = binauralVolume ? binauralVolume.value : 1;
      binauralAudio.play().catch(()=>logMistico('🔉 Falha ao tocar binaural (arquivo pode não existir)'));
    });

    trackVolume && trackVolume.addEventListener('input', () => { trackAudio.volume = trackVolume.value; });
    binauralVolume && binauralVolume.addEventListener('input', () => { binauralAudio.volume = binauralVolume.value; });
  }

  /***** VOICE & SEND wiring *****/
  function wireSendAndVoice() {
    const input = $('#userInput');
    const sendBtn = $('#sendBtn');
    const voiceBtn = $('#voiceBtn');

    function safeOnSend() {
      const val = (input && input.value || '').trim();
      if (!val) { input && input.focus(); return; }
      // fallback behaviour: show as pulso in UI
      renderResponse(`Você: ${val}`);
      logMistico('📤 ' + val);
      input.value = '';
    }

    if (sendBtn && !sendBtn.dataset.koduxWired) {
      sendBtn.addEventListener('click', safeOnSend);
      sendBtn.dataset.koduxWired = '1';
    }

    if (input) {
      input.addEventListener('keypress', (e) => { if (e.key === 'Enter') safeOnSend(); });
    }

    if (!voiceBtn) return;
    // robust voice: only enable if available
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRec) {
      voiceBtn.style.opacity = 0.4;
      voiceBtn.title = 'Reconhecimento de voz não suportado';
      return;
    }

    let rec = null;
    voiceBtn.addEventListener('click', () => {
      try {
        if (!rec) {
          rec = new SpeechRec();
          rec.lang = 'pt-BR';
          rec.interimResults = false;
          rec.maxAlternatives = 1;
          rec.onstart = () => { voiceBtn.classList && voiceBtn.classList.add('listening'); logMistico('🎤 Ouvindo...'); };
          rec.onresult = (ev) => {
            const t = ev.results[0][0].transcript || '';
            if (input) input.value = t.trim();
            logMistico('🎤 Capturado: ' + t.trim());
            safeOnSend();
          };
          rec.onerror = (err) => { logMistico('⚠️ SR error: ' + (err.error || err.message || 'unknown')); };
          rec.onend = () => { voiceBtn.classList && voiceBtn.classList.remove('listening'); };
        }
        rec.start();
      } catch (err) {
        console.warn('Voice start failed', err);
      }
    });
  }

  /***** RENDERING PULSOS (simplified) *****/
  function renderResponse(text) {
    const wrapper = document.querySelector('.pages-wrapper') || document.getElementById('pagesWrapper');
    if (!wrapper) { console.warn('pages-wrapper not found'); return; }
    const page = document.createElement('div');
    page.className = 'page active';
    const block = document.createElement('div');
    block.className = 'response-block intro';
    block.innerHTML = `<p>${String(text).replace(/\n/g,'<br>')}</p>`;
    block.addEventListener('click', () => {
      block.classList.toggle('expanded');
      logMistico('◉ Bloco expandido');
    });
    page.appendChild(block);
    wrapper.appendChild(page);
    // update page indicator if present
    const indicator = $('#pageIndicator');
    if (indicator) indicator.textContent = `1 / ${wrapper.querySelectorAll('.page').length}`;
  }
  window.renderResponse = renderResponse;

  /***** registrarPulsoEEnviar (connects to AI later) *****/
  function registrarPulsoEEnviar(simbolo) {
    logMistico(`🧿 Pulso simbólico: ${simbolo}`);
    renderResponse(`✨ Pulso simbólico recebido: ${simbolo}`);
    // Placeholder: if you have callAI implemented, push to conversation & callAI()
    if (typeof window.callAI === 'function') {
      try {
        window.callAI(simbolo);
      } catch (e) { console.warn('callAI failed', e); }
    }
  }
  window.registrarPulsoEEnviar = registrarPulsoEEnviar;

  /***** salvarConfiguracoesAvancadas helper *****/
  window.salvarConfiguracoesAvancadas = function() {
    const sk = $('#skInput') && $('#skInput').value;
    const role = $('#roleSystemInput') && $('#roleSystemInput').value;
    const model = $('#modelSelector') && $('#modelSelector').value;
    if (sk) { localStorage.setItem('INFODOSE_SK', sk); logMistico('🔐 SK salva'); }
    if (role) { sessionStorage.setItem('ROLE_SYSTEM_DOC', role); logMistico('📜 Role salvo'); }
    if (model) { localStorage.setItem('INFODOSE_MODEL', model); logMistico('🤖 Modelo salvo'); }
    alert('Configurações aplicadas');
  };

  /***** LIFECYCLE: DOMContentLoaded *****/
  document.addEventListener('DOMContentLoaded', () => {
    // init pieces
    initParticles();
    initPlayerControls();
    wireSendAndVoice();

    // Wire decoder toggle button
    const toggleDecoderBtn = $('#toggleDecoderBtn');
    const decoderBox = $('#decoderBox');
    if (toggleDecoderBtn && decoderBox) {
      toggleDecoderBtn.addEventListener('click', () => {
        decoderBox.style.display = decoderBox.style.display === 'none' ? 'block' : 'none';
        logMistico('✦ Toggle Decoder');
      });
    }

    // Expand ritual button
    $('#btn-expandir-ritual') && $('#btn-expandir-ritual').addEventListener('click', () => {
      const p = $('#pulsos');
      if (p) { p.classList.toggle('expanded'); if (!p.classList.contains('expanded')) p.scrollTop = p.scrollHeight; }
    });

    // Layout panel toggle
    $('#togglePanelBtn') && $('#togglePanelBtn').addEventListener('click', () => {
      const panel = $('#layoutTogglePanel');
      if (!panel) return;
      panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });

    // load saved layout state (if any)
    try {
      const saved = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
      if (saved) {
        if (saved.svg === false) document.querySelectorAll('.svg-container').forEach(el => el.style.display = 'none');
      }
    } catch (e) { /* ignore */ }

    logMistico('✨ script_fixed.js ready');
  });

  // Expose some internals (safe)
  window.KODUX = window.KODUX || {};
  window.KODUX.CODE_MAP = CODE_MAP;

})();

/* ----- End: script_fixed.js ----- */



/* ----- Begin: script_adapted.js ----- */

/* === Dual App script.js (adaptado ao index.html atual) === */
(function(){
  'use strict';

  /* -------- particles.js -------- */
  document.addEventListener('DOMContentLoaded', () => {
    if (window.particlesJS) {
      try {
        particlesJS('particles-js', {
          particles:{
            number:{value:40},
            color:{value:['#00ffff','#ff00ff']},
            shape:{type:'circle'},
            opacity:{value:0.5},
            size:{value:2},
            line_linked:{enable:true,distance:150,color:'#ffffff',opacity:0.18,width:1},
            move:{enable:true,speed:1.5}
          },
          interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'repulse'}}},
          retina_detect:true
        });
      } catch(e){ console.error(e); }
    } else {
      console.warn('particlesJS não carregado');
    }
  });

  /* -------- helpers -------- */
  const $ = (id)=>document.getElementById(id);
  const log = (m)=>console.log('[Dual]',m);

  /* -------- CODE MAP (mantém o seu atual no repo) -------- */
  if (typeof window.CODE_MAP === 'undefined') {
    window.CODE_MAP = {};
  }

  /* -------- Decoder -------- */
  window.decodeSymbolicCode = function(){
    const input = $('codeInput') || $('codeField');
    if (!input) return alert('Campo de código não encontrado');
    const key = input.value.trim();
    if (!key) return;
    const url = CODE_MAP[key] || CODE_MAP[key.toUpperCase()];
    if (!url) return alert('Selo não mapeado');
    window.open(url,'_blank');
  };

  /* -------- Chat send -------- */
  const sendBtn = $('sendBtn');
  const input = $('userInput') || $('inputField');
  if (sendBtn && input) {
    sendBtn.onclick = ()=>{
      if (!input.value.trim()) return;
      log('Mensagem enviada: '+input.value);
      input.value='';
    };
  }

  /* -------- AI Config modal -------- */
  const aiBtn = $('aiConfigBtn');
  const aiClose = $('aiClose');
  const aiModal = $('aiModal') || $('aiConfigModal');
  if (aiBtn && aiModal) {
    aiBtn.onclick = ()=> aiModal.classList.add('active');
  }
  if (aiClose && aiModal) {
    aiClose.onclick = ()=> aiModal.classList.remove('active');
  }

})();

/* ----- End: script_adapted.js ----- */



/* ----- Begin: script_fixed.js ----- */

/* script_fixed.js — KODUX cleaned & robust version
   - Safe particles init
   - CODE_MAP updated to github pages
   - MyFrameLoader custom element
   - upload / remote component handling
   - decodeSymbolicCode using CODE_MAP
   - pulsos log + UI wiring
   - player controls
   - safe voice handling and send button wiring
   - lightweight renderResponse & registrarPulsoEEnviar
   Keep this file as /script.js in your repo.
*/

(function () {
  "use strict";

  /***** CONFIG & MAPS *****/
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

  const SOUND_PATHS = {
    click: 'assets/sounds/uiSamples/navigation.wav',
    hover: 'assets/sounds/uiSamples/hover.wav',
    confirm: 'assets/sounds/uiSamples/confirm.wav'
  };

  /***** UTILITIES *****/
  function safeQuery(sel) {
    try { return document.querySelector(sel); } catch(e) { return null; }
  }

  function $(sel) { return safeQuery(sel); }

  /***** PARTICLES (safe) *****/
  function initParticles() {
    if (!window.particlesJS) {
      console.warn('particlesJS not found — CDN or path may be missing.');
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
      console.info('particlesJS initialized');
    } catch (err) {
      console.error('particlesJS init error', err);
    }
  }

  /***** MyFrameLoader custom element *****/
  class MyFrameLoader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9999}
          .container{width:92%;height:86%;background:#111;border-radius:12px;overflow:hidden;position:relative}
          iframe{width:100%;height:100%;border:none}
          .close{position:absolute;right:12px;top:12px;background:#f0f;border:none;padding:6px;border-radius:8px;cursor:pointer}
        </style>
        <div class="overlay"><div class="container"><button class="close">✖</button><iframe></iframe></div></div>
      `;
      this._iframe = shadow.querySelector('iframe');
      shadow.querySelector('.close').addEventListener('click', () => this.remove());
    }

    set src(url) {
      this._iframe.src = url;
    }
  }
  if (!customElements.get('my-frame-loader')) customElements.define('my-frame-loader', MyFrameLoader);

  /***** PULSOS / LOGGING *****/
  const pulsosEl = $('#pulsos');
  function logMistico(msg) {
    if (!pulsosEl) { console.log('🔮', msg); return; }
    const d = document.createElement('div');
    d.className = 'debug-mistico';
    d.textContent = '◉ ' + msg;
    pulsosEl.appendChild(d);
    if (!pulsosEl.classList.contains('expanded')) pulsosEl.scrollTop = pulsosEl.scrollHeight;
  }

  /***** LOAD / OPEN PAGE *****/
  const mainFrame = $('#frame');
  function loadPage(url) {
    if (!mainFrame) { window.open(url, '_blank'); return; }
    mainFrame.classList.remove('active');
    setTimeout(() => {
      mainFrame.src = url;
      mainFrame.onload = () => mainFrame.classList.add('active');
    }, 220);
  }

  /***** UPLOAD & REMOTE COMPONENTS *****/
  const uploadInput = $('#uploadHTML');
  const uploadBtn = $('#uploadComponentBtn');
  const remoteBtn = $('#remoteComponentBtn');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      logMistico('📁 Selecionar arquivo local');
      uploadInput.click();
    });

    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.name.endsWith('.html')) return alert('Selecione um arquivo .html');
      const reader = new FileReader();
      reader.onload = (ev) => {
        const blob = new Blob([ev.target.result], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        const modal = document.createElement('my-frame-loader');
        modal.src = blobUrl;
        document.body.appendChild(modal);
        logMistico('📦 Componente carregado: ' + file.name);
      };
      reader.readAsText(file);
    });
  }

  if (remoteBtn) {
    remoteBtn.addEventListener('click', () => {
      const url = prompt('URL do componente remoto:');
      if (!url) return;
      const modal = document.createElement('my-frame-loader');
      modal.src = url;
      document.body.appendChild(modal);
      logMistico('🔗 Componente remoto aberto');
    });
  }

  /***** DECODER (CODE_MAP) *****/
  function decodeSymbolicCode() {
    try {
      const raw = ($('#codeInput') && $('#codeInput').value) || '';
      const code = raw.trim();
      if (!code) return alert('Digite um selo');
      const key = code.toString();
      const dest = CODE_MAP[key] || CODE_MAP[key.toUpperCase()] || CODE_MAP[key.toLowerCase()] || CODE_MAP[key.replace(/\s+/g,'')];
      if (!dest) { alert('Selo desconhecido'); return; }
      const modal = document.createElement('my-frame-loader');
      modal.src = dest;
      document.body.appendChild(modal);
      ($('#decoderBox') && ($('#decoderBox').style.display = 'none'));
      logMistico('🔓 Selo: ' + key);
    } catch (err) {
      console.error('decodeSymbolicCode error', err);
      alert('Erro ao decodificar (ver console)');
    }
  }
  window.decodeSymbolicCode = decodeSymbolicCode;

  /***** PLAYER CONTROLS (safe) *****/
  function initPlayerControls() {
    const toggle = $('#togglePlayer');
    const controls = $('#playerControls');
    const playBtn = $('#playPause');
    const trackSelect = $('#trackSelect');
    const binauralSelect = $('#binauralSelect');
    const trackVolume = $('#trackVolume');
    const binauralVolume = $('#binauralVolume');
    if (!toggle || !controls || !playBtn) return;

    const trackAudio = new Audio();
    const binauralAudio = new Audio();

    toggle.addEventListener('click', () => {
      controls.style.display = controls.style.display === 'flex' ? 'none' : 'flex';
    });

    playBtn.addEventListener('click', () => {
      if (trackAudio.src) trackAudio.paused ? trackAudio.play() : trackAudio.pause();
      if (binauralAudio.src) binauralAudio.paused ? binauralAudio.play() : binauralAudio.pause();
      playBtn.textContent = (trackAudio.paused && binauralAudio.paused) ? '►' : '⏸';
    });

    trackSelect && trackSelect.addEventListener('change', () => {
      if (!trackSelect.value) { trackAudio.pause(); trackAudio.src = ''; return; }
      trackAudio.src = `assets/sounds/trilhas/${trackSelect.value}.mp3`;
      trackAudio.loop = true;
      trackAudio.volume = trackVolume ? trackVolume.value : 1;
      trackAudio.play().catch(()=>logMistico('🔈 Falha ao tocar trilha (arquivo pode não existir)'));
    });

    binauralSelect && binauralSelect.addEventListener('change', () => {
      if (!binauralSelect.value) { binauralAudio.pause(); binauralAudio.src = ''; return; }
      binauralAudio.src = `assets/sounds/binaural/${binauralSelect.value}.wav`;
      binauralAudio.loop = true;
      binauralAudio.volume = binauralVolume ? binauralVolume.value : 1;
      binauralAudio.play().catch(()=>logMistico('🔉 Falha ao tocar binaural (arquivo pode não existir)'));
    });

    trackVolume && trackVolume.addEventListener('input', () => { trackAudio.volume = trackVolume.value; });
    binauralVolume && binauralVolume.addEventListener('input', () => { binauralAudio.volume = binauralVolume.value; });
  }

  /***** VOICE & SEND wiring *****/
  function wireSendAndVoice() {
    const input = $('#userInput');
    const sendBtn = $('#sendBtn');
    const voiceBtn = $('#voiceBtn');

    function safeOnSend() {
      const val = (input && input.value || '').trim();
      if (!val) { input && input.focus(); return; }
      // fallback behaviour: show as pulso in UI
      renderResponse(`Você: ${val}`);
      logMistico('📤 ' + val);
      input.value = '';
    }

    if (sendBtn && !sendBtn.dataset.koduxWired) {
      sendBtn.addEventListener('click', safeOnSend);
      sendBtn.dataset.koduxWired = '1';
    }

    if (input) {
      input.addEventListener('keypress', (e) => { if (e.key === 'Enter') safeOnSend(); });
    }

    if (!voiceBtn) return;
    // robust voice: only enable if available
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRec) {
      voiceBtn.style.opacity = 0.4;
      voiceBtn.title = 'Reconhecimento de voz não suportado';
      return;
    }

    let rec = null;
    voiceBtn.addEventListener('click', () => {
      try {
        if (!rec) {
          rec = new SpeechRec();
          rec.lang = 'pt-BR';
          rec.interimResults = false;
          rec.maxAlternatives = 1;
          rec.onstart = () => { voiceBtn.classList && voiceBtn.classList.add('listening'); logMistico('🎤 Ouvindo...'); };
          rec.onresult = (ev) => {
            const t = ev.results[0][0].transcript || '';
            if (input) input.value = t.trim();
            logMistico('🎤 Capturado: ' + t.trim());
            safeOnSend();
          };
          rec.onerror = (err) => { logMistico('⚠️ SR error: ' + (err.error || err.message || 'unknown')); };
          rec.onend = () => { voiceBtn.classList && voiceBtn.classList.remove('listening'); };
        }
        rec.start();
      } catch (err) {
        console.warn('Voice start failed', err);
      }
    });
  }

  /***** RENDERING PULSOS (simplified) *****/
  function renderResponse(text) {
    const wrapper = document.querySelector('.pages-wrapper') || document.getElementById('pagesWrapper');
    if (!wrapper) { console.warn('pages-wrapper not found'); return; }
    const page = document.createElement('div');
    page.className = 'page active';
    const block = document.createElement('div');
    block.className = 'response-block intro';
    block.innerHTML = `<p>${String(text).replace(/\n/g,'<br>')}</p>`;
    block.addEventListener('click', () => {
      block.classList.toggle('expanded');
      logMistico('◉ Bloco expandido');
    });
    page.appendChild(block);
    wrapper.appendChild(page);
    // update page indicator if present
    const indicator = $('#pageIndicator');
    if (indicator) indicator.textContent = `1 / ${wrapper.querySelectorAll('.page').length}`;
  }
  window.renderResponse = renderResponse;

  /***** registrarPulsoEEnviar (connects to AI later) *****/
  function registrarPulsoEEnviar(simbolo) {
    logMistico(`🧿 Pulso simbólico: ${simbolo}`);
    renderResponse(`✨ Pulso simbólico recebido: ${simbolo}`);
    // Placeholder: if you have callAI implemented, push to conversation & callAI()
    if (typeof window.callAI === 'function') {
      try {
        window.callAI(simbolo);
      } catch (e) { console.warn('callAI failed', e); }
    }
  }
  window.registrarPulsoEEnviar = registrarPulsoEEnviar;

  /***** salvarConfiguracoesAvancadas helper *****/
  window.salvarConfiguracoesAvancadas = function() {
    const sk = $('#skInput') && $('#skInput').value;
    const role = $('#roleSystemInput') && $('#roleSystemInput').value;
    const model = $('#modelSelector') && $('#modelSelector').value;
    if (sk) { localStorage.setItem('INFODOSE_SK', sk); logMistico('🔐 SK salva'); }
    if (role) { sessionStorage.setItem('ROLE_SYSTEM_DOC', role); logMistico('📜 Role salvo'); }
    if (model) { localStorage.setItem('INFODOSE_MODEL', model); logMistico('🤖 Modelo salvo'); }
    alert('Configurações aplicadas');
  };

  /***** LIFECYCLE: DOMContentLoaded *****/
  document.addEventListener('DOMContentLoaded', () => {
    // init pieces
    initParticles();
    initPlayerControls();
    wireSendAndVoice();

    // Wire decoder toggle button
    const toggleDecoderBtn = $('#toggleDecoderBtn');
    const decoderBox = $('#decoderBox');
    if (toggleDecoderBtn && decoderBox) {
      toggleDecoderBtn.addEventListener('click', () => {
        decoderBox.style.display = decoderBox.style.display === 'none' ? 'block' : 'none';
        logMistico('✦ Toggle Decoder');
      });
    }

    // Expand ritual button
    $('#btn-expandir-ritual') && $('#btn-expandir-ritual').addEventListener('click', () => {
      const p = $('#pulsos');
      if (p) { p.classList.toggle('expanded'); if (!p.classList.contains('expanded')) p.scrollTop = p.scrollHeight; }
    });

    // Layout panel toggle
    $('#togglePanelBtn') && $('#togglePanelBtn').addEventListener('click', () => {
      const panel = $('#layoutTogglePanel');
      if (!panel) return;
      panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });

    // load saved layout state (if any)
    try {
      const saved = JSON.parse(localStorage.getItem('layoutConfig') || '{}');
      if (saved) {
        if (saved.svg === false) document.querySelectorAll('.svg-container').forEach(el => el.style.display = 'none');
      }
    } catch (e) { /* ignore */ }

    logMistico('✨ script_fixed.js ready');
  });

  // Expose some internals (safe)
  window.KODUX = window.KODUX || {};
  window.KODUX.CODE_MAP = CODE_MAP;

})();

/* ----- End: script_fixed.js ----- */

  // Expose debug
  return {
    version: 'monolitico-1',
    loadedAt: new Date().toISOString()
  };
})();

export default KoduxMonolitico;
