let staticCacheName = "restaurantCache4";

self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/restaurant.html ',
        // '/img/1.jpg',
        // '/img/2.jpg',
        // '/img/3.jpg',
        // '/img/10.jpg',
        // '/img/4.jpg',
        // '/img/5.jpg',
        // '/img/6.jpg',
        // '/img/7.jpg',
        // '/img/8.jpg',
        // '/img/9.jpg',
        '/css/responsive_index.css',
        '/css/responsive_restaurant.css',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        'https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.js',
        'https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
    return fetch(event.request);

// The code following caches EVERYTHING
    //
    //   var requestClone = event.request.clone();
    //
    //   return fetch(requestClone).then(function(response) {
    //     if(!response) {
    //         console.log('[ServiceWorker] No response from fetch');
    //         return response;
    //     }
    //
    //     var responseClone = response.clone();
    //                   // Open the cache again
    //     return caches.open('staticCacheName').then(function(cache) {
    //       cache.put(event.request, responseClone);
    //       return response;
    //     })
    //
    //   }
    // )
  }))
});

// Clearing old cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
        return cacheName.startsWith('restaurant') && cacheName !== staticCacheName;
      }).map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
    })
  );
});
