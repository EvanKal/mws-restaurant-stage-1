console.log("hi");

self.addEventListener('fetch', function(event) {
  console.log(event.request);
})
