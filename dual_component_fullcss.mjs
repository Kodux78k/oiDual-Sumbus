
/*
  Dual Infodose Web Component (component.mjs)
  - Encapsulates the monolitic UI as <dual-infodose-app>
  - Loads particles.js dynamically if missing
  - Provides core interactivity: loadPage, decoder, upload, player controls, pulses log
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

const template = document.createElement('template');
template.innerHTML = `
  
  <style>
    :host{all:initial;display:block}
    

/* extracted styles from oiDual-menu-v9.html */

/* ——— SEU CSS INTEGRAL (ajustes) ——— */
    :root {
      --bg: linear-gradient(to bottom, #000, #1a1a1a);
      --text: #d7d7d7;
      --fast: .4s; --med: .8s; --slow: 1.8s;
    }
    body.light { --bg: linear-gradient(to bottom,#666,#e0e0e0); --text:#444; }
    body.medium{ --bg: linear-gradient(to bottom,#555,#333); --text:#eee; }
    body.vibe  { --bg: linear-gradient(135deg,#00d8d8,#d800d8); --text:#fff; }
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{width:100%;height:100%;overflow:hidden}
    body{
      display:flex;flex-direction:column;align-items:center;
      padding:0px;background:var(--bg);color:var(--text);
      font-family:'Montserrat',sans-serif;
      transition:background var(--slow),color var(--slow);
      animation:fadeIn var(--slow) ease forwards;
    }
    @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes clickPulse{0%,100%{opacity:1}50%{opacity:0.9}}
    @keyframes expandFooter{0%,100%{transform:scale(1)}50%{transform:scale(0.96)}}
    @keyframes moveGradient{0%{background-position:0% 50%}100%{background-position:200% 50%}}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.012)}}
    #themeToggle{
      position:absolute;top:40px;left:50%;transform:translateX(-50%);
      width:30px;height:30px;border:1px solid var(--text);
      border-radius:50%;background:transparent;opacity:.3;
      cursor:pointer;transition:opacity var(--med),border-color var(--med);
      z-index:10;
    }
    #themeToggle:hover{opacity:.8}
    #particles-js{position:absolute;inset:0;z-index:0}
    .svg-container{
      position:absolute;top:220px;left:50%;width:180px;height:180px;
      transform:translateX(-50%);z-index:1;
      filter:drop-shadow(0 0 10px rgba(0,255,255,0.15));
      transition:opacity var(--slow);
    }
    .svg-container.fading{opacity:0}
    .svg-container object{width:100%;height:100%;object-fit:contain;
      animation:pulse 6s infinite ease-in-out;
    }
    #assistantName{top:199px;font-size:1.1em;font-weight:600;opacity:.8;
      transition:opacity var(--slow);
    }
    .response-container{
      position:fixed;left:20px;right:20px;bottom:156px;padding:12px;
      background:rgba(0,0,0,0.3);backdrop-filter:blur(8px);
      border-radius:20px;max-height:calc(100vh - 200px);
      overflow-y:auto;z-index:999;transition:background var(--slow);
      animation:fadeIn var(--slow) ease forwards;
    }
    body.light  .response-container{background:rgba(255,255,255,0.3)}
    body.medium .response-container{background:rgba(0,0,0,0.2)}
    body.vibe   .response-container{background:rgba(255,255,255,0.2)}
    .pages-wrapper{transition:opacity var(--slow),height var(--slow);}
    .pages-wrapper.collapsed{display:none}
    .page{display:none;opacity:0;transition:opacity var(--slow)}
    .page.active{display:block;opacity:1}
    .page.initial{display:flex;align-items:center;justify-content:center;
      height:100%;text-align:center;
    }
    .footer-text{
      display:block;margin:12px auto;padding:6px 12px;
      background:var(--bg);opacity:.5;color:var(--text);
      font-size:0.8em;text-align:center;font-style:italic;
      border-radius:12px;cursor:pointer;
      transition:opacity var(--slow),transform var(--slow);
      animation:moveGradient 8s linear infinite;
    }
    .footer-text.loading{background:transparent!important;backdrop-filter:none!important}
    .footer-text.loading span{background:none!important}
    .footer-text:hover{opacity:.6}
    .footer-text.active{opacity:.8;animation:expandFooter var(--med) ease-out}
    .response-controls{
      display:flex;justify-content:space-between;align-items:center;
      margin-top:15px;padding-top:10px;
      border-top:1px solid rgba(255,255,255,0.2);
    }
    body.light  .response-controls{border-top-color:rgba(0,0,0,0.2)}
    body.medium .response-controls{border-top-color:rgba(255,255,255,0.2)}
    body.vibe   .response-controls{border-top-color:rgba(0,0,0,0.4)}
    .control-buttons,.pagination{display:flex;align-items:center;gap:10px}
    .copy-button,.paste-button,.toggle-button,.kitty-button{
      width:36px;height:36px;border:none;border-radius:12px;
      background:rgba(255,255,255,0.06);display:flex;
      align-items:center;justify-content:center;cursor:pointer;
      transition:background var(--fast),opacity var(--slow);opacity:.7;
    }
    .toggle-button,.kitty-button{border-radius:50%}
    .copy-button:hover,.paste-button:hover,
    .toggle-button:hover,.kitty-button:hover{background:rgba(255,255,255,0.15)}
    .toggle-button.active,.kitty-button.active{opacity:1}
    .pagination button {
      border: none;
      background: linear-gradient(45deg, #0ff, #f0f);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2em;
      cursor: pointer;
      transition: transform var(--fast);
    }
    .pagination button:hover{transform:scale(1.2)}
    .response-block{
      margin:1rem 0;padding:1.8rem;border-radius:12px;
      line-height:1.8;position:relative;overflow:hidden;
      animation:fadeIn var(--slow) ease forwards,pulse 12s infinite ease-in-out;
      transition:box-shadow var(--fast),transform var(--fast);
    }
    .response-block:hover{box-shadow:0 0 15px rgba(0,255,255,.4)}
    .response-block.clicked{animation:clickPulse var(--med) ease-out}
    .response-block.expanded{
      transform:scale(1.03);background:rgba(0,0,0,.6);z-index:2;
    }
    .intro{background:linear-gradient(135deg,rgba(0,255,255,.2),rgba(0,100,100,.1));border-left:4px solid #0ff}
    .middle{background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(50,50,50,.1));border-left:4px solid rgba(255,255,255,.4)}
    .ending{background:linear-gradient(135deg,rgba(255,0,255,.2),rgba(100,0,100,.1));border-left:4px solid #f0f}
    .input-container{
      position:fixed;left:20px;right:20px;bottom:90px;
      display:flex;gap:6px;z-index:2;
    }
    .input-container input{
      flex:1;padding:10px;border:none;border-radius:20px;
      background:rgba(255,255,255,.1);color:inherit;font-size:16px;
      transition:background var(--fast);opacity:0.7;
    }
    .input-container input:focus{background:rgba(255,255,255,.2)}
    .input-container button{
      width:60px;height:60px;border:none;
      background:linear-gradient(42deg,#0ff,#f0f);
      background-clip:text;-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      font-size:48px;cursor:pointer;animation:pulse 2s infinite ease-in-out;
      display:flex;align-items:center;justify-content:center;
      transition:transform var(--med);opacity:.7;
    }
    .input-container button:hover{transform:scale(1.1)}
    .login-container{
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      width:300px;padding:1.5rem 1rem;background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.15);border-radius:10px;
      backdrop-filter:blur(8px);z-index:10;display:none;
    }
    .login-container.active{display:block}
    .login-container input{
      width:100%;background:transparent;border:none;
      border-bottom:1px solid rgba(255,255,255,.3);
      margin:.8rem 0;padding:.4rem 0;font-size:.95em;color:#fff;
    }
    .login-container input::placeholder{color:rgba(255,255,255,.5)}
    .login-container button{
      width:100%;margin-top:1rem;padding:.5rem 0;
      border:1px solid #0ff;border-radius:8px;
      background:transparent;font-size:.95em;color:#0ff;cursor:pointer;
      transition:background .25s,color .25s;
    }
    .login-container button:hover{background:#0ff;color:#000}
    
    .response-block {
  margin: 2rem 0;
  padding: 1.3rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1s ease forwards, pulse 12s infinite ease-in-out;
  transition: all 0.3s ease-in-out;
}

.response-block.intro {
  background: linear-gradient(135deg, rgba(0,255,255,.2), rgba(0,100,100,.1));
  border-left: 4px solid #0ff;
}
.response-block.middle {
  background: linear-gradient(135deg, rgba(255,255,255,.05), rgba(50,50,50,.1));
  border-left: 4px solid rgba(255,255,255,.4);
}
.response-block.ending {
  background: linear-gradient(135deg, rgba(255,0,255,.2), rgba(100,0,100,.1));
  border-left: 4px solid #f0f;
}
.response-block.expanded {
  transform: scale(1.03);
  background: rgba(0, 0, 0, .6);
  z-index: 2;
}
.symbol-btn {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  color: #0ff;
  border-radius: 8px;
  padding: 2px 6px;
  margin: 2px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.3s ease;
}
.symbol-btn:hover {
  background: rgba(0, 255, 255, 0.3);
}
    /* ————— FIM DO CSS ————— */
  

.response-container {
  bottom: 99px !important;
}

.input-container.hidden,
.control-buttons.hidden,
.pagination.hidden {
  display: none !important;
}

.footer-text.move-to-bottom {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 12px;
  margin: 0 auto;
  z-index: 99999;
  animation: moveFooterDown var(--fast) ease-out forwards;
}

@keyframes moveFooterDown {
  from { bottom: 69px; opacity: 0.5; }
  to { bottom: 12px; opacity: 1; }
}


.input-container {
  bottom: 30px !important;
}

#btn-expandir-ritual {
  bottom: 210px !important;
}

body {
      margin: 0;
      height: 100vh;
      overflow: hidden;
      background: var(--bg);
      color: var(--text);
      font-family: 'Montserrat', sans-serif;
    }

    .content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      opacity: 0;
      transition: opacity 0.6s ease;
      position: absolute;
      z-index: 1;
    }

    iframe.active {
      opacity: 1;
    }

    .symbol-bar {
      position: fixed;
      top: 39%;
      right: 15px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 40;
    }

    .symbol-button {
      width: 26px;
      height: 26px;
      font-size: 13px;
      color: var(--text);
      background: var(--bg);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
      opacity: 0.7;
      transition: transform 0.3s ease, background 0.3s ease;
    }

    .symbol-button:hover {
      background: rgba(255,255,255,0.2);
      transform: scale(1.1);
    }

    .lock-button {
      position: fixed;
      bottom: 43px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 28px;
      background: transparent;
      border: 2px solid rgba(255,255,255,0.5);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
      z-index: 183000;
    }

    /* Botões de ação */
    #uploadComponentBtn,
    #remoteComponentBtn,
    #toggleDecoderBtn {
      position: fixed;
      left: 12px;
      z-index: 90000;
      padding: 4px;
      border: none;
      border-radius: 6px;
      background: var(--bg);
      color: var(--text);
      font-weight: bold;
      font-size: 0.9em;
      cursor: pointer;
      backdrop-filter: blur(6px);
      border: 2px solid transparent;

      box-shadow: 0 0 4px rgba(0,255,255,0.2), 0 0 8px rgba(255,0,255,0.2);
      transition: all 0.3s ease;
    }

   
    #uploadComponentBtn { top: 330px; }
    #remoteComponentBtn { top: 370px; }
    #toggleDecoderBtn { top: 410px; }

    #uploadComponentBtn:hover,
    #remoteComponentBtn:hover,
    #toggleDecoderBtn:hover {
      transform: scale(1.05);
      background: rgba(0, 255, 255, 0.2);
    }

    #decoderBox {
      display: none;
      position: fixed;
      top: 140px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.6);
      padding: 1rem;
      border-radius: 20px;
      backdrop-filter: blur(8px);
      z-index: 70;
    }

    #decoderBox input {
      padding: 0.6rem;
      width: 200px;
      text-align: center;
      border-radius: 10px;
      border: none;
      font-size: 1em;
    }

    #decoderBox button {
      margin-top: 10px;
      padding: 0.5rem 1rem;
      background: rgba(0,255,255,0.2);
      border: none;
      border-radius: 12px;
      color: white;
      cursor: pointer;
    }

    my-frame-loader::part(container) {
      width: 90%;
      height: 85%;
      z-index: 8;
    }
  

