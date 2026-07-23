// ==========================================
// SERVICE WORKER - PARA MODO OFFLINE
// ==========================================

const CACHE_NAME = 'dc-music-v1';
const OFFLINE_CACHE = 'dc-music-offline-v1';

// Archivos que deben estar disponibles offline
const FILES_TO_CACHE = [
  '/Dc-Music/',
  '/Dc-Music/index.html',
  '/Dc-Music/style.css',
  '/Dc-Music/script.js',
  '/Dc-Music/manifest.json',
  '/Dc-Music/img/logo.png',
  '/Dc-Music/img/logo-192x192.png',
  '/Dc-Music/img/logo-512x512.png'
];

// ==========================================
// INSTALACIÓN
// ==========================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE)
      .then((cache) => {
        console.log('📦 Guardando archivos en caché...');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        console.log('✅ App instalada para uso offline');
        return self.skipWaiting();
      })
  );
});

// ==========================================
// ACTIVACIÓN
// ==========================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
            console.log('🗑️ Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// ==========================================
// INTERCEPTAR PETICIONES
// ==========================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Si es una canción FLAC o de archive.org
  if (url.pathname.endsWith('.flac') || url.hostname.includes('archive.org')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            console.log('📀 Canción desde caché');
            return response;
          }
          return fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                const clonedResponse = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, clonedResponse);
                  });
              }
              return response;
            })
            .catch(() => {
              return new Response('No disponible offline', { status: 404 });
            });
        })
    );
    return;
  }

  // Para otros archivos (HTML, CSS, JS, imágenes)
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          console.log('📄 Desde caché:', url.pathname);
          return response;
        }
        return fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const clonedResponse = response.clone();
              caches.open(OFFLINE_CACHE)
                .then((cache) => {
                  cache.put(request, clonedResponse);
                });
            }
            return response;
          })
          .catch(() => {
            if (url.pathname.endsWith('.html')) {
              return caches.match('/Dc-Music/index.html');
            }
            return new Response('No disponible offline', { status: 404 });
          });
      })
  );
});
