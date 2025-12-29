// Service Worker per cache delle risorse statiche
// Compatibile con GitHub Pages

const CACHE_NAME = 'gaia-bresciani-v2';
const CACHE_DURATION = 31536000; // 1 anno in secondi

// Risorse da cachare immediatamente
const STATIC_ASSETS = [
  '/',
  '/css/style.css',
  '/js/enhancements.js',
  '/fonts/open-sans-v40-latin-regular.woff2',
  '/fonts/open-sans-v40-latin-600.woff2',
  '/fonts/lora-v35-latin-700.woff2',
  '/assets/favicon.webp'
];

// Installazione: cache risorse statiche
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch((err) => {
        console.log('Service Worker install error:', err);
      })
  );
  self.skipWaiting();
});

// Attivazione: rimuovi cache vecchie
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch: strategia di cache per risorse statiche
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Solo per risorse del nostro dominio
  if (url.origin !== location.origin) {
    return; // Lascia passare richieste esterne
  }

  // Network First per CSS (per garantire aggiornamenti)
  if (url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback alla cache se la rete fallisce
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache First per altre risorse statiche
  if (isStaticAsset(event.request)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((response) => {
            // Cache solo risposte valide
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          });
        })
    );
  }
});

// Verifica se è una risorsa statica
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.startsWith('/css/') ||
    url.pathname.startsWith('/js/')
  );
}