#btn-expandir-ritual {
  position: fixed;
  bottom: 33px;
  
  z-index: 99999;
border-radius:50%;

  font-size: 18px;
background:linear-gradient(42deg,#0ff,#f0f);
      background-clip:text;-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;


  border:none

  cursor: pointer;
    opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.2s ease;
}
#btn-expandir-ritual:hover,
 {
  opacity: 1 !important;
  transform: scale(1.05);
}
#btn-expandir-ritual { right: 35px; }
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.021); opacity: 1; }
  100% { transform: scale(1); opacity: 0.4; }
}

.upload-symbolic-button {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--bg);
  color: var(--text);
  border: 1px solid rgba(0,255,255,0.2);
  box-shadow: 0 0 8px rgba(0,255,255,0.2), 0 0 12px rgba(255,0,255,0.2);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.upload-symbolic-button:hover {
  background: rgba(0,255,255,0.2);
  transform: scale(1.1);
  box-shadow: 0 0 12px rgba(0,255,255,0.4);
}

#advancedToggleOptions input,
#advancedToggleOptions select {
  font-family: monospace;
  font-size: 0.9em;
  backdrop-filter: blur(4px);
}
#advancedToggleOptions button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(0,255,255,0.4);
}

/* --- SÜMBÜS toggle micro-pulse ring --- */
.symbus-toggle {
  position: relative;
}
.symbus-toggle.ring-pulse::after{
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 999px;
  border: 2px solid currentColor;
  opacity: 0.0;
  animation: symbusPulse 700ms ease-out 1;
  pointer-events: none;
}
@keyframes symbusPulse{
  0% { transform: scale(0.9); opacity: 0.35; }
  70% { transform: scale(1.15); opacity: 0.15; }
  100% { transform: scale(1.35); opacity: 0; }
}

