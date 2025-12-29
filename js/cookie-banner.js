// Cookie Banner - Gestione consenso cookie
// Conforme alla normativa italiana (GDPR, Direttiva ePrivacy, Codice Privacy)

(function() {
  'use strict';

  const COOKIE_CONSENT_NAME = 'cookie_consent';
  const COOKIE_CONSENT_EXPIRY_DAYS = 365;
  const THIRD_PARTY_CONSENT_NAME = 'third_party_cookies_consent';

  // Funzione per impostare un cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Lax';
  }

  // Funzione per leggere un cookie
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Funzione per rimuovere un cookie
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  // Crea il banner cookie
  function createCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Informativa sui cookie');
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <p>Questo sito utilizza cookie tecnici necessari per il funzionamento e servizi di terze parti che potrebbero impostare cookie. Continuando a navigare, accetti l'utilizzo dei cookie tecnici. Per maggiori informazioni, consulta la <a href="cookie-policy.html" title="Leggi la Cookie Policy">Cookie Policy</a>.</p>
        </div>
        <div class="cookie-banner-buttons">
          <button id="cookie-accept-all" class="cookie-btn cookie-btn-primary" aria-label="Accetta tutti i cookie">Accetta tutti</button>
          <button id="cookie-accept-necessary" class="cookie-btn cookie-btn-secondary" aria-label="Accetta solo cookie necessari">Solo necessari</button>
          <button id="cookie-settings" class="cookie-btn cookie-btn-link" aria-label="Gestisci le preferenze cookie">Impostazioni</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    return banner;
  }

  // Crea il pannello impostazioni cookie
  function createCookieSettings() {
    const settings = document.createElement('div');
    settings.id = 'cookie-settings';
    settings.setAttribute('role', 'dialog');
    settings.setAttribute('aria-label', 'Impostazioni cookie');
    settings.innerHTML = `
      <div class="cookie-settings-content">
        <h2>Gestione Cookie</h2>
        <div class="cookie-settings-section">
          <div class="cookie-settings-item">
            <div class="cookie-settings-header">
              <h3>Cookie Tecnici (Necessari)</h3>
              <span class="cookie-status cookie-status-required">Sempre attivi</span>
            </div>
            <p>Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Non raccolgono informazioni personali identificabili.</p>
          </div>
          <div class="cookie-settings-item">
            <div class="cookie-settings-header">
              <h3>Cookie di Terze Parti</h3>
              <label class="cookie-toggle">
                <input type="checkbox" id="third-party-toggle" ${getCookie(THIRD_PARTY_CONSENT_NAME) === 'true' ? 'checked' : ''}>
                <span class="cookie-toggle-slider"></span>
              </label>
            </div>
            <p>Cookie utilizzati da servizi esterni come MioDottore (widget prenotazioni) e Elfsight Platform. Questi servizi possono raccogliere dati secondo le loro rispettive privacy policy.</p>
          </div>
        </div>
        <div class="cookie-settings-buttons">
          <button id="cookie-save-settings" class="cookie-btn cookie-btn-primary">Salva preferenze</button>
          <button id="cookie-close-settings" class="cookie-btn cookie-btn-secondary">Chiudi</button>
        </div>
      </div>
    `;
    document.body.appendChild(settings);
    return settings;
  }

  // Mostra il banner se il consenso non è stato ancora dato
  function showBannerIfNeeded() {
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (!consent) {
      const banner = createCookieBanner();
      
      // Event listeners per i pulsanti del banner
      document.getElementById('cookie-accept-all').addEventListener('click', function() {
        setCookie(COOKIE_CONSENT_NAME, 'true', COOKIE_CONSENT_EXPIRY_DAYS);
        setCookie(THIRD_PARTY_CONSENT_NAME, 'true', COOKIE_CONSENT_EXPIRY_DAYS);
        banner.style.display = 'none';
        loadThirdPartyScripts();
      });

      document.getElementById('cookie-accept-necessary').addEventListener('click', function() {
        setCookie(COOKIE_CONSENT_NAME, 'true', COOKIE_CONSENT_EXPIRY_DAYS);
        setCookie(THIRD_PARTY_CONSENT_NAME, 'false', COOKIE_CONSENT_EXPIRY_DAYS);
        banner.style.display = 'none';
      });

      document.getElementById('cookie-settings').addEventListener('click', function() {
        banner.style.display = 'none';
        showCookieSettings();
      });
    } else {
      // Se il consenso è già stato dato, carica gli script di terze parti se accettati
      if (getCookie(THIRD_PARTY_CONSENT_NAME) === 'true') {
        loadThirdPartyScripts();
      }
    }
  }

  // Mostra il pannello impostazioni
  function showCookieSettings() {
    let settings = document.getElementById('cookie-settings');
    if (!settings) {
      settings = createCookieSettings();
    }
    settings.style.display = 'flex';

    document.getElementById('cookie-save-settings').addEventListener('click', function() {
      const thirdPartyConsent = document.getElementById('third-party-toggle').checked;
      setCookie(COOKIE_CONSENT_NAME, 'true', COOKIE_CONSENT_EXPIRY_DAYS);
      setCookie(THIRD_PARTY_CONSENT_NAME, thirdPartyConsent ? 'true' : 'false', COOKIE_CONSENT_EXPIRY_DAYS);
      
      if (thirdPartyConsent) {
        loadThirdPartyScripts();
      } else {
        // Rimuovi eventuali cookie di terze parti (se possibile)
        // Nota: non è possibile eliminare cookie di terze parti direttamente,
        // ma possiamo evitare di caricare nuovi script
      }
      
      settings.style.display = 'none';
    });

    document.getElementById('cookie-close-settings').addEventListener('click', function() {
      settings.style.display = 'none';
      // Se non c'è ancora consenso, mostra di nuovo il banner
      if (!getCookie(COOKIE_CONSENT_NAME)) {
        document.getElementById('cookie-banner').style.display = 'flex';
      }
    });
  }

  // Carica script di terze parti solo se il consenso è stato dato
  function loadThirdPartyScripts() {
    // Elfsight Platform - carica solo se non già caricato
    if (!document.querySelector('script[src*="elfsight.com"]')) {
      const elfsightScript = document.createElement('script');
      elfsightScript.defer = true;
      elfsightScript.src = 'https://static.elfsight.com/platform/platform.js';
      document.body.appendChild(elfsightScript);
    }

    // MioDottore widget - viene già caricato lazy, quindi non serve fare nulla qui
    // Il widget viene caricato solo quando visibile tramite IntersectionObserver
  }

  // Inizializza quando il DOM è pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      showBannerIfNeeded();
    });
  } else {
    showBannerIfNeeded();
  }

  // Esponi funzione globale per aprire impostazioni da link esterni
  window.openCookieSettings = showCookieSettings;
})();


