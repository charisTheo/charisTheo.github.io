importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    configureWorkbox();
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
    
}

function configureWorkbox() {
    workbox.googleAnalytics.initialize();
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
    
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

    workbox.routing.registerRoute(
        /\.svg$/,
        new workbox.strategies.CacheFirst()
    );

    // * store projects' media in a different runtime cache
    // * checking later inside this cache to decide which projects are available offline
    workbox.routing.registerRoute(
        /\.(?:png|gif|webp|mp4|webm)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'runtime-projects-media'
        })        
    );
}