/* v6.2.9-refine — UI refinements */
.response-controls{
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:14px !important;
}
.response-controls .control-buttons{ gap:10px !important; }
.response-controls .pagination{ display:none !important; }
.response-container{
  border: none !important;
  border-image: none !important;
  box-shadow: none !important;
}
/* block visual rhythm */
.response-block{
  margin: 18px 0 !important;
  padding: 16px 18px !important;
  border-radius: 14px !important;
  background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.18)) !important;
  border: 1px solid rgba(255,255,255,0.12) !important;
}
.response-block + .response-block{
  position: relative;
}
.response-block + .response-block::before{
  content:"";
  position:absolute; left:10%; right:10%; top:-10px; height:1px;
  background: linear-gradient(90deg, rgba(0,255,255,0), rgba(0,255,255,0.35), rgba(255,0,255,0));
  opacity:.6;
}
.response-block.intro{ border-left:4px solid #0ff !important; }
.response-block.middle{ border-left:4px solid rgba(255,255,255,0.35) !important; }
.response-block.ending{ border-left:4px solid #f0f !important; }

/* nicer code and list styling inside response */
.response-block pre, .response-block code{
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px; padding: 2px 6px;
}
.response-block pre{ padding:10px 12px; overflow:auto; }
.response-block ul, .response-block ol{ padding-left: 1.3em; }
.response-block li{ margin: 4px 0; }

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

#btn-expandir-ritual {
  position: fixed;
  bottom: 33px;
  
  z-index: 99999;
border-radius:50%;

  font-size: 21px;
background:linear-gradient(42deg,#0ff,#f0f);
      background-clip:text;-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;


  border:none;

  cursor: pointer;
    opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.2s ease;
}
#btn-expandir-ritual:hover,
 {
  opacity: 1 !important;
  transform: scale(1.05);
}
#btn-expandir-ritual { right: 40px; }

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.021); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
}

