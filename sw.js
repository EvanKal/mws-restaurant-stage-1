self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('restaurantCache').then(function(cache) {
      return cache.addAll([
        '/',
        '/restaurant.html',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/10.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/css/responsive_index.css',
        '/css/responsive_restaurant.css',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        // 'https://api.tiles.mapbox.com/v4/',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
      }
    )
  )
});

// let requestUrl = new URL(event.request.url);
//
// if (requestUrl.origin === location.origin) {
//   if (requestUrl.pathname === '/') {
//     event.respondWith(caches.match('/skeleton'));
//     return;
//   }
// }
