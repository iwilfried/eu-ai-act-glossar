/* EU AI Act Glossar · Service Worker
 * Strategie:
 *   - HTML, JS (App-Shell): Network-First — User bekommt immer die neueste Version online,
 *     fallback auf Cache nur wenn offline.
 *   - Icons, Daten (terms.js): Stale-While-Revalidate — schnell aus Cache, im Hintergrund Update.
 *   - Externe Fonts: Cache-First mit Fallback.
 */

const CACHE_VERSION = "v2.7.0";
const CACHE_NAME = `ai-act-glossar-${CACHE_VERSION}`;

const PRECACHE = [
  "./",
  "./index.html",
  "./terms.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    const isShell = (/\.html?$|\/$/.test(url.pathname)) || url.pathname.endsWith("/sw.js");

    if (isShell) {
      // NETWORK-FIRST: immer aktuellste Version, fallback auf Cache nur offline
      event.respondWith(
        fetch(req)
          .then(net => {
            if (net && net.ok) {
              const copy = net.clone();
              caches.open(CACHE_NAME).then(c => c.put(req, copy));
            }
            return net;
          })
          .catch(() => caches.match(req).then(cached => cached || caches.match("./index.html")))
      );
      return;
    }

    // STALE-WHILE-REVALIDATE für Daten und Icons
    event.respondWith(
      caches.match(req).then(cached => {
        const network = fetch(req).then(net => {
          if (net && net.ok) {
            const copy = net.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return net;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Google Fonts: Cache-First
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(net => {
        if (net && net.ok) {
          const copy = net.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return net;
      }).catch(() => cached))
    );
    return;
  }
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
