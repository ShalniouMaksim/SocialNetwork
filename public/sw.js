const CACHE = 'cache-and-update';

async function precache() {
  const cache = await caches
    .open(CACHE);
  return await cache.addAll(['../src', './asset']);
}
async function fromCache(request) {
  const cache = await caches
    .open(CACHE);
  const matching = await cache.match(request);
  return matching || fetch(request);
}
async function update(request) {
  const cache = await caches
    .open(CACHE);
  const response = await fetch(request);
  return await cache.put(request, response);
}

this.addEventListener('install', (evt) => {
  evt.waitUntil(precache());
});

this.addEventListener('fetch', (evt) => {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});
