const CACHE_NAME = 'missao-pmpe-cache-v10-ultra';
const ASSETS_TO_CACHE = [
  './manifest.json',
  './brasao-pmpe.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Purgando cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia NETWORK-FIRST para garantir que o usuário SEMPRE veja o layout atualizado imediatamente
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('kvdb.io') || event.request.url.includes('ipapi.co')) {
    return;
  }

  // Para navegação HTML (index.html): NUNCA entrega versão antiga do cache, sempre busca versão fresca
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then((response) => response)
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Para outros assets: tenta rede primeiro
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
