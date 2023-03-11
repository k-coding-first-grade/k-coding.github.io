'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7c46a4f2807253738a8400603722e671",
"assets/assets/font/IBMPlexSansKR-Regular.ttf": "bfda7e75d2d1185083f21c8ca014d0a1",
"assets/assets/font/SeoulNamsanL.ttf": "1abe4387a825e7bf129f8d06680aa098",
"assets/assets/page-1/images/-sKq.png": "1e30655be5c3c558013399bdcb7e502a",
"assets/assets/page-1/images/-WNo.png": "560339cad968ff02dd3a4881371573bb",
"assets/assets/page-1/images/background-1-bg.png": "8ffab8e09ef293518d3e8308cd8ba8b8",
"assets/assets/page-1/images/crown-icon-free-on-dumielauxepices-net-black-1-kxj.png": "ce7e26732bf3089eb904a92f8302339e",
"assets/assets/page-1/images/crown-icon-free-on-dumielauxepices-net-black-1.png": "ce7e26732bf3089eb904a92f8302339e",
"assets/assets/page-1/images/crown-icon-free-on-dumielauxepices-net-black-2.png": "ce7e26732bf3089eb904a92f8302339e",
"assets/assets/page-1/images/download-on-the-app-store-badge-1.png": "6fc6b9412e271f1cf7a640202f8fab37",
"assets/assets/page-1/images/google-play-badge-1.png": "5ced005a4f24936837005ce07bd70a3a",
"assets/assets/page-1/images/icon-2-o87.png": "be5e37632bdb5289b903b8f62d875196",
"assets/assets/page-1/images/icon-2.png": "be5e37632bdb5289b903b8f62d875196",
"assets/assets/page-1/images/icon-gcc48074b31920-1-6fu.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/icon-gcc48074b31920-1-cLK.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/icon-gcc48074b31920-1-HFh.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/icon-gcc48074b31920-1.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/icon-gcc48074b31920-2.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/icon-gcc48074b31920-3.png": "baba7a7da03b67d2d28f8c152f204365",
"assets/assets/page-1/images/image-11.png": "8d491e2fdca28c34c2c437b3c224e700",
"assets/assets/page-1/images/image-12.png": "c19ae6a533e4332ef7aa9066e0721cd2",
"assets/assets/page-1/images/image-14.png": "c273834b3a44b2fdfebe9fe8d73b663e",
"assets/assets/page-1/images/image-15.png": "aaaffb925944bd0d82652651523628d1",
"assets/assets/page-1/images/image-16.png": "0bc602fbedd6170648c1b7204059df44",
"assets/assets/page-1/images/image-17.png": "17f605a84c8bf163f3cdd0529a03a6de",
"assets/assets/page-1/images/image-19.png": "5aed87ad641fcf52b68699dbfbf97705",
"assets/assets/page-1/images/image-21.png": "c4d9101303f46968df1e1798a3a3151c",
"assets/assets/page-1/images/image-28-f1D.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-28-fmD.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-28-KPZ.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-28-V8w.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-28-YbM.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-28.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-29.png": "50642da11768ce2361f0c5d78f417309",
"assets/assets/page-1/images/image-3.png": "247b72de537cd152b12e45bbe3ac140a",
"assets/assets/page-1/images/image-30.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-31.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-32.png": "d04a93b5a51bd10a30387c5ae1c696bb",
"assets/assets/page-1/images/image-33.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-34-5q5.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-34-Uiw.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-34.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-35-DGw.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-35-TD5.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-35.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-36-ePm.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-36-UPm.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-36.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-37-cpB.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-37-p1R.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-37.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-38-fud.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-38.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-39.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-40-GKu.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-40.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-41-isu.png": "edd0aa2d0b4cc3e9197eb44413e51982",
"assets/assets/page-1/images/image-41-Lsd.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-41.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-42.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-43.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-44-aN7.png": "eac8ffa0e827e5c0c25c8d45d45f3c62",
"assets/assets/page-1/images/image-44-i3u.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-44.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-45-sTH.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-45.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-46-X5u.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-46.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-47-4Fm.png": "165b9f9d2051092934ae4bf99592c8f7",
"assets/assets/page-1/images/image-47.png": "00e4604123dfc3f374695f9e0a4158be",
"assets/assets/page-1/images/image-48-RHD.png": "0de65fd259fc3ea632ec1d33c0aed97d",
"assets/assets/page-1/images/image-48.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-49.png": "fa0f7fe9f8d113f7fdcdc42873d2eac0",
"assets/assets/page-1/images/image-5.png": "e4435c4354790efca002ac51cbef8606",
"assets/assets/page-1/images/image-50.png": "edd0aa2d0b4cc3e9197eb44413e51982",
"assets/assets/page-1/images/image-6.png": "639f60c6c956471d79c2e1ccf3c01813",
"assets/assets/page-1/images/image-7.png": "ba374f11fa00cccef096c63ffd0b4bcc",
"assets/assets/page-1/images/image-8.png": "9d6cb32ac8c6b9b3fe06e11ffe3e761c",
"assets/assets/page-1/images/image-9.png": "9a7fc8bd21a38dbfa37c222b860de3c0",
"assets/assets/page-1/images/img-2-Wfm.png": "75eb94df76fbaacde9eed28559608ec8",
"assets/assets/page-1/images/img-2.png": "75eb94df76fbaacde9eed28559608ec8",
"assets/assets/page-1/images/kcoding-1-fWB.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1-jUP.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1-PG7.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1-y1d.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1-yeK.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-1_add.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-2-asm.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-2-E6o.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-2.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-3.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/kcoding-4.png": "7829408983ad17f3ab7ffda797ff6c81",
"assets/assets/page-1/images/rectangle-5-A4s.png": "e5360e8f71ce7b2141381ed870bc5af1",
"assets/assets/page-1/images/rectangle-5-SfM.png": "edb957fc4c2c86c78a5da29d66e16c19",
"assets/assets/page-1/images/rectangle-5-YD1.png": "edb957fc4c2c86c78a5da29d66e16c19",
"assets/assets/page-1/images/rectangle-5-yWs.png": "edb957fc4c2c86c78a5da29d66e16c19",
"assets/assets/page-1/images/rectangle-5.png": "edb957fc4c2c86c78a5da29d66e16c19",
"assets/assets/page-1/images/school-1-bg-Gnf.png": "8e46c307d5a57f66f68997594b23a8f4",
"assets/assets/page-1/images/school-1-bg-PrB.png": "8e46c307d5a57f66f68997594b23a8f4",
"assets/assets/page-1/images/school-1-bg.png": "8e46c307d5a57f66f68997594b23a8f4",
"assets/assets/page-1/images/school-1-Uhq.png": "8e46c307d5a57f66f68997594b23a8f4",
"assets/assets/page-1/images/school-1.png": "8e46c307d5a57f66f68997594b23a8f4",
"assets/assets/page-1/images/shadow_effect1.png": "0b62c1c02ecf74e914ff2744eee879bd",
"assets/assets/page-1/images/soccer.png": "92b324ddcc62d4ec407c6141395741ab",
"assets/assets/page-1/images/subtle-prism-1-bg-nf5.png": "7bc583d280998671cc812068c46289a0",
"assets/assets/page-1/images/subtle-prism-1-bg.png": "7bc583d280998671cc812068c46289a0",
"assets/assets/page-1/images/subtle-prism-1.png": "7bc583d280998671cc812068c46289a0",
"assets/assets/page-1/images/survey-prgm-logo-1.png": "2778488005eef353e02d2f54f5a7fdd5",
"assets/assets/page-1/images/unknown-1.png": "dc95575d1fa4a2c882f14e2b07d43e18",
"assets/assets/page-1/images/x630wa-removebg-preview-1.png": "b190c9bd68bc631ff3244e7eca4a5a5b",
"assets/FontManifest.json": "111234b6d3c68cc14cde82920b760ef5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "239f01ffa0e084435d28f6463b10ea86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b02e8b650d609af930185ad67c22d0f9",
"/": "b02e8b650d609af930185ad67c22d0f9",
"main.dart.js": "eed0d69e0e5577c8a81713c3af73793f",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
