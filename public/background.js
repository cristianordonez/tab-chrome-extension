(()=>{var e={851:function(e,r,s){"use strict";var n=this&&this.__awaiter||function(e,r,s,n){return new(s||(s=Promise))((function(a,g){function t(e){try{i(n.next(e))}catch(e){g(e)}}function m(e){try{i(n.throw(e))}catch(e){g(e)}}function i(e){var r;e.done?a(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(t,m)}i((n=n.apply(e,r||[])).next())}))},a=this&&this.__generator||function(e,r){var s,n,a,g,t={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return g={next:m(0),throw:m(1),return:m(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function m(m){return function(i){return function(m){if(s)throw new TypeError("Generator is already executing.");for(;g&&(g=0,m[0]&&(t=0)),t;)try{if(s=1,n&&(a=2&m[0]?n.return:m[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,m[1])).done)return a;switch(n=0,a&&(m=[2&m[0],a.value]),m[0]){case 0:case 1:a=m;break;case 4:return t.label++,{value:m[1],done:!1};case 5:t.label++,n=m[1],m=[0];continue;case 7:m=t.ops.pop(),t.trys.pop();continue;default:if(!(a=t.trys,(a=a.length>0&&a[a.length-1])||6!==m[0]&&2!==m[0])){t=0;continue}if(3===m[0]&&(!a||m[1]>a[0]&&m[1]<a[3])){t.label=m[1];break}if(6===m[0]&&t.label<a[1]){t.label=a[1],a=m;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(m);break}a[2]&&t.ops.pop(),t.trys.pop();continue}m=r.call(e,t)}catch(e){m=[6,e],n=0}finally{s=a=0}if(5&m[0])throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}([m,i])}}};Object.defineProperty(r,"__esModule",{value:!0});var g=s(150);function t(){return n(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,g.tabs.query({active:!0,currentWindow:!0})];case 1:return[2,e.sent()[0]]}}))}))}g.runtime.onInstalled.addListener((function(){return n(void 0,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return[4,t()];case 1:return e=r.sent(),console.log("tabs: ",e),[2]}}))}))}))},150:function(e,r){var s,n,a;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[e],s=function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r=void 0){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=e=>e&&"object"==typeof e&&"function"==typeof e.then,g=(r,s)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||n.length<=1&&!1!==s.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},t=e=>1==e?"argument":"arguments",m=(e,r)=>function(s,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((a,t)=>{if(r.fallbackToNoCallback)try{s[e](...n,g({resolve:a,reject:t},r))}catch(g){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),s[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(s[e](...n),a()):s[e](...n,g({resolve:a,reject:t},r))}))},i=(e,r,s)=>new Proxy(r,{apply:(r,n,a)=>s.call(n,e,...a)});let o=Function.call.bind(Object.prototype.hasOwnProperty);const A=(e,r={},s={})=>{let n=Object.create(null),a={has:(r,s)=>s in e||s in n,get(a,g,t){if(g in n)return n[g];if(!(g in e))return;let l=e[g];if("function"==typeof l)if("function"==typeof r[g])l=i(e,e[g],r[g]);else if(o(s,g)){let r=m(g,s[g]);l=i(e,e[g],r)}else l=l.bind(e);else if("object"==typeof l&&null!==l&&(o(r,g)||o(s,g)))l=A(l,r[g],s[g]);else{if(!o(s,"*"))return Object.defineProperty(n,g,{configurable:!0,enumerable:!0,get:()=>e[g],set(r){e[g]=r}}),l;l=A(l,r[g],s["*"])}return n[g]=l,l},set:(r,s,a,g)=>(s in n?n[s]=a:e[s]=a,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(n,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},g=Object.create(e);return new Proxy(g,a)},l=e=>({addListener(r,s,...n){r.addListener(e.get(s),...n)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),c=new n((e=>"function"!=typeof e?e:function(r){const s=A(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)})),x=new n((e=>"function"!=typeof e?e:function(r,s,n){let g,t,m=!1,i=new Promise((e=>{g=function(r){m=!0,e(r)}}));try{t=e(r,s,g)}catch(e){t=Promise.reject(e)}const o=!0!==t&&a(t);if(!0!==t&&!o&&!m)return!1;const A=e=>{e.then((e=>{n(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return A(o?t:i),!0})),u=({reject:s,resolve:n},a)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():s(new Error(e.runtime.lastError.message)):a&&a.__mozWebExtensionPolyfillReject__?s(new Error(a.message)):n(a)},d=(e,r,s,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const a=u.bind(null,{resolve:e,reject:r});n.push(a),s.sendMessage(...n)}))},f={devtools:{network:{onRequestFinished:l(c)}},runtime:{onMessage:l(x),onMessageExternal:l(x),sendMessage:d.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:d.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},A(e,f,s)};e.exports=s(chrome)}else e.exports=globalThis.browser},void 0===(a="function"==typeof s?s.apply(r,n):s)||(e.exports=a)}},r={};(function s(n){var a=r[n];if(void 0!==a)return a.exports;var g=r[n]={exports:{}};return e[n].call(g.exports,g,g.exports,s),g.exports})(851)})();