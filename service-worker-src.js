importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// ex: "30-07-2019-11-19-52"
const version = new Date().toLocaleString().replace(/\/|,\s|:/g, '-'); 

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  configureWorkbox();

} else {
  console.log(`Boo! Workbox didn't load 😬`);
  
}

function configureWorkbox() {
  workbox.core.setCacheNameDetails({
    prefix: 'charisTheo-portfolio',
    suffix: version,
    precache: 'precache-cache',
    runtime: 'runtime-cache'
  });

  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate()
  );
  
  workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate()
  );
  
  workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.StaleWhileRevalidate()
  );
}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches
      .keys()
      .then(keys => keys.filter(key => !key.endsWith(version)))
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
  );
});