#pulsos-container {
  position: fixed;
  top: 198px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  opacity: var(--slow);
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, #F0F, #0FF);
  border-image-slice: 1;

  -webkit-mask-image: radial-gradient(white, black); /* força máscara arredondada no Safari */
  mask-image: radial-gradient(white, black);

  overflow: hidden;
  z-index:99992;
  cursor: pointer;
  font-family: monospace;
  text-align: center;
}

  #pulsos {
    max-height: calc(2.5 * 1.2em);
    overflow-y: auto;
    padding: 0.4em;
    font-size: 0.93em;
    color: #0ff;
    position: relative;
  }

  #pulsos.expanded {
    max-height: calc(12 * 1.2em);
    overflow-y: auto;
  }

  .debug-mistico {
    line-height: 1.2em;
    margin-bottom: 0em; 
    word-break: break-word;
  }

  /* FADE VISUAL no final */
  #pulsos:not(.expanded)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: auto;
    height: 1.2em;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    pointer-events: none;
  }
.pulso-item {
  margin-bottom: 12px;
}
.pulso-item button.replay-btn {
  background: transparent;
  border: 1px solid #0ff;
  color: #0ff;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8em;
}
.pulso-item button:hover {
  background: #0ff;
  color: #000;
}
    #koblluxPlayer {
position: fixed;
top: 30px;
left: 20px;
z-index: 9999;
background: rgba(0, 10, 20, 0.8);
backdrop-filter: blur(12px) saturate(180%);
padding: 18px;
border-radius: 16px;
border: 1px solid rgba(0, 255, 255, 0.15);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
0 0 0 1px rgba(0, 255, 255, 0.1),
0 0 30px rgba(0, 255, 255, 0.05);
color: #e0f7ff;
display: flex;
flex-direction: column;
gap: 14px;
max-width: 260px;
transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
#koblluxPlayer button, 
#koblluxPlayer select, 
#koblluxPlayer input[type="range"] {
background: rgba(0, 255, 255, 0.05);
border: 1px solid rgba(0, 255, 255, 0.1);
border-radius: 8px;
color: inherit;
padding: 8px 12px;
font-size: 13px;
transition: all 0.3s ease;
width: 100%;
cursor: pointer;
}
#koblluxPlayer button {
background: linear-gradient(135deg, rgba(0, 150, 255, 0.15), rgba(0, 80, 200, 0.2));
backdrop-filter: blur(4px);
}
#koblluxPlayer button:hover {
background: linear-gradient(135deg, rgba(0, 180, 255, 0.25), rgba(0, 100, 220, 0.3));
border-color: rgba(0, 255, 255, 0.3);
box-shadow: 0 0 15px rgba(0, 200, 255, 0.1);
transform: translateY(-1px);
}
#togglePlayer {
width: 60px;
height: 60px;
border-radius: 50% !important;
border: none !important;
box-shadow: 0 0 20px rgba(0, 255, 255, 0.3) !important;
background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 120, 255, 0.35)) !important;
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
#togglePlayer:hover {
transform: rotate(90deg);
background: linear-gradient(135deg, rgba(0, 180, 255, 0.25), rgba(0, 100, 220, 0.3)) !important;
box-shadow: 0 0 25px rgba(0, 255, 255, 0.5) !important;
}
#togglePlayer:hover {
transform: rotate(90deg);
background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 120, 255, 0.35)) !important;
box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}
#playerControls {
display: none;
flex-direction: column;
gap: 12px;
margin-top: 10px;
animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
}
#koblluxPlayer input[type="range"] {
-webkit-appearance: none;
height: 6px;
background: rgba(0, 255, 255, 0.1);
border-radius: 10px;
padding: 0;
margin: 10px 0;
}
#koblluxPlayer input[type="range"]::-webkit-slider-thumb {
-webkit-appearance: none;
width: 16px;
height: 16px;
border-radius: 50%;
background: #00ffff;
cursor: pointer;
box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
transition: all 0.2s ease;
}
#koblluxPlayer input[type="range"]::-webkit-slider-thumb:hover {
transform: scale(1.2);
box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
}
#koblluxPlayer label {
font-size: 11px;
opacity: 0.7;
letter-spacing: 0.5px;
text-transform: uppercase;
color: rgba(0, 255, 255, 0.7);
}
#themeSelector {
background: rgba(0, 255, 255, 0.05);
border: 1px solid rgba(0, 255, 255, 0.15);
border-radius: 8px;
color: #0ff;
padding: 4px 8px;
font-size: 13px;
backdrop-filter: blur(4px);
transition: all 0.3s ease;
}
#themeSelector:hover {
background: rgba(0, 255, 255, 0.1);
border-color: rgba(0, 255, 255, 0.3);
}
/* Ultra Foda KOBLLUX Player Styles */
#koblluxPlayer {
position: fixed;
top: 20px;
left: 20px;
z-index: 99999;
background: rgba(0, 10, 20, 0.8);
backdrop-filter: blur(12px) saturate(180%);
padding: 18px;
border-radius: 16px;
border: 1px solid rgba(0, 255, 255, 0.15);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
0 0 0 1px rgba(0, 255, 255, 0.1),
0 0 30px rgba(0, 255, 255, 0.05);
color: #e0f7ff;
display: flex;
flex-direction: column;
gap: 14px;
max-width: 260px;
transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
/* Additional overrides... */
/* Remove parent border/shadow influence on toggle */
#koblluxPlayer #togglePlayer {
border: none !important;
box-shadow: none !important;
padding: 0 !important;
margin: 0 !important;
}
/* Ensure perfect circle */
#togglePlayer {
width: 60px !important;
height: 60px !important;
aspect-ratio: 1 / 1 !important;
border-radius: 50% !important;
box-sizing: border-box !important;
}
/* Remove inherited borders/shadows and set gradient background */
#koblluxPlayer #togglePlayer {
border: none !important;
box-shadow: none !important;
outline: none !important;
background: var(--bg) !important;
padding: 0 !important;
margin: 0 !important;
}
/* Ensure perfect circle of 33px */
#togglePlayer {
width: 33px !important;
height: 33px !important;
aspect-ratio: 1 / 1 !important;
border-radius: 50% !important;
overflow: visible !important;
}
/* Scale inner icon */
#togglePlayer svg,
#togglePlayer .waves-icon {
width: 20px !important;
height: 20px !important;
}
/* Clear extra padding/margin */
#togglePlayer > * {
padding: 0 !important;
margin: 0 !important;
}
/* Remove any border/box-shadow on container that affect children */
#koblluxPlayer {
border: none !important;
box-shadow: none !important;
outline: none !important;
}

