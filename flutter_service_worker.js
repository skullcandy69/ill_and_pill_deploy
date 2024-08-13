'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "db2d2fbc47eb9091d2499fdbd3eb5886",
".git/config": "e3b17275df0de7115bc16adc8d6d0d07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f595c544d8198c57ca787fd0f7555619",
".git/HEAD": "36d2e6bfefea098ed28d3260f6fd2002",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9661a983d1e156c09d42c33359818ae2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e840370f0583ad1a32ca5b414c5e46f6",
".git/logs/refs/heads/deploy": "191dd3622a395af239bcfdf43e6c8ba9",
".git/logs/refs/remotes/origin/deploy": "7b81544f997fc3e555dd17bc94601b35",
".git/logs/refs/remotes/origin/main": "bb7bc4c9e7e6e13ac73f9d05d4c86129",
".git/objects/00/48f0c9ea3902727205402852666c4b3bbe4c8d": "4f392cb16520890b3a959cdf8eaca790",
".git/objects/01/8affe2eb106f886860c051d50a39f290fc2411": "3e4df4f278adaf0e687d46e8d3fe6940",
".git/objects/03/a0f0c0c7758e852f99de5775d6e24b84cc343f": "884e6a92dce48c0dfe599ff6d0a39738",
".git/objects/03/b5b1a942755e53121c53ac71e4565b0c742a8f": "b9e15a0749341013e3c392b4d7b48170",
".git/objects/0d/82ababbda08f9b06d9d93c7ad2a316f984b74f": "832c72ee2874563088812b5e64893116",
".git/objects/14/00693bd22d3dcfe266b602fbe226e7bd9e9f3a": "793c4cdbe1758ca8dc96c72e9cfbba3e",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/f77c1c15ff185502d5a1f088451eaa20a2cb2a": "47215ea498665b43a7c276293e3537f7",
".git/objects/1a/cfa552f2ce3c01612fe7860e025b069fd6f318": "d9f6d45aba6fe04b1018dd4fc73add05",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/094cd52d2255ea2647f4cd5a276d74e00d34e9": "5793d1dc5ffd13e20c35e16b023be746",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/107d61cf21e1a988de8fc1463ad0de709c9b0c": "83b8acd67404acd4dd82019027727e6a",
".git/objects/25/4a4f2fcc02c448451ed6bf51a1506633905b77": "8cc9e327573222cf945f4f958eb977b0",
".git/objects/26/fe5186b0b0d08541be54fe5d6baae3f1ee3028": "848b7feeb257cc7ebfc0aceacc2fb771",
".git/objects/2b/d6a5d9603e674934a564507013e1c98ecd2731": "346a20180b81d9d1bfe3a46ebee094a2",
".git/objects/32/54ec08ddfa8821d7a21eb2657f9a665a0ebffb": "06262bdeb7d549b58c939732920f11fc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/c06d7bd8879ce25c8a60fea995ea9a3c09a468": "04946450eefaa0a5333e83278dedc87d",
".git/objects/35/cb8edfb53a57a7672c461139e6f1ff5503b536": "31731ef6f9aed8141e0f852df7d1d97c",
".git/objects/35/f92a3d05f804176273e87364b7c926080c4263": "088ae899cdf4464020d567d9cd7b1f12",
".git/objects/39/5f1730961a083fe9c5c4e21050924a270ba00f": "d592c6dab31d7ae0f3892501722a65d5",
".git/objects/39/da8d18d2c0d847701c86dc1c639899bd6fecde": "cac13dee05ceab903f2a1dba7a0d6530",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/91597a724a241c567532bd42969d347bd6de70": "1dd3c32cf379c9954cf2e0ba8b20d7cd",
".git/objects/42/a877bdca926c36046edebe2541d12c34b16235": "9c2d1e3d6a9c4a2e12f7ea91155d8283",
".git/objects/4a/f057e8fa7317d279a52b5800a05c38b241c861": "e4e801443488f85d525eb7ff3838fd0b",
".git/objects/54/13434af51ca9030994546c1bc61cdc772141c2": "1d81224062bc9ca9554a6ccb756944b7",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5b/8f1eacfaffc25017f484207d4241b32a8fe763": "b38a78bdb04289487cefa3f586ad11f5",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/d5a718642dfb50acb6b7e77388cd071dcb2e7a": "fc72b579cc8594213617d3772d3ddd15",
".git/objects/5e/4b265b750c9c6d91482fbd3e95da1b7c19c999": "b67247fca4889c2375d30125ebe2f969",
".git/objects/61/1431b5a10a632bc5211d447f3f3db4d02b1107": "01ddbee3bd9380df7145bccfa11f3ab1",
".git/objects/68/44623b18e9e10b3fdc69d8bb8d26ae58ee3716": "e5446f2583027ea689f3281a0fdeeb6d",
".git/objects/68/74d472861c3dbf9feecc37f31c85e1f7850008": "16032ec8d3495d4a7663d148b6cce710",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/0641c2a124742656253dafddf49053fd806eb7": "9550b6e3b5934e885d9c2fcd1f9584e2",
".git/objects/74/5eeea344dc70dc03abdbe905766b39f5986ff4": "09d50480aa8673faaf41a614d891d32b",
".git/objects/77/fa38abb852ffe0567a199cc9b1f6fcc49284d8": "43ac994459985606497e7a72f198d4ee",
".git/objects/7e/b40fbf8fba0975f46710ccd5b3b19b7165441f": "74d0421c4989f7765fa3a1a47f81da77",
".git/objects/80/970f974e0f2f75df83983518ad4cbebcf36314": "9c0603e897f149ca465c6bfad0ebea48",
".git/objects/81/0507dad35b16cc07577c65478221ed01922dd7": "fb5a37a307d52da8c0a05b01a4eb6d50",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/6e2a7dd413d481b43912fe8771d214d1edba68": "d5479b3578b1642bc608c590f2676449",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/56d3d52e3fc8a4b0c5f6c58aed45dcccb5715b": "90f709134c246cc86b72d09d0fc2fac9",
".git/objects/a1/cb50b54961f3267c5ac5309ccd6bfc30eaac37": "62d99b45a5086cfcc19819ecfc09e9ca",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/b489bdcf38f254127e3c2c7b3eefe6c12c1ba2": "01d6114c36960323b9af0ce4d2381aa3",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a8/187216bd03a221b001ac4f3a4fbf33aae18d3a": "cd13dc09b2df4e97f4b47adc6299ba67",
".git/objects/ab/174d9c5034ad45084755d1dcdd5e29766f0d63": "1ac95e2bd407ecc2c0dd25c36ed02e05",
".git/objects/ab/f3d357b485ddd649e2c977b31b471b60186b74": "1fe0476522057a6c1c7217433803987f",
".git/objects/b1/ed3d2b18035b18a8a655fe0e1c37efd2ea6cf0": "0375e7d35a289b4a952a50653b05d4c1",
".git/objects/b2/45ebe7b951440556d06bb457222f0ffdab92ff": "fdeac02e1c094b9e60ebc0e8799e9537",
".git/objects/b4/40c60ad46fa99f4d5b8cdf34f9751717c5622a": "26a4ad38c319812ff5febf245c48d384",
".git/objects/b4/7ed638cd3735eef9cc011c6d7abdc3d8ef9e92": "0e6ee5a3fed929f8ec65488dd7fc2f26",
".git/objects/b5/b4dd55fa4fd3eb360c66138d8abf3b68c9ee2b": "9548bcaf53048e7c5045032dc6a420ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bc03b5813b0ac86ccacfa997f3d0eb6a7d850c": "ccf383e19e59a01446721d07bd2c9a0a",
".git/objects/d6/40de423d549d0f0068e75504669eecd03fb680": "faba80dd186b2bf33a3132b5b05f01fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c5e61f79219776b935f29d28b7f566d5ddab13": "d3571d934e8170d47277531f91be8e8c",
".git/objects/d7/54db1c9b3d9f425b0c2795a2cc93abde64d18e": "6c02504028fbba357cc8ea5f26cef910",
".git/objects/d7/8a0e2f703aba60544cb051739f20960a6febf7": "a4353b06d75afbf5082fbb39eb820b97",
".git/objects/dd/54032f5109b3e9fa8736e2c703ac0a2ef0bfdf": "614216f805a4391632193c61bd4786cb",
".git/objects/de/6c002e401c15e1866d34b6a2faab51a176e725": "b95298d5a66deaee407878725a33053a",
".git/objects/e1/011ec55bfa1c472af901f36fd0fb11fb446105": "48c1e6d85233204f885e10947fc6dc63",
".git/objects/e3/9de6810f0008c3cf6df97d5cfd3261dd4cf080": "4916486793a5aa08069534fb3cc269de",
".git/objects/e4/21231a82bba1d0a689859e55a0dd15612941a8": "28a4840aaa929f7b3d310381e28659c7",
".git/objects/e5/3b227b632992ba1fd9e02ba482610136c7a143": "d50401f8ec55abedd09e863fd4186937",
".git/objects/e5/b089f7d2dcdf3b8f45b4e9700f7d3e8bad3796": "e076b24e02054834ef25763791dd11c6",
".git/objects/e9/7a29db98373a3b2e1c32f65773e904635447df": "598c2492c2dc6e018fb74510e2ef1355",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1ed13cb9ee2b555576ef3647cde30a946d7f53": "81ec15e08a7c5c5f834bf9817057583b",
".git/objects/f1/86961176e97272bfdbc490135c9b9abefe61b6": "4c870f4440a49f30ead6a68cb4813e0c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fe/949e8027715561e79740daea42a14e574bbaa0": "a8896cb2c99034b229f303600096c423",
".git/refs/heads/deploy": "f0b80dbc6754a6ef1dfcc438c9e0dd47",
".git/refs/remotes/origin/deploy": "f0b80dbc6754a6ef1dfcc438c9e0dd47",
".git/refs/remotes/origin/main": "0c01764bbb00e99a65fb56d1c832c540",
"assets/AssetManifest.bin": "4080885ee13e81c44b22d9d9664099e2",
"assets/AssetManifest.bin.json": "eea9480d90edee0e19e5a0f4e090f7fc",
"assets/AssetManifest.json": "73d3da22795609f421e9ac2071013f40",
"assets/assets/background.jpg": "5aeac1fc1d592da27463e4018b711713",
"assets/assets/logo.jpeg": "147d2e2730a3a116180c84ca338d3dac",
"assets/assets/poster.jpg": "1ad4068fd31dead8803c9c2372d71b72",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9994f7d11859355051c37fed238df3e2",
"assets/NOTICES": "296780fbde859d0815e03d6fac85378a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "85111d52a6a0392133a0b9597633740e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "72d7234f38ac8915edd6e36659733f65",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84d096ca1d96b75ee552ec7c7327466e",
"/": "84d096ca1d96b75ee552ec7c7327466e",
"main.dart.js": "204a14f06fc12ae194f06570f54105bb",
"manifest.json": "046537143d045dcbc987b880d48c7bfa",
"version.json": "924ec846cf2bee4fb5069ffe7b1a390c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
