/* EU AI Act Glossar · Service Worker
 * Strategie: Cache-First für App-Shell, Network-First für externe Ressourcen.
 * Bei Versionsänderung: CACHE_VERSION hochzählen → neuer Cache wird angelegt, alter gelöscht.
 */

const CACHE_VERSION = "v1.0.1";
const CACHE_NAME = `ai-act-glossar-${CACHE_VERSION}`;

// Dateien, die offline verfügbar sein müssen (App-Shell + Daten)
const PRECACHE = [
  "./",
  "./index.html",
  "./terms.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

// Install: Pre-Cache der App-Shell
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
});

// Activate: alte Caches aufräumen
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Fetch: Strategie je nach Ziel
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Eigene App-Shell und Daten: Cache-First
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) {
          // Im Hintergrund nach Update suchen
          fetch(req).then(net => {
            if (net && net.ok) {
              caches.open(CACHE_NAME).then(c => c.put(req, net));
            }
          }).catch(() => {});
          return cached;
        }
        return fetch(req).then(net => {
          if (net && net.ok) {
            const copy = net.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return net;
        });
      })
    );
    return;
  }

  // Google Fonts und externe Ressourcen: Cache-First mit Network-Fallback
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