#btn-expandir-ritual.move-to-bottom-ritual {
  bottom: 18px !important;
  animation: moveRitualDown 0.4s ease forwards !important;
}
@keyframes moveRitualDown {
  from { bottom: 193px; opacity: 0.4; }
  to   { bottom: 18px; opacity: 0.6; }
}

#layoutTogglePanel {
  position: fixed;
  top: 50px;
  right: 20px;
  background: var(--bg);
  color: var(--text);
  font-family: Montserrat, sans-serif;
  border: 1px solid var(--bg);
  border-radius: 12px;
  padding: 14px;
  z-index: 999999;
  display: none;
  flex-direction: column;
  gap: 10px;
}
#layoutTogglePanel label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}
#layoutTogglePanel input[type="checkbox"] {
  transform: scale(1.2);
  accent-color: #0ff;
}
#userButton {
  display: none;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #0ff, #f0f);
  color: #000;
  font-weight: bold;
  padding: 10px 14px;
  border-radius: 10px;
  z-index: 9999;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 0 12px #0ff;
}

/* Botão de Toggle do Painel */
#togglePanelBtn {
  position: fixed;
  top: 20px;
  right: 33px;
  background: var(--bg);
  color: var(--text);
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  z-index: 999;
  box-shadow: 0 0 10px var(--bg);
}

