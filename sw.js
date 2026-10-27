// Concepteur et créateur : Mahamadou Issiaka MAIGA (MAIGUS)
// SPDX-License-Identifier: GPL-3.0-or-later
// Changer VERSION à chaque mise en ligne (même numéro que version.txt et manifest.json).
const VERSION = '3.0';
const CACHE_NAME = 'ayneha-transcripteur-' + VERSION;
const ASSETS = ['./', './index.html', './manifest.json', './ayneha-pro.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))));
  self.clients.claim();
});
// La page et version.txt : réseau d'abord (mises à jour), cache si hors connexion.
// Police et icônes : cache d'abord.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const page = req.mode === 'navigate' || req.url.endsWith('.html') || req.url.endsWith('version.txt') || req.url.endsWith('manifest.json');
  if (page) {
    event.respondWith(fetch(req).then((res) => {
      const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then((cached) => cached || fetch(req).then((res) => {
    const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); return res;
  })));
});
