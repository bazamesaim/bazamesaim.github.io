var xd=Object.defineProperty;var Vd=(r,e,t)=>e in r?xd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var G=(r,e,t)=>Vd(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function go(r="home"){return`
    <header class="top-nav">
      <div class="nav-container">
        <a href="#home" class="logo">
          <span class="book-icon">📖</span>
          <div class="logo-text">
            <span class="sub-logo">ISLAMIC PORTAL</span>
            <div class="main-logo">BAZAM-E-<span>SAIM</span></div>
          </div>
        </a>
        <ul class="nav-links">
          <li><a href="#home" class="nav-btn ${r==="home"?"active":""}"><i class="fas fa-home"></i> HOME</a></li>
          <li><a href="#books" class="nav-btn ${r==="books"?"active":""}"><i class="fas fa-book"></i> BOOKS & PDFS</a></li>
          <li><a href="#audio" class="nav-btn ${r==="audio"?"active":""}"><i class="fas fa-headphones"></i> AUDIO MEHFIL</a></li>
          <li><a href="#videos" class="nav-btn ${r==="videos"?"active":""}"><i class="fas fa-video"></i> VIDEOS</a></li>
        </ul>
      </div>
    </header>
  `}function Md(){return`
    <section class="hero-section">
      <div class="hero-content">
        <h2>Bazam-E-Saim Islamic Library & Multimedia Portal</h2>
        
        <div class="search-box">
          <input type="text" id="homeSearchInput" placeholder="کتاب، بیان یا نعت تلاش کریں...">
          <button id="homeSearchBtn" class="btn-search"><i class="fas fa-search"></i> SEARCH</button>
        </div>

        <p class="hero-desc">
          بزمِ صائم کے اس پورٹل پر آپ کو اسلامی کتب، صوتی محافل، اور مستند بیانات کا مکمل ذخیرہ میسر آئے گا۔
        </p>

        <div class="hero-buttons">
          <a href="#books" class="btn-red"><i class="fas fa-book-open"></i> EXPLORE BOOKS</a>
          <a href="#videos" class="btn-red"><i class="fas fa-play-circle"></i> WATCH VIDEOS</a>
        </div>
      </div>
    </section>
  `}function mo(){return`
    <footer class="footer-card">
      <div class="footer-container">
        <div class="footer-info">
          <h3>BAZAM-E-SAIM</h3>
          <p>© 2026 All Rights Reserved | Digital Islamic Portal</p>
        </div>
      </div>
    </footer>
  `}const Gd=()=>{};var lc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Hd=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,u=s+2<r.length,c=u?r[s+2]:0,h=i>>2,f=(i&3)<<4|B>>4;let g=(B&15)<<2|c>>6,y=c&63;u||(y=64,o||(g=64)),n.push(t[h],t[f],t[g],t[y])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ch(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Hd(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const c=s<r.length?t[r.charAt(s)]:64;++s;const f=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||c==null||f==null)throw new Ud;const g=i<<2|B>>4;if(n.push(g),c!==64){const y=B<<4&240|c>>2;if(n.push(y),f!==64){const v=c<<6&192|f;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(r){const e=ch(r);return lh.encodeByteArray(e,!0)},qi=function(r){return Jd(r).replace(/\./g,"")},hh=function(r){try{return lh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=()=>jd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof lc>"u")return;const r=lc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&hh(r[1]);return e&&JSON.parse(e)},Eo=()=>{try{return Gd()||qd()||Kd()||zd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ch=r=>{var e,t;return(t=(e=Eo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},fh=r=>{const e=Ch(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},dh=()=>{var r;return(r=Eo())==null?void 0:r.config},ph=r=>{var e;return(e=Eo())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[qi(JSON.stringify(t)),qi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Wd(){var e;const r=(e=Eo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const r=ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function tp(){return!Wd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="FirebaseError";class Ht extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=sp,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ip(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,B,n)}}function ip(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function op(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function er(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(hc(i)&&hc(o)){if(!er(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function hc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ap(r,e){const t=new Bp(r,e);return t.subscribe.bind(t)}class Bp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");up(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=da),s.error===void 0&&(s.error=da),s.complete===void 0&&(s.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function up(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function BB(r){return(await fetch(r,{credentials:"include"})).ok}class vn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Qd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:lp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(r){return r===Jn?void 0:r}function hp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ae||(ae={}));const fp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},dp=ae.INFO,pp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},gp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=pp[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uB{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const mp=(r,e)=>e.some(t=>r instanceof t);let Cc,fc;function Ep(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mh=new WeakMap,Fa=new WeakMap,Eh=new WeakMap,pa=new WeakMap,cB=new WeakMap;function Dp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Dn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mh.set(t,r)}).catch(()=>{}),cB.set(e,r),e}function yp(r){if(Fa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Fa.set(r,e)}let La={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Eh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ip(r){La=r(La)}function wp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ga(this),e,...t);return Eh.set(n,e.sort?e.sort():[e]),Dn(n)}:_p().includes(r)?function(...e){return r.apply(ga(this),e),Dn(mh.get(this))}:function(...e){return Dn(r.apply(ga(this),e))}}function Tp(r){return typeof r=="function"?wp(r):(r instanceof IDBTransaction&&yp(r),mp(r,Ep())?new Proxy(r,La):r)}function Dn(r){if(r instanceof IDBRequest)return Dp(r);if(pa.has(r))return pa.get(r);const e=Tp(r);return e!==r&&(pa.set(r,e),cB.set(e,r)),e}const ga=r=>cB.get(r);function Ap(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=Dn(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Dn(o.result),u.oldVersion,u.newVersion,Dn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const vp=["get","getKey","getAll","getAllKeys","count"],Rp=["put","add","delete","clear"],ma=new Map;function dc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Rp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||vp.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return n&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return ma.set(e,i),i}Ip(r=>({...r,get:(e,t,n)=>dc(e,t)||r.get(e,t,n),has:(e,t)=>!!dc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Pp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",pc="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new uB("@firebase/app"),Sp="@firebase/app-compat",Op="@firebase/analytics-compat",Np="@firebase/analytics",Fp="@firebase/app-check-compat",Lp="@firebase/app-check",kp="@firebase/auth",xp="@firebase/auth-compat",Vp="@firebase/database",Mp="@firebase/data-connect",Gp="@firebase/database-compat",Hp="@firebase/functions",Up="@firebase/functions-compat",Jp="@firebase/installations",jp="@firebase/installations-compat",qp="@firebase/messaging",Kp="@firebase/messaging-compat",zp="@firebase/performance",Qp="@firebase/performance-compat",$p="@firebase/remote-config",Wp="@firebase/remote-config-compat",Yp="@firebase/storage",Xp="@firebase/storage-compat",Zp="@firebase/firestore",eg="@firebase/ai",tg="@firebase/firestore-compat",ng="firebase",rg="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="[DEFAULT]",sg={[ka]:"fire-core",[Sp]:"fire-core-compat",[Np]:"fire-analytics",[Op]:"fire-analytics-compat",[Lp]:"fire-app-check",[Fp]:"fire-app-check-compat",[kp]:"fire-auth",[xp]:"fire-auth-compat",[Vp]:"fire-rtdb",[Mp]:"fire-data-connect",[Gp]:"fire-rtdb-compat",[Hp]:"fire-fn",[Up]:"fire-fn-compat",[Jp]:"fire-iid",[jp]:"fire-iid-compat",[qp]:"fire-fcm",[Kp]:"fire-fcm-compat",[zp]:"fire-perf",[Qp]:"fire-perf-compat",[$p]:"fire-rc",[Wp]:"fire-rc-compat",[Yp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Zp]:"fire-fst",[tg]:"fire-fst-compat",[eg]:"fire-vertex","fire-js":"fire-js",[ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Map,ig=new Map,Va=new Map;function gc(r,e){try{r.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function tr(r){const e=r.name;if(Va.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,r);for(const t of Ki.values())gc(t,r);for(const t of ig.values())gc(t,r);return!0}function _o(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Et(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Js("app","Firebase",og);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=rg;function _h(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:xa,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=dh()),!t)throw Kt.create("no-options");const i=Ki.get(s);if(i)if(er(t,i.options)){if(er(n,i.config))return i;throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Cp(s);for(const u of Va.values())o.addComponent(u);const B=new ag(t,n,o);return Ki.set(s,B),B}function lB(r=xa){const e=Ki.get(r);if(!e&&r===xa&&dh())return _h();if(!e)throw Kt.create("no-app",{appName:r});return e}function Pt(r,e,t){let n=sg[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}tr(new vn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="firebase-heartbeat-database",ug=1,ws="firebase-heartbeat-store";let Ea=null;function Dh(){return Ea||(Ea=Ap(Bg,ug,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ws)}catch(t){console.warn(t)}}}}).catch(r=>{throw Kt.create("idb-open",{originalErrorMessage:r.message})})),Ea}async function cg(r){try{const t=(await Dh()).transaction(ws),n=await t.objectStore(ws).get(yh(r));return await t.done,n}catch(e){if(e instanceof Ht)Xt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function mc(r,e){try{const n=(await Dh()).transaction(ws,"readwrite");await n.objectStore(ws).put(e,yh(r)),await n.done}catch(t){if(t instanceof Ht)Xt.warn(t.message);else{const n=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(n.message)}}}function yh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=1024,hg=30;class Cg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ec();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>hg){const o=pg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Xt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:n,unsentEntries:s}=fg(this._heartbeatsCache.heartbeats),i=qi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function Ec(){return new Date().toISOString().substring(0,10)}function fg(r,e=lg){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_c(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_c(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function _c(r){return qi(JSON.stringify({version:2,heartbeats:r})).length}function pg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(r){tr(new vn("platform-logger",e=>new bp(e),"PRIVATE")),tr(new vn("heartbeat",e=>new Cg(e),"PRIVATE")),Pt(ka,pc,r),Pt(ka,pc,"esm2020"),Pt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gg("");var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,Ih;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(R,T,P){for(var _=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)_[Ze-2]=arguments[Ze];return E.prototype[T].apply(R,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const R=Array(16);if(typeof E=="string")for(var T=0;T<16;++T)R[T]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(T=0;T<16;++T)R[T]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],T=A.g[2];let P=A.g[3],_;_=E+(P^D&(T^P))+R[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+R[1]+3905402710&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+R[2]+606105819&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+R[3]+3250441966&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+R[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+R[5]+1200080426&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+R[6]+2821735955&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+R[7]+4249261313&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+R[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+R[9]+2336552879&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+R[10]+4294925233&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+R[11]+2304563134&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+R[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+R[13]+4254626195&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+R[14]+2792965006&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+R[15]+1236535329&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(T^P&(D^T))+R[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+R[6]+3225465664&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+R[11]+643717713&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+R[0]+3921069994&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+R[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+R[10]+38016083&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+R[15]+3634488961&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+R[4]+3889429448&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+R[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+R[14]+3275163606&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+R[3]+4107603335&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+R[8]+1163531501&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+R[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+R[2]+4243563512&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+R[7]+1735328473&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+R[12]+2368359562&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(D^T^P)+R[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+R[8]+2272392833&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+R[11]+1839030562&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+R[14]+4259657740&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+R[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+R[4]+1272893353&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+R[7]+4139469664&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+R[10]+3200236656&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+R[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+R[0]+3936430074&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+R[3]+3572445317&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+R[6]+76029189&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+R[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+R[12]+3873151461&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+R[15]+530742520&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+R[2]+3299628645&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(T^(D|~P))+R[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+R[7]+1126891415&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+R[14]+2878612391&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+R[5]+4237533241&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+R[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+R[3]+2399980690&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+R[10]+4293915773&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+R[1]+2240044497&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+R[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+R[15]+4264355552&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+R[6]+2734768916&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+R[13]+1309151649&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+R[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+R[11]+3174756917&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+R[2]+718787259&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+P&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,R=this.C;let T=this.h,P=0;for(;P<E;){if(T==0)for(;P<=D;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(R[T++]=A.charCodeAt(P++),T==this.blockSize){s(this,R),T=0;break}}else for(;P<E;)if(R[T++]=A[P++],T==this.blockSize){s(this,R),T=0;break}}this.h=T,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)A[E++]=this.g[D]>>>R&255;return A};function i(A,E){var D=B;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let R=!0;for(let T=A.length-1;T>=0;T--){const P=A[T]|0;R&&P==E||(D[T]=P,R=!1)}this.g=D}var B={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return M(c(-A));const E=[];let D=1;for(let R=0;A>=D;R++)E[R]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return M(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let R=f;for(let P=0;P<A.length;P+=8){var T=Math.min(8,A.length-P);const _=parseInt(A.substring(P,P+T),E);T<8?(T=c(Math.pow(E,T)),R=R.j(T).add(c(_))):(R=R.j(D),R=R.add(c(_)))}return R}var f=u(0),g=u(1),y=u(16777216);r=o.prototype,r.m=function(){if(L(this))return-M(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);A+=(R>=0?R:4294967296+R)*E,E*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(v(this))return"0";if(L(this))return"-"+M(this).toString(A);const E=c(Math.pow(A,6));var D=this;let R="";for(;;){const T=Ce(D,E).g;D=j(D,T.j(E));let P=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=T,v(D))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function v(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function L(A){return A.h==-1}r.l=function(A){return A=j(this,A),L(A)?-1:v(A)?0:1};function M(A){const E=A.g.length,D=[];for(let R=0;R<E;R++)D[R]=~A.g[R];return new o(D,~A.h).add(g)}r.abs=function(){return L(this)?M(this):this},r.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let R=0;for(let T=0;T<=E;T++){let P=R+(this.i(T)&65535)+(A.i(T)&65535),_=(P>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);R=_>>>16,P&=65535,_&=65535,D[T]=_<<16|P}return new o(D,D[D.length-1]&-2147483648?-1:0)};function j(A,E){return A.add(M(E))}r.j=function(A){if(v(this)||v(A))return f;if(L(this))return L(A)?M(this).j(M(A)):M(M(this).j(A));if(L(A))return M(this.j(M(A)));if(this.l(y)<0&&A.l(y)<0)return c(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var R=0;R<2*E;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let T=0;T<A.g.length;T++){const P=this.i(R)>>>16,_=this.i(R)&65535,Ze=A.i(T)>>>16,xn=A.i(T)&65535;D[2*R+2*T]+=_*xn,ne(D,2*R+2*T),D[2*R+2*T+1]+=P*xn,ne(D,2*R+2*T+1),D[2*R+2*T+1]+=_*Ze,ne(D,2*R+2*T+1),D[2*R+2*T+2]+=P*Ze,ne(D,2*R+2*T+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function ne(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function he(A,E){this.g=A,this.h=E}function Ce(A,E){if(v(E))throw Error("division by zero");if(v(A))return new he(f,f);if(L(A))return E=Ce(M(A),E),new he(M(E.g),M(E.h));if(L(E))return E=Ce(A,M(E)),new he(M(E.g),E.h);if(A.g.length>30){if(L(A)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var D=g,R=E;R.l(A)<=0;)D=Te(D),R=Te(R);var T=Ee(D,1),P=Ee(R,1);for(R=Ee(R,2),D=Ee(D,2);!v(R);){var _=P.add(R);_.l(A)<=0&&(T=T.add(D),P=_),R=Ee(R,1),D=Ee(D,1)}return E=j(A,T.j(E)),new he(T,E)}for(T=f;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=c(D),_=P.j(E);L(_)||_.l(A)>0;)D-=R,P=c(D),_=P.j(E);v(P)&&(P=g),T=T.add(P),A=j(A,_)}return new he(T,A)}r.B=function(A){return Ce(this,A).h},r.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)&A.i(R);return new o(D,this.h&A.h)},r.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)|A.i(R);return new o(D,this.h|A.h)},r.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)^A.i(R);return new o(D,this.h^A.h)};function Te(A){const E=A.g.length+1,D=[];for(let R=0;R<E;R++)D[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(D,A.h)}function Ee(A,E){const D=E>>5;E%=32;const R=A.g.length-D,T=[];for(let P=0;P<R;P++)T[P]=E>0?A.i(P+D)>>>E|A.i(P+D+1)<<32-E:A.i(P+D);return new o(T,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Ih=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,yn=o}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh,ls,Th,Ni,Ma,Ah,vh,Rh;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var l=0;l<a.length;++l){var C=a[l];if(C&&C.Math==Math)return C}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var C=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var b=a[d];if(!(b in C))break e;C=C[b]}a=a[a.length-1],d=C[a],l=l(d),l!=d&&l!=null&&e(C,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var C=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&C.push([d,l[d]]);return C}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,C){return a.call.apply(a.bind,arguments)}function c(a,l,C){return c=u,c.apply(null,arguments)}function h(a,l){var C=Array.prototype.slice.call(arguments,1);return function(){var d=C.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function f(a,l){function C(){}C.prototype=l.prototype,a.Z=l.prototype,a.prototype=new C,a.prototype.constructor=a,a.Ob=function(d,b,S){for(var J=Array(arguments.length-2),se=2;se<arguments.length;se++)J[se-2]=arguments[se];return l.prototype[b].apply(d,J)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const l=a.length;if(l>0){const C=Array(l);for(let d=0;d<l;d++)C[d]=a[d];return C}return[]}function v(a,l){for(let d=1;d<arguments.length;d++){const b=arguments[d];var C=typeof b;if(C=C!="object"?C:b?Array.isArray(b)?"array":C:"null",C=="array"||C=="object"&&typeof b.length=="number"){C=a.length||0;const S=b.length||0;a.length=C+S;for(let J=0;J<S;J++)a[C+J]=b[J]}else a.push(b)}}class L{constructor(l,C){this.i=l,this.j=C,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function j(){var a=A;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ne{constructor(){this.h=this.g=null}add(l,C){const d=he.get();d.set(l,C),this.h?this.h.next=d:this.g=d,this.h=d}}var he=new L(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(l,C){this.h=l,this.g=C,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ee=!1,A=new ne,E=()=>{const a=Promise.resolve(void 0);Te=()=>{a.then(D)}};function D(){for(var a;a=j();){try{a.h.call(a.g)}catch(C){M(C)}var l=he;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Ee=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const C=()=>{};o.addEventListener("test",C,l),o.removeEventListener("test",C,l)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function Ze(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}f(Ze,T),Ze.prototype.init=function(a,l){const C=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(C=="mouseover"?l=a.fromElement:C=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ze.Z.h.call(this)},Ze.prototype.h=function(){Ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xn="closure_listenable_"+(Math.random()*1e6|0),id=0;function od(a,l,C,d,b){this.listener=a,this.proxy=null,this.src=l,this.type=C,this.capture=!!d,this.ha=b,this.key=++id,this.da=this.fa=!1}function si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ii(a,l,C){for(const d in a)l.call(C,a[d],d,a)}function ad(a,l){for(const C in a)l.call(void 0,a[C],C,a)}function cu(a){const l={};for(const C in a)l[C]=a[C];return l}const lu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hu(a,l){let C,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(C in d)a[C]=d[C];for(let S=0;S<lu.length;S++)C=lu[S],Object.prototype.hasOwnProperty.call(d,C)&&(a[C]=d[C])}}function oi(a){this.src=a,this.g={},this.h=0}oi.prototype.add=function(a,l,C,d,b){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const J=Ko(a,l,d,b);return J>-1?(l=a[J],C||(l.fa=!1)):(l=new od(l,this.src,S,!!d,b),l.fa=C,a.push(l)),l};function qo(a,l){const C=l.type;if(C in a.g){var d=a.g[C],b=Array.prototype.indexOf.call(d,l,void 0),S;(S=b>=0)&&Array.prototype.splice.call(d,b,1),S&&(si(l),a.g[C].length==0&&(delete a.g[C],a.h--))}}function Ko(a,l,C,d){for(let b=0;b<a.length;++b){const S=a[b];if(!S.da&&S.listener==l&&S.capture==!!C&&S.ha==d)return b}return-1}var zo="closure_lm_"+(Math.random()*1e6|0),Qo={};function Cu(a,l,C,d,b){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Cu(a,l[S],C,d,b);return null}return C=pu(C),a&&a[xn]?a.J(l,C,B(d)?!!d.capture:!1,b):Bd(a,l,C,!1,d,b)}function Bd(a,l,C,d,b,S){if(!l)throw Error("Invalid event type");const J=B(b)?!!b.capture:!!b;let se=Wo(a);if(se||(a[zo]=se=new oi(a)),C=se.add(l,C,d,J,S),C.proxy)return C;if(d=ud(),C.proxy=d,d.src=a,d.listener=C,a.addEventListener)P||(b=J),b===void 0&&(b=!1),a.addEventListener(l.toString(),d,b);else if(a.attachEvent)a.attachEvent(du(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return C}function ud(){function a(C){return l.call(a.src,a.listener,C)}const l=cd;return a}function fu(a,l,C,d,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)fu(a,l[S],C,d,b);else d=B(d)?!!d.capture:!!d,C=pu(C),a&&a[xn]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],C=Ko(l,C,d,b),C>-1&&(si(l[C]),Array.prototype.splice.call(l,C,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=Wo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ko(l,C,d,b)),(C=a>-1?l[a]:null)&&$o(C))}function $o(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[xn])qo(l.i,a);else{var C=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(C,d,a.capture):l.detachEvent?l.detachEvent(du(C),d):l.addListener&&l.removeListener&&l.removeListener(d),(C=Wo(l))?(qo(C,a),C.h==0&&(C.src=null,l[zo]=null)):si(a)}}}function du(a){return a in Qo?Qo[a]:Qo[a]="on"+a}function cd(a,l){if(a.da)a=!0;else{l=new Ze(l,this);const C=a.listener,d=a.ha||a.src;a.fa&&$o(a),a=C.call(d,l)}return a}function Wo(a){return a=a[zo],a instanceof oi?a:null}var Yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function pu(a){return typeof a=="function"?a:(a[Yo]||(a[Yo]=function(l){return a.handleEvent(l)}),a[Yo])}function Je(){R.call(this),this.i=new oi(this),this.M=this,this.G=null}f(Je,R),Je.prototype[xn]=!0,Je.prototype.removeEventListener=function(a,l,C,d){fu(this,a,l,C,d)};function $e(a,l){var C,d=a.G;if(d)for(C=[];d;d=d.G)C.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(d,a),hu(l,b)}b=!0;let S,J;if(C)for(J=C.length-1;J>=0;J--)S=l.g=C[J],b=ai(S,d,!0,l)&&b;if(S=l.g=a,b=ai(S,d,!0,l)&&b,b=ai(S,d,!1,l)&&b,C)for(J=0;J<C.length;J++)S=l.g=C[J],b=ai(S,d,!1,l)&&b}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const C=a.g[l];for(let d=0;d<C.length;d++)si(C[d]);delete a.g[l],a.h--}}this.G=null},Je.prototype.J=function(a,l,C,d){return this.i.add(String(a),l,!1,C,d)},Je.prototype.K=function(a,l,C,d){return this.i.add(String(a),l,!0,C,d)};function ai(a,l,C,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let S=0;S<l.length;++S){const J=l[S];if(J&&!J.da&&J.capture==C){const se=J.listener,Fe=J.ha||J.src;J.fa&&qo(a.i,J),b=se.call(Fe,d)!==!1&&b}}return b&&!d.defaultPrevented}function ld(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function gu(a){a.g=ld(()=>{a.g=null,a.i&&(a.i=!1,gu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class hd extends R{constructor(l,C){super(),this.m=l,this.l=C,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:gu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(a){R.call(this),this.h=a,this.g={}}f(zr,R);var mu=[];function Eu(a){ii(a.g,function(l,C){this.g.hasOwnProperty(C)&&$o(l)},a),a.g={}}zr.prototype.N=function(){zr.Z.N.call(this),Eu(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=o.JSON.stringify,Cd=o.JSON.parse,fd=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function _u(){}function Du(){}var Qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zo(){T.call(this,"d")}f(Zo,T);function ea(){T.call(this,"c")}f(ea,T);var Vn={},yu=null;function Bi(){return yu=yu||new Je}Vn.Ia="serverreachability";function Iu(a){T.call(this,Vn.Ia,a)}f(Iu,T);function $r(a){const l=Bi();$e(l,new Iu(l))}Vn.STAT_EVENT="statevent";function wu(a,l){T.call(this,Vn.STAT_EVENT,a),this.stat=l}f(wu,T);function We(a){const l=Bi();$e(l,new wu(l,a))}Vn.Ja="timingevent";function Tu(a,l){T.call(this,Vn.Ja,a),this.size=l}f(Tu,T);function Wr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Yr(){this.g=!0}Yr.prototype.ua=function(){this.g=!1};function dd(a,l,C,d,b,S){a.info(function(){if(a.g)if(S){var J="",se=S.split("&");for(let pe=0;pe<se.length;pe++){var Fe=se[pe].split("=");if(Fe.length>1){const xe=Fe[0];Fe=Fe[1];const Tt=xe.split("_");J=Tt.length>=2&&Tt[1]=="type"?J+(xe+"="+Fe+"&"):J+(xe+"=redacted&")}}}else J=null;else J=S;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+l+`
`+C+`
`+J})}function pd(a,l,C,d,b,S,J){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+l+`
`+C+`
`+S+" "+J})}function hr(a,l,C,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+md(a,C)+(d?" "+d:"")})}function gd(a,l){a.info(function(){return"TIMEOUT: "+l})}Yr.prototype.info=function(){};function md(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var C=S[a];if(!(C.length<2)){var d=C[1];if(Array.isArray(d)&&!(d.length<1)){var b=d[0];if(b!="noop"&&b!="stop"&&b!="close")for(let J=1;J<d.length;J++)d[J]=""}}}}return Xo(S)}catch{return l}}var ui={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Au={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vu;function ta(){}f(ta,_u),ta.prototype.g=function(){return new XMLHttpRequest},vu=new ta;function Xr(a){return encodeURIComponent(String(a))}function Ed(a){var l=1;a=a.split(":");const C=[];for(;l>0&&a.length;)C.push(a.shift()),l--;return a.length&&C.push(a.join(":")),C}function rn(a,l,C,d){this.j=a,this.i=l,this.l=C,this.S=d||1,this.V=new zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var bu={},na={};function ra(a,l,C){a.M=1,a.A=li(wt(l)),a.u=C,a.R=!0,Pu(a,null)}function Pu(a,l){a.F=Date.now(),ci(a),a.B=wt(a.A);var C=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),Ju(C.i,"t",d),a.C=0,C=a.j.L,a.h=new Ru,a.g=ac(a.j,C?l:null,!a.u),a.P>0&&(a.O=new hd(c(a.Y,a,a.g),a.P)),l=a.V,C=a.g,d=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(mu[0]=b.toString()),b=mu);for(let S=0;S<b.length;S++){const J=Cu(C,b[S],d||l.handleEvent,!1,l.h||l);if(!J)break;l.g[J.key]=J}l=a.J?cu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),$r(),dd(a.i,a.v,a.B,a.l,a.S,a.u)}rn.prototype.ba=function(a){a=a.target;const l=this.O;l&&an(a)==3?l.j():this.Y(a)},rn.prototype.Y=function(a){try{if(a==this.g)e:{const se=an(this.g),Fe=this.g.ya(),pe=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Wu(this.g)))){this.K||se!=4||Fe==7||(Fe==8||pe<=0?$r(3):$r(2)),sa(this);var l=this.g.ca();this.X=l;var C=_d(this);if(this.o=l==200,pd(this.i,this.v,this.B,this.l,this.S,se,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,b=this.g;if((d=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var S=d;break t}}S=null}if(a=S)hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ia(this,a);else{this.o=!1,this.m=3,We(12),Mn(this),Zr(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<C.length;)if(xe=Dd(this,C),xe==na){se==4&&(this.m=4,We(14),a=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==bu){this.m=4,We(15),hr(this.i,this.l,C,"[Invalid Chunk]"),a=!1;break}else hr(this.i,this.l,xe,null),ia(this,xe);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||C.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)hr(this.i,this.l,C,"[Invalid Chunked Response]"),Mn(this),Zr(this);else if(C.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ca(J),J.P=!0,We(11))}}else hr(this.i,this.l,C,null),ia(this,C);se==4&&Mn(this),this.o&&!this.K&&(se==4?rc(this.j,this):(this.o=!1,ci(this)))}else Ld(this.g),l==400&&C.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Mn(this),Zr(this)}}}catch{}finally{}};function _d(a){if(!Su(a))return a.g.la();const l=Wu(a.g);if(l==="")return"";let C="";const d=l.length,b=an(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Mn(a),Zr(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<d;S++)a.h.h=!0,C+=a.h.i.decode(l[S],{stream:!(b&&S==d-1)});return l.length=0,a.h.g+=C,a.C=0,a.h.g}function Su(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Dd(a,l){var C=a.C,d=l.indexOf(`
`,C);return d==-1?na:(C=Number(l.substring(C,d)),isNaN(C)?bu:(d+=1,d+C>l.length?na:(l=l.slice(d,d+C),a.C=d+C,l)))}rn.prototype.cancel=function(){this.K=!0,Mn(this)};function ci(a){a.T=Date.now()+a.H,Ou(a,a.H)}function Ou(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Wr(c(a.aa,a),l)}function sa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gd(this.i,this.B),this.M!=2&&($r(),We(17)),Mn(this),this.m=2,Zr(this)):Ou(this,this.T-a)};function Zr(a){a.j.I==0||a.K||rc(a.j,a)}function Mn(a){sa(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Eu(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function ia(a,l){try{var C=a.j;if(C.I!=0&&(C.g==a||oa(C.h,a))){if(!a.L&&oa(C.h,a)&&C.I==3){try{var d=C.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){e:if(!C.v){if(C.g)if(C.g.F+3e3<a.F)pi(C),fi(C);else break e;ha(C),We(18)}}else C.xa=b[1],0<C.xa-C.K&&b[2]<37500&&C.F&&C.A==0&&!C.C&&(C.C=Wr(c(C.Va,C),6e3));Lu(C.h)<=1&&C.ta&&(C.ta=void 0)}else Hn(C,11)}else if((a.L||C.g==a)&&pi(C),!_(l))for(b=C.Ba.g.parse(l),l=0;l<b.length;l++){let pe=b[l];const xe=pe[0];if(!(xe<=C.K))if(C.K=xe,pe=pe[1],C.I==2)if(pe[0]=="c"){C.M=pe[1],C.ba=pe[2];const Tt=pe[3];Tt!=null&&(C.ka=Tt,C.j.info("VER="+C.ka));const Un=pe[4];Un!=null&&(C.za=Un,C.j.info("SVER="+C.za));const Bn=pe[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(d=1.5*Bn,C.O=d,C.j.info("backChannelRequestTimeoutMs_="+d)),d=C;const un=a.g;if(un){const mi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mi){var S=d.h;S.g||mi.indexOf("spdy")==-1&&mi.indexOf("quic")==-1&&mi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(aa(S,S.h),S.h=null))}if(d.G){const fa=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;fa&&(d.wa=fa,De(d.J,d.G,fa))}}C.I=3,C.l&&C.l.ra(),C.aa&&(C.T=Date.now()-a.F,C.j.info("Handshake RTT: "+C.T+"ms")),d=C;var J=a;if(d.na=oc(d,d.L?d.ba:null,d.W),J.L){ku(d.h,J);var se=J,Fe=d.O;Fe&&(se.H=Fe),se.D&&(sa(se),ci(se)),d.g=J}else tc(d);C.i.length>0&&di(C)}else pe[0]!="stop"&&pe[0]!="close"||Hn(C,7);else C.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Hn(C,7):la(C):pe[0]!="noop"&&C.l&&C.l.qa(pe),C.A=0)}}$r(4)}catch{}}var yd=class{constructor(a,l){this.g=a,this.map=l}};function Nu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lu(a){return a.h?1:a.g?a.g.size:0}function oa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function aa(a,l){a.g?a.g.add(l):a.h=l}function ku(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Nu.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const C of a.g.values())l=l.concat(C.G);return l}return y(a.i)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Id(a,l){if(a){a=a.split("&");for(let C=0;C<a.length;C++){const d=a[C].indexOf("=");let b,S=null;d>=0?(b=a[C].substring(0,d),S=a[C].substring(d+1)):b=a[C],l(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function sn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof sn?(this.l=a.l,es(this,a.j),this.o=a.o,this.g=a.g,ts(this,a.u),this.h=a.h,Ba(this,ju(a.i)),this.m=a.m):a&&(l=String(a).match(Vu))?(this.l=!1,es(this,l[1]||"",!0),this.o=ns(l[2]||""),this.g=ns(l[3]||"",!0),ts(this,l[4]),this.h=ns(l[5]||"",!0),Ba(this,l[6]||"",!0),this.m=ns(l[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}sn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(rs(l,Mu,!0),":");var C=this.g;return(C||l=="file")&&(a.push("//"),(l=this.o)&&a.push(rs(l,Mu,!0),"@"),a.push(Xr(C).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),C=this.u,C!=null&&a.push(":",String(C))),(C=this.h)&&(this.g&&C.charAt(0)!="/"&&a.push("/"),a.push(rs(C,C.charAt(0)=="/"?Ad:Td,!0))),(C=this.i.toString())&&a.push("?",C),(C=this.m)&&a.push("#",rs(C,Rd)),a.join("")},sn.prototype.resolve=function(a){const l=wt(this);let C=!!a.j;C?es(l,a.j):C=!!a.o,C?l.o=a.o:C=!!a.g,C?l.g=a.g:C=a.u!=null;var d=a.h;if(C)ts(l,a.u);else if(C=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var b=l.h.lastIndexOf("/");b!=-1&&(d=l.h.slice(0,b+1)+d)}if(b=d,b==".."||b==".")d="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){d=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let J=0;J<b.length;){const se=b[J++];se=="."?d&&J==b.length&&S.push(""):se==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&J==b.length&&S.push("")):(S.push(se),d=!0)}d=S.join("/")}else d=b}return C?l.h=d:C=a.i.toString()!=="",C?Ba(l,ju(a.i)):C=!!a.m,C&&(l.m=a.m),l};function wt(a){return new sn(a)}function es(a,l,C){a.j=C?ns(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ts(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ba(a,l,C){l instanceof ss?(a.i=l,bd(a.i,a.l)):(C||(l=rs(l,vd)),a.i=new ss(l,a.l))}function De(a,l,C){a.i.set(l,C)}function li(a){return De(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ns(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,l,C){return typeof a=="string"?(a=encodeURI(a).replace(l,wd),C&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mu=/[#\/\?@]/g,Td=/[#\?:]/g,Ad=/[#\?]/g,vd=/[#\?@]/g,Rd=/#/g;function ss(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Id(a.i,function(l,C){a.add(decodeURIComponent(l.replace(/\+/g," ")),C)}))}r=ss.prototype,r.add=function(a,l){Gn(this),this.i=null,a=Cr(this,a);let C=this.g.get(a);return C||this.g.set(a,C=[]),C.push(l),this.h+=1,this};function Gu(a,l){Gn(a),l=Cr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Hu(a,l){return Gn(a),l=Cr(a,l),a.g.has(l)}r.forEach=function(a,l){Gn(this),this.g.forEach(function(C,d){C.forEach(function(b){a.call(l,b,d,this)},this)},this)};function Uu(a,l){Gn(a);let C=[];if(typeof l=="string")Hu(a,l)&&(C=C.concat(a.g.get(Cr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)C=C.concat(a[l]);return C}r.set=function(a,l){return Gn(this),this.i=null,a=Cr(this,a),Hu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=Uu(this,a),a.length>0?String(a[0]):l):l};function Ju(a,l,C){Gu(a,l),C.length>0&&(a.i=null,a.g.set(Cr(a,l),y(C)),a.h+=C.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var C=l[d];const b=Xr(C);C=Uu(this,C);for(let S=0;S<C.length;S++){let J=b;C[S]!==""&&(J+="="+Xr(C[S])),a.push(J)}}return this.i=a.join("&")};function ju(a){const l=new ss;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Cr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function bd(a,l){l&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(C,d){const b=d.toLowerCase();d!=b&&(Gu(this,d),Ju(this,b,C))},a)),a.j=l}function Pd(a,l){const C=new Yr;if(o.Image){const d=new Image;d.onload=h(on,C,"TestLoadImage: loaded",!0,l,d),d.onerror=h(on,C,"TestLoadImage: error",!1,l,d),d.onabort=h(on,C,"TestLoadImage: abort",!1,l,d),d.ontimeout=h(on,C,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function Sd(a,l){const C=new Yr,d=new AbortController,b=setTimeout(()=>{d.abort(),on(C,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(S=>{clearTimeout(b),S.ok?on(C,"TestPingServer: ok",!0,l):on(C,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),on(C,"TestPingServer: error",!1,l)})}function on(a,l,C,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(C)}catch{}}function Od(){this.g=new fd}function ua(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ua,_u),ua.prototype.g=function(){return new hi(this.i,this.h)};function hi(a,l){Je.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(hi,Je),r=hi.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,os(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function qu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?is(this):os(this),this.readyState==3&&qu(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,is(this))},r.Na=function(a){this.g&&(this.response=a,is(this))},r.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.B=null,os(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var C=l.next();!C.done;)C=C.value,a.push(C[0]+": "+C[1]),C=l.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ku(a){let l="";return ii(a,function(C,d){l+=d,l+=":",l+=C,l+=`\r
`}),l}function ca(a,l,C){e:{for(d in C){var d=!1;break e}d=!0}d||(C=Ku(C),typeof a=="string"?C!=null&&Xr(C):De(a,l,C))}function ve(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ve,Je);var Nd=/^https?$/i,Fd=["POST","PUT"];r=ve.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,C,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vu.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){zu(this,S);return}if(a=C||"",C=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)C.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())C.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(C.keys()).find(S=>S.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Fd,l,void 0)>=0)||d||b||C.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,J]of C)this.g.setRequestHeader(S,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){zu(this,S)}};function zu(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Qu(a),Ci(a)}function Qu(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$e(this,"complete"),$e(this,"abort"),Ci(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),ve.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?$u(this):this.Xa())},r.Xa=function(){$u(this)};function $u(a){if(a.h&&typeof i<"u"){if(a.v&&an(a)==4)setTimeout(a.Ca.bind(a),0);else if($e(a,"readystatechange"),an(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var C;if(!(C=l)){var d;if(d=S===0){let J=String(a.D).match(Vu)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),d=!Nd.test(J?J.toLowerCase():"")}C=d}if(C)$e(a,"complete"),$e(a,"success");else{a.o=6;try{var b=an(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Qu(a)}}finally{Ci(a)}}}}function Ci(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const C=a.g;a.g=null,l||$e(a,"ready");try{C.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}r.ca=function(){try{return an(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Cd(l)}};function Wu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ld(a){const l={};a=(a.g&&an(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var C=Ed(a[d]);const b=C[0];if(C=C[1],typeof C!="string")continue;C=C.trim();const S=l[b]||[];l[b]=S,S.push(C)}ad(l,function(d){return d.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,l,C){return C&&C.internalChannelParams&&C.internalChannelParams[a]||l}function Yu(a){this.za=0,this.i=[],this.j=new Yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,a),this.Za=as("retryDelaySeedMs",1e4,a),this.Ta=as("forwardChannelMaxRetries",2,a),this.va=as("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Nu(a&&a.concurrentRequestLimit),this.Ba=new Od,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Yu.prototype,r.ka=8,r.I=1,r.connect=function(a,l,C,d){We(0),this.W=a,this.H=l||{},C&&d!==void 0&&(this.H.OSID=C,this.H.OAID=d),this.F=this.X,this.J=oc(this,null,this.W),di(this)};function la(a){if(Xu(a),a.I==3){var l=a.V++,C=wt(a.J);if(De(C,"SID",a.M),De(C,"RID",l),De(C,"TYPE","terminate"),Bs(a,C),l=new rn(a,a.j,l),l.M=2,l.A=li(wt(C)),C=!1,o.navigator&&o.navigator.sendBeacon)try{C=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!C&&o.Image&&(new Image().src=l.A,C=!0),C||(l.g=ac(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ci(l)}ic(a)}function fi(a){a.g&&(Ca(a),a.g.cancel(),a.g=null)}function Xu(a){fi(a),a.v&&(o.clearTimeout(a.v),a.v=null),pi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function di(a){if(!Fu(a.h)&&!a.m){a.m=!0;var l=a.Ea;Te||E(),Ee||(Te(),Ee=!0),A.add(l,a),a.D=0}}function kd(a,l){return Lu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Wr(c(a.Ea,a,l),sc(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new rn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=cu(S),hu(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var l=0,C=0;C<this.i.length;C++){t:{var d=this.i[C];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=C;break e}if(l===4096||C===this.i.length-1){l=C+1;break e}}l=1e3}else l=1e3;l=ec(this,b,l),C=wt(this.J),De(C,"RID",a),De(C,"CVER",22),this.G&&De(C,"X-HTTP-Session-Id",this.G),Bs(this,C),S&&(this.R?l="headers="+Xr(Ku(S))+"&"+l:this.u&&ca(C,this.u,S)),aa(this.h,b),this.Ra&&De(C,"TYPE","init"),this.S?(De(C,"$req",l),De(C,"SID","null"),b.U=!0,ra(b,C,null)):ra(b,C,l),this.I=2}}else this.I==3&&(a?Zu(this,a):this.i.length==0||Fu(this.h)||Zu(this))};function Zu(a,l){var C;l?C=l.l:C=a.V++;const d=wt(a.J);De(d,"SID",a.M),De(d,"RID",C),De(d,"AID",a.K),Bs(a,d),a.u&&a.o&&ca(d,a.u,a.o),C=new rn(a,a.j,C,a.D+1),a.u===null&&(C.J=a.o),l&&(a.i=l.G.concat(a.i)),l=ec(a,C,1e3),C.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),aa(a.h,C),ra(C,d,l)}function Bs(a,l){a.H&&ii(a.H,function(C,d){De(l,d,C)}),a.l&&ii({},function(C,d){De(l,d,C)})}function ec(a,l,C){C=Math.min(a.i.length,C);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let se=-1;for(;;){const Fe=["count="+C];se==-1?C>0?(se=b[0].g,Fe.push("ofs="+se)):se=0:Fe.push("ofs="+se);let pe=!0;for(let xe=0;xe<C;xe++){var S=b[xe].g;const Tt=b[xe].map;if(S-=se,S<0)se=Math.max(0,b[xe].g-100),pe=!1;else try{S="req"+S+"_"||"";try{var J=Tt instanceof Map?Tt:Object.entries(Tt);for(const[Un,Bn]of J){let un=Bn;B(Bn)&&(un=Xo(Bn)),Fe.push(S+Un+"="+encodeURIComponent(un))}}catch(Un){throw Fe.push(S+"type="+encodeURIComponent("_badmap")),Un}}catch{d&&d(Tt)}}if(pe){J=Fe.join("&");break e}}J=void 0}return a=a.i.splice(0,C),l.G=a,J}function tc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Te||E(),Ee||(Te(),Ee=!0),A.add(l,a),a.A=0}}function ha(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Wr(c(a.Da,a),sc(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,nc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Wr(c(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),fi(this),nc(this))};function Ca(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nc(a){a.g=new rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=wt(a.na);De(l,"RID","rpc"),De(l,"SID",a.M),De(l,"AID",a.K),De(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&De(l,"TO",a.ia),De(l,"TYPE","xmlhttp"),Bs(a,l),a.u&&a.o&&ca(l,a.u,a.o),a.O&&(a.g.H=a.O);var C=a.g;a=a.ba,C.M=1,C.A=li(wt(l)),C.u=null,C.R=!0,Pu(C,a)}r.Va=function(){this.C!=null&&(this.C=null,fi(this),ha(this),We(19))};function pi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rc(a,l){var C=null;if(a.g==l){pi(a),Ca(a),a.g=null;var d=2}else if(oa(a.h,l))C=l.G,ku(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){C=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;d=Bi(),$e(d,new Tu(d,C)),di(a)}else tc(a);else if(b=l.m,b==3||b==0&&l.X>0||!(d==1&&kd(a,l)||d==2&&ha(a)))switch(C&&C.length>0&&(l=a.h,l.i=l.i.concat(C)),b){case 1:Hn(a,5);break;case 4:Hn(a,10);break;case 3:Hn(a,6);break;default:Hn(a,2)}}}function sc(a,l){let C=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(C*=2),C*l}function Hn(a,l){if(a.j.info("Error code "+l),l==2){var C=c(a.bb,a),d=a.Ua;const b=!d;d=new sn(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||es(d,"https"),li(d),b?Pd(d.toString(),C):Sd(d.toString(),C)}else We(2);a.I=0,a.l&&a.l.pa(l),ic(a),Xu(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function ic(a){if(a.I=0,a.ja=[],a.l){const l=xu(a.h);(l.length!=0||a.i.length!=0)&&(v(a.ja,l),v(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function oc(a,l,C){var d=C instanceof sn?wt(C):new sn(C);if(d.g!="")l&&(d.g=l+"."+d.g),ts(d,d.u);else{var b=o.location;d=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const S=new sn(null);d&&es(S,d),l&&(S.g=l),b&&ts(S,b),C&&(S.h=C),d=S}return C=a.G,l=a.wa,C&&l&&De(d,C,l),De(d,"VER",a.ka),Bs(a,d),d}function ac(a,l,C){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new ve(new ua({ab:C})):new ve(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bc(){}r=Bc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function gi(){}gi.prototype.g=function(a,l){return new Bt(a,l)};function Bt(a,l){Je.call(this),this.g=new Yu(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new fr(this)}f(Bt,Je),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){la(this.g)},Bt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var C={};C.__data__=a,a=C}else this.v&&(C={},C.__data__=Xo(a),a=C);l.i.push(new yd(l.Ya++,a)),l.I==3&&di(l)},Bt.prototype.N=function(){this.g.l=null,delete this.j,la(this.g),delete this.g,Bt.Z.N.call(this)};function uc(a){Zo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const C in l){a=C;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}f(uc,Zo);function cc(){ea.call(this),this.status=1}f(cc,ea);function fr(a){this.g=a}f(fr,Bc),fr.prototype.ra=function(){$e(this.g,"a")},fr.prototype.qa=function(a){$e(this.g,new uc(a))},fr.prototype.pa=function(a){$e(this.g,new cc)},fr.prototype.oa=function(){$e(this.g,"b")},gi.prototype.createWebChannel=gi.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Rh=function(){return new gi},vh=function(){return Bi()},Ah=Vn,Ma={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ui.NO_ERROR=0,ui.TIMEOUT=8,ui.HTTP_ERROR=6,Ni=ui,Au.COMPLETE="complete",Th=Au,Du.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",Je.prototype.listen=Je.prototype.J,ls=Du,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,wh=ve}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var ge,x=(ge=class{},G(ge,"FOLD_CASE",1),G(ge,"LITERAL",2),G(ge,"CLASS_NL",4),G(ge,"DOT_NL",8),G(ge,"ONE_LINE",16),G(ge,"NON_GREEDY",32),G(ge,"PERL_X",64),G(ge,"UNICODE_GROUPS",128),G(ge,"WAS_DOLLAR",256),G(ge,"LOOKBEHIND",512),G(ge,"MATCH_NL",ge.CLASS_NL|ge.DOT_NL),G(ge,"PERL",ge.CLASS_NL|ge.ONE_LINE|ge.PERL_X|ge.UNICODE_GROUPS),G(ge,"POSIX",0),G(ge,"UNANCHORED",0),G(ge,"ANCHOR_START",1),G(ge,"ANCHOR_BOTH",2),ge);const dr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ts=128,Ga=new Int32Array(Ts),Ha=new Int32Array(Ts),_i=65535;for(let r=0;r<Ts;r++)r>=97&&r<=122?Ga[r]=r-32:Ga[r]=r,r>=65&&r<=90?Ha[r]=r+32:Ha[r]=r;var Na,O=(Na=class{static toUpperCase(r){if(r<Ts)return Ga[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>_i?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>_i?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<Ts)return Ha[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>_i?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>_i?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},G(Na,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Na),p=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const bh=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)bh[e.charCodeAt(r)]=r;const Ph=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=bh[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},m=(r,e)=>{const t=Ph(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},mg=r=>{const e=Ph(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Di=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},hn,tt=(hn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=mg("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new p(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},G(hn,"_CASE_ORBIT",null),G(hn,"_Print",null),G(hn,"CATEGORIES",new Di({C:()=>new p(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(m("AfgDgB",!0)),Cf:()=>new p(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(m("gg2B--B",!0)),L:()=>new p(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(m("ohIA",!0)),Zp:()=>new p(m("phIA",!0)),Zs:()=>new p(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(m("wBJIFbF",!0)),Alphabetic:()=>new p(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(hn,"SCRIPTS",new Di({Adlam:()=>new p(m("go6DrCFJFB",!0)),Ahom:()=>new p(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(m("ggxCmS",!0)),Arabic:()=>new p(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(m("g4iC1BEG",!0)),Balinese:()=>new p(m("g4GsCCxB",!0)),Bamum:()=>new p(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(m("w26CdDF",!0)),Batak:()=>new p(m("g+GzBJD",!0)),Bengali:()=>new p(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(m("g17CYDY",!0)),Bhaiksuki:()=>new p(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(m("qXB6wLqBxDf",!0)),Brahmi:()=>new p(m("ggkCtCFjBKA",!0)),Braille:()=>new p(m("ggK-H",!0)),Buginese:()=>new p(m("gwGbDB",!0)),Buhid:()=>new p(m("g6FT",!0)),Canadian_Aboriginal:()=>new p(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(m("g1gCwB",!0)),Caucasian_Albanian:()=>new p(m("wphCzBMA",!0)),Chakma:()=>new p(m("gokC0BCR",!0)),Cham:()=>new p(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(m("w9jCb",!0)),Common:()=>new p(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(m("ifNxkKzDGG",!0)),Cuneiform:()=>new p(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(m("w8rCiD",!0)),Cyrillic:()=>new p(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(m("gghCvC",!0)),Devanagari:()=>new p(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(m("ggmC7B",!0)),Duployan:()=>new p(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(m("ggsC1iBL68D",!0)),Elbasan:()=>new p(m("gohCnB",!0)),Elymaic:()=>new p(m("g-jCW",!0)),Ethiopic:()=>new p(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(m("gqjClBEcJB",!0)),Georgian:()=>new p(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(m("w5gCa",!0)),Grantha:()=>new p(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(m("go4C5B",!0)),Han:()=>new p(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(m("gojCnBJJ",!0)),Hanunoo:()=>new p(m("g5FU",!0)),Hatran:()=>new p(m("gniCSCBGE",!0)),Hebrew:()=>new p(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(m("giiCVCI",!0)),Inherited:()=>new p(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(m("g6iCVDH",!0)),Javanese:()=>new p(m("gsqBtCDJFB",!0)),Kaithi:()=>new p(m("gkkCiCLA",!0)),Kannada:()=>new p(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(m("goqBtBCA",!0)),Kharoshthi:()=>new p(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(m("g8F9CDJHJnPf",!0)),Khojki:()=>new p(m("gwkCRCuB",!0)),Khudawadi:()=>new p(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(m("gq7C5B",!0)),Lao:()=>new p(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(m("ggH3BEOEC",!0)),Limbu:()=>new p(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(m("gwhC2JKVLH",!0)),Linear_B:()=>new p(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(m("wmpBvBx1eA",!0)),Lycian:()=>new p(m("g0gCc",!0)),Lydian:()=>new p(m("gpiCZGA",!0)),Mahajani:()=>new p(m("wqkCmB",!0)),Makasar:()=>new p(m("g3nCY",!0)),Malayalam:()=>new p(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(m("giCbDA",!0)),Manichaean:()=>new p(m("g2iCmBFL",!0)),Marchen:()=>new p(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(m("gy7C6C",!0)),Meetei_Mayek:()=>new p(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(m("gsiCf",!0)),Miao:()=>new p(m("g47CqCF4BIQ",!0)),Modi:()=>new p(m("gwlCkCMJ",!0)),Mongolian:()=>new p(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(m("gy6CeCJFB",!0)),Multani:()=>new p(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(m("gkiCeJI",!0)),Nag_Mundari:()=>new p(m("wm5DpB",!0)),Nandinagari:()=>new p(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(m("gsGrBFZHKEB",!0)),Newa:()=>new p(m("gglC7CCE",!0)),Nko:()=>new p(m("g+B6BDC",!0)),Nushu:()=>new p(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(m("go4DsBENDJFB",!0)),Ogham:()=>new p(m("g0Fc",!0)),Ol_Chiki:()=>new p(m("wiHvB",!0)),Ol_Onal:()=>new p(m("wu5DqBFA",!0)),Old_Hungarian:()=>new p(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(m("g0iCf",!0)),Old_Permic:()=>new p(m("w6gCqB",!0)),Old_Persian:()=>new p(m("g9gCjBFN",!0)),Old_Sogdian:()=>new p(m("g4jCnB",!0)),Old_South_Arabian:()=>new p(m("gziCf",!0)),Old_Turkic:()=>new p(m("ggjCoC",!0)),Old_Uyghur:()=>new p(m("w7jCZ",!0)),Oriya:()=>new p(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(m("wlhCjBFjB",!0)),Osmanya:()=>new p(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(m("gjiCf",!0)),Pau_Cin_Hau:()=>new p(m("g2mC4B",!0)),Phags_Pa:()=>new p(m("giqB3B",!0)),Phoenician:()=>new p(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(m("g8iCRIDNG",!0)),Rejang:()=>new p(m("wpqBjBMA",!0)),Runic:()=>new p(m("g1FqCEK",!0)),Samaritan:()=>new p(m("ggCtBDO",!0)),Saurashtra:()=>new p(m("gkqBlCJL",!0)),Sharada:()=>new p(m("gskC-ChsCH",!0)),Shavian:()=>new p(m("wihCvB",!0)),Siddham:()=>new p(m("gslC1BDlB",!0)),Sidetic:()=>new p(m("gqiCZ",!0)),SignWriting:()=>new p(m("gg2DrUQECO",!0)),Sinhala:()=>new p(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(m("w5jCpB",!0)),Sora_Sompeng:()=>new p(m("wmkCYIJ",!0)),Soyombo:()=>new p(m("wymCyC",!0)),Sundanese:()=>new p(m("g8G-BhIH",!0)),Sunuwar:()=>new p(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(m("ggqBsB",!0)),Syriac:()=>new p(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(m("g4FVKA",!0)),Tagbanwa:()=>new p(m("g7FMCCCB",!0)),Tai_Le:()=>new p(m("wqGdDE",!0)),Tai_Tham:()=>new p(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(m("g0qBiCZE",!0)),Tai_Yo:()=>new p(m("g25DeCVJB",!0)),Takri:()=>new p(m("g0lC5BHJ",!0)),Tamil:()=>new p(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(m("wz6CuCCJ",!0)),Tangut:()=>new p(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(m("g8BxB",!0)),Thai:()=>new p(m("hwD5BGb",!0)),Tibetan:()=>new p(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(m("wpL3BIBPA",!0)),Tirhuta:()=>new p(m("gklCnCJJ",!0)),Todhri:()=>new p(m("guhCzB",!0)),Tolong_Siki:()=>new p(m("wtnCrBFJ",!0)),Toto:()=>new p(m("w04De",!0)),Tulu_Tigalari:()=>new p(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(m("g8gCdCA",!0)),Unknown:()=>new p(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(m("gopBrJ",!0)),Vithkuqi:()=>new p(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(m("g24D5BGA",!0)),Warang_Citi:()=>new p(m("glmCyCNA",!0)),Yezidi:()=>new p(m("g0jCpBCCDB",!0)),Yi:()=>new p(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(m("gwmCnC",!0))})),G(hn,"FOLD_CATEGORIES",new Di({L:()=>new p(m("laA",!0)),LC:()=>new p(m("laA",!0)),Ll:()=>new p(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(m("5cgBgBlgHAB",!1)),Mn:()=>new p(m("5cgBgBlgHAB",!1)),Emoji:()=>new p(m("8mJA",!0)),Extended_Pictographic:()=>new p(m("8mJA",!0)),Lowercase:()=>new p(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(hn,"FOLD_SCRIPT",new Di({Common:()=>new p(m("8cgBgB",!1)),Greek:()=>new p(m("1FwUwU",!1)),Inherited:()=>new p(m("5cgBgBlgHAB",!1))})),hn),me,K=(me=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=me.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&me.is32(e,t)}static isUpper(e){if(e<=me.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return me.is(tt.Upper,e)}static isPrint(e){return e<=me.MAX_LATIN1?e>=32&&e<me.MAX_ASCII||e>=161&&e!==173:me.is(tt.Print,e)}static simpleFold(e){if(tt.CASE_ORBIT.has(e))return tt.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=me.MAX_ASCII&&t<=me.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=me.simpleFold(e);n!==e;n=me.simpleFold(n))if(n===t)return!0;return!1}},G(me,"MAX_RUNE",1114111),G(me,"MAX_ASCII",127),G(me,"MAX_LATIN1",255),G(me,"MAX_BMP",65535),G(me,"MIN_FOLD",65),G(me,"MAX_FOLD",125251),G(me,"MIN_HIGH_SURROGATE",55296),G(me,"MAX_HIGH_SURROGATE",56319),G(me,"MIN_LOW_SURROGATE",56320),G(me,"MAX_LOW_SURROGATE",57343),G(me,"MIN_SUPPLEMENTARY_CODE_POINT",65536),me);const hB=256,Sh=new Uint8Array(hB);for(let r=0;r<hB;r++)Sh[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let _a=null,Da=null;var Ie,$=(Ie=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(K.isPrint(e))Ie.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>K.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<hB?Sh[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Ie.EMPTY_BEGIN_TEXT|Ie.EMPTY_BEGIN_LINE),e===10&&(n|=Ie.EMPTY_BEGIN_LINE),t<0&&(n|=Ie.EMPTY_END_TEXT|Ie.EMPTY_END_LINE),t===10&&(n|=Ie.EMPTY_END_LINE),Ie.isWordRune(e)!==Ie.isWordRune(t)?n|=Ie.EMPTY_WORD_BOUNDARY:n|=Ie.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Ie.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>K.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return _a||(_a=new TextEncoder),_a.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===K.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===K.MIN_LOW_SURROGATE?(i=K.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Da||(Da=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Da.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],u=e[n++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-K.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(K.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(K.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},G(Ie,"METACHARACTERS","\\.+*?()|[]{}^$"),G(Ie,"EMPTY_BEGIN_LINE",1),G(Ie,"EMPTY_END_LINE",2),G(Ie,"EMPTY_BEGIN_TEXT",4),G(Ie,"EMPTY_END_TEXT",8),G(Ie,"EMPTY_WORD_BOUNDARY",16),G(Ie,"EMPTY_NO_WORD_BOUNDARY",32),G(Ie,"EMPTY_ALL",-1),Ie);const Oh=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var _n,nr=(_n=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===_n.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===_n.Encoding.UTF_16}},G(_n,"Encoding",Oh(["UTF_16","UTF_8"])),_n),yc=class extends nr{constructor(r=null){super(),this.bytes=r}getEncoding(){return nr.Encoding.UTF_8}asCharSequence(){return $.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},Eg=class extends nr{constructor(r=null){super(),this.charSequence=r}getEncoding(){return nr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return $.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Kn=class{static utf16(r){return new Eg(r)}static utf8(r){return $.isByteArray(r)?new yc(r):new yc($.stringToUtf8ByteArray(r))}},Xe=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},_g=class extends Xe{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return Xe.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return $.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=r.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&r[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<n;c++)if(r[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(r){return r.prefixUTF8.length}},Dg=class extends Xe{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return Xe.EOF();const e=this.charSequence.charCodeAt(r);if(e<K.MIN_HIGH_SURROGATE||e>K.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=K.MIN_LOW_SURROGATE&&t<=K.MAX_LOW_SURROGATE?(e-K.MIN_HIGH_SURROGATE)*1024+(t-K.MIN_LOW_SURROGATE)+K.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return $.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},ye=class{static fromUTF8(r,e=0,t=r.length){return new _g(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new Dg(r,e,t)}},qs=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},_e=class extends qs{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},yg=class extends qs{constructor(r){super(r),this.name="RE2JSCompileException"}},et=class extends qs{constructor(r){super(r),this.name="RE2JSGroupException"}},Ig=class extends qs{constructor(r){super(r),this.name="RE2JSFlagsException"}},fs=class extends qs{constructor(r){super(r),this.name="RE2JSInternalException"}},$n,Ic=($n=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===O.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof nr?this.resetMatcherInput(t):$.isByteArray(t)?this.resetMatcherInput(Kn.utf8(t)):this.resetMatcherInput(Kn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof nr||($.isByteArray(e)?e=Kn.utf8(e):e=Kn.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new et(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new et(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new et(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new et("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new et(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new et("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new et("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,x.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,x.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new et(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ye.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ye.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,x.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?$.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new et("character to be escaped is missing");n=i,i++;continue}if(o===O.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new et("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const f=e.codePointAt(c);if(f<O.CODES.get("0")||f>O.CODES.get("9")||u*10+f-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-O.CODES.get("0")}if(u>this.patternGroupCount)throw new et(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,n=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new et("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,n=i}else throw new et("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(O.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,n=i+1;continue}else if(O.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(O.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,n=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),n=i,i--;continue}else if(o===O.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),n=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;n=B+1,i=B;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=$n.MAX_REPLACER_ARGS)throw new et("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,n);return s+=String(e(...B)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},G($n,"MAX_REPLACER_ARGS",65535),$n),Be,N=(Be=class{static isRuneOp(e){return Be.RUNE<=e&&e<=Be.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=$.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?K.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?K.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Be.ALT:return`alt -> ${this.out}, ${this.arg}`;case Be.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Be.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Be.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Be.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Be.FAIL:return"fail";case Be.NOP:return`nop -> ${this.out}`;case Be.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Be.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Be.RUNE:return this.runes===null?"rune <null>":["rune ",Be.escapeRunes(this.runes),this.arg&x.FOLD_CASE?"/i":""," -> ",this.out].join("");case Be.RUNE1:return`rune1 ${Be.escapeRunes(this.runes)} -> ${this.out}`;case Be.RUNE_ANY:return`any -> ${this.out}`;case Be.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(Be,"ALT",1),G(Be,"ALT_MATCH",2),G(Be,"CAPTURE",3),G(Be,"EMPTY_WIDTH",4),G(Be,"FAIL",5),G(Be,"MATCH",6),G(Be,"NOP",7),G(Be,"RUNE",8),G(Be,"RUNE1",9),G(Be,"RUNE_ANY",10),G(Be,"RUNE_ANY_NOT_NL",11),G(Be,"LB_WRITE",12),G(Be,"LB_CHECK",13),Be),wc=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},wg=class Ua{static fromRE2(e){const t=new Ua;return t.prog=e.prog,t.re2=e,t.q0=new wc(t.prog.numInst()),t.q1=new wc(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return Ua.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?$.emptyInts():$.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===$.EMPTY_ALL||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,g=-1,y=0;c!==Xe.EOF()&&(c=e.step(i+f),g=c>>3,y=c&7);let v;for(i===0?v=$.emptyOpContext(-1,h):v=e.context(i);;){if(B.isEmpty()){if(s&$.EMPTY_BEGIN_TEXT&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&g!==this.re2.prefixRune&&e.canCheckPrefix()){const j=e.index(this.re2,i);if(j<0)break;i+=j,c=e.step(i),h=c>>3,f=c&7,c=e.step(i+f),g=c>>3,y=c&7,v=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let j=0;j<this.prog.lbStarts.length;j++)this.add(B,this.prog.lbStarts[j],i,this.matchcap,0,v);!this.matched&&(i===0||n===x.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,v));const L=i+f;if(v=e.context(L),this.step(B,u,i,L,h,v,n,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=g,f=y,h!==-1&&(c=e.step(i+f),g=c>>3,y=c&7);const M=B;B=u,u=M}return u.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===$.EMPTY_ALL)return[];if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,g=-1,y=0;c!==Xe.EOF()&&(c=e.step(i+f),g=c>>3,y=c&7);let v=i===0?$.emptyOpContext(-1,h):e.context(i);const L=new Set;for(;!(B.isEmpty()&&(s&$.EMPTY_BEGIN_TEXT&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let ne=0;ne<this.prog.lbStarts.length;ne++)this.add(B,this.prog.lbStarts[ne],i,this.matchcap,0,v);(i===0||n===x.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,v);const M=i+f;v=e.context(M);for(let ne=0;ne<B.size;ne++){const he=B.densePcs[ne],Ce=this.prog.inst[he],Te=ne*this.ncap;let Ee=!1;switch(Ce.op){case N.MATCH:if(n===x.ANCHOR_BOTH&&i!==e.endPos())break;L.add(Ce.arg);break;case N.RUNE:Ee=Ce.matchRune(h);break;case N.RUNE1:Ee=h===Ce.runes[0];break;case N.RUNE_ANY:Ee=!0;break;case N.RUNE_ANY_NOT_NL:Ee=h!==10;break;default:continue}Ee&&this.add(u,Ce.out,M,B.denseCaps,Te,v)}if(B.clear(),f===0)break;i+=f,h=g,f=y,h!==-1&&(c=e.step(i+f),g=c>>3,y=c&7);const j=B;B=u,u=j}return u.clear(),Array.from(L).sort((M,j)=>M-j)}step(e,t,n,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],g=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[g])continue;const y=this.prog.inst[f];let v=!1;switch(y.op){case N.MATCH:if(B===x.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<n)){e.denseCaps[g+1]=n;for(let L=0;L<this.ncap;L++)this.matchcap[L]=e.denseCaps[g+L]}c||(e.size=0),this.matched=!0;break;case N.RUNE:v=y.matchRune(i);break;case N.RUNE1:v=i===y.runes[0];break;case N.RUNE_ANY:v=!0;break;case N.RUNE_ANY_NOT_NL:v=i!==10;break;default:continue}v&&this.add(t,y.out,s,e.denseCaps,g,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,n,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=n,this.add(e,u.out,n,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=n,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===n){t=u.out;continue}}else if(this.lbTable[-u.arg]!==n){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new fs("unhandled")}}}};const Tc=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},Tg=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var Ag=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(K.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(K.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},qt,vg=(qt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/qt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const B=n.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:n.push(u.out),n.push(u.arg);break;case N.NOP:case N.CAPTURE:n.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=Tc(n);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(Tg(u.nfaStates,n))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=qt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new Ag(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=Tc(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=K.MAX_LATIN1)if(n===x.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===x.UNANCHORED?0:K.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}n===x.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=K.MAX_LATIN1)n===x.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===x.UNANCHORED?0:K.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===x.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=n===x.UNANCHORED&&u<=K.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===x.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==x.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(n===x.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(f=>o.add(f)):c.matchIDs.forEach(f=>o.add(f)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,f=c&7;if(f===0)break;if(i=n===x.UNANCHORED&&h<=K.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,u+=f,B(i,u),i.nfaStates.length===0&&n!==x.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},G(qt,"MAX_CACHE_CLEARS",5),G(qt,"STATE_MEMORY_ESTIMATE",838),qt);const Rg=32,bg=500,ya=256,Pg=256*1024;var Sg=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(ya),this.jobArg=new Uint8Array(ya),this.jobPos=new Int32Array(ya),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+Rg-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==N.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=r.prog.getInst(o);switch(h.op){case N.FAIL:throw new fs("unexpected InstFail");case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(r,o,u,!0),o=h.out;continue}case N.ALT_MATCH:{const f=r.prog.getInst(h.out);if(N.isRuneOp(f.op)){this.push(r,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(r,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const f=e.step(u);if(f===Xe.EOF()||!h.matchRune(f>>3))break;u+=f&7,o=h.out;continue}case N.RUNE1:{const f=e.step(u);if(f===Xe.EOF()||f>>3!==h.runes[0])break;u+=f&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===Xe.EOF()||f>>3===10)break;u+=f&7,o=h.out;continue}case N.RUNE_ANY:{const f=e.step(u);if(f===Xe.EOF())break;u+=f&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(r,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case N.EMPTY_WIDTH:{const f=e.context(u);if(h.arg&~f)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===x.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new fs("Backtracker cannot evaluate Lookbehind instructions");default:throw new fs("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const yi=[];var Ii=class Nh{static shouldBacktrack(e){return e.numInst()<=bg}static maxBitStateLen(e){return Nh.shouldBacktrack(e)?Math.floor(Pg/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===$.EMPTY_ALL||(s===x.ANCHOR_START||s===x.ANCHOR_BOTH)&&n!==0||o&$.EMPTY_BEGIN_TEXT&&n!==0)return null;const B=yi.length>0?yi.pop():new Sg,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if(o&$.EMPTY_BEGIN_TEXT||s===x.ANCHOR_START||s===x.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(c=!0);else{let f=-1;for(;n<=u&&f!==0;n+=f){if(e.prefix.length>0){const y=t.index(e,n);if(y<0)break;n+=y}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){c=!0;break}const g=t.step(n);f=g===Xe.EOF()?0:g&7}}if(!c)return yi.push(B),null;const h=i===0?[]:$.toArray(B.matchcap.subarray(0,i));return yi.push(B),h}},Ac=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const Og=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,f=-1;const g=y=>{const v=y?r:e,L=y?o:B,M=y?t:n;return f>0&&v[L]<=u[f]?!1:(u.push(v[L],v[L+1]),y?o+=2:B+=2,f+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=g(!0):o>=s||e[B]<r[o]?h=g(!1):h=g(!0),!h)return null;return{merged:u,next:c}};var Ng=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new N(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const Fg=r=>{const e=new Ng(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==N.ALT&&n.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=n[s]),n[s]===o[u]&&(n[i]=o[c])}return e},Lg=r=>{if(r.inst.length>=1e3)return null;const e=new Ac(r.inst.length),t=new Ac(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const u=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const v=u.out;u.out=u.arg,u.arg=v;const L=c;c=h,h=L}c&&(s[o]=!0,u.op=N.ALT_MATCH);const f=n[u.out]||[],g=n[u.arg]||[],y=Og(f,g,u.out,u.arg);if(!y)return!1;n[o]=y.merged,u.next=new Uint32Array(y.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],n[o]=n[u.out]?n[u.out].slice():[],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){n[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&u.arg&x.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=K.simpleFold(h);f!==h;f=K.simpleFold(f))c.push(f,f);c.sort((f,g)=>f-g)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if(u.arg&x.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=K.simpleFold(h);f!==h;f=K.simpleFold(f))c.push(f,f);c.sort((f,g)=>f-g)}else c.push(u.runes[0],u.runes[0]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,K.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,9,11,K.MAX_RUNE],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},kg=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:r.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var vc=class Fh{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&$.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&$.EMPTY_END_TEXT)===$.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&n)return null;break}}let s=Fg(e);return s=Lg(s),s!==null&&kg(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(n),h=c>>3,f=c&7,g=Xe.EOF(),y=-1,v=0;c!==Xe.EOF()&&(g=t.step(n+f),g!==Xe.EOF()&&(y=g>>3,v=g&7));let L=n===0?$.emptyOpContext(-1,h):t.context(n),M=o.start,j;for(;;){switch(j=o.inst[M],M=j.out,j.op){case N.MATCH:return s===x.ANCHOR_BOTH&&n!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:$.toArray(B));case N.RUNE:if(!j.matchRune(h))return null;break;case N.RUNE1:if(h!==j.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:M=Fh.next(j,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(j.arg&~L)return null;continue;case N.CAPTURE:j.arg<B.length&&(B[j.arg]=n);continue;default:throw new fs("bad inst")}if(f===0)break;L=$.emptyOpContext(h,y),n+=f,h=y,f=v,h!==-1&&(g=t.step(n+f),g!==Xe.EOF()?(y=g>>3,v=g&7):(y=-1,v=0))}return u?i===0?[]:$.toArray(B):null}},W,w=(W=class{static isPseudoOp(e){return e>=W.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new W(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=W.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=W.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case W.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case W.Op.EMPTY_MATCH:e+="(?:)";break;case W.Op.STAR:case W.Op.PLUS:case W.Op.QUEST:case W.Op.REPEAT:{const t=this.subs[0];switch(t.op>W.Op.CAPTURE||t.op===W.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case W.Op.STAR:e+="*";break;case W.Op.PLUS:e+="+";break;case W.Op.QUEST:e+="?";break;case W.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&x.NON_GREEDY&&(e+="?");break}case W.Op.CONCAT:for(let t of this.subs)t.op===W.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case W.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case W.Op.LITERAL:this.flags&x.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=$.escapeRune(t);this.flags&x.FOLD_CASE&&(e+=")");break;case W.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case W.Op.ANY_CHAR:e+="(?s:.)";break;case W.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case W.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case W.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==W.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case W.Op.BEGIN_TEXT:e+="\\A";break;case W.Op.END_TEXT:this.flags&x.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case W.Op.BEGIN_LINE:e+="^";break;case W.Op.END_LINE:e+="$";break;case W.Op.WORD_BOUNDARY:e+="\\b";break;case W.Op.NO_WORD_BOUNDARY:e+="\\B";break;case W.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===K.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=W.quoteIfHyphen(n),e+=$.escapeRune(n),n!==s&&(e+="-",e+=W.quoteIfHyphen(s),e+=$.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=W.quoteIfHyphen(n),e+=$.escapeRune(n),n!==s&&(e+="-",e+=W.quoteIfHyphen(s),e+=$.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===W.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof W)||this.op!==e.op)return!1;switch(this.op){case W.Op.END_TEXT:if((this.flags&x.WAS_DOLLAR)!==(e.flags&x.WAS_DOLLAR))return!1;break;case W.Op.LITERAL:case W.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case W.Op.ALTERNATE:case W.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case W.Op.STAR:case W.Op.PLUS:case W.Op.QUEST:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case W.Op.REPEAT:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case W.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case W.Op.PLB:case W.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},G(W,"Op",Oh(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),W),Rc=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},bt,le=(bt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case bt.Type.NONE:return!0;case bt.Type.EXACT:return e.hasString(this,t);case bt.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case bt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},G(bt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),bt),xg=class Jt{static build(e){const t=Jt.fromRegexp(e);return Jt.simplify(t)}static fromRegexp(e){if(!e)return new le(le.Type.NONE);switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.NO_MATCH:case w.Op.EMPTY_MATCH:case w.Op.BEGIN_LINE:case w.Op.END_LINE:case w.Op.BEGIN_TEXT:case w.Op.END_TEXT:case w.Op.WORD_BOUNDARY:case w.Op.NO_WORD_BOUNDARY:case w.Op.CHAR_CLASS:case w.Op.ANY_CHAR_NOT_NL:case w.Op.ANY_CHAR:return new le(le.Type.NONE);case w.Op.LITERAL:{if(e.runes.length===0||e.flags&x.FOLD_CASE)return new le(le.Type.NONE);const t=new le(le.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=$.stringToUtf8ByteArray(t.str),t}case w.Op.CAPTURE:case w.Op.PLUS:return Jt.fromRegexp(e.subs[0]);case w.Op.REPEAT:return e.min>=1?Jt.fromRegexp(e.subs[0]):new le(le.Type.NONE);case w.Op.CONCAT:{const t=new le(le.Type.AND);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}case w.Op.ALTERNATE:{const t=new le(le.Type.OR);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}default:return new le(le.Type.NONE)}}static simplify(e){if(e.type===le.Type.EXACT||e.type===le.Type.NONE)return e;if(e.type===le.Type.AND){const t=[];for(const n of e.subs){const s=Jt.simplify(n);if(s.type!==le.Type.NONE)if(s.type===le.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new le(le.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===le.Type.OR){const t=[];for(const o of e.subs){const B=Jt.simplify(o);if(B.type===le.Type.NONE)return new le(le.Type.NONE);if(B.type===le.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new le(le.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===le.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==le.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Rc(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new Rc(s.map(o=>o.bytes))),e}return e}},dt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},Vg=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new N(r))}skipNop(r){let e=this.inst[r];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,r];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&x.FOLD_CASE);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:r|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new dt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},wi=class{constructor(r=0,e=new dt,t=!1){this.i=r,this.out=e,this.nullable=t}},Mg=class gr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,K.MAX_RUNE]}static ANY_RUNE(){return[0,K.MAX_RUNE]}static compileRegexp(e){const t=new gr,n=t.compile(e);return t.prog.patch(n.out,t.newInst(N.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new gr;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new Vg,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new wi(this.prog.numInst()-1,new dt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new dt(e.i<<1,e.i<<1),e}fail(){return new wi}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new dt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new wi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new dt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new dt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new dt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new dt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new wi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new dt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(N.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=x.FOLD_CASE,(e.length!==1||K.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new dt(n.i<<1,n.i<<1),!(t&x.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===K.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===K.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(N.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(gr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new dt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(gr.ANY_RUNE_NOT_NL(),0);case w.Op.ANY_CHAR:return this.rune(gr.ANY_RUNE(),0);case w.Op.BEGIN_LINE:return this.empty($.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty($.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty($.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty($.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty($.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty($.EMPTY_NO_WORD_BOUNDARY);case w.Op.PLB:case w.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case w.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case w.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case w.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case w.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new yg("regexp: unhandled case in compile")}}},Gg=class ut{static simplify(e){if(e===null)return null;switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const t=ut.simplify(e.subs[0]);if(t!==e.subs[0]){const n=w.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=ut.simplify(i);if(o!==i&&(n=!0),e.op===w.Op.CONCAT){if(o.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(o.op===w.Op.EMPTY_MATCH){n=!0;continue}if(o.op===w.Op.CONCAT){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===w.Op.ALTERNATE){if(o.op===w.Op.NO_MATCH){n=!0;continue}if(o.op===w.Op.ALTERNATE){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(n){if(t.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(t.length===1)return t[0];const s=w.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case w.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new w(w.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?new w(w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE?new w(w.Op.ANY_CHAR_NOT_NL):e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:{const t=ut.simplify(e.subs[0]);return ut.simplify1(e.op,e.flags,t,e)}case w.Op.REPEAT:{if(e.min===0&&e.max===0)return new w(w.Op.EMPTY_MATCH);const t=ut.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return ut.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return ut.simplify1(w.Op.PLUS,e.flags,t,null);const s=new w(w.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(ut.simplify1(w.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),ut.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=ut.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new w(w.Op.CONCAT);o.subs=[t,s],s=ut.simplify1(w.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new w(w.Op.CONCAT);return s.subs=n.slice(0),ut.simplify(s)}return new w(w.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===w.Op.EMPTY_MATCH)return n;if(n.op===w.Op.NO_MATCH)return e===w.Op.PLUS?n:new w(w.Op.EMPTY_MATCH);if(e===n.op&&(t&x.NON_GREEDY)===(n.flags&x.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&x.NON_GREEDY)===(t&x.NON_GREEDY)&&n===s.subs[0])return s;const i=new w(e);return i.flags=t,i.subs=[n],i}},ce=class{constructor(r,e){this.sign=r,this.cls=e}};const bc=[48,57],Pc=[9,10,12,13,32,32],Sc=[48,57,65,90,95,95,97,122],Oc=new Map([["\\d",new ce(1,bc)],["\\D",new ce(-1,bc)],["\\s",new ce(1,Pc)],["\\S",new ce(-1,Pc)],["\\w",new ce(1,Sc)],["\\W",new ce(-1,Sc)]]),Nc=[48,57,65,90,97,122],Fc=[65,90,97,122],Lc=[0,127],kc=[9,9,32,32],xc=[0,31,127,127],Vc=[48,57],Mc=[33,126],Gc=[97,122],Hc=[32,126],Uc=[33,47,58,64,91,96,123,126],Jc=[9,13,32,32],jc=[65,90],qc=[48,57,65,90,95,95,97,122],Kc=[48,57,65,70,97,102],zc=new Map([["[:alnum:]",new ce(1,Nc)],["[:^alnum:]",new ce(-1,Nc)],["[:alpha:]",new ce(1,Fc)],["[:^alpha:]",new ce(-1,Fc)],["[:ascii:]",new ce(1,Lc)],["[:^ascii:]",new ce(-1,Lc)],["[:blank:]",new ce(1,kc)],["[:^blank:]",new ce(-1,kc)],["[:cntrl:]",new ce(1,xc)],["[:^cntrl:]",new ce(-1,xc)],["[:digit:]",new ce(1,Vc)],["[:^digit:]",new ce(-1,Vc)],["[:graph:]",new ce(1,Mc)],["[:^graph:]",new ce(-1,Mc)],["[:lower:]",new ce(1,Gc)],["[:^lower:]",new ce(-1,Gc)],["[:print:]",new ce(1,Hc)],["[:^print:]",new ce(-1,Hc)],["[:punct:]",new ce(1,Uc)],["[:^punct:]",new ce(-1,Uc)],["[:space:]",new ce(1,Jc)],["[:^space:]",new ce(-1,Jc)],["[:upper:]",new ce(1,jc)],["[:^upper:]",new ce(-1,jc)],["[:word:]",new ce(1,qc)],["[:^word:]",new ce(-1,qc)],["[:xdigit:]",new ce(1,Kc)],["[:^xdigit:]",new ce(-1,Kc)]]);var cn=class Cn{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=n;for(;B<=u;){for(;B<n&&Cn.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&Cn.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&Cn.qsortIntPair(e,t,u),B<n&&Cn.qsortIntPair(e,B,n)}constructor(e=$.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Cn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&x.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=K.MIN_FOLD&&t>=K.MAX_FOLD)return this.appendRange(e,t);if(t<K.MIN_FOLD||e>K.MAX_FOLD)return this.appendRange(e,t);e<K.MIN_FOLD&&(this.appendRange(e,K.MIN_FOLD-1),e=K.MIN_FOLD),t>K.MAX_FOLD&&(this.appendRange(K.MAX_FOLD+1,t),t=K.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=K.simpleFold(n);s!==n;s=K.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=K.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=K.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Cn().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Cn.charClassToString(this.r,this.len)}},Hg=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=$.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},H,Ug=(H=class{static unicodeTable(e){return e==="Any"?{tab:H.ANY_TABLE,fold:H.ANY_TABLE,sign:1}:e==="Ascii"?{tab:H.ASCII_TABLE,fold:H.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:tt.CATEGORIES.get("Cn"),fold:tt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:tt.CATEGORIES.get("LC"),fold:tt.FOLD_CATEGORIES.get("LC"),sign:1}:tt.CATEGORIES.has(e)?{tab:tt.CATEGORIES.get(e),fold:tt.FOLD_CATEGORIES.get(e),sign:1}:tt.SCRIPTS.has(e)?{tab:tt.SCRIPTS.get(e),fold:tt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<K.MIN_FOLD||e>K.MAX_FOLD)return e;let t=e;const n=e;for(e=K.simpleFold(e);e!==n;e=K.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new w(w.Op.LITERAL);return n.flags=t,n.runes=$.stringToRunes(e),n}static parse(e,t){return new H(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=H.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=H.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new _e(H.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&K.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==O.CODES.get("_")&&!$.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===O.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:H.matchRune(t,O.CODES.get(`
`))&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:t.op===w.Op.LITERAL?e.runes=new cn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new cn(e.runes).appendClass(t.runes).toArray();break;case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new cn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new _e(H.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=n-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===O.CODES.get("}"))break;const u=$.unhex(n);if(u<0||(B=B*16+u,B>K.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=$.unhex(n);if(!e.more())break;n=e.pop();const i=$.unhex(n);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(n<=K.MAX_ASCII&&!$.isalnum(n))return n;break}throw new _e(H.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new _e(H.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?H.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(H.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>H.MAX_RUNES)throw new _e(H.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(H.MAX_SIZE/this.repeats)?this.repeats=H.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(H.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>H.MAX_SIZE)throw new _e(H.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case w.Op.LITERAL:n=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case w.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case w.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<H.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>H.MAX_HEIGHT)throw new _e(H.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&K.simpleFold(e.runes[0])===e.runes[2]&&K.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&K.simpleFold(e.runes[0])===e.runes[1]&&K.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|x.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|x.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(s.flags&x.FOLD_CASE)!==(i.flags&x.FOLD_CASE)?!1:(i.runes=H.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(w.Op.LITERAL);return n.flags=t,t&x.FOLD_CASE&&(e=H.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if(B&x.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=x.NON_GREEDY),o!==-1))throw new _e(H.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new _e(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(w.isPseudoOp(c.op))throw new _e(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===w.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new _e(H.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new cn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?(e.runes=[],e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE&&(e.runes=[],e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=n;h++){let f=null,g=0,y=0;if(h<n){let v=e[t+h];if(v.op===w.Op.CONCAT&&v.subs.length>0&&(v=v.subs[0]),v.op===w.Op.LITERAL&&(f=v.runes,g=v.runes.length,y=v.flags&x.FOLD_CASE),y===B){let L=0;for(;L<o&&L<g&&i[L]===f[L];)L++;if(L>0){o=L;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const v=this.newRegexp(w.Op.LITERAL);v.flags=B,v.runes=i.slice(0,o);for(let j=u;j<h;j++)e[t+j]=this.removeLeadingString(e[t+j],o),this.checkLimits(e[t+j]);const L=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),M=this.newRegexp(w.Op.CONCAT);M.subs=[v,L],e[s++]=M}u=h,i=f,o=g,B=y}n=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=n;h++){let f=null;if(!(h<n&&(f=H.leadingRegexp(e[t+h]),c!==null&&c.equals(f)&&(H.isCharClass(c)||c.op===w.Op.REPEAT&&c.min===c.max&&H.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const g=c;for(let L=u;L<h;L++){const M=L!==u;e[t+L]=this.removeLeadingRegexp(e[t+L],M),this.checkLimits(e[t+L])}const y=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),v=this.newRegexp(w.Op.CONCAT);v.subs=[g,y],e[s++]=v}u=h,c=f}}n=s,t=0,u=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&H.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let f=u;for(let y=u+1;y<h;y++){const v=e[t+f],L=e[t+y];(v.op<L.op||v.op===L.op&&(v.runes!==null?v.runes.length:0)<(L.runes!==null?L.runes.length:0))&&(f=y)}const g=e[t+u];e[t+u]=e[t+f],e[t+f]=g;for(let y=u+1;y<h;y++)H.mergeCharClass(e[t+u],e[t+y]),this.reuse(e[t+y]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<n&&(e[s++]=e[t+h]),u=h+1}n=s,t=0,u=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===w.Op.EMPTY_MATCH&&e[t+h+1].op===w.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===w.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&x.LITERAL)return H.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new Hg(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if(this.flags&x.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&x.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):this.flags&x.ONE_LINE?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):this.flags&x.ONE_LINE?this.op(w.Op.END_TEXT).flags|=x.WAS_DOLLAR:this.op(w.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):this.flags&x.DOT_NL?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=w.Op.STAR;break;case O.CODES.get("+"):o=w.Op.PLUS;break;case O.CODES.get("?"):o=w.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=H.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&K.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,n,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&x.PERL_X&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(w.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(w.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(w.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new _e(H.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let f=0;for(;f<c.length;){const g=c.codePointAt(f);this.literal(g),f+=$.charCount(g)}break e}case O.CODES.get("z"):this.op(w.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(w.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new cn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new cn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(H.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new _e(H.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,u=n.indexOf(">");if(u<0)throw new _e(H.ERR_INVALID_NAMED_CAPTURE,n);const c=n.substring(B,u);if(e.skipString(c),e.skip(B+1),!H.isValidCaptureName(c))throw new _e(H.ERR_INVALID_NAMED_CAPTURE,n.substring(0,u+1));const h=this.op(w.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new _e(H.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=x.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=x.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=x.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(w.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new _e(H.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&H.isCharClass(this.stack[e-1])&&H.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return H.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new _e(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new _e(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(H.hasCapture(e))throw new _e(H.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if(!(this.flags&x.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=Oc.has(s)?Oc.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&x.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=zc.has(i)?zc.get(i):null;if(o===null)throw new _e(H.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&x.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if(!(this.flags&x.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new _e(H.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=$.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(n),new _e(H.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=H.unicodeTable(o);if(B===null)throw new _e(H.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if(!(this.flags&x.FOLD_CASE)||c===null)t.appendTableWithSign(u,s);else{const h=new cn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(w.Op.CHAR_CLASS);n.flags=this.flags;const s=new cn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&x.CLASS_NL||s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&x.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new _e(H.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=H.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=H.parseClassChar(e,t),c<u)throw new _e(H.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&x.FOLD_CASE?s.appendFoldedRange(u,c):s.appendRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},G(H,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(H,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(H,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(H,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(H,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(H,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(H,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(H,"ERR_MISSING_BRACKET","missing closing ]"),G(H,"ERR_MISSING_PAREN","missing closing )"),G(H,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(H,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(H,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(H,"ERR_UNEXPECTED_PAREN","unexpected )"),G(H,"ERR_NESTING_DEPTH","expression nests too deeply"),G(H,"ERR_LARGE","expression too large"),G(H,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(H,"MAX_HEIGHT",1e3),G(H,"MAX_SIZE",3355443),G(H,"MAX_RUNES",33554432),G(H,"ANY_TABLE",new p(new Uint32Array([0,K.MAX_RUNE,1]))),G(H,"ASCII_TABLE",new p(new Uint32Array([0,127,1]))),G(H,"ASCII_FOLD_TABLE",new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),H),Jg=class jn{static initTest(e){const t=jn.compile(e),n=new jn(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return jn.compileImpl(e,x.PERL,!1)}static compilePOSIX(e){return jn.compileImpl(e,x.POSIX,!0)}static compileImpl(e,t,n){let s=Ug.parse(e,t);const i=s.maxCap();s=Gg.simplify(s);const o=xg.build(s),B=Mg.compileRegexp(s),u=new jn(e,B,i,n);u.prefilter=o.type===le.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=$.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return jn.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new vg(this.prog),this.onepass=vc.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===x.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(n===x.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===x.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===x.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return vc.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Ii.maxBitStateLen(this.prog)?Ii.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Ii.maxBitStateLen(this.prog))return Ii.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=wg.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof nr||($.isByteArray(e)?e=Kn.utf8(e):e=Kn.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?ye.fromUTF16(e.asCharSequence(),0,n):ye.fromUTF8(e.asBytes(),0,n),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=ye.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,x.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,x.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=c[1];u=c[1],h&&(s.push(n(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(ye.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(ye.fromUTF16(e),t);return n.length===0?null:n}},jg=class mr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let g=e[B+2].charCodeAt(0);if(g>=65&&g<=90||g>=97&&g<=122){let y=g%32;n+="\\x",n+=(y>>4).toString(16).toUpperCase(),n+=(y&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let g=B+3,y=!1,v=!1;for(;g<i;){const L=e[g];if(L==="}"){v=!0;break}if(!mr.isHexadecimal(L))break;y=!0,g++}if(v&&y){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let g=!0;for(let y=0;y<4;y++)if(!mr.isHexadecimal(e[B+2+y])){g=!1;break}if(g){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let g=!1;if(B+2<i&&e[B+2]==="{"){let y=B+3,v=!1,L=!1;for(;y<i;){const M=e[y];if(M==="}"){L=!0;break}if(!mr.isHexadecimal(M))break;v=!0,y++}L&&v&&(g=!0)}else B+3<i&&mr.isHexadecimal(e[B+2])&&mr.isHexadecimal(e[B+3])&&(g=!0);g?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+c,B+=2;continue;default:{let g=e.codePointAt(B+1);if(g>=48&&g<=57||g>=65&&g<=90||g>=97&&g<=122){let y=$.charCount(g);n+=e.substring(B+1,B+1+y),B+=y+1,s=!0}else{n+="\\";let y=$.charCount(g);n+=e.substring(B+1,B+1+y),B+=y+1}continue}}}else if(c==="/"){n+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),f=$.charCount(h);n+=e.substring(B,B+f),B+=f}const u=s?n:e;return t.length>0?`(?${t})${u}`:u}},be,CB=(be=class{static quote(e){return $.quoteMeta(e)}static quoteReplacement(e,t=!1){return Ic.quoteReplacement(e,t)}static translateRegExp(e){return jg.translate(e)}static compile(e,t=0){let n=e;if(t&be.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&be.DOTALL&&(n=`(?s)${n}`),t&be.MULTILINE&&(n=`(?m)${n}`),t&-544)throw new Ig("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=x.PERL;t&be.DISABLE_UNICODE_GROUPS&&(s&=-129),t&be.LOOKBEHINDS&&(s|=x.LOOKBEHIND);const i=new be(e,t);return i.re2Input=Jg.compileImpl(n,s,(t&be.LONGEST_MATCH)!==0),i}static matches(e,t){return be.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new be(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return $.isByteArray(e)&&(e=Kn.utf8(e)),new Ic(this,e)}test(e){return $.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=$.isByteArray(e)?ye.fromUTF8(e):ye.fromUTF16(e);return this.re2Input.executeEngine(t,0,x.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(be,"CASE_INSENSITIVE",dr.CASE_INSENSITIVE),G(be,"DOTALL",dr.DOTALL),G(be,"MULTILINE",dr.MULTILINE),G(be,"DISABLE_UNICODE_GROUPS",dr.DISABLE_UNICODE_GROUPS),G(be,"LONGEST_MATCH",dr.LONGEST_MATCH),G(be,"LOOKBEHINDS",dr.LOOKBEHINDS),be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="12.19.0";function qg(r){Vr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new uB("@firebase/firestore");function Er(){return rr.logLevel}function q(r,...e){if(rr.logLevel<=ae.DEBUG){const t=e.map(fB);rr.debug(`Firestore (${Vr}): ${r}`,...t)}}function Zt(r,...e){if(rr.logLevel<=ae.ERROR){const t=e.map(fB);rr.error(`Firestore (${Vr}): ${r}`,...t)}}function It(r,...e){if(rr.logLevel<=ae.WARN){const t=e.map(fB);rr.warn(`Firestore (${Vr}): ${r}`,...t)}}function fB(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Lh(r,n,t)}function Lh(r,e,t){let n=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Zt(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Lh(e,s,n)}function re(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Kg(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function oe(r,e){return r<e?-1:r>e?1:0}function Ja(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Ia(s)===Ia(i)?oe(s,i):Ia(s)?1:-1}return oe(r.length,e.length)}const zg=55296,Qg=57343;function Ia(r){const e=r.charCodeAt(0);return e>=zg&&e<=Qg}function Pr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ti(this.root,e,this.comparator,!0)}}class Ti{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new He(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="__name__";class At{constructor(e,t,n){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&X(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return At.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof At?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=At.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){const n=At.isNumericId(e),s=At.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?At.extractNumericId(e).compare(At.extractNumericId(t)):Ja(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yn.fromString(e.substring(4,e.length-2))}}class fe extends At{construct(e,t,n){return new fe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const $g=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Ct=class _r extends At{construct(e,t,n){return new _r(e,t,n)}static isValidIdentifier(e){return $g.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_r.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vt}static keyField(){return new _r([vt])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _r(t)}static emptyPath(){return new _r([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new _t([])}unionWith(e){let t=new Se(Ct.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new _t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ar(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Wg(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function kh(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(fe.fromString(e))}static fromName(e){return new Y(fe.fromString(e).popFirst(5))}static empty(){return new Y(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(r,e,t){if(!t)throw new z(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Yg(r,e,t,n){if(e===!0&&n===!0)throw new z(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function $c(r){if(!Y.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wc(r){if(Y.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ks(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function pB(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":X(12329,{type:typeof r})}function As(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pB(r);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(r,e){const t={typeString:r};return e&&(t.value=e),t}function zs(r,e){if(!Ks(r))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new z(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=-62135596800,Xc=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Xc);return new de(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new z(V.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return de._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new de(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yc)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xc}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new z(V.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zs(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Pe("string",de._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vh("Invalid base64 string: "+i):i}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Xg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=Xg.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ae(r.seconds),nanos:Ae(r.nanos)}}function Ae(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bn(r){return typeof r=="string"?Oe.fromBase64String(r):Oe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="server_timestamp",Gh="__type__",Hh="__previous_value__",Uh="__local_write_time__";function Do(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Gh])==null?void 0:n.stringValue)===Mh}function Qs(r){const e=r.mapValue.fields[Hh];return Do(e)?Qs(e):e}function Sr(r){const e=Rn(r.mapValue.fields[Uh].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,n,s,i,o,B,u,c,h,f,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=g,this.grpcFlowControlWindow=y}}const Qi="(default)";class vs{constructor(e,t){this.projectId=e,this.database=t||Qi}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database===Qi}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}function em(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(r.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gB=-1;function yo(r){return r==null}function Rs(r){return r===0&&1/r==-1/0}function tm(r){return typeof r=="number"&&Number.isInteger(r)&&!Rs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function nm(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="__type__",rm="__max__",Ai={mapValue:{}},jh="__vector__",bs="value",Or={nullValue:"NULL_VALUE"},it={booleanValue:!0},Me={booleanValue:!1};function Ne(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Do(r)?4:sm(r)?9007199254740991:$i(r)?10:11:X(28295,{value:r})}function mt(r,e,t){if(r===e)return!0;const n=Ne(r);if(n!==Ne(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Sr(r).isEqual(Sr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Rn(i.timestampValue),u=Rn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return bn(i.bytesValue).isEqual(bn(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return Ae(i.geoPointValue.latitude)===Ae(o.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return Ae(i.integerValue)===Ae(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=Ae(i.doubleValue),c=Ae(o.doubleValue);else{if(!(B!=null&&B.i))return!1;u=Ae(i.integerValue??i.doubleValue),c=Ae(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.o)||Rs(u)===Rs(c):!!(B===void 0||B.u)&&isNaN(u)&&isNaN(c)}(r,e,t);case 9:return Pr(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>mt(s,i,t));case 10:case 11:return function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(zi(u)!==zi(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!mt(u[h],c[h],B)))return!1;return!0}(r,e,t);default:return X(52216,{left:r})}}function Ps(r,e){return(r.values||[]).find(t=>mt(t,e))!==void 0}function ot(r,e){if(r===e)return 0;const t=Ne(r),n=Ne(e);if(t!==n)return oe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(r.booleanValue,e.booleanValue);case 2:return function(i,o){const B=Ae(i.integerValue||i.doubleValue),u=Ae(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1}(r,e);case 3:return Zc(r.timestampValue,e.timestampValue);case 4:return Zc(Sr(r),Sr(e));case 5:return Ja(r.stringValue,e.stringValue);case 6:return function(i,o){const B=bn(i),u=bn(o);return B.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=oe(B[c],u[c]);if(h!==0)return h}return oe(B.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const B=oe(Ae(i.latitude),Ae(o.latitude));return B!==0?B:oe(Ae(i.longitude),Ae(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return el(r.arrayValue,e.arrayValue);case 10:return function(i,o){var g,y,v,L;const B=i.fields||{},u=o.fields||{},c=(g=B[bs])==null?void 0:g.arrayValue,h=(y=u[bs])==null?void 0:y.arrayValue,f=oe(((v=c==null?void 0:c.values)==null?void 0:v.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return f!==0?f:el(c,h)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ai.mapValue&&o===Ai.mapValue)return 0;if(i===Ai.mapValue)return 1;if(o===Ai.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const g=Ja(u[f],h[f]);if(g!==0)return g;const y=ot(B[u[f]],c[h[f]]);if(y!==0)return y}return oe(u.length,h.length)}(r.mapValue,e.mapValue);default:throw X(23264,{l:t})}}function Zc(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return oe(r,e);const t=Rn(r),n=Rn(e),s=oe(t.seconds,n.seconds);return s!==0?s:oe(t.nanos,n.nanos)}function el(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=ot(t[s],n[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,n.length)}function Nr(r){return ja(r)}function ja(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Rn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return bn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Y.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ja(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ja(t.fields[o])}`;return s+"}"}(r.mapValue):X(61005,{value:r})}function Fi(r){switch(Ne(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qs(r);return e?16+Fi(e):16;case 5:return 2*r.stringValue.length;case 6:return bn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Fi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return ar(n.fields,(i,o)=>{s+=i.length+Fi(o)}),s}(r.mapValue);default:throw X(13486,{value:r})}}function Rt(r){return!!r&&"integerValue"in r}function zn(r){return!!r&&"doubleValue"in r}function Pn(r){return Rt(r)||zn(r)}function Fr(r){return!!r&&"arrayValue"in r}function ht(r){return!!r&&"nullValue"in r}function at(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Wn(r){return!!r&&"mapValue"in r}function $i(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Jh])==null?void 0:n.stringValue)===jh}function qa(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[bs])==null?void 0:t.arrayValue}function ds(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ar(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ds(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ds(r.arrayValue.values[t]);return e}return{...r}}function sm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(t)}setAll(e){let t=Ct.emptyPath(),n={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=ds(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){ar(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new lt(ds(this.value))}}function qh(r){const e=[];return ar(r.fields,(t,n)=>{const s=new Ct([t]);if(Wn(n)){const i=qh(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function mB(r){return{integerValue:""+r}}function EB(r,e,t){return tm(e)?mB(e):Io(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this._=void 0}}function im(r,e,t){return r instanceof Wi?function(s,i){const o={fields:{[Gh]:{stringValue:Mh},[Uh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Do(i)&&(i=Qs(i)),i&&(o.fields[Hh]=i),{mapValue:o}}(t,e):r instanceof Ss?zh(r,e):r instanceof Os?Qh(r,e):r instanceof Ns?function(s,i){const o=Kh(s,i),B=Zi(o)+Zi(s.h);return Rt(o)&&Rt(s.h)?mB(B):Io(s.serializer,B)}(r,e):r instanceof Yi?function(s,i){return tl(s,i,Math.min)}(r,e):r instanceof Xi?function(s,i){return tl(s,i,Math.max)}(r,e):void 0}function om(r,e,t){return r instanceof Ss?zh(r,e):r instanceof Os?Qh(r,e):t}function Kh(r,e){return r instanceof Ns?Pn(e)?e:{integerValue:0}:null}class Wi extends wo{}class Ss extends wo{constructor(e){super(),this.elements=e}}function zh(r,e){const t=$h(e);for(const n of r.elements)t.some(s=>mt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Os extends wo{constructor(e){super(),this.elements=e}}function Qh(r,e){let t=$h(e);for(const n of r.elements)t=t.filter(s=>!mt(s,n));return{arrayValue:{values:t}}}class _B extends wo{constructor(e,t){super(),this.serializer=e,this.h=t}}class Ns extends _B{}class Yi extends _B{}class Xi extends _B{}function tl(r,e,t){if(!Pn(e))return r.h;const n=t(Zi(e),Zi(r.h));return Rt(e)&&Rt(r.h)?mB(n):Io(r.serializer,n)}function Zi(r){return Ae(r.integerValue||r.doubleValue)}function $h(r){return Fr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function am(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Ss&&s instanceof Ss||n instanceof Os&&s instanceof Os?Pr(n.elements,s.elements,mt):n instanceof Ns&&s instanceof Ns||n instanceof Yi&&s instanceof Yi||n instanceof Xi&&s instanceof Xi?mt(n.h,s.h):n instanceof Wi&&s instanceof Wi}(r.transform,e.transform)}class Bm{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class To{}function Wh(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new DB(r.key,St.none()):new $s(r.key,r.data,St.none());{const t=r.data,n=lt.empty();let s=new Se(Ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Br(r.key,n,new _t(s.toArray()),St.none())}}function um(r,e,t){r instanceof $s?function(s,i,o){const B=s.value.clone(),u=rl(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(r,e,t):r instanceof Br?function(s,i,o){if(!Li(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=rl(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Yh(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ps(r,e,t,n){return r instanceof $s?function(i,o,B,u){if(!Li(i.precondition,o))return B;const c=i.value.clone(),h=sl(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(r,e,t,n):r instanceof Br?function(i,o,B,u){if(!Li(i.precondition,o))return B;const c=sl(i.fieldTransforms,u,o),h=o.data;return h.setAll(Yh(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(r,e,t,n):function(i,o,B){return Li(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(r,e,t)}function cm(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Kh(n.transform,s||null);i!=null&&(t===null&&(t=lt.empty()),t.set(n.field,i))}return t||null}function nl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pr(n,s,(i,o)=>am(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class $s extends To{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends To{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yh(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function rl(r,e,t){const n=new Map;Q(r.length===t.length,32656,{T:t.length,P:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,om(o,B,t[s]))}return n}function sl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,im(i,o,e))}return n}class DB extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lm extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.position=e,this.inclusive=t}}function il(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=Y.comparator(Y.fromName(o.referenceValue),t.key):n=ot(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function ol(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!mt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{}class Le extends Xh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Cm(e,t,n):t==="array-contains"?new pm(e,n):t==="in"?new gm(e,n):t==="not-in"?new mm(e,n):t==="array-contains-any"?new Em(e,n):new Le(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new fm(e,n):new dm(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ot(t,this.value)):t!==null&&Ne(this.value)===Ne(t)&&this.matchesComparison(ot(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Xh{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new xt(e,t)}matches(e){return Zh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Zh(r){return r.op==="and"}function eC(r){return hm(r)&&Zh(r)}function hm(r){for(const e of r.filters)if(e instanceof xt)return!1;return!0}function Ka(r){if(r instanceof Le)return r.field.canonicalString()+r.op.toString()+Nr(r.value);if(eC(r))return r.filters.map(e=>Ka(e)).join(",");{const e=r.filters.map(t=>Ka(t)).join(",");return`${r.op}(${e})`}}function tC(r,e){return r instanceof Le?function(n,s){return s instanceof Le&&n.op===s.op&&n.field.isEqual(s.field)&&mt(n.value,s.value)}(r,e):r instanceof xt?function(n,s){return s instanceof xt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,B)=>i&&tC(o,s.filters[B]),!0):!1}(r,e):void X(19439)}function nC(r){return r instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${Nr(t.value)}`}(r):r instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(nC).join(" ,")+"}"}(r):"Filter"}class Cm extends Le{constructor(e,t,n){super(e,t,n),this.key=Y.fromName(n.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class fm extends Le{constructor(e,t){super(e,"in",t),this.keys=rC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dm extends Le{constructor(e,t){super(e,"not-in",t),this.keys=rC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rC(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>Y.fromName(n.referenceValue))}class pm extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fr(t)&&Ps(t.arrayValue,this.value)}}class gm extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ps(this.value.arrayValue,t)}}class mm extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ps(this.value.arrayValue,t)}}class Em extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ps(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t="asc"){this.field=e,this.dir=t}}function _m(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new de(0,0))}static max(){return new te(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new Ke(e,0,te.min(),te.min(),te.min(),lt.empty(),0)}static newFoundDocument(e,t,n,s){return new Ke(e,1,t,te.min(),n,s,0)}static newNoDocument(e,t){return new Ke(e,2,t,te.min(),te.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new Ke(e,3,t,te.min(),te.min(),lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=-1;function Dm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=te.fromTimestamp(n===1e9?new de(t+1,0):new de(t,n));return new Sn(s,Y.empty(),e)}function ym(r){return new Sn(r.readTime,r.key,Fs)}class Sn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Sn(te.min(),Y.empty(),Fs)}static max(){return new Sn(te.max(),Y.empty(),Fs)}}function Im(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(r.documentKey,e.documentKey),t!==0?t:oe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function al(r,e=null,t=[],n=[],s=null,i=null,o=null){return new wm(r,e,t,n,s,i,o)}function sC(r){const e=re(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ka(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Nr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Nr(n)).join(",")),e.R=t}return e.R}function iC(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!_m(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!tC(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ol(r.startAt,e.startAt)&&ol(r.endAt,e.endAt)}function qn(r){return!!r.isCorePipeline}function oC(r){return!!r.path&&Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function Tm(r,e,t,n,s,i,o,B){return new Ao(r,e,t,n,s,i,o,B)}function aC(r){return new Ao(r)}function Bl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Am(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function vm(r){return r.collectionGroup!==null}function gs(r){const e=re(r);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Se(Ct.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new to(i,n))}),t.has(Ct.keyField().canonicalString())||e.A.push(new to(Ct.keyField(),n))}return e.A}function Ot(r){const e=re(r);return e.V||(e.V=Rm(e,gs(r))),e.V}function Rm(r,e){if(r.limitType==="F")return al(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new to(s.field,i)});const t=r.endAt?new eo(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new eo(r.startAt.position,r.startAt.inclusive):null;return al(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function za(r,e,t){return new Ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function bm(r,e){return iC(Ot(r),Ot(e))&&r.limitType===e.limitType}function ms(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>nC(s)).join(", ")}]`),yo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Nr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Nr(s)).join(",")),`Target(${n})`}(Ot(r))}; limitType=${r.limitType})`}function vo(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of gs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,B,u){const c=il(o,B,u);return o.inclusive?c<=0:c<0}(n.startAt,gs(n),s)||n.endAt&&!function(o,B,u){const c=il(o,B,u);return o.inclusive?c>=0:c>0}(n.endAt,gs(n),s))}(r,e)}function yB(r){return(e,t)=>{let n=!1;for(const s of gs(r)){const i=Pm(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Pm(r,e,t){const n=r.field.isKeyField()?Y.comparator(e.key,t.key):function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?ot(u,c):X(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return X(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ue;function Om(r){switch(r){case V.OK:return X(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return X(15467,{code:r})}}function BC(r){if(r===void 0)return Zt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Re.OK:return V.OK;case Re.CANCELLED:return V.CANCELLED;case Re.UNKNOWN:return V.UNKNOWN;case Re.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Re.INTERNAL:return V.INTERNAL;case Re.UNAVAILABLE:return V.UNAVAILABLE;case Re.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Re.NOT_FOUND:return V.NOT_FOUND;case Re.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Re.ABORTED:return V.ABORTED;case Re.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Re.DATA_LOSS:return V.DATA_LOSS;default:return X(39323,{code:r})}}(ue=Re||(Re={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return kh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new we(Y.comparator);function rt(){return Nm}const uC=new we(Y.comparator);function Dr(...r){let e=uC;for(const t of r)e=e.insert(t.key,t);return e}function cC(r){let e=uC;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function fn(){return Es()}function lC(){return Es()}function Es(){return new ur(r=>r.toString(),(r,e)=>r.isEqual(e))}const Fm=new we(Y.comparator),Lm=new Se(Y.comparator);function ie(...r){let e=Lm;for(const t of r)e=e.add(t);return e}const km=new Se(oe);function xm(){return km}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new yn([4294967295,4294967295],0);function ul(r){const e=Vm().encode(r),t=new Ih;return t.update(e),new Uint8Array(t.digest())}function cl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yn([t,n],0),new yn([s,i],0)]}class IB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new hs(`Invalid padding: ${t}`);if(n<0)throw new hs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new hs(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=yn.fromNumber(this.p)}v(e,t,n){let s=e.add(t.multiply(yn.fromNumber(n)));return s.compare(Mm)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=ul(e),[n,s]=cl(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new IB(i,s,t);return n.forEach(B=>o.insert(B)),o}insert(e){if(this.p===0)return;const t=ul(e),[n,s]=cl(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ws(te.min(),s,new we(oe),rt(),rt(),ie())}}class Ys{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ys(n,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,n,s){this.F=e,this.removedTargetIds=t,this.key=n,this.O=s}}class hC{constructor(e,t){this.targetId=e,this.M=t}}class CC{constructor(e,t,n=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class ll{constructor(e){this.targetId=e,this.N=0,this.L=hl(),this.B=Oe.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ie(),t=ie(),n=ie();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:X(38017,{changeType:i})}}),new Ys(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=hl()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,Q(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const us="WatchChangeAggregator";class Gm{constructor(e){this.X=e,this.ee=new Map,this.te=rt(),this.ne=vi(),this.re=rt(),this.ie=vi(),this.se=new we(oe)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:X(56790,{state:e.state})}else q(us,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((n,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return qn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:oC(e)}he(e){const t=e.targetId,n=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(n===0){const o=new Y(qn(i)?fe.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,Ke.newNoDocument(o,te.min()))}else Q(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const B=this.Ie(e),u=B?this.Re(B,e,o):1;if(u!==0){this.le(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,c)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=bn(n).toUint8Array()}catch(u){if(u instanceof Vh)return It("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new IB(o,s,i)}catch(u){return It(u instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.p===0?null:B}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.X.Ve(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,o)=>{const B=this.Te(o);if(B){if(i.current&&this.Ee(B.target)){const u=qn(B.target)?fe.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new Y(u);this.me(c).has(o)||this.pe(o,c)||this.ae(o,c,Ke.newNoDocument(c,e))}i.$&&(t.set(o,i.W()),i.G())}});let n=ie();this.ie.forEach((i,o)=>{let B=!0;o.forEachWhile(u=>{const c=this.Te(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(n=n.add(i))}),this.te.forEach((i,o)=>o.setReadTime(e)),this.re.forEach((i,o)=>o.setReadTime(e));const s=new Ws(e,t,this.se,this.te,this.re,n);return this.te=rt(),this.ne=vi(),this.re=rt(),this.ie=vi(),this.se=new we(oe),s}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void q(us,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;n.j(t.key,s),qn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(qn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):q(us,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(q(us,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ll(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Se(oe),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Se(oe),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||q(us,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new ll(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function vi(){return new we(Y.comparator)}function hl(){return new we(Y.comparator)}const Hm={asc:"ASCENDING",desc:"DESCENDING"},Um={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jm={and:"AND",or:"OR"};class jm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(r,e){return r.useProto3Json||yo(e)?e:{value:e}}function _s(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wB(r){const e=Rn(r);return new de(e.seconds,e.nanos)}function fC(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function xi(r,e){return _s(r,e.toTimestamp())}function Nt(r){return Q(!!r,49232),te.fromTimestamp(wB(r))}function TB(r,e){return $a(r,e).canonicalString()}function $a(r,e){const t=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function dC(r){const e=fe.fromString(r);return Q(_C(e),10190,{key:e.toString()}),e}function no(r,e){return TB(r.databaseId,e.path)}function wa(r,e){const t=dC(e);if(t.get(1)!==r.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Y(gC(t))}function pC(r,e){return TB(r.databaseId,e)}function qm(r){const e=dC(r);return e.length===4?fe.emptyPath():gC(e)}function Wa(r){return new fe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gC(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Cl(r,e,t){return{name:no(r,e),fields:t.value.mapValue.fields}}function Km(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Oe.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Oe.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?V.UNKNOWN:BC(c.code);return new z(h,c.message||"")}(o);t=new CC(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=wa(r,n.document.name),i=Nt(n.document.updateTime),o=n.document.createTime?Nt(n.document.createTime):te.min(),B=new lt({mapValue:{fields:n.document.fields}}),u=Ke.newFoundDocument(s,i,o,B),c=n.targetIds||[],h=n.removedTargetIds||[];t=new ki(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=wa(r,n.document),i=n.readTime?Nt(n.readTime):te.min(),o=Ke.newNoDocument(s,i),B=n.removedTargetIds||[];t=new ki([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=wa(r,n.document),i=n.removedTargetIds||[];t=new ki([],i,s,null)}else{if(!("filter"in e))return X(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Sm(s,i),B=n.targetId;t=new hC(B,o)}}return t}function zm(r,e){let t;if(e instanceof $s)t={update:Cl(r,e.key,e.value)};else if(e instanceof DB)t={delete:no(r,e.key)};else if(e instanceof Br)t={update:Cl(r,e.key,e.data),updateMask:rE(e.fieldMask)};else{if(!(e instanceof lm))return X(16599,{be:e.type});t={verify:no(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const B=o.transform;if(B instanceof Wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof Ns)return{fieldPath:o.field.canonicalString(),increment:B.h};if(B instanceof Yi)return{fieldPath:o.field.canonicalString(),minimum:B.h};if(B instanceof Xi)return{fieldPath:o.field.canonicalString(),maximum:B.h};throw X(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(r,e.precondition)),t}function Qm(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Nt(s.updateTime):Nt(i);return o.isEqual(te.min())&&(o=Nt(i)),new Bm(o,s.transformResults||[])}(t,e))):[]}function $m(r,e){return{documents:[pC(r,e.path)]}}function Wm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=pC(r,s);const i=function(c){if(c.length!==0)return EC(xt.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:yr(g.field),direction:eE(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=Qa(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Se:t,parent:s}}function Ym(r){let e=qm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const g=mC(f);return g instanceof xt&&eC(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(v){return new to(Ir(v.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(g))}(t.orderBy));let B=null;t.limit&&(B=function(f){let g;return g=typeof f=="object"?f.value:f,yo(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(f){const g=!!f.before,y=f.values||[];return new eo(y,g)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const g=!f.before,y=f.values||[];return new eo(y,g)}(t.endAt)),Tm(e,s,o,i,B,"F",u,c)}function Xm(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zm(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function mC(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ir(t.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ir(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ir(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ir(t.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(r):r.fieldFilter!==void 0?function(t){return Le.create(Ir(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(n=>mC(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(r):X(30097,{filter:r})}function eE(r){return Hm[r]}function tE(r){return Um[r]}function nE(r){return Jm[r]}function yr(r){return{fieldPath:r.canonicalString()}}function Ir(r){return Ct.fromServerFormat(r.fieldPath)}function EC(r){return r instanceof Le?function(t){if(t.op==="=="){if(at(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(at(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(t.field),op:tE(t.op),value:t.value}}}(r):r instanceof xt?function(t){const n=t.getFilters().map(s=>EC(s));return n.length===1?n[0]:{compositeFilter:{op:nE(t.op),filters:n}}}(r):X(54877,{filter:r})}function rE(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _C(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function DC(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Ls(r,e){const t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function yC(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){return new jm(r,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pt(Oe.fromBase64String(e))}catch(t){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zs(e,pt._jsonSchema))return pt.fromBase64String(e.bytes)}}pt._jsonSchemaVersion="firestore/bytes/1.0",pt._jsonSchema={type:Pe("string",pt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AB{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function sE(){return new AB(vt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(e){if(zs(e,Ft._jsonSchema))return new Ft(e.latitude,e.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:Pe("string",Ft._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qe.UNAUTHENTICATED))}shutdown(){}}class oE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aE{constructor(e){this.De=e,this.currentUser=qe.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.Ce===void 0,42304);let n=this.xe;const s=u=>this.xe!==n?(n=this.xe,t(u)):Promise.resolve();let i=new In;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},B=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit(u=>B(u)),setTimeout(()=>{if(!this.auth){const u=this.De.getImmediate({optional:!0});u?B(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.xe!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{Oe:n}),new wC(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Me:e}),new qe(e)}}class BE{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class uE{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new BE(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cE{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Et(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){Q(this.Ce===void 0,3512);const n=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new fl(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new fl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function TC(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="ConnectivityMonitor";class pl{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){q(dl,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){q(dl,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri=null;function Ya(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="RestConnection",hE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class CE{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${s}`,this.tt=this.databaseId.database===Qi?`project_id=${n}`:`project_id=${n}&database_id=${s}`}nt(e,t,n,s,i){const o=Ya(),B=this.rt(e,t.toUriEncodedString());q(Ta,`Sending RPC '${e}' ${o}:`,B,n);const u={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(u,s,i);const{host:c}=new URL(B),h=xr(c);return this.st(e,B,u,n,h).then(f=>(q(Ta,`Received RPC '${e}' ${o}: `,f),f),f=>{throw It(Ta,`RPC '${e}' ${o} failed with error: `,f,"url: ",B,"request:",n),f})}_t(e,t,n,s,i,o){return this.nt(e,t,n,s,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const n=hE[e];let s=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection",cs=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Tr extends CE{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!Tr.yt){const e=vh();cs(e,Ah.STAT_EVENT,t=>{t.stat===Ma.PROXY?q(je,"STAT_EVENT: detected buffering proxy"):t.stat===Ma.NOPROXY&&q(je,"STAT_EVENT: detected no buffering proxy")}),Tr.yt=!0}}st(e,t,n,s,i){const o=Ya();return new Promise((B,u)=>{const c=new wh;c.setWithCredentials(!0),c.listenOnce(Th.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ni.NO_ERROR:const f=c.getResponseJson();q(je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),B(f);break;case Ni.TIMEOUT:q(je,`RPC '${e}' ${o} timed out`),u(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const g=c.getStatus();if(q(je,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const v=y==null?void 0:y.error;if(v&&v.status&&v.message){const L=function(j){const ne=j.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(ne)>=0?ne:V.UNKNOWN}(v.status);u(new z(L,v.message))}else u(new z(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(V.UNAVAILABLE,"Connection failed."));break;default:X(9055,{wt:e,streamId:o,bt:c.getLastErrorCode(),St:c.getLastError()})}}finally{q(je,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(je,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,n,15)})}vt(e,t,n){const s=Ya(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.it(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const c=i.join("");q(je,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.Dt(h);let f=!1,g=!1;const y=new fE({ot:v=>{g?q(je,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(q(je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),q(je,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ut:()=>h.close()});return cs(h,ls.EventType.OPEN,()=>{g||(q(je,`RPC '${e}' stream ${s} transport opened.`),y.Rt())}),cs(h,ls.EventType.CLOSE,()=>{g||(g=!0,q(je,`RPC '${e}' stream ${s} transport closed`),y.Vt(),this.xt(h))}),cs(h,ls.EventType.ERROR,v=>{g||(g=!0,It(je,`RPC '${e}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.Vt(new z(V.UNAVAILABLE,"The operation could not be completed")))}),cs(h,ls.EventType.MESSAGE,v=>{var L;if(!g){const M=v.data[0];Q(!!M,16349);const j=M,ne=(j==null?void 0:j.error)||((L=j[0])==null?void 0:L.error);if(ne){q(je,`RPC '${e}' stream ${s} received error:`,ne);const he=ne.status;let Ce=function(A){const E=Re[A];if(E!==void 0)return BC(E)}(he),Te=ne.message;he==="NOT_FOUND"&&Te.includes("database")&&Te.includes("does not exist")&&Te.includes(this.databaseId.database)&&It(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=V.INTERNAL,Te="Unknown error status: "+he+" with message "+ne.message),g=!0,y.Vt(new z(Ce,Te)),h.close()}else q(je,`RPC '${e}' stream ${s} received:`,M),y.dt(M)}}),Tr.gt(),setTimeout(()=>{y.At()},0),y}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Rh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){return new Tr(r)}Tr.yt=!1;class AC{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-n);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="PersistentStream";class vC{constructor(e,t,n,s,i,o,B,u){this.Ct=e,this.Kt=n,this.Qt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new AC(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Wt===t&&this.un(n,s)},n=>{e(()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(s)})})}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{n(()=>this.listener.ct())}),this.stream.Et(()=>{n(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{n(()=>this.cn(s))}),this.stream.onMessage(s=>{n(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return q(gl,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(q(gl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pE extends vC{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=Km(this.serializer,e),n=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Nt(o.readTime):te.min()}(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=Wa(this.serializer),t.addTarget=function(i,o){let B;const u=o.target;if(B=qn(u)?{pipelineQuery:Zm(i,u)}:oC(u)?{documents:$m(i,u)}:{query:Wm(i,u).Se},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=fC(i,o.resumeToken);const c=Qa(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){B.readTime=_s(i,o.snapshotVersion.toTimestamp());const c=Qa(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const n=Xm(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=Wa(this.serializer),t.removeTarget=e,this.nn(t)}}class gE extends vC{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=Qm(e.writeResults,e.commitTime),n=Nt(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=Wa(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>zm(this.serializer,n))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{}class EE extends mE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.nt(e,$a(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())})}_t(e,t,n,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection._t(e,$a(t,n),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function _E(r,e,t,n){return new EE(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="ComponentProvider",ml=new Map;function yE(r,e,t,n,s){return new Zg(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,TC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RC=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(RC,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}bo.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==IE)throw r;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,n)=>{t(e)})}static reject(e){return new k((t,n)=>{n(e)})}static waitFor(e){return new k((t,n)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},u=>n(u))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const n of e)t=t.next(s=>s?k.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new k((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++B,B===i&&n(o)},h=>s(h))}})}static doWhile(e,t){return new k((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function TE(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gr(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="LruGarbageCollector",AE=1048576;function Dl([r,e],[t,n]){const s=oe(r,t);return s===0?oe(e,n):s}class vE{constructor(e){this.Yn=e,this.buffer=new Se(Dl),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Dl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){q(_l,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gr(t)?q(_l,"Ignoring IndexedDB error during garbage collection: ",t):await Mr(t)}await this.nr(3e5)})}}class bE{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return k.resolve(bo.wn);const n=new vE(t);return this.rr.forEachTarget(e,s=>n.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>n.er(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(El)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),El):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(n=f,B=Date.now(),this.removeTargets(e,n,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(f=>(c=Date.now(),Er()<=ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function PE(r,e){return new bE(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firestore.googleapis.com",yl=!0;class Il{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bC,this.ssl=yl}else this.host=e.host,this.ssl=e.ssl??yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=RC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AE)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Yg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TC(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new z(V.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Po=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iE;switch(n.type){case"firstParty":return new uE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ml.get(t);n&&(q(DE,"Removing Datastore"),ml.delete(t),n.terminate())}(this),Promise.resolve()}};function SE(r,e,t,n={}){var c;r=As(r,Po);const s=xr(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},B=`${e}:${t}`;s&&BB(`https://${B}`),i.host!==bC&&i.host!==B&&It("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:n};if(!er(u,o)&&(r._setSettings(u),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=qe.MOCK_USER;else{h=gh(n.mockUserToken,(c=r._app)==null?void 0:c.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new qe(g)}r._authCredentials=new oE(new wC(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new So(this.firestore,e,this._query)}}class Ge{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(zs(t,Ge._jsonSchema))return new Ge(e,n||null,new Y(fe.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Pe("string",Ge._jsonSchemaVersion),referencePath:Pe("string")};class wn extends So{constructor(e,t,n){super(e,t,aC(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new Y(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function dn(r,e,...t){if(r=gt(r),xh("collection","path",e),r instanceof Po){const n=fe.fromString(e,...t);return Wc(n),new wn(r,null,n)}{if(!(r instanceof Ge||r instanceof wn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(fe.fromString(e,...t));return Wc(n),new wn(r.firestore,null,n)}}function PC(r,e,...t){if(r=gt(r),arguments.length===1&&(e=dB.newId()),xh("doc","path",e),r instanceof Po){const n=fe.fromString(e,...t);return $c(n),new Ge(r,null,new Y(n))}{if(!(r instanceof Ge||r instanceof wn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(fe.fromString(e,...t));return $c(n),new Ge(r.firestore,r instanceof wn?r.converter:null,new Y(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zs(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:Pe("string",st._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=/^__.*__$/;class NE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,t,this.fieldTransforms):new $s(e,this.data,t,this.fieldTransforms)}}function SC(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:r})}}class vB{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ro(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(SC(this.dataSource)&&OE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class FE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ro(e)}createContext(e,t,n,s=!1){return new vB({dataSource:e,methodName:t,targetDoc:n,path:Ct.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LE(r){const e=r._freezeSettings(),t=Ro(r._databaseId);return new FE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function kE(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);LC("Data must be an object, but it was:",o,n);const B=OC(n,o);let u,c;if(i.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Oo(e,f,t);if(!o.contains(g))throw new z(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ME(h,g)||h.push(g)}u=new _t(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new NE(new lt(B),u,c)}function ks(r,e,t){if(FC(r=gt(r)))return LC("Unsupported field value:",e,r),OC(r,e);if(r instanceof IC)return function(s,i){if(!SC(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const u of s){let c=ks(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(r,e)}return function(s,i,o){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return EB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=de.fromDate(s);return{timestampValue:_s(i.serializer,B)}}if(s instanceof de){const B=new de(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:_s(i.serializer,B)}}if(NC(s)){const B=de.fromInstant(s),u=new de(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:_s(i.serializer,u)}}if(s instanceof Ft)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pt)return{bytesValue:fC(i.serializer,s._byteString)};if(s instanceof Ge){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:TB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof st)return function(u,c){const h=u instanceof st?u.toArray():u;return{mapValue:{fields:{[Jh]:{stringValue:jh},[bs]:{arrayValue:{values:h.map(g=>{if(typeof g!="number")throw c.createError("VectorValues must only contain numeric values.");return Io(c.serializer,g)})}}}}}}(s,i);if(DC(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${pB(s)}`)}(r,e)}function OC(r,e){const t={};return kh(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(r,(n,s)=>{const i=ks(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function NC(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function FC(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof de||r instanceof Ft||r instanceof pt||r instanceof Ge||r instanceof IC||r instanceof st||NC(r)||DC(r))}function LC(r,e,t){if(!FC(t)||!Ks(t)){const n=pB(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Oo(r,e,t){if((e=gt(e))instanceof AB)return e._internalPath;if(typeof e=="string")return VE(r,e);throw ro("Field path arguments must be of type string or ",r,!1,void 0,t)}const xE=new RegExp("[~\\*/\\[\\]]");function VE(r,e,t){if(e.search(xE)>=0)throw ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new AB(...e.split("."))._internalPath}catch{throw ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ro(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new z(V.INVALID_ARGUMENT,B+r+u)}function ME(r,e){return r.some(t=>t.isEqual(e))}function kC(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=lt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&Ks(o)?B={mapValue:{fields:new Qe(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=ks(o,t)??void 0),B&&n.set(Ct.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(Wg(n,(o,B)=>[Ct.fromServerFormat(B),o!==void 0?ks(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ks(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}function HE(r){return new st(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(r){let e;return r instanceof cr?r:(e=Ks(r)?KE(r):r instanceof Array?zE(r):xC(r,void 0),e)}function Aa(r){if(r instanceof cr)return r;if(r instanceof st)return xs(r);if(Array.isArray(r))return xs(HE(r));throw new Error("Unsupported value: "+typeof r)}function RB(r){return nm(r)?Vi(r):U(r)}class cr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,U(e)],"add")}asBoolean(){if(this instanceof On)return this;if(this instanceof Ur)return new MC(this);if(this instanceof Hr)return new qE(this);if(this instanceof F)return new VC(this);throw new z("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,U(e)],"subtract")}multiply(e){return new F("multiply",[this,U(e)],"multiply")}divide(e){return new F("divide",[this,U(e)],"divide")}mod(e){return new F("mod",[this,U(e)],"mod")}equal(e){return new F("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(s=>U(s));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Cs(e.map(U),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Cs(e.map(U),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Cs(e.map(U),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Cs(e.map(U),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,xs(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(U);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(U);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,U(e),U(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,U(e)];return t!==void 0&&n.push(U(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,xs(e)],"mapGet")}mapSet(e,t,...n){const s=[this,U(e),U(t),...n.map(U)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,U(e)],"get_field")}count(){return ct._create("count",[this],"count")}sum(){return ct._create("sum",[this],"sum")}average(){return ct._create("average",[this],"average")}minimum(){return ct._create("minimum",[this],"minimum")}maximum(){return ct._create("maximum",[this],"maximum")}first(){return ct._create("first",[this],"first")}last(){return ct._create("last",[this],"last")}arrayAgg(){return ct._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ct._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ct._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(U)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Aa(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Aa(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Aa(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,RB(e),U(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=U(e);return new F("substring",t===void 0?[this,n]:[this,n,U(t)],"substring")}arrayGet(e){return new F("array_get",[this,U(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,U(e)],"ifError");return e instanceof On?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const n=U(e),s=t.map(U);return new F("map_merge",[this,n,...s],"mapMerge")}pow(e){return new F("pow",[this,U(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,U(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new F("join",[this,U(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,U(e)])}timestampTruncate(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_trunc",n)}ascending(){return QE(this)}descending(){return $E(this)}as(e){return new JE(this,e,"as")}}class ct{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new ct(e,t);return s._methodName=n,s}as(e){return new UE(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class UE{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class JE{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Cs extends cr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class Hr extends cr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Vi(r){return jE(r,"field")}function jE(r,e){return new Hr(typeof r=="string"?vt===r?sE()._internalPath:Oo("field",r):r._internalPath,e)}class Ur extends cr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ur(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,GE(this._protoValue)||(this._protoValue=ks(this.value,e))}}function xs(r,e){return xC(r,"constant")}function xC(r,e){const t=new Ur(r,e);return typeof r=="boolean"?new MC(t):t}class F extends cr{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Qe({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class On extends cr{get _methodName(){return this._expr._methodName}countIf(){return ct._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),n=new F("if_error",[this,t],"ifError");return t instanceof On?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class VC extends On{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class MC extends On{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class qE extends On{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function KE(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(xs(n)),t.push(U(s))}return new F("map",t,"map")}function zE(r){return function(t,n){return new F("array",t.map(s=>U(s)),n)}(r,"array")}function QE(r){return new GC(RB(r),"ascending","ascending")}function $E(r){return new GC(RB(r),"descending","descending")}class GC{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:yC(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class HC extends ft{get _name(){return"add_fields"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Ls(e,this.fields)]}}_readUserData(e){super._readUserData(e),Nn(this.fields,e)}}class UC extends ft{get _name(){return"aggregate"}get _optionsUtil(){return new Qe({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Ls(e,this.accumulators),Ls(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e),Nn(this.accumulators,e)}}class JC extends ft{get _name(){return"distinct"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Ls(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e)}}class No extends ft{get _name(){return"collection"}get _optionsUtil(){return new Qe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class Fo extends ft{get _name(){return"collection_group"}get _optionsUtil(){return new Qe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class bB extends ft{get _name(){return"database"}get _optionsUtil(){return new Qe({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class PB extends ft{get _name(){return"documents"}get _optionsUtil(){return new Qe({})}constructor(e,t){if(super(t),!e||e.length===0)throw new z(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new z(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Lo extends ft{get _name(){return"where"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Nn(this.condition,e)}}class sr extends ft{get _name(){return"limit"}get _optionsUtil(){return new Qe({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[EB(e,this.limit)]}}}class wl extends ft{get _name(){return"offset"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[EB(e,this.offset)]}}}class WE extends ft{get _name(){return"select"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Ls(e,this.selections)]}}_readUserData(e){super._readUserData(e),Nn(this.selections,e)}}class zt extends ft{get _name(){return"sort"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Nn(this.orderings,e)}}class SB extends ft{get _name(){return"replace_with"}get _optionsUtil(){return new Qe({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),yC(SB.Ir)]}}_readUserData(e){super._readUserData(e),Nn(this.map,e)}}SB.Ir="full_replace";function Nn(r,e){return kC(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Vr(e,t){const n=this.userDataReader.createContext(3,e);return kC(t)?t._readUserData(n):Array.isArray(t)?t.forEach(s=>s._readUserData(n)):t.forEach(s=>s._readUserData(n)),t}where(e){const t=this.stages.map(n=>n);return this.Vr("where",e),t.push(new Lo(e,{})),new Ds(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(n=>n);return t.push(new sr(e,{})),new Ds(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(s=>s);return"orderings"in e?n.push(new zt(this.Vr("sort",e.orderings),{})):n.push(new zt(this.Vr("sort",[e,...t]),{})),new Ds(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class Ye{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return ko(this)}getPipelineCollectionGroup(){return OB(this)}getPipelineCollectionId(){return YE(this)}getPipelineDocuments(){return Xa(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==JC.name&&s._name!==UC.name||(n="keyless"),s._name===WE.name&&n==="exact"&&(n="augmented"),s._name===HC.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return Tn(this)}}function Tn(r){const e=r.stages[0];return e instanceof No||e instanceof Fo||e instanceof bB||e instanceof PB?e._name:"unknown"}function ko(r){if(Tn(r)==="collection")return r.stages[0].hr}function OB(r){if(Tn(r)==="collection_group")return r.stages[0].collectionId}function YE(r){switch(Tn(r)){case"collection":return fe.fromString(ko(r)).lastSegment();case"collection_group":return OB(r);default:return}}function Xa(r){if(Tn(r)==="documents")return r.stages[0].Tr}class I{constructor(e,t){this.type=e,this.value=t}static mr(){return new I("ERROR",void 0)}static pr(){return new I("UNSET",void 0)}static gr(){return new I("NULL",Or)}static newValue(e){return ht(e)?new I("NULL",Or):function(n){return!!n&&"booleanValue"in n}(e)?new I("BOOLEAN",e):Rt(e)?new I("INT",e):zn(e)?new I("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new I("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new I("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):Fr(e)?new I("ARRAY",e):$i(e)?new I("VECTOR",e):Wn(e)?new I("MAP",e):new I("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function ys(r){if(!r.yr())return r.value}function jC(r){return r instanceof On?r._expr:r}function Z(r){if((r=jC(r))instanceof Hr)return new XE(r);if(r instanceof Ur)return new ZE(r);if(r instanceof Cs)return new e_(r);if(r instanceof F){if(r.name==="add")return new r_(r);if(r.name==="subtract")return new s_(r);if(r.name==="multiply")return new i_(r);if(r.name==="divide")return new o_(r);if(r.name==="mod")return new a_(r);if(r.name==="and")return new B_(r);if(r.name==="equal")return new __(r);if(r.name==="not_equal")return new D_(r);if(r.name==="less_than")return new y_(r);if(r.name==="less_than_or_equal")return new I_(r);if(r.name==="greater_than")return new w_(r);if(r.name==="greater_than_or_equal")return new T_(r);if(r.name==="array_concat")return new A_(r);if(r.name==="array_reverse")return new v_(r);if(r.name==="array_contains")return new R_(r);if(r.name==="array_contains_all")return new b_(r);if(r.name==="array_contains_any")return new P_(r);if(r.name==="array_length")return new S_(r);if(r.name==="array_element")return new O_(r);if(r.name==="equal_any")return new qC(r);if(r.name==="not_equal_any")return new c_(r);if(r.name==="is_nan")return new l_(r);if(r.name==="is_not_nan")return new h_(r);if(r.name==="is_null")return new C_(r);if(r.name==="is_not_null")return new f_(r);if(r.name==="is_error")return new d_(r);if(r.name==="exists")return new p_(r);if(r.name==="not")return new xo(r);if(r.name==="or")return new u_(r);if(r.name==="xor")return new NB(r);if(r.name==="conditional")return new g_(r);if(r.name==="maximum")return new m_(r);if(r.name==="minimum")return new E_(r);if(r.name==="reverse")return new N_(r);if(r.name==="replace_first")return new F_(r);if(r.name==="replace_all")return new L_(r);if(r.name==="char_length")return new k_(r);if(r.name==="byte_length")return new x_(r);if(r.name==="like")return new V_(r);if(r.name==="regex_contains")return new M_(r);if(r.name==="regex_match")return new G_(r);if(r.name==="string_contains")return new H_(r);if(r.name==="starts_with")return new U_(r);if(r.name==="ends_with")return new J_(r);if(r.name==="to_lower")return new j_(r);if(r.name==="to_upper")return new q_(r);if(r.name==="trim")return new K_(r);if(r.name==="string_concat")return new z_(r);if(r.name==="map_get")return new Q_(r);if(r.name==="cosine_distance")return new $_(r);if(r.name==="dot_product")return new W_(r);if(r.name==="euclidean_distance")return new Y_(r);if(r.name==="vector_length")return new X_(r);if(r.name==="unix_micros_to_timestamp")return new rD(r);if(r.name==="timestamp_to_unix_micros")return new oD(r);if(r.name==="unix_millis_to_timestamp")return new sD(r);if(r.name==="timestamp_to_unix_millis")return new aD(r);if(r.name==="unix_seconds_to_timestamp")return new iD(r);if(r.name==="timestamp_to_unix_seconds")return new BD(r);if(r.name==="timestamp_add")return new uD(r);if(r.name==="timestamp_subtract")return new cD(r)}throw new Error(`Unknown Expr : ${r}`)}class XE{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===vt)return I.newValue({referenceValue:no(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:xi(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:xi(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Do(n)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:xi(i.serializer,te.fromTimestamp(Sr(o)))};if(i.serverTimestampBehavior==="previous"){const B=Qs(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,n)):I.newValue(n):I.pr()}}class ZE{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class e_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map(s=>Z(s).evaluate(e,t));return n.some(s=>s.yr())?I.mr():I.newValue({arrayValue:{values:n.map(s=>s.value)}})}}function Ue(r){return zn(r)?Number(r.doubleValue):Number(r.integerValue)}function Vt(r){return BigInt(r.integerValue)}const t_=BigInt("0x7fffffffffffffff"),n_=-BigInt("0x8000000000000000");class Xs{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const n=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.br(n,s);for(const o of this.expr.params.slice(2)){const B=Z(o).evaluate(e,t);i=this.br(i,B)}return i}br(e,t){if(e.yr()||t.yr())return I.mr();if(e.wr()||t.wr())return I.gr();const n=e.value,s=t.value;if(!zn(n)&&!Rt(n)||!zn(s)&&!Rt(s))return I.mr();if(zn(n)||zn(s)){const i=this.Sr(n,s);return i?I.newValue(i):I.mr()}if(Rt(n)&&Rt(s)){const i=this.vr(n,s);return i===void 0?I.mr():typeof i=="number"?I.newValue({doubleValue:i}):i<n_||i>t_?I.mr():I.newValue({integerValue:`${i}`})}return I.mr()}}function en(r,e){return Ne(r)!==Ne(e)?"TYPE_MISMATCH":at(r)||at(e)?"NOT_EQ":ht(r)&&ht(e)?"EQ":ht(r)||ht(e)?"NULL":Fr(r)&&Fr(e)?function(n,s){var o,B,u;if(((o=n.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=n.values)==null?void 0:u.length)??0);c++){const h=n.values[c],f=s.values[c];switch(en(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:X(44609,{Dr:h,Cr:f})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):$i(r)&&$i(e)||Wn(r)&&Wn(e)?function(n,s){const i=n.fields||{},o=s.fields||{};if(zi(i)!==zi(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(en(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return mt(n,s,{u:!1,i:!0,o:!0})}(r,e)?"EQ":"NOT_EQ"}class r_ extends Xs{vr(e,t){return Vt(e)+Vt(t)}Sr(e,t){return{doubleValue:Ue(e)+Ue(t)}}}class s_ extends Xs{constructor(e){super(e),this.expr=e}vr(e,t){return Vt(e)-Vt(t)}Sr(e,t){return{doubleValue:Ue(e)-Ue(t)}}}class i_ extends Xs{constructor(e){super(e),this.expr=e}vr(e,t){return Vt(e)*Vt(t)}Sr(e,t){return{doubleValue:Ue(e)*Ue(t)}}}class o_ extends Xs{constructor(e){super(e),this.expr=e}vr(e,t){const n=Vt(t);if(n!==BigInt(0))return Vt(e)/n}Sr(e,t){const n=Ue(t);return n===0?{doubleValue:Rs(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ue(e)/n}}}class a_ extends Xs{constructor(e){super(e),this.expr=e}vr(e,t){const n=Vt(t);if(n!==BigInt(0))return Vt(e)%n}Sr(e,t){const n=Ue(t);if(n!==0)return{doubleValue:Ue(e)%n}}}class B_{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return I.newValue(Me);break;case"NULL":s=!0;break;default:n=!0}}return n?I.mr():s?I.gr():I.newValue(it)}}class xo{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,9634);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return I.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return I.gr();default:return I.mr()}}}class u_{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return I.newValue(it);break;case"NULL":s=!0;break;default:n=!0}}return n?I.mr():s?I.gr():I.newValue(Me)}}class NB{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=NB.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return I.mr()}}return s?I.gr():I.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class qC{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,55094);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.mr()}if(n)return I.gr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(ht(s.value)&&ht(u)?"EQ":en(s.value,u)){case"EQ":return I.newValue(it);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:X(44608,{value:s.value,candidate:u})}return n?I.gr():I.newValue(Me)}}class c_{constructor(e){this.expr=e}evaluate(e,t){return new xo(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class l_{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return I.newValue(Me);case"DOUBLE":return I.newValue({booleanValue:isNaN(Ue(n.value))});case"NULL":return I.gr();default:return I.mr()}}}class h_{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new xo(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class C_{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(it);case"UNSET":case"ERROR":return I.mr();default:return I.newValue(Me)}}}class f_{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new xo(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class d_{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(it):I.newValue(Me)}}class p_{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.mr();case"UNSET":return I.newValue(Me);default:return I.newValue(it)}}}class g_{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===3,11706);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return I.mr()}}}class m_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ot(i.value,s.value)>0?i:s}return s===void 0?I.gr():s}}class E_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ot(i.value,s.value)<0?i:s}return s===void 0?I.gr():s}}class Jr{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return I.mr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.mr()}return this.Fr(n,s)}}class __ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return I.newValue(it);if(e.wr()||t.wr()||at(e.value)||at(t.value)||Ne(e.value)!==Ne(t.value))return I.newValue(Me);switch(en(e.value,t.value)){case"EQ":return I.newValue(it);case"NOT_EQ":return I.newValue(Me);case"NULL":return I.gr();default:X(44615,{left:e,right:t})}}}class D_ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){switch(en(e.value,t.value)){case"EQ":return I.newValue(Me);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(it);case"NULL":return I.gr();default:X(44614,{left:e,right:t})}}}class y_ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){return Ne(e.value)!==Ne(t.value)||at(e.value)||at(t.value)?I.newValue(Me):I.newValue({booleanValue:ot(e.value,t.value)<0})}}class I_ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){return Ne(e.value)!==Ne(t.value)||at(e.value)||at(t.value)?I.newValue(Me):en(e.value,t.value)==="EQ"?I.newValue(it):I.newValue({booleanValue:ot(e.value,t.value)<0})}}class w_ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){return Ne(e.value)!==Ne(t.value)||at(e.value)||at(t.value)?I.newValue(Me):I.newValue({booleanValue:ot(e.value,t.value)>0})}}class T_ extends Jr{constructor(e){super(e),this.expr=e}Fr(e,t){return Ne(e.value)!==Ne(t.value)||at(e.value)||at(t.value)?I.newValue(Me):en(e.value,t.value)==="EQ"?I.newValue(it):I.newValue({booleanValue:ot(e.value,t.value)>0})}}class A_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class v_{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,216);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.gr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return I.newValue({arrayValue:{values:[...i].reverse()}})}default:return I.mr()}}}class R_{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new qC(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class b_{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;Q(this.expr.params.length===2,1392);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.mr()}if(n)return I.gr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const g of o){let y=!1;n=!1;for(const v of B){switch(ht(g)&&ht(v)?"EQ":en(g,v)){case"EQ":y=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:X(44613,{value:v,search:g})}if(y)break}if(!y)return I.newValue(Me)}return I.newValue(it)}}class P_{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;Q(this.expr.params.length===2,2680);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.mr()}if(n)return I.gr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const g of B)for(const y of o)switch(ht(g)&&ht(y)?"EQ":en(g,y)){case"EQ":return I.newValue(it);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:X(60403,{value:g,search:y})}return n?I.gr():I.newValue(Me)}}class S_{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Q(this.expr.params.length===1,38605);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.gr();case"ARRAY":return I.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return I.mr()}}}class O_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class N_{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,1508);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.gr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Oe.fromBase64String(o).toUint8Array();return B.reverse(),I.newValue({bytesValue:Oe.fromUint8Array(B).toBase64()})}return I.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,c=>c.segment).reverse();return I.newValue({stringValue:u.join("")})}default:return I.mr()}}}class F_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class L_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class k_{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.gr();case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B}(n.value.stringValue);return s===void 0?I.mr():I.newValue({integerValue:s})}default:return I.mr()}}}class x_{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,8486);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?I.newValue({integerValue:Oe.fromBase64String(o).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let c=0;for(let h=0;h<u.length;h++){const f=u.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const g=u.codePointAt(h+1);if(g===void 0||!(g>=56320&&g<=57343))return;c+=4,h++}}else if(f<=127)c+=1;else if(f<=2047)c+=2;else if(f<=65535)c+=3;else{if(!(f<=1114111))return;c+=4,h++}}return c}((i=n.value)==null?void 0:i.stringValue);return o===void 0?I.mr():I.newValue({integerValue:o})}case"NULL":return I.gr();default:return I.mr()}}}class jr{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return I.mr()}return n?I.gr():this.Or((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class V_ extends jr{Or(e,t){try{const n=function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=CB.compile(n);return I.newValue({booleanValue:s.matches(e)})}catch(n){return It(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),I.mr()}}}class M_ extends jr{Or(e,t){try{const n=CB.compile(t);return I.newValue({booleanValue:n.test(e)})}catch{return It(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.mr()}}}class G_ extends jr{Or(e,t){try{return I.newValue({booleanValue:CB.compile(t).matches(e)})}catch{return It(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.mr()}}}class H_ extends jr{Or(e,t){return I.newValue({booleanValue:e.includes(t)})}}class U_ extends jr{Or(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class J_ extends jr{Or(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class j_{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,29079);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return I.gr();default:return I.mr()}}}class q_{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,60487);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return I.gr();default:return I.mr()}}}class K_{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,28544);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return I.gr();default:return I.mr()}}}class z_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(o=>Z(o).evaluate(e,t));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.mr()}return i?I.gr():I.newValue({stringValue:s})}}class Q_{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;Q(this.expr.params.length===2,4483);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return I.pr();case"MAP":break;default:return I.mr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.mr();const i=(c=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?I.pr():I.newValue(i)}}class FB{constructor(e){this.expr=e}evaluate(e,t){var c,h;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.mr()}if(n)return I.gr();const o=qa(s.value),B=qa(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return I.mr();const u=this.Mr(o,B);return u===void 0||isNaN(u)?I.mr():I.newValue({doubleValue:u})}}class $_ extends FB{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let c=0;c<n.length;c++){if(!Pn(n[c])||!Pn(s[c]))return;const h=Ue(n[c]),f=Ue(s[c]);i+=h*f,o+=h*h,B+=f*f}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class W_ extends FB{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Pn(n[o])||!Pn(s[o]))return;i+=Ue(n[o])*Ue(s[o])}return i}}class Y_ extends FB{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Pn(n[o])||!Pn(s[o]))return;const B=Ue(n[o]),u=Ue(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class X_{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,39044);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=qa(n.value);return I.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return I.gr();default:return I.mr()}}}const Vs=BigInt(-62135596800),Ms=BigInt(253402300799),so=BigInt(1e3),An=BigInt(1e6),Z_=Vs*so,eD=Ms*so+BigInt(999),tD=Vs*An,nD=Ms*An+BigInt(999999);function LB(r){return r>=tD&&r<=nD}function KC(r){return r>=Vs&&r<=Ms}function Gs(r,e){const t=BigInt(r);return!(t<Vs||t>Ms)&&!(e<0||e>=1e9)&&(t!==Vs||e===0)&&!(t===Ms&&e>999999999)}function zC(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function kB(r){return BigInt(r.seconds)*An+BigInt(Math.trunc(r.nanoseconds/1e3))}class xB{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return I.gr();default:return I.mr()}}}class rD extends xB{toTimestamp(e){if(!LB(e))return I.mr();let t=Number(e/An),n=Number(e%An*BigInt(1e3));const s=zC(t,n);return t=s.seconds,n=s.nanos,Gs(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.mr()}}class sD extends xB{toTimestamp(e){if(!function(o){return o>=Z_&&o<=eD}(e))return I.mr();let t=Number(e/so),n=Number(e%so*BigInt(1e6));const s=zC(t,n);return t=s.seconds,n=s.nanos,Gs(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.mr()}}class iD extends xB{toTimestamp(e){if(!KC(e))return I.mr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class VB{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return I.gr();default:return I.mr()}const s=wB(n.value.timestampValue);return Gs(s.seconds,s.nanoseconds)?this.Nr(s):I.mr()}}class oD extends VB{Nr(e){const t=kB(e);return LB(t)?I.newValue({integerValue:`${t.toString()}`}):I.mr()}}class aD extends VB{Nr(e){const t=kB(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:n.toString()}):I.newValue({integerValue:(n-BigInt(1)).toString()})}}class BD extends VB{Nr(e){const t=BigInt(e.seconds);return KC(t)?I.newValue({integerValue:t.toString()}):I.mr()}}class QC{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return I.mr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(ne){switch(ne){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.mr();break;case"NULL":n=!0;break;default:return I.mr()}const B=Z(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return I.mr()}if(n)return I.gr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return I.mr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Lr(o)))return I.mr()}catch(j){return It(`Error during timestamp arithmetic: ${j}`),I.mr()}const h=wB(s.value.timestampValue);if(!Gs(h.seconds,h.nanoseconds))return I.mr();const f=kB(h),g=this.Br(f,c);if(!LB(g))return I.mr();const y=Number(g/An),v=g%An,L=Number((v<0?v+An:v)*BigInt(1e3)),M=v<0?y-1:y;return Gs(M,L)?I.newValue({timestampValue:{seconds:M,nanos:L}}):I.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class uD extends QC{Br(e,t){return e+t}}class cD extends QC{Br(e,t){return e-t}}function Hs(r){if((r=jC(r))instanceof Hr)return`fld(${r.fieldName})`;if(r instanceof Ur)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ge?`ref(${t.path})`:t instanceof st?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof F)return`fn(${r.name},[${r.params.map(Hs).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.cr.map(Hs).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function lD(r){if(r instanceof HC)return`${r._name}(${bi(r.fields)})`;if(r instanceof UC){let e=`${r._name}(${bi(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${bi(r.groups)})`),e}if(r instanceof JC)return`${r._name}(${bi(r.groups)})`;if(r instanceof No)return`${r._name}(${r.hr})`;if(r instanceof Fo)return`${r._name}(${r.collectionId})`;if(r instanceof bB)return`${r._name}()`;if(r instanceof PB)return`${r._name}(${r.Tr.sort()})`;if(r instanceof Lo)return`${r._name}(${Hs(r.condition)})`;if(r instanceof sr)return`${r._name}(${r.limit})`;if(r instanceof zt)return`${r._name}(${function(t){return t.map(n=>`${Hs(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function bi(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${Hs(t)}`).join(",")}`}function Yt(r){return r.stages.map(e=>lD(e)).join("|")}function $C(r,e){return Yt(r)===Yt(e)}function ke(r){return r instanceof Ye}function Tl(r){return ke(r)?Yt(r):ms(r)}function WC(r){return ke(r)?Yt(r):function(t){return`${sC(Ot(t))}|lt:${t.limitType}`}(r)}function Vo(r,e){return r instanceof Ye&&e instanceof Ye?$C(r,e):!(r instanceof Ye&&!(e instanceof Ye)||!(r instanceof Ye)&&e instanceof Ye)&&bm(r,e)}function YC(r){return qn(r)?Yt(r):sC(r)}function XC(r,e){return r instanceof Ye&&e instanceof Ye?$C(r,e):!(r instanceof Ye&&!(e instanceof Ye)||!(r instanceof Ye)&&e instanceof Ye)&&iC(r,e)}function hD(r,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof zt)if(i=!0,B.orderings.some(u=>u.expr instanceof Hr&&u.expr.fieldName===vt))o.push(B);else{const u=B.orderings.map(c=>c);u.push(Vi(vt).ascending()),o.push(new zt(u,{}))}else B instanceof sr&&(i||(o.push(new zt([Vi(vt).ascending()],{})),i=!0)),o.push(B);return i||o.push(new zt([Vi(vt).ascending()],{})),o}(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(n))}return new Ye(r.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&um(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ps(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ps(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=lC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=Wh(o,B);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(t,n)=>nl(t,n))&&Pr(this.baseMutations,e.baseMutations,(t,n)=>nl(t,n))}}class MB{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let s=function(){return Fm}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new MB(e,t,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="";function fD(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Al(e)),e=dD(r.get(t),e);return Al(e)}function dD(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case ZC:t+="";break;default:t+=i}}return t}function Al(r){return r+ZC+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,n,s,i=te.min(),o=te.min(),B=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.$r=e}}function mD(r){const e=Ym({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?za(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.Zi=new _D}addToCollectionParentIndex(e,t){return this.Zi.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Sn.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class _D{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Se(fe.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Se(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Fn(0)}static bs(){return new Fn(-1)}}// Copyright 2024 Google LLC* @license
function ef(r,e){var n;let t=e;for(const s of r.stages)t=yD({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function Mo(r,e){return ef(r,[e]).length>0}function DD(r,e){return ke(r)?Mo(r,e):vo(r,e)}function yD(r,e,t){if(e instanceof No)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof Lo)return function(s,i,o){return o.filter(B=>{const u=ys(Z(i.condition).evaluate(s,B));return u!==void 0&&mt(u,it)})}(r,e,t);if(e instanceof Fo)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof bB)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof PB)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Pr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof sr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof zt)return function(s,i,o){const B=i.orderings.map(u=>({Ms:Z(u.expr),direction:u.direction}));return[...o].sort((u,c)=>{for(const{Ms:h,direction:f}of B){const g=ys(h.evaluate(s,u)),y=ys(h.evaluate(s,c)),v=ot(g??Or,y??Or);if(v!==0)return f==="ascending"?v:-v}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Za(r){const e=function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof zt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(const s of e){const i=ys(Z(s.expr).evaluate({serializer:r.serializer},t)),o=ys(Z(s.expr).evaluate({serializer:r.serializer},n)),B=ot(i||Or,o||Or);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function va(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof sr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.changes=new ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&ps(n.mutation,s,_t.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ie()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ie()){const s=fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Dr();return i.forEach((B,u)=>{o=o.insert(B,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=fn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ie()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,n,s){let i=rt();const o=Es(),B=function(){return Es()}();return t.forEach((u,c)=>{const h=n.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof Br)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ps(h.mutation,c,h.mutation.getFieldMask(),de.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new wD(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const n=Es();let s=new we((o,B)=>o-B),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=n.get(u)||_t.empty();h=B.applyToLocalView(c,h),n.set(u,h);const f=(s.get(B.batchId)||ie()).add(u);s=s.insert(B.batchId,f)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,f=lC();h.forEach(g=>{if(!i.has(g)){const y=Wh(t.get(g),n.get(g));y!==null&&f.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return k.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return ke(t)?this.getDocumentsMatchingPipeline(e,t,n,s):Am(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):k.resolve(fn());let B=Fs,u=i;return o.next(c=>k.forEach(c,(h,f)=>(B<f.largestBatchId&&(B=f.largestBatchId),i.get(h)?k.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ie())).next(h=>({batchId:B,changes:cC(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(n=>{let s=Dr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Dr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,u=>{const c=function(f,g){return new Ao(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>vo(t,B)))}getDocumentsMatchingPipeline(e,t,n,s){if(Tn(t)==="collection_group"){const i=OB(t);let o=Dr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,u=>{const c=function(f,g){const y=f.stages.map(v=>v instanceof Fo?new No(g.canonicalString(),{}):v);return new Ye(f.serializer,y)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,n,s).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(o=>{switch(i=o,Tn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ie();for(const u of Xa(t))B=B.add(Y.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new z("invalid-argument",`Invalid pipeline source to execute offline: ${Yt(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Mo(t,B)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,Ke.newInvalidDocument(B)))});let s=Dr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&ps(B.mutation,o,_t.empty(),de.now()),n(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,n){switch(Tn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,fe.fromString(ko(t)),n);case"collection_group":throw new z("invalid-argument",`Unexpected collection group pipeline: ${Yt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Xa(t).map(s=>Y.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new z("invalid-argument",`Failed to get overlays for pipeline: ${Yt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return k.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:mD(s.bundledQuery),readTime:Nt(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.overlays=new we(Y.comparator),this.Gs=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const n=fn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=fn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),k.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Zr(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Gs.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){const s=fn(),i=t.length+1,o=new Y(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new we((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let h=i.get(c.largestBatchId);h===null&&(h=fn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=fn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return k.resolve(B)}Zr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Gs.get(s.largestBatchId).delete(n.key);this.Gs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new pD(t,n));let i=this.Gs.get(t);i===void 0&&(i=ie(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(){this.zs=new Se(Ve.js),this.Hs=new Se(Ve.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new Ve(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Zs(new Ve(e,t))}Xs(e,t){e.forEach(n=>this.removeReference(n,t))}e_(e){const t=new Y(new fe([])),n=new Ve(t,e),s=new Ve(t,e+1),i=[];return this.Hs.forEachInRange([n,s],o=>{this.Zs(o),i.push(o.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new Y(new fe([])),n=new Ve(t,e),s=new Ve(t,e+1);let i=ie();return this.Hs.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ve(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ve{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return Y.comparator(e.key,t.key)||oe(e.r_,t.r_)}static Js(e,t){return oe(e.r_,t.r_)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Se(Ve.js)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CD(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.i_=this.i_.add(new Ve(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.__(n),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?gB:this.Gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ve(t,0),s=new Ve(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,s],o=>{const B=this.s_(o.r_);i.push(B)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Se(oe);return t.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],B=>{n=n.add(B.r_)})}),k.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new Y(i),0);let B=new Se(oe);return this.i_.forEachWhile(u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.r_)),!0)},o),k.resolve(this.o_(B))}o_(e){const t=[];return e.forEach(n=>{const s=this.s_(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return k.forEach(t.mutations,s=>{const i=new Ve(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=n})}Hr(e){}containsKey(e,t){const n=new Ve(t,0),s=this.i_.firstAfterOrEqual(n);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.u_=e,this.docs=function(){return new we(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():Ke.newInvalidDocument(t))}getEntries(e,t){let n=rt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ke.newInvalidDocument(s))}),k.resolve(n)}getAllEntries(e){let t=rt();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),k.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;ke(t)?(i=fe.fromString(ko(t)),o=h=>Mo(t,h)):(i=t.path,o=h=>vo(t,h));let B=rt();const u=new Y(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||Im(ym(f),n)<=0||(s.has(f.key)||o(f))&&(B=B.insert(f.key,f.mutableCopy()))}return k.resolve(B)}getAllFromCollectionGroup(e,t,n,s){X(9500)}c_(e,t){return k.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new SD(this)}getSize(e){return k.resolve(this.size)}}class SD extends ID{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(n)}),k.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.persistence=e,this.l_=new ur(t=>YC(t),XC),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.E_=0,this.h_=new GB,this.targetCount=0,this.T_=Fn.ws()}forEachTarget(e,t){return this.l_.forEach((n,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),k.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Ds(t),k.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.l_.forEach((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),k.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.P_={},this.overlays={},this.I_=new bo(0),this.R_=!1,this.R_=!0,this.A_=new RD,this.referenceDelegate=e(this),this.V_=new OD(this),this.indexManager=new ED,this.remoteDocumentCache=function(s){return new PD(s)}(n=>this.referenceDelegate.d_(n)),this.serializer=new gD(t),this.f_=new AD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new bD(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){q("MemoryPersistence","Starting transaction:",e);const s=new ND(this.I_.next());return this.referenceDelegate.m_(),n(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return k.or(Object.values(this.P_).map(n=>()=>n.containsKey(e,t)))}}class ND extends wE{constructor(e){super(),this.currentSequenceNumber=e}}class HB{constructor(e){this.persistence=e,this.y_=new GB,this.w_=null}static b_(e){return new HB(e)}get S_(){if(this.w_)return this.w_;throw X(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),k.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.S_,n=>{const s=Y.fromPath(n);return this.v_(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return k.or([()=>k.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class io{constructor(e,t){this.persistence=e,this.D_=new ur(n=>fD(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=PE(this,t)}static b_(e,t){return new io(e,t)}m_(){}p_(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Cs(e){let t=0;return this.sr(e,n=>{t++}).next(()=>t)}sr(e,t){return k.forEach(this.D_,(n,s)=>this.Os(e,n,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,o=>this.Os(e,o,t).next(B=>{B||(n++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),k.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fi(e.data.value)),t}Os(e,t,n){return k.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return k.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UB{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=s}static mo(e,t){let n=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new UB(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(r,e){return Y.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return tp()?8:TE(ze())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Do(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new LD;return this.xo(e,t,o).next(B=>{if(i.result=B,this.yo)return this.Co(e,t,o,B.size)})}).next(()=>i.result)}Co(e,t,n,s){return ke(t)?k.resolve():n.documentReadCount<this.wo?(Er()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ms(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),k.resolve()):(Er()<=ae.DEBUG&&q("QueryEngine","Query:",ms(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.bo*s?(Er()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ms(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(t))):k.resolve())}vo(e,t){if(ke(t))return k.resolve(null);let n=t;if(Bl(n))return k.resolve(null);let s=Ot(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=za(n,null,"F"),s=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=ie(...o);return this.So.getDocuments(e,B).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Fo(n,u);return this.Oo(n,h,B,c.readTime)?this.vo(e,za(n,null,"F")):this.Mo(e,h,n,c)}))})))}Do(e,t,n,s){return(ke(t)?function(o){for(const B of o.stages){if(B instanceof sr||B instanceof wl)return!1;if(B instanceof Lo){if(B.condition instanceof VC&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof Hr&&B.condition._expr.params[0].fieldName===vt)continue;return!1}}return!0}(t):Bl(t))||s.isEqual(te.min())?k.resolve(null):this.So.getDocuments(e,n).next(i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,s)?k.resolve(null):(Er()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tl(t)),this.Mo(e,o,t,Dm(s,Fs)).next(B=>B))})}Fo(e,t){let n,s;return ke(e)?(n=new Se(FD),s=i=>Mo(e,i)):(n=new Se(yB(e)),s=i=>vo(e,i)),t.forEach((i,o)=>{s(o)&&(n=n.add(o))}),n}Oo(e,t,n,s){if(ke(e))return function(B){return B.stages.some(u=>u instanceof sr||u instanceof wl)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,n){return Er()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Tl(t)),this.So.getDocumentsMatchingQuery(e,t,Sn.min(),n)}Mo(e,t,n,s){return this.So.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JB="LocalStore",xD=3e8;class VD{constructor(e,t,n,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new we(oe),this.Bo=new ur(i=>YC(i),XC),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TD(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function MD(r,e,t,n){return new VD(r,e,t,n)}async function nf(r,e){const t=re(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],B=[];let u=ie();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(n,u).next(c=>({$o:c,removedBatchIds:o,addedBatchIds:B}))})})}function GD(r,e){const t=re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(B,u,c,h){const f=c.batch,g=f.keys();let y=k.resolve();return g.forEach(v=>{y=y.next(()=>h.getEntry(u,v)).next(L=>{const M=c.docVersions.get(v);Q(M!==null,48541),L.version.compareTo(M)<0&&(f.applyToRemoteDocument(L,c),L.isValidDocument()&&(L.setReadTime(c.commitVersion),h.addEntry(L)))})}),y.next(()=>B.mutationQueue.removeMutationBatch(u,f))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(B){let u=ie();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function rf(r){const e=re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function HD(r,e){const t=re(r),n=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const B=[];e.targetChanges.forEach((h,f)=>{const g=s.get(f);if(!g)return;B.push(t.V_.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.V_.addMatchingKeys(i,h.addedDocuments,f)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Oe.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,n)),s=s.insert(f,y),function(L,M,j){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=xD?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,y,h)&&B.push(t.V_.updateTargetData(i,y))});let u=rt(),c=ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(UD(i,o,e.documentUpdates).next(h=>{u=h.Ko,c=h.Qo})),!n.isEqual(te.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next(f=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n));B.push(h)}return k.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Lo=s,i))}function UD(r,e,t){let n=ie(),s=ie();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=rt();return t.forEach((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):q(JB,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)}),{Ko:o,Qo:s}})}function JD(r,e){const t=re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=gB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function jD(r,e){const t=re(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.V_.getTargetData(n,e).next(i=>i?(s=i,k.resolve(s)):t.V_.allocateTargetId(n).next(o=>(s=new Qt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Lo.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n})}async function eB(r,e,t){const n=re(r),s=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gr(o))throw o;q(JB,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(s.target)}function vl(r,e,t){const n=re(r);let s=te.min(),i=ie();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=re(u),g=f.Bo.get(h);return g!==void 0?k.resolve(f.Lo.get(g)):f.V_.getTargetData(c,h)}(n,o,ke(e)?e:Ot(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,B.targetId).next(u=>{i=u})}).next(()=>n.No.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:ie())).next(B=>(qD(n,B),{documents:B,Wo:i})))}function qD(r,e){e.forEach((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Uo.get(s)||te.min();n.readTime.compareTo(i)>0&&r.Uo.set(s,n.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(Zt(t),this.Xo=!1):q("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="RemoteStore";class zD{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Fn(1e3),this.ca=new Fn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(o=>{n.enqueueAndForget(async()=>{lr(this)&&(q(Mt,"Restarting streams for network reachability change."),await async function(u){const c=re(u);c.la.add(4),await Zs(c),c.Ta.set("Unknown"),c.la.delete(4),await Go(c)}(this))})}),this.Ta=new KD(n,s)}}async function Go(r){if(lr(r))for(const e of r.Ea)await e(!0)}async function Zs(r){for(const e of r.Ea)await e(!1)}function tB(r,e){return r.oa.get(e)||void 0}function sf(r,e){const t=re(r),n=tB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const s=function(B,u){const c=tB(B,u);c!==void 0&&B.aa.delete(c);const h=function(g,y){return y%2!=0?g.ca.next():g.ua.next()}(B,u);return B.oa.set(u,h),B.aa.set(h,u),h}(t,e.targetId);q(Mt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Qt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),zB(t)?KB(t):qr(t).Yt()&&qB(t,i)}function jB(r,e){const t=re(r),n=qr(t),s=tB(t,e);q(Mt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),n.Yt()&&of(t,s),t._a.size===0&&(n.Yt()?n.en():lr(t)&&t.Ta.set("Unknown"))}function qB(r,e){if(r.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=r.aa.get(e.targetId);if(t===void 0)return void q(Mt,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}qr(r).Pn(e)}function of(r,e){r.Pa.J(e),qr(r).In(e)}function KB(r){r.Pa=new Gm({getRemoteKeysForTarget:e=>{const t=r.aa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ie()},ye:e=>r._a.get(e)||null,Ve:()=>r.datastore.serializer.databaseId}),qr(r).start(),r.Ta.ea()}function zB(r){return lr(r)&&!qr(r).Jt()&&r._a.size>0}function lr(r){return re(r).la.size===0}function af(r){r.Pa=void 0}async function QD(r){r.Ta.set("Online")}async function $D(r){r._a.forEach((e,t)=>{qB(r,e)})}async function WD(r,e){af(r),zB(r)?(r.Ta.ra(e),KB(r)):r.Ta.set("Unknown")}async function YD(r,e,t){if(r.Ta.set("Online"),e instanceof CC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s._a.has(B)){const u=s.aa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.oa.delete(u),s.aa.delete(B)),s._a.delete(B)}s.Pa.removeTarget(B)}}(r,e)}catch(n){q(Mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await oo(r,n)}else if(e instanceof ki?r.Pa._e(e):e instanceof hC?r.Pa.he(e):r.Pa.ue(e),!t.isEqual(te.min()))try{const n=await rf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const B=i.Pa.fe(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const f=i._a.get(c);if(!f)return;i._a.set(c,f.withResumeToken(Oe.EMPTY_BYTE_STRING,f.snapshotVersion)),of(i,c);const g=new Qt(f.target,c,h,f.sequenceNumber);qB(i,g)});const u=function(h,f){const g=new Map;f.targetChanges.forEach((v,L)=>{const M=h.aa.get(L);M!==void 0&&g.set(M,v)});let y=new we(oe);return f.targetMismatches.forEach((v,L)=>{const M=h.aa.get(v);M!==void 0&&(y=y.insert(M,L))}),new Ws(f.snapshotVersion,g,y,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){q(Mt,"Failed to raise snapshot:",n),await oo(r,n)}}async function oo(r,e,t){if(!Gr(e))throw e;r.la.add(1),await Zs(r),r.Ta.set("Offline"),t||(t=()=>rf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{q(Mt,"Retrying IndexedDB access"),await t(),r.la.delete(1),await Go(r)})}function Bf(r,e){return e().catch(t=>oo(r,t,e))}async function Ho(r){const e=re(r),t=Ln(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:gB;for(;XD(e);)try{const s=await JD(e.localStore,n);if(s===null){e.sa.length===0&&t.en();break}n=s.batchId,ZD(e,s)}catch(s){await oo(e,s)}uf(e)&&cf(e)}function XD(r){return lr(r)&&r.sa.length<10}function ZD(r,e){r.sa.push(e);const t=Ln(r);t.Yt()&&t.Rn&&t.An(e.mutations)}function uf(r){return lr(r)&&!Ln(r).Jt()&&r.sa.length>0}function cf(r){Ln(r).start()}async function ey(r){Ln(r).fn()}async function ty(r){const e=Ln(r);for(const t of r.sa)e.An(t.mutations)}async function ny(r,e,t){const n=r.sa.shift(),s=MB.from(n,e,t);await Bf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ho(r)}async function ry(r,e){e&&Ln(r).Rn&&await async function(n,s){if(function(o){return Om(o)&&o!==V.ABORTED}(s.code)){const i=n.sa.shift();Ln(n).Xt(),await Bf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ho(n)}}(r,e),uf(r)&&cf(r)}async function Rl(r,e){const t=re(r);t.asyncQueue.verifyOperationInProgress(),q(Mt,"RemoteStore received new credentials");const n=lr(t);t.la.add(3),await Zs(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Go(t)}async function sy(r,e){const t=re(r);e?(t.la.delete(2),await Go(t)):e||(t.la.add(2),await Zs(t),t.Ta.set("Unknown"))}function qr(r){return r.Ia||(r.Ia=function(t,n,s){const i=re(t);return i.pn(),new pE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:QD.bind(null,r),Et:$D.bind(null,r),Tt:WD.bind(null,r),Tn:YD.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ia.Xt(),zB(r)?KB(r):r.Ta.set("Unknown")):(await r.Ia.stop(),af(r))})),r.Ia}function Ln(r){return r.Ra||(r.Ra=function(t,n,s){const i=re(t);return i.pn(),new gE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:()=>Promise.resolve(),Et:ey.bind(null,r),Tt:ry.bind(null,r),Vn:ty.bind(null,r),dn:ny.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ra.Xt(),await Ho(r)):(await r.Ra.stop(),r.sa.length>0&&(q(Mt,`Stopping write stream with ${r.sa.length} pending writes`),r.sa=[]))})),r.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new QB(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $B(r,e){if(Zt("AsyncQueue",`${e}: ${r}`),Gr(r))return new z(V.UNAVAILABLE,`${e}: ${r}`);throw r}class bl{constructor(){this.activeTargetIds=xm()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oy{constructor(){this.fu=new bl,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new bl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static emptySet(e){return new Yn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Y.comparator(t.key,n.key):(t,n)=>Y.comparator(t.key,n.key),this.keyedMap=Dr(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Yn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.pu=new we(Y.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):X(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Lr{constructor(e,t,n,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new Lr(e,t,Yn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class By{constructor(){this.queries=Sl(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const s=re(t),i=s.queries;s.queries=Sl(),i.forEach((o,B)=>{for(const u of B.bu)u.onError(n)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Sl(){return new ur(r=>WC(r),Vo)}async function uy(r,e){const t=re(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(n=2):(i=new ay,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=$B(o,`Initialization of query '${ke(e.query)?Yt(e.query):ms(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&WB(t)}async function cy(r,e){const t=re(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function ly(r,e){const t=re(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.bu)B.Cu(s)&&(n=!0);o.wu=s}}n&&WB(t)}function hy(r,e,t){const n=re(r),s=n.queries.get(e);if(s)for(const i of s.bu)i.onError(t);n.queries.delete(e)}function WB(r){r.Du.forEach(e=>{e.next()})}var nB;(function(r){r.Default="default",r.Cache="cache"})(nB||(nB={}));class Cy{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Lr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==nB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.key=e}}class hf{constructor(e){this.key=e}}class fy{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ie(),this.mutatedKeys=ie(),this.Ju=ke(e)?Za(e):yB(e),this.Yu=new Yn(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new Pl,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.tc(this.query,s);e.inorderTraversal((f,g)=>{const y=s.get(f),v=DD(this.query,g)?g:null,L=!!y&&this.mutatedKeys.has(y.key),M=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let j=!1;y&&v?y.data.isEqual(v.data)?L!==M&&(n.track({type:3,doc:v}),j=!0):this.nc(y,v)||(n.track({type:2,doc:v}),j=!0,(u&&this.Ju(v,u)>0||c&&this.Ju(v,c)<0)&&(B=!0)):!y&&v?(n.track({type:0,doc:v}),j=!0):y&&!v&&(n.track({type:1,doc:y}),j=!0,(u||c)&&(B=!0)),j&&(v?(o=o.add(v),i=M?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))});const h=this.rc(this.query);if(h)if(ke(this.query)){const f=[];o.forEach(v=>f.push(v));const g=ef(this.query,f);let y=new Yn(Za(this.query));for(const v of g)y=y.add(v);o.forEach(v=>{y.has(v.key)||(i=i.delete(v.key),n.track({type:1,doc:v}))}),o=y}else{const f=this.sc(this.query);for(;o.size>h;){const g=f==="F"?o.last():o.first();o=o.delete(g.key),i=i.delete(g.key),n.track({type:1,doc:g})}}return{Yu:o,ec:n,Oo:B,mutatedKeys:i}}rc(e){var t;return ke(e)?(t=va(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(ke(e)){const t=va(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(ke(e)){const s=(n=va(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort((h,f)=>function(y,v){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{we:M})}};return L(y)-L(v)}(h.type,f.type)||this.Ju(h.doc,f.doc)),this._c(n),s=s??!1;const B=t&&!s?this.oc():[],u=this.Hu.size===0&&this.current&&!s?1:0,c=u!==this.ju;return this.ju=u,o.length!==0||c?{snapshot:new Lr(this.query,e.Yu,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:B}:{ac:B}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Pl,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ie(),this.Yu.forEach(n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))});const t=[];return e.forEach(n=>{this.Hu.has(n)||t.push(new hf(n))}),this.Hu.forEach(n=>{e.has(n)||t.push(new lf(n))}),t}cc(e){this.zu=e.Wo,this.Hu=ie();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Lr.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const YB="SyncEngine";class dy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class py{constructor(e){this.key=e,this.Ec=!1}}class gy{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new ur(B=>WC(B),Vo),this.Pc=new Map,this.Ic=new Set,this.Rc=new we(Y.comparator),this.Ac=new Map,this.Vc=new GB,this.dc={},this.fc=new Map,this.mc=Fn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function my(r,e,t=!0){const n=mf(r);let s;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Cf(n,e,t,!0),s}async function Ey(r,e){const t=mf(r);await Cf(t,e,!0,!1)}async function Cf(r,e,t,n){const s=await jD(r.localStore,ke(e)?e:Ot(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await _y(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&sf(r.remoteStore,s),B}async function _y(r,e,t,n,s){r.yc=(f,g,y)=>async function(L,M,j,ne){let he=M.view.Xu(j);he.Oo&&(he=await vl(L.localStore,M.query,!1).then(({documents:A})=>M.view.Xu(A,he)));const Ce=ne&&ne.targetChanges.get(M.targetId),Te=ne&&ne.targetMismatches.get(M.targetId)!=null,Ee=M.view.applyChanges(he,L.isPrimaryClient,Ce,Te);return Nl(L,M.targetId,Ee.ac),Ee.snapshot}(r,f,g,y);const i=await vl(r.localStore,e,!0),o=new fy(e,i.Wo),B=o.Xu(i.documents),u=Ys.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(B,r.isPrimaryClient,u);Nl(r,t,c.ac);const h=new dy(e,t,o);return r.Tc.set(e,h),r.Pc.has(t)?r.Pc.get(t).push(e):r.Pc.set(t,[e]),c.snapshot}async function Dy(r,e,t){const n=re(r),s=n.Tc.get(e),i=n.Pc.get(s.targetId);if(i.length>1)return n.Pc.set(s.targetId,i.filter(o=>!Vo(o,e))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await eB(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&jB(n.remoteStore,s.targetId),rB(n,s.targetId)}).catch(Mr)):(rB(n,s.targetId),await eB(n.localStore,s.targetId,!0))}async function yy(r,e){const t=re(r),n=t.Tc.get(e),s=t.Pc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),jB(t.remoteStore,n.targetId))}async function Iy(r,e,t){const n=Py(r);try{const s=await function(o,B){const u=re(o),c=de.now(),h=B.reduce((y,v)=>y.add(v.key),ie());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let v=rt(),L=ie();return u.ko.getEntries(y,h).next(M=>{v=M,v.forEach((j,ne)=>{ne.isValidDocument()||(L=L.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,v)).next(M=>{f=M;const j=[];for(const ne of B){const he=cm(ne,f.get(ne.key).overlayedDocument);he!=null&&j.push(new Br(ne.key,he,qh(he.value.mapValue),St.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,j,B)}).next(M=>{g=M;const j=M.applyToLocalDocumentSet(f,L);return u.documentOverlayCache.saveOverlays(y,M.batchId,j)})}).then(()=>({batchId:g.batchId,changes:cC(f)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,B,u){let c=o.dc[o.currentUser.toKey()];c||(c=new we(oe)),c=c.insert(B,u),o.dc[o.currentUser.toKey()]=c}(n,s.batchId,t),await ei(n,s.changes),await Ho(n.remoteStore)}catch(s){const i=$B(s,"Failed to persist write");t.reject(i)}}async function ff(r,e){const t=re(r);try{const n=await HD(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ac.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Ec=!0:s.modifiedDocuments.size>0?Q(o.Ec,14607):s.removedDocuments.size>0&&(Q(o.Ec,42227),o.Ec=!1))}),await ei(t,n,e)}catch(n){await Mr(n)}}function Ol(r,e,t){const n=re(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tc.forEach((i,o)=>{const B=o.view.xu(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const u=re(o);u.onlineState=B;let c=!1;u.queries.forEach((h,f)=>{for(const g of f.bu)g.xu(B)&&(c=!0)}),c&&WB(u)}(n.eventManager,e),s.length&&n.hc.Tn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function wy(r,e,t){const n=re(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ac.get(e),i=s&&s.key;if(i){let o=new we(Y.comparator);o=o.insert(i,Ke.newNoDocument(i,te.min()));const B=ie().add(i),u=new Ws(te.min(),new Map,new we(oe),o,rt(),B);await ff(n,u),n.Rc=n.Rc.remove(i),n.Ac.delete(e),XB(n)}else await eB(n.localStore,e,!1).then(()=>rB(n,e,t)).catch(Mr)}async function Ty(r,e){const t=re(r),n=e.batch.batchId;try{const s=await GD(t.localStore,e);pf(t,n,null),df(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ei(t,s)}catch(s){await Mr(s)}}async function Ay(r,e,t){const n=re(r);try{const s=await function(o,B){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,B).next(f=>(Q(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(n.localStore,e);pf(n,e,t),df(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ei(n,s)}catch(s){await Mr(s)}}function df(r,e){(r.fc.get(e)||[]).forEach(t=>{t.resolve()}),r.fc.delete(e)}function pf(r,e,t){const n=re(r);let s=n.dc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.dc[n.currentUser.toKey()]=s}}function rB(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Pc.get(e))r.Tc.delete(n),t&&r.hc.wc(n,t);r.Pc.delete(e),r.isPrimaryClient&&r.Vc.e_(e).forEach(n=>{r.Vc.containsKey(n)||gf(r,n)})}function gf(r,e){r.Ic.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(jB(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ac.delete(t),XB(r))}function Nl(r,e,t){for(const n of t)n instanceof lf?(r.Vc.addReference(n.key,e),vy(r,n)):n instanceof hf?(q(YB,"Document no longer in limbo: "+n.key),r.Vc.removeReference(n.key,e),r.Vc.containsKey(n.key)||gf(r,n.key)):X(19791,{bc:n})}function vy(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Ic.has(n)||(q(YB,"New document in limbo: "+t),r.Ic.add(n),XB(r))}function XB(r){for(;r.Ic.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Ic.values().next().value;r.Ic.delete(e);const t=new Y(fe.fromString(e)),n=r.mc.next();r.Ac.set(n,new py(t)),r.Rc=r.Rc.insert(t,n),sf(r.remoteStore,new Qt(Ot(aC(t.path)),n,"TargetPurposeLimboResolution",bo.wn))}}async function ei(r,e,t){const n=re(r),s=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach((B,u)=>{o.push(n.yc(u,e,t).then(c=>{var h;if((c||t)&&n.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=UB.mo(u.targetId,c);i.push(f)}}))}),await Promise.all(o),n.hc.Tn(s),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>k.forEach(c,g=>k.forEach(g.Vo,y=>h.persistence.referenceDelegate.addReference(f,g.targetId,y)).next(()=>k.forEach(g.fo,y=>h.persistence.referenceDelegate.removeReference(f,g.targetId,y)))))}catch(f){if(!Gr(f))throw f;q(JB,"Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const y=h.Lo.get(g),v=y.snapshotVersion,L=y.withLastLimboFreeSnapshotVersion(v);h.Lo=h.Lo.insert(g,L)}}}(n.localStore,i))}async function Ry(r,e){const t=re(r);if(!t.currentUser.isEqual(e)){q(YB,"User change. New user:",e.toKey());const n=await nf(t.localStore,e);t.currentUser=e,function(i,o){i.fc.forEach(B=>{B.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ei(t,n.$o)}}function by(r,e){const t=re(r),n=t.Ac.get(e);if(n&&n.Ec)return ie().add(n.key);{let s=ie();const i=t.Pc.get(e);if(!i)return s;for(const o of i??[]){const B=t.Tc.get(o);s=s.unionWith(B.view.Zu)}return s}}function mf(r){const e=re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ff.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=by.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wy.bind(null,e),e.hc.Tn=ly.bind(null,e.eventManager),e.hc.wc=hy.bind(null,e.eventManager),e}function Py(r){const e=re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ay.bind(null,e),e}class ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ro(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return MD(this.persistence,new kD,e.initialUser,this.serializer)}Dc(e){return new tf(HB.b_,this.serializer)}vc(e){return new oy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ao.provider={build:()=>new ao};class Sy extends ao{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){Q(this.persistence.referenceDelegate instanceof io,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new RE(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new tf(n=>io.b_(n,t),this.serializer)}}class sB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ol(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ry.bind(null,this.syncEngine),await sy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new By}()}createDatastore(e){const t=Ro(e.databaseInfo.databaseId),n=dE(e.databaseInfo);return _E(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,B){return new zD(n,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>Ol(this.syncEngine,t,0),function(){return pl.Ye()?new pl:new lE}())}createSyncEngine(e,t){return function(s,i,o,B,u,c,h){const f=new gy(s,i,o,B,u,c);return h&&(f.gc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=re(s);q(Mt,"RemoteStore shutting down."),i.la.add(5),await Zs(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}sB.provider={build:()=>new sB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="FirestoreClient";class Oy{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=dB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{q(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(q(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=$B(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ba(r,e){r.asyncQueue.verifyOperationInProgress(),q(kn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await nf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Fl(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ny(r);q(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Rl(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Rl(e.remoteStore,s)),r._onlineComponents=e}async function Ny(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){q(kn,"Using user provided OfflineComponentProvider");try{await ba(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;It("Error using user provided cache. Falling back to memory cache: "+t),await ba(r,new ao)}}else q(kn,"Using default OfflineComponentProvider"),await ba(r,new Sy(void 0));return r._offlineComponents}async function Ef(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(q(kn,"Using user provided OnlineComponentProvider"),await Fl(r,r._uninitializedComponentsProvider._online)):(q(kn,"Using default OnlineComponentProvider"),await Fl(r,new sB))),r._onlineComponents}function Fy(r){return Ef(r).then(e=>e.syncEngine)}async function Ly(r){const e=await Ef(r),t=e.eventManager;return t.onListen=my.bind(null,e.syncEngine),t.onUnlisten=Dy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ey.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yy.bind(null,e.syncEngine),t}function ky(r,e,t={}){const n=new In;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new iy({next:g=>{h.Va(),o.enqueueAndForget(()=>cy(i,f)),g.fromCache&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new Cy(B instanceof Ds?hD(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return uy(i,f)}(await Ly(r),r.asyncQueue,e,t,n)),n.promise}function xy(r,e){const t=new In;return r.asyncQueue.enqueueAndForget(async()=>Iy(await Fy(r),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Oo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Vy=class extends _f{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{convertValue(e,t="none"){switch(Ne(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ar(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[bs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ae(o.doubleValue));return new st(t)}convertGeoPoint(e){return new Ft(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Qs(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fe.fromString(e);Q(_C(n),9688,{name:e});const s=new vs(n.get(1),n.get(3)),i=new Y(n.popFirst(5));return s.isEqual(t)||Zt(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="AsyncQueue";class kl{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new AC(this,"async_queue_retry"),this.Hc=()=>{const n=Ra();n&&q(Ll,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=Ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Ra();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new In;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!Gr(e))throw e;q(Ll,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(n=>{throw this.Wc=n,this.Gc=!1,Zt("INTERNAL UNHANDLED ERROR: ",xl(n)),n}).then(n=>(this.Gc=!1,n))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=QB.createAndSchedule(this,e,t,n,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&X(47125,{tl:xl(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function xl(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Uo extends Po{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new kl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kl(e),this._firestoreClient=void 0,await e}}}function Hy(r,e){const t=typeof r=="object"?r:lB(),n=typeof r=="string"?r:Qi,s=_o(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=fh("firestore");i&&SE(s,...i)}return s}function Df(r){if(r._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Uy(r),r._firestoreClient}function Uy(r){var n,s,i,o;const e=r._freezeSettings(),t=yE(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Oy(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy extends My{constructor(e){super(),this.firestore=e}convertBytes(e){return new pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}class Pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends _f{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Oo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ar._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:Pe("string",Ar._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Mi extends Ar{data(e={}){return super.data(e)}}class vr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Mi(this._firestore,this._userDataWriter,n.key,n,new Pi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{ke(s._snapshot.query)?Za(s._snapshot.query):yB(s.query._query);const u=new Mi(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Pi(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const u=new Mi(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Pi(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:jy(B.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr._jsonSchemaVersion="firestore/querySnapshot/1.0",vr._jsonSchema={type:Pe("string",vr._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Qn(r){r=As(r,So);const e=As(r.firestore,Uo),t=Df(e),n=new Jy(e);return qy(r._query),ky(t,r._query).then(s=>new vr(e,n,r,s))}function Ky(r){return yf(As(r.firestore,Uo),[new DB(r._key,St.none())])}function zy(r,e){const t=As(r.firestore,Uo),n=PC(r),s=Gy(r.converter,e),i=LE(r.firestore);return yf(t,[kE(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,St.exists(!1))]).then(()=>n)}function yf(r,e){const t=Df(r);return xy(t,e)}const Vl="@firebase/firestore",Ml="4.17.2";(function(e,t=!0){qg(or),tr(new vn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new Uo(new aE(n.getProvider("auth-internal")),new cE(o,n.getProvider("app-check-internal")),em(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),Pt(Vl,Ml,e),Pt(Vl,Ml,"esm2020")})();var Qy="firebase",$y="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Qy,$y,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebasestorage.googleapis.com",Wy="storageBucket",Yy=2*60*1e3,Xy=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ht{constructor(e,t,n=0){super(Pa(e),`Firebase Storage: ${t} (${Pa(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gt||(Gt={}));function Pa(r){return"storage/"+r}function Zy(){const r="An unknown error occurred, please check the error payload for server response.";return new Ut(Gt.UNKNOWN,r)}function eI(){return new Ut(Gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tI(){return new Ut(Gt.CANCELED,"User canceled the upload/download.")}function nI(r){return new Ut(Gt.INVALID_URL,"Invalid URL '"+r+"'.")}function rI(r){return new Ut(Gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Gl(r){return new Ut(Gt.INVALID_ARGUMENT,r)}function wf(){return new Ut(Gt.APP_DELETED,"The Firebase app was deleted.")}function sI(r){return new Ut(Gt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Dt.makeFromUrl(e,t)}catch{return new Dt(e,"")}if(n.path==="")return n;throw rI(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(Ce){Ce.path.charAt(Ce.path.length-1)==="/"&&(Ce.path_=Ce.path_.slice(0,-1))}const o="(/(.*))?$",B=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(Ce){Ce.path_=decodeURIComponent(Ce.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${h}/b/${s}/o${g}`,"i"),v={bucket:1,path:3},L=t===If?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",j=new RegExp(`^https?://${L}/${s}/${M}`,"i"),he=[{regex:B,indices:u,postModify:i},{regex:y,indices:v,postModify:c},{regex:j,indices:{bucket:1,path:2},postModify:c}];for(let Ce=0;Ce<he.length;Ce++){const Te=he[Ce],Ee=Te.regex.exec(e);if(Ee){const A=Ee[Te.indices.bucket];let E=Ee[Te.indices.path];E||(E=""),n=new Dt(A,E),Te.postModify(n);break}}if(n==null)throw nI(e);return n}}class iI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(r,e,t){let n=1,s=null,i=null,o=!1,B=0;function u(){return B===2}let c=!1;function h(...M){c||(c=!0,e.apply(null,M))}function f(M){s=setTimeout(()=>{s=null,r(y,u())},M)}function g(){i&&clearTimeout(i)}function y(M,...j){if(c){g();return}if(M){g(),h.call(null,M,...j);return}if(u()||o){g(),h.call(null,M,...j);return}n<64&&(n*=2);let he;B===1?(B=2,he=0):he=(n+Math.random())*1e3,f(he)}let v=!1;function L(M){v||(v=!0,g(),!c&&(s!==null?(M||(B=2),clearTimeout(s),f(0)):M||(B=1)))}return f(0),i=setTimeout(()=>{o=!0,L(!0)},t),L}function aI(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(r){return r!==void 0}function Hl(r,e,t,n){if(n<e)throw Gl(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Gl(`Invalid value for '${r}'. Expected ${t} or less.`)}function uI(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Bo;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Bo||(Bo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,n,s,i,o,B,u,c,h,f,g=!0,y=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=B,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,L)=>{this.resolve_=v,this.reject_=L,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new Si(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=B=>{const u=B.loaded,c=B.lengthComputable?B.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const B=i.getErrorCode()===Bo.NO_ERROR,u=i.getStatus();if(!B||cI(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Bo.ABORT;n(!1,new Si(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;n(!0,new Si(c,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,B=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(B,B.getResponse());BI(u)?i(u):i()}catch(u){o(u)}else if(B!==null){const u=Zy();u.serverResponse=B.getErrorText(),this.errorCallback_?o(this.errorCallback_(B,u)):o(u)}else if(s.canceled){const u=this.appDelete_?wf():tI();o(u)}else{const u=eI();o(u)}};this.canceled_?t(!1,new Si(!1,null,!0)):this.backoffId_=oI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Si{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function hI(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function CI(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fI(r,e){e&&(r["X-Firebase-GMPID"]=e)}function dI(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function pI(r,e,t,n,s,i,o=!0,B=!1){const u=uI(r.urlParams),c=r.url+u,h=Object.assign({},r.headers);return fI(h,e),hI(h,t),CI(h,i),dI(h,n),new lI(c,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function mI(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this._service=e,t instanceof Dt?this._location=t:this._location=Dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new uo(e,t)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mI(this._location.path)}get storage(){return this._service}get parent(){const e=gI(this._location.path);if(e===null)return null;const t=new Dt(this._location.bucket,e);return new uo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sI(e)}}function Ul(r,e){const t=e==null?void 0:e[Wy];return t==null?null:Dt.makeFromBucketSpec(t,r)}function EI(r,e,t,n={}){r.host=`${e}:${t}`;const s=xr(e);s&&BB(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=s?"https":"http";const{mockUserToken:i}=n;i&&(r._overrideAuthToken=typeof i=="string"?i:gh(i,r.app.options.projectId))}class _I{constructor(e,t,n,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=If,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yy,this._maxUploadRetryTime=Xy,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=Ul(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Ul(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new uo(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new iI(wf());{const o=pI(e,this._appId,n,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Jl="@firebase/storage",jl="0.14.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="storage";function DI(r=lB(),e){r=gt(r);const n=_o(r,Tf).getImmediate({identifier:e}),s=fh("storage");return s&&yI(n,...s),n}function yI(r,e,t,n={}){EI(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new _I(t,n,s,e,or)}function wI(){tr(new vn(Tf,II,"PUBLIC").setMultipleInstances(!0)),Pt(Jl,jl,""),Pt(Jl,jl,"esm2020")}wI();function Af(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TI=Af,vf=new Js("auth","Firebase",Af());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new uB("@firebase/auth");function Gi(r,...e){co.logLevel<=ae.WARN&&co.warn(`Auth (${or}): ${r}`,...e)}function Hi(r,...e){co.logLevel<=ae.ERROR&&co.error(`Auth (${or}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(r,...e){throw eu(r,...e)}function Lt(r,...e){return eu(r,...e)}function ZB(r,e,t){const n={...TI(),[e]:t};return new Js("auth","Firebase",n).create(e,{appName:r.name})}function Xn(r){return ZB(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eu(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return vf.create(r,...e)}function ee(r,e,...t){if(!r)throw eu(e,...t)}function $t(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hi(e),new Error(e)}function nn(r,e){r||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function AI(){return ql()==="http:"||ql()==="https:"}function ql(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AI()||Xd()||"connection"in navigator)?navigator.onLine:!0}function RI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,nn(t>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Zd()}get(){return vI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r,e){nn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SI=new ti(3e4,6e4);function nu(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Kr(r,e,t,n,s={}){return bf(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=js({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const c={method:e,headers:u,...i};return Yd()||(c.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&xr(r.emulatorConfig.host)&&(c.credentials="include"),Rf.fetch()(await Pf(r,r.config.apiHost,t,B),c)})}async function bf(r,e,t){r._canInitEmulator=!1;const n={...bI,...e};try{const s=new NI(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oi(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oi(r,"user-disabled",o);const h=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ZB(r,h,c);tn(r,h)}}catch(s){if(s instanceof Ht)throw s;tn(r,"network-request-failed",{message:String(s)})}}async function OI(r,e,t,n,s={}){const i=await Kr(r,e,t,n,s);return"mfaPendingCredential"in i&&tn(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pf(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?tu(r.config,s):`${r.config.apiScheme}://${s}`;return PI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class NI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Lt(this.auth,"network-request-failed")),SI.get())})}}function Oi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Lt(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(r,e){return Kr(r,"POST","/v1/accounts:delete",e)}async function lo(r,e){return Kr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(r,e=!1){const t=gt(r),n=await t.getIdToken(e),s=ru(n);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Is(Sa(s.auth_time)),issuedAtTime:Is(Sa(s.iat)),expirationTime:Is(Sa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sa(r){return Number(r)*1e3}function ru(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=hh(t);return s?JSON.parse(s):(Hi("Failed to decode base64 JWT payload"),null)}catch(s){return Hi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kl(r){const e=ru(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ht&&kI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function kI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(r){var f;const e=r.auth,t=await r.getIdToken(),n=await Us(r,lo(e,{idToken:t}));ee(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?Sf(s.providerUserInfo):[],o=MI(r.providerData,i),B=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new oB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(r,h)}async function VI(r){const e=gt(r);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Sf(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(r,e){const t=await bf(r,{},async()=>{const n=js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Pf(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:n};return r.emulatorConfig&&xr(r.emulatorConfig.host)&&(u.credentials="include"),Rf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HI(r,e){return Kr(r,"POST","/v2/accounts:revokeToken",nu(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=Kl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await GI(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Rr;return n&&(ee(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new xI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Us(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LI(this,e)}reload(){return VI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Us(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:y,providerData:v,stsTokenManager:L}=t;ee(f&&L,e,"internal-error");const M=Rr.fromJSON(this.name,L);ee(typeof f=="string",e,"internal-error"),ln(n,e.name),ln(s,e.name),ee(typeof g=="boolean",e,"internal-error"),ee(typeof y=="boolean",e,"internal-error"),ln(i,e.name),ln(o,e.name),ln(B,e.name),ln(u,e.name),ln(c,e.name),ln(h,e.name);const j=new yt({uid:f,auth:e,email:s,emailVerified:g,displayName:n,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return v&&Array.isArray(v)&&(j.providerData=v.map(ne=>({...ne}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,n=!1){const s=new Rr;s.updateFromServerResponse(t);const i=new yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ho(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new Rr;B.updateFromIdToken(n);const u=new yt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function Wt(r){nn(r instanceof Function,"Expected a class definition");let e=zl.get(r);return e?(nn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zl.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Of.type="NONE";const Ql=Of;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(r,e,t){return`firebase:${r}:${e}:${t}`}class Zn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lo(this.auth,{idToken:e}).catch(()=>{});return t?yt._fromGetAccountInfoResponse(this.auth,t,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new Zn(Wt(Ql),e,n);const s=(await Promise.all(t.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let i=s[0]||Wt(Ql);const o=Ui(n,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const g=await lo(e,{idToken:h}).catch(()=>{});if(!g)break;f=await yt._fromGetAccountInfoResponse(e,g,h)}else f=yt._fromJSON(e,h);c!==i&&(B=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Zn(i,e,n):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Zn(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Mf(e))return"Webos";if(Ff(e))return"Safari";if((e.includes("chrome/")||Lf(e))&&!e.includes("edge/"))return"Chrome";if(xf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Nf(r=ze()){return/firefox\//i.test(r)}function Ff(r=ze()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lf(r=ze()){return/crios\//i.test(r)}function kf(r=ze()){return/iemobile/i.test(r)}function xf(r=ze()){return/android/i.test(r)}function Vf(r=ze()){return/blackberry/i.test(r)}function Mf(r=ze()){return/webos/i.test(r)}function su(r=ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function UI(r=ze()){var e;return su(r)&&!!((e=window.navigator)!=null&&e.standalone)}function JI(){return ep()&&document.documentMode===10}function Gf(r=ze()){return su(r)||xf(r)||Mf(r)||Vf(r)||/windows phone/i.test(r)||kf(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(r,e=[]){let t;switch(r){case"Browser":t=$l(ze());break;case"Worker":t=`${$l(ze())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(r,e={}){return Kr(r,"GET","/v2/passwordPolicy",nu(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=6;class zI{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??KI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wl(this),this.idTokenSubscription=new Wl(this),this.beforeStateQueue=new jI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted){try{this.persistenceManager=await Zn.create(this,e)}catch(o){Gi(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Zn.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){Gi(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lo(this,{idToken:e}),n=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Xn(this));const t=e?gt(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),t=new zI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await HI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(u=>{if(!o)if(typeof t!="function"&&t.error)t.error(u);else if(n)n(u);else throw u}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),s=ZB(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Gi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function iu(r){return gt(r)}class Wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=ap(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $I(r){ou=r}function WI(r){return ou.loadJS(r)}function YI(){return ou.gapiScript}function XI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(r,e){const t=_o(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(er(i,e??{}))return s;tn(s,"already-initialized")}return t.initialize({options:e})}function ew(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tw(r,e,t){const n=iu(r);ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Uf(e),{host:o,port:B}=nw(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){ee(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ee(er(c,n.config.emulator)&&er(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,xr(o)?BB(`${i}//${o}${u}`):rw()}function Uf(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nw(r){const e=Uf(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Yl(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Yl(o)}}}function Yl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(r,e){return OI(r,"POST","/v1/accounts:signInWithIdp",nu(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="http://localhost";class ir extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new ir(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return br(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,br(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,br(e,t)}buildRequest(){const e={requestUri:sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=js(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ni{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ir._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gn.credential(t,n)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ni{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ni{constructor(){super("twitter.com")}static credential(e,t){return ir._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return En.credential(t,n)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await yt._fromIdTokenResponse(e,n,s),o=Xl(n);return new kr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Xl(n);return new kr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Xl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Ht{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Co(e,t,n,s)}}function qf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(r,i,e,n):i})}async function iw(r,e,t=!1){const n=await Us(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return kr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(r,e,t=!1){const{auth:n}=r;if(Et(n.app))return Promise.reject(Xn(n));const s="reauthenticate";try{const i=await Us(r,qf(n,s,e,r),t);ee(i.idToken,n,"internal-error");const o=ru(i.idToken);ee(o,n,"internal-error");const{sub:B}=o;return ee(r.uid===B,n,"user-mismatch"),kr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(r,e,t=!1){if(Et(r.app))return Promise.reject(Xn(r));const n="signIn",s=await qf(r,n,e),i=await kr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function Bw(r,e,t,n){return gt(r).onIdTokenChanged(e,t,n)}function uw(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}const fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=1e3,lw=10;class zf extends Kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);JI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lw):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zf.type="LOCAL";const hw=zf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qf.type="SESSION";const $f=Qf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Jo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await Cw(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=au("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(g.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function dw(r){kt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function mw(){return Wf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebaseLocalStorageDb",Ew=1,po="firebaseLocalStorage",Xf="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jo(r,e){return r.transaction([po],e?"readwrite":"readonly").objectStore(po)}function _w(){const r=indexedDB.deleteDatabase(Yf);return new ri(r).toPromise()}function Zf(){const r=indexedDB.open(Yf,Ew);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(po,{keyPath:Xf})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(po)?e(n):(n.close(),await _w(),e(await Zf()))})})}async function Zl(r,e,t){const n=jo(r,!0).put({[Xf]:e,value:t});return new ri(n).toPromise()}async function Dw(r,e){const t=jo(r,!1).get(e),n=await new ri(t).toPromise();return n===void 0?null:n.value}function eh(r,e){const t=jo(r,!0).delete(e);return new ri(t).toPromise()}const yw=800,Iw=3;class ed{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Zf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Iw)throw n;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(mw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await pw(),!this.activeServiceWorker)return;this.sender=new fw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Zl(e,fo,"1"),await eh(e,fo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Dw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=jo(s,!1).getAll();return new ri(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Gi(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}ed.type="LOCAL";const ww=ed;new ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(r,e){return e?Wt(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Aw(r){return aw(r.auth,new Bu(r),r.bypassAuthState)}function vw(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),ow(t,new Bu(r),r.bypassAuthState)}async function Rw(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),iw(t,new Bu(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Aw;case"linkViaPopup":case"linkViaRedirect":return Rw;case"reauthViaPopup":case"reauthViaRedirect":return vw;default:tn(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new ti(2e3,1e4);class wr extends td{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bw.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="pendingRedirect",Ji=new Map;class Sw extends td{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const n=await Ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ow(r,e){const t=Lw(e),n=Fw(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Nw(r,e){Ji.set(r._key(),e)}function Fw(r){return Wt(r._redirectPersistence)}function Lw(r){return Ui(Pw,r.config.apiKey,r.name)}async function kw(r,e,t=!1){if(Et(r.app))return Promise.reject(Xn(r));const n=iu(r),s=Tw(n,e),o=await new Sw(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!nd(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xw&&this.cachedEventUids.clear(),this.cachedEventUids.has(th(e))}saveEventToCache(e){this.cachedEventUids.add(th(e)),this.lastProcessedEventTime=Date.now()}}function th(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function nd({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nd(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(r,e={}){return Kr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uw=/^https?/;async function Jw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Gw(r);for(const t of e)try{if(jw(t))return}catch{}tn(r,"unauthorized-domain")}function jw(r){const e=iB(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Uw.test(t))return!1;if(Hw.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new ti(3e4,6e4);function nh(){const r=kt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Kw(r){return new Promise((e,t)=>{var s,i,o;function n(){nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nh(),t(Lt(r,"network-request-failed"))},timeout:qw.get()})}if((i=(s=kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)n();else{const B=XI("iframefcb");return kt()[B]=()=>{gapi.load?n():t(Lt(r,"network-request-failed"))},WI(`${YI()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw ji=null,e})}let ji=null;function zw(r){return ji=ji||Kw(r),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new ti(5e3,15e3),$w="__/auth/iframe",Ww="emulator/auth/iframe",Yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zw(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?tu(e,Ww):`https://${r.config.authDomain}/${$w}`,n={apiKey:e.apiKey,appName:r.name,v:or},s=Xw.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${js(n).slice(1)}`}async function eT(r){const e=await zw(r),t=kt().gapi;return ee(t,r,"internal-error"),e.open({where:document.body,url:Zw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yw,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Lt(r,"network-request-failed"),B=kt().setTimeout(()=>{i(o)},Qw.get());function u(){kt().clearTimeout(B),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nT=500,rT=600,sT="_blank",iT="http://localhost";class rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oT(r,e,t,n=nT,s=rT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const u={...tT,width:n.toString(),height:s.toString(),top:i,left:o},c=ze().toLowerCase();t&&(B=Lf(c)?sT:t),Nf(c)&&(e=e||iT,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[y,v])=>`${g}${y}=${v},`,"");if(UI(c)&&B!=="_self")return aT(e||"",B),new rh(null);const f=window.open(e||"",B,h);ee(f,r,"popup-blocked");try{f.focus()}catch{}return new rh(f)}function aT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="__/auth/handler",uT="emulator/auth/handler",cT=encodeURIComponent("fac");async function sh(r,e,t,n,s,i){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:or,eventId:s};if(e instanceof jf){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",op(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ni){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await r._getAppCheckToken(),c=u?`#${cT}=${encodeURIComponent(u)}`:"";return`${lT(r)}?${js(B).slice(1)}${c}`}function lT({config:r}){return r.emulator?tu(r,uT):`https://${r.authDomain}/${BT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class hT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$f,this._completeRedirectFn=kw,this._overrideRedirectResult=Nw}async _openPopup(e,t,n,s){var o;nn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await sh(e,t,n,iB(),s);return oT(e,i,au())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await sh(e,t,n,iB(),s);return dw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await eT(e),n=new Vw(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Oa];i!==void 0&&t(!!i),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gf()||Ff()||su()}}const CT=hT;var ih="@firebase/auth",oh="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pT(r){tr(new vn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hf(r)},c=new QI(n,s,i,u);return ew(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),tr(new vn("auth-internal",e=>{const t=iu(e.getProvider("auth").getImmediate());return(n=>new fT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(ih,oh,dT(r)),Pt(ih,oh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=5*60,mT=ph("authIdTokenMaxAge")||gT;let ah=null;const ET=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>mT)return;const s=t==null?void 0:t.token;ah!==s&&(ah=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _T(r=lB()){const e=_o(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ZI(r,{popupRedirectResolver:CT,persistence:[ww,hw,$f]}),n=ph("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=ET(i.toString());uw(t,o,()=>o(t.currentUser)),Bw(t,B=>o(B))}}const s=Ch("auth");return s&&tw(t,`http://${s}`),t}function DT(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}$I({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Lt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",DT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pT("Browser");const yT={apiKey:"AIzaSyAYCBYJRVxLLCc1I8egL6pVYiu5_lw2m1M",authDomain:"bazamesaimoffficial.firebaseapp.com",databaseURL:"https://bazamesaimoffficial-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"bazamesaimoffficial",storageBucket:"bazamesaimoffficial.firebasestorage.app",messagingSenderId:"721640083441",appId:"1:721640083441:web:9fba6203972ba9179e7e50"},uu=_h(yT),jt=Hy(uu);DI(uu);_T(uu);let aB=[],Bh=[],uh=[];function IT(){return`
    ${go("home")}
    ${Md()}

    <div class="main-wrapper">
      <!-- 1. Featured Books Section -->
      <section class="content-section">
        <h2><i class="fas fa-book-open"></i> منتخب اسلامی کتب (Featured Books & PDFs)</h2>
        <div class="books-grid" id="homeBooksGrid">
          <p style="grid-column: 1/-1; text-align:center; color:#888;">Loading books...</p>
        </div>
      </section>

      <!-- 2. Latest Audios Section -->
      <section class="content-section">
        <h2><i class="fas fa-microphone-alt"></i> تازہ ترین صوتی محافل (Audio Mehfils)</h2>
        <div class="audio-list" id="homeAudioList">
          <p style="text-align:center; color:#888;">Loading audios...</p>
        </div>
      </section>

      <!-- 3. Videos Section -->
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو بیانات (Video Bayanat)</h2>
        <div class="video-grid" id="homeVideoGrid">
          <p style="text-align:center; color:#888;">Loading videos...</p>
        </div>
      </section>
    </div>

    ${mo()}
  `}function rd(r){const e=document.getElementById("homeBooksGrid");if(e){if(r.length===0){e.innerHTML='<p style="grid-column: 1/-1; text-align: center; color: #888;">ابھی کوئی کتاب موجود نہیں ہے</p>';return}e.innerHTML=r.map(t=>`
    <div class="book-card">
      <img src="${t.img}" alt="${t.title}">
      <h3>${t.title}</h3>
      <p style="font-size: 0.75rem; color: #666; margin-bottom: 8px;">${t.author}</p>
      <a class="btn-read" href="${t.url}" target="_blank">Read / Download</a>
    </div>
  `).join("")}}function wT(r){const e=document.getElementById("homeAudioList");if(e){if(r.length===0){e.innerHTML='<p style="text-align: center; color: #888;">ابھی کوئی آڈیو موجود نہیں ہے</p>';return}e.innerHTML=r.map(t=>`
    <div class="audio-item">
      <div>
        <strong>${t.title}</strong>
        <span style="font-size: 0.75rem; color: #777; display: block;">${t.author||""}</span>
      </div>
      <audio controls src="${t.url}"></audio>
    </div>
  `).join("")}}function TT(r){const e=document.getElementById("homeVideoGrid");if(e){if(r.length===0){e.innerHTML='<p style="text-align: center; color: #888;">ابھی کوئی ویڈیو موجود نہیں ہے</p>';return}e.innerHTML=r.map(t=>`
    <div class="video-card">
      <video width="100%" height="200" controls src="${t.url}"></video>
      <h4 style="padding: 10px;">${t.title}</h4>
    </div>
  `).join("")}}async function AT(){try{const[r,e,t]=await Promise.all([Qn(dn(jt,"books")),Qn(dn(jt,"audios")),Qn(dn(jt,"videos"))]);aB=r.docs.map(n=>({id:n.id,...n.data()})),Bh=e.docs.map(n=>({id:n.id,...n.data()})),uh=t.docs.map(n=>({id:n.id,...n.data()})),rd(aB),wT(Bh),TT(uh)}catch(r){console.error("Error loading home page data from Firestore:",r)}}function vT(){const r=document.getElementById("homeSearchInput"),e=document.getElementById("homeSearchBtn");if(e&&r){const t=()=>{const n=r.value.toLowerCase().trim(),s=aB.filter(i=>(i.title||"").toLowerCase().includes(n)||(i.author||"").toLowerCase().includes(n));rd(s)};e.addEventListener("click",t),r.addEventListener("keyup",n=>{n.key==="Enter"&&t()})}}function RT(){return`
    ${go("books")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-book"></i> تمام اسلامی کتب (All Books & PDFs)</h2>
        <p>تمام پی ڈی ایف کتب کی مکمل فہرست یہاں موجود ہے۔</p>
        <div class="books-grid" id="allBooksGrid">
          <p style="grid-column: 1/-1; text-align:center; color:#888;">Loading books...</p>
        </div>
      </section>
    </div>
    ${mo()}
  `}function bT(){return`
    ${go("audio")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-headphones"></i> آڈیو لائبریری (Audio Library)</h2>
        <p>تمام نعتیں اور بیانات یہاں سے سنیں۔</p>
      </section>
    </div>
    ${mo()}
  `}function PT(){return`
    ${go("videos")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو گیلری (Video Gallery)</h2>
        <p>تمام بیانات اور وڈیوز یہاں دستیاب ہیں۔</p>
      </section>
    </div>
    ${mo()}
  `}function ST(){return localStorage.getItem("isAdminLoggedIn")==="true"?`
        <div style="display: flex; min-height: 100vh; background-color: #f4f7f6;">
            <!-- Sidebar -->
            <aside style="width: 250px; background-color: #0b3c29; color: #fff; padding: 20px;">
                <h2 style="font-size: 1.2rem; margin-bottom: 30px; color: #d4af37;">Bazam-E-Saim Admin</h2>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 15px;"><a href="#admin" style="color: #fff; text-decoration: none; display: block; padding: 10px; background: #145a38; border-radius: 4px;">Dashboard</a></li>
                    <li style="margin-bottom: 15px;"><a href="#" id="admin-logout" style="color: #ffdddd; text-decoration: none; display: block; padding: 10px;">Logout</a></li>
                    <li style="margin-bottom: 15px;"><a href="#home" style="color: #fff; text-decoration: none; display: block; padding: 10px;">View Website</a></li>
                </ul>
            </aside>

            <!-- Main Content Area -->
            <main style="flex: 1; padding: 30px; overflow-y: auto;">
                <header style="margin-bottom: 30px;">
                    <h1 style="color: #0b3c29;">Admin Dashboard (Cloudinary + Firestore)</h1>
                    <p style="color: #666;">Manage your portal content seamlessly.</p>
                </header>

                <!-- Statistics Cards -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                    <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h3 style="color: #666; font-size: 0.9rem;">Total Books</h3>
                        <p id="stat-books" style="font-size: 1.8rem; font-weight: bold; color: #0b3c29; margin-top: 5px;">Loading...</p>
                    </div>
                    <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h3 style="color: #666; font-size: 0.9rem;">Total Audios</h3>
                        <p id="stat-audios" style="font-size: 1.8rem; font-weight: bold; color: #0b3c29; margin-top: 5px;">Loading...</p>
                    </div>
                    <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h3 style="color: #666; font-size: 0.9rem;">Total Videos</h3>
                        <p id="stat-videos" style="font-size: 1.8rem; font-weight: bold; color: #0b3c29; margin-top: 5px;">Loading...</p>
                    </div>
                </div>

                <!-- Add Content Form Section -->
                <div style="background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 40px;">
                    <h3 style="color: #0b3c29; margin-bottom: 20px; border-bottom: 2px solid #d4af37; padding-bottom: 8px; display: inline-block;">Add New Content</h3>
                    
                    <form id="admin-content-form">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Select Content Type</label>
                            <select id="content-type" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                                <option value="books">Book / PDF</option>
                                <option value="audios">Audio Mehfil</option>
                                <option value="videos">Video</option>
                            </select>
                        </div>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Title</label>
                            <input type="text" id="content-title" placeholder="Enter title..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Author / Speaker</label>
                            <input type="text" id="content-author" placeholder="Enter author or speaker..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Price (Rs.) — 0 chhorein agar free hai</label>
                            <input type="number" id="content-price" min="0" placeholder="e.g. 199" value="0" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                        </div>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Upload File (PDF/Audio/Video to Cloudinary)</label>
                            <input type="file" id="content-file" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Upload Thumbnail Image (to Cloudinary)</label>
                            <input type="file" id="content-img-file" accept="image/*" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>

                        <button type="submit" id="submit-btn" style="background-color: #0b3c29; color: #fff; border: none; padding: 12px 20px; font-size: 1rem; border-radius: 4px; cursor: pointer; width: 100%;">Upload to Cloudinary & Save to Firestore</button>
                    </form>
                </div>

                <!-- Manage / Uploaded Items Section -->
                <div style="background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h3 style="color: #0b3c29; margin-bottom: 20px; border-bottom: 2px solid #d4af37; padding-bottom: 8px; display: inline-block;">Existing Content List</h3>
                    <div style="margin-bottom: 15px;">
                        <label style="font-weight: bold; margin-right: 10px;">Filter By:</label>
                        <select id="filter-type" style="padding: 6px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="books">Books</option>
                            <option value="audios">Audios</option>
                            <option value="videos">Videos</option>
                        </select>
                    </div>
                    <div id="dashboard-items-container" style="overflow-x: auto;">
                        <p>Loading items...</p>
                    </div>
                </div>
            </main>
        </div>
    `:`
            <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f7f6;">
                <div style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); width: 100%; max-width: 400px;">
                    <h2 style="color: #0b3c29; margin-bottom: 20px; text-align: center;">Admin Login</h2>
                    <form id="admin-login-form">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Username</label>
                            <input type="text" id="login-username" placeholder="Enter username..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Password</label>
                            <input type="password" id="login-password" placeholder="Enter password..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </div>
                        <button type="submit" style="background-color: #0b3c29; color: #fff; border: none; padding: 12px; width: 100%; border-radius: 4px; cursor: pointer; font-size: 1rem;">Login</button>
                    </form>
                    <p style="margin-top: 15px; text-align: center;"><a href="#home" style="color: #0b3c29; text-decoration: none;">&larr; Back to Website</a></p>
                </div>
            </div>
        `}window.initAdminLogic=function(){const r=document.getElementById("admin-login-form");if(r){r.addEventListener("submit",c=>{c.preventDefault();const h=document.getElementById("login-username").value,f=document.getElementById("login-password").value;h==="admin"&&f==="admin1234"?(localStorage.setItem("isAdminLoggedIn","true"),window.location.hash="#admin",window.dispatchEvent(new HashChangeEvent("hashchange"))):alert("Ghalat username ya password hai!")});return}const e=document.getElementById("admin-logout");e&&e.addEventListener("click",c=>{c.preventDefault(),localStorage.removeItem("isAdminLoggedIn"),window.location.hash="#admin",window.dispatchEvent(new HashChangeEvent("hashchange"))});const t=document.getElementById("admin-content-form"),n=document.getElementById("filter-type");if(!t)return;const s="tbo1qowt",i="ml_default";async function o(c,h="auto"){var v;const f=new FormData;f.append("file",c),f.append("upload_preset",i);const g=await fetch(`https://api.cloudinary.com/v1_1/${s}/${h}/upload`,{method:"POST",body:f}),y=await g.json();if(!g.ok)throw new Error(((v=y.error)==null?void 0:v.message)||"Cloudinary upload failed");return y.secure_url}async function B(){try{const c=await Qn(dn(jt,"books")),h=await Qn(dn(jt,"audios")),f=await Qn(dn(jt,"videos"));document.getElementById("stat-books").innerText=c.size,document.getElementById("stat-audios").innerText=h.size,document.getElementById("stat-videos").innerText=f.size,await u(n.value)}catch(c){console.error("Error loading dashboard data: ",c)}}async function u(c){const h=document.getElementById("dashboard-items-container");h.innerHTML="<p>Loading...</p>";try{const f=await Qn(dn(jt,c));if(f.empty){h.innerHTML='<p style="color: #666;">No items found in this category.</p>';return}let g=`
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="background-color: #f4f7f6; border-bottom: 2px solid #ddd;">
                            <th style="padding: 10px;">Title</th>
                            <th style="padding: 10px;">Author / Speaker</th>
                            <th style="padding: 10px;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
            `;f.forEach(y=>{const v=y.data();g+=`
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px;">${v.title}</td>
                        <td style="padding: 10px;">${v.author}</td>
                        <td style="padding: 10px;">
                            <button class="btn-delete" data-id="${y.id}" data-col="${c}" style="background-color: #c0392b; color: #fff; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Delete</button>
                        </td>
                    </tr>
                `}),g+="</tbody></table>",h.innerHTML=g,document.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async v=>{const L=v.target.getAttribute("data-id"),M=v.target.getAttribute("data-col");if(confirm("Kya aap waqai is item ko delete karna chahte hain?"))try{await Ky(PC(jt,M,L)),alert("Item successfully delete ho gaya!"),B()}catch(j){console.error("Error deleting document: ",j),alert("Item delete karne mein nakami hui.")}})})}catch(f){console.error("Error fetching table items: ",f),h.innerHTML='<p style="color: red;">Error loading items.</p>'}}n.addEventListener("change",c=>{u(c.target.value)}),t.addEventListener("submit",async c=>{c.preventDefault();const h=document.getElementById("content-file").files[0],f=document.getElementById("content-img-file").files[0],g=document.getElementById("content-type").value,y=document.getElementById("submit-btn");y.disabled=!0,y.innerText="Uploading to Cloudinary... Please wait...";const v=document.getElementById("content-title").value,L=document.getElementById("content-author").value,M=Number(document.getElementById("content-price").value)||0;try{console.log("Uploading file to Cloudinary...");const j=await o(h,"auto");console.log("Uploading thumbnail to Cloudinary...");const ne=await o(f,"image");console.log("Saving data to Firestore database..."),await zy(dn(jt,g),{title:v,author:L,price:M,url:j,img:ne,createdAt:new Date}),y.innerText="Successfully Uploaded & Saved!",y.style.backgroundColor="#27ae60",alert("Successfully Uploaded & Saved!"),t.reset(),B()}catch(j){console.error("Error during upload/save:",j),alert("Upload fail ho gaya! Error: "+j.message)}finally{y.disabled=!1,y.innerText="Upload to Cloudinary & Save to Firestore",y.style.backgroundColor="#0b3c29"}}),B()};const pr=document.getElementById("app");function sd(){if(!pr){console.error("Error: #app element nahi mila.");return}const r=window.location.hash||"#home";if(console.log("Current route:",r),r==="#books"){pr.innerHTML=RT();return}if(r==="#audio"){pr.innerHTML=bT();return}if(r==="#videos"){pr.innerHTML=PT();return}if(r==="#admin"||r==="#/admin"||r==="#admindashboard"){pr.innerHTML=ST(),typeof window.initAdminLogic=="function"?window.initAdminLogic():console.error("initAdminLogic function nahi mili.");return}pr.innerHTML=IT(),AT(),vT()}window.addEventListener("hashchange",sd);window.addEventListener("DOMContentLoaded",sd);
