// ==========================================
// SERVICE WORKER - PARA MODO OFFLINE
// ==========================================

const CACHE_NAME = 'dc-music-v1';
const OFFLINE_CACHE = 'dc-music-offline-v1';

// Archivos que deben estar disponibles offline
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/img/logo.png',
  '/img/logo-192x192.png',
  '/img/logo-512x512.png'
  // Agrega aquí todas las imágenes y archivos que necesites
];

// ==========================================
// INSTALACIÓN - Guardar archivos en caché
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
// ACTIVACIÓN - Limpiar cachés viejos
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
// INTERCEPTAR PETICIONES - Estrategia: Cache First
// ==========================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Si es una canción FLAC, intentar servirla desde caché
  if (url.pathname.endsWith('.flac') || url.pathname.includes('archive.org')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          // Si está en caché, devolverla
          if (response) {
            console.log('📀 Canción desde caché:', url.pathname);
            return response;
          }
          // Si no, intentar descargar
          return fetch(request)
            .then((response) => {
              // Guardar en caché para futuras veces
              if (response && response.status === 200) {
                const clonedResponse = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, clonedResponse);
                    console.log('💾 Canción guardada en caché:', url.pathname);
                  });
              }
              return response;
            })
            .catch(() => {
              // Si no hay internet y no está en caché
              console.log('❌ No se pudo cargar:', url.pathname);
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
        
        // Si no está en caché, descargar
        return fetch(request)
          .then((response) => {
            // Guardar en caché para futuras veces
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
            // Si no hay internet y no está en caché
            if (url.pathname.endsWith('.html')) {
              return caches.match('/index.html');
            }
            return new Response('No disponible offline', { status: 404 });
          });
      })
  );
});