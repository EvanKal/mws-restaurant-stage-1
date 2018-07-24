self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('restaurantCache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'css/responsive_index.css',
        'css/responsive_restaurant.css',
        'css/styles.css',
        'data/restaurants.json',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
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
