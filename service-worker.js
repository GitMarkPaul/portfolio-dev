// Installing service worker
const CACHE_NAME  = 'Codexus';

/* Add relative URL of all the static content you want to store in
 * cache storage (this will help us use our app offline)*/
let resourcesToCache = [
    "./", 
    "./assets/media/logos/laravel-logo.png",
    "./assets/media/logos/bootstrap-logo.png",
    "./assets/media/logos/html-logo.png",
    "./assets/media/logos/css-logo.png",
    "./assets/media/logos/sass-logo.png",
    "./assets/media/logos/javascript-logo.png",
    "./assets/media/logos/node-logo.png",
    "./assets/media/logos/git-logo.png",
    "./assets/media/logos/vue-logo.png",
    "./assets/media/logos/amazon-web-services-logo.png",
    "./assets/media/logos/wordpress-logo.png",
    "./assets/media/logos/ionic-logo.png",
    "./assets/media/logo-brand.png", 
    "./assets/media/logo-brand.svg",  
    "./assets/media/computer-stat.svg", 
    "./assets/media/banner.svg", 
    "./assets/media/about.svg", 
    "./assets/js/scripts.js", 
    "./assets/css/style.css", 
    "./assets/css/responsive.css"
];

// Install
self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            return cache.addAll(resourcesToCache);
        })
    );
});

// Cache and return requests
self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
});

// Update a service worker
const cacheWhitelist = ['Codexus'];
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
