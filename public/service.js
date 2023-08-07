debugger
self.addEventListener('install', (event) => {
    debugegr
    event.waitUntil(
      caches.open('my-cache-name').then((cache) => {
        return cache.addAll([
          '/path/to/resource1',
          '/path/to/resource2',
          // 添加其他需要缓存的资源
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    debugger
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  