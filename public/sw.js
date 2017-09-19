self.addEventListener('install', function(event) {
  console.log("service worker installed successfully !!");
  event.waitUntil(
    caches.open('static')
    .then(function(cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/src/js/aframe.min.js'
      ]);
    })
  );  
});

self.addEventListener('activate', function() {
  console.log("service worker activateed successfully !!");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if(res) {
          return res;
        } else {
          return fetch(event.request)
        }
      })
  );
});