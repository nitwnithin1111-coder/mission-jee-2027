// Mission JEE 2027 - Offline Service Worker & Push Notifications (v2)
try {
  importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
} catch (e) {
  // Graceful fallback when offline
}

const CACHE_NAME = 'mission-jee-cache-v2';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/data.js',
  '/questions.json',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/support.html',
  '/privacy.html',
  '/terms.html',
  '/gravitation-story-guide.html',
  '/semiconductors-story-guide.html',
  '/gravitation-story-guide.pdf',
  '/semiconductors-story-guide.pdf'
];

// Install: Pre-cache core app shell & study guides
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline app shell & study guides (v2)...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Delete old cache versions and claim all open clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch handler
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore analytics, chrome-extensions, and third-party push origins
  if (url.pathname.startsWith('/_vercel/') || url.protocol.startsWith('chrome') || url.hostname.includes('onesignal')) {
    return;
  }

  // 1. Navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // 2. Static assets (CSS, JS, images, PDFs, JSON): Cache First, background refresh
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached immediately and refresh in background (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
