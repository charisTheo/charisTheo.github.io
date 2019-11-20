importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    configureWorkbox();
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
    
}

function configureWorkbox() {
    // workbox.navigationPreload.enable();
    workbox.googleAnalytics.initialize();
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
    
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "c8619cc8f987ce78ece6002ebd0994aa"
  },
  {
    "url": "404.html",
    "revision": "649bec9101046fe8d11183fdde7a271e"
  },
  {
    "url": "partials/compressed/frameworksImages.html",
    "revision": "451314030ccedbd8842db1ef71fc3519"
  },
  {
    "url": "partials/compressed/imagePicker.html",
    "revision": "02023f22a27a53395f138bec1a6ccb34"
  },
  {
    "url": "partials/compressed/sidenavList.html",
    "revision": "cc4cd3f4333a1c1d5932162589a2f8c5"
  },
  {
    "url": "partials/compressed/socialLinks.html",
    "revision": "0f22a34c764129ec5693f4e3bde9ff4c"
  },
  {
    "url": "partials/compressed/svgLogo.html",
    "revision": "dd69b1c1454d54cdaf29db5ea30a25b8"
  },
  {
    "url": "styles/compressed/dark-mode.min.css",
    "revision": "b36620b65ea5d2e8b40c29b9b257894c"
  },
  {
    "url": "styles/compressed/styles.min.css",
    "revision": "c175bc1b5cbd9367e7344b05bbc849c2"
  },
  {
    "url": "fonts/material-icons.woff2",
    "revision": "0509ab09c1b0d2200a4135803c91d6ce"
  },
  {
    "url": "fonts/michroma.woff2",
    "revision": "d61cdce0970cc120a713c713feeb02a5"
  },
  {
    "url": "js/bundle/bundle.min.js",
    "revision": "c933b6767d06b08bed92a9f1ff8c06a7"
  },
  {
    "url": "img/logo-ct.svg",
    "revision": "1a52e2466123aadc7bf396507c8cf3b6"
  },
  {
    "url": "img/logos/css3-logo.svg",
    "revision": "0db4bb74f67a7815efac29de668cccad"
  },
  {
    "url": "img/logos/gatsby-logo.svg",
    "revision": "a6815f03eb24970277c40e478346f5ba"
  },
  {
    "url": "img/logos/graphql-logo.svg",
    "revision": "21896110cef47a84089c96b91633fcab"
  },
  {
    "url": "img/logos/gsap-logo.svg",
    "revision": "6ebd6dc5c414f58fe404e8caf044195e"
  },
  {
    "url": "img/logos/js-logo.svg",
    "revision": "20f16045bb497dd427ede2f275d84cfe"
  },
  {
    "url": "img/logos/node-logo.svg",
    "revision": "d47378095ced4cbf47fbe58f6f33603c"
  },
  {
    "url": "img/logos/pwa-logo.svg",
    "revision": "1b7e9a5e0a9271a4314f15c726169315"
  },
  {
    "url": "img/logos/react-logo.svg",
    "revision": "da1c6f6b20c6a2742ebb114150b8d42d"
  },
  {
    "url": "img/logos/socket.io-logo.svg",
    "revision": "f02bc957fa07e2274a85641c7bb2e4a3"
  },
  {
    "url": "img/logos/svg-logo.svg",
    "revision": "ee1a32d5c87be556270cc6412f21aceb"
  },
  {
    "url": "img/logos/workbox-logo.svg",
    "revision": "62bfdfdef899aa08de83783109200ffd"
  },
  {
    "url": "img/social-links/github-circle.svg",
    "revision": "d150d4d60b034a7b8fc0df36dd389590"
  },
  {
    "url": "img/social-links/linkedin.svg",
    "revision": "8fcac3b248cff064c0d887b34489cd24"
  },
  {
    "url": "img/social-links/stack-overflow.svg",
    "revision": "5fc01bd7ecaf77f572ee0c987543506f"
  },
  {
    "url": "img/social-links/telegram.svg",
    "revision": "f748d5b9e6b047bdd16db98d3b72ef83"
  },
  {
    "url": "img/social-links/twitter.svg",
    "revision": "66a49535097afc53b7f0d33c32811c9d"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "02314be0fba645963f99944037d901b8"
  },
  {
    "url": "favicons/android-chrome-256x256.png",
    "revision": "1ddbc7ff8b9d845b5cc7b759b1f19d3b"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "0c9e9349ad1ff0539c267e2895061810"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "9be91c68aca72a14b8e64ea4398e1ccc"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "7d97e3396110fd50ac9c8634a9b3c099"
  },
  {
    "url": "favicons/logo-ct-512.png",
    "revision": "6c8a9e3ace168a7d71e4e69c00b8aeb0"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "c30998cdf86dace44478d667eaf8753f"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "a9b444198302f1fc81a59357297689e5"
  },
  {
    "url": "favicon.ico",
    "revision": "e1f3026e97a4c78def06b099cdf0d61e"
  },
  {
    "url": "projects-data.json",
    "revision": "58e726272ea06bc1c9576fc1a9ef8f1a"
  },
  {
    "url": "manifest.json",
    "revision": "6128161d679bd3cfd01cdeb38a308f62"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8911375d9c07d7518628535364b2a092"
  }
]);
    
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