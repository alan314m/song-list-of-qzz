if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const _=e||("document"in self?document.currentScript.src:"")||location.href;if(s[_])return;let c={};const r=e=>n(e,_),o={module:{uri:_},exports:c,require:r};s[_]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/100sc.png",revision:"6ade4bbababbe5926a9bba66d73c05c4"},{url:"/100sc.webp",revision:"be4a2c991967ca53ad41d73d6213e17f"},{url:"/30sc.png",revision:"eaacee5bef4e1bc91f436eeaf22300fb"},{url:"/30sc.webp",revision:"f6eb38933e76e9f68bdc4fd6701947b6"},{url:"/610bg.webp",revision:"d065f46ebe6a14899b90d0f3adcc92f8"},{url:"/610neo.webp",revision:"9e4c9a3c5e19328d1fcd0466b4d5ebca"},{url:"/_next/static/chunks/128-dc4480c9bb6309ca.js",revision:"dc4480c9bb6309ca"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-ebb1b5b3a75e0c5f.js",revision:"ebb1b5b3a75e0c5f"},{url:"/_next/static/chunks/pages/_app-3d9899318f90f633.js",revision:"3d9899318f90f633"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-3235730164fabe4c.js",revision:"3235730164fabe4c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/eb2e54cef2a63f04.css",revision:"eb2e54cef2a63f04"},{url:"/_next/static/css/f00818105606cd33.css",revision:"f00818105606cd33"},{url:"/_next/static/wrkD4QowHz7zxwysSomlB/_buildManifest.js",revision:"abf96542ee446e08eb2fd2309d7caf37"},{url:"/_next/static/wrkD4QowHz7zxwysSomlB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/a2hs/android-icon-144x144.png",revision:"561ff79d448af09c2192dedab263bc28"},{url:"/a2hs/android-icon-192x192.png",revision:"e2119975b2e100ba96be75a30cdf9c28"},{url:"/a2hs/android-icon-36x36.png",revision:"7e9e8e3ded4a460d20f00f347ac44fb1"},{url:"/a2hs/android-icon-48x48.png",revision:"ca121b868e212ca53b08d105a9dd4ad4"},{url:"/a2hs/android-icon-72x72.png",revision:"15da1be803d0df0fa2da26c50e0c69ed"},{url:"/a2hs/android-icon-96x96.png",revision:"878be765f63dfafc60214199da0de233"},{url:"/a2hs/apple-icon-114x114.png",revision:"047ff4fa4ea05007343697d833e155e4"},{url:"/a2hs/apple-icon-120x120.png",revision:"8cf060b6f9f81f5dabd418a86572d6e8"},{url:"/a2hs/apple-icon-144x144.png",revision:"561ff79d448af09c2192dedab263bc28"},{url:"/a2hs/apple-icon-152x152.png",revision:"c0c26b9dbee6703967bce3ec7b4d1250"},{url:"/a2hs/apple-icon-180x180.png",revision:"73d41cc1cc6b50ed3e6cb2fa4593c483"},{url:"/a2hs/apple-icon-57x57.png",revision:"319df479cf606eda45339198855c38ac"},{url:"/a2hs/apple-icon-60x60.png",revision:"7b27263d876710e5d7110cb596556447"},{url:"/a2hs/apple-icon-72x72.png",revision:"15da1be803d0df0fa2da26c50e0c69ed"},{url:"/a2hs/apple-icon-76x76.png",revision:"cf96b80fbff7173240bcd951d9d2d626"},{url:"/a2hs/apple-icon-precomposed.png",revision:"1efb3973ea296362ef04e809191e6779"},{url:"/a2hs/apple-icon.png",revision:"1efb3973ea296362ef04e809191e6779"},{url:"/a2hs/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/a2hs/favicon-16x16.png",revision:"4e013fc0ce100d08f0ca1c4040537839"},{url:"/a2hs/favicon-32x32.png",revision:"09a86cd3f6995aa47cc54a14fa290cae"},{url:"/a2hs/favicon-96x96.png",revision:"878be765f63dfafc60214199da0de233"},{url:"/a2hs/favicon.ico",revision:"01004f01573d6feeea485543b257cf06"},{url:"/a2hs/manifest.json",revision:"6f85d68974f0e02232a69fd7a19e8037"},{url:"/a2hs/ms-icon-144x144.png",revision:"561ff79d448af09c2192dedab263bc28"},{url:"/a2hs/ms-icon-150x150.png",revision:"803cb528155e8f629f06901605b4f374"},{url:"/a2hs/ms-icon-310x310.png",revision:"544281ecec199acbf37f2d2825df1c47"},{url:"/a2hs/ms-icon-70x70.png",revision:"c1558a3536685d7f71f8261b340ec657"},{url:"/bilibili_logo.png",revision:"f0beb7a394932fb0c64ae681ccb01981"},{url:"/favicon.ico",revision:"01004f01573d6feeea485543b257cf06"},{url:"/music_list_610.json",revision:"4d457fe27207f0ecd30159d79c6e63bf"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"a27b76b914854bc4219917b4b6c9d083"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"ebfcc9048ab82562ad767b0e3da5b3ce"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"cae009d5e9a7b54b4e9fd72a3ad79230"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"a9986fb385f9453291f7401ea8a158f1"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"88981caf23e1bba9dd761b8c6a312c43"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"8c98b22b7f142d2de4c8c0399baf490b"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"df553165b5ff2d2795f1c75684bf2a11"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"b731fb8b6ac2d224211de472b7db03e4"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"9b24efe5a7af6b4fb60064b805927cbb"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"a30b65f2067b1485dfff13e88b1fc916"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"ab64158bb2156c64556b87caf63e1e3e"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"968b61b97c188d646a576f4fd5c885f8"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"7bf8001316037138e5d0763f5c24c88d"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"0b4c709a530c815da06cd693f0f1009f"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"e282ee115f2a7dce0e5b185f754eae35"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"ec25cd5ebf44675e7d554309f81f1f9d"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"ef014e1d3560d003cc4d422eee2e2d05"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"2bec1a822f8e09777c67f937ef9c103c"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"a78bbc69e198958479875260175432c0"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"c91ddf86715c2f8313db4cd4134d3938"},{url:"/splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"12e70cf7b2232148bafb557d31a40b4c"},{url:"/splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"f9015d9aca80d97304e7a163d170e1af"},{url:"/splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"34f927094e5707cc24324b045397bd93"},{url:"/splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"81df3ee0318bb6c39a2b8b0dda2a937d"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"859c133f5f8ad2b2484492c61fe9a007"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"ad09725a693eac8fb79b5d3389fda568"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"cdd3f747d8dc0843547714d480d88724"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"162909169f9dbf3c3276657e10d3f624"},{url:"/splash_screens/icon.png",revision:"0a5bd5407493c7e1cf318e6983c4ea4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
