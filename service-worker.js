if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>n(e,r),a={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"chat-gpt-search"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.30e38d70.css",revision:null},{url:"/favicon/android-chrome-192x192.png",revision:"823aefbe57f8155ced17513135ab5d9a"},{url:"/favicon/android-chrome-512x512.png",revision:"5528b6290fb3de948ea459761db2d896"},{url:"/favicon/apple-touch-icon.png",revision:"2b42e07de691a309274833b51e699588"},{url:"/favicon/browserconfig.xml",revision:"316cbced34b68586d665479137ff0db5"},{url:"/favicon/favicon-16x16.png",revision:"65e2a0e895f372f2be2a9da39b11f413"},{url:"/favicon/favicon-32x32.png",revision:"5dfa8d5baf3975c04baca96f12c157b5"},{url:"/favicon/mstile-150x150.png",revision:"8f8dffec2939bb4b4ff32e21c8c92c4f"},{url:"/favicon/safari-pinned-tab.svg",revision:"41552c763873d199dee76d6c1885b6a3"},{url:"/favicon/site.webmanifest",revision:"05605b415961001a6a5970ca7f49d1d7"},{url:"/img/logo.1bf7932d.webp",revision:null},{url:"/index.html",revision:"ba1d7cfc8cea755feac1c527caeede83"},{url:"/js/app.c73c516a.js",revision:null},{url:"/js/chunk-vendors.f5051bed.js",revision:null},{url:"/manifest.json",revision:"26891c4f643c4f62d08036f95c5f479a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map