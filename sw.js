// Imposter: keeps a copy of the game on the device, so it still opens without internet
// (in-person mode then works offline) and can be installed like an app.
// It always asks the network first, so players get the newest version whenever they are online;
// the saved copy is only used when the network does not answer.
const CACHE='imposter-v1';
const LIB='https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const SHELL=['./','game.js','bots.js','manifest.webmanifest','icon-192.png','icon-512.png',LIB];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(SHELL.map(u=>c.add(new Request(u,{cache:'reload'}))))));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),own=u.origin===self.location.origin;
  if(!own&&u.href!==LIB)return;          // everything else (room signalling, calls) is left alone
  const key=own?u.origin+u.pathname:LIB;   // one saved copy per file: an invite link (?room=…) is the same page
  e.respondWith(
    fetch(r).then(res=>{
      if(res&&(res.ok||res.type==='opaque')){const copy=res.clone();caches.open(CACHE).then(c=>c.put(key,copy)).catch(()=>{})}
      return res;
    }).catch(()=>caches.match(key).then(m=>m||(r.mode==='navigate'?caches.match('./'):undefined)).then(m=>m||Response.error()))
  );
});
