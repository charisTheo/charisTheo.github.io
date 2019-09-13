/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "649bec9101046fe8d11183fdde7a271e"
  },
  {
    "url": "blog-posts.data.json",
    "revision": "403043be541c3769872107f7ca273038"
  },
  {
    "url": "favicon.ico",
    "revision": "e1f3026e97a4c78def06b099cdf0d61e"
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
    "url": "img/screenshots/animath/limits.png",
    "revision": "f314074c060f820cd3a91da7684b822f"
  },
  {
    "url": "img/screenshots/animath/limits.webp",
    "revision": "a85ba4ed240392f2ad7f81f50fbcb785"
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
    "url": "index-src.html",
    "revision": "f1a386c89749d533b359307776deb8e9"
  },
  {
    "url": "index.html",
    "revision": "9590664c2e366656ec9c547bf8726564"
  },
  {
    "url": "js/accelerometer.notused.js",
    "revision": "5f7f331d6540489c6028f968ce7f924d"
  },
  {
    "url": "js/app.js",
    "revision": "9613d3bedc101fbde56c3ecf753df2e8"
  },
  {
    "url": "js/bundle/angular-bundle.min.js",
    "revision": "2d5abd18c827a42497f83276ce6621b8"
  },
  {
    "url": "js/bundle/bundle.min.js",
    "revision": "6fd4cedb55a9ec3c3b984217c8269b6c"
  },
  {
    "url": "js/bundle/portfolio-bundle.min.js",
    "revision": "896321ab6b98d86015c6a5c25f8a2092"
  },
  {
    "url": "js/components/portfolio.ctr.js",
    "revision": "005e209589a73521f64935dcdc283474"
  },
  {
    "url": "js/components/share-listener.fac.js",
    "revision": "3bafa71218b31c26cfff3a8633405336"
  },
  {
    "url": "js/jquery.xeyes-2.0.min.js",
    "revision": "d3c6899617ad69aeb87eee7f33cc38d9"
  },
  {
    "url": "manifest.json",
    "revision": "8911375d9c07d7518628535364b2a092"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8911375d9c07d7518628535364b2a092"
  },
  {
    "url": "package-lock.json",
    "revision": "65d89ddc7b7f494acb67a1d454f26bde"
  },
  {
    "url": "package.json",
    "revision": "ca9850ebb76708efd7bf624ac3510066"
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
    "revision": "95bc5a373826b76caee5c2e7f9958923"
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
    "url": "partials/frameworksImages.html",
    "revision": "c2985ab1508dae193f063c068b6338c6"
  },
  {
    "url": "partials/imagePicker.html",
    "revision": "fbfeb48b595a822bb1fd002f358317ee"
  },
  {
    "url": "partials/page-loader.css",
    "revision": "cfeb8d9f99f88c5d9e8a20da694bee98"
  },
  {
    "url": "partials/sidenavList.html",
    "revision": "41c8f1a76fc9b5ee460ee2cd1dd550b6"
  },
  {
    "url": "partials/socialLinks.html",
    "revision": "142b46c28390095f090660897a790209"
  },
  {
    "url": "partials/svgLogo.html",
    "revision": "dd69b1c1454d54cdaf29db5ea30a25b8"
  },
  {
    "url": "projects-data.json",
    "revision": "9d575ae76f89c04150560766b711a596"
  },
  {
    "url": "styles/compressed/dark-mode.min.css",
    "revision": "bdd805059e459622a73d89220c3c4a2b"
  },
  {
    "url": "styles/compressed/styles.min.css",
    "revision": "abd2eb517dc0c727f8261f59612ec6ce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
