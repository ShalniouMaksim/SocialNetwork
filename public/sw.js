const CACHE = 'cache-and-update';

function precache() {
  return caches
    .open(CACHE)
    .then((cache) => cache.addAll(['./controlled.html', './asset']));
}
function fromCache(request) {
  return caches
    .open(CACHE)
    .then((cache) => cache
      .match(request)
      .then((matching) => matching || Promise.reject('no-match')));
}
function update(request) {
  return caches
    .open(CACHE)
    .then((cache) => fetch(request).then((response) => cache.put(request, response)));
}

this.addEventListener('install', (evt) => {
  console.log('The service worker is being installed.');
  evt.waitUntil(precache());
});

this.addEventListener('fetch', (evt) => {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});
