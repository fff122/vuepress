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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e6a80b823ec35b31ac55d0ae21358e3"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9e6ced87.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6b98eb08.js",
    "revision": "8e0eee022a448151912136003c905799"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.68e9bb4b.js",
    "revision": "67fedde0bd35a92b05060a60f710c736"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.2d033fa6.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.d28361fb.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.451f3528.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.589fe5b6.js",
    "revision": "bedd279b4af8ee9923f579a1bf14ea6d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "0cd23468d72452957772cd01be32d6ea"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e2f63539ad8b924cc0c723a40a9609ed"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3c60123d1278c8b60d7b82ac8f845a1e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b7e1b737cf89bb745781b5add931fee4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "60ff94c74e4cee470e3b4cb97187b67c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "012a545da7e2bcb335ee80db60658724"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "9ea68948c18c0df9e5b1b301b0fd0da9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "dc30e3c4a6ba7f1a00e78e3736f4e59e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a60fc2dbda04da79bcb8a3d5c46d8a59"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5a08bb804045b4c7cbb82f005664f36f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "051195e1412a5fd92e8dd8b5e2c53310"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8c0c61ab6b8d91b0588c0b50ccb55067"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1b881dd3379cb0c4ab3648997843ada8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4696f027528ff6181c4b2bd8cb3e4dd0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3af07d9480b9c2db1618ee8aee87fd91"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "17c2c5691928e89a88c032042d85a464"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9ff9cbf6f2499755138b4b81d2bae047"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ed0ae5f4c41baa0f611e49e9d983d960"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b78864a2d91612734ad847946afdb68"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f7a8498e374d565e452874bebea47e1e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f05f285cbb15437ccde7d745f5dfc622"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "04bb2fdec3d031dc6c2e1381fbd42ab7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2e6b8b334de9b6f44aa97c3654598e92"
  },
  {
    "url": "生活分享/life.html",
    "revision": "937510fb50433af6c1912cb887fdc12e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
