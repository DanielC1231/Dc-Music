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
      .catch((error) => {
        console.log('❌ Error al instalar:', error);
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
// INTERCEPTAR PETICIONES - PARA CELULAR OFFLINE
// ==========================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // IGNORAR peticiones que no sean http/https
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // IGNORAR peticiones HEAD
  if (request.method === 'HEAD') {
    return;
  }

  // ==========================================
  // PARA CANCIONES FLAC (BUSCAR EN CACHÉ PRIMERO)
  // ==========================================
  if (url.pathname.endsWith('.flac') || url.hostname.includes('archive.org')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            console.log('📀 Canción desde caché OFFLINE');
            return response;
          }
          // Si no está en caché, intentar descargar (solo si hay internet)
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
              // Sin internet y sin caché
              console.log('❌ Canción no disponible offline');
              return new Response('No disponible offline', { 
                status: 404,
                statusText: 'Canción no descargada'
              });
            });
        })
    );
    return;
  }

  // ==========================================
  // PARA ARCHIVOS DE LETRAS (NO BLOQUEAR)
  // ==========================================
  if (url.pathname.includes('/lyrics/')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).catch(() => {
            return new Response('', { status: 404 });
          });
        })
    );
    return;
  }

  // ==========================================
  // PARA OTROS ARCHIVOS (HTML, CSS, JS, IMÁGENES)
  // ==========================================
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
