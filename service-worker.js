importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    configureWorkbox();
    workbox.googleAnalytics.initialize();
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
    
}

function configureWorkbox() {

    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "dcd9aff8acfc27210fb9de27f5dcf29f"
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
    "revision": "0f86485eb0e791e44c5e3d25f887a420"
  },
  {
    "url": "styles/compressed/styles.min.css",
    "revision": "0607760530a7892b4a88d03b58995bea"
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
    "revision": "787fb1a14e57a36e5253199e8d395099"
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
    "url": "img/logos/github-octocat.png",
    "revision": "b2ffb3a32c2e07826c887815599de6f3"
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
    "url": "img/logos/jquery-logo.png",
    "revision": "a3af0655fc9a481401550b5be0e86cab"
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
    "revision": "81fb2670658359555b13c5c419c3407e"
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
    "url": "img/profile_photo.webp",
    "revision": "85ed13d4da77fa40e7f893552a1a227b"
  },
  {
    "url": "img/screenshots/animath/demo_tophat.webp",
    "revision": "16fe3bcb2dc9a858b52b20cf984ba1fe"
  },
  {
    "url": "img/screenshots/animath/limits_demo.mp4",
    "revision": "6298864405efa69f6afb68dcf69725b8"
  },
  {
    "url": "img/screenshots/animath/limits_demo.webm",
    "revision": "4d72ae7baa4808c7751b789dd19ad4b9"
  },
  {
    "url": "img/screenshots/animath/limits.png",
    "revision": "f314074c060f820cd3a91da7684b822f"
  },
  {
    "url": "img/screenshots/animath/limits.webp",
    "revision": "a85ba4ed240392f2ad7f81f50fbcb785"
  },
  {
    "url": "img/screenshots/animath/sequences_demo.gif",
    "revision": "1ed68ab18e1827e54263c5218eeb081e"
  },
  {
    "url": "img/screenshots/animath/sequences_demo.mp4",
    "revision": "2bc6ec6738437ab0a3f3eaca143c4947"
  },
  {
    "url": "img/screenshots/animath/sequences_demo.webm",
    "revision": "0e5c1a97e05917e5731ba1723ef081ec"
  },
  {
    "url": "img/screenshots/animath/sequences.png",
    "revision": "257acb3832b6b787113fe2f674496902"
  },
  {
    "url": "img/screenshots/animath/sequences.webp",
    "revision": "d0fbc83167cf8e10b5fae61dd37df209"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-1.png",
    "revision": "2e10fafef872e9ef0844d0c7892473d2"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-1.webp",
    "revision": "fd1a2c6b594b4b16df39456ad74461ed"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-2.png",
    "revision": "9b7bde6c586ff03655646238c6a80c04"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-2.webp",
    "revision": "24da2caa1b12daa28f9d0a02e5907be4"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-3.png",
    "revision": "5154760e51dbc20afe8691b261216f49"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-3.webp",
    "revision": "eb2b97766faae91a566f9621dc697d27"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-4.png",
    "revision": "3b464b109b4f9da53bb7db488ce2dd48"
  },
  {
    "url": "img/screenshots/beromantic/beromantic-4.webp",
    "revision": "1d6903135343fa27f5684c0e00b2f122"
  },
  {
    "url": "img/screenshots/beromantic/beromantic.webm",
    "revision": "29ae51e1f5b7ef6d2c6579f5fbadb014"
  },
  {
    "url": "img/screenshots/cooksurfing/approving.gif",
    "revision": "a41985fdc2e967f06da4d01d3912423b"
  },
  {
    "url": "img/screenshots/cooksurfing/approving.mp4",
    "revision": "17f104900b2eebf2d6cf05e7ab417c00"
  },
  {
    "url": "img/screenshots/cooksurfing/approving.webm",
    "revision": "1b745864dec82a66a887729b97436f7e"
  },
  {
    "url": "img/screenshots/cooksurfing/cooksurfing.png",
    "revision": "17680b52a4486932b6589fab4d956917"
  },
  {
    "url": "img/screenshots/cooksurfing/cooksurfing.webp",
    "revision": "2bfa5818cbac3a5c0a643338c60bb531"
  },
  {
    "url": "img/screenshots/cooksurfing/dashboard_2.png",
    "revision": "d644d9c0542e200604a9a2acdb7647d3"
  },
  {
    "url": "img/screenshots/cooksurfing/dashboard_2.webp",
    "revision": "2cff34fea8131e280251b9ad3640ed7c"
  },
  {
    "url": "img/screenshots/cooksurfing/dashboard.png",
    "revision": "bcace5cc38a32a81e9b33230a91e70a7"
  },
  {
    "url": "img/screenshots/cooksurfing/dashboard.webp",
    "revision": "bf8a6784b1570fe5b186a84dd1310673"
  },
  {
    "url": "img/screenshots/cooksurfing/logo.png",
    "revision": "08771ef3962fd607d8fa34b8e54a695e"
  },
  {
    "url": "img/screenshots/cooksurfing/logo.webp",
    "revision": "d2fac8d7d1705d3bb79058eb72e9523c"
  },
  {
    "url": "img/screenshots/cooksurfing/requesting.mp4",
    "revision": "1c278947b715055fa5bf8f20b24e969e"
  },
  {
    "url": "img/screenshots/cooksurfing/requesting.webm",
    "revision": "6980cbaaeb1180d689966895a2e9206c"
  },
  {
    "url": "img/screenshots/cooksurfing/searchResults.png",
    "revision": "ec2e5441d1548cda5827006e2668a5c5"
  },
  {
    "url": "img/screenshots/cooksurfing/searchResults.webp",
    "revision": "70e90a4bc425a8b5e1e121dced483406"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_correct.png",
    "revision": "3436fab8eefd623083ec91a53b28c7cc"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_correct.webp",
    "revision": "91cb6b24dbe124a3bae458009a1a397b"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_demo.gif",
    "revision": "8b9a07e311cdb9a61d1a7c57223f401c"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_demo.mp4",
    "revision": "7b35c0a66e500318cfecd728159e2d76"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_demo.webm",
    "revision": "fa8cfe71722dd438e1874fb2be2ae46f"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_results.png",
    "revision": "90fb48011da4737d51f18f65e764ac9e"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_results.webp",
    "revision": "3d1bcba861267eefe7994b97455f333f"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_wrong.png",
    "revision": "467c0b5622bc87a3a9e1648fd266725a"
  },
  {
    "url": "img/screenshots/french-bot/french_bot_wrong.webp",
    "revision": "1e737e4f41573b0bb1e0919c252e9fbf"
  },
  {
    "url": "img/screenshots/french-bot/french_bot.png",
    "revision": "6a0025a185c66e15ba05c2f28eb63579"
  },
  {
    "url": "img/screenshots/french-bot/french_bot.webp",
    "revision": "6fb5f971d65c9e2b0100c41b17388e9e"
  },
  {
    "url": "img/screenshots/french-bot/yandex_logo.png",
    "revision": "6d7007467b9cfa5a11c5185f5138e229"
  },
  {
    "url": "img/screenshots/french-bot/yandex_logo.webp",
    "revision": "54756091342e6e70238646e8c9ad85a1"
  },
  {
    "url": "img/screenshots/node-chat-app/chat_2.png",
    "revision": "ec5202158b0c354ac9ab737758d46ee6"
  },
  {
    "url": "img/screenshots/node-chat-app/chat_2.webp",
    "revision": "94ae88a5fcc6dcee4e84d4cd22379fde"
  },
  {
    "url": "img/screenshots/node-chat-app/chat.png",
    "revision": "6b5d0c22a92228572d9acc7a196065f5"
  },
  {
    "url": "img/screenshots/node-chat-app/chat.webp",
    "revision": "d328cfa4a9ead5f00db2618a2cf6589f"
  },
  {
    "url": "img/screenshots/node-chat-app/web-app-chat.mp4",
    "revision": "24b2f91cede86ca92dd494538ee0d35e"
  },
  {
    "url": "img/screenshots/node-chat-app/web-app-chat.webm",
    "revision": "556ab0a0468429d3eaea4d715a109ee7"
  },
  {
    "url": "img/screenshots/node-chat-app/webapp.png",
    "revision": "0a49248c4c5d4a113cc52c98616dfcff"
  },
  {
    "url": "img/screenshots/node-chat-app/webapp.webp",
    "revision": "1327bcd4466e5637501595938ed327b5"
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
    "url": "projects-data.json",
    "revision": "9d575ae76f89c04150560766b711a596"
  },
  {
    "url": "manifest.json",
    "revision": "8911375d9c07d7518628535364b2a092"
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
        /\.{png,svg,webp}$/,
        new workbox.strategies.StaleWhileRevalidate()
    );
}