.symbol-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  margin: 3px 4px;
  background: var(--bg, #000);
  color: var(--text, #0ff);
  border: 1px solid var(--text, #0ff);
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 0.95em;
  transition: transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 0 4px var(--text, #0ff);
  cursor: pointer;
}
.symbol-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px #f0f, 0 0 4px #0ff;
}

.tipo-emoji {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.3em;
  padding: 0;
  background: var(--bg, #000);
  color: var(--text, #0f0);
  border: 1px solid var(--text, #0f0);
  font-family: 'Montserrat', sans-serif;
}

.tipo-colchete  { background: var(--bg); border-color: var(--text); color: var(--text); }
.tipo-chave     { background: var(--bg); border-color: #ff0; color: #ff0; }
.tipo-parenteses{ background: var(--bg); border-color: var(--text); color: var(--text); }
.tipo-ascii-toggle {
  background: var(--bg);
  color: var(--text);
  border: 1px dashed var(--text);
  font-weight: bold;
}
.nestedBlock {
  margin-top: 8px;
  padding: 12px;
  background: var(--bg, #111);
  border: 1px dashed var(--text, #0ff);
  color: var(--text, #0ff);
  font-family: 'Montserrat', sans-serif;
  white-space: pre-wrap;
  border-radius: 10px;
}
.hidden {
  display: none;
}
.response-block {
  margin: 16px auto;
  padding: 16px;
  border-radius: 22px;
  background: var(--bg, rgba(255, 255, 255, 0.06));
  color: var(--text, #0ff);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
  max-width: 600px;
  cursor: pointer;
}
.response-block.expanded {
  transform: scale(1.03);
  box-shadow: 0 0 10px #0ff5;
}
.response-block .nestedBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.symbol-header {
  font-size: 1.4em;
  text-align: center;
}
.symbol-body {
  font-size: 1em;
  line-height: 1.5;
  padding: 8px;
}
.response-block.intro { border-left: 4px solid #0ff; }
.response-block.middle { border-left: 4px solid #fff; }
.response-block.ending { border-left: 4px solid #f0f; }

.submenu {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  border-top: 1px solid #0ff5;
}
.submenu button {
  background: transparent;
  border: 1px solid var(--text, #0ff);
  color: var(--text, #0ff);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8em;
}
.submenu button:hover {
  background: var(--text, #0ff);
  color: #000;
}
.submenu.hidden {
  display: none;
}

:root {
  --bg: rgba(0, 0, 0, 0.8);
  --text: #0ff;
}
.response-block {
  margin: 16px auto;
  padding: 16px;
  border-radius: 16px;
  background: var(--bg);
  color: var(--text);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
  max-width: 600px;
  cursor: pointer;
}
.response-block.expanded {
  transform: scale(1.03);
  box-shadow: 0 0 10px #0ff5;
}
.nestedBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.symbol-header {
  font-size: 1.4em;
  text-align: center;
}
.symbol-body {
  font-size: 1em;
  line-height: 1.5;
  padding: 8px;
}
.submenu {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  border-top: 1px solid #0ff5;
}
.submenu button {
  background: transparent;
  border: 1px solid var(--text);
  color: var(--text);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8em;
}
.submenu button:hover {
  background: var(--text);
  color: #000;
}

.pulso-item {
  margin-bottom: 12px;
}

#voiceBtn.listening {
  animation: pulse 1s infinite;
  filter: drop-shadow(0 0 6px #0ff);
}

/* SuperPatch v6.2.2 — fixes */
.dual-md{margin:12px 0;padding:14px;border-radius:14px;background:rgba(0,0,0,.35);
border:1px solid rgba(0,255,255,.18);backdrop-filter:blur(6px);line-height:1.55;font-size:.98em}
.dual-md blockquote{margin:0 0 8px 0;padding-left:10px;border-left:3px solid #0ff;opacity:.95}
.dual-chip{display:inline-block;padding:2px 8px;margin:0 6px 0 0;border-radius:999px;
background:rgba(0,255,255,.08);border:1px solid rgba(0,255,255,.22);font-size:.82em}
.pages-wrapper{display:block!important;opacity:1!important;height:auto!important}
.page{display:block!important;opacity:1!important}
.pagination{display:none!important}
#sumbus-toggle{position:fixed;left:50%;transform:translateX(-50%);top:112px;z-index:3;opacity:0.3;
padding:8px 14px;border-radius:999px;border:1px solid transparent;color:#0ff;font-weight:600;
letter-spacing:.4px;cursor:pointer;background:rgba(0,0,0,.45);
box-shadow:0 0 18px rgba(0,255,255,.18),inset 0 0 12px rgba(0,0,0,.2);backdrop-filter:blur(6px)}
#sumbus-toggle::before,#sumbus-toggle::after{content:"";position:absolute;inset:0;border-radius:999px;pointer-events:none}
#sumbus-toggle::before{padding:1px;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;background:linear-gradient(45deg,#0FF,#FF00F)}
#sumbus-toggle::after{border:1px solid transparent;border-image:linear-gradient(45deg,#0FF,#FF00F) 1;border-image-slice:1;
  -webkit-mask-image:radial-gradient(white,black);mask-image:radial-gradient(white,black);opacity:.9}
#pulsos-container{top:170px!important}
.input-container{border:none!important;border-image:none!important;box-shadow:none!important}
.input-container::before,.input-container::after{content:none!important}
.symbol-bar{border:1px solid transparent;border-image:linear-gradient(45deg,#0FF,#FF00F) 1;
  -webkit-mask-image:radial-gradient(white,black);mask-image:radial-gradient(white,black);
  border-radius:12px;padding:8px;background:transparent;backdrop-filter:blur(6px)}
.symbol-button{font-weight:400;border:1px solid rgba(0,255,255,.18);border-radius:10px}
body.vibe{animation:vibePulse .6s ease-out}
@keyframes vibePulse{0%{filter:saturate(.9)}50%{filter:saturate(1.2)}100%{filter:saturate(1)}}

/* --- 1. SEU ESTILO ORIGINAL (MANTIDO) --- */
#aiConfigBtn {
  position: fixed;
  top: 20px;
  right: 66px;
  z-index: 1000000;
  background: var(--bg, #111); /* fallback se --bg não existir */
  color: var(--text, #eee);    /* fallback se --text não existir */
  border: 1px solid rgba(0,255,255,0.12);
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 18px rgba(0,255,255,0.06);
}

/* --- 2. ESTILOS DO MODAL (CLEAN & MOBILE) --- */
:root {
  --k-panel: rgba(15,15,15,0.96);
  --k-border: rgba(255,255,255,0.08);
  --k-accent: #00ffff;
  --k-dim: #555555;
}

#aiConfigModal {
  position: fixed; inset: 0; z-index: 1000001;
  display: none; align-items: center; justify-content: center;
  background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
}

#aiConfigModal .panel {
  width: 800px; max-width: 95%; max-height: 90vh;
  background: var(--k-panel); color: #ccc;
  border: 1px solid var(--k-border); border-radius: 12px;
  display: flex; flex-direction: column; overflow: hidden;
  font-family: monospace; font-size: 13px;
  box-shadow: 0 20px 50px #000;
}

/* Layout Interno */
.p-head { padding: 12px 16px; display: flex; justify-content: space-between; background: rgba(255,255,255,0.03); border-bottom: 1px solid var(--k-border); }
.p-body { padding: 16px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 15px; }
.p-foot { padding: 12px 16px; display: flex; gap: 10px; border-top: 1px solid var(--k-border); background: rgba(0,0,0,0.2); flex-wrap: wrap; }

/* Inputs & Elementos */
input, textarea {
  background: rgba(0,0,0,0.3); border: 1px solid var(--k-border);
  color: #fff; padding: 10px; border-radius: 6px; width: 100%;
  box-sizing: border-box; font-family: inherit; margin-bottom: 5px;
}
input:focus, textarea:focus { border-color: var(--k-accent); outline:none; }
.g-row { display: flex; gap: 8px; }

/* Botões Internos */
.btn { 
  background: rgba(255,255,255,0.05); border: 1px solid var(--k-border); 
  color: #ccc; padding: 8px 12px; border-radius: 6px; cursor: pointer; flex: 1;
}
.btn:hover { background: rgba(255,255,255,0.1); }
.btn-primary { background: var(--k-accent); color: #000; border: none; font-weight: bold; }
.btn-close { background:none; border:none; color:#fff; font-size:16px; cursor:pointer; }

/* Symbols List */
.sym-item { display: flex; gap: 5px; align-items: center; background: rgba(255,255,255,0.02); padding: 5px; border-radius: 6px; }
.drag-handle { cursor: grab; padding: 0 8px; color: var(--k-dim); }
.btn-del { background:none; border:none; color:#ff5555; cursor:pointer; padding:0 8px; }

/* Iframe Inline */
#iframeBox { display: none; height: 300px; border: 1px solid var(--k-border); margin-top: 8px; background: #fff; }
#iframeBox iframe { width: 100%; height: 100%; border: none; }

/* Mobile Tweaks */
@media (max-width: 600px) {
  #aiConfigModal .panel { width: 100%; height: 100%; border-radius: 0; border: none; }
  .g-row { flex-direction: column; }
  .p-foot { flex-direction: column; }
  .btn { padding: 12px; } /* Área de toque maior */
}
  </style>


  <div class="wrap">
    <div id="particles"></div>
    <div class="svg" aria-hidden>
      <svg viewBox="0 0 100 100" fill="none" stroke="cyan" stroke-width="2">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="magenta" stroke-width="1" opacity="0.6"/>
        <circle cx="50" cy="50" r="5" fill="#fff" />
      </svg>
    </div>
    <div class="assistant">Dual.Infodose</div>

    <div class="content">
      <iframe id="mainFrame" src="about:blank" title="Dual Infodose frame"></iframe>
    </div>

    <div class="symbol-bar" part="symbol-bar">
      <button class="symbol-button" data-target="DUAL">Φ</button>
      <button class="symbol-button" data-target="Orc">🗒</button>
      <button class="symbol-button" data-target="dual-app">🌐</button>
    </div>

    <div id="response">
      <div class="intro"><strong>Olá.</strong> Eu sou Dual.Infodose — diga "Oi".</div>
    </div>

    <div id="pulsos" class="hidden"></div>

    <div class="input">
      <input id="userInput" placeholder="Diga: 'oi, Dual'..." />
      <button id="sendBtn">➤</button>
    </div>

    <!-- decoder & upload hidden nodes -->
    <div id="decoderBox" class="hidden" style="position:fixed;top:160px;left:50%;transform:translateX(-50%);z-index:12;background:#111;padding:12px;border-radius:10px">
      <input id="codeInput" placeholder="Digite o selo..." style="padding:8px;border-radius:6px;border:none;background:#222;color:#fff"/>
      <button id="decodeBtn">✦</button>
    </div>

    <input id="uploadHTML" type="file" accept=".html" class="hidden"/>
  </div>
`;

export class DualInfodoseApp extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.frame = this.shadowRoot.getElementById('mainFrame');
    this.particlesEl = this.shadowRoot.getElementById('particles');
    this.pulsos = this.shadowRoot.getElementById('pulsos');
    this.response = this.shadowRoot.getElementById('response');
  }

  connectedCallback(){
    this._wire();
    this._initParticles();
  }

  _wire(){
    const shadow = this.shadowRoot;
    // symbol buttons
    shadow.querySelectorAll('.symbol-button').forEach(btn=>{
      btn.addEventListener('click', ()=> {
        const key = btn.dataset.target;
        this.loadPageByKey(key);
      });
    });

    // send
    shadow.getElementById('sendBtn').addEventListener('click', ()=>{
      const v = shadow.getElementById('userInput').value.trim();
      if (!v) return;
      this._appendResponse('Você: ' + v);
      shadow.getElementById('userInput').value = '';
      // simulate AI echo
      setTimeout(()=> this._appendResponse('Dual: Recebi — ' + v), 600);
    });

    // decoder
    shadow.getElementById('decodeBtn').addEventListener('click', ()=> this.decodeSymbolicCode());

    // upload
    shadow.getElementById('uploadHTML').addEventListener('change', (e)=>{
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev)=>{
        const blob = new Blob([ev.target.result], {type:'text/html'});
        const url = URL.createObjectURL(blob);
        this._openModalFrame(url);
      };
      reader.readAsText(file);
    });

    // pulsos toggle
    this.response.addEventListener('click', ()=> {
      this.pulsos.classList.toggle('hidden');
    });

    // iframe messaging (from inner frames)
    window.addEventListener('message', (ev)=>{
      if (ev.data?.type === 'iframeClick') {
        const x = ev.data.x, y = ev.data.y;
        this._spawn(x,y);
        this._log(`Pulso no iframe: ${x},${y}`);
      }
    });
  }

  _appendResponse(text){
    const d = document.createElement('div');
    d.textContent = text;
    d.style.padding = '8px';
    d.style.borderBottom = '1px solid rgba(255,255,255,0.03)';
    this.response.appendChild(d);
    this.response.scrollTop = this.response.scrollHeight;
    this._log(text);
  }

  _log(msg){
    if (!this.pulsos) return;
    const el = document.createElement('div');
    el.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    this.pulsos.prepend(el);
  }

  _spawn(x,y){
    const boom = document.createElement('div');
    boom.style.position='absolute';
    boom.style.left = (x - 6) + 'px';
    boom.style.top = (y - 6) + 'px';
    boom.style.width = boom.style.height = '12px';
    boom.style.borderRadius = '50%';
    boom.style.background = 'radial-gradient(circle,#0ff,#fff0,transparent)';
    boom.style.zIndex = 20;
    document.body.appendChild(boom);
    setTimeout(()=> boom.remove(), 900);
  }

  loadPageByKey(key){
    const dest = CODE_MAP[key] || CODE_MAP[key.toLowerCase()] || key;
    if (!dest) {
      this._appendResponse('Selo desconhecido: ' + key);
      return;
    }
    // if URL looks like external, open modal frame
    if (typeof dest === 'string') {
      if (dest.startsWith('http')) {
        this._openModalFrame(dest);
      } else {
        // relative -> load in iframe
        this.frame.src = dest;
      }
      this._log('Carregando: ' + dest);
    }
  }

  _openModalFrame(src){
    const modal = document.createElement('div');
    modal.style.position='fixed';
    modal.style.inset='0';
    modal.style.background='rgba(0,0,0,0.6)';
    modal.style.display='flex';
    modal.style.alignItems='center';
    modal.style.justifyContent='center';
    modal.style.zIndex = 9999;
    const cont = document.createElement('div');
    cont.style.width = '90%';
    cont.style.height = '86%';
    cont.style.background = '#111';
    cont.style.borderRadius = '12px';
    cont.style.overflow = 'hidden';
    const btn = document.createElement('button');
    btn.textContent = '✖';
    btn.style.position='absolute';
    btn.style.right='18px';
    btn.style.top='18px';
    btn.style.zIndex = 10001;
    const ifr = document.createElement('iframe');
    ifr.src = src;
    ifr.style.width='100%';
    ifr.style.height='100%';
    cont.appendChild(ifr);
    modal.appendChild(cont);
    modal.appendChild(btn);
    document.body.appendChild(modal);
    btn.addEventListener('click', ()=> modal.remove());
  }

  decodeSymbolicCode(){
    const code = this.shadowRoot.getElementById('codeInput').value.trim().toUpperCase();
    if (!code) return alert('Digite um selo');
    const dest = CODE_MAP[code];
    if (!dest) return alert('Selo não registrado: ' + code);
    this._openModalFrame(dest);
  }

  async _initParticles(){
    // if already present, initialize
    if (window.particlesJS) {
      try { window.particlesJS('particles', { particles: { number:{value:30}, color:{value:['#0ff','#f0f']}, shape:{type:'circle'}, size:{value:2}, move:{enable:true,speed:1.2}, line_linked:{enable:true,distance:120} }, interactivity:{ detect_on:'canvas', events:{ onhover:{ enable:true, mode:'repulse' } } }, retina_detect:true }); return; } catch(e){}
    }
    // load library
    await this._loadScript('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js');
    if (window.particlesJS) {
      try { window.particlesJS('particles', { particles: { number:{value:30}, color:{value:['#0ff','#f0f']}, shape:{type:'circle'}, size:{value:2}, move:{enable:true,speed:1.2}, line_linked:{enable:true,distance:120} }, interactivity:{ detect_on:'canvas', events:{ onhover:{ enable:true, mode:'repulse' } } }, retina_detect:true }); } catch(e){ console.warn(e); }
    }
  }

  _loadScript(src){
    return new Promise((resolve,reject)=>{
      if (document.querySelector('script[src="'+src+'"]')) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = ()=> resolve();
      s.onerror = (e)=> reject(e);
      document.head.appendChild(s);
    });
  }
}

customElements.define('dual-infodose-app', DualInfodoseApp);
