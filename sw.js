// Mission JEE 2027 - Offline Service Worker & Push Notifications
try {
  importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
} catch (e) {
  // Graceful fallback when offline
}

const CACHE_NAME = 'mission-jee-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/support.html',
  '/privacy.html',
  '/terms.html',
  '/semiconductors-story-guide.html',
  '/gravitation-story-guide.html',
  '/semiconductors-story-guide.pdf',
  '/gravitation-story-guide.pdf'
];

// Install: Pre-cache core app shell & study guides
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline app shell & PDFs...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up older cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate for offline study support
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore analytics and chrome-extension schemes
  if (url.pathname.startsWith('/_vercel/') || url.protocol.startsWith('chrome')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Fetch from network in background to revalidate cache
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        // Network failed (offline)
        console.log('[SW] Network request failed, relying on offline cache for:', event.request.url);
      });

      // Return cached version immediately if available, else wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
