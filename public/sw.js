if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>i(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/329-75db919117ff6f24.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/454.7ac65031b194b6ec.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/75fc9c18-c2ffd8d428a8879e.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/767.6f7738bab09dcaf6.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/main-b82de7430d8403b8.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/pages/%5Bslug%5D-8ef24eaf854f5fc6.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/pages/_app-5a41bc8b90b1729f.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/pages/index-6cd9ac98bb39a6ac.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/chunks/webpack-5e4b7fba733e7b65.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/css/3e685a4ea9fc6aef.css",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/uiU3kyqoSiAszMA4OjAGl/_buildManifest.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/uiU3kyqoSiAszMA4OjAGl/_middlewareManifest.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/_next/static/uiU3kyqoSiAszMA4OjAGl/_ssgManifest.js",revision:"uiU3kyqoSiAszMA4OjAGl"},{url:"/favicon.ico",revision:"4f1d35983f6dacd7d570c72dfdc9550b"},{url:"/icon-192x192.png",revision:"aaaadcedbbdf76096cd6ddcf5a491b54"},{url:"/icon-256x256.png",revision:"7dbdbed549fa3b59850bcac4f0a1b613"},{url:"/icon-384x384.png",revision:"66c7259c4e0844ec1fc34cfd117aeec3"},{url:"/icon-512x512.png",revision:"e3568ded23888993887089bfe2de71ff"},{url:"/logo-coruja.png",revision:"66e610ccb36ed82b8494b7cfb44bcdee"},{url:"/logo.png",revision:"19a5ddcf5e669cf974fa2670d36ba4ba"},{url:"/manifest.json",revision:"ddbd520befd1ac778f202a1d253ab5d5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
