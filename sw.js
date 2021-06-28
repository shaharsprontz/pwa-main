// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open('fox-store').then((cache) => cache.addAll([
      
//       'pwa-main/index.html',
//       'pwa-main/index.js',
//       'pwa-main/style.css',
//       'pwa-main/images/fox1.jpg',
//       'pwa-main/images/fox2.jpg',
//       'pwa-main/images/fox3.jpg',
//       'pwa-main/images/fox4.jpg',
//     ])),
//   );
// });

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
