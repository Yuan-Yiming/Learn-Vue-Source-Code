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
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/css/0.styles.ac38ef36.css",
    "revision": "1eea02272af45f92fd398fbeae0ecfdb"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.0df3f8fe.png",
    "revision": "0df3f8fecd431d60febdfcc0362e9164"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.7057e50b.jpg",
    "revision": "7057e50be513bd8884f06739e688d169"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.77ed97b2.js",
    "revision": "c80336a4d9f82d79a6024e1c4de63977"
  },
  {
    "url": "assets/js/11.f3afaecf.js",
    "revision": "c637eccfb43e29bb187d7625bc596aae"
  },
  {
    "url": "assets/js/12.9ce526a0.js",
    "revision": "a2b93e380d9aa97a99280408b13bbf6f"
  },
  {
    "url": "assets/js/13.9918e1ac.js",
    "revision": "d53a84cb5f7c917c4dd6843241a64b61"
  },
  {
    "url": "assets/js/14.f9cf9389.js",
    "revision": "d22deda89861554e428fee433b616e36"
  },
  {
    "url": "assets/js/15.121b7a32.js",
    "revision": "5d9beeb5f7d1a0969ac6229062414c29"
  },
  {
    "url": "assets/js/16.c2bc7c7d.js",
    "revision": "1f5c1e329beb7e94fcccd363de2e4365"
  },
  {
    "url": "assets/js/17.d3718596.js",
    "revision": "ef4b0c0dccec0cd9d8e93ceaf7295634"
  },
  {
    "url": "assets/js/18.183075d9.js",
    "revision": "f758a2ac242f5bc90fec30d602ea118c"
  },
  {
    "url": "assets/js/19.d538a746.js",
    "revision": "f6082d8234423781fe7a5f42f73c26e5"
  },
  {
    "url": "assets/js/2.b3cc33ef.js",
    "revision": "8b9c6a4852a6177b45be62d6fd5a189c"
  },
  {
    "url": "assets/js/20.5cafcaa7.js",
    "revision": "609bd0f9156be2f6b70cee993e0b915c"
  },
  {
    "url": "assets/js/21.1846b264.js",
    "revision": "09f403262deb24f0739ac9749f8ce4bb"
  },
  {
    "url": "assets/js/22.b308d60c.js",
    "revision": "650c3736eaef62726118e037aab31713"
  },
  {
    "url": "assets/js/23.a75d2444.js",
    "revision": "4e753a885cbcb4a352ef39bb87252c3a"
  },
  {
    "url": "assets/js/24.19f0af5a.js",
    "revision": "e4b98b7b8aab49527fcd719ecc5153f1"
  },
  {
    "url": "assets/js/25.04c22a8f.js",
    "revision": "e6b64d61c01771836b0bba3b9b0ea28d"
  },
  {
    "url": "assets/js/26.4441b4ef.js",
    "revision": "de19d05e455dcdd50a6bf0685b70ac2a"
  },
  {
    "url": "assets/js/27.e09d7ab1.js",
    "revision": "27150a12dbeb2a4ef14bd5a42d31a72c"
  },
  {
    "url": "assets/js/28.c7820508.js",
    "revision": "fd3052a385cc8ffe4aaae0f51afe4423"
  },
  {
    "url": "assets/js/29.42b11f38.js",
    "revision": "26e7b57e02b135d7e28f530e328511a2"
  },
  {
    "url": "assets/js/3.6765b479.js",
    "revision": "657b7e53ad4df6bcffcba9e64e8c61df"
  },
  {
    "url": "assets/js/30.15182c49.js",
    "revision": "fed5667570f5e886104a255c61e5e5fc"
  },
  {
    "url": "assets/js/31.5139ec3c.js",
    "revision": "87e67696595cdab9aaea17cf70721cb3"
  },
  {
    "url": "assets/js/32.b4998e70.js",
    "revision": "e12600015f7f91807ca432637e149ffe"
  },
  {
    "url": "assets/js/33.b6e84814.js",
    "revision": "79affa4ab6f8f0e447e2910d054a01f0"
  },
  {
    "url": "assets/js/34.3424fcaa.js",
    "revision": "9706bb27694af1d6fa88514f9f9a3bf3"
  },
  {
    "url": "assets/js/35.8dafdf83.js",
    "revision": "c8beb047113cab7a24d3a967560dc82d"
  },
  {
    "url": "assets/js/36.e8c8a949.js",
    "revision": "a3e8a37723ce98eebb2ba3144550d00b"
  },
  {
    "url": "assets/js/37.6a2c43d5.js",
    "revision": "d6cb12913e65323d2c6ac2bcf5b2a99e"
  },
  {
    "url": "assets/js/38.313ea197.js",
    "revision": "761c96b48e304fd2b81729bd7ea99f42"
  },
  {
    "url": "assets/js/39.19ce9989.js",
    "revision": "52a597d8ba2876d003a28ca3b9fcbc7a"
  },
  {
    "url": "assets/js/4.200b3ead.js",
    "revision": "aacb899a56932852a7f4439b2924c48f"
  },
  {
    "url": "assets/js/40.4e81dd6f.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/41.7e776a9e.js",
    "revision": "9729a083fe5235702c11138a46c203af"
  },
  {
    "url": "assets/js/5.3e0bec2f.js",
    "revision": "15f7af8d69e1a3753a5404dbeecc8ef3"
  },
  {
    "url": "assets/js/6.cb899c59.js",
    "revision": "2b6559af961c88c1a2536ea777fdab16"
  },
  {
    "url": "assets/js/7.ff6e1dab.js",
    "revision": "65c39e6fe74b170fc65bba3f2e89f3db"
  },
  {
    "url": "assets/js/8.e10df70e.js",
    "revision": "66fa91e2aa74c4f196f840382595a7b9"
  },
  {
    "url": "assets/js/9.ec7d9f7b.js",
    "revision": "41ef5c839d4dde8a6712ff43bf928647"
  },
  {
    "url": "assets/js/app.1baeca8e.js",
    "revision": "b08c51f6e59dfa9fa105997850f14b87"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "0df3f8fecd431d60febdfcc0362e9164"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/start/wechat.jpg",
    "revision": "7057e50be513bd8884f06739e688d169"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "ec91c124acd782f527d3e8d79142e7e5"
  },
  {
    "url": "complie/codegen.html",
    "revision": "2ab2e7c2e78b8efdbb193c3d6ad5481a"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "ff972ecb0e8deef6156433c47851b673"
  },
  {
    "url": "complie/index.html",
    "revision": "114d6fc3c358a55a6b74103d0a634ba8"
  },
  {
    "url": "complie/optimize.html",
    "revision": "7619d0dbc737cc3125077d45044ea3f0"
  },
  {
    "url": "complie/parse.html",
    "revision": "87deacad3603aad82c29b9252ae581a8"
  },
  {
    "url": "complie/summary.html",
    "revision": "3c5db9aafb086d48fcb154238992da38"
  },
  {
    "url": "complie/textParse.html",
    "revision": "f5475db646d5065cfbd6b6ee658f1463"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "8767a218dd14e264dbd395da8300b6e6"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "9f7ddc7be81b14620c3ccb5ce59a4d64"
  },
  {
    "url": "filter/index.html",
    "revision": "4f0c2e02f85ebdcfc86dfc29d7dccb51"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "b18fba7cd91a251347d5c1abb959e817"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "4505b1effa97e14099f633fe63c9f130"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "3f9d3aa4e50766248930f99ac70a897a"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "fd1a5f39de6d01ea6592d27e719b3603"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "6b6bbc07ee66b6631150ddd903815ac6"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "c51689c06c8ce62c5d291269898acdc7"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "7f8d1eba0353a1c6e00f7cc9997d8635"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "730a9b7a1853ffe7b99218baaa902aa1"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "d825f4aa8297b00d97a9f8cdb904fbf5"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "f1d882035a9dcc4036e8eac17cc32cc4"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "564fcafdbccc382eac0bcd6459367db7"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "9ce4de5eba05ef8acc6703d1ac89b64b"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "7e5443060628d9b4ac54a32a0b3b22de"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "28eea8561a3cd261bb0bf8c4a97fdc65"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "73852412c2b8adc6430e877556926368"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "91dd5b3f9c00f9fd6a47dd24d72a1035"
  },
  {
    "url": "reactive/index.html",
    "revision": "beceb64a9e9e1c6d03c5dba3773f4d3b"
  },
  {
    "url": "reactive/object.html",
    "revision": "640f29b640392a386eb76ee2ba6834cd"
  },
  {
    "url": "start/index.html",
    "revision": "d19ad0f123fdb33ebb7253bc13655009"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "23780c6eac5595a814bf8683414bc849"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "ab0093ccf485e9530a6cb34477475af4"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "a8039414853b4bd0556e08c224fcc8d2"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "7c138b6aa942189476372f37e275f0a8"
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
