const CACHE_NAME = 'eric-anthony-v12';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.min.js',
    '/vendor/gsap.min.js',
    '/vendor/ScrollTrigger.min.js',
    '/vendor/SplitText.min.js',
    '/vendor/ScrambleTextPlugin.min.js',
    '/manifest.json',
    '/icons/icon-72x72.svg',
    '/icons/icon-96x96.svg',
    '/icons/icon-128x128.svg',
    '/icons/icon-144x144.svg',
    '/icons/icon-152x152.svg',
    '/icons/icon-192x192.svg',
    '/icons/icon-384x384.svg',
    '/icons/icon-512x512.svg',
    '/animations/hero-coding.json',
    '/animations/skills-network.json',
    '/animations/experience-rocket.json',
    '/animations/contact-envelope.json'
];

// Install — pre-cache all static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.allSettled(
                STATIC_ASSETS.map((asset) => cache.add(asset))
            );
        })
    );
    self.skipWaiting();
});

// Activate — purge older caches immediately
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch — Cache First, falling back to Network (never throws TypeError)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;

    // Do not intercept on localhost / dev server
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache).catch(() => {});
                    });
                }
                return networkResponse;
            }).catch(async () => {
                if (event.request.mode === 'navigate') {
                    const indexCached = await caches.match('/index.html') || await caches.match('/');
                    if (indexCached) return indexCached;
                }
                return new Response('Network error', { status: 503, statusText: 'Service Unavailable' });
            });
        })
    );
});
