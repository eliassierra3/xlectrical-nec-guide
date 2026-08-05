/* Xlectrical NEC Field Reference — offline service worker.
   Strategy:
     • The app shell (HTML navigations) is NETWORK-FIRST — when the tech has
       signal they always get the latest content; when offline they fall back
       to the last cached copy. This is what makes updates show up immediately
       instead of being stuck behind an old cache.
     • Everything else (icons, manifest) is cache-first — those are stable.
   Bump CACHE whenever you want every client to drop old caches. */
const CACHE = 'xlectrical-nec-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isHTML =
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // Network-first with a timeout: on good signal the tech always gets the
    // latest content; on slow/no signal we fall back to the cached shell fast
    // (and the network copy still refreshes the cache in the background).
    event.respondWith(
      new Promise((resolve) => {
        let settled = false;
        const done = (r) => { if (!settled) { settled = true; resolve(r); } };
        const fallback = () =>
          caches.match(req).then((c) => c || caches.match('./index.html'));

        // If the network is too slow, serve the cache after 3s.
        const timer = setTimeout(() => fallback().then((c) => { if (c) done(c); }), 3000);

        fetch(req)
          .then((response) => {
            clearTimeout(timer);
            caches.open(CACHE).then((cache) => cache.put('./index.html', response.clone()));
            done(response);
          })
          .catch(() => { clearTimeout(timer); fallback().then(done); });
      })
    );
    return;
  }

  // Cache-first for static assets.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
