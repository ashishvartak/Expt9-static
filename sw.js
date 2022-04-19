const staticCacheName = 'site-static';
const assets = [
  '/payment.html',
  '/contact-form.html',
  '/ecommerce.html',
  '/ecommerce-price-men.html',
  '/for-each-image.html',
  '/logged_in_about_us.html',
  '/logged_in_all_top_container.html',
  '/logged_in_for-each-image.html',
  '/Logged_in_product_page.html',
  '/login-ecommerce.html',
  '/login-form.html',
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});