// ─── Service Worker ───────────────────────────────────────────────────────
// Bump CACHE_NAME every time you update any file in PRECACHE_URLS, or any
// core site file. This guarantees old caches get wiped on the next visit
// instead of silently serving stale content.
const CACHE_NAME = 'uw-portfolio-v2';

const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting(); // activate the new SW as soon as it finishes installing
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim(); // take control of open tabs immediately
});

// Network-first: always try to fetch the live version first so edits show up
// immediately on every reload. Cache is only used as an offline fallback —
// this site never serves a stale page just because a service worker is active.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
