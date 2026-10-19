/* Offline support. The build script fills in the cache name and the file list. */
const CACHE = 'dwiti-tracker-60df5832461d';
const PRECACHE = ["/dwiti-tracker/","/dwiti-tracker/_expo/static/js/web/[date]-e1481afb163ba5a557d3b8d3fe2ff216.js","/dwiti-tracker/_expo/static/js/web/[id]-7acef097c96c19ebeffaa1f313584954.js","/dwiti-tracker/_expo/static/js/web/[id]-84ca6c32fe5403ed0837edf9fe13f53b.js","/dwiti-tracker/_expo/static/js/web/[id]-b0b524caf470832ee1172e0f9d517fd3.js","/dwiti-tracker/_expo/static/js/web/[key]-f1b438121d79e36e3590ffe361d7a318.js","/dwiti-tracker/_expo/static/js/web/__common-2d3b92cf9a49be87628052b87dc7d83f.js","/dwiti-tracker/_expo/static/js/web/__expo-metro-runtime-8c088df87a31e4e6accd81c554ec290d.js","/dwiti-tracker/_expo/static/js/web/_layout-06e10fafb94dbe8f961a2f1dfaa80925.js","/dwiti-tracker/_expo/static/js/web/_layout-d69f735da702555f4431098ce6019aaf.js","/dwiti-tracker/_expo/static/js/web/about-c143a7a0b5b1e3da613e50d12af2daf6.js","/dwiti-tracker/_expo/static/js/web/body-76b6257501b31ee7b7e34d31a15db6c1.js","/dwiti-tracker/_expo/static/js/web/calendar-6f223d899e70d510e2845f73fd6d52f1.js","/dwiti-tracker/_expo/static/js/web/check-in-8e3c372382ac0f403956941e7661e255.js","/dwiti-tracker/_expo/static/js/web/cycle-622174c1d32baf6304f1258252699c76.js","/dwiti-tracker/_expo/static/js/web/edit-2994fdc3cde158c0ee1eeab4ad4ad0e0.js","/dwiti-tracker/_expo/static/js/web/edit-8f53968ad54845d08107435e8f5a8406.js","/dwiti-tracker/_expo/static/js/web/edit-c634d912a2ce2d9556087f352910a084.js","/dwiti-tracker/_expo/static/js/web/edit-e420f980c17d32c84d2cbe2998e289a9.js","/dwiti-tracker/_expo/static/js/web/edit-e50c760be116eef751bc2d2eee828feb.js","/dwiti-tracker/_expo/static/js/web/entry-b817bb9679c99074d3fd7de7246f5a00.js","/dwiti-tracker/_expo/static/js/web/fitness-f14dd80b7341d58fb17f2b3dc4e37da6.js","/dwiti-tracker/_expo/static/js/web/hydration-b2c992140bfb99317f6e4aeaa1e7af42.js","/dwiti-tracker/_expo/static/js/web/index-485c072aa7eb3b640fa3a56174074085.js","/dwiti-tracker/_expo/static/js/web/index-63d273dd406c52507289a8d6b8df8eac.js","/dwiti-tracker/_expo/static/js/web/index-dde6e3420147df87b113af9cc082c90e.js","/dwiti-tracker/_expo/static/js/web/more-2fbf382a4213ab0f233ed1c9fa103267.js","/dwiti-tracker/_expo/static/js/web/pin-f97f14e038fa4a6e53adbf5c25ea79ff.js","/dwiti-tracker/_expo/static/js/web/records-34eeb5d7bc8f940372a1957530918110.js","/dwiti-tracker/_expo/static/js/web/session-6f1246033a7767c1f9b1f55ace2086ed.js","/dwiti-tracker/_expo/static/js/web/settings-d8f55bfe1fb71a553dc50f8d7993adfa.js","/dwiti-tracker/_expo/static/js/web/summary-44eacbeb206b13961135a7cf449a0e1f.js","/dwiti-tracker/_expo/static/js/web/summaryPdf-a34f86472e35a727ccc1380784a9b18d.js","/dwiti-tracker/_expo/static/js/web/timer-e2eaaa21ee74bac931a60cce0c35c9ac.js","/dwiti-tracker/_expo/static/js/web/trends-f80bd0fa395d4f6faed86526127870ee.js","/dwiti-tracker/_expo/static/js/web/upload-e6c3590b73e646da05c1ff068d81d109.js","/dwiti-tracker/assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.b4eb097d35f44ed943676fd56f6bdc51.ttf","/dwiti-tracker/assets/node_modules/@expo-google-fonts/nunito/400Regular/Nunito_400Regular.f04f0e9ff969fd52a75deade3a9761cd.ttf","/dwiti-tracker/assets/node_modules/@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.b1364260246b29fd9393a1a071f3af61.ttf","/dwiti-tracker/assets/node_modules/@expo-google-fonts/nunito/700Bold/Nunito_700Bold.c133c0b8cd169e7798d0cd239477cf32.ttf","/dwiti-tracker/assets/node_modules/@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.2b1bb82750274fc2d1043bf3891cb531.ttf","/dwiti-tracker/assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","/dwiti-tracker/assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","/dwiti-tracker/assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","/dwiti-tracker/assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","/dwiti-tracker/assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","/dwiti-tracker/assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","/dwiti-tracker/assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","/dwiti-tracker/assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","/dwiti-tracker/favicon.ico","/dwiti-tracker/icons/apple-touch-icon.png","/dwiti-tracker/icons/favicon-32.png","/dwiti-tracker/icons/icon-192.png","/dwiti-tracker/icons/icon-512.png","/dwiti-tracker/icons/maskable-512.png","/dwiti-tracker/manifest.webmanifest","/dwiti-tracker/register-sw.js"];
const BASE = '/dwiti-tracker';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('dwiti-tracker-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Pages: try the network for the newest version, fall back to the saved app shell offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Only keep a real copy of the app page, never an error page or a redirect.
          if (res.ok && res.type === 'basic' && !res.redirected) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(BASE + '/index.html', copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(BASE + '/index.html').then((r) => r || caches.match(BASE + '/'))),
    );
    return;
  }

  // Everything else (scripts, fonts, icons) is versioned, so the saved copy is always right.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
