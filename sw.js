const CACHE_NAME = "werewolf-v1.5.5";

const FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon.png"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );
});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

    self.addEventListener(
    "message",
    event=>{

        if(
            event.data &&
            event.data.type==="SKIP_WAITING"
        ){

            self.skipWaiting();

        }

    }
);

        })

    );
});
